import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-08: اللغات والثقافات — الأفعال مع حروف الجر الثابتة
 */
export const lessonB208: Lesson = {
  id: "b2-08",
  unitId: "b2-08",
  level: "B2",
  order: 1,
  titleDe: "Sprachen und Kulturen",
  titleAr: "اللغات والتبادل الثقافي",
  duration: 45,
  summary:
    "الاختلافات بين الثقافات وتعدد اللغات، الأفعال مع حروف الجر الثابتة (Verben mit Präpositionen): sich interessieren für, warten auf, sich freuen über/auf — وجدول كامل.",

  lernziele: [
    { id: "z1", de: "Ich kann über Sprachen und Kulturen sprechen.", ar: "أن أتحدث عن تعدد اللغات والتبادل الثقافي." },
    { id: "z2", de: "Ich kenne die Verben mit festen Präpositionen.", ar: "أن أتقن الأفعال مع حروف الجر الثابتة وحالاتها." },
    { id: "z3", de: "Ich kann interkulturelle Unterschiede beschreiben.", ar: "أن أصف الاختلافات بين الثقافات." },
      { id: "z4", de: "Ich kann kulturelle Unterschiede analysieren und erklären.", ar: "أن أحلل الاختلافات الثقافية وأشرحها." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "كل فعل ألماني «يلتصق» بحرف جر ثابت: sich interessieren FÜR (يهتم بـ)، warten AUF (ينتظر)، sich freuen ÜBER/AUF (يفرح بـ/على). وحرف الجر يحدد الحالة: für + نصب، auf + نصب (مع هذه الأفعال). احفظ الفعل مع حرفه — مثل حفظ الكلمة مع جنسها!",
    motivatingQuestionDe: "Wie lernt man Sprachen am besten?",
    contextAr:
      "تعدد اللغات والثقافات: موضوع جميل. نضيف أهم قائمة في B2: الأفعال مع حروف الجر الثابتة — أكثر ما يخطئ فيه المتعلمون.",
    contextDe: "Ich interessiere mich sehr für andere Kulturen.",
    connectionToPreviousAr: "تتذكر حروف الجر المكانية (auf dem Tisch) والزمنية (am Montag). اليوم: حروف الجر «الملتصقة بالأفعال» — قائمة تحفظ مع كل فعل.",
    activateVocabulary: [
      { de: "die Sprache", ar: "اللغة" },
      { de: "die Kultur", ar: "الثقافة" },
      { de: "sich interessieren für", ar: "يهتم بـ" },
      { de: "warten auf", ar: "ينتظر" },
      { de: "interkulturell", ar: "بين الثقافات" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر حرف الجر:",
      questionDe: "Ich interessiere mich ___ Musik.",
      options: ["für", "auf", "an", "über"],
      correctIndex: 0,
      explanation: "sich interessieren für (درس المدرسة A2).",
      errorType: "preposition",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر حرف الجر:",
      questionDe: "Ich warte ___ den Bus.",
      options: ["auf", "für", "mit", "an"],
      correctIndex: 0,
      explanation: "warten auf (درس المدينة A1).",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B2: أكمل:",
      template: "Er sagt, er ___ Zeit. (Konjunktiv I)",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
      ],
      explanation: "Konjunktiv I: habe.",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الأفعال مع حروف الجر الثابتة (Verben mit Präpositionen)",
      titleDe: "Verben mit festen Präpositionen",
      explanationAr:
        "كل فعل له حرف جر ثابت وحالة: sich interessieren für + نصب (يهتم بـ)، warten auf + نصب (ينتظر)، sich freuen über/auf (يفرح)، denken an (يفكر في)، sich gewöhnen an (يعتاد)، träumen von (يحلم بـ)، abhängen von (يعتمد على)، sich kümmern um (يعتني بـ)، diskutieren über (يناقش)، sich beschweren über (يشتكي من).",
      whyAr:
        "لماذا «ثابتة»؟ لأن الألمانية لا تسمح بالتبديل: لا يمكنك أن تقول «warten für» — كل فعل «اختار» حرفه عبر التاريخ. الحل: احفظ كل فعل مع حرفه وكأنهما كلمة واحدة: «sich-interessieren-für» وحدة واحدة.",
      table: {
        title: "أهم الأفعال مع حروفها",
        columns: ["الفعل", "حرف الجر", "الحالة", "مثال"],
        rows: [
          { label: "sich interessieren", cells: ["für", "Akk", "Ich interessiere mich für Musik."] },
          { label: "warten", cells: ["auf", "Akk", "Ich warte auf den Bus."] },
          { label: "sich freuen", cells: ["über/auf", "Akk", "Ich freue mich auf den Urlaub."] },
          { label: "denken", cells: ["an", "Akk", "Ich denke an dich."] },
          { label: "träumen", cells: ["von", "Dat", "Ich träume von einer Reise."] },
          { label: "abhängen", cells: ["von", "Dat", "Das hängt von dir ab."] },
          { label: "sich kümmern", cells: ["um", "Akk", "Er kümmert sich um die Kinder."] },
          { label: "diskutieren", cells: ["über", "Akk", "Wir diskutieren über Politik."] },
        ],
      },
      examples: [
        { de: "Ich interessiere mich sehr für andere Kulturen.", ar: "أهتم جداً بالثقافات الأخرى." },
        { de: "Wir freuen uns auf den Besuch.", ar: "نتطلع للزيارة." },
        { de: "Er träumt von einem Studium in Deutschland.", ar: "يحلم بالدراسة في ألمانيا." },
        { de: "Das Verständnis hängt von der Kommunikation ab.", ar: "يعتمد الفهم على التواصل." },
        { de: "Sie kümmert sich um ihre Eltern.", ar: "تعتني بوالديها." },
        { de: "Worüber sprichst du? — Über das Studium.", ar: "عن ماذا تتحدث؟ — عن الدراسة." },
        { de: "Worauf wartest du? — Auf den Bus.", ar: "على ماذا تنتظر؟ — على الحافلة." },
      ],
      comparisonWithArabic:
        "«يهتم بـ» = sich interessieren für — العربية تملك «بـ» بعد الاهتمام. «يحلم بـ» = träumen von. «يعتني بـ» = sich kümmern um. الحروف العربية (بـ، عن، في) تطابق الألمانية تقريباً — احفظ التطابق!",
      eselsbruecke:
        "«الفعل + حرفه = كلمة واحدة»: فكّر بـ «sich-interessieren-für» كوحدة. والقائمة الشهيرة: für (اهتمام)، auf (انتظار/تطلع)، an (تفكير)، von (حلم/اعتماد)، um (اعتناء)، über (نقاش/فرح).",
      commonMistakes: [
        { wrong: "sich interessieren auf (حرف خاطئ)", right: "sich interessieren für", whyAr: "الفعل يحدد حرفه: für." },
        { wrong: "warten für den Bus", right: "warten auf den Bus", whyAr: "warten على: auf." },
        { wrong: "träumen für أم von؟", right: "träumen von (يحلم بـ)", whyAr: "von + Dativ." },
      ],
      relatedRuleComparison: {
        title: "sich freuen auf أم über؟",
        content: "auf = تطلع لمستقبل (Ich freue mich auf den Urlaub). über = فرح بحاضر/ماضٍ (Ich freue mich über das Geschenk). الزمن يحدد الحرف!",
      },
    },
    {
      id: "t2",
      titleAr: "الجسيمات التداولية: doch, ja, mal, eben",
      titleDe: "Erweiterung",
      explanationAr: "الجسيمات (Partikeln) لا تُترجم حرفياً لكنها تنقل النبرة: doch (على العكس/بل)، ja (كما تعلم)، mal (قليلاً/فقط)، eben (ببساطة). مثال: Das ist ja interessant! (هذا مثير فعلاً!) — ja تضيف المفاجأة.",
      whyAr: "لماذا؟ لأن هذه الجسيمات هي سر «الطبيعية» في الألمانية المحكية — غيابها يجعل الكلام جامداً كتابياً.",
      examples: [
        { de: "Komm doch mal vorbei!", ar: "تعال قليلاً! (ودّي)" }, { de: "Das ist eben so.", ar: "الأمر ببساطة هكذا." }
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
        title: "التعدد اللغوي",
        lines: [
          { speaker: "Lehrerin", de: "Warum lernt ihr Sprachen?", ar: "لماذا تتعلمون اللغات؟" },
          { speaker: "Sami", de: "Ich interessiere mich für deutsche Kultur. Und ich träume von einem Job in Deutschland.", ar: "أهتم بالثقافة الألمانية. وأحلم بوظيفة في ألمانيا." },
          { speaker: "Lehrerin", de: "Und du, Anna?", ar: "وأنتِ يا آنا؟" },
          { speaker: "Anna", de: "Ich freue mich auf einen Austausch. Die Kommunikation hängt von der Sprache ab.", ar: "أتطلع إلى تبادل. يعتمد التواصل على اللغة." },
          { speaker: "Lehrerin", de: "Sehr schön! Sprachen öffnen Türen.", ar: "جميل جداً! اللغات تفتح أبواباً." },
        ],
      },
      {
        id: "l2",
        title: "اختلاف ثقافي",
        lines: [
          { speaker: "Karim", de: "In meiner Kultur wartet man nicht auf eine Einladung, man kommt einfach.", ar: "في ثقافتي لا ينتظر المرء دعوة، بل يأتي مباشرة." },
          { speaker: "Mona", de: "In Deutschland denkt man anders darüber. Man fragt immer an.", ar: "في ألمانيا يفكرون بشكل مختلف. يسألون دائماً." },
          { speaker: "Karim", de: "Ich gewöhne mich langsam daran.", ar: "أعتاد على ذلك ببطء." },
          { speaker: "Mona", de: "Das ist gut! Interkulturelles Verständnis braucht Zeit.", ar: "هذا جيد! الفهم بين الثقافات يحتاج وقتاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wovon träumt Sami?",
        questionAr: "بماذا يحلم سامي؟",
        options: ["von einem Job in Deutschland", "von einem Haus", "von einer Reise", "von einem Auto"],
        correctIndex: 0,
        explanation: "قال سامي: Ich träume von einem Job in Deutschland.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Worauf freut sich Anna?",
        questionAr: "على ماذا تتطلع آنا؟",
        options: ["auf einen Austausch", "auf eine Reise", "auf eine Party", "auf ein Buch"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich freue mich auf einen Austausch.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Woran gewöhnt sich Karim?",
        questionAr: "على ماذا يعتاد كريم؟",
        options: ["daran, dass man anfragt", "daran, dass man isst", "daran, dass man schläft", "daran, dass man arbeitet"],
        correctIndex: 0,
        explanation: "قال كريم: Ich gewöhne mich langsam daran (أن يسألوا دائماً).",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الثقافات: sch، ü، وie",
    items: [
      { de: "die Sprache", ar: "اللغة", note: "sp = شپ: شپراخِه" },
      { de: "die Kultur", ar: "الثقافة", note: "u + r: كولتور" },
      { de: "interkulturell", ar: "بين الثقافات", note: "ll: إنتر-كولتورِل" },
      { de: "der Austausch", ar: "التبادل", note: "au = آو + sch = ش: آوس-تاوش" },
      { de: "die Verständigung", ar: "التفاهم", note: "v = ف: فِر-شتنديغونغ" },
      { de: "sich gewöhnen an", ar: "يعتاد على", note: "ö + h: غِفونِن" },
    ],
    tip: "Verständigung = فِر-شتنديغونغ — v ألمانية ڤ/ف. وAustausch = آوس-تاوش — au مرتين تقريباً.",
    shadowing: [
      { de: "Ich interessiere mich für Musik.", ar: "أهتم بالموسيقى.", tip: "sich interessieren für" },
      { de: "Ich warte auf den Bus.", ar: "أنتظر الحافلة.", tip: "warten auf" },
      { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع للعطلة.", tip: "sich freuen auf" },
      { de: "Das hängt von dir ab.", ar: "يعتمد عليك.", tip: "abhängen von — البادئة في النهاية" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة اهتمام:",
      prompt: "«أهتم بالثقافة الألمانية» (sich interessieren für)",
      acceptedAnswers: ["Ich interessiere mich für die deutsche Kultur", "Ich interessiere mich für deutsche Kultur"],
      sampleAnswer: "Ich interessiere mich für die deutsche Kultur.",
      explanation: "sich interessieren für + نصب.",
      errorType: "preposition",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر:",
      template: "Ich interessiere mich ___ Musik. (بـ) Ich warte ___ dich. (على) Ich träume ___ einer Reise. (بـ)",
      blanks: [
        { correct: "für", options: ["für", "auf", "von"] },
        { correct: "auf", options: ["für", "auf", "von"] },
        { correct: "von", options: ["für", "auf", "von"] },
      ],
      explanation: "اهتمام → für. انتظار → auf. حلم → von.",
      errorType: "preposition",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich freue mich auf den Besuch.",
      explanation: "أتطلع للزيارة — sich freuen auf (مستقبل).",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Ich interessiere mich ___ Musik.",
      options: ["für", "auf", "an", "über"],
      correctIndex: 0,
      explanation: "sich interessieren für.",
      errorType: "preposition",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Ich warte ___ den Bus.",
      options: ["auf", "für", "von", "um"],
      correctIndex: 0,
      explanation: "warten auf.",
      errorType: "preposition",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بحرفه:",
      pairs: [
        { left: "sich interessieren", right: "für" },
        { left: "warten", right: "auf" },
        { left: "träumen", right: "von" },
        { left: "sich kümmern", right: "um" },
      ],
      explanation: "أربعة أفعال مع حروفها.",
      errorType: "preposition",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["interessiere", "mich", "Ich", "Musik", "für", "."],
      correctSentence: "Ich interessiere mich für Musik.",
      explanation: "sich interessieren für: mich + für + اسم.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich interessiere mich auf Musik.",
      wrongWord: "auf",
      correctWord: "für",
      options: ["für", "auf", "an", "von"],
      explanation: "sich interessieren für.",
      errorType: "preposition",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر:",
      template: "Wir diskutieren ___ Politik. (عن) Das hängt ___ dir ab. (على) Er denkt ___ dich. (في)",
      blanks: [
        { correct: "über", options: ["über", "von", "um"] },
        { correct: "von", options: ["über", "von", "um"] },
        { correct: "an", options: ["über", "von", "an"] },
      ],
      explanation: "نقاش → über. اعتماد → von. تفكير → an.",
      errorType: "preposition",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "أكمل الجملة:",
      prompt: "«أعتاد على ذلك ببطء» (sich gewöhnen an)",
      acceptedAnswers: ["Ich gewöhne mich langsam daran", "Ich gewöhne mich daran"],
      sampleAnswer: "Ich gewöhne mich langsam daran.",
      explanation: "sich gewöhnen an + daran.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "der Austausch",
      questionAr: "ما معنى الكلمة؟",
      options: ["التبادل", "الزيارة", "الرحلة", "الاجتماع"],
      correctIndex: 0,
      explanation: "der Austausch = التبادل (ثقافي/طلابي).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich freue mich über den Urlaub. (مستقبل)",
      wrongWord: "über",
      correctWord: "auf",
      options: ["auf", "über", "an", "von"],
      explanation: "تطلع لمستقبل → auf. (über للماضي/الحاضر).",
      errorType: "preposition",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Kommunikation hängt von der Sprache ab.",
      explanation: "يعتمد التواصل على اللغة — abhängen von (منفصل).",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "sich interessieren auf", right: "sich interessieren für", whyAr: "الفعل يحدد حرفه." },
      { wrong: "sich freuen über للمستقبل", right: "auf للمستقبل، über للحاضر/الماضي", whyAr: "الزمن يحدد الحرف." },
      { wrong: "träumen für", right: "träumen von", whyAr: "الحلم بـ: von." },
    ],
    eselsbruecken: [
      "«الفعل + حرفه = كلمة واحدة»: sich-interessieren-für.",
      "«الخريطة: für (اهتمام)، auf (انتظار/تطلع)، an (تفكير)، von (حلم)، um (اعتناء)، über (نقاش)».",
    ],
    culturalNote: {
      title: "التعدد اللغوي",
      content:
        "ألمانيا فيها ~20% من السكان من أصول مهاجرة — ومتعددة اللغات. و«der Spracherwerb» (اكتساب اللغة) موضوع بحث. ونصيحة المعلمين: «Sprich von Tag eins an» (تحدث من اليوم الأول) — الأخطاء جزء من التعلم.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Ich interessiere mich ___ Kunst.",
      options: ["für", "auf", "von", "um"],
      correctIndex: 0,
      explanation: "sich interessieren für.",
      errorType: "preposition",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Er träumt ___ einem Haus.",
      options: ["von", "für", "auf", "an"],
      correctIndex: 0,
      explanation: "träumen von.",
      errorType: "preposition",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["auf", "Ich", "freue", "mich", "Urlaub", "den", "."],
      correctSentence: "Ich freue mich auf den Urlaub.",
      explanation: "أتطلع للعطلة — sich freuen auf.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich warte für dich.",
      wrongWord: "für",
      correctWord: "auf",
      options: ["auf", "für", "von", "an"],
      explanation: "warten auf.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر:",
      template: "Sie kümmert sich ___ die Kinder. (بـ) Wir diskutieren ___ das Thema. (عن)",
      blanks: [
        { correct: "um", options: ["um", "für", "auf"] },
        { correct: "über", options: ["über", "von", "an"] },
      ],
      explanation: "اعتناء → um. نقاش → über.",
      errorType: "preposition",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Sprache", ar: "اللغة", example: "Die Sprache verbindet.", exampleAr: "اللغة تربط.", level: "B2" },
    { id: "fc2", de: "die Kultur", ar: "الثقافة", example: "Jede Kultur ist einzigartig.", exampleAr: "كل ثقافة فريدة.", level: "B2" },
    { id: "fc3", de: "der Austausch", ar: "التبادل", example: "Der Austausch ist lehrreich.", exampleAr: "التبادل مفيد.", level: "B2" },
    { id: "fc4", de: "interkulturell", ar: "بين الثقافات", example: "Interkulturelles Lernen.", exampleAr: "تعلم بين الثقافات.", level: "B2" },
    { id: "fc5", de: "sich interessieren für", ar: "يهتم بـ", example: "Ich interessiere mich für Musik.", exampleAr: "أهتم بالموسيقى.", level: "B2" },
    { id: "fc6", de: "warten auf", ar: "ينتظر", example: "Ich warte auf dich.", exampleAr: "أنتظرك.", level: "B2" },
    { id: "fc7", de: "sich freuen auf/über", ar: "يتطلع لـ/يفرح بـ", example: "auf den Urlaub / über das Geschenk", exampleAr: "تطلع للعطلة / فرح بالهدية", level: "B2" },
    { id: "fc8", de: "abhängen von", ar: "يعتمد على", example: "Das hängt von dir ab.", exampleAr: "يعتمد عليك.", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b2-08-1", type: "relay-instructions",
      titleAr: "اشرح سلوكاً ثقافياً ألمانياً لشخص عربي",
      sourceDe: "In Deutschland ist es üblich, sich bei Geschäftstreffen pünktlich zu erscheinen. Verspätungen gelten als unhöflich und werden selten entschuldigt.",
      taskAr: "اشرح بالعربية القاعدة الثقافية: الالتزام بالمواعيد، وكيف يُنظر إلى التأخير — مع مقارنة موجزة بعادات بلدك.",
      modelAnswerAr: "«في ألمانيا من المعتاد الحضور في الموعد في اللقاءات التجارية. يُعد التأخير غير مهذب ونادراً ما يُغتفر. في بلدنا الوضع مختلف غالباً.»",
      keyPointsAr: ["شرحت قاعدة الالتزام بالمواعيد", "نقلت نظرة التأخير", "أضفت مقارنة مع بلدك"],
    },
  ],
      interaction: [
    {
      id: "int-b2-08-1",
      scenarioAr: "موقف عمل بين الثقافات — سوء فهم ثقافي.",
      scenarioDe: "Interkulturelle Missverständnisse im Beruf.",
      strategyAr: "الاستراتيجية: التعامل بحساسية ثقافية وحل سوء الفهم.",
      rounds: [
        {
          speakerDe: "Warum bist du gestern zu spät zum Meeting gekommen?",
          speakerAr: "لماذا تأخرت أمس عن الاجتماع؟",
          options: [
            { de: "Es tut mir leid. In meiner Kultur ist zehn Minuten Verspätung normal. Ich wusste nicht, dass es hier so streng ist. Ich werde mich anpassen.", ar: "آسف. في ثقافتي التأخر عشر دقائق طبيعي. لم أعلم أنه صارم هنا. سأتأقلم.", best: true, replyDe: "Danke für die Erklärung. Verständnis ist der erste Schritt. Pünktlichkeit ist hier wirklich wichtig.", replyAr: "شكراً للتوضيح. الفهم أول خطوة. الالتزام بالمواعيد مهم حقاً هنا." },
            { de: "Zehn Minuten sind doch nichts! Ihr seid zu streng.", ar: "عشر دقائق ليست شيئاً! أنتم صارمون جداً.", best: false, replyDe: "Für uns ist Pünktlichkeit Respekt. Wir können einen Kompromiss finden.", replyAr: "بالنسبة لنا الالتزام احترام. يمكننا إيجاد حل وسط." },
          ],
        },
        {
          speakerDe: "Wie können wir einen Kompromiss finden?",
          speakerAr: "كيف يمكننا إيجاد حل وسط؟",
          options: [
            { de: "Ich verspreche, ab jetzt fünf Minuten früher zu kommen. Vielleicht könnt ihr mir bei dringenden Fällen etwas Toleranz geben.", ar: "أعدك بالحضور قبل الموعد بخمس دقائق من الآن. ربما تمنحونني بعض التسامح في الحالات العاجلة.", best: true, replyDe: "Das ist ein fairer Kompromiss. Willkommen im Team!", replyAr: "هذا حل وسط عادل. مرحباً بك في الفريق!" },
            { de: "Ich kann keine Kompromisse machen, ich komme wann ich will.", ar: "لا أستطيع تقديم تنازلات، سآتي متى شئت.", best: false, replyDe: "Dann wird die Zusammenarbeit schwierig. Pünktlichkeit ist nicht verhandelbar.", replyAr: "إذن سيصعب التعاون. الالتزام غير قابل للتفاوض." },
          ],
        },
      ],
    },
  ],

};