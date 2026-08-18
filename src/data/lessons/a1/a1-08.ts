import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-08: الملابس والألوان
 * — الملابس + الألوان + الصفات الخبرية + tragen/finden + Wie findest du...?
 */
export const lessonA108: Lesson = {
  id: "a1-08",
  unitId: "a1-08",
  level: "A1",
  order: 1,
  titleDe: "Kleidung und Farben",
  titleAr: "الملابس والألوان",
  duration: 30,
  summary:
    "أسماء الملابس والألوان، وصفها بالصفات الخبرية، فعل tragen (يرتدي)، والسؤال عن الرأي: Wie findest du...?",

  lernziele: [
    { id: "z1", de: "Ich kann Kleidung nennen.", ar: "أن أسمّي الملابس: Hemd, Hose, Jacke, Schuhe..." },
    { id: "z2", de: "Ich kann die Farben sagen.", ar: "أن أسمّي الألوان: rot, blau, grün, gelb, schwarz, weiß." },
    { id: "z3", de: "Ich kann sagen: Ich trage ein rotes Hemd.", ar: "أن أصف ما أرتدي بجملة كاملة (مقدمة لتصريف الصفات)." },
    { id: "z4", de: "Ich kann fragen: Wie findest du das?", ar: "أن أسأل عن الرأي وأجيب: Das finde ich schön." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في العربية نقول: «قميص أحمر» — الصفة تتبع الاسم. في الألمانية، قبل أن تتعلم القواعد الكاملة (B1)، هناك صيغة بسيطة: الصفة «الخبرية» بعد الفعل sein. خمّن: كيف تقول «القميص أحمر»؟",
    motivatingQuestionDe: "Wie findest du meine Jacke?",
    contextAr:
      "نتسوق للملابس اليوم: الألوان، القطع الأساسية، وصف ما نرتديه، وطلب الرأي بلطف — كلها عبارات ستحتاجها في أي متجر ألماني.",
    contextDe: "Diese Hose ist sehr schön!",
    connectionToPreviousAr: "تعلمت في درس التسوق الأرقام والأسعار. اليوم نضيف الملابس والألوان — جولة تسوق كاملة بالملابس!",
    activateVocabulary: [
      { de: "die Kleidung", ar: "الملابس" },
      { de: "das Hemd", ar: "القميص" },
      { de: "die Hose", ar: "البنطال" },
      { de: "die Farbe", ar: "اللون" },
      { de: "tragen", ar: "يرتدي" },
    ],
  },

  theory: [
    {
      id: "t1",
      titleAr: "الملابس والألوان + الصفات الخبرية",
      titleDe: "Kleidung, Farben und prädikative Adjektive",
      explanationAr:
        "الملابس الأساسية: das Hemd (قميص)، die Hose (بنطال)، die Jacke (سترة)، das Kleid (فستان)، der Pullover (كنزة)، die Schuhe (حذاء — جمع)، die Socken (جوارب). الألوان: rot، blau، grün، gelb، schwarz، weiß، braun، grau. الصفة الخبرية (بعد sein) لا تتغير إطلاقاً: Das Hemd ist rot.",
      whyAr:
        "لماذا لا تتغير الصفة هنا؟ لأنها «خبر» يصف حالة الاسم ولا تلتصق به مباشرة. عندما تلتصق الصفة بالاسم (ein rotes Hemd) تبدأ قواعد التصريف الكاملة — وهذا موضوع B1. في A1 نكتفي بالخبرية السهلة.",
      table: {
        title: "الملابس والألوان",
        columns: ["القطعة", "العربية", "لون", "العربية"],
        rows: [
          { label: "das Hemd", cells: ["القميص", "rot", "أحمر"] },
          { label: "die Hose", cells: ["البنطال", "blau", "أزرق"] },
          { label: "die Jacke", cells: ["السترة", "grün", "أخضر"] },
          { label: "das Kleid", cells: ["الفستان", "gelb", "أصفر"] },
          { label: "der Pullover", cells: ["الكنزة", "schwarz", "أسود"] },
          { label: "die Schuhe", cells: ["الحذاء", "weiß", "أبيض"] },
          { label: "die Socken", cells: ["الجوارب", "braun", "بني"] },
          { label: "die Mütze", cells: ["القبعة", "grau", "رمادي"] },
        ],
      },
      examples: [
        { de: "Das Hemd ist rot.", ar: "القميص أحمر." },
        { de: "Meine Jacke ist blau.", ar: "سترتي زرقاء." },
        { de: "Die Schuhe sind schwarz.", ar: "الحذاء أسود." },
        { de: "Das Kleid ist sehr schön.", ar: "الفستان جميل جداً." },
        { de: "Der Pullover ist warm.", ar: "الكنزة دافئة." },
      ],
      comparisonWithArabic:
        "مثل العربية تماماً: «القميص أحمر» — خبر بدون تغيير. الصعوبة تبدأ عندما نقول «قميص أحمر» (الصفة قبل الاسم) — وهنا تتصرف الألمانية مثل العربية في شيء: الصفة قبل الاسم، لكن الألمانية تضيف نهايات (ein rotes Hemd). هذا للدرس المتقدم.",
      eselsbruecke:
        "«خبرية = ساكنة»: الصفة بعد sein لا تتحرك أبداً: ist rot، sind blau. احفظ الألوان بلعبة: «رُت-بلاو-غرين» (rot-blau-grün) مثل ألوان علم ألمانيا: أسود-أحمر-ذهبي!",
      commonMistakes: [
        { wrong: "Das Hemd rot (بدون ist)", right: "Das Hemd ist rot.", whyAr: "الجملة تحتاج فعلاً دائماً: ist. (تذكر درس sein!)." },
        { wrong: "die Schuhe ist neu", right: "die Schuhe sind neu", whyAr: "Schuhe جمع → sind." },
        { wrong: "خلط weiß (أبيض) مع weise (حكيم)", right: "weiß = أبيض (فستان أبيض)", whyAr: "weiß بلون، weise صفة حكمة — انتبه للإملاء." },
      ],
      relatedRuleComparison: {
        title: "الصفة الخبرية أم النعتية؟",
        content: "بعد sein: خبرية ساكنة (Das Hemd ist rot). قبل الاسم: نعتية متغيرة (ein rotes Hemd) — سنتعلمها في B1. في A1 استخدم الخبرية دائماً.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل tragen + السؤال عن الرأي (Wie findest du...?)",
      titleDe: "Das Verb „tragen“ und „Wie findest du...?“",
      explanationAr:
        "tragen (يرتدي/يحمل) فعل شاذ بتغيير صوتي: ich trage، du trägst، er trägt (a→ä). للسؤال عن الرأي: Wie findest du das? (كيف تجد هذا؟ = ما رأيك؟) والجواب: Ich finde das schön (أجده جميلاً).",
      whyAr:
        "لماذا a→ä؟ أفعال قليلة في الألمانية تغيّر حرف العلة في صيغتي du وer فقط (e→i أو a→ä). هذه «أفعال قوية» صغيرة — سنجمعها كلها في A2. الآن فقط لاحظ التغيير.",
      table: {
        title: "تصريف tragen",
        columns: ["الضمير", "trage/trägst/trägt", "مثال"],
        rows: [
          { label: "ich", cells: ["trage", "Ich trage ein Hemd."] },
          { label: "du", cells: ["trägst", "Was trägst du?"] },
          { label: "er/sie/es", cells: ["trägt", "Sie trägt ein Kleid."] },
          { label: "wir", cells: ["tragen", "Wir tragen Jacken."] },
          { label: "ihr", cells: ["tragt", "Was tragt ihr?"] },
          { label: "sie/Sie", cells: ["tragen", "Sie tragen Schuhe."] },
        ],
      },
      examples: [
        { de: "Ich trage ein blaues Hemd.", ar: "أرتدي قميصاً أزرق." },
        { de: "Wie findest du meine Jacke?", ar: "ما رأيك في سترتي؟" },
        { de: "Ich finde das Kleid sehr schön.", ar: "أجد الفستان جميلاً جداً." },
        { de: "Sie trägt ein rotes Kleid.", ar: "هي ترتدي فستاناً أحمر." },
        { de: "Die Schuhe finde ich zu teuer.", ar: "أجد الحذاء غالياً جداً." },
      ],
      comparisonWithArabic:
        "السؤال عن الرأي: العربية «ما رأيك؟» — الألمانية «كيف تجده؟» (Wie findest du...؟). نفس المعنى ببنية مختلفة. والجواب: Ich finde + اسم + صفة.",
      eselsbruecke:
        "«تراغِن مثل حمَل»: a تتحول ä في du/er (أشهر الأفعال الشاذة الصغيرة). و«فيندن» للرأي: Wie findest du? = ما رأيك؟",
      commonMistakes: [
        { wrong: "Ich trage rot Hemd.", right: "Ich trage ein rotes Hemd. (أو: Das Hemd ist rot)", whyAr: "لا يمكن وضع صفة قبل الاسم بدون أداة ونهاية — في A1 استخدم الخبرية: Das Hemd ist rot." },
        { wrong: "Wie finden du? (بدون استفهام صحيح)", right: "Wie findest du das?", whyAr: "الفعل يتصرف مع du: findest." },
        { wrong: "Ich finde das Hemd rot (خلط بين الوصف والرأي)", right: "Ich finde das Hemd schön.", whyAr: "finde + صفة رأي (schön)، وليس لوناً بالضرورة — لكن «Ich finde das Hemd rot» ممكنة فعلياً بمعنى «أراه أحمر»! استخدم schön للرأي." },
      ],
      relatedRuleComparison: {
        title: "tragen أم anziehen؟",
        content: "tragen = يرتدي (حالة دائمة: Ich trage eine Brille = أرتدي نظارة). anziehen = يرتدي (فعل لحظي: Ich ziehe eine Jacke an = أرتدي سترة الآن). anziehen فعل منفصل!",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "في متجر الملابس",
        lines: [
          { speaker: "Verkäuferin", de: "Guten Tag! Kann ich helfen?", ar: "نهارك سعيد! هل أساعدك؟" },
          { speaker: "Mona", de: "Ja, ich suche eine Jacke.", ar: "نعم، أبحث عن سترة." },
          { speaker: "Verkäuferin", de: "Welche Farbe möchten Sie?", ar: "أي لون تريدين؟" },
          { speaker: "Mona", de: "Ich möchte eine blaue Jacke.", ar: "أريد سترة زرقاء." },
          { speaker: "Verkäuferin", de: "Hier ist eine blaue Jacke. Wie finden Sie sie?", ar: "هاهي سترة زرقاء. ما رأيك بها؟" },
          { speaker: "Mona", de: "Die finde ich sehr schön! Was kostet sie?", ar: "أجدها جميلة جداً! بكم؟" },
          { speaker: "Verkäuferin", de: "Neununddreißig Euro.", ar: "تسعة وثلاثون يورو." },
        ],
      },
      {
        id: "l2",
        title: "وصف ما يرتديه الأصدقاء",
        lines: [
          { speaker: "Karim", de: "Schau mal! Ich habe ein neues Hemd.", ar: "انظر! لدي قميص جديد." },
          { speaker: "Anna", de: "Oh, sehr schön! Es ist rot, oder?", ar: "أوه، جميل جداً! إنه أحمر، صحيح؟" },
          { speaker: "Karim", de: "Ja, rot ist meine Lieblingsfarbe.", ar: "نعم، الأحمر لوني المفضل." },
          { speaker: "Anna", de: "Und ich trage heute ein blaues Kleid.", ar: "وأنا أرتدي اليوم فستاناً أزرق." },
          { speaker: "Karim", de: "Das Kleid finde ich sehr elegant!", ar: "أجد الفستان أنيقاً جداً!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was sucht Mona?",
        questionAr: "ماذا تبحث منى؟",
        options: ["eine blaue Jacke", "ein rotes Hemd", "ein blaues Kleid", "schwarze Schuhe"],
        correctIndex: 0,
        explanation: "قالت: Ich möchte eine blaue Jacke — سترة زرقاء.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet die Jacke?",
        questionAr: "بكم السترة؟",
        options: ["39 Euro", "30 Euro", "33 Euro", "90 Euro"],
        correctIndex: 0,
        explanation: "قالت البائعة: Neununddreißig Euro = 39.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was trägt Anna?",
        questionAr: "ماذا ترتدي آنا؟",
        options: ["ein blaues Kleid", "ein rotes Hemd", "eine blaue Jacke", "eine Mütze"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich trage heute ein blaues Kleid.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الألوان: ei، sch، وä",
    items: [
      { de: "weiß", ar: "أبيض", note: "ei = آي + ß = سّ: ڤايس" },
      { de: "blau", ar: "أزرق", note: "au = آو: بلاو" },
      { de: "grün", ar: "أخضر", note: "ü: غرين (شفتان مقربتان)" },
      { de: "gelb", ar: "أصفر", note: "g = غ + l: غيلب" },
      { de: "schwarz", ar: "أسود", note: "sch = ش: شڤارتس" },
      { de: "die Schuhe", ar: "الحذاء", note: "sch + u + h: شووه" },
    ],
    tip: "الألوان الأربعة التي تنتهي بصوت مختلف عن المتوقع: weiß (آي)، blau (آو)، grün (ü)، schwarz (ش). ركّز عليها.",
    shadowing: [
      { de: "Das Hemd ist rot.", ar: "القميص أحمر.", tip: "rot = روت (o قصير)" },
      { de: "Meine Jacke ist blau.", ar: "سترتي زرقاء.", tip: "blau = بلاو (au = آو)" },
      { de: "Wie findest du das Kleid?", ar: "ما رأيك في الفستان؟", tip: "Kleid = كلايت (ei = آي)" },
      { de: "Die Schuhe sind schwarz.", ar: "الحذاء أسود.", tip: "schwarz = شڤارتس (sch + w = ڤ)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "صف ما ترتديه اليوم:",
      prompt: "Was trägst du heute? (اكتب جملة كاملة)",
      acceptedAnswers: ["Ich trage ein blaues Hemd", "Ich trage eine Jacke", "Ich trage schwarze Schuhe"],
      sampleAnswer: "Ich trage ein blaues Hemd und schwarze Schuhe.",
      explanation: "الصيغة: Ich trage + قطعة + (لون). في A1 نستخدم ein + لون بنهاية -es/-e.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالألوان الصحيحة (rot/blau/grün/schwarz):",
      template: "Der Himmel ist ___ (أزرق). Das Gras ist ___ (أخضر). Blut ist ___ (أحمر).",
      blanks: [
        { correct: "blau", options: ["blau", "grün", "rot"] },
        { correct: "grün", options: ["blau", "grün", "rot"] },
        { correct: "rot", options: ["blau", "grün", "rot"] },
      ],
      explanation: "السماء زرقاء (blau)، العشب أخضر (grün)، الدم أحمر (rot).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich finde das Kleid sehr schön.",
      explanation: "أجد الفستان جميلاً جداً — Ich finde + الاسم + صفة الرأي.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das Hemd ist ___.",
      questionAr: "القميص أحمر.",
      options: ["rot", "rote", "rotes", "roten"],
      correctIndex: 0,
      explanation: "الصفة الخبرية بعد sein لا تتغير: ist rot.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Was ___ du? — Ich trage eine Jacke.",
      options: ["trägst", "trage", "trägt", "tragt"],
      correctIndex: 0,
      explanation: "مع du: trägst (a→ä).",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل اللون بمعناه:",
      pairs: [
        { left: "weiß", right: "أبيض" },
        { left: "schwarz", right: "أسود" },
        { left: "gelb", right: "أصفر" },
        { left: "braun", right: "بني" },
      ],
      explanation: "أربعة ألوان أساسية — أضفها للألوان التي تعرفها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ist", "Die", "Jacke", "blau", "."],
      correctSentence: "Die Jacke ist blau.",
      explanation: "السترة زرقاء: Die Jacke + ist + blau.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Die Schuhe ist schwarz.",
      wrongWord: "ist",
      correctWord: "sind",
      options: ["sind", "sein", "bist", "seid"],
      explanation: "die Schuhe جمع → sind.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ tragen بتصريف صحيح:",
      template: "Ich ___ eine Brille. Du ___ ein Hemd. Sie ___ ein Kleid.",
      blanks: [
        { correct: "trage", options: ["trage", "trägst", "trägt"] },
        { correct: "trägst", options: ["trage", "trägst", "trägt"] },
        { correct: "trägt", options: ["trage", "trägst", "trägt"] },
      ],
      explanation: "ich trage، du trägst، sie trägt — تغيّر a→ä في du/er/sie.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى سؤال عن الرأي:",
      prompt: "Meine neue Jacke. → (اسأل: ما رأيك في سترتي الجديدة؟)",
      acceptedAnswers: ["Wie findest du meine neue Jacke", "Wie findest du meine Jacke", "Wie findest du meine neue Jacke?"],
      sampleAnswer: "Wie findest du meine neue Jacke?",
      explanation: "Wie findest du + مفعول به. (neue تلميح لتصريف الصفات — سنكملها في B1).",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich trage eine Brille.",
      questionAr: "ما معنى الجملة؟",
      options: ["أرتدي نظارة", "أبحث عن نظارة", "أشتري نظارة", "أحمل نظارة فقط"],
      correctIndex: 0,
      explanation: "tragen = يرتدي (عادة دائمة): أرتدي نظارة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Das Kleid ist sehr schöne.",
      wrongWord: "schöne",
      correctWord: "schön",
      options: ["schön", "schöne", "schönen", "schönes"],
      explanation: "الصفة الخبرية بعد sein بلا نهاية: ist schön.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich trage heute eine rote Mütze.",
      explanation: "أرتدي اليوم قبعة حمراء — rote صفة قبل اسم مؤنث (تلميح للمستقبل).",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Das Hemd rot. (بدون ist)", right: "Das Hemd ist rot.", whyAr: "الجملة تحتاج فعلاً دائماً — تذكر درس sein!" },
      { wrong: "die Schuhe ist neu", right: "die Schuhe sind neu", whyAr: "جمع → sind." },
      { wrong: "Ich trage eine rot Jacke.", right: "Ich trage eine rote Jacke. (أو: Die Jacke ist rot)", whyAr: "الصفة قبل الاسم تحتاج نهاية (rote) — في A1 الأسهل: الخبرية Die Jacke ist rot." },
    ],
    eselsbruecken: [
      "«ألوان علم ألمانيا»: أسود-أحمر-ذهبي (schwarz-rot-gold) — ستتذكرها في أي احتفال ألماني.",
      "«الصفة الخبرية ساكنة»: ist + صفة بدون نهاية دائماً في A1.",
    ],
    culturalNote: {
      title: "عند شراء الملابس في ألمانيا",
      content:
        "في المتاجر الألمانية: «Anprobieren» (التجربة) متاحة دائماً مع «Umkleidekabine» (غرفة القياس). وإذا لم يعجبك، لديك حق «Umtausch» (الاستبدال) خلال أسبوعين عادة بشرط الاحتفاظ بالإيصال (der Kassenbon).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Die Hose ist ___.",
      questionAr: "البنطال أزرق.",
      options: ["blau", "blaue", "blauen", "blaues"],
      correctIndex: 0,
      explanation: "الصفة الخبرية: ist blau.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Was ___ du heute? — Ich trage ein Hemd.",
      options: ["trägst", "trage", "trägt", "tragt"],
      correctIndex: 0,
      explanation: "du → trägst (a→ä).",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["findest", "Wie", "Jacke", "meine", "du", "?"],
      correctSentence: "Wie findest du meine Jacke?",
      explanation: "سؤال W: Wie + findest (V2) + du + meine Jacke.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich trage ein rot Hemd.",
      wrongWord: "rot",
      correctWord: "rotes",
      options: ["rotes", "rote", "roten", "rot"],
      explanation: "الصفة قبل اسم محايد (das Hemd): ein rotes Hemd. أو استخدم الخبرية: Das Hemd ist rot.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الألوان:",
      template: "Die Nacht ist ___ (أسود). Der Schnee ist ___ (أبيض). Die Banane ist ___ (أصفر).",
      blanks: [
        { correct: "schwarz", options: ["schwarz", "weiß", "gelb"] },
        { correct: "weiß", options: ["schwarz", "weiß", "gelb"] },
        { correct: "gelb", options: ["schwarz", "weiß", "gelb"] },
      ],
      explanation: "الليل أسود، الثلج أبيض، الموزة صفراء.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Kleidung", ar: "الملابس", example: "Ich kaufe neue Kleidung.", exampleAr: "أشتري ملابس جديدة.", level: "A1" },
    { id: "fc2", de: "das Hemd / die Hose", ar: "القميص / البنطال", example: "Das Hemd ist weiß.", exampleAr: "القميص أبيض.", level: "A1" },
    { id: "fc3", de: "die Jacke", ar: "السترة", example: "Meine Jacke ist warm.", exampleAr: "سترتي دافئة.", level: "A1" },
    { id: "fc4", de: "das Kleid", ar: "الفستان", example: "Das Kleid ist elegant.", exampleAr: "الفستان أنيق.", level: "A1" },
    { id: "fc5", de: "die Schuhe", ar: "الحذاء (جمع)", example: "Die Schuhe sind neu.", exampleAr: "الحذاء جديد.", level: "A1" },
    { id: "fc6", de: "rot / blau / grün", ar: "أحمر / أزرق / أخضر", example: "Der Himmel ist blau.", exampleAr: "السماء زرقاء.", level: "A1" },
    { id: "fc7", de: "tragen", ar: "يرتدي", example: "Ich trage eine Brille.", exampleAr: "أرتدي نظارة.", level: "A1" },
    { id: "fc8", de: "Wie findest du …?", ar: "ما رأيك في…؟", example: "Wie findest du mein Hemd?", exampleAr: "ما رأيك في قميصي؟", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-08-1", type: "summarize-de-to-ar",
      titleAr: "لخّص وصف ملابس بالعربية",
      sourceDe: "Im Winter trage ich eine warme Jacke, einen Schal und Handschuhe. Meine Lieblingsfarbe ist dunkelblau.",
      taskAr: "انقل بالعربية ما يرتديه الشخص في الشتاء ولونه المفضل.",
      modelAnswerAr: "«في الشتاء أرتدي سترة دافئة ووشاحاً وقفازات. لوني المفضل أزرق داكن.»",
      keyPointsAr: ["ذكرت الملابس الشتوية (سترة، وشاح، قفازات)", "نقلت اللون المفضل (أزرق داكن)"],
    },
  ],
      interaction: [
    {
      id: "int-a1-08-1",
      scenarioAr: "صديقة تسأل رأيك في ملابس.",
      scenarioDe: "Eine Freundin fragt deine Meinung über Kleidung.",
      strategyAr: "الاستراتيجية: إبداء الرأي بلطف (Ich finde... / Wie findest du...?).",
      rounds: [
        {
          speakerDe: "Wie findest du diese Jacke?",
          speakerAr: "كيف تجد هذه السترة؟",
          options: [
            { de: "Ich finde sie sehr schön! Sie passt gut zu dir.", ar: "أجدها جميلة جداً! تناسبك جيداً.", best: true, replyDe: "Danke! Und die Farbe?", replyAr: "شكراً! واللون؟" },
            { de: "Sie ist hässlich, wie du.", ar: "إنها قبيحة مثلك.", best: false, replyDe: "Das ist wirklich unhöflich!", replyAr: "هذا غير مهذب حقاً!" },
          ],
        },
        {
          speakerDe: "Welche Farbe passt besser?",
          speakerAr: "أي لون يناسب أكثر؟",
          options: [
            { de: "Ich denke, Rot passt besser als Blau.", ar: "أعتقد أن الأحمر يناسب أكثر من الأزرق.", best: true, replyDe: "Guter Tipp! Ich probiere Rot.", replyAr: "نصيحة جيدة! سأجرب الأحمر." },
            { de: "Alle Farben sind gleich.", ar: "كل الألوان متشابهة.", best: false, replyDe: "Nein, Farben machen einen großen Unterschied!", replyAr: "لا، الألوان تصنع فرقاً كبيراً!" },
          ],
        },
      ],
    },
  ],

};