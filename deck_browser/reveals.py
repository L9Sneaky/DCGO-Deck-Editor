from __future__ import annotations

import email.utils
import html
import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any


USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15"
WIKI_CACHE_VERSION = 12
RECENT_REVEAL_WINDOW_DAYS = 14
FANDOM_API_URL = "https://digimoncardgame.fandom.com/api.php"
TWITTERWEBVIEWER_URL = "https://twitterwebviewer.com/"
TWITTERWEBVIEWER_USER = "digimon_tcg_EN"
DIGIMONCARD_IO_API_URL = "https://digimoncard.io/api-public/search"
DIGIMONCARD_IO_IMAGE_URL = "https://images.digimoncard.io/images/cards/{code}.jpg"
DIGIMONCARD_IO_DEFAULT_PREFIXES = ("EX12",)
DIGIMONCARD_IO_MAX_PREFIXES = 6
WIKIMON_URL = "https://wikimon.net/"
WIKIMON_API_URL = "https://wikimon.net/api.php"
WIKIMON_DEFAULT_PREFIXES = DIGIMONCARD_IO_DEFAULT_PREFIXES
WIKIMON_DISCOVERY_FAMILIES = ("BT", "EX", "ST", "AD", "LM")
WIKIMON_DISCOVERY_RECENT_PER_FAMILY = 2
WIKIMON_MAX_PREFIXES = 12
TWITTER_SNOWFLAKE_EPOCH_MS = 1288834974657
STATUS_LINK_RE = re.compile(r"""(?:https?://(?:mobile\.)?(?:x|twitter)\.com)?/[^"'<>\s/]+/status(?:es)?/(\d+)""", re.IGNORECASE)
IMAGE_URL_RE = re.compile(r"""https?://[^"'<>\s]+""", re.IGNORECASE)
REVEAL_CARD_CODE_RE = r"(?:BT\d{1,2}|EX\d{1,2}|ST\d{1,2}|AD\d{1,2}|LM|P)-\d{2,3}(?:_[A-Z0-9]+)?"
CARD_REF_RE = re.compile(rf"\[({REVEAL_CARD_CODE_RE})\s+([^\]]+)\]", re.IGNORECASE)
CARD_PREFIX_RE = re.compile(r"^(BT\d{1,2}|EX\d{1,2}|ST\d{1,2}|AD\d{1,2}|LM)-", re.IGNORECASE)
CARD_PREFIX_PARTS_RE = re.compile(r"^([A-Z]+)(\d{1,2})$", re.IGNORECASE)
WIKIMON_DCG_TABLE_RE = re.compile(r"\{\{DCGTable\s*(.*?)\}\}", re.DOTALL | re.IGNORECASE)
WIKIMON_IMAGE_RE = re.compile(r"""<img[^>]+alt=["']Dcg-([A-Z]+\d{1,2}-\d{2,3})(?:_[^"']+)?\.jpg["'][^>]+src=["']([^"']+)["']""", re.IGNORECASE)

WIKI_CARD_FIELD_RE = re.compile(r"\|([A-Za-z][A-Za-z0-9_]*)\s*=")
WIKI_TEMPLATE_RE = re.compile(r"\{\{([^{}]+)\}\}")
WIKI_LINK_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]")
PLAIN_TEXT_TOKEN_FIXES = [
    (re.compile(r"(^|[\s,.;:])End Your Turn(?=\s)", re.IGNORECASE), r"\1[End of Your Turn]"),
    (re.compile(r"\[\s*Recovery\s*\+?(\d+)(?:\s*\(Deck\))?\s*\]", re.IGNORECASE), r"＜Recovery +\1 (Deck)＞"),
    (re.compile(r"(^|[\s,.;:])Recovery\s*\+?(\d+)(?:\s*\(Deck\))?", re.IGNORECASE), r"\1＜Recovery +\2 (Deck)＞"),
    (re.compile(r"(^|[\s,.;:])Fragment\s*(\d+)", re.IGNORECASE), r"\1＜Fragment \2＞"),
]

WIKI_TEMPLATE_LABELS = {
    "OnPlay": "[On Play]",
    "WhenDigivolving": "[When Digivolving]",
    "WhenAttacking": "[When Attacking]",
    "WhenLinking": "[When Linking]",
    "EndOfAttack": "[End of Attack]",
    "OnDeletion": "[On Deletion]",
    "YourTurn": "[Your Turn]",
    "AllTurns": "[All Turns]",
    "OpponentsTurn": "[Opponent's Turn]",
    "OpponentTurn": "[Opponent's Turn]",
    "OppTurn": "[Opponent's Turn]",
    "OncePerTurn": "[Once Per Turn]",
    "TwicePerTurn": "[Twice Per Turn]",
    "Main": "[Main]",
    "Security": "[Security]",
    "SecurityCondition": "[Security]",
    "StartOfYourMainPhase": "[Start of Your Main Phase]",
    "StartOfOpponentsMainPhase": "[Start of Opponent's Main Phase]",
    "StartYourTurn": "[Start of Your Turn]",
    "StartYourMain": "[Start of Your Main Phase]",
    "MainTiming": "[Main]",
    "EndYourTurn": "[End of Your Turn]",
    "Rule": "[Rule]",
    "Blocker": "＜Blocker＞",
    "Reboot": "＜Reboot＞",
    "Retaliation": "＜Retaliation＞",
    "Raid": "＜Raid＞",
    "Piercing": "＜Piercing＞",
    "Rush": "＜Rush＞",
    "Jamming": "＜Jamming＞",
    "Alliance": "＜Alliance＞",
    "Ascension": "＜Ascension＞",
    "Barrier": "＜Barrier＞",
    "Vortex": "＜Vortex＞",
    "Collision": "＜Collision＞",
    "Decoy": "＜Decoy＞",
    "Partition": "＜Partition＞",
    "Overclock": "＜Overclock＞",
    "Counter": "[Counter]",
    "Hand": "[Hand]",
    "Delay": "＜Delay＞",
    "BlastDigivolve": "＜Blast Digivolve＞",
    "Engage": "＜Engage＞",
    "Evade": "＜Evade＞",
    "Fortitude": "＜Fortitude＞",
    "Guard": "＜Guard＞",
    "Iceclad": "＜Iceclad＞",
}


def reveals_root(app_support_dir: Path) -> Path:
    return app_support_dir / "deck_browser" / "reveals"


def reveals_cache_path(app_support_dir: Path) -> Path:
    return reveals_root(app_support_dir) / "reveals_cache.json"


def reveal_wiki_cache_path(app_support_dir: Path) -> Path:
    return reveals_root(app_support_dir) / "wiki_cache.json"


def twitterwebviewer_state_path(app_support_dir: Path) -> Path:
    return reveals_root(app_support_dir) / "twitterwebviewer_state.json"


def reveal_images_dir(app_support_dir: Path) -> Path:
    return reveals_root(app_support_dir) / "images"


def reveal_image_path(app_support_dir: Path, file_name: str) -> Path:
    requested_name = Path(str(file_name or "")).name
    if requested_name in {"", ".", ".."}:
        raise ValueError("Invalid reveal image name.")
    target = (reveal_images_dir(app_support_dir) / requested_name).resolve()
    root = reveal_images_dir(app_support_dir).resolve()
    if root not in target.parents:
        raise ValueError("Reveal image must stay inside the reveal image folder.")
    if not target.is_file():
        raise FileNotFoundError(f"Reveal image not found: {requested_name}")
    return target


def read_json(path: Path, default: Any) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def write_json(path: Path, payload: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    temp_path = path.with_name(path.name + ".tmp")
    temp_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False, sort_keys=True) + "\n", encoding="utf-8")
    temp_path.replace(path)


def fetch_text(url: str, extra_headers: dict[str, str] | None = None) -> str:
    headers = {"User-Agent": USER_AGENT}
    if extra_headers:
        headers.update(extra_headers)
    request = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(request, timeout=25) as response:
        return response.read().decode("utf-8", errors="replace")


def fetch_json(url: str, extra_headers: dict[str, str] | None = None) -> Any:
    return json.loads(fetch_text(url, extra_headers=extra_headers))


