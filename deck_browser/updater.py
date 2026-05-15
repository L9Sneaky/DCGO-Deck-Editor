#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request
import zipfile
from dataclasses import dataclass
from pathlib import Path
from typing import Any


REPO_OWNER = "L9Sneaky"
REPO_NAME = "DCGO-Deck-Editor"
LATEST_RELEASE_API = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/releases/latest"
DEFAULT_VERSION = "v0.0.0"
UPDATE_TIMEOUT_SECONDS = 30
PRESERVED_TOP_LEVEL = {
    ".git",
    ".gitignore",
    "backups",
    "deck_browser_data",
}
PRESERVED_RELATIVE_DIRS = [
    Path("DCGO.app/Contents/drive_c/Program Files/DCGO_Standalone/Assets/Decks"),
    Path("DCGO.app/Contents/drive_c/Program Files/DCGO_Application-3/Assets/Decks"),
]
REQUIRED_PACKAGE_PATHS = [
    "deck_browser",
    "deck_browser/deck_browser_server.py",
    "Open Deck Editor.command",
]


@dataclass
class ReleaseInfo:
    tag_name: str
    published_at: str
    asset_name: str
    asset_url: str
    checksum_url: str | None = None


def package_root_from_file(path: Path | None = None) -> Path:
    return (path or Path(__file__)).resolve().parents[1]


def app_version_path(package_root: Path) -> Path:
    return package_root / "app_version.json"


def update_state_path(app_support_dir: Path) -> Path:
    return app_support_dir / "deck_browser" / "update_state.json"


def normalize_tag(value: Any) -> str:
    text = str(value or "").strip()
    return text or DEFAULT_VERSION


def version_tuple(value: str) -> tuple[int, ...]:
    text = normalize_tag(value).lstrip("vV")
    parts = re.findall(r"\d+", text)
    if not parts:
        return (0,)
    return tuple(int(part) for part in parts[:4])


def is_newer_version(latest: str, current: str) -> bool:
    latest_tuple = version_tuple(latest)
    current_tuple = version_tuple(current)
    max_len = max(len(latest_tuple), len(current_tuple))
    latest_tuple = latest_tuple + (0,) * (max_len - len(latest_tuple))
    current_tuple = current_tuple + (0,) * (max_len - len(current_tuple))
    return latest_tuple > current_tuple


def read_json(path: Path, default: dict[str, Any]) -> dict[str, Any]:
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
        return payload if isinstance(payload, dict) else default
    except (FileNotFoundError, json.JSONDecodeError, OSError):
        return default


def write_json(path: Path, payload: dict[str, Any]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, sort_keys=True) + "\n", encoding="utf-8")


def current_version(package_root: Path) -> str:
    payload = read_json(app_version_path(package_root), {})
    return normalize_tag(payload.get("version") or payload.get("tag") or DEFAULT_VERSION)


def version_payload(package_root: Path, app_support_dir: Path | None = None) -> dict[str, Any]:
    payload = read_json(app_version_path(package_root), {})
    version = normalize_tag(payload.get("version") or payload.get("tag") or DEFAULT_VERSION)
    state = read_json(update_state_path(app_support_dir), {}) if app_support_dir else {}
    return {
        "current_version": version,
        "release_date": payload.get("release_date") or payload.get("built_at") or "",
        "last_update_check": state.get("last_update_check") or "",
        "latest_version": state.get("latest_version") or "",
        "update_available": bool(state.get("update_available")),
        "status": state.get("status") or "idle",
        "message": state.get("message") or "",
    }


def request_json(url: str) -> dict[str, Any]:
    request = urllib.request.Request(
        url,
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "DCGO-Deck-Editor-Updater",
        },
    )
    with urllib.request.urlopen(request, timeout=UPDATE_TIMEOUT_SECONDS) as response:
        payload = json.loads(response.read().decode("utf-8"))
    if not isinstance(payload, dict):
        raise ValueError("GitHub response was not a JSON object.")
    return payload


def pick_release_asset(release: dict[str, Any]) -> ReleaseInfo:
    tag_name = normalize_tag(release.get("tag_name"))
    assets = release.get("assets") or []
    if not isinstance(assets, list):
        assets = []

    zip_assets = [
        asset for asset in assets
        if isinstance(asset, dict)
        and str(asset.get("name") or "").lower().endswith(".zip")
        and asset.get("browser_download_url")
    ]
    if not zip_assets:
        raise FileNotFoundError("Latest GitHub release does not include a downloadable ZIP asset.")

    preferred = next(
        (
            asset for asset in zip_assets
            if str(asset.get("name") or "").lower() in {"dcgo deck editor.zip", "dcgo-deck-editor.zip"}
        ),
        zip_assets[0],
    )
    checksum = next(
        (
            asset for asset in assets
            if isinstance(asset, dict)
            and str(asset.get("name") or "").lower() in {
                "sha256sums.txt",
                "sha256sum.txt",
                "dcgo deck editor.zip.sha256",
                "dcgo-deck-editor.zip.sha256",
            }
            and asset.get("browser_download_url")
        ),
        None,
    )
    return ReleaseInfo(
        tag_name=tag_name,
        published_at=str(release.get("published_at") or ""),
        asset_name=str(preferred.get("name") or ""),
        asset_url=str(preferred.get("browser_download_url") or ""),
        checksum_url=str(checksum.get("browser_download_url")) if checksum else None,
    )


