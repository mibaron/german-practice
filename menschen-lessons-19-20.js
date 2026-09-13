(function () {
  'use strict';

  const PACK_ID = 'menschen-a1-lessons-19-20';

  const lesson19 = {
    flashcards: [
      {front: 'der Bauch — die Bäuche', back: 'belly / stomach. Example: Der Mann hat einen kleinen Bauch.'},
      {front: 'der Bart — die Bärte', back: 'beard. Example: Früher hatte er keinen Bart.'},
      {front: 'die Brille — die Brillen', back: 'glasses. Example: Die Frau mit der Brille heißt Eva.'},
      {front: 'das Haar — die Haare', back: 'hair. Usually plural: Sie hat kurze Haare.'},
      {front: 'die Person — die Personen', back: 'person. Example: Kennst du die Person dort?'},
      {front: 'der Bekannte / die Bekannte', back: 'acquaintance. Example: Auf der Party habe ich eine Bekannte getroffen.'},
      {front: 'der Smalltalk', back: 'small talk. Example: Das Wetter ist ein typisches Smalltalk-Thema.'},
      {front: 'aussehen', back: 'to look / appear. Example: Du siehst heute glücklich aus.'},
      {front: 'früher', back: 'formerly / in the past. Example: Früher hatte ich lange Haare.'},
      {front: 'heute', back: 'today / nowadays. Example: Heute trägt er eine Brille.'},
      {front: 'dick', back: 'thick / overweight. Example: Der Pullover ist sehr dick.'},
      {front: 'dünn', back: 'thin. Example: Das Buch ist dünn.'},
      {front: 'schlank', back: 'slim. Example: Die Läuferin ist groß und schlank.'},
      {front: 'groß', back: 'tall / big. Example: Mein Bruder ist sehr groß.'},
      {front: 'klein', back: 'short / small. Example: Als Kind war sie sehr klein.'},
      {front: 'jung', back: 'young. Example: Auf dem Foto war mein Vater noch jung.'},
      {front: 'alt', back: 'old. Example: Wie alt warst du damals?'},
      {front: 'blond', back: 'blond. Example: Das Kind hat blonde Haare.'},
      {front: 'dunkelhaarig', back: 'dark-haired. Example: Seine Schwester ist dunkelhaarig.'},
      {front: 'hübsch', back: 'pretty / attractive. Example: Sie sieht auf dem Foto hübsch aus.'},
      {front: 'sympathisch', back: 'likable / pleasant. Example: Der neue Nachbar wirkt sympathisch.'},
      {front: 'unsympathisch', back: 'unlikable. The prefix un- negates sympathisch.'},
      {front: 'freundlich', back: 'friendly. Example: Die Gastgeber waren sehr freundlich.'},
      {front: 'unfreundlich', back: 'unfriendly. The prefix un- negates freundlich.'},
      {front: 'glücklich', back: 'happy. Example: Auf dem alten Foto sieht sie glücklich aus.'},
      {front: 'unglücklich', back: 'unhappy. The prefix un- negates glücklich.'},
      {front: 'fröhlich', back: 'cheerful. Example: Die Gäste lachen und sind fröhlich.'},
      {front: 'traurig', back: 'sad. Example: Warum bist du traurig?'},
      {front: 'interessant', back: 'interesting. Example: Seine Geschichte war interessant.'},
      {front: 'uninteressant', back: 'uninteresting. The prefix un- negates interessant.'},
      {front: 'langweilig', back: 'boring. Example: Der Smalltalk war ein bisschen langweilig.'},
      {front: 'seltsam', back: 'strange / odd. Example: Das klingt wirklich seltsam.'},
      {front: 'erkennen', back: 'to recognize. Example: Ich habe ihn zuerst nicht erkannt.'},
      {front: 'vergessen', back: 'to forget. Example: Sie hat seinen Namen vergessen.'},
      {front: 'sich entschuldigen', back: 'to apologize. Example: Er hat sich bei seiner Nachbarin entschuldigt.'},
      {front: 'sich beschweren', back: 'to complain. Example: Die Gäste haben sich über die laute Musik beschwert.'}
    ],
    grammar: [
      {type: 'Präteritum of sein', question: 'Ich ___ früher sehr schüchtern.', answer: 'war', explanation: 'The ich form of sein in the simple past is war.'},
      {type: 'Präteritum of sein', question: 'Du ___ auf dem Foto zehn Jahre alt.', answer: 'warst', explanation: 'The du form is warst.'},
      {type: 'Präteritum of sein', question: 'Er ___ damals noch schlank.', answer: 'war', explanation: 'The third-person singular form is war.'},
      {type: 'Präteritum of sein', question: 'Wir ___ gestern auf einer Party.', answer: 'waren', explanation: 'The wir form is waren.'},
      {type: 'Präteritum of sein', question: 'Ihr ___ als Kinder sehr fröhlich.', answer: 'wart', explanation: 'The ihr form is wart.'},
      {type: 'Präteritum of sein', question: 'Sie ___ früher gute Freunde.', answer: 'waren', explanation: 'The plural form is waren.'},
      {type: 'Präteritum of haben', question: 'Ich ___ früher lange Haare.', answer: 'hatte', explanation: 'The ich form of haben in the simple past is hatte.'},
      {type: 'Präteritum of haben', question: 'Du ___ damals eine Brille.', answer: 'hattest', explanation: 'The du form is hattest.'},
      {type: 'Präteritum of haben', question: 'Walter ___ keinen Bauch.', answer: 'hatte', explanation: 'The third-person singular form is hatte.'},
      {type: 'Präteritum of haben', question: 'Wir ___ am Wochenende viel Zeit.', answer: 'hatten', explanation: 'The wir form is hatten.'},
      {type: 'Präteritum of haben', question: 'Ihr ___ früher ein rotes Auto.', answer: 'hattet', explanation: 'The ihr form is hattet.'},
      {type: 'Präteritum of haben', question: 'Die Kinder ___ kurze Haare.', answer: 'hatten', explanation: 'The plural form is hatten.'},
      {type: 'Adjective with un-', question: 'Das Gegenteil von freundlich ist ___.', answer: 'unfreundlich', explanation: 'The prefix un- negates freundlich.'},
      {type: 'Adjective with un-', question: 'Das Gegenteil von glücklich ist ___.', answer: 'unglücklich', explanation: 'The prefix un- negates glücklich.'},
      {type: 'Adjective with un-', question: 'Das Gegenteil von interessant ist ___.', answer: 'uninteressant', explanation: 'The prefix un- negates interessant.'},
      {type: 'Adjective with un-', question: 'Das Gegenteil von sympathisch ist ___.', answer: 'unsympathisch', explanation: 'The prefix un- negates sympathisch.'},
      {type: 'Perfekt without ge-', question: 'Ich habe ihn sofort ___. (erkennen)', answer: 'erkannt', explanation: 'Verbs beginning with er- form the participle without ge-.'},
      {type: 'Perfekt without ge-', question: 'Sie hat den Termin ___. (vergessen)', answer: 'vergessen', explanation: 'Verbs beginning with ver- form the participle without ge-.'},
      {type: 'Perfekt without ge-', question: 'Wir haben ein Baby ___. (bekommen)', answer: 'bekommen', explanation: 'Verbs beginning with be- form the participle without ge-.'},
      {type: 'Perfekt without ge-', question: 'Er hat sich bei mir ___. (entschuldigen)', answer: 'entschuldigt', explanation: 'Verbs beginning with ent- form the participle without ge-.'},
      {type: 'Perfekt without ge-', question: 'Die Nachbarn haben sich ___. (beschweren)', answer: 'beschwert', explanation: 'Beschweren has the inseparable prefix be- and no ge- in the participle.'},
      {type: 'Perfekt without ge-', question: 'Ihr habt die Geschichte ___. (erzählen)', answer: 'erzählt', explanation: 'Erzählen begins with inseparable er-, so the participle has no ge-.'}
    ],
    sentences: [
      {type: 'Translate', question: 'I was very shy in the past.', answer: 'Ich war früher sehr schüchtern.', explanation: 'Use war for ich in the simple past.'},
      {type: 'Translate', question: 'Were you happy then? (informal singular)', answer: 'Warst du damals glücklich?', explanation: 'The du form of sein is warst.'},
      {type: 'Translate', question: 'He was young and slim.', answer: 'Er war jung und schlank.', explanation: 'The third-person singular form is war.'},
      {type: 'Translate', question: 'We were at a party yesterday.', answer: 'Wir waren gestern auf einer Party.', explanation: 'The wir form of sein is waren.'},
      {type: 'Translate', question: 'You were very friendly. (informal plural)', answer: 'Ihr wart sehr freundlich.', explanation: 'The ihr form of sein is wart.'},
      {type: 'Translate', question: 'They were good friends.', answer: 'Sie waren gute Freunde.', explanation: 'The plural form of sein is waren.'},
      {type: 'Translate', question: 'I had long hair.', answer: 'Ich hatte lange Haare.', explanation: 'The ich past form of haben is hatte.'},
      {type: 'Translate', question: 'Did you have a beard? (informal singular)', answer: 'Hattest du einen Bart?', explanation: 'The du past form of haben is hattest.'},
      {type: 'Translate', question: 'She did not have glasses.', answer: 'Sie hatte keine Brille.', explanation: 'The third-person singular past form is hatte.'},
      {type: 'Translate', question: 'We had a lot of fun.', answer: 'Wir hatten viel Spaß.', explanation: 'The wir past form of haben is hatten.'},
      {type: 'Complete the contrast', question: 'Heute ist Max groß. Früher ... (short)', answer: 'Früher war Max klein.', explanation: 'Use war and the contrasting adjective klein.'},
      {type: 'Complete the contrast', question: 'Heute hat Lea kurze Haare. Früher ... (long hair)', answer: 'Früher hatte Lea lange Haare.', explanation: 'Use hatte and the contrasting adjective lange.'},
      {type: 'Complete the contrast', question: 'Heute ist er schlank. Früher ... (overweight)', answer: 'Früher war er dick.', explanation: 'Use war and the contrasting adjective dick.'},
      {type: 'Complete the contrast', question: 'Heute hat sie eine Brille. Früher ... (no glasses)', answer: 'Früher hatte sie keine Brille.', explanation: 'Use hatte and negate Brille with keine.'},
      {type: 'Put in correct order', question: 'früher / ihr / sehr fröhlich / sein', answer: 'Früher wart ihr sehr fröhlich.', explanation: 'After the time phrase, the verb remains in position 2.'},
      {type: 'Put in correct order', question: 'damals / wir / wenig Geld / haben', answer: 'Damals hatten wir wenig Geld.', explanation: 'The wir simple-past form of haben is hatten.'},
      {type: 'Make negative with un-', question: 'Der Mann sieht sympathisch aus.', answer: 'Der Mann sieht unsympathisch aus.', explanation: 'Un- changes sympathisch to its opposite.'},
      {type: 'Make negative with un-', question: 'Die Geschichte war interessant.', answer: 'Die Geschichte war uninteressant.', explanation: 'Un- changes interessant to its opposite.'},
      {type: 'Make negative with un-', question: 'Der Kellner war freundlich.', answer: 'Der Kellner war unfreundlich.', explanation: 'Un- changes freundlich to its opposite.'},
      {type: 'Make negative with un-', question: 'Auf dem Foto war sie glücklich.', answer: 'Auf dem Foto war sie unglücklich.', explanation: 'Un- changes glücklich to its opposite.'},
      {type: 'Change to Perfekt', question: 'Ich erkenne meinen alten Freund.', answer: 'Ich habe meinen alten Freund erkannt.', explanation: 'Erkennen forms the participle erkannt without ge-.'},
      {type: 'Change to Perfekt', question: 'Sie vergisst seinen Namen.', answer: 'Sie hat seinen Namen vergessen.', explanation: 'Vergessen forms the participle vergessen without ge-.'},
      {type: 'Change to Perfekt', question: 'Wir bekommen eine Einladung.', answer: 'Wir haben eine Einladung bekommen.', explanation: 'Bekommen forms the participle bekommen without ge-.'},
      {type: 'Change to Perfekt', question: 'Er entschuldigt sich bei der Nachbarin.', answer: 'Er hat sich bei der Nachbarin entschuldigt.', explanation: 'Entschuldigen forms the participle without ge-.'},
      {type: 'Change to Perfekt', question: 'Die Gäste beschweren sich über die Musik.', answer: 'Die Gäste haben sich über die Musik beschwert.', explanation: 'Beschweren forms the participle beschwert.'},
      {type: 'Change to Perfekt', question: 'Mia erzählt eine lustige Geschichte.', answer: 'Mia hat eine lustige Geschichte erzählt.', explanation: 'Erzählen forms the participle erzählt.'},
      {type: 'Describe a person', question: 'Say: She has short blond hair and wears glasses.', answer: 'Sie hat kurze blonde Haare und trägt eine Brille.', explanation: 'Adjectives before plural Haare take -e here.'},
      {type: 'Describe a person', question: 'Say: He looks friendly and cheerful.', answer: 'Er sieht freundlich und fröhlich aus.', explanation: 'Aussehen is separable: sieht ... aus.'},
      {type: 'Smalltalk reaction', question: 'React with surprise: Really? He used to be so shy!', answer: 'Echt? Er war früher so schüchtern!', explanation: 'Echt? is a common informal reaction; war describes the past.'},
      {type: 'Write a question', question: 'Ask informally: What did she look like in the past?', answer: 'Wie hat sie früher ausgesehen?', explanation: 'Aussehen forms the Perfekt with haben and the participle ausgesehen.'}
    ]
  };

  const lesson20 = {
    flashcards: [
      {front: 'das Tagebuch — die Tagebücher', back: 'diary. Example: Sie schreibt jeden Abend Tagebuch.'},
      {front: 'der Haushalt — die Haushalte', back: 'household. Example: Im Haushalt gibt es immer viel zu tun.'},
      {front: 'die Hausarbeit — die Hausarbeiten', back: 'housework. Example: Wir teilen die Hausarbeit.'},
      {front: 'die Wohngemeinschaft — die Wohngemeinschaften', back: 'shared apartment / flatshare. Short form: die WG.'},
      {front: 'der Mitbewohner / die Mitbewohnerin', back: 'roommate / flatmate. Example: Mein Mitbewohner kocht gern.'},
      {front: 'die Aufgabe — die Aufgaben', back: 'task / chore. Example: Jeder übernimmt eine Aufgabe.'},
      {front: 'die Notiz — die Notizen', back: 'note. Example: Auf dem Tisch liegt eine Notiz.'},
      {front: 'der Müll', back: 'trash / rubbish. Example: Der Müll muss heute raus.'},
      {front: 'die Spülmaschine — die Spülmaschinen', back: 'dishwasher. Example: Die Spülmaschine ist voll.'},
      {front: 'das Geschirr', back: 'dishes / crockery. Example: Das Geschirr ist schon sauber.'},
      {front: 'die Wäsche', back: 'laundry. Example: Die Wäsche ist noch nass.'},
      {front: 'die Waschmaschine — die Waschmaschinen', back: 'washing machine. Example: Die Waschmaschine läuft.'},
      {front: 'der Staubsauger — die Staubsauger', back: 'vacuum cleaner. Example: Der Staubsauger steht im Flur.'},
      {front: 'der Boden — die Böden', back: 'floor / ground. Example: Der Boden in der Küche ist schmutzig.'},
      {front: 'das Gepäck', back: 'luggage. Example: Sie hat sehr viel Gepäck.'},
      {front: 'der Anrufbeantworter — die Anrufbeantworter', back: 'answering machine / voicemail. Example: Auf dem Anrufbeantworter ist eine Nachricht.'},
      {front: 'ordentlich', back: 'tidy / orderly. Example: Unsere Küche ist immer ordentlich.'},
      {front: 'unordentlich', back: 'untidy / messy. Example: Sein Zimmer ist sehr unordentlich.'},
      {front: 'sauber', back: 'clean. Example: Das Bad ist jetzt sauber.'},
      {front: 'schmutzig', back: 'dirty. Example: Die Fenster sind schmutzig.'},
      {front: 'faul', back: 'lazy. Example: Seid nicht so faul!'},
      {front: 'fleißig', back: 'hard-working. Example: Meine Mitbewohnerin ist sehr fleißig.'},
      {front: 'aufräumen', back: 'to tidy up. Example: Ich räume mein Zimmer auf.'},
      {front: 'putzen', back: 'to clean. Example: Wer putzt heute das Bad?'},
      {front: 'den Tisch decken', back: 'to set the table. Example: Deck bitte den Tisch.'},
      {front: 'den Müll rausbringen', back: 'to take out the trash. Example: Bringst du den Müll raus?'},
      {front: 'die Spülmaschine ausräumen', back: 'to empty the dishwasher. Example: Räumt bitte die Spülmaschine aus.'},
      {front: 'das Bett machen', back: 'to make the bed. Example: Mach morgens dein Bett.'},
      {front: 'die Wäsche waschen', back: 'to do the laundry. Example: Am Samstag wasche ich die Wäsche.'},
      {front: 'die Wäsche aufhängen', back: 'to hang up the laundry. Example: Die Wäsche hängt im Garten.'},
      {front: 'Staub saugen', back: 'to vacuum. Example: Ich sauge im Wohnzimmer Staub.'},
      {front: 'das Fenster zumachen', back: 'to close the window. Example: Mach bitte das Fenster zu.'},
      {front: 'rausbringen', back: 'to bring / take outside. Example: Bitte bring die Flaschen raus.'},
      {front: 'reinbringen', back: 'to bring inside. Example: Bring bitte die Stühle rein.'},
      {front: 'runterkommen', back: 'to come downstairs / come down. Example: Komm bitte sofort runter.'},
      {front: 'raufgehen', back: 'to go upstairs / go up. Example: Ich gehe kurz rauf.'}
    ],
    grammar: [
      {type: 'Imperative: du', question: 'du räumst auf → ___!', answer: 'Räum auf', explanation: 'Drop du and -st; the separable prefix stays at the end.'},
      {type: 'Imperative: du', question: 'du machst das Bett → ___!', answer: 'Mach das Bett', explanation: 'The du imperative usually uses the verb stem.'},
      {type: 'Imperative: du', question: 'du bringst den Müll raus → ___!', answer: 'Bring den Müll raus', explanation: 'Bring is the stem; raus remains at the end.'},
      {type: 'Imperative: du', question: 'du vergisst die Hausaufgaben nicht → ___!', answer: 'Vergiss die Hausaufgaben nicht', explanation: 'Vergessen keeps the i-vowel in the du imperative.'},
      {type: 'Imperative: du', question: 'du liest die Notiz → ___!', answer: 'Lies die Notiz', explanation: 'Lesen has the irregular imperative lies.'},
      {type: 'Imperative: du', question: 'du gibst mir den Schlüssel → ___!', answer: 'Gib mir den Schlüssel', explanation: 'Geben has the irregular imperative gib.'},
      {type: 'Imperative: du', question: 'du fährst nach Hause → ___!', answer: 'Fahr nach Hause', explanation: 'The a-to-ä change disappears in the imperative: fahr.'},
      {type: 'Imperative: du', question: 'du bist leise → ___!', answer: 'Sei leise', explanation: 'The du imperative of sein is sei.'},
      {type: 'Imperative: ihr', question: 'ihr räumt die Küche auf → ___!', answer: 'Räumt die Küche auf', explanation: 'The ihr imperative is the present ihr form without ihr.'},
      {type: 'Imperative: ihr', question: 'ihr wascht die Wäsche → ___!', answer: 'Wascht die Wäsche', explanation: 'Remove the pronoun ihr; the verb form stays wascht.'},
      {type: 'Imperative: ihr', question: 'ihr seid pünktlich → ___!', answer: 'Seid pünktlich', explanation: 'The ihr imperative of sein is seid.'},
      {type: 'Imperative: Sie', question: 'Sie machen das Fenster zu → ___!', answer: 'Machen Sie das Fenster zu', explanation: 'The formal imperative uses infinitive + Sie.'},
      {type: 'Imperative: Sie', question: 'Sie sind bitte leise → ___!', answer: 'Seien Sie bitte leise', explanation: 'The formal imperative of sein is seien Sie.'},
      {type: 'Accusative pronoun', question: 'Kannst du ___ abholen? (ich)', answer: 'mich', explanation: 'The accusative form of ich is mich.'},
      {type: 'Accusative pronoun', question: 'Ich rufe ___ später an. (du)', answer: 'dich', explanation: 'The accusative form of du is dich.'},
      {type: 'Accusative pronoun', question: 'Ruf ___ bitte zurück. (er)', answer: 'ihn', explanation: 'The masculine accusative pronoun is ihn.'},
      {type: 'Accusative pronoun', question: 'Ich putze ___. (das Bad / es)', answer: 'es', explanation: 'The neuter accusative pronoun remains es.'},
      {type: 'Accusative pronoun', question: 'Mach ___ bitte zu. (die Tür / sie)', answer: 'sie', explanation: 'The feminine accusative pronoun remains sie.'},
      {type: 'Accusative pronoun', question: 'Miriam lädt ___ ein. (wir)', answer: 'uns', explanation: 'The accusative form of wir is uns.'},
      {type: 'Accusative pronoun', question: 'Ich brauche ___. (ihr)', answer: 'euch', explanation: 'The accusative form of ihr is euch.'},
      {type: 'Accusative pronoun', question: 'Wir holen ___ am Bahnhof ab. (sie, plural)', answer: 'sie', explanation: 'The plural accusative pronoun is sie.'},
      {type: 'Accusative pronoun', question: 'Kann ich ___ etwas fragen? (Sie)', answer: 'Sie', explanation: 'The formal accusative pronoun is Sie and is capitalized.'},
      {type: 'Friendly request', question: '___ bitte den Tisch. (du / decken)', answer: 'Deck', explanation: 'The du imperative of decken is deck; bitte makes it friendlier.'},
      {type: 'Friendly request', question: '___ doch bitte die Spülmaschine aus. (ihr / ausräumen)', answer: 'Räumt', explanation: 'Use the ihr imperative räumt; doch bitte softens the request.'}
    ],
    sentences: [
      {type: 'Imperative: du', question: 'Tell one person to tidy the room.', answer: 'Räum das Zimmer auf.', explanation: 'Use the verb stem; the separable prefix stands at the end.'},
      {type: 'Imperative: du', question: 'Tell one person to clean the bathroom.', answer: 'Putz das Bad.', explanation: 'The du imperative can use the stem putz.'},
      {type: 'Imperative: du', question: 'Tell one person to set the table.', answer: 'Deck den Tisch.', explanation: 'The du imperative of decken is deck.'},
      {type: 'Imperative: du', question: 'Tell one person to take out the trash.', answer: 'Bring den Müll raus.', explanation: 'Rausbringen separates in the imperative.'},
      {type: 'Imperative: du', question: 'Tell one person to make the bed.', answer: 'Mach das Bett.', explanation: 'Use mach without du.'},
      {type: 'Imperative: du', question: 'Tell one person to read the note.', answer: 'Lies die Notiz.', explanation: 'The irregular imperative of lesen is lies.'},
      {type: 'Imperative: du', question: 'Tell one person not to forget the key.', answer: 'Vergiss den Schlüssel nicht.', explanation: 'The irregular imperative of vergessen is vergiss.'},
      {type: 'Imperative: du', question: 'Tell one person to come downstairs immediately.', answer: 'Komm sofort runter.', explanation: 'Runterkommen separates in the imperative.'},
      {type: 'Imperative: du', question: 'Tell one person to be quiet.', answer: 'Sei leise.', explanation: 'The du imperative of sein is sei.'},
      {type: 'Imperative: du', question: 'Tell one person to close the window.', answer: 'Mach das Fenster zu.', explanation: 'Zumachen separates: mach ... zu.'},
      {type: 'Imperative: ihr', question: 'Tell several people to empty the dishwasher.', answer: 'Räumt die Spülmaschine aus.', explanation: 'Use the ihr form without the pronoun ihr.'},
      {type: 'Imperative: ihr', question: 'Tell several people to wash the laundry.', answer: 'Wascht die Wäsche.', explanation: 'The ihr imperative is wascht.'},
      {type: 'Imperative: ihr', question: 'Tell several people not to sleep so long.', answer: 'Schlaft nicht so lange.', explanation: 'Use the ihr form schlaft without ihr.'},
      {type: 'Imperative: ihr', question: 'Tell several people to be hard-working.', answer: 'Seid fleißig.', explanation: 'The ihr imperative of sein is seid.'},
      {type: 'Imperative: Sie', question: 'Ask formally: Please come in.', answer: 'Kommen Sie bitte rein.', explanation: 'The formal imperative uses infinitive + Sie.'},
      {type: 'Imperative: Sie', question: 'Ask formally: Please be punctual.', answer: 'Seien Sie bitte pünktlich.', explanation: 'The formal imperative of sein is seien Sie.'},
      {type: 'Replace with a pronoun', question: 'Sara ruft Peter an. Replace Peter.', answer: 'Sara ruft ihn an.', explanation: 'The masculine accusative pronoun is ihn.'},
      {type: 'Replace with a pronoun', question: 'Ich putze das Bad. Replace das Bad.', answer: 'Ich putze es.', explanation: 'The neuter accusative pronoun is es.'},
      {type: 'Replace with a pronoun', question: 'Mach die Tür zu. Replace die Tür.', answer: 'Mach sie zu.', explanation: 'The feminine accusative pronoun is sie.'},
      {type: 'Replace with a pronoun', question: 'Wir holen unsere Freunde ab. Replace unsere Freunde.', answer: 'Wir holen sie ab.', explanation: 'The plural accusative pronoun is sie.'},
      {type: 'Replace with a pronoun', question: 'Kannst du Anna und mich abholen? Replace Anna und mich.', answer: 'Kannst du uns abholen?', explanation: 'The accusative pronoun for a group including the speaker is uns.'},
      {type: 'Replace with a pronoun', question: 'Miriam lädt dich und Tom ein. Replace dich und Tom.', answer: 'Miriam lädt euch ein.', explanation: 'The informal plural accusative pronoun is euch.'},
      {type: 'Translate', question: 'Can you pick me up at the station?', answer: 'Kannst du mich am Bahnhof abholen?', explanation: 'Mich is the accusative form of ich.'},
      {type: 'Translate', question: 'I will call him back later.', answer: 'Ich rufe ihn später zurück.', explanation: 'Ihn is masculine accusative; zurückrufen separates.'},
      {type: 'Friendly request', question: 'Ask one person politely to hang up the laundry.', answer: 'Häng bitte die Wäsche auf.', explanation: 'Bitte softens the imperative; aufhängen separates.'},
      {type: 'Friendly request', question: 'Ask several people politely to clean the kitchen.', answer: 'Putzt bitte die Küche.', explanation: 'Use the ihr imperative putzt.'},
      {type: 'Friendly request', question: 'Say: Please be so kind and take out the bottles.', answer: 'Sei bitte so lieb und bring die Flaschen raus.', explanation: 'Sei is the du imperative of sein.'},
      {type: 'Put in correct order', question: 'doch bitte / ihn / zurück / rufen', answer: 'Ruf ihn doch bitte zurück.', explanation: 'The pronoun follows the verb; zurück stands at the end.'},
      {type: 'Translate', question: 'The shared apartment is clean and tidy.', answer: 'Die Wohngemeinschaft ist sauber und ordentlich.', explanation: 'Sauber means clean; ordentlich means tidy.'},
      {type: 'Translate', question: 'My male roommate does the laundry on Saturday.', answer: 'Mein Mitbewohner wäscht am Samstag die Wäsche.', explanation: 'Waschen changes a to ä in the third-person singular.'}
    ]
  };

  function tagged(items, lesson) {
    return items.map(item => ({...item, lesson, pack: PACK_ID}));
  }

  const pack = {
    meta: {
      id: PACK_ID,
      title: 'Original practice for Menschen A1 lessons 19–20',
      level: 'A1',
      version: 1,
      note: 'Original supplementary practice aligned to the lesson themes; no textbook exercises are reproduced.'
    },
    flashcards: [
      ...tagged(lesson19.flashcards, 19),
      ...tagged(lesson20.flashcards, 20)
    ],
    grammar: [
      ...tagged(lesson19.grammar, 19),
      ...tagged(lesson20.grammar, 20)
    ],
    sentences: [
      ...tagged(lesson19.sentences, 19),
      ...tagged(lesson20.sentences, 20)
    ]
  };

  window.GERMAN_MENSCHEN_LESSONS_19_20 = pack;

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
  data.meta.version = Math.max(4, Number(data.meta.version) || 0);
  data.meta.packs = Array.isArray(data.meta.packs) ? data.meta.packs : [];
  if (!data.meta.packs.includes(PACK_ID)) data.meta.packs.push(PACK_ID);
  data.meta.lessonTitles = {
    ...(data.meta.lessonTitles || {}),
    19: 'Appearance, past descriptions & reactions',
    20: 'Housework, requests & shared living'
  };
})();