def fetch_digimoncard_io_json(url: str, extra_headers: dict[str, str] | None = None) -> Any:
    headers = {"Accept": "application/json"}
    if extra_headers:
        headers.update(extra_headers)
    return fetch_json(url, extra_headers=headers)


def normalize_wiki_page_code(code: str) -> str:
    return str(code or "").strip().split("_", 1)[0].upper()


def extract_card_refs(text: str) -> list[dict[str, str]]:
    refs: list[dict[str, str]] = []
    seen: set[str] = set()
    for match in CARD_REF_RE.finditer(str(text or "")):
        code = match.group(1).strip().upper()
        name = re.sub(r"\s+", " ", match.group(2).strip())
        if code and code not in seen:
            refs.append({"code": code, "name": name})
            seen.add(code)
    return refs


def split_wiki_card_fields(wikitext: str) -> dict[str, str]:
    start = wikitext.find("{{CardTable")
    if start < 0:
        return {}
    body = wikitext[start + len("{{CardTable") :]
    if body.endswith("}}"):
        body = body[:-2]

    fields: dict[str, str] = {}
    matches = []
    brace_depth = 0
    index = 0
    while index < len(body):
        if body.startswith("{{", index):
            brace_depth += 1
            index += 2
            continue
        if body.startswith("}}", index):
            brace_depth = max(0, brace_depth - 1)
            index += 2
            continue
        if body[index] == "|" and brace_depth == 0:
            match = WIKI_CARD_FIELD_RE.match(body, index)
            if match:
                matches.append(match)
                index = match.end()
                continue
        index += 1

    for index, match in enumerate(matches):
        key = match.group(1).strip().lower()
        value_start = match.end()
        value_end = matches[index + 1].start() if index + 1 < len(matches) else len(body)
        value = body[value_start:value_end].strip()
        fields[key] = value
    return fields


