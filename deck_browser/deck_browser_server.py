#!/usr/bin/env python3
from __future__ import annotations

import argparse
import base64
import json
import mimetypes
import os
import re
import secrets
import shutil
import string
import subprocess
import sys
import tempfile
import threading
import time
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import unquote, urlparse

import build_deck_browser
import updater


SUFFIX_ALPHABET = string.ascii_letters + string.digits
MAX_REQUEST_BYTES = 64 * 1024 * 1024
DECKLIST_LINE_RE = re.compile(r"^\s*//\s*Deck\s*List\s*$", flags=re.IGNORECASE)
DECK_CARD_LINE_RE = re.compile(r"^\s*(\d+)\s+(.+?)\s+([A-Za-z0-9-]+(?:_[A-Za-z0-9-]+)?)\s*$")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Serve the DCGO deck browser with local write actions.")
    parser.add_argument("--app-support-dir", required=True, help="DCGO app support directory")
    parser.add_argument("--deck-root", help="Deck folder to edit directly; defaults to app-support-dir/userdata/Decks")
    parser.add_argument("--output", required=True, help="Static HTML output path to keep in sync")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind; keep this on localhost")
    parser.add_argument("--port", type=int, default=0, help="Port to bind, or 0 for an available port")
    parser.add_argument("--open", action="store_true", help="Open the browser after the server starts")
    return parser.parse_args()


def normalize_deck_name(value: Any) -> str:
    name = re.sub(r"\s+", " ", str(value or "")).strip()
    return name[:80] or "NewDeck"


def filename_stem_for_deck(name: str) -> str:
    stem = re.sub(r'[\\/:*?"<>|\x00-\x1f]', "", name)
    stem = re.sub(r"\s+", " ", stem).strip(" .")
    return stem[:48].strip(" .") or "NewDeck"


def random_suffix(length: int = 11) -> str:
    return "".join(secrets.choice(SUFFIX_ALPHABET) for _ in range(length))


def timestamp_suffix() -> str:
    return time.strftime("%Y%m%d-%H%M%S")


def deck_file_text(name: str) -> str:
    return "\n".join(
        [
            f"Name: {name}",
            "Key Card: -1",
            "Sort Index: 0",
            "",
            "// DeckList",
            "",
        ]
    )


def create_deck_file(deck_root: Path, requested_name: Any) -> Path:
    deck_name = normalize_deck_name(requested_name)
    stem = filename_stem_for_deck(deck_name)
    deck_root.mkdir(parents=True, exist_ok=True)

    for _ in range(100):
        deck_path = deck_root / f"{stem}_{random_suffix()}.txt"
        try:
            with deck_path.open("x", encoding="utf-8") as deck_file:
                deck_file.write(deck_file_text(deck_name))
            return deck_path
        except FileExistsError:
            continue

    raise FileExistsError("Could not generate a unique deck filename.")


def unique_deck_path(deck_root: Path, stem: str, preferred_suffix: str | None = None, exclude: Path | None = None) -> Path:
    suffixes = [preferred_suffix] if preferred_suffix else []
    suffixes.extend(random_suffix() for _ in range(99))

    exclude_resolved = exclude.resolve() if exclude else None
    for suffix in suffixes:
        if not suffix:
            continue
        deck_path = (deck_root / f"{stem}_{suffix}.txt").resolve()
        if exclude_resolved and deck_path == exclude_resolved:
            return deck_path
        if not deck_path.exists():
            return deck_path

    raise FileExistsError("Could not generate a unique deck filename.")


def suffix_from_deck_file(deck_path: Path) -> str | None:
    match = re.search(r"_([A-Za-z0-9]{11})$", deck_path.stem)
    return match.group(1) if match else None


def replace_deck_name_in_text(text: str, deck_name: str) -> str:
    normalized = text.replace("\r\n", "\n").replace("\r", "\n")
    if re.search(r"^Name:.*$", normalized, flags=re.MULTILINE):
        normalized = re.sub(r"^Name:.*$", f"Name: {deck_name}", normalized, count=1, flags=re.MULTILINE)
    else:
        normalized = f"Name: {deck_name}\n" + normalized
    return normalize_deck_text(normalized)


