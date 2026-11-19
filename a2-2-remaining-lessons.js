'use strict';
// Original supplementary practice for the remaining Menschen A2.2 lessons.
// IDs are permanent. Loaded after the original pack to preserve all existing progress.
(function(root){
const base=typeof module!=='undefined'&&module.exports?require('./a2-2-lessons-14-16.js'):root.A22Practice;
const packId='menschen-a22-remaining-v1';
if(!base)throw new Error('Load the original A2.2 pack first.');
if(base.loadedPacks?.includes(packId)){if(typeof module!=='undefined'&&module.exports)module.exports=base;return;}
const pack={
  "lessons": {
    "13": {
      "title": "Meine erste „Deutschlehrerin“",
      "fa": "تجربهٔ یادگیری زبان",
      "summary": "روایت تجربه‌ها و اتفاق‌های گذشته با als و مقایسه با wenn.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L13.pdf",
      "guide": [
        [
          "als برای گذشتهٔ یک‌باره",
          "برای یک رویداد یا دورهٔ مشخص در گذشته، als می‌آید؛ فعل بخش وابسته آخر است.",
          "Als ich zehn war, begann ich Englisch zu lernen."
        ],
        [
          "als برای یک دوره",
          "یک وضعیت ادامه‌دار در یک دورهٔ گذشته هم می‌تواند با als بیان شود.",
          "Als ich in Bonn wohnte, besuchte ich einen Sprachkurs."
        ],
        [
          "wenn برای تکرار",
          "برای هر بار تکرار یک اتفاق، حتی در گذشته، از wenn استفاده کن.",
          "Immer wenn ich ein Wort nicht verstand, fragte ich nach."
        ],
        [
          "جای دو بخش",
          "اگر بخش als اول باشد، فعل اصلی بلافاصله بعد از ویرگول می‌آید.",
          "Als der Kurs begann, war ich nervös. / Ich war nervös, als der Kurs begann."
        ],
        [
          "با Perfekt",
          "در بخش als، فعل کمکی صرف‌شده آخر می‌آید.",
          "Als ich die Prüfung bestanden habe, habe ich meine Familie angerufen."
        ],
        [
          "روایت گذشته",
          "برای sein و haben اغلب war و hatte به کار می‌روند. زمان رویداد را با damals یا vor … روشن کن.",
          "Damals war ich Student. Ich hatte wenig Zeit."
        ],
        [
          "روش یادگیری",
          "کار منظم را با regelmäßig و شیوهٔ یادگیری را با mit توضیح بده.",
          "Ich lerne regelmäßig mit Karteikarten. Neue Wörter schreibe ich in Sätzen auf."
        ]
      ]
    },
    "17": {
      "title": "Wir wollen nach Rumänien.",
      "fa": "سفر و مقصد",
      "summary": "تمایز مقصد و محل با nach، in، an و auf؛ گفت‌وگو دربارهٔ سفر.",
      "source": "https://legacy.hueber.de/media/36/MenschenA2_SVP_hu.pdf",
      "guide": [
        [
          "Wo و Wohin",
          "Wo جای ثابت را می‌پرسد؛ Wohin مقصد را. بعد از حروف اضافهٔ دوحالتی، مکان داتیو و مقصد آکوزاتیو است.",
          "Wir sind am See. / Wir fahren an den See."
        ],
        [
          "شهر و کشور بدون آرتیکل",
          "برای مقصد شهرها و بیشتر کشورها از nach استفاده کن. برای حضور در آن‌ها in می‌آید.",
          "Wir fahren nach Wien. / Wir sind in Österreich."
        ],
        [
          "کشور دارای آرتیکل",
          "با کشورهایی مانند die Schweiz، مقصد in + Akkusativ و محل in + Dativ است.",
          "Wir fahren in die Schweiz. / Wir sind in der Schweiz."
        ],
        [
          "کنار دریا و دریاچه",
          "an برای رفتن به کنار آب یا بودن در آن محل است. ans = an das؛ am = an dem.",
          "Wir fahren ans Meer. / Wir bleiben am Meer."
        ],
        [
          "کوه و منطقه",
          "به ناحیهٔ کوهستانی: in die Berge؛ در آنجا: in den Bergen. برای قلهٔ مشخص auf به کار می‌رود.",
          "Wir fahren in die Berge. Später steigen wir auf den Berg."
        ],
        [
          "جزیره",
          "برای جزیره معمولاً auf می‌آید. مقصد را با آکوزاتیو و محل را با داتیو بساز.",
          "Wir fahren auf eine Insel. / Wir wohnen auf einer Insel."
        ],
        [
          "حرکت همیشه آکوزاتیو نیست",
          "اگر حرکت درون یک مکان رخ دهد و مقصد تازه مطرح نباشد، Wo و داتیو باقی می‌ماند.",
          "Wir wandern im Wald. / Wir gehen in den Wald."
        ]
      ]
    },
    "18": {
      "title": "Ich freue mich auf Sonne und Wärme.",
      "fa": "هوا و فعل با حرف اضافه",
      "summary": "حرف اضافه‌های ثابت، سؤال با wo(r)- و ارجاع با da(r)-.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L18.pdf",
      "guide": [
        [
          "فعل و حرف اضافه را با هم یاد بگیر",
          "حرف اضافهٔ بعضی فعل‌ها ثابت است؛ از ترجمهٔ فارسی حدس نزن.",
          "warten auf + Akkusativ / träumen von + Dativ"
        ],
        [
          "دو نوع freuen",
          "برای اتفاق آینده auf و برای چیزی که رخ داده یا وجود دارد über می‌آید.",
          "Ich freue mich auf den Urlaub. / Ich freue mich über das Geschenk."
        ],
        [
          "سؤال از چیز",
          "برای چیز یا موضوع، wo را با حرف اضافه ترکیب کن؛ قبل از واکه، r اضافه می‌شود.",
          "Worauf wartest du? / Wovon träumst du?"
        ],
        [
          "ارجاع به چیز",
          "da با حرف اضافه به موضوع گفته‌شده برمی‌گردد؛ پیش از واکه، r لازم است.",
          "Ich warte auf den Bus. Ich warte darauf."
        ],
        [
          "سؤال از شخص",
          "برای انسان، حرف اضافه را با wen یا wem به کار ببر؛ شکل wo- برای شخص مناسب نیست.",
          "Auf wen wartest du? / Mit wem sprichst du?"
        ],
        [
          "حالت اسم پس از حرف اضافه",
          "در این ساختارهای ثابت، حالت را همراه فعل یاد بگیر.",
          "Ich interessiere mich für den Kurs. Ich träume von einem Urlaub."
        ],
        [
          "توصیف هوا",
          "برای پدیده‌های جوی اغلب فاعل es لازم است. برای دما از Grad استفاده کن.",
          "Es regnet. Es ist bewölkt. Heute sind es zwölf Grad."
        ]
      ]
    },
    "19": {
      "title": "Wohin gehen wir heute?",
      "fa": "برنامه‌های فرهنگی و مبدأ",
      "summary": "پیشنهاد و تصمیم مشترک؛ بیان مبدأ با aus و von.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L19.pdf",
      "guide": [
        [
          "Woher از مبدأ می‌پرسد",
          "پرسش مبدأ با woher است؛ با wohin دربارهٔ مقصد اشتباه نکن.",
          "Woher kommst du? / Wohin gehst du?"
        ],
        [
          "aus از داخل",
          "برای خروج از داخل یک فضا از aus + Dativ استفاده می‌کنیم.",
          "Ich komme aus dem Museum."
        ],
        [
          "von از رویداد یا نزد شخص",
          "برای برگشتن از یک رویداد یا از نزد کسی معمولاً von + Dativ می‌آید.",
          "Ich komme vom Konzert. / Sie kommt von ihrer Freundin."
        ],
        [
          "شهر و کشور",
          "برای مبدأ شهرها و کشورها معمولاً aus به کار می‌رود.",
          "Er kommt aus Wien. Sie kommt aus der Schweiz."
        ],
        [
          "حالت داتیو",
          "aus و von همیشه داتیو می‌گیرند. von dem کوتاه می‌شود: vom.",
          "aus dem Theater / aus der Galerie / von den Freunden"
        ],
        [
          "پیشنهاد و واکنش",
          "می‌توان پیشنهاد را با könnten ساخت و دلیل ترجیح را گفت.",
          "Wir könnten eine Ausstellung besuchen. — Ich würde lieber ins Kino gehen."
        ],
        [
          "ترغیب و تردید",
          "با عبارت‌های مؤدبانه اشتیاق یا تردیدت را نشان بده.",
          "Das klingt interessant! / Ich bin noch nicht sicher. / Lass uns zusammen hingehen."
        ]
      ]
    },
    "20": {
      "title": "Ich durfte eigentlich keine Comics lesen.",
      "fa": "کتاب و گذشتهٔ فعل‌های مُدال",
      "summary": "اجازه، توانایی، اجبار و خواسته‌ها در گذشته.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L20.pdf",
      "guide": [
        [
          "Präteritum فعل‌های مُدال",
          "صورت‌های ich/er: durfte، konnte، musste، sollte، wollte و mochte. این‌ها اُملاوت ندارند.",
          "Früher durfte ich lange lesen."
        ],
        [
          "صرف فعل گذشته",
          "ich و er پایان یکسان دارند؛ du معمولاً -st، wir و sie -n و ihr -t می‌گیرند.",
          "ich konnte / du konntest / wir konnten / ihr konntet"
        ],
        [
          "مصدر در پایان",
          "وقتی فعل مُدال با فعل دیگری می‌آید، آن فعل به صورت مصدر آخر قرار می‌گیرد.",
          "Ich musste das Buch zurückgeben."
        ],
        [
          "اجازه و اجبار",
          "nicht dürfen یعنی اجازه نداشتن؛ nicht müssen یعنی لازم نبودن.",
          "Ich durfte nicht gehen. / Ich musste nicht gehen."
        ],
        [
          "دستور و خواسته",
          "sollte دستور یا انتظار گذشته و wollte خواستهٔ گذشته را نشان می‌دهد.",
          "Ich sollte einen Text lesen, aber ich wollte einen Film sehen."
        ],
        [
          "konnte و könnte",
          "konnte گذشتهٔ توانایی است؛ könnte با اُملاوت برای امکان یا پیشنهاد استفاده می‌شود.",
          "Mit sieben konnte ich lesen. / Wir könnten gemeinsam lesen."
        ],
        [
          "علاقه به مطالعه",
          "دربارهٔ نوع کتاب، زمان و مکان مطالعه و دلیل علاقه صحبت کن.",
          "Ich lese gern Romane, weil ich spannende Geschichten mag."
        ]
      ]
    },
    "21": {
      "title": "Ja genau, den meine ich.",
      "fa": "مدارک، توصیف و lassen",
      "summary": "انتخاب با welch- و dies-، ضمیر اشاره و سپردن کار به دیگری.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L21.pdf",
      "guide": [
        [
          "welch- پیش از اسم",
          "پایان welcher مانند آرتیکل معین با جنس، تعداد و حالت تغییر می‌کند.",
          "Welcher Ausweis? Welchen Ausweis brauchst du? Mit welchem Ausweis?"
        ],
        [
          "dies- پیش از اسم",
          "dieser، dieses و diese برای اشارهٔ مشخص هستند و با حالت صرف می‌شوند.",
          "Ich brauche diesen Antrag. Mit diesem Dokument geht es."
        ],
        [
          "ضمیر اشاره به جای اسم",
          "der، das و die می‌توانند اسم را جایگزین کنند. در آکوزاتیو مذکر den می‌آید.",
          "Welchen Koffer meinst du? — Den dort."
        ],
        [
          "داتیو در اشاره",
          "اگر فعل یا حرف اضافه داتیو بخواهد، ضمیر هم داتیو می‌شود.",
          "Mit welchem Pass reist du? — Mit diesem."
        ],
        [
          "lassen + مصدر",
          "وقتی انجام کاری را به شخص دیگری می‌سپاری، lassen را صرف کن و مصدر را آخر بگذار.",
          "Ich lasse mein Fahrrad reparieren."
        ],
        [
          "صرف lassen",
          "در du و er واکه تغییر می‌کند: lässt. wir و sie برابر با lassen هستند.",
          "Du lässt den Ausweis kopieren. / Ihr lasst das Fenster reparieren."
        ],
        [
          "گزارش و توصیف",
          "در تمرین زبانی، زمان، محل و ویژگی‌های شیء یا رویداد را روشن بیان کن.",
          "Meine Tasche ist schwarz. Ich habe sie gestern im Bus verloren."
        ]
      ]
    },
    "22": {
      "title": "Seit ich meinen Wagen verkauft habe, …",
      "fa": "ثبت‌نام آنلاین و مدت زمان",
      "summary": "از وقتی که و تا وقتی که؛ شرح مراحل استفاده از یک خدمت.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L22.pdf",
      "guide": [
        [
          "seit و seitdem به عنوان پیوند",
          "برای بیان نقطهٔ شروعِ وضعیتی که ادامه دارد، از seit یا seitdem همراه جمله استفاده کن.",
          "Seitdem ich hier wohne, fahre ich mit dem Rad."
        ],
        [
          "bis برای پایان",
          "bis + جمله، نقطهٔ پایانِ ادامهٔ یک کار یا وضعیت را نشان می‌دهد.",
          "Warte, bis die Bestätigung kommt."
        ],
        [
          "فعل بخش وابسته آخر است",
          "در جمله‌های با bis و seitdem، فعل صرف‌شده در پایان بخش وابسته قرار می‌گیرد.",
          "Ich bleibe hier, bis du zurückkommst."
        ],
        [
          "بخش وابسته در ابتدا",
          "اگر بخش وابسته اول باشد، فعل جملهٔ اصلی بلافاصله بعد از آن می‌آید.",
          "Seit ich ein Fahrrad habe, brauche ich kein Auto."
        ],
        [
          "رویداد آغازین در Perfekt",
          "شروع می‌تواند یک اتفاق گذشته باشد، در حالی که نتیجه هنوز ادامه دارد.",
          "Seit ich mein Auto verkauft habe, spare ich Geld."
        ],
        [
          "seit با اسم",
          "اگر پس از seit فقط یک عبارت زمانی بیاید، seit حرف اضافه با داتیو است.",
          "seit einem Monat / seit drei Jahren"
        ],
        [
          "مراحل آنلاین",
          "برای دستورالعمل، ترتیب مرحله‌ها را روشن کن؛ فعل‌های جداشدنی را درست قرار بده.",
          "Zuerst melden Sie sich an. Danach geben Sie Ihre Daten ein."
        ]
      ]
    },
    "23": {
      "title": "Der Beruf, der zu mir passt.",
      "fa": "شغل و جملهٔ موصولی",
      "summary": "توصیف آدم‌ها، شغل‌ها و اشیا با ضمیر موصولی نومیناتیو و آکوزاتیو.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L23.pdf",
      "guide": [
        [
          "جملهٔ موصولی",
          "جملهٔ موصولی اسم قبل از خود را توضیح می‌دهد، با ویرگول جدا می‌شود و فعل آن آخر است.",
          "Das ist der Beruf, der zu mir passt."
        ],
        [
          "جنس و تعداد",
          "جنس و تعداد ضمیر موصولی از اسم مرجع می‌آید؛ نه از اسم بعدی جمله.",
          "die Kollegin, die … / das Büro, das … / die Kollegen, die …"
        ],
        [
          "نومیناتیو",
          "اگر خودِ ضمیر در جملهٔ موصولی فاعل باشد، der، die، das یا die جمع به کار می‌رود.",
          "Der Mann, der hier arbeitet, ist mein Chef."
        ],
        [
          "آکوزاتیو",
          "اگر ضمیر مفعول مستقیم باشد، برای مذکر den می‌آید؛ die و das و die جمع تغییر نمی‌کنند.",
          "Der Mann, den ich kenne, ist mein Chef."
        ],
        [
          "حالت از داخل جمله تعیین می‌شود",
          "حالت اسم مرجع در جملهٔ اصلی تعیین‌کنندهٔ حالت ضمیر موصولی نیست.",
          "Ich suche einen Beruf, der mir Spaß macht."
        ],
        [
          "مصدر و فعل مُدال",
          "در جملهٔ موصولی با فعل مُدال، مصدر قبل از فعل مُدال صرف‌شده می‌آید.",
          "Ich suche eine Arbeit, die ich gut machen kann."
        ],
        [
          "توصیف رضایت",
          "برای رضایت از چیزی از mit + Dativ استفاده کن و با جملهٔ موصولی توضیح بده.",
          "Ich bin mit der Arbeit zufrieden, die ich jetzt mache."
        ]
      ]
    },
    "24": {
      "title": "Wie sah dein Alltag aus?",
      "fa": "تجربهٔ خارج از کشور و گذشتهٔ ساده",
      "summary": "روایت زندگی روزمره و تجربه‌ها با Präteritum فعل‌های عادی و بی‌قاعده.",
      "source": "https://edit.hueber.de/media/36/msn-a2-1-unterrichtsplan_L24.pdf",
      "guide": [
        [
          "فعل‌های باقاعده",
          "در Präteritum معمولاً -te به ریشه می‌آید؛ سپس پایان شخص اضافه می‌شود.",
          "ich lernte / du lerntest / wir lernten"
        ],
        [
          "ریشه با d یا t",
          "برای آسانی تلفظ، معمولاً -ete می‌آید.",
          "ich arbeitete / du arbeitetest / ihr arbeitetet"
        ],
        [
          "فعل‌های بی‌قاعده",
          "ریشه تغییر می‌کند و باید صورت گذشته را یاد گرفت. ich و er اغلب پایان اضافه ندارند.",
          "kommen → kam / gehen → ging / sehen → sah"
        ],
        [
          "فعل‌های مختلط",
          "بعضی فعل‌ها هم تغییر ریشه و هم -te دارند.",
          "bringen → brachte / denken → dachte / kennen → kannte"
        ],
        [
          "پیشوند جداشدنی",
          "در جملهٔ اصلی، پیشوند در گذشته هم جدا می‌شود؛ در بخش وابسته به هم می‌چسبد.",
          "Ich stand früh auf. / Als ich früh aufstand, war es dunkel."
        ],
        [
          "sein و haben",
          "این دو شکل بسیار پرکاربردند: war و hatte.",
          "Ich war müde, aber ich hatte noch Zeit."
        ],
        [
          "روایت منسجم",
          "با am Anfang، dann و schließlich ترتیب رویدادها و احساساتت را بیان کن.",
          "Am Anfang hatte ich Heimweh. Später fühlte ich mich wohl."
        ]
      ]
    }
  },
  "words": [
    {
      "id": "a22-13-v-01",
      "lesson": 13,
      "de": "die Sprache",
      "plural": "Sprachen",
      "fa": "زبان",
      "example": "Welche Sprachen sprichst du?",
      "article": "die",
      "noun": "Sprache"
    },
    {
      "id": "a22-13-v-02",
      "lesson": 13,
      "de": "die Muttersprache",
      "plural": "Muttersprachen",
      "fa": "زبان مادری",
      "example": "Meine Muttersprache ist Persisch.",
      "article": "die",
      "noun": "Muttersprache"
    },
    {
      "id": "a22-13-v-03",
      "lesson": 13,
      "de": "die Fremdsprache",
      "plural": "Fremdsprachen",
      "fa": "زبان خارجی",
      "example": "Englisch ist meine erste Fremdsprache.",
      "article": "die",
      "noun": "Fremdsprache"
    },
    {
      "id": "a22-13-v-04",
      "lesson": 13,
      "de": "der Sprachkurs",
      "plural": "Sprachkurse",
      "fa": "کلاس زبان",
      "example": "Der Sprachkurs beginnt am Montag.",
      "article": "der",
      "noun": "Sprachkurs"
    },
    {
      "id": "a22-13-v-05",
      "lesson": 13,
      "de": "die Sprachschule",
      "plural": "Sprachschulen",
      "fa": "آموزشگاه زبان",
      "example": "Die Sprachschule liegt am Bahnhof.",
      "article": "die",
      "noun": "Sprachschule"
    },
    {
      "id": "a22-13-v-06",
      "lesson": 13,
      "de": "der Unterricht",
      "plural": "",
      "fa": "تدریس؛ کلاس درس",
      "example": "Der Unterricht dauert zwei Stunden.",
      "article": "der",
      "noun": "Unterricht"
    },
    {
      "id": "a22-13-v-07",
      "lesson": 13,
      "de": "die Lehrerin",
      "plural": "Lehrerinnen",
      "fa": "معلم زن",
      "example": "Die Lehrerin erklärt das neue Wort.",
      "article": "die",
      "noun": "Lehrerin"
    },
    {
      "id": "a22-13-v-08",
      "lesson": 13,
      "de": "der Lehrer",
      "plural": "Lehrer",
      "fa": "معلم مرد",
      "example": "Unser Lehrer spricht langsam.",
      "article": "der",
      "noun": "Lehrer"
    },
    {
      "id": "a22-13-v-09",
      "lesson": 13,
      "de": "der Teilnehmer",
      "plural": "Teilnehmer",
      "fa": "شرکت‌کننده مرد",
      "example": "Jeder Teilnehmer stellt sich vor.",
      "article": "der",
      "noun": "Teilnehmer"
    },
    {
      "id": "a22-13-v-10",
      "lesson": 13,
      "de": "die Teilnehmerin",
      "plural": "Teilnehmerinnen",
      "fa": "شرکت‌کننده زن",
      "example": "Eine Teilnehmerin kommt aus Polen.",
      "article": "die",
      "noun": "Teilnehmerin"
    },
    {
      "id": "a22-13-v-11",
      "lesson": 13,
      "de": "die Aussprache",
      "plural": "",
      "fa": "تلفظ",
      "example": "Ich übe jeden Tag die Aussprache.",
      "article": "die",
      "noun": "Aussprache"
    },
    {
      "id": "a22-13-v-12",
      "lesson": 13,
      "de": "der Wortschatz",
      "plural": "",
      "fa": "دایرهٔ لغات",
      "example": "Mein Wortschatz wird größer.",
      "article": "der",
      "noun": "Wortschatz"
    },
    {
      "id": "a22-13-v-13",
      "lesson": 13,
      "de": "die Grammatik",
      "plural": "",
      "fa": "دستور زبان",
      "example": "Die Grammatik ist heute unser Thema.",
      "article": "die",
      "noun": "Grammatik"
    },
    {
      "id": "a22-13-v-14",
      "lesson": 13,
      "de": "der Fehler",
      "plural": "Fehler",
      "fa": "اشتباه",
      "example": "Aus Fehlern kann man lernen.",
      "article": "der",
      "noun": "Fehler"
    },
    {
      "id": "a22-13-v-15",
      "lesson": 13,
      "de": "die Übung",
      "plural": "Übungen",
      "fa": "تمرین",
      "example": "Diese Übung hilft mir.",
      "article": "die",
      "noun": "Übung"
    },
    {
      "id": "a22-13-v-16",
      "lesson": 13,
      "de": "die Prüfung",
      "plural": "Prüfungen",
      "fa": "آزمون",
      "example": "Morgen habe ich eine Prüfung.",
      "article": "die",
      "noun": "Prüfung"
    },
    {
      "id": "a22-13-v-17",
      "lesson": 13,
      "de": "die Erfahrung",
      "plural": "Erfahrungen",
      "fa": "تجربه",
      "example": "Er erzählt von seinen Erfahrungen.",
      "article": "die",
      "noun": "Erfahrung"
    },
    {
      "id": "a22-13-v-18",
      "lesson": 13,
      "de": "die Erinnerung",
      "plural": "Erinnerungen",
      "fa": "خاطره",
      "example": "Ich habe gute Erinnerungen an den Kurs.",
      "article": "die",
      "noun": "Erinnerung"
    },
    {
      "id": "a22-13-v-19",
      "lesson": 13,
      "de": "das Wörterbuch",
      "plural": "Wörterbücher",
      "fa": "فرهنگ لغت",
      "example": "Ich suche das Wort im Wörterbuch.",
      "article": "das",
      "noun": "Wörterbuch"
    },
    {
      "id": "a22-13-v-20",
      "lesson": 13,
      "de": "die Karteikarte",
      "plural": "Karteikarten",
      "fa": "فلش‌کارت کاغذی",
      "example": "Auf der Karteikarte steht ein Verb.",
      "article": "die",
      "noun": "Karteikarte"
    },
    {
      "id": "a22-13-v-21",
      "lesson": 13,
      "de": "der Lerntipp",
      "plural": "Lerntipps",
      "fa": "نکتهٔ یادگیری",
      "example": "Dieser Lerntipp ist praktisch.",
      "article": "der",
      "noun": "Lerntipp"
    },
    {
      "id": "a22-13-v-22",
      "lesson": 13,
      "de": "das Gespräch",
      "plural": "Gespräche",
      "fa": "گفت‌وگو",
      "example": "Wir führen ein kurzes Gespräch.",
      "article": "das",
      "noun": "Gespräch"
    },
    {
      "id": "a22-13-v-23",
      "lesson": 13,
      "de": "der Satz",
      "plural": "Sätze",
      "fa": "جمله",
      "example": "Schreib bitte einen ganzen Satz.",
      "article": "der",
      "noun": "Satz"
    },
    {
      "id": "a22-13-v-24",
      "lesson": 13,
      "de": "die Bedeutung",
      "plural": "Bedeutungen",
      "fa": "معنی",
      "example": "Was ist die Bedeutung dieses Wortes?",
      "article": "die",
      "noun": "Bedeutung"
    },
    {
      "id": "a22-13-v-25",
      "lesson": 13,
      "de": "das Ziel",
      "plural": "Ziele",
      "fa": "هدف",
      "example": "Mein Ziel ist ein Gespräch ohne Angst.",
      "article": "das",
      "noun": "Ziel"
    },
    {
      "id": "a22-13-v-26",
      "lesson": 13,
      "de": "lernen",
      "plural": "",
      "fa": "یاد گرفتن",
      "example": "Ich lerne seit einem Jahr Deutsch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-27",
      "lesson": 13,
      "de": "üben",
      "plural": "",
      "fa": "تمرین کردن",
      "example": "Wir üben gemeinsam die Dialoge.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-28",
      "lesson": 13,
      "de": "wiederholen",
      "plural": "",
      "fa": "مرور؛ تکرار کردن",
      "example": "Ich wiederhole die neuen Wörter.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-29",
      "lesson": 13,
      "de": "verstehen",
      "plural": "",
      "fa": "فهمیدن",
      "example": "Verstehst du die Frage?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-30",
      "lesson": 13,
      "de": "erklären",
      "plural": "",
      "fa": "توضیح دادن",
      "example": "Kannst du mir die Regel erklären?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-31",
      "lesson": 13,
      "de": "übersetzen",
      "plural": "",
      "fa": "ترجمه کردن",
      "example": "Ich übersetze den Satz ins Persische.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-32",
      "lesson": 13,
      "de": "nachschlagen",
      "plural": "",
      "fa": "در مرجع جست‌وجو کردن",
      "example": "Ich schlage das Wort im Wörterbuch nach.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-33",
      "lesson": 13,
      "de": "zuhören",
      "plural": "",
      "fa": "گوش دادن با توجه",
      "example": "Hör bitte genau zu.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-34",
      "lesson": 13,
      "de": "sprechen",
      "plural": "",
      "fa": "صحبت کردن",
      "example": "Wir sprechen im Kurs Deutsch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-35",
      "lesson": 13,
      "de": "erzählen",
      "plural": "",
      "fa": "تعریف کردن؛ روایت کردن",
      "example": "Er erzählt von seinem ersten Kurs.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-36",
      "lesson": 13,
      "de": "sich erinnern",
      "plural": "",
      "fa": "به یاد آوردن",
      "example": "Ich erinnere mich an meine Lehrerin.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-37",
      "lesson": 13,
      "de": "merken",
      "plural": "",
      "fa": "متوجه شدن",
      "example": "Ich merke, dass ich besser spreche.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-38",
      "lesson": 13,
      "de": "sich merken",
      "plural": "",
      "fa": "به خاطر سپردن",
      "example": "Ich merke mir die Wörter mit Bildern.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-39",
      "lesson": 13,
      "de": "korrigieren",
      "plural": "",
      "fa": "تصحیح کردن",
      "example": "Die Lehrerin korrigiert meinen Text.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-40",
      "lesson": 13,
      "de": "bestehen",
      "plural": "",
      "fa": "قبول شدن در آزمون",
      "example": "Ich habe die Prüfung bestanden.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-41",
      "lesson": 13,
      "de": "fließend",
      "plural": "",
      "fa": "روان",
      "example": "Sie spricht fließend Deutsch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-42",
      "lesson": 13,
      "de": "deutlich",
      "plural": "",
      "fa": "واضح",
      "example": "Bitte sprich deutlich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-43",
      "lesson": 13,
      "de": "regelmäßig",
      "plural": "",
      "fa": "به‌طور منظم",
      "example": "Wir lernen regelmäßig zusammen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-44",
      "lesson": 13,
      "de": "schwierig",
      "plural": "",
      "fa": "دشوار",
      "example": "Der Text ist schwierig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-45",
      "lesson": 13,
      "de": "einfach",
      "plural": "",
      "fa": "ساده",
      "example": "Dieses Beispiel ist einfach.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-46",
      "lesson": 13,
      "de": "damals",
      "plural": "",
      "fa": "آن زمان",
      "example": "Damals konnte ich nur wenig Deutsch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-47",
      "lesson": 13,
      "de": "früher",
      "plural": "",
      "fa": "در گذشته",
      "example": "Früher lernte ich mit einem Wörterbuch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-48",
      "lesson": 13,
      "de": "zum ersten Mal",
      "plural": "",
      "fa": "برای اولین بار",
      "example": "Ich war zum ersten Mal in Berlin.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-49",
      "lesson": 13,
      "de": "auswendig",
      "plural": "",
      "fa": "از حفظ",
      "example": "Ich kenne das Gedicht auswendig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-13-v-50",
      "lesson": 13,
      "de": "Schritt für Schritt",
      "plural": "",
      "fa": "قدم‌به‌قدم",
      "example": "Schritt für Schritt verstehe ich mehr.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-01",
      "lesson": 17,
      "de": "die Reise",
      "plural": "Reisen",
      "fa": "سفر",
      "example": "Unsere Reise dauert zehn Tage.",
      "article": "die",
      "noun": "Reise"
    },
    {
      "id": "a22-17-v-02",
      "lesson": 17,
      "de": "der Urlaub",
      "plural": "Urlaube",
      "fa": "تعطیلات",
      "example": "Im Urlaub fahren wir ans Meer.",
      "article": "der",
      "noun": "Urlaub"
    },
    {
      "id": "a22-17-v-03",
      "lesson": 17,
      "de": "das Reiseziel",
      "plural": "Reiseziele",
      "fa": "مقصد سفر",
      "example": "Unser Reiseziel ist eine kleine Insel.",
      "article": "das",
      "noun": "Reiseziel"
    },
    {
      "id": "a22-17-v-04",
      "lesson": 17,
      "de": "das Reisebüro",
      "plural": "Reisebüros",
      "fa": "آژانس مسافرتی",
      "example": "Wir fragen im Reisebüro nach.",
      "article": "das",
      "noun": "Reisebüro"
    },
    {
      "id": "a22-17-v-05",
      "lesson": 17,
      "de": "die Unterkunft",
      "plural": "Unterkünfte",
      "fa": "محل اقامت",
      "example": "Die Unterkunft liegt am See.",
      "article": "die",
      "noun": "Unterkunft"
    },
    {
      "id": "a22-17-v-06",
      "lesson": 17,
      "de": "der Campingplatz",
      "plural": "Campingplätze",
      "fa": "محل کمپ",
      "example": "Der Campingplatz ist im Wald.",
      "article": "der",
      "noun": "Campingplatz"
    },
    {
      "id": "a22-17-v-07",
      "lesson": 17,
      "de": "das Zelt",
      "plural": "Zelte",
      "fa": "چادر",
      "example": "Wir schlafen in einem Zelt.",
      "article": "das",
      "noun": "Zelt"
    },
    {
      "id": "a22-17-v-08",
      "lesson": 17,
      "de": "die Insel",
      "plural": "Inseln",
      "fa": "جزیره",
      "example": "Die Insel ist autofrei.",
      "article": "die",
      "noun": "Insel"
    },
    {
      "id": "a22-17-v-09",
      "lesson": 17,
      "de": "das Meer",
      "plural": "Meere",
      "fa": "دریا",
      "example": "Die Kinder spielen am Meer.",
      "article": "das",
      "noun": "Meer"
    },
    {
      "id": "a22-17-v-10",
      "lesson": 17,
      "de": "die Küste",
      "plural": "Küsten",
      "fa": "ساحل؛ نوار ساحلی",
      "example": "Wir fahren an die Küste.",
      "article": "die",
      "noun": "Küste"
    },
    {
      "id": "a22-17-v-11",
      "lesson": 17,
      "de": "der Strand",
      "plural": "Strände",
      "fa": "ساحل شنی",
      "example": "Am Strand lesen wir ein Buch.",
      "article": "der",
      "noun": "Strand"
    },
    {
      "id": "a22-17-v-12",
      "lesson": 17,
      "de": "der See",
      "plural": "Seen",
      "fa": "دریاچه",
      "example": "Der See liegt in den Bergen.",
      "article": "der",
      "noun": "See"
    },
    {
      "id": "a22-17-v-13",
      "lesson": 17,
      "de": "der Berg",
      "plural": "Berge",
      "fa": "کوه",
      "example": "Auf dem Berg ist es kühl.",
      "article": "der",
      "noun": "Berg"
    },
    {
      "id": "a22-17-v-14",
      "lesson": 17,
      "de": "das Gebirge",
      "plural": "Gebirge",
      "fa": "رشته‌کوه",
      "example": "Im Gebirge wandern wir gern.",
      "article": "das",
      "noun": "Gebirge"
    },
    {
      "id": "a22-17-v-15",
      "lesson": 17,
      "de": "der Wald",
      "plural": "Wälder",
      "fa": "جنگل",
      "example": "Wir gehen durch den Wald.",
      "article": "der",
      "noun": "Wald"
    },
    {
      "id": "a22-17-v-16",
      "lesson": 17,
      "de": "das Land",
      "plural": "Länder",
      "fa": "کشور؛ سرزمین",
      "example": "Welches Land möchtest du besuchen?",
      "article": "das",
      "noun": "Land"
    },
    {
      "id": "a22-17-v-17",
      "lesson": 17,
      "de": "die Stadt",
      "plural": "Städte",
      "fa": "شهر",
      "example": "Die Stadt hat einen alten Hafen.",
      "article": "die",
      "noun": "Stadt"
    },
    {
      "id": "a22-17-v-18",
      "lesson": 17,
      "de": "das Dorf",
      "plural": "Dörfer",
      "fa": "روستا",
      "example": "Das Dorf liegt im Tal.",
      "article": "das",
      "noun": "Dorf"
    },
    {
      "id": "a22-17-v-19",
      "lesson": 17,
      "de": "die Fähre",
      "plural": "Fähren",
      "fa": "کشتی مسافربری خودروبر",
      "example": "Die Fähre fährt zur Insel.",
      "article": "die",
      "noun": "Fähre"
    },
    {
      "id": "a22-17-v-20",
      "lesson": 17,
      "de": "der Hafen",
      "plural": "Häfen",
      "fa": "بندر",
      "example": "Im Hafen warten viele Reisende.",
      "article": "der",
      "noun": "Hafen"
    },
    {
      "id": "a22-17-v-21",
      "lesson": 17,
      "de": "der Flug",
      "plural": "Flüge",
      "fa": "پرواز",
      "example": "Unser Flug geht am Abend.",
      "article": "der",
      "noun": "Flug"
    },
    {
      "id": "a22-17-v-22",
      "lesson": 17,
      "de": "die Fahrkarte",
      "plural": "Fahrkarten",
      "fa": "بلیط وسیلهٔ نقلیه",
      "example": "Ich kaufe eine Fahrkarte nach Wien.",
      "article": "die",
      "noun": "Fahrkarte"
    },
    {
      "id": "a22-17-v-23",
      "lesson": 17,
      "de": "das Gepäck",
      "plural": "",
      "fa": "بار سفر",
      "example": "Unser Gepäck ist leicht.",
      "article": "das",
      "noun": "Gepäck"
    },
    {
      "id": "a22-17-v-24",
      "lesson": 17,
      "de": "der Koffer",
      "plural": "Koffer",
      "fa": "چمدان",
      "example": "Mein Koffer steht im Flur.",
      "article": "der",
      "noun": "Koffer"
    },
    {
      "id": "a22-17-v-25",
      "lesson": 17,
      "de": "der Rucksack",
      "plural": "Rucksäcke",
      "fa": "کوله‌پشتی",
      "example": "Der Rucksack ist schon gepackt.",
      "article": "der",
      "noun": "Rucksack"
    },
    {
      "id": "a22-17-v-26",
      "lesson": 17,
      "de": "reisen",
      "plural": "",
      "fa": "سفر کردن",
      "example": "Wir reisen gern mit dem Zug.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-27",
      "lesson": 17,
      "de": "abfahren",
      "plural": "",
      "fa": "حرکت کردن وسیلهٔ نقلیه",
      "example": "Der Bus fährt um sieben ab.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-28",
      "lesson": 17,
      "de": "ankommen",
      "plural": "",
      "fa": "رسیدن",
      "example": "Wir kommen am Nachmittag an.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-29",
      "lesson": 17,
      "de": "umsteigen",
      "plural": "",
      "fa": "عوض کردن وسیلهٔ نقلیه",
      "example": "In Köln müssen wir umsteigen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-30",
      "lesson": 17,
      "de": "einsteigen",
      "plural": "",
      "fa": "سوار شدن",
      "example": "Bitte steigen Sie vorne ein.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-31",
      "lesson": 17,
      "de": "aussteigen",
      "plural": "",
      "fa": "پیاده شدن",
      "example": "Wir steigen am Hauptbahnhof aus.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-32",
      "lesson": 17,
      "de": "wandern",
      "plural": "",
      "fa": "پیاده‌روی در طبیعت",
      "example": "Am Wochenende wandern wir im Gebirge.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-33",
      "lesson": 17,
      "de": "zelten",
      "plural": "",
      "fa": "چادر زدن؛ در چادر ماندن",
      "example": "Im Sommer zelten wir am See.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-34",
      "lesson": 17,
      "de": "übernachten",
      "plural": "",
      "fa": "شب اقامت کردن",
      "example": "Wir übernachten in einer Pension.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-35",
      "lesson": 17,
      "de": "besichtigen",
      "plural": "",
      "fa": "بازدید کردن",
      "example": "Morgen besichtigen wir die Altstadt.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-36",
      "lesson": 17,
      "de": "planen",
      "plural": "",
      "fa": "برنامه‌ریزی کردن",
      "example": "Wir planen eine Reise nach Italien.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-37",
      "lesson": 17,
      "de": "buchen",
      "plural": "",
      "fa": "رزرو کردن",
      "example": "Ich buche ein Zimmer am Meer.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-38",
      "lesson": 17,
      "de": "mitnehmen",
      "plural": "",
      "fa": "همراه بردن",
      "example": "Nimm bitte eine Jacke mit.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-39",
      "lesson": 17,
      "de": "sich erholen",
      "plural": "",
      "fa": "استراحت و تجدید قوا کردن",
      "example": "Im Urlaub möchte ich mich erholen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-40",
      "lesson": 17,
      "de": "verbringen",
      "plural": "",
      "fa": "گذراندن زمان",
      "example": "Wir verbringen drei Tage auf der Insel.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-41",
      "lesson": 17,
      "de": "unterwegs",
      "plural": "",
      "fa": "در راه",
      "example": "Unterwegs machen wir eine Pause.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-42",
      "lesson": 17,
      "de": "direkt",
      "plural": "",
      "fa": "مستقیم؛ بدون واسطه",
      "example": "Der Zug fährt direkt nach Hamburg.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-43",
      "lesson": 17,
      "de": "bequem",
      "plural": "",
      "fa": "راحت",
      "example": "Der Sitz im Zug ist bequem.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-44",
      "lesson": 17,
      "de": "günstig",
      "plural": "",
      "fa": "مقرون‌به‌صرفه",
      "example": "Die Fahrkarte war günstig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-45",
      "lesson": 17,
      "de": "rechtzeitig",
      "plural": "",
      "fa": "به‌موقع",
      "example": "Wir kommen rechtzeitig am Bahnhof an.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-46",
      "lesson": 17,
      "de": "hin und zurück",
      "plural": "",
      "fa": "رفت‌وبرگشت",
      "example": "Ich brauche eine Fahrkarte hin und zurück.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-47",
      "lesson": 17,
      "de": "ans Meer",
      "plural": "",
      "fa": "به سمت دریا",
      "example": "Im August fahren wir ans Meer.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-48",
      "lesson": 17,
      "de": "am Meer",
      "plural": "",
      "fa": "کنار دریا",
      "example": "Unser Hotel liegt am Meer.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-49",
      "lesson": 17,
      "de": "in die Berge",
      "plural": "",
      "fa": "به کوه‌ها",
      "example": "Wir fahren morgen in die Berge.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-17-v-50",
      "lesson": 17,
      "de": "auf dem Land",
      "plural": "",
      "fa": "در روستا و مناطق غیرشهری",
      "example": "Meine Großeltern wohnen auf dem Land.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-01",
      "lesson": 18,
      "de": "das Wetter",
      "plural": "",
      "fa": "هوا؛ وضعیت جوی",
      "example": "Das Wetter ändert sich schnell.",
      "article": "das",
      "noun": "Wetter"
    },
    {
      "id": "a22-18-v-02",
      "lesson": 18,
      "de": "das Klima",
      "plural": "Klimata",
      "fa": "اقلیم",
      "example": "Das Klima ist hier mild.",
      "article": "das",
      "noun": "Klima"
    },
    {
      "id": "a22-18-v-03",
      "lesson": 18,
      "de": "die Sonne",
      "plural": "Sonnen",
      "fa": "خورشید",
      "example": "Heute scheint die Sonne.",
      "article": "die",
      "noun": "Sonne"
    },
    {
      "id": "a22-18-v-04",
      "lesson": 18,
      "de": "die Wärme",
      "plural": "",
      "fa": "گرما",
      "example": "Ich freue mich auf die Wärme.",
      "article": "die",
      "noun": "Wärme"
    },
    {
      "id": "a22-18-v-05",
      "lesson": 18,
      "de": "die Hitze",
      "plural": "",
      "fa": "گرمای شدید",
      "example": "Bei dieser Hitze bleibe ich zu Hause.",
      "article": "die",
      "noun": "Hitze"
    },
    {
      "id": "a22-18-v-06",
      "lesson": 18,
      "de": "die Kälte",
      "plural": "",
      "fa": "سرما",
      "example": "Die Kälte stört mich nicht.",
      "article": "die",
      "noun": "Kälte"
    },
    {
      "id": "a22-18-v-07",
      "lesson": 18,
      "de": "der Regen",
      "plural": "",
      "fa": "باران",
      "example": "Der Regen hört am Abend auf.",
      "article": "der",
      "noun": "Regen"
    },
    {
      "id": "a22-18-v-08",
      "lesson": 18,
      "de": "der Schnee",
      "plural": "",
      "fa": "برف",
      "example": "Auf den Bergen liegt Schnee.",
      "article": "der",
      "noun": "Schnee"
    },
    {
      "id": "a22-18-v-09",
      "lesson": 18,
      "de": "der Wind",
      "plural": "Winde",
      "fa": "باد",
      "example": "Der Wind kommt aus Westen.",
      "article": "der",
      "noun": "Wind"
    },
    {
      "id": "a22-18-v-10",
      "lesson": 18,
      "de": "der Sturm",
      "plural": "Stürme",
      "fa": "توفان",
      "example": "Der Sturm hat in der Nacht begonnen.",
      "article": "der",
      "noun": "Sturm"
    },
    {
      "id": "a22-18-v-11",
      "lesson": 18,
      "de": "die Wolke",
      "plural": "Wolken",
      "fa": "ابر",
      "example": "Eine dunkle Wolke zieht auf.",
      "article": "die",
      "noun": "Wolke"
    },
    {
      "id": "a22-18-v-12",
      "lesson": 18,
      "de": "der Nebel",
      "plural": "",
      "fa": "مه",
      "example": "Wegen des Nebels sehen wir wenig.",
      "article": "der",
      "noun": "Nebel"
    },
    {
      "id": "a22-18-v-13",
      "lesson": 18,
      "de": "das Gewitter",
      "plural": "Gewitter",
      "fa": "رعدوبرق",
      "example": "Am Nachmittag gibt es ein Gewitter.",
      "article": "das",
      "noun": "Gewitter"
    },
    {
      "id": "a22-18-v-14",
      "lesson": 18,
      "de": "der Blitz",
      "plural": "Blitze",
      "fa": "برق آسمان",
      "example": "Ein Blitz leuchtet über dem See.",
      "article": "der",
      "noun": "Blitz"
    },
    {
      "id": "a22-18-v-15",
      "lesson": 18,
      "de": "der Donner",
      "plural": "",
      "fa": "صدای رعد",
      "example": "Nach dem Blitz hören wir Donner.",
      "article": "der",
      "noun": "Donner"
    },
    {
      "id": "a22-18-v-16",
      "lesson": 18,
      "de": "die Temperatur",
      "plural": "Temperaturen",
      "fa": "دما",
      "example": "Die Temperatur steigt auf zwanzig Grad.",
      "article": "die",
      "noun": "Temperatur"
    },
    {
      "id": "a22-18-v-17",
      "lesson": 18,
      "de": "der Wetterbericht",
      "plural": "Wetterberichte",
      "fa": "گزارش هوا",
      "example": "Ich höre morgens den Wetterbericht.",
      "article": "der",
      "noun": "Wetterbericht"
    },
    {
      "id": "a22-18-v-18",
      "lesson": 18,
      "de": "die Vorhersage",
      "plural": "Vorhersagen",
      "fa": "پیش‌بینی",
      "example": "Die Vorhersage für morgen ist gut.",
      "article": "die",
      "noun": "Vorhersage"
    },
    {
      "id": "a22-18-v-19",
      "lesson": 18,
      "de": "die Jahreszeit",
      "plural": "Jahreszeiten",
      "fa": "فصل سال",
      "example": "Welche Jahreszeit magst du?",
      "article": "die",
      "noun": "Jahreszeit"
    },
    {
      "id": "a22-18-v-20",
      "lesson": 18,
      "de": "der Frühling",
      "plural": "",
      "fa": "بهار",
      "example": "Im Frühling wird es wärmer.",
      "article": "der",
      "noun": "Frühling"
    },
    {
      "id": "a22-18-v-21",
      "lesson": 18,
      "de": "der Sommer",
      "plural": "",
      "fa": "تابستان",
      "example": "Im Sommer schwimmen wir oft.",
      "article": "der",
      "noun": "Sommer"
    },
    {
      "id": "a22-18-v-22",
      "lesson": 18,
      "de": "der Herbst",
      "plural": "",
      "fa": "پاییز",
      "example": "Im Herbst fallen die Blätter.",
      "article": "der",
      "noun": "Herbst"
    },
    {
      "id": "a22-18-v-23",
      "lesson": 18,
      "de": "der Winter",
      "plural": "",
      "fa": "زمستان",
      "example": "Im Winter sind die Tage kurz.",
      "article": "der",
      "noun": "Winter"
    },
    {
      "id": "a22-18-v-24",
      "lesson": 18,
      "de": "der Regenschirm",
      "plural": "Regenschirme",
      "fa": "چتر باران",
      "example": "Ich nehme meinen Regenschirm mit.",
      "article": "der",
      "noun": "Regenschirm"
    },
    {
      "id": "a22-18-v-25",
      "lesson": 18,
      "de": "die Regenjacke",
      "plural": "Regenjacken",
      "fa": "بارانی",
      "example": "Bei Regen trage ich eine Regenjacke.",
      "article": "die",
      "noun": "Regenjacke"
    },
    {
      "id": "a22-18-v-26",
      "lesson": 18,
      "de": "regnen",
      "plural": "",
      "fa": "باران باریدن",
      "example": "Morgen regnet es.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-27",
      "lesson": 18,
      "de": "schneien",
      "plural": "",
      "fa": "برف باریدن",
      "example": "In den Bergen schneit es.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-28",
      "lesson": 18,
      "de": "scheinen",
      "plural": "",
      "fa": "تابیدن",
      "example": "Die Sonne scheint wieder.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-29",
      "lesson": 18,
      "de": "frieren",
      "plural": "",
      "fa": "سرد بودن؛ یخ زدن",
      "example": "Ich friere ohne Jacke.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-30",
      "lesson": 18,
      "de": "steigen",
      "plural": "",
      "fa": "بالا رفتن",
      "example": "Die Temperaturen steigen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-31",
      "lesson": 18,
      "de": "sinken",
      "plural": "",
      "fa": "پایین آمدن",
      "example": "Nachts sinkt die Temperatur.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-32",
      "lesson": 18,
      "de": "warten auf",
      "plural": "",
      "fa": "منتظر چیزی بودن",
      "example": "Wir warten auf besseres Wetter.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-33",
      "lesson": 18,
      "de": "sich freuen auf",
      "plural": "",
      "fa": "مشتاق اتفاق آینده بودن",
      "example": "Ich freue mich auf den Sommer.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-34",
      "lesson": 18,
      "de": "sich freuen über",
      "plural": "",
      "fa": "از چیزی خوشحال بودن",
      "example": "Wir freuen uns über die Sonne.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-35",
      "lesson": 18,
      "de": "sich interessieren für",
      "plural": "",
      "fa": "علاقه‌مند به چیزی بودن",
      "example": "Er interessiert sich für das Klima.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-36",
      "lesson": 18,
      "de": "denken an",
      "plural": "",
      "fa": "فکر کردن به",
      "example": "Ich denke an unseren Urlaub.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-37",
      "lesson": 18,
      "de": "sprechen über",
      "plural": "",
      "fa": "صحبت کردن دربارهٔ",
      "example": "Wir sprechen über das Wetter.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-38",
      "lesson": 18,
      "de": "träumen von",
      "plural": "",
      "fa": "رؤیای چیزی را داشتن",
      "example": "Sie träumt von einer Reise ans Meer.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-39",
      "lesson": 18,
      "de": "sich ärgern über",
      "plural": "",
      "fa": "از چیزی حرص خوردن",
      "example": "Ich ärgere mich über den Regen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-40",
      "lesson": 18,
      "de": "sich beschweren über",
      "plural": "",
      "fa": "شکایت کردن از",
      "example": "Der Gast beschwert sich über die Hitze.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-41",
      "lesson": 18,
      "de": "sonnig",
      "plural": "",
      "fa": "آفتابی",
      "example": "Morgen wird es sonnig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-42",
      "lesson": 18,
      "de": "bewölkt",
      "plural": "",
      "fa": "ابری",
      "example": "Heute ist es stark bewölkt.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-43",
      "lesson": 18,
      "de": "windig",
      "plural": "",
      "fa": "پرباد",
      "example": "An der Küste ist es windig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-44",
      "lesson": 18,
      "de": "neblig",
      "plural": "",
      "fa": "مه‌آلود",
      "example": "Am Morgen ist es neblig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-45",
      "lesson": 18,
      "de": "trocken",
      "plural": "",
      "fa": "خشک",
      "example": "Die Straße ist wieder trocken.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-46",
      "lesson": 18,
      "de": "feucht",
      "plural": "",
      "fa": "مرطوب",
      "example": "Die Luft ist warm und feucht.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-47",
      "lesson": 18,
      "de": "mild",
      "plural": "",
      "fa": "معتدل",
      "example": "Der Winter war dieses Jahr mild.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-48",
      "lesson": 18,
      "de": "Worauf wartest du?",
      "plural": "",
      "fa": "منتظر چه هستی؟",
      "example": "Worauf wartest du? Auf den Bus.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-49",
      "lesson": 18,
      "de": "Darauf freue ich mich.",
      "plural": "",
      "fa": "مشتاق آن هستم.",
      "example": "Bald beginnt der Urlaub. Darauf freue ich mich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-18-v-50",
      "lesson": 18,
      "de": "Darüber sprechen wir.",
      "plural": "",
      "fa": "دربارهٔ آن صحبت می‌کنیم.",
      "example": "Das Wetter ist wichtig. Darüber sprechen wir.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-01",
      "lesson": 19,
      "de": "die Veranstaltung",
      "plural": "Veranstaltungen",
      "fa": "رویداد؛ برنامهٔ فرهنگی",
      "example": "Die Veranstaltung beginnt um acht.",
      "article": "die",
      "noun": "Veranstaltung"
    },
    {
      "id": "a22-19-v-02",
      "lesson": 19,
      "de": "das Konzert",
      "plural": "Konzerte",
      "fa": "کنسرت",
      "example": "Heute gehen wir zu einem Konzert.",
      "article": "das",
      "noun": "Konzert"
    },
    {
      "id": "a22-19-v-03",
      "lesson": 19,
      "de": "das Theater",
      "plural": "Theater",
      "fa": "تئاتر",
      "example": "Das Theater liegt im Zentrum.",
      "article": "das",
      "noun": "Theater"
    },
    {
      "id": "a22-19-v-04",
      "lesson": 19,
      "de": "das Kino",
      "plural": "Kinos",
      "fa": "سینما",
      "example": "Wir treffen uns vor dem Kino.",
      "article": "das",
      "noun": "Kino"
    },
    {
      "id": "a22-19-v-05",
      "lesson": 19,
      "de": "das Museum",
      "plural": "Museen",
      "fa": "موزه",
      "example": "Das Museum schließt um sechs.",
      "article": "das",
      "noun": "Museum"
    },
    {
      "id": "a22-19-v-06",
      "lesson": 19,
      "de": "die Ausstellung",
      "plural": "Ausstellungen",
      "fa": "نمایشگاه",
      "example": "Die Ausstellung zeigt moderne Kunst.",
      "article": "die",
      "noun": "Ausstellung"
    },
    {
      "id": "a22-19-v-07",
      "lesson": 19,
      "de": "die Lesung",
      "plural": "Lesungen",
      "fa": "جلسهٔ کتاب‌خوانی نویسنده",
      "example": "Die Lesung findet in der Bibliothek statt.",
      "article": "die",
      "noun": "Lesung"
    },
    {
      "id": "a22-19-v-08",
      "lesson": 19,
      "de": "das Gedicht",
      "plural": "Gedichte",
      "fa": "شعر",
      "example": "Sie trägt ein kurzes Gedicht vor.",
      "article": "das",
      "noun": "Gedicht"
    },
    {
      "id": "a22-19-v-09",
      "lesson": 19,
      "de": "die Bühne",
      "plural": "Bühnen",
      "fa": "صحنه",
      "example": "Auf der Bühne stehen drei Musiker.",
      "article": "die",
      "noun": "Bühne"
    },
    {
      "id": "a22-19-v-10",
      "lesson": 19,
      "de": "der Eintritt",
      "plural": "",
      "fa": "ورود؛ هزینهٔ ورود",
      "example": "Der Eintritt ist heute frei.",
      "article": "der",
      "noun": "Eintritt"
    },
    {
      "id": "a22-19-v-11",
      "lesson": 19,
      "de": "die Eintrittskarte",
      "plural": "Eintrittskarten",
      "fa": "بلیط ورودی",
      "example": "Ich kaufe zwei Eintrittskarten.",
      "article": "die",
      "noun": "Eintrittskarte"
    },
    {
      "id": "a22-19-v-12",
      "lesson": 19,
      "de": "die Abendkasse",
      "plural": "Abendkassen",
      "fa": "گیشهٔ شب اجرا",
      "example": "An der Abendkasse gibt es noch Karten.",
      "article": "die",
      "noun": "Abendkasse"
    },
    {
      "id": "a22-19-v-13",
      "lesson": 19,
      "de": "die Vorstellung",
      "plural": "Vorstellungen",
      "fa": "اجرا؛ سانس نمایش",
      "example": "Die nächste Vorstellung beginnt um neun.",
      "article": "die",
      "noun": "Vorstellung"
    },
    {
      "id": "a22-19-v-14",
      "lesson": 19,
      "de": "das Publikum",
      "plural": "",
      "fa": "تماشاگران",
      "example": "Das Publikum klatscht.",
      "article": "das",
      "noun": "Publikum"
    },
    {
      "id": "a22-19-v-15",
      "lesson": 19,
      "de": "der Künstler",
      "plural": "Künstler",
      "fa": "هنرمند مرد",
      "example": "Der Künstler erklärt sein Bild.",
      "article": "der",
      "noun": "Künstler"
    },
    {
      "id": "a22-19-v-16",
      "lesson": 19,
      "de": "die Künstlerin",
      "plural": "Künstlerinnen",
      "fa": "هنرمند زن",
      "example": "Die Künstlerin lebt in Berlin.",
      "article": "die",
      "noun": "Künstlerin"
    },
    {
      "id": "a22-19-v-17",
      "lesson": 19,
      "de": "die Galerie",
      "plural": "Galerien",
      "fa": "گالری",
      "example": "In der Galerie hängen neue Bilder.",
      "article": "die",
      "noun": "Galerie"
    },
    {
      "id": "a22-19-v-18",
      "lesson": 19,
      "de": "das Festival",
      "plural": "Festivals",
      "fa": "جشنواره",
      "example": "Das Festival dauert drei Tage.",
      "article": "das",
      "noun": "Festival"
    },
    {
      "id": "a22-19-v-19",
      "lesson": 19,
      "de": "die Oper",
      "plural": "Opern",
      "fa": "اپرا",
      "example": "Meine Eltern besuchen eine Oper.",
      "article": "die",
      "noun": "Oper"
    },
    {
      "id": "a22-19-v-20",
      "lesson": 19,
      "de": "der Tanz",
      "plural": "Tänze",
      "fa": "رقص",
      "example": "Dieser Tanz kommt aus Spanien.",
      "article": "der",
      "noun": "Tanz"
    },
    {
      "id": "a22-19-v-21",
      "lesson": 19,
      "de": "die Führung",
      "plural": "Führungen",
      "fa": "بازدید با راهنما",
      "example": "Die Führung durch das Museum ist kostenlos.",
      "article": "die",
      "noun": "Führung"
    },
    {
      "id": "a22-19-v-22",
      "lesson": 19,
      "de": "das Programm",
      "plural": "Programme",
      "fa": "برنامه",
      "example": "Das Programm bietet viel Abwechslung.",
      "article": "das",
      "noun": "Programm"
    },
    {
      "id": "a22-19-v-23",
      "lesson": 19,
      "de": "der Vorschlag",
      "plural": "Vorschläge",
      "fa": "پیشنهاد",
      "example": "Dein Vorschlag gefällt mir.",
      "article": "der",
      "noun": "Vorschlag"
    },
    {
      "id": "a22-19-v-24",
      "lesson": 19,
      "de": "der Treffpunkt",
      "plural": "Treffpunkte",
      "fa": "محل قرار",
      "example": "Unser Treffpunkt ist der Eingang.",
      "article": "der",
      "noun": "Treffpunkt"
    },
    {
      "id": "a22-19-v-25",
      "lesson": 19,
      "de": "die Pause",
      "plural": "Pausen",
      "fa": "وقفه؛ استراحت",
      "example": "In der Pause trinken wir Wasser.",
      "article": "die",
      "noun": "Pause"
    },
    {
      "id": "a22-19-v-26",
      "lesson": 19,
      "de": "vorschlagen",
      "plural": "",
      "fa": "پیشنهاد دادن",
      "example": "Ich schlage einen Museumsbesuch vor.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-27",
      "lesson": 19,
      "de": "zustimmen",
      "plural": "",
      "fa": "موافقت کردن",
      "example": "Ich stimme deinem Vorschlag zu.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-28",
      "lesson": 19,
      "de": "ablehnen",
      "plural": "",
      "fa": "رد کردن",
      "example": "Sie lehnt die Einladung ab.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-29",
      "lesson": 19,
      "de": "überzeugen",
      "plural": "",
      "fa": "متقاعد کردن",
      "example": "Die guten Kritiken überzeugen mich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-30",
      "lesson": 19,
      "de": "begeistern",
      "plural": "",
      "fa": "به وجد آوردن",
      "example": "Die Musik begeistert das Publikum.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-31",
      "lesson": 19,
      "de": "sich verabreden",
      "plural": "",
      "fa": "قرار گذاشتن",
      "example": "Wir verabreden uns für Samstag.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-32",
      "lesson": 19,
      "de": "stattfinden",
      "plural": "",
      "fa": "برگزار شدن",
      "example": "Die Lesung findet im Park statt.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-33",
      "lesson": 19,
      "de": "auftreten",
      "plural": "",
      "fa": "اجرا داشتن",
      "example": "Die Sängerin tritt heute auf.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-34",
      "lesson": 19,
      "de": "vortragen",
      "plural": "",
      "fa": "از رو خواندن؛ اجرا کردن متن",
      "example": "Er trägt ein Gedicht vor.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-35",
      "lesson": 19,
      "de": "klatschen",
      "plural": "",
      "fa": "دست زدن",
      "example": "Nach dem Lied klatschen alle.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-36",
      "lesson": 19,
      "de": "reservieren",
      "plural": "",
      "fa": "رزرو کردن",
      "example": "Ich reserviere zwei Plätze.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-37",
      "lesson": 19,
      "de": "empfehlen",
      "plural": "",
      "fa": "توصیه کردن",
      "example": "Kannst du mir eine Ausstellung empfehlen?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-38",
      "lesson": 19,
      "de": "sich entscheiden",
      "plural": "",
      "fa": "تصمیم گرفتن",
      "example": "Wir entscheiden uns für das Konzert.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-39",
      "lesson": 19,
      "de": "besuchen",
      "plural": "",
      "fa": "بازدید؛ شرکت کردن",
      "example": "Wir besuchen eine Ausstellung.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-40",
      "lesson": 19,
      "de": "zurückkommen",
      "plural": "",
      "fa": "برگشتن",
      "example": "Wann kommst du vom Konzert zurück?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-41",
      "lesson": 19,
      "de": "ausverkauft",
      "plural": "",
      "fa": "تمام‌شده از نظر بلیط",
      "example": "Leider ist die Vorstellung ausverkauft.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-42",
      "lesson": 19,
      "de": "kostenlos",
      "plural": "",
      "fa": "رایگان",
      "example": "Die Führung ist kostenlos.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-43",
      "lesson": 19,
      "de": "sehenswert",
      "plural": "",
      "fa": "دیدنی",
      "example": "Das Museum ist wirklich sehenswert.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-44",
      "lesson": 19,
      "de": "beeindruckend",
      "plural": "",
      "fa": "تأثیرگذار",
      "example": "Die Bilder sind beeindruckend.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-45",
      "lesson": 19,
      "de": "lieber",
      "plural": "",
      "fa": "ترجیحاً",
      "example": "Ich würde lieber ins Kino gehen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-46",
      "lesson": 19,
      "de": "von dort",
      "plural": "",
      "fa": "از آنجا",
      "example": "Von dort gehen wir zusammen weiter.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-47",
      "lesson": 19,
      "de": "aus dem Museum",
      "plural": "",
      "fa": "از داخل موزه",
      "example": "Die Besucher kommen aus dem Museum.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-48",
      "lesson": 19,
      "de": "vom Konzert",
      "plural": "",
      "fa": "از کنسرت",
      "example": "Wir kommen gerade vom Konzert.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-49",
      "lesson": 19,
      "de": "Das klingt gut.",
      "plural": "",
      "fa": "خوب به نظر می‌رسد.",
      "example": "Ein Konzert im Park? Das klingt gut.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-19-v-50",
      "lesson": 19,
      "de": "Ich weiß noch nicht.",
      "plural": "",
      "fa": "هنوز نمی‌دانم.",
      "example": "Vielleicht komme ich mit. Ich weiß noch nicht.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-01",
      "lesson": 20,
      "de": "das Buch",
      "plural": "Bücher",
      "fa": "کتاب",
      "example": "Dieses Buch habe ich zweimal gelesen.",
      "article": "das",
      "noun": "Buch"
    },
    {
      "id": "a22-20-v-02",
      "lesson": 20,
      "de": "der Roman",
      "plural": "Romane",
      "fa": "رمان",
      "example": "Der Roman spielt in einem kleinen Dorf.",
      "article": "der",
      "noun": "Roman"
    },
    {
      "id": "a22-20-v-03",
      "lesson": 20,
      "de": "der Comic",
      "plural": "Comics",
      "fa": "کتاب یا داستان مصور",
      "example": "Als Kind las ich gern Comics.",
      "article": "der",
      "noun": "Comic"
    },
    {
      "id": "a22-20-v-04",
      "lesson": 20,
      "de": "die Zeitung",
      "plural": "Zeitungen",
      "fa": "روزنامه",
      "example": "Mein Vater liest morgens die Zeitung.",
      "article": "die",
      "noun": "Zeitung"
    },
    {
      "id": "a22-20-v-05",
      "lesson": 20,
      "de": "die Zeitschrift",
      "plural": "Zeitschriften",
      "fa": "مجله",
      "example": "Die Zeitschrift erscheint jeden Monat.",
      "article": "die",
      "noun": "Zeitschrift"
    },
    {
      "id": "a22-20-v-06",
      "lesson": 20,
      "de": "der Artikel",
      "plural": "Artikel",
      "fa": "مقاله",
      "example": "Der Artikel handelt von einer Reise.",
      "article": "der",
      "noun": "Artikel"
    },
    {
      "id": "a22-20-v-07",
      "lesson": 20,
      "de": "die Überschrift",
      "plural": "Überschriften",
      "fa": "عنوان متن",
      "example": "Lies zuerst die Überschrift.",
      "article": "die",
      "noun": "Überschrift"
    },
    {
      "id": "a22-20-v-08",
      "lesson": 20,
      "de": "die Seite",
      "plural": "Seiten",
      "fa": "صفحه",
      "example": "Das Buch hat zweihundert Seiten.",
      "article": "die",
      "noun": "Seite"
    },
    {
      "id": "a22-20-v-09",
      "lesson": 20,
      "de": "das Kapitel",
      "plural": "Kapitel",
      "fa": "فصل کتاب",
      "example": "Das letzte Kapitel ist spannend.",
      "article": "das",
      "noun": "Kapitel"
    },
    {
      "id": "a22-20-v-10",
      "lesson": 20,
      "de": "die Geschichte",
      "plural": "Geschichten",
      "fa": "داستان",
      "example": "Die Geschichte endet gut.",
      "article": "die",
      "noun": "Geschichte"
    },
    {
      "id": "a22-20-v-11",
      "lesson": 20,
      "de": "das Märchen",
      "plural": "Märchen",
      "fa": "افسانه؛ قصه",
      "example": "Die Oma erzählt ein Märchen.",
      "article": "das",
      "noun": "Märchen"
    },
    {
      "id": "a22-20-v-12",
      "lesson": 20,
      "de": "das Sachbuch",
      "plural": "Sachbücher",
      "fa": "کتاب غیرداستانی",
      "example": "Das Sachbuch erklärt die Natur.",
      "article": "das",
      "noun": "Sachbuch"
    },
    {
      "id": "a22-20-v-13",
      "lesson": 20,
      "de": "das Hörbuch",
      "plural": "Hörbücher",
      "fa": "کتاب صوتی",
      "example": "Im Zug höre ich ein Hörbuch.",
      "article": "das",
      "noun": "Hörbuch"
    },
    {
      "id": "a22-20-v-14",
      "lesson": 20,
      "de": "das E-Book",
      "plural": "E-Books",
      "fa": "کتاب الکترونیکی",
      "example": "Ich lade ein E-Book herunter.",
      "article": "das",
      "noun": "E-Book"
    },
    {
      "id": "a22-20-v-15",
      "lesson": 20,
      "de": "die Bibliothek",
      "plural": "Bibliotheken",
      "fa": "کتابخانه",
      "example": "Die Bibliothek öffnet um zehn.",
      "article": "die",
      "noun": "Bibliothek"
    },
    {
      "id": "a22-20-v-16",
      "lesson": 20,
      "de": "die Buchhandlung",
      "plural": "Buchhandlungen",
      "fa": "کتاب‌فروشی",
      "example": "In der Buchhandlung finde ich ein Geschenk.",
      "article": "die",
      "noun": "Buchhandlung"
    },
    {
      "id": "a22-20-v-17",
      "lesson": 20,
      "de": "der Autor",
      "plural": "Autoren",
      "fa": "نویسنده مرد",
      "example": "Der Autor stellt seinen Roman vor.",
      "article": "der",
      "noun": "Autor"
    },
    {
      "id": "a22-20-v-18",
      "lesson": 20,
      "de": "die Autorin",
      "plural": "Autorinnen",
      "fa": "نویسنده زن",
      "example": "Die Autorin liest aus ihrem neuen Buch.",
      "article": "die",
      "noun": "Autorin"
    },
    {
      "id": "a22-20-v-19",
      "lesson": 20,
      "de": "der Verlag",
      "plural": "Verlage",
      "fa": "انتشارات",
      "example": "Der Verlag veröffentlicht Kinderbücher.",
      "article": "der",
      "noun": "Verlag"
    },
    {
      "id": "a22-20-v-20",
      "lesson": 20,
      "de": "der Leser",
      "plural": "Leser",
      "fa": "خواننده مرد",
      "example": "Der Leser kennt das Ende noch nicht.",
      "article": "der",
      "noun": "Leser"
    },
    {
      "id": "a22-20-v-21",
      "lesson": 20,
      "de": "die Leserin",
      "plural": "Leserinnen",
      "fa": "خواننده زن",
      "example": "Eine Leserin stellt eine Frage.",
      "article": "die",
      "noun": "Leserin"
    },
    {
      "id": "a22-20-v-22",
      "lesson": 20,
      "de": "das Verbot",
      "plural": "Verbote",
      "fa": "ممنوعیت",
      "example": "Das Verbot galt nur für Comics.",
      "article": "das",
      "noun": "Verbot"
    },
    {
      "id": "a22-20-v-23",
      "lesson": 20,
      "de": "die Erlaubnis",
      "plural": "Erlaubnisse",
      "fa": "اجازه",
      "example": "Ich brauchte die Erlaubnis meiner Eltern.",
      "article": "die",
      "noun": "Erlaubnis"
    },
    {
      "id": "a22-20-v-24",
      "lesson": 20,
      "de": "die Kindheit",
      "plural": "",
      "fa": "دوران کودکی",
      "example": "In meiner Kindheit las ich jeden Abend.",
      "article": "die",
      "noun": "Kindheit"
    },
    {
      "id": "a22-20-v-25",
      "lesson": 20,
      "de": "das Interesse",
      "plural": "Interessen",
      "fa": "علاقه",
      "example": "Mein Interesse an Geschichten war groß.",
      "article": "das",
      "noun": "Interesse"
    },
    {
      "id": "a22-20-v-26",
      "lesson": 20,
      "de": "lesen",
      "plural": "",
      "fa": "خواندن",
      "example": "Ich lese gern im Zug.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-27",
      "lesson": 20,
      "de": "vorlesen",
      "plural": "",
      "fa": "بلند برای کسی خواندن",
      "example": "Mein Vater liest mir eine Geschichte vor.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-28",
      "lesson": 20,
      "de": "ausleihen",
      "plural": "",
      "fa": "امانت گرفتن یا دادن",
      "example": "Ich leihe mir ein Buch aus.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-29",
      "lesson": 20,
      "de": "zurückgeben",
      "plural": "",
      "fa": "پس دادن",
      "example": "Du musst das Buch morgen zurückgeben.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-30",
      "lesson": 20,
      "de": "verlängern",
      "plural": "",
      "fa": "تمدید کردن",
      "example": "Ich verlängere die Leihfrist.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-31",
      "lesson": 20,
      "de": "empfehlen",
      "plural": "",
      "fa": "توصیه کردن",
      "example": "Die Lehrerin empfiehlt uns einen Roman.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-32",
      "lesson": 20,
      "de": "handeln von",
      "plural": "",
      "fa": "دربارهٔ چیزی بودن",
      "example": "Der Roman handelt von einer Familie.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-33",
      "lesson": 20,
      "de": "veröffentlichen",
      "plural": "",
      "fa": "منتشر کردن",
      "example": "Die Autorin veröffentlicht ein neues Buch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-34",
      "lesson": 20,
      "de": "erlauben",
      "plural": "",
      "fa": "اجازه دادن",
      "example": "Meine Eltern erlaubten mir das Lesen am Abend.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-35",
      "lesson": 20,
      "de": "verbieten",
      "plural": "",
      "fa": "ممنوع کردن",
      "example": "Der Lehrer verbot das Handy im Unterricht.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-36",
      "lesson": 20,
      "de": "dürfen",
      "plural": "",
      "fa": "اجازه داشتن",
      "example": "Früher durfte ich lange aufbleiben.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-37",
      "lesson": 20,
      "de": "können",
      "plural": "",
      "fa": "توانستن",
      "example": "Mit sechs konnte ich schon lesen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-38",
      "lesson": 20,
      "de": "müssen",
      "plural": "",
      "fa": "مجبور بودن",
      "example": "Ich musste das Buch zurückgeben.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-39",
      "lesson": 20,
      "de": "sollen",
      "plural": "",
      "fa": "باید طبق توصیه یا دستور",
      "example": "Wir sollten den Text zusammenfassen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-40",
      "lesson": 20,
      "de": "wollen",
      "plural": "",
      "fa": "خواستن",
      "example": "Ich wollte mehr über die Geschichte wissen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-41",
      "lesson": 20,
      "de": "mögen",
      "plural": "",
      "fa": "دوست داشتن",
      "example": "Als Kind mochte ich Märchen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-42",
      "lesson": 20,
      "de": "spannend",
      "plural": "",
      "fa": "هیجان‌انگیز",
      "example": "Der Roman bleibt bis zum Ende spannend.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-43",
      "lesson": 20,
      "de": "langweilig",
      "plural": "",
      "fa": "کسل‌کننده",
      "example": "Die Geschichte war mir zu langweilig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-44",
      "lesson": 20,
      "de": "heimlich",
      "plural": "",
      "fa": "پنهانی",
      "example": "Ich las heimlich unter der Decke.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-45",
      "lesson": 20,
      "de": "eigentlich",
      "plural": "",
      "fa": "در واقع؛ اصولاً",
      "example": "Eigentlich musste ich schon schlafen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-46",
      "lesson": 20,
      "de": "damals",
      "plural": "",
      "fa": "آن زمان",
      "example": "Damals gab es bei uns keine E-Books.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-47",
      "lesson": 20,
      "de": "früher",
      "plural": "",
      "fa": "در گذشته",
      "example": "Früher ging ich oft in die Bibliothek.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-48",
      "lesson": 20,
      "de": "auf keinen Fall",
      "plural": "",
      "fa": "به هیچ وجه",
      "example": "Das Buch möchte ich auf keinen Fall verpassen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-49",
      "lesson": 20,
      "de": "Das interessiert mich.",
      "plural": "",
      "fa": "این برایم جالب است.",
      "example": "Ein Buch über Sprachen? Das interessiert mich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-20-v-50",
      "lesson": 20,
      "de": "Das ist nichts für mich.",
      "plural": "",
      "fa": "این مناسب سلیقهٔ من نیست.",
      "example": "Ein sehr langer Krimi ist nichts für mich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-01",
      "lesson": 21,
      "de": "das Dokument",
      "plural": "Dokumente",
      "fa": "سند؛ مدرک",
      "example": "Bitte bringen Sie alle Dokumente mit.",
      "article": "das",
      "noun": "Dokument"
    },
    {
      "id": "a22-21-v-02",
      "lesson": 21,
      "de": "der Ausweis",
      "plural": "Ausweise",
      "fa": "مدرک شناسایی",
      "example": "Mein Ausweis liegt in der Tasche.",
      "article": "der",
      "noun": "Ausweis"
    },
    {
      "id": "a22-21-v-03",
      "lesson": 21,
      "de": "der Reisepass",
      "plural": "Reisepässe",
      "fa": "گذرنامه",
      "example": "Ich brauche einen neuen Reisepass.",
      "article": "der",
      "noun": "Reisepass"
    },
    {
      "id": "a22-21-v-04",
      "lesson": 21,
      "de": "der Führerschein",
      "plural": "Führerscheine",
      "fa": "گواهی‌نامهٔ رانندگی",
      "example": "Er zeigt der Polizei seinen Führerschein.",
      "article": "der",
      "noun": "Führerschein"
    },
    {
      "id": "a22-21-v-05",
      "lesson": 21,
      "de": "das Formular",
      "plural": "Formulare",
      "fa": "فرم",
      "example": "Ich fülle das Formular aus.",
      "article": "das",
      "noun": "Formular"
    },
    {
      "id": "a22-21-v-06",
      "lesson": 21,
      "de": "der Antrag",
      "plural": "Anträge",
      "fa": "درخواست رسمی",
      "example": "Der Antrag ist noch nicht vollständig.",
      "article": "der",
      "noun": "Antrag"
    },
    {
      "id": "a22-21-v-07",
      "lesson": 21,
      "de": "die Unterschrift",
      "plural": "Unterschriften",
      "fa": "امضا",
      "example": "Hier fehlt Ihre Unterschrift.",
      "article": "die",
      "noun": "Unterschrift"
    },
    {
      "id": "a22-21-v-08",
      "lesson": 21,
      "de": "die Bescheinigung",
      "plural": "Bescheinigungen",
      "fa": "گواهی",
      "example": "Die Bescheinigung wird per Post geschickt.",
      "article": "die",
      "noun": "Bescheinigung"
    },
    {
      "id": "a22-21-v-09",
      "lesson": 21,
      "de": "das Amt",
      "plural": "Ämter",
      "fa": "ادارهٔ دولتی",
      "example": "Das Amt ist heute geschlossen.",
      "article": "das",
      "noun": "Amt"
    },
    {
      "id": "a22-21-v-10",
      "lesson": 21,
      "de": "die Behörde",
      "plural": "Behörden",
      "fa": "نهاد دولتی",
      "example": "Welche Behörde ist zuständig?",
      "article": "die",
      "noun": "Behörde"
    },
    {
      "id": "a22-21-v-11",
      "lesson": 21,
      "de": "die Versicherung",
      "plural": "Versicherungen",
      "fa": "بیمه",
      "example": "Ich rufe meine Versicherung an.",
      "article": "die",
      "noun": "Versicherung"
    },
    {
      "id": "a22-21-v-12",
      "lesson": 21,
      "de": "die Polizei",
      "plural": "",
      "fa": "پلیس",
      "example": "Die Polizei nimmt den Bericht auf.",
      "article": "die",
      "noun": "Polizei"
    },
    {
      "id": "a22-21-v-13",
      "lesson": 21,
      "de": "die Feuerwehr",
      "plural": "Feuerwehren",
      "fa": "آتش‌نشانی",
      "example": "Die Feuerwehr kommt schnell.",
      "article": "die",
      "noun": "Feuerwehr"
    },
    {
      "id": "a22-21-v-14",
      "lesson": 21,
      "de": "der Notarzt",
      "plural": "Notärzte",
      "fa": "پزشک اورژانس",
      "example": "Ein Notarzt kümmert sich um den Verletzten.",
      "article": "der",
      "noun": "Notarzt"
    },
    {
      "id": "a22-21-v-15",
      "lesson": 21,
      "de": "der Unfall",
      "plural": "Unfälle",
      "fa": "حادثه",
      "example": "An der Kreuzung ist ein Unfall passiert.",
      "article": "der",
      "noun": "Unfall"
    },
    {
      "id": "a22-21-v-16",
      "lesson": 21,
      "de": "der Einbruch",
      "plural": "Einbrüche",
      "fa": "ورود غیرمجاز برای سرقت",
      "example": "Nach dem Einbruch fehlte ein Laptop.",
      "article": "der",
      "noun": "Einbruch"
    },
    {
      "id": "a22-21-v-17",
      "lesson": 21,
      "de": "der Diebstahl",
      "plural": "Diebstähle",
      "fa": "دزدی",
      "example": "Sie meldet den Diebstahl ihrer Tasche.",
      "article": "der",
      "noun": "Diebstahl"
    },
    {
      "id": "a22-21-v-18",
      "lesson": 21,
      "de": "der Schaden",
      "plural": "Schäden",
      "fa": "خسارت",
      "example": "Der Schaden am Fenster ist groß.",
      "article": "der",
      "noun": "Schaden"
    },
    {
      "id": "a22-21-v-19",
      "lesson": 21,
      "de": "der Zeuge",
      "plural": "Zeugen",
      "fa": "شاهد مرد",
      "example": "Ein Zeuge beschreibt den Mann.",
      "article": "der",
      "noun": "Zeuge"
    },
    {
      "id": "a22-21-v-20",
      "lesson": 21,
      "de": "die Zeugin",
      "plural": "Zeuginnen",
      "fa": "شاهد زن",
      "example": "Die Zeugin hat das Auto gesehen.",
      "article": "die",
      "noun": "Zeugin"
    },
    {
      "id": "a22-21-v-21",
      "lesson": 21,
      "de": "die Beschreibung",
      "plural": "Beschreibungen",
      "fa": "توصیف",
      "example": "Die Beschreibung war sehr genau.",
      "article": "die",
      "noun": "Beschreibung"
    },
    {
      "id": "a22-21-v-22",
      "lesson": 21,
      "de": "die Meldung",
      "plural": "Meldungen",
      "fa": "گزارش؛ اعلام",
      "example": "Die Meldung wird aufgenommen.",
      "article": "die",
      "noun": "Meldung"
    },
    {
      "id": "a22-21-v-23",
      "lesson": 21,
      "de": "die Kopie",
      "plural": "Kopien",
      "fa": "کپی",
      "example": "Bitte machen Sie eine Kopie.",
      "article": "die",
      "noun": "Kopie"
    },
    {
      "id": "a22-21-v-24",
      "lesson": 21,
      "de": "das Original",
      "plural": "Originale",
      "fa": "اصل مدرک",
      "example": "Das Original bleibt bei Ihnen.",
      "article": "das",
      "noun": "Original"
    },
    {
      "id": "a22-21-v-25",
      "lesson": 21,
      "de": "der Termin",
      "plural": "Termine",
      "fa": "وقت قرار",
      "example": "Ich vereinbare einen Termin beim Amt.",
      "article": "der",
      "noun": "Termin"
    },
    {
      "id": "a22-21-v-26",
      "lesson": 21,
      "de": "lassen",
      "plural": "",
      "fa": "گذاشتن؛ سپردن انجام کار",
      "example": "Ich lasse meinen Ausweis kopieren.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-27",
      "lesson": 21,
      "de": "beantragen",
      "plural": "",
      "fa": "درخواست رسمی دادن",
      "example": "Sie beantragt einen Reisepass.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-28",
      "lesson": 21,
      "de": "ausfüllen",
      "plural": "",
      "fa": "پر کردن فرم",
      "example": "Bitte füllen Sie das Formular aus.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-29",
      "lesson": 21,
      "de": "unterschreiben",
      "plural": "",
      "fa": "امضا کردن",
      "example": "Er unterschreibt den Antrag.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-30",
      "lesson": 21,
      "de": "verlieren",
      "plural": "",
      "fa": "گم کردن",
      "example": "Ich habe meinen Ausweis verloren.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-31",
      "lesson": 21,
      "de": "stehlen",
      "plural": "",
      "fa": "دزدیدن",
      "example": "Jemand hat mein Fahrrad gestohlen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-32",
      "lesson": 21,
      "de": "melden",
      "plural": "",
      "fa": "گزارش دادن",
      "example": "Ich melde den Verlust meiner Karte.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-33",
      "lesson": 21,
      "de": "beschreiben",
      "plural": "",
      "fa": "توصیف کردن",
      "example": "Können Sie den Rucksack beschreiben?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-34",
      "lesson": 21,
      "de": "erkennen",
      "plural": "",
      "fa": "شناختن؛ تشخیص دادن",
      "example": "Ich erkenne die Person auf dem Foto.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-35",
      "lesson": 21,
      "de": "meinen",
      "plural": "",
      "fa": "منظور داشتن",
      "example": "Welchen Koffer meinst du?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-36",
      "lesson": 21,
      "de": "reparieren",
      "plural": "",
      "fa": "تعمیر کردن",
      "example": "Die Werkstatt repariert das Fenster.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-37",
      "lesson": 21,
      "de": "kopieren",
      "plural": "",
      "fa": "کپی کردن",
      "example": "Ich lasse die Dokumente kopieren.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-38",
      "lesson": 21,
      "de": "erneuern",
      "plural": "",
      "fa": "تجدید کردن",
      "example": "Sie muss ihren Ausweis erneuern.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-39",
      "lesson": 21,
      "de": "einbrechen",
      "plural": "",
      "fa": "برای سرقت وارد شدن",
      "example": "Jemand ist in die Wohnung eingebrochen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-40",
      "lesson": 21,
      "de": "sich kümmern um",
      "plural": "",
      "fa": "رسیدگی کردن به",
      "example": "Die Mitarbeiterin kümmert sich um den Antrag.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-41",
      "lesson": 21,
      "de": "gültig",
      "plural": "",
      "fa": "معتبر",
      "example": "Mein Pass ist noch gültig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-42",
      "lesson": 21,
      "de": "abgelaufen",
      "plural": "",
      "fa": "منقضی‌شده",
      "example": "Der Ausweis ist leider abgelaufen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-43",
      "lesson": 21,
      "de": "vollständig",
      "plural": "",
      "fa": "کامل",
      "example": "Sind die Unterlagen vollständig?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-44",
      "lesson": 21,
      "de": "zuständig",
      "plural": "",
      "fa": "مسئول و ذی‌صلاح",
      "example": "Welche Stelle ist dafür zuständig?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-45",
      "lesson": 21,
      "de": "genau",
      "plural": "",
      "fa": "دقیق",
      "example": "Bitte beschreiben Sie die Tasche genau.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-46",
      "lesson": 21,
      "de": "beschädigt",
      "plural": "",
      "fa": "آسیب‌دیده",
      "example": "Das Fenster ist beschädigt.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-47",
      "lesson": 21,
      "de": "Welchen meinen Sie?",
      "plural": "",
      "fa": "منظورتان کدام است؟",
      "example": "Welchen meinen Sie? Den blauen Koffer.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-48",
      "lesson": 21,
      "de": "Genau den.",
      "plural": "",
      "fa": "دقیقاً همان را.",
      "example": "Der Koffer dort? Ja, genau den.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-49",
      "lesson": 21,
      "de": "Was ist passiert?",
      "plural": "",
      "fa": "چه اتفاقی افتاده؟",
      "example": "Erzählen Sie bitte: Was ist passiert?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-21-v-50",
      "lesson": 21,
      "de": "Ich lasse das reparieren.",
      "plural": "",
      "fa": "می‌دهم آن را تعمیر کنند.",
      "example": "Das Fahrrad ist kaputt. Ich lasse das reparieren.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-01",
      "lesson": 22,
      "de": "das Carsharing",
      "plural": "",
      "fa": "استفادهٔ اشتراکی از خودرو",
      "example": "Durch Carsharing brauche ich kein eigenes Auto.",
      "article": "das",
      "noun": "Carsharing"
    },
    {
      "id": "a22-22-v-02",
      "lesson": 22,
      "de": "die Anmeldung",
      "plural": "Anmeldungen",
      "fa": "ثبت‌نام",
      "example": "Die Anmeldung dauert nur wenige Minuten.",
      "article": "die",
      "noun": "Anmeldung"
    },
    {
      "id": "a22-22-v-03",
      "lesson": 22,
      "de": "das Benutzerkonto",
      "plural": "Benutzerkonten",
      "fa": "حساب کاربری",
      "example": "Ich öffne mein Benutzerkonto.",
      "article": "das",
      "noun": "Benutzerkonto"
    },
    {
      "id": "a22-22-v-04",
      "lesson": 22,
      "de": "das Passwort",
      "plural": "Passwörter",
      "fa": "رمز عبور",
      "example": "Ich habe mein Passwort vergessen.",
      "article": "das",
      "noun": "Passwort"
    },
    {
      "id": "a22-22-v-05",
      "lesson": 22,
      "de": "der Benutzername",
      "plural": "Benutzernamen",
      "fa": "نام کاربری",
      "example": "Bitte geben Sie Ihren Benutzernamen ein.",
      "article": "der",
      "noun": "Benutzername"
    },
    {
      "id": "a22-22-v-06",
      "lesson": 22,
      "de": "die E-Mail-Adresse",
      "plural": "E-Mail-Adressen",
      "fa": "نشانی ایمیل",
      "example": "Meine E-Mail-Adresse ist im Konto gespeichert.",
      "article": "die",
      "noun": "E-Mail-Adresse"
    },
    {
      "id": "a22-22-v-07",
      "lesson": 22,
      "de": "die Webseite",
      "plural": "Webseiten",
      "fa": "صفحهٔ وب",
      "example": "Auf der Webseite steht eine Anleitung.",
      "article": "die",
      "noun": "Webseite"
    },
    {
      "id": "a22-22-v-08",
      "lesson": 22,
      "de": "die App",
      "plural": "Apps",
      "fa": "اپلیکیشن",
      "example": "Die App zeigt freie Fahrzeuge.",
      "article": "die",
      "noun": "App"
    },
    {
      "id": "a22-22-v-09",
      "lesson": 22,
      "de": "der Bildschirm",
      "plural": "Bildschirme",
      "fa": "صفحه‌نمایش",
      "example": "Auf dem Bildschirm erscheint eine Nachricht.",
      "article": "der",
      "noun": "Bildschirm"
    },
    {
      "id": "a22-22-v-10",
      "lesson": 22,
      "de": "die Schaltfläche",
      "plural": "Schaltflächen",
      "fa": "دکمهٔ رابط کاربری",
      "example": "Klicken Sie auf die grüne Schaltfläche.",
      "article": "die",
      "noun": "Schaltfläche"
    },
    {
      "id": "a22-22-v-11",
      "lesson": 22,
      "de": "die Bestätigung",
      "plural": "Bestätigungen",
      "fa": "تأییدیه",
      "example": "Ich warte auf die Bestätigung.",
      "article": "die",
      "noun": "Bestätigung"
    },
    {
      "id": "a22-22-v-12",
      "lesson": 22,
      "de": "der Link",
      "plural": "Links",
      "fa": "پیوند اینترنتی",
      "example": "Öffnen Sie den Link in der Nachricht.",
      "article": "der",
      "noun": "Link"
    },
    {
      "id": "a22-22-v-13",
      "lesson": 22,
      "de": "die Daten",
      "plural": "",
      "fa": "داده‌ها؛ اطلاعات",
      "example": "Kontrollieren Sie Ihre Daten.",
      "article": "",
      "noun": "",
      "pluralOnly": true
    },
    {
      "id": "a22-22-v-14",
      "lesson": 22,
      "de": "die Datei",
      "plural": "Dateien",
      "fa": "فایل",
      "example": "Die Datei wird gespeichert.",
      "article": "die",
      "noun": "Datei"
    },
    {
      "id": "a22-22-v-15",
      "lesson": 22,
      "de": "die Verbindung",
      "plural": "Verbindungen",
      "fa": "اتصال",
      "example": "Die Verbindung ist langsam.",
      "article": "die",
      "noun": "Verbindung"
    },
    {
      "id": "a22-22-v-16",
      "lesson": 22,
      "de": "die Chipkarte",
      "plural": "Chipkarten",
      "fa": "کارت هوشمند",
      "example": "Mit der Chipkarte öffne ich das Auto.",
      "article": "die",
      "noun": "Chipkarte"
    },
    {
      "id": "a22-22-v-17",
      "lesson": 22,
      "de": "das Fahrzeug",
      "plural": "Fahrzeuge",
      "fa": "وسیلهٔ نقلیه",
      "example": "Das Fahrzeug steht neben dem Bahnhof.",
      "article": "das",
      "noun": "Fahrzeug"
    },
    {
      "id": "a22-22-v-18",
      "lesson": 22,
      "de": "der Wagen",
      "plural": "Wagen",
      "fa": "خودرو",
      "example": "Seit März habe ich keinen eigenen Wagen.",
      "article": "der",
      "noun": "Wagen"
    },
    {
      "id": "a22-22-v-19",
      "lesson": 22,
      "de": "die Station",
      "plural": "Stationen",
      "fa": "ایستگاه",
      "example": "Ich gebe das Fahrrad an der Station zurück.",
      "article": "die",
      "noun": "Station"
    },
    {
      "id": "a22-22-v-20",
      "lesson": 22,
      "de": "der Parkplatz",
      "plural": "Parkplätze",
      "fa": "محل پارک",
      "example": "Der Parkplatz liegt am Bahnhof.",
      "article": "der",
      "noun": "Parkplatz"
    },
    {
      "id": "a22-22-v-21",
      "lesson": 22,
      "de": "die Tankstelle",
      "plural": "Tankstellen",
      "fa": "پمپ بنزین",
      "example": "Die Tankstelle ist noch offen.",
      "article": "die",
      "noun": "Tankstelle"
    },
    {
      "id": "a22-22-v-22",
      "lesson": 22,
      "de": "die Gebühr",
      "plural": "Gebühren",
      "fa": "هزینهٔ خدمات",
      "example": "Die Gebühr wird monatlich bezahlt.",
      "article": "die",
      "noun": "Gebühr"
    },
    {
      "id": "a22-22-v-23",
      "lesson": 22,
      "de": "die Nutzung",
      "plural": "",
      "fa": "استفاده",
      "example": "Die Nutzung wird pro Minute berechnet.",
      "article": "die",
      "noun": "Nutzung"
    },
    {
      "id": "a22-22-v-24",
      "lesson": 22,
      "de": "die Anleitung",
      "plural": "Anleitungen",
      "fa": "دستورالعمل",
      "example": "Lesen Sie zuerst die Anleitung.",
      "article": "die",
      "noun": "Anleitung"
    },
    {
      "id": "a22-22-v-25",
      "lesson": 22,
      "de": "der Schritt",
      "plural": "Schritte",
      "fa": "مرحله",
      "example": "Der nächste Schritt ist die Bestätigung.",
      "article": "der",
      "noun": "Schritt"
    },
    {
      "id": "a22-22-v-26",
      "lesson": 22,
      "de": "sich anmelden",
      "plural": "",
      "fa": "ثبت‌نام؛ وارد حساب شدن",
      "example": "Ich melde mich online an.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-27",
      "lesson": 22,
      "de": "sich registrieren",
      "plural": "",
      "fa": "ثبت‌نام کردن",
      "example": "Neue Nutzer registrieren sich zuerst.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-28",
      "lesson": 22,
      "de": "sich einloggen",
      "plural": "",
      "fa": "وارد حساب شدن",
      "example": "Ich logge mich mit meinem Passwort ein.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-29",
      "lesson": 22,
      "de": "sich abmelden",
      "plural": "",
      "fa": "خارج شدن از حساب",
      "example": "Nach der Nutzung melde ich mich ab.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-30",
      "lesson": 22,
      "de": "eingeben",
      "plural": "",
      "fa": "وارد کردن داده",
      "example": "Bitte geben Sie Ihren Namen ein.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-31",
      "lesson": 22,
      "de": "anklicken",
      "plural": "",
      "fa": "کلیک کردن روی",
      "example": "Klicken Sie den Link an.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-32",
      "lesson": 22,
      "de": "bestätigen",
      "plural": "",
      "fa": "تأیید کردن",
      "example": "Bestätigen Sie Ihre E-Mail-Adresse.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-33",
      "lesson": 22,
      "de": "speichern",
      "plural": "",
      "fa": "ذخیره کردن",
      "example": "Ich speichere die Datei.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-34",
      "lesson": 22,
      "de": "herunterladen",
      "plural": "",
      "fa": "دانلود کردن",
      "example": "Wir laden die App herunter.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-35",
      "lesson": 22,
      "de": "hochladen",
      "plural": "",
      "fa": "بارگذاری کردن",
      "example": "Ich lade ein Foto hoch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-36",
      "lesson": 22,
      "de": "auswählen",
      "plural": "",
      "fa": "انتخاب کردن",
      "example": "Wählen Sie ein Fahrzeug aus.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-37",
      "lesson": 22,
      "de": "ausleihen",
      "plural": "",
      "fa": "قرض یا امانت گرفتن",
      "example": "Ich leihe mir ein Fahrrad aus.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-38",
      "lesson": 22,
      "de": "zurückgeben",
      "plural": "",
      "fa": "پس دادن",
      "example": "Wir geben das Auto morgen zurück.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-39",
      "lesson": 22,
      "de": "verkaufen",
      "plural": "",
      "fa": "فروختن",
      "example": "Ich habe meinen Wagen verkauft.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-40",
      "lesson": 22,
      "de": "warten",
      "plural": "",
      "fa": "منتظر ماندن",
      "example": "Warten Sie, bis die Bestätigung kommt.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-41",
      "lesson": 22,
      "de": "verfügbar",
      "plural": "",
      "fa": "در دسترس",
      "example": "Hier ist gerade kein Fahrrad verfügbar.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-42",
      "lesson": 22,
      "de": "kostenpflichtig",
      "plural": "",
      "fa": "نیازمند پرداخت",
      "example": "Dieser Service ist kostenpflichtig.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-43",
      "lesson": 22,
      "de": "kostenlos",
      "plural": "",
      "fa": "رایگان",
      "example": "Die Anmeldung ist kostenlos.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-44",
      "lesson": 22,
      "de": "erfolgreich",
      "plural": "",
      "fa": "موفق",
      "example": "Die Registrierung war erfolgreich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-45",
      "lesson": 22,
      "de": "automatisch",
      "plural": "",
      "fa": "خودکار",
      "example": "Die Tür öffnet sich automatisch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-46",
      "lesson": 22,
      "de": "seitdem",
      "plural": "",
      "fa": "از وقتی که؛ از آن زمان",
      "example": "Seitdem ich Rad fahre, bin ich fitter.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-47",
      "lesson": 22,
      "de": "bis",
      "plural": "",
      "fa": "تا زمانی که",
      "example": "Warte, bis die Seite geladen ist.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-48",
      "lesson": 22,
      "de": "anschließend",
      "plural": "",
      "fa": "پس از آن",
      "example": "Anschließend wählen Sie ein Fahrzeug.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-49",
      "lesson": 22,
      "de": "Schritt für Schritt",
      "plural": "",
      "fa": "قدم‌به‌قدم",
      "example": "Die Anleitung erklärt alles Schritt für Schritt.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-22-v-50",
      "lesson": 22,
      "de": "Bitte warten.",
      "plural": "",
      "fa": "لطفاً صبر کنید.",
      "example": "Bitte warten. Ihre Daten werden gespeichert.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-01",
      "lesson": 23,
      "de": "der Beruf",
      "plural": "Berufe",
      "fa": "شغل",
      "example": "Welcher Beruf passt zu dir?",
      "article": "der",
      "noun": "Beruf"
    },
    {
      "id": "a22-23-v-02",
      "lesson": 23,
      "de": "die Ausbildung",
      "plural": "Ausbildungen",
      "fa": "آموزش حرفه‌ای",
      "example": "Meine Ausbildung dauert drei Jahre.",
      "article": "die",
      "noun": "Ausbildung"
    },
    {
      "id": "a22-23-v-03",
      "lesson": 23,
      "de": "die Ausbildungsstelle",
      "plural": "Ausbildungsstellen",
      "fa": "جایگاه کارآموزی حرفه‌ای",
      "example": "Ich suche eine Ausbildungsstelle.",
      "article": "die",
      "noun": "Ausbildungsstelle"
    },
    {
      "id": "a22-23-v-04",
      "lesson": 23,
      "de": "der Ausbildungsplatz",
      "plural": "Ausbildungsplätze",
      "fa": "جای کارآموزی حرفه‌ای",
      "example": "Sie hat einen Ausbildungsplatz gefunden.",
      "article": "der",
      "noun": "Ausbildungsplatz"
    },
    {
      "id": "a22-23-v-05",
      "lesson": 23,
      "de": "die Berufsschule",
      "plural": "Berufsschulen",
      "fa": "مدرسهٔ حرفه‌ای",
      "example": "Zweimal pro Woche gehe ich zur Berufsschule.",
      "article": "die",
      "noun": "Berufsschule"
    },
    {
      "id": "a22-23-v-06",
      "lesson": 23,
      "de": "der Schulabschluss",
      "plural": "Schulabschlüsse",
      "fa": "مدرک پایان مدرسه",
      "example": "Für die Ausbildung brauche ich einen Schulabschluss.",
      "article": "der",
      "noun": "Schulabschluss"
    },
    {
      "id": "a22-23-v-07",
      "lesson": 23,
      "de": "das Zeugnis",
      "plural": "Zeugnisse",
      "fa": "کارنامه؛ گواهی",
      "example": "Ich lege mein Zeugnis bei.",
      "article": "das",
      "noun": "Zeugnis"
    },
    {
      "id": "a22-23-v-08",
      "lesson": 23,
      "de": "die Bewerbung",
      "plural": "Bewerbungen",
      "fa": "درخواست استخدام",
      "example": "Meine Bewerbung ist fast fertig.",
      "article": "die",
      "noun": "Bewerbung"
    },
    {
      "id": "a22-23-v-09",
      "lesson": 23,
      "de": "der Lebenslauf",
      "plural": "Lebensläufe",
      "fa": "رزومه",
      "example": "Im Lebenslauf stehen meine Erfahrungen.",
      "article": "der",
      "noun": "Lebenslauf"
    },
    {
      "id": "a22-23-v-10",
      "lesson": 23,
      "de": "das Vorstellungsgespräch",
      "plural": "Vorstellungsgespräche",
      "fa": "مصاحبهٔ شغلی",
      "example": "Am Freitag habe ich ein Vorstellungsgespräch.",
      "article": "das",
      "noun": "Vorstellungsgespräch"
    },
    {
      "id": "a22-23-v-11",
      "lesson": 23,
      "de": "das Praktikum",
      "plural": "Praktika",
      "fa": "کارآموزی",
      "example": "Das Praktikum dauert vier Wochen.",
      "article": "das",
      "noun": "Praktikum"
    },
    {
      "id": "a22-23-v-12",
      "lesson": 23,
      "de": "der Betrieb",
      "plural": "Betriebe",
      "fa": "بنگاه؛ محل کار",
      "example": "Unser Betrieb hat zwanzig Mitarbeiter.",
      "article": "der",
      "noun": "Betrieb"
    },
    {
      "id": "a22-23-v-13",
      "lesson": 23,
      "de": "die Werkstatt",
      "plural": "Werkstätten",
      "fa": "کارگاه",
      "example": "In der Werkstatt reparieren wir Fahrräder.",
      "article": "die",
      "noun": "Werkstatt"
    },
    {
      "id": "a22-23-v-14",
      "lesson": 23,
      "de": "das Büro",
      "plural": "Büros",
      "fa": "دفتر کار",
      "example": "Das Büro liegt im ersten Stock.",
      "article": "das",
      "noun": "Büro"
    },
    {
      "id": "a22-23-v-15",
      "lesson": 23,
      "de": "der Kollege",
      "plural": "Kollegen",
      "fa": "همکار مرد",
      "example": "Mein Kollege hilft mir.",
      "article": "der",
      "noun": "Kollege"
    },
    {
      "id": "a22-23-v-16",
      "lesson": 23,
      "de": "die Kollegin",
      "plural": "Kolleginnen",
      "fa": "همکار زن",
      "example": "Die Kollegin erklärt mir die Aufgabe.",
      "article": "die",
      "noun": "Kollegin"
    },
    {
      "id": "a22-23-v-17",
      "lesson": 23,
      "de": "der Chef",
      "plural": "Chefs",
      "fa": "رئیس مرد",
      "example": "Mein Chef ist heute unterwegs.",
      "article": "der",
      "noun": "Chef"
    },
    {
      "id": "a22-23-v-18",
      "lesson": 23,
      "de": "die Chefin",
      "plural": "Chefinnen",
      "fa": "رئیس زن",
      "example": "Die Chefin führt das Gespräch.",
      "article": "die",
      "noun": "Chefin"
    },
    {
      "id": "a22-23-v-19",
      "lesson": 23,
      "de": "die Aufgabe",
      "plural": "Aufgaben",
      "fa": "وظیفه",
      "example": "Diese Aufgabe mache ich gern.",
      "article": "die",
      "noun": "Aufgabe"
    },
    {
      "id": "a22-23-v-20",
      "lesson": 23,
      "de": "die Verantwortung",
      "plural": "",
      "fa": "مسئولیت",
      "example": "Ich übernehme mehr Verantwortung.",
      "article": "die",
      "noun": "Verantwortung"
    },
    {
      "id": "a22-23-v-21",
      "lesson": 23,
      "de": "die Fähigkeit",
      "plural": "Fähigkeiten",
      "fa": "توانایی",
      "example": "Welche Fähigkeiten brauchst du?",
      "article": "die",
      "noun": "Fähigkeit"
    },
    {
      "id": "a22-23-v-22",
      "lesson": 23,
      "de": "die Stärke",
      "plural": "Stärken",
      "fa": "نقطهٔ قوت",
      "example": "Geduld ist eine meiner Stärken.",
      "article": "die",
      "noun": "Stärke"
    },
    {
      "id": "a22-23-v-23",
      "lesson": 23,
      "de": "die Schwäche",
      "plural": "Schwächen",
      "fa": "نقطهٔ ضعف",
      "example": "Ich möchte an meinen Schwächen arbeiten.",
      "article": "die",
      "noun": "Schwäche"
    },
    {
      "id": "a22-23-v-24",
      "lesson": 23,
      "de": "das Gehalt",
      "plural": "Gehälter",
      "fa": "حقوق",
      "example": "Das Gehalt wird am Monatsende überwiesen.",
      "article": "das",
      "noun": "Gehalt"
    },
    {
      "id": "a22-23-v-25",
      "lesson": 23,
      "de": "die Arbeitszeit",
      "plural": "Arbeitszeiten",
      "fa": "ساعت کاری",
      "example": "Meine Arbeitszeit beginnt um acht.",
      "article": "die",
      "noun": "Arbeitszeit"
    },
    {
      "id": "a22-23-v-26",
      "lesson": 23,
      "de": "arbeiten",
      "plural": "",
      "fa": "کار کردن",
      "example": "Ich arbeite gern mit Menschen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-27",
      "lesson": 23,
      "de": "sich bewerben",
      "plural": "",
      "fa": "برای شغل درخواست دادن",
      "example": "Ich bewerbe mich um einen Ausbildungsplatz.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-28",
      "lesson": 23,
      "de": "ausbilden",
      "plural": "",
      "fa": "آموزش حرفه‌ای دادن",
      "example": "Der Betrieb bildet junge Menschen aus.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-29",
      "lesson": 23,
      "de": "lernen",
      "plural": "",
      "fa": "یاد گرفتن",
      "example": "Im Praktikum lerne ich viel.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-30",
      "lesson": 23,
      "de": "beraten",
      "plural": "",
      "fa": "مشاوره دادن",
      "example": "Sie berät die Kunden.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-31",
      "lesson": 23,
      "de": "reparieren",
      "plural": "",
      "fa": "تعمیر کردن",
      "example": "Er repariert Fahrräder.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-32",
      "lesson": 23,
      "de": "organisieren",
      "plural": "",
      "fa": "سازمان‌دهی کردن",
      "example": "Ich organisiere die Termine.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-33",
      "lesson": 23,
      "de": "betreuen",
      "plural": "",
      "fa": "رسیدگی و مراقبت کردن",
      "example": "Wir betreuen ältere Menschen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-34",
      "lesson": 23,
      "de": "verdienen",
      "plural": "",
      "fa": "درآمد داشتن",
      "example": "Wie viel verdient man in diesem Beruf?",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-35",
      "lesson": 23,
      "de": "passen zu",
      "plural": "",
      "fa": "متناسب بودن با",
      "example": "Dieser Beruf passt zu meinen Stärken.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-36",
      "lesson": 23,
      "de": "sich entscheiden für",
      "plural": "",
      "fa": "انتخاب کردن",
      "example": "Ich entscheide mich für eine Ausbildung.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-37",
      "lesson": 23,
      "de": "sich vorstellen",
      "plural": "",
      "fa": "خود را معرفی کردن",
      "example": "Bitte stellen Sie sich kurz vor.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-38",
      "lesson": 23,
      "de": "erklären",
      "plural": "",
      "fa": "توضیح دادن",
      "example": "Die Kollegin erklärt den Arbeitsablauf.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-39",
      "lesson": 23,
      "de": "zusammenarbeiten",
      "plural": "",
      "fa": "همکاری کردن",
      "example": "Wir arbeiten im Team zusammen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-40",
      "lesson": 23,
      "de": "übernehmen",
      "plural": "",
      "fa": "برعهده گرفتن",
      "example": "Morgen übernehme ich diese Aufgabe.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-41",
      "lesson": 23,
      "de": "zufrieden",
      "plural": "",
      "fa": "راضی",
      "example": "Ich bin mit meiner Ausbildung zufrieden.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-42",
      "lesson": 23,
      "de": "unzufrieden",
      "plural": "",
      "fa": "ناراضی",
      "example": "Er ist mit den Arbeitszeiten unzufrieden.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-43",
      "lesson": 23,
      "de": "zuverlässig",
      "plural": "",
      "fa": "قابل اعتماد",
      "example": "Eine zuverlässige Kollegin kommt pünktlich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-44",
      "lesson": 23,
      "de": "geduldig",
      "plural": "",
      "fa": "صبور",
      "example": "Bei dieser Arbeit muss man geduldig sein.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-45",
      "lesson": 23,
      "de": "kreativ",
      "plural": "",
      "fa": "خلاق",
      "example": "Ich suche einen kreativen Beruf.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-46",
      "lesson": 23,
      "de": "selbstständig",
      "plural": "",
      "fa": "مستقل",
      "example": "Ich kann die Aufgabe selbstständig lösen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-47",
      "lesson": 23,
      "de": "abwechslungsreich",
      "plural": "",
      "fa": "متنوع",
      "example": "Die Arbeit ist abwechslungsreich.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-48",
      "lesson": 23,
      "de": "anstrengend",
      "plural": "",
      "fa": "خسته‌کننده؛ پرفشار",
      "example": "Manchmal ist die Arbeit anstrengend.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-49",
      "lesson": 23,
      "de": "Das macht mir Spaß.",
      "plural": "",
      "fa": "از این لذت می‌برم.",
      "example": "Menschen zu helfen macht mir Spaß.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-23-v-50",
      "lesson": 23,
      "de": "Das passt zu mir.",
      "plural": "",
      "fa": "این مناسب من است.",
      "example": "Die Arbeit im Team passt zu mir.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-01",
      "lesson": 24,
      "de": "das Ausland",
      "plural": "",
      "fa": "خارج از کشور",
      "example": "Ich möchte im Ausland arbeiten.",
      "article": "das",
      "noun": "Ausland"
    },
    {
      "id": "a22-24-v-02",
      "lesson": 24,
      "de": "der Aufenthalt",
      "plural": "Aufenthalte",
      "fa": "مدت اقامت",
      "example": "Mein Aufenthalt dauerte sechs Monate.",
      "article": "der",
      "noun": "Aufenthalt"
    },
    {
      "id": "a22-24-v-03",
      "lesson": 24,
      "de": "der Alltag",
      "plural": "",
      "fa": "زندگی روزمره",
      "example": "Mein Alltag begann früh.",
      "article": "der",
      "noun": "Alltag"
    },
    {
      "id": "a22-24-v-04",
      "lesson": 24,
      "de": "die Gastfamilie",
      "plural": "Gastfamilien",
      "fa": "خانوادهٔ میزبان",
      "example": "Ich wohnte bei einer Gastfamilie.",
      "article": "die",
      "noun": "Gastfamilie"
    },
    {
      "id": "a22-24-v-05",
      "lesson": 24,
      "de": "die Unterkunft",
      "plural": "Unterkünfte",
      "fa": "محل اقامت",
      "example": "Die Unterkunft war klein, aber gemütlich.",
      "article": "die",
      "noun": "Unterkunft"
    },
    {
      "id": "a22-24-v-06",
      "lesson": 24,
      "de": "das Heimweh",
      "plural": "",
      "fa": "دلتنگی وطن و خانه",
      "example": "Am Anfang hatte ich Heimweh.",
      "article": "das",
      "noun": "Heimweh"
    },
    {
      "id": "a22-24-v-07",
      "lesson": 24,
      "de": "die Heimat",
      "plural": "",
      "fa": "زادگاه؛ وطن",
      "example": "Nach einem Jahr kehrte ich in meine Heimat zurück.",
      "article": "die",
      "noun": "Heimat"
    },
    {
      "id": "a22-24-v-08",
      "lesson": 24,
      "de": "die Kultur",
      "plural": "Kulturen",
      "fa": "فرهنگ",
      "example": "Ich lernte eine andere Kultur kennen.",
      "article": "die",
      "noun": "Kultur"
    },
    {
      "id": "a22-24-v-09",
      "lesson": 24,
      "de": "die Gewohnheit",
      "plural": "Gewohnheiten",
      "fa": "عادت",
      "example": "Die Essgewohnheiten waren anders.",
      "article": "die",
      "noun": "Gewohnheit"
    },
    {
      "id": "a22-24-v-10",
      "lesson": 24,
      "de": "der Unterschied",
      "plural": "Unterschiede",
      "fa": "تفاوت",
      "example": "Es gab viele kleine Unterschiede.",
      "article": "der",
      "noun": "Unterschied"
    },
    {
      "id": "a22-24-v-11",
      "lesson": 24,
      "de": "die Erfahrung",
      "plural": "Erfahrungen",
      "fa": "تجربه",
      "example": "Die Reise war eine wichtige Erfahrung.",
      "article": "die",
      "noun": "Erfahrung"
    },
    {
      "id": "a22-24-v-12",
      "lesson": 24,
      "de": "die Erinnerung",
      "plural": "Erinnerungen",
      "fa": "خاطره",
      "example": "Ich habe schöne Erinnerungen an diese Zeit.",
      "article": "die",
      "noun": "Erinnerung"
    },
    {
      "id": "a22-24-v-13",
      "lesson": 24,
      "de": "die Herausforderung",
      "plural": "Herausforderungen",
      "fa": "چالش",
      "example": "Die Sprache war eine Herausforderung.",
      "article": "die",
      "noun": "Herausforderung"
    },
    {
      "id": "a22-24-v-14",
      "lesson": 24,
      "de": "die Gelegenheit",
      "plural": "Gelegenheiten",
      "fa": "فرصت",
      "example": "Ich nutzte jede Gelegenheit zum Sprechen.",
      "article": "die",
      "noun": "Gelegenheit"
    },
    {
      "id": "a22-24-v-15",
      "lesson": 24,
      "de": "die Rückkehr",
      "plural": "",
      "fa": "بازگشت",
      "example": "Nach meiner Rückkehr suchte ich eine Arbeit.",
      "article": "die",
      "noun": "Rückkehr"
    },
    {
      "id": "a22-24-v-16",
      "lesson": 24,
      "de": "die Ankunft",
      "plural": "Ankünfte",
      "fa": "رسیدن؛ ورود",
      "example": "Bei meiner Ankunft war ich sehr müde.",
      "article": "die",
      "noun": "Ankunft"
    },
    {
      "id": "a22-24-v-17",
      "lesson": 24,
      "de": "der Abschied",
      "plural": "Abschiede",
      "fa": "خداحافظی",
      "example": "Der Abschied fiel mir schwer.",
      "article": "der",
      "noun": "Abschied"
    },
    {
      "id": "a22-24-v-18",
      "lesson": 24,
      "de": "der Flughafen",
      "plural": "Flughäfen",
      "fa": "فرودگاه",
      "example": "Meine Familie wartete am Flughafen.",
      "article": "der",
      "noun": "Flughafen"
    },
    {
      "id": "a22-24-v-19",
      "lesson": 24,
      "de": "der Tagesablauf",
      "plural": "Tagesabläufe",
      "fa": "برنامهٔ روزانه",
      "example": "Mein Tagesablauf war gut organisiert.",
      "article": "der",
      "noun": "Tagesablauf"
    },
    {
      "id": "a22-24-v-20",
      "lesson": 24,
      "de": "die Freizeit",
      "plural": "",
      "fa": "اوقات فراغت",
      "example": "In meiner Freizeit besuchte ich Museen.",
      "article": "die",
      "noun": "Freizeit"
    },
    {
      "id": "a22-24-v-21",
      "lesson": 24,
      "de": "die Enttäuschung",
      "plural": "Enttäuschungen",
      "fa": "ناامیدی",
      "example": "Der erste Tag war eine Enttäuschung.",
      "article": "die",
      "noun": "Enttäuschung"
    },
    {
      "id": "a22-24-v-22",
      "lesson": 24,
      "de": "die Begeisterung",
      "plural": "",
      "fa": "اشتیاق؛ ذوق",
      "example": "Mit Begeisterung erzählte sie von der Reise.",
      "article": "die",
      "noun": "Begeisterung"
    },
    {
      "id": "a22-24-v-23",
      "lesson": 24,
      "de": "die Unterstützung",
      "plural": "Unterstützungen",
      "fa": "حمایت",
      "example": "Ich bekam viel Unterstützung.",
      "article": "die",
      "noun": "Unterstützung"
    },
    {
      "id": "a22-24-v-24",
      "lesson": 24,
      "de": "die Beziehung",
      "plural": "Beziehungen",
      "fa": "رابطه",
      "example": "Wir haben eine gute Beziehung.",
      "article": "die",
      "noun": "Beziehung"
    },
    {
      "id": "a22-24-v-25",
      "lesson": 24,
      "de": "der Kontakt",
      "plural": "Kontakte",
      "fa": "ارتباط",
      "example": "Wir bleiben auch heute in Kontakt.",
      "article": "der",
      "noun": "Kontakt"
    },
    {
      "id": "a22-24-v-26",
      "lesson": 24,
      "de": "ankommen",
      "plural": "",
      "fa": "رسیدن",
      "example": "Ich kam am Sonntag an.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-27",
      "lesson": 24,
      "de": "abholen",
      "plural": "",
      "fa": "دنبال کسی رفتن و آوردن",
      "example": "Meine Gastfamilie holte mich ab.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-28",
      "lesson": 24,
      "de": "aufstehen",
      "plural": "",
      "fa": "از خواب برخاستن",
      "example": "Ich stand jeden Morgen früh auf.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-29",
      "lesson": 24,
      "de": "beginnen",
      "plural": "",
      "fa": "شروع کردن یا شدن",
      "example": "Die Arbeit begann um acht Uhr.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-30",
      "lesson": 24,
      "de": "kennenlernen",
      "plural": "",
      "fa": "آشنا شدن با",
      "example": "Ich lernte viele Menschen kennen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-31",
      "lesson": 24,
      "de": "sich gewöhnen an",
      "plural": "",
      "fa": "عادت کردن به",
      "example": "Ich gewöhnte mich an das neue Leben.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-32",
      "lesson": 24,
      "de": "vermissen",
      "plural": "",
      "fa": "دلتنگ کسی یا چیزی بودن",
      "example": "Ich vermisste meine Freunde.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-33",
      "lesson": 24,
      "de": "erleben",
      "plural": "",
      "fa": "تجربه کردن",
      "example": "Wir erlebten viel zusammen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-34",
      "lesson": 24,
      "de": "helfen",
      "plural": "",
      "fa": "کمک کردن",
      "example": "Die Kollegen halfen mir.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-35",
      "lesson": 24,
      "de": "bleiben",
      "plural": "",
      "fa": "ماندن",
      "example": "Ich blieb sechs Monate.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-36",
      "lesson": 24,
      "de": "zurückkehren",
      "plural": "",
      "fa": "بازگشتن",
      "example": "Im Herbst kehrte ich zurück.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-37",
      "lesson": 24,
      "de": "berichten",
      "plural": "",
      "fa": "گزارش و تعریف کردن",
      "example": "Ich berichtete von meinen Erfahrungen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-38",
      "lesson": 24,
      "de": "erzählen",
      "plural": "",
      "fa": "روایت کردن",
      "example": "Sie erzählte uns von ihrem Alltag.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-39",
      "lesson": 24,
      "de": "hoffen",
      "plural": "",
      "fa": "امید داشتن",
      "example": "Ich hoffte auf ein Wiedersehen.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-40",
      "lesson": 24,
      "de": "sich freuen",
      "plural": "",
      "fa": "خوشحال بودن یا شدن",
      "example": "Wir freuten uns auf die Rückkehr.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-41",
      "lesson": 24,
      "de": "begeistert",
      "plural": "",
      "fa": "ذوق‌زده",
      "example": "Ich war von der Stadt begeistert.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-42",
      "lesson": 24,
      "de": "enttäuscht",
      "plural": "",
      "fa": "ناامید",
      "example": "Zuerst war ich etwas enttäuscht.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-43",
      "lesson": 24,
      "de": "überrascht",
      "plural": "",
      "fa": "متعجب",
      "example": "Über die Hilfe war ich überrascht.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-44",
      "lesson": 24,
      "de": "ungewohnt",
      "plural": "",
      "fa": "ناآشنا؛ غیرمعمول",
      "example": "Das Essen war für mich ungewohnt.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-45",
      "lesson": 24,
      "de": "selbstständig",
      "plural": "",
      "fa": "مستقل",
      "example": "Im Ausland wurde ich selbstständiger.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-46",
      "lesson": 24,
      "de": "plötzlich",
      "plural": "",
      "fa": "ناگهان",
      "example": "Plötzlich verstand ich das Gespräch.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-47",
      "lesson": 24,
      "de": "schließlich",
      "plural": "",
      "fa": "سرانجام",
      "example": "Schließlich fühlte ich mich zu Hause.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-48",
      "lesson": 24,
      "de": "am Anfang",
      "plural": "",
      "fa": "در ابتدا",
      "example": "Am Anfang war alles neu.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-49",
      "lesson": 24,
      "de": "mit der Zeit",
      "plural": "",
      "fa": "با گذشت زمان",
      "example": "Mit der Zeit wurde es leichter.",
      "article": "",
      "noun": ""
    },
    {
      "id": "a22-24-v-50",
      "lesson": 24,
      "de": "in Kontakt bleiben",
      "plural": "",
      "fa": "در تماس ماندن",
      "example": "Wir wollen in Kontakt bleiben.",
      "article": "",
      "noun": ""
    }
  ],
  "verbs": [
    {
      "id": "a22-13-verb-lernen",
      "lesson": 13,
      "de": "lernen",
      "fa": "یاد گرفتن",
      "forms": [
        "lerne",
        "lernst",
        "lernt",
        "lernen",
        "lernt",
        "lernen"
      ],
      "perfekt": "hat gelernt"
    },
    {
      "id": "a22-13-verb-sprechen",
      "lesson": 13,
      "de": "sprechen",
      "fa": "صحبت کردن",
      "forms": [
        "spreche",
        "sprichst",
        "spricht",
        "sprechen",
        "sprecht",
        "sprechen"
      ],
      "perfekt": "hat gesprochen"
    },
    {
      "id": "a22-13-verb-verstehen",
      "lesson": 13,
      "de": "verstehen",
      "fa": "فهمیدن",
      "forms": [
        "verstehe",
        "verstehst",
        "versteht",
        "verstehen",
        "versteht",
        "verstehen"
      ],
      "perfekt": "hat verstanden"
    },
    {
      "id": "a22-13-verb-anfangen",
      "lesson": 13,
      "de": "anfangen",
      "fa": "شروع کردن",
      "forms": [
        "fange an",
        "fängst an",
        "fängt an",
        "fangen an",
        "fangt an",
        "fangen an"
      ],
      "perfekt": "hat angefangen"
    },
    {
      "id": "a22-17-verb-fahren",
      "lesson": 17,
      "de": "fahren",
      "fa": "رفتن با وسیلهٔ نقلیه",
      "forms": [
        "fahre",
        "fährst",
        "fährt",
        "fahren",
        "fahrt",
        "fahren"
      ],
      "perfekt": "ist gefahren"
    },
    {
      "id": "a22-17-verb-fliegen",
      "lesson": 17,
      "de": "fliegen",
      "fa": "پرواز کردن",
      "forms": [
        "fliege",
        "fliegst",
        "fliegt",
        "fliegen",
        "fliegt",
        "fliegen"
      ],
      "perfekt": "ist geflogen"
    },
    {
      "id": "a22-17-verb-umsteigen",
      "lesson": 17,
      "de": "umsteigen",
      "fa": "عوض کردن وسیلهٔ نقلیه",
      "forms": [
        "steige um",
        "steigst um",
        "steigt um",
        "steigen um",
        "steigt um",
        "steigen um"
      ],
      "perfekt": "ist umgestiegen"
    },
    {
      "id": "a22-17-verb-mitnehmen",
      "lesson": 17,
      "de": "mitnehmen",
      "fa": "همراه بردن",
      "forms": [
        "nehme mit",
        "nimmst mit",
        "nimmt mit",
        "nehmen mit",
        "nehmt mit",
        "nehmen mit"
      ],
      "perfekt": "hat mitgenommen"
    },
    {
      "id": "a22-18-verb-warten",
      "lesson": 18,
      "de": "warten",
      "fa": "منتظر ماندن",
      "forms": [
        "warte",
        "wartest",
        "wartet",
        "warten",
        "wartet",
        "warten"
      ],
      "perfekt": "hat gewartet"
    },
    {
      "id": "a22-18-verb-freuen",
      "lesson": 18,
      "de": "sich freuen",
      "fa": "خوشحال شدن",
      "forms": [
        "freue mich",
        "freust dich",
        "freut sich",
        "freuen uns",
        "freut euch",
        "freuen sich"
      ],
      "perfekt": "hat sich gefreut"
    },
    {
      "id": "a22-18-verb-interessieren",
      "lesson": 18,
      "de": "sich interessieren",
      "fa": "علاقه‌مند بودن",
      "forms": [
        "interessiere mich",
        "interessierst dich",
        "interessiert sich",
        "interessieren uns",
        "interessiert euch",
        "interessieren sich"
      ],
      "perfekt": "hat sich interessiert"
    },
    {
      "id": "a22-18-verb-sprechen",
      "lesson": 18,
      "de": "sprechen",
      "fa": "صحبت کردن",
      "forms": [
        "spreche",
        "sprichst",
        "spricht",
        "sprechen",
        "sprecht",
        "sprechen"
      ],
      "perfekt": "hat gesprochen"
    },
    {
      "id": "a22-19-verb-vorschlagen",
      "lesson": 19,
      "de": "vorschlagen",
      "fa": "پیشنهاد دادن",
      "forms": [
        "schlage vor",
        "schlägst vor",
        "schlägt vor",
        "schlagen vor",
        "schlagt vor",
        "schlagen vor"
      ],
      "perfekt": "hat vorgeschlagen"
    },
    {
      "id": "a22-19-verb-besuchen",
      "lesson": 19,
      "de": "besuchen",
      "fa": "بازدید یا شرکت کردن",
      "forms": [
        "besuche",
        "besuchst",
        "besucht",
        "besuchen",
        "besucht",
        "besuchen"
      ],
      "perfekt": "hat besucht"
    },
    {
      "id": "a22-19-verb-empfehlen",
      "lesson": 19,
      "de": "empfehlen",
      "fa": "توصیه کردن",
      "forms": [
        "empfehle",
        "empfiehlst",
        "empfiehlt",
        "empfehlen",
        "empfehlt",
        "empfehlen"
      ],
      "perfekt": "hat empfohlen"
    },
    {
      "id": "a22-19-verb-zurueckkommen",
      "lesson": 19,
      "de": "zurückkommen",
      "fa": "برگشتن",
      "forms": [
        "komme zurück",
        "kommst zurück",
        "kommt zurück",
        "kommen zurück",
        "kommt zurück",
        "kommen zurück"
      ],
      "perfekt": "ist zurückgekommen"
    },
    {
      "id": "a22-20-verb-duerfen",
      "lesson": 20,
      "de": "dürfen",
      "fa": "اجازه داشتن",
      "forms": [
        "darf",
        "darfst",
        "darf",
        "dürfen",
        "dürft",
        "dürfen"
      ],
      "perfekt": "",
      "past": [
        "durfte",
        "durftest",
        "durfte",
        "durften",
        "durftet",
        "durften"
      ]
    },
    {
      "id": "a22-20-verb-koennen",
      "lesson": 20,
      "de": "können",
      "fa": "توانستن",
      "forms": [
        "kann",
        "kannst",
        "kann",
        "können",
        "könnt",
        "können"
      ],
      "perfekt": "",
      "past": [
        "konnte",
        "konntest",
        "konnte",
        "konnten",
        "konntet",
        "konnten"
      ]
    },
    {
      "id": "a22-20-verb-muessen",
      "lesson": 20,
      "de": "müssen",
      "fa": "مجبور بودن",
      "forms": [
        "muss",
        "musst",
        "muss",
        "müssen",
        "müsst",
        "müssen"
      ],
      "perfekt": "",
      "past": [
        "musste",
        "musstest",
        "musste",
        "mussten",
        "musstet",
        "mussten"
      ]
    },
    {
      "id": "a22-20-verb-sollen",
      "lesson": 20,
      "de": "sollen",
      "fa": "باید طبق دستور",
      "forms": [
        "soll",
        "sollst",
        "soll",
        "sollen",
        "sollt",
        "sollen"
      ],
      "perfekt": "",
      "past": [
        "sollte",
        "solltest",
        "sollte",
        "sollten",
        "solltet",
        "sollten"
      ]
    },
    {
      "id": "a22-20-verb-wollen",
      "lesson": 20,
      "de": "wollen",
      "fa": "خواستن",
      "forms": [
        "will",
        "willst",
        "will",
        "wollen",
        "wollt",
        "wollen"
      ],
      "perfekt": "",
      "past": [
        "wollte",
        "wolltest",
        "wollte",
        "wollten",
        "wolltet",
        "wollten"
      ]
    },
    {
      "id": "a22-20-verb-moegen",
      "lesson": 20,
      "de": "mögen",
      "fa": "دوست داشتن",
      "forms": [
        "mag",
        "magst",
        "mag",
        "mögen",
        "mögt",
        "mögen"
      ],
      "perfekt": "",
      "past": [
        "mochte",
        "mochtest",
        "mochte",
        "mochten",
        "mochtet",
        "mochten"
      ]
    },
    {
      "id": "a22-21-verb-lassen",
      "lesson": 21,
      "de": "lassen",
      "fa": "سپردن کار؛ گذاشتن",
      "forms": [
        "lasse",
        "lässt",
        "lässt",
        "lassen",
        "lasst",
        "lassen"
      ],
      "perfekt": ""
    },
    {
      "id": "a22-21-verb-verlieren",
      "lesson": 21,
      "de": "verlieren",
      "fa": "گم کردن",
      "forms": [
        "verliere",
        "verlierst",
        "verliert",
        "verlieren",
        "verliert",
        "verlieren"
      ],
      "perfekt": "hat verloren"
    },
    {
      "id": "a22-21-verb-stehlen",
      "lesson": 21,
      "de": "stehlen",
      "fa": "دزدیدن",
      "forms": [
        "stehle",
        "stiehlst",
        "stiehlt",
        "stehlen",
        "stehlt",
        "stehlen"
      ],
      "perfekt": "hat gestohlen"
    },
    {
      "id": "a22-21-verb-ausfuellen",
      "lesson": 21,
      "de": "ausfüllen",
      "fa": "پر کردن فرم",
      "forms": [
        "fülle aus",
        "füllst aus",
        "füllt aus",
        "füllen aus",
        "füllt aus",
        "füllen aus"
      ],
      "perfekt": "hat ausgefüllt"
    },
    {
      "id": "a22-22-verb-anmelden",
      "lesson": 22,
      "de": "sich anmelden",
      "fa": "ثبت‌نام؛ ورود به حساب",
      "forms": [
        "melde mich an",
        "meldest dich an",
        "meldet sich an",
        "melden uns an",
        "meldet euch an",
        "melden sich an"
      ],
      "perfekt": "hat sich angemeldet"
    },
    {
      "id": "a22-22-verb-eingeben",
      "lesson": 22,
      "de": "eingeben",
      "fa": "وارد کردن داده",
      "forms": [
        "gebe ein",
        "gibst ein",
        "gibt ein",
        "geben ein",
        "gebt ein",
        "geben ein"
      ],
      "perfekt": "hat eingegeben"
    },
    {
      "id": "a22-22-verb-speichern",
      "lesson": 22,
      "de": "speichern",
      "fa": "ذخیره کردن",
      "forms": [
        "speichere",
        "speicherst",
        "speichert",
        "speichern",
        "speichert",
        "speichern"
      ],
      "perfekt": "hat gespeichert"
    },
    {
      "id": "a22-22-verb-verkaufen",
      "lesson": 22,
      "de": "verkaufen",
      "fa": "فروختن",
      "forms": [
        "verkaufe",
        "verkaufst",
        "verkauft",
        "verkaufen",
        "verkauft",
        "verkaufen"
      ],
      "perfekt": "hat verkauft"
    },
    {
      "id": "a22-23-verb-bewerben",
      "lesson": 23,
      "de": "sich bewerben",
      "fa": "درخواست استخدام دادن",
      "forms": [
        "bewerbe mich",
        "bewirbst dich",
        "bewirbt sich",
        "bewerben uns",
        "bewerbt euch",
        "bewerben sich"
      ],
      "perfekt": "hat sich beworben"
    },
    {
      "id": "a22-23-verb-beraten",
      "lesson": 23,
      "de": "beraten",
      "fa": "مشاوره دادن",
      "forms": [
        "berate",
        "berätst",
        "berät",
        "beraten",
        "beratet",
        "beraten"
      ],
      "perfekt": "hat beraten"
    },
    {
      "id": "a22-23-verb-verdienen",
      "lesson": 23,
      "de": "verdienen",
      "fa": "درآمد داشتن",
      "forms": [
        "verdiene",
        "verdienst",
        "verdient",
        "verdienen",
        "verdient",
        "verdienen"
      ],
      "perfekt": "hat verdient"
    },
    {
      "id": "a22-23-verb-uebernehmen",
      "lesson": 23,
      "de": "übernehmen",
      "fa": "برعهده گرفتن",
      "forms": [
        "übernehme",
        "übernimmst",
        "übernimmt",
        "übernehmen",
        "übernehmt",
        "übernehmen"
      ],
      "perfekt": "hat übernommen"
    },
    {
      "id": "a22-24-verb-kommen",
      "lesson": 24,
      "de": "kommen",
      "fa": "آمدن",
      "forms": [
        "komme",
        "kommst",
        "kommt",
        "kommen",
        "kommt",
        "kommen"
      ],
      "perfekt": "ist gekommen",
      "past": [
        "kam",
        "kamst",
        "kam",
        "kamen",
        "kamt",
        "kamen"
      ]
    },
    {
      "id": "a22-24-verb-gehen",
      "lesson": 24,
      "de": "gehen",
      "fa": "رفتن",
      "forms": [
        "gehe",
        "gehst",
        "geht",
        "gehen",
        "geht",
        "gehen"
      ],
      "perfekt": "ist gegangen",
      "past": [
        "ging",
        "gingst",
        "ging",
        "gingen",
        "gingt",
        "gingen"
      ]
    },
    {
      "id": "a22-24-verb-sehen",
      "lesson": 24,
      "de": "sehen",
      "fa": "دیدن",
      "forms": [
        "sehe",
        "siehst",
        "sieht",
        "sehen",
        "seht",
        "sehen"
      ],
      "perfekt": "hat gesehen",
      "past": [
        "sah",
        "sahst",
        "sah",
        "sahen",
        "saht",
        "sahen"
      ]
    },
    {
      "id": "a22-24-verb-finden",
      "lesson": 24,
      "de": "finden",
      "fa": "پیدا کردن",
      "forms": [
        "finde",
        "findest",
        "findet",
        "finden",
        "findet",
        "finden"
      ],
      "perfekt": "hat gefunden",
      "past": [
        "fand",
        "fandest",
        "fand",
        "fanden",
        "fandet",
        "fanden"
      ]
    },
    {
      "id": "a22-24-verb-bringen",
      "lesson": 24,
      "de": "bringen",
      "fa": "آوردن",
      "forms": [
        "bringe",
        "bringst",
        "bringt",
        "bringen",
        "bringt",
        "bringen"
      ],
      "perfekt": "hat gebracht",
      "past": [
        "brachte",
        "brachtest",
        "brachte",
        "brachten",
        "brachtet",
        "brachten"
      ]
    },
    {
      "id": "a22-24-verb-sagen",
      "lesson": 24,
      "de": "sagen",
      "fa": "گفتن",
      "forms": [
        "sage",
        "sagst",
        "sagt",
        "sagen",
        "sagt",
        "sagen"
      ],
      "perfekt": "hat gesagt",
      "past": [
        "sagte",
        "sagtest",
        "sagte",
        "sagten",
        "sagtet",
        "sagten"
      ]
    }
  ],
  "passages": [
    {
      "id": "a22-13-r1",
      "lesson": 13,
      "title": "اولین کلاس زبان",
      "text": "Als Laleh 2021 nach Bonn zog, konnte sie nur wenige Wörter Deutsch. Sie besuchte an drei Abenden pro Woche einen Sprachkurs. Ihre Lehrerin benutzte oft Bilder. Zu Hause schrieb Laleh neue Wörter auf Karteikarten. Jeden Samstag übte sie mit ihrem Nachbarn. Nach sechs Monaten konnte sie selbst einen Termin am Telefon vereinbaren. Besonders stolz war sie auf dieses Gespräch."
    },
    {
      "id": "a22-13-r2",
      "lesson": 13,
      "title": "یک برنامهٔ یادگیری",
      "text": "Jonas lernt seit vier Monaten Persisch. Er hört morgens im Bus einen kurzen Dialog. Abends wiederholt er zehn Wörter und schreibt drei Sätze. Früher lernte er lange Wortlisten, aber er vergaß vieles schnell. Jetzt benutzt er Bilder und Beispiele. Wenn er ein Wort nicht versteht, schlägt er es nach. Am Sonntag spricht er zwanzig Minuten mit einem Lernpartner."
    },
    {
      "id": "a22-17-r1",
      "lesson": 17,
      "title": "سفر با قطار و کشتی",
      "text": "Nora und Ben fahren im Juli auf eine Insel. Zuerst nehmen sie den Zug nach Hamburg. Dort bleiben sie eine Nacht. Am nächsten Morgen fahren sie mit dem Bus zum Hafen und nehmen eine Fähre. Ihre Unterkunft liegt direkt am Strand. Sie wollen schwimmen und lesen. Ein Auto nehmen sie nicht mit. Für die Reise packt jeder nur einen Rucksack."
    },
    {
      "id": "a22-17-r2",
      "lesson": 17,
      "title": "تعطیلات کوهستان",
      "text": "Unsere Familie fährt dieses Jahr in die Schweiz. Wir wohnen eine Woche in einer Ferienwohnung in den Bergen. Jeden Morgen wandern wir, aber am Nachmittag bleiben wir manchmal am See. Unsere Tochter möchte gern auf einen hohen Berg steigen. Bei schlechtem Wetter besuchen wir ein Museum. Wir reisen mit dem Zug, weil wir unterwegs lesen und uns entspannen möchten."
    },
    {
      "id": "a22-18-r1",
      "lesson": 18,
      "title": "گزارش هوا برای آخر هفته",
      "text": "Am Samstag bleibt es im Norden bewölkt und windig. Die Temperaturen steigen dort auf zwölf Grad. Im Süden scheint zunächst die Sonne. Am Nachmittag sind dort Gewitter möglich. Am Sonntag regnet es in vielen Regionen. In den Bergen kann es schneien. Wer draußen unterwegs ist, sollte eine warme Jacke und einen Regenschirm mitnehmen."
    },
    {
      "id": "a22-18-r2",
      "lesson": 18,
      "title": "گفت‌وگو دربارهٔ سفر",
      "text": "Mina freut sich auf ihren Urlaub am Meer. Sie interessiert sich für den Wetterbericht, weil sie viel schwimmen möchte. Ihr Bruder freut sich dagegen über jedes Gewitter. Er fotografiert gern Wolken. Mina ärgert sich manchmal über ihn, aber beide träumen von einer Reise nach Norwegen. Darüber sprechen sie oft. Diesen Sommer bleiben sie jedoch in Deutschland."
    },
    {
      "id": "a22-19-r1",
      "lesson": 19,
      "title": "یک عصر فرهنگی",
      "text": "Am Freitag gibt es im Stadtmuseum eine kostenlose Führung um 18 Uhr. Danach findet im Garten eine Lesung statt. Die Lesung kostet fünf Euro. Mina möchte beides besuchen. Paul kommt erst um 19 Uhr von der Arbeit und trifft sie vor dem Museum. Für das Konzert am Samstag gibt es leider keine Karten mehr. Deshalb entscheiden sich beide für einen Kinobesuch am Samstagabend."
    },
    {
      "id": "a22-19-r2",
      "lesson": 19,
      "title": "بعد از نمایشگاه",
      "text": "Sara kommt gerade aus einer Galerie. Dort hat sie eine Ausstellung über Fotografie besucht. Sie ist begeistert von den Bildern. Ihr Freund Amir kommt vom Sport und möchte zuerst etwas essen. Sara schlägt ein Café neben der Galerie vor. Danach könnten sie eine Lesung besuchen. Amir ist noch nicht sicher, denn er muss morgen früh aufstehen. Sie wollen beim Essen weiter darüber sprechen."
    },
    {
      "id": "a22-20-r1",
      "lesson": 20,
      "title": "مطالعه در کودکی",
      "text": "Als Kind durfte Emil unter der Woche nur eine halbe Stunde fernsehen. Bücher konnte er dagegen so lange lesen, wie er wollte. Seine Schwester mochte Comics, aber Emil las lieber Abenteuergeschichten. Jeden Mittwoch gingen beide in die Bibliothek. Mit zwölf musste Emil seiner kleinen Schwester oft vorlesen. Das machte ihm Spaß, obwohl er manchmal lieber draußen spielen wollte."
    },
    {
      "id": "a22-20-r2",
      "lesson": 20,
      "title": "قانون کتابخانهٔ داستانی",
      "text": "In der kleinen Stadtbibliothek dürfen Mitglieder bis zu sechs Bücher ausleihen. Die Leihfrist beträgt vier Wochen. Wer mehr Zeit braucht, kann die Frist online verlängern. Zeitschriften dürfen nur zwei Wochen mitgenommen werden. Früher musste man für jede Verlängerung in die Bibliothek kommen. Seit einem Jahr geht das online. Am Montag ist die Bibliothek geschlossen."
    },
    {
      "id": "a22-21-r1",
      "lesson": 21,
      "title": "کیف گم‌شده",
      "text": "Amir hat gestern im Bus seine Tasche verloren. Sie ist dunkelblau und hat zwei kleine Außentaschen. In der Tasche waren sein Ausweis, ein Buch und ein rotes Notizheft. Im Fundbüro zeigt eine Mitarbeiterin ihm drei Taschen. Amir erkennt seine Tasche sofort: Es ist die mit dem grauen Griff. Sein Ausweis ist noch darin. Die Mitarbeiterin bittet ihn um eine Unterschrift."
    },
    {
      "id": "a22-21-r2",
      "lesson": 21,
      "title": "آماده کردن مدارک",
      "text": "Nora braucht für eine Bewerbung eine Kopie ihres Zeugnisses und einen unterschriebenen Lebenslauf. Sie lässt das Zeugnis im Kopierladen kopieren. Zu Hause kontrolliert sie alle Unterlagen. Auf einem Formular fehlt noch das Datum. Ihr Bruder fragt, welches Formular sie meint. Nora zeigt auf das grüne Blatt. Am Abend schickt sie die vollständige Bewerbung ab."
    },
    {
      "id": "a22-22-r1",
      "lesson": 22,
      "title": "ثبت‌نام برای دوچرخهٔ اشتراکی",
      "text": "Für den fiktiven Fahrradservice RadZeit öffnet man zuerst die App und registriert sich mit einer E-Mail-Adresse. Danach kommt eine Nachricht mit einem Link. Man wartet, bis die Nachricht angekommen ist, und bestätigt die Adresse. Anschließend wählt man eine Station und ein Fahrrad aus. Nach der Fahrt muss das Fahrrad wieder an einer Station stehen. Die App zeigt dann das Ende der Nutzung an."
    },
    {
      "id": "a22-22-r2",
      "lesson": 22,
      "title": "از وقتی خودرو را فروختم",
      "text": "Seit Lea ihren Wagen verkauft hat, fährt sie meistens mit dem Fahrrad zur Arbeit. Die Strecke dauert zwanzig Minuten. Bei starkem Regen nimmt sie den Bus. Früher suchte sie jeden Morgen lange einen Parkplatz. Jetzt spart sie Zeit und Geld. Für größere Einkäufe nutzt sie manchmal Carsharing. Sie wartet mit der Buchung, bis sie genau weiß, wann sie das Auto braucht."
    },
    {
      "id": "a22-23-r1",
      "lesson": 23,
      "title": "کارآموزی مینا",
      "text": "Mina macht eine Ausbildung in einer Fahrradwerkstatt. Der Chef, der den Betrieb leitet, erklärt ihr jeden Morgen die Aufgaben. Besonders mag sie Arbeiten, die sie selbstständig machen kann. Zweimal pro Woche besucht sie die Berufsschule. Die Kollegin, die Mina oft um Rat fragt, ist sehr geduldig. Mina ist mit ihrer Ausbildung zufrieden, aber sie möchte später auch Kunden beraten."
    },
    {
      "id": "a22-23-r2",
      "lesson": 23,
      "title": "در جست‌وجوی شغل مناسب",
      "text": "Omid sucht einen Beruf, der zu seinen Stärken passt. Er ist geduldig und arbeitet gern mit Menschen. In einem Praktikum in einem Pflegeheim lernte er viele Aufgaben kennen. Besonders gefiel ihm der Kontakt mit den Bewohnern. Jetzt schreibt er Bewerbungen. Einen Betrieb, den er gut mit dem Bus erreichen kann, findet er besonders interessant. Nächste Woche hat er ein Vorstellungsgespräch."
    },
    {
      "id": "a22-24-r1",
      "lesson": 24,
      "title": "شش ماه در وین",
      "text": "Als Sara in Wien ankam, holte ihre Gastfamilie sie am Bahnhof ab. Sie blieb sechs Monate und arbeitete in einem kleinen Hotel. Jeden Morgen stand sie um sechs auf. Am Anfang verstand sie ihre Kollegen nicht immer. Sie halfen ihr geduldig und erklärten neue Wörter. Nach einigen Wochen wurde sie sicherer. In ihrer Freizeit besuchte sie Museen und lernte die Stadt kennen."
    },
    {
      "id": "a22-24-r2",
      "lesson": 24,
      "title": "نامه پس از بازگشت",
      "text": "Lieber Ben, seit meiner Rückkehr denke ich oft an unsere Zeit zusammen. Anfangs hatte ich großes Heimweh. Du zeigtest mir die Stadt und stelltest mich deinen Freunden vor. Das half mir sehr. Später fand ich eine kleine Wohnung und gewöhnte mich an den Alltag. Der Abschied fiel mir schwer. Ich hoffe, dass wir in Kontakt bleiben. Vielleicht besuchst du mich im Sommer. Liebe Grüße, Amir"
    }
  ],
  "exercises": [
    {
      "id": "a22-13-g01",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "___ ich gestern zu Hause ankam, klingelte das Telefon.",
      "answers": [
        "Als"
      ],
      "why": "یک اتفاق مشخص دیروز: als.",
      "options": [
        "Als",
        "Wenn"
      ]
    },
    {
      "id": "a22-13-g02",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "Immer ___ ich früher ein neues Wort hörte, schrieb ich es auf.",
      "answers": [
        "wenn"
      ],
      "why": "immer و تکرار در گذشته: wenn.",
      "options": [
        "als",
        "wenn"
      ]
    },
    {
      "id": "a22-13-g03",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "___ ich sechs Jahre alt war, begann die Schule.",
      "answers": [
        "Als"
      ],
      "why": "یک دورهٔ مشخص در گذشته: als.",
      "options": [
        "Als",
        "Wenn"
      ]
    },
    {
      "id": "a22-13-g04",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "___ ich morgen Zeit habe, wiederhole ich die Wörter.",
      "answers": [
        "Wenn"
      ],
      "why": "شرط آینده را با wenn بیان می‌کنیم.",
      "options": [
        "Als",
        "Wenn"
      ]
    },
    {
      "id": "a22-13-g05",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "Jedes Mal, ___ der Lehrer eine Frage stellte, meldete sich Nora.",
      "answers": [
        "wenn"
      ],
      "why": "jedes Mal نشان‌دهندهٔ تکرار است.",
      "options": [
        "als",
        "wenn"
      ]
    },
    {
      "id": "a22-13-g06",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "___ ich 2022 nach Wien zog, kannte ich niemanden.",
      "answers": [
        "Als"
      ],
      "why": "اسباب‌کشی مشخص در ۲۰۲۲ یک‌باره است.",
      "options": [
        "Als",
        "Wenn"
      ]
    },
    {
      "id": "a22-13-g07",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "___ wir damals in Berlin wohnten, besuchten wir einen Kurs.",
      "answers": [
        "Als"
      ],
      "why": "یک دورهٔ مشخص زندگی گذشته با als می‌آید.",
      "options": [
        "Als",
        "Wenn"
      ]
    },
    {
      "id": "a22-13-g08",
      "lesson": 13,
      "mode": "grammar",
      "topic": "als یا wenn",
      "prompt": "als یا wenn را انتخاب کن.",
      "text": "___ ich etwas nicht verstehe, frage ich nach.",
      "answers": [
        "Wenn"
      ],
      "why": "این عادت هر بار تکرار می‌شود.",
      "options": [
        "Als",
        "Wenn"
      ]
    },
    {
      "id": "a22-13-g09",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / ich / zehn / war — lernte / ich / Englisch",
      "answers": [
        "Als ich zehn war, lernte ich Englisch."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g10",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / der Kurs / begann — war / ich / nervös",
      "answers": [
        "Als der Kurs begann, war ich nervös."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g11",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / ich / in Bonn / wohnte — besuchte / ich / einen Sprachkurs",
      "answers": [
        "Als ich in Bonn wohnte, besuchte ich einen Sprachkurs."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g12",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / sie / die Prüfung / bestand — freute / sie / sich",
      "answers": [
        "Als sie die Prüfung bestand, freute sie sich."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g13",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / wir / in Wien / ankamen — regnete / es",
      "answers": [
        "Als wir in Wien ankamen, regnete es."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g14",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / er / das Wort / hörte — schrieb / er / es / auf",
      "answers": [
        "Als er das Wort hörte, schrieb er es auf."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g15",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / ich / nach Hause / kam — machte / ich / die Übungen",
      "answers": [
        "Als ich nach Hause kam, machte ich die Übungen."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g16",
      "lesson": 13,
      "mode": "grammar",
      "topic": "جمله با als",
      "prompt": "با Als شروع کن و واژه‌ها را به همان ترتیب دو بخش مرتب کن.",
      "text": "als / der Unterricht / zu Ende / war — gingen / wir / ins Café",
      "answers": [
        "Als der Unterricht zu Ende war, gingen wir ins Café."
      ],
      "why": "فعل بخش als آخر است؛ پس از ویرگول فعل جملهٔ اصلی قبل از فاعل می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-13-g17",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Als ich klein ___, lernte ich mit Bildern. (sein)",
      "answers": [
        "war"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g18",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Als du in Wien ___, hast du einen Kurs besucht. (wohnen، گذشتهٔ ساده)",
      "answers": [
        "wohntest"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g19",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Als wir im Kurs ___, hörten wir viel Deutsch. (sein)",
      "answers": [
        "waren"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g20",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Damals ___ ich kein Wörterbuch. (haben، گذشتهٔ ساده)",
      "answers": [
        "hatte"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g21",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Als der Kurs begonnen ___, waren alle nervös. (Perfekt: haben)",
      "answers": [
        "hat"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g22",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Als wir die Prüfung bestanden ___, feierten wir. (Perfekt: haben)",
      "answers": [
        "haben"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g23",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Als ihr neu im Kurs ___, habt ihr euch vorgestellt. (sein، گذشتهٔ ساده)",
      "answers": [
        "wart"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g24",
      "lesson": 13,
      "mode": "grammar",
      "topic": "فعل در روایت گذشته",
      "prompt": "صورت مناسب فعل داخل پرانتز را بنویس.",
      "text": "Als sie zum ersten Mal Deutsch sprach, ___ sie nervös. (sein)",
      "answers": [
        "war"
      ],
      "why": "فاعل و زمان خواسته‌شده را بررسی کن؛ فعل صرف‌شده در بخش als در پایان قرار می‌گیرد."
    },
    {
      "id": "a22-13-g25",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich erinnere mich ___ meinen ersten Sprachkurs.",
      "answers": [
        "an"
      ],
      "why": "sich erinnern an + Akkusativ."
    },
    {
      "id": "a22-13-g26",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich lerne neue Wörter ___ Karteikarten.",
      "answers": [
        "mit"
      ],
      "why": "وسیلهٔ یادگیری: mit + Dativ."
    },
    {
      "id": "a22-13-g27",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Bitte hör genau ___. (zuhören)",
      "answers": [
        "zu"
      ],
      "why": "zuhören جداشدنی است."
    },
    {
      "id": "a22-13-g28",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich schlage das Wort im Wörterbuch ___. (nachschlagen)",
      "answers": [
        "nach"
      ],
      "why": "nachschlagen جداشدنی است."
    },
    {
      "id": "a22-13-g29",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Die Lehrerin erklärt ___ die Regel. (ich)",
      "answers": [
        "mir"
      ],
      "why": "شخص دریافت‌کنندهٔ توضیح داتیو است."
    },
    {
      "id": "a22-13-g30",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Seit einem Jahr ___ ich Deutsch. (lernen)",
      "answers": [
        "lerne"
      ],
      "why": "وضعیتی که از گذشته تا حال ادامه دارد، اینجا با Präsens می‌آید."
    },
    {
      "id": "a22-13-g31",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich möchte ___ Aussprache verbessern. (meine)",
      "answers": [
        "meine"
      ],
      "why": "Aussprache مؤنث و مفعول مستقیم است."
    },
    {
      "id": "a22-13-g32",
      "lesson": 13,
      "mode": "grammar",
      "topic": "روش یادگیری و مرور",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich habe die Prüfung ___. (bestehen)",
      "answers": [
        "bestanden"
      ],
      "why": "Partizip II فعل bestehen برابر با bestanden است."
    },
    {
      "id": "a22-17-g01",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Wir reisen nächsten Monat ___ Rumänien.",
      "answers": [
        "nach"
      ],
      "why": "نام کشور بدون آرتیکل: nach."
    },
    {
      "id": "a22-17-g02",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Unsere Freunde wohnen ___ Rumänien.",
      "answers": [
        "in"
      ],
      "why": "حضور در کشور بدون آرتیکل: in."
    },
    {
      "id": "a22-17-g03",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Morgen fahren wir ___ Schweiz.",
      "answers": [
        "in die"
      ],
      "why": "مقصدِ کشور دارای آرتیکل: in die Schweiz."
    },
    {
      "id": "a22-17-g04",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Das Hotel liegt ___ Schweiz.",
      "answers": [
        "in der"
      ],
      "why": "محل ثابت در کشور مؤنث: in der Schweiz."
    },
    {
      "id": "a22-17-g05",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Im Sommer fahren wir ___ Meer.",
      "answers": [
        "ans",
        "an das"
      ],
      "why": "مقصد کنار دریا: ans Meer."
    },
    {
      "id": "a22-17-g06",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Wir übernachten ___ Meer.",
      "answers": [
        "am",
        "an dem"
      ],
      "why": "محل کنار دریا: am Meer."
    },
    {
      "id": "a22-17-g07",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Am Samstag fahren wir ___ Berge.",
      "answers": [
        "in die"
      ],
      "why": "مقصد ناحیهٔ کوهستانی: in die Berge."
    },
    {
      "id": "a22-17-g08",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Die Hütte liegt ___ Bergen.",
      "answers": [
        "in den"
      ],
      "why": "محل جمع با داتیو: in den Bergen."
    },
    {
      "id": "a22-17-g09",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Wir fahren mit der Fähre ___ Insel. (eine)",
      "answers": [
        "auf eine"
      ],
      "why": "مقصد جزیره: auf + Akkusativ."
    },
    {
      "id": "a22-17-g10",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Wir verbringen eine Woche ___ Insel. (eine)",
      "answers": [
        "auf einer"
      ],
      "why": "حضور در جزیره: auf + Dativ."
    },
    {
      "id": "a22-17-g11",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Die Familie fährt ___ See. (der See)",
      "answers": [
        "an den"
      ],
      "why": "مقصد کنار دریاچه: an den See."
    },
    {
      "id": "a22-17-g12",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Die Familie sitzt ___ See. (der See)",
      "answers": [
        "am",
        "an dem"
      ],
      "why": "محل کنار دریاچه: am See."
    },
    {
      "id": "a22-17-g13",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Ich gehe jetzt ___ Wald hinein. (der Wald)",
      "answers": [
        "in den"
      ],
      "why": "رفتن به داخل جنگل: in den Wald."
    },
    {
      "id": "a22-17-g14",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Wir wandern schon seit zwei Stunden ___ Wald. (der Wald)",
      "answers": [
        "im",
        "in dem"
      ],
      "why": "حرکت درون یک مکان: داتیو؛ im Wald."
    },
    {
      "id": "a22-17-g15",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Unsere Ferienwohnung ist ___ Stadt. (die Stadt)",
      "answers": [
        "in der"
      ],
      "why": "مکان ثابت: in der Stadt."
    },
    {
      "id": "a22-17-g16",
      "lesson": 17,
      "mode": "grammar",
      "topic": "مقصد و محل",
      "prompt": "با nach، in، an یا auf و در صورت نیاز آرتیکل، جای خالی را کامل کن.",
      "text": "Wir fahren heute ___ Stadt hinein. (die Stadt)",
      "answers": [
        "in die"
      ],
      "why": "مقصد به داخل شهر: in die Stadt."
    },
    {
      "id": "a22-17-g17",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "wir / fahren / morgen / nach Wien",
      "answers": [
        "Wir fahren morgen nach Wien."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g18",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "im Sommer / wir / fahren / ans Meer",
      "answers": [
        "Im Sommer fahren wir ans Meer."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g19",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "unsere Unterkunft / liegt / am See",
      "answers": [
        "Unsere Unterkunft liegt am See."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g20",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "wir / möchten / auf einer Insel / übernachten",
      "answers": [
        "Wir möchten auf einer Insel übernachten."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g21",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "morgen / fahren / wir / in die Berge",
      "answers": [
        "Morgen fahren wir in die Berge."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g22",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "in Köln / müssen / wir / umsteigen",
      "answers": [
        "In Köln müssen wir umsteigen."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g23",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "der Zug / fährt / um acht Uhr / ab",
      "answers": [
        "Der Zug fährt um acht Uhr ab."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g24",
      "lesson": 17,
      "mode": "grammar",
      "topic": "جمله‌سازی سفر",
      "prompt": "با اولین عبارت شروع کن و همهٔ واژه‌ها را مرتب کن.",
      "text": "bitte / nimm / eine Regenjacke / mit",
      "answers": [
        "Bitte nimm eine Regenjacke mit."
      ],
      "why": "در جملهٔ خبری فعل دوم است؛ مصدر و پیشوند جداشدنی در پایان قرار می‌گیرند.",
      "sentence": true
    },
    {
      "id": "a22-17-g25",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "___ fahrt ihr? — Nach Wien.",
      "answers": [
        "Wohin"
      ],
      "why": "سؤال از مقصد: wohin."
    },
    {
      "id": "a22-17-g26",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "___ übernachtet ihr? — Auf einer Insel.",
      "answers": [
        "Wo"
      ],
      "why": "سؤال از محل: wo."
    },
    {
      "id": "a22-17-g27",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "Wir reisen ___ dem Zug.",
      "answers": [
        "mit"
      ],
      "why": "وسیلهٔ سفر با mit + Dativ."
    },
    {
      "id": "a22-17-g28",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich brauche eine Fahrkarte hin und ___.",
      "answers": [
        "zurück"
      ],
      "why": "hin und zurück یعنی رفت‌وبرگشت."
    },
    {
      "id": "a22-17-g29",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "Wir ___ morgen früh ab. (fahren)",
      "answers": [
        "fahren"
      ],
      "why": "صورت wir در حال: fahren؛ ab جدا می‌شود."
    },
    {
      "id": "a22-17-g30",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "Der Bus ___ um neun an. (kommen)",
      "answers": [
        "kommt"
      ],
      "why": "der Bus سوم‌شخص مفرد است."
    },
    {
      "id": "a22-17-g31",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich nehme meinen Rucksack ___.",
      "answers": [
        "mit"
      ],
      "why": "mitnehmen → nehme … mit."
    },
    {
      "id": "a22-17-g32",
      "lesson": 17,
      "mode": "grammar",
      "topic": "گفت‌وگوی سفر",
      "prompt": "جای خالی را کامل کن.",
      "text": "Wir haben drei Tage am Meer ___. (verbringen)",
      "answers": [
        "verbracht"
      ],
      "why": "verbringen → verbracht."
    },
    {
      "id": "a22-18-g01",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Ich warte ___ den Wetterbericht.",
      "answers": [
        "auf"
      ],
      "why": "warten auf + Akkusativ."
    },
    {
      "id": "a22-18-g02",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Wir freuen uns ___ den Urlaub nächste Woche.",
      "answers": [
        "auf"
      ],
      "why": "انتظار با خوشحالی برای آینده: auf."
    },
    {
      "id": "a22-18-g03",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Ich freue mich ___ das Geschenk, das ich bekommen habe.",
      "answers": [
        "über"
      ],
      "why": "خوشحالی از چیز دریافت‌شده: über."
    },
    {
      "id": "a22-18-g04",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Sie interessiert sich ___ das Klima.",
      "answers": [
        "für"
      ],
      "why": "sich interessieren für + Akkusativ."
    },
    {
      "id": "a22-18-g05",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Wir sprechen ___ das Wetter.",
      "answers": [
        "über"
      ],
      "why": "sprechen über + Akkusativ."
    },
    {
      "id": "a22-18-g06",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Er träumt ___ einem Urlaub am Meer.",
      "answers": [
        "von"
      ],
      "why": "träumen von + Dativ."
    },
    {
      "id": "a22-18-g07",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Ich denke ___ unseren letzten Urlaub.",
      "answers": [
        "an"
      ],
      "why": "denken an + Akkusativ."
    },
    {
      "id": "a22-18-g08",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Die Gäste beschweren sich ___ die Hitze.",
      "answers": [
        "über"
      ],
      "why": "sich beschweren über + Akkusativ."
    },
    {
      "id": "a22-18-g09",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Ich ärgere mich ___ den Regen.",
      "answers": [
        "über"
      ],
      "why": "sich ärgern über + Akkusativ."
    },
    {
      "id": "a22-18-g10",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Sie spricht ___ ihrer Freundin über den Sommer.",
      "answers": [
        "mit"
      ],
      "why": "صحبت با شخص: mit + Dativ."
    },
    {
      "id": "a22-18-g11",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Wir warten auf ___ Bus. (der)",
      "answers": [
        "den"
      ],
      "why": "auf در warten auf آکوزاتیو می‌گیرد."
    },
    {
      "id": "a22-18-g12",
      "lesson": 18,
      "mode": "grammar",
      "topic": "فعل و حرف اضافه",
      "prompt": "حرف اضافه یا آرتیکل مناسب را بنویس.",
      "text": "Er träumt von ___ Reise. (eine)",
      "answers": [
        "einer"
      ],
      "why": "von داتیو می‌گیرد؛ eine Reise → einer Reise."
    },
    {
      "id": "a22-18-g13",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "___ wartest du? — Auf den Bus.",
      "answers": [
        "Worauf"
      ],
      "why": "wo + r + auf برای سؤال از چیز."
    },
    {
      "id": "a22-18-g14",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "___ träumst du? — Von einer Reise.",
      "answers": [
        "Wovon"
      ],
      "why": "wo + von."
    },
    {
      "id": "a22-18-g15",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "___ interessiert sie sich? — Für das Klima.",
      "answers": [
        "Wofür"
      ],
      "why": "wo + für."
    },
    {
      "id": "a22-18-g16",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "___ denkt ihr? — An den Urlaub.",
      "answers": [
        "Woran"
      ],
      "why": "wo + r + an."
    },
    {
      "id": "a22-18-g17",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "___ ärgerst du dich? — Über den Regen.",
      "answers": [
        "Worüber"
      ],
      "why": "wo + r + über."
    },
    {
      "id": "a22-18-g18",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "Ich warte auf die Sonne. Ich warte ___.",
      "answers": [
        "darauf"
      ],
      "why": "da + r + auf به همان موضوع برمی‌گردد."
    },
    {
      "id": "a22-18-g19",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "Wir träumen vom Sommer. Wir träumen ___.",
      "answers": [
        "davon"
      ],
      "why": "da + von."
    },
    {
      "id": "a22-18-g20",
      "lesson": 18,
      "mode": "grammar",
      "topic": "wo(r)- و da(r)-",
      "prompt": "واژهٔ پرسشی یا ارجاعی مناسب را بنویس.",
      "text": "Sie spricht über das Wetter. Sie spricht ___.",
      "answers": [
        "darüber"
      ],
      "why": "da + r + über."
    },
    {
      "id": "a22-18-g21",
      "lesson": 18,
      "mode": "grammar",
      "topic": "ارجاع به انسان",
      "prompt": "wen یا wem را انتخاب کن.",
      "text": "Auf ___ wartest du? — Auf meine Schwester.",
      "answers": [
        "wen"
      ],
      "why": "از شخص بعد از auf آکوزاتیو با wen سؤال می‌کنیم.",
      "options": [
        "wen",
        "wem"
      ]
    },
    {
      "id": "a22-18-g22",
      "lesson": 18,
      "mode": "grammar",
      "topic": "ارجاع به انسان",
      "prompt": "wen یا wem را انتخاب کن.",
      "text": "Mit ___ sprichst du? — Mit meinem Bruder.",
      "answers": [
        "wem"
      ],
      "why": "mit داتیو می‌گیرد؛ سؤال از شخص wem.",
      "options": [
        "wen",
        "wem"
      ]
    },
    {
      "id": "a22-18-g23",
      "lesson": 18,
      "mode": "grammar",
      "topic": "ارجاع به انسان",
      "prompt": "wen یا wem را انتخاب کن.",
      "text": "An ___ denkst du? — An meine Mutter.",
      "answers": [
        "wen"
      ],
      "why": "denken an + Akkusativ؛ برای شخص wen.",
      "options": [
        "wen",
        "wem"
      ]
    },
    {
      "id": "a22-18-g24",
      "lesson": 18,
      "mode": "grammar",
      "topic": "ارجاع به انسان",
      "prompt": "wen یا wem را انتخاب کن.",
      "text": "Von ___ erzählt er? — Von seiner Lehrerin.",
      "answers": [
        "wem"
      ],
      "why": "von داتیو می‌گیرد؛ برای شخص wem.",
      "options": [
        "wen",
        "wem"
      ]
    },
    {
      "id": "a22-18-g25",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Wir freuen ___ auf den Frühling.",
      "answers": [
        "uns"
      ],
      "why": "ضمیر انعکاسی wir برابر با uns است."
    },
    {
      "id": "a22-18-g26",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Du interessierst ___ für das Wetter.",
      "answers": [
        "dich"
      ],
      "why": "ضمیر انعکاسی du برابر با dich است."
    },
    {
      "id": "a22-18-g27",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Er ärgert ___ über die Kälte.",
      "answers": [
        "sich"
      ],
      "why": "ضمیر انعکاسی er برابر با sich است."
    },
    {
      "id": "a22-18-g28",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Heute ___ es den ganzen Tag. (regnen)",
      "answers": [
        "regnet"
      ],
      "why": "پدیدهٔ جوی با es و سوم‌شخص مفرد می‌آید."
    },
    {
      "id": "a22-18-g29",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "In den Bergen ___ es. (schneien)",
      "answers": [
        "schneit"
      ],
      "why": "schneien → es schneit."
    },
    {
      "id": "a22-18-g30",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Die Sonne ___. (scheinen)",
      "answers": [
        "scheint"
      ],
      "why": "صورت سوم‌شخص: scheint."
    },
    {
      "id": "a22-18-g31",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Morgen sind es zwanzig ___.",
      "answers": [
        "Grad"
      ],
      "why": "در بیان دما بعد از عدد، Grad مفرد می‌ماند."
    },
    {
      "id": "a22-18-g32",
      "lesson": 18,
      "mode": "grammar",
      "topic": "هوا و فعل انعکاسی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Es ist kalt. Ich ___ ohne Jacke. (frieren)",
      "answers": [
        "friere"
      ],
      "why": "صورت ich برای frieren برابر با friere است."
    },
    {
      "id": "a22-19-g01",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Wir verlassen das Gebäude und kommen ___ Museum.",
      "answers": [
        "aus dem"
      ],
      "why": "خروج از داخل ساختمان: aus + Dativ."
    },
    {
      "id": "a22-19-g02",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Ich war bei einer Aufführung. Jetzt komme ich ___ Konzert.",
      "answers": [
        "vom",
        "von dem"
      ],
      "why": "برگشت از رویداد: von dem → vom."
    },
    {
      "id": "a22-19-g03",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Nora hat ihre Freundin besucht. Sie kommt ___ ihrer Freundin.",
      "answers": [
        "von"
      ],
      "why": "برگشت از نزد شخص: von."
    },
    {
      "id": "a22-19-g04",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Paul ist in Wien geboren. Er kommt ___ Wien.",
      "answers": [
        "aus"
      ],
      "why": "مبدأ شهر: aus."
    },
    {
      "id": "a22-19-g05",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Die Reisenden kommen ___ Schweiz.",
      "answers": [
        "aus der"
      ],
      "why": "کشور دارای آرتیکل مؤنث با داتیو: aus der."
    },
    {
      "id": "a22-19-g06",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Die Besucher gehen durch die Tür ___ Theater heraus.",
      "answers": [
        "aus dem"
      ],
      "why": "از داخل تئاتر: aus dem."
    },
    {
      "id": "a22-19-g07",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Ich komme gerade ___ einer Lesung.",
      "answers": [
        "von"
      ],
      "why": "برای رویداد Lesung اینجا von به کار می‌رود."
    },
    {
      "id": "a22-19-g08",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Sie kommt ___ Büro heraus.",
      "answers": [
        "aus dem"
      ],
      "why": "خروج از داخل دفتر: aus dem."
    },
    {
      "id": "a22-19-g09",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Die Kinder laufen ___ Kino heraus.",
      "answers": [
        "aus dem"
      ],
      "why": "خروج از داخل سینما: aus dem."
    },
    {
      "id": "a22-19-g10",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Ich komme ___ dem Arzt.",
      "answers": [
        "von"
      ],
      "why": "برگشت از نزد پزشک: von dem Arzt."
    },
    {
      "id": "a22-19-g11",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Die Musiker kommen ___ Italien.",
      "answers": [
        "aus"
      ],
      "why": "مبدأ کشور بدون آرتیکل: aus."
    },
    {
      "id": "a22-19-g12",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Wir kommen ___ unseren Freunden.",
      "answers": [
        "von"
      ],
      "why": "از نزد دوستان: von + Dativ."
    },
    {
      "id": "a22-19-g13",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "___ kommst du? — Aus der Galerie.",
      "answers": [
        "Woher"
      ],
      "why": "پرسش از مبدأ: woher."
    },
    {
      "id": "a22-19-g14",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "___ gehst du? — Ins Theater.",
      "answers": [
        "Wohin"
      ],
      "why": "پرسش از مقصد: wohin."
    },
    {
      "id": "a22-19-g15",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Er kommt aus ___ Bibliothek. (die)",
      "answers": [
        "der"
      ],
      "why": "aus داتیو می‌گیرد؛ مؤنث der."
    },
    {
      "id": "a22-19-g16",
      "lesson": 19,
      "mode": "grammar",
      "topic": "مبدأ با aus و von",
      "prompt": "با aus یا von و آرتیکل لازم، یا کلمهٔ پرسشی مناسب، جمله را کامل کن.",
      "text": "Sie kommen von ___ Nachbarn. (die، جمع)",
      "answers": [
        "den"
      ],
      "why": "von با داتیو جمع den می‌آید."
    },
    {
      "id": "a22-19-g17",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "ich / komme / gerade / aus dem Museum",
      "answers": [
        "Ich komme gerade aus dem Museum."
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g18",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "wir / kommen / heute / vom Konzert",
      "answers": [
        "Wir kommen heute vom Konzert."
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g19",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "sie / kommt / aus der Schweiz",
      "answers": [
        "Sie kommt aus der Schweiz."
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g20",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "woher / kommt / dein Freund",
      "answers": [
        "Woher kommt dein Freund?"
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g21",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "wir / könnten / eine Ausstellung / besuchen",
      "answers": [
        "Wir könnten eine Ausstellung besuchen."
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g22",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "ich / würde / lieber / ins Kino / gehen",
      "answers": [
        "Ich würde lieber ins Kino gehen."
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g23",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "die Lesung / findet / um acht Uhr / statt",
      "answers": [
        "Die Lesung findet um acht Uhr statt."
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g24",
      "lesson": 19,
      "mode": "grammar",
      "topic": "جمله‌سازی فرهنگی",
      "prompt": "با اولین عبارت شروع کن؛ همهٔ واژه‌ها را مرتب کن.",
      "text": "am Eingang / treffen / wir / uns",
      "answers": [
        "Am Eingang treffen wir uns."
      ],
      "why": "فعل صرف‌شده در جای درست جمله و مصدر یا پیشوند در پایان قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-19-g25",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ein Konzert im Park? Das ___ gut.",
      "answers": [
        "klingt"
      ],
      "why": "Das klingt gut یعنی خوب به نظر می‌رسد."
    },
    {
      "id": "a22-19-g26",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich bin noch nicht ___. Vielleicht komme ich mit.",
      "answers": [
        "sicher"
      ],
      "why": "Ich bin noch nicht sicher یعنی هنوز مطمئن نیستم."
    },
    {
      "id": "a22-19-g27",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Leider gibt es keine Karten mehr. Das Konzert ist ___.",
      "answers": [
        "ausverkauft"
      ],
      "why": "ausverkauft یعنی بلیط‌ها تمام شده‌اند."
    },
    {
      "id": "a22-19-g28",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Der Eintritt kostet nichts. Er ist ___.",
      "answers": [
        "frei",
        "kostenlos"
      ],
      "why": "Eintritt frei یا kostenlos یعنی ورود رایگان."
    },
    {
      "id": "a22-19-g29",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Wir treffen uns ___ acht Uhr.",
      "answers": [
        "um"
      ],
      "why": "برای ساعت از um استفاده می‌کنیم."
    },
    {
      "id": "a22-19-g30",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Könntest du zwei Plätze ___? (reservieren)",
      "answers": [
        "reservieren"
      ],
      "why": "بعد از فعل مُدال مصدر در پایان می‌آید."
    },
    {
      "id": "a22-19-g31",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Die Sängerin tritt heute ___. (auftreten)",
      "answers": [
        "auf"
      ],
      "why": "auftreten جداشدنی است."
    },
    {
      "id": "a22-19-g32",
      "lesson": 19,
      "mode": "grammar",
      "topic": "پیشنهاد و واکنش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich ___ dir diese Ausstellung. (empfehlen)",
      "answers": [
        "empfehle"
      ],
      "why": "صورت ich برابر با empfehle است."
    },
    {
      "id": "a22-20-g01",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Mit sechs ___ ich schon lesen. (können)",
      "answers": [
        "konnte"
      ],
      "why": "توانایی گذشته: ich konnte."
    },
    {
      "id": "a22-20-g02",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Früher ___ wir keine Comics lesen. (dürfen)",
      "answers": [
        "durften"
      ],
      "why": "اجازه در گذشته: wir durften."
    },
    {
      "id": "a22-20-g03",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Gestern ___ du das Buch zurückgeben. (müssen)",
      "answers": [
        "musstest"
      ],
      "why": "صورت du در گذشته: musstest."
    },
    {
      "id": "a22-20-g04",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Als Kind ___ sie Märchen. (mögen، او)",
      "answers": [
        "mochte"
      ],
      "why": "گذشتهٔ mögen برای sie مفرد: mochte."
    },
    {
      "id": "a22-20-g05",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ihr ___ den Text zusammenfassen. (sollen، گذشته)",
      "answers": [
        "solltet"
      ],
      "why": "گذشتهٔ sollen برای ihr: solltet."
    },
    {
      "id": "a22-20-g06",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Wir ___ einen Roman kaufen. (wollen، گذشته)",
      "answers": [
        "wollten"
      ],
      "why": "گذشتهٔ wollen برای wir: wollten."
    },
    {
      "id": "a22-20-g07",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Er ___ nicht einschlafen. (können، گذشته)",
      "answers": [
        "konnte"
      ],
      "why": "er و ich در گذشتهٔ können یکسان‌اند."
    },
    {
      "id": "a22-20-g08",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "___ du früher lange aufbleiben? (dürfen)",
      "answers": [
        "Durftest"
      ],
      "why": "سؤال گذشته با فعل صرف‌شده شروع می‌شود."
    },
    {
      "id": "a22-20-g09",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Die Kinder ___ leise sein. (müssen، گذشته)",
      "answers": [
        "mussten"
      ],
      "why": "صورت جمع گذشته: mussten."
    },
    {
      "id": "a22-20-g10",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ich ___ meiner Schwester vorlesen. (sollen، گذشته)",
      "answers": [
        "sollte"
      ],
      "why": "من طبق خواسته یا دستور باید می‌خواندم: sollte."
    },
    {
      "id": "a22-20-g11",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Du ___ früher keine Krimis. (mögen)",
      "answers": [
        "mochtest"
      ],
      "why": "du mochtest بدون اُملاوت است."
    },
    {
      "id": "a22-20-g12",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ihr ___ in die Bibliothek gehen. (wollen، گذشته)",
      "answers": [
        "wolltet"
      ],
      "why": "ihr wolltet."
    },
    {
      "id": "a22-20-g13",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Meine Eltern ___ damals kein Englisch. (können)",
      "answers": [
        "konnten"
      ],
      "why": "فاعل جمع: konnten."
    },
    {
      "id": "a22-20-g14",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ich ___ das Buch nicht behalten. (dürfen، گذشته)",
      "answers": [
        "durfte"
      ],
      "why": "اجازه نداشتن در گذشته: durfte nicht."
    },
    {
      "id": "a22-20-g15",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Sie ___ gestern nicht arbeiten. (müssen، او)",
      "answers": [
        "musste"
      ],
      "why": "sie مفرد: musste."
    },
    {
      "id": "a22-20-g16",
      "lesson": 20,
      "mode": "grammar",
      "topic": "Präteritum فعل مُدال",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "___ ihr als Kinder Comics? (mögen)",
      "answers": [
        "Mochtet"
      ],
      "why": "گذشتهٔ mögen برای ihr: mochtet."
    },
    {
      "id": "a22-20-g17",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "früher / ich / durfte / lange / lesen",
      "answers": [
        "Früher durfte ich lange lesen."
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g18",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "wir / mussten / das Buch / zurückgeben",
      "answers": [
        "Wir mussten das Buch zurückgeben."
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g19",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "als Kind / ich / konnte / schnell / lesen",
      "answers": [
        "Als Kind konnte ich schnell lesen."
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g20",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "du / solltest / den Text / zusammenfassen",
      "answers": [
        "Du solltest den Text zusammenfassen."
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g21",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "ihr / wolltet / einen Roman / kaufen",
      "answers": [
        "Ihr wolltet einen Roman kaufen."
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g22",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "sie / mochte / früher / Märchen",
      "answers": [
        "Sie mochte früher Märchen."
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g23",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "gestern / musste / ich / nicht / arbeiten",
      "answers": [
        "Gestern musste ich nicht arbeiten."
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g24",
      "lesson": 20,
      "mode": "grammar",
      "topic": "ترتیب فعل مُدال",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "durftest / du / abends / fernsehen",
      "answers": [
        "Durftest du abends fernsehen?"
      ],
      "why": "فعل مُدال صرف‌شده در جایگاه فعل و مصدر در آخر می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-20-g25",
      "lesson": 20,
      "mode": "grammar",
      "topic": "معنی فعل مُدال",
      "prompt": "گزینهٔ درست را انتخاب کن.",
      "text": "«اجازه نداشتم بروم.» کدام جمله درست است؟",
      "answers": [
        "Ich durfte nicht gehen."
      ],
      "why": "nicht dürfen یعنی اجازه نداشتن.",
      "options": [
        "Ich durfte nicht gehen.",
        "Ich musste nicht gehen."
      ]
    },
    {
      "id": "a22-20-g26",
      "lesson": 20,
      "mode": "grammar",
      "topic": "معنی فعل مُدال",
      "prompt": "گزینهٔ درست را انتخاب کن.",
      "text": "«لازم نبود بروم.» کدام جمله درست است؟",
      "answers": [
        "Ich musste nicht gehen."
      ],
      "why": "nicht müssen یعنی لازم نبودن.",
      "options": [
        "Ich musste nicht gehen.",
        "Ich durfte nicht gehen."
      ]
    },
    {
      "id": "a22-20-g27",
      "lesson": 20,
      "mode": "grammar",
      "topic": "معنی فعل مُدال",
      "prompt": "گزینهٔ درست را انتخاب کن.",
      "text": "برای توانایی در گذشته کدام شکل درست است؟",
      "answers": [
        "konnte"
      ],
      "why": "konnte بدون اُملاوت گذشته است.",
      "options": [
        "konnte",
        "könnte"
      ]
    },
    {
      "id": "a22-20-g28",
      "lesson": 20,
      "mode": "grammar",
      "topic": "معنی فعل مُدال",
      "prompt": "گزینهٔ درست را انتخاب کن.",
      "text": "برای خواستهٔ گذشته کدام شکل درست است؟",
      "answers": [
        "wollte"
      ],
      "why": "wollte گذشته و will حال است.",
      "options": [
        "wollte",
        "will"
      ]
    },
    {
      "id": "a22-20-g29",
      "lesson": 20,
      "mode": "grammar",
      "topic": "مطالعه و کتاب",
      "prompt": "جای خالی را کامل کن.",
      "text": "Der Roman handelt ___ einer Familie.",
      "answers": [
        "von"
      ],
      "why": "handeln von + Dativ."
    },
    {
      "id": "a22-20-g30",
      "lesson": 20,
      "mode": "grammar",
      "topic": "مطالعه و کتاب",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich leihe mir ein Buch ___. (ausleihen)",
      "answers": [
        "aus"
      ],
      "why": "ausleihen جداشدنی است."
    },
    {
      "id": "a22-20-g31",
      "lesson": 20,
      "mode": "grammar",
      "topic": "مطالعه و کتاب",
      "prompt": "جای خالی را کامل کن.",
      "text": "Das Buch ist spannend. Es ___ mich. (interessieren)",
      "answers": [
        "interessiert"
      ],
      "why": "فاعل مفرد: interessiert."
    },
    {
      "id": "a22-20-g32",
      "lesson": 20,
      "mode": "grammar",
      "topic": "مطالعه و کتاب",
      "prompt": "جای خالی را کامل کن.",
      "text": "Bitte gib das Buch morgen ___. (zurückgeben)",
      "answers": [
        "zurück"
      ],
      "why": "zurückgeben جداشدنی است."
    },
    {
      "id": "a22-21-g01",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "___ Ausweis brauchst du? (welch-)",
      "answers": [
        "Welchen"
      ],
      "why": "Ausweis مذکر آکوزاتیو است."
    },
    {
      "id": "a22-21-g02",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "___ Dokument fehlt? (welch-)",
      "answers": [
        "Welches"
      ],
      "why": "Dokument خنثی و فاعل است."
    },
    {
      "id": "a22-21-g03",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "___ Tasche hast du verloren? (welch-)",
      "answers": [
        "Welche"
      ],
      "why": "Tasche مؤنث آکوزاتیو: welche."
    },
    {
      "id": "a22-21-g04",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Mit ___ Pass reist du? (welch-)",
      "answers": [
        "welchem"
      ],
      "why": "mit با داتیو؛ مذکر welchem."
    },
    {
      "id": "a22-21-g05",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "___ Formulare müssen wir ausfüllen? (welch-)",
      "answers": [
        "Welche"
      ],
      "why": "جمع آکوزاتیو welche است."
    },
    {
      "id": "a22-21-g06",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Ich brauche ___ Antrag. (dies-)",
      "answers": [
        "diesen"
      ],
      "why": "Antrag مذکر آکوزاتیو: diesen."
    },
    {
      "id": "a22-21-g07",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "___ Formular ist vollständig. (dies-)",
      "answers": [
        "Dieses"
      ],
      "why": "Formular خنثی نومیناتیو: dieses."
    },
    {
      "id": "a22-21-g08",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Mit ___ Bescheinigung geht es. (dies-)",
      "answers": [
        "dieser"
      ],
      "why": "مؤنث داتیو: dieser."
    },
    {
      "id": "a22-21-g09",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Welchen Koffer meinst du? — ___ dort.",
      "answers": [
        "Den"
      ],
      "why": "ضمیر اشارهٔ مذکر آکوزاتیو: den."
    },
    {
      "id": "a22-21-g10",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Welches Dokument meinst du? — ___ dort.",
      "answers": [
        "Das"
      ],
      "why": "خنثی آکوزاتیو: das."
    },
    {
      "id": "a22-21-g11",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Welche Tasche meinst du? — ___ dort.",
      "answers": [
        "Die"
      ],
      "why": "مؤنث آکوزاتیو: die."
    },
    {
      "id": "a22-21-g12",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Welche Unterlagen meinst du? — ___ dort.",
      "answers": [
        "Die"
      ],
      "why": "جمع آکوزاتیو: die."
    },
    {
      "id": "a22-21-g13",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "___ Reisepass ist abgelaufen? (welch-)",
      "answers": [
        "Welcher"
      ],
      "why": "Reisepass فاعل مذکر است."
    },
    {
      "id": "a22-21-g14",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Ich unterschreibe ___ Formular. (dies-)",
      "answers": [
        "dieses"
      ],
      "why": "Formular مفعول خنثی آکوزاتیو است."
    },
    {
      "id": "a22-21-g15",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Von ___ Behörde kommt der Brief? (welch-)",
      "answers": [
        "welcher"
      ],
      "why": "von داتیو می‌گیرد؛ مؤنث welcher."
    },
    {
      "id": "a22-21-g16",
      "lesson": 21,
      "mode": "grammar",
      "topic": "welch-، dies- و ضمیر اشاره",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Mit ___ Dokumenten kann ich reisen? (dies-)",
      "answers": [
        "diesen"
      ],
      "why": "داتیو جمع diesen و Dokumenten."
    },
    {
      "id": "a22-21-g17",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "فعل lassen را در زمان حال صرف کن.",
      "text": "Ich ___ mein Fahrrad reparieren. (lassen)",
      "answers": [
        "lasse"
      ],
      "why": "ich lasse."
    },
    {
      "id": "a22-21-g18",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "فعل lassen را در زمان حال صرف کن.",
      "text": "Du ___ deinen Ausweis kopieren. (lassen)",
      "answers": [
        "lässt"
      ],
      "why": "du lässt با تغییر واکه."
    },
    {
      "id": "a22-21-g19",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "فعل lassen را در زمان حال صرف کن.",
      "text": "Er ___ das Fenster reparieren. (lassen)",
      "answers": [
        "lässt"
      ],
      "why": "er lässt."
    },
    {
      "id": "a22-21-g20",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "فعل lassen را در زمان حال صرف کن.",
      "text": "Wir ___ die Unterlagen übersetzen. (lassen)",
      "answers": [
        "lassen"
      ],
      "why": "wir lassen."
    },
    {
      "id": "a22-21-g21",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "فعل lassen را در زمان حال صرف کن.",
      "text": "Ihr ___ das Auto reparieren. (lassen)",
      "answers": [
        "lasst"
      ],
      "why": "ihr lasst بدون اُملاوت."
    },
    {
      "id": "a22-21-g22",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "فعل lassen را در زمان حال صرف کن.",
      "text": "Die Gäste ___ ihre Pässe kontrollieren. (lassen)",
      "answers": [
        "lassen"
      ],
      "why": "فاعل جمع: lassen."
    },
    {
      "id": "a22-21-g23",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "ich / lasse / meinen Ausweis / kopieren",
      "answers": [
        "Ich lasse meinen Ausweis kopieren."
      ],
      "why": "lassen صرف می‌شود و مصدرِ کارِ سپرده‌شده آخر قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-21-g24",
      "lesson": 21,
      "mode": "grammar",
      "topic": "lassen",
      "prompt": "با اولین عبارت شروع کن؛ واژه‌ها را مرتب کن.",
      "text": "morgen / lässt / sie / das Fenster / reparieren",
      "answers": [
        "Morgen lässt sie das Fenster reparieren."
      ],
      "why": "lassen صرف می‌شود و مصدرِ کارِ سپرده‌شده آخر قرار می‌گیرد.",
      "sentence": true
    },
    {
      "id": "a22-21-g25",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich habe meinen Ausweis ___. (verlieren)",
      "answers": [
        "verloren"
      ],
      "why": "verlieren → verloren."
    },
    {
      "id": "a22-21-g26",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Bitte füllen Sie das Formular ___. (ausfüllen)",
      "answers": [
        "aus"
      ],
      "why": "ausfüllen جداشدنی است."
    },
    {
      "id": "a22-21-g27",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Hier fehlt Ihre ___. (امضا)",
      "answers": [
        "Unterschrift"
      ],
      "why": "Unterschrift یعنی امضا."
    },
    {
      "id": "a22-21-g28",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Mein Pass ist noch ___. (معتبر)",
      "answers": [
        "gültig"
      ],
      "why": "gültig یعنی معتبر."
    },
    {
      "id": "a22-21-g29",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Welche Behörde ist dafür ___? (مسئول و ذی‌صلاح)",
      "answers": [
        "zuständig"
      ],
      "why": "zuständig یعنی مسئول انجام این کار."
    },
    {
      "id": "a22-21-g30",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Jemand hat mein Fahrrad ___. (stehlen)",
      "answers": [
        "gestohlen"
      ],
      "why": "stehlen → gestohlen."
    },
    {
      "id": "a22-21-g31",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich kümmere mich ___ den Antrag.",
      "answers": [
        "um"
      ],
      "why": "sich kümmern um + Akkusativ."
    },
    {
      "id": "a22-21-g32",
      "lesson": 21,
      "mode": "grammar",
      "topic": "مدارک و گزارش",
      "prompt": "جای خالی را کامل کن.",
      "text": "Erzählen Sie bitte, was passiert ___. (Perfekt)",
      "answers": [
        "ist"
      ],
      "why": "passieren در معنی اتفاق افتادن با sein می‌آید."
    },
    {
      "id": "a22-22-g01",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "Ich warte hier, ___ die Anmeldung fertig ist.",
      "answers": [
        "bis"
      ],
      "why": "تا زمانی که ثبت‌نام تمام شود: پایان انتظار."
    },
    {
      "id": "a22-22-g02",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "___ ich mein Auto verkauft habe, fahre ich Rad.",
      "answers": [
        "Seit",
        "Seitdem"
      ],
      "why": "از رویداد فروش تا حال نتیجه ادامه دارد."
    },
    {
      "id": "a22-22-g03",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "Bleib bitte hier, ___ ich zurückkomme.",
      "answers": [
        "bis"
      ],
      "why": "تا برگشتن من: نقطهٔ پایان ماندن."
    },
    {
      "id": "a22-22-g04",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "___ wir hier wohnen, benutzen wir Carsharing.",
      "answers": [
        "Seit",
        "Seitdem"
      ],
      "why": "شروع وضعیتی که ادامه دارد."
    },
    {
      "id": "a22-22-g05",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "Ich benutze das alte Passwort, ___ ich ein neues bekomme.",
      "answers": [
        "bis"
      ],
      "why": "تا دریافت رمز جدید: پایان استفاده."
    },
    {
      "id": "a22-22-g06",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "___ sie die App hat, findet sie schneller ein Fahrrad.",
      "answers": [
        "Seit",
        "Seitdem"
      ],
      "why": "از وقتی اپ را دارد."
    },
    {
      "id": "a22-22-g07",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "Warten Sie, ___ die Bestätigung erscheint.",
      "answers": [
        "bis"
      ],
      "why": "تا ظاهرشدن تأییدیه باید صبر کرد."
    },
    {
      "id": "a22-22-g08",
      "lesson": 22,
      "mode": "grammar",
      "topic": "bis یا seitdem",
      "prompt": "bis یا seit/seitdem را بنویس.",
      "text": "___ ich mit dem Rad fahre, bin ich fitter.",
      "answers": [
        "Seit",
        "Seitdem"
      ],
      "why": "از زمان آغاز دوچرخه‌سواری تا حال."
    },
    {
      "id": "a22-22-g09",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Ich wohne seit ___ Monat hier. (ein)",
      "answers": [
        "einem"
      ],
      "why": "seit به عنوان حرف اضافه داتیو می‌گیرد."
    },
    {
      "id": "a22-22-g10",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Wir benutzen den Service seit drei ___. (Jahr)",
      "answers": [
        "Jahren"
      ],
      "why": "داتیو جمع Jahre → Jahren."
    },
    {
      "id": "a22-22-g11",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Seitdem ich die App ___, spare ich Zeit. (benutzen)",
      "answers": [
        "benutze"
      ],
      "why": "فاعل ich و فعل در آخر بخش وابسته."
    },
    {
      "id": "a22-22-g12",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Warte, bis der Bus ___. (ankommen)",
      "answers": [
        "ankommt"
      ],
      "why": "در بخش وابسته an به فعل می‌چسبد."
    },
    {
      "id": "a22-22-g13",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Seit ich mein Auto verkauft ___, gehe ich öfter zu Fuß.",
      "answers": [
        "habe"
      ],
      "why": "Perfekt با haben؛ فاعل ich."
    },
    {
      "id": "a22-22-g14",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Bleiben Sie hier, bis die Tür ___ ist. (öffnen، Partizip II)",
      "answers": [
        "geöffnet"
      ],
      "why": "Partizip II فعل öffnen: geöffnet."
    },
    {
      "id": "a22-22-g15",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Seitdem wir ein Fahrrad ___, brauchen wir kein Auto. (haben)",
      "answers": [
        "haben"
      ],
      "why": "فاعل wir: haben."
    },
    {
      "id": "a22-22-g16",
      "lesson": 22,
      "mode": "grammar",
      "topic": "فعل و زمان",
      "prompt": "شکل مناسب را بنویس.",
      "text": "Ich bleibe, bis du die Nachricht ___ hast. (lesen، Partizip II)",
      "answers": [
        "gelesen"
      ],
      "why": "Perfekt در بخش وابسته: gelesen hast."
    },
    {
      "id": "a22-22-g17",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "seitdem / ich / hier / wohne — fahre / ich / mit dem Rad",
      "answers": [
        "Seitdem ich hier wohne, fahre ich mit dem Rad."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g18",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "ich / warte — bis / die Bestätigung / kommt",
      "answers": [
        "Ich warte, bis die Bestätigung kommt."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g19",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "seit / ich / mein Auto / verkauft / habe — spare / ich / Geld",
      "answers": [
        "Seit ich mein Auto verkauft habe, spare ich Geld."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g20",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "bleib / hier — bis / ich / zurückkomme",
      "answers": [
        "Bleib hier, bis ich zurückkomme."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g21",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "seitdem / wir / die App / benutzen — finden / wir / schneller / ein Fahrrad",
      "answers": [
        "Seitdem wir die App benutzen, finden wir schneller ein Fahrrad."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g22",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "wir / warten — bis / der Regen / aufhört",
      "answers": [
        "Wir warten, bis der Regen aufhört."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g23",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "seit / ich / Deutsch / lerne — lese / ich / mehr",
      "answers": [
        "Seit ich Deutsch lerne, lese ich mehr."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g24",
      "lesson": 22,
      "mode": "grammar",
      "topic": "جمله‌سازی زمانی",
      "prompt": "با اولین عبارت شروع کن و ترتیب دو بخش را حفظ کن.",
      "text": "ich / bleibe / zu Hause — bis / du / ankommst",
      "answers": [
        "Ich bleibe zu Hause, bis du ankommst."
      ],
      "why": "در بخش وابسته فعل آخر است؛ اگر آن بخش اول باشد، بعدش فعل جملهٔ اصلی می‌آید.",
      "sentence": true
    },
    {
      "id": "a22-22-g25",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Bitte melden Sie ___ zuerst an.",
      "answers": [
        "sich"
      ],
      "why": "Sie محترمانه با ضمیر انعکاسی sich."
    },
    {
      "id": "a22-22-g26",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Geben Sie Ihren Benutzernamen ___. (eingeben)",
      "answers": [
        "ein"
      ],
      "why": "eingeben جداشدنی است."
    },
    {
      "id": "a22-22-g27",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Klicken Sie den Link ___. (anklicken)",
      "answers": [
        "an"
      ],
      "why": "anklicken جداشدنی است."
    },
    {
      "id": "a22-22-g28",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Laden Sie die App ___. (herunterladen)",
      "answers": [
        "herunter"
      ],
      "why": "herunterladen جداشدنی است."
    },
    {
      "id": "a22-22-g29",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich habe mein ___ vergessen. (رمز عبور)",
      "answers": [
        "Passwort"
      ],
      "why": "Passwort یعنی رمز عبور."
    },
    {
      "id": "a22-22-g30",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Die Anmeldung war ___. (موفق)",
      "answers": [
        "erfolgreich"
      ],
      "why": "erfolgreich یعنی موفق."
    },
    {
      "id": "a22-22-g31",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Nach der Nutzung gebe ich das Fahrrad ___.",
      "answers": [
        "zurück"
      ],
      "why": "پس دادن: zurückgeben."
    },
    {
      "id": "a22-22-g32",
      "lesson": 22,
      "mode": "grammar",
      "topic": "مراحل آنلاین",
      "prompt": "جای خالی را کامل کن.",
      "text": "Bitte ___ Sie Ihre E-Mail-Adresse. (bestätigen)",
      "answers": [
        "bestätigen"
      ],
      "why": "امر محترمانه: bestätigen Sie."
    },
    {
      "id": "a22-23-g01",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Das ist der Beruf, ___ zu mir passt.",
      "answers": [
        "der"
      ],
      "why": "Beruf مذکر؛ ضمیر فاعل جملهٔ موصولی است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g02",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Das ist der Beruf, ___ ich suche.",
      "answers": [
        "den"
      ],
      "why": "Beruf مذکر؛ ضمیر مفعول suche است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g03",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Die Kollegin, ___ hier arbeitet, ist sehr nett.",
      "answers": [
        "die"
      ],
      "why": "Kollegin مؤنث و ضمیر فاعل.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g04",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Die Kollegin, ___ ich kenne, ist sehr nett.",
      "answers": [
        "die"
      ],
      "why": "مؤنث آکوزاتیو هم die است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g05",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Das Büro, ___ im Zentrum liegt, ist hell.",
      "answers": [
        "das"
      ],
      "why": "Büro خنثی و ضمیر فاعل.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g06",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Das Büro, ___ wir mieten, ist hell.",
      "answers": [
        "das"
      ],
      "why": "خنثی آکوزاتیو das می‌ماند.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g07",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Die Kollegen, ___ hier arbeiten, sind freundlich.",
      "answers": [
        "die"
      ],
      "why": "جمع نومیناتیو die است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g08",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Die Kollegen, ___ wir suchen, sprechen Deutsch.",
      "answers": [
        "die"
      ],
      "why": "جمع آکوزاتیو die است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g09",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Ich suche einen Beruf, ___ mir Spaß macht.",
      "answers": [
        "der"
      ],
      "why": "حالت بیرونی einen Beruf مهم نیست؛ ضمیر در بخش موصولی فاعل است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g10",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Ich suche einen Betrieb, ___ ich gut erreichen kann.",
      "answers": [
        "den"
      ],
      "why": "Betrieb مذکر؛ مفعول erreichen است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g11",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Das ist ein Praktikum, ___ drei Wochen dauert.",
      "answers": [
        "das"
      ],
      "why": "Praktikum خنثی و فاعل dauert است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g12",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Das ist die Ausbildung, ___ ich machen möchte.",
      "answers": [
        "die"
      ],
      "why": "Ausbildung مؤنث و مفعول machen است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g13",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Der Chef, ___ du gestern gesehen hast, ist freundlich.",
      "answers": [
        "den"
      ],
      "why": "du فاعل است؛ ضمیر موصولی مفعول دیده‌شده است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g14",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Der Chef, ___ dich gestern angerufen hat, ist freundlich.",
      "answers": [
        "der"
      ],
      "why": "ضمیر موصولی خودش فاعل تماس‌گیرنده است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g15",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Hier sind die Aufgaben, ___ du machen sollst.",
      "answers": [
        "die"
      ],
      "why": "Aufgaben جمع و مفعول machen است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g16",
      "lesson": 23,
      "mode": "grammar",
      "topic": "ضمیر موصولی",
      "prompt": "der، die، das یا den را انتخاب کن.",
      "text": "Ich kenne einen Mann, ___ in dieser Werkstatt arbeitet.",
      "answers": [
        "der"
      ],
      "why": "Mann مذکر و ضمیر فاعل arbeitet است.",
      "options": [
        "der",
        "die",
        "das",
        "den"
      ]
    },
    {
      "id": "a22-23-g17",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Das ist der Beruf. Der Beruf passt zu mir.",
      "answers": [
        "Das ist der Beruf, der zu mir passt."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g18",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Das ist der Betrieb. Ich suche den Betrieb.",
      "answers": [
        "Das ist der Betrieb, den ich suche."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g19",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Ich kenne die Kollegin. Die Kollegin arbeitet hier.",
      "answers": [
        "Ich kenne die Kollegin, die hier arbeitet."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g20",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Hier ist das Büro. Wir mieten das Büro.",
      "answers": [
        "Hier ist das Büro, das wir mieten."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g21",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Das sind die Aufgaben. Ich mache die Aufgaben gern.",
      "answers": [
        "Das sind die Aufgaben, die ich gern mache."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g22",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Ich suche eine Arbeit. Die Arbeit macht mir Spaß.",
      "answers": [
        "Ich suche eine Arbeit, die mir Spaß macht."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g23",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Das ist der Chef. Du kennst den Chef.",
      "answers": [
        "Das ist der Chef, den du kennst."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g24",
      "lesson": 23,
      "mode": "grammar",
      "topic": "وصل کردن جمله‌ها",
      "prompt": "جملهٔ اول را حفظ کن و جملهٔ دوم را پس از اسمِ پایانی، موصولی کن.",
      "text": "Das ist das Praktikum. Das Praktikum beginnt morgen.",
      "answers": [
        "Das ist das Praktikum, das morgen beginnt."
      ],
      "why": "اسم تکراری را با ضمیر موصولی مناسب جایگزین کن و فعل بخش موصولی را آخر بگذار.",
      "sentence": true
    },
    {
      "id": "a22-23-g25",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich bin mit meiner Ausbildung ___. (راضی)",
      "answers": [
        "zufrieden"
      ],
      "why": "رضایت از چیزی: zufrieden mit + Dativ."
    },
    {
      "id": "a22-23-g26",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Sie bewirbt sich ___ einen Ausbildungsplatz.",
      "answers": [
        "um"
      ],
      "why": "درخواست یک جایگاه: sich bewerben um + Akkusativ."
    },
    {
      "id": "a22-23-g27",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Dieser Beruf passt ___ mir.",
      "answers": [
        "zu"
      ],
      "why": "passen zu + Dativ."
    },
    {
      "id": "a22-23-g28",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Die Kollegin, die hier ___, ist neu. (arbeiten)",
      "answers": [
        "arbeitet"
      ],
      "why": "فاعل مفرد و فعل آخر بخش موصولی."
    },
    {
      "id": "a22-23-g29",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Die Aufgaben, die wir ___, sind interessant. (machen)",
      "answers": [
        "machen"
      ],
      "why": "فاعل داخل بخش موصولی wir است."
    },
    {
      "id": "a22-23-g30",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Das ist ein Beruf, den ich gut machen ___. (können، ich)",
      "answers": [
        "kann"
      ],
      "why": "فعل مُدال صرف‌شده آخرِ بخش موصولی است."
    },
    {
      "id": "a22-23-g31",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Wir arbeiten im Team ___. (zusammenarbeiten)",
      "answers": [
        "zusammen"
      ],
      "why": "zusammenarbeiten جداشدنی است."
    },
    {
      "id": "a22-23-g32",
      "lesson": 23,
      "mode": "grammar",
      "topic": "شغل و جملهٔ موصولی",
      "prompt": "جای خالی را کامل کن.",
      "text": "Im Lebenslauf stehen meine ___. (تجربه‌ها)",
      "answers": [
        "Erfahrungen"
      ],
      "why": "جمع Erfahrung برابر با Erfahrungen است."
    },
    {
      "id": "a22-24-g01",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ich ___ jeden Morgen um sieben auf. (stehen، گذشته)",
      "answers": [
        "stand"
      ],
      "why": "stehen → stand؛ auf جدا می‌شود."
    },
    {
      "id": "a22-24-g02",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Die Arbeit ___ um acht. (beginnen، گذشته)",
      "answers": [
        "begann"
      ],
      "why": "beginnen → begann."
    },
    {
      "id": "a22-24-g03",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Wir ___ am Sonntag an. (kommen، گذشته)",
      "answers": [
        "kamen"
      ],
      "why": "گذشتهٔ جمع kommen: kamen."
    },
    {
      "id": "a22-24-g04",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Er ___ sechs Monate im Ausland. (bleiben، گذشته)",
      "answers": [
        "blieb"
      ],
      "why": "bleiben → blieb."
    },
    {
      "id": "a22-24-g05",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ich ___ meine Familie. (vermissen، گذشته)",
      "answers": [
        "vermisste"
      ],
      "why": "قاعدهٔ -te: vermisste."
    },
    {
      "id": "a22-24-g06",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Du ___ jeden Tag viel. (arbeiten، گذشته)",
      "answers": [
        "arbeitetest"
      ],
      "why": "ریشهٔ t به -ete نیاز دارد؛ du arbeitetest."
    },
    {
      "id": "a22-24-g07",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Sie ___ viele nette Menschen kennen. (lernen، او، گذشته)",
      "answers": [
        "lernte"
      ],
      "why": "kennenlernen → lernte … kennen."
    },
    {
      "id": "a22-24-g08",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Wir ___ den neuen Kollegen. (helfen، گذشته)",
      "answers": [
        "halfen"
      ],
      "why": "helfen → half؛ جمع halfen."
    },
    {
      "id": "a22-24-g09",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ich ___ die Stadt sehr schön. (finden، گذشته)",
      "answers": [
        "fand"
      ],
      "why": "finden → fand."
    },
    {
      "id": "a22-24-g10",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Er ___ jeden Abend nach Hause. (gehen، گذشته)",
      "answers": [
        "ging"
      ],
      "why": "gehen → ging."
    },
    {
      "id": "a22-24-g11",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ihr ___ oft mit dem Bus. (fahren، گذشته)",
      "answers": [
        "fuhrt"
      ],
      "why": "fahren → fuhr؛ ihr fuhrt."
    },
    {
      "id": "a22-24-g12",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ich ___ meiner Familie eine Karte. (schreiben، گذشته)",
      "answers": [
        "schrieb"
      ],
      "why": "schreiben → schrieb."
    },
    {
      "id": "a22-24-g13",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Du ___ uns Fotos. (zeigen، گذشته)",
      "answers": [
        "zeigtest"
      ],
      "why": "قاعدهٔ -te با پایان du."
    },
    {
      "id": "a22-24-g14",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Sie ___ ein Geschenk mit. (bringen، او، گذشته)",
      "answers": [
        "brachte"
      ],
      "why": "فعل مختلط bringen → brachte."
    },
    {
      "id": "a22-24-g15",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Wir ___ oft an unsere Freunde. (denken، گذشته)",
      "answers": [
        "dachten"
      ],
      "why": "denken → dachte؛ جمع dachten."
    },
    {
      "id": "a22-24-g16",
      "lesson": 24,
      "mode": "grammar",
      "topic": "Präteritum",
      "prompt": "فعل داخل پرانتز را در گذشتهٔ ساده صرف کن.",
      "text": "Ich ___ am Anfang Heimweh. (haben، گذشته)",
      "answers": [
        "hatte"
      ],
      "why": "haben → hatte."
    },
    {
      "id": "a22-24-g17",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Ich komme am Sonntag an.",
      "answers": [
        "Ich kam am Sonntag an."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g18",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Wir gehen nach Hause.",
      "answers": [
        "Wir gingen nach Hause."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g19",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Sie sieht ihre Familie.",
      "answers": [
        "Sie sah ihre Familie."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g20",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Er findet eine Unterkunft.",
      "answers": [
        "Er fand eine Unterkunft."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g21",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Ich bringe ein Geschenk mit.",
      "answers": [
        "Ich brachte ein Geschenk mit."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g22",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Du arbeitest im Büro.",
      "answers": [
        "Du arbeitetest im Büro."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g23",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Wir lernen viele Menschen kennen.",
      "answers": [
        "Wir lernten viele Menschen kennen."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g24",
      "lesson": 24,
      "mode": "grammar",
      "topic": "تبدیل حال به گذشته",
      "prompt": "جمله را با همان ترتیب واژه‌ها به Präteritum تبدیل کن.",
      "text": "Ihr steht früh auf.",
      "answers": [
        "Ihr standet früh auf."
      ],
      "why": "فاعل را حفظ کن و فعل را به گذشتهٔ ساده ببر؛ پیشوند جداشدنی آخر می‌ماند.",
      "sentence": true
    },
    {
      "id": "a22-24-g25",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Als ich früh ___, war es noch dunkel. (aufstehen، گذشته)",
      "answers": [
        "aufstand"
      ],
      "why": "در بخش als پیشوند و فعل به هم می‌چسبند."
    },
    {
      "id": "a22-24-g26",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Am Anfang war ich etwas ___. (ناامید)",
      "answers": [
        "enttäuscht"
      ],
      "why": "enttäuscht یعنی ناامید."
    },
    {
      "id": "a22-24-g27",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Mit der Zeit ___ alles leichter. (werden، گذشته)",
      "answers": [
        "wurde"
      ],
      "why": "werden → wurde."
    },
    {
      "id": "a22-24-g28",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich war von der Stadt ___. (ذوق‌زده)",
      "answers": [
        "begeistert"
      ],
      "why": "begeistert von + Dativ."
    },
    {
      "id": "a22-24-g29",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Wir blieben auch später in ___.",
      "answers": [
        "Kontakt"
      ],
      "why": "in Kontakt bleiben یعنی در تماس ماندن."
    },
    {
      "id": "a22-24-g30",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Die Familie holte mich am Flughafen ___.",
      "answers": [
        "ab"
      ],
      "why": "abholen → holte … ab."
    },
    {
      "id": "a22-24-g31",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Schließlich ___ ich mich zu Hause. (fühlen، گذشته)",
      "answers": [
        "fühlte"
      ],
      "why": "قاعدهٔ -te: fühlte؛ فعل انعکاسی mich حفظ می‌شود."
    },
    {
      "id": "a22-24-g32",
      "lesson": 24,
      "mode": "grammar",
      "topic": "روایت و احساسات",
      "prompt": "جای خالی را کامل کن.",
      "text": "Ich gewöhnte mich ___ das neue Leben.",
      "answers": [
        "an"
      ],
      "why": "sich gewöhnen an + Akkusativ."
    },
    {
      "id": "a22-13-v-01-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "زبان",
      "answers": [
        "die Sprache",
        "Sprache"
      ],
      "why": "Welche Sprachen sprichst du?"
    },
    {
      "id": "a22-13-v-01-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Sprache",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Sprache",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-01-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Sprache",
      "answers": [
        "Sprachen",
        "die Sprachen"
      ],
      "why": "جمع: die Sprachen"
    },
    {
      "id": "a22-13-v-02-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "زبان مادری",
      "answers": [
        "die Muttersprache",
        "Muttersprache"
      ],
      "why": "Meine Muttersprache ist Persisch."
    },
    {
      "id": "a22-13-v-02-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Muttersprache",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Muttersprache",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-02-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Muttersprache",
      "answers": [
        "Muttersprachen",
        "die Muttersprachen"
      ],
      "why": "جمع: die Muttersprachen"
    },
    {
      "id": "a22-13-v-03-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "زبان خارجی",
      "answers": [
        "die Fremdsprache",
        "Fremdsprache"
      ],
      "why": "Englisch ist meine erste Fremdsprache."
    },
    {
      "id": "a22-13-v-03-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Fremdsprache",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Fremdsprache",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-03-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Fremdsprache",
      "answers": [
        "Fremdsprachen",
        "die Fremdsprachen"
      ],
      "why": "جمع: die Fremdsprachen"
    },
    {
      "id": "a22-13-v-04-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کلاس زبان",
      "answers": [
        "der Sprachkurs",
        "Sprachkurs"
      ],
      "why": "Der Sprachkurs beginnt am Montag."
    },
    {
      "id": "a22-13-v-04-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Sprachkurs",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Sprachkurs",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-04-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Sprachkurs",
      "answers": [
        "Sprachkurse",
        "die Sprachkurse"
      ],
      "why": "جمع: die Sprachkurse"
    },
    {
      "id": "a22-13-v-05-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آموزشگاه زبان",
      "answers": [
        "die Sprachschule",
        "Sprachschule"
      ],
      "why": "Die Sprachschule liegt am Bahnhof."
    },
    {
      "id": "a22-13-v-05-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Sprachschule",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Sprachschule",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-05-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Sprachschule",
      "answers": [
        "Sprachschulen",
        "die Sprachschulen"
      ],
      "why": "جمع: die Sprachschulen"
    },
    {
      "id": "a22-13-v-06-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تدریس؛ کلاس درس",
      "answers": [
        "der Unterricht",
        "Unterricht"
      ],
      "why": "Der Unterricht dauert zwei Stunden."
    },
    {
      "id": "a22-13-v-06-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Unterricht",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Unterricht",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-07-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "معلم زن",
      "answers": [
        "die Lehrerin",
        "Lehrerin"
      ],
      "why": "Die Lehrerin erklärt das neue Wort."
    },
    {
      "id": "a22-13-v-07-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Lehrerin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Lehrerin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-07-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Lehrerin",
      "answers": [
        "Lehrerinnen",
        "die Lehrerinnen"
      ],
      "why": "جمع: die Lehrerinnen"
    },
    {
      "id": "a22-13-v-08-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "معلم مرد",
      "answers": [
        "der Lehrer",
        "Lehrer"
      ],
      "why": "Unser Lehrer spricht langsam."
    },
    {
      "id": "a22-13-v-08-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Lehrer",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Lehrer",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-08-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Lehrer",
      "answers": [
        "Lehrer",
        "die Lehrer"
      ],
      "why": "جمع: die Lehrer"
    },
    {
      "id": "a22-13-v-09-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شرکت‌کننده مرد",
      "answers": [
        "der Teilnehmer",
        "Teilnehmer"
      ],
      "why": "Jeder Teilnehmer stellt sich vor."
    },
    {
      "id": "a22-13-v-09-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Teilnehmer",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Teilnehmer",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-09-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Teilnehmer",
      "answers": [
        "Teilnehmer",
        "die Teilnehmer"
      ],
      "why": "جمع: die Teilnehmer"
    },
    {
      "id": "a22-13-v-10-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شرکت‌کننده زن",
      "answers": [
        "die Teilnehmerin",
        "Teilnehmerin"
      ],
      "why": "Eine Teilnehmerin kommt aus Polen."
    },
    {
      "id": "a22-13-v-10-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Teilnehmerin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Teilnehmerin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-10-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Teilnehmerin",
      "answers": [
        "Teilnehmerinnen",
        "die Teilnehmerinnen"
      ],
      "why": "جمع: die Teilnehmerinnen"
    },
    {
      "id": "a22-13-v-11-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تلفظ",
      "answers": [
        "die Aussprache",
        "Aussprache"
      ],
      "why": "Ich übe jeden Tag die Aussprache."
    },
    {
      "id": "a22-13-v-11-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Aussprache",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Aussprache",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-12-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دایرهٔ لغات",
      "answers": [
        "der Wortschatz",
        "Wortschatz"
      ],
      "why": "Mein Wortschatz wird größer."
    },
    {
      "id": "a22-13-v-12-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wortschatz",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Wortschatz",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-13-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دستور زبان",
      "answers": [
        "die Grammatik",
        "Grammatik"
      ],
      "why": "Die Grammatik ist heute unser Thema."
    },
    {
      "id": "a22-13-v-13-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Grammatik",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Grammatik",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-14-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اشتباه",
      "answers": [
        "der Fehler",
        "Fehler"
      ],
      "why": "Aus Fehlern kann man lernen."
    },
    {
      "id": "a22-13-v-14-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Fehler",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Fehler",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-14-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Fehler",
      "answers": [
        "Fehler",
        "die Fehler"
      ],
      "why": "جمع: die Fehler"
    },
    {
      "id": "a22-13-v-15-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تمرین",
      "answers": [
        "die Übung",
        "Übung"
      ],
      "why": "Diese Übung hilft mir."
    },
    {
      "id": "a22-13-v-15-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Übung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Übung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-15-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Übung",
      "answers": [
        "Übungen",
        "die Übungen"
      ],
      "why": "جمع: die Übungen"
    },
    {
      "id": "a22-13-v-16-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آزمون",
      "answers": [
        "die Prüfung",
        "Prüfung"
      ],
      "why": "Morgen habe ich eine Prüfung."
    },
    {
      "id": "a22-13-v-16-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Prüfung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Prüfung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-16-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Prüfung",
      "answers": [
        "Prüfungen",
        "die Prüfungen"
      ],
      "why": "جمع: die Prüfungen"
    },
    {
      "id": "a22-13-v-17-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تجربه",
      "answers": [
        "die Erfahrung",
        "Erfahrung"
      ],
      "why": "Er erzählt von seinen Erfahrungen."
    },
    {
      "id": "a22-13-v-17-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Erfahrung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Erfahrung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-17-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Erfahrung",
      "answers": [
        "Erfahrungen",
        "die Erfahrungen"
      ],
      "why": "جمع: die Erfahrungen"
    },
    {
      "id": "a22-13-v-18-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خاطره",
      "answers": [
        "die Erinnerung",
        "Erinnerung"
      ],
      "why": "Ich habe gute Erinnerungen an den Kurs."
    },
    {
      "id": "a22-13-v-18-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Erinnerung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Erinnerung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-18-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Erinnerung",
      "answers": [
        "Erinnerungen",
        "die Erinnerungen"
      ],
      "why": "جمع: die Erinnerungen"
    },
    {
      "id": "a22-13-v-19-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فرهنگ لغت",
      "answers": [
        "das Wörterbuch",
        "Wörterbuch"
      ],
      "why": "Ich suche das Wort im Wörterbuch."
    },
    {
      "id": "a22-13-v-19-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wörterbuch",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Wörterbuch",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-19-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Wörterbuch",
      "answers": [
        "Wörterbücher",
        "die Wörterbücher"
      ],
      "why": "جمع: die Wörterbücher"
    },
    {
      "id": "a22-13-v-20-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فلش‌کارت کاغذی",
      "answers": [
        "die Karteikarte",
        "Karteikarte"
      ],
      "why": "Auf der Karteikarte steht ein Verb."
    },
    {
      "id": "a22-13-v-20-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Karteikarte",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Karteikarte",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-20-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Karteikarte",
      "answers": [
        "Karteikarten",
        "die Karteikarten"
      ],
      "why": "جمع: die Karteikarten"
    },
    {
      "id": "a22-13-v-21-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نکتهٔ یادگیری",
      "answers": [
        "der Lerntipp",
        "Lerntipp"
      ],
      "why": "Dieser Lerntipp ist praktisch."
    },
    {
      "id": "a22-13-v-21-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Lerntipp",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Lerntipp",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-21-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Lerntipp",
      "answers": [
        "Lerntipps",
        "die Lerntipps"
      ],
      "why": "جمع: die Lerntipps"
    },
    {
      "id": "a22-13-v-22-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گفت‌وگو",
      "answers": [
        "das Gespräch",
        "Gespräch"
      ],
      "why": "Wir führen ein kurzes Gespräch."
    },
    {
      "id": "a22-13-v-22-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gespräch",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Gespräch",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-22-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Gespräch",
      "answers": [
        "Gespräche",
        "die Gespräche"
      ],
      "why": "جمع: die Gespräche"
    },
    {
      "id": "a22-13-v-23-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "جمله",
      "answers": [
        "der Satz",
        "Satz"
      ],
      "why": "Schreib bitte einen ganzen Satz."
    },
    {
      "id": "a22-13-v-23-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Satz",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Satz",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-23-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Satz",
      "answers": [
        "Sätze",
        "die Sätze"
      ],
      "why": "جمع: die Sätze"
    },
    {
      "id": "a22-13-v-24-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "معنی",
      "answers": [
        "die Bedeutung",
        "Bedeutung"
      ],
      "why": "Was ist die Bedeutung dieses Wortes?"
    },
    {
      "id": "a22-13-v-24-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Bedeutung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Bedeutung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-24-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Bedeutung",
      "answers": [
        "Bedeutungen",
        "die Bedeutungen"
      ],
      "why": "جمع: die Bedeutungen"
    },
    {
      "id": "a22-13-v-25-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "هدف",
      "answers": [
        "das Ziel",
        "Ziel"
      ],
      "why": "Mein Ziel ist ein Gespräch ohne Angst."
    },
    {
      "id": "a22-13-v-25-article",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ziel",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Ziel",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-13-v-25-plural",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Ziel",
      "answers": [
        "Ziele",
        "die Ziele"
      ],
      "why": "جمع: die Ziele"
    },
    {
      "id": "a22-13-v-26-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "یاد گرفتن",
      "answers": [
        "lernen"
      ],
      "why": "Ich lerne seit einem Jahr Deutsch."
    },
    {
      "id": "a22-13-v-27-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تمرین کردن",
      "answers": [
        "üben"
      ],
      "why": "Wir üben gemeinsam die Dialoge."
    },
    {
      "id": "a22-13-v-28-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مرور؛ تکرار کردن",
      "answers": [
        "wiederholen"
      ],
      "why": "Ich wiederhole die neuen Wörter."
    },
    {
      "id": "a22-13-v-29-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فهمیدن",
      "answers": [
        "verstehen"
      ],
      "why": "Verstehst du die Frage?"
    },
    {
      "id": "a22-13-v-30-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توضیح دادن",
      "answers": [
        "erklären"
      ],
      "why": "Kannst du mir die Regel erklären?"
    },
    {
      "id": "a22-13-v-31-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ترجمه کردن",
      "answers": [
        "übersetzen"
      ],
      "why": "Ich übersetze den Satz ins Persische."
    },
    {
      "id": "a22-13-v-32-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در مرجع جست‌وجو کردن",
      "answers": [
        "nachschlagen"
      ],
      "why": "Ich schlage das Wort im Wörterbuch nach."
    },
    {
      "id": "a22-13-v-33-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گوش دادن با توجه",
      "answers": [
        "zuhören"
      ],
      "why": "Hör bitte genau zu."
    },
    {
      "id": "a22-13-v-34-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صحبت کردن",
      "answers": [
        "sprechen"
      ],
      "why": "Wir sprechen im Kurs Deutsch."
    },
    {
      "id": "a22-13-v-35-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تعریف کردن؛ روایت کردن",
      "answers": [
        "erzählen"
      ],
      "why": "Er erzählt von seinem ersten Kurs."
    },
    {
      "id": "a22-13-v-36-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به یاد آوردن",
      "answers": [
        "sich erinnern"
      ],
      "why": "Ich erinnere mich an meine Lehrerin."
    },
    {
      "id": "a22-13-v-37-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "متوجه شدن",
      "answers": [
        "merken"
      ],
      "why": "Ich merke, dass ich besser spreche."
    },
    {
      "id": "a22-13-v-38-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به خاطر سپردن",
      "answers": [
        "sich merken"
      ],
      "why": "Ich merke mir die Wörter mit Bildern."
    },
    {
      "id": "a22-13-v-39-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تصحیح کردن",
      "answers": [
        "korrigieren"
      ],
      "why": "Die Lehrerin korrigiert meinen Text."
    },
    {
      "id": "a22-13-v-40-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "قبول شدن در آزمون",
      "answers": [
        "bestehen"
      ],
      "why": "Ich habe die Prüfung bestanden."
    },
    {
      "id": "a22-13-v-41-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "روان",
      "answers": [
        "fließend"
      ],
      "why": "Sie spricht fließend Deutsch."
    },
    {
      "id": "a22-13-v-42-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "واضح",
      "answers": [
        "deutlich"
      ],
      "why": "Bitte sprich deutlich."
    },
    {
      "id": "a22-13-v-43-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به‌طور منظم",
      "answers": [
        "regelmäßig"
      ],
      "why": "Wir lernen regelmäßig zusammen."
    },
    {
      "id": "a22-13-v-44-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دشوار",
      "answers": [
        "schwierig"
      ],
      "why": "Der Text ist schwierig."
    },
    {
      "id": "a22-13-v-45-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ساده",
      "answers": [
        "einfach"
      ],
      "why": "Dieses Beispiel ist einfach."
    },
    {
      "id": "a22-13-v-46-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آن زمان",
      "answers": [
        "damals"
      ],
      "why": "Damals konnte ich nur wenig Deutsch."
    },
    {
      "id": "a22-13-v-47-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در گذشته",
      "answers": [
        "früher"
      ],
      "why": "Früher lernte ich mit einem Wörterbuch."
    },
    {
      "id": "a22-13-v-48-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برای اولین بار",
      "answers": [
        "zum ersten Mal"
      ],
      "why": "Ich war zum ersten Mal in Berlin."
    },
    {
      "id": "a22-13-v-49-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از حفظ",
      "answers": [
        "auswendig"
      ],
      "why": "Ich kenne das Gedicht auswendig."
    },
    {
      "id": "a22-13-v-50-recall",
      "lesson": 13,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "قدم‌به‌قدم",
      "answers": [
        "Schritt für Schritt"
      ],
      "why": "Schritt für Schritt verstehe ich mehr."
    },
    {
      "id": "a22-17-v-01-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سفر",
      "answers": [
        "die Reise",
        "Reise"
      ],
      "why": "Unsere Reise dauert zehn Tage."
    },
    {
      "id": "a22-17-v-01-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Reise",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Reise",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-01-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Reise",
      "answers": [
        "Reisen",
        "die Reisen"
      ],
      "why": "جمع: die Reisen"
    },
    {
      "id": "a22-17-v-02-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تعطیلات",
      "answers": [
        "der Urlaub",
        "Urlaub"
      ],
      "why": "Im Urlaub fahren wir ans Meer."
    },
    {
      "id": "a22-17-v-02-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Urlaub",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Urlaub",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-02-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Urlaub",
      "answers": [
        "Urlaube",
        "die Urlaube"
      ],
      "why": "جمع: die Urlaube"
    },
    {
      "id": "a22-17-v-03-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مقصد سفر",
      "answers": [
        "das Reiseziel",
        "Reiseziel",
        "das Ziel",
        "Ziel"
      ],
      "why": "Unser Reiseziel ist eine kleine Insel."
    },
    {
      "id": "a22-17-v-03-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Reiseziel",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Reiseziel",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-03-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Reiseziel",
      "answers": [
        "Reiseziele",
        "die Reiseziele"
      ],
      "why": "جمع: die Reiseziele"
    },
    {
      "id": "a22-17-v-04-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آژانس مسافرتی",
      "answers": [
        "das Reisebüro",
        "Reisebüro"
      ],
      "why": "Wir fragen im Reisebüro nach."
    },
    {
      "id": "a22-17-v-04-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Reisebüro",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Reisebüro",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-04-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Reisebüro",
      "answers": [
        "Reisebüros",
        "die Reisebüros"
      ],
      "why": "جمع: die Reisebüros"
    },
    {
      "id": "a22-17-v-05-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "محل اقامت",
      "answers": [
        "die Unterkunft",
        "Unterkunft"
      ],
      "why": "Die Unterkunft liegt am See."
    },
    {
      "id": "a22-17-v-05-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Unterkunft",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Unterkunft",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-05-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Unterkunft",
      "answers": [
        "Unterkünfte",
        "die Unterkünfte"
      ],
      "why": "جمع: die Unterkünfte"
    },
    {
      "id": "a22-17-v-06-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "محل کمپ",
      "answers": [
        "der Campingplatz",
        "Campingplatz"
      ],
      "why": "Der Campingplatz ist im Wald."
    },
    {
      "id": "a22-17-v-06-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Campingplatz",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Campingplatz",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-06-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Campingplatz",
      "answers": [
        "Campingplätze",
        "die Campingplätze"
      ],
      "why": "جمع: die Campingplätze"
    },
    {
      "id": "a22-17-v-07-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "چادر",
      "answers": [
        "das Zelt",
        "Zelt"
      ],
      "why": "Wir schlafen in einem Zelt."
    },
    {
      "id": "a22-17-v-07-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Zelt",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Zelt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-07-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Zelt",
      "answers": [
        "Zelte",
        "die Zelte"
      ],
      "why": "جمع: die Zelte"
    },
    {
      "id": "a22-17-v-08-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "جزیره",
      "answers": [
        "die Insel",
        "Insel"
      ],
      "why": "Die Insel ist autofrei."
    },
    {
      "id": "a22-17-v-08-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Insel",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Insel",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-08-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Insel",
      "answers": [
        "Inseln",
        "die Inseln"
      ],
      "why": "جمع: die Inseln"
    },
    {
      "id": "a22-17-v-09-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دریا",
      "answers": [
        "das Meer",
        "Meer"
      ],
      "why": "Die Kinder spielen am Meer."
    },
    {
      "id": "a22-17-v-09-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Meer",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Meer",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-09-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Meer",
      "answers": [
        "Meere",
        "die Meere"
      ],
      "why": "جمع: die Meere"
    },
    {
      "id": "a22-17-v-10-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ساحل؛ نوار ساحلی",
      "answers": [
        "die Küste",
        "Küste"
      ],
      "why": "Wir fahren an die Küste."
    },
    {
      "id": "a22-17-v-10-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Küste",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Küste",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-10-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Küste",
      "answers": [
        "Küsten",
        "die Küsten"
      ],
      "why": "جمع: die Küsten"
    },
    {
      "id": "a22-17-v-11-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ساحل شنی",
      "answers": [
        "der Strand",
        "Strand"
      ],
      "why": "Am Strand lesen wir ein Buch."
    },
    {
      "id": "a22-17-v-11-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Strand",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Strand",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-11-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Strand",
      "answers": [
        "Strände",
        "die Strände"
      ],
      "why": "جمع: die Strände"
    },
    {
      "id": "a22-17-v-12-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دریاچه",
      "answers": [
        "der See",
        "See"
      ],
      "why": "Der See liegt in den Bergen."
    },
    {
      "id": "a22-17-v-12-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "See",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der See",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-12-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der See",
      "answers": [
        "Seen",
        "die Seen"
      ],
      "why": "جمع: die Seen"
    },
    {
      "id": "a22-17-v-13-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کوه",
      "answers": [
        "der Berg",
        "Berg"
      ],
      "why": "Auf dem Berg ist es kühl."
    },
    {
      "id": "a22-17-v-13-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Berg",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Berg",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-13-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Berg",
      "answers": [
        "Berge",
        "die Berge"
      ],
      "why": "جمع: die Berge"
    },
    {
      "id": "a22-17-v-14-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رشته‌کوه",
      "answers": [
        "das Gebirge",
        "Gebirge"
      ],
      "why": "Im Gebirge wandern wir gern."
    },
    {
      "id": "a22-17-v-14-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gebirge",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Gebirge",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-14-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Gebirge",
      "answers": [
        "Gebirge",
        "die Gebirge"
      ],
      "why": "جمع: die Gebirge"
    },
    {
      "id": "a22-17-v-15-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "جنگل",
      "answers": [
        "der Wald",
        "Wald"
      ],
      "why": "Wir gehen durch den Wald."
    },
    {
      "id": "a22-17-v-15-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wald",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Wald",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-15-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Wald",
      "answers": [
        "Wälder",
        "die Wälder"
      ],
      "why": "جمع: die Wälder"
    },
    {
      "id": "a22-17-v-16-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کشور؛ سرزمین",
      "answers": [
        "das Land",
        "Land"
      ],
      "why": "Welches Land möchtest du besuchen?"
    },
    {
      "id": "a22-17-v-16-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Land",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Land",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-16-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Land",
      "answers": [
        "Länder",
        "die Länder"
      ],
      "why": "جمع: die Länder"
    },
    {
      "id": "a22-17-v-17-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شهر",
      "answers": [
        "die Stadt",
        "Stadt"
      ],
      "why": "Die Stadt hat einen alten Hafen."
    },
    {
      "id": "a22-17-v-17-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Stadt",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Stadt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-17-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Stadt",
      "answers": [
        "Städte",
        "die Städte"
      ],
      "why": "جمع: die Städte"
    },
    {
      "id": "a22-17-v-18-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "روستا",
      "answers": [
        "das Dorf",
        "Dorf"
      ],
      "why": "Das Dorf liegt im Tal."
    },
    {
      "id": "a22-17-v-18-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Dorf",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Dorf",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-18-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Dorf",
      "answers": [
        "Dörfer",
        "die Dörfer"
      ],
      "why": "جمع: die Dörfer"
    },
    {
      "id": "a22-17-v-19-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کشتی مسافربری خودروبر",
      "answers": [
        "die Fähre",
        "Fähre"
      ],
      "why": "Die Fähre fährt zur Insel."
    },
    {
      "id": "a22-17-v-19-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Fähre",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Fähre",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-19-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Fähre",
      "answers": [
        "Fähren",
        "die Fähren"
      ],
      "why": "جمع: die Fähren"
    },
    {
      "id": "a22-17-v-20-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بندر",
      "answers": [
        "der Hafen",
        "Hafen"
      ],
      "why": "Im Hafen warten viele Reisende."
    },
    {
      "id": "a22-17-v-20-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Hafen",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Hafen",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-20-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Hafen",
      "answers": [
        "Häfen",
        "die Häfen"
      ],
      "why": "جمع: die Häfen"
    },
    {
      "id": "a22-17-v-21-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پرواز",
      "answers": [
        "der Flug",
        "Flug"
      ],
      "why": "Unser Flug geht am Abend."
    },
    {
      "id": "a22-17-v-21-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Flug",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Flug",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-21-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Flug",
      "answers": [
        "Flüge",
        "die Flüge"
      ],
      "why": "جمع: die Flüge"
    },
    {
      "id": "a22-17-v-22-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بلیط وسیلهٔ نقلیه",
      "answers": [
        "die Fahrkarte",
        "Fahrkarte",
        "das Ticket",
        "Ticket"
      ],
      "why": "Ich kaufe eine Fahrkarte nach Wien."
    },
    {
      "id": "a22-17-v-22-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Fahrkarte",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Fahrkarte",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-22-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Fahrkarte",
      "answers": [
        "Fahrkarten",
        "die Fahrkarten"
      ],
      "why": "جمع: die Fahrkarten"
    },
    {
      "id": "a22-17-v-23-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بار سفر",
      "answers": [
        "das Gepäck",
        "Gepäck"
      ],
      "why": "Unser Gepäck ist leicht."
    },
    {
      "id": "a22-17-v-23-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gepäck",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Gepäck",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-24-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "چمدان",
      "answers": [
        "der Koffer",
        "Koffer"
      ],
      "why": "Mein Koffer steht im Flur."
    },
    {
      "id": "a22-17-v-24-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Koffer",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Koffer",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-24-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Koffer",
      "answers": [
        "Koffer",
        "die Koffer"
      ],
      "why": "جمع: die Koffer"
    },
    {
      "id": "a22-17-v-25-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کوله‌پشتی",
      "answers": [
        "der Rucksack",
        "Rucksack"
      ],
      "why": "Der Rucksack ist schon gepackt."
    },
    {
      "id": "a22-17-v-25-article",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Rucksack",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Rucksack",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-17-v-25-plural",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Rucksack",
      "answers": [
        "Rucksäcke",
        "die Rucksäcke"
      ],
      "why": "جمع: die Rucksäcke"
    },
    {
      "id": "a22-17-v-26-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سفر کردن",
      "answers": [
        "reisen"
      ],
      "why": "Wir reisen gern mit dem Zug."
    },
    {
      "id": "a22-17-v-27-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "حرکت کردن وسیلهٔ نقلیه",
      "answers": [
        "abfahren"
      ],
      "why": "Der Bus fährt um sieben ab."
    },
    {
      "id": "a22-17-v-28-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رسیدن",
      "answers": [
        "ankommen"
      ],
      "why": "Wir kommen am Nachmittag an."
    },
    {
      "id": "a22-17-v-29-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "عوض کردن وسیلهٔ نقلیه",
      "answers": [
        "umsteigen"
      ],
      "why": "In Köln müssen wir umsteigen."
    },
    {
      "id": "a22-17-v-30-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سوار شدن",
      "answers": [
        "einsteigen"
      ],
      "why": "Bitte steigen Sie vorne ein."
    },
    {
      "id": "a22-17-v-31-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پیاده شدن",
      "answers": [
        "aussteigen"
      ],
      "why": "Wir steigen am Hauptbahnhof aus."
    },
    {
      "id": "a22-17-v-32-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پیاده‌روی در طبیعت",
      "answers": [
        "wandern"
      ],
      "why": "Am Wochenende wandern wir im Gebirge."
    },
    {
      "id": "a22-17-v-33-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "چادر زدن؛ در چادر ماندن",
      "answers": [
        "zelten"
      ],
      "why": "Im Sommer zelten wir am See."
    },
    {
      "id": "a22-17-v-34-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شب اقامت کردن",
      "answers": [
        "übernachten"
      ],
      "why": "Wir übernachten in einer Pension."
    },
    {
      "id": "a22-17-v-35-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بازدید کردن",
      "answers": [
        "besichtigen"
      ],
      "why": "Morgen besichtigen wir die Altstadt."
    },
    {
      "id": "a22-17-v-36-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برنامه‌ریزی کردن",
      "answers": [
        "planen"
      ],
      "why": "Wir planen eine Reise nach Italien."
    },
    {
      "id": "a22-17-v-37-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رزرو کردن",
      "answers": [
        "buchen"
      ],
      "why": "Ich buche ein Zimmer am Meer."
    },
    {
      "id": "a22-17-v-38-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "همراه بردن",
      "answers": [
        "mitnehmen"
      ],
      "why": "Nimm bitte eine Jacke mit."
    },
    {
      "id": "a22-17-v-39-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "استراحت و تجدید قوا کردن",
      "answers": [
        "sich erholen"
      ],
      "why": "Im Urlaub möchte ich mich erholen."
    },
    {
      "id": "a22-17-v-40-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گذراندن زمان",
      "answers": [
        "verbringen"
      ],
      "why": "Wir verbringen drei Tage auf der Insel."
    },
    {
      "id": "a22-17-v-41-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در راه",
      "answers": [
        "unterwegs"
      ],
      "why": "Unterwegs machen wir eine Pause."
    },
    {
      "id": "a22-17-v-42-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مستقیم؛ بدون واسطه",
      "answers": [
        "direkt"
      ],
      "why": "Der Zug fährt direkt nach Hamburg."
    },
    {
      "id": "a22-17-v-43-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "راحت",
      "answers": [
        "bequem"
      ],
      "why": "Der Sitz im Zug ist bequem."
    },
    {
      "id": "a22-17-v-44-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مقرون‌به‌صرفه",
      "answers": [
        "günstig"
      ],
      "why": "Die Fahrkarte war günstig."
    },
    {
      "id": "a22-17-v-45-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به‌موقع",
      "answers": [
        "rechtzeitig",
        "pünktlich"
      ],
      "why": "Wir kommen rechtzeitig am Bahnhof an."
    },
    {
      "id": "a22-17-v-46-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رفت‌وبرگشت",
      "answers": [
        "hin und zurück"
      ],
      "why": "Ich brauche eine Fahrkarte hin und zurück."
    },
    {
      "id": "a22-17-v-47-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به سمت دریا",
      "answers": [
        "ans Meer"
      ],
      "why": "Im August fahren wir ans Meer."
    },
    {
      "id": "a22-17-v-48-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کنار دریا",
      "answers": [
        "am Meer"
      ],
      "why": "Unser Hotel liegt am Meer."
    },
    {
      "id": "a22-17-v-49-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به کوه‌ها",
      "answers": [
        "in die Berge"
      ],
      "why": "Wir fahren morgen in die Berge."
    },
    {
      "id": "a22-17-v-50-recall",
      "lesson": 17,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در روستا و مناطق غیرشهری",
      "answers": [
        "auf dem Land"
      ],
      "why": "Meine Großeltern wohnen auf dem Land."
    },
    {
      "id": "a22-18-v-01-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "هوا؛ وضعیت جوی",
      "answers": [
        "das Wetter",
        "Wetter"
      ],
      "why": "Das Wetter ändert sich schnell."
    },
    {
      "id": "a22-18-v-01-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wetter",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Wetter",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-02-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اقلیم",
      "answers": [
        "das Klima",
        "Klima"
      ],
      "why": "Das Klima ist hier mild."
    },
    {
      "id": "a22-18-v-02-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Klima",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Klima",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-02-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Klima",
      "answers": [
        "Klimata",
        "die Klimata",
        "Klimas",
        "die Klimas"
      ],
      "why": "جمع: die Klimata"
    },
    {
      "id": "a22-18-v-03-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خورشید",
      "answers": [
        "die Sonne",
        "Sonne"
      ],
      "why": "Heute scheint die Sonne."
    },
    {
      "id": "a22-18-v-03-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Sonne",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Sonne",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-03-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Sonne",
      "answers": [
        "Sonnen",
        "die Sonnen"
      ],
      "why": "جمع: die Sonnen"
    },
    {
      "id": "a22-18-v-04-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گرما",
      "answers": [
        "die Wärme",
        "Wärme"
      ],
      "why": "Ich freue mich auf die Wärme."
    },
    {
      "id": "a22-18-v-04-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wärme",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Wärme",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-05-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گرمای شدید",
      "answers": [
        "die Hitze",
        "Hitze"
      ],
      "why": "Bei dieser Hitze bleibe ich zu Hause."
    },
    {
      "id": "a22-18-v-05-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Hitze",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Hitze",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-06-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سرما",
      "answers": [
        "die Kälte",
        "Kälte"
      ],
      "why": "Die Kälte stört mich nicht."
    },
    {
      "id": "a22-18-v-06-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kälte",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Kälte",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-07-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "باران",
      "answers": [
        "der Regen",
        "Regen"
      ],
      "why": "Der Regen hört am Abend auf."
    },
    {
      "id": "a22-18-v-07-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Regen",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Regen",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-08-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برف",
      "answers": [
        "der Schnee",
        "Schnee"
      ],
      "why": "Auf den Bergen liegt Schnee."
    },
    {
      "id": "a22-18-v-08-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Schnee",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Schnee",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-09-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "باد",
      "answers": [
        "der Wind",
        "Wind"
      ],
      "why": "Der Wind kommt aus Westen."
    },
    {
      "id": "a22-18-v-09-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wind",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Wind",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-09-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Wind",
      "answers": [
        "Winde",
        "die Winde"
      ],
      "why": "جمع: die Winde"
    },
    {
      "id": "a22-18-v-10-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توفان",
      "answers": [
        "der Sturm",
        "Sturm"
      ],
      "why": "Der Sturm hat in der Nacht begonnen."
    },
    {
      "id": "a22-18-v-10-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Sturm",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Sturm",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-10-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Sturm",
      "answers": [
        "Stürme",
        "die Stürme"
      ],
      "why": "جمع: die Stürme"
    },
    {
      "id": "a22-18-v-11-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ابر",
      "answers": [
        "die Wolke",
        "Wolke"
      ],
      "why": "Eine dunkle Wolke zieht auf."
    },
    {
      "id": "a22-18-v-11-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wolke",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Wolke",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-11-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Wolke",
      "answers": [
        "Wolken",
        "die Wolken"
      ],
      "why": "جمع: die Wolken"
    },
    {
      "id": "a22-18-v-12-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مه",
      "answers": [
        "der Nebel",
        "Nebel"
      ],
      "why": "Wegen des Nebels sehen wir wenig."
    },
    {
      "id": "a22-18-v-12-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Nebel",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Nebel",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-13-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رعدوبرق",
      "answers": [
        "das Gewitter",
        "Gewitter"
      ],
      "why": "Am Nachmittag gibt es ein Gewitter."
    },
    {
      "id": "a22-18-v-13-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gewitter",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Gewitter",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-13-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Gewitter",
      "answers": [
        "Gewitter",
        "die Gewitter"
      ],
      "why": "جمع: die Gewitter"
    },
    {
      "id": "a22-18-v-14-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برق آسمان",
      "answers": [
        "der Blitz",
        "Blitz"
      ],
      "why": "Ein Blitz leuchtet über dem See."
    },
    {
      "id": "a22-18-v-14-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Blitz",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Blitz",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-14-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Blitz",
      "answers": [
        "Blitze",
        "die Blitze"
      ],
      "why": "جمع: die Blitze"
    },
    {
      "id": "a22-18-v-15-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صدای رعد",
      "answers": [
        "der Donner",
        "Donner"
      ],
      "why": "Nach dem Blitz hören wir Donner."
    },
    {
      "id": "a22-18-v-15-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Donner",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Donner",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-16-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دما",
      "answers": [
        "die Temperatur",
        "Temperatur"
      ],
      "why": "Die Temperatur steigt auf zwanzig Grad."
    },
    {
      "id": "a22-18-v-16-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Temperatur",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Temperatur",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-16-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Temperatur",
      "answers": [
        "Temperaturen",
        "die Temperaturen"
      ],
      "why": "جمع: die Temperaturen"
    },
    {
      "id": "a22-18-v-17-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گزارش هوا",
      "answers": [
        "der Wetterbericht",
        "Wetterbericht"
      ],
      "why": "Ich höre morgens den Wetterbericht."
    },
    {
      "id": "a22-18-v-17-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wetterbericht",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Wetterbericht",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-17-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Wetterbericht",
      "answers": [
        "Wetterberichte",
        "die Wetterberichte"
      ],
      "why": "جمع: die Wetterberichte"
    },
    {
      "id": "a22-18-v-18-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پیش‌بینی",
      "answers": [
        "die Vorhersage",
        "Vorhersage"
      ],
      "why": "Die Vorhersage für morgen ist gut."
    },
    {
      "id": "a22-18-v-18-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Vorhersage",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Vorhersage",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-18-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Vorhersage",
      "answers": [
        "Vorhersagen",
        "die Vorhersagen"
      ],
      "why": "جمع: die Vorhersagen"
    },
    {
      "id": "a22-18-v-19-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فصل سال",
      "answers": [
        "die Jahreszeit",
        "Jahreszeit"
      ],
      "why": "Welche Jahreszeit magst du?"
    },
    {
      "id": "a22-18-v-19-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Jahreszeit",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Jahreszeit",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-19-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Jahreszeit",
      "answers": [
        "Jahreszeiten",
        "die Jahreszeiten"
      ],
      "why": "جمع: die Jahreszeiten"
    },
    {
      "id": "a22-18-v-20-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بهار",
      "answers": [
        "der Frühling",
        "Frühling"
      ],
      "why": "Im Frühling wird es wärmer."
    },
    {
      "id": "a22-18-v-20-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Frühling",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Frühling",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-21-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تابستان",
      "answers": [
        "der Sommer",
        "Sommer"
      ],
      "why": "Im Sommer schwimmen wir oft."
    },
    {
      "id": "a22-18-v-21-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Sommer",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Sommer",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-22-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پاییز",
      "answers": [
        "der Herbst",
        "Herbst"
      ],
      "why": "Im Herbst fallen die Blätter."
    },
    {
      "id": "a22-18-v-22-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Herbst",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Herbst",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-23-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "زمستان",
      "answers": [
        "der Winter",
        "Winter"
      ],
      "why": "Im Winter sind die Tage kurz."
    },
    {
      "id": "a22-18-v-23-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Winter",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Winter",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-24-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "چتر باران",
      "answers": [
        "der Regenschirm",
        "Regenschirm"
      ],
      "why": "Ich nehme meinen Regenschirm mit."
    },
    {
      "id": "a22-18-v-24-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Regenschirm",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Regenschirm",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-24-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Regenschirm",
      "answers": [
        "Regenschirme",
        "die Regenschirme"
      ],
      "why": "جمع: die Regenschirme"
    },
    {
      "id": "a22-18-v-25-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بارانی",
      "answers": [
        "die Regenjacke",
        "Regenjacke"
      ],
      "why": "Bei Regen trage ich eine Regenjacke."
    },
    {
      "id": "a22-18-v-25-article",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Regenjacke",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Regenjacke",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-18-v-25-plural",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Regenjacke",
      "answers": [
        "Regenjacken",
        "die Regenjacken"
      ],
      "why": "جمع: die Regenjacken"
    },
    {
      "id": "a22-18-v-26-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "باران باریدن",
      "answers": [
        "regnen"
      ],
      "why": "Morgen regnet es."
    },
    {
      "id": "a22-18-v-27-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برف باریدن",
      "answers": [
        "schneien"
      ],
      "why": "In den Bergen schneit es."
    },
    {
      "id": "a22-18-v-28-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تابیدن",
      "answers": [
        "scheinen"
      ],
      "why": "Die Sonne scheint wieder."
    },
    {
      "id": "a22-18-v-29-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سرد بودن؛ یخ زدن",
      "answers": [
        "frieren"
      ],
      "why": "Ich friere ohne Jacke."
    },
    {
      "id": "a22-18-v-30-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بالا رفتن",
      "answers": [
        "steigen"
      ],
      "why": "Die Temperaturen steigen."
    },
    {
      "id": "a22-18-v-31-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پایین آمدن",
      "answers": [
        "sinken"
      ],
      "why": "Nachts sinkt die Temperatur."
    },
    {
      "id": "a22-18-v-32-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "منتظر چیزی بودن",
      "answers": [
        "warten auf"
      ],
      "why": "Wir warten auf besseres Wetter."
    },
    {
      "id": "a22-18-v-33-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مشتاق اتفاق آینده بودن",
      "answers": [
        "sich freuen auf"
      ],
      "why": "Ich freue mich auf den Sommer."
    },
    {
      "id": "a22-18-v-34-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از چیزی خوشحال بودن",
      "answers": [
        "sich freuen über"
      ],
      "why": "Wir freuen uns über die Sonne."
    },
    {
      "id": "a22-18-v-35-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "علاقه‌مند به چیزی بودن",
      "answers": [
        "sich interessieren für"
      ],
      "why": "Er interessiert sich für das Klima."
    },
    {
      "id": "a22-18-v-36-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فکر کردن به",
      "answers": [
        "denken an"
      ],
      "why": "Ich denke an unseren Urlaub."
    },
    {
      "id": "a22-18-v-37-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صحبت کردن دربارهٔ",
      "answers": [
        "sprechen über"
      ],
      "why": "Wir sprechen über das Wetter."
    },
    {
      "id": "a22-18-v-38-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رؤیای چیزی را داشتن",
      "answers": [
        "träumen von"
      ],
      "why": "Sie träumt von einer Reise ans Meer."
    },
    {
      "id": "a22-18-v-39-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از چیزی حرص خوردن",
      "answers": [
        "sich ärgern über"
      ],
      "why": "Ich ärgere mich über den Regen."
    },
    {
      "id": "a22-18-v-40-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شکایت کردن از",
      "answers": [
        "sich beschweren über"
      ],
      "why": "Der Gast beschwert sich über die Hitze."
    },
    {
      "id": "a22-18-v-41-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آفتابی",
      "answers": [
        "sonnig"
      ],
      "why": "Morgen wird es sonnig."
    },
    {
      "id": "a22-18-v-42-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ابری",
      "answers": [
        "bewölkt"
      ],
      "why": "Heute ist es stark bewölkt."
    },
    {
      "id": "a22-18-v-43-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پرباد",
      "answers": [
        "windig"
      ],
      "why": "An der Küste ist es windig."
    },
    {
      "id": "a22-18-v-44-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مه‌آلود",
      "answers": [
        "neblig"
      ],
      "why": "Am Morgen ist es neblig."
    },
    {
      "id": "a22-18-v-45-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خشک",
      "answers": [
        "trocken"
      ],
      "why": "Die Straße ist wieder trocken."
    },
    {
      "id": "a22-18-v-46-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مرطوب",
      "answers": [
        "feucht"
      ],
      "why": "Die Luft ist warm und feucht."
    },
    {
      "id": "a22-18-v-47-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "معتدل",
      "answers": [
        "mild"
      ],
      "why": "Der Winter war dieses Jahr mild."
    },
    {
      "id": "a22-18-v-48-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "منتظر چه هستی؟",
      "answers": [
        "Worauf wartest du?",
        "Worauf wartest du"
      ],
      "why": "Worauf wartest du? Auf den Bus."
    },
    {
      "id": "a22-18-v-49-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مشتاق آن هستم.",
      "answers": [
        "Darauf freue ich mich."
      ],
      "why": "Bald beginnt der Urlaub. Darauf freue ich mich."
    },
    {
      "id": "a22-18-v-50-recall",
      "lesson": 18,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دربارهٔ آن صحبت می‌کنیم.",
      "answers": [
        "Darüber sprechen wir."
      ],
      "why": "Das Wetter ist wichtig. Darüber sprechen wir."
    },
    {
      "id": "a22-19-v-01-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رویداد؛ برنامهٔ فرهنگی",
      "answers": [
        "die Veranstaltung",
        "Veranstaltung"
      ],
      "why": "Die Veranstaltung beginnt um acht."
    },
    {
      "id": "a22-19-v-01-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Veranstaltung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Veranstaltung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-01-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Veranstaltung",
      "answers": [
        "Veranstaltungen",
        "die Veranstaltungen"
      ],
      "why": "جمع: die Veranstaltungen"
    },
    {
      "id": "a22-19-v-02-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کنسرت",
      "answers": [
        "das Konzert",
        "Konzert"
      ],
      "why": "Heute gehen wir zu einem Konzert."
    },
    {
      "id": "a22-19-v-02-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Konzert",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Konzert",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-02-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Konzert",
      "answers": [
        "Konzerte",
        "die Konzerte"
      ],
      "why": "جمع: die Konzerte"
    },
    {
      "id": "a22-19-v-03-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تئاتر",
      "answers": [
        "das Theater",
        "Theater"
      ],
      "why": "Das Theater liegt im Zentrum."
    },
    {
      "id": "a22-19-v-03-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Theater",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Theater",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-03-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Theater",
      "answers": [
        "Theater",
        "die Theater"
      ],
      "why": "جمع: die Theater"
    },
    {
      "id": "a22-19-v-04-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سینما",
      "answers": [
        "das Kino",
        "Kino"
      ],
      "why": "Wir treffen uns vor dem Kino."
    },
    {
      "id": "a22-19-v-04-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kino",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Kino",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-04-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Kino",
      "answers": [
        "Kinos",
        "die Kinos"
      ],
      "why": "جمع: die Kinos"
    },
    {
      "id": "a22-19-v-05-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "موزه",
      "answers": [
        "das Museum",
        "Museum"
      ],
      "why": "Das Museum schließt um sechs."
    },
    {
      "id": "a22-19-v-05-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Museum",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Museum",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-05-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Museum",
      "answers": [
        "Museen",
        "die Museen"
      ],
      "why": "جمع: die Museen"
    },
    {
      "id": "a22-19-v-06-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نمایشگاه",
      "answers": [
        "die Ausstellung",
        "Ausstellung"
      ],
      "why": "Die Ausstellung zeigt moderne Kunst."
    },
    {
      "id": "a22-19-v-06-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ausstellung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Ausstellung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-06-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Ausstellung",
      "answers": [
        "Ausstellungen",
        "die Ausstellungen"
      ],
      "why": "جمع: die Ausstellungen"
    },
    {
      "id": "a22-19-v-07-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "جلسهٔ کتاب‌خوانی نویسنده",
      "answers": [
        "die Lesung",
        "Lesung"
      ],
      "why": "Die Lesung findet in der Bibliothek statt."
    },
    {
      "id": "a22-19-v-07-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Lesung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Lesung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-07-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Lesung",
      "answers": [
        "Lesungen",
        "die Lesungen"
      ],
      "why": "جمع: die Lesungen"
    },
    {
      "id": "a22-19-v-08-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شعر",
      "answers": [
        "das Gedicht",
        "Gedicht"
      ],
      "why": "Sie trägt ein kurzes Gedicht vor."
    },
    {
      "id": "a22-19-v-08-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gedicht",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Gedicht",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-08-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Gedicht",
      "answers": [
        "Gedichte",
        "die Gedichte"
      ],
      "why": "جمع: die Gedichte"
    },
    {
      "id": "a22-19-v-09-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صحنه",
      "answers": [
        "die Bühne",
        "Bühne"
      ],
      "why": "Auf der Bühne stehen drei Musiker."
    },
    {
      "id": "a22-19-v-09-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Bühne",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Bühne",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-09-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Bühne",
      "answers": [
        "Bühnen",
        "die Bühnen"
      ],
      "why": "جمع: die Bühnen"
    },
    {
      "id": "a22-19-v-10-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ورود؛ هزینهٔ ورود",
      "answers": [
        "der Eintritt",
        "Eintritt"
      ],
      "why": "Der Eintritt ist heute frei."
    },
    {
      "id": "a22-19-v-10-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Eintritt",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Eintritt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-11-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بلیط ورودی",
      "answers": [
        "die Eintrittskarte",
        "Eintrittskarte"
      ],
      "why": "Ich kaufe zwei Eintrittskarten."
    },
    {
      "id": "a22-19-v-11-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Eintrittskarte",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Eintrittskarte",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-11-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Eintrittskarte",
      "answers": [
        "Eintrittskarten",
        "die Eintrittskarten"
      ],
      "why": "جمع: die Eintrittskarten"
    },
    {
      "id": "a22-19-v-12-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گیشهٔ شب اجرا",
      "answers": [
        "die Abendkasse",
        "Abendkasse"
      ],
      "why": "An der Abendkasse gibt es noch Karten."
    },
    {
      "id": "a22-19-v-12-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Abendkasse",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Abendkasse",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-12-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Abendkasse",
      "answers": [
        "Abendkassen",
        "die Abendkassen"
      ],
      "why": "جمع: die Abendkassen"
    },
    {
      "id": "a22-19-v-13-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اجرا؛ سانس نمایش",
      "answers": [
        "die Vorstellung",
        "Vorstellung"
      ],
      "why": "Die nächste Vorstellung beginnt um neun."
    },
    {
      "id": "a22-19-v-13-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Vorstellung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Vorstellung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-13-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Vorstellung",
      "answers": [
        "Vorstellungen",
        "die Vorstellungen"
      ],
      "why": "جمع: die Vorstellungen"
    },
    {
      "id": "a22-19-v-14-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تماشاگران",
      "answers": [
        "das Publikum",
        "Publikum"
      ],
      "why": "Das Publikum klatscht."
    },
    {
      "id": "a22-19-v-14-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Publikum",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Publikum",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-15-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "هنرمند مرد",
      "answers": [
        "der Künstler",
        "Künstler"
      ],
      "why": "Der Künstler erklärt sein Bild."
    },
    {
      "id": "a22-19-v-15-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Künstler",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Künstler",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-15-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Künstler",
      "answers": [
        "Künstler",
        "die Künstler"
      ],
      "why": "جمع: die Künstler"
    },
    {
      "id": "a22-19-v-16-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "هنرمند زن",
      "answers": [
        "die Künstlerin",
        "Künstlerin"
      ],
      "why": "Die Künstlerin lebt in Berlin."
    },
    {
      "id": "a22-19-v-16-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Künstlerin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Künstlerin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-16-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Künstlerin",
      "answers": [
        "Künstlerinnen",
        "die Künstlerinnen"
      ],
      "why": "جمع: die Künstlerinnen"
    },
    {
      "id": "a22-19-v-17-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گالری",
      "answers": [
        "die Galerie",
        "Galerie"
      ],
      "why": "In der Galerie hängen neue Bilder."
    },
    {
      "id": "a22-19-v-17-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Galerie",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Galerie",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-17-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Galerie",
      "answers": [
        "Galerien",
        "die Galerien"
      ],
      "why": "جمع: die Galerien"
    },
    {
      "id": "a22-19-v-18-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "جشنواره",
      "answers": [
        "das Festival",
        "Festival"
      ],
      "why": "Das Festival dauert drei Tage."
    },
    {
      "id": "a22-19-v-18-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Festival",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Festival",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-18-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Festival",
      "answers": [
        "Festivals",
        "die Festivals"
      ],
      "why": "جمع: die Festivals"
    },
    {
      "id": "a22-19-v-19-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اپرا",
      "answers": [
        "die Oper",
        "Oper"
      ],
      "why": "Meine Eltern besuchen eine Oper."
    },
    {
      "id": "a22-19-v-19-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Oper",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Oper",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-19-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Oper",
      "answers": [
        "Opern",
        "die Opern"
      ],
      "why": "جمع: die Opern"
    },
    {
      "id": "a22-19-v-20-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رقص",
      "answers": [
        "der Tanz",
        "Tanz"
      ],
      "why": "Dieser Tanz kommt aus Spanien."
    },
    {
      "id": "a22-19-v-20-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Tanz",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Tanz",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-20-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Tanz",
      "answers": [
        "Tänze",
        "die Tänze"
      ],
      "why": "جمع: die Tänze"
    },
    {
      "id": "a22-19-v-21-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بازدید با راهنما",
      "answers": [
        "die Führung",
        "Führung"
      ],
      "why": "Die Führung durch das Museum ist kostenlos."
    },
    {
      "id": "a22-19-v-21-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Führung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Führung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-21-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Führung",
      "answers": [
        "Führungen",
        "die Führungen"
      ],
      "why": "جمع: die Führungen"
    },
    {
      "id": "a22-19-v-22-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برنامه",
      "answers": [
        "das Programm",
        "Programm"
      ],
      "why": "Das Programm bietet viel Abwechslung."
    },
    {
      "id": "a22-19-v-22-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Programm",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Programm",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-22-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Programm",
      "answers": [
        "Programme",
        "die Programme"
      ],
      "why": "جمع: die Programme"
    },
    {
      "id": "a22-19-v-23-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پیشنهاد",
      "answers": [
        "der Vorschlag",
        "Vorschlag"
      ],
      "why": "Dein Vorschlag gefällt mir."
    },
    {
      "id": "a22-19-v-23-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Vorschlag",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Vorschlag",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-23-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Vorschlag",
      "answers": [
        "Vorschläge",
        "die Vorschläge"
      ],
      "why": "جمع: die Vorschläge"
    },
    {
      "id": "a22-19-v-24-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "محل قرار",
      "answers": [
        "der Treffpunkt",
        "Treffpunkt"
      ],
      "why": "Unser Treffpunkt ist der Eingang."
    },
    {
      "id": "a22-19-v-24-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Treffpunkt",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Treffpunkt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-24-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Treffpunkt",
      "answers": [
        "Treffpunkte",
        "die Treffpunkte"
      ],
      "why": "جمع: die Treffpunkte"
    },
    {
      "id": "a22-19-v-25-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "وقفه؛ استراحت",
      "answers": [
        "die Pause",
        "Pause"
      ],
      "why": "In der Pause trinken wir Wasser."
    },
    {
      "id": "a22-19-v-25-article",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Pause",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Pause",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-19-v-25-plural",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Pause",
      "answers": [
        "Pausen",
        "die Pausen"
      ],
      "why": "جمع: die Pausen"
    },
    {
      "id": "a22-19-v-26-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پیشنهاد دادن",
      "answers": [
        "vorschlagen"
      ],
      "why": "Ich schlage einen Museumsbesuch vor."
    },
    {
      "id": "a22-19-v-27-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "موافقت کردن",
      "answers": [
        "zustimmen"
      ],
      "why": "Ich stimme deinem Vorschlag zu."
    },
    {
      "id": "a22-19-v-28-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رد کردن",
      "answers": [
        "ablehnen"
      ],
      "why": "Sie lehnt die Einladung ab."
    },
    {
      "id": "a22-19-v-29-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "متقاعد کردن",
      "answers": [
        "überzeugen"
      ],
      "why": "Die guten Kritiken überzeugen mich."
    },
    {
      "id": "a22-19-v-30-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به وجد آوردن",
      "answers": [
        "begeistern"
      ],
      "why": "Die Musik begeistert das Publikum."
    },
    {
      "id": "a22-19-v-31-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "قرار گذاشتن",
      "answers": [
        "sich verabreden"
      ],
      "why": "Wir verabreden uns für Samstag."
    },
    {
      "id": "a22-19-v-32-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برگزار شدن",
      "answers": [
        "stattfinden"
      ],
      "why": "Die Lesung findet im Park statt."
    },
    {
      "id": "a22-19-v-33-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اجرا داشتن",
      "answers": [
        "auftreten"
      ],
      "why": "Die Sängerin tritt heute auf."
    },
    {
      "id": "a22-19-v-34-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از رو خواندن؛ اجرا کردن متن",
      "answers": [
        "vortragen"
      ],
      "why": "Er trägt ein Gedicht vor."
    },
    {
      "id": "a22-19-v-35-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دست زدن",
      "answers": [
        "klatschen"
      ],
      "why": "Nach dem Lied klatschen alle."
    },
    {
      "id": "a22-19-v-36-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رزرو کردن",
      "answers": [
        "reservieren"
      ],
      "why": "Ich reserviere zwei Plätze."
    },
    {
      "id": "a22-19-v-37-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توصیه کردن",
      "answers": [
        "empfehlen"
      ],
      "why": "Kannst du mir eine Ausstellung empfehlen?"
    },
    {
      "id": "a22-19-v-38-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تصمیم گرفتن",
      "answers": [
        "sich entscheiden"
      ],
      "why": "Wir entscheiden uns für das Konzert."
    },
    {
      "id": "a22-19-v-39-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بازدید؛ شرکت کردن",
      "answers": [
        "besuchen"
      ],
      "why": "Wir besuchen eine Ausstellung."
    },
    {
      "id": "a22-19-v-40-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برگشتن",
      "answers": [
        "zurückkommen"
      ],
      "why": "Wann kommst du vom Konzert zurück?"
    },
    {
      "id": "a22-19-v-41-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تمام‌شده از نظر بلیط",
      "answers": [
        "ausverkauft"
      ],
      "why": "Leider ist die Vorstellung ausverkauft."
    },
    {
      "id": "a22-19-v-42-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رایگان",
      "answers": [
        "kostenlos",
        "gratis"
      ],
      "why": "Die Führung ist kostenlos."
    },
    {
      "id": "a22-19-v-43-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دیدنی",
      "answers": [
        "sehenswert"
      ],
      "why": "Das Museum ist wirklich sehenswert."
    },
    {
      "id": "a22-19-v-44-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تأثیرگذار",
      "answers": [
        "beeindruckend"
      ],
      "why": "Die Bilder sind beeindruckend."
    },
    {
      "id": "a22-19-v-45-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ترجیحاً",
      "answers": [
        "lieber"
      ],
      "why": "Ich würde lieber ins Kino gehen."
    },
    {
      "id": "a22-19-v-46-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از آنجا",
      "answers": [
        "von dort"
      ],
      "why": "Von dort gehen wir zusammen weiter."
    },
    {
      "id": "a22-19-v-47-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از داخل موزه",
      "answers": [
        "aus dem Museum"
      ],
      "why": "Die Besucher kommen aus dem Museum."
    },
    {
      "id": "a22-19-v-48-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از کنسرت",
      "answers": [
        "vom Konzert"
      ],
      "why": "Wir kommen gerade vom Konzert."
    },
    {
      "id": "a22-19-v-49-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خوب به نظر می‌رسد.",
      "answers": [
        "Das klingt gut.",
        "Das hört sich gut an."
      ],
      "why": "Ein Konzert im Park? Das klingt gut."
    },
    {
      "id": "a22-19-v-50-recall",
      "lesson": 19,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "هنوز نمی‌دانم.",
      "answers": [
        "Ich weiß noch nicht."
      ],
      "why": "Vielleicht komme ich mit. Ich weiß noch nicht."
    },
    {
      "id": "a22-20-v-01-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کتاب",
      "answers": [
        "das Buch",
        "Buch"
      ],
      "why": "Dieses Buch habe ich zweimal gelesen."
    },
    {
      "id": "a22-20-v-01-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Buch",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Buch",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-01-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Buch",
      "answers": [
        "Bücher",
        "die Bücher"
      ],
      "why": "جمع: die Bücher"
    },
    {
      "id": "a22-20-v-02-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رمان",
      "answers": [
        "der Roman",
        "Roman"
      ],
      "why": "Der Roman spielt in einem kleinen Dorf."
    },
    {
      "id": "a22-20-v-02-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Roman",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Roman",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-02-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Roman",
      "answers": [
        "Romane",
        "die Romane"
      ],
      "why": "جمع: die Romane"
    },
    {
      "id": "a22-20-v-03-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کتاب یا داستان مصور",
      "answers": [
        "der Comic",
        "Comic"
      ],
      "why": "Als Kind las ich gern Comics."
    },
    {
      "id": "a22-20-v-03-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Comic",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Comic",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-03-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Comic",
      "answers": [
        "Comics",
        "die Comics"
      ],
      "why": "جمع: die Comics"
    },
    {
      "id": "a22-20-v-04-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "روزنامه",
      "answers": [
        "die Zeitung",
        "Zeitung"
      ],
      "why": "Mein Vater liest morgens die Zeitung."
    },
    {
      "id": "a22-20-v-04-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Zeitung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Zeitung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-04-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Zeitung",
      "answers": [
        "Zeitungen",
        "die Zeitungen"
      ],
      "why": "جمع: die Zeitungen"
    },
    {
      "id": "a22-20-v-05-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مجله",
      "answers": [
        "die Zeitschrift",
        "Zeitschrift"
      ],
      "why": "Die Zeitschrift erscheint jeden Monat."
    },
    {
      "id": "a22-20-v-05-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Zeitschrift",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Zeitschrift",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-05-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Zeitschrift",
      "answers": [
        "Zeitschriften",
        "die Zeitschriften"
      ],
      "why": "جمع: die Zeitschriften"
    },
    {
      "id": "a22-20-v-06-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مقاله",
      "answers": [
        "der Artikel",
        "Artikel"
      ],
      "why": "Der Artikel handelt von einer Reise."
    },
    {
      "id": "a22-20-v-06-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Artikel",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Artikel",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-06-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Artikel",
      "answers": [
        "Artikel",
        "die Artikel"
      ],
      "why": "جمع: die Artikel"
    },
    {
      "id": "a22-20-v-07-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "عنوان متن",
      "answers": [
        "die Überschrift",
        "Überschrift"
      ],
      "why": "Lies zuerst die Überschrift."
    },
    {
      "id": "a22-20-v-07-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Überschrift",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Überschrift",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-07-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Überschrift",
      "answers": [
        "Überschriften",
        "die Überschriften"
      ],
      "why": "جمع: die Überschriften"
    },
    {
      "id": "a22-20-v-08-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صفحه",
      "answers": [
        "die Seite",
        "Seite"
      ],
      "why": "Das Buch hat zweihundert Seiten."
    },
    {
      "id": "a22-20-v-08-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Seite",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Seite",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-08-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Seite",
      "answers": [
        "Seiten",
        "die Seiten"
      ],
      "why": "جمع: die Seiten"
    },
    {
      "id": "a22-20-v-09-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فصل کتاب",
      "answers": [
        "das Kapitel",
        "Kapitel"
      ],
      "why": "Das letzte Kapitel ist spannend."
    },
    {
      "id": "a22-20-v-09-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kapitel",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Kapitel",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-09-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Kapitel",
      "answers": [
        "Kapitel",
        "die Kapitel"
      ],
      "why": "جمع: die Kapitel"
    },
    {
      "id": "a22-20-v-10-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "داستان",
      "answers": [
        "die Geschichte",
        "Geschichte"
      ],
      "why": "Die Geschichte endet gut."
    },
    {
      "id": "a22-20-v-10-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Geschichte",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Geschichte",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-10-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Geschichte",
      "answers": [
        "Geschichten",
        "die Geschichten"
      ],
      "why": "جمع: die Geschichten"
    },
    {
      "id": "a22-20-v-11-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "افسانه؛ قصه",
      "answers": [
        "das Märchen",
        "Märchen"
      ],
      "why": "Die Oma erzählt ein Märchen."
    },
    {
      "id": "a22-20-v-11-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Märchen",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Märchen",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-11-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Märchen",
      "answers": [
        "Märchen",
        "die Märchen"
      ],
      "why": "جمع: die Märchen"
    },
    {
      "id": "a22-20-v-12-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کتاب غیرداستانی",
      "answers": [
        "das Sachbuch",
        "Sachbuch"
      ],
      "why": "Das Sachbuch erklärt die Natur."
    },
    {
      "id": "a22-20-v-12-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Sachbuch",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Sachbuch",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-12-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Sachbuch",
      "answers": [
        "Sachbücher",
        "die Sachbücher"
      ],
      "why": "جمع: die Sachbücher"
    },
    {
      "id": "a22-20-v-13-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کتاب صوتی",
      "answers": [
        "das Hörbuch",
        "Hörbuch"
      ],
      "why": "Im Zug höre ich ein Hörbuch."
    },
    {
      "id": "a22-20-v-13-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Hörbuch",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Hörbuch",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-13-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Hörbuch",
      "answers": [
        "Hörbücher",
        "die Hörbücher"
      ],
      "why": "جمع: die Hörbücher"
    },
    {
      "id": "a22-20-v-14-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کتاب الکترونیکی",
      "answers": [
        "das E-Book",
        "E-Book",
        "Ebook",
        "das Ebook"
      ],
      "why": "Ich lade ein E-Book herunter."
    },
    {
      "id": "a22-20-v-14-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "E-Book",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das E-Book",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-14-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das E-Book",
      "answers": [
        "E-Books",
        "die E-Books"
      ],
      "why": "جمع: die E-Books"
    },
    {
      "id": "a22-20-v-15-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کتابخانه",
      "answers": [
        "die Bibliothek",
        "Bibliothek"
      ],
      "why": "Die Bibliothek öffnet um zehn."
    },
    {
      "id": "a22-20-v-15-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Bibliothek",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Bibliothek",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-15-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Bibliothek",
      "answers": [
        "Bibliotheken",
        "die Bibliotheken"
      ],
      "why": "جمع: die Bibliotheken"
    },
    {
      "id": "a22-20-v-16-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کتاب‌فروشی",
      "answers": [
        "die Buchhandlung",
        "Buchhandlung"
      ],
      "why": "In der Buchhandlung finde ich ein Geschenk."
    },
    {
      "id": "a22-20-v-16-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Buchhandlung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Buchhandlung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-16-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Buchhandlung",
      "answers": [
        "Buchhandlungen",
        "die Buchhandlungen"
      ],
      "why": "جمع: die Buchhandlungen"
    },
    {
      "id": "a22-20-v-17-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نویسنده مرد",
      "answers": [
        "der Autor",
        "Autor"
      ],
      "why": "Der Autor stellt seinen Roman vor."
    },
    {
      "id": "a22-20-v-17-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Autor",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Autor",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-17-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Autor",
      "answers": [
        "Autoren",
        "die Autoren"
      ],
      "why": "جمع: die Autoren"
    },
    {
      "id": "a22-20-v-18-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نویسنده زن",
      "answers": [
        "die Autorin",
        "Autorin"
      ],
      "why": "Die Autorin liest aus ihrem neuen Buch."
    },
    {
      "id": "a22-20-v-18-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Autorin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Autorin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-18-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Autorin",
      "answers": [
        "Autorinnen",
        "die Autorinnen"
      ],
      "why": "جمع: die Autorinnen"
    },
    {
      "id": "a22-20-v-19-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "انتشارات",
      "answers": [
        "der Verlag",
        "Verlag"
      ],
      "why": "Der Verlag veröffentlicht Kinderbücher."
    },
    {
      "id": "a22-20-v-19-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Verlag",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Verlag",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-19-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Verlag",
      "answers": [
        "Verlage",
        "die Verlage"
      ],
      "why": "جمع: die Verlage"
    },
    {
      "id": "a22-20-v-20-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خواننده مرد",
      "answers": [
        "der Leser",
        "Leser"
      ],
      "why": "Der Leser kennt das Ende noch nicht."
    },
    {
      "id": "a22-20-v-20-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Leser",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Leser",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-20-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Leser",
      "answers": [
        "Leser",
        "die Leser"
      ],
      "why": "جمع: die Leser"
    },
    {
      "id": "a22-20-v-21-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خواننده زن",
      "answers": [
        "die Leserin",
        "Leserin"
      ],
      "why": "Eine Leserin stellt eine Frage."
    },
    {
      "id": "a22-20-v-21-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Leserin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Leserin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-21-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Leserin",
      "answers": [
        "Leserinnen",
        "die Leserinnen"
      ],
      "why": "جمع: die Leserinnen"
    },
    {
      "id": "a22-20-v-22-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ممنوعیت",
      "answers": [
        "das Verbot",
        "Verbot"
      ],
      "why": "Das Verbot galt nur für Comics."
    },
    {
      "id": "a22-20-v-22-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Verbot",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Verbot",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-22-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Verbot",
      "answers": [
        "Verbote",
        "die Verbote"
      ],
      "why": "جمع: die Verbote"
    },
    {
      "id": "a22-20-v-23-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اجازه",
      "answers": [
        "die Erlaubnis",
        "Erlaubnis"
      ],
      "why": "Ich brauchte die Erlaubnis meiner Eltern."
    },
    {
      "id": "a22-20-v-23-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Erlaubnis",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Erlaubnis",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-23-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Erlaubnis",
      "answers": [
        "Erlaubnisse",
        "die Erlaubnisse"
      ],
      "why": "جمع: die Erlaubnisse"
    },
    {
      "id": "a22-20-v-24-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دوران کودکی",
      "answers": [
        "die Kindheit",
        "Kindheit"
      ],
      "why": "In meiner Kindheit las ich jeden Abend."
    },
    {
      "id": "a22-20-v-24-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kindheit",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Kindheit",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-25-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "علاقه",
      "answers": [
        "das Interesse",
        "Interesse"
      ],
      "why": "Mein Interesse an Geschichten war groß."
    },
    {
      "id": "a22-20-v-25-article",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Interesse",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Interesse",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-20-v-25-plural",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Interesse",
      "answers": [
        "Interessen",
        "die Interessen"
      ],
      "why": "جمع: die Interessen"
    },
    {
      "id": "a22-20-v-26-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خواندن",
      "answers": [
        "lesen"
      ],
      "why": "Ich lese gern im Zug."
    },
    {
      "id": "a22-20-v-27-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بلند برای کسی خواندن",
      "answers": [
        "vorlesen"
      ],
      "why": "Mein Vater liest mir eine Geschichte vor."
    },
    {
      "id": "a22-20-v-28-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "امانت گرفتن یا دادن",
      "answers": [
        "ausleihen"
      ],
      "why": "Ich leihe mir ein Buch aus."
    },
    {
      "id": "a22-20-v-29-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پس دادن",
      "answers": [
        "zurückgeben"
      ],
      "why": "Du musst das Buch morgen zurückgeben."
    },
    {
      "id": "a22-20-v-30-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تمدید کردن",
      "answers": [
        "verlängern"
      ],
      "why": "Ich verlängere die Leihfrist."
    },
    {
      "id": "a22-20-v-31-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توصیه کردن",
      "answers": [
        "empfehlen"
      ],
      "why": "Die Lehrerin empfiehlt uns einen Roman."
    },
    {
      "id": "a22-20-v-32-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دربارهٔ چیزی بودن",
      "answers": [
        "handeln von"
      ],
      "why": "Der Roman handelt von einer Familie."
    },
    {
      "id": "a22-20-v-33-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "منتشر کردن",
      "answers": [
        "veröffentlichen"
      ],
      "why": "Die Autorin veröffentlicht ein neues Buch."
    },
    {
      "id": "a22-20-v-34-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اجازه دادن",
      "answers": [
        "erlauben"
      ],
      "why": "Meine Eltern erlaubten mir das Lesen am Abend."
    },
    {
      "id": "a22-20-v-35-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ممنوع کردن",
      "answers": [
        "verbieten"
      ],
      "why": "Der Lehrer verbot das Handy im Unterricht."
    },
    {
      "id": "a22-20-v-36-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اجازه داشتن",
      "answers": [
        "dürfen"
      ],
      "why": "Früher durfte ich lange aufbleiben."
    },
    {
      "id": "a22-20-v-37-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توانستن",
      "answers": [
        "können"
      ],
      "why": "Mit sechs konnte ich schon lesen."
    },
    {
      "id": "a22-20-v-38-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مجبور بودن",
      "answers": [
        "müssen"
      ],
      "why": "Ich musste das Buch zurückgeben."
    },
    {
      "id": "a22-20-v-39-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "باید طبق توصیه یا دستور",
      "answers": [
        "sollen"
      ],
      "why": "Wir sollten den Text zusammenfassen."
    },
    {
      "id": "a22-20-v-40-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خواستن",
      "answers": [
        "wollen"
      ],
      "why": "Ich wollte mehr über die Geschichte wissen."
    },
    {
      "id": "a22-20-v-41-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دوست داشتن",
      "answers": [
        "mögen"
      ],
      "why": "Als Kind mochte ich Märchen."
    },
    {
      "id": "a22-20-v-42-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "هیجان‌انگیز",
      "answers": [
        "spannend"
      ],
      "why": "Der Roman bleibt bis zum Ende spannend."
    },
    {
      "id": "a22-20-v-43-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کسل‌کننده",
      "answers": [
        "langweilig"
      ],
      "why": "Die Geschichte war mir zu langweilig."
    },
    {
      "id": "a22-20-v-44-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پنهانی",
      "answers": [
        "heimlich"
      ],
      "why": "Ich las heimlich unter der Decke."
    },
    {
      "id": "a22-20-v-45-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در واقع؛ اصولاً",
      "answers": [
        "eigentlich"
      ],
      "why": "Eigentlich musste ich schon schlafen."
    },
    {
      "id": "a22-20-v-46-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آن زمان",
      "answers": [
        "damals"
      ],
      "why": "Damals gab es bei uns keine E-Books."
    },
    {
      "id": "a22-20-v-47-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در گذشته",
      "answers": [
        "früher"
      ],
      "why": "Früher ging ich oft in die Bibliothek."
    },
    {
      "id": "a22-20-v-48-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "به هیچ وجه",
      "answers": [
        "auf keinen Fall"
      ],
      "why": "Das Buch möchte ich auf keinen Fall verpassen."
    },
    {
      "id": "a22-20-v-49-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "این برایم جالب است.",
      "answers": [
        "Das interessiert mich."
      ],
      "why": "Ein Buch über Sprachen? Das interessiert mich."
    },
    {
      "id": "a22-20-v-50-recall",
      "lesson": 20,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "این مناسب سلیقهٔ من نیست.",
      "answers": [
        "Das ist nichts für mich."
      ],
      "why": "Ein sehr langer Krimi ist nichts für mich."
    },
    {
      "id": "a22-21-v-01-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سند؛ مدرک",
      "answers": [
        "das Dokument",
        "Dokument"
      ],
      "why": "Bitte bringen Sie alle Dokumente mit."
    },
    {
      "id": "a22-21-v-01-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Dokument",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Dokument",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-01-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Dokument",
      "answers": [
        "Dokumente",
        "die Dokumente"
      ],
      "why": "جمع: die Dokumente"
    },
    {
      "id": "a22-21-v-02-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مدرک شناسایی",
      "answers": [
        "der Ausweis",
        "Ausweis",
        "das Ausweisdokument",
        "Ausweisdokument"
      ],
      "why": "Mein Ausweis liegt in der Tasche."
    },
    {
      "id": "a22-21-v-02-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ausweis",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Ausweis",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-02-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Ausweis",
      "answers": [
        "Ausweise",
        "die Ausweise"
      ],
      "why": "جمع: die Ausweise"
    },
    {
      "id": "a22-21-v-03-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گذرنامه",
      "answers": [
        "der Reisepass",
        "Reisepass"
      ],
      "why": "Ich brauche einen neuen Reisepass."
    },
    {
      "id": "a22-21-v-03-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Reisepass",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Reisepass",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-03-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Reisepass",
      "answers": [
        "Reisepässe",
        "die Reisepässe"
      ],
      "why": "جمع: die Reisepässe"
    },
    {
      "id": "a22-21-v-04-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گواهی‌نامهٔ رانندگی",
      "answers": [
        "der Führerschein",
        "Führerschein"
      ],
      "why": "Er zeigt der Polizei seinen Führerschein."
    },
    {
      "id": "a22-21-v-04-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Führerschein",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Führerschein",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-04-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Führerschein",
      "answers": [
        "Führerscheine",
        "die Führerscheine"
      ],
      "why": "جمع: die Führerscheine"
    },
    {
      "id": "a22-21-v-05-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فرم",
      "answers": [
        "das Formular",
        "Formular"
      ],
      "why": "Ich fülle das Formular aus."
    },
    {
      "id": "a22-21-v-05-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Formular",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Formular",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-05-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Formular",
      "answers": [
        "Formulare",
        "die Formulare"
      ],
      "why": "جمع: die Formulare"
    },
    {
      "id": "a22-21-v-06-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "درخواست رسمی",
      "answers": [
        "der Antrag",
        "Antrag"
      ],
      "why": "Der Antrag ist noch nicht vollständig."
    },
    {
      "id": "a22-21-v-06-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Antrag",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Antrag",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-06-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Antrag",
      "answers": [
        "Anträge",
        "die Anträge"
      ],
      "why": "جمع: die Anträge"
    },
    {
      "id": "a22-21-v-07-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "امضا",
      "answers": [
        "die Unterschrift",
        "Unterschrift"
      ],
      "why": "Hier fehlt Ihre Unterschrift."
    },
    {
      "id": "a22-21-v-07-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Unterschrift",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Unterschrift",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-07-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Unterschrift",
      "answers": [
        "Unterschriften",
        "die Unterschriften"
      ],
      "why": "جمع: die Unterschriften"
    },
    {
      "id": "a22-21-v-08-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گواهی",
      "answers": [
        "die Bescheinigung",
        "Bescheinigung"
      ],
      "why": "Die Bescheinigung wird per Post geschickt."
    },
    {
      "id": "a22-21-v-08-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Bescheinigung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Bescheinigung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-08-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Bescheinigung",
      "answers": [
        "Bescheinigungen",
        "die Bescheinigungen"
      ],
      "why": "جمع: die Bescheinigungen"
    },
    {
      "id": "a22-21-v-09-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ادارهٔ دولتی",
      "answers": [
        "das Amt",
        "Amt"
      ],
      "why": "Das Amt ist heute geschlossen."
    },
    {
      "id": "a22-21-v-09-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Amt",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Amt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-09-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Amt",
      "answers": [
        "Ämter",
        "die Ämter"
      ],
      "why": "جمع: die Ämter"
    },
    {
      "id": "a22-21-v-10-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نهاد دولتی",
      "answers": [
        "die Behörde",
        "Behörde"
      ],
      "why": "Welche Behörde ist zuständig?"
    },
    {
      "id": "a22-21-v-10-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Behörde",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Behörde",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-10-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Behörde",
      "answers": [
        "Behörden",
        "die Behörden"
      ],
      "why": "جمع: die Behörden"
    },
    {
      "id": "a22-21-v-11-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بیمه",
      "answers": [
        "die Versicherung",
        "Versicherung"
      ],
      "why": "Ich rufe meine Versicherung an."
    },
    {
      "id": "a22-21-v-11-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Versicherung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Versicherung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-11-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Versicherung",
      "answers": [
        "Versicherungen",
        "die Versicherungen"
      ],
      "why": "جمع: die Versicherungen"
    },
    {
      "id": "a22-21-v-12-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پلیس",
      "answers": [
        "die Polizei",
        "Polizei"
      ],
      "why": "Die Polizei nimmt den Bericht auf."
    },
    {
      "id": "a22-21-v-12-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Polizei",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Polizei",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-13-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آتش‌نشانی",
      "answers": [
        "die Feuerwehr",
        "Feuerwehr"
      ],
      "why": "Die Feuerwehr kommt schnell."
    },
    {
      "id": "a22-21-v-13-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Feuerwehr",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Feuerwehr",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-13-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Feuerwehr",
      "answers": [
        "Feuerwehren",
        "die Feuerwehren"
      ],
      "why": "جمع: die Feuerwehren"
    },
    {
      "id": "a22-21-v-14-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پزشک اورژانس",
      "answers": [
        "der Notarzt",
        "Notarzt"
      ],
      "why": "Ein Notarzt kümmert sich um den Verletzten."
    },
    {
      "id": "a22-21-v-14-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Notarzt",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Notarzt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-14-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Notarzt",
      "answers": [
        "Notärzte",
        "die Notärzte"
      ],
      "why": "جمع: die Notärzte"
    },
    {
      "id": "a22-21-v-15-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "حادثه",
      "answers": [
        "der Unfall",
        "Unfall"
      ],
      "why": "An der Kreuzung ist ein Unfall passiert."
    },
    {
      "id": "a22-21-v-15-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Unfall",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Unfall",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-15-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Unfall",
      "answers": [
        "Unfälle",
        "die Unfälle"
      ],
      "why": "جمع: die Unfälle"
    },
    {
      "id": "a22-21-v-16-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ورود غیرمجاز برای سرقت",
      "answers": [
        "der Einbruch",
        "Einbruch"
      ],
      "why": "Nach dem Einbruch fehlte ein Laptop."
    },
    {
      "id": "a22-21-v-16-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Einbruch",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Einbruch",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-16-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Einbruch",
      "answers": [
        "Einbrüche",
        "die Einbrüche"
      ],
      "why": "جمع: die Einbrüche"
    },
    {
      "id": "a22-21-v-17-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دزدی",
      "answers": [
        "der Diebstahl",
        "Diebstahl"
      ],
      "why": "Sie meldet den Diebstahl ihrer Tasche."
    },
    {
      "id": "a22-21-v-17-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Diebstahl",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Diebstahl",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-17-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Diebstahl",
      "answers": [
        "Diebstähle",
        "die Diebstähle"
      ],
      "why": "جمع: die Diebstähle"
    },
    {
      "id": "a22-21-v-18-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خسارت",
      "answers": [
        "der Schaden",
        "Schaden"
      ],
      "why": "Der Schaden am Fenster ist groß."
    },
    {
      "id": "a22-21-v-18-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Schaden",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Schaden",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-18-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Schaden",
      "answers": [
        "Schäden",
        "die Schäden"
      ],
      "why": "جمع: die Schäden"
    },
    {
      "id": "a22-21-v-19-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شاهد مرد",
      "answers": [
        "der Zeuge",
        "Zeuge"
      ],
      "why": "Ein Zeuge beschreibt den Mann."
    },
    {
      "id": "a22-21-v-19-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Zeuge",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Zeuge",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-19-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Zeuge",
      "answers": [
        "Zeugen",
        "die Zeugen"
      ],
      "why": "جمع: die Zeugen"
    },
    {
      "id": "a22-21-v-20-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شاهد زن",
      "answers": [
        "die Zeugin",
        "Zeugin"
      ],
      "why": "Die Zeugin hat das Auto gesehen."
    },
    {
      "id": "a22-21-v-20-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Zeugin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Zeugin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-20-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Zeugin",
      "answers": [
        "Zeuginnen",
        "die Zeuginnen"
      ],
      "why": "جمع: die Zeuginnen"
    },
    {
      "id": "a22-21-v-21-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توصیف",
      "answers": [
        "die Beschreibung",
        "Beschreibung"
      ],
      "why": "Die Beschreibung war sehr genau."
    },
    {
      "id": "a22-21-v-21-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Beschreibung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Beschreibung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-21-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Beschreibung",
      "answers": [
        "Beschreibungen",
        "die Beschreibungen"
      ],
      "why": "جمع: die Beschreibungen"
    },
    {
      "id": "a22-21-v-22-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گزارش؛ اعلام",
      "answers": [
        "die Meldung",
        "Meldung"
      ],
      "why": "Die Meldung wird aufgenommen."
    },
    {
      "id": "a22-21-v-22-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Meldung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Meldung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-22-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Meldung",
      "answers": [
        "Meldungen",
        "die Meldungen"
      ],
      "why": "جمع: die Meldungen"
    },
    {
      "id": "a22-21-v-23-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کپی",
      "answers": [
        "die Kopie",
        "Kopie"
      ],
      "why": "Bitte machen Sie eine Kopie."
    },
    {
      "id": "a22-21-v-23-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kopie",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Kopie",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-23-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Kopie",
      "answers": [
        "Kopien",
        "die Kopien"
      ],
      "why": "جمع: die Kopien"
    },
    {
      "id": "a22-21-v-24-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اصل مدرک",
      "answers": [
        "das Original",
        "Original"
      ],
      "why": "Das Original bleibt bei Ihnen."
    },
    {
      "id": "a22-21-v-24-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Original",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Original",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-24-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Original",
      "answers": [
        "Originale",
        "die Originale"
      ],
      "why": "جمع: die Originale"
    },
    {
      "id": "a22-21-v-25-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "وقت قرار",
      "answers": [
        "der Termin",
        "Termin"
      ],
      "why": "Ich vereinbare einen Termin beim Amt."
    },
    {
      "id": "a22-21-v-25-article",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Termin",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Termin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-21-v-25-plural",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Termin",
      "answers": [
        "Termine",
        "die Termine"
      ],
      "why": "جمع: die Termine"
    },
    {
      "id": "a22-21-v-26-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گذاشتن؛ سپردن انجام کار",
      "answers": [
        "lassen"
      ],
      "why": "Ich lasse meinen Ausweis kopieren."
    },
    {
      "id": "a22-21-v-27-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "درخواست رسمی دادن",
      "answers": [
        "beantragen"
      ],
      "why": "Sie beantragt einen Reisepass."
    },
    {
      "id": "a22-21-v-28-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پر کردن فرم",
      "answers": [
        "ausfüllen"
      ],
      "why": "Bitte füllen Sie das Formular aus."
    },
    {
      "id": "a22-21-v-29-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "امضا کردن",
      "answers": [
        "unterschreiben"
      ],
      "why": "Er unterschreibt den Antrag."
    },
    {
      "id": "a22-21-v-30-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گم کردن",
      "answers": [
        "verlieren"
      ],
      "why": "Ich habe meinen Ausweis verloren."
    },
    {
      "id": "a22-21-v-31-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دزدیدن",
      "answers": [
        "stehlen"
      ],
      "why": "Jemand hat mein Fahrrad gestohlen."
    },
    {
      "id": "a22-21-v-32-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گزارش دادن",
      "answers": [
        "melden"
      ],
      "why": "Ich melde den Verlust meiner Karte."
    },
    {
      "id": "a22-21-v-33-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توصیف کردن",
      "answers": [
        "beschreiben"
      ],
      "why": "Können Sie den Rucksack beschreiben?"
    },
    {
      "id": "a22-21-v-34-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شناختن؛ تشخیص دادن",
      "answers": [
        "erkennen"
      ],
      "why": "Ich erkenne die Person auf dem Foto."
    },
    {
      "id": "a22-21-v-35-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "منظور داشتن",
      "answers": [
        "meinen"
      ],
      "why": "Welchen Koffer meinst du?"
    },
    {
      "id": "a22-21-v-36-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تعمیر کردن",
      "answers": [
        "reparieren"
      ],
      "why": "Die Werkstatt repariert das Fenster."
    },
    {
      "id": "a22-21-v-37-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کپی کردن",
      "answers": [
        "kopieren"
      ],
      "why": "Ich lasse die Dokumente kopieren."
    },
    {
      "id": "a22-21-v-38-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تجدید کردن",
      "answers": [
        "erneuern"
      ],
      "why": "Sie muss ihren Ausweis erneuern."
    },
    {
      "id": "a22-21-v-39-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برای سرقت وارد شدن",
      "answers": [
        "einbrechen"
      ],
      "why": "Jemand ist in die Wohnung eingebrochen."
    },
    {
      "id": "a22-21-v-40-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رسیدگی کردن به",
      "answers": [
        "sich kümmern um"
      ],
      "why": "Die Mitarbeiterin kümmert sich um den Antrag."
    },
    {
      "id": "a22-21-v-41-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "معتبر",
      "answers": [
        "gültig"
      ],
      "why": "Mein Pass ist noch gültig."
    },
    {
      "id": "a22-21-v-42-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "منقضی‌شده",
      "answers": [
        "abgelaufen"
      ],
      "why": "Der Ausweis ist leider abgelaufen."
    },
    {
      "id": "a22-21-v-43-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کامل",
      "answers": [
        "vollständig"
      ],
      "why": "Sind die Unterlagen vollständig?"
    },
    {
      "id": "a22-21-v-44-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مسئول و ذی‌صلاح",
      "answers": [
        "zuständig"
      ],
      "why": "Welche Stelle ist dafür zuständig?"
    },
    {
      "id": "a22-21-v-45-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دقیق",
      "answers": [
        "genau"
      ],
      "why": "Bitte beschreiben Sie die Tasche genau."
    },
    {
      "id": "a22-21-v-46-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آسیب‌دیده",
      "answers": [
        "beschädigt"
      ],
      "why": "Das Fenster ist beschädigt."
    },
    {
      "id": "a22-21-v-47-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "منظورتان کدام است؟",
      "answers": [
        "Welchen meinen Sie?"
      ],
      "why": "Welchen meinen Sie? Den blauen Koffer."
    },
    {
      "id": "a22-21-v-48-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دقیقاً همان را.",
      "answers": [
        "Genau den."
      ],
      "why": "Der Koffer dort? Ja, genau den."
    },
    {
      "id": "a22-21-v-49-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "چه اتفاقی افتاده؟",
      "answers": [
        "Was ist passiert?"
      ],
      "why": "Erzählen Sie bitte: Was ist passiert?"
    },
    {
      "id": "a22-21-v-50-recall",
      "lesson": 21,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "می‌دهم آن را تعمیر کنند.",
      "answers": [
        "Ich lasse das reparieren."
      ],
      "why": "Das Fahrrad ist kaputt. Ich lasse das reparieren."
    },
    {
      "id": "a22-22-v-01-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "استفادهٔ اشتراکی از خودرو",
      "answers": [
        "das Carsharing",
        "Carsharing"
      ],
      "why": "Durch Carsharing brauche ich kein eigenes Auto."
    },
    {
      "id": "a22-22-v-01-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Carsharing",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Carsharing",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-02-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ثبت‌نام",
      "answers": [
        "die Anmeldung",
        "Anmeldung"
      ],
      "why": "Die Anmeldung dauert nur wenige Minuten."
    },
    {
      "id": "a22-22-v-02-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Anmeldung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Anmeldung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-02-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Anmeldung",
      "answers": [
        "Anmeldungen",
        "die Anmeldungen"
      ],
      "why": "جمع: die Anmeldungen"
    },
    {
      "id": "a22-22-v-03-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "حساب کاربری",
      "answers": [
        "das Benutzerkonto",
        "Benutzerkonto",
        "das Nutzerkonto",
        "Nutzerkonto"
      ],
      "why": "Ich öffne mein Benutzerkonto."
    },
    {
      "id": "a22-22-v-03-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Benutzerkonto",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Benutzerkonto",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-03-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Benutzerkonto",
      "answers": [
        "Benutzerkonten",
        "die Benutzerkonten"
      ],
      "why": "جمع: die Benutzerkonten"
    },
    {
      "id": "a22-22-v-04-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رمز عبور",
      "answers": [
        "das Passwort",
        "Passwort",
        "das Kennwort",
        "Kennwort"
      ],
      "why": "Ich habe mein Passwort vergessen."
    },
    {
      "id": "a22-22-v-04-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Passwort",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Passwort",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-04-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Passwort",
      "answers": [
        "Passwörter",
        "die Passwörter"
      ],
      "why": "جمع: die Passwörter"
    },
    {
      "id": "a22-22-v-05-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نام کاربری",
      "answers": [
        "der Benutzername",
        "Benutzername"
      ],
      "why": "Bitte geben Sie Ihren Benutzernamen ein."
    },
    {
      "id": "a22-22-v-05-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Benutzername",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Benutzername",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-05-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Benutzername",
      "answers": [
        "Benutzernamen",
        "die Benutzernamen"
      ],
      "why": "جمع: die Benutzernamen"
    },
    {
      "id": "a22-22-v-06-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نشانی ایمیل",
      "answers": [
        "die E-Mail-Adresse",
        "E-Mail-Adresse",
        "Emailadresse",
        "die Emailadresse"
      ],
      "why": "Meine E-Mail-Adresse ist im Konto gespeichert."
    },
    {
      "id": "a22-22-v-06-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "E-Mail-Adresse",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die E-Mail-Adresse",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-06-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die E-Mail-Adresse",
      "answers": [
        "E-Mail-Adressen",
        "die E-Mail-Adressen"
      ],
      "why": "جمع: die E-Mail-Adressen"
    },
    {
      "id": "a22-22-v-07-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صفحهٔ وب",
      "answers": [
        "die Webseite",
        "Webseite",
        "die Website",
        "Website"
      ],
      "why": "Auf der Webseite steht eine Anleitung."
    },
    {
      "id": "a22-22-v-07-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Webseite",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Webseite",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-07-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Webseite",
      "answers": [
        "Webseiten",
        "die Webseiten"
      ],
      "why": "جمع: die Webseiten"
    },
    {
      "id": "a22-22-v-08-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اپلیکیشن",
      "answers": [
        "die App",
        "App",
        "die Anwendung",
        "Anwendung"
      ],
      "why": "Die App zeigt freie Fahrzeuge."
    },
    {
      "id": "a22-22-v-08-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "App",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die App",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-08-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die App",
      "answers": [
        "Apps",
        "die Apps"
      ],
      "why": "جمع: die Apps"
    },
    {
      "id": "a22-22-v-09-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صفحه‌نمایش",
      "answers": [
        "der Bildschirm",
        "Bildschirm"
      ],
      "why": "Auf dem Bildschirm erscheint eine Nachricht."
    },
    {
      "id": "a22-22-v-09-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Bildschirm",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Bildschirm",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-09-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Bildschirm",
      "answers": [
        "Bildschirme",
        "die Bildschirme"
      ],
      "why": "جمع: die Bildschirme"
    },
    {
      "id": "a22-22-v-10-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دکمهٔ رابط کاربری",
      "answers": [
        "die Schaltfläche",
        "Schaltfläche"
      ],
      "why": "Klicken Sie auf die grüne Schaltfläche."
    },
    {
      "id": "a22-22-v-10-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Schaltfläche",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Schaltfläche",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-10-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Schaltfläche",
      "answers": [
        "Schaltflächen",
        "die Schaltflächen"
      ],
      "why": "جمع: die Schaltflächen"
    },
    {
      "id": "a22-22-v-11-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تأییدیه",
      "answers": [
        "die Bestätigung",
        "Bestätigung"
      ],
      "why": "Ich warte auf die Bestätigung."
    },
    {
      "id": "a22-22-v-11-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Bestätigung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Bestätigung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-11-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Bestätigung",
      "answers": [
        "Bestätigungen",
        "die Bestätigungen"
      ],
      "why": "جمع: die Bestätigungen"
    },
    {
      "id": "a22-22-v-12-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پیوند اینترنتی",
      "answers": [
        "der Link",
        "Link"
      ],
      "why": "Öffnen Sie den Link in der Nachricht."
    },
    {
      "id": "a22-22-v-12-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Link",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Link",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-12-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Link",
      "answers": [
        "Links",
        "die Links"
      ],
      "why": "جمع: die Links"
    },
    {
      "id": "a22-22-v-13-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "داده‌ها؛ اطلاعات",
      "answers": [
        "die Daten",
        "Daten"
      ],
      "why": "Kontrollieren Sie Ihre Daten."
    },
    {
      "id": "a22-22-v-14-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فایل",
      "answers": [
        "die Datei",
        "Datei"
      ],
      "why": "Die Datei wird gespeichert."
    },
    {
      "id": "a22-22-v-14-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Datei",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Datei",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-14-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Datei",
      "answers": [
        "Dateien",
        "die Dateien"
      ],
      "why": "جمع: die Dateien"
    },
    {
      "id": "a22-22-v-15-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اتصال",
      "answers": [
        "die Verbindung",
        "Verbindung"
      ],
      "why": "Die Verbindung ist langsam."
    },
    {
      "id": "a22-22-v-15-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Verbindung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Verbindung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-15-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Verbindung",
      "answers": [
        "Verbindungen",
        "die Verbindungen"
      ],
      "why": "جمع: die Verbindungen"
    },
    {
      "id": "a22-22-v-16-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کارت هوشمند",
      "answers": [
        "die Chipkarte",
        "Chipkarte"
      ],
      "why": "Mit der Chipkarte öffne ich das Auto."
    },
    {
      "id": "a22-22-v-16-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Chipkarte",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Chipkarte",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-16-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Chipkarte",
      "answers": [
        "Chipkarten",
        "die Chipkarten"
      ],
      "why": "جمع: die Chipkarten"
    },
    {
      "id": "a22-22-v-17-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "وسیلهٔ نقلیه",
      "answers": [
        "das Fahrzeug",
        "Fahrzeug"
      ],
      "why": "Das Fahrzeug steht neben dem Bahnhof."
    },
    {
      "id": "a22-22-v-17-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Fahrzeug",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Fahrzeug",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-17-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Fahrzeug",
      "answers": [
        "Fahrzeuge",
        "die Fahrzeuge"
      ],
      "why": "جمع: die Fahrzeuge"
    },
    {
      "id": "a22-22-v-18-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خودرو",
      "answers": [
        "der Wagen",
        "Wagen",
        "das Auto",
        "Auto"
      ],
      "why": "Seit März habe ich keinen eigenen Wagen."
    },
    {
      "id": "a22-22-v-18-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Wagen",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Wagen",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-18-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Wagen",
      "answers": [
        "Wagen",
        "die Wagen"
      ],
      "why": "جمع: die Wagen"
    },
    {
      "id": "a22-22-v-19-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ایستگاه",
      "answers": [
        "die Station",
        "Station"
      ],
      "why": "Ich gebe das Fahrrad an der Station zurück."
    },
    {
      "id": "a22-22-v-19-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Station",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Station",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-19-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Station",
      "answers": [
        "Stationen",
        "die Stationen"
      ],
      "why": "جمع: die Stationen"
    },
    {
      "id": "a22-22-v-20-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "محل پارک",
      "answers": [
        "der Parkplatz",
        "Parkplatz"
      ],
      "why": "Der Parkplatz liegt am Bahnhof."
    },
    {
      "id": "a22-22-v-20-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Parkplatz",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Parkplatz",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-20-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Parkplatz",
      "answers": [
        "Parkplätze",
        "die Parkplätze"
      ],
      "why": "جمع: die Parkplätze"
    },
    {
      "id": "a22-22-v-21-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پمپ بنزین",
      "answers": [
        "die Tankstelle",
        "Tankstelle"
      ],
      "why": "Die Tankstelle ist noch offen."
    },
    {
      "id": "a22-22-v-21-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Tankstelle",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Tankstelle",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-21-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Tankstelle",
      "answers": [
        "Tankstellen",
        "die Tankstellen"
      ],
      "why": "جمع: die Tankstellen"
    },
    {
      "id": "a22-22-v-22-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "هزینهٔ خدمات",
      "answers": [
        "die Gebühr",
        "Gebühr"
      ],
      "why": "Die Gebühr wird monatlich bezahlt."
    },
    {
      "id": "a22-22-v-22-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gebühr",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Gebühr",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-22-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Gebühr",
      "answers": [
        "Gebühren",
        "die Gebühren"
      ],
      "why": "جمع: die Gebühren"
    },
    {
      "id": "a22-22-v-23-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "استفاده",
      "answers": [
        "die Nutzung",
        "Nutzung"
      ],
      "why": "Die Nutzung wird pro Minute berechnet."
    },
    {
      "id": "a22-22-v-23-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Nutzung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Nutzung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-24-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دستورالعمل",
      "answers": [
        "die Anleitung",
        "Anleitung"
      ],
      "why": "Lesen Sie zuerst die Anleitung."
    },
    {
      "id": "a22-22-v-24-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Anleitung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Anleitung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-24-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Anleitung",
      "answers": [
        "Anleitungen",
        "die Anleitungen"
      ],
      "why": "جمع: die Anleitungen"
    },
    {
      "id": "a22-22-v-25-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مرحله",
      "answers": [
        "der Schritt",
        "Schritt"
      ],
      "why": "Der nächste Schritt ist die Bestätigung."
    },
    {
      "id": "a22-22-v-25-article",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Schritt",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Schritt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-22-v-25-plural",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Schritt",
      "answers": [
        "Schritte",
        "die Schritte"
      ],
      "why": "جمع: die Schritte"
    },
    {
      "id": "a22-22-v-26-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ثبت‌نام؛ وارد حساب شدن",
      "answers": [
        "sich anmelden"
      ],
      "why": "Ich melde mich online an."
    },
    {
      "id": "a22-22-v-27-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ثبت‌نام کردن",
      "answers": [
        "sich registrieren"
      ],
      "why": "Neue Nutzer registrieren sich zuerst."
    },
    {
      "id": "a22-22-v-28-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "وارد حساب شدن",
      "answers": [
        "sich einloggen"
      ],
      "why": "Ich logge mich mit meinem Passwort ein."
    },
    {
      "id": "a22-22-v-29-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خارج شدن از حساب",
      "answers": [
        "sich abmelden"
      ],
      "why": "Nach der Nutzung melde ich mich ab."
    },
    {
      "id": "a22-22-v-30-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "وارد کردن داده",
      "answers": [
        "eingeben"
      ],
      "why": "Bitte geben Sie Ihren Namen ein."
    },
    {
      "id": "a22-22-v-31-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کلیک کردن روی",
      "answers": [
        "anklicken"
      ],
      "why": "Klicken Sie den Link an."
    },
    {
      "id": "a22-22-v-32-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تأیید کردن",
      "answers": [
        "bestätigen"
      ],
      "why": "Bestätigen Sie Ihre E-Mail-Adresse."
    },
    {
      "id": "a22-22-v-33-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ذخیره کردن",
      "answers": [
        "speichern"
      ],
      "why": "Ich speichere die Datei."
    },
    {
      "id": "a22-22-v-34-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دانلود کردن",
      "answers": [
        "herunterladen"
      ],
      "why": "Wir laden die App herunter."
    },
    {
      "id": "a22-22-v-35-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بارگذاری کردن",
      "answers": [
        "hochladen"
      ],
      "why": "Ich lade ein Foto hoch."
    },
    {
      "id": "a22-22-v-36-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "انتخاب کردن",
      "answers": [
        "auswählen"
      ],
      "why": "Wählen Sie ein Fahrzeug aus."
    },
    {
      "id": "a22-22-v-37-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "قرض یا امانت گرفتن",
      "answers": [
        "ausleihen"
      ],
      "why": "Ich leihe mir ein Fahrrad aus."
    },
    {
      "id": "a22-22-v-38-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پس دادن",
      "answers": [
        "zurückgeben"
      ],
      "why": "Wir geben das Auto morgen zurück."
    },
    {
      "id": "a22-22-v-39-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فروختن",
      "answers": [
        "verkaufen"
      ],
      "why": "Ich habe meinen Wagen verkauft."
    },
    {
      "id": "a22-22-v-40-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "منتظر ماندن",
      "answers": [
        "warten"
      ],
      "why": "Warten Sie, bis die Bestätigung kommt."
    },
    {
      "id": "a22-22-v-41-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در دسترس",
      "answers": [
        "verfügbar"
      ],
      "why": "Hier ist gerade kein Fahrrad verfügbar."
    },
    {
      "id": "a22-22-v-42-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نیازمند پرداخت",
      "answers": [
        "kostenpflichtig"
      ],
      "why": "Dieser Service ist kostenpflichtig."
    },
    {
      "id": "a22-22-v-43-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رایگان",
      "answers": [
        "kostenlos",
        "gratis"
      ],
      "why": "Die Anmeldung ist kostenlos."
    },
    {
      "id": "a22-22-v-44-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "موفق",
      "answers": [
        "erfolgreich"
      ],
      "why": "Die Registrierung war erfolgreich."
    },
    {
      "id": "a22-22-v-45-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خودکار",
      "answers": [
        "automatisch"
      ],
      "why": "Die Tür öffnet sich automatisch."
    },
    {
      "id": "a22-22-v-46-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از وقتی که؛ از آن زمان",
      "answers": [
        "seitdem"
      ],
      "why": "Seitdem ich Rad fahre, bin ich fitter."
    },
    {
      "id": "a22-22-v-47-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تا زمانی که",
      "answers": [
        "bis"
      ],
      "why": "Warte, bis die Seite geladen ist."
    },
    {
      "id": "a22-22-v-48-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "پس از آن",
      "answers": [
        "anschließend"
      ],
      "why": "Anschließend wählen Sie ein Fahrzeug."
    },
    {
      "id": "a22-22-v-49-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "قدم‌به‌قدم",
      "answers": [
        "Schritt für Schritt"
      ],
      "why": "Die Anleitung erklärt alles Schritt für Schritt."
    },
    {
      "id": "a22-22-v-50-recall",
      "lesson": 22,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "لطفاً صبر کنید.",
      "answers": [
        "Bitte warten."
      ],
      "why": "Bitte warten. Ihre Daten werden gespeichert."
    },
    {
      "id": "a22-23-v-01-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شغل",
      "answers": [
        "der Beruf",
        "Beruf"
      ],
      "why": "Welcher Beruf passt zu dir?"
    },
    {
      "id": "a22-23-v-01-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Beruf",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Beruf",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-01-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Beruf",
      "answers": [
        "Berufe",
        "die Berufe"
      ],
      "why": "جمع: die Berufe"
    },
    {
      "id": "a22-23-v-02-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آموزش حرفه‌ای",
      "answers": [
        "die Ausbildung",
        "Ausbildung"
      ],
      "why": "Meine Ausbildung dauert drei Jahre."
    },
    {
      "id": "a22-23-v-02-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ausbildung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Ausbildung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-02-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Ausbildung",
      "answers": [
        "Ausbildungen",
        "die Ausbildungen"
      ],
      "why": "جمع: die Ausbildungen"
    },
    {
      "id": "a22-23-v-03-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "جایگاه کارآموزی حرفه‌ای",
      "answers": [
        "die Ausbildungsstelle",
        "Ausbildungsstelle"
      ],
      "why": "Ich suche eine Ausbildungsstelle."
    },
    {
      "id": "a22-23-v-03-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ausbildungsstelle",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Ausbildungsstelle",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-03-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Ausbildungsstelle",
      "answers": [
        "Ausbildungsstellen",
        "die Ausbildungsstellen"
      ],
      "why": "جمع: die Ausbildungsstellen"
    },
    {
      "id": "a22-23-v-04-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "جای کارآموزی حرفه‌ای",
      "answers": [
        "der Ausbildungsplatz",
        "Ausbildungsplatz"
      ],
      "why": "Sie hat einen Ausbildungsplatz gefunden."
    },
    {
      "id": "a22-23-v-04-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ausbildungsplatz",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Ausbildungsplatz",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-04-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Ausbildungsplatz",
      "answers": [
        "Ausbildungsplätze",
        "die Ausbildungsplätze"
      ],
      "why": "جمع: die Ausbildungsplätze"
    },
    {
      "id": "a22-23-v-05-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مدرسهٔ حرفه‌ای",
      "answers": [
        "die Berufsschule",
        "Berufsschule"
      ],
      "why": "Zweimal pro Woche gehe ich zur Berufsschule."
    },
    {
      "id": "a22-23-v-05-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Berufsschule",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Berufsschule",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-05-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Berufsschule",
      "answers": [
        "Berufsschulen",
        "die Berufsschulen"
      ],
      "why": "جمع: die Berufsschulen"
    },
    {
      "id": "a22-23-v-06-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مدرک پایان مدرسه",
      "answers": [
        "der Schulabschluss",
        "Schulabschluss"
      ],
      "why": "Für die Ausbildung brauche ich einen Schulabschluss."
    },
    {
      "id": "a22-23-v-06-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Schulabschluss",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Schulabschluss",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-06-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Schulabschluss",
      "answers": [
        "Schulabschlüsse",
        "die Schulabschlüsse"
      ],
      "why": "جمع: die Schulabschlüsse"
    },
    {
      "id": "a22-23-v-07-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کارنامه؛ گواهی",
      "answers": [
        "das Zeugnis",
        "Zeugnis"
      ],
      "why": "Ich lege mein Zeugnis bei."
    },
    {
      "id": "a22-23-v-07-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Zeugnis",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Zeugnis",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-07-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Zeugnis",
      "answers": [
        "Zeugnisse",
        "die Zeugnisse"
      ],
      "why": "جمع: die Zeugnisse"
    },
    {
      "id": "a22-23-v-08-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "درخواست استخدام",
      "answers": [
        "die Bewerbung",
        "Bewerbung"
      ],
      "why": "Meine Bewerbung ist fast fertig."
    },
    {
      "id": "a22-23-v-08-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Bewerbung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Bewerbung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-08-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Bewerbung",
      "answers": [
        "Bewerbungen",
        "die Bewerbungen"
      ],
      "why": "جمع: die Bewerbungen"
    },
    {
      "id": "a22-23-v-09-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رزومه",
      "answers": [
        "der Lebenslauf",
        "Lebenslauf"
      ],
      "why": "Im Lebenslauf stehen meine Erfahrungen."
    },
    {
      "id": "a22-23-v-09-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Lebenslauf",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Lebenslauf",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-09-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Lebenslauf",
      "answers": [
        "Lebensläufe",
        "die Lebensläufe"
      ],
      "why": "جمع: die Lebensläufe"
    },
    {
      "id": "a22-23-v-10-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مصاحبهٔ شغلی",
      "answers": [
        "das Vorstellungsgespräch",
        "Vorstellungsgespräch"
      ],
      "why": "Am Freitag habe ich ein Vorstellungsgespräch."
    },
    {
      "id": "a22-23-v-10-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Vorstellungsgespräch",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Vorstellungsgespräch",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-10-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Vorstellungsgespräch",
      "answers": [
        "Vorstellungsgespräche",
        "die Vorstellungsgespräche"
      ],
      "why": "جمع: die Vorstellungsgespräche"
    },
    {
      "id": "a22-23-v-11-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کارآموزی",
      "answers": [
        "das Praktikum",
        "Praktikum"
      ],
      "why": "Das Praktikum dauert vier Wochen."
    },
    {
      "id": "a22-23-v-11-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Praktikum",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Praktikum",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-11-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Praktikum",
      "answers": [
        "Praktika",
        "die Praktika"
      ],
      "why": "جمع: die Praktika"
    },
    {
      "id": "a22-23-v-12-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بنگاه؛ محل کار",
      "answers": [
        "der Betrieb",
        "Betrieb"
      ],
      "why": "Unser Betrieb hat zwanzig Mitarbeiter."
    },
    {
      "id": "a22-23-v-12-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Betrieb",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Betrieb",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-12-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Betrieb",
      "answers": [
        "Betriebe",
        "die Betriebe"
      ],
      "why": "جمع: die Betriebe"
    },
    {
      "id": "a22-23-v-13-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کارگاه",
      "answers": [
        "die Werkstatt",
        "Werkstatt"
      ],
      "why": "In der Werkstatt reparieren wir Fahrräder."
    },
    {
      "id": "a22-23-v-13-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Werkstatt",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Werkstatt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-13-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Werkstatt",
      "answers": [
        "Werkstätten",
        "die Werkstätten"
      ],
      "why": "جمع: die Werkstätten"
    },
    {
      "id": "a22-23-v-14-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دفتر کار",
      "answers": [
        "das Büro",
        "Büro"
      ],
      "why": "Das Büro liegt im ersten Stock."
    },
    {
      "id": "a22-23-v-14-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Büro",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Büro",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-14-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Büro",
      "answers": [
        "Büros",
        "die Büros"
      ],
      "why": "جمع: die Büros"
    },
    {
      "id": "a22-23-v-15-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "همکار مرد",
      "answers": [
        "der Kollege",
        "Kollege"
      ],
      "why": "Mein Kollege hilft mir."
    },
    {
      "id": "a22-23-v-15-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kollege",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Kollege",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-15-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Kollege",
      "answers": [
        "Kollegen",
        "die Kollegen"
      ],
      "why": "جمع: die Kollegen"
    },
    {
      "id": "a22-23-v-16-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "همکار زن",
      "answers": [
        "die Kollegin",
        "Kollegin"
      ],
      "why": "Die Kollegin erklärt mir die Aufgabe."
    },
    {
      "id": "a22-23-v-16-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kollegin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Kollegin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-16-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Kollegin",
      "answers": [
        "Kolleginnen",
        "die Kolleginnen"
      ],
      "why": "جمع: die Kolleginnen"
    },
    {
      "id": "a22-23-v-17-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رئیس مرد",
      "answers": [
        "der Chef",
        "Chef"
      ],
      "why": "Mein Chef ist heute unterwegs."
    },
    {
      "id": "a22-23-v-17-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Chef",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Chef",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-17-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Chef",
      "answers": [
        "Chefs",
        "die Chefs"
      ],
      "why": "جمع: die Chefs"
    },
    {
      "id": "a22-23-v-18-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رئیس زن",
      "answers": [
        "die Chefin",
        "Chefin"
      ],
      "why": "Die Chefin führt das Gespräch."
    },
    {
      "id": "a22-23-v-18-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Chefin",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Chefin",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-18-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Chefin",
      "answers": [
        "Chefinnen",
        "die Chefinnen"
      ],
      "why": "جمع: die Chefinnen"
    },
    {
      "id": "a22-23-v-19-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "وظیفه",
      "answers": [
        "die Aufgabe",
        "Aufgabe"
      ],
      "why": "Diese Aufgabe mache ich gern."
    },
    {
      "id": "a22-23-v-19-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Aufgabe",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Aufgabe",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-19-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Aufgabe",
      "answers": [
        "Aufgaben",
        "die Aufgaben"
      ],
      "why": "جمع: die Aufgaben"
    },
    {
      "id": "a22-23-v-20-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مسئولیت",
      "answers": [
        "die Verantwortung",
        "Verantwortung"
      ],
      "why": "Ich übernehme mehr Verantwortung."
    },
    {
      "id": "a22-23-v-20-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Verantwortung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Verantwortung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-21-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توانایی",
      "answers": [
        "die Fähigkeit",
        "Fähigkeit"
      ],
      "why": "Welche Fähigkeiten brauchst du?"
    },
    {
      "id": "a22-23-v-21-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Fähigkeit",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Fähigkeit",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-21-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Fähigkeit",
      "answers": [
        "Fähigkeiten",
        "die Fähigkeiten"
      ],
      "why": "جمع: die Fähigkeiten"
    },
    {
      "id": "a22-23-v-22-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نقطهٔ قوت",
      "answers": [
        "die Stärke",
        "Stärke"
      ],
      "why": "Geduld ist eine meiner Stärken."
    },
    {
      "id": "a22-23-v-22-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Stärke",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Stärke",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-22-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Stärke",
      "answers": [
        "Stärken",
        "die Stärken"
      ],
      "why": "جمع: die Stärken"
    },
    {
      "id": "a22-23-v-23-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "نقطهٔ ضعف",
      "answers": [
        "die Schwäche",
        "Schwäche"
      ],
      "why": "Ich möchte an meinen Schwächen arbeiten."
    },
    {
      "id": "a22-23-v-23-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Schwäche",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Schwäche",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-23-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Schwäche",
      "answers": [
        "Schwächen",
        "die Schwächen"
      ],
      "why": "جمع: die Schwächen"
    },
    {
      "id": "a22-23-v-24-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "حقوق",
      "answers": [
        "das Gehalt",
        "Gehalt"
      ],
      "why": "Das Gehalt wird am Monatsende überwiesen."
    },
    {
      "id": "a22-23-v-24-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gehalt",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Gehalt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-24-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "das Gehalt",
      "answers": [
        "Gehälter",
        "die Gehälter"
      ],
      "why": "جمع: die Gehälter"
    },
    {
      "id": "a22-23-v-25-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ساعت کاری",
      "answers": [
        "die Arbeitszeit",
        "Arbeitszeit"
      ],
      "why": "Meine Arbeitszeit beginnt um acht."
    },
    {
      "id": "a22-23-v-25-article",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Arbeitszeit",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Arbeitszeit",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-23-v-25-plural",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Arbeitszeit",
      "answers": [
        "Arbeitszeiten",
        "die Arbeitszeiten"
      ],
      "why": "جمع: die Arbeitszeiten"
    },
    {
      "id": "a22-23-v-26-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کار کردن",
      "answers": [
        "arbeiten"
      ],
      "why": "Ich arbeite gern mit Menschen."
    },
    {
      "id": "a22-23-v-27-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برای شغل درخواست دادن",
      "answers": [
        "sich bewerben"
      ],
      "why": "Ich bewerbe mich um einen Ausbildungsplatz."
    },
    {
      "id": "a22-23-v-28-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آموزش حرفه‌ای دادن",
      "answers": [
        "ausbilden"
      ],
      "why": "Der Betrieb bildet junge Menschen aus."
    },
    {
      "id": "a22-23-v-29-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "یاد گرفتن",
      "answers": [
        "lernen"
      ],
      "why": "Im Praktikum lerne ich viel."
    },
    {
      "id": "a22-23-v-30-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مشاوره دادن",
      "answers": [
        "beraten"
      ],
      "why": "Sie berät die Kunden."
    },
    {
      "id": "a22-23-v-31-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تعمیر کردن",
      "answers": [
        "reparieren"
      ],
      "why": "Er repariert Fahrräder."
    },
    {
      "id": "a22-23-v-32-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سازمان‌دهی کردن",
      "answers": [
        "organisieren"
      ],
      "why": "Ich organisiere die Termine."
    },
    {
      "id": "a22-23-v-33-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رسیدگی و مراقبت کردن",
      "answers": [
        "betreuen"
      ],
      "why": "Wir betreuen ältere Menschen."
    },
    {
      "id": "a22-23-v-34-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "درآمد داشتن",
      "answers": [
        "verdienen"
      ],
      "why": "Wie viel verdient man in diesem Beruf?"
    },
    {
      "id": "a22-23-v-35-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "متناسب بودن با",
      "answers": [
        "passen zu"
      ],
      "why": "Dieser Beruf passt zu meinen Stärken."
    },
    {
      "id": "a22-23-v-36-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "انتخاب کردن",
      "answers": [
        "sich entscheiden für"
      ],
      "why": "Ich entscheide mich für eine Ausbildung."
    },
    {
      "id": "a22-23-v-37-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خود را معرفی کردن",
      "answers": [
        "sich vorstellen"
      ],
      "why": "Bitte stellen Sie sich kurz vor."
    },
    {
      "id": "a22-23-v-38-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "توضیح دادن",
      "answers": [
        "erklären"
      ],
      "why": "Die Kollegin erklärt den Arbeitsablauf."
    },
    {
      "id": "a22-23-v-39-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "همکاری کردن",
      "answers": [
        "zusammenarbeiten"
      ],
      "why": "Wir arbeiten im Team zusammen."
    },
    {
      "id": "a22-23-v-40-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برعهده گرفتن",
      "answers": [
        "übernehmen"
      ],
      "why": "Morgen übernehme ich diese Aufgabe."
    },
    {
      "id": "a22-23-v-41-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "راضی",
      "answers": [
        "zufrieden"
      ],
      "why": "Ich bin mit meiner Ausbildung zufrieden."
    },
    {
      "id": "a22-23-v-42-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ناراضی",
      "answers": [
        "unzufrieden"
      ],
      "why": "Er ist mit den Arbeitszeiten unzufrieden."
    },
    {
      "id": "a22-23-v-43-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "قابل اعتماد",
      "answers": [
        "zuverlässig"
      ],
      "why": "Eine zuverlässige Kollegin kommt pünktlich."
    },
    {
      "id": "a22-23-v-44-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "صبور",
      "answers": [
        "geduldig"
      ],
      "why": "Bei dieser Arbeit muss man geduldig sein."
    },
    {
      "id": "a22-23-v-45-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خلاق",
      "answers": [
        "kreativ"
      ],
      "why": "Ich suche einen kreativen Beruf."
    },
    {
      "id": "a22-23-v-46-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مستقل",
      "answers": [
        "selbstständig"
      ],
      "why": "Ich kann die Aufgabe selbstständig lösen."
    },
    {
      "id": "a22-23-v-47-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "متنوع",
      "answers": [
        "abwechslungsreich"
      ],
      "why": "Die Arbeit ist abwechslungsreich."
    },
    {
      "id": "a22-23-v-48-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خسته‌کننده؛ پرفشار",
      "answers": [
        "anstrengend"
      ],
      "why": "Manchmal ist die Arbeit anstrengend."
    },
    {
      "id": "a22-23-v-49-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از این لذت می‌برم.",
      "answers": [
        "Das macht mir Spaß."
      ],
      "why": "Menschen zu helfen macht mir Spaß."
    },
    {
      "id": "a22-23-v-50-recall",
      "lesson": 23,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "این مناسب من است.",
      "answers": [
        "Das passt zu mir."
      ],
      "why": "Die Arbeit im Team passt zu mir."
    },
    {
      "id": "a22-24-v-01-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خارج از کشور",
      "answers": [
        "das Ausland",
        "Ausland"
      ],
      "why": "Ich möchte im Ausland arbeiten."
    },
    {
      "id": "a22-24-v-01-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ausland",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Ausland",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-02-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مدت اقامت",
      "answers": [
        "der Aufenthalt",
        "Aufenthalt"
      ],
      "why": "Mein Aufenthalt dauerte sechs Monate."
    },
    {
      "id": "a22-24-v-02-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Aufenthalt",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Aufenthalt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-02-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Aufenthalt",
      "answers": [
        "Aufenthalte",
        "die Aufenthalte"
      ],
      "why": "جمع: die Aufenthalte"
    },
    {
      "id": "a22-24-v-03-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "زندگی روزمره",
      "answers": [
        "der Alltag",
        "Alltag"
      ],
      "why": "Mein Alltag begann früh."
    },
    {
      "id": "a22-24-v-03-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Alltag",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Alltag",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-04-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خانوادهٔ میزبان",
      "answers": [
        "die Gastfamilie",
        "Gastfamilie"
      ],
      "why": "Ich wohnte bei einer Gastfamilie."
    },
    {
      "id": "a22-24-v-04-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gastfamilie",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Gastfamilie",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-04-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Gastfamilie",
      "answers": [
        "Gastfamilien",
        "die Gastfamilien"
      ],
      "why": "جمع: die Gastfamilien"
    },
    {
      "id": "a22-24-v-05-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "محل اقامت",
      "answers": [
        "die Unterkunft",
        "Unterkunft"
      ],
      "why": "Die Unterkunft war klein, aber gemütlich."
    },
    {
      "id": "a22-24-v-05-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Unterkunft",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Unterkunft",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-05-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Unterkunft",
      "answers": [
        "Unterkünfte",
        "die Unterkünfte"
      ],
      "why": "جمع: die Unterkünfte"
    },
    {
      "id": "a22-24-v-06-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دلتنگی وطن و خانه",
      "answers": [
        "das Heimweh",
        "Heimweh"
      ],
      "why": "Am Anfang hatte ich Heimweh."
    },
    {
      "id": "a22-24-v-06-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Heimweh",
      "answers": [
        "das"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: das Heimweh",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-07-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "زادگاه؛ وطن",
      "answers": [
        "die Heimat",
        "Heimat"
      ],
      "why": "Nach einem Jahr kehrte ich in meine Heimat zurück."
    },
    {
      "id": "a22-24-v-07-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Heimat",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Heimat",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-08-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فرهنگ",
      "answers": [
        "die Kultur",
        "Kultur"
      ],
      "why": "Ich lernte eine andere Kultur kennen."
    },
    {
      "id": "a22-24-v-08-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kultur",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Kultur",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-08-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Kultur",
      "answers": [
        "Kulturen",
        "die Kulturen"
      ],
      "why": "جمع: die Kulturen"
    },
    {
      "id": "a22-24-v-09-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "عادت",
      "answers": [
        "die Gewohnheit",
        "Gewohnheit"
      ],
      "why": "Die Essgewohnheiten waren anders."
    },
    {
      "id": "a22-24-v-09-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gewohnheit",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Gewohnheit",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-09-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Gewohnheit",
      "answers": [
        "Gewohnheiten",
        "die Gewohnheiten"
      ],
      "why": "جمع: die Gewohnheiten"
    },
    {
      "id": "a22-24-v-10-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تفاوت",
      "answers": [
        "der Unterschied",
        "Unterschied"
      ],
      "why": "Es gab viele kleine Unterschiede."
    },
    {
      "id": "a22-24-v-10-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Unterschied",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Unterschied",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-10-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Unterschied",
      "answers": [
        "Unterschiede",
        "die Unterschiede"
      ],
      "why": "جمع: die Unterschiede"
    },
    {
      "id": "a22-24-v-11-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تجربه",
      "answers": [
        "die Erfahrung",
        "Erfahrung"
      ],
      "why": "Die Reise war eine wichtige Erfahrung."
    },
    {
      "id": "a22-24-v-11-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Erfahrung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Erfahrung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-11-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Erfahrung",
      "answers": [
        "Erfahrungen",
        "die Erfahrungen"
      ],
      "why": "جمع: die Erfahrungen"
    },
    {
      "id": "a22-24-v-12-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خاطره",
      "answers": [
        "die Erinnerung",
        "Erinnerung"
      ],
      "why": "Ich habe schöne Erinnerungen an diese Zeit."
    },
    {
      "id": "a22-24-v-12-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Erinnerung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Erinnerung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-12-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Erinnerung",
      "answers": [
        "Erinnerungen",
        "die Erinnerungen"
      ],
      "why": "جمع: die Erinnerungen"
    },
    {
      "id": "a22-24-v-13-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "چالش",
      "answers": [
        "die Herausforderung",
        "Herausforderung"
      ],
      "why": "Die Sprache war eine Herausforderung."
    },
    {
      "id": "a22-24-v-13-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Herausforderung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Herausforderung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-13-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Herausforderung",
      "answers": [
        "Herausforderungen",
        "die Herausforderungen"
      ],
      "why": "جمع: die Herausforderungen"
    },
    {
      "id": "a22-24-v-14-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فرصت",
      "answers": [
        "die Gelegenheit",
        "Gelegenheit"
      ],
      "why": "Ich nutzte jede Gelegenheit zum Sprechen."
    },
    {
      "id": "a22-24-v-14-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Gelegenheit",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Gelegenheit",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-14-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Gelegenheit",
      "answers": [
        "Gelegenheiten",
        "die Gelegenheiten"
      ],
      "why": "جمع: die Gelegenheiten"
    },
    {
      "id": "a22-24-v-15-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بازگشت",
      "answers": [
        "die Rückkehr",
        "Rückkehr"
      ],
      "why": "Nach meiner Rückkehr suchte ich eine Arbeit."
    },
    {
      "id": "a22-24-v-15-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Rückkehr",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Rückkehr",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-16-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رسیدن؛ ورود",
      "answers": [
        "die Ankunft",
        "Ankunft"
      ],
      "why": "Bei meiner Ankunft war ich sehr müde."
    },
    {
      "id": "a22-24-v-16-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Ankunft",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Ankunft",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-16-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Ankunft",
      "answers": [
        "Ankünfte",
        "die Ankünfte"
      ],
      "why": "جمع: die Ankünfte"
    },
    {
      "id": "a22-24-v-17-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خداحافظی",
      "answers": [
        "der Abschied",
        "Abschied"
      ],
      "why": "Der Abschied fiel mir schwer."
    },
    {
      "id": "a22-24-v-17-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Abschied",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Abschied",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-17-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Abschied",
      "answers": [
        "Abschiede",
        "die Abschiede"
      ],
      "why": "جمع: die Abschiede"
    },
    {
      "id": "a22-24-v-18-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "فرودگاه",
      "answers": [
        "der Flughafen",
        "Flughafen"
      ],
      "why": "Meine Familie wartete am Flughafen."
    },
    {
      "id": "a22-24-v-18-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Flughafen",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Flughafen",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-18-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Flughafen",
      "answers": [
        "Flughäfen",
        "die Flughäfen"
      ],
      "why": "جمع: die Flughäfen"
    },
    {
      "id": "a22-24-v-19-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "برنامهٔ روزانه",
      "answers": [
        "der Tagesablauf",
        "Tagesablauf"
      ],
      "why": "Mein Tagesablauf war gut organisiert."
    },
    {
      "id": "a22-24-v-19-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Tagesablauf",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Tagesablauf",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-19-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Tagesablauf",
      "answers": [
        "Tagesabläufe",
        "die Tagesabläufe"
      ],
      "why": "جمع: die Tagesabläufe"
    },
    {
      "id": "a22-24-v-20-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اوقات فراغت",
      "answers": [
        "die Freizeit",
        "Freizeit"
      ],
      "why": "In meiner Freizeit besuchte ich Museen."
    },
    {
      "id": "a22-24-v-20-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Freizeit",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Freizeit",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-21-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ناامیدی",
      "answers": [
        "die Enttäuschung",
        "Enttäuschung"
      ],
      "why": "Der erste Tag war eine Enttäuschung."
    },
    {
      "id": "a22-24-v-21-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Enttäuschung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Enttäuschung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-21-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Enttäuschung",
      "answers": [
        "Enttäuschungen",
        "die Enttäuschungen"
      ],
      "why": "جمع: die Enttäuschungen"
    },
    {
      "id": "a22-24-v-22-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "اشتیاق؛ ذوق",
      "answers": [
        "die Begeisterung",
        "Begeisterung"
      ],
      "why": "Mit Begeisterung erzählte sie von der Reise."
    },
    {
      "id": "a22-24-v-22-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Begeisterung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Begeisterung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-23-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "حمایت",
      "answers": [
        "die Unterstützung",
        "Unterstützung"
      ],
      "why": "Ich bekam viel Unterstützung."
    },
    {
      "id": "a22-24-v-23-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Unterstützung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Unterstützung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-23-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Unterstützung",
      "answers": [
        "Unterstützungen",
        "die Unterstützungen"
      ],
      "why": "جمع: die Unterstützungen"
    },
    {
      "id": "a22-24-v-24-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رابطه",
      "answers": [
        "die Beziehung",
        "Beziehung"
      ],
      "why": "Wir haben eine gute Beziehung."
    },
    {
      "id": "a22-24-v-24-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Beziehung",
      "answers": [
        "die"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: die Beziehung",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-24-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "die Beziehung",
      "answers": [
        "Beziehungen",
        "die Beziehungen"
      ],
      "why": "جمع: die Beziehungen"
    },
    {
      "id": "a22-24-v-25-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ارتباط",
      "answers": [
        "der Kontakt",
        "Kontakt"
      ],
      "why": "Wir bleiben auch heute in Kontakt."
    },
    {
      "id": "a22-24-v-25-article",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "آرتیکل",
      "prompt": "آرتیکل اسم را در Nominativ مفرد انتخاب کن.",
      "text": "Kontakt",
      "answers": [
        "der"
      ],
      "why": "اسم را با آرتیکل یاد بگیر: der Kontakt",
      "options": [
        "der",
        "die",
        "das"
      ]
    },
    {
      "id": "a22-24-v-25-plural",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "جمع",
      "prompt": "صورت جمع اسم را بنویس؛ die اختیاری است.",
      "text": "der Kontakt",
      "answers": [
        "Kontakte",
        "die Kontakte"
      ],
      "why": "جمع: die Kontakte"
    },
    {
      "id": "a22-24-v-26-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "رسیدن",
      "answers": [
        "ankommen"
      ],
      "why": "Ich kam am Sonntag an."
    },
    {
      "id": "a22-24-v-27-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دنبال کسی رفتن و آوردن",
      "answers": [
        "abholen"
      ],
      "why": "Meine Gastfamilie holte mich ab."
    },
    {
      "id": "a22-24-v-28-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "از خواب برخاستن",
      "answers": [
        "aufstehen"
      ],
      "why": "Ich stand jeden Morgen früh auf."
    },
    {
      "id": "a22-24-v-29-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "شروع کردن یا شدن",
      "answers": [
        "beginnen"
      ],
      "why": "Die Arbeit begann um acht Uhr."
    },
    {
      "id": "a22-24-v-30-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "آشنا شدن با",
      "answers": [
        "kennenlernen"
      ],
      "why": "Ich lernte viele Menschen kennen."
    },
    {
      "id": "a22-24-v-31-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "عادت کردن به",
      "answers": [
        "sich gewöhnen an"
      ],
      "why": "Ich gewöhnte mich an das neue Leben."
    },
    {
      "id": "a22-24-v-32-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "دلتنگ کسی یا چیزی بودن",
      "answers": [
        "vermissen"
      ],
      "why": "Ich vermisste meine Freunde."
    },
    {
      "id": "a22-24-v-33-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "تجربه کردن",
      "answers": [
        "erleben"
      ],
      "why": "Wir erlebten viel zusammen."
    },
    {
      "id": "a22-24-v-34-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "کمک کردن",
      "answers": [
        "helfen"
      ],
      "why": "Die Kollegen halfen mir."
    },
    {
      "id": "a22-24-v-35-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ماندن",
      "answers": [
        "bleiben"
      ],
      "why": "Ich blieb sechs Monate."
    },
    {
      "id": "a22-24-v-36-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "بازگشتن",
      "answers": [
        "zurückkehren"
      ],
      "why": "Im Herbst kehrte ich zurück."
    },
    {
      "id": "a22-24-v-37-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "گزارش و تعریف کردن",
      "answers": [
        "berichten"
      ],
      "why": "Ich berichtete von meinen Erfahrungen."
    },
    {
      "id": "a22-24-v-38-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "روایت کردن",
      "answers": [
        "erzählen"
      ],
      "why": "Sie erzählte uns von ihrem Alltag."
    },
    {
      "id": "a22-24-v-39-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "امید داشتن",
      "answers": [
        "hoffen"
      ],
      "why": "Ich hoffte auf ein Wiedersehen."
    },
    {
      "id": "a22-24-v-40-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "خوشحال بودن یا شدن",
      "answers": [
        "sich freuen"
      ],
      "why": "Wir freuten uns auf die Rückkehr."
    },
    {
      "id": "a22-24-v-41-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ذوق‌زده",
      "answers": [
        "begeistert"
      ],
      "why": "Ich war von der Stadt begeistert."
    },
    {
      "id": "a22-24-v-42-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ناامید",
      "answers": [
        "enttäuscht"
      ],
      "why": "Zuerst war ich etwas enttäuscht."
    },
    {
      "id": "a22-24-v-43-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "متعجب",
      "answers": [
        "überrascht"
      ],
      "why": "Über die Hilfe war ich überrascht."
    },
    {
      "id": "a22-24-v-44-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ناآشنا؛ غیرمعمول",
      "answers": [
        "ungewohnt"
      ],
      "why": "Das Essen war für mich ungewohnt."
    },
    {
      "id": "a22-24-v-45-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "مستقل",
      "answers": [
        "selbstständig"
      ],
      "why": "Im Ausland wurde ich selbstständiger."
    },
    {
      "id": "a22-24-v-46-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "ناگهان",
      "answers": [
        "plötzlich"
      ],
      "why": "Plötzlich verstand ich das Gespräch."
    },
    {
      "id": "a22-24-v-47-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "سرانجام",
      "answers": [
        "schließlich"
      ],
      "why": "Schließlich fühlte ich mich zu Hause."
    },
    {
      "id": "a22-24-v-48-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در ابتدا",
      "answers": [
        "am Anfang"
      ],
      "why": "Am Anfang war alles neu."
    },
    {
      "id": "a22-24-v-49-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "با گذشت زمان",
      "answers": [
        "mit der Zeit"
      ],
      "why": "Mit der Zeit wurde es leichter."
    },
    {
      "id": "a22-24-v-50-recall",
      "lesson": 24,
      "mode": "vocabQuiz",
      "topic": "معنی و املا",
      "prompt": "واژه یا عبارت این درس را از روی معنی بنویس؛ برای اسم آرتیکل اختیاری است.",
      "text": "در تماس ماندن",
      "answers": [
        "in Kontakt bleiben"
      ],
      "why": "Wir wollen in Kontakt bleiben."
    },
    {
      "id": "a22-13-verb-lernen-present-0",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · lernen · Präsens",
      "answers": [
        "lerne"
      ],
      "why": "ich lerne؛ Präsens فعل lernen"
    },
    {
      "id": "a22-13-verb-lernen-present-1",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · lernen · Präsens",
      "answers": [
        "lernst"
      ],
      "why": "du lernst؛ Präsens فعل lernen"
    },
    {
      "id": "a22-13-verb-lernen-present-2",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · lernen · Präsens",
      "answers": [
        "lernt"
      ],
      "why": "er/sie/es lernt؛ Präsens فعل lernen"
    },
    {
      "id": "a22-13-verb-lernen-present-3",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · lernen · Präsens",
      "answers": [
        "lernen"
      ],
      "why": "wir lernen؛ Präsens فعل lernen"
    },
    {
      "id": "a22-13-verb-lernen-present-4",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · lernen · Präsens",
      "answers": [
        "lernt"
      ],
      "why": "ihr lernt؛ Präsens فعل lernen"
    },
    {
      "id": "a22-13-verb-lernen-present-5",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · lernen · Präsens",
      "answers": [
        "lernen"
      ],
      "why": "sie/Sie lernen؛ Präsens فعل lernen"
    },
    {
      "id": "a22-13-verb-lernen-perfect",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "lernen · Perfekt (er)",
      "answers": [
        "hat gelernt"
      ],
      "why": "در این کاربرد: hat gelernt"
    },
    {
      "id": "a22-13-verb-sprechen-present-0",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sprechen · Präsens",
      "answers": [
        "spreche"
      ],
      "why": "ich spreche؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-13-verb-sprechen-present-1",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sprechen · Präsens",
      "answers": [
        "sprichst"
      ],
      "why": "du sprichst؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-13-verb-sprechen-present-2",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sprechen · Präsens",
      "answers": [
        "spricht"
      ],
      "why": "er/sie/es spricht؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-13-verb-sprechen-present-3",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sprechen · Präsens",
      "answers": [
        "sprechen"
      ],
      "why": "wir sprechen؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-13-verb-sprechen-present-4",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sprechen · Präsens",
      "answers": [
        "sprecht"
      ],
      "why": "ihr sprecht؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-13-verb-sprechen-present-5",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sprechen · Präsens",
      "answers": [
        "sprechen"
      ],
      "why": "sie/Sie sprechen؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-13-verb-sprechen-perfect",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sprechen · Perfekt (er)",
      "answers": [
        "hat gesprochen"
      ],
      "why": "در این کاربرد: hat gesprochen"
    },
    {
      "id": "a22-13-verb-verstehen-present-0",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · verstehen · Präsens",
      "answers": [
        "verstehe"
      ],
      "why": "ich verstehe؛ Präsens فعل verstehen"
    },
    {
      "id": "a22-13-verb-verstehen-present-1",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · verstehen · Präsens",
      "answers": [
        "verstehst"
      ],
      "why": "du verstehst؛ Präsens فعل verstehen"
    },
    {
      "id": "a22-13-verb-verstehen-present-2",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · verstehen · Präsens",
      "answers": [
        "versteht"
      ],
      "why": "er/sie/es versteht؛ Präsens فعل verstehen"
    },
    {
      "id": "a22-13-verb-verstehen-present-3",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · verstehen · Präsens",
      "answers": [
        "verstehen"
      ],
      "why": "wir verstehen؛ Präsens فعل verstehen"
    },
    {
      "id": "a22-13-verb-verstehen-present-4",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · verstehen · Präsens",
      "answers": [
        "versteht"
      ],
      "why": "ihr versteht؛ Präsens فعل verstehen"
    },
    {
      "id": "a22-13-verb-verstehen-present-5",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · verstehen · Präsens",
      "answers": [
        "verstehen"
      ],
      "why": "sie/Sie verstehen؛ Präsens فعل verstehen"
    },
    {
      "id": "a22-13-verb-verstehen-perfect",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "verstehen · Perfekt (er)",
      "answers": [
        "hat verstanden"
      ],
      "why": "در این کاربرد: hat verstanden"
    },
    {
      "id": "a22-13-verb-anfangen-present-0",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · anfangen · Präsens",
      "answers": [
        "fange an"
      ],
      "why": "ich fange an؛ Präsens فعل anfangen"
    },
    {
      "id": "a22-13-verb-anfangen-present-1",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · anfangen · Präsens",
      "answers": [
        "fängst an"
      ],
      "why": "du fängst an؛ Präsens فعل anfangen"
    },
    {
      "id": "a22-13-verb-anfangen-present-2",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · anfangen · Präsens",
      "answers": [
        "fängt an"
      ],
      "why": "er/sie/es fängt an؛ Präsens فعل anfangen"
    },
    {
      "id": "a22-13-verb-anfangen-present-3",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · anfangen · Präsens",
      "answers": [
        "fangen an"
      ],
      "why": "wir fangen an؛ Präsens فعل anfangen"
    },
    {
      "id": "a22-13-verb-anfangen-present-4",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · anfangen · Präsens",
      "answers": [
        "fangt an"
      ],
      "why": "ihr fangt an؛ Präsens فعل anfangen"
    },
    {
      "id": "a22-13-verb-anfangen-present-5",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · anfangen · Präsens",
      "answers": [
        "fangen an"
      ],
      "why": "sie/Sie fangen an؛ Präsens فعل anfangen"
    },
    {
      "id": "a22-13-verb-anfangen-perfect",
      "lesson": 13,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "anfangen · Perfekt (er)",
      "answers": [
        "hat angefangen"
      ],
      "why": "در این کاربرد: hat angefangen"
    },
    {
      "id": "a22-17-verb-fahren-present-0",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · fahren · Präsens",
      "answers": [
        "fahre"
      ],
      "why": "ich fahre؛ Präsens فعل fahren"
    },
    {
      "id": "a22-17-verb-fahren-present-1",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · fahren · Präsens",
      "answers": [
        "fährst"
      ],
      "why": "du fährst؛ Präsens فعل fahren"
    },
    {
      "id": "a22-17-verb-fahren-present-2",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · fahren · Präsens",
      "answers": [
        "fährt"
      ],
      "why": "er/sie/es fährt؛ Präsens فعل fahren"
    },
    {
      "id": "a22-17-verb-fahren-present-3",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · fahren · Präsens",
      "answers": [
        "fahren"
      ],
      "why": "wir fahren؛ Präsens فعل fahren"
    },
    {
      "id": "a22-17-verb-fahren-present-4",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · fahren · Präsens",
      "answers": [
        "fahrt"
      ],
      "why": "ihr fahrt؛ Präsens فعل fahren"
    },
    {
      "id": "a22-17-verb-fahren-present-5",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · fahren · Präsens",
      "answers": [
        "fahren"
      ],
      "why": "sie/Sie fahren؛ Präsens فعل fahren"
    },
    {
      "id": "a22-17-verb-fahren-perfect",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "fahren · Perfekt (er)",
      "answers": [
        "ist gefahren"
      ],
      "why": "در این کاربرد: ist gefahren"
    },
    {
      "id": "a22-17-verb-fliegen-present-0",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · fliegen · Präsens",
      "answers": [
        "fliege"
      ],
      "why": "ich fliege؛ Präsens فعل fliegen"
    },
    {
      "id": "a22-17-verb-fliegen-present-1",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · fliegen · Präsens",
      "answers": [
        "fliegst"
      ],
      "why": "du fliegst؛ Präsens فعل fliegen"
    },
    {
      "id": "a22-17-verb-fliegen-present-2",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · fliegen · Präsens",
      "answers": [
        "fliegt"
      ],
      "why": "er/sie/es fliegt؛ Präsens فعل fliegen"
    },
    {
      "id": "a22-17-verb-fliegen-present-3",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · fliegen · Präsens",
      "answers": [
        "fliegen"
      ],
      "why": "wir fliegen؛ Präsens فعل fliegen"
    },
    {
      "id": "a22-17-verb-fliegen-present-4",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · fliegen · Präsens",
      "answers": [
        "fliegt"
      ],
      "why": "ihr fliegt؛ Präsens فعل fliegen"
    },
    {
      "id": "a22-17-verb-fliegen-present-5",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · fliegen · Präsens",
      "answers": [
        "fliegen"
      ],
      "why": "sie/Sie fliegen؛ Präsens فعل fliegen"
    },
    {
      "id": "a22-17-verb-fliegen-perfect",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "fliegen · Perfekt (er)",
      "answers": [
        "ist geflogen"
      ],
      "why": "در این کاربرد: ist geflogen"
    },
    {
      "id": "a22-17-verb-umsteigen-present-0",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · umsteigen · Präsens",
      "answers": [
        "steige um"
      ],
      "why": "ich steige um؛ Präsens فعل umsteigen"
    },
    {
      "id": "a22-17-verb-umsteigen-present-1",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · umsteigen · Präsens",
      "answers": [
        "steigst um"
      ],
      "why": "du steigst um؛ Präsens فعل umsteigen"
    },
    {
      "id": "a22-17-verb-umsteigen-present-2",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · umsteigen · Präsens",
      "answers": [
        "steigt um"
      ],
      "why": "er/sie/es steigt um؛ Präsens فعل umsteigen"
    },
    {
      "id": "a22-17-verb-umsteigen-present-3",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · umsteigen · Präsens",
      "answers": [
        "steigen um"
      ],
      "why": "wir steigen um؛ Präsens فعل umsteigen"
    },
    {
      "id": "a22-17-verb-umsteigen-present-4",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · umsteigen · Präsens",
      "answers": [
        "steigt um"
      ],
      "why": "ihr steigt um؛ Präsens فعل umsteigen"
    },
    {
      "id": "a22-17-verb-umsteigen-present-5",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · umsteigen · Präsens",
      "answers": [
        "steigen um"
      ],
      "why": "sie/Sie steigen um؛ Präsens فعل umsteigen"
    },
    {
      "id": "a22-17-verb-umsteigen-perfect",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "umsteigen · Perfekt (er)",
      "answers": [
        "ist umgestiegen"
      ],
      "why": "در این کاربرد: ist umgestiegen"
    },
    {
      "id": "a22-17-verb-mitnehmen-present-0",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · mitnehmen · Präsens",
      "answers": [
        "nehme mit"
      ],
      "why": "ich nehme mit؛ Präsens فعل mitnehmen"
    },
    {
      "id": "a22-17-verb-mitnehmen-present-1",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · mitnehmen · Präsens",
      "answers": [
        "nimmst mit"
      ],
      "why": "du nimmst mit؛ Präsens فعل mitnehmen"
    },
    {
      "id": "a22-17-verb-mitnehmen-present-2",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · mitnehmen · Präsens",
      "answers": [
        "nimmt mit"
      ],
      "why": "er/sie/es nimmt mit؛ Präsens فعل mitnehmen"
    },
    {
      "id": "a22-17-verb-mitnehmen-present-3",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · mitnehmen · Präsens",
      "answers": [
        "nehmen mit"
      ],
      "why": "wir nehmen mit؛ Präsens فعل mitnehmen"
    },
    {
      "id": "a22-17-verb-mitnehmen-present-4",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · mitnehmen · Präsens",
      "answers": [
        "nehmt mit"
      ],
      "why": "ihr nehmt mit؛ Präsens فعل mitnehmen"
    },
    {
      "id": "a22-17-verb-mitnehmen-present-5",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · mitnehmen · Präsens",
      "answers": [
        "nehmen mit"
      ],
      "why": "sie/Sie nehmen mit؛ Präsens فعل mitnehmen"
    },
    {
      "id": "a22-17-verb-mitnehmen-perfect",
      "lesson": 17,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "mitnehmen · Perfekt (er)",
      "answers": [
        "hat mitgenommen"
      ],
      "why": "در این کاربرد: hat mitgenommen"
    },
    {
      "id": "a22-18-verb-warten-present-0",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · warten · Präsens",
      "answers": [
        "warte"
      ],
      "why": "ich warte؛ Präsens فعل warten"
    },
    {
      "id": "a22-18-verb-warten-present-1",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · warten · Präsens",
      "answers": [
        "wartest"
      ],
      "why": "du wartest؛ Präsens فعل warten"
    },
    {
      "id": "a22-18-verb-warten-present-2",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · warten · Präsens",
      "answers": [
        "wartet"
      ],
      "why": "er/sie/es wartet؛ Präsens فعل warten"
    },
    {
      "id": "a22-18-verb-warten-present-3",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · warten · Präsens",
      "answers": [
        "warten"
      ],
      "why": "wir warten؛ Präsens فعل warten"
    },
    {
      "id": "a22-18-verb-warten-present-4",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · warten · Präsens",
      "answers": [
        "wartet"
      ],
      "why": "ihr wartet؛ Präsens فعل warten"
    },
    {
      "id": "a22-18-verb-warten-present-5",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · warten · Präsens",
      "answers": [
        "warten"
      ],
      "why": "sie/Sie warten؛ Präsens فعل warten"
    },
    {
      "id": "a22-18-verb-warten-perfect",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "warten · Perfekt (er)",
      "answers": [
        "hat gewartet"
      ],
      "why": "در این کاربرد: hat gewartet"
    },
    {
      "id": "a22-18-verb-freuen-present-0",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sich freuen · Präsens",
      "answers": [
        "freue mich"
      ],
      "why": "ich freue mich؛ Präsens فعل sich freuen"
    },
    {
      "id": "a22-18-verb-freuen-present-1",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sich freuen · Präsens",
      "answers": [
        "freust dich"
      ],
      "why": "du freust dich؛ Präsens فعل sich freuen"
    },
    {
      "id": "a22-18-verb-freuen-present-2",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sich freuen · Präsens",
      "answers": [
        "freut sich"
      ],
      "why": "er/sie/es freut sich؛ Präsens فعل sich freuen"
    },
    {
      "id": "a22-18-verb-freuen-present-3",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sich freuen · Präsens",
      "answers": [
        "freuen uns"
      ],
      "why": "wir freuen uns؛ Präsens فعل sich freuen"
    },
    {
      "id": "a22-18-verb-freuen-present-4",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sich freuen · Präsens",
      "answers": [
        "freut euch"
      ],
      "why": "ihr freut euch؛ Präsens فعل sich freuen"
    },
    {
      "id": "a22-18-verb-freuen-present-5",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sich freuen · Präsens",
      "answers": [
        "freuen sich"
      ],
      "why": "sie/Sie freuen sich؛ Präsens فعل sich freuen"
    },
    {
      "id": "a22-18-verb-freuen-perfect",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sich freuen · Perfekt (er)",
      "answers": [
        "hat sich gefreut"
      ],
      "why": "در این کاربرد: hat sich gefreut"
    },
    {
      "id": "a22-18-verb-interessieren-present-0",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sich interessieren · Präsens",
      "answers": [
        "interessiere mich"
      ],
      "why": "ich interessiere mich؛ Präsens فعل sich interessieren"
    },
    {
      "id": "a22-18-verb-interessieren-present-1",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sich interessieren · Präsens",
      "answers": [
        "interessierst dich"
      ],
      "why": "du interessierst dich؛ Präsens فعل sich interessieren"
    },
    {
      "id": "a22-18-verb-interessieren-present-2",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sich interessieren · Präsens",
      "answers": [
        "interessiert sich"
      ],
      "why": "er/sie/es interessiert sich؛ Präsens فعل sich interessieren"
    },
    {
      "id": "a22-18-verb-interessieren-present-3",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sich interessieren · Präsens",
      "answers": [
        "interessieren uns"
      ],
      "why": "wir interessieren uns؛ Präsens فعل sich interessieren"
    },
    {
      "id": "a22-18-verb-interessieren-present-4",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sich interessieren · Präsens",
      "answers": [
        "interessiert euch"
      ],
      "why": "ihr interessiert euch؛ Präsens فعل sich interessieren"
    },
    {
      "id": "a22-18-verb-interessieren-present-5",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sich interessieren · Präsens",
      "answers": [
        "interessieren sich"
      ],
      "why": "sie/Sie interessieren sich؛ Präsens فعل sich interessieren"
    },
    {
      "id": "a22-18-verb-interessieren-perfect",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sich interessieren · Perfekt (er)",
      "answers": [
        "hat sich interessiert"
      ],
      "why": "در این کاربرد: hat sich interessiert"
    },
    {
      "id": "a22-18-verb-sprechen-present-0",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sprechen · Präsens",
      "answers": [
        "spreche"
      ],
      "why": "ich spreche؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-18-verb-sprechen-present-1",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sprechen · Präsens",
      "answers": [
        "sprichst"
      ],
      "why": "du sprichst؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-18-verb-sprechen-present-2",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sprechen · Präsens",
      "answers": [
        "spricht"
      ],
      "why": "er/sie/es spricht؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-18-verb-sprechen-present-3",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sprechen · Präsens",
      "answers": [
        "sprechen"
      ],
      "why": "wir sprechen؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-18-verb-sprechen-present-4",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sprechen · Präsens",
      "answers": [
        "sprecht"
      ],
      "why": "ihr sprecht؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-18-verb-sprechen-present-5",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sprechen · Präsens",
      "answers": [
        "sprechen"
      ],
      "why": "sie/Sie sprechen؛ Präsens فعل sprechen"
    },
    {
      "id": "a22-18-verb-sprechen-perfect",
      "lesson": 18,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sprechen · Perfekt (er)",
      "answers": [
        "hat gesprochen"
      ],
      "why": "در این کاربرد: hat gesprochen"
    },
    {
      "id": "a22-19-verb-vorschlagen-present-0",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · vorschlagen · Präsens",
      "answers": [
        "schlage vor"
      ],
      "why": "ich schlage vor؛ Präsens فعل vorschlagen"
    },
    {
      "id": "a22-19-verb-vorschlagen-present-1",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · vorschlagen · Präsens",
      "answers": [
        "schlägst vor"
      ],
      "why": "du schlägst vor؛ Präsens فعل vorschlagen"
    },
    {
      "id": "a22-19-verb-vorschlagen-present-2",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · vorschlagen · Präsens",
      "answers": [
        "schlägt vor"
      ],
      "why": "er/sie/es schlägt vor؛ Präsens فعل vorschlagen"
    },
    {
      "id": "a22-19-verb-vorschlagen-present-3",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · vorschlagen · Präsens",
      "answers": [
        "schlagen vor"
      ],
      "why": "wir schlagen vor؛ Präsens فعل vorschlagen"
    },
    {
      "id": "a22-19-verb-vorschlagen-present-4",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · vorschlagen · Präsens",
      "answers": [
        "schlagt vor"
      ],
      "why": "ihr schlagt vor؛ Präsens فعل vorschlagen"
    },
    {
      "id": "a22-19-verb-vorschlagen-present-5",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · vorschlagen · Präsens",
      "answers": [
        "schlagen vor"
      ],
      "why": "sie/Sie schlagen vor؛ Präsens فعل vorschlagen"
    },
    {
      "id": "a22-19-verb-vorschlagen-perfect",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "vorschlagen · Perfekt (er)",
      "answers": [
        "hat vorgeschlagen"
      ],
      "why": "در این کاربرد: hat vorgeschlagen"
    },
    {
      "id": "a22-19-verb-besuchen-present-0",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · besuchen · Präsens",
      "answers": [
        "besuche"
      ],
      "why": "ich besuche؛ Präsens فعل besuchen"
    },
    {
      "id": "a22-19-verb-besuchen-present-1",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · besuchen · Präsens",
      "answers": [
        "besuchst"
      ],
      "why": "du besuchst؛ Präsens فعل besuchen"
    },
    {
      "id": "a22-19-verb-besuchen-present-2",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · besuchen · Präsens",
      "answers": [
        "besucht"
      ],
      "why": "er/sie/es besucht؛ Präsens فعل besuchen"
    },
    {
      "id": "a22-19-verb-besuchen-present-3",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · besuchen · Präsens",
      "answers": [
        "besuchen"
      ],
      "why": "wir besuchen؛ Präsens فعل besuchen"
    },
    {
      "id": "a22-19-verb-besuchen-present-4",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · besuchen · Präsens",
      "answers": [
        "besucht"
      ],
      "why": "ihr besucht؛ Präsens فعل besuchen"
    },
    {
      "id": "a22-19-verb-besuchen-present-5",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · besuchen · Präsens",
      "answers": [
        "besuchen"
      ],
      "why": "sie/Sie besuchen؛ Präsens فعل besuchen"
    },
    {
      "id": "a22-19-verb-besuchen-perfect",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "besuchen · Perfekt (er)",
      "answers": [
        "hat besucht"
      ],
      "why": "در این کاربرد: hat besucht"
    },
    {
      "id": "a22-19-verb-empfehlen-present-0",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · empfehlen · Präsens",
      "answers": [
        "empfehle"
      ],
      "why": "ich empfehle؛ Präsens فعل empfehlen"
    },
    {
      "id": "a22-19-verb-empfehlen-present-1",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · empfehlen · Präsens",
      "answers": [
        "empfiehlst"
      ],
      "why": "du empfiehlst؛ Präsens فعل empfehlen"
    },
    {
      "id": "a22-19-verb-empfehlen-present-2",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · empfehlen · Präsens",
      "answers": [
        "empfiehlt"
      ],
      "why": "er/sie/es empfiehlt؛ Präsens فعل empfehlen"
    },
    {
      "id": "a22-19-verb-empfehlen-present-3",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · empfehlen · Präsens",
      "answers": [
        "empfehlen"
      ],
      "why": "wir empfehlen؛ Präsens فعل empfehlen"
    },
    {
      "id": "a22-19-verb-empfehlen-present-4",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · empfehlen · Präsens",
      "answers": [
        "empfehlt"
      ],
      "why": "ihr empfehlt؛ Präsens فعل empfehlen"
    },
    {
      "id": "a22-19-verb-empfehlen-present-5",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · empfehlen · Präsens",
      "answers": [
        "empfehlen"
      ],
      "why": "sie/Sie empfehlen؛ Präsens فعل empfehlen"
    },
    {
      "id": "a22-19-verb-empfehlen-perfect",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "empfehlen · Perfekt (er)",
      "answers": [
        "hat empfohlen"
      ],
      "why": "در این کاربرد: hat empfohlen"
    },
    {
      "id": "a22-19-verb-zurueckkommen-present-0",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · zurückkommen · Präsens",
      "answers": [
        "komme zurück"
      ],
      "why": "ich komme zurück؛ Präsens فعل zurückkommen"
    },
    {
      "id": "a22-19-verb-zurueckkommen-present-1",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · zurückkommen · Präsens",
      "answers": [
        "kommst zurück"
      ],
      "why": "du kommst zurück؛ Präsens فعل zurückkommen"
    },
    {
      "id": "a22-19-verb-zurueckkommen-present-2",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · zurückkommen · Präsens",
      "answers": [
        "kommt zurück"
      ],
      "why": "er/sie/es kommt zurück؛ Präsens فعل zurückkommen"
    },
    {
      "id": "a22-19-verb-zurueckkommen-present-3",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · zurückkommen · Präsens",
      "answers": [
        "kommen zurück"
      ],
      "why": "wir kommen zurück؛ Präsens فعل zurückkommen"
    },
    {
      "id": "a22-19-verb-zurueckkommen-present-4",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · zurückkommen · Präsens",
      "answers": [
        "kommt zurück"
      ],
      "why": "ihr kommt zurück؛ Präsens فعل zurückkommen"
    },
    {
      "id": "a22-19-verb-zurueckkommen-present-5",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · zurückkommen · Präsens",
      "answers": [
        "kommen zurück"
      ],
      "why": "sie/Sie kommen zurück؛ Präsens فعل zurückkommen"
    },
    {
      "id": "a22-19-verb-zurueckkommen-perfect",
      "lesson": 19,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "zurückkommen · Perfekt (er)",
      "answers": [
        "ist zurückgekommen"
      ],
      "why": "در این کاربرد: ist zurückgekommen"
    },
    {
      "id": "a22-20-verb-duerfen-present-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · dürfen · Präsens",
      "answers": [
        "darf"
      ],
      "why": "ich darf؛ Präsens فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-present-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · dürfen · Präsens",
      "answers": [
        "darfst"
      ],
      "why": "du darfst؛ Präsens فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-present-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · dürfen · Präsens",
      "answers": [
        "darf"
      ],
      "why": "er/sie/es darf؛ Präsens فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-present-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · dürfen · Präsens",
      "answers": [
        "dürfen"
      ],
      "why": "wir dürfen؛ Präsens فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-present-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · dürfen · Präsens",
      "answers": [
        "dürft"
      ],
      "why": "ihr dürft؛ Präsens فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-present-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · dürfen · Präsens",
      "answers": [
        "dürfen"
      ],
      "why": "sie/Sie dürfen؛ Präsens فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-past-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · dürfen · Präteritum",
      "answers": [
        "durfte"
      ],
      "why": "ich durfte؛ Präteritum فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-past-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · dürfen · Präteritum",
      "answers": [
        "durftest"
      ],
      "why": "du durftest؛ Präteritum فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-past-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · dürfen · Präteritum",
      "answers": [
        "durfte"
      ],
      "why": "er/sie/es durfte؛ Präteritum فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-past-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · dürfen · Präteritum",
      "answers": [
        "durften"
      ],
      "why": "wir durften؛ Präteritum فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-past-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · dürfen · Präteritum",
      "answers": [
        "durftet"
      ],
      "why": "ihr durftet؛ Präteritum فعل dürfen"
    },
    {
      "id": "a22-20-verb-duerfen-past-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · dürfen · Präteritum",
      "answers": [
        "durften"
      ],
      "why": "sie/Sie durften؛ Präteritum فعل dürfen"
    },
    {
      "id": "a22-20-verb-koennen-present-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · können · Präsens",
      "answers": [
        "kann"
      ],
      "why": "ich kann؛ Präsens فعل können"
    },
    {
      "id": "a22-20-verb-koennen-present-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · können · Präsens",
      "answers": [
        "kannst"
      ],
      "why": "du kannst؛ Präsens فعل können"
    },
    {
      "id": "a22-20-verb-koennen-present-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · können · Präsens",
      "answers": [
        "kann"
      ],
      "why": "er/sie/es kann؛ Präsens فعل können"
    },
    {
      "id": "a22-20-verb-koennen-present-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · können · Präsens",
      "answers": [
        "können"
      ],
      "why": "wir können؛ Präsens فعل können"
    },
    {
      "id": "a22-20-verb-koennen-present-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · können · Präsens",
      "answers": [
        "könnt"
      ],
      "why": "ihr könnt؛ Präsens فعل können"
    },
    {
      "id": "a22-20-verb-koennen-present-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · können · Präsens",
      "answers": [
        "können"
      ],
      "why": "sie/Sie können؛ Präsens فعل können"
    },
    {
      "id": "a22-20-verb-koennen-past-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · können · Präteritum",
      "answers": [
        "konnte"
      ],
      "why": "ich konnte؛ Präteritum فعل können"
    },
    {
      "id": "a22-20-verb-koennen-past-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · können · Präteritum",
      "answers": [
        "konntest"
      ],
      "why": "du konntest؛ Präteritum فعل können"
    },
    {
      "id": "a22-20-verb-koennen-past-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · können · Präteritum",
      "answers": [
        "konnte"
      ],
      "why": "er/sie/es konnte؛ Präteritum فعل können"
    },
    {
      "id": "a22-20-verb-koennen-past-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · können · Präteritum",
      "answers": [
        "konnten"
      ],
      "why": "wir konnten؛ Präteritum فعل können"
    },
    {
      "id": "a22-20-verb-koennen-past-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · können · Präteritum",
      "answers": [
        "konntet"
      ],
      "why": "ihr konntet؛ Präteritum فعل können"
    },
    {
      "id": "a22-20-verb-koennen-past-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · können · Präteritum",
      "answers": [
        "konnten"
      ],
      "why": "sie/Sie konnten؛ Präteritum فعل können"
    },
    {
      "id": "a22-20-verb-muessen-present-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · müssen · Präsens",
      "answers": [
        "muss"
      ],
      "why": "ich muss؛ Präsens فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-present-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · müssen · Präsens",
      "answers": [
        "musst"
      ],
      "why": "du musst؛ Präsens فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-present-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · müssen · Präsens",
      "answers": [
        "muss"
      ],
      "why": "er/sie/es muss؛ Präsens فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-present-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · müssen · Präsens",
      "answers": [
        "müssen"
      ],
      "why": "wir müssen؛ Präsens فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-present-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · müssen · Präsens",
      "answers": [
        "müsst"
      ],
      "why": "ihr müsst؛ Präsens فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-present-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · müssen · Präsens",
      "answers": [
        "müssen"
      ],
      "why": "sie/Sie müssen؛ Präsens فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-past-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · müssen · Präteritum",
      "answers": [
        "musste"
      ],
      "why": "ich musste؛ Präteritum فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-past-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · müssen · Präteritum",
      "answers": [
        "musstest"
      ],
      "why": "du musstest؛ Präteritum فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-past-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · müssen · Präteritum",
      "answers": [
        "musste"
      ],
      "why": "er/sie/es musste؛ Präteritum فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-past-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · müssen · Präteritum",
      "answers": [
        "mussten"
      ],
      "why": "wir mussten؛ Präteritum فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-past-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · müssen · Präteritum",
      "answers": [
        "musstet"
      ],
      "why": "ihr musstet؛ Präteritum فعل müssen"
    },
    {
      "id": "a22-20-verb-muessen-past-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · müssen · Präteritum",
      "answers": [
        "mussten"
      ],
      "why": "sie/Sie mussten؛ Präteritum فعل müssen"
    },
    {
      "id": "a22-20-verb-sollen-present-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sollen · Präsens",
      "answers": [
        "soll"
      ],
      "why": "ich soll؛ Präsens فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-present-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sollen · Präsens",
      "answers": [
        "sollst"
      ],
      "why": "du sollst؛ Präsens فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-present-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sollen · Präsens",
      "answers": [
        "soll"
      ],
      "why": "er/sie/es soll؛ Präsens فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-present-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sollen · Präsens",
      "answers": [
        "sollen"
      ],
      "why": "wir sollen؛ Präsens فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-present-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sollen · Präsens",
      "answers": [
        "sollt"
      ],
      "why": "ihr sollt؛ Präsens فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-present-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sollen · Präsens",
      "answers": [
        "sollen"
      ],
      "why": "sie/Sie sollen؛ Präsens فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-past-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sollen · Präteritum",
      "answers": [
        "sollte"
      ],
      "why": "ich sollte؛ Präteritum فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-past-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sollen · Präteritum",
      "answers": [
        "solltest"
      ],
      "why": "du solltest؛ Präteritum فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-past-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sollen · Präteritum",
      "answers": [
        "sollte"
      ],
      "why": "er/sie/es sollte؛ Präteritum فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-past-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sollen · Präteritum",
      "answers": [
        "sollten"
      ],
      "why": "wir sollten؛ Präteritum فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-past-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sollen · Präteritum",
      "answers": [
        "solltet"
      ],
      "why": "ihr solltet؛ Präteritum فعل sollen"
    },
    {
      "id": "a22-20-verb-sollen-past-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sollen · Präteritum",
      "answers": [
        "sollten"
      ],
      "why": "sie/Sie sollten؛ Präteritum فعل sollen"
    },
    {
      "id": "a22-20-verb-wollen-present-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · wollen · Präsens",
      "answers": [
        "will"
      ],
      "why": "ich will؛ Präsens فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-present-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · wollen · Präsens",
      "answers": [
        "willst"
      ],
      "why": "du willst؛ Präsens فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-present-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · wollen · Präsens",
      "answers": [
        "will"
      ],
      "why": "er/sie/es will؛ Präsens فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-present-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · wollen · Präsens",
      "answers": [
        "wollen"
      ],
      "why": "wir wollen؛ Präsens فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-present-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · wollen · Präsens",
      "answers": [
        "wollt"
      ],
      "why": "ihr wollt؛ Präsens فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-present-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · wollen · Präsens",
      "answers": [
        "wollen"
      ],
      "why": "sie/Sie wollen؛ Präsens فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-past-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · wollen · Präteritum",
      "answers": [
        "wollte"
      ],
      "why": "ich wollte؛ Präteritum فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-past-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · wollen · Präteritum",
      "answers": [
        "wolltest"
      ],
      "why": "du wolltest؛ Präteritum فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-past-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · wollen · Präteritum",
      "answers": [
        "wollte"
      ],
      "why": "er/sie/es wollte؛ Präteritum فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-past-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · wollen · Präteritum",
      "answers": [
        "wollten"
      ],
      "why": "wir wollten؛ Präteritum فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-past-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · wollen · Präteritum",
      "answers": [
        "wolltet"
      ],
      "why": "ihr wolltet؛ Präteritum فعل wollen"
    },
    {
      "id": "a22-20-verb-wollen-past-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · wollen · Präteritum",
      "answers": [
        "wollten"
      ],
      "why": "sie/Sie wollten؛ Präteritum فعل wollen"
    },
    {
      "id": "a22-20-verb-moegen-present-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · mögen · Präsens",
      "answers": [
        "mag"
      ],
      "why": "ich mag؛ Präsens فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-present-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · mögen · Präsens",
      "answers": [
        "magst"
      ],
      "why": "du magst؛ Präsens فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-present-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · mögen · Präsens",
      "answers": [
        "mag"
      ],
      "why": "er/sie/es mag؛ Präsens فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-present-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · mögen · Präsens",
      "answers": [
        "mögen"
      ],
      "why": "wir mögen؛ Präsens فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-present-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · mögen · Präsens",
      "answers": [
        "mögt"
      ],
      "why": "ihr mögt؛ Präsens فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-present-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · mögen · Präsens",
      "answers": [
        "mögen"
      ],
      "why": "sie/Sie mögen؛ Präsens فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-past-0",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · mögen · Präteritum",
      "answers": [
        "mochte"
      ],
      "why": "ich mochte؛ Präteritum فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-past-1",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · mögen · Präteritum",
      "answers": [
        "mochtest"
      ],
      "why": "du mochtest؛ Präteritum فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-past-2",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · mögen · Präteritum",
      "answers": [
        "mochte"
      ],
      "why": "er/sie/es mochte؛ Präteritum فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-past-3",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · mögen · Präteritum",
      "answers": [
        "mochten"
      ],
      "why": "wir mochten؛ Präteritum فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-past-4",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · mögen · Präteritum",
      "answers": [
        "mochtet"
      ],
      "why": "ihr mochtet؛ Präteritum فعل mögen"
    },
    {
      "id": "a22-20-verb-moegen-past-5",
      "lesson": 20,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · mögen · Präteritum",
      "answers": [
        "mochten"
      ],
      "why": "sie/Sie mochten؛ Präteritum فعل mögen"
    },
    {
      "id": "a22-21-verb-lassen-present-0",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · lassen · Präsens",
      "answers": [
        "lasse"
      ],
      "why": "ich lasse؛ Präsens فعل lassen"
    },
    {
      "id": "a22-21-verb-lassen-present-1",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · lassen · Präsens",
      "answers": [
        "lässt"
      ],
      "why": "du lässt؛ Präsens فعل lassen"
    },
    {
      "id": "a22-21-verb-lassen-present-2",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · lassen · Präsens",
      "answers": [
        "lässt"
      ],
      "why": "er/sie/es lässt؛ Präsens فعل lassen"
    },
    {
      "id": "a22-21-verb-lassen-present-3",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · lassen · Präsens",
      "answers": [
        "lassen"
      ],
      "why": "wir lassen؛ Präsens فعل lassen"
    },
    {
      "id": "a22-21-verb-lassen-present-4",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · lassen · Präsens",
      "answers": [
        "lasst"
      ],
      "why": "ihr lasst؛ Präsens فعل lassen"
    },
    {
      "id": "a22-21-verb-lassen-present-5",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · lassen · Präsens",
      "answers": [
        "lassen"
      ],
      "why": "sie/Sie lassen؛ Präsens فعل lassen"
    },
    {
      "id": "a22-21-verb-verlieren-present-0",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · verlieren · Präsens",
      "answers": [
        "verliere"
      ],
      "why": "ich verliere؛ Präsens فعل verlieren"
    },
    {
      "id": "a22-21-verb-verlieren-present-1",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · verlieren · Präsens",
      "answers": [
        "verlierst"
      ],
      "why": "du verlierst؛ Präsens فعل verlieren"
    },
    {
      "id": "a22-21-verb-verlieren-present-2",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · verlieren · Präsens",
      "answers": [
        "verliert"
      ],
      "why": "er/sie/es verliert؛ Präsens فعل verlieren"
    },
    {
      "id": "a22-21-verb-verlieren-present-3",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · verlieren · Präsens",
      "answers": [
        "verlieren"
      ],
      "why": "wir verlieren؛ Präsens فعل verlieren"
    },
    {
      "id": "a22-21-verb-verlieren-present-4",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · verlieren · Präsens",
      "answers": [
        "verliert"
      ],
      "why": "ihr verliert؛ Präsens فعل verlieren"
    },
    {
      "id": "a22-21-verb-verlieren-present-5",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · verlieren · Präsens",
      "answers": [
        "verlieren"
      ],
      "why": "sie/Sie verlieren؛ Präsens فعل verlieren"
    },
    {
      "id": "a22-21-verb-verlieren-perfect",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "verlieren · Perfekt (er)",
      "answers": [
        "hat verloren"
      ],
      "why": "در این کاربرد: hat verloren"
    },
    {
      "id": "a22-21-verb-stehlen-present-0",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · stehlen · Präsens",
      "answers": [
        "stehle"
      ],
      "why": "ich stehle؛ Präsens فعل stehlen"
    },
    {
      "id": "a22-21-verb-stehlen-present-1",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · stehlen · Präsens",
      "answers": [
        "stiehlst"
      ],
      "why": "du stiehlst؛ Präsens فعل stehlen"
    },
    {
      "id": "a22-21-verb-stehlen-present-2",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · stehlen · Präsens",
      "answers": [
        "stiehlt"
      ],
      "why": "er/sie/es stiehlt؛ Präsens فعل stehlen"
    },
    {
      "id": "a22-21-verb-stehlen-present-3",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · stehlen · Präsens",
      "answers": [
        "stehlen"
      ],
      "why": "wir stehlen؛ Präsens فعل stehlen"
    },
    {
      "id": "a22-21-verb-stehlen-present-4",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · stehlen · Präsens",
      "answers": [
        "stehlt"
      ],
      "why": "ihr stehlt؛ Präsens فعل stehlen"
    },
    {
      "id": "a22-21-verb-stehlen-present-5",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · stehlen · Präsens",
      "answers": [
        "stehlen"
      ],
      "why": "sie/Sie stehlen؛ Präsens فعل stehlen"
    },
    {
      "id": "a22-21-verb-stehlen-perfect",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "stehlen · Perfekt (er)",
      "answers": [
        "hat gestohlen"
      ],
      "why": "در این کاربرد: hat gestohlen"
    },
    {
      "id": "a22-21-verb-ausfuellen-present-0",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · ausfüllen · Präsens",
      "answers": [
        "fülle aus"
      ],
      "why": "ich fülle aus؛ Präsens فعل ausfüllen"
    },
    {
      "id": "a22-21-verb-ausfuellen-present-1",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · ausfüllen · Präsens",
      "answers": [
        "füllst aus"
      ],
      "why": "du füllst aus؛ Präsens فعل ausfüllen"
    },
    {
      "id": "a22-21-verb-ausfuellen-present-2",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · ausfüllen · Präsens",
      "answers": [
        "füllt aus"
      ],
      "why": "er/sie/es füllt aus؛ Präsens فعل ausfüllen"
    },
    {
      "id": "a22-21-verb-ausfuellen-present-3",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · ausfüllen · Präsens",
      "answers": [
        "füllen aus"
      ],
      "why": "wir füllen aus؛ Präsens فعل ausfüllen"
    },
    {
      "id": "a22-21-verb-ausfuellen-present-4",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · ausfüllen · Präsens",
      "answers": [
        "füllt aus"
      ],
      "why": "ihr füllt aus؛ Präsens فعل ausfüllen"
    },
    {
      "id": "a22-21-verb-ausfuellen-present-5",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · ausfüllen · Präsens",
      "answers": [
        "füllen aus"
      ],
      "why": "sie/Sie füllen aus؛ Präsens فعل ausfüllen"
    },
    {
      "id": "a22-21-verb-ausfuellen-perfect",
      "lesson": 21,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "ausfüllen · Perfekt (er)",
      "answers": [
        "hat ausgefüllt"
      ],
      "why": "در این کاربرد: hat ausgefüllt"
    },
    {
      "id": "a22-22-verb-anmelden-present-0",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sich anmelden · Präsens",
      "answers": [
        "melde mich an"
      ],
      "why": "ich melde mich an؛ Präsens فعل sich anmelden"
    },
    {
      "id": "a22-22-verb-anmelden-present-1",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sich anmelden · Präsens",
      "answers": [
        "meldest dich an"
      ],
      "why": "du meldest dich an؛ Präsens فعل sich anmelden"
    },
    {
      "id": "a22-22-verb-anmelden-present-2",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sich anmelden · Präsens",
      "answers": [
        "meldet sich an"
      ],
      "why": "er/sie/es meldet sich an؛ Präsens فعل sich anmelden"
    },
    {
      "id": "a22-22-verb-anmelden-present-3",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sich anmelden · Präsens",
      "answers": [
        "melden uns an"
      ],
      "why": "wir melden uns an؛ Präsens فعل sich anmelden"
    },
    {
      "id": "a22-22-verb-anmelden-present-4",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sich anmelden · Präsens",
      "answers": [
        "meldet euch an"
      ],
      "why": "ihr meldet euch an؛ Präsens فعل sich anmelden"
    },
    {
      "id": "a22-22-verb-anmelden-present-5",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sich anmelden · Präsens",
      "answers": [
        "melden sich an"
      ],
      "why": "sie/Sie melden sich an؛ Präsens فعل sich anmelden"
    },
    {
      "id": "a22-22-verb-anmelden-perfect",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sich anmelden · Perfekt (er)",
      "answers": [
        "hat sich angemeldet"
      ],
      "why": "در این کاربرد: hat sich angemeldet"
    },
    {
      "id": "a22-22-verb-eingeben-present-0",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · eingeben · Präsens",
      "answers": [
        "gebe ein"
      ],
      "why": "ich gebe ein؛ Präsens فعل eingeben"
    },
    {
      "id": "a22-22-verb-eingeben-present-1",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · eingeben · Präsens",
      "answers": [
        "gibst ein"
      ],
      "why": "du gibst ein؛ Präsens فعل eingeben"
    },
    {
      "id": "a22-22-verb-eingeben-present-2",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · eingeben · Präsens",
      "answers": [
        "gibt ein"
      ],
      "why": "er/sie/es gibt ein؛ Präsens فعل eingeben"
    },
    {
      "id": "a22-22-verb-eingeben-present-3",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · eingeben · Präsens",
      "answers": [
        "geben ein"
      ],
      "why": "wir geben ein؛ Präsens فعل eingeben"
    },
    {
      "id": "a22-22-verb-eingeben-present-4",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · eingeben · Präsens",
      "answers": [
        "gebt ein"
      ],
      "why": "ihr gebt ein؛ Präsens فعل eingeben"
    },
    {
      "id": "a22-22-verb-eingeben-present-5",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · eingeben · Präsens",
      "answers": [
        "geben ein"
      ],
      "why": "sie/Sie geben ein؛ Präsens فعل eingeben"
    },
    {
      "id": "a22-22-verb-eingeben-perfect",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "eingeben · Perfekt (er)",
      "answers": [
        "hat eingegeben"
      ],
      "why": "در این کاربرد: hat eingegeben"
    },
    {
      "id": "a22-22-verb-speichern-present-0",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · speichern · Präsens",
      "answers": [
        "speichere"
      ],
      "why": "ich speichere؛ Präsens فعل speichern"
    },
    {
      "id": "a22-22-verb-speichern-present-1",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · speichern · Präsens",
      "answers": [
        "speicherst"
      ],
      "why": "du speicherst؛ Präsens فعل speichern"
    },
    {
      "id": "a22-22-verb-speichern-present-2",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · speichern · Präsens",
      "answers": [
        "speichert"
      ],
      "why": "er/sie/es speichert؛ Präsens فعل speichern"
    },
    {
      "id": "a22-22-verb-speichern-present-3",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · speichern · Präsens",
      "answers": [
        "speichern"
      ],
      "why": "wir speichern؛ Präsens فعل speichern"
    },
    {
      "id": "a22-22-verb-speichern-present-4",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · speichern · Präsens",
      "answers": [
        "speichert"
      ],
      "why": "ihr speichert؛ Präsens فعل speichern"
    },
    {
      "id": "a22-22-verb-speichern-present-5",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · speichern · Präsens",
      "answers": [
        "speichern"
      ],
      "why": "sie/Sie speichern؛ Präsens فعل speichern"
    },
    {
      "id": "a22-22-verb-speichern-perfect",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "speichern · Perfekt (er)",
      "answers": [
        "hat gespeichert"
      ],
      "why": "در این کاربرد: hat gespeichert"
    },
    {
      "id": "a22-22-verb-verkaufen-present-0",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · verkaufen · Präsens",
      "answers": [
        "verkaufe"
      ],
      "why": "ich verkaufe؛ Präsens فعل verkaufen"
    },
    {
      "id": "a22-22-verb-verkaufen-present-1",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · verkaufen · Präsens",
      "answers": [
        "verkaufst"
      ],
      "why": "du verkaufst؛ Präsens فعل verkaufen"
    },
    {
      "id": "a22-22-verb-verkaufen-present-2",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · verkaufen · Präsens",
      "answers": [
        "verkauft"
      ],
      "why": "er/sie/es verkauft؛ Präsens فعل verkaufen"
    },
    {
      "id": "a22-22-verb-verkaufen-present-3",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · verkaufen · Präsens",
      "answers": [
        "verkaufen"
      ],
      "why": "wir verkaufen؛ Präsens فعل verkaufen"
    },
    {
      "id": "a22-22-verb-verkaufen-present-4",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · verkaufen · Präsens",
      "answers": [
        "verkauft"
      ],
      "why": "ihr verkauft؛ Präsens فعل verkaufen"
    },
    {
      "id": "a22-22-verb-verkaufen-present-5",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · verkaufen · Präsens",
      "answers": [
        "verkaufen"
      ],
      "why": "sie/Sie verkaufen؛ Präsens فعل verkaufen"
    },
    {
      "id": "a22-22-verb-verkaufen-perfect",
      "lesson": 22,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "verkaufen · Perfekt (er)",
      "answers": [
        "hat verkauft"
      ],
      "why": "در این کاربرد: hat verkauft"
    },
    {
      "id": "a22-23-verb-bewerben-present-0",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sich bewerben · Präsens",
      "answers": [
        "bewerbe mich"
      ],
      "why": "ich bewerbe mich؛ Präsens فعل sich bewerben"
    },
    {
      "id": "a22-23-verb-bewerben-present-1",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sich bewerben · Präsens",
      "answers": [
        "bewirbst dich"
      ],
      "why": "du bewirbst dich؛ Präsens فعل sich bewerben"
    },
    {
      "id": "a22-23-verb-bewerben-present-2",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sich bewerben · Präsens",
      "answers": [
        "bewirbt sich"
      ],
      "why": "er/sie/es bewirbt sich؛ Präsens فعل sich bewerben"
    },
    {
      "id": "a22-23-verb-bewerben-present-3",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sich bewerben · Präsens",
      "answers": [
        "bewerben uns"
      ],
      "why": "wir bewerben uns؛ Präsens فعل sich bewerben"
    },
    {
      "id": "a22-23-verb-bewerben-present-4",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sich bewerben · Präsens",
      "answers": [
        "bewerbt euch"
      ],
      "why": "ihr bewerbt euch؛ Präsens فعل sich bewerben"
    },
    {
      "id": "a22-23-verb-bewerben-present-5",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sich bewerben · Präsens",
      "answers": [
        "bewerben sich"
      ],
      "why": "sie/Sie bewerben sich؛ Präsens فعل sich bewerben"
    },
    {
      "id": "a22-23-verb-bewerben-perfect",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sich bewerben · Perfekt (er)",
      "answers": [
        "hat sich beworben"
      ],
      "why": "در این کاربرد: hat sich beworben"
    },
    {
      "id": "a22-23-verb-beraten-present-0",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · beraten · Präsens",
      "answers": [
        "berate"
      ],
      "why": "ich berate؛ Präsens فعل beraten"
    },
    {
      "id": "a22-23-verb-beraten-present-1",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · beraten · Präsens",
      "answers": [
        "berätst"
      ],
      "why": "du berätst؛ Präsens فعل beraten"
    },
    {
      "id": "a22-23-verb-beraten-present-2",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · beraten · Präsens",
      "answers": [
        "berät"
      ],
      "why": "er/sie/es berät؛ Präsens فعل beraten"
    },
    {
      "id": "a22-23-verb-beraten-present-3",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · beraten · Präsens",
      "answers": [
        "beraten"
      ],
      "why": "wir beraten؛ Präsens فعل beraten"
    },
    {
      "id": "a22-23-verb-beraten-present-4",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · beraten · Präsens",
      "answers": [
        "beratet"
      ],
      "why": "ihr beratet؛ Präsens فعل beraten"
    },
    {
      "id": "a22-23-verb-beraten-present-5",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · beraten · Präsens",
      "answers": [
        "beraten"
      ],
      "why": "sie/Sie beraten؛ Präsens فعل beraten"
    },
    {
      "id": "a22-23-verb-beraten-perfect",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "beraten · Perfekt (er)",
      "answers": [
        "hat beraten"
      ],
      "why": "در این کاربرد: hat beraten"
    },
    {
      "id": "a22-23-verb-verdienen-present-0",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · verdienen · Präsens",
      "answers": [
        "verdiene"
      ],
      "why": "ich verdiene؛ Präsens فعل verdienen"
    },
    {
      "id": "a22-23-verb-verdienen-present-1",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · verdienen · Präsens",
      "answers": [
        "verdienst"
      ],
      "why": "du verdienst؛ Präsens فعل verdienen"
    },
    {
      "id": "a22-23-verb-verdienen-present-2",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · verdienen · Präsens",
      "answers": [
        "verdient"
      ],
      "why": "er/sie/es verdient؛ Präsens فعل verdienen"
    },
    {
      "id": "a22-23-verb-verdienen-present-3",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · verdienen · Präsens",
      "answers": [
        "verdienen"
      ],
      "why": "wir verdienen؛ Präsens فعل verdienen"
    },
    {
      "id": "a22-23-verb-verdienen-present-4",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · verdienen · Präsens",
      "answers": [
        "verdient"
      ],
      "why": "ihr verdient؛ Präsens فعل verdienen"
    },
    {
      "id": "a22-23-verb-verdienen-present-5",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · verdienen · Präsens",
      "answers": [
        "verdienen"
      ],
      "why": "sie/Sie verdienen؛ Präsens فعل verdienen"
    },
    {
      "id": "a22-23-verb-verdienen-perfect",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "verdienen · Perfekt (er)",
      "answers": [
        "hat verdient"
      ],
      "why": "در این کاربرد: hat verdient"
    },
    {
      "id": "a22-23-verb-uebernehmen-present-0",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · übernehmen · Präsens",
      "answers": [
        "übernehme"
      ],
      "why": "ich übernehme؛ Präsens فعل übernehmen"
    },
    {
      "id": "a22-23-verb-uebernehmen-present-1",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · übernehmen · Präsens",
      "answers": [
        "übernimmst"
      ],
      "why": "du übernimmst؛ Präsens فعل übernehmen"
    },
    {
      "id": "a22-23-verb-uebernehmen-present-2",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · übernehmen · Präsens",
      "answers": [
        "übernimmt"
      ],
      "why": "er/sie/es übernimmt؛ Präsens فعل übernehmen"
    },
    {
      "id": "a22-23-verb-uebernehmen-present-3",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · übernehmen · Präsens",
      "answers": [
        "übernehmen"
      ],
      "why": "wir übernehmen؛ Präsens فعل übernehmen"
    },
    {
      "id": "a22-23-verb-uebernehmen-present-4",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · übernehmen · Präsens",
      "answers": [
        "übernehmt"
      ],
      "why": "ihr übernehmt؛ Präsens فعل übernehmen"
    },
    {
      "id": "a22-23-verb-uebernehmen-present-5",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · übernehmen · Präsens",
      "answers": [
        "übernehmen"
      ],
      "why": "sie/Sie übernehmen؛ Präsens فعل übernehmen"
    },
    {
      "id": "a22-23-verb-uebernehmen-perfect",
      "lesson": 23,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "übernehmen · Perfekt (er)",
      "answers": [
        "hat übernommen"
      ],
      "why": "در این کاربرد: hat übernommen"
    },
    {
      "id": "a22-24-verb-kommen-present-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · kommen · Präsens",
      "answers": [
        "komme"
      ],
      "why": "ich komme؛ Präsens فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-present-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · kommen · Präsens",
      "answers": [
        "kommst"
      ],
      "why": "du kommst؛ Präsens فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-present-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · kommen · Präsens",
      "answers": [
        "kommt"
      ],
      "why": "er/sie/es kommt؛ Präsens فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-present-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · kommen · Präsens",
      "answers": [
        "kommen"
      ],
      "why": "wir kommen؛ Präsens فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-present-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · kommen · Präsens",
      "answers": [
        "kommt"
      ],
      "why": "ihr kommt؛ Präsens فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-present-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · kommen · Präsens",
      "answers": [
        "kommen"
      ],
      "why": "sie/Sie kommen؛ Präsens فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-past-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · kommen · Präteritum",
      "answers": [
        "kam"
      ],
      "why": "ich kam؛ Präteritum فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-past-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · kommen · Präteritum",
      "answers": [
        "kamst"
      ],
      "why": "du kamst؛ Präteritum فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-past-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · kommen · Präteritum",
      "answers": [
        "kam"
      ],
      "why": "er/sie/es kam؛ Präteritum فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-past-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · kommen · Präteritum",
      "answers": [
        "kamen"
      ],
      "why": "wir kamen؛ Präteritum فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-past-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · kommen · Präteritum",
      "answers": [
        "kamt"
      ],
      "why": "ihr kamt؛ Präteritum فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-past-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · kommen · Präteritum",
      "answers": [
        "kamen"
      ],
      "why": "sie/Sie kamen؛ Präteritum فعل kommen"
    },
    {
      "id": "a22-24-verb-kommen-perfect",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "kommen · Perfekt (er)",
      "answers": [
        "ist gekommen"
      ],
      "why": "در این کاربرد: ist gekommen"
    },
    {
      "id": "a22-24-verb-gehen-present-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · gehen · Präsens",
      "answers": [
        "gehe"
      ],
      "why": "ich gehe؛ Präsens فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-present-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · gehen · Präsens",
      "answers": [
        "gehst"
      ],
      "why": "du gehst؛ Präsens فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-present-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · gehen · Präsens",
      "answers": [
        "geht"
      ],
      "why": "er/sie/es geht؛ Präsens فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-present-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · gehen · Präsens",
      "answers": [
        "gehen"
      ],
      "why": "wir gehen؛ Präsens فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-present-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · gehen · Präsens",
      "answers": [
        "geht"
      ],
      "why": "ihr geht؛ Präsens فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-present-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · gehen · Präsens",
      "answers": [
        "gehen"
      ],
      "why": "sie/Sie gehen؛ Präsens فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-past-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · gehen · Präteritum",
      "answers": [
        "ging"
      ],
      "why": "ich ging؛ Präteritum فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-past-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · gehen · Präteritum",
      "answers": [
        "gingst"
      ],
      "why": "du gingst؛ Präteritum فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-past-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · gehen · Präteritum",
      "answers": [
        "ging"
      ],
      "why": "er/sie/es ging؛ Präteritum فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-past-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · gehen · Präteritum",
      "answers": [
        "gingen"
      ],
      "why": "wir gingen؛ Präteritum فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-past-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · gehen · Präteritum",
      "answers": [
        "gingt"
      ],
      "why": "ihr gingt؛ Präteritum فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-past-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · gehen · Präteritum",
      "answers": [
        "gingen"
      ],
      "why": "sie/Sie gingen؛ Präteritum فعل gehen"
    },
    {
      "id": "a22-24-verb-gehen-perfect",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "gehen · Perfekt (er)",
      "answers": [
        "ist gegangen"
      ],
      "why": "در این کاربرد: ist gegangen"
    },
    {
      "id": "a22-24-verb-sehen-present-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sehen · Präsens",
      "answers": [
        "sehe"
      ],
      "why": "ich sehe؛ Präsens فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-present-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sehen · Präsens",
      "answers": [
        "siehst"
      ],
      "why": "du siehst؛ Präsens فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-present-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sehen · Präsens",
      "answers": [
        "sieht"
      ],
      "why": "er/sie/es sieht؛ Präsens فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-present-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sehen · Präsens",
      "answers": [
        "sehen"
      ],
      "why": "wir sehen؛ Präsens فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-present-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sehen · Präsens",
      "answers": [
        "seht"
      ],
      "why": "ihr seht؛ Präsens فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-present-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sehen · Präsens",
      "answers": [
        "sehen"
      ],
      "why": "sie/Sie sehen؛ Präsens فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-past-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sehen · Präteritum",
      "answers": [
        "sah"
      ],
      "why": "ich sah؛ Präteritum فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-past-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sehen · Präteritum",
      "answers": [
        "sahst"
      ],
      "why": "du sahst؛ Präteritum فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-past-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sehen · Präteritum",
      "answers": [
        "sah"
      ],
      "why": "er/sie/es sah؛ Präteritum فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-past-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sehen · Präteritum",
      "answers": [
        "sahen"
      ],
      "why": "wir sahen؛ Präteritum فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-past-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sehen · Präteritum",
      "answers": [
        "saht"
      ],
      "why": "ihr saht؛ Präteritum فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-past-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sehen · Präteritum",
      "answers": [
        "sahen"
      ],
      "why": "sie/Sie sahen؛ Präteritum فعل sehen"
    },
    {
      "id": "a22-24-verb-sehen-perfect",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sehen · Perfekt (er)",
      "answers": [
        "hat gesehen"
      ],
      "why": "در این کاربرد: hat gesehen"
    },
    {
      "id": "a22-24-verb-finden-present-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · finden · Präsens",
      "answers": [
        "finde"
      ],
      "why": "ich finde؛ Präsens فعل finden"
    },
    {
      "id": "a22-24-verb-finden-present-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · finden · Präsens",
      "answers": [
        "findest"
      ],
      "why": "du findest؛ Präsens فعل finden"
    },
    {
      "id": "a22-24-verb-finden-present-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · finden · Präsens",
      "answers": [
        "findet"
      ],
      "why": "er/sie/es findet؛ Präsens فعل finden"
    },
    {
      "id": "a22-24-verb-finden-present-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · finden · Präsens",
      "answers": [
        "finden"
      ],
      "why": "wir finden؛ Präsens فعل finden"
    },
    {
      "id": "a22-24-verb-finden-present-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · finden · Präsens",
      "answers": [
        "findet"
      ],
      "why": "ihr findet؛ Präsens فعل finden"
    },
    {
      "id": "a22-24-verb-finden-present-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · finden · Präsens",
      "answers": [
        "finden"
      ],
      "why": "sie/Sie finden؛ Präsens فعل finden"
    },
    {
      "id": "a22-24-verb-finden-past-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · finden · Präteritum",
      "answers": [
        "fand"
      ],
      "why": "ich fand؛ Präteritum فعل finden"
    },
    {
      "id": "a22-24-verb-finden-past-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · finden · Präteritum",
      "answers": [
        "fandest"
      ],
      "why": "du fandest؛ Präteritum فعل finden"
    },
    {
      "id": "a22-24-verb-finden-past-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · finden · Präteritum",
      "answers": [
        "fand"
      ],
      "why": "er/sie/es fand؛ Präteritum فعل finden"
    },
    {
      "id": "a22-24-verb-finden-past-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · finden · Präteritum",
      "answers": [
        "fanden"
      ],
      "why": "wir fanden؛ Präteritum فعل finden"
    },
    {
      "id": "a22-24-verb-finden-past-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · finden · Präteritum",
      "answers": [
        "fandet"
      ],
      "why": "ihr fandet؛ Präteritum فعل finden"
    },
    {
      "id": "a22-24-verb-finden-past-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · finden · Präteritum",
      "answers": [
        "fanden"
      ],
      "why": "sie/Sie fanden؛ Präteritum فعل finden"
    },
    {
      "id": "a22-24-verb-finden-perfect",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "finden · Perfekt (er)",
      "answers": [
        "hat gefunden"
      ],
      "why": "در این کاربرد: hat gefunden"
    },
    {
      "id": "a22-24-verb-bringen-present-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · bringen · Präsens",
      "answers": [
        "bringe"
      ],
      "why": "ich bringe؛ Präsens فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-present-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · bringen · Präsens",
      "answers": [
        "bringst"
      ],
      "why": "du bringst؛ Präsens فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-present-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · bringen · Präsens",
      "answers": [
        "bringt"
      ],
      "why": "er/sie/es bringt؛ Präsens فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-present-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · bringen · Präsens",
      "answers": [
        "bringen"
      ],
      "why": "wir bringen؛ Präsens فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-present-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · bringen · Präsens",
      "answers": [
        "bringt"
      ],
      "why": "ihr bringt؛ Präsens فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-present-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · bringen · Präsens",
      "answers": [
        "bringen"
      ],
      "why": "sie/Sie bringen؛ Präsens فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-past-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · bringen · Präteritum",
      "answers": [
        "brachte"
      ],
      "why": "ich brachte؛ Präteritum فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-past-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · bringen · Präteritum",
      "answers": [
        "brachtest"
      ],
      "why": "du brachtest؛ Präteritum فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-past-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · bringen · Präteritum",
      "answers": [
        "brachte"
      ],
      "why": "er/sie/es brachte؛ Präteritum فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-past-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · bringen · Präteritum",
      "answers": [
        "brachten"
      ],
      "why": "wir brachten؛ Präteritum فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-past-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · bringen · Präteritum",
      "answers": [
        "brachtet"
      ],
      "why": "ihr brachtet؛ Präteritum فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-past-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · bringen · Präteritum",
      "answers": [
        "brachten"
      ],
      "why": "sie/Sie brachten؛ Präteritum فعل bringen"
    },
    {
      "id": "a22-24-verb-bringen-perfect",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "bringen · Perfekt (er)",
      "answers": [
        "hat gebracht"
      ],
      "why": "در این کاربرد: hat gebracht"
    },
    {
      "id": "a22-24-verb-sagen-present-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sagen · Präsens",
      "answers": [
        "sage"
      ],
      "why": "ich sage؛ Präsens فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-present-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sagen · Präsens",
      "answers": [
        "sagst"
      ],
      "why": "du sagst؛ Präsens فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-present-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sagen · Präsens",
      "answers": [
        "sagt"
      ],
      "why": "er/sie/es sagt؛ Präsens فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-present-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sagen · Präsens",
      "answers": [
        "sagen"
      ],
      "why": "wir sagen؛ Präsens فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-present-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sagen · Präsens",
      "answers": [
        "sagt"
      ],
      "why": "ihr sagt؛ Präsens فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-present-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präsens",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sagen · Präsens",
      "answers": [
        "sagen"
      ],
      "why": "sie/Sie sagen؛ Präsens فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-past-0",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ich · sagen · Präteritum",
      "answers": [
        "sagte"
      ],
      "why": "ich sagte؛ Präteritum فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-past-1",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "du · sagen · Präteritum",
      "answers": [
        "sagtest"
      ],
      "why": "du sagtest؛ Präteritum فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-past-2",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "er/sie/es · sagen · Präteritum",
      "answers": [
        "sagte"
      ],
      "why": "er/sie/es sagte؛ Präteritum فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-past-3",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "wir · sagen · Präteritum",
      "answers": [
        "sagten"
      ],
      "why": "wir sagten؛ Präteritum فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-past-4",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "ihr · sagen · Präteritum",
      "answers": [
        "sagtet"
      ],
      "why": "ihr sagtet؛ Präteritum فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-past-5",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Präteritum",
      "prompt": "فعل را برای ضمیر و زمان داده‌شده صرف کن؛ خودِ ضمیر را ننویس.",
      "text": "sie/Sie · sagen · Präteritum",
      "answers": [
        "sagten"
      ],
      "why": "sie/Sie sagten؛ Präteritum فعل sagen"
    },
    {
      "id": "a22-24-verb-sagen-perfect",
      "lesson": 24,
      "mode": "verbs",
      "topic": "Perfekt",
      "prompt": "برای er، فعل کمکی و Partizip II را با هم بنویس؛ ضمیر انعکاسی لازم را حفظ کن.",
      "text": "sagen · Perfekt (er)",
      "answers": [
        "hat gesagt"
      ],
      "why": "در این کاربرد: hat gesagt"
    },
    {
      "id": "a22-13-r1-q1",
      "lesson": 13,
      "mode": "reading",
      "topic": "اولین کلاس زبان",
      "passageId": "a22-13-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "In welche Stadt zog Laleh?",
      "answers": [
        "nach Bonn",
        "Bonn"
      ],
      "why": "او به بن نقل مکان کرد."
    },
    {
      "id": "a22-13-r1-q2",
      "lesson": 13,
      "mode": "reading",
      "topic": "اولین کلاس زبان",
      "passageId": "a22-13-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "In welchem Jahr zog sie um?",
      "answers": [
        "2021"
      ],
      "why": "سال ۲۰۲۱ ذکر شده است."
    },
    {
      "id": "a22-13-r1-q3",
      "lesson": 13,
      "mode": "reading",
      "topic": "اولین کلاس زبان",
      "passageId": "a22-13-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "An wie vielen Abenden besuchte sie den Kurs?",
      "answers": [
        "an drei Abenden",
        "drei",
        "3",
        "drei Abende"
      ],
      "why": "سه عصر در هفته کلاس داشت."
    },
    {
      "id": "a22-13-r1-q4",
      "lesson": 13,
      "mode": "reading",
      "topic": "اولین کلاس زبان",
      "passageId": "a22-13-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Mit wem übte sie samstags?",
      "answers": [
        "mit ihrem Nachbarn",
        "ihrem Nachbarn"
      ],
      "why": "با همسایه‌اش تمرین می‌کرد."
    },
    {
      "id": "a22-13-r1-q5",
      "lesson": 13,
      "mode": "reading",
      "topic": "اولین کلاس زبان",
      "passageId": "a22-13-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Nach sechs Monaten konnte sie einen Termin vereinbaren. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "این موفقیت در نیمهٔ دوم متن آمده است."
    },
    {
      "id": "a22-13-r2-q1",
      "lesson": 13,
      "mode": "reading",
      "topic": "یک برنامهٔ یادگیری",
      "passageId": "a22-13-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Welche Sprache lernt Jonas?",
      "answers": [
        "Persisch"
      ],
      "why": "یوناس فارسی یاد می‌گیرد."
    },
    {
      "id": "a22-13-r2-q2",
      "lesson": 13,
      "mode": "reading",
      "topic": "یک برنامهٔ یادگیری",
      "passageId": "a22-13-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Seit wie vielen Monaten lernt er?",
      "answers": [
        "seit vier Monaten",
        "vier",
        "4",
        "vier Monaten",
        "vier Monate"
      ],
      "why": "چهار ماه ذکر شده است."
    },
    {
      "id": "a22-13-r2-q3",
      "lesson": 13,
      "mode": "reading",
      "topic": "یک برنامهٔ یادگیری",
      "passageId": "a22-13-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie viele Wörter wiederholt er abends?",
      "answers": [
        "zehn",
        "10",
        "zehn Wörter"
      ],
      "why": "هر شب ده واژه را مرور می‌کند."
    },
    {
      "id": "a22-13-r2-q4",
      "lesson": 13,
      "mode": "reading",
      "topic": "یک برنامهٔ یادگیری",
      "passageId": "a22-13-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo hört er morgens einen Dialog?",
      "answers": [
        "im Bus",
        "Bus"
      ],
      "why": "صبح در اتوبوس گوش می‌دهد."
    },
    {
      "id": "a22-13-r2-q5",
      "lesson": 13,
      "mode": "reading",
      "topic": "یک برنامهٔ یادگیری",
      "passageId": "a22-13-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Er spricht sonntags mit einem Lernpartner. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "آخر متن گفت‌وگوی یکشنبه را توضیح می‌دهد."
    },
    {
      "id": "a22-17-r1-q1",
      "lesson": 17,
      "mode": "reading",
      "topic": "سفر با قطار و کشتی",
      "passageId": "a22-17-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "In welchem Monat reisen Nora und Ben?",
      "answers": [
        "im Juli",
        "Juli"
      ],
      "why": "ماه سفر ژوئیه است."
    },
    {
      "id": "a22-17-r1-q2",
      "lesson": 17,
      "mode": "reading",
      "topic": "سفر با قطار و کشتی",
      "passageId": "a22-17-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo übernachten sie zuerst?",
      "answers": [
        "in Hamburg",
        "Hamburg"
      ],
      "why": "ابتدا یک شب در هامبورگ می‌مانند."
    },
    {
      "id": "a22-17-r1-q3",
      "lesson": 17,
      "mode": "reading",
      "topic": "سفر با قطار و کشتی",
      "passageId": "a22-17-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Womit fahren sie vom Hafen zur Insel?",
      "answers": [
        "mit einer Fähre",
        "mit der Fähre",
        "Fähre"
      ],
      "why": "از بندر با کشتی خودروبر می‌روند."
    },
    {
      "id": "a22-17-r1-q4",
      "lesson": 17,
      "mode": "reading",
      "topic": "سفر با قطار و کشتی",
      "passageId": "a22-17-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo liegt ihre Unterkunft?",
      "answers": [
        "am Strand",
        "direkt am Strand"
      ],
      "why": "محل اقامت کنار ساحل است."
    },
    {
      "id": "a22-17-r1-q5",
      "lesson": 17,
      "mode": "reading",
      "topic": "سفر با قطار و کشتی",
      "passageId": "a22-17-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Sie nehmen ein Auto mit. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "صریحاً گفته شده خودرو همراه نمی‌برند."
    },
    {
      "id": "a22-17-r2-q1",
      "lesson": 17,
      "mode": "reading",
      "topic": "تعطیلات کوهستان",
      "passageId": "a22-17-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "In welches Land fährt die Familie?",
      "answers": [
        "in die Schweiz",
        "Schweiz",
        "die Schweiz"
      ],
      "why": "کشور مقصد سوئیس است."
    },
    {
      "id": "a22-17-r2-q2",
      "lesson": 17,
      "mode": "reading",
      "topic": "تعطیلات کوهستان",
      "passageId": "a22-17-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie lange bleibt sie?",
      "answers": [
        "eine Woche",
        "1 Woche"
      ],
      "why": "مدت اقامت یک هفته است."
    },
    {
      "id": "a22-17-r2-q3",
      "lesson": 17,
      "mode": "reading",
      "topic": "تعطیلات کوهستان",
      "passageId": "a22-17-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo bleibt sie manchmal am Nachmittag?",
      "answers": [
        "am See",
        "See"
      ],
      "why": "گاهی بعدازظهر کنار دریاچه می‌مانند."
    },
    {
      "id": "a22-17-r2-q4",
      "lesson": 17,
      "mode": "reading",
      "topic": "تعطیلات کوهستان",
      "passageId": "a22-17-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was besucht sie bei schlechtem Wetter?",
      "answers": [
        "ein Museum",
        "Museum"
      ],
      "why": "در هوای بد موزه می‌روند."
    },
    {
      "id": "a22-17-r2-q5",
      "lesson": 17,
      "mode": "reading",
      "topic": "تعطیلات کوهستان",
      "passageId": "a22-17-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Die Familie reist mit dem Zug. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "وسیلهٔ سفر در جملهٔ آخر قطار است."
    },
    {
      "id": "a22-18-r1-q1",
      "lesson": 18,
      "mode": "reading",
      "topic": "گزارش هوا برای آخر هفته",
      "passageId": "a22-18-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie wird es am Samstag im Norden?",
      "answers": [
        "bewölkt und windig",
        "windig und bewölkt"
      ],
      "why": "شمال شنبه ابری و پرباد است."
    },
    {
      "id": "a22-18-r1-q2",
      "lesson": 18,
      "mode": "reading",
      "topic": "گزارش هوا برای آخر هفته",
      "passageId": "a22-18-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie warm wird es dort?",
      "answers": [
        "zwölf Grad",
        "12 Grad"
      ],
      "why": "دوازده درجه برای شمال ذکر شده است."
    },
    {
      "id": "a22-18-r1-q3",
      "lesson": 18,
      "mode": "reading",
      "topic": "گزارش هوا برای آخر هفته",
      "passageId": "a22-18-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo scheint zunächst die Sonne?",
      "answers": [
        "im Süden",
        "Süden"
      ],
      "why": "در جنوب ابتدا خورشید می‌تابد."
    },
    {
      "id": "a22-18-r1-q4",
      "lesson": 18,
      "mode": "reading",
      "topic": "گزارش هوا برای آخر هفته",
      "passageId": "a22-18-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wann regnet es in vielen Regionen?",
      "answers": [
        "am Sonntag",
        "Sonntag"
      ],
      "why": "یکشنبه در بسیاری مناطق بارانی است."
    },
    {
      "id": "a22-18-r1-q5",
      "lesson": 18,
      "mode": "reading",
      "topic": "گزارش هوا برای آخر هفته",
      "passageId": "a22-18-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "In den Bergen ist Schnee möglich. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "امکان برف در کوه‌ها آمده است."
    },
    {
      "id": "a22-18-r2-q1",
      "lesson": 18,
      "mode": "reading",
      "topic": "گفت‌وگو دربارهٔ سفر",
      "passageId": "a22-18-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Worauf freut sich Mina?",
      "answers": [
        "auf ihren Urlaub",
        "auf den Urlaub",
        "auf ihren Urlaub am Meer",
        "auf den Urlaub am Meer"
      ],
      "why": "مینا مشتاق تعطیلات کنار دریاست."
    },
    {
      "id": "a22-18-r2-q2",
      "lesson": 18,
      "mode": "reading",
      "topic": "گفت‌وگو دربارهٔ سفر",
      "passageId": "a22-18-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wofür interessiert sie sich?",
      "answers": [
        "für den Wetterbericht",
        "den Wetterbericht",
        "Wetterbericht"
      ],
      "why": "به گزارش هوا توجه دارد."
    },
    {
      "id": "a22-18-r2-q3",
      "lesson": 18,
      "mode": "reading",
      "topic": "گفت‌وگو دربارهٔ سفر",
      "passageId": "a22-18-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was fotografiert ihr Bruder gern?",
      "answers": [
        "Wolken"
      ],
      "why": "برادرش از ابرها عکس می‌گیرد."
    },
    {
      "id": "a22-18-r2-q4",
      "lesson": 18,
      "mode": "reading",
      "topic": "گفت‌وگو دربارهٔ سفر",
      "passageId": "a22-18-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Von welchem Land träumen beide?",
      "answers": [
        "von Norwegen",
        "Norwegen"
      ],
      "why": "هر دو رؤیای سفر به نروژ دارند."
    },
    {
      "id": "a22-18-r2-q5",
      "lesson": 18,
      "mode": "reading",
      "topic": "گفت‌وگو دربارهٔ سفر",
      "passageId": "a22-18-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Diesen Sommer reisen sie nach Norwegen. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "این تابستان در آلمان می‌مانند."
    },
    {
      "id": "a22-19-r1-q1",
      "lesson": 19,
      "mode": "reading",
      "topic": "یک عصر فرهنگی",
      "passageId": "a22-19-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wann beginnt die Führung?",
      "answers": [
        "um 18 Uhr",
        "18 Uhr",
        "18",
        "18:00"
      ],
      "why": "بازدید با راهنما ساعت ۱۸ شروع می‌شود."
    },
    {
      "id": "a22-19-r1-q2",
      "lesson": 19,
      "mode": "reading",
      "topic": "یک عصر فرهنگی",
      "passageId": "a22-19-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie viel kostet die Führung?",
      "answers": [
        "nichts",
        "0 Euro",
        "kostenlos",
        "0"
      ],
      "why": "بازدید رایگان است؛ با قیمت جلسهٔ کتاب‌خوانی اشتباه نکن."
    },
    {
      "id": "a22-19-r1-q3",
      "lesson": 19,
      "mode": "reading",
      "topic": "یک عصر فرهنگی",
      "passageId": "a22-19-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo findet die Lesung statt?",
      "answers": [
        "im Garten",
        "Garten"
      ],
      "why": "جلسه در باغ برگزار می‌شود."
    },
    {
      "id": "a22-19-r1-q4",
      "lesson": 19,
      "mode": "reading",
      "topic": "یک عصر فرهنگی",
      "passageId": "a22-19-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Woher kommt Paul?",
      "answers": [
        "von der Arbeit",
        "Arbeit"
      ],
      "why": "پل از سر کار می‌آید."
    },
    {
      "id": "a22-19-r1-q5",
      "lesson": 19,
      "mode": "reading",
      "topic": "یک عصر فرهنگی",
      "passageId": "a22-19-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Für das Konzert am Samstag sind noch Karten verfügbar. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "بلیط کنسرت تمام شده است."
    },
    {
      "id": "a22-19-r2-q1",
      "lesson": 19,
      "mode": "reading",
      "topic": "بعد از نمایشگاه",
      "passageId": "a22-19-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Woher kommt Sara?",
      "answers": [
        "aus einer Galerie",
        "aus der Galerie",
        "Galerie"
      ],
      "why": "سارا از داخل گالری آمده است."
    },
    {
      "id": "a22-19-r2-q2",
      "lesson": 19,
      "mode": "reading",
      "topic": "بعد از نمایشگاه",
      "passageId": "a22-19-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Worum geht es in der Ausstellung?",
      "answers": [
        "um Fotografie",
        "Fotografie"
      ],
      "why": "موضوع نمایشگاه عکاسی است."
    },
    {
      "id": "a22-19-r2-q3",
      "lesson": 19,
      "mode": "reading",
      "topic": "بعد از نمایشگاه",
      "passageId": "a22-19-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Woher kommt Amir?",
      "answers": [
        "vom Sport",
        "von dem Sport",
        "Sport"
      ],
      "why": "امیر از ورزش برمی‌گردد."
    },
    {
      "id": "a22-19-r2-q4",
      "lesson": 19,
      "mode": "reading",
      "topic": "بعد از نمایشگاه",
      "passageId": "a22-19-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was möchte Amir zuerst machen?",
      "answers": [
        "etwas essen",
        "essen"
      ],
      "why": "ابتدا می‌خواهد چیزی بخورد."
    },
    {
      "id": "a22-19-r2-q5",
      "lesson": 19,
      "mode": "reading",
      "topic": "بعد از نمایشگاه",
      "passageId": "a22-19-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Amir hat sich schon sicher für die Lesung entschieden. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "هنوز مطمئن نیست و قرار است بیشتر صحبت کنند."
    },
    {
      "id": "a22-20-r1-q1",
      "lesson": 20,
      "mode": "reading",
      "topic": "مطالعه در کودکی",
      "passageId": "a22-20-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie lange durfte Emil unter der Woche fernsehen?",
      "answers": [
        "eine halbe Stunde",
        "30 Minuten",
        "dreißig Minuten"
      ],
      "why": "اجازهٔ تلویزیون نیم ساعت بود."
    },
    {
      "id": "a22-20-r1-q2",
      "lesson": 20,
      "mode": "reading",
      "topic": "مطالعه در کودکی",
      "passageId": "a22-20-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was mochte seine Schwester?",
      "answers": [
        "Comics"
      ],
      "why": "خواهرش داستان مصور دوست داشت."
    },
    {
      "id": "a22-20-r1-q3",
      "lesson": 20,
      "mode": "reading",
      "topic": "مطالعه در کودکی",
      "passageId": "a22-20-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was las Emil lieber?",
      "answers": [
        "Abenteuergeschichten"
      ],
      "why": "امیل داستان‌های ماجراجویی را ترجیح می‌داد."
    },
    {
      "id": "a22-20-r1-q4",
      "lesson": 20,
      "mode": "reading",
      "topic": "مطالعه در کودکی",
      "passageId": "a22-20-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wann gingen sie in die Bibliothek?",
      "answers": [
        "jeden Mittwoch",
        "am Mittwoch",
        "mittwochs",
        "Mittwoch"
      ],
      "why": "چهارشنبه‌ها کتابخانه می‌رفتند."
    },
    {
      "id": "a22-20-r1-q5",
      "lesson": 20,
      "mode": "reading",
      "topic": "مطالعه در کودکی",
      "passageId": "a22-20-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Emil musste seiner Schwester manchmal vorlesen. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "در دوازده‌سالگی اغلب برای خواهرش می‌خواند."
    },
    {
      "id": "a22-20-r2-q1",
      "lesson": 20,
      "mode": "reading",
      "topic": "قانون کتابخانهٔ داستانی",
      "passageId": "a22-20-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie viele Bücher dürfen Mitglieder höchstens ausleihen?",
      "answers": [
        "sechs",
        "6",
        "sechs Bücher",
        "6 Bücher"
      ],
      "why": "حداکثر شش کتاب است."
    },
    {
      "id": "a22-20-r2-q2",
      "lesson": 20,
      "mode": "reading",
      "topic": "قانون کتابخانهٔ داستانی",
      "passageId": "a22-20-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie lange dürfen Bücher ausgeliehen werden?",
      "answers": [
        "vier Wochen",
        "4 Wochen"
      ],
      "why": "مهلت کتاب‌ها چهار هفته است."
    },
    {
      "id": "a22-20-r2-q3",
      "lesson": 20,
      "mode": "reading",
      "topic": "قانون کتابخانهٔ داستانی",
      "passageId": "a22-20-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie lange dürfen Zeitschriften mitgenommen werden?",
      "answers": [
        "zwei Wochen",
        "2 Wochen"
      ],
      "why": "مجلات دو هفته مهلت دارند."
    },
    {
      "id": "a22-20-r2-q4",
      "lesson": 20,
      "mode": "reading",
      "topic": "قانون کتابخانهٔ داستانی",
      "passageId": "a22-20-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie kann man die Frist heute verlängern?",
      "answers": [
        "online",
        "im Internet"
      ],
      "why": "امروزه تمدید آنلاین ممکن است."
    },
    {
      "id": "a22-20-r2-q5",
      "lesson": 20,
      "mode": "reading",
      "topic": "قانون کتابخانهٔ داستانی",
      "passageId": "a22-20-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Am Montag ist die Bibliothek offen. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "دوشنبه بسته است؛ این متن یک مثال داستانی است."
    },
    {
      "id": "a22-21-r1-q1",
      "lesson": 21,
      "mode": "reading",
      "topic": "کیف گم‌شده",
      "passageId": "a22-21-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo hat Amir seine Tasche verloren?",
      "answers": [
        "im Bus",
        "Bus"
      ],
      "why": "کیف در اتوبوس گم شده است."
    },
    {
      "id": "a22-21-r1-q2",
      "lesson": 21,
      "mode": "reading",
      "topic": "کیف گم‌شده",
      "passageId": "a22-21-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Welche Farbe hat die Tasche?",
      "answers": [
        "dunkelblau"
      ],
      "why": "رنگ کیف آبی تیره است."
    },
    {
      "id": "a22-21-r1-q3",
      "lesson": 21,
      "mode": "reading",
      "topic": "کیف گم‌شده",
      "passageId": "a22-21-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Welche Farbe hat das Notizheft?",
      "answers": [
        "rot"
      ],
      "why": "دفترچه قرمز بوده است."
    },
    {
      "id": "a22-21-r1-q4",
      "lesson": 21,
      "mode": "reading",
      "topic": "کیف گم‌شده",
      "passageId": "a22-21-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Welche Tasche erkennt Amir?",
      "answers": [
        "die mit dem grauen Griff",
        "mit dem grauen Griff"
      ],
      "why": "کیف دارای دستهٔ خاکستری متعلق به اوست."
    },
    {
      "id": "a22-21-r1-q5",
      "lesson": 21,
      "mode": "reading",
      "topic": "کیف گم‌شده",
      "passageId": "a22-21-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Der Ausweis fehlt noch. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "مدرک شناسایی هنوز داخل کیف است."
    },
    {
      "id": "a22-21-r2-q1",
      "lesson": 21,
      "mode": "reading",
      "topic": "آماده کردن مدارک",
      "passageId": "a22-21-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wofür braucht Nora die Unterlagen?",
      "answers": [
        "für eine Bewerbung",
        "Bewerbung"
      ],
      "why": "مدارک برای درخواست استخدام است."
    },
    {
      "id": "a22-21-r2-q2",
      "lesson": 21,
      "mode": "reading",
      "topic": "آماده کردن مدارک",
      "passageId": "a22-21-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was lässt sie kopieren?",
      "answers": [
        "das Zeugnis",
        "Zeugnis"
      ],
      "why": "کارنامه یا گواهی را کپی می‌گیرد."
    },
    {
      "id": "a22-21-r2-q3",
      "lesson": 21,
      "mode": "reading",
      "topic": "آماده کردن مدارک",
      "passageId": "a22-21-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo lässt sie das Zeugnis kopieren?",
      "answers": [
        "im Kopierladen",
        "Kopierladen"
      ],
      "why": "به مرکز کپی می‌رود."
    },
    {
      "id": "a22-21-r2-q4",
      "lesson": 21,
      "mode": "reading",
      "topic": "آماده کردن مدارک",
      "passageId": "a22-21-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was fehlt auf einem Formular?",
      "answers": [
        "das Datum",
        "Datum"
      ],
      "why": "تاریخ هنوز نوشته نشده است."
    },
    {
      "id": "a22-21-r2-q5",
      "lesson": 21,
      "mode": "reading",
      "topic": "آماده کردن مدارک",
      "passageId": "a22-21-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Sie meint das grüne Formular. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "به برگهٔ سبز اشاره می‌کند."
    },
    {
      "id": "a22-22-r1-q1",
      "lesson": 22,
      "mode": "reading",
      "topic": "ثبت‌نام برای دوچرخهٔ اشتراکی",
      "passageId": "a22-22-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was öffnet man zuerst?",
      "answers": [
        "die App",
        "App"
      ],
      "why": "ابتدا اپ را باز می‌کنند."
    },
    {
      "id": "a22-22-r1-q2",
      "lesson": 22,
      "mode": "reading",
      "topic": "ثبت‌نام برای دوچرخهٔ اشتراکی",
      "passageId": "a22-22-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Womit registriert man sich?",
      "answers": [
        "mit einer E-Mail-Adresse",
        "E-Mail-Adresse",
        "einer E-Mail-Adresse"
      ],
      "why": "ثبت‌نام با نشانی ایمیل است."
    },
    {
      "id": "a22-22-r1-q3",
      "lesson": 22,
      "mode": "reading",
      "topic": "ثبت‌نام برای دوچرخهٔ اشتراکی",
      "passageId": "a22-22-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was enthält die Nachricht?",
      "answers": [
        "einen Link",
        "Link"
      ],
      "why": "پیام شامل پیوند است."
    },
    {
      "id": "a22-22-r1-q4",
      "lesson": 22,
      "mode": "reading",
      "topic": "ثبت‌نام برای دوچرخهٔ اشتراکی",
      "passageId": "a22-22-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was wählt man nach der Bestätigung aus?",
      "answers": [
        "eine Station und ein Fahrrad",
        "ein Fahrrad und eine Station"
      ],
      "why": "بعد از تأیید، ایستگاه و دوچرخه انتخاب می‌شود."
    },
    {
      "id": "a22-22-r1-q5",
      "lesson": 22,
      "mode": "reading",
      "topic": "ثبت‌نام برای دوچرخهٔ اشتراکی",
      "passageId": "a22-22-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Das Fahrrad bleibt nach der Fahrt an einer beliebigen Haustür. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "در این سرویس داستانی باید آن را در ایستگاه برگرداند."
    },
    {
      "id": "a22-22-r2-q1",
      "lesson": 22,
      "mode": "reading",
      "topic": "از وقتی خودرو را فروختم",
      "passageId": "a22-22-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was hat Lea verkauft?",
      "answers": [
        "ihren Wagen",
        "ihren eigenen Wagen",
        "ihr Auto",
        "Wagen",
        "Auto"
      ],
      "why": "خودروی خود را فروخته است."
    },
    {
      "id": "a22-22-r2-q2",
      "lesson": 22,
      "mode": "reading",
      "topic": "از وقتی خودرو را فروختم",
      "passageId": "a22-22-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie fährt sie meistens zur Arbeit?",
      "answers": [
        "mit dem Fahrrad",
        "Fahrrad"
      ],
      "why": "بیشتر وقت‌ها با دوچرخه می‌رود."
    },
    {
      "id": "a22-22-r2-q3",
      "lesson": 22,
      "mode": "reading",
      "topic": "از وقتی خودرو را فروختم",
      "passageId": "a22-22-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie lange dauert die Strecke?",
      "answers": [
        "zwanzig Minuten",
        "20 Minuten"
      ],
      "why": "بیست دقیقه طول می‌کشد."
    },
    {
      "id": "a22-22-r2-q4",
      "lesson": 22,
      "mode": "reading",
      "topic": "از وقتی خودرو را فروختم",
      "passageId": "a22-22-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was nimmt sie bei starkem Regen?",
      "answers": [
        "den Bus",
        "Bus"
      ],
      "why": "در باران شدید اتوبوس سوار می‌شود."
    },
    {
      "id": "a22-22-r2-q5",
      "lesson": 22,
      "mode": "reading",
      "topic": "از وقتی خودرو را فروختم",
      "passageId": "a22-22-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Sie benutzt manchmal Carsharing. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "برای خریدهای بزرگ گاهی از خودروی اشتراکی استفاده می‌کند."
    },
    {
      "id": "a22-23-r1-q1",
      "lesson": 23,
      "mode": "reading",
      "topic": "کارآموزی مینا",
      "passageId": "a22-23-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo macht Mina ihre Ausbildung?",
      "answers": [
        "in einer Fahrradwerkstatt",
        "in der Fahrradwerkstatt",
        "Fahrradwerkstatt"
      ],
      "why": "آموزش او در کارگاه دوچرخه است."
    },
    {
      "id": "a22-23-r1-q2",
      "lesson": 23,
      "mode": "reading",
      "topic": "کارآموزی مینا",
      "passageId": "a22-23-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wer erklärt ihr morgens die Aufgaben?",
      "answers": [
        "der Chef",
        "Chef"
      ],
      "why": "رئیس کارها را توضیح می‌دهد."
    },
    {
      "id": "a22-23-r1-q3",
      "lesson": 23,
      "mode": "reading",
      "topic": "کارآموزی مینا",
      "passageId": "a22-23-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie oft besucht sie die Berufsschule?",
      "answers": [
        "zweimal pro Woche",
        "zweimal",
        "2 Mal pro Woche",
        "zwei Mal pro Woche"
      ],
      "why": "هفته‌ای دو بار مدرسهٔ حرفه‌ای می‌رود."
    },
    {
      "id": "a22-23-r1-q4",
      "lesson": 23,
      "mode": "reading",
      "topic": "کارآموزی مینا",
      "passageId": "a22-23-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie ist die Kollegin?",
      "answers": [
        "geduldig",
        "sehr geduldig"
      ],
      "why": "همکار صبور است."
    },
    {
      "id": "a22-23-r1-q5",
      "lesson": 23,
      "mode": "reading",
      "topic": "کارآموزی مینا",
      "passageId": "a22-23-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Mina ist mit der Ausbildung unzufrieden. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "او راضی است و می‌خواهد بعداً به مشتریان هم مشاوره بدهد."
    },
    {
      "id": "a22-23-r2-q1",
      "lesson": 23,
      "mode": "reading",
      "topic": "در جست‌وجوی شغل مناسب",
      "passageId": "a22-23-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was sucht Omid?",
      "answers": [
        "einen Beruf",
        "Beruf",
        "einen passenden Beruf"
      ],
      "why": "عمدتاً دنبال شغل مناسب است."
    },
    {
      "id": "a22-23-r2-q2",
      "lesson": 23,
      "mode": "reading",
      "topic": "در جست‌وجوی شغل مناسب",
      "passageId": "a22-23-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Welche Stärke wird genannt?",
      "answers": [
        "Geduld",
        "geduldig"
      ],
      "why": "صبر یکی از نقاط قوت اوست."
    },
    {
      "id": "a22-23-r2-q3",
      "lesson": 23,
      "mode": "reading",
      "topic": "در جست‌وجوی شغل مناسب",
      "passageId": "a22-23-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo machte er ein Praktikum?",
      "answers": [
        "in einem Pflegeheim",
        "im Pflegeheim",
        "Pflegeheim"
      ],
      "why": "در خانهٔ سالمندان کارآموزی کرده است."
    },
    {
      "id": "a22-23-r2-q4",
      "lesson": 23,
      "mode": "reading",
      "topic": "در جست‌وجوی شغل مناسب",
      "passageId": "a22-23-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Womit möchte er den Betrieb gut erreichen können?",
      "answers": [
        "mit dem Bus",
        "Bus"
      ],
      "why": "دسترسی با اتوبوس برایش مهم است."
    },
    {
      "id": "a22-23-r2-q5",
      "lesson": 23,
      "mode": "reading",
      "topic": "در جست‌وجوی شغل مناسب",
      "passageId": "a22-23-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wann hat er ein Vorstellungsgespräch?",
      "answers": [
        "nächste Woche"
      ],
      "why": "مصاحبه هفتهٔ آینده است."
    },
    {
      "id": "a22-24-r1-q1",
      "lesson": 24,
      "mode": "reading",
      "topic": "شش ماه در وین",
      "passageId": "a22-24-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "In welcher Stadt war Sara?",
      "answers": [
        "in Wien",
        "Wien"
      ],
      "why": "شهر وین است."
    },
    {
      "id": "a22-24-r1-q2",
      "lesson": 24,
      "mode": "reading",
      "topic": "شش ماه در وین",
      "passageId": "a22-24-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wo wurde sie abgeholt?",
      "answers": [
        "am Bahnhof",
        "Bahnhof"
      ],
      "why": "خانوادهٔ میزبان در ایستگاه قطار دنبالش آمد."
    },
    {
      "id": "a22-24-r1-q3",
      "lesson": 24,
      "mode": "reading",
      "topic": "شش ماه در وین",
      "passageId": "a22-24-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wie lange blieb sie?",
      "answers": [
        "sechs Monate",
        "6 Monate"
      ],
      "why": "شش ماه ماند."
    },
    {
      "id": "a22-24-r1-q4",
      "lesson": 24,
      "mode": "reading",
      "topic": "شش ماه در وین",
      "passageId": "a22-24-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Wann stand sie jeden Morgen auf?",
      "answers": [
        "um sechs",
        "um sechs Uhr",
        "sechs Uhr",
        "6 Uhr",
        "6:00"
      ],
      "why": "هر روز ساعت شش بیدار می‌شد."
    },
    {
      "id": "a22-24-r1-q5",
      "lesson": 24,
      "mode": "reading",
      "topic": "شش ماه در وین",
      "passageId": "a22-24-r1",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Ihre Kollegen halfen ihr. Richtig oder falsch?",
      "answers": [
        "richtig"
      ],
      "why": "همکاران با صبر کمک می‌کردند."
    },
    {
      "id": "a22-24-r2-q1",
      "lesson": 24,
      "mode": "reading",
      "topic": "نامه پس از بازگشت",
      "passageId": "a22-24-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "An wen schreibt Amir?",
      "answers": [
        "an Ben",
        "Ben"
      ],
      "why": "نامه به بن نوشته شده است."
    },
    {
      "id": "a22-24-r2-q2",
      "lesson": 24,
      "mode": "reading",
      "topic": "نامه پس از بازگشت",
      "passageId": "a22-24-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was hatte Amir am Anfang?",
      "answers": [
        "Heimweh",
        "großes Heimweh"
      ],
      "why": "اوایل دلتنگ خانه بود."
    },
    {
      "id": "a22-24-r2-q3",
      "lesson": 24,
      "mode": "reading",
      "topic": "نامه پس از بازگشت",
      "passageId": "a22-24-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was zeigte Ben ihm?",
      "answers": [
        "die Stadt",
        "Stadt"
      ],
      "why": "بن شهر را نشانش داد."
    },
    {
      "id": "a22-24-r2-q4",
      "lesson": 24,
      "mode": "reading",
      "topic": "نامه پس از بازگشت",
      "passageId": "a22-24-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Was fand Amir später?",
      "answers": [
        "eine kleine Wohnung",
        "eine Wohnung",
        "Wohnung"
      ],
      "why": "بعداً یک آپارتمان کوچک پیدا کرد."
    },
    {
      "id": "a22-24-r2-q5",
      "lesson": 24,
      "mode": "reading",
      "topic": "نامه پس از بازگشت",
      "passageId": "a22-24-r2",
      "prompt": "با توجه به متن پاسخ کوتاه بده. برای Richtig/Falsch یکی از همین دو واژه را بنویس.",
      "text": "Der Abschied war für Amir leicht. Richtig oder falsch?",
      "answers": [
        "falsch"
      ],
      "why": "خداحافظی برایش سخت بود."
    },
    {
      "id": "a22-13-w1",
      "lesson": 13,
      "mode": "writing",
      "topic": "اولین تجربهٔ زبان",
      "prompt": "در ۴ تا ۶ جمله دربارهٔ اولین تجربهٔ یادگیری یک زبان بنویس؛ دست‌کم دو جمله با als داشته باش.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Als ich zwölf war, begann ich Englisch zu lernen. Meine Lehrerin zeigte uns viele Bilder. Als ich zum ersten Mal einen ganzen Satz verstand, freute ich mich sehr. Zu Hause übte ich mit meinem Bruder. Diese Erfahrung motivierte mich.",
      "checklist": [
        "زمان شروع",
        "دو جمله با als",
        "فعل آخر بخش als",
        "احساس یا نتیجه"
      ]
    },
    {
      "id": "a22-13-w2",
      "lesson": 13,
      "mode": "writing",
      "topic": "روش یادگیری من",
      "prompt": "یک برنامهٔ کوتاهٔ یادگیری برای یک هفته بنویس. روش مرور، شنیدن و صحبت کردن را توضیح بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich lerne jeden Abend zwanzig Minuten. Zuerst wiederhole ich zehn Wörter. Danach höre ich einen kurzen Dialog. Neue Wörter schreibe ich in Beispielsätzen auf. Am Sonntag spreche ich mit meinem Lernpartner.",
      "checklist": [
        "زمان منظم",
        "مرور واژه",
        "تمرین شنیدن",
        "تمرین صحبت"
      ]
    },
    {
      "id": "a22-13-s1",
      "lesson": 13,
      "mode": "speaking",
      "topic": "خاطرهٔ کلاس",
      "prompt": "با دوستت دربارهٔ یک اتفاق در کلاس گفت‌وگو کن. از او زمان و احساسش را بپرس.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Wann hast du deinen ersten Sprachkurs besucht? — Als ich nach Bonn zog, besuchte ich einen Abendkurs. — Wie war das für dich? — Am Anfang war ich nervös, aber die Gruppe war sehr nett.",
      "checklist": [
        "سؤال از زمان",
        "پاسخ با als",
        "سؤال از احساس",
        "واکنش مناسب"
      ]
    },
    {
      "id": "a22-13-s2",
      "lesson": 13,
      "mode": "speaking",
      "topic": "نکتهٔ یادگیری",
      "prompt": "دو مشکل زبانی را مطرح کن و برای هر کدام یک پیشنهاد بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich vergesse neue Wörter schnell. — Du könntest sie in Sätzen aufschreiben. — Beim Hören verstehe ich wenig. — Hör zuerst kurze Dialoge und wiederhole sie mehrmals.",
      "checklist": [
        "دو مشکل",
        "دو پیشنهاد مشخص",
        "لحن دوستانه",
        "مثال یا دلیل"
      ]
    },
    {
      "id": "a22-17-w1",
      "lesson": 17,
      "mode": "writing",
      "topic": "برنامهٔ سفر",
      "prompt": "در ۵ جمله یک سفر برنامه‌ریزی کن: مقصد، وسیله، محل اقامت، مدت و فعالیت‌ها.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Im August fahren wir in die Schweiz. Wir reisen mit dem Zug und bleiben eine Woche. Unsere Unterkunft liegt in den Bergen. Jeden Morgen möchten wir wandern. Bei schlechtem Wetter besuchen wir ein Museum.",
      "checklist": [
        "مقصد با حرف اضافه",
        "وسیلهٔ سفر",
        "محل ثابت با حرف اضافه",
        "مدت و فعالیت"
      ]
    },
    {
      "id": "a22-17-w2",
      "lesson": 17,
      "mode": "writing",
      "topic": "کارت‌پستال سفر",
      "prompt": "یک کارت‌پستال با ۴ تا ۶ جمله از کنار دریا یا یک جزیره بنویس.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Liebe Mina, wir sind seit Montag auf einer Insel. Unsere Pension liegt direkt am Meer. Gestern sind wir an den Strand gegangen. Heute bleiben wir im Dorf und besuchen ein Café. Morgen fahren wir mit der Fähre zurück. Liebe Grüße, Sara",
      "checklist": [
        "سلام و پایان",
        "محل اقامت",
        "یک مقصد با آکوزاتیو",
        "فعالیت و برنامهٔ بعدی"
      ]
    },
    {
      "id": "a22-17-s1",
      "lesson": 17,
      "mode": "speaking",
      "topic": "خرید بلیط",
      "prompt": "برای سفر به وین بلیط رفت‌وبرگشت بخر. دربارهٔ زمان، تعویض قطار و قیمت سؤال کن.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Guten Tag, ich brauche eine Fahrkarte nach Wien, hin und zurück. Wann fährt der nächste Zug? Muss ich umsteigen? Wie viel kostet die Fahrkarte? Kann ich einen Sitzplatz reservieren?",
      "checklist": [
        "مقصد",
        "رفت‌وبرگشت",
        "سؤال زمان و تعویض",
        "درخواست مؤدبانه"
      ]
    },
    {
      "id": "a22-17-s2",
      "lesson": 17,
      "mode": "speaking",
      "topic": "دریا یا کوه",
      "prompt": "دوستت دریا را دوست دارد و تو کوه را. دلیل بدهید و دربارهٔ مقصد توافق کنید.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich würde gern in die Berge fahren, weil ich wandern möchte. — Ich möchte lieber ans Meer. Dort können wir schwimmen. — Wie wäre es mit einem See in den Bergen? — Gute Idee!",
      "checklist": [
        "دو ترجیح",
        "دلیل",
        "پیشنهاد میانی",
        "توافق"
      ]
    },
    {
      "id": "a22-18-w1",
      "lesson": 18,
      "mode": "writing",
      "topic": "هوای شهر من",
      "prompt": "هوای دو فصل را مقایسه کن و بگو به چه هوایی علاقه داری؛ دو فعل با حرف اضافه داشته باش.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Im Sommer ist es in meiner Stadt oft heiß und trocken. Im Winter regnet es viel. Ich freue mich auf den Frühling. Dann kann ich öfter draußen sein. Über starken Wind ärgere ich mich, weil ich gern Rad fahre.",
      "checklist": [
        "دو فصل",
        "واژگان هوا",
        "دو فعل با حرف اضافه",
        "دلیل شخصی"
      ]
    },
    {
      "id": "a22-18-w2",
      "lesson": 18,
      "mode": "writing",
      "topic": "نظر دربارهٔ هوای سفر",
      "prompt": "برای یک دوست دربارهٔ پیش‌بینی هوا و وسایل لازم پیام بنویس. از darauf یا darüber استفاده کن.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Am Samstag soll die Sonne scheinen. Darauf freue ich mich sehr. Am Sonntag kann es aber regnen. Nimm bitte eine Regenjacke und warme Schuhe mit. Über unsere Pläne sprechen wir morgen noch einmal.",
      "checklist": [
        "دو روز",
        "پیش‌بینی هوا",
        "وسایل مناسب",
        "ضمیر قیدی"
      ]
    },
    {
      "id": "a22-18-s1",
      "lesson": 18,
      "mode": "speaking",
      "topic": "سؤال از شخص و چیز",
      "prompt": "دو سؤال با Worauf یا Wovon و دو سؤال دربارهٔ اشخاص با حرف اضافه بپرس.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Worauf freust du dich? — Auf den Urlaub. Wovon träumst du? — Von einer langen Reise. Auf wen wartest du? — Auf meine Schwester. Mit wem sprichst du? — Mit meinem Bruder.",
      "checklist": [
        "سؤال wo- از چیز",
        "سؤال با حرف اضافه از انسان",
        "حالت wen یا wem",
        "پاسخ کامل"
      ]
    },
    {
      "id": "a22-18-s2",
      "lesson": 18,
      "mode": "speaking",
      "topic": "برنامه با توجه به هوا",
      "prompt": "دربارهٔ یک گردش برنامه‌ریزی کن و برای هوای بارانی هم جایگزین پیشنهاد بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Am Samstag wird es sonnig. Wir könnten an den See fahren. — Darauf freue ich mich! Und wenn es regnet? — Dann besuchen wir ein Museum. — Gut, wir sehen uns den Wetterbericht morgen noch einmal an.",
      "checklist": [
        "صحبت از هوا",
        "پیشنهاد",
        "ارجاع با darauf",
        "برنامهٔ جایگزین"
      ]
    },
    {
      "id": "a22-19-w1",
      "lesson": 19,
      "mode": "writing",
      "topic": "دعوت فرهنگی",
      "prompt": "یک پیام دعوت به نمایشگاه یا کنسرت بنویس؛ زمان، قیمت و محل قرار را مشخص کن.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Hallo Ben, am Freitag gibt es eine Ausstellung im Stadtmuseum. Der Eintritt kostet fünf Euro. Ich möchte sie gern mit dir besuchen. Treffen wir uns um sechs vor dem Eingang? Danach könnten wir etwas essen.",
      "checklist": [
        "رویداد",
        "زمان",
        "قیمت",
        "محل قرار و سؤال"
      ]
    },
    {
      "id": "a22-19-w2",
      "lesson": 19,
      "mode": "writing",
      "topic": "بعد از برنامه",
      "prompt": "در ۴ تا ۶ جمله بگو از کجا آمده‌ای، چه دیدی و چه نظری داری. aus و von را هر دو به کار ببر.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich komme gerade aus dem Museum. Dort habe ich eine Fotoausstellung besucht. Die Bilder waren beeindruckend. Meine Freundin kam direkt von der Arbeit dazu. Danach haben wir in einem Café über die Ausstellung gesprochen.",
      "checklist": [
        "مبدأ از داخل",
        "مبدأ فعالیت",
        "توصیف برنامه",
        "نظر و ادامهٔ روایت"
      ]
    },
    {
      "id": "a22-19-s1",
      "lesson": 19,
      "mode": "speaking",
      "topic": "متقاعد کردن دوست",
      "prompt": "دوستت برای رفتن به تئاتر مردد است. دو دلیل بیاور و به نگرانی او جواب بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Kommst du heute mit ins Theater? — Ich bin noch nicht sicher. Ist es teuer? — Die Karten kosten nur zehn Euro, und das Stück soll sehr lustig sein. — Dann komme ich gern mit.",
      "checklist": [
        "پیشنهاد",
        "تردید طرف مقابل",
        "دو نکتهٔ مثبت",
        "توافق"
      ]
    },
    {
      "id": "a22-19-s2",
      "lesson": 19,
      "mode": "speaking",
      "topic": "مبدأ و مقصد",
      "prompt": "دربارهٔ اینکه از کجا می‌آیید و کجا می‌روید، چهار پرسش و پاسخ بساز.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Woher kommst du? — Aus der Bibliothek. Und du? — Vom Sport. Wohin gehst du jetzt? — Ins Kino. Kommst du mit? — Gern, aber ich gehe zuerst nach Hause.",
      "checklist": [
        "woher",
        "aus + Dativ",
        "von + Dativ",
        "wohin"
      ]
    },
    {
      "id": "a22-20-w1",
      "lesson": 20,
      "mode": "writing",
      "topic": "قانون‌های کودکی",
      "prompt": "در ۵ جمله دربارهٔ اجازه‌ها، اجبارها و علاقه‌های دوران کودکی بنویس؛ چهار فعل مُدال گذشته استفاده کن.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Als Kind durfte ich abends nur kurz fernsehen. Ich musste zuerst meine Hausaufgaben machen. Mit sechs konnte ich schon lesen. Ich wollte jeden Tag in die Bibliothek gehen. Besonders mochte ich Abenteuergeschichten.",
      "checklist": [
        "اجازه با durfte",
        "اجبار با musste",
        "توانایی با konnte",
        "خواسته یا علاقه در گذشته"
      ]
    },
    {
      "id": "a22-20-w2",
      "lesson": 20,
      "mode": "writing",
      "topic": "توصیهٔ کتاب",
      "prompt": "یک کتاب خیالی یا واقعی را در ۴ تا ۶ جمله پیشنهاد کن. موضوع، دلیل علاقه و مناسب بودنش را بگو.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich möchte dir einen kurzen Roman empfehlen. Er handelt von einer Familie, die in eine neue Stadt zieht. Die Geschichte ist spannend und manchmal lustig. Die Sprache ist nicht zu schwierig. Du kannst das Buch in der Bibliothek ausleihen.",
      "checklist": [
        "نوع کتاب",
        "موضوع با handeln von",
        "دلیل پیشنهاد",
        "راه تهیه"
      ]
    },
    {
      "id": "a22-20-s1",
      "lesson": 20,
      "mode": "speaking",
      "topic": "اجازه یا ضرورت",
      "prompt": "با دوستت دربارهٔ قانون‌های گذشته حرف بزن و تفاوت «اجازه نداشتم» و «لازم نبود» را نشان بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Durftest du früher lange lesen? — Ja, aber ich durfte nicht lange fernsehen. Musstest du am Wochenende früh aufstehen? — Nein, am Sonntag musste ich nicht früh aufstehen.",
      "checklist": [
        "سؤال با durfte",
        "پاسخ منفی اجازه",
        "سؤال با musste",
        "بی‌نیازی نه ممنوعیت"
      ]
    },
    {
      "id": "a22-20-s2",
      "lesson": 20,
      "mode": "speaking",
      "topic": "کتابخانه",
      "prompt": "کتابی امانت بگیر و دربارهٔ مهلت و تمدید سؤال کن؛ به یک پیشنهاد واکنش نشان بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich suche einen spannenden Roman. Können Sie mir etwas empfehlen? — Mögen Sie Abenteuergeschichten? — Ja, die interessieren mich. Wie lange darf ich das Buch behalten? Kann ich die Frist verlängern?",
      "checklist": [
        "درخواست پیشنهاد",
        "بیان علاقه",
        "مهلت",
        "تمدید"
      ]
    },
    {
      "id": "a22-21-w1",
      "lesson": 21,
      "mode": "writing",
      "topic": "توصیف شیء گم‌شده",
      "prompt": "یک پیام تمرینی برای اشیای گم‌شده بنویس: چه چیزی، کجا، چه زمانی و چه ویژگی‌هایی.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Guten Tag, ich habe gestern gegen fünf Uhr meine Tasche im Bus verloren. Sie ist dunkelgrün und hat einen schwarzen Griff. In der Tasche waren ein Buch und mein Notizheft. Haben Sie diese Tasche gefunden? Vielen Dank für Ihre Hilfe.",
      "checklist": [
        "شیء",
        "زمان و محل",
        "ویژگی ظاهری",
        "درخواست مؤدبانه"
      ]
    },
    {
      "id": "a22-21-w2",
      "lesson": 21,
      "mode": "writing",
      "topic": "کارهایی که می‌سپارم",
      "prompt": "در ۴ جمله بگو چه کارهایی را به دیگران می‌سپاری. دست‌کم سه جمله با lassen بنویس.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Diese Woche lasse ich mein Fahrrad reparieren. Außerdem lasse ich mein Zeugnis kopieren. Am Freitag lasse ich mir die Haare schneiden. Die Termine habe ich schon vereinbart.",
      "checklist": [
        "سه lassen",
        "مصدر در پایان",
        "صرف مطابق فاعل",
        "زمان‌بندی"
      ]
    },
    {
      "id": "a22-21-s1",
      "lesson": 21,
      "mode": "speaking",
      "topic": "کدام مدرک؟",
      "prompt": "دربارهٔ انتخاب میان چند مدرک گفت‌وگو کن؛ welch-، dies- و یک ضمیر اشاره داشته باش.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Welchen Ausweis brauchen Sie? — Diesen hier. — Meinen Sie den alten? — Nein, den neuen. — Und welches Formular soll ich ausfüllen? — Dieses dort.",
      "checklist": [
        "پرسش welch-",
        "اشاره dies-",
        "den برای مذکر آکوزاتیو",
        "خنثی welches/dieses"
      ]
    },
    {
      "id": "a22-21-s2",
      "lesson": 21,
      "mode": "speaking",
      "topic": "در تعمیرگاه",
      "prompt": "وسیله‌ای را برای تعمیر ببر و بگو چه کاری می‌خواهی انجام شود؛ دربارهٔ زمان و قیمت بپرس.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Guten Tag, ich möchte mein Fahrrad reparieren lassen. Die Bremse funktioniert nicht richtig. Wann kann ich es abholen? Können Sie mir sagen, wie viel die Reparatur kostet?",
      "checklist": [
        "lassen + مصدر",
        "توضیح مشکل",
        "سؤال زمان",
        "سؤال قیمت"
      ]
    },
    {
      "id": "a22-22-w1",
      "lesson": 22,
      "mode": "writing",
      "topic": "راهنمای ثبت‌نام",
      "prompt": "در پنج مرحله یک ثبت‌نام فرضی را توضیح بده. یک جمله با bis داشته باش.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Zuerst öffnen Sie die App. Danach registrieren Sie sich mit Ihrer E-Mail-Adresse. Warten Sie, bis die Bestätigung kommt. Klicken Sie dann auf den Link. Zum Schluss können Sie sich einloggen.",
      "checklist": [
        "ترتیب مراحل",
        "دستور محترمانه",
        "bis با فعل آخر",
        "فعل جداشدنی"
      ]
    },
    {
      "id": "a22-22-w2",
      "lesson": 22,
      "mode": "writing",
      "topic": "از وقتی که",
      "prompt": "در ۴ تا ۶ جمله تغییر زندگی بعد از یک اتفاق را شرح بده؛ دو جمله با seit/seitdem بنویس.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Seit ich in Bonn wohne, fahre ich mit dem Rad zur Arbeit. Ich brauche nur fünfzehn Minuten. Seitdem ich mein Auto verkauft habe, spare ich Geld. Für längere Reisen nehme ich den Zug. Mit dieser Lösung bin ich zufrieden.",
      "checklist": [
        "رویداد آغاز",
        "دو جملهٔ seit",
        "نتیجهٔ ادامه‌دار در حال",
        "مقایسه یا رضایت"
      ]
    },
    {
      "id": "a22-22-s1",
      "lesson": 22,
      "mode": "speaking",
      "topic": "کمک در اپ",
      "prompt": "دوستت برای ثبت‌نام کمک می‌خواهد. مراحل را توضیح بده و بگو تا رسیدن پیام صبر کند.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Was muss ich zuerst machen? — Gib deine E-Mail-Adresse ein. — Und dann? — Warte, bis die Nachricht kommt. Danach klickst du auf den Link und bestätigst deine Adresse.",
      "checklist": [
        "پرسش مرحله",
        "eingeben",
        "bis",
        "تأیید"
      ]
    },
    {
      "id": "a22-22-s2",
      "lesson": 22,
      "mode": "speaking",
      "topic": "تغییر وسیلهٔ رفت‌وآمد",
      "prompt": "دربارهٔ رفت‌وآمد قبل و بعد از یک تغییر گفت‌وگو کن؛ با seitdem دلیل تغییر عادت را بگو.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Wie kommst du zur Arbeit? — Seitdem ich näher am Büro wohne, gehe ich zu Fuß. — Und früher? — Früher nahm ich den Bus. Jetzt spare ich Zeit und bewege mich mehr.",
      "checklist": [
        "عادت قبلی",
        "تغییر با seitdem",
        "وضعیت فعلی",
        "نتیجه"
      ]
    },
    {
      "id": "a22-23-w1",
      "lesson": 23,
      "mode": "writing",
      "topic": "شغل مناسب من",
      "prompt": "در ۵ جمله شغل مناسب خودت را معرفی کن؛ دو جملهٔ موصولی یکی نومیناتیو و یکی آکوزاتیو داشته باش.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich suche einen Beruf, der zu meinen Stärken passt. Ich arbeite gern mit Menschen. Eine Aufgabe, die ich besonders gern mache, ist das Erklären. Deshalb interessiert mich die Arbeit in einer Sprachschule. Ich bin geduldig und zuverlässig.",
      "checklist": [
        "نقطهٔ قوت",
        "موصولی فاعلی",
        "موصولی مفعولی",
        "دلیل علاقه"
      ]
    },
    {
      "id": "a22-23-w2",
      "lesson": 23,
      "mode": "writing",
      "topic": "معرفی محل کار",
      "prompt": "یک محل کار یا کارآموزی را با ۴ تا ۶ جمله توصیف کن؛ همکار، کارها و رضایتت را بگو.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich mache ein Praktikum in einer Werkstatt. Der Kollege, der mich betreut, ist sehr geduldig. Die Aufgaben, die ich bekomme, sind abwechslungsreich. Ich lerne jeden Tag etwas Neues. Mit dem Praktikum bin ich zufrieden.",
      "checklist": [
        "محل",
        "توصیف همکار",
        "توصیف کارها",
        "رضایت با mit"
      ]
    },
    {
      "id": "a22-23-s1",
      "lesson": 23,
      "mode": "speaking",
      "topic": "مصاحبهٔ تمرینی",
      "prompt": "خودت را معرفی کن و دربارهٔ توانایی، تجربه و دلیل انتخاب شغل پاسخ بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich heiße Mina und suche einen Ausbildungsplatz. Ich bin zuverlässig und arbeite gern im Team. In einem Praktikum habe ich gelernt, Kunden zu beraten. Ich suche eine Arbeit, die abwechslungsreich ist.",
      "checklist": [
        "معرفی",
        "دو توانایی",
        "تجربه",
        "جملهٔ موصولی"
      ]
    },
    {
      "id": "a22-23-s2",
      "lesson": 23,
      "mode": "speaking",
      "topic": "کدام همکار؟",
      "prompt": "با جملهٔ موصولی مشخص کن از کدام همکار، دفتر و وظیفه حرف می‌زنی.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Welchen Kollegen meinst du? — Den Kollegen, der an der Rezeption arbeitet. — Welches Büro suchst du? — Das Büro, das wir gestern besichtigt haben. — Welche Aufgabe meinst du? — Die Aufgabe, die wir zusammen machen sollen.",
      "checklist": [
        "مرجع مذکر",
        "مرجع خنثی",
        "مرجع مؤنث",
        "فعل در آخر"
      ]
    },
    {
      "id": "a22-24-w1",
      "lesson": 24,
      "mode": "writing",
      "topic": "روزمرهٔ من در خارج",
      "prompt": "در ۵ تا ۷ جمله یک تجربهٔ واقعی یا خیالی زندگی در خارج را با Präteritum روایت کن.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich lebte sechs Monate in Wien. Jeden Morgen stand ich um sechs Uhr auf. Meine Arbeit begann um acht. Am Anfang verstand ich nicht alles. Meine Kollegen halfen mir viel. Später fühlte ich mich sicherer. Am Wochenende besuchte ich oft Museen.",
      "checklist": [
        "چند فعل گذشتهٔ ساده",
        "روزمره",
        "مشکل آغازین",
        "تغییر و احساس"
      ]
    },
    {
      "id": "a22-24-w2",
      "lesson": 24,
      "mode": "writing",
      "topic": "نامهٔ پس از بازگشت",
      "prompt": "برای یک دوست از تجربهٔ اقامتت بنویس؛ هیجان، سختی و یک خاطره را مطرح کن.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Liebe Sara, letzte Woche kam ich zurück. Der Aufenthalt war eine tolle Erfahrung. Am Anfang hatte ich Heimweh, aber später fand ich gute Freunde. Besonders schön war unser Ausflug ans Meer. Ich hoffe, dass wir in Kontakt bleiben. Liebe Grüße, Amir",
      "checklist": [
        "شروع نامه",
        "روایت گذشته",
        "احساس مثبت و مشکل",
        "ارتباط آینده"
      ]
    },
    {
      "id": "a22-24-s1",
      "lesson": 24,
      "mode": "speaking",
      "topic": "گفت‌وگو دربارهٔ اقامت",
      "prompt": "از دوستت دربارهٔ محل، مدت، کار روزانه و تجربهٔ خاص بپرس و جواب نمونه بده.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Wo warst du? — Ich war in Wien. — Wie lange bliebst du dort? — Sechs Monate. — Wie sah dein Alltag aus? — Ich arbeitete vormittags und lernte nachmittags Deutsch. — Was gefiel dir besonders? — Die netten Menschen.",
      "checklist": [
        "محل و مدت",
        "روزمره",
        "گذشتهٔ ساده",
        "ارزیابی تجربه"
      ]
    },
    {
      "id": "a22-24-s2",
      "lesson": 24,
      "mode": "speaking",
      "topic": "انتظار و واقعیت",
      "prompt": "بگو پیش از سفر چه انتظاری داشتی و واقعیت چه بود. یک احساس منفی و یک احساس مثبت داشته باش.",
      "text": "",
      "answers": [],
      "why": "نوشته یا گفت‌وگوی خودت را با نمونه و چک‌لیست مقایسه کن. پاسخ آزاد نمرهٔ خودکار ندارد.",
      "manual": true,
      "model": "Ich dachte, dass alles sofort einfach wäre. Am Anfang war ich deshalb etwas enttäuscht. Die Sprache war schwierig. Aber meine Kollegen unterstützten mich. Mit der Zeit war ich von meinem neuen Alltag begeistert.",
      "checklist": [
        "انتظار",
        "واقعیت",
        "احساس منفی",
        "تغییر مثبت"
      ]
    },
    {
      "id": "a22-13-audio-1",
      "lesson": 13,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Als ich zehn war, lernte ich Englisch.",
      "answers": [
        "Als ich zehn war, lernte ich Englisch."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-13-audio-2",
      "lesson": 13,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Immer wenn ich Zeit hatte, las ich ein Buch.",
      "answers": [
        "Immer wenn ich Zeit hatte, las ich ein Buch."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-13-audio-3",
      "lesson": 13,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich erinnere mich an meinen ersten Sprachkurs.",
      "answers": [
        "Ich erinnere mich an meinen ersten Sprachkurs."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-13-audio-4",
      "lesson": 13,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Wir wiederholen die neuen Wörter jeden Abend.",
      "answers": [
        "Wir wiederholen die neuen Wörter jeden Abend."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-13-audio-5",
      "lesson": 13,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Als der Unterricht begann, war ich nervös.",
      "answers": [
        "Als der Unterricht begann, war ich nervös."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-13-audio-6",
      "lesson": 13,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Kannst du mir diese Regel erklären?",
      "answers": [
        "Kannst du mir diese Regel erklären?"
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-17-audio-1",
      "lesson": 17,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Im Sommer fahren wir ans Meer.",
      "answers": [
        "Im Sommer fahren wir ans Meer."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-17-audio-2",
      "lesson": 17,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Unsere Unterkunft liegt auf einer Insel.",
      "answers": [
        "Unsere Unterkunft liegt auf einer Insel."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-17-audio-3",
      "lesson": 17,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "In Köln müssen wir umsteigen.",
      "answers": [
        "In Köln müssen wir umsteigen."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-17-audio-4",
      "lesson": 17,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Morgen reisen wir in die Schweiz.",
      "answers": [
        "Morgen reisen wir in die Schweiz."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-17-audio-5",
      "lesson": 17,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Wir wandern gern in den Bergen.",
      "answers": [
        "Wir wandern gern in den Bergen."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-17-audio-6",
      "lesson": 17,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Nimm bitte deinen Rucksack mit.",
      "answers": [
        "Nimm bitte deinen Rucksack mit."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-18-audio-1",
      "lesson": 18,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Worauf wartest du?",
      "answers": [
        "Worauf wartest du?"
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-18-audio-2",
      "lesson": 18,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich freue mich auf den Sommer.",
      "answers": [
        "Ich freue mich auf den Sommer."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-18-audio-3",
      "lesson": 18,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Heute ist es windig und bewölkt.",
      "answers": [
        "Heute ist es windig und bewölkt."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-18-audio-4",
      "lesson": 18,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Wir interessieren uns für das Klima.",
      "answers": [
        "Wir interessieren uns für das Klima."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-18-audio-5",
      "lesson": 18,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Auf wen wartest du?",
      "answers": [
        "Auf wen wartest du?"
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-18-audio-6",
      "lesson": 18,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich träume von einem Urlaub am Meer.",
      "answers": [
        "Ich träume von einem Urlaub am Meer."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-19-audio-1",
      "lesson": 19,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Wir kommen gerade aus dem Museum.",
      "answers": [
        "Wir kommen gerade aus dem Museum."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-19-audio-2",
      "lesson": 19,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich würde lieber ins Theater gehen.",
      "answers": [
        "Ich würde lieber ins Theater gehen."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-19-audio-3",
      "lesson": 19,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Die Lesung findet um acht Uhr statt.",
      "answers": [
        "Die Lesung findet um acht Uhr statt."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-19-audio-4",
      "lesson": 19,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Leider ist das Konzert ausverkauft.",
      "answers": [
        "Leider ist das Konzert ausverkauft."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-19-audio-5",
      "lesson": 19,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Das klingt wirklich interessant.",
      "answers": [
        "Das klingt wirklich interessant."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-19-audio-6",
      "lesson": 19,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Woher kommst du gerade?",
      "answers": [
        "Woher kommst du gerade?"
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-20-audio-1",
      "lesson": 20,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Früher durfte ich keine Comics lesen.",
      "answers": [
        "Früher durfte ich keine Comics lesen."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-20-audio-2",
      "lesson": 20,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Mit sechs konnte ich schon lesen.",
      "answers": [
        "Mit sechs konnte ich schon lesen."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-20-audio-3",
      "lesson": 20,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich musste das Buch gestern zurückgeben.",
      "answers": [
        "Ich musste das Buch gestern zurückgeben."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-20-audio-4",
      "lesson": 20,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Wir wollten einen neuen Roman kaufen.",
      "answers": [
        "Wir wollten einen neuen Roman kaufen."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-20-audio-5",
      "lesson": 20,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Du solltest den Text zusammenfassen.",
      "answers": [
        "Du solltest den Text zusammenfassen."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-20-audio-6",
      "lesson": 20,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Das Buch handelt von einer Familie.",
      "answers": [
        "Das Buch handelt von einer Familie."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-21-audio-1",
      "lesson": 21,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Welchen Ausweis brauchen Sie?",
      "answers": [
        "Welchen Ausweis brauchen Sie?"
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-21-audio-2",
      "lesson": 21,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Genau den Koffer meine ich.",
      "answers": [
        "Genau den Koffer meine ich."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-21-audio-3",
      "lesson": 21,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich lasse mein Fahrrad reparieren.",
      "answers": [
        "Ich lasse mein Fahrrad reparieren."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-21-audio-4",
      "lesson": 21,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Bitte füllen Sie dieses Formular aus.",
      "answers": [
        "Bitte füllen Sie dieses Formular aus."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-21-audio-5",
      "lesson": 21,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Mein Reisepass ist noch gültig.",
      "answers": [
        "Mein Reisepass ist noch gültig."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-21-audio-6",
      "lesson": 21,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Können Sie die Tasche genauer beschreiben?",
      "answers": [
        "Können Sie die Tasche genauer beschreiben?"
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-22-audio-1",
      "lesson": 22,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Warten Sie, bis die Bestätigung kommt.",
      "answers": [
        "Warten Sie, bis die Bestätigung kommt."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-22-audio-2",
      "lesson": 22,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Seit ich hier wohne, fahre ich mit dem Rad.",
      "answers": [
        "Seit ich hier wohne, fahre ich mit dem Rad."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-22-audio-3",
      "lesson": 22,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Bitte geben Sie Ihren Benutzernamen ein.",
      "answers": [
        "Bitte geben Sie Ihren Benutzernamen ein."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-22-audio-4",
      "lesson": 22,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich melde mich nach der Nutzung ab.",
      "answers": [
        "Ich melde mich nach der Nutzung ab."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-22-audio-5",
      "lesson": 22,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Seitdem ich die App benutze, spare ich Zeit.",
      "answers": [
        "Seitdem ich die App benutze, spare ich Zeit."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-22-audio-6",
      "lesson": 22,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich warte hier, bis du zurückkommst.",
      "answers": [
        "Ich warte hier, bis du zurückkommst."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-23-audio-1",
      "lesson": 23,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Das ist der Beruf, der zu mir passt.",
      "answers": [
        "Das ist der Beruf, der zu mir passt."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-23-audio-2",
      "lesson": 23,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich suche einen Betrieb, den ich gut erreichen kann.",
      "answers": [
        "Ich suche einen Betrieb, den ich gut erreichen kann."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-23-audio-3",
      "lesson": 23,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Die Kollegin, die hier arbeitet, ist sehr nett.",
      "answers": [
        "Die Kollegin, die hier arbeitet, ist sehr nett."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-23-audio-4",
      "lesson": 23,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich bin mit meiner Ausbildung zufrieden.",
      "answers": [
        "Ich bin mit meiner Ausbildung zufrieden."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-23-audio-5",
      "lesson": 23,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Hier sind die Aufgaben, die du machen sollst.",
      "answers": [
        "Hier sind die Aufgaben, die du machen sollst."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-23-audio-6",
      "lesson": 23,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Dieser Beruf passt zu meinen Stärken.",
      "answers": [
        "Dieser Beruf passt zu meinen Stärken."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-24-audio-1",
      "lesson": 24,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Ich kam am Sonntag in Wien an.",
      "answers": [
        "Ich kam am Sonntag in Wien an."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-24-audio-2",
      "lesson": 24,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Die Arbeit begann jeden Morgen um acht.",
      "answers": [
        "Die Arbeit begann jeden Morgen um acht."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-24-audio-3",
      "lesson": 24,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Am Anfang hatte ich oft Heimweh.",
      "answers": [
        "Am Anfang hatte ich oft Heimweh."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-24-audio-4",
      "lesson": 24,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Meine Kollegen halfen mir sehr.",
      "answers": [
        "Meine Kollegen halfen mir sehr."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-24-audio-5",
      "lesson": 24,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Später fühlte ich mich dort zu Hause.",
      "answers": [
        "Später fühlte ich mich dort zu Hause."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    },
    {
      "id": "a22-24-audio-6",
      "lesson": 24,
      "mode": "listening",
      "topic": "شنیدن و نوشتن",
      "prompt": "جمله را با صدای دستگاه بشنو و به آلمانی بنویس. هر چند بار خواستی پخش کن.",
      "text": "",
      "audioText": "Nach meiner Rückkehr blieb ich mit allen in Kontakt.",
      "answers": [
        "Nach meiner Rückkehr blieb ich mit allen in Kontakt."
      ],
      "why": "املای واژه‌ها و ترتیب جمله را با پاسخ مقایسه کن. ae، oe، ue و ss هم پذیرفته می‌شوند.",
      "sentence": true
    }
  ]
};
Object.assign(base.lessons,pack.lessons);
for(const key of ['words','verbs','passages','exercises'])base[key].push(...pack[key]);
base.loadedPacks=[...(base.loadedPacks||[]),packId];
if(typeof module!=='undefined'&&module.exports)module.exports=base;
})(typeof window!=='undefined'?window:globalThis);
