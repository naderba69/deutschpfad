import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-01: التعليم والدراسة — Genitiv + Relativsätze
 */
export const lessonB101: Lesson = {
  id: "b1-01",
  unitId: "b1-01",
  level: "B1",
  order: 1,
  titleDe: "Ausbildung und Studium",
  titleAr: "التعليم والدراسة",
  summary:
    "مقارنة الأنظمة التعليمية، حالة المضاف إليه (Genitiv) واستخداماتها، والجمل النسبية (Relativsätze) مع der/die/das.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann Bildungsbegriffe und Angaben aus einem kurzen Gespräch verstehen.",
      ar: "أن أفهم مصطلحات التعليم والتخصصات من حوار قصير وأجيب عنها.",
      evidence: {
        exerciseIds: ["q1", "q2", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l1:q4"],
        labelAr: "أجب صحيحاً عن q1 وq2 وq4 بعد الاستماع إلى الحوار l1 دون كشف النص. كشف التفريغ (listening-transcript) لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann den Genitiv in einfachen Wendungen bilden: das Buch des Lehrers.",
      ar: "أن أستخدم حالة المضاف إليه (Genitiv) في عبارات بسيطة: كتاب المعلّم.",
      evidence: {
        exerciseIds: ["e1", "e5", "w1"],
        taskIds: ["practice:b1-01:e1", "flow-practice:b1-01:e1", "practice:b1-01:e5", "writing:b1-01:w1"],
        labelAr: "أجب صحيحاً عن e1 (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق) وe5 (تصحيح wegen + Genitiv)، واكتب w1 بصحة (جملة كاملة مع des). قراءة جدول t1 لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann Relativsätze mit der, die, das und dem bilden.",
      ar: "أن أكوّن الجمل النسبية بـ der وdie وdas وdem حسب دور الاسم في الجملة.",
      evidence: {
        exerciseIds: ["e4", "e6", "m5"],
        taskIds: ["practice:b1-01:e4", "flow-practice:b1-01:e4", "practice:b1-01:e6", "mini-test:b1-01:m5"],
        labelAr: "رتّب e4 بصحة (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وأكمل e6 (الضمير النسبي في النصب)، وأجب صحيحاً عن m5 (dem بعد helfen وdas فاعلاً) في الاختبار المصغّر. لا يُحتسب قراءة t2 أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann Schulformen und Abschlüsse im deutschen Bildungssystem den passenden Erklärungen zuordnen.",
      ar: "أن أربط أنواع المدارس والشهادات في النظام التعليمي الألماني بالشرح المناسب لها.",
      evidence: {
        exerciseIds: ["e12"],
        taskIds: ["practice:b1-01:e12"],
        labelAr: "أكمل مطابقة e12 كاملة عند ظهورها في جلسة التدريب العشوائية. الوساطة (med-b1-01-1) والتفاعل النصي (int-b1-01-1) لا يُحتسبان أداءً في هذا الهدف.",
        completion: "all-correct",
      },
    },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "قل بالعربية: «كتاب المعلّم». لاحظت أنك أضفت «الـ» للمعلّم؟ في الألمانية هذه «حالة المضاف» (Genitiv) لها أداة خاصة: das Buch des Lehrers. وهي الحالة الرابعة والأخيرة في ترتيب الحالات الأربع (Nominativ، Akkusativ، Dativ، Genitiv).",
    motivatingQuestionDe: "Welches Fach studierst du?",
    contextAr:
      "ندخل مرحلة B1 — الأهم في رحلتك: نتعلم Genitiv (المضاف إليه) والجمل النسبية (التي/الذي) — البوابة لفهم النصوص الألمانية الحقيقية.",
    contextDe: "Das Studium der Germanistik ist interessant.",
    connectionToPreviousAr: "أتقنت Nominativ/Akkusativ/Dativ. الآن الحالة الرابعة: Genitiv — وبعدها تكتمل لوحة الحالات الأربع التي يبنى عليها كل شيء.",
    activateVocabulary: [
      { de: "die Ausbildung", ar: "التدريب/التأهيل" },
      { de: "das Studium", ar: "الدراسة الجامعية" },
      { de: "das Fach", ar: "التخصص" },
      { de: "die Universität", ar: "الجامعة" },
      { de: "der Student", ar: "الطالب" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-09 — المناسبات والاحتفالات): اختر الصيغة الصحيحة:",
      questionDe: "Ich helfe ___ Bruder. (أخي)",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation: "الجر المذكر: meinem (درس المناسبات).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر حرف الربط:",
      questionDe: "Ich lerne Deutsch, ___ ich will.",
      options: ["weil", "dass", "obwohl", "ob"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1 (درس a1-10 — العمل والمهن): أكمل:",
      template: "Mein Vater ist ___. (معلّم)",
      blanks: [
        { correct: "Lehrer", options: ["Lehrer", "Student", "Koch"] },
      ],
      explanation: "Lehrer = معلّم (درس المهن).",
      errorType: "vocabulary",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "حالة المضاف إليه (Genitiv) — الملكية الرسمية",
      titleDe: "Der Genitiv: das Buch des Lehrers",
      explanationAr:
        "Genitiv = حالة الملكية (لـ/الخاص بـ). الأدوات: المذكر/المحايد des (+s/es للاسم)، المؤنث der، الجمع der. das Buch des Lehrers (كتاب المعلّم). الأسئلة: wessen? (لمن؟). حروف الجر التي تأخذ Genitiv: wegen (بسبب)، trotz (رغم)، während (خلال)، statt (بدلاً من).",
      whyAr:
        "لماذا نتعلمها؟ لأنها شائعة في النص المكتوب والرسمي، ويحتاجها القارئ لفهم الجمل المعقدة. وفي الكلام اليومي كثيراً ما تُستبدل بـ von + Dativ، وهذا ما يوضحه التنبيه المقارن أدناه.",
      table: {
        title: "أدوات Genitiv",
        columns: ["الجنس", "Nominativ", "Genitiv", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "des (+s)", "das Buch des Lehrers"] },
          { label: "محايد", cells: ["das", "des (+s)", "das Ende des Films"] },
          { label: "مؤنث", cells: ["die", "der", "das Haus der Mutter"] },
          { label: "جمع", cells: ["die", "der", "die Bücher der Studenten"] },
        ],
      },
      examples: [
        { de: "Das ist das Buch des Lehrers.", ar: "هذا كتاب المعلّم." },
        { de: "Wegen des Regens bleiben wir zu Hause.", ar: "بسبب المطر نبقى في البيت." },
        { de: "Trotz des Wetters gehen wir spazieren.", ar: "رغم الطقس نذهب في نزهة." },
        { de: "Während des Unterrichts darf man nicht sprechen.", ar: "أثناء الحصة لا يجوز الكلام." },
        { de: "Die Meinung der Studenten ist wichtig.", ar: "رأي الطلاب مهم." },
      ],
      comparisonWithArabic:
        "«كتاب المعلّم» = das Buch des Lehrers. العربية تلحق كسرة أو «الـ» — والألمانية تغير الأداة وتضيف s للاسم. أقرب ترجمة: «كتابٌ للمعلّم» بمعنى الملكية. السؤال wessen? = لمن؟",
      eselsbruecke:
        "«Genitiv = لمن؟ (wessen)» — اسأل: لمن هذا الكتاب؟ الجواب: des Lehrers. وتذكّر حروف الجر الأربعة: wegen-trotz-während-statt (سبب-رغم-خلال-بدلاً من).",
      commonMistakes: [
        { wrong: "das Buch von dem Lehrer (عامية بدل Genitiv)", right: "das Buch des Lehrers", whyAr: "von + Dativ مقبولة في الكلام لكن الرسمية تحتاج Genitiv." },
        { wrong: "des Lehrer (بدون s)", right: "des Lehrers", whyAr: "الاسم المذكر/المحايد يضيف s في Genitiv: Lehrers." },
        { wrong: "wegen den Regen", right: "wegen des Regens", whyAr: "wegen تأخذ Genitiv: des Regens." },
      ],
      relatedRuleComparison: {
        title: "Genitiv أم von؟",
        content: "في الكلام اليومي: von + Dativ (das Buch von dem Lehrer). في الرسمية والكتابة: Genitiv. أتقن الاثنين: تفهم الاثنين، وتكتب بالرسمي. وقد يُستعمل Dativ بعد بعض حروف الجر مثل wegen وtrotz في الاستعمال اليومي (wegen dem Regen)، وهو ما لا تقبله الصيغة الرسمية هنا.",
      },
    },
    {
      id: "t2",
      titleAr: "الجمل النسبية (Relativsätze) مع der/die/das",
      titleDe: "Der Relativsatz: Der Mann, der ...",
      explanationAr:
        "الجملة النسبية = وصف إضافي لاسم: Der Mann, der dort steht, ist mein Lehrer. (الرجل الذي يقف هناك هو معلّمي). الضمير النسبي يطابق الاسم في الجنس والعدد، وحالته حسب وظيفته في الجملة النسبية: der (فاعل)، den (مفعول)، dem (جر). الفعل في نهاية الجملة النسبية.",
      whyAr:
        "لماذا الضمير يتغير؟ لأنه «نيابة» عن الاسم: يعود عليه بالجنس والعدد، لكن حالته يحددها دوره داخل الجملة النسبية. هذه أهم فكرة في B1 — بها تتحدث عن أي شيء بدقة.",
      table: {
        title: "الضمائر النسبية",
        columns: ["الجنس", "Nominativ", "Akkusativ", "Dativ"],
        rows: [
          { label: "مذكر", cells: ["der", "den", "dem"] },
          { label: "محايد", cells: ["das", "das", "dem"] },
          { label: "مؤنث", cells: ["die", "die", "der"] },
          { label: "جمع", cells: ["die", "die", "denen"] },
        ],
      },
      examples: [
        { de: "Der Mann, der dort steht, ist mein Lehrer.", ar: "الرجل الذي يقف هناك هو معلّمي." },
        { de: "Das Buch, das ich lese, ist spannend.", ar: "الكتاب الذي أقرؤه مثير." },
        { de: "Die Frau, die du kennst, ist Ärztin.", ar: "المرأة التي تعرفها طبيبة." },
        { de: "Der Student, dem ich helfe, ist aus Tunis.", ar: "الطالب الذي أساعده من تونس." },
        { de: "Die Universität, in der ich studiere, ist groß.", ar: "الجامعة التي أدرس فيها كبيرة." },
      ],
      comparisonWithArabic:
        "«الرجل الذي يقف...» — العربية تستخدم «الذي/التي». الألمانية: der/die/das حسب الجنس. والفعل في النهاية: Der Mann, der dort steht (الرجل الذي هناك يقف).",
      eselsbruecke:
        "«الضمير النسبي = بوصلة الجنس + مؤشر الحالة»: اسأل أولاً: الاسم مذكر/مؤنث/محايد؟ ثم: دوره في الجملة النسبية (فاعل/مفعول/بعد حرف جر)؟ الجمع بينهما يعطيك der/den/dem...",
      commonMistakes: [
        { wrong: "Der Mann, der dort steht, er ist mein Lehrer. (ضمير زائد)", right: "Der Mann, der dort steht, ist mein Lehrer.", whyAr: "لا نكرر الضمير بعد الجملة النسبية." },
        { wrong: "Das Buch, das ich lese es, ... (تكرار)", right: "Das Buch, das ich lese, ...", whyAr: "الضمير النسبي يحل محل المفعول — لا نعيده." },
        { wrong: "الفعل في منتصف الجملة النسبية", right: "الفعل في النهاية: Der Mann, der dort steht", whyAr: "الجملة النسبية ثانوية → فعلها في النهاية." },
      ],
      relatedRuleComparison: {
        title: "Relativsatz أم dass؟",
        content: "النسبية تصف اسماً (Der Mann, der...). dass تبدأ جملة كاملة (Ich denke, dass...). اسأل: هل أصف شخصاً/شيئاً؟ → نسبية. هل أذكر فكرة/رأياً؟ → dass.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "اختيار التخصص",
        lines: [
          { speaker: "Beraterin", de: "Welches Fach möchtest du studieren?", ar: "أي تخصص تريد أن تدرس؟" },
          { speaker: "Sami", de: "Ich interessiere mich für Informatik. Der Beruf des Programmierers ist gefragt.", ar: "أهتم بالمعلوماتية. مهنة المبرمج مطلوبة." },
          { speaker: "Beraterin", de: "Sehr gute Wahl. Die Universität, die Informatik anbietet, ist in München.", ar: "اختيار ممتاز. الجامعة التي تقدم المعلوماتية في ميونخ." },
          { speaker: "Sami", de: "Und die Kosten des Studiums?", ar: "وتكاليف الدراسة؟" },
          { speaker: "Beraterin", de: "Die Kosten des Studiums sind niedrig, nur der Semesterbeitrag.", ar: "تكاليف الدراسة منخفضة، فقط رسوم الفصل." },
          { speaker: "Sami", de: "Das klingt perfekt. Der Student, der Informatik studiert, findet schnell Arbeit.", ar: "يبدو مثالياً. الطالب الذي يدرس المعلوماتية يجد عملاً سريعاً." },
        ],
      },
      {
        id: "l2",
        title: "مقارنة الأنظمة",
        lines: [
          { speaker: "Lehrer", de: "Wie ist das Schulsystem in Tunesien?", ar: "كيف النظام المدرسي في تونس؟" },
          { speaker: "Mona", de: "Die Schüler gehen neun Jahre in die Grundschule und Mittelschule. Danach besuchen sie vier Jahre die Sekundarschule und machen das Baccalauréat. Dann können sie studieren.", ar: "يذهب التلاميذ تسع سنوات إلى المدرسة الابتدائية والمتوسطة. بعدها يدرسون أربع سنوات في الثانوية ويحصلون على البكالوريا. ثم يمكنهم الدراسة الجامعية." },
          { speaker: "Lehrer", de: "Und das Studium der Medizin?", ar: "ودراسة الطب؟" },
          { speaker: "Mona", de: "Das Studium der Medizin dauert sechs Jahre.", ar: "دراسة الطب تستغرق ست سنوات." },
          { speaker: "Lehrer", de: "Interessant! In Deutschland beträgt die Regelstudienzeit für Medizin ebenfalls sechs Jahre.", ar: "مثير! في ألمانيا مدة الدراسة النظامية للطب ست سنوات أيضاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Sami studieren?",
        questionAr: "ماذا يريد سامي أن يدرس؟",
        options: ["Informatik", "Medizin", "Germanistik", "Jura"],
        correctIndex: 0,
        explanation: "قال سامي: Ich interessiere mich für Informatik.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist die Universität für Informatik?",
        questionAr: "أين الجامعة التي تقدم المعلوماتية؟",
        options: ["in München", "in Berlin", "in Hamburg", "in Köln"],
        correctIndex: 0,
        explanation: "قالت المستشارة: Die Universität ... ist in München.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie lange dauert das Medizinstudium laut Mona?",
        questionAr: "كم تستغرق دراسة الطب حسب منى؟",
        options: ["sechs Jahre", "vier Jahre", "fünf Jahre", "sieben Jahre"],
        correctIndex: 0,
        explanation: "قالت منى: Das Studium der Medizin dauert sechs Jahre.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was sagt die Beraterin über die Kosten des Studiums?",
        questionAr: "ماذا تقول المستشارة عن تكاليف الدراسة؟",
        options: [
          "Die Kosten sind niedrig, nur der Semesterbeitrag.",
          "Die Kosten sind sehr hoch.",
          "Das Studium ist ganz ohne jeden Beitrag.",
          "Man zahlt die Kosten nur in Berlin.",
        ],
        correctIndex: 0,
        explanation: "قالت المستشارة: Die Kosten des Studiums sind niedrig, nur der Semesterbeitrag.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات B1: ch، وst",
    items: [
      { de: "das Studium", ar: "الدراسة الجامعية", note: "St في بداية الكلمة = شت: شتوديوم" },
      { de: "der Lehrer", ar: "المعلم", note: "e الأولى طويلة (ليه)، و-er في النهاية خفيفة: ليهر" },
      { de: "der Unterricht", ar: "الحصة", note: "ch بعد i = ناعمة: أونترريخت" },
      { de: "die Universität", ar: "الجامعة", note: "-tät تُنطق «تيت» (ä طويلة): أونيڤيرزيتيت" },
      { de: "das Fach", ar: "التخصص", note: "ch بعد a = خ: فاخ" },
      { de: "der Student", ar: "الطالب", note: "st في البداية = شت: شتودِنت" },
    ],
    tip: "Universität كلمة طويلة صعبة — قسّمها: أوني + ڤير + زي + تيت. كرر كل مقطع وحده ثم ادمج.",
    shadowing: [
      { de: "Das Buch des Lehrers ist neu.", ar: "كتاب المعلّم جديد.", tip: "des Lehrers = دِس ليرِرْس (Genitiv)" },
      { de: "Der Mann, der dort steht, ist mein Lehrer.", ar: "الرجل الذي يقف هناك معلّمي.", tip: "der dort steht — الفعل في النهاية" },
      { de: "Ich studiere Informatik.", ar: "أدرس المعلوماتية.", tip: "Informatik = إنفور-ماتيك" },
      { de: "Wegen des Regens bleiben wir.", ar: "بسبب المطر نبقى.", tip: "wegen = ڤيغن (w = ڤ)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة Genitiv:",
      prompt: "اكتب: «كتاب المعلّم» بالألمانية (بجملة كاملة)",
      acceptedAnswers: ["Das ist das Buch des Lehrers", "Das Buch des Lehrers ist neu"],
      sampleAnswer: "Das ist das Buch des Lehrers.",
      explanation: "الملكية: des Lehrers (مذكر + s).",
      errorType: "case",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بأداة Genitiv الصحيحة:",
      template: "das Buch ___ Lehrers (مذكر) · das Haus ___ Mutter (مؤنث) · die Meinung ___ Studenten (جمع)",
      blanks: [
        { correct: "des", options: ["des", "der", "dem"] },
        { correct: "der", options: ["des", "der", "dem"] },
        { correct: "der", options: ["des", "der", "den"] },
      ],
      explanation: "مذكر/محايد → des. مؤنث وجمع → der.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wegen des Regens bleiben wir zu Hause.",
      explanation: "بسبب المطر نبقى في البيت — wegen + Genitiv.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Genitiv الصحيحة:",
      questionDe: "Das ist das Buch ___ Lehrers.",
      options: ["des", "der", "dem", "den"],
      correctIndex: 0,
      explanation: "المذكر Genitiv: des Lehrers.",
      errorType: "case",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي:",
      questionDe: "Der Mann, ___ dort steht, ist mein Vater.",
      options: ["der", "den", "dem", "dessen"],
      correctIndex: 0,
      explanation: "فاعل مذكر → der.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة التعليم بمعناها:",
      pairs: [
        { left: "das Studium", right: "الدراسة الجامعية" },
        { left: "die Ausbildung", right: "التدريب المهني" },
        { left: "das Fach", right: "التخصص" },
        { left: "das Stipendium", right: "المنحة" },
      ],
      explanation: "أربع كلمات تعليمية أساسية لـ B1.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه: الفعل في النهاية):",
      tokens: ["Der", "Mann", ",", "der", "dort", "steht", ",", "ist", "mein", "Lehrer", "."],
      correctSentence: "Der Mann, der dort steht, ist mein Lehrer.",
      explanation: "الجملة النسبية: der dort steht — الفعل في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "في الجملة خطأ واحد: اختر التصحيح الصحيح للكلمة المخطئة.",
      wrongSentence: "Wegen den Regen bleiben wir.",
      wrongWord: "den Regen",
      correctWord: "des Regens",
      options: ["des Regens", "des Regen", "der Regen", "die Regen"],
      explanation: "wegen يأخذ Genitiv: des Regens. den هنا حالة نصب، وهي خطأ.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير النسبي:",
      template: "Das Buch, ___ ich lese, ist gut. (نصب) Die Frau, ___ du kennst, ist nett. (نصب)",
      blanks: [
        { correct: "das", options: ["das", "der", "dem"] },
        { correct: "die", options: ["die", "der", "das"] },
      ],
      explanation: "Buch محايد نصب → das. Frau مؤنث نصب → die.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اربط الجملتين بجملة نسبية:",
      prompt: "Der Mann ist nett. + Der Mann hilft mir. → (الرجل الذي يساعدني لطيف)",
      acceptedAnswers: ["Der Mann, der mir hilft, ist nett", "Der Mann, der mir hilft, ist nett."],
      sampleAnswer: "Der Mann, der mir hilft, ist nett.",
      explanation: "الضمير النسبي der (فاعل) + الفعل في النهاية (hilft).",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "wessen?",
      questionAr: "ما معنى السؤال؟",
      options: ["لمن؟", "ماذا؟", "أين؟", "متى؟"],
      correctIndex: 0,
      explanation: "wessen = لمن؟ — سؤال Genitiv.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى الصيغة الرسمية باستخدام Genitiv:",
      prompt: "Das ist das Buch von dem Lehrer. → (الصيغة الرسمية)",
      acceptedAnswers: ["Das ist das Buch des Lehrers.", "Das ist das Buch des Lehrers"],
      sampleAnswer: "Das ist das Buch des Lehrers.",
      explanation: "الصيغة الرسمية: des Lehrers. أما «von dem Lehrer» فمقبولة في الكلام اليومي.",
      errorType: "case",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Universität, in der ich studiere, ist groß.",
      explanation: "الجامعة التي أدرس فيها كبيرة — جملة نسبية مع حرف جر (in der).",
      errorType: "spelling",
    },
    {
      id: "e12",
      type: "matching",
      instructionAr: "صل كل مصطلح بالشرح المناسب له:",
      pairs: [
        { left: "das Gymnasium", right: "مدرسة ثانوية تؤدي إلى الأبيتور" },
        { left: "das Abitur", right: "شهادة تؤهل للدراسة الجامعية" },
        { left: "die Grundschule", right: "المرحلة الابتدائية الأولى" },
        { left: "der Bachelor", right: "أول شهادة جامعية (عادةً ثلاث سنوات)" },
      ],
      explanation: "أنواع المدارس والشهادات الأساسية في النظام الألماني.",
      errorType: "vocabulary",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "das Buch von dem Lehrer (عامية في الكتابة)", right: "das Buch des Lehrers", whyAr: "الرسمية تحتاج Genitiv." },
      { wrong: "des Lehrer (بدون s)", right: "des Lehrers", whyAr: "المذكر/المحايد يضيف s في Genitiv." },
      { wrong: "Der Mann, der dort steht, er ist mein Lehrer. (ضمير زائد)", right: "Der Mann, der dort steht, ist mein Lehrer.", whyAr: "لا نكرر الضمير بعد النسبية." },
    ],
    eselsbruecken: [
      "«Genitiv = لمن؟ (wessen)» — وحروفه الأربعة: wegen-trotz-während-statt.",
      "«الضمير النسبي: جنس الاسم + دور الكلمة داخل النسبية».",
    ],
    culturalNote: {
      title: "الدراسة في ألمانيا",
      content:
                "الجامعات الحكومية في ألمانيا لا تفرض عموماً رسوم دراسة عامة على الطلاب الألمان ومواطني الاتحاد الأوروبي، لكن كل طالب يدفع Semesterbeitrag في كل فصل، وهو عادةً بين 150 و400 يورو تقريباً، ويغطي غالباً تذكرة المواصلات (Semesterticket) وخدمات مؤسسة الطلاب (Studierendenwerk). استثناء معروف: الطلاب من خارج الاتحاد الأوروبي في بادن-فورتمبرغ يدفعون 1500 يورو للفصل. ومن جهات المنح: DAAD (الهيئة الألمانية للتبادل الأكاديمي). وعبارة مفيدة: «Bewerbung um einen Studienplatz» (طلب مقعد دراسي).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Genitiv:",
      questionDe: "Das Ende ___ Films war überraschend.",
      options: ["des", "der", "dem", "den"],
      correctIndex: 0,
      explanation: "المحايد Genitiv: des Films.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي:",
      questionDe: "Die Frau, ___ dort arbeitet, ist Ärztin.",
      options: ["die", "der", "das", "den"],
      correctIndex: 0,
      explanation: "مؤنث فاعل → die.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["des", "ist", "Buch", "Das", "Lehrers", "neu", "."],
      correctSentence: "Das Buch des Lehrers ist neu.",
      explanation: "كتاب المعلّم جديد — Genitiv: des Lehrers.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "في الجملة خطأ واحد: اختر التصحيح الصحيح للكلمة المخطئة.",
      wrongSentence: "Trotz das Wetter gehen wir spazieren.",
      wrongWord: "das Wetter",
      correctWord: "des Wetters",
      options: ["des Wetters", "den Wetter", "der Wetter", "das Wetters"],
      explanation: "trotz يأخذ Genitiv: trotz des Wetters. das هنا محايد غير مناسب لأي حالة مطلوبة.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير النسبي:",
      template: "Der Student, ___ ich helfe, ist aus Tunis. (جر) Das Haus, ___ dort steht, ist alt. (فاعل)",
      blanks: [
        { correct: "dem", options: ["dem", "den", "der"] },
        { correct: "das", options: ["das", "der", "die"] },
      ],
      explanation: "بعد helfen (جر) مذكر → dem. فاعل محايد → das.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Studium", ar: "الدراسة الجامعية", example: "Das Studium dauert vier Jahre.", exampleAr: "الدراسة تستغرق أربع سنوات.", level: "B1" },
    { id: "fc2", de: "die Ausbildung", ar: "التدريب المهني", example: "Die Ausbildung dauert drei Jahre.", exampleAr: "التدريب يستغرق ثلاث سنوات.", level: "B1" },
    { id: "fc3", de: "das Fach", ar: "التخصص", example: "Mein Fach ist Informatik.", exampleAr: "تخصصي المعلوماتية.", level: "B1" },
    { id: "fc4", de: "der Genitiv", ar: "المضاف إليه", example: "das Buch des Lehrers", exampleAr: "كتاب المعلّم", level: "B1" },
    { id: "fc5", de: "wegen / trotz / während / statt", ar: "بسبب / رغم / خلال / بدلاً من (Genitiv)", example: "Wegen des Regens.", exampleAr: "بسبب المطر.", level: "B1" },
    { id: "fc6", de: "der Relativsatz", ar: "الجملة النسبية", example: "Der Mann, der dort steht.", exampleAr: "الرجل الذي يقف هناك.", level: "B1" },
    { id: "fc7", de: "wessen?", ar: "لمن؟", example: "Wessen Buch ist das?", exampleAr: "لمن هذا الكتاب؟", level: "B1" },
    { id: "fc8", de: "das Stipendium", ar: "المنحة", example: "Ich habe ein Stipendium bekommen.", exampleAr: "حصلت على منحة.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b1-01-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن نظام التعليم الألماني بالعربية",
      sourceDe: "In Deutschland gehen die Kinder nach der Grundschule auf verschiedene Schularten. Das Gymnasium führt zum Abitur, das zum Studium berechtigt.",
      taskAr: "لخّص النص بالعربية: المرحلة بعد الابتدائية، ودور المدرسة الثانوية الأكاديمية (Gymnasium).",
      modelAnswerAr: "«في ألمانيا ينتقل الأطفال بعد الابتدائية إلى مدارس مختلفة. المدرسة الثانوية الأكاديمية (Gymnasium) تؤدي إلى الأبيتور الذي يؤهل للدراسة الجامعية.»",
      keyPointsAr: ["نقلت تعدد المدارس بعد الابتدائية", "شرحت دور Gymnasium", "ربطت الأبيتور بالجامعة"],
    },
  ],
      interaction: [
    {
      id: "int-b1-01-1",
      scenarioAr: "نقاش عن التعليم الجامعي بين ألمانيا وبلدك.",
      scenarioDe: "Diskussion über das Universitätssystem.",
      strategyAr: "الاستراتيجية: المقارنة بين نظامين وإبداء رأي مبرر.",
      rounds: [
        {
          speakerDe: "Wie ist das Universitätssystem in deinem Land?",
          speakerAr: "كيف نظام الجامعة في بلدك؟",
          options: [
            { de: "In meinem Land studieren viele nach der Sekundarschule, ähnlich wie in Deutschland. Allerdings hängt die Auswahl oft von den Noten ab.", ar: "في بلدي يدرس كثيرون بعد الثانوية، مشابه لألمانيا. لكن اختيار التخصص يعتمد غالباً على الدرجات.", best: true, replyDe: "Interessant. Und ist das Studium teuer?", replyAr: "مثير للاهتمام. وهل الدراسة مكلفة؟" },
            { de: "In meinem Land gibt es keine Universitäten.", ar: "في بلدي لا توجد جامعات.", best: false, replyDe: "Das kann nicht stimmen, jedes Land hat Universitäten.", replyAr: "هذا غير صحيح، كل بلد له جامعات." },
          ],
        },
        {
          speakerDe: "Ist das Studium in deinem Land teuer?",
          speakerAr: "هل الدراسة مكلفة في بلدك؟",
          options: [
            { de: "Ich glaube, die staatlichen Universitäten sind eher günstig. Man zahlt meist nur einen kleinen Beitrag.", ar: "أظن أن الجامعات الحكومية أرخص نسبياً. عادةً يدفع المرء رسماً صغيراً فقط.", best: true, replyDe: "Das ist ähnlich wie in Deutschland. Ein gutes System.", replyAr: "هذا مشابه لألمانيا. نظام جيد." },
            { de: "Sehr teuer, nur reiche Leute studieren.", ar: "مكلفة جداً، الأغنياء فقط يدرسون.", best: false, replyDe: "Das ist schade. Bildung sollte für alle zugänglich sein.", replyAr: "هذا مؤسف. التعليم يجب أن يكون متاحاً للجميع." },
          ],
        },
      ],
    },
  ],

};