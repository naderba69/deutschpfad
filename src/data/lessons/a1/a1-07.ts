import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-07: التسوق
 * — الأرقام 0-1000 + الأسعار باليورو + جمع الأسماء + أكوساتيف مع einkaufen
 */
export const lessonA107: Lesson = {
  id: "a1-07",
  unitId: "a1-07",
  level: "A1",
  order: 1,
  titleDe: "Einkaufen",
  titleAr: "التسوق",
  duration: 30,
  summary:
    "الأرقام من 0 حتى 1000، قراءة الأسعار باليورو، أنماط جمع الأسماء الأساسية، وعبارات التسوق: Was kostet das? Ich nehme...",

  lernziele: [
    { id: "z1", de: "Ich kann bis 1000 zählen.", ar: "أن أعدّ من 0 إلى 1000 وأقرأ الأسعار." },
    { id: "z2", de: "Ich kann fragen: Was kostet das?", ar: "أن أسأل عن السعر وأجيب: Das kostet fünf Euro." },
    { id: "z3", de: "Ich kenne die wichtigsten Pluralformen.", ar: "أن أتعرف على أنماط الجمع الأساسية (Äpfel, Bananen, Bücher...)." },
    { id: "z4", de: "Ich kann im Geschäft einkaufen.", ar: "أن أتسوق: أطلب، أسأل عن السعر، وأدفع." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قل «تفاحة» ثم «تفاحات» بالعربية. لاحظت أنك غيّرت الكلمة؟ الألمانية تفعل هذا أيضاً لكن بأنماط كثيرة: Apfel → Äpfel، Banane → Bananen، Buch → Bücher! كم نمطاً تعتقد أن هناك؟",
    motivatingQuestionDe: "Was kostet das?",
    contextAr:
      "نذهب اليوم إلى السوق الألماني: أرقام للأسعار، وجمع للكميات، وعبارات الشراء. في النهاية ستستطيع شراء أي شيء بنفسك!",
    contextDe: "Ich möchte bitte zwei Äpfel!",
    connectionToPreviousAr: "تعلمت في درس الطعام أسماء المأكولات والنصب. اليوم نضيف: الكميات (جمع) والأسعار (أرقام) — التسوق كاملاً.",
    activateVocabulary: [
      { de: "kaufen", ar: "يشتري" },
      { de: "kosten", ar: "يكلف" },
      { de: "der Euro", ar: "اليورو" },
      { de: "billig", ar: "رخيص" },
      { de: "teuer", ar: "غالٍ" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-05 — الحياة اليومية والروتين): ما وقت الاستيقاظ؟",
      questionDe: "Wann stehst du auf?",
      questionAr: "متى تستيقظ؟",
      options: ["Ich stehe um 7 Uhr auf.", "Ich aufstehe um 7 Uhr.", "Ich stehe auf um 7 Uhr.", "Um 7 Uhr ich aufstehe."],
      correctIndex: 0,
      explanation: "الفعل المنفصل: الفعل في المركز الثاني والبادئة في النهاية (من درس a1-05).",
      errorType: "word-order",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-06 — أوقات الفراغ والهوايات): ماذا تحب أن تفعل؟",
      questionDe: "Was machst du gern?",
      questionAr: "ماذا تحب أن تفعل؟",
      options: ["Ich spiele gern Fußball.", "Ich gern Fußball spiele.", "Ich spiele Fußball gern bin.", "Gern ich Fußball spiele."],
      correctIndex: 0,
      explanation: "gern بعد الفعل (من درس a1-06 الهوايات): Ich spiele gern.",
      errorType: "word-order",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-06 — أوقات الفراغ والهوايات): أكمل بـ können",
      template: "Ich ___ Deutsch sprechen. (können)",
      blanks: [{ correct: "kann", options: ["kann", "können", "kannt", "könnt"] }],
      explanation: "ich kann (من درس a1-06): Ich kann Deutsch sprechen.",
      errorType: "conjugation",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "الأرقام من 0 إلى 1000",
      titleDe: "Die Zahlen 0–1000",
      explanationAr:
        "**١. الأساس: من صفر إلى اثني عشر — تُحفظ حفظاً**\n\nnull · eins · zwei · drei · vier · fünf · sechs · sieben · acht · neun · zehn · elf · zwölf\n\nهذه الثلاثة عشر لا قاعدة لها، شأنها شأن «واحد، اثنان، ثلاثة» في العربية. احفظها كما تحفظ الحروف.\n\n**٢. من ١٣ إلى ١٩: الوحدة + zehn**\n\nهنا تبدأ القاعدة. خُذ رقم الوحدة وألصق به zehn:\n\ndrei + zehn = **dreizehn** (١٣) · vier + zehn = **vierzehn** (١٤) · fünf + zehn = **fünfzehn** (١٥)\n\nوشذّ اثنان فقط عن هذا: **sechzehn** (١٦) تفقد الـs من sechs، و**siebzehn** (١٧) تفقد الـen من sieben. والسبب صوتي بحت: «sechszehn» و«siebenzehn» ثقيلتان على اللسان، فحذفت الألمانية ما استثقلته.\n\n**٣. العشرات: الوحدة + zig**\n\nvier + zig = **vierzig** (٤٠) · fünf + zig = **fünfzig** (٥٠) · acht + zig = **achtzig** (٨٠)\n\nوثلاثة استثناءات: **zwanzig** (٢٠ — لا «zweizig»)، **dreißig** (٣٠ — بـ ßig لا zig)، و**sechzig / siebzig** اللذان يحذفان كما فعلا في العشرات الأولى.\n\n**٤. القاعدة الذهبية: ٢١ إلى ٩٩ تُقرأ من اليمين**\n\nوهذه هي النقطة التي يتعثّر فيها كل متعلّم أوروبي — وتمرّ عليك أنت بلا عناء:\n\n**einundzwanzig** = ein + und + zwanzig = «واحدٌ وعشرون»\n\nالوحدة أوّلاً، ثم und، ثم العشرة. حرفياً كما تقول العربية. وتُكتب **كلمة واحدة متّصلة** بلا فراغات: zweiunddreißig, siebenundvierzig, neunundneunzig.\n\nوانتبه: **eins تفقد الـs** عند التركيب ⇒ ein**und**zwanzig لا einsundzwanzig.\n\n**٥. المئات والألوف**\n\nhundert (١٠٠) · zweihundert (٢٠٠) · tausend (١٠٠٠). والمركّب يُقرأ: المئة، ثم الوحدة، ثم العشرة:\n\n**٣٤٥ = dreihundertfünfundvierzig** (ثلاثمئة، خمسة، وأربعون)\n\nفالانعكاس لا يصيب إلا الخانتين الأخيرتين؛ أمّا المئات فتتقدّم كما في العربية.",
      whyAr:
        "لماذا تُقلب الوحدة على العشرة في الألمانية؟\n\nهذا الترتيب ليس شذوذاً ألمانياً، بل هو الأصل الجرماني القديم الذي حفظته الألمانية وتخلّت عنه الإنكليزية الحديثة جزئياً. وأثره باقٍ في الإنكليزية إلى اليوم في fourteen وsixteen — الوحدة قبل العشرة تماماً كالألمانية؛ لكنّ الإنكليزية عكست الترتيب فيما فوق العشرين (twenty-one) بينما ثبتت الألمانية على القديم.\n\nوالمهمّ لك أنت: **هذا الترتيب هو ترتيب العربية الفصحى نفسه.** «خمسة وأربعون» — الوحدة أوّلاً والعطف ثم العشرة. فما يشكو منه الطالب الفرنسي والإنكليزي أسابيعَ، تملكه أنت جاهزاً في لسانك.\n\nلكن احذر فخّاً مقابلاً: العربية الدارجة التونسية تقول «خمسة وأربعين» بالترتيب نفسه، لكنّها تفصل الكلمات؛ والألمانية تصلها كلمةً واحدة. وحين تسمع رقماً سريعاً في السوق، يجب أن يلتقط أذنك المقطع الأخير أوّلاً (zwanzig? dreißig?) ثم يعود إلى أوّله. تدرَّب على الاستماع بهذا الترتيب المعكوس، لا على القراءة وحدها.",
      table: {
        title: "الأرقام الأساسية",
        columns: ["الرقم", "الألمانية", "الرقم", "الألمانية"],
        rows: [
          { label: "0", cells: ["null", "20", "zwanzig"] },
          { label: "1", cells: ["eins", "21", "einundzwanzig"] },
          { label: "2", cells: ["zwei", "30", "dreißig"] },
          { label: "3", cells: ["drei", "40", "vierzig"] },
          { label: "4", cells: ["vier", "50", "fünfzig"] },
          { label: "5", cells: ["fünf", "100", "hundert"] },
          { label: "6", cells: ["sechs", "200", "zweihundert"] },
          { label: "7", cells: ["sieben", "500", "fünfhundert"] },
          { label: "8", cells: ["acht", "1000", "tausend"] },
          { label: "9", cells: ["neun", "10", "zehn"] },
        ],
      },
      examples: [
        {"de": "Das kostet fünf Euro achtzig.", "ar": "هذا يكلّف خمسة يورو وثمانين سنتاً (5,80 €)."},
        {"de": "Ich hätte gern zweihundert Gramm Käse.", "ar": "أودّ مئتي غرام من الجبن."},
        {"de": "Der Mantel kostet neunundneunzig Euro.", "ar": "المعطف يكلّف تسعة وتسعين يورو."},
        {"de": "Zusammen macht das dreiunddreißig Euro fünfzig.", "ar": "المجموع ثلاثة وثلاثون يورو وخمسون سنتاً."},
        {"de": "Meine Nummer ist sechzehn siebenundzwanzig.", "ar": "رقمي ستّة عشر، سبعة وعشرون."},
        {"de": "Das Fahrrad hat dreihundertfünfundvierzig Euro gekostet.", "ar": "الدرّاجة كلّفت ثلاثمئة وخمسة وأربعين يورو."},
      ],
      comparisonWithArabic:
        "التطابق بين اللغتين في الأعداد المركّبة تطابقٌ بنيويّ نادر، ويستحقّ أن تراه مفصّلاً:\n\n| العربية | البنية | الألمانية |\n|---|---|---|\n| واحد **و**عشرون | وحدة + عطف + عشرة | ein**und**zwanzig |\n| خمسة **و**أربعون | وحدة + عطف + عشرة | fünf**und**vierzig |\n| ثلاثمئة وخمسة وأربعون | مئة + وحدة + عشرة | dreihundertfünfundvierzig |\n\nوحرف und يقابل واو العطف مقابلةً تامّة في الموضع والوظيفة.\n\nأمّا الفروق التي يجب أن تنتبه لها فثلاثة:\n\n**الأوّل** أنّ العربية تُعرب المعدود («واحدٌ وعشرون كتاباً» بالنصب مفرداً) بينما الألمانية تضع المعدود جمعاً بلا إعراب: einundzwanzig Bücher. فلا تنقل قاعدة التمييز العربي إلى الألمانية.\n\n**الثاني** أنّ العربية تخالف بين المذكّر والمؤنّث في العدد («ثلاث تفاحات» و«ثلاثة كتب») — والألمانية لا تعرف هذا إطلاقاً: drei Äpfel وdrei Bücher سواء. وهذا تبسيطٌ لصالحك.\n\n**الثالث** أنّ الفاصلة العشرية عندهم فاصلة لا نقطة: **3,50 €** تُقرأ drei Euro fünfzig. ونقطة الألوف عكسنا كذلك: 1.000 تعني ألفاً لا واحداً.",
      eselsbruecke:
        "**«اقرأ العدد الألماني كما تقرأ العربي الفصيح: الوحدة تسبق العشرة.»**\n\nوللاستثناءات الأربعة التي تحذف حرفاً، احفظ هذه الجملة: **«ستّة وسبعة تُنحِفان قبل العشرة»** — sechs تفقد s وsieben تفقد en كلّما لحقتهما zehn أو zig:\nsechzehn · siebzehn · sechzig · siebzig.\n\nوللثلاثين وحدها: **dreißig بـ ß** — تخيّل أنّ الرقم ٣٠ عمرٌ ثقيل يحتاج حرفاً ثقيلاً.",
      commonMistakes: [
        {"wrong": "einsundzwanzig", "right": "einundzwanzig", "whyAr": "eins تفقد الـs عند التركيب. والقاعدة عامّة: تبقى eins وحدها عند العدّ المجرّد (eins, zwei, drei) وتصير ein داخل المركّب أو قبل اسم مذكّر/محايد."},
        {"wrong": "zwei und zwanzig Euro (منفصلة)", "right": "zweiundzwanzig Euro", "whyAr": "العدد المركّب يُكتب كلمةً واحدة متّصلة مهما طال — حتى dreihundertfünfundvierzig. والكتابة منفصلاً خطأ إملائي يُحسب في الامتحان."},
        {"wrong": "sechszehn / siebenzig", "right": "sechzehn / siebzig", "whyAr": "حذف صوتيّ إلزامي: sechs تفقد الـs وsieben تفقد الـen قبل zehn وzig."},
        {"wrong": "3.50 € (بنقطة)", "right": "3,50 €", "whyAr": "الألمانية تعكس علامات العربية والإنكليزية: الفاصلة للكسر العشري والنقطة للألوف. فـ1.000 € تعني ألف يورو لا يورو واحداً."},
      ],
      relatedRuleComparison: {
        "title": "ein أم eins أم einen؟ ثلاث صور لعدد واحد",
        "content": "**eins** حين تعدّ مجرّداً أو تذكر الرقم وحده: «Wie viel? — Eins.» · **ein/eine** حين يليها اسم، وتتبع جنسه كأداة النكرة: ein Apfel, eine Banane · **einen** حين يقع المعدود مفعولاً به مذكّراً: Ich kaufe einen Apfel. وهذا يربط درس الأرقام بدرس النصب الذي أخذته في درس الطعام: العدد «واحد» هو الوحيد بين الأعداد الذي يُصرَّف، لأنّه في الأصل أداة نكرة لا عدد."
      },
    },
    {
      id: "t2",
      titleAr: "جمع الأسماء (Plural) — أهم الأنماط",
      titleDe: "Der Plural: Äpfel, Bananen, Bücher",
      explanationAr:
        "**لماذا يخيف الجمع الألماني؟ ولماذا لا ينبغي أن يخيفك؟**\n\nفي العربية جمعان: سالم مطّرد (معلّم ← معلّمون) وتكسير سماعيّ (كتاب ← كتب). ولا أحد يشكو، لأنّك تعلّمت أن تحفظ جمع التكسير مع الكلمة. الألمانية تصنع الشيء نفسه بالضبط، لكن بخمسة أنماط بدل نمطين. فالمهارة المطلوبة ليست جديدة عليك.\n\n**١. النمط -e — الأوسع انتشاراً**\n\nder Tisch ← die Tisch**e** · das Jahr ← die Jahr**e** · der Hund ← die Hund**e**\n\nوكثير من المذكّرات يضيف Umlaut معه: der Stuhl ← die St**ü**hl**e** · die Hand ← die H**ä**nd**e**\n\n**٢. النمط -(e)n — قاعدة شبه مطّردة للمؤنّث**\n\nهنا الخبر الأفضل في الدرس كلّه: **أكثر من ٩٠٪ من الأسماء المؤنّثة تُجمع بـ -n أو -en.** فإن عرفت أنّ الكلمة مؤنّثة، عرفتَ جمعها بلا حفظ:\n\ndie Banane ← die Banane**n** · die Frau ← die Frau**en** · die Zeitung ← die Zeitung**en**\n\nوالمنتهية بـ -e تكتفي بـ n، والمنتهية بساكن تأخذ en. والمنتهية بـ **-in** تُضعّف النون: die Lehrerin ← die Lehrerin**nen**.\n\n**٣. النمط -er — للمحايد غالباً، ومعه Umlaut دائماً إن أمكن**\n\ndas Buch ← die B**ü**ch**er** · das Kind ← die Kind**er** · das Haus ← die H**äu**s**er**\n\n**٤. النمط الصفري — تغيّر لا تراه إلا في الحركة**\n\nالأسماء المنتهية بـ **-er / -en / -el** لا تضيف شيئاً، وقد تكتفي بـ Umlaut:\n\nder Apfel ← die **Ä**pfel · das Zimmer ← die Zimmer (بلا أيّ تغيير!) · der Lehrer ← die Lehrer\n\nوهذا النمط أخطر ما في الباب، لأنّ الكلمة لا تتغيّر — فلا يدلّك على الجمع إلا **الأداة die** أو الصفة أو الفعل.\n\n**٥. النمط -s — للدخيل الأجنبي**\n\ndas Auto ← die Auto**s** · das Handy ← die Handy**s** · das Hotel ← die Hotel**s**\n\nفإن رأيت كلمة تبدو إنكليزية أو فرنسية، فجمعها بـ s على الأرجح.\n\n**والقاعدة الجامعة فوق هذا كلّه: أداة الجمع دائماً die، مهما كان جنس المفرد.** der Tisch وdas Buch وdie Frau ⇒ die Tische, die Bücher, die Frauen. جنسٌ واحد يبتلع الأجناس الثلاثة في الجمع.",
      whyAr:
        "لماذا خمسة أنماط ولا قاعدة واحدة؟\n\nلأنّ الجمع الألماني طبقاتٌ تاريخية متراكمة. الأسماء الجرمانية القديمة كانت تُصنَّف في «عائلات صرفية» بحسب الصائت الذي ينتهي به جذرها، ولكل عائلة لاحقة جمع خاصّة. ثم اندثرت تلك الصوائت من النطق وبقيت آثارها في اللواحق — كما اندثرت أوزان بعينها في العربية وبقي جمعها.\n\nأمّا **Umlaut** فقصّته أطرف: النقطتان ليستا زينة، بل أثر صوتيّ. كانت لاحقة الجمع القديمة تحتوي صوت **i**، وهو صوت أماميّ رفيع، فجذب معه صائت الجذر إلى الأمام: a صارت ä، وo صارت ö، وu صارت ü. ثم سقطت الـ i نفسها من النطق وبقي الأثر الذي أحدثته. فحين ترى **Äpfel** فأنت تنظر إلى بصمة حرفٍ مات قبل ألف سنة.\n\nوهذه الظاهرة نفسها موجودة في العربية باسم **الإمالة**، وفي جمع التكسير حين ينكسر الصائت الداخلي: «كتاب ← كُتُب» — تغيّر داخل بنية الكلمة لا في آخرها. فالألمانية والعربية تشتركان في أنّ الجمع قد يكون **داخلياً** لا لاحقةً مضافة، وهذا ما لا تعرفه الإنكليزية إلا في بقايا نادرة (man/men, foot/feet — وهي Umlaut بعينها!).\n\nالخلاصة العملية: لا تحاول اشتقاق الجمع بالقياس. **احفظه مع الكلمة والأداة معاً** — ثلاثيّاً: der Apfel, die Äpfel. هكذا تُكتب في كل قاموس ألماني، وهكذا يجب أن تُكتب في دفترك.",
      table: {
        title: "الأنماط الخمسة الأساسية للجمع",
        columns: ["النمط", "مثال مفرد", "مثال جمع"],
        rows: [
          { label: "-e", cells: ["der Tisch", "die Tische"] },
          { label: "-en / -n", cells: ["die Banane", "die Bananen"] },
          { label: "-er (+Umlaut)", cells: ["das Buch", "die Bücher"] },
          { label: "Umlaut فقط", cells: ["der Apfel", "die Äpfel"] },
          { label: "بدون تغيير", cells: ["das Zimmer", "die Zimmer"] },
          { label: "-s (أجنبي)", cells: ["das Auto", "die Autos"] },
        ],
      },
      examples: [
        {"de": "Ich kaufe drei Äpfel und zwei Kilo Kartoffeln.", "ar": "أشتري ثلاث تفاحات وكيلوين من البطاطا."},
        {"de": "Die Bücher sind heute im Angebot.", "ar": "الكتب اليوم في عرض ترويجي."},
        {"de": "Wie viele Zimmer hat die Wohnung?", "ar": "كم غرفة في الشقّة؟"},
        {"de": "Die Tomaten kosten zwei Euro das Kilo.", "ar": "الطماطم بيوروين للكيلو."},
        {"de": "Meine Schwestern kaufen gern Handys.", "ar": "أخواتي يحببن شراء الهواتف."},
        {"de": "Zwei Flaschen Wasser, bitte.", "ar": "قنّينتا ماء من فضلك."},
      ],
      comparisonWithArabic:
        "الشبه بين النظامين أعمق ممّا يبدو، والفرق أخطر ممّا يبدو.\n\n**أوجه الشبه:**\n\nالعربية تجمع بلاحقة (معلّمون، معلّمات) وتجمع بتغيير داخلي (كتاب ← كُتُب). والألمانية كذلك: لاحقة (Bananen) وتغيير داخلي (Äpfel). فمن أتقن جمع التكسير العربيّ سماعاً، يملك المهارة الذهنية نفسها المطلوبة هنا.\n\n**أوجه الاختلاف الخطِرة:**\n\n**أوّلاً** — العربية تعامل جمع غير العاقل معاملة المفرد المؤنّث: «الكتبُ **جميلة**». والألمانية لا تعرف هذا إطلاقاً: الجمع جمعٌ دائماً، والفعل يتبعه جمعاً: Die Bücher **sind** schön (لا ist). وهذا خطأ متكرّر جداً عند العرب.\n\n**ثانياً** — العربية تُلزم المفرد بعد الأعداد ١١–٩٩ («خمسةَ عشرَ كتاباً» — كتاباً مفرد منصوب!). والألمانية تُلزم الجمع بعد كل عدد أكبر من واحد: fünfzehn **Bücher**. فلا تقل «zwei Apfel» متأثّراً بالتمييز العربي.\n\n**ثالثاً** — للعربية مثنّى مستقلّ (كتابان)، والألمانية لا مثنّى لها: zwei Bücher وحدها. فإن أردت التثنية، فالعدد zwei هو كلّ ما تملك.\n\n**رابعاً** — وحدات الكيل والوزن تبقى **مفردة** بعد الأعداد في الألمانية: zwei **Kilo** (لا Kilos) · hundert **Gramm** · fünf **Euro** (لا Euros). وهذا يوافق العربية في «خمسة كيلو» ويخالف الإنكليزية.",
      eselsbruecke:
        "**قاعدة الجنس تكفيك نصف الطريق:**\n\nمؤنّثة؟ ⇐ **-(e)n** بنسبة تفوق ٩٠٪ (Banane**n**, Frau**en**, Zeitung**en**)\nمحايدة قصيرة؟ ⇐ **-er + Umlaut** غالباً (B**ü**ch**er**, H**äu**s**er**)\nتنتهي بـ **-er / -el / -en**؟ ⇐ **لا لاحقة** أصلاً، وربّما Umlaut وحده (**Ä**pfel, Zimmer)\nتبدو أجنبية؟ ⇐ **-s** (Auto**s**, Handy**s**)\n\nواحفظ هذه العبارة: **«الجمع كلّه die»** — مهما كان المفرد der أو das أو die.",
      commonMistakes: [
        {"wrong": "Die Bücher ist teuer.", "right": "Die Bücher sind teuer.", "whyAr": "الفعل يتبع الجمع جمعاً. والخطأ مصدره العربية التي تعامل جمع غير العاقل معاملة المفردة المؤنّثة («الكتب جميلة»). الألمانية لا تعرف هذه القاعدة إطلاقاً."},
        {"wrong": "zwei Apfel", "right": "zwei Äpfel", "whyAr": "بعد كل عدد أكبر من واحد يأتي الجمع. ولا تنقل التمييز العربي («خمسةَ عشرَ كتاباً» بالمفرد) إلى الألمانية."},
        {"wrong": "die Apfels", "right": "die Äpfel", "whyAr": "لاحقة -s للدخيل الأجنبي فقط (Autos, Handys). وApfel كلمة جرمانية أصيلة من نمط Umlaut الصفري."},
        {"wrong": "drei Kilos Tomaten", "right": "drei Kilo Tomaten", "whyAr": "وحدات الكيل والوزن والعملة تبقى مفردة بعد العدد: Kilo, Gramm, Euro, Stück. وهذا يوافق العربية ويخالف الإنكليزية."},
        {"wrong": "der Bücher", "right": "die Bücher", "whyAr": "أداة الجمع die دائماً مهما كان جنس المفرد. das Buch محايد لكن جمعه die Bücher."},
      ],
      relatedRuleComparison: {
        "title": "الجمع في حالة الـDativ: نون زائدة تُنسى",
        "content": "ستلتقي لاحقاً بقاعدة تُنسى كثيراً: الجمع في حالة الـDativ يضيف **-n** إن لم يكن منتهياً بها أصلاً ⇒ die Bücher لكن **mit den Büchern**، die Kinder لكن **mit den Kindern**. أمّا ما انتهى بـ -n أو -s فلا يزيد: mit den Frauen · mit den Autos. لا يلزمك هذا اليوم، لكن دوّنه فسيعود في A2."
      },
    },
    {
      id: "t3",
      titleAr: "قول الأسعار والمقادير — Was kostet das? و ein Kilo Äpfel",
      titleDe: "Preise und Mengenangaben: Was kostet ein Kilo?",
      explanationAr:
        "تعرف الآن الأرقام وتعرف الجمع، ويبقي أن تركّبهما في الموقف الذي من أجله تعلّمتهما: أن تسأل عن ثمنٍ وتطلب كمّيةً وتدفع. وهذا التركيب له ثلاث مفاصل دقيقة يخطئ فيها المتعلّم العربي تحديداً.\n\n**أوّلاً: صيغة السؤال تتبع عدد السلعة لا عدد النقود.** الفعل kosten يُصرّف مع الشيء المُشترى لا مع السعر:\n• مفرد ⇒ Was **kostet** das Brot? — Es kostet zwei Euro.\n• جمع ⇒ Was **kosten** die Äpfel? — Sie kosten drei Euro.\nومثله Wie viel kostet ...? (أطول قليلاً وأكثر رسميّة)، وWas macht das (zusammen)? للمجموع في نهاية الشراء.\n\n**ثانياً: السعر يُقرأ بطريقةٍ واحدة.** يُكتب السعر بفاصلة لا بنقطة: 3,50 €، والعلامة € تأتي بعد الرقم. وتُقرأ: **drei Euro fünfzig**، أو مختصرةً في السوق: drei fünfzig. والأدقّ رسميّاً: drei Euro fünfzig Cent. أمّا ما دون اليورو فبالسنت وحده: 0,99 € ⇐ neunundneunzig Cent. ولا يُقال أبداً „drei Komma fünf Euro“ — الـKomma تُقرأ في الرياضيات لا في المتجر.\n\n**ثالثاً: المقدار يلتصق بالسلعة بلا حرف جرّ ولا أداة.** البنية: **عدد + وحدة + اسم السلعة** مرصوفةً مباشرةً: ein Kilo Äpfel · zweihundert Gramm Käse · eine Flasche Wasser · drei Stück Kuchen. والوحدات المحايدة والمذكّرة (Kilo, Gramm, Liter, Stück, Euro, Cent) **تبقى مفردة الصورة بعد العدد**: zwei Kilo لا zwei Kilos. أمّا الوحدات المؤنّثة فتُجمَع عاديّاً: zwei **Flaschen** Wasser · drei **Tassen** Kaffee — وهذا الفرق ليس اعتباطيّاً بل بقيّة قاعدة قديمة في الجرمانية تخصّ أوزان القياس والنقد.\n\n**ورابعاً — لغة الطلب والدفع.** ثلاث صيغ مرتّبة من الأكثر تأدّباً إلى الأحيد: Ich hätte gern ... > Ich möchte ... > Ich nehme ... وكلّها تنصب مفعولها (Akkusativ)، فيظهر الـden/einen مع المذكّر وحده: Ich nehme **den** Käse. وجواب البائع الثابت: Sonst noch etwas? ⇒ Nein, danke, das ist alles. ثمّ Das macht 13,50 €. — Bar oder mit Karte?",
      whyAr:
        "لأنّ هذا الموقف هو **أوّل ما تمارسه فعلاً في ألمانيا**، قبل أن تفتح حساباً بنكيّاً أو تذهب إلى طبيب. ولأنّ امتحان Goethe A1 يخصّص له مكانين صريحين: Sprechen Teil 2 (طرح سؤال وإجابته عن موضوع مثل Einkaufen) وTeil 3 (صياغة طلب مهذّب). وما يُقيّم هنا ليس ثراء المفردات بل **دقّة القوالب**: هل صرّفت kosten مع الجمع؟ هل قرأت السعر كما يقرأه الألماني؟ هل حذفت حرف الجرّ بين المقدار والسلعة؟ وهناك سبب أعمق: هذه الكتلة هي أوّل موضعٍ ترى فيه الأرقام والجمع والنصب **تعمل معاً في جملة واحدة**، وهذا الدمج هو ما ينقل القاعدة من الذاكرة إلى اللسان. وأخيراً: خطأ المقدار (zwei Kilos von Äpfel) لا يمنع الفهم، لكنّه يُسمع فوراً أجنبيّاً، لأنّه يقع في أكثر جملةٍ يقولها الإنسان أسبوعيّاً.",
      table: {
        title: "من السؤال إلى الدفع — قوالب جاهزة",
        columns: ["المرحلة", "القالب الألماني", "ملاحظة"],
        rows: [
          { label: "السؤال (مفرد)", cells: ["Was kostet der Käse?", "kostet مع المفرد"] },
          { label: "السؤال (جمع)", cells: ["Was kosten die Äpfel?", "kosten مع الجمع"] },
          { label: "المقدار", cells: ["ein Kilo Äpfel, bitte", "بلا von وبلا أداة"] },
          { label: "الطلب المهذّب", cells: ["Ich hätte gern 200 Gramm Käse.", "ألطف من möchte"] },
          { label: "الأخذ", cells: ["Ich nehme den Käse.", "نصب: den للمذكّر"] },
          { label: "الحساب", cells: ["Das macht 13,50 €.", "drei… zehn Euro fünfzig"] },
          { label: "الدفع", cells: ["Bar oder mit Karte?", "جوابه: Bar, bitte."] },
        ],
      },
      examples: [
        { de: "Was kostet ein Kilo Tomaten? — Zwei Euro neunzig.", ar: "بكم كيلو الطماطم؟ — يوروان وتسعون. (kostet مع ein Kilo وهو مفرد)" },
        { de: "Was kosten die Bananen? — Sie kosten 1,90 €.", ar: "بكم الموز؟ — بيورو وتسعين. (جمع ⇒ kosten وضميره sie)" },
        { de: "Ich hätte gern zweihundert Gramm Käse.", ar: "أودّ مئتي غرام جبن. (Gramm تبقى مفردة الصورة)" },
        { de: "Zwei Flaschen Wasser und drei Brötchen, bitte.", ar: "قارورتا ماء وثلاث خبزات من فضلك. (Flasche مؤنّثة ⇒ تُجمَع)" },
        { de: "Ich nehme den Kuchen und das Brot.", ar: "سآخذ الكعكة والخبز. (nehmen تنصب: den مذكّر، das محايد بلا تغيير)" },
        { de: "Das macht zusammen sieben Euro fünfzig. — Bar, bitte.", ar: "المجموع سبعة يورو ونصف. — نقداً من فضلك." },
        { de: "Der Kaffee kostet 0,99 € — also neunundneunzig Cent.", ar: "القهوة بتسعة وتسعين سنتاً. (دون اليورو ⇒ Cent وحده)" },
      ],
      comparisonWithArabic:
        "أربعة فروق تُنتج أربعة أخطاء متوقّعة عند العربي:\n\n**١. «من» التبعيضيّة لا مقابل لها.** نقول بالعربية «كيلو **من** التفّاح»، فيندفع المتعلّم إلى ein Kilo **von** Äpfeln. والألمانية ترصف الاسمين مجاورين بلا رابط: ein Kilo Äpfel. وهذا يُسمّى Maßangabe — إضافة قياسية مباشرة.\n\n**٢. تمييز العدد معكوس.** العربية تجمع الوحدة (ثلاثة **كيلوغرامات**) وتفرد المميّز، والألمانية تفعل العكس تماماً: تُبقي الوحدة مفردة (drei **Kilo**) وتجمع السلعة (drei Kilo **Äpfel**). فالمتعلّم ينقل عادته فيقول zwei Kilos.\n\n**٣. جملة السعر في العربية بلا فعل.** «بكم الخبز؟» جملة اسمية تامّة، والألمانية توجب فعلاً مصرّفاً: Was **kostet** das Brot? ولاحظ أنّ الفعل يتبع السلعة لا السعر — وهذا موضع الخطأ الثالث: Was kostet die Äpfel?\n\n**٤. الفاصلة والنقطة متبادلتان.** الألمانية تكتب الكسر بفاصلة (3,50 €) والألوف بنقطة (1.000 €) — عكس ما اعتاده من درَس بالإنجليزيّة. وفوق ذلك لا تُلفَظ الفاصلة أبداً في الأسعار: تُقرأ الوحدتان متتاليتين (drei Euro fünfzig)، تماماً كما نقول بالدارجة «ثلاثة ونصّ».",
      eselsbruecke:
        "**«الوحدة تثبُت والسلعة تجمَع»** — zwei Kilo Äpfel: الـKilo واقفة والـÄpfel تتكاثر. وللسعر: **«يورو ثمّ الباقي، ولا فاصلة في السوق»** — 3,50 € = drei Euro fünfzig. وللفعل: **«اسأل عن السلعة لا عن المال»** — جمعتِ السلعة؟ فاجمعِ الفعل: Was kosten die Äpfel?",
      commonMistakes: [
        { wrong: "Was kostet die Äpfel?", right: "Was kosten die Äpfel?", whyAr: "الفعل في الألمانية يطابق فاعله، وفاعل kosten هنا هو «die Äpfel» وهو جمع، لا السعر ولا المتكلّم. ومصدر الخطأ أنّ المتعلّم يحفظ «Was kostet das?» كوحدة جامدة ثمّ يبدّل المفعول وينسى تعديل الفعل." },
        { wrong: "Ich möchte ein Kilo von Äpfeln.", right: "Ich möchte ein Kilo Äpfel.", whyAr: "نقلٌ حرفيّ لـ«من» التبعيضيّة العربية. الألمانية ترصف المقدار والسلعة متجاورين بلا رابط ولا أداة، وإقحام von يحمل معنى آخر (من أين جاءت) ويجرّ الاسم فيزيد الخطأ ظهوراً." },
        { wrong: "Ich nehme zwei Kilos Tomaten.", right: "Ich nehme zwei Kilo Tomaten.", whyAr: "وحدات القياس المحايدة والمذكّرة (Kilo, Gramm, Liter, Stück, Euro, Cent) تبقى مفردة الصورة بعد العدد. أمّا المؤنّثة فتُجمَع: zwei Flaschen · drei Tassen. فالقاعدة تدور على الجنس لا على المعنى." },
        { wrong: "Das kostet drei Komma fünfzig Euro.", right: "Das kostet drei Euro fünfzig.", whyAr: "الـKomma تُقرأ في الرياضيات والقياسات فحسب (3,5 kg = drei Komma fünf Kilo)، أمّا الأسعار فتُقرأ وحدتين متتاليتين: اليورو ثمّ السنت، وكلمة Cent تُحذف عادةً." },
        { wrong: "Ich will einen Kaffee.", right: "Ich hätte gern einen Kaffee.", whyAr: "الجملة سليمة نحواً وفظّة اجتماعيّاً: wollen يعبّر عن إرادة متشدّدة ويُستعمل في الأمر لا في الطلب. وسلّم التأدّب: hätte gern > möchte > nehme > will." },
      ],
      relatedRuleComparison: {
        title: "Ich hätte gern أم Ich möchte أم Ich nehme؟",
        content:
          "الثلاث صحيحة ولكلّ واحدة موضعها. **Ich hätte gern** أصلها صيغة شرطية (Konjunktiv II من haben) وتُدرّس كاملةً في B1، لكنّها تُحفَظ في A1 قالباً جاهزاً لأنّها **ألطف صيغة طلب في المتجر**؛ ومعناها الحرفي «لوددتُ أن يكون لي»، وهذا الابتعاد عن الطلب المباشر هو عينه مصدر التأدّب — كما نقول بالعربية «لو تكرمت» بدل »أعطني«. **Ich möchte** مهذّبة أيضاً وأخفّ رسميّة، وهي الأشيع في المطاعم. **Ich nehme** لا تُقال إلّا بعد أن ترى البضاعة أو تُعرَض عليك خيارات، فهي **حسم اختيار** لا افتتاح طلب: لا تدخل المخبز وتقول مباشرةً Ich nehme… قبل أن تسأل. والثلاث تنصب مفعولها، فالفرق بينها تداوليّ (pragmatisch) لا نحويّ.",
      },
    },
    {
      id: "t4",
      titleAr: "أرقام الهاتف والعناوين والتهجئة على الهاتف",
      titleDe: "Telefonnummern, Adressen und Buchstabieren am Telefon",
      explanationAr:
        "أتقنتَ الأرقام والأسعار. وبقي الموضع الذي تسقط فيه الأرقام أكثر من السوق: **الهاتف والعنوان**. وهما بابان إجرائيّان لا تنجو منهما: تسجيلٌ في مدرسة لغة، موعدٌ عند طبيب، عقد إيجار، بطاقة إقامة. وفي امتحان Goethe A1 يظهران في **Hören Teil 1** (رسالةٌ صوتية تُملي رقماً) وفي **Schreiben Teil 1** (استمارةٌ تُملأ).\n\n**أوّلاً — رقم الهاتف يُقرأ رقماً رقماً، لا عدداً واحداً.**\nالرقم 0176 24 83 591 لا يُقال أبداً „مئةٌ وستةٌ وسبعون“، بل: **null - eins - sieben - sechs …** وهذا يريحك: لن تحتاج البنية المعكوسة (einundzwanzig) هنا إطلاقاً، تسعة أرقامٍ فقط من null إلى neun تكفيك.\n· السؤال: **Wie ist deine Telefonnummer?** (لصديق) · **Wie ist Ihre Telefonnummer?** (رسمي)\n· الجواب: **Meine Nummer ist null eins sieben sechs …**\n· وإن أسرع المتكلّم: **Können Sie das bitte wiederholen?** أو **Langsamer, bitte!**\nوتسمع أحياناً القراءة مزدوجةً (**vierundzwanzig** لـ24)، وهي شائعة بين الألمان لكنّها ليست مطلوبةً منك؛ اِفهمها ولا تُنتجها.\n\n**ثانياً — العنوان الألمانيّ مقلوبٌ عن عادتك في موضعين.**\nالصورة القياسية أربعة أسطر:\n| Frau Leila Ben Amor | ← الاسم |\n| Goethestraße 12 | ← الشارع ثمّ الرقم |\n| 10115 Berlin | ← الرمز البريديّ ثمّ المدينة |\n| Deutschland | ← البلد |\nالموضع الأوّل: **رقم البيت يأتي بعد اسم الشارع** لا قبله. الموضع الثاني: **الرمز البريديّ (Postleitzahl) قبل اسم المدينة**، وهو خمسة أرقام تُقرأ رقماً رقماً كذلك: **eins null eins eins fünf**.\nولاحظ أنّ **Straße تلتصق بالاسم** كلمةً واحدة: Goethestraße لا Goethe Straße. وتُختصر كتابةً **Goethestr. 12**.\n\n**ثالثاً — التهجئة: الحرف وحده لا يكفي على الهاتف.**\nحرفا **m** و**n** يتشابهان في سمّاعةٍ رديئة، وكذلك **b/p** و**d/t**. فاعتمد الألمان جدولاً معياريّاً (DIN 5009) يُسنِد إلى كلّ حرفٍ مدينة: **B wie Berlin** أي „الباء التي في برلين“. والصيغة: **B wie Berlin, E wie Essen, N wie Nürnberg**.\nوتحتاج ثلاث عباراتٍ إضافية: **Doppel-n** (نونان) · **groß / klein** (كبير/صغير) · **Bindestrich** (شَرْطة). ولحروف العلّة المعلَّمة قُل **Umlaut**: ä = **Umlaut Aachen**، ولـß قُل **Eszett** ببساطة.",
      whyAr:
        "لماذا يُملي الألمان الأرقام رقماً رقماً بينما ينطقونها في السوق عدداً كاملاً؟ لأنّ البنية المعكوسة نفسها هي الخطر: من يقول einundzwanzig يَنطق الآحاد قبل العشرات، فإذا كتب السامع ما يسمعه بترتيب سماعه خرج 12 بدل 21. والقراءة المفردة تُلغي المشكلة من أصلها لأنّها تُلغي البنية.\n\nولماذا يأتي رقم البيت بعد الشارع والرمز قبل المدينة؟ لأنّ العنوان الألمانيّ مرتَّبٌ بمنطق **البحث** لا بمنطق النطق: ساعي البريد يجد الشارع أوّلاً ثمّ يمشي فيه بحثاً عن الرقم، وآلة الفرز تقرأ الرمز البريديّ قبل أن يعنيها اسم المدينة. فالترتيب خدمةٌ لمن يقرأ العنوان لا لمن يكتبه.\n\nولماذا مدنٌ في جدول التهجئة لا أسماء أشخاص؟ الجدول القديم كان بأسماء (A wie Anton)، وحُذفت منه الأسماء اليهودية في العهد النازيّ. وفي 2022 أصدر معهد التقييس الألمانيّ جدولاً جديداً بأسماء المدن قطعاً للجذر. والجدولان مستعملان اليوم، فافهم الاثنين وأنتج الجديد.",
      table: {
        title: "جدول التهجئة على الهاتف — مقتطف عمليّ",
        columns: ["الحرف", "DIN 5009 الجديد (مدن)", "القديم (أسماء) — ما زلت تسمعه"],
        rows: [
          { label: "A", cells: ["A wie Aachen", "A wie Anton"] },
          { label: "B", cells: ["B wie Berlin", "B wie Berta"] },
          { label: "D", cells: ["D wie Düsseldorf", "D wie Dora"] },
          { label: "E", cells: ["E wie Essen", "E wie Emil"] },
          { label: "K", cells: ["K wie Köln", "K wie Kaufmann"] },
          { label: "M", cells: ["M wie München", "M wie Martha"] },
          { label: "N", cells: ["N wie Nürnberg", "N wie Nordpol"] },
          { label: "T", cells: ["T wie Tübingen", "T wie Theodor"] },
          { label: "ä / ö / ü", cells: ["Umlaut Aachen / Offenbach / Unna", "Ärger / Ökonom / Übermut"] },
          { label: "ß", cells: ["Eszett", "Eszett"] },
        ],
      },
      examples: [
        { de: "Wie ist Ihre Telefonnummer? – Null eins sieben eins, zwei drei vier, fünf sechs sieben acht.", ar: "ما رقم هاتفك؟ — صفر واحد سبعة واحد، اثنان ثلاثة أربعة، خمسة ستة سبعة ثمانية." },
        { de: "Meine Adresse ist Goethestraße 12, 10115 Berlin.", ar: "عنواني: شارع غوته 12، الرمز 10115 برلين. (الرقم بعد الشارع، والرمز قبل المدينة)" },
        { de: "Wie schreibt man das? – Ben Amor: B wie Berlin, E wie Essen, N wie Nürnberg.", ar: "كيف يُكتب هذا؟ — بن عمر: الباء التي في برلين، الهاء التي في إيسن، النون التي في نورنبرغ." },
        { de: "Wie ist die Postleitzahl? – Eins null eins eins fünf.", ar: "ما الرمز البريديّ؟ — واحد صفر واحد واحد خمسة. (خمسة أرقام مفردة)" },
        { de: "Ich wohne in der Bahnhofstraße.", ar: "أسكن في شارع المحطة. (in der + مؤنّث لأنّ die Straße مؤنّثة)" },
        { de: "Können Sie das bitte buchstabieren? – Ja, gern: Mueller, M-U-E-L-L-E-R.", ar: "أيمكنك التهجئة من فضلك؟ — نعم بكلّ سرور: مولر، ميم-يو-إي-لام-لام-إي-راء." },
        { de: "Entschuldigung, langsamer bitte! Können Sie die Nummer wiederholen?", ar: "عذراً، أبطأ من فضلك! أيمكنك إعادة الرقم؟ (أنقذ نفسك بهذه الجملة في Hören)" },
        { de: "Schmitt mit Doppel-t, nicht Schmidt mit d.", ar: "شميت بتاءين، لا شميد بدال. (Doppel- تسبق الحرف المضاعف)" },
      ],
      comparisonWithArabic:
        "العربية تكتب العنوان من الجزء إلى الكلّ أيضاً، لكنّها تضع **رقم البيت أوّلاً** في العادة الفرنسية المتوارثة في تونس والمغرب: „12 نهج غوته“. والألمانية تعكس: **Goethestraße 12**. وهذا ليس ذوقاً بل معيار بريد، والاستمارة التي تُملأ في الامتحان تُقيَّم على هذا الترتيب.\n\nوفي أرقام الهاتف تقرأ العربية غالباً بالثنائيات: „اثنان وعشرون، أربعة وثلاثون“. والألمانية الإجرائية تُفرِد كلّ رقم. والسبب في الألمانية أوجه منه في العربية لأنّ العربية تنطق العشرات والآحاد بالترتيب المكتوب نفسه في هذه الصيغة، بينما الألمانية تعكسه — ففَقْدُ رقمٍ واحد يقلب العدد.\n\nوأمّا التهجئة فالعربيّ يقولها بالكلمات كذلك („الباء بواحدة من تحت“)، لكنّه يصف **شكل** الحرف؛ والألمانيّ يصف **كلمةً تبدأ به**. فالمنطقان مختلفان: وصفٌ بصريّ عندنا، ومرساةٌ صوتية عندهم.",
      eselsbruecke:
        "العنوان الألمانيّ يمشي كساعي البريد: يجد الشارع ثمّ يعدّ الأبواب (Goethestraße 12)، ويقرأ الرمز قبل المدينة لأنّ الآلة تفرز بالرمز. والهاتف يُملى رقماً رقماً لأنّ العكس يقلب العدد.",
      commonMistakes: [
        {
          wrong: "Meine Adresse ist 12 Goethestraße.",
          right: "Meine Adresse ist Goethestraße 12.",
          whyAr:
            "نقلٌ للعادة الفرنسية السائدة في تونس (12 نهج غوته). والألمانية تضع الرقم بعد الشارع دائماً، وهذا يُقيَّم في استمارة Schreiben Teil 1 نقطةً مستقلّة.",
        },
        {
          wrong: "Ich wohne in Berlin 10115.",
          right: "Ich wohne in 10115 Berlin.",
          whyAr:
            "الرمز البريديّ يسبق المدينة ولا يتبعها. والترتيب مقصود: آلة الفرز تقرأ الرمز أوّلاً، فوضعُه بعد الاسم يُعطّل الغرض منه ويُقرأ خطأً إملائياً لا اختلافَ ذوق.",
        },
        {
          wrong: "Meine Nummer ist einundzwanzig, dreiundvierzig.",
          right: "Meine Nummer ist zwei eins, vier drei.",
          whyAr:
            "البنية المعكوسة هي الفخّ نفسه: من يسمع einundzwanzig ويكتب ما يسمعه بترتيبه يُخرج 12 بدل 21. والإملاء المفرد يُلغي البنية فيُلغي الخطأ.",
        },
        {
          wrong: "Ich wohne in die Goethestraße.",
          right: "Ich wohne in der Goethestraße.",
          whyAr:
            "wohnen يجيب عن wo? فيلزمه الجرّ (Dativ)، وdie Straße مؤنّثة فتصير der. وهذا الخطأ ذاته درسته في السكن: in dem Zimmer لا in das Zimmer عند الإقامة.",
        },
        {
          wrong: "Wie buchstabiert man? – M, U, E, L, L, E, R … oder Mueller?",
          right: "Müller schreibt man mit Umlaut U: U-Umlaut, L, L, E, R.",
          whyAr:
            "ü تُكتب ue فقط حين يتعذّر رسم النقطتين (بريد إلكترونيّ، لوحة أجنبية). وفي الاسم الرسميّ تبقى Müller، فخلطُ الصورتين يُنتج اسمين مختلفين في السجلّ الإداريّ.",
        },
      ],
      relatedRuleComparison: {
        title: "الرقم في السوق مقابل الرقم على الهاتف",
        content:
          "قابِل الاستعمالين في هذا الدرس نفسه: في السوق قلتَ **Das kostet dreiundzwanzig Euro** — عدداً كاملاً ببنيته المعكوسة، لأنّ المقصود **كمّية**. وعلى الهاتف تقول **zwei drei** — رقمين مفردين، لأنّ المقصود **سلسلة رموز** لا كمّية. والفارق ليس لغوياً بل وظيفيّاً: 23 يورو مقدارٌ يُجمع ويُطرح، و23 في رقم هاتف ليس مقداراً بل خانتان.\n\nوالقاعدة العملية: **كلّ ما يُحسب يُقرأ عدداً، وكلّ ما يُملى يُقرأ رقماً رقماً**. فالسعر والعمر والكمّية أعداد؛ ورقم الهاتف والرمز البريديّ ورقم الحساب وسنة الميلاد المتقطّعة رموز. وسنةُ الميلاد نفسها تُقرأ عدداً (**neunzehnhundertneunzig** لـ1990) لأنّها تقع على خطّ زمنٍ يُقاس.",
      },
    },
  ],

  reading: {
    "id": "read-a1-07",
    "titleDe": "Samstagvormittag auf dem Wochenmarkt",
    "titleAr": "صباح السبت في سوق الأسبوع",
    "textType": "bericht",
    "paragraphs": [
      "Jeden Samstag um neun Uhr geht Leila auf den Wochenmarkt in Leipzig. Sie kommt aus Tunis und wohnt seit acht Monaten in Deutschland. Der Markt ist für sie mehr als nur Einkaufen: Hier hört sie Deutsch, hier spricht sie Deutsch, und hier lernt sie jede Woche neue Wörter.",
      "Zuerst geht sie zum Obststand. Die Äpfel kosten heute zwei Euro fünfzig das Kilo, die Bananen ein Euro neunzig. „Zwei Kilo Äpfel, bitte“, sagt Leila. Der Verkäufer wiegt die Äpfel und antwortet: „Fünf Euro. Sonst noch etwas?“ Leila nimmt noch vier Tomaten und drei Zwiebeln.",
      "Am Käsestand ist es komplizierter. Leila möchte nicht ein ganzes Stück, sondern nur ein bisschen. „Zweihundert Gramm, bitte“, sagt sie. Die Verkäuferin lächelt: „Zweihundert Gramm sind sehr wenig. Nehmen Sie dreihundert!“ Leila lacht und nimmt dreihundert Gramm für vier Euro zwanzig.",
      "Dann sieht sie die Bücher. Ein alter Mann verkauft gebrauchte Bücher für einen Euro das Stück. Leila kauft zwei Kinderbücher — die Sätze sind kurz und die Wörter sind einfach. „Für meine Tochter?“, fragt der Mann. „Nein“, sagt Leila, „für mich. Ich lerne Deutsch.“",
      "Zum Schluss rechnet Leila alles zusammen: fünf Euro für die Äpfel, zwei Euro dreißig für das Gemüse, vier Euro zwanzig für den Käse und zwei Euro für die Bücher. Das macht dreizehn Euro fünfzig. Sie hat zwanzig Euro dabei und bekommt sechs Euro fünfzig zurück.",
      "Auf dem Weg nach Hause denkt Leila: Im Kurs lernt sie die Zahlen langsam und deutlich. Auf dem Markt spricht niemand langsam. Aber genau deshalb kommt sie jeden Samstag wieder."
    ],
    "paragraphsAr": [
      "كلَّ سبتٍ في التاسعة تذهب ليلى إلى سوق الأسبوع في لايبتسيغ. هي من تونس وتسكن في ألمانيا منذ ثمانية أشهر. والسوق عندها أكثر من مجرّد تسوّق: هنا تسمع الألمانية، وهنا تتكلّمها، وهنا تتعلّم كلَّ أسبوع كلماتٍ جديدة.",
      "تذهب أوّلاً إلى بسطة الفواكه. التفّاح اليوم بيوروين ونصف للكيلو، والموز بيورو وتسعين. تقول ليلى: «كيلوان من التفّاح من فضلك». يزن البائع التفّاح ويجيب: «خمسة يورو. شيء آخر؟» فتأخذ ليلى أربع طماطم وثلاث بصلات.",
      "وعند بسطة الجبن يصير الأمر أعقد. ليلى لا تريد قطعة كاملة بل قليلاً فقط. تقول: «مئتا غرام من فضلك». فتبتسم البائعة: «مئتا غرام قليلة جداً. خذي ثلاثمئة!» تضحك ليلى وتأخذ ثلاثمئة غرام بأربعة يورو وعشرين.",
      "ثم ترى الكتب. رجلٌ مسنّ يبيع كتباً مستعملة بيورو للقطعة. تشتري ليلى كتابَي أطفال — الجمل قصيرة والكلمات سهلة. يسألها الرجل: «لابنتك؟» فتقول: «لا، لي أنا. أنا أتعلّم الألمانية.»",
      "وفي الختام تحسب ليلى كلَّ شيء: خمسة يورو للتفّاح، ويوروان وثلاثون للخضار، وأربعة يورو وعشرون للجبن، ويوروان للكتب. المجموع ثلاثة عشر يورو ونصف. معها عشرون يورو فتستردّ ستّة يورو ونصفاً.",
      "وفي طريق العودة تفكّر ليلى: في الدورة تتعلّم الأرقام ببطء ووضوح. أمّا في السوق فلا أحد يتكلّم ببطء. ولهذا بالضبط تعود كلَّ سبت."
    ],
    "glossary": [
      {
        "de": "der Wochenmarkt, ¨-e",
        "ar": "سوق أسبوعية",
        "noteAr": "تُقام يوماً محدّداً في ساحة المدينة؛ جمعها بـ ¨-e مع إمالة: die Wochenmärkte"
      },
      {
        "de": "der Stand, ¨-e",
        "ar": "بسطة، كشك بيع",
        "noteAr": "مركّباتها كثيرة: der Obststand، der Käsestand، der Bücherstand"
      },
      {
        "de": "wiegen",
        "ar": "يزن",
        "noteAr": "فعل قويّ: wiegt – wog – hat gewogen"
      },
      {
        "de": "Sonst noch etwas?",
        "ar": "«شيء آخر؟»",
        "noteAr": "عبارة البائع الثابتة في نهاية الطلب؛ جوابها: Nein, danke, das ist alles."
      },
      {
        "de": "ein bisschen",
        "ar": "قليلاً، شيئاً يسيراً",
        "noteAr": "لا تتغيّر أبداً، وتُكتب بـ ss لا بـ ß"
      },
      {
        "de": "das Stück, -e",
        "ar": "قطعة",
        "noteAr": "تبقى مفردة الصورة بعد العدد: zwei Stück لا zwei Stücke"
      },
      {
        "de": "gebraucht",
        "ar": "مستعمَل",
        "noteAr": "اسم مفعول من brauchen يُستعمل صفةً"
      },
      {
        "de": "rechnet zusammen (zusammenrechnen)",
        "ar": "يجمع الحساب",
        "noteAr": "فعل منفصل السابقة: sie rechnet alles zusammen"
      },
      {
        "de": "Das macht ...",
        "ar": "«المجموع ...»",
        "noteAr": "أشيع من Der Preis ist ... في لغة البائع"
      },
      {
        "de": "bekommt zurück (zurückbekommen)",
        "ar": "يستردّ (الباقي)",
        "noteAr": "فعل منفصل: sie bekommt sechs Euro zurück"
      },
      {
        "de": "deutlich",
        "ar": "واضح، بيّن",
        "noteAr": "تقابل undeutlich وتُستعمل كثيراً مع sprechen"
      },
      {
        "de": "genau deshalb",
        "ar": "لهذا بالضبط",
        "noteAr": "genau يُقوّي deshalb؛ وما بعده يأتي بالقلب: ... kommt sie wieder"
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "الفكرة العامّة للنصّ:",
        "questionDe": "Worum geht es in dem Text hauptsächlich?",
        "questionAr": "ما الموضوع الرئيسي للنصّ؟",
        "options": [
          "Leila kauft auf dem Markt ein und übt dabei ihr Deutsch.",
          "Leila arbeitet als Verkäuferin auf dem Wochenmarkt.",
          "Leila sucht ein Buch für ihre Tochter.",
          "Leila vergleicht die Preise in Tunis und in Leipzig."
        ],
        "correctIndex": 0,
        "explanation": "الفقرة الأولى تقول صراحةً إنّ السوق عندها «أكثر من مجرّد تسوّق»: تسمع الألمانية وتتكلّمها وتتعلّم كلمات، والفقرة الأخيرة تؤكّد أنّها تعود لهذا السبب. أمّا الكتاب فتفصيل في فقرة واحدة، ولم يُذكر أنّها تعمل بائعة ولا أنّها قارنت الأسعار.",
        "optionExplanations": [
          undefined,
          "لم يُذكر أبداً أنّها تعمل؛ هي زبونة تشتري.",
          "الكتاب تفصيل في فقرة واحدة، وقد نفت صراحةً أنّه لابنتها.",
          "أسعار تونس لم تُذكر في النصّ قطّ."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "تفصيل — السعر:",
        "questionDe": "Wie viel bezahlt Leila für den Käse?",
        "questionAr": "كم دفعت ليلى ثمناً للجبن؟",
        "options": [
          "4,20 €",
          "2,50 €",
          "1,90 €",
          "13,50 €"
        ],
        "correctIndex": 0,
        "explanation": "في الفقرة الثالثة: أخذت ثلاثمئة غرام بأربعة يورو وعشرين (vier Euro zwanzig). والمبالغ الأخرى مذكورة في النصّ لكن لأشياء أخرى: 2,50 للتفّاح كيلواً، و1,90 للموز، و13,50 هو المجموع الكلّي.",
        "optionExplanations": [
          undefined,
          "2,50 € هو سعر كيلو التفّاح.",
          "1,90 € هو سعر كيلو الموز.",
          "13,50 € هو المجموع الكلّي لا ثمن الجبن."
        ],
        "errorType": "vocabulary",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "تفصيل — الباقي:",
        "questionDe": "Wie viel Geld bekommt Leila zurück?",
        "questionAr": "كم استردّت ليلى من النقود؟",
        "options": [
          "6,50 €",
          "20,00 €",
          "13,50 €",
          "5,00 €"
        ],
        "correctIndex": 0,
        "explanation": "الفقرة الخامسة: معها عشرون يورو والمجموع ثلاثة عشر ونصف ⇒ 20,00 − 13,50 = 6,50، والنصّ يذكر الناتج صراحةً: bekommt sechs Euro fünfzig zurück.",
        "optionExplanations": [
          undefined,
          "20,00 € هو ما دفعته لا ما استردّته.",
          "13,50 € هو المجموع.",
          "5,00 € ثمن التفّاح وحده."
        ],
        "errorType": "vocabulary",
        "paragraph": 2
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "استنتاج:",
        "questionDe": "Warum kauft Leila Kinderbücher?",
        "questionAr": "لماذا اشترت ليلى كتب أطفال؟",
        "options": [
          "Weil die Sprache darin einfach ist und sie Deutsch lernt.",
          "Weil ihre Tochter gern liest.",
          "Weil sie nur einen Euro kosten.",
          "Weil der alte Mann sie ihr empfohlen hat."
        ],
        "correctIndex": 0,
        "explanation": "استنتاج من معطيَين: النصّ يقول إنّ «الجمل قصيرة والكلمات سهلة»، ثم تُصرّح ليلى «لا، لي أنا. أنا أتعلّم الألمانية». والرخص صحيح لكنّه ليس السبب المذكور، والابنة نفتها ليلى صراحةً.",
        "optionExplanations": [
          undefined,
          "الابنة احتمال طرحه البائع ورفضته ليلى صراحةً.",
          "الثمن صحيح لكنّ النصّ يربط الشراء بسهولة اللغة لا بالرخص.",
          "الرجل سأل فقط، ولم ينصح بشيء."
        ],
        "errorType": "vocabulary",
        "paragraph": 3
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "ملاحظة لغويّة:",
        "questionDe": "Warum heißt es „Zweihundert Gramm sind sehr wenig“ und nicht „ist“?",
        "questionAr": "لماذا جاء الفعل sind لا ist في هذه الجملة؟",
        "options": [
          "Weil „zweihundert Gramm“ eine Mengenangabe im Plural ist.",
          "Weil „Gramm“ immer feminin ist.",
          "Weil die Verkäuferin höflich sein möchte.",
          "Weil nach Zahlen immer „sind“ kommt."
        ],
        "correctIndex": 0,
        "explanation": "الفعل يتبع الفاعل، والفاعل هنا كمّية بالجمع. ولاحظ الدقّة: كلمة Gramm نفسها تبقى مفردة الصورة بعد العدد (لا Gramms)، لكنّ المعنى جمع فيأتي الفعل جمعاً — وهذا التمييز بين صورة الكلمة وعددها المنطقي يخطئ فيه العربي كثيراً.",
        "optionExplanations": [
          undefined,
          "Gramm محايد (das Gramm) لا مؤنّث، والجنس لا علاقة له بالفعل هنا.",
          "التأدّب لا يغيّر تصريف الفعل في الألمانية.",
          "خطأ: ein Euro ist genug — العدد 1 يأخذ المفرد."
        ],
        "errorType": "grammar",
        "paragraph": 2
      }
    ],
    "redemittel": [
      {
        "de": "Was kostet ...? / Wie viel kostet ...?",
        "ar": "بكم ...؟"
      },
      {
        "de": "Zwei Kilo ..., bitte.",
        "ar": "كيلوان من ... من فضلك."
      },
      {
        "de": "Sonst noch etwas? — Nein, danke, das ist alles.",
        "ar": "شيء آخر؟ — لا شكراً، هذا كلّ شيء."
      },
      {
        "de": "Das macht zusammen ... Euro.",
        "ar": "المجموع ... يورو."
      },
      {
        "de": "Ich hätte gern ...",
        "ar": "أودّ ... — أرقى من ich möchte"
      },
      {
        "de": "Haben Sie es passend?",
        "ar": "«هل معك المبلغ بالضبط؟» — سؤال البائع المعتاد"
      }
    ],
    "discussionAr": "هل توجد في مدينتك سوق أسبوعية كسوق ليلى؟ صف ما يُباع فيها وبأيّ الأسعار — واذكر ثلاثة أرقام على الأقلّ بالألمانية. ثمّ فكّر: لماذا يتعلّم المرء في السوق ما لا يتعلّمه في الفصل؟"
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "في السوق",
        lines: [
          { speaker: "Verkäufer", de: "Guten Tag! Was möchten Sie?", ar: "نهارك سعيد! ماذا تريدون؟" },
          { speaker: "Mona", de: "Ich möchte bitte drei Äpfel und zwei Bananen.", ar: "أريد ثلاث تفاحات وموزتين من فضلك." },
          { speaker: "Verkäufer", de: "Bitte schön. Die Äpfel kosten drei Euro, die Bananen zwei Euro.", ar: "تفضلي. التفاحات بثلاثة يورو والموز بيوروين." },
          { speaker: "Mona", de: "Was kostet der Käse?", ar: "بكم الجبن؟" },
          { speaker: "Verkäufer", de: "Der Käse kostet fünf Euro das Kilo.", ar: "الجبن بخمسة يورو للكيلو." },
          { speaker: "Mona", de: "Okay, ich nehme alles. Das macht zehn Euro, richtig?", ar: "حسناً، سآخذ كل شيء. المجموع عشرة يورو، صحيح؟" },
          { speaker: "Verkäufer", de: "Ja, genau zehn Euro.", ar: "نعم، عشرة يورو بالضبط." },
          { speaker: "Mona", de: "Ich bezahle mit Karte, bitte.", ar: "سأدفع بالبطاقة من فضلك." },
          { speaker: "Verkäufer", de: "Kein Problem! Unterschreiben Sie hier.", ar: "لا مشكلة! وقّع هنا." },
        ],
      },
      {
        id: "l2",
        title: "أرقام في الحياة",
        lines: [
          { speaker: "Karim", de: "Meine Telefonnummer ist null drei eins, fünf zwei sieben.", ar: "رقم هاتفي: 031 527" },
          { speaker: "Anna", de: "Und wie alt bist du?", ar: "وكم عمرك؟" },
          { speaker: "Karim", de: "Ich bin einundzwanzig Jahre alt.", ar: "عمري واحد وعشرون عاماً." },
          { speaker: "Anna", de: "Ich bin dreißig. Hast du hundert Euro?", ar: "عمري ثلاثون. هل معك مئة يورو؟" },
          { speaker: "Karim", de: "Nein, ich habe nur zwanzig Euro.", ar: "لا، معي عشرون يورو فقط." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was kauft Mona?",
        questionAr: "ماذا تشتري منى؟",
        options: ["drei Äpfel und zwei Bananen", "zwei Äpfel und drei Bananen", "Käse und Brot", "fünf Bananen"],
        correctIndex: 0,
        explanation: "قالت: drei Äpfel und zwei Bananen — ثلاث تفاحات وموزتين.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet der Käse?",
        questionAr: "بكم الجبن؟",
        options: ["fünf Euro das Kilo", "drei Euro", "zehn Euro", "zwei Euro"],
        correctIndex: 0,
        explanation: "قال البائع: Der Käse kostet fünf Euro das Kilo.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie alt ist Karim?",
        questionAr: "كم عمر كريم؟",
        options: ["21", "30", "20", "27"],
        correctIndex: 0,
        explanation: "قال: Ich bin einundzwanzig Jahre alt — 21 عاماً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أرقام صعبة النطق للعربي",
    items: [
      { de: "drei", ar: "ثلاثة", note: "dr معاً: دراي (راء حلقية خفيفة)" },
      { de: "fünf", ar: "خمسة", note: "ü: فُنف (وليس فونف)" },
      { de: "sieben", ar: "سبعة", note: "ie = إي: زيبِن" },
      { de: "zwanzig", ar: "عشرون", note: "z = تس + ig في النهاية = إش: تسڤانتسش" },
      { de: "dreißig", ar: "ثلاثون", note: "ß + ig = إش: درايسش" },
      { de: "hundert", ar: "مئة", note: "h في البداية نَفَس: هوندَرت" },
    ],
    tip: "انتبه لنهاية -ig: في ألمانيا الشمالية تُنطق «إش»، وفي الجنوب «إغ» — كلاهما مقبول، اختر أحدهما والتزم به.",
    shadowing: [
      { de: "Das kostet dreißig Euro.", ar: "هذا يكلف ثلاثين يورو.", tip: "dreißig = درايسش" },
      { de: "Ich bin einundzwanzig Jahre alt.", ar: "عمري 21 عاماً.", tip: "einundzwanzig = آين-وونت-تسڤانتسش" },
      { de: "Zwei Bananen, bitte!", ar: "موزتان من فضلك!", tip: "zwei = تسڤاي" },
      { de: "Fünfhundert Euro?", ar: "خمسمائة يورو؟", tip: "fünf = فُنف (ü)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب سعرين بالجملة الكاملة:",
      prompt: "اكتب: «هذا يكلف خمسة عشر يورو» بالألمانية",
      acceptedAnswers: ["Das kostet fünfzehn Euro", "Das kostet fünfzehn Euro."],
      sampleAnswer: "Das kostet fünfzehn Euro.",
      explanation: "الصيغة: Das kostet + رقم + Euro. خمسة عشر = fünfzehn (وليس fünfzehn!).",
      errorType: "vocabulary",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالأرقام الألمانية كتابةً:",
      template: "Ich kaufe ___ (2) Äpfel und ___ (3) Bananen. Das kostet ___ (10) Euro.",
      blanks: [
        { correct: "zwei", options: ["zwei", "zwo", "drei", "ein"] },
        { correct: "drei", options: ["zwei", "drei", "vier", "fünf"] },
        { correct: "zehn", options: ["zehn", "elf", "neun", "zwölf"] },
      ],
      explanation: "2=zwei، 3=drei، 10=zehn. (zwo تستخدم في الهاتف فقط لتمييزها عن drei).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة (انتبه للجمع):",
      audioText: "Ich möchte bitte drei Äpfel.",
      explanation: "أريد ثلاث تفاحات من فضلك — drei + جمع Äpfel.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das kostet ___ Euro. (21)",
      questionAr: "هذا يكلف 21 يورو.",
      options: ["einundzwanzig", "einsundzwanzig", "zwanzigeins", "einzwanzig"],
      correctIndex: 0,
      explanation: "21 = einundzwanzig (واحد وعشرون) — eins تفقد s.",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر جمع الكلمة الصحيحة:",
      questionDe: "der Apfel → die ___",
      options: ["Äpfel", "Apfels", "Äpfels", "Apfel"],
      correctIndex: 0,
      explanation: "Apfel → Äpfel (Umlaut فقط، بدون إضافة).",
      errorType: "plural",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل المفرد بجمعه:",
      pairs: [
        { left: "der Tisch", right: "die Tische" },
        { left: "die Banane", right: "die Bananen" },
        { left: "das Buch", right: "die Bücher" },
        { left: "das Auto", right: "die Autos" },
      ],
      explanation: "أنماط الجمع: -e، -en، -er (مع Umlaut)، -s.",
      errorType: "plural",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["kostet", "Das", "fünf", "Euro", "."],
      correctSentence: "Das kostet fünf Euro.",
      explanation: "Das + kostet (V2) + fünf Euro.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich kaufe zwei Apfel.",
      wrongWord: "Apfel",
      correctWord: "Äpfel",
      options: ["Äpfel", "Apfels", "Apfelen", "Äpfelen"],
      explanation: "بعد zwei يأتي الجمع: zwei Äpfel.",
      errorType: "plural",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالرقم الصحيح كتابةً:",
      template: "Die Banane kostet ___ (2) Euro. Der Käse kostet ___ (5) Euro.",
      blanks: [
        { correct: "zwei", options: ["zwei", "zwo", "drei"] },
        { correct: "fünf", options: ["fünf", "vier", "sechs"] },
      ],
      explanation: "2 = zwei، 5 = fünf.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال عن السعر:",
      prompt: "Das Brot. → (اسأل: بكم الخبز؟)",
      acceptedAnswers: ["Was kostet das Brot", "Was kostet das Brot?"],
      sampleAnswer: "Was kostet das Brot?",
      explanation: "سؤال السعر: Was kostet + الاسم.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "billig / teuer",
      questionAr: "ما معنى الكلمتين؟",
      options: ["رخيص / غالٍ", "جديد / قديم", "كبير / صغير", "سريع / بطيء"],
      correctIndex: 0,
      explanation: "billig = رخيص، teuer = غالٍ. من أشهر كلمات التسوق.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Bücher ist neu.",
      wrongWord: "ist",
      correctWord: "sind",
      options: ["sind", "sein", "bist", "ist"],
      explanation: "الكتاب الجمع die Bücher → فعل الجمع sind: Die Bücher sind neu.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich nehme den Käse und das Brot.",
      explanation: "سآخذ الجبن والخبز — Ich nehme + النصب: den Käse (مذكر).",
      errorType: "spelling",
    },
    {"id": "e11", "type": "multiple-choice", "instructionAr": "صرّف فعل السعر مع فاعله:", "questionDe": "Was ___ die Äpfel? — Drei Euro.", "questionAr": "بكم التفّاح؟", "options": ["kosten", "kostet", "kostest", "koste"], "correctIndex": 0, "explanation": "الفاعل die Äpfel جمع ⇒ الفعل جمع: kosten. والفعل يتبع السلعة لا السعر.", "optionExplanations": [undefined, "kostet للمفرد: Was kostet der Apfel?", "صيغة مخاطب لا توجد هنا.", "koste للمتكلّم ich — والفاعل هنا التفّاح."], "errorType": "conjugation"},
    {"id": "e12", "type": "multiple-choice", "instructionAr": "اختر قراءة السعر الصحيحة:", "questionDe": "3,50 € =", "questionAr": "كيف يُقرأ هذا السعر؟", "options": ["drei Euro fünfzig", "drei Komma fünfzig Euro", "drei Euro und fünfzig Euro", "dreifünfzig Euro"], "correctIndex": 0, "explanation": "السعر يُقرأ وحدتين متتاليتين: اليورو ثمّ السنت، وكلمة Cent تُحذف عادةً.", "optionExplanations": [undefined, "Komma تُقرأ في الرياضيات والأوزان لا في الأسعار.", "تكرار Euro خطأ؛ الجزء الثاني سنتات.", "لا يُلصق الرقمان؛ بينهما كلمة Euro."], "errorType": "vocabulary"},
    {"id": "e13", "type": "error-correction", "instructionAr": "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».", "wrongSentence": "Ich nehme zwei Kilos Tomaten.", "wrongWord": "Kilos", "correctWord": "Kilo", "options": ["Kilo", "Kilon", "Kiloe", "Kilose"], "explanation": "وحدات القياس المحايدة تبقى مفردة الصورة بعد العدد: zwei Kilo، drei Gramm، fünf Euro. والمؤنّثة وحدها تُجمَع: zwei Flaschen.", "errorType": "plural"},
    {"id": "e14", "type": "error-correction", "instructionAr": "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».", "wrongSentence": "Ich möchte ein Kilo von Äpfeln.", "wrongWord": "von", "correctWord": "Äpfel", "options": ["Äpfel", "aus", "mit", "für"], "explanation": "الألمانية ترصف المقدار والسلعة متجاورين: ein Kilo Äpfel — بلا حرف جرّ ولا أداة. و«von Äpfeln» نقلٌ حرفيّ لـ«من» العربية.", "errorType": "preposition"},
    {"id": "e15", "type": "fill-blank", "instructionAr": "أكمل أداة النصب بعد nehmen:", "template": "Ich nehme ___ Käse und ___ Flasche Wasser.", "blanks": [{"correct": "den", "options": ["den", "der", "dem"]}, {"correct": "eine", "options": ["eine", "einen", "ein"]}], "explanation": "nehmen تنصب: المذكّر der Käse ⇐ den، والمؤنّث die Flasche ⇐ eine دون تغيير — المذكّر وحده يتغيّر.", "errorType": "case"},
    {"id": "e16", "type": "word-ordering", "instructionAr": "رتّب طلباً مهذّباً:", "tokens": ["hätte", "Ich", "gern", "zweihundert", "Gramm", "Käse", "."], "correctSentence": "Ich hätte gern zweihundert Gramm Käse.", "explanation": "القالب: Ich hätte gern + المقدار + السلعة. والفعل hätte في المرتبة الثانية كعادة الخبرية.", "errorType": "word-order"},
    {"id": "e17", "type": "matching", "instructionAr": "صل المقدار بالسلعة المناسبة:", "pairs": [{"left": "ein Kilo", "right": "Äpfel"}, {"left": "zweihundert Gramm", "right": "Käse"}, {"left": "eine Flasche", "right": "Wasser"}, {"left": "drei Stück", "right": "Kuchen"}], "explanation": "لاحظ أنّ الوحدة لا تتبعها von: ein Kilo Äpfel. وKilo/Gramm/Stück مفردة الصورة، وFlasche مؤنّثة تُجمَع: zwei Flaschen.", "errorType": "vocabulary"},
    {"id": "e18", "type": "transformation", "instructionAr": "حوّل الطلب الفظّ إلى صيغة مهذّبة:", "prompt": "Ich will einen Kaffee. → (بصيغة hätte gern)", "acceptedAnswers": ["Ich hätte gern einen Kaffee", "Ich hätte gern einen Kaffee."], "sampleAnswer": "Ich hätte gern einen Kaffee.", "explanation": "wollen يعبّر عن إرادة متشدّدة ويُسمع فظّاً في المتجر. ولاحظ بقاء النصب: einen Kaffee.", "errorType": "vocabulary"},
    {"id": "e19", "type": "multiple-choice", "instructionAr": "اختر الرقم المكتوب صحيحاً:", "questionDe": "Das Fahrrad kostet ___ Euro. (365)", "questionAr": "الدرّاجة بـ365 يورو.", "options": ["dreihundertfünfundsechzig", "dreihundertsechzigfünf", "dreihundertfünfsechzig", "drei hundert fünf und sechzig"], "correctIndex": 0, "explanation": "المئات أوّلاً ثمّ الآحاد فالعشرات بـund: dreihundert + fünf + und + sechzig، وكلّها كلمة واحدة.", "optionExplanations": [undefined, "قلبتَ الآحاد والعشرات وأسقطت und.", "نقصتك und بين الآحاد والعشرات.", "الأرقام تُكتب موصولة دون مسافات."], "errorType": "spelling"},
    {"id": "e20", "type": "true-false", "instructionAr": "اقرأ الحوار ثمّ احكم على العبارات:", "title": "An der Käsetheke", "textDe": "Verkäuferin: Guten Tag! Was darf es sein? — Kunde: Ich hätte gern dreihundert Gramm Käse. — Verkäuferin: Gern. Sonst noch etwas? — Kunde: Ja, zwei Flaschen Wasser, bitte. — Verkäuferin: Das macht acht Euro zwanzig. — Kunde: Bar, bitte. Hier sind zehn Euro. — Verkäuferin: Und ein Euro achtzig zurück. Schönen Tag!", "textAr": "حوار قصير عند بسطة الجبن.", "statements": [{"id": "s1", "de": "Der Kunde kauft dreihundert Gramm Käse.", "ar": "يشتري الزبون ثلاثمئة غرام جبن.", "isTrue": true, "whyAr": "قالها حرفيّاً: Ich hätte gern dreihundert Gramm Käse."}, {"id": "s2", "de": "Er bezahlt mit Karte.", "ar": "يدفع بالبطاقة.", "isTrue": false, "whyAr": "قال Bar, bitte أي نقداً، ثمّ أعطى عشرة يورو."}, {"id": "s3", "de": "Er bekommt ein Euro achtzig zurück.", "ar": "يستردّ يورو وثمانين.", "isTrue": true, "whyAr": "10,00 − 8,20 = 1,80، والبائعة قالتها."}, {"id": "s4", "de": "Er kauft nur eine Flasche Wasser.", "ar": "يشتري قارورة ماء واحدة.", "isTrue": false, "whyAr": "طلب zwei Flaschen — ولاحظ جمع Flasche لأنّها مؤنّثة."}], "explanation": "حوار شراء كامل: طلب مهذّب، فمقدار، فحساب، فدفع، فباقٍ.", "errorType": "vocabulary"},
    {
      id: "e21",
      type: "multiple-choice",
      instructionAr: "أيّ صيغة عنوان صحيحة بالمعيار الألمانيّ؟",
      questionDe: "Welche Adresse ist richtig geschrieben?",
      options: [
        "Goethestraße 12, 10115 Berlin",
        "12 Goethestraße, Berlin 10115",
        "Goethe Straße 12, Berlin 10115",
        "10115 Goethestraße 12, Berlin",
      ],
      correctIndex: 0,
      explanation: "الشارع ثمّ الرقم، ثمّ الرمز البريديّ ثمّ المدينة. وStraße تلتصق بالاسم كلمةً واحدة.",
      errorType: "word-order",
    },
    {
      id: "e22",
      type: "fill-blank",
      instructionAr: "أكمل: كيف تُقرأ الأرقام على الهاتف؟",
      instructionDe: "Telefonnummer 0176: wie liest man das?",
      template: "___ - eins - sieben - sechs",
      blanks: [{ correct: "null", options: ["null", "nichts", "kein"], errorType: "vocabulary" }],
      explanation: "الصفر في الأرقام هو null. أمّا nichts فمعناها «لا شيء» وkein أداة نفي للأسماء.",
      errorType: "vocabulary",
    },
    {
      id: "e23",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich wohne in die Bahnhofstraße.",
      wrongWord: "die",
      correctWord: "der",
      options: ["der", "dem", "das", "den"],
      explanation: "wohnen يجيب عن wo? فيلزمه الجرّ (Dativ)، وdie Straße مؤنّثة ⟵ in der Bahnhofstraße.",
      errorType: "case",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كلّ حرفٍ بمدينته في جدول التهجئة الجديد (DIN 5009)",
      pairs: [
        { left: "B", right: "Berlin" },
        { left: "K", right: "Köln" },
        { left: "M", right: "München" },
        { left: "N", right: "Nürnberg" },
        { left: "E", right: "Essen" },
      ],
      explanation: "الصيغة على الهاتف: «B wie Berlin» — أي الحرف الذي تبدأ به هذه المدينة.",
      errorType: "vocabulary",
    },
    {
      id: "e25",
      type: "word-ordering",
      instructionAr: "رتّب السؤال عن رقم الهاتف (بصيغة رسمية)",
      tokens: ["Wie", "ist", "Ihre", "Telefonnummer"],
      correctSentence: "Wie ist Ihre Telefonnummer?",
      explanation: "أداة السؤال في المركز الأوّل، والفعل ist في المركز الثاني. وIhre بكافٍ كبيرة للمخاطبة الرسمية.",
      errorType: "word-order",
    },
    {
      id: "e26",
      type: "multiple-choice",
      instructionAr: "متى يُقرأ العدد كاملاً ومتى يُقرأ رقماً رقماً؟",
      questionDe: "Der Preis ist 23 Euro. Wie sagt man das?",
      options: [
        "dreiundzwanzig Euro",
        "zwei drei Euro",
        "zwanzig drei Euro",
        "drei zwanzig Euro",
      ],
      correctIndex: 0,
      explanation: "السعر كمّية تُحسب فيُقرأ عدداً كاملاً. والقراءة المفردة (zwei drei) للرموز: الهاتف والرمز البريديّ.",
      errorType: "vocabulary",
    },
    {
      id: "e27",
      type: "transformation",
      instructionAr: "اكتب الرمز البريديّ 80331 بالكلمات كما يُملى على الهاتف",
      prompt: "80331 →",
      acceptedAnswers: [
        "acht null drei drei eins",
        "Acht null drei drei eins",
      ],
      sampleAnswer: "acht null drei drei eins",
      explanation: "الرمز البريديّ خمسة أرقام تُملى مفردة، لا «achtzigtausend…».",
      errorType: "vocabulary",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "einsundzwanzig", right: "einundzwanzig", whyAr: "eins تفقد s عند التركيب: einundzwanzig." },
      { wrong: "zwei Apfel (مفرد بعد رقم)", right: "zwei Äpfel", whyAr: "بعد 2+ يأتي الجمع دائماً." },
      { wrong: "die Buchs", right: "die Bücher", whyAr: "Buch من نمط -er مع Umlaut: Bücher." },
    ],
    eselsbruecken: [
      "«واحد-و-عشرون مثل العربية تماماً»: ein+und+zwanzig = 21.",
      "«الجمع دائماً die»: مهما كان جنس المفرد، الجمع يبدأ بـ die.",
    ],
    culturalNote: {
      title: "الأسواق الأسبوعية (Wochenmarkt)",
      content:
        "في كل مدينة ألمانية سوق أسبوعي صباحي (غالباً السبت): خضار وفواكه طازجة من المزارعين. العبارة الشائعة: «Ein Kilo Äpfel, bitte!» — والألمان يدفعون غالباً نقداً (bar) في الأسواق، بينما المتاجر الكبرى تقبل البطاقات.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الرقم الصحيح كتابةً:",
      questionDe: "33 = ___",
      options: ["dreiunddreißig", "dreißigdrei", "dreiunddrei", "dreiundreißig"],
      correctIndex: 0,
      explanation: "33 = dreiunddreißig (ثلاثة وثلاثون).",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر جمع الكلمة:",
      questionDe: "das Zimmer → die ___",
      options: ["Zimmer", "Zimmers", "Zimmern", "Zimmeres"],
      correctIndex: 0,
      explanation: "Zimmer لا يتغير في الجمع: die Zimmer.",
      errorType: "plural",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["drei", "Ich", "kaufe", "Äpfel", "."],
      correctSentence: "Ich kaufe drei Äpfel.",
      explanation: "Ich + kaufe (V2) + drei Äpfel (جمع).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das kostet fünfzehn Euro, das ist sehr teuer!",
      wrongWord: "teuer",
      correctWord: "billig",
      options: ["billig", "teuer", "neu", "gut"],
      explanation: "خمسة عشر يورو رخيص (billig) وليس غالياً (teuer) — السياق يحدد!",
      errorType: "vocabulary",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الجمع الصحيح:",
      template: "Zwei ___ (Apfel) und drei ___ (Banane), bitte!",
      blanks: [
        { correct: "Äpfel", options: ["Äpfel", "Apfels", "Apfelen"] },
        { correct: "Bananen", options: ["Bananen", "Bana", "Bananens"] },
      ],
      explanation: "Apfel → Äpfel (Umlaut)، Banane → Bananen (-n).",
      errorType: "plural",
    },
  ],

  flashcards: [
    { id: "fc1", de: "kaufen", ar: "يشتري", example: "Ich kaufe ein Brot.", exampleAr: "أشتري خبزاً.", level: "A1" },
    { id: "fc2", de: "kosten", ar: "يكلف", example: "Was kostet das?", exampleAr: "بكم هذا؟", level: "A1" },
    { id: "fc3", de: "der Euro", ar: "اليورو", example: "Das macht zehn Euro.", exampleAr: "المجموع عشرة يورو.", level: "A1" },
    { id: "fc4", de: "billig / teuer", ar: "رخيص / غالٍ", example: "Das ist sehr billig.", exampleAr: "هذا رخيص جداً.", level: "A1" },
    { id: "fc5", de: "die Zahl / zählen", ar: "الرقم / يعدّ", example: "Ich kann bis 1000 zählen.", exampleAr: "أستطيع العد حتى 1000.", level: "A1" },
    { id: "fc6", de: "der Plural", ar: "الجمع", example: "Äpfel ist der Plural von Apfel.", exampleAr: "Äpfel جمع Apfel.", level: "A1" },
    { id: "fc7", de: "das Kilo", ar: "الكيلوغرام", example: "Ein Kilo Äpfel, bitte!", exampleAr: "كيلو تفاح من فضلك!", level: "A1" },
    { id: "fc8", de: "Ich nehme …", ar: "سآخذ… (عند الشراء)", example: "Ich nehme den Käse.", exampleAr: "سآخذ الجبن.", level: "A1" },
    { id: "fc19", de: "die Telefonnummer", ar: "رقم الهاتف", example: "Wie ist deine Telefonnummer?", exampleAr: "ما رقم هاتفك؟", level: "A1" },
    { id: "fc20", de: "die Adresse", ar: "العنوان", example: "Meine Adresse ist Goethestraße 12.", exampleAr: "عنواني شارع غوته 12.", level: "A1" },
    { id: "fc21", de: "die Postleitzahl", ar: "الرمز البريديّ (خمسة أرقام قبل المدينة)", example: "Die Postleitzahl von Berlin-Mitte ist 10115.", exampleAr: "الرمز البريديّ لوسط برلين هو 10115.", level: "A1" },
    { id: "fc22", de: "buchstabieren", ar: "يتهجّى", example: "Können Sie das bitte buchstabieren?", exampleAr: "أيمكنك تهجئة ذلك من فضلك؟", level: "A1" },
    { id: "fc23", de: "wiederholen", ar: "يُعيد، يكرّر", example: "Können Sie die Nummer wiederholen?", exampleAr: "أيمكنك إعادة الرقم؟", level: "A1" },
    { id: "fc24", de: "die Straße", ar: "الشارع (مؤنّثة ⟵ in der Straße)", example: "Ich wohne in der Bahnhofstraße.", exampleAr: "أسكن في شارع المحطة.", level: "A1" },
    {"id": "fc9", "de": "Was kostet ...? / Was kosten ...?", "ar": "بكم ...؟ (مفرد / جمع)", "example": "Was kosten die Äpfel?", "exampleAr": "بكم التفّاح؟", "level": "A1"},
    {"id": "fc10", "de": "Ich hätte gern ...", "ar": "أودّ ... (ألطف صيغة طلب)", "example": "Ich hätte gern zweihundert Gramm Käse.", "exampleAr": "أودّ مئتي غرام جبن.", "level": "A1"},
    {"id": "fc11", "de": "das Gramm / das Kilo", "ar": "الغرام / الكيلو — يبقيان مفردي الصورة بعد العدد", "example": "Zweihundert Gramm, bitte.", "exampleAr": "مئتا غرام من فضلك.", "level": "A1"},
    {"id": "fc12", "de": "die Flasche, -n", "ar": "القارورة — مؤنّثة فتُجمَع بعد العدد", "example": "Zwei Flaschen Wasser, bitte.", "exampleAr": "قارورتا ماء من فضلك.", "level": "A1"},
    {"id": "fc13", "de": "Sonst noch etwas?", "ar": "شيء آخر؟ — سؤال البائع الثابت", "example": "Sonst noch etwas? — Nein, danke, das ist alles.", "exampleAr": "شيء آخر؟ — لا شكراً، هذا كلّ شيء.", "level": "A1"},
    {"id": "fc14", "de": "Das macht ... Euro.", "ar": "المجموع ... يورو", "example": "Das macht dreizehn Euro fünfzig.", "exampleAr": "المجموع ثلاثة عشر يورو ونصف.", "level": "A1"},
    {"id": "fc15", "de": "bar / mit Karte bezahlen", "ar": "الدفع نقداً / بالبطاقة", "example": "Bar oder mit Karte? — Bar, bitte.", "exampleAr": "نقداً أم بالبطاقة؟ — نقداً من فضلك.", "level": "A1"},
    {"id": "fc16", "de": "der Wochenmarkt, ¨-e", "ar": "السوق الأسبوعية", "example": "Am Samstag gehe ich auf den Wochenmarkt.", "exampleAr": "يوم السبت أذهب إلى السوق الأسبوعية.", "level": "A1"},
    {"id": "fc17", "de": "neunundneunzig Cent", "ar": "تسعة وتسعون سنتاً (0,99 €)", "example": "Der Kaffee kostet neunundneunzig Cent.", "exampleAr": "القهوة بتسعة وتسعين سنتاً.", "level": "A1"},
    {"id": "fc18", "de": "zurückbekommen", "ar": "يستردّ الباقي — فعل منفصل", "example": "Sie bekommt sechs Euro fünfzig zurück.", "exampleAr": "تستردّ ستّة يورو ونصفاً.", "level": "A1"},
    { id: "fc25", de: "der Markt", ar: "السوق", example: "Jeden Samstag geht sie auf den Markt.", exampleAr: "كلّ سبتٍ تذهب إلى السوق.", level: "A1" },
    { id: "fc26", de: "die Bücher (das Buch)", ar: "الكتب (مفردها das Buch)", example: "Ich kaufe zwei Bücher.", exampleAr: "أشتري كتابين.", level: "A1" },
    { id: "fc27", de: "das Wort", ar: "الكلمة (ج. Wörter)", example: "Ich lerne neue Wörter.", exampleAr: "أتعلّم كلماتٍ جديدة.", level: "A1" },
    { id: "fc28", de: "spricht (sprechen)", ar: "يتكلّم — هو/هي (شاذّ: e ⟵ i)", example: "Sie spricht sehr gut Deutsch.", exampleAr: "تتكلّم الألمانية جيداً جداً.", level: "A1" },
    { id: "fc29", de: "langsam", ar: "ببطء", example: "Sprechen Sie bitte langsam.", exampleAr: "تكلّم ببطء من فضلك.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-07-1", type: "simplify-announcement",
      titleAr: "بسّط إعلان تخفيضات بالعربية",
      sourceDe: "Sommer-Sale! Alle Kleider 30% reduziert. Schuhe: 2 Paare zum Preis von 1. Nur diese Woche!",
      taskAr: "انقل الإعلان بالعربية لصديق: التخفيض، البضائع، والعرض الخاص.",
      modelAnswerAr: "«تخفيضات الصيف! كل الفساتين بخصم 30%. الأحذية: زوجان بسعر واحد. هذا الأسبوع فقط!»",
      keyPointsAr: ["نقلت نسبة التخفيض (30%)", "ذكرت عرض الأحذية (2 بسعر 1)", "نقلت المدة (هذا الأسبوع)"],
    },
  ],
      interaction: [
    {
      id: "int-a1-07-1",
      scenarioAr: "في متجر ملابس — تسأل عن مقاس وسعر.",
      scenarioDe: "Im Kleidungsgeschäft — du fragst nach Größe und Preis.",
      strategyAr: "الاستراتيجية: السؤال عن المقاس واللون والسعر بلطف.",
      rounds: [
        {
          speakerDe: "Kann ich Ihnen helfen?",
          speakerAr: "هل يمكنني مساعدتك؟",
          options: [
            { de: "Ja, ich suche ein Hemd in Größe M.", ar: "نعم، أبحث عن قميص مقاس M.", best: true, replyDe: "Welche Farbe möchten Sie?", replyAr: "ما اللون الذي تريده؟" },
            { de: "Nein, ich suche nichts.", ar: "لا، لا أبحث عن شيء.", best: false, replyDe: "Okay, dann schauen Sie sich in Ruhe um.", replyAr: "حسناً، تجول في المتجر بهدوء." },
          ],
        },
        {
          speakerDe: "Welche Farbe möchten Sie?",
          speakerAr: "ما اللون الذي تريده؟",
          options: [
            { de: "Blau, bitte. Was kostet das Hemd?", ar: "أزرق من فضلك. كم سعر القميص؟", best: true, replyDe: "25 Euro. Sie haben 30% Rabatt.", replyAr: "25 يورو. لديك خصم 30%." },
            { de: "Ich möchte die Farbe kaufen.", ar: "أريد شراء اللون.", best: false, replyDe: "Die Farbe kann man nicht kaufen, nur das Hemd.", replyAr: "اللون لا يُشترى، فقط القميص." },
          ],
        },
      ],
    },
  ],

};