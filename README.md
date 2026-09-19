# German Practice

A browser-based German learning app designed to grow from A1 into later levels.
The current data includes a complete Goethe-based adult A1 verb pack.

## Files

- `index.html` — application interface and logic
- `data.js` — core lesson content
- `a1-verbs.js` — modular A1 verbs, conjugations, Perfekt forms and exercises
- `menschen-lessons-12-14.js` — original vocabulary and grammar practice aligned to lessons 12–14
- `menschen-lessons-15-17.js` — original vocabulary, grammar, and sentence practice aligned to lessons 15–17
- `menschen-lesson-18.js` — original vocabulary, grammar, and sentence practice aligned to lesson 18
- `menschen-lessons-19-20.js` — original vocabulary, grammar, and sentence practice aligned to lessons 19–20
- `menschen-lessons-21-24.js` — original vocabulary, grammar, and sentence practice aligned to lessons 21–24
- `menschen-gap-texts-15-24.js` — gap-fill sentences, messages, and e-mails for lessons 15–24
- `A1_VERBS.md` — human-readable A1 verb list

## Practice-set filter

Use the **Practice set** menu at the top of the app to show all material, one of
the bundled lessons, or the existing untagged material. The selection applies
to flashcards, grammar, sentence practice, search results, learned counts, and
the verb reference table, and it is saved with browser progress.

The lesson packs contain original supplementary material rather than
reproductions of textbook exercises:

- Lesson 12: festivals, months and seasons, time expressions, and past events
- Lesson 13: places in town, directions, and local prepositions with dative
- Lesson 14: homes and rooms, possessive articles, and genitive names
- Lesson 15: neighborhoods, city and nature, and dative personal pronouns
- Lesson 16: hotel problems, asking for help, appointments, and temporal prepositions (`vor`, `nach`, `bei`, `in`, `für`)
- Lesson 17: education and career plans, `mit`/`ohne`, `wollen`, and `werden`
- Lesson 18: body parts, illness and the doctor, advice with `sollen`, the formal imperative, and dative pronouns
- Lesson 19: describing people, past forms of `sein`/`haben`, `un-` adjectives, and inseparable Perfekt forms
- Lesson 20: household chores, `du`/`ihr` imperatives, polite requests, and accusative versus dative pronouns
- Lesson 21: traffic, means of transport, directions, and rules with `dürfen` and `müssen`
- Lesson 22: clothing, comparatives and superlatives, `als`/`wie`, and demonstrative `der`/`das`/`die`
- Lesson 23: weather, seasons, points of the compass, and wishes with `würde`
- Lesson 24: celebrations, dates with ordinal numbers, `schenken`/`gratulieren` with dative, and invitations

## Gap-fill sentences and e-mails

Sentence practice can show a whole sentence, message, or e-mail with one input
per missing word instead of a single answer box. The text stays visible while
you type, so longer texts work as well as short sentences.

- Each gap is written in the data as `[answer|hint]`, for example
  `Ich [bin|sein, ich-Form] gerade bei der Arbeit.`
- The hint is hidden. Hover over or click the small `?` inside a gap to see it;
  Tab skips the marker and moves straight to the next gap.
- Enter jumps to the next empty gap; on the last gap it checks the answer.
- **Check** colours each gap green or red and prints the correct word under a
  wrong gap. Editing a gap clears its colour.
- **Show answer** prints the correct word under every gap and leaves what you
  typed untouched.
- An item counts as correct only when every gap is right.

A gap item needs `type`, `question` (the task), `text` (with gaps), and
optionally `explanation`. Bundled packs also set `answer` to the filled text so
progress keys and exports stay stable.

## Flashcards

Flashcards show an English clue first so the learner has to recall the German
word or phrase. Revealing the answer shows the German form and, when available,
a German example sentence. Each card also has a saved attempt bar: green shows
correct tries and red shows incorrect tries for that specific card.

## Akkusativ and Dativ reference

Below the practice stats, the app includes side-by-side Akkusativ and Dativ
article tables, a Nominativ/Akkusativ/Dativ personal-pronoun table, and short
reminders for common verbs, prepositions, contractions, and the dative-plural
`-(e)n` ending.

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
