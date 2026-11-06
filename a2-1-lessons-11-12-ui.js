'use strict';
(function () {
  const {questions,grade,storageKey} = window.A21Lessons;
  const $ = id => document.getElementById(id);
  const fa = n => Number(n).toLocaleString('fa-IR');
  let state = {lesson:11, entries:{}};
  let storageAvailable = true;
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if(saved && [11,12].includes(saved.lesson)) state.lesson = saved.lesson;
    if(saved && saved.entries && typeof saved.entries === 'object') {
      for(const q of questions) {
        const entry = saved.entries[q.id];
        if(entry && typeof entry.value === 'string') {
          state.entries[q.id] = {value:entry.value.slice(0,6000),checked:entry.checked === true};
        }
      }
    }
  } catch (_) { storageAvailable = false; }
  function save() {
    try { localStorage.setItem(storageKey,JSON.stringify(state)); storageAvailable = true; }
    catch (_) { storageAvailable = false; }
    $('saveStatus').textContent = storageAvailable
      ? 'پاسخ‌ها و پیشرفت در همین مرورگر ذخیره می‌شوند.'
      : 'ذخیره در مرورگر در دسترس نیست؛ پاسخ‌ها فعلاً فقط در این صفحه می‌مانند.';
    $('saveStatus').classList.toggle('save-warning',!storageAvailable);
  }
  function el(tag, text, className) {
    const node = document.createElement(tag);
    if(text !== undefined) node.textContent = text;
    if(className) node.className = className;
    return node;
  }
  function current() { return questions.filter(q => q.lesson === state.lesson); }
  function progress() {
    const automatic = current().filter(q => !q.manual);
    const done = automatic.filter(q => state.entries[q.id]?.checked && grade(q,state.entries[q.id].value) === 'correct').length;
    const drafts = current().filter(q => q.manual && state.entries[q.id]?.value.trim()).length;
    $('progress').textContent = fa(done) + ' از ' + fa(automatic.length) + ' پاسخ درست · ' + fa(drafts) + ' نوشتهٔ آزاد ثبت‌شده';
  }
  function feedback(q, box, reveal) {
    const value = state.entries[q.id]?.value || '';
    const result = reveal ? (q.manual ? 'manual' : 'reveal') : grade(q,value);
    box.replaceChildren();
    box.className = 'feedback ' + (result === 'correct' ? 'correct' : result === 'wrong' ? 'wrong' : 'neutral');
    const label = {correct:'درست است ✓',wrong:'نیاز به اصلاح دارد.',empty:'اول پاسخت را بنویس.',manual:'نمونه برای مقایسه؛ این نوشته خودکار نمره نمی‌گیرد.',reveal:'پاسخ نمونه؛ برای یادگیری بخوان.'}[result];
    box.append(el('p',label));
    if(result === 'empty') return;
    if(result !== 'correct') {
      const answer = el('p',q.manual ? q.model : q.answers[0],'example');
      answer.dir = 'ltr'; answer.lang = 'de'; box.append(answer);
    }
    box.append(el('p',q.why));
  }
  function check(q) {
    const entry = state.entries[q.id] || {value:'',checked:false};
    entry.checked = !q.manual && Boolean(entry.value.trim());
    state.entries[q.id] = entry;
    feedback(q,$(q.id+'-feedback'),false);
  }
  function render() {
    $('lesson').value = String(state.lesson);
    $('lessonTitle').textContent = state.lesson === 11
      ? 'درس ۱۱ · احساسات، ضمیرهای انعکاسی و محصولات'
      : 'درس ۱۲ · wenn، عادت‌های غذایی و مقایسه';
    $('reference').replaceChildren();
    const refs = state.lesson === 11 ? [
      ['برای فعل‌های این درس، ضمیر را با فاعل هماهنگ کن.','ich → mich · du → dich · er/sie/es → sich · wir → uns · ihr → euch · sie/Sie → sich'],
      ['بعد از فعل مُدال، مصدر به آخر می‌رود.','Ich möchte mich ausruhen.'],
      ['auf برای انتظار اتفاق آینده؛ über برای خوشحالی از چیزی که رخ داده یا وجود دارد.','Ich freue mich auf den Urlaub. / Ich freue mich über das Geschenk.']
    ] : [
      ['در بخش wenn، فعل صرف‌شده آخر می‌آید.','Ich koche, wenn ich Zeit habe.'],
      ['اگر بخش wenn اول باشد، بعد از آن فعل جملهٔ اصلی می‌آید؛ dann اختیاری است.','Wenn ich Zeit habe, (dann) koche ich.'],
      ['با فعل مُدال هم فعل صرف‌شده آخرِ بخش wenn است.','Wenn ich arbeiten muss, stehe ich früh auf.'],
      ['برای مقایسه به این دو الگو دقت کن.','mehr … als / doppelt so viel … wie']
    ];
    for(const [note,example] of refs) {
      $('reference').append(el('p',note));
      const line = el('p',example,'example');line.dir='ltr';line.lang='de';$('reference').append(line);
    }
    $('exercises').replaceChildren();
    current().forEach((q,index) => {
      const card = el('form',undefined,'card');card.id=q.id;
      const heading=el('h3','تمرین '+fa(index+1)+' · '+q.topic);heading.id=q.id+'-title';
      card.setAttribute('aria-labelledby',heading.id);card.append(heading,el('p',q.instruction,'instruction'));
      if(q.text){const prompt=el('p',q.text,'prompt');prompt.dir='ltr';prompt.lang='de';card.append(prompt);}
      const inputId=q.id+'-answer';
      const label=el('label',q.manual?'نوشتهٔ تو':'پاسخ تو');label.htmlFor=inputId;card.append(label);
      const input=el(q.options?'select':q.sentence||q.manual?'textarea':'input');
      input.id=inputId;input.name=q.id;input.dir='ltr';input.lang='de';input.autocomplete='off';
      input.spellcheck=false;
      if(input.tagName!=='SELECT')input.maxLength=6000;
      if(q.options) {
        const placeholder=el('option','— انتخاب کن —');placeholder.value='';input.append(placeholder);
        for(const value of q.options){const option=el('option',value);option.value=value;input.append(option);}
      }
      input.value=state.entries[q.id]?.value || '';
      input.setAttribute('aria-describedby',q.id+'-feedback');
      input.addEventListener('input',() => {
        state.entries[q.id]={value:input.value,checked:false};
        $(q.id+'-feedback').replaceChildren();save();progress();
      });
      card.append(input);
      const actions=el('div',undefined,'actions');
      if(!q.manual){const button=el('button','بررسی');button.type='submit';actions.append(button);}
      const reveal=el('button',q.manual?'نمونه و راهنمای نوشتن':'نمایش پاسخ','secondary');reveal.type='button';
      reveal.addEventListener('click',() => feedback(q,$(q.id+'-feedback'),true));
      actions.append(reveal);card.append(actions);
      const box=el('div',undefined,'feedback');box.id=q.id+'-feedback';box.setAttribute('aria-live','polite');card.append(box);
      card.addEventListener('submit',event => {event.preventDefault();check(q);save();progress();});
      input.addEventListener('keydown',event => {
        if(event.key==='Enter' && input.tagName==='TEXTAREA' && !q.manual && !event.shiftKey){
          event.preventDefault();card.requestSubmit();
        }
      });
      $('exercises').append(card);
      if(state.entries[q.id]?.checked)feedback(q,box,false);
    });
    progress();
  }
  $('lesson').addEventListener('change',() => {state.lesson=Number($('lesson').value);save();render();});
  $('checkAll').addEventListener('click',() => {current().filter(q=>!q.manual).forEach(check);save();progress();});
  render();save();
})();
