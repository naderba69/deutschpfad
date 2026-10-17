/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج تدريبي — استماع A2 (بنية شبيهة بـ Goethe-Zertifikat A2)
 *  ⚠️ نموذج تدريبي من إعداد المنصة، وليس نصاً رسمياً من Goethe-Institut.
 *  Hören: 4 أجزاء · ~25 دقيقة · 15 عنصراً
 *  الجزآن 1 و3 يُشغَّلان مرتين، والباقي مرة واحدة.
 *  الصوت: 14 مقطعاً مسجّلاً في `public/audio/exam-a2/` (الجذر)،
 *  والنطق الآلي في المتصفح احتياط معلَن عند غياب أي ملف.
 * ═══════════════════════════════════════════════════════════
 */
import type { ExamHoerenTeil } from "@/types/exam";

export const A2_HOEREN: ExamHoerenTeil[] = [
  /* ═══════════ Teil 1 — Ansagen: richtig / falsch ═══════════ */
  {
    teil: 1,
    title: "Teil 1 — Ansagen am Bahnhof",
    titleAr: "الجزء 1 — إعلانات في المحطة",
    minutes: 5,
    points: 20,
    kind: "rf",
    introAr: "تسمع 4 إعلانات. لكل إعلان عبارة واحدة: حدّد Richtig أو Falsch. يُشغَّل الجزء مرتين.",
    allowRepeat: true,
    audioText:
      "Ansage 1: Der Zug nach Hamburg fällt heute aus. Bitte nehmen Sie den Bus um zwölf Uhr. " +
      "Ansage 2: Die Bäckerei am Bahnhof hat ab Montag bis acht Uhr geöffnet. " +
      "Ansage 3: Das Fundbüro finden Sie neben dem Ausgang Süd. " +
      "Ansage 4: Der Zug nach Leipzig hat fünf Minuten Verspätung, er fährt von Gleis sieben.",
    statements: [
      { id: "a2h1-s1", de: "Der Zug nach Hamburg fährt heute.", ar: "القطار إلى هامبورغ يسير اليوم.", isTrue: false, whyAr: "قيل: Der Zug nach Hamburg fällt heute aus، ويُستبدل بحافلة." },
      { id: "a2h1-s2", de: "Die Bäckerei öffnet am Montag um acht Uhr.", ar: "المخبز يفتح يوم الاثنين الساعة الثامنة.", isTrue: false, whyAr: "قيل: ab Montag bis acht Uhr geöffnet، أي حتى الثامنة وليس منها." },
      { id: "a2h1-s3", de: "Das Fundbüro ist beim Ausgang Süd.", ar: "مكتب المفقودات عند مخرج الجنوب.", isTrue: true, whyAr: "قيل: neben dem Ausgang Süd." },
      { id: "a2h1-s4", de: "Der Zug nach Leipzig fährt von Gleis sieben.", ar: "القطار إلى لايبزيغ ينطلق من الرصيف السابع.", isTrue: true, whyAr: "قيل: er fährt von Gleis sieben." },
    ],
  },

  /* ═══════════ Teil 2 — Gespräche: Auswahl ═══════════ */
  {
    teil: 2,
    title: "Teil 2 — Gespräche",
    titleAr: "الجزء 2 — حوارات",
    minutes: 6,
    points: 20,
    kind: "mcq",
    introAr: "تسمع 4 حوارات قصيرة. لكل سؤال اختر الإجابة الصحيحة من بين 3 خيارات. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Gespräch 1. Frau: Hast du gestern den Film gesehen? Mann: Nein, ich war zu müde. " +
      "Gespräch 2. Mann: Können wir das Meeting auf Donnerstag verschieben? Frau: Ja, am Donnerstag habe ich Zeit. " +
      "Gespräch 3. Frau: Wie kommst du zur Arbeit? Mann: Ich fahre jeden Tag mit dem Fahrrad. " +
      "Gespräch 4. Mann: Hast du schon Pläne für den Urlaub? Frau: Ja, wir fahren im Juli nach Spanien.",
    questions: [
      {
        id: "a2h2-q1",
        q: "Warum hat der Mann den Film nicht gesehen?",
        qAr: "لماذا لم يشاهد الرجل الفيلم؟",
        options: ["Er war krank.", "Er war zu müde.", "Er hatte keine Zeit für das Kino."],
        correct: 1,
        whyAr: "قال: ich war zu müde.",
      },
      {
        id: "a2h2-q2",
        q: "Wann ist der Termin jetzt?",
        qAr: "متى الموعد الآن؟",
        options: ["Am Montag früh", "Am Donnerstag", "Am Freitag Abend"],
        correct: 1,
        whyAr: "قالت: am Donnerstag habe ich Zeit.",
      },
      {
        id: "a2h2-q3",
        q: "Wie fährt der Mann zur Arbeit?",
        qAr: "كيف يذهب الرجل إلى العمل؟",
        options: ["Mit dem Auto", "Mit dem Bus", "Mit dem Fahrrad"],
        correct: 2,
        whyAr: "قال: Ich fahre jeden Tag mit dem Fahrrad.",
      },
      {
        id: "a2h2-q4",
        q: "Wohin fährt die Familie im Juli?",
        qAr: "إلى أين تسافر العائلة في تموز؟",
        options: ["Nach Italien", "Nach Spanien", "Nach Deutschland"],
        correct: 1,
        whyAr: "قالت: im Juli nach Spanien.",
      },
    ],
  },

  /* ═══════════ Teil 3 — Durchsage / Nachricht: Auswahl ═══════════ */
  {
    teil: 3,
    title: "Teil 3 — Nachricht auf dem Anrufbeantworter",
    titleAr: "الجزء 3 — رسالة على جهاز الرد",
    minutes: 6,
    points: 30,
    kind: "mcq",
    introAr: "تسمع رسالة على جهاز الرد. أجب عن 4 أسئلة. يُشغَّل الجزء مرتين.",
    allowRepeat: true,
    audioText:
      "Hallo Julia, hier ist Daniel. Ich rufe wegen unseres Treffens an. " +
      "Leider muss ich den Termin am Samstag absagen, weil ich krank bin. " +
      "Können wir uns nächste Woche treffen? Am Dienstag um achtzehn Uhr hätte ich Zeit. " +
      "Ruf mich bitte bis morgen Abend an. Danke!",
    questions: [
      {
        id: "a2h3-q1",
        q: "Warum ruft Daniel an?",
        qAr: "لماذا يتصل دانيال؟",
        options: ["Um eine Einladung zu schicken", "Um ein Treffen abzusagen", "Um einen Termin beim Arzt zu machen"],
        correct: 1,
        whyAr: "قال: muss ich den Termin am Samstag absagen.",
      },
      {
        id: "a2h3-q2",
        q: "Warum kann Daniel nicht kommen?",
        qAr: "لماذا لا يستطيع دانيال الحضور؟",
        options: ["Er muss arbeiten.", "Er ist leider krank.", "Er hat kein Geld."],
        correct: 1,
        whyAr: "قال: weil ich krank bin.",
      },
      {
        id: "a2h3-q3",
        q: "Wann hätte Daniel Zeit?",
        qAr: "متى يكون لدى دانيال وقت؟",
        options: ["Am Dienstag um achtzehn Uhr", "Am Samstag um achtzehn Uhr", "Am Dienstag um acht Uhr"],
        correct: 0,
        whyAr: "قال: Am Dienstag um achtzehn Uhr hätte ich Zeit.",
      },
      {
        id: "a2h3-q4",
        q: "Bis wann soll Julia zurückrufen?",
        qAr: "حتى متى تعيد جوليا الاتصال؟",
        options: ["Bis heute Abend", "Bis morgen Abend", "Bis nächste Woche"],
        correct: 1,
        whyAr: "قال: Ruf mich bitte bis morgen Abend an.",
      },
    ],
  },

  /* ═══════════ Teil 4 — Telefongespräch: Auswahl ═══════════ */
  {
    teil: 4,
    title: "Teil 4 — Telefongespräch beim Arzt",
    titleAr: "الجزء 4 — مكالمة هاتفية مع العيادة",
    minutes: 4,
    points: 30,
    kind: "mcq",
    introAr: "تسمع مكالمة بين مريضة وسكرتيرة العيادة. أجب عن 3 أسئلة. يُشغَّل الجزء مرة واحدة.",
    audioText:
      "Frau: Guten Tag, hier ist Maria Weber. Ich möchte einen Termin beim Doktor machen. " +
      "Sekretärin: Haben Sie am Mittwoch um zehn Uhr Zeit? " +
      "Frau: Am Mittwoch geht es leider nicht. Haben Sie am Freitag etwas frei? " +
      "Sekretärin: Ja, am Freitag um halb neun. Bringen Sie bitte Ihre Versicherungskarte mit.",
    questions: [
      {
        id: "a2h4-q1",
        q: "Was möchte Frau Weber?",
        qAr: "ماذا تريد السيدة فيبر؟",
        options: ["Einen Termin beim Arzt", "Eine Rechnung bezahlen", "Ein Rezept abholen"],
        correct: 0,
        whyAr: "قالت: einen Termin beim Doktor machen.",
      },
      {
        id: "a2h4-q2",
        q: "Warum passt der Mittwoch nicht?",
        qAr: "لماذا لا يناسبها الأربعاء؟",
        options: ["Sie ist im Urlaub.", "Am Mittwoch geht es nicht.", "Der Doktor ist krank."],
        correct: 1,
        whyAr: "قالت: Am Mittwoch geht es leider nicht. لم تذكر سبباً.",
      },
      {
        id: "a2h4-q3",
        q: "Was soll Frau Weber mitbringen?",
        qAr: "ماذا يجب أن تحضر السيدة فيبر؟",
        options: ["Ihren Reisepass", "Ihre Versicherungskarte", "Ein aktuelles Passfoto"],
        correct: 1,
        whyAr: "قالت السكرتيرة: Bringen Sie bitte Ihre Versicherungskarte mit.",
      },
    ],
  },
];
