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

      if (hash === "collection") {
        state.view = "collection";
        if (!state.selectedCardCode && APP_DATA.cardCatalog.length) {
          state.selectedCardCode = APP_DATA.cardCatalog[0].code;
        }
        return;
      }

      if (hash === "reveals") {
        state.view = "reveals";
        return;
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

    function showDeckEditorCenter() {
      editorViewEl.classList.remove("collection-view");
      deckEditorHeroEl.classList.remove("hidden");
      deckEditorToolbarEl.classList.remove("hidden");
      deckEditorCardsPanelEl.classList.remove("hidden");
      collectionMainEl.classList.add("hidden");
    }

    function showCollectionCenter() {
      editorViewEl.classList.add("collection-view");
      deckEditorHeroEl.classList.add("hidden");
      deckEditorToolbarEl.classList.add("hidden");
      deckEditorCardsPanelEl.classList.add("hidden");
      collectionMainEl.classList.remove("hidden");
    }

    function renderEditor() {
      renderIncludeRevealsToggle();
      const deck = getSelectedDeck();
      if (!deck) {
        heroTitleEl.textContent = "No deck selected";
        heroSubtitleEl.textContent = "No deck matched the current search.";
        deckInfoContentEl.innerHTML = "";
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
        revealsViewEl.classList.add("hidden");
        editorViewEl.classList.add("hidden");
        testViewEl.classList.add("hidden");
        renderLibrary();
        return;
      }

      if (state.view === "reveals") {
        libraryViewEl.classList.add("hidden");
        revealsViewEl.classList.remove("hidden");
        editorViewEl.classList.add("hidden");
        testViewEl.classList.add("hidden");
        renderReveals();
        loadReveals(false);
        return;
      }

      if (state.view === "collection") {
        libraryViewEl.classList.add("hidden");
        revealsViewEl.classList.add("hidden");
        testViewEl.classList.add("hidden");
        editorViewEl.classList.remove("hidden");
        showCollectionCenter();
        renderCollection();
        return;
      }

      if (state.view === "tester") {
        const deck = getSelectedDeck();
        libraryViewEl.classList.add("hidden");
        revealsViewEl.classList.add("hidden");
        editorViewEl.classList.add("hidden");
        testViewEl.classList.remove("hidden");
        if (deck) renderTester(deck);
        return;
      }

      libraryViewEl.classList.add("hidden");
      revealsViewEl.classList.add("hidden");
      testViewEl.classList.add("hidden");
      editorViewEl.classList.remove("hidden");
      showDeckEditorCenter();
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

    function closeLibrarySettingsMenu() {
      librarySettingsMenuEl.classList.add("hidden");
      librarySettingsToggleBtn.setAttribute("aria-expanded", "false");
    }

    function toggleLibrarySettingsMenu() {
      const willOpen = librarySettingsMenuEl.classList.contains("hidden");
      librarySettingsMenuEl.classList.toggle("hidden", !willOpen);
      librarySettingsToggleBtn.setAttribute("aria-expanded", String(willOpen));
    }

    function closeLocalSyncQrViewer() {
      localSyncQrViewerEl.classList.add("hidden");
      document.body.classList.remove("modal-open");
    }

    async function showLocalSyncQrViewer() {
      if (!localSyncPayloadEl.value) await refreshLocalSyncStatus();
      const payload = localSyncPayloadEl.value;
      if (!payload) {
        await showMessage("Local pairing unavailable", "No pairing payload is available yet.");
        return;
      }
      if (typeof qrcode !== "function") {
        await showMessage("QR code unavailable", "The QR code generator did not load.");
        return;
      }

      try {
        const qr = qrcode(0, "M");
        qr.addData(payload);
        qr.make();
        localSyncQrCodeEl.innerHTML = qr.createSvgTag(6, 3, "Local pairing QR code", "Local Pairing");
        localSyncQrPayloadEl.textContent = payload;
        closeLibrarySettingsMenu();
        localSyncQrViewerEl.classList.remove("hidden");
        document.body.classList.add("modal-open");
      } catch (error) {
        await showMessage("Could not create QR code", error.message || String(error));
      }
    }

    function closeMoreActionsMenu() {
      moreActionsMenuEl.classList.add("hidden");
      moreActionsToggleBtn.setAttribute("aria-expanded", "false");
    }

    function toggleMoreActionsMenu() {
      const willOpen = moreActionsMenuEl.classList.contains("hidden");
      moreActionsMenuEl.classList.toggle("hidden", !willOpen);
      moreActionsToggleBtn.setAttribute("aria-expanded", String(willOpen));
    }

    deckInfoSummaryBtn.addEventListener("click", function() {
      state.deckInfoMode = "summary";
      state.insightsExpanded = false;
      renderEditor();
    });

    deckInfoInsightsBtn.addEventListener("click", function() {
      state.deckInfoMode = "insights";
      renderEditor();
    });

    moreActionsToggleBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      toggleMoreActionsMenu();
    });

    moreActionsMenuEl.addEventListener("click", function(event) {
      event.stopPropagation();
      if (event.target.closest(".menu-action")) closeMoreActionsMenu();
    });

    librarySettingsToggleBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      toggleLibrarySettingsMenu();
    });

    librarySettingsMenuEl.addEventListener("click", function(event) {
      event.stopPropagation();
    });

    localSyncQrViewerEl.addEventListener("click", function(event) {
      if (localSyncQrCodeEl.contains(event.target)) return;
      closeLocalSyncQrViewer();
    });

    localSyncQrCloseBtn.addEventListener("click", closeLocalSyncQrViewer);

    includeRevealsDeckEditorBtn.addEventListener("click", function() {
      state.editor.includeReveals = !state.editor.includeReveals;
      rebuildEditorCardPool();
      persistAppSettings();
      renderEditor();
    });

    document.addEventListener("click", function(event) {
      if (moreActionsMenuEl.classList.contains("hidden")) return;
      if (moreActionsMenuEl.contains(event.target) || moreActionsToggleBtn.contains(event.target)) return;
      closeMoreActionsMenu();
    });

    document.addEventListener("click", function(event) {
      if (librarySettingsMenuEl.classList.contains("hidden")) return;
      if (librarySettingsMenuEl.contains(event.target) || librarySettingsToggleBtn.contains(event.target)) return;
      closeLibrarySettingsMenu();
    });

    document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
        closeMoreActionsMenu();
        closeLibrarySettingsMenu();
        closeLocalSyncQrViewer();
      }
    });

    Object.keys(filterEls).forEach(function(key) {
      if (key === "clear") return;
      filterEls[key].addEventListener("input", function() {
        if (state.view === "collection") resetCollectionVisibleLimit();
        render();
      });
      filterEls[key].addEventListener("change", function() {
        if (state.view === "collection") resetCollectionVisibleLimit();
        render();
      });
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
      if (state.view === "collection") resetCollectionVisibleLimit();
      render();
    });

    openCollectionBtn.addEventListener("click", function() {
      resetCollectionVisibleLimit();
      window.location.hash = "collection";
      render();
    });

    openRevealsBtn.addEventListener("click", function() {
      window.location.hash = "reveals";
      render();
    });

    revealsBackLibraryBtn.addEventListener("click", function() {
      window.location.hash = "";
      render();
    });

    revealsRefreshBtn.addEventListener("click", function() {
      loadReveals(true);
    });

    collectionBackLibraryBtn.addEventListener("click", function() {
      window.location.hash = "";
      render();
    });

    collectionWantedOnlyBtn.addEventListener("click", function() {
      state.collection.wantedOnly = !state.collection.wantedOnly;
      renderCollection();
    });

    collectionEditEnabledEl.addEventListener("change", function(event) {
      state.collection.editEnabled = event.target.checked;
      renderCollectionGrid();
    });

    collectionGridEl.addEventListener("scroll", function() {
      maybeLoadMoreCollectionCards();
    });

    async function readCollectionImportFileText() {
      return await new Promise(function(resolve, reject) {
        let settled = false;

        function cleanup() {
          collectionImportFileEl.removeEventListener("change", onChange);
          window.removeEventListener("focus", onFocus);
        }

        function finish(value) {
          if (settled) return;
          settled = true;
          cleanup();
          resolve(value);
        }

        function fail(error) {
          if (settled) return;
          settled = true;
          cleanup();
          reject(error);
        }

        function onFocus() {
          window.setTimeout(function() {
            if (!settled && !collectionImportFileEl.files.length) finish(null);
          }, 500);
        }

        function onChange() {
          const file = collectionImportFileEl.files && collectionImportFileEl.files[0];
          if (!file) {
            finish(null);
            return;
          }

          const reader = new FileReader();
          reader.onload = function() { finish(String(reader.result || "")); };
          reader.onerror = function() { fail(new Error("Could not read import file.")); };
          reader.readAsText(file);
        }

        collectionImportFileEl.value = "";
        collectionImportFileEl.addEventListener("change", onChange);
        window.addEventListener("focus", onFocus);
        collectionImportFileEl.click();
      });
    }

    async function readCollectionImportText() {
      const source = await showChoice("Import looking-for list", "Paste list text or upload a plain text file.", [
        { label: "Paste Text", value: "paste", variant: "primary" },
        { label: "Upload File", value: "file" },
        { label: "Cancel", value: null }
      ]);
      if (!source) return null;

      if (source === "file") {
        return await readCollectionImportFileText();
      }

      return await showPrompt(
        "Paste looking-for list",
        "Supported examples:\n4 BT25-001\nBT25-003 x4\n4x BT25-005",
        "",
        { confirmLabel: "Parse" }
      );
    }

    async function importCollectionWantedList() {
      const original = collectionImportListBtn.textContent;
      collectionImportListBtn.disabled = true;
      collectionImportListBtn.textContent = "Importing...";

      try {
        const text = await readCollectionImportText();
        if (text === null) {
          collectionImportListBtn.textContent = original;
          collectionImportListBtn.disabled = false;
          return;
        }

        const parsedImport = parseCollectionWantedImport(text);
        const mode = await showChoice("Import mode", buildCollectionImportSummary(parsedImport, "add") + "\n\nChoose how to apply this list.", [
          { label: "Add to Current", value: "add", variant: "primary" },
          { label: "Replace Current", value: "replace" },
          { label: "Cancel", value: null }
        ]);
        if (!mode) {
          collectionImportListBtn.textContent = original;
          collectionImportListBtn.disabled = false;
          return;
        }

        applyCollectionWantedImport(parsedImport, mode);
        resetCollectionVisibleLimit();
        renderCollection();
        await showMessage("Import complete", buildCollectionImportSummary(parsedImport, mode));
        collectionImportListBtn.textContent = original;
        collectionImportListBtn.disabled = false;
      } catch (error) {
        await showMessage("Import failed", error.message);
        collectionImportListBtn.textContent = original;
        collectionImportListBtn.disabled = false;
      }
    }

    collectionImportListBtn.addEventListener("click", importCollectionWantedList);

    collectionClearWantedBtn.addEventListener("click", async function() {
      if (!getCollectionWantedCards().length) return;
      if (!(await showConfirm("Clear wanted list", "Clear the saved Collection wanted list?", { confirmLabel: "Clear", danger: true }))) {
        return;
      }
      clearCollectionWantedList();
      renderCollection();
    });

    backToLibraryBtn.addEventListener("click", async function() {
      const deck = getSelectedDeck();
      if (deck && !(await confirmDiscardUnsaved(deck))) return;
      window.location.hash = "";
      state.selectedCardCode = null;
      resetTestHand();
      render();
    });

    newDeckButtonEl.addEventListener("click", async function() {
      if (needsDeckBrowserServer("New Deck")) return;

      const deckName = await showPrompt("New deck", "Deck name", "NewDeck");
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
        await openDeckEditor(payload.deck);
      } catch (error) {
        await showMessage("Could not create deck", error.message);
      } finally {
        newDeckButtonEl.disabled = false;
        newDeckButtonEl.textContent = original;
      }
    });

    if (syncSignInBtn) {
      syncSignInBtn.addEventListener("click", function() {
        syncAuth("/api/sync/sign-in");
      });
    }

    if (syncFormEl) {
      syncFormEl.addEventListener("submit", function(event) {
        event.preventDefault();
        syncAuth("/api/sync/sign-in");
      });
    }

    if (syncSignUpBtn) {
      syncSignUpBtn.addEventListener("click", function() {
        syncAuth("/api/sync/sign-up");
      });
    }

    if (syncSignOutBtn) {
      syncSignOutBtn.addEventListener("click", async function() {
        const response = await fetch("/api/sync/sign-out", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
        renderSyncStatus(await response.json().catch(function() { return {}; }));
      });
    }

    if (syncNowBtn) {
      syncNowBtn.addEventListener("click", function() {
        triggerCloudSync(true);
      });
    }

    refreshSyncStatus();
    refreshLocalSyncStatus();

    if (localSyncRefreshBtn) {
      localSyncRefreshBtn.addEventListener("click", refreshLocalSyncStatus);
    }

    if (localSyncQrBtn) {
      localSyncQrBtn.addEventListener("click", showLocalSyncQrViewer);
    }

    if (localSyncCopyBtn) {
      localSyncCopyBtn.addEventListener("click", async function() {
        const payload = localSyncPayloadEl ? localSyncPayloadEl.value : "";
        if (!payload) {
          await showMessage("Local pairing unavailable", "No pairing payload is available yet.");
          return;
        }
        try {
          await navigator.clipboard.writeText(payload);
          localSyncCopyBtn.textContent = "Copied";
          window.setTimeout(function() { localSyncCopyBtn.textContent = "Copy Pair Payload"; }, 1200);
        } catch (error) {
          await showMessage("Copy pairing payload", payload);
        }
      });
    }

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
        if (showAlert) await showMessage("Update check", payload.message || "Update check complete.");
      } catch (error) {
        renderUpdateStatus({ status: "failed", message: "Update check failed: " + error.message, current_version: APP_VERSION });
        if (showAlert) await showMessage("Could not check for updates", error.message);
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
      if (hasUnsavedChanges() && !(await showConfirm("Unsaved changes", "Installing an update will restart the editor. Discard unsaved deck edits?", { confirmLabel: "Discard", danger: true }))) {
        return;
      }
      if (!(await showConfirm("Install update", "Install the latest GitHub release now? The editor will close briefly and relaunch if macOS allows it.", { confirmLabel: "Install" }))) {
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
        await showMessage("Update installer started", payload.message || "Relaunch the editor if it does not reopen automatically.");
      } catch (error) {
        renderUpdateStatus({ status: "failed", message: "Update install failed: " + error.message, current_version: APP_VERSION });
        await showMessage("Could not install update", error.message);
        installAppUpdateBtn.disabled = false;
        installAppUpdateBtn.textContent = original;
      }
    });

    updateCardDatabaseBtn.addEventListener("click", async function() {
      if (needsDeckBrowserServer("Update Card DB")) return;
      if (hasUnsavedChanges() && !(await showConfirm("Unsaved changes", "Updating the card database reloads this page. Discard unsaved deck edits?", { confirmLabel: "Discard", danger: true }))) {
        return;
      }
      if (!(await showConfirm("Update card database", "Download the latest card metadata from GitHub and reload the deck browser?", { confirmLabel: "Update" }))) {
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
        await showMessage("Card database updated", payload.cardCount + " cards loaded. Reloading now.");
        window.location.reload();
      } catch (error) {
        await showMessage("Could not update card database", error.message);
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

    collectionExportImageBtn.addEventListener("click", function() {
      exportWantedListAsImage();
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
        await showMessage("Unsaved changes", "Save or discard unsaved changes before renaming this deck.");
        return;
      }

      const newName = await showPrompt("Rename deck", "Deck name", deck.name);
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
        await showMessage("Could not rename deck", error.message);
      } finally {
        renameDeckBtn.disabled = false;
        renameDeckBtn.textContent = original;
      }
    });

    duplicateDeckBtn.addEventListener("click", async function() {
      const deck = getSelectedDeck();
      if (!deck || needsDeckBrowserServer("Duplicate")) return;
      if (isDeckDirty(deck)) {
        await showMessage("Unsaved changes", "Save or discard unsaved changes before duplicating this deck.");
        return;
      }

      const newName = await showPrompt("Duplicate deck", "New deck name", deck.name + " Copy");
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
        await openDeckEditor(payload.deck);
      } catch (error) {
        await showMessage("Could not duplicate deck", error.message);
      } finally {
        duplicateDeckBtn.disabled = false;
        duplicateDeckBtn.textContent = original;
      }
    });

    deleteDeckBtn.addEventListener("click", async function() {
      const deck = getSelectedDeck();
      if (!deck || needsDeckBrowserServer("Delete")) return;
      if (isDeckDirty(deck)) {
        await showMessage("Unsaved changes", "Save or discard unsaved changes before deleting this deck.");
        return;
      }
      if (!(await showConfirm("Delete deck", "Move '" + deck.name + "' to deleted_decks? This removes it from DCGO but keeps a recoverable copy.", { confirmLabel: "Delete", danger: true }))) {
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
        await showMessage("Deck deleted", "Deck moved to: " + payload.deletedPath);
        window.location.hash = "";
        render();
      } catch (error) {
        await showMessage("Could not delete deck", error.message);
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
          await showMessage("Import blocked", buildImportPreviewText(parsed, importedCards).replace("Replace the current deck list with this import?", "Import blocked until errors are fixed."));
          importClipboardBtn.textContent = original;
          importClipboardBtn.disabled = false;
          return;
        }
        if (!(await showConfirm("Import deck list", buildImportPreviewText(parsed, importedCards), { confirmLabel: "Import" }))) {
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
        await showMessage("Import failed", error.message);
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
    restoreAppSettingsFromServer();
    restoreCollectionStateFromServer().then(function(restored) {
      if (restored) render();
    });
