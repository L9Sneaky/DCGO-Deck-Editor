from __future__ import annotations

import email.utils
import html
import json
import mimetypes
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any


SCREEN_NAME = "digimon_tcg_EN"
TIMELINE_URL = f"https://syndication.twitter.com/srv/timeline-profile/screen-name/{SCREEN_NAME}"
TWITTER_WEB_VIEWER_URL = f"https://twitterwebviewer.com/?user={SCREEN_NAME}"
TWITTER_WEB_VIEWER_TWEETS_URL = f"https://twitterwebviewer.com/api/tweets/{SCREEN_NAME}"
OEMBED_URL = "https://publish.twitter.com/oembed"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15"
CHROME_USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36"
)
CACHE_MAX_AGE_SECONDS = 3 * 60 * 60
WIKI_CACHE_MAX_AGE_SECONDS = 7 * 24 * 60 * 60
WIKI_CACHE_VERSION = 12
MAX_REVEALS = 140
RECENT_REVEAL_WINDOW_DAYS = 31
MAX_TWITTER_WEB_VIEWER_PAGES = 8
DEFAULT_SEED_STATUS_IDS = ["2060156669078974838"]
FANDOM_API_URL = "https://digimoncardgame.fandom.com/api.php"

REVEAL_HEADLINE_RE = re.compile(r"\[(?:card\s+reveals?|reveals?)\]", re.IGNORECASE)
REVEAL_CARD_CODE_RE = r"(?:BT\d{1,2}|EX\d{1,2}|P)-\d{2,3}(?:_[A-Z0-9]+)?"
CARD_REF_RE = re.compile(rf"\[({REVEAL_CARD_CODE_RE})\s+([^\]]+)\]", re.IGNORECASE)
STATUS_ID_RE = re.compile(r"(?:x|twitter)\.com/[^/]+/status/(\d+)|/status/(\d+)")
NEXT_DATA_RE = re.compile(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', re.DOTALL)
PBS_MEDIA_RE = re.compile(r"https://pbs\.twimg\.com/media/[^\"\\<>\s]+")
WIKI_CARD_FIELD_RE = re.compile(r"\|([A-Za-z][A-Za-z0-9_]*)\s*=")
WIKI_TEMPLATE_RE = re.compile(r"\{\{([^{}]+)\}\}")
WIKI_LINK_RE = re.compile(r"\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]")
PLAIN_TEXT_TOKEN_FIXES = [
    (re.compile(r"(^|[\s,.;:])End Your Turn(?=\s)", re.IGNORECASE), r"\1[End of Your Turn]"),
    (re.compile(r"(^|[\s,.;:])Recovery\s*\+?(\d+)(?:\s*\(Deck\))?", re.IGNORECASE), r"\1＜Recovery +\2 (Deck)＞"),
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


def reveal_sources_path(app_support_dir: Path) -> Path:
    return reveals_root(app_support_dir) / "reveal_sources.txt"


def reveal_wiki_cache_path(app_support_dir: Path) -> Path:
    return reveals_root(app_support_dir) / "wiki_cache.json"


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


def normalize_wiki_page_code(code: str) -> str:
    return str(code or "").strip().split("_", 1)[0].upper()


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
            extra_headers={"Accept": "application/json", "User-Agent": CHROME_USER_AGENT},
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


def parse_twitter_datetime(value: str) -> str:
    try:
        parsed = email.utils.parsedate_to_datetime(value)
        return parsed.isoformat()
    except (TypeError, ValueError):
        return ""


def reveal_date_from_created_at(value: str) -> str:
    iso_value = parse_twitter_datetime(value)
    return iso_value[:10] if iso_value else ""


def tweet_is_recent(tweet: dict[str, Any]) -> bool:
    created_at = str(tweet.get("created_at") or "")
    if not created_at:
        return True
    try:
        parsed = email.utils.parsedate_to_datetime(created_at)
    except (TypeError, ValueError):
        return True
    return (time.time() - parsed.timestamp()) <= RECENT_REVEAL_WINDOW_DAYS * 24 * 60 * 60


def reveal_item_is_recent(item: dict[str, Any]) -> bool:
    date_text = str(item.get("date") or "")
    try:
        item_time = time.mktime(time.strptime(date_text, "%Y-%m-%d"))
    except ValueError:
        return True
    return (time.time() - item_time) <= RECENT_REVEAL_WINDOW_DAYS * 24 * 60 * 60


def clean_tweet_text(value: str) -> str:
    text = html.unescape(str(value or "")).replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"https://t\.co/\S+", "", text)
    text = re.sub(r"pic\.twitter\.com/\S+", "", text)
    lines = [line.strip() for line in text.split("\n")]
    return "\n".join(line for line in lines if line).strip()


def extract_card_refs(text: str) -> list[dict[str, str]]:
    refs: list[dict[str, str]] = []
    seen: set[str] = set()
    for match in CARD_REF_RE.finditer(html.unescape(text or "")):
        code = match.group(1).strip().upper()
        name = re.sub(r"\s+", " ", match.group(2).strip())
        if not code or code in seen:
            continue
        refs.append({"code": code, "name": name})
        seen.add(code)
    return refs


def normalize_media_url(url: str) -> str:
    cleaned = html.unescape(str(url or "")).replace("\\/", "/")
    if "?" in cleaned:
        return cleaned
    if "pbs.twimg.com/media/" in cleaned:
        suffix = Path(urllib.parse.urlparse(cleaned).path).suffix.lstrip(".").lower() or "jpg"
        if suffix == "jpeg":
            suffix = "jpg"
        return f"{cleaned}?format={suffix}&name=orig"
    return cleaned


def media_extension(url: str, content_type: str | None = None) -> str:
    if content_type:
        guessed = mimetypes.guess_extension(content_type.split(";", 1)[0].strip())
        if guessed:
            return ".jpg" if guessed == ".jpe" else guessed
    suffix = Path(urllib.parse.urlparse(url).path).suffix.lower()
    if suffix in {".jpg", ".jpeg", ".png", ".webp"}:
        return ".jpg" if suffix == ".jpeg" else suffix
    return ".jpg"


def download_image(app_support_dir: Path, tweet_id: str, media_id: str, url: str) -> str:
    image_dir = reveal_images_dir(app_support_dir)
    image_dir.mkdir(parents=True, exist_ok=True)
    normalized_url = normalize_media_url(url)
    existing = sorted(image_dir.glob(f"{tweet_id}_{media_id}.*"))
    if existing:
        return existing[0].name

    request = urllib.request.Request(normalized_url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=40) as response:
        content_type = response.headers.get("Content-Type")
        raw = response.read()
    suffix = media_extension(normalized_url, content_type)
    target = image_dir / f"{tweet_id}_{media_id}{suffix}"
    target.write_bytes(raw)
    return target.name


def parse_timeline_tweets(raw_html: str) -> list[dict[str, Any]]:
    match = NEXT_DATA_RE.search(raw_html)
    if not match:
        return []
    try:
        data = json.loads(match.group(1))
    except json.JSONDecodeError:
        return []
    entries = (
        data.get("props", {})
        .get("pageProps", {})
        .get("timeline", {})
        .get("entries", [])
    )
    tweets: list[dict[str, Any]] = []
    seen: set[str] = set()
    for entry in entries:
        tweet = entry.get("content", {}).get("tweet") if isinstance(entry, dict) else None
        if not isinstance(tweet, dict):
            continue
        tweet_id = str(tweet.get("id_str") or "")
        if not tweet_id or tweet_id in seen:
            continue
        seen.add(tweet_id)
        tweets.append(tweet)
    return tweets


def twitter_web_viewer_headers() -> dict[str, str]:
    return {
        "User-Agent": CHROME_USER_AGENT,
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": TWITTER_WEB_VIEWER_URL,
    }


def normalize_twitter_web_viewer_tweet(tweet: dict[str, Any]) -> dict[str, Any]:
    media_items = []
    for index, media in enumerate(tweet.get("media") or []):
        media_url = str(media.get("url") or "")
        if not media_url:
            continue
        media_type = str(media.get("type") or "").lower()
        if media_type not in {"image", "photo"}:
            continue
        media_items.append(
            {
                "id_str": str(media.get("id") or index + 1),
                "type": "photo",
                "media_url_https": media_url,
            }
        )

    return {
        "id_str": str(tweet.get("id") or ""),
        "created_at": str(tweet.get("createdAt") or tweet.get("timelineAt") or ""),
        "full_text": str(tweet.get("content") or ""),
        "permalink": f"/{SCREEN_NAME}/status/{tweet.get('id')}",
        "extended_entities": {"media": media_items},
        "entities": {"media": media_items},
    }


def fetch_twitter_web_viewer_tweets() -> tuple[list[dict[str, Any]], list[str]]:
    tweets: list[dict[str, Any]] = []
    errors: list[str] = []
    cursor = ""
    seen_ids: set[str] = set()
    found_recent = False

    for _ in range(MAX_TWITTER_WEB_VIEWER_PAGES):
        params = {"cursor": cursor} if cursor else {}
        url = TWITTER_WEB_VIEWER_TWEETS_URL
        if params:
            url += "?" + urllib.parse.urlencode(params)

        try:
            payload = fetch_json(url, extra_headers=twitter_web_viewer_headers())
        except (urllib.error.URLError, TimeoutError, json.JSONDecodeError) as error:
            errors.append(f"Could not fetch Twitter Web Viewer tweets: {error}")
            break

        data = payload.get("data") if isinstance(payload, dict) else None
        raw_tweets = data.get("tweets") if isinstance(data, dict) else []
        if not isinstance(raw_tweets, list) or not raw_tweets:
            break

        page_has_recent = False
        for raw_tweet in raw_tweets:
            if not isinstance(raw_tweet, dict):
                continue
            normalized = normalize_twitter_web_viewer_tweet(raw_tweet)
            tweet_id = str(normalized.get("id_str") or "")
            if not tweet_id or tweet_id in seen_ids:
                continue
            seen_ids.add(tweet_id)
            if tweet_is_recent(normalized):
                page_has_recent = True
                found_recent = True
                tweets.append(normalized)

        cursor = str(data.get("nextCursor") or "") if isinstance(data, dict) else ""
        if not cursor or not data.get("hasNextPage"):
            break
        if found_recent and not page_has_recent:
            break

    return tweets, errors


def parse_tweet_from_oembed(status_id: str) -> dict[str, Any] | None:
    url = f"https://x.com/{SCREEN_NAME}/status/{status_id}"
    query = urllib.parse.urlencode({"url": url, "omit_script": "1"})
    try:
        payload = fetch_json(f"{OEMBED_URL}?{query}")
    except (urllib.error.URLError, TimeoutError, json.JSONDecodeError):
        return None

    raw_html = str(payload.get("html") or "")
    paragraph = re.search(r"<p[^>]*>(.*?)</p>", raw_html, flags=re.IGNORECASE | re.DOTALL)
    raw_html = paragraph.group(1) if paragraph else raw_html
    text = re.sub(r"<br\s*/?>", "\n", raw_html, flags=re.IGNORECASE)
    text = re.sub(r"<[^>]+>", "", text)
    return {
        "id_str": status_id,
        "created_at": "",
        "full_text": html.unescape(text),
        "permalink": f"/{SCREEN_NAME}/status/{status_id}",
        "extended_entities": {"media": []},
        "entities": {"media": []},
    }


def merge_media_from_status_page(tweet: dict[str, Any]) -> dict[str, Any]:
    tweet_id = str(tweet.get("id_str") or "")
    if not tweet_id:
        return tweet
    media = (tweet.get("extended_entities") or {}).get("media") or (tweet.get("entities") or {}).get("media") or []
    if media:
        return tweet
    try:
        raw_html = fetch_text(f"https://x.com/{SCREEN_NAME}/status/{tweet_id}")
    except (urllib.error.URLError, TimeoutError):
        return tweet
    urls = []
    seen: set[str] = set()
    for raw_url in PBS_MEDIA_RE.findall(raw_html):
        url = html.unescape(raw_url).replace("\\/", "/")
        if "/profile_" in url or "profile_images" in url or "profile_banners" in url:
            continue
        base = url.split("?", 1)[0]
        if base in seen:
            continue
        seen.add(base)
        urls.append(url)
    if not urls:
        return tweet
    tweet["extended_entities"] = {
        "media": [
            {
                "id_str": str(index + 1),
                "type": "photo",
                "media_url_https": url,
            }
            for index, url in enumerate(urls)
        ]
    }
    return tweet


def status_ids_from_source_file(app_support_dir: Path) -> list[str]:
    path = reveal_sources_path(app_support_dir)
    if not path.is_file():
        return []
    ids: list[str] = []
    seen: set[str] = set()
    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        match = STATUS_ID_RE.search(stripped)
        status_id = (match.group(1) or match.group(2)) if match else stripped if stripped.isdigit() else ""
        if status_id and status_id not in seen:
            ids.append(status_id)
            seen.add(status_id)
    return ids


def tweet_is_reveal(tweet: dict[str, Any]) -> bool:
    text = str(tweet.get("full_text") or tweet.get("text") or "")
    return bool(REVEAL_HEADLINE_RE.search(text) and extract_card_refs(text))


def reveal_items_from_tweet(app_support_dir: Path, tweet: dict[str, Any], previous_items: dict[str, dict[str, Any]]) -> list[dict[str, Any]]:
    tweet_id = str(tweet.get("id_str") or "")
    text = clean_tweet_text(str(tweet.get("full_text") or tweet.get("text") or ""))
    refs = extract_card_refs(text)
    if not tweet_id or not refs:
        return []

    media = (tweet.get("extended_entities") or {}).get("media") or (tweet.get("entities") or {}).get("media") or []
    photos = [item for item in media if item.get("type") == "photo" and item.get("media_url_https")]
    if not photos:
        return []

    created_at = str(tweet.get("created_at") or "")
    date = reveal_date_from_created_at(created_at)
    if not date:
        date = time.strftime("%Y-%m-%d")

    items: list[dict[str, Any]] = []
    for index, media_item in enumerate(photos):
        ref = refs[index] if index < len(refs) else refs[0]
        media_id = str(media_item.get("id_str") or media_item.get("media_key") or index + 1)
        item_id = f"{tweet_id}-{media_id}"
        previous = previous_items.get(item_id, {})
        image_file = previous.get("imageFile")
        if not image_file:
            try:
                image_file = download_image(app_support_dir, tweet_id, media_id, str(media_item.get("media_url_https") or ""))
            except (urllib.error.URLError, TimeoutError, OSError):
                image_file = ""
        items.append(
            {
                "id": item_id,
                "tweetId": tweet_id,
                "tweetUrl": f"https://x.com/{SCREEN_NAME}/status/{tweet_id}",
                "createdAt": parse_twitter_datetime(created_at),
                "date": date,
                "code": ref["code"],
                "name": ref["name"],
                "cards": refs,
                "text": text,
                "imageFile": image_file,
                "imageUrl": f"/api/reveals/image/{urllib.parse.quote(image_file)}" if image_file else normalize_media_url(str(media_item.get("media_url_https") or "")),
                "source": "x",
            }
        )
    return items


def fetch_reveal_items(app_support_dir: Path, previous_items: dict[str, dict[str, Any]]) -> tuple[list[dict[str, Any]], list[str]]:
    errors: list[str] = []
    tweets_by_id: dict[str, dict[str, Any]] = {}

    twitter_web_viewer_tweets, twitter_web_viewer_errors = fetch_twitter_web_viewer_tweets()
    errors.extend(twitter_web_viewer_errors)
    for tweet in twitter_web_viewer_tweets:
        if tweet_is_reveal(tweet):
            tweets_by_id[str(tweet.get("id_str"))] = tweet

    try:
        for tweet in parse_timeline_tweets(fetch_text(TIMELINE_URL)):
            if tweet_is_recent(tweet) and tweet_is_reveal(tweet):
                tweets_by_id.setdefault(str(tweet.get("id_str")), tweet)
    except (urllib.error.URLError, TimeoutError) as error:
        errors.append(f"Could not fetch X profile timeline: {error}")

    seed_ids = DEFAULT_SEED_STATUS_IDS + status_ids_from_source_file(app_support_dir)
    for status_id in seed_ids:
        if status_id in tweets_by_id:
            continue
        tweet = parse_tweet_from_oembed(status_id)
        if tweet and tweet_is_reveal(tweet):
            tweets_by_id[status_id] = merge_media_from_status_page(tweet)

    items: list[dict[str, Any]] = []
    for tweet in tweets_by_id.values():
        items.extend(reveal_items_from_tweet(app_support_dir, merge_media_from_status_page(tweet), previous_items))
    for previous in previous_items.values():
        if isinstance(previous, dict) and reveal_item_is_recent(previous):
            items.append(previous)
    deduped: dict[str, dict[str, Any]] = {}
    for item in items:
        item_id = str(item.get("id") or "")
        if item_id and item_id not in deduped:
            deduped[item_id] = item
    items = list(deduped.values())
    items.sort(key=lambda item: (item.get("date") or "", item.get("tweetId") or "", item.get("id") or ""), reverse=True)
    return items[:MAX_REVEALS], errors


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
    items = cache.get("items") if isinstance(cache, dict) else []
    cards: list[dict[str, Any]] = []
    seen: set[str] = set()
    for item in items or []:
        if not isinstance(item, dict):
            continue
        code = normalize_wiki_page_code(str(item.get("code") or ""))
        if not code or code in seen:
            continue
        if not reveal_item_is_recent(item):
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
    cached_items = cache.get("items") if isinstance(cache, dict) else []
    previous_items = {
        str(item.get("id")): item
        for item in cached_items or []
        if isinstance(item, dict) and item.get("id")
    }

    last_checked = float(cache.get("lastChecked") or 0) if isinstance(cache, dict) else 0
    should_refresh = force_refresh or not cached_items or (time.time() - last_checked) > CACHE_MAX_AGE_SECONDS
    errors: list[str] = []
    items = cached_items if isinstance(cached_items, list) else []

    if should_refresh:
        try:
            items, errors = fetch_reveal_items(app_support_dir, previous_items)
            checked_at = time.time()
            write_json(
                cache_path,
                {
                    "lastChecked": checked_at,
                    "source": TWITTER_WEB_VIEWER_URL,
                    "items": items,
                    "errors": errors,
                },
            )
            cache = {"lastChecked": checked_at, "errors": errors}
        except Exception as error:
            errors = [f"Could not update reveal cache: {error}"]
            items = cached_items if isinstance(cached_items, list) else []

    cached_errors = cache.get("errors") if isinstance(cache, dict) and isinstance(cache.get("errors"), list) else []
    visible_errors = errors or cached_errors
    if items and visible_errors:
        visible_errors = []

    reveal_collection_cards = (
        load_reveal_collection_cards(app_support_dir, card_catalog, refresh_wiki=True)
        if force_refresh
        else []
    )

    return {
        "source": TWITTER_WEB_VIEWER_URL,
        "lastChecked": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(float(cache.get("lastChecked") or time.time()) if isinstance(cache, dict) else time.time())),
        "cachePath": str(cache_path),
        "items": add_official_matches(items, card_catalog),
        "revealCollectionCards": reveal_collection_cards,
        "errors": visible_errors,
    }
