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
  summary:
    "المشاعر والآراء والخلافات الصغيرة، وأدوات الربط العادية والمقلوبة (und, aber, oder, denn, deshalb, trotzdem, dann) وقواعدها، مع صيغ مهذبة للاعتذار والتصالح — قبل المراجعة الختامية A2-13.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann passende Gefühlswörter in vorgegebenen Sätzen auswählen.",
      ar: "أن أختار كلمة الشعور المناسبة (سعيد، حزين، متوتر) في جمل موجّهة؛ هذا اختيار مفردة لا تعبير حر عن مشاعري.",
      evidence: {
        exerciseIds: ["e6"],
        taskIds: ["practice:a2-12:e6"],
        labelAr: "أجب صحيحاً عن التمرين e6 (ثلاث جمل بفراغات) عندما يظهر في جلسة التدريب العشوائية؛ وهو ليس ضمن أول أربعة تمارين في مسار التدفق. فتح الدرس أو عرض الكلمات وحده ليس دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann die Konnektoren aber, deshalb, trotzdem und dann in vorgegebenen Sätzen richtig verwenden.",
      ar: "أن أستعمل أدوات الربط aber وdeshalb وtrotzdem وdann في جمل موجّهة، مع الترتيب الصحيح للفعل والفاعل؛ وهذا اختيار وترتيب موجّهان لا إنتاج حر.",
      evidence: {
        exerciseIds: ["e1", "e2", "w1", "w2"],
        taskIds: [
          "practice:a2-12:e1",
          "flow-practice:a2-12:e1",
          "practice:a2-12:e2",
          "flow-practice:a2-12:e2",
          "writing:a2-12:w1",
          "writing:a2-12:w2",
        ],
        labelAr: "أجب صحيحاً عن e1 وe2 (يظهر كلاهما ضمن أول أربعة تمارين في مسار التدفق، وفي جلسة التدريب العشوائية)، ثم أكمل w1 (جملة deshalb مقلوبة) وw2 (أربعة فراغات). هذه مهام اختيار موجّه وترتيب، لا كتابة حرة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann eine vorgegebene Entschuldigung mit Grund schriftlich formulieren.",
      ar: "أن أكتب اعتذاراً مهذباً مع ذكر السبب بـ deshalb عند إعطاء المعنى والعبارة المطلوبة؛ وهذا لا يقيس حواراً حراً لحل الخلاف.",
      evidence: {
        exerciseIds: ["w4"],
        taskIds: ["writing:a2-12:w4"],
        labelAr: "اكتب الاعتذار المحدد في w4 بالألمانية. لا يُحتسب اختيار الرد في محاكاة التفاعل أداءً مكتوباً أو شفهياً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann einen höflichen Einwand mit aber in einem vorgegebenen Satz schriftlich formulieren.",
      ar: "أن أكتب اعتراضاً مهذباً بـ aber عند إعطاء المعنى والجملة المطلوبة؛ لا يُقيَّم هنا الاعتراض الشفهي ولا اقتراح حل وسط مفتوح.",
      evidence: {
        exerciseIds: ["w5"],
        taskIds: ["writing:a2-12:w5"],
        labelAr: "اكتب الاعتراض المحدد في w5 بالألمانية. الاختيار في محاكاة التفاعل لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "الربط في العربية: «لكن» و«لذلك» و«بالرغم من ذلك». الألمانية تملك أدوات مشابهة لكن بقاعدة ذهبية: بعضها لا يغير الترتيب (und, aber, oder, denn) وبعضها يقلب الفعل (deshalb, trotzdem, dann). وهي من أهم قواعد هذا المستوى قبل المراجعة الختامية في A2-13.",
    motivatingQuestionDe: "Wie geht es dir heute?",
    contextAr:
      "نتناول موضوع العلاقات: مشاعر، وآراء، وخلافات صغيرة. ومعها «أدوات الربط» التي تجعل كلامك متصلاً ومتماسكاً، ثم تأتي المراجعة الختامية في A2-13.",
    contextDe: "Ich bin müde, aber ich bin glücklich.",
    connectionToPreviousAr: "تذكرت dass وweil (الجمل الثانوية). اليوم: أدوات الربط الرئيسية — أربع عادية (und، aber، oder، denn) لا تغيّر الترتيب، وثلاث مقلوبة (deshalb، trotzdem، dann) يأتي الفعل بعدها مباشرة.",
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
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر حرف الربط:",
      questionDe: "Ich lerne Deutsch, ___ ich will.",
      options: ["weil", "dass", "wenn", "ob"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-11 — الخدمات والمعاملات): اختر الضمير الانعكاسي:",
      questionDe: "Ich freue ___.",
      options: ["mich", "dich", "sich", "uns"],
      correctIndex: 0,
      explanation: "مع ich: mich (درس الخدمات).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-08 — المواصلات والتنقل): أكمل صيغة المقارنة:",
      template: "Der Zug ist ___ als das Auto. (schnell)",
      blanks: [
        { correct: "schneller", options: ["schneller", "schnell", "am schnellsten"] },
      ],
      explanation: "المقارنة: schnell → schneller + als (درس المواصلات).",
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
        "لماذا بعضها يقلب؟ لأن deshalb وtrotzdem وdann تحتل المكان الأول في جملتها (Vorfeld)، فيأتي الفعل مباشرة بعدها ثم الفاعل. أما und وaber وoder وdenn فلا تحتل المكان الأول، فيأتي الفاعل قبل الفعل كما في الجملة العادية.",
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
        "«لكن» = aber (عادية). «لذلك» = deshalb (مقلوبة). «رغم ذلك» = trotzdem (مقلوبة). المقارنة مع العربية تفيد في المعنى لا في الترتيب: الألمانية تُلزمك بقالب شكلي ثابت، هو أن الفعل يأتي مباشرة بعد الأداة المقلوبة ثم الفاعل.",
      eselsbruecke:
        "«عائلة عادية: und-aber-oder-denn» (لا تلمس الفعل). «عائلة مقلوبة: deshalb-trotzdem-dann» (الفعل يقفز أولاً). احفظ العائلتين.",
      commonMistakes: [
        { wrong: "Es regnet, deshalb ich bleibe zu Hause.", right: "Es regnet, deshalb bleibe ich zu Hause.", whyAr: "deshalb يقلب: الفعل بعدها مباشرة." },
        { wrong: "Ich bin müde, aber bin ich glücklich.", right: "Ich bin müde, aber ich bin glücklich.", whyAr: "aber من العائلة العادية: بعدها الفاعل مباشرة ولا تقلب الفعل." },
        { wrong: "Ich bleibe, deshalb es regnet.", right: "Ich bleibe, denn es regnet.", whyAr: "deshalb تعطي النتيجة لا السبب، ومعها يأتي الفعل مباشرة بعدها: Es regnet, deshalb bleibe ich. أما denn فتعطي السبب وتترك الترتيب العادي." },
      ],
      relatedRuleComparison: {
        title: "denn أم weil أم deshalb؟",
        content: "علاقة السبب والنتيجة بأدوات مختلفة: Ich bleibe, denn es regnet (عادية: السبب بعد الفاصلة). Ich bleibe, weil es regnet (ثانوية: الفعل في النهاية). Es regnet, deshalb bleibe ich (مقلوبة: النتيجة بعد السبب مع قلب الفعل). الأوليان تعطيان السبب والثالثة تعطي النتيجة، فلا تخلط بينها.",
      },
    },
    {
      id: "t2",
      titleAr: "obwohl: الاستدراك بفعل في النهاية",
      titleDe: "Der Konzessivsatz mit „obwohl“",
      explanationAr: "obwohl (رغم أن) تقدم جملة استدراكية: الفعل في النهاية. Obwohl es regnet, gehe ich spazieren. ملاحظة: obwohl تفترض حقيقة (رغم أن الجو ممطر) بينما trotzdem تفصل بين جملتين (Es regnet. Trotzdem gehe ich spazieren).",
      whyAr: "لماذا؟ هذه توسعة اختيارية في الاستدراك بجملة ثانوية، وتتجاوز الجرد الأساسي لـA2 (تتكرر لاحقاً في B1). التمييز بينها وبين trotzdem يساعدك على فهم ما تقرؤه، وليست مطلوبة في تمارين هذا الدرس المقيّمة.",
      table: {
        title: "obwohl وأخواتها في التعبير عن الاستدراك",
        columns: ["الأداة", "نوعها", "موضع الفعل", "مثال"],
        rows: [
          { label: "obwohl", cells: ["أداة ربط ثانوية", "في النهاية", "Obwohl es regnet, gehe ich."] },
          { label: "trotzdem", cells: ["ظرف رابط", "ثانياً بعده", "Es regnet. Trotzdem gehe ich."] },
          { label: "aber", cells: ["أداة ربط متساوية", "لا تغيير", "Es regnet, aber ich gehe."] },
          { label: "trotz + Genitiv", cells: ["حرف جر", "لا فعل بعده", "Trotz des Regens gehe ich."] },
          { label: "dennoch", cells: ["ظرف رابط رسمي", "ثانياً بعده", "Es regnet, dennoch gehe ich."] },
        ],
      },
      examples: [
        { de: "Obwohl ich müde bin, lerne ich weiter.", ar: "رغم أنني متعب، أواصل التعلم." }, { de: "Sie kommt, obwohl sie keine Zeit hat.", ar: "تأتي رغم أنها بلا وقت." }, { de: "Obwohl er müde war, hat er weitergearbeitet.", ar: "رغم أنه كان متعباً، واصل العمل." }, { de: "Sie spricht gut Deutsch, obwohl sie erst ein Jahr hier ist.", ar: "تتحدث الألمانية جيداً رغم أنها هنا منذ سنة فقط." }, { de: "Trotz der Kälte sind wir spazieren gegangen.", ar: "رغم البرد ذهبنا للتنزّه." }
      ],
      comparisonWithArabic: "العربية تستعمل «رغم أن» مع جملة و«رغم» مع اسم — وهو التمييز نفسه بين obwohl وtrotz. الفارق أن الألمانية تُلزمك زيادةً بنقل الفعل إلى آخر جملة obwohl، وبجرّ الاسم بعد trotz في حالة Genitiv.",
      eselsbruecke: "obwohl تُتبع بجملة كاملة وترمي الفعل إلى النهاية، وtrotz تُتبع باسم مجرور. وإن بدأت الجملة بـ obwohl فتذكّر أن الجملة الرئيسية بعد الفاصلة تبدأ بالفعل: Obwohl es regnet, gehe ich.",
      commonMistakes: [
        { wrong: "Obwohl es regnet, ich gehe spazieren.", right: "Obwohl es regnet, gehe ich spazieren.", whyAr: "إذا تصدّرت الجملةُ الثانويةُ الكلامَ احتلّت المرتبة الأولى، فيأتي فعل الجملة الرئيسية مباشرة بعد الفاصلة." },
        { wrong: "Obwohl des Regens gehe ich.", right: "Trotz des Regens gehe ich.", whyAr: "obwohl أداة ربط تحتاج جملة، أما مع الاسم المجرور فالصواب حرف الجر trotz." },
        { wrong: "Obwohl er müde war, trotzdem hat er gearbeitet.", right: "Obwohl er müde war, hat er gearbeitet.", whyAr: "لا يجمع بين obwohl وtrotzdem في الجملة نفسها لأن كلاً منهما يؤدي الوظيفة كاملة." },
      ],
      relatedRuleComparison: {
        title: "obwohl أم weil؟",
        content: "weil تقدّم سبباً: Ich bleibe zu Hause, weil es regnet. أما obwohl فتقدّم ما يخالف المتوقّع: Ich gehe spazieren, obwohl es regnet. كلتاهما ترسل الفعل إلى نهاية الجملة الثانوية.",
      },
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
    title: "أصوات المشاعر: ü، au، وst",
    items: [
      { de: "glücklich", ar: "سعيد", note: "ü + ck: غلوك-ليش" },
      { de: "traurig", ar: "حزين", note: "au = آو، وig في آخر الكلمة خفيفة كالشين: تراوريش" },
      { de: "gestresst", ar: "متوتر", note: "st = شت + ss: غِشترست" },
      { de: "sauer", ar: "غاضب", note: "au = آو: زاور" },
      { de: "das Gefühl", ar: "الشعور", note: "ü طويلة (شفتان مدورتان كأنك تقول «ي»): غِفوول تقريباً" },
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
        { correct: "aber", options: ["aber", "deshalb", "dann"] },
        { correct: "deshalb", options: ["deshalb", "trotzdem"] },
        { correct: "trotzdem", options: ["trotzdem", "dann"] },
        { correct: "dann", options: ["dann", "deshalb"] },
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
    {
      id: "w4",
      type: "transformation",
      instructionAr: "اكتب اعتذاراً مهذباً بالألمانية مع ذكر السبب بـ deshalb:",
      prompt: "اكتب: «آسف، كان يومي متعباً، لذلك لم أكتب لك» بالألمانية",
      acceptedAnswers: [
        "Es tut mir leid, ich hatte einen anstrengenden Tag, deshalb habe ich dir nicht geschrieben.",
      ],
      sampleAnswer: "Es tut mir leid, ich hatte einen anstrengenden Tag, deshalb habe ich dir nicht geschrieben.",
      explanation: "اعتذار + سبب: deshalb مقلوبة، فيأتي الفعل habe مباشرة بعدها ثم الفاعل ich.",
      errorType: "grammar",
    },
    {
      id: "w5",
      type: "transformation",
      instructionAr: "اكتب اعتراضاً مهذباً بـ aber:",
      prompt: "اكتب: «الفكرة جيدة، لكنني أرى أمراً آخر» بالألمانية",
      acceptedAnswers: ["Die Idee ist gut, aber ich sehe das anders.", "Die Idee ist gut, aber ich sehe es anders."],
      sampleAnswer: "Die Idee ist gut, aber ich sehe das anders.",
      explanation: "aber عادية: بعدها الفاعل ich مباشرة، والفعل يبقى في المرتبة الثانية.",
      errorType: "grammar",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط الصحيحة:",
      questionDe: "Ich bin müde, ___ ich bin glücklich.",
      options: ["aber", "deshalb", "denn", "dann"],
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
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
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
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich bleibe zu Hause, denn es regnet.",
      wrongWord: "denn es regnet",
      correctWord: "denn es regnet",
      isAlreadyCorrect: true,
      options: ["denn es regnet", "denn regnet es", "denn es regnet doch", "weil es regnet es"],
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
      { wrong: "Ich bleibe, weil regnet es.", right: "Ich bleibe, weil es regnet.", whyAr: "weil جملة ثانوية: الفعل في النهاية (regnet). أما denn فلا تغيّر الترتيب: Ich bleibe, denn es regnet." },
    ],
    eselsbruecken: [
      "«عائلة عادية: und-aber-oder-denn» (لا تلمس الترتيب) — «عائلة مقلوبة: deshalb-trotzdem-dann» (الفعل يقفز أولاً).",
      "اختبر موقع الأداة: إن كانت نتيجة أو معاكسة أو تسلسلاً زمنياً (dann) وتبدأ بها الجملة، فيأتي الفعل بعدها مباشرة → مقلوبة. وإن كانت تربط جملتين دون أن تحتل المكان الأول → عادية.",
    ],
    culturalNote: {
      title: "الصدق الألماني اللطيف",
      content:
        "يُعبَّر عن الرأي المخالف في الألمانية كثيراً بصراحة مع صيغة مهذبة، مثل «Ich finde das nicht gut» (لا أرى ذلك جيداً). والعبارات الأساسية للاعتذار والطمأنة: «Tut mir leid» (آسف) و«Es ist okay / Alles gut» (لا بأس). هذا وصف عام لأسلوب شائع لا قاعدة تنطبق على كل شخص أو موقف.",
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
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
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
      template: "Ich habe eine Prüfung, ___ lerne ich. (لذلك) Ich bin krank, ___ gehe ich zur Arbeit. (رغم ذلك) Erst arbeite ich, ___ koche ich. (ثم)",
      blanks: [
        { correct: "deshalb", options: ["deshalb", "trotzdem"] },
        { correct: "trotzdem", options: ["trotzdem", "deshalb"] },
        { correct: "dann", options: ["dann", "deshalb", "trotzdem"] },
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