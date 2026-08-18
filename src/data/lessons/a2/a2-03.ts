import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-03: في المطعم — الطلب + möchten/können + schmecken
 */
export const lessonA203: Lesson = {
  id: "a2-03",
  unitId: "a2-03",
  level: "A2",
  order: 1,
  titleDe: "Im Restaurant",
  titleAr: "المطعم والطعام",
  duration: 35,
  summary:
    "الطلب في المطعم بأدب: Ich möchte... ، أفعال الشرط möchten وkönnen، وصف الطعام بـ schmecken (الطعم)، وطلب الحساب.",

  lernziele: [
    { id: "z1", de: "Ich kann im Restaurant bestellen.", ar: "أن أطلب الطعام بأدب: Ich möchte bitte... / Ich hätte gern..." },
    { id: "z2", de: "Ich kann möchten und können konjugieren.", ar: "أن أصرف أفعال الشرط möchten (أود) وkönnen (أستطيع)." },
    { id: "z3", de: "Ich kann sagen: Das schmeckt gut.", ar: "أن أعبّر عن الطعم: هذا طعمه جيد." },
    { id: "z4", de: "Ich kann die Rechnung verlangen.", ar: "أن أطلب الحساب: Die Rechnung, bitte!" },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في A1 تعلمت: Ich hätte gern einen Kaffee (أود قهوة). اليوم نكشف السحر: hätte هي في الواقع صيغة من الفعل haben! وقريباً ستتعلم الصيغة «الشرطية» التي تجعل طلبك مهذباً. لكن أولاً: الأفعال الشرطية الستة — نبدأ بـ möchten وkönnen.",
    motivatingQuestionDe: "Was möchten Sie bestellen?",
    contextAr:
      "المطعم الألماني: نطلب بأدب (möchten)، نسأل عن القدرة (können)، نصف الطعم (schmecken)، ونطلب الحساب — كل المهارات في محادثة واحدة.",
    contextDe: "Die Speisekarte, bitte!",
    connectionToPreviousAr: "تتذكر الأكل والشرب والنصب من A1 (Ich esse einen Apfel). اليوم نضيف فن الطلب والأدب مع الأفعال الشرطية.",
    activateVocabulary: [
      { de: "das Restaurant", ar: "المطعم" },
      { de: "die Speisekarte", ar: "قائمة الطعام" },
      { de: "bestellen", ar: "يطلب (طعاماً)" },
      { de: "schmecken", ar: "يكون طعمه جيداً" },
      { de: "die Rechnung", ar: "الحساب/الفاتورة" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الصيغة الصحيحة (النصب):",
      questionDe: "Ich esse ___ Apfel.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation: "بعد essen المذكر ein → einen (درس الطعام).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر صيغة الأمر المهذبة:",
      questionDe: "___ Sie bitte! (تعالوا)",
      options: ["Kommen", "Komm", "Kommt", "Kommen Sie"],
      correctIndex: 3,
      explanation: "الأمر المهذب مع Sie: Kommen Sie! (درس الهوايات).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل بـ der/die/das:",
      template: "___ Brot · ___ Milch · ___ Käse",
      blanks: [
        { correct: "das", options: ["das", "die", "der"] },
        { correct: "die", options: ["das", "die", "der"] },
        { correct: "der", options: ["das", "die", "der"] },
      ],
      explanation: "das Brot، die Milch، der Käse (درس الطعام).",
      errorType: "gender",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "أفعال الشرط: möchten (أود) وkönnen (أستطيع)",
      titleDe: "Die Modalverben: möchten und können",
      explanationAr:
        "möchten = أود/أرغب (صيغة مهذبة من mögen): ich möchte، du möchtest، er möchte... können = أستطيع/أقدر: ich kann، du kannst، er kann. القاعدة: الفعل الشرطي في المركز الثاني + الفعل الأساسي في النهاية: Ich möchte einen Kaffee trinken.",
      whyAr:
        "لماذا «möchten» بدل «will» (أريد)؟ لأن الأدب الألماني يفضّل «أود» على «أريد» — تماماً كما نقول «أودّ» بدل «أريد» في العربية الفصحى. والطلب المهذب: Ich möchte bitte...",
      table: {
        title: "تصريف möchten وkönnen",
        columns: ["الضمير", "möchten", "können", "مثال"],
        rows: [
          { label: "ich", cells: ["möchte", "kann", "Ich möchte Wasser trinken."] },
          { label: "du", cells: ["möchtest", "kannst", "Kannst du kommen?"] },
          { label: "er/sie/es", cells: ["möchte", "kann", "Er kann gut kochen."] },
          { label: "wir", cells: ["möchten", "können", "Wir möchten bestellen."] },
          { label: "ihr", cells: ["möchtet", "könnt", "Könnt ihr helfen?"] },
          { label: "sie/Sie", cells: ["möchten", "können", "Sie können die Karte lesen."] },
        ],
      },
      examples: [
        { de: "Ich möchte bitte einen Tee.", ar: "أود شاياً من فضلك." },
        { de: "Was möchten Sie bestellen?", ar: "ماذا تودون أن تطلبوا؟" },
        { de: "Können Sie mir die Karte geben?", ar: "هل يمكنكم إعطائي القائمة؟" },
        { de: "Wir möchten die Rechnung, bitte.", ar: "نود الحساب من فضلك." },
        { de: "Ich kann nicht scharf essen.", ar: "لا أستطيع أكل الحار." },
      ],
      comparisonWithArabic:
        "«أود أن أشرب» = Ich möchte trinken. الألمانية تحذف «أن» وتضع الفعل في النهاية: möchte ... trinken. و«هل يمكنكم» = Können Sie...؟ — نفس البنية: استفهام + فعل شرطي + أساسي.",
      eselsbruecke:
        "«möchte = أود (بأدب)» — استخدمها في أي طلب. «kann = أقدر» — اسأل بها عن الإمكانية. والاثنان «يطلبان» الفعل في نهاية الجملة.",
      commonMistakes: [
        { wrong: "Ich möchte trinken einen Kaffee.", right: "Ich möchte einen Kaffee trinken.", whyAr: "الفعل الأساسي في النهاية — الإطار." },
        { wrong: "Ich will einen Kaffee (صيغة حادة)", right: "Ich möchte einen Kaffee (مهذبة)", whyAr: "will = أريد (قد تبدو حادة). في المطعم: möchte دائماً." },
        { wrong: "Kannst du mich helfen (خلط ضمير)", right: "Kannst du mir helfen?", whyAr: "helfen يأخذ Dativ: mir وليس mich (درس قادم عن أفعال Dativ)." },
      ],
      relatedRuleComparison: {
        title: "möchte أم hätte gern؟",
        content: "كلاهما مهذب: Ich möchte einen Kaffee / Ich hätte gern einen Kaffee. hätte gern = «سأحب أن يكون عندي» (صيغة شرطية من haben). استخدم أيهما تفضل — كلاهما صحيح في المطعم.",
      },
    },
    {
      id: "t2",
      titleAr: "وصف الطعم بـ schmecken + طلب الحساب",
      titleDe: "Schmecken und die Rechnung",
      explanationAr:
        "schmecken = «يكون طعمه...» — يأخذ Dativ (المتذوق): Das schmeckt mir (هذا طعمه جيد عندي). الأسئلة: Wie schmeckt es? (كيف الطعم؟) والجواب: Es schmeckt gut/lecker (لذيذ). لطلب الحساب: Die Rechnung, bitte! أو Ich möchte zahlen.",
      whyAr:
        "لماذا schmecken مع Dativ؟ لأن «الطعم يعجب المتذوق» — الفعل يتجه إلى شخص (mir). هذه مجموعة أفعال «Dativ» التي سنوسعها في درس لاحق: gefallen (يعجبني)، helfen (يساعدني).",
      table: {
        title: "عبارات المطعم الأساسية",
        columns: ["الألمانية", "العربية", "الملاحظة"],
        rows: [
          { label: "Die Speisekarte, bitte!", cells: ["القائمة من فضلك!", "لبدء الطلب"] },
          { label: "Ich möchte ... bestellen.", cells: ["أود طلب...", "الطلب المهذب"] },
          { label: "Das schmeckt lecker!", cells: ["هذا لذيذ!", "بعد التذوق"] },
          { label: "Wie schmeckt es?", cells: ["كيف الطعم؟", "سؤال النادل"] },
          { label: "Die Rechnung, bitte!", cells: ["الحساب من فضلك!", "في النهاية"] },
          { label: "Es hat sehr gut geschmeckt!", cells: ["كان لذيذاً جداً!", "بعد الأكل"] },
        ],
      },
      examples: [
        { de: "Die Speisekarte, bitte!", ar: "القائمة من فضلك!" },
        { de: "Das schmeckt mir sehr gut.", ar: "هذا طعمه جيد جداً عندي." },
        { de: "Die Suppe schmeckt lecker.", ar: "الحساء لذيذ." },
        { de: "Es hat sehr gut geschmeckt!", ar: "كان لذيذاً جداً!" },
        { de: "Die Rechnung, bitte!", ar: "الحساب من فضلك!" },
      ],
      comparisonWithArabic:
        "«Das schmeckt mir» = هذا يطيب لي — نفس فكرة «يطيب لي» في العربية الفصحى! و«lecker» = لذيذ (كلمة شعبية جداً تسمعها كل يوم).",
      eselsbruecke:
        "«lecker = لذيذ» — كلمة قصيرة سهلة: لِكّر. و«Die Rechnung» = الحساب: في أي مطعم قل: Die Rechnung, bitte!",
      commonMistakes: [
        { wrong: "Ich schmecke das gut (المتذوق بدل الطعام)", right: "Das schmeckt mir gut.", whyAr: "الطعام هو الفاعل: das schmeckt. أنت المتذوق (mir)." },
        { wrong: "Das schmeckt gut nicht.", right: "Das schmeckt nicht gut.", whyAr: "nicht قبل gut: nicht gut (وليس بعدها)." },
        { wrong: "der Rechnung (جنس خاطئ)", right: "die Rechnung", whyAr: "Rechnung مؤنثة: die Rechnung." },
      ],
      relatedRuleComparison: {
        title: "lecker أم gut؟",
        content: "كلاهما «جيد»: lecker للطعم تحديداً (لذيذ)، gut عام. Es schmeckt lecker / Es schmeckt gut — كلاهما صحيح.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "طلب الطعام",
        lines: [
          { speaker: "Kellner", de: "Guten Abend! Haben Sie schon gewählt?", ar: "مساء الخير! هل اخترتم؟" },
          { speaker: "Sami", de: "Ja, ich möchte bitte die Spaghetti und einen Salat.", ar: "نعم، أود السباغيتي وسلطة من فضلك." },
          { speaker: "Kellner", de: "Und etwas zu trinken?", ar: "وشيء للشرب؟" },
          { speaker: "Sami", de: "Ein Wasser, bitte.", ar: "ماء من فضلك." },
          { speaker: "Kellner", de: "Sehr gerne. (nach dem Essen) Wie hat es geschmeckt?", ar: "بكل سرور. (بعد الأكل) كيف كان الطعم؟" },
          { speaker: "Sami", de: "Sehr gut! Die Spaghetti waren lecker. Die Rechnung, bitte.", ar: "جيد جداً! كانت السباغيتي لذيذة. الحساب من فضلك." },
        ],
      },
      {
        id: "l2",
        title: "لا أستطيع أكل...",
        lines: [
          { speaker: "Mona", de: "Ich kann kein Fleisch essen.", ar: "لا أستطيع أكل اللحم." },
          { speaker: "Kellner", de: "Kein Problem! Wir haben auch vegetarische Gerichte.", ar: "لا مشكلة! لدينا أيضاً أطباق نباتية." },
          { speaker: "Mona", de: "Was können Sie empfehlen?", ar: "ماذا تنصحون؟" },
          { speaker: "Kellner", de: "Der Gemüseteller ist sehr gut und nicht teuer.", ar: "طبق الخضار جيد جداً وغير غالٍ." },
          { speaker: "Mona", de: "Gut, ich nehme den Gemüseteller.", ar: "حسناً، سآخذ طبق الخضار." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was bestellt Sami?",
        questionAr: "ماذا طلب سامي؟",
        options: ["Spaghetti und Salat", "Fleisch und Suppe", "Pizza und Wasser", "Gemüseteller"],
        correctIndex: 0,
        explanation: "قال: Ich möchte die Spaghetti und einen Salat.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie waren die Spaghetti?",
        questionAr: "كيف كانت السباغيتي؟",
        options: ["lecker", "schlecht", "scharf", "kalt"],
        correctIndex: 0,
        explanation: "قال سامي: Die Spaghetti waren lecker — لذيذة.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kann Mona nicht essen?",
        questionAr: "ماذا لا تستطيع منى أكل؟",
        options: ["Fleisch", "Gemüse", "Salat", "Fisch"],
        correctIndex: 0,
        explanation: "قالت منى: Ich kann kein Fleisch essen — لا تستطيع اللحم.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات المطعم: sch، ü، وck",
    items: [
      { de: "schmecken", ar: "يكون طعمه جيداً", note: "sch = ش + ck = ك مشددة: شمِكِن" },
      { de: "lecker", ar: "لذيذ", note: "e مفتوحة + ck: لِكّر" },
      { de: "die Küche", ar: "المطبخ", note: "ü + ch ناعمة: كُيخِه" },
      { de: "die Suppe", ar: "الحساء", note: "p مزدوجة: زوپّـِه" },
      { de: "die Rechnung", ar: "الحساب/الفاتورة", note: "ch بعد n؟ خ: ريش-نونغ (ch = خ)" },
      { de: "bestellen", ar: "يطلب", note: "e مفتوحة: بِشتِلِن" },
    ],
    tip: "Rechnung لها نطق صعب: «ريش-نونغ» — ch هنا تُنطق خ حلقية. كررها 5 مرات ببطء.",
    shadowing: [
      { de: "Ich möchte bitte einen Tee.", ar: "أود شاياً من فضلك.", tip: "möchte = مُوخشـتِه (ö)" },
      { de: "Die Speisekarte, bitte!", ar: "القائمة من فضلك!", tip: "Speisekarte = شپايْزِه-كارته (sp=شپ)" },
      { de: "Das schmeckt lecker!", ar: "هذا لذيذ!", tip: "schmeckt = شمِكْت" },
      { de: "Können Sie mir helfen?", ar: "هل يمكنكم مساعدتي؟", tip: "Können = كُنِن (ö)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب طلبك في المطعم:",
      prompt: "Was möchtest du bestellen? (اكتب جملة كاملة بـ Ich möchte...)",
      acceptedAnswers: ["Ich möchte eine Pizza", "Ich möchte einen Salat", "Ich möchte die Suppe", "Ich möchte Wasser"],
      sampleAnswer: "Ich möchte bitte eine Pizza und einen Salat.",
      explanation: "الصيغة: Ich möchte + المفعول (بالنصب) + من فضلك.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ möchten بتصريف صحيح:",
      template: "Ich ___ einen Kaffee. Du ___ einen Tee. Wir ___ die Rechnung. Sie ___ bestellen.",
      blanks: [
        { correct: "möchte", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchtest", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchten", options: ["möchte", "möchtest", "möchten"] },
        { correct: "möchten", options: ["möchte", "möchtest", "möchten"] },
      ],
      explanation: "سلم möchte: möchte، möchtest، möchte، möchten، möchtet، möchten.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich möchte bitte zahlen.",
      explanation: "أود أن أدفع من فضلك — möchte + الفعل الأساسي في النهاية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ einen Salat bestellen.",
      options: ["möchte", "möchtest", "möchten", "möchtet"],
      correctIndex: 0,
      explanation: "مع ich: möchte.",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "___ Sie mir helfen?",
      options: ["Können", "Kann", "Kannst", "Könnt"],
      correctIndex: 0,
      explanation: "مع Sie: Können (صيغة الاحترام = صيغة الجمع).",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل عبارة المطعم بمعناها:",
      pairs: [
        { left: "die Speisekarte", right: "قائمة الطعام" },
        { left: "die Rechnung", right: "الحساب" },
        { left: "der Kellner", right: "النادل" },
        { left: "das Getränk", right: "المشروب" },
      ],
      explanation: "أربع كلمات أساسية في أي مطعم.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["möchte", "Ich", "die", "Suppe", "bestellen", "."],
      correctSentence: "Ich möchte die Suppe bestellen.",
      explanation: "Ich + möchte + die Suppe + bestellen (في النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich möchte trinken einen Kaffee.",
      wrongWord: "trinken einen Kaffee",
      correctWord: "einen Kaffee trinken",
      options: ["einen Kaffee trinken", "trinken ein Kaffee", "einen Kaffee trinken", "trinke einen Kaffee"],
      explanation: "الإطار: möchte + المفعول + الفعل الأساسي في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ schmeckt/schmecken:",
      template: "Das ___ gut. Die Suppe ___ lecker. Wie ___ es?",
      blanks: [
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
        { correct: "schmeckt", options: ["schmeckt", "schmecken"] },
      ],
      explanation: "schmeckt مع المفرد (das, die Suppe, es).",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اطلب الحساب بأدب:",
      prompt: "(النادل اقترب — اطلب الحساب)",
      acceptedAnswers: ["Die Rechnung, bitte!", "Ich möchte zahlen, bitte!", "Ich möchte bitte zahlen."],
      sampleAnswer: "Die Rechnung, bitte!",
      explanation: "أبسط طلب: Die Rechnung, bitte! أو Ich möchte zahlen.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wie schmeckt es?",
      questionAr: "ما معنى السؤال؟",
      options: ["كيف الطعم؟", "بكم هذا؟", "ماذا تريد؟", "أين المطعم؟"],
      correctIndex: 0,
      explanation: "Wie + schmeckt es = كيف طعمه؟",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich möchte zahlen die Rechnung.",
      wrongWord: "zahlen die Rechnung",
      correctWord: "die Rechnung zahlen",
      options: ["die Rechnung zahlen", "zahlen der Rechnung", "bezahlen die Rechnung", "die Rechnung zahlen"],
      explanation: "الفعل الأساسي في النهاية: möchte die Rechnung zahlen.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Suppe schmeckt mir sehr gut.",
      explanation: "الحساء طعمه جيد جداً عندي — schmeckt + Dativ (mir).",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich möchte trinken einen Kaffee.", right: "Ich möchte einen Kaffee trinken.", whyAr: "الفعل الأساسي في نهاية الجملة (الإطار)." },
      { wrong: "Ich schmecke das gut (المتذوق كفاعل)", right: "Das schmeckt mir gut.", whyAr: "الطعام فاعل، والمتذوق Dativ (mir)." },
      { wrong: "Kannst du mich helfen", right: "Kannst du mir helfen?", whyAr: "helfen يأخذ Dativ: mir وليس mich." },
    ],
    eselsbruecken: [
      "«möchte = أود» للطلب المهذب — في أي مطعم ألماني: Ich möchte bitte...",
      "«lecker = لذيذ»: كلمة السر لإطراء النادل: Das schmeckt lecker!",
    ],
    culturalNote: {
      title: "نظام Trinkgeld (الإكرامية)",
      content:
        "في ألمانيا لا توجد نسبة إكرامية إلزامية، لكن من اللباقة تقريب المبلغ: «Stimmt so» (الباقي لك) أو 5-10%. تدفع للنادل مباشرة عند الطاولة — وغالباً بعد الأكل ينتظرونك أنت لتطلب الحساب وليس العكس.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ bitte einen Tee.",
      options: ["möchte", "möchtest", "möchten", "möchtet"],
      correctIndex: 0,
      explanation: "مع ich: möchte.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "___ du mir helfen?",
      options: ["Kannst", "Kann", "Können", "Könnt"],
      correctIndex: 0,
      explanation: "مع du: kannst.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Die", "Rechnung", "bitte", "!"],
      correctSentence: "Die Rechnung, bitte!",
      explanation: "الحساب من فضلك! — أبسط وأشيع طلب.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Die Suppe schmeckt gut nicht.",
      wrongWord: "gut nicht",
      correctWord: "nicht gut",
      options: ["nicht gut", "gut nicht", "nicht gut nicht", "schlecht nicht"],
      explanation: "النفي قبل الصفة: schmeckt nicht gut.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالكلمة الصحيحة (Speisekarte/Rechnung/schmeckt):",
      template: "Die ___, bitte! (القائمة) · Das ___ lecker! · Die ___, bitte! (الحساب)",
      blanks: [
        { correct: "Speisekarte", options: ["Speisekarte", "Rechnung", "schmeckt"] },
        { correct: "schmeckt", options: ["Speisekarte", "Rechnung", "schmeckt"] },
        { correct: "Rechnung", options: ["Speisekarte", "Rechnung", "schmeckt"] },
      ],
      explanation: "Speisekarte للطلب، schmeckt للطعم، Rechnung للحساب.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Restaurant", ar: "المطعم", example: "Wir gehen ins Restaurant.", exampleAr: "نذهب إلى المطعم.", level: "A2" },
    { id: "fc2", de: "die Speisekarte", ar: "قائمة الطعام", example: "Die Speisekarte, bitte!", exampleAr: "القائمة من فضلك!", level: "A2" },
    { id: "fc3", de: "bestellen", ar: "يطلب (طعاماً)", example: "Ich möchte bestellen.", exampleAr: "أود أن أطلب.", level: "A2" },
    { id: "fc4", de: "möchten", ar: "أود (طلب مهذب)", example: "Ich möchte einen Kaffee.", exampleAr: "أود قهوة.", level: "A2" },
    { id: "fc5", de: "können", ar: "أستطيع", example: "Können Sie mir helfen?", exampleAr: "هل يمكنكم مساعدتي؟", level: "A2" },
    { id: "fc6", de: "schmecken", ar: "يكون طعمه جيداً", example: "Das schmeckt mir gut.", exampleAr: "هذا طعمه جيد.", level: "A2" },
    { id: "fc7", de: "lecker", ar: "لذيذ", example: "Die Pizza ist lecker!", exampleAr: "البيتزا لذيذة!", level: "A2" },
    { id: "fc8", de: "die Rechnung", ar: "الحساب", example: "Die Rechnung, bitte!", exampleAr: "الحساب من فضلك!", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-03-1", type: "simplify-announcement",
      titleAr: "بسّط قائمة طعام ألمانية بالعربية",
      sourceDe: "Vorspeise: Gemüsesuppe. Hauptgericht: Schnitzel mit Pommes oder Bratwurst mit Sauerkraut. Dessert: Apfelstrudel.",
      taskAr: "انقل القائمة بالعربية: المقبلات، الطبق الرئيسي بخياراته، والحلوى.",
      modelAnswerAr: "«مقبلات: شوربة خضار. طبق رئيسي: شنيتزل مع بطاطس أو سجق مع ملفوف مخلل. حلوى: ستروديل تفاح.»",
      keyPointsAr: ["نقلت المقبلات", "ذكرت خياري الطبق الرئيسي", "نقلت الحلوى"],
    },
  ],
      interaction: [
    {
      id: "int-a2-03-1",
      scenarioAr: "في مطعم — تطلب وتشكو من الطبق.",
      scenarioDe: "Im Restaurant — du bestellst und reklamierst.",
      strategyAr: "الاستراتيجية: الطلب بأدب وتقديم شكوى مهذبة.",
      rounds: [
        {
          speakerDe: "Was möchten Sie bestellen?",
          speakerAr: "ماذا تريد أن تطلب؟",
          options: [
            { de: "Ich hätte gern das Schnitzel mit Pommes, bitte.", ar: "أريد الشنيتزل مع البطاطس من فضلك.", best: true, replyDe: "Sehr gerne. Etwas zu trinken?", replyAr: "بكل سرور. شيء للشرب؟" },
            { de: "Ich möchte die Rechnung sofort.", ar: "أريد الحساب فوراً.", best: false, replyDe: "Sie haben noch nichts bestellt!", replyAr: "لم تطلب شيئاً بعد!" },
          ],
        },
        {
          speakerDe: "Hier ist Ihr Schnitzel. Guten Appetit!",
          speakerAr: "هذا شنيتزلك. بالهناء والشفاء!",
          options: [
            { de: "Entschuldigung, das Schnitzel ist kalt. Können Sie es bitte warm machen?", ar: "عذراً، الشنيتزل بارد. هل يمكنك تسخينه من فضلك؟", best: true, replyDe: "Es tut mir leid! Ich bringe sofort ein neues.", replyAr: "آسف! سأحضر واحداً جديداً فوراً." },
            { de: "Das Schnitzel ist kalt. Sie sind schrecklich!", ar: "الشنيتزل بارد. أنت فظيع!", best: false, replyDe: "Bitte bleiben Sie höflich. Ich löse das Problem.", replyAr: "رجاءً كن مهذباً. سأحل المشكلة." },
          ],
        },
      ],
    },
  ],

};