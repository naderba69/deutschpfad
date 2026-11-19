/**
 * a1-02 — الشرح النظري (الجزء «theorie»)
 * فُصل من a1-02.ts في الدفعة 96 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 3) الشرح النظري */
export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "أدوات الملكية mein / meine",
      titleDe: "Possessivartikel: mein und meine",
      explanationAr:
        "أداة الملكية (Possessivartikel) تسبق الاسم، وتتكوّن من جذر ونهاية يؤديان وظيفتين مختلفتين:\n\n**الجذر يحدّد الشخص أو المجموعة المنسوبة إليها العلاقة (ويُسمّى ذلك اختصاراً المالك، لا الملكية المادية فقط)**: ich ⟵ mein، du ⟵ dein، er/es ⟵ sein، sie ⟵ ihr.\n**النهاية تتبع الاسم الموصوف** من حيث الجنس والعدد والحالة الإعرابية.\n\nفي هذه الكتلة نتمرّن أساساً على حالة الرفع (Nominativ):\n• مع الاسم المذكّر (der): mein Vater, mein Bruder, mein Sohn\n• مع الاسم المحايد (das): mein Kind, mein Haus\n• مع الاسم المؤنّث (die): meine Mutter, meine Schwester\n• مع الجمع: meine Eltern, meine Geschwister\n\nفي أمثلة الرفع هذه تظهر النهاية ‑e مع المؤنث والجمع، ولا تظهر مع المذكر والمحايد. لا تعمّم هذا الجدول على حالات أخرى؛ فالنهاية تتغيّر في Akkusativ وDativ أيضاً.\n\nقارن في الرفع: ein Vater / mein Vater، eine Mutter / meine Mutter، ein Kind / mein Kind. تتشابه أدوات الملكية والنفي مع نمط تصريف ein‑، مع اختلاف الجذور، ولا توجد صيغة جمع للأداة النكرة ein.\n\nالتركيز النحوي في هذا الدرس هو أدوات الملكية في الرفع. ستصادف في القراءة تراكيب سياقية من حالات أخرى، مثل von meiner Familie وbei meinen Großeltern وin einem Krankenhaus وseit fünfundzwanzig Jahren وmit meinen Eltern (Dativ)، وeinen Bruder وjeden Sonntag (Akkusativ)، وneben ihm وdir في Wie geht es dir? (Dativ). ورودها في النص لا يعني أن تصريف تلك الحالات هو هدف هذه الكتلة؛ المطلوب هنا ملاحظة السياق فقط.",
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
            "Eltern تُستعمل في هذا المعنى بصيغة الجمع، لذلك يأتي الفعل معها بصيغة الجمع: Meine Eltern sind nett.",
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
        "يقدّم موضوع العائلة مفردات مألوفة وفرصة للتدرّب على التعريف بأشخاص وطرح أسئلة بسيطة. وهي موضوعات يومية مألوفة؛ ولا يحاكي الدرس امتحاناً بعينه، ولا يفرض على المتعلم كشف تفاصيل شخصية. في هذا الدرس تُربط المفردات بأدوات الملكية والجمع ووصف صورة؛ وأي تراكيب من حالات أخرى في النص تظل سياقية ما لم تُشرح صراحةً.",
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
        "تعلّمتَ mein عند الحديث عن نفسك. وعند الحديث عن عائلة شخص آخر، تذكّر القاعدتين معاً:\n\n**الجذر بحسب المالك:** أنا ⟵ mein‑؛ أنت (du) ⟵ dein‑؛ هو ⟵ sein‑؛ هي أو هم ⟵ ihr‑؛ نحن ⟵ unser‑؛ أنتم (ihr) ⟵ euer‑؛ والصيغة الرسمية للملكية ⟵ Ihr‑.\n\n**النهاية بحسب الاسم المملوك والحالة:** في الرفع نقول sein Bruder / seine Mutter، وihr Vater / ihre Schwester. الجذر يعرّف المالك، والنهاية تتبع الاسم الذي تسبقه الأداة.\n\nانتبه إلى وظائف ihr في الأمثلة:\n• ihr Vater = أبوها أو أبوهم، بحسب السياق؛ هنا ihr أداة ملكية تسبق الاسم.\n• Ihr seid nett = أنتم لطفاء؛ هنا ihr ضمير فاعل. إذا جاءت الكلمة في أول الجملة تُكتب بحرف كبير بسبب موقعها، فلا تكفي الكتابة الكبيرة وحدها لتحديد المعنى.\n• صيغة الاحترام Sie وأداة ملكيتها Ihr تُكتبان بحرف كبير دائماً. أما ihr بمعنى «هي/هم» فتُكتب صغيرة وسط الجملة؛ وقد تظهر كبيرة فقط لأنها في أول الجملة، وعندها يحسم السياق المرجع.\n• توجد كذلك صيغة ihr بوصفها ضمير داتيف بمعنى «لها»، مثل Ich helfe ihr. ستُشرح الحالة لاحقاً؛ لذلك لا تعتمد قاعدة آلية من نوع «انظر إلى الكلمة التالية» للفصل بين كل استعمالات ihr.",
      whyAr:
        "يساعد التفريق بين المالك والاسم المملوك على وصف أشخاص آخرين، لا الأسرة الذاتية فقط. تدرّب على تعيين المرجع من الجملة والسياق، ثم اختر الجذر والنهاية كلّاً على حدة. قد تتناول اختبارات A1 موضوع العائلة، لكن صيغة السؤال ومحتواه يتغيران؛ وهذه الأمثلة تدريب تعليمي وليست وعداً بسؤال امتحاني محدد.",
      table: {
        title: "في الرفع: الجذر بحسب مرجع العلاقة، والنهاية بحسب الاسم",
        columns: ["الشخص/المجموعة", "مع der/das", "مع die (مؤنث/جمع)"],
        rows: [
          { label: "أنا (ich)", cells: ["mein Bruder", "meine Schwester"] },
          {
            label: "أنتَ/أنتِ (du)",
            cells: ["dein Bruder", "deine Schwester"],
          },
          { label: "هو/مرجع محايد (er/es)", cells: ["sein Bruder", "seine Schwester"] },
          { label: "هي (sie)", cells: ["ihr Bruder", "ihre Schwester"] },
          { label: "هم/هنّ (sie)", cells: ["ihr Bruder", "ihre Schwester"] },
          { label: "نحن (wir)", cells: ["unser Bruder", "unsere Schwester"] },
          { label: "أنتم (ihr)", cells: ["euer Bruder", "eure Schwester"] },
          { label: "صيغة الاحترام (Sie)", cells: ["Ihr Bruder", "Ihre Schwester"] },
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
  ];
