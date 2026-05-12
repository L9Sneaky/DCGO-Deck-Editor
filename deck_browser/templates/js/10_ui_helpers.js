
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
      return /^(Lv\.\d+|\d{3,6}|[A-Z][A-Z0-9 ./'-]{2,})$$/.test(word);
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
      const regex = /(\[([^\]]+)\]|＜([^＞]+)＞)/g;
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
