    const COLLECTION_PAGE_SIZE = 120;

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

    function findCatalogCardByCode(code) {
      return APP_DATA.cardCatalog.find(function(card) {
        return card.code === code;
      }) || null;
    }

    function getFilteredCollectionCards() {
      const filters = readCatalogFilters();
      if (!hasActiveCatalogFilters(filters)) return APP_DATA.cardCatalog;
      return APP_DATA.cardCatalog.filter(function(card) {
        return cardMatchesCatalogFilters(card, filters);
      });
    }

    function compareCollectionCards(left, right) {
      const leftNumber = String(left.cardNumber || left.code || "");
      const rightNumber = String(right.cardNumber || right.code || "");
      const numberCompare = leftNumber.localeCompare(rightNumber);
      if (numberCompare !== 0) return numberCompare;
      const codeCompare = String(left.code || "").localeCompare(String(right.code || ""));
      if (codeCompare !== 0) return codeCompare;
      return String(left.name || "").localeCompare(String(right.name || ""));
    }

    function sortCollectionCards(cards) {
      return cards.slice().sort(compareCollectionCards);
    }

    function getFilteredCollectionWantedCards() {
      const filters = readCatalogFilters();
      return sortCollectionCards(getCollectionWantedCards().map(function(item) {
        return item.card;
      }).filter(function(card) {
        return !hasActiveCatalogFilters(filters) || cardMatchesCatalogFilters(card, filters);
      }));
    }

    function getVisibleCollectionCards() {
      if (state.collection.wantedOnly) return getFilteredCollectionWantedCards();
      return getFilteredCollectionCards().slice(0, state.collection.visibleLimit);
    }

    function resetCollectionVisibleLimit() {
      state.collection.visibleLimit = COLLECTION_PAGE_SIZE;
    }

    function collectionCodeFor(cardOrCode) {
      return typeof cardOrCode === "string" ? cardOrCode : String(cardOrCode && cardOrCode.code || "");
    }

    function getCollectionWantedItem(cardOrCode) {
      const code = collectionCodeFor(cardOrCode);
      return state.collection.wanted.find(function(item) {
        return item.code === code;
      }) || null;
    }

    function getCollectionWantedCount(cardOrCode) {
      const item = getCollectionWantedItem(cardOrCode);
      return item ? Number(item.count) || 0 : 0;
    }

    function setCollectionWantedCount(cardOrCode, count, options) {
      let code = collectionCodeFor(cardOrCode);
      const catalogCard = findCatalogCardByCode(code) || CARD_BY_CODE[String(code || "").trim().toUpperCase()];
      if (!code || !catalogCard) return;
      code = catalogCard.code;

      const nextCount = Math.max(0, Math.floor(Number(count) || 0));
      const existing = getCollectionWantedItem(code);
      if (nextCount <= 0) {
        state.collection.wanted = state.collection.wanted.filter(function(item) {
          return item.code !== code;
        });
      } else if (existing) {
        existing.count = nextCount;
      } else {
        state.collection.wanted.push({ code: code, count: nextCount });
      }
      state.selectedCardCode = code;
      if (!options || options.persist !== false) persistCollectionState();
    }

    function addCardToWantedList(card, amount) {
      setCollectionWantedCount(card, getCollectionWantedCount(card) + (Number(amount) || 1));
    }

    function removeCardFromWantedList(cardOrCode, amount) {
      setCollectionWantedCount(cardOrCode, getCollectionWantedCount(cardOrCode) - (Number(amount) || 1));
    }

    function clearCollectionWantedList() {
      state.collection.wanted = [];
      clearCollectionPersistedState();
    }

    function getCollectionWantedCards() {
      const wantedCards = state.collection.wanted.map(function(item) {
        const card = findCatalogCardByCode(item.code);
        if (!card) return null;
        return {
          card: card,
          count: Math.max(0, Math.floor(Number(item.count) || 0))
        };
      }).filter(function(item) {
        return item && item.count > 0;
      });
      return wantedCards.sort(function(left, right) {
        return compareCollectionCards(left.card, right.card);
      });
    }

    function normalizeCollectionImportRef(value) {
      return String(value || "")
        .trim()
        .replace(/^["']|["']$$/g, "")
        .replace(/[],;]+$$/g, "")
        .toUpperCase();
    }

    function normalizeCollectionName(value) {
      return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
    }

    function collectionImportCodeTokens(value) {
      return String(value || "").match(/[A-Za-z0-9]+-[A-Za-z0-9]+(?:_[A-Za-z0-9]+)?/g) || [];
    }

    function preferredCollectionNumberMatch(matches) {
      return matches.find(function(card) { return !card.isAltArt; }) || matches[0] || null;
    }

    function findCollectionImportCardByRef(ref) {
      const rawRef = String(ref || "").trim().replace(/^["']|["']$$/g, "").replace(/[],;]+$$/g, "");
      const checked = {};
      const candidates = [rawRef].concat(collectionImportCodeTokens(rawRef));

      for (let index = 0; index < candidates.length; index += 1) {
        const key = normalizeCollectionImportRef(candidates[index]);
        if (!key || checked[key]) continue;
        checked[key] = true;
        if (CARD_BY_CODE[key]) return { card: CARD_BY_CODE[key], warning: "" };

        const numberMatches = CARDS_BY_NUMBER[key] || [];
        if (numberMatches.length) {
          const card = preferredCollectionNumberMatch(numberMatches);
          return {
            card: card,
            warning: numberMatches.length > 1 ? key + " matched " + (card.cardNumber || card.code) + "; alternate versions were ignored." : ""
          };
        }
      }

      const nameKey = normalizeCollectionName(rawRef);
      if (!nameKey) return { card: null, warning: "", ambiguous: false };
      const nameMatches = APP_DATA.cardCatalog.filter(function(card) {
        return normalizeCollectionName(card.name) === nameKey || normalizeCollectionName(card.printedName) === nameKey;
      });
      if (nameMatches.length === 1) return { card: nameMatches[0], warning: "" };
      if (nameMatches.length > 1) return { card: null, warning: "", ambiguous: true };
      return { card: null, warning: "", ambiguous: false };
    }

    function parseCollectionImportLine(line) {
      const cleaned = String(line || "").replace(/\s*(\/\/|#).*$$/, "").trim();
      let match;
      if (!cleaned) return null;

      match = cleaned.match(/^(\d+)\s*x?\s+(.+)$$/i);
      if (match) return { count: Number(match[1]), ref: match[2].trim(), raw: cleaned };

      match = cleaned.match(/^(.+?)\s+x\s*(\d+)$$/i);
      if (match) return { count: Number(match[2]), ref: match[1].trim(), raw: cleaned };

      match = cleaned.match(/^(.+?)\s+(\d+)$$/);
      if (match) return { count: Number(match[2]), ref: match[1].trim(), raw: cleaned };

      return { count: 1, ref: cleaned, raw: cleaned };
    }

    function parseCollectionWantedImport(rawText) {
      const text = String(rawText || "").trim();
      if (!text) throw new Error("Import text is empty.");

      const grouped = {};
      const skipped = [];
      const ambiguous = [];
      const warnings = [];
      let parsedLines = 0;

      text.split(/\r?\n/).forEach(function(line) {
        const parsed = parseCollectionImportLine(line);
        if (!parsed) return;
        parsedLines += 1;
        if (!Number.isFinite(parsed.count) || parsed.count <= 0) {
          skipped.push(parsed.raw);
          return;
        }

        const match = findCollectionImportCardByRef(parsed.ref);
        if (match.ambiguous) {
          ambiguous.push(parsed.raw);
          return;
        }
        if (!match.card) {
          skipped.push(parsed.raw);
          return;
        }
        if (match.warning) warnings.push(match.warning);
        grouped[match.card.code] = (grouped[match.card.code] || 0) + Math.floor(parsed.count);
      });

      const entries = Object.keys(grouped).map(function(code) {
        return { code: code, count: grouped[code] };
      }).filter(function(item) {
        return item.count > 0;
      });

      if (!entries.length) {
        throw new Error("No matching card codes, card numbers, or unambiguous names were found.");
      }

      return {
        entries: entries,
        skipped: skipped,
        ambiguous: ambiguous,
        warnings: warnings,
        parsedLines: parsedLines
      };
    }

    function applyCollectionWantedImport(parsedImport, mode) {
      if (mode === "replace") {
        state.collection.wanted = [];
      }

      parsedImport.entries.forEach(function(entry) {
        const nextCount = mode === "replace"
          ? entry.count
          : getCollectionWantedCount(entry.code) + entry.count;
        setCollectionWantedCount(entry.code, nextCount, { persist: false });
      });

      persistCollectionState();
      if (parsedImport.entries.length) state.selectedCardCode = parsedImport.entries[0].code;
    }

    function buildCollectionImportSummary(parsedImport, mode) {
      const total = parsedImport.entries.reduce(function(sum, item) {
        return sum + item.count;
      }, 0);
      const lines = [
        (mode === "replace" ? "Replace" : "Add") + " " + total + " wanted copies across " + parsedImport.entries.length + " unique cards."
      ];

      if (parsedImport.ambiguous.length) {
        lines.push("", "Ambiguous names skipped:");
        parsedImport.ambiguous.slice(0, 8).forEach(function(item) { lines.push("- " + item); });
      }

      if (parsedImport.skipped.length) {
        lines.push("", "Skipped:");
        parsedImport.skipped.slice(0, 8).forEach(function(item) { lines.push("- " + item); });
      }

      if (parsedImport.warnings.length) {
        lines.push("", "Warnings:");
        parsedImport.warnings.slice(0, 8).forEach(function(item) { lines.push("- " + item); });
      }

      return lines.join("\n");
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

    function getDeckAnalytics(deck) {
      const typeCounts = { Digimon: 0, Option: 0, Tamer: 0 };
      const levelCounts = {};
      const playCostCounts = {};
      const traitCounts = {};
      const blockCounts = {};

      deck.cards.forEach(function(card) {
        const count = Number(card.count) || 0;
        if (Object.prototype.hasOwnProperty.call(typeCounts, card.type)) {
          typeCounts[card.type] += count;
        }
        if (card.level !== null && card.level !== undefined) {
          const level = Number(card.level);
          if (!Number.isNaN(level)) levelCounts[level] = (levelCounts[level] || 0) + count;
        }
        if (card.type !== "Digi-Egg" && card.playCost !== null && card.playCost !== undefined) {
          const playCost = Number(card.playCost);
          if (!Number.isNaN(playCost)) playCostCounts[playCost] = (playCostCounts[playCost] || 0) + count;
        }
        (card.digitype || []).forEach(function(trait) {
          traitCounts[trait] = (traitCounts[trait] || 0) + count;
        });
        if (card.block) blockCounts[card.block] = (blockCounts[card.block] || 0) + count;
      });

      return {
        typeCounts: typeCounts,
        levelCounts: levelCounts,
        playCostCounts: playCostCounts,
        traitCounts: traitCounts,
        blockCounts: blockCounts
      };
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
      const typeOrder = { "Digi-Egg": 0, "Digimon": 1, "Tamer": 2, "Option": 3 };
      deck.cards.sort(function(a, b) {
        const typeA = Object.prototype.hasOwnProperty.call(typeOrder, a.type) ? typeOrder[a.type] : 9;
        const typeB = Object.prototype.hasOwnProperty.call(typeOrder, b.type) ? typeOrder[b.type] : 9;
        if (typeA !== typeB) return typeA - typeB;
        const levelA = a.level !== null && a.level !== undefined ? a.level : -1;
        const levelB = b.level !== null && b.level !== undefined ? b.level : -1;
        if (a.type === "Digimon" && levelA !== levelB) return levelA - levelB;
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
      }).join("\n");
      return [
        "Name: " + deck.name,
        "Key Card: " + (deck.keyCard || "-1"),
        "Sort Index: " + (deck.sortIndex || "0"),
        "",
        "// DeckList",
        "",
        body
      ].join("\n");
    }

    function isDeckDirty(deck) {
      if (!deck) return false;
      return buildDeckExportText(deck) !== (deck.savedExportText || "");
    }

    function hasUnsavedChanges() {
      return APP_DATA.decks.some(function(deck) { return isDeckDirty(deck); });
    }

    async function confirmDiscardUnsaved(deck) {
      if (!isDeckDirty(deck)) return true;
      return showConfirm("Unsaved changes", "This deck has unsaved changes. Discard them and continue?", {
        confirmLabel: "Discard",
        danger: true
      });
    }

    function applySavedDeck(deck, savedDeck) {
      Object.keys(savedDeck).forEach(function(key) {
        deck[key] = savedDeck[key];
      });
      deck.savedExportText = savedDeck.exportText || buildDeckExportText(deck);
    }

    function needsDeckBrowserServer(actionName) {
      if (window.location.protocol !== "file:") return false;
      showMessage("Local server required", actionName + " needs the local deck browser server. Open it with Open Deck Browser.command.");
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
      validationPanelEl.className = "validation-panel hidden";
      validationPanelEl.innerHTML = "";
    }
