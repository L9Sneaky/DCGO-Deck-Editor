    // Project Drasil DeckTest embed adapter (replaces vanilla tester board).

    const deckTestReactRootEl = document.getElementById("deck-test-react-root");
    const renderTesterLegacy = typeof window.renderTester === "function" ? window.renderTester : null;
    const openDeckTesterLegacy = typeof window.openDeckTester === "function" ? window.openDeckTester : null;
    let deckTestEmbedMounted = false;
    let previousBodyDisplay = "";
    let previousBodyOverflow = "";
    let previousHtmlOverflow = "";
    let previousShellWidth = "";

    function deckTestEmbedAvailable() {
      return window.DCGODeckTest && typeof window.DCGODeckTest.mount === "function";
    }

    function waitForDeckTestEmbed(timeoutMs) {
      if (deckTestEmbedAvailable()) return Promise.resolve(window.DCGODeckTest);
      const waitMs = timeoutMs || 10000;
      return new Promise(function(resolve, reject) {
        let settled = false;
        const handler = function() {
          if (!deckTestEmbedAvailable()) return;
          settled = true;
          window.removeEventListener("dcgo-decktest-ready", handler);
          resolve(window.DCGODeckTest);
        };
        window.addEventListener("dcgo-decktest-ready", handler);
        setTimeout(function() {
          if (settled) return;
          if (deckTestEmbedAvailable()) {
            window.removeEventListener("dcgo-decktest-ready", handler);
            resolve(window.DCGODeckTest);
            return;
          }
          window.removeEventListener("dcgo-decktest-ready", handler);
          reject(new Error("Project Drasil DeckTest embed was not ready after " + waitMs + "ms."));
        }, waitMs);
      });
    }

    function buildDeckTestOptions(deck) {
      return {
        root: deckTestReactRootEl,
        deck: deck,
        decks: APP_DATA.decks,
        cardCatalog: APP_DATA.cardCatalog,
        onExit: function() {
          const currentDeck = getSelectedDeck();
          const targetDeck = currentDeck || deck;
          if (targetDeck) {
            window.location.hash = "deck/" + encodeURIComponent(targetDeck.id);
          } else {
            window.location.hash = "";
          }
          render();
        }
      };
    }

    function mountDeckTestBoard(deck) {
      if (!deckTestReactRootEl || !deck) return;
      if (!deckTestEmbedMounted) {
        previousBodyDisplay = document.body.style.display || "";
        previousBodyOverflow = document.body.style.overflow || "";
        previousHtmlOverflow = document.documentElement.style.overflow || "";
        previousShellWidth = document.querySelector(".shell")?.style.width || "";
      }
      document.body.style.display = "block";
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const shellEl = document.querySelector(".shell");
      if (shellEl) shellEl.style.width = "100%";
      testViewEl.classList.add("tester-react-active");
      if (deckTestEmbedAvailable()) {
        window.DCGODeckTest.mount(buildDeckTestOptions(deck));
        deckTestEmbedMounted = true;
        return;
      }
      if (!deckTestEmbedMounted) {
        deckTestReactRootEl.innerHTML = '<div class="deck-test-react-loading">Loading simulator board...</div>';
      }
      waitForDeckTestEmbed().then(function(embed) {
        if (!embed || !deckTestReactRootEl) return;
        embed.mount(buildDeckTestOptions(deck));
        deckTestEmbedMounted = true;
      }).catch(function(error) {
        console.warn("DeckTest embed failed to load:", error);
        deckTestReactRootEl.innerHTML = "";
        testViewEl.classList.remove("tester-react-active");
        if (renderTesterLegacy) renderTesterLegacy(deck);
      });
    }

    function unmountDeckTestBoard() {
      if (deckTestEmbedMounted && deckTestEmbedAvailable()) {
        window.DCGODeckTest.unmount();
      }
      deckTestEmbedMounted = false;
      if (deckTestReactRootEl) deckTestReactRootEl.innerHTML = "";
      document.body.style.display = previousBodyDisplay;
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      const shellEl = document.querySelector(".shell");
      if (shellEl) shellEl.style.width = previousShellWidth;
      testViewEl.classList.remove("tester-react-active");
    }

    function resetDeckTestBoard(deck) {
      if (!deck) return;
      if (!deckTestEmbedAvailable()) {
        mountDeckTestBoard(deck);
        return;
      }
      if (typeof window.DCGODeckTest.reset === "function") {
        window.DCGODeckTest.reset();
        return;
      }
      window.DCGODeckTest.mount(buildDeckTestOptions(deck));
    }

    window.renderTester = function(deck) {
      if (!deck) return;
      if (!deckTestReactRootEl) {
        if (renderTesterLegacy) renderTesterLegacy(deck);
        return;
      }
      mountDeckTestBoard(deck);
    };

    window.openDeckTester = function(deck) {
      if (!deckTestReactRootEl && openDeckTesterLegacy) {
        openDeckTesterLegacy(deck);
        return;
      }
      const currentDeck = getSelectedDeck();
      if (state.view === "editor" && currentDeck && currentDeck.id !== deck.id && !confirmDiscardUnsaved(currentDeck)) {
        return;
      }
      state.selectedDeckId = deck.id;
      state.selectedCardCode = deck.cards.length ? deck.cards[0].code : null;
      if (!setupTestHand(deck)) return;
      window.location.hash = "test/" + encodeURIComponent(deck.id);
      render();
    };
