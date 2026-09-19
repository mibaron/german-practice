(function () {
  'use strict';

  // Gap-fill sentences, messages and e-mails for Menschen A1 lessons 16–20.
  // Each gap is written as [answer|hint]. The app renders one input per gap
  // and shows the hint only on hover or click.

  const PACK_ID = 'menschen-a1-gap-texts-16-20';

  const lessons = {
    16: [
      {type: 'Gap fill', question: 'A guest reports a problem. Fill the gaps.',
        text: 'Der Aufzug [funktioniert|funktionieren] nicht und wir [stecken|feststecken] im dritten Stock [fest|separable prefix].',
        explanation: 'Feststecken separates in the present tense: stecken … fest.'},
      {type: 'Gap fill', question: 'Ask for help at the reception. Fill the gaps.',
        text: 'Können Sie [mir|ich → dative] bitte helfen? Die Heizung ist [kaputt|adjective: broken] und das Zimmer ist sehr [kalt|adjective: cold].',
        explanation: 'Helfen takes a dative person: mir.'},
      {type: 'Gap fill', question: 'The reception answers. Fill the gaps.',
        text: 'Der Techniker kommt [in|preposition: future point in time] einer halben Stunde und die Reparatur [dauert|dauern] ungefähr zwei Stunden.',
        explanation: 'In + dative points to a time measured from now; dauern says how long something takes.'},
      {type: 'Gap fill', question: 'Arrange a phone call. Fill the gaps.',
        text: 'Ich rufe Sie [nach|preposition: after] dem Kurs an, [vor|preposition: before] dem Termin habe ich leider keine Zeit.',
        explanation: 'Nach and vor both take dative: nach dem Kurs, vor dem Termin.'},
      {type: 'Gap fill', question: 'Cancel and move an appointment. Fill the gaps.',
        text: 'Leider [muss|müssen, ich-Form] ich den Termin [absagen|infinitive at the end]. Können wir ihn [auf|preposition: to (a day)] Montag [verschieben|to postpone]?',
        explanation: 'After a modal verb the infinitive stands at the end; verschieben auf + accusative.'},
      {type: 'Gap fill', question: 'Book a room. Fill the gaps.',
        text: 'Wir bleiben [für|preposition: duration] eine Woche im Hotel und brauchen ein Doppelzimmer mit [Frühstück|breakfast].',
        explanation: 'Für + accusative expresses how long you stay.'},
      {type: 'Gap fill', question: 'Say where you are and when you come. Fill the gaps.',
        text: 'Ich bin gerade [beim|bei + dem] Arzt und komme [in|preposition: future point in time] zehn Minuten [vorbei|vorbeikommen].',
        explanation: 'Bei dem contracts to beim; vorbeikommen separates.'},
      {type: 'E-mail', question: 'Complete the complaint e-mail to the hotel.',
        text: 'An: info@hotel-seeblick.de\nBetreff: Problem mit Zimmer 214\n\nSehr [geehrte|formal greeting] Damen und Herren,\n\nich wohne seit [zwei|number: 2] Nächten in Ihrem Hotel und habe leider ein Problem. Die Heizung in meinem Zimmer [funktioniert|funktionieren] nicht und das Zimmer ist sehr [kalt|adjective: cold]. Außerdem [fehlt|fehlen] im Bad ein Handtuch.\n\n[Können|polite request with a modal verb] Sie bitte einen Techniker [schicken|to send]? Ich bin [nach|preposition: after] dem Frühstück wieder im Zimmer.\n\nVielen Dank und [freundliche|closing: … Grüße] Grüße\nAnna Weber',
        explanation: 'Sehr geehrte Damen und Herren and Mit freundlichen Grüßen frame a formal e-mail; Können Sie bitte …? is the polite request.'},
      {type: 'E-mail', question: 'Complete the hotel\'s reply.',
        text: 'Sehr geehrte Frau Weber,\n\nvielen Dank für Ihre [Nachricht|message]. Es [tut|leidtun: es … uns leid] uns sehr leid. Unser Hausmeister [kommt|kommen] heute um 14 Uhr [vorbei|vorbeikommen] und [repariert|reparieren] die Heizung. Ein neues Handtuch [bringen|bringen, wir-Form] wir Ihnen sofort. Wenn Sie noch Fragen haben, [rufen|anrufen, Sie-imperative] Sie bitte die Rezeption [an|separable prefix].\n\nMit freundlichen [Grüßen|closing]\nHotel Seeblick',
        explanation: 'Separable verbs split in main clauses and in the formal imperative: kommt … vorbei, rufen Sie … an.'}
    ],
    17: [
      {type: 'Gap fill', question: 'Talk about a dream job. Fill the gaps.',
        text: 'Ich [will|wollen, ich-Form] unbedingt Sängerin [werden|to become] und [bewerbe|sich bewerben] mich [um|preposition] einen Platz an der Musikschule.',
        explanation: 'Wollen + infinitive at the end; sich bewerben um + accusative.'},
      {type: 'Gap fill', question: 'Plans after school. Fill the gaps.',
        text: 'Nach dem Abitur [wollen|wollen, plural] meine Freunde [im|in + dem] Ausland studieren, aber ich mache lieber eine [Ausbildung|vocational training].',
        explanation: 'Im Ausland means abroad; Ausbildung is vocational training.'},
      {type: 'Gap fill', question: 'A musician and his guitar. Fill the gaps.',
        text: 'Er geht nie [ohne|without] seine Gitarre aus dem Haus und übt jeden Tag [mit|with] seiner Band.',
        explanation: 'Ohne takes accusative (seine Gitarre); mit takes dative (seiner Band).'},
      {type: 'Gap fill', question: 'Encourage a friend. Fill the gaps.',
        text: 'Du [wirst|werden, du-Form] bestimmt berühmt! Die Jury [findet|finden] deine Stimme toll.',
        explanation: 'The du form of werden is wirst.'},
      {type: 'Gap fill', question: 'A casting-show invitation. Fill the gaps.',
        text: '[Willst|wollen, du-Form] du bei der Castingshow [mitmachen|to participate]? Dann [schick|schicken, du-imperative] uns eine Beispielaufnahme.',
        explanation: 'The du form of wollen is willst; the du imperative of schicken is schick.'},
      {type: 'Gap fill', question: 'Good news about studying. Fill the gaps.',
        text: 'Sie hat die Aufnahmeprüfung [geschafft|schaffen, participle] und [bekommt|bekommen] im Herbst einen Studienplatz.',
        explanation: 'Schaffen forms the participle geschafft.'},
      {type: 'E-mail', question: 'Complete the application e-mail.',
        text: 'Sehr geehrte Damen und Herren,\n\nich habe Ihre [Anzeige|advertisement] im Internet gelesen und möchte mich [um|preposition] die Stelle als Praktikant [bewerben|sich bewerben]. Ich bin 19 Jahre alt und [habe|haben] im Juni mein Abitur [gemacht|machen, participle]. Ich [will|wollen, ich-Form] später Musik [studieren|to study] und habe schon Erfahrung auf der Bühne: Ich [spiele|spielen] seit fünf Jahren Gitarre und [singe|singen] in einer Band. Meinen [Lebenslauf|CV] schicke ich [mit|mitschicken, separable prefix].\n\nÜber eine Einladung zum Vorstellungsgespräch [freue|sich freuen] ich mich sehr.\n\nMit freundlichen Grüßen\nJonas Berg',
        explanation: 'Sich bewerben um + accusative; the Perfekt bracket puts the participle at the end: habe … gemacht.'},
      {type: 'Message', question: 'Complete the message to a friend.',
        text: 'Hallo Lena,\n\nstell dir vor, ich [habe|haben] einen Studienplatz [bekommen|bekommen, participle]! Ab Oktober [werde|werden, ich-Form] ich Studentin in Leipzig. [Willst|wollen, du-Form] du am Samstag [mit|with] mir feiern? [Ohne|without] dich macht das keinen Spaß.\n\nLiebe Grüße\nMia',
        explanation: 'Bekommen keeps the same form as its participle; mit mir (dative), ohne dich (accusative).'}
    ],
    18: [
      {type: 'Gap fill', question: 'Describe your symptoms. Fill the gaps.',
        text: 'Mein Kopf [tut|wehtun] seit gestern [weh|separable part of wehtun] und ich habe auch [Halsschmerzen|sore throat].',
        explanation: 'Wehtun separates: tut … weh.'},
      {type: 'Gap fill', question: 'At the doctor. Fill the gaps.',
        text: 'Was [fehlt|fehlen] Ihnen? – Ich [bin|sein, ich-Form] erkältet und habe Fieber.',
        explanation: 'Was fehlt Ihnen? is the standard question at the doctor.'},
      {type: 'Gap fill', question: 'Give advice to a friend. Fill the gaps.',
        text: 'Du [sollst|sollen, du-Form] viel Tee trinken, im Bett [bleiben|to stay] und nicht [rauchen|to smoke].',
        explanation: 'One sollst carries all three infinitives at the end.'},
      {type: 'Gap fill', question: 'The doctor gives instructions. Fill the gaps.',
        text: '[Nehmen|nehmen, Sie-imperative] Sie die Tabletten dreimal am Tag und [ruhen|sich ausruhen, Sie-imperative] Sie sich [aus|separable prefix].',
        explanation: 'The formal imperative is infinitive + Sie; the prefix aus stands at the end.'},
      {type: 'Gap fill', question: 'Who gets what? Fill the gaps.',
        text: 'Der Arzt gibt [ihr|sie → dative] ein Rezept und empfiehlt [ihm|er → dative] eine Salbe [gegen|preposition: against] die Schmerzen.',
        explanation: 'Geben and empfehlen take a dative person; gegen takes accusative.'},
      {type: 'Gap fill', question: 'Advice with the du imperative. Fill the gaps.',
        text: 'Meine Füße [tun|wehtun, plural subject] weh. – Dann [geh|gehen, du-imperative] zum Arzt und [sei|sein, du-imperative] vorsichtig.',
        explanation: 'Füße is plural, so tun; the du imperative of sein is sei.'},
      {type: 'E-mail', question: 'Complete the sick note to your teacher.',
        text: 'Liebe Frau Schmidt,\n\nleider [kann|können, ich-Form] ich heute nicht zum Kurs kommen. Ich [bin|sein, ich-Form] seit zwei Tagen [krank|ill]: Ich habe [Fieber|fever], Husten und Kopfschmerzen. Der Arzt [sagt|sagen], ich [soll|sollen, ich-Form] diese Woche im Bett [bleiben|to stay]. Können Sie [mir|ich → dative] bitte die Hausaufgaben [schicken|to send]? Nächste Woche bin ich hoffentlich wieder [gesund|healthy].\n\nViele Grüße\nAli',
        explanation: 'German uses the present tense with seit; sollen reports the doctor\'s advice.'},
      {type: 'Message', question: 'Complete the advice message.',
        text: 'Hallo Tom,\n\ndu hast Rückenschmerzen? Dann [sollst|sollen, du-Form] du nicht so lange am Computer [sitzen|to sit]. [Mach|machen, du-imperative] jeden Tag ein bisschen Sport und [geh|gehen, du-imperative] viel spazieren. Ich [empfehle|empfehlen] dir auch die Salbe von meiner Ärztin, sie [hilft|helfen] wirklich. Gute [Besserung|get well soon]!\n\nSara',
        explanation: 'Sollen gives advice; the du imperative has no pronoun and no ending: mach, geh.'}
    ],
    19: [
      {type: 'Gap fill', question: 'Describe grandpa in the past. Fill the gaps.',
        text: 'Früher [hatte|haben, Präteritum] mein Opa einen Schnurrbart und [war|sein, Präteritum] sehr schlank.',
        explanation: 'Hatte for possession, war for a state.'},
      {type: 'Gap fill', question: 'Ask about last night. Fill the gaps.',
        text: '[Warst|sein, Präteritum, du-Form] du gestern auf der Party? – Ja, aber ich [hatte|haben, Präteritum, ich-Form] leider wenig Zeit.',
        explanation: 'The du form of war is warst; the ich form of hatte is hatte.'},
      {type: 'Gap fill', question: 'Someone has changed. Fill the gaps.',
        text: 'Ich [habe|haben] ihn zuerst nicht [erkannt|erkennen, participle], er hat sich sehr [verändert|verändern, participle].',
        explanation: 'Er- and ver- are inseparable, so the participles have no ge-.'},
      {type: 'Gap fill', question: 'Adjectives with un-. Fill the gaps.',
        text: 'Die Kellnerin [war|sein, Präteritum] sehr [unfreundlich|opposite of freundlich] und das Essen war [ungesund|opposite of gesund].',
        explanation: 'The prefix un- turns an adjective into its opposite.'},
      {type: 'Gap fill', question: 'Hair then and now. Fill the gaps.',
        text: 'Als Kind [hatte|haben, Präteritum] sie [lockige|adjective: curly, with ending] Haare, heute sind ihre Haare glatt und [grau|grey].',
        explanation: 'Before plural Haare without an article the adjective takes -e.'},
      {type: 'Gap fill', question: 'How did you meet? Fill the gaps.',
        text: 'Wo [habt|haben, ihr-Form] ihr euch [kennengelernt|kennenlernen, participle]? – Auf einer Hochzeit, vor zehn Jahren.',
        explanation: 'Kennenlernen is separable: kennen-ge-lernt.'},
      {type: 'E-mail', question: 'Complete the e-mail about an old photo.',
        text: 'Liebe Oma,\n\nich [habe|haben] heute ein altes Foto [gefunden|finden, participle]. Du [warst|sein, Präteritum, du-Form] damals ungefähr zwanzig und [hattest|haben, Präteritum, du-Form] lange blonde Haare. Neben dir steht Opa mit [Bart|beard] und Hut. Ihr [wart|sein, Präteritum, ihr-Form] beide so jung und [glücklich|happy]! Ich habe das Foto fotografiert und [schicke|schicken] es dir per E-Mail.\n\nViele Grüße\nNina',
        explanation: 'Simple past of sein and haben: warst, hattest, wart.'},
      {type: 'Message', question: 'Complete the apology after a mix-up.',
        text: 'Hallo Herr Braun,\n\nes [tut|leidtun: es tut mir leid] mir leid, ich [habe|haben] Sie gestern im Supermarkt nicht [erkannt|erkennen, participle]. Ich habe Sie mit einem Kollegen [verwechselt|verwechseln, participle]. Früher [hatten|haben, Präteritum, Sie-Form] Sie doch keine Brille, oder? Ich [hoffe|hoffen], Sie [waren|sein, Präteritum, Sie-Form] nicht böse.\n\nViele Grüße\nLukas',
        explanation: 'Erkannt and verwechselt have no ge-; the Sie forms are hatten and waren.'}
    ],
    20: [
      {type: 'Gap fill', question: 'Tell your brother what to do. Fill the gaps.',
        text: '[Räum|aufräumen, du-imperative] bitte dein Zimmer [auf|separable prefix] und [bring|rausbringen, du-imperative] den Müll [raus|separable prefix].',
        explanation: 'The du imperative uses the stem; separable prefixes go to the end.'},
      {type: 'Gap fill', question: 'Tell the children what to do. Fill the gaps.',
        text: 'Kinder, [macht|machen, ihr-imperative] eure Betten und [seid|sein, ihr-imperative] bitte leise, Oma schläft.',
        explanation: 'The ihr imperative is the ihr form without the pronoun; sein becomes seid.'},
      {type: 'Gap fill', question: 'Arrange a pick-up. Fill the gaps.',
        text: 'Kannst du [mich|ich → accusative] um acht Uhr [abholen|to pick up]? Ich rufe [dich|du → accusative] vorher an.',
        explanation: 'Abholen and anrufen take accusative pronouns: mich, dich.'},
      {type: 'Gap fill', question: 'The barbecue. Fill the gaps.',
        text: 'Der Grill ist kalt. [Mach|anmachen, du-imperative] [ihn|er → accusative] bitte [an|separable prefix], die Gäste kommen gleich.',
        explanation: 'Grill is masculine, so the accusative pronoun is ihn.'},
      {type: 'Gap fill', question: 'Whose turn is it? Fill the gaps.',
        text: 'Heute bist du [dran|whose turn it is]: [Wasch|abwaschen, du-imperative] das Geschirr [ab|separable prefix] und [gieß|gießen, du-imperative] die Blumen.',
        explanation: 'Dran sein means to be someone\'s turn.'},
      {type: 'Gap fill', question: 'Invite the neighbours. Fill the gaps.',
        text: 'Wir [laden|einladen, wir-Form] die Nachbarn [ein|separable prefix] und [holen|abholen, wir-Form] sie um sieben [ab|separable prefix].',
        explanation: 'Einladen and abholen separate in the present tense.'},
      {type: 'Message', question: 'Complete the note for your flatmates.',
        text: 'Hallo ihr zwei,\n\nich bin bis Sonntag bei meinen Eltern. Bitte [füttert|füttern, ihr-imperative] die Katze jeden Morgen und [gießt|gießen, ihr-imperative] die Pflanzen. Der Putzplan [hängt|hängen] am Kühlschrank: Paul, du [bist|sein, du-Form] diese Woche [dran|whose turn it is], also [putz|putzen, du-imperative] bitte das Bad. Und [vergesst|vergessen, ihr-imperative] den Müll nicht, er [stinkt|stinken] schon!\n\nDanke und bis Sonntag\nJana',
        explanation: 'Ihr imperatives: füttert, gießt, vergesst; du imperative: putz.'},
      {type: 'Message', question: 'Complete the voicemail.',
        text: 'Hallo Ben, hier ist Miriam. [Komm|kommen, du-imperative] heute Abend doch [rüber|rüberkommen, separable prefix], wir grillen im Garten. [Bring|mitbringen, du-imperative] bitte Brot und Salat [mit|separable prefix]. Kannst du [uns|wir → accusative] vorher kurz [anrufen|to call]? Und [beeil|sich beeilen, du-imperative] dich, der Grill wartet!',
        explanation: 'Separable verbs in the imperative: komm … rüber, bring … mit; anrufen takes accusative uns.'}
    ]
  };

  function filledText(text) {
    return text.replace(/\[([^\[\]|]+)\|[^\[\]]*\]/g, (m, answer) => answer.trim());
  }

  const sentences = [];
  Object.keys(lessons).forEach(lesson => {
    lessons[lesson].forEach(item => {
      sentences.push({...item, answer: filledText(item.text), lesson: Number(lesson), pack: PACK_ID});
    });
  });

  const pack = {
    meta: {
      id: PACK_ID,
      title: 'Gap-fill sentences and e-mails for Menschen A1 lessons 16–20',
      level: 'A1',
      version: 1,
      note: 'Original texts with [answer|hint] gaps; no textbook exercises are reproduced.'
    },
    flashcards: [],
    grammar: [],
    sentences
  };

  window.GERMAN_MENSCHEN_GAP_TEXTS_16_20 = pack;

  const data = window.GERMAN_PRACTICE_DATA || window.GERMAN_A1_DATA;
  if (!data) return;

  data.sentences = Array.isArray(data.sentences) ? data.sentences : [];
  const existing = new Set(data.sentences.map(item => `${item.question || item.front}|${item.answer || item.back}`));
  pack.sentences.forEach(item => {
    const key = `${item.question}|${item.answer}`;
    if (!existing.has(key)) {
      data.sentences.push(item);
      existing.add(key);
    }
  });

  data.meta = data.meta || {};
  data.meta.version = Math.max(6, Number(data.meta.version) || 0);
  data.meta.packs = Array.isArray(data.meta.packs) ? data.meta.packs : [];
  if (!data.meta.packs.includes(PACK_ID)) data.meta.packs.push(PACK_ID);
})();
