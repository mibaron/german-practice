(function () {
  'use strict';

  const PACK_ID = 'menschen-a1-lessons-15-17';

  const lesson15 = {
    flashcards: [
      {front: 'das Stadtviertel — die Stadtviertel', back: 'neighborhood / city district. Example: Mein Stadtviertel ist sehr lebendig.'},
      {front: 'der Stadtteil — die Stadtteile', back: 'part of a city / district. Example: In diesem Stadtteil gibt es viele Cafés.'},
      {front: 'das Lieblingsviertel — die Lieblingsviertel', back: 'favorite neighborhood. Example: Die Altstadt ist mein Lieblingsviertel.'},
      {front: 'der Blick — die Blicke', back: 'view / look. Example: Der Blick aus dem Fenster ist schön.'},
      {front: 'der Ausblick — die Ausblicke', back: 'view / outlook. Example: Vom Balkon hat man einen tollen Ausblick.'},
      {front: 'die Landschaft — die Landschaften', back: 'landscape / countryside. Example: Die Landschaft hier ist grün.'},
      {front: 'der Berg — die Berge', back: 'mountain. Example: Hinter dem Dorf sieht man Berge.'},
      {front: 'das Gebirge — die Gebirge', back: 'mountain range. Example: Die Alpen sind ein großes Gebirge.'},
      {front: 'der Fluss — die Flüsse', back: 'river. Example: Durch die Stadt fließt ein Fluss.'},
      {front: 'der See — die Seen', back: 'lake. Example: Im Sommer schwimmen wir im See.'},
      {front: 'das Meer — die Meere', back: 'sea. Example: Kiel liegt am Meer.'},
      {front: 'der Wald — die Wälder', back: 'forest. Example: Neben dem Ort beginnt ein Wald.'},
      {front: 'die Natur', back: 'nature. Example: Am Wochenende bin ich gern in der Natur.'},
      {front: 'das Land', back: 'countryside / country. Example: Meine Großeltern wohnen auf dem Land.'},
      {front: 'das Leben', back: 'life. Example: Hier ist das Leben ruhig.'},
      {front: 'der Laden — die Läden', back: 'shop. Example: Der kleine Laden öffnet um acht Uhr.'},
      {front: 'die Werkstatt — die Werkstätten', back: 'workshop / repair shop. Example: Mein Fahrrad ist in der Werkstatt.'},
      {front: 'die Kneipe — die Kneipen', back: 'pub / bar. Example: Abends treffen wir uns in der Kneipe.'},
      {front: 'der Kindergarten — die Kindergärten', back: 'kindergarten / daycare. Example: Der Kindergarten ist neben der Schule.'},
      {front: 'der Friseur / die Friseurin', back: 'hairdresser. Example: Meine Friseurin arbeitet im Viertel.'},
      {front: 'das Reisebüro — die Reisebüros', back: 'travel agency. Example: Im Reisebüro buchen wir den Urlaub.'},
      {front: 'das Kino — die Kinos', back: 'cinema. Example: Das Kino zeigt heute einen neuen Film.'},
      {front: 'die Jugendherberge — die Jugendherbergen', back: 'youth hostel. Example: Die Jugendherberge liegt am See.'},
      {front: 'das Wetter', back: 'weather. Example: Heute ist das Wetter sonnig.'},
      {front: 'der Blog — die Blogs', back: 'blog. Example: Sie schreibt einen Blog über ihr Viertel.'},
      {front: 'der Kommentar — die Kommentare', back: 'comment. Example: Unter dem Text stehen drei Kommentare.'},
      {front: 'der Link — die Links', back: 'link. Example: Der Link führt zur Internetseite des Kinos.'},
      {front: 'der Einwohner / die Einwohnerin', back: 'resident / inhabitant. Example: Das Dorf hat fünfhundert Einwohner.'},
      {front: 'lebendig', back: 'lively. Example: Der Markt macht das Viertel lebendig.'},
      {front: 'ruhig', back: 'quiet / calm. Example: Nachts ist die Straße ruhig.'},
      {front: 'gehören', back: 'to belong to. Example: Das Fahrrad gehört mir.'},
      {front: 'gefallen', back: 'to please / to appeal to. Example: Der Park gefällt uns.'}
    ],
    grammar: [
      {type: 'Dative personal pronoun', question: 'Der Park gefällt ___. (ich)', answer: 'mir', explanation: 'The dative form of ich is mir.'},
      {type: 'Dative personal pronoun', question: 'Gehört das Fahrrad ___? (du)', answer: 'dir', explanation: 'The dative form of du is dir.'},
      {type: 'Dative personal pronoun', question: 'Die Landschaft gefällt ___. (er)', answer: 'ihm', explanation: 'The dative form of er is ihm.'},
      {type: 'Dative personal pronoun', question: 'Der Ausblick gefällt ___. (sie, singular)', answer: 'ihr', explanation: 'The dative form of singular sie is ihr.'},
      {type: 'Dative personal pronoun', question: 'Das Kind mag den Park. Der Park gefällt ___. (es)', answer: 'ihm', explanation: 'The dative form of the neuter pronoun es is ihm.'},
      {type: 'Dative personal pronoun', question: 'Das Viertel gefällt ___. (wir)', answer: 'uns', explanation: 'The dative form of wir is uns.'},
      {type: 'Dative personal pronoun', question: 'Ich helfe ___. (ihr)', answer: 'euch', explanation: 'The dative form of ihr is euch.'},
      {type: 'Dative personal pronoun', question: 'Die Stadt gefällt ___. (sie, plural)', answer: 'ihnen', explanation: 'The dative form of plural sie is ihnen.'},
      {type: 'Dative personal pronoun', question: 'Kann ich ___ helfen? (Sie)', answer: 'Ihnen', explanation: 'The formal dative pronoun is Ihnen and is capitalized.'},
      {type: 'Verb with dative', question: 'Ich danke ___. (mein Nachbar)', answer: 'meinem Nachbarn', explanation: 'Danken takes dative; weak masculine Nachbar adds -n.'},
      {type: 'Verb with dative', question: 'Wir helfen ___. (die Touristin)', answer: 'der Touristin', explanation: 'Helfen takes a dative object.'},
      {type: 'Verb with dative', question: 'Der Laden gehört ___. (eine Familie)', answer: 'einer Familie', explanation: 'Gehören takes dative; feminine eine becomes einer.'},
      {type: 'Verb with dative', question: 'Das Meer gefällt ___. (die Kinder)', answer: 'den Kindern', explanation: 'The dative plural uses den and usually adds -n to the noun.'},
      {type: 'Choose: gefallen / gehören', question: 'Der Schlüssel ___ meinem Nachbarn.', answer: 'gehört', explanation: 'Gehören expresses ownership and takes dative.'},
      {type: 'Choose: gefallen / gehören', question: 'Die ruhigen Straßen ___ mir.', answer: 'gefallen', explanation: 'The plural subject Straßen requires gefallen.'},
      {type: 'Subject–verb agreement', question: 'Das Viertel ___ uns sehr gut. (gefallen)', answer: 'gefällt', explanation: 'The subject Viertel is singular, so use gefällt.'},
      {type: 'Subject–verb agreement', question: 'Die Berge ___ ihm. (gefallen)', answer: 'gefallen', explanation: 'The subject Berge is plural, so use gefallen.'},
      {type: 'Dative or accusative', question: 'Ich sehe ___. (er)', answer: 'ihn', explanation: 'Sehen takes accusative; the accusative form of er is ihn.'}
    ],
    sentences: [
      {type: 'Translate', question: 'I like the neighborhood. (Use gefallen.)', answer: 'Das Stadtviertel gefällt mir.', explanation: 'The thing liked is the subject; the person is dative.'},
      {type: 'Translate', question: 'The mountains appeal to us.', answer: 'Die Berge gefallen uns.', explanation: 'Berge is plural, so use gefallen; wir becomes uns.'},
      {type: 'Translate', question: 'Does the view appeal to you? (informal singular)', answer: 'Gefällt dir der Ausblick?', explanation: 'Du becomes dir after gefallen.'},
      {type: 'Translate', question: 'The bicycle belongs to him.', answer: 'Das Fahrrad gehört ihm.', explanation: 'Gehören takes the dative pronoun ihm.'},
      {type: 'Translate', question: 'This house belongs to her.', answer: 'Dieses Haus gehört ihr.', explanation: 'The dative form of singular sie is ihr.'},
      {type: 'Translate', question: 'Can I help you? (formal)', answer: 'Kann ich Ihnen helfen?', explanation: 'Helfen takes dative; formal Ihnen is capitalized.'},
      {type: 'Translate', question: 'We thank our male neighbor.', answer: 'Wir danken unserem Nachbarn.', explanation: 'Danken takes dative.'},
      {type: 'Translate', question: 'The park appeals to the children.', answer: 'Der Park gefällt den Kindern.', explanation: 'The dative plural is den Kindern.'},
      {type: 'Replace with a pronoun', question: 'Der Laden gehört meinem Vater. Replace meinem Vater.', answer: 'Der Laden gehört ihm.', explanation: 'The masculine dative pronoun is ihm.'},
      {type: 'Replace with a pronoun', question: 'Das Kino gefällt meiner Schwester. Replace meiner Schwester.', answer: 'Das Kino gefällt ihr.', explanation: 'The feminine dative pronoun is ihr.'},
      {type: 'Replace with a pronoun', question: 'Wir helfen den Touristen. Replace den Touristen.', answer: 'Wir helfen ihnen.', explanation: 'The plural dative pronoun is ihnen.'},
      {type: 'Replace with a pronoun', question: 'Ich danke meinen Freunden. Replace meinen Freunden.', answer: 'Ich danke ihnen.', explanation: 'Use ihnen for a plural dative object.'},
      {type: 'Put in correct order', question: 'mir / der Blick aus dem Fenster / gefallen', answer: 'Der Blick aus dem Fenster gefällt mir.', explanation: 'Blick is the subject; mir is the dative object.'},
      {type: 'Put in correct order', question: 'gehören / wem / die Schlüssel', answer: 'Wem gehören die Schlüssel?', explanation: 'Wem asks for a dative person.'},
      {type: 'Put in correct order', question: 'uns / die kleinen Läden / gut / gefallen', answer: 'Die kleinen Läden gefallen uns gut.', explanation: 'The plural subject takes gefallen.'},
      {type: 'Put in correct order', question: 'ihr / der ruhige Stadtteil / nicht / gefallen', answer: 'Der ruhige Stadtteil gefällt ihr nicht.', explanation: 'The singular subject takes gefällt.'},
      {type: 'Complete the description', question: 'In meinem Viertel ___ es einen Park und zwei Kinos. (geben)', answer: 'gibt', explanation: 'Use es gibt to say what a place has.'},
      {type: 'Complete the description', question: 'Aus meinem Fenster ___ ich einen Fluss. (sehen)', answer: 'sehe', explanation: 'The ich form of sehen is sehe.'},
      {type: 'Complete the description', question: 'Auf dem Land ist es sehr ___. (quiet)', answer: 'ruhig', explanation: 'Ruhig means quiet.'},
      {type: 'Complete the description', question: 'Das Zentrum ist am Abend sehr ___. (lively)', answer: 'lebendig', explanation: 'Lebendig means lively.'},
      {type: 'Translate', question: 'There is a forest behind the village.', answer: 'Hinter dem Dorf gibt es einen Wald.', explanation: 'Hinter answers Wo? and takes dative; es gibt takes accusative.'},
      {type: 'Translate', question: 'The youth hostel is by the lake.', answer: 'Die Jugendherberge liegt am See.', explanation: 'Am is the contraction of an dem.'},
      {type: 'Translate', question: 'My favorite neighborhood has many small shops.', answer: 'Mein Lieblingsviertel hat viele kleine Läden.', explanation: 'Viele takes the plural without an article here.'},
      {type: 'Translate', question: 'She writes a blog about her city district.', answer: 'Sie schreibt einen Blog über ihren Stadtteil.', explanation: 'Über takes accusative here; Stadtteil is masculine.'},
      {type: 'Put in correct order', question: 'in der Natur / am Wochenende / wir / sein / gern', answer: 'Am Wochenende sind wir gern in der Natur.', explanation: 'The conjugated verb remains in position 2.'},
      {type: 'Put in correct order', question: 'durch die Stadt / ein Fluss / fließen', answer: 'Ein Fluss fließt durch die Stadt.', explanation: 'The singular subject Fluss takes fließt.'},
      {type: 'Choose the correct verb', question: 'Ich ___ den Berg vom Balkon. (sehen / gefallen)', answer: 'sehe', explanation: 'Sehen takes the mountain as an accusative object.'},
      {type: 'Choose the correct verb', question: 'Der Berg ___ mir. (sehen / gefallen)', answer: 'gefällt', explanation: 'Gefallen expresses that the mountain appeals to me.'},
      {type: 'Write a question', question: 'Ask informally: Who does this bag belong to?', answer: 'Wem gehört diese Tasche?', explanation: 'Wem asks about the dative owner.'},
      {type: 'Write a question', question: 'Ask formally: How do you like the neighborhood?', answer: 'Wie gefällt Ihnen das Stadtviertel?', explanation: 'Formal Sie becomes Ihnen in the dative.'}
    ]
  };

  const lesson16 = {
    flashcards: [
      {front: 'der Aufzug — die Aufzüge', back: 'elevator / lift. Example: Der Aufzug funktioniert nicht.'},
      {front: 'der Lift — die Lifte', back: 'lift / elevator. Lift and Aufzug mean the same thing.'},
      {front: 'die Aufzugtür — die Aufzugtüren', back: 'elevator door. Example: Die Aufzugtür geht nicht auf.'},
      {front: 'die Klimaanlage — die Klimaanlagen', back: 'air conditioning. Example: Die Klimaanlage ist zu laut.'},
      {front: 'die Heizung — die Heizungen', back: 'heating / heater. Example: Die Heizung ist kaputt.'},
      {front: 'das Licht — die Lichter', back: 'light. Example: Das Licht im Bad funktioniert nicht.'},
      {front: 'der Fernseher — die Fernseher', back: 'television set. Example: Der Fernseher hat kein Bild.'},
      {front: 'die Dusche — die Duschen', back: 'shower. Example: Die Dusche hat kein warmes Wasser.'},
      {front: 'das Handtuch — die Handtücher', back: 'towel. Example: Im Zimmer fehlt ein Handtuch.'},
      {front: 'der Zimmerschlüssel — die Zimmerschlüssel', back: 'room key. Example: Mein Zimmerschlüssel ist weg.'},
      {front: 'die Rezeption — die Rezeptionen', back: 'reception desk. Example: Rufen Sie bitte die Rezeption an.'},
      {front: 'der Hotelgast — die Hotelgäste', back: 'hotel guest. Example: Der Hotelgast braucht Hilfe.'},
      {front: 'der Angestellte / die Angestellte', back: 'employee. Example: Eine Angestellte kommt sofort.'},
      {front: 'die Firma — die Firmen', back: 'company. Example: Die Aufzugfirma repariert den Lift.'},
      {front: 'die Hilfe', back: 'help. Example: Wir brauchen Ihre Hilfe.'},
      {front: 'das Problem — die Probleme', back: 'problem. Example: Ich habe ein Problem mit der Dusche.'},
      {front: 'kaputt', back: 'broken. Example: Die Lampe ist kaputt.'},
      {front: 'kalt', back: 'cold. Example: Das Zimmer ist sehr kalt.'},
      {front: 'funktionieren', back: 'to work / function. Example: Die Heizung funktioniert wieder.'},
      {front: 'feststecken', back: 'to be stuck. Example: Zwei Personen stecken im Aufzug fest.'},
      {front: 'reparieren', back: 'to repair. Example: Ein Techniker repariert die Klimaanlage.'},
      {front: 'sich kümmern um', back: 'to take care of. Example: Ich kümmere mich um das Problem.'},
      {front: 'Bescheid sagen', back: 'to let someone know. Example: Ich sage Ihnen morgen Bescheid.'},
      {front: 'sofort', back: 'immediately. Example: Die Mitarbeiterin kommt sofort.'},
      {front: 'selbst', back: 'oneself / personally. Example: Das kann ich nicht selbst reparieren.'},
      {front: 'der Termin — die Termine', back: 'appointment. Example: Ich habe morgen einen Termin.'},
      {front: 'einen Termin vereinbaren', back: 'to arrange an appointment. Example: Wir vereinbaren einen Termin für Montag.'},
      {front: 'einen Termin absagen', back: 'to cancel an appointment. Example: Leider muss ich den Termin absagen.'},
      {front: 'einen Termin verschieben', back: 'to postpone / reschedule an appointment. Example: Können wir den Termin verschieben?'},
      {front: 'pünktlich', back: 'punctual / on time. Example: Bitte kommen Sie pünktlich.'},
      {front: 'dauern', back: 'to last / take time. Example: Die Reparatur dauert eine Stunde.'},
      {front: 'eine halbe Stunde', back: 'half an hour. Example: Der Techniker kommt in einer halben Stunde.'}
    ],
    grammar: [
      {type: 'Temporal preposition: in', question: 'Der Techniker kommt ___ einer Stunde.', answer: 'in', explanation: 'Use in + dative for a point in the future.'},
      {type: 'Temporal preposition: in', question: 'Wir rufen Sie ___ zehn Minuten an.', answer: 'in', explanation: 'In says how long from now something will happen.'},
      {type: 'Temporal preposition: vor / nach', question: 'Ich frühstücke ___ dem Termin.', answer: 'vor', explanation: 'Vor + dative means before an event.'},
      {type: 'Temporal preposition: vor / nach', question: 'Bitte rufen Sie mich ___ dem Kurs an.', answer: 'nach', explanation: 'Nach + dative means after an event.'},
      {type: 'Temporal preposition: für', question: 'Wir bleiben ___ eine Woche im Hotel.', answer: 'für', explanation: 'Für + accusative expresses a duration.'},
      {type: 'Temporal preposition: für', question: 'Das Zimmer ist ___ einen Monat frei.', answer: 'für', explanation: 'Für introduces the length of time.'},
      {type: 'Dative after in', question: 'Der Techniker kommt in ___ halben Stunde. (eine)', answer: 'einer', explanation: 'Temporal in takes dative: in einer halben Stunde.'},
      {type: 'Dative after vor', question: 'Wir treffen uns vor ___ Kurs. (der)', answer: 'dem', explanation: 'Temporal vor takes dative.'},
      {type: 'Dative after nach', question: 'Nach ___ Arbeit rufe ich an. (die)', answer: 'der', explanation: 'Temporal nach takes dative.'},
      {type: 'Accusative after für', question: 'Ich brauche das Zimmer für ___ Woche. (eine)', answer: 'eine', explanation: 'Für always takes accusative.'},
      {type: 'Accusative after für', question: 'Er mietet das Zimmer für ___ Monat. (ein)', answer: 'einen', explanation: 'The masculine accusative form is einen.'},
      {type: 'Polite request with können', question: '___ Sie mir bitte helfen?', answer: 'Können', explanation: 'Können Sie ...? forms a polite request.'},
      {type: 'Polite request with können', question: '___ du die Heizung ausmachen?', answer: 'Kannst', explanation: 'The du form of können is kannst.'},
      {type: 'Dative pronoun', question: 'Kann ich ___ helfen? (Sie)', answer: 'Ihnen', explanation: 'Helfen takes dative; formal Sie becomes Ihnen.'},
      {type: 'Possessive article', question: 'Wir brauchen ___ Hilfe. (Sie)', answer: 'Ihre', explanation: 'Formal Ihr- is capitalized; Hilfe is feminine accusative.'},
      {type: 'Separable verb', question: 'Ich ___ den Termin für morgen ___. (absagen)', answer: 'sage ab', explanation: 'In the present tense, absagen separates.'},
      {type: 'Separable verb', question: 'Die Rezeption ___ mich später ___. (anrufen)', answer: 'ruft an', explanation: 'Anrufen separates in a main clause.'},
      {type: 'Reflexive verb', question: 'Ich ___ mich um das Problem. (kümmern)', answer: 'kümmere', explanation: 'The phrase is sich um etwas kümmern.'},
      {type: 'Question word', question: '___ dauert die Reparatur? – Eine Stunde.', answer: 'Wie lange', explanation: 'Wie lange asks about duration.'},
      {type: 'Future time question', question: '___ kommt der Techniker? – In zehn Minuten.', answer: 'Wann', explanation: 'Wann asks when something happens.'}
    ],
    sentences: [
      {type: 'Translate', question: 'The elevator is not working.', answer: 'Der Aufzug funktioniert nicht.', explanation: 'Funktionieren describes whether a device works.'},
      {type: 'Translate', question: 'We are stuck in the elevator.', answer: 'Wir stecken im Aufzug fest.', explanation: 'Feststecken separates in the present tense.'},
      {type: 'Translate', question: 'The room is very cold.', answer: 'Das Zimmer ist sehr kalt.', explanation: 'Kalt means cold.'},
      {type: 'Translate', question: 'The heating is broken.', answer: 'Die Heizung ist kaputt.', explanation: 'Kaputt means broken.'},
      {type: 'Translate', question: 'We need your help. (formal)', answer: 'Wir brauchen Ihre Hilfe.', explanation: 'Formal Ihre is capitalized.'},
      {type: 'Translate', question: 'Can you help me? (formal)', answer: 'Können Sie mir helfen?', explanation: 'Use können + infinitive and the dative pronoun mir.'},
      {type: 'Translate', question: 'I will come immediately.', answer: 'Ich komme sofort.', explanation: 'Sofort means immediately.'},
      {type: 'Translate', question: 'I will take care of the problem.', answer: 'Ich kümmere mich um das Problem.', explanation: 'Use sich kümmern um + accusative.'},
      {type: 'Translate', question: 'I cannot repair that myself.', answer: 'Ich kann das nicht selbst reparieren.', explanation: 'The infinitive reparieren stands at the end.'},
      {type: 'Translate', question: 'I will let you know tomorrow. (formal)', answer: 'Ich sage Ihnen morgen Bescheid.', explanation: 'Bescheid sagen takes a dative person.'},
      {type: 'Polite request', question: 'Ask formally for the air conditioning to be turned off.', answer: 'Können Sie bitte die Klimaanlage ausmachen?', explanation: 'Können Sie bitte ...? is a polite request.'},
      {type: 'Polite request', question: 'Ask formally for a new towel.', answer: 'Können Sie mir bitte ein neues Handtuch bringen?', explanation: 'Mir identifies the recipient in the dative.'},
      {type: 'Polite request', question: 'Ask formally for the reception desk.', answer: 'Können Sie bitte die Rezeption anrufen?', explanation: 'Anrufen remains at the end after the modal verb.'},
      {type: 'Put in correct order', question: 'in einer halben Stunde / der Techniker / kommen', answer: 'Der Techniker kommt in einer halben Stunde.', explanation: 'In + dative marks a future point.'},
      {type: 'Put in correct order', question: 'vor dem Termin / ich / Sie / anrufen', answer: 'Ich rufe Sie vor dem Termin an.', explanation: 'Anrufen separates; vor takes dative.'},
      {type: 'Put in correct order', question: 'nach dem Kurs / wir / uns / treffen', answer: 'Nach dem Kurs treffen wir uns.', explanation: 'The verb remains in position 2 after the time phrase.'},
      {type: 'Put in correct order', question: 'für zwei Nächte / ein Zimmer / sie / brauchen', answer: 'Sie brauchen ein Zimmer für zwei Nächte.', explanation: 'Für + accusative expresses duration.'},
      {type: 'Put in correct order', question: 'den Termin / leider / ich / absagen / müssen', answer: 'Leider muss ich den Termin absagen.', explanation: 'The modal verb is in position 2; the infinitive is at the end.'},
      {type: 'Complete the sentence', question: 'Die Reparatur dauert ___. (two hours)', answer: 'zwei Stunden', explanation: 'A direct duration needs no preposition.'},
      {type: 'Complete the sentence', question: 'Der Hausmeister kommt ___. (in ten minutes)', answer: 'in zehn Minuten', explanation: 'Use in for a future point measured from now.'},
      {type: 'Complete the sentence', question: 'Ich bin ___ an der Rezeption. (before breakfast)', answer: 'vor dem Frühstück', explanation: 'Vor takes dative.'},
      {type: 'Complete the sentence', question: 'Wir sprechen ___. (after the appointment)', answer: 'nach dem Termin', explanation: 'Nach takes dative.'},
      {type: 'Complete the sentence', question: 'Sie bleibt ___. (for one week)', answer: 'für eine Woche', explanation: 'Für takes accusative and expresses duration.'},
      {type: 'Change to a question', question: 'Der Techniker kommt in einer Stunde. Ask when.', answer: 'Wann kommt der Techniker?', explanation: 'Wann asks about the time.'},
      {type: 'Change to a question', question: 'Die Reparatur dauert zwei Stunden. Ask how long.', answer: 'Wie lange dauert die Reparatur?', explanation: 'Wie lange asks about duration.'},
      {type: 'Appointment language', question: 'Say: I would like to arrange an appointment.', answer: 'Ich möchte einen Termin vereinbaren.', explanation: 'Einen Termin vereinbaren means to arrange an appointment.'},
      {type: 'Appointment language', question: 'Ask: Can we move the appointment?', answer: 'Können wir den Termin verschieben?', explanation: 'Verschieben means to reschedule or postpone.'},
      {type: 'Appointment language', question: 'Say: Unfortunately I have to cancel the appointment.', answer: 'Leider muss ich den Termin absagen.', explanation: 'Absagen separates without a modal, but stays together as an infinitive after muss.'},
      {type: 'Appointment language', question: 'Say: Please come on time.', answer: 'Bitte kommen Sie pünktlich.', explanation: 'Use the formal imperative with Sie.'},
      {type: 'Translate', question: 'The reception desk will call me in ten minutes.', answer: 'Die Rezeption ruft mich in zehn Minuten an.', explanation: 'In marks a future point; anrufen separates in the main clause.'},
      {type: 'Write a hotel complaint', question: 'Say politely: Excuse me, the shower has no warm water.', answer: 'Entschuldigung, die Dusche hat kein warmes Wasser.', explanation: 'Kein negates the neuter noun Wasser.'}
    ]
  };

  const lesson17 = {
    flashcards: [
      {front: 'die Anzeige — die Anzeigen', back: 'advertisement / notice. Example: Ich habe eine interessante Anzeige gelesen.'},
      {front: 'die Castingshow — die Castingshows', back: 'talent casting show. Example: Er möchte bei einer Castingshow mitmachen.'},
      {front: 'der Popstar — die Popstars', back: 'pop star. Example: Viele Jugendliche wollen Popstar werden.'},
      {front: 'der Sänger / die Sängerin', back: 'singer. Example: Die Sängerin hat eine starke Stimme.'},
      {front: 'der Musiker / die Musikerin', back: 'musician. Example: Der Musiker spielt Gitarre.'},
      {front: 'die Gitarre — die Gitarren', back: 'guitar. Example: Sie übt jeden Tag Gitarre.'},
      {front: 'die Bühne — die Bühnen', back: 'stage. Example: Auf der Bühne stehen drei Musiker.'},
      {front: 'das Lied — die Lieder', back: 'song. Example: Die Band singt ein neues Lied.'},
      {front: 'die Stimme — die Stimmen', back: 'voice. Example: Du hast eine schöne Stimme.'},
      {front: 'die Bewerbung — die Bewerbungen', back: 'application. Example: Die Schule bekommt viele Bewerbungen.'},
      {front: 'sich bewerben um', back: 'to apply for. Example: Sie bewirbt sich um einen Studienplatz.'},
      {front: 'die Aufnahmeprüfung — die Aufnahmeprüfungen', back: 'entrance examination. Example: Morgen macht er die Aufnahmeprüfung.'},
      {front: 'schaffen', back: 'to manage / pass. Example: Sie hat die Prüfung geschafft.'},
      {front: 'die Universität — die Universitäten', back: 'university. Example: Er studiert an einer Universität.'},
      {front: 'der Studienplatz — die Studienplätze', back: 'university place. Example: Mia hat einen Studienplatz bekommen.'},
      {front: 'die Berufsausbildung — die Berufsausbildungen', back: 'vocational training. Example: Er macht eine Berufsausbildung.'},
      {front: 'der Abschluss — die Abschlüsse', back: 'qualification / graduation. Example: Für den Beruf braucht man einen Abschluss.'},
      {front: 'abschließen', back: 'to complete / graduate from. Example: Sie schließt ihre Ausbildung nächstes Jahr ab.'},
      {front: 'sich anmelden bei / an', back: 'to register / enroll. Example: Ich melde mich an der Schule an.'},
      {front: 'die Erfahrung — die Erfahrungen', back: 'experience. Example: Hast du schon Erfahrung auf der Bühne?'},
      {front: 'der Traum — die Träume', back: 'dream. Example: Mein Traum ist eine eigene Band.'},
      {front: 'der Traumberuf — die Traumberufe', back: 'dream job. Example: Ärztin ist ihr Traumberuf.'},
      {front: 'der Plan — die Pläne', back: 'plan. Example: Was sind deine Pläne für die Zukunft?'},
      {front: 'die Zukunft', back: 'future. Example: In Zukunft möchte ich im Ausland arbeiten.'},
      {front: 'berühmt', back: 'famous. Example: Die Band ist in Deutschland berühmt.'},
      {front: 'vortragen', back: 'to present / perform aloud. Example: Er trägt sein Lied vor.'},
      {front: 'aufnehmen', back: 'to record / accept. Example: Wir nehmen ein Lied auf.'},
      {front: 'die Beispielaufnahme — die Beispielaufnahmen', back: 'demo recording / sample recording. Example: Schick uns eine Beispielaufnahme.'},
      {front: 'die Internetseite — die Internetseiten', back: 'website / web page. Example: Alle Informationen stehen auf der Internetseite.'},
      {front: 'mitmachen', back: 'to participate / join in. Example: Willst du bei dem Wettbewerb mitmachen?'},
      {front: 'wollen', back: 'to want / intend. Example: Ich will Musiker werden.'},
      {front: 'werden', back: 'to become. Example: Sie will Ärztin werden.'}
    ],
    grammar: [
      {type: 'Preposition: mit + Dativ', question: 'Er spielt mit ___ Gitarre. (sein)', answer: 'seiner', explanation: 'Mit takes dative; Gitarre is feminine.'},
      {type: 'Preposition: mit + Dativ', question: 'Sie kommt mit ___ Freund. (ihr)', answer: 'ihrem', explanation: 'Mit takes dative; Freund is masculine.'},
      {type: 'Preposition: mit + Dativ', question: 'Wir üben mit ___ Musikern. (die)', answer: 'den', explanation: 'The dative plural article is den.'},
      {type: 'Preposition: mit + Dativ', question: 'Ich fahre mit ___ Bus zur Schule. (der)', answer: 'dem', explanation: 'Mit always takes dative.'},
      {type: 'Preposition: ohne + Akkusativ', question: 'Sie singt ohne ___ Mikrofon. (das)', answer: 'das', explanation: 'Ohne takes accusative; neuter das stays das.'},
      {type: 'Preposition: ohne + Akkusativ', question: 'Er kommt ohne ___ Gitarre. (sein)', answer: 'seine', explanation: 'Ohne takes accusative; Gitarre is feminine.'},
      {type: 'Preposition: ohne + Akkusativ', question: 'Sie schafft es ohne ___ Lehrer. (ihr)', answer: 'ihren', explanation: 'The masculine accusative form is ihren.'},
      {type: 'Preposition: ohne + Akkusativ', question: 'Wir reisen ohne ___ Eltern. (unsere)', answer: 'unsere', explanation: 'The plural accusative form is unsere.'},
      {type: 'Conjugate wollen', question: 'Ich ___ Sänger werden.', answer: 'will', explanation: 'The ich form of wollen is will.'},
      {type: 'Conjugate wollen', question: '___ du bei der Show mitmachen?', answer: 'Willst', explanation: 'The du form of wollen is willst.'},
      {type: 'Conjugate wollen', question: 'Lisa ___ die Prüfung schaffen.', answer: 'will', explanation: 'The third-person singular form is will.'},
      {type: 'Conjugate wollen', question: 'Wir ___ eine Band gründen.', answer: 'wollen', explanation: 'The wir form is wollen.'},
      {type: 'Conjugate wollen', question: 'Ihr ___ morgen üben.', answer: 'wollt', explanation: 'The ihr form is wollt.'},
      {type: 'Conjugate wollen', question: 'Die Musiker ___ ein Lied aufnehmen.', answer: 'wollen', explanation: 'The plural form is wollen.'},
      {type: 'Conjugate werden', question: 'Ich ___ Musikerin.', answer: 'werde', explanation: 'The ich form of werden is werde.'},
      {type: 'Conjugate werden', question: 'Du ___ bestimmt berühmt.', answer: 'wirst', explanation: 'The du form of werden is wirst.'},
      {type: 'Conjugate werden', question: 'Er ___ später Lehrer.', answer: 'wird', explanation: 'The third-person singular form is wird.'},
      {type: 'Modal sentence bracket', question: 'Mia ___ nächstes Jahr in Berlin studieren. (wollen)', answer: 'will', explanation: 'The modal is conjugated; the main infinitive stands at the end.'},
      {type: 'Separable verb with modal', question: 'Wir wollen uns morgen ___. (anmelden)', answer: 'anmelden', explanation: 'After a modal verb, the separable infinitive remains together at the end.'},
      {type: 'Separable verb in Präsens', question: 'Paul ___ seine Ausbildung im Juni ___. (abschließen)', answer: 'schließt ab', explanation: 'Without a modal verb, abschließen separates.'}
    ],
    sentences: [
      {type: 'Translate', question: 'I want to become a singer. (speaker: woman)', answer: 'Ich will Sängerin werden.', explanation: 'Use will plus the infinitive werden at the end.'},
      {type: 'Translate', question: 'Do you want to participate? (informal singular)', answer: 'Willst du mitmachen?', explanation: 'The du form of wollen is willst.'},
      {type: 'Translate', question: 'She wants to study in Berlin.', answer: 'Sie will in Berlin studieren.', explanation: 'The main infinitive stands at the end.'},
      {type: 'Translate', question: 'We want to start a band.', answer: 'Wir wollen eine Band gründen.', explanation: 'The wir form is wollen.'},
      {type: 'Translate', question: 'They want to record a song.', answer: 'Sie wollen ein Lied aufnehmen.', explanation: 'Aufnehmen remains together after a modal verb.'},
      {type: 'Translate', question: 'He will become a teacher.', answer: 'Er wird Lehrer.', explanation: 'Werden expresses becoming.'},
      {type: 'Translate', question: 'You will become famous. (informal singular)', answer: 'Du wirst berühmt.', explanation: 'The du form of werden is wirst.'},
      {type: 'Translate', question: 'Mia is becoming a musician.', answer: 'Mia wird Musikerin.', explanation: 'The third-person singular of werden is wird.'},
      {type: 'Translate', question: 'He plays with his guitar.', answer: 'Er spielt mit seiner Gitarre.', explanation: 'Mit takes dative; feminine sein becomes seiner.'},
      {type: 'Translate', question: 'She sings without a microphone. (Use an article.)', answer: 'Sie singt ohne ein Mikrofon.', explanation: 'Ohne takes accusative.'},
      {type: 'Translate', question: 'We travel without our parents.', answer: 'Wir reisen ohne unsere Eltern.', explanation: 'Ohne takes accusative; the plural form is unsere.'},
      {type: 'Translate', question: 'I practice with my friends.', answer: 'Ich übe mit meinen Freunden.', explanation: 'Mit takes dative plural.'},
      {type: 'Put in correct order', question: 'Popstar / er / werden / wollen', answer: 'Er will Popstar werden.', explanation: 'The modal is in position 2; werden stands at the end.'},
      {type: 'Put in correct order', question: 'bei der Castingshow / ihr / mitmachen / wollen', answer: 'Ihr wollt bei der Castingshow mitmachen.', explanation: 'The ihr form is wollt.'},
      {type: 'Put in correct order', question: 'eine Beispielaufnahme / die Sängerin / aufnehmen / wollen', answer: 'Die Sängerin will eine Beispielaufnahme aufnehmen.', explanation: 'After will, aufnehmen stays together at the end.'},
      {type: 'Put in correct order', question: 'ohne seine Gitarre / nie / er / auftreten', answer: 'Er tritt nie ohne seine Gitarre auf.', explanation: 'Ohne takes accusative; auftreten separates.'},
      {type: 'Put in correct order', question: 'mit ihrer Lehrerin / Lisa / üben', answer: 'Lisa übt mit ihrer Lehrerin.', explanation: 'Mit takes dative; feminine ihr becomes ihrer.'},
      {type: 'Put in correct order', question: 'an der Universität / sich / wir / anmelden / wollen', answer: 'Wir wollen uns an der Universität anmelden.', explanation: 'The reflexive pronoun follows the modal; anmelden is at the end.'},
      {type: 'Change to Präsens', question: 'Paul will seine Ausbildung abschließen. Remove will.', answer: 'Paul schließt seine Ausbildung ab.', explanation: 'The separable verb splits in a present-tense main clause.'},
      {type: 'Change to Präsens', question: 'Mia will sich an der Schule anmelden. Remove will.', answer: 'Mia meldet sich an der Schule an.', explanation: 'Anmelden separates without a modal verb.'},
      {type: 'Change to Perfekt', question: 'Ich schließe meine Berufsausbildung ab.', answer: 'Ich habe meine Berufsausbildung abgeschlossen.', explanation: 'The participle of abschließen is abgeschlossen.'},
      {type: 'Change to Perfekt', question: 'Sie meldet sich an der Universität an.', answer: 'Sie hat sich an der Universität angemeldet.', explanation: 'The participle of anmelden is angemeldet.'},
      {type: 'Change to Perfekt', question: 'Er bekommt einen Studienplatz.', answer: 'Er hat einen Studienplatz bekommen.', explanation: 'The participle of bekommen is bekommen.'},
      {type: 'Change to Perfekt', question: 'Wir schaffen die Aufnahmeprüfung.', answer: 'Wir haben die Aufnahmeprüfung geschafft.', explanation: 'Schaffen forms the participle geschafft.'},
      {type: 'Complete with mit or ohne', question: 'Ich kann ___ meine Brille nicht lesen.', answer: 'ohne', explanation: 'Ohne means without and takes accusative.'},
      {type: 'Complete with mit or ohne', question: 'Sie fährt ___ ihrem Lehrer zur Prüfung.', answer: 'mit', explanation: 'Mit means with and takes dative.'},
      {type: 'Complete the plan', question: 'Nächstes Jahr ___ ich eine Ausbildung anfangen. (wollen)', answer: 'will', explanation: 'The ich form of wollen is will.'},
      {type: 'Write a question', question: 'Ask informally: What do you want to become?', answer: 'Was willst du werden?', explanation: 'The infinitive werden stands at the end.'},
      {type: 'Write a question', question: 'Ask informally plural: Do you want to make music?', answer: 'Wollt ihr Musik machen?', explanation: 'The ihr form of wollen is wollt.'},
      {type: 'Write an application statement', question: 'Say: I have experience and play guitar.', answer: 'Ich habe Erfahrung und spiele Gitarre.', explanation: 'This is a simple statement suitable for an application.'}
    ]
  };

  function tagged(items, lesson) {
    return items.map(item => ({...item, lesson, pack: PACK_ID}));
  }

  const pack = {
    meta: {
      id: PACK_ID,
      title: 'Original practice for Menschen A1 lessons 15–17',
      level: 'A1',
      version: 1,
      note: 'Original supplementary practice aligned to the lesson themes; no textbook exercises are reproduced.'
    },
    flashcards: [
      ...tagged(lesson15.flashcards, 15),
      ...tagged(lesson16.flashcards, 16),
      ...tagged(lesson17.flashcards, 17)
    ],
    grammar: [
      ...tagged(lesson15.grammar, 15),
      ...tagged(lesson16.grammar, 16),
      ...tagged(lesson17.grammar, 17)
    ],
    sentences: [
      ...tagged(lesson15.sentences, 15),
      ...tagged(lesson16.sentences, 16),
      ...tagged(lesson17.sentences, 17)
    ]
  };

  window.GERMAN_MENSCHEN_LESSONS_15_17 = pack;

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
  data.meta.version = Math.max(3, Number(data.meta.version) || 0);
  data.meta.packs = Array.isArray(data.meta.packs) ? data.meta.packs : [];
  if (!data.meta.packs.includes(PACK_ID)) data.meta.packs.push(PACK_ID);
  data.meta.lessonTitles = {
    ...(data.meta.lessonTitles || {}),
    15: 'Neighborhoods, city & nature',
    16: 'Hotel problems & appointments',
    17: 'Education, careers & plans'
  };
})();
