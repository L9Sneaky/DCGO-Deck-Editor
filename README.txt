DCGO Deck Editor - Drop-In Install
==================================

What to ship
------------
Ship these files/folders together:

- deck_browser/
- Open Deck Editor.command
- Open Deck Editor.bat

Do not ship deck_browser/output/current_decks.html. It is generated when the editor opens.
Do not ship deck_browser/__pycache__/.

Windows users
-------------
1. Copy this Deck Editor folder into the DCGO client folder.
   The folder should be next to Assets, or inside the client folder.
2. Double-click Open Deck Editor.bat.
3. If Windows says Python is missing, install Python 3 and run it again.

macOS users
-----------
1. Copy this Deck Editor folder into the DCGO client folder.
2. Double-click Open Deck Editor.command.
3. If macOS blocks the file, right-click it and choose Open.

Expected client layout
----------------------
The launcher auto-detects this folder:

Assets/Decks

If the deck folder is somewhere else, set this environment variable before launching:

DCGO_DECK_ROOT=/path/to/Assets/Decks

Where data is stored
--------------------
The editor edits deck files directly in Assets/Decks.
Local cache, exports, and deleted-deck backups are saved in:

deck_browser_data/

Notes
-----
The deck editor starts a local-only web server on 127.0.0.1 and opens your browser.
It does not upload deck files anywhere.
