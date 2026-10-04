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
  duration: 45,
  summary:
    "المأكولات والمشروبات، أدوات التعريف والتنكير (der/die/das + ein/eine)، حالة النصب (Akkusativ): Ich esse einen Apfel، وفعل haben مع الجوع والعطش.",

  lernziele: [
    { id: "z1", de: "Ich kann Lebensmittel mit ihrem Artikel nennen.", ar: "أن أسمّي المأكولات والمشروبات مع أدواتها الصحيحة." },
    { id: "z2", de: "Ich kann bestimmte und unbestimmte Artikel im Nominativ verwenden.", ar: "أن أميّز أدوات التعريف والتنكير وأستعملها في حالة الرفع." },
    { id: "z3", de: "Ich kann in einfachen Sätzen passende Akkusativformen verwenden.", ar: "أن أختار صيغ الأدوات المناسبة في Akkusativ مع الأفعال الواردة في الدرس." },
    { id: "z4", de: "Ich kann haben im Präsens konjugieren und in einfachen Sätzen verwenden.", ar: "أن أصرف haben في المضارع وأستعمله في جمل بسيطة عن الملكية والجوع والعطش." },
    { id: "z5", de: "Ich kann einem kurzen Lesetext Bestellungen und Preise entnehmen.", ar: "أن أستخرج من نص قصير معلومات أساسية عن الطلبات والأسعار." },
    { id: "z6", de: "Ich kann in einem kurzen Dialog einfache Bestellungen verstehen.", ar: "أن أفهم طلبات بسيطة للطعام والشراب في حوار قصير مسموع." },
    { id: "z7", de: "Ich kann im Café höflich bestellen und auf eine einfache Rückfrage reagieren.", ar: "أن أطلب في المقهى بجمل قصيرة مهذبة، وأجيب عن سؤال بسيط." },
    { id: "z8", de: "Ich kann eine kurze Bestellung mit passenden Artikeln aufschreiben.", ar: "أن أكتب طلباً قصيراً مستخدماً أدوات مناسبة." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قُل: «التفاحة حمراء» ثم «آكل التفاحة». في الألمانية يبقى الاسم Apfel على صورته، لكن أداة المذكر تتغير بين der Apfel وden Apfel. خمّن لماذا؟",
    motivatingQuestionDe: "Was isst du gern?",
    contextAr:
      "سنذهب اليوم إلى المطبخ الألماني: نتعلم أسماء الأطعمة مع أدواتها، ثم نكتشف «ظاهرة النصب» التي تجعل der يصبح den وein يصبح einen بعد أفعال معينة.",
    contextDe: "Guten Appetit!",
    connectionToPreviousAr: "تعلمت في الدرس السابق mein/meine مع العائلة. اليوم نربط ذلك بمفردات الطعام والشراب، ونلاحظ تغيّر بعض الأدوات في حالة النصب.",
    activateVocabulary: [
      { de: "das Essen", ar: "الطعام" },
      { de: "das Trinken", ar: "الشراب" },
      { de: "der Apfel", ar: "التفاحة" },
      { de: "essen", ar: "يأكل" },
      { de: "trinken", ar: "يشرب" },
      { de: "haben", ar: "يملك / لديه" },
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
      questionDe: "Welchen Artikel hat das Wort „Mutter“?",
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
        "في الألمانية للأسماء المفردة جنس نحوي: مذكّر (der)، مؤنّث (die)، أو محايد (das). احفظ الاسم مع أداته؛ فالجنس النحوي لا يطابق دائماً جنس الإنسان أو معنى الاسم. وفي حالة الرفع تأخذ الأسماء الجمع الأداة die؛ أمّا أداة الجمع فتتغير في حالات أخرى.\n\n**مؤشرات تساعد ولا تغني عن الحفظ:**\n• كثير من الأسماء المنتهية بـ‑e مؤنثة، مثل die Banane وdie Tomate وdie Suppe؛ لكن der Käse مذكّر، فلا تعتمد على النهاية وحدها.\n• اللاحقة الاشتقاقية ‑ung مؤنثة عادةً، مثل die Rechnung.\n• الأسماء المصغّرة المنتهية بـ‑chen محايدة: das Brötchen وdas Würstchen؛ وجمعها يبقى غالباً على الصورة نفسها.\n• المصدر المستعمل اسماً محايد: das Essen وdas Trinken وdas Kochen.\n\n**أداة التنكير ein/eine:** تُستعمل كثيراً عند تقديم شيء غير محدد أو غير معروف للسياق: ein Apfel، eine Banane، ein Brot. ein تأتي مع الاسم المذكر والمحايد في الرفع؛ وتظهر eine مع المؤنث. أمّا اختيار التعريف أو التنكير فيعتمد على المقصود والسياق، لا على قاعدة آلية بأن أول ذكر يكون دائماً نكرة.\n\n**بلا أداة (Nullartikel):** مع أسماء المواد عند الحديث عنها بعموم، كثيراً ما لا نضع أداة: Ich trinke Wasser. / Ich esse Brot. وإذا كان المقصود شيئاً محدداً أو معروفاً في السياق يمكن أن نقول: Das Wasser ist kalt. ولتسمية حصة أو كمية نستعمل وحدة مثل ein Glas Milch. العربية أيضاً قد تأتي بالاسم النكرة من دون أداة منفصلة؛ لذلك لا توجد مطابقة كلمة بكلمة بين النظامين.",
      whyAr:
        "معرفة أداة الاسم تساعد على اختيار أداة التعريف أو التنكير وبناء أمثلة واضحة في سياق الطعام والشراء. الأطعمة مفردات ملموسة تصلح للتدرب، مع الانتباه إلى أن الجنس النحوي يُحفظ مع كل اسم ولا يُستنتج دائماً من معناه أو نهايته. يتناول كتاب Schritte international Neu 1، في هذا الإصدار، موضوع Essen und Trinken في Lektion 3؛ وهذا مثال على ترتيب كتاب بعينه، لا قاعدة تلزم كل المناهج أو الاختبارات.",
      table: {
        title: "أدوات التعريف والتنكير (Nominativ)",
        columns: ["الجنس", "معرّف (ال)", "منكّر (واحد)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der", "ein", "der Apfel / ein Apfel"] },
          { label: "مؤنث", cells: ["die", "eine", "die Banane / eine Banane"] },
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
        {"de": "Ein Brötchen kostet fünfzig Cent.", "ar": "الخبزة الصغيرة بخمسين سنتاً. (‑chen ⟵ محايد)"},
        {"de": "Der Kaffee ist heiß, aber das Wasser ist kalt.", "ar": "القهوة ساخنة لكنّ الماء بارد. (مذكّر ومحايد في جملة)"},
        {"de": "Ich möchte einen Tee, keinen Kaffee.", "ar": "أريد شاياً لا قهوة. (نكرة معدودة في سياق الطلب)"},
      ],
      comparisonWithArabic:
        "تستعمل العربية «الـ» للتعريف، وتدل على التنكير بطرق مختلفة منها ترك «الـ» أو التنوين؛ أما الألمانية فتختار أداةً قبل الاسم، ويجب حفظ جنس الاسم معها: der Apfel، die Banane، das Brot. لا يطابق الجنس النحوي دائماً جنس الشخص أو الشيء في الواقع؛ فـdas Mädchen مؤنث في المعنى ومحايد في القواعد.\n\nفي بعض استعمالات أسماء المواد تكون الألمانية بلا أداة: Ich trinke Wasser. ولا يعني ذلك أن كل اسم مفرد يسقط أداته؛ فقارن بين Ich esse einen Apfel (اسم معدود في النصب) وIch trinke Wasser (مادة عامة). وعند قصد كمية يمكن ذكر وحدة: ein Glas Wasser.\n\nفي هذه الوحدة، تصريف أدوات التعريف والتنكير يختلف بين الرفع والنصب في صور محددة، ولا يكفي ترجمة «الـ» أو التنوين حرفياً لاختيارها. كما أن die قد تكون أداة مؤنث مفرد أو أداة جمع؛ يساعد الفعل والسياق على معرفة العدد: Die Milch ist kalt / Die Äpfel sind frisch.",
      eselsbruecke:
        "احفظ أداة الاسم معه: der Apfel، die Banane، das Brot. النهاية ‑e مؤشر شائع على التأنيث وليست قاعدة بلا استثناء؛ و‑chen علامة موثوقة في الأسماء المصغّرة مثل das Brötchen. في الرفع، قدّم شيئاً غير محدد بـein/eine، ثم استخدم أداة التعريف إذا صار مرجعاً معروفاً في السياق؛ لا تجعل ترتيب الذكر قاعدة آلية.",
      commonMistakes: [
        {"wrong": "das Apfel", "right": "der Apfel", "whyAr": "خطأ في الجنس: der Apfel مذكّر، وجمعه die Äpfel مع تغيّر a إلى ä. احفظ أداة الاسم معه منذ البداية."},
        {"wrong": "ein Milch", "right": "Milch / ein Glas Milch", "whyAr": "Milch مؤنثة (die Milch)، لكنّها اسم مادّة في الجملة العامة: Ich trinke Milch. عند طلب حصة في مقهى قد تُستعمل eine Milch اختصاراً؛ والأوضح للمتعلم قول ein Glas Milch."},
        {"wrong": "Ich esse Apfel.", "right": "Ich esse einen Apfel.", "whyAr": "في هذه الجملة المقصود تفاحة واحدة؛ وApfel اسم مفرد معدود يأتي مفعولاً به، فنقول einen Apfel. لا يعني ذلك أن الأداة تسقط فقط مع أسماء المواد: يمكن أن نقول Ich esse Äpfel للجمع العام أو Ich esse Brot لاسم مادة."},
        {"wrong": "Die Milch sind kalt.", "right": "Die Milch ist kalt.", "whyAr": "حين تعني Milch مادة الحليب في هذه الجملة، فهي اسم مفرد مؤنث؛ لذلك يأتي الفعل ist. لا تُستنتج صيغة الجمع من die وحدها، بل راعِ الاسم والمعنى."},
      ],
      relatedRuleComparison: {
        "title": "kein: أداة نفي تتغيّر مع الاسم",
        "content": "تُصرّف kein مع الجنس والعدد والحالة، وتُنفي بها غالباً الأسماء التي تأتي بلا أداة أو مع أداة نكرة: Ich habe keinen Hunger. / Ich kaufe kein Brot. أمّا nicht فقد تنفي عبارة اسمية معرّفة أو عنصراً محدداً بحسب المقصود: Ich trinke nicht den Kaffee, sondern den Tee. لذلك لا تختصر القاعدة إلى «kein لكل الأسماء وnicht لكل ما عداها»؛ اختر الأداة وفق تركيب العبارة والمعنى المراد."
      },
    },
    {
      id: "t2",
      titleAr: "حالة النصب (Akkusativ): Ich esse einen Apfel",
      titleDe: "Der Akkusativ: häufig das direkte Objekt",
      explanationAr:
        "يُستعمل Akkusativ كثيراً لتمييز المفعول به المباشر، لكن الحالة لا تقتصر على هذا الاستخدام؛ فالفعل أو التركيب هو الذي يحددها. في هذه الوحدة نركّز على أدوات التعريف والتنكير في الرفع والنصب:\n\n| الجنس | الرفع | النصب |\n|---|---|---|\n| مذكّر | der / ein | **den / einen** |\n| مؤنّث | die / eine | die / eine |\n| محايد | das / ein | das / ein |\n| جمع | die | die |\n\nفي هذا الجدول تتغير أداة الاسم المذكر وحدها بين Nominativ وAkkusativ؛ وهذا وصف لهذه الأدوات في هذا الجدول، لا لكل العلامات الممكنة في الألمانية.\n\n**طريقة مساعدة:** في جملة بسيطة مع فعل متعدٍّ، يمكن أن تسأل Wen? (مَن؟) أو Was? (ماذا؟) للعثور على مفعول مباشر: Ich esse einen Apfel. — Was esse ich? Einen Apfel. هذا اختبار تعليمي مفيد، لكنه لا يحدد وحده كل استعمالات Akkusativ.\n\nأفعال شائعة في موضوع الطعام والشراء تأخذ مفعولاً به في النصب في هذه الأمثلة: essen، trinken، kaufen، haben، möchten، nehmen، sehen، lesen، brauchen، bestellen.\n\nمع استعمال الأفعال الرابطة مثل sein، يأتي الاسم الذي يصف الفاعل في الرفع: Er ist ein Lehrer. قارن ذلك بمفعول الفعل المتعدي: Ich sehe einen Lehrer. هنا تغيّر الأداة لأن Lehrer مفعول به في الجملة الثانية.\n\nوتغيّر بعض الأفعال حركتها الصوتية في du وer/sie/es: ich esse، du isst، er isst؛ وich nehme، du nimmst، er nimmt. احفظ صيغ الفعل مع الضمير.",
      whyAr:
        "يساعد هذا الدرس على ملاحظة دور الأداة في جمل مألوفة مثل Ich esse einen Apfel وIch möchte einen Kaffee. نركّز على الفرق بين الرفع والنصب في أمثلة محددة، ولا نزعم أن ترتيب تدريس الحالات واحد في جميع الكتب أو أن وصف Goethe/CEFR يفرض هذا التسلسل النحوي.",
      table: {
        title: "تغيّر الأداة في النصب",
        columns: ["الجنس", "Nominativ (رفع)", "Akkusativ (نصب)", "مثال"],
        rows: [
          { label: "مذكر", cells: ["der / ein", "den / einen", "Ich esse einen Apfel."] },
          { label: "مؤنث", cells: ["die / eine", "die / eine", "Ich trinke die Milch."] },
          { label: "محايد", cells: ["das / ein", "das / ein", "Ich esse das Brot."] },
          { label: "جمع", cells: ["die", "die", "Ich kaufe die Äpfel."] },
        ],
      },
      examples: [
        {"de": "Ich esse einen Apfel.", "ar": "آكل تفاحة. (Apfel مذكّر في الألمانية، وأداة النكرة هنا في النصب: einen)"},
        {"de": "Er trinkt einen Kaffee und sie trinkt eine Cola.", "ar": "هو يشرب قهوة وهي تشرب كولا. (مذكّر يتغيّر، مؤنّث لا)"},
        {"de": "Wir kaufen ein Brot und Milch.", "ar": "نشتري رغيفاً واحداً وحليباً. (محايد في النصب + اسم مادّة بلا أداة)"},
        {"de": "Hast du einen Bruder?", "ar": "هل لك أخ؟ (Bruder مفعول به منصوب في هذا المثال)"},
        {"de": "Ich möchte den Käse dort, bitte.", "ar": "أريد ذاك الجبن من فضلك. (معرفة منصوبة ⟵ den)"},
        {"de": "Er ist ein Lehrer.", "ar": "هو معلّم. (الاسم الخبري بعد sein في الرفع)"},
        {"de": "Nimmst du einen Tee oder einen Saft?", "ar": "أتأخذ شاياً أم عصيراً؟ (nehmen ⟵ du nimmst، شاذّ)"},
        {"de": "Ich sehe den Kellner. Er bringt die Rechnung.", "ar": "أرى النادل. هو يُحضر الفاتورة. (منصوب ثمّ مرفوع)"},
      ],
      comparisonWithArabic:
        "تعرف العربية علامات إعراب، بينما تظهر الحالة في الألمانية على أدوات التعريف والتنكير والضمائر، وقد تتغير بعض الأسماء أيضاً في أنماط أخرى. في أمثلة هذا الدرس تحديداً نلاحظ الفرق غالباً على الأداة: أكلت تفاحةً / Ich esse einen Apfel. لا تستنتج أن الاسم الألماني لا يتغير في أي حالة أو أن كل علامة حالة تظهر بالطريقة نفسها.\n\nفي الرفع والنصب تبقى صور الأدوات المؤنثة والمحايدة والجمع متشابهة في الجدول المعروض، بينما يتغير المذكر: der→den، ein→einen. ثبات الصورة هنا لا يعني أن الاسم خرج من موقع المفعول به.\n\nمع sein الرابط نقول Er ist ein Lehrer؛ فالاسم الذي يصف الفاعل يكون في الرفع في هذا التركيب. أمّا في Ich sehe einen Lehrer فكلمة Lehrer مفعول به. ويساعد ترتيب الكلمات المعتاد على فهم الجملة، لكن السياق والعلامات النحوية يسهمان أيضاً في تحديد الوظائف.",
      eselsbruecke:
        "في أمثلة أدوات الرفع والنصب هنا، تذكّر التحولين للمذكر: der→den وein→einen. لا تضف ‑en إلى المؤنث أو المحايد أو الجمع في هذه الصيغ. وفي الجمل البسيطة قد يساعد سؤال Wen? أو Was? على العثور على المفعول المباشر؛ راعِ مع ذلك الفعل والتركيب.",
      commonMistakes: [
        {"wrong": "Ich esse ein Apfel.", "right": "Ich esse einen Apfel.", "whyAr": "خطأ شائع: der Apfel مذكّر، وفي هذا المثال يأتي مفعولاً به بعد essen؛ لذلك تتغير أداة التنكير من ein إلى einen. احفظ الاسم مع أداته، ثم اختر الصيغة بحسب موقعه في الجملة."},
        {"wrong": "Ich trinke der Kaffee.", "right": "Ich trinke den Kaffee.", "whyAr": "إذا كان المقصود قهوةً محددة، يأتي الاسم مفعولاً به في النصب: der Kaffee تصبح den Kaffee. أمّا عند الحديث عن القهوة عموماً فيصحّ أيضاً Ich trinke Kaffee بلا أداة؛ يختلف المعنى والسياق."},
        {"wrong": "Ich esse einen Banane.", "right": "Ich esse eine Banane.", "whyAr": "Banane مؤنثة؛ وفي الجدول هنا تبقى أداة المؤنث كما هي في النصب: eine. الخطأ في نهاية الأداة، لا في الاسم نفسه."},
        {"wrong": "Er ist einen Lehrer.", "right": "Er ist ein Lehrer. / Er ist Lehrer.", "whyAr": "بعد sein الرابط يأتي الخبر الاسمي في الرفع: Er ist ein Lehrer. وقد تُذكر المهنة بلا أداة أيضاً: Er ist Lehrer. قارن ذلك بمفعول Akkusativ بعد فعل متعدٍّ: Er sieht einen Lehrer."},
      ],
      relatedRuleComparison: {
        "title": "Akkusativ وDativ: حالتان مختلفتان",
        "content": "في هذا الدرس نتدرّب على Akkusativ مع أفعال شائعة، ثم تظهر حالات أخرى في مواضع لاحقة من هذا المسار. يختلف ترتيب القواعد من منهج إلى آخر؛ هذا تنظيم تعليمي محلي، وليس ترتيباً مفروضاً من CEFR أو قائمةً بقواعد كل اختبار Goethe."
      },
    },
    {
      id: "t3",
      titleAr: "الفعل haben: الملكية وتعابير الجوع والعطش",
      titleDe: "Das Verb „haben“ und Hunger/Durst",
      explanationAr:
        "**haben** فعل شائع يُستخدم للملكية ولتعابير ثابتة كثيرة. تصريفه في المضارع:\n\nich **habe** · du **hast** · er/sie/es **hat** · wir **haben** · ihr **habt** · sie/Sie **haben**\n\nالصيغتان hast وhat غير منتظمتين قياساً إلى الجذر haben؛ احفظهما مع الضمير.\n\n**الملكية:** Ich habe einen Bruder. / Sie hat ein Auto.\n\n**تعابير شائعة:** نقول Ich habe Hunger وIch habe Durst وIch habe Angst، وغالباً تأتي هذه الأسماء بلا أداة في هذه التعبيرات. ويمكن أيضاً وصف الحال بصفة مع sein: Ich bin hungrig / durstig / müde. تعلّم التعبير كاملاً، ولا تعمم شكل أداة واحداً على كل استعمال للاسم.\n\n**النفي في هذه الأمثلة:** نقول Ich habe keinen Hunger وIch habe keine Zeit. تستعمل kein هنا لنفي اسم غير محدد؛ وقد تأتي nicht مع عبارة اسمية معرفة إذا كان هذا هو المعنى المقصود. انتبه إلى أن keinen يوافق Hunger المذكر في النصب.",
      whyAr:
        "haben فعل عالي التواتر يفيد في التعبير عن الملكية وعن تعابير مثل Hunger haben وDurst haben. سيظهر لاحقاً أيضاً فعلاً مساعداً في بعض صيغ Perfekt؛ هذا تمهيد للمستقبل، أما هدف هذه الكتلة فهو تصريفه الأساسي واستعمالاته الحالية، لا إتقان الزمن الماضي.",
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
        {"de": "Sie hat einen Kaffee.", "ar": "لديها فنجان قهوة. (Kaffee هنا حصة/مشروب معدود)"},
        {"de": "Habt ihr Geschwister? — Ja, wir haben zwei Brüder.", "ar": "ألكم إخوة؟ — نعم، لنا أخوان."},
        {"de": "Ich habe keinen Hunger. Ich bin satt.", "ar": "لستُ جائعاً. أنا شبعان. (نفيٌ منصوب + صفة مع sein)"},
        {"de": "Hast du einen Tee?", "ar": "هل لديك فنجان شاي؟ (einen Tee هنا حصة معدودة في سياق الطلب؛ أما الشاي كمادة عامة فيأتي بلا أداة)"},
        {"de": "Das Kind hat Angst.", "ar": "الطفل خائف. (تعبير شائع: Angst haben)"},
      ],
      comparisonWithArabic:
        "في العربية قد نقول «أنا جائع» أو «عندي جوع»، بينما تستعمل الألمانية التعبير الشائع Ich habe Hunger، كما تقول Ich bin hungrig بالصفة. تعلّم التركيب كما يُستعمل، ولا تترجم كل كلمة حرفياً.\n\nفي الجمل الخبرية الكاملة المعتادة يظهر فعل مصرّف في الألمانية، بخلاف كثير من الجمل الاسمية العربية؛ لكن توجد أيضاً إجابات مقتضبة وعبارات ناقصة بحسب المقام. لهذا نقارن بين جمل كاملة مثل Ich habe Hunger وIch bin müde، لا بين كل أنواع العبارات في اللغتين.\n\nعند نفي اسم غير محدد، مثل Hunger أو Zeit في هذه الأمثلة، تأتي صيغة من kein: keinen Hunger، keine Zeit. أما nicht فتستعمل لنفي الصفة أو الفعل، ويمكنها كذلك نفي عبارة محددة بحسب السياق؛ لا توجد مطابقة آلية واحدة مع أدوات النفي العربية.",
      eselsbruecke:
        "احفظ تعابير الحاجة كما ترد: Ich habe Hunger / Durst، مقابل Ich bin hungrig / durstig. وللتصريف ركّز على الصيغتين غير القياسيتين hast وhat. في أمثلة نفي الاسم هنا نقول keinen Hunger وkeine Zeit؛ وفي استعمالات أخرى يعتمد اختيار nicht أو kein على التركيب والمعنى.",
      commonMistakes: [
        {"wrong": "Ich bin Hunger.", "right": "Ich habe Hunger.", "whyAr": "في التعبير الألماني الشائع نقول Ich habe Hunger، ويمكن وصف الحال بصفة أيضاً: Ich bin hungrig. تعلّم التركيب المستعمل؛ فالترجمة الحرفية من العربية قد تقود إلى اختيار فعل غير مناسب."},
        {"wrong": "Ich habe müde.", "right": "Ich bin müde.", "whyAr": "müde صفة، وفي هذا الوصف نستخدم sein: Ich bin müde. لا تعمّم haben من تعبير Hunger haben على الصفات."},
        {"wrong": "Du hat einen Bruder.", "right": "Du hast einen Bruder.", "whyAr": "الفعل يتغير بحسب الضمير: مع du نقول hast، ومع er نقول hat. احفظ الصيغتين مع الضمير المقابل، ولا تنقل نهاية صيغة إلى الأخرى."},
        {"wrong": "Ich habe nicht Zeit.", "right": "Ich habe keine Zeit.", "whyAr": "في الجملة المحايدة التي تعني «ليس لدي وقت»، نقول Ich habe keine Zeit؛ وZeit مؤنثة في النصب. لا يعني ذلك أن nicht لا يأتي أبداً مع عبارة اسمية: يمكنه نفي عبارة محددة أو عنصر بعينه بحسب السياق، مثل Ich habe nicht die Zeit dafür."},
      ],
      relatedRuleComparison: {
        "title": "haben فعلاً كاملاً، وتمهيد موجز لـPerfekt",
        "content": "قد يظهر haben في Perfekt فعلاً مساعداً، مثل Ich habe gegessen؛ وتأتي بعض الأفعال مع sein، مثل Ich bin gegangen. هذا تمهيد فقط: اختيار الفعل المساعد يختلف باختلاف الفعل والاستعمال، وسيُشرح في موضعه. في هذه الوحدة ركّز على haben بوصفه فعلاً كاملاً في جمل الملكية وتعابير الحاجة."
      },
    },
  ],

  reading: {
    "id": "read-a1-03",
    "titleDe": "Im Café Sonnenblume",
    "titleAr": "في مقهى عبّاد الشمس",
    "textType": "dialog",
    "paragraphs": [
      "Kellner: Guten Tag! Was möchten Sie trinken?\nAmira: Guten Tag. Ich möchte einen Kaffee, bitte. Mit Milch, aber ohne Zucker.\nKellner: Gern. Und Sie?\nYoussef: Ich nehme einen Tee. Haben Sie auch Mineralwasser?\nKellner: Ja, natürlich.\nYoussef: Dann ein Mineralwasser, bitte.",
      "Kellner: Möchten Sie auch etwas essen? Wir haben heute Suppe, Salat und Käsebrötchen.\nAmira: Ich habe großen Hunger! Ich nehme die Suppe und ein Käsebrötchen.\nYoussef: Für mich nur einen Salat, bitte. Ich bin nicht sehr hungrig.",
      "Kellner: Sie möchten also einen Kaffee mit Milch, einen Tee, ein Mineralwasser, die Suppe, ein Käsebrötchen und einen Salat. Ist das richtig?\nAmira: Ja, das ist richtig. Vielen Dank!\nKellner: Einen Moment bitte, das Essen kommt gleich.",
      "Youssef: Der Salat ist wirklich frisch. Wie ist deine Suppe?\nAmira: Sie ist sehr gut, aber ein bisschen heiß. Möchtest du probieren?\nYoussef: Nein, danke. Ich habe keinen Hunger mehr, aber noch Durst. Entschuldigung, noch ein Glas Wasser bitte!",
      "Amira: Entschuldigung, die Rechnung bitte! Wie viel macht das?\nKellner: Das macht zusammen zwanzig Euro fünfzig.\nAmira: Hier sind fünfundzwanzig Euro. Stimmt so.\nKellner: Vielen Dank und einen schönen Tag noch!"
    ],
    "paragraphsAr": [
      "النادل: مرحباً! ماذا تودّان أن تشربا؟\nأميرة: مرحباً. أريد قهوةً من فضلك، مع الحليب ومن دون سكر.\nالنادل: بكل سرور. وماذا عنك؟\nيوسف: سأطلب شايًا. هل لديكم ماء معدني أيضاً؟\nالنادل: نعم، بالطبع.\nيوسف: إذن ماءً معدنياً أيضاً، من فضلك.",
      "النادل: هل تودّان تناول شيء أيضاً؟ لدينا اليوم حساء وسلطة وخبز صغير بالجبن.\nأميرة: أنا جائعة جداً! سأطلب الحساء وخبزةً صغيرة بالجبن.\nيوسف: أريد سلطةً فقط من فضلك. لست جائعاً جداً.",
      "النادل: إذن ستطلبان قهوةً بالحليب، وشاياً، وماءً معدنياً، والحساء، وخبزةً صغيرة بالجبن، وسلطةً. أهذا صحيح؟\nأميرة: نعم، هذا صحيح. شكراً جزيلاً!\nالنادل: لحظة من فضلكما، سيأتي الطعام بعد قليل.",
      "يوسف: السلطة طازجة حقاً. كيف حساؤك؟\nأميرة: إنها لذيذة جداً، لكنها ساخنة قليلاً. هل تريد أن تتذوق؟\nيوسف: لا، شكراً. لم أعد جائعاً، لكنني ما زلت عطشان. عفواً، كأس ماء آخر من فضلك!",
      "أميرة: عفواً، الفاتورة من فضلك! كم الحساب؟\nالنادل: المجموع عشرون يورو وخمسون سنتاً.\nأميرة: تفضّل خمسةً وعشرين يورو، واحتفظ بالباقي.\nالنادل: شكراً جزيلاً، وأتمنى لكما يوماً سعيداً!"
    ],
    "glossary": [
      {
        "de": "der Kellner",
        "ar": "النادل",
        "noteAr": "للمؤنث نقول die Kellnerin. ويمكن لفت انتباه النادل بقول Entschuldigung!؛ وهي عبارة مهذبة شائعة في الخدمة."
      },
      {
        "de": "möchten",
        "ar": "يودّ / يريد",
        "noteAr": "تُستعمل كثيراً في الطلب المهذب: Ich möchte … / Möchten Sie …? تعلّمها في هذه العبارات؛ أما will فهي صيغة أخرى أكثر مباشرة بحسب السياق."
      },
      {
        "de": "ohne Zucker",
        "ar": "بلا سكّر",
        "noteAr": "الحرف ohne ينصب ما بعده دائماً: ohne den Kaffee. وضدّه mit الذي يجرّ (Dativ): mit Milch."
      },
      {
        "de": "das Mineralwasser",
        "ar": "الماء المعدني",
        "noteAr": "اسم مركّب محايد؛ في Mineralwasser يحدّد الاسم الأخير Wasser جنس المركّب. ولتمييز النوعين يقال مثلاً Mineralwasser mit Kohlensäure (فوّار) أو stilles Wasser (غير فوّار)."
      },
      {
        "de": "das Brötchen",
        "ar": "خبزة صغيرة",
        "noteAr": "Brötchen تعني خبزة صغيرة، وهي تصغير لـBrot. الأسماء المصغّرة المنتهية بـ‑chen محايدة في الألمانية القياسية؛ وجمع Brötchen لا يغيّر شكل الاسم."
      },
      {
        "de": "hungrig / satt",
        "ar": "جائع / شبعان",
        "noteAr": "صفتان تُبنيان بـsein: Ich bin hungrig / satt. وقارن بالاسم: Ich habe Hunger — اسمٌ مع haben وصفةٌ مع sein."
      },
      {
        "de": "frisch",
        "ar": "طازج",
        "noteAr": "صفة تعني طازج. وفي وصف الطعام قد تعني alt قديماً أو غير طازج؛ ويتحدد المعنى بالسياق."
      },
      {
        "de": "probieren",
        "ar": "يذوق / يجرّب",
        "noteAr": "في هذا المثال يأخذ الفعل مفعولاً به: Ich probiere die Suppe (أتذوق الحساء)."
      },
      {
        "de": "die Rechnung",
        "ar": "الفاتورة",
        "noteAr": "Rechnung مؤنثة: die Rechnung. اللاحقة الاشتقاقية ‑ung علامة قوية على التأنيث؛ والعبارة الجاهزة: Die Rechnung, bitte!"
      },
      {
        "de": "zusammen / getrennt",
        "ar": "معاً / منفصلين",
        "noteAr": "قد يسأل النادل عند الدفع: Zusammen oder getrennt? أي: هل تدفعون معاً أم كلٌّ على حدة؟"
      },
      {
        "de": "Stimmt so.",
        "ar": "احتفظ بالباقي.",
        "noteAr": "يقولها الزبون عند الدفع إذا أراد من النادل الاحتفاظ بالباقي؛ معناها التقريبي «هكذا مناسب». لا توجد نسبة بقشيش واحدة تلزم كل موقف."
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
        "instructionAr": "الفقرة الرابعة — اختر الصيغة المناسبة:",
        "questionDe": "Welche Ergänzung passt? „Ich habe ___ Hunger mehr.“",
        "questionAr": "ما الكلمة المناسبة لإكمال الجملة؟",
        "options": [
          "keinen",
          "nicht",
          "keine",
          "kein"
        ],
        "correctIndex": 0,
        "explanation": "في هذا التعبير نقول Ich habe keinen Hunger mehr؛ Hunger مذكّر في النصب بعد haben، فتأتي صيغة kein على صورة keinen. لا تعمم أن nicht لا يأتي مطلقاً مع الأسماء؛ فقد ينفي عبارة محددة بحسب السياق.",
        "optionExplanations": [
          undefined,
          "في هذه الجملة المحايدة لا تناسب nicht؛ النفي المعتاد للاسم غير المحدد هو kein.",
          "keine لا توافق Hunger المذكر في هذه الجملة.",
          "kein بصيغتها هذه لا توافق المذكر في النصب؛ الصواب keinen."
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
        "explanation": "الحساب ٢٠٫٥٠ يورو، وأعطت أميرة ٢٥ يورو وقالت Stimmt so (احتفظ بالباقي)؛ فالفرق بين المبلغين ٤٫٥٠ يورو.",
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
        "instructionAr": "قارن صيغة المذكر والمؤنث في النصب:",
        "questionDe": "Was stimmt über den Akkusativ in diesen Bestellungen?",
        "questionAr": "ما الصحيح عن النصب في هذين الطلبين؟",
        "options": [
          "Beim maskulinen Salat wird die unbestimmte Form „ein“ im Akkusativ zu „einen“; bei der femininen Suppe bleibt „die“ gleich.",
          "Suppe ist maskulin und bekommt im Akkusativ die Endung -en.",
          "Salat steht im Nominativ, weil er nach nehmen kommt.",
          "Suppe kann man nicht zählen."
        ],
        "correctIndex": 0,
        "explanation": "بعد nehmen يأتي الصنفان هنا في Akkusativ. Salat مذكر؛ فإذا استُعمل نكرةً تتحول أداة ein من الرفع إلى einen في النصب. Suppe مؤنثة، وأداة التعريف die لا تتغير هنا. أمّا اختيار المعرفة أو التنكير فيعتمد على السياق، لا على الجنس وحده.",
        "optionExplanations": [
          undefined,
          "Suppe مؤنثة، وليس فيها نهاية -en في هذا التركيب.",
          "بعد nehmen يأتي المفعول به هنا في النصب.",
          "Suppe اسم معدود في سياق المطعم، ويمكن طلب eine Suppe."
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
    "discussionAr": "مثّل الحوار مرّتين: مرّةً نادلاً ومرّةً زبوناً. اطلب في كلّ دور زبون أربعة أصناف مختلفة: صنفين مذكّرين مع einen، وصنفاً مؤنثاً مع eine أو die، وصنفاً محايداً مع أداته المناسبة. ثمّ أضف جملةً واحدة بـ Ich habe Hunger أو Ich habe Durst، وجملةً بالنفي بـ kein. وفي الختام راجع: هل نصبتَ المذكّر وحده وتركتَ الباقي؟"
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "في المقهى — نطق اصطناعي من المتصفح",
        lines: [
          { speaker: "Kellner", de: "Guten Tag! Was möchten Sie bestellen?", ar: "مرحباً! ماذا تودّ أن تطلب؟" },
          { speaker: "Sami", de: "Ich hätte gern einen Kaffee und ein Brötchen, bitte.", ar: "أودّ قهوةً وخبزةً صغيرة، من فضلك." },
          { speaker: "Kellner", de: "Gern. Möchten Sie noch etwas dazu?", ar: "بكل سرور. هل تريد شيئاً آخر معها؟" },
          { speaker: "Sami", de: "Nein, danke.", ar: "لا، شكراً." },
          { speaker: "Kellner", de: "Alles klar. Das macht fünf Euro.", ar: "حسناً. المجموع خمسة يورو." },
        ],
      },
      {
        id: "l2",
        title: "في السوبرماركت — نطق اصطناعي من المتصفح",
        lines: [
          { speaker: "Mona", de: "Ich brauche einen Apfel und eine Banane.", ar: "أحتاج تفاحةً وموزةً." },
          { speaker: "Karim", de: "Und wir kaufen auch Brot und Milch.", ar: "ونشتري أيضاً خبزاً وحليباً." },
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
        options: ["einen Kaffee und ein Brötchen", "eine Milch und einen Kuchen", "einen Tee und ein Brötchen", "einen Kaffee und eine Banane"],
        correctIndex: 0,
        explanation: "طلب Sami einen Kaffee und ein Brötchen؛ أي قهوةً وخبزةً صغيرة.",
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
      { de: "der Apfel", ar: "التفاحة", note: "[ˈapfəl]: النبر على المقطع الأول؛ ينتقل الصوت من p إلى f بلا حركة فاصلة." },
      { de: "das Brot", ar: "الخبز", note: "[bʁoːt]: الحركة o طويلة [oː]." },
      { de: "die Milch", ar: "الحليب", note: "[mɪlç]: ch هنا صوت ich-Laut [ç] بعد i؛ لا يطابق الشين أو الخاء العربية تماماً." },
      { de: "der Kaffee", ar: "القهوة", note: "من النطق الشائع [kaˈfeː]: النبر على المقطع الثاني وe طويلة؛ توجد فروق إقليمية في النطق." },
      { de: "der Käse", ar: "الجبن", note: "تُسمع نطقتان إقليميتان: [ˈkɛːzə] و[ˈkeːzə]؛ النبر على المقطع الأول." },
      { de: "die Eier", ar: "البيض", note: "[ˈaɪ̯ɐ]: ei صوت مركّب [aɪ̯]، وer في النهاية غير منبور." },
    ],
    tip: "الرموز بين [ ] تمثّل النطق (IPA)؛ ˈ قبل المقطع المنبور وː للحركة الطويلة. في Eier تُنطق ei قريباً من [aɪ̯]، وفي Euro تُنطق eu [ɔʏ̯]؛ الصوتان مختلفان.",
    shadowing: [
      { de: "Ich esse einen Apfel.", ar: "آكل تفاحة.", tip: "einen [ˈaɪ̯nən]: يبدأ بصوت ei المركّب [aɪ̯]." },
      { de: "Ich trinke einen Kaffee.", ar: "أشرب قهوة.", tip: "Kaffee [kaˈfeː] في نطق شائع: النبر على المقطع الثاني." },
      { de: "Hast du Hunger?", ar: "هل أنت جائع؟", tip: "Hunger [ˈhʊŋɐ]: u قصيرة [ʊ]، لا طويلة." },
      { de: "Das Brot ist frisch.", ar: "الخبز طازج.", tip: "Brot [bʁoːt] بحركة طويلة؛ frisch [fʁɪʃ]." },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة لتستخدم أداة التنكير:",
      prompt: "Das ist der Apfel. → (هذه تفاحة)",
      acceptedAnswers: ["Das ist ein Apfel."],
      sampleAnswer: "Das ist ein Apfel.",
      explanation: "بعد sein يأتي الاسم الخبري هنا في الرفع: ein Apfel، لا einen Apfel.",
      errorType: "article",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بأداة مناسبة، وانتبه إلى حالة الاسم (الرفع أو النصب):",
      template: "Das ist ___ Apfel. Ich esse ___ Apfel. ___ Milch ist kalt.",
      blanks: [
        { correct: "ein", options: ["ein", "eine", "den"] },
        { correct: "einen", options: ["ein", "einen", "eine"] },
        { correct: "Die", options: ["Die", "Der", "Das"] },
      ],
      explanation: "بعد ist يأتي الاسم الخبري Apfel في الرفع: ein Apfel. وبعد esse يكون مفعولاً به: einen Apfel. وMilch مؤنثة؛ وكُتبت Die بحرف كبير لأنها في بداية الجملة.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع إلى النطق الاصطناعي واكتب الجملة (لاحظ النصب):",
      audioText: "Ich habe einen Bruder.",
      explanation: "في هذه الجملة يأتي Bruder مفعولاً به منصوباً بعد haben؛ لذلك نقول einen Bruder.",
      errorType: "case",
    },
    {
      id: "w4",
      type: "transformation",
      instructionAr: "اكتب الجملة بالألمانية وابدأ بـ Ich möchte؛ استخدم أداة تنكير قبل الاسمين:",
      prompt: "أريد شاياً وموزةً من فضلك.",
      acceptedAnswers: [
        "Ich möchte einen Tee und eine Banane, bitte.",
        "Ich möchte eine Banane und einen Tee, bitte.",
      ],
      sampleAnswer: "Ich möchte einen Tee und eine Banane, bitte.",
      explanation: "بعد möchte يأتي المفعول في Akkusativ: der Tee يصبح einen Tee، وأداة المؤنث eine Banane تبقى كما هي.",
      errorType: "case",
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
      instructionAr: "اختر التصحيح المناسب للجزء الخاطئ المعلّم:",
      wrongSentence: "Ich habe ein Brot. Und ich esse der Käse.",
      wrongWord: "der Käse",
      correctWord: "den Käse",
      options: ["den Käse", "der Käse", "das Käse", "ein Käse"],
      explanation: "Käse مذكر؛ وفي هذا المثال يأتي مفعولاً به مع أداة التعريف، فتكون الصيغة den Käse.",
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
      explanation: "ich→habe، du→hast، er→hat. احفظ كل صيغة مع الضمير الذي يأتي معها.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل السؤال إلى جواب:",
      prompt: "Hast du Durst? → (أجب: نعم، أنا عطشان)",
      acceptedAnswers: ["Ja, ich habe Durst."],
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
      instructionAr: "اختر التصحيح المناسب للكلمة الخاطئة في الجملة:",
      wrongSentence: "Ich bin Durst.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "hast", "ist"],
      explanation: "التعبير الألماني الشائع هو Ich habe Durst؛ ويمكن وصف الحال بصفة: Ich bin durstig.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع إلى النطق الاصطناعي واكتب جملة الطلب في المقهى:",
      audioText: "Ich hätte gern einen Tee.",
      explanation: "Ich hätte gern einen Tee = أريد شاياً (بأدب). لاحظ النصب: einen Tee.",
      errorType: "case",
    },
    {"id": "e11", "type": "fill-blank", "instructionAr": "أكمل بأداة التنكير المناسبة في Akkusativ:", "template": "Ich möchte ___ Kaffee und ___ Banane, bitte.", "blanks": [{"correct": "einen", "options": ["einen", "ein", "eine", "der"]}, {"correct": "eine", "options": ["eine", "einen", "ein", "die"]}], "explanation": "Kaffee مذكّر، فتأتي أداة التنكير einen في النصب. وBanane مؤنثة، فتأتي eine في النصب أيضاً؛ في هذا المثال تتغير أداة المذكر وحدها.", "errorType": "case"},
    {"id": "e12", "type": "error-correction", "instructionAr": "صحّح الخطأ:", "wrongSentence": "Ich bin Hunger und ich möchte etwas essen.", "wrongWord": "bin", "correctWord": "habe", "options": ["habe", "hat", "bist", "sind"], "explanation": "التعبير الشائع هو Ich habe Hunger؛ ويمكن وصف الحال بصفة: Ich bin hungrig.", "errorType": "grammar"},
    {"id": "e13", "type": "multiple-choice", "instructionAr": "أيّ جملة صحيحة نحوياً؟", "questionDe": "Welcher Satz ist korrekt?", "questionAr": "أيّ جملة صحيحة؟", "options": ["Er ist einen Lehrer", "Er ist ein Lehrer", "Er hat ein Lehrer", "Er ist eine Lehrer"], "correctIndex": 1, "explanation": "بعد sein الرابط يأتي الخبر الاسمي في الرفع: ein Lehrer. ويمكن قول Er ist Lehrer بلا أداة عند ذكر المهنة. أمّا einen Lehrer فيأتي مثلاً مفعولاً به في Er sieht einen Lehrer.", "optionExplanations": ["في معنى الهوية هنا يأتي الاسم الخبري في الرفع بعد sein: ein Lehrer، لا einen Lehrer.", undefined, "إذا كان المقصود «لديه معلّم» فنقول einen Lehrer؛ لذلك لا تصح هذه الصيغة.", "Lehrer مذكّر فلا تصحّ معه eine."], "errorType": "case"},
    {"id": "e14", "type": "word-ordering", "instructionAr": "رتّب الكلمات:", "tokens": ["Wir", "haben", "heute", "keine", "Zeit", "."], "correctSentence": "Wir haben heute keine Zeit.", "explanation": "الفعل haben في المركز الثاني، ويأتي ظرف الزمان heute بعده، ثمّ عبارة keine Zeit في نهاية هذه الجملة. وZeit مؤنّثة، لذا تبقى صيغة النصب keine كما هي.", "errorType": "word-order"},
    {"id": "e15", "type": "transformation", "instructionAr": "حوّل الجملة إلى النفي بأداة النفي المناسبة:", "prompt": "Ich habe einen Bruder.", "acceptedAnswers": ["Ich habe keinen Bruder."], "sampleAnswer": "Ich habe keinen Bruder.", "explanation": "في هذا النفي المحايد نستبدل einen بـkeinen؛ فBruder مذكر في Akkusativ. لا تعمم ذلك إلى كل العبارات الاسمية، إذ يعتمد استعمال nicht أو kein على تركيب العبارة والمعنى.", "errorType": "negation"},
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich esse ein Apfel.", right: "Ich esse einen Apfel.", whyAr: "حين يكون الاسم المذكر مفعولاً به في أمثلة هذا الدرس تتغير أداة التنكير في النصب: ein→einen." },
      { wrong: "Ich bin Hunger.", right: "Ich habe Hunger.", whyAr: "الصيغة الألمانية الشائعة هي Ich habe Hunger؛ ويمكن وصف الحال بالصفة: Ich bin hungrig." },
      { wrong: "die Brot", right: "das Brot", whyAr: "Brot محايد. احفظ الاسم مع أداة جنسه: das Brot، لا الاسم وحده." },
    ],
    eselsbruecken: [
      "في جدول الأدوات هنا يتغير المذكر في Akkusativ: der→den وein→einen؛ وتبقى صور أدوات المؤنث والمحايد والجمع كما هي في هذا الجدول.",
      "في بعض اللهجات العربية يقال «عندي جوع»؛ اربطها بالتعبير الألماني الشائع Ich habe Hunger، مع تذكّر أن التعبير يختلف بين اللغتين.",
    ],
    culturalNote: {
      title: "Guten Appetit!",
      content:
        "تُستعمل عبارة Guten Appetit! لتمني وجبة شهية قبل الأكل، ويتغير تواترها بحسب الموقف. وبعد تناول طعام أعجبك يمكنك أن تقول: Das hat gut geschmeckt! هذه أمثلة لغوية، وليست قواعد تلزم جميع المتحدثين أو الموائد.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir kaufen ___ Brot.",
      questionAr: "نشتري رغيفاً واحداً.",
      options: ["ein", "einen", "eine", "der"],
      correctIndex: 0,
      explanation: "المقصود رغيف واحد: ein Brot. Brot محايد؛ لذلك تبقى أداة التنكير ein كما هي بين الرفع والنصب في هذا المثال.",
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
      instructionAr: "صحّح أداة التعريف مع الحفاظ على الاسم مفرداً ومعرّفاً:",
      wrongSentence: "Ich esse die Apfel.",
      wrongWord: "die Apfel",
      correctWord: "den Apfel",
      options: ["den Apfel", "der Apfel", "das Apfel", "die Äpfel"],
      explanation: "Apfel مذكر مفرد ومفعول به هنا؛ لذلك تتحول أداة التعريف der إلى den. أما الجمع فهو die Äpfel مع تغيّر شكل الاسم.",
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
    { id: "fc4", de: "die Milch", ar: "الحليب", example: "Ich trinke Milch.", exampleAr: "أشرب الحليب.", level: "A1" },
    { id: "fc5", de: "der Käse", ar: "الجبن", example: "Der Käse schmeckt gut.", exampleAr: "الجبن طعمه جيد.", level: "A1" },
    { id: "fc6", de: "essen / trinken", ar: "يأكل / يشرب", example: "Wir essen und trinken.", exampleAr: "نأكل ونشرب.", level: "A1" },
    { id: "fc7", de: "der Hunger / der Durst", ar: "الجوع / العطش", example: "Ich habe Hunger und Durst.", exampleAr: "أنا جائع وعطشان.", level: "A1" },
    { id: "fc8", de: "kaufen", ar: "يشتري", example: "Wir kaufen Brot.", exampleAr: "نشتري خبزاً.", level: "A1" },
    {"id": "fc9", "de": "einen (Akkusativ maskulin)", "ar": "أداة نصب المذكّر", "example": "Ich esse einen Apfel.", "exampleAr": "آكل تفّاحة.", "level": "A1"},
    {"id": "fc10", "de": "kein / keine / keinen", "ar": "أداة نفي الاسم", "example": "Ich habe keine Zeit.", "exampleAr": "ليس عندي وقت.", "level": "A1"},
    {"id": "fc11", "de": "möchten", "ar": "يودّ (صيغة الطلب المهذّبة)", "example": "Ich möchte einen Tee, bitte.", "exampleAr": "أريد شاياً من فضلك.", "level": "A1"},
    {"id": "fc12", "de": "die Rechnung", "ar": "الفاتورة", "example": "Die Rechnung, bitte!", "exampleAr": "الفاتورة من فضلك!", "level": "A1"},
    {"id": "fc13", "de": "das Brötchen", "ar": "خبزة صغيرة (محايدة بـ‑chen)", "example": "Ein Brötchen kostet fünfzig Cent.", "exampleAr": "الخبزة الصغيرة بخمسين سنتاً.", "level": "A1"},
    {"id": "fc14", "de": "hungrig / satt", "ar": "جائع / شبعان (صفتان مع sein)", "example": "Ich bin satt, danke.", "exampleAr": "أنا شبعان، شكراً.", "level": "A1"},
    { id: "fc15", de: "die Suppe", ar: "الحساء", example: "Ich nehme eine Suppe.", exampleAr: "آخذ حساءً.", level: "A1" },
    { id: "fc16", de: "der Salat", ar: "السلطة", example: "Möchten Sie einen Salat?", exampleAr: "أتودّ سلطة؟", level: "A1" },
    { id: "fc17", de: "der Kaffee", ar: "القهوة", example: "Einen Kaffee, bitte.", exampleAr: "قهوةً من فضلك.", level: "A1" },
    { id: "fc18", de: "nehmen", ar: "يأخذ", example: "Ich nehme das Käsebrötchen.", exampleAr: "آخذ خبزةً صغيرة بالجبن.", level: "A1" },
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
      modelAnswerAr: "«اليوم: شوربة (3 يورو)، وشنيتزل (شريحة رقيقة من اللحم، غالباً مغطاة بالبقسماط ومقلية؛ لم يحدد النص نوع اللحم) مع بطاطا مقلية (9 يورو)، وكعكة تفاح (2.50 يورو).»",
      keyPointsAr: ["نقلت الأطباق الثلاثة", "نقلت الأسعار بدقة", "شرحت المقصود بـSchnitzel بكلمات مفهومة"],
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
            { de: "Ich bin ein Kaffee.", ar: "أنا قهوة.", best: false, replyDe: "Meinen Sie: „Ich hätte gern einen Kaffee“?", replyAr: "هل تقصد: أودّ قهوة؟" },
          ],
        },
        {
          speakerDe: "Mit Milch und Zucker?",
          speakerAr: "مع حليب وسكر؟",
          options: [
            { de: "Mit Milch, bitte. Ohne Zucker.", ar: "مع حليب من فضلك. بدون سكر.", best: true, replyDe: "Alles klar! Und etwas zu essen?", replyAr: "حسناً! وهل تريد شيئاً للأكل؟" },
            { de: "Nein, danke. Nur Wasser.", ar: "لا، شكراً. أريد الماء فقط.", best: true, replyDe: "Alles klar, dann ein Wasser statt Kaffee. Möchten Sie auch etwas essen?", replyAr: "حسناً، ماء بدلاً من القهوة. هل تريد شيئاً للأكل أيضاً؟" },
          ],
        },
        {
          speakerDe: "Möchten Sie auch etwas essen?",
          speakerAr: "هل تريد أيضاً شيئاً للأكل؟",
          options: [
            { de: "Ja, ich hätte gern ein Stück Apfelkuchen, bitte.", ar: "نعم، أودّ قطعةً من كعكة التفاح، من فضلك.", best: true, replyDe: "Sehr gut! Das macht 5,50 Euro.", replyAr: "حسناً! الحساب 5.50 يورو." },
            { de: "Nein, danke. Die Rechnung, bitte.", ar: "لا، شكراً. الفاتورة من فضلك.", best: true, replyDe: "Gern. Ich bringe Ihnen die Rechnung.", replyAr: "بكل سرور. سأحضر لك الفاتورة." },
          ],
        },
      ],
    },
  ],
};
