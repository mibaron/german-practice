'use strict';
// Original supplementary exercises, aligned to Menschen A2.1, lessons 11 and 12.
// Stable IDs and a dedicated storage key keep these separate from A1 practice.
(function (root) {
  const questions = [];
  function add(lesson, topic, instruction, text, answers, why, options) {
    const number = questions.filter(q => q.lesson === lesson).length + 1;
    questions.push({id: 'a21-l' + lesson + '-q' + String(number).padStart(2, '0'),
      lesson, topic, instruction, text, answers, why, ...(options || {})});
  }
  const gap = 'جای خالی را با واژهٔ مناسب کامل کن.';
  const pronoun = 'ضمیر انعکاسی مناسب را بنویس.';
  const order = 'یک جمله بساز؛ با عبارت مشخص‌شده شروع کن.';
  add(11,'ضمیرهای انعکاسی',pronoun,'Ich freue ___ über das Geschenk.',['mich'],'فاعل ich است؛ ضمیر انعکاسی آن mich است.');
  add(11,'ضمیرهای انعکاسی',pronoun,'Wie fühlst du ___ heute?',['dich'],'ضمیر انعکاسی du برابر با dich است.');
  add(11,'ضمیرهای انعکاسی',pronoun,'Wir müssen ___ beeilen.',['uns'],'برای wir از uns استفاده می‌کنیم؛ beeilen با فعل مُدال به آخر می‌رود.');
  add(11,'ضمیرهای انعکاسی',pronoun,'Ihr ruht ___ aus.',['euch'],'ضمیر انعکاسی ihr برابر با euch است.');
  add(11,'جمله‌سازی','به آلمانی بنویس: من می‌خواهم استراحت کنم.','',['Ich möchte mich ausruhen.','Ich will mich ausruhen.'],'بعد از möchte یا will، فعل اصلی به صورت مصدر در آخر می‌آید و mich لازم است.',{sentence:true});
  add(11,'حرف اضافه','auf یا über؟ تعطیلات ماه آینده شروع می‌شود.','Ich freue mich ___ den Urlaub.',['auf'],'برای انتظار همراه با خوشحالی از اتفاق آینده، sich freuen auf می‌گوییم.',{options:['auf','über']});
  add(11,'ضمیرهای انعکاسی',pronoun,'Sara ärgert ___ über den Lärm.',['sich'],'Sara مانند sie مفرد است؛ ضمیر انعکاسی آن sich است.');
  add(11,'ضمیرهای انعکاسی',pronoun,'Die Kinder freuen ___ auf das Wochenende.',['sich'],'برای sie جمع هم ضمیر انعکاسی sich است.');
  add(11,'ضمیرهای انعکاسی',pronoun,'Fühlen Sie ___ heute besser, Frau Meier?',['sich'],'برای Sie محترمانه، ضمیر انعکاسی sich است.');
  add(11,'صرف فعل','فعل داخل پرانتز را صرف کن.','Du ___ dich an die Schule. (erinnern)',['erinnerst'],'صورت du برای erinnern برابر با erinnerst است.');
  add(11,'صرف فعل','فعل داخل پرانتز را صرف کن.','Er ___ sich mit seiner Kollegin. (unterhalten)',['unterhält'],'در صورت er، واکهٔ فعل تغییر می‌کند: unterhält.');
  add(11,'حرف اضافه',gap,'Ich bedanke mich ___ dir.',['bei'],'از یک شخص تشکر کردن: sich bei jemandem bedanken.');
  add(11,'حرف اضافه',gap,'Wir erinnern uns ___ unseren ersten Deutschkurs.',['an'],'به یاد آوردن: sich erinnern an + Akkusativ.');
  add(11,'حرف اضافه',gap,'Ich unterhalte mich ___ Sara.',['mit'],'گفت‌وگو با کسی: sich unterhalten mit + Dativ.');
  add(11,'حرف اضافه','auf یا über؟ هدیه را همین حالا گرفته‌ام.','Ich freue mich ___ das Geschenk.',['über'],'برای خوشحالی از هدیه‌ای که دریافت کرده‌ایم، über به کار می‌رود.',{options:['auf','über']});
  add(11,'جمله‌سازی',order+' با Heute شروع کن.','heute / ich / mich / gut / fühlen',['Heute fühle ich mich gut.'],'Heute جایگاه اول را گرفته؛ فعل fühle در جایگاه دوم و سپس ich mich می‌آید.',{sentence:true});
  add(11,'جمله‌سازی',order+' با Du شروع کن.','du / müssen / dich / beeilen',['Du musst dich beeilen.'],'müssen برای du به musst تبدیل می‌شود؛ مصدر beeilen آخر می‌آید.',{sentence:true});
  add(11,'جمله‌سازی','با du یک دستور بساز: استراحت کن!','sich ausruhen',['Ruh dich aus!','Ruhe dich aus!'],'ausruhen جداشدنی است. هر دو صورت Ruh و Ruhe درست‌اند.',{sentence:true});
  add(11,'مواد و محصولات','واژهٔ آلمانی «چوب» را بنویس.','Der Tisch ist aus ___.',['Holz'],'aus Holz یعنی از جنس چوب.');
  add(11,'مواد و محصولات','واژهٔ آلمانی «پارچه» را بنویس.','Die Tasche ist aus ___.',['Stoff'],'aus Stoff یعنی از جنس پارچه.');
  add(11,'مواد و محصولات','پیشوند جداشدهٔ herstellen را کامل کن.','Die Firma stellt Taschen ___.',['her'],'herstellen جداشدنی است: stellt … her.');
  add(11,'تبریک و تشکر',gap,'Herzlichen Glückwunsch ___ Jubiläum!',['zum'],'ترکیب رایج تبریک سالگرد: zum Jubiläum؛ zum کوتاه‌شدهٔ zu dem است.');
  add(11,'تبریک و تشکر','واژهٔ آلمانی «موفقیت» را بنویس.','Ich wünsche euch viel ___.',['Erfolg'],'viel Erfolg یعنی موفقیت زیاد؛ این عبارت برای آرزوی موفقیت به کار می‌رود.');
  add(11,'نوشتن آزاد','دو جمله بنویس: امروز چه احساسی داری و مشتاق چه اتفاقی هستی؟','',[],'از sich fühlen و sich freuen auf استفاده کن؛ ضمیر باید با فاعل هماهنگ باشد.',{manual:true,model:'Ich fühle mich heute gut. Ich freue mich auf das Wochenende.'});

  add(12,'wenn', 'فعل haben را به شکل مناسب بنویس.','Wenn ich Hunger ___, esse ich etwas.',['habe'],'در بخش wenn، فعل صرف‌شده آخر می‌آید؛ برای ich می‌گوییم habe.');
  add(12,'ترتیب کلمات','گزینهٔ درست را انتخاب کن.','Wenn es kalt ist, ___ Tee.',['trinke ich'],'بعد از بخش wenn، فعل جملهٔ اصلی پیش از فاعل می‌آید.',{options:['ich trinke','trinke ich']});
  add(12,'جمله‌سازی','جمله را با Wenn شروع کن.','Ich esse Obst, wenn ich Hunger habe.',['Wenn ich Hunger habe, esse ich Obst.','Wenn ich Hunger habe, dann esse ich Obst.'],'فعل habe آخر بخش wenn است؛ در بخش اصلی esse پیش از ich می‌آید. dann اختیاری است.',{sentence:true});
  add(12,'جمله‌سازی','به آلمانی بنویس: اگر وقت داشته باشم، خودم آشپزی می‌کنم.','',['Wenn ich Zeit habe, koche ich selbst.','Wenn ich Zeit habe, dann koche ich selbst.','Ich koche selbst, wenn ich Zeit habe.','Wenn ich Zeit habe, koche ich selber.','Ich koche selber, wenn ich Zeit habe.','Wenn ich Zeit habe, dann koche ich selber.'],'هم selbst و هم selber پذیرفته‌اند. بخش wenn می‌تواند ابتدا یا انتهای جمله باشد.',{sentence:true});
  add(12,'wenn یا wann','wenn یا wann را انتخاب کن.','___ isst du normalerweise zu Abend?',['Wann'],'برای پرسیدن چه زمانی از wann استفاده می‌کنیم.',{options:['Wenn','Wann']});
  add(12,'نوشتن آزاد','دربارهٔ خودت کامل کن: وقتی خسته‌ام، …','Wenn ich müde bin, …',[],'بعد از ویرگول با فعل جملهٔ اصلی ادامه بده. این تمرین پاسخ‌های درست متعددی دارد.',{manual:true,model:'Wenn ich müde bin, ruhe ich mich aus.'});
  add(12,'wenn یا wann','wenn یا wann را انتخاب کن.','Ich koche, ___ ich Zeit habe.',['wenn'],'اینجا معنی «وقتی که» داریم؛ پس wenn لازم است.',{options:['wenn','wann']});
  add(12,'صرف فعل','فعل sein را به شکل مناسب بنویس.','Wenn du müde ___, kannst du dich ausruhen.',['bist'],'صورت du برای sein برابر با bist است.');
  add(12,'ترتیب کلمات','گزینهٔ درست را انتخاب کن.','Wenn ich früh ___, stehe ich um sechs Uhr auf.',['arbeiten muss'],'فعل مُدال صرف‌شده آخر بخش wenn می‌آید: arbeiten muss.',{options:['muss arbeiten','arbeiten muss']});
  add(12,'جمله‌سازی',order+' با Wenn شروع کن.','wenn / es / regnen — wir / zu Hause / bleiben',['Wenn es regnet, bleiben wir zu Hause.','Wenn es regnet, dann bleiben wir zu Hause.'],'regnet در آخر بخش wenn و bleiben قبل از wir قرار می‌گیرد.',{sentence:true});
  add(12,'جمله‌سازی','اشتباه ترتیب کلمات را اصلاح کن؛ با Wenn شروع کن.','Wenn ich müde bin, ich trinke Kaffee.',['Wenn ich müde bin, trinke ich Kaffee.','Wenn ich müde bin, dann trinke ich Kaffee.'],'در جملهٔ اصلی بعد از بخش wenn، trinke باید قبل از ich قرار بگیرد.',{sentence:true});
  add(12,'جمله‌سازی','دو جمله را با wenn وصل کن؛ با Ich شروع کن.','Ich kaufe ein Fertiggericht. Ich habe wenig Zeit.',['Ich kaufe ein Fertiggericht, wenn ich wenig Zeit habe.'],'وقتی جملهٔ اصلی اول باشد، ترتیب Ich kaufe حفظ می‌شود؛ habe آخر بخش wenn قرار می‌گیرد.',{sentence:true});
  add(12,'مرور درس ۱۱',pronoun,'Wenn ich ___ müde fühle, ruhe ich mich aus.',['mich'],'sich fühlen انعکاسی است؛ برای ich از mich استفاده می‌کنیم.');
  add(12,'عادت‌های غذایی','واژهٔ آلمانی «میوه» را بنویس.','Ich esse jeden Tag ___.',['Obst'],'Obst اسم جمعی برای میوه است و معمولاً بدون آرتیکل در این جمله می‌آید.');
  add(12,'عادت‌های غذایی','واژهٔ آلمانی «سبزیجات» را بنویس.','Ich kaufe frisches ___.',['Gemüse'],'Gemüse یعنی سبزیجات؛ نوشتن Gemuese هم پذیرفته می‌شود.');
  add(12,'عادت‌های غذایی','واژهٔ آلمانی «به‌ندرت» را بنویس.','Ich esse nur ___ Fleisch.',['selten'],'selten یعنی به‌ندرت؛ nie یعنی هرگز.');
  add(12,'عادت‌های غذایی','واژهٔ آلمانی «دو بار» را بنویس.','Ich koche ___ pro Woche.',['zweimal'],'zweimal pro Woche یعنی هفته‌ای دو بار.');
  add(12,'مقایسه','صورت مقایسه‌ای gern را بنویس.','Ich trinke ___ Tee als Kaffee.',['lieber'],'gern → lieber → am liebsten.');
  add(12,'مقایسه','als یا wie را انتخاب کن.','Ich esse mehr Gemüse ___ Fleisch.',['als'],'بعد از صورت مقایسه‌ای mehr از als استفاده می‌کنیم.',{options:['als','wie']});
  add(12,'مقایسه','als یا wie را انتخاب کن.','Ich trinke doppelt so viel Wasser ___ du.',['wie'],'برای نسبت برابر یا چندبرابری از so viel … wie استفاده می‌کنیم.',{options:['als','wie']});
  add(12,'مقایسه','عبارت «از همه بیشتر دوست داشتن» را کامل کن.','Am ___ esse ich Reis.',['liebsten'],'gern → lieber → am liebsten.');
  add(12,'مقایسه','صورت مقایسه‌ای wenig را بنویس.','Heute esse ich ___ Brot als gestern.',['weniger'],'wenig → weniger → am wenigsten.');
  add(12,'بیان تعجب','فعل überraschen را برای das صرف کن.','Wirklich? Das ___ mich!',['überrascht'],'Das überrascht mich یعنی این موضوع باعث تعجبم می‌شود.');
  add(12,'بیان تعجب','Partizip II فعل denken را کامل کن.','Das hätte ich nicht ___!',['gedacht'],'عبارت آمادهٔ Das hätte ich nicht gedacht یعنی فکرش را نمی‌کردم.');

  function normalize(value) {
    return String(value).normalize('NFC').toLowerCase()
      .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
      .replace(/[.,!?;:]/g,'').replace(/\s+/g,' ').trim();
  }
  function grade(question, value) {
    if(question.manual) return 'manual';
    if(!String(value).trim()) return 'empty';
    return question.answers.some(a => normalize(a) === normalize(value)) ? 'correct' : 'wrong';
  }
  const api = {questions,normalize,grade,storageKey:'germanPracticeA21Lessons11And12V1'};
  if(typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.A21Lessons = api;
})(typeof window !== 'undefined' ? window : globalThis);
