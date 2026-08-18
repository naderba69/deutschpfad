import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-13: A1 kompakt — المراجعة الشاملة لمستوى A1 (خاتمة المستوى)
 * يجمع كل قواعد A1: السلسلة الذهبية، sein/haben، الأدوات والنصب،
 * الأفعال المنفصلة، الناقصة الأولى، الماضي الأول (war/hatte)، وW-Fragen.
 */
export const lessonA113: Lesson = {
  id: "a1-13",
  unitId: "a1-13",
  level: "A1",
  order: 1,
  titleDe: "A1 kompakt — die große Wiederholung",
  titleAr: "A1 المراجعة الشاملة",
  duration: 35,
  summary:
    "المراجعة الختامية لمستوى A1: السلسلة الذهبية، sein/haben/werden، الأدوات والنصب، الأفعال المنفصلة، الأفعال الناقصة الأولى (kann, möchte, muss)، والماضي الأول (war, hatte) — مع اختبار تجميعي وتحضير مباشر لمستوى A2.",

  /* 1) الأهداف التعليمية */
  lernziele: [
    { id: "z1", de: "Ich kann alle A1-Grammatik kombinieren.", ar: "أن أجمع كل قواعد A1 في جمل صحيحة." },
    { id: "z2", de: "Ich kann über meinen Tag, meine Familie und meine Hobbys sprechen.", ar: "أن أتحدث عن يومي وعائلتي وهواياتي بجمل مترابطة." },
    { id: "z3", de: "Ich kann war und hatte benutzen.", ar: "أن أستخدم الماضي الأول (كان/امتلك) في سرد قصصي." },
    { id: "z4", de: "Ich bin bereit für A2!", ar: "أن أكون جاهزاً لمستوى A2!" },
  ],

  /* 2) التمهيد وتنشيط المعرفة السابقة */
  einfuehrung: {
    motivatingQuestionAr:
      "أنت الآن عند ختام A1! تذكر أول جملة تعلمتها: Ich heiße Sami. اليوم تستطيع أن تقول: Ich heiße Sami, ich komme aus Tunesien, ich wohne in Tunis, ich lerne Deutsch, ich kann schwimmen und am Wochenende war ich im Park. هذه قفزة حقيقية!",
    motivatingQuestionDe: "Was kannst du alles auf Deutsch sagen?",
    contextAr:
      "درس أخير يجمع المفاتيح العشرة لـ A1 في خريطة واحدة، ثم نمرّنها في محادثة واختبار شامل — وبه تنهي المبتدئ الأول بثقة.",
    contextDe: "Ich lerne Deutsch. Ich kann schon viel sagen!",
    connectionToPreviousAr:
      "هذا ختام A1: من السلسلة الذهبية (الدرس 1) إلى الماضي الأول war/hatte (درس الترفيه) — كل شيء يجتمع هنا في جملة واحدة كبيرة.",
    activateVocabulary: [
      { de: "die Wiederholung", ar: "المراجعة" },
      { de: "der Satz", ar: "الجملة" },
      { de: "kombinieren", ar: "يدمج/يجمع" },
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "bereit sein", ar: "يكون مستعداً" },
    ],
  },

  /* مراجعة تراكمية: أسئلة من كامل المستوى */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة: ما السؤال الصحيح؟",
      questionDe: "___ kommst du? — Aus Tunesien.",
      questionAr: "من أين أنت؟ — من تونس.",
      options: ["Woher", "Wo", "Wohin", "Wer"],
      correctIndex: 0,
      explanation: "Woher = من أين (أصل). Wo = أين. Wohin = إلى أين.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة شاملة: أكمل بالأداة الصحيحة:",
      template: "___ Tisch (مذكر) · ___ Lampe (مؤنث) · ___ Buch (محايد)",
      blanks: [
        { correct: "der", options: ["der", "die", "das", "den"] },
        { correct: "die", options: ["die", "der", "das", "dem"] },
        { correct: "das", options: ["das", "der", "die", "den"] },
      ],
      hint: "der للمذكر، die للمؤنث، das للمحايد.",
      explanation: "der Tisch / die Lampe / das Buch — الأدوات الثلاثة.",
      errorType: "article",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة شاملة: صحّح الخطأ (نصب + منفصل):",
      wrongSentence: "Ich stehe sieben Uhr auf.",
      wrongWord: "sieben Uhr",
      correctWord: "um sieben Uhr",
      options: ["um sieben Uhr", "sieben Uhr", "am sieben Uhr", "in sieben Uhr"],
      explanation: "مع الساعة: um + ساعة: um sieben Uhr — من درس اليوم والوقت.",
      errorType: "preposition",
    },
  ],

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "خريطة قواعد A1 — المفاتيح العشرة في جدول واحد",
      titleDe: "Die A1-Grammatik auf einen Blick",
      explanationAr:
        "هذه كل قواعد A1 في عشر نقاط: 1) السلسلة الذهبية (ich lerne, du lernst...)، 2) sein وhaben (bin, habe)، 3) الأدوات (der/die/das + ein/eine + kein)، 4) النصب Akkusativ (einen)، 5) الأفعال المنفصلة (aufstehen)، 6) الأفعال الناقصة الأولى (kann, möchte, muss)، 7) الماضي الأول (war, hatte)، 8) أسئلة W مع V2، 9) النفي (nicht/kein)، 10) الأرقام والوقت (um, am, von...bis).",
      whyAr:
        "لماذا مراجعة شاملة؟ لأن اللغة لا تُحفظ قاعدةً قاعدة، بل تُبنى جملةً جملة. عندما تجمع السلسلة الذهبية مع النصب مع المنفصل في جملة واحدة (Ich möchte um sieben Uhr aufstehen)، فقد انتقلت من حفظ القواعد إلى استخدام اللغة — وهذا هو معنى إتمام A1.",
      table: {
        title: "المفاتيح العشرة لـ A1",
        columns: ["القاعدة", "المثال"],
        rows: [
          { label: "السلسلة الذهبية", cells: ["ich lerne, du lernst, er lernt"] },
          { label: "sein / haben", cells: ["Ich bin Sami. Ich habe einen Bruder."] },
          { label: "أدوات der/die/das", cells: ["der Tisch, die Lampe, das Buch"] },
          { label: "النصب Akkusativ", cells: ["Ich esse einen Apfel."] },
          { label: "الأفعال المنفصلة", cells: ["Ich stehe um sieben auf."] },
          { label: "الناقصة الأولى", cells: ["Ich kann schwimmen. Ich möchte lernen."] },
          { label: "الماضي الأول", cells: ["Ich war im Park. Ich hatte Zeit."] },
          { label: "W-Fragen + V2", cells: ["Woher kommst du? Ich komme aus Tunesien."] },
          { label: "النفي nicht/kein", cells: ["Ich bin kein Lehrer. Das ist nicht teuer."] },
          { label: "الوقت um/am/von...bis", cells: ["um acht, am Morgen, von 8 bis 16 Uhr"] },
        ],
      },
      examples: [
        { de: "Ich heiße Sami und komme aus Tunesien.", ar: "اسمي سامي وأنا من تونس." },
        { de: "Ich lerne Deutsch und ich kann schon viel sagen.", ar: "أتعلم الألمانية وأستطيع قول الكثير." },
        { de: "Am Morgen stehe ich um sieben auf.", ar: "صباحاً أستيقظ في السابعة." },
        { de: "Am Wochenende war ich mit meiner Familie im Park.", ar: "في العطلة كنت مع عائلتي في الحديقة." },
        { de: "Ich möchte in Deutschland arbeiten.", ar: "أود العمل في ألمانيا." },
      ],
      comparisonWithArabic:
        "الجملة العربية «أتعلم الألمانية وأستطيع قول الكثير» = جملتان بفعلين — الألمانية: Ich lerne Deutsch und ich kann schon viel sagen. نفس البنية تقريباً! الفرق الأكبر الذي تعلمته: الفعل في المركز الثاني دائماً، والنهايات على الأفعال والأدوات.",
      eselsbruecke:
        "احفظ الجملة الأم: «Ich heiße Sami, ich komme aus Tunesien, ich wohne in Tunis, ich lerne Deutsch, ich kann schwimmen, am Wochenende war ich im Park und ich hatte viel Zeit.» — فيها 8 قواعد من الـ10!",
      commonMistakes: [
        { wrong: "Ich kommen aus Tunesien (مع ich)", right: "Ich komme aus Tunesien.", whyAr: "السلسلة الذهبية: مع ich -e." },
        { wrong: "Ich esse ein Apfel (نصب خاطئ)", right: "Ich esse einen Apfel.", whyAr: "Akkusativ المذكر: ein → einen." },
        { wrong: "Am Sonntag ich war im Park (ترتيب)", right: "Am Sonntag war ich im Park.", whyAr: "ظرف أولاً ← الفعل في المركز الثاني (V2)." },
      ],
      relatedRuleComparison: {
        title: "A1 أم A2؟",
        content: "أتقنت A1 إذا استطعت: التحدث عن نفسك وعائلتك ويومك بجمل بسيطة، وطرح أسئلة بسيطة والإجابة عنها، والطلب بأدب (Ich möchte...). في A2 ستبني على هذا: الماضي التام (Perfekt)، والسفر، والصحة، والمواعيد.",
      },
    },
    {
      id: "t2",
      titleAr: "دمج تراكيب A1 في موقف واحد",
      titleDe: "Erweiterung",
      explanationAr: "المراجعة الحقيقية ليست حفظ قائمة قواعد — بل استخدامها معاً في موقف. مثال: في «زيارة مقهى» تجمع: التحية (Guten Tag)، تقديم النفس (Ich heiße...)، الطلب بالنصب (Ich hätte gern einen Kaffee)، الدفع بالأرقام (zwei Euro fünfzig)، والوداع (Auf Wiedersehen).",
      whyAr: "لماذا؟ لأن الدماغ يخزّن اللغة في مواقف لا في جداول. الجمع بين التراكيب في سياق واحد يبني طلاقة حقيقية.",
      examples: [
        { de: "Im Café: Guten Tag! Ich hätte gern einen Tee, bitte.", ar: "في المقهى: نهارك سعيد! أريد شاياً من فضلك." }, { de: "Das macht zusammen drei Euro zwanzig.", ar: "المجموع 3.20 يورو." }
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
        title: "يوم سامي",
        lines: [
          { speaker: "Anna", de: "Erzähl mal, wie ist dein Tag?", ar: "احكِ لنا، كيف يومك؟" },
          { speaker: "Sami", de: "Am Morgen stehe ich um sieben Uhr auf.", ar: "صباحاً أستيقظ في السابعة." },
          { speaker: "Anna", de: "Und was isst du zum Frühstück?", ar: "وماذا تأكل في الفطور؟" },
          { speaker: "Sami", de: "Ich esse ein Brot mit Käse und trinke einen Kaffee.", ar: "آكل خبزاً بالجبن وأشرب قهوة." },
          { speaker: "Anna", de: "Und am Nachmittag?", ar: "وبعد الظهر؟" },
          { speaker: "Sami", de: "Ich lerne Deutsch und spiele Fußball.", ar: "أتعلم الألمانية وألعب كرة القدم." },
        ],
      },
      {
        id: "l2",
        title: "خطط نهاية الأسبوع",
        lines: [
          { speaker: "Mona", de: "Was machst du am Wochenende?", ar: "ماذا تفعل في نهاية الأسبوع؟" },
          { speaker: "Karim", de: "Ich möchte ins Kino gehen. Kommst du mit?", ar: "أود الذهاب إلى السينما. هل تأتي معنا؟" },
          { speaker: "Mona", de: "Gern! Ich kann heute Abend kommen. Letztes Wochenende war ich zu Hause.", ar: "بسرور! أستطيع المجيء الليلة. آخر عطلة كنت في المنزل." },
          { speaker: "Karim", de: "Ich hatte gestern keine Zeit, aber heute bin ich frei.", ar: "لم يكن لدي وقت أمس، لكنني اليوم حر." },
          { speaker: "Mona", de: "Super! Wir sehen uns um acht Uhr im Kino.", ar: "رائع! نراك في الثامنة في السينما." },
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
        options: ["um sieben Uhr", "um acht Uhr", "um neun Uhr", "um sechs Uhr"],
        correctIndex: 0,
        explanation: "قال سامي: Am Morgen stehe ich um sieben Uhr auf.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was isst Sami zum Frühstück?",
        questionAr: "ماذا يأكل سامي في الفطور؟",
        options: ["ein Brot mit Käse", "ein Ei", "einen Apfel", "eine Suppe"],
        correctIndex: 0,
        explanation: "قال سامي: Ich esse ein Brot mit Käse.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Karim machen?",
        questionAr: "ماذا يود كريم أن يفعل؟",
        options: ["ins Kino gehen", "ins Museum gehen", "zu Hause bleiben", "schwimmen gehen"],
        correctIndex: 0,
        explanation: "قال كريم: Ich möchte ins Kino gehen.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo war Mona letztes Wochenende?",
        questionAr: "أين كانت منى آخر عطلة؟",
        options: ["zu Hause", "im Kino", "im Park", "in Tunis"],
        correctIndex: 0,
        explanation: "قالت منى: Letztes Wochenende war ich zu Hause.",
        errorType: "vocabulary",
      },
    ],
  },

  /* 5) النطق */
  pronunciation: {
    id: "p1",
    title: "أصوات A1: ei، ie، ch، وsch",
    items: [
      { de: "heißen", ar: "يُسمى", note: "ei = آي: هاي-سِن" },
      { de: "lesen", ar: "يقرأ", note: "ie = إي: ليزِن" },
      { de: "Buch", ar: "كتاب", note: "ch بعد u = خفيف: بوخ" },
      { de: "Schule", ar: "مدرسة", note: "sch = ش: شولِه" },
      { de: "Woche", ar: "أسبوع", note: "ch بعد o = خفيف: فوخِه" },
    ],
    tip: "في A1 تعلمت أصوات الحروف المركبة: ei وie وch وsch. أعد تمرينها هنا قبل اختبار الختم — النطق الصحيح نصف الامتحان!",
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة من ich إلى er:",
      prompt: "Ich komme aus Tunesien. → Er ...",
      acceptedAnswers: ["Er kommt aus Tunesien.", "Er kommt aus Tunesien."],
      sampleAnswer: "Er kommt aus Tunesien.",
      explanation: "السلسلة الذهبية: ich komme → er kommt (-t).",
      errorType: "conjugation",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الجملة الكبيرة (نحو A1 كامل):",
      template: "Ich ___ Sami und ___ aus Tunesien. (اسمي/آتي) · Am Wochenende ___ ich im Park. (كنت) · Ich ___ ein Fahrrad. (كانت عندي)",
      blanks: [
        { correct: "heiße", options: ["heiße", "heißt", "heißen", "heißst"] },
        { correct: "komme", options: ["komme", "kommt", "kommen", "kommst"] },
        { correct: "war", options: ["war", "warst", "waren", "wart"] },
        { correct: "hatte", options: ["hatte", "hattest", "hatten", "hattet"] },
      ],
      hint: "heiße/komme (ich) + war/hatte (الماضي الأول).",
      explanation: "Ich heiße Sami und komme aus Tunesien. Am Wochenende war ich im Park. Ich hatte ein Fahrrad.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich möchte in Deutschland arbeiten.",
      explanation: "أود العمل في ألمانيا — möchte + مصدر في النهاية.",
      errorType: "spelling",
    },
  ],

  /* 7) بنك تدريبات تفاعلية واسع */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "___ Apfel (مذكر)",
      options: ["der", "die", "das", "den"],
      correctIndex: 0,
      explanation: "der Apfel — مذكر (شاذ بين الفواكه!).",
      errorType: "article",
    },
    {
      id: "e2",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (V2):",
      tokens: ["komme", "Ich", "aus", "Tunesien", "."],
      correctSentence: "Ich komme aus Tunesien.",
      explanation: "الفعل في المركز الثاني: komme.",
      errorType: "word-order",
    },
    {
      id: "e3",
      type: "fill-blank",
      instructionAr: "أكمل بـ sein أو haben:",
      template: "Ich ___ Lehrer. · Ich ___ einen Bruder.",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "ist", "hat"] },
        { correct: "habe", options: ["habe", "bin", "hat", "ist"] },
      ],
      explanation: "sein للمهنة (bin Lehrer)، haben للملكية (habe einen Bruder).",
      errorType: "conjugation",
    },
    {
      id: "e4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ (النصب):",
      wrongSentence: "Ich esse ein Apfel.",
      wrongWord: "ein Apfel",
      correctWord: "einen Apfel",
      options: ["einen Apfel", "ein Apfel", "einem Apfel", "eine Apfel"],
      explanation: "Akkusativ المذكر: ein → einen.",
      errorType: "case",
    },
    {
      id: "e5",
      type: "matching",
      instructionAr: "صِل الرقم بالكلمة الألمانية:",
      pairs: [
        { left: "3", right: "drei" },
        { left: "7", right: "sieben" },
        { left: "12", right: "zwölf" },
        { left: "20", right: "zwanzig" },
        { left: "100", right: "hundert" },
      ],
      hint: "تذكر الأرقام الأساسية من درس التسوق.",
      explanation: "drei، sieben، zwölf، zwanzig، hundert — الأرقام الأساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "transformation",
      instructionAr: "حوّل إلى أمر (du):",
      prompt: "Du kommst. → !",
      acceptedAnswers: ["Komm!", "Komm"],
      sampleAnswer: "Komm!",
      explanation: "الأمر مع du: احذف -st: kommst → Komm!",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المنفصل الصحيح:",
      questionDe: "Ich ___ um sieben Uhr ___. (أستيقظ)",
      options: ["stehe ... auf", "stehe ... an", "gehe ... auf", "komme ... auf"],
      correctIndex: 0,
      explanation: "aufstehen = يستيقظ: Ich stehe um sieben Uhr auf.",
      errorType: "vocabulary",
    },
    {
      id: "e8",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص:",
      template: "Ich ___ schwimmen. (أستطيع) · Ich ___ einen Kaffee, bitte. (أودّ) · Ich ___ heute lernen. (يجب)",
      blanks: [
        { correct: "kann", options: ["kann", "kannst", "können", "könnt"] },
        { correct: "möchte", options: ["möchte", "möchtest", "möchten", "mag"] },
        { correct: "muss", options: ["muss", "musst", "müssen", "müsst"] },
      ],
      explanation: "kann (قدرة) + möchte (طلب مهذب) + muss (إلزام).",
      errorType: "conjugation",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ (النفي):",
      wrongSentence: "Ich habe nicht Auto.",
      wrongWord: "nicht Auto",
      correctWord: "kein Auto",
      options: ["kein Auto", "nicht Auto", "keine Auto", "nicht ein Auto"],
      explanation: "مع الأسماء: kein (وليس nicht): Ich habe kein Auto.",
      errorType: "negation",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Am Wochenende war ich im Park.",
      explanation: "في العطلة كنت في الحديقة — war + am Wochenende.",
      errorType: "spelling",
    },
  ],

  /* 8) الأخطاء الشائعة والتريكات + لقطة ثقافية */
  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich kommen aus Tunesien.", right: "Ich komme aus Tunesien.", whyAr: "السلسلة الذهبية: مع ich -e دائماً." },
      { wrong: "Am Sonntag ich war im Park.", right: "Am Sonntag war ich im Park.", whyAr: "V2: الفعل في المركز الثاني حتى بعد الظرف." },
      { wrong: "Ich habe nicht Zeit.", right: "Ich habe keine Zeit.", whyAr: "kein مع الأسماء: keine Zeit." },
    ],
    eselsbruecken: [
      "الجملة الأم: «Ich heiße Sami, komme aus Tunesien, wohne in Tunis, lerne Deutsch, kann schwimmen, war im Park und hatte Zeit» — 8 قواعد في جملة واحدة.",
      "قبل اختبار الختم: أعد قراءة جداول الدروس العشرة (الدرس 1 حتى 12) — كل جدول = قاعدة واحدة.",
    ],
    culturalNote: {
      title: "شهادة A1 في ألمانيا",
      content:
        "شهادة «Start Deutsch 1» (Goethe) هي بوابة الاندماج الرسمية: تُطلب غالباً لتجديد الإقامة أو لمّ شمل الأسرة. تتكون من قراءة واستماع (45 دقيقة) ومحادثة (15 دقيقة). بعد إتمام هذه المراجعة، أنت قادر على اجتيازها بثقة!",
    },
  },

  /* 9) اختبار مصغّر */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "___ Buch (محايد)",
      options: ["das", "der", "die", "den"],
      correctIndex: 0,
      explanation: "das Buch — محايد.",
      errorType: "article",
    },
    {
      id: "m2",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الصحيح:",
      template: "Ich ___ aus Tunesien. (آتي) · Du ___ Deutsch. (تتعلم) · Er ___ Fußball. (يلعب)",
      blanks: [
        { correct: "komme", options: ["komme", "kommst", "kommt", "kommen"] },
        { correct: "lernst", options: ["lernst", "lerne", "lernt", "lernen"] },
        { correct: "spielt", options: ["spielt", "spiele", "spielst", "spielen"] },
      ],
      explanation: "السلسلة الذهبية: ich -e، du -st، er -t.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "multiple-choice",
      instructionAr: "اختر سؤال الاستفهام الصحيح:",
      questionDe: "___ wohnst du? — In Tunis.",
      questionAr: "أين تسكن؟ — في تونس.",
      options: ["Wo", "Woher", "Wohin", "Wer"],
      correctIndex: 0,
      explanation: "Wo = أين (مكان السكن).",
      errorType: "vocabulary",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل بالماضي الأول:",
      template: "Ich ___ gestern im Kino. (كنت) · Sie ___ viele Bücher. (كانت تملك)",
      blanks: [
        { correct: "war", options: ["war", "warst", "waren", "wart"] },
        { correct: "hatte", options: ["hatte", "hattest", "hatten", "hattet"] },
      ],
      explanation: "war من sein، hatte من haben — الماضي الأول.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة (نصب):",
      questionDe: "Ich kaufe ___ Apfel.",
      questionAr: "أشتري تفاحة.",
      options: ["einen", "ein", "eine", "einem"],
      correctIndex: 0,
      explanation: "Akkusativ المذكر: einen Apfel.",
      errorType: "case",
    },
  ],

  /* 10) بطاقات المراجعة */
  flashcards: [
    { id: "fc1", de: "die Wiederholung", ar: "المراجعة", example: "Die Wiederholung ist wichtig.", exampleAr: "المراجعة مهمة.", level: "A1" },
    { id: "fc2", de: "der Satz", ar: "الجملة", example: "Der Satz ist richtig.", exampleAr: "الجملة صحيحة.", level: "A1" },
    { id: "fc3", de: "kombinieren", ar: "يدمج/يجمع", example: "Ich kombiniere die Regeln.", exampleAr: "أدمج القواعد.", level: "A1" },
    { id: "fc4", de: "die Prüfung", ar: "الامتحان", example: "Die Prüfung ist nicht schwer.", exampleAr: "الامتحان ليس صعباً.", level: "A1" },
    { id: "fc5", de: "die Brücke", ar: "الجسر", example: "A1 ist die Brücke zu A2.", exampleAr: "A1 هو الجسر إلى A2.", level: "A1" },
    { id: "fc6", de: "bereit sein", ar: "يكون مستعداً", example: "Ich bin bereit für A2.", exampleAr: "أنا مستعد لـ A2.", level: "A1" },
    { id: "fc7", de: "alles klar", ar: "كل شيء واضح", example: "Alles klar, ich verstehe.", exampleAr: "كل شيء واضح، أفهم.", level: "A1" },
    { id: "fc8", de: "das Ziel", ar: "الهدف", example: "Mein Ziel ist A2.", exampleAr: "هدفي هو A2.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-13-1", type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صوتية ألمانية كاملة بالعربية",
      sourceDe: "Hallo Karim! Ich bin Anna. Ich lerne Deutsch und komme aus Berlin. Am Wochenende besuche ich meine Familie. Viele Grüße, Anna.",
      taskAr: "لخّص الرسالة بالعربية لصديق لا يفهم الألمانية: من المتحدثة، من أين، وماذا ستفعل في نهاية الأسبوع.",
      modelAnswerAr: "«الرسالة من آنا، تتعلم الألمانية وهي من برلين. في نهاية الأسبوع ستزور عائلتها.»",
      keyPointsAr: ["نقلت اسم المتحدثة (آنا)", "ذكرت أنها من برلين", "نقلت زيارة العائلة في نهاية الأسبوع"],
    },
  ],
      interaction: [
    {
      id: "int-a1-13-1",
      scenarioAr: "محادثة شاملة: لقاء، طعام، تسوق.",
      scenarioDe: "Ein umfassendes Gespräch: Treffen, Essen, Einkaufen.",
      strategyAr: "الاستراتيجية: دمج مهارات A1 في محادثة حقيقية.",
      rounds: [
        {
          speakerDe: "Hallo! Schön dich zu sehen. Wie geht's?",
          speakerAr: "مرحباً! سعيد برؤيتك. كيف حالك؟",
          options: [
            { de: "Danke, mir geht es gut! Und dir?", ar: "شكراً، أنا بخير! وأنت؟", best: true, replyDe: "Auch gut, danke. Hast du Hunger?", replyAr: "أنا بخير أيضاً. هل أنت جائع؟" },
            { de: "Ich bin ein Buch.", ar: "أنا كتاب.", best: false, replyDe: "Du bist ein Buch? Sehr witzig!", replyAr: "أنت كتاب؟ مضحك جداً!" },
          ],
        },
        {
          speakerDe: "Hast du Hunger? Wir können etwas essen gehen.",
          speakerAr: "هل أنت جائع؟ يمكننا الذهاب لتناول الطعام.",
          options: [
            { de: "Ja, gern! Ich hätte gern ein Schnitzel.", ar: "نعم بكل سرور! أريد شنيتزل.", best: true, replyDe: "Gute Wahl! Und danach einkaufen?", replyAr: "اختيار جيد! وبعدها التسوق؟" },
            { de: "Nein, ich esse nie.", ar: "لا، لا آكل أبداً.", best: false, replyDe: "Jeder isst! Komm schon.", replyAr: "الجميع يأكل! هيا." },
          ],
        },
      ],
    },
  ],

};