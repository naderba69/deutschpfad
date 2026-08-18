import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-04: الإعلام والمجتمع — Konjunktiv II (صيغة الشرط) — جزء أول
 */
export const lessonB104: Lesson = {
  id: "b1-04",
  unitId: "b1-04",
  level: "B1",
  order: 1,
  titleDe: "Medien und Gesellschaft",
  titleAr: "الإعلام والمجتمع",
  duration: 40,
  summary:
    "النظر النقدي للإعلام، صيغة الشرط (Konjunktiv II): würde + Infinitiv والأفعال الشائعة (wäre, hätte, könnte) — للتمني والافتراض والتهذيب.",

  lernziele: [
    { id: "z1", de: "Ich kann Medien kritisch betrachten.", ar: "أن أنظر للإعلام نظرة نقدية." },
    { id: "z2", de: "Ich kann den Konjunktiv II bilden: würde + Infinitiv.", ar: "أن أصوغ صيغة الشرط: سوف/لو (würde + مصدر)." },
    { id: "z3", de: "Ich kann die wichtigen Formen benutzen: wäre, hätte, könnte.", ar: "أن أستخدم الأشكال الشائعة: كان سيكون، كان سيملك، كان يستطيع." },
      { id: "z4", de: "Ich kann über Medien und ihre Rolle in der Gesellschaft sprechen.", ar: "أن أتحدث عن الإعلام ودوره في المجتمع." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "قل بالعربية: «لو كنت غنياً، لسافرت». لاحظت «لو... لـ»؟ الألمانية تملك صيغة كاملة لذلك اسمها Konjunktiv II. وأهم أداتها: würde (سوف/كان) + المصدر. خمّن: كيف نقول «كنت سأسافر»؟",
    motivatingQuestionDe: "Was würdest du machen, wenn du reich wärst?",
    contextAr:
      "ندخل أعمق صيغة في B1: الشرطية. بها نعبر عن الأحلام والافتراضات والنصائح المهذبة — وكل شيء غير واقعي.",
    contextDe: "Ich würde gern mehr Nachrichten lesen, wenn ich Zeit hätte.",
    connectionToPreviousAr: "تتذكر werden (يصبح + مجهول). اليوم: würde — صيغة شرطية من werden: Ich würde = كنت سأفعل. ثلاثة استخدامات لwerden في مستوى واحد!",
    activateVocabulary: [
      { de: "die Gesellschaft", ar: "المجتمع" },
      { de: "die Meinung", ar: "الرأي" },
      { de: "kritisch", ar: "نقدي" },
      { de: "der Einfluss", ar: "التأثير" },
      { de: "glauben", ar: "يعتقد" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر تصريف werden:",
      questionDe: "Ich ___ müde. (أصبح)",
      options: ["werde", "wirst", "wird", "werden"],
      correctIndex: 0,
      explanation: "مع ich: werde (درس الطقس).",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر المجهول:",
      questionDe: "Das Haus ___ gebaut. (يُبنى)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "مجهول مضارع: wird gebaut (درس البيئة).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2: أكمل:",
      template: "Ich finde, dass der Film gut ___.",
      blanks: [
        { correct: "ist", options: ["ist", "sein", "wird"] },
      ],
      explanation: "dass + فعل في النهاية (درس الإعلام).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "صيغة الشرط (Konjunktiv II): würde + Infinitiv",
      titleDe: "Der Konjunktiv II: würde, wäre, hätte, könnte",
      explanationAr:
        "Konjunktiv II = غير واقعي/مؤدب: Ich würde reisen (كنت سأسافر). التركيب: würde + Infinitiv في النهاية. الأشكال الشائعة: wäre (كان سيكون)، hätte (كان سيملك)، könnte (كان يستطيع). الاستخدامات: التمني (Ich wünschte)، الافتراض (Wenn ich Zeit hätte...)، النصيحة المهذبة (Du solltest)، والتهذيب (Könnten Sie...?).",
      whyAr:
        "لماذا «صيغة» كاملة وليست كلمة؟ لأن الألمانية تميز بوضوح بين الواقع (Indikativ: ich habe) وغير الواقع (Konjunktiv II: ich hätte). هذا يمنع اللبس: «Ich hätte gern» (أودّ — مؤدب) مقابل «Ich habe» (عندي — حقيقي).",
      table: {
        title: "أشكال Konjunktiv II الأساسية",
        columns: ["الفعل", "Indikativ", "Konjunktiv II", "مثال"],
        rows: [
          { label: "werden", cells: ["wird", "würde", "Ich würde reisen."] },
          { label: "sein", cells: ["ist", "wäre", "Wenn ich reich wäre..."] },
          { label: "haben", cells: ["hat", "hätte", "Ich hätte gern Zeit."] },
          { label: "können", cells: ["kann", "könnte", "Könnten Sie helfen?"] },
          { label: "sollen", cells: ["soll", "sollte", "Du solltest lernen."] },
        ],
      },
      examples: [
        { de: "Ich würde gern nach Deutschland reisen.", ar: "كنت أحب أن أسافر إلى ألمانيا." },
        { de: "Wenn ich Zeit hätte, würde ich mehr lesen.", ar: "لو كان عندي وقت لقرأت أكثر." },
        { de: "Ich wäre lieber zu Hause geblieben.", ar: "كنت أفضل البقاء في البيت." },
        { de: "Könnten Sie das bitte wiederholen?", ar: "هل يمكنكم تكرار ذلك من فضلك؟ (مهذب جداً)" },
        { de: "Du solltest mehr Wasser trinken.", ar: "كان ينبغي أن تشرب ماءً أكثر." },
      ],
      comparisonWithArabic:
        "«لو... لـ» = Wenn + Konjunktiv II. «كنت سأسافر» = Ich würde reisen. والتهذيب: «هل يمكنكم؟» = Könnten Sie? — نفس فكرة «من فضلك» لكن بصيغة شرطية.",
      eselsbruecke:
        "«würde = كنت سأفعل» — كل أمنية تبدأ بـ würde. و«wäre = كان سيكون، hätte = كان سيملك، könnte = كان يستطيع» — رباعية الحلم!",
      commonMistakes: [
        { wrong: "Wenn ich Zeit habe, würde ich... (خلط Indikativ مع Konjunktiv)", right: "Wenn ich Zeit hätte, würde ich...", whyAr: "الشرط غير الواقعي: hätte (Konjunktiv) وليس habe." },
        { wrong: "Ich würde gehen nach Deutschland.", right: "Ich würde nach Deutschland gehen.", whyAr: "المصدر في النهاية: würde ... gehen." },
        { wrong: "würde أم werde؟", right: "werde = سأصبح (واقع). würde = كنت سأفعل (غير واقع)", whyAr: "الفرق: واقع مقابل افتراض." },
      ],
      relatedRuleComparison: {
        title: "würde أم würde + gern؟",
        content: "Ich würde gern... = أودّ (مؤدب). Ich würde... = كنت سأفعل (افتراض). أضف gern للرغبة المهذبة — وتذكر: möchten أسهل للطلبات اليومية.",
      },
    },
    {
      id: "t2",
      titleAr: "Konjunktiv II: الافتراضات والرغبات",
      titleDe: "Erweiterung",
      explanationAr: "Konjunktiv II يعبر عن: الرغبات (Ich möchte...)، الافتراضات (Wenn ich Zeit hätte...)، والمجاملات (Ich würde sagen...). الصيغ: würde + مصدر (الأسهل)، والصيغ الخاصة: wäre (يكون), hätte (يملك), könnte (يستطيع).",
      whyAr: "لماذا؟ لأن Konjunktiv II أساس الأدب الألماني — الطلبات المهذبة تعتمد عليه (Könnten Sie...?).",
      examples: [
        { de: "Ich würde gern mehr reisen.", ar: "أود السفر أكثر." }, { de: "Wenn ich Millionär wäre, würde ich helfen.", ar: "لو كنت مليونيراً لساعدت." }
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
        title: "أحلام في المستقبل",
        lines: [
          { speaker: "Moderator", de: "Was würden Sie machen, wenn Sie viel Geld hätten?", ar: "ماذا كنت ستفعل لو كان لديك مال كثير؟" },
          { speaker: "Sami", de: "Ich würde ein Haus am Strand kaufen und reisen.", ar: "كنت سأشتري بيتاً على الشاطئ وأسافر." },
          { speaker: "Moderator", de: "Und Sie, Frau Weber?", ar: "وأنتِ يا سيدة فيبر؟" },
          { speaker: "Frau Weber", de: "Ich würde eine Stiftung für Bildung gründen.", ar: "كنت سأنشئ مؤسسة للتعليم." },
          { speaker: "Moderator", de: "Wäre das nicht schön?", ar: "أليس ذلك جميلاً؟" },
        ],
      },
      {
        id: "l2",
        title: "نصيحة مهذبة",
        lines: [
          { speaker: "Anna", de: "Ich bin so gestresst.", ar: "أنا متوترة جداً." },
          { speaker: "Karim", de: "Du solltest weniger arbeiten und mehr schlafen.", ar: "كان ينبغي أن تعملي أقل وتنامي أكثر." },
          { speaker: "Anna", de: "Du hast recht. Und was würdest du an meiner Stelle machen?", ar: "معك حق. وماذا كنت ستفعل في مكاني؟" },
          { speaker: "Karim", de: "Ich würde ein Wochenende ohne Handy machen!", ar: "كنت سأقضي نهاية أسبوع بدون هاتف!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was würde Sami mit viel Geld machen?",
        questionAr: "ماذا كان سيفعل سامي بالمال الكثير؟",
        options: ["ein Haus kaufen und reisen", "eine Firma gründen", "ein Auto kaufen", "spenden"],
        correctIndex: 0,
        explanation: "قال سامي: Ich würde ein Haus am Strand kaufen und reisen.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was würde Frau Weber gründen?",
        questionAr: "ماذا كانت ستنشئ السيدة فيبر؟",
        options: ["eine Stiftung für Bildung", "eine Firma", "einen Verein", "eine Schule"],
        correctIndex: 0,
        explanation: "قالت: Ich würde eine Stiftung für Bildung gründen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was würde Karim an Annas Stelle machen?",
        questionAr: "ماذا كان سيفعل كريم في مكان آنا؟",
        options: ["ein Wochenende ohne Handy", "mehr arbeiten", "Urlaub machen", "sportlich werden"],
        correctIndex: 0,
        explanation: "قال كريم: Ich würde ein Wochenende ohne Handy machen!",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الشرط: ü، ö، وch",
    items: [
      { de: "würde", ar: "كنت سأفعل", note: "ü + r: ڤوردِه" },
      { de: "wäre", ar: "كان سيكون", note: "ä مفتوح: ڤيرِه" },
      { de: "hätte", ar: "كان سيملك", note: "ä + tt: هِتِّه" },
      { de: "könnte", ar: "كان يستطيع", note: "ö: كونتِّه" },
      { de: "die Gesellschaft", ar: "المجتمع", note: "sch = ش: غِزِلشافت" },
      { de: "die Nachricht", ar: "الخبر", note: "ch = خ: ناخريشت" },
    ],
    tip: "رباعية الحلم: ڤوردِه-ڤيرِه-هِتِّه-كونتِّه — انطقها معاً 5 مرات كأغنية.",
    shadowing: [
      { de: "Ich würde gern reisen.", ar: "كنت أحب أن أسافر.", tip: "würde = ڤوردِه" },
      { de: "Wenn ich reich wäre...", ar: "لو كنت غنياً...", tip: "wäre = ڤيرِه" },
      { de: "Ich hätte gern Zeit.", ar: "كنت أود أن يكون عندي وقت.", tip: "hätte = هِتِّه" },
      { de: "Könnten Sie helfen?", ar: "هل يمكنكم المساعدة؟", tip: "könnten = كونتِن (ö)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب أمنية بـ würde:",
      prompt: "اكتب: «كنت أحب أن أسافر إلى ألمانيا»",
      acceptedAnswers: ["Ich würde gern nach Deutschland reisen", "Ich würde nach Deutschland reisen"],
      sampleAnswer: "Ich würde gern nach Deutschland reisen.",
      explanation: "würde + المصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ wäre/hätte/könnte/würde:",
      template: "Wenn ich Zeit ___ (كان عندي), ___ ich mehr lesen. Wenn ich reich ___ (كنت), ___ ich reisen.",
      blanks: [
        { correct: "hätte", options: ["hätte", "wäre", "könnte"] },
        { correct: "würde", options: ["würde", "wäre", "hätte"] },
        { correct: "wäre", options: ["wäre", "hätte", "könnte"] },
        { correct: "würde", options: ["würde", "wäre", "könnte"] },
      ],
      explanation: "الوقت → hätte. الفعل الرئيسي → würde. الغنى → wäre.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wenn ich Zeit hätte, würde ich mehr lesen.",
      explanation: "لو كان عندي وقت لقرأت أكثر — Konjunktiv II.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv II:",
      questionDe: "Wenn ich Zeit ___, würde ich kommen.",
      options: ["hätte", "habe", "hatte", "haben"],
      correctIndex: 0,
      explanation: "الشرط غير الواقعي: hätte.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv II:",
      questionDe: "Ich ___ gern nach Deutschland.",
      options: ["würde reisen", "werde reisen", "reise würde", "würde gereist"],
      correctIndex: 0,
      explanation: "würde + المصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بصيغته الشرطية:",
      pairs: [
        { left: "sein", right: "wäre" },
        { left: "haben", right: "hätte" },
        { left: "können", right: "könnte" },
        { left: "werden", right: "würde" },
      ],
      explanation: "رباعية Konjunktiv II الأساسية.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["würde", "Ich", "reisen", "gern", "Deutschland", "nach", "."],
      correctSentence: "Ich würde gern nach Deutschland reisen.",
      explanation: "Ich + würde + gern + nach Deutschland + reisen (النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Wenn ich Zeit habe, würde ich kommen.",
      wrongWord: "habe",
      correctWord: "hätte",
      options: ["hätte", "habe", "hatte", "haben würde"],
      explanation: "الشرط غير الواقعي: hätte.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالصيغة الصحيحة:",
      template: "Du ___ mehr schlafen. (نصيحة) ___ Sie bitte helfen? (تهذيب) Wenn ich du ___... (كنت)",
      blanks: [
        { correct: "solltest", options: ["solltest", "sollst", "sollte"] },
        { correct: "Könnten", options: ["Könnten", "Könnt", "Kann"] },
        { correct: "wäre", options: ["wäre", "war", "wird"] },
      ],
      explanation: "النصيحة: solltest. التهذيب: Könnten. الافتراض: wäre.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى شرطية:",
      prompt: "Ich habe kein Geld. → (لو كان عندي مال لكنت سافرت)",
      acceptedAnswers: ["Wenn ich Geld hätte, würde ich reisen", "Wenn ich Geld hätte, würde ich reisen."],
      sampleAnswer: "Wenn ich Geld hätte, würde ich reisen.",
      explanation: "hätte (افتراض) + würde reisen.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Könnten Sie das wiederholen?",
      questionAr: "ما معنى السؤال؟",
      options: ["هل يمكنكم التكرار؟ (تهذيب)", "هل تريدون التكرار؟", "لماذا تكررون؟", "متى تكررون؟"],
      correctIndex: 0,
      explanation: "Könnten = صيغة مهذبة من können.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich würde nach Deutschland gegangen.",
      wrongWord: "gegangen",
      correctWord: "gehen",
      options: ["gehen", "gegangen", "geht", "ging"],
      explanation: "würde + Infinitiv (gehen) وليس Partizip II.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Du solltest mehr Wasser trinken.",
      explanation: "كان ينبغي أن تشرب ماءً أكثر — نصيحة بـ sollte.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Wenn ich Zeit habe, würde ich... (خلط)", right: "Wenn ich Zeit hätte, würde ich...", whyAr: "الافتراض: hätte." },
      { wrong: "Ich würde nach Deutschland gegangen.", right: "Ich würde nach Deutschland gehen.", whyAr: "würde + Infinitiv." },
      { wrong: "Kannst du أم Könnten Sie؟", right: "Könnten Sie = تهذيب أعمق (للغرباء). Kannst du = عادي", whyAr: "درجة الأدب تحدد الاختيار." },
    ],
    eselsbruecken: [
      "«würde = كنت سأفعل» — كل أمنية تبدأ بـ würde.",
      "«رباعية الحلم»: wäre-hätte-könnte-würde.",
    ],
    culturalNote: {
      title: "الأدب الشرطي الألماني",
      content:
        "الألمان يستخدمون Konjunktiv II للأدب الزائد: «Ich hätte gern...» في المطاعم، «Könnten Sie bitte...» في المتاجر، «Dürfte ich...» للأذن. كلما زاد الأدب زادت الشرطية — استمع وستسمع würde/hätte/könnte باستمرار.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv II:",
      questionDe: "Wenn ich reich ___, würde ich reisen.",
      options: ["wäre", "bin", "war", "werde"],
      correctIndex: 0,
      explanation: "الافتراض: wäre.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv II:",
      questionDe: "Ich ___ gern ein Buch ___. (قراءة)",
      options: ["würde ... lesen", "werde ... lesen", "würde ... gelesen", "würde ... lese"],
      correctIndex: 0,
      explanation: "würde + Infinitiv.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["hätte", "ich", "Zeit", "Wenn", "würde", "ich", "lernen", ","],
      correctSentence: "Wenn ich Zeit hätte, würde ich lernen.",
      explanation: "لو كان عندي وقت لتعلمت — Konjunktiv II.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Du solltest mehr Wasser getrunken.",
      wrongWord: "getrunken",
      correctWord: "trinken",
      options: ["trinken", "getrunken", "trinkst", "trank"],
      explanation: "solltest + Infinitiv (trinken).",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Ich ___ (كان يستطيع) helfen. Wenn ich du ___ (كنت)... ___ Sie bitte öffnen? (تهذيب)",
      blanks: [
        { correct: "könnte", options: ["könnte", "kann", "können"] },
        { correct: "wäre", options: ["wäre", "war", "bin"] },
        { correct: "Könnten", options: ["Könnten", "Könnt", "Kann"] },
      ],
      explanation: "könnte، wäre، Könnten — رباعية الشرط.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "der Konjunktiv II", ar: "صيغة الشرط", example: "Ich würde reisen.", exampleAr: "كنت سأسافر.", level: "B1" },
    { id: "fc2", de: "würde + Infinitiv", ar: "كنت سأفعل", example: "Ich würde lesen.", exampleAr: "كنت سأقرأ.", level: "B1" },
    { id: "fc3", de: "wäre", ar: "كان سيكون", example: "Wenn ich reich wäre...", exampleAr: "لو كنت غنياً...", level: "B1" },
    { id: "fc4", de: "hätte", ar: "كان سيملك", example: "Ich hätte gern Zeit.", exampleAr: "كنت أود وقتاً.", level: "B1" },
    { id: "fc5", de: "könnte", ar: "كان يستطيع", example: "Könnten Sie helfen?", exampleAr: "هل يمكنكم المساعدة؟", level: "B1" },
    { id: "fc6", de: "solltest", ar: "كان ينبغي (نصيحة)", example: "Du solltest schlafen.", exampleAr: "كان ينبغي أن تنام.", level: "B1" },
    { id: "fc7", de: "die Gesellschaft", ar: "المجتمع", example: "Die Gesellschaft ändert sich.", exampleAr: "المجتمع يتغير.", level: "B1" },
    { id: "fc8", de: "kritisch", ar: "نقدي", example: "Sei kritisch mit den Medien.", exampleAr: "كن نقدياً مع الإعلام.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b1-04-1", type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً إعلامياً مع نقل موقف الكاتب",
      sourceDe: "Die neue Ausstellung im Museum zeigt moderne Kunst. Der Kritiker findet sie mutig, aber einige Besucher sind enttäuscht.",
      taskAr: "لخّص الخبر ونقل وجهتي نظر الناقد والزوار دون رأيك.",
      modelAnswerAr: "«المعرض الجديد في المتحف يعرض الفن الحديث. يجد الناقد أنه جريء، لكن بعض الزوار خاب أملهم.»",
      keyPointsAr: ["نقلت موضوع المعرض", "ذكرت رأي الناقد (جريء)", "نقلت خيبة أمل بعض الزوار"],
    },
  ],
      interaction: [
    {
      id: "int-b1-04-1",
      scenarioAr: "نقاش عن تأثير وسائل التواصل الاجتماعي.",
      scenarioDe: "Diskussion über soziale Medien.",
      strategyAr: "الاستراتيجية: إبداء رأي متوازن مع أمثلة.",
      rounds: [
        {
          speakerDe: "Sind soziale Medien eher positiv oder negativ?",
          speakerAr: "هل وسائل التواصل إيجابية أم سلبية أكثر؟",
          options: [
            { de: "Einerseits verbinden sie Menschen weltweit. Andererseits verbreiten sie viele falsche Informationen.", ar: "من ناحية تربط الناس عالمياً. ومن ناحية أخرى تنشر معلومات خاطئة كثيرة.", best: true, replyDe: "Ein ausgewogenes Urteil. Was ist wichtiger?", replyAr: "حكم متوازن. ما الأهم؟" },
            { de: "Sie sind nur positiv, alles andere ist Lüge.", ar: "إنها إيجابية فقط، وكل شيء آخر كذب.", best: false, replyDe: "Das ist zu einseitig. Es gibt klare Nachteile.", replyAr: "هذا منحاز جداً. توجد عيوب واضحة." },
          ],
        },
        {
          speakerDe: "Was ist wichtiger: Verbindung oder Wahrheit?",
          speakerAr: "ما الأهم: التواصل أم الحقيقة؟",
          options: [
            { de: "Beides ist wichtig, aber ohne Wahrheit nützt die Verbindung wenig. Deshalb sollten Nutzer kritisch denken.", ar: "كلاهما مهم، لكن بدون الحقيقة يقل نفع التواصل. لذلك يجب على المستخدمين التفكير النقدي.", best: true, replyDe: "Da stimme ich dir vollkommen zu.", replyAr: "أوافقك تماماً." },
            { de: "Nur die Verbindung zählt, Wahrheit ist egal.", ar: "التواصل فقط يهم، الحقيقة غير مهمة.", best: false, replyDe: "Das ist gefährlich. Falschinformationen schaden der Gesellschaft.", replyAr: "هذا خطير. المعلومات الخاطئة تضر المجتمع." },
          ],
        },
      ],
    },
  ],

};