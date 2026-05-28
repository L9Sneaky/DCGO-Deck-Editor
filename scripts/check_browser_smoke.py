#!/usr/bin/env python3
from __future__ import annotations

import argparse
import os
import re
import shutil
import subprocess
import sys
import tempfile
import textwrap
import time
from pathlib import Path


PLAYWRIGHT_VERSION = "1.60.0"


SMOKE_JS = r"""
const { chromium } = require("playwright");

async function main() {
  const url = process.argv[2];
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const errors = [];

  page.on("console", (msg) => {
    const text = msg.text();
    if (text.includes("Failed to load resource")) return;
    if (["error", "warning"].includes(msg.type())) errors.push(`${msg.type()}: ${text}`);
  });
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));

  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector(".library-deck-card", { timeout: 30000 });

  const libraryResult = await page.evaluate(() => ({
    title: document.title,
    deckCount: document.querySelectorAll(".library-deck-card").length,
    summary: document.querySelector("#library-summary")?.textContent || "",
    generated: document.querySelector("#library-generated-at-label")?.textContent || "",
    deckRoot: document.querySelector("#library-deck-root-label")?.textContent || "",
    version: document.querySelector("#app-version-label")?.textContent || "",
    hasNewDeck: Boolean(document.querySelector("#new-deck-button")),
    hasUpdateDb: Boolean(document.querySelector("#update-card-database")),
    hasUpdateCheck: Boolean(document.querySelector("#check-app-update")),
    updateStatus: document.querySelector("#update-status-label")?.textContent || "",
  }));

  const versionResult = await page.evaluate(async () => {
    const response = await fetch("/api/version");
    const payload = await response.json();
    return {
      ok: response.ok,
      currentVersion: payload.current_version || "",
      status: payload.status || "",
    };
  });

  const originalCollectionWantedText = await page.evaluate(async () => {
    const response = await fetch("/api/collection-wanted", { cache: "no-store" });
    return response.ok ? await response.text() : "";
  });

  if (
    errors.length ||
    libraryResult.deckCount < 1 ||
    !libraryResult.generated ||
    !libraryResult.deckRoot ||
    !libraryResult.version ||
    !libraryResult.hasNewDeck ||
    !libraryResult.hasUpdateDb ||
    !libraryResult.hasUpdateCheck ||
    !versionResult.ok ||
    !versionResult.currentVersion
  ) {
    console.log(JSON.stringify({ libraryResult, versionResult, errors }, null, 2));
    await browser.close();
    process.exit(1);
  }

  await page.click("#open-collection");
  await page.waitForSelector("#collection-main:not(.hidden)", { timeout: 10000 });
  await page.waitForSelector("#collection-grid .card-tile", { timeout: 30000 });

  await page.evaluate(() => {
    clearCollectionWantedList();
    renderCollection();
  });
  await page.click("#collection-grid .card-tile");
  await page.click("#collection-grid .card-tile", { modifiers: ["Shift"] });
  await page.click("#collection-grid .card-tile", { button: "right" });
  await page.click("#collection-grid .card-tile", { button: "right", modifiers: ["Shift"] });

  const disabledShortcutResult = await page.evaluate(() => ({
    wantedCount: getCollectionWantedCount(APP_DATA.cardCatalog[0]),
    detailName: document.querySelector("#details-body .details-name")?.textContent || "",
    visibleControls: document.querySelectorAll("#collection-grid .collection-card-actions").length,
    hint: document.querySelector(".collection-shortcut-hint")?.textContent || "",
    editChecked: Boolean(document.querySelector("#collection-edit-enabled")?.checked),
  }));

  await page.check("#collection-edit-enabled");
  await page.click("#collection-grid .card-tile");
  await page.click("#collection-grid .card-tile", { modifiers: ["Shift"] });
  await page.click("#collection-grid .card-tile", { button: "right" });

  const enabledShortcutResult = await page.evaluate(() => ({
    wantedCount: getCollectionWantedCount(APP_DATA.cardCatalog[0]),
    detailName: document.querySelector("#details-body .details-name")?.textContent || "",
    visibleControls: document.querySelectorAll("#collection-grid .collection-card-actions").length,
    hint: document.querySelector(".collection-shortcut-hint")?.textContent || "",
    editChecked: Boolean(document.querySelector("#collection-edit-enabled")?.checked),
  }));

  const importResult = await page.evaluate(() => {
    clearCollectionWantedList();
    const cards = APP_DATA.cardCatalog.slice(0, 5);
    const uniqueNameCounts = APP_DATA.cardCatalog.reduce((counts, card) => {
      const key = String(card.name || "").trim().toLowerCase();
      if (key) counts[key] = (counts[key] || 0) + 1;
      return counts;
    }, {});
    const uniqueNameCard = APP_DATA.cardCatalog.find((card) => uniqueNameCounts[String(card.name || "").trim().toLowerCase()] === 1);
    const lines = [
      `4 ${cards[0].code}`,
      `${cards[1].code} x2`,
      `${cards[2].code} 3`,
      `4x ${cards[3].code}`,
    ];
    if (uniqueNameCard) lines.push(uniqueNameCard.name);

    const parsed = parseCollectionWantedImport(lines.join("\n"));
    applyCollectionWantedImport(parsed, "replace");
    const afterReplace = getCollectionWantedCards();
    const addParsed = parseCollectionWantedImport(`1 ${cards[0].code}`);
    applyCollectionWantedImport(addParsed, "add");
    renderCollection();
    const afterAdd = getCollectionWantedCards();
    const stored = JSON.parse(localStorage.getItem("dcgo.collectionWantedList.v1") || "{}");
    return {
      parsedUnique: parsed.entries.length,
      replaceTotal: afterReplace.reduce((sum, item) => sum + item.count, 0),
      addTotal: afterAdd.reduce((sum, item) => sum + item.count, 0),
      storedUnique: Array.isArray(stored.wanted) ? stored.wanted.length : 0,
      hasImportButton: Boolean(document.querySelector("#collection-import-list")),
    };
  });

  const savedTextResult = await page.evaluate(async () => {
    await new Promise((resolve) => setTimeout(resolve, 350));
    const response = await fetch("/api/collection-wanted", { cache: "no-store" });
    const text = await response.text();
    return {
      ok: response.ok,
      text,
      lineCount: text.trim() ? text.trim().split(/\n+/).length : 0,
    };
  });

  await page.evaluate(() => {
    localStorage.removeItem("dcgo.collectionWantedList.v1");
  });

  await page.reload({ waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("#collection-main:not(.hidden)", { timeout: 10000 });
  await page.waitForSelector("#collection-grid .card-tile", { timeout: 30000 });
  await page.waitForFunction((expectedTotal) => (
    Number(document.querySelector("#collection-wanted-total")?.textContent || "0") === expectedTotal
  ), importResult.addTotal, { timeout: 10000 });

  const persistenceResult = await page.evaluate(() => ({
    total: getCollectionWantedCards().reduce((sum, item) => sum + item.count, 0),
    unique: getCollectionWantedCards().length,
    uiTotal: document.querySelector("#collection-wanted-total")?.textContent || "",
    dirtyText: document.querySelector("#dirty-status")?.textContent || "",
  }));

  const seededWanted = await page.evaluate(() => {
    clearCollectionWantedList();
    APP_DATA.cardCatalog.slice(0, 130).forEach((card) => setCollectionWantedCount(card, 1));
    renderCollection();
    return getCollectionWantedCards().length;
  });

  const infiniteScrollResult = await page.evaluate(async () => {
    state.collection.wantedOnly = false;
    resetCollectionVisibleLimit();
    renderCollection();
    await new Promise((resolve) => requestAnimationFrame(resolve));
    const before = document.querySelectorAll("#collection-grid .card-tile").length;
    collectionGridEl.scrollTop = collectionGridEl.scrollHeight;
    collectionGridEl.dispatchEvent(new Event("scroll"));
    await new Promise((resolve) => setTimeout(resolve, 50));
    return {
      before,
      after: document.querySelectorAll("#collection-grid .card-tile").length,
      hasShowMore: Boolean(document.querySelector("#collection-show-more")),
    };
  });

  await page.click("#collection-wanted-only");
  await page.waitForFunction(() => document.querySelectorAll("#collection-grid .card-tile").length >= 130, { timeout: 10000 });

  const wantedOnlyResult = await page.evaluate(() => ({
    enabled: document.querySelector("#collection-wanted-only")?.getAttribute("aria-pressed") === "true",
    gridCards: document.querySelectorAll("#collection-grid .card-tile").length,
    hasShowMore: Boolean(document.querySelector("#collection-show-more")),
  }));

  const filterName = await page.evaluate(() => APP_DATA.cardCatalog[0]?.name || "");
  await page.fill("#filter-name", filterName);
  await page.waitForTimeout(200);

  const filteredCollectionResult = await page.evaluate(() => ({
    filterName: document.querySelector("#filter-name")?.value || "",
    gridCards: document.querySelectorAll("#collection-grid .card-tile").length,
    detailName: document.querySelector("#details-body .details-name")?.textContent || "",
  }));

  await page.fill("#filter-name", "");
  await page.waitForTimeout(200);
  await page.click("#collection-wanted-only");
  await page.waitForTimeout(200);

  const singleLargeWantedImageResult = await page.evaluate(async () => {
    clearCollectionWantedList();
    const cards = APP_DATA.cardCatalog.slice(0, 45);
    const originals = cards.map((card) => [card, card.imageUrl]);
    cards.forEach((card) => {
      card.imageUrl = "";
      setCollectionWantedCount(card, 1);
    });
    const blobs = await buildWantedListImageBlobs();
    const image = await createImageBitmap(blobs[0].blob);
    originals.forEach(([card, imageUrl]) => {
      card.imageUrl = imageUrl;
    });
    return {
      count: blobs.length,
      valid: blobs.every((item) => item.blob.size > 0 && item.blob.type === "image/png"),
      names: blobs.map((item) => item.name),
      height: image.height,
    };
  });

  await page.evaluate(() => {
    clearCollectionWantedList();
    APP_DATA.cardCatalog.slice(0, 3).forEach((card, index) => setCollectionWantedCount(card, index + 1));
    renderCollection();
  });

  const wantedImageResult = await page.evaluate(async () => {
    const blobs = await buildWantedListImageBlobs();
    const image = await createImageBitmap(blobs[0].blob);
    return {
      count: blobs.length,
      valid: blobs.every((item) => item.blob.size > 0 && item.blob.type === "image/png"),
      names: blobs.map((item) => item.name),
      width: image.width,
      height: image.height,
    };
  });

  const collectionResult = await page.evaluate(() => ({
    visible: !document.querySelector("#editor-view")?.classList.contains("hidden") &&
      !document.querySelector("#collection-main")?.classList.contains("hidden"),
    hasCompactToolbar: Boolean(document.querySelector(".collection-toolbar")),
    gridCards: document.querySelectorAll("#collection-grid .card-tile").length,
    wantedTotal: document.querySelector("#collection-wanted-total")?.textContent || "",
    wantedUnique: document.querySelector("#collection-wanted-unique")?.textContent || "",
    wantedTiles: document.querySelectorAll("#collection-grid .card-tile.wanted").length,
    exportDisabled: Boolean(document.querySelector("#collection-export-image")?.disabled),
    dirtyText: document.querySelector("#dirty-status")?.textContent || "",
  }));

  if (
    !collectionResult.visible ||
    !collectionResult.hasCompactToolbar ||
    collectionResult.gridCards < 1 ||
    collectionResult.wantedTotal !== "6" ||
    collectionResult.wantedUnique !== "3" ||
    collectionResult.wantedTiles < 1 ||
    collectionResult.exportDisabled ||
    collectionResult.dirtyText ||
    disabledShortcutResult.wantedCount !== 0 ||
    !disabledShortcutResult.detailName ||
    disabledShortcutResult.visibleControls !== 0 ||
    !disabledShortcutResult.hint.includes("Enable Collection") ||
    disabledShortcutResult.editChecked ||
    enabledShortcutResult.wantedCount !== 4 ||
    !enabledShortcutResult.detailName ||
    enabledShortcutResult.visibleControls !== 0 ||
    !enabledShortcutResult.hint.includes("Right-click") ||
    !enabledShortcutResult.editChecked ||
    !importResult.hasImportButton ||
    importResult.parsedUnique < 4 ||
    importResult.replaceTotal < 13 ||
    importResult.addTotal !== importResult.replaceTotal + 1 ||
    importResult.storedUnique !== importResult.parsedUnique ||
    !savedTextResult.ok ||
    savedTextResult.lineCount !== importResult.parsedUnique ||
    persistenceResult.total !== importResult.addTotal ||
    String(persistenceResult.total) !== persistenceResult.uiTotal ||
    persistenceResult.dirtyText ||
    seededWanted < 130 ||
    infiniteScrollResult.before < 1 ||
    infiniteScrollResult.after <= infiniteScrollResult.before ||
    infiniteScrollResult.hasShowMore ||
    !wantedOnlyResult.enabled ||
    wantedOnlyResult.gridCards < 130 ||
    wantedOnlyResult.hasShowMore ||
    !filteredCollectionResult.filterName ||
    filteredCollectionResult.gridCards < 1 ||
    filteredCollectionResult.gridCards >= wantedOnlyResult.gridCards ||
    wantedImageResult.count < 1 ||
    !wantedImageResult.valid ||
    wantedImageResult.height >= 360 ||
    singleLargeWantedImageResult.count !== 1 ||
    !singleLargeWantedImageResult.valid ||
    singleLargeWantedImageResult.names[0] !== "Looking for these cards"
  ) {
    console.log(JSON.stringify({ libraryResult, versionResult, collectionResult, disabledShortcutResult, enabledShortcutResult, importResult, savedTextResult, persistenceResult, seededWanted, infiniteScrollResult, wantedOnlyResult, filteredCollectionResult, wantedImageResult, singleLargeWantedImageResult, errors }, null, 2));
    await browser.close();
    process.exit(1);
  }

  await page.click("#collection-back-library");
  await page.waitForSelector("#library-view:not(.hidden)", { timeout: 10000 });

  await page.click(".library-deck-card");
  await page.waitForSelector("#editor-view:not(.hidden)", { timeout: 10000 });

  const editorResult = await page.evaluate(() => ({
    visible: !document.querySelector("#editor-view")?.classList.contains("hidden"),
    dirtyText: document.querySelector("#dirty-status")?.textContent || "",
    dirtyClass: document.querySelector("#dirty-status")?.className || "",
    saveDisabled: Boolean(document.querySelector("#save-changes")?.disabled),
  }));

  if (!editorResult.visible || editorResult.dirtyText || !editorResult.saveDisabled) {
    console.log(JSON.stringify({ libraryResult, versionResult, collectionResult, editorResult, errors }, null, 2));
    await browser.close();
    process.exit(1);
  }

  const deckImageResult = await page.evaluate(async () => {
    const deck = getSelectedDeck();
    const blob = await buildDeckImageBlob(deck);
    return { size: blob.size, type: blob.type };
  });

  if (deckImageResult.size <= 0 || deckImageResult.type !== "image/png") {
    console.log(JSON.stringify({ libraryResult, versionResult, collectionResult, editorResult, deckImageResult, errors }, null, 2));
    await browser.close();
    process.exit(1);
  }

  await page.click("#test-hand");
  await page.waitForSelector("#test-view:not(.hidden)", { timeout: 10000 });
  await page.waitForSelector("[data-testid=\"deck-test-board\"]", { timeout: 20000 });

  const testerResult = await page.evaluate(() => ({
    visible: !document.querySelector("#test-view")?.classList.contains("hidden"),
    boardMounted: Boolean(document.querySelector("[data-testid=\"deck-test-board\"]")),
    hasReset: Array.from(document.querySelectorAll("button, .button, [role=\"button\"]")).some((control) =>
      String(control.textContent || "").includes("RESET")
    ),
    hasExit: Array.from(document.querySelectorAll("button, .button, [role=\"button\"]")).some((control) =>
      String(control.textContent || "").includes("EXIT")
    ),
  }));

  if (!testerResult.visible || !testerResult.boardMounted || !testerResult.hasReset || !testerResult.hasExit) {
    console.log(JSON.stringify({ libraryResult, versionResult, collectionResult, editorResult, testerResult, errors }, null, 2));
    await browser.close();
    process.exit(1);
  }

  await page.evaluate(async (text) => {
    if (String(text || "").trim()) {
      await fetch("/api/collection-wanted", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
    } else {
      await fetch("/api/collection-wanted", { method: "DELETE" });
    }
  }, originalCollectionWantedText);

  console.log(JSON.stringify({ libraryResult, versionResult, collectionResult, editorResult, testerResult }, null, 2));
  await browser.close();
}

main().catch(async (error) => {
  console.error(error);
  process.exit(1);
});
"""


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run a real-browser smoke test for the DCGO Deck Editor.")
    parser.add_argument("--root", default=".", help="Deck editor package root")
    parser.add_argument("--app-support-dir", required=True, help="DCGO app support directory")
    parser.add_argument("--deck-root", required=True, help="Deck folder to load")
    return parser.parse_args()