def rename_deck_file(deck_root: Path, file_name: Any, requested_name: Any) -> Path:
    deck_path = deck_path_from_file_name(deck_root, file_name)
    deck_name = normalize_deck_name(requested_name)
    stem = filename_stem_for_deck(deck_name)
    target_path = unique_deck_path(deck_root, stem, suffix_from_deck_file(deck_path), exclude=deck_path)
    payload = replace_deck_name_in_text(deck_path.read_text(encoding="utf-8", errors="replace"), deck_name)

    temp_path = deck_path.with_name(deck_path.name + ".tmp")
    temp_path.write_text(payload, encoding="utf-8")
    temp_path.replace(deck_path)
    if target_path != deck_path:
        deck_path.replace(target_path)
        return target_path
    return deck_path


def duplicate_deck_file(deck_root: Path, file_name: Any, requested_name: Any) -> Path:
    deck_path = deck_path_from_file_name(deck_root, file_name)
    deck_name = normalize_deck_name(requested_name)
    stem = filename_stem_for_deck(deck_name)
    target_path = unique_deck_path(deck_root, stem)
    payload = replace_deck_name_in_text(deck_path.read_text(encoding="utf-8", errors="replace"), deck_name)

    with target_path.open("x", encoding="utf-8") as duplicate_file:
        duplicate_file.write(payload)
    return target_path


def move_deleted_deck(app_support_dir: Path, deck_root: Path, file_name: Any) -> Path:
    deck_path = deck_path_from_file_name(deck_root, file_name)
    deleted_root = app_support_dir / "deck_browser" / "deleted_decks"
    deleted_root.mkdir(parents=True, exist_ok=True)

    target_path = deleted_root / f"{timestamp_suffix()}_{deck_path.name}"
    counter = 1
    while target_path.exists():
        target_path = deleted_root / f"{timestamp_suffix()}_{counter}_{deck_path.name}"
        counter += 1

    shutil.move(str(deck_path), str(target_path))
    return target_path


def sanitize_export_name(value: Any) -> str:
    name = re.sub(r"\s+", " ", str(value or "").strip())
    name = re.sub(r'[\\/:*?"<>|\x00-\x1f]', "", name)
    return name.strip(" .") or "Deck"


def export_image_path(app_support_dir: Path, deck_name: Any) -> Path:
    export_dir = app_support_dir / "deck_browser" / "exports"
    export_dir.mkdir(parents=True, exist_ok=True)
    file_name = sanitize_export_name(deck_name)
    return export_dir / f"{file_name}.png"


def find_deck_by_path(app_data: dict[str, Any], deck_path: Path) -> dict[str, Any]:
    deck_path_resolved = deck_path.resolve()
    for deck in app_data["decks"]:
        if Path(str(deck.get("filePath") or "")).resolve() == deck_path_resolved:
            return deck
    raise FileNotFoundError(f"Deck was not found after reload: {deck_path}")


def deck_path_from_file_name(deck_root: Path, file_name: Any) -> Path:
    requested_name = Path(str(file_name or "")).name
    if not requested_name.endswith(".txt"):
        raise ValueError("Deck file name must end with .txt.")
    if requested_name in {"", ".", ".."}:
        raise ValueError("Invalid deck file name.")

    deck_root_resolved = deck_root.resolve()
    deck_path = (deck_root / requested_name).resolve()
    if deck_root_resolved not in deck_path.parents:
        raise ValueError("Deck file must stay inside the deck folder.")
    if not deck_path.is_file():
        raise FileNotFoundError(f"Deck file not found: {requested_name}")
    return deck_path


