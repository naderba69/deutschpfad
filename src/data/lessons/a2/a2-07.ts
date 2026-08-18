import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-07: البنك والمال — es gibt + Akkusativ + ضمائر النصب والجر
 */
export const lessonA207: Lesson = {
  id: "a2-07",
  unitId: "a2-07",
  level: "A2",
  order: 1,
  titleDe: "Bank und Geld",
  titleAr: "البنك والمال",
  duration: 35,
  summary:
    "معاملات البنك، es gibt + Akkusativ (يوجد)، ضمائر النصب والجر (mich/dich، mir/dir)، وطرق الدفع.",

  lernziele: [
    { id: "z1", de: "Ich kann Bankgespräche führen.", ar: "أن أجري معاملات بنكية: فتح حساب، إيداع، تحويل." },
    { id: "z2", de: "Ich kann es gibt richtig benutzen.", ar: "أن أستخدم es gibt + Akkusativ (يوجد/هناك)." },
    { id: "z3", de: "Ich kenne die Akkusativ- und Dativpronomen.", ar: "أن أتقن ضمائر النصب (mich/dich) والجر (mir/dir)." },
      { id: "z4", de: "Ich kann am Bankschalter einfache Fragen beantworten.", ar: "أن أجيب عن أسئلة بسيطة في البنك." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A1 تعلمت: das ist ein Buch (هذا كتاب). لكن كيف تقول «يوجد كتاب على الطاولة»؟ الجملة الألمانية المفضلة: es gibt... ولاحظ المفاجأة: بعد es gibt يأتي الاسم بالنصب (Akkusativ)! لماذا؟ سؤال ممتاز — ستجده في هذا الدرس.",
    motivatingQuestionDe: "Wie kann ich ein Konto eröffnen?",
    contextAr:
      "البنك الألماني: فتح حساب، es gibt (يوجد)، وضمائر النصب والجر التي ستحتاجها في كل جملة: Ich sehe dich (أراك)، Ich helfe dir (أساعدك).",
    contextDe: "Ich möchte ein Konto eröffnen.",
    connectionToPreviousAr: "تتذكر النصب (einen Apfel) والجر المكاني (auf dem Tisch). اليوم: ضمائر تعوض الأسماء — وحالة خاصة: es gibt.",
    activateVocabulary: [
      { de: "das Konto", ar: "الحساب" },
      { de: "das Geld", ar: "المال" },
      { de: "überweisen", ar: "يحوّل (مالاً)" },
      { de: "die Karte", ar: "البطاقة" },
      { de: "bar", ar: "نقداً" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الصيغة الصحيحة (النصب):",
      questionDe: "Ich kaufe ___ Kaffee.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation: "النصب المذكر: einen (درس التسوق).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الترجمة:",
      questionDe: "das Geld",
      options: ["المال", "الذهب", "البطاقة", "الحساب"],
      correctIndex: 0,
      explanation: "das Geld = المال (درس التسوق).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل الجمع:",
      template: "der Euro → die ___",
      blanks: [
        { correct: "Euro", options: ["Euro", "Euros", "Euroen"] },
      ],
      explanation: "Euro لا يتغير في الجمع (مثل Zimmer).",
      errorType: "plural",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "es gibt + Akkusativ (يوجد/هناك)",
      titleDe: "„Es gibt“ + Akkusativ",
      explanationAr:
        "es gibt = يوجد/هناك (للتعبير عن وجود شيء). التركيب الإلزامي: es gibt + Akkusativ: Es gibt einen Bahnhof in der Stadt (يوجد محطة في المدينة). لا يتغير أبداً (es gibt دائماً). للسؤال: Gibt es...? وللنفي: Es gibt keinen/keine...",
      whyAr:
        "لماذا Akkusativ بعد es gibt؟ لأن الجملة تعني حرفياً «هو يعطي شيئاً»: es (هو) + gibt (يعطي) + مفعولاً. أي أن es «يعطي» الوجود للمفعول — والنصب هو حالة المفعول به. منطق لغوي جميل!",
      table: {
        title: "es gibt في الحالات",
        columns: ["الحالة", "الألمانية", "العربية"],
        rows: [
          { label: "إيجاب", cells: ["Es gibt einen Park.", "يوجد منتزه."] },
          { label: "سؤال", cells: ["Gibt es hier eine Bank?", "هل يوجد بنك هنا؟"] },
          { label: "نفي", cells: ["Es gibt keine Bank.", "لا يوجد بنك."] },
          { label: "نفي مذكر", cells: ["Es gibt keinen Automaten.", "لا يوجد صراف آلي."] },
        ],
      },
      examples: [
        { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
        { de: "Gibt es hier einen Geldautomaten?", ar: "هل يوجد صراف آلي هنا؟" },
        { de: "Es gibt viele Geschäfte in der Stadt.", ar: "يوجد متاجر كثيرة في المدينة." },
        { de: "Es gibt keinen Automaten im Bahnhof.", ar: "لا يوجد صراف في المحطة." },
        { de: "Es gibt gute Restaurants hier.", ar: "يوجد مطاعم جيدة هنا." },
      ],
      comparisonWithArabic:
        "«يوجد بنك» = Es gibt eine Bank. العربية تستخدم «يوجد/هناك»، والألمانية es gibt. والتشابه: كلاهما لا يتغير مع الزمن في هذا الاستخدام — es gibt ثابتة دائماً.",
      eselsbruecke:
        "«es gibt = هو يعطي»: تخيل es (هو) «يعطي» الوجود للشيء — الشيء يكون مفعولاً (نصباً): Es gibt einen Park.",
      commonMistakes: [
        { wrong: "Es gibt ein Bank.", right: "Es gibt eine Bank.", whyAr: "بعد es gibt: Akkusativ. eine (مؤنث نصب = نفس الرفع) لكن ein→einen للمذكر." },
        { wrong: "Es gibt einen Park أم es gibt der Park؟", right: "Es gibt einen Park (نصب)", whyAr: "النصب: der→den→einen." },
        { wrong: "Es gibt keinen Automat (بلا نهاية)", right: "Es gibt keinen Automaten.", whyAr: "المذكر النصب: keinen. (n-Deklination: Automat→Automaten — درس B1)." },
      ],
      relatedRuleComparison: {
        title: "es gibt أم es ist؟",
        content: "es gibt = يوجد (لأول ذكر): Es gibt einen Park. es ist = هو/هي (لشيء معروف): Der Park ist schön. الأول تقديم، الثاني وصف.",
      },
    },
    {
      id: "t2",
      titleAr: "ضمائر النصب والجر (Akkusativ/Dativ Pronomen)",
      titleDe: "Akkusativ- und Dativpronomen: mich, dich, mir, dir",
      explanationAr:
        "الضمائر تتغير حسب الحالة: Nominativ: ich, du, er... Akkusativ: mich (إياي)، dich (إياك)، ihn, sie, es, uns, euch, sie. Dativ: mir (لي)، dir (لك)، ihm, ihr, ihm, uns, euch, ihnen. الأفعال مع النصب: sehen, lieben, kennen. مع الجر: helfen, gefallen, gehören, danken, antworten.",
      whyAr:
        "لماذا ضميران لكل شخص؟ لأن الفعل يحدد: «يرى» يطلب مفعولاً به (نصب): Ich sehe dich. «يساعد» يطلب جراً: Ich helfe dir. هذا مثل العربية: «رأيتُكَ» (نصب) مقابل «أعطيتُكَ» — لكن الألمانية تجعلها ظاهرة منضبطة.",
      table: {
        title: "الضمائر الثلاث",
        columns: ["الشخص", "Nominativ", "Akkusativ", "Dativ"],
        rows: [
          { label: "أنا", cells: ["ich", "mich", "mir"] },
          { label: "أنتَ", cells: ["du", "dich", "dir"] },
          { label: "هو", cells: ["er", "ihn", "ihm"] },
          { label: "هي", cells: ["sie", "sie", "ihr"] },
          { label: "نحن", cells: ["wir", "uns", "uns"] },
          { label: "أنتم", cells: ["ihr", "euch", "euch"] },
        ],
      },
      examples: [
        { de: "Ich sehe dich jeden Tag.", ar: "أراك كل يوم." },
        { de: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟" },
        { de: "Das Buch gehört ihm.", ar: "الكتاب ملكه." },
        { de: "Ich danke dir für alles.", ar: "أشكرك على كل شيء." },
        { de: "Sie liebt mich.", ar: "هي تحبني." },
      ],
      comparisonWithArabic:
        "العربية: «أراك» (ياء المخاطبة نصب) و«لك» (جر). الألمانية: dich (نصب) وdir (جر). نفس المبدأ — لكن علينا حفظ جدول صغير. التطابق: mir/dir أقرب إلى «لي/لك» في الاستخدام.",
      eselsbruecke:
        "«mich/dich للنصب (من أرى؟)، mir/dir للجر (لمن؟)» — اسأل نفسك السؤال قبل اختيار الضمير. و«helfen يساعد mir»: احفظ أفعال الجر كقائمة: helfen, gefallen, gehören, danken.",
      commonMistakes: [
        { wrong: "Kannst du mich helfen?", right: "Kannst du mir helfen?", whyAr: "helfen يأخذ Dativ: mir (وليس mich)." },
        { wrong: "Ich sehe mir (خلط)", right: "Ich sehe dich. (من أرى؟ → نصب)", whyAr: "الفعل sehen نصب: mich/dich." },
        { wrong: "Das Buch gehört ihn.", right: "Das Buch gehört ihm.", whyAr: "gehören (يخصّ) يأخذ Dativ: ihm." },
      ],
      relatedRuleComparison: {
        title: "أفعال Dativ الشائعة",
        content: "احفظها كعائلة: helfen (يساعد)، gefallen (يعجب)، gehören (يخصّ)، danken (يشكر)، antworten (يجيب)، gratulieren (يهنئ). كلها تأخذ Dativ.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "فتح حساب بنكي",
        lines: [
          { speaker: "Bankangestellte", de: "Guten Tag! Wie kann ich helfen?", ar: "نهارك سعيد! كيف أساعدك؟" },
          { speaker: "Sami", de: "Ich möchte ein Konto eröffnen.", ar: "أريد فتح حساب." },
          { speaker: "Bankangestellte", de: "Gern. Haben Sie Ihren Pass dabei?", ar: "بكل سرور. هل معك جواز سفرك؟" },
          { speaker: "Sami", de: "Ja, hier ist mein Pass.", ar: "نعم، ها هو جوازي." },
          { speaker: "Bankangestellte", de: "Danke. Es gibt zwei Kontomodelle: kostenlos und mit Kreditkarte.", ar: "شكراً. يوجد نموذجان للحساب: مجاني ومع بطاقة ائتمان." },
          { speaker: "Sami", de: "Ich möchte das kostenlose Modell, bitte.", ar: "أريد النموذج المجاني من فضلك." },
          { speaker: "Bankangestellte", de: "Sehr gut. Sie bekommen die Karte in einer Woche.", ar: "ممتاز. ستستلم البطاقة خلال أسبوع." },
        ],
      },
      {
        id: "l2",
        title: "في الصراف الآلي",
        lines: [
          { speaker: "Mona", de: "Ich brauche Geld. Gibt es hier einen Geldautomaten?", ar: "أحتاج مالاً. هل يوجد صراف آلي هنا؟" },
          { speaker: "Karim", de: "Ja, es gibt einen Automaten an der Bank.", ar: "نعم، يوجد صراف عند البنك." },
          { speaker: "Mona", de: "Kann ich mit meiner Karte Geld abheben?", ar: "هل يمكنني سحب المال ببطاقتي؟" },
          { speaker: "Karim", de: "Ja, natürlich. Aber hilf mir bitte zuerst!", ar: "نعم طبعاً. لكن ساعدني أولاً من فضلك!" },
          { speaker: "Mona", de: "Klar, ich helfe dir!", ar: "طبعاً، سأساعدك!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Sami machen?",
        questionAr: "ماذا يريد سامي أن يفعل؟",
        options: ["ein Konto eröffnen", "Geld überweisen", "eine Karte kaufen", "Geld abheben"],
        correctIndex: 0,
        explanation: "قال: Ich möchte ein Konto eröffnen — فتح حساب.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie viele Kontomodelle gibt es?",
        questionAr: "كم نموذج حساب يوجد؟",
        options: ["zwei", "drei", "eins", "vier"],
        correctIndex: 0,
        explanation: "قالت الموظفة: Es gibt zwei Kontomodelle — نموذجان.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist der Geldautomat?",
        questionAr: "أين الصراف الآلي؟",
        options: ["an der Bank", "am Bahnhof", "im Supermarkt", "in der Stadt"],
        correctIndex: 0,
        explanation: "قال كريم: Es gibt einen Automaten an der Bank.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات البنك: ie، ü، وck",
    items: [
      { de: "das Konto", ar: "الحساب", note: "o مفتوح: كونتوه" },
      { de: "das Geld", ar: "المال", note: "g = غ: غِلت" },
      { de: "überweisen", ar: "يحوّل", note: "ü + ei: أُوبِر-ڤايْزن" },
      { de: "der Geldautomat", ar: "الصراف الآلي", note: "au = آو: غِلت-آوتومات" },
      { de: "die Kreditkarte", ar: "بطاقة الائتمان", note: "d في المنتصف = د: كريديت-كارته" },
      { de: "abheben", ar: "يسحب (نقوداً)", note: "h يُنطق: آب-هيبن" },
    ],
    tip: "überweisen فيها ü ثم ei — صوتان صعبان معاً. قسّمها: أُوبِر + ڤايْزن. كرر ببطء.",
    shadowing: [
      { de: "Ich möchte ein Konto eröffnen.", ar: "أريد فتح حساب.", tip: "eröffnen = إر-أُوفنِن" },
      { de: "Es gibt einen Geldautomaten.", ar: "يوجد صراف آلي.", tip: "Geldautomat = غِلت-آوتومات" },
      { de: "Ich helfe dir.", ar: "أساعدك.", tip: "helfe = هِلفِه" },
      { de: "Das gehört mir.", ar: "هذا يخصني.", tip: "gehört = غِهُورت (ö)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب عن وجود مكان:",
      prompt: "اكتب: «يوجد بنك قريب» بالألمانية (es gibt)",
      acceptedAnswers: ["Es gibt eine Bank in der Nähe", "Es gibt eine Bank hier"],
      sampleAnswer: "Es gibt eine Bank in der Nähe.",
      explanation: "es gibt + Akkusativ: eine Bank.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير الصحيح (mich/mir/dich/dir):",
      template: "Ich sehe ___. (أنتَ) Kannst du ___ helfen? (أنا) Das Buch gehört ___. (هو)",
      blanks: [
        { correct: "dich", options: ["dich", "dir", "mich"] },
        { correct: "mir", options: ["mich", "mir", "dir"] },
        { correct: "ihm", options: ["ihn", "ihm", "ihr"] },
      ],
      explanation: "sehen → نصب (dich). helfen → جر (mir). gehören → جر (ihm).",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Kannst du mir bitte helfen?",
      explanation: "هل يمكنك مساعدتي من فضلك؟ — helfen يأخذ Dativ: mir.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Es gibt ___ Bank in der Nähe.",
      options: ["eine", "ein", "einen", "der"],
      correctIndex: 0,
      explanation: "es gibt + نصب مؤنث: eine Bank.",
      errorType: "case",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Es gibt ___ Automaten hier.",
      options: ["keinen", "kein", "keine", "nicht"],
      correctIndex: 0,
      explanation: "النفي مع المذكر النصب: keinen Automaten.",
      errorType: "negation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الضمير بمعناه:",
      pairs: [
        { left: "mich", right: "إياي (نصب)" },
        { left: "dich", right: "إياك (نصب)" },
        { left: "mir", right: "لي (جر)" },
        { left: "dir", right: "لك (جر)" },
      ],
      explanation: "أربعة ضمائر أساسية: mich/dich نصب، mir/dir جر.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["mir", "Kannst", "du", "helfen", "?"],
      correctSentence: "Kannst du mir helfen?",
      explanation: "هل يمكنك مساعدتي؟ — helfen + Dativ (mir).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Kannst du mich helfen?",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "dich", "ihn"],
      explanation: "helfen يأخذ Dativ: mir.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير الصحيح:",
      template: "Ich sehe ___. (هي) Ich danke ___. (أنتَ) Sie liebt ___. (أنا)",
      blanks: [
        { correct: "sie", options: ["sie", "ihr", "ihn"] },
        { correct: "dir", options: ["dich", "dir", "mich"] },
        { correct: "mich", options: ["mich", "mir", "dich"] },
      ],
      explanation: "sehen → sie (نصب). danken → dir (جر). lieben → mich (نصب).",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى سؤال es gibt:",
      prompt: "Es gibt einen Bankautomaten. → (سؤال)",
      acceptedAnswers: ["Gibt es einen Bankautomaten", "Gibt es einen Bankautomaten?"],
      sampleAnswer: "Gibt es einen Bankautomaten?",
      explanation: "السؤال: Gibt es + نصب؟",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "bar zahlen",
      questionAr: "ما معنى العبارة؟",
      options: ["يدفع نقداً", "يدفع بالبطاقة", "يحوّل مالاً", "يسحب نقوداً"],
      correctIndex: 0,
      explanation: "bar = نقداً: Ich zahle bar = أدفع نقداً.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Das Buch gehört ihn.",
      wrongWord: "ihn",
      correctWord: "ihm",
      options: ["ihm", "ihn", "ihr", "es"],
      explanation: "gehören (يخصّ) يأخذ Dativ: ihm.",
      errorType: "case",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich überweise das Geld auf dein Konto.",
      explanation: "أحوّل المال إلى حسابك — überweisen فعل منفصل.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Kannst du mich helfen?", right: "Kannst du mir helfen?", whyAr: "helfen يأخذ Dativ (mir)." },
      { wrong: "Es gibt ein Konto (بدون نصب)", right: "Es gibt ein Konto. (محايد نصب = ein)", whyAr: "المحايد لا يتغير في النصب — ein يبقى ein. (المذكر فقط ein→einen)." },
      { wrong: "bar = حانة! (شريط/بار)", right: "bar = نقداً (في سياق الدفع)", whyAr: "كلمة bar لها معنيان: نقداً و«حانة» (die Bar). السياق يحدد." },
    ],
    eselsbruecken: [
      "«es gibt = هو يعطي» → المفعول نصب: Es gibt einen Park.",
      "«mich/dich للنصب، mir/dir للجر» — اسأل: من أرى؟ (نصب) أم لمن؟ (جر).",
    ],
    culturalNote: {
      title: "البنوك الألمانية",
      content:
        "الألمان يفضلون النقد (Bargeld) أكثر من غيرهم في أوروبا! لكن البطاقات (EC-Karte / Girocard) شائعة جداً. عبارات مهمة: «Kartenzahlung möglich» (الدفع بالبطاقة ممكن)، و«keine Kartenzahlung» (لا نقبل البطاقة — في بعض الأكشاك). واحمل دائماً بعض النقود!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Es gibt ___ Park in der Stadt.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation: "es gibt + نصب مذكر: einen Park.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير الصحيح:",
      questionDe: "Kannst du ___ helfen? (أنا)",
      options: ["mir", "mich", "dich", "dir"],
      correctIndex: 0,
      explanation: "helfen يأخذ Dativ: mir.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Geld", "ein", "Es", "gibt", "hier", "Automat", "?"],
      correctSentence: "Gibt es hier einen Geldautomaten?",
      explanation: "هل يوجد صراف آلي هنا؟ — Gibt es + نصب.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich danke dich für alles.",
      wrongWord: "dich",
      correctWord: "dir",
      options: ["dir", "dich", "mich", "ihn"],
      explanation: "danken يأخذ Dativ: Ich danke dir.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير:",
      template: "Ich sehe ___. (أنتَ) Ich helfe ___. (أنتَ)",
      blanks: [
        { correct: "dich", options: ["dich", "dir", "mich"] },
        { correct: "dir", options: ["dich", "dir", "mich"] },
      ],
      explanation: "sehen → نصب (dich). helfen → جر (dir). نفس الشخص ضميران مختلفان!",
      errorType: "case",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Konto", ar: "الحساب (البنكي)", example: "Ich eröffne ein Konto.", exampleAr: "أفتح حساباً.", level: "A2" },
    { id: "fc2", de: "das Geld", ar: "المال", example: "Ich brauche Geld.", exampleAr: "أحتاج مالاً.", level: "A2" },
    { id: "fc3", de: "überweisen", ar: "يحوّل (مالاً)", example: "Ich überweise das Geld.", exampleAr: "أحوّل المال.", level: "A2" },
    { id: "fc4", de: "bar zahlen", ar: "يدفع نقداً", example: "Ich zahle bar.", exampleAr: "أدفع نقداً.", level: "A2" },
    { id: "fc5", de: "der Geldautomat", ar: "الصراف الآلي", example: "Wo ist der Geldautomat?", exampleAr: "أين الصراف الآلي؟", level: "A2" },
    { id: "fc6", de: "es gibt", ar: "يوجد (مع نصب)", example: "Es gibt eine Bank.", exampleAr: "يوجد بنك.", level: "A2" },
    { id: "fc7", de: "mich / dich / mir / dir", ar: "إياي / إياك / لي / لك", example: "Ich sehe dich. Ich helfe dir.", exampleAr: "أراك. أساعدك.", level: "A2" },
    { id: "fc8", de: "die Karte", ar: "البطاقة", example: "Ich zahle mit Karte.", exampleAr: "أدفع بالبطاقة.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-07-1", type: "simplify-announcement",
      titleAr: "ساعد شخصاً على فهم استمارة بنك ألمانية بالعربية",
      sourceDe: "Kontoeröffnung: Bitte füllen Sie das Formular aus. Sie brauchen: Personalausweis, Adresse und Steuernummer.",
      taskAr: "اشرح بالعربية ما يلزم لفتح حساب: النموذج، الوثائق المطلوبة.",
      modelAnswerAr: "«لفتح حساب: املأ النموذج. تحتاج: بطاقة الهوية، العنوان، ورقم الضريبة.»",
      keyPointsAr: ["شرحت خطوة ملء النموذج", "ذكرت الوثائق الثلاث المطلوبة"],
    },
  ],
      interaction: [
    {
      id: "int-a2-07-1",
      scenarioAr: "في البنك — تفتح حساباً وتجيب عن الأسئلة.",
      scenarioDe: "In der Bank — du eröffnest ein Konto.",
      strategyAr: "الاستراتيجية: إتمام معاملة رسمية والإجابة بدقة.",
      rounds: [
        {
          speakerDe: "Guten Tag! Ich möchte ein Konto eröffnen.",
          speakerAr: "نهارك سعيد! أريد فتح حساب.",
          options: [
            { de: "Gerne! Haben Sie Ihren Ausweis dabei?", ar: "بكل سرور! هل معك بطاقة هويتك؟", best: true, replyDe: "Ja, hier ist mein Ausweis.", replyAr: "نعم، ها هي بطاقتي." },
            { de: "Nein, ich habe keinen Ausweis.", ar: "لا، ليس لدي بطاقة هوية.", best: false, replyDe: "Ohne Ausweis können wir leider kein Konto eröffnen.", replyAr: "بدون بطاقة لا يمكن فتح حساب للأسف." },
          ],
        },
        {
          speakerDe: "Wie ist Ihre Adresse?",
          speakerAr: "ما عنوانك؟",
          options: [
            { de: "Meine Adresse ist Musterstraße 12 in Berlin.", ar: "عنواني شارع موستر 12 في برلين.", best: true, replyDe: "Danke. Und Ihre Telefonnummer?", replyAr: "شكراً. ورقم هاتفك؟" },
            { de: "Ich wohne im Kopf.", ar: "أسكن في رأسي.", best: false, replyDe: "Wir brauchen eine echte Adresse.", replyAr: "نحتاج عنواناً حقيقياً." },
          ],
        },
      ],
    },
  ],

};