// Run with Playwright installed: node tests/a22-mobile.browser.cjs
// PLAYWRIGHT_MODULE may point to a shared installation; Chrome must be available.
'use strict';
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const fs=require('node:fs'),http=require('node:http'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.join(__dirname,'..');
(async()=>{
 const server=http.createServer((req,res)=>{
  const name=decodeURIComponent(req.url.split('?')[0]).replace(/^\//,'');
  if(name.includes('..')){res.writeHead(403);return res.end();}
  try{res.setHeader('Content-Type',name.endsWith('.js')?'text/javascript; charset=utf-8':name.endsWith('.css')?'text/css; charset=utf-8':name.endsWith('.svg')?'image/svg+xml':'text/html; charset=utf-8');res.end(fs.readFileSync(path.join(root,name)));}
  catch(_){res.writeHead(404);res.end();}
 });
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 let browser;
 try{
  browser=await chromium.launch({channel:'chrome',headless:true});
  const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('http://127.0.0.1:'+server.address().port+'/a2-2-lessons-14-16.html');
  const mode=m=>page.locator('#modeSelect').selectOption(m);
  await page.locator('#lesson').selectOption('14');await mode('grammar');
  assert.equal(await page.locator('form.card').count(),1);
  let bounds=await page.locator('.answer').boundingBox();
  assert.ok(bounds.y+bounds.height<365,'answer fits in the upper half of the initial mobile screen');
  await page.locator('.answer').fill('werden');await page.locator('.answer').press('Enter');
  assert.match(await page.locator('.feedback').innerText(),/نیاز به اصلاح/);
  assert.equal(await page.locator('.answer').evaluate(e=>e===document.activeElement),true);
  await page.locator('.answer').fill('wird');await page.locator('.answer').press('Enter');
  assert.equal(await page.locator('form.card').getAttribute('id'),'a22-14-g02');
  assert.equal(await page.locator('.answer').evaluate(e=>e===document.activeElement),true,'one Enter checks, advances, and focuses');
  assert.match(await page.locator('#runMessage').innerText(),/درست بود/);
  await page.locator('.answer').fill('werden');await page.locator('#checkPage').tap();
  assert.equal(await page.locator('form.card').getAttribute('id'),'a22-14-g03','one tap checks and advances');
  assert.match(await page.locator('#runStreak').innerText(),/۲ درست پیاپی/);
  assert.equal(await page.locator('#runMeter').evaluate(e=>e.value),2);
  await page.reload();
  assert.equal(await page.locator('form.card').getAttribute('id'),'a22-14-g03','resume at first unresolved item');
  await page.locator('#prev').tap();
  await page.locator('#prev').tap();assert.equal(await page.locator('.answer').inputValue(),'wird');
  // Editing an accepted answer clears its checked state; IME confirmation is not submission.
  await page.locator('.answer').fill('xyz');
  await page.locator('.answer').dispatchEvent('keydown',{key:'Enter',isComposing:true});
  assert.equal(await page.locator('.feedback').innerText(),'');
  assert.match(await page.locator('#checkPage').innerText(),/بررسی/);
  await page.locator('.answer').evaluate(e=>e.setSelectionRange(1,2));
  await page.getByRole('button',{name:'درج ä',exact:true}).tap();
  assert.equal(await page.locator('.answer').inputValue(),'xäz');
  assert.equal(await page.locator('.answer').evaluate(e=>e.selectionStart),2);
  await page.reload();assert.equal(await page.locator('.answer').inputValue(),'xäz');
  await page.locator('#studySettings summary').tap();
  await page.locator('#search').fill('کدام جمله یعنی «کارت در حال نوشته شدن است»');
  await page.locator('#studySettings summary').tap();
  assert.equal(await page.locator('form.card select').count(),0);
  assert.equal(await page.locator('.choices button').count(),2);
  assert.equal(await page.locator('#checkPage').isVisible(),false);
  await page.locator('.choices button').filter({hasText:'Mina hat'}).tap();
  assert.match(await page.locator('.feedback').innerText(),/دوباره/);
  assert.doesNotMatch(await page.locator('.feedback').innerText(),/Die Karte/);
  assert.equal(await page.locator('#runMeter').evaluate(e=>e.value),0);
  await page.locator('.choices button').filter({hasText:/^Die Karte wird/}).tap();
  assert.match(await page.locator('.run-summary').innerText(),/بخش کامل شد/);
  assert.match(await page.locator('.run-summary').innerText(),/۱ از ۱ پاسخ درست/);
  await page.locator('#studySettings summary').tap();
  await page.locator('#search').fill('کدام درخواست برای ارسال بسته است');
  await page.locator('#studySettings summary').tap();
  assert.equal(await page.locator('.choices button').count(),3);
  await page.locator('#next').tap();
  assert.match(await page.locator('.run-summary').innerText(),/پایان دور/);
  await page.getByRole('button',{name:'تمرین سؤال‌های باقی‌مانده'}).tap();
  await page.keyboard.press('1');
  assert.match(await page.locator('.run-summary').innerText(),/بخش کامل شد/);
  await page.locator('#studySettings summary').tap();
  await page.locator('#search').fill('');
  await page.locator('#studySettings summary').tap();
  // Confirm that switching answer formats requires no extra Next or focus tap.
  await page.evaluate(()=>{
   for(let step=0;step<23;step++)document.getElementById('next').click();
  });
  assert.equal(await page.locator('form.card').getAttribute('id'),'a22-14-g24');
  await page.locator('.answer').fill('Im Saal wird getanzt.');
  await page.keyboard.press('Enter');
  // The two-option question was answered above, so the next input is g26.
  assert.equal(await page.locator('form.card').getAttribute('id'),'a22-14-g26');
  await page.locator('#prev').tap();
  await page.locator('.choices button').filter({hasText:/^Die Karte wird/}).tap();
  assert.equal(await page.locator('form.card').getAttribute('id'),'a22-14-g26');
  assert.equal(await page.locator('.answer').evaluate(e=>e===document.activeElement),true);
  await mode('writing');await page.locator('.answer').fill('Hallo');await page.locator('.answer').press('Enter');
  await page.locator('.answer').press('End');await page.locator('.answer').press('x');
  assert.match(await page.locator('.answer').inputValue(),/\n/);
  assert.equal(await page.locator('#checkPage').isVisible(),false);
  const draft=await page.locator('.answer').inputValue();await page.reload();assert.equal(await page.locator('.answer').inputValue(),draft);
  // All lessons/modes remain reachable, including the last question in each mode.
  const reached=await page.evaluate(()=>{
   let n=0;
   for(let lesson=13;lesson<=24;lesson++){
    const select=document.getElementById('lesson');select.value=lesson;select.dispatchEvent(new Event('change'));
    for(const mode of ['vocabQuiz','grammar','verbs','listening','reading','writing','speaking']){
     const sel=document.getElementById('modeSelect');sel.value=mode;sel.dispatchEvent(new Event('change'));
     const expected=window.A22Practice.exercises.filter(q=>q.lesson===lesson&&q.mode===mode);
     const prev=document.getElementById('prev');
     while(!prev.disabled)prev.click();
     for(let i=0;i<expected.length;i++){
      if(document.querySelector('form.card')?.id!==expected[i].id)throw Error('Unreachable '+expected[i].id);
      n++;if(i<expected.length-1)document.getElementById('next').click();
     }
     const next=document.getElementById('next');
     if(!next.disabled){
      next.click();
      if(!document.querySelector('.run-summary'))throw Error('Last question not bounded');
     }
    }
   }return n;
  });assert.equal(reached,2204);
  for(const width of [320,390,768,1280]){
   await page.setViewportSize({width,height:844});
   for(const m of ['guide','vocabulary','flash','vocabQuiz','grammar','verbs','listening','reading','writing','speaking']){
    await mode(m);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),m+' overflow at '+width);
   }
  }
  await page.setViewportSize({width:390,height:844});await page.locator('#lesson').selectOption('14');await mode('grammar');
  await page.evaluate(()=>scrollTo(0,0));
  if(process.env.QA_OUTPUT)await page.screenshot({path:path.join(process.env.QA_OUTPUT,'a22-mobile-redesign.png')});
  // A resized layout viewport (Android) and an overlaid visual viewport (iOS).
  await page.setViewportSize({width:390,height:420});await page.locator('.answer').focus();
  await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  bounds=await page.locator('.answer').boundingBox();
  let dock=await page.locator('#practiceBar').boundingBox();
  assert.ok(bounds.y>=0&&bounds.y+bounds.height<=dock.y,'answer stays above the dock');
  assert.ok(dock.y+dock.height<=421,'dock stays inside resized viewport');
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>{
   Object.defineProperty(visualViewport,'height',{configurable:true,value:480});
   Object.defineProperty(visualViewport,'offsetTop',{configurable:true,value:0});
   visualViewport.dispatchEvent(new Event('resize'));
  });
  await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
  dock=await page.locator('#practiceBar').boundingBox();assert.ok(Math.abs(dock.y+dock.height-480)<2,'dock follows overlaid keyboard');
  bounds=await page.locator('.answer').boundingBox();assert.ok(bounds.y>=0&&bounds.y+bounds.height<=dock.y,'focused answer remains visible with overlaid keyboard');
  await page.evaluate(()=>{delete visualViewport.height;delete visualViewport.offsetTop;visualViewport.dispatchEvent(new Event('resize'));});
  // Empty filters must clear the active action instead of submitting a stale question.
  await page.locator('#studySettings summary').click();await page.locator('#search').fill('zzzznonexistent');
  assert.equal(await page.locator('form.card').count(),0);assert.equal(await page.locator('#checkPage').isVisible(),false);
  await page.locator('#search').fill('');
  await page.locator('#studySettings summary').click();
  await page.setViewportSize({width:1280,height:960});await page.evaluate(()=>scrollTo(0,0));
  if(process.env.QA_OUTPUT)await page.screenshot({path:path.join(process.env.QA_OUTPUT,'a22-desktop-redesign.png')});
  const desktop=await browser.newPage({viewport:{width:1440,height:900}});
  await desktop.goto(page.url());
  await desktop.locator('#lesson').selectOption('14');
  await desktop.locator('.answer').fill('wird');
  await desktop.keyboard.press('Enter');
  await desktop.keyboard.type('werden');
  await desktop.keyboard.press('Enter');
  assert.equal(await desktop.locator('form.card').getAttribute('id'),'a22-14-g03');
  assert.equal(await desktop.locator('.answer').evaluate(e=>e===document.activeElement),true);
  assert.equal(errors.length,0,errors[0]);
  console.log('PASS: 2,204 reachable exercises, one-action advancement, choice taps and number keys, retry, streak, recap, resume, drafts, responsive and keyboard viewports.');
 }finally{await browser?.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
