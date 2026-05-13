    const APP_DATA = $app_data;
    const GENERATED_AT = $generated_at;
    const MANIFEST_SOURCE = $manifest_source;
    const DECK_ROOT = $deck_root;
    const APP_VERSION = $app_version;

    const libraryViewEl = document.getElementById("library-view");
    const editorViewEl = document.getElementById("editor-view");
    const testViewEl = document.getElementById("test-view");
    const libraryGridEl = document.getElementById("library-grid");
    const librarySearchEl = document.getElementById("library-search");
    const librarySummaryEl = document.getElementById("library-summary");
    const libraryGeneratedAtEl = document.getElementById("library-generated-at-label");
    const libraryManifestSourceEl = document.getElementById("library-manifest-source-label");
    const libraryDeckRootEl = document.getElementById("library-deck-root-label");
    const appVersionEl = document.getElementById("app-version-label");
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
