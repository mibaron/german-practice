(function () {
  'use strict';

  const PEOPLE = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  const PRACTICE_GROUPS = [
    {label: 'ich', key: 'ich'},
    {label: 'du', key: 'du'},
    {label: 'er/sie/es', key: 'er/sie/es'},
    {label: 'wir / sie / Sie', keys: ['wir', 'sie/Sie']},
    {label: 'ihr', key: 'ihr'}
  ];
  const REFLEXIVE = {
    ich: 'mich', du: 'dich', 'er/sie/es': 'sich',
    wir: 'uns', ihr: 'euch', 'sie/Sie': 'sich'
  };

  const P = (ich, du, er, wir, ihr, sie) => ({
    ich, du, 'er/sie/es': er, wir, ihr, 'sie/Sie': sie
  });

  function regular(infinitive, options = {}) {
    let stem = options.stem;
    if (!stem) {
      if (infinitive.endsWith('eln')) stem = infinitive.slice(0, -3) + 'el';
      else if (infinitive.endsWith('ern')) stem = infinitive.slice(0, -1);
      else if (infinitive.endsWith('en')) stem = infinitive.slice(0, -2);
      else stem = infinitive.slice(0, -1);
    }
    const extraE = options.extraE || /[dt]$/.test(stem);
    const duEnding = /[sßxz]$/.test(stem) ? 't' : (extraE ? 'est' : 'st');
    const finiteEnding = extraE ? 'et' : 't';
    return P(
      stem + 'e', stem + duEnding, stem + finiteEnding,
      infinitive, stem + finiteEnding, infinitive
    );
  }

  function separable(prefix, base) {
    return Object.fromEntries(PEOPLE.map(person => [person, base[person] + ' ' + prefix]));
  }

  function reflexive(base, prefix = '') {
    return Object.fromEntries(PEOPLE.map(person => [
      person,
      base[person] + ' ' + REFLEXIVE[person] + (prefix ? ' ' + prefix : '')
    ]));
  }

  function verb(verbName, meaning, present, perfekt, type = 'regular', options = {}) {
    return {
      verb: verbName,
      meaning,
      present,
      perfekt,
      level: 'A1',
      type,
      source: 'Goethe-Zertifikat A1: Start Deutsch 1 Wortliste',
      ...options
    };
  }

  const FAHREN = P('fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren');
  const FANGEN = P('fange', 'fängst', 'fängt', 'fangen', 'fangt', 'fangen');
  const GEBEN = P('gebe', 'gibst', 'gibt', 'geben', 'gebt', 'geben');
  const SEHEN = P('sehe', 'siehst', 'sieht', 'sehen', 'seht', 'sehen');
  const STEHEN = P('stehe', 'stehst', 'steht', 'stehen', 'steht', 'stehen');
  const ZIEHEN = P('ziehe', 'ziehst', 'zieht', 'ziehen', 'zieht', 'ziehen');
  const NEHMEN = P('nehme', 'nimmst', 'nimmt', 'nehmen', 'nehmt', 'nehmen');
  const TUN = P('tue', 'tust', 'tut', 'tun', 'tut', 'tun');

  const verbs = [
    verb('abfahren', 'to depart', separable('ab', FAHREN), 'ist abgefahren', 'separable'),
    verb('abgeben', 'to hand in / give back', separable('ab', GEBEN), 'hat abgegeben', 'separable'),
    verb('abholen', 'to pick up', separable('ab', regular('holen')), 'hat abgeholt', 'separable'),
    verb('anbieten', 'to offer', separable('an', regular('bieten')), 'hat angeboten', 'separable-irregular'),
    verb('anfangen', 'to begin', separable('an', FANGEN), 'hat angefangen', 'separable-irregular'),
    verb('anklicken', 'to click', separable('an', regular('klicken')), 'hat angeklickt', 'separable'),
    verb('ankommen', 'to arrive', separable('an', regular('kommen')), 'ist angekommen', 'separable'),
    verb('ankreuzen', 'to tick / mark with a cross', separable('an', regular('kreuzen')), 'hat angekreuzt', 'separable'),
    verb('anmachen', 'to switch on', separable('an', regular('machen')), 'hat angemacht', 'separable'),
    verb('sich anmelden', 'to register / sign up', reflexive(regular('melden'), 'an'), 'hat sich angemeldet', 'reflexive-separable'),
    verb('anrufen', 'to call by phone', separable('an', regular('rufen')), 'hat angerufen', 'separable-irregular'),
    verb('antworten', 'to answer', regular('antworten'), 'hat geantwortet'),
    verb('sich anziehen', 'to get dressed', reflexive(ZIEHEN, 'an'), 'hat sich angezogen', 'reflexive-separable-irregular'),
    verb('arbeiten', 'to work', regular('arbeiten'), 'hat gearbeitet'),
    verb('aufhören', 'to stop', separable('auf', regular('hören')), 'hat aufgehört', 'separable'),
    verb('aufstehen', 'to get up', separable('auf', STEHEN), 'ist aufgestanden', 'separable-irregular'),
    verb('ausfüllen', 'to fill in', separable('aus', regular('füllen')), 'hat ausgefüllt', 'separable'),
    verb('ausmachen', 'to switch off', separable('aus', regular('machen')), 'hat ausgemacht', 'separable'),
    verb('aussehen', 'to look / appear', separable('aus', SEHEN), 'hat ausgesehen', 'separable-irregular'),
    verb('aussteigen', 'to get out / disembark', separable('aus', regular('steigen')), 'ist ausgestiegen', 'separable-irregular'),
    verb('sich ausziehen', 'to get undressed', reflexive(ZIEHEN, 'aus'), 'hat sich ausgezogen', 'reflexive-separable-irregular'),

    verb('baden', 'to bathe', regular('baden'), 'hat gebadet'),
    verb('bedeuten', 'to mean', regular('bedeuten'), 'hat bedeutet'),
    verb('beginnen', 'to begin', P('beginne', 'beginnst', 'beginnt', 'beginnen', 'beginnt', 'beginnen'), 'hat begonnen', 'irregular'),
    verb('bekommen', 'to receive / get', regular('bekommen'), 'hat bekommen', 'irregular-perfect'),
    verb('benutzen', 'to use', regular('benutzen'), 'hat benutzt'),
    verb('besichtigen', 'to visit / inspect', regular('besichtigen'), 'hat besichtigt'),
    verb('bestellen', 'to order', regular('bestellen'), 'hat bestellt'),
    verb('besuchen', 'to visit', regular('besuchen'), 'hat besucht'),
    verb('bezahlen', 'to pay', regular('bezahlen'), 'hat bezahlt'),
    verb('bitten', 'to ask / request', P('bitte', 'bittest', 'bittet', 'bitten', 'bittet', 'bitten'), 'hat gebeten', 'irregular'),
    verb('bleiben', 'to stay / remain', P('bleibe', 'bleibst', 'bleibt', 'bleiben', 'bleibt', 'bleiben'), 'ist geblieben', 'irregular'),
    verb('brauchen', 'to need', regular('brauchen'), 'hat gebraucht'),
    verb('bringen', 'to bring', P('bringe', 'bringst', 'bringt', 'bringen', 'bringt', 'bringen'), 'hat gebracht', 'irregular'),
    verb('buchstabieren', 'to spell', regular('buchstabieren'), 'hat buchstabiert'),

    verb('danken', 'to thank', regular('danken'), 'hat gedankt'),
    verb('dauern', 'to last / take time', regular('dauern'), 'hat gedauert'),
    verb('drucken', 'to print', regular('drucken'), 'hat gedruckt'),
    verb('drücken', 'to press', regular('drücken'), 'hat gedrückt'),
    verb('dürfen', 'may / to be allowed to', P('darf', 'darfst', 'darf', 'dürfen', 'dürft', 'dürfen'), 'hat gedurft', 'modal'),
    verb('sich duschen', 'to shower', reflexive(regular('duschen')), 'hat sich geduscht', 'reflexive'),

    verb('einkaufen', 'to shop', separable('ein', regular('kaufen')), 'hat eingekauft', 'separable'),
    verb('einladen', 'to invite', separable('ein', P('lade', 'lädst', 'lädt', 'laden', 'ladet', 'laden')), 'hat eingeladen', 'separable-irregular'),
    verb('einsteigen', 'to get in / board', separable('ein', regular('steigen')), 'ist eingestiegen', 'separable-irregular'),
    verb('empfehlen', 'to recommend', P('empfehle', 'empfiehlst', 'empfiehlt', 'empfehlen', 'empfehlt', 'empfehlen'), 'hat empfohlen', 'irregular'),
    verb('enden', 'to end', regular('enden'), 'hat geendet'),
    verb('entschuldigen', 'to excuse / apologize', regular('entschuldigen'), 'hat entschuldigt'),
    verb('erklären', 'to explain', regular('erklären'), 'hat erklärt'),
    verb('erlauben', 'to allow', regular('erlauben'), 'hat erlaubt'),
    verb('erzählen', 'to tell / narrate', regular('erzählen'), 'hat erzählt'),
    verb('essen', 'to eat', P('esse', 'isst', 'isst', 'essen', 'esst', 'essen'), 'hat gegessen', 'irregular'),

    verb('fahren', 'to drive / travel', FAHREN, 'ist gefahren', 'irregular'),
    verb('feiern', 'to celebrate', regular('feiern'), 'hat gefeiert'),
    verb('fehlen', 'to be missing / lack', regular('fehlen'), 'hat gefehlt'),
    verb('fernsehen', 'to watch television', separable('fern', SEHEN), 'hat ferngesehen', 'separable-irregular'),
    verb('finden', 'to find', P('finde', 'findest', 'findet', 'finden', 'findet', 'finden'), 'hat gefunden', 'irregular'),
    verb('fliegen', 'to fly', P('fliege', 'fliegst', 'fliegt', 'fliegen', 'fliegt', 'fliegen'), 'ist geflogen', 'irregular'),
    verb('abfliegen', 'to take off / depart by air', separable('ab', P('fliege', 'fliegst', 'fliegt', 'fliegen', 'fliegt', 'fliegen')), 'ist abgeflogen', 'separable-irregular'),
    verb('fragen', 'to ask', regular('fragen'), 'hat gefragt'),
    verb('sich freuen', 'to be pleased / look forward to', reflexive(regular('freuen')), 'hat sich gefreut', 'reflexive'),
    verb('frühstücken', 'to eat breakfast', regular('frühstücken'), 'hat gefrühstückt'),

    verb('geben', 'to give', GEBEN, 'hat gegeben', 'irregular'),
    verb('gefallen', 'to please / be pleasing', P('gefalle', 'gefällst', 'gefällt', 'gefallen', 'gefallt', 'gefallen'), 'hat gefallen', 'irregular'),
    verb('gehen', 'to go / walk', P('gehe', 'gehst', 'geht', 'gehen', 'geht', 'gehen'), 'ist gegangen', 'irregular'),
    verb('gehören', 'to belong', regular('gehören'), 'hat gehört'),
    verb('gewinnen', 'to win', P('gewinne', 'gewinnst', 'gewinnt', 'gewinnen', 'gewinnt', 'gewinnen'), 'hat gewonnen', 'irregular'),
    verb('glauben', 'to believe / think', regular('glauben'), 'hat geglaubt'),
    verb('gratulieren', 'to congratulate', regular('gratulieren'), 'hat gratuliert'),
    verb('grillen', 'to grill / barbecue', regular('grillen'), 'hat gegrillt'),

    verb('haben', 'to have', P('habe', 'hast', 'hat', 'haben', 'habt', 'haben'), 'hat gehabt', 'irregular'),
    verb('halten', 'to stop / hold', P('halte', 'hältst', 'hält', 'halten', 'haltet', 'halten'), 'hat gehalten', 'irregular'),
    verb('heiraten', 'to marry', regular('heiraten'), 'hat geheiratet'),
    verb('heißen', 'to be called', P('heiße', 'heißt', 'heißt', 'heißen', 'heißt', 'heißen'), 'hat geheißen', 'irregular'),
    verb('helfen', 'to help', P('helfe', 'hilfst', 'hilft', 'helfen', 'helft', 'helfen'), 'hat geholfen', 'irregular'),
    verb('holen', 'to fetch / get', regular('holen'), 'hat geholt'),
    verb('hören', 'to hear / listen', regular('hören'), 'hat gehört'),

    verb('kaufen', 'to buy', regular('kaufen'), 'hat gekauft'),
    verb('kennen', 'to know / be familiar with', P('kenne', 'kennst', 'kennt', 'kennen', 'kennt', 'kennen'), 'hat gekannt', 'irregular'),
    verb('kennenlernen', 'to get to know / meet', separable('kennen', regular('lernen')), 'hat kennengelernt', 'separable'),
    verb('kochen', 'to cook', regular('kochen'), 'hat gekocht'),
    verb('kommen', 'to come', P('komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen'), 'ist gekommen', 'irregular'),
    verb('können', 'can / to be able to', P('kann', 'kannst', 'kann', 'können', 'könnt', 'können'), 'hat gekonnt', 'modal'),
    verb('kosten', 'to cost', regular('kosten'), 'hat gekostet'),
    verb('kriegen', 'to get / receive', regular('kriegen'), 'hat gekriegt'),
    verb('sich kümmern', 'to take care of', reflexive(regular('kümmern')), 'hat sich gekümmert', 'reflexive'),

    verb('lachen', 'to laugh', regular('lachen'), 'hat gelacht'),
    verb('laufen', 'to run / walk', P('laufe', 'läufst', 'läuft', 'laufen', 'lauft', 'laufen'), 'ist gelaufen', 'irregular'),
    verb('leben', 'to live', regular('leben'), 'hat gelebt'),
    verb('legen', 'to lay / put horizontally', regular('legen'), 'hat gelegt'),
    verb('lernen', 'to learn', regular('lernen'), 'hat gelernt'),
    verb('lesen', 'to read', P('lese', 'liest', 'liest', 'lesen', 'lest', 'lesen'), 'hat gelesen', 'irregular'),
    verb('lieben', 'to love', regular('lieben'), 'hat geliebt'),
    verb('liegen', 'to lie / be located', P('liege', 'liegst', 'liegt', 'liegen', 'liegt', 'liegen'), 'hat gelegen', 'irregular'),

    verb('machen', 'to do / make', regular('machen'), 'hat gemacht'),
    verb('mieten', 'to rent', regular('mieten'), 'hat gemietet'),
    verb('mitbringen', 'to bring along', separable('mit', P('bringe', 'bringst', 'bringt', 'bringen', 'bringt', 'bringen')), 'hat mitgebracht', 'separable-irregular'),
    verb('mitkommen', 'to come along', separable('mit', P('komme', 'kommst', 'kommt', 'kommen', 'kommt', 'kommen')), 'ist mitgekommen', 'separable-irregular'),
    verb('mitmachen', 'to participate / join in', separable('mit', regular('machen')), 'hat mitgemacht', 'separable'),
    verb('mitnehmen', 'to take along', separable('mit', NEHMEN), 'hat mitgenommen', 'separable-irregular'),
    verb('möchten', 'would like', P('möchte', 'möchtest', 'möchte', 'möchten', 'möchtet', 'möchten'), '— (usually expressed with wollte in the past)', 'modal-special', {skipPerfekt: true}),
    verb('mögen', 'to like', P('mag', 'magst', 'mag', 'mögen', 'mögt', 'mögen'), 'hat gemocht', 'modal'),
    verb('müssen', 'must / to have to', P('muss', 'musst', 'muss', 'müssen', 'müsst', 'müssen'), 'hat gemusst', 'modal'),

    verb('nehmen', 'to take', NEHMEN, 'hat genommen', 'irregular'),
    verb('öffnen', 'to open', regular('öffnen', {extraE: true}), 'hat geöffnet'),

    verb('rauchen', 'to smoke', regular('rauchen'), 'hat geraucht'),
    verb('regnen', 'to rain', regular('regnen', {extraE: true}), 'hat geregnet'),
    verb('reisen', 'to travel', regular('reisen'), 'ist gereist'),
    verb('reparieren', 'to repair', regular('reparieren'), 'hat repariert'),
    verb('riechen', 'to smell', P('rieche', 'riechst', 'riecht', 'riechen', 'riecht', 'riechen'), 'hat gerochen', 'irregular'),

    verb('sagen', 'to say / tell', regular('sagen'), 'hat gesagt'),
    verb('scheinen', 'to shine / seem', P('scheine', 'scheinst', 'scheint', 'scheinen', 'scheint', 'scheinen'), 'hat geschienen', 'irregular'),
    verb('schicken', 'to send', regular('schicken'), 'hat geschickt'),
    verb('schlafen', 'to sleep', P('schlafe', 'schläfst', 'schläft', 'schlafen', 'schlaft', 'schlafen'), 'hat geschlafen', 'irregular'),
    verb('schließen', 'to close', P('schließe', 'schließt', 'schließt', 'schließen', 'schließt', 'schließen'), 'hat geschlossen', 'irregular'),
    verb('schmecken', 'to taste', regular('schmecken'), 'hat geschmeckt'),
    verb('schreiben', 'to write', P('schreibe', 'schreibst', 'schreibt', 'schreiben', 'schreibt', 'schreiben'), 'hat geschrieben', 'irregular'),
    verb('schwimmen', 'to swim', P('schwimme', 'schwimmst', 'schwimmt', 'schwimmen', 'schwimmt', 'schwimmen'), 'ist geschwommen', 'irregular'),
    verb('sehen', 'to see', SEHEN, 'hat gesehen', 'irregular'),
    verb('sein', 'to be', P('bin', 'bist', 'ist', 'sind', 'seid', 'sind'), 'ist gewesen', 'irregular'),
    verb('sitzen', 'to sit', regular('sitzen'), 'hat gesessen', 'irregular-perfect'),
    verb('sollen', 'should / to be supposed to', P('soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen'), 'hat gesollt', 'modal'),
    verb('spielen', 'to play', regular('spielen'), 'hat gespielt'),
    verb('sprechen', 'to speak', P('spreche', 'sprichst', 'spricht', 'sprechen', 'sprecht', 'sprechen'), 'hat gesprochen', 'irregular'),
    verb('stehen', 'to stand', STEHEN, 'hat gestanden', 'irregular'),
    verb('stellen', 'to place / put upright', regular('stellen'), 'hat gestellt'),
    verb('sterben', 'to die', P('sterbe', 'stirbst', 'stirbt', 'sterben', 'sterbt', 'sterben'), 'ist gestorben', 'irregular', {sourceNote: 'The Goethe list presents the required form gestorben.'}),
    verb('studieren', 'to study at university', regular('studieren'), 'hat studiert'),
    verb('suchen', 'to search / look for', regular('suchen'), 'hat gesucht'),

    verb('tanzen', 'to dance', regular('tanzen'), 'hat getanzt'),
    verb('telefonieren', 'to make a phone call', regular('telefonieren'), 'hat telefoniert'),
    verb('sich treffen', 'to meet', reflexive(P('treffe', 'triffst', 'trifft', 'treffen', 'trefft', 'treffen')), 'hat sich getroffen', 'reflexive-irregular'),
    verb('trinken', 'to drink', P('trinke', 'trinkst', 'trinkt', 'trinken', 'trinkt', 'trinken'), 'hat getrunken', 'irregular'),
    verb('tun', 'to do', TUN, 'hat getan', 'irregular'),

    verb('übernachten', 'to stay overnight', regular('übernachten'), 'hat übernachtet'),
    verb('überweisen', 'to transfer money', regular('überweisen'), 'hat überwiesen', 'inseparable-irregular-perfect'),
    verb('umziehen', 'to move house', separable('um', ZIEHEN), 'ist umgezogen', 'separable-irregular'),
    verb('unterschreiben', 'to sign', regular('unterschreiben'), 'hat unterschrieben', 'inseparable-irregular-perfect'),

    verb('verdienen', 'to earn', regular('verdienen'), 'hat verdient'),
    verb('verkaufen', 'to sell', regular('verkaufen'), 'hat verkauft'),
    verb('vermieten', 'to rent out', regular('vermieten'), 'hat vermietet'),
    verb('verstehen', 'to understand', regular('verstehen'), 'hat verstanden', 'inseparable-irregular-perfect'),
    verb('sich vorstellen', 'to introduce oneself', reflexive(regular('stellen'), 'vor'), 'hat sich vorgestellt', 'reflexive-separable'),

    verb('wandern', 'to hike', regular('wandern'), 'ist gewandert'),
    verb('warten', 'to wait', regular('warten'), 'hat gewartet'),
    verb('sich waschen', 'to wash oneself', reflexive(P('wasche', 'wäschst', 'wäscht', 'waschen', 'wascht', 'waschen')), 'hat sich gewaschen', 'reflexive-irregular'),
    verb('wehtun', 'to hurt', separable('weh', TUN), 'hat wehgetan', 'separable-irregular', {sourceNote: 'The Goethe list prints the older spelling weh tun.'}),
    verb('werden', 'to become', P('werde', 'wirst', 'wird', 'werden', 'werdet', 'werden'), 'ist geworden', 'irregular'),
    verb('wiederholen', 'to repeat', regular('wiederholen'), 'hat wiederholt', 'inseparable'),
    verb('wissen', 'to know a fact', P('weiß', 'weißt', 'weiß', 'wissen', 'wisst', 'wissen'), 'hat gewusst', 'irregular'),
    verb('wohnen', 'to live / reside', regular('wohnen'), 'hat gewohnt'),
    verb('wollen', 'to want', P('will', 'willst', 'will', 'wollen', 'wollt', 'wollen'), 'hat gewollt', 'modal'),

    verb('zahlen', 'to pay', regular('zahlen'), 'hat gezahlt')
  ];

  const flashcards = verbs.map(item => ({
    front: `${item.verb} — meaning and Perfekt?`,
    back: `${item.meaning}; Perfekt: ${item.perfekt}`,
    level: 'A1',
    pack: 'goethe-a1-verbs'
  }));

  function practiceAnswer(item, group) {
    if (!group.keys) return item.present[group.key];
    const wirForm = item.present[group.keys[0]];
    const sieForm = item.present[group.keys[1]];
    if (wirForm === sieForm) return wirForm;
    if (wirForm.replace(/\buns\b/g, 'sich') === sieForm) {
      return wirForm.replace(/\buns\b/g, 'uns/sich');
    }
    return `${wirForm} / ${sieForm}`;
  }

  const sentenceExercises = verbs.map((item, index) => {
    const group = PRACTICE_GROUPS[index % PRACTICE_GROUPS.length];
    return {
      type: `A1 verb: ${item.verb}`,
      question: `Conjugate in Präsens: ${group.label} → ? (${item.verb})`,
      answer: practiceAnswer(item, group),
      explanation: `${item.verb} means “${item.meaning}”. Perfekt: ${item.perfekt}`,
      level: 'A1',
      pack: 'goethe-a1-verbs'
    };
  });

  const pack = {
    meta: {
      id: 'goethe-a1-verbs',
      title: 'Goethe A1 Verb Pack',
      level: 'A1',
      version: 1,
      sourceTitle: 'Goethe-Zertifikat A1: Start Deutsch 1 Wortliste',
      sourceUrl: 'https://www.goethe.de/pro/relaunch/prf/de/A1_SD1_Wortliste_02.pdf',
      note: 'CEFR does not prescribe one universal verb list. This pack uses the Goethe adult A1 inventory and converts teachable verb entries to infinitives.'
    },
    verbs,
    flashcards,
    sentences: sentenceExercises
  };

  window.GERMAN_A1_VERB_PACK = pack;

  const data = window.GERMAN_PRACTICE_DATA || window.GERMAN_A1_DATA;
  if (!data) return;

  data.verbs = Array.isArray(data.verbs) ? data.verbs : [];
  data.flashcards = Array.isArray(data.flashcards) ? data.flashcards : [];
  data.sentences = Array.isArray(data.sentences) ? data.sentences : [];

  const normalizeName = value => String(value || '').toLowerCase().replace(/^\(sich\)\s+/, 'sich ').trim();
  const existingVerbs = new Set(data.verbs.map(item => normalizeName(item.verb)));
  pack.verbs.forEach(item => {
    const key = normalizeName(item.verb);
    if (!existingVerbs.has(key)) {
      data.verbs.push(item);
      existingVerbs.add(key);
    }
  });

  const existingCards = new Set(data.flashcards.map(item => `${item.front}|${item.back}`));
  pack.flashcards.forEach(item => {
    const key = `${item.front}|${item.back}`;
    if (!existingCards.has(key)) {
      data.flashcards.push(item);
      existingCards.add(key);
    }
  });

  const existingQuestions = new Set(data.sentences.map(item => `${item.question}|${item.answer}`));
  pack.sentences.forEach(item => {
    const key = `${item.question}|${item.answer}`;
    if (!existingQuestions.has(key)) {
      data.sentences.push(item);
      existingQuestions.add(key);
    }
  });

  data.meta = data.meta || {};
  data.meta.packs = Array.isArray(data.meta.packs) ? data.meta.packs : [];
  if (!data.meta.packs.includes(pack.meta.id)) data.meta.packs.push(pack.meta.id);
})();
