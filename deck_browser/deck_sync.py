#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import shutil
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

import build_deck_browser


SYNC_CLIENT = "packaged-web-editor"
SYNC_FIELDS = "id,user_id,name,file_name,deck_text,key_card,sort_index,revision,updated_at,deleted_at,source_client"


def sync_state_path(app_support_dir: Path) -> Path:
    return app_support_dir / "deck_browser" / "sync_state.json"


def sync_session_path(app_support_dir: Path) -> Path:
    return app_support_dir / "deck_browser" / "sync_session.json"


def configured_client() -> tuple[str, str]:
    url = os.environ.get("DCGO_SUPABASE_URL") or os.environ.get("SUPABASE_URL") or ""
    anon_key = os.environ.get("DCGO_SUPABASE_ANON_KEY") or os.environ.get("SUPABASE_ANON_KEY") or ""
    return url.rstrip("/"), anon_key


def is_configured() -> bool:
    url, anon_key = configured_client()
    return url.startswith(("http://", "https://")) and len(anon_key) > 20


def read_json(path: Path, default: Any) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp_path = path.with_name(path.name + ".tmp")
    temp_path.write_text(json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    temp_path.replace(path)


def session_payload(app_support_dir: Path) -> dict[str, Any]:
    payload = read_json(sync_session_path(app_support_dir), {})
    return payload if isinstance(payload, dict) else {}


def public_status(app_support_dir: Path) -> dict[str, Any]:
    session = session_payload(app_support_dir)
    state = read_json(sync_state_path(app_support_dir), {})
    return {
        "configured": is_configured(),
        "authenticated": bool(session.get("access_token")),
        "email": session.get("email") or "",
        "lastSyncedAt": state.get("lastSyncedAt"),
        "message": state.get("message") or ("Ready to sync." if is_configured() else "Set DCGO_SUPABASE_URL and DCGO_SUPABASE_ANON_KEY to enable sync."),
    }


def supabase_request(
    app_support_dir: Path,
    method: str,
    path: str,
    payload: Any | None = None,
    access_token: str | None = None,
    extra_headers: dict[str, str] | None = None,
) -> Any:
    url, anon_key = configured_client()
    if not is_configured():
        raise RuntimeError("Supabase is not configured.")

    body = json.dumps(payload).encode("utf-8") if payload is not None else None
    headers = {
        "apikey": anon_key,
        "Authorization": f"Bearer {access_token or anon_key}",
        "Content-Type": "application/json",
    }
    if extra_headers:
        headers.update(extra_headers)
    request = urllib.request.Request(f"{url}{path}", data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            raw = response.read().decode("utf-8")
            return json.loads(raw) if raw else None
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", errors="replace")
        raise RuntimeError(detail or str(error)) from error


def sign_in(app_support_dir: Path, email: Any, password: Any, create_account: bool = False) -> dict[str, Any]:
    clean_email = str(email or "").strip()
    clean_password = str(password or "")
    if not clean_email or not clean_password:
        raise ValueError("Email and password are required.")
    path = "/auth/v1/signup" if create_account else "/auth/v1/token?grant_type=password"
    payload = supabase_request(app_support_dir, "POST", path, {"email": clean_email, "password": clean_password})
    access_token = payload.get("access_token")
    refresh_token = payload.get("refresh_token")
    user = payload.get("user") or {}
    if not access_token:
        raise RuntimeError("Supabase did not return an access token.")
    session = {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "email": user.get("email") or clean_email,
        "user_id": user.get("id"),
        "expires_at": int(time.time()) + int(payload.get("expires_in") or 3600),
    }
    write_json(sync_session_path(app_support_dir), session)
    return public_status(app_support_dir)


def sign_out(app_support_dir: Path) -> dict[str, Any]:
    path = sync_session_path(app_support_dir)
    if path.exists():
        path.unlink()
    write_json(sync_state_path(app_support_dir), {"message": "Signed out.", "lastSyncedAt": None})
    return public_status(app_support_dir)


def access_token(app_support_dir: Path) -> str:
    session = session_payload(app_support_dir)
    token = str(session.get("access_token") or "")
    if not token:
        raise RuntimeError("Sign in before syncing.")
    return token


def parse_remote_timestamp(value: Any) -> float:
    text = str(value or "")
    if not text:
        return 0.0
    normalized = text.replace("Z", "+00:00")
    try:
        from datetime import datetime

        return datetime.fromisoformat(normalized).timestamp()
    except ValueError:
        return 0.0


def file_timestamp(path: Path) -> str:
    from datetime import datetime, timezone

    return datetime.fromtimestamp(path.stat().st_mtime, timezone.utc).isoformat().replace("+00:00", "Z")


def sanitize_remote_file_name(deck: dict[str, Any]) -> str:
    raw_name = str(deck.get("file_name") or deck.get("id") or "SyncedDeck.txt")
    name = Path(raw_name).name
    if not name.endswith(".txt"):
        name = f"{name}.txt"
    name = re.sub(r'[\\/:*?"<>|\x00-\x1f]', "", name).strip(" .") or "SyncedDeck.txt"
    return name


def local_deck_payload(deck: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": deck["id"],
        "name": deck["name"],
        "file_name": deck["fileName"],
        "deck_text": deck["exportText"],
        "key_card": str(deck.get("keyCard") or "-1"),
        "sort_index": str(deck.get("sortIndex") or "0"),
        "revision": 1,
        "updated_at": file_timestamp(Path(deck["filePath"])),
        "deleted_at": None,
        "source_client": SYNC_CLIENT,
    }


def load_remote_decks(app_support_dir: Path) -> list[dict[str, Any]]:
    query = urllib.parse.urlencode({"select": SYNC_FIELDS, "order": "updated_at.asc"})
    payload = supabase_request(app_support_dir, "GET", f"/rest/v1/decks?{query}", access_token=access_token(app_support_dir))
    return payload if isinstance(payload, list) else []


def upsert_remote_deck(app_support_dir: Path, deck: dict[str, Any]) -> None:
    session = session_payload(app_support_dir)
    payload = {**deck, "user_id": session.get("user_id")}
    supabase_request(
        app_support_dir,
        "POST",
        "/rest/v1/decks?on_conflict=id",
        payload,
        access_token=access_token(app_support_dir),
        extra_headers={"Prefer": "resolution=merge-duplicates,return=minimal"},
    )


def write_remote_deck(app_support_dir: Path, deck_root: Path, remote: dict[str, Any]) -> Path | None:
    file_name = sanitize_remote_file_name(remote)
    target_path = deck_root / file_name
    if remote.get("deleted_at"):
        if target_path.exists():
            deleted_root = app_support_dir / "deck_browser" / "deleted_decks"
            deleted_root.mkdir(parents=True, exist_ok=True)
            shutil.move(str(target_path), str(deleted_root / f"sync-{int(time.time())}-{target_path.name}"))
        return None
    deck_root.mkdir(parents=True, exist_ok=True)
    temp_path = target_path.with_name(target_path.name + ".tmp")
    temp_path.write_text(str(remote.get("deck_text") or ""), encoding="utf-8")
    temp_path.replace(target_path)
    return target_path


def sync_now(app_support_dir: Path, deck_root: Path) -> dict[str, Any]:
    if not is_configured():
        raise RuntimeError("Supabase is not configured.")
    token = access_token(app_support_dir)
    app_data = build_deck_browser.load_app_data(app_support_dir, deck_root=deck_root)
    local_payloads = [local_deck_payload(deck) for deck in app_data["decks"]]
    local_by_id = {deck["id"]: deck for deck in local_payloads}
    remote_decks = load_remote_decks(app_support_dir)
    remote_by_id = {deck["id"]: deck for deck in remote_decks}

    pulled = 0
    pushed = 0
    skipped = 0

    for remote in remote_decks:
        local = local_by_id.get(remote.get("id"))
        if local is None or parse_remote_timestamp(remote.get("updated_at")) > parse_remote_timestamp(local.get("updated_at")):
            write_remote_deck(app_support_dir, deck_root, remote)
            pulled += 1
        else:
            skipped += 1

    app_data = build_deck_browser.load_app_data(app_support_dir, deck_root=deck_root)
    local_payloads = [local_deck_payload(deck) for deck in app_data["decks"]]
    remote_by_id = {deck["id"]: deck for deck in load_remote_decks(app_support_dir)}
    for local in local_payloads:
        remote = remote_by_id.get(local["id"])
        if remote is None or parse_remote_timestamp(local.get("updated_at")) >= parse_remote_timestamp(remote.get("updated_at")):
            local["revision"] = int(remote.get("revision") or 0) + 1 if remote else 1
            upsert_remote_deck(app_support_dir, local)
            pushed += 1
        else:
            skipped += 1

    status = {
        "configured": True,
        "authenticated": bool(token),
        "pulled": pulled,
        "pushed": pushed,
        "skipped": skipped,
        "lastSyncedAt": time.strftime("%Y-%m-%d %H:%M:%S"),
        "message": f"Synced: {pulled} pulled, {pushed} pushed.",
    }
    write_json(sync_state_path(app_support_dir), status)
    return {**public_status(app_support_dir), **status}
