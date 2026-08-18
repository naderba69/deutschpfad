import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-02: العائلة والأصدقاء — نموذج كامل ثانٍ لنظام الدرس الموحد
 * (التركيز: مفردات العائلة + أدوات الملكية mein/meine)
 */
export const lessonA102: Lesson = {
  id: "a1-02",
  unitId: "a1-02",
  level: "A1",
  order: 2,
  titleDe: "Meine Familie",
  titleAr: "العائلة والأصدقاء",
  duration: 30,
  summary:
    "أفراد العائلة بالعربية والألمانية، أدوات الملكية mein/meine حسب جنس الاسم، ووصف العائلة بجمل بسيطة.",

  /* 1) الأهداف التعليمية */
  lernziele: [
    { id: "z1", de: "Ich kann Familienmitglieder nennen.", ar: "أن أسمّي أفراد العائلة بالألمانية (Vater, Mutter, Bruder...)." },
    { id: "z2", de: "Ich kann mein/meine richtig verwenden.", ar: "أن أستخدم أدوات الملكية mein/meine بشكل صحيح حسب جنس الاسم." },
    { id: "z3", de: "Ich kann meine Familie vorstellen.", ar: "أن أقدّم عائلتي بجمل بسيطة (Das ist mein Vater...)." },
    { id: "z4", de: "Ich kann fragen: Hast du Geschwister?", ar: "أن أسأل عن العائلة: هل لديك إخوة؟" },
  ],

  /* 2) التمهيد */
  einfuehrung: {
    motivatingQuestionAr:
      "قل «أبي» و«أمي» بالعربية... هل لاحظت أن العربية تضيف حرف الياء لنهاية الكلمة (أب + ي)? كيف تعتقد أن الألمانية تعبّر عن الملكية؟ قبل أن نرى القاعدة، خمّن!",
    motivatingQuestionDe: "Wie sagt man „mein Vater“ auf Arabisch?",
    contextAr:
      "في العربية نقول: أبي، أمّي، أخي — الملكية تُلحق بنهاية الاسم. في الألمانية الأمر مختلف تماماً: نضع كلمة مستقلة قبل الاسم (mein Vater). وسنكتشف معاً متى تكون mein ومتى meine.",
    contextDe: "mein Vater, meine Mutter, mein Bruder, meine Schwester …",
    connectionToPreviousAr: "في الدرس السابق تعلمنا: Ich bin / Ich heiße / Woher kommst du? اليوم سنضيف العائلة لنتمكن من تقديم نفسنا بشكل أوسع.",
    activateVocabulary: [
      { de: "die Familie", ar: "العائلة" },
      { de: "der Vater", ar: "الأب" },
      { de: "die Mutter", ar: "الأم" },
      { de: "der Bruder", ar: "الأخ" },
      { de: "die Schwester", ar: "الأخت" },
    ],
  },

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "أدوات الملكية mein / meine",
      titleDe: "Possessivartikel: mein und meine",
      explanationAr:
        "أداة الملكية في الألمانية تتغير حسب جنس الاسم الذي يليها (وليس حسب جنس صاحبها!): الأسماء المذكرة والمحايدة تأخذ mein، والأسماء المؤنثة والجمع تأخذ meine.",
      whyAr:
        "لماذا؟ لأن الألمانية لغة «اتفاق نحوي»: الصفة والأداة يجب أن «تتفق» مع جنس الاسم. في العربية الملكية تُلحق بالاسم نفسه (أبي، أمّي) فلا نلاحظ الجنس، أما في الألمانية فالأداة تكشف الجنس.",
      table: {
        title: "قاعدة mein/meine في حالة الرفع (Nominativ)",
        columns: ["جنس الاسم", "المثال", "أداة الملكية"],
        rows: [
          { label: "مذكر (der)", cells: ["der Vater (الأب)", "mein Vater"] },
          { label: "محايد (das)", cells: ["das Kind (الطفل)", "mein Kind"] },
          { label: "مؤنث (die)", cells: ["die Mutter (الأم)", "meine Mutter"] },
          { label: "الجمع (die)", cells: ["die Eltern (الوالدان)", "meine Eltern"] },
        ],
      },
      examples: [
        { de: "Das ist mein Vater.", ar: "هذا أبي." },
        { de: "Meine Mutter heißt Leila.", ar: "أمي اسمها ليلى." },
        { de: "Mein Bruder ist zehn Jahre alt.", ar: "أخي عمره عشر سنوات." },
        { de: "Meine Schwester wohnt in Sousse.", ar: "أختي تسكن في سوسة." },
        { de: "Meine Eltern sind nett.", ar: "والداي لطيفان." },
      ],
      comparisonWithArabic:
        "الفرق الجوهري: العربية تلحق «يَ» الملكية بالاسم (أبي، أمّي) وتبقى الكلمة نفسها. الألمانية تضع كلمة mein/meine قبل الاسم وتغيّر شكلها حسب جنس الاسم: mein Vater لكن meine Mutter. المتعلم العربي يخلط غالباً لأن العربية لا تعرف جنس الأداة.",
      eselsbruecke:
        "«mein = مِنّي»: كل ما هو «مِنّي» يبدأ بـ mein. لكن انتبه: die (مؤنث/جمع) تقلبها إلى meine. تذكّر: mein مع der/das، meine مع die. الكلمة السحرية: «امسح mein إذا جاءت die».",
      commonMistakes: [
        {
          wrong: "mein Mutter",
          right: "meine Mutter",
          whyAr: "Mutter مؤنثة (die Mutter) لذلك تحتاج meine وليس mein. الأخطاء هنا متوقعة جداً من العرب — لأن العربية لا تفرق.",
        },
        {
          wrong: "meine Vater",
          right: "mein Vater",
          whyAr: "Vater مذكر (der Vater) لذلك يحتاج mein بدون e.",
        },
      ],
      relatedRuleComparison: {
        title: "mein/dein — صيغة الملكية",
        content:
          "mein = «لي» (أنا)، dein = «لك» (أنتَ). نفس قاعدة التغير: dein Vater / deine Mutter. غداً سنضيف sein/ihr (له/لها).",
      },
    },
    {
      id: "t2",
      titleAr: "مفردات العائلة — هل تعلم أن بعضها يُركّب؟",
      titleDe: "Familienwörter",
      explanationAr:
        "كلمات العائلة الأساسية: der Vater (الأب)، die Mutter (الأم)، die Eltern (الوالدان — دائماً جمع)، der Bruder (الأخ)، die Schwester (الأخت)، die Geschwister (الإخوة — جمع لا مفرد له)، der Sohn (الابن)، die Tochter (الابنة)، der Opa/die Oma (الجد/الجدة).",
      whyAr:
        "لاحظ: الألمانية كلمات مركبة تُبنى من كلمتين — مثل Großvater (جد) = groß (كبير) + Vater. فهم هذا يساعدك على تخمين معاني كلمات جديدة.",
      table: {
        title: "أفراد العائلة",
        columns: ["ألماني", "عربي", "الجنس"],
        rows: [
          { label: "der Vater", cells: ["الأب", "مذكر"] },
          { label: "die Mutter", cells: ["الأم", "مؤنث"] },
          { label: "der Bruder", cells: ["الأخ", "مذكر"] },
          { label: "die Schwester", cells: ["الأخت", "مؤنث"] },
          { label: "die Eltern", cells: ["الوالدان", "جمع"] },
          { label: "die Geschwister", cells: ["الإخوة", "جمع"] },
          { label: "der Sohn", cells: ["الابن", "مذكر"] },
          { label: "die Tochter", cells: ["الابنة", "مؤنث"] },
          { label: "der Opa / die Oma", cells: ["الجد / الجدة", "مذكر/مؤنث"] },
        ],
      },
      examples: [
        { de: "Hast du Geschwister? — Ja, ich habe einen Bruder.", ar: "هل لديك إخوة؟ — نعم، لدي أخ." },
        { de: "Meine Tochter ist vier Jahre alt.", ar: "ابنتي عمرها أربع سنوات." },
        { de: "Mein Opa wohnt in Kairouan.", ar: "جدي يسكن في القيروان." },
        { de: "Sie hat zwei Schwestern.", ar: "لديها أختان." },
        { de: "Das ist mein Sohn, Ali.", ar: "هذا ابني، علي." },
      ],
      comparisonWithArabic:
        "مثل العربية، الجد = «أبو الأب» — لكن الألمانية تبنيها بكلمة واحدة مركبة: Großvater. والعربية كلمة «إخوة» جمع لا نعرف منه مفرداً — وكذلك الألمانية Geschwister (جمع بلا مفرد). تشابه لطيف!",
      eselsbruecke:
        "تذكّر أربعة ثنائيات متقابلة: Vater/Mutter، Bruder/Schwester، Sohn/Tochter، Opa/Oma — حفظ الثنائيات أسرع من حفظ كلمات منعزلة.",
      commonMistakes: [
        {
          wrong: "die Eltern ist nett",
          right: "die Eltern sind nett",
          whyAr: "Eltern جمع دائماً (الوالدان) — معها الفعل بصيغة الجمع sind وليس ist.",
        },
        {
          wrong: "Mein Vater und meine Mutter… (تكرار)",
          right: "Meine Eltern…",
          whyAr: "الألمانية تختصر «أبي وأمي» بكلمة واحدة: die Eltern. استخدامها علامة تقدم.",
        },
      ],
    },
  ],

  /* 4) الاستماع */
  listening: {
    items: [
      {
        id: "l1",
        title: "حديث عن العائلة",
        lines: [
          { speaker: "Mona", de: "Hallo Karim! Hast du Geschwister?", ar: "مرحباً كريم! هل لديك إخوة؟" },
          { speaker: "Karim", de: "Ja, ich habe einen Bruder und eine Schwester.", ar: "نعم، لدي أخ وأخت." },
          { speaker: "Mona", de: "Wie heißen sie?", ar: "ما اسماهما؟" },
          { speaker: "Karim", de: "Mein Bruder heißt Youssef und meine Schwester heißt Nour.", ar: "أخي اسمه يوسف وأختي اسمها نور." },
          { speaker: "Mona", de: "Und deine Eltern?", ar: "ووالداك؟" },
          { speaker: "Karim", de: "Meine Eltern wohnen in Tunis.", ar: "والداي يسكنان في تونس." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie viele Geschwister hat Karim?",
        questionAr: "كم عدد إخوة كريم؟",
        options: ["einen Bruder und eine Schwester", "zwei Brüder", "eine Schwester", "keine Geschwister"],
        correctIndex: 0,
        explanation: "قال كريم: ich habe einen Bruder und eine Schwester — أخ واحد وأخت واحدة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo wohnen die Eltern von Karim?",
        questionAr: "أين يسكن والدا كريم؟",
        options: ["in Sousse", "in Tunis", "in Berlin", "in Kairouan"],
        correctIndex: 1,
        explanation: "قال كريم: Meine Eltern wohnen in Tunis.",
        errorType: "vocabulary",
      },
    ],
  },

  /* 5) النطق */
  pronunciation: {
    id: "p1",
    title: "صوت ch والأصوات في كلمات العائلة",
    items: [
      { de: "ich", ar: "أنا", note: "ch بعد i تُنطق «ش» خفيفة جداً (أقرب إلى «خ» ناعمة): إيخ" },
      { de: "Bruder", ar: "الأخ", note: "الأصلي u يُنطق «وُو»: برو-در" },
      { de: "Schwester", ar: "الأخت", note: "sch تُنطق «ش»: شڤيس-تر" },
      { de: "Tochter", ar: "الابنة", note: "ch بعد o تُنطق «خ» حلقية: توخ-تر" },
      { de: "Geschwister", ar: "الإخوة", note: "ge في البداية تُنطق «غِ» خفيفة: غِشڤيس-تر" },
    ],
    tip: "الصوت ch هو الأصعب للعرب لأن له نطقين: «ش ناعمة» بعد i/e، و«خ» بعد a/o/u. استمع وكرر.",
    shadowing: [
      { de: "Mein Bruder heißt Youssef.", ar: "أخي اسمه يوسف.", tip: "Mein = مايْن (ei = آي)" },
      { de: "Meine Schwester heißt Nour.", ar: "أختي اسمها نور.", tip: "Meine = ماي-نِه" },
      { de: "Meine Eltern wohnen in Tunis.", ar: "والداي يسكنان في تونس.", tip: "wohnen = ڤوه-نِن (wo تنطق ڤو)" },
      { de: "Das ist meine Familie!", ar: "هذه عائلتي!", tip: "Familie = فا-مي-ليِه (3 مقاطع)" },
    ],
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة: من هو هذا الشخص؟",
      prompt: "Das ist mein Vater. (أكمل: ما اسمه؟ اكتب الجملة كاملة)",
      acceptedAnswers: ["Mein Vater heißt Ahmed", "Mein Vater heißt Ahmed.", "Er heißt Ahmed"],
      sampleAnswer: "Mein Vater heißt Ahmed.",
      explanation: "لتقديم شخص: Das ist mein + صلة القرابة. ولذكر الاسم: (الاسم) heißt.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ mein أو meine:",
      template: "Das ist ___ Vater. Das ist ___ Mutter. Das ist ___ Kind.",
      blanks: [
        { correct: "mein", options: ["mein", "meine"] },
        { correct: "meine", options: ["mein", "meine"] },
        { correct: "mein", options: ["mein", "meine"] },
      ],
      explanation: "Vater مذكر → mein. Mutter مؤنث → meine. Kind محايد → mein.",
      errorType: "gender",
    },
  ],

  /* 7) بنك التدريبات */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das ist ___ Mutter.",
      questionAr: "هذه أمي.",
      options: ["mein", "meine", "dein", "deine"],
      correctIndex: 1,
      explanation: "Mutter مؤنثة (die Mutter) → meine Mutter.",
      optionExplanations: [
        "mein تأتي مع الأسماء المذكرة/المحايدة، وMutter مؤنثة.",
        undefined,
        "dein تعني «لكَ» وليست ملكية المتكلم.",
        "deine تعني «لكِ» — نحتاج meine هنا.",
      ],
      errorType: "gender",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Hast du Geschwister?",
      questionAr: "ما معنى السؤال؟",
      options: ["هل لديك إخوة؟", "هل تحب عائلتك؟", "كم عمرك؟", "أين والدك؟"],
      correctIndex: 0,
      explanation: "Hast du = هل لديكَ، Geschwister = إخوة (جمع).",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Das", "ist", "mein", "Vater", "."],
      correctSentence: "Das ist mein Vater.",
      explanation: "Das ist (هذا هو) + mein Vater (أبي) — ترتيب مباشر ومألوف.",
      errorType: "word-order",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين سؤال صحيح:",
      tokens: ["du", "Geschwister", "Hast", "?"],
      correctSentence: "Hast du Geschwister?",
      explanation: "سؤال نعم/لا: الفعل أولاً — Hast (1) + du (2) + Geschwister.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "matching",
      instructionAr: "صل كلمة العائلة بمعناها:",
      pairs: [
        { left: "der Bruder", right: "الأخ" },
        { left: "die Schwester", right: "الأخت" },
        { left: "die Eltern", right: "الوالدان" },
        { left: "die Tochter", right: "الابنة" },
        { left: "der Sohn", right: "الابن" },
      ],
      explanation: "ثنائيات متقابلة: Bruder/Schwester وSohn/Tochter. تذكّرها كثنائيات!",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Mein Mutter heißt Leila.",
      wrongWord: "Mein",
      correctWord: "Meine",
      options: ["Meine", "Dein", "Mein", "Ihr"],
      explanation: "Mutter مؤنثة → Meine Mutter. هذا أشهر خطأ للمتعلم العربي في هذا الدرس.",
      errorType: "gender",
    },
    {
      id: "e7",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ بـ mein أو meine:",
      template: "___ Bruder ist zehn Jahre alt. ___ Schwester heißt Nour. ___ Eltern sind nett.",
      blanks: [
        { correct: "Mein", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
      ],
      explanation: "Bruder (مذكر) → Mein. Schwester (مؤنث) → Meine. Eltern (جمع) → Meine.",
      errorType: "gender",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه:",
      audioText: "Meine Schwester heißt Nour.",
      explanation: "الجملة الصحيحة: Meine Schwester heißt Nour — لاحظ meine لأن Schwester مؤنثة.",
      errorType: "spelling",
    },
  ],

  /* 8) الأخطاء والتريكات */
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "mein Mutter / mein Schwester",
        right: "meine Mutter / meine Schwester",
        whyAr: "الأسماء المؤنثة (die) تأخذ meine دائماً. المرأة والأنثى = e في النهاية!",
      },
      {
        wrong: "Meine Eltern ist nett.",
        right: "Meine Eltern sind nett.",
        whyAr: "Eltern جمع → الفعل بصيغة الجمع sind.",
      },
      {
        wrong: "Ich habe ein Bruder.",
        right: "Ich habe einen Bruder.",
        whyAr: "بعد الفعل haben (يملك) يأتي الاسم المذكر بحالة النصب (Akkusativ): einen Bruder. (سنفصل هذا في دروس لاحقة — فقط لاحظ الآن).",
      },
    ],
    eselsbruecken: [
      "«mein مع der/das، meine مع die» — كررها كلما شككت. والأنثى في العربية «هي» = e في نهاية meine!",
      "ثنائيات العائلة: Vater/Mutter, Bruder/Schwester, Sohn/Tochter, Opa/Oma.",
    ],
    culturalNote: {
      title: "العائلة في الثقافة الألمانية",
      content:
        "كلمة die Familie تشمل الأب والأم والأطفال فقط عادةً. أما الأقارب الأوسع (العم، الخالة...) فقد أصبحوا «Schwiegerfamilie» للأصهار. ولا تتفاجأ إن سألك ألماني عن عدد إخوتك مباشرة — السؤال عن العائلة عادي وودّي في أول لقاء.",
    },
  },

  /* 9) التقييم الختامي */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das ist ___ Vater.",
      options: ["mein", "meine", "deine", "eine"],
      correctIndex: 0,
      explanation: "Vater مذكر → mein Vater. (deine/eine مع مؤنث أو أسماء أخرى).",
      errorType: "gender",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ heißt deine Schwester? — Sie heißt Mona.",
      options: ["Was", "Wie", "Wo", "Wer"],
      correctIndex: 1,
      explanation: "السؤال عن الاسم: Wie heißt deine Schwester?",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات:",
      tokens: ["eine", "Schwester", "Ich", "habe", "."],
      correctSentence: "Ich habe eine Schwester.",
      explanation: "لدي أخت: Ich (1) + habe (2) + eine Schwester (المفعول).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل بـ mein/meine:",
      template: "___ Opa wohnt in Kairouan. ___ Oma wohnt in Tunis.",
      blanks: [
        { correct: "Mein", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
      ],
      explanation: "Opa مذكر → Mein Opa. Oma مؤنث → Meine Oma.",
      errorType: "gender",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Meine Vater heißt Ahmed.",
      wrongWord: "Meine",
      correctWord: "Mein",
      options: ["Mein", "Meine", "Deine", "Ihre"],
      explanation: "Vater مذكر → Mein Vater. قلب القاعدة: meine مع المؤنث.",
      errorType: "gender",
    },
  ],

  /* 10) البطاقات */
  flashcards: [
    { id: "fc1", de: "die Familie", ar: "العائلة", example: "Meine Familie ist groß.", exampleAr: "عائلتي كبيرة.", level: "A1" },
    { id: "fc2", de: "der Vater / die Mutter", ar: "الأب / الأم", example: "Mein Vater und meine Mutter.", exampleAr: "أبي وأمي.", level: "A1" },
    { id: "fc3", de: "der Bruder / die Schwester", ar: "الأخ / الأخت", example: "Ich habe einen Bruder.", exampleAr: "لدي أخ.", level: "A1" },
    { id: "fc4", de: "die Eltern", ar: "الوالدان", example: "Meine Eltern sind nett.", exampleAr: "والداي لطيفان.", level: "A1" },
    { id: "fc5", de: "die Geschwister", ar: "الإخوة (جمع)", example: "Hast du Geschwister?", exampleAr: "هل لديك إخوة؟", level: "A1" },
    { id: "fc6", de: "der Sohn / die Tochter", ar: "الابن / الابنة", example: "Das ist mein Sohn.", exampleAr: "هذا ابني.", level: "A1" },
    { id: "fc7", de: "mein / meine", ar: "لي (حسب الجنس)", example: "mein Vater, meine Mutter", exampleAr: "أبي، أمي", level: "A1" },
    { id: "fc8", de: "der Opa / die Oma", ar: "الجد / الجدة", example: "Mein Opa ist achtzig Jahre alt.", exampleAr: "جدي عمره ثمانون عاماً.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-02-1", type: "relay-instructions",
      titleAr: "انقل وصف عائلة بالعربية لصديق",
      sourceDe: "Mein Vater heißt Ahmed und ist 50 Jahre alt. Meine Mutter heißt Leila. Ich habe einen Bruder und zwei Schwestern.",
      taskAr: "أخبر صديقاً بالعربية عن عائلة الشخص: الأسماء، الأعمار، وعدد الإخوة والأخوات.",
      modelAnswerAr: "«والده اسمه أحمد وعمره 50 عاماً. أمه اسمها ليلى. لديه أخ واحد وأختان.»",
      keyPointsAr: ["ذكرت اسم الأب وعمره", "ذكرت اسم الأم", "ذكرت عدد الإخوة والأخوات بدقة"],
    },
  ],
      interaction: [
    {
      id: "int-a1-02-1",
      scenarioAr: "زميل جديد يسألك عن عائلتك.",
      scenarioDe: "Ein neuer Kollege fragt nach deiner Familie.",
      strategyAr: "الاستراتيجية: وصف أفراد العائلة والإجابة عن أسئلة المتابعة.",
      rounds: [
        {
          speakerDe: "Hast du Geschwister?",
          speakerAr: "هل لديك إخوة؟",
          options: [
            { de: "Ja, ich habe einen Bruder und eine Schwester.", ar: "نعم، لدي أخ وأخت.", best: true, replyDe: "Wie alt sind sie?", replyAr: "كم عمرهما؟" },
            { de: "Ich habe keine Familie.", ar: "لا أملك عائلة.", best: false, replyDe: "Das ist traurig. Jeder hat eine Familie.", replyAr: "هذا محزن. كل شخص لديه عائلة." },
          ],
        },
        {
          speakerDe: "Wie alt sind sie?",
          speakerAr: "كم عمرهما؟",
          options: [
            { de: "Mein Bruder ist 20 und meine Schwester ist 15.", ar: "أخي عمره 20 وأختي 15.", best: true, replyDe: "Schön! Und deine Eltern?", replyAr: "جميل! ووالداك؟" },
            { de: "Sie sind alt.", ar: "إنهما كبيران.", best: false, replyDe: "Wie alt genau?", replyAr: "كم عمرهما بالضبط؟" },
          ],
        },
        {
          speakerDe: "Was machen deine Eltern?",
          speakerAr: "ماذا يعمل والداك؟",
          options: [
            { de: "Mein Vater ist Lehrer und meine Mutter ist Ärztin.", ar: "والدي مدرّس ووالدتي طبيبة.", best: true, replyDe: "Sehr interessante Berufe!", replyAr: "مهن مثيرة للاهتمام!" },
            { de: "Sie sind zu Hause.", ar: "إنهما في المنزل.", best: false, replyDe: "Und ihre Berufe?", replyAr: "وما مهنتهما؟" },
          ],
        },
      ],
    },
  ],

};