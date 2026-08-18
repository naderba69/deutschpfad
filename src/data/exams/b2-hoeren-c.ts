/**
 * ═══════════════════════════════════════════════════════════
 *  بنك الاستماع B2 — النموذج الثالث
 *  المواضيع: سوق العمل، العمل الحر، خدمات، سفر.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const B2_HOEREN_C: ExamHoerenTeil[] = [
  /* Teil 1 — 5 حوارات قصيرة + R/F */
  {
    teil: 1,
    title: "Teil 1 — Kurze Gespräche",
    titleAr: "الجزء 1 — حوارات قصيرة",
    minutes: 9,
    points: 10,
    kind: "rf",
    introAr:
      "تسمع 5 حوارات قصيرة من الحياة اليومية. لكل حوار عبارتان: حدد Richtig أو Falsch.",
    audioText:
      "Gespräch 1. Frau: Herr Schmidt, wir haben Ihre Bewerbung erhalten. Können Sie am Freitag zum Vorstellungsgespräch kommen? Mann: Am Freitag bin ich leider noch auf Geschäftsreise. Geht es auch am Montag? Frau: Montag um zehn Uhr passt. Bitte bringen Sie Ihre Zeugnisse mit. — Gespräch 2. Mann: Ich hätte gern ein Ticket nach Hamburg für morgen früh. Frau: Der erste Zug fährt um 5:40 Uhr. Mann: Und was kostet die Fahrkarte? Frau: Mit der Bahncard 50 nur 29 Euro. — Gespräch 3. Frau: Haben Sie die neue Software schon installiert? Mann: Nein, ich warte noch auf die Freigabe von der IT-Abteilung. Frau: Ohne die neue Version können wir die Berichte nicht öffnen. Mann: Dann schreibe ich sofort eine E-Mail an den Support. — Gespräch 4. Mann: Meine Tochter hat nächste Woche Geburtstag. Ich suche ein Geschenk. Frau: Wie alt wird sie denn? Mann: Zwölf. Sie liebt Bücher und zeichnet gern. Frau: Dann schauen Sie sich doch die Malsets an, die sind gerade im Angebot. — Gespräch 5. Frau: Ich muss dringend zum Zahnarzt. Mein Zahn tut weh. Mann: Dr. Weber hat heute noch einen Termin um vier Uhr frei. Frau: Nehmen Sie ihn bitte! Und können Sie mich von der Arbeit abholen? Mann: Kein Problem, ich hole Sie um halb vier ab.",
    statements: [
      { id: "h1-s1", de: "Der Mann kann am Freitag zum Vorstellungsgespräch kommen.", ar: "الرجل يستطيع الحضور للمقابلة يوم الجمعة.", isTrue: false, whyAr: "قال: Am Freitag bin ich leider noch auf Geschäftsreise — غير متاح." },
      { id: "h1-s2", de: "Das Gespräch ist am Montag um zehn Uhr.", ar: "المقابلة يوم الاثنين العاشرة.", isTrue: true, whyAr: "قالت: Montag um zehn Uhr passt." },
      { id: "h1-s3", de: "Der erste Zug nach Hamburg fährt um 6:40.", ar: "أول قطار إلى هامبورغ ينطلق 6:40.", isTrue: false, whyAr: "قالت: um 5:40 Uhr — الخامسة والأربعون." },
      { id: "h1-s4", de: "Mit der Bahncard 50 kostet die Fahrkarte 29 Euro.", ar: "مع بطاقة القطار 50 تكلف التذكرة 29 يورو.", isTrue: true, whyAr: "قالت: Mit der Bahncard 50 nur 29 Euro." },
      { id: "h1-s5", de: "Die neue Software ist schon installiert.", ar: "البرنامج الجديد مثبت بالفعل.", isTrue: false, whyAr: "قال: ich warte noch auf die Freigabe — لم يثبت بعد." },
      { id: "h1-s6", de: "Ohne die neue Version können die Berichte nicht geöffnet werden.", ar: "بدون النسخة الجديدة لا يمكن فتح التقارير.", isTrue: true, whyAr: "قالت: Ohne die neue Version können wir die Berichte nicht öffnen." },
      { id: "h1-s7", de: "Die Tochter wird zwölf Jahre alt.", ar: "الابنة تبلغ الثانية عشرة.", isTrue: true, whyAr: "قال: Zwölf." },
      { id: "h1-s8", de: "Die Tochter interessiert sich für Sport.", ar: "الابنة مهتمة بالرياضة.", isTrue: false, whyAr: "قال: Sie liebt Bücher und zeichnet gern — كتب ورسومات لا رياضة." },
      { id: "h1-s9", de: "Der Zahnarzt hat heute keinen Termin mehr frei.", ar: "طبيب الأسنان ليس لديه موعد اليوم.", isTrue: false, whyAr: "قالت: Dr. Weber hat heute noch einen Termin um vier Uhr frei — يوجد موعد." },
      { id: "h1-s10", de: "Der Mann holt die Frau um halb vier ab.", ar: "الرجل سيقل السيدة في الثالثة والنصف.", isTrue: true, whyAr: "قال: ich hole Sie um halb vier ab." },
    ],
  },

  /* Teil 2 — مقابلة + 5 MCQ */
  {
    teil: 2,
    title: "Teil 2 — Interview im Radio",
    titleAr: "الجزء 2 — مقابلة إذاعية",
    minutes: 8,
    points: 5,
    kind: "mcq",
    introAr:
      "تسمع مقابلة مع مستشارة مهنية عن «العمل الحر (Freelance)». اختر الإجابة الصحيحة لكل سؤال.",
    audioText:
      "Moderatorin: Willkommen bei „Beruf und Zukunft“. Heute spricht Frau Berger, Karriereberaterin, über das Arbeiten als Freelancer. Frau Berger, immer mehr Menschen machen sich selbstständig. Warum?\n\nFrau Berger: Die Gründe sind unterschiedlich. Viele wollen flexible Arbeitszeiten und die Freiheit, ihre Projekte selbst zu wählen. Andere möchten Familie und Beruf besser vereinbaren. Und nicht zuletzt bieten digitale Plattformen heute einfache Möglichkeiten, Kunden zu finden.\n\nModeratorin: Was sind die größten Herausforderungen?\n\nFrau Berger: Ganz klar die finanzielle Unsicherheit. Freelancer haben kein festes Monatsgehalt, und im Krankheitsfall bekommen sie erst nach sechs Wochen Geld von der Krankenkasse. Außerdem müssen sie sich selbst um die Altersvorsorge kümmern. Viele unterschätzen das.\n\nModeratorin: Was raten Sie Einsteigern?\n\nFrau Berger: Erstens: einen finanziellen Puffer für mindestens sechs Monate ansparen. Zweitens: ein Netzwerk aufbauen, bevor man kündigt. Und drittens: mit einem Nebenprojekt starten, um Erfahrungen zu sammeln, bevor man ganz auf sich gestellt ist. Wichtig ist auch, Verträge immer schriftlich zu schließen.\n\nModeratorin: Wie sieht die Zukunft aus?\n\nFrau Berger: Der Trend geht zur Mischung: Viele Arbeitnehmer arbeiten als Angestellte und bieten gleichzeitig freiberuflich Dienstleistungen an. Das nennt man das Portfolio-Modell. Es verbindet die Sicherheit des Angestelltenverhältnisses mit der Flexibilität der Selbstständigkeit.",
    questions: [
      { id: "h2-q1", q: "Warum werden Menschen Freelancer?", qAr: "لماذا يصبح الناس مستقلين؟", options: ["Wegen höherem Gehalt", "Wegen flexibler Arbeitszeiten und Freiheit", "Weil sie keine Arbeit finden", "Weil die Chefs es verlangen"], correct: 1, whyAr: "قالت: viele wollen flexible Arbeitszeiten und die Freiheit, ihre Projekte selbst zu wählen." },
      { id: "h2-q2", q: "Was ist die größte Herausforderung?", qAr: "ما أكبر تحدٍّ؟", options: ["Die finanzielle Unsicherheit", "Zu viele Kunden", "Zu wenig Technik", "Langes Pendeln"], correct: 0, whyAr: "قالت: Ganz klar die finanzielle Unsicherheit." },
      { id: "h2-q3", q: "Was passiert im Krankheitsfall?", qAr: "ماذا يحدث عند المرض؟", options: ["Man bekommt sofort Geld", "Man bekommt erst nach sechs Wochen Geld", "Man verliert alle Kunden", "Die Krankenkasse zahlt alles"], correct: 1, whyAr: "قالت: im Krankheitsfall bekommen sie erst nach sechs Wochen Geld." },
      { id: "h2-q4", q: "Was rät Frau Berger Einsteigern?", qAr: "بماذا تنصح المستشارة المبتدئين؟", options: ["Sofort kündigen", "Einen finanziellen Puffer ansparen", "Keine Verträge schließen", "Im Ausland arbeiten"], correct: 1, whyAr: "قالت: einen finanziellen Puffer für mindestens sechs Monate ansparen." },
      { id: "h2-q5", q: "Was ist das Portfolio-Modell?", qAr: "ما هو نموذج المحفظة؟", options: ["Nur als Angestellter arbeiten", "Angestellt sein und zusätzlich freiberuflich arbeiten", "Nur freiberuflich arbeiten", "Ein Portfolio für Bewerbungen erstellen"], correct: 1, whyAr: "قالت: Angestellte, die gleichzeitig freiberuflich Dienstleistungen anbieten." },
    ],
  },

  /* Teil 3 — 7 إعلانات + Zuordnung */
  {
    teil: 3,
    title: "Teil 3 — Ansagen zuordnen",
    titleAr: "الجزء 3 — مطابقة الإعلانات",
    minutes: 8,
    points: 7,
    kind: "zuordnung",
    introAr:
      "تسمع 7 إعلانات قصيرة. ما المكان/الخدمة الذي يناسب كل إعلان؟",
    audioText:
      "Ansage 1: Ihr Flug nach Tunis wird am Gate 12 aufgerufen. Bitte halten Sie Ihren Reisepass und die Bordkarte bereit. Das Einsteigen beginnt in zehn Minuten. — Ansage 2: Liebe Gäste, unser Hotelrestaurant ist heute von 12 bis 14:30 Uhr geöffnet. Bitte reservieren Sie für den Abend an der Rezeption. — Ansage 3: Achtung, die Bibliothek schließt heute um 18 Uhr. Ausgeliehene Bücher können Sie auch über den Rückgabeautomaten vor der Tür abgeben. — Ansage 4: Die Bushaltestelle Hauptbahnhof wird wegen Bauarbeiten verlegt. Bitte nutzen Sie die Ersatzhaltestelle auf der gegenüberliegenden Straßenseite. — Ansage 5: Liebe Eltern, der Schwimmkurs für Kinder beginnt am Montag um 15 Uhr. Bitte bringen Sie Badeanzug, Handtuch und eine Badekappe mit. — Ansage 6: Unser Kino zeigt heute Abend den neuen Film um 20 Uhr. Karten können Sie online oder an der Abendkasse kaufen. Für Studierende gibt es einen Rabatt. — Ansage 7: Willkommen in der Stadtbücherei. Ab sofort können Sie auch E-Books über unsere App ausleihen. Die Ausleihdauer beträgt 21 Tage.",
    categories: [
      { id: "z1", de: "Im Flughafen", ar: "في المطار" },
      { id: "z2", de: "Im Hotel", ar: "في الفندق" },
      { id: "z3", de: "In der Bibliothek", ar: "في المكتبة" },
      { id: "z4", de: "An der Bushaltestelle", ar: "في موقف الحافلة" },
      { id: "z5", de: "Im Schwimmbad", ar: "في المسبح" },
      { id: "z6", de: "Im Kino", ar: "في السينما" },
      { id: "z7", de: "In der Stadtbücherei", ar: "في مكتبة المدينة" },
    ],
    allowRepeat: false,
    items: [
      { id: "h3-1", de: "Flug nach Tunis, Gate 12, Einsteigen in zehn Minuten.", categoryId: "z1" },
      { id: "h3-2", de: "Restaurant geöffnet 12-14:30, Reservierung abends.", categoryId: "z2" },
      { id: "h3-3", de: "Schließt um 18 Uhr, Rückgabeautomaten vor der Tür.", categoryId: "z3" },
      { id: "h3-4", de: "Haltestelle verlegt wegen Bauarbeiten.", categoryId: "z4" },
      { id: "h3-5", de: "Kurs für Kinder am Montag, Badeanzug mitbringen.", categoryId: "z5" },
      { id: "h3-6", de: "Film um 20 Uhr, Rabatt für Studierende.", categoryId: "z6" },
      { id: "h3-7", de: "E-Books über die App, 21 Tage Leihfrist.", categoryId: "z7" },
    ],
  },

  /* Teil 4 — حديث + 8 MCQ */
  {
    teil: 4,
    title: "Teil 4 — Vortrag mit Fragen",
    titleAr: "الجزء 4 — حديث مع أسئلة",
    minutes: 10,
    points: 8,
    kind: "mcq",
    introAr:
      "تسمع حديثاً عن «السفر المستدام». أجب عن الأسئلة الثمانية.",
    audioText:
      "Guten Abend, meine Damen und Herren. Ich freue mich, heute über ein Thema sprechen zu dürfen, das uns alle betrifft: nachhaltiges Reisen. Der Tourismus gehört zu den größten Wirtschaftszweigen der Welt – im letzten Jahr wurden weltweit über 1,4 Milliarden Reisen unternommen. Diese Zahl hat enorme Auswirkungen auf Klima und Umwelt: Allein der Flugverkehr verursacht rund 2,5 Prozent der weltweiten CO2-Emissionen, Tendenz steigend.\n\nWas bedeutet nachhaltiges Reisen konkret? Es geht nicht darum, auf Reisen zu verzichten. Es geht darum, bewusster zu reisen. Drei Prinzipien stehen im Mittelpunkt: Erstens, die Anreise – wählen Sie die Bahn statt des Flugzeugs, wenn es zeitlich vertretbar ist. Eine Bahnreise von München nach Wien verursacht nur ein Zehntel der Emissionen eines Fluges. Zweitens, die Unterkunft – achten Sie auf Umweltzertifikate. Viele Hotels sparen Wasser, nutzen Solarstrom und verzichten auf Einwegplastik. Drittens, das Verhalten vor Ort – essen Sie regional, kaufen Sie lokale Produkte und respektieren Sie die Natur.\n\nNatürlich hat nachhaltiges Reisen auch Grenzen. Für Fernreisen gibt es oft keine umweltfreundliche Alternative, und wer Familie in einem anderen Kontinent hat, will nicht auf Besuche verzichten. Auch ist nachhaltiges Reisen nicht immer günstiger. Aber es gibt einen wachsenden Trend: Immer mehr Reisende sind bereit, etwas mehr zu bezahlen, wenn sie wissen, dass ihr Geld der lokalen Bevölkerung zugutekommt.\n\nWas können Sie also tun? Informieren Sie sich vor der Reise, wählen Sie Anbieter mit nachhaltigen Konzepten und kompensieren Sie – zum Beispiel durch Klimaschutzprojekte. Und denken Sie daran: Der schönste Urlaub ist der, der auch in zehn Jahren noch möglich ist.",
    questions: [
      { id: "h4-q1", q: "Wie viele Reisen wurden letztes Jahr weltweit unternommen?", qAr: "كم رحلة نُفذت عالمياً العام الماضي؟", options: ["1,4 Milliarden", "2,5 Milliarden", "14 Milliarden", "140 Millionen"], correct: 0, whyAr: "قال: über 1,4 Milliarden Reisen." },
      { id: "h4-q2", q: "Wie viel CO2 verursacht der Flugverkehr?", qAr: "كم ثاني أكسيد الكربون يسبب النقل الجوي؟", options: ["2,5 Prozent der weltweiten Emissionen", "25 Prozent", "5 Prozent", "0,5 Prozent"], correct: 0, whyAr: "قال: rund 2,5 Prozent der weltweiten CO2-Emissionen." },
      { id: "h4-q3", q: "Was bedeutet nachhaltiges Reisen laut Redner?", qAr: "ماذا يعني السفر المستدام حسب المتحدث؟", options: ["Auf Reisen verzichten", "Bewusster reisen", "Nur im Inland reisen", "Teurer reisen"], correct: 1, whyAr: "قال: Es geht darum, bewusster zu reisen." },
      { id: "h4-q4", q: "Wie viel Emission verursacht die Bahn im Vergleich zum Flug?", qAr: "كم تسبب الحافلة من انبعاثات مقارنة بالطائرة؟", options: ["Die Hälfte", "Ein Zehntel", "Das Doppelte", "Dasselbe"], correct: 1, whyAr: "قال: nur ein Zehntel der Emissionen eines Fluges." },
      { id: "h4-q5", q: "Worauf soll man bei der Unterkunft achten?", qAr: "على ماذا يجب الانتباه في الإقامة؟", options: ["Auf die Lage", "Auf Umweltzertifikate", "Auf den Pool", "Auf die Größe"], correct: 1, whyAr: "قال: achten Sie auf Umweltzertifikate." },
      { id: "h4-q6", q: "Was ist eine Grenze des nachhaltigen Reisens?", qAr: "ما هو حد السفر المستدام؟", options: ["Es gibt keine Alternativen für Fernreisen", "Es ist immer günstiger", "Es ist verboten", "Es dauert zu lange"], correct: 0, whyAr: "قال: Für Fernreisen gibt es oft keine umweltfreundliche Alternative." },
      { id: "h4-q7", q: "Welcher Trend ist zu beobachten?", qAr: "أي اتجاه يمكن ملاحظته؟", options: ["Reisende wollen weniger bezahlen", "Reisende sind bereit, mehr zu zahlen für Nachhaltigkeit", "Reisende lehnen Zertifikate ab", "Reisende fliegen mehr"], correct: 1, whyAr: "قال: Immer mehr Reisende sind bereit, etwas mehr zu bezahlen." },
      { id: "h4-q8", q: "Was ist die Botschaft des Redners am Ende?", qAr: "ما رسالة المتحدث في النهاية؟", options: ["Reisen sollte verboten werden", "Der schönste Urlaub ist der, der in zehn Jahren noch möglich ist", "Nur Fernreisen sind gut", "Nachhaltigkeit ist zu teuer"], correct: 1, whyAr: "قال في الخاتمة: Der schönste Urlaub ist der, der auch in zehn Jahren noch möglich ist." },
    ],
  },
];
