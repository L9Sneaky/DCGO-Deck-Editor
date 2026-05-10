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
- Import deck lists from clipboard.
- Export deck images.
- Test opening hands.
- Update local card metadata from GitHub.

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

The editor starts a local-only server on `127.0.0.1`. It does not upload deck files anywhere.
