#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from string import Template
from typing import Any

from deck_data import load_app_data


APP_VERSION = "1.1.0-refactor"
SCRIPT_DIR = Path(__file__).resolve().parent
TEMPLATE_DIR = SCRIPT_DIR / "templates"
HTML_TEMPLATE_PATH = TEMPLATE_DIR / "deck_browser.html"
CSS_TEMPLATE_DIR = TEMPLATE_DIR / "css"
JS_TEMPLATE_DIR = TEMPLATE_DIR / "js"


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
    )


def build_html(app_data: dict[str, Any], output_path: Path) -> None:
    html = render_html(app_data)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(html, encoding="utf-8")


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
