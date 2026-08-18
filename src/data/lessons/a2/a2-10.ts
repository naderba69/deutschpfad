import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-10: المدرسة والتعلم — weil/wenn/ob + الضمائر الملكية
 */
export const lessonA210: Lesson = {
  id: "a2-10",
  unitId: "a2-10",
  level: "A2",
  order: 1,
  titleDe: "Lernen und Schule",
  titleAr: "المدرسة والتعلم",
  duration: 35,
  summary:
    "الدراسة والدورات، الجمل الثانوية weil (لأنّ) وwenn (إذا/عندما) وob (هل)، والضمائر الملكية في كل الحالات.",

  lernziele: [
    { id: "z1", de: "Ich kann über Lernen und Kurse sprechen.", ar: "أن أتحدث عن الدراسة والدورات والامتحانات." },
    { id: "z2", de: "Ich kann weil, wenn und ob benutzen.", ar: "أن أستخدم الجمل الثانوية: لأنّ (weil)، إذا (wenn)، هل (ob)." },
    { id: "z3", de: "Ich kann Possessivpronomen in allen Fällen benutzen.", ar: "أن أستخدم الضمائر الملكية في كل الحالات." },
      { id: "z4", de: "Ich kann über meine Lernpläne sprechen.", ar: "أن أتحدث عن خططي الدراسية." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "تعلمت dass (أنّ) في درس الإعلام. اليوم نضيف ثلاث جمل ثانوية أخرى: weil (لأنّ) للسبب، wenn (إذا/عندما) للشرط، وob (هل) للسؤال غير المباشر. وجميعها ترسل الفعل إلى النهاية — نفس القاعدة!",
    motivatingQuestionDe: "Warum lernst du Deutsch?",
    contextAr:
      "نعيش تجربة تعلم اللغة: لماذا نتعلم؟ متى نتعلم؟ هل نحتاج دورات؟ — كلها جمل ثانوية. ونضيف الضمائر الملكية الكاملة (mein/meine في النصب والجر).",
    contextDe: "Ich lerne Deutsch, weil ich in Deutschland studieren will.",
    connectionToPreviousAr: "تتذكر dass (درس 6). اليوم: weil (سبب)، wenn (شرط/زمن)، ob (هل) — وتكملة الملكية في كل الحالات.",
    activateVocabulary: [
      { de: "der Kurs", ar: "الدورة" },
      { de: "lernen", ar: "يتعلم" },
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "der Unterricht", ar: "الدرس/الحصة" },
      { de: "studieren", ar: "يدرس (جامعة)" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ Deutsch. (أتعلم)",
      options: ["lerne", "lernst", "lernt", "lernen"],
      correctIndex: 0,
      explanation: "مع ich: lerne (درس التعارف).",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر حرف الربط:",
      questionDe: "Ich glaube, ___ das stimmt.",
      options: ["dass", "weil", "wenn", "ob"],
      correctIndex: 0,
      explanation: "dass = أنّ (درس الإعلام).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل الملكية:",
      template: "Das ist ___ Bruder. (أخي)",
      blanks: [
        { correct: "mein", options: ["mein", "meine", "meinen"] },
      ],
      explanation: "المذكر الرفع: mein Bruder (درس العائلة).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الجمل الثانوية: weil (لأنّ)، wenn (إذا)، ob (هل)",
      titleDe: "weil, wenn und ob — Nebensätze",
      explanationAr:
        "weil = لأنّ (سبب): Ich lerne, weil ich Deutsch brauche. wenn = إذا/عندما (شرط أو زمن): Wenn ich Zeit habe, lerne ich. ob = هل (سؤال غير مباشر): Ich weiß nicht, ob er kommt. كلها ترسل الفعل إلى النهاية.",
      whyAr:
        "لماذا نستخدم ob بدل «؟»؟ لأن السؤال المباشر (Kommt er?) يصبح غير مباشر في الجملة: Ich weiß nicht, ob er kommt (لا أعرف هل يأتي). هذه طريقة الألمانية لنقل الأسئلة داخل الجمل — ستحتاجها في كل محادثة.",
      table: {
        title: "weil / wenn / ob",
        columns: ["الرابط", "المعنى", "الوظيفة", "مثال"],
        rows: [
          { label: "weil", cells: ["لأنّ", "سبب", "Ich lerne, weil ich will."] },
          { label: "wenn", cells: ["إذا/عندما", "شرط أو زمن", "Wenn ich Zeit habe, lerne ich."] },
          { label: "ob", cells: ["هل", "سؤال غير مباشر", "Ich weiß nicht, ob er kommt."] },
        ],
      },
      examples: [
        { de: "Ich lerne Deutsch, weil ich in Deutschland studieren will.", ar: "أتعلم الألمانية لأنني أريد الدراسة في ألمانيا." },
        { de: "Wenn ich Zeit habe, lese ich ein Buch.", ar: "عندما يكون عندي وقت، أقرأ كتاباً." },
        { de: "Ich weiß nicht, ob die Prüfung schwer ist.", ar: "لا أعرف هل الامتحان صعب." },
        { de: "Er lernt, weil er die Prüfung bestehen will.", ar: "يتعلم لأنه يريد اجتياز الامتحان." },
        { de: "Ob du kommst, ist mir egal.", ar: "هل تأتي أم لا لا يهمني." },
      ],
      comparisonWithArabic:
        "«لأنّ» = weil، «إذا» = wenn، «هل» = ob. العربية تعبر عنها كلها بجمل عادية — والألمانية تنقل الفعل للنهاية. تذكّر قاعدة القوس نفسها: الرابط يفتح، والفعل يغلق.",
      eselsbruecke:
        "«weil = ليش؟ السبب»، «wenn = إذا/متى»، «ob = هل؟» — اختصر: السبب weil، الشرط wenn، السؤال ob.",
      commonMistakes: [
        { wrong: "Ich lerne, weil ich will Deutsch lernen. (فعلان في النهاية)", right: "Ich lerne, weil ich Deutsch lernen will.", whyAr: "الفعل الشرطي (will) في النهاية جداً — ترتيب ثانوي داخل ثانوي." },
        { wrong: "Wenn أم ob؟", right: "wenn = إذا (شرط). ob = هل (سؤال غير مباشر)", whyAr: "اسأل: هل الجملة سؤال مخفي؟ نعم → ob. شرط؟ نعم → wenn." },
        { wrong: "Weil es regnet, ich bleibe zu Hause. (الفعل في منتصف الثانوية)", right: "Weil es regnet, bleibe ich zu Hause.", whyAr: "الجملة الثانوية أولاً → الفعل الرئيسي يأتي بعدها مباشرة." },
      ],
      relatedRuleComparison: {
        title: "weil أم denn؟",
        content: "كلاهما «لأنّ» لكن: weil ثانوية (فعل في النهاية). denn جملة عادية (فعل في المركز الثاني): Ich lerne, denn ich will. نحن نستخدم weil أكثر (أسهل للتفكير بالترتيب).",
      },
    },
    {
      id: "t2",
      titleAr: "الضمائر الملكية في كل الحالات",
      titleDe: "Possessivpronomen: mein, dein, sein in allen Fällen",
      explanationAr:
        "الضمير الملكي يتغير مع الحالة: Nominativ: mein Vater. Akkusativ: meinen Vater (أرى أبي). Dativ: meinem Vater (أساعد أبي). الأنماط: mein (رفع مذكر/محايد)، meinen (نصب مذكر)، meinem (جر مذكر/محايد)، meine (رفع/نصب مؤنث وجمع)، meiner (جر مؤنث).",
      whyAr:
        "لماذا كل هذا التغيير؟ لأن الملكية «صفة» تتبع الاسم في حالته وجنسه — تماماً مثل أداة التعريف. إذا أتقنت جدول ein الصغير فقد أتقنت كل شيء: mein يتصرف مثل ein حرفياً!",
      table: {
        title: "تصريف mein في الحالات",
        columns: ["الحالة", "مذكر", "مؤنث", "محايد", "جمع"],
        rows: [
          { label: "Nominativ", cells: ["mein", "meine", "mein", "meine"] },
          { label: "Akkusativ", cells: ["meinen", "meine", "mein", "meine"] },
          { label: "Dativ", cells: ["meinem", "meiner", "meinem", "meinen (+n)"] },
        ],
      },
      examples: [
        { de: "Das ist mein Bruder. (رفع)", ar: "هذا أخي." },
        { de: "Ich sehe meinen Bruder. (نصب)", ar: "أرى أخي." },
        { de: "Ich helfe meinem Bruder. (جر)", ar: "أساعد أخي." },
        { de: "Meine Schwester lernt Deutsch.", ar: "أختي تتعلم الألمانية." },
        { de: "Das ist mein Buch. Ich lese mein Buch.", ar: "هذا كتابي. أقرأ كتابي." },
      ],
      comparisonWithArabic:
        "العربية تلحق الملكية بالاسم: «أخي، أختي». الألمانية تضعها كلمة مستقلة تتغير: mein/meinen/meinem. الفكرة: فكر بـ«أخي» = mein Bruder، وفي النصب «أرى أخي» = meinen Bruder.",
      eselsbruecke:
        "«mein يتصرف مثل ein بالضبط»: ein Bruder → meinen Bruder (نصب). احفظ جدول ein وستعرف mein — وبقية الملكيات (dein, sein) بنفس النمط.",
      commonMistakes: [
        { wrong: "Ich sehe mein Bruder (بدون نهاية النصب)", right: "Ich sehe meinen Bruder.", whyAr: "النصب المذكر: meinen." },
        { wrong: "Ich helfe meinen Bruder.", right: "Ich helfe meinem Bruder.", whyAr: "الجر المذكر: meinem." },
        { wrong: "meine Bruder (خلط المؤنث مع المذكر)", right: "mein Bruder", whyAr: "الرفع المذكر: mein (بدون e). meine مع المؤنث/الجمع." },
      ],
      relatedRuleComparison: {
        title: "mein أم meinen؟ السؤال السريع",
        content: "اسأل عن دور الكلمة: فاعل (رفع) → mein. مفعول به (نصب) → meinen. بعد حرف جر مكاني أو فعل Dativ → meinem. نفس أسئلة الحالات الثلاث!",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "لماذا تتعلم الألمانية؟",
        lines: [
          { speaker: "Lehrer", de: "Warum lernst du Deutsch, Sami?", ar: "لماذا تتعلم الألمانية يا سامي؟" },
          { speaker: "Sami", de: "Ich lerne Deutsch, weil ich in Deutschland studieren will.", ar: "أتعلم الألمانية لأنني أريد الدراسة في ألمانيا." },
          { speaker: "Lehrer", de: "Und du, Anna?", ar: "وأنتِ يا آنا؟" },
          { speaker: "Anna", de: "Ich lerne, weil mein Freund in Berlin wohnt.", ar: "أتعلم لأن صديقي يسكن في برلين." },
          { speaker: "Lehrer", de: "Wann lernt ihr am liebsten?", ar: "متى تحبون أن تتعلموا أكثر؟" },
          { speaker: "Sami", de: "Wenn ich morgens aufstehe, lerne ich Vokabeln.", ar: "عندما أستيقظ صباحاً أتعلم مفردات." },
        ],
      },
      {
        id: "l2",
        title: "هل الامتحان صعب؟",
        lines: [
          { speaker: "Karim", de: "Ich weiß nicht, ob die Prüfung schwer ist.", ar: "لا أعرف هل الامتحان صعب." },
          { speaker: "Mona", de: "Wenn du viel lernst, ist sie leicht.", ar: "إذا تعلمت كثيراً فهو سهل." },
          { speaker: "Karim", de: "Ich lerne jeden Tag, weil ich Angst habe.", ar: "أتعلم كل يوم لأني خائف." },
          { speaker: "Mona", de: "Keine Angst! Du bist gut vorbereitet.", ar: "لا تخف! أنت مستعد جيداً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Warum lernt Sami Deutsch?",
        questionAr: "لماذا يتعلم سامي الألمانية؟",
        options: ["weil er in Deutschland studieren will", "weil sein Freund in Berlin wohnt", "weil er Angst hat", "weil er eine Prüfung hat"],
        correctIndex: 0,
        explanation: "قال سامي: weil ich in Deutschland studieren will.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann lernt Sami Vokabeln?",
        questionAr: "متى يتعلم سامي المفردات؟",
        options: ["wenn er morgens aufsteht", "wenn er abends schläft", "wenn er isst", "wenn er arbeitet"],
        correctIndex: 0,
        explanation: "قال: Wenn ich morgens aufstehe, lerne ich Vokabeln.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum hat Karim Angst?",
        questionAr: "لماذا خائف كريم؟",
        options: ["wegen der Prüfung", "wegen des Wetters", "wegen des Kurses", "wegen der Schule"],
        correctIndex: 0,
        explanation: "قال: Ich lerne jeden Tag, weil ich Angst habe — بسبب الامتحان.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات المدرسة: ü، ch، وei",
    items: [
      { de: "die Prüfung", ar: "الامتحان", note: "ü + g = خ: پريوفونغ" },
      { de: "der Unterricht", ar: "الحصة", note: "ch بعد i = ش ناعمة: أونتر-ريخت" },
      { de: "studieren", ar: "يدرس (جامعة)", note: "ie = إي: شتوديرن" },
      { de: "die Vokabeln", ar: "المفردات", note: "v = ف: ڤوكابلن" },
      { de: "bestehen", ar: "يجتاز", note: "s بين علة = ز: بِشتيهن" },
      { de: "der Lehrer", ar: "المعلم", note: "e مفتوحة: ليرِر" },
    ],
    tip: "Prüfung = پريوفونغ — فيها ü ثم -ung. قسّمها: پريو + فونغ.",
    shadowing: [
      { de: "Ich lerne Deutsch, weil ich will.", ar: "أتعلم الألمانية لأنني أريد.", tip: "weil في منتصف الجملة + الفعل في النهاية" },
      { de: "Wenn ich Zeit habe, lerne ich.", ar: "عندما يكون عندي وقت أتعلم.", tip: "wenn في البداية → الفعل الرئيسي بعدها" },
      { de: "Ich weiß nicht, ob er kommt.", ar: "لا أعرف هل يأتي.", tip: "weiß = ڤايس (ei)" },
      { de: "Die Prüfung ist leicht.", ar: "الامتحان سهل.", tip: "leicht = لايخت (ei + ch)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة weil:",
      prompt: "اكتب: «أتعلم الألمانية لأنها مهمة» بالألمانية",
      acceptedAnswers: ["Ich lerne Deutsch, weil es wichtig ist", "Ich lerne Deutsch, weil sie wichtig ist"],
      sampleAnswer: "Ich lerne Deutsch, weil es wichtig ist.",
      explanation: "Ich lerne Deutsch + weil + es wichtig ist (الفعل في النهاية).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ weil أو wenn أو ob:",
      template: "Ich lerne, ___ ich will. ___ ich Zeit habe, lerne ich. Ich weiß nicht, ___ er kommt.",
      blanks: [
        { correct: "weil", options: ["weil", "wenn", "ob"] },
        { correct: "Wenn", options: ["weil", "wenn", "ob"] },
        { correct: "ob", options: ["weil", "wenn", "ob"] },
      ],
      explanation: "سبب → weil. شرط → wenn. سؤال مخفي → ob.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich weiß nicht, ob die Prüfung schwer ist.",
      explanation: "لا أعرف هل الامتحان صعب — ob + الفعل في النهاية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر حرف الربط الصحيح:",
      questionDe: "Ich lerne, ___ ich will.",
      options: ["weil", "wenn", "ob", "dass"],
      correctIndex: 0,
      explanation: "سبب → weil.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر حرف الربط الصحيح:",
      questionDe: "___ du kommst, weiß ich nicht.",
      options: ["Ob", "Weil", "Wenn", "Dass"],
      correctIndex: 0,
      explanation: "سؤال مخفي → ob: هل تأتي؟ لا أعرف.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الكلمة المدرسية بمعناها:",
      pairs: [
        { left: "der Kurs", right: "الدورة" },
        { left: "die Prüfung", right: "الامتحان" },
        { left: "der Unterricht", right: "الحصة" },
        { left: "studieren", right: "يدرس (جامعة)" },
      ],
      explanation: "أربع كلمات تعليمية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["weil", "lerne", "Ich", "will", "ich", "Deutsch", ","],
      correctSentence: "Ich lerne Deutsch, weil ich will.",
      explanation: "أتعلم الألمانية لأنني أريد — weil + الفعل في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich sehe mein Bruder.",
      wrongWord: "mein",
      correctWord: "meinen",
      options: ["meinen", "meinem", "meine", "mein"],
      explanation: "النصب المذكر: meinen Bruder.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالملكية الصحيحة:",
      template: "Ich sehe ___ Vater. (أبي — نصب) Ich helfe ___ Mutter. (أمي — جر)",
      blanks: [
        { correct: "meinen", options: ["meinen", "meinem", "meine"] },
        { correct: "meiner", options: ["meiner", "meinen", "meine"] },
      ],
      explanation: "نصب مذكر → meinen. جر مؤنث → meiner.",
      errorType: "case",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل السؤال إلى ob:",
      prompt: "Kommt er? → (لا أعرف هل يأتي)",
      acceptedAnswers: ["Ich weiß nicht, ob er kommt", "Ich weiß nicht, ob er kommt."],
      sampleAnswer: "Ich weiß nicht, ob er kommt.",
      explanation: "السؤال المباشر يصبح ob + الفعل في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die Prüfung bestehen",
      questionAr: "ما معنى العبارة؟",
      options: ["يجتاز الامتحان", "يرسب في الامتحان", "يستعد للامتحان", "يؤجل الامتحان"],
      correctIndex: 0,
      explanation: "bestehen = يجتاز: die Prüfung bestehen.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Wenn es regnet, ich bleibe zu Hause.",
      wrongWord: "ich bleibe",
      correctWord: "bleibe ich",
      options: ["bleibe ich", "ich bleibe", "bleiben ich", "bleib ich"],
      explanation: "الجملة الثانوية أولاً → الفعل الرئيسي مباشرة: ... bleibe ich.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wenn ich Zeit habe, lerne ich Vokabeln.",
      explanation: "عندما يكون عندي وقت أتعلم مفردات — wenn أولاً ثم الفعل الرئيسي.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich lerne, weil ich will Deutsch lernen.", right: "Ich lerne, weil ich Deutsch lernen will.", whyAr: "الفعل الشرطي في النهاية جداً: ... lernen will." },
      { wrong: "Ich sehe mein Bruder (نصب بلا نهاية)", right: "Ich sehe meinen Bruder.", whyAr: "النصب المذكر: meinen." },
      { wrong: "Wenn أم ob؟", right: "wenn = شرط/زمن. ob = سؤال مخفي", whyAr: "اختبر: هل الجملة سؤال؟ نعم → ob." },
    ],
    eselsbruecken: [
      "«السبب weil، الشرط wenn، السؤال ob» — ثلاثية سهلة الحفظ.",
      "«mein مثل ein تماماً»: جدول ein = جدول mein (meinen نصب، meinem جر).",
    ],
    culturalNote: {
      title: "نظام التعليم الألماني",
      content:
        "بعد الابتدائية ينقسم التلاميذ لمدارس مختلفة: Hauptschule، Realschule، Gymnasium (التي تؤهل للجامعة). والجامعات الألمانية «kostenlos» (مجانية تقريباً) — لهذا يدرس فيها كثير من العرب: Ich möchte in Deutschland studieren.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر حرف الربط:",
      questionDe: "___ du Zeit hast, hilf mir bitte.",
      options: ["Wenn", "Weil", "Ob", "Dass"],
      correctIndex: 0,
      explanation: "شرط → wenn: إذا كان عندك وقت.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الملكية الصحيحة:",
      questionDe: "Ich helfe ___ Bruder. (أخي)",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation: "الجر المذكر: meinem Bruder.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ob", "weiß", "nicht", "Ich", "kommt", "er", ","],
      correctSentence: "Ich weiß nicht, ob er kommt.",
      explanation: "لا أعرف هل يأتي — ob + الفعل في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich sehe meine Vater.",
      wrongWord: "meine",
      correctWord: "meinen",
      options: ["meinen", "meinem", "mein", "meiner"],
      explanation: "النصب المذكر: meinen Vater.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ weil/wenn/ob:",
      template: "Ich bleibe zu Hause, ___ es regnet. ___ ich müde bin, schlafe ich. Ich frage, ___ du mitkommst.",
      blanks: [
        { correct: "weil", options: ["weil", "wenn", "ob"] },
        { correct: "Wenn", options: ["weil", "wenn", "ob"] },
        { correct: "ob", options: ["weil", "wenn", "ob"] },
      ],
      explanation: "سبب → weil. شرط → wenn. سؤال → ob.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "der Kurs", ar: "الدورة", example: "Der Kurs beginnt um neun.", exampleAr: "تبدأ الدورة في التاسعة.", level: "A2" },
    { id: "fc2", de: "die Prüfung", ar: "الامتحان", example: "Die Prüfung ist schwer.", exampleAr: "الامتحان صعب.", level: "A2" },
    { id: "fc3", de: "der Unterricht", ar: "الحصة/الدرس", example: "Der Unterricht ist interessant.", exampleAr: "الحصة ممتعة.", level: "A2" },
    { id: "fc4", de: "studieren", ar: "يدرس (جامعة)", example: "Ich will in Berlin studieren.", exampleAr: "أريد الدراسة في برلين.", level: "A2" },
    { id: "fc5", de: "weil", ar: "لأنّ", example: "Ich lerne, weil ich will.", exampleAr: "أتعلم لأنني أريد.", level: "A2" },
    { id: "fc6", de: "wenn", ar: "إذا/عندما", example: "Wenn ich Zeit habe...", exampleAr: "عندما يكون عندي وقت...", level: "A2" },
    { id: "fc7", de: "ob", ar: "هل (سؤال مخفي)", example: "Ich weiß nicht, ob er kommt.", exampleAr: "لا أعرف هل يأتي.", level: "A2" },
    { id: "fc8", de: "bestehen", ar: "يجتاز", example: "Ich bestehe die Prüfung.", exampleAr: "أجتاز الامتحان.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-10-1", type: "summarize-de-to-ar",
      titleAr: "لخّص برنامج دورة تدريبية بالعربية",
      sourceDe: "Der Deutschkurs B1 beginnt im September. Er dauert 8 Wochen und findet dreimal pro Woche statt. Am Ende gibt es eine Prüfung.",
      taskAr: "لخّص البرنامج: البداية، المدة، عدد المرات، والاختبار النهائي.",
      modelAnswerAr: "«تبدأ دورة الألمانية B1 في سبتمبر. تستمر 8 أسابيع وتقام ثلاث مرات أسبوعياً. وفي النهاية اختبار.»",
      keyPointsAr: ["نقلت بداية الدورة (سبتمبر)", "ذكرت المدة (8 أسابيع)", "نقلت الاختبار النهائي"],
    },
  ],
      interaction: [
    {
      id: "int-a2-10-1",
      scenarioAr: "تسجل في دورة لغة وتسأل عن التفاصيل.",
      scenarioDe: "Anmeldung für einen Sprachkurs.",
      strategyAr: "الاستراتيجية: الاستفسار عن تفاصيل الدورة واتخاذ قرار.",
      rounds: [
        {
          speakerDe: "Hallo, ich möchte mich für den Deutschkurs anmelden.",
          speakerAr: "مرحباً، أريد التسجيل في دورة الألمانية.",
          options: [
            { de: "Gerne. Der Kurs beginnt am Montag. Haben Sie Vorkenntnisse?", ar: "بكل سرور. تبدأ الدورة الاثنين. هل لديك معرفة سابقة؟", best: true, replyDe: "Ja, ich habe schon A2 gemacht.", replyAr: "نعم، أتممت A2 سابقاً." },
            { de: "Ich möchte zuerst das Abendessen bestellen.", ar: "أريد أولاً طلب العشاء.", best: false, replyDe: "Das ist eine Sprachschule, kein Restaurant.", replyAr: "هذه مدرسة لغات، وليست مطعماً." },
          ],
        },
        {
          speakerDe: "Sie haben A2 gemacht. Perfekt für den B1-Kurs. Wann können Sie starten?",
          speakerAr: "أتممت A2. ممتاز لدورة B1. متى تستطيع البدء؟",
          options: [
            { de: "Ich kann nächste Woche starten.", ar: "أستطيع البدء الأسبوع القادم.", best: true, replyDe: "Sehr gut, ich melde Sie an!", replyAr: "ممتاز، سأسجلك!" },
            { de: "Ich starte, wenn ich will.", ar: "سأبدأ عندما أريد.", best: false, replyDe: "Der Kurs hat feste Termine.", replyAr: "للدورة مواعيد ثابتة." },
          ],
        },
      ],
    },
  ],

};