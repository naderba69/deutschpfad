import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-02: الاقتصاد والمالية — المبني للمجهول المتقدم
 */
export const lessonB202: Lesson = {
  id: "b2-02",
  unitId: "b2-02",
  level: "B2",
  order: 1,
  titleDe: "Wirtschaft und Finanzen",
  titleAr: "الاقتصاد والمالية",
  duration: 45,
  summary:
    "تحليل الأخبار الاقتصادية، المبني للمجهول المتقدم: Zustandspassiv (sein + Partizip II)، Passiv مع الأفعال الشرطية، وبدائله (sich lassen, -bar, man).",

  lernziele: [
    { id: "z1", de: "Ich kann Wirtschaftsnachrichten verstehen.", ar: "أن أفهم الأخبار الاقتصادية وأحلل تطورات الأسواق." },
    { id: "z2", de: "Ich kann das Zustandspassiv bilden: ist geliefert.", ar: "أن أبني مجهول الحالة: مُسلَّم (sein + Partizip II)." },
    { id: "z3", de: "Ich kann Passiv mit Modalverben und Ersatzformen benutzen.", ar: "أن أستخدم المجهول مع الأفعال الشرطية وبدائله (sich lassen, -bar)." },
      { id: "z4", de: "Ich kann über wirtschaftliche Zusammenhänge diskutieren.", ar: "أن أناقش العلاقات الاقتصادية المعقدة." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في B1 تعلمت: Das Haus wird gebaut (Vorgangspassiv — يُبنى). ماذا لو أردت «البيت مبني» (حالة منتهية)؟ الجملة الألمانية: Das Haus ist gebaut (Zustandspassiv)! الفرق بين «يُبنى» (عملية) و«مبني» (نتيجة) — دقة B2.",
    motivatingQuestionDe: "Wie entwickelt sich der Markt?",
    contextAr:
      "الاقتصاد: أخبار الأسواق والتقارير المالية. نضيف المجهول المتقدم: حالة (ist geliefert)، مع شرطي (kann geliefert werden)، وبدائل (sich lassen, -bar).",
    contextDe: "Die Ware ist geliefert worden.",
    connectionToPreviousAr: "تتذكر Passiv الأساسي (wird/wurde gebaut) من B1. اليوم: التوسع الكامل — حالة + شرطي + بدائل — الأداة الإخبارية الكاملة.",
    activateVocabulary: [
      { de: "die Wirtschaft", ar: "الاقتصاد" },
      { de: "der Markt", ar: "السوق" },
      { de: "die Firma", ar: "الشركة" },
      { de: "der Umsatz", ar: "المبيعات" },
      { de: "die Konjunktur", ar: "الدورة الاقتصادية" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر المجهول:",
      questionDe: "Das Haus ___ gebaut. (يُبنى)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "Passiv مضارع (درس البيئة B1).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر المجهول:",
      questionDe: "Das Haus ___ 1900 gebaut. (بُني)",
      options: ["wurde", "wird", "ist", "war"],
      correctIndex: 0,
      explanation: "Passiv ماضٍ: wurde gebaut.",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1: أكمل:",
      template: "Man ___ die Umwelt schützen. (يمكن)",
      blanks: [
        { correct: "kann", options: ["kann", "könnte", "konnte"] },
      ],
      explanation: "man + kann (درس البيئة B1).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "المبني للمجهول المتقدم: الحالة والشرطي والبدائل",
      titleDe: "Zustandspassiv, Passiv mit Modalverben, Ersatzformen",
      explanationAr:
        "1) Zustandspassiv (حالة منتهية): sein + Partizip II: Das Fenster ist geöffnet (مفتوح — نتيجة). 2) Passiv مع شرطي: können/müssen + Partizip II + werden: Die Ware kann geliefert werden. 3) بدائل: sich lassen (Die Tür lässt sich öffnen = يمكن فتحها)، صفة -bar (Die Tür ist öffnbar = قابلة للفتح)، man (Man kann...).",
      whyAr:
        "لماذا كل هذه الطرق؟ لأن الألمانية تعشق الدقة: «يُفتح الآن» (wird geöffnet)، «مفتوح» (ist geöffnet)، «يمكن فتحه» (kann geöffnet werden / lässt sich öffnen / ist öffnbar). كل صيغة تخدم سياقاً مختلفاً — والمتقن يستخدمها كلها.",
      table: {
        title: "أنواع المجهول",
        columns: ["النوع", "التركيب", "مثال", "المعنى"],
        rows: [
          { label: "Vorgangspassiv", cells: ["werden + PII", "Die Tür wird geöffnet.", "تُفتح (عملية)"] },
          { label: "Zustandspassiv", cells: ["sein + PII", "Die Tür ist geöffnet.", "مفتوحة (حالة)"] },
          { label: "Passiv + Modalverb", cells: ["können + PII + werden", "Die Tür kann geöffnet werden.", "يمكن فتحها"] },
          { label: "sich lassen", cells: ["sich + lassen + Inf", "Die Tür lässt sich öffnen.", "تُفتح بسهولة"] },
          { label: "صفة -bar", cells: ["جذر + bar", "Die Tür ist öffnbar.", "قابلة للفتح"] },
        ],
      },
      examples: [
        { de: "Die Ware ist geliefert worden.", ar: "تم تسليم البضاعة (عملية منتهية)." },
        { de: "Die Ware ist geliefert.", ar: "البضاعة مسلَّمة (حالة)." },
        { de: "Der Preis kann verhandelt werden.", ar: "يمكن التفاوض على السعر." },
        { de: "Das Problem lässt sich lösen.", ar: "المشكلة قابلة للحل (تُحل بسهولة)." },
        { de: "Die Lösung ist durchführbar.", ar: "الحل قابل للتنفيذ." },
      ],
      comparisonWithArabic:
        "«تُفتح» مقابل «مفتوحة» مقابل «قابلة للفتح» — العربية تملك نفس التدرج! والألمانية: wird geöffnet / ist geöffnet / ist öffnbar. والتشابه مذهل: -bar ≈ «-able/-able» مثل «قابل للفتح».",
      eselsbruecke:
        "«ist + PII = حالة، wird + PII = عملية» — اسأل: هل النتيجة قائمة (ist) أم الحدث جارٍ (wird)؟ و«-bar = قابل للـ»: öffnbar = قابل للفتح.",
      commonMistakes: [
        { wrong: "Die Tür ist geöffnet worden. (عملية بدل حالة)", right: "Die Tür ist geöffnet. (حالة)", whyAr: "بدون worden = حالة. مع worden = عملية منتهية." },
        { wrong: "Die Tür wird geöffnet. (عملية بدل حالة)", right: "Die Tür ist geöffnet.", whyAr: "السياق يحدد: نتيجة → sein." },
        { wrong: "lässt sich öffnen أم kann geöffnet werden؟", right: "كلاهما صحيح: lässt sich = يسهل/يمكن. kann werden = يمكن (رسمي)", whyAr: "اختر حسب النبرة." },
      ],
      relatedRuleComparison: {
        title: "Vorgangs- أم Zustandspassiv؟",
        content: "Vorgang = العملية (wird geöffnet — يُفتح). Zustand = النتيجة (ist geöffnet — مفتوح). السؤال: حدث جارٍ أم حالة قائمة؟",
      },
    },
    {
      id: "t2",
      titleAr: "المجهول مع الأفعال الناقصة والبدائل الدقيقة — المعالجة الكاملة",
      titleDe: "Passiv mit Modalverben im Detail + Ersatzformen (lassen, -bar, sein + zu + Infinitiv)",
      explanationAr:
        "المجهول مع الأفعال الناقصة: können/müssen/sollen/dürfen + Partizip II + werden في نهاية الجملة: Die Ware kann geliefert werden (يمكن تسليم البضاعة)، Das muss entschieden werden (يجب أن يُحسم). مع الماضي: konnte geliefert werden. والبدائل الدقيقة: sein + zu + مصدر (Das ist zu lösen = يجب/يمكن حله)، lassen (Das lässt sich machen = يمكن عمله)، الصفة -bar (machbar = قابل للتنفيذ)، وman (Man kann...).",
      whyAr:
        "لماذا هذا العمق؟ لأن التقارير الاقتصادية والسياسية مليئة بهذه الصيغ: «يجب أن يُحسم»، «يمكن تنفيذه»، «لا يمكن إيقافه». من يتقن هذه البدائل يقرأ ويكتب بأسلوب رسمي حقيقي — علامة B2 الكاملة.",
      table: {
        title: "المجهول + الناقصة والبدائل (تفصيل)",
        columns: ["التركيب", "المعنى", "مثال اقتصادي"],
        rows: [
          { label: "kann + PII + werden", cells: ["يمكن أن يُفعل", "Der Preis kann verhandelt werden."] },
          { label: "muss + PII + werden", cells: ["يجب أن يُفعل", "Die Entscheidung muss getroffen werden."] },
          { label: "konnte + PII + werden", cells: ["أمكن أن يُفعل (ماضٍ)", "Die Lieferung konnte bestätigt werden."] },
          { label: "sein + zu + Infinitiv", cells: ["يجب/يمكن (رسمي)", "Das Problem ist zu lösen."] },
          { label: "lassen + sich", cells: ["يمكن بسهولة", "Die Kosten lassen sich senken."] },
          { label: "صفة -bar", cells: ["قابل للـ", "Die Investition ist durchführbar."] },
        ],
      },
      examples: [
        { de: "Die Entscheidung muss getroffen werden.", ar: "يجب أن يُتخذ القرار." },
        { de: "Die Lieferung konnte nicht bestätigt werden.", ar: "تعذّر تأكيد التسليم." },
        { de: "Das Problem ist sofort zu lösen.", ar: "المشكلة يجب حلها فوراً (رسمي)." },
        { de: "Die Kosten lassen sich leicht senken.", ar: "يمكن خفض التكاليف بسهولة." },
        { de: "Diese Lösung ist durchführbar.", ar: "هذا الحل قابل للتنفيذ." },
      ],
      comparisonWithArabic:
        "«يجب أن يُتخذ القرار» = Die Entscheidung muss getroffen werden. «تعذّر التأكيد» = konnte nicht bestätigt werden. «قابل للتنفيذ» = durchführbar — التطابق مع العربية في «قابل للـ» كامل.",
      eselsbruecke:
        "ثلاثية الاحتراف: «muss/kann + PII + werden» (رسمي)، «lässt sich» (طبيعي)، «-bar» (قصير). ابدأ بـ kann/könnte + PII + werden وهي آمنة دائماً.",
      commonMistakes: [
        { wrong: "Die Ware kann geliefert. (نقص werden)", right: "Die Ware kann geliefert werden.", whyAr: "المجهول مع الناقصة: PII + werden معاً في النهاية." },
        { wrong: "Die Tür muss geöffnet werden بدل ist geöffnet", right: "muss geöffnet werden = يجب فتحها. ist geöffnet = مفتوحة (حالة)", whyAr: "السياق: إلزام أم نتيجة؟" },
        { wrong: "Das Problem ist zu lösen. (تظنه خطأً)", right: "صحيحة! sein + zu + مصدر = يجب/يمكن", whyAr: "صيغة رسمية صحيحة — لا تظنها خطأ." },
      ],
      relatedRuleComparison: {
        title: "lassen للسببية أم لبديل المجهول؟",
        content: "lassen + مفعول + مصدر = سبب: Ich lasse das Auto reparieren (أجعل السيارة تُصلح). sich lassen + مصدر = بديل مجهول: Das lässt sich reparieren (يمكن إصلاحه). انتبه لوجود sich.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "نشرة اقتصادية",
        lines: [
          { speaker: "Sprecherin", de: "Der Umsatz ist im letzten Quartal gestiegen.", ar: "ارتفعت المبيعات في الربع الأخير." },
          { speaker: "Sprecherin", de: "Die neuen Produkte können jetzt geliefert werden.", ar: "يمكن الآن تسليم المنتجات الجديدة." },
          { speaker: "Sprecherin", de: "Das Problem der Inflation lässt sich langsam lösen.", ar: "يمكن حل مشكلة التضخم ببطء." },
          { speaker: "Sprecherin", de: "Die Aktien sind deutlich gestiegen.", ar: "ارتفعت الأسهم بوضوح." },
        ],
      },
      {
        id: "l2",
        title: "في الاجتماع",
        lines: [
          { speaker: "Chefin", de: "Der Vertrag ist unterschrieben worden.", ar: "تم توقيع العقد." },
          { speaker: "Sami", de: "Und die Lieferung?", ar: "والتسليم؟" },
          { speaker: "Chefin", de: "Die Lieferung kann nächste Woche erfolgen. Die Waren sind schon vorbereitet.", ar: "يمكن أن يتم التسليم الأسبوع القادم. البضائع جاهزة." },
          { speaker: "Sami", de: "Perfekt. Das Projekt ist gut gelaufen.", ar: "ممتاز. سار المشروع جيداً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was ist im letzten Quartal gestiegen?",
        questionAr: "ماذا ارتفع في الربع الأخير؟",
        options: ["der Umsatz", "die Preise", "die Steuern", "die Löhne"],
        correctIndex: 0,
        explanation: "قالت المذيعة: Der Umsatz ist im letzten Quartal gestiegen.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was lässt sich langsam lösen?",
        questionAr: "ما الذي يمكن حله ببطء؟",
        options: ["das Problem der Inflation", "das Problem des Verkehrs", "das Problem der Schule", "das Problem des Wetters"],
        correctIndex: 0,
        explanation: "قالت: Das Problem der Inflation lässt sich langsam lösen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist unterschrieben worden?",
        questionAr: "ما الذي تم توقيعه؟",
        options: ["der Vertrag", "der Brief", "die Rechnung", "der Bericht"],
        correctIndex: 0,
        explanation: "قالت المديرة: Der Vertrag ist unterschrieben worden.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الاقتصاد: ch، ö، وtion",
    items: [
      { de: "die Wirtschaft", ar: "الاقتصاد", note: "sch = ش: ڤيرت-شافَت" },
      { de: "der Umsatz", ar: "المبيعات", note: "tz = تس: أوم-زاتس" },
      { de: "die Inflation", ar: "التضخم", note: "tion = تسيون: إنفلاتسيون" },
      { de: "der Vertrag", ar: "العقد", note: "v = ف + tr: فِرتراغ" },
      { de: "die Lieferung", ar: "التسليم", note: "ie = إي: ليفِرونغ" },
      { de: "die Aktien", ar: "الأسهم", note: "ti = تسي: آكتسيِن" },
    ],
    tip: "Aktien تُنطق «آكتسيِن» — ti هنا تُنطق تسي (مثل tion). لاحظ النمط في الكلمات الاقتصادية.",
    shadowing: [
      { de: "Die Tür ist geöffnet.", ar: "الباب مفتوح (حالة).", tip: "ist geöffnet — Zustandspassiv" },
      { de: "Die Tür wird geöffnet.", ar: "الباب يُفتح (عملية).", tip: "wird geöffnet — Vorgangspassiv" },
      { de: "Die Ware kann geliefert werden.", ar: "يمكن تسليم البضاعة.", tip: "kann ... geliefert werden" },
      { de: "Das Problem lässt sich lösen.", ar: "المشكلة قابلة للحل.", tip: "lässt sich lösen" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب حالة منتهية:",
      prompt: "«Die Tür wird geöffnet» → (حالة: مفتوحة)",
      acceptedAnswers: ["Die Tür ist geöffnet", "Die Tür ist geöffnet."],
      sampleAnswer: "Die Tür ist geöffnet.",
      explanation: "Zustandspassiv: sein + Partizip II.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ ist/wird/kann:",
      template: "Die Tür ___ geöffnet (حالة). Die Tür ___ geöffnet (عملية). Die Tür ___ geöffnet werden (إمكانية).",
      blanks: [
        { correct: "ist", options: ["ist", "wird", "kann"] },
        { correct: "wird", options: ["ist", "wird", "kann"] },
        { correct: "kann", options: ["ist", "wird", "kann"] },
      ],
      explanation: "حالة = ist. عملية = wird. إمكانية = kann werden.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل الجملة النشطة إلى مجهول مع فعل ناقص:",
      instructionDe: "Schreibe im Passiv mit Modalverb:",
      prompt: "Man kann den Preis verhandeln. →",
      acceptedAnswers: ["Der Preis kann verhandelt werden.", "Der Preis kann verhandelt werden."],
      sampleAnswer: "Der Preis kann verhandelt werden.",
      explanation: "النشط → مجهول + können: kann + Partizip II + werden في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالمجهول مع الأفعال الناقصة:",
      instructionDe: "Ergänze: muss/kann + PII + werden",
      template: "Die Entscheidung ___ getroffen werden. (يجب) · Der Preis ___ verhandelt werden. (يمكن)",
      blanks: [
        { correct: "muss", options: ["muss", "kann", "könnte", "soll"] },
        { correct: "kann", options: ["kann", "muss", "müsste", "darf"] },
      ],
      hint: "muss = يجب، kann = يمكن — ثم PII + werden في النهاية.",
      explanation: "muss getroffen werden (يجب أن يُتخذ) / kann verhandelt werden (يمكن التفاوض).",
      errorType: "grammar",
      points: 2,
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الحالة المنتهية:",
      questionDe: "Die Tür ___ geöffnet. (مفتوحة)",
      options: ["ist", "wird", "kann", "wurde"],
      correctIndex: 0,
      explanation: "حالة: ist geöffnet.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الإمكانية:",
      questionDe: "Die Ware ___ geliefert werden.",
      options: ["kann", "ist", "wird", "wurde"],
      correctIndex: 0,
      explanation: "إمكانية: kann ... werden.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة الاقتصاد بمعناها:",
      pairs: [
        { left: "die Wirtschaft", right: "الاقتصاد" },
        { left: "der Umsatz", right: "المبيعات" },
        { left: "die Inflation", right: "التضخم" },
        { left: "die Aktien", right: "الأسهم" },
      ],
      explanation: "أربع كلمات اقتصادية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ist", "Die", "Tür", "geöffnet", "."],
      correctSentence: "Die Tür ist geöffnet.",
      explanation: "حالة: ist geöffnet.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Die Tür ist geöffnet worden. (أريد حالة)",
      wrongWord: "ist geöffnet worden",
      correctWord: "ist geöffnet",
      options: ["ist geöffnet", "ist geöffnet worden", "wird geöffnet", "wurde geöffnet worden"],
      explanation: "الحالة: ist geöffnet (بدون worden).",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ -bar أو sich lassen:",
      template: "Die Lösung ist durchführ___ (قابلة للتنفيذ). Das Problem lässt ___ lösen.",
      blanks: [
        { correct: "bar", options: ["bar", "lich", "sam"] },
        { correct: "sich", options: ["sich", "mich", "dich"] },
      ],
      explanation: "-bar = قابل للـ. sich lassen = يمكن.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى sich lassen:",
      prompt: "Man kann das Problem lösen. → (المشكلة تُحل بسهولة)",
      acceptedAnswers: ["Das Problem lässt sich lösen", "Das Problem lässt sich lösen."],
      sampleAnswer: "Das Problem lässt sich lösen.",
      explanation: "sich lassen + مصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die Konjunktur",
      questionAr: "ما معنى الكلمة؟",
      options: ["الدورة الاقتصادية", "الأسهم", "المبيعات", "الاستثمار"],
      correctIndex: 0,
      explanation: "die Konjunktur = الدورة الاقتصادية.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Die Tür ist öffnenbar.",
      wrongWord: "öffnenbar",
      correctWord: "öffnenbar (صحيحة!)",
      options: ["öffnenbar (صحيحة!)", "öffnbar", "geöffnetbar", "öffnenbar"],
      explanation: "öffnenbar = قابلة للفتح — صحيحة (من öffnen + bar).",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Der Vertrag ist unterschrieben worden.",
      explanation: "تم توقيع العقد — عملية منتهية.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "ist geöffnet worden (لحالة — خاطئ)", right: "ist geöffnet (حالة) / ist geöffnet worden (عملية منتهية)", whyAr: "الفرق: worden = عملية." },
      { wrong: "kann geliefert werden أم kann geliefert؟", right: "kann + PII + werden (للمجهول الشرطي)", whyAr: "Passiv مع شرطي يحتاج werden." },
      { wrong: "-bar أم -lich؟", right: "-bar = قابل للفعل (trinkbar). -lich = صفة عامة (freundlich)", whyAr: "نهايتان مختلفتان لوظيفتين." },
    ],
    eselsbruecken: [
      "«ist = حالة، wird = عملية، kann werden = إمكانية».",
      "«-bar = قابل للـ»: öffnbar، trinkbar، machbar.",
    ],
    culturalNote: {
      title: "الاقتصاد الألماني",
      content:
        "ألمانيا رابع أكبر اقتصاد عالمي! «die soziale Marktwirtschaft» (اقتصاد السوق الاجتماعي) — توازن بين السوق والضمان الاجتماعي. والبنك المركزي الأوروبي في فرانكفورت. و«der Mittelstand» (الشركات المتوسطة) عمود الاقتصاد — 99% من الشركات!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الحالة:",
      questionDe: "Die Tür ___ geöffnet. (مفتوحة)",
      options: ["ist", "wird", "kann", "wurde"],
      correctIndex: 0,
      explanation: "حالة: ist.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإمكانية:",
      questionDe: "Das Problem lässt ___ lösen.",
      options: ["sich", "mich", "dich", "uns"],
      correctIndex: 0,
      explanation: "sich lassen.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["geliefert", "kann", "werden", "Die", "Ware", "."],
      correctSentence: "Die Ware kann geliefert werden.",
      explanation: "إمكانية: kann + PII + werden.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Das Fenster ist geöffnet worden. (أريد حالة)",
      wrongWord: "ist geöffnet worden",
      correctWord: "ist geöffnet",
      options: ["ist geöffnet", "ist geöffnet worden", "wird geöffnet", "wurde geöffnet"],
      explanation: "الحالة بدون worden.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Das Wasser ist trink___ (قابل للشرب). Die Tür lässt ___ öffnen.",
      blanks: [
        { correct: "bar", options: ["bar", "lich", "sam"] },
        { correct: "sich", options: ["sich", "mich", "dich"] },
      ],
      explanation: "trinkbar + lässt sich.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Wirtschaft", ar: "الاقتصاد", example: "Die Wirtschaft wächst.", exampleAr: "ينمو الاقتصاد.", level: "B2" },
    { id: "fc2", de: "der Umsatz", ar: "المبيعات", example: "Der Umsatz steigt.", exampleAr: "ترتفع المبيعات.", level: "B2" },
    { id: "fc3", de: "die Inflation", ar: "التضخم", example: "Die Inflation ist hoch.", exampleAr: "التضخم مرتفع.", level: "B2" },
    { id: "fc4", de: "der Vertrag", ar: "العقد", example: "Der Vertrag ist unterschrieben.", exampleAr: "العقد موقع.", level: "B2" },
    { id: "fc5", de: "das Zustandspassiv", ar: "مجهول الحالة", example: "ist geöffnet", exampleAr: "مفتوح", level: "B2" },
    { id: "fc6", de: "sich lassen", ar: "يمكن/يُحل بسهولة", example: "Das Problem lässt sich lösen.", exampleAr: "المشكلة قابلة للحل.", level: "B2" },
    { id: "fc7", de: "-bar", ar: "قابل للـ", example: "trinkbar, öffnbar", exampleAr: "قابل للشرب/الفتح", level: "B2" },
    { id: "fc8", de: "die Lieferung", ar: "التسليم", example: "Die Lieferung kommt morgen.", exampleAr: "يأتي التسليم غداً.", level: "B2" },
    { id: "fc9", de: "Passiv + Modalverb", ar: "المجهول مع الناقصة", example: "Die Ware kann geliefert werden.", exampleAr: "يمكن تسليم البضاعة.", level: "B2" },
    { id: "fc10", de: "sein + zu + Infinitiv", ar: "يجب/يمكن (رسمي)", example: "Das Problem ist zu lösen.", exampleAr: "المشكلة يجب حلها.", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b2-02-1", type: "summarize-de-to-ar",
      titleAr: "لخّص تقريراً اقتصادياً بالعربية مع نقل النتائج",
      sourceDe: "Die Inflation ist im letzten Quartal auf 2,5 Prozent gesunken. Die Zentralbank sieht darin ein Zeichen der Erholung, warnt aber vor steigenden Energiekosten.",
      taskAr: "لخّص النص: الانخفاض، تفسير البنك المركزي، والتحذير.",
      modelAnswerAr: "«انخفض التضخم في الربع الأخير إلى 2.5%. يراه البنك المركزي علامة تعافٍ، لكنه يحذر من ارتفاع تكاليف الطاقة.»",
      keyPointsAr: ["نقلت نسبة التضخم (2.5%)", "ذكرت تفسير البنك (تعافٍ)", "نقلت التحذير من الطاقة"],
    },
  ],
      interaction: [
    {
      id: "int-b2-02-1",
      scenarioAr: "نقاش أكاديمي عن العولمة وتأثيرها الاقتصادي.",
      scenarioDe: "Diskussion über die Globalisierung.",
      strategyAr: "الاستراتيجية: تحليل معقد متعدد الأبعاد بأدوات ربط متقدمة.",
      rounds: [
        {
          speakerDe: "Hat die Globalisierung mehr Vorteile oder Nachteile?",
          speakerAr: "هل للعولمة مزايا أكثر أم عيوب؟",
          options: [
            { de: "Während die Globalisierung den Handel und den Austausch fördert, vergrößert sie gleichzeitig die Ungleichheit zwischen Ländern.", ar: "بينما تعزز العولمة التجارة والتبادل، تزيد في الوقت نفسه التفاوت بين الدول.", best: true, replyDe: "Eine differenzierte Antwort. Wie könnte man die Nachteile reduzieren?", replyAr: "إجابة متوازنة. كيف يمكن تقليل العيوب؟" },
            { de: "Die Globalisierung ist nur schlecht und muss gestoppt werden.", ar: "العولمة سيئة فقط ويجب إيقافها.", best: false, replyDe: "Das ist zu einseitig. Man muss auch die Vorteile sehen.", replyAr: "هذا منحاز جداً. يجب رؤية المزايا أيضاً." },
          ],
        },
        {
          speakerDe: "Wie könnte man die Nachteile der Globalisierung reduzieren?",
          speakerAr: "كيف يمكن تقليل عيوب العولمة؟",
          options: [
            { de: "Meiner Ansicht nach brauchen wir faire Handelsregeln und Investitionen in Bildung. Je mehr Chancengleichheit, desto gerechter die Globalisierung.", ar: "في رأيي نحتاج قواعد تجارة عادلة واستثماراً في التعليم. كلما زادت تكافؤ الفرص، زادت عدالة العولمة.", best: true, replyDe: "Ein konstruktiver Vorschlag. Allerdings ist die Umsetzung komplex.", replyAr: "اقتراح بناء. لكن التنفيذ معقد." },
            { de: "Man sollte einfach alle Grenzen schließen.", ar: "يجب ببساطة إغلاق كل الحدود.", best: false, replyDe: "Das würde die Wirtschaft weltweit schädigen.", replyAr: "هذا سيضر الاقتصاد عالمياً." },
          ],
        },
      ],
    },
  ],

};