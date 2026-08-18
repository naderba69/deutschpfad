import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-06: الإعلام والأخبار — dass (الجملة المكملة) + الرأي
 */
export const lessonA206: Lesson = {
  id: "a2-06",
  unitId: "a2-06",
  level: "A2",
  order: 1,
  titleDe: "Medien und Nachrichten",
  titleAr: "الإعلام والأخبار",
  duration: 35,
  summary:
    "وسائل الإعلام، التعبير عن الرأي، والجملة الثانوية بـ dass (أنّ): Ich glaube, dass... مع قاعدة الفعل في نهاية الجملة الثانوية.",

  lernziele: [
    { id: "z1", de: "Ich kann über Medien sprechen.", ar: "أن أتحدث عن الإعلام: تلفاز، صحيفة، إنترنت." },
    { id: "z2", de: "Ich kann meine Meinung sagen.", ar: "أن أعبر عن رأيي: Ich finde / Ich glaube / Ich denke." },
    { id: "z3", de: "Ich kann Nebensätze mit dass bilden.", ar: "أن أبني جملة ثانوية بـ dass مع الفعل في النهاية." },
      { id: "z4", de: "Ich kann eine einfache Nachricht zusammenfassen.", ar: "أن ألخص خبراً أو رسالة بسيطة بالعربية أو الألمانية." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "لاحظ قاعدة الألمانية الذهبية: في الجملة الرئيسية الفعل في المركز الثاني. لكن ماذا يحدث عندما تقول «أعتقد أنّ...»؟ الجملة بعد «أنّ» تقلب القاعدة! الفعل يهرب إلى النهاية. خمّن لماذا؟",
    motivatingQuestionDe: "Was denkst du über die Nachrichten?",
    contextAr:
      "وسائل الإعلام جزء من حياتنا: نتعلم كلماتها، ونضيف أول جملة ثانوية حقيقية: dass (أنّ) — وهي بوابتك لفهم بقية الجمل الثانوية في B1.",
    contextDe: "Ich finde, dass das Fernsehen zu viel Werbung zeigt.",
    connectionToPreviousAr: "في A1 تعلمت: Ich finde das schön. اليوم نطورها: Ich finde, dass + جملة كاملة. — من جملة بسيطة إلى فكرة مركبة.",
    activateVocabulary: [
      { de: "das Fernsehen", ar: "التلفاز" },
      { de: "die Zeitung", ar: "الصحيفة" },
      { de: "das Internet", ar: "الإنترنت" },
      { de: "die Nachrichten", ar: "الأخبار" },
      { de: "die Meinung", ar: "الرأي" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ das Kleid sehr schön. (رأي)",
      options: ["finde", "findest", "findet", "finden"],
      correctIndex: 0,
      explanation: "مع ich: finde (درس الملابس).",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر المعنى:",
      questionDe: "Ich sehe gern fern.",
      options: ["أشاهد التلفاز بسرور", "أقرأ الصحيفة", "أستمع للراديو", "أكتب بريداً"],
      correctIndex: 0,
      explanation: "fernsehen = يشاهد التلفاز (درس الروتين).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل بالضمير:",
      template: "Ich höre gern ___.",
      blanks: [
        { correct: "Musik", options: ["Musik", "Zeitung", "Nachricht"] },
      ],
      explanation: "أحب الاستماع للموسيقى (درس الهوايات).",
      errorType: "vocabulary",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الجملة الثانوية بـ dass (أنّ) — الفعل في النهاية",
      titleDe: "Der Nebensatz mit „dass“",
      explanationAr:
        "dass = أنّ. بعدها تأتي جملة كاملة لكن بترتيب مختلف: الفعل يذهب إلى النهاية. Ich glaube, dass er heute kommt. (أعتقد أنه يأتي اليوم). الجملة الرئيسية طبيعية، والثانوية: dass + فاعل + ... + فعل في النهاية.",
      whyAr:
        "لماذا الفعل في النهاية؟ لأن الجملة الثانوية في الألمانية «قوس» يفتحه dass ويغلقه الفعل. هذا يبقي كل المعلومات في المنتصف ويجعل الفعل علامة الإغلاق — نظام ثابت يحفظه الدماغ بسهولة بعد التدريب.",
      table: {
        title: "أفعال الرأي + dass",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "Ich finde,", cells: ["أجد أنّ", "Ich finde, dass der Film gut ist."] },
          { label: "Ich glaube,", cells: ["أعتقد أنّ", "Ich glaube, dass es morgen regnet."] },
          { label: "Ich denke,", cells: ["أظنّ أنّ", "Ich denke, dass das stimmt."] },
          { label: "Ich hoffe,", cells: ["آمل أنّ", "Ich hoffe, dass du kommst."] },
        ],
      },
      examples: [
        { de: "Ich finde, dass das Fernsehen viel Werbung zeigt.", ar: "أجد أن التلفاز يعرض إعلانات كثيرة." },
        { de: "Ich glaube, dass die Nachrichten heute wichtig sind.", ar: "أعتقد أن الأخبار اليوم مهمة." },
        { de: "Ich hoffe, dass du morgen kommst.", ar: "آمل أن تأتي غداً." },
        { de: "Er sagt, dass er keine Zeit hat.", ar: "يقول إنه لا وقت عنده." },
        { de: "Ich denke, dass das Internet zu viel Zeit kostet.", ar: "أظن أن الإنترنت يكلف وقتاً كثيراً." },
      ],
      comparisonWithArabic:
        "«أعتقد أنّه يأتي اليوم» — العربية تضع الجملة عادية. الألمانية: Ich glaube, dass er heute kommt — الفعل في النهاية. الترجمة الحرفية: «أعتقد أنّه اليوم يأتي». هذا الترتيب يشبه العربية الفصحى في «إنّ» أحياناً!",
      eselsbruecke:
        "«dass = أنّ، والفعل يفرّ للنهاية»: Ich glaube, dass ... kommt. تخيل dass «يغلق الباب» خلف الجملة والفعل آخر شيء.",
      commonMistakes: [
        { wrong: "Ich glaube, dass er kommt heute. (الفعل في منتصف الثانوية)", right: "Ich glaube, dass er heute kommt.", whyAr: "الفعل في نهاية الجملة الثانوية دائماً." },
        { wrong: "Ich glaube, dass ich habe keine Zeit.", right: "Ich glaube, dass ich keine Zeit habe.", whyAr: "habe في النهاية — كل الأفعال تذهب للنهاية، حتى المساعدة." },
        { wrong: "خلط dass (أنّ) مع das (أداة)", right: "dass بمعنى أنّ / das أداة تعريف", whyAr: "dass حرف ربط (بـ ss)، das أداة (بـ s واحدة)." },
      ],
      relatedRuleComparison: {
        title: "dass أم weil؟",
        content: "dass = أنّ (تكملة فكرة: Ich denke, dass...). weil = لأنّ (سبب: Ich lerne, weil ich will). كلاهما يرسل الفعل للنهاية — لكن الوظيفة مختلفة: مكملة أم سببية. سنأخذ weil في درس لاحق.",
      },
    },
    {
      id: "t2",
      titleAr: "جمل dass: الفعل في النهاية",
      titleDe: "Erweiterung",
      explanationAr: "الجملة الثانوية مع dass (أنّ) تنقلب: الفعل يذهب للنهاية. Ich glaube, dass Deutsch wichtig ist. ملاحظة: عندما يكون الفعل مركّباً (مثلاً kann lernen) يذهب الجزء المتصرف للنهاية: Ich denke, dass du gut Deutsch lernen kannst.",
      whyAr: "لماذا؟ لأن ترتيب الفعل في الجمل الثانوية هو الفرق الأكبر بين العربية والألمانية — والخطأ فيه يفقد نصف المعنى.",
      examples: [
        { de: "Ich finde, dass die Nachrichten interessant sind.", ar: "أجد أن الأخبار مثيرة للاهتمام." }, { de: "Sie sagt, dass sie morgen kommt.", ar: "تقول إنها ستأتي غداً." }
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
        title: "نقاش عن الإعلام",
        lines: [
          { speaker: "Mona", de: "Ich sehe jeden Tag fern. Ich finde, dass die Serien gut sind.", ar: "أشاهد التلفاز كل يوم. أجد أن المسلسلات جيدة." },
          { speaker: "Karim", de: "Ich denke, dass das Fernsehen zu viel Werbung zeigt.", ar: "أظن أن التلفاز يعرض إعلانات كثيرة." },
          { speaker: "Mona", de: "Ja, aber ich lese auch die Zeitung.", ar: "نعم، لكنني أقرأ الصحيفة أيضاً." },
          { speaker: "Karim", de: "Ich lese lieber Nachrichten im Internet. Ich glaube, dass es schneller ist.", ar: "أفضل قراءة الأخبار على الإنترنت. أعتقد أنه أسرع." },
          { speaker: "Mona", de: "Stimmt! Das Internet ist wirklich schnell.", ar: "صحيح! الإنترنت سريع فعلاً." },
          { speaker: "Karim", de: "Und soziale Medien? Ich glaube, dass sie viel Zeit kosten.", ar: "ووسائل التواصل الاجتماعي؟ أعتقد أنها تستهلك وقتاً كثيراً." },
          { speaker: "Mona", de: "Ja, aber man findet dort auch gute Informationen.", ar: "نعم، لكن المرء يجد فيها أيضاً معلومات جيدة." },
        ],
      },
      {
        id: "l2",
        title: "ما الذي يقرأه الألمان؟",
        lines: [
          { speaker: "Lehrer", de: "Was liest du gern, Anna?", ar: "ماذا تحبين أن تقرئي يا آنا؟" },
          { speaker: "Anna", de: "Ich lese gern die Zeitung. Ich finde, dass die Artikel interessant sind.", ar: "أحب قراءة الصحيفة. أجد أن المقالات ممتعة." },
          { speaker: "Lehrer", de: "Und du, Sami?", ar: "وأنت يا سامي؟" },
          { speaker: "Sami", de: "Ich lese Nachrichten im Internet. Ich glaube, dass es praktisch ist.", ar: "أقرأ الأخبار على الإنترنت. أعتقد أنه عملي." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was denkt Karim über das Fernsehen?",
        questionAr: "ماذا يظن كريم عن التلفاز؟",
        options: ["Es zeigt zu viel Werbung", "Es ist langweilig", "Es ist schnell", "Es ist teuer"],
        correctIndex: 0,
        explanation: "قال كريم: Ich denke, dass das Fernsehen zu viel Werbung zeigt.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo liest Karim Nachrichten?",
        questionAr: "أين يقرأ كريم الأخبار؟",
        options: ["im Internet", "in der Zeitung", "im Fernsehen", "im Radio"],
        correctIndex: 0,
        explanation: "قال: Ich lese lieber Nachrichten im Internet.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was findet Anna über die Artikel?",
        questionAr: "ماذا تجد آنا في المقالات؟",
        options: ["Sie sind interessant", "Sie sind langweilig", "Sie sind kurz", "Sie sind teuer"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich finde, dass die Artikel interessant sind.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الإعلام: ig، sch، وie",
    items: [
      { de: "die Zeitung", ar: "الصحيفة", note: "ei = آي + g = خ: تسايْتونغ" },
      { de: "das Fernsehen", ar: "التلفاز", note: "s بين علة = ز: فِرن-زيهِن" },
      { de: "die Nachricht", ar: "الخبر", note: "ch = خ: ناخ-ريشت" },
      { de: "die Werbung", ar: "الإعلانات", note: "w = ڤ + b = پ: ڤِربونغ" },
      { de: "das Radio", ar: "الراديو", note: "d = د: راديو" },
      { de: "die Meinung", ar: "الرأي", note: "ei = آي: مايْنونغ" },
    ],
    tip: "زمن الكلمات بـ -ung (نهاية شائعة جداً): Zeitung، Werbung، Meinung — كلها مؤنثة (die). اكسب عشرات الكلمات بحفظ هذه النهاية!",
    shadowing: [
      { de: "Ich sehe gern fern.", ar: "أشاهد التلفاز بسرور.", tip: "fernsehen: fern في النهاية عند التصريف" },
      { de: "Ich lese die Zeitung.", ar: "أقرأ الصحيفة.", tip: "Zeitung = تسايْتونغ" },
      { de: "Ich glaube, dass es stimmt.", ar: "أعتقد أنه صحيح.", tip: "stimmt = شتِمْت (st=شت)" },
      { de: "Die Nachrichten sind wichtig.", ar: "الأخبار مهمة.", tip: "Nachrichten = ناخريشتن" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب رأيك بجملة dass:",
      prompt: "اكتب: «أعتقد أن الأخبار مهمة» بالألمانية",
      acceptedAnswers: ["Ich glaube, dass die Nachrichten wichtig sind", "Ich finde, dass die Nachrichten wichtig sind", "Ich denke, dass die Nachrichten wichtig sind"],
      sampleAnswer: "Ich glaube, dass die Nachrichten wichtig sind.",
      explanation: "الصيغة: Ich glaube + dass + الجملة + الفعل في النهاية (sind).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الجملة الثانوية (الفعل في النهاية):",
      template: "Ich finde, dass der Film gut ___ (sein). Ich hoffe, dass du ___ (kommen).",
      blanks: [
        { correct: "ist", options: ["ist", "sein", "wird"] },
        { correct: "kommst", options: ["kommst", "kommt", "kommen"] },
      ],
      explanation: "الفعل في نهاية الثانوية: dass ... ist / dass ... kommst.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich finde, dass das Internet praktisch ist.",
      explanation: "أجد أن الإنترنت عملي — dass مع الفعل ist في النهاية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich glaube, dass er heute ___.",
      options: ["kommt", "kommen", "kommst", "komme"],
      correctIndex: 0,
      explanation: "مع er في الثانوية: kommt (في النهاية).",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر حرف الربط الصحيح:",
      questionDe: "Ich denke, ___ das stimmt.",
      options: ["dass", "das", "weil", "wenn"],
      correctIndex: 0,
      explanation: "dass = أنّ (بـ ss). das أداة تعريف.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الوسيلة الإعلامية بمعناها:",
      pairs: [
        { left: "das Fernsehen", right: "التلفاز" },
        { left: "die Zeitung", right: "الصحيفة" },
        { left: "das Internet", right: "الإنترنت" },
        { left: "das Radio", right: "الراديو" },
      ],
      explanation: "الوسائل الأربع الأساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه: الفعل في النهاية):",
      tokens: ["glaubt", "dass", "Er", "kommt", "sie", "."],
      correctSentence: "Er glaubt, dass sie kommt.",
      explanation: "يعتقد أنها تأتي: Er + glaubt + dass sie kommt (الفعل في النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich glaube, dass er kommt heute.",
      wrongWord: "kommt heute",
      correctWord: "heute kommt",
      options: ["heute kommt", "kommt heute", "heute kommt heute", "kommst heute"],
      explanation: "الفعل في نهاية الجملة الثانوية: dass er heute kommt.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بفعل الرأي الصحيح (glaube/denke/hoffe):",
      template: "Ich ___, dass es morgen regnet. Ich ___, dass du Erfolg hast. Ich ___, dass wir uns sehen.",
      blanks: [
        { correct: "glaube", options: ["glaube", "hoffe", "weiß"] },
        { correct: "hoffe", options: ["glaube", "hoffe", "weiß"] },
        { correct: "hoffe", options: ["glaube", "hoffe", "weiß"] },
      ],
      explanation: "أعتقد (glaube)، آمل (hoffe) — اختر حسب المعنى.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملتين إلى جملة dass:",
      prompt: "Ich denke. + Der Film ist gut. → (جملة واحدة بـ dass)",
      acceptedAnswers: ["Ich denke, dass der Film gut ist", "Ich finde, dass der Film gut ist"],
      sampleAnswer: "Ich denke, dass der Film gut ist.",
      explanation: "ادمجهما: Ich denke + dass + der Film gut ist.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die Werbung",
      questionAr: "ما معنى الكلمة؟",
      options: ["الإعلانات", "الأخبار", "الصحيفة", "الرأي"],
      correctIndex: 0,
      explanation: "die Werbung = الإعلانات (في التلفاز مثلاً).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich finde, dass der Artikel ist interessant.",
      wrongWord: "ist interessant",
      correctWord: "interessant ist",
      options: ["interessant ist", "ist interessant", "interessant sein", "interessant bist"],
      explanation: "الفعل في النهاية: dass der Artikel interessant ist.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich hoffe, dass du morgen kommst.",
      explanation: "آمل أن تأتي غداً — dass ... kommst (الفعل في النهاية).",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich glaube, dass er kommt heute.", right: "Ich glaube, dass er heute kommt.", whyAr: "الفعل في نهاية الجملة الثانوية دائماً." },
      { wrong: "das (أداة) بدل dass (حرف ربط)", right: "dass بـ ss للربط، das بـ s للأداة", whyAr: "حيلة: dass = أنّ. إذا أمكنك استبدالها بـ«أنّ» فهي dass." },
      { wrong: "Ich denke, dass ich habe keine Zeit.", right: "Ich denke, dass ich keine Zeit habe.", whyAr: "كل الأفعال في النهاية — حتى المساعدة." },
    ],
    eselsbruecken: [
      "«dass يغلق الباب: كل ما بعده يسبقه الفعل في النهاية».",
      "اختبر dass: هل تعني «أنّ»؟ نعم → dass (بـ ss).",
    ],
    culturalNote: {
      title: "الإعلام الألماني",
      content:
        "القنوات العامة الألمانية (ARD, ZDF) تمول برسوم «Rundfunkbeitrag» (~18 يورو شهرياً) — ولهذا قليلة الإعلانات. والألمان يقرؤون كثيراً: الصحيفة اليومية «die Tageszeitung» عادة. وأشهرها: Süddeutsche Zeitung، Frankfurter Allgemeine (FAZ).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich glaube, dass der Film gut ___.",
      options: ["ist", "sein", "werden", "bist"],
      correctIndex: 0,
      explanation: "الفعل في النهاية: dass ... ist.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر حرف الربط:",
      questionDe: "Ich finde, ___ die Zeitung gut ist.",
      options: ["dass", "das", "weil", "denn"],
      correctIndex: 0,
      explanation: "dass = أنّ (جملة مكملة).",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["dass", "Hoffe", "ich", "du", "kommst", "Ich", ","],
      correctSentence: "Ich hoffe, dass du kommst.",
      explanation: "آمل أن تأتي: Ich hoffe + dass du kommst (الفعل في النهاية).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Er sagt, dass er hat keine Zeit.",
      wrongWord: "hat keine Zeit",
      correctWord: "keine Zeit hat",
      options: ["keine Zeit hat", "hat keine Zeit", "keine Zeit haben", "keine Zeit habt"],
      explanation: "الفعل المساعد أيضاً في النهاية: dass er keine Zeit hat.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الجملة الثانوية:",
      template: "Ich denke, dass die Nachrichten wichtig ___. Ich glaube, dass er morgen ___.",
      blanks: [
        { correct: "sind", options: ["sind", "ist", "sein"] },
        { correct: "kommt", options: ["kommt", "kommen", "kommst"] },
      ],
      explanation: "sind (جمع) وkommt (مفرد) في نهاية الجملة الثانوية.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Fernsehen", ar: "التلفاز", example: "Ich sehe fern.", exampleAr: "أشاهد التلفاز.", level: "A2" },
    { id: "fc2", de: "die Zeitung", ar: "الصحيفة", example: "Ich lese die Zeitung.", exampleAr: "أقرأ الصحيفة.", level: "A2" },
    { id: "fc3", de: "das Internet", ar: "الإنترنت", example: "Das Internet ist schnell.", exampleAr: "الإنترنت سريع.", level: "A2" },
    { id: "fc4", de: "die Nachrichten", ar: "الأخبار", example: "Die Nachrichten sind wichtig.", exampleAr: "الأخبار مهمة.", level: "A2" },
    { id: "fc5", de: "die Werbung", ar: "الإعلانات", example: "Zu viel Werbung!", exampleAr: "إعلانات كثيرة جداً!", level: "A2" },
    { id: "fc6", de: "dass", ar: "أنّ (حرف ربط)", example: "Ich glaube, dass es stimmt.", exampleAr: "أعتقد أنه صحيح.", level: "A2" },
    { id: "fc7", de: "Ich finde / glaube / denke", ar: "أجد / أعتقد / أظن", example: "Ich finde, dass ...", exampleAr: "أجد أنّ...", level: "A2" },
    { id: "fc8", de: "die Meinung", ar: "الرأي", example: "Meine Meinung ist wichtig.", exampleAr: "رأيي مهم.", level: "A2" },
  ],

  mediation: [
    {
      id: "med-a2-06-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً قصيراً بالعربية لصديق",
      sourceDe: "Die Stadt baut einen neuen Park. Die Bauarbeiten beginnen im Mai und dauern ein Jahr. Der Park bekommt viele Bäume und einen Spielplatz.",
      taskAr: "انقل الخبر بالعربية مع الحفاظ على المعلومات: ماذا سيُبنى، متى، وما الذي سيحتويه.",
      modelAnswerAr: "«المدينة تبني حديقة جديدة. تبدأ الأعمال في مايو وتستمر سنة. ستضم الحديقة أشجاراً كثيرة وملعباً للأطفال.»",
      keyPointsAr: ["نقلت فكرة بناء الحديقة", "ذكرت موعد البدء (مايو) والمدة (سنة)", "ذكرت المحتويات (أشجار + ملعب)"],
    },
  ],
  interaction: [
    {
      id: "int-a2-06-1",
      scenarioAr: "صديق يسأل رأيك عن وسائل التواصل الاجتماعي.",
      scenarioDe: "Ein Freund fragt nach deiner Meinung über soziale Medien.",
      strategyAr: "الاستراتيجية: إبداء الرأي بـ (Ich finde, dass...) والموافقة/الاعتراض بلطف.",
      rounds: [
        {
          speakerDe: "Was hältst du von sozialen Medien?",
          speakerAr: "ما رأيك في وسائل التواصل الاجتماعي؟",
          options: [
            { de: "Ich finde, dass sie praktisch sind, aber man verbringt zu viel Zeit damit.", ar: "أجد أنها عملية، لكن الإنسان يقضي فيها وقتاً طويلاً جداً.", best: true, replyDe: "Das stimmt. Wie viel Zeit verbringst du am Tag damit?", replyAr: "هذا صحيح. كم ساعة تقضي فيها يومياً؟" },
            { de: "Ich finde sie nicht gut und fertig.", ar: "لا أجدها جيدة والنهاية.", best: false, replyDe: "Kannst du das begründen? Nur „nicht gut“ ist wenig.", replyAr: "هل يمكنك تبرير ذلك؟ «غير جيدة» وحدها قليلة." },
          ],
        },
        {
          speakerDe: "Wie viel Zeit verbringst du in sozialen Medien?",
          speakerAr: "كم من الوقت تقضي في وسائل التواصل؟",
          options: [
            { de: "Etwa zwei Stunden am Tag. Ich glaube, das ist zu viel.", ar: "حوالي ساعتين يومياً. أعتقد أن هذا كثير.", best: true, replyDe: "Zwei Stunden? Das ist wirklich viel. Vielleicht weniger?", replyAr: "ساعتان؟ هذا كثير فعلاً. ربما أقل؟" },
            { de: "Ich verbringe keine Zeit, weil ich kein Handy habe.", ar: "لا أقضي وقتاً لأنني بلا هاتف.", best: false, replyDe: "Wirklich? Wie kommunizierst du dann mit Freunden?", replyAr: "حقاً؟ كيف تتواصل إذن مع الأصدقاء؟" },
          ],
        },
        {
          speakerDe: "Sollte man soziale Medien weniger benutzen?",
          speakerAr: "هل يجب استخدام وسائل التواصل أقل؟",
          options: [
            { de: "Ja, ich denke, dass man mehr Zeit mit Freunden verbringen sollte. Aber sie sind auch nützlich für die Arbeit.", ar: "نعم، أعتقد أن الإنسان يجب أن يقضي وقتاً أطول مع الأصدقاء. لكنها مفيدة أيضاً للعمل.", best: true, replyDe: "Das ist eine gute Meinung. Ich stimme dir zu!", replyAr: "هذا رأي جيد. أوافقك الرأي!" },
            { de: "Nein, alles ist gut so.", ar: "لا، كل شيء جيد كما هو.", best: false, replyDe: "Okay, aber viele Studien sagen etwas anderes.", replyAr: "حسناً، لكن دراسات كثيرة تقول غير ذلك." },
          ],
        },
      ],
    },
  ],
};
