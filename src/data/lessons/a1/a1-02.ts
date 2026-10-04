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
  duration: 45,
  summary:
    "أفراد العائلة، وأدوات الملكية: الجذر بحسب المالك والنهاية بحسب الاسم المملوك؛ مع وصف العائلة بجمل بسيطة.",

  /* 1) الأهداف التعليمية */
  lernziele: [
    {
      id: "z1",
      de: "Ich kann Familienmitglieder nennen.",
      ar: "أن أسمّي أفراد العائلة بالألمانية (Vater, Mutter, Bruder...).",
    },
    {
      id: "z2",
      de: "Ich kann mein/meine im Nominativ passend zum Besitzer und zum Nomen verwenden.",
      ar: "أن أختار جذر أداة الملكية بحسب المالك، وصيغتها بحسب الاسم المملوك في حالة الرفع.",
    },
    {
      id: "z3",
      de: "Ich kann meine Familie vorstellen.",
      ar: "أن أقدّم عائلتي بجمل بسيطة (Das ist mein Vater...).",
    },
    {
      id: "z4",
      de: "Ich kann fragen: Hast du Geschwister?",
      ar: "أن أسأل عن الإخوة والأخوات: هل لديك إخوة أو أخوات؟",
    },
  ],

  /* 2) التمهيد */
  einfuehrung: {
    motivatingQuestionAr:
      "قل «أبي» و«أمي» بالعربية... هل لاحظت أن العربية تضيف حرف الياء لنهاية الكلمة (أب + ي)? كيف تعتقد أن الألمانية تعبّر عن الملكية؟ قبل أن نرى القاعدة، خمّن!",
    motivatingQuestionDe: "Wie sagt man „mein Vater“ auf Arabisch?",
    contextAr:
      "في العربية نقول: أبي، أمّي، أخي — الملكية تُلحق بنهاية الاسم. في الألمانية الأمر مختلف تماماً: نضع كلمة مستقلة قبل الاسم (mein Vater). وسنكتشف معاً متى تكون mein ومتى meine.",
    contextDe: "mein Vater, meine Mutter, mein Bruder, meine Schwester …",
    connectionToPreviousAr:
      "في الدرس السابق تعلمنا: Ich bin / Ich heiße / Woher kommst du? اليوم سنضيف العائلة لنتمكن من تقديم نفسنا بشكل أوسع.",
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
        "أداة الملكية (Possessivartikel) تسبق الاسم، وتتكوّن من جذر ونهاية يؤديان وظيفتين مختلفتين:\n\n**الجذر يحدّد المالك**: ich ⟵ mein، du ⟵ dein، er ⟵ sein، sie ⟵ ihr.\n**النهاية تتبع الاسم المملوك** من حيث الجنس والعدد والحالة الإعرابية.\n\nفي هذه الكتلة نتمرّن أساساً على حالة الرفع (Nominativ):\n• مع الاسم المذكّر (der): mein Vater, mein Bruder, mein Sohn\n• مع الاسم المحايد (das): mein Kind, mein Haus\n• مع الاسم المؤنّث (die): meine Mutter, meine Schwester\n• مع الجمع: meine Eltern, meine Geschwister\n\nفي أمثلة الرفع هذه تظهر النهاية ‑e مع المؤنث والجمع، ولا تظهر مع المذكر والمحايد. لا تعمّم هذا الجدول على حالات أخرى؛ فالنهاية تتغيّر في Akkusativ وDativ أيضاً.\n\nقارن في الرفع: ein Vater / mein Vater، eine Mutter / meine Mutter، ein Kind / mein Kind. تتشابه أدوات الملكية والنفي مع نمط تصريف ein‑، مع اختلاف الجذور، ولا توجد صيغة جمع للأداة النكرة ein.\n\nالتركيز النحوي في هذا الدرس هو أدوات الملكية في الرفع. ستصادف في القراءة تراكيب سياقية من حالات أخرى، مثل einen Bruder (Akkusativ)، وmit meinen Eltern أو neben ihm (Dativ). ورودها في النص لا يعني أن تصريف تلك الحالات هو هدف هذه الكتلة.",
      whyAr:
        "تساعد أدوات الملكية المتعلّم على تسمية أفراد الأسرة ووصفهم، وهي مفردات مألوفة في بدايات التعلم. ركّز هنا على فصل معلومتين: الجذر يبيّن المالك، والنهاية توافق الاسم المملوك والحالة المستخدمة. أما التراكيب التي تظهر بحالات أخرى في النص فتُقرأ في سياقها، ولا يُفترض إتقان تصريفها من هذا الدرس وحده.",
      table: {
        title: "قاعدة mein/meine في حالة الرفع (Nominativ)",
        columns: ["جنس الاسم", "المثال", "أداة الملكية"],
        rows: [
          { label: "مذكر (der)", cells: ["der Vater (الأب)", "mein Vater"] },
          { label: "محايد (das)", cells: ["das Kind (الطفل)", "mein Kind"] },
          { label: "مؤنث (die)", cells: ["die Mutter (الأم)", "meine Mutter"] },
          {
            label: "الجمع (die)",
            cells: ["die Eltern (الوالدان)", "meine Eltern"],
          },
        ],
      },
      examples: [
        {
          de: "Das ist mein Vater. Er heißt Karim.",
          ar: "هذا أبي. اسمه كريم. (Vater مذكّر ⟵ mein)",
        },
        {
          de: "Meine Mutter heißt Leila.",
          ar: "أمّي اسمها ليلى. (Mutter مؤنّثة ⟵ meine)",
        },
        { de: "Mein Bruder ist zehn Jahre alt.", ar: "أخي عمره عشر سنوات." },
        { de: "Meine Schwester wohnt in Sousse.", ar: "أختي تسكن في سوسة." },
        {
          de: "Meine Eltern sind sehr nett.",
          ar: "والداي لطيفان جداً. (جمع ⟵ meine + sind)",
        },
        {
          de: "Mein Kind heißt Nour.",
          ar: "اسم طفلي نور. (Kind محايد ⟵ mein)",
        },
        {
          de: "Ich bin Amira und das ist mein Mann.",
          ar: "أنا أميرة وهذا زوجي. (المتكلّمة امرأة والأداة mein لأنّ Mann مذكّر)",
        },
        {
          de: "Meine Geschwister wohnen nicht hier.",
          ar: "إخوتي لا يسكنون هنا.",
        },
      ],
      comparisonWithArabic:
        "تُعبّر العربية كثيراً عن الملكية بضمير متصل بالاسم: «أمّي» و«أمّها». أمّا الألمانية فتستعمل أداةً منفصلة قبل الاسم. وفي الأداة الألمانية يحدّد الجذر المالك (ihr مثلاً)، بينما تتبع النهاية جنس الاسم المملوك وعدده وحالته: ihr Vater، ihre Mutter، ihre Eltern. لذلك لا نختار النهاية بحسب جنس المتكلم أو المخاطَب، ولا نقابل كل صيغة ألمانية بلاحقة عربية حرفياً.",
      eselsbruecke:
        "في حالة الرفع فقط، قارن بأداة النكرة: ein Vater ⟵ mein Vater، وeine Mutter ⟵ meine Mutter. تذكّر أن الجذر يحدّد المالك، وأن النهاية تتبع الاسم المملوك؛ وعند الانتقال إلى حالة إعرابية أخرى ارجع إلى جدول تلك الحالة.",
      commonMistakes: [
        {
          wrong: "mein Mutter",
          right: "meine Mutter",
          whyAr:
            "في حالة الرفع، die Mutter مؤنثة، لذا نقول meine Mutter. لا يغيّر جنس المتكلم هذه الصيغة؛ اختر الجذر بحسب المالك والنهاية بحسب الاسم المملوك.",
        },
        {
          wrong: "meine Vater",
          right: "mein Vater",
          whyAr:
            "الخطأ المعاكس: إقحام ‑e حيث لا موضع لها. der Vater مذكّر، فالأداة عارية بلا نهاية. وكثيراً ما يقع فيه مَن حفظ meine Mutter ثمّ عمّمها على كلّ شيء. في حالة الرفع تظهر النهاية ‑e مع المؤنّث والجمع.",
        },
        {
          wrong: "Ich bin Sara. Meine Bruder heißt Ali.",
          right: "Ich bin Sara. Mein Bruder heißt Ali.",
          whyAr:
            "خطأ أعمق: المتكلّمة أنثى فظنّت أنّ الصيغة تتغيّر تبعاً لجنسها. في هذه الجملة المالك هو المتكلّمة (ich)، لذا يكون الجذر mein؛ ثمّ يأتي Bruder مذكّراً في حالة الرفع، فنقول mein Bruder. جنس المتكلّمة لا يغيّر جذر المتكلم ich.",
        },
        {
          wrong: "Meine Eltern ist nett.",
          right: "Meine Eltern sind nett.",
          whyAr:
            "Eltern اسم جمع في معنى الوالدين، ولذلك يأتي معه الفعل بصيغة الجمع sind. لا تخلط هذا بجمع الأسماء غير العاقلة في العربية؛ المقصود هنا أشخاص، والمطابقة في المثال جمع أيضاً.",
        },
      ],
      relatedRuleComparison: {
        title: "mein / kein / ein — عائلة واحدة بتصريف واحد",
        content:
          "في حالة الرفع تتشابه نهايات أدوات الملكية والنفي مع نمط ein/eine: ein Vater / mein Vater، eine Mutter / meine Mutter، ein Kind / mein Kind. وتملك mein وkein صيغةً للجمع، بينما لا تملك ein أداة نكرة في الجمع. هذا تشابه في نمط التصريف، لا تطابق حرفي بين الكلمات؛ كما تتغير النهايات عند استعمال Akkusativ وDativ.",
      },
    },
    {
      id: "t2",
      titleAr: "مفردات العائلة — هل تعلم أن بعضها يُركّب؟",
      titleDe: "Familienwörter",
      explanationAr:
        "مفردات العائلة تصلح للتدرّب على أدوات الملكية والجمع ووصف أشخاص مألوفين.\n\n**أفراد العائلة:**\nder Vater (الأب) · die Mutter (الأمّ) · der Sohn (الابن) · die Tochter (الابنة) · der Bruder (الأخ) · die Schwester (الأخت) · das Kind (الطفل — اسم محايد نحوياً).\n\n**أسماء جامعة:**\n• **die Eltern** تعني الوالدين وتُستعمل عادةً بصيغة الجمع؛ للفرد نقول Vater أو Mutter أو das Elternteil.\n• **die Geschwister** هي الصيغة الشائعة للإخوة والأخوات معاً. يوجد مفرد das Geschwister في استعمال تخصصي أو سويسري، لكن المتعلم في المستوى الأول يستعمل عادة Bruder أو Schwester عند الحديث عن فرد واحد.\n• **die Großeltern** تعني الجدّين، ويشيع في الكلام اليومي أيضاً Opa وOma.\n\n**تركيب الكلمات والاشتقاق:**\n• في كلمات القرابة، يضيف **Groß‑** معنى الجدّ/الجدّة: Großmutter، Großvater، Großeltern.\n• **der Enkel** هو الحفيد، و**die Enkelin** هي الحفيدة؛ هنا تُستعمل اللاحقة الاشتقاقية ‑in لتكوين اسم مؤنث لشخص. ومن الأزواج الواضحة أيضاً Freund/Freundin وLehrer/Lehrerin. لا تجعل مجرد نهاية الحروف ‑in قاعدة لتحديد جنس كل اسم: فـdas Benzin محايد وder Termin مذكر، والنهاية الكتابية ليست دائماً اللاحقة الاشتقاقية المؤنثة.\n\n**جموع شائعة:**\nder Vater ⟵ die Väter · die Mutter ⟵ die Mütter · der Bruder ⟵ die Brüder · die Tochter ⟵ die Töchter. احفظ هذه الصيغ كما هي. وSchwester تأخذ النهاية ‑n: Schwestern، بينما Sohn يصبح Söhne.\n\n**التقديم:** يُقدَّم الشخص بعبارة Das ist …: Das ist mein Vater / meine Mutter / mein Kind. هنا لا يتغير das بتغيّر الشخص الذي نعرّف به.",
      whyAr:
        "يقدّم موضوع العائلة مفردات مألوفة وفرصة للتدرّب على التعريف بأشخاص وطرح أسئلة بسيطة. يذكر الوصف الرسمي لاختبار Goethe-Zertifikat A1: Start Deutsch 1 المعلوماتَ الشخصية والعائلة ضمن الموضوعات المألوفة واليومية؛ وهذا لا يضمن سؤالاً بعينه ولا يفرض على المتعلم كشف تفاصيل شخصية. في هذا الدرس تُربط المفردات بأدوات الملكية والجمع ووصف صورة؛ وأي تراكيب من حالات أخرى في النص تظل سياقية ما لم تُشرح صراحةً.",
      table: {
        title: "أفراد العائلة",
        columns: ["ألماني", "عربي", "الجنس"],
        rows: [
          { label: "der Vater", cells: ["الأب", "مذكر"] },
          { label: "die Mutter", cells: ["الأم", "مؤنث"] },
          { label: "der Bruder", cells: ["الأخ", "مذكر"] },
          { label: "die Schwester", cells: ["الأخت", "مؤنث"] },
          { label: "die Eltern", cells: ["الوالدان", "جمع"] },
          { label: "die Geschwister", cells: ["الإخوة والأخوات", "جمع"] },
          { label: "der Sohn", cells: ["الابن", "مذكر"] },
          { label: "die Tochter", cells: ["الابنة", "مؤنث"] },
          { label: "der Opa / die Oma", cells: ["الجد / الجدة", "مذكر/مؤنث"] },
        ],
      },
      examples: [
        {
          de: "Hast du Geschwister? — Ja, ich habe einen Bruder und zwei Schwestern.",
          ar: "هل لديك إخوة أو أخوات؟ — نعم، لي أخ وأختان.",
        },
        {
          de: "Meine Eltern wohnen in Kairouan.",
          ar: "والداي يسكنان في القيروان. (Eltern جمع ⟵ wohnen)",
        },
        {
          de: "Das ist mein Kind. Es heißt Nour.",
          ar: "هذا طفلي، واسم الطفل نور. (Kind محايد نحوياً ⟵ الضمير es)",
        },
        {
          de: "Meine Großmutter ist achtzig Jahre alt.",
          ar: "جدّتي عمرها ثمانون سنة.",
        },
        {
          de: "Mein Opa und meine Oma wohnen zusammen.",
          ar: "جدّي وجدّتي يسكنان معاً. (الصيغة اليومية الودودة)",
        },
        {
          de: "Wie viele Kinder haben Sie? — Drei: zwei Söhne und eine Tochter.",
          ar: "كم طفلاً لديك؟ — ثلاثة: ابنان وابنة.",
        },
        {
          de: "Meine Schwestern heißen Amira und Sara.",
          ar: "أختاي اسمهما أميرة وسارة. (جمع بالنهاية ‑n)",
        },
        {
          de: "Meine Tante wohnt in Deutschland.",
          ar: "خالتي (أو عمّتي) تسكن في ألمانيا. (Tante تصلح للاثنتين)",
        },
      ],
      comparisonWithArabic:
        "تختلف اللغتان في طريقة تسمية القرابة، لا في كون إحداهما «أدق» بإطلاق: تستعمل الألمانية Onkel وTante للجهتين، ويمكن إضافة väterlicherseits أو mütterlicherseits عند الحاجة؛ وتفرّق العربية عادةً بين العم والخال وبين العمة والخالة.\n\nكذلك، das Kind محايد نحوياً في الألمانية، ولا يعني ذلك أن الطفل بلا جنس بشري؛ إنه تصنيف نحوي لا وصف للهوية.\n\nللعربية صيغة مثنّى، أما الألمانية المعاصرة فلا تملك تصريف مثنّى مستقلاً للأسماء؛ تستعمل الجمع مع العدد أو كلمة تدل على اثنين.\n\nتأخذ أسماء الأشخاص مثل Eltern فعلاً بصيغة الجمع في الألمانية: Meine Eltern sind. لا تنقل إلى هذه الأسماء قاعدة توافق جمع غير العاقل في العربية؛ فـEltern وGeschwister وLeute تدل على أشخاص.",
      eselsbruecke:
        "احفظ صيغ الجمع كما ترد في الأمثلة: Väter, Mütter, Brüder, Töchter، ثم Schwestern وSöhne. وفي الاشتقاق تذكّر أزواج الأشخاص الواضحة مثل Enkel/Enkelin؛ لا تحكم على جنس كل اسم من نهاية حروفه وحدها.",
      commonMistakes: [
        {
          wrong: "Die Eltern ist nett.",
          right: "Die Eltern sind nett.",
          whyAr:
            "Eltern تُستعمل في معنى الوالدين بصيغة الجمع، لذا يأتي معها الفعل sind. تذكّر مطابقة الفعل مع معنى الجمع؛ ولا تخلطها باستعمال أسماء غير العاقل في العربية.",
        },
        {
          wrong: "Mein Vater und meine Mutter ist nett.",
          right: "Mein Vater und meine Mutter sind nett.",
          whyAr:
            "اجتماع الفاعلين بـ und يجعل الفاعل جمعاً، لذلك نقول sind. أمّا Mein Vater und meine Mutter sind nett فهي جملة صحيحة؛ ويمكن اختصارها إلى Meine Eltern sind nett، من دون أن يكون الاختصار شرطاً للصواب.",
        },
        {
          wrong: "Das Mädchen sind schön.",
          right: "Das Mädchen ist schön.",
          whyAr:
            "هنا نتحدث عن فتاة واحدة: Mädchen مفرد ومحايد نحوياً، لذلك يأتي معه الفعل ist. أما إذا قصدنا الفتيات بصيغة الجمع فنقول: Die Mädchen sind schön.",
        },
        {
          wrong: "Ich habe zwei Bruders.",
          right: "Ich habe zwei Brüder.",
          whyAr:
            "جمع Bruder هو Brüder، لا Bruders؛ احفظ صيغة هذه الكلمة كما هي. لا تنقل نهاية الجمع الإنجليزية ‑s آلياً إلى الأسماء الألمانية.",
        },
      ],
      relatedRuleComparison: {
        title: "الاسم المركّب: كيف تعرف جنسه بلا معجم؟",
        content:
          "في كثير من المركبات الألمانية التحديدية يحدّد العنصر الأخير جنس المركب، لأنه رأس الكلمة: die Großmutter من Mutter، وdas Kinderzimmer من Zimmer، وder Familienname من Name. هذه قاعدة نافعة، لكن لا تستنتج منها أن جنس كل مركب وجمعه مضمونان بلا استثناء؛ احفظ أداة الاسم الشائع واستعماله الكامل عندما يلزم.",
      },
    },
    {
      id: "t3",
      titleAr: "عائلة غيرك: dein / sein / ihr",
      titleDe: "Wem gehört es? dein, sein und ihr",
      explanationAr:
        "تعلّمتَ mein عند الحديث عن نفسك. وعند الحديث عن عائلة شخص آخر، تذكّر القاعدتين معاً:\n\n**الجذر بحسب المالك:** أنا ⟵ mein‑؛ أنت (du) ⟵ dein‑؛ هو ⟵ sein‑؛ هي أو هم ⟵ ihr‑؛ نحن ⟵ unser‑؛ أنتم (ihr) ⟵ euer‑؛ والصيغة الرسمية للملكية ⟵ Ihr‑.\n\n**النهاية بحسب الاسم المملوك والحالة:** في الرفع نقول sein Bruder / seine Mutter، وihr Vater / ihre Schwester. الجذر يعرّف المالك، والنهاية تتبع الاسم الذي تسبقه الأداة.\n\nانتبه إلى وظائف ihr في الأمثلة:\n• ihr Vater = أبوها أو أبوهم، بحسب السياق؛ هنا ihr أداة ملكية تسبق الاسم.\n• Ihr seid nett = أنتم لطفاء؛ هنا ihr ضمير فاعل. إذا جاءت الكلمة في أول الجملة تُكتب بحرف كبير بسبب موقعها، فلا تكفي الكتابة الكبيرة وحدها لتحديد المعنى.\n• في صيغة الاحترام تُكتب أداة الملكية Ihr بحرف كبير أيضاً، حتى في وسط الجملة؛ ويُحدّد السياق هل المقصود «حضرتك» أم معنى آخر.\n• توجد كذلك صيغة ihr بوصفها ضمير داتيف بمعنى «لها»، مثل Ich helfe ihr. ستُشرح الحالة لاحقاً؛ لذلك لا تعتمد قاعدة آلية من نوع «انظر إلى الكلمة التالية» للفصل بين كل استعمالات ihr.",
      whyAr:
        "يساعد التفريق بين المالك والاسم المملوك على وصف أشخاص آخرين، لا الأسرة الذاتية فقط. تدرّب على تعيين المرجع من الجملة والسياق، ثم اختر الجذر والنهاية كلّاً على حدة. قد تتناول اختبارات A1 موضوع العائلة، لكن صيغة السؤال ومحتواه يتغيران؛ وهذه الأمثلة تدريب تعليمي وليست وعداً بسؤال امتحاني محدد.",
      table: {
        title: "الجذر حسب المالك، والنهاية حسب المملوك",
        columns: ["المالك", "مع der/das", "مع die (مؤنث/جمع)"],
        rows: [
          { label: "أنا (ich)", cells: ["mein Bruder", "meine Schwester"] },
          {
            label: "أنتَ/أنتِ (du)",
            cells: ["dein Bruder", "deine Schwester"],
          },
          { label: "هو (er)", cells: ["sein Bruder", "seine Schwester"] },
          { label: "هي (sie)", cells: ["ihr Bruder", "ihre Schwester"] },
        ],
      },
      examples: [
        {
          de: "Ist das dein Bruder? — Nein, das ist ihr Bruder.",
          ar: "أهذا أخوك؟ — لا، هذا أخوها.",
        },
        {
          de: "Ali kommt aus Tunis. Seine Mutter wohnt in Sfax.",
          ar: "علي من تونس. أمّه تسكن في صفاقس. (مالك مذكّر + مملوك مؤنّث)",
        },
        {
          de: "Lena ist neu hier. Ihr Vater arbeitet in Berlin.",
          ar: "لينا جديدة هنا. أبوها يعمل في برلين. (مالك مؤنّث + مملوك مذكّر)",
        },
        { de: "Deine Eltern sind sehr nett.", ar: "والداك لطيفان جداً." },
        {
          de: "Herr Weber, wie heißt Ihre Frau?",
          ar: "سيد فيبر، ما اسم زوجتك؟ (Ihre بحرف كبير = الصيغة الرسمية)",
        },
        {
          de: "Das sind Ali und Sara. Ihre Kinder heißen Nour und Amir.",
          ar: "هذان علي وسارة. أولادهما اسمهما نور وأمير. (ihr = ـهما/ـهم)",
        },
        {
          de: "Ihr seid meine Freunde.",
          ar: "أنتم أصدقائي. (ihr هنا ضمير فاعل لأنّ بعده فعلاً)",
        },
        {
          de: "Unsere Familie ist groß.",
          ar: "عائلتنا كبيرة. (unser + ‑e لأنّ Familie مؤنّثة)",
        },
      ],
      comparisonWithArabic:
        "في العربية تظهر الملكية كثيراً بضمير متصل بالاسم، بينما تفصلها الألمانية في أداة تسبق الاسم: يعبّر جذر الأداة عن المالك، وتعبّر نهايتها عن مطابقة الاسم المملوك والحالة. لا تقابل صيغ الضمائر بين اللغتين واحداً بواحد؛ فـihr قد تعني «لها» أو «لهم» كأداة ملكية، وقد تأتي ضميراً للفاعل أو للداتيف في تراكيب أخرى. وفي الكتابة، Sie/Ihr صيغة احترام، لكن استعمالها تحدده العلاقة والسياق، لا قاعدة ثابتة عن كل شخص أكبر سناً أو كل موقف عمل.",
      eselsbruecke:
        "في المثالين هنا، اسأل سؤالين: مَن المالك؟ وما الاسم الذي تصفه الأداة؟ ثم اقرأ الجملة كاملة. قارن ihr Vater (أداة ملكية قبل Vater) بـ Ihr seid (ضمير فاعل يتبعه seid). هذه أمثلة للتعرّف، وليست قاعدة موضعية تكفي لكل استعمالات ihr؛ قد تكون ihr ضمير داتيف أيضاً.",
      commonMistakes: [
        {
          wrong: "Lena und ihre Vater",
          right: "Lena und ihr Vater",
          whyAr:
            "أُضيفت ‑e لأنّ المالكة أنثى، وهذا خلطٌ بين وظيفتي الكلمة. الجذر ihr يحدّد المالك، أمّا الاسم المملوك فهو Vater؛ وفي صيغة الرفع يأتي مذكّراً بلا نهاية. الجذر للمالك، والنهاية للاسم المملوك والحالة.",
        },
        {
          wrong: "Ali und sein Mutter",
          right: "Ali und seine Mutter",
          whyAr:
            "الخطأ المعاكس تماماً: أُهملت النهاية لأنّ المالك ذكر. لكنّ Mutter مؤنثة، لذا تكون النهاية ‑e في صيغة الرفع مهما كان المالك. وتُحدّد الحالة الإعرابية أيضاً صيغة النهاية في الحالات الأخرى.",
        },
        {
          wrong: "Ihr seid mein Schwester.",
          right: "Ihr seid meine Schwestern. / Das ist meine Schwester.",
          whyAr:
            "خلطٌ ثلاثي شائع: ihr هنا ضمير فاعل بمعنى «أنتم» (بدليل الفعل seid بعده)، والمملوك Schwester مؤنّث فيلزمه meine، والجمع يقتضي Schwestern. في هذا المثال يظهر معنى ihr من وظيفة الكلمة في الجملة؛ لا تعمم قاعدةً موضعية على كل استعمالاتها.",
        },
        {
          wrong: "Frau Weber, wie heißt deine Tochter?",
          right: "Frau Weber, wie heißt Ihre Tochter?",
          whyAr:
            "في هذا التمرين ذُكر صراحةً أن السياق رسمي، لذا تكون Ihre هي الصيغة المتوقعة. في الاستعمال الفعلي يعتمد الانتقال بين du وSie على العلاقة والسياق، ولا يكفي اللقب أو العمر وحده لوصف كل الحالات.",
        },
      ],
      relatedRuleComparison: {
        title: "أين نحن من نظام الحالات؟ خريطة الطريق",
        content:
          "هدف التدريب على أدوات الملكية هنا هو صيغ الرفع. وتظهر في نص القراءة أمثلة من حالات أخرى، مثل einen Bruder (Akkusativ)، mit meinen Eltern (Dativ)، jeden Sonntag (Akkusativ)، وneben ihm (Dativ). هي تراكيب في النص وليست شرحاً كاملاً لتصريف تلك الحالات؛ لا تخلط بين التعرّف عليها وبين إتقان قواعدها.",
      },
    },
  ],

  /* 4) الاستماع */
  reading: {
    id: "read-a1-02",
    titleDe: "Eine Fotografie aus Kairouan",
    titleAr: "صورة من القيروان",
    textType: "erzaehlung",
    paragraphs: [
      "Hallo, ich bin Amira. Hier ist ein Foto von meiner Familie. Das Foto ist alt, aber ich mag es sehr. Wir sind bei meinen Großeltern in Kairouan. Meine Familie ist groß und wir sind oft zusammen.",
      "Links steht mein Vater. Er heißt Karim und er ist Lehrer. Neben ihm sitzt meine Mutter Leila. Sie ist Ärztin und sie arbeitet in einem Krankenhaus. Meine Eltern sind seit fünfundzwanzig Jahren verheiratet und sie sind immer sehr freundlich.",
      "Ich habe zwei Geschwister: einen Bruder und eine Schwester. Mein Bruder heißt Youssef. Er ist neunzehn Jahre alt und studiert in Tunis. Seine Freundin Sonia studiert auch dort. Meine Schwester Nour ist noch klein. Sie ist sieben Jahre alt und geht in die Schule.",
      "Rechts auf dem Foto sind meine Großeltern. Mein Opa ist achtzig Jahre alt, aber er arbeitet immer noch im Garten. Seine Frau, meine Oma, kocht sehr gut. Ihr Couscous ist berühmt in der Familie! Auch meine Tante ist da. Ihr Mann ist nicht auf dem Foto, denn er fotografiert.",
      "Und ich? Ich stehe in der Mitte und ich lache. Heute wohne ich in Deutschland und meine Familie ist weit weg. Aber jeden Sonntag telefoniere ich mit meinen Eltern. Dann fragt meine Mutter immer: Wie geht es dir, mein Kind?",
    ],
    paragraphsAr: [
      "مرحباً، أنا أميرة. هذه صورة لعائلتي. الصورة قديمة لكنّها تعجبني كثيراً. نحن عند جدّيّ في القيروان. عائلتي كبيرة ونكون معاً كثيراً.",
      "على اليسار يقف أبي. اسمه كريم وهو معلّم. بجانبه تجلس أمّي ليلى. هي طبيبة وتعمل في مستشفى. والداي متزوّجان منذ خمس وعشرين سنة وهما ودودان دائماً.",
      "لديّ أخ وأخت. أخي اسمه يوسف. عمره تسعة عشر عاماً ويدرس في تونس. صديقته سنية تدرس هناك أيضاً. أختي نور ما زالت صغيرة. عمرها سبع سنوات وتذهب إلى المدرسة.",
      "على يمين الصورة جدّاي. جدّي عمره ثمانون سنة، ومع ذلك ما زال يعمل في الحديقة. زوجته، جدّتي، تطبخ طبخاً ممتازاً. كسكسيها مشهور في العائلة! وعمّتي/خالتي حاضرة أيضاً. زوجها ليس في الصورة لأنّه هو المصوّر.",
      "وأنا؟ أقف في الوسط وأضحك. أسكن اليوم في ألمانيا وعائلتي بعيدة. لكنّني أتّصل بوالديّ كلّ يوم أحد. وحينها تسألني أمّي دائماً: كيف حالك يا ابنتي؟",
    ],
    glossary: [
      {
        de: "das Foto",
        ar: "الصورة",
        noteAr:
          "محايدة، وجمعها الشائع die Fotos.",
      },
      {
        de: "die Großeltern",
        ar: "الجدّان",
        noteAr:
          "تُستعمل بصيغة الجمع للجدّين؛ والمفردان: der Großvater وdie Großmutter.",
      },
      {
        de: "der Lehrer / die Ärztin",
        ar: "المعلّم / الطبيبة",
        noteAr:
          "المهن تأتي بعد sein بلا أداة: Er ist Lehrer. والمؤنّث بالنهاية ‑in: der Arzt ⟵ die Ärztin (مع إمالة).",
      },
      {
        de: "verheiratet",
        ar: "متزوّج",
        noteAr:
          "صفة تُستعمل مع sein: Sie sind verheiratet. ومن أضدادها ledig (غير متزوج)؛ وتُستعملان لوصف الحالة الاجتماعية.",
      },
      {
        de: "studieren",
        ar: "يدرس (في الجامعة)",
        noteAr:
          "يخصّ الدراسة الجامعية. أمّا التلميذ في المدرسة فيقال عنه: Er geht in die Schule أو er lernt.",
      },
      {
        de: "immer noch",
        ar: "ما زال / لا يزال",
        noteAr:
          "تعبير من كلمتين يفيد استمرار الحال خلافاً للمتوقّع. وموضعه بعد الفعل: Er arbeitet immer noch.",
      },
      {
        de: "berühmt",
        ar: "مشهور",
        noteAr:
          "صفة. ويُقال berühmt für etwas (مشهور بشيء) أو berühmt in (مشهور في نطاق).",
      },
      {
        de: "in der Mitte",
        ar: "في الوسط",
        noteAr:
          "تعبير مكاني ثابت. وأخواته: links (يسار)، rechts (يمين)، oben (أعلى)، unten (أسفل) — وكلّها مفيدة لوصف الصور.",
      },
      {
        de: "weit weg",
        ar: "بعيد",
        noteAr:
          "تعبير من كلمتين، وضدّه in der Nähe (قريب). وتُستعمل مع sein: Die Familie ist weit weg.",
      },
      {
        de: "telefonieren mit",
        ar: "يتّصل هاتفياً بـ",
        noteAr:
          "الحرف mit يجرّ ما بعده حتماً: mit meinen Eltern. وستدرس هذا في باب الجرّ (Dativ).",
      },
      {
        de: "jeden Sonntag",
        ar: "كلّ يوم أحد",
        noteAr:
          "ظرف زمان في حالة النصب. والنمط عامّ: jeden Tag, jeden Montag, jede Woche.",
      },
      {
        de: "die Freundin",
        ar: "الصديقة / الخليلة",
        noteAr:
          "قد تعني صديقةً أو شريكةً عاطفية، سواء وردت مع eine أو meine؛ الأداة وحدها لا تحسم العلاقة. في هذه القصة لا يحدَّد نوع العلاقة، فاختر ترجمة محايدة أو اذكر الاحتمالين.",
      },
    ],
    questions: [
      {
        id: "r1",
        type: "multiple-choice",
        instructionAr: "اقرأ الفقرة الثانية واختر:",
        questionDe: "Was ist Amiras Mutter von Beruf?",
        questionAr: "ما مهنة أمّ أميرة؟",
        options: [
          "Sie ist Lehrerin",
          "Sie ist Ärztin",
          "Sie ist Studentin",
          "Sie arbeitet im Garten",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «meine Mutter Leila. Sie ist Ärztin». والفخّ أنّ مهنة المعلّم ذُكرت في الجملة السابقة مباشرةً لكنّها للأب كريم، والعمل في الحديقة للجدّ. فتتبّع الضمير sie لا الكلمة الأقرب.",
        optionExplanations: [
          "المعلّم هو الأب كريم.",
          undefined,
          "الطالبان هما يوسف وسنية.",
          "العمل في الحديقة للجدّ في الفقرة الرابعة.",
        ],
        errorType: "vocabulary",
        paragraph: 1,
      },
      {
        id: "r2",
        type: "multiple-choice",
        instructionAr: "الفقرة الثالثة — انتبه لأداة الملكية:",
        questionDe:
          "Warum heißt es «seine Freundin» und nicht «ihre Freundin»?",
        questionAr: "لماذا قيل seine Freundin لا ihre Freundin؟",
        options: [
          "Weil Freundin feminin ist",
          "Weil der Besitzer Youssef ist, also maskulin",
          "Weil Sonia studiert",
          "Weil Amira das sagt",
        ],
        correctIndex: 1,
        explanation:
          "الجذر يُختار بحسب المالك، ومالك الصديقة هو يوسف وهو مذكّر ⟵ الجذر sein. أمّا النهاية ‑e فهي التي جاءت من تأنيث Freundin. فالكلمة تحمل رسالتين: جذرها يقول «مالكها رجل»، ونهايتها تقول «المملوك مؤنّث».",
        optionExplanations: [
          "تأنيث Freundin يفسّر النهاية ‑e لا الجذر sein.",
          undefined,
          "دراستها لا علاقة لها بالأداة.",
          "مجرد كون أميرة هي المتكلمة لا يحدد الجذر هنا؛ المالك المذكور في النص هو Youssef، لذلك يُستعمل sein.",
        ],
        errorType: "pronoun",
        paragraph: 2,
      },
      {
        id: "r3",
        type: "multiple-choice",
        instructionAr: "الفقرة الرابعة — من غير موجود في الصورة؟",
        questionDe: "Wer ist nicht auf dem Foto?",
        questionAr: "من ليس في الصورة؟",
        options: ["Die Oma", "Die Tante", "Der Mann der Tante", "Der Opa"],
        correctIndex: 2,
        explanation:
          "النصّ يقول: «Ihr Mann ist nicht auf dem Foto, denn er fotografiert». في هذا السياق، ihr أداة ملكية قبل الاسم Mann وتعود على الخالة؛ ويؤكد السياق أنه هو المصوّر. لا تجعل الكلمة التالية وحدها قاعدةً عامة لتحديد كل استعمالات ihr.",
        optionExplanations: [
          "الجدّة حاضرة وتطبخ الكسكسي.",
          "الخالة حاضرة صراحةً: Auch meine Tante ist da.",
          undefined,
          "الجدّ حاضر وعمره ثمانون.",
        ],
        errorType: "vocabulary",
        paragraph: 3,
      },
      {
        id: "r4",
        type: "multiple-choice",
        instructionAr: "احسب من الفقرة الثالثة:",
        questionDe: "Wie viele Geschwister hat Amira?",
        questionAr: "كم أخاً وأختاً لأميرة؟",
        options: [
          "Ein Geschwister",
          "Zwei Geschwister",
          "Drei Geschwister",
          "Keine Geschwister",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «Ich habe zwei Geschwister: einen Bruder und eine Schwester». في الاستعمال اليومي الشائع يُستعمل Geschwister جمعاً؛ أما ein Geschwister فصيغة مفردة نادرة أو تخصصية. وفي كل الأحوال يذكر النص اثنين.",
        optionExplanations: [
          "هذه صيغة مفردة نادرة/تخصصية، لكنها لا تطابق العدد المذكور في النص.",
          undefined,
          "الثلاثة تشمل أميرة نفسها، وهي ليست من إخوتها.",
          "لها أخ وأخت صراحةً.",
        ],
        errorType: "plural",
        paragraph: 2,
      },
      {
        id: "r5",
        type: "multiple-choice",
        instructionAr: "الفقرة الأخيرة — افهم الموقف:",
        questionDe: "Wie hält Amira Kontakt zu ihrer Familie?",
        questionAr: "كيف تبقى أميرة على تواصل مع عائلتها؟",
        options: [
          "Sie besucht sie jeden Monat",
          "Sie schreibt jeden Tag Briefe",
          "Sie telefoniert jeden Sonntag mit ihren Eltern",
          "Sie wohnt bei ihren Großeltern",
        ],
        correctIndex: 2,
        explanation:
          "النصّ يقول: «jeden Sonntag telefoniere ich mit meinen Eltern»؛ ومنه نعرف أنها تتصل بوالديها كل يوم أحد. هذا بند فهم قرائي؛ وورود ترتيب الكلمات في الجملة ليس ما يقيسه السؤال.",
        optionExplanations: [
          "لم تُذكر زيارات؛ العائلة weit weg.",
          "لم تُذكر رسائل بل مكالمات.",
          undefined,
          "كانت تلك الصورة قديمة؛ أميرة تسكن اليوم في ألمانيا.",
        ],
        errorType: "vocabulary",
        paragraph: 4,
      },
    ],
    redemittel: [
      {
        de: "Das ist ein Foto von meiner Familie.",
        ar: "هذه صورة لعائلتي.",
      },
      {
        de: "Links steht … / Rechts sitzt … / In der Mitte bin ich.",
        ar: "على اليسار يقف… / على اليمين يجلس… / في الوسط أنا.",
      },
      {
        de: "Ich habe zwei Geschwister: einen Bruder und eine Schwester.",
        ar: "لديّ أخ وأخت.",
      },
      {
        de: "Meine Mutter ist Ärztin und mein Vater ist Lehrer.",
        ar: "أمّي طبيبة وأبي معلّم.",
      },
      {
        de: "Meine Eltern sind seit … Jahren verheiratet.",
        ar: "والداي متزوّجان منذ … سنة.",
      },
      {
        de: "Jeden Sonntag telefoniere ich mit meiner Familie.",
        ar: "أتّصل بعائلتي كلّ يوم أحد.",
      },
    ],
    discussionAr:
      "اكتب أو قل وصفاً لصورة حقيقية أو متخيّلة على منوال أميرة؛ لا حاجة إلى مشاركة صورة شخصية أو معلومات خاصة. ابدأ بـ Das ist ein Foto von …، ثم استخدم links / rechts / in der Mitte، واذكر ما تعرفه عن الأشخاص وصلتهم بك. جرّب mein/meine وsein/ihr في سياق مناسب، ثم راجع: من المالك؟ وما الاسم المملوك؟ وهل الصيغة في حالة الرفع؟",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "حديث عن العائلة — صوت اصطناعي يقرؤه المتصفح",
        lines: [
          {
            speaker: "Mona",
            de: "Hallo Karim! Hast du Geschwister?",
            ar: "مرحباً كريم! هل لديك إخوة أو أخوات؟",
          },
          {
            speaker: "Karim",
            de: "Ja, ich habe einen Bruder und eine Schwester.",
            ar: "نعم، لدي أخ وأخت.",
          },
          { speaker: "Mona", de: "Wie heißen sie?", ar: "ما اسماهما؟" },
          {
            speaker: "Karim",
            de: "Mein Bruder heißt Youssef und meine Schwester heißt Nour.",
            ar: "أخي اسمه يوسف وأختي اسمها نور.",
          },
          { speaker: "Mona", de: "Und deine Eltern?", ar: "ووالداك؟" },
          {
            speaker: "Karim",
            de: "Meine Eltern wohnen in Tunis.",
            ar: "والداي يسكنان في تونس.",
          },
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
        questionAr: "كم أخاً وأختاً لدى كريم؟",
        options: [
          "einen Bruder und eine Schwester",
          "zwei Brüder",
          "eine Schwester",
          "keine Geschwister",
        ],
        correctIndex: 0,
        explanation:
          "قال كريم: ich habe einen Bruder und eine Schwester — أخ واحد وأخت واحدة.",
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
      {
        de: "ich",
        ar: "أنا",
        note: "[ɪç]: احتكاك حنكي خفيف بعد i. لا يطابق الشين [ʃ] ولا الخاء العربية الخلفية [x] تماماً؛ استمع إلى الصوت وقلّده برفق.",
      },
      { de: "Bruder", ar: "الأخ", note: "النطق التقريبي [ˈbʁuːdɐ]؛ u طويلة، وr الأخيرة تختلف باختلاف اللهجة." },
      { de: "Schwester", ar: "الأخت", note: "[ˈʃvɛstɐ]: sch مثل ش، وe قصيرة [ɛ] لا ياء طويلة؛ v تُنطق قريباً من ڤ." },
      { de: "Tochter", ar: "الابنة", note: "[ˈtɔxtɐ]: ch هنا [x]، قريب من الخاء العربية، وo قصيرة." },
      {
        de: "Geschwister",
        ar: "الإخوة والأخوات",
        note: "[ɡəˈʃvɪstɐ]: يبدأ المقطع بـg ألمانية [ɡ] ثم sch؛ لا يُنطق غيناً [ɣ].",
      },
    ],
    tip: "يوجد في الألمانية صوتان كتابيان لـch: Ich-Laut [ç] بعد الحركات الأمامية مثل i، وAch-Laut [x] غالباً بعد الحركات الخلفية مثل a/o/u. هذه تقريبات صوتية؛ لا تساوِ [ç] بالشين أو بالخاء العربية.",
    shadowing: [
      {
        de: "Mein Bruder heißt Youssef.",
        ar: "أخي اسمه يوسف.",
        tip: "Mein = مايْن (ei = آي)",
      },
      {
        de: "Meine Schwester heißt Nour.",
        ar: "أختي اسمها نور.",
        tip: "Meine = ماي-نِه",
      },
      {
        de: "Meine Eltern wohnen in Tunis.",
        ar: "والداي يسكنان في تونس.",
        tip: "wohnen = ڤوه-نِن (wo تنطق ڤو)",
      },
      {
        de: "Das ist meine Familie!",
        ar: "هذه عائلتي!",
        tip: "Familie = فا-مي-ليِه (3 مقاطع)",
      },
    ],
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة عن والد أميرة مستخدماً الاسم المعطى:",
      prompt: "Das ist mein Vater. Er heißt Ahmed. (أعد كتابة المعلومتين بجملة تبدأ بـ „Mein Vater …“)",
      acceptedAnswers: [
        "Mein Vater heißt Ahmed",
        "Mein Vater heißt Ahmed.",
      ],
      sampleAnswer: "Mein Vater heißt Ahmed.",
      explanation:
        "يُذكر الاسم بالفعل heißen: Mein Vater heißt Ahmed. الاسم Ahmed موجود في نص السؤال، لذا لا تحتاج إلى تخمينه.",
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
        "dein أداة ملكية للمخاطَب المفرد غير الرسمي (du)، وليست أداة المتكلم.",
        "deine صيغة أداة المخاطَب مع اسم مؤنث أو جمع في الرفع؛ هنا المقصود أمي (meine Mutter)، لا أمّ المخاطَب.",
      ],
      errorType: "gender",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Hast du Geschwister?",
      questionAr: "ما معنى السؤال؟",
      options: ["هل لديك إخوة أو أخوات؟", "هل تحب عائلتك؟", "كم عمرك؟", "أين والدك؟"],
      correctIndex: 0,
      explanation: "Hast du = هل لديك، وGeschwister = الإخوة والأخوات (جمع).",
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
      explanation:
        "سؤال نعم/لا: الفعل أولاً — Hast (1) + du (2) + Geschwister.",
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
      explanation:
        "ثنائيات متقابلة: Bruder/Schwester وSohn/Tochter. تذكّرها كثنائيات!",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Mein Mutter heißt Leila.",
      wrongWord: "Mein",
      correctWord: "Meine",
      options: ["Meine", "Dein", "Mein", "Ihr"],
      explanation:
        "في حالة الرفع نقول meine Mutter لأن Mutter مؤنثة. هذا بند تدريب على اختيار النهاية، لا ترتيباً إحصائياً لأخطاء متعلمي العربية.",
      errorType: "gender",
    },
    {
      id: "e7",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ بـ mein أو meine:",
      template:
        "___ Bruder ist zehn Jahre alt. ___ Schwester heißt Nour. ___ Eltern sind nett.",
      blanks: [
        { correct: "Mein", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
      ],
      explanation:
        "Bruder (مذكر) → Mein. Schwester (مؤنث) → Meine. Eltern (جمع) → Meine.",
      errorType: "gender",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه:",
      audioText: "Meine Schwester heißt Nour.",
      explanation:
        "الجملة الصحيحة: Meine Schwester heißt Nour — لاحظ meine لأن Schwester مؤنثة.",
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
      explanation:
        "المالكة أنثى (Lena) ⇒ الجذر ihr. والمملوك Vater مذكر (der) ⇒ بلا ـe: Ihr Vater.",
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
      instructionAr:
        "أكمل بالأداة المناسبة (انتبه: مَن المالك؟ وما جنس المملوك؟).",
      template:
        "Das ist Ali. ___ Bruder heißt Omar und ___ Schwester heißt Mona. Und du? Ist das ___ Vater?",
      blanks: [
        { correct: "Sein", options: ["Sein", "Seine", "Ihr"] },
        { correct: "seine", options: ["sein", "seine", "ihre"] },
        { correct: "dein", options: ["dein", "deine", "sein"] },
      ],
      explanation:
        "علي مذكر ⇒ الجذر sein في الأولَيَين. Bruder مذكر ⇒ Sein بلا ـe؛ Schwester مؤنث ⇒ seine. ثم خاطبناك أنت ⇒ dein، وVater مذكر ⇒ بلا ـe.",
      errorType: "pronoun",
    },
    {
      id: "e11",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Fatma wohnt in Sousse. Ihre Bruder studiert in Tunis.",
      wrongWord: "Ihre",
      correctWord: "Ihr",
      options: ["Ihr", "Seine", "Ihre", "Deine"],
      explanation:
        "الفخّ المتوقّع: المالكة أنثى فيُظنّ أنّ الأداة تأخذ ـe. لكنّ النهاية تتبع المملوك: Bruder مذكر (der) ⇒ Ihr Bruder.",
      errorType: "pronoun",
    },
    {
      id: "e12",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال صحيح:",
      tokens: ["Ist", "das", "deine", "Schwester", "?"],
      correctSentence: "Ist das deine Schwester?",
      explanation:
        "السؤال بلا أداة استفهام يبدأ بالفعل: Ist das …? والمملوك Schwester مؤنث ⇒ deine.",
      errorType: "word-order",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بأداة الملكية المناسبة:",
      template: "Ali und Sara haben zwei Kinder. ___ Kinder heißen Nour und Amir.",
      blanks: [{ correct: "Ihre", options: ["Ihr", "Ihre", "Sein", "Seine"] }],
      explanation:
        "المالكان Ali und Sara جمع ⟵ الجذر ihr. والمملوك Kinder جمع ⟵ النهاية ‑e: Ihre Kinder.",
      errorType: "pronoun",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "اختر الجملة الصحيحة كلّياً:",
      questionDe: "Welcher Satz ist richtig?",
      questionAr: "أيّ جملة صحيحة؟",
      options: [
        "Ali und sein Mutter wohnen hier",
        "Ali und seine Mutter wohnen hier",
        "Ali und ihr Mutter wohnen hier",
        "Ali und seine Mutter wohnt hier",
      ],
      correctIndex: 1,
      explanation:
        "المالك علي مذكّر ⟵ sein؛ والمملوك Mutter مؤنّث ⟵ النهاية ‑e؛ والفاعل مثنّى (علي وأمّه) ⟵ الفعل بالجمع wohnen.",
      optionExplanations: [
        "نقصت النهاية ‑e التي يوجبها تأنيث Mutter.",
        undefined,
        "الصيغة الصحيحة مع Mutter هي ihre؛ أما ihr Mutter فناقصة النهاية ‑e.",
        "الأداة صحيحة لكنّ الفعل يجب أن يكون جمعاً: wohnen.",
      ],
      errorType: "pronoun",
    },
    {
      id: "e15",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في مخاطبة رسمية:",
      wrongSentence: "Frau Weber, wie heißt deine Tochter?",
      wrongWord: "deine",
      correctWord: "Ihre",
      options: ["Ihre", "seine", "meine", "eure"],
      explanation:
        "ذكر التمرين أن السياق رسمي؛ في هذا السياق نستخدم عادة Sie وIhr. Tochter مؤنث، لذا تكون صيغة الرفع Ihre Tochter. في الاستعمال الواقعي تحدد العلاقة والسياق صيغة المخاطبة.",
      errorType: "pronoun",
    },
    {
      id: "e16",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن جملة صحيحة:",
      tokens: ["Meine", "Großeltern", "wohnen", "in", "Kairouan", "."],
      correctSentence: "Meine Großeltern wohnen in Kairouan.",
      explanation:
        "Großeltern جمع ⟵ الأداة meine بالنهاية ‑e والفعل wohnen بالنهاية ‑en. والفعل في المركز الثاني بعد الفاعل المركّب.",
      errorType: "word-order",
    },
    {
      id: "e17",
      type: "matching",
      instructionAr: "طابق كلّ كلمة بجمعها:",
      pairs: [
        { left: "der Vater", right: "die Väter" },
        { left: "die Mutter", right: "die Mütter" },
        { left: "der Bruder", right: "die Brüder" },
        { left: "die Schwester", right: "die Schwestern" },
        { left: "der Sohn", right: "die Söhne" },
        { left: "die Tochter", right: "die Töchter" },
      ],
      explanation:
        "أربع كلماتٍ تُجمع بالإمالة وحدها (Väter, Mütter, Brüder, Töchter)، وواحدة بالنهاية وحدها (Schwestern)، وواحدة بالاثنتين معاً (Söhne). فثلاثة أنماط جمعٍ في ستّ كلمات.",
      errorType: "plural",
    },
  ],

  /* 8) الأخطاء والتريكات */
  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "mein Mutter / mein Schwester",
        right: "meine Mutter / meine Schwester",
        whyAr:
          "في حالة الرفع تأخذ الأسماء المؤنثة meine؛ لا تتحدد النهاية بجنس المتكلم، وتتغير الصيغة في حالات إعرابية أخرى.",
      },
      {
        wrong: "Meine Eltern ist nett.",
        right: "Meine Eltern sind nett.",
        whyAr: "Eltern جمع → الفعل بصيغة الجمع sind.",
      },
      {
        wrong: "Ich habe ein Bruder.",
        right: "Ich habe einen Bruder.",
        whyAr:
          "بعد الفعل haben (يملك) يأتي الاسم المذكر بحالة النصب (Akkusativ): einen Bruder. (سنفصل هذا في دروس لاحقة — فقط لاحظ الآن).",
      },
    ],
    eselsbruecken: [
      "في حالة الرفع: mein Vater / mein Kind، وmeine Mutter / meine Eltern. اختَر النهاية بحسب الاسم المملوك، لا بحسب جنس المتكلم.",
      "ثنائيات العائلة: Vater/Mutter, Bruder/Schwester, Sohn/Tochter, Opa/Oma.",
    ],
    culturalNote: {
      title: "العائلة في الثقافة الألمانية",
      content:
        "قد تعني Familie الأسرة المعيشية أو العائلة والأقارب بمعنى أوسع، بحسب السياق. تختلف عادات الحديث عن الأسرة من شخص إلى آخر؛ قد يسأل شخص عن الإخوة في تعارف، لكن ذلك ليس قاعدة في كل لقاء، ولا يلزم المتعلم الإفصاح عن معلومات خاصة. وتعني Schwiegereltern والدي الزوج أو الزوجة؛ وللدلالة على عائلة الشريك عموماً يمكن قول Familie meines Partners / meiner Partnerin.",
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
      explanation:
        "Vater مذكر في حالة الرفع، لذلك الإجابة mein Vater. اختر الجذر بحسب المالك، ثم راعِ جنس الاسم المملوك وعدده وحالته.",
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
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
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
    {
      id: "fc1",
      de: "die Familie",
      ar: "العائلة",
      example: "Meine Familie ist groß.",
      exampleAr: "عائلتي كبيرة.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "der Vater / die Mutter",
      ar: "الأب / الأم",
      example: "Mein Vater und meine Mutter.",
      exampleAr: "أبي وأمي.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "der Bruder / die Schwester",
      ar: "الأخ / الأخت",
      example: "Ich habe einen Bruder.",
      exampleAr: "لدي أخ.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "die Eltern",
      ar: "الوالدان",
      example: "Meine Eltern sind nett.",
      exampleAr: "والداي لطيفان.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "die Geschwister",
      ar: "الإخوة والأخوات (جمع)",
      example: "Hast du Geschwister?",
      exampleAr: "هل لديك إخوة أو أخوات؟",
      level: "A1",
    },
    {
      id: "fc6",
      de: "der Sohn / die Tochter",
      ar: "الابن / الابنة",
      example: "Das ist mein Sohn.",
      exampleAr: "هذا ابني.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "mein / meine",
      ar: "ملكيتي؛ النهاية بحسب الاسم المملوك في الرفع",
      example: "mein Vater, meine Mutter",
      exampleAr: "أبي، أمي",
      level: "A1",
    },
    {
      id: "fc8",
      de: "der Opa / die Oma",
      ar: "الجد / الجدة",
      example: "Mein Opa ist achtzig Jahre alt.",
      exampleAr: "جدي عمره ثمانون عاماً.",
      level: "A1",
    },
    {
      id: "fc9",
      de: "dein / deine",
      ar: "ملكية المخاطَب المفرد غير الرسمي؛ النهاية بحسب الاسم المملوك",
      example: "Ist das dein Bruder?",
      exampleAr: "هل هذا أخوك؟",
      level: "A1",
    },
    {
      id: "fc10",
      de: "sein / ihr",
      ar: "له / لها / لهم، بحسب المالك والسياق",
      example: "Sein Vater und ihr Vater.",
      exampleAr: "أبوه وأبوها.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "die Großeltern",
      ar: "الجدّان",
      example: "Meine Großeltern wohnen in Kairouan.",
      exampleAr: "جدّاي يسكنان في القيروان.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "verheiratet / ledig",
      ar: "متزوّج / أعزب",
      example: "Meine Eltern sind verheiratet.",
      exampleAr: "والداي متزوّجان.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "unser / euer / Ihr",
      ar: "لنا / لكم / لحضرتك (رسمي)",
      example: "Unsere Familie ist groß.",
      exampleAr: "عائلتنا كبيرة.",
      level: "A1",
    },
    {
      id: "fc14",
      de: "Väter, Mütter, Brüder, Töchter",
      ar: "جموعٌ بالإمالة وحدها",
      example: "Ich habe zwei Brüder.",
      exampleAr: "لي أخوان.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "das Kind (محايد!)",
      ar: "الطفل — محايد مهما كان جنسه",
      example: "Mein Kind heißt Nour.",
      exampleAr: "طفلي اسمه نور.",
      level: "A1",
    },
    {
      id: "fc16",
      de: "das Haus",
      ar: "البيت",
      example: "Unser Haus ist groß.",
      exampleAr: "بيتنا كبير.",
      level: "A1",
    },
    {
      id: "fc17",
      de: "zusammen",
      ar: "معاً",
      example: "Wir wohnen zusammen.",
      exampleAr: "نسكن معاً.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "neben",
      ar: "بجانب (+ Dativ في هذا المثال)",
      example: "Er sitzt neben seiner Schwester.",
      exampleAr: "يجلس بجانب أخته؛ بعد neben هنا Dativ.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "sitzen",
      ar: "يجلس",
      example: "Meine Oma sitzt im Wohnzimmer.",
      exampleAr: "جدّتي تجلس في غرفة المعيشة.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "stehen",
      ar: "يقف",
      example: "Mein Vater steht links.",
      exampleAr: "أبي يقف على اليسار.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "das Krankenhaus",
      ar: "المستشفى",
      example: "Meine Mutter arbeitet im Krankenhaus.",
      exampleAr: "أمّي تعمل في المستشفى.",
      level: "A1",
    },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a1-02-1",
      type: "relay-instructions",
      titleAr: "انقل وصف عائلة بالعربية لصديق",
      sourceDe:
        "Mein Vater heißt Ahmed und ist 50 Jahre alt. Meine Mutter heißt Leila. Ich habe einen Bruder und zwei Schwestern.",
      taskAr:
        "انقل إلى صديقك الأسماء المذكورة، وعمر الأب فقط، وعدد الإخوة والأخوات. لا تخمّن عمراً غير وارد في النص.",
      modelAnswerAr:
        "«والده اسمه أحمد وعمره 50 عاماً. أمه اسمها ليلى. لديه أخ واحد وأختان.»",
      keyPointsAr: [
        "ذكرت اسم الأب واسم الأم كما وردا",
        "ذكرت عمر الأب فقط (50 عاماً)، ولم تخترع عمراً للأم",
        "ذكرت عدد الإخوة والأخوات بدقة",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a1-02-1",
      scenarioAr: "زميل جديد في صفّ اللغة يسألك عن عائلتك بصيغة du.",
      scenarioDe: "Ein neuer Mitschüler fragt dich nach deiner Familie.",
      strategyAr: "محاكاة موجّهة: اختر رداً مناسباً؛ قد تكون أكثر من إجابة صحيحة، والخيارات لا تقيس كلاماً حراً.",
      rounds: [
        {
          speakerDe: "Hast du Geschwister?",
          speakerAr: "هل لديك إخوة أو أخوات؟",
          options: [
            {
              de: "Ja, ich habe einen Bruder und eine Schwester.",
              ar: "نعم، لدي أخ وأخت.",
              best: true,
              replyDe: "Wie alt sind sie?",
              replyAr: "كم عمرهما؟",
            },
            {
              de: "Nein, ich habe keine Geschwister.",
              ar: "لا، ليس لديّ إخوة أو أخوات.",
              best: true,
              replyDe: "Verstehe. Wie alt ist jemand aus deiner Familie?",
              replyAr: "فهمت. كم عمر شخص من عائلتك؟",
            },
          ],
        },
        {
          speakerDe: "Wie alt ist jemand aus deiner Familie?",
          speakerAr: "كم عمر شخص من عائلتك؟",
          options: [
            {
              de: "Mein Bruder ist 20 Jahre alt.",
              ar: "أخي عمره 20 عاماً.",
              best: true,
              replyDe: "Was sind deine Eltern von Beruf?",
              replyAr: "ما مهنة والديك؟",
            },
            {
              de: "Meine Mutter ist 48 Jahre alt.",
              ar: "أمّي عمرها 48 عاماً.",
              best: true,
              replyDe: "Was sind deine Eltern von Beruf?",
              replyAr: "ما مهنة والديك؟",
            },
          ],
        },
        {
          speakerDe: "Was sind deine Eltern von Beruf?",
          speakerAr: "ما مهنة والديك؟",
          options: [
            {
              de: "Mein Vater ist Lehrer und meine Mutter ist Ärztin.",
              ar: "والدي مدرّس ووالدتي طبيبة.",
              best: true,
              replyDe: "Danke, jetzt weiß ich es.",
              replyAr: "شكراً، فهمت الآن.",
            },
            {
              de: "Ich weiß es nicht genau.",
              ar: "لا أعرف بالتحديد.",
              best: true,
              replyDe: "Kein Problem.",
              replyAr: "لا بأس.",
            },
          ],
        },
      ],
    },
  ],
};
