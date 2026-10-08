const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const {test} = require('node:test');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const source = html.match(/function normalize\(s\)\{[\s\S]*?\n    \}/);
assert.ok(source, 'The shared answer normalizer must exist');
const normalize = vm.runInNewContext('(' + source[0] + ')');

test('accepts German characters and keyboard alternatives in either direction', () => {
  for (const [german, alternative] of [
    ['Straße', 'Strasse'], ['fährst', 'faehrst'], ['möchten', 'moechten'],
    ['müssen', 'muessen'], ['größer', 'groesser'], ['heißt', 'heisst']
  ]) {
    assert.equal(normalize(alternative), normalize(german));
    assert.equal(normalize(german), normalize(alternative));
  }
});

test('accepts uppercase letters and decomposed Unicode umlauts', () => {
  assert.equal(normalize('ÄÖÜẞ'), normalize('aeoeuess'));
  assert.equal(normalize('gru\u0308ßen'), normalize('gruessen'));
});

test('works for complete sentences, verb forms and individual gaps', () => {
  assert.equal(normalize('  Ich  möchte die Straße überqueren!  '),
    normalize('ich moechte die strasse ueberqueren'));
  assert.equal(normalize('hat aufgeraeumt'), normalize('hat aufgeräumt'));
  assert.equal(normalize('für'), normalize('fuer'));
});

test('still rejects misspellings and omitted umlauts', () => {
  for (const [correct, wrong] of [
    ['schön', 'schon'], ['für', 'fur'], ['Straße', 'Strase'],
    ['müssen', 'musen'], ['fährst', 'faehrt']
  ]) {
    assert.notEqual(normalize(correct), normalize(wrong));
  }
});
