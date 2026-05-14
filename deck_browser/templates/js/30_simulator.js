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
      state.selectedTesterStack = null;
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

    function fisherYatesShuffle(cards) {
      const shuffled = cards.slice();
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(randomUnit() * (index + 1));
        const current = shuffled[index];
        shuffled[index] = shuffled[swapIndex];
        shuffled[swapIndex] = current;
      }
      return shuffled;
    }

    function riffleShuffle(cards) {
      const mid = Math.floor(cards.length / 2);
      const left = cards.slice(0, mid);
      const right = cards.slice(mid);
      const result = [];
      let leftIndex = 0;
      let rightIndex = 0;
      while (leftIndex < left.length && rightIndex < right.length) {
        result.push(randomUnit() < 0.5 ? left[leftIndex++] : right[rightIndex++]);
      }
      return result.concat(left.slice(leftIndex), right.slice(rightIndex));
    }

    function insideOutShuffle(cards) {
      const result = [];
      cards.forEach(function(card, index) {
        const targetIndex = Math.floor(randomUnit() * (index + 1));
        if (targetIndex === index) {
          result.push(card);
        } else {
          result.push(result[targetIndex]);
          result[targetIndex] = card;
        }
      });
      return result;
    }

    function blockShuffle(cards) {
      const blockSize = Math.max(3, Math.floor(Math.sqrt(cards.length || 1)));
      const blocks = [];
      for (let index = 0; index < cards.length; index += blockSize) {
        blocks.push(cards.slice(index, index + blockSize));
      }
      return fisherYatesShuffle(blocks).flatMap(function(block) {
        return fisherYatesShuffle(block);
      });
    }

    function reverseBlockShuffle(cards) {
      const blockSize = Math.max(3, Math.floor(Math.sqrt(cards.length || 1)));
      const blocks = [];
      for (let index = 0; index < cards.length; index += blockSize) {
        blocks.push(cards.slice(index, index + blockSize).reverse());
      }
      return fisherYatesShuffle(blocks).flat();
    }

    function sattoloShuffle(cards) {
      const shuffled = cards.slice();
      for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(randomUnit() * index);
        const current = shuffled[index];
        shuffled[index] = shuffled[swapIndex];
        shuffled[swapIndex] = current;
      }
      return shuffled;
    }

    function testerClusterKey(card) {
      return card && (card.cardNumber || card.code || card.name);
    }

    function correctCardClustering(cards) {
      const result = cards.slice();
      for (let attempt = 0; attempt < 500; attempt += 1) {
        let changed = false;
        for (let index = 0; index < result.length - 1; index += 1) {
          const key = testerClusterKey(result[index]);
          if (!key || key !== testerClusterKey(result[index + 1])) continue;
          for (let retry = 0; retry < 35; retry += 1) {
            const candidate = Math.floor(randomUnit() * result.length);
            if (Math.abs(candidate - index) <= 1) continue;
            const before = candidate > 0 ? testerClusterKey(result[candidate - 1]) : "";
            const after = candidate < result.length - 1 ? testerClusterKey(result[candidate + 1]) : "";
            if (before === key || after === key) continue;
            const current = result[index + 1];
            result[index + 1] = result[candidate];
            result[candidate] = current;
            changed = true;
            break;
          }
        }
        if (!changed) break;
      }
      return result;
    }

    function shuffledCards(cards) {
      let shuffled = cards.slice();
      for (let round = 0; round < 3; round += 1) shuffled = fisherYatesShuffle(shuffled);
      shuffled = riffleShuffle(riffleShuffle(shuffled));
      shuffled = insideOutShuffle(shuffled);
      shuffled = blockShuffle(shuffled);
      shuffled = correctCardClustering(shuffled);
      shuffled = sattoloShuffle(shuffled);
      for (let round = 0; round < 3; round += 1) shuffled = fisherYatesShuffle(shuffled);
      return reverseBlockShuffle(shuffled);
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

    function selectTesterCard(card, stackContext) {
      if (!card) return;
      state.selectedCardCode = card.code;
      state.selectedTesterStack = stackContext || null;
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

    function secureTopDeck(deck) {
      if (!ensureTestHand(deck)) return;
      const instance = state.testHand.stack.shift();
      if (!instance) return;
      state.testHand.security.unshift(setTesterFace(instance, false));
      logTesterAction("Added a deck card to security.");
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
          state.testHand.breeding.unshift(instance);
        } else {
          state.testHand.breeding.push(instance);
        }
        state.testHand.openDrawer = "breeding";
      } else if (target.zone === "field") {
        const targetStack = state.testHand.fields[target.fieldIndex] || state.testHand.fields[0];
        setTesterFace(instance, true);
        if (target.mode === "source" && targetStack.length) {
          targetStack.unshift(instance);
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
      const queue = (target.mode === "source" && (target.zone === "field" || target.zone === "breeding"))
        ? moving.slice().reverse()
        : moving;
      queue.forEach(function(instance) {
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

    function toggleTesterBreedingSuspend(deck) {
      if (!ensureTestHand(deck) || !state.testHand.breeding.length) return;
      const top = state.testHand.breeding[state.testHand.breeding.length - 1];
      top.suspended = !top.suspended;
      logTesterAction((top.suspended ? "Suspended " : "Unsuspended ") + getTesterCard(top).name + ".");
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
        event.stopPropagation();
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
        if (ref.stack) {
          moveTesterStack(deck, ref, target);
        } else {
          moveTesterCard(deck, ref, target);
        }
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

    function getTesterEffectSection(card, label) {
      return ((card && card.effectSections) || []).find(function(section) {
        return section && section.label === label && section.text;
      }) || null;
    }

    function isTesterLinkCard(instanceOrCard) {
      const card = getTesterCard(instanceOrCard);
      if (!card) return false;
      return Boolean(
        card.linkEffect ||
        card.linkRequirement ||
        getTesterEffectSection(card, "Link Effect") ||
        getTesterEffectSection(card, "Link Requirement")
      );
    }

    function getTesterLinkEffect(card) {
      return (card && card.linkEffect) ||
        (getTesterEffectSection(card, "Link Effect") || {}).text ||
        "";
    }

    function parseTesterLinkDpBonus(card) {
      if (!card) return 0;
      if (typeof card.linkDP === "number" && Number.isFinite(card.linkDP)) return card.linkDP;
      const texts = [
        card.linkDP,
        card.linkEffect,
        card.linkRequirement,
        getTesterLinkEffect(card),
        card.effectText
      ].filter(Boolean).join("\n");
      const patterns = [
        /\+\s*DP\s*([0-9]{3,5})/i,
        /\+\s*([0-9]{3,5})\s*DP/i,
        /gets\s+\+\s*([0-9]{3,5})\s*DP/i
      ];
      for (let index = 0; index < patterns.length; index += 1) {
        const match = texts.match(patterns[index]);
        if (match) return Number(match[1]) || 0;
      }
      return 0;
    }

    function getTesterStackParts(stack) {
      const cards = Array.isArray(stack) ? stack : [];
      const topIndex = cards.length - 1;
      const top = topIndex >= 0 ? cards[topIndex] : null;
      const sources = [];
      const linked = [];
      cards.forEach(function(instance, index) {
        if (index === topIndex) return;
        const item = { instance: instance, index: index };
        if (isTesterLinkCard(instance)) {
          linked.push(item);
        } else {
          sources.push(item);
        }
      });
      return { top: top, topIndex: topIndex, sources: sources, linked: linked };
    }

    function getTesterLinkedCards(stack) {
      return getTesterStackParts(stack).linked;
    }

    function getTesterDigivolutionCards(stack) {
      return getTesterStackParts(stack).sources;
    }

    function getTotalLinkedDpBonus(stack) {
      return getTesterLinkedCards(stack).reduce(function(total, item) {
        return total + parseTesterLinkDpBonus(getTesterCard(item.instance));
      }, 0);
    }

    function getDisplayedDpForStack(stack) {
      const parts = getTesterStackParts(stack);
      const card = getTesterCard(parts.top);
      const printedDp = Number(card && card.dp);
      if (!Number.isFinite(printedDp) || printedDp <= 0) return null;
      const modifiers = Object.assign({ plusDp: 0 }, (parts.top && parts.top.modifiers) || {});
      return Math.max(0, printedDp + getTotalLinkedDpBonus(stack) + (Number(modifiers.plusDp) || 0));
    }

    window.getTesterLinkedCards = getTesterLinkedCards;
    window.getTesterDigivolutionCards = getTesterDigivolutionCards;
    window.getTesterLinkEffect = getTesterLinkEffect;
    window.getTotalLinkedDpBonus = getTotalLinkedDpBonus;
    window.getDisplayedDpForStack = getDisplayedDpForStack;

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
        if (opts.ref.zone === "eggDeck") {
          item.addEventListener("click", function(event) {
            event.stopPropagation();
            const deck = getSelectedDeck();
            if (deck) moveTesterCard(deck, opts.ref, { zone: "breeding" });
          });
        }
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
      } else {
        thumb.textContent = opts.backLabel || "Deck";
      }
      thumb.addEventListener("click", function(event) {
        event.stopPropagation();
        if (opts.ref && opts.ref.zone === "eggDeck") {
          const deck = getSelectedDeck();
          if (deck) moveTesterCard(deck, opts.ref, { zone: "breeding" });
          return;
        }
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

      testerEggCountEl.textContent = String(state.testHand.eggDeck.length);
      testerEggStackEl.disabled = !state.testHand.eggDeck.length;
      testerEggStackEl.title = state.testHand.eggDeck.length
        ? "Hatch top egg. Drop here to put a card on top of the egg deck."
        : "Egg deck is empty. Drop here to put a card on top of the egg deck.";
      attachTesterDropZone(testerEggStackEl, { zone: "eggDeck", position: "top" });
      attachTesterDropZone(testerEggBottomDropEl, { zone: "eggDeck", position: "bottom" });
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

    function renderTesterDeckPreview(deck) {
      testerDeckPreviewEl.innerHTML = "";
      const imageWrap = document.createElement("div");
      imageWrap.className = "tester-deck-preview-art";
      const coverCard = pickSelectedCard(deck);
      if (coverCard && coverCard.imageUrl) {
        const img = document.createElement("img");
        img.src = coverCard.imageUrl;
        img.alt = coverCard.name;
        img.loading = "lazy";
        imageWrap.appendChild(img);
      } else {
        imageWrap.appendChild(createFallbackLabel(deck.name, "thumb-fallback"));
      }
      testerDeckPreviewEl.appendChild(imageWrap);

      const stacks = document.createElement("div");
      stacks.className = "tester-deck-preview-stacks";
      [
        ["MAIN", state.testHand.stack.length],
        ["EGG", state.testHand.eggDeck.length],
        ["SEC", state.testHand.security.length],
        ["HAND", state.testHand.hand.length]
      ].forEach(function(item) {
        const stack = document.createElement("div");
        stack.className = "tester-preview-stack";
        stack.innerHTML = "<strong>" + item[1] + "</strong><span>" + item[0] + "</span>";
        stacks.appendChild(stack);
      });
      testerDeckPreviewEl.appendChild(stacks);

      const colorBar = createColorRatioBar(getColorProfile(deck.cards));
      colorBar.classList.add("tester-preview-color-bar");
      testerDeckPreviewEl.appendChild(colorBar);
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
      const parts = getTesterStackParts(stack);
      wrap.className = "tester-stack sim-stack" + (parts.linked.length ? " has-linked-cards" : "");
      if (!stack.length) {
        const empty = document.createElement("div");
        empty.className = "tester-empty";
        empty.textContent = sourceZone === "breeding" ? "Drop or hatch an egg here." : "Drop a card here.";
        wrap.appendChild(empty);
        return wrap;
      }

      parts.sources.forEach(function(item, sourceOrder) {
        const instance = item.instance;
        const index = item.index;
        const card = getTesterCard(instance);
        const cardEl = document.createElement("div");
        cardEl.className = "tester-stack-card sim-stack-source-card" + (instance.suspended ? " suspended" : "");
        cardEl.style.zIndex = String(10 + index);
        cardEl.style.bottom = (8 + Math.min(sourceOrder, 9) * 7) + "px";
        cardEl.style.opacity = "0.72";
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
        cardEl.addEventListener("mouseenter", function() {
          if (instance.faceUp !== false) {
            selectTesterCard(card, {
              sourceZone: sourceZone,
              fieldIndex: fieldIndex,
              index: index
            });
          }
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
          selectTesterCard(card, {
            sourceZone: sourceZone,
            fieldIndex: fieldIndex,
            index: index
          });
        });
        cardEl.addEventListener("dblclick", function(event) {
          event.preventDefault();
          event.stopPropagation();
          if (index !== parts.topIndex) return;
          if (sourceZone === "field") {
            toggleTesterSuspend(deck, fieldIndex);
          } else {
            toggleTesterBreedingSuspend(deck);
          }
        });
        wrap.appendChild(cardEl);
      });

      parts.linked.forEach(function(item, linkOrder) {
        const instance = item.instance;
        const index = item.index;
        const card = getTesterCard(instance);
        const linkEl = document.createElement("div");
        linkEl.className = "tester-stack-card tester-link-card sim-stack-link-card";
        linkEl.style.zIndex = String(36 + linkOrder);
        linkEl.style.setProperty("--link-index", String(linkOrder));
        if (card.imageUrl) {
          const img = document.createElement("img");
          img.src = card.imageUrl;
          img.alt = card.name;
          img.loading = "lazy";
          linkEl.appendChild(img);
        } else {
          linkEl.appendChild(createFallbackLabel(card.name, "thumb-fallback"));
        }
        attachTesterDrag(linkEl, sourceZone === "field"
          ? { zone: "field", fieldIndex: fieldIndex, index: index }
          : { zone: "breeding", index: index });
        linkEl.addEventListener("mouseenter", function() {
          if (instance.faceUp !== false) {
            selectTesterCard(card, {
              sourceZone: sourceZone,
              fieldIndex: fieldIndex,
              index: index
            });
          }
        });
        linkEl.addEventListener("click", function(event) {
          event.stopPropagation();
          selectTesterCard(card, {
            sourceZone: sourceZone,
            fieldIndex: fieldIndex,
            index: index
          });
        });
        linkEl.addEventListener("contextmenu", function(event) {
          const ref = sourceZone === "field"
            ? { zone: "field", fieldIndex: fieldIndex, index: index }
            : { zone: "breeding", index: index };
          showTesterContextMenu(event, card.name + " · " + card.code, testerCardActions(deck, ref, {
            faceUp: instance.faceUp !== false
          }));
        });
        wrap.appendChild(linkEl);
      });

      const topInstance = parts.top;
      const topCard = getTesterCard(topInstance);
      const topEl = document.createElement("div");
      topEl.className = "tester-stack-card sim-stack-main-card" + (topInstance.suspended ? " suspended" : "");
      topEl.style.zIndex = "60";
      topEl.style.bottom = (8 + Math.min(parts.sources.length, 9) * 7) + "px";
      if (topCard.imageUrl) {
        const img = document.createElement("img");
        img.src = topCard.imageUrl;
        img.alt = topCard.name;
        img.loading = "lazy";
        topEl.appendChild(img);
      } else {
        topEl.appendChild(createFallbackLabel(topCard.name, "thumb-fallback"));
      }
      const modifierBadges = createTesterModifierBadges(topInstance);
      if (modifierBadges) topEl.appendChild(modifierBadges);
      const displayedDp = getDisplayedDpForStack(stack);
      if (displayedDp !== null && (displayedDp !== Number(topCard.dp) || getTotalLinkedDpBonus(stack))) {
        const dpBadge = document.createElement("div");
        dpBadge.className = "tester-modified-dp sim-card-modified-dp";
        dpBadge.textContent = String(displayedDp);
        topEl.appendChild(dpBadge);
      }
      if (parts.linked.length) {
        const linkIndicator = document.createElement("div");
        linkIndicator.className = "tester-link-indicator sim-link-indicator";
        linkIndicator.textContent = "🔗 " + parts.linked.length;
        topEl.appendChild(linkIndicator);
      }
      attachTesterDrag(topEl, sourceZone === "field"
        ? { zone: "field", fieldIndex: fieldIndex, index: parts.topIndex }
        : { zone: "breeding", index: parts.topIndex });
      topEl.addEventListener("mouseenter", function() {
        if (topInstance.faceUp !== false) {
          selectTesterCard(topCard, {
            sourceZone: sourceZone,
            fieldIndex: fieldIndex,
            index: parts.topIndex
          });
        }
      });
      topEl.addEventListener("contextmenu", function(event) {
        const ref = sourceZone === "field"
          ? { zone: "field", fieldIndex: fieldIndex, index: parts.topIndex }
          : { zone: "breeding", index: parts.topIndex };
        showTesterContextMenu(event, topCard.name + " · " + topCard.code, testerCardActions(deck, ref, {
          stackTop: true,
          suspended: !!topInstance.suspended,
          faceUp: topInstance.faceUp !== false
        }));
      });
      topEl.addEventListener("click", function(event) {
        event.stopPropagation();
        selectTesterCard(topCard, {
          sourceZone: sourceZone,
          fieldIndex: fieldIndex,
          index: parts.topIndex
        });
      });
      topEl.addEventListener("dblclick", function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (sourceZone === "field") {
          toggleTesterSuspend(deck, fieldIndex);
        } else {
          toggleTesterBreedingSuspend(deck);
        }
      });

      const stackHandle = document.createElement("div");
      stackHandle.className = "tester-stack-move-handle";
      stackHandle.title = "Drag to move the whole stack.";
      stackHandle.textContent = "↕";
      stackHandle.addEventListener("click", function(event) {
        event.stopPropagation();
      });
      attachTesterDrag(stackHandle, sourceZone === "field"
        ? { zone: "field", fieldIndex: fieldIndex, index: 0, stack: true }
        : { zone: "breeding", index: 0, stack: true });
      topEl.appendChild(stackHandle);
      wrap.appendChild(topEl);

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

    function updateTesterHandFanLayout() {
      const cards = Array.from(testerHandGridEl.querySelectorAll(".tester-card"));
      const count = cards.length;
      if (count <= 1) {
        testerHandGridEl.style.setProperty("--tester-hand-overlap", "0px");
        return;
      }
      const cardWidth = cards[0].getBoundingClientRect().width || 74;
      const availableWidth = testerHandGridEl.clientWidth || 0;
      const normalGap = 6;
      const naturalWidth = (cardWidth * count) + (normalGap * (count - 1));
      const overflowOverlap = Math.max(0, (naturalWidth - availableWidth) / (count - 1));
      const countPressure = count >= 8 ? (count - 7) * 2 : 0;
      const maxOverlap = cardWidth * 0.62;
      const overlap = Math.min(maxOverlap, Math.max(overflowOverlap, countPressure));
      testerHandGridEl.style.setProperty("--tester-hand-overlap", overlap.toFixed(1) + "px");
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
      window.requestAnimationFrame(updateTesterHandFanLayout);
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

      renderTesterDeckPreview(deck);
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
      testerSecureDeckBtn.disabled = !state.testHand.stack.length;
      testerTrashCountEl.textContent = state.testHand.trash.length;
      attachTesterDropZone(testerTrashPileBtn, { zone: "trash" });
      testerHandMetaEl.textContent = state.testHand.hand.length + " cards";
      testerBoardMetaEl.textContent = occupiedFields + " occupied / " + TESTER_FIELD_COUNT + " slots";
      renderTesterCardDetails(deck);
    }
