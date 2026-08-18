import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-09: المناسبات والاحتفالات — Dativ الكاملة + أفعاله الخاصة
 */
export const lessonA209: Lesson = {
  id: "a2-09",
  unitId: "a2-09",
  level: "A2",
  order: 1,
  titleDe: "Feste und Feiern",
  titleAr: "المناسبات والاحتفالات",
  duration: 35,
  summary:
    "الدعوات والهدايا والمناسبات الألمانية، حالة الجر (Dativ) الكاملة مع أفعالها الخاصة (helfen, gefallen, gehören, gratulieren) وضمائرها.",

  lernziele: [
    { id: "z1", de: "Ich kann einladen und antworten.", ar: "أن أدعو وأقبل وأعتذر عن دعوة." },
    { id: "z2", de: "Ich kann den Dativ komplett benutzen.", ar: "أن أستخدم حالة الجر (Dativ) مع الأسماء والضمائر." },
    { id: "z3", de: "Ich kenne die Dativ-Verben: helfen, gefallen, gehören, gratulieren.", ar: "أن أتقن أفعال الجر الخاصة: يساعد، يعجب، يخص، يهنئ." },
      { id: "z4", de: "Ich kann eine Einladung schreiben und beantworten.", ar: "أن أكتب دعوة وأرد عليها." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A2-07 تعلمت: Ich helfe dir (أساعدك). واليوم نوسع Dativ ليشمل الأسماء أيضاً: Ich helfe dem Vater (أساعد الأب). لاحظ: der→dem! ومجموعة أفعال خاصة تأخذ Dativ دائماً — سنحصيها اليوم.",
    motivatingQuestionDe: "Wann hast du Geburtstag?",
    contextAr:
      "مناسبات ألمانية: عيد ميلاد، أعياد، دعوات. نضيف Dativ الكامل مع الأسماء (dem, der, den) وأفعال الجر الشهيرة — كلها في سياق الاحتفال.",
    contextDe: "Herzlichen Glückwunsch zum Geburtstag!",
    connectionToPreviousAr: "تتذكر Dativ المكاني (auf dem Tisch) والملكية (mein/meine). اليوم: Dativ مع الأشخاص والأفعال — الفئة الأهم في التواصل.",
    activateVocabulary: [
      { de: "das Fest", ar: "الاحتفال" },
      { de: "die Einladung", ar: "الدعوة" },
      { de: "feiern", ar: "يحتفل" },
      { de: "das Geschenk", ar: "الهدية" },
      { de: "der Geburtstag", ar: "عيد الميلاد" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الصيغة الصحيحة:",
      questionDe: "Ich helfe ___ Bruder. (أخي)",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation: "helfen يأخذ Dativ: meinem Bruder (درس العائلة).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الترجمة:",
      questionDe: "der Geburtstag",
      options: ["عيد الميلاد", "الزواج", "العيد الوطني", "رأس السنة"],
      correctIndex: 0,
      explanation: "Geburtstag = عيد الميلاد (درس التقويم).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل:",
      template: "Ich möchte ___ einladen. (أنتَ — نصب)",
      blanks: [
        { correct: "dich", options: ["dich", "dir", "mich"] },
      ],
      explanation: "einladen يأخذ نصباً: dich.",
      errorType: "case",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "Dativ الكامل مع الأسماء + أفعال الجر",
      titleDe: "Der Dativ: dem, der, den + Dativ-Verben",
      explanationAr:
        "الأسماء في Dativ: المذكر der→dem، المؤنث die→der، المحايد das→dem، الجمع die→den (+n). أفعال تأخذ Dativ دائماً: helfen (يساعد)، gefallen (يعجب)، gehören (يخصّ)، danken (يشكر)، gratulieren (يهنئ)، antworten (يجيب)، gefallen. Ich helfe dem Vater. Das Geschenk gehört der Mutter.",
      whyAr:
        "لماذا هذه الأفعال خاصة؟ لأنها «تتجه نحو شخص» — الفعل يذهب إلى شخص وليس إلى شيء: أساعد (إلى) الأب. الألمانية جعلت هذا الاتجاه حالة مستقلة (Dativ) بأدوات مميزة. التعرف عليها: اسأل «لمن؟/إلى من؟» (wem؟).",
      table: {
        title: "الأدوات في Dativ",
        columns: ["الجنس", "Nominativ", "Dativ", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "dem", "Ich helfe dem Vater."] },
          { label: "مؤنث", cells: ["die", "der", "Das gehört der Mutter."] },
          { label: "محايد", cells: ["das", "dem", "Ich danke dem Kind."] },
          { label: "جمع", cells: ["die", "den (+n)", "Ich helfe den Eltern."] },
        ],
      },
      examples: [
        { de: "Ich helfe dem Vater im Garten.", ar: "أساعد الأب في الحديقة." },
        { de: "Das Geschenk gehört der Mutter.", ar: "الهدية تخص الأم." },
        { de: "Wir gratulieren dem Freund zum Geburtstag.", ar: "نهنئ الصديق بعيد ميلاده." },
        { de: "Das Kleid gefällt der Schwester.", ar: "الفستان يعجب الأخت." },
        { de: "Ich danke dir für das Geschenk.", ar: "أشكرك على الهدية." },
      ],
      comparisonWithArabic:
        "«أساعد الأب» — العربية لا تغيّر «الأب». الألمانية: dem Vater. لكن العربية تملك «لمن؟» في أسماء مثل «للأب» — وهذا هو Dativ تقريباً! فكر: أساعد (للأب) = Ich helfe dem Vater.",
      eselsbruecke:
        "«Dativ = لمن؟ (wem؟)» — اسأل دائماً: لمن أساعد؟ لمن يعجب؟ لمن يخص؟ والجواب Dativ: dem Vater, der Mutter.",
      commonMistakes: [
        { wrong: "Ich helfe den Vater.", right: "Ich helfe dem Vater.", whyAr: "المفرد المذكر Dativ: dem (وليس den الذي للجمع)." },
        { wrong: "Das gehört die Mutter.", right: "Das gehört der Mutter.", whyAr: "die → der في Dativ المؤنث." },
        { wrong: "Ich gratuliere dich.", right: "Ich gratuliere dir.", whyAr: "gratulieren يأخذ Dativ: dir." },
      ],
      relatedRuleComparison: {
        title: "Akkusativ أم Dativ؟",
        content: "النصب: من/ماذا؟ (Ich sehe den Vater). الجر: لمن/إلى من؟ (Ich helfe dem Vater). الأفعال الخاصة (helfen...) تأخذ جراً — احفظ قائمتها ولا تسأل.",
      },
    },
    {
      id: "t2",
      titleAr: "Dativ: متى ولماذا",
      titleDe: "Erweiterung",
      explanationAr: "Dativ يجيب عن «لمن؟» (wem?). يُستخدم مع: الأفعال الخاصة (helfen, gefallen, gehören, gratulieren, danken)، حروف الجر (mit, nach, bei, von, zu, aus, seit, außer, gegenüber)، وحروف الجر المتغيرة عند السكون. الضمائر: mir, dir, ihm, ihr, uns, euch, ihnen.",
      whyAr: "لماذا؟ لأن أفعالاً مثل helfen تحتاج Dativ دائماً — «أنا أساعدك» = Ich helfe dir (وليس dich!).",
      examples: [
        { de: "Ich helfe meiner Mutter.", ar: "أساعد أمي (Dativ)." }, { de: "Das Buch gehört dem Lehrer.", ar: "الكتاب يخص المعلم (Dativ)." }
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
        title: "دعوة عيد ميلاد",
        lines: [
          { speaker: "Mona", de: "Sami, ich habe am Samstag Geburtstag!", ar: "سامي، عيد ميلادي يوم السبت!" },
          { speaker: "Sami", de: "Herzlichen Glückwunsch! Und was machst du?", ar: "تهانينا الحارة! وماذا ستفعلين؟" },
          { speaker: "Mona", de: "Ich mache eine Party. Ich lade dich ein!", ar: "سأقيم حفلة. أدعوك!" },
          { speaker: "Sami", de: "Gern! Wann beginnt die Party?", ar: "بكل سرور! متى تبدأ الحفلة؟" },
          { speaker: "Mona", de: "Um sieben Uhr bei mir zu Hause.", ar: "في السابعة عندي في البيت." },
          { speaker: "Sami", de: "Super! Ich bringe ein Geschenk mit.", ar: "رائع! سأحضر هدية." },
          { speaker: "Mona", de: "Danke dir! Du bist ein guter Freund.", ar: "شكراً لك! أنت صديق جيد." },
        ],
      },
      {
        id: "l2",
        title: "في حفلة",
        lines: [
          { speaker: "Anna", de: "Das Geschenk gefällt mir sehr! Danke.", ar: "الهدية تعجبني كثيراً! شكراً." },
          { speaker: "Karim", de: "Gern geschehen! Und die Torte?", ar: "عفواً! وكعكة العيد؟" },
          { speaker: "Anna", de: "Die Torte ist lecker! Wer hat sie gebacken?", ar: "الكعكة لذيذة! من خبزها؟" },
          { speaker: "Karim", de: "Meine Mutter hat sie gebacken. Ich helfe ihr in der Küche.", ar: "أمي خبزتها. أساعدها في المطبخ." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann ist Monas Geburtstag?",
        questionAr: "متى عيد ميلاد منى؟",
        options: ["am Samstag", "am Sonntag", "am Freitag", "am Montag"],
        correctIndex: 0,
        explanation: "قالت منى: Ich habe am Samstag Geburtstag.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann beginnt die Party?",
        questionAr: "متى تبدأ الحفلة؟",
        options: ["um sieben Uhr", "um acht Uhr", "um sechs Uhr", "um neun Uhr"],
        correctIndex: 0,
        explanation: "قالت: Um sieben Uhr bei mir zu Hause.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wer hat die Torte gebacken?",
        questionAr: "من خبز الكعكة؟",
        options: ["Karims Mutter", "Anna", "Karim", "Mona"],
        correctIndex: 0,
        explanation: "قال كريم: Meine Mutter hat sie gebacken.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الاحتفال: sch، ä، وck",
    items: [
      { de: "das Geschenk", ar: "الهدية", note: "ge + schenk: غِشِنك" },
      { de: "feiern", ar: "يحتفل", note: "ei = آي: فايْرن" },
      { de: "die Torte", ar: "الكعكة", note: "o + r: تورته" },
      { de: "gratulieren", ar: "يهنئ", note: "tu = تو: غراتوليرن" },
      { de: "die Einladung", ar: "الدعوة", note: "ei = آي: آين-لادونغ" },
      { de: "der Glückwunsch", ar: "التهنئة", note: "ü + sch: غلوك-ڤونش" },
    ],
    tip: "Glückwunsch كلمة مركبة: Glück (حظ) + Wunsch (تمنٍّ) = تمني الحظ! قسّمها دائماً.",
    shadowing: [
      { de: "Herzlichen Glückwunsch!", ar: "تهانينا الحارة!", tip: "Herzlichen = هيرتسليشن" },
      { de: "Ich lade dich ein.", ar: "أدعوك.", tip: "ein في النهاية (فعل منفصل)" },
      { de: "Das Geschenk gefällt mir.", ar: "الهدية تعجبني.", tip: "gefällt = غِفِلت (ä)" },
      { de: "Ich helfe dir gern.", ar: "أساعدك بسرور.", tip: "helfe = هِلفِه" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب دعوة:",
      prompt: "اكتب: «أدعوك إلى حفلتي» بالألمانية",
      acceptedAnswers: ["Ich lade dich zu meiner Party ein", "Ich lade dich ein", "Komm zu meiner Party!"],
      sampleAnswer: "Ich lade dich zu meiner Party ein.",
      explanation: "einladen فعل منفصل: Ich lade ... ein + dich (نصب).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير Dativ الصحيح:",
      template: "Ich helfe ___ (هي). Das gefällt ___ (أنا). Ich gratuliere ___ (أنتَ).",
      blanks: [
        { correct: "ihr", options: ["ihr", "sie", "ihm"] },
        { correct: "mir", options: ["mir", "mich", "dir"] },
        { correct: "dir", options: ["dir", "dich", "mir"] },
      ],
      explanation: "أفعال الجر: helfen (ihr)، gefallen (mir)، gratulieren (dir).",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Das Geschenk gefällt mir sehr.",
      explanation: "الهدية تعجبني كثيراً — gefallen + Dativ (mir).",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich helfe ___ Vater.",
      options: ["dem", "den", "der", "das"],
      correctIndex: 0,
      explanation: "المذكر Dativ: dem Vater.",
      errorType: "case",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Buch gehört ___ Mutter.",
      options: ["der", "dem", "den", "die"],
      correctIndex: 0,
      explanation: "المؤنث Dativ: der Mutter.",
      errorType: "case",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بمعناه:",
      pairs: [
        { left: "helfen", right: "يساعد" },
        { left: "gefallen", right: "يعجب" },
        { left: "gehören", right: "يخصّ" },
        { left: "gratulieren", right: "يهنئ" },
      ],
      explanation: "أربعة أفعال Dativ — احفظها كعائلة واحدة.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["dem", "Ich", "Garten", "Vater", "im", "helfe", "."],
      correctSentence: "Ich helfe dem Vater im Garten.",
      explanation: "أساعد الأب في الحديقة — helfen + Dativ (dem Vater).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich gratuliere dich zum Geburtstag.",
      wrongWord: "dich",
      correctWord: "dir",
      options: ["dir", "dich", "mich", "ihn"],
      explanation: "gratulieren يأخذ Dativ: dir.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالأداة Dativ الصحيحة:",
      template: "Ich danke ___ Freund (مذكر). Wir helfen ___ Oma (مؤنث). Das gehört ___ Kind (محايد).",
      blanks: [
        { correct: "dem", options: ["dem", "der", "den"] },
        { correct: "der", options: ["dem", "der", "den"] },
        { correct: "dem", options: ["dem", "der", "den"] },
      ],
      explanation: "مذكر/محايد → dem. مؤنث → der.",
      errorType: "case",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى Dativ:",
      prompt: "Ich sehe den Vater. → (أنا أساعد الأب)",
      acceptedAnswers: ["Ich helfe dem Vater", "Ich helfe dem Vater."],
      sampleAnswer: "Ich helfe dem Vater.",
      explanation: "من sehen (نصب: den) إلى helfen (جر: dem).",
      errorType: "case",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die Einladung",
      questionAr: "ما معنى الكلمة؟",
      options: ["الدعوة", "الهدية", "الاحتفال", "التهنئة"],
      correctIndex: 0,
      explanation: "die Einladung = الدعوة (einladen = يدعو).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich helfe die Eltern.",
      wrongWord: "die",
      correctWord: "den (+n)",
      options: ["den Eltern", "dem Eltern", "der Eltern", "die Eltern"],
      explanation: "الجمع Dativ: den + n → den Eltern.",
      errorType: "case",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir gratulieren dem Freund zum Geburtstag.",
      explanation: "نهنئ الصديق بعيد ميلاده — gratulieren + Dativ.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich helfe den Vater.", right: "Ich helfe dem Vater.", whyAr: "المفرد المذكر Dativ: dem." },
      { wrong: "Ich gratuliere dich.", right: "Ich gratuliere dir.", whyAr: "gratulieren يأخذ Dativ." },
      { wrong: "die Oma أم der Oma بعد helfen؟", right: "der Oma", whyAr: "المؤنث Dativ: die → der." },
    ],
    eselsbruecken: [
      "«Dativ = لمن؟ (wem؟)» — السؤال السحري لكل أفعال الجر.",
      "«عائلة Dativ»: helfen, gefallen, gehören, danken, gratulieren — احفظها كأغنية واحدة.",
    ],
    culturalNote: {
      title: "المناسبات الألمانية",
      content:
        "الألمان يحتفلون: Geburtstag (عيد ميلاد — وتقليد الدعوة شخصياً)، Weihnachten (الكريسماس — أهم عطلة)، Ostern (الفصح)، وSilvester (رأس السنة). وفي عيد الميلاد: «Herzlichen Glückwunsch!» وفي الكريسماس: «Frohe Weihnachten!» — جهز هاتين وستكسر الجليد.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Geschenk gefällt ___ Kind.",
      options: ["dem", "den", "der", "die"],
      correctIndex: 0,
      explanation: "المحايد Dativ: dem Kind.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich danke ___ für alles. (أنتَ)",
      options: ["dir", "dich", "mir", "mich"],
      correctIndex: 0,
      explanation: "danken يأخذ Dativ: dir.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["gehört", "Mutter", "der", "Das", "Geschenk", "."],
      correctSentence: "Das Geschenk gehört der Mutter.",
      explanation: "الهدية تخص الأم — gehört + Dativ (der Mutter).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich helfe die Oma im Haus.",
      wrongWord: "die",
      correctWord: "der",
      options: ["der", "dem", "den", "das"],
      explanation: "المؤنث Dativ: der Oma.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير:",
      template: "Kannst du ___ helfen? (أنا) Das Kleid gefällt ___. (هي)",
      blanks: [
        { correct: "mir", options: ["mir", "mich", "dir"] },
        { correct: "ihr", options: ["ihr", "sie", "ihm"] },
      ],
      explanation: "helfen → mir. gefallen → ihr.",
      errorType: "case",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Fest", ar: "الاحتفال", example: "Das Fest war schön.", exampleAr: "كان الاحتفال جميلاً.", level: "A2" },
    { id: "fc2", de: "die Einladung", ar: "الدعوة", example: "Danke für die Einladung!", exampleAr: "شكراً على الدعوة!", level: "A2" },
    { id: "fc3", de: "feiern", ar: "يحتفل", example: "Wir feiern heute.", exampleAr: "نحتفل اليوم.", level: "A2" },
    { id: "fc4", de: "das Geschenk", ar: "الهدية", example: "Das Geschenk ist schön.", exampleAr: "الهدية جميلة.", level: "A2" },
    { id: "fc5", de: "helfen (+Dativ)", ar: "يساعد", example: "Ich helfe dir.", exampleAr: "أساعدك.", level: "A2" },
    { id: "fc6", de: "gefallen (+Dativ)", ar: "يعجب", example: "Das gefällt mir.", exampleAr: "هذا يعجبني.", level: "A2" },
    { id: "fc7", de: "gehören (+Dativ)", ar: "يخصّ", example: "Das gehört mir.", exampleAr: "هذا يخصني.", level: "A2" },
    { id: "fc8", de: "gratulieren (+Dativ)", ar: "يهنئ", example: "Ich gratuliere dir!", exampleAr: "أهنئك!", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-09-1", type: "relay-instructions",
      titleAr: "انقل دعوة ألمانية لعيد ميلاد بالعربية",
      sourceDe: "Liebe Freunde, am Samstag feiere ich meinen Geburtstag um 18 Uhr bei mir zu Hause. Kommt alle! Bringt gute Laune mit.",
      taskAr: "انقل الدعوة بالعربية: اليوم، الوقت، المكان، والمطلوب.",
      modelAnswerAr: "«أعزائي الأصدقاء، السبت سأحتفل بعيد ميلادي الساعة 6 مساءً في منزلي. تعالوا جميعاً! وأحضروا مزاجاً جيداً.»",
      keyPointsAr: ["نقلت اليوم (السبت) والوقت (6 مساءً)", "ذكرت المكان (منزل)", "نقلت طلب المزاج الجيد"],
    },
  ],
      interaction: [
    {
      id: "int-a2-09-1",
      scenarioAr: "تتلقى دعوة عيد ميلاد — تقبل أو تعتذر بأدب.",
      scenarioDe: "Geburtstagseinladung — annehmen oder höflich absagen.",
      strategyAr: "الاستراتيجية: قبول/اعتذار مهذب مع اقتراح بديل.",
      rounds: [
        {
          speakerDe: "Ich feiere am Samstag meinen Geburtstag. Kommst du?",
          speakerAr: "سأحتفل السبت بعيد ميلادي. هل ستأتي؟",
          options: [
            { de: "Ja, gern! Um wie viel Uhr und wo?", ar: "نعم بكل سرور! في أي ساعة وأين؟", best: true, replyDe: "Um 18 Uhr bei mir zu Hause.", replyAr: "الساعة 6 مساءً في منزلي." },
            { de: "Nein, ich mag keine Feste und keine Freunde.", ar: "لا، لا أحب الحفلات ولا الأصدقاء.", best: false, replyDe: "Das ist sehr traurig. Hoffentlich kommst du doch.", replyAr: "هذا محزن جداً. أتمنى أن تأتي رغم ذلك." },
          ],
        },
        {
          speakerDe: "Um 18 Uhr bei mir. Bringst du etwas mit?",
          speakerAr: "الساعة 6 عندي. هل ستجلب شيئاً؟",
          options: [
            { de: "Ja, ich bringe einen Kuchen mit!", ar: "نعم، سأجلب كعكة!", best: true, replyDe: "Toll, danke! Bis Samstag!", replyAr: "رائع، شكراً! إلى السبت!" },
            { de: "Ich bringe nichts, nur mich.", ar: "لن أجلب شيئاً، فقط نفسي.", best: false, replyDe: "Du kannst zumindest Blumen mitbringen.", replyAr: "يمكنك على الأقل جلب ورد." },
          ],
        },
      ],
    },
  ],

};