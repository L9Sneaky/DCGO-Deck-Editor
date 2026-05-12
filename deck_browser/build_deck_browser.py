#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import sys
import textwrap
import time
import urllib.error
import urllib.request
from collections import OrderedDict
from pathlib import Path
from string import Template
from typing import Any


MANIFEST_URL = (
    "https://raw.githubusercontent.com/TakaOtaku/Digimon-Card-App/main/src/"
    "assets/cardlists/PreparedDigimonCardsENG.json"
)
IMAGE_BASE_URL = "https://raw.githubusercontent.com/TakaOtaku/Digimon-Card-App/main/src/"
CACHE_MAX_AGE_SECONDS = 12 * 60 * 60
DECK_LINE_RE = re.compile(r"^\s*(\d+)\s+(.+?)\s+([A-Za-z0-9-]+(?:_[A-Za-z0-9-]+)?)\s*$")
SCRIPT_DIR = Path(__file__).resolve().parent
TEMPLATE_DIR = SCRIPT_DIR / "templates"
HTML_TEMPLATE_PATH = TEMPLATE_DIR / "deck_browser.html"
CSS_TEMPLATE_PATH = TEMPLATE_DIR / "deck_browser.css"
JS_TEMPLATE_PATH = TEMPLATE_DIR / "deck_browser.js"


def load_template_text(path: Path) -> str:
    try:
        return path.read_text(encoding="utf-8")
    except FileNotFoundError as error:
        raise FileNotFoundError(f"Missing deck browser template: {path}") from error


def build_html_template() -> Template:
    html = load_template_text(HTML_TEMPLATE_PATH)
    css = load_template_text(CSS_TEMPLATE_PATH).rstrip("\n")
    js = load_template_text(JS_TEMPLATE_PATH).rstrip("\n")
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


def ensure_text(value: Any) -> str:
    if value is None:
        return ""
    return str(value).strip()


def none_if_dash(value: Any) -> str | None:
    text = ensure_text(value)
    if not text or text == "-":
        return None
    return text


def parse_intish(value: Any) -> int | None:
    text = none_if_dash(value)
    if text is None:
        return None
    digits = re.sub(r"[^0-9-]", "", text)
    if digits in {"", "-"}:
        return None
    try:
        return int(digits)
    except ValueError:
        return None


def split_multi_value(value: Any) -> list[str]:
    text = none_if_dash(value)
    if text is None:
        return []
    return [part.strip() for part in text.split("/") if part.strip()]


def load_manifest(cache_file: Path, force_refresh: bool = False) -> tuple[list[dict[str, Any]], str]:
    cache_file.parent.mkdir(parents=True, exist_ok=True)
    cache_exists = cache_file.is_file()
    cache_is_fresh = cache_exists and (time.time() - cache_file.stat().st_mtime) <= CACHE_MAX_AGE_SECONDS

    if cache_is_fresh and not force_refresh:
        try:
            return json.loads(cache_file.read_text(encoding="utf-8")), "cached manifest"
        except json.JSONDecodeError:
            pass

    try:
        with urllib.request.urlopen(MANIFEST_URL, timeout=30) as response:
            payload = response.read().decode("utf-8")
        cache_file.write_text(payload, encoding="utf-8")
        return json.loads(payload), "live GitHub manifest"
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
        if force_refresh:
            raise RuntimeError(f"Could not update card database from GitHub: {error}") from error
        if cache_exists:
            return json.loads(cache_file.read_text(encoding="utf-8")), "cached manifest (offline fallback)"
        return [], "no manifest available"


def build_manifest_maps(raw_manifest: list[dict[str, Any]]) -> tuple[dict[str, dict[str, Any]], dict[str, dict[str, Any]]]:
    by_id: dict[str, dict[str, Any]] = {}
    by_number: dict[str, dict[str, Any]] = {}

    for entry in raw_manifest:
        card_id = ensure_text(entry.get("id"))
        card_number = ensure_text(entry.get("cardNumber"))
        if card_id:
            by_id[card_id] = entry
        if card_number and card_number not in by_number:
            by_number[card_number] = entry

    return by_id, by_number


COLOR_ORDER = ["Red", "Blue", "Yellow", "Green", "Purple", "Black", "White"]


def color_profile_for_cards(cards: list[dict[str, Any]]) -> list[dict[str, Any]]:
    color_weights: dict[str, float] = {}

    for card in cards:
        colors = card.get("colors") or []
        if not colors:
            continue

        weight = float(card.get("count") or 0) / len(colors)
        for color in colors:
            color_weights[color] = color_weights.get(color, 0.0) + weight

    total_weight = sum(color_weights.values())
    if total_weight <= 0:
        return []

    order_index = {color: index for index, color in enumerate(COLOR_ORDER)}
    profile = sorted(
        color_weights.items(),
        key=lambda item: (-item[1], order_index.get(item[0], len(COLOR_ORDER)), item[0]),
    )

    return [
        {
            "color": color,
            "weight": round(weight, 3),
            "percent": round((weight / total_weight) * 100),
        }
        for color, weight in profile
    ]