def check_latest_release(package_root: Path, app_support_dir: Path) -> dict[str, Any]:
    state_file = update_state_path(app_support_dir)
    current = current_version(package_root)
    try:
        release = request_json(LATEST_RELEASE_API)
        info = pick_release_asset(release)
        available = is_newer_version(info.tag_name, current)
        payload = {
            "current_version": current,
            "latest_version": info.tag_name,
            "release_date": info.published_at,
            "update_available": available,
            "asset_name": info.asset_name,
            "asset_url": info.asset_url,
            "checksum_url": info.checksum_url,
            "last_update_check": time.strftime("%Y-%m-%d %H:%M:%S"),
            "status": "available" if available else "current",
            "message": f"Update {info.tag_name} is available." if available else "DCGO Deck Editor is up to date.",
        }
        write_json(state_file, payload)
        return payload
    except Exception as error:  # noqa: BLE001 - update checks must not stop the app.
        payload = {
            "current_version": current,
            "latest_version": "",
            "update_available": False,
            "last_update_check": time.strftime("%Y-%m-%d %H:%M:%S"),
            "status": "failed",
            "message": f"Update check failed: {error}",
        }
        write_json(state_file, payload)
        return payload


def download_file(url: str, target_path: Path) -> None:
    request = urllib.request.Request(url, headers={"User-Agent": "DCGO-Deck-Editor-Updater"})
    target_path.parent.mkdir(parents=True, exist_ok=True)
    with urllib.request.urlopen(request, timeout=UPDATE_TIMEOUT_SECONDS) as response, target_path.open("wb") as handle:
        shutil.copyfileobj(response, handle)


def sha256_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def verify_checksum_if_present(zip_path: Path, checksum_path: Path | None, asset_name: str) -> None:
    if not checksum_path or not checksum_path.is_file():
        return
    text = checksum_path.read_text(encoding="utf-8", errors="replace")
    expected = None
    for line in text.splitlines():
        if asset_name in line or not expected:
            match = re.search(r"\b([a-fA-F0-9]{64})\b", line)
            if match:
                expected = match.group(1).lower()
                if asset_name in line:
                    break
    if not expected:
        raise ValueError("Checksum file did not contain a SHA256 hash.")
    actual = sha256_file(zip_path)
    if actual.lower() != expected:
        raise ValueError("Downloaded ZIP checksum did not match the release checksum.")


def find_extracted_package_root(extract_root: Path) -> Path:
    candidates = [extract_root]
    candidates.extend(path for path in extract_root.iterdir() if path.is_dir())
    for candidate in candidates:
        if all((candidate / relative).exists() for relative in REQUIRED_PACKAGE_PATHS):
            return candidate
    raise FileNotFoundError("Downloaded ZIP does not look like a DCGO Deck Editor package.")


def validate_zip(zip_path: Path) -> None:
    if not zipfile.is_zipfile(zip_path):
        raise ValueError("Downloaded update is not a valid ZIP file.")
    with zipfile.ZipFile(zip_path) as archive:
        bad_file = archive.testzip()
        if bad_file:
            raise ValueError(f"Downloaded ZIP is corrupt at: {bad_file}")


def extract_zip(zip_path: Path, extract_root: Path) -> Path:
    validate_zip(zip_path)
    with zipfile.ZipFile(zip_path) as archive:
        extract_root_resolved = extract_root.resolve()
        for member in archive.infolist():
            target = (extract_root / member.filename).resolve()
            if target != extract_root_resolved and extract_root_resolved not in target.parents:
                raise ValueError(f"Unsafe path in ZIP: {member.filename}")
        archive.extractall(extract_root)
    return find_extracted_package_root(extract_root)


def safe_copytree(source: Path, target: Path) -> None:
    if target.exists():
        shutil.rmtree(target)
    shutil.copytree(source, target, symlinks=True)


def backup_current_install(package_root: Path) -> Path:
    backup_root = package_root / "backups" / f"update-backup-{time.strftime('%Y%m%d-%H%M%S')}"
    backup_root.mkdir(parents=True, exist_ok=False)
    for item in package_root.iterdir():
        if item.name in {"backups"}:
            continue
        destination = backup_root / item.name
        if item.is_dir():
            shutil.copytree(item, destination, symlinks=True)
        else:
            shutil.copy2(item, destination)
    return backup_root


def restore_backup(package_root: Path, backup_root: Path) -> None:
    for item in package_root.iterdir():
        if item.name == "backups":
            continue
        if item.is_dir():
            shutil.rmtree(item)
        else:
            item.unlink()
    for item in backup_root.iterdir():
        destination = package_root / item.name
        if item.is_dir():
            shutil.copytree(item, destination, symlinks=True)
        else:
            shutil.copy2(item, destination)


