# DCGO Deck Editor

Standalone local deck editor for DCGO deck text files.

The editor runs a local-only browser server, reads the DCGO `Assets/Decks` folder, and writes saved changes back to the same deck `.txt` files.

## Download

Use the latest GitHub release and download:

```text
DCGO Deck Editor.zip
```

Unzip it, then move the `DCGO Deck Editor` folder into your DCGO client folder.

## Quick Start

Recommended layout:

```text
DCGO client folder/
  Assets/
    Decks/
  DCGO Deck Editor/
    Open Deck Editor.command
    Open Deck Editor.bat
    deck_browser/
```

Launch:

- macOS: double-click `Open Deck Editor.command`
- Windows: double-click `Open Deck Editor.bat`

Keep the terminal/command window open while using the editor.

## Requirements

- Python 3
- A web browser
- A DCGO client folder with `Assets/Decks`

## Features

- Browse decks visually.
- Create, rename, duplicate, and delete decks.
- Edit deck lists with card search and filters.
- Saving normalizes deck text to the DCGO layout and inserts a missing `// DeckList` marker when possible.
- Import deck lists from clipboard.
- Export deck images.
- Test opening hands.
- Update local card metadata from GitHub.
- Check GitHub Releases for Deck Editor updates and install newer release ZIPs from inside the app.
- Optional Supabase cloud sync for sharing decks with the mobile app.

## Cloud Sync

Cloud sync is optional and keeps the local `Assets/Decks` folder as the DCGO-compatible source of truth on desktop.

1. Run `supabase/schema.sql` from this folder in your Supabase project.
2. Enable Supabase email/password auth.
3. Start the deck editor with these environment variables:

```sh
DCGO_SUPABASE_URL=https://your-project.supabase.co
DCGO_SUPABASE_ANON_KEY=your-anon-key
```

Use the Cloud Sync panel in the Deck Library to create an account, sign in, and run Sync Now. Saving a deck also triggers an automatic sync when signed in. If the same deck changes on desktop and mobile, the newer `updated_at` value wins.

## Local Mobile Sync

The Deck Library also includes a local pairing panel for same-network mobile sync. The desktop editor generates one stable pairing token under:

```text
deck_browser/local_pairing.json
```

Copy the pairing payload into the mobile app, or encode that same payload as a QR code for the mobile scanner. The payload contains the local editor URL and token. Both devices must be on the same Wi-Fi/LAN, and the desktop server must be reachable from the phone. When launching manually, bind to a LAN-reachable host such as `0.0.0.0` instead of `127.0.0.1`.

Local sync uses the same last-write-wins rule as cloud sync. The local `.txt` deck files remain the desktop source for DCGO compatibility.

## New Reveals

New reveal refreshes use `https://twitterwebviewer.com/?user=digimon_tcg_EN` and keep a 14-day reveal window. Normal page loads use the local cache. The scraper runs only when the New Reveals page is refreshed from the local Python server.

The refresh state is stored locally under:

```text
deck_browser/reveals/twitterwebviewer_state.json
```

The saved state tracks seen tweet ids and card ids, for example:

```json
{
  "cards": {
    "BT25-063": {
      "status": "seen",
      "tweetId": "1234567890123456789",
      "date": "2026-06-06",
      "firstSeenAt": "2026-06-06T18:46:44+00:00"
    }
  },
  "tweets": {
    "1234567890123456789": {
      "status": "seen",
      "date": "2026-06-06"
    }
  },
  "source": "twitterwebviewer",
  "windowDays": 14
}
```

During a refresh, the scraper scans newest tweets first and stops as soon as it reaches a seen tweet id. This avoids crawling older already-cached reveals and reduces pressure on TwitterWebViewer. Fetch errors and rate limits are recorded in state while keeping cached cards visible, but they do not block the next manual refresh.

Run mocked reveal tests without calling TwitterWebViewer:

```sh
python3 -m unittest tests.test_twitterwebviewer_reveals
```

The default New Reveals refresh path is TwitterWebViewer.

## Updates

The editor checks the latest GitHub release on startup and shows update status in the Deck Library footer.

Use **Check for Updates** to manually refresh the release check. If a newer release is available, use **Install Update**. The updater downloads the release ZIP, validates it, backs up the current folder under `backups/update-backup-*`, preserves `deck_browser_data/`, installs the new files, and tries to relaunch the editor.

If an update fails, the updater rolls back from the backup and keeps the current install usable.

## macOS Notes

If macOS blocks the launcher, right-click `Open Deck Editor.command` and choose **Open**.

If Python is missing, install Python 3 and run the launcher again.

## Windows Notes

If Windows says Python is missing, install Python 3 from python.org and run `Open Deck Editor.bat` again.

If SmartScreen blocks the batch file, choose **More info**, then **Run anyway**.

## Deck Folder Detection

The launcher auto-detects:

```text
Assets/Decks
```

If your deck folder is somewhere else, set this environment variable before launching:

```sh
DCGO_DECK_ROOT=/path/to/Assets/Decks
```

## Local Data

Deck changes are written directly to `Assets/Decks`.

Local editor data is stored in:

```text
deck_browser_data/
```

This can include cached card metadata, exported deck images, and recoverable deleted-deck backups.

## Privacy

By default, the editor writes deck files locally and does not upload them. Cloud sync uploads decks only after Supabase is configured and you sign in. Local mobile sync is limited by the pairing token and your same-network access.
