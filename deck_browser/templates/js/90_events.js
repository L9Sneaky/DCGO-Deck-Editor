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

      if (state.view !== "tester" && typeof unmountDeckTestBoard === "function") {
        unmountDeckTestBoard();
      }

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

    function renderUpdateStatus(payload) {
      if (!updateStatusLabelEl) return;
      const current = payload.current_version || APP_VERSION;
      const latest = payload.latest_version || "";
      const message = payload.message || payload.status || "";
      if (payload.update_available && latest) {
        updateStatusLabelEl.textContent = "Update available: " + latest + " (current " + current + ")";
        installAppUpdateBtn.classList.remove("hidden");
      } else if (payload.status === "failed") {
        updateStatusLabelEl.textContent = message || "Update check failed; using current version.";
        installAppUpdateBtn.classList.add("hidden");
      } else if (payload.status === "disabled") {
        updateStatusLabelEl.textContent = "Automatic update checks are disabled.";
        installAppUpdateBtn.classList.add("hidden");
      } else {
        updateStatusLabelEl.textContent = latest ? "Up to date (" + current + ")" : "Current version: " + current;
        installAppUpdateBtn.classList.add("hidden");
      }
    }

    async function fetchUpdateStatus() {
      try {
        const response = await fetch("/api/version", { cache: "no-store" });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) throw new Error(payload.error || "Version request failed.");
        renderUpdateStatus(payload);
        return payload;
      } catch (error) {
        renderUpdateStatus({ status: "failed", message: "Update status unavailable: " + error.message, current_version: APP_VERSION });
        return null;
      }
    }

    async function checkForAppUpdate(showAlert) {
      if (needsDeckBrowserServer("Check for Updates")) return;
      const original = checkAppUpdateBtn.textContent;
      checkAppUpdateBtn.disabled = true;
      checkAppUpdateBtn.textContent = "Checking...";
      renderUpdateStatus({ status: "checking", message: "Checking for updates...", current_version: APP_VERSION });
      try {
        const response = await fetch("/api/check-update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) throw new Error(payload.error || "Update check failed.");
        renderUpdateStatus(payload);
        if (showAlert) window.alert(payload.message || "Update check complete.");
      } catch (error) {
        renderUpdateStatus({ status: "failed", message: "Update check failed: " + error.message, current_version: APP_VERSION });
        if (showAlert) window.alert("Could not check for updates: " + error.message);
      } finally {
        checkAppUpdateBtn.disabled = false;
        checkAppUpdateBtn.textContent = original;
      }
    }

    checkAppUpdateBtn.addEventListener("click", function() {
      checkForAppUpdate(true);
    });

    installAppUpdateBtn.addEventListener("click", async function() {
      if (needsDeckBrowserServer("Install Update")) return;
      if (hasUnsavedChanges() && !window.confirm("Installing an update will restart the editor. Discard unsaved deck edits?")) {
        return;
      }
      if (!window.confirm("Install the latest GitHub release now? The editor will close briefly and relaunch if macOS allows it.")) {
        return;
      }

      const original = installAppUpdateBtn.textContent;
      installAppUpdateBtn.disabled = true;
      installAppUpdateBtn.textContent = "Installing...";
      renderUpdateStatus({ status: "installing", message: "Downloading and installing update...", current_version: APP_VERSION });
      try {
        const response = await fetch("/api/install-update", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) throw new Error(payload.error || "Update install failed.");
        renderUpdateStatus(payload);
        window.alert(payload.message || "Update installer started. Relaunch the editor if it does not reopen automatically.");
      } catch (error) {
        renderUpdateStatus({ status: "failed", message: "Update install failed: " + error.message, current_version: APP_VERSION });
        window.alert("Could not install update: " + error.message);
        installAppUpdateBtn.disabled = false;
        installAppUpdateBtn.textContent = original;
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
      if (typeof resetDeckTestBoard === "function") {
        resetDeckTestBoard(deck);
        return;
      }
      startTestHand(deck);
    });

    testerMulliganBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      if (typeof resetDeckTestBoard === "function") {
        resetDeckTestBoard(deck);
        return;
      }
      startTestHand(deck);
    });

    testerUnsuspendBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      unsuspendAllTesterCards(deck);
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

    testerEggStackEl.addEventListener("click", function() {
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

    testerSecureDeckBtn.addEventListener("click", function() {
      const deck = getSelectedDeck();
      if (!deck) return;
      secureTopDeck(deck);
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
    appVersionEl.textContent = APP_VERSION;
    fetchUpdateStatus();

    window.addEventListener("hashchange", render);
    window.addEventListener("beforeunload", function(event) {
      if (!hasUnsavedChanges()) return;
      event.preventDefault();
      event.returnValue = "";
    });

    render();
