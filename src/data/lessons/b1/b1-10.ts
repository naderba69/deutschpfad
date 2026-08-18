import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-10: المستقبل والخطط — خاتمة B1 (مراجعة شاملة)
 */
export const lessonB110: Lesson = {
  id: "b1-10",
  unitId: "b1-10",
  level: "B1",
  order: 1,
  titleDe: "Zukunft und Pläne",
  titleAr: "المستقبل والخطط",
  duration: 40,
  summary:
    "التحدث عن خطط المستقبل، مراجعة شاملة لكل قواعد B1 (Genitiv، Relativsätze، Konjunktiv II، Passiv، Adjektivdeklination)، وخاتمة المستوى المتوسط.",

  lernziele: [
    { id: "z1", de: "Ich kann über Zukunftspläne sprechen.", ar: "أن أتحدث عن خططي وأهدافي المستقبلية." },
    { id: "z2", de: "Ich kann alle B1-Grammatik kombinieren.", ar: "أن أجمع كل قواعد B1 في جمل مركبة." },
    { id: "z3", de: "Ich bin bereit für B2!", ar: "أن أكون جاهزاً للمستوى المتقدم B2!" },
      { id: "z4", de: "Ich kann über meine Zukunftspläne sprechen und begründen.", ar: "أن أتحدث عن خططي المستقبلية وأبررها." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "أنت الآن عند قمة B1! هذا الدرس الأخير يجمّع كل ما تعلمته في هذا المستوى: Genitiv، Relativsätze، Konjunktiv II، Passiv، Adjektivdeklination، الروابط المزدوجة. هل تستطيع كتابة جملة تجمع أكثر من قاعدة؟ هذه مهارة B1 الحقيقية!",
    motivatingQuestionDe: "Was sind deine Pläne für die Zukunft?",
    contextAr:
      "نخطط للمستقبل ونراجع المستوى كله: في هذا الدرس سترى كيف تتداخل القواعد — وستشعر بقفزة مستواك.",
    contextDe: "Ich werde in Deutschland studieren, was ich mir schon lange gewünscht habe.",
    connectionToPreviousAr: "هذا ختام B1: من Genitiv (درس 1) إلى الروابط المزدوجة (درس 8) — كل شيء يجتمع في درس الخطط.",
    activateVocabulary: [
      { de: "die Zukunft", ar: "المستقبل" },
      { de: "der Plan", ar: "الخطة" },
      { de: "das Ziel", ar: "الهدف" },
      { de: "wünschen", ar: "يتمنى" },
      { de: "entscheiden", ar: "يقرر" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الصيغة الصحيحة:",
      questionDe: "Das Buch ___ Lehrers ist neu. (مضاف)",
      options: ["des", "der", "dem", "den"],
      correctIndex: 0,
      explanation: "Genitiv: des Lehrers (درس التعليم).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الشرطية:",
      questionDe: "Wenn ich reich ___, würde ich reisen.",
      options: ["wäre", "bin", "war", "werde"],
      correctIndex: 0,
      explanation: "Konjunktiv II: wäre (درس الإعلام).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1: أكمل المجهول:",
      template: "Das Haus ___ gebaut. (بُني — ماضٍ)",
      blanks: [
        { correct: "wurde", options: ["wurde", "wird", "ist"] },
      ],
      explanation: "ماضٍ مجهول: wurde gebaut (درس البيئة).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "جمع قواعد B1 في جمل مركبة",
      titleDe: "Alles kombinieren: Der B1-Test",
      explanationAr:
        "الجملة المركبة الحقيقية تجمع قواعد متعددة: Der Student, der Deutsch lernt, möchte später in Deutschland studieren, weil er die Kultur liebt und weil er bessere Chancen haben wird. لاحظ: Relativsatz (der... lernt) + Nebensatz (weil... liebt) + Futur (haben wird). هذا هو مستوى B1!",
      whyAr:
        "لماذا «الجمع» هو الامتحان؟ لأن الحياة لا تتحدث بقاعدة واحدة: تريد أن تصف، تعلّل، تخطط، وتفترض في نفس الجملة. القدرة على «التداخل» — جملة ثانوية داخل أخرى — هي ما يميز B1 عن A2.",
      table: {
        title: "خريطة قواعد B1",
        columns: ["القاعدة", "المثال", "الدرس"],
        rows: [
          { label: "Genitiv", cells: ["das Buch des Lehrers", "B1-01"] },
          { label: "Relativsatz", cells: ["Der Mann, der dort steht", "B1-01"] },
          { label: "Präteritum + Plusquamperfekt", cells: ["Bevor ich studierte, hatte ich gearbeitet", "B1-02"] },
          { label: "Passiv", cells: ["Das Haus wird gebaut", "B1-03"] },
          { label: "Konjunktiv II", cells: ["Wenn ich reich wäre, würde ich reisen", "B1-04/05"] },
          { label: "Adjektivdeklination", cells: ["ein gutes Buch", "B1-06"] },
          { label: "Temporalsätze", cells: ["Als ich jung war", "B1-07"] },
          { label: "Zweiteilige Konnektoren", cells: ["weder... noch", "B1-08"] },
          { label: "Nomen-Verb + n-Deklination", cells: ["eine Frage stellen / den Studenten", "B1-09"] },
        ],
      },
      examples: [
        { de: "Der Student, der Deutsch lernt, möchte in Deutschland studieren, weil er die Kultur liebt.", ar: "الطالب الذي يتعلم الألمانية يريد الدراسة في ألمانيا لأنه يحب الثقافة." },
        { de: "Wenn ich genug Geld hätte, würde ich ein Haus kaufen, das am Strand liegt.", ar: "لو كان عندي مال كافٍ لكنت اشتريت بيتاً يقع على الشاطئ." },
        { de: "Das Projekt, das gestern beschlossen wurde, wird nächste Woche beginnen.", ar: "المشروع الذي قُرر أمس سيبدأ الأسبوع القادم." },
        { de: "Je mehr ich lerne, desto besser verstehe ich die deutsche Kultur.", ar: "كلما تعلمت أكثر فهمت الثقافة الألمانية أفضل." },
        { de: "Ich habe weder Angst noch Zweifel, weil ich gut vorbereitet bin.", ar: "ليس لدي خوف ولا شك لأنني مستعد جيداً." },
      ],
      comparisonWithArabic:
        "العربية تبني جملة مركبة: «الطالب الذي... لأنه...» — الألمانية تفعل نفس الشيء مع ضبط الفعل في النهاية لكل جملة ثانوية. الفكرة: كل «الذي/لأن/إذا» تضيف طبقة زمنية — وB1 هو إتقان الطبقات.",
      eselsbruecke:
        "«B1 = طبقات»: كل رابط (der/weil/wenn/als...) يفتح طبقة يغلقها الفعل في نهايتها. عدّ الطبقات في جملتك — هذا هو مستواك!",
      commonMistakes: [
        { wrong: "Der Student, der Deutsch lernt, er möchte... (تكرير)", right: "Der Student, der Deutsch lernt, möchte...", whyAr: "الضمير النسبي يحل محل الفاعل — لا نعيده." },
        { wrong: "...weil er die Kultur liebt und er will studieren. (ترتيب)", right: "...weil er die Kultur liebt und weil er studieren will.", whyAr: "كل جزء ثانوي له فعله في النهاية." },
        { wrong: "Ich werde ein Haus kaufen, das am Strand liegt أم liegt؟", right: "das am Strand liegt (مضارع — واقع)", whyAr: "الجملة النسبية تصف البيت — لا تحتاج Futur." },
      ],
      relatedRuleComparison: {
        title: "امتحان B1 الجاهز",
        content: "نظام الاختبارات الكامل (المرحلة 10) سيحاكي Goethe-Zertifikat B1 بجميع المهارات. هذا الدرس مراجعة شاملة — أكمل Mini-Test وستكون جاهزاً!",
      },
    },
    {
      id: "t2",
      titleAr: "الجمل الشرطية غير الواقعية",
      titleDe: "Erweiterung",
      explanationAr: "الجملة الشرطية مع wenn تعبر عن: الحقيقية (Wenn ich Zeit habe, komme ich — مضارع)، وغير الواقعية (Wenn ich Zeit hätte, käme ich — Konjunktiv II). في غير الواقعية: wenn + Konjunktiv II، والنتيجة ebenfalls Konjunktiv II.",
      whyAr: "لماذا؟ لأن التمييز بين الشرط الحقيقي وغير الواقعي أساسي في B1 — والخلط بينهما يفقد الدقة.",
      examples: [
        { de: "Wenn ich genug Geld hätte, würde ich studieren.", ar: "لو كان لدي مال كافٍ لدرست." }, { de: "Wenn das Wetter schön wäre, gingen wir wandern.", ar: "لو كان الطقس جميلاً لتنزهنا." }
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
        title: "خطط سامي",
        lines: [
          { speaker: "Anna", de: "Was sind deine Pläne, Sami?", ar: "ما خططك يا سامي؟" },
          { speaker: "Sami", de: "Ich werde nächstes Jahr in Deutschland studieren.", ar: "سأدرس في ألمانيا السنة القادمة." },
          { speaker: "Anna", de: "An welcher Universität?", ar: "في أي جامعة؟" },
          { speaker: "Sami", de: "An der Universität, die in München liegt. Ich habe mich schon beworben.", ar: "في الجامعة التي تقع في ميونخ. تقدمت بالفعل." },
          { speaker: "Anna", de: "Wenn du angenommen wirst, wirst du umziehen.", ar: "إذا قُبلت ستنتقل." },
          { speaker: "Sami", de: "Genau! Und ich werde eine Wohnung suchen, die nicht zu teuer ist.", ar: "بالضبط! وسأبحث عن شقة ليست غالية جداً." },
        ],
      },
      {
        id: "l2",
        title: "أحلام وأهداف",
        lines: [
          { speaker: "Mona", de: "Mein größtes Ziel? Ich möchte eine eigene Firma gründen.", ar: "أكبر هدف لي؟ أريد تأسيس شركتي الخاصة." },
          { speaker: "Karim", de: "Das ist mutig! Was brauchst du dafür?", ar: "هذا شجاع! ماذا تحتاج لذلك؟" },
          { speaker: "Mona", de: "Ich brauche Geld, das ich noch nicht habe, und Erfahrung, die ich sammeln muss.", ar: "أحتاج مالاً ليس عندي بعد، وخبرة يجب أن أجمعها." },
          { speaker: "Karim", de: "Ich glaube, dass du es schaffst. Du bist fleißig!", ar: "أعتقد أنك ستنجحين. أنتِ مجتهدة!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wo will Sami studieren?",
        questionAr: "أين يريد سامي أن يدرس؟",
        options: ["in München", "in Berlin", "in Hamburg", "in Tunis"],
        correctIndex: 0,
        explanation: "قال سامي: An der Universität, die in München liegt.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was wird Sami suchen?",
        questionAr: "ماذا سيبحث سامي؟",
        options: ["eine nicht zu teure Wohnung", "eine große Wohnung", "eine Wohnung am Strand", "ein Haus"],
        correctIndex: 0,
        explanation: "قال: Ich werde eine Wohnung suchen, die nicht zu teuer ist.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist Monas größtes Ziel?",
        questionAr: "ما أكبر هدف لمنى؟",
        options: ["eine Firma gründen", "ein Haus kaufen", "nach Deutschland gehen", "ein Buch schreiben"],
        correctIndex: 0,
        explanation: "قالت منى: Ich möchte eine eigene Firma gründen.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "مراجعة أصوات B1",
    items: [
      { de: "die Zukunft", ar: "المستقبل", note: "z = تس + ch = خ: تسوكونفت" },
      { de: "würde", ar: "كنت سأفعل", note: "ü: ڤوردِه" },
      { de: "das Gemälde", ar: "اللوحة", note: "ä: غِميلدِه" },
      { de: "der Bürger", ar: "المواطن", note: "ü + r: بورغِر" },
      { de: "die Regierung", ar: "الحكومة", note: "ie = إي: رِغيرونغ" },
      { de: "während", ar: "بينما", note: "w = ڤ + ä: ڤيرِنت" },
    ],
    tip: "ستة أصوات B1 الصعبة — كررها يومياً: تسوكونفت، ڤوردِه، غِميلدِه، بورغِر، رِغيرونغ، ڤيرِنت.",
    shadowing: [
      { de: "Der Student, der dort steht, ist mein Freund.", ar: "الطالب الذي يقف هناك صديقي.", tip: "Relativsatz: der dort steht" },
      { de: "Wenn ich reich wäre, würde ich reisen.", ar: "لو كنت غنياً لسافرت.", tip: "Konjunktiv II: wäre + würde" },
      { de: "Das Haus wird gebaut.", ar: "البيت يُبنى.", tip: "Passiv: wird gebaut" },
      { de: "Je mehr ich lerne, desto besser.", ar: "كلما تعلمت أكثر كان أفضل.", tip: "je... desto" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب خطة مستقبلية مركبة:",
      prompt: "اكتب خطتك: «سأدرس في ألمانيا لأنني أحب الثقافة» (Futur + weil)",
      acceptedAnswers: ["Ich werde in Deutschland studieren, weil ich die Kultur liebe", "Ich werde in Deutschland studieren, weil ich die Kultur liebe."],
      sampleAnswer: "Ich werde in Deutschland studieren, weil ich die Kultur liebe.",
      explanation: "Futur (werde studieren) + weil + فعل في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بجملة مركبة:",
      template: "Der Mann, ___ dort arbeitet, ist mein Chef. (الذي) Wenn ich Zeit ___, würde ich mehr lernen. (كان عندي)",
      blanks: [
        { correct: "der", options: ["der", "den", "dem"] },
        { correct: "hätte", options: ["hätte", "habe", "hatte"] },
      ],
      explanation: "فاعل مذكر → der. شرطية → hätte.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل إلى المستقبل (Futur I) عن خططك:",
      instructionDe: "Schreibe im Futur I:",
      prompt: "Ich lerne Deutsch. → Nächstes Jahr ...",
      acceptedAnswers: ["Nächstes Jahr werde ich Deutsch lernen.", "Ich werde nächstes Jahr Deutsch lernen."],
      sampleAnswer: "Nächstes Jahr werde ich Deutsch lernen.",
      explanation: "المستقبل: werden + مصدر في نهاية الجملة — صياغة الأهداف والخطط.",
      errorType: "grammar",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر تكملة الجملة المركبة:",
      questionDe: "Der Mann, ___ dort steht, ist mein Vater.",
      options: ["der", "den", "dem", "dessen"],
      correctIndex: 0,
      explanation: "فاعل مذكر → der.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wenn ich Zeit ___, würde ich kommen.",
      options: ["hätte", "habe", "hatte", "haben"],
      correctIndex: 0,
      explanation: "شرطية: hätte.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل القاعدة بمثالها:",
      pairs: [
        { left: "Genitiv", right: "das Buch des Lehrers" },
        { left: "Passiv", right: "Das Haus wird gebaut" },
        { left: "Konjunktiv II", right: "Ich würde reisen" },
        { left: "Relativsatz", right: "Der Mann, der dort steht" },
      ],
      explanation: "مراجعة سريعة لأربع قواعد B1.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة المركبة:",
      tokens: ["Der", "lernt", "Student", "der", "Deutsch", "möchte", "studieren", "Deutschland", "in", ","],
      correctSentence: "Der Student, der Deutsch lernt, möchte in Deutschland studieren.",
      explanation: "جملة مركبة: Relativsatz + جملة رئيسية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Student, der Deutsch lernt, er möchte studieren.",
      wrongWord: "er möchte",
      correctWord: "möchte",
      options: ["möchte", "er möchte", "er will", "möchte er"],
      explanation: "الضمير النسبي يحل محل الفاعل — لا نعيده.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل الجمل المركبة:",
      template: "Das Haus, ___ am Strand liegt, ist teuer. Ich werde lernen, ___ ich will.",
      blanks: [
        { correct: "das", options: ["das", "der", "die"] },
        { correct: "weil", options: ["weil", "dass", "wenn"] },
      ],
      explanation: "نسبية محايد → das. سبب → weil.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اجمع الجملتين:",
      prompt: "Ich kenne einen Mann. + Der Mann spricht Deutsch. → (جملة نسبية)",
      acceptedAnswers: ["Ich kenne einen Mann, der Deutsch spricht", "Ich kenne einen Mann, der Deutsch spricht."],
      sampleAnswer: "Ich kenne einen Mann, der Deutsch spricht.",
      explanation: "الدمج: der Deutsch spricht.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich habe mich schon beworben.",
      questionAr: "ما معنى الجملة؟",
      options: ["تقدمت بالفعل", "سأقدم لاحقاً", "لم أتقدم بعد", "أريد أن أتقدم"],
      correctIndex: 0,
      explanation: "sich bewerben = يتقدم (للوظيفة/الدراسة): تقدمت بالفعل.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Je mehr ich lerne, desto besser verstehe ich. (هل الترتيب صحيح؟)",
      wrongWord: "verstehe ich",
      correctWord: "verstehe ich (صحيحة!)",
      options: ["verstehe ich (صحيحة!)", "ich verstehe", "verstehen ich", "ich verstehen"],
      explanation: "je... desto: الفعل بعد desto مباشرة — صحيحة!",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wenn ich genug Geld hätte, würde ich ein Haus kaufen.",
      explanation: "لو كان عندي مال كافٍ لاشتريت بيتاً — شرطية كاملة.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Der Student, der lernt, er möchte... (تكرير)", right: "Der Student, der lernt, möchte...", whyAr: "الضمير النسبي بديل." },
      { wrong: "Als ich Zeit habe (المضارع مع als)", right: "Wenn ich Zeit habe", whyAr: "als للماضي فقط." },
      { wrong: "Ich werde lernen werde (تضاعف)", right: "Ich werde lernen.", whyAr: "werden مرة واحدة." },
    ],
    eselsbruecken: [
      "«B1 = طبقات الجمل» — كل رابط يفتح طبقة يغلقها الفعل في النهاية.",
      "«خريطة B1»: Genitiv، نسبية، ماضٍ، مجهول، شرطية، صفات، زمن، روابط مزدوجة، وصلات.",
    ],
    culturalNote: {
      title: "ماذا بعد B1؟",
      content:
        "B1 هي عتبة الاندماج في ألمانيا: «Integrationskurs» يختتم بامتحان B1، والجنسية تتطلب B1 غالباً. وبعدها: B2 للجامعة والعمل المهني. أنت الآن تستطيع: محادثة يومية، قراءة أخبار، كتابة رسائل — احتفل بإنجازك! 🎉",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر تكملة الجملة المركبة:",
      questionDe: "Das Haus, ___ ich kaufen will, ist teuer.",
      options: ["das", "der", "die", "dem"],
      correctIndex: 0,
      explanation: "نسبية نصب محايد → das.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich werde nächstes Jahr in Deutschland ___.",
      options: ["studieren", "studiere", "studiert", "studiert haben"],
      correctIndex: 0,
      explanation: "Futur: werde + Infinitiv.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة المركبة:",
      tokens: ["Wenn", "hätte", "ich", "Geld", "würde", "ich", "reisen", ","],
      correctSentence: "Wenn ich Geld hätte, würde ich reisen.",
      explanation: "لو كان عندي مال لسافرت.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Mann, der dort steht, er ist mein Lehrer.",
      wrongWord: "er ist",
      correctWord: "ist",
      options: ["ist", "er ist", "er wird", "ist er"],
      explanation: "لا نكرر الضمير بعد النسبية.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الجمل المركبة:",
      template: "Das Projekt, ___ beschlossen wurde, beginnt bald. (الذي) Ich lerne, ___ ich will. (لأن)",
      blanks: [
        { correct: "das", options: ["das", "der", "die"] },
        { correct: "weil", options: ["weil", "dass", "wenn"] },
      ],
      explanation: "نسبية محايد → das. سبب → weil.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Zukunft", ar: "المستقبل", example: "Die Zukunft gehört uns.", exampleAr: "المستقبل لنا.", level: "B1" },
    { id: "fc2", de: "der Plan", ar: "الخطة", example: "Mein Plan ist klar.", exampleAr: "خطتي واضحة.", level: "B1" },
    { id: "fc3", de: "das Ziel", ar: "الهدف", example: "Ich habe ein Ziel.", exampleAr: "لدي هدف.", level: "B1" },
    { id: "fc4", de: "sich bewerben", ar: "يتقدم (لوظيفة/دراسة)", example: "Ich habe mich beworben.", exampleAr: "تقدمت.", level: "B1" },
    { id: "fc5", de: "die B1-Grammatik", ar: "قواعد B1", example: "Genitiv, Relativsatz, Passiv...", exampleAr: "مضاف، نسبية، مجهول...", level: "B1" },
    { id: "fc6", de: "der Integrationskurs", ar: "دورة الاندماج", example: "Der Integrationskurs endet mit B1.", exampleAr: "تنتهي دورة الاندماج بـ B1.", level: "B1" },
    { id: "fc7", de: "sich wünschen", ar: "يتمنى", example: "Ich wünsche mir Erfolg.", exampleAr: "أتمنى لنفسي النجاح.", level: "B1" },
    { id: "fc8", de: "die Chance", ar: "الفرصة", example: "Ich habe eine Chance.", exampleAr: "لدي فرصة.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b1-10-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن مستقبل العمل بالعربية",
      sourceDe: "Experten glauben, dass flexible Arbeitsmodelle die Zukunft sind. Homeoffice und Teilzeit werden immer beliebter, besonders bei jungen Menschen.",
      taskAr: "لخّص النص: ما الذي يراه الخبراء كمستقبل، وما الذي يزداد شعبية.",
      modelAnswerAr: "«يعتقد الخبراء أن نماذج العمل المرنة هي المستقبل. العمل عن بُعد والدوام الجزئي يزدادان شعبية، خاصة بين الشباب.»",
      keyPointsAr: ["نقلت توقع الخبراء (العمل المرن)", "ذكرت العمل عن بُعد والدوام الجزئي", "نقلت توجه الشباب"],
    },
  ],
      interaction: [
    {
      id: "int-b1-10-1",
      scenarioAr: "نقاش عن خططك المستقبلية المهنية.",
      scenarioDe: "Diskussion über deine Zukunftspläne.",
      strategyAr: "الاستراتيجية: التعبير عن الخطط والطموحات بأسلوب مهذب.",
      rounds: [
        {
          speakerDe: "Was sind deine Zukunftspläne?",
          speakerAr: "ما خططك المستقبلية؟",
          options: [
            { de: "Ich möchte nächstes Jahr einen Master machen und dann im Ausland arbeiten. Wenn alles klappt, starte ich in zwei Jahren.", ar: "أريد إكمال الماجستير العام القادم ثم العمل في الخارج. إذا سار كل شيء، أبدأ بعد سنتين.", best: true, replyDe: "Klingt nach einem guten Plan! Was ist dein Traumberuf?", replyAr: "يبدو خطة جيدة! ما مهنتك المثالية؟" },
            { de: "Ich habe keine Pläne, ich lebe nur in den Tag.", ar: "لا خطط لدي، أعيش يومي فقط.", best: false, replyDe: "Ein bisschen Planung hilft immer.", replyAr: "القليل من التخطيط يساعد دائماً." },
          ],
        },
        {
          speakerDe: "Was ist dein Traumberuf?",
          speakerAr: "ما مهنتك المثالية؟",
          options: [
            { de: "Ich träume davon, als Übersetzer zu arbeiten, weil ich Sprachen liebe und zwischen Kulturen vermitteln möchte.", ar: "أحلم بالعمل مترجماً لأنني أحب اللغات وأريد التوسط بين الثقافات.", best: true, replyDe: "Ein schöner Beruf mit Zukunft!", replyAr: "مهنة جميلة ولها مستقبل!" },
            { de: "Mein Traumberuf ist, nichts zu tun.", ar: "مهنتي المثالية ألا أفعل شيئاً.", best: false, replyDe: "Das ist kein Beruf, das ist Faulheit!", replyAr: "هذه ليست مهنة، هذا كسل!" },
          ],
        },
      ],
    },
  ],

};