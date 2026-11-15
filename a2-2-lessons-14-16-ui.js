'use strict';
(function(){
const P=window.A22Practice,$=id=>document.getElementById(id),fa=n=>Number(n).toLocaleString('fa-IR');
const names={guide:'راهنمای گرامر',vocabulary:'واژه‌نامه',flash:'فلش‌کارت',vocabQuiz:'آزمون واژه',grammar:'تمرین گرامر',verbs:'صرف فعل',listening:'شنیداری',reading:'درک مطلب',writing:'نوشتن',speaking:'مکالمه'};
let state=P.sanitize(null),page=0,query='',topic='all',remaining=false,direction=false;
let visible=[],filtered=[],storageOK=true;
try{state=P.sanitize(JSON.parse(localStorage.getItem(P.storageKey)));}catch(_){storageOK=false;}
function node(tag,text,cls){const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(cls)n.className=cls;return n;}
function german(text,cls='de'){const n=node('p',text,cls);n.lang='de';n.dir='ltr';return n;}
function button(text,fn,cls='secondary'){const b=node('button',text,cls);b.type='button';b.addEventListener('click',fn);return b;}
function notice(text){$('notice').textContent=text;}
function save(){
 try{localStorage.setItem(P.storageKey,JSON.stringify(state));storageOK=true;}catch(_){storageOK=false;}
 $('storageStatus').textContent=storageOK?'پاسخ‌ها و پیشرفت در همین مرورگر ذخیره می‌شوند.':'ذخیرهٔ مرورگر در دسترس نیست؛ برای نگه‌داشتن پاسخ‌ها پشتیبان بگیر.';
}
function speak(text){
 if(!('speechSynthesis' in window)){notice('این مرورگر پخش تلفظ را پشتیبانی نمی‌کند.');return;}
 speechSynthesis.cancel();
 const utterance=new SpeechSynthesisUtterance(text);utterance.lang='de-DE';utterance.rate=.85;
 const voice=speechSynthesis.getVoices().find(v=>v.lang.startsWith('de'));
 if(voice)utterance.voice=voice;
 utterance.onerror=()=>notice('پخش صدا در این دستگاه در دسترس نیست.');
 speechSynthesis.speak(utterance);
}
function isWords(){return ['vocabulary','flash'].includes(state.mode);}
function allForMode(){
 if(state.mode==='guide')return P.lessons[state.lesson].guide.map((g,i)=>({id:'guide-'+i,heading:g[0],note:g[1],example:g[2]}));
 if(isWords())return P.words.filter(w=>w.lesson===state.lesson);
 return P.exercises.filter(q=>q.lesson===state.lesson&&q.mode===state.mode);
}
function updateProgress(){
 const lessonQuestions=P.exercises.filter(q=>q.lesson===state.lesson&&!q.manual);
 const correct=lessonQuestions.filter(q=>state.entries[q.id]?.checked&&P.grade(q,state.entries[q.id].value)==='correct').length;
 const learned=P.words.filter(w=>w.lesson===state.lesson&&state.learned[w.id]).length;
 $('progress').textContent=fa(correct)+' / '+fa(lessonQuestions.length)+' پاسخ درست · '+fa(learned)+' / ۵۰ واژه';
}
function counts(mode){return mode==='guide'?P.lessons[state.lesson].guide.length:['flash','vocabulary'].includes(mode)?P.words.filter(w=>w.lesson===state.lesson).length:P.exercises.filter(q=>q.lesson===state.lesson&&q.mode===mode).length;}
function toolbar(){
 $('lesson').value=String(state.lesson);
 $('modes').replaceChildren();
 for(const mode of P.modes){
  const b=button(names[mode]+' · '+fa(counts(mode)),()=>{state.mode=mode;page=0;topic='all';save();toolbar();render();});
  b.dataset.mode=mode;b.setAttribute('aria-pressed',String(state.mode===mode));$('modes').append(b);
 }
 $('sectionTitle').textContent=names[state.mode]+' · درس '+fa(state.lesson);
 $('lessonSubtitle').textContent=P.lessons[state.lesson].fa;
 const topics=[...new Set(allForMode().map(q=>q.topic).filter(Boolean))];
 $('topic').replaceChildren();
 const all=node('option','همهٔ موضوع‌ها');all.value='all';$('topic').append(all);
 for(const t of topics){const option=node('option',t);option.value=t;$('topic').append(option);}
 if(!topics.includes(topic))topic='all';$('topic').value=topic;
 $('topicWrap').hidden=isWords()||state.mode==='guide';
 $('remainingWrap').hidden=!isWords();$('directionWrap').hidden=state.mode!=='flash';
 $('checkPage').hidden=['guide','flash','vocabulary','writing','speaking'].includes(state.mode);
 updateProgress();
}
function searchable(item){
 const text=[item.de,item.fa,item.example,item.heading,item.note,item.prompt,item.text,item.topic];
 if(item.passageId)text.push(P.passages.find(p=>p.id===item.passageId)?.text);
 return P.normalize(text.filter(Boolean).join(' '));
}
function feedback(q,box,reveal=false){
 const result=reveal?(q.manual?'manual':'reveal'):P.grade(q,state.entries[q.id]?.value||'');
 box.replaceChildren();box.className='feedback '+(result==='correct'?'correct':result==='wrong'?'wrong':'neutral');
 const messages={correct:'درست است ✓',wrong:'نیاز به اصلاح دارد.',empty:'اول پاسخت را بنویس.',manual:'نمونه برای مقایسه؛ پاسخ آزاد خودکار نمره نمی‌گیرد.',reveal:'پاسخ نمونه؛ نمایش آن امتیاز نمی‌دهد.'};
 box.append(node('p',messages[result]));
 if(result==='empty')return;
 if(result!=='correct')box.append(german(q.manual?q.model:q.answers[0]));
 box.append(node('p',q.why));
 if(q.checklist){const ul=node('ul');q.checklist.forEach(t=>ul.append(node('li',t)));box.append(ul);}
}
function check(q){
 const entry=state.entries[q.id]||{value:'',checked:false};
 entry.checked=Boolean(entry.value.trim())&&!q.manual;state.entries[q.id]=entry;
 feedback(q,$(q.id+'-feedback'));
}
function exerciseCard(q){
 const form=node('form',undefined,'card');form.id=q.id;
 const title=node('h3',q.topic);title.id=q.id+'-title';form.setAttribute('aria-labelledby',title.id);
 form.append(title,node('p',q.prompt,'prompt'));
 if(q.audioText)form.append(button('پخش جمله با صدای دستگاه',()=>speak(q.audioText)));
 if(q.text){const t=q.mode==='vocabQuiz'&&q.topic==='معنی و املا'?node('p',q.text):german(q.text);form.append(t);}
 const label=node('label',q.manual?(q.mode==='speaking'?'یادداشت مکالمهٔ تو':'نوشتهٔ تو'):'پاسخ تو','question-label');label.htmlFor=q.id+'-answer';form.append(label);
 const input=node(q.options?'select':q.sentence||q.manual?'textarea':'input',undefined,'answer');
 input.id=q.id+'-answer';input.name=q.id;input.dir='ltr';input.lang='de';input.autocomplete='off';input.spellcheck=false;
 if(q.options){const blank=node('option','— انتخاب کن —');blank.value='';input.append(blank);q.options.forEach(v=>{const o=node('option',v);o.value=v;input.append(o);});}else input.maxLength=8000;
 input.value=state.entries[q.id]?.value||'';
 input.setAttribute('aria-describedby',q.id+'-feedback');
 input.addEventListener('input',()=>{state.entries[q.id]={value:input.value,checked:false};$(q.id+'-feedback').replaceChildren();save();updateProgress();});
 input.addEventListener('keydown',e=>{if(e.key==='Enter'&&input.tagName==='TEXTAREA'&&!q.manual&&!e.shiftKey){e.preventDefault();form.requestSubmit();}});
 form.append(input);
 const actions=node('div',undefined,'actions');
 if(!q.manual){const b=node('button','بررسی');b.type='submit';actions.append(b);}
 actions.append(button(q.manual?'نمونه و چک‌لیست':'نمایش پاسخ',()=>feedback(q,$(q.id+'-feedback'),true)));
 form.append(actions);
 const box=node('div',undefined,'feedback');box.id=q.id+'-feedback';box.setAttribute('aria-live','polite');form.append(box);
 form.addEventListener('submit',e=>{e.preventDefault();check(q);save();updateProgress();});
 if(state.entries[q.id]?.checked)feedback(q,box);
 return form;
}
function wordCard(w){
 const card=node('article',undefined,'card');card.dataset.wordId=w.id;
 card.append(german(w.de,'de word'),node('p',w.fa));
 if(w.plural)card.append(german('Plural: die '+w.plural));
 card.append(german(w.example));
 const actions=node('div',undefined,'actions');
 actions.append(button('تلفظ',()=>speak(w.de)));
 const learned=button(state.learned[w.id]?'بازگرداندن به تمرین':'یاد گرفتم',()=>{
  if(state.learned[w.id])delete state.learned[w.id];else state.learned[w.id]=true;
  save();updateProgress();render();
 });
 actions.append(learned);card.append(actions);
 if(state.learned[w.id])card.append(node('span','✓ یادگرفته‌شده','learned'));
 return card;
}
function flashCard(w){
 const card=node('article',undefined,'flash');card.dataset.wordId=w.id;
 card.append(node('p','اول جواب را در ذهن بگو، بعد کارت را برگردان.','muted'));
 const front=node('div',direction?w.de:w.fa,'flash-front');
 if(direction){front.lang='de';front.dir='ltr';}card.append(front);
 const back=node('div',undefined,'flash-back');back.hidden=true;
 back.append(direction?node('p',w.fa,'meaning'):german(w.de,'de word'));
 if(w.plural)back.append(german('Plural: die '+w.plural));
 back.append(german(w.example),button('تلفظ واژه و مثال',()=>speak(w.de+'. '+w.example)));
 const actions=node('div',undefined,'actions');
 const flip=button('نمایش پاسخ',()=>{back.hidden=!back.hidden;flip.textContent=back.hidden?'نمایش پاسخ':'پنهان کردن پاسخ';learn.hidden=back.hidden;again.hidden=back.hidden;});
 const learn=button('یاد گرفتم',()=>{state.learned[w.id]=true;save();updateProgress();if(!remaining)page=Math.min(page+1,filtered.length-1);render();});
 const again=button('نیاز به مرور',()=>{delete state.learned[w.id];save();updateProgress();page=Math.min(page+1,filtered.length-1);render();});
 learn.hidden=again.hidden=true;actions.append(flip,learn,again);card.append(actions,back);
 if(state.learned[w.id])card.append(node('p','✓ قبلاً یادگرفته‌شده','learned'));
 return card;
}
function render(){
 if('speechSynthesis' in window)speechSynthesis.cancel();
 filtered=allForMode().filter(item=>(topic==='all'||item.topic===topic)&&(!query||searchable(item).includes(P.normalize(query)))&&(!isWords()||!remaining||!state.learned[item.id]));
 const size=state.mode==='flash'?1:12,pages=Math.ceil(filtered.length/size);
 page=Math.max(0,Math.min(page,Math.max(0,pages-1)));visible=filtered.slice(page*size,(page+1)*size);
 $('content').replaceChildren();$('prev').disabled=page===0;$('next').disabled=page+1>=pages;
 $('pageStatus').textContent=filtered.length?fa(page*size+1)+' تا '+fa(Math.min((page+1)*size,filtered.length))+' از '+fa(filtered.length):'۰ مورد';
 if(!visible.length){$('content').append(node('p','موردی با این فیلتر پیدا نشد. جست‌وجو یا فیلترها را تغییر بده.','empty'));return;}
 if(state.mode==='flash'){$('content').append(flashCard(visible[0]));return;}
 if(state.mode==='reading'){
  for(const id of [...new Set(visible.map(q=>q.passageId))]){
   const p=P.passages.find(p=>p.id===id),section=node('section',undefined,'reading-group'),article=node('article',undefined,'passage');
   article.append(node('h3',p.title),german(p.text),button('خواندن متن با صدای دستگاه',()=>speak(p.text)));
   const grid=node('div',undefined,'grid');visible.filter(q=>q.passageId===id).forEach(q=>grid.append(exerciseCard(q)));section.append(article,grid);$('content').append(section);
  }return;
 }
 const grid=node('div',undefined,'grid');
 for(const item of visible){
  if(state.mode==='guide'){const card=node('article',undefined,'card');card.append(node('h3',item.heading),node('p',item.note),german(item.example));grid.append(card);}
  else if(state.mode==='vocabulary')grid.append(wordCard(item));
  else grid.append(exerciseCard(item));
 }
 $('content').append(grid);
}
$('lesson').addEventListener('change',()=>{state.lesson=Number($('lesson').value);page=0;topic='all';save();toolbar();render();});
$('search').addEventListener('input',()=>{query=$('search').value;page=0;render();});
$('topic').addEventListener('change',()=>{topic=$('topic').value;page=0;render();});
$('remaining').addEventListener('change',()=>{remaining=$('remaining').checked;page=0;render();});
$('direction').addEventListener('change',()=>{direction=$('direction').checked;render();});
$('prev').addEventListener('click',()=>{page--;render();$('content').focus();});
$('next').addEventListener('click',()=>{page++;render();$('content').focus();});
$('checkPage').addEventListener('click',()=>{visible.filter(q=>q.answers&&!q.manual).forEach(check);save();updateProgress();});
$('export').addEventListener('click',()=>{
 const payload={schemaVersion:1,courseId:P.courseId,state};
 const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));
 const a=node('a');a.href=url;a.download='menschen-a22-lessons-14-16-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});
$('import').addEventListener('click',()=>$('importFile').click());
$('importFile').addEventListener('change',async()=>{
 const file=$('importFile').files[0];if(!file)return;
 try{
  if(file.size>2_000_000)throw new Error('فایل پشتیبان بیش از حد بزرگ است.');
  const payload=JSON.parse(await file.text());
  if(payload.schemaVersion!==1||payload.courseId!==P.courseId||!payload.state||typeof payload.state!=='object')throw new Error('این پشتیبان مربوط به این مجموعه نیست.');
  const imported=P.sanitize(payload.state);
  state={...imported,entries:{...state.entries,...imported.entries},learned:{...state.learned,...imported.learned}};
  page=0;topic='all';save();toolbar();render();notice('پشتیبان وارد شد؛ پاسخ‌های موجود با داده‌های پشتیبان ترکیب شدند.');
 }catch(e){notice(e instanceof SyntaxError?'فایل JSON معتبر نیست.':e.message);}
 finally{$('importFile').value='';}
});
$('inventory').textContent=fa(P.words.length)+' واژه و فلش‌کارت · '+fa(P.exercises.length)+' تمرین · '+fa(P.passages.length)+' متن خواندنی';
for(const [lesson,info] of Object.entries(P.lessons)){
 const a=node('a','راهنمای رسمی درس '+fa(lesson));a.href=info.source;
 $('sources').append(a,document.createTextNode(' · '));
}
toolbar();render();save();
})();
