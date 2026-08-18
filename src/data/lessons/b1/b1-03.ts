import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-03: البيئة والمناخ — Passiv (المبني للمجهول) + جدول الأفعال الشاذة
 */
export const lessonB103: Lesson = {
  id: "b1-03",
  unitId: "b1-03",
  level: "B1",
  order: 1,
  titleDe: "Umwelt und Klima",
  titleAr: "البيئة والمناخ",
  duration: 40,
  summary:
    "مشاكل البيئة والحلول، المبني للمجهول (Passiv): werden + Partizip II في المضارع والماضي، وبدائله (man)، والتركيب المصدري (Infinitiv mit zu): Es ist wichtig, die Umwelt zu schützen.",

  lernziele: [
    { id: "z1", de: "Ich kann über Umweltprobleme sprechen.", ar: "أن أتحدث عن مشاكل البيئة والمناخ." },
    { id: "z2", de: "Ich kann das Passiv bilden: wird/wurde + Partizip II.", ar: "أن أبني المبني للمجهول: يُبنى / بُني." },
    { id: "z3", de: "Ich kann man als Passiv-Ersatz benutzen.", ar: "أن أستخدم man كبديل للمجهول." },
    { id: "z4", de: "Ich kann den Infinitiv mit zu benutzen: Es ist wichtig, die Umwelt zu schützen.", ar: "أن أستخدم التركيب المصدري zu + Infinitiv في جمل النصح البيئي." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في العربية نقول «يُبنى البيت» (مجهول) — نغير حركة الفعل. الألمانية تبني المجهول بفعلين: werden + تصريف ثالث: Das Haus wird gebaut (البيت يُبنى). ولاحظ: werden تعمل هنا «علامة المجهول» وليست «يصبح»!",
    motivatingQuestionDe: "Was kann man für die Umwelt tun?",
    contextAr:
      "البيئة موضوع نقاش دائم في ألمانيا: نتعلم مفرداتها، ثم نضيف المبني للمجهول — أداة النقاش الرسمي والنصوص الإخبارية. وبمناسبة B1: الجدول التفاعلي للأفعال الشاذة مدمج أدناه!",
    contextDe: "Das Klima wird immer wärmer.",
    connectionToPreviousAr: "تتذكر werden (يصبح) من A1. اليوم: werden ثانية بمعنى آخر — علامة المجهول. نفس الفعل، وظيفة جديدة.",
    activateVocabulary: [
      { de: "die Umwelt", ar: "البيئة" },
      { de: "das Klima", ar: "المناخ" },
      { de: "der Müll", ar: "النفايات" },
      { de: "recyceln", ar: "يعيد التدوير" },
      { de: "die Energie", ar: "الطاقة" },
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
      instructionAr: "مراجعة من B1: اختر Genitiv:",
      questionDe: "Wegen ___ Regens bleiben wir.",
      options: ["des", "der", "dem", "den"],
      correctIndex: 0,
      explanation: "wegen + Genitiv: des Regens (درس التعليم).",
      errorType: "case",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2: أكمل:",
      template: "Ich habe ___ gegessen. (قد)",
      blanks: [
        { correct: "gegessen", options: ["gegessen", "geessen", "gegessen"] },
      ],
      explanation: "essen → gegessen (Perfekt).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "المبني للمجهول (Passiv): werden + Partizip II",
      titleDe: "Das Passiv: wird gebaut, wurde gebaut",
      explanationAr:
        "المبني للمجهول = التركيز على الحدث لا الفاعل: Das Haus wird gebaut (يُبنى). التركيب: werden (مضارع) أو wurden (ماضٍ) + Partizip II في النهاية. الفاعل الأصلي يظهر بـ von + Dativ (اختياري): Das Haus wird von den Arbeitern gebaut.",
      whyAr:
        "لماذا نستخدمه؟ في الأخبار والتقارير الرسمية لا يهم «من» فعل — يهم «ماذا حدث»: Das Klima wird wärmer، Die Umwelt wird zerstört. المجهول يسمح بجملة كاملة بدون فاعل — مثل العربية «يُبنى».",
      table: {
        title: "Passiv في المضارع والماضي",
        columns: ["الزمن", "التركيب", "مثال"],
        rows: [
          { label: "مضارع", cells: ["wird + Partizip II", "Das Haus wird gebaut."] },
          { label: "ماضي", cells: ["wurde + Partizip II", "Das Haus wurde gebaut."] },
          { label: "مضارع تام", cells: ["ist + Partizip II + worden", "Das Haus ist gebaut worden."] },
          { label: "المجهول مع man", cells: ["man + فعل (بديل)", "Man baut das Haus."] },
        ],
      },
      examples: [
        { de: "Die Wälder werden zerstört.", ar: "تُدمَّر الغابات." },
        { de: "Das Haus wurde 1900 gebaut.", ar: "بُني البيت عام 1900." },
        { de: "Der Müll wird recycelt.", ar: "تُعاد تدوير النفايات." },
        { de: "Viele Bäume werden gepflanzt.", ar: "تُزرع أشجار كثيرة." },
        { de: "Man kann die Umwelt schützen.", ar: "يمكن حماية البيئة." },
      ],
      comparisonWithArabic:
        "«يُبنى» = wird gebaut. «بُني» = wurde gebaut. العربية تغير شكل الفعل — الألمانية تضيف werden. والتشابه: كلاهما بلا فاعل. وman = «المرء/الناس»: Man sagt = يقال.",
      eselsbruecke:
        "«werden = علامة المجهول»: إذا رأيت werden + Partizip II → مجهول. و«wurde = بُني (ماضٍ)». الفرق عن «يصبح»: مع صفة (wird kalt) وليس مع تصريف ثالث.",
      commonMistakes: [
        { wrong: "Das Haus wird gebaut von den Arbeitern. (von في غير محلها)", right: "Das Haus wird von den Arbeitern gebaut.", whyAr: "von + Dativ يأتي قبل Partizip II." },
        { wrong: "Das Haus wird bauen (مجهول خاطئ)", right: "Das Haus wird gebaut.", whyAr: "المجهول: werden + Partizip II وليس Infinitiv." },
        { wrong: "wird أم wurde؟", right: "wird = مضارع (يُبنى). wurde = ماضٍ (بُني)", whyAr: "الفرق زمني: wurde هو ماضي werden." },
      ],
      relatedRuleComparison: {
        title: "Passiv أم Aktiv؟",
        content: "Aktiv: Die Arbeiter bauen das Haus (التركيز على الفاعل). Passiv: Das Haus wird gebaut (التركيز على الحدث). في الأخبار: Passiv غالباً.",
      },
    },
    {
      id: "t2",
      titleAr: "التركيب المصدري (Infinitiv mit zu): حماية البيئة تبدأ بفعل",
      titleDe: "Der Infinitiv mit zu: Es ist wichtig, die Umwelt zu schützen",
      explanationAr:
        "كثير من الأفعال والصفات تحتاج بعدها «zu + مصدر» في نهاية الجملة: Es ist wichtig, die Umwelt zu schützen (من المهم حماية البيئة). التركيب: جملة رئيسية، فاصلة، ثم zu + الفعل في نهاية الجملة الثانوية. الأفعال الأكثر استخداماً مع zu: versuchen (يحاول)، hoffen (يأمل)، anfangen (يبدأ)، vergessen (ينسى)، planen (يخطط). والصفات الشائعة: wichtig (مهم)، möglich (ممكن)، schwer (صعب)، leicht (سهل).",
      whyAr:
        "لماذا zu؟ لأن كل فعل يملك «سلوكاً»: بعض الأفعال تجذب مصدراً بعلامة zu، وبعضها يرفضها — الأفعال الناقصة (können، müssen، wollen...) تأخذ المصدر مباشرة بدون zu: Ich kann schwimmen. الفرق إلزامي في الألمانية: Es ist wichtig, Deutsch zu lernen — لا يجوز حذف zu إطلاقاً.",
      table: {
        title: "التراكيب التي تجذب zu + مصدر (في سياق البيئة)",
        columns: ["التركيب", "المثال", "المعنى"],
        rows: [
          { label: "versuchen (يحاول)", cells: ["Er versucht, den Müll zu trennen.", "يحاول فصل النفايات."] },
          { label: "hoffen (يأمل)", cells: ["Wir hoffen, die Umwelt zu retten.", "نأمل إنقاذ البيئة."] },
          { label: "anfangen (يبدأ)", cells: ["Ich fange an, weniger Plastik zu kaufen.", "أبدأ بشراء بلاستيك أقل."] },
          { label: "wichtig / möglich / schwer", cells: ["Es ist wichtig, Bäume zu pflanzen.", "من المهم زرع الأشجار."] },
          { label: "um … zu (لكي)", cells: ["Wir sparen Energie, um das Klima zu schützen.", "نوفر الطاقة لكي نحمي المناخ."] },
        ],
      },
      examples: [
        { de: "Es ist wichtig, Wasser zu sparen.", ar: "من المهم توفير الماء." },
        { de: "Ich versuche, jeden Tag das Fahrrad zu nehmen.", ar: "أحاول ركوب الدراجة كل يوم." },
        { de: "Sie hat vergessen, das Licht auszuschalten.", ar: "نسيت إطفاء الضوء." },
        { de: "Wir planen, ein Solardach zu bauen.", ar: "نخطط لبناء سقف شمسي." },
      ],
      comparisonWithArabic:
        "العربية تبني المصدر مباشرة: «أحاول حماية البيئة». الألمانية تطلب فاصلة وzu: Ich versuche, die Umwelt zu schützen. والتشابه: العربية تضع «أن» قبل الفعل في بعض التراكيب — الألمانية تضع zu.",
      eselsbruecke:
        "«zu = راية اللحاق»: المصدر يركض إلى نهاية الجملة ومعه رايته zu. وإذا كان الفعل منفصلاً تلتصق الراية في الوسط: aufstehen → aufzustehen، ausschalten → auszuschalten. ولاحظ: الأفعال الناقصة ترفض الراية تماماً: Ich kann schwimmen (بدون zu).",
      commonMistakes: [
        { wrong: "Ich hoffe, dich sehen.", right: "Ich hoffe, dich zu sehen.", whyAr: "بعد hoffen يجب zu قبل المصدر." },
        { wrong: "Es ist wichtig, die Umwelt schützen.", right: "Es ist wichtig, die Umwelt zu schützen.", whyAr: "مع الصفات (wichtig) يلزم zu." },
        { wrong: "Ich kann zu schwimmen.", right: "Ich kann schwimmen.", whyAr: "الأفعال الناقصة (können, müssen...) لا تأخذ zu أبداً." },
      ],
      relatedRuleComparison: {
        title: "zu + مصدر أم um … zu؟",
        content: "zu + مصدر = غاية عادية: Ich hoffe, dich zu sehen (أرجو رؤيتك). um … zu = «لكي» بهدف صريح: Ich lerne Deutsch, um in Deutschland zu arbeiten (أتعلم الألمانية لكي أعمل في ألمانيا).",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "نقاش بيئي",
        lines: [
          { speaker: "Moderator", de: "Das Klima wird immer wärmer. Was wird gemacht?", ar: "المناخ يصبح أكثر دفئاً. ماذا يُفعل؟" },
          { speaker: "Sami", de: "Es werden mehr Bäume gepflanzt. Das ist sehr wichtig.", ar: "تُزرع أشجار أكثر. هذا مهم جداً." },
          { speaker: "Moderator", de: "Und der Müll?", ar: "والنفايات؟" },
          { speaker: "Anna", de: "Der Müll wird getrennt und recycelt.", ar: "تُفصل النفايات وتُعاد تدويرها." },
          { speaker: "Moderator", de: "Wird genug für die Umwelt getan?", ar: "هل يُفعل ما يكفي للبيئة؟" },
          { speaker: "Sami", de: "Leider nein. Es wird noch zu wenig getan.", ar: "للأسف لا. يُفعل القليل جداً." },
        ],
      },
      {
        id: "l2",
        title: "ماذا يمكن أن نفعل؟",
        lines: [
          { speaker: "Lehrer", de: "Was kann man für die Umwelt tun?", ar: "ماذا يمكن أن يفعل المرء للبيئة؟" },
          { speaker: "Mona", de: "Man kann mit dem Fahrrad fahren statt mit dem Auto.", ar: "يمكن ركوب الدراجة بدل السيارة." },
          { speaker: "Lehrer", de: "Sehr gut. Und in der Schule?", ar: "جيد جداً. وفي المدرسة؟" },
          { speaker: "Karim", de: "Papier wird auf beiden Seiten benutzt.", ar: "تُستخدم الورقة من الجهتين." },
          { speaker: "Lehrer", de: "Perfekt! Jede kleine Aktion wird gebraucht.", ar: "ممتاز! كل عمل صغير مطلوب." },
        ],
      },
      {
        id: "l3",
        title: "نصائح بيئية (zu + Infinitiv)",
        lines: [
          { speaker: "Sami", de: "Ich versuche, weniger Plastik zu kaufen.", ar: "أحاول شراء بلاستيك أقل." },
          { speaker: "Anna", de: "Gute Idee! Es ist wichtig, die Umwelt zu schützen.", ar: "فكرة جيدة! من المهم حماية البيئة." },
          { speaker: "Sami", de: "Und ich habe angefangen, mit dem Fahrrad zu fahren.", ar: "وبدأت أركب الدراجة." },
          { speaker: "Anna", de: "Wir planen, einen kleinen Garten zu pflanzen.", ar: "نخطط لزراعة حديقة صغيرة." },
          { speaker: "Sami", de: "Das ist schwer, aber wir schaffen das!", ar: "هذا صعب، لكننا سننجح!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was wird gepflanzt?",
        questionAr: "ماذا يُزرع؟",
        options: ["mehr Bäume", "mehr Blumen", "mehr Gemüse", "mehr Obst"],
        correctIndex: 0,
        explanation: "قال سامي: Es werden mehr Bäume gepflanzt.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was passiert mit dem Müll?",
        questionAr: "ماذا يحدث للنفايات؟",
        options: ["getrennt und recycelt", "verbrannt", "ins Meer geworfen", "vergraben"],
        correctIndex: 0,
        explanation: "قالت آنا: Der Müll wird getrennt und recycelt.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kann man statt dem Auto fahren?",
        questionAr: "ماذا يمكن ركوبه بدل السيارة؟",
        options: ["das Fahrrad", "das Motorrad", "die U-Bahn", "der Bus"],
        correctIndex: 0,
        explanation: "قالت منى: Man kann mit dem Fahrrad fahren.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was versucht Sami zu machen?",
        questionAr: "ماذا يحاول سامي أن يفعل؟",
        options: ["weniger Plastik zu kaufen", "mehr Auto zu fahren", "weniger zu schlafen", "mehr Zucker zu essen"],
        correctIndex: 0,
        explanation: "قال سامي: Ich versuche, weniger Plastik zu kaufen — يحاول شراء بلاستيك أقل.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات البيئة: ö، ü، وch",
    items: [
      { de: "die Umwelt", ar: "البيئة", note: "um + welt: أوم-ڤِلت" },
      { de: "der Müll", ar: "النفايات", note: "ü قصيرة: مول" },
      { de: "die Sonnenenergie", ar: "الطاقة الشمسية", note: "كلمة مركبة طويلة: زونن-إنِرجي" },
      { de: "recyceln", ar: "يعيد التدوير", note: "cy = سي: ريسايكلن" },
      { de: "die Pflanze", ar: "النبتة", note: "pf: پفْلانتسِه" },
      { de: "der Klimawandel", ar: "تغير المناخ", note: "w = ڤ: كليما-ڤاندِل" },
    ],
    tip: "Klimawandel = كليما-ڤاندِل — w ألمانية ڤ دائماً. تذكرها من الأبجدية!",
    shadowing: [
      { de: "Das Haus wird gebaut.", ar: "البيت يُبنى.", tip: "wird gebaut — المجهول المضارع" },
      { de: "Das Haus wurde 1900 gebaut.", ar: "بُني البيت عام 1900.", tip: "wurde gebaut — المجهول الماضي" },
      { de: "Der Müll wird recycelt.", ar: "تُعاد تدوير النفايات.", tip: "recycelt = ريسايكلت" },
      { de: "Man kann die Umwelt schützen.", ar: "يمكن حماية البيئة.", tip: "schützen = شوتسن (ü)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة مجهول:",
      prompt: "اكتب: «يُبنى البيت» بالألمانية (Passiv مضارع)",
      acceptedAnswers: ["Das Haus wird gebaut", "Das Haus wird gebaut."],
      sampleAnswer: "Das Haus wird gebaut.",
      explanation: "Passiv: wird + Partizip II (gebaut).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ wird/wurde:",
      template: "Der Müll ___ getrennt. (يُفصل — مضارع) Das Haus ___ 1990 gebaut. (بُني — ماضٍ)",
      blanks: [
        { correct: "wird", options: ["wird", "wurde"] },
        { correct: "wurde", options: ["wird", "wurde"] },
      ],
      explanation: "مضارع → wird. ماضٍ → wurde.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Wälder werden zerstört.",
      explanation: "تُدمَّر الغابات — Passiv: werden zerstört.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر المجهول الصحيح:",
      questionDe: "Das Haus ___ gebaut. (يُبنى)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "المضارع المجهول: wird gebaut.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر المجهول الصحيح:",
      questionDe: "Das Haus ___ 1900 gebaut. (بُني)",
      options: ["wurde", "wird", "ist", "war"],
      correctIndex: 0,
      explanation: "الماضي المجهول: wurde gebaut.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة البيئة بمعناها:",
      pairs: [
        { left: "die Umwelt", right: "البيئة" },
        { left: "der Müll", right: "النفايات" },
        { left: "recyceln", right: "يعيد التدوير" },
        { left: "der Klimawandel", right: "تغير المناخ" },
      ],
      explanation: "أربع كلمات بيئية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (مجهول):",
      tokens: ["wird", "Müll", "recycelt", "Der", "."],
      correctSentence: "Der Müll wird recycelt.",
      explanation: "Passiv: Der Müll + wird + recycelt (النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Das Haus wird bauen.",
      wrongWord: "bauen",
      correctWord: "gebaut",
      options: ["gebaut", "gebauen", "gebaut werden", "baut"],
      explanation: "المجهول: wird + Partizip II (gebaut) وليس Infinitiv.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ man أو Passiv:",
      template: "___ baut das Haus. Das Haus ___ gebaut.",
      blanks: [
        { correct: "Man", options: ["Man", "Wird", "Es"] },
        { correct: "wird", options: ["wird", "wurde", "ist"] },
      ],
      explanation: "man + فعل نشط. أو wird + Partizip II.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل من نشط إلى مجهول:",
      prompt: "Die Arbeiter bauen das Haus. → (Passiv)",
      acceptedAnswers: ["Das Haus wird von den Arbeitern gebaut", "Das Haus wird gebaut"],
      sampleAnswer: "Das Haus wird von den Arbeitern gebaut.",
      explanation: "المجهول: Das Haus wird + von + Dativ + gebaut.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Man sagt, dass...",
      questionAr: "ما معنى العبارة؟",
      options: ["يقال أن...", "أقول أن...", "قالوا لي أن...", "يجب أن أقول..."],
      correctIndex: 0,
      explanation: "man = المرء/الناس: Man sagt = يقال.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Viele Bäume wird gepflanzt.",
      wrongWord: "wird",
      correctWord: "werden",
      options: ["werden", "wird", "wurde", "ist"],
      explanation: "الموضوع جمع (Bäume) → werden gepflanzt.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Man kann die Umwelt schützen.",
      explanation: "يمكن حماية البيئة — man بديل المجهول.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالشكل الصحيح: zu + المصدر",
      instructionDe: "Ergänze: zu + Infinitiv",
      template: "Es ist wichtig, die Umwelt ___. (schützen)",
      blanks: [{ correct: "zu schützen", options: ["zu schützen", "schützen", "schützten", "zu geschützt"], errorType: "grammar" }],
      hint: "بعد الصفة wichtig نضع zu قبل المصدر في نهاية الجملة.",
      explanation: "Es ist wichtig, die Umwelt zu schützen — من المهم حماية البيئة.",
      errorType: "grammar",
      points: 2,
    },
    {
      id: "e12",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن جملة صحيحة (zu + مصدر):",
      instructionDe: "Ordne die Wörter: Infinitiv mit zu",
      tokens: ["Ich", "versuche,", "das", "Fahrrad", "zu", "nehmen."],
      correctSentence: "Ich versuche, das Fahrrad zu nehmen.",
      hint: "بعد versuche فاصلة، ثم zu + مصدر في نهاية الجملة.",
      explanation: "Ich versuche, das Fahrrad zu nehmen — أحاول ركوب الدراجة.",
      errorType: "word-order",
      points: 2,
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Das Haus wird bauen.", right: "Das Haus wird gebaut.", whyAr: "المجهول: Partizip II." },
      { wrong: "Viele Bäume wird gepflanzt.", right: "Viele Bäume werden gepflanzt.", whyAr: "الموضوع الجمع → werden." },
      { wrong: "Man أم Passiv معاً؟", right: "اختر واحدة: Man baut / Das Haus wird gebaut", whyAr: "كلاهما بديل — لا تجمع." },
    ],
    eselsbruecken: [
      "«werden + Partizip II = مجهول»: wird gebaut (يُبنى) / wurde gebaut (بُني).",
      "«man = المرء»: Man sagt = يقال. بديل سهل للمجهول.",
    ],
    culturalNote: {
      title: "الألمان والبيئة",
      content:
        "ألمانيا رائدة إعادة التدوير: «Mülltrennung» (فصل النفايات) إلزامي: Papier (ورق)، Plastik (بلاستيك)، Bio (عضوي)، Rest (متبقٍّ). وأسعار الكهرباء الخضراء مرتفعة لكنها مدعومة. والألمان يهتمون بـ «Nachhaltigkeit» (الاستدامة) جداً.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المجهول:",
      questionDe: "Der Müll ___ getrennt. (يُفصل)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "مضارع مجهول: wird.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر المجهول:",
      questionDe: "Das Buch ___ 2020 geschrieben. (كُتب)",
      options: ["wurde", "wird", "ist", "war"],
      correctIndex: 0,
      explanation: "ماضٍ مجهول: wurde geschrieben.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (مجهول):",
      tokens: ["werden", "Die", "Wälder", "zerstört", "."],
      correctSentence: "Die Wälder werden zerstört.",
      explanation: "Passiv: werden zerstört.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Das Haus wurde bauen.",
      wrongWord: "bauen",
      correctWord: "gebaut",
      options: ["gebaut", "bauen", "gebauten", "baut"],
      explanation: "المجهول: wurde + Partizip II.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ man أو Passiv:",
      template: "___ recycelt den Müll. Der Müll ___ recycelt.",
      blanks: [
        { correct: "Man", options: ["Man", "Wird", "Der"] },
        { correct: "wird", options: ["wird", "wurde", "man"] },
      ],
      explanation: "Man + نشط. wird + Partizip II.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Umwelt", ar: "البيئة", example: "Die Umwelt ist wichtig.", exampleAr: "البيئة مهمة.", level: "B1" },
    { id: "fc2", de: "der Müll", ar: "النفايات", example: "Der Müll wird getrennt.", exampleAr: "تُفصل النفايات.", level: "B1" },
    { id: "fc3", de: "recyceln", ar: "يعيد التدوير", example: "Wir recyceln Papier.", exampleAr: "نعيد تدوير الورق.", level: "B1" },
    { id: "fc4", de: "der Klimawandel", ar: "تغير المناخ", example: "Der Klimawandel ist ein Problem.", exampleAr: "تغير المناخ مشكلة.", level: "B1" },
    { id: "fc5", de: "das Passiv", ar: "المبني للمجهول", example: "wird gebaut", exampleAr: "يُبنى", level: "B1" },
    { id: "fc6", de: "werden + Partizip II", ar: "يُفعل (مجهول)", example: "Das Haus wird gebaut.", exampleAr: "البيت يُبنى.", level: "B1" },
    { id: "fc7", de: "wurde + Partizip II", ar: "فُعل (مجهول ماضٍ)", example: "Es wurde gebaut.", exampleAr: "بُني.", level: "B1" },
    { id: "fc8", de: "man", ar: "المرء (بديل مجهول)", example: "Man sagt...", exampleAr: "يقال...", level: "B1" },
    { id: "fc9", de: "zu + Infinitiv", ar: "التركيب المصدري (zu + مصدر)", example: "Es ist wichtig, die Umwelt zu schützen.", exampleAr: "من المهم حماية البيئة.", level: "B1" },
    { id: "fc10", de: "um … zu", ar: "لكي (هدف صريح)", example: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", exampleAr: "أتعلم الألمانية لكي أعمل في ألمانيا.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b1-03-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مقالاً عن البيئة مع نقل الحجج بالعربية",
      sourceDe: "Der Klimawandel ist eine der größten Herausforderungen unserer Zeit. Experten fordern weniger CO2-Ausstoß und mehr erneuerbare Energien.",
      taskAr: "لخّص النص مع نقل الموقف: ما التحدي، وماذا يطالب الخبراء.",
      modelAnswerAr: "«تغير المناخ من أكبر تحديات عصرنا. يطالب الخبراء بتقليل انبعاثات ثاني أكسيد الكربون والمزيد من الطاقات المتجددة.»",
      keyPointsAr: ["نقلت التحدي (تغير المناخ)", "ذكرت مطلب الخبراء (تقليل CO2)", "نقلت الحل (الطاقات المتجددة)"],
    },
  ],
      interaction: [
    {
      id: "int-b1-03-1",
      scenarioAr: "نقاش عن الحلول البيئية في مدينتك.",
      scenarioDe: "Diskussion über Umweltlösungen in deiner Stadt.",
      strategyAr: "الاستراتيجية: اقتراح حلول ومناقشتها بأدلة.",
      rounds: [
        {
          speakerDe: "Was sollte deine Stadt für die Umwelt tun?",
          speakerAr: "ماذا يجب أن تفعل مدينتك للبيئة؟",
          options: [
            { de: "Meiner Meinung nach sollte die Stadt mehr Fahrradwege bauen und den öffentlichen Verkehr verbessern.", ar: "في رأيي يجب أن تبني المدينة المزيد من مسارات الدراجات وتحسّن النقل العام.", best: true, replyDe: "Gute Ideen! Aber wer soll das finanzieren?", replyAr: "أفكار جيدة! لكن من يجب أن يمولها؟" },
            { de: "Die Stadt sollte gar nichts tun, das ist egal.", ar: "لا يجب أن تفعل المدينة شيئاً، هذا غير مهم.", best: false, replyDe: "Das ist keine gute Einstellung. Umwelt ist wichtig.", replyAr: "هذا موقف غير جيد. البيئة مهمة." },
          ],
        },
        {
          speakerDe: "Wer soll die Umweltmaßnahmen finanzieren?",
          speakerAr: "من يجب أن يمول الإجراءات البيئية؟",
          options: [
            { de: "Der Staat sollte investieren, weil langfristig alle davon profitieren. Obwohl es kurzfristig teuer ist.", ar: "يجب أن تستثمر الدولة لأن الجميع يستفيد طويل الأمد. رغم أنه مكلف قصير الأمد.", best: true, replyDe: "Ein kluges Argument. Investition in die Zukunft.", replyAr: "حجة ذكية. استثمار في المستقبل." },
            { de: "Niemand sollte zahlen, die Umwelt löst sich selbst.", ar: "لا أحد يجب أن يدفع، البيئة تحل نفسها بنفسها.", best: false, replyDe: "Leider ist das wissenschaftlich nicht haltbar.", replyAr: "للأسف هذا غير مدعوم علمياً." },
          ],
        },
      ],
    },
  ],

};