def normalize_deck_text(value: Any) -> str:
    text = str(value or "").replace("\r\n", "\n").replace("\r", "\n")
    text = text.lstrip("\ufeff")
    if not text.strip():
        raise ValueError("Deck text must not be empty.")

    lines = text.split("\n")
    first_content = next((line for line in lines if line.strip()), "")
    if not first_content.lstrip().startswith("Name:"):
        raise ValueError("Deck text must start with Name:.")

    decklist_index = next((index for index, line in enumerate(lines) if DECKLIST_LINE_RE.match(line)), None)
    if decklist_index is None:
        first_card_index = next((index for index, line in enumerate(lines) if DECK_CARD_LINE_RE.match(line)), None)
        if first_card_index is None:
            raise ValueError("Deck text must include // DeckList.")
        insert_at = first_card_index
        if insert_at > 0 and lines[insert_at - 1].strip():
            lines.insert(insert_at, "")
            insert_at += 1
        lines.insert(insert_at, "// DeckList")
        insert_at += 1
        if insert_at < len(lines) and lines[insert_at].strip():
            lines.insert(insert_at, "")
    else:
        if lines[decklist_index].strip() != "// DeckList":
            lines[decklist_index] = "// DeckList"
        if decklist_index > 0 and lines[decklist_index - 1].strip():
            lines.insert(decklist_index, "")
            decklist_index += 1
        if decklist_index + 1 < len(lines) and lines[decklist_index + 1].strip():
            lines.insert(decklist_index + 1, "")

    normalized = "\n".join(lines).strip()
    return normalized + "\n"


def save_deck_file(deck_root: Path, file_name: Any, text: Any) -> Path:
    deck_path = deck_path_from_file_name(deck_root, file_name)
    payload = normalize_deck_text(text)
    temp_path = deck_path.with_name(deck_path.name + ".tmp")
    temp_path.write_text(payload, encoding="utf-8")
    temp_path.replace(deck_path)
    return deck_path


def sync_saved_deck_to_channels(app_support_dir: Path, deck_path: Path) -> None:
    install_roots = []
    prefixes_root = app_support_dir / "prefixes"
    if prefixes_root.exists():
        install_roots.extend(prefixes_root.glob("*/drive_c/Program Files/DCGO_Application-3"))

    legacy_prefix = app_support_dir / "prefix" / "drive_c" / "Program Files" / "DCGO_Application-3"
    if legacy_prefix.exists():
        install_roots.append(legacy_prefix)

    for install_root in install_roots:
        deck_target_root = install_root / "Assets" / "Decks"
        if not deck_target_root.exists():
            continue
        deck_target_root.mkdir(parents=True, exist_ok=True)
        target_path = deck_target_root / deck_path.name
        if target_path.exists():
            try:
                if deck_path.resolve().samefile(target_path.resolve()):
                    continue
            except OSError:
                pass
        shutil.copy2(deck_path, target_path)


