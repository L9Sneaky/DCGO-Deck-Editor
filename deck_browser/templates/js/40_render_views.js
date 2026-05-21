
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

    async function openDeckEditor(deck) {
      const currentDeck = getSelectedDeck();
      if (currentDeck && currentDeck.id !== deck.id && !(await confirmDiscardUnsaved(currentDeck))) {
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
        item.addEventListener("keydown", async function(event) {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          await openDeckEditor(deck);
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

        item.appendChild(cover);
        item.appendChild(body);
        libraryGridEl.appendChild(item);
      });
    }

    function renderHero(deck) {
      const stats = getDeckStats(deck);
      const validation = validateDeck(deck);
      heroTitleEl.textContent = deck.name;
      heroSubtitleEl.textContent = deck.fileName;

      const isInsights = state.deckInfoMode === "insights";
      deckInfoSummaryBtn.className = "info-tab" + (!isInsights ? " active" : "");
      deckInfoSummaryBtn.setAttribute("aria-selected", String(!isInsights));
      deckInfoInsightsBtn.className = "info-tab" + (isInsights ? " active" : "");
      deckInfoInsightsBtn.setAttribute("aria-selected", String(isInsights));
      deckInfoContentEl.innerHTML = "";

      if (isInsights) {
        renderDeckInsights(deck);
      } else {
        renderDeckSummary(deck, stats, validation);
      }

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

    function renderDeckSummary(deck, stats, validation) {
      const status = validation.errors.length ? "Invalid" : "Valid";
      const summary = document.createElement("div");
      summary.className = "info-summary-line" + (validation.errors.length ? " invalid" : " valid");
      summary.textContent = status + " · " + stats.mainCount + " main / " + stats.eggCount + " egg · " +
        stats.uniqueCount + " unique · " + stats.totalCount + " total";
      if (validation.errors.length || validation.warnings.length) {
        summary.title = validation.errors.concat(validation.warnings).join("\n");
      }

      const colorBar = createColorRatioBar(getColorProfile(deck.cards));
      colorBar.classList.add("compact-color-ratio");

      deckInfoContentEl.appendChild(summary);
      deckInfoContentEl.appendChild(colorBar);
    }

    function renderDeckInsights(deck) {
      const analytics = getDeckAnalytics(deck);
      const levels = Object.keys(analytics.levelCounts).map(Number).sort(function(a, b) { return a - b; });
      const playCosts = Object.keys(analytics.playCostCounts).map(Number).sort(function(a, b) { return a - b; });
      const colorProfile = getColorProfile(deck.cards);
      const maxLevelCount = levels.reduce(function(max, level) {
        return Math.max(max, analytics.levelCounts[level] || 0);
      }, 0);
      const maxPlayCostCount = playCosts.reduce(function(max, cost) {
        return Math.max(max, analytics.playCostCounts[cost] || 0);
      }, 0);
      const typeLine = document.createElement("div");
      typeLine.className = "info-summary-line";
      typeLine.textContent = "Type: " + analytics.typeCounts.Digimon + " Digimon · " +
        analytics.typeCounts.Option + " Option · " + analytics.typeCounts.Tamer + " Tamer";

      const colorLine = document.createElement("div");
      colorLine.className = "info-minor-line";
      colorLine.textContent = colorProfile.length ? "Colors: " + colorProfile.slice(0, 3).map(function(segment) {
        return segment.color + " " + segment.percent + "%";
      }).join(" · ") : "Colors: No color data";

      const costRow = document.createElement("div");
      costRow.className = "metric-histogram-row";
      const costLabel = document.createElement("span");
      costLabel.className = "metric-histogram-label";
      costLabel.textContent = "Cost";
      const costHistogram = document.createElement("span");
      costHistogram.className = "play-cost-histogram metric-histogram-bars";
      playCosts.forEach(function(cost) {
        const bar = document.createElement("span");
        bar.className = "play-cost-histogram-bar";
        bar.style.height = (maxPlayCostCount ? Math.max(10, Math.round((analytics.playCostCounts[cost] / maxPlayCostCount) * 34)) : 10) + "px";
        bar.title = cost + " memory: " + analytics.playCostCounts[cost];
        costHistogram.appendChild(bar);
      });
      costRow.appendChild(costLabel);
      costRow.appendChild(costHistogram);

      const levelRow = document.createElement("div");
      levelRow.className = "metric-histogram-row";
      const levelLabel = document.createElement("span");
      levelLabel.className = "metric-histogram-label";
      levelLabel.textContent = "Lv";
      const histogram = document.createElement("span");
      histogram.className = "level-histogram metric-histogram-bars";
      levels.forEach(function(level) {
        const bar = document.createElement("span");
        bar.className = "level-histogram-bar";
        bar.style.height = (maxLevelCount ? Math.max(10, Math.round((analytics.levelCounts[level] / maxLevelCount) * 34)) : 10) + "px";
        bar.title = "Lv" + level + ": " + analytics.levelCounts[level];
        histogram.appendChild(bar);
      });
      levelRow.appendChild(levelLabel);
      levelRow.appendChild(histogram);

      const toggle = document.createElement("button");
      toggle.className = "button info-breakdown-button";
      toggle.type = "button";
      toggle.textContent = state.insightsExpanded ? "Show Less ▴" : "Show More ▾";
      toggle.addEventListener("click", function() {
        state.insightsExpanded = !state.insightsExpanded;
        renderHero(deck);
      });

      deckInfoContentEl.appendChild(typeLine);
      deckInfoContentEl.appendChild(colorLine);
      deckInfoContentEl.appendChild(levelRow);
      deckInfoContentEl.appendChild(costRow);
      deckInfoContentEl.appendChild(toggle);
      if (state.insightsExpanded) {
        deckInfoContentEl.appendChild(createInsightsBreakdownPanel(analytics, colorProfile, levels, playCosts));
      }
    }

    function appendBreakdownList(parent, title, values, emptyText) {
      const section = document.createElement("div");
      section.className = "insights-breakdown-section";
      const heading = document.createElement("div");
      heading.className = "insights-breakdown-title";
      heading.textContent = title;
      const body = document.createElement("div");
      body.className = "insights-breakdown-values";
      body.textContent = values.length ? values.join(" · ") : emptyText;
      section.appendChild(heading);
      section.appendChild(body);
      parent.appendChild(section);
    }

    function appendPlayCostHistogram(parent, playCosts, counts) {
      const section = document.createElement("div");
      section.className = "insights-breakdown-section";
      const heading = document.createElement("div");
      heading.className = "insights-breakdown-title";
      heading.textContent = "Play cost curve";
      const body = document.createElement("div");
      body.className = "play-cost-histogram insights-play-cost-histogram";
      const maxCount = playCosts.reduce(function(max, cost) {
        return Math.max(max, counts[cost] || 0);
      }, 0);

      playCosts.forEach(function(cost) {
        const bar = document.createElement("span");
        bar.className = "play-cost-histogram-bar";
        bar.style.height = (maxCount ? Math.max(10, Math.round((counts[cost] / maxCount) * 34)) : 10) + "px";
        bar.title = cost + " memory: " + counts[cost];
        body.appendChild(bar);
      });

      section.appendChild(heading);
      section.appendChild(body);
      parent.appendChild(section);
    }

    function sortedEntries(counts) {
      return Object.keys(counts).map(function(key) {
        return { key: key, count: counts[key] };
      }).sort(function(a, b) {
        if (b.count !== a.count) return b.count - a.count;
        return String(a.key).localeCompare(String(b.key));
      });
    }

    function createInsightsBreakdownPanel(analytics, colorProfile, levels, playCosts) {
      const panel = document.createElement("div");
      panel.className = "insights-breakdown-panel";

      appendBreakdownList(panel, "Type breakdown", [
        analytics.typeCounts.Digimon + " Digimon",
        analytics.typeCounts.Option + " Option",
        analytics.typeCounts.Tamer + " Tamer"
      ], "No type data");

      appendBreakdownList(panel, "Level breakdown", levels.map(function(level) {
        return "Lv" + level + " [" + analytics.levelCounts[level] + "]";
      }), "No level data");

      appendPlayCostHistogram(panel, playCosts, analytics.playCostCounts);

      appendBreakdownList(panel, "Color breakdown", colorProfile.map(function(segment) {
        return segment.color + " " + segment.percent + "%";
      }), "No color data");

      appendBreakdownList(panel, "Trait highlights", sortedEntries(analytics.traitCounts).slice(0, 5).map(function(item) {
        return item.key + " " + item.count;
      }), "No trait data");

      appendBreakdownList(panel, "Block highlights", sortedEntries(analytics.blockCounts).slice(0, 5).map(function(item) {
        return item.key + " " + item.count;
      }), "No block data");

      return panel;
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
      appendTesterStackLinkedDetails();
      appendTesterStackInheritedDetails();
    }

    function appendTesterStackLinkedDetails() {
      const context = state.selectedTesterStack;
      if (!context || (context.sourceZone !== "field" && context.sourceZone !== "breeding")) return;
      if (typeof getTesterSourceArray !== "function" || typeof getTesterLinkedCards !== "function") return;
      const source = getTesterSourceArray(context.sourceZone === "field"
        ? { zone: "field", fieldIndex: context.fieldIndex, index: 0 }
        : { zone: "breeding", index: 0 });
      if (!source || !source.length || context.index !== source.length - 1) return;

      const linkedCards = getTesterLinkedCards(source);
      if (!linkedCards.length) return;
      const totalDp = typeof getTotalLinkedDpBonus === "function" ? getTotalLinkedDpBonus(source) : 0;

      const block = document.createElement("section");
      block.className = "details-effect-card tester-linked-section sim-linked-section";
      const header = document.createElement("div");
      header.className = "details-effect-header tester-linked-section-header sim-linked-section-header";
      const title = document.createElement("span");
      title.className = "tester-linked-title";
      title.textContent = "LINKED CARDS";
      const icon = document.createElement("span");
      icon.className = "tester-linked-icon";
      icon.textContent = "🔗";
      title.appendChild(icon);
      const dp = document.createElement("span");
      dp.className = "tester-linked-dp-bonus sim-linked-dp-bonus";
      dp.textContent = "+ " + totalDp + " DP";
      header.appendChild(title);
      header.appendChild(dp);
      block.appendChild(header);

      linkedCards.slice().reverse().forEach(function(item) {
        const card = getTesterCard(item.instance);
        if (!card) return;
        const sourceLabel = document.createElement("div");
        sourceLabel.className = "details-source-label";
        sourceLabel.textContent = card.name + " · " + card.code;
        block.appendChild(sourceLabel);
        const text = document.createElement("div");
        text.className = "details-effect-text";
        const effect = (typeof getTesterLinkEffect === "function" ? getTesterLinkEffect(card) : "") ||
          (((card.effectSections || []).find(function(section) { return section.label === "Link Effect"; }) || {}).text || "");
        appendHighlightedText(text, effect || "No linked effect text was available for this card.");
        block.appendChild(text);
      });

      const footer = testerDetailsBodyEl.querySelector(".details-footer");
      if (footer) {
        testerDetailsBodyEl.insertBefore(block, footer);
      } else {
        testerDetailsBodyEl.appendChild(block);
      }
    }

    function appendTesterStackInheritedDetails() {
      const context = state.selectedTesterStack;
      if (!context || (context.sourceZone !== "field" && context.sourceZone !== "breeding")) return;
      if (typeof getTesterSourceArray !== "function" || typeof getTesterDigivolutionCards !== "function") return;
      const source = getTesterSourceArray(context.sourceZone === "field"
        ? { zone: "field", fieldIndex: context.fieldIndex, index: 0 }
        : { zone: "breeding", index: 0 });
      if (!source || context.index <= 0) return;

      const sourceCards = getTesterDigivolutionCards(source).filter(function(item) {
        return item.index < context.index;
      }).slice().reverse().map(function(item) {
        return getTesterCard(item.instance);
      }).filter(Boolean);
      const inheritedSections = [];
      sourceCards.forEach(function(card) {
        (card.effectSections || []).forEach(function(section) {
          if (!section || !section.text) return;
          if (section.label !== "Inherited" && section.label !== "Security") return;
          inheritedSections.push({
            card: card,
            text: section.text
          });
        });
      });
      if (!inheritedSections.length) return;

      const block = document.createElement("section");
      block.className = "details-effect-card tester-stack-inherited-card";
      const header = document.createElement("div");
      header.className = "details-effect-header";
      header.textContent = "DIGIVOLUTION CARDS ↙";
      block.appendChild(header);

      inheritedSections.forEach(function(item) {
        const sourceLabel = document.createElement("div");
        sourceLabel.className = "details-source-label";
        sourceLabel.textContent = item.card.name + " · " + item.card.code;
        block.appendChild(sourceLabel);
        const text = document.createElement("div");
        text.className = "details-effect-text";
        appendHighlightedText(text, item.text);
        block.appendChild(text);
      });

      const footer = testerDetailsBodyEl.querySelector(".details-footer");
      if (footer) {
        testerDetailsBodyEl.insertBefore(block, footer);
      } else {
        testerDetailsBodyEl.appendChild(block);
      }
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
      const words = String(text || "Card").trim().split(/\s+/).slice(0, 2);
      wrap.textContent = words.join("\n");
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
