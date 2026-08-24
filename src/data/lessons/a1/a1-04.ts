import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-04: السكن والمنزل
 * — الغرف والأثاث + حروف الجر المكانية (in/auf) مع Dativ + الصفات الخبرية
 */
export const lessonA104: Lesson = {
  id: "a1-04",
  unitId: "a1-04",
  level: "A1",
  order: 1,
  titleDe: "Meine Wohnung",
  titleAr: "السكن والمنزل",
  duration: 30,
  summary:
    "غرف البيت والأثاث، وصف المنزل بصفات بسيطة، حروف الجر المكانية in/auf مع حالة Dativ (im/in der)، والسؤال: Wo wohnst du?",

  lernziele: [
    { id: "z1", de: "Ich kann die Räume nennen.", ar: "أن أسمّي غرف المنزل: Küche, Wohnzimmer, Schlafzimmer, Bad..." },
    { id: "z2", de: "Ich kann meine Wohnung beschreiben.", ar: "أن أصف منزلي بجمل بسيطة (Das Zimmer ist groß)." },
    { id: "z3", de: "Ich kann sagen, wo etwas ist: im, in der, auf dem.", ar: "أن أحدد مكان الأشياء بحروف الجر المكانية مع Dativ." },
    { id: "z4", de: "Ich kann fragen: Wo wohnst du?", ar: "أن أسأل وأجيب عن مكان السكن." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قل: «الكتاب على الطاولة». الآن لاحظ في العربية: «على» لا تغيّر شيئاً في الكلمة التي بعدها. في الألمانية، حرف الجر المكاني يغيّر أداة الاسم! خمّن: هل نقول auf der Tisch أم auf dem Tisch؟",
    motivatingQuestionDe: "Wo ist das Buch?",
    contextAr:
      "ندخل بيتاً ألمانياً اليوم: نتعلم أسماء الغرف، ثم نكتشف «ظاهرة Dativ» — الحالة التي يطلبها حرفا الجر in وauf عندما نسأل «أين؟».",
    contextDe: "Willkommen in meiner Wohnung!",
    connectionToPreviousAr: "تعلمنا النصب (Akkusativ) بعد الأكل. اليوم حالة جديدة: الجر (Dativ) بعد حروف المكان. ترتيب الحالات: Nominativ → Akkusativ → Dativ.",
    activateVocabulary: [
      { de: "die Wohnung", ar: "الشقة" },
      { de: "das Zimmer", ar: "الغرفة" },
      { de: "die Küche", ar: "المطبخ" },
      { de: "wohnen", ar: "يسكن" },
      { de: "das Bett", ar: "السرير" },
    ],
  },

  theory: [
    {
      id: "t1",
      titleAr: "غرف البيت والأثاث",
      titleDe: "Räume und Möbel",
      explanationAr:
        "البيت الألماني النموذجي: die Küche (مطبخ)، das Wohnzimmer (غرفة المعيشة)، das Schlafzimmer (غرفة النوم)، das Bad/das Badezimmer (الحمام)، das Esszimmer (غرفة الطعام)، der Flur (الممر)، der Balkon (الشرفة). الأثاث: der Tisch (طاولة)، der Stuhl (كرسي)، das Sofa (أريكة)، der Schrank (خزانة)، das Bett (سرير)، die Lampe (مصباح).",
      whyAr:
        "لماذا بعض الغرف «مركبة»؟ لأن الألمانية تبني كلمات من كلمتين: Wohnen (يعيش) + Zimmer (غرفة) = Wohnzimmer. إذا عرفت هذا فستفهم مئات الكلمات: Schlafzimmer = غرفة النوم (schlafen = ينام).",
      table: {
        title: "الغرف والأثاث الأساسي",
        columns: ["الألمانية", "العربية", "الملاحظة"],
        rows: [
          { label: "die Küche", cells: ["المطبخ", "مؤنث"] },
          { label: "das Wohnzimmer", cells: ["غرفة المعيشة", "محايد"] },
          { label: "das Schlafzimmer", cells: ["غرفة النوم", "محايد"] },
          { label: "das Bad / Badezimmer", cells: ["الحمام", "محايد"] },
          { label: "das Esszimmer", cells: ["غرفة الطعام", "محايد"] },
          { label: "der Tisch / der Stuhl", cells: ["طاولة / كرسي", "مذكران"] },
          { label: "das Sofa / das Bett", cells: ["أريكة / سرير", "محايدان"] },
          { label: "der Schrank", cells: ["خزانة", "مذكر"] },
        ],
      },
      examples: [
        { de: "Meine Wohnung hat drei Zimmer.", ar: "شقتي فيها ثلاث غرف." },
        { de: "Die Küche ist klein.", ar: "المطبخ صغير." },
        { de: "Das Wohnzimmer ist groß und schön.", ar: "غرفة المعيشة كبيرة وجميلة." },
        { de: "Das Bett ist sehr bequem.", ar: "السرير مريح جداً." },
        { de: "Wo ist die Lampe? — Auf dem Tisch.", ar: "أين المصباح؟ — على الطاولة." },
      ],
      comparisonWithArabic:
        "مثل العربية: «بيت» و«غرفة»... لكن الألمانية تلصق الكلمات: Badezimmer = Bade (استحمام) + Zimmer. العربية تفعل هذا أيضاً أحياناً: «غرفة النوم»! نفس الفكرة — الألمانية بلا مسافة.",
      eselsbruecke:
        "«غرف النوم والحياة والطعام كلها Zimmer» — إذا نسيت: كلها تنتهي بـ Zimmer وتعني غرفة. والحمام «Bad»: باد (مثل باث الإنجليزية).",
      commonMistakes: [
        { wrong: "das Badezimmer يُنسى جنسه → der", right: "das Badezimmer", whyAr: "كل الكلمات المركبة تأخذ جنس آخر مكوّن: Zimmer محايد → das." },
        { wrong: "نقول in Wohnzimmer بدون أداة", right: "im Wohnzimmer", whyAr: "حروف الجر المكانية تحتاج أداة دائماً: im = in + dem." },
        { wrong: "خلط Bad (حمام) مع Bett (سرير)", right: "das Bad = حمام، das Bett = سرير", whyAr: "كلمتان متشابهتان جداً — احفظ: Bad فيه d (دش!)، Bett فيه tt (سرير مريح)." },
      ],
      relatedRuleComparison: {
        title: "الكلمات المركبة — بوصلة المعنى",
        content: "آخر كلمة تحدد الجنس والمعنى: Schlafzimmer (محايد) لأن Zimmer محايد. Wohnungstür (مؤنث) لأن Tür مؤنثة. القاعدة: «الجنس للمكوّن الأخير».",
      },
    },
    {
      id: "t2",
      titleAr: "حروف الجر المكانية مع Dativ: im، in der، auf dem",
      titleDe: "Präpositionen mit Dativ: wo?",
      explanationAr:
        "عندما نسأل «أين؟» (wo؟) ونريد أن نحدد المكان، نستخدم حروف جر مع حالة Dativ. أهمها: in (في) وauf (على) وan (على/بجانب) وunter (تحت). القاعدة: der→dem، die→der، das→dem. والاختصارات الشائعة: in+dem = im، an+dem = am.",
      whyAr:
        "لماذا Dativ؟ لأن الجر في الألمانية «حالة» تتحكم بالأداة. السؤال wo? (أين؟) يطلب Dativ، بينما wohin? (إلى أين؟) يطلب Akkusativ — وهذا التفريق هو قلب الفهم المكاني الألماني (سنكمل wohin في درس المدينة).",
      table: {
        title: "تغيّر الأدوات مع Dativ بعد in/auf",
        columns: ["الجنس", "Nominativ", "Dativ", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "dem", "auf dem Tisch"] },
          { label: "مؤنث", cells: ["die", "der", "in der Küche"] },
          { label: "محايد", cells: ["das", "dem", "im Bett (in+dem)"] },
          { label: "جمع", cells: ["die", "den (+n)", "in den Zimmern"] },
        ],
      },
      examples: [
        { de: "Das Buch ist auf dem Tisch.", ar: "الكتاب على الطاولة." },
        { de: "Die Lampe ist in der Küche.", ar: "المصباح في المطبخ." },
        { de: "Ich schlafe im Bett.", ar: "أنام في السرير." },
        { de: "Wir sitzen im Wohnzimmer.", ar: "نجلس في غرفة المعيشة." },
        { de: "Die Katze ist unter dem Tisch.", ar: "القطة تحت الطاولة." },
      ],
      comparisonWithArabic:
        "العربية لا تغيّر شيئاً بعد حروف الجر: «في المطبخ». الألمانية تغيّر die→der: in der Küche. المفتاح: أنت تتعلم الآن «التناغم بين الحرف والاسم» — شيء لا نملكه، لكنه قاعدة ثابتة سهلة الحفظ.",
      eselsbruecke:
        "«Dativ = دال على الداخل»: بعد wo? كل شيء «يدخل» في dem/der. واختصارات: im (in+dem)، am (an+dem) — مثل «إم» العربية للدخول!",
      commonMistakes: [
        { wrong: "auf der Tisch", right: "auf dem Tisch", whyAr: "المذكر der→dem مع Dativ بعد auf." },
        { wrong: "in die Küche (عند السؤال أين؟)", right: "in der Küche", whyAr: "in der للداخل (wo?); in die تُستخدم مع wohin? فقط — سنتعلمها لاحقاً." },
        { wrong: "im تعني «في» فقط للمحايد", right: "im = in+dem (مذكر أو محايد): im Tisch, im Bett", whyAr: "dem تشمل المذكر والمحايد معاً." },
      ],
      relatedRuleComparison: {
        title: "wo? أم wohin?",
        content: "wo? (أين؟) → Dativ: in der Küche. wohin? (إلى أين؟) → Akkusativ: in die Küche. القاعدة: «السكون Dativ، الحركة Akkusativ» — سنطبقها عملياً في درس المدينة.",
      },
    },
    {
      id: "t3",
      titleAr: "قواعد البيت: müssen و dürfen",
      titleDe: "Hausregeln: müssen und dürfen",
      explanationAr:
        "السكن في ألمانيا يعني قواعد مكتوبة على باب كل عمارة. للتعامل معها تحتاج فعلين ناقصين:\n\n· müssen = الإلزام (يجب). Ich muss die Miete bezahlen.\n· dürfen = الإذن (مسموح). Darf ich hier parken?\n\nوالأهم — وهو ما يقلب المعنى تماماً: nicht dürfen = ممنوع، أمّا nicht müssen = غير مُلزَم (لكنّه مسموح).\n\nولاحظ بنية الجملة: الفعل الناقص يأخذ المركز الثاني، والفعل الأصلي يذهب إلى آخر الجملة بصيغة المصدر. هذا هو «القوس الفعلي» الألماني.",
      whyAr:
        "لماذا نتعلّمهما مع درس السكن؟ لأنّ أول احتكاك للوافد بالألمانية الرسمية هو Hausordnung (نظام العمارة): متى يُمنع الضجيج، أين تُرمى القمامة، هل يجوز الشواء في الشرفة. ومن يخلط بين «غير مُلزَم» و«ممنوع» يقع في مشكلة حقيقية مع الجيران لا في خطأ لغوي فحسب.",
      table: {
        title: "تصريف müssen و dürfen (لاحظ: لا ـt في هو/هي)",
        columns: ["الضمير", "müssen (يجب)", "dürfen (مسموح)"],
        rows: [
          { label: "ich", cells: ["muss", "darf"] },
          { label: "du", cells: ["musst", "darfst"] },
          { label: "er / sie / es", cells: ["muss", "darf"] },
          { label: "wir / sie / Sie", cells: ["müssen", "dürfen"] },
          { label: "ihr", cells: ["müsst", "dürft"] },
        ],
      },
      examples: [
        { de: "Ich muss die Miete am ersten Tag bezahlen.", ar: "يجب أن أدفع الإيجار في اليوم الأول." },
        { de: "Darf ich im Garten grillen?", ar: "هل يُسمح لي أن أشوي في الحديقة؟" },
        { de: "Nach 22 Uhr darf man nicht laut sein.", ar: "بعد العاشرة مساءً لا يُسمح بالضجيج." },
        { de: "Du musst nicht kommen, aber du darfst.", ar: "لستَ مُلزماً بالحضور، لكن يُسمح لك." },
        { de: "Wir müssen den Müll trennen.", ar: "علينا أن نفرز القمامة." },
      ],
      comparisonWithArabic:
        "العربية تنفي الإلزام والإذن بالأداة نفسها تقريباً («لا يجب» / «لا يُسمح»)، وكثير من العرب يستعملون «لا يجب» بمعنى «ممنوع». الألمانية تفصل بحدّة: nicht dürfen = ممنوع منعاً باتّاً، وnicht müssen = اختياري. قل «Du musst nicht warten» لضيف تقصد إعفاءه، فإن قلت «Du darfst nicht warten» فقد منعته!",
      eselsbruecke:
        "«müssen واجب، dürfen باب»: الواجب يُحمل، والباب يُفتح أو يُغلق. وللنفي: أغلق الباب (nicht dürfen) ⇒ ممنوع؛ ارمِ الحِمل (nicht müssen) ⇒ ارتَح، فأنت حرّ.",
      commonMistakes: [
        {
          wrong: "Du musst nicht rauchen. (بمعنى: ممنوع التدخين)",
          right: "Du darfst nicht rauchen.",
          whyAr: "الجملة الأولى صحيحة نحوياً لكنّها تقول «لستَ مضطراً للتدخين» — وهي عبثية. المنع يكون بـ nicht dürfen حصراً.",
        },
        {
          wrong: "Ich muss die Miete bezahlen morgen.",
          right: "Ich muss morgen die Miete bezahlen.",
          whyAr: "مع الفعل الناقص يُغلَق «القوس الفعلي»: المصدر (bezahlen) يقف في آخر الجملة، فلا يأتي بعده شيء.",
        },
      ],
      relatedRuleComparison: {
        title: "أين يقف هذان الفعلان بين ما تعرفه",
        content:
          "في الدرس a1-06 أخذت können (القدرة) وmöchte (الرغبة المهذّبة). müssen وdürfen يكملان الرباعية الأساسية: قدرة، رغبة، إلزام، إذن. الأربعة تشترك في القاعدة نفسها — لا ـt في «هو/هي»، والمصدر في آخر الجملة.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "وصف الشقة",
        lines: [
          { speaker: "Mona", de: "Meine Wohnung ist in Tunis. Sie hat vier Zimmer.", ar: "شقتي في تونس. فيها أربع غرف." },
          { speaker: "Sami", de: "Welche Zimmer?", ar: "أي غرف؟" },
          { speaker: "Mona", de: "Eine Küche, ein Wohnzimmer, ein Schlafzimmer und ein Bad.", ar: "مطبخ، غرفة معيشة، غرفة نوم وحمام." },
          { speaker: "Sami", de: "Und die Küche? Ist sie groß?", ar: "والمطبخ؟ هل هو كبير؟" },
          { speaker: "Mona", de: "Ja, die Küche ist groß und modern.", ar: "نعم، المطبخ كبير وحديث." },
        ],
      },
      {
        id: "l2",
        title: "أين الأشياء؟",
        lines: [
          { speaker: "Karim", de: "Wo ist das Buch?", ar: "أين الكتاب؟" },
          { speaker: "Leila", de: "Das Buch ist auf dem Tisch.", ar: "الكتاب على الطاولة." },
          { speaker: "Karim", de: "Und die Lampe?", ar: "والمصباح؟" },
          { speaker: "Leila", de: "Die Lampe ist in der Küche.", ar: "المصباح في المطبخ." },
          { speaker: "Karim", de: "Wo schläfst du?", ar: "أين تنام؟" },
          { speaker: "Leila", de: "Ich schlafe im Schlafzimmer.", ar: "أنام في غرفة النوم." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie viele Zimmer hat die Wohnung?",
        questionAr: "كم عدد غرف الشقة؟",
        options: ["vier", "drei", "fünf", "zwei"],
        correctIndex: 0,
        explanation: "قالت منى: Sie hat vier Zimmer — أربع غرف.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist das Buch?",
        questionAr: "أين الكتاب؟",
        options: ["auf dem Tisch", "in der Küche", "im Bett", "unter dem Sofa"],
        correctIndex: 0,
        explanation: "قالت ليلى: Das Buch ist auf dem Tisch — على الطاولة (auf dem).",
        errorType: "preposition",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist die Lampe?",
        questionAr: "أين المصباح؟",
        options: ["in der Küche", "auf dem Tisch", "im Schlafzimmer", "unter dem Bett"],
        correctIndex: 0,
        explanation: "قالت: Die Lampe ist in der Küche — في المطبخ (die→der).",
        errorType: "preposition",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات السكن: ch، ß، وsch",
    items: [
      { de: "die Küche", ar: "المطبخ", note: "ü (يُو) + ch ناعمة: كُيخِه" },
      { de: "das Schlafzimmer", ar: "غرفة النوم", note: "sch (ش) + pf؟ لا — sch فقط: شلاف-تسِمّر" },
      { de: "die Straße", ar: "الشارع", note: "st في البداية = شت + ß = سّ: شتراسِه" },
      { de: "wohnen", ar: "يسكن", note: "w = ڤ + h تطويل o: ڤوهنِن" },
      { de: "das Sofa", ar: "الأريكة", note: "S في البداية = ز؟ لا، س: زوفا (Sofa تُنطق زوفا فعلاً!)" },
      { de: "das Zimmer", ar: "الغرفة", note: "Z = تس + m مزدوج: تسِمّر" },
    ],
    tip: "لاحظ التناقض الجميل: Zimmer تبدأ بـ Z (تس)، وSofa تبدأ بـ S تُنطق ز! حرفان يتبادلان الأدوار.",
    shadowing: [
      { de: "Ich wohne in einer Wohnung.", ar: "أسكن في شقة.", tip: "wohne = ڤوهنِه (w=ڤ)" },
      { de: "Das Wohnzimmer ist groß.", ar: "غرفة المعيشة كبيرة.", tip: "groß = غروس (صوت r+o)" },
      { de: "Das Bett ist im Schlafzimmer.", ar: "السرير في غرفة النوم.", tip: "im = in+dem" },
      { de: "Die Küche ist modern.", ar: "المطبخ حديث.", tip: "Küche = كُيخِه (ü+ch ناعمة)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "أكمل بجملة تصف فيها بيتك:",
      prompt: "Meine Wohnung hat ___ Zimmer: ... (اكتب جملة كاملة تصف شقتك أو بيتك)",
      acceptedAnswers: ["Meine Wohnung hat drei Zimmer", "Meine Wohnung hat zwei Zimmer", "Mein Haus hat vier Zimmer", "Meine Wohnung ist klein"],
      sampleAnswer: "Meine Wohnung hat drei Zimmer: eine Küche, ein Wohnzimmer und ein Bad.",
      explanation: "صيغة الوصف: Meine Wohnung hat + عدد + Zimmer. ثم اذكر الغرف بأدواتها.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر والأداة الصحيحين (im/in der/auf dem/unter dem):",
      template: "Das Buch ist ___ Tisch (على). Die Lampe ist ___ Küche (في). Ich schlafe ___ Bett (في).",
      blanks: [
        { correct: "auf dem", options: ["auf dem", "in der", "im", "unter dem"] },
        { correct: "in der", options: ["auf dem", "in der", "im", "unter dem"] },
        { correct: "im", options: ["auf dem", "in der", "im", "unter dem"] },
      ],
      explanation: "على طاولة مذكر → auf dem. في مطبخ مؤنث → in der. في سرير محايد → im (in+dem).",
      errorType: "preposition",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Das Sofa ist im Wohnzimmer.",
      explanation: "Das Sofa ist im Wohnzimmer — im = in + dem (Wohnzimmer محايد).",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Buch ist ___ Tisch.",
      questionAr: "الكتاب على الطاولة.",
      options: ["auf dem", "auf der", "auf das", "auf den"],
      correctIndex: 0,
      explanation: "المذكر der→dem مع Dativ بعد auf: auf dem Tisch.",
      errorType: "preposition",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Die Lampe ist ___ Küche.",
      questionAr: "المصباح في المطبخ.",
      options: ["in der", "in dem", "im", "in das"],
      correctIndex: 0,
      explanation: "Küche مؤنثة → in der Küche.",
      errorType: "preposition",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الغرفة بمعناها:",
      pairs: [
        { left: "die Küche", right: "المطبخ" },
        { left: "das Wohnzimmer", right: "غرفة المعيشة" },
        { left: "das Schlafzimmer", right: "غرفة النوم" },
        { left: "das Bad", right: "الحمام" },
      ],
      explanation: "الغرف الأربع الأساسية — احفظها مع أدواتها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ist", "im", "Die", "Katze", "Bett", "."],
      correctSentence: "Die Katze ist im Bett.",
      explanation: "القطة في السرير: Die Katze + ist (V2) + im Bett.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich schlafe in dem Bett. (اكتب الصيغة المختصرة)",
      wrongWord: "in dem",
      correctWord: "im",
      options: ["im", "in der", "am", "in das"],
      explanation: "in + dem تُختصر إلى im دائماً: im Bett.",
      errorType: "preposition",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير الصحيح (wohnen):",
      template: "Ich ___ in Tunis. Du ___ in Sousse. Er ___ in Berlin.",
      blanks: [
        { correct: "wohne", options: ["wohne", "wohnst", "wohnt"] },
        { correct: "wohnst", options: ["wohne", "wohnst", "wohnt"] },
        { correct: "wohnt", options: ["wohne", "wohnst", "wohnt"] },
      ],
      explanation: "تصريف wohnen: ich wohne، du wohnst، er wohnt — منتظم تماماً.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال:",
      prompt: "Die Küche ist groß. → ؟",
      acceptedAnswers: ["Ist die Küche groß", "Ist die Küche groß?"],
      sampleAnswer: "Ist die Küche groß?",
      explanation: "سؤال نعم/لا: الفعل أولاً — Ist die Küche groß?",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich schlafe im Schlafzimmer.",
      questionAr: "ما معنى الجملة؟",
      options: ["أنام في غرفة النوم", "آكل في المطبخ", "أجلس في غرفة المعيشة", "أعمل في المكتب"],
      correctIndex: 0,
      explanation: "schlafen = ينام + Schlafzimmer = غرفة النوم.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das Sofa ist in das Wohnzimmer.",
      wrongWord: "in das",
      correctWord: "im",
      options: ["im", "in der", "auf dem", "unter dem"],
      explanation: "بعد wo? نستخدم Dativ: in+das غير صحيحة للمكان الثابت → im Wohnzimmer.",
      errorType: "preposition",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Katze ist unter dem Tisch.",
      explanation: "القطة تحت الطاولة: unter + dem (Dativ للمذكر).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "لافتة على باب العمارة. ماذا تعني؟",
      questionDe: "Nach 22 Uhr darf man nicht laut sein.",
      questionAr: "اختر المعنى الصحيح:",
      options: [
        "ممنوع الضجيج بعد العاشرة مساءً.",
        "لستَ مضطراً للضجيج بعد العاشرة.",
        "يجب أن تكون صاخباً بعد العاشرة.",
        "يمكنك الضجيج حتى العاشرة فقط إن أردت.",
      ],
      correctIndex: 0,
      explanation: "nicht dürfen = المنع. اللافتة تمنع الضجيج ولا تكتفي بإعفائك منه.",
      optionExplanations: [
        undefined,
        "هذا معنى nicht müssen لا nicht dürfen — والفرق بينهما هو بيت القصيد.",
        "müssen تعني الإلزام، ولا وجود لها في الجملة.",
        "الجملة منعٌ صريح لا خيار مطروح.",
      ],
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص المناسب في صيغته الصحيحة:",
      template: "Ich ___ die Miete bezahlen. ___ ich hier parken? Kinder ___ nicht allein im Aufzug fahren.",
      blanks: [
        { correct: "muss", options: ["muss", "musst", "darf"] },
        { correct: "Darf", options: ["Darf", "Muss", "Darfst"] },
        { correct: "dürfen", options: ["dürfen", "darf", "müssen"] },
      ],
      explanation: "ich muss (إلزام) · Darf ich …? (طلب إذن، والفعل أول الجملة في السؤال) · Kinder جمع ⇒ dürfen، والنفي هنا منعٌ.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich muss heute die Wohnung putzen nicht.",
      wrongWord: "putzen nicht",
      correctWord: "nicht putzen",
      options: ["nicht putzen", "putzen nicht", "nicht zu putzen", "kein putzen"],
      explanation: "المصدر يُغلق الجملة، فلا يأتي بعده شيء: النفي يسبقه ⇒ … heute die Wohnung nicht putzen.",
      errorType: "word-order",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال مهذّب لطلب الإذن:",
      tokens: ["Darf", "ich", "im", "Garten", "grillen", "?"],
      correctSentence: "Darf ich im Garten grillen?",
      explanation: "سؤال الإذن يبدأ بالفعل الناقص، والمصدر (grillen) يُغلق الجملة.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "أعد الصياغة: عبّر عن الإعفاء لا المنع.",
      prompt: "صديقك يظنّ أنّ عليه إحضار هدية. طمئنه بأنّه غير مُلزم (استعمل müssen منفياً).",
      acceptedAnswers: [
        "Du musst nichts mitbringen.",
        "Du musst kein Geschenk mitbringen.",
        "Sie müssen nichts mitbringen.",
      ],
      sampleAnswer: "Du musst nichts mitbringen.",
      explanation: "الإعفاء يكون بـ nicht/nichts + müssen. لو قلت «Du darfst nichts mitbringen» لمنعته من إحضار أي شيء!",
      errorType: "grammar",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "auf der Tisch", right: "auf dem Tisch", whyAr: "المذكر der→dem بعد حروف الجر المكانية." },
      { wrong: "im die Küche", right: "in der Küche", whyAr: "im = in+dem للمذكر/المحايد فقط؛ المؤنث يبقى in der." },
      { wrong: "نطق Wohnzimmer كـ«وُهن»", right: "ڤوهن-تسِمّر (w=ڤ)", whyAr: "تذكر قاعدة الأبجدية: W=ڤ دائماً." },
    ],
    eselsbruecken: [
      "«السكون Dativ»: wo? (أين؟ المكان الساكن) → Dativ: im, in der, auf dem.",
      "«im = إم»: مثل كلمة «إم» العربية للدخول — im Wohnzimmer = إم غرفة المعيشة.",
    ],
    culturalNote: {
      title: "الشقة في ألمانيا",
      content:
        "الألمان يهتمون بالعقود: die Miete (الإيجار) تُدفع شهرياً، وغالباً «kalt» (بدون تدفئة) أو «warm» (معها). وكثير من الشقق «ohne Möbel» (بدون أثاث) — ستحتاج تأثيثها بنفسك! هذه المفردات ستكون في درس A2 عن البحث عن سكن.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Sofa ist ___ Wohnzimmer.",
      questionAr: "الأريكة في غرفة المعيشة.",
      options: ["im", "in der", "auf dem", "unter dem"],
      correctIndex: 0,
      explanation: "Wohnzimmer محايد → im (in+dem).",
      errorType: "preposition",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wo ___ du? — Ich wohne in Tunis.",
      options: ["wohnst", "wohne", "wohnt", "wohnen"],
      correctIndex: 0,
      explanation: "مع du: wohnst. (wohne مع ich، wohnt مع er/sie).",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["in", "der", "ist", "Lampe", "Die", "Küche", "."],
      correctSentence: "Die Lampe ist in der Küche.",
      explanation: "المصباح في المطبخ: Die Lampe + ist + in der Küche.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das Buch ist auf der Tisch.",
      wrongWord: "auf der",
      correctWord: "auf dem",
      options: ["auf dem", "auf die", "auf das", "in dem"],
      explanation: "Tisch مذكر → auf dem Tisch.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الصحيح:",
      template: "Die Katze ist ___ Sofa (تحت). Das Bild ist ___ Wand (على الجدار).",
      blanks: [
        { correct: "unter dem", options: ["unter dem", "auf dem", "in der", "im"] },
        { correct: "an der", options: ["an der", "an dem", "auf der", "im"] },
      ],
      explanation: "تحت الأريكة (محايد) → unter dem. على الجدار (مؤنث) → an der Wand.",
      errorType: "preposition",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Wohnung", ar: "الشقة", example: "Meine Wohnung ist klein.", exampleAr: "شقتي صغيرة.", level: "A1" },
    { id: "fc2", de: "das Zimmer", ar: "الغرفة", example: "Das Zimmer ist groß.", exampleAr: "الغرفة كبيرة.", level: "A1" },
    { id: "fc3", de: "die Küche", ar: "المطبخ", example: "Die Küche ist modern.", exampleAr: "المطبخ حديث.", level: "A1" },
    { id: "fc4", de: "das Wohnzimmer", ar: "غرفة المعيشة", example: "Wir sitzen im Wohnzimmer.", exampleAr: "نجلس في غرفة المعيشة.", level: "A1" },
    { id: "fc5", de: "das Schlafzimmer", ar: "غرفة النوم", example: "Ich schlafe im Schlafzimmer.", exampleAr: "أنام في غرفة النوم.", level: "A1" },
    { id: "fc6", de: "das Bad", ar: "الحمام", example: "Das Bad ist sauber.", exampleAr: "الحمام نظيف.", level: "A1" },
    { id: "fc7", de: "der Tisch / der Stuhl", ar: "الطاولة / الكرسي", example: "Auf dem Tisch steht ein Stuhl.", exampleAr: "بجانب الطاولة كرسي.", level: "A1" },
    { id: "fc8", de: "wohnen", ar: "يسكن", example: "Wo wohnst du?", exampleAr: "أين تسكن؟", level: "A1" },
    { id: "fc9", de: "müssen (ich muss)", ar: "يجب / مُلزَم", example: "Ich muss die Miete bezahlen.", exampleAr: "يجب أن أدفع الإيجار.", level: "A1" },
    { id: "fc10", de: "dürfen (ich darf)", ar: "مسموح / يجوز", example: "Darf ich hier parken?", exampleAr: "هل يُسمح لي بالركن هنا؟", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-04-1", type: "simplify-announcement",
      titleAr: "بسّط إعلان شقة بالعربية لصديق",
      sourceDe: "Wohnung zu vermieten: 2 Zimmer, 60 m², Küche und Bad, zentral gelegen. Miete: 600 Euro warm.",
      taskAr: "انقل الإعلان بالعربية لصديق يبحث عن سكن: عدد الغرف، المساحة، الموقع، والإيجار.",
      modelAnswerAr: "«شقة للإيجار: غرفتان، 60 متراً مربعاً، مطبخ وحمام، في موقع مركزي. الإيجار 600 يورو شاملاً.»",
      keyPointsAr: ["نقلت عدد الغرف (2) والمساحة (60م²)", "ذكرت المطبخ والحمام", "نقلت الإيجار (600 يورو)"],
    },
  ],
      interaction: [
    {
      id: "int-a1-04-1",
      scenarioAr: "تتصل بصاحب شقة للاستفسار.",
      scenarioDe: "Du rufst wegen einer Wohnung an.",
      strategyAr: "الاستراتيجية: السؤال عن تفاصيل الشقة والرد على الأسئلة.",
      rounds: [
        {
          speakerDe: "Hallo, Sie interessieren sich für die Wohnung?",
          speakerAr: "مرحباً، أنت مهتم بالشقة؟",
          options: [
            { de: "Ja, genau. Wie viele Zimmer hat sie?", ar: "نعم بالضبط. كم عدد الغرف؟", best: true, replyDe: "Zwei Zimmer plus Küche und Bad.", replyAr: "غرفتان بالإضافة إلى مطبخ وحمام." },
            { de: "Nein, ich suche ein Auto.", ar: "لا، أنا أبحث عن سيارة.", best: false, replyDe: "Das ist ein Wohnungsinserat, kein Auto.", replyAr: "هذا إعلان شقة، وليس سيارة." },
          ],
        },
        {
          speakerDe: "Zwei Zimmer, 60 Quadratmeter. Passt das?",
          speakerAr: "غرفتان، 60 متراً مربعاً. هل يناسبك؟",
          options: [
            { de: "Ja, das passt gut. Und wie hoch ist die Miete?", ar: "نعم يناسبني جيداً. وكم الإيجار؟", best: true, replyDe: "600 Euro warm, inklusive Nebenkosten.", replyAr: "600 يورو شاملاً التكاليف الجانبية." },
            { de: "Ich weiß nicht, ob ich wohnen will.", ar: "لا أعرف إن كنت أريد السكن.", best: false, replyDe: "Sie rufen wegen einer Wohnung an, oder?", replyAr: "أنت تتصل بخصوص شقة، أليس كذلك؟" },
          ],
        },
      ],
    },
  ],

};