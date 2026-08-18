import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-05: الصحة والوقاية — Konjunktiv II المتقدم + عبارات الشرط
 */
export const lessonB105: Lesson = {
  id: "b1-05",
  unitId: "b1-05",
  level: "B1",
  order: 1,
  titleDe: "Gesundheit und Prävention",
  titleAr: "الصحة والوقاية",
  duration: 40,
  summary:
    "الحياة الصحية والوقاية، صيغة الشرط المتقدمة (hätte/wäre + Partizip II)، والجمل الشرطية الكاملة: Wenn... dann... (لو... لـ...).",

  lernziele: [
    { id: "z1", de: "Ich kann über Gesundheit und Sport sprechen.", ar: "أن أتحدث عن الصحة والرياضة والوقاية." },
    { id: "z2", de: "Ich kann den Konjunktiv II in der Vergangenheit bilden: hätte/wäre + Partizip II.", ar: "أن أصوغ الشرطية في الماضي: كنت سأفعل (hätte/wäre + تصريف ثالث)." },
    { id: "z3", de: "Ich kann Wenn-Sätze bilden.", ar: "أن أبني الجمل الشرطية: لو... لـ..." },
      { id: "z4", de: "Ich kann die Hauptaussage eines Artikels zusammenfassen.", ar: "أن ألخص الفكرة الرئيسية لمقال." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في الدرس السابق: Ich würde reisen (كنت سأسافر — الآن). ماذا لو أردت الماضي: «كنت سأسافر أمس لو كان الطقس جيداً»؟ هنا نحتاج hätte/wäre + Partizip II! قارن: würde + Infinitiv (الآن) مقابل hätte + Partizip II (الماضي).",
    motivatingQuestionDe: "Was hättest du anders gemacht?",
    contextAr:
      "نستكمل صيغة الشرط ببعدها الزمني: الماضي الشرطي (كان قد كان سيفعل...). ونربطها بالجمل الشرطية الكاملة — أهم بنية في B1.",
    contextDe: "Wenn ich früher Sport gemacht hätte, wäre ich jetzt fitter.",
    connectionToPreviousAr: "تتذكر würde/wäre/hätte من درس الإعلام. اليوم: بعد الماضي — hätte/wäre + Partizip II — ونظام الجمل الشرطية الكامل.",
    activateVocabulary: [
      { de: "die Gesundheit", ar: "الصحة" },
      { de: "die Prävention", ar: "الوقاية" },
      { de: "der Sport", ar: "الرياضة" },
      { de: "fit", ar: "لائق" },
      { de: "die Bewegung", ar: "الحركة/النشاط" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الصيغة الصحيحة:",
      questionDe: "Wenn ich Zeit ___, würde ich kommen.",
      options: ["hätte", "habe", "hatte", "haben"],
      correctIndex: 0,
      explanation: "الشرط: hätte (درس الإعلام).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر المعنى:",
      questionDe: "der Sport",
      options: ["الرياضة", "الصحة", "الغذاء", "النوم"],
      correctIndex: 0,
      explanation: "der Sport = الرياضة (درس الهوايات).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2: أكمل:",
      template: "Ich habe ___. (صداع)",
      blanks: [
        { correct: "Kopfschmerzen", options: ["Kopfschmerzen", "Bauchschmerzen", "Halsschmerzen"] },
      ],
      explanation: "Kopfschmerzen = صداع (درس الصحة A2).",
      errorType: "vocabulary",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الشرطية في الماضي: hätte/wäre + Partizip II",
      titleDe: "Konjunktiv II der Vergangenheit",
      explanationAr:
        "للتعبير عن «ما كان يمكن أن يحدث ولم يحدث»: hätte/wäre (Konjunktiv) + Partizip II في النهاية: Ich hätte Sport gemacht (كنت سأمارس الرياضة — لكن لم أفعل). Ich wäre gegangen (كنت سأذهب — لكن لم أذهب). مع حروف: als ob (كما لو).",
      whyAr:
        "لماذا نحتاج ماضياً شرطياً؟ لأنه أساس الندم والافتراضات الماضية — في المحادثة والنصوص: Ich hätte gern... (كنت أودّ — في المطعم!) وWenn ich gewusst hätte... (لو كنت أعرف...). هذه «ندم المهاجر» الأشهر في ألمانيا!",
      table: {
        title: "الشرطية في الماضي",
        columns: ["الفعل", "الآن (würde + Inf)", "الماضي (hätte/wäre + PII)"],
        rows: [
          { label: "machen", cells: ["würde machen", "hätte gemacht"] },
          { label: "gehen", cells: ["würde gehen", "wäre gegangen"] },
          { label: "kommen", cells: ["würde kommen", "wäre gekommen"] },
          { label: "haben", cells: ["hätte", "hätte gehabt"] },
        ],
      },
      examples: [
        { de: "Ich hätte gern einen Kaffee gehabt.", ar: "كنت أود قهوة (كنت سأحب أن يكون عندي قهوة)." },
        { de: "Wenn ich früher Sport gemacht hätte, wäre ich fitter.", ar: "لو كنت مارست الرياضة مبكراً لكنت أليق." },
        { de: "Ich wäre gestern gekommen, aber ich war krank.", ar: "كنت سآتي أمس لكنني كنت مريضاً." },
        { de: "Er hätte das Buch gelesen, wenn er Zeit gehabt hätte.", ar: "كان سيقرأ الكتاب لو كان عنده وقت." },
        { de: "Sie tut so, als ob sie alles wüsste.", ar: "تتصرف كما لو أنها تعرف كل شيء." },
      ],
      comparisonWithArabic:
        "«لو كنت مارست الرياضة، لكنت أليق» — العربية: لو + ماضٍ + لكنت. الألمانية: Wenn + hätte gemacht + wäre fitter. نفس المنطق: افتراض ماضٍ غير محقق.",
      eselsbruecke:
        "«الندم = hätte/wäre + Partizip II» — كل «لو كنت...» في الماضي تستخدمها. و«als ob = كما لو»: تصرف كما لو كان يعرف كل شيء.",
      commonMistakes: [
        { wrong: "Ich hätte gern einen Kaffee. (مضارع شرطي) مقابل (Ich hätte einen Kaffee gehabt = ماضٍ شرطي)", right: "كلاهما صحيح لكن بزمنين مختلفين", whyAr: "hätte + اسم = الآن. hätte + Partizip II = ماضٍ." },
        { wrong: "Wenn ich gewusst hätte, ich wäre gekommen. (ترتيب)", right: "Wenn ich gewusst hätte, wäre ich gekommen.", whyAr: "الجملة الثانوية أولاً → الفعل الرئيسي بعدها." },
        { wrong: "als ob مع فعل في منتصف الجملة", right: "als ob + الفعل في النهاية: als ob er alles wüsste", whyAr: "als ob ثانوية → فعلها في النهاية." },
      ],
      relatedRuleComparison: {
        title: "würde + Infinitiv أم hätte + Partizip II؟",
        content: "الآن/المستقبل الافتراضي: würde + Infinitiv (Ich würde gehen). الماضي غير المحقق: hätte/wäre + Partizip II (Ich wäre gegangen). اسأل: هل الكلام عن الماضي؟ نعم → Partizip II.",
      },
    },
    {
      id: "t2",
      titleAr: "الكلام المنقول: Konjunktiv I",
      titleDe: "Erweiterung",
      explanationAr: "عند نقل كلام شخص آخر نحول الفعل إلى Konjunktiv I: Er sagt, er habe keine Zeit. الصيغة: من المضارع نأخذ الجذر ونضيف -e, -est, -e, -en, -et, -en. ملاحظة: عندما يطابق Konjunktiv I المضارع نستخدم Konjunktiv II كبديل.",
      whyAr: "لماذا؟ لأن نقل الأخبار والآراء (الأساس في B1 الإعلامي) يتطلب هذا البناء.",
      examples: [
        { de: "Die Politikerin sagt, die Lage sei stabil.", ar: "تقول السياسية إن الوضع مستقر." }, { de: "Er behauptet, er wisse die Antwort.", ar: "يزعم أنه يعرف الإجابة." }
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
        title: "الندم على العادات",
        lines: [
          { speaker: "Anna", de: "Ich hätte früher mehr Sport machen sollen.", ar: "كان ينبغي أن أمارس الرياضة أكثر مبكراً." },
          { speaker: "Karim", de: "Warum?", ar: "لماذا؟" },
          { speaker: "Anna", de: "Wenn ich regelmäßig trainiert hätte, wäre ich jetzt fitter.", ar: "لو كنت تدربت بانتظام لكنت الآن أليق." },
          { speaker: "Karim", de: "Stimmt. Und ich hätte weniger Süßigkeiten essen sollen!", ar: "صحيح. وكنت أنا قد أكلت حلويات أقل!" },
          { speaker: "Anna", de: "Lass uns jetzt anfangen!", ar: "لنبدأ الآن!" },
        ],
      },
      {
        id: "l2",
        title: "نصائح صحية",
        lines: [
          { speaker: "Arzt", de: "Sie sollten mehr Wasser trinken und sich bewegen.", ar: "يجب أن تشرب ماءً أكثر وتتحرك." },
          { speaker: "Sami", de: "Und wenn ich das gemacht hätte, wäre ich gesünder?", ar: "ولو كنت فعلت ذلك لكنت أصح؟" },
          { speaker: "Arzt", de: "Ja, bestimmt! Die Prävention ist sehr wichtig.", ar: "نعم بالتأكيد! الوقاية مهمة جداً." },
          { speaker: "Sami", de: "Ich hätte früher kommen sollen.", ar: "كان ينبغي أن آتي مبكراً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hätte Anna früher machen sollen?",
        questionAr: "ماذا كان ينبغي أن تفعل آنا مبكراً؟",
        options: ["mehr Sport", "weniger schlafen", "mehr essen", "weniger arbeiten"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich hätte früher mehr Sport machen sollen.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was empfiehlt der Arzt?",
        questionAr: "ماذا يوصي الطبيب؟",
        options: ["Wasser trinken und Bewegung", "Tabletten nur", "Bettruhe", "wenig essen"],
        correctIndex: 0,
        explanation: "قال الطبيب: Sie sollten mehr Wasser trinken und sich bewegen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was sagt Sami am Ende?",
        questionAr: "ماذا يقول سامي في النهاية؟",
        options: ["Ich hätte früher kommen sollen", "Ich bin gesund", "Ich gehe jetzt", "Ich brauche Tabletten"],
        correctIndex: 0,
        explanation: "قال سامي: Ich hätte früher kommen sollen.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الصحة: hätte، wäre، وsch",
    items: [
      { de: "hätte", ar: "كان سيملك (شرطي)", note: "ä + tt: هِتِّه" },
      { de: "wäre", ar: "كان سيكون (شرطي)", note: "ä مفتوح: ڤيرِه" },
      { de: "gesund", ar: "سليم", note: "g = غ + u: غِزونت" },
      { de: "die Prävention", ar: "الوقاية", note: "p + ä: پريڤِنتسيون" },
      { de: "trainieren", ar: "يتدرب", note: "ei = آي: تراينيرن" },
      { de: "die Süßigkeiten", ar: "الحلويات", note: "ü + ß: زوسيغكايتن" },
    ],
    tip: "Süßigkeiten = زوسيغكايتن — كلمة فيها ü وß معاً. قسّمها: زوس + يغ + كايتن.",
    shadowing: [
      { de: "Ich hätte Sport gemacht.", ar: "كنت سأمارس الرياضة.", tip: "hätte gemacht — ماضٍ شرطي" },
      { de: "Wenn ich Zeit gehabt hätte...", ar: "لو كان عندي وقت...", tip: "gehabt hätte — الفعل في النهاية" },
      { de: "Ich wäre gekommen, aber...", ar: "كنت سآتي لكن...", tip: "wäre gekommen (حركة → sein)" },
      { de: "Du solltest mehr schlafen.", ar: "كان ينبغي أن تنام أكثر.", tip: "solltest = زولتِست" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب ندمك بالشرطية الماضية:",
      prompt: "اكتب: «كنت سأمارس الرياضة» (hätte + Partizip II)",
      acceptedAnswers: ["Ich hätte Sport gemacht", "Ich hätte Sport gemacht."],
      sampleAnswer: "Ich hätte Sport gemacht.",
      explanation: "الماضي الشرطي: hätte + gemacht.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ hätte/wäre + التصريف:",
      template: "Ich ___ früher ___ (kommen). Wenn ich Zeit ___ (haben), ___ ich ___ (lernen).",
      blanks: [
        { correct: "wäre ... gekommen", options: ["wäre ... gekommen", "hätte ... gekommen", "wäre ... gekommt"] },
        { correct: "gehabt hätte", options: ["gehabt hätte", "hatte gehabt", "hätte gehabt"] },
        { correct: "hätte ... gelernt", options: ["hätte ... gelernt", "wäre ... gelernt", "hätte ... gelernt"] },
      ],
      explanation: "kommen حركة → wäre gekommen. haben → hätte gehabt. lernen → hätte gelernt.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wenn ich Zeit gehabt hätte, wäre ich gekommen.",
      explanation: "لو كان عندي وقت لكنت أتيت — شرطية ماضية كاملة.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الشرطية الماضية:",
      questionDe: "Ich ___ früher ___ (kommen).",
      options: ["wäre ... gekommen", "hätte ... gekommen", "wäre ... gekommt", "habe ... gekommen"],
      correctIndex: 0,
      explanation: "kommen حركة → wäre gekommen.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الشرطية الماضية:",
      questionDe: "Er ___ das Buch ___. (قراءة)",
      options: ["hätte ... gelesen", "wäre ... gelesen", "hätte ... gelesen", "hätte ... lesen"],
      correctIndex: 0,
      explanation: "lesen عادي → hätte gelesen.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل العبارة بمعناها:",
      pairs: [
        { left: "die Gesundheit", right: "الصحة" },
        { left: "die Prävention", right: "الوقاية" },
        { left: "die Bewegung", right: "الحركة" },
        { left: "fit", right: "لائق" },
      ],
      explanation: "أربع كلمات صحية أساسية لـ B1.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Wenn", "ich", "gehabt", "hätte", "Zeit", "wäre", "gekommen", "ich", ","],
      correctSentence: "Wenn ich Zeit gehabt hätte, wäre ich gekommen.",
      explanation: "لو كان عندي وقت لكنت أتيت — شرطية ماضية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Wenn ich Zeit gehabt hätte, ich wäre gekommen.",
      wrongWord: "ich wäre",
      correctWord: "wäre ich",
      options: ["wäre ich", "ich wäre", "wäre ich gekommen", "ich gekommen wäre"],
      explanation: "الجملة الثانوية أولاً → الفعل الرئيسي بعدها مباشرة.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ hätte أو wäre:",
      template: "Ich ___ gegangen (حركة). Sie ___ es gemacht (فعل). Wir ___ gekommen (حركة).",
      blanks: [
        { correct: "wäre", options: ["wäre", "hätte"] },
        { correct: "hätte", options: ["wäre", "hätte"] },
        { correct: "wären", options: ["wären", "hätten"] },
      ],
      explanation: "الحركة → wäre. الفعل العادي → hätte.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى شرطية ماضية:",
      prompt: "Ich lerne Deutsch. → (لو كنت أعرف سابقاً لكنت تعلمت مبكراً)",
      acceptedAnswers: ["Ich hätte früher Deutsch gelernt", "Ich hätte früher Deutsch gelernt."],
      sampleAnswer: "Ich hätte früher Deutsch gelernt.",
      explanation: "الندم: hätte früher gelernt.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich hätte gern einen Kaffee.",
      questionAr: "ما معنى الجملة؟",
      options: ["أود قهوة (مهذب)", "كنت أملك قهوة", "أشرب قهوة الآن", "شربت قهوة أمس"],
      correctIndex: 0,
      explanation: "Ich hätte gern = أودّ (طلب مهذب).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Sie tut so, als ob sie alles weiß.",
      wrongWord: "weiß",
      correctWord: "wüsste",
      options: ["wüsste", "weiß", "gewusst", "weißt"],
      explanation: "als ob + Konjunktiv II: als ob sie alles wüsste.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich hätte früher mehr Sport machen sollen.",
      explanation: "كان ينبغي أن أمارس الرياضة أكثر مبكراً — sollen في الماضي الشرطي.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Wenn ich Zeit gehabt hätte, ich wäre gekommen.", right: "...wäre ich gekommen.", whyAr: "الفعل بعد الجملة الثانوية مباشرة." },
      { wrong: "Ich hätte gegangen (haben بدل sein)", right: "Ich wäre gegangen.", whyAr: "gehen حركة → wäre." },
      { wrong: "als ob + Indikativ", right: "als ob + Konjunktiv II (wüsste)", whyAr: "كما لو = شرطية." },
    ],
    eselsbruecken: [
      "«الندم: hätte/wäre + Partizip II» — كل «لو كنت...» ماضية.",
      "«als ob = كما لو» — تتبعها شرطية دائماً.",
    ],
    culturalNote: {
      title: "الصحة في ألمانيا",
      content:
        "الألمان يمارسون الرياضة كثيراً: «Fitnessstudio» (نادٍ رياضي) منتشر، و«Sportverein» (نادٍ رياضي تطوعي). وعبارة شائعة: «Sport ist Mord» (الرياضة قتل!) — يقالها من لا يحب الرياضة مازحاً! والوقاية: «Vorsorgeuntersuchung» (فحص وقائي) تشجعه شركات التأمين.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الشرطية الماضية:",
      questionDe: "Ich ___ gestern ___. (ذهاب)",
      options: ["wäre ... gegangen", "hätte ... gegangen", "wäre ... gegeht", "habe ... gegangen"],
      correctIndex: 0,
      explanation: "gehen حركة → wäre gegangen.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الشرطية الماضية:",
      questionDe: "Sie ___ es ___. (فعل)",
      options: ["hätte ... gemacht", "wäre ... gemacht", "hätte ... machen", "hat ... gemacht"],
      correctIndex: 0,
      explanation: "machen عادي → hätte gemacht.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["wäre", "früher", "gekommen", "Ich", "geworden", "fit", "wenn", "ich", "Sport", "hätte", "gemacht", ","],
      correctSentence: "Wenn ich Sport gemacht hätte, wäre ich früher fit geworden.",
      explanation: "لو كنت مارست الرياضة لكنت أليق مبكراً.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich hätte gestern gegangen.",
      wrongWord: "hätte ... gegangen",
      correctWord: "wäre ... gegangen",
      options: ["wäre ... gegangen", "hätte ... gegangen", "wäre ... gegeht", "habe ... gegangen"],
      explanation: "gehen حركة → wäre.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Wenn ich ___ (يعرف), hätte ich anders gehandelt. Er tut so, als ob er alles ___.",
      blanks: [
        { correct: "gewusst hätte", options: ["gewusst hätte", "wüsste", "weiß"] },
        { correct: "wüsste", options: ["wüsste", "weiß", "gewusst"] },
      ],
      explanation: "gewusst hätte (ماضٍ شرطي) + wüsste (als ob).",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Gesundheit", ar: "الصحة", example: "Gesundheit ist wichtig.", exampleAr: "الصحة مهمة.", level: "B1" },
    { id: "fc2", de: "die Prävention", ar: "الوقاية", example: "Prävention ist besser als Heilung.", exampleAr: "الوقاية خير من العلاج.", level: "B1" },
    { id: "fc3", de: "fit", ar: "لائق", example: "Ich bin fit.", exampleAr: "أنا لائق.", level: "B1" },
    { id: "fc4", de: "trainieren", ar: "يتدرب", example: "Ich trainiere dreimal pro Woche.", exampleAr: "أتدرب ثلاث مرات أسبوعياً.", level: "B1" },
    { id: "fc5", de: "hätte + Partizip II", ar: "كنت سأفعل (ماضٍ شرطي)", example: "Ich hätte gemacht.", exampleAr: "كنت سأفعل.", level: "B1" },
    { id: "fc6", de: "wäre + Partizip II", ar: "كنت سأذهب (ماضٍ شرطي حركة)", example: "Ich wäre gegangen.", exampleAr: "كنت سأذهب.", level: "B1" },
    { id: "fc7", de: "als ob", ar: "كما لو", example: "als ob er alles wüsste", exampleAr: "كما لو أنه يعرف كل شيء", level: "B1" },
    { id: "fc8", de: "die Bewegung", ar: "الحركة/النشاط", example: "Bewegung ist gesund.", exampleAr: "الحركة صحية.", level: "B1" },
  ],

  mediation: [
    {
      id: "med-b1-05-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً ونقل موقف الكاتب بالعربية",
      sourceDe: "Viele Städte planen, mehr Fahrradwege zu bauen. Die Politiker sagen, dass das gut für die Umwelt ist. Einige Bürger sind aber dagegen, weil sie Parkplätze verlieren.",
      taskAr: "انقل الخبر بالعربية مع ذكر وجهتي النظر (المؤيدون والمعارضون) دون إبداء رأيك الخاص.",
      modelAnswerAr: "«مدن كثيرة تخطط لبناء المزيد من مسارات الدراجات. يقول السياسيون إن ذلك مفيد للبيئة. لكن بعض المواطنين يعارضون لأنهم سيفقدون مواقف السيارات.»",
      keyPointsAr: ["نقلت الفكرة الرئيسية (مسارات دراجات)", "ذكرت موقف المؤيدين", "ذكرت موقف المعارضين (مواقف السيارات)"],
    },
  ],
  interaction: [
    {
      id: "int-b1-05-1",
      scenarioAr: "نقاش مع زميل عن الأخبار المزيفة (Fake News).",
      scenarioDe: "Diskussion über Fake News mit einem Kollegen.",
      strategyAr: "الاستراتيجية: إبداء رأي مبرر، الاستشهاد بأمثلة، والاعتراض بلطف.",
      rounds: [
        {
          speakerDe: "Findest du, dass Fake News ein großes Problem sind?",
          speakerAr: "هل تجد أن الأخبار المزيفة مشكلة كبيرة؟",
          options: [
            { de: "Ja, meiner Meinung nach sind sie sehr gefährlich, weil viele Menschen sie nicht erkennen.", ar: "نعم، في رأيي إنها خطيرة جداً لأن كثيراً من الناس لا يكتشفونها.", best: true, replyDe: "Das stimmt. Hast du ein Beispiel?", replyAr: "هذا صحيح. هل لديك مثال؟" },
            { de: "Nein, das Problem ist übertrieben.", ar: "لا، المشكلة مبالغ فيها.", best: false, replyDe: "Interessant. Aber Studien zeigen das Gegenteil.", replyAr: "مثير للاهتمام. لكن الدراسات تظهر العكس." },
          ],
        },
        {
          speakerDe: "Hast du ein Beispiel für Fake News?",
          speakerAr: "هل لديك مثال على الأخبار المزيفة؟",
          options: [
            { de: "Ja, letztes Jahr gab es falsche Meldungen über Impfstoffe. Viele Menschen haben ihnen geglaubt.", ar: "نعم، العام الماضي كانت هناك أخبار كاذبة عن اللقاحات. كثيرون صدقوها.", best: true, replyDe: "Das ist ein gutes Beispiel. Wie kann man sie erkennen?", replyAr: "هذا مثال جيد. كيف يمكن اكتشافها؟" },
            { de: "Nein, ich habe kein Beispiel.", ar: "لا، ليس لدي مثال.", best: false, replyDe: "Ohne Beispiel ist die Diskussion schwierig.", replyAr: "بدون مثال يصعب النقاش." },
          ],
        },
        {
          speakerDe: "Wie kann man Fake News erkennen?",
          speakerAr: "كيف يمكن اكتشاف الأخبار المزيفة؟",
          options: [
            { de: "Man sollte die Quelle prüfen und verschiedene Nachrichten vergleichen. Außerdem sollte man kritisch denken.", ar: "يجب فحص المصدر ومقارنة الأخبار المختلفة. كما يجب التفكير النقدي.", best: true, replyDe: "Sehr gute Tipps! Ich werde sie anwenden.", replyAr: "نصائح ممتازة! سأطبقها." },
            { de: "Das ist unmöglich zu erkennen.", ar: "من المستحيل اكتشافها.", best: false, replyDe: "Das ist zu pessimistisch. Es gibt konkrete Methoden.", replyAr: "هذا تشاؤم مفرط. توجد طرق ملموسة." },
          ],
        },
      ],
    },
  ],
};
