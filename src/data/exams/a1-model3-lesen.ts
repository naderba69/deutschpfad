/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي (3) — قراءة A1
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · 12 عنصراً · 100 نقطة (25 لكل جزء) · ~25 دقيقة.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const A1_MODEL3_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — kurze Mitteilungen: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurze Mitteilungen",
    titleAr: "الجزء 1 — رسائل قصيرة",
    minutes: 6,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل القصيرة. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Hallo Mina, der Deutschkurs beginnt heute um 18 Uhr, nicht um 17 Uhr. Bis später! Sara\n" +
      "(b) Achtung: Der Supermarkt ist heute wegen einer Feier erst ab 12 Uhr offen.\n" +
      "(c) Guten Tag Herr Adam, Ihr Termin beim Zahnarzt ist am Dienstag um 15 Uhr. Bitte kommen Sie zehn Minuten früher.",
    questions: [
      { id: "m3l1-q1", q: "Wann beginnt der Deutschkurs?", qAr: "متى يبدأ درس الألمانية؟", options: ["Um 17 Uhr", "Um 18 Uhr", "Um 12 Uhr"], correct: 1, whyAr: "في (a): beginnt heute um 18 Uhr, nicht um 17 Uhr." },
      { id: "m3l1-q2", q: "Wann öffnet der Supermarkt heute?", qAr: "متى يفتح السوق اليوم؟", options: ["Um 12 Uhr", "Um 10 Uhr", "Den ganzen Tag zu"], correct: 0, whyAr: "في (b): erst ab 12 Uhr offen." },
      { id: "m3l1-q3", q: "Wann ist der Termin beim Zahnarzt?", qAr: "متى موعد طبيب الأسنان؟", options: ["Am Montag um 15 Uhr", "Am Dienstag um 15 Uhr", "Am Dienstag um 10 Uhr"], correct: 1, whyAr: "في (c): am Dienstag um 15 Uhr." },
    ],
  },

  /* ═══════════ Teil 2 — Anzeige: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Anzeige",
    titleAr: "الجزء 2 — إعلان",
    minutes: 6,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الإعلان. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Fahrradwerkstatt Rad & Co — Wir reparieren Fahrräder.\n" +
      "Öffnungszeiten: Montag bis Freitag von 9 bis 18 Uhr, Samstag von 9 bis 13 Uhr.\n" +
      "Am Sonntag geschlossen.\n" +
      "Wir verkaufen auch Helme.\n" +
      "Reparatur ab 15 Euro.",
    statements: [
      { id: "m3l2-s1", de: "Am Samstagnachmittag ist die Werkstatt offen.", ar: "بعد ظهر السبت تكون الورشة مفتوحة.", isTrue: false, whyAr: "قيل: Samstag von 9 bis 13 Uhr — أي تُغلق قبل بعد الظهر." },
      { id: "m3l2-s2", de: "Am Sonntag kann man kein Fahrrad reparieren lassen.", ar: "يوم الأحد لا يمكن إصلاح دراجة.", isTrue: true, whyAr: "قيل: Am Sonntag geschlossen." },
      { id: "m3l2-s3", de: "Man kann dort Helme kaufen.", ar: "يمكن شراء خوذات هناك.", isTrue: true, whyAr: "قيل: Wir verkaufen auch Helme." },
      { id: "m3l2-s4", de: "Jede Reparatur kostet genau 15 Euro.", ar: "كل إصلاح يكلف 15 يورو بالضبط.", isTrue: false, whyAr: "قيل: ab 15 Euro، أي «بدءاً من» لا سعراً ثابتاً." },
    ],
  },

  /* ═══════════ Teil 3 — kurzer Text über eine Person: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Kurzer Text",
    titleAr: "الجزء 3 — نص قصير",
    minutes: 7,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "Ich heiße Bilal und wohne in Leipzig. Ich bin Busfahrer. " +
      "Ich beginne um fünf Uhr morgens und arbeite bis dreizehn Uhr. " +
      "Am Nachmittag schlafe ich zwei Stunden. Am Freitag habe ich frei; " +
      "dann spiele ich Fußball mit meinen Freunden.",
    questions: [
      { id: "m3l3-q1", q: "Was ist Bilal von Beruf?", qAr: "ما مهنة بلال؟", options: ["Busfahrer", "Lehrer", "Fußballspieler"], correct: 0, whyAr: "قال: Ich bin Busfahrer." },
      { id: "m3l3-q2", q: "Wann beginnt Bilal?", qAr: "متى يبدأ بلال عمله؟", options: ["Um fünf Uhr morgens", "Um dreizehn Uhr", "Am Nachmittag"], correct: 0, whyAr: "قال: Ich beginne um fünf Uhr morgens." },
      { id: "m3l3-q3", q: "Was macht Bilal am Freitag?", qAr: "ماذا يفعل بلال يوم الجمعة؟", options: ["Er arbeitet im Bus", "Er spielt Fußball", "Er schläft zwei Stunden"], correct: 1, whyAr: "قال: Am Freitag habe ich frei; dann spiele ich Fußball." },
    ],
  },

  /* ═══════════ Teil 4 — Nachricht im Alltag: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Alltagsnachricht",
    titleAr: "الجزء 4 — رسالة من الحياة اليومية",
    minutes: 6,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسالة وأجب عن السؤالين. اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "Hallo Leila, ich bin krank und kann heute nicht zum Kurs kommen. " +
      "Kannst du mir bitte die Hausaufgaben schicken? " +
      "Meine E-Mail-Adresse ist nora@post.de. Danke und bis morgen, Nora",
    questions: [
      { id: "m3l4-q1", q: "Warum schreibt Nora?", qAr: "لماذا تكتب نورا؟", options: ["Sie kommt nicht zum Kurs", "Sie sucht ihre E-Mail-Adresse", "Sie hat keine Hausaufgaben"], correct: 0, whyAr: "قالت: ich bin krank und kann heute nicht zum Kurs kommen." },
      { id: "m3l4-q2", q: "Was braucht Nora?", qAr: "ماذا تحتاج نورا؟", options: ["Die Hausaufgaben", "Ein neues Buch", "Eine E-Mail-Adresse"], correct: 0, whyAr: "قالت: Kannst du mir bitte die Hausaufgaben schicken?" },
    ],
  },
];