def camel_words(value: str) -> str:
    text = re.sub(r"([a-z0-9])([A-Z])", r"\1 \2", str(value or ""))
    text = re.sub(r"[_-]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def bracket_join(values: list[str]) -> str:
    return "/".join(f"[{value}]" for value in values if value)


def colour_level_text(values: list[str]) -> str:
    values = [value for value in values if value]
    if not values:
        return ""
    if values[-1].isdigit():
        colors = values[:-1]
        return f"{'/'.join(colors)} Lv.{values[-1]}".strip()
    return " ".join(values)


def normalize_plain_text_tokens(value: Any) -> str:
    text = str(value or "")
    for pattern, replacement in PLAIN_TEXT_TOKEN_FIXES:
        text = pattern.sub(replacement, text)
    return text


def render_wiki_template(raw_template: str) -> str:
    parts = [part.strip() for part in raw_template.split("|")]
    name = parts[0] if parts else ""
    args = parts[1:]
    if not name:
        return ""
    kwargs: dict[str, str] = {}
    positional: list[str] = []
    for arg in args:
        if "=" in arg:
            key, value = arg.split("=", 1)
            kwargs[key.strip()] = value.strip()
        else:
            positional.append(arg)

    if name == "StartYourTurn" and positional and positional[0].lower() == "memory":
        return "[Start of Your Turn] If you have 2 or less memory, set it to 3."
    if name == "Security" and positional and positional[0].lower() == "play":
        return "[Security] Play this card without paying the cost."
    if name in WIKI_TEMPLATE_LABELS:
        return WIKI_TEMPLATE_LABELS[name]
    if name == "DigivolveFromTraits" and len(positional) >= 3:
        return f"[Digivolve] Lv.{positional[1]} w/[{positional[2]}] trait: Cost {positional[0]}"
    if name == "DigivolveFromTraitsOr" and len(positional) >= 4:
        traits = "/".join(f"[{trait}]" for trait in positional[2:] if trait)
        return f"[Digivolve] Lv.{positional[1]} w/{traits} trait: Cost {positional[0]}"
    if name == "DigivolveFromArchetypesOrTraits" and len(positional) >= 4:
        return f"[Digivolve] Lv.{positional[1]} w/{bracket_join(positional[2:])} trait: Cost {positional[0]}"
    if name in {"DigivolveFromNamesOrTraits", "DigivolveFromNameOrTraits"} and len(positional) >= 4:
        return f"[Digivolve] Lv.{positional[2]} w/[{positional[1]}] in text or w/[{positional[3]}] trait: Cost {positional[0]}"
    if name == "DigivolveFromTextOrTraits" and len(positional) >= 4:
        return f"[Digivolve] Lv.{positional[1]} w/[{positional[2]}] in text or w/[{positional[3]}] trait: Cost {positional[0]}"
    if name == "Digivolve" and len(positional) >= 2:
        return f"[Digivolve] {positional[1]}: Cost {positional[0]}"
    if name in {"DNADigivolve", "DNADigivolveOr"} and len(positional) >= 5:
        cost = positional[0]
        materials = positional[1:]
        midpoint = len(materials) // 2
        left = colour_level_text(materials[:midpoint])
        right = colour_level_text(materials[midpoint:])
        if left and right:
            return f"[DNA Digivolve] {left} + {right}: Cost {cost}"
        return f"[DNA Digivolve] {' '.join(materials)}: Cost {cost}"
    if name == "BurstDigivolve" and positional:
        return f"[Burst Digivolve] Cost {positional[0]}"
    if name in {"EffectLinkTraits", "TraitLink"} and positional:
        suffix = kwargs["text"] if "text" in kwargs else "trait"
        return f"{bracket_join(positional)} {suffix}".strip()
    if name in {"EffectLinkNames", "EffectLink", "LinkTraits", "PartitionNames"} and positional:
        return bracket_join(positional)
    if name == "EffectLinkSupports" and positional:
        suffix = kwargs.get("text") or "in text"
        return f"[{positional[0]}] {suffix}".strip()
    if name == "Colour" and positional:
        return "/".join(positional)
    if name in {"Name", "CardLink", "Card"} and positional:
        return positional[-1]
    if name == "Draw" and positional:
        return f"＜Draw {positional[0]}＞"
    if name == "Recovery" and positional:
        return f"＜Recovery +{positional[0]} (Deck)＞"
    if name == "Memory" and positional:
        return f"{positional[0]} memory"
    if name == "UseReq" and positional:
        suffix = positional[1] if len(positional) > 1 else "trait"
        return f"＜Use Req. ([{positional[0]}] {suffix})＞"
    if name == "ArtsDigivolve":
        return "[Arts Digivolve]"
    if name == "DigiXros" and positional:
        material = positional[1] if len(positional) > 1 else ""
        return f"[DigiXros\u00a0-{positional[0]}] {material}".strip()
    if name == "Assembly" and positional:
        material = positional[1] if len(positional) > 1 else ""
        return f"[Assembly -{positional[0]}] {material}".strip()
    if name in {"SecurityA+", "SecurityAPlus"} and positional:
        return f"＜Security A. +{positional[0]}＞"
    if name in {"SecurityA-", "SecurityAMinus"} and positional:
        return f"＜Security A. -{positional[0]}＞"
    if name == "DeDigivolve" and positional:
        return f"＜De-Digivolve {positional[0]}＞"
    if name == "Link" and positional:
        return f"＜Link +{positional[0]}＞"
    if name == "Decode" and positional:
        return f"＜Decode ({positional[0]})＞"
    if name.endswith("Token"):
        token_name = camel_words(name[:-5])
        return f"[{token_name}] Token" if token_name else "Token"
    label = camel_words(name)
    if any(keyword in label for keyword in ("Digivolve", "Digi Xros", "Assembly")):
        return " ".join(part for part in [f"[{label}]"] + args if part)
    if any(keyword in label for keyword in ("Turn", "Phase", "Security", "Main")):
        return " ".join(part for part in [f"[{label}]"] + args if part)
    if not args:
        return label
    return " ".join(part for part in [label] + args if part)


def clean_wiki_markup(value: Any) -> str:
    text = html.unescape(str(value or ""))
    if not text.strip():
        return ""
    text = re.sub(r"<br\s*/?>", "\n", text, flags=re.IGNORECASE)
    text = WIKI_LINK_RE.sub(lambda match: match.group(2) or match.group(1), text)
    previous = None
    while previous != text:
        previous = text
        text = WIKI_TEMPLATE_RE.sub(lambda match: render_wiki_template(match.group(1)), text)
    text = re.sub(r"''+", "", text)
    text = re.sub(r"<[^>]+>", "", text)
    lines = [re.sub(r"[ \t]+", " ", line).strip() for line in text.splitlines()]
    cleaned = "\n".join(line for line in lines if line).strip()
    return normalize_plain_text_tokens(cleaned)

def wiki_int(value: Any) -> int | None:
    match = re.search(r"-?\d+", str(value or ""))
    if not match:
        return None
    try:
        return int(match.group(0))
    except ValueError:
        return None


def wiki_multi_fields(fields: dict[str, str], prefix: str, count: int = 8) -> list[str]:
    values: list[str] = []
    for index in range(1, count + 1):
        key = prefix if index == 1 else f"{prefix}{index}"
        value = clean_wiki_markup(fields.get(key))
        if value and value not in values:
            values.append(value)
    return values


def wiki_effect_sections(fields: dict[str, str], card_type: str | None) -> list[dict[str, str]]:
    assembly_label = "DigiXros" if str(fields.get("assembly") or "").lstrip().startswith("{{DigiXros") else "Assembly"
    inherited_label = "Option Effect" if card_type == "Dual" else "Inherited"
    section_specs = [
        ("Special Digivolve", fields.get("evocon")),
        ("DigiXros", fields.get("digixros")),
        (assembly_label, fields.get("assembly")),
        ("Arts Digivolve", fields.get("artsdigivolve") or fields.get("dual")),
        ("Rule", fields.get("rule")),
        ("Option Effect" if card_type == "Option" else "Main Effect", fields.get("effect")),
        (inherited_label, fields.get("inheriteff")),
        ("Security", fields.get("boteff")),
        ("ACE", fields.get("ace")),
        ("Link Effect", fields.get("applink")),
    ]
    sections: list[dict[str, str]] = []
    for label, raw_value in section_specs:
        value = clean_wiki_markup(raw_value)
        if value.lower() in {"dual", "-"}:
            continue
        if value:
            sections.append({"label": label, "text": value})
    return sections


def normalize_wiki_effect_section(section: dict[str, Any], card_type: str | None = None) -> dict[str, Any]:
    label = str(section.get("label") or "")
    if card_type == "Dual" and label == "Inherited":
        label = "Option Effect"
    return {**section, "label": label, "text": normalize_plain_text_tokens(section.get("text"))}


def fetch_wiki_card_payload(code: str) -> dict[str, Any] | None:
    page_code = normalize_wiki_page_code(code)
    if not page_code:
        return None
    query = urllib.parse.urlencode(
        {
            "action": "parse",
            "page": page_code,
            "prop": "wikitext",
            "format": "json",
            "formatversion": "2",
        }
    )
    try:
        payload = fetch_json(
            f"{FANDOM_API_URL}?{query}",
            extra_headers={"Accept": "application/json", "User-Agent": USER_AGENT},
        )
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        return None
    parsed = payload.get("parse") if isinstance(payload, dict) else None
    wikitext = parsed.get("wikitext") if isinstance(parsed, dict) else ""
    fields = split_wiki_card_fields(str(wikitext or ""))
    if not fields:
        return None

    card_type = clean_wiki_markup(fields.get("cardtype")) or None
    effect_sections = wiki_effect_sections(fields, card_type)
    colors = wiki_multi_fields(fields, "colour", 3)
    traits = wiki_multi_fields(fields, "type", 8)
    digivolve_costs = [
        cost
        for cost in (wiki_int(fields.get("evocost" if index == 1 else f"evocost{index}")) for index in range(1, 4))
        if cost is not None
    ]
    return {
        "name": clean_wiki_markup(fields.get("name")) or page_code,
        "cardNumber": page_code,
        "type": card_type,
        "colors": colors,
        "attribute": clean_wiki_markup(fields.get("attribute")) or None,
        "stage": clean_wiki_markup(fields.get("form")) or None,
        "digitype": traits,
        "dp": wiki_int(fields.get("dp")),
        "playCost": wiki_int(fields.get("playcost")),
        "digivolveCosts": sorted(set(digivolve_costs)),
        "digivolveConditions": [],
        "level": wiki_int(fields.get("level")),
        "illustrator": "",
        "hasAce": bool(clean_wiki_markup(fields.get("ace"))),
        "restriction": "Not released" if "unreleased" in str(fields.get("enstatus") or "").lower() else "Unknown",
        "copyLimit": 4,
        "effectText": " ".join(section["text"] for section in effect_sections),
        "effectSections": effect_sections,
        "linkDP": wiki_int(fields.get("applinkdp")),
        "linkEffect": clean_wiki_markup(fields.get("applink")),
        "linkRequirement": "",
        "wikiUrl": f"https://digimoncardgame.fandom.com/wiki/{urllib.parse.quote(page_code)}",
    }


def parse_twitter_datetime_value(value: str) -> datetime | None:
    text = str(value or "").strip()
    if not text:
        return None
    try:
        parsed = email.utils.parsedate_to_datetime(text)
    except (TypeError, ValueError):
        parsed = None
    if parsed is None:
        try:
            parsed = datetime.fromisoformat(text.replace("Z", "+00:00"))
        except ValueError:
            return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed


def twitter_datetime_from_status_id(status_id: Any) -> datetime | None:
    text = str(status_id or "").strip()
    if not text.isdigit():
        return None
    try:
        timestamp_ms = (int(text) >> 22) + TWITTER_SNOWFLAKE_EPOCH_MS
        return datetime.fromtimestamp(timestamp_ms / 1000, tz=timezone.utc)
    except (OverflowError, OSError, ValueError):
        return None


def parse_twitter_datetime(value: str) -> str:
    parsed = parse_twitter_datetime_value(value)
    return parsed.isoformat() if parsed else ""


def local_date_from_datetime(value: datetime | None) -> str:
    if value is None:
        return ""
    return value.astimezone().date().isoformat()


def reveal_date_from_created_at(value: str) -> str:
    return local_date_from_datetime(parse_twitter_datetime_value(value))


def twitterwebviewer_profile_url(user: str = TWITTERWEBVIEWER_USER) -> str:
    return f"{TWITTERWEBVIEWER_URL}?{urllib.parse.urlencode({'user': user})}"


def load_twitterwebviewer_state(app_support_dir: Path) -> dict[str, Any]:
    state = read_json(twitterwebviewer_state_path(app_support_dir), {})
    return state if isinstance(state, dict) else {}


def save_twitterwebviewer_state(app_support_dir: Path, state: dict[str, Any]) -> None:
    write_json(twitterwebviewer_state_path(app_support_dir), state)


def state_mapping(value: Any) -> dict[str, Any]:
    return value if isinstance(value, dict) else {}


def normalize_tweet_id(value: Any) -> str:
    return str(value or "").strip()


def recent_cutoff(now: datetime | None = None, window_days: int = RECENT_REVEAL_WINDOW_DAYS) -> datetime:
    base = now or datetime.now(timezone.utc)
    if base.tzinfo is None:
        base = base.replace(tzinfo=timezone.utc)
    return base.astimezone(timezone.utc) - timedelta(days=window_days)


def seed_twitterwebviewer_state_from_items(state: dict[str, Any], items: list[dict[str, Any]], now: datetime | None = None) -> dict[str, Any]:
    next_state = dict(state)
    cards = dict(state_mapping(next_state.get("cards")))
    tweets = dict(state_mapping(next_state.get("tweets")))
    cutoff = recent_cutoff(now)

    for item in items or []:
        if not isinstance(item, dict):
            continue
        parsed = reveal_item_datetime(item)
        if parsed is not None and parsed.astimezone(timezone.utc) < cutoff:
            continue
        tweet_id = normalize_tweet_id(item.get("tweetId") or item.get("postId"))
        date_text = str(item.get("date") or local_date_from_datetime(parsed) or "")
        if tweet_id and tweet_id not in tweets:
            tweets[tweet_id] = {"status": "seen", "date": date_text}
        code = normalize_wiki_page_code(str(item.get("code") or ""))
        if code and code not in cards:
            cards[code] = {
                "status": "seen",
                "tweetId": tweet_id,
                "date": date_text,
                "firstSeenAt": str(item.get("createdAt") or ""),
            }

    next_state.update({"cards": cards, "tweets": tweets, "source": "twitterwebviewer", "windowDays": RECENT_REVEAL_WINDOW_DAYS})
    return next_state


def seen_tweet_ids_from_state_and_cache(state: dict[str, Any], cached_items: list[dict[str, Any]]) -> set[str]:
    seen = {normalize_tweet_id(tweet_id) for tweet_id in state_mapping(state.get("tweets")).keys()}
    for item in cached_items or []:
        tweet_id = normalize_tweet_id(item.get("tweetId") or item.get("postId"))
        if tweet_id:
            seen.add(tweet_id)
    return {tweet_id for tweet_id in seen if tweet_id}


def plain_text_from_html(raw_html: str) -> str:
    text = re.sub(r"(?is)<script[^>]*>.*?</script>", " ", str(raw_html or ""))
    text = re.sub(r"(?is)<style[^>]*>.*?</style>", " ", text)
    text = re.sub(r"(?i)<br\s*/?>", "\n", text)
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def image_urls_from_html(raw_html: str) -> list[str]:
    urls: list[str] = []
    seen: set[str] = set()
    for match in IMAGE_URL_RE.finditer(html.unescape(str(raw_html or ""))):
        url = match.group(0).rstrip(").,;")
        if "twimg.com/media/" not in url and "pbs.twimg.com/media/" not in url:
            continue
        if url not in seen:
            urls.append(url)
            seen.add(url)
    return urls


def likely_twitterwebviewer_reveal(text: str) -> bool:
    if not text:
        return False
    return bool(
        re.search(r"\[(?:card\s+reveals?|reveals?)\]", text, re.IGNORECASE)
        or re.search(r"\btoday[’']?s\s+(?:alt-art\s+)?cards?\s+(?:is|are)\b", text, re.IGNORECASE)
        or extract_card_refs(text)
    )


def twitterwebviewer_segments(page_html: str) -> list[tuple[str, str]]:
    matches: list[tuple[str, int]] = []
    seen: set[str] = set()
    for match in STATUS_LINK_RE.finditer(str(page_html or "")):
        tweet_id = normalize_tweet_id(match.group(1))
        if not tweet_id or tweet_id in seen:
            continue
        seen.add(tweet_id)
        matches.append((tweet_id, match.start()))

    segments: list[tuple[str, str]] = []
    for index, (tweet_id, start) in enumerate(matches):
        end = matches[index + 1][1] if index + 1 < len(matches) else len(page_html)
        segments.append((tweet_id, page_html[start:end]))
    return segments


def normalize_twitterwebviewer_item(
    tweet_id: str,
    text: str,
    card: dict[str, str],
    image_url: str,
    index: int,
    created_at: datetime | None,
) -> dict[str, Any]:
    created = created_at or twitter_datetime_from_status_id(tweet_id)
    created_text = created.isoformat() if created else ""
    code = normalize_wiki_page_code(str(card.get("code") or ""))
    return {
        "id": f"{tweet_id}-{index}",
        "tweetId": tweet_id,
        "tweetUrl": f"https://x.com/{TWITTERWEBVIEWER_USER}/status/{tweet_id}",
        "createdAt": created_text,
        "date": local_date_from_datetime(created) if created else "",
        "code": code,
        "name": card.get("name") or "Official Reveal",
        "cards": [card] if card else [],
        "text": text,
        "mediaUrls": [image_url] if image_url else [],
        "imageUrl": image_url,
        "source": "twitterwebviewer",
        "sourceLabel": "TwitterWebViewer",
    }


def parse_twitterwebviewer_reveals(
    page_html: str,
    *,
    seen_tweet_ids: set[str] | None = None,
    now: datetime | None = None,
    window_days: int = RECENT_REVEAL_WINDOW_DAYS,
) -> dict[str, Any]:
    seen = set(seen_tweet_ids or set())
    cutoff = recent_cutoff(now, window_days=window_days)
    items: list[dict[str, Any]] = []
    stopped_at_seen_id = ""
    stopped_at_old_id = ""
    scanned = 0

    for tweet_id, segment in twitterwebviewer_segments(page_html):
        if tweet_id in seen:
            stopped_at_seen_id = tweet_id
            break
        created = twitter_datetime_from_status_id(tweet_id)
        if created is not None and created.astimezone(timezone.utc) < cutoff:
            stopped_at_old_id = tweet_id
            break
        scanned += 1
        text = plain_text_from_html(segment)
        refs = extract_card_refs(text)
        images = image_urls_from_html(segment)
        if not refs or not likely_twitterwebviewer_reveal(text):
            continue
        for index, ref in enumerate(refs, start=1):
            image_url = images[index - 1] if index - 1 < len(images) else (images[0] if images else "")
            items.append(normalize_twitterwebviewer_item(tweet_id, text, ref, image_url, index, created))

    return {
        "items": items,
        "scannedTweetCount": scanned,
        "stoppedAtSeenTweetId": stopped_at_seen_id,
        "stoppedAtOldTweetId": stopped_at_old_id,
    }


def tweet_datetime(tweet: dict[str, Any]) -> datetime | None:
    created_at = str(tweet.get("created_at") or tweet.get("createdAt") or tweet.get("timelineAt") or "")
    return parse_twitter_datetime_value(created_at) or twitter_datetime_from_status_id(tweet.get("id_str") or tweet.get("id"))


def tweet_is_recent(tweet: dict[str, Any]) -> bool:
    parsed = tweet_datetime(tweet)
    if parsed is None:
        return True
    return (datetime.now(timezone.utc) - parsed.astimezone(timezone.utc)).total_seconds() <= RECENT_REVEAL_WINDOW_DAYS * 24 * 60 * 60


def reveal_item_datetime(item: dict[str, Any]) -> datetime | None:
    return parse_twitter_datetime_value(str(item.get("createdAt") or "")) or twitter_datetime_from_status_id(item.get("tweetId"))


def reveal_item_is_recent(item: dict[str, Any]) -> bool:
    parsed = reveal_item_datetime(item)
    if parsed is not None:
        return (datetime.now(timezone.utc) - parsed.astimezone(timezone.utc)).total_seconds() <= RECENT_REVEAL_WINDOW_DAYS * 24 * 60 * 60
    date_text = str(item.get("date") or "")
    try:
        item_time = time.mktime(time.strptime(date_text, "%Y-%m-%d"))
    except ValueError:
        return True
    return (time.time() - item_time) <= RECENT_REVEAL_WINDOW_DAYS * 24 * 60 * 60


def normalize_reveal_item_dates(item: dict[str, Any]) -> dict[str, Any]:
    clone = dict(item)
    parsed = reveal_item_datetime(clone)
    if parsed is not None:
        clone["createdAt"] = parsed.isoformat()
        clone["date"] = local_date_from_datetime(parsed)
    elif not clone.get("date"):
        clone["date"] = ""
    return clone


def normalize_reveal_items(items: Any) -> list[dict[str, Any]]:
    normalized: list[dict[str, Any]] = []
    for item in items or []:
        if isinstance(item, dict):
            normalized.append(normalize_reveal_item_dates(item))
    return normalized


def merge_reveal_items(existing_items: list[dict[str, Any]], new_items: list[dict[str, Any]]) -> list[dict[str, Any]]:
    merged: list[dict[str, Any]] = []
    seen_ids: set[str] = set()
    seen_card_tweets: set[tuple[str, str]] = set()
    for item in list(new_items) + list(existing_items):
        if not isinstance(item, dict):
            continue
        item_id = str(item.get("id") or "")
        if item_id and item_id in seen_ids:
            continue
        tweet_id = normalize_tweet_id(item.get("tweetId") or item.get("postId"))
        code = normalize_wiki_page_code(str(item.get("code") or ""))
        card_tweet_key = (tweet_id, code)
        if tweet_id and code and card_tweet_key in seen_card_tweets:
            continue
        if item_id:
            seen_ids.add(item_id)
        if tweet_id and code:
            seen_card_tweets.add(card_tweet_key)
        merged.append(item)
    merged.sort(key=lambda item: (str(item.get("date") or ""), str(item.get("createdAt") or ""), str(item.get("tweetId") or item.get("id") or "")), reverse=True)
    return merged


def update_twitterwebviewer_state_from_items(
    state: dict[str, Any],
    items: list[dict[str, Any]],
    *,
    checked_at: datetime,
    stopped_at_seen_id: str = "",
) -> dict[str, Any]:
    next_state = seed_twitterwebviewer_state_from_items(state, items, now=checked_at)
    cards = dict(state_mapping(next_state.get("cards")))
    tweets = dict(state_mapping(next_state.get("tweets")))
    for item in items:
        tweet_id = normalize_tweet_id(item.get("tweetId") or item.get("postId"))
        code = normalize_wiki_page_code(str(item.get("code") or ""))
        date_text = str(item.get("date") or "")
        if tweet_id:
            tweets[tweet_id] = {"status": "seen", "date": date_text}
        if code:
            cards[code] = {
                "status": "seen",
                "tweetId": tweet_id,
                "date": date_text,
                "firstSeenAt": checked_at.astimezone(timezone.utc).isoformat(),
            }
    next_state.update(
        {
            "cards": cards,
            "tweets": tweets,
            "lastCheckedAt": checked_at.astimezone(timezone.utc).isoformat(),
            "source": "twitterwebviewer",
            "windowDays": RECENT_REVEAL_WINDOW_DAYS,
        }
    )
    next_state.pop("cooldownUntil", None)
    if stopped_at_seen_id:
        next_state["stoppedAtSeenTweetId"] = stopped_at_seen_id
    return next_state


def check_twitterwebviewer_reveals_now(
    app_support_dir: Path,
    *,
    user: str = TWITTERWEBVIEWER_USER,
    fetcher: Any = fetch_text,
    now: datetime | None = None,
) -> dict[str, Any]:
    checked_at = now or datetime.now(timezone.utc)
    if checked_at.tzinfo is None:
        checked_at = checked_at.replace(tzinfo=timezone.utc)

    cache_path = reveals_cache_path(app_support_dir)
    cache = read_json(cache_path, {})
    existing_items = normalize_reveal_items(cache.get("items")) if isinstance(cache, dict) else []

    state = seed_twitterwebviewer_state_from_items(load_twitterwebviewer_state(app_support_dir), existing_items, now=checked_at)

    try:
        page_html = fetcher(twitterwebviewer_profile_url(user))
    except urllib.error.HTTPError as error:
        state.pop("cooldownUntil", None)
        state["lastError"] = f"HTTP {int(error.code)}"
        state["lastCheckedAt"] = checked_at.astimezone(timezone.utc).isoformat()
        state["source"] = "twitterwebviewer"
        state["windowDays"] = RECENT_REVEAL_WINDOW_DAYS
        save_twitterwebviewer_state(app_support_dir, state)
        raise RuntimeError(f"TwitterWebViewer returned HTTP {int(error.code)}.") from error
    except (urllib.error.URLError, TimeoutError) as error:
        state.pop("cooldownUntil", None)
        state["lastError"] = str(error)
        state["lastCheckedAt"] = checked_at.astimezone(timezone.utc).isoformat()
        state["source"] = "twitterwebviewer"
        state["windowDays"] = RECENT_REVEAL_WINDOW_DAYS
        save_twitterwebviewer_state(app_support_dir, state)
        raise RuntimeError("Could not fetch TwitterWebViewer.") from error

    parsed = parse_twitterwebviewer_reveals(
        page_html,
        seen_tweet_ids=seen_tweet_ids_from_state_and_cache(state, existing_items),
        now=checked_at,
        window_days=RECENT_REVEAL_WINDOW_DAYS,
    )
    new_items = normalize_reveal_items(parsed["items"])
    merged_items = merge_reveal_items(existing_items, new_items)
    next_state = update_twitterwebviewer_state_from_items(
        state,
        merged_items,
        checked_at=checked_at,
        stopped_at_seen_id=str(parsed.get("stoppedAtSeenTweetId") or ""),
    )

    next_cache = dict(cache) if isinstance(cache, dict) else {}
    next_cache.update(
        {
            "lastChecked": checked_at.timestamp(),
            "source": "twitterwebviewer",
            "items": merged_items,
            "errors": [],
        }
    )
    next_cache.pop("nextTwitterWebViewerAttemptAt", None)
    next_cache.pop("twitterWebViewerPauseReason", None)
    write_json(cache_path, next_cache)
    save_twitterwebviewer_state(app_support_dir, next_state)

    return {
        "ok": True,
        "source": "twitterwebviewer",
        "skipped": False,
        "newRevealCount": len(new_items),
        "stoppedAtSeenTweetId": parsed.get("stoppedAtSeenTweetId") or "",
        "stoppedAtOldTweetId": parsed.get("stoppedAtOldTweetId") or "",
        "scannedTweetCount": parsed.get("scannedTweetCount") or 0,
        "items": new_items,
    }


def reveal_card_prefix(code: Any) -> str:
    match = CARD_PREFIX_RE.match(normalize_wiki_page_code(str(code or "")))
    return match.group(1).upper() if match else ""


def append_unique_prefix(prefixes: list[str], prefix: Any, *, limit: int | None = None) -> None:
    normalized = normalize_wiki_page_code(str(prefix or ""))
    if not normalized or normalized in prefixes:
        return
    if limit is not None and len(prefixes) >= limit:
        return
    prefixes.append(normalized)


def card_prefix_family_number(prefix: Any) -> tuple[str, int] | None:
    match = CARD_PREFIX_PARTS_RE.match(normalize_wiki_page_code(str(prefix or "")))
    if not match:
        return None
    try:
        number = int(match.group(2))
    except ValueError:
        return None
    return match.group(1).upper(), number


def next_card_prefix(prefix: Any) -> str:
    parts = card_prefix_family_number(prefix)
    if not parts:
        return ""
    family, number = parts
    return f"{family}{number + 1}"


def append_prefix_and_next(prefixes: list[str], prefix: Any, *, limit: int | None = None) -> None:
    append_unique_prefix(prefixes, prefix, limit=limit)
    append_unique_prefix(prefixes, next_card_prefix(prefix), limit=limit)


def digimoncard_io_search_url(prefix: str) -> str:
    query = urllib.parse.urlencode(
        {
            "card": normalize_wiki_page_code(prefix),
            "sort": "date_added",
            "sortdirection": "desc",
        }
    )
    return f"{DIGIMONCARD_IO_API_URL}?{query}"


def digimoncard_io_prefixes_from_items(items: list[dict[str, Any]]) -> list[str]:
    prefixes: list[str] = []
    for item in items or []:
        append_prefix_and_next(prefixes, reveal_card_prefix(item.get("code")), limit=DIGIMONCARD_IO_MAX_PREFIXES)
        if len(prefixes) >= DIGIMONCARD_IO_MAX_PREFIXES:
            break
    for prefix in DIGIMONCARD_IO_DEFAULT_PREFIXES:
        append_prefix_and_next(prefixes, prefix, limit=DIGIMONCARD_IO_MAX_PREFIXES)
    return prefixes[:DIGIMONCARD_IO_MAX_PREFIXES]


def digimoncard_io_card_datetime(card: dict[str, Any]) -> datetime | None:
    value = str(card.get("date_added") or "").strip()
    return parse_twitter_datetime_value(value)


def normalize_digimoncard_io_card(card: dict[str, Any], *, checked_at: datetime) -> dict[str, Any] | None:
    code = normalize_wiki_page_code(str(card.get("id") or ""))
    name = re.sub(r"\s+", " ", str(card.get("name") or code)).strip()
    if not code or not name:
        return None
    created = digimoncard_io_card_datetime(card) or checked_at
    set_names = card.get("set_name") if isinstance(card.get("set_name"), list) else []
    set_name = str(set_names[0] if set_names else "").strip()
    pretty_url = str(card.get("pretty_url") or "").strip()
    source_url = f"https://digimoncard.io/card/{urllib.parse.quote(pretty_url)}" if pretty_url else ""
    image_url = DIGIMONCARD_IO_IMAGE_URL.format(code=urllib.parse.quote(code))
    text_parts = [f"[{code} {name}]"]
    if set_name:
        text_parts.append(set_name)
    return {
        "id": f"digimoncardio-{code}",
        "postId": f"digimoncardio-{code}",
        "postUrl": source_url,
        "createdAt": created.astimezone(timezone.utc).isoformat(),
        "date": local_date_from_datetime(created),
        "code": code,
        "name": name,
        "cards": [{"code": code, "name": name}],
        "text": " ".join(text_parts),
        "mediaUrls": [image_url],
        "imageUrl": image_url,
        "source": "digimoncard_io",
        "sourceLabel": "DigimonCard.io",
        "sourceSetName": set_name,
    }


def parse_digimoncard_io_reveals(payload: Any, *, checked_at: datetime) -> list[dict[str, Any]]:
    if not isinstance(payload, list):
        return []
    items: list[dict[str, Any]] = []
    seen_codes: set[str] = set()
    for card in payload:
        if not isinstance(card, dict):
            continue
        item = normalize_digimoncard_io_card(card, checked_at=checked_at)
        if not item:
            continue
        code = normalize_wiki_page_code(str(item.get("code") or ""))
        if code in seen_codes:
            continue
        seen_codes.add(code)
        items.append(item)
    return items


def check_digimoncard_io_reveals_now(
    app_support_dir: Path,
    *,
    prefixes: list[str] | None = None,
    fetcher: Any = fetch_digimoncard_io_json,
    now: datetime | None = None,
) -> dict[str, Any]:
    checked_at = now or datetime.now(timezone.utc)
    if checked_at.tzinfo is None:
        checked_at = checked_at.replace(tzinfo=timezone.utc)

    cache_path = reveals_cache_path(app_support_dir)
    cache = read_json(cache_path, {})
    existing_items = normalize_reveal_items(cache.get("items")) if isinstance(cache, dict) else []
    selected_prefixes = [normalize_wiki_page_code(prefix) for prefix in (prefixes or digimoncard_io_prefixes_from_items(existing_items))]
    selected_prefixes = [prefix for prefix in selected_prefixes if prefix][:DIGIMONCARD_IO_MAX_PREFIXES]
    existing_codes = {normalize_wiki_page_code(str(item.get("code") or "")) for item in existing_items if isinstance(item, dict)}

    errors: list[str] = []
    new_items: list[dict[str, Any]] = []
    seen_new_codes: set[str] = set()
    for prefix in selected_prefixes:
        try:
            payload = fetcher(digimoncard_io_search_url(prefix))
        except urllib.error.HTTPError as error:
            errors.append(f"DigimonCard.io {prefix} returned HTTP {int(error.code)}.")
            continue
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
            errors.append(f"Could not fetch DigimonCard.io {prefix}: {error}")
            continue
        if isinstance(payload, dict) and payload.get("error"):
            errors.append(f"DigimonCard.io {prefix}: {payload.get('error')}")
            continue
        for item in parse_digimoncard_io_reveals(payload, checked_at=checked_at):
            code = normalize_wiki_page_code(str(item.get("code") or ""))
            if not code or code in existing_codes or code in seen_new_codes:
                continue
            new_items.append(item)
            seen_new_codes.add(code)

    if not new_items and errors and not existing_items:
        raise RuntimeError(errors[0])

    merged_items = merge_reveal_items(existing_items, new_items)
    next_cache = dict(cache) if isinstance(cache, dict) else {}
    next_cache.update(
        {
            "lastChecked": checked_at.timestamp(),
            "source": "digimoncard_io",
            "items": merged_items,
            "errors": errors,
        }
    )
    write_json(cache_path, next_cache)

    return {
        "ok": True,
        "source": "digimoncard_io",
        "skipped": False,
        "newRevealCount": len(new_items),
        "prefixes": selected_prefixes,
        "errors": errors,
        "items": new_items,
    }


def wikimon_set_page_name(prefix: str) -> str:
    match = CARD_PREFIX_PARTS_RE.match(normalize_wiki_page_code(prefix))
    if not match:
        return ""
    family = match.group(1).upper()
    number = match.group(2)
    if family in {"AD", "LM"}:
        number = number.zfill(2)
    return f"{family}-{number}"


def wikimon_set_page_url(prefix: str) -> str:
    page_name = wikimon_set_page_name(prefix)
    return urllib.parse.urljoin(WIKIMON_URL, urllib.parse.quote(page_name)) if page_name else ""


def wikimon_raw_set_page_url(prefix: str) -> str:
    page_name = wikimon_set_page_name(prefix)
    if not page_name:
        return ""
    query = urllib.parse.urlencode({"title": page_name, "action": "raw"})
    return urllib.parse.urljoin(WIKIMON_URL, f"index.php?{query}")


def wikimon_allpages_url(family: str, apcontinue: str = "") -> str:
    params = {
        "action": "query",
        "list": "allpages",
        "apprefix": f"{str(family or '').upper()}-",
        "aplimit": "100",
        "format": "json",
    }
    if apcontinue:
        params["apcontinue"] = apcontinue
    return f"{WIKIMON_API_URL}?{urllib.parse.urlencode(params)}"


def wikimon_prefix_from_set_page_name(title: Any) -> str:
    match = re.match(r"^(BT|EX|ST|AD|LM)-(\d{1,2})$", str(title or "").strip(), re.IGNORECASE)
    if not match:
        return ""
    return f"{match.group(1).upper()}{int(match.group(2))}"


def wikimon_prefix_sort_key(prefix: str) -> tuple[str, int]:
    parts = card_prefix_family_number(prefix)
    return parts if parts else ("", 0)


def fetch_wikimon_discovered_prefixes(
    *,
    fetcher: Any = fetch_json,
    families: tuple[str, ...] = WIKIMON_DISCOVERY_FAMILIES,
    recent_per_family: int = WIKIMON_DISCOVERY_RECENT_PER_FAMILY,
) -> tuple[list[str], list[str]]:
    prefixes: list[str] = []
    errors: list[str] = []
    for family in families:
        family_prefixes: list[str] = []
        apcontinue = ""
        for _ in range(4):
            try:
                payload = fetcher(wikimon_allpages_url(family, apcontinue=apcontinue))
            except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
                errors.append(f"Could not discover Wikimon {family} set pages: {error}")
                break
            pages = payload.get("query", {}).get("allpages", []) if isinstance(payload, dict) else []
            for page in pages:
                title = page.get("title") if isinstance(page, dict) else ""
                prefix = wikimon_prefix_from_set_page_name(title)
                if prefix and prefix not in family_prefixes:
                    family_prefixes.append(prefix)
            apcontinue = str(payload.get("continue", {}).get("apcontinue") or "") if isinstance(payload, dict) else ""
            if not apcontinue:
                break
        family_prefixes.sort(key=lambda prefix: wikimon_prefix_sort_key(prefix)[1], reverse=True)
        for prefix in family_prefixes[: max(0, recent_per_family)]:
            append_unique_prefix(prefixes, prefix)
    return prefixes, errors


def wikimon_prefixes_from_items(items: list[dict[str, Any]], discovered_prefixes: list[str] | None = None) -> list[str]:
    prefixes: list[str] = []
    for item in items or []:
        append_prefix_and_next(prefixes, reveal_card_prefix(item.get("code")), limit=WIKIMON_MAX_PREFIXES)
        if len(prefixes) >= WIKIMON_MAX_PREFIXES:
            break
    for prefix in WIKIMON_DEFAULT_PREFIXES:
        append_prefix_and_next(prefixes, prefix, limit=WIKIMON_MAX_PREFIXES)
    for prefix in discovered_prefixes or []:
        append_prefix_and_next(prefixes, prefix, limit=WIKIMON_MAX_PREFIXES)
    return prefixes[:WIKIMON_MAX_PREFIXES]


def wikimon_card_code(prefix: str, number: str) -> str:
    normalized_prefix = normalize_wiki_page_code(prefix)
    digits = re.sub(r"\D+", "", str(number or ""))
    if not normalized_prefix or not digits:
        return ""
    if normalized_prefix.startswith("LM"):
        return f"LM-{digits.zfill(3)}"
    width = 2 if normalized_prefix.startswith("ST") else 3
    return f"{normalized_prefix}-{digits.zfill(width)}"


def parse_wikimon_dcg_table_fields(body: str) -> dict[str, str]:
    fields: dict[str, str] = {}
    for chunk in re.split(r"\n\s*\|", "\n" + str(body or "")):
        if "=" not in chunk:
            continue
        key, value = chunk.split("=", 1)
        key = key.strip().lower()
        if key:
            fields[key] = clean_wiki_markup(value)
    return fields


def wikimon_original_image_url(url: str) -> str:
    joined = urllib.parse.urljoin(WIKIMON_URL, html.unescape(str(url or "")))
    parsed = urllib.parse.urlparse(joined)
    match = re.match(r"^/images/thumb/((?:[^/]+/){2}Dcg-[^/]+\.jpg)/[^/]+$", parsed.path)
    if match:
        return urllib.parse.urlunparse(parsed._replace(path=f"/images/{match.group(1)}", query="", fragment=""))
    return urllib.parse.urlunparse(parsed._replace(query="", fragment=""))


def wikimon_image_urls_from_html(page_html: str) -> dict[str, str]:
    images: dict[str, str] = {}
    for match in WIKIMON_IMAGE_RE.finditer(str(page_html or "")):
        code = normalize_wiki_page_code(match.group(1))
        if code and code not in images:
            images[code] = wikimon_original_image_url(match.group(2))
    return images


def normalize_wikimon_card(
    fields: dict[str, str],
    *,
    prefix: str,
    image_urls: dict[str, str],
    checked_at: datetime,
) -> dict[str, Any] | None:
    code = wikimon_card_code(prefix, fields.get("no", ""))
    name = re.sub(r"\s+", " ", str(fields.get("n") or fields.get("n2") or code)).strip()
    if fields.get("n") and fields.get("n2"):
        name = f"{fields['n']} / {fields['n2']}"
    image_url = image_urls.get(code, "")
    if not code or not name or not image_url:
        return None
    page_url = wikimon_set_page_url(prefix)
    created = checked_at.astimezone(timezone.utc)
    return {
        "id": f"wikimon-{code}",
        "postId": f"wikimon-{code}",
        "postUrl": page_url,
        "createdAt": created.isoformat(),
        "date": local_date_from_datetime(created),
        "code": code,
        "name": name,
        "cards": [{"code": code, "name": name}],
        "text": f"[{code} {name}] {wikimon_set_page_name(prefix)}",
        "mediaUrls": [image_url],
        "imageUrl": image_url,
        "source": "wikimon",
        "sourceLabel": "Wikimon",
        "sourceSetName": wikimon_set_page_name(prefix),
    }


def parse_wikimon_reveals(raw_page: str, page_html: str, *, prefix: str, checked_at: datetime) -> list[dict[str, Any]]:
    image_urls = wikimon_image_urls_from_html(page_html)
    items: list[dict[str, Any]] = []
    seen_codes: set[str] = set()
    for match in WIKIMON_DCG_TABLE_RE.finditer(str(raw_page or "")):
        fields = parse_wikimon_dcg_table_fields(match.group(1))
        item = normalize_wikimon_card(fields, prefix=prefix, image_urls=image_urls, checked_at=checked_at)
        if not item:
            continue
        code = normalize_wiki_page_code(str(item.get("code") or ""))
        if code in seen_codes:
            continue
        seen_codes.add(code)
        items.append(item)
    return items


def check_wikimon_reveals_now(
    app_support_dir: Path,
    *,
    prefixes: list[str] | None = None,
    fetcher: Any = fetch_text,
    discovery_fetcher: Any = fetch_json,
    now: datetime | None = None,
) -> dict[str, Any]:
    checked_at = now or datetime.now(timezone.utc)
    if checked_at.tzinfo is None:
        checked_at = checked_at.replace(tzinfo=timezone.utc)

    cache_path = reveals_cache_path(app_support_dir)
    cache = read_json(cache_path, {})
    existing_items = normalize_reveal_items(cache.get("items")) if isinstance(cache, dict) else []
    existing_codes = {normalize_wiki_page_code(str(item.get("code") or "")) for item in existing_items if isinstance(item, dict)}

    errors: list[str] = []
    discovered_prefixes: list[str] = []
    if prefixes is None:
        discovered_prefixes, discovery_errors = fetch_wikimon_discovered_prefixes(fetcher=discovery_fetcher)
        errors.extend(discovery_errors)
    selected_prefixes = [normalize_wiki_page_code(prefix) for prefix in (prefixes or wikimon_prefixes_from_items(existing_items, discovered_prefixes))]
    selected_prefixes = [prefix for prefix in selected_prefixes if prefix][:WIKIMON_MAX_PREFIXES]

    new_items: list[dict[str, Any]] = []
    seen_new_codes: set[str] = set()
    for prefix in selected_prefixes:
        raw_url = wikimon_raw_set_page_url(prefix)
        page_url = wikimon_set_page_url(prefix)
        if not raw_url or not page_url:
            continue
        try:
            raw_page = fetcher(raw_url)
            page_html = fetcher(page_url)
        except urllib.error.HTTPError as error:
            errors.append(f"Wikimon {prefix} returned HTTP {int(error.code)}.")
            continue
        except (urllib.error.URLError, TimeoutError) as error:
            errors.append(f"Could not fetch Wikimon {prefix}: {error}")
            continue
        for item in parse_wikimon_reveals(raw_page, page_html, prefix=prefix, checked_at=checked_at):
            code = normalize_wiki_page_code(str(item.get("code") or ""))
            if not code or code in existing_codes or code in seen_new_codes:
                continue
            new_items.append(item)
            seen_new_codes.add(code)

    if not new_items and errors and not existing_items:
        raise RuntimeError(errors[0])

    merged_items = merge_reveal_items(existing_items, new_items)
    next_cache = dict(cache) if isinstance(cache, dict) else {}
    next_cache.update(
        {
            "lastChecked": checked_at.timestamp(),
            "source": "wikimon",
            "items": merged_items,
            "errors": errors,
        }
    )
    write_json(cache_path, next_cache)

    return {
        "ok": True,
        "source": "wikimon",
        "skipped": False,
        "newRevealCount": len(new_items),
        "prefixes": selected_prefixes,
        "errors": errors,
        "items": new_items,
    }


def add_official_matches(items: list[dict[str, Any]], card_catalog: list[dict[str, Any]]) -> list[dict[str, Any]]:
    by_number: dict[str, list[dict[str, Any]]] = {}
    for card in card_catalog:
        key = str(card.get("cardNumber") or card.get("code") or "").upper()
        if not key:
            continue
        by_number.setdefault(key, []).append(card)

    enriched: list[dict[str, Any]] = []
    for item in items:
        clone = dict(item)
        matches = by_number.get(str(item.get("code") or "").upper(), [])
        clone["officialCards"] = matches[:4]
        clone["matchedOfficial"] = bool(matches)
        enriched.append(clone)
    return enriched


def official_card_numbers(card_catalog: list[dict[str, Any]]) -> set[str]:
    numbers: set[str] = set()
    for card in card_catalog:
        key = normalize_wiki_page_code(str(card.get("cardNumber") or card.get("code") or ""))
        if key:
            numbers.add(key)
    return numbers


def reveal_cards_from_cache(app_support_dir: Path) -> list[dict[str, Any]]:
    cache = read_json(reveals_cache_path(app_support_dir), {})
    items = normalize_reveal_items(cache.get("items")) if isinstance(cache, dict) else []
    cards: list[dict[str, Any]] = []
    seen: set[str] = set()
    for item in items or []:
        if not isinstance(item, dict):
            continue
        code = normalize_wiki_page_code(str(item.get("code") or ""))
        if not code or code in seen:
            continue
        cards.append(item)
        seen.add(code)
    cards.sort(key=lambda item: (item.get("date") or "", item.get("tweetId") or "", item.get("id") or ""), reverse=True)
    return cards


def cached_or_fetch_wiki_card(
    app_support_dir: Path,
    code: str,
    wiki_cache: dict[str, Any],
    allow_fetch: bool = False,
    force_fetch: bool = False,
) -> dict[str, Any] | None:
    key = normalize_wiki_page_code(code)
    if not key:
        return None
    entry = wiki_cache.get(key) if isinstance(wiki_cache, dict) else None
    cached_card = None
    if isinstance(entry, dict):
        card = entry.get("card")
        if isinstance(card, dict) and card:
            cached_card = card
            if not force_fetch:
                return cached_card

    if not allow_fetch:
        return cached_card

    card = fetch_wiki_card_payload(key)
    wiki_cache[key] = {
        "fetchedAt": time.time(),
        "parserVersion": WIKI_CACHE_VERSION,
        "ok": bool(card),
        "card": card or {},
    }
    write_json(reveal_wiki_cache_path(app_support_dir), wiki_cache)
    return card


def build_reveal_collection_card(reveal_item: dict[str, Any], wiki_card: dict[str, Any] | None) -> dict[str, Any]:
    code = normalize_wiki_page_code(str(reveal_item.get("code") or ""))
    wiki_card = wiki_card or {}
    name = str(wiki_card.get("name") or reveal_item.get("name") or code)
    raw_effect_sections = wiki_card.get("effectSections") if isinstance(wiki_card.get("effectSections"), list) else []
    effect_sections: list[dict[str, Any]] = []
    card_type = str(wiki_card.get("type") or "") or None
    for section in raw_effect_sections:
        if not isinstance(section, dict):
            continue
        effect_sections.append(normalize_wiki_effect_section(section, card_type))
    image_url = str(reveal_item.get("imageUrl") or "")
    card = {
        "count": 0,
        "name": name,
        "printedName": name,
        "code": code,
        "cardNumber": code,
        "imageUrl": image_url,
        "type": wiki_card.get("type"),
        "colors": wiki_card.get("colors") if isinstance(wiki_card.get("colors"), list) else [],
        "attribute": wiki_card.get("attribute"),
        "stage": wiki_card.get("stage"),
        "digitype": wiki_card.get("digitype") if isinstance(wiki_card.get("digitype"), list) else [],
        "dp": wiki_card.get("dp"),
        "playCost": wiki_card.get("playCost"),
        "digivolveCosts": wiki_card.get("digivolveCosts") if isinstance(wiki_card.get("digivolveCosts"), list) else [],
        "digivolveConditions": wiki_card.get("digivolveConditions") if isinstance(wiki_card.get("digivolveConditions"), list) else [],
        "level": wiki_card.get("level"),
        "illustrator": wiki_card.get("illustrator") or "",
        "hasAce": bool(wiki_card.get("hasAce")),
        "isAltArt": False,
        "isRevealPlaceholder": True,
        "restriction": wiki_card.get("restriction") or "Unknown",
        "copyLimit": wiki_card.get("copyLimit") or 4,
        "effectText": normalize_plain_text_tokens(
            wiki_card.get("effectText") or " ".join(section.get("text", "") for section in effect_sections if isinstance(section, dict))
        ),
        "effectSections": effect_sections,
        "linkDP": wiki_card.get("linkDP"),
        "linkEffect": wiki_card.get("linkEffect") or "",
        "linkRequirement": wiki_card.get("linkRequirement") or "",
        "wikiUrl": wiki_card.get("wikiUrl") or f"https://digimoncardgame.fandom.com/wiki/{urllib.parse.quote(code)}",
        "source": "reveal-wiki",
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
                card["effectText"],
                "reveal wiki",
            ],
        )
    ).lower()
    return card


