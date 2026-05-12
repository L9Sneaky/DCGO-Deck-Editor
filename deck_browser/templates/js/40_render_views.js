
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
      const words = String(text || "Card").trim().split(/\s+/).slice(0, 2);
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
