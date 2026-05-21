#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import shutil
import sys
from pathlib import Path
from string import Template
from typing import Any

from deck_data import load_app_data


APP_VERSION = "v1.1.1"
SCRIPT_DIR = Path(__file__).resolve().parent
TEMPLATE_DIR = SCRIPT_DIR / "templates"
HTML_TEMPLATE_PATH = TEMPLATE_DIR / "deck_browser.html"
CSS_TEMPLATE_DIR = TEMPLATE_DIR / "css"
JS_TEMPLATE_DIR = TEMPLATE_DIR / "js"
SIMULATOR_DIST_CANDIDATES = [
    SCRIPT_DIR / "decktest_dist",
    SCRIPT_DIR.parent / "decktest_dist",
    SCRIPT_DIR.parent / "digimon-tcg-simulator" / "frontend" / "dist",
]
SIMULATOR_DIST_DIR = next((path for path in SIMULATOR_DIST_CANDIDATES if path.is_dir()), SIMULATOR_DIST_CANDIDATES[0])
SIMULATOR_MANIFEST_PATH = SIMULATOR_DIST_DIR / "manifest.json"
SIMULATOR_MANIFEST_FALLBACK = SIMULATOR_DIST_DIR / ".vite" / "manifest.json"
EMBED_ASSET_DIR = "decktest-assets"


def load_template_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except FileNotFoundError as error:
        raise FileNotFoundError(f"Missing deck browser template: {path}") from error


def load_template_parts(directory: Path, suffix: str) -> str:
    paths = sorted(directory.glob(f"*{suffix}"))
    if not paths:
        raise FileNotFoundError(f"Missing deck browser template parts: {directory}/*{suffix}")
    return "\n\n".join(load_template_text(path).rstrip("\n") for path in paths)


def build_html_template() -> str:
    html = load_template_text(HTML_TEMPLATE_PATH)
    css = load_template_parts(CSS_TEMPLATE_DIR, ".css")
    js = load_template_parts(JS_TEMPLATE_DIR, ".js")
    return Template(html).safe_substitute(
        deck_browser_css=css,
        deck_browser_js=js,
    )


HTML_TEMPLATE = Template(build_html_template())


def load_embed_manifest() -> dict[str, Any] | None:
    manifest_path = SIMULATOR_MANIFEST_PATH if SIMULATOR_MANIFEST_PATH.is_file() else SIMULATOR_MANIFEST_FALLBACK
    if not manifest_path.is_file():
        return None
    try:
        return json.loads(manifest_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        return None


def build_embed_assets_html() -> str:
    manifest = load_embed_manifest()
    if not manifest:
        return ""
    entry_key = next(
        (
            key
            for key, value in manifest.items()
            if isinstance(value, dict) and value.get("isEntry") and "deckBrowserEmbed" in key
        ),
        None,
    )
    if not entry_key:
        return ""

    def collect_css(key: str, seen: set[str], css_files: list[str]) -> None:
        if key in seen or key not in manifest:
            return
        seen.add(key)
        entry = manifest[key]
        for css_file in entry.get("css", []) or []:
            if css_file not in css_files:
                css_files.append(css_file)
        for imported in entry.get("imports", []) or []:
            collect_css(imported, seen, css_files)

    entry = manifest[entry_key]
    css_files: list[str] = []
    collect_css(entry_key, set(), css_files)

    tags: list[str] = []
    for css_file in css_files:
        tags.append(f"<link rel=\"stylesheet\" href=\"{EMBED_ASSET_DIR}/{css_file}\">")
    if entry.get("file"):
        tags.append(f"<script type=\"module\" src=\"{EMBED_ASSET_DIR}/{entry['file']}\"></script>")
    return "\n".join(tags)


def sync_embed_assets(output_path: Path) -> None:
    if not SIMULATOR_DIST_DIR.is_dir():
        return
    target_dir = output_path.parent / EMBED_ASSET_DIR
    if target_dir.exists():
        shutil.rmtree(target_dir)
    target_dir.mkdir(parents=True, exist_ok=True)
    for item in SIMULATOR_DIST_DIR.iterdir():
        destination = target_dir / item.name
        if item.is_dir():
            shutil.copytree(item, destination, dirs_exist_ok=True)
        else:
            shutil.copy2(item, destination)

    assets_dir = SIMULATOR_DIST_DIR / "assets"
    if assets_dir.is_dir():
        root_assets = output_path.parent / "assets"
        if root_assets.exists():
            shutil.rmtree(root_assets)
        shutil.copytree(assets_dir, root_assets, dirs_exist_ok=True)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Build a local visual browser for current DCGO decks.")
    parser.add_argument("--app-support-dir", required=True, help="DCGO app support directory")
    parser.add_argument("--deck-root", help="Deck folder to edit directly; defaults to app-support-dir/userdata/Decks")
    parser.add_argument("--output", required=True, help="Output HTML path")
    return parser.parse_args()


def render_html(app_data: dict[str, Any]) -> str:
    return HTML_TEMPLATE.substitute(
        app_data=json.dumps(app_data, ensure_ascii=False),
        generated_at=json.dumps(app_data["generatedAt"], ensure_ascii=False),
        manifest_source=json.dumps(app_data["manifestSource"], ensure_ascii=False),
        deck_root=json.dumps(app_data["deckRoot"], ensure_ascii=False),
        app_version=json.dumps(app_data.get("appVersion", APP_VERSION), ensure_ascii=False),
        deck_browser_embed_assets=build_embed_assets_html(),
    )


def build_html(app_data: dict[str, Any], output_path: Path) -> None:
    html = render_html(app_data)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(html, encoding="utf-8")
    sync_embed_assets(output_path)


def main() -> int:
    args = parse_args()
    app_support_dir = Path(args.app_support_dir).expanduser()
    deck_root = Path(args.deck_root).expanduser() if args.deck_root else None
    output_path = Path(args.output).expanduser()

    try:
        app_data = load_app_data(app_support_dir, deck_root=deck_root)
    except FileNotFoundError as error:
        print(str(error), file=sys.stderr)
        return 1

    build_html(app_data, output_path)

    print(f"Deck browser written to {output_path}")
    print(f"Decks loaded: {len(app_data['decks'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
