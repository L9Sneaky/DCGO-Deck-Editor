    function revealDayLabel(dateText) {
      if (!dateText) return "Undated";
      const parts = String(dateText).split("-");
      if (parts.length !== 3) return dateText;
      const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
      return date.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric", year: "numeric" });
    }

    function revealStatusText() {
      if (state.reveals.loading) return "Checking official X reveals...";
      if (state.reveals.error) return state.reveals.error;
      const count = state.reveals.items.length;
      return count === 1 ? "1 recent reveal cached" : count + " recent reveals cached";
    }

    function createRevealCard(item) {
      const card = document.createElement("article");
      card.className = "reveal-card";

      const mediaButton = document.createElement("button");
      mediaButton.className = "reveal-image-button";
      mediaButton.type = "button";
      mediaButton.title = "Open reveal image";

      const image = document.createElement("img");
      image.loading = "lazy";
      image.src = item.imageUrl || "";
      image.alt = [item.code, item.name].filter(Boolean).join(" ");
      mediaButton.appendChild(image);
      mediaButton.addEventListener("click", function() {
        openImageViewer({ imageUrl: item.imageUrl, name: item.name, code: item.code });
      });
      card.appendChild(mediaButton);
      return card;
    }

    function renderReveals() {
      revealsSummaryEl.textContent = revealStatusText();
      revealsSourceEl.textContent = state.reveals.lastChecked ? "Last checked: " + state.reveals.lastChecked : "";
      revealsGridEl.innerHTML = "";

      if (state.reveals.loading && !state.reveals.items.length) {
        const loading = document.createElement("div");
        loading.className = "empty-state";
        loading.textContent = "Checking official reveal posts...";
        revealsGridEl.appendChild(loading);
        return;
      }

      if (state.reveals.error && !state.reveals.items.length) {
        const error = document.createElement("div");
        error.className = "empty-state";
        error.textContent = state.reveals.error;
        revealsGridEl.appendChild(error);
        return;
      }

      if (!state.reveals.items.length) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = "No reveal cards cached yet.";
        revealsGridEl.appendChild(empty);
        return;
      }

      const grouped = {};
      state.reveals.items.forEach(function(item) {
        const key = item.date || "Undated";
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(item);
      });

      Object.keys(grouped).sort().reverse().forEach(function(date) {
        const group = document.createElement("section");
        group.className = "reveal-day-group";

        const heading = document.createElement("div");
        heading.className = "reveal-day-heading";
        const title = document.createElement("h2");
        title.textContent = revealDayLabel(date);
        const count = document.createElement("span");
        count.className = "tiny";
        count.textContent = grouped[date].length + (grouped[date].length === 1 ? " card" : " cards");
        heading.appendChild(title);
        heading.appendChild(count);
        group.appendChild(heading);

        const cards = document.createElement("div");
        cards.className = "reveal-day-cards";
        grouped[date].forEach(function(item) {
          cards.appendChild(createRevealCard(item));
        });
        group.appendChild(cards);
        revealsGridEl.appendChild(group);
      });
    }

    async function loadReveals(forceRefresh) {
      if (window.location.protocol === "file:") {
        state.reveals.error = "New Reveals needs the local Deck Browser server.";
        renderReveals();
        return;
      }
      if (state.reveals.loading) return;
      if (state.reveals.loaded && !forceRefresh) return;

      state.reveals.loading = true;
      state.reveals.error = "";
      renderReveals();

      try {
        const response = await fetch("/api/reveals" + (forceRefresh ? "?refresh=1" : ""), { cache: "no-store" });
        const payload = await response.json().catch(function() { return {}; });
        if (!response.ok) throw new Error(payload.error || "Could not load new reveals.");
        state.reveals.loaded = true;
        state.reveals.source = payload.source || "";
        state.reveals.lastChecked = payload.lastChecked || "";
        state.reveals.items = Array.isArray(payload.items) ? payload.items : [];
        state.reveals.errors = Array.isArray(payload.errors) ? payload.errors : [];
        state.reveals.error = state.reveals.errors.length && !state.reveals.items.length ? state.reveals.errors[0] : "";
      } catch (error) {
        state.reveals.error = "Reveal check failed: " + error.message;
      } finally {
        state.reveals.loading = false;
        renderReveals();
      }
    }
