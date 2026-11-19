/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (2) — قراءة A2
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · 14 عنصراً · 100 نقطة (25 لكل جزء) · ~30 دقيقة.
 *  البنية المتبعة في A2: mcq(3) · rf(4) · mcq(3) · rf(4).
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const A2_MODEL2_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — Mitteilungen im Alltag: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Mitteilungen",
    titleAr: "الجزء 1 — رسائل يومية",
    minutes: 7,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل القصيرة. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Hallo Amin, mein Zug kommt um 18:40 Uhr an. Kannst du mich am Bahnhof abholen? Sonst nehme ich ein Taxi. Gruß, Lena\n" +
      "(b) Liebe Nachbarn, am Samstag feiern wir Geburtstag. Die Musik ist bis 22 Uhr zu hören. Wir bitten um Verständnis. Familie Krüger\n" +
      "(c) Sehr geehrte Frau Hamdi, Ihr Termin am Dienstag muss leider verschoben werden. Der neue Termin ist am Freitag um 14 Uhr.",
    questions: [
      { id: "m2b1-q1", q: "Was möchte Lena?", qAr: "ماذا تريد لينا؟", options: ["Abgeholt werden", "Ein Taxi bestellen", "Später kommen"], correct: 0, whyAr: "في (a): Kannst du mich am Bahnhof abholen?" },
      { id: "m2b1-q2", q: "Warum schreibt Familie Krüger?", qAr: "لماذا تكتب عائلة كروغر؟", options: ["Um sich zu entschuldigen", "Um einzuladen", "Um sich zu beschweren"], correct: 0, whyAr: "في (b): Wir bitten um Verständnis — اعتذار عن الضجيج." },
      { id: "m2b1-q3", q: "Wann ist der neue Termin?", qAr: "متى الموعد الجديد؟", options: ["Dienstag", "Freitag", "Samstag"], correct: 1, whyAr: "في (c): Der neue Termin ist am Freitag um 14 Uhr." },
    ],
  },

  /* ═══════════ Teil 2 — Anzeigen: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Anzeige",
    titleAr: "الجزء 2 — إعلان",
    minutes: 7,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الإعلان. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Fahrradverleih am See\n" +
      "Wir verleihen City-Fahrräder und E-Bikes. Ein City-Fahrrad kostet 8 Euro pro Tag, ein E-Bike 18 Euro.\n" +
      "Für Kinder gibt es kleinere Fahrräder ohne Gebühr, wenn ein Erwachsener mietet.\n" +
      "Wir sind täglich von 9 bis 19 Uhr geöffnet. Bei Regen bleibt der Verleih geschlossen.\n" +
      "Helme sind im Preis enthalten.",
    statements: [
      { id: "m2b2-s1", de: "Ein E-Bike kostet mehr als ein City-Fahrrad.", ar: "الدراجة الكهربائية أغلى من العادية.", isTrue: true, whyAr: "قيل: E-Bike 18 Euro مقابل City-Fahrrad 8 Euro." },
      { id: "m2b2-s2", de: "Kinderfahrräder kosten immer extra.", ar: "دراجات الأطفال بمقابل دائماً.", isTrue: false, whyAr: "قيل: ohne Gebühr، إن استأجر شخص بالغ." },
      { id: "m2b2-s3", de: "Der Verleih ist auch bei Regen offen.", ar: "التأجير مفتوح حتى في المطر.", isTrue: false, whyAr: "قيل: Bei Regen bleibt der Verleih geschlossen." },
      { id: "m2b2-s4", de: "Die Helme muss man nicht extra bezahlen.", ar: "لا يُدفع للخوذة مبلغ إضافي.", isTrue: true, whyAr: "قيل: Helme sind im Preis enthalten." },
    ],
  },

  /* ═══════════ Teil 3 — Bericht aus dem Alltag: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Bericht",
    titleAr: "الجزء 3 — تقرير من الحياة اليومية",
    minutes: 8,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "Seit drei Monaten arbeite ich in einem Hotel in Hamburg. Am Anfang war alles schwierig: Ich habe die Aufgaben nicht verstanden und " +
      "meine Kollegen sprachen sehr schnell. Deshalb habe ich jeden Abend zehn neue Wörter gelernt und mit meiner Kollegin Sara geübt. " +
      "Heute telefoniere ich selbst mit Gästen und schreibe E-Mails auf Deutsch. Im September mache ich die Prüfung A2, " +
      "und danach möchte ich eine Ausbildung als Hotelfachfrau beginnen.",
    questions: [
      { id: "m2b3-q1", q: "Warum war der Anfang schwierig?", qAr: "لماذا كانت البداية صعبة؟", options: ["Das Hotel war zu groß", "Sie verstand die Aufgaben nicht", "Sie hatte keinen Vertrag"], correct: 1, whyAr: "قالت: Ich habe die Aufgaben nicht verstanden." },
      { id: "m2b3-q2", q: "Was hat ihr geholfen?", qAr: "ما الذي ساعدها؟", options: ["Jeden Abend zehn Wörter lernen", "Ein neuer Kurs am Wochenende", "Die Arbeit im Restaurant"], correct: 0, whyAr: "قالت: habe ich jeden Abend zehn neue Wörter gelernt." },
      { id: "m2b3-q3", q: "Was möchte sie nach der Prüfung machen?", qAr: "ماذا تريد أن تفعل بعد الامتحان؟", options: ["In ein anderes Hotel wechseln", "Eine Ausbildung beginnen", "Zurück in ihr Land fahren"], correct: 1, whyAr: "قالت: möchte ich eine Ausbildung als Hotelfachfrau beginnen." },
    ],
  },

  /* ═══════════ Teil 4 — Aushänge: richtig / falsch ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Aushänge",
    titleAr: "الجزء 4 — لوحات إعلانية",
    minutes: 8,
    points: 25,
    kind: "rf",
    introAr: "اقرأ لوحات الإعلانات. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Stadtbibliothek — Neues Angebot\n" +
      "Ab Januar können Sie Bücher und DVDs online verlängern. Dafür brauchen Sie Ihre Lesernummer und ein Passwort.\n" +
      "Die Bibliothek bleibt am 1. Januar geschlossen. An allen anderen Tagen gilt: Montag bis Freitag 10 bis 19 Uhr, Samstag 10 bis 14 Uhr.\n" +
      "Für Studenten ist die Anmeldung kostenlos, andere Besucher zahlen 20 Euro pro Jahr.",
    statements: [
      { id: "m2b4-s1", de: "Man kann Bücher ab Januar online verlängern.", ar: "يمكن تمديد الكتب إلكترونياً من يناير.", isTrue: true, whyAr: "قيل: Ab Januar können Sie Bücher und DVDs online verlängern." },
      { id: "m2b4-s2", de: "Die Bibliothek ist am Samstagnachmittag geöffnet.", ar: "المكتبة مفتوحة بعد ظهر السبت.", isTrue: false, whyAr: "قيل: Samstag 10 bis 14 Uhr — يغلق بعد الظهر." },
      { id: "m2b4-s3", de: "Studenten zahlen eine kleine Gebühr.", ar: "الطلبة يدفعون رسماً صغيراً.", isTrue: false, whyAr: "قيل: Für Studenten ist die Anmeldung kostenlos." },
      { id: "m2b4-s4", de: "Für die Verlängerung online braucht man ein Passwort.", ar: "للتمديد الإلكتروني يُحتاج إلى كلمة مرور.", isTrue: true, whyAr: "قيل: brauchen Sie Ihre Lesernummer und ein Passwort." },
    ],
  },
];
