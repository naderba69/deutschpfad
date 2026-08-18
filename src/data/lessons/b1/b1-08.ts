import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-08: التقنية والرقمنة — الروابط المزدوجة + المستقبل (Futur I)
 */
export const lessonB108: Lesson = {
  id: "b1-08",
  unitId: "b1-08",
  level: "B1",
  order: 1,
  titleDe: "Technik und Digitales",
  titleAr: "التقنية والرقمنة",
  duration: 40,
  summary:
    "التقنية في الحياة اليومية، الروابط المزدوجة (nicht nur... sondern auch, sowohl... als auch, weder... noch, entweder... oder, je... desto)، والمستقبل (Futur I) مع werden.",

  lernziele: [
    { id: "z1", de: "Ich kann über Technik sprechen.", ar: "أن أتحدث عن التقنية والرقمنة وإيجابياتها وسلبياتها." },
    { id: "z2", de: "Ich kann die zweiteiligen Konnektoren benutzen.", ar: "أن أستخدم الروابط المزدوجة: ليس فقط... بل أيضاً، إما... أو..." },
    { id: "z3", de: "Ich kann das Futur I bilden: werden + Infinitiv.", ar: "أن أصوغ المستقبل: سوف + الفعل." },
      { id: "z4", de: "Ich kann über die Vor- und Nachteile der Digitalisierung diskutieren.", ar: "أن أناقش إيجابيات وسلبيات الرقمنة." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A1 تعلمت werden (يصبح) وفي B1 تعلمته (مجهول). واليوم الاستخدام الثالث: المستقبل! Ich werde lernen = سأتعلم. هل لاحظت؟ werden يتغير معناها حسب ما يليها: صفة (يصبح) / تصريف ثالث (مجهول) / مصدر (مستقبل)!",
    motivatingQuestionDe: "Wie wird die Zukunft aussehen?",
    contextAr:
      "نناقش التقنية: مزايا وعيوب، ثم نضيف الروابط المزدوجة للتعبير المتوازن، والمستقبل للتحدث عن الغد.",
    contextDe: "Die Technik wird sich weiter entwickeln.",
    connectionToPreviousAr: "تتذكر werden الثلاثية (يصبح/مجهول). اليوم: المستقبل — يكتمل مثلث werden. والروابط المزدوجة تضيف عمقاً لتعبيرك.",
    activateVocabulary: [
      { de: "die Technik", ar: "التقنية" },
      { de: "digital", ar: "رقمي" },
      { de: "der Computer", ar: "الحاسوب" },
      { de: "die Zukunft", ar: "المستقبل" },
      { de: "die Entwicklung", ar: "التطور" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر تصريف werden:",
      questionDe: "Es ___ kalt. (يصبح)",
      options: ["wird", "werde", "wirst", "werden"],
      correctIndex: 0,
      explanation: "مع es: wird (درس الطقس).",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر المجهول:",
      questionDe: "Das Haus ___ gebaut. (يُبنى)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "مجهول مضارع (درس البيئة).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل:",
      template: "Ich ___ am Computer. (أعمل)",
      blanks: [
        { correct: "arbeite", options: ["arbeite", "arbeitest", "arbeitet"] },
      ],
      explanation: "مع ich: arbeite (درس المهن).",
      errorType: "conjugation",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "المستقبل (Futur I): werden + Infinitiv",
      titleDe: "Das Futur I: Ich werde lernen",
      explanationAr:
        "المستقبل = werden (مضارع) + Infinitiv في النهاية: Ich werde morgen lernen. (سأتعلم غداً). التصريف مثل werden العادي: werde, wirst, wird... وملاحظة: كثيراً ما نستخدم المضارع + ظرف زمان بدل المستقبل: Ich lerne morgen. لكن المستقبل يستخدم للتوقعات والوعود.",
      whyAr:
        "لماذا المستقبل بفعلين؟ لأن الألمانية تميز «النية والتوقع» (werde + مصدر) عن «الواقع الحالي». وعندما تقرأ «Die Zukunft wird sich ändern» فأنت تعرف أنها توقع — وليس حقيقة بعد.",
      table: {
        title: "Futur I",
        columns: ["الضمير", "werden", "مثال"],
        rows: [
          { label: "ich", cells: ["werde", "Ich werde lernen."] },
          { label: "du", cells: ["wirst", "Du wirst verstehen."] },
          { label: "er/sie/es", cells: ["wird", "Sie wird kommen."] },
          { label: "wir", cells: ["werden", "Wir werden arbeiten."] },
          { label: "ihr", cells: ["werdet", "Ihr werdet sehen."] },
          { label: "sie/Sie", cells: ["werden", "Sie werden gewinnen."] },
        ],
      },
      examples: [
        { de: "Ich werde morgen Deutsch lernen.", ar: "سأتعلم الألمانية غداً." },
        { de: "Die Technik wird sich weiter entwickeln.", ar: "ستتطور التقنية أكثر." },
        { de: "Wir werden die Zukunft gestalten.", ar: "سنشكل المستقبل." },
        { de: "Du wirst es verstehen.", ar: "سوف تفهمها." },
        { de: "Der Computer wird immer wichtiger werden.", ar: "سيصبح الحاسوب أكثر أهمية." },
      ],
      comparisonWithArabic:
        "«سأتعلم» = Ich werde lernen. العربية تملك سـ/سوف — والألمانية werden + مصدر. مطابقة شبه تامة! والتوقع: «سوف يتغير» = wird sich ändern.",
      eselsbruecke:
        "«werden + مصدر = سوف» — التوقع والنية. وتذكّر مثلث werden: + صفة (يصبح) / + Partizip II (مجهول) / + مصدر (مستقبل).",
      commonMistakes: [
        { wrong: "Ich werde morgen lernen werde. (تضاعف)", right: "Ich werde morgen lernen.", whyAr: "werden مرة واحدة + مصدر في النهاية." },
        { wrong: "Ich werde lerne (مصدر أم تصريف؟)", right: "Ich werde lernen (مصدر).", whyAr: "بعد werden: Infinitiv دائماً." },
        { wrong: "werde أم wirst؟", right: "werde مع ich، wirst مع du", whyAr: "سلم werden: werde-wirst-wird." },
      ],
      relatedRuleComparison: {
        title: "Futur أم Präsens + ظرف؟",
        content: "كلاهما للمستقبل: Ich lerne morgen (مضارع + غداً — عامي). Ich werde morgen lernen (رسمي/توقع). في المحادثة المضارع شائع — وفي الكتابة الرسمية المستقبل.",
      },
    },
    {
      id: "t2",
      titleAr: "الروابط المزدوجة (Zweiteilige Konnektoren)",
      titleDe: "nicht nur ... sondern auch, weder ... noch, entweder ... oder",
      explanationAr:
        "الروابط المزدوجة تربط جزأين متوازيين: nicht nur... sondern auch (ليس فقط... بل أيضاً)، sowohl... als auch (كلاهما)، weder... noch (لا... ولا)، entweder... oder (إما... أو)، je... desto (كلما... كلما). لا تغير ترتيب الفعل (جملة عادية).",
      whyAr:
        "لماذا «مزدوجة»؟ لأنها تمسك طرفين: إما هذا أو ذاك. والألمانية تضع «فاصلة» بينهما غالباً. هذه الروابط تجعل تعبيرك دقيقاً ومتوازناً — علامة مستوى B1.",
      table: {
        title: "الروابط المزدوجة",
        columns: ["الرابط", "المعنى", "مثال"],
        rows: [
          { label: "nicht nur ... sondern auch", cells: ["ليس فقط... بل أيضاً", "Er spricht nicht nur Deutsch, sondern auch Englisch."] },
          { label: "sowohl ... als auch", cells: ["كلاهما", "Sowohl Sami als auch Anna lernen Deutsch."] },
          { label: "weder ... noch", cells: ["لا... ولا", "Ich habe weder Zeit noch Geld."] },
          { label: "entweder ... oder", cells: ["إما... أو", "Entweder du lernst, oder du bestehst nicht."] },
          { label: "je ... desto", cells: ["كلما... كلما", "Je mehr du übst, desto besser wirst du."] },
        ],
      },
      examples: [
        { de: "Die Technik ist nicht nur praktisch, sondern auch spannend.", ar: "التقنية ليست عملية فقط بل مثيرة أيضاً." },
        { de: "Sowohl das Handy als auch der Computer sind nützlich.", ar: "كل من الهاتف والحاسوب مفيدان." },
        { de: "Ich habe weder Zeit noch Geduld.", ar: "ليس لدي وقت ولا صبر." },
        { de: "Entweder wir passen uns an, oder wir bleiben zurück.", ar: "إما أن نتكيف أو نبقى متخلفين." },
        { de: "Je mehr Technik wir haben, desto schneller leben wir.", ar: "كلما زادت التقنية زادت سرعة حياتنا." },
      ],
      comparisonWithArabic:
        "«ليس فقط... بل أيضاً» = nicht nur... sondern auch — مطابقة تامة! «إما... أو» = entweder... oder، «لا... ولا» = weder... noch. والروابط العربية نفسها تماماً.",
      eselsbruecke:
        "«الأربعة التوأم»: nicht nur-sondern auch، sowohl-als auch، weder-noch، entweder-oder. احفظها كثنائيات متلاصقة — ولا تفرقها أبداً.",
      commonMistakes: [
        { wrong: "nicht nur... sondern auch أم sondern؟", right: "بعد nicht nur يأتي sondern auch (وليس sondern وحدها)", whyAr: "الزوج كامل: nicht nur... sondern auch." },
        { wrong: "weder... noch (لا... ولا) — النفي المزدوج مقصود هنا", right: "weder... noch صحيحة بمعنى لا... ولا", whyAr: "هنا النفي المزدوج مطلوب (عكس القاعدة العامة)." },
        { wrong: "je... desto مع ترتيب خاطئ", right: "Je + جملة + desto + جملة: Je mehr... desto besser", whyAr: "كلما... كلما: جزآن متوازيان." },
      ],
      relatedRuleComparison: {
        title: "entweder... oder أم oder؟",
        content: "oder = أو (بسيطة). entweder... oder = إما... أو (مشددة الاختيار). الأولى محايدة، الثانية حاسمة: إما هذا أو ذاك.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "نقاش التقنية",
        lines: [
          { speaker: "Moderator", de: "Wie wird die Technik die Zukunft verändern?", ar: "كيف ستغير التقنية المستقبل؟" },
          { speaker: "Sami", de: "Die künstliche Intelligenz wird viele Jobs verändern.", ar: "سيتغير الذكاء الاصطناعي الكثير من الوظائف." },
          { speaker: "Anna", de: "Ich denke, sie wird nicht nur helfen, sondern auch neue Berufe schaffen.", ar: "أعتقد أنها لن تساعد فقط بل ستخلق مهناً جديدة أيضاً." },
          { speaker: "Moderator", de: "Und die Risiken?", ar: "والمخاطر؟" },
          { speaker: "Sami", de: "Je mehr wir von der Technik abhängen, desto verletzlicher werden wir.", ar: "كلما اعتمدنا على التقنية أكثر أصبحنا أكثر هشاشة." },
        ],
      },
      {
        id: "l2",
        title: "قرار تقني",
        lines: [
          { speaker: "Karim", de: "Entweder ich kaufe ein neues Handy, oder ich warte noch ein Jahr.", ar: "إما أن أشتري هاتفاً جديداً أو أنتظر سنة أخرى." },
          { speaker: "Mona", de: "Warte! Dein Handy funktioniert doch.", ar: "انتظر! هاتفك يعمل." },
          { speaker: "Karim", de: "Ja, aber die Kamera ist nicht gut. Sowohl die Fotos als auch die Videos sind schlecht.", ar: "نعم، لكن الكاميرا ليست جيدة. الصور والفيديوهات سيئة." },
          { speaker: "Mona", de: "Dann kauf! Du wirst es nicht bereuen.", ar: "إذن اشترِ! لن تندم." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was wird die KI verändern?",
        questionAr: "ماذا سيغير الذكاء الاصطناعي؟",
        options: ["viele Jobs", "das Wetter", "die Politik nur", "nichts"],
        correctIndex: 0,
        explanation: "قال سامي: Die künstliche Intelligenz wird viele Jobs verändern.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was sagt Sami über die Abhängigkeit?",
        questionAr: "ماذا يقول سامي عن الاعتماد؟",
        options: ["Je mehr Abhängigkeit, desto verletzlicher", "Es ist kein Problem", "Die Abhängigkeit hilft", "Wir sind sicher"],
        correctIndex: 0,
        explanation: "قال: Je mehr wir abhängen, desto verletzlicher werden wir.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum will Karim ein neues Handy?",
        questionAr: "لماذا يريد كريم هاتفاً جديداً؟",
        options: ["Die Kamera ist schlecht", "Das Handy ist kaputt", "Es ist zu alt", "Er hat es verloren"],
        correctIndex: 0,
        explanation: "قال كريم: Die Kamera ist nicht gut. Sowohl Fotos als auch Videos sind schlecht.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات التقنية: ch، ie، وk",
    items: [
      { de: "die Technik", ar: "التقنية", note: "ch بعد e = ناعمة: تيشنيك" },
      { de: "der Computer", ar: "الحاسوب", note: "كلمة إنجليزية: كومپيوتِر" },
      { de: "digital", ar: "رقمي", note: "g = غ: ديغيتال" },
      { de: "die Entwicklung", ar: "التطور", note: "w = ڤ: إنت-ڤيكلونغ" },
      { de: "die Intelligenz", ar: "الذكاء", note: "tz = تس: إنتِلِيغِنتس" },
      { de: "die Zukunft", ar: "المستقبل", note: "z = تس + ch = خ: تسوكونفت" },
    ],
    tip: "Zukunft = تسوكونفت — Z تس + ch خ. كلمة المستقبل نفسها صعبة النطق — أتقنها!",
    shadowing: [
      { de: "Ich werde morgen lernen.", ar: "سأتعلم غداً.", tip: "werde lernen — المستقبل" },
      { de: "Die Technik wird sich ändern.", ar: "ستتغير التقنية.", tip: "wird sich ändern" },
      { de: "Je mehr du übst, desto besser.", ar: "كلما تدربت أكثر كان أفضل.", tip: "je... desto" },
      { de: "Entweder du lernst, oder du verlierst.", ar: "إما أن تتعلم أو تخسر.", tip: "entweder... oder" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب توقعاً بالمستقبل:",
      prompt: "اكتب: «سأتعلم الألمانية غداً» (Futur I)",
      acceptedAnswers: ["Ich werde morgen Deutsch lernen", "Ich werde morgen Deutsch lernen."],
      sampleAnswer: "Ich werde morgen Deutsch lernen.",
      explanation: "Futur: werde + المصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالرابط المزدوج:",
      template: "Er spricht ___ Deutsch ___ Englisch. (ليس فقط بل أيضاً) Ich habe ___ Zeit ___ Geld. (لا ولا)",
      blanks: [
        { correct: "nicht nur ... sondern auch", options: ["nicht nur ... sondern auch", "weder ... noch", "entweder ... oder"] },
        { correct: "weder ... noch", options: ["nicht nur ... sondern auch", "weder ... noch", "entweder ... oder"] },
      ],
      explanation: "ليس فقط بل أيضاً / لا ولا.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Je mehr du übst, desto besser wirst du.",
      explanation: "كلما تدربت أكثر أصبحت أفضل — je... desto.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر المستقبل:",
      questionDe: "Ich ___ morgen Deutsch ___. (تعلم)",
      options: ["werde ... lernen", "werde ... lerne", "wird ... lernen", "werde ... gelernt"],
      correctIndex: 0,
      explanation: "Futur: werde + Infinitiv.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الرابط المزدوج:",
      questionDe: "Ich habe ___ Zeit ___ Geld.",
      options: ["weder ... noch", "nicht nur ... sondern auch", "entweder ... oder", "sowohl ... als auch"],
      correctIndex: 0,
      explanation: "لا وقت ولا مال → weder... noch.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الرابط بمعناه:",
      pairs: [
        { left: "nicht nur... sondern auch", right: "ليس فقط بل أيضاً" },
        { left: "sowohl... als auch", right: "كلاهما" },
        { left: "weder... noch", right: "لا... ولا" },
        { left: "entweder... oder", right: "إما... أو" },
      ],
      explanation: "الروابط المزدوجة الأربعة.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["werde", "Ich", "morgen", "lernen", "Deutsch", "."],
      correctSentence: "Ich werde morgen Deutsch lernen.",
      explanation: "المستقبل: werde + التفاصيل + المصدر في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich werde morgen lernen werde.",
      wrongWord: "lernen werde",
      correctWord: "lernen",
      options: ["lernen", "lerne", "gelernt", "lernen lernen"],
      explanation: "werden مرة واحدة + مصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالرابط:",
      template: "___ du lernst ___ du verlierst. (إما أو) Sie spricht ___ Deutsch ___ Französisch. (كلاهما)",
      blanks: [
        { correct: "Entweder ... oder", options: ["Entweder ... oder", "Weder ... noch", "Nicht nur ... sondern auch"] },
        { correct: "sowohl ... als auch", options: ["sowohl ... als auch", "weder ... noch", "entweder ... oder"] },
      ],
      explanation: "إما أو / كلاهما.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى المستقبل:",
      prompt: "Ich lerne Deutsch. → (سأتعلم غداً)",
      acceptedAnswers: ["Ich werde morgen Deutsch lernen", "Ich werde Deutsch lernen"],
      sampleAnswer: "Ich werde morgen Deutsch lernen.",
      explanation: "المضارع → werden + مصدر.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die künstliche Intelligenz",
      questionAr: "ما معنى العبارة؟",
      options: ["الذكاء الاصطناعي", "التقنية الحديثة", "الرقمنة", "التطور التكنولوجي"],
      correctIndex: 0,
      explanation: "künstlich = اصطناعي + Intelligenz = ذكاء.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich habe nicht weder Zeit noch Geld.",
      wrongWord: "nicht weder",
      correctWord: "weder",
      options: ["weder", "nicht weder", "auch weder", "entweder"],
      explanation: "weder... noch تحمل النفي بنفسها — لا نضيف nicht.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Sowohl das Handy als auch der Computer sind nützlich.",
      explanation: "كل من الهاتف والحاسوب مفيدان — sowohl... als auch.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich werde morgen lernen werde.", right: "Ich werde morgen lernen.", whyAr: "werden مرة واحدة." },
      { wrong: "nicht weder (نفي مزدوج خاطئ مع weder)", right: "weder... noch وحدها", whyAr: "weder تحمل النفي." },
      { wrong: "je... desto بترتيب خاطئ", right: "Je + جملة، desto + جملة", whyAr: "كلما... كلما متوازيان." },
    ],
    eselsbruecken: [
      "«werden + مصدر = سوف» — الاستخدام الثالث لـ werden.",
      "«الروابط التوأم الأربعة»: nicht nur-sondern auch، sowohl-als auch، weder-noch، entweder-oder.",
    ],
    culturalNote: {
      title: "الرقمنة في ألمانيا",
      content:
        "ألمانيا متقدمة تقنياً لكن بعض الإجراءات ما زالت ورقية! «Digitalisierung» (الرقمنة) موضوع نقاش ساخن. والخصوصية («Datenschutz») مقدسة قانونياً. وعبارة شائعة: «Ich habe mein Handy vergessen» — كم مرة تسمعها؟",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المستقبل:",
      questionDe: "Wir ___ die Zukunft ___. (شكل)",
      options: ["werden ... gestalten", "werden ... gestalten", "werdet ... gestalten", "werden ... gestaltet"],
      correctIndex: 0,
      explanation: "Futur: werden + Infinitiv.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الرابط المزدوج:",
      questionDe: "___ er kommt, ___ er ruft an. (إما أو)",
      options: ["Entweder ... oder", "Weder ... noch", "Nicht nur ... sondern auch", "Sowohl ... als auch"],
      correctIndex: 0,
      explanation: "إما أو → entweder... oder.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["du", "mehr", "Je", "desto", "übst", "wirst", "besser", "du", ","],
      correctSentence: "Je mehr du übst, desto besser wirst du.",
      explanation: "كلما تدربت أكثر أصبحت أفضل.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich werde morgen lerne.",
      wrongWord: "lerne",
      correctWord: "lernen",
      options: ["lernen", "lerne", "gelernt", "lernst"],
      explanation: "بعد werden: Infinitiv (lernen).",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالرابط:",
      template: "Sie ist ___ klug ___ fleißig. (كلاهما) Er hat ___ Hund ___ Katze. (لا ولا)",
      blanks: [
        { correct: "sowohl ... als auch", options: ["sowohl ... als auch", "weder ... noch", "entweder ... oder"] },
        { correct: "weder ... noch", options: ["sowohl ... als auch", "weder ... noch", "entweder ... oder"] },
      ],
      explanation: "كلاهما / لا ولا.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Technik", ar: "التقنية", example: "Die Technik entwickelt sich.", exampleAr: "التقنية تتطور.", level: "B1" },
    { id: "fc2", de: "die Zukunft", ar: "المستقبل", example: "Die Zukunft ist offen.", exampleAr: "المستقبل مفتوح.", level: "B1" },
    { id: "fc3", de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", example: "KI verändert die Welt.", exampleAr: "الذكاء الاصطناعي يغير العالم.", level: "B1" },
    { id: "fc4", de: "das Futur I", ar: "المستقبل", example: "werden + Infinitiv", exampleAr: "سوف + الفعل", level: "B1" },
    { id: "fc5", de: "nicht nur... sondern auch", ar: "ليس فقط بل أيضاً", example: "Nicht nur Deutsch, sondern auch Englisch.", exampleAr: "ليس فقط الألمانية بل الإنجليزية أيضاً.", level: "B1" },
    { id: "fc6", de: "weder... noch", ar: "لا... ولا", example: "Weder Zeit noch Geld.", exampleAr: "لا وقت ولا مال.", level: "B1" },
    { id: "fc7", de: "entweder... oder", ar: "إما... أو", example: "Entweder du oder ich.", exampleAr: "إما أنت أو أنا.", level: "B1" },
    { id: "fc8", de: "je... desto", ar: "كلما... كلما", example: "Je mehr, desto besser.", exampleAr: "كلما زاد كان أفضل.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b1-08-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن التقنية بالعربية",
      sourceDe: "Künstliche Intelligenz verändert viele Berufe. Einige Tätigkeiten werden automatisiert, aber neue Qualifikationen werden wichtiger.",
      taskAr: "لخّص النص: تأثير الذكاء الاصطناعي، ما يُؤتمت، وما يصبح مهماً.",
      modelAnswerAr: "«الذكاء الاصطناعي يغيّر مهناً كثيرة. بعض الأعمال ستؤتمت، لكن المؤهلات الجديدة تصبح أهم.»",
      keyPointsAr: ["نقلت تغير المهن", "ذكرت الأتمتة", "نقلت أهمية المؤهلات الجديدة"],
    },
  ],
      interaction: [
    {
      id: "int-b1-08-1",
      scenarioAr: "نقاش عن خصوصية البيانات على الإنترنت.",
      scenarioDe: "Diskussion über Datenschutz im Internet.",
      strategyAr: "الاستراتيجية: مناقشة مخاطر وفوائد التقنية بموازنة.",
      rounds: [
        {
          speakerDe: "Gibt man zu viele persönliche Daten im Internet preis?",
          speakerAr: "هل يقدم الناس بيانات شخصية كثيرة على الإنترنت؟",
          options: [
            { de: "Ja, leider. Viele Nutzer akzeptieren die AGB, ohne sie zu lesen. Deshalb sollten Datenschutzregeln strenger sein.", ar: "نعم للأسف. كثير من المستخدمين يقبلون الشروط دون قراءتها. لذلك يجب تشديد قواعد حماية البيانات.", best: true, replyDe: "Da hast du recht. Aber die Dienste sind praktisch.", replyAr: "محق. لكن الخدمات عملية." },
            { de: "Nein, das ist kein Problem. Daten sind egal.", ar: "لا، هذه ليست مشكلة. البيانات غير مهمة.", best: false, replyDe: "Das ist naiv. Daten können missbraucht werden.", replyAr: "هذا سذاجة. يمكن إساءة استخدام البيانات." },
          ],
        },
        {
          speakerDe: "Sollte man soziale Netzwerke einschränken?",
          speakerAr: "هل يجب تقييد الشبكات الاجتماعية؟",
          options: [
            { de: "Man sollte sie nicht verbieten, aber besser regulieren. Obwohl die Umsetzung schwierig ist, lohnt es sich für den Schutz der Nutzer.", ar: "لا يجب حظرها بل تنظيمها أفضل. رغم صعوبة التنفيذ، يستحق الأمر لحماية المستخدمين.", best: true, replyDe: "Eine differenzierte Position. Gut argumentiert.", replyAr: "موقف متوازن. حجة جيدة." },
            { de: "Man sollte alles sofort verbieten.", ar: "يجب حظر كل شيء فوراً.", best: false, replyDe: "Ein komplettes Verbot ist auch nicht die Lösung.", replyAr: "الحظر الكامل ليس الحل أيضاً." },
          ],
        },
      ],
    },
  ],

};