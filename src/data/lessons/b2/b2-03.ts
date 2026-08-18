import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-03: القانون والحياة اليومية — الجمل النسبية المتقدمة
 */
export const lessonB203: Lesson = {
  id: "b2-03",
  unitId: "b2-03",
  level: "B2",
  order: 1,
  titleDe: "Recht und Alltag",
  titleAr: "القانون والحياة اليومية",
  duration: 45,
  summary:
    "المفاهيم القانونية الأساسية وفهم العقود، الجمل النسبية المتقدمة (مع حروف الجر: auf den, mit der, wofür) والضمائر النسبية was/wo.",

  lernziele: [
    { id: "z1", de: "Ich kann rechtliche Grundbegriffe verstehen.", ar: "أن أفهم المفاهيم القانونية الأساسية والعقود." },
    { id: "z2", de: "Ich kann Relativsätze mit Präpositionen bilden.", ar: "أن أبني الجمل النسبية مع حروف الجر: auf den, mit der, wofür." },
    { id: "z3", de: "Ich kann was und wo als Relativpronomen benutzen.", ar: "أن أستخدم was وwo كضمائر وصل." },
      { id: "z4", de: "Ich kann einfache rechtliche Texte erklären.", ar: "أن أشرح نصوصاً قانونية بسيطة بلغة مفهومة." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في B1: Der Mann, der dort steht. اليوم نرقّي: الجملة النسبية مع حرف جر: Der Mann, auf den ich warte, ist mein Anwalt. (الرجل الذي أنتظره...). ولاحظ: حرف الجر يبقى والضمير يأخذ حالته: auf + den! وأيضاً wo/was للجمل الكاملة.",
    motivatingQuestionDe: "Was steht im Vertrag?",
    contextAr:
      "القانون يحيط بنا: عقود، شروط، حقوق. نتعلم مفرداته والجمل النسبية المتقدمة — أهم أداة لفهم النصوص القانونية.",
    contextDe: "Das Gesetz, auf das sich alle berufen, ist alt.",
    connectionToPreviousAr: "تتذكر Relativsätze الأساسية (der/die/das) من B1. اليوم: مع حروف الجر + wo/was — القفزة إلى B2.",
    activateVocabulary: [
      { de: "das Recht", ar: "القانون/الحق" },
      { de: "das Gesetz", ar: "القانون" },
      { de: "der Vertrag", ar: "العقد" },
      { de: "der Anwalt", ar: "المحامي" },
      { de: "das Gericht", ar: "المحكمة" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الضمير النسبي:",
      questionDe: "Der Mann, ___ dort steht, ist mein Chef.",
      options: ["der", "den", "dem", "dessen"],
      correctIndex: 0,
      explanation: "فاعل مذكر → der (درس التعليم B1).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الضمير النسبي:",
      questionDe: "Das Buch, ___ ich lese, ist gut. (نصب)",
      options: ["das", "der", "die", "dem"],
      correctIndex: 0,
      explanation: "نصب محايد → das.",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1: أكمل:",
      template: "Ich warte ___ den Bus. (على)",
      blanks: [
        { correct: "auf", options: ["auf", "für", "mit"] },
      ],
      explanation: "warten auf (درس B1).",
      errorType: "preposition",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الجمل النسبية المتقدمة: مع حروف الجر + was/wo",
      titleDe: "Relativsätze mit Präpositionen, was und wo",
      explanationAr:
        "1) مع حرف جر: Der Mann, auf den ich warte... — حرف الجر يبقى والضمير بحالته. 2) was للجمل الكاملة أو الضمائر (alles, nichts): Alles, was ich weiß... 3) wo للمكان: Das Land, wo ich lebe (= in dem). 4) wofür/womit للأسئلة المدمجة: Ich weiß nicht, wofür er sich interessiert.",
      whyAr:
        "لماذا wo بدل in dem؟ لأن wo «يختصر» النسبية المكانية: das Land, wo ich lebe — أسهل وأشيع في الكلام. وwas يختصر النسبية بعد «كل شيء»: Alles, was... هذه الاختصارات علامة الطلاقة.",
      table: {
        title: "الضمائر النسبية المتقدمة",
        columns: ["النوع", "التركيب", "مثال"],
        rows: [
          { label: "حرف جر + ضمير", cells: ["auf/über/mit + den/dem/der", "Der Mann, auf den ich warte"] },
          { label: "wo (مكان)", cells: ["wo = in dem", "Das Land, wo ich lebe"] },
          { label: "was (جملة كاملة)", cells: ["was بعد alles/nichts", "Alles, was ich weiß"] },
          { label: "wo+حرف جر", cells: ["wofür, womit, wobei", "Ich weiß, wofür er sich interessiert"] },
        ],
      },
      examples: [
        { de: "Der Anwalt, mit dem ich gesprochen habe, ist sehr erfahren.", ar: "المحامي الذي تحدثت معه خبير جداً." },
        { de: "Das Gesetz, auf das sich alle berufen, ist alt.", ar: "القانون الذي يستند إليه الجميع قديم." },
        { de: "Alles, was du sagst, kann vor Gericht verwendet werden.", ar: "كل ما تقوله يمكن استخدامه أمام المحكمة." },
        { de: "Das Land, wo ich geboren wurde, ist Tunesien.", ar: "البلد الذي ولدت فيه هو تونس." },
        { de: "Ich weiß nicht, wofür er sich interessiert.", ar: "لا أعرف ما الذي يهتم به." },
      ],
      comparisonWithArabic:
        "«الذي تحدثت معه» = mit dem ich gesprochen habe — العربية تحذف حرف الجر أحياناً («مع») لكن الألمانية تبقيه. و«كل ما تقوله» = Alles, was du sagst — مطابقة! و«البلد الذي ولدت فيه» = wo ich geboren wurde.",
      eselsbruecke:
        "«حرف الجر يسبق الضمير»: auf + den، mit + dem. و«wo = في المكان الذي» — اختصار النسبية المكانية. و«was بعد كل شيء»: Alles, was...",
      commonMistakes: [
        { wrong: "Der Mann, den ich warte auf. (حرف الجر في النهاية)", right: "Der Mann, auf den ich warte.", whyAr: "حرف الجر قبل الضمير النسبي." },
        { wrong: "Alles, das du sagst (das بدل was)", right: "Alles, was du sagst.", whyAr: "بعد alles/nichts: was." },
        { wrong: "wo أم woher أم wohin؟", right: "wo = مكان (حيث). woher = من حيث. wohin = إلى حيث", whyAr: "ثلاثة أسئلة مكان مختلفة." },
      ],
      relatedRuleComparison: {
        title: "wo أم in dem؟",
        content: "كلاهما مكاني: in dem رسمي، wo عامي/أشيع. Das Land, in dem ich lebe = Das Land, wo ich lebe. اختر wo في الكلام وin dem في الكتابة الرسمية.",
      },
    },
    {
      id: "t2",
      titleAr: "تراكيب المبني للمجهول المتقدمة",
      titleDe: "Erweiterung",
      explanationAr: "أنماط متقدمة: sein + zu + مصدر (Das ist zu lösen = يمكن حله)، sein + Partizip II (Das ist gelöst = محلول)، وlassen sich (Das lässt sich lösen = يمكن حله). هذه الثلاث تعبر عن الإمكانية بدرجات مختلفة.",
      whyAr: "لماذا؟ لأن هذه التراكيب شائعة في النصوص القانونية والإدارية (وهي جوهر اختبار B2 القرائي).",
      examples: [
        { de: "Die Aufgabe ist zu lösen.", ar: "المهمة قابلة للحل." }, { de: "Das Problem lässt sich leicht erklären.", ar: "المشكلة يمكن شرحها بسهولة." }
      ],
      comparisonWithArabic: "العربية تعبر عن هذا المعنى بطرق مختلفة، والألمانية تقدم صيغة محددة — التدريب على النمط يبني الدقة.",
      eselsbruecke: "راجع المثالين وحاول إنتاج جملتين مشابهتين عن حياتك — الاستخدام الشخصي يثبت القاعدة.",
      commonMistakes: [
        { wrong: "خلط الصيغة مع الصيغ المشابهة", right: "استخدم القاعدة كما في الأمثلة", whyAr: "التمييز بين الأنماط يأتي بالممارسة." },
      ],
    },
  ],
  listening: {
    items: [
      {
        id: "l1",
        title: "مع المحامي",
        lines: [
          { speaker: "Anwalt", de: "Der Vertrag, den Sie unterschreiben wollen, hat einige Punkte.", ar: "العقد الذي تريد توقيعه فيه نقاط." },
          { speaker: "Sami", de: "Alles, was ich wissen muss, steht hier?", ar: "كل ما يجب أن أعرفه مكتوب هنا؟" },
          { speaker: "Anwalt", de: "Fast. Der Punkt, auf den Sie achten müssen, ist die Kündigungsfrist.", ar: "تقريباً. النقطة التي يجب أن تنتبه لها هي مهلة الإنهاء." },
          { speaker: "Sami", de: "Und das Land, wo ich arbeite, ist relevant?", ar: "والبلد الذي أعمل فيه ذو صلة؟" },
          { speaker: "Anwalt", de: "Ja, das Gesetz, das dort gilt, ist wichtig.", ar: "نعم، القانون الساري هناك مهم." },
        ],
      },
      {
        id: "l2",
        title: "قضية بسيطة",
        lines: [
          { speaker: "Richterin", de: "Der Zeuge, mit dem wir sprechen, hat die Situation gesehen.", ar: "الشاهد الذي نتحدث معه رأى الموقف." },
          { speaker: "Karim", de: "Alles, was er sagt, ist wichtig?", ar: "كل ما يقوله مهم؟" },
          { speaker: "Richterin", de: "Ja. Das Gericht, vor dem wir stehen, hört genau zu.", ar: "نعم. المحكمة التي نقف أمامها تستمع بدقة." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Worauf muss Sami achten?",
        questionAr: "على ماذا يجب أن ينتبه سامي؟",
        options: ["die Kündigungsfrist", "den Preis", "die Lieferung", "die Unterschrift"],
        correctIndex: 0,
        explanation: "قال المحامي: Der Punkt, auf den Sie achten müssen, ist die Kündigungsfrist.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wer hat die Situation gesehen?",
        questionAr: "من رأى الموقف؟",
        options: ["der Zeuge", "der Anwalt", "der Richter", "die Polizei"],
        correctIndex: 0,
        explanation: "قالت القاضية: Der Zeuge, mit dem wir sprechen, hat die Situation gesehen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Vor welchem Gericht stehen sie?",
        questionAr: "أمام أي محكمة يقفون؟",
        options: ["dem Gericht", "dem Parlament", "dem Rathaus", "dem Verein"],
        correctIndex: 0,
        explanation: "قالت: Das Gericht, vor dem wir stehen, hört genau zu.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات القانون: ch، ei، وck",
    items: [
      { de: "das Recht", ar: "الحق/القانون", note: "ch بعد e = ناعمة: رِشت" },
      { de: "das Gesetz", ar: "القانون", note: "tz = تس: غِزِتس" },
      { de: "der Vertrag", ar: "العقد", note: "tr + g: فِرتراغ" },
      { de: "der Anwalt", ar: "المحامي", note: "w = ڤ: آن-ڤالت" },
      { de: "das Gericht", ar: "المحكمة", note: "g = غ + ch ناعمة: غِريشت" },
      { de: "die Strafe", ar: "العقوبة", note: "st = شت: شترافه" },
    ],
    tip: "Gericht = غِريشت — gh ناعمة بعد i. وAnwalt = آن-ڤالت — w ألمانية ڤ.",
    shadowing: [
      { de: "Der Anwalt, mit dem ich sprach, ist erfahren.", ar: "المحامي الذي تحدثت معه خبير.", tip: "mit dem — حرف الجر + ضمير نسبي" },
      { de: "Alles, was du sagst, ist wichtig.", ar: "كل ما تقوله مهم.", tip: "was بعد alles" },
      { de: "Das Land, wo ich lebe.", ar: "البلد الذي أعيش فيه.", tip: "wo = in dem" },
      { de: "Ich weiß, wofür er sich interessiert.", ar: "أعرف ما يهتم به.", tip: "wofür" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة نسبية بحرف جر:",
      prompt: "«الرجل الذي أنتظره» (warten auf) → بالألمانية",
      acceptedAnswers: ["Der Mann, auf den ich warte", "Der Mann, auf den ich warte."],
      sampleAnswer: "Der Mann, auf den ich warte.",
      explanation: "warten auf: حرف الجر قبل الضمير (auf den).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ was/wo/auf den/mit dem:",
      template: "Alles, ___ ich weiß. Das Land, ___ ich lebe. Der Mann, ___ ich warte. Der Anwalt, ___ ich spreche.",
      blanks: [
        { correct: "was", options: ["was", "wo", "auf den"] },
        { correct: "wo", options: ["was", "wo", "mit dem"] },
        { correct: "auf den", options: ["was", "wo", "auf den"] },
        { correct: "mit dem", options: ["was", "wo", "mit dem"] },
      ],
      explanation: "بعد alles → was. مكان → wo. warten auf → auf den. sprechen mit → mit dem.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Das Land, wo ich geboren wurde, ist Tunesien.",
      explanation: "البلد الذي ولدت فيه هو تونس — wo مكانية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر النسبية الصحيحة:",
      questionDe: "Der Mann, ___ ich warte, ist mein Anwalt.",
      options: ["auf den", "den auf", "auf dem", "auf der"],
      correctIndex: 0,
      explanation: "warten auf + نصب مذكر: auf den.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي:",
      questionDe: "Alles, ___ du sagst, ist wichtig.",
      options: ["was", "das", "wo", "der"],
      correctIndex: 0,
      explanation: "بعد alles: was.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة القانون بمعناها:",
      pairs: [
        { left: "das Recht", right: "الحق/القانون" },
        { left: "das Gesetz", right: "القانون" },
        { left: "der Vertrag", right: "العقد" },
        { left: "das Gericht", right: "المحكمة" },
      ],
      explanation: "أربع كلمات قانونية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Der", "auf", "den", "Mann", "warte", "ich", "ist", "Anwalt", "mein", ","],
      correctSentence: "Der Mann, auf den ich warte, ist mein Anwalt.",
      explanation: "حرف الجر + الضمير النسبي قبل الفعل.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Mann, den ich warte auf.",
      wrongWord: "den ich warte auf",
      correctWord: "auf den ich warte",
      options: ["auf den ich warte", "den ich warte auf", "auf dem ich warte", "ich auf den warte"],
      explanation: "حرف الجر قبل الضمير: auf den.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ wo/was/wofür:",
      template: "Das Haus, ___ ich wohne. Alles, ___ ich brauche. Ich weiß, ___ er sich interessiert.",
      blanks: [
        { correct: "wo", options: ["wo", "was", "wofür"] },
        { correct: "was", options: ["wo", "was", "wofür"] },
        { correct: "wofür", options: ["wo", "was", "wofür"] },
      ],
      explanation: "مكان → wo. كل شيء → was. يهتم بـ → wofür.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى wo:",
      prompt: "Das Land, in dem ich lebe → (بـ wo)",
      acceptedAnswers: ["Das Land, wo ich lebe", "Das Land, wo ich lebe."],
      sampleAnswer: "Das Land, wo ich lebe.",
      explanation: "in dem → wo (أشيع).",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "der Zeuge",
      questionAr: "ما معنى الكلمة؟",
      options: ["الشاهد", "المحامي", "القاضي", "المتهم"],
      correctIndex: 0,
      explanation: "der Zeuge = الشاهد (n-Deklination: den Zeugen).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Alles, das er sagt, ist wahr.",
      wrongWord: "das",
      correctWord: "was",
      options: ["was", "das", "wo", "der"],
      explanation: "بعد alles: was.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich weiß nicht, wofür er sich interessiert.",
      explanation: "لا أعرف ما الذي يهتم به — wofür.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Der Mann, den ich warte auf.", right: "Der Mann, auf den ich warte.", whyAr: "حرف الجر قبل الضمير." },
      { wrong: "Alles, das du sagst.", right: "Alles, was du sagst.", whyAr: "بعد alles: was." },
      { wrong: "wo أم woher؟", right: "wo = حيث. woher = من حيث", whyAr: "اتجاه مختلف." },
    ],
    eselsbruecken: [
      "«حرف الجر قبل الضمير النسبي»: auf den, mit dem, für das.",
      "«was بعد كل شيء، wo بعد مكان»: Alles, was... / Das Land, wo...",
    ],
    culturalNote: {
      title: "النظام القضائي الألماني",
      content:
        "ألمانيا دولة قانون: «Rechtsstaat». القضاء مستقل، والمحكمة الدستورية (Bundesverfassungsgericht) في كارلسروه تحمي الدستور. والمحامي: «Rechtsanwalt». وعبارة شائعة: «Ich kenne meine Rechte» (أعرف حقوقي).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر النسبية:",
      questionDe: "Der Anwalt, ___ ich spreche, ist gut.",
      options: ["mit dem", "mit den", "auf den", "über den"],
      correctIndex: 0,
      explanation: "sprechen mit + Dativ: mit dem.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير:",
      questionDe: "Das Land, ___ ich geboren wurde.",
      options: ["wo", "was", "womit", "wofür"],
      correctIndex: 0,
      explanation: "مكان → wo.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Alles", "sagst", "was", "du", "ist", "wichtig", ","],
      correctSentence: "Alles, was du sagst, ist wichtig.",
      explanation: "كل ما تقوله مهم — was بعد alles.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Mann, den ich warte auf.",
      wrongWord: "den ich warte auf",
      correctWord: "auf den ich warte",
      options: ["auf den ich warte", "den ich warte auf", "auf dem ich warte", "ich auf den warte"],
      explanation: "warten auf: auf + den.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Das Buch, ___ ich interessiere, ist neu. (يهتم بـ) Ich weiß, ___ er arbeitet. (أين)",
      blanks: [
        { correct: "wofür", options: ["wofür", "wo", "was"] },
        { correct: "wo", options: ["wofür", "wo", "was"] },
      ],
      explanation: "يهتم بـ → wofür. مكان → wo.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Recht", ar: "الحق/القانون", example: "Ich habe ein Recht.", exampleAr: "لدي حق.", level: "B2" },
    { id: "fc2", de: "das Gesetz", ar: "القانون", example: "Das Gesetz gilt überall.", exampleAr: "يسري القانون في كل مكان.", level: "B2" },
    { id: "fc3", de: "der Vertrag", ar: "العقد", example: "Der Vertrag ist gültig.", exampleAr: "العقد ساري.", level: "B2" },
    { id: "fc4", de: "das Gericht", ar: "المحكمة", example: "Das Gericht entscheidet.", exampleAr: "المحكمة تقرر.", level: "B2" },
    { id: "fc5", de: "auf den / mit dem / für das", ar: "نسبية بحرف جر", example: "Der Mann, auf den ich warte.", exampleAr: "الرجل الذي أنتظره.", level: "B2" },
    { id: "fc6", de: "wo (Relativ)", ar: "حيث (مكان)", example: "Das Land, wo ich lebe.", exampleAr: "البلد الذي أعيش فيه.", level: "B2" },
    { id: "fc7", de: "was (Relativ)", ar: "ما (بعد كل شيء)", example: "Alles, was ich weiß.", exampleAr: "كل ما أعرفه.", level: "B2" },
    { id: "fc8", de: "der Anwalt", ar: "المحامي", example: "Der Anwalt hilft mir.", exampleAr: "المحامي يساعدني.", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b2-03-1", type: "simplify-announcement",
      titleAr: "بسّط نصاً قانونياً بالعربية لشخص عادي",
      sourceDe: "Gemäß § 5 der Hausordnung ist das Rauchen in den Gemeinschaftsräumen untersagt. Zuwiderhandlungen können mit einer Geldstrafe belegt werden.",
      taskAr: "بسّط النص القانوني بالعربية: ما الممنوع، أين، وما العقوبة — بلغة مفهومة.",
      modelAnswerAr: "«وفقاً للمادة 5 من نظام البيت: ممنوع التدخين في الأماكن المشتركة، وقد تُفرض غرامة مالية على المخالفين.»",
      keyPointsAr: ["نقلت المنع (التدخين)", "حددت المكان (الأماكن المشتركة)", "نقلت العقوبة (غرامة)"],
    },
  ],
      interaction: [
    {
      id: "int-b2-03-1",
      scenarioAr: "تناقش قضية قانونية يومية مع جار أو زميل.",
      scenarioDe: "Diskussion über eine rechtliche Alltagsfrage.",
      strategyAr: "الاستراتيجية: شرح موقف قانوني وإقناع بأدلة.",
      rounds: [
        {
          speakerDe: "Mein Nachbar macht nachts laute Musik. Was soll ich tun?",
          speakerAr: "جارتي تشغّل موسيقى صاخبة ليلاً. ماذا أفعل؟",
          options: [
            { de: "Du solltest zuerst höflich mit ihr sprechen. Falls das nicht hilft, kannst du dich bei der Hausverwaltung beschweren.", ar: "يجب أن تتحدث معها بأدب أولاً. إذا لم ينفع، يمكنك التقدم بشكوى لإدارة البناء.", best: true, replyDe: "Guter Rat. Aber was ist, wenn sie aggressiv reagiert?", replyAr: "نصيحة جيدة. لكن ماذا لو ردت بعدوانية؟" },
            { de: "Du solltest sofort die Polizei rufen und schreien.", ar: "يجب أن تستدعي الشرطة فوراً وتصرخ.", best: false, replyDe: "Das wäre übertrieben. Zuerst das Gespräch suchen.", replyAr: "هذا مبالغ فيه. ابحث عن الحوار أولاً." },
          ],
        },
        {
          speakerDe: "Was ist, wenn sie aggressiv reagiert?",
          speakerAr: "ماذا لو ردت بعدوانية؟",
          options: [
            { de: "In dem Fall solltest du die Situation dokumentieren und dich offiziell beschweren. Ruhezeiten sind gesetzlich geschützt.", ar: "في هذه الحالة وثّق الموقف وقدم شكوى رسمية. أوقات الهدوء محمية قانونياً.", best: true, replyDe: "Das klingt nach einem sinnvollen Vorgehen.", replyAr: "يبدو إجراءً منطقياً." },
            { de: "Dann solltest du einfach umziehen und alles aufgeben.", ar: "إذن يجب أن تنتقل وتتخلى عن كل شيء.", best: false, replyDe: "Das ist keine Lösung, es gibt rechtliche Wege.", replyAr: "هذا ليس حلاً، توجد طرق قانونية." },
          ],
        },
      ],
    },
  ],

};