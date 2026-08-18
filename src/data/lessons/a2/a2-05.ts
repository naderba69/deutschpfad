import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-05: في المكتب — الهاتف + Präteritum للأفعال المساعدة
 */
export const lessonA205: Lesson = {
  id: "a2-05",
  unitId: "a2-05",
  level: "A2",
  order: 1,
  titleDe: "Im Büro",
  titleAr: "في المكتب والعمل",
  duration: 35,
  summary:
    "الاتصالات الهاتفية والبريد الإلكتروني، الماضي البسيط (Präteritum) للأفعال المساعدة (war, hatte) والأفعال الشائعة، وتنسيق المواعيد مهنياً.",

  lernziele: [
    { id: "z1", de: "Ich kann telefonieren: Wer ist da? Einen Moment, bitte!", ar: "أن أجري مكالمة هاتفية مهنية: من المتصل؟ لحظة من فضلك!" },
    { id: "z2", de: "Ich kenne das Präteritum von sein und haben.", ar: "أن أتقن الماضي البسيط للأفعال المساعدة: war، hatte." },
    { id: "z3", de: "Ich kann eine kurze E-Mail schreiben.", ar: "أن أكتب بريداً إلكترونياً قصيراً." },
      { id: "z4", de: "Ich kann eine kurze E-Mail im Büro schreiben.", ar: "أن أكتب بريداً إلكترونياً مهنياً قصيراً." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A2-01 تعلمت Perfekt للمحادثة. لكن انتبه: في الحكايات المكتوبة والأفعال المساعدة، الألمانية تستخدم زمناً آخر يسمى Präteritum. أسهل ما فيه: الأفعال المساعدة (war, hatte) — وسنبدأ بها الآن لأنها الأكثر شيوعاً في الهاتف والمكتب!",
    motivatingQuestionDe: "Wer ist da, bitte?",
    contextAr:
      "مكتب ألماني: نتعلم لغة الهاتف المهنية، ثم نضيف الماضي البسيط (war/hatte) الذي ستستخدمه كلما رويت قصة أو كتبت رسالة.",
    contextDe: "Einen Moment, bitte. Ich verbinde Sie.",
    connectionToPreviousAr: "تتذكر Perfekt (habe gegessen). اليوم زمن ثانٍ للماضي: Präteritum — للأفعال المساعدة في المحادثة، وللأفعال العادية في الكتابة.",
    activateVocabulary: [
      { de: "das Büro", ar: "المكتب" },
      { de: "anrufen", ar: "يتصل" },
      { de: "der Kollege", ar: "الزميل" },
      { de: "die E-Mail", ar: "البريد الإلكتروني" },
      { de: "der Termin", ar: "الموعد" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر تصريف الفعل:",
      questionDe: "Ich ___ in einer Firma. (arbeiten)",
      options: ["arbeite", "arbeitest", "arbeitet", "arbeiten"],
      correctIndex: 0,
      explanation: "مع ich: arbeite (درس المهن).",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر النفي الصحيح:",
      questionDe: "Ich arbeite ___ am Sonntag.",
      options: ["nicht", "kein", "keine", "keinen"],
      correctIndex: 0,
      explanation: "نفي الفعل → nicht (درس المهن).",
      errorType: "negation",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل حرف الجر:",
      template: "Der Termin ist ___ Montag ___ neun Uhr.",
      blanks: [
        { correct: "am ... um", options: ["am ... um", "um ... am", "im ... um"] },
      ],
      explanation: "am + يوم، um + ساعة (درس التقويم).",
      errorType: "preposition",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الماضي البسيط (Präteritum): war وhatte",
      titleDe: "Das Präteritum von sein und haben",
      explanationAr:
        "Präteritum للأفعال المساعدة: ich war (كنت)، ich hatte (كان عندي). التصريف: war, warst, war, waren, wart, waren. hatte, hattest, hatte, hatten, hattet, hatten. يستخدم في الحكايات والكتابة، ومع sein/haben حتى في المحادثة.",
      whyAr:
        "لماذا war وhatte في المحادثة بدل Perfekt؟ لأن الأفعال المساعدة قصيرة جداً — الألمانية «تختصر»: gewesen أطول من war. لهذا تقول دائماً: Ich war in Berlin (وليس Ich bin gewesen).",
      table: {
        title: "تصريف sein وhaben في Präteritum",
        columns: ["الضمير", "sein (war)", "haben (hatte)", "مثال"],
        rows: [
          { label: "ich", cells: ["war", "hatte", "Ich war im Büro."] },
          { label: "du", cells: ["warst", "hattest", "Du warst krank."] },
          { label: "er/sie/es", cells: ["war", "hatte", "Sie hatte einen Termin."] },
          { label: "wir", cells: ["waren", "hatten", "Wir waren in Berlin."] },
          { label: "ihr", cells: ["wart", "hattet", "Ihr wart müde."] },
          { label: "sie/Sie", cells: ["waren", "hatten", "Sie waren im Hotel."] },
        ],
      },
      examples: [
        { de: "Ich war gestern im Büro.", ar: "كنت أمس في المكتب." },
        { de: "Wir hatten viel Arbeit.", ar: "كان لدينا عمل كثير." },
        { de: "Sie war krank und hatte Fieber.", ar: "كانت مريضة ولديها حمى." },
        { de: "Der Termin war am Montag.", ar: "كان الموعد يوم الاثنين." },
        { de: "Hattest du Zeit?", ar: "هل كان عندك وقت؟" },
      ],
      comparisonWithArabic:
        "«كان عندي» = Ich hatte. «كنت» = Ich war. نفس الفكرة — لكن العربية تملك «كان» واحدة، والألمانية war/hatte اثنتين حسب المعنى. تذكّر: war للوجود، hatte للملكية.",
      eselsbruecke:
        "«war = كان، hatte = كان عنده» — انطق «ڤار» كأنك تقول «فار» الماضي من «يكون»! وسلّمها: ڤار-ڤارست-ڤار، ڤارن-ڤارت-ڤارن.",
      commonMistakes: [
        { wrong: "Ich war gestern im Büro gewesen. (Perfekt + Präteritum معاً)", right: "Ich war gestern im Büro.", whyAr: "اختر زمناً واحداً: مع war نكتفي به." },
        { wrong: "Wir war (بدون نهاية الجمع)", right: "Wir waren", whyAr: "الجمع: waren. (war للمفرد فقط)." },
        { wrong: "Ich hatte ein Termin.", right: "Ich hatte einen Termin.", whyAr: "hatte تطلب النصب: einen Termin (مثل haben في المضارع)." },
      ],
      relatedRuleComparison: {
        title: "Präteritum أم Perfekt؟",
        content: "في المحادثة: الأفعال المساعدة (war/hatte) + الأفعال الشرطية (konnte) تستخدم Präteritum. بقية الأفعال: Perfekt. في الكتابة والقصص: Präteritum للكل.",
      },
    },
    {
      id: "t2",
      titleAr: "لغة الهاتف والبريد المهني",
      titleDe: "Telefonieren und E-Mails im Büro",
      explanationAr:
        "عبارات الهاتف: Wer ist da, bitte? (من المتصل؟)، Einen Moment, bitte! (لحظة من فضلك)، Ich verbinde Sie (أوصلكم)، Sie sind falsch verbunden (الرقم خاطئ)، Können Sie lauter sprechen? (أعلى من فضلك). للبريد: Sehr geehrte Frau/Sehr geehrter Herr (عزيزتي/عزيزي الرسمية)، Mit freundlichen Grüßen (مع خالص التحيات).",
      whyAr:
        "لماذا Sehr geehrte...؟ لأن المراسلة الألمانية تبدأ وتنتهي بصيغ ثابتة جداً — هذه «القوالب» تجعل الكتابة سهلة: احفظ البداية والنهاية واملأ الوسط.",
      table: {
        title: "قوالب الهاتف والبريد",
        columns: ["الموقف", "الألمانية", "العربية"],
        rows: [
          { label: "بدء المكالمة", cells: ["Firma Müller, guten Tag!", "شركة مولر، نهارك سعيد!"] },
          { label: "من المتصل؟", cells: ["Wer ist da, bitte?", "من المتصل من فضلك؟"] },
          { label: "الانتظار", cells: ["Einen Moment, bitte.", "لحظة من فضلك."] },
          { label: "بدء البريد", cells: ["Sehr geehrte Frau Weber,", "عزيزتي السيدة فيبر،"] },
          { label: "نهاية البريد", cells: ["Mit freundlichen Grüßen", "مع خالص التحيات"] },
        ],
      },
      examples: [
        { de: "Firma Weber, guten Tag!", ar: "شركة فيبر، نهارك سعيد!" },
        { de: "Einen Moment, bitte. Ich verbinde Sie.", ar: "لحظة من فضلك. أوصلكم." },
        { de: "Können Sie bitte langsamer sprechen?", ar: "هل يمكنكم التحدث أبطأ من فضلك؟" },
        { de: "Sehr geehrter Herr Ben Ali,", ar: "عزيزي السيد بن علي،" },
        { de: "Mit freundlichen Grüßen, Anna Weber", ar: "مع خالص التحيات، آنا فيبر" },
      ],
      comparisonWithArabic:
        "«Sehr geehrter Herr» ≈ «عزيزي السيد» — والتحية الختامية «مع خالص التحيات» مطابقة تقريباً للعربية الرسمية. القوالب متشابهة جداً بين اللغتين.",
      eselsbruecke:
        "«فِرما + غوتن تاغ» لبدء المكالمة. «ميت فرويندليخن غرونسن» لإنهاء البريد — رتّلها كأغنية: ميت-فرويند-ليخن-غرونسن!",
      commonMistakes: [
        { wrong: "Hallo Herr Weber! (غير رسمية للبريد)", right: "Sehr geehrter Herr Weber,", whyAr: "البريد الرسمي يبدأ بـ Sehr geehrte/geehrter." },
        { wrong: "Mit freundliche Grüßen (بلا نهاية)", right: "Mit freundlichen Grüßen", whyAr: "النهاية: freundlichen (Dativ جمع)." },
        { wrong: "Ich verbinden Sie (فعل غير مصروف)", right: "Ich verbinde Sie", whyAr: "مع ich: verbinde." },
      ],
      relatedRuleComparison: {
        title: "Hallo أم Guten Tag؟",
        content: "في الهاتف: Guten Tag رسمية، Hallo مع الزملاء فقط. ومع الغرباء: Firma + Name أولاً. القاعدة: عرّف نفسك ثم اسأل من المتصل.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "مكالمة هاتفية",
        lines: [
          { speaker: "Frau Weber", de: "Firma Weber, guten Tag!", ar: "شركة فيبر، نهارك سعيد!" },
          { speaker: "Sami", de: "Guten Tag, hier ist Sami Ben Ali. Kann ich Herrn Schulz sprechen?", ar: "نهارك سعيد، معك سامي بن علي. هل يمكنني التحدث مع السيد شولتس؟" },
          { speaker: "Frau Weber", de: "Einen Moment, bitte. Ich verbinde Sie.", ar: "لحظة من فضلك. أوصلكم." },
          { speaker: "Frau Weber", de: "Herr Schulz ist leider nicht da. Er war heute Morgen im Büro, aber jetzt ist er weg.", ar: "السيد شولتس للأسف غير موجود. كان في المكتب هذا الصباح لكنه غادر الآن." },
          { speaker: "Sami", de: "Kann ich eine Nachricht hinterlassen?", ar: "هل يمكنني ترك رسالة؟" },
          { speaker: "Frau Weber", de: "Ja, natürlich. Einen Moment.", ar: "نعم طبعاً. لحظة." },
        ],
      },
      {
        id: "l2",
        title: "ترتيب موعد مهني",
        lines: [
          { speaker: "Anna", de: "Hallo Karim! Wir hatten gestern eine wichtige Besprechung.", ar: "مرحباً كريم! كان لدينا أمس اجتماع مهم." },
          { speaker: "Karim", de: "Ach ja? Ich war krank und konnte nicht kommen.", ar: "آه حقاً؟ كنت مريضاً ولم أستطع الحضور." },
          { speaker: "Anna", de: "Kein Problem. Wir hatten eine gute Idee für das Projekt.", ar: "لا مشكلة. كانت لدينا فكرة جيدة للمشروع." },
          { speaker: "Karim", de: "Super! Schick mir bitte eine E-Mail mit den Details.", ar: "رائع! أرسلي لي بريداً بالتفاصيل من فضلك." },
          { speaker: "Anna", de: "Mache ich sofort.", ar: "سأفعل فوراً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wer ist nicht da?",
        questionAr: "من غير موجود؟",
        options: ["Herr Schulz", "Frau Weber", "Sami", "Anna"],
        correctIndex: 0,
        explanation: "قالت: Herr Schulz ist leider nicht da — غير موجود.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum konnte Karim nicht kommen?",
        questionAr: "لماذا لم يستطع كريم الحضور؟",
        options: ["Er war krank", "Er hatte einen Termin", "Er war im Urlaub", "Er war müde"],
        correctIndex: 0,
        explanation: "قال كريم: Ich war krank — كان مريضاً.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was sollen sie machen?",
        questionAr: "ماذا يجب أن يفعلوا؟",
        options: ["eine E-Mail schicken", "telefonieren", "ins Büro gehen", "eine Besprechung haben"],
        correctIndex: 0,
        explanation: "قال كريم: Schick mir bitte eine E-Mail — ترسل بريداً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات المكتب: sch، ie، وck",
    items: [
      { de: "das Büro", ar: "المكتب", note: "ü: بُورو" },
      { de: "anrufen", ar: "يتصل", note: "an + rufen: آن-روفِن" },
      { de: "der Kollege", ar: "الزميل", note: "o مفتوحة + g: كولِغِه" },
      { de: "die Besprechung", ar: "الاجتماع", note: "ch = خ + sch = ش: بِشپْريشونغ" },
      { de: "die Nachricht", ar: "الرسالة", note: "ch بعد n = خ: ناخريشت" },
      { de: "verbinden", ar: "يصل (مكالمة)", note: "v = ف + i قصير: فِر-بيندن" },
    ],
    tip: "Besprechung كلمة صعبة: بِشپْريشونغ — فيها sch وch معاً. كررها ببطء: بيش-بريش-ونغ.",
    shadowing: [
      { de: "Firma Weber, guten Tag!", ar: "شركة فيبر نهارك سعيد!", tip: "Firma = فِرما (i قصيرة)" },
      { de: "Ich verbinde Sie.", ar: "أوصلكم.", tip: "verbinde = فِر-بيندِه" },
      { de: "Ich war gestern im Büro.", ar: "كنت أمس في المكتب.", tip: "war = ڤار" },
      { de: "Wir hatten viel Arbeit.", ar: "كان لدينا عمل كثير.", tip: "hatten = هاتِن (t مزدوجة)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب بداية بريد رسمي:",
      prompt: "اكتب: «عزيزي السيد بن علي،» بالألمانية",
      acceptedAnswers: ["Sehr geehrter Herr Ben Ali", "Sehr geehrter Herr Ben Ali,"],
      sampleAnswer: "Sehr geehrter Herr Ben Ali,",
      explanation: "البداية الرسمية: Sehr geehrter + Herr + الاسم + فاصلة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ war/hatte بالتصريف الصحيح:",
      template: "Ich ___ gestern im Büro. Wir ___ viel Arbeit. Du ___ krank. Sie ___ einen Termin.",
      blanks: [
        { correct: "war", options: ["war", "waren", "hatte"] },
        { correct: "hatten", options: ["war", "hatten", "hatte"] },
        { correct: "warst", options: ["war", "warst", "wart"] },
        { correct: "hatte", options: ["hatte", "hatten", "hattest"] },
      ],
      explanation: "سلم war: war, warst, war, waren, wart, waren. وسلم hatte: hatte, hattest, hatte, hatten, hattet, hatten.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Einen Moment, bitte. Ich verbinde Sie.",
      explanation: "لحظة من فضلك. أوصلكم — عبارة الهاتف الأشهر.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ gestern im Büro.",
      options: ["war", "warst", "waren", "wart"],
      correctIndex: 0,
      explanation: "مع ich: war.",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir ___ gestern eine Besprechung.",
      options: ["hatten", "hatte", "hattest", "hattet"],
      correctIndex: 0,
      explanation: "مع wir: hatten.",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل العبارة الهاتفية بمعناها:",
      pairs: [
        { left: "Wer ist da, bitte?", right: "من المتصل؟" },
        { left: "Einen Moment, bitte!", right: "لحظة من فضلك!" },
        { left: "Ich verbinde Sie.", right: "أوصلكم." },
        { left: "Sie sind falsch verbunden.", right: "الرقم خاطئ." },
      ],
      explanation: "أربع عبارات هاتفية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["war", "Ich", "gestern", "krank", "."],
      correctSentence: "Ich war gestern krank.",
      explanation: "كنت مريضاً أمس: Ich + war + gestern + krank.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Wir war im Büro.",
      wrongWord: "war",
      correctWord: "waren",
      options: ["waren", "warst", "wart", "war"],
      explanation: "الجمع مع wir: waren.",
      errorType: "conjugation",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ war أو hatte:",
      template: "Ich ___ krank (كنت مريضاً). Ich ___ Fieber (كان عندي حمى). Wir ___ in Berlin (كنا في برلين).",
      blanks: [
        { correct: "war", options: ["war", "hatte"] },
        { correct: "hatte", options: ["war", "hatte"] },
        { correct: "waren", options: ["war", "waren"] },
      ],
      explanation: "المرض حالة → war. الحمى ملكية → hatte. المكان → waren (جمع).",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى الماضي:",
      prompt: "Ich bin krank. → (الماضي بـ Präteritum)",
      acceptedAnswers: ["Ich war krank", "Ich war krank."],
      sampleAnswer: "Ich war krank.",
      explanation: "bin (المضارع) → war (الماضي).",
      errorType: "conjugation",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Sehr geehrter Herr Weber,",
      questionAr: "ما معنى العبارة؟",
      options: ["عزيزي السيد فيبر،", "مرحباً فيبر!", "السلام عليكم يا فيبر", "إلى اللقاء سيد فيبر"],
      correctIndex: 0,
      explanation: "بداية البريد الرسمي: عزيزي السيد...",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Mit freundliche Grüßen.",
      wrongWord: "freundliche",
      correctWord: "freundlichen",
      options: ["freundlichen", "freundlich", "freundliches", "freundlicher"],
      explanation: "التحية الختامية: Mit freundlichen Grüßen (Dativ).",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir hatten gestern eine wichtige Besprechung.",
      explanation: "كان لدينا أمس اجتماع مهم — hatten (Präteritum haben).",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich war im Büro gewesen. (زمنان معاً)", right: "Ich war im Büro.", whyAr: "مع war نكتفي به — لا تضيف gewesen." },
      { wrong: "Mit freundliche Grüßen", right: "Mit freundlichen Grüßen", whyAr: "النهاية Dativ: freundlichen." },
      { wrong: "Hallo Herr Schulz (بريد رسمي)", right: "Sehr geehrter Herr Schulz,", whyAr: "Hallo للزملاء فقط." },
    ],
    eselsbruecken: [
      "«war = كان (للوجود)، hatte = كان عنده (للملكية)» — اسأل نفسك: حالة أم ملكية؟",
      "«فِرما + غوتن تاغ» لبدء المكالمة — دائماً تبدأ المكالمة باسم الشركة.",
    ],
    culturalNote: {
      title: "آداب الهاتف الألماني",
      content:
        "الألمان يردون على الهاتف باسم الشركة أو الاسم مباشرة: «Müller» أو «Firma Müller, guten Tag». وإذا اتصلت بالخطأ: «Entschuldigung, falsch verbunden» (عذراً، رقم خاطئ). والمهنيون يحترمون «الموعد» بصرامة: لا تأتِ مبكراً أكثر من 5 دقائق.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Sie ___ gestern krank.",
      options: ["war", "warst", "waren", "wart"],
      correctIndex: 0,
      explanation: "مع sie المفردة: war.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ihr ___ viel Arbeit.",
      options: ["hattet", "hatte", "hatten", "hattest"],
      correctIndex: 0,
      explanation: "مع ihr: hattet.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["hatte", "einen", "Sie", "Termin", "."],
      correctSentence: "Sie hatte einen Termin.",
      explanation: "كان عندها موعد: Sie + hatte + einen Termin.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich hatte ein Termin.",
      wrongWord: "ein",
      correctWord: "einen",
      options: ["einen", "einem", "einer", "ein"],
      explanation: "hatte تطلب النصب: einen Termin.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالعبارة الهاتفية الصحيحة:",
      template: "___ bitte! (لحظة) · ___ Sie? (أوصلكم) · Wer ___? (من المتصل)",
      blanks: [
        { correct: "Einen Moment", options: ["Einen Moment", "Ich verbinde", "ist da"] },
        { correct: "Ich verbinde", options: ["Einen Moment", "Ich verbinde", "ist da"] },
        { correct: "ist da", options: ["Einen Moment", "Ich verbinde", "ist da"] },
      ],
      explanation: "Einen Moment, Ich verbinde, Wer ist da? — عبارات الهاتف الثلاث.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Büro", ar: "المكتب", example: "Ich arbeite im Büro.", exampleAr: "أعمل في المكتب.", level: "A2" },
    { id: "fc2", de: "anrufen", ar: "يتصل", example: "Ich rufe dich an.", exampleAr: "سأتصل بك.", level: "A2" },
    { id: "fc3", de: "der Kollege / die Kollegin", ar: "الزميل / الزميلة", example: "Meine Kollegin ist nett.", exampleAr: "زميلتي لطيفة.", level: "A2" },
    { id: "fc4", de: "die Besprechung", ar: "الاجتماع", example: "Wir hatten eine Besprechung.", exampleAr: "كان لدينا اجتماع.", level: "A2" },
    { id: "fc5", de: "die E-Mail", ar: "البريد الإلكتروني", example: "Schick mir eine E-Mail!", exampleAr: "أرسل لي بريداً!", level: "A2" },
    { id: "fc6", de: "das Präteritum", ar: "الماضي البسيط", example: "war, hatte, konnte", exampleAr: "كان، كان عنده، استطاع", level: "A2" },
    { id: "fc7", de: "Sehr geehrte/r ...", ar: "عزيزي/عزيزتي (رسمية)", example: "Sehr geehrter Herr Weber,", exampleAr: "عزيزي السيد فيبر،", level: "A2" },
    { id: "fc8", de: "Mit freundlichen Grüßen", ar: "مع خالص التحيات", example: "Mit freundlichen Grüßen, Anna", exampleAr: "مع خالص التحيات، آنا", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-05-1", type: "relay-instructions",
      titleAr: "انقل بريداً مهنياً بالعربية لزميل",
      sourceDe: "Liebe Kolleginnen und Kollegen, die Besprechung findet morgen um 10 Uhr im Raum 3 statt. Bitte bringen Sie Ihre Berichte mit.",
      taskAr: "انقل البريد بالعربية: موعد الاجتماع، المكان، والمطلوب إحضاره.",
      modelAnswerAr: "«أعزائي الزملاء، الاجتماع غداً الساعة 10 في القاعة 3. يرجى إحضار تقاريركم.»",
      keyPointsAr: ["نقلت موعد الاجتماع (غداً 10)", "ذكرت القاعة (3)", "نقلت طلب التقارير"],
    },
  ],
      interaction: [
    {
      id: "int-a2-05-1",
      scenarioAr: "مكالمة مهنية — اعتذار وتأجيل موعد.",
      scenarioDe: "Beruflicher Anruf — Termin absagen und verschieben.",
      strategyAr: "الاستراتيجية: الاعتذار المهذب واقتراح بديل.",
      rounds: [
        {
          speakerDe: "Guten Morgen, Herr Ali. Sie haben heute um 14 Uhr einen Termin.",
          speakerAr: "صباح الخير سيد علي. لديك موعد اليوم الساعة 2.",
          options: [
            { de: "Es tut mir leid, aber ich muss den Termin leider verschieben.", ar: "آسف، لكن يجب تأجيل الموعد للأسف.", best: true, replyDe: "Kein Problem. Wann passt es Ihnen besser?", replyAr: "لا مشكلة. متى يناسبك أفضل؟" },
            { de: "Ich komme heute nicht und das ist Ihr Problem.", ar: "لن آتي اليوم وهذه مشكلتك.", best: false, replyDe: "So spricht man nicht beruflich.", replyAr: "لا يُتحدث هكذا في العمل." },
          ],
        },
        {
          speakerDe: "Wann passt es Ihnen besser?",
          speakerAr: "متى يناسبك أفضل؟",
          options: [
            { de: "Passt übermorgen um 10 Uhr?", ar: "هل يناسبك بعد غد الساعة 10؟", best: true, replyDe: "Übermorgen um 10 Uhr ist gut. Ich notiere es.", replyAr: "بعد غد الساعة 10 جيد. سأدوّنه." },
            { de: "Ich weiß nicht, vielleicht nie.", ar: "لا أعرف، ربما أبداً.", best: false, replyDe: "Wir brauchen einen konkreten Termin.", replyAr: "نحتاج موعداً محدداً." },
          ],
        },
      ],
    },
  ],

};