def card_number_key(card: dict[str, Any]) -> str:
    raw_value = ensure_text(card.get("cardNumber") or card.get("code"))
    return raw_value.split("_", 1)[0].upper()


def unique_card_number_count(cards: list[dict[str, Any]]) -> int:
    return len({key for card in cards if (key := card_number_key(card))})


def digivolve_costs_for_entry(entry: dict[str, Any]) -> list[int]:
    costs: list[int] = []
    for condition in entry.get("digivolveCondition") or []:
        if not isinstance(condition, dict):
            continue
        cost = parse_intish(condition.get("cost"))
        if cost is not None and cost not in costs:
            costs.append(cost)
    return sorted(costs)


def digivolve_conditions_for_entry(entry: dict[str, Any]) -> list[dict[str, Any]]:
    conditions: list[dict[str, Any]] = []
    seen: set[tuple[str, int | None, int | None]] = set()

    for condition in entry.get("digivolveCondition") or []:
        if not isinstance(condition, dict):
            continue

        color = none_if_dash(condition.get("color"))
        cost = parse_intish(condition.get("cost"))
        level = parse_intish(condition.get("level"))
        if not color and cost is None and level is None:
            continue

        key = (color or "", cost, level)
        if key in seen:
            continue

        conditions.append({"color": color, "cost": cost, "level": level})
        seen.add(key)

    return conditions


def effect_sections_for_entry(entry: dict[str, Any]) -> list[dict[str, str]]:
    sections: list[dict[str, str]] = []
    fields = [
        ("Special Digivolve", entry.get("specialDigivolve")),
        ("DNA Digivolve", entry.get("dnaDigivolve")),
        ("Burst Digivolve", entry.get("burstDigivolve")),
        ("DigiXros", entry.get("digiXros")),
        ("Assembly", entry.get("assembly")),
        ("Link Requirement", entry.get("linkRequirement")),
        ("Main Effect", entry.get("effect")),
        ("Option Effect", entry.get("optionCardEffect")),
        ("Arts Digivolve", entry.get("dualEffect")),
        ("Inherited", entry.get("digivolveEffect")),
        ("Security", entry.get("securityEffect")),
        ("Rule", entry.get("rule")),
        ("ACE", entry.get("aceEffect")),
        ("Link Effect", entry.get("linkEffect")),
        ("Notes", entry.get("notes")),
    ]
    for label, raw_value in fields:
        value = none_if_dash(raw_value)
        if value:
            sections.append({"label": label, "text": value})
    return sections


def restriction_for_entry(entry: dict[str, Any]) -> str:
    restrictions = entry.get("restrictions") or {}
    if isinstance(restrictions, dict):
        return none_if_dash(restrictions.get("english")) or "Unrestricted"
    return none_if_dash(restrictions) or "Unrestricted"


def copy_limit_for_entry(entry: dict[str, Any]) -> int:
    restriction = restriction_for_entry(entry).lower()
    if "banned" in restriction:
        return 0
    if "restricted to 1" in restriction:
        return 1

    rule = none_if_dash(entry.get("rule")) or ""
    if re.search(r"include\s+up\s+to\s+50\s+copies.*card'?s?\s+card\s+number", rule, re.IGNORECASE):
        return 50

    return 4


def card_metadata_for_code(
    code: str,
    fallback_name: str,
    by_id: dict[str, dict[str, Any]],
    by_number: dict[str, dict[str, Any]],
) -> dict[str, Any]:
    entry = by_id.get(code)
    if entry is None and "_" in code:
        entry = by_number.get(code.split("_", 1)[0])
    if entry is None:
        entry = by_number.get(code)

    if entry is None:
        return {
            "resolvedName": fallback_name,
            "cardNumber": code.split("_", 1)[0],
            "imageUrl": None,
            "type": None,
            "colors": [],
            "attribute": None,
            "stage": None,
            "digitype": [],
            "dp": None,
            "playCost": None,
            "digivolveCosts": [],
            "digivolveConditions": [],
            "level": None,
            "illustrator": None,
            "hasAce": False,
            "isAltArt": "_P" in code or "-E" in code,
            "restriction": "Unknown",
            "copyLimit": 4,
            "effectText": "",
            "effectSections": [],
        }

    name = entry.get("name") or {}
    image_path = none_if_dash(entry.get("cardImage"))
    effect_sections = effect_sections_for_entry(entry)

    return {
        "resolvedName": none_if_dash(name.get("english")) or fallback_name,
        "cardNumber": none_if_dash(entry.get("cardNumber")) or code.split("_", 1)[0],
        "imageUrl": (IMAGE_BASE_URL + image_path) if image_path else None,
        "type": none_if_dash(entry.get("cardType")),
        "colors": split_multi_value(entry.get("color")),
        "attribute": none_if_dash(entry.get("attribute")),
        "stage": none_if_dash(entry.get("form")),
        "digitype": split_multi_value(entry.get("type")),
        "dp": parse_intish(entry.get("dp")),
        "playCost": parse_intish(entry.get("playCost")),
        "digivolveCosts": digivolve_costs_for_entry(entry),
        "digivolveConditions": digivolve_conditions_for_entry(entry),
        "level": parse_intish(entry.get("cardLv")),
        "illustrator": none_if_dash(entry.get("illustrator")),
        "hasAce": bool(none_if_dash(entry.get("aceEffect"))),
        "isAltArt": "_P" in code or "-E" in code,
        "restriction": restriction_for_entry(entry),
        "copyLimit": copy_limit_for_entry(entry),
        "effectText": " ".join(section["text"] for section in effect_sections),
        "effectSections": effect_sections,
    }


