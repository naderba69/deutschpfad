import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-01: السفر والعطلات — Perfekt (الماضي التام) مع haben/sein
 */
export const lessonA201: Lesson = {
  id: "a2-01",
  unitId: "a2-01",
  level: "A2",
  order: 1,
  titleDe: "Reisen und Urlaub",
  titleAr: "السفر والعطلات",
  duration: 35,
  summary:
    "الماضي التام (Perfekt): تركيبه بـ haben/sein + Partizip II، الأفعال الشاذة والقوية، وحكاية تجارب السفر: Ich bin nach Deutschland geflogen.",

  lernziele: [
    { id: "z1", de: "Ich kann das Perfekt bilden.", ar: "أن أصوغ الماضي التام (Perfekt) — أهم زمن ماضٍ في المحادثة." },
    { id: "z2", de: "Ich weiß, wann man sein und wann haben benutzt.", ar: "أن أميز متى يكون الفعل المساعد sein ومتى haben." },
    { id: "z3", de: "Ich kann über Reisen und Urlaub erzählen.", ar: "أن أحكي عن رحلة أو عطلة: ماذا فعلت وأين ذهبت." },
      { id: "z4", de: "Ich kann über meine letzte Reise mit Perfekt berichten.", ar: "أن أروي رحلتي الأخيرة مستخدماً الماضي التام (Perfekt)." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A1 قلت: Ich gehe nach Deutschland (أذهب الآن). ماذا لو أردت أن تحكي أنك ذهبت أمس؟ الألمانية لا تستخدم فعل الماضي فقط — بل تركيباً من فعلين! خمّن كيف؟",
    motivatingQuestionDe: "Was hast du im Urlaub gemacht?",
    contextAr:
      "نبدأ مستوى A2 بزمن المستقبل الأهم في الحديث اليومي: Perfekt. الألمان يتحدثون عن الماضي بهذا التركيب في 90% من المحادثات — وليس بـ Präteritum (الذي سنأخذه لاحقاً للكتابة).",
    contextDe: "Ich bin nach Berlin geflogen und habe viel gesehen.",
    connectionToPreviousAr: "تتذكر haben (درس 3) وwerden (درس 12) من A1. اليوم نحتاج haben وsein معاً لبناء Perfekt — وكل كلمة عربية «فعلتُ» ستتحول لهذا التركيب.",
    activateVocabulary: [
      { de: "der Urlaub", ar: "الإجازة" },
      { de: "die Reise", ar: "الرحلة" },
      { de: "fliegen", ar: "يطير" },
      { de: "fahren", ar: "يقود/يذهب" },
      { de: "das Hotel", ar: "الفندق" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر التصريف الصحيح:",
      questionDe: "Ich ___ aus Tunesien.",
      options: ["bin", "habe", "werde", "ist"],
      correctIndex: 0,
      explanation: "تذكر: Ich bin + بلد — sein مع ich = bin.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر حرف الجر الصحيح:",
      questionDe: "Ich fahre ___ Deutschland.",
      options: ["nach", "zu", "in", "aus"],
      correctIndex: 0,
      explanation: "البلدان تأخذ nach: nach Deutschland (درس المدينة).",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "word-ordering",
      instructionAr: "مراجعة من A1: رتّب الجملة:",
      tokens: ["Ich", "habe", "Hunger", "."],
      correctSentence: "Ich habe Hunger.",
      explanation: "عندي جوع = أنا جائع (درس الطعام).",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الماضي التام (Perfekt): haben/sein + Partizip II",
      titleDe: "Das Perfekt: ich habe gesehen / ich bin gefahren",
      explanationAr:
        "Perfekt = الفعل المساعد (haben أو sein) في المضارع + Partizip II في نهاية الجملة: Ich habe ein Buch gekauft (اشتريت كتاباً). Ich bin nach Berlin geflogen (طرت إلى برلين). Partizip II للمنتظم: ge + جذر + t (kaufen → gekauft). للقوي: ge + جذر متغير + en (sehen → gesehen، fliegen → geflogen).",
      whyAr:
        "لماذا الفعل المساعد في المركز الثاني والتصريف في النهاية؟ لأن الجملة الألمانية «إطار»: الفعل المتصرف يفتح الجملة، والتصريف يغلقها في النهاية. هذا يسمح بوضع كل التفاصيل (أين؟ متى؟ مع من؟) في المنتصف: Ich habe gestern mit Anna einen Film gesehen.",
      table: {
        title: "متى sein ومتى haben؟",
        columns: ["haben (الأكثر)", "sein", "مثال"],
        rows: [
          { label: "أفعال متعدية (لها مفعول)", cells: ["kaufen, sehen, essen", "—", "Ich habe einen Apfel gegessen."] },
          { label: "أفعال انعكاسية", cells: ["sich freuen...", "—", "Ich habe mich gefreut."] },
          { label: "حركة من مكان لآخر", cells: ["—", "gehen, fahren, fliegen", "Ich bin nach Berlin geflogen."] },
          { label: "تغير حالة", cells: ["—", "werden, aufstehen", "Ich bin müde geworden."] },
        ],
      },
      examples: [
        { de: "Ich habe gestern Pizza gegessen.", ar: "أكلت بيتزا أمس." },
        { de: "Wir sind nach Deutschland geflogen.", ar: "سافرنا إلى ألمانيا." },
        { de: "Sie hat ein Souvenir gekauft.", ar: "اشترت تذكاراً." },
        { de: "Er ist um sieben Uhr aufgestanden.", ar: "استيقظ في السابعة." },
        { de: "Hast du den Film gesehen?", ar: "هل شاهدت الفيلم؟" },
      ],
      comparisonWithArabic:
        "العربية: «اشتريت» فعل واحد ماضٍ. الألمانية: تركيبة من فعلين. الفكرة الأقرب: مثل «قد اشتريت» أو «كان قد اشترى» في العربية — مع فارق أنها إلزامية في الألمانية الحديثة.",
      eselsbruecke:
        "«haben للفعل الذي له مفعول، sein للحركة والتغير» — اختصرها: «حساب = haben، حركة = sein». وحرف ge- علامة التصريف: ge + جذر + t/en.",
      commonMistakes: [
        { wrong: "Ich habe nach Berlin gefliegen.", right: "Ich bin nach Berlin geflogen.", whyAr: "fliegen حركة → sein. والتصريف القوي: geflogen (وليس gefliegen)." },
        { wrong: "Ich habe gegessen ein Apfel. (تصريف في منتصف الجملة)", right: "Ich habe einen Apfel gegessen.", whyAr: "Partizip II في نهاية الجملة دائماً (الإطار)." },
        { wrong: "gekaufen (خطأ في التصريف)", right: "gekauft", whyAr: "kaufen منتظم: ge+kauf+t = gekauft." },
      ],
      relatedRuleComparison: {
        title: "Perfekt أم Präteritum؟",
        content: "Perfekt = الحديث الشفهي (Ich habe gegessen). Präteritum = الكتابة والقصص والأفعال المساعدة (Ich war, ich hatte). في A2: Perfekt أولاً — وPräteritum لاحقاً في هذا المستوى.",
      },
    },
    {
      id: "t2",
      titleAr: "اختيار haben أم sein في Perfekt — القاعدة الكاملة",
      titleDe: "Erweiterung",
      explanationAr: "القاعدة الكاملة: sein مع أفعال الحركة (kommen, gehen, fahren) وتغير الحالة (aufstehen, wachsen) والأفعال اللازمة (bleiben, sein). haben مع كل الباقي. ملاحظة: «أنا مشيت» = ich bin gegangen (حركة) بينما «أنا قمت بالقيادة لشخص» = ich habe gefahren (متعدي).",
      whyAr: "لماذا؟ لأن اختيار الفعل المساعد يحدد صحة الجملة كلها — وأخطاؤه شائعة جداً بين متعلمي A2.",
      examples: [
        { de: "Ich bin nach Berlin geflogen.", ar: "طرت إلى برلين (حركة)." }, { de: "Ich habe ein Taxi gefahren.", ar: "قدت سيارة أجرة (متعدي)." }
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
        title: "عطلة في برلين",
        lines: [
          { speaker: "Sami", de: "Ich habe letzte Woche Urlaub gemacht.", ar: "أخذت إجازة الأسبوع الماضي." },
          { speaker: "Anna", de: "Schön! Was hast du gemacht?", ar: "جميل! ماذا فعلت؟" },
          { speaker: "Sami", de: "Ich bin nach Berlin geflogen und habe viele Museen besucht.", ar: "طرت إلى برلين وزرت متاحف كثيرة." },
          { speaker: "Anna", de: "Hast du die Berliner Mauer gesehen?", ar: "هل رأيت سور برلين؟" },
          { speaker: "Sami", de: "Ja, natürlich! Und ich habe typisches Essen probiert.", ar: "نعم طبعاً! وجربت طعاماً تقليدياً." },
        ],
      },
      {
        id: "l2",
        title: "عطلة على الشاطئ",
        lines: [
          { speaker: "Mona", de: "Wir sind nach Sousse gefahren.", ar: "ذهبنا إلى سوسة." },
          { speaker: "Karim", de: "Wie war das Hotel?", ar: "كيف كان الفندق؟" },
          { speaker: "Mona", de: "Das Hotel war super! Wir haben geschwommen und in der Sonne gelegen.", ar: "كان الفندق رائعاً! سبحنا واستلقينا في الشمس." },
          { speaker: "Karim", de: "Habt ihr Fotos gemacht?", ar: "هل التقطتم صوراً؟" },
          { speaker: "Mona", de: "Ja, viele! Ich zeige sie dir später.", ar: "نعم، كثيراً! سأريكها لاحقاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hat Sami in Berlin gemacht?",
        questionAr: "ماذا فعل سامي في برلين؟",
        options: ["Museen besucht", "geschwommen", "gearbeitet", "eingekauft"],
        correctIndex: 0,
        explanation: "قال: habe viele Museen besucht — زار متاحف كثيرة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wohin sind Mona und Karim gefahren?",
        questionAr: "إلى أين ذهب منى وكريم؟",
        options: ["nach Sousse", "nach Berlin", "nach München", "nach Hamburg"],
        correctIndex: 0,
        explanation: "قالت منى: Wir sind nach Sousse gefahren.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie war das Hotel?",
        questionAr: "كيف كان الفندق؟",
        options: ["super", "schlecht", "teuer", "klein"],
        correctIndex: 0,
        explanation: "قالت: Das Hotel war super! — كان رائعاً.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hat Sami in Berlin probiert?",
        questionAr: "ماذا جرب سامي في برلين؟",
        options: ["typisches Essen", "typisches Bier", "nur Kaffee", "nichts"],
        correctIndex: 0,
        explanation: "قال سامي: Ich habe typisches Essen probiert — جربت طعاماً تقليدياً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات السفر: ei، eu، وsch",
    items: [
      { de: "die Reise", ar: "الرحلة", note: "ei = آي + s بين علة = ز: رايْزِه" },
      { de: "fliegen", ar: "يطير", note: "ie = إي: فليغِن" },
      { de: "der Urlaub", ar: "الإجازة", note: "au = آو: أورلاوب" },
      { de: "das Flugzeug", ar: "الطائرة", note: "eu = أُوي + tz = تس: فلوغ-تسويغ" },
      { de: "geschwommen", ar: "سبح (تصريف)", note: "sch = ش + o مزدوجة: غِشڤومِن" },
      { de: "der Strand", ar: "الشاطئ", note: "st في البداية = شت: شترانت" },
    ],
    tip: "«das Flugzeug» كلمة مركبة رائعة: fliegen (يطير) + Zeug (شيء) = الطائرة حرفياً «شيء الطيران»!",
    shadowing: [
      { de: "Ich bin nach Berlin geflogen.", ar: "طرت إلى برلين.", tip: "geflogen = غِفلوغِن (o)" },
      { de: "Wir haben geschwommen.", ar: "سبحنا.", tip: "geschwommen = غِشڤومِن (ش+مزدوجة)" },
      { de: "Hast du ein Souvenir gekauft?", ar: "هل اشتريت تذكاراً؟", tip: "gekauft = غِكاوفت (au=آو)" },
      { de: "Ich habe viel gesehen.", ar: "رأيت الكثير.", tip: "gesehen = غِزيهِن (s=ز)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب عن عطلتك الماضية (جملة كاملة بـ Perfekt):",
      prompt: "Was hast du im Urlaub gemacht? (مثال: Ich bin ... gefahren / Ich habe ... gemacht)",
      acceptedAnswers: ["Ich bin nach Sousse gefahren", "Ich habe geschwommen", "Ich habe Fotos gemacht", "Ich bin in Berlin gewesen"],
      sampleAnswer: "Ich bin nach Sousse gefahren und habe geschwommen.",
      explanation: "استخدم sein للحركة (gefahren) وhaben للفعل العادي (geschwommen).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ haben/sein + التصريف:",
      template: "Ich ___ nach Berlin ___ (fliegen). Wir ___ Pizza ___ (essen). Sie ___ ein Buch ___ (kaufen).",
      blanks: [
        { correct: "bin ... geflogen", options: ["bin ... geflogen", "habe ... geflogen", "habe ... gefliegen"] },
        { correct: "haben ... gegessen", options: ["haben ... gegessen", "sind ... gegessen", "haben ... geessen"] },
        { correct: "hat ... gekauft", options: ["hat ... gekauft", "ist ... gekauft", "hat ... gekaufen"] },
      ],
      explanation: "fliegen حركة → bin geflogen. essen/kaufen عادية → haben gegessen / hat gekauft.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich bin gestern nach Hause gegangen.",
      explanation: "ذهبت إلى المنزل أمس — gehen حركة → bin gegangen.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ ein Buch ___.",
      options: ["habe ... gekauft", "bin ... gekauft", "habe ... kaufen", "bin ... gekaufen"],
      correctIndex: 0,
      explanation: "kaufen عادي → habe gekauft.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة (الحركة):",
      questionDe: "Wir ___ nach Deutschland ___.",
      options: ["sind ... geflogen", "haben ... geflogen", "sind ... gefliegt", "haben ... gefliegen"],
      correctIndex: 0,
      explanation: "fliegen حركة → sein + geflogen.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بتصريفه في Perfekt:",
      pairs: [
        { left: "kaufen", right: "gekauft" },
        { left: "sehen", right: "gesehen" },
        { left: "essen", right: "gegessen" },
        { left: "fahren", right: "gefahren" },
      ],
      explanation: "منتظم (gekauft) وقوي (gesehen, gegessen, gefahren).",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه: التصريف في النهاية):",
      tokens: ["habe", "Ich", "gestern", "Pizza", "gegessen", "."],
      correctSentence: "Ich habe gestern Pizza gegessen.",
      explanation: "الإطار: Ich habe + التفاصيل + gegessen في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich habe nach Berlin gefliegen.",
      wrongWord: "habe ... gefliegen",
      correctWord: "bin ... geflogen",
      options: ["bin ... geflogen", "habe ... geflogen", "bin ... gefliegen", "habe ... gefliegen"],
      explanation: "fliegen حركة → sein، والتصريف القوي geflogen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ sein أو haben:",
      template: "Er ___ nach Tunis gefahren. Ich ___ ein Souvenir gekauft. Wir ___ geschwommen.",
      blanks: [
        { correct: "ist", options: ["ist", "hat"] },
        { correct: "habe", options: ["ist", "habe"] },
        { correct: "haben", options: ["sind", "haben"] },
      ],
      explanation: "fahren حركة → ist. kaufen → habe. schwimmen (في البحر) → haben/sind حسب السياق، هنا haben مع wir.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى الماضي (Perfekt):",
      prompt: "Ich kaufe ein Ticket. → (الماضي)",
      acceptedAnswers: ["Ich habe ein Ticket gekauft", "Ich habe ein Ticket gekauft."],
      sampleAnswer: "Ich habe ein Ticket gekauft.",
      explanation: "kaufen → habe gekauft.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich bin um sieben Uhr aufgestanden.",
      questionAr: "ما معنى الجملة؟",
      options: ["استيقظت في السابعة", "أستيقظ في السابعة", "سأستيقظ في السابعة", "كنت نائماً في السابعة"],
      correctIndex: 0,
      explanation: "aufstehen فعل منفصل → Partizip: aufgestanden. bin لأنها تغير حالة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich habe geschwimmen.",
      wrongWord: "geschwimmen",
      correctWord: "geschwommen",
      options: ["geschwommen", "geschwimmt", "geschwommen", "geschwimmen"],
      explanation: "schwimmen فعل قوي: geschwommen.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir haben im Hotel gut geschlafen.",
      explanation: "نمنام جيداً في الفندق — schlafen قوي: geschlafen.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich habe nach Berlin gefliegen.", right: "Ich bin nach Berlin geflogen.", whyAr: "الحركة → sein + التصريف القوي geflogen." },
      { wrong: "Ich habe gegessen ein Apfel.", right: "Ich habe einen Apfel gegessen.", whyAr: "Partizip II في نهاية الجملة دائماً." },
      { wrong: "gekaufen (منتظم كقوي)", right: "gekauft", whyAr: "kaufen منتظم: ge+jذر+t. القوي فقط بـ -en." },
    ],
    eselsbruecken: [
      "«حساب = haben، حركة = sein» — إذا كان الفعل يحرك مكاناً أو يغير حالة فاستخدم sein.",
      "«الإطار»: الفعل المساعد يفتح، والتصريف يغلق — Ich habe ... gegessen.",
    ],
    culturalNote: {
      title: "التخطيط للعطلات",
      content:
        "الألمان يحجزون إجازاتهم مبكراً جداً ويخططون لها بعناية: «Urlaubsplanung». وكثيرون يفضلون «Reisen mit dem Auto» أو القطار. وعند العودة يسألون دائماً: «Wie war dein Urlaub?» — فجهّز جملة Perfekt جاهزة دائماً!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ einen Film ___.",
      options: ["habe ... gesehen", "bin ... gesehen", "habe ... geseht", "bin ... geseht"],
      correctIndex: 0,
      explanation: "sehen عادي → habe gesehen.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة (الحركة):",
      questionDe: "Sie ___ nach Hause ___.",
      options: ["ist ... gegangen", "hat ... gegangen", "ist ... gegeht", "hat ... gegeht"],
      correctIndex: 0,
      explanation: "gehen حركة → ist gegangen.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ein", "Habe", "Souvenir", "du", "gekauft", "?"],
      correctSentence: "Hast du ein Souvenir gekauft?",
      explanation: "سؤال Perfekt: الفعل المساعد أولاً + التصريف في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Wir haben nach Tunis gefahren.",
      wrongWord: "haben ... gefahren",
      correctWord: "sind ... gefahren",
      options: ["sind ... gefahren", "haben ... gefahren", "sind ... gefahrt", "haben ... gefahrt"],
      explanation: "fahren حركة → sind gefahren.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف الفعل في Perfekt:",
      template: "Er ___ (sein) gestern in Berlin. Ich ___ (haben) Hunger.",
      blanks: [
        { correct: "ist gewesen", options: ["ist gewesen", "hat gehabt", "ist gehabt"] },
        { correct: "habe gehabt", options: ["ist gewesen", "habe gehabt", "habe gewesen"] },
      ],
      explanation: "sein → ist gewesen. haben → habe gehabt.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "der Urlaub", ar: "الإجازة", example: "Ich mache Urlaub.", exampleAr: "آخذ إجازة.", level: "A2" },
    { id: "fc2", de: "die Reise", ar: "الرحلة", example: "Die Reise war schön.", exampleAr: "كانت الرحلة جميلة.", level: "A2" },
    { id: "fc3", de: "fliegen", ar: "يطير", example: "Ich bin nach Berlin geflogen.", exampleAr: "طرت إلى برلين.", level: "A2" },
    { id: "fc4", de: "das Flugzeug", ar: "الطائرة", example: "Das Flugzeug ist groß.", exampleAr: "الطائرة كبيرة.", level: "A2" },
    { id: "fc5", de: "das Perfekt", ar: "الماضي التام", example: "Ich habe gegessen.", exampleAr: "أكلت.", level: "A2" },
    { id: "fc6", de: "das Partizip II", ar: "التصريف الثالث", example: "gesehen, gegessen, gekauft", exampleAr: "رأى، أكل، اشترى (في الماضي)", level: "A2" },
    { id: "fc7", de: "das Souvenir", ar: "التذكار", example: "Ich habe ein Souvenir gekauft.", exampleAr: "اشتريت تذكاراً.", level: "A2" },
    { id: "fc8", de: "schwimmen", ar: "يسبح", example: "Wir haben geschwommen.", exampleAr: "سبحنا.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a2-01-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صديق عن عطلته بالعربية",
      sourceDe: "Letzten Sommer bin ich nach Deutschland geflogen. Ich habe Berlin besucht und viele Museen gesehen. Am Ende habe ich ein Souvenir gekauft.",
      taskAr: "انقل الرسالة بالعربية إلى صديق لا يفهم الألمانية، محافظاً على زمن الماضي (ماذا حدث).",
      modelAnswerAr: "«الصيف الماضي سافرت إلى ألمانيا بالطائرة. زرت برلين وشاهدت متاحف كثيرة. وفي النهاية اشتريت تذكاراً.»",
      keyPointsAr: ["نقلت فعل السفر بالطائرة", "ذكرت زيارة برلين والمتاحف", "ذكرت شراء التذكار", "حافظت على زمن الماضي"],
    },
  ],
  interaction: [
    {
      id: "int-a2-01-1",
      scenarioAr: "صديق ألماني يسألك عن عطلتك الأخيرة.",
      scenarioDe: "Ein deutscher Freund fragt nach deinem letzten Urlaub.",
      strategyAr: "الاستراتيجية: سرد أحداث ماضية بأسلوب Perfekt والرد على أسئلة المتابعة.",
      rounds: [
        {
          speakerDe: "Was hast du im Urlaub gemacht?",
          speakerAr: "ماذا فعلت في العطلة؟",
          options: [
            { de: "Ich bin nach Deutschland geflogen und habe Berlin besucht.", ar: "طرت إلى ألمانيا وزرت برلين.", best: true, replyDe: "Toll! Was hast du dort gesehen?", replyAr: "رائع! ماذا شاهدت هناك؟" },
            { de: "Ich habe ein Buch gelesen.", ar: "قرأت كتاباً.", best: false, replyDe: "Nur ein Buch? Und sonst?", replyAr: "كتاباً فقط؟ وماذا أيضاً؟" },
          ],
        },
        {
          speakerDe: "Was hast du dort gesehen?",
          speakerAr: "ماذا شاهدت هناك؟",
          options: [
            { de: "Ich habe das Brandenburger Tor und viele Museen gesehen.", ar: "شاهدت بوابة براندنبورغ ومتاحف كثيرة.", best: true, replyDe: "Sehr schön! Hast du auch gegessen?", replyAr: "جميل جداً! هل أكلت أيضاً؟" },
            { de: "Ich habe geschlafen.", ar: "نمتُ.", best: false, replyDe: "Nur geschlafen? Schade!", replyAr: "نمتَ فقط؟ يا للأسف!" },
          ],
        },
        {
          speakerDe: "Hast du typisch deutsches Essen probiert?",
          speakerAr: "هل جرّبت أكلاً ألمانياً تقليدياً؟",
          options: [
            { de: "Ja, ich habe Currywurst und Brezeln gegessen.", ar: "نعم، أكلت كاري فورست وخبز برتزل.", best: true, replyDe: "Lecker! Ich liebe Currywurst auch!", replyAr: "لذيذ! أنا أحب كاري فورست أيضاً!" },
            { de: "Nein, ich habe nichts gegessen.", ar: "لا، لم آكل شيئاً.", best: false, replyDe: "Wirklich? Das ist schade für die deutsche Küche!", replyAr: "حقاً؟ هذا مؤسف للطبخ الألماني!" },
          ],
        },
      ],
    },
  ],
};
