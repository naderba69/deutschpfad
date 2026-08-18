import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-09: سوق العمل والتقديم — Nomen-Verb-Verbindungen المتقدمة + المراسلات الرسمية
 */
export const lessonB209: Lesson = {
  id: "b2-09",
  unitId: "b2-09",
  level: "B2",
  order: 1,
  titleDe: "Arbeitsmarkt und Bewerbung",
  titleAr: "سوق العمل والتقديم الوظيفي",
  duration: 45,
  summary:
    "ملفات التقديم ومقابلات العمل، الوصلات الاسمية-الفعلية المتقدمة (in Betracht ziehen, zur Verfügung stellen) والمراسلات الرسمية الكاملة بأسلوب أكاديمي.",

  lernziele: [
    { id: "z1", de: "Ich kann Bewerbungsunterlagen schreiben.", ar: "أن أكتب ملفات التقديم: خطاب + سيرة ذاتية." },
    { id: "z2", de: "Ich kann fortgeschrittene Nomen-Verb-Verbindungen benutzen.", ar: "أن أستخدم الوصلات الاسمية-الفعلية المتقدمة." },
    { id: "z3", de: "Ich kann formelle Briefe schreiben.", ar: "أن أكتب مراسلات رسمية كاملة بأسلوب أكاديمي." },
      { id: "z4", de: "Ich kann einen Arbeitsmarkttrend analysieren und bewerten.", ar: "أن أحلل اتجاهات سوق العمل وأقيّمها." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في B1 تعلمت: eine Frage stellen. اليوم وصلات B2 الأرقى: in Betracht ziehen (يأخذ بعين الاعتبار)، zur Verfügung stellen (يضع تحت التصرف)، eine Rolle spielen (يلعب دوراً)، Wert legen auf (يولي أهمية). هذه لغة المقابلات والمراسلات الرسمية.",
    motivatingQuestionDe: "Wie schreibt man eine gute Bewerbung?",
    contextAr:
      "سوق العمل الألماني: خطاب التقديم والسيرة الذاتية بأسلوب رسمي كامل — وستتعلم الوصلات المتقدمة التي تميز خطابك.",
    contextDe: "Ich möchte mich um die Stelle als Projektmanager bewerben.",
    connectionToPreviousAr: "تتذكر الوصلات الأساسية (eine Frage stellen) من B1. اليوم: المستوى المتقدم — وصلات المقابلات والمراسلات.",
    activateVocabulary: [
      { de: "der Arbeitsmarkt", ar: "سوق العمل" },
      { de: "die Stelle", ar: "المنصب" },
      { de: "die Bewerbung", ar: "التقديم" },
      { de: "das Anschreiben", ar: "خطاب التقديم" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الوصلة:",
      questionDe: "eine Frage ___",
      options: ["stellen", "treffen", "sagen", "nehmen"],
      correctIndex: 0,
      explanation: "السؤال يُطرح (درس التطوع B1).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الماضي:",
      questionDe: "Ich ___ drei Jahre in einer Firma.",
      options: ["arbeitete", "arbeite", "gearbeitet", "arbeitest"],
      correctIndex: 0,
      explanation: "Präteritum: arbeitete (درس العمل B1).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B2: أكمل:",
      template: "Die Bewerbung ist ___ worden. (أُرسلت)",
      blanks: [
        { correct: "geschickt", options: ["geschickt", "schickt", "schicken"] },
      ],
      explanation: "Passiv: geschickt worden (درس الاقتصاد B2).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الوصلات المتقدمة + المراسلات الرسمية",
      titleDe: "Fortgeschrittene Nomen-Verb-Verbindungen und formelle Briefe",
      explanationAr:
        "الوصلات المتقدمة: in Betracht ziehen (يأخذ بعين الاعتبار)، zur Verfügung stellen (يضع تحت التصرف)، eine Rolle spielen (يلعب دوراً)، Wert legen auf (يولي أهمية)، zum Ausdruck bringen (يعبّر عن)، in Kauf nehmen (يقبل بـ). للمراسلة: Sehr geehrte Damen und Herren، Mit freundlichen Grüßen، Anbei finden Sie... (مرفق تجدون...)، Ich bewerbe mich um die Stelle als...",
      whyAr:
        "لماذا هذه الوصلات؟ لأن خطاب التقديم الألماني «قوالب»: البداية (أي وظيفة)، الوسط (لماذا أنا)، النهاية (مقابلة أرجوها). والوصلات ترفع أسلوبك من «جيد» إلى «ممتاز» في نظر أصحاب العمل.",
      table: {
        title: "وصلات B2 المتقدمة",
        columns: ["الوصلة", "المعنى", "مثال"],
        rows: [
          { label: "in Betracht ziehen", cells: ["يأخذ بعين الاعتبار", "Ich ziehe die Stelle in Betracht."] },
          { label: "zur Verfügung stellen", cells: ["يضع تحت التصرف", "Ich stelle meine Erfahrung zur Verfügung."] },
          { label: "eine Rolle spielen", cells: ["يلعب دوراً", "Teamarbeit spielt eine große Rolle."] },
          { label: "Wert legen auf", cells: ["يولي أهمية", "Ich lege Wert auf Pünktlichkeit."] },
          { label: "zum Ausdruck bringen", cells: ["يعبّر عن", "Ich möchte meine Motivation zum Ausdruck bringen."] },
        ],
      },
      examples: [
        { de: "Ich bewerbe mich um die Stelle als Projektmanager.", ar: "أتقدم لمنصب مدير مشاريع." },
        { de: "Anbei finden Sie meinen Lebenslauf.", ar: "مرفقاً سيرتي الذاتية." },
        { de: "Ich lege großen Wert auf Teamarbeit.", ar: "أولي أهمية كبيرة للعمل الجماعي." },
        { de: "Meine Erfahrung spielt eine wichtige Rolle.", ar: "تلعب خبرتي دوراً مهماً." },
        { de: "Ich stelle meine Fähigkeiten gern zur Verfügung.", ar: "أضع قدراتي بكل سرور تحت التصرف." },
      ],
      comparisonWithArabic:
        "«أتقدم لمنصب» = Ich bewerbe mich um die Stelle — مطابقة. «مرفق تجدون» = Anbei finden Sie — مطابقة! و«أولي أهمية» = Wert legen auf — نفس التعبير العربي. المراسلة الرسمية متشابهة جداً.",
      eselsbruecke:
        "«مرفق تجدون سيرتي» = Anbei finden Sie meinen Lebenslauf — جملة جاهزة. و«أولي أهمية» = Wert legen auf. احفظ الوصلات الخمس كقائمة جاهزة للخطاب.",
      commonMistakes: [
        { wrong: "Ich bewerbe für die Stelle (حرف خاطئ)", right: "Ich bewerbe mich um die Stelle", whyAr: "sich bewerben um." },
        { wrong: "Wert machen auf", right: "Wert legen auf", whyAr: "الأهمية تُوضع (legen) لا تُصنع." },
        { wrong: "Anbei ist mein Lebenslauf (عامية)", right: "Anbei finden Sie meinen Lebenslauf", whyAr: "الصيغة الرسمية: finden Sie." },
      ],
      relatedRuleComparison: {
        title: "الخطاب الرسمي أم العامي؟",
        content: "الرسمي: Sehr geehrte... + Anbei finden Sie + Mit freundlichen Grüßen. العامي: Hallo + Ich schicke dir + Liebe Grüße. السياق يحدد — والتقديم رسمي دائماً.",
      },
    },
    {
      id: "t2",
      titleAr: "Funktionsverbgefüge: تراكيب الأفعال الوظيفية",
      titleDe: "Erweiterung",
      explanationAr: "تراكيب تجعل الاسم هو حامل المعنى: eine Entscheidung treffen (يقرر) بدل entscheiden، zur Verfügung stellen (يوفّر) بدل verfügbar machen، in Betracht ziehen (يأخذ بعين الاعتبار). هذه ترتقي بالأسلوب.",
      whyAr: "لماذا؟ لأن النصوص المهنية والأكاديمية تستخدمها باستمرار — وهي علامة B2 النموذجية.",
      examples: [
        { de: "Die Firma trifft eine wichtige Entscheidung.", ar: "الشركة تتخذ قراراً مهماً." }, { de: "Wir müssen die Kosten in Betracht ziehen.", ar: "يجب أن نأخذ التكاليف بعين الاعتبار." }
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
        title: "مقابلة عمل",
        lines: [
          { speaker: "Interviewerin", de: "Warum möchten Sie bei uns arbeiten?", ar: "لماذا تريد العمل عندنا؟" },
          { speaker: "Sami", de: "Ich lege großen Wert auf Innovation. Und ich ziehe diese Stelle sehr in Betracht.", ar: "أولي أهمية كبيرة للابتكار. وآخذ هذا المنصب بعين الاعتبار." },
          { speaker: "Interviewerin", de: "Welche Rolle spielt Teamarbeit für Sie?", ar: "ما دور العمل الجماعي لديك؟" },
          { speaker: "Sami", de: "Teamarbeit spielt eine große Rolle. Ich stelle meine Erfahrung gern zur Verfügung.", ar: "يلعب العمل الجماعي دوراً كبيراً. أضع خبرتي بكل سرور تحت التصرف." },
        ],
      },
      {
        id: "l2",
        title: "قبول الوظيفة",
        lines: [
          { speaker: "HR", de: "Wir möchten Ihnen die Stelle anbieten.", ar: "نريد أن نعرض عليك المنصب." },
          { speaker: "Mona", de: "Das freut mich sehr! Ich bringe meine Motivation zum Ausdruck.", ar: "يسعدني جداً! أعبر عن حماسي." },
          { speaker: "HR", de: "Wann können Sie anfangen?", ar: "متى تستطيع البدء؟" },
          { speaker: "Mona", de: "Ich stehe sofort zur Verfügung!", ar: "أنا تحت تصرفكم فوراً!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Worauf legt Sami großen Wert?",
        questionAr: "على ماذا يولي سامي أهمية كبيرة؟",
        options: ["auf Innovation", "auf Geld", "auf Urlaub", "auf Essen"],
        correctIndex: 0,
        explanation: "قال سامي: Ich lege großen Wert auf Innovation.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was stellt Sami zur Verfügung?",
        questionAr: "ماذا يضع سامي تحت التصرف؟",
        options: ["seine Erfahrung", "sein Auto", "sein Büro", "seine Zeit nur"],
        correctIndex: 0,
        explanation: "قال سامي: Ich stelle meine Erfahrung gern zur Verfügung.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann kann Mona anfangen?",
        questionAr: "متى تستطيع منى البدء؟",
        options: ["sofort", "nächste Woche", "im nächsten Monat", "nie"],
        correctIndex: 0,
        explanation: "قالت منى: Ich stehe sofort zur Verfügung!",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات التقديم: sch، ch، وie",
    items: [
      { de: "die Bewerbung", ar: "التقديم", note: "v = ف + b = پ: بِڤِربونغ" },
      { de: "das Anschreiben", ar: "خطاب التقديم", note: "sch = ش: آن-شرايبِن" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية", note: "au = آو: ليبِنْس-لاوف" },
      { de: "die Stelle", ar: "المنصب", note: "st = شت: شتِلِّه" },
      { de: "die Erfahrung", ar: "الخبرة", note: "f + a: إرفارونغ" },
      { de: "die Fähigkeit", ar: "المهارة", note: "h = تطويل: فيه-يغكايت" },
    ],
    tip: "Anschreiben = آن-شرايبِن — sch ثم ei. وLebenslauf = ليبِنْس-لاوف — au طويل.",
    shadowing: [
      { de: "Ich bewerbe mich um die Stelle.", ar: "أتقدم للمنصب.", tip: "sich bewerben um" },
      { de: "Anbei finden Sie meinen Lebenslauf.", ar: "مرفقاً سيرتي الذاتية.", tip: "Anbei finden Sie" },
      { de: "Ich lege Wert auf Pünktlichkeit.", ar: "أولي أهمية للالتزام بالمواعيد.", tip: "Wert legen auf" },
      { de: "Ich stehe zur Verfügung.", ar: "أنا تحت التصرف.", tip: "zur Verfügung stehen" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب بداية خطاب تقديم:",
      prompt: "«أتقدم لمنصب مدير مشاريع»",
      acceptedAnswers: ["Ich bewerbe mich um die Stelle als Projektmanager", "Ich bewerbe mich um die Stelle als Projektmanager."],
      sampleAnswer: "Ich bewerbe mich um die Stelle als Projektmanager.",
      explanation: "sich bewerben um + die Stelle als + منصب.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالوصلة:",
      template: "Ich ___ die Stelle in Betracht. (يأخذ بعين الاعتبار) Ich ___ meine Erfahrung zur Verfügung. (يضع)",
      blanks: [
        { correct: "ziehe", options: ["ziehe", "stelle", "lege"] },
        { correct: "stelle", options: ["ziehe", "stelle", "lege"] },
      ],
      explanation: "in Betracht ziehen + zur Verfügung stellen.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل إلى صيغة رسمية مهذبة:",
      instructionDe: "Schreibe formell:",
      prompt: "Ich will den Job. → (صياغة رسمية كاملة)",
      acceptedAnswers: ["Ich möchte mich um die Stelle bewerben.", "Ich möchte mich um diese Stelle bewerben."],
      sampleAnswer: "Ich möchte mich um die Stelle bewerben.",
      explanation: "الرسمية: möchte + sich bewerben um — بدل will المباشرة في خطاب التقديم.",
      errorType: "vocabulary",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "Ich ___ die Stelle in Betracht.",
      options: ["ziehe", "stelle", "lege", "mache"],
      correctIndex: 0,
      explanation: "in Betracht ziehen.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "Ich ___ meine Erfahrung zur Verfügung.",
      options: ["stelle", "ziehe", "lege", "gebe"],
      correctIndex: 0,
      explanation: "zur Verfügung stellen.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الوصلة بمعناها:",
      pairs: [
        { left: "in Betracht ziehen", right: "يأخذ بعين الاعتبار" },
        { left: "zur Verfügung stellen", right: "يضع تحت التصرف" },
        { left: "Wert legen auf", right: "يولي أهمية" },
        { left: "eine Rolle spielen", right: "يلعب دوراً" },
      ],
      explanation: "وصلات B2 المتقدمة الأربعة.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Ich", "mich", "Stelle", "um", "bewerbe", "die", "als", "Lehrer", "."],
      correctSentence: "Ich bewerbe mich um die Stelle als Lehrer.",
      explanation: "أتقدم لمنصب معلم — sich bewerben um.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich bewerbe für die Stelle.",
      wrongWord: "für",
      correctWord: "um",
      options: ["um", "für", "auf", "an"],
      explanation: "sich bewerben um.",
      errorType: "preposition",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالوصلة:",
      template: "Teamarbeit ___ eine große Rolle. (يلعب) Ich ___ Wert auf Pünktlichkeit. (يولي)",
      blanks: [
        { correct: "spielt", options: ["spielt", "macht", "hat"] },
        { correct: "lege", options: ["lege", "stelle", "ziehe"] },
      ],
      explanation: "eine Rolle spielen + Wert legen auf.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اكتب ختام خطاب:",
      prompt: "«أود أن أعبر عن حماسي وأتطلع لمقابلتكم»",
      acceptedAnswers: ["Ich möchte meine Motivation zum Ausdruck bringen und freue mich auf ein Gespräch", "Ich freue mich auf ein persönliches Gespräch"],
      sampleAnswer: "Ich freue mich auf ein persönliches Gespräch.",
      explanation: "الختام الرسمي: Ich freue mich auf...",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "das Anschreiben",
      questionAr: "ما معنى الكلمة؟",
      options: ["خطاب التقديم", "السيرة الذاتية", "الشهادة", "العقد"],
      correctIndex: 0,
      explanation: "das Anschreiben = خطاب التقديم.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich lege Wert für Pünktlichkeit.",
      wrongWord: "für",
      correctWord: "auf",
      options: ["auf", "für", "an", "über"],
      explanation: "Wert legen auf.",
      errorType: "preposition",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich stelle meine Fähigkeiten gern zur Verfügung.",
      explanation: "أضع قدراتي تحت التصرف — zur Verfügung stellen.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich bewerbe für die Stelle", right: "Ich bewerbe mich um die Stelle", whyAr: "sich bewerben um." },
      { wrong: "Wert machen auf", right: "Wert legen auf", whyAr: "الأهمية توضع." },
      { wrong: "Anbei ist (عامية)", right: "Anbei finden Sie", whyAr: "الصيغة الرسمية." },
    ],
    eselsbruecken: [
      "«وصلات الخطاب الخمس»: bewerben um، Anbei finden Sie، Wert legen auf، zur Verfügung stellen، in Betracht ziehen.",
      "«رسمي دائماً في التقديم»: Sehr geehrte + Anbei + Mit freundlichen Grüßen.",
    ],
    culturalNote: {
      title: "سوق العمل الألماني",
      content:
        "سوق العمل منظم: «der Arbeitsvertrag» (عقد عمل)، و«die Probezeit» (فترة تجربة 6 أشهر)، و«der Kündigungsschutz» (حماية من الفصل). والمؤهلات مهمة: «Anerkennung der Abschlüsse» (الاعتراف بالشهادات الأجنبية). وعبارة: «Ich bringe Berufserfahrung mit» (أمتلك خبرة مهنية).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "Ich ___ die Stelle in Betracht.",
      options: ["ziehe", "stelle", "lege", "mache"],
      correctIndex: 0,
      explanation: "in Betracht ziehen.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "Ich ___ Wert auf Qualität.",
      options: ["lege", "stelle", "ziehe", "mache"],
      correctIndex: 0,
      explanation: "Wert legen auf.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Ich", "mich", "um", "Stelle", "bewerbe", "die", "als", "Ingenieur", "."],
      correctSentence: "Ich bewerbe mich um die Stelle als Ingenieur.",
      explanation: "أتقدم لمنصب مهندس.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich stelle meine Erfahrung zu Verfügung.",
      wrongWord: "zu",
      correctWord: "zur",
      options: ["zur", "zu", "zum", "zur Verfügung"],
      explanation: "zur Verfügung = zu + der.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالوصلة:",
      template: "Anbei ___ Sie meinen Lebenslauf. (تجدون) Teamarbeit ___ eine Rolle. (تلعب)",
      blanks: [
        { correct: "finden", options: ["finden", "sehen", "lesen"] },
        { correct: "spielt", options: ["spielt", "macht", "hat"] },
      ],
      explanation: "Anbei finden Sie + eine Rolle spielen.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "der Arbeitsmarkt", ar: "سوق العمل", example: "Der Arbeitsmarkt ist dynamisch.", exampleAr: "سوق العمل ديناميكي.", level: "B2" },
    { id: "fc2", de: "die Stelle", ar: "المنصب", example: "Die Stelle ist frei.", exampleAr: "المنصب شاغر.", level: "B2" },
    { id: "fc3", de: "das Anschreiben", ar: "خطاب التقديم", example: "Das Anschreiben ist kurz.", exampleAr: "خطاب التقديم قصير.", level: "B2" },
    { id: "fc4", de: "in Betracht ziehen", ar: "يأخذ بعين الاعتبار", example: "Ich ziehe die Stelle in Betracht.", exampleAr: "آخذ المنصب بعين الاعتبار.", level: "B2" },
    { id: "fc5", de: "zur Verfügung stellen", ar: "يضع تحت التصرف", example: "Ich stelle meine Erfahrung zur Verfügung.", exampleAr: "أضع خبرتي تحت التصرف.", level: "B2" },
    { id: "fc6", de: "Wert legen auf", ar: "يولي أهمية", example: "Ich lege Wert auf Qualität.", exampleAr: "أولي أهمية للجودة.", level: "B2" },
    { id: "fc7", de: "Anbei finden Sie ...", ar: "مرفقاً تجدون...", example: "Anbei finden Sie meinen Lebenslauf.", exampleAr: "مرفقاً سيرتي الذاتية.", level: "B2" },
    { id: "fc8", de: "die Fähigkeit", ar: "المهارة", example: "Meine Fähigkeiten sind breit.", exampleAr: "مهاراتي واسعة.", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b2-09-1", type: "summarize-de-to-ar",
      titleAr: "لخّص بيانات سوق العمل بالعربية مع نقل الاتجاهات",
      sourceDe: "Die Arbeitslosenquote ist auf 5,8 Prozent gesunken. Besonders gefragt sind Fachkräfte im Gesundheitswesen und in der IT-Branche. Die Digitalisierung schafft neue Berufsbilder.",
      taskAr: "لخّص البيانات: نسبة البطالة، القطاعات المطلوبة، وتأثير الرقمنة.",
      modelAnswerAr: "«انخفضت البطالة إلى 5.8%. الأكثر طلباً خبراء الصحة وتقنية المعلومات. والرقمنة تخلق مهناً جديدة.»",
      keyPointsAr: ["نقلت نسبة البطالة (5.8%)", "ذكرت القطاعين المطلوبين", "نقلت أثر الرقمنة"],
    },
  ],
      interaction: [
    {
      id: "int-b2-09-1",
      scenarioAr: "نقاش عن التقدم لوظيفة — مهارات المستقبل.",
      scenarioDe: "Diskussion über Bewerbung und Zukunftskompetenzen.",
      strategyAr: "الاستراتيجية: تقديم نفسك مهنياً ومناقشة المهارات المطلوبة.",
      rounds: [
        {
          speakerDe: "Welche Fähigkeiten sind für den Arbeitsmarkt der Zukunft wichtig?",
          speakerAr: "ما المهارات المهمة لسوق عمل المستقبل؟",
          options: [
            { de: "Neben fachlichen Qualifikationen werden Soft Skills wie Kommunikation und Teamfähigkeit immer wichtiger. Außerdem sind digitale Kompetenzen unverzichtbar.", ar: "إلى جانب المؤهلات المهنية، تزداد أهمية المهارات الناعمة كالتواصل والعمل الجماعي. كما أن الكفاءات الرقمية لا غنى عنها.", best: true, replyDe: "Eine umfassende Antwort. Wie würden Sie sich selbst einschätzen?", replyAr: "إجابة شاملة. كيف تقيّم نفسك؟" },
            { de: "Nur die technischen Fähigkeiten zählen, der Rest ist unwichtig.", ar: "المهارات التقنية فقط تهم، والباقي غير مهم.", best: false, replyDe: "Die Erfahrung zeigt, dass soziale Kompetenzen ebenso entscheidend sind.", replyAr: "تُظهر الخبرة أن الكفاءات الاجتماعية حاسمة بنفس القدر." },
          ],
        },
        {
          speakerDe: "Wie würden Sie sich selbst einschätzen?",
          speakerAr: "كيف تقيّم نفسك؟",
          options: [
            { de: "Ich bin kommunikativ und teamfähig. Zudem beherrsche ich mehrere Sprachen, was in internationalen Unternehmen ein großer Vorteil ist.", ar: "أنا اجتماعي وأجيد العمل الجماعي. كما أتقن لغات عدة، وهي ميزة كبيرة في الشركات الدولية.", best: true, replyDe: "Das klingt überzeugend. Welche Sprachen sprechen Sie?", replyAr: "يبدو مقنعاً. أي لغات تتحدث؟" },
            { de: "Ich habe keine besonderen Fähigkeiten.", ar: "لا أملك مهارات خاصة.", best: false, replyDe: "Jeder hat Stärken. Analysieren Sie Ihre Qualifikationen genauer.", replyAr: "لكل شخص نقاط قوة. حلل مؤهلاتك بدقة أكبر." },
          ],
        },
      ],
    },
  ],

};