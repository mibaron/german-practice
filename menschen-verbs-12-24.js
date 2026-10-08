(function () {
  'use strict';

  const PACK_ID = 'menschen-a1-verbs-12-24';
  const data = window.GERMAN_PRACTICE_DATA || window.GERMAN_A1_DATA;
  if (!data) return;

  // Original supplementary selections aligned to the bundled lesson themes.
  // A verb can belong to several lessons without duplicating its quiz or progress.
  const lessonVerbs = {
    12: ['sein', 'kommen', 'gehen', 'fahren', 'fliegen', 'feiern', 'beginnen', 'dauern', 'stattfinden'],
    13: ['gehen', 'fahren', 'abbiegen', 'wenden', 'zurückfahren', 'suchen', 'helfen', 'nehmen', 'liegen', 'stehen'],
    14: ['wohnen', 'mieten', 'vermieten', 'haben', 'gehören', 'liegen', 'stehen', 'suchen', 'kosten'],
    15: ['gefallen', 'gehören', 'helfen', 'danken', 'geben', 'sehen', 'wohnen', 'finden'],
    16: ['helfen', 'reparieren', 'funktionieren', 'anrufen', 'vorbeikommen', 'passen', 'sich verspäten', 'ausfallen', 'übernachten', 'brauchen'],
    17: ['wollen', 'werden', 'lernen', 'studieren', 'arbeiten', 'verdienen', 'mitmachen', 'gewinnen', 'bestehen', 'abschließen'],
    18: ['sollen', 'wehtun', 'untersuchen', 'sich ausruhen', 'bleiben', 'nehmen', 'empfehlen', 'rauchen', 'trinken', 'helfen', 'sich waschen'],
    19: ['sein', 'haben', 'aussehen', 'erkennen', 'vergessen', 'sich entschuldigen', 'besuchen', 'verstehen', 'erklären', 'beginnen', 'kennenlernen'],
    20: ['aufräumen', 'putzen', 'spülen', 'machen', 'bringen', 'helfen', 'geben', 'nehmen', 'grillen', 'aufhören'],
    21: ['dürfen', 'müssen', 'fahren', 'parken', 'anhalten', 'überqueren', 'umsteigen', 'einsteigen', 'aussteigen', 'warten'],
    22: ['anprobieren', 'anziehen', 'ausziehen', 'tragen', 'passen', 'gefallen', 'vergleichen', 'kaufen', 'kosten'],
    23: ['regnen', 'schneien', 'scheinen', 'frieren', 'schwitzen', 'wandern', 'werden', 'möchten'],
    24: ['feiern', 'heiraten', 'schenken', 'gratulieren', 'wünschen', 'einladen', 'mitbringen', 'sich freuen', 'stattfinden', 'anstoßen', 'beginnen']
  };

  const people = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
  const forms = (...values) => Object.fromEntries(people.map((person, index) => [person, values[index]]));
  function regular(infinitive) {
    const stem = infinitive.slice(0, -2);
    const extraE = /[dt]$/.test(stem);
    return forms(stem + 'e', stem + (/[sßxz]$/.test(stem) ? 't' : extraE ? 'est' : 'st'),
      stem + (extraE ? 'et' : 't'), infinitive, stem + (extraE ? 'et' : 't'), infinitive);
  }
  const separable = (prefix, base) => Object.fromEntries(people.map(person => [person, base[person] + ' ' + prefix]));
  const reflexive = (base, prefix = '') => {
    const pronouns = ['mich', 'dich', 'sich', 'uns', 'euch', 'sich'];
    return Object.fromEntries(people.map((person, index) => [person,
      base[person] + ' ' + pronouns[index] + (prefix ? ' ' + prefix : '')]));
  };
  const verb = (name, meaning, present, perfekt) => ({verb: name, meaning, present, perfekt, level: 'A1', pack: PACK_ID});
  const fahren = forms('fahre', 'fährst', 'fährt', 'fahren', 'fahrt', 'fahren');
  const fallen = forms('falle', 'fällst', 'fällt', 'fallen', 'fallt', 'fallen');
  const ziehen = forms('ziehe', 'ziehst', 'zieht', 'ziehen', 'zieht', 'ziehen');
  const supplemental = [
    verb('stattfinden', 'to take place', separable('statt', forms('finde', 'findest', 'findet', 'finden', 'findet', 'finden')), 'hat stattgefunden'),
    verb('abbiegen', 'to turn', separable('ab', regular('biegen')), 'ist abgebogen'),
    verb('wenden', 'to turn around', regular('wenden'), 'hat gewendet'),
    verb('zurückfahren', 'to drive back', separable('zurück', fahren), 'ist zurückgefahren'),
    verb('mieten', 'to rent', regular('mieten'), 'hat gemietet'),
    verb('funktionieren', 'to work / function', regular('funktionieren'), 'hat funktioniert'),
    verb('vorbeikommen', 'to come by / drop by', separable('vorbei', regular('kommen')), 'ist vorbeigekommen'),
    verb('passen', 'to fit / suit', regular('passen'), 'hat gepasst'),
    verb('sich verspäten', 'to be late', reflexive(regular('verspäten')), 'hat sich verspätet'),
    verb('ausfallen', 'to be cancelled', separable('aus', fallen), 'ist ausgefallen'),
    verb('lernen', 'to learn / study', regular('lernen'), 'hat gelernt'),
    verb('bestehen', 'to pass (an exam)', forms('bestehe', 'bestehst', 'besteht', 'bestehen', 'besteht', 'bestehen'), 'hat bestanden'),
    verb('abschließen', 'to complete / graduate from', separable('ab', regular('schließen')), 'hat abgeschlossen'),
    verb('untersuchen', 'to examine', regular('untersuchen'), 'hat untersucht'),
    verb('sich ausruhen', 'to rest', reflexive(regular('ruhen'), 'aus'), 'hat sich ausgeruht'),
    verb('erkennen', 'to recognize', regular('erkennen'), 'hat erkannt'),
    verb('vergessen', 'to forget', forms('vergesse', 'vergisst', 'vergisst', 'vergessen', 'vergesst', 'vergessen'), 'hat vergessen'),
    verb('sich entschuldigen', 'to apologize', reflexive(regular('entschuldigen')), 'hat sich entschuldigt'),
    verb('aufräumen', 'to tidy up', separable('auf', regular('räumen')), 'hat aufgeräumt'),
    verb('putzen', 'to clean', regular('putzen'), 'hat geputzt'),
    verb('spülen', 'to wash up / rinse', regular('spülen'), 'hat gespült'),
    verb('parken', 'to park', regular('parken'), 'hat geparkt'),
    verb('anhalten', 'to stop (a vehicle)', separable('an', forms('halte', 'hältst', 'hält', 'halten', 'haltet', 'halten')), 'hat angehalten'),
    verb('überqueren', 'to cross', regular('überqueren'), 'hat überquert'),
    verb('umsteigen', 'to change trains / buses', separable('um', regular('steigen')), 'ist umgestiegen'),
    verb('anprobieren', 'to try on', separable('an', regular('probieren')), 'hat anprobiert'),
    verb('anziehen', 'to put on (clothes)', separable('an', ziehen), 'hat angezogen'),
    verb('ausziehen', 'to take off (clothes)', separable('aus', ziehen), 'hat ausgezogen'),
    verb('tragen', 'to wear / carry', forms('trage', 'trägst', 'trägt', 'tragen', 'tragt', 'tragen'), 'hat getragen'),
    verb('vergleichen', 'to compare', regular('vergleichen'), 'hat verglichen'),
    verb('schneien', 'to snow (normally: es schneit)', regular('schneien'), 'hat geschneit'),
    verb('frieren', 'to feel cold', regular('frieren'), 'hat gefroren'),
    verb('schwitzen', 'to sweat', regular('schwitzen'), 'hat geschwitzt'),
    verb('schenken', 'to give as a present', regular('schenken'), 'hat geschenkt'),
    verb('wünschen', 'to wish', regular('wünschen'), 'hat gewünscht'),
    verb('anstoßen', 'to toast / clink glasses', separable('an', forms('stoße', 'stößt', 'stößt', 'stoßen', 'stoßt', 'stoßen')), 'hat angestoßen')
  ];

  data.verbs = Array.isArray(data.verbs) ? data.verbs : [];
  const byName = new Map(data.verbs.map(item => [item.verb, item]));
  supplemental.forEach(item => {
    if (!byName.has(item.verb)) {
      data.verbs.push(item);
      byName.set(item.verb, item);
    }
  });
  Object.entries(lessonVerbs).forEach(([lesson, names]) => {
    names.forEach(name => {
      const item = byName.get(name);
      if (!item) throw new Error('Missing lesson verb: ' + name);
      item.lessons = [...new Set([...(Array.isArray(item.lessons) ? item.lessons : []), Number(lesson)])];
    });
  });

  window.GERMAN_MENSCHEN_VERBS_12_24 = {
    meta: {id: PACK_ID, title: 'Verb practice for Menschen A1 lessons 12–24', version: 1},
    lessonVerbs
  };
  data.meta = data.meta || {};
  data.meta.packs = Array.isArray(data.meta.packs) ? data.meta.packs : [];
  if (!data.meta.packs.includes(PACK_ID)) data.meta.packs.push(PACK_ID);
})();
