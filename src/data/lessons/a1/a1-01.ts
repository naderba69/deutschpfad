import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-01: التعارف والتحيات — نموذج كامل لنظام الدرس الموحد
 * (يعرض المكونات العشرة كلها؛ يُوسَّع محتواه في المرحلة 6)
 */
export const lessonA101: Lesson = {
  id: "a1-01",
  unitId: "a1-01",
  level: "A1",
  order: 1,
  titleDe: "Hallo! Ich heiße …",
  titleAr: "التعارف والتحيات",
  duration: 30,
  summary:
    "التحيات والوداع، تقديم النفس، تصريف sein وheißen، السلسلة الذهبية لتصريف الأفعال المنتظمة، وأسئلة W الأساسية مع ترتيب الجملة الألماني (الفعل في المركز الثاني).",

  /* 1) الأهداف التعليمية */
  lernziele: [
    { id: "z1", de: "Ich kann grüßen und mich vorstellen.", ar: "أن أُحيّي وأُقدّم نفسي باللغة الألمانية." },
    { id: "z2", de: "Ich kann fragen: Wie heißt du? Woher kommst du?", ar: "أن أسأل عن الاسم والبلد (Wie heißt du? / Woher kommst du?)." },
    { id: "z3", de: "Ich kann „sein“ und „heißen“ konjugieren.", ar: "أن أصرف الفعلين sein (يكون) وheißen (يُسمى) في المضارع." },
    { id: "z4", de: "Ich kenne den Unterschied zwischen du und Sie.", ar: "أن أميّز بين ضميري المخاطبة du (غير رسمي) وSie (رسمي)." },
    { id: "z5", de: "Ich kann W-Fragen stellen.", ar: "أن أطرح أسئلة الاستفهام (W-Fragen) وأجيب عنها." },
    { id: "z6", de: "Ich kann regelmäßige Verben konjugieren: lernen, wohnen, spielen.", ar: "أن أصرف الأفعال المنتظمة في المضارع (أتعلم، أسكن، ألعب)." },
  ],

  /* 2) التمهيد وتنشيط المعرفة السابقة */
  einfuehrung: {
    motivatingQuestionAr:
      "تخيّل أنك في برلين والتقيت شخصاً ألمانياً لأول مرة. ما أول جملة ستقولها؟ وما أول سؤال ستطرحه؟ فكّر قبل أن تكمل الدرس!",
    motivatingQuestionDe: "Stell dir vor: Du bist in Berlin. Was sagst du zuerst?",
    contextAr:
      "قبل أن نتعلم أي قاعدة، لاحظ: الألمانية تتشابه مع العربية في أن الترحيب له أشكال متعددة حسب الوقت والرسمية. هل يمكنك تخمين معنى «Guten Morgen» قبل أن نبدأ؟",
    contextDe: "Guten Morgen, Guten Tag, Guten Abend, Gute Nacht …",
    connectionToPreviousAr: "هذا درسك الأول — لا توجد معرفة سابقة مطلوبة، فقط الحماس! 🚀",
    activateVocabulary: [
      { de: "Hallo", ar: "مرحباً" },
      { de: "ich", ar: "أنا" },
      { de: "du", ar: "أنتَ / أنتِ" },
      { de: "kommen", ar: "يأتي" },
      { de: "woher", ar: "من أين" },
    ],
  },

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "الفعل sein (يكون) — تصريفه في المضارع",
      titleDe: "Das Verb „sein“ im Präsens",
      explanationAr:
        "الفعل sein هو أهم فعل في اللغة الألمانية. نستخدمه للتعريف بالنفس (الاسم، البلد، المهنة، الصفة). تصريفه شاذ تماماً ويجب حفظه عن ظهر قلب.",
      whyAr:
        "لماذا؟ لأن العربية في جمل كثيرة لا تحتاج فعل ربط: نقول «أنا من تونس» مباشرة، أما الألمانية فتتطلب دائماً فعلاً — Ich bin aus Tunesien. بدون bin تكون الجملة ناقصة.",
      table: {
        title: "تصريف sein في المضارع",
        columns: ["الضمير", "تصريفه", "النطق التقريبي"],
        rows: [
          { label: "ich (أنا)", cells: ["bin", "بِن"] },
          { label: "du (أنتَ/أنتِ)", cells: ["bist", "بِست"] },
          { label: "er/sie/es (هو/هي)", cells: ["ist", "إِست"] },
          { label: "wir (نحن)", cells: ["sind", "زِنْد"] },
          { label: "ihr (أنتم)", cells: ["seid", "زايْت"] },
          { label: "sie (هم) / Sie (حضرتك)", cells: ["sind", "زِنْد"] },
        ],
      },
      examples: [
        { de: "Ich bin Sami.", ar: "أنا سامي." },
        { de: "Ich bin aus Tunesien.", ar: "أنا من تونس." },
        { de: "Du bist sehr nett.", ar: "أنتَ لطيف جداً." },
        { de: "Er ist Lehrer.", ar: "هو معلم." },
        { de: "Wir sind Studenten.", ar: "نحن طلاب." },
        { de: "Sie sind Frau Weber.", ar: "حضرتكِ السيدة فيبر." },
      ],
      comparisonWithArabic:
        "في العربية الجملة الاسمية لا تحتاج فعلاً رابطاً: «أنا من تونس» (بدون «أكون»). في الألمانية الجملة الاسمية تحتاج فعلاً دائماً. أيضاً: العربية تلحق ضمير الملكية بالاسم، لكن هذا موضوع درس قادم.",
      eselsbruecke:
        "احفظها كقصة بيت العائلة: «أنا بِنْ (bin) داخل البيت، وأنتَ بِسْت (bist) عند الباب، وهو/هي إسْت (ist) فوق السطح، ونحن زِنْد (sind) جميعاً، وأنتم زايْت (seid) في الحديقة». تكررها ثلاث مرات بصوت عالٍ وسيثبت التصريف.",
      commonMistakes: [
        {
          wrong: "Ich aus Tunis.",
          right: "Ich bin aus Tunis.",
          whyAr: "حذف الفعل bin — في العربية نقول «أنا من تونس» بدون فعل، لكن الألمانية تتطلب الفعل دائماً.",
        },
        {
          wrong: "Ich ist Sami.",
          right: "Ich bin Sami.",
          whyAr: "خلط بين bin (أنا) و ist (هو/هي) — لأنك حفظت ist أولاً. تذكّر: ist للغير، bin لي.",
        },
      ],
      relatedRuleComparison: {
        title: "sein أم haben؟",
        content:
          "sein = يكون (حالة، وصف، أصل). haben = يملك (شيئاً). لا تقل Ich habe müde بل Ich bin müde (أنا متعب — حالة).",
      },
    },
    {
      id: "t2",
      titleAr: "أسئلة الاستفهام W-Fragen وترتيب الجملة (V2)",
      titleDe: "W-Fragen und die Satzstellung (V2)",
      explanationAr:
        "أسئلة الاستفهام في الألمانية تبدأ بكلمة سؤال تبدأ بحرف W: wer (من)، was (ماذا)، wo (أين)، woher (من أين)، wohin (إلى أين)، wann (متى)، warum (لماذا)، wie (كيف). بعد كلمة السؤال يأتي الفعل مباشرة ثم الفاعل.",
      whyAr:
        "لماذا الفعل مباشرة بعد W؟ لأن الألمانية تعتمد على ترتيب صارم للجملة: «الفعل في المركز الثاني». في السؤال W: الكلمة W في المركز الأول والفعل في الثاني — هذا هو ترتيب الجملة الألماني (V2) الذي تختلف فيه عن العربية.",
      table: {
        title: "كلمات الاستفهام الأساسية",
        columns: ["الكلمة", "المعنى", "مثال"],
        rows: [
          { label: "wer", cells: ["من", "Wer bist du?"] },
          { label: "was", cells: ["ماذا", "Was ist das?"] },
          { label: "wo", cells: ["أين", "Wo wohnst du?"] },
          { label: "woher", cells: ["من أين", "Woher kommst du?"] },
          { label: "wie", cells: ["كيف", "Wie heißt du?"] },
          { label: "wann", cells: ["متى", "Wann kommst du?"] },
          { label: "warum", cells: ["لماذا", "Warum lernst du Deutsch?"] },
        ],
      },
      examples: [
        { de: "Wie heißt du? — Ich heiße Anna.", ar: "ما اسمك؟ — اسمي آنا." },
        { de: "Woher kommst du? — Ich komme aus Tunesien.", ar: "من أين أنت؟ — أنا من تونس." },
        { de: "Wo wohnst du? — Ich wohne in Tunis.", ar: "أين تسكن؟ — أسكن في تونس." },
        { de: "Wer ist das? — Das ist meine Schwester.", ar: "من هذه؟ — هذه أختي." },
        { de: "Was ist das? — Das ist ein Buch.", ar: "ما هذا؟ — هذا كتاب." },
      ],
      comparisonWithArabic:
        "في العربية نقول «من أين أنت؟» — كلمة السؤال ثم الاسم مباشرة بدون فعل. في الألمانية: Woher kommst du? — كلمة السؤال ثم الفعل ثم الفاعل. انتبه أن الفعل لا يُحذف أبداً.",
      eselsbruecke:
        "كل أسئلة الاستفهام الألمانية تبدأ بـ W — تذكّرها بعبارة: «وَصَلَنا السؤال بـ W». و«W تليها الفعل مباشرة»: W + Verb + Subjekt.",
      commonMistakes: [
        {
          wrong: "Wo du wohnst?",
          right: "Wo wohnst du?",
          whyAr: "وضع الفعل في آخر السؤال (تأثير من ترتيب العربية) — القاعدة: بعد W يأتي الفعل مباشرة.",
        },
        {
          wrong: "Wie du heißt?",
          right: "Wie heißt du?",
          whyAr: "نفس الخطأ: الفعل heißt يجب أن يأتي بعد wie مباشرة.",
        },
      ],
    },
    {
      id: "t3",
      titleAr: "تصريف الأفعال المنتظمة في المضارع — السلسلة الذهبية",
      titleDe: "Das Präsens der regelmäßigen Verben: lernen, wohnen, spielen",
      explanationAr:
        "معظم الأفعال الألمانية منتظمة: نأخذ جذر الفعل (lernen → lern-) ونضيف النهايات الثابتة: -e، -st، -t، -en، -t، -en. Ich lerne (أتعلم)، du lernst، er lernt، wir lernen، ihr lernt، sie lernen. جربها مع wohnen وspielen وkommen — نفس السلسلة تماماً.",
      whyAr:
        "لماذا نبدأ بها هنا؟ لأن 90% من أفعال المحادثة اليومية منتظمة: kommen، wohnen، lernen، spielen، kochen، arbeiten... من أتقن السلسلة الذهبية (-e/-st/-t/-en/-t/-en) استطاع التحدث عن نفسه في عشرات المواقف قبل حفظ أي استثناء.",
      table: {
        title: "السلسلة الذهبية: نهايات المضارع",
        columns: ["الضمير", "lernen", "wohnen", "النهاية"],
        rows: [
          { label: "ich (أنا)", cells: ["lerne", "wohne", "-e"] },
          { label: "du (أنتَ/أنتِ)", cells: ["lernst", "wohnst", "-st"] },
          { label: "er/sie/es (هو/هي)", cells: ["lernt", "wohnt", "-t"] },
          { label: "wir (نحن)", cells: ["lernen", "wohnen", "-en"] },
          { label: "ihr (أنتم)", cells: ["lernt", "wohnt", "-t"] },
          { label: "sie/Sie (هم/حضرتك)", cells: ["lernen", "wohnen", "-en"] },
        ],
      },
      examples: [
        { de: "Ich lerne Deutsch.", ar: "أتعلم الألمانية." },
        { de: "Du spielst Fußball.", ar: "أنتَ تلعب كرة القدم." },
        { de: "Er wohnt in Berlin.", ar: "هو يسكن في برلين." },
        { de: "Wir kochen zusammen.", ar: "نطبخ معاً." },
        { de: "Ihr arbeitet viel.", ar: "أنتم تعملون كثيراً." },
        { de: "Sie kommen aus Tunesien.", ar: "هم قادمون من تونس." },
      ],
      comparisonWithArabic:
        "العربية تلحق الضمائر بالأفعال أو تغيّر حركة الفعل («يأكلُ/يأكلون»). الألمانية تلحق نهايات ثابتة بالفعل — نفس النهاية لكل ضمير. والتشابه: كلاهما يغيّر شكل الفعل مع الضمير — لكن الألمانية هنا أسهل وأكثر انتظاماً.",
      eselsbruecke:
        "السلسلة الذهبية: «-e، -st، -t، -en، -t، -en» — احفظها كأغنية: «أنا ليرنِه، أنتَ ليرنست، هو ليرنت، نحن ليرنِن، أنتم ليرنت، هم ليرنِن».",
      commonMistakes: [
        { wrong: "Ich lernen Deutsch.", right: "Ich lerne Deutsch.", whyAr: "مع ich: النهاية -e دائماً." },
        { wrong: "Du lerne Deutsch.", right: "Du lernst Deutsch.", whyAr: "مع du: النهاية -st." },
        { wrong: "Er lernst (بدل lernt)", right: "Er lernt.", whyAr: "مع er/sie/es: -t (وليس -st)." },
      ],
      relatedRuleComparison: {
        title: "sein وheißen — ما تعلمته بالفعل",
        content: "sein شاذ تماماً (bin, bist, ist...). heißen «شبه منتظم»: heiße، heißt، heißt... لكن السلسلة الذهبية تبقى القاعدة العامة — الشاذ يُحفظ كاستثناء.",
      },
    },
  ],

  /* 4) الاستماع */
  listening: {
    items: [
      {
        id: "l1",
        title: "لقاء غير رسمي (informell)",
        lines: [
          { speaker: "Anna", de: "Hallo! Ich heiße Anna. Wie heißt du?", ar: "مرحباً! اسمي آنا. ما اسمك؟" },
          { speaker: "Sami", de: "Hallo Anna! Ich heiße Sami.", ar: "مرحباً آنا! اسمي سامي." },
          { speaker: "Sami", de: "Ich komme aus Tunesien. Und woher kommst du?", ar: "أنا من تونس. وأنتِ من أين؟" },
          { speaker: "Anna", de: "Ich komme aus Deutschland, aus Berlin.", ar: "أنا من ألمانيا، من برلين." },
          { speaker: "Sami", de: "Freut mich!", ar: "يسعدني لقاؤك!" },
        ],
      },
      {
        id: "l2",
        title: "لقاء رسمي (formell)",
        lines: [
          { speaker: "Herr Weber", de: "Guten Tag! Wie heißen Sie?", ar: "مساء الخير! ما اسم حضرتك؟" },
          { speaker: "Frau Leila", de: "Guten Tag! Ich heiße Leila Mansour.", ar: "مساء الخير! اسمي ليلى منصور." },
          { speaker: "Herr Weber", de: "Woher kommen Sie, Frau Mansour?", ar: "من أين أنتِ يا سيدة منصور؟" },
          { speaker: "Frau Leila", de: "Ich komme aus Tunesien.", ar: "أنا من تونس." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد سماع الحوار الأول:",
        questionDe: "Wie heißt die Frau?",
        questionAr: "ما اسم الفتاة؟",
        options: ["Sami", "Anna", "Berlin", "Tunis"],
        correctIndex: 1,
        explanation: "قالت الفتاة: Ich heiße Anna — اسمها آنا.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Woher kommt Sami?",
        questionAr: "من أين سامي؟",
        options: ["aus Deutschland", "aus Berlin", "aus Tunesien", "aus Österreich"],
        correctIndex: 2,
        explanation: "قال سامي: Ich komme aus Tunesien — هو من تونس.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد سماع الحوار الثاني:",
        questionDe: "Wie heißt die Frau?",
        questionAr: "ما اسم السيدة في الحوار الرسمي؟",
        options: ["Frau Weber", "Leila Mansour", "Anna", "Sami"],
        correctIndex: 1,
        explanation: "قالت السيدة: Ich heiße Leila Mansour — اسمها ليلى منصور.",
        errorType: "vocabulary",
      },
    ],
  },

  /* 5) النطق (الأساسي — التقييم الكامل في المرحلة 3) */
  pronunciation: {
    id: "p1",
    title: "الأصوات الأساسية: h في بداية الكلمة وصوت ei",
    items: [
      { de: "Hallo", ar: "مرحباً", note: "h في البداية تُنطق من الحلق بنَفَس خفيف: ها-لو" },
      { de: "heißen", ar: "يُسمى", note: "ei تُنطق «أَيْ» وليس «إي»: هاي-سِن" },
      { de: "wie", ar: "كيف", note: "الحرف v هنا يُنطق «ڤ»: ڤي" },
      { de: "woher", ar: "من أين", note: "ووهير — مع h بارزة في المنتصف" },
      { de: "Guten Tag", ar: "نهارك سعيد", note: "غوتن تاغ — g في آخر الكلمة يُنطق «غ»" },
    ],
    tip: "كرّر كل كلمة ثلاث مرات بصوت عالٍ قبل الانتقال — النطق الصحيح من اليوم الأول يمنع العادات الخاطئة.",
    shadowing: [
      { de: "Hallo! Ich heiße Anna.", ar: "مرحباً! اسمي آنا.", tip: "انتبه: heiße تُنطق «هاي-سِه» وليس «هيسّه»" },
      { de: "Wie heißt du?", ar: "ما اسمك؟", tip: "ارفع نبرة صوتك في نهاية السؤال" },
      { de: "Ich komme aus Tunesien.", ar: "أنا من تونس.", tip: "komme = كومّه (حرف o قصير)" },
      { de: "Freut mich!", ar: "يسعدني لقاؤك!", tip: "مقطعان فقط: فرويت ميش" },
    ],
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "أجب كتابةً بالجملة الكاملة: من أين أنت؟",
      instructionDe: "Antworte: Woher kommst du?",
      prompt: "Woher kommst du? (أجب بجملة كاملة تبدأ بـ Ich)",
      acceptedAnswers: ["Ich komme aus Tunesien", "Ich komme aus Tunis", "Ich komme aus Tunesien."],
      sampleAnswer: "Ich komme aus Tunesien.",
      explanation: "الصيغة الصحيحة: Ich komme aus + البلد. انتبه إلى الفعل komme بعد ich.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "transformation",
      instructionAr: "حوّل هذه الجملة إلى سؤال (نعم/لا): Du heißt Anna.",
      instructionDe: "Bilde eine Frage: Du heißt Anna.",
      prompt: "Du heißt Anna. → ؟",
      acceptedAnswers: ["Heißt du Anna", "Heißt du Anna?"],
      sampleAnswer: "Heißt du Anna?",
      explanation: "سؤال نعم/لا: الفعل أولاً ثم الفاعل — Heißt du Anna?",
      errorType: "word-order",
    },
    {
      id: "w3",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالضمير الصحيح (ich/du/er/sie):",
      template: "___ bin Anna. Und wie heißt ___? ___ heißt Sami.",
      blanks: [
        { correct: "Ich", options: ["Ich", "Du", "Er"] },
        { correct: "du", options: ["ich", "du", "er"] },
        { correct: "Er", options: ["Ich", "Du", "Er"] },
      ],
      explanation: "Ich (أنا) مع bin، du (أنتَ) في السؤال، Er (هو) مع heißt للحديث عن شخص ثالث.",
      errorType: "pronoun",
    },
  ],

  /* 7) بنك التدريبات التفاعلية */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة الصحيحة لإكمال الجملة:",
      questionDe: "Ich ___ Anna.",
      questionAr: "أنا آنا.",
      options: ["bin", "bist", "ist", "sind"],
      correctIndex: 0,
      explanation: "مع الضمير ich نستخدم دائماً bin — هذا هو تصريف sein للضمير أنا.",
      optionExplanations: [
        undefined,
        "bist تأتي مع du وليس مع ich.",
        "ist تأتي مع er/sie/es وليس مع ich.",
        "sind تأتي مع wir/sie وليس مع ich.",
      ],
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Woher kommst du?",
      questionAr: "ما معنى السؤال؟",
      options: ["أين تسكن؟", "من أين أنت؟", "ما اسمك؟", "كم عمرك؟"],
      correctIndex: 1,
      explanation: "Woher تعني «من أين» و kommst du تعني «تأتي أنت» — أي من أين أنت؟",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["heiße", "Ich", "Sami", "."],
      correctSentence: "Ich heiße Sami.",
      explanation: "القاعدة: الفعل في المركز الثاني — Ich (1) + heiße (2) + Sami.",
      errorType: "word-order",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال صحيح:",
      tokens: ["kommst", "Woher", "du", "?"],
      correctSentence: "Woher kommst du?",
      explanation: "سؤال W: كلمة السؤال أولاً ثم الفعل ثم الفاعل — Woher + kommst + du.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ بصيغة sein الصحيحة:",
      template: "Er ___ mein Bruder. Und ich ___ seine Schwester.",
      blanks: [
        { correct: "ist", options: ["bin", "ist", "bist", "sind"] },
        { correct: "bin", options: ["bin", "ist", "bist", "sind"] },
      ],
      explanation: "Er → ist (هو)، ich → bin (أنا). لا تخلط بينهما!",
      errorType: "conjugation",
    },
    {
      id: "e6",
      type: "matching",
      instructionAr: "صل الكلمة الألمانية بمعناها العربي:",
      pairs: [
        { left: "Guten Morgen", right: "صباح الخير" },
        { left: "Guten Abend", right: "مساء الخير" },
        { left: "Gute Nacht", right: "تصبح على خير" },
        { left: "Auf Wiedersehen", right: "إلى اللقاء" },
      ],
      explanation: "هذه أكثر التحيات استخداماً: Morgen (صباح)، Abend (مساء)، Nacht (ليل).",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "error-correction",
      instructionAr: "الجملة تحتوي خطأً واحداً. صحّحه:",
      wrongSentence: "Ich aus Tunesien.",
      wrongWord: "aus",
      correctWord: "bin",
      options: ["bin", "ist", "bist", "habe"],
      explanation: "الجملة ناقصة: نحتاج الفعل sein — Ich bin aus Tunesien. لا يمكن حذف الفعل في الألمانية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Wie du heißt?",
      wrongWord: "du heißt",
      correctWord: "heißt du",
      options: ["heißt du", "du heißst", "du heißen", "heißen du"],
      explanation: "في سؤال W: الفعل مباشرة بعد كلمة السؤال — Wie heißt du?",
      errorType: "word-order",
    },
    {
      id: "e9",
      type: "transformation",
      instructionAr: "حوّل إلى سؤال: Er kommt aus Berlin.",
      prompt: "Er kommt aus Berlin. → ؟",
      acceptedAnswers: ["Kommt er aus Berlin", "Kommt er aus Berlin?"],
      sampleAnswer: "Kommt er aus Berlin?",
      explanation: "سؤال نعم/لا: الفعل أولاً ثم الفاعل — Kommt er aus Berlin?",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه (اضغط على زر الاستماع):",
      audioText: "Ich heiße Anna und komme aus Berlin.",
      explanation: "الجملة الصحيحة: Ich heiße Anna und komme aus Berlin. لاحظ: kommt تصبح komme مع ich.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "صرف الفعل بين قوسين بالسلسلة الذهبية:",
      instructionDe: "Konjugiere: lernen, spielen, wohnen",
      template: "Ich ___ Deutsch. (lernen) · Du ___ Fußball. (spielen) · Er ___ in Tunis. (wohnen) · Wir ___ zusammen. (kochen)",
      blanks: [
        { correct: "lerne", options: ["lerne", "lernen", "lernst", "lernt"] },
        { correct: "spielst", options: ["spielst", "spiele", "spielen", "spielt"] },
        { correct: "wohnt", options: ["wohnt", "wohne", "wohnst", "wohnen"] },
        { correct: "kochen", options: ["kochen", "koche", "kocht", "kochst"] },
      ],
      hint: "السلسلة الذهبية: ich -e، du -st، er -t، wir -en.",
      explanation: "lerne (-e)، spielst (-st)، wohnt (-t)، kochen (-en) — السلسلة الذهبية.",
      errorType: "conjugation",
      points: 2,
    },
  ],

  /* 8) الأخطاء الشائعة والتريكات + لقطة ثقافية */
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich bin Anna heißen.",
        right: "Ich heiße Anna.",
        whyAr: "لا تجمع بين sein والفعل heißen في نفس الجملة للتعبير عن الاسم — يكفي فعل واحد.",
      },
      {
        wrong: "Wo du wohnst?",
        right: "Wo wohnst du?",
        whyAr: "الفعل يجب أن يأتي في المركز الثاني مباشرة بعد كلمة السؤال.",
      },
      {
        wrong: "نطق heißen كـ«هيسّن»",
        right: "نطق heißen كـ«هاي-سن»",
        whyAr: "الصوت ei يُنطق «أَيْ» في الألمانية وليس «إي» (مثل: mein = مايْن).",
      },
    ],
    eselsbruecken: [
      "«بين (bin)»: أنا بين عائلتي = Ich bin — ربط الكلمة بمعناها الصوتي.",
      "حروف W السبعة تبدأ بـ W: Wer, Was, Wo, Woher, Wann, Warum, Wie — «السؤال يبدأ بـ W».",
    ],
    culturalNote: {
      title: "du أم Sie؟",
      content:
        "في ألمانيا: مع الأصدقاء والأطفال والزملاء القريبين نستخدم du. مع الغرباء والموظفين وكبار السن نستخدم Sie (حضرتك) — وقرينة الصيغة الرسمية في السؤال: Wie heißen Sie?",
    },
  },

  /* 9) التقييم الختامي (Mini-Test) */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ heißt du? — Ich heiße Karim.",
      options: ["Was", "Wie", "Wo", "Wer"],
      correctIndex: 1,
      explanation: "السؤال عن الاسم يستخدم Wie: Wie heißt du? — ما اسمك؟",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wir ___ Studenten.",
      options: ["bin", "bist", "sind", "ist"],
      correctIndex: 2,
      explanation: "مع wir نستخدم sind: Wir sind Studenten — نحن طلاب.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين سؤال صحيح:",
      tokens: ["wohnst", "du", "Wo", "?"],
      correctSentence: "Wo wohnst du?",
      explanation: "أين تسكن؟ — Wo (أين) + wohnst (تسكن) + du (أنتَ).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ:",
      template: "Ich ___ aus Tunesien. Und du, woher ___ du?",
      blanks: [
        { correct: "komme", options: ["komme", "kommst", "kommt"] },
        { correct: "kommst", options: ["komme", "kommst", "kommt"] },
      ],
      explanation: "ich → komme، du → kommst. لاحظ إضافة s في نهاية الفعل مع du.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Wie du heißt?",
      wrongWord: "du heißt",
      correctWord: "heißt du",
      options: ["heißt du", "du heißst", "heißt ihr"],
      explanation: "W + فعل + فاعل: Wie heißt du?",
      errorType: "word-order",
    },
  ],

  /* 10) بطاقات المراجعة */
  flashcards: [
    { id: "fc1", de: "der Name", ar: "الاسم", example: "Wie ist dein Name?", exampleAr: "ما اسمك؟", level: "A1" },
    { id: "fc2", de: "heißen", ar: "يُدعى / اسمه", example: "Ich heiße Anna.", exampleAr: "اسمي آنا.", level: "A1" },
    { id: "fc3", de: "kommen", ar: "يأتي", example: "Ich komme aus Tunesien.", exampleAr: "أنا من تونس.", level: "A1" },
    { id: "fc4", de: "wohnen", ar: "يسكن", example: "Ich wohne in Tunis.", exampleAr: "أسكن في تونس.", level: "A1" },
    { id: "fc5", de: "woher", ar: "من أين", example: "Woher kommst du?", exampleAr: "من أين أنت؟", level: "A1" },
    { id: "fc6", de: "Guten Morgen", ar: "صباح الخير", example: "Guten Morgen!", exampleAr: "صباح الخير!", level: "A1" },
    { id: "fc7", de: "das Land", ar: "البلد", example: "Ich liebe mein Land.", exampleAr: "أحب بلدي.", level: "A1" },
    { id: "fc8", de: "die Stadt", ar: "المدينة", example: "Tunis ist eine schöne Stadt.", exampleAr: "تونس مدينة جميلة.", level: "A1" },
    { id: "fc9", de: "lernen / ich lerne", ar: "يتعلم / أتعلم", example: "Ich lerne Deutsch.", exampleAr: "أتعلم الألمانية.", level: "A1" },
    { id: "fc10", de: "die Endungen: -e, -st, -t, -en, -t, -en", ar: "نهايات المضارع (السلسلة الذهبية)", example: "ich lerne, du lernst, er lernt", exampleAr: "أتعلم، تتعلم، يتعلم", level: "A1" },
  ],

  /* ═══ مهام الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a1-01-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص بطاقة تعريف ألمانية لصديق لا يفهم الألمانية",
      sourceDe: "Hallo! Ich heiße Karim und komme aus Tunesien. Ich wohne in Tunis und lerne Deutsch.",
      sourceAr: "مرحباً! اسمي كريم وأنا من تونس. أسكن في تونس وأتعلم الألمانية.",
      taskAr: "نقل الرسالة أعلاه بالعربية إلى صديق لا يفهم الألمانية، مع الحفاظ على كل المعلومات (الاسم، البلد، المدينة، النشاط).",
      modelAnswerAr: "«مرحباً! صديقي اسمه كريم، وهو من تونس. يسكن في مدينة تونس ويتعلم اللغة الألمانية.»",
      keyPointsAr: ["ذكرت الاسم (كريم)", "ذكرت البلد (تونس)", "ذكرت المدينة (تونس)", "ذكرت أنه يتعلم الألمانية"],
    },
    {
      id: "med-a1-01-2",
      type: "relay-instructions",
      titleAr: "انقل تعليمات بسيطة: كيف تتهجى الاسم؟",
      sourceDe: "Buchstabiere bitte deinen Namen! — K-A-R-I-M",
      taskAr: "اشرح لصديقك بالعربية كيف يتهجّى اسمه بالألمانية، موضحاً أن كل حرف يُنطق باسمه الألماني.",
      modelAnswerAr: "«التهجئة بالألمانية: نقول اسم كل حرف على حدة — K تُنطق كا، A آ، R إر، I إي، M إم. هكذا: كا-آ-إر-إي-إم.»",
      keyPointsAr: ["شرحت معنى buchstabieren (التهجئة)", "ذكرت مثالاً على التهجئة حرفاً حرفاً"],
    },
  ],
  interaction: [
    {
      id: "int-a1-01-1",
      scenarioAr: "تلتقي شخصاً ألمانياً لأول مرة في حفلة. هو يبدأ الحديث.",
      scenarioDe: "Du triffst eine deutsche Person auf einer Party.",
      strategyAr: "الاستراتيجية المستهدفة: افتتاح محادثة والرد على أسئلة التعارف.",
      rounds: [
        {
          speakerDe: "Hallo! Ich bin Lisa. Und du?",
          speakerAr: "مرحباً! أنا ليزا. وأنت؟",
          options: [
            { de: "Hallo Lisa! Ich heiße Karim. Freut mich!", ar: "مرحباً ليزا! اسمي كريم. سعيد بلقائك!", best: true, replyDe: "Freut mich auch, Karim! Woher kommst du?", replyAr: "سعيدة بلقائك أيضاً يا كريم! من أين أنت؟" },
            { de: "Ich bin ein Tisch.", ar: "أنا طاولة.", best: false, replyDe: "Haha, sehr lustig! Aber woher kommst du wirklich?", replyAr: "هاها، مضحك جداً! لكن من أين أنت حقاً؟" },
          ],
        },
        {
          speakerDe: "Woher kommst du, Karim?",
          speakerAr: "من أين أنت يا كريم؟",
          options: [
            { de: "Ich komme aus Tunesien. Und du?", ar: "أنا من تونس. وأنتِ؟", best: true, replyDe: "Aus Deutschland, aus Berlin. Ich wohne dort.", replyAr: "من ألمانيا، من برلين. أسكن هناك." },
            { de: "Ich wohne in einem Haus.", ar: "أسكن في بيت.", best: false, replyDe: "Das ist schön, aber woher kommst du?", replyAr: "جميل، لكن من أين أنت؟" },
          ],
        },
        {
          speakerDe: "Was machst du hier in Deutschland?",
          speakerAr: "ماذا تفعل هنا في ألمانيا؟",
          options: [
            { de: "Ich lerne Deutsch. Ich wohne hier.", ar: "أتعلم الألمانية. أسكن هنا.", best: true, replyDe: "Sehr gut! Viel Erfolg beim Deutschlernen!", replyAr: "ممتاز! حظاً موفقاً في تعلم الألمانية!" },
            { de: "Ich bin ein Auto.", ar: "أنا سيارة.", best: false, replyDe: "Du bist ein Auto? Okay, komisch! Tschüss!", replyAr: "أنت سيارة؟ حسناً، غريب! إلى اللقاء!" },
          ],
        },
      ],
    },
  ],
};
