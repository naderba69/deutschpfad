import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-07: التسوق
 * — الأرقام 0-1000 + الأسعار باليورو + جمع الأسماء + أكوساتيف مع einkaufen
 */
export const lessonA107: Lesson = {
  id: "a1-07",
  unitId: "a1-07",
  level: "A1",
  order: 1,
  titleDe: "Einkaufen",
  titleAr: "التسوق",
  duration: 30,
  summary:
    "الأرقام من 0 حتى 1000، قراءة الأسعار باليورو، أنماط جمع الأسماء الأساسية، وعبارات التسوق: Was kostet das? Ich nehme...",

  lernziele: [
    { id: "z1", de: "Ich kann bis 1000 zählen.", ar: "أن أعدّ من 0 إلى 1000 وأقرأ الأسعار." },
    { id: "z2", de: "Ich kann fragen: Was kostet das?", ar: "أن أسأل عن السعر وأجيب: Das kostet fünf Euro." },
    { id: "z3", de: "Ich kenne die wichtigsten Pluralformen.", ar: "أن أتعرف على أنماط الجمع الأساسية (Äpfel, Bananen, Bücher...)." },
    { id: "z4", de: "Ich kann im Geschäft einkaufen.", ar: "أن أتسوق: أطلب، أسأل عن السعر، وأدفع." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قل «تفاحة» ثم «تفاحات» بالعربية. لاحظت أنك غيّرت الكلمة؟ الألمانية تفعل هذا أيضاً لكن بأنماط كثيرة: Apfel → Äpfel، Banane → Bananen، Buch → Bücher! كم نمطاً تعتقد أن هناك؟",
    motivatingQuestionDe: "Was kostet das?",
    contextAr:
      "نذهب اليوم إلى السوق الألماني: أرقام للأسعار، وجمع للكميات، وعبارات الشراء. في النهاية ستستطيع شراء أي شيء بنفسك!",
    contextDe: "Ich möchte bitte zwei Äpfel!",
    connectionToPreviousAr: "تعلمت في درس الطعام أسماء المأكولات والنصب. اليوم نضيف: الكميات (جمع) والأسعار (أرقام) — التسوق كاملاً.",
    activateVocabulary: [
      { de: "kaufen", ar: "يشتري" },
      { de: "kosten", ar: "يكلف" },
      { de: "der Euro", ar: "اليورو" },
      { de: "billig", ar: "رخيص" },
      { de: "teuer", ar: "غالٍ" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-05): ما وقت الاستيقاظ؟",
      questionDe: "Wann stehst du auf?",
      questionAr: "متى تستيقظ؟",
      options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe auf um 7 Uhr.", "Um 7 Uhr ich aufstehe."],
      correctIndex: 0,
      explanation: "الفعل المنفصل: الفعل في المركز الثاني والبادئة في النهاية (من درس a1-05).",
      errorType: "word-order",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-06): ماذا تحب أن تفعل؟",
      questionDe: "Was machst du gern?",
      questionAr: "ماذا تحب أن تفعل؟",
      options: ["Ich spiele gern Fußball.", "Ich gern Fußball spiele.", "Ich spiele Fußball gern bin.", "Gern ich Fußball spiele."],
      correctIndex: 0,
      explanation: "gern بعد الفعل (من درس a1-06 الهوايات): Ich spiele gern.",
      errorType: "word-order",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية: أكمل بـ können (من a1-06)",
      template: "Ich ___ Deutsch sprechen. (können)",
      blanks: [{ correct: "kann", options: ["kann", "können", "kannt", "könnt"] }],
      explanation: "ich kann (من درس a1-06): Ich kann Deutsch sprechen.",
      errorType: "conjugation",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "الأرقام من 0 إلى 1000",
      titleDe: "Die Zahlen 0–1000",
      explanationAr:
        "الأرقام: null، eins، zwei، drei... عشرة: zehn، عشرون: zwanzig. من 21 إلى 99: العدد «معكوس»: einundzwanzig = واحد وعشرون (واحد-و-عشرون). المئات: hundert (مئة)، zweihundert (مئتان). الألف: tausend. انتبه: eins تتحول إلى ein عند التركيب: einundzwanzig (وليس einsundzwanzig).",
      whyAr:
        "لماذا معكوس؟ لأن الألمانية «تقرأ من اليمين» في الأرقام: 21 = einundzwanzig (واحد وعشرون) — نفس ترتيب العربية! إنه تشابه رائع: العربية تقول «واحد وعشرون» والألمانية einundzwanzig — نفس البنية تماماً!",
      table: {
        title: "الأرقام الأساسية",
        columns: ["الرقم", "الألمانية", "الرقم", "الألمانية"],
        rows: [
          { label: "0", cells: ["null", "20", "zwanzig"] },
          { label: "1", cells: ["eins", "21", "einundzwanzig"] },
          { label: "2", cells: ["zwei", "30", "dreißig"] },
          { label: "3", cells: ["drei", "40", "vierzig"] },
          { label: "4", cells: ["vier", "50", "fünfzig"] },
          { label: "5", cells: ["fünf", "100", "hundert"] },
          { label: "6", cells: ["sechs", "200", "zweihundert"] },
          { label: "7", cells: ["sieben", "500", "fünfhundert"] },
          { label: "8", cells: ["acht", "1000", "tausend"] },
          { label: "9", cells: ["neun", "10", "zehn"] },
        ],
      },
      examples: [
        { de: "Das kostet fünf Euro.", ar: "هذا يكلف خمسة يورو." },
        { de: "Das ist einundzwanzig Euro.", ar: "هذا واحد وعشرون يورو." },
        { de: "Ich brauche hundert Gramm Käse.", ar: "أحتاج مئة غرام جبن." },
        { de: "Der Fernseher kostet neunhundert Euro.", ar: "التلفاز يكلف تسعمائة يورو." },
        { de: "Zwei Äpfel, bitte!", ar: "تفاحتان من فضلك!" },
      ],
      comparisonWithArabic:
        "التركيب 21-99 مطابق للعربية حرفياً: einundzwanzig = واحد وعشرون، zweiunddreißig = اثنان وثلاثون. هذا يسهل عليك كل شيء — ركّز فقط على حفظ العشرات والمئات.",
      eselsbruecke:
        "«واحد-و-عشرون» — الألمانية تقولها بنفس ترتيب العربية تماماً: ein + und + zwanzig. فقط أضف und في المنتصف!",
      commonMistakes: [
        { wrong: "einsundzwanzig (مع s)", right: "einundzwanzig", whyAr: "eins تفقد s عند التركيب: einundzwanzig." },
        { wrong: "نطق dreißig كـ«دريسيغ»", right: "دْراي-سِش (ß = سّ)", whyAr: "ei = آي وß = سّ حادة: درايسش." },
        { wrong: "sechs تُنطق «سيكس»", right: "زِكس (s في البداية = ز)", whyAr: "s في بداية الكلمة تُنطق ز عادة." },
      ],
      relatedRuleComparison: {
        title: "ein أم eins؟",
        content: "عند العد وحدها: eins. عند التركيب أو قبل اسم: ein (ein Euro, einundzwanzig). نفس فكرة العربية: «واحد» و«واحد وعشرون».",
      },
    },
    {
      id: "t2",
      titleAr: "جمع الأسماء (Plural) — أهم الأنماط",
      titleDe: "Der Plural: Äpfel, Bananen, Bücher",
      explanationAr:
        "الجمع في الألمانية له أنماط عديدة، أشهرها: إضافة -e (der Tisch → die Tische)، إضافة -en/-n (die Banane → die Bananen)، إضافة -er (das Buch → die Bücher)، لا تغيير مع Umlaut (der Apfel → die Äpfel) أو بدون (das Zimmer → die Zimmer)، أو -s للكلمات الأجنبية (das Auto → die Autos).",
      whyAr:
        "لماذا لا قاعدة واحدة؟ لأن الجمع الألماني «تاريخي»: لكل كلمة عائلتها. لكن الخبر السار: 80% من الكلمات تتبع أحد 5 أنماط، ومع الأداة die في الجمع دائماً (die Äpfel).",
      table: {
        title: "الأنماط الخمسة الأساسية للجمع",
        columns: ["النمط", "مثال مفرد", "مثال جمع"],
        rows: [
          { label: "-e", cells: ["der Tisch", "die Tische"] },
          { label: "-en / -n", cells: ["die Banane", "die Bananen"] },
          { label: "-er (+Umlaut)", cells: ["das Buch", "die Bücher"] },
          { label: "Umlaut فقط", cells: ["der Apfel", "die Äpfel"] },
          { label: "بدون تغيير", cells: ["das Zimmer", "die Zimmer"] },
          { label: "-s (أجنبي)", cells: ["das Auto", "die Autos"] },
        ],
      },
      examples: [
        { de: "Ich kaufe drei Äpfel.", ar: "أشتري ثلاث تفاحات." },
        { de: "Die Bananen sind billig.", ar: "الموز رخيص." },
        { de: "Wir lesen viele Bücher.", ar: "نقرأ كتباً كثيرة." },
        { de: "Die Tische sind neu.", ar: "الطاولات جديدة." },
        { de: "Zwei Zimmer, bitte!", ar: "غرفتان من فضلك!" },
      ],
      comparisonWithArabic:
        "العربية لها جمع مؤنث سالم (تفاحات) وجمع تكسير (كتب). الألمانية أيضاً: Bananen (سالم) وBücher (تكسير!) — الفكرة نفسها: أنماط متعددة تُحفظ مع الكلمة.",
      eselsbruecke:
        "«أهم ثلاثة: -e، -en، -er» — احفظ مفرداتك دائماً مع جمعها: Tisch/Tische، Banane/Bananen، Buch/Bücher. مثل ما تحفظ المفرد والجمع في العربية.",
      commonMistakes: [
        { wrong: "die Apfels (جمع خاطئ)", right: "die Äpfel", whyAr: "Apfel من نمط Umlaut: Äpfel بدون إضافة." },
        { wrong: "der Bücher (أداة خاطئة للجمع)", right: "die Bücher", whyAr: "الجمع دائماً die — مهما كان جنس المفرد." },
        { wrong: "zwei Apfel (بدون جمع)", right: "zwei Äpfel", whyAr: "بعد الأرقام >1 يأتي الجمع دائماً: zwei Äpfel." },
      ],
      relatedRuleComparison: {
        title: "الجمع بعد الأرقام",
        content: "بعد 2 وما فوق: جمع. بعد 1: مفرد. (ein Apfel, zwei Äpfel, fünf Äpfel). والأرقام بعد 12 لا تغير صيغة الجمع في أغلب الحالات.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "في السوق",
        lines: [
          { speaker: "Verkäufer", de: "Guten Tag! Was möchten Sie?", ar: "نهارك سعيد! ماذا تريدون؟" },
          { speaker: "Mona", de: "Ich möchte bitte drei Äpfel und zwei Bananen.", ar: "أريد ثلاث تفاحات وموزتين من فضلك." },
          { speaker: "Verkäufer", de: "Bitte schön. Die Äpfel kosten drei Euro, die Bananen zwei Euro.", ar: "تفضلي. التفاحات بثلاثة يورو والموز بيوروين." },
          { speaker: "Mona", de: "Was kostet der Käse?", ar: "بكم الجبن؟" },
          { speaker: "Verkäufer", de: "Der Käse kostet fünf Euro das Kilo.", ar: "الجبن بخمسة يورو للكيلو." },
          { speaker: "Mona", de: "Okay, ich nehme alles. Das macht zehn Euro, richtig?", ar: "حسناً، سآخذ كل شيء. المجموع عشرة يورو، صحيح؟" },
          { speaker: "Verkäufer", de: "Ja, genau zehn Euro.", ar: "نعم، عشرة يورو بالضبط." },
          { speaker: "Mona", de: "Ich bezahle mit Karte, bitte.", ar: "سأدفع بالبطاقة من فضلك." },
          { speaker: "Verkäufer", de: "Kein Problem! Unterschreiben Sie hier.", ar: "لا مشكلة! وقّع هنا." },
        ],
      },
      {
        id: "l2",
        title: "أرقام في الحياة",
        lines: [
          { speaker: "Karim", de: "Meine Telefonnummer ist null drei eins, fünf zwei sieben.", ar: "رقم هاتفي: 031 527" },
          { speaker: "Anna", de: "Und wie alt bist du?", ar: "وكم عمرك؟" },
          { speaker: "Karim", de: "Ich bin einundzwanzig Jahre alt.", ar: "عمري واحد وعشرون عاماً." },
          { speaker: "Anna", de: "Ich bin dreißig. Hast du hundert Euro?", ar: "عمري ثلاثون. هل معك مئة يورو؟" },
          { speaker: "Karim", de: "Nein, ich habe nur zwanzig Euro.", ar: "لا، معي عشرون يورو فقط." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was kauft Mona?",
        questionAr: "ماذا تشتري منى؟",
        options: ["drei Äpfel und zwei Bananen", "zwei Äpfel und drei Bananen", "Käse und Brot", "fünf Bananen"],
        correctIndex: 0,
        explanation: "قالت: drei Äpfel und zwei Bananen — ثلاث تفاحات وموزتين.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet der Käse?",
        questionAr: "بكم الجبن؟",
        options: ["fünf Euro das Kilo", "drei Euro", "zehn Euro", "zwei Euro"],
        correctIndex: 0,
        explanation: "قال البائع: Der Käse kostet fünf Euro das Kilo.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie alt ist Karim?",
        questionAr: "كم عمر كريم؟",
        options: ["21", "30", "20", "27"],
        correctIndex: 0,
        explanation: "قال: Ich bin einundzwanzig Jahre alt — 21 عاماً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أرقام صعبة النطق للعربي",
    items: [
      { de: "drei", ar: "ثلاثة", note: "dr معاً: دراي (راء حلقية خفيفة)" },
      { de: "fünf", ar: "خمسة", note: "ü: فُنف (وليس فونف)" },
      { de: "sieben", ar: "سبعة", note: "ie = إي: زيبِن" },
      { de: "zwanzig", ar: "عشرون", note: "z = تس + ig في النهاية = إش: تسڤانتسش" },
      { de: "dreißig", ar: "ثلاثون", note: "ß + ig = إش: درايسش" },
      { de: "hundert", ar: "مئة", note: "h في البداية نَفَس: هوندَرت" },
    ],
    tip: "انتبه لنهاية -ig: في ألمانيا الشمالية تُنطق «إش»، وفي الجنوب «إغ» — كلاهما مقبول، اختر أحدهما والتزم به.",
    shadowing: [
      { de: "Das kostet dreißig Euro.", ar: "هذا يكلف ثلاثين يورو.", tip: "dreißig = درايسش" },
      { de: "Ich bin einundzwanzig Jahre alt.", ar: "عمري 21 عاماً.", tip: "einundzwanzig = آين-وونت-تسڤانتسش" },
      { de: "Zwei Bananen, bitte!", ar: "موزتان من فضلك!", tip: "zwei = تسڤاي" },
      { de: "Fünfhundert Euro?", ar: "خمسمائة يورو؟", tip: "fünf = فُنف (ü)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب سعرين بالجملة الكاملة:",
      prompt: "اكتب: «هذا يكلف خمسة عشر يورو» بالألمانية",
      acceptedAnswers: ["Das kostet fünfzehn Euro", "Das kostet fünfzehn Euro."],
      sampleAnswer: "Das kostet fünfzehn Euro.",
      explanation: "الصيغة: Das kostet + رقم + Euro. خمسة عشر = fünfzehn (وليس fünfzehn!).",
      errorType: "vocabulary",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالأرقام الألمانية كتابةً:",
      template: "Ich kaufe ___ (2) Äpfel und ___ (3) Bananen. Das kostet ___ (10) Euro.",
      blanks: [
        { correct: "zwei", options: ["zwei", "zwo", "drei", "ein"] },
        { correct: "drei", options: ["zwei", "drei", "vier", "fünf"] },
        { correct: "zehn", options: ["zehn", "zehn", "neun", "zwölf"] },
      ],
      explanation: "2=zwei، 3=drei، 10=zehn. (zwo تستخدم في الهاتف فقط لتمييزها عن drei).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة (انتبه للجمع):",
      audioText: "Ich möchte bitte drei Äpfel.",
      explanation: "أريد ثلاث تفاحات من فضلك — drei + جمع Äpfel.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das kostet ___ Euro. (21)",
      questionAr: "هذا يكلف 21 يورو.",
      options: ["einundzwanzig", "einsundzwanzig", "zwanzigeins", "einzwanzig"],
      correctIndex: 0,
      explanation: "21 = einundzwanzig (واحد وعشرون) — eins تفقد s.",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر جمع الكلمة الصحيحة:",
      questionDe: "der Apfel → die ___",
      options: ["Äpfel", "Apfels", "Äpfels", "Apfel"],
      correctIndex: 0,
      explanation: "Apfel → Äpfel (Umlaut فقط، بدون إضافة).",
      errorType: "plural",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل المفرد بجمعه:",
      pairs: [
        { left: "der Tisch", right: "die Tische" },
        { left: "die Banane", right: "die Bananen" },
        { left: "das Buch", right: "die Bücher" },
        { left: "das Auto", right: "die Autos" },
      ],
      explanation: "أنماط الجمع: -e، -en، -er (مع Umlaut)، -s.",
      errorType: "plural",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["kostet", "Das", "fünf", "Euro", "."],
      correctSentence: "Das kostet fünf Euro.",
      explanation: "Das + kostet (V2) + fünf Euro.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich kaufe zwei Apfel.",
      wrongWord: "Apfel",
      correctWord: "Äpfel",
      options: ["Äpfel", "Apfels", "Apfelen", "Äpfelen"],
      explanation: "بعد zwei يأتي الجمع: zwei Äpfel.",
      errorType: "plural",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالرقم الصحيح كتابةً:",
      template: "Die Banane kostet ___ (2) Euro. Der Käse kostet ___ (5) Euro.",
      blanks: [
        { correct: "zwei", options: ["zwei", "zwo", "drei"] },
        { correct: "fünf", options: ["fünf", "vier", "sechs"] },
      ],
      explanation: "2 = zwei، 5 = fünf.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال عن السعر:",
      prompt: "Das Brot. → (اسأل: بكم الخبز؟)",
      acceptedAnswers: ["Was kostet das Brot", "Was kostet das Brot?"],
      sampleAnswer: "Was kostet das Brot?",
      explanation: "سؤال السعر: Was kostet + الاسم.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "billig / teuer",
      questionAr: "ما معنى الكلمتين؟",
      options: ["رخيص / غالٍ", "جديد / قديم", "كبير / صغير", "سريع / بطيء"],
      correctIndex: 0,
      explanation: "billig = رخيص، teuer = غالٍ. من أشهر كلمات التسوق.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Die Bücher ist neu.",
      wrongWord: "ist",
      correctWord: "sind",
      options: ["sind", "sein", "bist", "ist"],
      explanation: "الكتاب الجمع die Bücher → فعل الجمع sind: Die Bücher sind neu.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich nehme den Käse und das Brot.",
      explanation: "سآخذ الجبن والخبز — Ich nehme + النصب: den Käse (مذكر).",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "einsundzwanzig", right: "einundzwanzig", whyAr: "eins تفقد s عند التركيب: einundzwanzig." },
      { wrong: "zwei Apfel (مفرد بعد رقم)", right: "zwei Äpfel", whyAr: "بعد 2+ يأتي الجمع دائماً." },
      { wrong: "die Buchs", right: "die Bücher", whyAr: "Buch من نمط -er مع Umlaut: Bücher." },
    ],
    eselsbruecken: [
      "«واحد-و-عشرون مثل العربية تماماً»: ein+und+zwanzig = 21.",
      "«الجمع دائماً die»: مهما كان جنس المفرد، الجمع يبدأ بـ die.",
    ],
    culturalNote: {
      title: "الأسواق الأسبوعية (Wochenmarkt)",
      content:
        "في كل مدينة ألمانية سوق أسبوعي صباحي (غالباً السبت): خضار وفواكه طازجة من المزارعين. العبارة الشائعة: «Ein Kilo Äpfel, bitte!» — والألمان يدفعون غالباً نقداً (bar) في الأسواق، بينما المتاجر الكبرى تقبل البطاقات.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الرقم الصحيح كتابةً:",
      questionDe: "33 = ___",
      options: ["dreiunddreißig", "dreißigdrei", "dreiunddrei", "dreiunddreißig"],
      correctIndex: 0,
      explanation: "33 = dreiunddreißig (ثلاثة وثلاثون).",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر جمع الكلمة:",
      questionDe: "das Zimmer → die ___",
      options: ["Zimmer", "Zimmers", "Zimmern", "Zimmeres"],
      correctIndex: 0,
      explanation: "Zimmer لا يتغير في الجمع: die Zimmer.",
      errorType: "plural",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["drei", "Ich", "kaufe", "Äpfel", "."],
      correctSentence: "Ich kaufe drei Äpfel.",
      explanation: "Ich + kaufe (V2) + drei Äpfel (جمع).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Das kostet fünfzehn Euro, das ist sehr teuer!",
      wrongWord: "teuer",
      correctWord: "billig",
      options: ["billig", "teuer", "neu", "gut"],
      explanation: "خمسة عشر يورو رخيص (billig) وليس غالياً (teuer) — السياق يحدد!",
      errorType: "vocabulary",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الجمع الصحيح:",
      template: "Zwei ___ (Apfel) und drei ___ (Banane), bitte!",
      blanks: [
        { correct: "Äpfel", options: ["Äpfel", "Apfels", "Apfelen"] },
        { correct: "Bananen", options: ["Bananen", "Bana", "Bananens"] },
      ],
      explanation: "Apfel → Äpfel (Umlaut)، Banane → Bananen (-n).",
      errorType: "plural",
    },
  ],

  flashcards: [
    { id: "fc1", de: "kaufen", ar: "يشتري", example: "Ich kaufe ein Brot.", exampleAr: "أشتري خبزاً.", level: "A1" },
    { id: "fc2", de: "kosten", ar: "يكلف", example: "Was kostet das?", exampleAr: "بكم هذا؟", level: "A1" },
    { id: "fc3", de: "der Euro", ar: "اليورو", example: "Das macht zehn Euro.", exampleAr: "المجموع عشرة يورو.", level: "A1" },
    { id: "fc4", de: "billig / teuer", ar: "رخيص / غالٍ", example: "Das ist sehr billig.", exampleAr: "هذا رخيص جداً.", level: "A1" },
    { id: "fc5", de: "die Zahl / zählen", ar: "الرقم / يعدّ", example: "Ich kann bis 1000 zählen.", exampleAr: "أستطيع العد حتى 1000.", level: "A1" },
    { id: "fc6", de: "der Plural", ar: "الجمع", example: "Äpfel ist der Plural von Apfel.", exampleAr: "Äpfel جمع Apfel.", level: "A1" },
    { id: "fc7", de: "das Kilo", ar: "الكيلوغرام", example: "Ein Kilo Äpfel, bitte!", exampleAr: "كيلو تفاح من فضلك!", level: "A1" },
    { id: "fc8", de: "Ich nehme …", ar: "سآخذ… (عند الشراء)", example: "Ich nehme den Käse.", exampleAr: "سآخذ الجبن.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-07-1", type: "simplify-announcement",
      titleAr: "بسّط إعلان تخفيضات بالعربية",
      sourceDe: "Sommer-Sale! Alle Kleider 30% reduziert. Schuhe: 2 Paare zum Preis von 1. Nur diese Woche!",
      taskAr: "انقل الإعلان بالعربية لصديق: التخفيض، البضائع، والعرض الخاص.",
      modelAnswerAr: "«تخفيضات الصيف! كل الفساتين بخصم 30%. الأحذية: زوجان بسعر واحد. هذا الأسبوع فقط!»",
      keyPointsAr: ["نقلت نسبة التخفيض (30%)", "ذكرت عرض الأحذية (2 بسعر 1)", "نقلت المدة (هذا الأسبوع)"],
    },
  ],
      interaction: [
    {
      id: "int-a1-07-1",
      scenarioAr: "في متجر ملابس — تسأل عن مقاس وسعر.",
      scenarioDe: "Im Kleidungsgeschäft — du fragst nach Größe und Preis.",
      strategyAr: "الاستراتيجية: السؤال عن المقاس واللون والسعر بلطف.",
      rounds: [
        {
          speakerDe: "Kann ich Ihnen helfen?",
          speakerAr: "هل يمكنني مساعدتك؟",
          options: [
            { de: "Ja, ich suche ein Hemd in Größe M.", ar: "نعم، أبحث عن قميص مقاس M.", best: true, replyDe: "Welche Farbe möchten Sie?", replyAr: "ما اللون الذي تريده؟" },
            { de: "Nein, ich suche nichts.", ar: "لا، لا أبحث عن شيء.", best: false, replyDe: "Okay, dann schauen Sie sich in Ruhe um.", replyAr: "حسناً، تجول في المتجر بهدوء." },
          ],
        },
        {
          speakerDe: "Welche Farbe möchten Sie?",
          speakerAr: "ما اللون الذي تريده؟",
          options: [
            { de: "Blau, bitte. Was kostet das Hemd?", ar: "أزرق من فضلك. كم سعر القميص؟", best: true, replyDe: "25 Euro. Sie haben 30% Rabatt.", replyAr: "25 يورو. لديك خصم 30%." },
            { de: "Ich möchte die Farbe kaufen.", ar: "أريد شراء اللون.", best: false, replyDe: "Die Farbe kann man nicht kaufen, nur das Hemd.", replyAr: "اللون لا يُشترى، فقط القميص." },
          ],
        },
      ],
    },
  ],

};