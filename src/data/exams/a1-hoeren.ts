/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — استماع A1 (بنية شبيهة بـ Start Deutsch 1)
 *  ⚠️ هذا نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · ~20 دقيقة · 15 عنصراً · 100 نقطة (تُوزَّع على الأجزاء)
 *  الصوت: 14 مقطعاً مسجّلاً في `public/audio/exam-a1/` (الجذر)
 *  والنطق الآلي في المتصفح احتياط معلَن عند غياب أي ملف. الجزآن 1 و3 يُشغَّلان مرتين.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const A1_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — kurze Ansagen: richtig / falsch ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Kurze Ansagen",
    titleAr: "الجزء 1 — إعلانات قصيرة",
    minutes: 4,
    points: 20,
    kind: "rf",
    introAr: "تسمع 4 إعلانات قصيرة. لكل إعلان عبارة واحدة: حدّد Richtig أو Falsch. الجزء يُشغَّل مرتين.",
    allowRepeat: true,
    audioText:
      "Ansage 1: Der Bus nach Berlin fährt heute um zehn Uhr von Gleis drei. " +
      "Ansage 2: Das Schwimmbad ist am Montag geschlossen. Am Dienstag ist es von acht bis zwanzig Uhr offen. " +
      "Ansage 3: Herr Müller bittet alle Kunden, an der Kasse zu warten. " +
      "Ansage 4: Der Supermarkt in der Hauptstraße hat am Sonntag geöffnet.",
    statements: [
      { id: "h1-s1", de: "Der Bus fährt um zehn Uhr.", ar: "الحافلة تنطلق الساعة العاشرة.", isTrue: true, whyAr: "قيل: fährt um zehn Uhr." },
      { id: "h1-s2", de: "Das Schwimmbad ist am Dienstag geschlossen.", ar: "المسبح مغلق يوم الثلاثاء.", isTrue: false, whyAr: "قيل: Das Schwimmbad ist am Montag geschlossen، ويفتح يوم الثلاثاء." },
      { id: "h1-s3", de: "Herr Müller bittet die Kunden zu warten.", ar: "السيد مولر يطلب من الزبائن الانتظار.", isTrue: true, whyAr: "قيل: bittet alle Kunden, an der Kasse zu warten." },
      { id: "h1-s4", de: "Der Supermarkt ist am Sonntag geöffnet.", ar: "السوبرماركت مفتوح يوم الأحد.", isTrue: true, whyAr: "قيل: hat am Sonntag geöffnet." },
    ],
  },

  /* ═══════════ Teil 2 — kurze Gespräche: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Kurze Gespräche",
    titleAr: "الجزء 2 — حوارات قصيرة",
    minutes: 5,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات قصيرة. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch 1. Frau: Entschuldigung, wo ist der Bahnhof? Mann: Gehen Sie hier geradeaus, dann links. " +
      "Gespräch 2. Mann: Was möchtest du trinken? Frau: Einen Kaffee, bitte, mit Milch. " +
      "Gespräch 3. Frau: Wann kommst du nach Hause? Mann: Um sechs. Ich habe heute früher Schluss. " +
      "Gespräch 4. Mann: Wie viel kostet das Hemd? Frau: Es kostet fünfzehn Euro.",
    questions: [
      {
        id: "h2-q1",
        q: "Wohin geht die Frau?",
        qAr: "إلى أين تذهب المرأة؟",
        options: ["Zum Bahnhof", "Zur Schule", "Ins Kino"],
        correct: 0,
        whyAr: "سألت: Wo ist der Bahnhof، فالجواب Zum Bahnhof.",
      },
      {
        id: "h2-q2",
        q: "Was trinkt die Frau?",
        qAr: "ماذا تشرب المرأة؟",
        options: ["Ein warmer Tee", "Kaffee mit Milch", "Ein Glas Wasser"],
        correct: 1,
        whyAr: "قالت: Einen Kaffee, bitte, mit Milch.",
      },
      {
        id: "h2-q3",
        q: "Wann kommt der Mann nach Hause?",
        qAr: "متى يعود الرجل إلى البيت؟",
        options: ["Um vier", "Um sechs", "Um acht"],
        correct: 1,
        whyAr: "قال: Um sechs.",
      },
      {
        id: "h2-q4",
        q: "Was kostet das Hemd?",
        qAr: "كم يكلف القميص؟",
        options: ["50 Euro", "15 Euro", "5 Euro"],
        correct: 1,
        whyAr: "قالت: Es kostet fünfzehn Euro.",
      },
    ],
  },

  /* ═══════════ Teil 3 — Gespräch / Durchsage: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Durchsage",
    titleAr: "الجزء 3 — إعلان في المحطة",
    minutes: 5,
    points: 30,
    kind: "mcq",
    introAr: "تسمع إعلاناً عن رحلة قطار. أجب عن 4 أسئلة. يُشغَّل الجزء مرتين.",
    allowRepeat: true,
    audioText:
      "Achtung, Achtung! Der Zug nach Köln hat heute zehn Minuten Verspätung. " +
      "Er fährt von Gleis fünf ab, nicht von Gleis zwei. " +
      "Bitte steigen Sie in den hinteren Waggon ein, dort gibt es mehr Platz. " +
      "Wir bitten um Entschuldigung für die Unannehmlichkeiten.",
    questions: [
      {
        id: "h3-q1",
        q: "Wohin fährt der Zug?",
        qAr: "إلى أين يذهب القطار؟",
        options: ["Nach Köln", "Nach Berlin", "Nach München"],
        correct: 0,
        whyAr: "قيل: Der Zug nach Köln.",
      },
      {
        id: "h3-q2",
        q: "Wie viel Verspätung hat der Zug?",
        qAr: "كم التأخير؟",
        options: ["Fünf Minuten", "Zehn Minuten", "Zwanzig Minuten"],
        correct: 1,
        whyAr: "قيل: zehn Minuten Verspätung.",
      },
      {
        id: "h3-q3",
        q: "Von welchem Gleis fährt der Zug ab?",
        qAr: "من أي رصيف ينطلق القطار؟",
        options: ["Gleis zwei", "Gleis drei", "Gleis fünf"],
        correct: 2,
        whyAr: "قيل: von Gleis fünf ab، لا من رصيف 2.",
      },
      {
        id: "h3-q4",
        q: "Wo gibt es mehr Platz?",
        qAr: "أين توجد مساحة أكبر؟",
        options: ["Im vorderen Waggon", "Im hinteren Waggon", "Im Restaurant"],
        correct: 1,
        whyAr: "قيل: in den hinteren Waggon، لأن هناك مساحة أكبر.",
      },
    ],
  },

  /* ═══════════ Teil 4 — kurzer Dialog: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Telefongespräch",
    titleAr: "الجزء 4 — مكالمة هاتفية",
    minutes: 4,
    points: 30,
    kind: "mcq",
    introAr: "تسمع مكالمة هاتفية قصيرة. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Frau: Hallo, hier ist Anna. Ich rufe wegen der Wohnung an. " +
      "Mann: Ja, die Wohnung ist noch frei. Sie hat zwei Zimmer und einen Balkon. " +
      "Frau: Das klingt gut. Kann ich die Wohnung am Freitag ansehen? " +
      "Mann: Ja, am Freitag um drei Uhr passt es mir.",
    questions: [
      {
        id: "h4-q1",
        q: "Warum ruft Anna an?",
        qAr: "لماذا تتصل آنا؟",
        options: ["Wegen eines Autos", "Wegen der Wohnung", "Wegen eines Termins beim Arzt"],
        correct: 1,
        whyAr: "قالت: Ich rufe wegen der Wohnung an.",
      },
      {
        id: "h4-q2",
        q: "Wie viele Zimmer hat die Wohnung?",
        qAr: "كم غرفة في الشقة؟",
        options: ["Ein Zimmer", "Zwei Zimmer", "Drei Zimmer"],
        correct: 1,
        whyAr: "قيل: Sie hat zwei Zimmer und einen Balkon.",
      },
      {
        id: "h4-q3",
        q: "Wann kann Anna die Wohnung ansehen?",
        qAr: "متى تستطيع آنا معاينة الشقة؟",
        options: ["Am Montag um drei", "Am Freitag um drei", "Am Freitag um zwölf"],
        correct: 1,
        whyAr: "قيل: am Freitag um drei Uhr.",
      },
    ],
  },
];
