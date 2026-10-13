/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — قراءة A2 (بنية شبيهة بـ Goethe-Zertifikat A2)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Lesen: 4 أجزاء · ~30 دقيقة · 14 عنصراً
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamLesenTeil } from "@/types/exam";

export const A2_LESEN: ExamLesenTeil[] = [
  /* ═══════════ Teil 1 — Kurznachrichten: Auswahl ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Nachrichten",
    titleAr: "الجزء 1 — رسائل",
    minutes: 7,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ الرسائل. لكل سؤال اختر الجواب الصحيح من بين 3 خيارات.",
    text:
      "(a) Liebe Sara, ich habe leider die Verabredung vergessen. Können wir morgen um drei treffen? Lars\n" +
      "(b) Hallo Familie Müller, am Samstag feiern wir Opas Geburtstag. Bitte bringt einen Salat mit! Jana\n" +
      "(c) Achtung Kunden: Die Bibliothek ist wegen Renovierung bis Ende März geschlossen.",
    questions: [
      {
        id: "a2l1-q1",
        q: "Was hat Lars vergessen?",
        qAr: "ماذا نسي لارس؟",
        options: ["Das Buch", "Die Verabredung", "Den Namen von Sara"],
        correct: 1,
        whyAr: "في (a): ich habe leider die Verabredung vergessen.",
      },
      {
        id: "a2l1-q2",
        q: "Was sollen die Gäste zur Feier mitbringen?",
        qAr: "ماذا يجب أن يحضر الضيوف إلى الحفل؟",
        options: ["Kuchen", "Einen Salat", "Blumen"],
        correct: 1,
        whyAr: "في (b): bringt einen Salat mit.",
      },
      {
        id: "a2l1-q3",
        q: "Warum ist die Bibliothek geschlossen?",
        qAr: "لماذا المكتبة مغلقة؟",
        options: ["Wegen eines Feiertags", "Wegen Renovierung", "Wegen Personalmangels"],
        correct: 1,
        whyAr: "في (c): wegen Renovierung bis Ende März geschlossen.",
      },
    ],
  },

  /* ═══════════ Teil 2 — Anzeige: richtig / falsch ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Wohnungsanzeige",
    titleAr: "الجزء 2 — إعلان سكن",
    minutes: 7,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الإعلان. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Zu vermieten: 2-Zimmer-Wohnung in Köln-Ehrenfeld, 58 m², zweiter Stock mit Aufzug.\n" +
      "Miete: 780 Euro warm, Kaution drei Monatsmieten. Die Wohnung ist ab 1. Juli frei.\n" +
      "Haustiere sind nicht erlaubt. Besichtigung nur nach Terminvereinbarung unter 0221-5550.",
    statements: [
      { id: "a2l2-s1", de: "Die Wohnung hat einen Aufzug.", ar: "في الشقة مصعد.", isTrue: true, whyAr: "قيل: zweiter Stock mit Aufzug." },
      { id: "a2l2-s2", de: "Die Miete kostet 780 Euro ohne Nebenkosten.", ar: "الإيجار 780 يورو دون التكاليف الإضافية.", isTrue: false, whyAr: "قيل: 780 Euro warm، أي شامل التكاليف." },
      { id: "a2l2-s3", de: "Man kann die Wohnung sofort besichtigen.", ar: "يمكن معاينة الشقة فوراً.", isTrue: false, whyAr: "قيل: Besichtigung nur nach Terminvereinbarung، أي بموعد مسبق." },
      { id: "a2l2-s4", de: "Mit einem Hund darf man einziehen.", ar: "يُسمح بالسكن مع كلب.", isTrue: false, whyAr: "قيل: Haustiere sind nicht erlaubt." },
    ],
  },

  /* ═══════════ Teil 3 — Texte: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Kurzer Bericht",
    titleAr: "الجزء 3 — تقرير قصير",
    minutes: 8,
    points: 25,
    kind: "mcq",
    introAr: "اقرأ النص وأجب عن الأسئلة باختيار الخيار الصحيح من بين 3.",
    text:
      "Letzten Sommer habe ich zum ersten Mal an einem Sprachkurs in Berlin teilgenommen. " +
      "Der Unterricht war sehr interessant, aber am Anfang habe ich viele Fehler gemacht. " +
      "Mit der Zeit wurde es besser. Heute kann ich mich im Alltag gut verständigen. " +
      "Ich empfehle jedem, im Ausland einen Kurs zu besuchen, weil man dort viel schneller lernt.",
    questions: [
      {
        id: "a2l3-q1",
        q: "Wo hat die Person den Kurs besucht?",
        qAr: "أين حضر الشخص الدورة؟",
        options: ["In Hamburg", "In Berlin", "Im Ausland, in Wien"],
        correct: 1,
        whyAr: "قال: an einem Sprachkurs in Berlin.",
      },
      {
        id: "a2l3-q2",
        q: "Wie war der Anfang?",
        qAr: "كيف كانت البداية؟",
        options: ["Sehr leicht", "Schwierig, mit vielen Fehlern", "Langweilig"],
        correct: 1,
        whyAr: "قال: habe ich viele Fehler gemacht.",
      },
      {
        id: "a2l3-q3",
        q: "Was empfiehlt die Person?",
        qAr: "ماذا يوصي الشخص؟",
        options: ["Zu Hause zu lernen", "Einen Kurs im Ausland zu besuchen", "Ein Buch zu kaufen"],
        correct: 1,
        whyAr: "قال: ich empfehle jedem, im Ausland einen Kurs zu besuchen.",
      },
    ],
  },

  /* ═══════════ Teil 4 — Alltagstexte: richtig / falsch ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Aushang im Betrieb",
    titleAr: "الجزء 4 — إعلان في مكان العمل",
    minutes: 8,
    points: 25,
    kind: "rf",
    introAr: "اقرأ الإعلان. لكل عبارة حدّد Richtig أو Falsch.",
    text:
      "Liebe Kolleginnen und Kollegen,\n" +
      "ab nächster Woche gibt es in der Kantine ein neues Mittagsmenü. Es gibt jeden Tag ein vegetarisches Gericht.\n" +
      "Die Kantine ist montags geschlossen, weil dann renoviert wird. Bitte melden Sie Allergien bis Freitag bei Frau Koch.\n" +
      "Viele Grüße, die Personalabteilung",
    statements: [
      { id: "a2l4-s1", de: "Jeden Tag gibt es ein vegetarisches Gericht.", ar: "كل يوم توجد وجبة نباتية.", isTrue: true, whyAr: "قيل: jeden Tag ein vegetarisches Gericht." },
      { id: "a2l4-s2", de: "Die Kantine ist am Montag geöffnet.", ar: "المطعم مفتوح يوم الاثنين.", isTrue: false, whyAr: "قيل: montags geschlossen." },
      { id: "a2l4-s3", de: "Allergien soll man bis Freitag melden.", ar: "يجب الإبلاغ عن الحساسية حتى الجمعة.", isTrue: true, whyAr: "قيل: bis Freitag bei Frau Koch." },
      { id: "a2l4-s4", de: "Das neue Menü beginnt heute.", ar: "القائمة الجديدة تبدأ اليوم.", isTrue: false, whyAr: "قيل: ab nächster Woche." },
    ],
  },
];
