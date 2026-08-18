import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-09: العمل التطوعي — Nomen-Verb-Verbindungen + n-Deklination
 */
export const lessonB109: Lesson = {
  id: "b1-09",
  unitId: "b1-09",
  level: "B1",
  order: 1,
  titleDe: "Soziales Engagement",
  titleAr: "العمل التطوعي والاجتماعي",
  duration: 40,
  summary:
    "العمل التطوعي والمشاريع الاجتماعية، الوصلات الاسمية-الفعلية (Nomen-Verb-Verbindungen): eine Frage stellen, Bescheid sagen — وتصريف n-Deklination.",

  lernziele: [
    { id: "z1", de: "Ich kann über Ehrenamt sprechen.", ar: "أن أتحدث عن العمل التطوعي والمشاريع الاجتماعية." },
    { id: "z2", de: "Ich kenne die wichtigsten Nomen-Verb-Verbindungen.", ar: "أن أتقن الوصلات الاسمية-الفعلية: يطرح سؤالاً، يعطي خبراً." },
    { id: "z3", de: "Ich kenne die n-Deklination.", ar: "أن أتقن تصريف n (der Student → den Studenten)." },
      { id: "z4", de: "Ich kann über soziales Engagement sprechen.", ar: "أن أتحدث عن العمل التطوعي والاجتماعي." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "لاحظ بالعربية: «يطرح سؤالاً» — فعل + اسم معاً. الألمانية تفعل هذا كثيراً: eine Frage stellen (يطرح سؤالاً) بدل fragen (يسأل). هذه «الوصلات» تعطي كلامك نكهة رسمية — وسيتطلبها الامتحان!",
    motivatingQuestionDe: "Machst du ehrenamtliche Arbeit?",
    contextAr:
      "العمل التطوعي جزء كبير من الثقافة الألمانية. نتعلم مفرداته، ثم الوصلات الاسمية-الفعلية (الأسلوب الرسمي)، ونهاية n-Deklination الغريبة.",
    contextDe: "Ich helfe ehrenamtlich im Verein.",
    connectionToPreviousAr: "تتذكر الأفعال المركبة والحالات. اليوم: الوصلات (فعل + اسم) وتصريف n — وهو تصريف شاذ للأسماء المذكرة المنتهية بـ e.",
    activateVocabulary: [
      { de: "das Ehrenamt", ar: "العمل التطوعي" },
      { de: "der Verein", ar: "الجمعية/النادي" },
      { de: "helfen", ar: "يساعد" },
      { de: "das Projekt", ar: "المشروع" },
      { de: "die Spende", ar: "التبرع" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر الضمير:",
      questionDe: "Ich helfe ___ Bruder.",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation: "helfen + Dativ: meinem (درس المناسبات).",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر المعنى:",
      questionDe: "der Verein",
      options: ["الجمعية/النادي", "الشركة", "المدرسة", "المستشفى"],
      correctIndex: 0,
      explanation: "der Verein = الجمعية/النادي.",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1: أكمل:",
      template: "Das Buch des ___ (معلم).",
      blanks: [
        { correct: "Lehrers", options: ["Lehrers", "Lehrer", "Lehreren"] },
      ],
      explanation: "Genitiv: des Lehrers (درس التعليم).",
      errorType: "case",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الوصلات الاسمية-الفعلية (Nomen-Verb-Verbindungen)",
      titleDe: "Nomen-Verb-Verbindungen: eine Frage stellen",
      explanationAr:
        "بعض الأفعال تُستخدم مع اسم بدل الفعل وحده: eine Frage stellen (يطرح سؤالاً) بدل fragen، Bescheid sagen (يعطي خبراً)، Hilfe leisten (يقدم مساعدة)، eine Entscheidung treffen (يتخذ قراراً)، Abschied nehmen (يودع). هذه الوصلات تعطي أسلوباً رسمياً ومهماً للامتحان.",
      whyAr:
        "لماذا نستخدم وصلات بدل الأفعال البسيطة؟ لأنها «أسلوب رسمي/إداري»: في التقارير والمقالات تقول eine Entscheidung treffen بدل entscheiden. والألمان يعتبرونها علامة إتقان — وامتحان Goethe B1 يختبرها.",
      table: {
        title: "أهم الوصلات",
        columns: ["الوصلة", "المعنى", "الفعل المكافئ"],
        rows: [
          { label: "eine Frage stellen", cells: ["يطرح سؤالاً", "fragen"] },
          { label: "Bescheid sagen", cells: ["يعطي خبراً", "informieren"] },
          { label: "Hilfe leisten", cells: ["يقدم مساعدة", "helfen"] },
          { label: "eine Entscheidung treffen", cells: ["يتخذ قراراً", "entscheiden"] },
          { label: "Abschied nehmen", cells: ["يودع", "sich verabschieden"] },
          { label: "eine Rolle spielen", cells: ["يلعب دوراً", "—"] },
        ],
      },
      examples: [
        { de: "Darf ich eine Frage stellen?", ar: "هل أستطيع طرح سؤال؟" },
        { de: "Sag mir bitte Bescheid!", ar: "أعطني خبراً من فضلك!" },
        { de: "Wir leisten Hilfe für die Kinder.", ar: "نقدم مساعدة للأطفال." },
        { de: "Er traf eine wichtige Entscheidung.", ar: "اتخذ قراراً مهماً." },
        { de: "Wir nehmen Abschied von unseren Freunden.", ar: "نودع أصدقاءنا." },
      ],
      comparisonWithArabic:
        "«يطرح سؤالاً» = eine Frage stellen — مطابقة تامة للعربية! «يتخذ قراراً» = eine Entscheidung treffen. والوصلات العربية نفسها: يطرح، يقدم، يتخذ — الألمانية تضعها مع اسم.",
      eselsbruecke:
        "«استبدل الفعل البسيط بوصلة»: fragen → eine Frage stellen، helfen → Hilfe leisten. كل وصلاتنا شبيهة بالعربية — احفظها كأزواج.",
      commonMistakes: [
        { wrong: "eine Frage machen (فعل خاطئ)", right: "eine Frage stellen", whyAr: "السؤال يُطرح (stellen) وليس يُصنع (machen)." },
        { wrong: "eine Entscheidung machen", right: "eine Entscheidung treffen", whyAr: "القرار يُتخذ (treffen) وليس يُصنع." },
        { wrong: "Abschied sagen بدل nehmen", right: "Abschied nehmen", whyAr: "الوداع يُؤخذ (nehmen)." },
      ],
      relatedRuleComparison: {
        title: "الوصلة أم الفعل البسيط؟",
        content: "في الكلام: الفعل البسيط (fragen). في الرسمية: الوصلة (eine Frage stellen). الامتحان يحب الوصلات — تعلمها كأزواج جاهزة.",
      },
    },
    {
      id: "t2",
      titleAr: "تصريف n (n-Deklination)",
      titleDe: "Die n-Deklination: der Student → den Studenten",
      explanationAr:
        "بعض الأسماء المذكرة (غالباً المنتهية بـ e أو ذات أصل لاتيني/يوناني) تضيف n/en في كل الحالات ما عدا الرفع: der Student → den Studenten (نصب)، dem Studenten (جر)، des Studenten (مضاف). الأسماء: der Student, der Kunde (زبون), der Herr (سيد), der Polizist, der Journalist, der Kollege, der Junge (فتى).",
      whyAr:
        "لماذا هذه شاذة؟ لأنها أسماء «مذكرة حية» جاءت من اللاتينية (Student, Polizist) أو تنتهي بـ e (Junge, Kollege). الألمانية تحتفظ بآثار الإعراب اللاتيني فيها — فتحفظها كقائمة.",
      table: {
        title: "n-Deklination",
        columns: ["الحالة", "der Student", "der Kunde"],
        rows: [
          { label: "Nominativ", cells: ["der Student", "der Kunde"] },
          { label: "Akkusativ", cells: ["den Studenten", "den Kunden"] },
          { label: "Dativ", cells: ["dem Studenten", "dem Kunden"] },
          { label: "Genitiv", cells: ["des Studenten", "des Kunden"] },
        ],
      },
      examples: [
        { de: "Ich kenne den Studenten.", ar: "أعرف الطالب." },
        { de: "Wir helfen dem Kunden.", ar: "نساعد الزبون." },
        { de: "Das ist der Wagen des Herrn Weber.", ar: "هذه سيارة السيد فيبر." },
        { de: "Der Polizist fragt den Journalisten.", ar: "يسأل الشرطي الصحفي." },
        { de: "Sie spricht mit dem Kollegen.", ar: "تتحدث مع الزميل." },
      ],
      comparisonWithArabic:
        "العربية تعرب الأسماء بحركات: «الطالبَ» نصباً. الألمانية n-Deklination: den Studenten — إعراب بحرف n! نفس الفكرة الإعرابية لكن بلاحقة ثابتة.",
      eselsbruecke:
        "«n-Deklination = رجال بـ e»: الأسماء المذكرة المنتهية بـ e (Junge, Kunde, Kollege) + اللاتينية (Student, Polizist) تضيف n/en. تذكّر القائمة: الطالب والزبون والسيد والشرطي والصحفي والزميل والفتى.",
      commonMistakes: [
        { wrong: "Ich sehe den Student. (بدون n)", right: "Ich sehe den Studenten.", whyAr: "النصب: den Studenten." },
        { wrong: "dem Herr (بدون n)", right: "dem Herrn", whyAr: "Herr يضيف n: Herrn." },
        { wrong: "مع Frau لا n-Deklination", right: "die Frau → der Frau (عادية)", whyAr: "n-Deklination للمذكر فقط." },
      ],
      relatedRuleComparison: {
        title: "n-Deklination أم عادية؟",
        content: "اختبر: هل الاسم مذكر + ينتهي بـ e أو لاتيني؟ نعم → n/en. لا → عادي. (der Mann عادي: dem Mann بدون n).",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "في الجمعية",
        lines: [
          { speaker: "Leiter", de: "Herzlich willkommen im Verein! Darf ich eine Frage stellen?", ar: "أهلاً بك في الجمعية! هل أستطيع طرح سؤال؟" },
          { speaker: "Sami", de: "Ja, natürlich.", ar: "نعم طبعاً." },
          { speaker: "Leiter", de: "Warum möchtest du ehrenamtlich helfen?", ar: "لماذا تريد التطوع؟" },
          { speaker: "Sami", de: "Ich möchte dem Verein helfen und Erfahrung sammeln.", ar: "أريد مساعدة الجمعية وجمع خبرة." },
          { speaker: "Leiter", de: "Perfekt! Wir leisten Hilfe für viele Familien. Du wirst mit dem Kollegen arbeiten.", ar: "ممتاز! نقدم مساعدة لعائلات كثيرة. ستعمل مع الزميل." },
          { speaker: "Sami", de: "Ich freue mich!", ar: "أنا سعيد!" },
        ],
      },
      {
        id: "l2",
        title: "مشروع اجتماعي",
        lines: [
          { speaker: "Mona", de: "Wir treffen eine wichtige Entscheidung heute.", ar: "نتخذ قراراً مهماً اليوم." },
          { speaker: "Karim", de: "Was für ein Projekt?", ar: "أي مشروع؟" },
          { speaker: "Mona", de: "Wir möchten eine Frage stellen: Wie helfen wir den Kindern am besten?", ar: "نريد طرح سؤال: كيف نساعد الأطفال أفضل؟" },
          { speaker: "Karim", de: "Vielleicht mit dem Verein? Der Verein hat viele Kunden... äh, Mitglieder.", ar: "ربما مع الجمعية؟ الجمعية لديها أعضاء كثيرون." },
          { speaker: "Mona", de: "Genau! Wir nehmen Kontakt auf.", ar: "بالضبط! نتواصل معهم." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Sami sammeln?",
        questionAr: "ماذا يريد سامي أن يجمع؟",
        options: ["Erfahrung", "Geld", "Bücher", "Freunde"],
        correctIndex: 0,
        explanation: "قال سامي: Ich möchte ... Erfahrung sammeln.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Mit wem wird Sami arbeiten?",
        questionAr: "مع من سيعمل سامي؟",
        options: ["mit dem Kollegen", "mit dem Chef", "mit dem Kunden", "allein"],
        correctIndex: 0,
        explanation: "قال المدير: Du wirst mit dem Kollegen arbeiten.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was treffen sie heute?",
        questionAr: "ماذا يتخذون اليوم؟",
        options: ["eine Entscheidung", "eine Frage", "einen Termin", "eine Pause"],
        correctIndex: 0,
        explanation: "قالت منى: Wir treffen eine wichtige Entscheidung heute.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات التطوع: eh، nn، وtz",
    items: [
      { de: "das Ehrenamt", ar: "العمل التطوعي", note: "eh = e طويلة: إيرِن-أمت" },
      { de: "der Verein", ar: "الجمعية", note: "ei = آي: فِرآين" },
      { de: "die Spende", ar: "التبرع", note: "sp = شپ: شپِندِه" },
      { de: "das Projekt", ar: "المشروع", note: "j = ي: پرويِكت" },
      { de: "der Kunde", ar: "الزبون", note: "u + nd: كونده" },
      { de: "das Mitglied", ar: "العضو", note: "g = خ: ميت-غليهد" },
    ],
    tip: "Ehrenamt = إيرِن-أمت — eh في البداية تُنطق e طويلة (حرف h يطيل). تذكر: الحرف + h = طويل!",
    shadowing: [
      { de: "Darf ich eine Frage stellen?", ar: "هل أستطيع طرح سؤال؟", tip: "eine Frage stellen — الوصلة" },
      { de: "Wir leisten Hilfe.", ar: "نقدم مساعدة.", tip: "Hilfe leisten — الوصلة" },
      { de: "Ich kenne den Studenten.", ar: "أعرف الطالب.", tip: "den Studenten — n-Deklination" },
      { de: "Er spricht mit dem Kollegen.", ar: "يتحدث مع الزميل.", tip: "dem Kollegen — n-Deklination" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب وصلة رسمية:",
      prompt: "اكتب: «يطرح سؤالاً» بالألمانية (وصلة)",
      acceptedAnswers: ["eine Frage stellen", "Ich stelle eine Frage"],
      sampleAnswer: "Ich stelle eine Frage.",
      explanation: "الوصلة: eine Frage stellen.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بوصلة صحيحة:",
      template: "eine Frage ___ (طرح) · eine Entscheidung ___ (اتخاذ) · Bescheid ___ (إعطاء خبر)",
      blanks: [
        { correct: "stellen", options: ["stellen", "treffen", "sagen"] },
        { correct: "treffen", options: ["stellen", "treffen", "sagen"] },
        { correct: "sagen", options: ["stellen", "treffen", "sagen"] },
      ],
      explanation: "السؤال يُطرح، القرار يُتخذ، الخبر يُقال.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich kenne den Studenten.",
      explanation: "أعرف الطالب — n-Deklination: den Studenten.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة الصحيحة:",
      questionDe: "eine Frage ___",
      options: ["stellen", "machen", "sagen", "nehmen"],
      correctIndex: 0,
      explanation: "السؤال يُطرح (stellen).",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف n:",
      questionDe: "Ich sehe den ___.",
      options: ["Studenten", "Student", "Studentes", "Studenten"],
      correctIndex: 0,
      explanation: "النصب: den Studenten.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة التطوع بمعناها:",
      pairs: [
        { left: "das Ehrenamt", right: "العمل التطوعي" },
        { left: "der Verein", right: "الجمعية" },
        { left: "die Spende", right: "التبرع" },
        { left: "das Mitglied", right: "العضو" },
      ],
      explanation: "أربع كلمات تطوعية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Frage", "eine", "stellen", "Darf", "ich", "?"],
      correctSentence: "Darf ich eine Frage stellen?",
      explanation: "هل أستطيع طرح سؤال؟ — الوصلة في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich sehe den Student.",
      wrongWord: "Student",
      correctWord: "Studenten",
      options: ["Studenten", "Student", "Studentes", "Studenten"],
      explanation: "n-Deklination: den Studenten.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف n:",
      template: "Wir helfen dem ___ (Kunde). Das ist der Wagen des ___ (Herr Weber).",
      blanks: [
        { correct: "Kunden", options: ["Kunden", "Kunde", "Kundes"] },
        { correct: "Herrn", options: ["Herrn", "Herr", "Herrs"] },
      ],
      explanation: "dem Kunden (جر) + des Herrn (مضاف).",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "استبدل الفعل بوصلة:",
      prompt: "Ich frage. → (أطرح سؤالاً)",
      acceptedAnswers: ["Ich stelle eine Frage", "Ich stelle eine Frage."],
      sampleAnswer: "Ich stelle eine Frage.",
      explanation: "fragen → eine Frage stellen.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Bescheid sagen",
      questionAr: "ما معنى العبارة؟",
      options: ["يعطي خبراً/يبلغ", "يقول وداعاً", "يأخذ قراراً", "يقدم مساعدة"],
      correctIndex: 0,
      explanation: "Bescheid sagen = يبلغ/يعطي خبراً.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Wir sprechen mit dem Kollege.",
      wrongWord: "Kollege",
      correctWord: "Kollegen",
      options: ["Kollegen", "Kollege", "Kolleges", "Kollegen"],
      explanation: "n-Deklination مع الجر: dem Kollegen.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir nehmen Abschied von unseren Freunden.",
      explanation: "نودع أصدقاءنا — Abschied nehmen.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "eine Frage machen", right: "eine Frage stellen", whyAr: "السؤال يُطرح." },
      { wrong: "Ich sehe den Student.", right: "den Studenten", whyAr: "n-Deklination." },
      { wrong: "mit dem Kollege", right: "mit dem Kollegen", whyAr: "n-Deklination مع الجر." },
    ],
    eselsbruecken: [
      "«الوصلات = أسلوب رسمي»: fragen → eine Frage stellen.",
      "«n-Deklination = رجال بـ e + لاتينيون»: Student, Kunde, Herr, Polizist, Kollege, Junge.",
    ],
    culturalNote: {
      title: "ثقافة التطوع (Ehrenamt)",
      content:
        "ألمانيا فيها ~600 ألف جمعية تطوعية! من Firefighter المتطوعين (Freiwillige Feuerwehr) إلى مساعدة اللاجئين. «Ehrenamtlich arbeiten» صفة فخر. وكثير من الوافدين يبدأون بالتطوع لتعلم اللغة والتواصل: «Ich helfe ehrenamtlich und lerne Deutsch».",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "eine Entscheidung ___",
      options: ["treffen", "stellen", "sagen", "machen"],
      correctIndex: 0,
      explanation: "القرار يُتخذ (treffen).",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف n:",
      questionDe: "Wir helfen dem ___.",
      options: ["Kunden", "Kunde", "Kundes", "Kunde"],
      correctIndex: 0,
      explanation: "الجر: dem Kunden.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Er", "traf", "Entscheidung", "eine", "wichtige", "."],
      correctSentence: "Er traf eine wichtige Entscheidung.",
      explanation: "اتخذ قراراً مهماً — الوصلة: eine Entscheidung treffen.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Polizist fragt den Journalist.",
      wrongWord: "Journalist",
      correctWord: "Journalisten",
      options: ["Journalisten", "Journalist", "Journalistes", "Journalistin"],
      explanation: "n-Deklination: den Journalisten.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "___ Sie mir bitte Bescheid! (أبلغ) Wir nehmen ___. (وداعاً)",
      blanks: [
        { correct: "Sagen", options: ["Sagen", "Stellen", "Treffen"] },
        { correct: "Abschied", options: ["Abschied", "Entscheidung", "Hilfe"] },
      ],
      explanation: "Bescheid sagen + Abschied nehmen.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Ehrenamt", ar: "العمل التطوعي", example: "Ehrenamt ist wichtig.", exampleAr: "العمل التطوعي مهم.", level: "B1" },
    { id: "fc2", de: "der Verein", ar: "الجمعية", example: "Der Verein hilft Kindern.", exampleAr: "الجمعية تساعد الأطفال.", level: "B1" },
    { id: "fc3", de: "die Spende", ar: "التبرع", example: "Die Spende ist großzügig.", exampleAr: "التبرع سخي.", level: "B1" },
    { id: "fc4", de: "eine Frage stellen", ar: "يطرح سؤالاً", example: "Darf ich eine Frage stellen?", exampleAr: "هل أستطيع طرح سؤال؟", level: "B1" },
    { id: "fc5", de: "eine Entscheidung treffen", ar: "يتخذ قراراً", example: "Wir treffen eine Entscheidung.", exampleAr: "نتخذ قراراً.", level: "B1" },
    { id: "fc6", de: "Bescheid sagen", ar: "يبلغ", example: "Sag mir Bescheid!", exampleAr: "أبلغني!", level: "B1" },
    { id: "fc7", de: "die n-Deklination", ar: "تصريف n", example: "den Studenten", exampleAr: "الطالب (نصب)", level: "B1" },
    { id: "fc8", de: "das Mitglied", ar: "العضو", example: "Ich bin Mitglied im Verein.", exampleAr: "أنا عضو في الجمعية.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b1-09-1", type: "relay-instructions",
      titleAr: "انقل إعلان تطوع بالعربية لصديق",
      sourceDe: "Wir suchen Freiwillige für unser Sozialprojekt. Aufgaben: Kinder betreuen und Deutsch üben. Zeit: samstags von 10 bis 14 Uhr.",
      taskAr: "انقل الإعلان بالعربية: المهام، اليوم والوقت، ولمن يوجه.",
      modelAnswerAr: "«نبحث عن متطوعين لمشروعنا الاجتماعي. المهام: رعاية الأطفال وممارسة الألمانية. الوقت: السبت من 10 إلى 2.»",
      keyPointsAr: ["نقلت طلب المتطوعين", "ذكرت المهام (رعاية + لغة)", "نقلت اليوم والوقت"],
    },
  ],
      interaction: [
    {
      id: "int-b1-09-1",
      scenarioAr: "تناقش فكرة العمل التطوعي مع صديق.",
      scenarioDe: "Diskussion über ehrenamtliche Arbeit.",
      strategyAr: "الاستراتيجية: إقناع صديق بقيمة العمل التطوعي.",
      rounds: [
        {
          speakerDe: "Warum engagierst du dich ehrenamtlich?",
          speakerAr: "لماذا تتطوع؟",
          options: [
            { de: "Weil ich der Gesellschaft etwas zurückgeben möchte. Außerdem lerne ich neue Menschen und Fähigkeiten kennen.", ar: "لأنني أريد رد الجميل للمجتمع. كما أتعرف على أشخاص ومهارات جديدة.", best: true, replyDe: "Das ist edel. Aber es kostet viel Zeit.", replyAr: "هذا نبيل. لكنه يكلف وقتاً كثيراً." },
            { de: "Ich habe keine Zeit für andere.", ar: "ليس لدي وقت للآخرين.", best: false, replyDe: "Jeder hat ein bisschen Zeit für gute Zwecke.", replyAr: "كل شخص لديه القليل من الوقت للأعمال الخيرية." },
          ],
        },
        {
          speakerDe: "Lohnt sich das Ehrenamt trotz des Zeitaufwands?",
          speakerAr: "هل يستحق التطوع رغم الوقت؟",
          options: [
            { de: "Ja, auf jeden Fall. Man hilft nicht nur anderen, sondern entwickelt sich auch persönlich weiter.", ar: "نعم بالتأكيد. لا يساعد المرء الآخرين فحسب، بل يتطور شخصياً أيضاً.", best: true, replyDe: "Überzeugend! Vielleicht probiere ich es auch.", replyAr: "مقنع! ربما أجربه أيضاً." },
            { de: "Nein, Zeit ist Geld und ich verschwende sie nicht.", ar: "لا، الوقت مال ولن أضيعه.", best: false, replyDe: "Das ist sehr materialistisch gedacht.", replyAr: "هذا تفكير مادي جداً." },
          ],
        },
      ],
    },
  ],

};