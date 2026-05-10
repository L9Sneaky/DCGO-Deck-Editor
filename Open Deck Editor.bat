@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "OUTPUT_HTML=%SCRIPT_DIR%deck_browser\output\current_decks.html"
set "SERVER_SCRIPT=%SCRIPT_DIR%deck_browser\deck_browser_server.py"
set "BUILDER_SCRIPT=%SCRIPT_DIR%deck_browser\build_deck_browser.py"

if defined DCGO_DECK_ROOT (
  if exist "%DCGO_DECK_ROOT%\" set "DECK_ROOT=%DCGO_DECK_ROOT%"
)

if not defined DECK_ROOT if exist "%SCRIPT_DIR%Assets\Decks\" set "DECK_ROOT=%SCRIPT_DIR%Assets\Decks"
if not defined DECK_ROOT if exist "%SCRIPT_DIR%..\Assets\Decks\" set "DECK_ROOT=%SCRIPT_DIR%..\Assets\Decks"
if not defined DECK_ROOT if exist "%SCRIPT_DIR%DCGO_Application\Assets\Decks\" set "DECK_ROOT=%SCRIPT_DIR%DCGO_Application\Assets\Decks"

if not defined DECK_ROOT (
  for /d /r "%SCRIPT_DIR%" %%D in (Decks) do (
    for %%P in ("%%~dpD.") do (
      if /i "%%~nxP"=="Assets" set "DECK_ROOT=%%~fD"
    )
    if defined DECK_ROOT goto :found_decks
  )
)
:found_decks

if defined DCGO_APP_SUPPORT_DIR (
  set "APP_SUPPORT_DIR=%DCGO_APP_SUPPORT_DIR%"
) else (
  set "APP_SUPPORT_DIR=%SCRIPT_DIR%deck_browser_data"
)

if not exist "%SERVER_SCRIPT%" (
  echo Missing deck browser server:
  echo %SERVER_SCRIPT%
  pause
  exit /b 1
)

if not exist "%BUILDER_SCRIPT%" (
  echo Missing deck browser builder:
  echo %BUILDER_SCRIPT%
  pause
  exit /b 1
)

set "PYTHON_CMD=py -3"
%PYTHON_CMD% --version >nul 2>nul
if errorlevel 1 set "PYTHON_CMD=python"
%PYTHON_CMD% --version >nul 2>nul
if errorlevel 1 (
  echo Python 3 is required.
  echo Install Python 3 from https://www.python.org/downloads/ and run this again.
  pause
  exit /b 1
)

if not exist "%SCRIPT_DIR%deck_browser\output" mkdir "%SCRIPT_DIR%deck_browser\output"
if not exist "%APP_SUPPORT_DIR%" mkdir "%APP_SUPPORT_DIR%"

if defined DECK_ROOT (
  %PYTHON_CMD% "%SERVER_SCRIPT%" --app-support-dir "%APP_SUPPORT_DIR%" --deck-root "%DECK_ROOT%" --output "%OUTPUT_HTML%" --open
) else (
  echo Could not find Assets\Decks automatically.
  echo Put this Deck Editor folder inside the DCGO client folder, or set DCGO_DECK_ROOT.
  pause
  exit /b 1
)

if errorlevel 1 pause
