(function () {
  'use strict';

  const PACK_ID = 'menschen-a1-lessons-12-14';

  const lesson12 = {
    flashcards: [
      {front: 'das Fest — die Feste', back: 'festival / celebration. Example: Das Fest beginnt am Samstag.'},
      {front: 'die Feier — die Feiern', back: 'celebration / party. Example: Die Feier war sehr schön.'},
      {front: 'der Feiertag — die Feiertage', back: 'public holiday. Example: Am Feiertag arbeiten wir nicht.'},
      {front: 'der Geburtstag — die Geburtstage', back: 'birthday. Example: Mein Geburtstag ist im April.'},
      {front: 'die Hochzeit — die Hochzeiten', back: 'wedding. Example: Wir gehen zu einer Hochzeit.'},
      {front: 'der Karneval', back: 'carnival. Example: Im Februar feiern viele Menschen Karneval.'},
      {front: 'das Festival — die Festivals', back: 'festival. Example: Das Musikfestival dauert drei Tage.'},
      {front: 'das Konzert — die Konzerte', back: 'concert. Example: Das Konzert beginnt um acht Uhr.'},
      {front: 'die Party — die Partys', back: 'party. Example: Kommst du zur Party?'},
      {front: 'die Einladung — die Einladungen', back: 'invitation. Example: Danke für die Einladung!'},
      {front: 'der Besucher / die Besucherin', back: 'visitor. Example: Das Fest hat viele Besucher.'},
      {front: 'das Feuerwerk — die Feuerwerke', back: 'fireworks display. Example: Um Mitternacht sehen wir das Feuerwerk.'},
      {front: 'Januar', back: 'January. With a month, use im: im Januar.'},
      {front: 'Februar', back: 'February. With a month, use im: im Februar.'},
      {front: 'März', back: 'March. With a month, use im: im März.'},
      {front: 'April', back: 'April. With a month, use im: im April.'},
      {front: 'Mai', back: 'May. With a month, use im: im Mai.'},
      {front: 'Juni', back: 'June. With a month, use im: im Juni.'},
      {front: 'Juli', back: 'July. With a month, use im: im Juli.'},
      {front: 'August', back: 'August. With a month, use im: im August.'},
      {front: 'September', back: 'September. With a month, use im: im September.'},
      {front: 'Oktober', back: 'October. With a month, use im: im Oktober.'},
      {front: 'November', back: 'November. With a month, use im: im November.'},
      {front: 'Dezember', back: 'December. With a month, use im: im Dezember.'},
      {front: 'der Frühling', back: 'spring. Say im Frühling.'},
      {front: 'der Sommer', back: 'summer. Say im Sommer.'},
      {front: 'der Herbst', back: 'autumn / fall. Say im Herbst.'},
      {front: 'der Winter', back: 'winter. Say im Winter.'},
      {front: 'Silvester', back: 'New Year’s Eve. Example: An Silvester feiern wir zusammen.'},
      {front: 'Neujahr', back: 'New Year’s Day / New Year. Example: An Neujahr besuchen wir Freunde.'}
    ],
    grammar: [
      {type: 'Time: im / am / um', question: 'Der Karneval ist ___ Februar.', answer: 'im', explanation: 'Use im with months and seasons.'},
      {type: 'Time: im / am / um', question: 'Mein Geburtstag ist ___ Mai.', answer: 'im', explanation: 'Use im before a month.'},
      {type: 'Time: im / am / um', question: 'Wir feiern ___ 3. Oktober.', answer: 'am', explanation: 'Use am with a calendar date.'},
      {type: 'Time: im / am / um', question: 'Das Konzert beginnt ___ 20 Uhr.', answer: 'um', explanation: 'Use um with an exact clock time.'},
      {type: 'Choose: seit / vor', question: 'Das Festival gibt es ___ zehn Jahren.', answer: 'seit', explanation: 'Seit marks a starting point or duration that continues now.'},
      {type: 'Choose: seit / vor', question: 'Wir waren ___ einem Monat auf einer Hochzeit.', answer: 'vor', explanation: 'Vor places a finished event in the past.'},
      {type: 'Choose: seit / vor', question: 'Sie wohnt ___ 2024 in Berlin.', answer: 'seit', explanation: 'The situation began in 2024 and is still true.'},
      {type: 'Choose: seit / vor', question: 'Er ist ___ drei Tagen nach Köln gefahren.', answer: 'vor', explanation: 'The journey happened three days ago.'},
      {type: 'Perfekt with sein', question: 'Ich ___ spät zur Feier gekommen.', answer: 'bin', explanation: 'Kommen describes movement and forms the Perfekt with sein.'},
      {type: 'Perfekt with sein', question: 'Wir ___ nach Wien geflogen.', answer: 'sind', explanation: 'Fliegen to a destination forms the Perfekt with sein.'},
      {type: 'Perfekt with sein', question: 'Mia ___ um Mitternacht gegangen.', answer: 'ist', explanation: 'Gehen forms the Perfekt with sein.'},
      {type: 'Perfekt with sein', question: 'Ihr ___ mit dem Zug gefahren.', answer: 'seid', explanation: 'The ihr form of sein is seid.'},
      {type: 'Präteritum of sein', question: 'Die Party ___ toll.', answer: 'war', explanation: 'The common past form of ist is war.'},
      {type: 'Präteritum of sein', question: 'Wir ___ im Sommer in München.', answer: 'waren', explanation: 'The wir past form of sein is waren.'},
      {type: 'Präteritum of sein', question: 'Wo ___ du gestern?', answer: 'warst', explanation: 'The du past form of sein is warst.'},
      {type: 'Präteritum of sein', question: 'Ihr ___ auf dem Festival.', answer: 'wart', explanation: 'The ihr past form of sein is wart.'}
    ],
    sentences: [
      {type: 'Change to Perfekt', question: 'Ich komme um neun Uhr zur Party.', answer: 'Ich bin um neun Uhr zur Party gekommen.', explanation: 'Kommen uses sein in the Perfekt.'},
      {type: 'Change to Perfekt', question: 'Wir fliegen im Juni nach Wien.', answer: 'Wir sind im Juni nach Wien geflogen.', explanation: 'Fliegen to a destination uses sein.'},
      {type: 'Change to Perfekt', question: 'Lea geht früh nach Hause.', answer: 'Lea ist früh nach Hause gegangen.', explanation: 'Gehen forms the Perfekt with sein.'},
      {type: 'Change to Perfekt', question: 'Ihr fahrt zum Festival.', answer: 'Ihr seid zum Festival gefahren.', explanation: 'Use seid + gefahren with ihr.'},
      {type: 'Put in correct order', question: 'im September / das Fest / stattfinden', answer: 'Im September findet das Fest statt.', explanation: 'The verb is in position 2; the separable prefix stands at the end.'},
      {type: 'Put in correct order', question: 'seit 2020 / in Köln / sie / wohnen', answer: 'Seit 2020 wohnt sie in Köln.', explanation: 'Use the present tense with seit for an ongoing situation.'},
      {type: 'Put in correct order', question: 'vor einer Woche / wir / feiern / zusammen', answer: 'Vor einer Woche haben wir zusammen gefeiert.', explanation: 'A completed past event is expressed here with Perfekt.'},
      {type: 'Translate', question: 'The concert is in August.', answer: 'Das Konzert ist im August.', explanation: 'Use im before a month.'},
      {type: 'Translate', question: 'The party was great.', answer: 'Die Party war toll.', explanation: 'War is the usual simple-past form of sein.'},
      {type: 'Translate', question: 'We have lived here since 2022.', answer: 'Wir wohnen seit 2022 hier.', explanation: 'German uses Präsens with seit when the situation continues.'}
    ]
  };

  const lesson13 = {
    flashcards: [
      {front: 'der Weg — die Wege', back: 'way / route. Example: Können Sie mir den Weg zeigen?'},
      {front: 'der Stadtplan — die Stadtpläne', back: 'city map. Example: Der Stadtplan liegt im Auto.'},
      {front: 'die Straße — die Straßen', back: 'street. Example: Nehmen Sie die nächste Straße links.'},
      {front: 'die Kreuzung — die Kreuzungen', back: 'intersection. Example: An der Kreuzung fahren Sie rechts.'},
      {front: 'die Ampel — die Ampeln', back: 'traffic light. Example: Warten Sie an der Ampel.'},
      {front: 'die Brücke — die Brücken', back: 'bridge. Example: Fahren Sie unter der Brücke durch.'},
      {front: 'der Bahnhof — die Bahnhöfe', back: 'train station. Example: Der Bahnhof ist im Zentrum.'},
      {front: 'der Flughafen — die Flughäfen', back: 'airport. Example: Der Bus fährt zum Flughafen.'},
      {front: 'die Haltestelle — die Haltestellen', back: 'stop / station. Example: Die Haltestelle ist vor dem Hotel.'},
      {front: 'das Hotel — die Hotels', back: 'hotel. Example: Wir suchen ein Hotel.'},
      {front: 'die Bank — die Banken', back: 'bank. Example: Die Bank ist neben der Post.'},
      {front: 'die Post', back: 'post office. Example: Briefmarken bekommen Sie bei der Post.'},
      {front: 'die Polizei', back: 'police / police station. Example: Die Polizei ist in der Stadtmitte.'},
      {front: 'das Café — die Cafés', back: 'café. Example: Wir treffen uns im Café.'},
      {front: 'das Restaurant — die Restaurants', back: 'restaurant. Example: Das Restaurant ist hinter dem Theater.'},
      {front: 'der Supermarkt — die Supermärkte', back: 'supermarket. Example: Der Supermarkt ist gleich hier.'},
      {front: 'das Theater — die Theater', back: 'theatre. Example: Vor dem Theater ist ein Platz.'},
      {front: 'die Kirche — die Kirchen', back: 'church. Example: Das Hotel liegt neben der Kirche.'},
      {front: 'der Dom — die Dome', back: 'cathedral. Example: Das Café ist am Dom.'},
      {front: 'das Zentrum — die Zentren', back: 'centre / downtown. Example: Wir sind im Zentrum.'},
      {front: 'die Stadtmitte', back: 'city centre. Example: Das Hotel ist in der Stadtmitte.'},
      {front: 'in der Nähe', back: 'nearby / close by. Example: Ist hier eine Bank in der Nähe?'},
      {front: 'links', back: 'left / on the left. Example: Biegen Sie links ab.'},
      {front: 'rechts', back: 'right / on the right. Example: Die Post ist rechts.'},
      {front: 'geradeaus', back: 'straight ahead. Example: Gehen Sie zweihundert Meter geradeaus.'},
      {front: 'abbiegen', back: 'to turn. Example: An der Ampel biegen Sie rechts ab.'},
      {front: 'wenden', back: 'to turn around. Example: Hier dürfen Sie nicht wenden.'},
      {front: 'zurückfahren', back: 'to drive back. Example: Wir müssen ein Stück zurückfahren.'},
      {front: 'suchen', back: 'to look for. Example: Ich suche den Bahnhof.'},
      {front: 'helfen', back: 'to help. Example: Können Sie mir helfen?'}
    ],
    grammar: [
      {type: 'Local preposition + Dativ', question: 'Das Hotel liegt neben ___ Bahnhof. (der)', answer: 'dem', explanation: 'A location answering Wo? takes dative: der Bahnhof → dem Bahnhof.'},
      {type: 'Local preposition + Dativ', question: 'Die Bank ist vor ___ Post. (die)', answer: 'der', explanation: 'Die becomes der in the dative.'},
      {type: 'Local preposition + Dativ', question: 'Das Auto steht hinter ___ Hotel. (das)', answer: 'dem', explanation: 'Das becomes dem in the dative.'},
      {type: 'Local preposition + Dativ', question: 'Die Ampel ist an ___ Kreuzung. (die)', answer: 'der', explanation: 'An answers Wo? here, so it takes dative.'},
      {type: 'Local preposition + Dativ', question: 'Das Café ist in ___ Stadtmitte. (die)', answer: 'der', explanation: 'In answers Wo? here: in der Stadtmitte.'},
      {type: 'Local preposition + Dativ', question: 'Der Kiosk steht auf ___ Platz. (der)', answer: 'dem', explanation: 'Auf answers Wo? here: auf dem Platz.'},
      {type: 'Local preposition + Dativ', question: 'Der Bus fährt unter ___ Brücke durch. (die)', answer: 'der', explanation: 'The route is described with unter + dative.'},
      {type: 'Local preposition + Dativ', question: 'Sie gehen an ___ Cafés vorbei. (Plural)', answer: 'den', explanation: 'The dative plural article is den; nouns ending in -s take no extra -n.'},
      {type: 'Dative indefinite article', question: 'Das Hotel ist neben ___ Bank. (eine)', answer: 'einer', explanation: 'The feminine dative form of eine is einer.'},
      {type: 'Dative indefinite article', question: 'Wir warten vor ___ Restaurant. (ein)', answer: 'einem', explanation: 'The neuter dative form of ein is einem.'},
      {type: 'Dative plural', question: 'Die Post liegt zwischen ___ Häusern. (die)', answer: 'den', explanation: 'Use den in the dative plural; Häuser also adds -n.'},
      {type: 'Contraction', question: 'in + dem = ?', answer: 'im', explanation: 'In dem contracts to im.'},
      {type: 'Contraction', question: 'an + dem = ?', answer: 'am', explanation: 'An dem contracts to am.'},
      {type: 'Verb form: helfen', question: 'Du ___ mir sehr. (helfen)', answer: 'hilfst', explanation: 'Helfen changes e to i in the du and er/sie/es forms.'},
      {type: 'Dative pronoun', question: 'Können Sie ___ helfen? (ich)', answer: 'mir', explanation: 'Helfen takes a dative object: ich → mir.'},
      {type: 'Accusative object', question: 'Ich suche ___ Bahnhof. (der)', answer: 'den', explanation: 'Suchen takes an accusative object: der Bahnhof → den Bahnhof.'}
    ],
    sentences: [
      {type: 'Put in correct order', question: 'an der Ampel / Sie / links / abbiegen', answer: 'An der Ampel biegen Sie links ab.', explanation: 'With the location first, the verb remains in position 2.'},
      {type: 'Put in correct order', question: 'neben der Bank / das Hotel / sein', answer: 'Das Hotel ist neben der Bank.', explanation: 'A fixed location uses neben + dative.'},
      {type: 'Put in correct order', question: 'unter der Brücke / durch / Sie / fahren', answer: 'Sie fahren unter der Brücke durch.', explanation: 'Use unter + dative to describe this route.'},
      {type: 'Translate', question: 'Go straight ahead for one kilometre.', answer: 'Gehen Sie einen Kilometer geradeaus.', explanation: 'Use the polite imperative with Sie.'},
      {type: 'Translate', question: 'The station is behind the church.', answer: 'Der Bahnhof ist hinter der Kirche.', explanation: 'A location uses hinter + dative.'},
      {type: 'Translate', question: 'Can you help me? (formal)', answer: 'Können Sie mir helfen?', explanation: 'Mir is the dative pronoun required by helfen.'},
      {type: 'Translate', question: 'I am looking for a supermarket.', answer: 'Ich suche einen Supermarkt.', explanation: 'The masculine accusative form is einen.'},
      {type: 'Complete the direction', question: 'Nehmen Sie die nächste Straße ___. (left)', answer: 'links', explanation: 'Links means left.'},
      {type: 'Write a polite question', question: 'Ask politely: Where is the post office?', answer: 'Entschuldigung, wo ist die Post?', explanation: 'Entschuldigung introduces the question politely; wo asks about a location.'},
      {type: 'Put in correct order', question: 'zwischen dem Dom und dem Hotel / das Café / liegen', answer: 'Das Café liegt zwischen dem Dom und dem Hotel.', explanation: 'Zwischen answers Wo? and takes dative here.'}
    ]
  };

  const lesson14 = {
    flashcards: [
      {front: 'das Haus — die Häuser', back: 'house. Example: Das Haus hat einen Garten.'},
      {front: 'die Wohnung — die Wohnungen', back: 'apartment / flat. Example: Ihre Wohnung ist hell.'},
      {front: 'das Zimmer — die Zimmer', back: 'room. Example: Die Wohnung hat drei Zimmer.'},
      {front: 'das Wohnzimmer — die Wohnzimmer', back: 'living room. Example: Das Sofa steht im Wohnzimmer.'},
      {front: 'das Schlafzimmer — die Schlafzimmer', back: 'bedroom. Example: Das Schlafzimmer ist oben.'},
      {front: 'das Kinderzimmer — die Kinderzimmer', back: 'child’s room. Example: Das Kinderzimmer ist bunt.'},
      {front: 'das Arbeitszimmer — die Arbeitszimmer', back: 'study / home office. Example: Der Schreibtisch steht im Arbeitszimmer.'},
      {front: 'das Badezimmer — die Badezimmer', back: 'bathroom. Short form: das Bad.'},
      {front: 'die Küche — die Küchen', back: 'kitchen. Example: Die Küche ist neben dem Wohnzimmer.'},
      {front: 'der Flur — die Flure', back: 'hallway. Example: Die Garderobe ist im Flur.'},
      {front: 'die Toilette — die Toiletten', back: 'toilet / restroom. Example: Die Toilette ist links.'},
      {front: 'das Erdgeschoss — die Erdgeschosse', back: 'ground floor. Example: Die Küche ist im Erdgeschoss.'},
      {front: 'der Stock — die Stockwerke', back: 'floor / storey. Example: Wir wohnen im zweiten Stock.'},
      {front: 'der Keller — die Keller', back: 'basement / cellar. Example: Die Fahrräder stehen im Keller.'},
      {front: 'die Treppe — die Treppen', back: 'stairs / staircase. Example: Die Treppe führt nach oben.'},
      {front: 'das Dach — die Dächer', back: 'roof. Example: Das Dach ist neu.'},
      {front: 'das Fenster — die Fenster', back: 'window. Example: Das Zimmer hat zwei Fenster.'},
      {front: 'die Tür — die Türen', back: 'door. Example: Die Tür ist offen.'},
      {front: 'der Balkon — die Balkone', back: 'balcony. Example: Sein Balkon ist sehr groß.'},
      {front: 'die Terrasse — die Terrassen', back: 'terrace / patio. Example: Wir frühstücken auf der Terrasse.'},
      {front: 'der Garten — die Gärten', back: 'garden. Example: Die Kinder spielen im Garten.'},
      {front: 'die Garage — die Garagen', back: 'garage. Example: Ihr Auto steht in der Garage.'},
      {front: 'der Baum — die Bäume', back: 'tree. Example: Vor dem Haus steht ein Baum.'},
      {front: 'die Blume — die Blumen', back: 'flower. Example: Im Garten sind viele Blumen.'},
      {front: 'die Miete — die Mieten', back: 'rent. Example: Die Miete kostet 700 Euro.'},
      {front: 'der Quadratmeter — die Quadratmeter', back: 'square metre. Example: Die Wohnung hat 60 Quadratmeter.'},
      {front: 'der Nachbar / die Nachbarin', back: 'neighbour. Example: Unsere Nachbarin ist sehr nett.'},
      {front: 'möbliert', back: 'furnished. Example: Das Zimmer ist möbliert.'},
      {front: 'gemütlich', back: 'cosy / comfortable. Example: Ich finde das Wohnzimmer gemütlich.'},
      {front: 'hell', back: 'bright / light. Example: Die großen Fenster machen das Zimmer hell.'}
    ],
    grammar: [
      {type: 'Possessive: sein', question: 'Der Mann heißt Ben. Das ist ___ Haus.', answer: 'sein', explanation: 'Use sein for a masculine owner; Haus is neuter nominative.'},
      {type: 'Possessive: sein', question: 'Ben hat eine Wohnung. ___ Wohnung ist hell.', answer: 'Seine', explanation: 'A feminine nominative noun adds -e: seine Wohnung.'},
      {type: 'Possessive: sein', question: 'Ben hat einen Balkon. Ich mag ___ Balkon.', answer: 'seinen', explanation: 'A masculine accusative noun takes -en: seinen Balkon.'},
      {type: 'Possessive: sein', question: 'Paul zeigt uns ___ Küche.', answer: 'seine', explanation: 'Küche is feminine accusative, so use seine.'},
      {type: 'Possessive: ihr', question: 'Die Frau heißt Lara. Das ist ___ Zimmer.', answer: 'ihr', explanation: 'Use ihr for a feminine owner; Zimmer is neuter nominative.'},
      {type: 'Possessive: ihr', question: 'Lara hat eine Garage. ___ Garage ist klein.', answer: 'Ihre', explanation: 'Garage is feminine nominative, so ihr adds -e.'},
      {type: 'Possessive: ihr', question: 'Lara zeigt uns ___ Garten.', answer: 'ihren', explanation: 'Garten is masculine accusative, so use ihren.'},
      {type: 'Possessive: ihr', question: 'Mia öffnet ___ Fenster. (Plural)', answer: 'ihre', explanation: 'The plural accusative form is ihre.'},
      {type: 'Possessive ending', question: 'Ottos Blumen sind schön. ___ Blumen sind im Garten.', answer: 'Seine', explanation: 'Otto is masculine and Blumen is plural nominative: seine.'},
      {type: 'Possessive ending', question: 'Frau Klein vermietet ___ Wohnung.', answer: 'ihre', explanation: 'Wohnung is feminine accusative: ihre.'},
      {type: 'Choose: sein / ihr', question: 'Otto mag Marias Wohnung. Er mag ___ Wohnung.', answer: 'ihre', explanation: 'The owner is Maria, so use ihr-; Wohnung adds -e.'},
      {type: 'Choose: sein / ihr', question: 'Maria findet Ottos Haus schön. Sie findet ___ Haus schön.', answer: 'sein', explanation: 'The owner is Otto, so use sein-; Haus has no ending here.'},
      {type: 'Genitive with a name', question: 'das Haus von Anna → ___', answer: 'Annas Haus', explanation: 'Add -s to the name and put it before the noun.'},
      {type: 'Genitive with a name', question: 'der Balkon von Max → ___', answer: "Max' Balkon", explanation: 'A name ending in x takes an apostrophe, not another s.'},
      {type: 'Genitive with a name', question: 'das Zimmer von Paul → ___', answer: 'Pauls Zimmer', explanation: 'Add -s to Paul and place the name before Zimmer.'},
      {type: 'Genitive with a name', question: 'die Garage von Eva → ___', answer: 'Evas Garage', explanation: 'The name receives -s: Evas Garage.'}
    ],
    sentences: [
      {type: 'Replace with a possessive', question: 'Das ist die Küche von Otto.', answer: 'Das ist seine Küche.', explanation: 'Otto is masculine; Küche is feminine nominative.'},
      {type: 'Replace with a possessive', question: 'Ich mag den Balkon von Otto.', answer: 'Ich mag seinen Balkon.', explanation: 'Balkon is masculine accusative: seinen.'},
      {type: 'Replace with a possessive', question: 'Das ist das Arbeitszimmer von Maria.', answer: 'Das ist ihr Arbeitszimmer.', explanation: 'Maria is feminine; Arbeitszimmer is neuter nominative.'},
      {type: 'Use the name genitive', question: 'Der Garten von Lara ist groß.', answer: 'Laras Garten ist groß.', explanation: 'Add -s to Lara and place the name before Garten.'},
      {type: 'Use the name genitive', question: 'Die Wohnung von Felix ist hell.', answer: "Felix' Wohnung ist hell.", explanation: 'A name ending in x uses an apostrophe.'},
      {type: 'Put in correct order', question: 'im Erdgeschoss / seine Küche / sein', answer: 'Seine Küche ist im Erdgeschoss.', explanation: 'The possessive agrees with the feminine noun Küche.'},
      {type: 'Put in correct order', question: 'ihren Garten / sehr gemütlich / ich / finden', answer: 'Ich finde ihren Garten sehr gemütlich.', explanation: 'Garten is a masculine accusative object: ihren.'},
      {type: 'Translate', question: 'Her apartment has a balcony.', answer: 'Ihre Wohnung hat einen Balkon.', explanation: 'Use ihre for Wohnung and einen for the accusative Balkon.'},
      {type: 'Translate', question: 'His bedroom is upstairs.', answer: 'Sein Schlafzimmer ist oben.', explanation: 'Schlafzimmer is neuter nominative, so use sein.'},
      {type: 'Translate', question: 'How do you like Maria’s house?', answer: 'Wie findest du Marias Haus?', explanation: 'A name normally adds -s to show possession.'}
    ]
  };

  function tagged(items, lesson) {
    return items.map(item => ({...item, lesson, pack: PACK_ID}));
  }

  const pack = {
    meta: {
      id: PACK_ID,
      title: 'Original practice for Menschen A1 lessons 12–14',
      level: 'A1',
      version: 1,
      note: 'Original supplementary practice aligned to the lesson themes; no textbook exercises are reproduced.'
    },
    flashcards: [
      ...tagged(lesson12.flashcards, 12),
      ...tagged(lesson13.flashcards, 13),
      ...tagged(lesson14.flashcards, 14)
    ],
    grammar: [
      ...tagged(lesson12.grammar, 12),
      ...tagged(lesson13.grammar, 13),
      ...tagged(lesson14.grammar, 14)
    ],
    sentences: [
      ...tagged(lesson12.sentences, 12),
      ...tagged(lesson13.sentences, 13),
      ...tagged(lesson14.sentences, 14)
    ]
  };

  window.GERMAN_MENSCHEN_LESSONS_12_14 = pack;

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
  data.meta.version = Math.max(2, Number(data.meta.version) || 0);
  data.meta.packs = Array.isArray(data.meta.packs) ? data.meta.packs : [];
  if (!data.meta.packs.includes(PACK_ID)) data.meta.packs.push(PACK_ID);
  data.meta.lessonTitles = {
    ...(data.meta.lessonTitles || {}),
    12: 'Festivals, months & past events',
    13: 'Around town & directions',
    14: 'Homes, rooms & possession'
  };
})();