def build_card_catalog(raw_manifest: list[dict[str, Any]], by_id: dict[str, dict[str, Any]], by_number: dict[str, dict[str, Any]]) -> list[dict[str, Any]]:
    catalog: list[dict[str, Any]] = []
    seen: set[str] = set()

    for entry in raw_manifest:
        card_id = ensure_text(entry.get("id"))
        if not card_id or card_id in seen:
            continue

        name = entry.get("name") or {}
        fallback_name = none_if_dash(name.get("english")) or card_id
        meta = card_metadata_for_code(card_id, fallback_name, by_id, by_number)
        card = {
            "count": 0,
            "name": meta["resolvedName"] or fallback_name,
            "printedName": meta["resolvedName"] or fallback_name,
            "code": card_id,
            "cardNumber": meta["cardNumber"],
            "imageUrl": meta["imageUrl"],
            "type": meta["type"],
            "colors": meta["colors"],
            "attribute": meta["attribute"],
            "stage": meta["stage"],
            "digitype": meta["digitype"],
            "dp": meta["dp"],
            "playCost": meta["playCost"],
            "digivolveCosts": meta["digivolveCosts"],
            "digivolveConditions": meta["digivolveConditions"],
            "level": meta["level"],
            "illustrator": meta["illustrator"],
            "hasAce": meta["hasAce"],
            "isAltArt": meta["isAltArt"],
            "restriction": meta["restriction"],
            "copyLimit": meta["copyLimit"],
            "effectText": meta["effectText"],
            "effectSections": meta["effectSections"],
        }
        card["searchBlob"] = " ".join(
            filter(
                None,
                [
                    card["name"],
                    card["printedName"],
                    card["code"],
                    card["cardNumber"],
                    card["type"],
                    card["attribute"],
                    card["stage"],
                    " ".join(card["colors"]),
                    " ".join(card["digitype"]),
                    card["illustrator"],
                    card["effectText"],
                ],
            )
        ).lower()
        catalog.append(card)
        seen.add(card_id)

    return sorted(catalog, key=lambda card: (card["cardNumber"] or card["code"], card["code"]))


