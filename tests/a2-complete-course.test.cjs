'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const original=require('../a2-2-lessons-14-16.js');
const previous=JSON.parse(JSON.stringify({lessons:original.lessons,words:original.words,verbs:original.verbs,passages:original.passages,exercises:original.exercises}));
const oldState={lesson:16,mode:'writing',entries:{'a22-14-g01':{value:'wird',checked:true},'a22-16-w1':{value:'Meine eigene Reservierung',checked:false}},learned:{'a22-15-v-01':true}};
const previousSanitized=original.sanitize(oldState);
const P=require('../a2-2-remaining-lessons.js');
const q=id=>P.exercises.find(e=>e.id===id),newLessons=[13,17,18,19,20,21,22,23,24];
test('all twelve A2.2 lessons have words, grammar, reading, listening, writing and speaking',()=>{
 assert.deepEqual(Object.keys(P.lessons).map(Number),Array.from({length:12},(_,i)=>i+13));
 assert.equal(P.words.length,600);assert.equal(P.exercises.length,2204);assert.equal(P.passages.length,24);assert.equal(P.verbs.length,52);
 const all=[...P.words,...P.exercises,...P.passages,...P.verbs].map(x=>x.id);
 assert.equal(new Set(all).size,all.length);
 for(let l=13;l<=24;l++){
  assert.equal(P.words.filter(w=>w.lesson===l).length,50);
  for(const [mode,count]of Object.entries({grammar:32,reading:10,listening:6,writing:2,speaking:2}))
   assert.equal(P.exercises.filter(e=>e.lesson===l&&e.mode===mode).length,count,l+':'+mode);
  assert.ok(P.lessons[l].guide.length>=7);
  assert.ok(P.exercises.some(e=>e.lesson===l&&e.mode==='verbs'));
 }
});
test('extending the course leaves every original item and old saved progress intact',()=>{
 for(const key of ['words','verbs','passages','exercises']){
  assert.deepEqual(P[key].filter(e=>[14,15,16].includes(e.lesson)),previous[key]);
 }
 for(const l of [14,15,16])assert.deepEqual(P.lessons[l],previous.lessons[l]);
 assert.deepEqual(P.sanitize(oldState),previousSanitized);
 assert.equal(P.storageKey,'germanPracticeA22Lessons14To16V1');
 assert.equal(P.courseId,'menschen-a2.2-14-16');
 for(const lesson of newLessons)assert.equal(P.sanitize({lesson,mode:'grammar'}).lesson,lesson);
 assert.equal(P.sanitize(null).lesson,13);
});
test('loading the extension again is idempotent',()=>{
 const counts=[P.words.length,P.exercises.length,P.passages.length,P.verbs.length];
 delete require.cache[require.resolve('../a2-2-remaining-lessons.js')];
 const again=require('../a2-2-remaining-lessons.js');
 assert.deepEqual([again.words.length,again.exercises.length,again.passages.length,again.verbs.length],counts);
 assert.equal(again.loadedPacks.length,1);
});
test('all new exercises are answerable, correctly keyed and linked to their reading passage',()=>{
 for(const e of P.exercises.filter(e=>newLessons.includes(e.lesson))){
  assert.ok(e.prompt&&e.topic&&e.why,e.id);
  if(e.manual){assert.ok(e.model&&e.checklist.length>=4);assert.equal(e.answers.length,0);assert.equal(P.grade(e,e.model),'manual');continue;}
  assert.ok(e.answers.length,e.id);
  for(const a of e.answers){
   assert.ok(a.trim(),e.id);assert.equal(P.grade(e,a),'correct',e.id);
   assert.equal(P.grade(e,a.replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')),'correct',e.id);
  }
  assert.equal(P.grade(e,''),'empty');assert.equal(P.grade(e,'not a German answer'),'wrong');
  if(e.options)e.answers.forEach(a=>assert.ok(e.options.includes(a),e.id));
  if(e.passageId)assert.ok(P.passages.some(p=>p.id===e.passageId&&p.lesson===e.lesson),e.id);
  if(e.mode==='listening')assert.equal(e.audioText,e.answers[0]);
 }
});
test('independent grammatical contrasts catch the important errors in each new lesson',()=>{
 for(const [id,right,wrong]of [
 ['a22-13-g01','Als','Wenn'],['a22-13-g02','wenn','als'],
 ['a22-17-g05','ans','am'],['a22-17-g06','am','ans'],
 ['a22-18-g13','Worauf','Auf wen'],['a22-18-g21','wen','wem'],
 ['a22-19-g01','aus dem','vom'],
 ['a22-20-g25','Ich durfte nicht gehen.','Ich musste nicht gehen.'],
 ['a22-21-g01','Welchen','Welcher'],['a22-21-g17','lasse','lässt'],
 ['a22-22-g01','bis','seitdem'],['a22-23-g01','der','den'],['a22-23-g02','den','der'],
 ['a22-24-g01','stand','steh']]){
  assert.equal(P.grade(q(id),right),'correct',id);assert.equal(P.grade(q(id),wrong),'wrong',id);
 }
 assert.equal(P.grade(q('a22-22-g02'),'Seitdem'),'correct');
 assert.equal(P.grade(q('a22-23-g17'),'Das ist der Beruf, der passt zu mir.'),'wrong');
 assert.equal(P.grade(q('a22-24-g25'),'stand auf'),'wrong');
});
test('irregular plurals, reflexive forms and past paradigms have independent checks',()=>{
 for(const [de,plural]of [['das Wörterbuch','Wörterbücher'],['die Fähre','Fähren'],['das Museum','Museen'],['der Autor','Autoren'],['der Zeuge','Zeugen'],['der Benutzername','Benutzernamen'],['das Praktikum','Praktika'],['der Tagesablauf','Tagesabläufe']]){
  assert.ok(P.words.some(w=>w.de===de&&w.plural===plural),de);
 }
 const find=(l,de)=>P.verbs.find(v=>v.lesson===l&&v.de===de);
 assert.equal(find(20,'dürfen').past[1],'durftest');
 assert.equal(find(20,'mögen').past[4],'mochtet');
 assert.equal(find(21,'lassen').forms[4],'lasst');
 assert.equal(find(22,'sich anmelden').forms[3],'melden uns an');
 assert.equal(find(23,'sich bewerben').forms[1],'bewirbst dich');
 assert.equal(find(24,'finden').past[1],'fandest');
 assert.equal(find(24,'bringen').past[0],'brachte');
 const daten=P.words.find(w=>w.lesson===22&&w.de==='die Daten');
 assert.equal(daten.pluralOnly,true);
 assert.ok(!P.exercises.some(e=>e.id===daten.id+'-article'));
});
test('the complete lesson menu and extension load before the existing UI',()=>{
 const html=fs.readFileSync(path.join(__dirname,'..','a2-2-lessons-14-16.html'),'utf8');
 const source=html.match(/<select id="lesson">([\s\S]*?)<\/select>/)[1];
 assert.deepEqual([...source.matchAll(/value="(\d+)"/g)].map(m=>Number(m[1])),Array.from({length:12},(_,i)=>13+i));
 assert.ok(html.indexOf('src="a2-2-lessons-14-16.js"')<html.indexOf('src="a2-2-remaining-lessons.js"'));
 assert.ok(html.indexOf('src="a2-2-remaining-lessons.js"')<html.indexOf('src="a2-2-lessons-14-16-ui.js"'));
 const home=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
 assert.match(home,/همهٔ درس‌های ۱۳ تا ۲۴/);
});
