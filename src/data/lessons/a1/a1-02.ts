import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-02: العائلة والأصدقاء — نموذج كامل ثانٍ لنظام الدرس الموحد
 * (التركيز: مفردات العائلة + أدوات الملكية mein/meine)
 */
export const lessonA102: Lesson = {
  id: "a1-02",
  unitId: "a1-02",
  level: "A1",
  order: 2,
  titleDe: "Meine Familie",
  titleAr: "العائلة والأصدقاء",
  duration: 30,
  summary:
    "أفراد العائلة بالعربية والألمانية، أدوات الملكية mein/meine حسب جنس الاسم، ووصف العائلة بجمل بسيطة.",

  /* 1) الأهداف التعليمية */
  lernziele: [
    { id: "z1", de: "Ich kann Familienmitglieder nennen.", ar: "أن أسمّي أفراد العائلة بالألمانية (Vater, Mutter, Bruder...)." },
    { id: "z2", de: "Ich kann mein/meine richtig verwenden.", ar: "أن أستخدم أدوات الملكية mein/meine بشكل صحيح حسب جنس الاسم." },
    { id: "z3", de: "Ich kann meine Familie vorstellen.", ar: "أن أقدّم عائلتي بجمل بسيطة (Das ist mein Vater...)." },
    { id: "z4", de: "Ich kann fragen: Hast du Geschwister?", ar: "أن أسأل عن العائلة: هل لديك إخوة؟" },
  ],

  /* 2) التمهيد */
  einfuehrung: {
    motivatingQuestionAr:
      "قل «أبي» و«أمي» بالعربية... هل لاحظت أن العربية تضيف حرف الياء لنهاية الكلمة (أب + ي)? كيف تعتقد أن الألمانية تعبّر عن الملكية؟ قبل أن نرى القاعدة، خمّن!",
    motivatingQuestionDe: "Wie sagt man „mein Vater“ auf Arabisch?",
    contextAr:
      "في العربية نقول: أبي، أمّي، أخي — الملكية تُلحق بنهاية الاسم. في الألمانية الأمر مختلف تماماً: نضع كلمة مستقلة قبل الاسم (mein Vater). وسنكتشف معاً متى تكون mein ومتى meine.",
    contextDe: "mein Vater, meine Mutter, mein Bruder, meine Schwester …",
    connectionToPreviousAr: "في الدرس السابق تعلمنا: Ich bin / Ich heiße / Woher kommst du? اليوم سنضيف العائلة لنتمكن من تقديم نفسنا بشكل أوسع.",
    activateVocabulary: [
      { de: "die Familie", ar: "العائلة" },
      { de: "der Vater", ar: "الأب" },
      { de: "die Mutter", ar: "الأم" },
      { de: "der Bruder", ar: "الأخ" },
      { de: "die Schwester", ar: "الأخت" },
    ],
  },

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "أدوات الملكية mein / meine",
      titleDe: "Possessivartikel: mein und meine",
      explanationAr:
        "أداة الملكية (Possessivartikel) هي الكلمة التي تجعل الاسم مملوكاً: mein Vater = أبي. وقاعدتها الأولى في الألمانية تصدم الناطق بالعربية، فلنقلها بأوضح عبارة ممكنة:\n\n**الأداة تتبع الاسم المملوك، لا صاحبَ المِلك.**\n\nأي أنّ شكل mein يتحدّد بجنس الشيء الذي تملكه، لا بجنسك أنت. فرجلٌ يقول meine Mutter، وامرأةٌ تقول mein Vater — لأنّ Mutter مؤنّثة وVater مذكّر، وجنس المتكلّم لا دخل له إطلاقاً.\n\n**القاعدة في حالة الرفع (Nominativ):**\n• مع الاسم **المذكّر** (der): mein Vater, mein Bruder, mein Sohn\n• مع الاسم **المحايد** (das): mein Kind, mein Haus\n• مع الاسم **المؤنّث** (die): mein**e** Mutter, mein**e** Schwester\n• مع **الجمع** (die): mein**e** Eltern, mein**e** Geschwister\n\nفالنهاية ‑e تظهر مرّتين فقط: مع المؤنّث ومع الجمع. وما عداهما فالأداة عارية.\n\n**من أين جاء هذا النظام؟** لاحظ الشبه الكامل بين الأداة النكرة وأداة الملكية:\nein Vater ← mein Vater ← dein Vater ← kein Vater\neine Mutter ← meine Mutter ← deine Mutter ← keine Mutter\nكلّها تصرّف تصريفاً واحداً بلا أدنى فرق. ولهذا يسمّيها النحاة الألمان **ein‑Wörter** (كلمات المجموعة ein). فمَن أتقن ein/eine ملك mein/meine و dein/deine و kein/keine مجّاناً — ثلاث قواعد بثمن واحدة. هذه من أربح الصفقات في تعلّم الألمانية، فاحفظ ein/eine إتقاناً تامّاً.\n\n**تنبيه على المدى البعيد:** هذه الأداة ستتغيّر لاحقاً بحسب **الحالة الإعرابية** أيضاً: ستقول في المفعول به المباشر meinen Vater (بنهاية ‑en للمذكّر)، وفي المفعول غير المباشر meinem Vater. لكنّنا في هذا الدرس نبقى في حالة الرفع وحدها — أي مع الفاعل وما بعد sein — وهذا يكفي لتقديم العائلة كلّها تقديماً سليماً. سنعود إلى بقيّة الحالات في درس النصب ثمّ في درس الجرّ.",
      whyAr:
        "لأنّ الحديث عن العائلة هو **أوّل موضوعٍ حقيقي** يتكلّم فيه المتعلّم عن حياته لا عن نفسه فحسب. وفي كلّ محادثة تعارف ألمانية — في الدورة، في العمل، عند الجيران — سيأتي السؤال: Hast du Geschwister? Wo wohnt deine Familie? ومَن لا يضبط mein/meine يرتكب خطأً يتكرّر في **كلّ جملة** ينطقها عن أهله، فيصير الخطأ عادةً راسخة يصعب اقتلاعها بعد سنة. وثمّة سبب بنيوي أهمّ: أداة الملكية هي **بوّابتك إلى نظام الحالات كلّه**. فالنهايات التي تتعلّمها هنا (‑e للمؤنّث والجمع، وسكونٌ للمذكّر والمحايد) هي النهايات نفسها التي ستحكم ein و kein و dieser وصفات الوصف لاحقاً. فالدرس ليس عن العائلة في الحقيقة، بل عن **آلية التوافق النحوي** التي تحكم الجملة الألمانية من أوّلها إلى آخرها — والعائلة مجرّد ميدان تدريبٍ ودود لها.",
      table: {
        title: "قاعدة mein/meine في حالة الرفع (Nominativ)",
        columns: ["جنس الاسم", "المثال", "أداة الملكية"],
        rows: [
          { label: "مذكر (der)", cells: ["der Vater (الأب)", "mein Vater"] },
          { label: "محايد (das)", cells: ["das Kind (الطفل)", "mein Kind"] },
          { label: "مؤنث (die)", cells: ["die Mutter (الأم)", "meine Mutter"] },
          { label: "الجمع (die)", cells: ["die Eltern (الوالدان)", "meine Eltern"] },
        ],
      },
      examples: [
        {"de": "Das ist mein Vater. Er heißt Karim.", "ar": "هذا أبي. اسمه كريم. (Vater مذكّر ⟵ mein)"},
        {"de": "Meine Mutter heißt Leila.", "ar": "أمّي اسمها ليلى. (Mutter مؤنّثة ⟵ meine)"},
        {"de": "Mein Bruder ist zehn Jahre alt.", "ar": "أخي عمره عشر سنوات."},
        {"de": "Meine Schwester wohnt in Sousse.", "ar": "أختي تسكن في سوسة."},
        {"de": "Meine Eltern sind sehr nett.", "ar": "والداي لطيفان جداً. (جمع ⟵ meine + sind)"},
        {"de": "Mein Kind heißt Nour.", "ar": "ابني/ابنتي اسمه نور. (Kind محايد ⟵ mein)"},
        {"de": "Ich bin Amira und das ist mein Mann.", "ar": "أنا أميرة وهذا زوجي. (المتكلّمة امرأة والأداة mein لأنّ Mann مذكّر)"},
        {"de": "Meine Geschwister wohnen nicht hier.", "ar": "إخوتي لا يسكنون هنا."},
      ],
      comparisonWithArabic:
        "الفرق هنا **بنيويّ لا معجميّ**، وهو من أعمق الفروق بين اللغتين:\n\n**١. العربية تلصق الملكية بالاسم، والألمانية تفصلها كلمةً مستقلّة.** «أبي» كلمة واحدة، ياء المتكلّم لاصقة. أمّا الألمانية فتقول mein Vater في كلمتين. فالعربي يبحث لا شعورياً عن لاحقةٍ تُضاف، ولن يجدها.\n\n**٢. الضمير العربي اللاصق يتبع المالك، والأداة الألمانية تتبع المملوك.** وهذا **انقلابٌ في المنطق** لا مجرّد اختلافٍ في الشكل. في العربية «كتابها» و«أمّها» يشتركان في الهاء لأنّ المالك واحد (هي)، والمملوك لا أثر له. وفي الألمانية ihr Buch و ihre Mutter يختلفان لأنّ المملوك اختلف. فالعربي حين يقول «أمّي» يفكّر: المتكلّم أنا ⟵ ياء. والألماني يفكّر: Mutter مؤنّثة ⟵ meine. مسارُ تفكيرٍ مختلف تماماً، ولا بدّ من إعادة برمجته واعيةً قبل أن يصير تلقائياً.\n\n**٣. مفردات العائلة نفسها تختلف في التصنيف.** العربية تفصّل ما تجمله الألمانية: «عمّ» و«خال» يقابلهما Onkel واحد؛ «عمّة» و«خالة» يقابلهما Tante واحدة. فالألمانية أفقر في هذا الباب تحديداً، وهذا يريح المتعلّم العربي — لكنّه يعني أيضاً أنّه سيحتاج إلى شرحٍ إضافي حين يريد التدقيق: mein Onkel väterlicherseits (عمّي، حرفياً: خالي من جهة الأب).\n\n**٤. غياب المثنّى.** العربية تملك صيغة مثنّى مستقلّة («والداي»، «أخواي»). والألمانية لا مثنّى فيها إطلاقاً: meine Eltern (جمع) و zwei Brüder. فلا تبحث عن صيغةٍ للاثنين، فليست موجودة.",
      eselsbruecke:
        "قاعدةٌ واحدة تحسم الباب كلّه: **«الأداة تسأل عن المملوك لا عن المالك»**. وإن نسيتَ النهاية فاستعمل الحيلة العملية: ضع ein مكان mein؛ فإن قلت eine فقل meine، وإن قلت ein فقل mein. ein Mutter؟ لا — eine Mutter ⟵ إذن meine Mutter. ein Vater؟ نعم ⟵ إذن mein Vater. الأداة النكرة مسطرتك في كلّ حالة.",
      commonMistakes: [
        {"wrong": "mein Mutter", "right": "meine Mutter", "whyAr": "الأشهر على الإطلاق. السبب أنّ المتعلّم يفكّر بالعربية «أمّي» فيربط الأداة بنفسه لا بالكلمة. لكنّ die Mutter مؤنّثة، والمؤنّث يوجب النهاية ‑e. الاختبار الفوري: أتقول eine Mutter؟ نعم ⟵ إذن meine Mutter."},
        {"wrong": "meine Vater", "right": "mein Vater", "whyAr": "الخطأ المعاكس: إقحام ‑e حيث لا موضع لها. der Vater مذكّر، فالأداة عارية بلا نهاية. وكثيراً ما يقع فيه مَن حفظ meine Mutter ثمّ عمّمها على كلّ شيء. النهاية ‑e للمؤنّث والجمع فقط."},
        {"wrong": "Ich bin Sara. Meine Bruder heißt Ali.", "right": "Ich bin Sara. Mein Bruder heißt Ali.", "whyAr": "خطأ أعمق: المتكلّمة أنثى فظنّت أنّ الأداة تتأنّث معها. وهذا هو الالتباس الجوهري في الدرس كلّه — الأداة لا تعرف جنس المتكلّم أصلاً ولا تهتمّ به، بل تنظر إلى الكلمة التي بعدها فحسب. der Bruder مذكّر ⟵ mein، ولو كانت المتكلّمة ملكةً."},
        {"wrong": "Meine Eltern ist nett.", "right": "Meine Eltern sind nett.", "whyAr": "الأداة صحّت والفعل أخطأ. die Eltern جمع دائماً ولا مفرد له بهذا المعنى، فيلزمه sind لا ist. والعربي معرّضٌ لهذا لأنّ العربية تُجيز إفراد الفعل مع الجمع غير العاقل («الكتب موجودة»)، والألمانية لا تُجيزه أبداً."},
      ],
      relatedRuleComparison: {
        "title": "mein / kein / ein — عائلة واحدة بتصريف واحد",
        "content": "الفائدة الكبرى في هذا الدرس أنّ ما تتعلّمه ليس قاعدةً واحدة بل **ثلاثاً**. فالأداة النكرة ein، وأداة النفي kein، وكلّ أدوات الملكية (mein, dein, sein, ihr, unser, euer, Ihr) تُصرَّف تصريفاً متطابقاً حرفاً بحرف، ولذلك تُسمّى جميعاً ein‑Wörter. قارن في حالة الرفع: ein/kein/mein Vater — eine/keine/meine Mutter — ein/kein/mein Kind — keine/meine Eltern (ولا وجود لـ ein في الجمع لأنّ «واحداً» لا يُجمع). فإن أتقنت خانةً واحدة أتقنت الثلاث. والفرق الوحيد بينها في الجمع: kein و mein يعملان فيه، أمّا ein فيسقط."
      },
    },
    {
      id: "t2",
      titleAr: "مفردات العائلة — هل تعلم أن بعضها يُركّب؟",
      titleDe: "Familienwörter",
      explanationAr:
        "مفردات العائلة ليست قائمة تُحفظ صمّاً، بل نظامٌ له منطقه. ومَن رأى المنطق حفظ الضِعف بنصف الجهد.\n\n**أوّلاً: النواة (Kernfamilie).**\nder Vater (الأب) · die Mutter (الأمّ) · der Sohn (الابن) · die Tochter (الابنة) · der Bruder (الأخ) · die Schwester (الأخت) · das Kind (الطفل — **محايد** مهما كان جنسه!).\n\n**ثانياً: الجموع الجامعة، وهي مفتاح الطلاقة.**\nالألمانية تملك كلماتٍ تجمع الطرفين في لفظٍ واحد، واستعمالها علامة على المتكلّم الجيّد:\n• **die Eltern** = الأب والأمّ معاً. جمعٌ دائماً، ولا مفرد له.\n• **die Geschwister** = الإخوة والأخوات معاً. جمعٌ دائماً أيضاً.\n• **die Großeltern** = الجدّان.\n• **die Kinder** = الأولاد (جمع das Kind).\nفبدل «Mein Vater und meine Mutter sind nett» قل ببساطة «Meine Eltern sind nett».\n\n**ثالثاً: قاعدة الاشتقاق — Groß‑ و ‑in.**\nلاحظ كيف تُبنى الكلمات بدل حفظها:\n• السابقة **Groß‑** (كبير) تصنع الجيل الأعلى: die Großmutter (الجدّة، حرفياً «الأمّ الكبرى») · der Großvater · die Großeltern.\n• السابقة **Enkel‑** تصنع الجيل الأدنى: der Enkel (الحفيد) · die Enkelin (الحفيدة).\n• النهاية **‑in** تصنع المؤنّث من المذكّر بانتظام: der Enkel ⟵ die Enkelin · der Cousin ⟵ die Cousine · der Freund ⟵ die Freundin. وكلّ اسمٍ ينتهي بـ ‑in فهو **مؤنّث حتماً** بلا استثناء — وهذه واحدة من أوثق قواعد الجنس في الألمانية.\nوفي الكلام اليومي تُستعمل der Opa و die Oma بدل Großvater/Großmutter، وهما أدفأ وأشيع.\n\n**رابعاً: جموعٌ شاذّة يجب حفظها كما هي.**\nder Vater ⟵ die V**ä**ter · die Mutter ⟵ die M**ü**tter · der Bruder ⟵ die Br**ü**der · die Tochter ⟵ die T**ö**chter.\nأربع كلمات تجمع **بالإمالة وحدها** بلا أيّ نهاية. وهذا أقدم أنواع الجمع في اللغات الجرمانية، بقي في أكثر الكلمات استعمالاً — تماماً كما بقي جمع التكسير في العربية في أقدم الكلمات وأكثرها دوراناً. وقارن: die Schwester ⟵ die Schwester**n** (بنهاية، بلا إمالة) و der Sohn ⟵ die S**ö**hn**e** (بالاثنتين معاً).\n\n**خامساً: التقديم.** يُقدَّم الشخص دائماً بـ **das ist** مهما كان جنسه: Das ist mein Vater / meine Mutter / mein Kind. فكلمة das هنا ليست أداة تعريفٍ محايدة بل ضمير إشارة جامد لا يتغيّر.",
      whyAr:
        "لأنّ العائلة هي الحقل المعجمي الذي **يُختبر فيه المتعلّم فعلاً**: في امتحان Goethe A1 يقع سؤال «Sprechen Sie über Ihre Familie» في القسم الشفوي، وفي القسم الكتابي تُطلب استمارةٌ فيها Familienstand (الحالة العائلية) و Kinder. وهو أيضاً الحقل الذي **يُفتَح به كلّ حديثٍ ودّي** مع جارٍ أو زميل. لكنّ الفائدة الأكبر تعليمية بحتة: هذه المجموعة الصغيرة من الكلمات تعرض عليك **ثلاثة أنماط جمعٍ مختلفة** في آنٍ واحد (بالإمالة وحدها: Väter؛ بالنهاية وحدها: Schwestern؛ بالاثنتين: Söhne)، وتعرض **قاعدة اشتقاق المؤنّث بـ‑in**، وتعرض **الأسماء المركّبة** (Großmutter)، وتعرض **الأسماء الجمعية بلا مفرد** (Eltern). فأنت تتعلّم نصف نظام الاسم الألماني وأنت تظنّ أنّك تحفظ أسماء أقاربك. ولهذا يضعه Schritte و Menschen كلاهما في الوحدة الثانية أو الثالثة، لا صدفةً بل عن قصد.",
      table: {
        title: "أفراد العائلة",
        columns: ["ألماني", "عربي", "الجنس"],
        rows: [
          { label: "der Vater", cells: ["الأب", "مذكر"] },
          { label: "die Mutter", cells: ["الأم", "مؤنث"] },
          { label: "der Bruder", cells: ["الأخ", "مذكر"] },
          { label: "die Schwester", cells: ["الأخت", "مؤنث"] },
          { label: "die Eltern", cells: ["الوالدان", "جمع"] },
          { label: "die Geschwister", cells: ["الإخوة", "جمع"] },
          { label: "der Sohn", cells: ["الابن", "مذكر"] },
          { label: "die Tochter", cells: ["الابنة", "مؤنث"] },
          { label: "der Opa / die Oma", cells: ["الجد / الجدة", "مذكر/مؤنث"] },
        ],
      },
      examples: [
        {"de": "Hast du Geschwister? — Ja, ich habe einen Bruder und zwei Schwestern.", "ar": "هل لديك إخوة؟ — نعم، لي أخ وأختان."},
        {"de": "Meine Eltern wohnen in Kairouan.", "ar": "والداي يسكنان في القيروان. (Eltern جمع ⟵ wohnen)"},
        {"de": "Das ist mein Kind. Es heißt Nour.", "ar": "هذا طفلي. اسمه نور. (Kind محايد ⟵ الضمير es)"},
        {"de": "Meine Großmutter ist achtzig Jahre alt.", "ar": "جدّتي عمرها ثمانون سنة."},
        {"de": "Mein Opa und meine Oma wohnen zusammen.", "ar": "جدّي وجدّتي يسكنان معاً. (الصيغة اليومية الودودة)"},
        {"de": "Wie viele Kinder haben Sie? — Drei: zwei Söhne und eine Tochter.", "ar": "كم طفلاً لديك؟ — ثلاثة: ابنان وابنة."},
        {"de": "Meine Schwestern heißen Amira und Sara.", "ar": "أختاي اسمهما أميرة وسارة. (جمع بالنهاية ‑n)"},
        {"de": "Meine Tante wohnt in Deutschland.", "ar": "خالتي (أو عمّتي) تسكن في ألمانيا. (Tante تصلح للاثنتين)"},
      ],
      comparisonWithArabic:
        "**١. الألمانية أفقر تفصيلاً، والعربية أدقّ.** العربية تفصل ما تجمعه الألمانية: عمّ/خال ⟵ Onkel واحدة؛ عمّة/خالة ⟵ Tante واحدة؛ ابن العمّ/ابن الخال/ابن العمّة ⟵ Cousin واحد. وهذا يريح المتعلّم العربي في الحفظ لكنّه يُربكه في الترجمة: إن أردت التدقيق قلت mein Onkel mütterlicherseits (خالي، حرفياً: عمّي من جهة الأمّ) — وهي عبارةٌ ثقيلة لا يستعملها الألمان إلا عند الحاجة القصوى.\n\n**٢. das Kind محايد — والعربية لا تعرف الحياد أصلاً.** ثلاثة أجناسٍ مقابل جنسين، والثالث لا نظير له. والأدهى أنّ das Mädchen (الفتاة) محايدة أيضاً! والسبب صرفي لا دلالي: كلّ اسمٍ ينتهي بالتصغير ‑chen أو ‑lein فهو محايد قطعاً (das Mädchen, das Brötchen, das Fräulein)، والنهاية أقوى من المعنى. فلا تسأل «لماذا الفتاة محايدة؟» بل تعلّم أنّ **الصرف يغلب الدلالة** في تحديد الجنس الألماني.\n\n**٣. لا مثنّى في الألمانية.** العربية تقول «والداي» و«أخوان»، والألمانية تكتفي بالجمع: meine Eltern, zwei Brüder. فلا تبحث عن صيغةٍ خاصّة للاثنين.\n\n**٤. الجموع الجامعة أشيع في الألمانية.** العربية تقول «إخوتي وأخواتي» ولا تملك كلمةً واحدة تجمعهما بحياد. أمّا Geschwister فتفعل ذلك في لفظ. وهذا يجعل الجملة الألمانية أقصر، ويجعل ترجمتها الحرفية إلى العربية ركيكة — فلا تترجم حرفياً بل بالمعنى.\n\n**٥. توافق الفعل مع الجمع.** العربية تُجيز «الكتب موجودة» بمفردٍ مؤنّث، والألمانية توجب الجمع دائماً: Meine Eltern **sind** — لا ist أبداً. وهذا مصدر خطأ مباشر عند العربي مع Eltern و Geschwister و Leute تحديداً، لأنّها جموعٌ لا تبدو جموعاً.",
      eselsbruecke:
        "**«الأمّ والابنة والأخت مؤنّثات… والطفل لا جنس له!»** — جملة تحسم أخطر ثلاث خانات مع أخطرِ استثناء. وللجموع الشاذّة الأربعة احفظ السلسلة بإيقاعها: **Väter, Mütter, Brüder, Töchter** — أربع كلماتٍ تُجمَع بنقطتين فوق الحرف لا غير. وللاشتقاق: **Groß‑ يرفعك جيلاً، و‑in تؤنّث كلّ شيء**.",
      commonMistakes: [
        {"wrong": "Die Eltern ist nett.", "right": "Die Eltern sind nett.", "whyAr": "Eltern جمعٌ دائماً ولا مفرد له، فيلزمه sind. والخطأ ناتج عن أنّ الكلمة لا تحمل علامة جمعٍ ظاهرة كـ ‑e أو ‑er فتبدو مفردة. والقاعدة العملية: احفظها من أوّل يوم في جملة كاملة «Meine Eltern sind…» فلا تنفكّ عن sind في ذهنك."},
        {"wrong": "Mein Vater und meine Mutter sind nett.", "right": "Meine Eltern sind nett.", "whyAr": "ليست خطأً نحوياً بل ركاكةً أسلوبية. الألمانية تفضّل الاسم الجامع حين يوجد، ولهذا وُضعت Eltern أصلاً. والتعبير المطوَّل يُسمع كترجمةٍ حرفية من لغةٍ أخرى، وامتحان Goethe الشفوي يمنح نقاطاً للتنويع المعجمي."},
        {"wrong": "die Mädchen ist schön", "right": "das Mädchen ist schön", "whyAr": "Mädchen محايدة رغم أنّها تدلّ على أنثى، لأنّ كلّ اسمٍ ينتهي بـ ‑chen محايد قطعاً (das Brötchen, das Häuschen). فالنهاية الصرفية أقوى من المعنى في تحديد الجنس الألماني، وهذه قاعدةٌ ستنفعك في مئات الكلمات."},
        {"wrong": "Ich habe zwei Bruders.", "right": "Ich habe zwei Brüder.", "whyAr": "قياس نهاية الجمع الإنجليزية ‑s على الألمانية. وجمع Bruder بالإمالة وحدها: Brüder، بلا أيّ نهاية. ونهاية ‑s في الألمانية نادرة ومحصورة في الدخيل غالباً (Autos, Hotels, Handys)، فلا تُعمَّم على الكلمات الأصيلة."},
      ],
      relatedRuleComparison: {
        "title": "الاسم المركّب: كيف تعرف جنسه بلا معجم؟",
        "content": "die Großmutter و der Familienname و das Kinderzimmer كلّها أسماء مركّبة (Komposita)، والألمانية تبني منها ما لا يُحصى. والقاعدة الذهبية: **الجزء الأخير هو الذي يحدّد الجنس والجمع معاً**، والأجزاء السابقة مجرّد وصف. فـ die Großmutter مؤنّثة لأنّ die Mutter مؤنّثة، وجمعها die Großmütter بالإمالة نفسها. و der Familienname مذكّر لأنّ der Name مذكّر، لا لشيءٍ في Familie. وهذه القاعدة تعمل مهما طال المركّب: das Sprachenzentrum محايدة لأنّ das Zentrum محايدة، ولو سبقتها عشر كلمات. فأنت لا تحتاج إلى حفظ جنس المركّبات إطلاقاً — يكفيك جنس آخر جزءٍ فيها، وهذا يوفّر عليك آلاف المداخل المعجمية طوال رحلتك."
      },
    },
    {
      id: "t3",
      titleAr: "عائلة غيرك: dein / sein / ihr",
      titleDe: "Wem gehört es? dein, sein und ihr",
      explanationAr:
        "تعلّمتَ mein لعائلتك. والمحادثة الحقيقية تحتاج إلى الحديث عن عائلة غيرك أيضاً: أخوك، أمّه، أبوها. والنظام هنا يعمل بـ**خطوتين مستقلّتين تماماً**، ومَن فصل بينهما لم يخطئ أبداً:\n\n**الخطوة الأولى — اختر الجذر بحسب المالك:**\n• أنا ⟵ **mein‑**\n• أنتَ/أنتِ (غير رسمي) ⟵ **dein‑**\n• هو ⟵ **sein‑**\n• هي ⟵ **ihr‑**\n• نحن ⟵ **unser‑**\n• أنتم (غير رسمي) ⟵ **euer‑**\n• هم ⟵ **ihr‑**\n• حضرتك/حضراتكم (رسمي) ⟵ **Ihr‑** (بحرفٍ كبير دائماً)\n\n**الخطوة الثانية — أضف النهاية بحسب المملوك**، بالقاعدة نفسها التي أتقنتَها في الكتلة الأولى:\n• مذكّر أو محايد ⟵ بلا نهاية\n• مؤنّث أو جمع ⟵ نهاية **‑e**\n\nوهكذا: sein Bruder / seine Mutter — ihr Vater / ihre Schwester — dein Sohn / deine Eltern.\n\n**أخطر التباسٍ في الدرس كلّه: sein و ihr.**\nقارن الجملتين بعناية:\n• Ali kommt aus Tunis. **Seine** Mutter wohnt in Sfax. (المالك **علي** = مذكّر ⟵ الجذر sein؛ والمملوك Mutter مؤنّث ⟵ النهاية ‑e)\n• Lena ist neu hier. **Ihr** Vater arbeitet in Berlin. (المالك **لينا** = مؤنّث ⟵ الجذر ihr؛ والمملوك Vater مذكّر ⟵ بلا نهاية)\nلاحظ التقاطع: كلمة sein**e** تحمل ‑e مع أنّ مالكها رجل، وكلمة **ihr** عاريةٌ مع أنّ مالكها امرأة. فالجذر يقول لك مَن المالك، والنهاية تقول لك ما المملوك — رسالتان مستقلّتان في كلمةٍ واحدة.\n\n**تحذير من مصيدة ihr الثلاثية.** كلمة ihr تؤدّي في الألمانية ثلاث وظائف مختلفة تماماً، ولا يفرّق بينها إلا موضعها في الجملة:\n1. **أداة ملكية بمعنى «ـها»**: Ihr Vater ist Arzt = أبوها طبيب.\n2. **أداة ملكية بمعنى «ـهم»**: Das sind Ali und Sara. Ihre Eltern wohnen hier = والداهما يسكنان هنا.\n3. **ضمير فاعل بمعنى «أنتم»**: Ihr seid nett = أنتم لطفاء. (وهنا يليها فعل لا اسم!)\nوالفرق العملي بسيط: إن جاء بعد ihr **اسم** فهي ملكية، وإن جاء **فعل** فهي ضمير فاعل. وأضف إليها رابعةً في الكتابة: **Ihr** بحرفٍ كبير في وسط الجملة تعني «حضرتك» دائماً — وهذا سبب وجيه للانتباه إلى الحروف الكبيرة في الألمانية.",
      whyAr:
        "لأنّ الانتقال من mein إلى sein/ihr هو **الانتقال من الحديث عن الذات إلى الحديث عن الآخرين** — وهو بالضبط ما يميّز المتكلّم الذي يستطيع أن يُجري محادثةً حقيقية عن ذاك الذي يحفظ بطاقة تعريفٍ بنفسه. لا يمكنك أن تحكي عن زميلٍ في العمل، ولا أن تنقل خبراً عن جارٍ، ولا أن تصف صورةً عائلية، دون sein و ihr. وهناك سببٌ يتعلّق بالفهم لا بالإنتاج فحسب: حين يقول لك ألماني «Ihre Mutter hat angerufen»، فإنّ الفارق بين «أمّها اتّصلت» و«أمّ حضرتك اتّصلت» يقرّره حرفٌ كبير واحد لا تسمعه في الكلام — ولا يحسمه إلا **السياق**. فتدريب أذنك على تتبّع مَن المالك في الحديث مهارةٌ استماعية أساسية، لا ترفاً نحوياً. وأخيراً: هذه المجموعة هي آخر ما تحتاجه لتكوين وصفٍ متماسك لعائلةٍ كاملة، وهي المطلوب الفعلي في المهمّة الشفوية لامتحان A1.",
      table: {
        title: "الجذر حسب المالك، والنهاية حسب المملوك",
        columns: ["المالك", "مع der/das", "مع die (مؤنث/جمع)"],
        rows: [
          { label: "أنا (ich)", cells: ["mein Bruder", "meine Schwester"] },
          { label: "أنتَ/أنتِ (du)", cells: ["dein Bruder", "deine Schwester"] },
          { label: "هو (er)", cells: ["sein Bruder", "seine Schwester"] },
          { label: "هي (sie)", cells: ["ihr Bruder", "ihre Schwester"] },
        ],
      },
      examples: [
        {"de": "Ist das dein Bruder? — Nein, das ist ihr Bruder.", "ar": "أهذا أخوك؟ — لا، هذا أخوها."},
        {"de": "Ali kommt aus Tunis. Seine Mutter wohnt in Sfax.", "ar": "علي من تونس. أمّه تسكن في صفاقس. (مالك مذكّر + مملوك مؤنّث)"},
        {"de": "Lena ist neu hier. Ihr Vater arbeitet in Berlin.", "ar": "لينا جديدة هنا. أبوها يعمل في برلين. (مالك مؤنّث + مملوك مذكّر)"},
        {"de": "Deine Eltern sind sehr nett.", "ar": "والداك لطيفان جداً."},
        {"de": "Herr Weber, wie heißt Ihre Frau?", "ar": "سيد فيبر، ما اسم زوجتك؟ (Ihre بحرف كبير = الصيغة الرسمية)"},
        {"de": "Das sind Ali und Sara. Ihre Kinder heißen Nour und Amir.", "ar": "هذان علي وسارة. أولادهما اسمهما نور وأمير. (ihr = ـهما/ـهم)"},
        {"de": "Ihr seid meine Freunde.", "ar": "أنتم أصدقائي. (ihr هنا ضمير فاعل لأنّ بعده فعلاً)"},
        {"de": "Unsere Familie ist groß.", "ar": "عائلتنا كبيرة. (unser + ‑e لأنّ Familie مؤنّثة)"},
      ],
      comparisonWithArabic:
        "**١. العربية تحسم بلاحقةٍ واحدة، والألمانية بكلمةٍ ذات وجهين.** «أمّه» و«أمّها»: الهاء تحدّد المالك، والاسم لا يتغيّر. أمّا الألمانية فتُدخل معلومتين في الكلمة الواحدة: جذرها للمالك ونهايتها للمملوك. فالعربي مطالبٌ بمعالجة **متغيّرين في آنٍ واحد** بينما لغته الأمّ عوّدته على واحد. وهذا هو مصدر البطء والتردّد عند الكلام، لا نقص الحفظ.\n\n**٢. التقاطع الذي يربك الأذن العربية.** العربي يسمع sein**e** فيتوقّع مالكاً مؤنّثاً — لأنّ التاء والألف في لغته علامات تأنيثٍ للمالك. لكنّ ‑e الألمانية علامةٌ للمملوك. فالنتيجة أنّه يفهم seine Mutter على أنّها «أمّها» وهي «أمّه». ولا علاج لهذا إلا التدريب الواعي المتكرّر على الفصل بين الجذر والنهاية بوصفهما رسالتين منفصلتين.\n\n**٣. مصيدة ihr لا نظير لها إطلاقاً.** العربية لا تجمع في لفظٍ واحد بين «ـها» و«ـهم» و«أنتم». والألمانية تفعل، ثمّ تضيف Ihr الرسمية بحرفٍ كبير. فأربعة معانٍ في أربعة أحرف. والحلّ التشغيلي الذي لا يخيب: **انظر إلى ما بعد ihr** — اسمٌ فهي ملكية، فعلٌ فهي «أنتم».\n\n**٤. الرسمية معكوسة الاتّجاه.** العربية ترفع الكلفة بالجمع («حضرتكم تفضّلوا»). والألمانية ترفعها بضمير الغائب الجمع Sie/Ihr — أي تخاطبك بصيغة «هم» لا «أنتم». فالمنطق مختلف: العربية تُعظّم بالعدد، والألمانية تُبعِد بالمسافة الضميرية. ومَن استعمل dein مع مديره أو طبيبه ارتكب خطأً اجتماعياً أثقل بكثير من أيّ خطأ نحوي في هذا الدرس.",
      eselsbruecke:
        "**«الجذر للمالك، والنهاية للمملوك»** — سبع كلمات تحلّ الباب كلّه. وللتمييز الصوتي بين sein و ihr استعن بالإنجليزية إن كنت تعرفها: **sein ≈ his** (وكلاهما يبدأ بصوتٍ يوحي بالمذكّر)، و**ihr ≈ her** (وكلاهما فيه صوت r). وللمصيدة الثلاثية: **ihr + اسم = ملكية، ihr + فعل = أنتم**.",
      commonMistakes: [
        {"wrong": "Lena und ihre Vater", "right": "Lena und ihr Vater", "whyAr": "أُضيفت ‑e لأنّ المالكة أنثى، وهذا خلطٌ بين وظيفتي الكلمة. الجذر ihr هو الذي يحمل معلومة «هي»؛ أمّا النهاية فتنظر إلى Vater وهو مذكّر، فتبقى الأداة عاريةً. الجذر للمالك والنهاية للمملوك — دائماً."},
        {"wrong": "Ali und sein Mutter", "right": "Ali und seine Mutter", "whyAr": "الخطأ المعاكس تماماً: أُهملت النهاية لأنّ المالك ذكر. لكنّ Mutter مؤنّثة فتوجب ‑e مهما كان مالكها. والمعيار الوحيد للنهاية هو الكلمة التي بعدها، لا الشخص الذي قبلها."},
        {"wrong": "Ihr seid mein Schwester.", "right": "Ihr seid meine Schwestern. / Das ist meine Schwester.", "whyAr": "خلطٌ ثلاثي شائع: ihr هنا ضمير فاعل بمعنى «أنتم» (بدليل الفعل seid بعده)، والمملوك Schwester مؤنّث فيلزمه meine، والجمع يقتضي Schwestern. والدرس المستفاد: حين ترى ihr انظر إلى ما بعدها قبل أن تحكم عليها."},
        {"wrong": "Frau Weber, wie heißt deine Tochter?", "right": "Frau Weber, wie heißt Ihre Tochter?", "whyAr": "خطأٌ اجتماعي لا نحوي، وهو أثقل وقعاً. مخاطبة شخصٍ بلقب Frau/Herr توجب الصيغة الرسمية Ihr‑ بحرفٍ كبير. واستعمال dein مع شخصٍ غريب أو أكبر سنّاً أو في سياق رسمي يُسمع وقاحةً، ولو كانت النهاية صحيحة تماماً."},
      ],
      relatedRuleComparison: {
        "title": "أين نحن من نظام الحالات؟ خريطة الطريق",
        "content": "كلّ ما في هذا الدرس مقصورٌ على **حالة الرفع (Nominativ)** — أي مع الفاعل وما بعد الأفعال الرابطة sein/heißen/werden. ولهذا كانت النهايات بسيطة: صفرٌ للمذكّر والمحايد، و‑e للمؤنّث والجمع. لكنّ الأداة نفسها ستتغيّر مرّتين بعد اليوم: في **النصب (Akkusativ)** يأخذ **المذكّر وحده** نهاية ‑en (Ich sehe meinen Vater)، وتبقى الخانات الثلاث الأخرى كما هي — أي أنّ تعلّم النصب سيكلّفك خانةً واحدة لا أكثر. وفي **الجرّ (Dativ)** تتغيّر الخانات الأربع (meinem/meiner/meinem/meinen). فما تحفظه اليوم ليس مؤقّتاً بل هو **الأساس الذي تُبنى عليه بقيّة الجدول**، وثلاثة أرباعه سيبقى صحيحاً في الدرس القادم. أتقنه الآن إتقاناً تامّاً واستثمر فيه لاحقاً."
      },
    },
  ],

  /* 4) الاستماع */
  reading: {
    "id": "read-a1-02",
    "titleDe": "Eine Fotografie aus Kairouan",
    "titleAr": "صورة من القيروان",
    "textType": "erzaehlung",
    "paragraphs": [
      "Hallo, ich bin Amira. Hier ist ein Foto von meiner Familie. Das Foto ist alt, aber ich liebe es sehr. Wir sind in Kairouan, im Haus von meinen Großeltern. Meine Familie ist groß und wir sind oft zusammen.",
      "Links steht mein Vater. Er heißt Karim und er ist Lehrer. Neben ihm sitzt meine Mutter Leila. Sie ist Ärztin und sie arbeitet in einem Krankenhaus. Meine Eltern sind seit fünfundzwanzig Jahren verheiratet und sie sind immer sehr freundlich.",
      "Ich habe zwei Geschwister: einen Bruder und eine Schwester. Mein Bruder heißt Youssef. Er ist neunzehn Jahre alt und er studiert in Tunis. Seine Freundin heißt Sonia und sie studiert auch dort. Meine Schwester Nour ist noch klein. Sie ist sieben und sie geht in die Schule.",
      "Rechts auf dem Foto sind meine Großeltern. Mein Opa ist achtzig Jahre alt, aber er arbeitet immer noch im Garten. Seine Frau, meine Oma, kocht sehr gut. Ihr Couscous ist berühmt in der Familie! Auch meine Tante ist da. Ihr Mann ist nicht auf dem Foto, denn er fotografiert.",
      "Und ich? Ich stehe in der Mitte und ich lache. Heute wohne ich in Deutschland und meine Familie ist weit weg. Aber jeden Sonntag telefoniere ich mit meinen Eltern. Dann fragt meine Mutter immer: Wie geht es dir, mein Kind?"
    ],
    "paragraphsAr": [
      "مرحباً، أنا أميرة. هذه صورة لعائلتي. الصورة قديمة لكنّني أحبّها كثيراً. نحن في القيروان، في بيت جدَّيّ. عائلتي كبيرة ونجتمع كثيراً.",
      "على اليسار يقف أبي. اسمه كريم وهو معلّم. بجانبه تجلس أمّي ليلى. هي طبيبة وتعمل في مستشفى. والداي متزوّجان منذ خمس وعشرين سنة وهما ودودان دائماً.",
      "لي أخوان: أخ وأخت. أخي اسمه يوسف. عمره تسعة عشر عاماً ويدرس في تونس. صديقته اسمها سنية وتدرس هناك أيضاً. أختي نور ما زالت صغيرة. عمرها سبع سنوات وتذهب إلى المدرسة.",
      "على يمين الصورة جدّاي. جدّي عمره ثمانون سنة، ومع ذلك ما زال يعمل في الحديقة. زوجته، جدّتي، تطبخ طبخاً ممتازاً. كسكسيها مشهور في العائلة! وخالتي حاضرة أيضاً. زوجها ليس في الصورة لأنّه هو المصوّر.",
      "وأنا؟ أقف في الوسط وأضحك. أسكن اليوم في ألمانيا وعائلتي بعيدة. لكنّني أتّصل بوالديّ كلّ يوم أحد. وحينها تسألني أمّي دائماً: كيف حالك يا ولدي؟"
    ],
    "glossary": [
      {
        "de": "das Foto",
        "ar": "الصورة",
        "noteAr": "محايدة، والجمع die Fotos بنهاية ‑s لأنّها كلمة دخيلة. وتُكتب أيضاً Photo في النصوص القديمة."
      },
      {
        "de": "die Großeltern",
        "ar": "الجدّان",
        "noteAr": "جمعٌ دائماً كـ Eltern، ولا مفرد له. والمفردان: der Großvater و die Großmutter."
      },
      {
        "de": "der Lehrer / die Ärztin",
        "ar": "المعلّم / الطبيبة",
        "noteAr": "المهن تأتي بعد sein بلا أداة: Er ist Lehrer. والمؤنّث بالنهاية ‑in: der Arzt ⟵ die Ärztin (مع إمالة)."
      },
      {
        "de": "verheiratet",
        "ar": "متزوّج",
        "noteAr": "صفة تُستعمل مع sein: Sie sind verheiratet. وضدّها ledig (أعزب) — وكلتاهما تردان في استمارة Familienstand."
      },
      {
        "de": "studieren",
        "ar": "يدرس (في الجامعة)",
        "noteAr": "يخصّ الدراسة الجامعية. أمّا التلميذ في المدرسة فيقال عنه: Er geht in die Schule أو er lernt."
      },
      {
        "de": "immer noch",
        "ar": "ما زال / لا يزال",
        "noteAr": "تعبير من كلمتين يفيد استمرار الحال خلافاً للمتوقّع. وموضعه بعد الفعل: Er arbeitet immer noch."
      },
      {
        "de": "berühmt",
        "ar": "مشهور",
        "noteAr": "صفة. ويُقال berühmt für etwas (مشهور بشيء) أو berühmt in (مشهور في نطاق)."
      },
      {
        "de": "in der Mitte",
        "ar": "في الوسط",
        "noteAr": "تعبير مكاني ثابت. وأخواته: links (يسار)، rechts (يمين)، oben (أعلى)، unten (أسفل) — وكلّها مفيدة لوصف الصور."
      },
      {
        "de": "weit weg",
        "ar": "بعيد",
        "noteAr": "تعبير من كلمتين، وضدّه in der Nähe (قريب). وتُستعمل مع sein: Die Familie ist weit weg."
      },
      {
        "de": "telefonieren mit",
        "ar": "يتّصل هاتفياً بـ",
        "noteAr": "الحرف mit يجرّ ما بعده حتماً: mit meinen Eltern. وستدرس هذا في باب الجرّ (Dativ)."
      },
      {
        "de": "jeden Sonntag",
        "ar": "كلّ يوم أحد",
        "noteAr": "ظرف زمان في حالة النصب. والنمط عامّ: jeden Tag, jeden Montag, jede Woche."
      },
      {
        "de": "die Freundin",
        "ar": "الصديقة / الخليلة",
        "noteAr": "غامضة عمداً: قد تعني صديقةً وقد تعني شريكة حياة. والسياق يحسم، ويُوضَّح بـ eine Freundin (صديقة) مقابل meine Freundin (خليلتي)."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "اقرأ الفقرة الثانية واختر:",
        "questionDe": "Was ist Amiras Mutter von Beruf?",
        "questionAr": "ما مهنة أمّ أميرة؟",
        "options": [
          "Sie ist Lehrerin",
          "Sie ist Ärztin",
          "Sie ist Studentin",
          "Sie arbeitet im Garten"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «meine Mutter Leila. Sie ist Ärztin». والفخّ أنّ مهنة المعلّم ذُكرت في الجملة السابقة مباشرةً لكنّها للأب كريم، والعمل في الحديقة للجدّ. فتتبّع الضمير sie لا الكلمة الأقرب.",
        "optionExplanations": [
          "المعلّم هو الأب كريم.",
          undefined,
          "الطالبان هما يوسف وسنية.",
          "العمل في الحديقة للجدّ في الفقرة الرابعة."
        ],
        "errorType": "vocabulary",
        "paragraph": 1
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الثالثة — انتبه لأداة الملكية:",
        "questionDe": "Warum heißt es «seine Freundin» und nicht «ihre Freundin»?",
        "questionAr": "لماذا قيل seine Freundin لا ihre Freundin؟",
        "options": [
          "Weil Freundin feminin ist",
          "Weil der Besitzer Youssef ist, also maskulin",
          "Weil Sonia studiert",
          "Weil Amira das sagt"
        ],
        "correctIndex": 1,
        "explanation": "الجذر يُختار بحسب المالك، ومالك الصديقة هو يوسف وهو مذكّر ⟵ الجذر sein. أمّا النهاية ‑e فهي التي جاءت من تأنيث Freundin. فالكلمة تحمل رسالتين: جذرها يقول «مالكها رجل»، ونهايتها تقول «المملوك مؤنّث».",
        "optionExplanations": [
          "تأنيث Freundin يفسّر النهاية ‑e لا الجذر sein.",
          undefined,
          "دراستها لا علاقة لها بالأداة.",
          "المتكلّم لا يؤثّر في أداة الملكية إطلاقاً."
        ],
        "errorType": "pronoun",
        "paragraph": 2
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الرابعة — من غير موجود في الصورة؟",
        "questionDe": "Wer ist nicht auf dem Foto?",
        "questionAr": "من ليس في الصورة؟",
        "options": [
          "Die Oma",
          "Die Tante",
          "Der Mann der Tante",
          "Der Opa"
        ],
        "correctIndex": 2,
        "explanation": "النصّ يقول: «Ihr Mann ist nicht auf dem Foto, denn er fotografiert». وكلمة ihr هنا ملكية تعود على الخالة، لأنّ بعدها اسماً لا فعلاً. أمّا الجدّ والجدّة والخالة فكلّهم مذكورون حاضرين.",
        "optionExplanations": [
          "الجدّة حاضرة وتطبخ الكسكسي.",
          "الخالة حاضرة صراحةً: Auch meine Tante ist da.",
          undefined,
          "الجدّ حاضر وعمره ثمانون."
        ],
        "errorType": "vocabulary",
        "paragraph": 3
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "احسب من الفقرة الثالثة:",
        "questionDe": "Wie viele Geschwister hat Amira?",
        "questionAr": "كم أخاً وأختاً لأميرة؟",
        "options": [
          "Ein Geschwister",
          "Zwei Geschwister",
          "Drei Geschwister",
          "Keine Geschwister"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Ich habe zwei Geschwister: einen Bruder und eine Schwester». وكلمة Geschwister جامعة تشمل الذكور والإناث معاً، ولا مفرد لها — فلا يُقال ein Geschwister إطلاقاً.",
        "optionExplanations": [
          "Geschwister جمع لا مفرد له، فالصيغة نفسها خاطئة.",
          undefined,
          "الثلاثة تشمل أميرة نفسها، وهي ليست من إخوتها.",
          "لها أخ وأخت صراحةً."
        ],
        "errorType": "plural",
        "paragraph": 2
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الأخيرة — افهم الموقف:",
        "questionDe": "Wie hält Amira Kontakt zu ihrer Familie?",
        "questionAr": "كيف تبقى أميرة على تواصل مع عائلتها؟",
        "options": [
          "Sie besucht sie jeden Monat",
          "Sie schreibt jeden Tag Briefe",
          "Sie telefoniert jeden Sonntag mit ihren Eltern",
          "Sie wohnt bei ihren Großeltern"
        ],
        "correctIndex": 2,
        "explanation": "النصّ: «jeden Sonntag telefoniere ich mit meinen Eltern». ولاحظ ترتيب الكلمات: ظرف الزمان في المركز الأوّل فانزاح الفاعل ich بعد الفعل — وهي قاعدة المركز الثاني التي درستَها في الدرس الأوّل.",
        "optionExplanations": [
          "لم تُذكر زيارات؛ العائلة weit weg.",
          "لم تُذكر رسائل بل مكالمات.",
          undefined,
          "كانت تلك الصورة قديمة؛ أميرة تسكن اليوم في ألمانيا."
        ],
        "errorType": "word-order",
        "paragraph": 4
      }
    ],
    "redemittel": [
      {
        "de": "Das ist ein Foto von meiner Familie.",
        "ar": "هذه صورة لعائلتي."
      },
      {
        "de": "Links steht … / Rechts sitzt … / In der Mitte bin ich.",
        "ar": "على اليسار يقف… / على اليمين يجلس… / في الوسط أنا."
      },
      {
        "de": "Ich habe zwei Geschwister: einen Bruder und eine Schwester.",
        "ar": "لي أخوان: أخ وأخت."
      },
      {
        "de": "Meine Mutter ist Ärztin und mein Vater ist Lehrer.",
        "ar": "أمّي طبيبة وأبي معلّم."
      },
      {
        "de": "Meine Eltern sind seit … Jahren verheiratet.",
        "ar": "والداي متزوّجان منذ … سنة."
      },
      {
        "de": "Jeden Sonntag telefoniere ich mit meiner Familie.",
        "ar": "أتّصل بعائلتي كلّ يوم أحد."
      }
    ],
    "discussionAr": "صِف صورةً حقيقية من هاتفك بالألمانية على منوال أميرة: ابدأ بـ Das ist ein Foto von…، ثمّ وزّع الأشخاص بـ links / rechts / in der Mitte، واذكر لكلٍّ اسمه وعمره ومهنته وصلته بك. اشترط على نفسك استعمال mein/meine ستّ مرّات على الأقلّ، وsein أو ihr مرّتين حين تتحدّث عن ملكية شخصٍ آخر. ثمّ راجع: هل نظرتَ إلى الكلمة التي بعد الأداة في كلّ مرّة؟"
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "حديث عن العائلة",
        lines: [
          { speaker: "Mona", de: "Hallo Karim! Hast du Geschwister?", ar: "مرحباً كريم! هل لديك إخوة؟" },
          { speaker: "Karim", de: "Ja, ich habe einen Bruder und eine Schwester.", ar: "نعم، لدي أخ وأخت." },
          { speaker: "Mona", de: "Wie heißen sie?", ar: "ما اسماهما؟" },
          { speaker: "Karim", de: "Mein Bruder heißt Youssef und meine Schwester heißt Nour.", ar: "أخي اسمه يوسف وأختي اسمها نور." },
          { speaker: "Mona", de: "Und deine Eltern?", ar: "ووالداك؟" },
          { speaker: "Karim", de: "Meine Eltern wohnen in Tunis.", ar: "والداي يسكنان في تونس." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie viele Geschwister hat Karim?",
        questionAr: "كم عدد إخوة كريم؟",
        options: ["einen Bruder und eine Schwester", "zwei Brüder", "eine Schwester", "keine Geschwister"],
        correctIndex: 0,
        explanation: "قال كريم: ich habe einen Bruder und eine Schwester — أخ واحد وأخت واحدة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo wohnen die Eltern von Karim?",
        questionAr: "أين يسكن والدا كريم؟",
        options: ["in Sousse", "in Tunis", "in Berlin", "in Kairouan"],
        correctIndex: 1,
        explanation: "قال كريم: Meine Eltern wohnen in Tunis.",
        errorType: "vocabulary",
      },
    ],
  },

  /* 5) النطق */
  pronunciation: {
    id: "p1",
    title: "صوت ch والأصوات في كلمات العائلة",
    items: [
      { de: "ich", ar: "أنا", note: "ch بعد i تُنطق «ش» خفيفة جداً (أقرب إلى «خ» ناعمة): إيخ" },
      { de: "Bruder", ar: "الأخ", note: "الأصلي u يُنطق «وُو»: برو-در" },
      { de: "Schwester", ar: "الأخت", note: "sch تُنطق «ش»: شڤيس-تر" },
      { de: "Tochter", ar: "الابنة", note: "ch بعد o تُنطق «خ» حلقية: توخ-تر" },
      { de: "Geschwister", ar: "الإخوة", note: "ge في البداية تُنطق «غِ» خفيفة: غِشڤيس-تر" },
    ],
    tip: "الصوت ch هو الأصعب للعرب لأن له نطقين: «ش ناعمة» بعد i/e، و«خ» بعد a/o/u. استمع وكرر.",
    shadowing: [
      { de: "Mein Bruder heißt Youssef.", ar: "أخي اسمه يوسف.", tip: "Mein = مايْن (ei = آي)" },
      { de: "Meine Schwester heißt Nour.", ar: "أختي اسمها نور.", tip: "Meine = ماي-نِه" },
      { de: "Meine Eltern wohnen in Tunis.", ar: "والداي يسكنان في تونس.", tip: "wohnen = ڤوه-نِن (wo تنطق ڤو)" },
      { de: "Das ist meine Familie!", ar: "هذه عائلتي!", tip: "Familie = فا-مي-ليِه (3 مقاطع)" },
    ],
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة: من هو هذا الشخص؟",
      prompt: "Das ist mein Vater. (أكمل: ما اسمه؟ اكتب الجملة كاملة)",
      acceptedAnswers: ["Mein Vater heißt Ahmed", "Mein Vater heißt Ahmed.", "Er heißt Ahmed"],
      sampleAnswer: "Mein Vater heißt Ahmed.",
      explanation: "لتقديم شخص: Das ist mein + صلة القرابة. ولذكر الاسم: (الاسم) heißt.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ mein أو meine:",
      template: "Das ist ___ Vater. Das ist ___ Mutter. Das ist ___ Kind.",
      blanks: [
        { correct: "mein", options: ["mein", "meine"] },
        { correct: "meine", options: ["mein", "meine"] },
        { correct: "mein", options: ["mein", "meine"] },
      ],
      explanation: "Vater مذكر → mein. Mutter مؤنث → meine. Kind محايد → mein.",
      errorType: "gender",
    },
  ],

  /* 7) بنك التدريبات */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das ist ___ Mutter.",
      questionAr: "هذه أمي.",
      options: ["mein", "meine", "dein", "deine"],
      correctIndex: 1,
      explanation: "Mutter مؤنثة (die Mutter) → meine Mutter.",
      optionExplanations: [
        "mein تأتي مع الأسماء المذكرة/المحايدة، وMutter مؤنثة.",
        undefined,
        "dein تعني «لكَ» وليست ملكية المتكلم.",
        "deine تعني «لكِ» — نحتاج meine هنا.",
      ],
      errorType: "gender",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Hast du Geschwister?",
      questionAr: "ما معنى السؤال؟",
      options: ["هل لديك إخوة؟", "هل تحب عائلتك؟", "كم عمرك؟", "أين والدك؟"],
      correctIndex: 0,
      explanation: "Hast du = هل لديكَ، Geschwister = إخوة (جمع).",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Das", "ist", "mein", "Vater", "."],
      correctSentence: "Das ist mein Vater.",
      explanation: "Das ist (هذا هو) + mein Vater (أبي) — ترتيب مباشر ومألوف.",
      errorType: "word-order",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين سؤال صحيح:",
      tokens: ["du", "Geschwister", "Hast", "?"],
      correctSentence: "Hast du Geschwister?",
      explanation: "سؤال نعم/لا: الفعل أولاً — Hast (1) + du (2) + Geschwister.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "matching",
      instructionAr: "صل كلمة العائلة بمعناها:",
      pairs: [
        { left: "der Bruder", right: "الأخ" },
        { left: "die Schwester", right: "الأخت" },
        { left: "die Eltern", right: "الوالدان" },
        { left: "die Tochter", right: "الابنة" },
        { left: "der Sohn", right: "الابن" },
      ],
      explanation: "ثنائيات متقابلة: Bruder/Schwester وSohn/Tochter. تذكّرها كثنائيات!",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Mein Mutter heißt Leila.",
      wrongWord: "Mein",
      correctWord: "Meine",
      options: ["Meine", "Dein", "Mein", "Ihr"],
      explanation: "Mutter مؤنثة → Meine Mutter. هذا أشهر خطأ للمتعلم العربي في هذا الدرس.",
      errorType: "gender",
    },
    {
      id: "e7",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ بـ mein أو meine:",
      template: "___ Bruder ist zehn Jahre alt. ___ Schwester heißt Nour. ___ Eltern sind nett.",
      blanks: [
        { correct: "Mein", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
      ],
      explanation: "Bruder (مذكر) → Mein. Schwester (مؤنث) → Meine. Eltern (جمع) → Meine.",
      errorType: "gender",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه:",
      audioText: "Meine Schwester heißt Nour.",
      explanation: "الجملة الصحيحة: Meine Schwester heißt Nour — لاحظ meine لأن Schwester مؤنثة.",
      errorType: "spelling",
    },
    {
      id: "e9",
      type: "multiple-choice",
      instructionAr: "أكمل: الحديث عن عائلة شخص آخر.",
      questionDe: "Lena ist meine Freundin. ___ Vater arbeitet in Berlin.",
      questionAr: "لينا صديقتي. أبوها يعمل في برلين.",
      options: ["Ihr", "Ihre", "Sein", "Seine"],
      correctIndex: 0,
      explanation: "المالكة أنثى (Lena) ⇒ الجذر ihr. والمملوك Vater مذكر (der) ⇒ بلا ـe: Ihr Vater.",
      optionExplanations: [
        undefined,
        "الجذر صحيح لكنّ الـ ـe زائدة: Vater مذكر لا مؤنث. النهاية تتبع المملوك لا المالكة.",
        "sein تعني «له»، والمالكة هنا لينا.",
        "خطآن معاً: الجذر للمذكر والنهاية للمؤنث.",
      ],
      errorType: "pronoun",
    },
    {
      id: "e10",
      type: "fill-blank",
      instructionAr: "أكمل بالأداة المناسبة (انتبه: مَن المالك؟ وما جنس المملوك؟).",
      template: "Das ist Ali. ___ Bruder heißt Omar und ___ Schwester heißt Mona. Und du? Ist das ___ Vater?",
      blanks: [
        { correct: "Sein", options: ["Sein", "Seine", "Ihr"] },
        { correct: "seine", options: ["sein", "seine", "ihre"] },
        { correct: "dein", options: ["dein", "deine", "sein"] },
      ],
      explanation: "علي مذكر ⇒ الجذر sein في الأولَيَين. Bruder مذكر ⇒ Sein بلا ـe؛ Schwester مؤنث ⇒ seine. ثم خاطبناك أنت ⇒ dein، وVater مذكر ⇒ بلا ـe.",
      errorType: "pronoun",
    },
    {
      id: "e11",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Fatma wohnt in Sousse. Ihre Bruder studiert in Tunis.",
      wrongWord: "Ihre",
      correctWord: "Ihr",
      options: ["Ihr", "Seine", "Ihre", "Deine"],
      explanation: "الفخّ المتوقّع: المالكة أنثى فيُظنّ أنّ الأداة تأخذ ـe. لكنّ النهاية تتبع المملوك: Bruder مذكر (der) ⇒ Ihr Bruder.",
      errorType: "pronoun",
    },
    {
      id: "e12",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال صحيح:",
      tokens: ["Ist", "das", "deine", "Schwester", "?"],
      correctSentence: "Ist das deine Schwester?",
      explanation: "السؤال بلا أداة استفهام يبدأ بالفعل: Ist das …? والمملوك Schwester مؤنث ⇒ deine.",
      errorType: "word-order",
    },
    {"id": "e13", "type": "fill-blank", "instructionAr": "أكمل بأداة الملكية المناسبة:", "template": "Lena ist meine Freundin. ___ Vater arbeitet in Berlin.", "blanks": [{"correct": "Ihr", "options": ["Ihr", "Ihre", "Sein", "Seine"]}], "explanation": "المالكة لينا وهي مؤنّثة ⟵ الجذر ihr. والمملوك Vater مذكّر ⟵ بلا نهاية. فالنتيجة Ihr Vater. الجذر للمالك والنهاية للمملوك.", "errorType": "pronoun"},
    {"id": "e14", "type": "multiple-choice", "instructionAr": "اختر الجملة الصحيحة كلّياً:", "questionDe": "Welcher Satz ist richtig?", "questionAr": "أيّ جملة صحيحة؟", "options": ["Ali und sein Mutter wohnen hier", "Ali und seine Mutter wohnen hier", "Ali und ihre Mutter wohnen hier", "Ali und seine Mutter wohnt hier"], "correctIndex": 1, "explanation": "المالك علي مذكّر ⟵ sein؛ والمملوك Mutter مؤنّث ⟵ النهاية ‑e؛ والفاعل مثنّى (علي وأمّه) ⟵ الفعل بالجمع wohnen.", "optionExplanations": ["نقصت النهاية ‑e التي يوجبها تأنيث Mutter.", undefined, "ihre تعني «أمّها» والمالك هنا علي.", "الأداة صحيحة لكنّ الفعل يجب أن يكون جمعاً: wohnen."], "errorType": "pronoun"},
    {"id": "e15", "type": "error-correction", "instructionAr": "صحّح الخطأ في مخاطبة رسمية:", "wrongSentence": "Frau Weber, wie heißt deine Tochter?", "wrongWord": "deine", "correctWord": "Ihre", "options": ["Ihre", "seine", "meine", "eure"], "explanation": "مخاطبة شخصٍ بلقب Frau أو Herr توجب الصيغة الرسمية Ihr‑ بحرفٍ كبير. والمملوك Tochter مؤنّث فتلزمه النهاية ‑e: Ihre Tochter.", "errorType": "pronoun"},
    {"id": "e16", "type": "word-ordering", "instructionAr": "رتّب الكلمات لتكوّن جملة صحيحة:", "tokens": ["Meine", "Großeltern", "wohnen", "in", "Kairouan", "."], "correctSentence": "Meine Großeltern wohnen in Kairouan .", "explanation": "Großeltern جمع ⟵ الأداة meine بالنهاية ‑e والفعل wohnen بالنهاية ‑en. والفعل في المركز الثاني بعد الفاعل المركّب.", "errorType": "word-order"},
    {"id": "e17", "type": "matching", "instructionAr": "طابق كلّ كلمة بجمعها:", "pairs": [{"left": "der Vater", "right": "die Väter"}, {"left": "die Mutter", "right": "die Mütter"}, {"left": "der Bruder", "right": "die Brüder"}, {"left": "die Schwester", "right": "die Schwestern"}, {"left": "der Sohn", "right": "die Söhne"}, {"left": "die Tochter", "right": "die Töchter"}], "explanation": "أربع كلماتٍ تُجمع بالإمالة وحدها (Väter, Mütter, Brüder, Töchter)، وواحدة بالنهاية وحدها (Schwestern)، وواحدة بالاثنتين معاً (Söhne). فثلاثة أنماط جمعٍ في ستّ كلمات.", "errorType": "plural"},
  ],

  /* 8) الأخطاء والتريكات */
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "mein Mutter / mein Schwester",
        right: "meine Mutter / meine Schwester",
        whyAr: "الأسماء المؤنثة (die) تأخذ meine دائماً. المرأة والأنثى = e في النهاية!",
      },
      {
        wrong: "Meine Eltern ist nett.",
        right: "Meine Eltern sind nett.",
        whyAr: "Eltern جمع → الفعل بصيغة الجمع sind.",
      },
      {
        wrong: "Ich habe ein Bruder.",
        right: "Ich habe einen Bruder.",
        whyAr: "بعد الفعل haben (يملك) يأتي الاسم المذكر بحالة النصب (Akkusativ): einen Bruder. (سنفصل هذا في دروس لاحقة — فقط لاحظ الآن).",
      },
    ],
    eselsbruecken: [
      "«mein مع der/das، meine مع die» — كررها كلما شككت. والأنثى في العربية «هي» = e في نهاية meine!",
      "ثنائيات العائلة: Vater/Mutter, Bruder/Schwester, Sohn/Tochter, Opa/Oma.",
    ],
    culturalNote: {
      title: "العائلة في الثقافة الألمانية",
      content:
        "كلمة die Familie تشمل الأب والأم والأطفال فقط عادةً. أما الأقارب الأوسع (العم، الخالة...) فقد أصبحوا «Schwiegerfamilie» للأصهار. ولا تتفاجأ إن سألك ألماني عن عدد إخوتك مباشرة — السؤال عن العائلة عادي وودّي في أول لقاء.",
    },
  },

  /* 9) التقييم الختامي */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das ist ___ Vater.",
      options: ["mein", "meine", "deine", "eine"],
      correctIndex: 0,
      explanation: "Vater مذكر → mein Vater. (deine/eine مع مؤنث أو أسماء أخرى).",
      errorType: "gender",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ heißt deine Schwester? — Sie heißt Mona.",
      options: ["Was", "Wie", "Wo", "Wer"],
      correctIndex: 1,
      explanation: "السؤال عن الاسم: Wie heißt deine Schwester?",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات:",
      tokens: ["eine", "Schwester", "Ich", "habe", "."],
      correctSentence: "Ich habe eine Schwester.",
      explanation: "لدي أخت: Ich (1) + habe (2) + eine Schwester (المفعول).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل بـ mein/meine:",
      template: "___ Opa wohnt in Kairouan. ___ Oma wohnt in Tunis.",
      blanks: [
        { correct: "Mein", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
      ],
      explanation: "Opa مذكر → Mein Opa. Oma مؤنث → Meine Oma.",
      errorType: "gender",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Meine Vater heißt Ahmed.",
      wrongWord: "Meine",
      correctWord: "Mein",
      options: ["Mein", "Meine", "Deine", "Ihre"],
      explanation: "Vater مذكر → Mein Vater. قلب القاعدة: meine مع المؤنث.",
      errorType: "gender",
    },
  ],

  /* 10) البطاقات */
  flashcards: [
    { id: "fc1", de: "die Familie", ar: "العائلة", example: "Meine Familie ist groß.", exampleAr: "عائلتي كبيرة.", level: "A1" },
    { id: "fc2", de: "der Vater / die Mutter", ar: "الأب / الأم", example: "Mein Vater und meine Mutter.", exampleAr: "أبي وأمي.", level: "A1" },
    { id: "fc3", de: "der Bruder / die Schwester", ar: "الأخ / الأخت", example: "Ich habe einen Bruder.", exampleAr: "لدي أخ.", level: "A1" },
    { id: "fc4", de: "die Eltern", ar: "الوالدان", example: "Meine Eltern sind nett.", exampleAr: "والداي لطيفان.", level: "A1" },
    { id: "fc5", de: "die Geschwister", ar: "الإخوة (جمع)", example: "Hast du Geschwister?", exampleAr: "هل لديك إخوة؟", level: "A1" },
    { id: "fc6", de: "der Sohn / die Tochter", ar: "الابن / الابنة", example: "Das ist mein Sohn.", exampleAr: "هذا ابني.", level: "A1" },
    { id: "fc7", de: "mein / meine", ar: "لي (حسب الجنس)", example: "mein Vater, meine Mutter", exampleAr: "أبي، أمي", level: "A1" },
    { id: "fc8", de: "der Opa / die Oma", ar: "الجد / الجدة", example: "Mein Opa ist achtzig Jahre alt.", exampleAr: "جدي عمره ثمانون عاماً.", level: "A1" },
    { id: "fc9", de: "dein / deine", ar: "لكَ/لكِ (حسب جنس المملوك)", example: "Ist das dein Bruder?", exampleAr: "هل هذا أخوك؟", level: "A1" },
    { id: "fc10", de: "sein / ihr", ar: "له / لها", example: "Sein Vater und ihr Vater.", exampleAr: "أبوه وأبوها.", level: "A1" },
    {"id": "fc11", "de": "die Großeltern", "ar": "الجدّان", "example": "Meine Großeltern wohnen in Kairouan.", "exampleAr": "جدّاي يسكنان في القيروان.", "level": "A1"},
    {"id": "fc12", "de": "verheiratet / ledig", "ar": "متزوّج / أعزب", "example": "Meine Eltern sind verheiratet.", "exampleAr": "والداي متزوّجان.", "level": "A1"},
    {"id": "fc13", "de": "unser / euer / Ihr", "ar": "لنا / لكم / لحضرتك (رسمي)", "example": "Unsere Familie ist groß.", "exampleAr": "عائلتنا كبيرة.", "level": "A1"},
    {"id": "fc14", "de": "Väter, Mütter, Brüder, Töchter", "ar": "جموعٌ بالإمالة وحدها", "example": "Ich habe zwei Brüder.", "exampleAr": "لي أخوان.", "level": "A1"},
    {"id": "fc15", "de": "das Kind (محايد!)", "ar": "الطفل — محايد مهما كان جنسه", "example": "Mein Kind heißt Nour.", "exampleAr": "طفلي اسمه نور.", "level": "A1"},
    { id: "fc16", de: "das Haus", ar: "البيت", example: "Unser Haus ist groß.", exampleAr: "بيتنا كبير.", level: "A1" },
    { id: "fc17", de: "zusammen", ar: "معاً", example: "Wir wohnen zusammen.", exampleAr: "نسكن معاً.", level: "A1" },
    { id: "fc18", de: "neben", ar: "بجانب", example: "Er sitzt neben seiner Schwester.", exampleAr: "يجلس بجانب أخته.", level: "A1" },
    { id: "fc19", de: "sitzen", ar: "يجلس", example: "Meine Oma sitzt im Wohnzimmer.", exampleAr: "جدّتي تجلس في غرفة المعيشة.", level: "A1" },
    { id: "fc20", de: "stehen", ar: "يقف", example: "Mein Vater steht links.", exampleAr: "أبي يقف على اليسار.", level: "A1" },
    { id: "fc21", de: "das Krankenhaus", ar: "المستشفى", example: "Meine Mutter arbeitet im Krankenhaus.", exampleAr: "أمّي تعمل في المستشفى.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-02-1", type: "relay-instructions",
      titleAr: "انقل وصف عائلة بالعربية لصديق",
      sourceDe: "Mein Vater heißt Ahmed und ist 50 Jahre alt. Meine Mutter heißt Leila. Ich habe einen Bruder und zwei Schwestern.",
      taskAr: "أخبر صديقاً بالعربية عن عائلة الشخص: الأسماء، الأعمار، وعدد الإخوة والأخوات.",
      modelAnswerAr: "«والده اسمه أحمد وعمره 50 عاماً. أمه اسمها ليلى. لديه أخ واحد وأختان.»",
      keyPointsAr: ["ذكرت اسم الأب وعمره", "ذكرت اسم الأم", "ذكرت عدد الإخوة والأخوات بدقة"],
    },
  ],
      interaction: [
    {
      id: "int-a1-02-1",
      scenarioAr: "زميل جديد يسألك عن عائلتك.",
      scenarioDe: "Ein neuer Kollege fragt nach deiner Familie.",
      strategyAr: "الاستراتيجية: وصف أفراد العائلة والإجابة عن أسئلة المتابعة.",
      rounds: [
        {
          speakerDe: "Hast du Geschwister?",
          speakerAr: "هل لديك إخوة؟",
          options: [
            { de: "Ja, ich habe einen Bruder und eine Schwester.", ar: "نعم، لدي أخ وأخت.", best: true, replyDe: "Wie alt sind sie?", replyAr: "كم عمرهما؟" },
            { de: "Ich habe keine Familie.", ar: "لا أملك عائلة.", best: false, replyDe: "Das ist traurig. Jeder hat eine Familie.", replyAr: "هذا محزن. كل شخص لديه عائلة." },
          ],
        },
        {
          speakerDe: "Wie alt sind sie?",
          speakerAr: "كم عمرهما؟",
          options: [
            { de: "Mein Bruder ist 20 und meine Schwester ist 15.", ar: "أخي عمره 20 وأختي 15.", best: true, replyDe: "Schön! Und deine Eltern?", replyAr: "جميل! ووالداك؟" },
            { de: "Sie sind alt.", ar: "إنهما كبيران.", best: false, replyDe: "Wie alt genau?", replyAr: "كم عمرهما بالضبط؟" },
          ],
        },
        {
          speakerDe: "Was machen deine Eltern?",
          speakerAr: "ماذا يعمل والداك؟",
          options: [
            { de: "Mein Vater ist Lehrer und meine Mutter ist Ärztin.", ar: "والدي مدرّس ووالدتي طبيبة.", best: true, replyDe: "Sehr interessante Berufe!", replyAr: "مهن مثيرة للاهتمام!" },
            { de: "Sie sind zu Hause.", ar: "إنهما في المنزل.", best: false, replyDe: "Und ihre Berufe?", replyAr: "وما مهنتهما؟" },
          ],
        },
      ],
    },
  ],

};