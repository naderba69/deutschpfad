import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-05: الروتين اليومي والوقت
 * — الأفعال المنفصلة (trennbare Verben) + الساعة وأوقات اليوم
 */
export const lessonA105: Lesson = {
  id: "a1-05",
  unitId: "a1-05",
  level: "A1",
  order: 1,
  titleDe: "Mein Tag",
  titleAr: "الحياة اليومية والروتين",
  duration: 30,
  summary:
    "الروتين اليومي، الأفعال المنفصلة (aufstehen, fernsehen...)، قراءة الساعة، وأوقات اليوم (am Morgen, am Abend)، والمدى الزمني von … bis (من … إلى).",

  lernziele: [
    { id: "z1", de: "Ich kann meinen Tagesablauf beschreiben.", ar: "أن أصف يومي: أستيقظ، أتناول الفطور، أذهب إلى العمل..." },
    { id: "z2", de: "Ich kann trennbare Verben benutzen.", ar: "أن أستخدم الأفعال المنفصلة (aufstehen, fernsehen) بشكل صحيح." },
    { id: "z3", de: "Ich kann die Uhrzeit sagen.", ar: "أن أقول الوقت بالألمانية (Es ist acht Uhr)." },
    { id: "z4", de: "Ich kann sagen: am Morgen, am Nachmittag, am Abend.", ar: "أن أحدد أوقات اليوم (صباحاً، ظهراً، مساءً)." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "فكر: في العربية نقول «أستيقظ» كفعل واحد. لكن الألمانية تقول: aufstehen = auf (فوق) + stehen (يقف) — أي «يقف فوق»! والأغرب: عند التصريف يذهب الجزءان إلى مكانين مختلفين في الجملة! جرّب تخمين أين؟",
    motivatingQuestionDe: "Wann stehst du auf?",
    contextAr:
      "نرافق اليوم سامي في يومه الكامل من الاستيقاظ إلى النوم، ونكتشف ظاهرة الأفعال المنفصلة — إحدى أكثر عادات الألمانية إدهاشاً للعربي.",
    contextDe: "Mein Tag beginnt um sieben Uhr.",
    connectionToPreviousAr: "تعلمت sein وhaben وتصريف الأفعال المنتظمة. اليوم أفعال «منفصلة» تغيّر مكان البادئة — وكلها أفعال يومية أساسية.",
    activateVocabulary: [
      { de: "aufstehen", ar: "يستيقظ/يقف" },
      { de: "der Morgen", ar: "الصباح" },
      { de: "der Abend", ar: "المساء" },
      { de: "die Uhr", ar: "الساعة" },
      { de: "arbeiten", ar: "يعمل" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-03): كيف تطلب شيئاً بأدب؟",
      questionDe: "Was sagt man im Café, wenn man etwas möchte?",
      questionAr: "ماذا تقول في المقهى عندما تريد شيئاً؟",
      options: ["Ich hätte gern einen Kaffee.", "Ich bin einen Kaffee.", "Ich möchte einen Kaffee bin.", "Ich habe gern Kaffee sein."],
      correctIndex: 0,
      explanation: "Ich hätte gern + نصب (من درس a1-03): الطلب المهذب.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-04): أين يقع السرير؟",
      questionDe: "Wo steht das Bett?",
      questionAr: "أين يقع السرير؟",
      options: ["im Schlafzimmer", "in der Küche", "im Bad", "im Wohnzimmer"],
      correctIndex: 0,
      explanation: "das Schlafzimmer = غرفة النوم (من درس a1-04 السكن).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية: أكمل تصريف sein (من a1-01)",
      template: "Ich ___ aus Tunesien. (sein)",
      blanks: [{ correct: "bin", options: ["bin", "bist", "ist", "sind"] }],
      explanation: "ich bin (من درس a1-01): Ich bin aus Tunesien.",
      errorType: "conjugation",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "الأفعال المنفصلة (Trennbare Verben)",
      titleDe: "Trennbare Verben: aufstehen, fernsehen, einkaufen",
      explanationAr:
        "فعل منفصل = فعل له بادئة (auf, an, aus, ein, fern, mit...) + فعل أساسي. في المضارع: البادئة تُصرَّف وتذهب إلى آخر الجملة، والفعل الأساسي يتصرف في مكانه الثاني: Ich stehe um sieben auf. (أنا أقف... فوق = أستيقظ).",
      whyAr:
        "لماذا يذهب الجزء إلى النهاية؟ لأن الجملة الألمانية «إطار»: الفعل المتصرف في المركز الثاني، وكل ما تبقى من الفعل (البادئة أو التام) في النهاية. هذا «الإطار» هو ما يعطي الألمانية نظامها الصارم.",
      table: {
        title: "أشهر الأفعال المنفصلة اليومية",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "aufstehen", cells: ["يستيقظ", "Ich stehe um 7 auf."] },
          { label: "fernsehen", cells: ["يشاهد التلفاز", "Wir sehen abends fern."] },
          { label: "einkaufen", cells: ["يتسوق", "Sie kauft heute ein."] },
          { label: "anfangen", cells: ["يبدأ", "Der Kurs fängt um 9 an."] },
          { label: "mitkommen", cells: ["يأتي معاً", "Kommst du mit?"] },
          { label: "aufräumen", cells: ["يرتب", "Ich räume das Zimmer auf."] },
        ],
      },
      examples: [
        { de: "Ich stehe um sieben auf.", ar: "أستيقظ في السابعة." },
        { de: "Wir sehen abends fern.", ar: "نشاهد التلفاز مساءً." },
        { de: "Sie kauft heute ein.", ar: "هي تتسوق اليوم." },
        { de: "Der Kurs fängt um neun an.", ar: "الدورة تبدأ في التاسعة." },
        { de: "Ich räume mein Zimmer auf.", ar: "أرتّب غرفتي." },
      ],
      comparisonWithArabic:
        "العربية تفعل شيئاً مشابهاً في بعض الأفعال: «استيقظ» = است + يقظ. لكن العربية تلصق الجزء دائماً. الألمانية «تفصله» في الجملة — تذكر: البادئة تذهب للنهاية وكأنها «تغلق الجملة».",
      eselsbruecke:
        "«البادئة مثل ذيل الكلب: يهزّ في النهاية» — أينما كانت الجملة، يذهب «ذيل» الفعل المنفصل إلى آخرها: Ich stehe ... auf. وتذكّر أشهرها بأغنية: «أُف-شْتيهن (استيقظ)، فِرن-زيهن (تلفاز)، آين-كاوفن (تسوق)!»",
      commonMistakes: [
        { wrong: "Ich aufstehe um sieben.", right: "Ich stehe um sieben auf.", whyAr: "البادئة لا تتصرف ولا تبقى في المركز الثاني — الفعل الأساسي يتصرف والبادئة تذهب للنهاية." },
        { wrong: "Ich stehe auf um sieben.", right: "Ich stehe um sieben auf.", whyAr: "الترتيب: الفعل، ثم بقية الجملة، ثم البادئة في النهاية تماماً." },
        { wrong: "نسيان فصل البادئة عند السؤال", right: "Stehst du um sieben auf?", whyAr: "في السؤال أيضاً: الفعل المتصرف أولاً والبادئة في النهاية." },
      ],
      relatedRuleComparison: {
        title: "المنفصلة وغير المنفصلة",
        content: "ليست كل بادئة تنفصل! be-, ge-, ver-, er-, ent- لا تنفصل أبداً (bekommen, verstehen). القاعدة: البادئات غير المشددة لا تنفصل. سنأخذها في A2.",
      },
    },
    {
      id: "t2",
      titleAr: "قراءة الساعة وأوقات اليوم",
      titleDe: "Die Uhrzeit und die Tageszeiten",
      explanationAr:
        "الساعة الرسمية: Es ist acht Uhr (الثامنة تماماً). الساعة الشعبية: acht Uhr fünf (الثامنة وخمس دقائق)، halb neun (الثامنة والنصف = «نصف التاسعة»!)، Viertel nach acht (الثامنة والربع)، Viertel vor neun (التاسعة إلا ربع). أوقات اليوم: der Morgen (صباح)، der Vormittag (قبل الظهر)، der Mittag (ظهر)، der Nachmittag (بعد الظهر)، der Abend (مساء)، die Nacht (ليل) — مع am: am Morgen، am Abend.",
      whyAr:
        "لماذا halb neun تعني الثامنة والنصف وليس التاسعة والنصف؟ لأن الألماني يقول «نصف طريق إلى التاسعة». هذا أهم فرق ثقافي في قراءة الوقت — احفظه كقاعدة منفصلة.",
      table: {
        title: "أوقات اليوم والأمثلة",
        columns: ["الوقت", "العربية", "مثال"],
        rows: [
          { label: "am Morgen", cells: ["صباحاً", "Ich stehe am Morgen auf."] },
          { label: "am Vormittag", cells: ["قبل الظهر", "Wir arbeiten am Vormittag."] },
          { label: "am Mittag", cells: ["ظهراً", "Ich esse am Mittag."] },
          { label: "am Nachmittag", cells: ["بعد الظهر", "Wir lernen am Nachmittag."] },
          { label: "am Abend", cells: ["مساءً", "Sie sieht am Abend fern."] },
          { label: "in der Nacht", cells: ["ليلاً", "Ich schlafe in der Nacht."] },
        ],
      },
      examples: [
        { de: "Es ist acht Uhr.", ar: "الساعة الثامنة تماماً." },
        { de: "Es ist halb neun.", ar: "الساعة الثامنة والنصف." },
        { de: "Ich stehe am Morgen um sieben auf.", ar: "أستيقظ صباحاً في السابعة." },
        { de: "Wir essen am Mittag um zwölf Uhr.", ar: "نتناول الغداء ظهراً في الثانية عشرة." },
        { de: "Am Abend sehe ich fern.", ar: "مساءً أشاهد التلفاز." },
        { de: "Ich arbeite von acht bis sechzehn Uhr.", ar: "أعمل من الثامنة حتى السادسة عشرة." },
        { de: "Von Montag bis Freitag bin ich im Büro.", ar: "من الاثنين إلى الجمعة أكون في المكتب." },
      ],
      comparisonWithArabic:
        "العربية تقول «الثامنة والنصف». الألمانية «halb neun» = نصف التاسعة. الفخ: أضف ساعة ذهنياً. أما الأوقات فمتشابهة جداً: صباح = Morgen، ليل = Nacht، ظهر = Mittag. وللمدى الزمني: «من … إلى» = von … bis تماماً مثل العربية.",
      eselsbruecke:
        "«halb = نصف الطريق إلى الساعة التالية»: halb neun = نحن في منتصف الطريق إلى التاسعة = 8:30. كلما رأيت halb + رقم، اطرح واحداً! و«von … bis = من … إلى» — لربط مدى زمني كامل.",
      commonMistakes: [
        { wrong: "halb neun = 9:30", right: "halb neun = 8:30", whyAr: "halb تعني «نصف الطريق إلى التاسعة» أي 8:30." },
        { wrong: "in der Morgen", right: "am Morgen", whyAr: "صباحاً = am Morgen (وin der Nacht فقط للّيل)." },
        { wrong: "Es ist acht Uhr fünfzehn → 8:15 صحيحة لكن الشعبية: Viertel nach acht", right: "كلاهما صحيح، لكن الألمان الشعبية يقولون Viertel nach/vor", whyAr: "الرسمية (acht Uhr fünfzehn) صحيحة دائماً — الشعبية أسلوب إضافي." },
        { wrong: "Ich arbeite von acht zu sechzehn Uhr.", right: "Ich arbeite von acht bis sechzehn Uhr.", whyAr: "المدى الزمني: von … bis (وليس zu الذي هو للاتجاه والمكان)." },
      ],
      relatedRuleComparison: {
        title: "um أم am أم von … bis؟",
        content: "um = لحظة زمنية واحدة: um acht Uhr (في الثامنة). am = مع أوقات اليوم والأيام: am Morgen, am Montag. von … bis = مدى زمني: von 8 bis 16 Uhr (من الثامنة حتى الرابعة). الثلاثة تكمل بعضها: Ich arbeite von 8 bis 16 Uhr، und um 12 Uhr esse ich.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "يوم سامي",
        lines: [
          { speaker: "Sami", de: "Ich stehe am Morgen um sechs Uhr auf.", ar: "أستيقظ صباحاً في السادسة." },
          { speaker: "Sami", de: "Dann frühstücke ich um halb sieben.", ar: "ثم أتناول الفطور في السادسة والنصف." },
          { speaker: "Sami", de: "Um acht Uhr fange ich mit der Arbeit an.", ar: "في الثامنة أبدأ العمل." },
          { speaker: "Sami", de: "Am Mittag esse ich um zwölf Uhr.", ar: "ظهراً آكل في الثانية عشرة." },
          { speaker: "Sami", de: "Am Abend sehe ich fern oder lese ein Buch.", ar: "مساءً أشاهد التلفاز أو أقرأ كتاباً." },
        ],
      },
      {
        id: "l2",
        title: "أسئلة عن اليوم",
        lines: [
          { speaker: "Mona", de: "Wann stehst du auf?", ar: "متى تستيقظ؟" },
          { speaker: "Karim", de: "Ich stehe um sieben Uhr auf.", ar: "أستيقظ في السابعة." },
          { speaker: "Mona", de: "Und was machst du am Abend?", ar: "وماذا تفعل مساءً؟" },
          { speaker: "Karim", de: "Ich räume das Zimmer auf und sehe fern.", ar: "أرتّب الغرفة وأشاهد التلفاز." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann steht Sami auf?",
        questionAr: "متى يستيقظ سامي؟",
        options: ["um sechs Uhr", "um sieben Uhr", "um acht Uhr", "um zwölf Uhr"],
        correctIndex: 0,
        explanation: "قال: Ich stehe am Morgen um sechs Uhr auf — السادسة صباحاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Sami am Abend?",
        questionAr: "ماذا يفعل سامي مساءً؟",
        options: ["fernsehen oder lesen", "arbeiten", "frühstücken", "schlafen"],
        correctIndex: 0,
        explanation: "قال: Am Abend sehe ich fern oder lese ein Buch.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann steht Karim auf?",
        questionAr: "متى يستيقظ كريم؟",
        options: ["um sieben Uhr", "um sechs Uhr", "um neun Uhr", "um halb acht"],
        correctIndex: 0,
        explanation: "قال كريم: Ich stehe um sieben Uhr auf.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات اليوم: st، ch، وau",
    items: [
      { de: "aufstehen", ar: "يستيقظ", note: "st في بداية المقطع = شت: آوف-شتيهن" },
      { de: "frühstücken", ar: "يتناول الفطور", note: "früh = فريو (ü طويل) + st = شت" },
      { de: "die Nacht", ar: "الليل", note: "ch بعد a = خ حلقية: ناخت" },
      { de: "der Morgen", ar: "الصباح", note: "r حلقية خفيفة + g = غ: مورغن" },
      { de: "fernsehen", ar: "يشاهد التلفاز", note: "sehen = زيهن (s بين حرفين علة = ز)" },
      { de: "das Frühstück", ar: "الفطور", note: "ü في كلا المقطعين: فريو-شتوك" },
    ],
    tip: "فرّق بين الصباح (Morgen) والمستقبل (morgen = غداً): نفس الكلمة! nur ein Unterschied في الاستخدام.",
    shadowing: [
      { de: "Ich stehe um sechs Uhr auf.", ar: "أستيقظ في السادسة.", tip: "auf في نهاية الجملة — هذا هو «الذيل»!" },
      { de: "Wir sehen am Abend fern.", ar: "نشاهد التلفاز مساءً.", tip: "fern في النهاية أيضاً" },
      { de: "Ich räume das Zimmer auf.", ar: "أرتّب الغرفة.", tip: "räume = رُويْمِه (äu = أُوي)" },
      { de: "Der Kurs fängt um neun an.", ar: "الدورة تبدأ في التاسعة.", tip: "fängt = فِنگت (ä) — an في النهاية" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة عن وقت استيقاظك:",
      prompt: "Wann stehst du auf? (أجب بجملة كاملة)",
      acceptedAnswers: ["Ich stehe um sieben Uhr auf", "Ich stehe um sechs Uhr auf", "Ich stehe um acht Uhr auf"],
      sampleAnswer: "Ich stehe um sieben Uhr auf.",
      explanation: "البنية: Ich stehe (فعل متصرف) + um + ساعة + auf (البادئة في النهاية).",
      errorType: "word-order",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالبادئة الصحيحة (auf/fern/an/ein):",
      template: "Ich stehe um 7 ___ . Wir sehen abends ___ . Der Kurs fängt um 9 ___ . Sie kauft heute ___ .",
      blanks: [
        { correct: "auf", options: ["auf", "fern", "an", "ein"] },
        { correct: "fern", options: ["auf", "fern", "an", "ein"] },
        { correct: "an", options: ["auf", "fern", "an", "ein"] },
        { correct: "ein", options: ["auf", "fern", "an", "ein"] },
      ],
      explanation: "aufstehen (استيقظ) + fernsehen (تلفاز) + anfangen (يبدأ) + einkaufen (تسوق).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich stehe am Morgen um halb sieben auf.",
      explanation: "أستيقظ صباحاً في السادسة والنصف — لاحظ halb sieben = 6:30!",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ um sieben Uhr ___. (aufstehen)",
      questionAr: "أستيقظ في السابعة.",
      options: ["stehe ... auf", "aufstehe ...", "stehe auf ...", "auf ... stehe"],
      correctIndex: 0,
      explanation: "الفعل المتصرف stehe في المركز الثاني، والبادئة auf في النهاية: Ich stehe ... auf.",
      errorType: "word-order",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر المعنى الصحيح:",
      questionDe: "Es ist halb neun.",
      questionAr: "كم الساعة؟",
      options: ["8:30", "9:30", "9:00", "8:00"],
      correctIndex: 0,
      explanation: "halb neun = نصف الطريق إلى التاسعة = 8:30.",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بمعناه:",
      pairs: [
        { left: "aufstehen", right: "يستيقظ" },
        { left: "fernsehen", right: "يشاهد التلفاز" },
        { left: "einkaufen", right: "يتسوق" },
        { left: "anfangen", right: "يبدأ" },
      ],
      explanation: "أفعال يومية منفصلة: auf + stehen، fern + sehen، ein + kaufen، an + fangen.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه للبادئة في النهاية):",
      tokens: ["um", "sieben", "stehe", "Ich", "auf", "Uhr", "."],
      correctSentence: "Ich stehe um sieben Uhr auf.",
      explanation: "Ich + stehe (V2) + um sieben Uhr + auf (ذيل الفعل).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich aufstehe um sieben Uhr.",
      wrongWord: "aufstehe",
      correctWord: "stehe ... auf",
      options: ["stehe ... auf", "stehe auf", "auf stehe", "steh auf"],
      explanation: "البادئة لا تبقى مع الفعل: Ich stehe um sieben Uhr auf.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ am أو um:",
      template: "Ich esse ___ Mittag. Der Kurs beginnt ___ neun Uhr. Wir schlafen ___ Nacht.",
      blanks: [
        { correct: "am", options: ["am", "um"] },
        { correct: "um", options: ["am", "um"] },
        { correct: "in der", options: ["in der", "am", "um"] },
      ],
      explanation: "am + أوقات اليوم (am Mittag)، um + ساعات (um neun)، in der Nacht للّيل.",
      errorType: "preposition",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال:",
      prompt: "Du stehst um sieben Uhr auf. → ؟",
      acceptedAnswers: ["Stehst du um sieben Uhr auf", "Stehst du um sieben Uhr auf?"],
      sampleAnswer: "Stehst du um sieben Uhr auf?",
      explanation: "سؤال نعم/لا: Stehst (فعل متصرف) أولاً، والبادئة auf في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wann stehst du auf?",
      questionAr: "ما معنى السؤال؟",
      options: ["متى تستيقظ؟", "أين تعمل؟", "ماذا تأكل؟", "كم الساعة؟"],
      correctIndex: 0,
      explanation: "Wann = متى + stehst auf = تستيقظ.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Es ist halb sieben = 7:30.",
      wrongWord: "halb sieben",
      correctWord: "6:30",
      options: ["6:30", "7:30", "7:00", "6:00"],
      explanation: "halb sieben = نصف الطريق إلى السابعة = 6:30!",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Am Abend sehe ich fern.",
      explanation: "مساءً أشاهد التلفاز — fern في نهاية الجملة.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالحرف الصحيح (von / bis / um / am):",
      instructionDe: "Ergänze: von, bis, um, am",
      template: "Ich arbeite ___ acht ___ sechzehn Uhr. · ___ Morgen stehe ich ___ sieben auf.",
      blanks: [
        { correct: "von", options: ["von", "bis", "um", "am"] },
        { correct: "bis", options: ["bis", "von", "um", "am"] },
        { correct: "Am", options: ["Am", "Um", "Von", "Bis"] },
        { correct: "um", options: ["um", "am", "von", "bis"] },
      ],
      hint: "von … bis = مدى زمني. am + وقت اليوم. um + ساعة.",
      explanation: "von 8 bis 16 Uhr (مدى) + Am Morgen (وقت اليوم) + um sieben (ساعة).",
      errorType: "preposition",
      points: 2,
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich aufstehe um 7.", right: "Ich stehe um 7 auf.", whyAr: "البادئة ذيل يذهب لنهاية الجملة دائماً." },
      { wrong: "halb sieben = 7:30", right: "halb sieben = 6:30", whyAr: "halb = نصف الطريق إلى الرقم التالي." },
      { wrong: "am die Nacht (قلتها مع الليل)", right: "in der Nacht", whyAr: "الليل استثناء: in der Nacht بدل am." },
    ],
    eselsbruecken: [
      "«ذيل الفعل المنفصل في النهاية»: Ich stehe ... auf — كأنك «تغلق» الجملة بالبادئة.",
      "«halb ناقص واحد»: halb acht = 7:30، halb zehn = 9:30. اطرح واحداً دائماً.",
    ],
    culturalNote: {
      title: "مواعيد الألمان",
      content:
        "الألمان دقيقون في المواعيد جداً: «pünktlich» صفة تمدح بها نفسك! يقولون «um acht» ويعنون الثامنة تماماً وليس 8:05. إذا تأخرت 10 دقائق، اعتذر وقل: Entschuldigung für die Verspätung!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir ___ am Abend ___. (fernsehen)",
      options: ["sehen ... fern", "fernsehen ...", "sehen fern ...", "seht ... fern"],
      correctIndex: 0,
      explanation: "Wir sehen am Abend fern — الفعل sehen + fern في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الوقت الصحيح:",
      questionDe: "Es ist halb acht.",
      options: ["7:30", "8:30", "8:00", "7:00"],
      correctIndex: 0,
      explanation: "halb acht = 7:30 (نصف الطريق إلى الثامنة).",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["fängt", "Der", "Kurs", "um", "an", "neun", "Uhr", "."],
      correctSentence: "Der Kurs fängt um neun Uhr an.",
      explanation: "الدورة تبدأ في التاسعة: Der Kurs + fängt + um neun Uhr + an.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich stehe auf um halb sieben.",
      wrongWord: "auf um halb sieben",
      correctWord: "um halb sieben auf",
      options: ["um halb sieben auf", "auf um halb sieben", "um auf halb sieben", "halb sieben auf um"],
      explanation: "الترتيب الصحيح: الفعل + بقية الجملة + البادئة في النهاية: Ich stehe um halb sieben auf.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات (am/um/auf):",
      template: "Ich stehe ___ halb sieben ___ . Wir frühstücken ___ Morgen.",
      blanks: [
        { correct: "um", options: ["um", "am", "auf"] },
        { correct: "auf", options: ["um", "am", "auf"] },
        { correct: "am", options: ["um", "am", "auf"] },
      ],
      explanation: "um + ساعة، auf ذيل الفعل، am Morgen صباحاً.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "aufstehen", ar: "يستيقظ", example: "Ich stehe um sieben auf.", exampleAr: "أستيقظ في السابعة.", level: "A1" },
    { id: "fc2", de: "frühstücken", ar: "يتناول الفطور", example: "Wir frühstücken am Morgen.", exampleAr: "نتناول الفطور صباحاً.", level: "A1" },
    { id: "fc3", de: "fernsehen", ar: "يشاهد التلفاز", example: "Am Abend sehe ich fern.", exampleAr: "مساءً أشاهد التلفاز.", level: "A1" },
    { id: "fc4", de: "einkaufen", ar: "يتسوق", example: "Sie kauft heute ein.", exampleAr: "تتسوق اليوم.", level: "A1" },
    { id: "fc5", de: "anfangen", ar: "يبدأ", example: "Der Kurs fängt um neun an.", exampleAr: "الدورة تبدأ في التاسعة.", level: "A1" },
    { id: "fc6", de: "der Morgen / der Abend", ar: "الصباح / المساء", example: "Am Morgen und am Abend.", exampleAr: "صباحاً ومساءً.", level: "A1" },
    { id: "fc7", de: "die Uhrzeit", ar: "الوقت", example: "Wie spät ist es?", exampleAr: "كم الساعة؟", level: "A1" },
    { id: "fc8", de: "halb", ar: "نصف (الطريق إلى الساعة التالية)", example: "halb acht = 7:30", exampleAr: "نصف الثامنة = 7:30", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-05-1", type: "relay-instructions",
      titleAr: "انقل جدول يومي بالعربية لصديق",
      sourceDe: "Ich stehe um 6 Uhr auf. Ich frühstücke um 7 Uhr. Um 8 Uhr beginne ich zu arbeiten. Am Abend sehe ich fern.",
      taskAr: "أخبر صديقاً بالعربية عن روتين الشخص اليومي مع الأوقات بدقة.",
      modelAnswerAr: "«يستيقظ في السادسة، يفطر في السابعة، يبدأ العمل في الثامنة، وفي المساء يشاهد التلفاز.»",
      keyPointsAr: ["نقلت أوقات الاستيقاظ والإفطار", "ذكرت بداية العمل (8)", "نقلت نشاط المساء"],
    },
  ],
      interaction: [
    {
      id: "int-a1-05-1",
      scenarioAr: "صديق ألماني يسأل عن يومك.",
      scenarioDe: "Ein deutscher Freund fragt nach deinem Tag.",
      strategyAr: "الاستراتيجية: وصف الروتين اليومي بالأوقات.",
      rounds: [
        {
          speakerDe: "Wann stehst du morgens auf?",
          speakerAr: "متى تستيقظ صباحاً؟",
          options: [
            { de: "Ich stehe um 7 Uhr auf.", ar: "أستيقظ في السابعة.", best: true, replyDe: "Und was machst du danach?", replyAr: "وماذا تفعل بعد ذلك؟" },
            { de: "Ich stehe auf um 7 Uhr.", ar: "أستيقظ أنا في السابعة.", best: false, replyDe: "Achte auf die Wortstellung: Ich stehe um 7 Uhr auf.", replyAr: "انتبه لترتيب الكلمات: Ich stehe um 7 Uhr auf." },
          ],
        },
        {
          speakerDe: "Was machst du am Abend?",
          speakerAr: "ماذا تفعل في المساء؟",
          options: [
            { de: "Ich sehe fern oder lese ein Buch.", ar: "أشاهد التلفاز أو أقرأ كتاباً.", best: true, replyDe: "Das klingt entspannt!", replyAr: "يبدو مريحاً!" },
            { de: "Ich arbeite bis Mitternacht.", ar: "أعمل حتى منتصف الليل.", best: false, replyDe: "Das ist sehr viel Arbeit!", replyAr: "هذا كثير من العمل!" },
          ],
        },
      ],
    },
  ],

};