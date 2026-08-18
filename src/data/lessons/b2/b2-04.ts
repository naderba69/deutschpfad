import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-04: الأدب والإعلام المتقدم — Partizip I/II كصفات
 */
export const lessonB204: Lesson = {
  id: "b2-04",
  unitId: "b2-04",
  level: "B2",
  order: 1,
  titleDe: "Literatur und Medien",
  titleAr: "الأدب والإعلام المتقدم",
  duration: 45,
  summary:
    "النصوص الأدبية والمساهمات الإعلامية الراقية، الصفات المشتقة من الفعل (Partizipialkonstruktionen): das spielende Kind, der geschriebene Brief — واختصار الجمل النسبية.",

  lernziele: [
    { id: "z1", de: "Ich kann literarische Texte verstehen.", ar: "أن أفهم النصوص الأدبية والمساهمات الإعلامية الراقية." },
    { id: "z2", de: "Ich kann Partizip I und II als Adjektive benutzen.", ar: "أن أستخدم Partizip I/II كصفات: الطفل اللاعب، الرسالة المكتوبة." },
    { id: "z3", de: "Ich kann Relativsätze durch Partizipien verkürzen.", ar: "أن أختصر الجمل النسبية بالمشاركات." },
      { id: "z4", de: "Ich kann literarische Werke kritisch analysieren.", ar: "أن أحلل الأعمال الأدبية نقدياً." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "قل: «الطفل الذي يلعب» — العربية تحذف «الذي» أحياناً: «الطفل اللاعب». الألمانية تفعل هذا بانتظام: das Kind, das spielt → das spielende Kind (الطفل اللاعب). وللماضي: der Brief, der geschrieben wurde → der geschriebene Brief (الرسالة المكتوبة). هذا أسلوب الأدب والصحافة!",
    motivatingQuestionDe: "Was liest du gern?",
    contextAr:
      "ندخل عالم الأدب والصحافة الراقية: نتعلم المشاركات الصفية — أكثر أساليب النص الألماني أناقةً. بها تقرأ الروايات والمقالات بطلاقة.",
    contextDe: "Der berühmte, viel gelesene Roman.",
    connectionToPreviousAr: "تتذكر الصفات (ein gutes Buch) والنسبية (der Mann, der...) من B1. اليوم: المشاركات — الجمع بينهما: صفة من فعل تعوض الجملة النسبية.",
    activateVocabulary: [
      { de: "die Literatur", ar: "الأدب" },
      { de: "der Roman", ar: "الرواية" },
      { de: "der Beitrag", ar: "المقال/المساهمة" },
      { de: "der Autor", ar: "الكاتب" },
      { de: "lesen", ar: "يقرأ" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر نهاية الصفة:",
      questionDe: "ein ___ (gut) Buch",
      options: ["gutes", "gute", "guten", "guter"],
      correctIndex: 0,
      explanation: "محايد مع ein: gutes (درس الثقافة B1).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر النسبية:",
      questionDe: "Der Mann, ___ dort steht.",
      options: ["der", "den", "dem", "dessen"],
      correctIndex: 0,
      explanation: "فاعل مذكر → der.",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2: أكمل:",
      template: "Ich habe ein Buch ___. (قراءة)",
      blanks: [
        { correct: "gelesen", options: ["gelesen", "gelest", "lesen"] },
      ],
      explanation: "lesen → gelesen (Perfekt).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "المشاركات كصفات (Partizipialkonstruktionen)",
      titleDe: "Partizip I und II als Adjektive",
      explanationAr:
        "Partizip I (فاعل/نشط): جذر + end: das spielende Kind (الطفل اللاعب). Partizip II (مفعول/منتهي): der geschriebene Brief (الرسالة المكتوبة). كلاهما يتصرف كصفة كاملة: ein spielendes Kind، die geschriebenen Briefe. وتختصر الجمل النسبية: der Mann, der arbeitet → der arbeitende Mann.",
      whyAr:
        "لماذا هذا الأسلوب؟ لأنه «مكثف»: كلمة واحدة تعوض جملة كاملة. الصحافة والأدب يحبان الإيجاز: «der viel gelesene Autor» = الكاتب الذي يُقرأ كثيراً — في ثلاث كلمات بدل خمس. هذه علامة القراءة المتقدمة.",
      table: {
        title: "Partizip I وII كصفات",
        columns: ["النوع", "التركيب", "مثال", "المعنى"],
        rows: [
          { label: "Partizip I (نشط)", cells: ["جذر + end", "das spielende Kind", "الطفل اللاعب"] },
          { label: "Partizip II (منتهي)", cells: ["ge + جذر + t/en", "der geschriebene Brief", "الرسالة المكتوبة"] },
          { label: "مع ein", cells: ["تصريف صفة عادي", "ein spielendes Kind", "طفل لاعب"] },
          { label: "اختصار نسبية", cells: ["der, der arbeitet → der arbeitende", "der arbeitende Mann", "الرجل العامل"] },
        ],
      },
      examples: [
        { de: "Das spielende Kind ist glücklich.", ar: "الطفل اللاعب سعيد." },
        { de: "Der geschriebene Brief liegt auf dem Tisch.", ar: "الرسالة المكتوبة على الطاولة." },
        { de: "Die lesende Frau sitzt am Fenster.", ar: "المرأة القارئة تجلس عند النافذة." },
        { de: "Der viel gelesene Autor kommt morgen.", ar: "الكاتب الذي يُقرأ كثيراً يأتي غداً." },
        { de: "Das neu eröffnete Museum ist beeindruckend.", ar: "المتحف المفتوح حديثاً مذهل." },
      ],
      comparisonWithArabic:
        "«الطفل اللاعب» = das spielende Kind — مطابقة تامة مع صيغة «فاعل» العربية! و«الرسالة المكتوبة» = der geschriebene Brief — مطابقة مع «مفعول». العربية تملك نفس البنية (فاعل/مفعول) — الألمانية تفعلها بالمشاركات.",
      eselsbruecke:
        "«-end = فاعل (يلعب)، ge-...t/en = مفعول (مكتوب)» — Partizip I نشط مثل «فاعل»، وII منتهي مثل «مفعول». اسأل: هل الشيء يفعل أم يُفعل؟",
      commonMistakes: [
        { wrong: "das spielend Kind (بدون نهاية صفة)", right: "das spielende Kind", whyAr: "المشارك صفة → ينال نهايات الصفات." },
        { wrong: "der geschrieben Brief", right: "der geschriebene Brief", whyAr: "نهاية الصفة: -e بعد der." },
        { wrong: "Partizip I أم II؟", right: "I = نشط (الماء الغالي: kochendes Wasser). II = منتهي (الماء المغلي: gekochtes Wasser)", whyAr: "الفرق: يفعل الآن أم فُعل سابقاً." },
      ],
      relatedRuleComparison: {
        title: "الاختصار من النسبية",
        content: "Der Mann, der arbeitet → der arbeitende Mann. Die Frau, die liest → die lesende Frau. إذا كان الفعل مضارعاً نشطاً: Partizip I. إذا ماضياً مجهولاً: Partizip II.",
      },
    },
    {
      id: "t2",
      titleAr: "الصفات المشتقة (Partizipialattribute)",
      titleDe: "Erweiterung",
      explanationAr: "تحويل جملة موصولة إلى صفة قبل الاسم: Der Mann, der arbeitet → der arbeitende Mann. مع Partizip II: Das Buch, das gelesen wurde → das gelesene Buch. هذه البنية تختصر الجمل وتضفي رسمية أكاديمية.",
      whyAr: "لماذا؟ لأن النصوص الأكاديمية والأدبية تعتمد هذه البنية بكثافة — وفهمها ضروري لقراءة B2.",
      examples: [
        { de: "Die steigende Arbeitslosigkeit ist ein Problem.", ar: "البطالة المتزايدة مشكلة." }, { de: "Das vorgeschlagene Gesetz wird diskutiert.", ar: "القانون المقترح قيد النقاش." }
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
        title: "معرض الكتاب",
        lines: [
          { speaker: "Moderator", de: "Willkommen auf der Buchmesse! Der viel gelesene Autor Sami Ben Ali ist heute da.", ar: "أهلاً في معرض الكتاب! الكاتب الذي يُقرأ كثيراً سامي بن علي هنا اليوم." },
          { speaker: "Autor", de: "Danke! Mein neuer Roman, der geschriebene in drei Jahren, ist fertig.", ar: "شكراً! روايتي الجديدة، المكتوبة في ثلاث سنوات، جاهزة." },
          { speaker: "Moderator", de: "Wie fühlen Sie sich, der erwartete Autor?", ar: "كيف تشعر، أيها الكاتب المنتظر؟" },
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
          { speaker: "Karim", de: "Klingt gut! Ich kaufe das gelesene... äh, das bekannte Buch.", ar: "يبدو جيداً! سأشتري الكتاب المعروف." },
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
        explanation: "قال الكاتب: der geschriebene in drei Jahren — المكتوبة في ثلاث سنوات.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الأدب: ie، ch، وer",
    items: [
      { de: "die Literatur", ar: "الأدب", note: "tu = تو: ليتِراتور" },
      { de: "der Roman", ar: "الرواية", note: "o مفتوح: رومان" },
      { de: "der Autor", ar: "الكاتب", note: "au = آو: آوتور" },
      { de: "lesen", ar: "يقرأ", note: "s = ز: ليزِن" },
      { de: "das Gedicht", ar: "القصيدة", note: "ch ناعمة: غِديشت" },
      { de: "die Geschichte", ar: "القصة", note: "sch = ش: غِشيشتِه" },
    ],
    tip: "Geschichte = غِشيشتِه — sch مرتين في كلمة واحدة. أتقنها وستنطق القصص بطلاقة.",
    shadowing: [
      { de: "Das spielende Kind ist glücklich.", ar: "الطفل اللاعب سعيد.", tip: "spielende — Partizip I" },
      { de: "Der geschriebene Brief liegt hier.", ar: "الرسالة المكتوبة هنا.", tip: "geschriebene — Partizip II" },
      { de: "Die lesende Frau sitzt am Fenster.", ar: "المرأة القارئة تجلس عند النافذة.", tip: "lesende — Partizip I" },
      { de: "Der viel gelesene Autor kommt.", ar: "الكاتب المقروء كثيراً يأتي.", tip: "gelesene — Partizip II" },
    ],
  },

  writing: [
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
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر المشارك الصحيح:",
      questionDe: "das ___ Kind (يلعب)",
      options: ["spielende", "gespielte", "spielend", "spielt"],
      correctIndex: 0,
      explanation: "نشط مضارع → Partizip I: spielende.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر المشارك الصحيح:",
      questionDe: "der ___ Brief (مكتوب)",
      options: ["geschriebene", "schreibende", "geschrieben", "schreibt"],
      correctIndex: 0,
      explanation: "منتهي → Partizip II: geschriebene.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة الأدب بمعناها:",
      pairs: [
        { left: "die Literatur", right: "الأدب" },
        { left: "der Roman", right: "الرواية" },
        { left: "das Gedicht", right: "القصيدة" },
        { left: "der Autor", right: "الكاتب" },
      ],
      explanation: "أربع كلمات أدبية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Das", "Kind", "ist", "spielende", "glücklich", "."],
      correctSentence: "Das spielende Kind ist glücklich.",
      explanation: "الطفل اللاعب سعيد — الصفة من فعل.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Das spielend Kind ist glücklich.",
      wrongWord: "spielend",
      correctWord: "spielende",
      options: ["spielende", "spielend", "gespielte", "spielt"],
      explanation: "المشارك صفة → نهاية صفة: spielende.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "اختر I أو II:",
      template: "das ___ (kochen) Wasser [الماء الغالي] · das ___ (kochen) Wasser [الماء المغلي]",
      blanks: [
        { correct: "kochende", options: ["kochende", "gekochte"] },
        { correct: "gekochte", options: ["kochende", "gekochte"] },
      ],
      explanation: "يغلي الآن → kochendes. مغلي سابقاً → gekochtes.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اختصار الجملة النسبية:",
      prompt: "Der Mann, der arbeitet → (بصفة)",
      acceptedAnswers: ["der arbeitende Mann", "der arbeitende Mann."],
      sampleAnswer: "der arbeitende Mann.",
      explanation: "النسبية النشطة → Partizip I.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "der Beitrag",
      questionAr: "ما معنى الكلمة؟",
      options: ["المقال/المساهمة", "الكتاب", "المجلة", "الخبر"],
      correctIndex: 0,
      explanation: "der Beitrag = المقال/المساهمة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Die lesend Frau sitzt am Fenster.",
      wrongWord: "lesend",
      correctWord: "lesende",
      options: ["lesende", "lesend", "gelesene", "liest"],
      explanation: "نهاية الصفة المؤنثة: lesende.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Der viel gelesene Autor kommt morgen.",
      explanation: "الكاتب المقروء كثيراً يأتي غداً — Partizip II.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "das spielend Kind", right: "das spielende Kind", whyAr: "نهاية الصفة إلزامية." },
      { wrong: "kochendes أم gekochtes؟", right: "kochendes = يغلي الآن. gekochtes = مغلي", whyAr: "الفرق: نشط/منتهي." },
      { wrong: "المشارك لا يتصرف", right: "يتصرف كصفة كاملة: ein spielendes Kind", whyAr: "تصريف الصفات ينطبق." },
    ],
    eselsbruecken: [
      "«-end = فاعل (يلعب)، ge-...t/en = مفعول (مكتوب)».",
      "«المشارك صفة كاملة»: نفس نهايات الصفات.",
    ],
    culturalNote: {
      title: "الأدب الألماني",
      content:
        "من غوته وشيلر إلى توماس مان وغراس — الأدب الألماني غني. «die Buchmesse» في فرانكفورت أكبر معرض كتب في العالم. والقراءة عادة ألمانية: «Lesen ist wichtig» — ستجد الناس يقرؤون في القطار والحديقة.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المشارك:",
      questionDe: "die ___ Frau (تقرأ)",
      options: ["lesende", "gelesene", "lesend", "liest"],
      correctIndex: 0,
      explanation: "نشط → lesende.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر المشارك:",
      questionDe: "der ___ Brief (مكتوب)",
      options: ["geschriebene", "schreibende", "geschrieben", "schreibt"],
      correctIndex: 0,
      explanation: "منتهي → geschriebene.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Das", "Museum", "ist", "geöffnete", "neu", "beeindruckend", "."],
      correctSentence: "Das neu geöffnete Museum ist beeindruckend.",
      explanation: "المتحف المفتوح حديثاً مذهل.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der geschrieben Brief liegt hier.",
      wrongWord: "geschrieben",
      correctWord: "geschriebene",
      options: ["geschriebene", "geschrieben", "schreibende", "schreibt"],
      explanation: "نهاية الصفة: geschriebene.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "اختر I أو II:",
      template: "der ___ (weinen) Mann [الباكي] · die ___ (verlieren) Zeit [الوقت الضائع]",
      blanks: [
        { correct: "weinende", options: ["weinende", "geweinte"] },
        { correct: "verlorene", options: ["verlierende", "verlorene"] },
      ],
      explanation: "نشط → weinende. منتهي → verlorene.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Literatur", ar: "الأدب", example: "Literatur ist wichtig.", exampleAr: "الأدب مهم.", level: "B2" },
    { id: "fc2", de: "der Roman", ar: "الرواية", example: "Der Roman ist spannend.", exampleAr: "الرواية مشوقة.", level: "B2" },
    { id: "fc3", de: "das Gedicht", ar: "القصيدة", example: "Das Gedicht ist schön.", exampleAr: "القصيدة جميلة.", level: "B2" },
    { id: "fc4", de: "der Autor", ar: "الكاتب", example: "Der Autor ist berühmt.", exampleAr: "الكاتب مشهور.", level: "B2" },
    { id: "fc5", de: "das Partizip I", ar: "المشارك الأول (فاعل)", example: "das spielende Kind", exampleAr: "الطفل اللاعب", level: "B2" },
    { id: "fc6", de: "das Partizip II", ar: "المشارك الثاني (مفعول)", example: "der geschriebene Brief", exampleAr: "الرسالة المكتوبة", level: "B2" },
    { id: "fc7", de: "der Beitrag", ar: "المقال/المساهمة", example: "Ein interessanter Beitrag.", exampleAr: "مقال مثير.", level: "B2" },
    { id: "fc8", de: "die Geschichte", ar: "القصة", example: "Die Geschichte ist emotional.", exampleAr: "القصة عاطفية.", level: "B2" },
    { id: "fc9", de: "der Film", ar: "الفيلم", example: "Der Film zum Buch ist gut.", exampleAr: "فيلم الرواية جيد.", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b2-04-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مراجعة أدبية ألمانية مع نقل النبرة",
      sourceDe: "Der Roman ist ein Meisterwerk der modernen Literatur. Der Autor verbindet poetische Sprache mit gesellschaftskritischen Themen auf beeindruckende Weise.",
      taskAr: "لخّص المراجعة مع نقل نبرة الإعجاب: لماذا يُعد العمل تحفة، وما الذي يميزه.",
      modelAnswerAr: "«الرواية تحفة من الأدب الحديث. يمزج الكاتب اللغة الشعرية بالمواضيع النقدية الاجتماعية بشكل مذهل.»",
      keyPointsAr: ["نقلت الحكم (تحفة)", "ذكرت اللغة الشعرية", "نقلت المواضيع النقدية"],
    },
  ],
      interaction: [
    {
      id: "int-b2-04-1",
      scenarioAr: "نقاش نقدي عن فيلم أو كتاب مع صديق.",
      scenarioDe: "Kritische Diskussion über einen Film oder ein Buch.",
      strategyAr: "الاستراتيجية: نقد بناء مع احترام وجهة نظر الآخر.",
      rounds: [
        {
          speakerDe: "Wie hat dir der Roman gefallen?",
          speakerAr: "كيف أعجبك الكتاب؟",
          options: [
            { de: "Obwohl die Handlung langsam beginnt, entwickelt sich der Roman zu einem tiefgründigen Werk über Identität und Heimat.", ar: "رغم أن الحبكة تبدأ ببطء، يتطور الكتاب إلى عمل عميق عن الهوية والوطن.", best: true, replyDe: "Interessante Perspektive! Was hat dich am meisten beeindruckt?", replyAr: "منظور مثير! ما أكثر ما أدهشك؟" },
            { de: "Der Roman ist langweilig und sinnlos, Punkt.", ar: "الكتاب ممل وبلا معنى، نقطة.", best: false, replyDe: "Eine pauschale Kritik ohne Begründung ist wenig überzeugend.", replyAr: "نقد عام بلا تبرير غير مقنع." },
          ],
        },
        {
          speakerDe: "Was hat dich am meisten beeindruckt?",
          speakerAr: "ما أكثر ما أدهشك؟",
          options: [
            { de: "Die Art, wie der Autor die innere Welt der Figuren beschreibt. Gleichzeitig schafft er eine kritische Reflexion über die Gesellschaft.", ar: "طريقة وصف الكاتب للعالم الداخلي للشخصيات. وفي الوقت نفسه يقدم تأملاً نقدياً عن المجتمع.", best: true, replyDe: "Das ist eine tiefe Analyse. Du hast den Kern des Werks erfasst.", replyAr: "هذا تحليل عميق. لقد أدركت جوهر العمل." },
            { de: "Mich hat nichts beeindruckt, das Buch war leer.", ar: "لم يدهشني شيء، الكتاب كان فارغاً.", best: false, replyDe: "Vielleicht solltest du es noch einmal lesen.", replyAr: "ربما يجب أن تقرأه مرة أخرى." },
          ],
        },
      ],
    },
  ],

};