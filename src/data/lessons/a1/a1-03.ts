import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-03: الطعام والشراب
 * — أدوات التعريف والتنكير + حالة النصب (Akkusativ) + فعل haben
 */
export const lessonA103: Lesson = {
  id: "a1-03",
  unitId: "a1-03",
  level: "A1",
  order: 1,
  titleDe: "Essen und Trinken",
  titleAr: "الطعام والشراب",
  duration: 30,
  summary:
    "المأكولات والمشروبات، أدوات التعريف والتنكير (der/die/das + ein/eine)، حالة النصب (Akkusativ): Ich esse einen Apfel، وفعل haben مع الجوع والعطش.",

  lernziele: [
    { id: "z1", de: "Ich kann Lebensmittel nennen.", ar: "أن أسمّي المأكولات والمشروبات بأدواتها الصحيحة." },
    { id: "z2", de: "Ich kenne der/die/das und ein/eine.", ar: "أن أفرّق بين أدوات التعريف (der/die/das) والتنكير (ein/eine)." },
    { id: "z3", de: "Ich kann den Akkusativ benutzen: Ich esse einen Apfel.", ar: "أن أستخدم حالة النصب (Akkusativ) بعد أفعال الأكل والشرب." },
    { id: "z4", de: "Ich kann „haben“ konjugieren.", ar: "أن أصرف فعل haben وأعبّر عن الجوع والعطش." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قل بالعربية: «أنا آكل تفاحة». الآن لاحظ: هل تغيّرت كلمة «تفاحة» في الجملة؟ في الألمانية، كلمة «تفاحة» (der Apfel) تتغير بعد فعل الأكل! خمّن كيف؟",
    motivatingQuestionDe: "Was isst du gern?",
    contextAr:
      "سنذهب اليوم إلى المطبخ الألماني: نتعلم أسماء الأطعمة مع أدواتها، ثم نكتشف «ظاهرة النصب» التي تجعل der يصبح den وein يصبح einen بعد أفعال معينة.",
    contextDe: "Guten Appetit!",
    connectionToPreviousAr: "تعلمت في الدرس السابق mein/meine مع العائلة. اليوم نضيف: الأكل والشرب + أول «حالة إعرابية» ألمانية حقيقية.",
    activateVocabulary: [
      { de: "das Essen", ar: "الطعام" },
      { de: "das Trinken", ar: "الشراب" },
      { de: "der Apfel", ar: "التفاحة" },
      { de: "essen", ar: "يأكل" },
      { de: "trinken", ar: "يشرب" },
      { de: "haben", ar: "يملك" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): كيف تقدّم نفسك؟",
      questionDe: "Wie heißt du?",
      questionAr: "ما اسمك؟",
      options: ["Ich heiße Sami.", "Ich bin Sami heißen.", "Mein heißen ist Sami.", "Ich heiße mich Sami."],
      correctIndex: 0,
      explanation: "Ich heiße + الاسم (من درس a1-01): Ich heiße Sami.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-02 — العائلة والأصدقاء): ما أداة «الأم»؟",
      questionDe: "Welcher Artikel hat „Mutter“?",
      questionAr: "ما أداة التعريف لكلمة «أم»؟",
      options: ["die", "der", "das"],
      correctIndex: 0,
      explanation: "die Mutter — مؤنث (من درس a1-02 العائلة).",
      errorType: "article",
    },
    {
      id: "r3",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): ماذا تقول عند الوداع؟",
      questionDe: "Was sagt man zum Abschied?",
      questionAr: "ماذا تقول عند الوداع؟",
      options: ["Auf Wiedersehen!", "Guten Morgen!", "Entschuldigung!", "Bitte schön!"],
      correctIndex: 0,
      explanation: "Auf Wiedersehen = إلى اللقاء (تحية الوداع).",
      errorType: "vocabulary",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "أدوات التعريف والتنكير (der/die/das + ein/eine)",
      titleDe: "Bestimmte und unbestimmte Artikel",
      explanationAr:
        "كلّ اسمٍ ألماني ينتمي إلى أحد ثلاثة أجناس نحوية، ولا سبيل إلى استعماله سليماً قبل معرفة جنسه:\n**مذكّر ⟵ der** · **مؤنّث ⟵ die** · **محايد ⟵ das**. وفي الجمع تتوحّد الثلاثة كلّها تحت **die** مهما كان جنس المفرد.\n\n**تحذيرٌ منهجي أوّل: الجنس النحوي ليس جنساً طبيعياً.**\nهو تصنيفٌ صرفيّ موروث لا علاقة له بالذكورة والأنوثة في أغلب الأحيان. das Mädchen (الفتاة) محايدة، و der Löffel (الملعقة) مذكّرة، و die Gabel (الشوكة) مؤنّثة، و das Messer (السكّين) محايدة — ثلاث أدوات مائدةٍ متجاورة على الطاولة بثلاثة أجناس مختلفة. فلا تسأل «لماذا؟»، بل احفظ الأداة **جزءاً من الكلمة**: لا تحفظ Apfel بل der Apfel، ولا Milch بل die Milch. الكلمة عندك من مقطعين لا مقطعٍ واحد.\n\n**لكنّ الحفظ ليس أعمى تماماً — إليك أوثق المؤشّرات في حقل الطعام:**\n• **مؤنّث حتماً:** كلّ ما ينتهي بـ **‑e** غالباً (die Banane, die Tomate, die Suppe, die Butter*) — والقاعدة تصيب نحو ٩٠٪ من أسماء الطعام المنتهية بـ‑e. وكذلك كلّ ما ينتهي بـ **‑ung, ‑heit, ‑keit, ‑schaft, ‑ion** بلا استثناء تقريباً.\n• **محايد حتماً:** كلّ ما ينتهي بـ **‑chen** أو **‑lein** (das Brötchen, das Würstchen)، وكلّ **مصدرٍ مستعمَل اسماً** (das Essen, das Trinken, das Kochen).\n• **مذكّر غالباً:** أسماء المشروبات الكحولية (der Wein, der Wodka) وأغلب الفواكه ذات المقطع الواحد (der Apfel).\nوالاستثناء الشهير: **das Bier** محايدة رغم أنّها مشروب، و **die Milch** مؤنّثة رغم أنّها لا تنتهي بـ‑e.\n\n**ثانياً: أداة التنكير ein / eine.**\nتقابل «واحد/واحدة» وتُستعمل حين يُذكر الشيء **أوّل مرّة** أو حين لا يكون معيّناً: ein Apfel (تفّاحة ما) · eine Banane · ein Brot. ولاحظ أنّ ein تخدم المذكّر والمحايد معاً، فالتمييز بينهما يسقط في التنكير.\n\n**ثالثاً — وهذا هو الفرق الذي يخطئ فيه العرب أكثر من غيرهم: متى معرفة ومتى نكرة؟**\nالقاعدة الأساسية: **نكرةٌ عند التقديم، معرفةٌ عند الإعادة.**\n«Das ist **ein** Apfel. **Der** Apfel ist rot.» — أوّل ذكرٍ بـein لأنّه مجهول للسامع، وثاني ذكرٍ بـder لأنّه صار معلوماً.\nوهناك حالةٌ ثالثة لا نظير لها في العربية: **بلا أداة إطلاقاً**. تسقط الأداة مع المادّة غير المعدودة حين نتكلّم عنها بعمومٍ وكمّيةٍ غير محدّدة: «Ich trinke Wasser» (أشرب ماءً) · «Ich esse Brot» (آكل خبزاً). فإن قلت Ich trinke das Wasser صار المعنى «أشرب هذا الماء بعينه». وهذا الصفر الأدواتي (Nullartikel) يقابل التنوين العربي تقريباً، وهو أشيع في الطعام والشراب منه في أيّ حقلٍ آخر.",
      whyAr:
        "لأنّ الجنس النحوي هو **حجر الأساس الذي يقوم عليه نظام الألمانية كلّه**، وليس تفصيلاً معجمياً. فكلّ ما ستتعلّمه بعد اليوم يبني عليه: الحالات الأربع تصرّف الأداة بحسب الجنس، وتصريف الصفة يعتمد على الجنس، والضمير العائد (er/sie/es) يُختار بالجنس، والأسماء المركّبة ترث جنس آخر أجزائها. فمَن حفظ Apfel بلا der لم يحفظ نصف الكلمة، وسيدفع الثمن في كلّ درسٍ لاحق. ولهذا يُصرّ Schritte و Menschen كلاهما على تلوين الأدوات الثلاث بثلاثة ألوان من الوحدة الأولى — لأنّ ترسيخ العادة في الشهر الأوّل أرخص ألف مرّة من تصحيحها في السنة الثانية. أمّا اختيار حقل **الطعام** ميداناً لهذه القاعدة فمقصود: هو أوّل حقلٍ يحتاجه المتعلّم فعلياً خارج الصفّ — في المخبز، في السوق، في المطعم — وأسماؤه ملموسة تُرى وتُلمس فتلتصق الأداة بالصورة الذهنية للشيء نفسه، وهذا أثبت أنواع الحفظ.",
      table: {
        title: "أدوات التعريف والتنكير (Nominativ)",
        columns: ["الجنس", "معرّف (ال)", "منكّر (واحد)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "ein", "der Apfel / ein Apfel"] },
          { label: "مؤنث", cells: ["die", "eine", "die Milch / eine Milch"] },
          { label: "محايد", cells: ["das", "ein", "das Brot / ein Brot"] },
          { label: "جمع", cells: ["die", "—", "die Äpfel"] },
        ],
      },
      examples: [
        {"de": "Das ist ein Apfel. Der Apfel ist rot.", "ar": "هذه تفّاحة. التفّاحة حمراء. (نكرة أوّلاً ثمّ معرفة)"},
        {"de": "Ich trinke gern Milch.", "ar": "أحبّ شرب الحليب. (مادّة بعموم ⟵ بلا أداة)"},
        {"de": "Das Brot ist frisch.", "ar": "الخبز طازج. (das Brot محايد)"},
        {"de": "Eine Banane, bitte!", "ar": "موزة من فضلك! (Banane تنتهي بـ‑e ⟵ مؤنّثة)"},
        {"de": "Die Äpfel sind sehr gut.", "ar": "التفّاح جيّد جداً. (جمع ⟵ die + sind)"},
        {"de": "Ein Brötchen kostet fünfzig Cent.", "ar": "الكعكة الصغيرة بخمسين سنتاً. (‑chen ⟵ محايد)"},
        {"de": "Der Kaffee ist heiß, aber das Wasser ist kalt.", "ar": "القهوة ساخنة لكنّ الماء بارد. (مذكّر ومحايد في جملة)"},
        {"de": "Ich möchte einen Tee, keinen Kaffee.", "ar": "أريد شاياً لا قهوة. (نكرة معدودة في سياق الطلب)"},
      ],
      comparisonWithArabic:
        "**١. أداةٌ واحدة مقابل ثلاث.** العربية تملك «ال» تدخل على كلّ اسمٍ بلا تمييز: الرجل، المرأة، الكتاب. والألمانية توزّع الوظيفة نفسها على der/die/das بحسب تصنيفٍ يجب حفظه. فالعربي لا يواجه صعوبةً في **فهم** فكرة التعريف — بل في **اختيار** الأداة، وهذا عبء ذاكرة لا عبء فهم. والعلاج ذاكري بحت: احفظ الأداة مع الكلمة دائماً.\n\n**٢. جنسان مقابل ثلاثة.** المحايد لا وجود له في العربية إطلاقاً، فليس له خطّاف يعلّق عليه المتعلّم. والأدهى أنّ das لا تعني «لا مذكّر ولا مؤنّث» دلالياً — بل هي خانةٌ صرفية تضمّ das Kind و das Mädchen و das Wasser معاً.\n\n**٣. التنكير: تنوينٌ مقابل كلمة.** العربية تنكّر بحذف «ال» وبالتنوين: «كتابٌ». والألمانية تُدخل كلمةً مستقلّة ein. فالعربي معرّضٌ لأن **يحذف الأداة** ظنّاً أنّ الحذف تنكيرٌ كما في لغته، فيقول «Ich esse Apfel» وهي خطأ — لأنّ Apfel معدود ويلزمه einen.\n\n**٤. الصفر الأدواتي مصيدةٌ معاكسة.** بعد أن يتعلّم العربي وجوب الأداة، يبالغ فيضعها حيث لا تصحّ: «Ich trinke einen Wasser» أو «Ich habe den Hunger». والقاعدة: **المعدود يأخذ أداة، وغير المعدود بعمومٍ لا يأخذها** — Wasser, Brot, Milch, Kaffee (بمعنى المادّة)، وكذلك Hunger و Durst و Zeit في التعابير الثابتة.\n\n**٥. مصيدة die الثلاثية.** يظنّ المتعلّم أنّ die = «ال» فحسب، وهي في الحقيقة ثلاث: أداة المؤنّث المفرد (die Milch)، وأداة الجمع بكلّ الأجناس (die Äpfel, die Kinder)، وضمير إشارة/موصول لاحقاً. فحين ترى die اسأل: أمفردٌ مؤنّث أم جمع؟ والفعل بعدها يفضحها: die Milch **ist** مقابل die Äpfel **sind**.",
      eselsbruecke:
        "**«الكلمة الألمانية لا تُحفظ عاريةً — بل تلبس أداتها»**: قل دائماً «der Apfel» لا «Apfel»، فالأداة جزءٌ من نطق الكلمة لا زينة عليها. وللمؤشّرات: **الـ‑e تؤنّث (die Banane)، والـ‑chen تُحيّد (das Brötchen)**. وللفرق بين المعرفة والنكرة: **أوّل مرّة ein، وبعدها der** — تماماً كما تقول بالعربية «رأيت رجلاً… الرجل كان طويلاً».",
      commonMistakes: [
        {"wrong": "das Apfel", "right": "der Apfel", "whyAr": "خطأ جنسٍ صريح. der Apfel مذكّر، وجمعه die Äpfel بالإمالة. ولا حيلة إلا حفظ الأداة مع الكلمة من أوّل لحظة؛ فالمتعلّم الذي كتب Apfel وحدها في دفتره سيخطئ فيها كلّ مرّة."},
        {"wrong": "ein Milch", "right": "eine Milch / Milch", "whyAr": "die Milch مؤنّثة رغم أنّها لا تنتهي بـ‑e، فتلزمها eine. لكنّ الأصحّ في أغلب السياقات إسقاط الأداة كلّياً: Ich trinke Milch — لأنّ الحليب مادّة غير معدودة. وتُقال eine Milch في المقهى بمعنى «كوب حليب»."},
        {"wrong": "Ich esse Apfel.", "right": "Ich esse einen Apfel.", "whyAr": "نقل التنكير العربي بالحذف («آكل تفّاحاً») إلى الألمانية. لكنّ Apfel اسمٌ معدود يلزمه أداة، ومع فعل essen يكون مفعولاً به فينصب: einen Apfel. والصفر الأدواتي مقصورٌ على المواد غير المعدودة."},
        {"wrong": "Die Milch sind kalt.", "right": "Die Milch ist kalt.", "whyAr": "قُرئت die على أنّها أداة جمع فجُمع الفعل. لكنّ die هنا أداة مؤنّث مفرد. والاختبار: هل للكلمة صيغة جمعٍ ظاهرة؟ Milch لا تُجمع عادةً ⟵ فهي مفرد ⟵ ist."},
      ],
      relatedRuleComparison: {
        "title": "أداة النفي kein — الأداة الرابعة التي تكمل النظام",
        "content": "بعد der/die/das و ein/eine تأتي **kein**، وهي أداة نفي الاسم، وتُصرَّف تصريف ein حرفاً بحرف مع فارقٍ واحد: أنّها تعمل في الجمع أيضاً. قارن: ein Apfel ⟵ kein Apfel · eine Banane ⟵ keine Banane · ein Brot ⟵ kein Brot · (الجمع) Äpfel ⟵ keine Äpfel. والقاعدة الفاصلة التي يخطئ فيها الجميع: **kein تنفي الأسماء، و nicht تنفي كلّ ما عداها** (الأفعال والصفات والظروف). فتقول Ich habe kein**en** Hunger (نفي اسم ⟵ kein) لكن Ich esse nicht (نفي فعل ⟵ nicht) و Das Brot ist nicht frisch (نفي صفة ⟵ nicht). ومَن ضبط هذا التقسيم البسيط تجنّب أشيع خطأٍ في نفي الجملة الألمانية كلّها."
      },
    },
    {
      id: "t2",
      titleAr: "حالة النصب (Akkusativ): Ich esse einen Apfel",
      titleDe: "Der Akkusativ: das direkte Objekt",
      explanationAr:
        "حالة النصب (Akkusativ) هي حالة **المفعول به المباشر** — أي الشيء الذي يقع عليه فعل الفاعل مباشرةً بلا وساطة حرف جرّ.\n\n**والخبر السارّ أنّها أرخص قاعدةٍ في الألمانية كلّها: خانةٌ واحدة تتغيّر من أربع.**\n\n| الجنس | الرفع | النصب |\n|---|---|---|\n| مذكّر | der / ein | **den / einen** ← تغيّرت |\n| مؤنّث | die / eine | die / eine ← كما هي |\n| محايد | das / ein | das / ein ← كما هي |\n| جمع | die | die ← كما هي |\n\nثلاثة أرباع الجدول لا يتحرّك. فلا تُرهق نفسك بحفظ الجدول كلّه، بل احفظ جملةً واحدة: **«في النصب، المذكّر وحده يلبس ‑en»**.\n\n**كيف تتعرّف على المفعول به؟** اسأل بـ **Wen?** (مَن؟ للعاقل) أو **Was?** (ماذا؟ لغير العاقل) بعد الفعل:\nIch esse **einen Apfel**. ⟵ Was esse ich? Einen Apfel. ⟵ إذن مفعولٌ به ⟵ نصب.\nولهذا يسمّى النصب في الألمانية **Wen‑Fall** (حالة «مَن؟»).\n\n**الأفعال التي تطلب مفعولاً منصوباً** — وهي الأغلبية الساحقة: essen (يأكل)، trinken (يشرب)، kaufen (يشتري)، haben (يملك)، möchten (يودّ)، nehmen (يأخذ)، sehen (يرى)، lesen (يقرأ)، brauchen (يحتاج)، bestellen (يطلب).\n\n**استثناءٌ حاسم لا يُنسى: الأفعال الرابطة لا تنصب أبداً.**\nالأفعال **sein** و **werden** و **bleiben** و **heißen** لا مفعول لها، لأنّ ما بعدها ليس شيئاً وقع عليه الفعل بل **هو الفاعل نفسه** بعبارةٍ أخرى. فتقول:\n• Er ist **ein** Lehrer. (رفع! لأنّ «هو» و«معلّم» شيءٌ واحد)\n• Ich sehe **einen** Lehrer. (نصب، لأنّ المعلّم شيءٌ آخر رأيتُه)\nوهذا فرقٌ منطقي لا اعتباطي: النصب يفترض **طرفين**، والرابط يفترض **طرفاً واحداً بوجهين**. وسمّاه النحاة الألمان Gleichsetzungsnominativ — «رفع المساواة».\n\n**تنبيه على تصريف الفعل مصاحب:** الفعل essen شاذّ يمال في المخاطب والغائب المفرد: ich esse · du **isst** · er/sie/es **isst** · wir essen · ihr esst · sie essen. وكذلك nehmen: du **nimmst** · er **nimmt**. فانتبه ألّا تُصلح الأداة وتخطئ في الفعل.",
      whyAr:
        "لأنّ النصب هو **أوّل احتكاكٍ للمتعلّم بنظام الحالات**، وهو النظام الذي يميّز الألمانية عن الإنجليزية ويجعلها أقرب إلى العربية في المبدأ وأبعد عنها في التطبيق. ولأنّ الجملة الألمانية الوظيفية الأولى — أن تطلب طعاماً أو شراباً — لا تُبنى أصلاً دون نصب: Ich möchte **einen** Kaffee. فالمتعلّم الذي يهمل ‑en هذه يسمعه الألماني فوراً أجنبيّاً، لأنّ الخطأ يقع في أكثر جملةٍ يقولها الإنسان في يومه. وهناك سبب استراتيجي أعمق: النصب **أرخص الحالات ثمناً وأعلاها عائداً** — خانةٌ واحدة تُحفظ، ثمّ تُستعمل في كلّ جملةٍ فيها فعل متعدٍّ، وهي أغلب الجمل. ولهذا يقدّمه Goethe في A1 مبكّراً جداً بينما يؤجّل الجرّ (Dativ) إلى نهاية A1 والملكية (Genitiv) إلى B1: التدرّج مقصود، من الأرخص إلى الأغلى.",
      table: {
        title: "تغيّر الأداة في النصب",
        columns: ["الجنس", "Nominativ (فاعل)", "Akkusativ (مفعول)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der / ein", "den / einen", "Ich esse einen Apfel."] },
          { label: "مؤنث", cells: ["die / eine", "die / eine", "Ich trinke die Milch."] },
          { label: "محايد", cells: ["das / ein", "das / ein", "Ich esse das Brot."] },
          { label: "جمع", cells: ["die", "die", "Ich kaufe die Äpfel."] },
        ],
      },
      examples: [
        {"de": "Ich esse einen Apfel.", "ar": "آكل تفّاحة. (مذكّر منصوب ⟵ einen)"},
        {"de": "Er trinkt einen Kaffee und sie trinkt eine Cola.", "ar": "هو يشرب قهوة وهي تشرب كولا. (مذكّر يتغيّر، مؤنّث لا)"},
        {"de": "Wir kaufen ein Brot und Milch.", "ar": "نشتري خبزاً وحليباً. (محايد بلا تغيير + مادّة بلا أداة)"},
        {"de": "Hast du einen Bruder?", "ar": "هل لك أخ؟ (haben تنصب دائماً)"},
        {"de": "Ich möchte den Käse dort, bitte.", "ar": "أريد ذاك الجبن من فضلك. (معرفة منصوبة ⟵ den)"},
        {"de": "Er ist ein guter Koch.", "ar": "هو طبّاخ ماهر. (بعد sein رفعٌ لا نصب!)"},
        {"de": "Nimmst du einen Tee oder einen Saft?", "ar": "أتأخذ شاياً أم عصيراً؟ (nehmen ⟵ du nimmst، شاذّ)"},
        {"de": "Ich sehe den Kellner. Er bringt die Rechnung.", "ar": "أرى النادل. هو يُحضر الفاتورة. (منصوب ثمّ مرفوع)"},
      ],
      comparisonWithArabic:
        "هنا يقف المتعلّم العربي في موقعٍ **أفضل** من الإنجليزي أو الفرنسي، فلغته تعرف الإعراب — لكنّ الشبه سطحيّ والفروق حادّة:\n\n**١. الفكرة مألوفة والتنفيذ مختلف.** العربية تنصب المفعول به: «أكلتُ تفّاحةً» بالفتحة. والألمانية تنصبه أيضاً — لكنّ **العلامة تنتقل من الاسم إلى الأداة**. فالعربية تعلّم الاسم نفسه (تفّاحةً)، والألمانية تترك الاسم ساكناً وتغيّر ما قبله (einen Apfel). فمَن يبحث عن نهايةٍ على الاسم لن يجدها.\n\n**٢. العربية تنصب كلّ المفاعيل، والألمانية خانةً واحدة.** «أكلتُ التفّاحةَ» و«أكلتُ الخبزَ» و«رأيتُ البناتِ» — كلّها منصوبة ظاهراً. أمّا الألمانية فلا يظهر النصب إلا في المذكّر. وهذا يجعل المتعلّم العربي **يبحث عن تغييرٍ فلا يراه** فيشكّ في فهمه: Ich esse die Banane تبدو له غير منصوبة، وهي منصوبة لكنّ علامتها صفر.\n\n**٣. الخبر المرفوع مقابل sein.** العربية ترفع الخبر: «هو معلّمٌ». والألمانية ترفعه أيضاً بعد sein — فهنا **توافقٌ تامّ** بين اللغتين، وهو من المواضع النادرة التي تنفع فيها الترجمة الحرفية. استثمره: إن رفعتَه بالعربية فارفعه بالألمانية.\n\n**٤. الجملة الاسمية.** العربية تقول «أنا جائع» بلا فعل. والألمانية توجب فعلاً: Ich **habe** Hunger. فالعربي معرّضٌ لحذف الفعل أو لاختيار sein خطأً. والقاعدة: **لا جملة ألمانية بلا فعل مصرَّف، أبداً**.\n\n**٥. رتبة الكلمات تعوّض عن الإعراب.** لأنّ الألمانية لا تُظهر النصب إلا في خانةٍ واحدة، صار ترتيب الكلمات حاملاً للمعنى: «Der Vater sieht den Sohn» ≠ «Den Sohn sieht der Vater» في التركيز وإن اتّحد المعنى. أمّا العربية فتتيح التقديم والتأخير بحرّيةٍ أوسع لأنّ الحركات تحفظ الوظائف.",
      eselsbruecke:
        "**«المذكّر وحده يتعب في النصب»** — den و einen، والباقي في إجازة. وللتذكير بالنهاية: احفظ الإيقاع **der ⟵ den، ein ⟵ einen** (زيادة ‑n و‑en). وللتمييز: اسأل **Wen oder was?** بعد الفعل؛ فإن أجاب الاسم فهو منصوب. وللأفعال الرابطة: **«sein لا ينصب لأنّ الطرفين شيءٌ واحد»**.",
      commonMistakes: [
        {"wrong": "Ich esse ein Apfel.", "right": "Ich esse einen Apfel.", "whyAr": "أشهر أخطاء A1 على الإطلاق. der Apfel مذكّر، ومع فعلٍ متعدٍّ كـessen يصير مفعولاً به فينصب: ein ⟵ einen. والسبب النفسي أنّ المتعلّم حفظ ein Apfel في المعجم فيسحبها كما هي إلى الجملة، ناسياً أنّ الأداة تتغيّر بتغيّر الوظيفة."},
        {"wrong": "Ich trinke der Kaffee.", "right": "Ich trinke den Kaffee.", "whyAr": "المعرفة تنصب أيضاً، لا النكرة وحدها: der ⟵ den. وكثيرٌ من المتعلّمين يضبط einen ثمّ ينسى den، لأنّه يظنّ أنّ القاعدة تخصّ التنكير. القاعدة تخصّ **المذكّر** أيّاً كانت أداته."},
        {"wrong": "Ich esse einen Banane.", "right": "Ich esse eine Banane.", "whyAr": "إفراطٌ في تطبيق القاعدة (Übergeneralisierung). die Banane مؤنّثة والمؤنّث **لا يتغيّر** في النصب إطلاقاً. وهذا خطأ المتعلّم المجتهد الذي فرح بالقاعدة فعمّمها؛ فتذكّر أنّ ثلاثة أرباع الجدول ثابت."},
        {"wrong": "Er ist einen Lehrer.", "right": "Er ist ein Lehrer. / Er ist Lehrer.", "whyAr": "نصبٌ بعد فعلٍ رابط. sein لا مفعول له، لأنّ «هو» و«المعلّم» ذاتٌ واحدة لا ذاتان — فيُرفع الطرفان. والأفصح مع المهن إسقاط الأداة كلّياً: Er ist Lehrer. وينطبق الأمر نفسه على werden و bleiben و heißen."},
      ],
      relatedRuleComparison: {
        "title": "لماذا النصب أوّلاً ثمّ الجرّ؟ منطق التدرّج",
        "content": "ترتيب الحالات في المناهج ليس اعتباطياً بل مرتّبٌ بحسب **نسبة العائد إلى الكلفة**. النصب (Akkusativ) يكلّفك خانةً واحدة (den/einen) ويخدمك في كلّ جملةٍ فيها فعل متعدٍّ — أي في أغلب كلامك، ولهذا يأتي أوّلاً وفي منتصف A1. ثمّ يأتي الجرّ (Dativ) في آخر A1: أربع خانات تتغيّر (dem/der/dem/den + ‑n على الاسم الجمع)، وخدمته محصورة في المفعول غير المباشر وحروف الجرّ الثابتة (mit, zu, aus, bei, von, nach, seit). ثمّ يُؤجَّل الملكية (Genitiv) إلى B1 لأنّه أعلى كلفةً وأقلّ دوراناً في الكلام اليومي، إذ ينوب عنه von + Dativ في المحكيّة. فأنت لا تتعلّم «الحالات» دفعةً واحدة بل تشتريها بالتقسيط، من الأرخص إلى الأغلى — وهذه من أذكى قرارات المنهج الأوروبي المشترك."
      },
    },
    {
      id: "t3",
      titleAr: "فعل haben (يملك) + الجوع والعطش",
      titleDe: "Das Verb „haben“ und Hunger/Durst",
      explanationAr:
        "**haben** هو الفعل الثاني في الأهمّية بعد sein، وهو أوّل ما يفتح لك باب الملكية والحاجة والإحساس.\n\n**التصريف — لاحظ الشذوذ:**\nich **habe** · du **hast** · er/sie/es **hat** · wir **haben** · ihr **habt** · sie/Sie **haben**\nالخانتان الشاذّتان هما du و er: تسقط منهما الـ**b** فتصير hast و hat لا «habst» و «habt». وهذا نموذجٌ لظاهرة صوتية قديمة تسمّى الاختزال (Kontraktion): تسقط الحروف الصعبة النطق من الأفعال **الأكثر استعمالاً** لأنّ كثرة التداول تُبلي الكلمة كما يُبلي المشي الحجر. ولهذا كانت أشدّ أفعال أيّ لغةٍ شذوذاً هي أكثرها دوراناً — sein و haben في الألمانية، «كان» في العربية، be و have في الإنجليزية.\n\n**الوظيفة الأولى: الملكية.**\nIch habe einen Bruder · Sie hat ein Auto · Wir haben Zeit. ولاحظ أنّ haben **تنصب مفعولها دائماً** — فهي من أكثر الأفعال إلزاماً بالنصب في اللغة.\n\n**الوظيفة الثانية — وهنا الفخّ الأكبر: التعابير الثابتة للأحاسيس.**\nالألمانية تعبّر عن الجوع والعطش والخوف بأنّها **أشياء تُملَك** لا صفاتٌ تُوصف:\n• Ich habe **Hunger** = أنا جائع (حرفياً: أملك جوعاً)\n• Ich habe **Durst** = أنا عطشان\n• Ich habe **Angst** = أنا خائف\n• Ich habe **Zeit** / **keine Zeit** = عندي وقت / لا وقت لي\n• Ich habe **Lust auf** … = عندي رغبة في…\n• Ich habe **Recht** = أنا محقّ\nوكلّها تأتي **بلا أداة** لأنّها أسماء معنوية غير معدودة. فلا تقل «Ich habe einen Hunger» إلا في التعبير المبالغ الشائع «Ich habe einen Bärenhunger» (عندي جوع دبّ!).\n\n**وفي المقابل، الأحاسيس التي تُبنى بـsein لأنّها صفات حقيقية:**\n• Ich **bin** müde (متعب) · Ich **bin** krank (مريض) · Ich **bin** satt (شبعان) · Ich **bin** durstig (عطشان — بالصفة هذه المرّة!)\nولاحظ الازدواج الطريف: **Ich habe Durst** و **Ich bin durstig** كلتاهما صحيحة، لأنّ الأولى اسم والثانية صفة. فالمعيار صرفيّ لا دلاليّ: **الاسم يأخذ haben، والصفة تأخذ sein**. وهذه هي القاعدة التي تحسم الباب كلّه.\n\n**النفي:** ينفى مفعول haben بـ **kein** لا بـ nicht، لأنّه اسم: Ich habe **keinen** Hunger · Ich habe **keine** Zeit · Ich habe **kein** Geld. وانتبه إلى النصب في keinen مع المذكّر.",
      whyAr:
        "لأنّ haben ليس فعلاً واحداً بل **ثلاثة في واحد**: فعلٌ تامّ للملكية، ومكوّنٌ للتعابير الثابتة، و — وهذا الأهمّ على المدى البعيد — **فعلٌ مساعد لبناء الماضي التامّ (Perfekt)** الذي هو زمن الماضي الأشيع في الألمانية المحكيّة. فحين تقول لاحقاً «Ich habe gegessen» فأنت تستعمل haben نفسه الذي تحفظه اليوم. ومَن لم يُتقن hast/hat اليوم سيرتكب الخطأ نفسه في كلّ جملة ماضٍ يقولها بعد ستّة أشهر — أي في نصف كلامه. أمّا تعابير Hunger/Durst فسببها وظيفي مباشر: هي أوّل ما تحتاجه لتطلب طعاماً أو تعتذر عن موعد. وهي في الوقت نفسه **أوضح مثالٍ على أنّ اللغات لا تترجم بعضها كلمةً بكلمة** — درسٌ منهجي يستحقّ أن يتعلّمه المبتدئ مبكّراً حتّى يكفّ عن الترجمة الحرفية إلى الأبد.",
      table: {
        title: "تصريف haben في المضارع",
        columns: ["الضمير", "haben", "مثال"],
        rows: [
          { label: "ich", cells: ["habe", "Ich habe Hunger."] },
          { label: "du", cells: ["hast", "Hast du Durst?"] },
          { label: "er/sie/es", cells: ["hat", "Er hat einen Bruder."] },
          { label: "wir", cells: ["haben", "Wir haben Zeit."] },
          { label: "ihr", cells: ["habt", "Habt ihr einen Hund?"] },
          { label: "sie/Sie", cells: ["haben", "Sie haben Hunger."] },
        ],
      },
      examples: [
        {"de": "Ich habe Hunger. Hast du auch Hunger?", "ar": "أنا جائع. وأنت أجائع أيضاً؟ (اسم ⟵ haben، بلا أداة)"},
        {"de": "Er hat Durst, aber sie ist müde.", "ar": "هو عطشان، لكنّها متعبة. (اسم ⟵ hat / صفة ⟵ ist)"},
        {"de": "Wir haben keine Zeit.", "ar": "ليس عندنا وقت. (نفي الاسم بـkeine)"},
        {"de": "Sie hat einen Kaffee bestellt.", "ar": "طلبت قهوة. (haben مساعداً في الماضي التامّ)"},
        {"de": "Habt ihr Geschwister? — Ja, wir haben zwei Brüder.", "ar": "ألكم إخوة؟ — نعم، لنا أخوان."},
        {"de": "Ich habe keinen Hunger, ich bin satt.", "ar": "لستُ جائعاً، أنا شبعان. (نفيٌ منصوب + صفة مع sein)"},
        {"de": "Hast du Lust auf einen Tee?", "ar": "أعندك رغبة في شاي؟ (تعبير ثابت + نصب بعد auf)"},
        {"de": "Das Kind hat Angst vor dem Hund.", "ar": "الطفل خائف من الكلب. (Angst اسم ⟵ hat)"},
      ],
      comparisonWithArabic:
        "**١. الجملة الاسمية: أخطر فرقٍ في هذا الدرس.** العربية تقول «أنا جائع» و«أنا طالب» بلا فعلٍ إطلاقاً؛ الجملة الاسمية مبتدأ وخبر. والألمانية **توجب فعلاً مصرَّفاً في كلّ جملة بلا استثناء**. فالعربي يميل إلى قول «Ich Hunger» أو «Ich Student» بحذف الفعل — وهي جملة غير مفهومة لا مجرّد خاطئة. القاعدة الحديدية: **لا جملة ألمانية بلا فعلٍ مصرَّف**.\n\n**٢. haben أم sein؟ العربية لا تعين.** «أنا جائع» و«أنا متعب» متطابقتان بنيوياً في العربية، ومختلفتان تماماً في الألمانية: Ich **habe** Hunger مقابل Ich **bin** müde. والمعيار كما رأيت صرفيّ: Hunger اسم فيحتاج haben، و müde صفة فتحتاج sein. فلا تسأل عن المعنى بل عن **نوع الكلمة**.\n\n**٣. العربية أصلاً لا تملك فعل «يملك» بهذه المركزية.** نقول «عندي أخ» و«لي أخ» بشبه جملة لا بفعل. أمّا الألمانية فتستعمل فعلاً صريحاً haben، وتنصب مفعوله. فالمتعلّم العربي يترجم «عندي» بحثاً عن ظرفٍ مكاني فلا يجده، والحلّ أن يربط «عندي/لي» بـ ich habe مباشرةً بلا وساطة.\n\n**٤. غياب الأداة في التعابير يوافق العربية صدفةً.** «عندي جوع» بلا تنوين تعريف، و Ich habe Hunger بلا أداة. فهنا **توافقٌ نادر** استثمره: التعابير الثابتة عارية في اللغتين.\n\n**٥. النفي بـkein لا نظير له.** العربية تنفي بأداةٍ واحدة تسبق الفعل («ليس عندي وقت»، «لا أملك وقتاً»). والألمانية توزّع النفي: **kein للأسماء و nicht لغيرها**، وkein نفسها تُصرَّف بالحالة والجنس (keinen/keine/kein). فالعربي مطالبٌ بقرارين: أيّ أداة نفي؟ ثمّ أيّ نهاية لها؟",
      eselsbruecke:
        "**«الاسم يُملَك، والصفة تُكان»** — أي: إن كانت الكلمة اسماً (Hunger, Durst, Angst, Zeit) فقل **habe**، وإن كانت صفة (müde, krank, satt) فقل **bin**. وللتصريف الشاذّ احفظ الإيقاع الساقط: **du hast, er hat — بلا b**، فالباء تسقط عند الازدحام. وللنفي: **kein للاسم، nicht لما سواه**.",
      commonMistakes: [
        {"wrong": "Ich bin Hunger.", "right": "Ich habe Hunger.", "whyAr": "ترجمة حرفية لـ«أنا جائع» تُوقع في اختيار sein. لكنّ Hunger **اسم** لا صفة، والأسماء تُملَك بـhaben لا تُوصف بـsein. والجملة بـsein تعني حرفياً «أنا هو الجوع نفسه»، وهي غير مفهومة للألماني. المعيار: نوع الكلمة لا معناها."},
        {"wrong": "Ich habe müde.", "right": "Ich bin müde.", "whyAr": "الخطأ المعاكس: بعد أن يتعلّم المتعلّم Ich habe Hunger يعمّم haben على كلّ إحساس. لكنّ müde **صفة**، والصفات تُبنى بـsein. والقاعدة الفاصلة: اسمٌ ⟵ haben، صفةٌ ⟵ sein. وعلامة الاسم في الألمانية أنّه يُكتب بحرفٍ كبير: Hunger مقابل müde."},
        {"wrong": "Du hat einen Bruder.", "right": "Du hast einen Bruder.", "whyAr": "خلط خانتي du و er. والصيغتان متقاربتان صوتياً (hast/hat) فيسهل تبادلهما، خصوصاً أنّ العربية لا تميّز نهاية الفعل بهذا الشكل. احفظهما في زوجٍ متقابل: **du hast — er hat**، بالتاء المزدوجة للمخاطب."},
        {"wrong": "Ich habe nicht Zeit.", "right": "Ich habe keine Zeit.", "whyAr": "نفي اسمٍ بـnicht. والقاعدة أنّ الاسم يُنفى بـkein المصرَّفة، و nicht محجوزة للأفعال والصفات والظروف. و die Zeit مؤنّثة فتصير keine. أمّا Ich habe nicht viel Zeit فصحيحة لأنّ nicht هنا تنفي viel لا Zeit."},
      ],
      relatedRuleComparison: {
        "title": "sein و haben: الفعلان اللذان يحملان الألمانية كلّها",
        "content": "هذان الفعلان ليسا مجرّد فعلين شائعين، بل **العمودان اللذان يقوم عليهما نظام الأزمنة الألماني بأسره**. اليوم تستعملهما فعلين تامّين: sein للهويّة والصفة (Ich bin Student / müde)، و haben للملكية والتعابير (Ich habe einen Bruder / Hunger). لكنّهما سيعودان بعد أسابيع **فعلين مساعدين** لبناء الماضي التامّ (Perfekt): Ich **habe** gegessen (أكلتُ) مقابل Ich **bin** gegangen (ذهبتُ). والقاعدة التي ستتعلّمها حينئذٍ: **أفعال الحركة وتغيّر الحال تأخذ sein، وما عداها يأخذ haben** — وهي نحو ٩٠٪ من الأفعال. ثمّ يعودان ثالثةً في المبني للمجهول (werden) والماضي البعيد (Plusquamperfekt) في B1. فكلّ دقيقةٍ تنفقها اليوم في ترسيخ hast/hat و bist/ist تُوفّر عليك ساعاتٍ في كلّ مستوىً قادم — وهذا استثمارٌ لا يخسر."
      },
    },
  ],

  reading: {
    "id": "read-a1-03",
    "titleDe": "Im Café Sonnenblume",
    "titleAr": "في مقهى عبّاد الشمس",
    "textType": "dialog",
    "paragraphs": [
      "Kellner: Guten Tag! Was möchten Sie trinken?\nAmira: Guten Tag. Ich möchte einen Kaffee, bitte. Mit Milch, aber ohne Zucker.\nKellner: Gern. Und Sie?\nYoussef: Ich nehme einen Tee. Haben Sie auch Mineralwasser?",
      "Kellner: Ja, natürlich. Möchten Sie auch etwas essen? Wir haben heute Suppe, Salat und Käsebrötchen.\nAmira: Ich habe großen Hunger! Ich nehme die Suppe und ein Brötchen.\nYoussef: Für mich nur einen Salat, bitte. Ich bin nicht sehr hungrig.",
      "Kellner: Also: ein Kaffee mit Milch, ein Tee, ein Mineralwasser, eine Suppe, ein Brötchen und ein Salat. Ist das richtig?\nAmira: Ja, das ist richtig. Vielen Dank!\nKellner: Einen Moment bitte, das Essen kommt gleich.",
      "Youssef: Der Salat ist wirklich frisch. Wie ist deine Suppe?\nAmira: Sie ist sehr gut, aber ein bisschen heiß. Möchtest du probieren?\nYoussef: Nein danke, ich habe keinen Hunger mehr. Aber ich habe noch Durst. Entschuldigung, noch ein Wasser bitte!",
      "Amira: Herr Ober, die Rechnung bitte! Wie viel macht das?\nKellner: Das macht zusammen zwanzig Euro fünfzig.\nAmira: Hier sind fünfundzwanzig Euro. Stimmt so.\nKellner: Vielen Dank und einen schönen Tag noch!"
    ],
    "paragraphsAr": [
      "النادل: طاب يومكم! ماذا تحبّون أن تشربوا؟\nأميرة: طاب يومك. أريد قهوة من فضلك. بحليب لكن بلا سكّر.\nالنادل: بكلّ سرور. وأنت؟\nيوسف: آخذ شاياً. أعندكم ماء معدني أيضاً؟",
      "النادل: نعم بالطبع. أتحبّون أن تأكلوا شيئاً أيضاً؟ عندنا اليوم شوربة وسلطة وكعك بالجبن.\nأميرة: أنا جائعة جداً! آخذ الشوربة وكعكة.\nيوسف: لي سلطة فقط من فضلك. لستُ جائعاً كثيراً.",
      "النادل: إذن: قهوة بحليب، وشاي، وماء معدني، وشوربة، وكعكة، وسلطة. أهذا صحيح؟\nأميرة: نعم صحيح. شكراً جزيلاً!\nالنادل: لحظة من فضلكم، الطعام يأتي حالاً.",
      "يوسف: السلطة طازجة حقّاً. كيف شوربتك؟\nأميرة: جيّدة جداً لكنّها ساخنة قليلاً. أتريد أن تذوق؟\nيوسف: لا شكراً، لم أعد جائعاً. لكنّني ما زلت عطشان. عفواً، ماء آخر من فضلك!",
      "أميرة: يا نادل، الفاتورة من فضلك! كم الحساب؟\nالنادل: المجموع عشرون يورو وخمسون سنتاً.\nأميرة: تفضّل خمسة وعشرين يورو. احتفظ بالباقي.\nالنادل: شكراً جزيلاً ويوماً سعيداً!"
    ],
    "glossary": [
      {
        "de": "der Kellner",
        "ar": "النادل",
        "noteAr": "والمؤنّث die Kellnerin بالنهاية ‑in. وينادى في المطعم بـ Entschuldigung! أو Herr Ober (وهي قديمة الطابع اليوم)."
      },
      {
        "de": "möchten",
        "ar": "يودّ / يريد",
        "noteAr": "أدبُ الطلب في الألمانية. أقلّ حدّة من will (أريد) وأنسب في المطاعم والمتاجر. وتصريفها: ich möchte, du möchtest, er möchte."
      },
      {
        "de": "ohne Zucker",
        "ar": "بلا سكّر",
        "noteAr": "الحرف ohne ينصب ما بعده دائماً: ohne den Kaffee. وضدّه mit الذي يجرّ (Dativ): mit Milch."
      },
      {
        "de": "das Mineralwasser",
        "ar": "الماء المعدني",
        "noteAr": "اسم مركّب محايد لأنّ das Wasser محايد — الجزء الأخير يحدّد الجنس. ويُطلب mit Gas (فوّار) أو ohne Gas (عادي)."
      },
      {
        "de": "das Brötchen",
        "ar": "الكعكة / الخبزة الصغيرة",
        "noteAr": "محايدة قطعاً لأنّها تنتهي بـ‑chen، وهي تصغير das Brot. والجمع die Brötchen بلا تغيير."
      },
      {
        "de": "hungrig / satt",
        "ar": "جائع / شبعان",
        "noteAr": "صفتان تُبنيان بـsein: Ich bin hungrig / satt. وقارن بالاسم: Ich habe Hunger — اسمٌ مع haben وصفةٌ مع sein."
      },
      {
        "de": "frisch",
        "ar": "طازج",
        "noteAr": "صفة كثيرة الدوران في الطعام. وضدّها alt (قديم) للطعام لا للأشخاص."
      },
      {
        "de": "probieren",
        "ar": "يذوق / يجرّب",
        "noteAr": "فعل منتظم ينصب مفعوله: Ich probiere die Suppe. ومنه Probieren geht über Studieren (التجربة خير من الدراسة)."
      },
      {
        "de": "die Rechnung",
        "ar": "الفاتورة",
        "noteAr": "مؤنّثة لأنّها تنتهي بـ‑ung، وكلّ ‑ung مؤنّثة بلا استثناء. والعبارة الجاهزة: Die Rechnung, bitte!"
      },
      {
        "de": "zusammen / getrennt",
        "ar": "معاً / منفصلين",
        "noteAr": "سؤال النادل الأشهر عند الدفع: Zusammen oder getrennt? أي أتدفعون فاتورةً واحدة أم كلٌّ فاتورته."
      },
      {
        "de": "Stimmt so.",
        "ar": "احتفظ بالباقي.",
        "noteAr": "عبارة ثابتة عند ترك البقشيش. حرفياً «هكذا يصحّ». والبقشيش المعتاد في ألمانيا نحو ٥ إلى ١٠ بالمئة."
      },
      {
        "de": "gleich",
        "ar": "حالاً / بعد قليل",
        "noteAr": "ظرف زمان يفيد القرب الشديد. وله معنىً آخر صفةً: مساوٍ، متماثل (gleich groß = متساويان في الطول)."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الأولى — ماذا طلبت أميرة؟",
        "questionDe": "Was bestellt Amira zum Trinken?",
        "questionAr": "ماذا طلبت أميرة لتشربه؟",
        "options": [
          "Einen Tee ohne Milch",
          "Einen Kaffee mit Milch und ohne Zucker",
          "Ein Mineralwasser",
          "Eine Suppe"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Ich möchte einen Kaffee, bitte. Mit Milch, aber ohne Zucker». والشاي والماء المعدني طلبهما يوسف، والشوربة طعام لا شراب.",
        "optionExplanations": [
          "الشاي ليوسف.",
          undefined,
          "الماء المعدني سأل عنه يوسف.",
          "الشوربة طعام، والسؤال عن الشراب."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الثانية — لماذا اختلف الطلبان؟",
        "questionDe": "Warum nimmt Youssef nur einen Salat?",
        "questionAr": "لماذا اكتفى يوسف بسلطة؟",
        "options": [
          "Weil der Salat billig ist",
          "Weil er nicht sehr hungrig ist",
          "Weil er kein Geld hat",
          "Weil die Suppe zu heiß ist"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Ich bin nicht sehr hungrig». ولاحظ البناء: hungrig **صفة** فتُبنى بـsein وتُنفى بـnicht — لا بـkein. ولو قال الاسم لقال: Ich habe keinen Hunger.",
        "optionExplanations": [
          "السعر لم يُذكر عند الطلب.",
          undefined,
          "المال لم يُذكر، وأميرة دفعت في النهاية.",
          "حرارة الشوربة ذُكرت لاحقاً وتخصّ أميرة."
        ],
        "errorType": "grammar",
        "paragraph": 1
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الرابعة — دقّق في النفي:",
        "questionDe": "Warum sagt Youssef «keinen Hunger» und nicht «nicht Hunger»?",
        "questionAr": "لماذا قال keinen Hunger لا nicht Hunger؟",
        "options": [
          "Weil Hunger ein Nomen ist",
          "Weil Hunger ein Adjektiv ist",
          "Weil er höflich sein will",
          "Weil das Verb haben ist"
        ],
        "correctIndex": 0,
        "explanation": "der Hunger اسم (وعلامته الحرف الكبير)، والأسماء تُنفى بـkein المصرَّفة لا بـnicht. وجاءت keinen بالنون لأنّ Hunger مذكّر ومفعولٌ به منصوب بعد haben.",
        "optionExplanations": [
          undefined,
          "الصفة هي hungrig وتُنفى بـnicht فعلاً.",
          "الأدب لا دخل له في اختيار أداة النفي.",
          "الفعل haben يفرض النصب لا نوع أداة النفي."
        ],
        "errorType": "negation",
        "paragraph": 3
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الخامسة — الحساب:",
        "questionDe": "Wie viel Trinkgeld gibt Amira?",
        "questionAr": "كم تركت أميرة بقشيشاً؟",
        "options": [
          "Nichts",
          "Zwanzig Euro fünfzig",
          "Vier Euro fünfzig",
          "Fünfundzwanzig Euro"
        ],
        "correctIndex": 2,
        "explanation": "الحساب ٢٠٫٥٠ وأعطت ٢٥ يورو وقالت Stimmt so أي احتفظ بالباقي، فالفرق ٤٫٥٠ يورو. وهو بقشيش سخيّ نسبياً إذ يعادل نحو ٢٢٪.",
        "optionExplanations": [
          "Stimmt so تعني صراحةً ترك الباقي.",
          "هذا مبلغ الفاتورة نفسه لا البقشيش.",
          undefined,
          "هذا ما دفعته إجمالاً لا البقشيش."
        ],
        "errorType": "vocabulary",
        "paragraph": 4
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "انظر في أدوات الطلب عبر النصّ كلّه:",
        "questionDe": "Warum heißt es «Ich nehme einen Salat» aber «Ich nehme die Suppe»?",
        "questionAr": "لماذا einen Salat بأداة نكرة و die Suppe بأداة معرفة؟",
        "options": [
          "Weil Suppe feminin ist und sich im Akkusativ nicht ändert",
          "Weil Suppe maskulin ist",
          "Weil man Suppe nicht zählen kann",
          "Weil der Kellner das so sagt"
        ],
        "correctIndex": 0,
        "explanation": "السبب مزدوج: die Suppe مؤنّثة والمؤنّث لا يتغيّر في النصب فتبقى die؛ بينما der Salat مذكّر فيصير einen في النصب. وجاءت die معرفةً لأنّ النادل ذكر الشوربة قبلُ في قائمة اليوم، فصارت معلومة.",
        "optionExplanations": [
          undefined,
          "Suppe مؤنّثة لا مذكّرة، وعلامتها النهاية ‑e.",
          "الشوربة معدودة في المطعم: zwei Suppen.",
          "المتكلّمة أميرة لا النادل."
        ],
        "errorType": "case",
        "paragraph": 1
      }
    ],
    "redemittel": [
      {
        "de": "Ich möchte einen Kaffee, bitte. / Ich nehme die Suppe.",
        "ar": "أريد قهوة من فضلك. / آخذ الشوربة."
      },
      {
        "de": "Mit Milch, aber ohne Zucker.",
        "ar": "بحليب لكن بلا سكّر."
      },
      {
        "de": "Haben Sie auch …? / Was haben Sie heute?",
        "ar": "أعندكم أيضاً…؟ / ماذا لديكم اليوم؟"
      },
      {
        "de": "Ich habe Hunger. / Ich habe keinen Hunger mehr.",
        "ar": "أنا جائع. / لم أعد جائعاً."
      },
      {
        "de": "Die Rechnung, bitte! Wie viel macht das?",
        "ar": "الفاتورة من فضلك! كم الحساب؟"
      },
      {
        "de": "Zusammen oder getrennt? — Zusammen, bitte. Stimmt so.",
        "ar": "معاً أم منفصلين؟ — معاً من فضلك. احتفظ بالباقي."
      }
    ],
    "discussionAr": "مثّل الحوار مرّتين: مرّةً نادلاً ومرّةً زبوناً. اطلب في كلّ مرّة ثلاثة أصناف مختلفة، واشترط على نفسك استعمال einen مرّتين على الأقلّ (مع مذكّر) و eine أو die مرّةً (مع مؤنّث) وأداةً محايدة مرّة. ثمّ أضف جملةً واحدة بـ Ich habe Hunger أو Ich habe Durst، وجملةً بالنفي بـ kein. وفي الختام راجع: هل نصبتَ المذكّر وحده وتركتَ الباقي؟"
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "في المقهى",
        lines: [
          { speaker: "Kellner", de: "Guten Tag! Was möchten Sie?", ar: "نهارك سعيد! ماذا تريدون؟" },
          { speaker: "Sami", de: "Ich hätte gern einen Kaffee und ein Brot.", ar: "أريد قهوة وخبزاً." },
          { speaker: "Kellner", de: "Einen Kaffee und ein Brot. Und etwas zu trinken?", ar: "قهوة وخبز. وهل من مشروب؟" },
          { speaker: "Sami", de: "Ja, eine Milch, bitte.", ar: "نعم، حليب من فضلك." },
          { speaker: "Kellner", de: "Sehr gut. Das macht fünf Euro.", ar: "ممتاز. المجموع خمسة يورو." },
        ],
      },
      {
        id: "l2",
        title: "في السوبرماركت",
        lines: [
          { speaker: "Mona", de: "Ich brauche einen Apfel und eine Banane.", ar: "أحتاج تفاحة وموزة." },
          { speaker: "Karim", de: "Und wir kaufen ein Brot und die Milch.", ar: "ونشتري خبزاً والحليب." },
          { speaker: "Mona", de: "Hast du Hunger?", ar: "هل أنت جائع؟" },
          { speaker: "Karim", de: "Ja, ich habe großen Hunger!", ar: "نعم، أنا جائع جداً!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was bestellt Sami?",
        questionAr: "ماذا طلب سامي؟",
        options: ["einen Kaffee und ein Brot", "eine Milch und einen Kuchen", "einen Tee und ein Brot", "einen Kaffee und eine Banane"],
        correctIndex: 0,
        explanation: "قال: Ich hätte gern einen Kaffee und ein Brot — قهوة وخبزاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kostet das?",
        questionAr: "كم كان المجموع؟",
        options: ["fünf Euro", "vier Euro", "zehn Euro", "drei Euro"],
        correctIndex: 0,
        explanation: "قال النادل: Das macht fünf Euro — خمسة يورو.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was braucht Mona?",
        questionAr: "ماذا تحتاج منى؟",
        options: ["einen Apfel und eine Banane", "ein Brot und die Milch", "einen Kaffee", "ein Brot"],
        correctIndex: 0,
        explanation: "قالت: Ich brauche einen Apfel und eine Banane.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الطعام: ei، ch، وpf",
    items: [
      { de: "der Apfel", ar: "التفاحة", note: "pf معاً: آپفِل" },
      { de: "das Brot", ar: "الخبز", note: "o قصيرة: بروت" },
      { de: "die Milch", ar: "الحليب", note: "ch ناعمة بعد i: ميلش" },
      { de: "der Kaffee", ar: "القهوة", note: "Kaffee بحرف e ممدود في النهاية: كافيه" },
      { de: "der Käse", ar: "الجبن", note: "ä = إيه مع فم مفتوح: كيزِه" },
      { de: "die Eier", ar: "البيض", note: "ei = آي: آيِر" },
    ],
    tip: "انتبه: «die Eier» (بيض) و«der Euro» (يورو) كلاهما بـ ei/eu — كررهما معاً: آيِر، أُوي-رو.",
    shadowing: [
      { de: "Ich esse einen Apfel.", ar: "آكل تفاحة.", tip: "einen = آي-نِن (ei=آي)" },
      { de: "Ich trinke einen Kaffee.", ar: "أشرب قهوة.", tip: "Kaffee = كافيه بحرف e طويل" },
      { de: "Hast du Hunger?", ar: "هل أنت جائع؟", tip: "Hunger = هونغِر (u=وو)" },
      { de: "Das Brot ist frisch.", ar: "الخبز طازج.", tip: "Brot = بروت، frisch = فريش" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة لتستخدم أداة التنكير:",
      prompt: "Das ist der Apfel. → (هذه تفاحة)",
      acceptedAnswers: ["Das ist ein Apfel", "Das ist ein Apfel."],
      sampleAnswer: "Das ist ein Apfel.",
      explanation: "التنكير: der→ein. لاحظ: الجملة نفسها تبقى Nominativ لأن Apfel فاعل.",
      errorType: "article",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات (der/die/das أو ein/eine):",
      template: "Das ist ___ Apfel. Ich esse ___ Apfel. ___ Milch ist kalt.",
      blanks: [
        { correct: "ein", options: ["ein", "eine", "den"] },
        { correct: "einen", options: ["ein", "einen", "eine"] },
        { correct: "Die", options: ["Die", "Der", "Das"] },
      ],
      explanation: "الجملة 1 فاعل مذكر → ein. الجملة 2 مفعول → einen. الجملة 3 Milch مؤنثة → Die.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة (لاحظ النصب):",
      audioText: "Ich habe einen Bruder.",
      explanation: "Ich habe einen Bruder — haben تطلب النصب: ein→einen.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة التعريف الصحيحة:",
      questionDe: "___ Brot ist frisch.",
      questionAr: "الخبز طازج.",
      options: ["Das", "Der", "Die", "Ein"],
      correctIndex: 0,
      explanation: "Brot محايد → Das Brot. (ein أداة تنكير وليست تعريفاً هنا).",
      errorType: "article",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة في النصب:",
      questionDe: "Ich esse ___ Apfel.",
      questionAr: "آكل تفاحة.",
      options: ["einen", "ein", "einer", "eine"],
      correctIndex: 0,
      explanation: "بعد essen، المذكر ein→einen (نصب).",
      errorType: "case",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الطعام بجنسه (أداته):",
      pairs: [
        { left: "der Käse", right: "الجبن" },
        { left: "die Milch", right: "الحليب" },
        { left: "das Brot", right: "الخبز" },
        { left: "die Banane", right: "الموزة" },
      ],
      explanation: "Käse مذكر، Milch مؤنث، Brot محايد، Banane مؤنث. احفظها مع الأداة!",
      errorType: "gender",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه للنصب):",
      tokens: ["Ich", "einen", "Kaffee", "trinke", "."],
      correctSentence: "Ich trinke einen Kaffee.",
      explanation: "Ich + trinke (V2) + einen Kaffee (نصب).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe ein Brot. Und ich esse die Käse.",
      wrongWord: "die Käse",
      correctWord: "den Käse",
      options: ["den Käse", "der Käse", "das Käse", "ein Käse"],
      explanation: "Käse مذكر + مفعول → den Käse. (حتى مع التنكير: einen Käse).",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ habe/hast/hat:",
      template: "Ich ___ Hunger. Du ___ Durst. Er ___ einen Kaffee.",
      blanks: [
        { correct: "habe", options: ["habe", "hast", "hat"] },
        { correct: "hast", options: ["habe", "hast", "hat"] },
        { correct: "hat", options: ["habe", "hast", "hat"] },
      ],
      explanation: "ich→habe، du→hast، er→hat. سلم haben: هابه-هاست-هات.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل السؤال إلى جواب:",
      prompt: "Hast du Durst? → (أجب: نعم، أنا عطشان)",
      acceptedAnswers: ["Ja, ich habe Durst", "Ja, ich habe Durst."],
      sampleAnswer: "Ja, ich habe Durst.",
      explanation: "الجواب النموذجي: Ja, ich habe Durst.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich habe Hunger.",
      questionAr: "ما معنى الجملة؟",
      options: ["أنا جائع", "أنا عطشان", "أنا متعب", "أنا سعيد"],
      correctIndex: 0,
      explanation: "Hunger = جوع → Ich habe Hunger = أنا جائع.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich bin Durst.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "hast", "ist"],
      explanation: "العطش يُملك: Ich habe Durst (وIch bin durstig إذا أردنا الصفة).",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة (جملة طلب في المقهى):",
      audioText: "Ich hätte gern einen Tee.",
      explanation: "Ich hätte gern einen Tee = أريد شاياً (بأدب). لاحظ النصب: einen Tee.",
      errorType: "spelling",
    },
    {"id": "e11", "type": "fill-blank", "instructionAr": "أكمل بأداة النصب المناسبة:", "template": "Ich möchte ___ Kaffee und ___ Cola, bitte.", "blanks": [{"correct": "einen", "options": ["einen", "ein", "eine", "der"]}, {"correct": "eine", "options": ["eine", "einen", "ein", "die"]}], "explanation": "der Kaffee مذكّر ⟵ ينصب فيصير einen. و die Cola مؤنّثة ⟵ لا تتغيّر في النصب فتبقى eine. المذكّر وحده يتعب.", "errorType": "case"},
    {"id": "e12", "type": "error-correction", "instructionAr": "صحّح الخطأ:", "wrongSentence": "Ich bin Hunger und ich möchte etwas essen.", "wrongWord": "bin", "correctWord": "habe", "options": ["habe", "hat", "bist", "sind"], "explanation": "Hunger اسم لا صفة، والأسماء تُملَك بـhaben: Ich habe Hunger. ولو أردت الصفة لقلت Ich bin hungrig.", "errorType": "vocabulary"},
    {"id": "e13", "type": "multiple-choice", "instructionAr": "أيّ جملة صحيحة نحوياً؟", "questionDe": "Welcher Satz ist korrekt?", "questionAr": "أيّ جملة صحيحة؟", "options": ["Er ist einen Lehrer", "Er ist ein Lehrer", "Er hat ein Lehrer", "Er ist eine Lehrer"], "correctIndex": 1, "explanation": "sein فعل رابط لا ينصب، لأنّ «هو» و«المعلّم» ذاتٌ واحدة. فيُرفع الطرفان: ein Lehrer. والأفصح مع المهن إسقاط الأداة: Er ist Lehrer.", "optionExplanations": ["نصبٌ بعد فعلٍ رابط، وهو ممنوع.", undefined, "haben تعني الملكية، والمعنى هنا الهويّة.", "Lehrer مذكّر فلا تصحّ معه eine."], "errorType": "case"},
    {"id": "e14", "type": "word-ordering", "instructionAr": "رتّب الكلمات:", "tokens": ["Wir", "haben", "heute", "keine", "Zeit", "."], "correctSentence": "Wir haben heute keine Zeit .", "explanation": "الفعل haben في المركز الثاني، وظرف الزمان heute بعده، والمفعول المنفيّ في الآخر. و die Zeit مؤنّثة ⟵ keine بلا تغيير في النصب.", "errorType": "word-order"},
    {"id": "e15", "type": "transformation", "instructionAr": "حوّل الجملة إلى النفي بأداة النفي المناسبة:", "prompt": "Ich habe einen Bruder.", "acceptedAnswers": ["Ich habe keinen Bruder.", "Ich habe keinen Bruder"], "sampleAnswer": "Ich habe keinen Bruder.", "explanation": "نفي الاسم يكون بـkein لا بـnicht. و Bruder مذكّر منصوب بعد haben ⟵ keinen بنهاية ‑en، تماماً كما صارت ein ⟵ einen.", "errorType": "negation"},
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich esse ein Apfel.", right: "Ich esse einen Apfel.", whyAr: "بعد فعل الأكل/الشرب: المذكر ein→einen (نصب)." },
      { wrong: "Ich bin Hunger.", right: "Ich habe Hunger.", whyAr: "الجوع اسم «يُملَك» وليس صفة «تُكون»." },
      { wrong: "die Brot (جنس خاطئ)", right: "das Brot", whyAr: "Brot محايد. نصيحة: احفظ الخبز مع «الخبز» وليس وحده." },
    ],
    eselsbruecken: [
      "«den للنصب عند الرجال فقط» — der→den وein→einen، والباقي ثابت.",
      "«عندي جوع» مثل اللهجات العربية: Ich habe Hunger — حوّل من «أنا جائع» إلى «عندي جوع» وستتذكر haben تلقائياً.",
    ],
    culturalNote: {
      title: "Guten Appetit!",
      content:
        "قبل الأكل يقول الألمان «Guten Appetit!» (بألفة، حتى للغرباء في الكافتيريا). بعد الأكل: «Das hat gut geschmeckt!». ولا تقل «بسم الله» بصوت مسموع — يكفي أن تبدأ به في سرك، فالألمان لا يعتادون ذلك وربما يظنونه دعوة للصلاة!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir kaufen ___ Brot.",
      questionAr: "نشتري خبزاً.",
      options: ["ein", "einen", "eine", "der"],
      correctIndex: 0,
      explanation: "Brot محايد → ein (لا يتغير في النصب لأنه محايد).",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ du Durst? — Ja, ich habe Durst.",
      options: ["Hast", "Habe", "Hat", "Habt"],
      correctIndex: 0,
      explanation: "السؤال عن «أنت»: Hast du Durst?",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["einen", "Ich", "trinke", "Tee", "."],
      correctSentence: "Ich trinke einen Tee.",
      explanation: "Ich + trinke (V2) + einen Tee (نصب مذكر).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich esse die Apfel.",
      wrongWord: "die Apfel",
      correctWord: "den Apfel",
      options: ["den Apfel", "der Apfel", "das Apfel", "einen Apfel"],
      explanation: "Apfel مذكر مفرد → den في النصب. (die تُستخدم مع الجمع: die Äpfel).",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ (أداة تنكير صحيحة):",
      template: "Ich esse ___ Banane und ___ Apfel.",
      blanks: [
        { correct: "eine", options: ["eine", "ein", "einen"] },
        { correct: "einen", options: ["eine", "ein", "einen"] },
      ],
      explanation: "Banane مؤنثة → eine (لا تتغير في النصب). Apfel مذكر مفعول → einen.",
      errorType: "case",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Essen / das Trinken", ar: "الطعام / الشراب", example: "Essen und Trinken sind wichtig.", exampleAr: "الأكل والشرب مهمان.", level: "A1" },
    { id: "fc2", de: "der Apfel / die Banane", ar: "التفاحة / الموزة", example: "Ich esse einen Apfel.", exampleAr: "آكل تفاحة.", level: "A1" },
    { id: "fc3", de: "das Brot", ar: "الخبز", example: "Das Brot ist frisch.", exampleAr: "الخبز طازج.", level: "A1" },
    { id: "fc4", de: "die Milch", ar: "الحليب", example: "Ich trinke die Milch.", exampleAr: "أشرب الحليب.", level: "A1" },
    { id: "fc5", de: "der Käse", ar: "الجبن", example: "Der Käse schmeckt gut.", exampleAr: "الجبن طعمه جيد.", level: "A1" },
    { id: "fc6", de: "essen / trinken", ar: "يأكل / يشرب", example: "Wir essen und trinken.", exampleAr: "نأكل ونشرب.", level: "A1" },
    { id: "fc7", de: "der Hunger / der Durst", ar: "الجوع / العطش", example: "Ich habe Hunger und Durst.", exampleAr: "أنا جائع وعطشان.", level: "A1" },
    { id: "fc8", de: "kaufen", ar: "يشتري", example: "Wir kaufen ein Brot.", exampleAr: "نشتري خبزاً.", level: "A1" },
    {"id": "fc9", "de": "einen (Akkusativ maskulin)", "ar": "أداة نصب المذكّر", "example": "Ich esse einen Apfel.", "exampleAr": "آكل تفّاحة.", "level": "A1"},
    {"id": "fc10", "de": "kein / keine / keinen", "ar": "أداة نفي الاسم", "example": "Ich habe keine Zeit.", "exampleAr": "ليس عندي وقت.", "level": "A1"},
    {"id": "fc11", "de": "möchten", "ar": "يودّ (صيغة الطلب المهذّبة)", "example": "Ich möchte einen Tee, bitte.", "exampleAr": "أريد شاياً من فضلك.", "level": "A1"},
    {"id": "fc12", "de": "die Rechnung", "ar": "الفاتورة", "example": "Die Rechnung, bitte!", "exampleAr": "الفاتورة من فضلك!", "level": "A1"},
    {"id": "fc13", "de": "das Brötchen", "ar": "الخبزة الصغيرة (محايدة بـ‑chen)", "example": "Ein Brötchen kostet fünfzig Cent.", "exampleAr": "الكعكة بخمسين سنتاً.", "level": "A1"},
    {"id": "fc14", "de": "hungrig / satt", "ar": "جائع / شبعان (صفتان مع sein)", "example": "Ich bin satt, danke.", "exampleAr": "أنا شبعان، شكراً.", "level": "A1"},
    { id: "fc15", de: "die Suppe", ar: "الحساء", example: "Ich nehme eine Suppe.", exampleAr: "آخذ حساءً.", level: "A1" },
    { id: "fc16", de: "der Salat", ar: "السلطة", example: "Möchten Sie einen Salat?", exampleAr: "أتودّ سلطة؟", level: "A1" },
    { id: "fc17", de: "der Kaffee", ar: "القهوة", example: "Einen Kaffee, bitte.", exampleAr: "قهوةً من فضلك.", level: "A1" },
    { id: "fc18", de: "nehmen", ar: "يأخذ", example: "Ich nehme das Käsebrötchen.", exampleAr: "آخذ سندويش الجبن.", level: "A1" },
    { id: "fc19", de: "Vielen Dank!", ar: "شكراً جزيلاً!", example: "Vielen Dank für alles!", exampleAr: "شكراً جزيلاً على كلّ شيء!", level: "A1" },
    { id: "fc20", de: "natürlich", ar: "بالطبع، طبعاً", example: "Natürlich, gern!", exampleAr: "بالطبع، بكلّ سرور!", level: "A1" },
  ],

  mediation: [
    {
      id: "med-a1-03-1",
      type: "simplify-announcement",
      titleAr: "بسّط قائمة طعام ألمانية بالعربية لصديق",
      sourceDe: "Heute: Suppe (3 €), Schnitzel mit Pommes (9 €), Apfelkuchen (2,50 €).",
      taskAr: "انقل القائمة بالعربية مع الأسعار لصديق لا يفهم الألمانية، مع توضيح أنواع الأطباق.",
      modelAnswerAr: "«اليوم: شوربة (3 يورو)، شنيتزل مع بطاطس مقلية (9 يورو)، كعكة تفاح (2.50 يورو).»",
      keyPointsAr: ["نقلت الأطباق الثلاثة", "نقلت الأسعار بدقة", "استخدمت أسماء مفهومة"],
    },
  ],
  interaction: [
    {
      id: "int-a1-03-1",
      scenarioAr: "في مقهى ألماني — تطلب طعاماً وشراباً.",
      scenarioDe: "Im Café — du bestellst Essen und Trinken.",
      strategyAr: "الاستراتيجية: الطلب المهذب (Ich hätte gern...) وفهم أسئلة النادل.",
      rounds: [
        {
          speakerDe: "Guten Tag! Was möchten Sie trinken?",
          speakerAr: "نهارك سعيد! ماذا تريد أن تشرب؟",
          options: [
            { de: "Ich hätte gern einen Kaffee, bitte.", ar: "أريد قهوة من فضلك.", best: true, replyDe: "Sehr gerne! Mit Milch und Zucker?", replyAr: "بكل سرور! مع حليب وسكر؟" },
            { de: "Ich bin ein Kaffee.", ar: "أنا قهوة.", best: false, replyDe: "Haha, Sie sind ein Kaffee? Okay, ein Kaffee kommt!", replyAr: "هاها، أنت قهوة؟ حسناً، قهوة قادمة!" },
          ],
        },
        {
          speakerDe: "Mit Milch und Zucker?",
          speakerAr: "مع حليب وسكر؟",
          options: [
            { de: "Mit Milch, bitte. Ohne Zucker.", ar: "مع حليب من فضلك. بدون سكر.", best: true, replyDe: "Alles klar! Und etwas zu essen?", replyAr: "حسناً! وهل تريد شيئاً للأكل؟" },
            { de: "Nein, danke. Nur Wasser.", ar: "لا شكراً. ماء فقط.", best: false, replyDe: "Okay, ein Wasser. Sonst noch etwas?", replyAr: "حسناً، ماء. أي شيء آخر؟" },
          ],
        },
        {
          speakerDe: "Möchten Sie auch etwas essen?",
          speakerAr: "هل تريد أيضاً شيئاً للأكل؟",
          options: [
            { de: "Ja, ich hätte gern einen Apfelkuchen, bitte.", ar: "نعم، أريد كعكة تفاح من فضلك.", best: true, replyDe: "Sehr gut! Das macht zusammen 5,50 Euro.", replyAr: "ممتاز! المجموع 5.50 يورو." },
            { de: "Ich möchte die Rechnung.", ar: "أريد الحساب.", best: false, replyDe: "Aber Sie haben noch nichts gegessen!", replyAr: "لكنك لم تأكل شيئاً بعد!" },
          ],
        },
      ],
    },
  ],
};
