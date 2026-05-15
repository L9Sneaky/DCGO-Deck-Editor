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

  await page.click(".library-deck-card");
  await page.waitForSelector("#editor-view:not(.hidden)", { timeout: 10000 });

  const editorResult = await page.evaluate(() => ({
    visible: !document.querySelector("#editor-view")?.classList.contains("hidden"),
    dirtyText: document.querySelector("#dirty-status")?.textContent || "",
    dirtyClass: document.querySelector("#dirty-status")?.className || "",
    saveDisabled: Boolean(document.querySelector("#save-changes")?.disabled),
  }));

  if (!editorResult.visible || editorResult.dirtyText || !editorResult.saveDisabled) {
    console.log(JSON.stringify({ libraryResult, versionResult, editorResult, errors }, null, 2));
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
    console.log(JSON.stringify({ libraryResult, versionResult, editorResult, testerResult, errors }, null, 2));
    await browser.close();
    process.exit(1);
  }

  console.log(JSON.stringify({ libraryResult, versionResult, editorResult, testerResult }, null, 2));
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
