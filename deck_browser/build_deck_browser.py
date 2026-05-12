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


HTML_TEMPLATE = Template(
    """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>DCGO Deck Browser</title>
  <style>
    :root {
      --bg: #09111a;
      --bg-elevated: rgba(9, 19, 30, 0.9);
      --panel: rgba(14, 28, 43, 0.88);
      --panel-strong: rgba(16, 33, 50, 0.96);
      --line: rgba(128, 198, 255, 0.18);
      --line-strong: rgba(128, 198, 255, 0.32);
      --text: #edf7ff;
      --muted: #96aec1;
      --accent: #5fd4ff;
      --accent-strong: #1ca7ff;
      --accent-warm: #ffbf5f;
      --danger: #ff7e6b;
      --shadow: 0 18px 54px rgba(0, 0, 0, 0.45);
      --radius: 22px;
      --radius-sm: 16px;
      --sidebar-width: 300px;
      --details-width: 420px;
      --card-width: 108px;
      --font-ui: "Avenir Next", "Trebuchet MS", sans-serif;
      --font-display: "Avenir Next Condensed", "Trebuchet MS", sans-serif;
      --font-mono: "SF Mono", "Menlo", "Monaco", monospace;
    }

    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      min-height: 100vh;
      background-color: #070d15;
      background:
        radial-gradient(circle at top left, rgba(44, 164, 255, 0.20), transparent 28%),
        radial-gradient(circle at top right, rgba(255, 191, 95, 0.12), transparent 24%),
        linear-gradient(180deg, #09111a 0%, #070d15 100%);
      color: var(--text);
      font-family: var(--font-ui);
    }

    body::before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 22px 22px;
      mask-image: radial-gradient(circle at center, black 42%, transparent 85%);
      opacity: 0.45;
    }

    .shell {
      position: relative;
      min-height: 100vh;
      padding: 16px;
    }

    .app {
      display: grid;
      grid-template-columns: minmax(280px, var(--sidebar-width)) minmax(0, 1fr) minmax(300px, var(--details-width));
      gap: 14px;
      min-height: calc(100vh - 32px);
    }

    .app.editor-view {
      grid-template-columns: var(--details-width) minmax(0, 1fr) minmax(300px, clamp(320px, 24vw, 420px));
      height: calc(100vh - 32px);
      min-height: 0;
      overflow: hidden;
    }

    .editor-view > .panel {
      min-height: 0;
      overflow: hidden;
    }

    .library-view {
      display: grid;
      grid-template-rows: auto auto minmax(0, 1fr) auto;
      min-height: calc(100vh - 32px);
      overflow: hidden;
    }

    .library-header {
      padding: 26px 28px 20px;
      border-bottom: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      gap: 18px;
      align-items: flex-end;
      flex-wrap: wrap;
    }

    .library-heading {
      max-width: 760px;
    }

    .library-toolbar {
      padding: 16px 28px;
      display: flex;
      justify-content: space-between;
      gap: 14px;
      align-items: center;
      border-bottom: 1px solid var(--line);
      flex-wrap: wrap;
    }

    .library-toolbar-left,
    .library-toolbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .library-search {
      width: min(460px, 100%);
    }

    .library-grid {
      overflow: auto;
      padding: 22px 28px 28px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
      align-content: start;
    }

    .library-deck-card {
      display: grid;
      grid-template-columns: 86px minmax(0, 1fr);
      gap: 14px;
      min-height: 150px;
      padding: 14px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.07);
      background:
        radial-gradient(circle at top right, rgba(95,212,255,0.10), transparent 46%),
        rgba(255,255,255,0.035);
      color: var(--text);
      text-align: left;
      cursor: pointer;
      transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
    }

    .library-deck-card:hover {
      transform: translateY(-3px);
      border-color: rgba(95, 212, 255, 0.36);
      background:
        radial-gradient(circle at top right, rgba(95,212,255,0.16), transparent 48%),
        rgba(255,255,255,0.055);
    }

    .library-deck-body {
      display: flex;
      min-width: 0;
      flex-direction: column;
      gap: 10px;
    }

    .library-deck-title {
      margin: 0;
      font-size: 20px;
      line-height: 1.05;
      word-break: break-word;
    }

    .library-deck-file {
      color: var(--muted);
      font-size: 12px;
      font-family: var(--font-mono);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .color-ratio {
      display: grid;
      gap: 7px;
    }

    .color-ratio-track {
      display: flex;
      width: 100%;
      height: 10px;
      overflow: hidden;
      border-radius: 999px;
      background: rgba(255,255,255,0.055);
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: inset 0 1px 6px rgba(0,0,0,0.25);
    }

    .color-ratio-segment {
      min-width: 3px;
      height: 100%;
    }

    .color-ratio-labels {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
      color: var(--muted);
      font-size: 11px;
      line-height: 1.2;
    }

    .color-ratio-label {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      min-width: 0;
    }

    .library-footer {
      padding: 0 28px 22px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.45;
    }

    .panel {
      position: relative;
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      backdrop-filter: blur(20px);
      overflow: hidden;
    }

    .panel::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background: linear-gradient(180deg, rgba(255,255,255,0.035), transparent 18%);
    }

    .sidebar, .details {
      display: flex;
      flex-direction: column;
      min-height: 0;
      height: 100%;
      overflow: hidden;
    }

    .sidebar-header,
    .details-header,
    .deck-hero {
      padding: 22px 22px 18px;
      border-bottom: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
    }

    .eyebrow {
      margin: 0 0 8px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-size: 11px;
      color: var(--accent);
      font-weight: 700;
    }

    .title {
      margin: 0;
      font-family: var(--font-display);
      font-size: 34px;
      line-height: 0.92;
      letter-spacing: 0.02em;
    }

    .subtitle {
      margin: 10px 0 0;
      color: var(--muted);
      line-height: 1.45;
      font-size: 14px;
    }

    .tiny {
      color: var(--muted);
      font-size: 12px;
      line-height: 1.45;
    }

    .control-wrap {
      padding: 14px 22px 18px;
      display: grid;
      gap: 10px;
      border-bottom: 1px solid var(--line);
    }

    .input {
      width: 100%;
      border: 1px solid rgba(121, 188, 255, 0.2);
      background: rgba(4, 10, 17, 0.56);
      color: var(--text);
      border-radius: 14px;
      padding: 13px 14px;
      font: inherit;
      outline: none;
      transition: border-color 140ms ease, transform 140ms ease, background 140ms ease;
    }

    .input:focus {
      border-color: var(--accent);
      background: rgba(4, 10, 17, 0.76);
      transform: translateY(-1px);
    }

    .deck-list {
      overflow: auto;
      padding: 14px;
      display: grid;
      gap: 12px;
    }

    .deck-item {
      display: grid;
      grid-template-columns: 68px minmax(0, 1fr);
      gap: 12px;
      padding: 12px;
      border-radius: 18px;
      border: 1px solid transparent;
      background: rgba(255,255,255,0.03);
      cursor: pointer;
      transition: transform 160ms ease, border-color 160ms ease, background 160ms ease;
    }

    .deck-item:hover {
      transform: translateY(-2px);
      border-color: rgba(95, 212, 255, 0.32);
      background: rgba(255,255,255,0.05);
    }

    .deck-item.active {
      border-color: rgba(95, 212, 255, 0.48);
      background:
        radial-gradient(circle at top right, rgba(95,212,255,0.18), transparent 60%),
        rgba(255,255,255,0.055);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
    }

    .deck-cover {
      position: relative;
      aspect-ratio: 7 / 10;
      border-radius: 14px;
      overflow: hidden;
      background:
        linear-gradient(145deg, rgba(40, 88, 131, 0.9), rgba(9, 18, 29, 0.95)),
        linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0));
      border: 1px solid rgba(255,255,255,0.06);
    }

    .deck-cover img,
    .card-thumb img,
    .details-art img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      background: rgba(255,255,255,0.03);
    }

    .cover-fallback,
    .thumb-fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      padding: 12px;
      color: rgba(255,255,255,0.9);
      font-family: var(--font-display);
      font-size: 20px;
      line-height: 0.88;
      letter-spacing: 0.03em;
      text-shadow: 0 3px 18px rgba(0, 0, 0, 0.35);
      background:
        radial-gradient(circle at top right, rgba(95, 212, 255, 0.46), transparent 42%),
        linear-gradient(145deg, rgba(10, 32, 53, 1), rgba(8, 18, 27, 1));
    }

    .deck-name {
      margin: 0 0 7px;
      font-size: 17px;
      line-height: 1.05;
      word-break: break-word;
    }

    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-height: 28px;
      padding: 5px 11px;
      border-radius: 999px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.07);
      color: #d8ebf8;
      font-size: 12px;
      line-height: 1;
      white-space: nowrap;
    }

    .chip.warm {
      background: rgba(255, 191, 95, 0.12);
      border-color: rgba(255, 191, 95, 0.22);
      color: #ffe3b1;
    }

    .chip.accent {
      background: rgba(95, 212, 255, 0.11);
      border-color: rgba(95, 212, 255, 0.20);
      color: #c2efff;
    }

    .empty-state {
      padding: 30px 22px 34px;
      color: var(--muted);
      text-align: center;
      line-height: 1.6;
    }

    .main {
      display: grid;
      grid-template-rows: auto auto minmax(0, 1fr);
      min-height: 0;
      overflow: hidden;
    }

    .deck-hero {
      display: grid;
      gap: 6px;
      padding: 12px 16px 10px;
    }

    .hero-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
      flex-wrap: wrap;
    }

    .deck-hero .eyebrow {
      margin-bottom: 5px;
      font-size: 10px;
    }

    .hero-title {
      margin: 0;
      font-family: var(--font-display);
      font-size: 27px;
      line-height: 0.92;
      letter-spacing: 0.02em;
    }

    .hero-subtitle {
      margin: 3px 0 0;
      color: var(--muted);
      font-size: 11px;
      line-height: 1.3;
    }

    .hero-actions {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      justify-content: flex-end;
      max-width: 720px;
    }

    .deck-hero .button {
      min-height: 30px;
      border-radius: 10px;
      padding: 5px 9px;
      font-size: 12px;
      line-height: 1;
    }

    .button {
      appearance: none;
      border: 1px solid rgba(95, 212, 255, 0.22);
      background: rgba(10, 22, 33, 0.86);
      color: var(--text);
      border-radius: 14px;
      padding: 10px 14px;
      font: inherit;
      cursor: pointer;
      transition: transform 140ms ease, border-color 140ms ease, background 140ms ease;
    }

    .button:hover {
      transform: translateY(-1px);
      border-color: rgba(95, 212, 255, 0.42);
      background: rgba(12, 26, 40, 0.95);
    }

    .button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
      transform: none;
      filter: grayscale(0.35);
    }

    .button.primary {
      background: linear-gradient(135deg, rgba(22, 92, 148, 0.95), rgba(16, 61, 102, 0.95));
      border-color: rgba(129, 219, 255, 0.38);
    }

    .button.success {
      background: linear-gradient(135deg, rgba(28, 126, 83, 0.95), rgba(21, 84, 68, 0.95));
      border-color: rgba(111, 238, 174, 0.34);
    }

    .button.danger {
      background: linear-gradient(135deg, rgba(128, 27, 52, 0.95), rgba(82, 15, 35, 0.95));
      border-color: rgba(255, 126, 107, 0.38);
    }

    .dirty-status {
      margin-top: 5px;
      color: var(--muted);
      font-size: 11px;
      line-height: 1.3;
    }

    .dirty-status.dirty {
      color: var(--accent-warm);
    }

    .validation-panel {
      display: grid;
      gap: 6px;
      margin-top: 2px;
      padding: 8px 10px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(1, 8, 14, 0.34);
    }

    .validation-panel.compact {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      min-height: 28px;
      padding: 5px 10px;
      font-size: 11px;
      color: #bfeccc;
    }

    .validation-panel.ok {
      border-color: rgba(104, 222, 158, 0.20);
    }

    .validation-panel.error {
      border-color: rgba(255, 126, 107, 0.32);
    }

    .validation-title {
      margin: 0;
      font-size: 11px;
      letter-spacing: 0.10em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .validation-list {
      display: grid;
      gap: 5px;
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 11px;
      line-height: 1.3;
    }

    .validation-list li {
      padding-left: 13px;
      position: relative;
    }

    .validation-list li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.55em;
      width: 5px;
      height: 5px;
      border-radius: 999px;
      background: var(--accent);
    }

    .validation-list li.error::before {
      background: var(--danger);
    }

    .validation-list li.warning::before {
      background: var(--accent-warm);
    }

    .test-hand-panel {
      display: grid;
      gap: 12px;
      padding: 12px;
      border-radius: 16px;
      border: 1px solid rgba(95, 212, 255, 0.18);
      background:
        radial-gradient(circle at top right, rgba(95, 212, 255, 0.10), transparent 42%),
        rgba(1, 8, 14, 0.38);
    }

    .test-hand-header {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: flex-start;
      flex-wrap: wrap;
    }

    .test-hand-header h3 {
      margin: 0 0 4px;
      font-size: 13px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--accent);
    }

    .test-hand-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .test-hand-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(92px, 1fr));
      gap: 9px;
    }

    .test-hand-card {
      display: grid;
      gap: 6px;
      min-width: 0;
    }

    .test-hand-thumb {
      aspect-ratio: 7 / 10;
      overflow: hidden;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.08);
      background: linear-gradient(145deg, rgba(16, 39, 62, 1), rgba(8, 18, 27, 1));
    }

    .test-hand-thumb img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .test-hand-name {
      min-width: 0;
      color: var(--text);
      font-size: 11px;
      line-height: 1.2;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .test-hand-code {
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: 10px;
      line-height: 1;
    }

    .library-deck-actions {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: auto;
    }

    .library-deck-actions .button {
      min-height: 30px;
      padding: 6px 10px;
      border-radius: 10px;
      font-size: 12px;
    }

    .tester-view {
      height: calc(100vh - 32px);
      min-height: 720px;
      overflow: hidden;
      display: grid;
      grid-template-columns: clamp(285px, 18vw, 350px) minmax(0, 1fr) clamp(220px, 14vw, 270px);
      gap: 5px;
      background:
        linear-gradient(115deg, rgba(48, 54, 126, 0.92), rgba(2, 91, 107, 0.94)),
        radial-gradient(circle at 50% 25%, rgba(95, 212, 255, 0.20), transparent 42%);
      border: 1px solid rgba(128, 198, 255, 0.18);
      border-radius: var(--radius);
    }

    .tester-details-rail {
      min-width: 0;
      min-height: 0;
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      background: rgba(0, 0, 0, 0.36);
      border-right: 1px solid rgba(128, 198, 255, 0.18);
      overflow: hidden;
    }

    .tester-rail-actions {
      display: flex;
      gap: 6px;
      padding: 6px;
      justify-content: flex-end;
      background: rgba(0, 0, 0, 0.18);
    }

    .tester-rail-actions .button {
      min-width: 30px;
      min-height: 28px;
      padding: 4px 8px;
      border-radius: 8px;
    }

    .tester-details-body {
      padding: 6px 8px 18px;
      gap: 6px;
    }

    .tester-details-body .details-art {
      width: min(100%, 342px);
      border-radius: 9px;
    }

    .tester-details-body .details-name {
      font-size: 25px;
    }

    .tester-details-body .details-effect-text {
      font-size: 13px;
      line-height: 1.32;
    }

    .tester-board {
      position: relative;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
      display: grid;
      grid-template-rows: clamp(118px, 18vh, 174px) 42px minmax(260px, 1fr) clamp(112px, 17vh, 150px);
      grid-template-areas:
        "tools"
        "memory"
        "field"
        "bottom";
      gap: 8px;
      padding: 12px 8px 10px;
    }

    .tester-board::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0.34;
      pointer-events: none;
      background:
        linear-gradient(122deg, transparent 0 22%, rgba(111, 161, 255, 0.18) 22.15% 22.4%, transparent 22.65%),
        linear-gradient(32deg, transparent 0 67%, rgba(111, 161, 255, 0.16) 67.15% 67.45%, transparent 67.75%);
    }

    .tester-board-tools,
    .tester-memory-track,
    .tester-field-area,
    .tester-bottom-row {
      position: relative;
      z-index: 1;
    }

    .tester-board-tools {
      grid-area: tools;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 18px;
      min-height: 0;
    }

    .tester-deck-widget {
      width: min(330px, 38vw);
      padding: 10px;
      border-radius: 3px;
      border: 1px solid rgba(255,255,255,0.16);
      background: rgba(0, 0, 0, 0.24);
      box-shadow: inset 0 0 18px rgba(255,255,255,0.045), 0 10px 36px rgba(0,0,0,0.24);
      display: grid;
      gap: 7px;
    }

    .tester-deck-title-row {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: start;
    }

    .tester-deck-title-row .eyebrow {
      margin-bottom: 2px;
      font-size: 9px;
    }

    .tester-title {
      margin: 0;
      font-family: var(--font-display);
      font-size: 19px;
      line-height: 0.98;
      letter-spacing: 0.02em;
    }

    .tester-subtitle {
      margin: 2px 0 0;
      color: var(--muted);
      font-size: 10px;
      line-height: 1.2;
      max-width: 210px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tester-actions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      flex-wrap: nowrap;
    }

    .tester-actions .button {
      min-width: 90px;
      min-height: 64px;
      padding: 0 18px;
      border-radius: 6px;
      font-family: var(--font-display);
      font-size: 24px;
      letter-spacing: 0.12em;
      box-shadow: inset 0 0 18px rgba(255,255,255,0.07), 0 10px 24px rgba(0,0,0,0.22);
    }

    .tester-actions .button:not(.primary):not(.success) {
      background: rgba(101, 25, 54, 0.78);
      border-color: rgba(255, 126, 166, 0.22);
    }

    .tester-actions #tester-draw {
      min-width: 42px;
      min-height: 42px;
      padding: 0 10px;
      font-size: 15px;
      letter-spacing: 0.03em;
    }

    .tester-actions #tester-reveal-security,
    .tester-actions #tester-reveal-all-security,
    .tester-actions #tester-toggle-security {
      display: none;
    }

    .tester-mini-actions,
    .tester-card-actions,
    .tester-stack-actions {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 4px;
    }

    .tester-mini-actions .button,
    .tester-card-actions .button,
    .tester-stack-actions .button {
      min-height: 22px;
      padding: 3px 5px;
      border-radius: 7px;
      font-size: 9px;
    }

    .tester-stats-grid {
      display: none;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 4px;
    }

    .tester-stat {
      padding: 3px 4px;
      border-radius: 7px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
    }

    .tester-stat-label {
      color: var(--muted);
      font-size: 7px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .tester-stat-value {
      margin-top: 2px;
      font-family: var(--font-display);
      font-size: 15px;
      line-height: 0.9;
    }

    .tester-pile-list {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 4px;
    }

    .tester-pile {
      min-width: 0;
      min-height: 38px;
      padding: 4px;
      border-radius: 7px;
      border: 1px solid rgba(95, 212, 255, 0.16);
      background: rgba(0,0,0,0.18);
      color: var(--text);
      display: grid;
      place-items: center;
      gap: 1px;
      text-align: center;
      cursor: pointer;
    }

    .tester-pile:hover,
    .tester-drop-over {
      border-color: rgba(95, 212, 255, 0.85) !important;
      background: rgba(12, 34, 52, 0.42) !important;
    }

    .tester-pile-count {
      font-family: var(--font-display);
      font-size: 18px;
      line-height: 0.9;
    }

    .tester-pile-label {
      color: var(--muted);
      font-size: 7px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .tester-memory-track {
      grid-area: memory;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      min-height: 0;
    }

    .tester-memory-track span {
      width: 28px;
      height: 28px;
      display: inline-grid;
      place-items: center;
      border-radius: 999px;
      color: rgba(237,247,255,0.82);
      background: rgba(4, 16, 25, 0.72);
      border: 1px solid rgba(95, 212, 255, 0.22);
      font-family: var(--font-display);
      font-size: 17px;
      box-shadow: 0 0 12px rgba(95,212,255,0.20);
      cursor: pointer;
      transition: transform 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
      user-select: none;
    }

    .tester-memory-track span:hover {
      transform: translateY(-1px);
      border-color: rgba(95, 212, 255, 0.70);
    }

    .tester-memory-track span.active {
      color: #f1d5ff;
      border-color: rgba(210, 106, 255, 0.8);
      box-shadow: 0 0 14px rgba(210,106,255,0.7);
    }

    .tester-field-area {
      grid-area: field;
      min-height: 0;
      display: grid;
      grid-template-columns: 78px minmax(0, 1fr) 70px;
      gap: 8px;
      align-items: stretch;
    }

    .tester-battle-wrap {
      min-width: 0;
      min-height: 0;
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
    }

    .tester-fields {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      grid-template-rows: minmax(132px, 1fr) minmax(74px, 0.56fr);
      gap: 6px;
      min-height: 0;
      overflow: hidden;
      padding: 0;
    }

    .tester-field-slot,
    .tester-breeding-slot {
      position: relative;
      min-width: 0;
      min-height: 0;
      border-radius: 3px;
      border: 1px solid rgba(185, 221, 255, 0.24);
      background: rgba(7, 25, 45, 0.34);
      overflow: hidden;
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      box-shadow: inset 0 0 18px rgba(255,255,255,0.045);
    }

    .tester-field-slot.empty,
    .tester-breeding-slot.empty {
      border-style: solid;
      background: rgba(10, 33, 62, 0.24);
    }

    .tester-field-slot.empty .tester-field-label,
    .tester-breeding-slot.empty .tester-field-label {
      opacity: 0.38;
    }

    .tester-field-slot.empty .tester-field-label span:last-child {
      display: none;
    }

    .tester-field-label {
      padding: 3px 5px;
      color: rgba(237,247,255,0.52);
      font-size: 7px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      display: flex;
      justify-content: space-between;
      gap: 6px;
      background: rgba(0,0,0,0.14);
    }

    .tester-breeding-slot {
      align-self: end;
      height: min(230px, 72%);
    }

    .tester-trash-drop {
      align-self: center;
      justify-self: stretch;
      min-height: 96px;
      display: grid;
      place-items: center;
      gap: 4px;
      color: rgba(237,247,255,0.72);
    }

    .tester-trash-button {
      width: 58px;
      height: 74px;
      border: 0;
      border-radius: 3px;
      background: rgba(0,0,0,0.32);
      color: rgba(237,247,255,0.72);
      font-size: 28px;
      cursor: pointer;
    }

    #tester-trash-count {
      font-family: var(--font-display);
      font-size: 16px;
      font-style: italic;
    }

    .tester-bottom-row {
      grid-area: bottom;
      min-height: 0;
      display: grid;
      grid-template-columns: 82px minmax(0, 1fr);
      gap: 10px;
      align-items: stretch;
    }

    .tester-security-dock,
    .tester-deck-dock,
    .tester-hand-row {
      min-height: 0;
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
    }

    .tester-security-dock {
      align-content: end;
      justify-items: center;
      gap: 5px;
    }

    .tester-deck-dock {
      align-content: end;
      justify-items: center;
      gap: 0;
      grid-template-rows: minmax(0, 1fr) auto auto;
    }

    .tester-zone-icon-button {
      width: 58px;
      height: 78px;
      border: 1px solid rgba(95, 212, 255, 0.22);
      border-radius: 10px;
      background:
        radial-gradient(circle at center, rgba(95, 212, 255, 0.14), transparent 55%),
        rgba(2, 8, 14, 0.58);
      color: rgba(237,247,255,0.88);
      cursor: pointer;
      display: grid;
      place-items: center;
      font-family: var(--font-display);
      font-size: 13px;
      line-height: 1.05;
      text-align: center;
      box-shadow: 0 10px 24px rgba(0,0,0,0.25);
    }

    .tester-deck-stack-button {
      width: 58px;
      height: 78px;
      margin-bottom: 4px;
      position: relative;
      border: 1px solid rgba(95, 212, 255, 0.24);
      border-radius: 5px;
      background:
        linear-gradient(145deg, rgba(75, 40, 158, 0.92), rgba(14, 44, 80, 0.95)),
        rgba(2, 8, 14, 0.72);
      color: rgba(237,247,255,0.9);
      cursor: pointer;
      display: grid;
      place-items: center;
      overflow: hidden;
      box-shadow: 0 10px 24px rgba(0,0,0,0.25), inset 0 0 18px rgba(95,212,255,0.18);
    }

    .tester-deck-stack-button::before {
      content: "";
      width: 34px;
      height: 44px;
      border: 1px solid rgba(233, 247, 255, 0.42);
      border-radius: 50%;
      background: radial-gradient(circle, rgba(95,212,255,0.38), transparent 62%);
      box-shadow: 0 0 14px rgba(95,212,255,0.38);
    }

    .tester-deck-stack-button:disabled {
      cursor: default;
      opacity: 0.58;
    }

    .tester-deck-count {
      min-width: 46px;
      padding: 1px 5px;
      border-radius: 3px;
      background: rgba(0,0,0,0.34);
      color: rgba(237,247,255,0.88);
      font-family: var(--font-display);
      font-size: 15px;
      font-style: italic;
      line-height: 1.25;
      text-align: center;
    }

    .tester-deck-count::before,
    .tester-deck-count::after {
      content: "△";
      color: rgba(237,247,255,0.38);
      margin: 0 3px;
      font-family: var(--font-mono);
      font-size: 10px;
      vertical-align: 1px;
    }

    .tester-deck-bottom-drop {
      width: 58px;
      min-height: 17px;
      border: 1px dashed rgba(95, 212, 255, 0.24);
      border-radius: 0 0 4px 4px;
      display: grid;
      place-items: center;
      color: rgba(237,247,255,0.56);
      background: rgba(0,0,0,0.22);
      font-size: 11px;
      letter-spacing: 0.04em;
    }

    .tester-hand-tools {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .tester-hand-sort {
      width: 94px;
      min-height: 22px;
      border-radius: 6px;
      border: 1px solid rgba(95, 212, 255, 0.18);
      background: rgba(2, 8, 14, 0.62);
      color: var(--text);
      font-size: 10px;
      padding: 1px 5px;
    }

    .tester-zone-icon-button:hover {
      border-color: rgba(95, 212, 255, 0.85);
      box-shadow: 0 0 16px rgba(95,212,255,0.24);
    }

    .tester-zone-header {
      min-height: 25px;
      padding: 4px 6px;
      border-bottom: 1px solid rgba(95, 212, 255, 0.14);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      background: rgba(2, 8, 14, 0.18);
    }

    .tester-zone-header.compact {
      background: transparent;
      border-bottom: 0;
      min-height: 20px;
      padding: 0 2px 4px;
    }

    .tester-zone-title {
      margin: 0;
      color: var(--accent);
      font-size: 9px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .tester-zone-meta {
      color: var(--muted);
      font-size: 9px;
      line-height: 1.2;
      text-align: right;
    }

    .tester-security-cards,
    .tester-hand-fan {
      display: flex;
      min-height: 0;
      align-items: flex-start;
      gap: 6px;
      overflow: auto;
      padding: 4px;
      scrollbar-width: none;
    }

    .tester-security-cards::-webkit-scrollbar,
    .tester-hand-fan::-webkit-scrollbar,
    .tester-drawer .tester-card-grid::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .tester-security-cards {
      justify-content: center;
      flex-wrap: wrap;
    }

    .tester-hand-fan {
      justify-content: center;
      align-items: center;
    }

    .tester-reveal-panel {
      position: absolute;
      z-index: 8;
      right: clamp(8px, 2vw, 26px);
      top: clamp(96px, 15vh, 160px);
      width: clamp(230px, 22vw, 360px);
      max-height: min(260px, 34vh);
      border-radius: 3px;
      border: 1px solid rgba(185, 221, 255, 0.24);
      background: rgba(3, 16, 28, 0.88);
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      box-shadow: inset 0 0 18px rgba(255,255,255,0.045);
    }

    .tester-security-panel {
      position: absolute;
      z-index: 9;
      left: clamp(90px, 8vw, 150px);
      bottom: clamp(118px, 17vh, 165px);
      width: clamp(230px, 22vw, 360px);
      max-height: min(270px, 34vh);
      border-radius: 3px;
      border: 1px solid rgba(185, 221, 255, 0.24);
      background: rgba(3, 16, 28, 0.9);
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      box-shadow: inset 0 0 18px rgba(255,255,255,0.045), 0 16px 42px rgba(0,0,0,0.34);
    }

    .tester-reveal-panel.hidden,
    .tester-security-panel.hidden,
    .tester-context-menu.hidden,
    .tester-stack-viewer.hidden {
      display: none !important;
    }

    .tester-reveal-panel .tester-security-cards,
    .tester-security-panel .tester-security-cards {
      align-content: start;
      justify-content: start;
    }

    .tester-stack {
      position: relative;
      min-height: 0;
      height: 100%;
      padding: 6px;
      cursor: pointer;
    }

    .tester-stack-card {
      position: absolute;
      left: 50%;
      bottom: 6px;
      width: min(72px, calc(100% - 12px));
      aspect-ratio: 7 / 10;
      transform: translateX(-50%);
      border-radius: 5px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.13);
      box-shadow: 0 8px 18px rgba(0,0,0,0.34);
      background: rgba(2, 8, 14, 0.92);
    }

    .tester-stack-card.suspended {
      transform: translateX(-50%) rotate(30deg);
    }

    .tester-stack-card img,
    .tester-card-thumb img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .tester-source-drop {
      position: absolute;
      inset: auto 6px 6px 6px;
      z-index: 20;
      min-height: 22px;
      display: grid;
      place-items: center;
      border-radius: 4px;
      border: 1px dashed rgba(255,255,255,0.22);
      background: rgba(255,255,255,0.10);
      color: rgba(237,247,255,0.82);
      font-size: 8px;
      opacity: 0;
      pointer-events: auto;
      transition: opacity 0.12s ease;
    }

    .tester-field-slot:hover .tester-source-drop,
    .tester-source-drop.tester-drop-over {
      opacity: 1;
    }

    .tester-stack-badge {
      position: absolute;
      top: 24px;
      right: 5px;
      z-index: 30;
      padding: 2px 5px;
      border-radius: 999px;
      background: rgba(0,0,0,0.72);
      color: var(--text);
      font-family: var(--font-display);
      font-size: 11px;
      line-height: 1;
    }

    .tester-card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(74px, 1fr));
      gap: 6px;
      align-content: start;
    }

    .tester-card-grid.compact {
      grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
    }

    .tester-card {
      position: relative;
      display: grid;
      gap: 3px;
      min-width: 0;
      width: 78px;
      padding: 4px;
      border-radius: 8px;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(255,255,255,0.035);
      cursor: grab;
    }

    .tester-card:active {
      cursor: grabbing;
    }

    .tester-card-thumb,
    .tester-card-back {
      position: relative;
      aspect-ratio: 7 / 10;
      overflow: hidden;
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.10);
      background:
        linear-gradient(145deg, rgba(16, 39, 62, 1), rgba(8, 18, 27, 1));
    }

    .tester-card-back {
      display: grid;
      place-items: center;
      color: rgba(237, 247, 255, 0.78);
      font-family: var(--font-display);
      font-size: 10px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-align: center;
      background:
        radial-gradient(circle at center, rgba(95, 212, 255, 0.20), transparent 48%),
        repeating-linear-gradient(135deg, rgba(95,212,255,0.10) 0 8px, rgba(255,255,255,0.025) 8px 16px),
        rgba(4, 12, 20, 0.96);
    }

    .tester-card-modifiers {
      position: absolute;
      left: 5px;
      top: 5px;
      z-index: 5;
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
      pointer-events: none;
    }

    .tester-card-modifier {
      min-width: 18px;
      padding: 1px 4px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.72);
      border: 1px solid rgba(95, 212, 255, 0.28);
      color: rgba(237,247,255,0.94);
      font-size: 8px;
      line-height: 1.35;
      text-align: center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.32);
    }

    .tester-card-modifier.mark {
      background: rgba(255, 191, 95, 0.86);
      color: #130a02;
    }

    .tester-card-name {
      min-width: 0;
      color: var(--text);
      font-size: 8px;
      line-height: 1.1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tester-card-code {
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: 7px;
      line-height: 1;
    }

    .tester-stack-actions {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4px;
    }

    .tester-empty {
      min-height: 70px;
      display: grid;
      place-items: center;
      color: var(--muted);
      text-align: center;
      border: 1px dashed rgba(255,255,255,0.12);
      border-radius: 8px;
      background: rgba(0,0,0,0.10);
      padding: 8px;
      font-size: 10px;
      line-height: 1.25;
    }

    .tester-field-slot.empty .tester-empty,
    .tester-breeding-slot.empty .tester-empty,
    .tester-reveal-panel .tester-empty,
    .tester-drawer .tester-empty {
      color: transparent;
      border-style: solid;
      border-color: rgba(255,255,255,0.07);
      background: rgba(255,255,255,0.025);
    }

    .tester-drawer {
      min-width: 0;
      min-height: 0;
      margin: 302px 6px 126px 0;
      border-radius: 3px;
      border: 1px solid rgba(185, 221, 255, 0.24);
      background: rgba(0, 0, 0, 0.14);
      display: grid;
      grid-template-rows: auto minmax(0, 1fr) auto;
      overflow: hidden;
      box-shadow: inset 0 0 18px rgba(255,255,255,0.045);
    }

    .tester-drawer .tester-card-grid {
      padding: 8px;
      overflow: auto;
      scrollbar-width: none;
    }

    .tester-context-menu {
      position: fixed;
      z-index: 150;
      min-width: 190px;
      max-width: min(320px, calc(100vw - 24px));
      padding: 6px;
      border-radius: 10px;
      border: 1px solid rgba(95, 212, 255, 0.26);
      background: rgba(4, 12, 20, 0.96);
      box-shadow: 0 18px 48px rgba(0,0,0,0.52);
      display: grid;
      gap: 4px;
    }

    .tester-context-title {
      padding: 5px 8px 7px;
      color: var(--muted);
      font-size: 10px;
      line-height: 1.2;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .tester-context-menu button {
      width: 100%;
      padding: 7px 9px;
      border: 0;
      border-radius: 7px;
      background: transparent;
      color: var(--text);
      text-align: left;
      font: inherit;
      font-size: 12px;
      cursor: pointer;
    }

    .tester-context-menu button:hover {
      background: rgba(95, 212, 255, 0.14);
    }

    .tester-log {
      max-height: 92px;
      padding: 8px;
      overflow: auto;
      border-top: 1px solid rgba(95, 212, 255, 0.14);
      color: rgba(237,247,255,0.68);
      font-size: 10px;
      line-height: 1.35;
      scrollbar-width: none;
    }

    .tester-log::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .tester-log-entry {
      padding: 2px 0;
      border-bottom: 1px solid rgba(255,255,255,0.04);
    }

    .tester-stack-viewer {
      position: fixed;
      inset: 0;
      z-index: 140;
      display: grid;
      place-items: center;
      padding: 24px;
      background: rgba(0, 0, 0, 0.52);
      backdrop-filter: blur(6px);
    }

    .tester-stack-viewer-panel {
      width: min(980px, calc(100vw - 48px));
      max-height: min(720px, calc(100vh - 48px));
      display: grid;
      grid-template-rows: auto minmax(0, 1fr);
      border-radius: 14px;
      border: 1px solid rgba(95, 212, 255, 0.28);
      background: rgba(6, 18, 30, 0.96);
      box-shadow: 0 24px 70px rgba(0,0,0,0.58), inset 0 0 28px rgba(95,212,255,0.06);
      overflow: hidden;
    }

    .tester-stack-viewer-header {
      padding: 12px 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border-bottom: 1px solid rgba(95, 212, 255, 0.16);
    }

    .tester-stack-viewer-title {
      margin: 0;
      font-family: var(--font-display);
      font-size: 22px;
      line-height: 1;
    }

    .tester-stack-viewer-grid {
      min-height: 0;
      overflow: auto;
      padding: 14px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
      gap: 12px;
      align-content: start;
      scrollbar-width: none;
    }

    .tester-stack-viewer-grid::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    .tester-stack-bottom-drop {
      position: absolute;
      inset: auto 6px 6px 6px;
      z-index: 22;
      min-height: 20px;
      border-radius: 3px;
      border: 1px dashed rgba(95, 212, 255, 0.26);
      background: rgba(3, 13, 22, 0.62);
      color: rgba(237,247,255,0.66);
      display: grid;
      place-items: center;
      font-size: 10px;
      pointer-events: auto;
    }

    .tester-context-separator {
      height: 1px;
      margin: 3px 4px;
      background: rgba(255,255,255,0.08);
    }

    @media (max-width: 1260px) {
      .tester-view {
        grid-template-columns: 300px minmax(760px, 1fr) 230px;
      }

      .tester-actions .button {
        min-width: 70px;
        min-height: 52px;
        font-size: 18px;
      }

      .tester-deck-widget {
        width: 286px;
      }
    }

    @media (max-width: 980px) {
      .tester-view {
        height: auto;
        overflow: auto;
        grid-template-columns: 1fr;
      }

      .tester-board {
        min-height: 760px;
      }

      .tester-details-rail,
      .tester-drawer {
        min-height: 360px;
        margin: 0;
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 5px;
    }

    .stat-card {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      min-width: 0;
      padding: 6px 8px;
      border-radius: 10px;
      background:
        radial-gradient(circle at top right, rgba(95, 212, 255, 0.08), transparent 45%),
        rgba(255,255,255,0.035);
      border: 1px solid rgba(255,255,255,0.06);
      min-height: 30px;
    }

    .stat-label {
      color: var(--muted);
      font-size: 10px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .stat-value {
      font-family: var(--font-display);
      font-size: 20px;
      line-height: 0.9;
    }

    .deck-hero .meta-row {
      gap: 5px;
    }

    .deck-hero .chip {
      min-height: 22px;
      padding: 3px 8px;
      font-size: 11px;
    }

    .toolbar {
      padding: 8px 14px;
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--line);
      flex-wrap: wrap;
    }

    .toolbar-left, .toolbar-right {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .toolbar .input {
      min-height: 36px;
      padding: 8px 12px;
      border-radius: 11px;
      font-size: 13px;
    }

    .cards-panel {
      min-height: 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .cards-grid {
      flex: 1;
      min-height: 0;
      overflow: auto;
      padding: 12px 14px 14px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(var(--card-width), 1fr));
      gap: 8px;
      align-content: start;
    }

    .card-tile {
      position: relative;
      background: rgba(255,255,255,0.035);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 12px;
      padding: 6px;
      cursor: pointer;
      transition: transform 140ms ease, border-color 140ms ease, background 140ms ease;
    }

    .card-tile:hover {
      transform: translateY(-2px);
      border-color: rgba(95, 212, 255, 0.35);
      background: rgba(255,255,255,0.05);
    }

    .card-tile.active {
      border-color: rgba(255, 191, 95, 0.46);
      background:
        radial-gradient(circle at top right, rgba(255, 191, 95, 0.12), transparent 48%),
        rgba(255,255,255,0.06);
    }

    .deck-card-actions {
      display: grid;
      grid-template-columns: 24px minmax(0, 1fr) 24px;
      gap: 5px;
      align-items: center;
      margin-top: 6px;
    }

    .count-button,
    .catalog-add-button {
      appearance: none;
      border: 1px solid rgba(255,255,255,0.10);
      color: var(--text);
      cursor: pointer;
      font: inherit;
      transition: transform 120ms ease, border-color 120ms ease, background 120ms ease;
    }

    .count-button {
      width: 24px;
      height: 24px;
      border-radius: 8px;
      background: rgba(255,255,255,0.055);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
    }

    .count-button:hover,
    .catalog-add-button:hover {
      transform: translateY(-1px);
      border-color: rgba(95, 212, 255, 0.34);
    }

    .count-button:disabled,
    .catalog-add-button:disabled {
      cursor: not-allowed;
      opacity: 0.45;
      transform: none;
      filter: grayscale(0.5);
    }

    .count-button.plus {
      background: rgba(29, 108, 99, 0.72);
    }

    .count-button.minus {
      background: rgba(114, 27, 57, 0.72);
    }

    .deck-card-count {
      text-align: center;
      color: var(--muted);
      font-size: 12px;
      font-family: var(--font-mono);
    }

    .card-thumb {
      position: relative;
      aspect-ratio: 7 / 10;
      overflow: hidden;
      border-radius: 8px;
      background:
        linear-gradient(145deg, rgba(16, 39, 62, 1), rgba(8, 18, 27, 1));
      margin-bottom: 6px;
    }

    .count-pill {
      position: absolute;
      top: 7px;
      right: 7px;
      min-width: 24px;
      height: 24px;
      border-radius: 999px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0 7px;
      background: rgba(4, 12, 20, 0.88);
      border: 1px solid rgba(255,255,255,0.16);
      color: #fff;
      font-weight: 700;
      box-shadow: 0 6px 16px rgba(0,0,0,0.35);
    }

    .card-title {
      margin: 0;
      font-size: 12px;
      line-height: 1.2;
      min-height: 29px;
    }

    .card-code {
      margin-top: 5px;
      color: var(--accent);
      font-size: 11px;
      font-family: var(--font-mono);
    }

    .card-meta {
      margin-top: 6px;
      color: var(--muted);
      font-size: 11px;
      line-height: 1.35;
      min-height: 30px;
    }

    .catalog-panel {
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }

    .catalog-controls {
      flex: 0 0 auto;
      padding: 8px 10px 9px;
      display: grid;
      gap: 5px;
      border-bottom: 1px solid var(--line);
      background: rgba(2, 8, 14, 0.42);
    }

    .filter-grid {
      display: grid;
      gap: 4px;
      min-width: 0;
    }

    .filter-row {
      display: grid;
      gap: 4px;
      align-items: center;
      min-width: 0;
    }

    .filter-row > * {
      min-width: 0;
    }

    .filter-row.top {
      grid-template-columns: minmax(72px, 0.95fr) minmax(92px, 1.55fr) minmax(48px, 0.7fr);
    }

    .filter-row.middle {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }

    .filter-row.lower {
      grid-template-columns: minmax(74px, 1fr) minmax(0, 1.35fr) minmax(0, 1.35fr);
    }

    .filter-row.bottom {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 6px 8px;
      padding-top: 3px;
    }

    .filter-input,
    .filter-select {
      width: 100%;
      min-height: 25px;
      border: 1px solid rgba(121, 188, 255, 0.2);
      background: rgba(2, 7, 12, 0.78);
      color: var(--text);
      border-radius: 3px;
      padding: 4px 7px;
      font: inherit;
      font-size: 11px;
      line-height: 1;
      outline: none;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .filter-select {
      padding-right: 4px;
    }

    .filter-color-select {
      flex: 0 0 38px;
      width: 38px;
      min-width: 38px;
      padding-left: 4px;
      padding-right: 2px;
      text-align: center;
    }

    .filter-input:focus,
    .filter-select:focus {
      border-color: var(--accent);
      background: rgba(4, 10, 17, 0.76);
    }

    .filter-check {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: #d8e8f5;
      font-size: 11px;
      line-height: 1;
      user-select: none;
      white-space: nowrap;
    }

    .filter-check input {
      accent-color: var(--accent-strong);
    }

    #filter-clear {
      flex: 0 0 auto;
      margin-left: auto;
      min-height: 25px;
      padding: 0 10px;
      border-radius: 3px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .catalog-results {
      flex: 1;
      min-height: 0;
      overflow: auto;
      padding: 12px 14px 18px;
      display: grid;
      gap: 9px;
      align-content: start;
    }

    .catalog-card {
      display: grid;
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 10px;
      align-items: start;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.07);
      background: rgba(255,255,255,0.035);
      padding: 8px;
      color: var(--text);
      text-align: left;
      cursor: pointer;
    }

    .catalog-card:hover {
      border-color: rgba(95, 212, 255, 0.32);
      background: rgba(255,255,255,0.05);
    }

    .catalog-thumb {
      aspect-ratio: 7 / 10;
      border-radius: 8px;
      overflow: hidden;
      background: linear-gradient(145deg, rgba(16, 39, 62, 1), rgba(8, 18, 27, 1));
    }

    .catalog-thumb img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    .catalog-card-title {
      margin: 0;
      font-size: 13px;
      line-height: 1.18;
    }

    .catalog-card-code {
      margin-top: 5px;
      color: var(--accent);
      font-family: var(--font-mono);
      font-size: 12px;
    }

    .catalog-card-meta {
      margin-top: 6px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.35;
    }

    .catalog-add-button {
      margin-top: 8px;
      min-height: 28px;
      padding: 0 9px;
      border-radius: 8px;
      background: rgba(29, 108, 99, 0.72);
    }

    .details-body {
      flex: 1 1 auto;
      padding: 8px 10px 24px;
      overflow-y: auto;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-height: 0;
    }

    .details-art {
      width: min(100%, 248px);
      flex: 0 0 auto;
      align-self: center;
      aspect-ratio: 7 / 10;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(2, 6, 11, 0.92);
      box-shadow: 0 10px 26px rgba(0,0,0,0.48);
    }

    .details-art img {
      object-fit: contain;
      background: rgba(2, 6, 11, 0.92);
    }

    .details-card-head {
      display: grid;
      gap: 4px;
      text-align: center;
      flex: 0 0 auto;
    }

    .details-name {
      margin: 0;
      font-size: 24px;
      line-height: 0.94;
      font-family: var(--font-display);
      letter-spacing: 0.02em;
    }

    .details-traits {
      color: rgba(245, 250, 255, 0.92);
      font-family: var(--font-display);
      font-size: 16px;
      line-height: 1.05;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 6px;
    }

    .details-trait-divider {
      color: rgba(255,255,255,0.56);
    }

    .details-color-strip {
      display: flex;
      flex: 0 0 auto;
      min-height: 30px;
      overflow: hidden;
      border-radius: 5px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(0, 0, 0, 0.24);
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.28);
    }

    .details-color-segment {
      flex: 1 1 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 0;
      padding: 0 8px;
      color: white;
      font-family: var(--font-display);
      font-size: 18px;
      line-height: 1;
      text-shadow: 0 2px 5px rgba(0,0,0,0.78);
    }

    .details-info-card {
      display: grid;
      flex: 0 0 auto;
      gap: 5px;
      padding: 6px;
      overflow: hidden;
      border-radius: 5px;
      border: 1px solid rgba(124, 124, 118, 0.40);
      background:
        linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.006)),
        rgba(12, 21, 16, 0.34);
      box-shadow: inset 0 0 24px rgba(255,255,255,0.04);
    }

    .details-info-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 12px;
      flex-wrap: wrap;
      color: rgba(245,250,255,0.94);
      font-size: 13px;
      line-height: 1.18;
    }

    .details-info-metric {
      color: #dffcff;
      font-weight: 800;
    }

    .details-color-dot {
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 999px;
      transform: translateY(2px);
      box-shadow: inset 0 1px 3px rgba(255,255,255,0.45), 0 0 0 1px rgba(0,0,0,0.35);
      margin: 0 2px;
    }

    .details-special-card,
    .details-effect-card,
    .details-rule-card {
      flex: 0 0 auto;
      color: ghostwhite;
      border-radius: 5px;
      border: 1px solid rgba(124, 124, 118, 0.40);
      box-shadow: inset 0 0 24px rgba(255,255,255,0.04);
      overflow: hidden;
    }

    .details-special-card {
      padding: 4px 5px;
      font-size: 13px;
      line-height: 1.34;
      overflow-wrap: anywhere;
      white-space: normal;
      background:
        radial-gradient(circle at 0% 0%, rgba(0,255,180,0.12), transparent 7%),
        radial-gradient(circle at 25% 50%, rgba(0,220,255,0.10), transparent 8%),
        radial-gradient(circle at 70% 100%, rgba(100,255,200,0.09), transparent 8%),
        linear-gradient(135deg, rgba(6, 164, 159, 0.12), rgba(5, 15, 20, 0.42));
      border-color: rgba(6, 164, 159, 0.55);
      box-shadow: inset 0 0 6px rgba(0, 255, 255, 0.20);
    }

    .details-effect-card {
      background: rgba(12, 21, 16, 0.32);
    }

    .details-effect-header {
      padding: 6px 7px 4px;
      border-bottom: 1px solid rgba(255,255,255,0.22);
      margin: 0;
      color: rgba(255,255,255,0.84);
      font-size: 11px;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.005));
    }

    .details-effect-text {
      padding: 6px 7px;
      color: rgba(255,255,255,0.94);
      font-size: 13px;
      line-height: 1.38;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
      min-height: max-content;
    }

    .details-rule-card {
      padding: 6px 7px;
      color: #0f1114;
      background: rgba(235, 235, 235, 0.72);
      font-size: 12px;
      line-height: 1.3;
      font-weight: 700;
    }

    .details-footer {
      display: flex;
      flex: 0 0 auto;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      color: rgba(245,250,255,0.84);
      font-size: 12px;
      line-height: 1.1;
    }

    .details-rulings-link {
      color: ghostwhite;
      text-decoration: none;
      border: 1px solid rgba(22, 171, 255, 0.18);
      background: rgba(56, 111, 240, 0.22);
      box-shadow: inset 3px 3px 10px rgba(255,255,255,0.06);
      border-radius: 5px;
      padding: 3px 6px;
      font-weight: 700;
      white-space: nowrap;
    }

    .effect-token {
      display: inline-block;
      max-width: 100%;
      color: ghostwhite;
      border-radius: 3px;
      padding: 1px 4px;
      margin: 0 2px 2px 0;
      line-height: 1.1;
      white-space: normal;
      overflow-wrap: anywhere;
      text-shadow: 0 1px 2px rgba(0,0,0,0.45);
    }

    .effect-token.angle,
    .effect-token.keyword {
      border-radius: 999px;
      background: linear-gradient(to top, #883b09, #ce570d);
    }

    .effect-token.timing {
      background: linear-gradient(to top, #292e96, #454dd9);
    }

    .effect-token.recurring {
      background: linear-gradient(to top, #5e173c, #b5485d);
    }

    .effect-token.rule {
      background: linear-gradient(to top, #0c0c0c, #2a2a2a);
      font-weight: 800;
      letter-spacing: 0.04em;
    }

    .effect-token.special {
      background: linear-gradient(0deg, rgb(35, 140, 81) 0%, rgb(11, 105, 68) 100%);
    }

    .effect-token.evolution {
      background: linear-gradient(0deg, rgb(4, 76, 94) 0%, rgb(6, 164, 159) 100%);
    }

    .effect-token.name {
      background: rgba(15, 0, 30, 0.52);
      border: 1px solid rgba(231,231,231,0.85);
      border-radius: 2px;
    }

    .effect-token.trait {
      background: rgba(80, 65, 40, 0.58);
      border: 1px solid #8c6b23;
      border-radius: 4px;
    }

    .footer-note {
      margin-top: auto;
      padding: 0 22px 22px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.45;
    }

    .color-swatch {
      width: 9px;
      height: 9px;
      border-radius: 999px;
      display: inline-block;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.18);
    }

    .hidden {
      display: none !important;
    }

    body.modal-open {
      overflow: hidden;
    }

    .image-viewer {
      position: fixed;
      inset: 0;
      z-index: 100;
      display: grid;
      place-items: center;
      padding: 24px;
      background:
        radial-gradient(circle at center, rgba(34, 118, 196, 0.22), transparent 52%),
        rgba(1, 5, 9, 0.88);
      backdrop-filter: blur(10px);
    }

    .image-viewer-frame {
      display: grid;
      justify-items: center;
      gap: 10px;
      max-width: 94vw;
      max-height: 94vh;
    }

    .image-viewer-frame img {
      display: block;
      max-width: min(94vw, 720px);
      max-height: 86vh;
      object-fit: contain;
      border-radius: 18px;
      box-shadow: 0 24px 80px rgba(0,0,0,0.72);
      background: rgba(2, 6, 11, 0.92);
    }

    .image-viewer-caption {
      color: rgba(245,250,255,0.88);
      font-size: 14px;
      text-align: center;
      text-shadow: 0 2px 8px rgba(0,0,0,0.8);
    }

    .image-viewer-close {
      position: fixed;
      top: 18px;
      right: 18px;
      min-width: 40px;
      min-height: 40px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.18);
      background: rgba(4, 12, 20, 0.86);
      color: var(--text);
      font: inherit;
      font-size: 22px;
      line-height: 1;
      cursor: pointer;
      box-shadow: 0 12px 34px rgba(0,0,0,0.45);
    }

    .image-zoomable {
      cursor: pointer;
    }

    @media (max-width: 1380px) {
      .app,
      .app.editor-view {
        grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
        height: auto;
        min-height: calc(100vh - 32px);
        overflow: visible;
      }

      .catalog-panel {
        grid-column: 1 / -1;
        min-height: 460px;
        max-height: none;
      }
    }

    @media (max-width: 980px) {
      .shell {
        padding: 16px;
      }

      .library-view {
        min-height: calc(100vh - 32px);
      }

      .library-header,
      .library-toolbar,
      .library-grid,
      .library-footer {
        padding-left: 16px;
        padding-right: 16px;
      }

      .app {
        grid-template-columns: 1fr;
        min-height: auto;
      }

      .app.editor-view {
        height: auto;
        min-height: auto;
        overflow: visible;
      }

      .stats-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .cards-grid {
        grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
        padding: 14px 16px 18px;
      }

      .filter-row.middle {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      .filter-row.bottom {
        grid-template-columns: repeat(3, 38px) 1fr 1fr auto;
      }

      .sidebar-header,
      .details-header,
      .deck-hero,
      .toolbar {
        padding-left: 16px;
        padding-right: 16px;
      }

      .control-wrap,
      .footer-note,
      .details-body {
        padding-left: 16px;
        padding-right: 16px;
      }
    }

    @media (max-width: 620px) {
      .hero-title {
        font-size: 34px;
      }

      .title {
        font-size: 28px;
      }

      .stats-grid {
        grid-template-columns: 1fr 1fr;
      }

      .card-tile {
        padding: 8px;
      }

      .filter-row.top,
      .filter-row.middle,
      .filter-row.lower,
      .filter-row.bottom {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="shell">
    <section id="library-view" class="panel library-view">
      <div class="library-header">
        <div class="library-heading">
          <p class="eyebrow">DCGO Utility</p>
          <h1 class="title">Deck Library</h1>
          <p class="subtitle">Browse the current shared deck folder. Open a deck to inspect and edit it on its own page.</p>
        </div>
        <div class="tiny" id="library-summary"></div>
      </div>
      <div class="library-toolbar">
        <div class="library-toolbar-left">
          <input id="library-search" class="input library-search" type="search" placeholder="Search decks or included cards">
          <button id="new-deck-button" class="button primary" type="button" title="Create an empty deck file in the shared deck folder">New Deck</button>
          <button id="update-card-database" class="button" type="button" title="Force-refresh card metadata from GitHub">Update Card DB</button>
        </div>
        <div class="library-toolbar-right tiny">Generated: <span id="library-generated-at-label"></span></div>
      </div>
      <div id="library-grid" class="library-grid"></div>
      <div class="library-footer">
        Built from <span id="library-deck-root-label"></span><br>
        Metadata source: <span id="library-manifest-source-label"></span>
      </div>
    </section>

    <section id="editor-view" class="app editor-view hidden">
      <aside class="panel sidebar">
        <div id="details-body" class="details-body"></div>
      </aside>

      <main class="panel main">
        <section class="deck-hero">
          <div class="hero-top">
            <div>
              <p class="eyebrow">Selected Deck</p>
              <h2 class="hero-title" id="hero-title">No deck selected</h2>
              <p class="hero-subtitle" id="hero-subtitle">Choose a deck from the list on the left.</p>
              <div id="dirty-status" class="dirty-status hidden"></div>
            </div>
            <div class="hero-actions">
              <button id="back-to-library" class="button" type="button">Back to Decks</button>
              <button id="save-changes" class="button success" type="button">Save Changes</button>
              <button id="export-deck-image" class="button" type="button">Export Image</button>
              <button id="import-clipboard" class="button" type="button">Import Clipboard</button>
              <button id="test-hand" class="button primary" type="button">Test Hand</button>
              <button id="rename-deck" class="button" type="button">Rename</button>
              <button id="duplicate-deck" class="button" type="button">Duplicate</button>
              <button id="delete-deck" class="button danger" type="button">Delete</button>
              <button id="copy-decklist" class="button primary" type="button">Copy Updated List</button>
              <button id="copy-filename" class="button" type="button">Copy File Name</button>
            </div>
          </div>
          <div id="stats-grid" class="stats-grid"></div>
          <div id="hero-chips" class="meta-row"></div>
          <div id="validation-panel" class="validation-panel"></div>
          <div id="test-hand-panel" class="test-hand-panel hidden">
            <div class="test-hand-header">
              <div>
                <h3>Test Hand</h3>
                <div id="test-hand-status" class="tiny"></div>
              </div>
              <div class="test-hand-actions">
                <button id="new-test-hand" class="button primary" type="button">New Hand</button>
                <button id="mulligan-test-hand" class="button" type="button">Mulligan</button>
                <button id="draw-test-card" class="button" type="button">Draw 1</button>
                <button id="reset-test-hand" class="button" type="button">Hide</button>
              </div>
            </div>
            <div id="test-hand-grid" class="test-hand-grid"></div>
          </div>
        </section>
        <section class="toolbar">
          <div class="toolbar-left">
            <input id="card-search" class="input" type="search" placeholder="Filter cards in this deck" style="min-width: 240px; max-width: 320px;">
          </div>
          <div class="toolbar-right tiny" id="card-search-summary"></div>
        </section>
        <section class="cards-panel">
          <div id="cards-grid" class="cards-grid"></div>
        </section>
      </main>

      <aside class="panel catalog-panel">
        <div class="details-header">
          <p class="eyebrow">Card Search</p>
          <div class="tiny" id="catalog-summary"></div>
        </div>
        <div class="catalog-controls">
          <div class="filter-grid">
            <div class="filter-row top">
              <input id="filter-number" class="filter-input" type="search" placeholder="Set Number">
              <input id="filter-name" class="filter-input" type="search" placeholder="Name">
              <input id="filter-dp" class="filter-input" type="number" min="0" step="1000" placeholder="DP">
            </div>

            <div class="filter-row middle">
              <select id="filter-type" class="filter-select">
                <option value="">Type</option>
                <option>Digimon</option>
                <option>Digi-Egg</option>
                <option>Option</option>
                <option>Tamer</option>
              </select>
              <select id="filter-attribute" class="filter-select">
                <option value="">Attr.</option>
                <option>Data</option>
                <option>Free</option>
                <option>Unknown</option>
                <option>Variable</option>
                <option>Vaccine</option>
                <option>Virus</option>
                <option>Game</option>
                <option>God</option>
                <option>Life</option>
                <option>Navi</option>
                <option>Social</option>
                <option>System</option>
                <option>Tool</option>
              </select>
              <select id="filter-play-cost" class="filter-select">
                <option value="">Cost</option>
                <option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>
                <option>5</option><option>6</option><option>7</option><option>8</option><option>9</option>
                <option>10</option><option>11</option><option>12</option><option>13</option><option>14</option>
                <option>15</option><option>16</option><option>20</option>
              </select>
              <select id="filter-digivolution-cost" class="filter-select">
                <option value="">Digiv. Cost</option>
                <option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>
                <option>5</option><option>6</option><option>7</option><option>8</option><option>9</option>
              </select>
              <select id="filter-level" class="filter-select">
                <option value="">Lvl</option>
                <option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>
              </select>
            </div>

            <div class="filter-row lower">
              <select id="filter-stage" class="filter-select">
                <option value="">Stage</option>
                <option>In-Training</option>
                <option>Rookie</option>
                <option>Champion</option>
                <option>Ultimate</option>
                <option>Mega</option>
                <option>Armor Form</option>
                <option>Hybrid</option>
                <option>Appmon</option>
                <option>Stnd./Appmon</option>
                <option>Sup./Appmon</option>
                <option>Ult./Appmon</option>
                <option>God/Appmon</option>
                <option>D-Reaper</option>
                <option>Eater</option>
              </select>
              <input id="filter-trait" class="filter-input" type="search" placeholder="Trait">
              <input id="filter-illustrator" class="filter-input" type="search" placeholder="Illustrator">
            </div>

            <input id="filter-effect" class="filter-input" type="search" placeholder="Effect Text">

            <div class="filter-row bottom">
              <select id="filter-color-1" class="filter-select filter-color-select" title="Color 1">
                <option value="">🌈</option>
                <option value="Red">🟥</option>
                <option value="Blue">🟦</option>
                <option value="Yellow">🟨</option>
                <option value="Green">🟩</option>
                <option value="Purple">🟪</option>
                <option value="Black">⬛</option>
                <option value="White">⬜</option>
              </select>
              <select id="filter-color-2" class="filter-select filter-color-select" title="Color 2">
                <option value="">🌈</option>
                <option value="Red">🟥</option>
                <option value="Blue">🟦</option>
                <option value="Yellow">🟨</option>
                <option value="Green">🟩</option>
                <option value="Purple">🟪</option>
                <option value="Black">⬛</option>
                <option value="White">⬜</option>
              </select>
              <select id="filter-color-3" class="filter-select filter-color-select" title="Color 3">
                <option value="">🌈</option>
                <option value="Red">🟥</option>
                <option value="Blue">🟦</option>
                <option value="Yellow">🟨</option>
                <option value="Green">🟩</option>
                <option value="Purple">🟪</option>
                <option value="Black">⬛</option>
                <option value="White">⬜</option>
              </select>
              <label class="filter-check"><input id="filter-ace" type="checkbox"> ACE</label>
              <label class="filter-check"><input id="filter-alt-arts" type="checkbox" checked> Alt Arts</label>
              <button id="filter-clear" class="button" type="button">Clear</button>
            </div>
          </div>
        </div>
        <div id="catalog-grid" class="catalog-results"></div>
      </aside>
    </section>

    <section id="test-view" class="tester-view hidden">
      <aside class="tester-details-rail">
        <div class="tester-rail-actions">
          <button id="tester-back-library" class="button" type="button" title="Back to deck library" aria-label="Back to deck library">←</button>
          <button id="tester-edit-deck" class="button" type="button" title="Edit deck" aria-label="Edit deck">✎</button>
        </div>
        <div id="tester-details-body" class="details-body tester-details-body"></div>
      </aside>

      <main class="tester-board">
        <div class="tester-board-tools">
          <section class="tester-deck-widget tester-piles">
            <div class="tester-deck-title-row">
              <div>
                <p class="eyebrow">Hand Test</p>
                <h2 id="tester-title" class="tester-title">No deck selected</h2>
                <p id="tester-subtitle" class="tester-subtitle"></p>
              </div>
              <div id="tester-session-meta" class="tester-zone-meta"></div>
            </div>
            <div id="tester-stats-grid" class="tester-stats-grid"></div>
            <div id="tester-pile-list" class="tester-pile-list"></div>
            <div class="tester-mini-actions">
              <button id="tester-hatch-egg" class="button" type="button" title="Hatch top egg" aria-label="Hatch top egg">Egg</button>
              <button id="tester-reveal-deck" class="button" type="button" title="Reveal top deck card" aria-label="Reveal top deck card">Top</button>
              <button id="tester-trash-deck" class="button danger" type="button" title="Trash top deck card" aria-label="Trash top deck card">Mill</button>
              <button id="tester-open-trash" class="button" type="button" title="Open trash" aria-label="Open trash">Trash</button>
            </div>
          </section>

          <div class="tester-actions">
            <button id="tester-new-shuffle" class="button primary" type="button" title="Reset with a new random shuffle" aria-label="Reset with a new random shuffle">RESET</button>
            <button id="tester-mulligan" class="button" type="button" title="Mulligan / new hand" aria-label="Mulligan or new hand">MULL</button>
            <button id="tester-draw" class="button" type="button" title="Draw one card" aria-label="Draw one card">+1</button>
            <button id="tester-reveal-security" class="button success" type="button" title="Reveal one security" aria-label="Reveal one security">SEC</button>
            <button id="tester-reveal-all-security" class="button" type="button" title="Reveal all security" aria-label="Reveal all security">ALL</button>
            <button id="tester-toggle-security" class="button" type="button" title="Show or hide security" aria-label="Show or hide security">👁</button>
          </div>
        </div>

        <section class="tester-reveal-panel">
          <div class="tester-zone-header compact">
            <h3 class="tester-zone-title">Reveal</h3>
            <div id="tester-reveal-meta" class="tester-zone-meta"></div>
          </div>
          <div id="tester-revealed-security-grid" class="tester-security-cards"></div>
        </section>

        <section id="tester-security-panel" class="tester-security-panel hidden">
          <div class="tester-zone-header compact">
            <h3 class="tester-zone-title">Security</h3>
            <div id="tester-security-meta" class="tester-zone-meta"></div>
          </div>
          <div id="tester-security-grid" class="tester-security-cards"></div>
        </section>

        <div id="tester-memory-track" class="tester-memory-track"></div>

        <section class="tester-field-area">
          <section id="tester-breeding-zone" class="tester-breeding-slot empty">
            <div class="tester-field-label">
              <span>Breeding</span>
              <span id="tester-breeding-meta">0</span>
            </div>
            <div id="tester-breeding-stack" class="tester-stack"></div>
          </section>
          <section class="tester-battle-wrap">
            <div class="tester-zone-header compact">
              <h3 class="tester-zone-title">Battle Area</h3>
              <div id="tester-board-meta" class="tester-zone-meta"></div>
            </div>
            <div id="tester-board-grid" class="tester-fields"></div>
          </section>
          <section class="tester-trash-drop" title="Open trash">
            <button id="tester-trash-pile-button" class="tester-trash-button" type="button" aria-label="Open trash">🗑</button>
            <span id="tester-trash-count">0</span>
            <div class="tester-deck-dock">
              <button id="tester-deck-stack" class="tester-deck-stack-button" type="button" title="Draw one card. Drop here to put a card on top of the deck." aria-label="Deck: draw one card"></button>
              <div id="tester-deck-count" class="tester-deck-count">0</div>
              <div id="tester-deck-bottom-drop" class="tester-deck-bottom-drop" title="Drop here to put a card on the bottom of the deck">▽</div>
            </div>
          </section>
        </section>

        <section class="tester-bottom-row">
          <div class="tester-security-dock">
            <button id="tester-security-button" class="tester-zone-icon-button" type="button" title="Open security" aria-label="Open security">SEC</button>
            <div id="tester-security-count" class="tester-zone-meta"></div>
          </div>
          <div class="tester-hand-row">
            <div class="tester-zone-header compact">
              <h3 class="tester-zone-title">Hand</h3>
              <div class="tester-hand-tools">
                <select id="tester-hand-sort" class="tester-hand-sort" title="Sort hand" aria-label="Sort hand">
                  <option value="">Manual</option>
                  <option value="type">Type</option>
                  <option value="level">Level</option>
                  <option value="playCost">Play Cost</option>
                  <option value="digivolveCost">Digi Cost</option>
                  <option value="color">Color</option>
                  <option value="number">Set #</option>
                  <option value="name">Name</option>
                </select>
                <div id="tester-hand-meta" class="tester-zone-meta"></div>
              </div>
            </div>
            <div id="tester-hand-grid" class="tester-hand-fan"></div>
          </div>
        </section>
      </main>

      <aside class="tester-drawer">
        <div class="tester-zone-header">
          <h3 id="tester-drawer-title" class="tester-zone-title">Trash</h3>
          <div id="tester-drawer-meta" class="tester-zone-meta"></div>
        </div>
        <div id="tester-drawer-grid" class="tester-card-grid"></div>
        <div id="tester-log" class="tester-log"></div>
      </aside>
    </section>
  </div>
  <div id="image-viewer" class="image-viewer hidden" role="dialog" aria-modal="true" aria-label="Card image preview">
    <button id="image-viewer-close" class="image-viewer-close" type="button" aria-label="Close image preview">×</button>
    <div class="image-viewer-frame">
      <img id="image-viewer-img" alt="">
      <div id="image-viewer-caption" class="image-viewer-caption"></div>
    </div>
  </div>
  <div id="tester-context-menu" class="tester-context-menu hidden" role="menu"></div>
  <div id="tester-stack-viewer" class="tester-stack-viewer hidden" role="dialog" aria-modal="true" aria-label="Stack viewer">
    <section class="tester-stack-viewer-panel">
      <div class="tester-stack-viewer-header">
        <h2 id="tester-stack-viewer-title" class="tester-stack-viewer-title">Stack</h2>
        <button id="tester-stack-viewer-close" class="button" type="button" aria-label="Close stack viewer">Close</button>
      </div>
      <div id="tester-stack-viewer-grid" class="tester-stack-viewer-grid"></div>
    </section>
  </div>

  <script>
    const APP_DATA = $app_data;
    const GENERATED_AT = $generated_at;
    const MANIFEST_SOURCE = $manifest_source;
    const DECK_ROOT = $deck_root;

    const libraryViewEl = document.getElementById("library-view");
    const editorViewEl = document.getElementById("editor-view");
    const testViewEl = document.getElementById("test-view");
    const libraryGridEl = document.getElementById("library-grid");
    const librarySearchEl = document.getElementById("library-search");
    const librarySummaryEl = document.getElementById("library-summary");
    const libraryGeneratedAtEl = document.getElementById("library-generated-at-label");
    const libraryManifestSourceEl = document.getElementById("library-manifest-source-label");
    const libraryDeckRootEl = document.getElementById("library-deck-root-label");
    const newDeckButtonEl = document.getElementById("new-deck-button");
    const updateCardDatabaseBtn = document.getElementById("update-card-database");
    const cardSearchEl = document.getElementById("card-search");
    const catalogGridEl = document.getElementById("catalog-grid");
    const catalogSummaryEl = document.getElementById("catalog-summary");
    const filterEls = {
      name: document.getElementById("filter-name"),
      number: document.getElementById("filter-number"),
      dp: document.getElementById("filter-dp"),
      color1: document.getElementById("filter-color-1"),
      color2: document.getElementById("filter-color-2"),
      color3: document.getElementById("filter-color-3"),
      type: document.getElementById("filter-type"),
      attribute: document.getElementById("filter-attribute"),
      playCost: document.getElementById("filter-play-cost"),
      digivolutionCost: document.getElementById("filter-digivolution-cost"),
      level: document.getElementById("filter-level"),
      stage: document.getElementById("filter-stage"),
      trait: document.getElementById("filter-trait"),
      illustrator: document.getElementById("filter-illustrator"),
      effect: document.getElementById("filter-effect"),
      ace: document.getElementById("filter-ace"),
      altArts: document.getElementById("filter-alt-arts"),
      clear: document.getElementById("filter-clear")
    };
    const heroTitleEl = document.getElementById("hero-title");
    const heroSubtitleEl = document.getElementById("hero-subtitle");
    const statsGridEl = document.getElementById("stats-grid");
    const heroChipsEl = document.getElementById("hero-chips");
    const cardsGridEl = document.getElementById("cards-grid");
    const detailsBodyEl = document.getElementById("details-body");
    const cardSearchSummaryEl = document.getElementById("card-search-summary");
    const backToLibraryBtn = document.getElementById("back-to-library");
    const saveChangesBtn = document.getElementById("save-changes");
    const exportDeckImageBtn = document.getElementById("export-deck-image");
    const importClipboardBtn = document.getElementById("import-clipboard");
    const testHandBtn = document.getElementById("test-hand");
    const renameDeckBtn = document.getElementById("rename-deck");
    const duplicateDeckBtn = document.getElementById("duplicate-deck");
    const deleteDeckBtn = document.getElementById("delete-deck");
    const copyDecklistBtn = document.getElementById("copy-decklist");
    const copyFilenameBtn = document.getElementById("copy-filename");
    const dirtyStatusEl = document.getElementById("dirty-status");
    const validationPanelEl = document.getElementById("validation-panel");
    const testHandPanelEl = document.getElementById("test-hand-panel");
    const testHandStatusEl = document.getElementById("test-hand-status");
    const testHandGridEl = document.getElementById("test-hand-grid");
    const newTestHandBtn = document.getElementById("new-test-hand");
    const mulliganTestHandBtn = document.getElementById("mulligan-test-hand");
    const drawTestCardBtn = document.getElementById("draw-test-card");
    const resetTestHandBtn = document.getElementById("reset-test-hand");
    const testerDetailsBodyEl = document.getElementById("tester-details-body");
    const testerTitleEl = document.getElementById("tester-title");
    const testerSubtitleEl = document.getElementById("tester-subtitle");
    const testerSessionMetaEl = document.getElementById("tester-session-meta");
    const testerStatsGridEl = document.getElementById("tester-stats-grid");
    const testerPileListEl = document.getElementById("tester-pile-list");
    const testerHandGridEl = document.getElementById("tester-hand-grid");
    const testerHandMetaEl = document.getElementById("tester-hand-meta");
    const testerHandSortEl = document.getElementById("tester-hand-sort");
    const testerDeckStackEl = document.getElementById("tester-deck-stack");
    const testerDeckCountEl = document.getElementById("tester-deck-count");
    const testerDeckBottomDropEl = document.getElementById("tester-deck-bottom-drop");
    const testerMemoryTrackEl = document.getElementById("tester-memory-track");
    const testerRevealPanelEl = document.querySelector(".tester-reveal-panel");
    const testerSecurityPanelEl = document.getElementById("tester-security-panel");
    const testerSecurityButtonEl = document.getElementById("tester-security-button");
    const testerSecurityCountEl = document.getElementById("tester-security-count");
    const testerSecurityGridEl = document.getElementById("tester-security-grid");
    const testerRevealedSecurityGridEl = document.getElementById("tester-revealed-security-grid");
    const testerSecurityMetaEl = document.getElementById("tester-security-meta");
    const testerRevealMetaEl = document.getElementById("tester-reveal-meta");
    const testerBreedingZoneEl = document.getElementById("tester-breeding-zone");
    const testerBreedingStackEl = document.getElementById("tester-breeding-stack");
    const testerBreedingMetaEl = document.getElementById("tester-breeding-meta");
    const testerBoardGridEl = document.getElementById("tester-board-grid");
    const testerBoardMetaEl = document.getElementById("tester-board-meta");
    const testerDrawerTitleEl = document.getElementById("tester-drawer-title");
    const testerDrawerMetaEl = document.getElementById("tester-drawer-meta");
    const testerDrawerGridEl = document.getElementById("tester-drawer-grid");
    const testerLogEl = document.getElementById("tester-log");
    const testerBackLibraryBtn = document.getElementById("tester-back-library");
    const testerEditDeckBtn = document.getElementById("tester-edit-deck");
    const testerNewShuffleBtn = document.getElementById("tester-new-shuffle");
    const testerMulliganBtn = document.getElementById("tester-mulligan");
    const testerDrawBtn = document.getElementById("tester-draw");
    const testerRevealSecurityBtn = document.getElementById("tester-reveal-security");
    const testerRevealAllSecurityBtn = document.getElementById("tester-reveal-all-security");
    const testerToggleSecurityBtn = document.getElementById("tester-toggle-security");
    const testerHatchEggBtn = document.getElementById("tester-hatch-egg");
    const testerRevealDeckBtn = document.getElementById("tester-reveal-deck");
    const testerTrashDeckBtn = document.getElementById("tester-trash-deck");
    const testerOpenTrashBtn = document.getElementById("tester-open-trash");
    const testerTrashPileBtn = document.getElementById("tester-trash-pile-button");
    const testerTrashCountEl = document.getElementById("tester-trash-count");
    const imageViewerEl = document.getElementById("image-viewer");
    const imageViewerImgEl = document.getElementById("image-viewer-img");
    const imageViewerCaptionEl = document.getElementById("image-viewer-caption");
    const imageViewerCloseBtn = document.getElementById("image-viewer-close");
    const testerContextMenuEl = document.getElementById("tester-context-menu");
    const testerStackViewerEl = document.getElementById("tester-stack-viewer");
    const testerStackViewerTitleEl = document.getElementById("tester-stack-viewer-title");
    const testerStackViewerGridEl = document.getElementById("tester-stack-viewer-grid");
    const testerStackViewerCloseBtn = document.getElementById("tester-stack-viewer-close");

    const COLOR_MAP = {
      "Red": "#f25757",
      "Blue": "#53a8ff",
      "Yellow": "#ffca4f",
      "Green": "#55cc7a",
      "Purple": "#9d73ff",
      "Black": "#8f9ca8",
      "White": "#e7eef7"
    };

    const CARD_BY_CODE = {};
    const CARDS_BY_NUMBER = {};
    const TRAIT_WORDS = {};
    APP_DATA.cardCatalog.forEach(function(card) {
      CARD_BY_CODE[String(card.code).toUpperCase()] = card;
      const numberKey = String(card.cardNumber || card.code).toUpperCase();
      if (!CARDS_BY_NUMBER[numberKey]) CARDS_BY_NUMBER[numberKey] = [];
      CARDS_BY_NUMBER[numberKey].push(card);
      (card.digitype || []).forEach(function(trait) { TRAIT_WORDS[String(trait)] = true; });
      [card.stage, card.attribute].forEach(function(value) {
        if (value) TRAIT_WORDS[String(value)] = true;
      });
    });

    APP_DATA.decks.forEach(function(deck) {
      deck.savedExportText = deck.exportText || "";
    });

    const state = {
      view: "library",
      deckQuery: "",
      cardQuery: "",
      selectedDeckId: APP_DATA.decks.length ? APP_DATA.decks[0].id : null,
      selectedCardCode: null,
      testHand: {
        visible: false,
        deckId: null,
        nextId: 1,
        stack: [],
        eggDeck: [],
        hand: [],
        security: [],
        revealedSecurity: [],
        reveal: [],
        breeding: [],
        fields: [],
        trash: [],
        memory: 0,
        showSecurity: false,
        showSecurityPanel: false,
        showRevealPanel: false,
        handSort: "",
        openDrawer: "trash",
        stackViewer: null,
        log: []
      }
    };

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
    }

    function formatNumber(value) {
      if (value === null || value === undefined || value === "") return "—";
      return String(value);
    }

    function colorValue(color) {
      return COLOR_MAP[color] || "#7ec7ff";
    }

    function createColorChip(color) {
      const chip = document.createElement("span");
      chip.className = "chip";
      const swatch = document.createElement("span");
      swatch.className = "color-swatch";
      swatch.style.background = colorValue(color);
      chip.appendChild(swatch);
      chip.appendChild(document.createTextNode(color));
      return chip;
    }

    function createColorRatioBar(profile) {
      const wrap = document.createElement("div");
      wrap.className = "color-ratio";

      if (!profile || !profile.length) {
        const empty = document.createElement("div");
        empty.className = "tiny";
        empty.textContent = "No color data";
        wrap.appendChild(empty);
        return wrap;
      }

      const track = document.createElement("div");
      track.className = "color-ratio-track";
      track.title = profile.map(function(segment) {
        return segment.color + " " + segment.percent + "%";
      }).join(" / ");

      profile.forEach(function(segment) {
        const item = document.createElement("div");
        item.className = "color-ratio-segment";
        item.style.flex = String(segment.weight) + " 1 0";
        item.style.background = colorValue(segment.color);
        track.appendChild(item);
      });

      const labels = document.createElement("div");
      labels.className = "color-ratio-labels";
      profile.slice(0, 3).forEach(function(segment) {
        const label = document.createElement("span");
        label.className = "color-ratio-label";
        const swatch = document.createElement("span");
        swatch.className = "color-swatch";
        swatch.style.background = colorValue(segment.color);
        label.appendChild(swatch);
        label.appendChild(document.createTextNode(segment.color + " " + segment.percent + "%"));
        labels.appendChild(label);
      });

      if (profile.length > 3) {
        labels.appendChild(document.createTextNode("+" + (profile.length - 3) + " more"));
      }

      wrap.appendChild(track);
      wrap.appendChild(labels);
      return wrap;
    }

    function createDetailsColorStrip(colors) {
      const strip = document.createElement("div");
      strip.className = "details-color-strip";
      const cardColors = colors && colors.length ? colors : ["Unknown"];

      cardColors.forEach(function(color) {
        const segment = document.createElement("div");
        segment.className = "details-color-segment";
        segment.style.background = colorValue(color);
        segment.textContent = color;
        strip.appendChild(segment);
      });

      return strip;
    }

    function createColorDot(color) {
      const dot = document.createElement("span");
      dot.className = "details-color-dot";
      dot.style.background = colorValue(color);
      dot.title = color;
      return dot;
    }

    function appendMetric(parent, value) {
      const metric = document.createElement("span");
      metric.className = "details-info-metric";
      metric.textContent = formatNumber(value);
      parent.appendChild(metric);
    }

    function appendPlainTextWithBreaks(parent, text) {
      String(text || "").split("\\n").forEach(function(line, index, lines) {
        if (line) parent.appendChild(document.createTextNode(line));
        if (index !== lines.length - 1) parent.appendChild(document.createElement("br"));
      });
    }

    const DETAIL_TIMINGS = {
      "On Play": true,
      "When Digivolving": true,
      "When Attacking": true,
      "When Linking": true,
      "End of Attack": true,
      "On Deletion": true,
      "Your Turn": true,
      "All Turns": true,
      "Opponent's Turn": true,
      "End of Opponent's Turn": true,
      "Start of Your Turn": true,
      "End of Your Turn": true,
      "Security": true,
      "Main": true,
      "Start of Your Main Phase": true,
      "Start of Opponent's Main Phase": true,
      "Counter": true,
      "End of All Turns": true
    };
    const DETAIL_RECURRING_TIMINGS = {
      "Once Per Turn": true,
      "Twice Per Turn": true,
      "Hand": true,
      "Trash": true,
      "Breeding": true
    };
    const DETAIL_SPECIAL_EFFECTS = {
      "DigiXros -1": true,
      "DigiXros -2": true,
      "DigiXros -3": true,
      "DigiXros -4": true,
      "Burst Digivolve": true,
      "DNA Digivolve": true,
      "Link": true
    };
    const DETAIL_EVOLUTION_EFFECTS = {
      "Digivolve": true,
      "Arts Digivolve": true,
      "App Fusion": true
    };

    function isTraitToken(word) {
      if (TRAIT_WORDS[word]) return true;
      return /^(Lv\\.\\d+|\\d{3,6}|[A-Z][A-Z0-9 ./'-]{2,})$$/.test(word);
    }

    function keywordTokenClass(word, isAngle) {
      if (isAngle) return "effect-token angle";
      if (DETAIL_RECURRING_TIMINGS[word]) return "effect-token recurring";
      if (DETAIL_TIMINGS[word]) return "effect-token timing";
      if (word === "Rule") return "effect-token rule";
      if (DETAIL_SPECIAL_EFFECTS[word]) return "effect-token special";
      if (DETAIL_EVOLUTION_EFFECTS[word] || word.indexOf("Assembly") >= 0) return "effect-token evolution";
      if (isTraitToken(word)) return "effect-token trait";
      return "effect-token name";
    }

    function appendHighlightedText(parent, text) {
      const rawText = String(text || "");
      const regex = /(\\[([^\\]]+)\\]|＜([^＞]+)＞)/g;
      let match;
      let lastIndex = 0;

      while ((match = regex.exec(rawText)) !== null) {
        appendPlainTextWithBreaks(parent, rawText.slice(lastIndex, match.index));
        const isAngle = Boolean(match[3]);
        const word = match[2] || match[3] || "";
        const token = document.createElement("span");
        token.className = keywordTokenClass(word, isAngle);
        token.textContent = word;
        parent.appendChild(token);
        lastIndex = regex.lastIndex;
      }

      appendPlainTextWithBreaks(parent, rawText.slice(lastIndex));
    }

    function createDetailsStatsPanel(card) {
      const wrap = document.createElement("div");
      wrap.className = "details-info-card";

      const top = document.createElement("div");
      top.className = "details-info-row";
      if (card.level !== null && card.level !== undefined) {
        const level = document.createElement("span");
        level.appendChild(document.createTextNode("Lv."));
        appendMetric(level, card.level);
        top.appendChild(level);
      }
      if (card.stage) {
        const stage = document.createElement("span");
        stage.appendChild(document.createTextNode("Stage: "));
        appendMetric(stage, card.stage);
        top.appendChild(stage);
      }
      if (card.dp !== null && card.dp !== undefined) {
        const dp = document.createElement("span");
        dp.appendChild(document.createTextNode("DP: "));
        appendMetric(dp, card.dp);
        top.appendChild(dp);
      }
      if (top.children.length) wrap.appendChild(top);

      const bottom = document.createElement("div");
      bottom.className = "details-info-row";
      if (card.type !== "Digi-Egg" && card.playCost !== null && card.playCost !== undefined) {
        const play = document.createElement("span");
        play.appendChild(document.createTextNode(card.type === "Option" ? "Use: " : "Play: "));
        appendMetric(play, card.playCost);
        bottom.appendChild(play);
      }

      const conditions = card.digivolveConditions || [];
      if (conditions.length) {
        const digivolve = document.createElement("span");
        digivolve.appendChild(document.createTextNode("Digivolve: "));
        appendMetric(digivolve, conditions[0].cost);
        digivolve.appendChild(document.createTextNode(" from "));
        conditions.forEach(function(condition, index) {
          if (index > 0) digivolve.appendChild(document.createTextNode(" | "));
          digivolve.appendChild(createColorDot(condition.color));
        });
        digivolve.appendChild(document.createTextNode(" Lv."));
        appendMetric(digivolve, conditions[0].level);
        bottom.appendChild(digivolve);
      } else if (card.digivolveCosts && card.digivolveCosts.length) {
        const evo = document.createElement("span");
        evo.appendChild(document.createTextNode("Digivolve: "));
        appendMetric(evo, card.digivolveCosts.join("/"));
        bottom.appendChild(evo);
      }

      if (bottom.children.length) wrap.appendChild(bottom);
      return wrap;
    }

    function deckMatchesQuery(deck, query) {
      if (!query) return true;
      return deck.searchBlob.includes(query);
    }

    function getFilteredDecks() {
      const query = state.deckQuery.trim().toLowerCase();
      return APP_DATA.decks.filter(function(deck) {
        return deckMatchesQuery(deck, query);
      });
    }

    function getSelectedDeck() {
      if (!APP_DATA.decks.length) return null;
      let selected = APP_DATA.decks.find(function(deck) { return deck.id === state.selectedDeckId; });
      if (!selected) {
        selected = APP_DATA.decks[0];
        state.selectedDeckId = selected.id;
      }
      return selected;
    }

    function getFilteredCards(deck) {
      const query = state.cardQuery.trim().toLowerCase();
      if (!query) return deck.cards;
      return deck.cards.filter(function(card) {
        return card.searchBlob.includes(query);
      });
    }

    function normalizeFilterText(value) {
      return String(value || "").trim().toLowerCase();
    }

    function numberOrNull(value) {
      if (value === null || value === undefined || value === "") return null;
      const parsed = Number(value);
      return Number.isNaN(parsed) ? null : parsed;
    }

    function readCatalogFilters() {
      return {
        name: normalizeFilterText(filterEls.name.value),
        number: normalizeFilterText(filterEls.number.value),
        dp: numberOrNull(filterEls.dp.value),
        colors: [filterEls.color1.value, filterEls.color2.value, filterEls.color3.value].filter(Boolean),
        type: filterEls.type.value,
        attribute: filterEls.attribute.value,
        playCost: numberOrNull(filterEls.playCost.value),
        digivolutionCost: numberOrNull(filterEls.digivolutionCost.value),
        level: numberOrNull(filterEls.level.value),
        stage: filterEls.stage.value,
        trait: normalizeFilterText(filterEls.trait.value),
        illustrator: normalizeFilterText(filterEls.illustrator.value),
        effect: normalizeFilterText(filterEls.effect.value),
        ace: filterEls.ace.checked,
        altArts: filterEls.altArts.checked
      };
    }

    function hasActiveCatalogFilters(filters) {
      return Boolean(
        filters.name ||
        filters.number ||
        filters.dp !== null ||
        filters.colors.length ||
        filters.type ||
        filters.attribute ||
        filters.playCost !== null ||
        filters.digivolutionCost !== null ||
        filters.level !== null ||
        filters.stage ||
        filters.trait ||
        filters.illustrator ||
        filters.effect ||
        filters.ace ||
        !filters.altArts
      );
    }

    function cardMatchesCatalogFilters(card, filters) {
      if (filters.name && !String(card.name || "").toLowerCase().includes(filters.name)) return false;
      if (
        filters.number &&
        !String(card.cardNumber || "").toLowerCase().includes(filters.number) &&
        !String(card.code || "").toLowerCase().includes(filters.number)
      ) {
        return false;
      }
      if (filters.dp !== null && card.dp !== filters.dp) return false;
      if (filters.colors.some(function(color) { return !(card.colors || []).includes(color); })) return false;
      if (filters.type && card.type !== filters.type) return false;
      if (filters.attribute && card.attribute !== filters.attribute) return false;
      if (filters.playCost !== null && card.playCost !== filters.playCost) return false;
      if (
        filters.digivolutionCost !== null &&
        !(card.digivolveCosts || []).includes(filters.digivolutionCost)
      ) {
        return false;
      }
      if (filters.level !== null && card.level !== filters.level) return false;
      if (filters.stage && card.stage !== filters.stage) return false;
      if (filters.trait && !String((card.digitype || []).join(" ")).toLowerCase().includes(filters.trait)) return false;
      if (filters.illustrator && !String(card.illustrator || "").toLowerCase().includes(filters.illustrator)) return false;
      if (filters.effect && !String(card.effectText || "").toLowerCase().includes(filters.effect)) return false;
      if (filters.ace && !card.hasAce) return false;
      if (!filters.altArts && card.isAltArt) return false;
      return true;
    }

    function getFilteredCatalogCards() {
      const filters = readCatalogFilters();
      if (!hasActiveCatalogFilters(filters)) return [];
      return APP_DATA.cardCatalog.filter(function(card) {
        return cardMatchesCatalogFilters(card, filters);
      }).slice(0, 120);
    }

    function getDeckCount(deck, code) {
      const card = deck.cards.find(function(item) { return item.code === code; });
      return card ? card.count : 0;
    }

    function normalizeCardNumberKey(value) {
      return String(value || "").trim().toUpperCase().split("_", 1)[0];
    }

    function cardNumberKey(cardOrNumber) {
      if (typeof cardOrNumber === "string") return normalizeCardNumberKey(cardOrNumber);
      const value = cardOrNumber.cardNumber || cardOrNumber.code || "";
      return normalizeCardNumberKey(value);
    }

    function getDeckCardNumberCount(deck, cardOrNumber) {
      const numberKey = cardNumberKey(cardOrNumber);
      return deck.cards.reduce(function(total, item) {
        return cardNumberKey(item) === numberKey ? total + (Number(item.count) || 0) : total;
      }, 0);
    }

    function getCardCopyLimit(card) {
      if (Number.isFinite(Number(card.copyLimit))) return Number(card.copyLimit);
      const restriction = String(card.restriction || "").toLowerCase();
      if (restriction.includes("banned")) return 0;
      if (restriction.includes("restricted to 1")) return 1;
      if (String(card.effectText || "").toLowerCase().includes("include up to 50 copies")) return 50;
      return 4;
    }

    function getDeckCardNumberCopyLimit(deck, card) {
      const numberKey = cardNumberKey(card);
      return deck.cards.reduce(function(limit, item) {
        if (cardNumberKey(item) !== numberKey) return limit;
        return Math.min(limit, getCardCopyLimit(item));
      }, getCardCopyLimit(card));
    }

    function getCardLimitLabel(card) {
      const limit = getCardCopyLimit(card);
      if (limit === 0) return "Banned";
      if (limit === 1) return "Restricted x1";
      if (limit === 50) return "Rule x50";
      return "Limit x" + limit;
    }

    function getDeckStats(deck) {
      const seenCardNumbers = {};
      const stats = deck.cards.reduce(function(result, card) {
        const count = Number(card.count) || 0;
        const numberKey = cardNumberKey(card);
        if (numberKey) seenCardNumbers[numberKey] = true;
        if (card.type === "Digi-Egg") {
          result.eggCount += count;
        } else {
          result.mainCount += count;
        }
        result.totalCount += count;
        return result;
      }, { mainCount: 0, eggCount: 0, totalCount: 0, uniqueCount: 0 });
      stats.uniqueCount = Object.keys(seenCardNumbers).length;
      return stats;
    }

    function getColorProfile(cards) {
      const weights = {};
      cards.forEach(function(card) {
        const colors = card.colors || [];
        if (!colors.length) return;
        const share = (Number(card.count) || 0) / colors.length;
        colors.forEach(function(color) {
          weights[color] = (weights[color] || 0) + share;
        });
      });

      const total = Object.keys(weights).reduce(function(sum, color) {
        return sum + weights[color];
      }, 0);
      if (!total) return [];

      return Object.keys(weights).map(function(color) {
        return {
          color: color,
          weight: weights[color],
          percent: Math.round((weights[color] / total) * 100)
        };
      }).sort(function(a, b) {
        if (b.weight !== a.weight) return b.weight - a.weight;
        return a.color.localeCompare(b.color);
      });
    }

    function canAddCard(deck, card) {
      const stats = getDeckStats(deck);
      const currentCount = getDeckCardNumberCount(deck, card);
      const copyLimit = getDeckCardNumberCopyLimit(deck, card);
      if (copyLimit <= 0 || currentCount >= copyLimit) return false;
      if (card.type === "Digi-Egg") {
        return stats.eggCount < 5;
      }
      return stats.mainCount < 50;
    }

    function sortDeckCards(deck) {
      const typeOrder = { "Digi-Egg": 0, "Option": 1, "Tamer": 2, "Digimon": 3 };
      deck.cards.sort(function(a, b) {
        const typeA = Object.prototype.hasOwnProperty.call(typeOrder, a.type) ? typeOrder[a.type] : 9;
        const typeB = Object.prototype.hasOwnProperty.call(typeOrder, b.type) ? typeOrder[b.type] : 9;
        if (typeA !== typeB) return typeA - typeB;
        const levelA = a.level !== null && a.level !== undefined ? a.level : -1;
        const levelB = b.level !== null && b.level !== undefined ? b.level : -1;
        if (levelA !== levelB) return levelA - levelB;
        const numberCompare = String(a.cardNumber || a.code).localeCompare(String(b.cardNumber || b.code));
        if (numberCompare !== 0) return numberCompare;
        return String(a.code || "").localeCompare(String(b.code || ""));
      });
    }

    function cloneCardForDeck(card) {
      return {
        count: 1,
        name: card.name,
        printedName: card.printedName || card.name,
        code: card.code,
        cardNumber: card.cardNumber,
        imageUrl: card.imageUrl,
        type: card.type,
        colors: card.colors || [],
        attribute: card.attribute,
        stage: card.stage,
        digitype: card.digitype || [],
        dp: card.dp,
        playCost: card.playCost,
        digivolveCosts: card.digivolveCosts || [],
        digivolveConditions: card.digivolveConditions || [],
        level: card.level,
        illustrator: card.illustrator,
        hasAce: card.hasAce,
        isAltArt: card.isAltArt,
        restriction: card.restriction || "Unrestricted",
        copyLimit: getCardCopyLimit(card),
        effectText: card.effectText || "",
        effectSections: card.effectSections || [],
        searchBlob: card.searchBlob
      };
    }

    function chooseDeckCoverCard(cards) {
      if (!cards.length) return null;
      return cards.reduce(function(best, card) {
        if (!best) return card;
        const typeWeight = { "Digi-Egg": 1, "Option": 2, "Tamer": 2, "Digimon": 3 };
        const bestWeight = typeWeight[best.type] || 0;
        const cardWeight = typeWeight[card.type] || 0;
        if (cardWeight !== bestWeight) return cardWeight > bestWeight ? card : best;
        const bestLevel = best.level !== null && best.level !== undefined ? best.level : 0;
        const cardLevel = card.level !== null && card.level !== undefined ? card.level : 0;
        if (cardLevel !== bestLevel) return cardLevel > bestLevel ? card : best;
        return (Number(card.count) || 0) > (Number(best.count) || 0) ? card : best;
      }, null);
    }

    function refreshDeckComputedFields(deck) {
      const stats = getDeckStats(deck);
      const colors = {};
      deck.cards.forEach(function(card) {
        (card.colors || []).forEach(function(color) { colors[color] = true; });
      });
      const cover = chooseDeckCoverCard(deck.cards);

      deck.mainCount = stats.mainCount;
      deck.eggCount = stats.eggCount;
      deck.totalCount = stats.totalCount;
      deck.uniqueCount = stats.uniqueCount;
      deck.colors = Object.keys(colors);
      deck.colorProfile = getColorProfile(deck.cards);
      deck.coverImageUrl = cover ? cover.imageUrl : null;
      deck.exportText = buildDeckExportText(deck);
      deck.searchBlob = [deck.name].concat(deck.cards.map(function(card) {
        return [card.name, card.printedName, card.code, card.cardNumber].filter(Boolean).join(" ");
      })).join(" ").toLowerCase();
    }

    function addCardToDeck(deck, card) {
      if (!canAddCard(deck, card)) return;
      const existing = deck.cards.find(function(item) { return item.code === card.code; });
      if (existing) {
        existing.count += 1;
      } else {
        deck.cards.push(cloneCardForDeck(card));
      }
      sortDeckCards(deck);
      refreshDeckComputedFields(deck);
      resetTestHandForDeck(deck);
      state.selectedCardCode = card.code;
      renderEditor();
    }

    function removeCardFromDeck(deck, card) {
      const index = deck.cards.findIndex(function(item) { return item.code === card.code; });
      if (index < 0) return;
      deck.cards[index].count -= 1;
      if (deck.cards[index].count <= 0) {
        deck.cards.splice(index, 1);
      }
      if (!deck.cards.some(function(item) { return item.code === state.selectedCardCode; })) {
        state.selectedCardCode = deck.cards.length ? deck.cards[0].code : null;
      }
      refreshDeckComputedFields(deck);
      resetTestHandForDeck(deck);
      renderEditor();
    }

    function buildDeckExportText(deck) {
      const body = deck.cards.map(function(card) {
        return card.count + " " + (card.printedName || card.name) + " " + card.code;
      }).join("\\n");
      return [
        "Name: " + deck.name,
        "Key Card: " + (deck.keyCard || "-1"),
        "Sort Index: " + (deck.sortIndex || "0"),
        "",
        "// DeckList",
        "",
        body
      ].join("\\n");
    }

    function isDeckDirty(deck) {
      if (!deck) return false;
      return buildDeckExportText(deck) !== (deck.savedExportText || "");
    }

    function hasUnsavedChanges() {
      return APP_DATA.decks.some(function(deck) { return isDeckDirty(deck); });
    }

    function confirmDiscardUnsaved(deck) {
      if (!isDeckDirty(deck)) return true;
      return window.confirm("This deck has unsaved changes. Discard them and continue?");
    }

    function applySavedDeck(deck, savedDeck) {
      Object.keys(savedDeck).forEach(function(key) {
        deck[key] = savedDeck[key];
      });
      deck.savedExportText = savedDeck.exportText || buildDeckExportText(deck);
    }

    function needsDeckBrowserServer(actionName) {
      if (window.location.protocol !== "file:") return false;
      window.alert(actionName + " needs the local deck browser server. Open it with Open Deck Browser.command.");
      return true;
    }

    function sortDeckLibrary() {
      APP_DATA.decks.sort(function(a, b) {
        return String(a.name || a.fileName).localeCompare(String(b.name || b.fileName));
      });
    }

    function prepareSavedDeck(deck) {
      deck.savedExportText = deck.exportText || buildDeckExportText(deck);
      return deck;
    }

    function removeDeckFromLibrary(deck) {
      const index = APP_DATA.decks.findIndex(function(item) { return item === deck || item.id === deck.id; });
      if (index >= 0) APP_DATA.decks.splice(index, 1);
      if (state.selectedDeckId === deck.id) {
        state.selectedDeckId = APP_DATA.decks.length ? APP_DATA.decks[0].id : null;
      }
    }

    function validateCards(cards) {
      const errors = [];
      const warnings = [];
      const stats = getDeckStats({ cards: cards });

      if (stats.mainCount > 50) {
        errors.push("Main deck has " + stats.mainCount + " cards. Limit is 50.");
      } else if (stats.mainCount !== 50) {
        warnings.push("Main deck has " + stats.mainCount + " cards. Target is 50.");
      }

      if (stats.eggCount > 5) {
        errors.push("Egg deck has " + stats.eggCount + " cards. Limit is 5.");
      }

      const grouped = {};
      const unknownCards = [];
      cards.forEach(function(card) {
        const key = cardNumberKey(card);
        if (!grouped[key]) grouped[key] = { count: 0, card: card, limit: getCardCopyLimit(card) };
        grouped[key].count += Number(card.count) || 0;
        grouped[key].limit = Math.min(grouped[key].limit, getCardCopyLimit(card));

        if (!card.type) {
          unknownCards.push(card.code);
        }
      });

      Object.keys(grouped).forEach(function(key) {
        const group = grouped[key];
        const limit = group.limit;
        if (limit === 0 && group.count > 0) {
          errors.push((group.card.cardNumber || group.card.code) + " is banned.");
        } else if (group.count > limit) {
          errors.push(
            (group.card.cardNumber || group.card.code) +
            " has " + group.count + " copies. Limit is " + limit + "."
          );
        }
      });

      if (unknownCards.length) {
        warnings.push("Missing metadata: " + unknownCards.slice(0, 8).join(", "));
      }

      return { errors: errors, warnings: warnings, stats: stats };
    }

    function validateDeck(deck) {
      return validateCards(deck.cards);
    }

    function renderDirtyStatus(deck) {
      const dirty = isDeckDirty(deck);
      dirtyStatusEl.className = "dirty-status" + (dirty ? " dirty" : " hidden");
      dirtyStatusEl.textContent = dirty ? "Unsaved changes" : "";
      saveChangesBtn.disabled = !dirty;
    }

    function renderValidationPanel(deck) {
      const validation = validateDeck(deck);
      validationPanelEl.className = "validation-panel" + (validation.errors.length ? " error" : " ok");
      validationPanelEl.innerHTML = "";

      if (!validation.errors.length && !validation.warnings.length) {
        validationPanelEl.className = "validation-panel ok compact";
        validationPanelEl.textContent = "Valid · " + validation.stats.mainCount + " main / " + validation.stats.eggCount + " egg";
        return;
      }

      const title = document.createElement("h3");
      title.className = "validation-title";
      title.textContent = validation.errors.length ? "Deck Validation: Action Needed" : "Deck Validation";
      validationPanelEl.appendChild(title);

      const list = document.createElement("ul");
      list.className = "validation-list";

      validation.errors.forEach(function(message) {
        const item = document.createElement("li");
        item.className = "error";
        item.textContent = message;
        list.appendChild(item);
      });

      validation.warnings.forEach(function(message) {
        const item = document.createElement("li");
        item.className = "warning";
        item.textContent = message;
        list.appendChild(item);
      });

      validationPanelEl.appendChild(list);
    }

    const TESTER_FIELD_COUNT = 13;

    function createEmptyTesterFields() {
      return Array.from({ length: TESTER_FIELD_COUNT }, function() { return []; });
    }

    function resetTestHand() {
      state.testHand.visible = false;
      state.testHand.deckId = null;
      state.testHand.nextId = 1;
      state.testHand.stack = [];
      state.testHand.eggDeck = [];
      state.testHand.hand = [];
      state.testHand.security = [];
      state.testHand.revealedSecurity = [];
      state.testHand.reveal = [];
      state.testHand.breeding = [];
      state.testHand.fields = createEmptyTesterFields();
      state.testHand.trash = [];
      state.testHand.memory = 0;
      state.testHand.showSecurity = false;
      state.testHand.showSecurityPanel = false;
      state.testHand.showRevealPanel = false;
      state.testHand.handSort = "";
      state.testHand.stackViewer = null;
      state.testHand.log = [];
      state.testHand.openDrawer = "trash";
    }

    function resetTestHandForDeck(deck) {
      if (state.testHand.deckId === deck.id) resetTestHand();
    }

    function expandedDeckCards(deck, includeEggs) {
      const pool = [];
      deck.cards.forEach(function(card) {
        const isEgg = card.type === "Digi-Egg";
        if (includeEggs !== isEgg) return;
        const count = Math.max(0, Number(card.count) || 0);
        for (let index = 0; index < count; index += 1) {
          pool.push(card);
        }
      });
      return pool;
    }

    function expandedMainDeckCards(deck) {
      return expandedDeckCards(deck, false);
    }

    function expandedEggDeckCards(deck) {
      return expandedDeckCards(deck, true);
    }

    function randomUnit() {
      if (window.crypto && window.crypto.getRandomValues) {
        const values = new Uint32Array(1);
        window.crypto.getRandomValues(values);
        return values[0] / 4294967296;
      }
      return Math.random();
    }

    function shuffledCards(cards) {
      const shuffled = cards.slice();
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(randomUnit() * (index + 1));
        const current = shuffled[index];
        shuffled[index] = shuffled[swapIndex];
        shuffled[swapIndex] = current;
      }
      return shuffled;
    }

    function createTesterInstance(card, faceUp) {
      return {
        uid: "test-card-" + state.testHand.nextId++,
        card: card,
        faceUp: faceUp !== false,
        suspended: false,
        modifiers: { plusDp: 0, plusSecurity: 0, marked: false }
      };
    }

    function getTesterCard(instance) {
      return instance && instance.card ? instance.card : instance;
    }

    function setTesterFace(instance, faceUp) {
      if (instance && instance.card) instance.faceUp = !!faceUp;
      return instance;
    }

    function hideTesterContextMenu() {
      testerContextMenuEl.classList.add("hidden");
      testerContextMenuEl.innerHTML = "";
    }

    function showTesterContextMenu(event, title, actions) {
      event.preventDefault();
      event.stopPropagation();
      testerContextMenuEl.innerHTML = "";
      const header = document.createElement("div");
      header.className = "tester-context-title";
      header.textContent = title || "Card actions";
      testerContextMenuEl.appendChild(header);

      actions.forEach(function(action) {
        if (!action) return;
        if (action.separator) {
          const separator = document.createElement("div");
          separator.className = "tester-context-separator";
          testerContextMenuEl.appendChild(separator);
          return;
        }
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = action.label;
        button.addEventListener("click", function(clickEvent) {
          clickEvent.stopPropagation();
          hideTesterContextMenu();
          action.onClick();
        });
        testerContextMenuEl.appendChild(button);
      });

      testerContextMenuEl.classList.remove("hidden");
      const menuRect = testerContextMenuEl.getBoundingClientRect();
      const left = Math.min(event.clientX, window.innerWidth - menuRect.width - 8);
      const top = Math.min(event.clientY, window.innerHeight - menuRect.height - 8);
      testerContextMenuEl.style.left = Math.max(8, left) + "px";
      testerContextMenuEl.style.top = Math.max(8, top) + "px";
    }

    function testerCardActions(deck, ref, options) {
      if (!deck || !ref) return [];
      const opts = options || {};
      const actions = [];
      const sourceZone = ref ? ref.zone : "";
      const source = drawerSource(sourceZone === "field" ? "field:" + ref.fieldIndex : sourceZone);
      const sourceCards = source.cards || [];
      actions.push({ label: opts.faceUp === false ? "Show card" : "Hide / flip card", onClick: function() { flipTesterCard(deck, ref); } });
      if (sourceCards.length > 1 || sourceZone === "stack" || sourceZone === "eggDeck" || sourceZone === "security" || sourceZone === "trash") {
        actions.push({ label: "Show stack", onClick: function() { openTesterStackViewer(deck, sourceZone === "field" ? "field:" + ref.fieldIndex : sourceZone); } });
      }
      actions.push({ separator: true });
      if (sourceZone !== "hand") {
        actions.push({ label: "Move to hand", onClick: function() { moveTesterCard(deck, ref, { zone: "hand" }); } });
      }
      if (sourceZone !== "field") {
        actions.push({ label: "Play to empty battle area", onClick: function() { moveTesterCard(deck, ref, { zone: "field", fieldIndex: firstEmptyTesterField(), mode: "top" }); } });
      }
      if (sourceZone !== "breeding") {
        actions.push({ label: "Move to breeding", onClick: function() { moveTesterCard(deck, ref, { zone: "breeding" }); } });
      }
      if (sourceZone !== "reveal" && sourceZone !== "revealedSecurity") {
        actions.push({ label: "Move to reveal", onClick: function() { moveTesterCard(deck, ref, { zone: "reveal" }); } });
      }
      if (sourceZone !== "trash") {
        actions.push({ label: "Move to trash", onClick: function() { moveTesterCard(deck, ref, { zone: "trash" }); } });
      }
      actions.push({ separator: true });
      actions.push({ label: "Put on top of deck", onClick: function() { moveTesterCard(deck, ref, { zone: "stack", position: "top" }); } });
      actions.push({ label: "Put on bottom of deck", onClick: function() { moveTesterCard(deck, ref, { zone: "stack", position: "bottom" }); } });
      actions.push({ separator: true });
      actions.push({ label: "Security top, face down", onClick: function() { moveTesterCard(deck, ref, { zone: "security", position: "top", faceUp: false }); } });
      actions.push({ label: "Security bottom, face down", onClick: function() { moveTesterCard(deck, ref, { zone: "security", position: "bottom", faceUp: false }); } });
      actions.push({ label: "Security top, face up", onClick: function() { moveTesterCard(deck, ref, { zone: "security", position: "top", faceUp: true }); } });
      actions.push({ label: "Security bottom, face up", onClick: function() { moveTesterCard(deck, ref, { zone: "security", position: "bottom", faceUp: true }); } });
      if (opts.stackTop && sourceZone === "field") {
        actions.push({ separator: true });
        actions.push({ label: opts.suspended ? "Unsuspend stack top" : "Suspend stack top", onClick: function() { toggleTesterSuspend(deck, ref.fieldIndex); } });
      }
      actions.push({ separator: true });
      actions.push({ label: "Mark / unmark", onClick: function() {
        const sourceArray = getTesterSourceArray(ref);
        const instance = sourceArray && sourceArray[ref.index];
        modifyTesterCard(deck, ref, { marked: !(instance && instance.modifiers && instance.modifiers.marked) });
      } });
      actions.push({ label: "+1000 DP", onClick: function() {
        const sourceArray = getTesterSourceArray(ref);
        const instance = sourceArray && sourceArray[ref.index];
        const current = instance && instance.modifiers ? Number(instance.modifiers.plusDp) || 0 : 0;
        modifyTesterCard(deck, ref, { plusDp: current + 1000 });
      } });
      actions.push({ label: "-1000 DP", onClick: function() {
        const sourceArray = getTesterSourceArray(ref);
        const instance = sourceArray && sourceArray[ref.index];
        const current = instance && instance.modifiers ? Number(instance.modifiers.plusDp) || 0 : 0;
        modifyTesterCard(deck, ref, { plusDp: current - 1000 });
      } });
      actions.push({ label: "+1 security attack", onClick: function() {
        const sourceArray = getTesterSourceArray(ref);
        const instance = sourceArray && sourceArray[ref.index];
        const current = instance && instance.modifiers ? Number(instance.modifiers.plusSecurity) || 0 : 0;
        modifyTesterCard(deck, ref, { plusSecurity: current + 1 });
      } });
      actions.push({ label: "Clear markers", onClick: function() { modifyTesterCard(deck, ref, { plusDp: 0, plusSecurity: 0, marked: false }); } });
      return actions;
    }

    function setupTestHand(deck) {
      const mainPool = expandedMainDeckCards(deck);
      if (mainPool.length < 5) {
        window.alert("This deck needs at least 5 non-egg cards to test a hand.");
        return false;
      }

      state.testHand.nextId = 1;
      const shuffledMain = shuffledCards(mainPool).map(function(card) {
        return createTesterInstance(card, false);
      });
      const shuffledEggs = shuffledCards(expandedEggDeckCards(deck)).map(function(card) {
        return createTesterInstance(card, false);
      });

      state.testHand.visible = true;
      state.testHand.deckId = deck.id;
      state.testHand.security = shuffledMain.splice(0, Math.min(5, shuffledMain.length));
      state.testHand.hand = shuffledMain.splice(0, Math.min(5, shuffledMain.length)).map(function(instance) {
        return setTesterFace(instance, true);
      });
      state.testHand.stack = shuffledMain;
      state.testHand.eggDeck = shuffledEggs;
      state.testHand.revealedSecurity = [];
      state.testHand.reveal = [];
      state.testHand.breeding = [];
      state.testHand.fields = createEmptyTesterFields();
      state.testHand.trash = [];
      state.testHand.memory = 0;
      state.testHand.showSecurity = false;
      state.testHand.showSecurityPanel = false;
      state.testHand.showRevealPanel = false;
      state.testHand.handSort = "";
      state.testHand.openDrawer = "trash";
      state.testHand.stackViewer = null;
      state.testHand.log = ["Started a new test hand."];
      return true;
    }

    function startTestHand(deck) {
      if (!setupTestHand(deck)) return;
      if (state.view === "tester") {
        renderTester(deck);
      } else {
        renderTestHand(deck);
      }
    }

    function ensureTestHand(deck) {
      if (!state.testHand.visible || state.testHand.deckId !== deck.id) {
        return setupTestHand(deck);
      }
      if (!Array.isArray(state.testHand.fields) || state.testHand.fields.length !== TESTER_FIELD_COUNT) {
        state.testHand.fields = createEmptyTesterFields();
      }
      return true;
    }

    function renderAfterTesterMove(deck) {
      if (state.view === "tester") {
        renderTester(deck);
      } else {
        renderTestHand(deck);
      }
    }

    function testerZoneLabel(zone) {
      if (!zone) return "Zone";
      if (zone === "stack") return "Deck";
      if (zone === "eggDeck") return "Egg Deck";
      if (zone === "security") return "Security";
      if (zone === "revealedSecurity") return "Security Revealed";
      if (zone === "reveal") return "Reveal";
      if (zone === "trash") return "Trash";
      if (zone === "hand") return "Hand";
      if (zone === "breeding") return "Breeding";
      if (zone === "field") return "Battle Area";
      return String(zone);
    }

    function testerTargetLabel(target) {
      if (!target) return "Zone";
      if (target.zone === "field") return "Battle " + (Number(target.fieldIndex || 0) + 1);
      if (target.zone === "stack") return target.position === "bottom" ? "Bottom Deck" : "Top Deck";
      if (target.zone === "security") return (target.position === "bottom" ? "Bottom Security" : "Top Security") + (target.faceUp ? " face up" : " face down");
      return testerZoneLabel(target.zone);
    }

    function logTesterAction(message) {
      if (!message) return;
      state.testHand.log.unshift(message);
      state.testHand.log = state.testHand.log.slice(0, 80);
    }

    function selectTesterCard(card) {
      if (!card) return;
      state.selectedCardCode = card.code;
      if (state.view === "tester") {
        const currentDeck = getSelectedDeck();
        if (currentDeck) renderTesterCardDetails(currentDeck);
      }
    }

    function drawTestCard(deck) {
      if (!ensureTestHand(deck)) return;
      const instance = state.testHand.stack.shift();
      if (!instance) return;
      state.testHand.hand.push(setTesterFace(instance, true));
      logTesterAction("Drew " + getTesterCard(instance).name + ".");
      renderAfterTesterMove(deck);
    }

    function revealTopDeck(deck) {
      if (!ensureTestHand(deck)) return;
      const instance = state.testHand.stack.shift();
      if (!instance) return;
      state.testHand.reveal.push(setTesterFace(instance, true));
      state.testHand.openDrawer = "reveal";
      state.testHand.showRevealPanel = true;
      logTesterAction("Revealed " + getTesterCard(instance).name + " from deck.");
      renderTester(deck);
    }

    function trashTopDeck(deck) {
      if (!ensureTestHand(deck)) return;
      const instance = state.testHand.stack.shift();
      if (!instance) return;
      state.testHand.trash.push(setTesterFace(instance, true));
      state.testHand.openDrawer = "trash";
      logTesterAction("Milled " + getTesterCard(instance).name + ".");
      renderTester(deck);
    }

    function hatchEgg(deck) {
      if (!ensureTestHand(deck)) return;
      const instance = state.testHand.eggDeck.shift();
      if (!instance) return;
      state.testHand.breeding.push(setTesterFace(instance, true));
      state.testHand.openDrawer = "breeding";
      logTesterAction("Hatched " + getTesterCard(instance).name + ".");
      renderTester(deck);
    }

    function renderTestHand(deck) {
      testHandPanelEl.classList.add("hidden");
      testHandBtn.textContent = "Test Hand";
    }

    function openDeckTester(deck) {
      const currentDeck = getSelectedDeck();
      if (state.view === "editor" && currentDeck && currentDeck.id !== deck.id && !confirmDiscardUnsaved(currentDeck)) {
        return;
      }
      state.selectedDeckId = deck.id;
      state.selectedCardCode = deck.cards.length ? deck.cards[0].code : null;
      if (!setupTestHand(deck)) return;
      window.location.hash = "test/" + encodeURIComponent(deck.id);
      render();
    }

    function revealSecurityCard(deck) {
      if (!ensureTestHand(deck) || !state.testHand.security.length) return;
      const instance = state.testHand.security.shift();
      state.testHand.revealedSecurity.push(setTesterFace(instance, true));
      state.testHand.openDrawer = "revealedSecurity";
      state.testHand.showRevealPanel = true;
      logTesterAction("Revealed " + getTesterCard(instance).name + " from security.");
      renderTester(deck);
    }

    function revealAllSecurity(deck) {
      if (!ensureTestHand(deck) || !state.testHand.security.length) return;
      while (state.testHand.security.length) {
        state.testHand.revealedSecurity.push(setTesterFace(state.testHand.security.shift(), true));
      }
      state.testHand.openDrawer = "revealedSecurity";
      state.testHand.showRevealPanel = true;
      logTesterAction("Revealed all security.");
      renderTester(deck);
    }

    function moveSecurityEdge(deck, targetZone, bottomCard) {
      if (!ensureTestHand(deck) || !state.testHand.security.length) return;
      const index = bottomCard ? state.testHand.security.length - 1 : 0;
      moveTesterCard(deck, { zone: "security", index: index }, { zone: targetZone });
    }

    function shuffleTesterSecurity(deck) {
      if (!ensureTestHand(deck) || state.testHand.security.length < 2) return;
      state.testHand.security = shuffledCards(state.testHand.security);
      logTesterAction("Shuffled security.");
      renderTester(deck);
    }

    function firstEmptyTesterField() {
      for (let index = 0; index < state.testHand.fields.length; index += 1) {
        if (!state.testHand.fields[index].length) return index;
      }
      return 0;
    }

    function getTesterSourceArray(ref) {
      if (!ref) return null;
      if (ref.zone === "hand") return state.testHand.hand;
      if (ref.zone === "stack") return state.testHand.stack;
      if (ref.zone === "eggDeck") return state.testHand.eggDeck;
      if (ref.zone === "security") return state.testHand.security;
      if (ref.zone === "revealedSecurity") return state.testHand.revealedSecurity;
      if (ref.zone === "reveal") return state.testHand.reveal;
      if (ref.zone === "trash") return state.testHand.trash;
      if (ref.zone === "breeding") return state.testHand.breeding;
      if (ref.zone === "field") return state.testHand.fields[ref.fieldIndex] || null;
      return null;
    }

    function removeTesterInstance(ref) {
      const source = getTesterSourceArray(ref);
      if (!source || ref.index < 0 || ref.index >= source.length) return null;
      return source.splice(ref.index, 1)[0] || null;
    }

    function putTesterInstance(instance, target) {
      if (!instance || !target) return;
      if (target.zone === "hand") {
        state.testHand.hand.push(setTesterFace(instance, true));
      } else if (target.zone === "trash") {
        state.testHand.trash.push(setTesterFace(instance, true));
        state.testHand.openDrawer = "trash";
      } else if (target.zone === "reveal") {
        state.testHand.reveal.push(setTesterFace(instance, true));
        state.testHand.openDrawer = "reveal";
        state.testHand.showRevealPanel = true;
      } else if (target.zone === "security") {
        setTesterFace(instance, !!target.faceUp);
        if (target.position === "bottom") {
          state.testHand.security.push(instance);
        } else {
          state.testHand.security.unshift(instance);
        }
        state.testHand.showSecurityPanel = true;
      } else if (target.zone === "stack") {
        setTesterFace(instance, false);
        if (target.position === "bottom") {
          state.testHand.stack.push(instance);
        } else {
          state.testHand.stack.unshift(instance);
        }
      } else if (target.zone === "eggDeck") {
        setTesterFace(instance, false);
        if (target.position === "bottom") {
          state.testHand.eggDeck.push(instance);
        } else {
          state.testHand.eggDeck.unshift(instance);
        }
      } else if (target.zone === "breeding") {
        setTesterFace(instance, true);
        if (target.mode === "source" && state.testHand.breeding.length) {
          state.testHand.breeding.splice(Math.max(0, state.testHand.breeding.length - 1), 0, instance);
        } else {
          state.testHand.breeding.push(instance);
        }
        state.testHand.openDrawer = "breeding";
      } else if (target.zone === "field") {
        const targetStack = state.testHand.fields[target.fieldIndex] || state.testHand.fields[0];
        setTesterFace(instance, true);
        if (target.mode === "source" && targetStack.length) {
          targetStack.splice(Math.max(0, targetStack.length - 1), 0, instance);
        } else {
          targetStack.push(instance);
        }
        state.testHand.openDrawer = "field:" + target.fieldIndex;
      }
    }

    function isSameTesterSpot(ref, target) {
      if (!ref || !target) return false;
      if (ref.zone !== target.zone) return false;
      if (target.position || target.mode || target.faceUp !== undefined) return false;
      if (ref.zone === "field") return ref.fieldIndex === target.fieldIndex;
      return true;
    }

    function moveTesterCard(deck, ref, target) {
      if (!ensureTestHand(deck) || isSameTesterSpot(ref, target)) return;
      const instance = removeTesterInstance(ref);
      if (!instance) return;
      putTesterInstance(instance, target);
      const card = getTesterCard(instance);
      if (card) state.selectedCardCode = card.code;
      if (card) logTesterAction(card.name + ": " + testerZoneLabel(ref.zone) + " → " + testerTargetLabel(target) + ".");
      hideTesterContextMenu();
      renderTester(deck);
    }

    function moveTesterStack(deck, sourceRef, target) {
      if (!ensureTestHand(deck)) return;
      const source = getTesterSourceArray(sourceRef);
      if (!source || !source.length) return;
      const moving = source.splice(0, source.length);
      moving.forEach(function(instance) {
        putTesterInstance(instance, target);
      });
      logTesterAction("Moved stack from " + testerZoneLabel(sourceRef.zone) + " to " + testerTargetLabel(target) + ".");
      renderTester(deck);
    }

    function moveBreedingToBattle(deck) {
      if (!ensureTestHand(deck) || !state.testHand.breeding.length) return;
      const targetIndex = firstEmptyTesterField();
      moveTesterStack(deck, { zone: "breeding", index: 0 }, { zone: "field", fieldIndex: targetIndex, mode: "top" });
    }

    function toggleTesterSuspend(deck, fieldIndex) {
      if (!ensureTestHand(deck)) return;
      const stack = state.testHand.fields[fieldIndex];
      if (!stack || !stack.length) return;
      stack[stack.length - 1].suspended = !stack[stack.length - 1].suspended;
      logTesterAction((stack[stack.length - 1].suspended ? "Suspended " : "Unsuspended ") + getTesterCard(stack[stack.length - 1]).name + ".");
      renderTester(deck);
    }

    function unsuspendAllTesterCards(deck) {
      if (!ensureTestHand(deck)) return;
      state.testHand.fields.forEach(function(stack) {
        stack.forEach(function(instance) { instance.suspended = false; });
      });
      state.testHand.breeding.forEach(function(instance) { instance.suspended = false; });
      logTesterAction("Unsuspended all cards.");
      renderTester(deck);
    }

    function flipTesterCard(deck, ref) {
      if (!ensureTestHand(deck)) return;
      const source = getTesterSourceArray(ref);
      if (!source || ref.index < 0 || ref.index >= source.length) return;
      const instance = source[ref.index];
      instance.faceUp = instance.faceUp === false;
      const card = getTesterCard(instance);
      state.selectedCardCode = card.code;
      logTesterAction((instance.faceUp ? "Showed " : "Hid ") + card.name + ".");
      hideTesterContextMenu();
      renderTester(deck);
    }

    function modifyTesterCard(deck, ref, patch) {
      if (!ensureTestHand(deck)) return;
      const source = getTesterSourceArray(ref);
      if (!source || ref.index < 0 || ref.index >= source.length) return;
      const instance = source[ref.index];
      instance.modifiers = Object.assign({ plusDp: 0, plusSecurity: 0, marked: false }, instance.modifiers || {}, patch || {});
      const card = getTesterCard(instance);
      logTesterAction("Updated markers on " + card.name + ".");
      hideTesterContextMenu();
      renderTester(deck);
    }

    function openTesterDrawer(deck, drawerName) {
      if (!ensureTestHand(deck)) return;
      state.testHand.openDrawer = drawerName || "trash";
      renderTester(deck);
    }

    function testerDragPayload(ref) {
      return JSON.stringify(ref);
    }

    function readTesterDragPayload(event) {
      try {
        return JSON.parse(event.dataTransfer.getData("application/x-dcgo-card") || "");
      } catch (error) {
        return null;
      }
    }

    function attachTesterDrag(element, ref) {
      if (!element || !ref) return;
      element.draggable = true;
      element.addEventListener("dragstart", function(event) {
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("application/x-dcgo-card", testerDragPayload(ref));
      });
    }

    function attachTesterDropZone(element, target) {
      if (!element) return;
      element.ondragover = function(event) {
        if (!event.dataTransfer.types || Array.prototype.indexOf.call(event.dataTransfer.types, "application/x-dcgo-card") < 0) {
          return;
        }
        event.preventDefault();
        element.classList.add("tester-drop-over");
      };
      element.ondragleave = function() {
        element.classList.remove("tester-drop-over");
      };
      element.ondrop = function(event) {
        const deck = getSelectedDeck();
        const ref = readTesterDragPayload(event);
        element.classList.remove("tester-drop-over");
        if (!deck || !ref) return;
        event.preventDefault();
        moveTesterCard(deck, ref, target);
      };
    }

    function createTesterButton(label, onClick, extraClass, title) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "button" + (extraClass ? " " + extraClass : "");
      button.textContent = label;
      button.title = title || label;
      button.setAttribute("aria-label", title || label);
      button.addEventListener("click", function(event) {
        event.stopPropagation();
        onClick();
      });
      return button;
    }

    function createTesterModifierBadges(instance) {
      const modifiers = Object.assign({ plusDp: 0, plusSecurity: 0, marked: false }, (instance && instance.modifiers) || {});
      const badges = document.createElement("div");
      badges.className = "tester-card-modifiers";
      const values = [];
      if (modifiers.marked) values.push({ text: "★", extra: " mark" });
      if (modifiers.plusDp) values.push({ text: (modifiers.plusDp > 0 ? "+" : "") + modifiers.plusDp, extra: "" });
      if (modifiers.plusSecurity) values.push({ text: "SA" + (modifiers.plusSecurity > 0 ? "+" : "") + modifiers.plusSecurity, extra: "" });
      values.forEach(function(value) {
        const badge = document.createElement("span");
        badge.className = "tester-card-modifier" + value.extra;
        badge.textContent = value.text;
        badges.appendChild(badge);
      });
      return badges.childNodes.length ? badges : null;
    }

    function createTesterCard(instance, options) {
      const opts = options || {};
      const card = getTesterCard(instance);
      const faceUp = !instance || !instance.card || instance.faceUp !== false || opts.forceFaceUp;
      const item = document.createElement("div");
      item.className = "tester-card";
      item.title = card.name + " " + card.code;
      if (opts.ref) attachTesterDrag(item, opts.ref);
      if (opts.ref) {
        item.addEventListener("contextmenu", function(event) {
          showTesterContextMenu(event, card.name + " · " + card.code, testerCardActions(getSelectedDeck(), opts.ref, { faceUp: faceUp }));
        });
      }
      item.addEventListener("mouseenter", function() {
        if (faceUp || opts.forceFaceUp) selectTesterCard(card);
      });

      const thumb = document.createElement("div");
      thumb.className = faceUp ? "tester-card-thumb" : "tester-card-back";
      if (faceUp) {
        if (card.imageUrl) {
          const img = document.createElement("img");
          img.src = card.imageUrl;
          img.alt = card.name;
          img.loading = "lazy";
          img.addEventListener("error", function() {
            img.remove();
            thumb.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
          });
          thumb.appendChild(img);
        } else {
          thumb.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
        }
        attachCardImageViewerTrigger(thumb, card);
      } else {
        thumb.textContent = opts.backLabel || "Deck";
      }
      thumb.addEventListener("click", function(event) {
        event.stopPropagation();
        selectTesterCard(card);
      });

      const name = document.createElement("div");
      name.className = "tester-card-name";
      name.textContent = faceUp ? card.name : (opts.hiddenName || "Face-down card");
      const code = document.createElement("div");
      code.className = "tester-card-code";
      code.textContent = faceUp ? card.code : (opts.hiddenCode || "");

      item.appendChild(thumb);
      const modifierBadges = createTesterModifierBadges(instance);
      if (modifierBadges) item.appendChild(modifierBadges);
      item.appendChild(name);
      item.appendChild(code);

      return item;
    }

    function createSecurityBack(deck, index) {
      const item = document.createElement("div");
      item.className = "tester-card security-back-card";
      item.addEventListener("contextmenu", function(event) {
        showTesterContextMenu(event, "Security #" + (index + 1), testerCardActions(deck, { zone: "security", index: index }, { faceUp: false }));
      });
      const back = document.createElement("div");
      back.className = "tester-card-back";
      back.textContent = "Security";
      back.title = "Face-down security #" + (index + 1);
      item.appendChild(back);
      return item;
    }

    function renderTesterGrid(gridEl, instances, emptyText, actionsForCard, refForCard) {
      gridEl.innerHTML = "";
      if (!instances.length) {
        const empty = document.createElement("div");
        empty.className = "tester-empty";
        empty.textContent = emptyText;
        gridEl.appendChild(empty);
        return;
      }
      instances.forEach(function(instance, index) {
        gridEl.appendChild(createTesterCard(instance, {
          ref: refForCard ? refForCard(instance, index) : null,
          actions: actionsForCard ? actionsForCard(instance, index) : []
        }));
      });
    }

    function createTesterPile(deck, label, count, drawerName, dropTarget) {
      const pile = document.createElement("button");
      pile.type = "button";
      pile.className = "tester-pile";
      pile.addEventListener("click", function() {
        openTesterDrawer(deck, drawerName);
      });
      const countEl = document.createElement("div");
      countEl.className = "tester-pile-count";
      countEl.textContent = count;
      const labelEl = document.createElement("div");
      labelEl.className = "tester-pile-label";
      labelEl.textContent = label;
      pile.appendChild(countEl);
      pile.appendChild(labelEl);
      if (dropTarget) attachTesterDropZone(pile, dropTarget);
      return pile;
    }

    function renderTesterDeckDock(deck) {
      testerDeckCountEl.textContent = String(state.testHand.stack.length);
      testerDeckStackEl.disabled = !state.testHand.stack.length;
      testerDeckStackEl.title = state.testHand.stack.length
        ? "Draw one card. Drop here to put a card on top of the deck."
        : "Deck is empty. Drop here to put a card on top of the deck.";
      attachTesterDropZone(testerDeckStackEl, { zone: "stack", position: "top" });
      attachTesterDropZone(testerDeckBottomDropEl, { zone: "stack", position: "bottom" });
    }

    function renderTesterPiles(deck) {
      testerPileListEl.innerHTML = "";
      [
        ["Deck", state.testHand.stack.length, "stack", { zone: "stack", position: "top" }],
        ["Egg", state.testHand.eggDeck.length, "eggDeck", { zone: "eggDeck", position: "top" }],
        ["Security", state.testHand.security.length, "security", { zone: "security", position: "top", faceUp: false }],
        ["Reveal", state.testHand.reveal.length + state.testHand.revealedSecurity.length, "reveal", { zone: "reveal" }],
        ["Trash", state.testHand.trash.length, "trash", { zone: "trash" }]
      ].forEach(function(item) {
        testerPileListEl.appendChild(createTesterPile(deck, item[0], item[1], item[2], item[3]));
      });
    }

    function renderTesterMemory(deck) {
      testerMemoryTrackEl.innerHTML = "";
      for (let value = -10; value <= 10; value += 1) {
        const cell = document.createElement("span");
        cell.textContent = String(Math.abs(value));
        cell.title = "Set memory to " + value;
        cell.dataset.memory = String(value);
        if (value === state.testHand.memory) cell.className = "active";
        cell.addEventListener("click", function() {
          state.testHand.memory = value;
          renderTester(deck);
        });
        testerMemoryTrackEl.appendChild(cell);
      }
    }

    function renderTesterSecurity(deck) {
      testerSecurityGridEl.innerHTML = "";
      if (!state.testHand.security.length) {
        const empty = document.createElement("div");
        empty.className = "tester-empty";
        empty.textContent = "No security cards remain.";
        testerSecurityGridEl.appendChild(empty);
      } else if (state.testHand.showSecurity) {
        state.testHand.security.forEach(function(instance, index) {
          testerSecurityGridEl.appendChild(createTesterCard(instance, {
            ref: { zone: "security", index: index },
            forceFaceUp: true,
            actions: [
              { label: "Rev", title: "Reveal this security", primary: true, onClick: function() { moveTesterCard(deck, { zone: "security", index: index }, { zone: "reveal" }); } },
              { label: "×", title: "Move to trash", onClick: function() { moveTesterCard(deck, { zone: "security", index: index }, { zone: "trash" }); } }
            ]
          }));
        });
      } else {
        state.testHand.security.forEach(function(instance, index) {
          if (instance.faceUp) {
            testerSecurityGridEl.appendChild(createTesterCard(instance, {
              ref: { zone: "security", index: index },
              forceFaceUp: true
            }));
          } else {
            testerSecurityGridEl.appendChild(createSecurityBack(deck, index));
          }
        });
      }

      const revealed = state.testHand.revealedSecurity.concat(state.testHand.reveal);
      if (!revealed.length) state.testHand.showRevealPanel = false;
      if (!state.testHand.security.length) state.testHand.showSecurityPanel = false;
      renderTesterGrid(
        testerRevealedSecurityGridEl,
        revealed,
        "No revealed cards yet.",
        function(instance, index) {
          const fromRevealedSecurity = index < state.testHand.revealedSecurity.length;
          const sourceIndex = fromRevealedSecurity ? index : index - state.testHand.revealedSecurity.length;
          const sourceZone = fromRevealedSecurity ? "revealedSecurity" : "reveal";
          return [
            { label: "BA", title: "Move to battle area", primary: true, onClick: function() { moveTesterCard(deck, { zone: sourceZone, index: sourceIndex }, { zone: "field", fieldIndex: firstEmptyTesterField(), mode: "top" }); } },
            { label: "H", title: "Move to hand", onClick: function() { moveTesterCard(deck, { zone: sourceZone, index: sourceIndex }, { zone: "hand" }); } },
            { label: "×", title: "Move to trash", onClick: function() { moveTesterCard(deck, { zone: sourceZone, index: sourceIndex }, { zone: "trash" }); } }
          ];
        },
        function(instance, index) {
          if (index < state.testHand.revealedSecurity.length) return { zone: "revealedSecurity", index: index };
          return { zone: "reveal", index: index - state.testHand.revealedSecurity.length };
        }
      );

      testerRevealSecurityBtn.disabled = !state.testHand.security.length;
      testerRevealAllSecurityBtn.disabled = !state.testHand.security.length;
      testerToggleSecurityBtn.textContent = state.testHand.showSecurity ? "🙈" : "👁";
      testerSecurityMetaEl.textContent = state.testHand.security.length + " cards";
      testerSecurityCountEl.textContent = state.testHand.security.length + " sec";
      testerRevealMetaEl.textContent = revealed.length + " shown";
      testerRevealPanelEl.classList.toggle("hidden", !revealed.length && !state.testHand.showRevealPanel);
      testerSecurityPanelEl.classList.toggle("hidden", !state.testHand.showSecurityPanel);
    }

    function minDigivolveCost(card) {
      const values = (card.digivolveCosts || []).filter(function(value) {
        return value !== null && value !== undefined && value !== "";
      }).map(Number).filter(function(value) {
        return Number.isFinite(value);
      });
      if (!values.length) return null;
      return Math.min.apply(Math, values);
    }

    function handSortValue(instance, mode) {
      const card = getTesterCard(instance);
      if (!card) return "";
      if (mode === "type") {
        const order = { "Digi-Egg": 0, "Digimon": 1, "Tamer": 2, "Option": 3 };
        return order[card.type] !== undefined ? order[card.type] : 9;
      }
      if (mode === "level") return card.level === null || card.level === undefined ? 99 : Number(card.level);
      if (mode === "playCost") return card.playCost === null || card.playCost === undefined ? 99 : Number(card.playCost);
      if (mode === "digivolveCost") {
        const cost = minDigivolveCost(card);
        return cost === null ? 99 : cost;
      }
      if (mode === "color") {
        const order = { "Red": 0, "Blue": 1, "Yellow": 2, "Green": 3, "Purple": 4, "Black": 5, "White": 6 };
        const color = (card.colors || [])[0] || "";
        return order[color] !== undefined ? order[color] : 9;
      }
      if (mode === "number") return String(card.cardNumber || card.code || "");
      if (mode === "name") return String(card.name || "");
      return "";
    }

    function sortTesterHand() {
      const mode = state.testHand.handSort || "";
      if (!mode) return;
      state.testHand.hand.sort(function(left, right) {
        const leftValue = handSortValue(left, mode);
        const rightValue = handSortValue(right, mode);
        if (typeof leftValue === "number" && typeof rightValue === "number" && leftValue !== rightValue) {
          return leftValue - rightValue;
        }
        const primary = String(leftValue).localeCompare(String(rightValue), undefined, { numeric: true, sensitivity: "base" });
        if (primary) return primary;
        const leftCard = getTesterCard(left);
        const rightCard = getTesterCard(right);
        return String(leftCard.name + leftCard.code).localeCompare(String(rightCard.name + rightCard.code), undefined, { numeric: true, sensitivity: "base" });
      });
    }

    function createTesterStackElement(deck, stack, sourceZone, fieldIndex) {
      const wrap = document.createElement("div");
      wrap.className = "tester-stack";
      if (!stack.length) {
        const empty = document.createElement("div");
        empty.className = "tester-empty";
        empty.textContent = sourceZone === "breeding" ? "Drop or hatch an egg here." : "Drop a card here.";
        wrap.appendChild(empty);
        return wrap;
      }

      stack.forEach(function(instance, index) {
        const card = getTesterCard(instance);
        const cardEl = document.createElement("div");
        cardEl.className = "tester-stack-card" + (instance.suspended ? " suspended" : "");
        cardEl.style.zIndex = String(10 + index);
        cardEl.style.bottom = (8 + Math.min(index, 9) * 7) + "px";
        cardEl.style.opacity = index === stack.length - 1 ? "1" : "0.72";
        if (card.imageUrl) {
          const img = document.createElement("img");
          img.src = card.imageUrl;
          img.alt = card.name;
          img.loading = "lazy";
          cardEl.appendChild(img);
        } else {
          cardEl.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
        }
        const modifierBadges = createTesterModifierBadges(instance);
        if (modifierBadges) cardEl.appendChild(modifierBadges);
        attachTesterDrag(cardEl, sourceZone === "field"
          ? { zone: "field", fieldIndex: fieldIndex, index: index }
          : { zone: "breeding", index: index });
        attachCardImageViewerTrigger(cardEl, card);
        cardEl.addEventListener("mouseenter", function() {
          if (instance.faceUp !== false) selectTesterCard(card);
        });
        cardEl.addEventListener("contextmenu", function(event) {
          const ref = sourceZone === "field"
            ? { zone: "field", fieldIndex: fieldIndex, index: index }
            : { zone: "breeding", index: index };
          showTesterContextMenu(event, card.name + " · " + card.code, testerCardActions(deck, ref, {
            stackTop: index === stack.length - 1,
            suspended: !!instance.suspended,
            faceUp: instance.faceUp !== false
          }));
        });
        cardEl.addEventListener("click", function(event) {
          event.stopPropagation();
          selectTesterCard(card);
          openTesterStackViewer(deck, sourceZone === "field" ? "field:" + fieldIndex : "breeding");
        });
        wrap.appendChild(cardEl);
      });

      const badge = document.createElement("div");
      badge.className = "tester-stack-badge";
      badge.textContent = "x" + stack.length;
      wrap.appendChild(badge);
      return wrap;
    }

    function renderTesterFields(deck) {
      testerBoardGridEl.innerHTML = "";
      state.testHand.fields.forEach(function(stack, index) {
        const slot = document.createElement("section");
        slot.className = "tester-field-slot" + (stack.length ? "" : " empty");
        attachTesterDropZone(slot, { zone: "field", fieldIndex: index, mode: "top" });
        slot.addEventListener("click", function() {
          if (!stack.length) return;
          openTesterDrawer(deck, "field:" + index);
        });

        const label = document.createElement("div");
        label.className = "tester-field-label";
        const title = document.createElement("span");
        title.textContent = "Battle " + (index + 1);
        const count = document.createElement("span");
        count.textContent = stack.length ? stack.length + " stack" : "empty";
        label.appendChild(title);
        label.appendChild(count);
        slot.appendChild(label);
        slot.appendChild(createTesterStackElement(deck, stack, "field", index));

        if (stack.length) {
          const sourceDrop = document.createElement("div");
          sourceDrop.className = "tester-source-drop tester-stack-bottom-drop";
          sourceDrop.textContent = "▽";
          attachTesterDropZone(sourceDrop, { zone: "field", fieldIndex: index, mode: "source" });
          slot.appendChild(sourceDrop);
        }
        testerBoardGridEl.appendChild(slot);
      });
    }

    function renderTesterBreeding(deck) {
      testerBreedingZoneEl.className = "tester-breeding-slot" + (state.testHand.breeding.length ? "" : " empty");
      testerBreedingZoneEl.querySelectorAll(".tester-stack-bottom-drop").forEach(function(element) { element.remove(); });
      testerBreedingStackEl.innerHTML = "";
      testerBreedingStackEl.appendChild(createTesterStackElement(deck, state.testHand.breeding, "breeding", -1));
      if (state.testHand.breeding.length) {
        const sourceDrop = document.createElement("div");
        sourceDrop.className = "tester-source-drop tester-stack-bottom-drop";
        sourceDrop.textContent = "▽";
        attachTesterDropZone(sourceDrop, { zone: "breeding", mode: "source" });
        testerBreedingZoneEl.appendChild(sourceDrop);
      }
      testerBreedingMetaEl.textContent = state.testHand.breeding.length + " stack";
      attachTesterDropZone(testerBreedingZoneEl, { zone: "breeding" });
    }

    function renderTesterHand(deck) {
      sortTesterHand();
      testerHandSortEl.value = state.testHand.handSort || "";
      attachTesterDropZone(testerHandGridEl, { zone: "hand" });
      renderTesterGrid(
        testerHandGridEl,
        state.testHand.hand,
        "No cards in hand. Draw or start a new shuffle.",
        function(instance, index) {
          return [
            { label: "▶", title: "Play to battle area", primary: true, onClick: function() { moveTesterCard(deck, { zone: "hand", index: index }, { zone: "field", fieldIndex: firstEmptyTesterField(), mode: "top" }); } },
            { label: "×", title: "Move to trash", onClick: function() { moveTesterCard(deck, { zone: "hand", index: index }, { zone: "trash" }); } },
            { label: "Rev", title: "Move to reveal area", onClick: function() { moveTesterCard(deck, { zone: "hand", index: index }, { zone: "reveal" }); } }
          ];
        },
        function(instance, index) { return { zone: "hand", index: index }; }
      );
    }

    function drawerTitle(drawerName) {
      if (drawerName === "stack") return "Deck";
      if (drawerName === "eggDeck") return "Egg Deck";
      if (drawerName === "security") return "Security";
      if (drawerName === "revealedSecurity") return "Security Revealed";
      if (drawerName === "reveal") return "Reveal Area";
      if (drawerName === "trash") return "Trash";
      if (drawerName === "breeding") return "Breeding Stack";
      if (String(drawerName).indexOf("field:") === 0) return "Battle " + (Number(String(drawerName).split(":")[1]) + 1) + " Stack";
      return "Zone";
    }

    function drawerSource(drawerName) {
      if (String(drawerName).indexOf("field:") === 0) {
        const fieldIndex = Number(String(drawerName).split(":")[1]);
        return {
          cards: state.testHand.fields[fieldIndex] || [],
          ref: function(index) { return { zone: "field", fieldIndex: fieldIndex, index: index }; },
          stackZone: "field",
          fieldIndex: fieldIndex
        };
      }
      return {
        cards: getTesterSourceArray({ zone: drawerName, index: 0 }) || [],
        ref: function(index) { return { zone: drawerName, index: index }; },
        stackZone: drawerName,
        fieldIndex: -1
      };
    }

    function openTesterStackViewer(deck, drawerName) {
      if (!ensureTestHand(deck)) return;
      state.testHand.stackViewer = drawerName || state.testHand.openDrawer || "trash";
      renderTester(deck);
    }

    function closeTesterStackViewer() {
      state.testHand.stackViewer = null;
      testerStackViewerEl.classList.add("hidden");
      testerStackViewerGridEl.innerHTML = "";
    }

    function renderTesterStackViewer(deck) {
      const drawerName = state.testHand.stackViewer;
      if (!drawerName) {
        testerStackViewerEl.classList.add("hidden");
        testerStackViewerGridEl.innerHTML = "";
        return;
      }

      const source = drawerSource(drawerName);
      testerStackViewerTitleEl.textContent = drawerTitle(drawerName) + " · " + source.cards.length;
      renderTesterGrid(
        testerStackViewerGridEl,
        source.cards,
        "No cards in this stack.",
        null,
        function(instance, index) { return source.ref(index); }
      );
      testerStackViewerEl.classList.remove("hidden");
    }

    function drawerCardActions(deck, drawerName, index) {
      const source = drawerSource(drawerName);
      const ref = source.ref(index);
      if (drawerName === "stack" || drawerName === "eggDeck") {
        return [];
      }
      const actions = [
        { label: "H", title: "Move to hand", onClick: function() { moveTesterCard(deck, ref, { zone: "hand" }); } },
        { label: "×", title: "Move to trash", onClick: function() { moveTesterCard(deck, ref, { zone: "trash" }); } },
        { label: "BA", title: "Move to battle area", primary: true, onClick: function() { moveTesterCard(deck, ref, { zone: "field", fieldIndex: firstEmptyTesterField(), mode: "top" }); } },
        { label: "D", title: "Move to top of deck", onClick: function() { moveTesterCard(deck, ref, { zone: "stack", position: "top" }); } }
      ];
      if (drawerName !== "security") {
        actions.push({ label: "Sec", title: "Move to security", onClick: function() { moveTesterCard(deck, ref, { zone: "security", position: "top", faceUp: false }); } });
      }
      if (drawerName !== "reveal" && drawerName !== "revealedSecurity") {
        actions.push({ label: "Rev", title: "Move to reveal area", onClick: function() { moveTesterCard(deck, ref, { zone: "reveal" }); } });
      }
      return actions;
    }

    function renderTesterDrawer(deck) {
      const drawerName = state.testHand.openDrawer || "trash";
      const source = drawerSource(drawerName);
      testerDrawerTitleEl.textContent = drawerTitle(drawerName);
      testerDrawerMetaEl.textContent = source.cards.length + " cards";
      testerDrawerGridEl.innerHTML = "";

      let stackActions = null;
      if ((source.stackZone === "field" || source.stackZone === "breeding") && source.cards.length) {
        stackActions = document.createElement("div");
        stackActions.className = "tester-stack-actions";
        if (source.stackZone === "field") {
          stackActions.appendChild(createTesterButton("↷", function() { toggleTesterSuspend(deck, source.fieldIndex); }, "", "Suspend or unsuspend top card"));
          stackActions.appendChild(createTesterButton("× stack", function() { moveTesterStack(deck, { zone: "field", fieldIndex: source.fieldIndex, index: 0 }, { zone: "trash" }); }, "danger", "Trash this whole stack"));
        } else {
          stackActions.appendChild(createTesterButton("→ BA", function() { moveBreedingToBattle(deck); }, "primary", "Move breeding stack to battle area"));
          stackActions.appendChild(createTesterButton("× stack", function() { moveTesterStack(deck, { zone: "breeding", index: 0 }, { zone: "trash" }); }, "danger", "Trash this whole stack"));
        }
      }

      renderTesterGrid(
        testerDrawerGridEl,
        source.cards,
        "No cards in this zone.",
        function(instance, index) { return drawerCardActions(deck, drawerName, index); },
        function(instance, index) { return source.ref(index); }
      );
      if (stackActions) testerDrawerGridEl.insertBefore(stackActions, testerDrawerGridEl.firstChild);
    }

    function renderTesterLog() {
      testerLogEl.innerHTML = "";
      if (!state.testHand.log.length) {
        const empty = document.createElement("div");
        empty.className = "tester-log-entry";
        empty.textContent = "No actions yet.";
        testerLogEl.appendChild(empty);
        return;
      }
      state.testHand.log.slice(0, 8).forEach(function(entry) {
        const item = document.createElement("div");
        item.className = "tester-log-entry";
        item.textContent = entry;
        testerLogEl.appendChild(item);
      });
    }

    function renderTester(deck) {
      if (!ensureTestHand(deck)) return;

      const stats = getDeckStats(deck);
      const occupiedFields = state.testHand.fields.filter(function(stack) { return stack.length > 0; }).length;
      const revealedCount = state.testHand.revealedSecurity.length + state.testHand.reveal.length;
      testerTitleEl.textContent = deck.name;
      testerSubtitleEl.textContent = deck.fileName + " · drag/drop";
      testerSessionMetaEl.textContent = stats.mainCount + " main / " + stats.eggCount + " egg";

      testerStatsGridEl.innerHTML = "";
      [
        ["Deck", state.testHand.stack.length],
        ["Egg", state.testHand.eggDeck.length],
        ["Hand", state.testHand.hand.length],
        ["Security", state.testHand.security.length],
        ["Reveal", revealedCount],
        ["Trash", state.testHand.trash.length],
        ["Fields", occupiedFields],
        ["Breeding", state.testHand.breeding.length]
      ].forEach(function(stat) {
        const item = document.createElement("div");
        item.className = "tester-stat";
        const label = document.createElement("div");
        label.className = "tester-stat-label";
        label.textContent = stat[0];
        const value = document.createElement("div");
        value.className = "tester-stat-value";
        value.textContent = stat[1];
        item.appendChild(label);
        item.appendChild(value);
        testerStatsGridEl.appendChild(item);
      });

      renderTesterPiles(deck);
      renderTesterDeckDock(deck);
      renderTesterMemory(deck);
      renderTesterSecurity(deck);
      renderTesterBreeding(deck);
      renderTesterFields(deck);
      renderTesterHand(deck);
      renderTesterDrawer(deck);
      renderTesterStackViewer(deck);
      renderTesterLog();

      attachTesterDropZone(testerRevealedSecurityGridEl, { zone: "reveal" });
      testerDrawBtn.disabled = !state.testHand.stack.length;
      testerHatchEggBtn.disabled = !state.testHand.eggDeck.length;
      testerRevealDeckBtn.disabled = !state.testHand.stack.length;
      testerTrashDeckBtn.disabled = !state.testHand.stack.length;
      testerTrashCountEl.textContent = state.testHand.trash.length;
      attachTesterDropZone(testerTrashPileBtn, { zone: "trash" });
      testerHandMetaEl.textContent = state.testHand.hand.length + " cards";
      testerBoardMetaEl.textContent = occupiedFields + " occupied / " + TESTER_FIELD_COUNT + " slots";
      renderTesterCardDetails(deck);
    }

    function pickSelectedCard(deck) {
      const candidates = deck.cards.concat(APP_DATA.cardCatalog);
      if (!candidates.length) return null;
      let selected = candidates.find(function(card) { return card.code === state.selectedCardCode; });
      if (!selected) {
        selected = candidates[0];
        state.selectedCardCode = selected.code;
      }
      return selected;
    }

    function openDeckEditor(deck) {
      const currentDeck = getSelectedDeck();
      if (currentDeck && currentDeck.id !== deck.id && !confirmDiscardUnsaved(currentDeck)) {
        return;
      }
      state.selectedDeckId = deck.id;
      state.cardQuery = "";
      cardSearchEl.value = "";
      state.selectedCardCode = deck.cards.length ? deck.cards[0].code : null;
      window.location.hash = "deck/" + encodeURIComponent(deck.id);
      render();
    }

    function renderLibrary() {
      const filteredDecks = getFilteredDecks();
      librarySummaryEl.textContent = filteredDecks.length + " of " + APP_DATA.decks.length + " decks";
      libraryGridEl.innerHTML = "";

      if (!filteredDecks.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.style.gridColumn = "1 / -1";
        empty.textContent = "No decks matched the current search.";
        libraryGridEl.appendChild(empty);
        return;
      }

      filteredDecks.forEach(function(deck) {
        const stats = getDeckStats(deck);
        const item = document.createElement("article");
        item.className = "library-deck-card";
        item.tabIndex = 0;
        item.setAttribute("role", "button");
        item.setAttribute("aria-label", "Open " + deck.name + " in the deck editor");
        item.addEventListener("click", function() {
          openDeckEditor(deck);
        });
        item.addEventListener("keydown", function(event) {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          openDeckEditor(deck);
        });

        const cover = document.createElement("div");
        cover.className = "deck-cover";
        if (deck.coverImageUrl) {
          const img = document.createElement("img");
          img.src = deck.coverImageUrl;
          img.alt = deck.name;
          img.loading = "lazy";
          img.addEventListener("error", function() {
            img.remove();
            cover.appendChild(createFallbackLabel(deck.name, "cover-fallback"));
          });
          cover.appendChild(img);
        } else {
          cover.appendChild(createFallbackLabel(deck.name, "cover-fallback"));
        }

        const body = document.createElement("div");
        body.className = "library-deck-body";

        const name = document.createElement("h2");
        name.className = "library-deck-title";
        name.textContent = deck.name;
        body.appendChild(name);

        const fileName = document.createElement("div");
        fileName.className = "library-deck-file";
        fileName.textContent = deck.fileName;
        body.appendChild(fileName);

        const counts = document.createElement("div");
        counts.className = "meta-row";
        counts.appendChild(createChip(stats.mainCount + " main", "accent"));
        counts.appendChild(createChip(stats.eggCount + " egg", stats.eggCount ? "" : ""));
        counts.appendChild(createChip(stats.uniqueCount + " unique", ""));
        body.appendChild(counts);

        body.appendChild(createColorRatioBar(getColorProfile(deck.cards)));

        const actions = document.createElement("div");
        actions.className = "library-deck-actions";
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function(event) {
          event.stopPropagation();
          openDeckEditor(deck);
        });
        const testButton = document.createElement("button");
        testButton.type = "button";
        testButton.className = "button primary";
        testButton.textContent = "Hand Test";
        testButton.addEventListener("click", function(event) {
          event.stopPropagation();
          openDeckTester(deck);
        });
        actions.appendChild(editButton);
        actions.appendChild(testButton);
        body.appendChild(actions);

        item.appendChild(cover);
        item.appendChild(body);
        libraryGridEl.appendChild(item);
      });
    }

    function renderHero(deck) {
      const stats = getDeckStats(deck);
      heroTitleEl.textContent = deck.name;
      heroSubtitleEl.textContent = deck.fileName;

      statsGridEl.innerHTML = "";
      [
        ["Main", stats.mainCount],
        ["Egg", stats.eggCount],
        ["Unique", stats.uniqueCount],
        ["Total", stats.totalCount]
      ].forEach(function(stat) {
        const card = document.createElement("div");
        card.className = "stat-card";
        const label = document.createElement("div");
        label.className = "stat-label";
        label.textContent = stat[0];
        const value = document.createElement("div");
        value.className = "stat-value";
        value.textContent = stat[1];
        card.appendChild(label);
        card.appendChild(value);
        statsGridEl.appendChild(card);
      });

      heroChipsEl.innerHTML = "";
      if (deck.keyCard && deck.keyCard !== "-1") {
        heroChipsEl.appendChild(createChip("Key " + deck.keyCard, "warm"));
      }
      if (deck.sortIndex && deck.sortIndex !== "0") {
        heroChipsEl.appendChild(createChip("Sort " + deck.sortIndex, ""));
      }
      if (deck.colors.length) {
        deck.colors.forEach(function(color) {
          heroChipsEl.appendChild(createColorChip(color));
        });
      }
    }

    function renderCards(deck) {
      const cards = getFilteredCards(deck);
      cardSearchSummaryEl.textContent = cards.length + " of " + deck.cards.length + " cards shown";
      cardsGridEl.innerHTML = "";

      if (!cards.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.style.gridColumn = "1 / -1";
        empty.textContent = "No cards matched the current deck filter.";
        cardsGridEl.appendChild(empty);
        return;
      }

      cards.forEach(function(card) {
        const tile = document.createElement("div");
        tile.className = "card-tile" + (card.code === state.selectedCardCode ? " active" : "");
        tile.addEventListener("click", function() {
          state.selectedCardCode = card.code;
          renderDetails(deck);
          renderCards(deck);
        });

        const thumb = document.createElement("div");
        thumb.className = "card-thumb";
        if (card.imageUrl) {
          const img = document.createElement("img");
          img.src = card.imageUrl;
          img.alt = card.name;
          img.loading = "lazy";
          img.addEventListener("error", function() {
            img.remove();
            thumb.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
          });
          thumb.appendChild(img);
        } else {
          thumb.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
        }
        attachCardImageViewerTrigger(thumb, card);

        const countPill = document.createElement("div");
        countPill.className = "count-pill";
        countPill.textContent = "x" + card.count;
        thumb.appendChild(countPill);

        const actions = document.createElement("div");
        actions.className = "deck-card-actions";
        const minus = document.createElement("button");
        minus.type = "button";
        minus.className = "count-button minus";
        minus.textContent = "-";
        minus.addEventListener("click", function(event) {
          event.stopPropagation();
          removeCardFromDeck(deck, card);
        });

        const count = document.createElement("div");
        count.className = "deck-card-count";
        count.textContent = "x" + card.count;

        const plus = document.createElement("button");
        plus.type = "button";
        plus.className = "count-button plus";
        plus.textContent = "+";
        plus.disabled = !canAddCard(deck, card);
        plus.title = plus.disabled ? "Copy limit reached for " + (card.cardNumber || card.code) : "Add one copy";
        plus.addEventListener("click", function(event) {
          event.stopPropagation();
          addCardToDeck(deck, card);
        });

        actions.appendChild(minus);
        actions.appendChild(count);
        actions.appendChild(plus);

        tile.appendChild(thumb);
        tile.appendChild(actions);
        cardsGridEl.appendChild(tile);
      });
    }

    function renderCatalog(deck) {
      const cards = getFilteredCatalogCards();
      const filters = readCatalogFilters();
      catalogGridEl.innerHTML = "";

      if (!hasActiveCatalogFilters(filters)) {
        catalogSummaryEl.textContent = APP_DATA.cardCatalog.length + " cards loaded";
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = "Use filters to add cards.";
        catalogGridEl.appendChild(empty);
        return;
      }

      catalogSummaryEl.textContent = cards.length + " matching cards";
      if (!cards.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = "No cards matched the current search.";
        catalogGridEl.appendChild(empty);
        return;
      }

      cards.forEach(function(card) {
        const item = document.createElement("div");
        item.className = "catalog-card";
        item.addEventListener("click", function() {
          state.selectedCardCode = card.code;
          renderDetails(deck);
        });

        const thumb = document.createElement("div");
        thumb.className = "catalog-thumb";
        if (card.imageUrl) {
          const img = document.createElement("img");
          img.src = card.imageUrl;
          img.alt = card.name;
          img.loading = "lazy";
          img.addEventListener("error", function() {
            img.remove();
            thumb.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
          });
          thumb.appendChild(img);
        } else {
          thumb.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
        }
        attachCardImageViewerTrigger(thumb, card);

        const body = document.createElement("div");
        const name = document.createElement("h3");
        name.className = "catalog-card-title";
        name.textContent = card.name;
        const code = document.createElement("div");
        code.className = "catalog-card-code";
        code.textContent = card.code;
        const meta = document.createElement("div");
        meta.className = "catalog-card-meta";
        const bits = [];
        if (card.type) bits.push(card.type);
        if (card.level !== null && card.level !== undefined) bits.push("Lv." + card.level);
        if (card.digivolveCosts && card.digivolveCosts.length) bits.push("Evo " + card.digivolveCosts.join("/"));
        if (card.colors && card.colors.length) bits.push(card.colors.join("/"));
        bits.push(getCardLimitLabel(card));
        meta.textContent = bits.join(" • ");

        const addButton = document.createElement("button");
        addButton.type = "button";
        addButton.className = "catalog-add-button";
        addButton.textContent = getDeckCardNumberCount(deck, card) ? "Add another" : "Add to deck";
        addButton.disabled = !canAddCard(deck, card);
        addButton.title = addButton.disabled ? "Copy limit reached for " + (card.cardNumber || card.code) : "Add one copy";
        addButton.addEventListener("click", function(event) {
          event.stopPropagation();
          addCardToDeck(deck, card);
        });

        body.appendChild(name);
        body.appendChild(code);
        body.appendChild(meta);
        body.appendChild(addButton);
        item.appendChild(thumb);
        item.appendChild(body);
        catalogGridEl.appendChild(item);
      });
    }

    function renderDetailsInto(targetEl, deck) {
      const card = pickSelectedCard(deck);
      targetEl.innerHTML = "";

      if (!card) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = "No card available.";
        targetEl.appendChild(empty);
        return;
      }

      const art = document.createElement("div");
      art.className = "details-art";
      if (card.imageUrl) {
        const img = document.createElement("img");
        img.src = card.imageUrl;
        img.alt = card.name;
        img.addEventListener("error", function() {
          img.remove();
          art.appendChild(createFallbackLabel(card.name, "cover-fallback"));
        });
        art.appendChild(img);
      } else {
        art.appendChild(createFallbackLabel(card.name, "cover-fallback"));
      }
      attachCardImageViewerTrigger(art, card);
      targetEl.appendChild(art);

      const titleWrap = document.createElement("div");
      titleWrap.className = "details-card-head";
      const name = document.createElement("h2");
      name.className = "details-name";
      name.textContent = card.name;
      titleWrap.appendChild(name);

      if (card.digitype && card.digitype.length) {
        const traits = document.createElement("div");
        traits.className = "details-traits";
        card.digitype.forEach(function(trait, index) {
          if (index > 0) {
            const divider = document.createElement("span");
            divider.className = "details-trait-divider";
            divider.textContent = "|";
            traits.appendChild(divider);
          }
          const traitItem = document.createElement("span");
          traitItem.textContent = trait;
          traits.appendChild(traitItem);
        });
        titleWrap.appendChild(traits);
      }

      targetEl.appendChild(titleWrap);
      targetEl.appendChild(createDetailsColorStrip(card.colors));
      targetEl.appendChild(createDetailsStatsPanel(card));

      const sectionLabels = {
        "Main Effect": "MAIN EFFECT",
        "Option Effect": "OPTION EFFECT",
        "Inherited": card.type === "Option" || card.type === "Tamer" ? "SECURITY EFFECT" : "INHERITED EFFECT ↗",
        "Security": "SECURITY EFFECT",
        "ACE": "ACE EFFECT",
        "Link Effect": "LINK EFFECT"
      };
      const specialLabels = {
        "Arts Digivolve": true,
        "Special Digivolve": true,
        "DNA Digivolve": true,
        "Burst Digivolve": true,
        "DigiXros": true,
        "Assembly": true,
        "Link Requirement": true
      };
      const sectionRanks = {
        "Special Digivolve": 0,
        "DNA Digivolve": 0,
        "Burst Digivolve": 0,
        "Link Requirement": 0,
        "Main Effect": 1,
        "Option Effect": 2,
        "Arts Digivolve": 3,
        "Rule": 4,
        "Inherited": 5,
        "Security": 6,
        "DigiXros": 7,
        "Assembly": 8,
        "ACE": 9,
        "Link Effect": 10
      };
      const skippedLabels = { "Notes": true };
      const renderedSections = (card.effectSections || []).filter(function(section) {
        return section && section.text && !skippedLabels[section.label];
      }).map(function(section, index) {
        return { section: section, index: index };
      }).sort(function(a, b) {
        const rankA = Object.prototype.hasOwnProperty.call(sectionRanks, a.section.label) ? sectionRanks[a.section.label] : 99;
        const rankB = Object.prototype.hasOwnProperty.call(sectionRanks, b.section.label) ? sectionRanks[b.section.label] : 99;
        if (rankA !== rankB) return rankA - rankB;
        return a.index - b.index;
      }).map(function(item) {
        return item.section;
      });

      if (renderedSections.length) {
        renderedSections.forEach(function(section) {
          if (specialLabels[section.label]) {
            const special = document.createElement("section");
            special.className = "details-special-card";
            appendHighlightedText(special, section.text);
            targetEl.appendChild(special);
            return;
          }

          if (section.label === "Rule") {
            const rule = document.createElement("section");
            rule.className = "details-rule-card";
            appendHighlightedText(rule, section.text);
            targetEl.appendChild(rule);
            return;
          }

          const block = document.createElement("section");
          block.className = "details-effect-card";
          const header = document.createElement("div");
          header.className = "details-effect-header";
          header.textContent = sectionLabels[section.label] || section.label.toUpperCase();
          const text = document.createElement("div");
          text.className = "details-effect-text";
          appendHighlightedText(text, section.text);
          block.appendChild(header);
          block.appendChild(text);
          targetEl.appendChild(block);
        });
      } else {
        const block = document.createElement("section");
        block.className = "details-effect-card";
        const header = document.createElement("div");
        header.className = "details-effect-header";
        header.textContent = "EFFECT TEXT";
        const text = document.createElement("div");
        text.className = "details-effect-text";
        text.textContent = "No effect text was available for this card in the loaded manifest.";
        block.appendChild(header);
        block.appendChild(text);
        targetEl.appendChild(block);
      }

      const footer = document.createElement("div");
      footer.className = "details-footer";
      const left = document.createElement("span");
      left.textContent = card.cardNumber || card.code;
      const middle = document.createElement("span");
      middle.textContent = card.illustrator ? "✒ " + card.illustrator : "";
      const rulings = document.createElement("a");
      rulings.className = "details-rulings-link";
      rulings.href = "https://digimoncardgame.fandom.com/wiki/" + encodeURIComponent(card.cardNumber || card.code) + "/Rulings";
      rulings.target = "_blank";
      rulings.rel = "noopener noreferrer";
      rulings.textContent = "ℹ Rulings";
      footer.appendChild(left);
      footer.appendChild(middle);
      footer.appendChild(rulings);
      targetEl.appendChild(footer);
    }

    function renderDetails(deck) {
      renderDetailsInto(detailsBodyEl, deck);
    }

    function renderTesterCardDetails(deck) {
      renderDetailsInto(testerDetailsBodyEl, deck);
    }

    function createChip(text, extraClass) {
      const chip = document.createElement("span");
      chip.className = "chip" + (extraClass ? " " + extraClass : "");
      chip.textContent = text;
      return chip;
    }

    function createFallbackLabel(text, className) {
      const wrap = document.createElement("div");
      wrap.className = className;
      const words = String(text || "Card").trim().split(/\\s+/).slice(0, 2);
      wrap.textContent = words.join("\\n");
      return wrap;
    }

    function openImageViewer(card) {
      if (!card || !card.imageUrl) return;
      imageViewerImgEl.src = card.imageUrl;
      imageViewerImgEl.alt = card.name || "Card image";
      imageViewerCaptionEl.textContent = [card.name, card.code].filter(Boolean).join(" · ");
      imageViewerEl.classList.remove("hidden");
      document.body.classList.add("modal-open");
      imageViewerCloseBtn.focus();
    }

    function closeImageViewer() {
      imageViewerEl.classList.add("hidden");
      document.body.classList.remove("modal-open");
      imageViewerImgEl.removeAttribute("src");
      imageViewerImgEl.alt = "";
      imageViewerCaptionEl.textContent = "";
    }

    function attachCardImageViewerTrigger(element, card) {
      if (!element || !card || !card.imageUrl) return;
      element.classList.add("image-zoomable");
      element.title = "Double-click to enlarge";
      element.tabIndex = 0;
      element.setAttribute("role", "button");
      element.setAttribute("aria-label", "Select " + (card.name || "card") + ". Press Enter twice to enlarge.");
      element.addEventListener("dblclick", function(event) {
        event.stopPropagation();
        openImageViewer(card);
      });
      element.addEventListener("keydown", function(event) {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        event.stopPropagation();

        const now = Date.now();
        const lastPress = Number(element.dataset.lastZoomPress || "0");
        element.dataset.lastZoomPress = String(now);

        if (now - lastPress <= 600) {
          element.dataset.lastZoomPress = "0";
          openImageViewer(card);
        }
      });
    }

    function drawCoverImage(ctx, image, x, y, width, height) {
      const sourceWidth = image.width || image.naturalWidth || width;
      const sourceHeight = image.height || image.naturalHeight || height;
      const sourceRatio = sourceWidth / sourceHeight;
      const targetRatio = width / height;
      let sx = 0;
      let sy = 0;
      let sw = sourceWidth;
      let sh = sourceHeight;

      if (sourceRatio > targetRatio) {
        sw = sourceHeight * targetRatio;
        sx = (sourceWidth - sw) / 2;
      } else if (sourceRatio < targetRatio) {
        sh = sourceWidth / targetRatio;
        sy = (sourceHeight - sh) / 2;
      }

      ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
    }

    function drawCountPill(ctx, text, x, y) {
      const paddingX = 12;
      const paddingY = 7;
      const fontSize = 22;
      ctx.font = "700 " + fontSize + "px " + getComputedStyle(document.body).fontFamily;
      const metrics = ctx.measureText(text);
      const pillWidth = metrics.width + paddingX * 2;
      const pillHeight = fontSize + paddingY * 2;
      const radius = pillHeight / 2;

      ctx.fillStyle = "rgba(4, 12, 20, 0.88)";
      ctx.strokeStyle = "rgba(255,255,255,0.16)";
      ctx.lineWidth = 1;

      const pillX = x - pillWidth;
      const pillY = y - pillHeight;
      ctx.beginPath();
      ctx.moveTo(pillX + radius, pillY);
      ctx.lineTo(pillX + pillWidth - radius, pillY);
      ctx.quadraticCurveTo(pillX + pillWidth, pillY, pillX + pillWidth, pillY + radius);
      ctx.lineTo(pillX + pillWidth, pillY + pillHeight - radius);
      ctx.quadraticCurveTo(pillX + pillWidth, pillY + pillHeight, pillX + pillWidth - radius, pillY + pillHeight);
      ctx.lineTo(pillX + radius, pillY + pillHeight);
      ctx.quadraticCurveTo(pillX, pillY + pillHeight, pillX, pillY + pillHeight - radius);
      ctx.lineTo(pillX, pillY + radius);
      ctx.quadraticCurveTo(pillX, pillY, pillX + radius, pillY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, pillX + pillWidth / 2, pillY + pillHeight / 2 + 0.5);
    }

    async function loadImageBitmap(url) {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error("Image load failed");
      const blob = await response.blob();
      if ("createImageBitmap" in window) {
        return await createImageBitmap(blob);
      }
      return await new Promise(function(resolve, reject) {
        const img = new Image();
        const objectUrl = URL.createObjectURL(blob);
        img.onload = function() {
          URL.revokeObjectURL(objectUrl);
          resolve(img);
        };
        img.onerror = function() {
          URL.revokeObjectURL(objectUrl);
          reject(new Error("Image load failed"));
        };
        img.src = objectUrl;
      });
    }

    async function buildDeckImageBlob(deck) {
      const cards = deck.cards || [];
      if (!cards.length) throw new Error("No cards in this deck.");

      const columns = 8;
      const cardWidth = 320;
      const cardHeight = Math.round(cardWidth / 0.7);
      const gap = 14;
      const padding = 20;
      const rows = Math.max(1, Math.ceil(cards.length / columns));
      const canvasWidth = padding * 2 + columns * cardWidth + (columns - 1) * gap;
      const canvasHeight = padding * 2 + rows * cardHeight + (rows - 1) * gap;
      if (canvasHeight > 32767) {
        throw new Error("Deck image is too tall for this browser to export.");
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#09111a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let index = 0; index < cards.length; index += 1) {
        const card = cards[index];
        const row = Math.floor(index / columns);
        const col = index % columns;
        const x = padding + col * (cardWidth + gap);
        const y = padding + row * (cardHeight + gap);

        ctx.fillStyle = "rgba(16, 39, 62, 1)";
        ctx.fillRect(x, y, cardWidth, cardHeight);

        if (card.imageUrl) {
          try {
            const image = await loadImageBitmap(card.imageUrl);
            drawCoverImage(ctx, image, x, y, cardWidth, cardHeight);
          } catch (error) {
            // Keep fallback background when image fails.
          }
        }

        drawCountPill(ctx, "x" + card.count, x + cardWidth - 8, y + cardHeight - 8);
      }

      return await new Promise(function(resolve, reject) {
        canvas.toBlob(function(blob) {
          if (!blob) {
            reject(new Error("The browser could not render this deck image."));
            return;
          }
          resolve(blob);
        }, "image/png");
      });
    }

    async function copyImageToClipboard(blob) {
      if (!blob) return false;
      if (!navigator.clipboard || !window.ClipboardItem || !window.isSecureContext) return false;
      try {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        return true;
      } catch (error) {
        return false;
      }
    }

    async function exportDeckAsImage() {
      const deck = getSelectedDeck();
      if (!deck) return;
      if (needsDeckBrowserServer("Export Image")) return;

      const original = exportDeckImageBtn.textContent;
      exportDeckImageBtn.disabled = true;
      exportDeckImageBtn.textContent = "Exporting...";

      try {
        const blob = await buildDeckImageBlob(deck);
        const copied = await copyImageToClipboard(blob);
        const dataUrl = await new Promise(function(resolve) {
          const reader = new FileReader();
          reader.onloadend = function() { resolve(reader.result); };
          reader.readAsDataURL(blob);
        });
        const imageData = String(dataUrl).split(",")[1] || "";

        const response = await fetch("/api/export-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ deckName: deck.name, imageData: imageData, overwrite: false })
        });

        if (response.status === 409) {
          const payload = await response.json().catch(function() { return {}; });
          const overwrite = window.confirm("Export image already exists. Overwrite?");
          if (!overwrite) throw new Error("Export cancelled.");
          const retry = await fetch("/api/export-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ deckName: deck.name, imageData: imageData, overwrite: true })
          });
          if (!retry.ok) {
            const retryPayload = await retry.json().catch(function() { return {}; });
            throw new Error(retryPayload.error || "Export failed.");
          }
        } else if (!response.ok) {
          const payload = await response.json().catch(function() { return {}; });
          throw new Error(payload.error || "Export failed.");
        }

        exportDeckImageBtn.textContent = copied ? "Exported + Copied" : "Exported";
        window.setTimeout(function() {
          exportDeckImageBtn.textContent = original;
          exportDeckImageBtn.disabled = false;
        }, 1400);
      } catch (error) {
        window.alert("Export failed: " + error.message);
        exportDeckImageBtn.textContent = original;
        exportDeckImageBtn.disabled = false;
      }
    }

    async function copyToClipboard(text, button) {
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
      } catch (error) {
        button.textContent = "Copy failed";
      }
      window.setTimeout(function() {
        button.textContent = original;
      }, 1400);
    }

    function normalizeImportCode(value) {
      return String(value || "")
        .trim()
        .replace(/^["']|["']$$/g, "")
        .replace(/[],;]+$$/g, "")
        .toUpperCase();
    }

    function findCatalogCardForImportCode(value) {
      const code = normalizeImportCode(value);
      if (!code) return null;
      if (CARD_BY_CODE[code]) return CARD_BY_CODE[code];

      const numberMatches = CARDS_BY_NUMBER[code] || [];
      if (!numberMatches.length) return null;
      return (
        numberMatches.find(function(card) { return normalizeImportCode(card.code) === code; }) ||
        numberMatches.find(function(card) { return !card.isAltArt; }) ||
        numberMatches[0]
      );
    }

    function parseJsonImport(rawText) {
      let parsed;
      try {
        parsed = JSON.parse(rawText);
      } catch (error) {
        return null;
      }
      if (!Array.isArray(parsed)) {
        throw new Error("JSON import must be an array of card codes.");
      }
      const refs = parsed.map(function(item) {
        if (typeof item !== "string") {
          throw new Error("JSON import arrays can only contain card code strings.");
        }
        return normalizeImportCode(item);
      }).filter(Boolean);
      return { name: "", refs: refs };
    }

    function parseTextImport(rawText) {
      const refs = [];
      let importedName = "";
      const lines = rawText.split(/\\r?\\n/);

      lines.forEach(function(line) {
        const trimmed = line.trim();
        if (!trimmed) return;
        if (trimmed.startsWith("//")) {
          const name = trimmed.replace(/^\\/\\/\\s*/, "").trim();
          if (name && name.toLowerCase() !== "decklist") importedName = name;
          return;
        }

        const nameMatch = trimmed.match(/^Name:\\s*(.+)$$/i);
        if (nameMatch) {
          importedName = nameMatch[1].trim();
          return;
        }
        if (/^(Key Card|Sort Index):/i.test(trimmed)) return;

        const lineMatch = trimmed.match(/^\\s*(\\d+)\\s+.+?\\s+([A-Za-z0-9-]+(?:_[A-Za-z0-9-]+)?)\\s*$$/);
        if (!lineMatch) return;

        const count = Number(lineMatch[1]);
        const code = normalizeImportCode(lineMatch[2]);
        if (!Number.isFinite(count) || count <= 0 || !code) return;
        for (let index = 0; index < count; index += 1) refs.push(code);
      });

      return { name: importedName, refs: refs };
    }

    function parseDeckImport(rawText) {
      const text = String(rawText || "").trim();
      if (!text) throw new Error("Clipboard is empty.");

      const jsonImport = parseJsonImport(text);
      const parsed = jsonImport || parseTextImport(text);
      if (!parsed.refs.length) {
        throw new Error("No importable card lines or JSON card codes were found.");
      }
      return parsed;
    }

    function validateImportedCards(cards) {
      return validateCards(cards).errors;
    }

    function buildImportedCards(parsed) {
      const groupedByCode = {};
      const missingCodes = [];

      parsed.refs.forEach(function(ref) {
        const card = findCatalogCardForImportCode(ref);
        if (!card) {
          missingCodes.push(ref);
          return;
        }
        const key = card.code;
        if (!groupedByCode[key]) groupedByCode[key] = { card: card, count: 0 };
        groupedByCode[key].count += 1;
      });

      if (missingCodes.length) {
        throw new Error(
          "Unknown card codes: " +
          missingCodes.slice(0, 12).join(", ") +
          (missingCodes.length > 12 ? " +" + (missingCodes.length - 12) + " more" : "")
        );
      }

      const importedCards = Object.keys(groupedByCode).map(function(code) {
        const entry = groupedByCode[code];
        const card = cloneCardForDeck(entry.card);
        card.count = entry.count;
        return card;
      });

      return importedCards;
    }

    function buildImportPreviewText(parsed, importedCards) {
      const validation = validateCards(importedCards);
      const stats = validation.stats;
      const lines = [
        "Import preview",
        "",
        "Deck name: " + (parsed.name || "keep current name"),
        "Main deck: " + stats.mainCount + "/50",
        "Egg deck: " + stats.eggCount + "/5",
        "Unique card numbers: " + stats.uniqueCount
      ];

      if (validation.errors.length) {
        lines.push("", "Errors:");
        validation.errors.slice(0, 8).forEach(function(message) { lines.push("- " + message); });
      }

      if (validation.warnings.length) {
        lines.push("", "Warnings:");
        validation.warnings.slice(0, 8).forEach(function(message) { lines.push("- " + message); });
      }

      lines.push("", "Replace the current deck list with this import?");
      return lines.join("\\n");
    }

    function importParsedDeck(deck, parsed, importedCards) {
      const cards = importedCards || buildImportedCards(parsed);

      deck.cards = cards;
      if (parsed.name) deck.name = parsed.name;
      sortDeckCards(deck);
      refreshDeckComputedFields(deck);
      resetTestHandForDeck(deck);
      state.selectedCardCode = deck.cards.length ? deck.cards[0].code : null;
    }

    async function readClipboardTextWithFallback() {
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          return await navigator.clipboard.readText();
        }
      } catch (error) {
        const fallback = window.prompt("Paste deck text or JSON here:");
        if (fallback !== null) return fallback;
        throw error;
      }

      const fallback = window.prompt("Paste deck text or JSON here:");
      if (fallback === null) throw new Error("Import cancelled.");
      return fallback;
    }

    async function saveDeckChanges(deck) {
      if (window.location.protocol === "file:") {
        window.alert("Save Changes needs the local deck browser server. Open it with Open Deck Browser.command.");
        return;
      }

      const validation = validateDeck(deck);
      if (validation.errors.length) {
        window.alert("Fix validation errors before saving:\\n\\n" + validation.errors.slice(0, 8).join("\\n"));
        return;
      }

      if (validation.warnings.length && !window.confirm("Save with warnings?\\n\\n" + validation.warnings.slice(0, 8).join("\\n"))) {
        return;
      }

      const original = saveChangesBtn.textContent;
      saveChangesBtn.disabled = true;
      saveChangesBtn.textContent = "Saving...";

      try {
        const response = await fetch("/api/decks/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileName: deck.fileName,
            text: buildDeckExportText(deck)
          })
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) {
          throw new Error(payload.error || "Save failed.");
        }

        applySavedDeck(deck, payload.deck);
        saveChangesBtn.textContent = "Saved";
        renderEditor();
        window.setTimeout(function() {
          saveChangesBtn.textContent = original;
          renderDirtyStatus(deck);
        }, 1200);
      } catch (error) {
        window.alert("Could not save deck: " + error.message);
        saveChangesBtn.textContent = original;
        renderDirtyStatus(deck);
      }
    }

    function readRoute() {
      const hash = window.location.hash.replace(/^#/, "");
      if (hash.startsWith("test/")) {
        const deckId = decodeURIComponent(hash.slice("test/".length));
        const deck = APP_DATA.decks.find(function(item) { return item.id === deckId; });
        if (deck) {
          state.view = "tester";
          state.selectedDeckId = deck.id;
          state.selectedCardCode = deck.cards.length ? deck.cards[0].code : null;
          ensureTestHand(deck);
          return;
        }
      }

      if (hash.startsWith("deck/")) {
        const deckId = decodeURIComponent(hash.slice("deck/".length));
        const deck = APP_DATA.decks.find(function(item) { return item.id === deckId; });
        if (deck) {
          state.view = "editor";
          state.selectedDeckId = deck.id;
          if (!state.selectedCardCode && deck.cards.length) {
            state.selectedCardCode = deck.cards[0].code;
          }
          return;
        }
      }

      state.view = "library";
    }

    function renderEditor() {
      const deck = getSelectedDeck();
      if (!deck) {
        heroTitleEl.textContent = "No deck selected";
        heroSubtitleEl.textContent = "No deck matched the current search.";
        statsGridEl.innerHTML = "";
        heroChipsEl.innerHTML = "";
        cardsGridEl.innerHTML = '<div class="empty-state" style="grid-column:1 / -1">No decks available.</div>';
        detailsBodyEl.innerHTML = '<div class="empty-state">No deck selected.</div>';
        validationPanelEl.innerHTML = "";
        dirtyStatusEl.textContent = "";
        cardSearchSummaryEl.textContent = "";
        saveChangesBtn.disabled = true;
        copyDecklistBtn.disabled = true;
        importClipboardBtn.disabled = true;
        testHandBtn.disabled = true;
        renameDeckBtn.disabled = true;
        duplicateDeckBtn.disabled = true;
        deleteDeckBtn.disabled = true;
        copyFilenameBtn.disabled = true;
        testHandPanelEl.classList.add("hidden");
        return;
      }

      renderDirtyStatus(deck);
      copyDecklistBtn.disabled = false;
      importClipboardBtn.disabled = false;
      testHandBtn.disabled = false;
      renameDeckBtn.disabled = false;
      duplicateDeckBtn.disabled = false;
      deleteDeckBtn.disabled = false;
      copyFilenameBtn.disabled = false;
      renderHero(deck);
      renderValidationPanel(deck);
      renderTestHand(deck);
      renderCards(deck);
      renderCatalog(deck);
      renderDetails(deck);
    }

    function render() {
      readRoute();

      if (state.view === "library") {
        libraryViewEl.classList.remove("hidden");
        editorViewEl.classList.add("hidden");
        testViewEl.classList.add("hidden");
        renderLibrary();
        return;
      }

      if (state.view === "tester") {
        const deck = getSelectedDeck();
        libraryViewEl.classList.add("hidden");
        editorViewEl.classList.add("hidden");
        testViewEl.classList.remove("hidden");
        if (deck) renderTester(deck);
        return;
      }

      libraryViewEl.classList.add("hidden");
      testViewEl.classList.add("hidden");
      editorViewEl.classList.remove("hidden");
      renderEditor();
    }

    librarySearchEl.addEventListener("input", function(event) {
      state.deckQuery = event.target.value.toLowerCase();
      render();
    });

    cardSearchEl.addEventListener("input", function(event) {
      state.cardQuery = event.target.value.toLowerCase();
      render();
    });

    Object.keys(filterEls).forEach(function(key) {
      if (key === "clear") return;
      filterEls[key].addEventListener("input", render);
      filterEls[key].addEventListener("change", render);
    });

    filterEls.clear.addEventListener("click", function() {
      filterEls.name.value = "";
      filterEls.number.value = "";
      filterEls.dp.value = "";
      filterEls.color1.value = "";
      filterEls.color2.value = "";
      filterEls.color3.value = "";
      filterEls.type.value = "";
      filterEls.attribute.value = "";
      filterEls.playCost.value = "";
      filterEls.digivolutionCost.value = "";
      filterEls.level.value = "";
      filterEls.stage.value = "";
      filterEls.trait.value = "";
      filterEls.illustrator.value = "";
      filterEls.effect.value = "";
      filterEls.ace.checked = false;
      filterEls.altArts.checked = true;
      render();
    });

    backToLibraryBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (deck && !confirmDiscardUnsaved(deck)) return;
      window.location.hash = "";
      state.selectedCardCode = null;
      resetTestHand();
      render();
    });

    newDeckButtonEl.addEventListener("click", async function() {
      if (needsDeckBrowserServer("New Deck")) return;

      const deckName = window.prompt("New deck name:", "NewDeck");
      if (deckName === null) return;

      const original = newDeckButtonEl.textContent;
      newDeckButtonEl.disabled = true;
      newDeckButtonEl.textContent = "Creating...";

      try {
        const response = await fetch("/api/decks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: deckName })
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) {
          throw new Error(payload.error || "Deck creation failed.");
        }

        APP_DATA.decks.push(prepareSavedDeck(payload.deck));
        sortDeckLibrary();
        librarySearchEl.value = "";
        state.deckQuery = "";
        openDeckEditor(payload.deck);
      } catch (error) {
        window.alert("Could not create deck file: " + error.message);
      } finally {
        newDeckButtonEl.disabled = false;
        newDeckButtonEl.textContent = original;
      }
    });

    updateCardDatabaseBtn.addEventListener("click", async function() {
      if (needsDeckBrowserServer("Update Card DB")) return;
      if (hasUnsavedChanges() && !window.confirm("Updating the card database reloads this page. Discard unsaved deck edits?")) {
        return;
      }
      if (!window.confirm("Download the latest card metadata from GitHub and reload the deck browser?")) {
        return;
      }

      const original = updateCardDatabaseBtn.textContent;
      updateCardDatabaseBtn.disabled = true;
      updateCardDatabaseBtn.textContent = "Updating...";

      try {
        const response = await fetch("/api/card-database/update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) {
          throw new Error(payload.error || "Update failed.");
        }
        window.alert("Card database updated: " + payload.cardCount + " cards loaded. Reloading now.");
        window.location.reload();
      } catch (error) {
        window.alert("Could not update card database: " + error.message);
        updateCardDatabaseBtn.disabled = false;
        updateCardDatabaseBtn.textContent = original;
      }
    });

    saveChangesBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      saveDeckChanges(deck);
    });

    exportDeckImageBtn.addEventListener("click", function() {
      exportDeckAsImage();
    });

    imageViewerCloseBtn.addEventListener("click", closeImageViewer);

    imageViewerEl.addEventListener("click", function(event) {
      if (event.target === imageViewerEl) closeImageViewer();
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape" && !imageViewerEl.classList.contains("hidden")) {
        closeImageViewer();
      }
    });

    testHandBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      openDeckTester(deck);
    });

    testerBackLibraryBtn.addEventListener("click", function() {
      window.location.hash = "";
      render();
    });

    testerEditDeckBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      window.location.hash = "deck/" + encodeURIComponent(deck.id);
      render();
    });

    testerNewShuffleBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      startTestHand(deck);
    });

    testerMulliganBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      startTestHand(deck);
    });

    testerDrawBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      drawTestCard(deck);
    });

    testerDeckStackEl.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      drawTestCard(deck);
    });

    testerDeckStackEl.addEventListener("contextmenu", function(event) {
      const deck = getSelectedDeck();
      if (!deck || !ensureTestHand(deck)) return;
      showTesterContextMenu(event, "Deck", [
        { label: "Draw one", onClick: function() { drawTestCard(deck); } },
        { label: "Reveal top", onClick: function() { revealTopDeck(deck); } },
        { label: "Reveal bottom", onClick: function() {
          if (!state.testHand.stack.length) return;
          const instance = state.testHand.stack.pop();
          state.testHand.reveal.push(setTesterFace(instance, true));
          state.testHand.openDrawer = "reveal";
          state.testHand.showRevealPanel = true;
          logTesterAction("Revealed " + getTesterCard(instance).name + " from bottom deck.");
          renderTester(deck);
        } },
        { label: "Mill top", onClick: function() { trashTopDeck(deck); } },
        { label: "Show deck stack", onClick: function() { openTesterStackViewer(deck, "stack"); } },
        { label: "Open deck drawer", onClick: function() { openTesterDrawer(deck, "stack"); } }
      ]);
    });

    testerHandSortEl.addEventListener("change", function() {
      const deck = getSelectedDeck();
      if (!deck || !ensureTestHand(deck)) return;
      state.testHand.handSort = testerHandSortEl.value;
      renderTester(deck);
    });

    testerRevealSecurityBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      revealSecurityCard(deck);
    });

    testerRevealAllSecurityBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      revealAllSecurity(deck);
    });

    testerToggleSecurityBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck || !ensureTestHand(deck)) return;
      state.testHand.showSecurity = !state.testHand.showSecurity;
      state.testHand.showSecurityPanel = true;
      renderTester(deck);
    });

    testerSecurityButtonEl.addEventListener("click", function(event) {
      event.stopPropagation();
      const deck = getSelectedDeck();
      if (!deck || !ensureTestHand(deck)) return;
      state.testHand.showSecurityPanel = !state.testHand.showSecurityPanel;
      renderTester(deck);
    });

    testerSecurityButtonEl.addEventListener("contextmenu", function(event) {
      const deck = getSelectedDeck();
      if (!deck || !ensureTestHand(deck)) return;
      showTesterContextMenu(event, "Security", [
        { label: "Reveal top security", onClick: function() { revealSecurityCard(deck); } },
        { label: "Reveal all security", onClick: function() { revealAllSecurity(deck); } },
        { label: "Open security stack", onClick: function() { openTesterStackViewer(deck, "security"); } },
        { separator: true },
        { label: "Take top security", onClick: function() { moveSecurityEdge(deck, "hand", false); } },
        { label: "Take bottom security", onClick: function() { moveSecurityEdge(deck, "hand", true); } },
        { label: "Trash top security", onClick: function() { moveSecurityEdge(deck, "trash", false); } },
        { label: "Trash bottom security", onClick: function() { moveSecurityEdge(deck, "trash", true); } },
        { label: "Shuffle security", onClick: function() { shuffleTesterSecurity(deck); } },
        { separator: true },
        { label: state.testHand.showSecurity ? "Hide security faces" : "Show security faces", onClick: function() { state.testHand.showSecurity = !state.testHand.showSecurity; state.testHand.showSecurityPanel = true; renderTester(deck); } }
      ]);
    });

    testerHatchEggBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      hatchEgg(deck);
    });

    testerRevealDeckBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      revealTopDeck(deck);
    });

    testerTrashDeckBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      trashTopDeck(deck);
    });

    testerOpenTrashBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      openTesterDrawer(deck, "trash");
    });

    testerTrashPileBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      openTesterDrawer(deck, "trash");
    });

    document.addEventListener("click", function(event) {
      if (!testerContextMenuEl.classList.contains("hidden") && !testerContextMenuEl.contains(event.target)) {
        hideTesterContextMenu();
      }
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        hideTesterContextMenu();
        closeTesterStackViewer();
      }
    });

    testerStackViewerCloseBtn.addEventListener("click", closeTesterStackViewer);
    testerStackViewerEl.addEventListener("click", function(event) {
      if (event.target === testerStackViewerEl) closeTesterStackViewer();
    });

    newTestHandBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      startTestHand(deck);
    });

    mulliganTestHandBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      startTestHand(deck);
    });

    drawTestCardBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      drawTestCard(deck);
    });

    resetTestHandBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      resetTestHand();
      if (deck) renderTestHand(deck);
    });

    renameDeckBtn.addEventListener("click", async function() {
      const deck = getSelectedDeck();
      if (!deck || needsDeckBrowserServer("Rename")) return;
      if (isDeckDirty(deck)) {
        window.alert("Save or discard unsaved changes before renaming this deck.");
        return;
      }

      const newName = window.prompt("Rename deck:", deck.name);
      if (newName === null) return;

      const original = renameDeckBtn.textContent;
      renameDeckBtn.disabled = true;
      renameDeckBtn.textContent = "Renaming...";

      try {
        const response = await fetch("/api/decks/rename", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileName: deck.fileName, name: newName })
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) {
          throw new Error(payload.error || "Rename failed.");
        }
        applySavedDeck(deck, payload.deck);
        sortDeckLibrary();
        state.selectedDeckId = deck.id;
        window.location.hash = "deck/" + encodeURIComponent(deck.id);
        render();
      } catch (error) {
        window.alert("Could not rename deck: " + error.message);
      } finally {
        renameDeckBtn.disabled = false;
        renameDeckBtn.textContent = original;
      }
    });

    duplicateDeckBtn.addEventListener("click", async function() {
      const deck = getSelectedDeck();
      if (!deck || needsDeckBrowserServer("Duplicate")) return;
      if (isDeckDirty(deck)) {
        window.alert("Save or discard unsaved changes before duplicating this deck.");
        return;
      }

      const newName = window.prompt("Duplicate deck as:", deck.name + " Copy");
      if (newName === null) return;

      const original = duplicateDeckBtn.textContent;
      duplicateDeckBtn.disabled = true;
      duplicateDeckBtn.textContent = "Duplicating...";

      try {
        const response = await fetch("/api/decks/duplicate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileName: deck.fileName, name: newName })
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) {
          throw new Error(payload.error || "Duplicate failed.");
        }
        APP_DATA.decks.push(prepareSavedDeck(payload.deck));
        sortDeckLibrary();
        librarySearchEl.value = "";
        state.deckQuery = "";
        openDeckEditor(payload.deck);
      } catch (error) {
        window.alert("Could not duplicate deck: " + error.message);
      } finally {
        duplicateDeckBtn.disabled = false;
        duplicateDeckBtn.textContent = original;
      }
    });

    deleteDeckBtn.addEventListener("click", async function() {
      const deck = getSelectedDeck();
      if (!deck || needsDeckBrowserServer("Delete")) return;
      if (isDeckDirty(deck)) {
        window.alert("Save or discard unsaved changes before deleting this deck.");
        return;
      }
      if (!window.confirm("Move '" + deck.name + "' to deleted_decks? This removes it from DCGO but keeps a recoverable copy.")) {
        return;
      }

      const original = deleteDeckBtn.textContent;
      deleteDeckBtn.disabled = true;
      deleteDeckBtn.textContent = "Deleting...";

      try {
        const response = await fetch("/api/decks/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fileName: deck.fileName })
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) {
          throw new Error(payload.error || "Delete failed.");
        }
        removeDeckFromLibrary(deck);
        resetTestHand();
        window.alert("Deck moved to: " + payload.deletedPath);
        window.location.hash = "";
        render();
      } catch (error) {
        window.alert("Could not delete deck: " + error.message);
      } finally {
        deleteDeckBtn.disabled = false;
        deleteDeckBtn.textContent = original;
      }
    });

    importClipboardBtn.addEventListener("click", async function() {
      const deck = getSelectedDeck();
      if (!deck) return;

      const original = importClipboardBtn.textContent;
      importClipboardBtn.disabled = true;
      importClipboardBtn.textContent = "Importing...";

      try {
        const clipboardText = await readClipboardTextWithFallback();
        const parsed = parseDeckImport(clipboardText);
        const importedCards = buildImportedCards(parsed);
        const importValidation = validateCards(importedCards);
        if (importValidation.errors.length) {
          window.alert(buildImportPreviewText(parsed, importedCards).replace("Replace the current deck list with this import?", "Import blocked until errors are fixed."));
          importClipboardBtn.textContent = original;
          importClipboardBtn.disabled = false;
          return;
        }
        if (!window.confirm(buildImportPreviewText(parsed, importedCards))) {
          importClipboardBtn.textContent = original;
          importClipboardBtn.disabled = false;
          return;
        }
        importParsedDeck(deck, parsed, importedCards);
        cardSearchEl.value = "";
        state.cardQuery = "";
        renderEditor();
        const stats = getDeckStats(deck);
        importClipboardBtn.textContent = "Imported " + stats.totalCount;
        window.setTimeout(function() {
          importClipboardBtn.textContent = original;
          importClipboardBtn.disabled = false;
        }, 1200);
      } catch (error) {
        window.alert("Import failed: " + error.message);
        importClipboardBtn.textContent = original;
        importClipboardBtn.disabled = false;
      }
    });

    copyDecklistBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      copyToClipboard(buildDeckExportText(deck), copyDecklistBtn);
    });

    copyFilenameBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      copyToClipboard(deck.fileName, copyFilenameBtn);
    });

    libraryGeneratedAtEl.textContent = GENERATED_AT;
    libraryManifestSourceEl.textContent = MANIFEST_SOURCE;
    libraryDeckRootEl.textContent = DECK_ROOT;

    window.addEventListener("hashchange", render);
    window.addEventListener("beforeunload", function(event) {
      if (!hasUnsavedChanges()) return;
      event.preventDefault();
      event.returnValue = "";
    });

    render();
  </script>
</body>
</html>
"""
)


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
