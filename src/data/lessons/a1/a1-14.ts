import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-14: الأرقام والهاتف والعناوين
 * — سدّ فجوة أساسية في منهج A1: الأرقام حتى 100، أرقام الهاتف،
 * فهم العناوين وقراءة الأرقام بثقة في المواقف اليومية —
 */
export const lessonA114: Lesson = {
  id: "a1-14",
  unitId: "a1-07",
  level: "A1",
  order: 2,
  titleDe: "Zahlen, Telefon und Adressen",
  titleAr: "الأرقام والهاتف والعناوين",
  duration: 30,
  summary:
    "الأرقام من 0 حتى 100 بثقة، قراءة أرقام الهاتف (رقم برقم)، فهم العناوين (الشارع، الرقم، الرمز البريدي، المدينة)، والسؤال عن رقم الهاتف: Wie ist deine Telefonnummer?",

  lernziele: [
    { id: "z1", de: "Ich kann Zahlen von 0 bis 100 nennen und verstehen.", ar: "أن أذكر الأرقام من 0 حتى 100 وأفهمها." },
    { id: "z2", de: "Ich kann Telefonnummern buchstabieren.", ar: "أن أتهجّى أرقام الهاتف (رقماً برقم)." },
    { id: "z3", de: "Ich kann eine Adresse verstehen und nennen.", ar: "أن أفهم عنواناً وأذكره (الشارع والرقم والمدينة)." },
    { id: "z4", de: "Ich kann nach der Telefonnummer fragen.", ar: "أن أسأل عن رقم الهاتف: Wie ist deine Telefonnummer?" },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "تخيّل أن شخصاً ألمانياً أعطاك رقم هاتفه بسرعة: «Null sieben eins fünf…» — هل تستطيع كتابته؟ الأرقام الألمانية لها ترتيب معكوس (einundzwanzig = واحد وعشرون) — لاحظ الفرق!",
    motivatingQuestionDe: "Wie liest man die Zahl 21 auf Deutsch?",
    contextAr:
      "الأرقام أساس كل موقف يومي: السعر، الهاتف، العنوان، العمر، الوقت. الألمانية تقرأ العدد من الآحاد إلى العشرات (einundzwanzig = 1-و-20) — عكس العربية في «واحد وعشرون» لكن بنفس الفكرة!",
    contextDe: "einundzwanzig, zweiunddreißig, dreiundvierzig …",
    connectionToPreviousAr: "في درس التسوق تعلمت الأرقام حتى 1000 — هنا نثبّتها ونستخدمها في الهاتف والعناوين.",
    activateVocabulary: [
      { de: "die Zahl", ar: "الرقم" },
      { de: "die Telefonnummer", ar: "رقم الهاتف" },
      { de: "die Adresse", ar: "العنوان" },
      { de: "die Straße", ar: "الشارع" },
      { de: "die Postleitzahl", ar: "الرمز البريدي" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-07): كيف تقرأ السعر؟",
      questionDe: "Was kostet das? — 2,50 €",
      questionAr: "كم يكلف هذا؟ — 2,50 يورو",
      options: ["zwei Euro fünfzig", "zwei fünfzig Euro", "zwei Komma fünfzig", "fünfzig zwei Euro"],
      correctIndex: 0,
      explanation: "قراءة السعر: zwei Euro fünfzig (من درس a1-07 التسوق).",
      errorType: "spelling",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-09): متى الموعد؟",
      questionDe: "Am Montag um neun Uhr — wann ist das?",
      questionAr: "الاثنين الساعة التاسعة — متى ذلك؟",
      options: ["Am Montag um 9 Uhr", "Am Freitag um 9 Uhr", "Am Montag um 10 Uhr", "Am Dienstag um 9 Uhr"],
      correctIndex: 0,
      explanation: "neun = 9 (من درس a1-09 المواعيد والتقويم).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية: أكمل العدد (من a1-07)",
      template: "13 = ___",
      blanks: [{ correct: "dreizehn", options: ["dreizehn", "dreißig", "drei zehn", "zehn drei"] }],
      explanation: "13 = dreizehn (ثلاثة عشر) — لا تخلط مع 30 = dreißig.",
      errorType: "vocabulary",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "الأرقام من 0 حتى 100 — البنية المعكوسة",
      titleDe: "Zahlen von 0 bis 100",
      explanationAr:
        "الأرقام 0-12 أساسية يجب حفظها. من 13-19 نضيف zehn (عشرة): dreizehn (13) = drei + zehn. من 21-99 نقرأ الآحاد أولاً ثم und (و) ثم العشرات: einundzwanzig (21) = واحد-و-عشرون. لاحظ: العشرات الكاملة 20, 30... لها أسماء خاصة: zwanzig, dreißig, vierzig...",
      whyAr:
        "لماذا؟ لأن المستمع الألماني ينتظر سماع الآحاد أولاً: einundzwanzig تبدأ بـ eins. هذا يختلف عن العربية «واحد وعشرون» التي تبدأ بالعشرات — التدريب يمنع سوء الفهم عند سماع الأرقام في الهاتف والمتجر.",
      table: {
        title: "الأرقام الأساسية 0-20",
        columns: ["الرقم", "الألمانية", "الرقم", "الألمانية"],
        rows: [
          { label: "0", cells: ["null", "11", "elf"] },
          { label: "1", cells: ["eins", "12", "zwölf"] },
          { label: "2", cells: ["zwei", "13", "dreizehn"] },
          { label: "3", cells: ["drei", "14", "vierzehn"] },
          { label: "4", cells: ["vier", "15", "fünfzehn"] },
          { label: "5", cells: ["fünf", "16", "sechzehn"] },
          { label: "6", cells: ["sechs", "17", "siebzehn"] },
          { label: "7", cells: ["sieben", "18", "achtzehn"] },
          { label: "8", cells: ["acht", "19", "neunzehn"] },
          { label: "9", cells: ["neun", "20", "zwanzig"] },
          { label: "10", cells: ["zehn", "30", "dreißig"] },
        ],
      },
      examples: [
        { de: "21 = einundzwanzig", ar: "واحد وعشرون" },
        { de: "42 = zweiundvierzig", ar: "اثنان وأربعون" },
        { de: "67 = siebenundsechzig", ar: "سبعة وستون" },
        { de: "99 = neunundneunzig", ar: "تسعة وتسعون" },
      ],
      comparisonWithArabic:
        "العربية تقرأ العدد من العشرات إلى الآحاد «واحد وعشرون»، والألمانية من الآحاد إلى العشرات «einundzwanzig» — نفس الفكرة لكن بترتيب معكوس. النتيجة واحدة: 21.",
      eselsbruecke:
        "«الآحاد أولاً!» — einundzwanzig = 1 + und + 20. قل الرقم كأنك تعدّ: واحد-و-عشرون.",
      commonMistakes: [
        { wrong: "zwanzigein بدل einundzwanzig", right: "einundzwanzig", whyAr: "الترتيب الألماني: الآحاد أولاً ثم العشرات." },
      ],
    },
    {
      id: "t2",
      titleAr: "قراءة أرقام الهاتف — رقم برقم",
      titleDe: "Telefonnummern lesen",
      explanationAr:
        "رقم الهاتف يُقرأ رقماً برقم (وليس كعدد كامل): 0171 2345678 = null eins sieben eins – zwei drei vier fünf sechs sieben acht. الـ 0 تُنطق null، والتكرار يُقرأ أحياناً doppelt (مزدوج): 33 = doppelt drei.",
      whyAr:
        "لماذا؟ لأن الأرقام الألمانية الطويلة كأعداد كاملة مستحيلة القراءة — الهاتف يتطلب قراءة رقمية دقيقة. هذه مهارة حياتية تُختبر في Goethe A1 (فهم رسالة هاتفية).",
      table: {
        title: "أمثلة قراءة",
        columns: ["الرقم", "القراءة"],
        rows: [
          { label: "0171", cells: ["null eins sieben eins"] },
          { label: "030 5566", cells: ["null drei null – fünf fünf sechs sechs"] },
          { label: "0152 3344", cells: ["null eins fünf zwei – doppelt drei, doppelt vier"] },
        ],
      },
      examples: [
        { de: "Wie ist deine Telefonnummer?", ar: "ما رقم هاتفك؟" },
        { de: "Meine Nummer ist 0171 2345678.", ar: "رقمي هو 0171 2345678." },
        { de: "Ruf mich bitte an!", ar: "اتصل بي من فضلك!" },
      ],
      comparisonWithArabic:
        "العربية تقرأ الهاتف رقماً برقم أيضاً، لكن 0 تُنطق «صفر» بينما الألمانية null. والتكرار في الألمانية يُقرأ doppelt (مزدوج).",
      eselsbruecke:
        "«صفر = null» — تذكر null wie null (لا شيء) — الرقم 0 في الهاتف هو null.",
      commonMistakes: [
        { wrong: "قراءة 0 كـ «زيرو» الإنجليزية", right: "null", whyAr: "في ألمانيا 0 = null في الهاتف والأرقام." },
      ],
    },
    {
      id: "t3",
      titleAr: "العناوين — الشارع والرقم والمدينة",
      titleDe: "Adressen verstehen",
      explanationAr:
        "العنوان الألماني: الشارع (Straße) + رقم البيت (Hausnummer) + الرمز البريدي (Postleitzahl) + المدينة (Stadt): Musterstraße 12, 10115 Berlin. السؤال: Wo wohnst du? / Wie ist deine Adresse?",
      whyAr:
        "لماذا؟ لأن فهم العنوان ضروري للتسجيل (Anmeldung)، والطرود، والخرائط. الرمز البريدي الألماني مكون من 5 أرقام يبدأ غالباً بـ 1 (برلين) أو 2 (هامبورغ)...",
      table: {
        title: "أجزاء العنوان",
        columns: ["الجزء", "الألمانية", "مثال"],
        rows: [
          { label: "الشارع", cells: ["die Straße", "Musterstraße"] },
          { label: "رقم البيت", cells: ["die Hausnummer", "12"] },
          { label: "الرمز البريدي", cells: ["die Postleitzahl", "10115"] },
          { label: "المدينة", cells: ["die Stadt", "Berlin"] },
        ],
      },
      examples: [
        { de: "Wo wohnst du?", ar: "أين تسكن؟" },
        { de: "Ich wohne in der Musterstraße 12, in Berlin.", ar: "أسكن في شارع موستر 12 في برلين." },
        { de: "Wie ist deine Adresse?", ar: "ما عنوانك؟" },
      ],
      comparisonWithArabic:
        "ترتيب العنوان: ألمانيا تضع الشارع ثم الرقم (Musterstraße 12) مثل العربية تماماً، لكن الرمز البريدي يأتي قبل المدينة (10115 Berlin).",
      eselsbruecke:
        "«الشارع-الرقم-الرمز-المدينة» — تخيّل مغلفاً: أولاً الشارع ثم البيت ثم الرمز ثم المدينة.",
      commonMistakes: [
        { wrong: "رقم البيت قبل الشارع (12 Musterstraße)", right: "Musterstraße 12", whyAr: "الترتيب الألماني: الشارع ثم الرقم." },
      ],
    },
  ],

  listening: {
    items: [
      {
        id: "ls-a1-14-1",
        title: "رسالة هاتفية من العيادة",
        lines: [
          { speaker: "المسجلة", de: "Guten Tag, Herr Ali. Hier ist die Praxis von Dr. Weber.", ar: "نهارك سعيد سيد علي. هنا عيادة د. فيبر." },
          { speaker: "المسجلة", de: "Ihr Termin ist am Dienstag um 15 Uhr.", ar: "موعدك يوم الثلاثاء الساعة 15." },
          { speaker: "المسجلة", de: "Bitte rufen Sie uns an: 030 55 66 77.", ar: "من فضلك اتصل بنا: 030 55 66 77." },
        ],
      },
    ],
    questions: [
      {
        type: "multiple-choice",
        id: "lsq-a1-14-1",
        instructionAr: "استمع واختر الإجابة الصحيحة",
        itemId: "ls-a1-14-1",
        questionDe: "Wann ist der Termin?",
        questionAr: "متى الموعد؟",
        options: ["Am Dienstag um 15 Uhr", "Am Montag um 9 Uhr", "Am Freitag"],
        correctIndex: 0,
        errorType: "grammar",
        explanation: "المسجلة قالت: am Dienstag um 15 Uhr.",
      },
      {
        type: "multiple-choice",
        id: "lsq-a1-14-2",
        instructionAr: "استمع واختر الإجابة الصحيحة",
        itemId: "ls-a1-14-1",
        questionDe: "Wie ist die Telefonnummer?",
        questionAr: "ما رقم الهاتف؟",
        options: ["030 55 66 77", "030 66 55 77", "0152 55 66 77"],
        correctIndex: 0,
        errorType: "spelling",
        explanation: "الرقم: 030 55 66 77 (null drei null).",
      },
    ],
  },

  pronunciation: {
    id: "pron-a1-14",
    title: "الأصوات في الأرقام — z وtz وie",
    items: [
      { de: "zwei", ar: "اثنان", note: "z تُنطق «تس»: تسڤاي" },
      { de: "zehn", ar: "عشرة", note: "تسـِين" },
      { de: "zwölf", ar: "اثنا عشر", note: "تسڤولف" },
      { de: "zwanzig", ar: "عشرون", note: "تسڤانتسيش" },
      { de: "dreizehn", ar: "ثلاثة عشر", note: "درايتسِين" },
      { de: "sechzehn", ar: "ستة عشر", note: "زِخْتسِين — ch هنا [ç]" },
      { de: "siebzehn", ar: "سبعة عشر", note: "زِيپْتسِين" },
      { de: "vierzehn", ar: "أربعة عشر", note: "فِيرْتسِين" },
    ],
    tip: "قاعدة النطق: z = «تس» دائماً في بداية الكلمة. والرقم 16 (sechzehn) تُنطق ch فيه [ç] (مثل الشين الهمسية) وليس [x].",
  },

  writing: [
    {
      id: "wr-a1-14-1",
      type: "transformation",
      instructionAr: "اكتب رقم الهاتف بالألمانية (كلمات): 0171 2345678",
      prompt: "Schreiben Sie die Nummer auf Deutsch: 0171 2345678",
      acceptedAnswers: ["null eins sieben eins zwei drei vier fünf sechs sieben acht"],
      sampleAnswer: "null eins sieben eins zwei drei vier fünf sechs sieben acht",
      hint: "اقرأ كل رقم على حدة، و0 = null.",
      explanation: "قراءة الهاتف رقم برقم: null eins sieben eins ...",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "ex-a1-14-1",
      type: "fill-blank",
      instructionAr: "أكمل العدد الألماني الصحيح",
      template: "23 = ___ (ثلاثة وعشرون)",
      blanks: [{ correct: "dreiundzwanzig", options: ["dreiundzwanzig", "zwanzigdrei", "dreißigzwei"] }],
      explanation: "23 = drei (3) + und + zwanzig (20) = dreiundzwanzig.",
      errorType: "word-order",
    },
    {
      id: "ex-a1-14-2",
      type: "fill-blank",
      instructionAr: "أكمل العدد: 47",
      template: "47 = ___ (سبعة وأربعون)",
      blanks: [{ correct: "siebenundvierzig", options: ["siebenundvierzig", "vierzugsieben", "siebenvierzig"] }],
      explanation: "47 = sieben (7) + und + vierzig (40).",
      errorType: "word-order",
    },
    {
      id: "ex-a1-14-3",
      type: "fill-blank",
      instructionAr: "أكمل: 68",
      template: "68 = ___ (ثمانية وستون)",
      blanks: [{ correct: "achtundsechzig", options: ["achtundsechzig", "sechzigacht", "achtsechzig"] }],
      explanation: "68 = acht (8) + und + sechzig (60).",
      errorType: "word-order",
    },
    {
      id: "ex-a1-14-4",
      type: "multiple-choice",
      instructionAr: "اختر القراءة الصحيحة للرقم: 0152",
      questionDe: "Wie liest man 0152?",
      options: ["null eins fünf zwei", "einhundertfünfzigzwei", "fünfzehn zwei"],
      correctIndex: 0,
      explanation: "قراءة الهاتف رقماً برقم: null eins fünf zwei.",
      errorType: "spelling",
    },
    {
      id: "ex-a1-14-5",
      type: "multiple-choice",
      instructionAr: "ما معنى «Wie ist deine Adresse?»",
      questionDe: "Was bedeutet „Wie ist deine Adresse?“?",
      options: ["ما عنوانك؟", "ما اسمك؟", "كم عمرك؟"],
      correctIndex: 0,
      explanation: "die Adresse = العنوان.",
      errorType: "vocabulary",
    },
    {
      id: "ex-a1-14-6",
      type: "multiple-choice",
      instructionAr: "اختر القراءة الصحيحة للعدد: 87",
      questionDe: "Wie liest man die Zahl 87?",
      options: ["siebenundachtzig", "achtzigsieben", "achtundsiebzig"],
      correctIndex: 0,
      explanation: "87 = sieben (7) + und + achtzig (80) = siebenundachtzig.",
      errorType: "word-order",
    },
    {
      id: "ex-a1-14-7",
      type: "multiple-choice",
      instructionAr: "ما القراءة الصحيحة للرمز البريدي؟",
      questionDe: "Wie liest man die Postleitzahl 10115?",
      options: ["eins null eins eins fünf", "zehntausendeinhundertfünfzehn", "eins hundert fünfzehn"],
      correctIndex: 0,
      explanation: "الأرقام في الرمز البريدي تُقرأ رقماً برقم: eins null eins eins fünf.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich habe 21 Jahre (بدون فعل في جملة العمر خطأ مفهومي — الألمانية تحتاج فعل)",
        right: "Ich bin 21 Jahre alt.",
        whyAr: "العمر بالألمانية مع sein: Ich bin ... Jahre alt (أنا عمري...).",
      },
      {
        wrong: "قراءة 30 كـ drei-zehn (13) بدل dreißig",
        right: "30 = dreißig (دريسيش)",
        whyAr: "التمييز: 13 = dreizehn، 30 = dreißig — فرق حاسم في الأسعار والمواعيد.",
      },
    ],
    eselsbruecken: [
      "«عكس العربية في الوحدات: الآحاد أولاً ثم العشرات» — einundzwanzig = 1-و-20.",
      "«الهاتف: رقماً برقم» — لا تحاول قراءة الرقم كعدد كامل أبداً.",
      "«الثالثون = dreißig بلا z» — ثلاثون خاصة (dreißig) بينما 40+ تنتهي بـ -zig.",
    ],
    culturalNote: {
      title: "الأرقام في ألمانيا",
      content: "في ألمانيا تُكتب العناوين: الشارع ثم الرقم (Musterstraße 12). أرقام الهاتف المحمول تبدأ بـ 015/016/017. ولاحظ: الفاصلة العشرية في الأسعار تُقرأ «komma»: 2,50 € = zwei fünfzig (أو zwei Euro fünfzig).",
    },
  },

  miniTest: [
    {
      id: "mt-a1-14-1",
      type: "multiple-choice",
      instructionAr: "اختر القراءة الصحيحة: 0172 8899",
      questionDe: "Wie liest man 0172 8899?",
      options: ["null eins sieben zwei – doppelt acht, doppelt neun", "einhundertzweiundsiebzig", "siebzehn zwei acht neun"],
      correctIndex: 0,
      explanation: "القراءة رقمية: null eins sieben zwei، و88 = doppelt acht.",
      errorType: "spelling",
    },
    {
      id: "mt-a1-14-2",
      type: "multiple-choice",
      instructionAr: "ما معنى «die Postleitzahl»؟",
      questionDe: "Was bedeutet „die Postleitzahl“?",
      options: ["الرمز البريدي", "رقم الهاتف", "رقم البيت"],
      correctIndex: 0,
      explanation: "die Postleitzahl = الرمز البريدي (5 أرقام).",
      errorType: "vocabulary",
    },
    {
      id: "mt-a1-14-3",
      type: "fill-blank",
      instructionAr: "أكمل: 56",
      template: "56 = ___ (ستة وخمسون)",
      blanks: [{ correct: "sechsundfünfzig", options: ["sechsundfünfzig", "fünfzigsechs", "sechsfünfzig"] }],
      explanation: "56 = sechs + und + fünfzig.",
      errorType: "word-order",
    },
  ],

  flashcards: [
    { id: "fc-a1-14-1", de: "die Zahl", ar: "الرقم", example: "Die Zahl 21 ist einundzwanzig.", exampleAr: "الرقم 21 هو واحد وعشرون.", level: "A1" },
    { id: "fc-a1-14-2", de: "die Telefonnummer", ar: "رقم الهاتف", example: "Wie ist deine Telefonnummer?", exampleAr: "ما رقم هاتفك؟", level: "A1" },
    { id: "fc-a1-14-3", de: "die Adresse", ar: "العنوان", example: "Meine Adresse ist Musterstraße 12.", exampleAr: "عنواني شارع موستر 12.", level: "A1" },
    { id: "fc-a1-14-4", de: "die Straße", ar: "الشارع", example: "Ich wohne in der Hauptstraße.", exampleAr: "أسكن في الشارع الرئيسي.", level: "A1" },
    { id: "fc-a1-14-5", de: "die Postleitzahl", ar: "الرمز البريدي", example: "Die Postleitzahl von Berlin ist 10xxx.", exampleAr: "الرمز البريدي لبرلين يبدأ بـ 10.", level: "A1" },
    { id: "fc-a1-14-6", de: "einundzwanzig", ar: "واحد وعشرون", example: "21", exampleAr: "الآحاد أولاً ثم العشرات", level: "A1" },
    { id: "fc-a1-14-7", de: "doppelt", ar: "مزدوج (عند تكرار الرقم)", example: "33 = doppelt drei", exampleAr: "33 = ثلاثة مزدوجة", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل ═══ */
  mediation: [
    {
      id: "med-a1-14-1",
      type: "relay-instructions",
      titleAr: "انقل عنواناً ألمانياً بالعربية لسائق توصيل",
      sourceDe: "Lieferadresse: Bahnhofstraße 45, 50667 Köln.",
      taskAr: "أخبر سائق التوصيل بالعربية بالعنوان: اسم الشارع ورقم البيت والمدينة — دون تغيير أي جزء.",
      modelAnswerAr: "«عنوان التوصيل: شارع بانهوف رقم 45، كولونيا (الرمز البريدي 50667).»",
      keyPointsAr: ["ذكرت الشارع (Bahnhofstraße)", "ذكرت رقم البيت (45)", "ذكرت المدينة (كولونيا)"],
    },
  ],
  interaction: [
    {
      id: "int-a1-14-1",
      scenarioAr: "صديق ألماني جديد يسألك عن رقم هاتفك وعنوانك.",
      scenarioDe: "Ein neuer deutscher Freund fragt nach deiner Nummer und Adresse.",
      strategyAr: "الاستراتيجية: إعطاء رقم الهاتف رقماً برقم وذكر العنوان بوضوح.",
      rounds: [
        {
          speakerDe: "Kannst du mir deine Telefonnummer geben?",
          speakerAr: "هل يمكنك إعطائي رقم هاتفك؟",
          options: [
            { de: "Ja, natürlich! Meine Nummer ist null eins fünf zwei, vier drei zwei eins.",
              ar: "نعم بالطبع! رقمي هو 0152 4321.", best: true, replyDe: "Danke! Und wo wohnst du?", replyAr: "شكراً! وأين تسكن؟" },
            { de: "Ich habe keine Nummer.", ar: "لا أملك رقماً.", best: false, replyDe: "Oh, wirklich? Jeder hat heutzutage ein Handy!", replyAr: "أوه حقاً؟ كل شخص يملك هاتفاً هذه الأيام!" },
          ],
        },
        {
          speakerDe: "Wo wohnst du?",
          speakerAr: "أين تسكن؟",
          options: [
            { de: "Ich wohne in der Musterstraße 12, in Berlin.",
              ar: "أسكن في شارع موستر 12 في برلين.", best: true, replyDe: "Ah, Musterstraße! Das ist im Zentrum, oder?", replyAr: "آه، شارع موستر! ذلك في المركز، أليس كذلك؟" },
            { de: "Ich wohne in einer Wohnung.", ar: "أسكن في شقة.", best: false, replyDe: "Das ist schön, aber wo genau?", replyAr: "جميل، لكن أين بالضبط؟" },
          ],
        },
        {
          speakerDe: "Wie ist deine Postleitzahl?",
          speakerAr: "ما رمزك البريدي؟",
          options: [
            { de: "Meine Postleitzahl ist 10115.",
              ar: "رمزي البريدي هو 10115.", best: true, replyDe: "Danke! Ich schreibe dir bald eine Karte!", replyAr: "شكراً! سأكتب لك بطاقة قريباً!" },
            { de: "Ich weiß nicht.", ar: "لا أعرف.", best: false, replyDe: "Kein Problem, du kannst sie später in der Post fragen.", replyAr: "لا مشكلة، يمكنك سؤالها لاحقاً في مكتب البريد." },
          ],
        },
      ],
    },
  ],
};