def parse_deck_file(deck_path: Path, by_id: dict[str, dict[str, Any]], by_number: dict[str, dict[str, Any]]) -> dict[str, Any] | None:
    if deck_path.name == "Deck lists will save here.txt":
        return None

    raw_text = deck_path.read_text(encoding="utf-8", errors="replace")
    lines = raw_text.splitlines()

    deck_name = deck_path.stem
    key_card = ""
    sort_index = "0"
    cards: list[dict[str, Any]] = []

    for line in lines:
        if line.startswith("Name:"):
            deck_name = line.split(":", 1)[1].strip() or deck_name
            continue
        if line.startswith("Key Card:"):
            key_card = line.split(":", 1)[1].strip()
            continue
        if line.startswith("Sort Index:"):
            sort_index = line.split(":", 1)[1].strip() or "0"
            continue

        match = DECK_LINE_RE.match(line)
        if not match:
            continue

        count = int(match.group(1))
        printed_name = match.group(2).strip()
        code = match.group(3).strip()
        meta = card_metadata_for_code(code, printed_name, by_id, by_number)
        cards.append(
            {
                "count": count,
                "name": meta["resolvedName"] or printed_name,
                "printedName": printed_name,
                "code": code,
                "cardNumber": meta["cardNumber"],
                "imageUrl": meta["imageUrl"],
                "type": meta["type"],
                "colors": meta["colors"],
                "attribute": meta["attribute"],
                "stage": meta["stage"],
                "digitype": meta["digitype"],
                "dp": meta["dp"],
                "playCost": meta["playCost"],
                "digivolveCosts": meta["digivolveCosts"],
                "digivolveConditions": meta["digivolveConditions"],
                "level": meta["level"],
                "illustrator": meta["illustrator"],
                "hasAce": meta["hasAce"],
                "isAltArt": meta["isAltArt"],
                "restriction": meta["restriction"],
                "copyLimit": meta["copyLimit"],
                "effectText": meta["effectText"],
                "effectSections": meta["effectSections"],
            }
        )

    main_count = 0
    egg_count = 0
    color_union: OrderedDict[str, None] = OrderedDict()
    for card in cards:
        if card["type"] == "Digi-Egg":
            egg_count += card["count"]
        else:
            main_count += card["count"]
        for color in card["colors"]:
            color_union[color] = None

    cover_card = choose_cover_card(cards) if cards else {}
    export_text = build_export_text(deck_name, cards, key_card, sort_index)
    search_blob = " ".join(
        [deck_name.lower()]
        + [
            " ".join(
                filter(
                    None,
                    [
                        card["name"],
                        card["printedName"],
                        card["code"],
                        card["cardNumber"],
                    ],
                )
            ).lower()
            for card in cards
        ]
    )

    for card in cards:
        card["searchBlob"] = " ".join(
            filter(None, [card["name"], card["printedName"], card["code"], card["cardNumber"]])
        ).lower()

    color_profile = color_profile_for_cards(cards)

    return {
        "id": deck_path.stem,
        "name": deck_name,
        "fileName": deck_path.name,
        "filePath": str(deck_path),
        "keyCard": key_card,
        "sortIndex": sort_index,
        "mainCount": main_count,
        "eggCount": egg_count,
        "totalCount": main_count + egg_count,
        "uniqueCount": unique_card_number_count(cards),
        "colors": list(color_union.keys()),
        "colorProfile": color_profile,
        "coverImageUrl": cover_card.get("imageUrl"),
        "cards": cards,
        "exportText": export_text,
        "searchBlob": search_blob,
    }


def choose_cover_card(cards: list[dict[str, Any]]) -> dict[str, Any]:
    def sort_weight(card: dict[str, Any]) -> tuple[int, int, int]:
        card_type = card.get("type")
        level = card.get("level") or 0
        count = card.get("count") or 0
        if card_type == "Digimon":
            return (3, level, count)
        if card_type in {"Tamer", "Option"}:
            return (2, level, count)
        if card_type == "Digi-Egg":
            return (1, level, count)
        return (0, level, count)

    return max(cards, key=sort_weight)


def build_export_text(deck_name: str, cards: list[dict[str, Any]], key_card: str = "-1", sort_index: str = "0") -> str:
    body = "\n".join(f"{card['count']} {card['printedName']} {card['code']}" for card in cards)
    return "\n".join(
        [
            f"Name: {deck_name}",
            f"Key Card: {key_card or '-1'}",
            f"Sort Index: {sort_index or '0'}",
            "",
            "// DeckList",
            "",
            body,
        ]
    )


def render_html(app_data: dict[str, Any]) -> str:
    return HTML_TEMPLATE.substitute(
        app_data=json.dumps(app_data, ensure_ascii=False),
        generated_at=json.dumps(app_data["generatedAt"], ensure_ascii=False),
        manifest_source=json.dumps(app_data["manifestSource"], ensure_ascii=False),
        deck_root=json.dumps(app_data["deckRoot"], ensure_ascii=False),
    )


def build_html(app_data: dict[str, Any], output_path: Path) -> None:
    html = render_html(app_data)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(html, encoding="utf-8")


def load_app_data(
    app_support_dir: Path,
    force_manifest_refresh: bool = False,
    deck_root: Path | None = None,
) -> dict[str, Any]:
    deck_root = deck_root.expanduser() if deck_root else app_support_dir / "userdata" / "Decks"
    cache_file = app_support_dir / "deck_browser" / "PreparedDigimonCardsENG.json"

    if not deck_root.is_dir():
        raise FileNotFoundError(f"Deck folder not found: {deck_root}")

    raw_manifest, manifest_source = load_manifest(cache_file, force_refresh=force_manifest_refresh)
    by_id, by_number = build_manifest_maps(raw_manifest)
    card_catalog = build_card_catalog(raw_manifest, by_id, by_number)

    decks: list[dict[str, Any]] = []
    for deck_path in sorted(deck_root.glob("*.txt"), key=lambda path: path.name.lower()):
        parsed = parse_deck_file(deck_path, by_id, by_number)
        if parsed is not None:
            decks.append(parsed)

    return {
        "generatedAt": time.strftime("%Y-%m-%d %H:%M:%S"),
        "manifestSource": manifest_source,
        "deckRoot": str(deck_root),
        "cardCatalog": card_catalog,
        "decks": decks,
    }


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
