GERMAN PRACTICE

A browser-based German learning app designed to grow from A1 into later levels.
The current data includes a complete Goethe-based adult A1 verb pack.

FILES
- index.html    -> the app
- data.js       -> core lesson content
- a1-verbs.js  -> modular A1 verbs, conjugations, Perfekt forms and exercises

A1 VERB PACK
- 152 teachable verb entries from the Goethe-Zertifikat A1: Start Deutsch 1 inventory
- all six Präsens forms
- Perfekt forms
- verb type and English meaning
- 152 flashcards and 152 additional exercises
- loaded automatically without replacing existing data

BROWSER PROGRESS
The app automatically saves scores, mastered cards, practice history, and the
last position with browser localStorage.

EXPORT / IMPORT
- Export progress downloads a JSON backup.
- Import progress restores it in another browser or device.
- Lesson data is not included in the private progress backup.

ADDING MATERIAL
Keep core material in data.js. Add future modular packs in separate JavaScript
files following the pattern in a1-verbs.js, then load them after data.js.

SOURCE
Goethe-Zertifikat A1: Start Deutsch 1 Wortliste:
https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf

CEFR itself does not prescribe one universal verb list; this project uses the
Goethe adult A1 inventory as its explicit scope.
