const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {test} = require('node:test');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(match => match[1]);
const packFile = 'menschen-verbs-12-24.js';
function load(includeLessonVerbs = true) {
  const context = vm.createContext({window: {}});
  for (const filename of scripts) {
    if (filename === packFile && !includeLessonVerbs) continue;
    vm.runInContext(fs.readFileSync(path.join(root, filename), 'utf8'), context, {filename});
  }
  return context;
}
const plain = value => JSON.parse(JSON.stringify(value));

test('every lesson from 12 to 24 has complete conjugation cards', () => {
  const data = load().window.GERMAN_PRACTICE_DATA;
  for (let lesson = 12; lesson <= 24; lesson++) {
    const verbs = data.verbs.filter(item => item.lessons?.includes(lesson));
    assert.ok(verbs.length >= 8, `Lesson ${lesson} is missing verb practice`);
    for (const item of verbs) {
      for (const person of ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie']) {
        assert.ok(item.present[person], `${item.verb} is missing ${person}`);
      }
      assert.ok(item.perfekt || item.skipPerfekt);
    }
  }
});

test('lesson assignments preserve existing answers and do not duplicate verbs', () => {
  const before = load(false).window.GERMAN_PRACTICE_DATA;
  const after = load().window.GERMAN_PRACTICE_DATA;
  assert.equal(new Set(after.verbs.map(item => item.verb)).size, after.verbs.length);
  for (const oldVerb of before.verbs) {
    const newVerb = after.verbs.find(item => item.verb === oldVerb.verb);
    assert.deepEqual(plain(newVerb.present), plain(oldVerb.present));
    assert.equal(newVerb.perfekt, oldVerb.perfekt);
    assert.equal(newVerb.meaning, oldVerb.meaning);
  }
  const shared = after.verbs.find(item => item.verb === 'stattfinden');
  assert.deepEqual(plain(shared.lessons), [12, 24]);
});

test('loading the lesson verb pack twice leaves the data unchanged', () => {
  const context = load();
  const before = plain(context.window.GERMAN_PRACTICE_DATA);
  vm.runInContext(fs.readFileSync(path.join(root, packFile), 'utf8'), context);
  assert.deepEqual(plain(context.window.GERMAN_PRACTICE_DATA), before);
});

test('supplementary verbs cover irregular, separable and reflexive forms', () => {
  const verbs = load().window.GERMAN_PRACTICE_DATA.verbs;
  const find = name => verbs.find(item => item.verb === name);
  assert.equal(find('vergessen').present.du, 'vergisst');
  assert.equal(find('anhalten').present['er/sie/es'], 'hält an');
  assert.equal(find('tragen').present.ihr, 'tragt');
  assert.equal(find('sich ausruhen').present.wir, 'ruhen uns aus');
  assert.equal(find('sich ausruhen').present['sie/Sie'], 'ruhen sich aus');
  assert.equal(find('abbiegen').perfekt, 'ist abgebogen');
  assert.equal(find('anstoßen').present.du, 'stößt an');
});
