(function () {
  'use strict';

  const PACK_ID = 'menschen-a1-lesson-18';

  const lesson18 = {
    flashcards: [
      {front: 'der Körper — die Körper', back: 'body. Example: Der Körper braucht Schlaf.'},
      {front: 'der Kopf — die Köpfe', back: 'head. Example: Mein Kopf tut weh.'},
      {front: 'das Gesicht — die Gesichter', back: 'face. Example: Sie wäscht sich das Gesicht.'},
      {front: 'das Auge — die Augen', back: 'eye. Example: Meine Augen sind müde.'},
      {front: 'das Ohr — die Ohren', back: 'ear. Example: Mein Ohr tut weh.'},
      {front: 'die Nase — die Nasen', back: 'nose. Example: Die Nase läuft.'},
      {front: 'der Mund — die Münder', back: 'mouth. Example: Machen Sie bitte den Mund auf.'},
      {front: 'der Zahn — die Zähne', back: 'tooth. Example: Ich putze meine Zähne.'},
      {front: 'der Hals — die Hälse', back: 'throat / neck. Example: Mein Hals tut weh.'},
      {front: 'die Schulter — die Schultern', back: 'shoulder. Example: Die Schulter tut beim Sport weh.'},
      {front: 'der Arm — die Arme', back: 'arm. Example: Der Arm ist gebrochen.'},
      {front: 'die Hand — die Hände', back: 'hand. Example: Waschen Sie sich die Hände.'},
      {front: 'der Finger — die Finger', back: 'finger. Example: Der Finger ist dick und rot.'},
      {front: 'der Rücken — die Rücken', back: 'back (of the body). Example: Mein Rücken tut weh.'},
      {front: 'das Bein — die Beine', back: 'leg. Example: Ihr Bein ist gebrochen.'},
      {front: 'das Knie — die Knie', back: 'knee. Example: Das Knie tut beim Laufen weh.'},
      {front: 'der Fuß — die Füße', back: 'foot. Example: Meine Füße tun weh.'},
      {front: 'die Arztpraxis — die Arztpraxen', back: 'doctor\'s practice. Example: Die Arztpraxis ist am Montag geschlossen.'},
      {front: 'der Patient / die Patientin', back: 'patient. Example: Der Patient wartet im Wartezimmer.'},
      {front: 'das Wartezimmer — die Wartezimmer', back: 'waiting room. Example: Bitte nehmen Sie im Wartezimmer Platz.'},
      {front: 'die Sprechstunde — die Sprechstunden', back: 'consultation hours / surgery hours. Example: Die Sprechstunde ist am Montag von neun bis zwölf.'},
      {front: 'die Versichertenkarte — die Versichertenkarten', back: 'health insurance card. Example: Haben Sie Ihre Versichertenkarte dabei?'},
      {front: 'untersuchen', back: 'to examine. Example: Der Arzt untersucht die Patientin.'},
      {front: 'das Medikament — die Medikamente', back: 'medicine / medication. Example: Nehmen Sie das Medikament dreimal am Tag.'},
      {front: 'die Tablette — die Tabletten', back: 'tablet / pill. Example: Nimm eine Tablette gegen die Schmerzen.'},
      {front: 'die Salbe — die Salben', back: 'ointment / cream. Example: Die Salbe hilft gegen die Schmerzen.'},
      {front: 'der Hustensaft — die Hustensäfte', back: 'cough syrup. Example: Der Hustensaft schmeckt nicht gut.'},
      {front: 'das Rezept — die Rezepte', back: 'prescription (also: recipe). Example: Der Arzt schreibt ein Rezept.'},
      {front: 'der Husten', back: 'cough. Example: Er hat starken Husten.'},
      {front: 'der Schnupfen', back: 'runny nose / head cold. Example: Ich habe Schnupfen.'},
      {front: 'die Erkältung — die Erkältungen', back: 'cold (illness). Example: Sie hat eine Erkältung.'},
      {front: 'erkältet sein', back: 'to have a cold. Example: Ich bin erkältet.'},
      {front: 'das Fieber', back: 'fever / temperature. Example: Das Kind hat Fieber.'},
      {front: 'Fieber messen', back: 'to take someone\'s temperature. Example: Die Ärztin misst Fieber.'},
      {front: 'die Grippe', back: 'flu. Example: Im Winter haben viele Leute Grippe.'},
      {front: 'die Schmerzen (Plural)', back: 'pain. Example: Ich habe Schmerzen im Rücken.'},
      {front: 'die Kopfschmerzen (Plural)', back: 'headache. Example: Ich habe Kopfschmerzen.'},
      {front: 'die Bauchschmerzen (Plural)', back: 'stomach ache. Example: Nach dem Essen hatte er Bauchschmerzen.'},
      {front: 'die Halsschmerzen (Plural)', back: 'sore throat. Example: Bei Halsschmerzen hilft Tee mit Honig.'},
      {front: 'die Zahnschmerzen (Plural)', back: 'toothache. Example: Mit Zahnschmerzen geht man zum Zahnarzt.'},
      {front: 'wehtun', back: 'to hurt. Example: Mein Kopf tut weh.'},
      {front: 'krank', back: 'ill / sick. Example: Ich bin krank und bleibe im Bett.'},
      {front: 'gesund', back: 'healthy. Example: Obst und Gemüse sind gesund.'},
      {front: 'die Gesundheit', back: 'health. Example: Gesundheit ist das Wichtigste.'},
      {front: 'der Stress', back: 'stress. Example: Sie hat viel Stress im Büro.'},
      {front: 'sich ausruhen', back: 'to rest. Example: Ruhen Sie sich aus.'},
      {front: 'im Bett bleiben', back: 'to stay in bed. Example: Bleib heute im Bett.'},
      {front: 'die Bewegung', back: 'exercise / movement. Example: Bewegung ist gesund.'},
      {front: 'rauchen', back: 'to smoke. Example: Sie sollen nicht rauchen.'},
      {front: 'der Ratschlag — die Ratschläge', back: 'piece of advice. Example: Die Ärztin gibt einen guten Ratschlag.'},
      {front: 'der Tipp — die Tipps', back: 'tip / hint. Example: Hast du einen Tipp gegen Husten?'},
      {front: 'empfehlen', back: 'to recommend. Example: Ich empfehle Ihnen diesen Tee.'},
      {front: 'gegen', back: 'against / for (an illness), takes accusative. Example: Haben Sie etwas gegen Husten?'},
      {front: 'vorsichtig', back: 'careful. Example: Seien Sie vorsichtig!'},
      {front: 'sollen', back: 'should / to be supposed to. Example: Du sollst mehr Wasser trinken.'},
      {front: 'Was fehlt Ihnen?', back: 'What is wrong with you? (formal, at the doctor). Example: Guten Tag, was fehlt Ihnen?'},
      {front: 'Gute Besserung!', back: 'Get well soon (said to a sick person). Example: Gute Besserung, Frau Weber!'}
    ],
    grammar: [
      {type: 'Conjugate sollen', question: 'Ich ___ viel Tee trinken.', answer: 'soll', explanation: 'The ich form of sollen is soll, without ending.'},
      {type: 'Conjugate sollen', question: 'Du ___ im Bett bleiben.', answer: 'sollst', explanation: 'The du form of sollen is sollst.'},
      {type: 'Conjugate sollen', question: 'Er ___ nicht rauchen.', answer: 'soll', explanation: 'The third-person singular form is soll, the same as ich.'},
      {type: 'Conjugate sollen', question: 'Wir ___ mehr Sport machen.', answer: 'sollen', explanation: 'The wir form is sollen.'},
      {type: 'Conjugate sollen', question: 'Ihr ___ die Tabletten nehmen.', answer: 'sollt', explanation: 'The ihr form is sollt.'},
      {type: 'Conjugate sollen', question: 'Die Kinder ___ früh schlafen gehen.', answer: 'sollen', explanation: 'The plural form is sollen.'},
      {type: 'Conjugate sollen', question: '___ ich zum Arzt gehen?', answer: 'Soll', explanation: 'In a yes/no question the modal verb comes first.'},
      {type: 'Imperative: Sie', question: 'Sie nehmen die Tabletten → ___!', answer: 'Nehmen Sie die Tabletten', explanation: 'The formal imperative is infinitive + Sie.'},
      {type: 'Imperative: Sie', question: 'Sie gehen zum Arzt → ___!', answer: 'Gehen Sie zum Arzt', explanation: 'Put the verb first, then Sie.'},
      {type: 'Imperative: Sie', question: 'Sie trinken viel Tee → ___!', answer: 'Trinken Sie viel Tee', explanation: 'Verb first, then Sie, then the rest.'},
      {type: 'Imperative: Sie', question: 'Sie bleiben im Bett → ___!', answer: 'Bleiben Sie im Bett', explanation: 'The formal imperative keeps the pronoun Sie.'},
      {type: 'Imperative: Sie', question: 'Sie ruhen sich aus → ___!', answer: 'Ruhen Sie sich aus', explanation: 'The reflexive pronoun sich follows Sie; the prefix aus stands at the end.'},
      {type: 'Imperative: Sie', question: 'Sie rauchen nicht → ___!', answer: 'Rauchen Sie nicht', explanation: 'Nicht stands after Sie.'},
      {type: 'Imperative: Sie', question: 'Sie machen den Mund auf → ___!', answer: 'Machen Sie den Mund auf', explanation: 'The separable prefix auf stays at the end.'},
      {type: 'Imperative: Sie', question: 'Sie sind vorsichtig → ___!', answer: 'Seien Sie vorsichtig', explanation: 'The formal imperative of sein is seien Sie.'},
      {type: 'Dative pronoun', question: 'Geben Sie ___ den Tee. (er)', answer: 'ihm', explanation: 'Geben takes a dative person; er becomes ihm.'},
      {type: 'Dative pronoun', question: 'Ich empfehle ___ diese Salbe. (sie, singular)', answer: 'ihr', explanation: 'Empfehlen takes a dative person; singular sie becomes ihr.'},
      {type: 'Dative pronoun', question: 'Bringen Sie ___ bitte ein Glas Wasser. (ich)', answer: 'mir', explanation: 'Bringen takes a dative recipient: mir.'},
      {type: 'Dative pronoun', question: 'Der Arzt gibt ___ ein Rezept. (wir)', answer: 'uns', explanation: 'The dative form of wir is uns.'},
      {type: 'Dative pronoun', question: 'Was fehlt ___? (Sie)', answer: 'Ihnen', explanation: 'Fehlen takes dative; formal Sie becomes Ihnen.'},
      {type: 'Dative pronoun', question: 'Ich gebe ___ einen Tipp. (ihr)', answer: 'euch', explanation: 'The dative form of ihr is euch.'},
      {type: 'Dative pronoun', question: 'Die Tabletten helfen ___ nicht. (sie, plural)', answer: 'ihnen', explanation: 'Helfen takes dative; plural sie becomes ihnen.'},
      {type: 'wehtun + dative', question: 'Der Kopf tut ___ weh. (ich)', answer: 'mir', explanation: 'The person who feels the pain is in the dative.'},
      {type: 'wehtun + dative', question: 'Tut ___ der Hals weh? (du)', answer: 'dir', explanation: 'Du becomes dir with wehtun.'},
      {type: 'wehtun + dative', question: 'Die Füße tun ___ weh. (er)', answer: 'ihm', explanation: 'Er becomes ihm with wehtun.'},
      {type: 'Subject–verb agreement', question: 'Mein Rücken ___ weh. (wehtun)', answer: 'tut', explanation: 'Rücken is singular, so tut.'},
      {type: 'Subject–verb agreement', question: 'Meine Beine ___ weh. (wehtun)', answer: 'tun', explanation: 'Beine is plural, so tun.'},
      {type: 'Contraction: im', question: 'Ich habe Schmerzen ___ Rücken. (in + dem)', answer: 'im', explanation: 'In dem contracts to im for location.'},
      {type: 'Separable verb with modal', question: 'Du sollst dich ___. (ausruhen)', answer: 'ausruhen', explanation: 'After a modal verb, the separable infinitive stays together at the end.'},
      {type: 'Separable verb with modal', question: 'Ihr sollt die Tabletten ___. (einnehmen)', answer: 'einnehmen', explanation: 'Einnehmen stays together after sollt.'},
      {type: 'Plural with umlaut', question: 'ein Fuß, zwei ___', answer: 'Füße', explanation: 'Fuß takes an umlaut and -e in the plural.'},
      {type: 'Plural with umlaut', question: 'ein Zahn, zwei ___', answer: 'Zähne', explanation: 'Zahn takes an umlaut and -e in the plural.'},
      {type: 'Plural with umlaut', question: 'eine Hand, zwei ___', answer: 'Hände', explanation: 'Hand takes an umlaut and -e in the plural.'},
      {type: 'Plural', question: 'ein Auge, zwei ___', answer: 'Augen', explanation: 'Auge adds -n in the plural.'},
      {type: 'gegen + accusative', question: 'Haben Sie etwas gegen ___ Husten? (der)', answer: 'den', explanation: 'Gegen takes accusative; masculine der becomes den.'},
      {type: 'Question word', question: '___ tut weh? – Der Kopf.', answer: 'Was', explanation: 'Was asks for the thing that hurts.'}
    ],
    sentences: [
      {type: 'Translate', question: 'My head hurts.', answer: 'Mein Kopf tut weh.', explanation: 'Wehtun separates: tut ... weh.'},
      {type: 'Translate', question: 'My feet hurt.', answer: 'Meine Füße tun weh.', explanation: 'Füße is plural, so tun.'},
      {type: 'Translate', question: 'I have a sore throat.', answer: 'Ich habe Halsschmerzen.', explanation: 'Schmerzen compounds are used without an article.'},
      {type: 'Translate', question: 'She has a fever and a cough.', answer: 'Sie hat Fieber und Husten.', explanation: 'Fieber and Husten take no article here.'},
      {type: 'Translate', question: 'I have a cold. (erkältet)', answer: 'Ich bin erkältet.', explanation: 'Erkältet sein means to have a cold.'},
      {type: 'Translate', question: 'He has a headache and is tired.', answer: 'Er hat Kopfschmerzen und ist müde.', explanation: 'Kopfschmerzen is plural and has no article.'},
      {type: 'Translate', question: 'What is wrong with you? (formal, fehlen)', answer: 'Was fehlt Ihnen?', explanation: 'This is the typical question at the doctor.'},
      {type: 'Translate', question: 'Get well soon!', answer: 'Gute Besserung!', explanation: 'A fixed phrase for someone who is ill.'},
      {type: 'Translate', question: 'Do you have something for a cough? (formal, gegen)', answer: 'Haben Sie etwas gegen Husten?', explanation: 'Gegen + accusative names the illness.'},
      {type: 'Translate', question: 'I have had a cough since Monday. (Präsens with seit)', answer: 'Ich habe seit Montag Husten.', explanation: 'German uses the present tense with seit.'},
      {type: 'Translate', question: 'The pharmacy is closed today.', answer: 'Die Apotheke ist heute geschlossen.', explanation: 'Geschlossen means closed.'},
      {type: 'Advice with sollen', question: 'You should stay in bed. (informal singular)', answer: 'Du sollst im Bett bleiben.', explanation: 'The du form of sollen is sollst.'},
      {type: 'Advice with sollen', question: 'You should drink a lot of tea. (formal)', answer: 'Sie sollen viel Tee trinken.', explanation: 'The Sie form of sollen is sollen.'},
      {type: 'Advice with sollen', question: 'We should do more sport.', answer: 'Wir sollen mehr Sport machen.', explanation: 'Sport machen means to do sport.'},
      {type: 'Advice with sollen', question: 'He should not smoke.', answer: 'Er soll nicht rauchen.', explanation: 'Nicht stands before the infinitive.'},
      {type: 'Advice with sollen', question: 'You should take the tablets. (informal plural)', answer: 'Ihr sollt die Tabletten nehmen.', explanation: 'The ihr form of sollen is sollt.'},
      {type: 'Advice with sollen', question: 'Ich habe Rückenschmerzen. Advise informally: You should go to the doctor. (zum Arzt)', answer: 'Du sollst zum Arzt gehen.', explanation: 'Zum is the contraction of zu dem.'},
      {type: 'Advice with sollen', question: 'Wir sind sehr müde. Advise informally plural: You should sleep more.', answer: 'Ihr sollt mehr schlafen.', explanation: 'Mehr means more.'},
      {type: 'Advice with sollen', question: 'Tom hat Fieber. Say: He should stay in bed.', answer: 'Er soll im Bett bleiben.', explanation: 'Im Bett answers Wo? with dative.'},
      {type: 'Imperative: Sie', question: 'Tell a patient formally to go to the pharmacy.', answer: 'Gehen Sie zur Apotheke.', explanation: 'Zur is the contraction of zu der.'},
      {type: 'Imperative: Sie', question: 'Tell a patient formally to rest.', answer: 'Ruhen Sie sich aus.', explanation: 'Sich ausruhen is reflexive and separable.'},
      {type: 'Imperative: Sie', question: 'Tell a patient formally to open the mouth.', answer: 'Machen Sie den Mund auf.', explanation: 'Aufmachen separates: machen ... auf.'},
      {type: 'Imperative: Sie', question: 'Tell a patient formally not to drink coffee.', answer: 'Trinken Sie keinen Kaffee.', explanation: 'Kein negates the noun; Kaffee is masculine accusative.'},
      {type: 'Imperative: Sie', question: 'Tell a patient formally to be careful.', answer: 'Seien Sie vorsichtig.', explanation: 'The formal imperative of sein is seien Sie.'},
      {type: 'Imperative: Sie', question: 'Tell a patient formally to take the medicine three times a day.', answer: 'Nehmen Sie das Medikament dreimal am Tag.', explanation: 'Dreimal am Tag means three times a day.'},
      {type: 'Dative pronoun', question: 'Give him the tea. (formal imperative)', answer: 'Geben Sie ihm den Tee.', explanation: 'Ihm is dative; den Tee is accusative.'},
      {type: 'Dative pronoun', question: 'Give her the ointment. (formal imperative)', answer: 'Geben Sie ihr die Salbe.', explanation: 'Ihr is the feminine dative pronoun.'},
      {type: 'Dative pronoun', question: 'Bring me a glass of water, please. (formal imperative)', answer: 'Bringen Sie mir bitte ein Glas Wasser.', explanation: 'Mir is the dative recipient.'},
      {type: 'Dative pronoun', question: 'I recommend this tea to you. (formal)', answer: 'Ich empfehle Ihnen diesen Tee.', explanation: 'Ihnen is dative; diesen Tee is accusative.'},
      {type: 'Dative pronoun', question: 'The doctor gives me a prescription. (male doctor)', answer: 'Der Arzt gibt mir ein Rezept.', explanation: 'Mir is dative; ein Rezept is accusative.'},
      {type: 'Replace with a pronoun', question: 'Der Arzt gibt der Patientin ein Rezept. Replace der Patientin.', answer: 'Der Arzt gibt ihr ein Rezept.', explanation: 'The feminine dative pronoun is ihr.'},
      {type: 'Replace with a pronoun', question: 'Ich empfehle meinem Bruder diesen Tee. Replace meinem Bruder.', answer: 'Ich empfehle ihm diesen Tee.', explanation: 'The masculine dative pronoun is ihm.'},
      {type: 'Replace with a pronoun', question: 'Die Salbe hilft den Kindern. Replace den Kindern.', answer: 'Die Salbe hilft ihnen.', explanation: 'The plural dative pronoun is ihnen.'},
      {type: 'Put in correct order', question: 'ihr / doch / die Tabletten / geben Sie', answer: 'Geben Sie ihr doch die Tabletten.', explanation: 'Doch makes the advice friendlier; the dative pronoun comes before the accusative noun.'},
      {type: 'Put in correct order', question: 'du / heute / im Bett / bleiben / sollen', answer: 'Du sollst heute im Bett bleiben.', explanation: 'The modal verb is in position 2; the infinitive stands at the end.'},
      {type: 'Put in correct order', question: 'der Hals / mir / seit gestern / wehtun', answer: 'Der Hals tut mir seit gestern weh.', explanation: 'Wehtun separates; the dative pronoun follows the verb.'},
      {type: 'Put in correct order', question: 'sich ausruhen / Sie / bitte', answer: 'Ruhen Sie sich bitte aus.', explanation: 'Formal imperative: verb, Sie, reflexive pronoun, then the prefix at the end.'},
      {type: 'Complete the sentence', question: 'Ich habe Schmerzen ___. (in the back)', answer: 'im Rücken', explanation: 'Im is the contraction of in dem.'},
      {type: 'Complete the sentence', question: 'Nehmen Sie die Tabletten ___. (three times a day)', answer: 'dreimal am Tag', explanation: 'Am Tag means per day.'},
      {type: 'Complete the sentence', question: 'Trinken Sie ___. (a lot of water)', answer: 'viel Wasser', explanation: 'Viel is used with uncountable nouns.'},
      {type: 'Write a question', question: 'Ask informally: Does your head hurt? (dir)', answer: 'Tut dir der Kopf weh?', explanation: 'Wehtun with the dative pronoun dir.'},
      {type: 'Write a question', question: 'Ask: What should I do? (machen)', answer: 'Was soll ich machen?', explanation: 'Sollen also asks for advice.'},
      {type: 'Write a question', question: 'Ask formally: Do you have pain?', answer: 'Haben Sie Schmerzen?', explanation: 'Schmerzen is plural and has no article.'}
    ]
  };

  function tagged(items, lesson) {
    return items.map(item => ({...item, lesson, pack: PACK_ID}));
  }

  const pack = {
    meta: {
      id: PACK_ID,
      title: 'Original practice for Menschen A1 lesson 18',
      level: 'A1',
      version: 1,
      note: 'Original supplementary practice aligned to the lesson themes; no textbook exercises are reproduced.'
    },
    flashcards: tagged(lesson18.flashcards, 18),
    grammar: tagged(lesson18.grammar, 18),
    sentences: tagged(lesson18.sentences, 18)
  };

  window.GERMAN_MENSCHEN_LESSON_18 = pack;

  const data = window.GERMAN_PRACTICE_DATA || window.GERMAN_A1_DATA;
  if (!data) return;

  ['flashcards', 'grammar', 'sentences'].forEach(kind => {
    data[kind] = Array.isArray(data[kind]) ? data[kind] : [];
    const existing = new Set(data[kind].map(item => `${item.question || item.front}|${item.answer || item.back}`));
    pack[kind].forEach(item => {
      const key = `${item.question || item.front}|${item.answer || item.back}`;
      if (!existing.has(key)) {
        data[kind].push(item);
        existing.add(key);
      }
    });
  });

  data.meta = data.meta || {};
  data.meta.version = Math.max(5, Number(data.meta.version) || 0);
  data.meta.packs = Array.isArray(data.meta.packs) ? data.meta.packs : [];
  if (!data.meta.packs.includes(PACK_ID)) data.meta.packs.push(PACK_ID);
  data.meta.lessonTitles = {
    ...(data.meta.lessonTitles || {}),
    18: 'Health, body & advice'
  };
})();
