# German Practice

A browser-based German learning app designed to grow from A1 into later levels.
The current data includes a complete Goethe-based adult A1 verb pack.

## Files

- `index.html` — application interface and logic
- `data.js` — core lesson content
- `a1-verbs.js` — modular A1 verbs, conjugations, Perfekt forms and exercises
- `menschen-lessons-12-14.js` — original vocabulary and grammar practice aligned to lessons 12–14
- `A1_VERBS.md` — human-readable A1 verb list

## Practice-set filter

Use the **Practice set** menu at the top of the app to show all material, only
lesson 12, 13, or 14, or the existing untagged material. The selection applies
to flashcards, grammar, sentence practice, search results, learned counts, and
the verb reference table, and it is saved with browser progress.

The lessons 12–14 pack contains original supplementary material rather than
reproductions of textbook exercises:

- Lesson 12: festivals, months and seasons, time expressions, and past events
- Lesson 13: places in town, directions, and local prepositions with dative
- Lesson 14: homes and rooms, possessive articles, and genitive names

## Verb conjugation practice

Each verb appears as one card with all of its forms together:

- `ich`
- `du`
- `er/sie/es`
- `wir / sie / Sie` (one combined field because these forms are identical)
- `ihr`
- Perfekt, when applicable

The lesson data keeps both the `wir` and `sie/Sie` keys for compatibility with
existing `data.js` files, while the app displays and tests them as one group.
The verb form is identical. For reflexive verbs, the combined answer preserves
the required pronoun difference, for example `melden uns/sich an`.

## Search and keyboard controls

The practice panel includes autocomplete search for verbs and vocabulary cards.
Selecting a result opens that exact item in Verb Quiz or Flashcards.

- Enter checks the typed answer.
- After a correct answer, press Enter again to open the next question.
- Arrow Right opens the next practice item.
- Arrow Left returns to the previous practice item.
- `/` focuses practice search.
- Up/Down selects an autocomplete result; Enter opens it.
- `?` opens the keyboard-shortcuts guide.
- Escape closes autocomplete results or the shortcut guide.
- While editing a non-empty answer, the arrow keys retain their normal text-cursor behavior. After a correct answer, they navigate immediately.

## Learned-practice queue

Learned practices are hidden by default in every section.

- Three consecutive correct answers automatically mark an item as learned.
- **Mark learned** and **Mark as learning** change the status manually.
- **Include learned** restores learned items for review.
- A wrong answer returns an item to the active learning queue.
- Search still finds learned verbs and words, labels them **Learned**, and can
  open them for review.
- When a section has no active items, the app shows a completion state with a
  button to review learned practices.

Learned status and the **Include learned** preference are stored in browser
progress and included in progress exports.

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
- all six Präsens data fields, with `wir` and `sie/Sie` combined in the interface
- Perfekt forms
- verb type and English meaning
- 152 flashcards and 152 additional exercises
- loaded automatically without replacing existing data

## Browser progress

The app automatically saves scores, learned statuses, practice history, filters,
and the last position with browser `localStorage`.

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
