'use strict';
const assert = require('node:assert/strict');
const {test} = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const {questions,normalize,grade,storageKey} = require('../a2-1-lessons-11-12.js');
test('both A2.1 lessons include 24 unique, explained exercises and one manual prompt', () => {
  assert.equal(new Set(questions.map(q=>q.id)).size,48);
  for(const lesson of [11,12]){
    const group=questions.filter(q=>q.lesson===lesson);
    assert.equal(group.length,24);
    assert.equal(group.filter(q=>q.manual).length,1);
    for(const q of group){
      assert.ok(q.instruction && q.why && q.topic);
      assert.ok(q.manual ? q.model && !q.answers.length : q.answers.length);
      if(q.options) q.answers.forEach(a=>assert.ok(q.options.includes(a)));
    }
  }
  assert.equal(storageKey,'germanPracticeA21Lessons11And12V1');
});
test('canonical and alternate answers grade, while wrong and empty answers do not', () => {
  for(const q of questions.filter(q=>!q.manual)){
    q.answers.forEach(answer=>{
      assert.equal(grade(q,answer),'correct',q.id);
      assert.equal(grade(q,answer.replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')),'correct',q.id);
    });
    assert.equal(grade(q,'   '),'empty');
    assert.equal(grade(q,'definitely wrong'),'wrong');
  }
});
test('grading preserves grammatical distinctions and ignores punctuation only', () => {
  const get=id=>questions.find(q=>q.id===id);
  assert.equal(grade(get('a21-l11-q01'),'sich'),'wrong');
  assert.equal(grade(get('a21-l11-q11'),'unterhalt'),'wrong');
  assert.equal(grade(get('a21-l12-q03'),'Wenn ich Hunger habe, ich esse Obst.'),'wrong');
  assert.equal(grade(get('a21-l12-q03'),'Wenn ich Hunger habe, dann esse ich Obst!'),'correct');
  assert.equal(grade(get('a21-l12-q04'),'Ich koche selber, wenn ich Zeit habe.'),'correct');
  assert.notEqual(normalize('schon'),normalize('schön'));
  assert.equal(normalize('fu\u0308hle'),normalize('fühle'));
});
test('open answers receive no automatic correctness score, including the model', () => {
  for(const q of questions.filter(q=>q.manual)){
    assert.equal(grade(q,''),'manual');
    assert.equal(grade(q,q.model),'manual');
    assert.equal(grade(q,'Another valid personal answer'),'manual');
  }
});
test('page is linked and its standalone scripts exist', () => {
  const root=path.join(__dirname,'..');
  const html=fs.readFileSync(path.join(root,'a2-1-lessons-11-12.html'),'utf8');
  assert.match(html,/<html lang="fa" dir="rtl">/);
  for(const script of html.matchAll(/<script defer src="([^"]+)"/g)){
    assert.ok(fs.existsSync(path.join(root,script[1])));
  }
  assert.match(fs.readFileSync(path.join(root,'index.html'),'utf8'),/href="a2-1-lessons-11-12.html"/);
});
