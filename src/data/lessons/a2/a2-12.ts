import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-12: العلاقات بين الناس — أدوات الربط (Konnektoren) + المشاعر
 */
export const lessonA212: Lesson = {
  id: "a2-12",
  unitId: "a2-12",
  level: "A2",
  order: 1,
  titleDe: "Zwischenmenschliches",
  titleAr: "العلاقات بين الناس",
  duration: 35,
  summary:
    "المشاعر والآراء، أدوات الربط المزدوجة (und, aber, oder, denn, sondern, deshalb, trotzdem, dann) وقواعدها، والتعامل مع الخلافات بلطف — خاتمة مستوى A2.",

  lernziele: [
    { id: "z1", de: "Ich kann Gefühle ausdrücken.", ar: "أن أعبر عن المشاعر: سعيد، حزين، متوتر، متحمس." },
    { id: "z2", de: "Ich kann die wichtigsten Konnektoren benutzen.", ar: "أن أستخدم أدوات الربط: und, aber, oder, denn, sondern, deshalb, trotzdem, dann." },
    { id: "z3", de: "Ich kann Konflikte höflich ansprechen.", ar: "أن أتناول الخلافات بأدب وأتصالح." },
      { id: "z4", de: "Ich kann höflich widersprechen und Kompromisse vorschlagen.", ar: "أن أعترض بلطف وأقترح حلولاً وسطاً." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "الربط في العربية: «لكن» و«لذلك» و«بالرغم من ذلك». الألمانية تملك أدوات مشابهة لكن بقاعدة ذهبية: بعضها لا يغير الترتيب (und, aber, oder, denn) وبعضها يقلب الفعل (deshalb, trotzdem, dann). هذه آخر قاعدة كبرى في A2!",
    motivatingQuestionDe: "Wie geht es dir heute?",
    contextAr:
      "نختم مستوى A2 بموضوع العلاقات: مشاعر، آراء، وخلافات. ومعها «أدوات الربط» التي تجعل كلامك متصلاً ومتماسكاً — وتختبر كل ما تعلمته.",
    contextDe: "Ich bin müde, aber ich bin glücklich.",
    connectionToPreviousAr: "تذكرت dass وweil (الجمل الثانوية). اليوم: أدوات الربط السطحية — نصفها عادي (V2) ونصفها مقلوب (فعل أولاً). إنجاز A2 يوشك أن يكتمل!",
    activateVocabulary: [
      { de: "das Gefühl", ar: "الشعور" },
      { de: "glücklich", ar: "سعيد" },
      { de: "traurig", ar: "حزين" },
      { de: "der Streit", ar: "الخلاف" },
      { de: "deshalb", ar: "لذلك" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر حرف الربط:",
      questionDe: "Ich lerne Deutsch, ___ ich will.",
      options: ["weil", "dass", "wenn", "ob"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر الضمير الانعكاسي:",
      questionDe: "Ich freue ___.",
      options: ["mich", "dich", "sich", "uns"],
      correctIndex: 0,
      explanation: "مع ich: mich (درس الخدمات).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل:",
      template: "Ich bin müde, ___ ich habe viel gearbeitet. (لكن)",
      blanks: [
        { correct: "aber", options: ["aber", "und", "oder"] },
      ],
      explanation: "aber = لكن (ربط عادي).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "أدوات الربط: العادية والمقلوبة",
      titleDe: "Konnektoren: und, aber, denn / deshalb, trotzdem, dann",
      explanationAr:
        "أدوات الربط نوعان: عادية (لا تغير الترتيب — الفعل يبقى في المركز الثاني): und (و)، aber (لكن)، oder (أو)، denn (لأنّ). ومقلوبة (ترسل الفعل أولاً): deshalb (لذلك)، trotzdem (بالرغم من ذلك)، dann (ثم)، außerdem (علاوة على ذلك)، sonst (وإلاّ).",
      whyAr:
        "لماذا بعضها يقلب؟ لأن deshalb وtrotzdem وdann تحمل «معنى الجملة السابقة» — مثل العربية: «لذلك، نذهب» — الألمانية تجعلها في المركز الأول والفعل بعده مباشرة. أما und/aber/denn فهي «روابط محايدة» لا تحمل معنى إضافياً.",
      table: {
        title: "أدوات الربط الأساسية",
        columns: ["الأداة", "المعنى", "الترتيب", "مثال"],
        rows: [
          { label: "und", cells: ["و", "عادي", "Ich lerne und ich arbeite."] },
          { label: "aber", cells: ["لكن", "عادي", "Ich bin müde, aber ich bin glücklich."] },
          { label: "oder", cells: ["أو", "عادي", "Tee oder Kaffee?"] },
          { label: "denn", cells: ["لأنّ", "عادي", "Ich bleibe, denn es regnet."] },
          { label: "deshalb", cells: ["لذلك", "مقلوب", "Es regnet, deshalb bleibe ich."] },
          { label: "trotzdem", cells: ["رغم ذلك", "مقلوب", "Es regnet, trotzdem gehe ich."] },
          { label: "dann", cells: ["ثم", "مقلوب", "Ich esse, dann schlafe ich."] },
        ],
      },
      examples: [
        { de: "Ich lerne Deutsch und meine Schwester lernt Englisch.", ar: "أتعلم الألمانية وأختي تتعلم الإنجليزية." },
        { de: "Ich bin müde, aber ich bin glücklich.", ar: "أنا متعب لكنني سعيد." },
        { de: "Es regnet, deshalb bleibe ich zu Hause.", ar: "تمطر، لذلك أبقى في البيت." },
        { de: "Es ist kalt, trotzdem gehe ich spazieren.", ar: "الجو بارد، ومع ذلك أذهب في نزهة." },
        { de: "Erst lerne ich, dann sehe ich fern.", ar: "أولاً أتعلم، ثم أشاهد التلفاز." },
      ],
      comparisonWithArabic:
        "«لكن» = aber (عادي). «لذلك» = deshalb (مقلوب). «رغم ذلك» = trotzdem (مقلوب). العربية لا تغير الترتيب بعدها — الألمانية تفعل مع المعاني «النتيجة/المعاكسة».",
      eselsbruecke:
        "«عائلة عادية: und-aber-oder-denn» (لا تلمس الفعل). «عائلة مقلوبة: deshalb-trotzdem-dann» (الفعل يقفز أولاً). احفظ العائلتين.",
      commonMistakes: [
        { wrong: "Es regnet, deshalb ich bleibe zu Hause.", right: "Es regnet, deshalb bleibe ich zu Hause.", whyAr: "deshalb يقلب: الفعل بعدها مباشرة." },
        { wrong: "Ich bin müde, aber ich bin glücklich. → Ich bin müde, aber bin ich glücklich؟", right: "لا — aber عادية: الفعل يبقى بعد الفاعل.", whyAr: "aber من العائلة العادية — لا تقلب." },
        { wrong: "denn أم deshalb؟", right: "denn = لأنّ (سبب — عادية). deshalb = لذلك (نتيجة — مقلوبة)", whyAr: "السبب denn يفتح، والنتيجة deshalb تعقب." },
      ],
      relatedRuleComparison: {
        title: "denn أم weil أم deshalb؟",
        content: "نفس العلاقة بثلاث صيغ: Ich bleibe, denn es regnet (عادية). Ich bleibe, weil es regnet (ثانوية — فعل في النهاية). Es regnet, deshalb bleibe ich (مقلوبة). كلها «لأن/لذلك» — اختر واحدة وكن دقيقاً في ترتيبها.",
      },
    },
    {
      id: "t2",
      titleAr: "obwohl: الاستدراك بفعل في النهاية",
      titleDe: "Erweiterung",
      explanationAr: "obwohl (رغم أن) تقدم جملة استدراكية: الفعل في النهاية. Obwohl es regnet, gehe ich spazieren. ملاحظة: obwohl تفترض حقيقة (رغم أن الجو ممطر) بينما trotzdem تفصل بين جملتين (Es regnet. Trotzdem gehe ich spazieren).",
      whyAr: "لماذا؟ لأن obwohl من أكثر أدوات الربط استخداماً في B1 — والتمييز بينها وبين trotzdem يرفع جودة الأسلوب.",
      examples: [
        { de: "Obwohl ich müde bin, lerne ich weiter.", ar: "رغم أنني متعب، أواصل التعلم." }, { de: "Sie kommt, obwohl sie keine Zeit hat.", ar: "تأتي رغم أنها بلا وقت." }
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
        title: "يوم مليء بالمشاعر",
        lines: [
          { speaker: "Mona", de: "Heute war ein komischer Tag. Ich war gestresst, aber auch glücklich.", ar: "كان اليوم غريباً. كنت متوترة لكن سعيدة أيضاً." },
          { speaker: "Karim", de: "Warum?", ar: "لماذا؟" },
          { speaker: "Mona", de: "Ich hatte eine wichtige Prüfung. Deshalb war ich nervös.", ar: "كان عندي امتحان مهم. لذلك كنت متوترة." },
          { speaker: "Karim", de: "Und?", ar: "و؟" },
          { speaker: "Mona", de: "Ich habe bestanden! Trotzdem bin ich müde.", ar: "نجحت! ومع ذلك فأنا متعبة." },
          { speaker: "Karim", de: "Herzlichen Glückwunsch! Dann feiern wir heute Abend!", ar: "تهانينا! إذن نحتفل الليلة!" },
        ],
      },
      {
        id: "l2",
        title: "خلاف صغير وتصالح",
        lines: [
          { speaker: "Sami", de: "Du bist spät gekommen. Ich war sauer.", ar: "أتيت متأخراً. كنت غاضباً." },
          { speaker: "Anna", de: "Tut mir leid! Der Bus kam nicht, deshalb war ich spät.", ar: "آسفة! لم تأتِ الحافلة، لذلك تأخرت." },
          { speaker: "Sami", de: "Okay, aber schreib mir bitte nächstes Mal.", ar: "حسناً، لكن اكتبي لي في المرة القادمة." },
          { speaker: "Anna", de: "Ja, natürlich. Und jetzt: alles gut?", ar: "نعم طبعاً. والآن: كل شيء بخير؟" },
          { speaker: "Sami", de: "Ja, alles gut. Wir sind wieder Freunde!", ar: "نعم كل شيء بخير. نحن أصدقاء مجدداً!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Warum war Mona nervös?",
        questionAr: "لماذا كانت منى متوترة؟",
        options: ["wegen der Prüfung", "wegen des Wetters", "wegen der Arbeit", "wegen des Verkehrs"],
        correctIndex: 0,
        explanation: "قالت: Ich hatte eine wichtige Prüfung. Deshalb war ich nervös.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was machen sie heute Abend?",
        questionAr: "ماذا سيفعلون الليلة؟",
        options: ["feiern", "lernen", "arbeiten", "schlafen"],
        correctIndex: 0,
        explanation: "قال كريم: Dann feiern wir heute Abend!",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum war Anna spät?",
        questionAr: "لماذا تأخرت آنا؟",
        options: ["Der Bus kam nicht", "Sie hat verschlafen", "Sie hatte einen Termin", "Sie war krank"],
        correctIndex: 0,
        explanation: "قالت آنا: Der Bus kam nicht, deshalb war ich spät.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات المشاعر: ü، au، وeu",
    items: [
      { de: "glücklich", ar: "سعيد", note: "ü + ck: غلوك-ليش" },
      { de: "traurig", ar: "حزين", note: "au = آو: تراوريخ" },
      { de: "gestresst", ar: "متوتر", note: "st = شت + ss: غِشترست" },
      { de: "sauer", ar: "غاضب", note: "au = آو: زاور" },
      { de: "das Gefühl", ar: "الشعور", note: "ü طويل: غِفول" },
      { de: "der Streit", ar: "الخلاف", note: "st = شت + ei = آي: شترايت" },
    ],
    tip: "glücklich أشهر كلمة سعادة: غلوك-ليش. وهي من Glück (حظ/سعادة) — تذكرها مع Glückwunsch (تهنئة)!",
    shadowing: [
      { de: "Ich bin müde, aber glücklich.", ar: "أنا متعب لكن سعيد.", tip: "aber = آبِر" },
      { de: "Es regnet, deshalb bleibe ich.", ar: "تمطر لذلك أبقى.", tip: "deshalb = دِسهالب — الفعل بعدها مباشرة" },
      { de: "Es ist kalt, trotzdem gehe ich.", ar: "الجو بارد ورغم ذلك أذهب.", tip: "trotzdem = تروتس-دِم" },
      { de: "Erst lerne ich, dann sehe ich fern.", ar: "أولاً أتعلم ثم أشاهد التلفاز.", tip: "dann = دان (الفعل بعده)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة نتيجة بـ deshalb:",
      prompt: "اكتب: «تمطر، لذلك أبقى في البيت» بالألمانية",
      acceptedAnswers: ["Es regnet, deshalb bleibe ich zu Hause", "Es regnet, deshalb bleibe ich zu Hause."],
      sampleAnswer: "Es regnet, deshalb bleibe ich zu Hause.",
      explanation: "deshalb مقلوبة: deshalb + bleibe + ich (الفعل أولاً).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ aber/deshalb/trotzdem/dann:",
      template: "Ich bin müde, ___ ich bin glücklich. (لكن) Es regnet, ___ bleibe ich. (لذلك) Es ist kalt, ___ gehe ich. (رغم ذلك) Erst esse ich, ___ schlafe ich. (ثم)",
      blanks: [
        { correct: "aber", options: ["aber", "deshalb", "trotzdem", "dann"] },
        { correct: "deshalb", options: ["aber", "deshalb", "trotzdem", "dann"] },
        { correct: "trotzdem", options: ["aber", "deshalb", "trotzdem", "dann"] },
        { correct: "dann", options: ["aber", "deshalb", "trotzdem", "dann"] },
      ],
      explanation: "لكن = aber (عادية). لذلك = deshalb (مقلوبة). رغم ذلك = trotzdem (مقلوبة). ثم = dann (مقلوبة).",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Es regnet, trotzdem gehe ich spazieren.",
      explanation: "تمطر ومع ذلك أذهب في نزهة — trotzdem مقلوبة.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط الصحيحة:",
      questionDe: "Ich bin müde, ___ ich bin glücklich.",
      options: ["aber", "deshalb", "trotzdem", "dann"],
      correctIndex: 0,
      explanation: "لكن = aber (عادية، الفعل بعد الفاعل).",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط الصحيحة:",
      questionDe: "Es regnet, ___ bleibe ich zu Hause.",
      options: ["deshalb", "aber", "und", "oder"],
      correctIndex: 0,
      explanation: "لذلك = deshalb — ولاحظ الفعل bleibe بعده مباشرة (مقلوبة).",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل أداة الربط بمعناها:",
      pairs: [
        { left: "aber", right: "لكن" },
        { left: "deshalb", right: "لذلك" },
        { left: "trotzdem", right: "رغم ذلك" },
        { left: "dann", right: "ثم" },
      ],
      explanation: "أربع أدوات أساسية — عائلتان: عادية (aber) ومقلوبة (deshalb, trotzdem, dann).",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه للترتيب المقلوب):",
      tokens: ["Es", "regnet", "deshalb", "bleibe", "ich", ","],
      correctSentence: "Es regnet, deshalb bleibe ich.",
      explanation: "تمطر لذلك أبقى — deshalb + bleibe + ich (مقلوبة).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Es regnet, deshalb ich bleibe zu Hause.",
      wrongWord: "ich bleibe",
      correctWord: "bleibe ich",
      options: ["bleibe ich", "ich bleibe", "bleiben ich", "ich bleiben"],
      explanation: "deshalb مقلوبة: deshalb + bleibe + ich.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالشعور الصحيح:",
      template: "Ich bin ___ (سعيد). Er ist ___ (حزين). Sie ist ___ (متوترة).",
      blanks: [
        { correct: "glücklich", options: ["glücklich", "traurig", "gestresst"] },
        { correct: "traurig", options: ["glücklich", "traurig", "gestresst"] },
        { correct: "gestresst", options: ["glücklich", "traurig", "gestresst"] },
      ],
      explanation: "سعيد = glücklich، حزين = traurig، متوتر = gestresst.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى trotzdem:",
      prompt: "Es ist kalt. + Ich gehe spazieren. → (جملة trotzdem)",
      acceptedAnswers: ["Es ist kalt, trotzdem gehe ich spazieren", "Es ist kalt, trotzdem gehe ich spazieren."],
      sampleAnswer: "Es ist kalt, trotzdem gehe ich spazieren.",
      explanation: "الجو بارد، ومع ذلك أذهب — trotzdem مقلوبة.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Erst lerne ich, dann sehe ich fern.",
      questionAr: "ما معنى الجملة؟",
      options: ["أولاً أتعلم ثم أشاهد التلفاز", "أتعلم وأنا أشاهد التلفاز", "لا أتعلم بل أشاهد التلفاز", "أشاهد التلفاز ثم أتعلم"],
      correctIndex: 0,
      explanation: "erst = أولاً، dann = ثم: أتعلم أولاً ثم أشاهد.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich bleibe zu Hause, denn es regnet. (هل الترتيب صحيح؟)",
      wrongWord: "denn es regnet",
      correctWord: "denn es regnet (صحيحة!)",
      options: ["denn es regnet (صحيحة!)", "denn regnet es", "denn es regnet doch", "weil es regnet es"],
      explanation: "denn عادية — الترتيب صحيح: الفعل بعد الفاعل. (weil كانت سترسل الفعل للنهاية).",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Erst lerne ich, dann sehe ich fern.",
      explanation: "أولاً أتعلم ثم أشاهد التلفاز — dann مقلوبة.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Es regnet, deshalb ich bleibe.", right: "Es regnet, deshalb bleibe ich.", whyAr: "deshalb مقلوبة." },
      { wrong: "Es regnet, aber bleibe ich.", right: "Es regnet, aber ich bleibe.", whyAr: "aber عادية — لا تقلب." },
      { wrong: "Ich bleibe, denn es regnet أم weil؟", right: "كلاهما صحيح لكن بترتيب مختلف: denn (عادية) / weil (فعل في النهاية)", whyAr: "اختر واحدة والتزم بترتيبها." },
    ],
    eselsbruecken: [
      "«عائلة عادية: und-aber-oder-denn» (لا تلمس الترتيب) — «عائلة مقلوبة: deshalb-trotzdem-dann» (الفعل يقفز أولاً).",
      "اختبر: هل الأداة «نتيجة أو معاكسة»؟ نعم → مقلوبة.",
    ],
    culturalNote: {
      title: "الصدق الألماني اللطيف",
      content:
        "الألمان صريحون في العلاقات: يقولون رأيهم مباشرة لكن بأدب («Ich finde das nicht gut»). والتصالح يتم بسرعة بعد توضيح السبب. عبارة مهمة: «Tut mir leid» (آسف) — و«Es ist okay / Alles gut» (لا بأس). الصدق المباشر جزء من الثقة المتبادلة.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط:",
      questionDe: "Ich bin müde, ___ ich habe gearbeitet. (لأنّ)",
      options: ["denn", "deshalb", "trotzdem", "aber"],
      correctIndex: 0,
      explanation: "السبب: denn (عادية).",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط:",
      questionDe: "Ich bin müde, ___ arbeite ich weiter. (رغم ذلك)",
      options: ["trotzdem", "deshalb", "und", "denn"],
      correctIndex: 0,
      explanation: "رغم ذلك: trotzdem (مقلوبة — الفعل arbeite بعده).",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["müde", "aber", "Ich", "bin", "glücklich", ","],
      correctSentence: "Ich bin müde, aber glücklich.",
      explanation: "أنا متعب لكن سعيد — aber عادية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Es ist kalt, trotzdem ich gehe spazieren.",
      wrongWord: "ich gehe",
      correctWord: "gehe ich",
      options: ["gehe ich", "ich gehe", "gehen ich", "ich gehen"],
      explanation: "trotzdem مقلوبة: trotzdem + gehe + ich.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ deshalb/trotzdem/dann:",
      template: "Ich habe Prüfung, ___ lerne ich. (لذلك) Ich bin krank, ___ gehe ich zur Schule. (رغم ذلك) Erst arbeite ich, ___ koche ich. (ثم)",
      blanks: [
        { correct: "deshalb", options: ["deshalb", "trotzdem", "dann"] },
        { correct: "trotzdem", options: ["deshalb", "trotzdem", "dann"] },
        { correct: "dann", options: ["deshalb", "trotzdem", "dann"] },
      ],
      explanation: "لذلك = deshalb. رغم ذلك = trotzdem. ثم = dann — كلها مقلوبة.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Gefühl", ar: "الشعور", example: "Meine Gefühle sind stark.", exampleAr: "مشاعري قوية.", level: "A2" },
    { id: "fc2", de: "glücklich / traurig", ar: "سعيد / حزين", example: "Ich bin glücklich.", exampleAr: "أنا سعيد.", level: "A2" },
    { id: "fc3", de: "gestresst", ar: "متوتر", example: "Ich bin gestresst.", exampleAr: "أنا متوتر.", level: "A2" },
    { id: "fc4", de: "der Streit", ar: "الخلاف", example: "Wir hatten einen Streit.", exampleAr: "كان بيننا خلاف.", level: "A2" },
    { id: "fc5", de: "aber", ar: "لكن (عادية)", example: "Ich bin müde, aber glücklich.", exampleAr: "متعب لكن سعيد.", level: "A2" },
    { id: "fc6", de: "deshalb", ar: "لذلك (مقلوبة)", example: "Es regnet, deshalb bleibe ich.", exampleAr: "تمطر لذلك أبقى.", level: "A2" },
    { id: "fc7", de: "trotzdem", ar: "رغم ذلك (مقلوبة)", example: "Es ist kalt, trotzdem gehe ich.", exampleAr: "بارد ورغم ذلك أذهب.", level: "A2" },
    { id: "fc8", de: "dann", ar: "ثم (مقلوبة)", example: "Erst lernen, dann fernsehen.", exampleAr: "أولاً نتعلم ثم نشاهد التلفاز.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-12-1", type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة اعتذار ألمانية بالعربية",
      sourceDe: "Lieber Karim, es tut mir leid, dass ich gestern nicht kommen konnte. Ich hatte einen wichtigen Termin. Können wir uns morgen treffen?",
      taskAr: "انقل الرسالة بالعربية مع نقل نبرة الاعتذار: السبب، والاقتراح.",
      modelAnswerAr: "«عزيزي كريم، آسف أنني لم أستطع المجيء أمس. كان لدي موعد مهم. هل نلتقي غداً؟»",
      keyPointsAr: ["نقلت الاعتذار", "ذكرت السبب (موعد مهم)", "نقلت اقتراح اللقاء غداً"],
    },
  ],
      interaction: [
    {
      id: "int-a2-12-1",
      scenarioAr: "صديق يخطئ في حقك — تحل الخلاف بلطف.",
      scenarioDe: "Ein Freund hat dich verletzt — Konflikt lösen.",
      strategyAr: "الاستراتيجية: التعبير عن المشاعر وطلب توضيح دون غضب.",
      rounds: [
        {
          speakerDe: "Du hast gestern nicht auf meine Nachricht geantwortet. Ist alles okay?",
          speakerAr: "لم تجب على رسالتي أمس. هل كل شيء بخير؟",
          options: [
            { de: "Es tut mir leid. Ich hatte einen anstrengenden Tag. Ich hätte dir schreiben sollen.", ar: "آسف. كان يومي متعباً. كان عليّ أن أكتب لك.", best: true, replyDe: "Kein Problem. Ich war nur besorgt.", replyAr: "لا مشكلة. كنت قلقاً فقط." },
            { de: "Das ist nicht dein Problem. Antworten ist meine Sache.", ar: "هذه ليست مشكلتك. الرد شأني أنا.", best: false, replyDe: "Das ist nicht freundlich. Freunde kümmern sich umeinander.", replyAr: "هذا ليس لطيفاً. الأصدقاء يهتمون ببعضهم." },
          ],
        },
        {
          speakerDe: "Ich war nur besorgt. Kannst du mir das nächste Mal schreiben?",
          speakerAr: "كنت قلقاً فقط. هل يمكنك الكتابة لي في المرة القادمة؟",
          options: [
            { de: "Ja, natürlich. Versprochen! Ich schreibe dir immer, wenn ich spät antworte.", ar: "نعم بالطبع. وعد! سأكتب لك دائماً عندما أتأخر.", best: true, replyDe: "Danke, das bedeutet mir viel.", replyAr: "شكراً، هذا يعني لي الكثير." },
            { de: "Nein, ich kann das nicht versprechen.", ar: "لا، لا أستطيع الوعد بذلك.", best: false, replyDe: "Das ist schade für unsere Freundschaft.", replyAr: "هذا مؤسف لصداقتنا." },
          ],
        },
      ],
    },
  ],

};