def replace_install(package_root: Path, new_root: Path) -> None:
    for item in package_root.iterdir():
        if item.name in PRESERVED_TOP_LEVEL:
            continue
        if item.is_dir():
            shutil.rmtree(item)
        else:
            item.unlink()

    for item in new_root.iterdir():
        if item.name in PRESERVED_TOP_LEVEL:
            continue
        destination = package_root / item.name
        if item.is_dir():
            shutil.copytree(item, destination, symlinks=True)
        else:
            shutil.copy2(item, destination)

    for relative in PRESERVED_RELATIVE_DIRS:
        backup_source = new_root / relative
        existing_target = package_root / relative
        if existing_target.exists() or not backup_source.exists():
            continue
        existing_target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copytree(backup_source, existing_target, symlinks=True)


def launcher_path(package_root: Path) -> Path:
    for name in ["Open Deck Browser.command", "Open Deck Editor.command"]:
        candidate = package_root / name
        if candidate.is_file():
            return candidate
    return package_root / "Open Deck Editor.command"


def install_downloaded_zip(package_root: Path, zip_path: Path, relaunch: bool = True) -> dict[str, Any]:
    backup_root = backup_current_install(package_root)
    try:
        with tempfile.TemporaryDirectory(prefix="dcgo-update-extract-") as tmp_dir:
            new_root = extract_zip(zip_path, Path(tmp_dir))
            replace_install(package_root, new_root)
    except Exception:
        restore_backup(package_root, backup_root)
        raise

    if relaunch:
        launcher = launcher_path(package_root)
        if launcher.is_file():
            subprocess.Popen(["open", str(launcher)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    return {"backup_path": str(backup_root), "relaunch": relaunch}


def install_latest_release(package_root: Path, app_support_dir: Path, relaunch: bool = True) -> dict[str, Any]:
    state_file = update_state_path(app_support_dir)
    state = check_latest_release(package_root, app_support_dir)
    if not state.get("update_available"):
        return {**state, "installed": False}

    with tempfile.TemporaryDirectory(prefix="dcgo-update-download-") as tmp_dir:
        tmp_root = Path(tmp_dir)
        zip_path = tmp_root / str(state["asset_name"] or "DCGO Deck Editor.zip")
        checksum_path = tmp_root / "SHA256SUMS.txt" if state.get("checksum_url") else None
        write_json(state_file, {**state, "status": "downloading", "message": "Downloading update..."})
        download_file(str(state["asset_url"]), zip_path)
        if checksum_path:
            download_file(str(state["checksum_url"]), checksum_path)
        verify_checksum_if_present(zip_path, checksum_path, str(state.get("asset_name") or zip_path.name))
        validate_zip(zip_path)
        write_json(state_file, {**state, "status": "installing", "message": "Installing update..."})
        install_result = install_downloaded_zip(package_root, zip_path, relaunch=relaunch)

    installed_state = {
        **state,
        **install_result,
        "installed": True,
        "current_version": state["latest_version"],
        "status": "installed",
        "message": "Update installed. Relaunch DCGO Deck Editor if it did not reopen automatically.",
    }
    write_json(state_file, installed_state)
    return installed_state


def install_worker(package_root: Path, app_support_dir: Path, zip_path: Path, asset_name: str = "", checksum_path: Path | None = None) -> int:
    state_file = update_state_path(app_support_dir)
    try:
        time.sleep(1.0)
        verify_checksum_if_present(zip_path, checksum_path, asset_name or zip_path.name)
        validate_zip(zip_path)
        result = install_downloaded_zip(package_root, zip_path, relaunch=True)
        write_json(state_file, {
            "status": "installed",
            "message": "Update installed. Relaunch DCGO Deck Editor if it did not reopen automatically.",
            **result,
        })
        return 0
    except Exception as error:  # noqa: BLE001
        write_json(state_file, {"status": "failed", "message": f"Update install failed: {error}"})
        return 1


def main() -> int:
    parser = argparse.ArgumentParser(description="DCGO Deck Editor updater")
    parser.add_argument("--install-worker", action="store_true", help="Run as detached install worker")
    parser.add_argument("--package-root", default=str(package_root_from_file()), help="Package root to update")
    parser.add_argument("--app-support-dir", required=True, help="App support directory")
    parser.add_argument("--zip", help="Downloaded ZIP path")
    parser.add_argument("--asset-name", default="")
    parser.add_argument("--checksum", help="Optional checksum file path")
    args = parser.parse_args()

    package_root = Path(args.package_root).expanduser().resolve()
    app_support_dir = Path(args.app_support_dir).expanduser().resolve()
    if args.install_worker:
        if not args.zip:
            print("--zip is required for --install-worker", file=sys.stderr)
            return 2
        return install_worker(
            package_root,
            app_support_dir,
            Path(args.zip).expanduser().resolve(),
            asset_name=args.asset_name,
            checksum_path=Path(args.checksum).expanduser().resolve() if args.checksum else None,
        )
    result = check_latest_release(package_root, app_support_dir)
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
