'use strict';
const {test}=require('node:test');
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const P=require('../a2-2-lessons-14-16.js');
const q=id=>P.exercises.find(e=>e.id===id);
test('the three A2.2 lessons have a complete, uniquely identified content set',()=>{
 assert.equal(P.words.length,150);assert.equal(P.exercises.length,524);assert.equal(P.passages.length,6);
 const ids=[...P.words,...P.exercises,...P.verbs,...P.passages].map(x=>x.id);
 assert.equal(new Set(ids).size,ids.length);
 for(const lesson of [14,15,16]){
  assert.equal(P.words.filter(w=>w.lesson===lesson).length,50);
  assert.equal(P.exercises.filter(e=>e.lesson===lesson&&e.mode==='grammar').length,32);
  assert.equal(P.exercises.filter(e=>e.lesson===lesson&&e.mode==='reading').length,10);
  assert.equal(P.exercises.filter(e=>e.lesson===lesson&&e.manual).length,4);
  assert.equal(P.verbs.filter(v=>v.lesson===lesson).length,4);
  assert.equal(P.exercises.filter(e=>e.lesson===lesson&&e.mode==='listening').length,6);
  assert.ok(P.lessons[lesson].guide.length>=7);
 }
});
test('every question is actionable and every automatic answer grades correctly',()=>{
 for(const e of P.exercises){
  assert.ok(e.prompt&&e.topic&&e.why,e.id);
  if(e.manual){assert.equal(e.answers.length,0);assert.ok(e.model&&e.checklist.length>=4);continue;}
  assert.ok(e.answers.length,e.id);
  for(const a of e.answers){
   assert.ok(a.trim(),e.id);
   assert.equal(P.grade(e,a),'correct',e.id);
   assert.equal(P.grade(e,a.replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')),'correct',e.id);
  }
  assert.equal(P.grade(e,''),'empty');assert.equal(P.grade(e,'This is not a German answer'),'wrong');
  if(e.options){assert.ok(e.options.length>=2);e.answers.forEach(a=>assert.ok(e.options.includes(a)));}
  if(e.passageId)assert.ok(P.passages.some(p=>p.id===e.passageId&&p.lesson===e.lesson));
 }
});
test('noun gender, plural and irregular forms agree with independently stated examples',()=>{
 const expected={'a22-14-v-04':['der','Briefumschläge'],'a22-14-v-17':['das','Etiketten'],
 'a22-15-v-15':['der','Regisseure'],'a22-16-v-15':['der','Aufzüge'],
 'a22-16-v-21':['die','Saunen'],'a22-16-v-23':['der','Bademäntel']};
 for(const [id,[article,plural]]of Object.entries(expected)){
  const w=P.words.find(w=>w.id===id);assert.equal(w.article,article);assert.equal(w.plural,plural);
 }
 assert.equal(q('a22-14-g09').answers[0],'verschlossen');
 assert.equal(q('a22-14-g16').answers[0],'gewogen');
 assert.equal(P.verbs.find(v=>v.de==='empfehlen').forms[1],'empfiehlst');
 assert.equal(P.verbs.find(v=>v.de==='ankommen').perfekt,'ist angekommen');
});
test('grading distinguishes passive agreement, pronoun order and indirect questions',()=>{
 assert.equal(P.grade(q('a22-14-g02'),'wird'),'wrong');
 assert.equal(P.grade(q('a22-14-g17'),'Das Paket wird geöffnet!'),'correct');
 assert.equal(P.grade(q('a22-15-g11'),'Ich gebe ihm es.'),'wrong');
 assert.equal(P.grade(q('a22-15-g11'),'Ich gebe es ihm.'),'correct');
 assert.equal(P.grade(q('a22-16-g09'),'Wissen Sie, wo ist der Aufzug?'),'wrong');
 assert.equal(P.grade(q('a22-16-g09'),'Wissen Sie, wo der Aufzug ist?'),'correct');
 assert.equal(P.grade(q('a22-16-g05'),'wenn'),'wrong');
 assert.equal(P.grade(q('a22-16-g07'),'Ob'),'wrong');
 assert.equal(P.grade(q('a22-16-g19'),'dem'),'wrong');
 assert.notEqual(P.normalize('schon'),P.normalize('schön'));
 assert.equal(P.normalize('gru\u0308ßen'),P.normalize('gruessen'));
});
test('open writing and speaking never receive an automatic correctness score',()=>{
 for(const e of P.exercises.filter(e=>e.manual)){
  assert.equal(P.grade(e,e.model),'manual');assert.equal(P.grade(e,'Another personal answer'),'manual');
 }
});
test('saved state is scoped to this course and excludes unknown or malformed entries',()=>{
 const state=P.sanitize({lesson:16,mode:'reading',entries:{
  'a22-16-g01':{value:'ob',checked:true},'a22-16-w1':{value:'Draft',checked:true},
  'a22-14-g01':{value:{bad:'input'},checked:true},foreign:{value:'private'}
 },learned:{'a22-14-v-01':true,foreign:true}});
 assert.equal(state.lesson,16);assert.equal(state.mode,'reading');
 assert.equal(state.entries['a22-16-g01'].checked,true);
 assert.equal(state.entries['a22-16-w1'].checked,false);
 assert.equal(state.entries['a22-14-g01'],undefined);
 assert.equal(state.entries.foreign,undefined);assert.equal(state.learned.foreign,undefined);
 assert.deepEqual(P.sanitize({lesson:11,mode:'unsupported'}),P.sanitize(null));
 assert.ok(P.storageKey.includes('A22'));
});
test('all vocabulary cards have meanings and examples and all page assets are local',()=>{
 for(const w of P.words){assert.ok(w.de&&w.fa&&w.example);if(w.article)assert.ok(['der','die','das'].includes(w.article));}
 const root=path.join(__dirname,'..'),html=fs.readFileSync(path.join(root,'a2-2-lessons-14-16.html'),'utf8');
 assert.match(html,/<html lang="fa" dir="rtl">/);
 for(const m of html.matchAll(/(?:src|href)="(a2-2-[^"]+)"/g))assert.ok(fs.existsSync(path.join(root,m[1])));
 assert.match(fs.readFileSync(path.join(root,'index.html'),'utf8'),/href="a2-2-lessons-14-16.html"/);
});
