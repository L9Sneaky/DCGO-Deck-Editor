
    function drawCoverImage(ctx, image, x, y, width, height) {
      const sourceWidth = image.width || image.naturalWidth || width;
      const sourceHeight = image.height || image.naturalHeight || height;
      const sourceRatio = sourceWidth / sourceHeight;
      const targetRatio = width / height;
      let sx = 0;
      let sy = 0;
      let sw = sourceWidth;
      let sh = sourceHeight;

      if (sourceRatio > targetRatio) {
        sw = sourceHeight * targetRatio;
        sx = (sourceWidth - sw) / 2;
      } else if (sourceRatio < targetRatio) {
        sh = sourceWidth / targetRatio;
        sy = (sourceHeight - sh) / 2;
      }

      ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
    }

    function drawCountPill(ctx, text, x, y) {
      const paddingX = 12;
      const paddingY = 7;
      const fontSize = 22;
      ctx.font = "700 " + fontSize + "px " + getComputedStyle(document.body).fontFamily;
      const metrics = ctx.measureText(text);
      const pillWidth = metrics.width + paddingX * 2;
      const pillHeight = fontSize + paddingY * 2;
      const radius = pillHeight / 2;

      ctx.fillStyle = "rgba(4, 12, 20, 0.88)";
      ctx.strokeStyle = "rgba(255,255,255,0.16)";
      ctx.lineWidth = 1;

      const pillX = x - pillWidth;
      const pillY = y - pillHeight;
      ctx.beginPath();
      ctx.moveTo(pillX + radius, pillY);
      ctx.lineTo(pillX + pillWidth - radius, pillY);
      ctx.quadraticCurveTo(pillX + pillWidth, pillY, pillX + pillWidth, pillY + radius);
      ctx.lineTo(pillX + pillWidth, pillY + pillHeight - radius);
      ctx.quadraticCurveTo(pillX + pillWidth, pillY + pillHeight, pillX + pillWidth - radius, pillY + pillHeight);
      ctx.lineTo(pillX + radius, pillY + pillHeight);
      ctx.quadraticCurveTo(pillX, pillY + pillHeight, pillX, pillY + pillHeight - radius);
      ctx.lineTo(pillX, pillY + radius);
      ctx.quadraticCurveTo(pillX, pillY, pillX + radius, pillY);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, pillX + pillWidth / 2, pillY + pillHeight / 2 + 0.5);
    }

    async function loadImageBitmap(url) {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) throw new Error("Image load failed");
      const blob = await response.blob();
      if ("createImageBitmap" in window) {
        return await createImageBitmap(blob);
      }
      return await new Promise(function(resolve, reject) {
        const img = new Image();
        const objectUrl = URL.createObjectURL(blob);
        img.onload = function() {
          URL.revokeObjectURL(objectUrl);
          resolve(img);
        };
        img.onerror = function() {
          URL.revokeObjectURL(objectUrl);
          reject(new Error("Image load failed"));
        };
        img.src = objectUrl;
      });
    }

    async function buildDeckImageBlob(deck) {
      const cards = deck.cards || [];
      if (!cards.length) throw new Error("No cards in this deck.");

      const columns = 8;
      const cardWidth = 320;
      const cardHeight = Math.round(cardWidth / 0.7);
      const gap = 14;
      const padding = 20;
      const rows = Math.max(1, Math.ceil(cards.length / columns));
      const canvasWidth = padding * 2 + columns * cardWidth + (columns - 1) * gap;
      const canvasHeight = padding * 2 + rows * cardHeight + (rows - 1) * gap;
      if (canvasHeight > 32767) {
        throw new Error("Deck image is too tall for this browser to export.");
      }
      const canvas = document.createElement("canvas");
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#09111a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let index = 0; index < cards.length; index += 1) {
        const card = cards[index];
        const row = Math.floor(index / columns);
        const col = index % columns;
        const x = padding + col * (cardWidth + gap);
        const y = padding + row * (cardHeight + gap);

        ctx.fillStyle = "rgba(16, 39, 62, 1)";
        ctx.fillRect(x, y, cardWidth, cardHeight);

        if (card.imageUrl) {
          try {
            const image = await loadImageBitmap(card.imageUrl);
            drawCoverImage(ctx, image, x, y, cardWidth, cardHeight);
          } catch (error) {
            // Keep fallback background when image fails.
          }
        }

        drawCountPill(ctx, "x" + card.count, x + cardWidth - 8, y + cardHeight - 8);
      }

      return await new Promise(function(resolve, reject) {
        canvas.toBlob(function(blob) {
          if (!blob) {
            reject(new Error("The browser could not render this deck image."));
            return;
          }
          resolve(blob);
        }, "image/png");
      });
    }

    async function copyImageToClipboard(blob) {
      if (!blob) return false;
      if (!navigator.clipboard || !window.ClipboardItem || !window.isSecureContext) return false;
      try {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        return true;
      } catch (error) {
        return false;
      }
    }

    async function exportDeckAsImage() {
      const deck = getSelectedDeck();
      if (!deck) return;
      if (needsDeckBrowserServer("Export Image")) return;

      const original = exportDeckImageBtn.textContent;
      exportDeckImageBtn.disabled = true;
      exportDeckImageBtn.textContent = "Exporting...";

      try {
        const blob = await buildDeckImageBlob(deck);
        const copied = await copyImageToClipboard(blob);
        const dataUrl = await new Promise(function(resolve) {
          const reader = new FileReader();
          reader.onloadend = function() { resolve(reader.result); };
          reader.readAsDataURL(blob);
        });
        const imageData = String(dataUrl).split(",")[1] || "";

        const response = await fetch("/api/export-image", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ deckName: deck.name, imageData: imageData, overwrite: false })
        });

        if (response.status === 409) {
          const payload = await response.json().catch(function() { return {}; });
          const overwrite = window.confirm("Export image already exists. Overwrite?");
          if (!overwrite) throw new Error("Export cancelled.");
          const retry = await fetch("/api/export-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ deckName: deck.name, imageData: imageData, overwrite: true })
          });
          if (!retry.ok) {
            const retryPayload = await retry.json().catch(function() { return {}; });
            throw new Error(retryPayload.error || "Export failed.");
          }
        } else if (!response.ok) {
          const payload = await response.json().catch(function() { return {}; });
          throw new Error(payload.error || "Export failed.");
        }

        exportDeckImageBtn.textContent = copied ? "Exported + Copied" : "Exported";
        window.setTimeout(function() {
          exportDeckImageBtn.textContent = original;
          exportDeckImageBtn.disabled = false;
        }, 1400);
      } catch (error) {
        window.alert("Export failed: " + error.message);
        exportDeckImageBtn.textContent = original;
        exportDeckImageBtn.disabled = false;
      }
    }

    async function copyToClipboard(text, button) {
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied";
      } catch (error) {
        button.textContent = "Copy failed";
      }
      window.setTimeout(function() {
        button.textContent = original;
      }, 1400);
    }

    function normalizeImportCode(value) {
      return String(value || "")
        .trim()
        .replace(/^["']|["']$$/g, "")
        .replace(/[],;]+$$/g, "")
        .toUpperCase();
    }

    function findCatalogCardForImportCode(value) {
      const code = normalizeImportCode(value);
      if (!code) return null;
      if (CARD_BY_CODE[code]) return CARD_BY_CODE[code];

      const numberMatches = CARDS_BY_NUMBER[code] || [];
      if (!numberMatches.length) return null;
      return (
        numberMatches.find(function(card) { return normalizeImportCode(card.code) === code; }) ||
        numberMatches.find(function(card) { return !card.isAltArt; }) ||
        numberMatches[0]
      );
    }

    function parseJsonImport(rawText) {
      let parsed;
      try {
        parsed = JSON.parse(rawText);
      } catch (error) {
        return null;
      }
      if (!Array.isArray(parsed)) {
        throw new Error("JSON import must be an array of card codes.");
      }
      const refs = parsed.map(function(item) {
        if (typeof item !== "string") {
          throw new Error("JSON import arrays can only contain card code strings.");
        }
        return normalizeImportCode(item);
      }).filter(Boolean);
      return { name: "", refs: refs };
    }

    function parseTextImport(rawText) {
      const refs = [];
      let importedName = "";
      const lines = rawText.split(/\\r?\\n/);

      lines.forEach(function(line) {
        const trimmed = line.trim();
        if (!trimmed) return;
        if (trimmed.startsWith("//")) {
          const name = trimmed.replace(/^\\/\\/\\s*/, "").trim();
          if (name && name.toLowerCase() !== "decklist") importedName = name;
          return;
        }

        const nameMatch = trimmed.match(/^Name:\\s*(.+)$$/i);
        if (nameMatch) {
          importedName = nameMatch[1].trim();
          return;
        }
        if (/^(Key Card|Sort Index):/i.test(trimmed)) return;

        const lineMatch = trimmed.match(/^\\s*(\\d+)\\s+.+?\\s+([A-Za-z0-9-]+(?:_[A-Za-z0-9-]+)?)\\s*$$/);
        if (!lineMatch) return;

        const count = Number(lineMatch[1]);
        const code = normalizeImportCode(lineMatch[2]);
        if (!Number.isFinite(count) || count <= 0 || !code) return;
        for (let index = 0; index < count; index += 1) refs.push(code);
      });

      return { name: importedName, refs: refs };
    }

    function parseDeckImport(rawText) {
      const text = String(rawText || "").trim();
      if (!text) throw new Error("Clipboard is empty.");

      const jsonImport = parseJsonImport(text);
      const parsed = jsonImport || parseTextImport(text);
      if (!parsed.refs.length) {
        throw new Error("No importable card lines or JSON card codes were found.");
      }
      return parsed;
    }

    function validateImportedCards(cards) {
      return validateCards(cards).errors;
    }

    function buildImportedCards(parsed) {
      const groupedByCode = {};
      const missingCodes = [];

      parsed.refs.forEach(function(ref) {
        const card = findCatalogCardForImportCode(ref);
        if (!card) {
          missingCodes.push(ref);
          return;
        }
        const key = card.code;
        if (!groupedByCode[key]) groupedByCode[key] = { card: card, count: 0 };
        groupedByCode[key].count += 1;
      });

      if (missingCodes.length) {
        throw new Error(
          "Unknown card codes: " +
          missingCodes.slice(0, 12).join(", ") +
          (missingCodes.length > 12 ? " +" + (missingCodes.length - 12) + " more" : "")
        );
      }

      const importedCards = Object.keys(groupedByCode).map(function(code) {
        const entry = groupedByCode[code];
        const card = cloneCardForDeck(entry.card);
        card.count = entry.count;
        return card;
      });

      return importedCards;
    }

    function buildImportPreviewText(parsed, importedCards) {
      const validation = validateCards(importedCards);
      const stats = validation.stats;
      const lines = [
        "Import preview",
        "",
        "Deck name: " + (parsed.name || "keep current name"),
        "Main deck: " + stats.mainCount + "/50",
        "Egg deck: " + stats.eggCount + "/5",
        "Unique card numbers: " + stats.uniqueCount
      ];

      if (validation.errors.length) {
        lines.push("", "Errors:");
        validation.errors.slice(0, 8).forEach(function(message) { lines.push("- " + message); });
      }

      if (validation.warnings.length) {
        lines.push("", "Warnings:");
        validation.warnings.slice(0, 8).forEach(function(message) { lines.push("- " + message); });
      }

      lines.push("", "Replace the current deck list with this import?");
      return lines.join("\\n");
    }

    function importParsedDeck(deck, parsed, importedCards) {
      const cards = importedCards || buildImportedCards(parsed);

      deck.cards = cards;
      if (parsed.name) deck.name = parsed.name;
      sortDeckCards(deck);
      refreshDeckComputedFields(deck);
      resetTestHandForDeck(deck);
      state.selectedCardCode = deck.cards.length ? deck.cards[0].code : null;
    }

    async function readClipboardTextWithFallback() {
      try {
        if (navigator.clipboard && navigator.clipboard.readText) {
          return await navigator.clipboard.readText();
        }
      } catch (error) {
        const fallback = window.prompt("Paste deck text or JSON here:");
        if (fallback !== null) return fallback;
        throw error;
      }

      const fallback = window.prompt("Paste deck text or JSON here:");
      if (fallback === null) throw new Error("Import cancelled.");
      return fallback;
    }

    async function saveDeckChanges(deck) {
      if (window.location.protocol === "file:") {
        window.alert("Save Changes needs the local deck browser server. Open it with Open Deck Browser.command.");
        return;
      }

      const validation = validateDeck(deck);
      if (validation.errors.length) {
        window.alert("Fix validation errors before saving:\\n\\n" + validation.errors.slice(0, 8).join("\\n"));
        return;
      }

      if (validation.warnings.length && !window.confirm("Save with warnings?\\n\\n" + validation.warnings.slice(0, 8).join("\\n"))) {
        return;
      }

      const original = saveChangesBtn.textContent;
      saveChangesBtn.disabled = true;
      saveChangesBtn.textContent = "Saving...";

      try {
        const response = await fetch("/api/decks/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fileName: deck.fileName,
            text: buildDeckExportText(deck)
          })
        });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) {
          throw new Error(payload.error || "Save failed.");
        }

        applySavedDeck(deck, payload.deck);
        saveChangesBtn.textContent = "Saved";
        renderEditor();
        window.setTimeout(function() {
          saveChangesBtn.textContent = original;
          renderDirtyStatus(deck);
        }, 1200);
      } catch (error) {
        window.alert("Could not save deck: " + error.message);
        saveChangesBtn.textContent = original;
        renderDirtyStatus(deck);
      }
