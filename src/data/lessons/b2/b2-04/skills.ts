/**
 * b2-04 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "معرض الكتاب",
        lines: [
          { speaker: "Moderator", de: "Willkommen auf der Buchmesse! Der viel gelesene Autor Sami Ben Ali ist heute da.", ar: "أهلاً في معرض الكتاب! الكاتب الذي يُقرأ كثيراً سامي بن علي هنا اليوم." },
          { speaker: "Autor", de: "Danke! Mein neuer Roman, in drei Jahren geschrieben, ist fertig.", ar: "شكراً! روايتي الجديدة، المكتوبة في ثلاث سنوات، جاهزة." },
          { speaker: "Moderator", de: "Wie fühlen Sie sich, verehrter Autor?", ar: "كيف تشعر، أيها الكاتب المنتظر؟" },
          { speaker: "Autor", de: "Sehr aufgeregt! Die wartenden Leser freuen mich.", ar: "متوتر جداً! القراء المنتظرون يسعدونني." },
        ],
      },
      {
        id: "l2",
        title: "مراجعة كتاب",
        lines: [
          { speaker: "Kritikerin", de: "Der Roman, den ich gelesen habe, ist beeindruckend.", ar: "الرواية التي قرأتها مذهلة." },
          { speaker: "Karim", de: "Was ist das Thema?", ar: "ما الموضوع؟" },
          { speaker: "Kritikerin", de: "Ein reisender Mann entdeckt seine Herkunft. Die erzählte Geschichte ist sehr emotional.", ar: "رجل مسافر يكتشف أصله. القصة المروية عاطفية جداً." },
          { speaker: "Karim", de: "Klingt gut! Ich kaufe das bekannte Buch.", ar: "يبدو جيداً! سأشتري الكتاب المعروف." },
          { speaker: "Kritikerin", de: "Und der Film zum Buch kommt nächstes Jahr in die Kinos.", ar: "وفيلم الرواية سيصدر في السينما العام القادم." },
          { speaker: "Karim", de: "Dann sehe ich mir erst den Film an und lese dann das Buch!", ar: "إذاً سأشاهد الفيلم أولاً ثم أقرأ الكتاب!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie ist der neue Roman?",
        questionAr: "كيف الرواية الجديدة؟",
        options: ["fertig", "lang", "kurz", "schlecht"],
        correctIndex: 0,
        explanation: "قال الكاتب: Mein neuer Roman ... ist fertig.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«lang» لم يصفها الكاتب بالطول.",
          "«kurz» لم يصفها الكاتب بالقصر.",
          "«schlecht» لم يصفها الكاتب بالسوء.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was entdeckt der reisende Mann?",
        questionAr: "ماذا يكتشف الرجل المسافر؟",
        options: ["seine Herkunft", "seinen Beruf", "seinen Freund", "seine Stadt"],
        correctIndex: 0,
        explanation: "قالت الناقدة: Ein reisender Mann entdeckt seine Herkunft.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«seinen Beruf» لم تقل الناقدة إن الرجل يكتشف مهنته.",
          "«seinen Freund» لم تقل الناقدة إن الرجل يكتشف صديقه.",
          "«seine Stadt» لم تقل الناقدة إن الرجل يكتشف مدينته.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie ist die erzählte Geschichte?",
        questionAr: "كيف القصة المروية؟",
        options: ["sehr emotional", "sehr langweilig", "sehr kurz", "sehr lustig"],
        correctIndex: 0,
        explanation: "قالت: Die erzählte Geschichte ist sehr emotional.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«sehr langweilig» عكس ما قالته الناقدة.",
          "«sehr kurz» لم تُذكر كوصف للقصة.",
          "«sehr lustig» لم تُذكر كوصف للقصة.",
        ],
      },
      {
        id: "q4",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie lange hat der Autor an seinem Roman geschrieben?",
        questionAr: "كم استغرق الكاتب في كتابة روايته؟",
        options: ["drei Jahre", "drei Monate", "ein Jahr", "fünf Jahre"],
        correctIndex: 0,
        explanation: "قال الكاتب: in drei Jahren geschrieben — المكتوبة في ثلاث سنوات.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«drei Monate» لم يذكرها الكاتب؛ قال إنه كتبها في ثلاث سنوات.",
          "«ein Jahr» لم يذكرها الكاتب.",
          "«fünf Jahre» لم يذكرها الكاتب.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الأدب: ch، sch، وau",
    items: [
      { de: "die Literatur", ar: "الأدب", note: "tu = تو: ليتِراتور" },
      { de: "der Roman", ar: "الرواية", note: "o مفتوح: رومان" },
      { de: "der Autor", ar: "الكاتب", note: "au = آو: آوتور" },
      { de: "lesen", ar: "يقرأ", note: "s = ز: ليزِن" },
      { de: "das Gedicht", ar: "القصيدة", note: "ch ناعمة (قريبة من خ خفيفة): غِدِيخت" },
      { de: "die Geschichte", ar: "القصة", note: "sch = ش: غِشيشتِه" },
    ],
    tip: "Geschichte = غِشيشتِه — sch مرة، وch ناعمة بعدها. أتقنهما وستنطق القصص بوضوح.",
    shadowing: [
      { de: "Das spielende Kind ist glücklich.", ar: "الطفل اللاعب سعيد.", tip: "spielende — Partizip I" },
      { de: "Der geschriebene Brief liegt hier.", ar: "الرسالة المكتوبة هنا.", tip: "geschriebene — Partizip II" },
      { de: "Die lesende Frau sitzt am Fenster.", ar: "المرأة القارئة تجلس عند النافذة.", tip: "lesende — Partizip I" },
      { de: "Der viel gelesene Autor kommt.", ar: "الكاتب المقروء كثيراً يأتي.", tip: "gelesene — Partizip II" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "كوّن صفة من فعل:",
      prompt: "das Kind, das spielt → (بصفة)",
      acceptedAnswers: ["das spielende Kind", "das spielende Kind."],
      sampleAnswer: "das spielende Kind.",
      explanation: "Partizip I + نهاية صفة: spielende.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ Partizip I أو II:",
      template: "das ___ (spielen) Kind · der ___ (schreiben) Brief · die ___ (lesen) Frau · das ___ (öffnen) Museum",
      blanks: [
        { correct: "spielende", options: ["spielende", "gespielte"] },
        { correct: "geschriebene", options: ["schreibende", "geschriebene"] },
        { correct: "lesende", options: ["lesende", "gelesene"] },
        { correct: "geöffnete", options: ["öffnende", "geöffnete"] },
      ],
      explanation: "نشط → I (-end). منتهي → II (ge-...t).",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: اختصر الجملة النسبية إلى صفة مشتقة:",
      instructionDe: "Kürze den Relativsatz:",
      prompt: "Der Brief, der geschrieben wurde, ... → ...",
      acceptedAnswers: ["der geschriebene Brief", "Der geschriebene Brief"],
      sampleAnswer: "der geschriebene Brief",
      explanation: "الجملة النسبية → Partizip II + نهاية الصفة: der geschriebene Brief.",
      errorType: "grammar",
    },
  ];
