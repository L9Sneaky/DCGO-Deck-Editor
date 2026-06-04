DCGO Deck Editor - Drop-In Install
==================================

DCGO Deck Editor is a small local web editor for DCGO deck text files.
It runs only on your computer, opens in your browser, and writes changes
back to the DCGO deck folder.

Quick install
-------------
1. Download and unzip "DCGO Deck Editor.zip".
2. Move the "DCGO Deck Editor" folder into your DCGO client folder.
3. Run the launcher for your system:

   macOS:
   Open Deck Editor.command

   Windows:
   Open Deck Editor.bat

4. Keep the terminal/command window open while using the editor.

Expected folder layout
----------------------
The editor auto-detects this folder:

Assets/Decks

The recommended layout is:

DCGO client folder/
  Assets/
    Decks/
  DCGO Deck Editor/
    Open Deck Editor.command
    Open Deck Editor.bat
    deck_browser/

macOS notes
-----------
- If macOS blocks the launcher, right-click "Open Deck Editor.command"
  and choose Open.
- If Python is missing, install Python 3, then run the launcher again.
- The Mac autoupdate wrapper can also use the shared deck folder in:

  ~/Library/Application Support/DCGO-AutoUpdate-Test/userdata/Decks

Windows notes
-------------
- If Windows says Python is missing, install Python 3 from python.org,
  then run "Open Deck Editor.bat" again.
- If SmartScreen blocks the batch file, choose More info, then Run anyway.

What the editor can do
----------------------
- Browse current decks visually.
- Create, rename, duplicate, and delete decks.
- Edit deck lists with card search and filters.
- Import deck lists from clipboard.
- Export a deck image.
- Test opening hands.
- Update the local card database from GitHub.
- Check GitHub Releases for editor updates and install newer release ZIPs.
- Optional Supabase cloud sync for sharing decks with the mobile app.
- Same-network local mobile sync with a pairing payload or QR code.

Cloud sync
----------
Cloud sync is optional and keeps the local Assets/Decks folder as the
DCGO-compatible source of truth on desktop.

1. Run supabase/schema.sql from this folder in your Supabase project.
2. Enable Supabase email/password auth.
3. Start the deck editor with these environment variables:

DCGO_SUPABASE_URL=https://your-project.supabase.co
DCGO_SUPABASE_ANON_KEY=your-anon-key

Use the Cloud Sync panel in the Deck Library to create an account, sign in,
and run Sync Now. Saving a deck also triggers sync when signed in. If the same
deck changes on desktop and mobile, the newer updated_at value wins.

Local mobile sync
-----------------
The Deck Library includes a local pairing panel for same-network mobile sync.
The desktop editor generates one stable pairing token under:

deck_browser/local_pairing.json

Copy the pairing payload into the mobile app, or use the QR code. Both devices
must be on the same Wi-Fi/LAN, and the desktop server must be reachable from
the phone.

Updates
-------
The editor checks GitHub Releases on startup and shows update status in the
Deck Library footer. Use "Check for Updates" to refresh manually. If a newer
release is available, "Install Update" downloads the release ZIP, validates it,
backs up the current folder under backups/update-backup-*, preserves local data,
installs the new files, and tries to relaunch the editor.

Where files are written
-----------------------
Deck changes are written directly to:

Assets/Decks

Local editor data is stored in:

deck_browser_data/

This can include cached card metadata, exported deck images, and recoverable
deleted-deck backups.

Advanced deck folder override
-----------------------------
If your deck folder is somewhere else, set this environment variable before
launching:

DCGO_DECK_ROOT=/path/to/Assets/Decks

What not to ship manually
-------------------------
If you are making your own zip, do not include:

- deck_browser/output/current_decks.html
- deck_browser/__pycache__/
- deck_browser_data/
- .git/

Those are generated or local-only files.

Privacy
-------
By default, the editor writes deck files locally and does not upload them.
Cloud sync uploads decks only after Supabase is configured and you sign in.
Local mobile sync is limited by the pairing token and your same-network access.