def read_server_url(process: subprocess.Popen[str]) -> str:
    deadline = time.time() + 20
    output = []
    while time.time() < deadline:
        line = process.stdout.readline() if process.stdout else ""
        if line:
            output.append(line.rstrip())
            match = re.search(r"(http://127\.0\.0\.1:\d+/)", line)
            if match:
                return match.group(1)
        if process.poll() is not None:
            break
    raise RuntimeError("Could not start deck browser server:\n" + "\n".join(output))


def main() -> int:
    args = parse_args()
    root = Path(args.root).expanduser().resolve()
    server_script = root / "deck_browser" / "deck_browser_server.py"
    if not server_script.is_file():
        print(f"Missing server script: {server_script}", file=sys.stderr)
        return 1
    if shutil.which("npm") is None:
        print("Missing npm. Install Node.js/npm before running browser smoke tests.", file=sys.stderr)
        return 1

    output_path = Path(tempfile.gettempdir()) / "dcgo_browser_smoke.html"
    server = subprocess.Popen(
        [
            sys.executable,
            str(server_script),
            "--app-support-dir",
            str(Path(args.app_support_dir).expanduser()),
            "--deck-root",
            str(Path(args.deck_root).expanduser()),
            "--output",
            str(output_path),
            "--port",
            "0",
        ],
        cwd=str(root),
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
    )

    try:
        url = read_server_url(server)
        with tempfile.TemporaryDirectory() as tmp_dir:
            tmp_root = Path(tmp_dir)
            (tmp_root / "package.json").write_text(
                '{"private":true,"dependencies":{"playwright":"' + PLAYWRIGHT_VERSION + '"}}\n',
                encoding="utf-8",
            )
            (tmp_root / "smoke.js").write_text(textwrap.dedent(SMOKE_JS).strip() + "\n", encoding="utf-8")
            subprocess.run(["npm", "install", "--silent"], cwd=tmp_root, check=True)
            subprocess.run(["node", "smoke.js", url], cwd=tmp_root, check=True)
    finally:
        server.terminate()
        try:
            server.wait(timeout=5)
        except subprocess.TimeoutExpired:
            server.kill()

    print("Browser smoke check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
