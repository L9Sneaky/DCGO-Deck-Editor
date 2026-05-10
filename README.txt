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
The editor starts a local-only server on 127.0.0.1 and opens your browser.
It does not upload deck files anywhere.