def load_reveal_collection_cards(
    app_support_dir: Path,
    card_catalog: list[dict[str, Any]],
    refresh_wiki: bool = False,
) -> list[dict[str, Any]]:
    official_numbers = official_card_numbers(card_catalog)
    wiki_cache = read_json(reveal_wiki_cache_path(app_support_dir), {})
    if not isinstance(wiki_cache, dict):
        wiki_cache = {}

    cards: list[dict[str, Any]] = []
    for reveal_item in reveal_cards_from_cache(app_support_dir):
        code = normalize_wiki_page_code(str(reveal_item.get("code") or ""))
        if not code or code in official_numbers:
            continue
        wiki_card = cached_or_fetch_wiki_card(
            app_support_dir,
            code,
            wiki_cache,
            allow_fetch=refresh_wiki,
            force_fetch=refresh_wiki,
        )
        cards.append(build_reveal_collection_card(reveal_item, wiki_card))

    cards.sort(key=lambda card: (str(card.get("cardNumber") or ""), str(card.get("code") or "")))
    return cards


def load_reveals(app_support_dir: Path, card_catalog: list[dict[str, Any]], force_refresh: bool = False) -> dict[str, Any]:
    cache_path = reveals_cache_path(app_support_dir)
    cache = read_json(cache_path, {})
    raw_cached_items = cache.get("items") if isinstance(cache, dict) else []
    cached_items = normalize_reveal_items(raw_cached_items) if isinstance(raw_cached_items, list) else []

    errors: list[str] = []
    items = cached_items if isinstance(cached_items, list) else []
    source_message = ""
    next_live_refresh_at = ""

    if force_refresh:
        try:
            result = check_twitterwebviewer_reveals_now(app_support_dir)
            source_message = f"TwitterWebViewer check complete: {result.get('newRevealCount', 0)} new reveal posts."
            if result.get("stoppedAtSeenTweetId"):
                source_message += f" Stopped at seen tweet {result.get('stoppedAtSeenTweetId')}."
            cache = read_json(cache_path, {})
            items = normalize_reveal_items(cache.get("items")) if isinstance(cache, dict) else []
        except Exception as error:
            twitterwebviewer_error = f"Could not check TwitterWebViewer reveals: {error}"
            fallback_summaries: list[str] = []
            fallback_errors: list[str] = []
            for label, checker in (
                ("DigimonCard.io", check_digimoncard_io_reveals_now),
                ("Wikimon", check_wikimon_reveals_now),
            ):
                try:
                    result = checker(app_support_dir)
                except Exception as fallback_error:
                    fallback_errors.append(f"Could not check {label} fallback: {fallback_error}")
                    continue
                fallback_summaries.append(f"{label} fallback complete: {result.get('newRevealCount', 0)} new reveal cards.")
                result_errors = result.get("errors") if isinstance(result.get("errors"), list) else []
                if result_errors:
                    fallback_errors.append(str(result_errors[0]))
            if fallback_summaries:
                source_message = f"{twitterwebviewer_error} {' '.join(fallback_summaries)}"
                if fallback_errors:
                    source_message += f" {fallback_errors[0]}"
                cache = read_json(cache_path, {})
                items = normalize_reveal_items(cache.get("items")) if isinstance(cache, dict) else []
            else:
                errors = [twitterwebviewer_error] + fallback_errors
                items = cached_items if isinstance(cached_items, list) else []

    cached_errors = cache.get("errors") if isinstance(cache, dict) and isinstance(cache.get("errors"), list) else []
    visible_errors = errors or cached_errors
    if items and visible_errors:
        source_message = visible_errors[0]
        visible_errors = []

    reveal_collection_cards = (
        load_reveal_collection_cards(app_support_dir, card_catalog, refresh_wiki=True)
        if force_refresh
        else []
    )

    return {
        "source": str(cache.get("source") or "twitterwebviewer") if isinstance(cache, dict) else "twitterwebviewer",
        "lastChecked": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(float(cache.get("lastChecked") or time.time()) if isinstance(cache, dict) else time.time())),
        "cachePath": str(cache_path),
        "items": add_official_matches(items, card_catalog),
        "revealCollectionCards": reveal_collection_cards,
        "errors": visible_errors,
        "sourceMessage": source_message,
        "nextLiveRefreshAt": next_live_refresh_at,
    }
