import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-02: عالم العمل — Präteritum الكامل + Plusquamperfekt
 */
export const lessonB102: Lesson = {
  id: "b1-02",
  unitId: "b1-02",
  level: "B1",
  order: 1,
  titleDe: "Arbeitswelt",
  titleAr: "عالم العمل",
  summary:
    "الماضي البسيط الكامل (Präteritum) لكل الأفعال المنتظمة والشاذة، الماضي التام المركب (Plusquamperfekt)، وسرد تجربة العمل: Ich arbeitete, ich hatte gearbeitet.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann das Präteritum komplett bilden.",
      ar: "أن أصوغ الماضي البسيط (Präteritum) للأفعال المنتظمة والشاذة.",
      evidence: {
        exerciseIds: ["e1", "m1", "w2"],
        taskIds: ["practice:b1-02:e1", "flow-practice:b1-02:e1", "mini-test:b1-02:m1", "writing:b1-02:w2"],
        labelAr: "أجب صحيحاً عن e1 (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق) وm1 (kam) في الاختبار المصغّر، وأكمل w2 بالأشكال الثلاثة. قراءة جدول t1 أو كشف الحل لا يُحتسبان أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann das Plusquamperfekt bilden: hatte/war + Partizip II.",
      ar: "أن أصوغ الماضي التام المركب (Plusquamperfekt) للحدث الذي وقع قبل حدث ماضٍ آخر.",
      evidence: {
        exerciseIds: ["e4", "e6", "m2"],
        taskIds: ["practice:b1-02:e4", "flow-practice:b1-02:e4", "practice:b1-02:e6", "mini-test:b1-02:m2"],
        labelAr: "رتّب e4 بصحة (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وأكمل e6 (الفراغات الثلاثة)، وأجب صحيحاً عن m2 (hatte … gegessen) في الاختبار المصغّر. الجدول والشرح لا يُحتسبان أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann Berufserfahrungen in einem kurzen Gespräch verstehen und die Reihenfolge der Ereignisse erkennen.",
      ar: "أن أفهم خبرات مهنية في حوار قصير وأحدد ترتيب الأحداث فيه.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجب صحيحاً عن q1 وq2 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، دون كشف التفريغ. كشف النص (listening-transcript) لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann meine Berufserfahrung in der Vergangenheit schriftlich beschreiben.",
      ar: "أن أكتب عن خبرتي المهنية الماضية بالزمن المناسب.",
      evidence: {
        exerciseIds: ["w1", "w3"],
        taskIds: ["writing:b1-02:w1", "writing:b1-02:w3"],
        labelAr: "أكمل w1 (جملة عن خبرة بالـPräteritum) وw3 (تحويل جملة إلى Präteritum) بصحة. الكتابة الحرة وشرح الجدول لا يُحتسبان ضمن هذا الدليل.",
        completion: "all-correct",
      },
    },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A2 تعلمت war/hatte (ماضي sein/haben). اليوم نعمم: كل الأفعال لها Präteritum! المنتظم: arbeitete (عمل). والشاذ: ging (ذهب)، kam (جاء). وهناك طبقة زمنية أعمق: Plusquamperfekt — «ما قبل الماضي» — مثل العربية: «كان قد عمل». ثلاث طبقات زمنية!",
    motivatingQuestionDe: "Wo haben Sie früher gearbeitet?",
    contextAr:
      "ندخل عالم العمل الاحترافي: نروي تجاربنا بالماضي الكامل، ونستخدم Plusquamperfekt للحديث عن «ما سبق» — مفيدة في مقابلات العمل وكتابة السيرة الذاتية.",
    contextDe: "Bevor ich studierte, hatte ich als Verkäufer gearbeitet.",
    connectionToPreviousAr: "تتذكر Perfekt (habe gegessen) وPräteritum للأفعال المساعدة (war). اليوم: Präteritum للكل + Plusquamperfekt — اكتمال منظومة الأزمنة الماضية الثلاثة.",
    activateVocabulary: [
      { de: "die Bewerbung", ar: "طلب الوظيفة" },
      { de: "der Arbeitgeber", ar: "صاحب العمل" },
      { de: "die Erfahrung", ar: "الخبرة" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية" },
      { de: "das Vorstellungsgespräch", ar: "مقابلة العمل" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-05 — في المكتب والعمل): اختر الماضي الصحيح:",
      questionDe: "Ich ___ gestern im Büro. (كنت)",
      options: ["war", "hatte", "bin", "habe"],
      correctIndex: 0,
      explanation: "Präteritum sein: war (درس المكتب).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-01 — السفر والعطلات): اختر Perfekt الصحيح:",
      questionDe: "Ich ___ ein Buch ___. (قرأت)",
      options: ["habe ... gelesen", "bin ... gelesen", "habe ... gelest", "bin ... gelest"],
      correctIndex: 0,
      explanation: "lesen قوي: habe gelesen (درس السفر).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1 (درس a1-10 — العمل والمهن): أكمل:",
      template: "Ich arbeite als ___.",
      blanks: [
        { correct: "Lehrer", options: ["Lehrer", "Schüler", "Tisch"] },
      ],
      explanation: "arbeiten als + مهنة (درس المهن).",
      errorType: "vocabulary",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الماضي البسيط الكامل (Präteritum) للجميع",
      titleDe: "Das komplette Präteritum",
      explanationAr:
        "المنتظم: جذر + te: arbeiten → ich arbeitete، du arbeitetest. الشاذ: تغيير جذري: gehen → ging، kommen → kam، sehen → sah. الأفعال الشرطية: konnte, musste, wollte. القاعدة العامة: في الكتابة والقصص يُستخدم Präteritum غالباً، وفي الكلام يبقى للأفعال sein وhaben والأفعال الشرطية.",
      whyAr:
        "لماذا نتعلمه كاملاً الآن؟ لأن القصص والتقارير والنصوص المكتوبة تستعمل Präteritum كثيراً، وفي الكلام يبقى مع sein وhaben والأفعال الشرطية. ومن دون معرفته ستصطدم بجمل لا تفهمها: «Er ging in die Stadt und kaufte ein Brot» — رغم أنك تعرف gehen وkaufen.",
      table: {
        title: "Präteritum منتظم وشاذ",
        columns: ["الفعل", "Präteritum (ich)", "Partizip II", "النمط"],
        rows: [
          { label: "arbeiten", cells: ["arbeitete", "gearbeitet", "منتظم"] },
          { label: "kaufen", cells: ["kaufte", "gekauft", "منتظم"] },
          { label: "gehen", cells: ["ging", "gegangen", "شاذ"] },
          { label: "kommen", cells: ["kam", "gekommen", "شاذ"] },
          { label: "sehen", cells: ["sah", "gesehen", "شاذ"] },
          { label: "essen", cells: ["aß", "gegessen", "شاذ"] },
          { label: "können", cells: ["konnte", "gekonnt", "شرطي"] },
          { label: "müssen", cells: ["musste", "gemusst", "شرطي"] },
        ],
      },
      examples: [
        { de: "Ich arbeitete fünf Jahre in einer Firma.", ar: "عملت خمس سنوات في شركة." },
        { de: "Er ging jeden Tag zu Fuß zur Arbeit.", ar: "كان يمشي كل يوم إلى العمل." },
        { de: "Sie kam um acht Uhr und begann sofort.", ar: "جاءت في الثامنة وبدأت فوراً." },
        { de: "Wir sahen gestern einen interessanten Film.", ar: "شاهدنا أمس فيلماً مثيراً." },
        { de: "Ich konnte gut mit dem Computer arbeiten.", ar: "كنت أجيد العمل بالحاسوب." },
      ],
      comparisonWithArabic:
        "«عملت» = ich arbeitete. «ذهب» = er ging. العربية تعبّر عن الحدث الماضي بالفعل الماضي عموماً، والألمانية تفرّق بين Perfekt (غالباً في الكلام) وPräteritum (غالباً في الكتابة والسرد). المعنى واحد، والاختيار يتبع السياق والنوع.",
      eselsbruecke:
        "«المنتظم: +te (أربيته)، الشاذ: غيّر الجذر (غينغ، كام)» — احفظ الشواذ بالثلاثي: gehen-ging-gegangen. جدول الأفعال الشاذة (أعلاه) رفيقك الدائم!",
      commonMistakes: [
        { wrong: "Ich gehen ging (خلط المضارع مع الماضي)", right: "Ich ging.", whyAr: "اختر زمناً واحداً: ging ماضٍ كامل." },
        { wrong: "ich arbeitete أم ich habe gearbeitet؟", right: "كلاهما صحيح: arbeitete (كتابة) / habe gearbeitet (كلام)", whyAr: "السياق يحدد: السرد المكتوب يميل إلى Präteritum، والكلام إلى Perfekt. sein وhaben والأفعال الشرطية تبقى Präteritum حتى في الكلام." },
        { wrong: "Ich sah أم Ich habe gesehen؟ في القصة", right: "في القصة: sah (Präteritum). في الكلام: habe gesehen", whyAr: "القصص والكتابة السردية: Präteritum غالباً." },
      ],
      relatedRuleComparison: {
        title: "Präteritum أم Perfekt — القرار",
        content: "قاعدة عملية: الأفعال المساعدة والشرطية في الكلام → Präteritum (war, konnte). بقية الكلام → Perfekt. الكتابة الرسمية والقصص → Präteritum غالباً.",
      },
    },
    {
      id: "t2",
      titleAr: "الماضي التام المركب (Plusquamperfekt) — ما قبل الماضي",
      titleDe: "Das Plusquamperfekt: hatte/war + Partizip II",
      explanationAr:
        "Plusquamperfekt = حدث قبل حدث ماضٍ آخر: hatte/war (في Präteritum) + Partizip II في النهاية: Bevor ich studierte, hatte ich gearbeitet. (قبل أن أدرس، كنت قد عملت). مثل العربية: «كان قد عمل».",
      whyAr:
        "لماذا نحتاجها؟ لأن سرد الأحداث الزمنية يحتاج ترتيباً: حدث قديم (Plusquamperfekt) ثم أحدث (Präteritum/Perfekt). بدونها لا نعرف أي حدث سبق أيّاً — وهي تُظهر ترتيب الأحداث بوضوح.",
      table: {
        title: "Plusquamperfekt",
        columns: ["الفعل", "التركيب", "مثال"],
        rows: [
          { label: "haben", cells: ["hatte + Partizip II", "Ich hatte gearbeitet."] },
          { label: "sein", cells: ["war + Partizip II", "Er war gegangen."] },
          { label: "bevor/als", cells: ["قبل/عندما + Plusquamperfekt", "Bevor ich kam, hatte er gegessen."] },
        ],
      },
      examples: [
        { de: "Bevor ich studierte, hatte ich gearbeitet.", ar: "قبل أن أدرس، كنت قد عملت." },
        { de: "Nachdem er die Schule beendet hatte, begann er zu arbeiten.", ar: "بعد أن أنهى المدرسة، بدأ العمل." },
        { de: "Ich war schon gegangen, als sie ankam.", ar: "كنت قد غادرت عندما وصلت." },
        { de: "Sie hatte alles vorbereitet, bevor das Meeting begann.", ar: "كانت قد جهزت كل شيء قبل أن يبدأ الاجتماع." },
        { de: "Wir hatten die Erfahrung, also bekamen wir den Job.", ar: "كنا نملك الخبرة، لذلك حصلنا على الوظيفة." },
      ],
      comparisonWithArabic:
        "«كان قد عمل» = hatte gearbeitet. العربية تملك «كان قد» — والألمانية: hatte/war + تصريف ثالث. مطابقة شبه تامة: Bevor ich studierte, hatte ich gearbeitet = قبل أن أدرس، كان قد عملتُ.",
      eselsbruecke:
        "«Plusquamperfekt = كان قد»: كل «كان قد» = hatte/war + Partizip II. وعلامته: يأتي مع bevor/nachdem/als.",
      commonMistakes: [
        { wrong: "Ich hatte gearbeitet gehabt (تضاعف)", right: "Ich hatte gearbeitet.", whyAr: "طبقة واحدة فقط: hatte + Partizip II." },
        { wrong: "Bevor ich studierte, ich hatte gearbeitet. (ترتيب)", right: "Bevor ich studierte, hatte ich gearbeitet.", whyAr: "الجملة الثانوية أولاً → الفعل الرئيسي بعدها." },
        { wrong: "Nachdem er gegessen hat, ging er. (في السرد الماضي)", right: "Nachdem er gegessen hatte, ging er.", whyAr: "nachdem + Plusquamperfekt للحدث الأقدم شائع في السرد، وفي الكلام اليومي يُستعمل Perfekt أيضاً؛ فالمسألة أسلوبية لا قاعدة مطلقة." },
      ],
      relatedRuleComparison: {
        title: "الأزمنة الثلاثة للماضي",
        content: "Perfekt (حدث قريب/كلام) → Präteritum (كتابة/قصة) → Plusquamperfekt (قبل حدث ماضٍ). الحدث الأقدم Plusquamperfekt، والأحدث Präteritum أو Perfekt، والحاضر Präsens.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "مقابلة عمل",
        lines: [
          { speaker: "Interviewer", de: "Erzählen Sie mir von Ihrer Erfahrung.", ar: "حدثني عن خبرتك." },
          { speaker: "Sami", de: "Ich arbeitete drei Jahre als Programmierer in Tunis.", ar: "عملت ثلاث سنوات مبرمجاً في تونس." },
          { speaker: "Interviewer", de: "Was machten Sie genau?", ar: "ماذا كنت تفعل بالضبط؟" },
          { speaker: "Sami", de: "Ich entwickelte Webseiten und half dem Team.", ar: "كنت أطور مواقع ويب وأساعد الفريق." },
          { speaker: "Interviewer", de: "Warum wollen Sie nach Deutschland?", ar: "لماذا تريد الذهاب إلى ألمانيا؟" },
          { speaker: "Sami", de: "Bevor ich mich bewarb, hatte ich viel recherchiert. Deutschland bietet gute Möglichkeiten.", ar: "قبل أن أتقدم، كنت قد بحثت كثيراً. ألمانيا تقدم فرصاً جيدة." },
        ],
      },
      {
        id: "l2",
        title: "سرد قصة عمل",
        lines: [
          { speaker: "Anna", de: "Als ich anfing, hatte ich keine Erfahrung.", ar: "عندما بدأت، لم يكن لدي خبرة." },
          { speaker: "Karim", de: "Und was machtest du zuerst?", ar: "وماذا فعلت أولاً؟" },
          { speaker: "Anna", de: "Ich lernte von meinen Kollegen und machte Fehler.", ar: "تعلمت من زملائي وارتكبت أخطاء." },
          { speaker: "Karim", de: "Ich glaube, jeder beginnt so.", ar: "أعتقد أن الجميع يبدأ هكذا." },
          { speaker: "Anna", de: "Ja, aber nachdem ich ein Jahr gearbeitet hatte, wurde ich sicherer.", ar: "نعم، لكن بعد أن عملت سنة، أصبحت أكثر ثقة." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was arbeitete Sami in Tunis?",
        questionAr: "ماذا عمل سامي في تونس؟",
        options: ["Programmierer", "Lehrer", "Verkäufer", "Ingenieur"],
        correctIndex: 0,
        explanation: "قال: Ich arbeitete drei Jahre als Programmierer.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was hatte Sami vor der Bewerbung gemacht?",
        questionAr: "ماذا كان سامي قد فعل قبل التقديم؟",
        options: ["viel recherchiert", "Deutsch gelernt", "ein Buch geschrieben", "ein Praktikum gemacht"],
        correctIndex: 0,
        explanation: "قال: Bevor ich mich bewarb, hatte ich viel recherchiert.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was passierte nach einem Jahr Arbeit?",
        questionAr: "ماذا حدث بعد سنة عمل؟",
        options: ["Sie wurde sicherer", "Sie hörte auf", "Sie wechselte die Firma", "Sie ging in Rente"],
        correctIndex: 0,
        explanation: "قالت آنا: Nachdem ich ein Jahr gearbeitet hatte, wurde ich sicherer.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات العمل: ei، au، وw",
    items: [
      { de: "die Erfahrung", ar: "الخبرة", note: "a طويلة، وh صامتة بعدها: إرفااروڠ" },
      { de: "der Arbeitgeber", ar: "صاحب العمل", note: "ei = آي: أربايت-غيبر" },
      { de: "das Vorstellungsgespräch", ar: "مقابلة العمل", note: "كلمة طويلة: فورش-تيلونغس-غِشپريش" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية", note: "au = آو: ليبِنْس-لاوف" },
      { de: "die Bewerbung", ar: "طلب الوظيفة", note: "w = ڤ؛ b في بداية المقطع تبقى ب: بِڤِربونغ" },
      { de: "der Kollege", ar: "الزميل", note: "o مفتوحة + g: كولِغِه" },
    ],
    tip: "Vorstellungsgespräch = فورش-تيلونغس-غِشپريش — أطول كلمة اليوم. قسّمها: Vorstellung (تقديم) + Gespräch (حديث).",
    shadowing: [
      { de: "Ich arbeitete drei Jahre in Tunis.", ar: "عملت ثلاث سنوات في تونس.", tip: "arbeitete = أربايتِتِه (Präteritum)" },
      { de: "Bevor ich studierte, hatte ich gearbeitet.", ar: "قبل أن أدرس كنت قد عملت.", tip: "hatte ich gearbeitet — التركيب" },
      { de: "Ich entwickelte Webseiten.", ar: "كنت أطور مواقع ويب.", tip: "entwickelte = إنت-ڤيكِلْتِه" },
      { de: "Er kam um acht und begann.", ar: "جاء في الثامنة وبدأ.", tip: "kam / begann (شواذ)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب عن خبرتك الماضية:",
      prompt: "اكتب: «عملت ثلاث سنوات في شركة» (Präteritum)",
      acceptedAnswers: ["Ich arbeitete drei Jahre in einer Firma", "Ich arbeitete drei Jahre in einer Firma."],
      sampleAnswer: "Ich arbeitete drei Jahre in einer Firma.",
      explanation: "المنتظم: arbeitete (Präteritum).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ Präteritum:",
      template: "Ich ___ (arbeiten) gestern. Er ___ (gehen) nach Hause. Sie ___ (kommen) um acht.",
      blanks: [
        { correct: "arbeitete", options: ["arbeitete", "arbeitet", "gearbeitet"] },
        { correct: "ging", options: ["ging", "geht", "gegangen"] },
        { correct: "kam", options: ["kam", "kommt", "gekommen"] },
      ],
      explanation: "منتظم: arbeitete. شواذ: ging, kam.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل الجملة إلى الماضي البسيط (Präteritum):",
      instructionDe: "Schreibe im Präteritum:",
      prompt: "Heute arbeite ich im Büro. → Gestern ...",
      acceptedAnswers: ["Gestern arbeitete ich im Büro.", "Gestern arbeitete ich im Büro"],
      sampleAnswer: "Gestern arbeitete ich im Büro.",
      explanation: "في الكتابة والسيرة الذاتية: Präteritum (arbeitete). في المحادثة: Perfekt (habe gearbeitet).",
      errorType: "grammar",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر Präteritum الصحيح:",
      questionDe: "Ich ___ gestern in der Stadt.",
      options: ["ging", "geht", "gegangen", "gehe"],
      correctIndex: 0,
      explanation: "gehen → ging (شاذ).",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر Präteritum الصحيح:",
      questionDe: "Sie ___ viel in der Firma.",
      options: ["arbeitete", "arbeitet", "gearbeitet", "arbeitte"],
      correctIndex: 0,
      explanation: "المنتظم: arbeitete.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بماضيه:",
      pairs: [
        { left: "gehen", right: "ging" },
        { left: "kommen", right: "kam" },
        { left: "sehen", right: "sah" },
        { left: "essen", right: "aß" },
      ],
      explanation: "شواذ أساسية: ging, kam, sah, aß.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["hatte", "ich", "Bevor", "studierte", "gearbeitet", "ich", ","],
      correctSentence: "Bevor ich studierte, hatte ich gearbeitet.",
      explanation: "Plusquamperfekt: hatte + Partizip II في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "في الجملة خطأ واحد: اختر التصحيح الصحيح للكلمة المخطئة.",
      wrongSentence: "Ich bin gestern im Büro gearbeitet.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "war", "hatte"],
      explanation: "arbeiten يأخذ haben في Perfekt: Ich habe gestern im Büro gearbeitet. sein للأفعال التي تدل على حركة أو تغيّر.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ Plusquamperfekt:",
      template: "Bevor ich kam, ___ er schon ___ (essen). Nachdem sie ___ (arbeiten), ging sie nach Hause.",
      blanks: [
        { correct: "hatte", options: ["hatte", "war", "hat"] },
        { correct: "gegessen", options: ["gegessen", "geessen", "gegesst"] },
        { correct: "gearbeitet hatte", options: ["gearbeitet hatte", "gearbeitet hat", "arbeitete hatte"] },
      ],
      explanation: "Plusquamperfekt: hatte + Partizip II (مع nachdem: الفعل في النهاية).",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى Plusquamperfekt:",
      prompt: "Ich arbeitete. → (Plusquamperfekt: كنت قد عملت قبل حدث آخر في الماضي)",
      acceptedAnswers: ["Ich hatte gearbeitet", "Ich hatte gearbeitet."],
      sampleAnswer: "Ich hatte gearbeitet.",
      explanation: "Plusquamperfekt: hatte + gearbeitet.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die Bewerbung",
      questionAr: "ما معنى الكلمة؟",
      options: ["طلب الوظيفة", "السيرة الذاتية", "مقابلة العمل", "الراتب"],
      correctIndex: 0,
      explanation: "die Bewerbung = طلب/تقديم الوظيفة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى Plusquamperfekt للحدث الأقدم:",
      prompt: "Nachdem er gegessen hat, ging er. → (استخدم hatte)",
      acceptedAnswers: ["Nachdem er gegessen hatte, ging er.", "Nachdem er gegessen hatte, ging er"],
      sampleAnswer: "Nachdem er gegessen hatte, ging er.",
      explanation: "nachdem + Plusquamperfekt للحدث الأقدم شائع في السرد. وفي الكلام اليومي يُستعمل Perfekt أيضاً، لذلك الجملة الأصلية صحيحة لغوياً.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Als sie ankam, hatte ich schon gegessen.",
      explanation: "عندما وصلت، كنت قد أكلت — Plusquamperfekt مع als.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich habe gegangen (haben بدل sein)", right: "Ich bin gegangen.", whyAr: "gehen حركة → sein في الفصحى." },
      { wrong: "Ich hatte gearbeitet gehabt (تضاعف)", right: "Ich hatte gearbeitet.", whyAr: "طبقة واحدة." },
      { wrong: "خلط ging مع gegangen", right: "ging = Präteritum (في الجملة وحدها). gegangen = مع sein/haben", whyAr: "شكلان مختلفان لنفس الفعل في زمنين." },
    ],
    eselsbruecken: [
      "«المنتظم +te، الشاذ غيّر الجذر» — واعتمد جدول الأفعال الشاذة في المشروع.",
      "«Plusquamperfekt = كان قد» — مع bevor/nachdem/als.",
    ],
    culturalNote: {
      title: "التقديم للوظائف في ألمانيا",
      content:
                "الوثائق المعتادة في التقديم: Anschreiben (خطاب التقديم)، Lebenslauf (السيرة الذاتية)، وZeugnisse (الشهادات). تختلف الممارسة بين الشركات والمهن، فالأفضل مراجعة إعلان الوظيفة. وعبارة مفيدة: «Ich bringe viel Erfahrung mit» (أملك خبرة كبيرة).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Präteritum:",
      questionDe: "Er ___ gestern spät.",
      options: ["kam", "kommt", "gekommen", "komme"],
      correctIndex: 0,
      explanation: "kommen → kam.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Plusquamperfekt:",
      questionDe: "Bevor ich kam, ___ er schon ___.",
      options: ["hatte ... gegessen", "hat ... gegessen", "hatte ... geessen", "war ... gegessen"],
      correctIndex: 0,
      explanation: "Plusquamperfekt: hatte + gegessen.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["arbeitete", "Ich", "Jahre", "fünf", "in", "Firma", "einer", "."],
      correctSentence: "Ich arbeitete fünf Jahre in einer Firma.",
      explanation: "عملت خمس سنوات في شركة — Präteritum.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى Präteritum:",
      prompt: "Sie hat den Film gesehen. → (Präteritum)",
      acceptedAnswers: ["Sie sah den Film.", "Sie sah den Film"],
      sampleAnswer: "Sie sah den Film.",
      explanation: "Präteritum: sehen → sah. في السرد الكتابي يُستعمل Präteritum غالباً.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالماضي الصحيح:",
      template: "Ich ___ (arbeiten) gestern. Er ___ (gehen) nach Hause. Wir ___ (haben) Zeit.",
      blanks: [
        { correct: "arbeitete", options: ["arbeitete", "arbeitet", "gearbeitet"] },
        { correct: "ging", options: ["ging", "geht", "gegangen"] },
        { correct: "hatten", options: ["hatten", "haben", "hatte"] },
      ],
      explanation: "arbeitete (منتظم)، ging (شاذ)، hatten (مساعد جمع).",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Bewerbung", ar: "طلب الوظيفة", example: "Die Bewerbung ist fertig.", exampleAr: "طلب الوظيفة جاهز.", level: "B1" },
    { id: "fc2", de: "der Lebenslauf", ar: "السيرة الذاتية", example: "Mein Lebenslauf ist aktuell.", exampleAr: "سيرتي الذاتية محدثة.", level: "B1" },
    { id: "fc3", de: "das Vorstellungsgespräch", ar: "مقابلة العمل", example: "Ich habe morgen ein Vorstellungsgespräch.", exampleAr: "عندي غداً مقابلة عمل.", level: "B1" },
    { id: "fc4", de: "die Erfahrung", ar: "الخبرة", example: "Ich habe viel Erfahrung.", exampleAr: "لدي خبرة كبيرة.", level: "B1" },
    { id: "fc5", de: "das Präteritum", ar: "الماضي البسيط", example: "arbeitete, ging, kam", exampleAr: "عمل، ذهب، جاء", level: "B1" },
    { id: "fc6", de: "das Plusquamperfekt", ar: "الماضي التام المركب", example: "hatte gearbeitet", exampleAr: "كان قد عمل", level: "B1" },
    { id: "fc7", de: "bevor / nachdem / als", ar: "قبل أن / بعد أن / عندما", example: "Bevor ich kam, ...", exampleAr: "قبل أن آتي...", level: "B1" },
    { id: "fc8", de: "der Arbeitgeber / -nehmer", ar: "صاحب العمل / الموظف", example: "Der Arbeitgeber zahlt das Gehalt.", exampleAr: "صاحب العمل يدفع الراتب.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-b1-02-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات مقابلة عمل ألمانية بالعربية لصديق",
      sourceDe: "Bitte kommen Sie pünktlich zum Vorstellungsgespräch. Bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit. Das Gespräch dauert etwa 30 Minuten.",
      taskAr: "أخبر صديقك بالعربية بموعد المقابلة وكل ما يجب إحضاره ومدتها، بدقة كاملة.",
      modelAnswerAr: "«المقابلة — كن في الموعد. أحضر سيرتك الذاتية وشهاداتك. المقابلة تستغرق حوالي 30 دقيقة.»",
      keyPointsAr: ["نقلت شرط الحضور في الموعد", "ذكرت إحضار السيرة والشهادات", "نقلت المدة (30 دقيقة)"],
    },
  ],
  interaction: [
    {
      id: "int-b1-02-1",
      scenarioAr: "مقابلة عمل لوظيفة في شركة ألمانية.",
      scenarioDe: "Ein Vorstellungsgespräch bei einer deutschen Firma.",
      strategyAr: "الاستراتيجية: وصف الخبرات بالماضي (Perfekt في الكلام، وPlusquamperfekt للحدث الأقدم) والرد بثقة مهنية.",
      rounds: [
        {
          speakerDe: "Erzählen Sie etwas über Ihre Berufserfahrung.",
          speakerAr: "حدثنا عن خبرتك المهنية.",
          options: [
            { de: "Bevor ich hierher kam, arbeitete ich in einer Bank. Ich hatte dort drei Jahre gearbeitet.", ar: "قبل أن آتي إلى هنا، عملت في بنك. كنت قد عملت هناك ثلاث سنوات.", best: true, replyDe: "Sehr interessant. Was waren Ihre Aufgaben?", replyAr: "مثير جداً للاهتمام. ما كانت مهامك؟" },
            { de: "Ich habe keine Erfahrung.", ar: "لا أملك خبرة.", best: false, replyDe: "Oh, das ist schade. Was haben Sie studiert?", replyAr: "أوه، هذا مؤسف. ماذا درست؟" },
          ],
        },
        {
          speakerDe: "Was waren Ihre Hauptaufgaben?",
          speakerAr: "ما كانت مهامك الرئيسية؟",
          options: [
            { de: "Ich habe Kunden beraten und Termine koordiniert. Außerdem habe ich Berichte geschrieben.", ar: "كنت أستشير العملاء وأنسق المواعيد. وكتبت التقارير أيضاً.", best: true, replyDe: "Das klingt genau, was wir suchen. Wann können Sie anfangen?", replyAr: "هذا يبدو بالضبط ما نبحث عنه. متى تستطيع البدء؟" },
            { de: "Ich habe nichts Wichtiges gemacht.", ar: "لم أفعل شيئاً مهماً.", best: false, replyDe: "Wirklich? Dann sollten wir über andere Qualifikationen sprechen.", replyAr: "حقاً؟ إذن علينا التحدث عن مؤهلات أخرى." },
          ],
        },
        {
          speakerDe: "Wann können Sie bei uns anfangen?",
          speakerAr: "متى تستطيع البدء معنا؟",
          options: [
            { de: "Ich könnte nächste Woche anfangen. Ich muss nur meine aktuelle Stelle kündigen.", ar: "أستطيع البدء الأسبوع القادم. يجب فقط إنهاء عقدي الحالي.", best: true, replyDe: "Sehr gut! Wir melden uns bis Freitag bei Ihnen.", replyAr: "ممتاز! سنخبرك بنتيجة القرار بحلول الجمعة." },
            { de: "Ich weiß nicht, wann ich anfangen kann.", ar: "لا أعرف متى أستطيع البدء.", best: false, replyDe: "Hmm, das ist nicht sehr professionell. Denken Sie nochmal nach.", replyAr: "همم، هذا ليس احترافياً جداً. فكر في الأمر مجدداً." },
          ],
        },
      ],
    },
  ],
};
