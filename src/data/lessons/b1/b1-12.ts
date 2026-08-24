import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-12: الغرض والسبب — damit / um … zu + حروف الجر مع المضاف إليه
 *
 * يسدّ فجوة نحوية حرجة: لم تكن أيّ كتلة نظرية في المنهج تُدرّس
 * جملة الغرض (damit مقابل um … zu) ولا حروف الجر wegen/trotz/während/aufgrund
 * مع Genitiv، رغم ورودهما في نصوص B1/B2 باستمرار.
 */
export const lessonB112: Lesson = {
  id: "b1-12",
  unitId: "b1-10",
  level: "B1",
  order: 2,
  titleDe: "Ziele, Gründe und Absichten",
  titleAr: "الأهداف والأسباب والنوايا",
  duration: 40,
  summary:
    "التعبير عن الغرض بـ damit و um … zu (وشرط وحدة الفاعل)، وحروف الجر مع المضاف إليه (wegen, trotz, während, aufgrund) وبدائلها الشائعة في اللغة المحكية.",

  lernziele: [
    { id: "z1", de: "Ich kann ein Ziel mit „um … zu“ ausdrücken.", ar: "أن أعبّر عن هدفي بـ um … zu عندما يكون الفاعل واحداً." },
    { id: "z2", de: "Ich kann „damit“ benutzen, wenn zwei Personen beteiligt sind.", ar: "أن أستخدم damit عندما يختلف فاعل الجملتين." },
    { id: "z3", de: "Ich kann Gründe mit Präpositionen wie „wegen“ und „trotz“ nennen.", ar: "أن أذكر السبب والتنازل بحروف الجر wegen وtrotz مع المضاف إليه." },
    { id: "z4", de: "Ich kann über meine Motivation beim Sprachenlernen sprechen.", ar: "أن أتحدث عن دوافعي في تعلّم اللغة وأهدافي منها." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "لماذا تتعلّم الألمانية؟ في العربية تقول «أتعلّم الألمانية لكي أدرس في ألمانيا» و«أتعلّمها لكي يفهمني الأطباء». الجملتان تبدأان بـ«لكي» — لكن الألمانية تفرّق بينهما تفريقاً صارماً: الأولى um … zu والثانية damit. الفرق كله في سؤال واحد: من يفعل الفعل الثاني؟",
    motivatingQuestionDe: "Warum lernen Sie Deutsch?",
    contextAr:
      "نتعلّم اليوم كيف نربط الفعل بهدفه، ثم كيف نذكر السبب باختصار عبر حرف جرّ واحد بدل جملة كاملة — وهما مفتاحا الأسلوب المكتوب في B1.",
    contextDe: "Wir sprechen über Ziele, Gründe und Absichten.",
    connectionToPreviousAr:
      "تعرف weil (لأنّ) من A2 وobwohl (رغم أنّ) من B1. اليوم نضيف الوجه الآخر: بدل جملة كاملة بـ weil، حرف جرّ واحد wegen. وبدل «لأنني أريد»، جملة غرض صريحة.",
    activateVocabulary: [
      { de: "das Ziel", ar: "الهدف" },
      { de: "der Grund", ar: "السبب" },
      { de: "die Absicht", ar: "النية" },
      { de: "der Zweck", ar: "الغرض" },
      { de: "die Voraussetzung", ar: "الشرط المسبق" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر أداة السبب:",
      questionDe: "Ich lerne Deutsch, ___ ich in Deutschland studieren möchte.",
      options: ["weil", "denn ich", "wegen", "damit"],
      correctIndex: 0,
      explanation: "weil ترسل الفعل إلى آخر الجملة التابعة: ..., weil ich studieren möchte.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1 (درس b1-07 — السياسة والمجتمع): اختر أداة التنازل:",
      questionDe: "___ es regnete, gingen wir spazieren.",
      options: ["Obwohl", "Weil", "Damit", "Trotz"],
      correctIndex: 0,
      explanation: "obwohl = رغم أنّ، وتبدأ جملة تابعة كاملة (فعل في النهاية).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-03 — البيئة والمناخ): أكمل المصدر مع zu:",
      template: "Es ist wichtig, die Umwelt ___ schützen.",
      blanks: [
        { correct: "zu", options: ["zu", "um", "für"] },
      ],
      explanation: "Infinitiv mit zu: الفعل في النهاية مسبوقاً بـ zu.",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الغرض بـ um … zu: فاعل واحد",
      titleDe: "Finalsätze mit „um … zu“",
      explanationAr:
        "للتعبير عن الهدف نستخدم um … zu + Infinitiv: Ich lerne Deutsch, um in Deutschland zu studieren. (أتعلّم الألمانية لكي أدرس في ألمانيا). البنية: um + بقية الجملة + zu + المصدر في النهاية. شرط واحد لا يُكسر: الفاعل في الجملتين شخص واحد — أنا أتعلّم، وأنا أدرس. ومع الأفعال المنفصلة يدخل zu في وسط الفعل: um einzukaufen، um aufzustehen.",
      whyAr:
        "لماذا لا فاعل في الجزء الثاني؟ لأنّ um … zu لا يحتاجه: الفاعل معروف سلفاً من الجملة الأولى. هذا الاختصار هو سبب شيوعها في الكتابة الرسمية — تقول الهدف بلا تكرار «أنا».",
      table: {
        title: "بنية um … zu",
        columns: ["الجزء", "الوظيفة", "مثال"],
        rows: [
          { label: "الجملة الأولى", cells: ["الفعل والفاعل", "Ich spare Geld,"] },
          { label: "um", cells: ["تفتح جملة الغرض", "um"] },
          { label: "المفعول/التفاصيل", cells: ["وسط الجملة", "ein Auto"] },
          { label: "zu + Infinitiv", cells: ["في النهاية دائماً", "zu kaufen."] },
          { label: "فعل منفصل", cells: ["zu تدخل في الوسط", "um einzukaufen"] },
          { label: "مع مودال", cells: ["لا تُستعمل um…zu مع wollen", "✗ um studieren zu wollen"] },
        ],
      },
      examples: [
        { de: "Ich lerne Deutsch, um in Deutschland zu studieren.", ar: "أتعلّم الألمانية لكي أدرس في ألمانيا." },
        { de: "Sie fährt in die Stadt, um einzukaufen.", ar: "تذهب إلى المدينة لكي تتسوّق." },
        { de: "Wir üben jeden Tag, um die Prüfung zu bestehen.", ar: "نتدرّب كل يوم لكي ننجح في الامتحان." },
        { de: "Er steht früh auf, um pünktlich zu sein.", ar: "ينهض باكراً لكي يكون في الموعد." },
        { de: "Man braucht Geduld, um eine Sprache zu lernen.", ar: "يحتاج المرء صبراً لكي يتعلّم لغة." },
      ],
      comparisonWithArabic:
        "«لكي أدرس» = um zu studieren. العربية تضع الفعل مباشرة بعد «لكي»، والألمانية تؤجّله إلى النهاية مسبوقاً بـ zu. الفخّ الحقيقي للناطق بالعربية: العربية تسمح بذكر الفاعل («لكي أنا أدرس» مفهومة)، والألمانية تمنعه منعاً باتاً في um … zu.",
      eselsbruecke:
        "«um … zu = هدف بفاعل واحد». اسأل: من يفعل الفعل الثاني؟ إن كان الفاعل نفسه — um … zu. سطر واحد، شخص واحد.",
      commonMistakes: [
        { wrong: "Ich lerne Deutsch, um ich studiere.", right: "Ich lerne Deutsch, um zu studieren.", whyAr: "لا فاعل ولا فعل مصرَّف بعد um — فقط zu + مصدر." },
        { wrong: "Sie fährt in die Stadt, um zu einkaufen.", right: "Sie fährt in die Stadt, um einzukaufen.", whyAr: "الفعل منفصل: zu تدخل بين البادئة والجذر." },
        { wrong: "Ich lerne, um die Prüfung bestehen zu.", right: "Ich lerne, um die Prüfung zu bestehen.", whyAr: "zu تسبق المصدر ولا تأتي بعده." },
      ],
      relatedRuleComparison: {
        title: "um … zu أم weil؟",
        content: "weil تجيب «لماذا؟» بسبب واقع: Ich lerne, weil ich Zeit habe (لأنّ لديّ وقتاً). أمّا um … zu فتجيب «لأيّ غرض؟» بهدف مستقبلي: Ich lerne, um zu studieren. السبب خلفك، والغرض أمامك.",
      },
    },
    {
      id: "t2",
      titleAr: "الغرض بـ damit: فاعلان مختلفان",
      titleDe: "Finalsätze mit „damit“",
      explanationAr:
        "حين يختلف فاعل الجملتين لا تصحّ um … zu، فنستخدم damit: Ich erkläre es langsam, damit du mich verstehst. (أشرحها ببطء لكي تفهمني). damit أداة جملة تابعة كاملة: لها فاعلها الخاص وفعلها المصرَّف في النهاية. ومع اختلاف الفاعل تصلح damit وحدها — لا بديل عنها.",
      whyAr:
        "لماذا نحتاج أداتين لمعنى واحد؟ لأنّ um … zu تحذف الفاعل، فإن كان الفاعل الثاني شخصاً آخر ضاعت المعلومة: من الذي سيفهم؟ damit تحتفظ بالفاعل صراحةً، فتبقى الجملة دقيقة.",
      table: {
        title: "um … zu مقابل damit",
        columns: ["المعيار", "um … zu", "damit"],
        rows: [
          { label: "الفاعل", cells: ["واحد في الجملتين", "مختلف بين الجملتين"] },
          { label: "الفعل", cells: ["مصدر مع zu", "مصرَّف في النهاية"] },
          { label: "ذكر الفاعل", cells: ["ممنوع", "واجب"] },
          { label: "مثال", cells: ["Ich spare, um zu reisen.", "Ich spare, damit meine Kinder reisen."] },
          { label: "فاعل واحد + damit", cells: ["—", "جائزة لكنها ثقيلة أسلوبياً"] },
        ],
      },
      examples: [
        { de: "Ich erkläre es langsam, damit du mich verstehst.", ar: "أشرحها ببطء لكي تفهمني." },
        { de: "Die Eltern arbeiten viel, damit die Kinder studieren können.", ar: "يعمل الوالدان كثيراً لكي يستطيع الأطفال الدراسة." },
        { de: "Ich schreibe dir die Adresse auf, damit du sie nicht vergisst.", ar: "أكتب لك العنوان لكي لا تنساه." },
        { de: "Der Lehrer wiederholt die Regel, damit alle sie behalten.", ar: "يكرّر المعلّم القاعدة لكي يحفظها الجميع." },
        { de: "Wir gehen früh los, damit wir den Zug nicht verpassen.", ar: "ننطلق باكراً لكي لا تفوتنا القطار." },
      ],
      comparisonWithArabic:
        "العربية تستخدم «لكي» في الحالتين دون تفريق: «أعمل لكي أنجح» و«أعمل لكي ينجح ابني». الألمانية تجبرك على الاختيار حسب الفاعل — وهذا أكثر خطأ يقع فيه الناطق بالعربية في هذا الباب.",
      eselsbruecke:
        "«damit = شخصان». احفظ الميزان: فاعل واحد ← um … zu، فاعلان ← damit. وحرف الـ d في damit يذكّرك بـ du (أنت الآخر).",
      commonMistakes: [
        { wrong: "Ich erkläre es langsam, um du zu verstehen.", right: "Ich erkläre es langsam, damit du mich verstehst.", whyAr: "الفاعل مختلف (أنا أشرح، أنت تفهم) ⇒ damit لا um … zu." },
        { wrong: "Die Eltern arbeiten, damit die Kinder können studieren.", right: "Die Eltern arbeiten, damit die Kinder studieren können.", whyAr: "damit جملة تابعة: الفعل المصرَّف (können) في النهاية." },
        { wrong: "Ich gehe früh, damit zu kommen pünktlich.", right: "Ich gehe früh, um pünktlich zu kommen.", whyAr: "لا يُخلط البناءان: damit + جملة كاملة، أو um + zu + مصدر." },
      ],
      relatedRuleComparison: {
        title: "damit الأداة أم damit الظرف؟",
        content: "الكلمة نفسها لها وجهان: أداة غرض (damit du verstehst = لكي تفهم)، وظرف بمعنى «به/بذلك» (Ich schreibe damit = أكتب به). ميّزهما بالموضع: أداةً تفتح جملة تابعة بفاصلة قبلها، وظرفاً تقع داخل الجملة بلا فاصلة.",
      },
    },
    {
      id: "t3",
      titleAr: "حروف الجر مع المضاف إليه: wegen وtrotz وwährend",
      titleDe: "Präpositionen mit Genitiv: wegen, trotz, während, aufgrund",
      explanationAr:
        "بدل جملة تابعة كاملة يمكن ذكر السبب باسم واحد بعد حرف جرّ يطلب Genitiv: wegen des Regens (بسبب المطر)، trotz des Regens (رغم المطر)، während der Arbeit (أثناء العمل)، aufgrund der Krise (نتيجةً للأزمة). المذكّر والمحايد يأخذان des + s في آخر الاسم، والمؤنّث والجمع يأخذان der بلا إضافة. وفي اللغة المحكية يشيع wegen + Dativ (wegen dem Regen) — مفهومة لكنها غير معيارية في الكتابة.",
      whyAr:
        "لماذا نتعلّم هذه الحروف؟ لأنّها أداة الاختصار في الكتابة: «رغم أنّ الطقس كان سيئاً» تصير كلمتين trotz des Wetters. وهذا هو الأسلوب الاسمي الذي تُقاس عليه نصوص B1 وB2 — وبدونه تبقى كتابتك في مستوى A2.",
      table: {
        title: "حروف الجر مع Genitiv",
        columns: ["الحرف", "المعنى", "مثال"],
        rows: [
          { label: "wegen", cells: ["بسبب", "Wegen des Regens bleiben wir zu Hause."] },
          { label: "trotz", cells: ["رغم", "Trotz des Regens gehen wir spazieren."] },
          { label: "während", cells: ["أثناء", "Während der Arbeit telefoniere ich nicht."] },
          { label: "aufgrund", cells: ["نتيجةً لـ / بناءً على", "Aufgrund der Krise sparen viele Menschen."] },
          { label: "innerhalb", cells: ["خلال (مدة)", "Innerhalb einer Woche kommt die Antwort."] },
          { label: "مذكّر/محايد", cells: ["des + الاسم + s", "wegen des Wetters"] },
          { label: "مؤنّث/جمع", cells: ["der بلا إضافة", "wegen der Arbeit / wegen der Kinder"] },
        ],
      },
      examples: [
        { de: "Wegen des Regens bleiben wir zu Hause.", ar: "بسبب المطر نبقى في البيت." },
        { de: "Trotz des schlechten Wetters fahren wir los.", ar: "رغم الطقس السيئ ننطلق." },
        { de: "Während der Prüfung darf man nicht sprechen.", ar: "أثناء الامتحان لا يُسمح بالكلام." },
        { de: "Aufgrund der hohen Preise kaufen wir weniger.", ar: "نتيجةً لارتفاع الأسعار نشتري أقلّ." },
        { de: "Wegen der Kinder ziehen sie in eine größere Wohnung.", ar: "من أجل الأطفال ينتقلون إلى شقة أكبر." },
      ],
      comparisonWithArabic:
        "«بسبب المطر» = wegen des Regens — والعربية هنا أقرب ما تكون إلى الألمانية: كلاهما يضع الاسم مضافاً إليه بعد أداة السبب. الفرق الوحيد أنّ الألمانية تُعلّم المضاف إليه بأداة صريحة (des/der) وبإضافة s للمذكّر والمحايد.",
      eselsbruecke:
        "«أربعة تطلب المضاف: wegen — trotz — während — aufgrund». وللأداة: مذكّر ومحايد des مع s لاصقة، ومؤنّث وجمع der نظيفة بلا زيادة.",
      commonMistakes: [
        { wrong: "wegen dem Regen (في نصّ مكتوب)", right: "wegen des Regens", whyAr: "الصيغة المعيارية Genitiv؛ Dativ محكية مقبولة شفهياً لا كتابياً." },
        { wrong: "trotz der Regen", right: "trotz des Regens", whyAr: "der Regen مذكّر ⇒ des Regens مع s في آخر الاسم." },
        { wrong: "während die Arbeit", right: "während der Arbeit", whyAr: "die Arbeit مؤنّث ⇒ der Arbeit في المضاف إليه." },
      ],
      relatedRuleComparison: {
        title: "wegen أم weil؟",
        content: "المعنى واحد والبناء مختلف: weil تتبعها جملة كاملة بفعل في النهاية (weil es regnet)، وwegen يتبعها اسم في المضاف إليه (wegen des Regens). القاعدة العملية: عندك فعل ⇒ weil، عندك اسم ⇒ wegen.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "لماذا الألمانية؟",
        lines: [
          { speaker: "Beraterin", de: "Warum möchten Sie Deutsch lernen?", ar: "لماذا تريد تعلّم الألمانية؟" },
          { speaker: "Yusuf", de: "Ich lerne Deutsch, um hier als Ingenieur zu arbeiten.", ar: "أتعلّم الألمانية لكي أعمل هنا مهندساً." },
          { speaker: "Beraterin", de: "Und Ihre Familie?", ar: "وعائلتك؟" },
          { speaker: "Yusuf", de: "Meine Frau lernt auch, damit unsere Kinder zweisprachig aufwachsen.", ar: "زوجتي تتعلّم أيضاً لكي ينشأ أطفالنا بلغتين." },
          { speaker: "Beraterin", de: "Trotz der Arbeit finden Sie also Zeit?", ar: "إذن رغم العمل تجدان وقتاً؟" },
          { speaker: "Yusuf", de: "Ja, wegen der Kinder ist uns das sehr wichtig.", ar: "نعم، من أجل الأطفال هذا مهم جداً لنا." },
        ],
      },
      {
        id: "l2",
        title: "تأجيل رحلة",
        lines: [
          { speaker: "Lena", de: "Wir müssen früher losfahren, damit wir den Zug nicht verpassen.", ar: "علينا الانطلاق أبكر لكي لا يفوتنا القطار." },
          { speaker: "Tarek", de: "Wegen des Verkehrs? Es ist doch Sonntag.", ar: "بسبب الازدحام؟ لكنه يوم أحد." },
          { speaker: "Lena", de: "Während der Bauarbeiten ist die Strecke gesperrt.", ar: "أثناء أعمال البناء الطريق مغلق." },
          { speaker: "Tarek", de: "Gut, dann packe ich jetzt, um pünktlich fertig zu sein.", ar: "حسناً، إذن أحزم الآن لكي أكون جاهزاً في الموعد." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Warum lernt Yusuf Deutsch?",
        questionAr: "لماذا يتعلّم يوسف الألمانية؟",
        options: ["Um als Ingenieur zu arbeiten", "Um zu studieren", "Wegen der Prüfung", "Damit seine Frau arbeitet"],
        correctIndex: 0,
        explanation: "قال: Ich lerne Deutsch, um hier als Ingenieur zu arbeiten.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum lernt seine Frau Deutsch?",
        questionAr: "لماذا تتعلّم زوجته الألمانية؟",
        options: [
          "Damit die Kinder zweisprachig aufwachsen",
          "Um selbst zu studieren",
          "Wegen der Arbeit",
          "Trotz der Kinder",
        ],
        correctIndex: 0,
        explanation: "الفاعل مختلف (هي تتعلّم، الأطفال ينشأون) ⇒ damit.",
        errorType: "grammar",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum ist die Strecke gesperrt?",
        questionAr: "لماذا الطريق مغلق؟",
        options: ["Während der Bauarbeiten", "Wegen des Regens", "Trotz des Verkehrs", "Um zu sparen"],
        correctIndex: 0,
        explanation: "قالت لينا: Während der Bauarbeiten ist die Strecke gesperrt.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الغرض والسبب: w وz وtz والحرف g في النهاية",
    items: [
      { de: "wegen", ar: "بسبب", note: "w = ڤ، وe الأولى طويلة، وg بين حركتين تبقى غ خفيفة: ڤيغِن" },
      { de: "trotz", ar: "رغم", note: "tz = تس حادّة في النهاية: تروتس" },
      { de: "während", ar: "أثناء", note: "ä الطويلة = إيه ممدودة، وd في النهاية تُنطق ت: ڤيهرِنت" },
      { de: "der Zweck", ar: "الغرض", note: "z في البداية = تس، وck = ك مشدّدة: تسڤيك" },
      { de: "die Absicht", ar: "النية", note: "ch بعد i = ناعمة، وt تلحقها: أبزيشت" },
      { de: "aufgrund", ar: "نتيجةً لـ", note: "au = آو، وd في النهاية تُنطق ت: آوفغرونت" },
    ],
    tip: "قاعدة الحرف الأخير الصامت: d وg وb في نهاية الكلمة تُنطق t وk وp. لذلك während = ڤيهرِنت وaufgrund = آوفغرونت.",
    shadowing: [
      { de: "Ich lerne Deutsch, um hier zu arbeiten.", ar: "أتعلّم الألمانية لكي أعمل هنا.", tip: "um … zu — فاعل واحد" },
      { de: "Ich spreche langsam, damit du mich verstehst.", ar: "أتكلّم ببطء لكي تفهمني.", tip: "damit — فاعلان" },
      { de: "Wegen des Regens bleiben wir zu Hause.", ar: "بسبب المطر نبقى في البيت.", tip: "wegen + Genitiv" },
      { de: "Trotz der Arbeit finde ich Zeit.", ar: "رغم العمل أجد وقتاً.", tip: "trotz + Genitiv" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى جملة غرض بـ um … zu:",
      prompt: "Ich lerne Deutsch. Ich möchte in Deutschland studieren. (ادمجهما)",
      acceptedAnswers: [
        "Ich lerne Deutsch, um in Deutschland zu studieren",
        "Ich lerne Deutsch, um in Deutschland zu studieren.",
      ],
      sampleAnswer: "Ich lerne Deutsch, um in Deutschland zu studieren.",
      explanation: "الفاعل واحد ⇒ um … zu، ويُحذف الفاعل والفعل المودالي.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بأداة الغرض المناسبة حسب الفاعل:",
      template: "Ich wiederhole die Regel, ___ alle sie verstehen. Ich wiederhole die Regel, ___ sie besser ___ behalten.",
      blanks: [
        { correct: "damit", options: ["damit", "um", "weil"] },
        { correct: "um", options: ["um", "damit", "trotz"] },
        { correct: "zu", options: ["zu", "zum", "für"] },
      ],
      explanation: "الأولى فاعلها مختلف (alle) ⇒ damit. الثانية الفاعل نفسه ⇒ um … zu.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Trotz des schlechten Wetters gehen wir spazieren.",
      explanation: "trotz + Genitiv: des schlechten Wetters (مذكّر/محايد ⇒ des + s).",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الغرض الصحيحة:",
      questionDe: "Ich spare Geld, ___ ein Auto ___ kaufen.",
      options: ["um … zu", "damit … zu", "weil … zu", "trotz … zu"],
      correctIndex: 0,
      explanation: "الفاعل واحد (أنا أوفّر، أنا أشتري) ⇒ um … zu.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر أداة الغرض الصحيحة:",
      questionDe: "Die Mutter arbeitet viel, ___ ihre Kinder studieren können.",
      options: ["damit", "um zu", "wegen", "während"],
      correctIndex: 0,
      explanation: "الفاعل مختلف (الأم تعمل، الأطفال يدرسون) ⇒ damit.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجرّ وأداة المضاف إليه:",
      template: "___ ___ Regens bleiben wir zu Hause. (بسبب المطر)",
      blanks: [
        { correct: "Wegen", options: ["Wegen", "Während", "Trotz"] },
        { correct: "des", options: ["des", "der", "dem"] },
      ],
      explanation: "der Regen مذكّر ⇒ des Regens.",
      errorType: "case",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Ich", "früh", "auf", "stehe", "um", "pünktlich", "zu", "sein", ","],
      correctSentence: "Ich stehe früh auf, um pünktlich zu sein.",
      explanation: "الفعل المنفصل في الجملة الرئيسية (stehe … auf)، ثم جملة الغرض بـ um … zu.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich erkläre es langsam, um du mich zu verstehen.",
      wrongWord: "um",
      correctWord: "damit",
      options: ["damit", "um", "weil", "trotz"],
      explanation: "الفاعل مختلف (أنا أشرح، أنت تفهم) ⇒ damit مع جملة تابعة كاملة.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بأداة المضاف إليه الصحيحة:",
      template: "Während ___ Arbeit telefoniere ich nicht. Trotz ___ Wetters fahren wir.",
      blanks: [
        { correct: "der", options: ["der", "des", "dem"] },
        { correct: "des", options: ["des", "der", "dem"] },
      ],
      explanation: "die Arbeit مؤنّث ⇒ der Arbeit. das Wetter محايد ⇒ des Wetters.",
      errorType: "case",
    },
    {
      id: "e7",
      type: "multiple-choice",
      instructionAr: "اختر الصياغة الصحيحة مع الفعل المنفصل:",
      questionDe: "Sie fährt in die Stadt, um ___.",
      options: ["einzukaufen", "zu einkaufen", "einkaufen zu", "zu kaufen ein"],
      correctIndex: 0,
      explanation: "الفعل المنفصل einkaufen: تدخل zu بين البادئة والجذر ⇒ einzukaufen.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Trotz der Regen gehen wir spazieren.",
      wrongWord: "der",
      correctWord: "des",
      options: ["des", "der", "dem", "den"],
      explanation: "der Regen مذكّر ⇒ في المضاف إليه des Regens.",
      errorType: "case",
    },
    {
      id: "e9",
      type: "multiple-choice",
      instructionAr: "اختر البديل الاسمي للجملة التابعة:",
      questionDe: "Weil es regnet, bleiben wir zu Hause. → ___ bleiben wir zu Hause.",
      options: ["Wegen des Regens", "Weil des Regens", "Wegen es regnet", "Damit des Regens"],
      correctIndex: 0,
      explanation: "weil + جملة ⇒ wegen + اسم في المضاف إليه.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Wir", "gehen", "los", "früh", "damit", "wir", "den", "Zug", "erreichen", ","],
      correctSentence: "Wir gehen früh los, damit wir den Zug erreichen.",
      explanation: "damit جملة تابعة: الفعل المصرَّف (erreichen) في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e11",
      type: "transformation",
      instructionAr: "حوّل إلى جملة غرض بـ damit:",
      prompt: "Ich schreibe dir die Adresse auf. Du sollst sie nicht vergessen.",
      acceptedAnswers: [
        "Ich schreibe dir die Adresse auf, damit du sie nicht vergisst",
        "Ich schreibe dir die Adresse auf, damit du sie nicht vergisst.",
      ],
      sampleAnswer: "Ich schreibe dir die Adresse auf, damit du sie nicht vergisst.",
      explanation: "الفاعل مختلف ⇒ damit، والفعل المصرَّف في نهاية الجملة التابعة.",
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "matching",
      instructionAr: "صل حرف الجرّ بمعناه:",
      pairs: [
        { left: "wegen", right: "بسبب" },
        { left: "trotz", right: "رغم" },
        { left: "während", right: "أثناء" },
        { left: "aufgrund", right: "نتيجةً لـ" },
      ],
      explanation: "الحروف الأربعة تطلب المضاف إليه (Genitiv).",
      errorType: "vocabulary",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بجملة الغرض المناسبة:",
      template: "Wir üben jeden Tag, ___ die Prüfung ___ bestehen.",
      blanks: [
        { correct: "um", options: ["um", "damit", "wegen"] },
        { correct: "zu", options: ["zu", "zum", "für"] },
      ],
      explanation: "الفاعل واحد (نحن نتدرّب، نحن ننجح) ⇒ um … zu.",
      errorType: "grammar",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "أيّ جملة صحيحة؟",
      questionDe: "اختر الصياغة السليمة:",
      options: [
        "Ich gehe früh, um pünktlich zu sein.",
        "Ich gehe früh, um ich pünktlich bin.",
        "Ich gehe früh, um zu pünktlich sein.",
        "Ich gehe früh, damit zu pünktlich sein.",
      ],
      correctIndex: 0,
      explanation: "um … zu: بلا فاعل، وzu تسبق المصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e15",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Eltern sparen, um ihre Kinder zu studieren.",
      wrongWord: "um",
      correctWord: "damit",
      options: ["damit", "um", "weil", "während"],
      explanation:
        "الفاعل مختلف (الوالدان يوفّران، الأطفال يدرسون) ⇒ damit مع جملة تابعة: … damit ihre Kinder studieren.",
      errorType: "grammar",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich lerne Deutsch, um ich studiere.",
        right: "Ich lerne Deutsch, um zu studieren.",
        whyAr: "um … zu لا تقبل فاعلاً ولا فعلاً مصرَّفاً — فقط zu + مصدر في النهاية.",
      },
      {
        wrong: "Ich spreche laut, um du mich zu hören.",
        right: "Ich spreche laut, damit du mich hörst.",
        whyAr: "اختلاف الفاعل يوجب damit؛ وهو أشيع خطأ عربي في هذا الباب لأنّ «لكي» واحدة في العربية.",
      },
      {
        wrong: "wegen dem Wetter (في الكتابة)",
        right: "wegen des Wetters",
        whyAr: "المعيار المكتوب Genitiv؛ صيغة Dativ محكية شائعة لكنها تُحسب خطأً في الامتحان.",
      },
      {
        wrong: "während die Pause",
        right: "während der Pause",
        whyAr: "die Pause مؤنّث ⇒ der Pause في المضاف إليه.",
      },
    ],
    eselsbruecken: [
      "اسأل قبل كل جملة غرض: من يفعل الفعل الثاني؟ الفاعل نفسه ⇒ um … zu، شخص آخر ⇒ damit.",
      "عندك فعل ⇒ weil / obwohl. عندك اسم ⇒ wegen / trotz.",
      "مذكّر ومحايد: des + s لاصقة. مؤنّث وجمع: der نظيفة.",
    ],
    culturalNote: {
      title: "لماذا يسألك الألمان دائماً «warum»؟",
      content:
        "في المقابلات الرسمية وطلبات الإقامة والدراسة يُتوقّع منك تبرير هدفك صراحةً: Warum möchten Sie hier arbeiten? الجواب المقنع يستخدم um … zu وdamit لا «لأنني أحبّ ألمانيا». صياغة الهدف بدقّة تُقرأ ثقافياً كعلامة جدّية وتخطيط — وهي مهارة تُقيَّم في امتحان B1 الشفوي.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Er nimmt einen Kurs, ___ besser Deutsch ___ sprechen.",
      options: ["um … zu", "damit … zu", "wegen … zu", "trotz … zu"],
      correctIndex: 0,
      explanation: "الفاعل واحد ⇒ um … zu.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Ich rufe dich an, ___ du Bescheid weißt.",
      options: ["damit", "um zu", "trotz", "aufgrund"],
      correctIndex: 0,
      explanation: "الفاعل مختلف (أنا أتصل، أنت تعلم) ⇒ damit.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "fill-blank",
      instructionAr: "أكمل بأداة المضاف إليه:",
      template: "Aufgrund ___ Krise sparen viele Menschen.",
      blanks: [
        { correct: "der", options: ["der", "des", "dem"] },
      ],
      explanation: "die Krise مؤنّث ⇒ der Krise.",
      errorType: "case",
    },
    {
      id: "m4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Sie", "spart", "Geld", "um", "eine", "Reise", "zu", "machen", ","],
      correctSentence: "Sie spart Geld, um eine Reise zu machen.",
      explanation: "um + المفعول + zu + المصدر في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Wegen der Verkehrs kommen wir später.",
      wrongWord: "der",
      correctWord: "des",
      options: ["des", "der", "dem", "den"],
      explanation: "der Verkehr مذكّر ⇒ des Verkehrs في المضاف إليه.",
      errorType: "case",
    },
  ],

  flashcards: [
    { id: "fc1", de: "um … zu", ar: "لكي (فاعل واحد)", example: "Ich lerne, um zu studieren.", exampleAr: "أتعلّم لكي أدرس.", level: "B1" },
    { id: "fc2", de: "damit", ar: "لكي (فاعلان مختلفان)", example: "Ich erkläre es, damit du es verstehst.", exampleAr: "أشرحها لكي تفهمها.", level: "B1" },
    { id: "fc3", de: "wegen", ar: "بسبب (+ مضاف إليه)", example: "Wegen des Regens bleibe ich hier.", exampleAr: "بسبب المطر أبقى هنا.", level: "B1" },
    { id: "fc4", de: "trotz", ar: "رغم (+ مضاف إليه)", example: "Trotz der Kälte gehe ich raus.", exampleAr: "رغم البرد أخرج.", level: "B1" },
    { id: "fc5", de: "während", ar: "أثناء (+ مضاف إليه)", example: "Während der Pause esse ich.", exampleAr: "أثناء الاستراحة آكل.", level: "B1" },
    { id: "fc6", de: "aufgrund", ar: "نتيجةً لـ (+ مضاف إليه)", example: "Aufgrund der Krise sparen wir.", exampleAr: "نتيجةً للأزمة نوفّر.", level: "B1" },
    { id: "fc7", de: "das Ziel", ar: "الهدف", example: "Mein Ziel ist das Niveau B2.", exampleAr: "هدفي هو المستوى B2.", level: "B1" },
    { id: "fc8", de: "der Grund", ar: "السبب", example: "Der Grund ist einfach.", exampleAr: "السبب بسيط.", level: "B1" },
    { id: "fc9", de: "die Absicht", ar: "النية", example: "Das war nicht meine Absicht.", exampleAr: "لم تكن تلك نيّتي.", level: "B1" },
    { id: "fc10", de: "der Zweck", ar: "الغرض", example: "Welchen Zweck hat das?", exampleAr: "ما الغرض من هذا؟", level: "B1" },
    { id: "fc11", de: "die Voraussetzung", ar: "الشرط المسبق", example: "Deutsch ist die Voraussetzung.", exampleAr: "الألمانية هي الشرط المسبق.", level: "B1" },
    { id: "fc12", de: "innerhalb", ar: "خلال (+ مضاف إليه)", example: "Innerhalb einer Woche antworte ich.", exampleAr: "خلال أسبوع أردّ.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-b1-12-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص إعلان دورة لغة بالعربية",
      sourceDe:
        "Der Intensivkurs findet während der Sommerferien statt. Aufgrund der hohen Nachfrage gibt es nur 15 Plätze. Viele Teilnehmer besuchen den Kurs, um sich auf die B2-Prüfung vorzubereiten.",
      taskAr: "لخّص لصديق: متى الدورة، ولماذا الأماكن محدودة، ولماذا يحضرها المشاركون.",
      modelAnswerAr:
        "«الدورة المكثّفة أثناء العطلة الصيفية. نتيجةً للطلب الكبير لا يوجد سوى خمسة عشر مقعداً. كثير من المشاركين يحضرونها لكي يستعدّوا لامتحان B2.»",
      keyPointsAr: [
        "نقلت الزمن (أثناء العطلة الصيفية)",
        "نقلت سبب محدودية المقاعد (الطلب الكبير)",
        "نقلت الغرض من الحضور (الاستعداد لامتحان B2)",
      ],
    },
  ],

  interaction: [
    {
      id: "int-b1-12-1",
      scenarioAr: "مقابلة في مركز لغات: يسألك الموظّف عن هدفك من الدورة.",
      scenarioDe: "Beratungsgespräch in einer Sprachschule.",
      strategyAr: "الاستراتيجية: صُغ هدفك بجملة غرض صريحة بدل جواب عام، واذكر سببك باسم مختصر.",
      rounds: [
        {
          speakerDe: "Warum möchten Sie diesen Kurs besuchen?",
          speakerAr: "لماذا تريد حضور هذه الدورة؟",
          options: [
            {
              de: "Ich besuche den Kurs, um mich auf die B2-Prüfung vorzubereiten. Aufgrund meiner Arbeit brauche ich das Zertifikat.",
              ar: "أحضر الدورة لكي أستعدّ لامتحان B2. نتيجةً لعملي أحتاج الشهادة.",
              best: true,
              replyDe: "Sehr klar formuliert. Dann passt der Abendkurs gut zu Ihnen.",
              replyAr: "صياغة واضحة جداً. إذن الدورة المسائية تناسبك.",
            },
            {
              de: "Weil Deutsch schön ist.",
              ar: "لأنّ الألمانية جميلة.",
              best: false,
              replyDe: "Das freut mich, aber welches konkrete Ziel haben Sie?",
              replyAr: "يسعدني ذلك، لكن ما هدفك الملموس؟",
            },
          ],
        },
        {
          speakerDe: "Der Kurs findet während der Woche statt. Ist das ein Problem?",
          speakerAr: "الدورة أثناء أيام الأسبوع. هل هذه مشكلة؟",
          options: [
            {
              de: "Trotz meiner Arbeitszeiten schaffe ich das. Ich komme früher, damit ich nichts verpasse.",
              ar: "رغم أوقات عملي سأتدبّر الأمر. سآتي أبكر لكي لا يفوتني شيء.",
              best: true,
              replyDe: "Gut. Ich trage Sie für den Kurs ein.",
              replyAr: "جيد. سأسجّلك في الدورة.",
            },
            {
              de: "Ja, ich kann nicht kommen wegen die Arbeit.",
              ar: "نعم، لا أستطيع الحضور بسبب العمل.",
              best: false,
              replyDe: "Sie meinen sicher „wegen der Arbeit“. Sollen wir einen Abendkurs suchen?",
              replyAr: "تقصد «wegen der Arbeit». هل نبحث عن دورة مسائية؟",
            },
          ],
        },
      ],
    },
  ],
};
