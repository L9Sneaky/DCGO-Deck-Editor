#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname "$0")" && pwd)
PYTHON_BIN=${PYTHON_BIN:-python3}
OUTPUT_HTML="$SCRIPT_DIR/deck_browser/output/current_decks.html"
BUILDER_SCRIPT="$SCRIPT_DIR/deck_browser/build_deck_browser.py"
DATA_SCRIPT="$SCRIPT_DIR/deck_browser/deck_data.py"
SERVER_SCRIPT="$SCRIPT_DIR/deck_browser/deck_browser_server.py"
HTML_TEMPLATE="$SCRIPT_DIR/deck_browser/templates/deck_browser.html"
CSS_TEMPLATE_DIR="$SCRIPT_DIR/deck_browser/templates/css"
JS_TEMPLATE_DIR="$SCRIPT_DIR/deck_browser/templates/js"
DEFAULT_TEST_SUPPORT_DIR="$HOME/Library/Application Support/DCGO-AutoUpdate-Test"

find_deck_root() {
  if [ -n "${DCGO_DECK_ROOT:-}" ] && [ -d "$DCGO_DECK_ROOT" ]; then
    printf "%s\n" "$DCGO_DECK_ROOT"
    return
  fi

  for CANDIDATE in \
    "$SCRIPT_DIR/Assets/Decks" \
    "$SCRIPT_DIR/../Assets/Decks" \
    "$SCRIPT_DIR/DCGO_Application/Assets/Decks" \
    "$SCRIPT_DIR/DCGO.app/Contents/drive_c/Program Files/DCGO_Standalone/Assets/Decks" \
    "$SCRIPT_DIR/DCGO.app/Contents/drive_c/Program Files/DCGO_Application-3/Assets/Decks"
  do
    if [ -d "$CANDIDATE" ]; then
      (CDPATH= cd -- "$CANDIDATE" && pwd)
      return
    fi
  done

  find "$SCRIPT_DIR" -maxdepth 6 -type d -path "*/Assets/Decks" -print -quit 2>/dev/null || true
}

if [ -z "${DCGO_DECK_ROOT:-}" ] && [ -z "${DCGO_APP_SUPPORT_DIR:-}" ] && [ -d "$SCRIPT_DIR/DCGO.app" ] && [ -d "$DEFAULT_TEST_SUPPORT_DIR/userdata/Decks" ]; then
  DECK_ROOT=""
else
  DECK_ROOT=$(find_deck_root | sed -n '1p')
fi

if [ -n "${DCGO_APP_SUPPORT_DIR:-}" ]; then
  APP_SUPPORT_DIR="$DCGO_APP_SUPPORT_DIR"
elif [ -z "$DECK_ROOT" ] && [ -d "$DEFAULT_TEST_SUPPORT_DIR/userdata/Decks" ]; then
  APP_SUPPORT_DIR="$DEFAULT_TEST_SUPPORT_DIR"
else
  APP_SUPPORT_DIR="$SCRIPT_DIR/deck_browser_data"
fi

if ! command -v "$PYTHON_BIN" >/dev/null 2>&1; then
  printf 'Missing required interpreter: %s\n' "$PYTHON_BIN" >&2
  printf 'Install Python 3, then run this launcher again.\n' >&2
  exit 1
fi

for REQUIRED_FILE in "$BUILDER_SCRIPT" "$DATA_SCRIPT" "$SERVER_SCRIPT" "$HTML_TEMPLATE"; do
  if [ ! -f "$REQUIRED_FILE" ]; then
    printf 'Missing deck editor file: %s\n' "$REQUIRED_FILE" >&2
    exit 1
  fi
done

for REQUIRED_DIR in "$CSS_TEMPLATE_DIR" "$JS_TEMPLATE_DIR"; do
  if [ ! -d "$REQUIRED_DIR" ]; then
    printf 'Missing deck editor template folder: %s\n' "$REQUIRED_DIR" >&2
    exit 1
  fi
done

mkdir -p "$(dirname "$OUTPUT_HTML")"
mkdir -p "$APP_SUPPORT_DIR"

if [ -n "$DECK_ROOT" ]; then
  "$PYTHON_BIN" "$SERVER_SCRIPT" \
    --app-support-dir "$APP_SUPPORT_DIR" \
    --deck-root "$DECK_ROOT" \
    --output "$OUTPUT_HTML" \
    --open
else
  "$PYTHON_BIN" "$SERVER_SCRIPT" \
    --app-support-dir "$APP_SUPPORT_DIR" \
    --output "$OUTPUT_HTML" \
    --open
fi
