/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — قراءة A1 (بنية شبيهة بـ Start Deutsch 1)
 *  ⚠️ هذا نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · ~25 دقيقة · 12 عنصراً · 100 نقطة (تُوزَّع على الأجزاء)
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const A1_LESEN: ExamLesenTeil[] = [
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
      "(a) Liebe Eva, ich bin um 17 Uhr im Café. Bis gleich! Tom\n" +
      "(b) Achtung: Der Kurs am Mittwoch fällt heute aus. Der Lehrer ist krank.\n" +
      "(c) Hallo Papa, ich koche heute Abend Nudeln. Kommst du um 19 Uhr? Lena",
    questions: [
      {
        id: "l1-q1",
        q: "Wo trifft Tom Eva?",
        qAr: "أين يلتقي توم بإيفا؟",
        options: ["Im Café", "In der Schule", "Zu Hause"],
        correct: 0,
        whyAr: "في الرسالة (a): ich bin um 17 Uhr im Café.",
      },
      {
        id: "l1-q2",
        q: "Warum fällt der Kurs aus?",
        qAr: "لماذا لا يُقام الدرس؟",
        options: ["Der Raum ist zu klein.", "Der Lehrer ist krank.", "Es ist Feiertag."],
        correct: 1,
        whyAr: "في (b): Der Lehrer ist krank.",
      },
      {
        id: "l1-q3",
        q: "Was kocht Lena?",
        qAr: "ماذا تطبخ لينا؟",
        options: ["Suppe", "Nudeln", "Kuchen"],
        correct: 1,
        whyAr: "في (c): ich koche heute Abend Nudeln.",
      },
    ],
  },

  /* ═══════════ Teil 2 — Anzeigen: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Anzeige",
    titleAr: "الجزء 2 — إعلان",
    minutes: 6,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الإعلان. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Fahrradwerkstatt Schnell\n" +
      "Wir reparieren Fahrräder für alle Kunden. Reparatur in einer Stunde.\n" +
      "Öffnungszeiten: Montag bis Freitag 9 bis 18 Uhr. Samstag 9 bis 13 Uhr. Sonntag geschlossen.\n" +
      "Kostenlose Luft für die Reifen!",
    statements: [
      { id: "l2-s1", de: "Die Werkstatt repariert Fahrräder.", ar: "الورشة تصلح الدراجات.", isTrue: true, whyAr: "قيل: Wir reparieren Fahrräder." },
      { id: "l2-s2", de: "Am Samstag ist die Werkstatt bis 18 Uhr offen.", ar: "الورشة مفتوحة يوم السبت حتى السادسة.", isTrue: false, whyAr: "قيل: Samstag 9 bis 13 Uhr فقط." },
      { id: "l2-s3", de: "Am Sonntag ist die Werkstatt geschlossen.", ar: "الورشة مغلقة يوم الأحد.", isTrue: true, whyAr: "قيل: Sonntag geschlossen." },
      { id: "l2-s4", de: "Die Luft für die Reifen kostet Geld.", ar: "الهواء للإطارات يكلف مالاً.", isTrue: false, whyAr: "قيل: Kostenlose Luft، أي مجاني." },
    ],
  },

  /* ═══════════ Teil 3 — kurze Texte: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Kurze Texte",
    titleAr: "الجزء 3 — نصوص قصيرة",
    minutes: 7,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "Mein Name ist Karim. Ich komme aus Tunesien und wohne jetzt in Berlin. " +
      "Ich arbeite in einem Restaurant. Am Wochenende spiele ich gern Fußball mit meinen Freunden. " +
      "Meine Schwester lernt Deutsch an der Volkshochschule. Sie wohnt nicht bei mir.",
    questions: [
      {
        id: "l3-q1",
        q: "Wo wohnt Karim?",
        qAr: "أين يسكن كريم؟",
        options: ["In Tunesien", "In Berlin", "In Köln"],
        correct: 1,
        whyAr: "قال: wohne jetzt in Berlin.",
      },
      {
        id: "l3-q2",
        q: "Was macht Karim am Wochenende?",
        qAr: "ماذا يفعل كريم في عطلة نهاية الأسبوع؟",
        options: ["Er arbeitet.", "Er spielt Fußball.", "Er lernt Deutsch."],
        correct: 1,
        whyAr: "قال: spiele ich gern Fußball.",
      },
      {
        id: "l3-q3",
        q: "Wo lernt die Schwester Deutsch?",
        qAr: "أين تتعلم الأخت الألمانية؟",
        options: ["Im Restaurant um die Ecke", "An der Volkshochschule", "Bei Karim zu Hause"],
        correct: 1,
        whyAr: "قيل: an der Volkshochschule.",
      },
    ],
  },

  /* ═══════════ Teil 4 — Alltagstext: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Alltag",
    titleAr: "الجزء 4 — نص من الحياة اليومية",
    minutes: 6,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص وأجب عن السؤالين. اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "Liebe Frau Braun, am Montag habe ich einen Termin beim Zahnarzt um neun Uhr. " +
      "Ich kann deshalb nicht am Meeting um neun Uhr teilnehmen. " +
      "Ich komme um elf Uhr ins Büro. Können wir das Meeting am Dienstag machen? Danke! Herr Yilmaz",
    questions: [
      {
        id: "l4-q1",
        q: "Warum kommt Herr Yilmaz später?",
        qAr: "لماذا يتأخر السيد يلماز؟",
        options: ["Er hat einen Termin beim Zahnarzt.", "Er ist krank und bleibt heute zu Hause.", "Er fährt in den Urlaub."],
        correct: 0,
        whyAr: "قال: einen Termin beim Zahnarzt.",
      },
      {
        id: "l4-q2",
        q: "Was schlägt Herr Yilmaz vor?",
        qAr: "ماذا يقترح السيد يلماز؟",
        options: ["Das Meeting am Dienstag.", "Das Meeting am Montag um zehn.", "Kein Meeting."],
        correct: 0,
        whyAr: "قال: Können wir das Meeting am Dienstag machen?",
      },
    ],
  },
];
