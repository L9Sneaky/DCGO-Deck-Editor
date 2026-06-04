#!/usr/bin/env python3
from __future__ import annotations

import argparse
import importlib.util
import json
import py_compile
import sys
import tempfile
import zipfile
from pathlib import Path


REQUIRED_FILES = [
    "deck_browser/build_deck_browser.py",
    "deck_browser/deck_data.py",
    "deck_browser/deck_browser_server.py",
    "deck_browser/updater.py",
    "deck_browser/templates/deck_browser.html",
    "deck_browser/templates/css/00_base.css",
    "deck_browser/templates/css/35_simulator_embed.css",
    "deck_browser/templates/js/00_bootstrap.js",
    "deck_browser/templates/js/35_simulator_embed.js",
    "Open Deck Editor.command",
    "Open Deck Browser.command",
    "Open Deck Editor.bat",
    "app_version.json",
]


def expected_version(root: Path) -> str:
    payload = json.loads((root / "app_version.json").read_text(encoding="utf-8"))
    return str(payload.get("version") or "").strip()


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Validate a DCGO Deck Editor package tree.")
    parser.add_argument("--root", default=".", help="Package root to validate")
    parser.add_argument("--zip", help="Optional package zip to inspect")
    return parser.parse_args()


def load_builder(root: Path):
    builder_path = root / "deck_browser" / "build_deck_browser.py"
    spec = importlib.util.spec_from_file_location("build_deck_browser_check", builder_path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Could not load {builder_path}")
    sys.path.insert(0, str(builder_path.parent))
    module = importlib.util.module_from_spec(spec)
    try:
        spec.loader.exec_module(module)
    finally:
        sys.path.pop(0)
    return module


def check_required_files(root: Path) -> list[str]:
    errors: list[str] = []
    for relative_path in REQUIRED_FILES:
        path = root / relative_path
        if not path.exists():
            errors.append(f"Missing required file: {relative_path}")
    return errors


def check_python_compile(root: Path) -> list[str]:
    errors: list[str] = []
    for path in sorted((root / "deck_browser").glob("*.py")):
        try:
            py_compile.compile(str(path), doraise=True)
        except py_compile.PyCompileError as error:
            errors.append(str(error))
    return errors


def check_html_build(root: Path) -> list[str]:
    errors: list[str] = []
    version = expected_version(root)
    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp_root = Path(tmp_dir)
        app_support = tmp_root / "support"
        deck_root = tmp_root / "Decks"
        output_path = tmp_root / "current_decks.html"
        deck_root.mkdir(parents=True)
        (deck_root / "CheckDeck_test.txt").write_text(
            "Name: CheckDeck\n"
            "Key Card: -1\n"
            "Sort Index: 0\n\n"
            "// DeckList\n\n",
            encoding="utf-8",
        )

        try:
            builder = load_builder(root)
            data = builder.load_app_data(app_support, deck_root=deck_root)
            builder.build_html(data, output_path)
        except Exception as error:  # noqa: BLE001 - package check should report all failures as text.
            return [f"HTML build failed: {error}"]

        html = output_path.read_text(encoding="utf-8")
        for needle in ["DCGO Deck Browser", "CheckDeck", "app-version-label", version, "deck-test-react-root", "open-collection", "collection-main", "collection-import-list", "collection-edit-enabled"]:
            if needle not in html:
                errors.append(f"Generated HTML is missing: {needle}")
    return errors


def check_decktest_embed(root: Path) -> list[str]:
    dist_root = root / "deck_browser" / "decktest_dist"
    if not dist_root.is_dir():
        return [f"Missing Project Drasil DeckTest bundle directory: {dist_root.relative_to(root)}"]

    manifest_paths = [dist_root / "manifest.json", dist_root / ".vite" / "manifest.json"]
    if not any(path.is_file() for path in manifest_paths):
        return ["Missing Project Drasil DeckTest Vite manifest in deck_browser/decktest_dist"]

    entry_files = list((dist_root / "assets").glob("deckBrowserEmbed-*.js"))
    if not entry_files:
        return ["Missing Project Drasil DeckTest embed entry asset: deck_browser/decktest_dist/assets/deckBrowserEmbed-*.js"]

    return []


def check_zip(zip_path: Path) -> list[str]:
    if not zip_path.exists():
        return []
    errors: list[str] = []
    with zipfile.ZipFile(zip_path) as archive:
        names = set(archive.namelist())
    for required in REQUIRED_FILES:
        if not any(name.endswith(required) for name in names):
            errors.append(f"Zip is missing: {required}")
    return errors


def main() -> int:
    args = parse_args()
    root = Path(args.root).expanduser().resolve()
    zip_path = Path(args.zip).expanduser().resolve() if args.zip else None

    errors = []
    errors.extend(check_required_files(root))
    errors.extend(check_python_compile(root))
    errors.extend(check_decktest_embed(root))
    errors.extend(check_html_build(root))
    if zip_path:
        errors.extend(check_zip(zip_path))

    if errors:
        print("Package check failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Package check passed: {root}")
    if zip_path and zip_path.exists():
        print(f"Zip check passed: {zip_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