class DeckBrowserHandler(BaseHTTPRequestHandler):
    app_support_dir: Path
    deck_root: Path | None
    output_path: Path
    package_root: Path

    server_version = "DCGODeckBrowser/1.0"

    def log_message(self, format: str, *args: Any) -> None:
        print(f"{self.address_string()} - {format % args}", file=sys.stderr)

    def send_json(self, status: int, payload: dict[str, Any]) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def send_text(self, status: int, body: str, content_type: str = "text/plain; charset=utf-8") -> None:
        encoded = body.encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(encoded)

    def current_deck_root(self) -> Path:
        return self.deck_root or self.app_support_dir / "userdata" / "Decks"

    def load_app_data(self, force_manifest_refresh: bool = False) -> dict[str, Any]:
        return build_deck_browser.load_app_data(
            self.app_support_dir,
            force_manifest_refresh=force_manifest_refresh,
            deck_root=self.current_deck_root(),
        )

    def load_html(self) -> str:
        app_data = self.load_app_data()
        html = build_deck_browser.render_html(app_data)
        self.output_path.parent.mkdir(parents=True, exist_ok=True)
        self.output_path.write_text(html, encoding="utf-8")
        build_deck_browser.sync_embed_assets(self.output_path)
        return html

    def try_send_static(self, path: str) -> bool:
        if path in {"", "/"}:
            return False
        root = self.output_path.parent.resolve()
        candidate = (root / path.lstrip("/")).resolve()
        if root not in candidate.parents and candidate != root:
            return False
        if not candidate.is_file():
            return False

        content_type, _ = mimetypes.guess_type(candidate.name)
        content_type = content_type or "application/octet-stream"
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(candidate.stat().st_size))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        try:
            with candidate.open("rb") as handle:
                shutil.copyfileobj(handle, self.wfile)
        except (BrokenPipeError, ConnectionResetError, ConnectionAbortedError):
            return True
        return True

    def try_send_favicon(self) -> bool:
        candidates = [
            self.output_path.parent / "favicon.ico",
            self.output_path.parent / build_deck_browser.EMBED_ASSET_DIR / "favicon.ico",
        ]
        for candidate in candidates:
            if candidate.is_file():
                return self.try_send_static("/" + str(candidate.relative_to(self.output_path.parent)))
        self.send_response(204)
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        return True

    def read_json_body(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length > MAX_REQUEST_BYTES:
            raise ValueError("Request is too large.")
        raw_body = self.rfile.read(length)
        if not raw_body:
            return {}
        payload = json.loads(raw_body.decode("utf-8"))
        if not isinstance(payload, dict):
            raise ValueError("Expected a JSON object.")
        return payload

    def do_GET(self) -> None:
        path = unquote(urlparse(self.path).path)
        if path in {"/", "/current_decks.html"}:
            try:
                self.send_text(200, self.load_html(), "text/html; charset=utf-8")
            except Exception as error:
                self.send_text(500, f"Could not build deck browser: {error}\n")
            return

        if path == "/health":
            self.send_json(200, {"ok": True})
            return

        if path == "/api/version":
            self.send_json(200, updater.version_payload(self.package_root, self.app_support_dir))
            return

        if path == "/favicon.ico":
            self.try_send_favicon()
            return

        if self.try_send_static(path):
            return

        self.send_text(404, "Not found\n")

    def do_POST(self) -> None:
        path = urlparse(self.path).path
        if path == "/api/decks":
            try:
                payload = self.read_json_body()
                deck_root = self.current_deck_root()
                deck_path = create_deck_file(deck_root, payload.get("name"))
                app_data = self.load_app_data()
                self.send_json(201, {"deck": find_deck_by_path(app_data, deck_path)})
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/decks/save":
            try:
                payload = self.read_json_body()
                deck_root = self.current_deck_root()
                deck_path = save_deck_file(deck_root, payload.get("fileName"), payload.get("text"))
                if self.deck_root is None:
                    sync_saved_deck_to_channels(self.app_support_dir, deck_path)
                app_data = self.load_app_data()
                self.send_json(200, {"deck": find_deck_by_path(app_data, deck_path)})
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/decks/rename":
            try:
                payload = self.read_json_body()
                deck_root = self.current_deck_root()
                deck_path = rename_deck_file(deck_root, payload.get("fileName"), payload.get("name"))
                app_data = self.load_app_data()
                self.send_json(200, {"deck": find_deck_by_path(app_data, deck_path)})
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/decks/duplicate":
            try:
                payload = self.read_json_body()
                deck_root = self.current_deck_root()
                deck_path = duplicate_deck_file(deck_root, payload.get("fileName"), payload.get("name"))
                app_data = self.load_app_data()
                self.send_json(201, {"deck": find_deck_by_path(app_data, deck_path)})
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/decks/delete":
            try:
                payload = self.read_json_body()
                deck_root = self.current_deck_root()
                deleted_path = move_deleted_deck(self.app_support_dir, deck_root, payload.get("fileName"))
                self.send_json(200, {"deletedPath": str(deleted_path)})
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/card-database/update":
            try:
                self.read_json_body()
                app_data = self.load_app_data(force_manifest_refresh=True)
                html = build_deck_browser.render_html(app_data)
                self.output_path.parent.mkdir(parents=True, exist_ok=True)
                self.output_path.write_text(html, encoding="utf-8")
                self.send_json(
                    200,
                    {
                        "cardCount": len(app_data["cardCatalog"]),
                        "deckCount": len(app_data["decks"]),
                        "manifestSource": app_data["manifestSource"],
                    },
                )
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/check-update":
            try:
                self.read_json_body()
                self.send_json(200, updater.check_latest_release(self.package_root, self.app_support_dir))
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/install-update":
            try:
                self.read_json_body()
                state = updater.check_latest_release(self.package_root, self.app_support_dir)
                if not state.get("update_available"):
                    self.send_json(200, state)
                    return

                temp_root = Path(tempfile.mkdtemp(prefix="dcgo-update-"))
                zip_path = temp_root / str(state.get("asset_name") or "DCGO Deck Editor.zip")
                checksum_path = temp_root / "SHA256SUMS.txt" if state.get("checksum_url") else None
                updater.write_json(
                    updater.update_state_path(self.app_support_dir),
                    {**state, "status": "downloading", "message": "Downloading update..."},
                )
                updater.download_file(str(state["asset_url"]), zip_path)
                if checksum_path:
                    updater.download_file(str(state["checksum_url"]), checksum_path)
                updater.verify_checksum_if_present(zip_path, checksum_path, str(state.get("asset_name") or zip_path.name))
                updater.validate_zip(zip_path)

                updater.write_json(
                    updater.update_state_path(self.app_support_dir),
                    {**state, "status": "installing", "message": "Installing update. The app will close briefly."},
                )
                command = [
                    sys.executable,
                    str(Path(updater.__file__).resolve()),
                    "--install-worker",
                    "--package-root",
                    str(self.package_root),
                    "--app-support-dir",
                    str(self.app_support_dir),
                    "--zip",
                    str(zip_path),
                    "--asset-name",
                    str(state.get("asset_name") or zip_path.name),
                ]
                if checksum_path:
                    command.extend(["--checksum", str(checksum_path)])
                subprocess.Popen(command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
                self.send_json(
                    202,
                    {
                        **state,
                        "status": "installing",
                        "message": "Update downloaded. Installing now; this server will stop and the app will relaunch if macOS allows it.",
                    },
                )
                threading.Thread(target=self.server.shutdown, daemon=True).start()
            except Exception as error:
                updater.write_json(
                    updater.update_state_path(self.app_support_dir),
                    {
                        "status": "failed",
                        "message": f"Update install failed: {error}",
                        "current_version": updater.current_version(self.package_root),
                    },
                )
                self.send_json(400, {"error": str(error)})
            return

        if path == "/api/export-image":
            try:
                payload = self.read_json_body()
                image_data = payload.get("imageData")
                if not image_data:
                    raise ValueError("Missing image data.")
                overwrite = bool(payload.get("overwrite"))
                target_path = export_image_path(self.app_support_dir, payload.get("deckName"))

                if target_path.exists() and not overwrite:
                    self.send_json(409, {"error": "exists", "path": str(target_path)})
                    return

                raw_bytes = base64.b64decode(image_data, validate=True)
                target_path.write_bytes(raw_bytes)
                self.send_json(200, {"savedPath": str(target_path)})
            except Exception as error:
                self.send_json(400, {"error": str(error)})
            return

        else:
            self.send_json(404, {"error": "Not found"})
            return


def main() -> int:
    args = parse_args()
    handler_class = DeckBrowserHandler
    handler_class.app_support_dir = Path(args.app_support_dir).expanduser()
    handler_class.deck_root = Path(args.deck_root).expanduser() if args.deck_root else None
    handler_class.output_path = Path(args.output).expanduser()
    handler_class.package_root = Path(__file__).resolve().parents[1]

    def startup_update_check() -> None:
        if str(os.environ.get("DCGO_DISABLE_AUTO_UPDATE", "")).lower() in {"1", "true", "yes"}:
            updater.write_json(
                updater.update_state_path(handler_class.app_support_dir),
                {
                    "current_version": updater.current_version(handler_class.package_root),
                    "status": "disabled",
                    "message": "Automatic update checks are disabled.",
                    "update_available": False,
                },
            )
            return
        updater.check_latest_release(handler_class.package_root, handler_class.app_support_dir)

    server = ThreadingHTTPServer((args.host, args.port), handler_class)
    host, port = server.server_address[:2]
    url = f"http://{host}:{port}/"

    print(f"DCGO deck browser server: {url}", flush=True)
    print("Keep this window open while using deck write actions and card database updates.", flush=True)
    if args.open:
        webbrowser.open(url)

    threading.Thread(target=startup_update_check, daemon=True).start()

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping deck browser server.", flush=True)
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
