    const APP_DATA = $app_data;
    const GENERATED_AT = $generated_at;
    const MANIFEST_SOURCE = $manifest_source;
    const DECK_ROOT = $deck_root;
    const APP_VERSION = $app_version;
    const COLLECTION_STORAGE_KEY = "dcgo.collectionWantedList.v1";
    const SETTINGS_STORAGE_KEY = "dcgo.deckBrowserSettings.v1";

    const libraryViewEl = document.getElementById("library-view");
    const revealsViewEl = document.getElementById("reveals-view");
    const editorViewEl = document.getElementById("editor-view");
    const testViewEl = document.getElementById("test-view");
    const libraryGridEl = document.getElementById("library-grid");
    const librarySearchEl = document.getElementById("library-search");
    const librarySummaryEl = document.getElementById("library-summary");
    const libraryGeneratedAtEl = document.getElementById("library-generated-at-label");
    const libraryManifestSourceEl = document.getElementById("library-manifest-source-label");
    const libraryDeckRootEl = document.getElementById("library-deck-root-label");
    const appVersionEl = document.getElementById("app-version-label");
    const updateStatusLabelEl = document.getElementById("update-status-label");
    const newDeckButtonEl = document.getElementById("new-deck-button");
    const openCollectionBtn = document.getElementById("open-collection");
    const openRevealsBtn = document.getElementById("open-reveals");
    const updateCardDatabaseBtn = document.getElementById("update-card-database");
    const checkAppUpdateBtn = document.getElementById("check-app-update");
    const installAppUpdateBtn = document.getElementById("install-app-update");
    const revealsGridEl = document.getElementById("reveals-grid");
    const revealsSummaryEl = document.getElementById("reveals-summary");
    const revealsSourceEl = document.getElementById("reveals-source");
    const revealsRefreshBtn = document.getElementById("reveals-refresh");
    const revealsBackLibraryBtn = document.getElementById("reveals-back-library");
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
    const deckInfoContentEl = document.getElementById("deck-info-content");
    const deckInfoSummaryBtn = document.getElementById("deck-info-summary");
    const deckInfoInsightsBtn = document.getElementById("deck-info-insights");
    const heroChipsEl = document.getElementById("hero-chips");
    const cardsGridEl = document.getElementById("cards-grid");
    const detailsBodyEl = document.getElementById("details-body");
    const cardSearchSummaryEl = document.getElementById("card-search-summary");
    const backToLibraryBtn = document.getElementById("back-to-library");
    const saveChangesBtn = document.getElementById("save-changes");
    const moreActionsToggleBtn = document.getElementById("more-actions-toggle");
    const moreActionsMenuEl = document.getElementById("more-actions-menu");
    const includeRevealsDeckEditorBtn = document.getElementById("include-reveals-deck-editor");
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
    const deckEditorHeroEl = document.getElementById("deck-editor-hero");
    const deckEditorToolbarEl = document.getElementById("deck-editor-toolbar");
    const deckEditorCardsPanelEl = document.getElementById("deck-editor-cards-panel");
    const collectionMainEl = document.getElementById("collection-main");
    const collectionGridEl = document.getElementById("collection-grid");
    const collectionSummaryEl = document.getElementById("collection-summary");
    const collectionWantedTotalEl = document.getElementById("collection-wanted-total");
    const collectionWantedUniqueEl = document.getElementById("collection-wanted-unique");
    const collectionEditEnabledEl = document.getElementById("collection-edit-enabled");
    const collectionShortcutHintEl = document.getElementById("collection-shortcut-hint");
    const collectionWantedOnlyBtn = document.getElementById("collection-wanted-only");
    const collectionImportListBtn = document.getElementById("collection-import-list");
    const collectionImportFileEl = document.getElementById("collection-import-file");
    const collectionExportImageBtn = document.getElementById("collection-export-image");
    const collectionBackLibraryBtn = document.getElementById("collection-back-library");
    const collectionClearWantedBtn = document.getElementById("collection-clear-wanted");
    const testerDetailsBodyEl = document.getElementById("tester-details-body");
    const testerTitleEl = document.getElementById("tester-title");
    const testerSubtitleEl = document.getElementById("tester-subtitle");
    const testerSessionMetaEl = document.getElementById("tester-session-meta");
    const testerStatsGridEl = document.getElementById("tester-stats-grid");
    const testerDeckPreviewEl = document.getElementById("tester-deck-preview");
    const testerPileListEl = document.getElementById("tester-pile-list");
    const testerHandGridEl = document.getElementById("tester-hand-grid");
    const testerHandMetaEl = document.getElementById("tester-hand-meta");
    const testerHandSortEl = document.getElementById("tester-hand-sort");
    const testerDeckStackEl = document.getElementById("tester-deck-stack");
    const testerDeckCountEl = document.getElementById("tester-deck-count");
    const testerDeckBottomDropEl = document.getElementById("tester-deck-bottom-drop");
    const testerEggStackEl = document.getElementById("tester-egg-stack");
    const testerEggCountEl = document.getElementById("tester-egg-count");
    const testerEggBottomDropEl = document.getElementById("tester-egg-bottom-drop");
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
    const testerUnsuspendBtn = document.getElementById("tester-unsuspend");
    const testerDrawBtn = document.getElementById("tester-draw");
    const testerRevealSecurityBtn = document.getElementById("tester-reveal-security");
    const testerRevealAllSecurityBtn = document.getElementById("tester-reveal-all-security");
    const testerToggleSecurityBtn = document.getElementById("tester-toggle-security");
    const testerHatchEggBtn = document.getElementById("tester-hatch-egg");
    const testerRevealDeckBtn = document.getElementById("tester-reveal-deck");
    const testerTrashDeckBtn = document.getElementById("tester-trash-deck");
    const testerSecureDeckBtn = document.getElementById("tester-secure-deck");
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
    const appDialogEl = document.getElementById("app-dialog");
    const appDialogTitleEl = document.getElementById("app-dialog-title");
    const appDialogMessageEl = document.getElementById("app-dialog-message");
    const appDialogInputEl = document.getElementById("app-dialog-input");
    const appDialogActionsEl = document.getElementById("app-dialog-actions");

    const COLOR_MAP = {
      "Red": "#f25757",
      "Blue": "#53a8ff",
      "Yellow": "#ffca4f",
      "Green": "#55cc7a",
      "Purple": "#9d73ff",
      "Black": "#8f9ca8",
      "White": "#e7eef7"
    };

    const REVEAL_COLLECTION_CARDS = Array.isArray(APP_DATA.revealCollectionCards) ? APP_DATA.revealCollectionCards : [];
    const COLLECTION_CARD_POOL = APP_DATA.cardCatalog.concat(REVEAL_COLLECTION_CARDS);
    const EDITOR_CARD_POOL = APP_DATA.cardCatalog.slice();
    const CARD_BY_CODE = {};
    const CARDS_BY_NUMBER = {};
    const COLLECTION_CARD_BY_CODE = {};
    const COLLECTION_CARDS_BY_NUMBER = {};
    const TRAIT_WORDS = {};
    APP_DATA.cardCatalog.forEach(function(card) {
      CARD_BY_CODE[String(card.code).toUpperCase()] = card;
      const numberKey = String(card.cardNumber || card.code).toUpperCase();
      if (!CARDS_BY_NUMBER[numberKey]) CARDS_BY_NUMBER[numberKey] = [];
      CARDS_BY_NUMBER[numberKey].push(card);
    });
    function indexCollectionCard(card) {
      COLLECTION_CARD_BY_CODE[String(card.code).toUpperCase()] = card;
      const numberKey = String(card.cardNumber || card.code).toUpperCase();
      if (!COLLECTION_CARDS_BY_NUMBER[numberKey]) COLLECTION_CARDS_BY_NUMBER[numberKey] = [];
      COLLECTION_CARDS_BY_NUMBER[numberKey].push(card);
      (card.digitype || []).forEach(function(trait) { TRAIT_WORDS[String(trait)] = true; });
      [card.stage, card.attribute].forEach(function(value) {
        if (value) TRAIT_WORDS[String(value)] = true;
      });
    }

    COLLECTION_CARD_POOL.forEach(indexCollectionCard);

    function rebuildCollectionCardIndexes() {
      Object.keys(COLLECTION_CARD_BY_CODE).forEach(function(key) { delete COLLECTION_CARD_BY_CODE[key]; });
      Object.keys(COLLECTION_CARDS_BY_NUMBER).forEach(function(key) { delete COLLECTION_CARDS_BY_NUMBER[key]; });
      COLLECTION_CARD_POOL.forEach(indexCollectionCard);
    }

    function replaceRevealCollectionCards(cards) {
      const nextCards = Array.isArray(cards) ? cards : [];
      REVEAL_COLLECTION_CARDS.splice(0, REVEAL_COLLECTION_CARDS.length);
      nextCards.forEach(function(card) { REVEAL_COLLECTION_CARDS.push(card); });
      COLLECTION_CARD_POOL.splice(APP_DATA.cardCatalog.length, COLLECTION_CARD_POOL.length - APP_DATA.cardCatalog.length);
      nextCards.forEach(function(card) { COLLECTION_CARD_POOL.push(card); });
      APP_DATA.revealCollectionCards = REVEAL_COLLECTION_CARDS;
      rebuildCollectionCardIndexes();
      rebuildEditorCardPool();
    }

    function normalizeAppSettings(payload) {
      const source = payload && typeof payload === "object" ? payload : {};
      return {
        includeRevealsInDeckEditor: Boolean(source.includeRevealsInDeckEditor)
      };
    }

    function initialAppSettings() {
      const settings = normalizeAppSettings(APP_DATA.appSettings || {});
      if (window.location.protocol === "file:") {
        try {
          const raw = window.localStorage && window.localStorage.getItem(SETTINGS_STORAGE_KEY);
          if (raw) return normalizeAppSettings(JSON.parse(raw));
        } catch (error) {
          // Fall back to settings embedded in the generated page.
        }
      }
      return settings;
    }

    function rebuildEditorCardPool() {
      EDITOR_CARD_POOL.splice(0, EDITOR_CARD_POOL.length);
      APP_DATA.cardCatalog.forEach(function(card) { EDITOR_CARD_POOL.push(card); });
      if (state && state.editor && state.editor.includeReveals) {
        REVEAL_COLLECTION_CARDS.forEach(function(card) { EDITOR_CARD_POOL.push(card); });
      }
    }

    APP_DATA.decks.forEach(function(deck) {
      deck.savedExportText = deck.exportText || "";
    });

    const initialSettings = initialAppSettings();

    const state = {
      view: "library",
      deckQuery: "",
      cardQuery: "",
      deckInfoMode: "summary",
      insightsExpanded: false,
      selectedDeckId: APP_DATA.decks.length ? APP_DATA.decks[0].id : null,
      selectedCardCode: null,
      editor: {
        includeReveals: initialSettings.includeRevealsInDeckEditor
      },
      collection: {
        visibleLimit: 120,
        editEnabled: false,
        wantedOnly: false,
        wanted: []
      },
      reveals: {
        loaded: false,
        loading: false,
        error: "",
        source: "",
        lastChecked: "",
        items: [],
        errors: []
      },
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

    rebuildEditorCardPool();

    function currentAppSettings() {
      return {
        includeRevealsInDeckEditor: Boolean(state.editor.includeReveals)
      };
    }

    function renderIncludeRevealsToggle() {
      if (!includeRevealsDeckEditorBtn) return;
      const enabled = Boolean(state.editor.includeReveals);
      includeRevealsDeckEditorBtn.textContent = "Include Reveals: " + (enabled ? "On" : "Off");
      includeRevealsDeckEditorBtn.setAttribute("aria-checked", String(enabled));
      includeRevealsDeckEditorBtn.title = enabled
        ? "Reveal cards are included in deck editor search."
        : "Reveal cards are hidden from deck editor search.";
    }

    function persistAppSettings() {
      const settings = currentAppSettings();
      APP_DATA.appSettings = settings;
      try {
        if (window.localStorage) {
          window.localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
        }
      } catch (error) {
        // Settings persistence should never block deck editing.
      }
      if (window.location.protocol !== "file:") {
        fetch("/api/settings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(settings)
        }).catch(function() {
          // The embedded settings/localStorage fallback will keep the current session usable.
        });
      }
    }

    async function restoreAppSettingsFromServer() {
      if (window.location.protocol === "file:") return false;
      try {
        const response = await fetch("/api/settings", { cache: "no-store" });
        if (!response.ok) return false;
        const settings = normalizeAppSettings(await response.json());
        state.editor.includeReveals = settings.includeRevealsInDeckEditor;
        APP_DATA.appSettings = settings;
        rebuildEditorCardPool();
        renderIncludeRevealsToggle();
        render();
        return true;
      } catch (error) {
        return false;
      }
    }

    function normalizeStoredCollectionWanted(payload) {
      const rawEntries = Array.isArray(payload)
        ? payload
        : Array.isArray(payload && payload.wanted)
          ? payload.wanted
          : [];
      const grouped = {};
      rawEntries.forEach(function(item) {
        const rawCode = typeof item === "string" ? item : item && item.code;
        const card = COLLECTION_CARD_BY_CODE[String(rawCode || "").trim().toUpperCase()];
        const count = typeof item === "string" ? 1 : Math.max(0, Math.floor(Number(item && item.count) || 0));
        if (!card || count <= 0) return;
        grouped[card.code] = (grouped[card.code] || 0) + count;
      });
      return Object.keys(grouped).map(function(code) {
        return { code: code, count: grouped[code] };
      });
    }

    function buildCollectionWantedText() {
      const lines = getCollectionWantedCards().map(function(item) {
        return item.count + " " + item.card.code;
      });
      return lines.length ? lines.join("\n") + "\n" : "";
    }

    function restoreCollectionState() {
      try {
        const raw = window.localStorage && window.localStorage.getItem(COLLECTION_STORAGE_KEY);
        if (!raw) return;
        state.collection.wanted = normalizeStoredCollectionWanted(JSON.parse(raw));
      } catch (error) {
        state.collection.wanted = [];
      }
    }

    let collectionPersistTimer = null;

    function saveCollectionWantedTextToServer() {
      if (window.location.protocol === "file:") return;
      const text = buildCollectionWantedText();
      fetch("/api/collection-wanted", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text })
      }).catch(function() {
        // localStorage remains the fallback when the local server is unavailable.
      });
    }

    function scheduleCollectionWantedTextSave() {
      if (collectionPersistTimer) window.clearTimeout(collectionPersistTimer);
      collectionPersistTimer = window.setTimeout(saveCollectionWantedTextToServer, 180);
    }

    function persistCollectionState() {
      try {
        const wanted = normalizeStoredCollectionWanted(state.collection.wanted);
        state.collection.wanted = wanted;
        if (window.localStorage) {
          if (!wanted.length) {
            window.localStorage.removeItem(COLLECTION_STORAGE_KEY);
          } else {
            window.localStorage.setItem(COLLECTION_STORAGE_KEY, JSON.stringify({ wanted: wanted }));
          }
        }
      } catch (error) {
        // Collection persistence should never affect deck editing.
      }
      scheduleCollectionWantedTextSave();
    }

    function clearCollectionPersistedState() {
      try {
        if (window.localStorage) window.localStorage.removeItem(COLLECTION_STORAGE_KEY);
      } catch (error) {
        // Ignore localStorage failures.
      }
      if (window.location.protocol !== "file:") {
        fetch("/api/collection-wanted", { method: "DELETE" }).catch(function() {
          // Ignore server persistence failures.
        });
      }
    }

    async function restoreCollectionStateFromServer() {
      if (window.location.protocol === "file:") return false;
      try {
        const response = await fetch("/api/collection-wanted", { cache: "no-store" });
        if (!response.ok) return false;
        const text = await response.text();
        if (!text.trim()) return false;
        const parsed = parseCollectionWantedImport(text);
        state.collection.wanted = normalizeStoredCollectionWanted(parsed.entries);
        try {
          if (window.localStorage) {
            window.localStorage.setItem(COLLECTION_STORAGE_KEY, JSON.stringify({ wanted: state.collection.wanted }));
          }
        } catch (error) {
          // Ignore localStorage failures.
        }
        return true;
      } catch (error) {
        return false;
      }
    }

    restoreCollectionState();
