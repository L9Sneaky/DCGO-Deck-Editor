#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import secrets
import shutil
import socket
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

import build_deck_browser


PAIRING_FILE = "local_pairing.json"
SYNC_CLIENT = "packaged-web-editor-local"


def pairing_path(app_support_dir: Path) -> Path:
    return app_support_dir / "deck_browser" / PAIRING_FILE


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


def pairing_token(app_support_dir: Path) -> str:
    payload = read_json(pairing_path(app_support_dir), {})
    token = str(payload.get("token") or "")
    if len(token) >= 32:
        return token
    token = secrets.token_urlsafe(32)
    write_json(pairing_path(app_support_dir), {"token": token, "createdAt": time.strftime("%Y-%m-%d %H:%M:%S")})
    return token


def verify_token(app_support_dir: Path, token: Any) -> None:
    if str(token or "") != pairing_token(app_support_dir):
        raise PermissionError("Invalid local sync token.")


def local_ip_candidates() -> list[str]:
    candidates: list[str] = []
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as handle:
            handle.connect(("8.8.8.8", 80))
            candidates.append(handle.getsockname()[0])
    except OSError:
        pass
    try:
        host_name = socket.gethostname()
        for _, _, _, _, sockaddr in socket.getaddrinfo(host_name, None, socket.AF_INET):
            ip = sockaddr[0]
            if not ip.startswith("127.") and ip not in candidates:
                candidates.append(ip)
    except OSError:
        pass
    return candidates or ["127.0.0.1"]


def status_payload(app_support_dir: Path, server_host: str, server_port: int) -> dict[str, Any]:
    token = pairing_token(app_support_dir)
    hosts = local_ip_candidates() if server_host in {"", "0.0.0.0", "127.0.0.1", "localhost"} else [server_host]
    urls = [f"http://{host}:{server_port}" for host in hosts]
    payload = {"url": urls[0], "token": token, "version": 1}
    return {
        "enabled": True,
        "token": token,
        "urls": urls,
        "pairingPayload": json.dumps(payload, separators=(",", ":")),
        "message": "Use this pairing payload on a phone connected to the same local network.",
    }


def timestamp_for_path(path: Path) -> str:
    return datetime.fromtimestamp(path.stat().st_mtime, timezone.utc).isoformat().replace("+00:00", "Z")


def parse_timestamp(value: Any) -> float:
    text = str(value or "")
    if not text:
        return 0.0
    try:
        return datetime.fromisoformat(text.replace("Z", "+00:00")).timestamp()
    except ValueError:
        return 0.0


def deck_payload(deck: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": deck["id"],
        "name": deck["name"],
        "file_name": deck["fileName"],
        "deck_text": deck["exportText"],
        "key_card": str(deck.get("keyCard") or "-1"),
        "sort_index": str(deck.get("sortIndex") or "0"),
        "revision": 1,
        "updated_at": timestamp_for_path(Path(deck["filePath"])),
        "deleted_at": None,
        "source_client": SYNC_CLIENT,
    }


def list_decks(app_support_dir: Path, deck_root: Path, token: Any) -> dict[str, Any]:
    verify_token(app_support_dir, token)
    app_data = build_deck_browser.load_app_data(app_support_dir, deck_root=deck_root)
    return {"decks": [deck_payload(deck) for deck in app_data["decks"]], "generatedAt": app_data["generatedAt"]}


def sanitize_file_name(value: Any, fallback_id: Any) -> str:
    raw = Path(str(value or fallback_id or "SyncedDeck.txt")).name
    if not raw.endswith(".txt"):
        raw += ".txt"
    return re.sub(r'[\\/:*?"<>|\x00-\x1f]', "", raw).strip(" .") or "SyncedDeck.txt"


def move_deleted_deck(app_support_dir: Path, deck_path: Path) -> None:
    if not deck_path.exists():
        return
    deleted_root = app_support_dir / "deck_browser" / "deleted_decks"
    deleted_root.mkdir(parents=True, exist_ok=True)
    shutil.move(str(deck_path), str(deleted_root / f"local-sync-{int(time.time())}-{deck_path.name}"))


def apply_mobile_decks(app_support_dir: Path, deck_root: Path, payload: dict[str, Any]) -> dict[str, Any]:
    verify_token(app_support_dir, payload.get("token"))
    incoming = payload.get("decks")
    if not isinstance(incoming, list):
        raise ValueError("Expected decks list.")
    existing = build_deck_browser.load_app_data(app_support_dir, deck_root=deck_root)
    local_by_id = {deck["id"]: deck for deck in existing["decks"]}
    pulled = 0
    skipped = 0
    deck_root.mkdir(parents=True, exist_ok=True)

    for deck in incoming:
        if not isinstance(deck, dict):
            skipped += 1
            continue
        deck_id = str(deck.get("id") or "")
        file_name = sanitize_file_name(deck.get("file_name"), deck_id)
        target = deck_root / file_name
        local = local_by_id.get(deck_id)
        local_updated = parse_timestamp(timestamp_for_path(Path(local["filePath"]))) if local else 0.0
        remote_updated = parse_timestamp(deck.get("updated_at"))
        if local and remote_updated < local_updated:
            skipped += 1
            continue
        if deck.get("deleted_at"):
            move_deleted_deck(app_support_dir, target)
            pulled += 1
            continue
        text = str(deck.get("deck_text") or "")
        if not text.strip():
            skipped += 1
            continue
        temp_path = target.with_name(target.name + ".tmp")
        temp_path.write_text(text, encoding="utf-8")
        temp_path.replace(target)
        pulled += 1

    latest = build_deck_browser.load_app_data(app_support_dir, deck_root=deck_root)
    return {
        "pulled": pulled,
        "skipped": skipped,
        "decks": [deck_payload(deck) for deck in latest["decks"]],
        "message": f"Local sync applied {pulled} mobile deck changes.",
    }
