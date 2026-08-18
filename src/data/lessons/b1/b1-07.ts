import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-07: السياسة والمجتمع — الجمل الثانوية الكاملة (تemporal/kausal)
 */
export const lessonB107: Lesson = {
  id: "b1-07",
  unitId: "b1-07",
  level: "B1",
  order: 1,
  titleDe: "Politik und Gesellschaft",
  titleAr: "السياسة والمجتمع",
  duration: 40,
  summary:
    "المفاهيم السياسية الأساسية، الجمل الثانوية الزمنية (als, wenn, während, bevor, nachdem, bis) والسببية (weil, da) والتخالفية (obwohl, obgleich) — الخريطة الكاملة للجمل الثانوية.",

  lernziele: [
    { id: "z1", de: "Ich kann über Politik und Gesellschaft sprechen.", ar: "أن أتحدث عن السياسة والقضايا المجتمعية." },
    { id: "z2", de: "Ich kenne die temporalen Nebensätze: als, wenn, während, bevor, nachdem, bis.", ar: "أن أتقن الجمل الثانوية الزمنية الست." },
    { id: "z3", de: "Ich kenne die kausalen Nebensätze: weil, da.", ar: "أن أتقن الجمل السببية: لأنّ (weil/da)." },
    { id: "z4", de: "Ich kann den konzessiven Nebensatz mit obwohl benutzen.", ar: "أن أستخدم الجملة التخالفية: رغم أن (obwohl)." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في A2 تعلمت weil وwenn. اليوم نكمل الخريطة: als (عندما — لماضٍ مرة واحدة)، während (بينما)، bevor (قبل أن)، nachdem (بعد أن)، bis (حتى). وجميعها ترسل الفعل للنهاية — لكن الفرق بين als وwenn دقيق جداً!",
    motivatingQuestionDe: "Was denkst du über Politik?",
    contextAr:
      "المجتمع والسياسة: مفردات أساسية + الخريطة الكاملة للجمل الزمنية والسببية — أهم مهارة لفهم النصوص الإخبارية والرأي.",
    contextDe: "Als ich jung war, war die Politik anders.",
    connectionToPreviousAr: "تتذكر weil/wenn/ob من A2 وdass من درس الإعلام. اليوم: بقية الجمل الثانوية — وخاصة التمييز الصعب: als (ماضٍ مرة) مقابل wenn (متكرر/مضارع).",
    activateVocabulary: [
      { de: "die Politik", ar: "السياسة" },
      { de: "die Gesellschaft", ar: "المجتمع" },
      { de: "das Gesetz", ar: "القانون" },
      { de: "die Wahl", ar: "الانتخاب" },
      { de: "der Bürger", ar: "المواطن" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر حرف الربط:",
      questionDe: "Ich lerne, ___ ich will.",
      options: ["weil", "wenn", "ob", "dass"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة A2).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر حرف الربط:",
      questionDe: "___ du Zeit hast, hilf mir.",
      options: ["Wenn", "Weil", "Ob", "Dass"],
      correctIndex: 0,
      explanation: "شرط/زمن → wenn.",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1: أكمل:",
      template: "Das Haus ___ gebaut. (يُبنى)",
      blanks: [
        { correct: "wird", options: ["wird", "wurde", "ist"] },
      ],
      explanation: "مجهول مضارع: wird gebaut (درس البيئة).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الجمل الزمنية: als أم wenn أم während...؟",
      titleDe: "Temporale Nebensätze: als, wenn, während, bevor, nachdem, bis",
      explanationAr:
        "als = عندما (ماضٍ، مرة واحدة): Als ich jung war... (عندما كنت صغيراً). wenn = عندما/كلما (مضارع أو تكرار): Wenn ich Zeit habe... während = بينما: Während er arbeitet, koche ich. bevor = قبل أن: Bevor ich schlafe, lese ich. nachdem = بعد أن: Nachdem ich gegessen habe, gehe ich. bis = حتى: Warte, bis ich komme.",
      whyAr:
        "لماذا نفرق als عن wenn؟ لأن الألمانية دقيقة في الزمن: als لماضٍ منتهٍ مرة واحدة (Als ich 20 war)، وwenn للمضارع أو التكرار (Wenn ich Zeit habe). هذا التفريق يمنع اللبس: هل تتحدث عن حادثة واحدة أم عادة؟",
      table: {
        title: "أدوات الزمن الست",
        columns: ["الأداة", "المعنى", "الاستخدام", "مثال"],
        rows: [
          { label: "als", cells: ["عندما", "ماضٍ مرة واحدة", "Als ich jung war..."] },
          { label: "wenn", cells: ["عندما/كلما", "مضارع أو تكرار", "Wenn ich Zeit habe..."] },
          { label: "während", cells: ["بينما", "متزامن", "Während er arbeitet..."] },
          { label: "bevor", cells: ["قبل أن", "قبلية", "Bevor ich schlafe..."] },
          { label: "nachdem", cells: ["بعد أن", "بعدية", "Nachdem ich gegessen habe..."] },
          { label: "bis", cells: ["حتى", "نهاية زمنية", "Bis ich komme..."] },
        ],
      },
      examples: [
        { de: "Als ich in Tunesien lebte, war alles anders.", ar: "عندما كنت أعيش في تونس كان كل شيء مختلفاً." },
        { de: "Wenn ich nach Deutschland komme, besuche ich dich.", ar: "عندما آتي إلى ألمانيا سأزورك." },
        { de: "Während sie arbeitet, hört sie Musik.", ar: "بينما تعمل تستمع للموسيقى." },
        { de: "Bevor wir wählen, diskutieren wir.", ar: "قبل أن ننتخب نناقش." },
        { de: "Nachdem das Gesetz geändert wurde, änderte sich vieles.", ar: "بعد أن تغير القانون تغير الكثير." },
      ],
      comparisonWithArabic:
        "«عندما كنت صغيراً» = Als ich jung war. «عندما يكون عندي وقت» = Wenn ich Zeit habe. العربية تستخدم «عندما» للاثنين — الألمانية تفرق. والتشابه: «بينما» = während، «قبل أن» = bevor، «بعد أن» = nachdem — تطابق شبه كامل!",
      eselsbruecke:
        "«als = حكاية ماضية واحدة (ألصقتها في الماضي)، wenn = عادة أو مستقبل» — اسأل: ماضٍ مرة واحدة؟ → als. تكرار أو مضارع؟ → wenn.",
      commonMistakes: [
        { wrong: "Als ich Zeit habe... (خلط الزمن)", right: "Wenn ich Zeit habe...", whyAr: "المضارع → wenn. als للماضي فقط." },
        { wrong: "Als ich 20 bin... (als مع مضارع)", right: "Als ich 20 war...", whyAr: "als + Präteritum دائماً." },
        { wrong: "Nachdem ich gegessen habe أم hatte؟", right: "nachdem + Perfekt (gegessen habe) عادي في المحادثة. Plusquamperfekt في الكتابة", whyAr: "كلاهما صحيح حسب السياق." },
      ],
      relatedRuleComparison: {
        title: "weil أم da؟",
        content: "كلاهما «لأنّ»: weil شائع في الكلام، da رسمي أكثر وغالباً في بداية الجملة: Da es regnet, bleiben wir. كلاهما يرسل الفعل للنهاية.",
      },
    },
    {
      id: "t2",
      titleAr: "الجمل التخالفية: obwohl (رغم أن)",
      titleDe: "Der konzessive Nebensatz: obwohl, obgleich, obschon",
      explanationAr:
        "obwohl = رغم أن (تخالف/تنازل): Obwohl es regnet, gehe ich spazieren (رغم أن المطر يهطل، أتمشى). التركيب مثل كل الجمل الثانوية: الفعل في النهاية، والجملة الرئيسية بعدها يبدأ فعلها مباشرة. المرادفات الرسمية: obgleich وobschon (أدبي)، والبديل الأقصر: trotzdem (رغم ذلك) مع قلب الترتيب.",
      whyAr:
        "لماذا نحتاج obwohl؟ لأنها «الجملة الرافضة للتوقع»: يتوقع المستمع أن تمتنع عن المشي تحت المطر — فتقول obwohl. هي الأداة الأهم في النقاش والرأي: تعترف بالطرف الآخر ثم تصر على رأيك (Obwohl das teuer ist, kaufe ich es).",
      table: {
        title: "obwohl وأخواتها",
        columns: ["الأداة", "المعنى", "المستوى", "مثال"],
        rows: [
          { label: "obwohl", cells: ["رغم أن", "B1 (شائع)", "Obwohl es regnet, gehe ich."] },
          { label: "obgleich", cells: ["رغم أن", "رسمي", "Obgleich er krank war, kam er."] },
          { label: "obschon", cells: ["رغم أن", "أدبي", "Obschon es spät war, blieben wir."] },
          { label: "trotzdem", cells: ["رغم ذلك", "ظرف (قلب ترتيب V2)", "Es regnete. Trotzdem ging ich."] },
        ],
      },
      examples: [
        { de: "Obwohl ich müde war, habe ich gelernt.", ar: "رغم أنني كنت متعباً، تعلمت." },
        { de: "Obwohl die Wahl wichtig ist, gehen viele nicht wählen.", ar: "رغم أن الانتخاب مهم، كثيرون لا ينتخبون." },
        { de: "Obgleich das Gesetz streng ist, wird es oft nicht beachtet.", ar: "رغم أن القانون صارم، لا يُحترم كثيراً." },
        { de: "Die Bürger protestieren, obwohl die Regierung nachgibt.", ar: "يحتج المواطنون رغم أن الحكومة تتراجع." },
      ],
      comparisonWithArabic:
        "«رغم أن + جملة» = obwohl + جملة — تطابق تام: رغم أن المطر يهطل = Obwohl es regnet. والفرق الوحيد: الألمانية ترسل الفعل إلى نهاية الجملة التابعة.",
      eselsbruecke:
        "«obwohl = أُوبفول (رغم أن)» — تذكّرها بـ«وَبول»: أمشي رغم المطر (رغم «الوَبول»). والقاعدة: obwohl + فعل في نهاية جملتها.",
      commonMistakes: [
        { wrong: "Obwohl es regnet, ich gehe spazieren.", right: "Obwohl es regnet, gehe ich spazieren.", whyAr: "الجملة الرئيسية بعد التابعة: الفعل أولاً (V1)." },
        { wrong: "Obwohl es regnet. Ich gehe spazieren. (نقطة بدل فاصلة)", right: "Obwohl es regnet, gehe ich spazieren.", whyAr: "الجملة التابعة لا تقف وحدها — تُوصل بالفاصلة." },
        { wrong: "Es regnete. Trotzdem ich ging.", right: "Es regnete. Trotzdem ging ich.", whyAr: "trotzdem ظرف يقلب الترتيب (V2) — ليس أداة تربط بفعل نهائي." },
      ],
      relatedRuleComparison: {
        title: "obwohl أم trotzdem أم trotz + Genitiv؟",
        content: "obwohl + جملة (فعل في النهاية): Obwohl es regnet... · trotzdem + جملة رئيسية (فعل ثانٍ): Es regnet. Trotzdem gehe ich. · trotz + اسم (Genitiv): Trotz des Regens gehe ich. ثلاثة أشكال لنفس «رغم».",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "نقاش سياسي",
        lines: [
          { speaker: "Moderator", de: "Als die Mauer fiel, war ich zehn Jahre alt.", ar: "عندما سقط الجدار كنت في العاشرة." },
          { speaker: "Sami", de: "Ich war nicht geboren! Aber ich weiß viel über die Geschichte.", ar: "لم أكن قد ولدت! لكنني أعرف الكثير عن التاريخ." },
          { speaker: "Moderator", de: "Wann interessierst du dich für Politik?", ar: "متى تهتم بالسياسة؟" },
          { speaker: "Sami", de: "Seitdem ich in Deutschland wohne, interessiere ich mich dafür.", ar: "منذ أن أسكن في ألمانيا وأنا مهتم بها." },
          { speaker: "Moderator", de: "Warum?", ar: "لماذا؟" },
          { speaker: "Sami", de: "Weil Politik unser Leben beeinflusst.", ar: "لأن السياسة تؤثر على حياتنا." },
        ],
      },
      {
        id: "l2",
        title: "قبل الانتخابات",
        lines: [
          { speaker: "Anna", de: "Bevor wir wählen, müssen wir die Programme lesen.", ar: "قبل أن ننتخب يجب أن نقرأ البرامج." },
          { speaker: "Karim", de: "Ja. Während der Wahlkampf läuft, gibt es viel Werbung.", ar: "نعم. بينما يجري الحملة الانتخابية توجد إعلانات كثيرة." },
          { speaker: "Anna", de: "Nachdem ich die Programme gelesen habe, kann ich entscheiden.", ar: "بعد أن أقرأ البرامج أستطيع أن أقرر." },
          { speaker: "Karim", de: "Genau. Wichtig ist, dass wir wählen gehen.", ar: "بالضبط. المهم أن نذهب للانتخاب." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Seit wann interessiert sich Sami für Politik?",
        questionAr: "منذ متى يهتم سامي بالسياسة؟",
        options: ["seitdem er in Deutschland wohnt", "seit der Mauerfall", "seit er zehn war", "seit kurzem"],
        correctIndex: 0,
        explanation: "قال سامي: Seitdem ich in Deutschland wohne, interessiere ich mich.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was müssen sie vor der Wahl machen?",
        questionAr: "ماذا يجب أن يفعلوا قبل الانتخاب؟",
        options: ["die Programme lesen", "Werbung machen", "demonstrieren", "arbeiten"],
        correctIndex: 0,
        explanation: "قالت آنا: Bevor wir wählen, müssen wir die Programme lesen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann kann Anna entscheiden?",
        questionAr: "متى تستطيع آنا أن تقرر؟",
        options: ["nachdem sie die Programme gelesen hat", "vor der Wahl", "während des Wahlkampfs", "morgen"],
        correctIndex: 0,
        explanation: "قالت: Nachdem ich die Programme gelesen habe, kann ich entscheiden.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات السياسة: ch، w، وei",
    items: [
      { de: "die Politik", ar: "السياسة", note: "k في النهاية: پوليتيك" },
      { de: "das Gesetz", ar: "القانون", note: "g = غ + tz = تس: غِزِتس" },
      { de: "die Wahl", ar: "الانتخاب", note: "w = ڤ + h: ڤال" },
      { de: "der Bürger", ar: "المواطن", note: "ü + r: بورغِر" },
      { de: "die Regierung", ar: "الحكومة", note: "ie = إي: رِغيرونغ" },
      { de: "das Parlament", ar: "البرلمان", note: "a مفتوح: پارلامنت" },
    ],
    tip: "Regierung = رِغيرونغ — ie إي + g غ + ung. قسّمها دائماً: رِغ + إي + رونغ.",
    shadowing: [
      { de: "Als ich jung war, war alles anders.", ar: "عندما كنت صغيراً كان كل شيء مختلفاً.", tip: "als + Präteritum (war)" },
      { de: "Wenn ich Zeit habe, lese ich.", ar: "عندما يكون عندي وقت أقرأ.", tip: "wenn + مضارع" },
      { de: "Während er arbeitet, koche ich.", ar: "بينما يعمل أطبخ.", tip: "während = ڤيرينت (w=ڤ)" },
      { de: "Nachdem ich gegessen habe, gehe ich.", ar: "بعد أن آكل أذهب.", tip: "nachdem = ناخ-دِم (ch=خ)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة als:",
      prompt: "اكتب: «عندما كنت صغيراً، كان كل شيء مختلفاً»",
      acceptedAnswers: ["Als ich jung war, war alles anders", "Als ich klein war, war alles anders"],
      sampleAnswer: "Als ich jung war, war alles anders.",
      explanation: "als + Präteritum (war) — ماضٍ مرة واحدة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ als/wenn/während/bevor/nachdem:",
      template: "___ ich jung war, lebte ich in Tunis. (عندما ماضٍ) ___ ich Zeit habe, lerne ich. (كلما) ___ er arbeitet, hört er Musik. (بينما)",
      blanks: [
        { correct: "Als", options: ["Als", "Wenn", "Während"] },
        { correct: "Wenn", options: ["Als", "Wenn", "Während"] },
        { correct: "Während", options: ["Als", "Wenn", "Während"] },
      ],
      explanation: "ماضٍ مرة → als. مضارع/تكرار → wenn. متزامن → während.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: أعد الصياغة بـ obwohl:",
      instructionDe: "Schreibe mit obwohl:",
      prompt: "Trotz des Regens gehe ich spazieren. → Obwohl ...",
      acceptedAnswers: ["Obwohl es regnet, gehe ich spazieren.", "Ich gehe spazieren, obwohl es regnet."],
      sampleAnswer: "Obwohl es regnet, gehe ich spazieren.",
      explanation: "trotz + اسم (رسمي) → obwohl + جملة كاملة (الفعل في النهاية).",
      errorType: "grammar",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الزمن:",
      questionDe: "___ ich jung war, lebte ich in Tunis.",
      options: ["Als", "Wenn", "Während", "Bis"],
      correctIndex: 0,
      explanation: "ماضٍ مرة واحدة → als.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر أداة الزمن:",
      questionDe: "___ ich Zeit habe, lerne ich.",
      options: ["Wenn", "Als", "Während", "Bis"],
      correctIndex: 0,
      explanation: "مضارع/تكرار → wenn.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل أداة الزمن بمعناها:",
      pairs: [
        { left: "während", right: "بينما" },
        { left: "bevor", right: "قبل أن" },
        { left: "nachdem", right: "بعد أن" },
        { left: "bis", right: "حتى" },
      ],
      explanation: "أربع أدوات زمنية — كلها ترسل الفعل للنهاية.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["war", "Als", "jung", "ich", "lebte", "ich", "in", "Tunis", ","],
      correctSentence: "Als ich jung war, lebte ich in Tunis.",
      explanation: "عندما كنت صغيراً عشت في تونس — als + Präteritum.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Als ich Zeit habe, lerne ich.",
      wrongWord: "Als",
      correctWord: "Wenn",
      options: ["Wenn", "Als", "Während", "Bis"],
      explanation: "المضارع → wenn. als للماضي فقط.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالكلمة السياسية الصحيحة:",
      template: "die ___ (حكومة) · das ___ (قانون) · die ___ (انتخاب) · der ___ (مواطن)",
      blanks: [
        { correct: "Regierung", options: ["Regierung", "Wahl", "Gesetz"] },
        { correct: "Gesetz", options: ["Regierung", "Wahl", "Gesetz"] },
        { correct: "Wahl", options: ["Regierung", "Wahl", "Gesetz"] },
        { correct: "Bürger", options: ["Bürger", "Politiker", "Gesetz"] },
      ],
      explanation: "الحكومة، القانون، الانتخاب، المواطن.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اربط بجملة während:",
      prompt: "Er arbeitet. + Ich koche. → (بينما يعمل أطبخ)",
      acceptedAnswers: ["Während er arbeitet, koche ich", "Während er arbeitet, koche ich."],
      sampleAnswer: "Während er arbeitet, koche ich.",
      explanation: "während + فعل في النهاية (arbeitet).",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die Wahl",
      questionAr: "ما معنى الكلمة؟",
      options: ["الانتخاب", "الاختيار (في المطعم)", "القرار", "الرأي"],
      correctIndex: 0,
      explanation: "die Wahl = الانتخاب (سياسياً).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Bevor ich schlafe, ich lese ein Buch.",
      wrongWord: "ich lese",
      correctWord: "lese ich",
      options: ["lese ich", "ich lese", "lesen ich", "ich lesen"],
      explanation: "الجملة الثانوية أولاً → الفعل الرئيسي بعدها مباشرة.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Nachdem das Gesetz geändert wurde, änderte sich vieles.",
      explanation: "بعد أن تغير القانون تغير الكثير — nachdem + مجهول.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بـ obwohl أو trotzdem:",
      instructionDe: "Ergänze: obwohl oder trotzdem",
      template: "___ ich müde war, habe ich gelernt. · Es regnete. ___ ging ich spazieren.",
      blanks: [
        { correct: "Obwohl", options: ["Obwohl", "Trotzdem", "Weil", "Als"] },
        { correct: "Trotzdem", options: ["Trotzdem", "Obwohl", "Deshalb", "Während"] },
      ],
      hint: "obwohl + فعل في النهاية (جملة تابعة). trotzdem يقلب الترتيب (V2).",
      explanation: "Obwohl + فعل في النهاية (habe). Trotzdem + قلب الترتيب (ging ich).",
      errorType: "grammar",
      points: 2,
    },
    {
      id: "e12",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن جملة تخالفية (obwohl):",
      tokens: ["Obwohl", "die", "Wahl", "wichtig", "ist,", "gehen", "viele", "nicht", "wählen."],
      correctSentence: "Obwohl die Wahl wichtig ist, gehen viele nicht wählen.",
      hint: "obwohl + فعل في النهاية (ist)، ثم الجملة الرئيسية بفعل أولاً (gehen).",
      explanation: "رغم أن الانتخاب مهم، كثيرون لا ينتخبون.",
      errorType: "word-order",
      points: 2,
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Als ich Zeit habe... (als مع مضارع)", right: "Wenn ich Zeit habe...", whyAr: "als للماضي فقط." },
      { wrong: "Bevor ich schlafe, ich lese.", right: "Bevor ich schlafe, lese ich.", whyAr: "الفعل بعد الجملة الثانوية مباشرة." },
      { wrong: "seitdem أم seit؟", right: "seitdem + جملة (منذ أن). seit + اسم (منذ)", whyAr: "seitdem يبدأ جملة، seit يتبعها اسم." },
    ],
    eselsbruecken: [
      "«als = حكاية ماضية واحدة، wenn = عادة/مستقبل».",
      "«الستة الزمنية»: als-wenn-während-bevor-nachdem-bis — كلها ترمي الفعل للنهاية.",
    ],
    culturalNote: {
      title: "السياسة الألمانية",
      content:
        "ألمانيا جمهورية برلمانية: «der Bundestag» (البرلمان) و«der Bundeskanzler» (المستشار). والانتخابات: «die Bundestagswahl» كل 4 سنوات. والمشاركة السياسية مهمة: «Wählen gehen» (اذهب للانتخاب) شعار شائع. و«die Demokratie» قيمة أساسية يتعلمها الأطفال في المدرسة.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الزمن:",
      questionDe: "___ ich in Berlin war, besuchte ich das Museum.",
      options: ["Als", "Wenn", "Während", "Bis"],
      correctIndex: 0,
      explanation: "ماضٍ مرة → als.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر أداة الزمن:",
      questionDe: "___ du lernst, höre ich Musik.",
      options: ["Während", "Als", "Bis", "Nachdem"],
      correctIndex: 0,
      explanation: "متزامن → während.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["gegessen", "Nachdem", "ich", "habe", "gehe", "ich", "schlafen", ","],
      correctSentence: "Nachdem ich gegessen habe, gehe ich schlafen.",
      explanation: "بعد أن آكل أذهب للنوم — nachdem + فعل في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Als ich Zeit habe, lerne ich.",
      wrongWord: "Als",
      correctWord: "Wenn",
      options: ["Wenn", "Als", "Während", "Seitdem"],
      explanation: "المضارع → wenn.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ als/wenn/bevor:",
      template: "___ ich aufwache, trinke ich Kaffee. (عندما مضارع) ___ ich 10 war, lernte ich Englisch. (ماضٍ مرة) ___ ich schlafe, putze ich die Zähne. (قبل أن)",
      blanks: [
        { correct: "Wenn", options: ["Wenn", "Als", "Bevor"] },
        { correct: "Als", options: ["Wenn", "Als", "Bevor"] },
        { correct: "Bevor", options: ["Wenn", "Als", "Bevor"] },
      ],
      explanation: "مضارع → wenn. ماضٍ → als. قبل → bevor.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Politik", ar: "السياسة", example: "Politik ist wichtig.", exampleAr: "السياسة مهمة.", level: "B1" },
    { id: "fc2", de: "die Regierung", ar: "الحكومة", example: "Die Regierung arbeitet.", exampleAr: "الحكومة تعمل.", level: "B1" },
    { id: "fc3", de: "das Gesetz", ar: "القانون", example: "Das Gesetz ist neu.", exampleAr: "القانون جديد.", level: "B1" },
    { id: "fc4", de: "die Wahl", ar: "الانتخاب", example: "Die Wahl ist im Herbst.", exampleAr: "الانتخاب في الخريف.", level: "B1" },
    { id: "fc5", de: "als", ar: "عندما (ماضٍ مرة)", example: "Als ich jung war...", exampleAr: "عندما كنت صغيراً...", level: "B1" },
    { id: "fc6", de: "wenn", ar: "عندما/كلما (مضارع)", example: "Wenn ich Zeit habe...", exampleAr: "عندما يكون عندي وقت...", level: "B1" },
    { id: "fc7", de: "während", ar: "بينما", example: "Während er arbeitet...", exampleAr: "بينما يعمل...", level: "B1" },
    { id: "fc8", de: "der Bürger", ar: "المواطن", example: "Die Bürger wählen.", exampleAr: "المواطنون ينتخبون.", level: "B1" },
    { id: "fc9", de: "obwohl", ar: "رغم أن", example: "Obwohl es regnet, gehe ich spazieren.", exampleAr: "رغم المطر أتمشى.", level: "B1" },
    { id: "fc10", de: "trotzdem", ar: "رغم ذلك", example: "Es regnet. Trotzdem gehe ich.", exampleAr: "يمطر. رغم ذلك أذهب.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b1-07-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مقال رأي سياسي بالعربية مع نقل الحجج",
      sourceDe: "Der Autor argumentiert, dass mehr Bürgerbeteiligung die Demokratie stärkt. Er fordert mehr Volksabstimmungen auf lokaler Ebene.",
      taskAr: "لخّص النص مع نقل موقف الكاتب وحجته الأساسية.",
      modelAnswerAr: "«يجادل الكاتب أن المزيد من مشاركة المواطنين يقوي الديمقراطية. ويطالب بمزيد من الاستفتاءات على المستوى المحلي.»",
      keyPointsAr: ["نقلت حجة الكاتب (المشاركة تقوي الديمقراطية)", "ذكرت المطالبة (استفتاءات محلية)"],
    },
  ],
      interaction: [
    {
      id: "int-b1-07-1",
      scenarioAr: "نقاش عن المشاركة السياسية للشباب.",
      scenarioDe: "Diskussion über politische Beteiligung der Jugend.",
      strategyAr: "الاستراتيجية: مناقشة قضية مجتمعية باحترام وموازنة.",
      rounds: [
        {
          speakerDe: "Sollten junge Menschen mehr politisch aktiv sein?",
          speakerAr: "هل يجب أن يكون الشباب أكثر نشاطاً سياسياً؟",
          options: [
            { de: "Ja, meiner Meinung nach sollten junge Menschen wählen gehen und sich engagieren, weil sie die Zukunft gestalten.", ar: "نعم، في رأيي يجب أن يصوت الشباب وينخرطوا لأنهم يصنعون المستقبل.", best: true, replyDe: "Guter Punkt! Aber viele fühlen sich machtlos.", replyAr: "نقطة جيدة! لكن كثيرين يشعرون بالعجز." },
            { de: "Nein, Politik ist nur etwas für alte Leute.", ar: "لا، السياسة للكبار فقط.", best: false, replyDe: "Das ist ein Vorurteil. Politik betrifft alle Generationen.", replyAr: "هذا تحيز. السياسة تهم كل الأجيال." },
          ],
        },
        {
          speakerDe: "Warum fühlen sich viele junge Menschen machtlos?",
          speakerAr: "لماذا يشعر كثير من الشباب بالعجز؟",
          options: [
            { de: "Weil sie glauben, dass ihre Stimme nichts ändert. Aber jede Stimme zählt, besonders bei lokalen Wahlen.", ar: "لأنهم يعتقدون أن صوتهم لا يغيّر شيئاً. لكن كل صوت يهم، خاصة في الانتخابات المحلية.", best: true, replyDe: "Das ist eine hoffnungsvolle Sichtweise.", replyAr: "هذه نظرة متفائلة." },
            { de: "Weil die Politik wirklich nichts ändert.", ar: "لأن السياسة فعلاً لا تغير شيئاً.", best: false, replyDe: "Das ist zu pessimistisch. Demokratie lebt von Beteiligung.", replyAr: "هذا تشاؤم مفرط. الديمقراطية تعيش بالمشاركة." },
          ],
        },
      ],
    },
  ],

};