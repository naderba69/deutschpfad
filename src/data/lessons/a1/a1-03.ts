import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-03: الطعام والشراب
 * — أدوات التعريف والتنكير + حالة النصب (Akkusativ) + فعل haben
 */
export const lessonA103: Lesson = {
  id: "a1-03",
  unitId: "a1-03",
  level: "A1",
  order: 1,
  titleDe: "Essen und Trinken",
  titleAr: "الطعام والشراب",
  duration: 30,
  summary:
    "المأكولات والمشروبات، أدوات التعريف والتنكير (der/die/das + ein/eine)، حالة النصب (Akkusativ): Ich esse einen Apfel، وفعل haben مع الجوع والعطش.",

  lernziele: [
    { id: "z1", de: "Ich kann Lebensmittel nennen.", ar: "أن أسمّي المأكولات والمشروبات بأدواتها الصحيحة." },
    { id: "z2", de: "Ich kenne der/die/das und ein/eine.", ar: "أن أفرّق بين أدوات التعريف (der/die/das) والتنكير (ein/eine)." },
    { id: "z3", de: "Ich kann den Akkusativ benutzen: Ich esse einen Apfel.", ar: "أن أستخدم حالة النصب (Akkusativ) بعد أفعال الأكل والشرب." },
    { id: "z4", de: "Ich kann „haben“ konjugieren.", ar: "أن أصرف فعل haben وأعبّر عن الجوع والعطش." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قل بالعربية: «أنا آكل تفاحة». الآن لاحظ: هل تغيّرت كلمة «تفاحة» في الجملة؟ في الألمانية، كلمة «تفاحة» (der Apfel) تتغير بعد فعل الأكل! خمّن كيف؟",
    motivatingQuestionDe: "Was isst du gern?",
    contextAr:
      "سنذهب اليوم إلى المطبخ الألماني: نتعلم أسماء الأطعمة مع أدواتها، ثم نكتشف «ظاهرة النصب» التي تجعل der يصبح den وein يصبح einen بعد أفعال معينة.",
    contextDe: "Guten Appetit!",
    connectionToPreviousAr: "تعلمت في الدرس السابق mein/meine مع العائلة. اليوم نضيف: الأكل والشرب + أول «حالة إعرابية» ألمانية حقيقية.",
    activateVocabulary: [
      { de: "das Essen", ar: "الطعام" },
      { de: "das Trinken", ar: "الشراب" },
      { de: "der Apfel", ar: "التفاحة" },
      { de: "essen", ar: "يأكل" },
      { de: "trinken", ar: "يشرب" },
      { de: "haben", ar: "يملك" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-01): كيف تقدّم نفسك؟",
      questionDe: "Wie heißt du?",
      questionAr: "ما اسمك؟",
      options: ["Ich heiße Sami.", "Ich bin Sami heißen.", "Mein heißen ist Sami.", "Ich heiße mich Sami."],
      correctIndex: 0,
      explanation: "Ich heiße + الاسم (من درس a1-01): Ich heiße Sami.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-02): ما أداة «الأم»؟",
      questionDe: "Welcher Artikel hat „Mutter“?",
      questionAr: "ما أداة التعريف لكلمة «أم»؟",
      options: ["die", "der", "das"],
      correctIndex: 0,
      explanation: "die Mutter — مؤنث (من درس a1-02 العائلة).",
      errorType: "article",
    },
    {
      id: "r3",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية (من a1-01): ماذا تقول عند الوداع؟",
      questionDe: "Was sagt man zum Abschied?",
      questionAr: "ماذا تقول عند الوداع؟",
      options: ["Auf Wiedersehen!", "Guten Morgen!", "Entschuldigung!", "Bitte schön!"],
      correctIndex: 0,
      explanation: "Auf Wiedersehen = إلى اللقاء (تحية الوداع).",
      errorType: "vocabulary",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "أدوات التعريف والتنكير (der/die/das + ein/eine)",
      titleDe: "Bestimmte und unbestimmte Artikel",
      explanationAr:
        "كل اسم ألماني له جنس: مذكر (der)، مؤنث (die)، محايد (das). أداة التعريف «ال» تُترجم بثلاث أدوات حسب الجنس. وأداة التنكير «واحد/واحدة» تُترجم بـ ein (مذكر/محايد) وeine (مؤنث). لا توجد قاعدة مطلقة للجنس — يُحفظ مع الكلمة!",
      whyAr:
        "لماذا يحفظ العربي الجنس مع كل كلمة؟ لأن الجنس يؤثر على كل شيء لاحقاً: الأداة، الصفة، الضمير، وحتى نهاية الكلمة في الحالات الإعرابية. حفظ «die Milch» مع «الحليب» أفضل من حفظ «Milch» وحدها — مثل حفظ جمع الكلمة العربية معها.",
      table: {
        title: "أدوات التعريف والتنكير (Nominativ)",
        columns: ["الجنس", "معرّف (ال)", "منكّر (واحد)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "ein", "der Apfel / ein Apfel"] },
          { label: "مؤنث", cells: ["die", "eine", "die Milch / eine Milch"] },
          { label: "محايد", cells: ["das", "ein", "das Brot / ein Brot"] },
          { label: "جمع", cells: ["die", "—", "die Äpfel"] },
        ],
      },
      examples: [
        { de: "Das ist ein Apfel. Der Apfel ist rot.", ar: "هذه تفاحة. التفاحة حمراء." },
        { de: "Ich trinke die Milch.", ar: "أشرب الحليب." },
        { de: "Das Brot ist frisch.", ar: "الخبز طازج." },
        { de: "Eine Banane, bitte!", ar: "موزة واحدة، من فضلك!" },
        { de: "Die Äpfel sind gut.", ar: "التفاحات جيدة." },
      ],
      comparisonWithArabic:
        "العربية لها «ال» واحدة للكل، و«واحد/واحدة» تتغير مع الجنس فقط. الألمانية تفرق: drei Artikel للتعريف. لكن بشرى: جمع المؤنث والمحايد والجمع في التنكير بلا أداة (نقول Äpfel بدون ein) — تماماً مثل العربية «تفاحات» بدون «واحدة».",
      eselsbruecke:
        "أنشئ «عائلة الغذاء»: ألصق جنساً بلون: der = أزرق، die = أحمر، das = أخضر. كل كلمة طعام جديدة ترسمها بلون جنسها — بعد 20 كلمة سيصبح التخمين تلقائياً.",
      commonMistakes: [
        { wrong: "das Apfel (خطأ في الجنس)", right: "der Apfel", whyAr: "Apfel مذكر. القاعدة العملية: معظم الفواكه مؤنثة (die Banane, die Orange) لكن der Apfel شاذ!" },
        { wrong: "ein Milch", right: "eine Milch", whyAr: "Milch مؤنثة → eine. ein للمذكر/المحايد فقط." },
        { wrong: "حفظ «die» كأداة «ال» فقط", right: "die لها ثلاث وظائف: مؤنث مفرد، جمع، وأحياناً مع كلمات مثل die Milch", whyAr: "die Milk مؤنثة مفردة — لا تخلط بين die المؤنثة وdie الجمع." },
      ],
      relatedRuleComparison: {
        title: "ein أم eine؟ الحيلة الفورية",
        content: "احفظ: die → eine (تضيف e). der/das → ein (بدون e). إذا حفظت أداة التعريف حفظت أداة التنكير: «أضف e للمؤنث فقط».",
      },
    },
    {
      id: "t2",
      titleAr: "حالة النصب (Akkusativ): Ich esse einen Apfel",
      titleDe: "Der Akkusativ: das direkte Objekt",
      explanationAr:
        "عندما يكون الاسم «مفعولاً به مباشراً» (الذي يقع عليه الفعل)، يتغير: المذكر فقط يتحول der→den وein→einen. المؤنث والمحايد والجمع لا تتغير. الأفعال التي تطلب النصب: essen (يأكل)، trinken (يشرب)، haben (يملك)، kaufen (يشتري)، mögen (يحب).",
      whyAr:
        "لماذا يتغير المذكر فقط؟ لأن الألمانية لغة «علامات إعراب» صغيرة: حالة الفاعل (Nominativ) وحالة المفعول (Akkusativ) تختلفان في المذكر فقط — وهذا كافٍ لتمييز «من يفعل» و«من يُفعَل به» حتى لو تغير ترتيب الكلمات.",
      table: {
        title: "تغيّر الأداة في النصب",
        columns: ["الجنس", "Nominativ (فاعل)", "Akkusativ (مفعول)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der / ein", "den / einen", "Ich esse einen Apfel."] },
          { label: "مؤنث", cells: ["die / eine", "die / eine", "Ich trinke die Milch."] },
          { label: "محايد", cells: ["das / ein", "das / ein", "Ich esse das Brot."] },
          { label: "جمع", cells: ["die", "die", "Ich kaufe die Äpfel."] },
        ],
      },
      examples: [
        { de: "Ich esse einen Apfel.", ar: "آكل تفاحة." },
        { de: "Er trinkt einen Kaffee.", ar: "يشرب قهوة." },
        { de: "Wir kaufen ein Brot.", ar: "نشتري خبزاً." },
        { de: "Hast du einen Bruder?", ar: "هل لديك أخ؟ (تذكره من درس العائلة!)" },
        { de: "Ich mag die Milch.", ar: "أحب الحليب." },
      ],
      comparisonWithArabic:
        "العربية لها نصب حقيقي: «أكلتُ التفاحةَ» بفتحة. الألمانية تحقق نفس الوظيفة بتغيير الأداة: einen. المتعة: بينما نصب العربية يقع على أي جنس، نصب الألمانية يقع على المذكر فقط — أسهل!",
      eselsbruecke:
        "«den = النصب عند الرجال فقط» — المذكر وحده يتغير في النصب. تخيّل أن المذكر «رجلاً» يغير قبعته (der→den) عند وصوله لموضع المفعول به.",
      commonMistakes: [
        { wrong: "Ich esse ein Apfel.", right: "Ich esse einen Apfel.", whyAr: "بعد فعل الأكل، المذكر ein يصبح einen (نصب)." },
        { wrong: "Ich trinke der Kaffee.", right: "Ich trinke den Kaffee.", whyAr: "der→den في النصب. لا تنسَ: بعد الأفعال التي تطلب مفعولاً مباشراً." },
        { wrong: "نصب المؤنث أيضاً: Ich esse eine Banane → einen Banane", right: "die/eine تبقى كما هي: Ich esse eine Banane", whyAr: "النصب يغير المذكر فقط — المؤنث والمحايد والجمع لا يتغيرون." },
      ],
      relatedRuleComparison: {
        title: "أفعال النصب الأساسية",
        content: "essen، trinken، haben، kaufen، mögen، sehen، brauchen — كلها تطلب Akkusativ. احفظها كعائلة واحدة وستنصب بلا تفكير.",
      },
    },
    {
      id: "t3",
      titleAr: "فعل haben (يملك) + الجوع والعطش",
      titleDe: "Das Verb „haben“ und Hunger/Durst",
      explanationAr:
        "haben فعل أساسي ثانٍ (بعد sein). نصرفه: ich habe، du hast، er/sie/es hat، wir haben، ihr habt، sie haben. نستخدمه للملكية وللتعبير عن الجوع والعطش: Ich habe Hunger (أنا جائع)، Ich habe Durst (أنا عطشان).",
      whyAr:
        "لماذا نقول «أملك جوعاً» بدل «أنا جائع»؟ لأن الألمانية تنظر للجوع والعطش كـ«أشياء نملكها». هذه الصيغة أسهل مما تظن: بدل حفظ صفات (hungrig, durstig) نحفظ اسماً مع haben.",
      table: {
        title: "تصريف haben في المضارع",
        columns: ["الضمير", "haben", "مثال"],
        rows: [
          { label: "ich", cells: ["habe", "Ich habe Hunger."] },
          { label: "du", cells: ["hast", "Hast du Durst?"] },
          { label: "er/sie/es", cells: ["hat", "Er hat einen Bruder."] },
          { label: "wir", cells: ["haben", "Wir haben Zeit."] },
          { label: "ihr", cells: ["habt", "Habt ihr einen Hund?"] },
          { label: "sie/Sie", cells: ["haben", "Sie haben Hunger."] },
        ],
      },
      examples: [
        { de: "Ich habe Hunger.", ar: "أنا جائع." },
        { de: "Hast du Durst?", ar: "هل أنت عطشان؟" },
        { de: "Wir haben keine Zeit.", ar: "ليس لدينا وقت." },
        { de: "Sie hat einen Kaffee.", ar: "لديها قهوة." },
        { de: "Habt ihr Geschwister?", ar: "هل لديكم إخوة؟" },
      ],
      comparisonWithArabic:
        "العربية: «أنا جائع» صفة. الألمانية: «Ich habe Hunger» = أملك جوعاً. تشبيه: كأنك تقول «عندي جوع» — وهي صيغة موجودة في بعض اللهجات العربية! سهّلها عليك هكذا.",
      eselsbruecke:
        "«habe-hast-hat»: مثل سلم: أنا هابه، أنتَ هاست، هو هات. كررها كأغنية: هابه-هاست-هات، هابن-هابت-هابن!",
      commonMistakes: [
        { wrong: "Ich bin Hunger.", right: "Ich habe Hunger.", whyAr: "الجوع «يُملَك» وليس «يُكون»: haben وليس sein." },
        { wrong: "Ich habe müde.", right: "Ich bin müde. / Ich habe Hunger.", whyAr: "المتعب صفة → sein. الجوع اسم → haben. التقط الفرق: صفة مع sein، اسم مع haben." },
        { wrong: "Du hast vs Du hat (خلط)", right: "du hast / er hat", whyAr: "hast مع du فقط، hat مع er/sie/es." },
      ],
      relatedRuleComparison: {
        title: "sein أم haben؟ القاعدة الذهبية",
        content: "sein = حالة/صفة (Ich bin müde). haben = ملكية/امتلاك (Ich habe Hunger). عندما تشك: اسأل «هل هي صفة أم شيء أملكه؟»",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "في المقهى",
        lines: [
          { speaker: "Kellner", de: "Guten Tag! Was möchten Sie?", ar: "نهارك سعيد! ماذا تريدون؟" },
          { speaker: "Sami", de: "Ich hätte gern einen Kaffee und ein Brot.", ar: "أريد قهوة وخبزاً." },
          { speaker: "Kellner", de: "Einen Kaffee und ein Brot. Und etwas zu trinken?", ar: "قهوة وخبز. وهل من مشروب؟" },
          { speaker: "Sami", de: "Ja, eine Milch, bitte.", ar: "نعم، حليب من فضلك." },
          { speaker: "Kellner", de: "Sehr gut. Das macht fünf Euro.", ar: "ممتاز. المجموع خمسة يورو." },
        ],
      },
      {
        id: "l2",
        title: "في السوبرماركت",
        lines: [
          { speaker: "Mona", de: "Ich brauche einen Apfel und eine Banane.", ar: "أحتاج تفاحة وموزة." },
          { speaker: "Karim", de: "Und wir kaufen ein Brot und die Milch.", ar: "ونشتري خبزاً والحليب." },
          { speaker: "Mona", de: "Hast du Hunger?", ar: "هل أنت جائع؟" },
          { speaker: "Karim", de: "Ja, ich habe großen Hunger!", ar: "نعم، أنا جائع جداً!" },
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
        options: ["einen Kaffee und ein Brot", "eine Milch und einen Kuchen", "einen Tee und ein Brot", "einen Kaffee und eine Banane"],
        correctIndex: 0,
        explanation: "قال: Ich hätte gern einen Kaffee und ein Brot — قهوة وخبزاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet das?",
        questionAr: "كم كان المجموع؟",
        options: ["fünf Euro", "vier Euro", "zehn Euro", "drei Euro"],
        correctIndex: 0,
        explanation: "قال النادل: Das macht fünf Euro — خمسة يورو.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was braucht Mona?",
        questionAr: "ماذا تحتاج منى؟",
        options: ["einen Apfel und eine Banane", "ein Brot und die Milch", "einen Kaffee", "ein Brot"],
        correctIndex: 0,
        explanation: "قالت: Ich brauche einen Apfel und eine Banane.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الطعام: ei، ch، وÖ",
    items: [
      { de: "der Apfel", ar: "التفاحة", note: "pf معاً: آپفِل" },
      { de: "das Brot", ar: "الخبز", note: "o قصيرة: بروت" },
      { de: "die Milch", ar: "الحليب", note: "ch ناعمة بعد i: ميلش" },
      { de: "der Kaffee", ar: "القهوة", note: "Kaffee بحرف e ممدود في النهاية: كافيه" },
      { de: "der Käse", ar: "الجبن", note: "ä = إيه مع فم مفتوح: كيزِه" },
      { de: "die Eier", ar: "البيض", note: "ei = آي: آيِر" },
    ],
    tip: "انتبه: «die Eier» (بيض) و«der Euro» (يورو) كلاهما بـ ei/eu — كررهما معاً: آيِر، أُوي-رو.",
    shadowing: [
      { de: "Ich esse einen Apfel.", ar: "آكل تفاحة.", tip: "einen = آي-نِن (ei=آي)" },
      { de: "Ich trinke einen Kaffee.", ar: "أشرب قهوة.", tip: "Kaffee = كافيه بحرف e طويل" },
      { de: "Hast du Hunger?", ar: "هل أنت جائع؟", tip: "Hunger = هونغِر (u=وو)" },
      { de: "Das Brot ist frisch.", ar: "الخبز طازج.", tip: "Brot = بروت، frisch = فريش" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة لتستخدم أداة التنكير:",
      prompt: "Das ist der Apfel. → (هذه تفاحة)",
      acceptedAnswers: ["Das ist ein Apfel", "Das ist ein Apfel."],
      sampleAnswer: "Das ist ein Apfel.",
      explanation: "التنكير: der→ein. لاحظ: الجملة نفسها تبقى Nominativ لأن Apfel فاعل.",
      errorType: "article",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات (der/die/das أو ein/eine):",
      template: "Das ist ___ Apfel. Ich esse ___ Apfel. ___ Milch ist kalt.",
      blanks: [
        { correct: "ein", options: ["ein", "eine", "den"] },
        { correct: "einen", options: ["ein", "einen", "eine"] },
        { correct: "Die", options: ["Die", "Der", "Das"] },
      ],
      explanation: "الجملة 1 فاعل مذكر → ein. الجملة 2 مفعول → einen. الجملة 3 Milch مؤنثة → Die.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة (لاحظ النصب):",
      audioText: "Ich habe einen Bruder.",
      explanation: "Ich habe einen Bruder — haben تطلب النصب: ein→einen.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة التعريف الصحيحة:",
      questionDe: "___ Brot ist frisch.",
      questionAr: "الخبز طازج.",
      options: ["Das", "Der", "Die", "Ein"],
      correctIndex: 0,
      explanation: "Brot محايد → Das Brot. (ein أداة تنكير وليست تعريفاً هنا).",
      errorType: "article",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة في النصب:",
      questionDe: "Ich esse ___ Apfel.",
      questionAr: "آكل تفاحة.",
      options: ["einen", "ein", "einer", "eine"],
      correctIndex: 0,
      explanation: "بعد essen، المذكر ein→einen (نصب).",
      errorType: "case",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الطعام بجنسه (أداته):",
      pairs: [
        { left: "der Käse", right: "الجبن" },
        { left: "die Milch", right: "الحليب" },
        { left: "das Brot", right: "الخبز" },
        { left: "die Banane", right: "الموزة" },
      ],
      explanation: "Käse مذكر، Milch مؤنث، Brot محايد، Banane مؤنث. احفظها مع الأداة!",
      errorType: "gender",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه للنصب):",
      tokens: ["Ich", "einen", "Kaffee", "trinke", "."],
      correctSentence: "Ich trinke einen Kaffee.",
      explanation: "Ich + trinke (V2) + einen Kaffee (نصب).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich habe ein Brot. Und ich esse die Käse.",
      wrongWord: "die Käse",
      correctWord: "den Käse",
      options: ["den Käse", "der Käse", "das Käse", "ein Käse"],
      explanation: "Käse مذكر + مفعول → den Käse. (حتى مع التنكير: einen Käse).",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ habe/hast/hat:",
      template: "Ich ___ Hunger. Du ___ Durst. Er ___ einen Kaffee.",
      blanks: [
        { correct: "habe", options: ["habe", "hast", "hat"] },
        { correct: "hast", options: ["habe", "hast", "hat"] },
        { correct: "hat", options: ["habe", "hast", "hat"] },
      ],
      explanation: "ich→habe، du→hast، er→hat. سلم haben: هابه-هاست-هات.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل السؤال إلى جواب:",
      prompt: "Hast du Durst? → (أجب: نعم، أنا عطشان)",
      acceptedAnswers: ["Ja, ich habe Durst", "Ja, ich habe Durst."],
      sampleAnswer: "Ja, ich habe Durst.",
      explanation: "الجواب النموذجي: Ja, ich habe Durst.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich habe Hunger.",
      questionAr: "ما معنى الجملة؟",
      options: ["أنا جائع", "أنا عطشان", "أنا متعب", "أنا سعيد"],
      correctIndex: 0,
      explanation: "Hunger = جوع → Ich habe Hunger = أنا جائع.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich bin Durst.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "hast", "ist"],
      explanation: "العطش يُملك: Ich habe Durst (وIch bin durstig إذا أردنا الصفة).",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة (جملة طلب في المقهى):",
      audioText: "Ich hätte gern einen Tee.",
      explanation: "Ich hätte gern einen Tee = أريد شاياً (بأدب). لاحظ النصب: einen Tee.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich esse ein Apfel.", right: "Ich esse einen Apfel.", whyAr: "بعد فعل الأكل/الشرب: المذكر ein→einen (نصب)." },
      { wrong: "Ich bin Hunger.", right: "Ich habe Hunger.", whyAr: "الجوع اسم «يُملَك» وليس صفة «تُكون»." },
      { wrong: "die Brot (جنس خاطئ)", right: "das Brot", whyAr: "Brot محايد. نصيحة: احفظ الخبز مع «الخبز» وليس وحده." },
    ],
    eselsbruecken: [
      "«den للنصب عند الرجال فقط» — der→den وein→einen، والباقي ثابت.",
      "«عندي جوع» مثل اللهجات العربية: Ich habe Hunger — حوّل من «أنا جائع» إلى «عندي جوع» وستتذكر haben تلقائياً.",
    ],
    culturalNote: {
      title: "Guten Appetit!",
      content:
        "قبل الأكل يقول الألمان «Guten Appetit!» (بألفة، حتى للغرباء في الكافتيريا). بعد الأكل: «Das hat gut geschmeckt!». ولا تقل «بسم الله» بصوت مسموع — يكفي أن تبدأ به في سرك، فالألمان لا يعتادون ذلك وربما يظنونه دعوة للصلاة!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir kaufen ___ Brot.",
      questionAr: "نشتري خبزاً.",
      options: ["ein", "einen", "eine", "der"],
      correctIndex: 0,
      explanation: "Brot محايد → ein (لا يتغير في النصب لأنه محايد).",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ du Durst? — Ja, ich habe Durst.",
      options: ["Hast", "Habe", "Hat", "Habt"],
      correctIndex: 0,
      explanation: "السؤال عن «أنت»: Hast du Durst?",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["einen", "Ich", "trinke", "Tee", "."],
      correctSentence: "Ich trinke einen Tee.",
      explanation: "Ich + trinke (V2) + einen Tee (نصب مذكر).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich esse die Apfel.",
      wrongWord: "die Apfel",
      correctWord: "den Apfel",
      options: ["den Apfel", "der Apfel", "das Apfel", "einen Apfel"],
      explanation: "Apfel مذكر مفرد → den في النصب. (die تُستخدم مع الجمع: die Äpfel).",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ (أداة تنكير صحيحة):",
      template: "Ich esse ___ Banane und ___ Apfel.",
      blanks: [
        { correct: "eine", options: ["eine", "ein", "einen"] },
        { correct: "einen", options: ["eine", "ein", "einen"] },
      ],
      explanation: "Banane مؤنثة → eine (لا تتغير في النصب). Apfel مذكر مفعول → einen.",
      errorType: "case",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Essen / das Trinken", ar: "الطعام / الشراب", example: "Essen und Trinken sind wichtig.", exampleAr: "الأكل والشرب مهمان.", level: "A1" },
    { id: "fc2", de: "der Apfel / die Banane", ar: "التفاحة / الموزة", example: "Ich esse einen Apfel.", exampleAr: "آكل تفاحة.", level: "A1" },
    { id: "fc3", de: "das Brot", ar: "الخبز", example: "Das Brot ist frisch.", exampleAr: "الخبز طازج.", level: "A1" },
    { id: "fc4", de: "die Milch", ar: "الحليب", example: "Ich trinke die Milch.", exampleAr: "أشرب الحليب.", level: "A1" },
    { id: "fc5", de: "der Käse", ar: "الجبن", example: "Der Käse schmeckt gut.", exampleAr: "الجبن طعمه جيد.", level: "A1" },
    { id: "fc6", de: "essen / trinken", ar: "يأكل / يشرب", example: "Wir essen und trinken.", exampleAr: "نأكل ونشرب.", level: "A1" },
    { id: "fc7", de: "der Hunger / der Durst", ar: "الجوع / العطش", example: "Ich habe Hunger und Durst.", exampleAr: "أنا جائع وعطشان.", level: "A1" },
    { id: "fc8", de: "kaufen", ar: "يشتري", example: "Wir kaufen ein Brot.", exampleAr: "نشتري خبزاً.", level: "A1" },
  ],

  mediation: [
    {
      id: "med-a1-03-1",
      type: "simplify-announcement",
      titleAr: "بسّط قائمة طعام ألمانية بالعربية لصديق",
      sourceDe: "Heute: Suppe (3 €), Schnitzel mit Pommes (9 €), Apfelkuchen (2,50 €).",
      taskAr: "انقل القائمة بالعربية مع الأسعار لصديق لا يفهم الألمانية، مع توضيح أنواع الأطباق.",
      modelAnswerAr: "«اليوم: شوربة (3 يورو)، شنيتزل مع بطاطس مقلية (9 يورو)، كعكة تفاح (2.50 يورو).»",
      keyPointsAr: ["نقلت الأطباق الثلاثة", "نقلت الأسعار بدقة", "استخدمت أسماء مفهومة"],
    },
  ],
  interaction: [
    {
      id: "int-a1-03-1",
      scenarioAr: "في مقهى ألماني — تطلب طعاماً وشراباً.",
      scenarioDe: "Im Café — du bestellst Essen und Trinken.",
      strategyAr: "الاستراتيجية: الطلب المهذب (Ich hätte gern...) وفهم أسئلة النادل.",
      rounds: [
        {
          speakerDe: "Guten Tag! Was möchten Sie trinken?",
          speakerAr: "نهارك سعيد! ماذا تريد أن تشرب؟",
          options: [
            { de: "Ich hätte gern einen Kaffee, bitte.", ar: "أريد قهوة من فضلك.", best: true, replyDe: "Sehr gerne! Mit Milch und Zucker?", replyAr: "بكل سرور! مع حليب وسكر؟" },
            { de: "Ich bin ein Kaffee.", ar: "أنا قهوة.", best: false, replyDe: "Haha, Sie sind ein Kaffee? Okay, ein Kaffee kommt!", replyAr: "هاها، أنت قهوة؟ حسناً، قهوة قادمة!" },
          ],
        },
        {
          speakerDe: "Mit Milch und Zucker?",
          speakerAr: "مع حليب وسكر؟",
          options: [
            { de: "Mit Milch, bitte. Ohne Zucker.", ar: "مع حليب من فضلك. بدون سكر.", best: true, replyDe: "Alles klar! Und etwas zu essen?", replyAr: "حسناً! وهل تريد شيئاً للأكل؟" },
            { de: "Nein, danke. Nur Wasser.", ar: "لا شكراً. ماء فقط.", best: false, replyDe: "Okay, ein Wasser. Sonst noch etwas?", replyAr: "حسناً، ماء. أي شيء آخر؟" },
          ],
        },
        {
          speakerDe: "Möchten Sie auch etwas essen?",
          speakerAr: "هل تريد أيضاً شيئاً للأكل؟",
          options: [
            { de: "Ja, ich hätte gern einen Apfelkuchen, bitte.", ar: "نعم، أريد كعكة تفاح من فضلك.", best: true, replyDe: "Sehr gut! Das macht zusammen 5,50 Euro.", replyAr: "ممتاز! المجموع 5.50 يورو." },
            { de: "Ich möchte die Rechnung.", ar: "أريد الحساب.", best: false, replyDe: "Aber Sie haben noch nichts gegessen!", replyAr: "لكنك لم تأكل شيئاً بعد!" },
          ],
        },
      ],
    },
  ],
};
