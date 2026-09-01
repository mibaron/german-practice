# German Practice

A browser-based German learning app designed to grow from A1 into later levels.
The current data includes a complete Goethe-based adult A1 verb pack.

## Files

- `index.html` — application interface and logic
- `data.js` — core lesson content
- `a1-verbs.js` — modular A1 verbs, conjugations, Perfekt forms and exercises
- `A1_VERBS.md` — human-readable A1 verb list

## Controls

- Enter checks the typed answer.
- After a correct answer, press Enter again to open the next question.
- Arrow Right opens the next practice item.
- Arrow Left returns to the previous practice item.
- While editing a non-empty answer, the arrow keys retain their normal text-cursor behavior. After a correct answer, they navigate immediately.

## Lesson data

The **Lesson data** panel provides three controls:

- **Download our data.js** exports one complete standalone lesson file, including
  the bundled A1 pack.
- **Load my data.js** safely parses and activates a custom lesson file.
- **Use bundled data** removes the saved custom lesson file and restores the
  built-in lessons.

Custom lesson files are parsed as data and are not executed. The importer accepts
pure JSON or this assignment format:

```js
window.GERMAN_PRACTICE_DATA = {
  "meta": {},
  "verbs": [],
  "flashcards": [],
  "grammar": [],
  "sentences": []
};
```

The older `window.GERMAN_A1_DATA = {...};` name is also supported. A successfully
loaded custom file is saved in that browser with `localStorage`.

## A1 verb pack

- 152 teachable verb entries from the Goethe-Zertifikat A1: Start Deutsch 1 inventory
- all six Präsens forms
- Perfekt forms
- verb type and English meaning
- 152 flashcards and 152 additional exercises
- loaded automatically without replacing existing data

## Browser progress

The app automatically saves scores, mastered cards, practice history, and the
last position with browser `localStorage`.

- **Export progress** downloads a JSON progress backup.
- **Import progress** restores it in another browser or device.
- Lesson data is not included in the private progress backup.

## Adding material

Keep core material in `data.js`. Add future modular packs in separate JavaScript
files following the pattern in `a1-verbs.js`, then load them after `data.js`.

## Source

[Goethe-Zertifikat A1: Start Deutsch 1 Wortliste](https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf)

CEFR itself does not prescribe one universal verb list; this project uses the
Goethe adult A1 inventory as its explicit scope.
