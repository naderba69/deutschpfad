import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-14: الماضي المحكيّ (Perfekt) — ختام قواعد A1
 * — التركيب (haben/sein + Partizip II)، اختيار الفعل المساعد،
 *   Partizip II في الأفعال المنفصلة وغير المنفصلة وأفعال -ieren،
 *   ثمّ إتمام الأفعال الناقصة الستّة بـwollen وsollen —
 */
export const lessonA114: Lesson = {
  id: "a1-14",
  unitId: "a1-07",
  level: "A1",
  order: 2,
  titleDe: "Das Perfekt: Was hast du gemacht?",
  titleAr: "الماضي المحكيّ (Perfekt) — ماذا فعلتَ؟",
  duration: 40,
  summary:
    "الزمن الماضي المستعمل في الكلام: haben أو sein + Partizip II، وصناعة Partizip II في الأفعال الضعيفة والقوية والمنفصلة وغير المنفصلة وأفعال -ieren، وقاعدة اختيار المساعد باختبار المفعول به، ثمّ الفعلان الناقصان الأخيران wollen وsollen.",

  lernziele: [
    { id: "z1", de: "Ich kann über das Wochenende im Perfekt erzählen.", ar: "أن أحكي عن عطلة الأسبوع بصيغة Perfekt." },
    { id: "z2", de: "Ich kann das Partizip II regelmäßiger und wichtiger unregelmäßiger Verben bilden.", ar: "أن أصوغ Partizip II للأفعال المنتظمة ولأهمّ الأفعال الشاذّة." },
    { id: "z3", de: "Ich kann zwischen haben und sein als Hilfsverb wählen.", ar: "أن أختار بين haben وsein فعلاً مساعداً بحسب القاعدة." },
    { id: "z4", de: "Ich kann sagen, was ich will und was ich soll.", ar: "أن أعبّر عمّا أريده (wollen) وعمّا يُطلب منّي (sollen)." },
    { id: "z5", de: "Ich kann eine kurze E-Mail über ein Erlebnis schreiben.", ar: "أن أكتب رسالة قصيرة أحكي فيها تجربةً مضت." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "سؤالٌ واحد يتكرّر في كلّ امتحانٍ شفويّ وفي كلّ لقاءٍ أوّل: «Was hast du am Wochenende gemacht?» — ماذا فعلتَ في عطلة الأسبوع؟ وحتّى اليوم لا تملك أن تجيب، لأنّ كلّ ما تعرفه من الألمانية يقع في الحاضر. واليوم يُفتح الماضي.",
    motivatingQuestionDe: "Was hast du am Wochenende gemacht?",
    contextAr:
      "الألمانية لها ماضيان: واحدٌ يُكتب (Präteritum) وواحدٌ يُقال (Perfekt). ونحن نتعلّم اليوم المحكيّ لأنّه ما تحتاجه في الشارع وفي الامتحان الشفويّ. وهو تركيبٌ من قطعتين، والقطعة الثانية تذهب إلى آخر الجملة — تماماً كما رأيتَ في الأفعال المنفصلة والناقصة.",
    contextDe: "Ich bin nach Berlin gefahren und habe viel gesehen.",
    connectionToPreviousAr: "أنت تملك بالفعل نصف هذا الدرس: الحاضنة الفعلية من درس الروتين اليوميّ (Ich stehe … auf)، وhaben من درس الطعام، وsein من درس التعارف. اليوم نجمع الثلاثة في زمنٍ جديد، ونُتمّ الأفعال الناقصة الستّة.",
    activateVocabulary: [
      { de: "gestern", ar: "أمس" },
      { de: "letztes Wochenende", ar: "عطلة الأسبوع الماضية" },
      { de: "gemacht", ar: "فعَل (Partizip II من machen)" },
      { de: "gefahren", ar: "سافر (Partizip II من fahren)" },
      { de: "gewesen", ar: "كان (Partizip II من sein)" },
    ],
  },

  /* مراجعة تراكمية (Interleaving): من دروس a1-06 وa1-11 وa1-12 */
  review: [
    {
      id: "r1",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-06 — الهوايات): أكمل الفعل الناقص وموضع المصدر",
      template: "Ich ___ gut Deutsch sprechen. · ___ du schwimmen?",
      blanks: [
        { correct: "kann", options: ["kann", "kannst", "können", "konnte"] },
        { correct: "Kannst", options: ["Kannst", "Kann", "Können", "Kannt"] },
      ],
      hint: "الأفعال الناقصة بلا نهاية في ich، والمصدر في آخر الجملة.",
      explanation: "ich kann (بلا نهاية) · du kannst — من درس a1-06.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-11 — التنقّل): أيّ ضمير نصبٍ صحيح؟",
      questionDe: "Der Bus kommt. Siehst du ___?",
      questionAr: "الحافلة قادمة. هل تراها؟",
      options: ["ihn", "er", "ihm", "es"],
      correctIndex: 0,
      explanation: "der Bus في حالة النصب يصير ihn — من درس a1-11.",
      errorType: "pronoun",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-12 — أدوات الربط): صحّح الخطأ في الجملة",
      wrongSentence: "Ich bleibe zu Hause, denn regnet es stark.",
      wrongWord: "denn regnet es",
      correctWord: "denn es regnet",
      options: ["denn es regnet", "denn regnet es", "denn es regnen", "denn regnete"],
      explanation: "denn تجلس في الموضع صفر ولا تُزيح شيئاً: الترتيب بعدها عاديّ (فاعل ثمّ فعل) — من درس a1-12.",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الماضي المحكيّ (Perfekt): فعلٌ مساعد + Partizip II",
      titleDe: "Das Perfekt: haben + Partizip II",
      explanationAr:
        "حتّى اليوم كنتَ تعيش في الحاضر وحده. تقول Ich lerne Deutsch، وتقول Es regnet، وكلّ ما مضى كان يفلت منك. والباب الذي يفتح الماضي كلّه اسمه **Perfekt** — وهو **الماضي المحكيّ**: ما يستعمله الألمانيّ في الكلام وفي الرسائل وفي الامتحان الشفويّ.\n\n**أوّلاً — التركيب: فعلان لا فعل واحد.**\nالعربية تقول „تعلّمتُ“ بكلمة واحدة. والألمانية تحتاج قطعتين:\n· **فعل مساعد مصرَّف** (haben أو sein) — يحمل الشخص والزمن\n· **Partizip II** — يحمل المعنى، ولا يتصرّف أبداً\n**Ich habe Deutsch gelernt.** ⟵ habe (أنا، ماضٍ) + gelernt (تعلَّم).\n\n**ثانياً — أين يقع كلٌّ منهما؟ هذا نصف الدرس.**\nالفعل المساعد يأخذ **المركز الثاني** كأيّ فعلٍ مصرَّف تعرفه. وPartizip II يذهب إلى **آخر الجملة**، مهما طالت:\n| Ich | habe | gestern in der Schule Deutsch | **gelernt**. |\nولاحظ أنّ هذه ليست قاعدةً جديدة: هي **الحاضنة الفعلية** (Satzklammer) نفسها التي عرفتها في الأفعال المنفصلة (Ich **stehe** um sieben **auf**) وفي الأفعال الناقصة (Ich **kann** Deutsch **sprechen**). الألمانية تفتح الجملة بفعلٍ مصرَّف وتغلقها بجزءٍ غير مصرَّف — ثلاث مرّاتٍ الآن بالنمط نفسه.\n\n**ثالثاً — كيف تصنع Partizip II؟ ثلاث عائلات.**\n· **الأفعال الضعيفة (المنتظمة):** **ge- + جذر + -t** ⟵ lernen ⟵ **gelernt** · machen ⟵ **gemacht** · kaufen ⟵ **gekauft**\n· **الأفعال القوية (الشاذّة):** **ge- + جذر (كثيراً ما يتغيّر صوته) + -en** ⟵ trinken ⟵ **getrunken** · lesen ⟵ **gelesen** · schreiben ⟵ **geschrieben**\n· **حالةٌ ثالثة صغيرة:** جذرٌ بحرفٍ يمنع النطق (arbeiten, warten) فيُدخَل حرف علّة: **gearbeitet** · **gewartet** — تماماً كما أدخلتَه في المضارع (du arbeit**e**st).\n\n**رابعاً — الفعل المساعد الافتراضيّ هو haben.**\nالأغلبية الساحقة من الأفعال تأخذ haben. وsein استثناءٌ محصور سنُفصّله في الكتلة التالية. فإذا شككتَ ولم تتذكّر، فـ**haben** أقرب إلى الصواب إحصائياً.",
      whyAr:
        "لماذا فعلان بدل واحد؟ لأنّ Perfekt في أصله لم يكن زمناً ماضياً بل **وصفاً لحالةٍ حاضرة**. جملة Ich habe das Buch gelesen معناها الأصليّ الحرفيّ: „أنا أملك الكتاب مقروءاً“ — أي أنّ عندي الآن كتاباً في حال القراءة المنجزة. لذلك جاء haben (يملك) مساعداً، ولذلك كان Partizip II في الأصل **صفةً** لا فعلاً (ولذلك ما زال يشبه الصفة: ein **gelerntes** Wort). ثمّ انزاح المعنى مع القرون من „أملك منجَزاً“ إلى „فعلتُ“، وبقي التركيب شاهداً على الأصل.\n\nولماذا البادئة ge-؟ هي بقيّةٌ من بادئةٍ جرمانية قديمة (gi-) كانت تعني **الاكتمال**، وهي نفسها البادئة في genug (كافٍ) وgesamt (مجموع). فـge- ليست زخرفاً: هي علامة „تمّ“.\n\nولماذا يقع Partizip II في آخر الجملة؟ لأنّه بحكم أصله **صفةُ الحال** التي تصف نتيجة الفعل، والألمانية تؤخّر ما يحمل ثقل المعنى الجديد. وهذا يعطي الجملة الألمانية سمتها المميّزة: المستمع لا يعرف **ماذا** حدث إلاّ في النهاية، فيلزمه أن ينصت حتّى آخر كلمة. وهذه عادةٌ سمعيّة تحتاج تدريباً، وهي سببٌ مباشر في صعوبة قسم Hören على العرب.",
      table: {
        title: "صناعة Partizip II — العائلات الثلاث",
        columns: ["العائلة", "القاعدة", "المصدر ⟵ Partizip II", "الجملة"],
        rows: [
          { label: "ضعيف", cells: ["ge + جذر + t", "lernen ⟵ gelernt", "Ich habe Deutsch gelernt."] },
          { label: "ضعيف", cells: ["ge + جذر + t", "machen ⟵ gemacht", "Was hast du gemacht?"] },
          { label: "ضعيف بحرف علّة", cells: ["ge + جذر + et", "arbeiten ⟵ gearbeitet", "Er hat viel gearbeitet."] },
          { label: "قويّ", cells: ["ge + جذر متغيّر + en", "trinken ⟵ getrunken", "Wir haben Kaffee getrunken."] },
          { label: "قويّ", cells: ["ge + جذر متغيّر + en", "schreiben ⟵ geschrieben", "Ich habe eine E-Mail geschrieben."] },
          { label: "قويّ بلا تغيّر", cells: ["ge + جذر + en", "lesen ⟵ gelesen", "Sie hat das Buch gelesen."] },
        ],
      },
      examples: [
        { de: "Ich habe gestern Deutsch gelernt.", ar: "تعلّمتُ الألمانية أمس. (habe في الثاني، gelernt في الآخر)" },
        { de: "Was hast du am Wochenende gemacht?", ar: "ماذا فعلتَ في عطلة الأسبوع؟ (السؤال الأكثر تكراراً في Sprechen)" },
        { de: "Wir haben in einem Restaurant gegessen.", ar: "أكلنا في مطعم. (essen ⟵ gegessen — قويّ)" },
        { de: "Meine Mutter hat einen Kuchen gebacken.", ar: "خبزت أمّي كعكة." },
        { de: "Habt ihr die Hausaufgaben gemacht?", ar: "هل عملتم الواجبات؟ (في السؤال يتقدّم المساعد ويبقى الجزء الأخير مكانه)" },
        { de: "Ich habe zwei Stunden auf den Bus gewartet.", ar: "انتظرتُ الحافلة ساعتين. (warten ⟵ gewartet بحرف علّة)" },
        { de: "Er hat mir ein Buch geschenkt.", ar: "أهداني كتاباً." },
        { de: "Ich habe nichts gesagt.", ar: "لم أقل شيئاً. (sagen ⟵ gesagt)" },
      ],
      comparisonWithArabic:
        "العربية تصنع الماضي بتغييرٍ داخل الكلمة الواحدة: يتعلّم ⟵ تعلَّم. لا فعل مساعد ولا قطعة ثانية. فالمتعلّم العربيّ يبحث تلقائياً عن „الفعل الماضي“ المفرد، فيقول Ich lernte — وهي صيغةٌ موجودة فعلاً (Präteritum) لكنّها **مكتوبة لا محكيّة**، تُقرأ في الروايات والأخبار ولا تُقال في المقهى. فمن يستعملها في الامتحان الشفويّ يبدو كمن يتكلّم العربية الفصحى في السوق: مفهومٌ لكنّه غريب.\n\nوالعربية تضع الفعل في أوّل الجملة غالباً („تعلّمتُ الألمانيةَ أمسِ“)، والألمانية تشطر فعلها شطرين وتضع أحدهما في المركز الثاني والآخر في الآخِر. فالمسافة بين القطعتين هي مصدر أكثر أخطاء العرب في هذا الباب: يُنطق المساعد ثمّ يُنسى الجزء الثاني.\n\nوفائدةٌ عربية تُعينك: تصوَّر Partizip II كاسم المفعول („مكتوب“، „مقروء“). فـIch habe geschrieben تُقارَب بـ„عندي مكتوبٌ“. والمقاربة ليست ترجمةً بل جسرٌ ذهنيّ يُثبّت التركيب.",
      eselsbruecke:
        "الجملة الألمانية في Perfekt قوسان: المساعد يفتح في المركز الثاني، وPartizip II يُغلق في الآخر. وما بينهما حشوٌ مهما طال. وge- تعني «تمّ» — كما في genug.",
      commonMistakes: [
        {
          wrong: "Ich habe gelernt Deutsch.",
          right: "Ich habe Deutsch gelernt.",
          whyAr:
            "نقلٌ لترتيب العربية والإنجليزية: الفعل ثمّ المفعول. والألمانية تُغلق الجملة بـPartizip II، فكلّ مفعولٍ وظرفٍ يسبقه. وهذا أكثر أخطاء الباب شيوعاً.",
        },
        {
          wrong: "Ich bin Deutsch gelernt.",
          right: "Ich habe Deutsch gelernt.",
          whyAr:
            "lernen فعلٌ متعدٍّ له مفعول (Deutsch)، وكلّ متعدٍّ يأخذ haben بلا استثناء. وsein محصورة في أفعال الحركة واللزوم كما في الكتلة التالية.",
        },
        {
          wrong: "Ich habe Deutsch lernte.",
          right: "Ich habe Deutsch gelernt.",
          whyAr:
            "خلطٌ بين صيغتين: lernte هي Präteritum وتقف وحدها بلا مساعد (Ich lernte). ولا يجتمع مساعدٌ وصيغةُ ماضٍ ثانية في جملة.",
        },
        {
          wrong: "Ich habe gearbeit.",
          right: "Ich habe gearbeitet.",
          whyAr:
            "جذر arbeit ينتهي بـt، فإلحاق t به يُنتج tt لا يُنطق. فتُدخَل e فاصلة: gearbeit-e-t. وهي العلّة الصوتية نفسها في du arbeitest من درس السلسلة الذهبية.",
        },
        {
          wrong: "Ich habe getrinkt.",
          right: "Ich habe getrunken.",
          whyAr:
            "trinken فعلٌ قويّ: صوت جذره يتغيّر (i ⟵ u) ونهايته -en لا -t. والقياس على الضعيفة هو الفخّ: القوية تُحفظ ولا تُشتقّ.",
        },
      ],
      relatedRuleComparison: {
        title: "الحاضنة الفعلية — ثالث ظهورٍ لها",
        content:
          "قابِل ثلاث جمل درستَها في ثلاثة دروس مختلفة:\n· **Ich stehe** um sieben Uhr **auf**. ⟵ فعلٌ منفصل\n· **Ich kann** gut Deutsch **sprechen**. ⟵ فعلٌ ناقص + مصدر\n· **Ich habe** gestern Deutsch **gelernt**. ⟵ Perfekt\nالبنية واحدة في الثلاث: **مصرَّفٌ في الثاني، غير مصرَّفٍ في الآخر، والباقي بينهما**. فأنت لا تتعلّم اليوم قاعدةً رابعة بل تُضيف مِلْأً جديداً لقالبٍ تعرفه. وهذه هي طريقة الألمانية في التوسّع: عددٌ قليل من القوالب البنيوية يُعاد استعماله بمحتوياتٍ مختلفة.\n\nوستقابل القالب نفسه مرّتين بعد: في المبنيّ للمجهول (Das Haus **wird** **gebaut**) وفي المستقبل (Ich **werde** **lernen**). فمن أتقن الحاضنة اليوم أراح نفسه في أربعة أبواب.",
      },
    },
    {
      id: "t2",
      titleAr: "haben أم sein؟ — القاعدة وحدودها",
      titleDe: "haben oder sein? Die Wahl des Hilfsverbs",
      explanationAr:
        "قلنا إنّ haben هو الافتراض. وبقي أن نُحدّد **متى تأخذ الفعلُ sein** تحديداً لا يترك ظنّاً. والقاعدة ثلاث حالات، لا أكثر.\n\n**الحالة الأولى — أفعال الحركة من مكانٍ إلى مكان.**\ngehen · fahren · fliegen · kommen · laufen · reisen · schwimmen\n· Ich **bin** nach Berlin **gefahren.** (ذهبتُ إلى برلين)\n· Er **ist** nach Hause **gekommen.** (جاء إلى البيت)\nوالشرط في هذه الحالة أن تكون الحركة **منتقلةً بين نقطتين**، لا مجرّد نشاطٍ بدنيّ في مكان.\n\n**الحالة الثانية — أفعال تغيّر الحال.**\naufstehen · einschlafen · aufwachen · werden · wachsen · sterben\n· Ich **bin** um sechs **aufgestanden.** (نهضتُ) — انتقالٌ من نومٍ إلى يقظة\n· Das Kind **ist** groß **geworden.** (كبر الطفل) — انتقالٌ من حالٍ إلى حال\n\n**الحالة الثالثة — ثلاثة أفعالٍ تُحفظ حفظاً:**\n**sein** ⟵ Ich **bin** in Berlin **gewesen.** · **bleiben** ⟵ Wir **sind** zu Hause **geblieben.** · **passieren** ⟵ Was **ist** **passiert**?\nوهي شاذّةٌ عن المنطق: bleiben تعني البقاء أي **عدم** الحركة، ومع ذلك تأخذ sein. فلا تُتعِب نفسك بتعليلها.\n\n**وما عدا ذلك فـhaben.** وثمّة اختبارٌ عمليّ لا يخيب تقريباً: **هل للفعل مفعولٌ به مباشر (Akkusativ)؟** إن كان له مفعول فالمساعد haben قطعاً. Ich habe **einen Brief** geschrieben — فيه مفعول ⟵ haben. Ich bin gefahren — لا مفعول، وحركةٌ ⟵ sein.\n\n**وفخٌّ لطيف:** فعلٌ واحد قد يأخذ الاثنين بحسب معناه في الجملة:\n· Ich **bin** nach Berlin **gefahren.** (سافرت — حركة) مقابل Ich **habe** **das Auto** **gefahren.** (قدتُ السيارة — له مفعول)",
      whyAr:
        "لماذا يقتسم الألمان مساعدَين بينما تكتفي الإنجليزية بـhave وحده؟ لأنّ الألمانية حافظت على تمييزٍ جرمانيّ قديم بين **ما يفعله الفاعل بشيء** وبين **ما يحدث للفاعل نفسه**. من كتب رسالةً فَعَل شيئاً في العالم ⟵ فهو „يملك“ نتيجته ⟵ haben. ومن ذهب أو نام أو كبر لم يفعل شيئاً في شيء، بل **تغيّر موضعه أو حاله** ⟵ فهو „كائنٌ“ في وضعٍ جديد ⟵ sein.\n\nولهذا كان اختبار المفعول به دقيقاً لا صدفة: وجود المفعول دليلٌ نحويّ على أنّ الفعل واقعٌ على شيءٍ خارج الفاعل، وهذا هو المعنى الذي يستدعي haben بالضبط. فالاختبار ليس حيلةً بل صياغةٌ إجرائية للتمييز الدلاليّ.\n\nوأمّا bleiben وsein وpassieren فبقايا استعمالٍ قديم أوسع لـsein انحسر ولم ينحسر عنها. واللغات كلّها فيها مثل هذه الجزر: صيغٌ نجت من تغيّرٍ عامّ لأنّها كثيرة الدوران فقاومت التسوية.",
      table: {
        title: "sein أم haben؟ — الحالات الثلاث وما عداها",
        columns: ["الحالة", "أمثلة الأفعال", "المساعد", "الجملة"],
        rows: [
          { label: "حركة بين نقطتين", cells: ["gehen, fahren, fliegen, kommen", "sein", "Ich bin nach Berlin gefahren."] },
          { label: "تغيّر حال", cells: ["aufstehen, einschlafen, werden, wachsen", "sein", "Ich bin früh aufgestanden."] },
          { label: "الثلاثة المحفوظة", cells: ["sein, bleiben, passieren", "sein", "Wir sind zu Hause geblieben."] },
          { label: "فعلٌ له مفعول", cells: ["lesen, essen, kaufen, schreiben", "haben", "Ich habe ein Buch gelesen."] },
          { label: "نشاطٌ بلا انتقال", cells: ["schlafen, arbeiten, warten, lachen", "haben", "Er hat gut geschlafen."] },
          { label: "الفعل ذو الوجهين", cells: ["fahren (سافر / قاد)", "sein / haben", "Ich bin gefahren. · Ich habe das Auto gefahren."] },
        ],
      },
      examples: [
        { de: "Ich bin gestern nach München gefahren.", ar: "سافرتُ أمس إلى ميونخ. (حركة ⟵ sein)" },
        { de: "Ich habe ein Buch gelesen.", ar: "قرأتُ كتاباً. (له مفعول ⟵ haben)" },
        { de: "Wir sind am Samstag zu Hause geblieben.", ar: "بقينا في البيت يوم السبت. (bleiben محفوظة ⟵ sein)" },
        { de: "Er hat acht Stunden geschlafen.", ar: "نام ثماني ساعات. (نشاطٌ بلا انتقال ⟵ haben)" },
        { de: "Bist du schon einmal in Deutschland gewesen?", ar: "هل سبق أن كنتَ في ألمانيا؟ (sein ⟵ gewesen)" },
        { de: "Das Kind ist sehr schnell gewachsen.", ar: "كبر الطفل بسرعة. (تغيّر حال ⟵ sein)" },
        { de: "Was ist denn passiert?", ar: "ماذا حدث؟ (passieren محفوظة ⟵ sein)" },
        { de: "Ich bin um sechs Uhr aufgestanden und habe gefrühstückt.", ar: "نهضتُ في السادسة وتناولتُ الفطور. (المساعدان يختلفان في الجملة الواحدة)" },
      ],
      comparisonWithArabic:
        "العربية لا تعرف هذا التمييز إطلاقاً: „ذهبتُ“ و„كتبتُ“ صيغتان من نمطٍ واحد، والفارق بينهما دلاليّ لا صرفيّ. فالمتعلّم العربيّ لا يملك حدساً جاهزاً هنا، وعليه أن يبنيه بناءً.\n\nلكنّ العربية تُعينه من بابٍ آخر: هي تفرّق بين **المتعدّي** و**اللازم** تفريقاً واضحاً في نحوها المدرسيّ. و„المتعدّي ⟵ haben، واللازمُ الحركيّ ⟵ sein“ ترجمةٌ دقيقة تقريباً للقاعدة الألمانية بمصطلحٍ تعرفه من نحو العربية. فمن درس „كتب“ متعدّياً و„ذهب“ لازماً يملك المفتاح ولا يدري.\n\nوالخطأ الأشيع عند العرب في هذا الباب ليس اختيار المساعد بل **حذفه**: يقول Ich nach Berlin gefahren ظنّاً أنّ Partizip يكفي، لأنّ العربية تكتفي بكلمةٍ واحدة. والألمانية لا تقبل جملةً بلا فعلٍ مصرَّف أبداً.",
      eselsbruecke:
        "سَل نفسك سؤالاً واحداً: هل في الجملة مفعولٌ به؟ إن كان — فـhaben. وإن لم يكن وكانت حركةً أو تغيّرَ حال — فـsein. والمحفوظات ثلاث: sein · bleiben · passieren.",
      commonMistakes: [
        {
          wrong: "Ich habe nach Berlin gefahren.",
          right: "Ich bin nach Berlin gefahren.",
          whyAr:
            "fahren هنا حركةٌ بين نقطتين بلا مفعول، فمساعدها sein. ولو قلت Ich habe das Auto gefahren لصحّ haben لأنّ das Auto مفعولٌ به.",
        },
        {
          wrong: "Ich bin ein Buch gelesen.",
          right: "Ich habe ein Buch gelesen.",
          whyAr:
            "وجود المفعول ein Buch يحسم المسألة: كلّ فعلٍ متعدٍّ يأخذ haben بلا استثناء واحد. فالاختبار يكفيك عن الحفظ في أغلب الحالات.",
        },
        {
          wrong: "Ich nach Berlin gefahren.",
          right: "Ich bin nach Berlin gefahren.",
          whyAr:
            "حذف الفعل المساعد نقلاً عن العربية التي تكتفي بكلمةٍ واحدة للماضي. والجملة الألمانية لا تقوم بلا فعلٍ مصرَّف يحمل الشخص والزمن.",
        },
        {
          wrong: "Wir haben zu Hause geblieben.",
          right: "Wir sind zu Hause geblieben.",
          whyAr:
            "bleiben من الثلاثة المحفوظة. والمنطق يخذلك هنا لأنّ معناها عدم الحركة، فلا تُعمل القياس بل الحفظ: sein · bleiben · passieren.",
        },
        {
          wrong: "Ich bin gut geschlafen.",
          right: "Ich habe gut geschlafen.",
          whyAr:
            "schlafen نشاطٌ يقع في مكانٍ واحد لا انتقال فيه، فمساعدها haben. ويُخطئ فيها كثيرون بالقياس على einschlafen (يغفو) وهي تغيّرُ حالٍ فتأخذ sein فعلاً.",
        },
      ],
      relatedRuleComparison: {
        title: "sein المساعد مقابل sein الأصليّ",
        content:
          "انتبه إلى أنّ كلمة **bin** تؤدّي وظيفتين مختلفتين تماماً:\n· **Ich bin Student.** ⟵ هنا bin **فعلٌ تامّ** معناه „أنا“، وStudent خبره.\n· **Ich bin gefahren.** ⟵ هنا bin **مجرّد أداة** لا معنى لها، والمعنى كلّه في gefahren.\nوالدليل على أنّها أداةٌ لا فعل: لا يمكن ترجمتها. فلا تقل „أنا كائنٌ مسافراً“، بل „سافرتُ“ فقط.\n\nوالأمر نفسه في haben: **Ich habe ein Auto** (أملك سيارة — فعلٌ تامّ) مقابل **Ich habe gelesen** (قرأتُ — أداة). وهذه ازدواجيةٌ تتكرّر في الألمانية كلّها: الأفعال الثلاثة sein وhaben وwerden تعمل تارةً أفعالاً كاملةً وتارةً أدواتٍ فارغة. ومن أدرك الفرق مبكراً لم تُربكه الجملة الطويلة.",
      },
    },
    {
      id: "t3",
      titleAr: "Partizip II في الأفعال المنفصلة وغير المنفصلة وفي -ieren",
      titleDe: "Partizip II bei trennbaren, untrennbaren und -ieren-Verben",
      explanationAr:
        "تعرف الآن ge- + جذر + t/en. وبقيت ثلاث عائلاتٍ تكسر القاعدة كسراً منتظماً — أي أنّ لها قواعدها هي.\n\n**أوّلاً — الأفعال المنفصلة: ge- تدخل في الوسط.**\nالفعل المنفصل قطعتان: بادئةٌ + فعلٌ أساسيّ. وفي Partizip II تُحشَر **ge-** بينهما:\n· auf|stehen ⟵ auf**ge**standen · ein|kaufen ⟵ ein**ge**kauft · an|rufen ⟵ an**ge**rufen · fern|sehen ⟵ fern**ge**sehen\n**Ich bin um sechs aufgestanden.** · **Ich habe meine Mutter angerufen.**\nوالقاعدة سهلة الحفظ: البادئة تبقى أوّلاً، وge- تحلّ محلّها في موضعها المعتاد.\n\n**ثانياً — الأفعال غير المنفصلة: لا ge- إطلاقاً.**\nثمّة بوادئ **لا تنفصل أبداً** وتمنع ge- منعاً: **be- · ge- · er- · ver- · zer- · ent- · emp- · miss-**\n· be**suchen** ⟵ **besucht** (لا gebesucht) · ver**stehen** ⟵ **verstanden** · er**zählen** ⟵ **erzählt** · be**kommen** ⟵ **bekommen**\n**Ich habe meine Oma besucht.** · **Hast du das verstanden?**\nولاحظ bekommen: صورته في Partizip II مطابقةٌ لمصدره تماماً. وهذا يقع في كلّ فعلٍ غير منفصلٍ قويّ ينتهي بـ-en.\n\n**ثالثاً — أفعال -ieren: لا ge- كذلك.**\nكلّ فعلٍ ينتهي بـ**-ieren** (وأغلبها مستعارٌ من اللاتينية والفرنسية) يصنع Partizip II بحذف -en وإضافة -t، بلا ge-:\n· studieren ⟵ **studiert** · telefonieren ⟵ **telefoniert** · fotografieren ⟵ **fotografiert** · reparieren ⟵ **repariert** · passieren ⟵ **passiert**\n**Ich habe in Tunis studiert.** · **Wir haben lange telefoniert.**\n\n**والعلامة الصوتية التي تجمع العائلتين الأخيرتين:** كلّ فعلٍ **لا يقع النبر على مقطعه الأوّل** لا يأخذ ge-. قُل be-SU-chen · stu-DIE-ren · ver-STE-hen: النبر متأخّر في الثلاثة. وقارنها بـLER-nen · AUF-stehen: النبر أوّلاً فتأخذ ge-. فأذنك تُفتيك قبل أن تفتيك القائمة.",
      whyAr:
        "لماذا تمتنع ge- مع البوادئ غير المنفصلة وأفعال -ieren معاً، مع أنّهما عائلتان لا صلة بينهما ظاهرياً؟ الجواب في **النبر**.\n\nالبادئة ge- كانت في الأصل مقطعاً غير منبور يسبق الجذر المنبور: **ge**-LERNT. فالكلمة تبدأ خفيفةً ثمّ تثقل. أمّا be-SU-chen وstu-DIE-ren فالنبر فيهما متأخّرٌ أصلاً، فإضافة مقطعٍ خفيفٍ ثالثٍ في أوّلها (ge-be-SUCHT) تُنتج ثلاثة مقاطع خفيفة متتالية قبل النبر — وهو إيقاعٌ ترفضه الألمانية رفضاً. فالقاعدة إذن **صوتيّة** لا نحوية، ولذلك جمعت عائلتين لا تشتركان في شيءٍ آخر.\n\nوهذا يفسّر لماذا تصلح الأذن حَكَماً هنا أكثر من القائمة: القائمة تحفظها فتنساها، والإيقاع تسمعه فتحكم به. ولذلك يُنصح المتعلّم بأن ينطق الفعل بصوتٍ مسموع قبل أن يقرّر: إن سمع النبر على أوّله فـge-، وإلاّ فلا.\n\nوأمّا دخول ge- في وسط الفعل المنفصل فمنطقيٌّ تماماً: البادئة المنفصلة **ليست جزءاً من الفعل** بل كلمةٌ مستقلّة التصقت به (بدليل أنّها تنفصل عنه في المضارع وتذهب إلى آخر الجملة). فـge- تلتصق بالفعل الحقيقيّ، والبادئة تبقى خارجها. أي أنّ aufgestanden = auf + (ge + standen) — لا شذوذ فيها البتّة.",
      table: {
        title: "أين تذهب ge-؟",
        columns: ["العائلة", "العلامة", "المصدر ⟵ Partizip II", "النبر"],
        rows: [
          { label: "عاديّ", cells: ["ge- في الأوّل", "lernen ⟵ gelernt", "LER-nen"] },
          { label: "منفصل", cells: ["ge- في الوسط", "aufstehen ⟵ aufgestanden", "AUF-stehen"] },
          { label: "منفصل", cells: ["ge- في الوسط", "anrufen ⟵ angerufen", "AN-rufen"] },
          { label: "غير منفصل", cells: ["بلا ge-", "besuchen ⟵ besucht", "be-SU-chen"] },
          { label: "غير منفصل", cells: ["بلا ge-", "verstehen ⟵ verstanden", "ver-STE-hen"] },
          { label: "‎-ieren", cells: ["بلا ge-، والنهاية -t", "studieren ⟵ studiert", "stu-DIE-ren"] },
        ],
      },
      examples: [
        { de: "Ich bin heute um sechs Uhr aufgestanden.", ar: "نهضتُ اليوم في السادسة. (ge- في الوسط + sein)" },
        { de: "Hast du deine Mutter angerufen?", ar: "هل اتّصلتَ بأمّك؟ (anrufen ⟵ angerufen)" },
        { de: "Wir haben gestern eingekauft.", ar: "تسوّقنا أمس. (einkaufen ⟵ eingekauft)" },
        { de: "Ich habe meine Großmutter besucht.", ar: "زرتُ جدّتي. (be- ⟵ بلا ge-)" },
        { de: "Entschuldigung, ich habe das nicht verstanden.", ar: "عذراً، لم أفهم ذلك. (جملة إنقاذٍ في Hören وSprechen)" },
        { de: "Sie hat in Deutschland studiert.", ar: "درستْ في ألمانيا. (‎-ieren ⟵ studiert)" },
        { de: "Ich habe eine E-Mail bekommen.", ar: "وصلتني رسالة. (bekommen: الصورتان متطابقتان)" },
        { de: "Wir haben zwei Stunden telefoniert.", ar: "تحدّثنا هاتفياً ساعتين. (telefoniert)" },
      ],
      comparisonWithArabic:
        "العربية تُغيّر صيغة الفعل بالزوائد كذلك (فعل ⟵ أفعل ⟵ استفعل)، لكنّ زوائدها **تُغيّر المعنى** لا الزمن. أمّا ge- فزائدةٌ **زمنية خالصة** لا تمسّ المعنى — وهذا نمطٌ لا نظير له في العربية، فيصعب على المتعلّم أن يستشعر ضرورته ويميل إلى إسقاطه: يقول Ich habe lernt.\n\nلكنّ العربية تُعينه في بابٍ آخر: هي لغةٌ **حسّاسة للوزن والإيقاع** حساسيةً بالغة (وعليها بُني العَروض كلّه). والقاعدة الألمانية هنا إيقاعيّةٌ في جوهرها. فالعربيّ الذي تدرّب على سماع الوزن أقدرُ من غيره على استعمال الأذن حَكَماً — إن نُبّه إلى أنّ المسألة إيقاعٌ لا قائمةُ حفظ.\n\nوالخطأ العمليّ الأشيع: **gebesucht** و**gestudiert**. وسببه القياس السليم على قاعدةٍ سليمة، طُبّق حيث لا يُطبَّق. وعلاجه لا يكون بالحفظ بل بالنطق: من نطق be-SU-chen مرّةً واحدةً منتبهاً إلى النبر لم يعد يخطئ.",
      eselsbruecke:
        "انطق الفعل واسمع النبر: إن وقع على أوّل مقطع فـge- تدخل (LERnen ⟵ gelernt · AUFstehen ⟵ aufgestanden)، وإن تأخّر فلا ge- (beSUchen ⟵ besucht · stuDIEren ⟵ studiert).",
      commonMistakes: [
        {
          wrong: "Ich habe meine Oma gebesucht.",
          right: "Ich habe meine Oma besucht.",
          whyAr:
            "be- بادئةٌ غير منفصلة تمنع ge-. والعلامة الصوتية: النبر في be-SU-chen متأخّر، وثلاثةُ مقاطع خفيفة قبله إيقاعٌ ترفضه الألمانية.",
        },
        {
          wrong: "Ich habe in Tunis gestudiert.",
          right: "Ich habe in Tunis studiert.",
          whyAr:
            "كلّ فعلٍ بـ-ieren لا يأخذ ge-، ونهايته -t. والسبب واحد: النبر في stu-DIE-ren متأخّر، فلا موضع لمقطعٍ خفيفٍ إضافيّ في الأوّل.",
        },
        {
          wrong: "Ich habe geaufstanden.",
          right: "Ich bin aufgestanden.",
          whyAr:
            "خطآن: ge- موضعها وسط الفعل المنفصل لا أوّله، وaufstehen تغيّرُ حالٍ فمساعدها sein لا haben. والبادئة auf ليست جزءاً من الفعل أصلاً بل كلمةٌ ملتصقة.",
        },
        {
          wrong: "Hast du mich angeruft?",
          right: "Hast du mich angerufen?",
          whyAr:
            "rufen فعلٌ قويّ (u ⟵ u ونهاية -en)، والبادئة لا تُغيّر ذلك. فالانفصال يُحدّد موضع ge- فقط، أمّا القوّة والضعف فمن الفعل الأساسيّ.",
        },
        {
          wrong: "Ich habe das nicht verstehen.",
          right: "Ich habe das nicht verstanden.",
          whyAr:
            "وضعُ المصدر مكان Partizip II. والفارق حرفان (‑stehen ⟵ ‑standen) لكنّه فارقُ زمنٍ كامل: المصدر يلزم بعد الأفعال الناقصة، وPartizip II بعد haben/sein.",
        },
      ],
      relatedRuleComparison: {
        title: "البادئة المنفصلة في المضارع مقابل Perfekt",
        content:
          "تابِع البادئة auf في الحالين وسترى منطقاً واحداً:\n· **المضارع:** Ich **stehe** um sechs **auf**. ⟵ البادئة انفصلت وذهبت إلى الآخر.\n· **Perfekt:** Ich **bin** um sechs **aufgestanden**. ⟵ البادئة عادت والتصقت، وge- دخلت بينها وبين الجذر.\nوالقاعدة الجامعة: البادئة تلتصق كلّما كان الفعل **غير مصرَّف**. ولذلك تلتصق أيضاً بعد الأفعال الناقصة: Ich muss früh **aufstehen** — لا Ich muss früh stehen auf.\n\nفالمواضع ثلاثة: مصرَّفٌ ⟵ تنفصل · مصدرٌ ⟵ تلتصق · Partizip II ⟵ تلتصق وge- في وسطها. وثلاثتها وجهٌ واحد لقاعدةٍ واحدة، فلا تحفظها ثلاثاً.",
      },
    },
    {
      id: "t4",
      titleAr: "wollen وsollen — إتمام الأفعال الناقصة",
      titleDe: "Die Modalverben wollen und sollen",
      explanationAr:
        "عرفتَ في درس الهوايات **können** (يستطيع) و**möchte** (يودّ)، وفي درس السكن **müssen** (يجب) و**dürfen** (يُسمح). وبقي فعلان يُتمّان الستّة، وهما ضروريّان لأنّ من دونهما لا تستطيع التعبير عن **الإرادة** ولا نقل **أمر غيرك**.\n\n**أوّلاً — wollen = يريد (إرادةٌ حازمة).**\n| ich **will** · du **willst** · er/sie/es **will** |\n| wir **wollen** · ihr **wollt** · sie/Sie **wollen** |\n**Ich will Deutsch lernen.** (أريد أن أتعلّم الألمانية — عزمٌ لا مجرّد رغبة)\n\n**ثانياً — sollen = ينبغي (أمرٌ أو نصيحةٌ من غيرك).**\n| ich **soll** · du **sollst** · er/sie/es **soll** |\n| wir **sollen** · ihr **sollt** · sie/Sie **sollen** |\n**Der Arzt sagt, ich soll viel Wasser trinken.** (يقول الطبيب إنّ عليّ أن أشرب ماءً كثيراً)\n\n**ثالثاً — الشذوذان المشتركان بين كلّ الأفعال الناقصة:**\n· **ich وer متطابقان**، وكلاهما **بلا نهاية**: ich will · er will (لا er willt)\n· صوت الجذر يتغيّر في المفرد: wollen ⟵ **will** (ولا يتغيّر في sollen: soll)\n\n**رابعاً — الفرق الحاسم: will مقابل möchte.**\n· **Ich möchte einen Kaffee.** ⟵ مهذّبٌ، وهو ما تقوله في المقهى والمطعم والمتجر.\n· **Ich will einen Kaffee.** ⟵ حازمٌ يقارب الفظاظة في هذا السياق.\nوالقاعدة العملية: **möchte للطلب، wollen للخطّة والعزم**. Ich will nach Deutschland ziehen (أنوي الانتقال) — هنا wollen في محلّها تماماً.\n\n**وخامساً — فخُّ المتحدّث بالإنجليزية:** كلمة will الألمانية **لا تعني المستقبل**. Ich will gehen معناها „أريد أن أذهب“ لا „سأذهب“. والمستقبل يُصاغ بـwerden، وستدرسه في B1.",
      whyAr:
        "لماذا كلّ الأفعال الناقصة بلا نهاية في ich وer؟ لأنّها في الأصل الجرمانيّ لم تكن مضارعاً بل **ماضياً** لأفعالٍ أخرى (يسمّيها النحاة Präteritopräsentia — „ماضياتٌ صارت مضارعاً“). ونهايات الماضي في الجرمانية كانت صفراً في المتكلّم والغائب. فحين انزاح معناها إلى الحاضر حملت معها نهاياتها القديمة. فما تراه شذوذاً هو أثرُ حفريّةٍ لغوية عمرها ألفا سنة.\n\nولماذا صار الماضي مضارعاً أصلاً؟ لأنّ معنى „عرفتُ فأنا أعرف“ و„قدرتُ فأنا قادر“ يجمع الزمنين طبعاً: من اكتسب القدرة في الماضي فهو يملكها الآن. فانزاح المعنى وبقي الشكل.\n\nولماذا تُميّز الألمانية بين sollen وmüssen وكلاهما „يجب“؟ لأنّ الفرق في **مصدر الإلزام**: müssen ضرورةٌ من الواقع أو من داخلك (Ich muss arbeiten — وإلاّ فلا مال)، وsollen إلزامٌ **صادر عن شخصٍ آخر** (Ich soll Wasser trinken — قاله الطبيب). فsollen تنقل صوت غيرك، وهذا ما يجعلها الفعل الأساسيّ في النصيحة وفي نقل الأوامر.",
      table: {
        title: "الأفعال الناقصة الستّة — اكتملت اليوم",
        columns: ["الفعل", "المعنى", "ich / er", "المثال"],
        rows: [
          { label: "können", cells: ["يستطيع", "kann", "Ich kann schwimmen."] },
          { label: "möchte", cells: ["يودّ (مهذّب)", "möchte", "Ich möchte einen Kaffee."] },
          { label: "müssen", cells: ["يجب (ضرورة)", "muss", "Ich muss arbeiten."] },
          { label: "dürfen", cells: ["يُسمح له", "darf", "Hier darf man nicht rauchen."] },
          { label: "wollen", cells: ["يريد (عزم)", "will", "Ich will Deutsch lernen."] },
          { label: "sollen", cells: ["ينبغي (أمر الغير)", "soll", "Ich soll Wasser trinken."] },
        ],
      },
      examples: [
        { de: "Ich will nächstes Jahr nach Deutschland ziehen.", ar: "أنوي الانتقال إلى ألمانيا العام القادم. (عزم ⟵ wollen)" },
        { de: "Was willst du am Wochenende machen?", ar: "ماذا تريد أن تفعل في العطلة؟ (willst بنهاية -st)" },
        { de: "Wir wollen heute Abend ins Kino gehen.", ar: "نريد الذهاب إلى السينما هذا المساء." },
        { de: "Der Lehrer sagt, wir sollen die Übung machen.", ar: "يقول المعلّم إنّ علينا عمل التمرين. (نقل أمر الغير ⟵ sollen)" },
        { de: "Soll ich das Fenster öffnen?", ar: "هل أفتح النافذة؟ (عرض المساعدة — استعمالٌ أساسيّ لـsollen)" },
        { de: "Du sollst nicht so viel Zucker essen.", ar: "لا ينبغي أن تأكل سكّراً كثيراً." },
        { de: "Ich möchte bitte ein Wasser. – nicht: Ich will ein Wasser.", ar: "أودّ ماءً من فضلك — لا: أريد ماءً. (الفرق في الأدب لا في المعنى)" },
        { de: "Ich will gehen. (= أريد الذهاب, nicht: سأذهب)", ar: "will ليست المستقبل الإنجليزيّ — فخٌّ يقع فيه من يعرف الإنجليزية." },
      ],
      comparisonWithArabic:
        "العربية تصوغ هذا الباب بفعلٍ تامّ يتلوه مصدرٌ مؤوّل: „أريد أن أتعلّم“، „ينبغي أن أشرب“. والألمانية تُشبهها في المبدأ (ناقصٌ + مصدر) لكنّها تختلف في موضعين: لا أداة تقابل „أن“، والمصدر يذهب إلى **آخر الجملة**. فـ„أريد أن أتعلّم الألمانية“ تصير Ich **will** Deutsch **lernen** — بلا „أن“، والمصدر بعد المفعول لا قبله.\n\nوالتمييز بين müssen وsollen له نظيرٌ عربيّ لطيف: „يجب عليّ“ مقابل „قيل لي أن“. فالثانية تحمل صوت غيرك، وهي sollen بعينها. لكنّ العربية لا تُلزم بالتمييز فيميل المتعلّم إلى استعمال müssen في كلّ موضع، فيقول Ich muss Wasser trinken حيث كان يريد نقل نصيحة الطبيب — والمعنى ينقلب من „أُوصيتُ“ إلى „مضطرّ“.\n\nوأمّا wollen فخطرها عند من يعرف الإنجليزية أشدّ من خطرها عند من لا يعرفها: تشابه will الألمانية وwill الإنجليزية تشابهٌ خادع تامّ.",
      eselsbruecke:
        "müssen ضرورةٌ من الواقع، وsollen صوتُ شخصٍ آخر (الطبيب، المعلّم، الأمّ). وwollen عزمٌ، وmöchte أدب. وكلّها بلا نهاية في ich وer.",
      commonMistakes: [
        {
          wrong: "Er willt nach Berlin fahren.",
          right: "Er will nach Berlin fahren.",
          whyAr:
            "الأفعال الناقصة بلا نهاية في er، تماماً كما في ich. والصيغتان متطابقتان: ich will · er will. وهذا شذوذٌ عامّ في الستّة كلّها.",
        },
        {
          wrong: "Ich will einen Kaffee, bitte.",
          right: "Ich möchte einen Kaffee, bitte.",
          whyAr:
            "wollen حازمة تقارب الفظاظة في طلبٍ من نادلٍ أو بائع. وmöchte هي صيغة الطلب المهذّبة، وهي المطلوبة في Sprechen Teil 2 وفي كلّ موقف خدمة.",
        },
        {
          wrong: "Ich will lernen Deutsch.",
          right: "Ich will Deutsch lernen.",
          whyAr:
            "المصدر يقع في آخر الجملة بعد الفعل الناقص، لا مباشرةً بعده. وهي الحاضنة الفعلية نفسها التي في Perfekt — قالبٌ واحد بمِلْأين.",
        },
        {
          wrong: "Ich will morgen nach Berlin fahren. (بمعنى: سأسافر غداً)",
          right: "Ich fahre morgen nach Berlin.",
          whyAr:
            "will لا تصنع المستقبل في الألمانية بل تعني الإرادة. والمستقبل القريب يُعبَّر عنه بالمضارع + ظرف زمن، وهو الأسلوب الغالب في الكلام.",
        },
        {
          wrong: "Der Arzt sagt, ich muss viel Wasser trinken.",
          right: "Der Arzt sagt, ich soll viel Wasser trinken.",
          whyAr:
            "مصدر الإلزام هنا شخصٌ آخر (الطبيب) فيلزم sollen. وmüssen تجعلها ضرورةً واقعية من داخلك، فينقلب المعنى من نقل نصيحةٍ إلى إخبارٍ عن اضطرار.",
        },
      ],
      relatedRuleComparison: {
        title: "القوالب الثلاثة التي تُغلق الجملة",
        content:
          "اجمع اليوم كلّ ما يُغلق الجملة الألمانية:\n· **ناقصٌ + مصدر:** Ich **will** Deutsch **lernen**.\n· **مساعدٌ + Partizip II:** Ich **habe** Deutsch **gelernt**.\n· **فعلٌ منفصل:** Ich **stehe** früh **auf**.\nثلاثتها تفتح بمصرَّفٍ في المركز الثاني وتُغلق بغير مصرَّفٍ في الآخر. وهي البنية التي تُميّز الألمانية عن العربية والإنجليزية معاً.\n\nوتستطيع اليوم أن تجمعها: **Ich habe gestern früh aufstehen müssen** — أو الأشيع في الكلام: **Ich musste gestern früh aufstehen.** والصيغة الأولى موجودة لكنّها ثقيلة، ولن تحتاجها في A1. المهمّ أن تدرك أنّ ما تعلّمته اليوم ليس قائمةً بل **نظاماً** يتركّب.",
      },
    },
  ],

  reading: {
    "id": "read-a1-14",
    "titleDe": "Ein Wochenende in Berlin",
    "titleAr": "عطلة أسبوع في برلين",
    "textType": "email",
    "paragraphs": [
      "Liebe Salma,\n\nwie geht es dir? Mir geht es sehr gut! Ich habe dir lange nicht geschrieben, denn ich hatte viel Arbeit. Aber jetzt muss ich dir von meinem Wochenende erzählen. Ich bin nämlich zum ersten Mal in Berlin gewesen!",
      "Am Freitag bin ich um fünf Uhr aufgestanden. Das war sehr früh! Ich habe schnell gefrühstückt und bin dann mit dem Zug nach Berlin gefahren. Die Fahrt hat vier Stunden gedauert. Im Zug habe ich ein Buch gelesen und viel aus dem Fenster geschaut.",
      "In Berlin habe ich meine Freundin Nadia getroffen. Sie hat drei Jahre in Deutschland studiert und spricht sehr gut Deutsch. Wir sind zusammen durch die Stadt gelaufen und haben das Brandenburger Tor fotografiert. Danach haben wir in einem kleinen Restaurant gegessen. Ich habe eine Currywurst probiert — sie hat mir sehr gut geschmeckt!",
      "Am Samstag hat es leider den ganzen Tag geregnet. Wir sind deshalb nicht spazieren gegangen, sondern ins Museum. Dort habe ich viel über die Geschichte der Stadt gelernt. Am Abend habe ich mit meiner Familie telefoniert, und danach haben Nadia und ich Tee getrunken. Um Mitternacht bin ich endlich eingeschlafen.",
      "Am Sonntag bin ich wieder nach Hause gefahren. Ich bin sehr müde gewesen, aber auch sehr glücklich. Berlin hat mir wirklich gefallen.",
      "Und du? Was hast du am Wochenende gemacht? Bist du auch gereist? Schreib mir bitte bald!\n\nViele Grüße\nAmine"
    ],
    "paragraphsAr": [
      "عزيزتي سلمى،\n\nكيف حالك؟ أنا بخير جداً! لم أكتب لك منذ مدّة طويلة لأنّه كان لديّ عملٌ كثير. لكن عليّ الآن أن أحدّثك عن عطلة أسبوعي. فقد كنتُ في برلين لأوّل مرّة!",
      "يوم الجمعة نهضتُ في الساعة الخامسة. كان ذلك مبكّراً جداً! تناولتُ الفطور بسرعة ثمّ سافرتُ بالقطار إلى برلين. استغرقت الرحلة أربع ساعات. في القطار قرأتُ كتاباً ونظرتُ كثيراً من النافذة.",
      "في برلين قابلتُ صديقتي نادية. درستْ ثلاث سنوات في ألمانيا وتتكلّم الألمانية جيداً جداً. مشينا معاً في المدينة وصوّرنا بوّابة براندنبورغ. بعد ذلك أكلنا في مطعمٍ صغير. جرّبتُ الكاري فورست — وقد أعجبني كثيراً!",
      "يوم السبت أمطرت للأسف طوال النهار. فلم نذهب للتنزّه بل ذهبنا إلى المتحف. هناك تعلّمتُ كثيراً عن تاريخ المدينة. في المساء تحدّثتُ هاتفياً مع عائلتي، وبعد ذلك شربنا أنا ونادية الشاي. في منتصف الليل غفوتُ أخيراً.",
      "يوم الأحد عدتُ إلى البيت. كنتُ متعباً جداً لكنّي كنتُ سعيداً جداً أيضاً. أعجبتني برلين حقاً.",
      "وأنتِ؟ ماذا فعلتِ في عطلة الأسبوع؟ هل سافرتِ أيضاً؟ اكتبي لي قريباً من فضلك!\n\nتحيّاتي الكثيرة\nأمين"
    ],
    "glossary": [
      {
        "de": "erzählen (hat erzählt)",
        "ar": "يحكي، يروي",
        "noteAr": "غير منفصل بـer- ⟵ بلا ge-"
      },
      {
        "de": "zum ersten Mal",
        "ar": "لأوّل مرّة"
      },
      {
        "de": "die Fahrt",
        "ar": "الرحلة، السفرة"
      },
      {
        "de": "dauern (hat gedauert)",
        "ar": "يستغرق (من الوقت)",
        "noteAr": "Die Fahrt hat vier Stunden gedauert."
      },
      {
        "de": "getroffen (treffen)",
        "ar": "قابَل، التقى",
        "noteAr": "فعلٌ قويّ: treffen ⟵ getroffen (e ⟵ o)"
      },
      {
        "de": "probieren (hat probiert)",
        "ar": "يجرّب، يذوق",
        "noteAr": "‎-ieren ⟵ بلا ge-"
      },
      {
        "de": "schmecken (hat geschmeckt)",
        "ar": "يكون طعمه (طيّباً)",
        "noteAr": "Es hat mir gut geschmeckt = أعجبني طعمه"
      },
      {
        "de": "deshalb",
        "ar": "لذلك، لهذا السبب"
      },
      {
        "de": "die Geschichte",
        "ar": "التاريخ / القصّة"
      },
      {
        "de": "eingeschlafen (einschlafen)",
        "ar": "غفا، استغرق في النوم",
        "noteAr": "تغيّرُ حال ⟵ sein، وge- في وسط الفعل المنفصل"
      },
      {
        "de": "gefallen (hat gefallen)",
        "ar": "يعجب",
        "noteAr": "Berlin hat mir gefallen = أعجبتني برلين"
      },
      {
        "de": "reisen (ist gereist)",
        "ar": "يسافر",
        "noteAr": "حركة ⟵ sein"
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "paragraph": 2,
        "questionDe": "Wie ist Amine nach Berlin gefahren?",
        "instructionAr": "اقرأ الفقرة الثانية واختر الإجابة الصحيحة",
        "options": [
          "Mit dem Zug",
          "Mit dem Auto",
          "Mit dem Flugzeug",
          "Mit dem Bus"
        ],
        "correctIndex": 0,
        "explanation": "في الفقرة الثانية: «bin dann mit dem Zug nach Berlin gefahren» — بالقطار.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "paragraph": 3,
        "questionDe": "Was haben Amine und Nadia am Freitag gemacht?",
        "instructionAr": "اقرأ الفقرة الثالثة واختر الإجابة الصحيحة",
        "options": [
          "Sie sind durch die Stadt gelaufen und haben gegessen",
          "Sie sind ins Museum gegangen",
          "Sie sind zu Hause geblieben",
          "Sie haben nur telefoniert"
        ],
        "correctIndex": 0,
        "explanation": "«Wir sind zusammen durch die Stadt gelaufen … haben wir in einem kleinen Restaurant gegessen». والمتحف كان يوم السبت.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "paragraph": 4,
        "questionDe": "Warum sind sie am Samstag ins Museum gegangen?",
        "instructionAr": "اقرأ الفقرة الرابعة: ما السبب؟",
        "options": [
          "Weil es geregnet hat",
          "Weil das Museum billig war",
          "Weil Nadia dort gearbeitet hat",
          "Weil sie müde waren"
        ],
        "correctIndex": 0,
        "explanation": "«Am Samstag hat es leider den ganzen Tag geregnet. Wir sind deshalb … ins Museum.» وdeshalb تدلّ على النتيجة.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "questionDe": "Welches Hilfsverb steht bei „aufstehen“ im Text?",
        "instructionAr": "انتبه إلى الفعل المساعد: أيّ مساعدٍ استُعمل مع aufstehen في النصّ؟",
        "options": [
          "sein — ich bin aufgestanden",
          "haben — ich habe aufgestanden",
          "werden — ich werde aufgestanden",
          "beides ist möglich"
        ],
        "correctIndex": 0,
        "explanation": "aufstehen تغيّرُ حالٍ (من نومٍ إلى يقظة) فمساعدها sein: «bin ich um fünf Uhr aufgestanden».",
        "errorType": "grammar"
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "questionDe": "Warum heißt es „probiert“ und nicht „geprobiert“?",
        "instructionAr": "لماذا probiert بلا ge-؟",
        "options": [
          "Weil das Verb auf -ieren endet",
          "Weil es ein starkes Verb ist",
          "Weil es trennbar ist",
          "Weil es mit sein steht"
        ],
        "correctIndex": 0,
        "explanation": "كلّ فعلٍ بـ-ieren لا يأخذ ge-، والنبر فيه متأخّر: pro-BIE-ren.",
        "errorType": "grammar"
      },
      {
        "id": "rq6",
        "type": "multiple-choice",
        "paragraph": 5,
        "questionDe": "Wie hat Amine sich am Sonntag gefühlt?",
        "instructionAr": "اقرأ الفقرة الخامسة: كيف كان شعوره؟",
        "options": [
          "Müde, aber glücklich",
          "Nur müde",
          "Traurig",
          "Krank"
        ],
        "correctIndex": 0,
        "explanation": "«Ich bin sehr müde gewesen, aber auch sehr glücklich.»",
        "errorType": "vocabulary"
      }
    ],
    "redemittel": [
      {
        "de": "Was hast du am Wochenende gemacht?",
        "ar": "ماذا فعلتَ في عطلة الأسبوع؟ — سؤال Sprechen الأكثر تكراراً"
      },
      {
        "de": "Ich bin zum ersten Mal in … gewesen.",
        "ar": "كنتُ في … لأوّل مرّة"
      },
      {
        "de": "Die Fahrt hat … Stunden gedauert.",
        "ar": "استغرقت الرحلة … ساعات"
      },
      {
        "de": "Es hat mir sehr gut gefallen.",
        "ar": "أعجبني كثيراً — جملة ختامٍ ممتازة لأيّ حكاية"
      },
      {
        "de": "Leider hat es den ganzen Tag geregnet.",
        "ar": "للأسف أمطرت طوال النهار"
      },
      {
        "de": "Und du? Was hast du gemacht?",
        "ar": "وأنت؟ ماذا فعلتَ؟ — تُعيد الكلمة لمحدّثك"
      }
    ],
    "discussionAr": "احكِ عطلة أسبوعك الماضية في خمس جملٍ على الأقلّ بصيغة Perfekt، واحرص على أن تحوي جملتان منها المساعد sein وثلاث المساعد haben. ثمّ راجع ما كتبتَ وسل نفسك عن كلّ فعل: هل له مفعولٌ به؟ فإن كان فالمساعد haben قطعاً."
  },

  listening: {
    items: [
      {
        id: "ls-a1-14-1",
        title: "رسالة صوتية: كيف كانت العطلة؟",
        lines: [
          { speaker: "Nadia", de: "Hallo Amine! Wie war dein Wochenende? Was hast du gemacht?", ar: "أهلاً أمين! كيف كانت عطلتك؟ ماذا فعلتَ؟" },
          { speaker: "Amine", de: "Hallo Nadia! Am Samstag bin ich sehr früh aufgestanden.", ar: "أهلاً نادية! يوم السبت نهضتُ مبكّراً جداً." },
          { speaker: "Amine", de: "Ich habe für die Prüfung gelernt und dann habe ich meine Familie angerufen.", ar: "درستُ للامتحان ثمّ اتّصلتُ بعائلتي." },
          { speaker: "Amine", de: "Am Sonntag bin ich mit dem Fahrrad zum See gefahren. Das Wetter war super!", ar: "يوم الأحد ذهبتُ بالدرّاجة إلى البحيرة. كان الطقس رائعاً!" },
          { speaker: "Nadia", de: "Schön! Ich bin leider zu Hause geblieben. Ich war krank.", ar: "جميل! أنا للأسف بقيتُ في البيت. كنتُ مريضة." },
        ],
      },
    ],
    questions: [
      {
        type: "multiple-choice",
        id: "lsq-a1-14-1",
        instructionAr: "استمع واختر الإجابة الصحيحة",
        itemId: "ls-a1-14-1",
        questionDe: "Was hat Amine am Samstag gemacht?",
        questionAr: "ماذا فعل أمين يوم السبت؟",
        options: ["Er hat gelernt und telefoniert", "Er ist zum See gefahren", "Er ist zu Hause geblieben"],
        correctIndex: 0,
        errorType: "grammar",
        explanation: "يوم السبت: «habe für die Prüfung gelernt» و«habe meine Familie angerufen». أمّا البحيرة فكانت يوم الأحد.",
      },
      {
        type: "multiple-choice",
        id: "lsq-a1-14-2",
        instructionAr: "استمع وانتبه إلى الفعل المساعد",
        itemId: "ls-a1-14-1",
        questionDe: "Welches Hilfsverb benutzt Nadia bei „bleiben“?",
        questionAr: "أيّ فعلٍ مساعد استعملته نادية مع bleiben؟",
        options: ["sein — ich bin geblieben", "haben — ich habe geblieben", "werden — ich werde geblieben"],
        correctIndex: 0,
        errorType: "grammar",
        explanation: "bleiben من الأفعال الثلاثة المحفوظة التي تأخذ sein: sein · bleiben · passieren.",
      },
      {
        type: "multiple-choice",
        id: "lsq-a1-14-3",
        instructionAr: "استمع واختر الإجابة الصحيحة",
        itemId: "ls-a1-14-1",
        questionDe: "Wie ist Amine am Sonntag zum See gekommen?",
        questionAr: "كيف وصل أمين إلى البحيرة يوم الأحد؟",
        options: ["Mit dem Fahrrad", "Mit dem Auto", "Zu Fuß"],
        correctIndex: 0,
        errorType: "vocabulary",
        explanation: "«bin ich mit dem Fahrrad zum See gefahren» — بالدرّاجة، والمساعد sein لأنّها حركة.",
      },
    ],
  },

  pronunciation: {
    id: "pron-a1-14",
    title: "نطق Partizip II — البادئة ge- والنهايتان -t و-en",
    items: [
      { de: "gelernt", ar: "تعلَّم", note: "غـِلـِرنت — ge غير منبورة والنبر على LERNT" },
      { de: "gemacht", ar: "فعَل", note: "غـِماخت — ch هنا [x] خشنة بعد a" },
      { de: "gesprochen", ar: "تكلَّم", note: "غـِشپروخِن — sp في أوّل المقطع تُنطق «شپ»" },
      { de: "gefahren", ar: "سافر", note: "غـِفارِن — النهاية -en تُبتلع فتصير [ən]" },
      { de: "aufgestanden", ar: "نهض", note: "أَوفـْغِشتاندِن — النبر على AUF، وge في الوسط بلا نبر" },
      { de: "besucht", ar: "زار", note: "بـِزوخت — بلا ge، والنبر على SUCHT" },
      { de: "studiert", ar: "درس", note: "شتوديرت — st في الأوّل «شت»، والنبر على DIERT" },
      { de: "gewesen", ar: "كان", note: "غـِڤيزِن — w تُنطق «ڤ» وs بين حرفَي علّة تُنطق «ز»" },
    ],
    tip: "قاعدة النبر تحكم هذا الباب كلّه: ge- لا تُنبر أبداً، فهي مقطعٌ خفيف يمهّد للجذر المنبور. وإن وجدتَ الفعل منبوراً في غير أوّله (be-SU-chen, stu-DIE-ren) فلا ge- فيه أصلاً.",
  },

  writing: [
    {
      id: "wr-a1-14-1",
      type: "transformation",
      instructionAr: "حوّل الجملة من المضارع إلى Perfekt",
      prompt: "Ich lerne Deutsch. →",
      acceptedAnswers: ["Ich habe Deutsch gelernt.", "Ich habe Deutsch gelernt"],
      sampleAnswer: "Ich habe Deutsch gelernt.",
      hint: "lernen فعلٌ ضعيف له مفعول (Deutsch) ⟵ haben + ge...t، والـPartizip في آخر الجملة.",
      explanation: "haben في المركز الثاني، gelernt في الآخر، والمفعول بينهما.",
      errorType: "grammar",
    },
    {
      id: "wr-a1-14-2",
      type: "transformation",
      instructionAr: "حوّل الجملة من المضارع إلى Perfekt (انتبه إلى المساعد)",
      prompt: "Wir fahren nach Berlin. →",
      acceptedAnswers: ["Wir sind nach Berlin gefahren.", "Wir sind nach Berlin gefahren"],
      sampleAnswer: "Wir sind nach Berlin gefahren.",
      hint: "حركةٌ بين نقطتين بلا مفعول ⟵ sein.",
      explanation: "fahren هنا حركة ⟵ sind، وgefahren في آخر الجملة.",
      errorType: "grammar",
    },
    {
      id: "wr-a1-14-3",
      type: "transformation",
      instructionAr: "اكتب أربع جملٍ عن يومك أمس بصيغة Perfekt: جملتان بـhaben وجملتان بـsein",
      prompt: "Was hast du gestern gemacht? Schreiben Sie vier Sätze im Perfekt.",
      acceptedAnswers: [
        "Ich bin um sieben Uhr aufgestanden. Ich habe gefrühstückt. Ich bin zur Arbeit gefahren. Ich habe am Abend ferngesehen.",
      ],
      sampleAnswer: "Ich bin um sieben Uhr aufgestanden. Ich habe gefrühstückt. Ich bin zur Arbeit gefahren. Ich habe am Abend ferngesehen.",
      hint: "استعمل aufstehen وfahren مع sein، وfrühstücken وfernsehen مع haben.",
      explanation: "النموذج يجمع العائلات: منفصلٌ بـsein (aufgestanden)، ضعيفٌ بـhaben (gefrühstückt)، حركةٌ بـsein (gefahren)، ومنفصلٌ بـhaben (ferngesehen).",
      errorType: "grammar",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل الضعيف",
      instructionDe: "Ergänzen Sie das Partizip II.",
      template: "Ich habe gestern Deutsch ___. (lernen)",
      blanks: [{ correct: "gelernt", options: ["gelernt", "lernte", "gelernen", "lernt"], errorType: "grammar" }],
      explanation: "lernen ضعيف: ge + lern + t = gelernt.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل القويّ",
      template: "Wir haben Kaffee ___. (trinken)",
      blanks: [{ correct: "getrunken", options: ["getrunken", "getrinkt", "trinkte", "getrunkt"], errorType: "grammar" }],
      explanation: "trinken قويّ: يتغيّر صوت الجذر (i ⟵ u) والنهاية -en ⟵ getrunken.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ مساعد يناسب؟",
      questionDe: "Ich ___ gestern nach Hamburg gefahren.",
      options: ["bin", "habe", "war", "werde"],
      correctIndex: 0,
      explanation: "fahren هنا حركةٌ بين نقطتين بلا مفعول ⟵ sein.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ مساعد يناسب؟",
      questionDe: "Sie ___ einen langen Brief geschrieben.",
      options: ["hat", "ist", "war", "wird"],
      correctIndex: 0,
      explanation: "einen langen Brief مفعولٌ به ⟵ haben قطعاً. اختبار المفعول يحسم المسألة.",
      errorType: "grammar",
    },
    {
      id: "e5",
      type: "word-ordering",
      instructionAr: "رتّب الجملة: انتبه إلى موضع Partizip II",
      tokens: ["Ich", "habe", "gestern", "einen", "Film", "gesehen"],
      correctSentence: "Ich habe gestern einen Film gesehen",
      explanation: "المساعد habe في المركز الثاني، وgesehen في آخر الجملة، وما بينهما ظرفٌ ومفعول.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich habe gelernt Deutsch.",
      wrongWord: "gelernt Deutsch",
      correctWord: "Deutsch gelernt",
      options: ["Deutsch gelernt", "gelernt Deutsch", "Deutsch lernte", "lernte Deutsch"],
      explanation: "Partizip II يُغلق الجملة، فالمفعول Deutsch يسبقه.",
      errorType: "word-order",
    },
    {
      id: "e7",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل المنفصل",
      template: "Ich bin um sechs Uhr ___. (aufstehen)",
      blanks: [{ correct: "aufgestanden", options: ["aufgestanden", "geaufstanden", "aufstanden", "aufgestehen"], errorType: "grammar" }],
      explanation: "الفعل المنفصل: ge- تدخل بين البادئة والجذر ⟵ auf-ge-standen.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل غير المنفصل",
      template: "Wir haben meine Oma ___. (besuchen)",
      blanks: [{ correct: "besucht", options: ["besucht", "gebesucht", "besuchen", "besuchte"], errorType: "grammar" }],
      explanation: "be- بادئةٌ غير منفصلة تمنع ge- ⟵ besucht.",
      errorType: "grammar",
    },
    {
      id: "e9",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II لفعل -ieren",
      template: "Sie hat in Berlin ___. (studieren)",
      blanks: [{ correct: "studiert", options: ["studiert", "gestudiert", "studierte", "gestudier"], errorType: "grammar" }],
      explanation: "أفعال -ieren بلا ge- والنهاية -t ⟵ studiert.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "matching",
      instructionAr: "طابق كلّ مصدرٍ بـPartizip II الخاصّ به",
      pairs: [
        { left: "machen", right: "gemacht" },
        { left: "essen", right: "gegessen" },
        { left: "anrufen", right: "angerufen" },
        { left: "verstehen", right: "verstanden" },
        { left: "telefonieren", right: "telefoniert" },
        { left: "bleiben", right: "geblieben" },
      ],
      explanation: "لاحظ العائلات: ضعيفٌ (gemacht) · قويّ (gegessen) · منفصل (angerufen) · غير منفصل (verstanden) · ‎-ieren (telefoniert).",
      errorType: "grammar",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "أيّ جملةٍ صحيحة تماماً؟",
      questionDe: "Welcher Satz ist korrekt?",
      options: [
        "Wir sind zu Hause geblieben.",
        "Wir haben zu Hause geblieben.",
        "Wir sind zu Hause gebleibt.",
        "Wir haben zu Hause bleiben.",
      ],
      correctIndex: 0,
      explanation: "bleiben من الثلاثة المحفوظة ⟵ sein، وPartizip II لها geblieben (قويّة).",
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich habe nach Berlin gefahren.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "habe", "war", "wurde"],
      explanation: "لا مفعول في الجملة والفعل حركةٌ بين نقطتين ⟵ sein.",
      errorType: "grammar",
    },
    {
      id: "e13",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe: "Am Freitag bin ich früh aufgestanden. Ich habe gefrühstückt und bin dann zur Arbeit gefahren. Am Abend habe ich ferngesehen und bin um elf Uhr eingeschlafen.",
      statements: [
        { id: "s1", de: "Die Person ist früh aufgestanden.", ar: "نهض الشخص مبكّراً.", isTrue: true, whyAr: "النصّ يقول: «Am Freitag bin ich früh aufgestanden»." },
        { id: "s2", de: "Die Person hat nicht gefrühstückt.", ar: "لم يتناول الشخص الفطور.", isTrue: false, whyAr: "بل تناوله: «Ich habe gefrühstückt»." },
        { id: "s3", de: "Alle Verben im Text stehen mit haben.", ar: "كلّ أفعال النصّ مع haben.", isTrue: false, whyAr: "النصّ يخلط المساعدين: aufgestanden وgefahren وeingeschlafen مع sein." },
        { id: "s4", de: "„eingeschlafen“ steht mit sein.", ar: "الفعل eingeschlafen يأخذ sein.", isTrue: true, whyAr: "einschlafen تغيّرُ حالٍ (من يقظةٍ إلى نوم) فمساعدها sein." },
      ],
      explanation: "النصّ يخلط المساعدين: aufgestanden وgefahren وeingeschlafen مع sein، وgefrühstückt وferngesehen مع haben.",
      errorType: "grammar",
    },
    {
      id: "e14",
      type: "transformation",
      instructionAr: "حوّل إلى Perfekt",
      prompt: "Er ruft seine Mutter an. →",
      acceptedAnswers: ["Er hat seine Mutter angerufen.", "Er hat seine Mutter angerufen"],
      sampleAnswer: "Er hat seine Mutter angerufen.",
      explanation: "seine Mutter مفعولٌ به ⟵ haben. وanrufen منفصل ⟵ an-ge-rufen، وrufen قويّ فالنهاية -en.",
      errorType: "grammar",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل تصريف wollen",
      template: "Ich ___ Deutsch lernen. · Er ___ nach Berlin fahren. · Wir ___ ins Kino gehen.",
      blanks: [
        { correct: "will", options: ["will", "willst", "wollen", "wollt"], errorType: "conjugation" },
        { correct: "will", options: ["will", "willt", "wollt", "wollen"], errorType: "conjugation" },
        { correct: "wollen", options: ["wollen", "will", "wollt", "willst"], errorType: "conjugation" },
      ],
      explanation: "ich وer متطابقان بلا نهاية: will. وwir wollen بنهاية -en.",
      errorType: "conjugation",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ ناقصٍ يناسب السياق؟",
      questionDe: "Der Arzt sagt, ich ___ viel Wasser trinken.",
      options: ["soll", "will", "kann", "darf"],
      correctIndex: 0,
      explanation: "الإلزام صادرٌ عن شخصٍ آخر (الطبيب) ⟵ sollen. وmüssen تجعلها ضرورةً داخلية فينقلب المعنى.",
      errorType: "vocabulary",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "أنت في مقهى. ما الصيغة المهذّبة؟",
      questionDe: "Im Café: Was sagen Sie?",
      options: [
        "Ich möchte bitte einen Kaffee.",
        "Ich will einen Kaffee.",
        "Ich soll einen Kaffee.",
        "Ich muss einen Kaffee.",
      ],
      correctIndex: 0,
      explanation: "möchte هي صيغة الطلب المهذّبة. وwollen حازمة تقارب الفظاظة في موقف خدمة.",
      errorType: "vocabulary",
    },
    {
      id: "e18",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Er willt morgen nach Köln fahren.",
      wrongWord: "willt",
      correctWord: "will",
      options: ["will", "willt", "wollt", "wollen"],
      explanation: "الأفعال الناقصة بلا نهاية في er: ich will · er will.",
      errorType: "conjugation",
    },
    {
      id: "e19",
      type: "word-ordering",
      instructionAr: "رتّب الجملة: الفعل الناقص والمصدر",
      tokens: ["Wir", "wollen", "heute", "Abend", "ins", "Kino", "gehen"],
      correctSentence: "Wir wollen heute Abend ins Kino gehen",
      explanation: "الناقص في المركز الثاني والمصدر في الآخر — الحاضنة الفعلية نفسها التي في Perfekt.",
      errorType: "word-order",
    },
    {
      id: "e20",
      type: "multiple-choice",
      instructionAr: "لماذا لا نقول gestudiert؟",
      questionDe: "Warum heißt es „studiert“ und nicht „gestudiert“?",
      options: [
        "Weil Verben auf -ieren kein ge- bekommen",
        "Weil studieren ein starkes Verb ist",
        "Weil studieren trennbar ist",
        "Weil studieren mit sein steht",
      ],
      correctIndex: 0,
      explanation: "كلّ فعلٍ بـ-ieren بلا ge-، والسبب صوتيّ: النبر في stu-DIE-ren متأخّر.",
      errorType: "grammar",
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr: "أكمل المساعد الصحيح في الجملتين",
      template: "Ich ___ um sieben aufgestanden und ___ dann gefrühstückt.",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "war", "werde"], errorType: "grammar" },
        { correct: "habe", options: ["habe", "bin", "war", "wurde"], errorType: "grammar" },
      ],
      explanation: "المساعدان يختلفان في الجملة الواحدة: aufstehen تغيّرُ حالٍ ⟵ sein، وfrühstücken نشاطٌ ⟵ haben.",
      errorType: "grammar",
    },
    {
      id: "e22",
      type: "transformation",
      instructionAr: "أجب عن السؤال بجملةٍ كاملة في Perfekt",
      prompt: "Was hast du am Wochenende gemacht? (ins Museum gehen)",
      acceptedAnswers: [
        "Ich bin ins Museum gegangen.",
        "Ich bin ins Museum gegangen",
      ],
      sampleAnswer: "Ich bin ins Museum gegangen.",
      explanation: "gehen حركةٌ بين نقطتين ⟵ sein، وPartizip II لها gegangen (قويّة).",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "multiple-choice",
      instructionAr: "أيّ جملةٍ تعني «سأسافر غداً» فعلاً؟",
      questionDe: "Welcher Satz bedeutet „Ich reise morgen ab“ (Zukunft)?",
      options: [
        "Ich fahre morgen nach Berlin.",
        "Ich will morgen nach Berlin fahren.",
        "Ich bin morgen nach Berlin gefahren.",
        "Ich soll morgen nach Berlin fahren.",
      ],
      correctIndex: 0,
      explanation: "will لا تصنع المستقبل في الألمانية بل تعني الإرادة. والمستقبل القريب يُعبَّر عنه بالمضارع + ظرف زمن.",
      errorType: "vocabulary",
    },
    {
      id: "e24",
      type: "matching",
      instructionAr: "طابق كلّ فعلٍ بمساعده الصحيح",
      pairs: [
        { left: "ein Buch lesen", right: "haben" },
        { left: "nach Berlin fliegen", right: "sein" },
        { left: "zu Hause bleiben", right: "sein" },
        { left: "acht Stunden schlafen", right: "haben" },
        { left: "früh einschlafen", right: "sein" },
      ],
      explanation: "اختبار المفعول: ein Buch وacht Stunden ⟵ haben. والحركةُ وتغيّرُ الحال والمحفوظات ⟵ sein.",
      errorType: "grammar",
    },
    {
      id: "e25",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe das nicht verstanden.",
      wrongWord: "verstanden",
      correctWord: "verstanden",
      isAlreadyCorrect: true,
      options: ["verstanden", "geverstanden", "verstehen", "verstandet"],
      explanation: "verstehen غير منفصل ⟵ بلا ge-، وله مفعول (das) ⟵ haben. والجملة سليمة.",
      errorType: "grammar",
    },
    {
      id: "e26",
      type: "word-ordering",
      instructionAr: "رتّب السؤال في Perfekt",
      tokens: ["Was", "hast", "du", "am", "Wochenende", "gemacht"],
      correctSentence: "Was hast du am Wochenende gemacht",
      explanation: "في السؤال بأداة: الأداة أوّلاً، المساعد ثانياً، وPartizip II في الآخر.",
      errorType: "word-order",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich habe gelernt Deutsch.",
        right: "Ich habe Deutsch gelernt.",
        whyAr: "الخطأ الأوّل في هذا الباب: وضع Partizip II مباشرةً بعد المساعد نقلاً عن العربية والإنجليزية. والألمانية تُغلق به الجملة.",
      },
      {
        wrong: "Ich habe nach Berlin gefahren.",
        right: "Ich bin nach Berlin gefahren.",
        whyAr: "لا مفعول والفعل حركة ⟵ sein. وسل نفسك دائماً: هل في الجملة مفعولٌ به؟",
      },
      {
        wrong: "Ich habe meine Oma gebesucht.",
        right: "Ich habe meine Oma besucht.",
        whyAr: "بادئة be- غير منفصلة تمنع ge-. والعلامة الصوتية: النبر في be-SU-chen متأخّر.",
      },
      {
        wrong: "Ich habe getrinkt.",
        right: "Ich habe getrunken.",
        whyAr: "trinken قويّ: صوت الجذر يتغيّر والنهاية -en. والقياس على الضعيفة فخٌّ.",
      },
      {
        wrong: "Er willt einen Kaffee.",
        right: "Er möchte einen Kaffee.",
        whyAr: "خطآن: النهاية (er will بلا t) والأسلوب (möchte هي المهذّبة في موقف الطلب).",
      },
    ],
    eselsbruecken: [
      "«قوسان» — المساعد يفتح في المركز الثاني وPartizip II يُغلق في الآخر، مهما طال ما بينهما.",
      "«اختبار المفعول» — هل في الجملة مفعولٌ به؟ إن كان فـhaben قطعاً، وإلاّ فانظر: حركةٌ أو تغيّرُ حالٍ ⟵ sein.",
      "«ثلاثةٌ تُحفظ حفظاً» — sein · bleiben · passieren تأخذ sein رغم أنّ منطقها لا يقتضيه.",
      "«أذنك تُفتيك» — إن كان النبر على أوّل الفعل فـge- (LERnen ⟵ gelernt)، وإن تأخّر فلا ge- (beSUchen · stuDIEren).",
      "«will ليست will» — الألمانية will تعني «يريد» لا «سوف». فخُّ من يعرف الإنجليزية.",
    ],
    culturalNote: {
      title: "لماذا يتكلّم الألمان بالـPerfekt ويكتبون بالـPräteritum؟",
      content: "إن قرأتَ روايةً ألمانية وجدتَ «Er ging nach Hause» (Präteritum)، وإن سمعتَ ألمانياً يحكي عن يومه قال «Ich bin nach Hause gegangen» (Perfekt). والقسمة إقليمية أيضاً: كلّما اتّجهتَ جنوباً — بايرن والنمسا وسويسرا — قلّ استعمال Präteritum في الكلام حتّى يكاد يختفي، فلا يبقى منه إلاّ war وhatte. أمّا في الشمال فتسمعه أحياناً في الحكي. والقاعدة الآمنة لك في A1 وA2: تكلّم بالـPerfekt دائماً، واحتفظ بـwar وhatte وحدهما من الماضي البسيط — فهما مستعملان في كلّ مكان.",
    },
  },

  miniTest: [
    {
      id: "mt-a1-14-1",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المساعد الصحيح",
      questionDe: "Am Sonntag ___ wir im Park spazieren gegangen.",
      options: ["sind", "haben", "waren", "werden"],
      correctIndex: 0,
      explanation: "spazieren gehen حركةٌ بلا مفعول ⟵ sein.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-2",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II",
      template: "Hast du die E-Mail schon ___? (schreiben)",
      blanks: [{ correct: "geschrieben", options: ["geschrieben", "geschreibt", "schrieb", "geschreiben"], errorType: "grammar" }],
      explanation: "schreiben قويّ: ei ⟵ ie والنهاية -en ⟵ geschrieben.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-3",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ لا يأخذ ge- في Partizip II؟",
      questionDe: "Welches Verb bildet das Partizip II ohne ge-?",
      options: ["reparieren", "kaufen", "hören", "spielen"],
      correctIndex: 0,
      explanation: "reparieren ينتهي بـ-ieren ⟵ repariert بلا ge-. والثلاثة الأخرى ضعيفة عادية: gekauft, gehört, gespielt.",
      errorType: "grammar",
    },
    {
      id: "mt-a1-14-4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة",
      tokens: ["Meine", "Schwester", "hat", "in", "München", "studiert"],
      correctSentence: "Meine Schwester hat in München studiert",
      explanation: "المساعد hat في المركز الثاني بعد المبتدأ المركّب، وstudiert في الآخر.",
      errorType: "word-order",
    },
    {
      id: "mt-a1-14-5",
      type: "multiple-choice",
      instructionAr: "أيّ فعلٍ ناقصٍ يناسب؟",
      questionDe: "Meine Eltern sagen, ich ___ mehr lernen.",
      options: ["soll", "will", "darf", "kann"],
      correctIndex: 0,
      explanation: "الإلزام صادرٌ عن الوالدين ⟵ sollen: نقلُ صوت غيرك.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Perfekt", ar: "الماضي المحكيّ (haben/sein + Partizip II)", example: "Im Gespräch benutzt man das Perfekt.", exampleAr: "في الحديث يُستعمل الماضي المحكيّ.", level: "A1" },
    { id: "fc2", de: "gemacht (machen)", ar: "فعَل", example: "Was hast du gestern gemacht?", exampleAr: "ماذا فعلتَ أمس؟", level: "A1" },
    { id: "fc3", de: "gelernt (lernen)", ar: "تعلَّم", example: "Ich habe zwei Stunden gelernt.", exampleAr: "تعلّمتُ ساعتين.", level: "A1" },
    { id: "fc4", de: "gegessen (essen)", ar: "أكَل", example: "Wir haben im Restaurant gegessen.", exampleAr: "أكلنا في المطعم.", level: "A1" },
    { id: "fc5", de: "getrunken (trinken)", ar: "شرِب", example: "Ich habe einen Tee getrunken.", exampleAr: "شربتُ شاياً.", level: "A1" },
    { id: "fc6", de: "gefahren (fahren)", ar: "سافر، ذهب بمركبة", example: "Ich bin nach Berlin gefahren.", exampleAr: "سافرتُ إلى برلين.", level: "A1" },
    { id: "fc7", de: "gegangen (gehen)", ar: "ذهب مشياً", example: "Wir sind ins Kino gegangen.", exampleAr: "ذهبنا إلى السينما.", level: "A1" },
    { id: "fc8", de: "gewesen (sein)", ar: "كان", example: "Ich bin in Berlin gewesen.", exampleAr: "كنتُ في برلين.", level: "A1" },
    { id: "fc9", de: "geblieben (bleiben)", ar: "بقي", example: "Wir sind zu Hause geblieben.", exampleAr: "بقينا في البيت.", level: "A1" },
    { id: "fc10", de: "aufgestanden (aufstehen)", ar: "نهض من النوم", example: "Ich bin um sechs aufgestanden.", exampleAr: "نهضتُ في السادسة.", level: "A1" },
    { id: "fc11", de: "angerufen (anrufen)", ar: "اتّصل هاتفياً", example: "Ich habe meine Mutter angerufen.", exampleAr: "اتّصلتُ بأمّي.", level: "A1" },
    { id: "fc12", de: "besucht (besuchen)", ar: "زار", example: "Wir haben unsere Oma besucht.", exampleAr: "زرنا جدّتنا.", level: "A1" },
    { id: "fc13", de: "verstanden (verstehen)", ar: "فهِم", example: "Ich habe das nicht verstanden.", exampleAr: "لم أفهم ذلك.", level: "A1" },
    { id: "fc14", de: "studiert (studieren)", ar: "درس في الجامعة", example: "Sie hat in Tunis studiert.", exampleAr: "درستْ في تونس.", level: "A1" },
    { id: "fc15", de: "wollen", ar: "يريد (عزم)", example: "Ich will Deutsch lernen.", exampleAr: "أريد أن أتعلّم الألمانية.", level: "A1" },
    { id: "fc16", de: "sollen", ar: "ينبغي (أمرُ الغير)", example: "Der Arzt sagt, ich soll Wasser trinken.", exampleAr: "يقول الطبيب إنّ عليّ شرب الماء.", level: "A1" },
    { id: "fc17", de: "gestern", ar: "أمس", example: "Gestern habe ich viel gearbeitet.", exampleAr: "أمس عملتُ كثيراً.", level: "A1" },
    { id: "fc18", de: "letztes Wochenende", ar: "عطلة الأسبوع الماضية", example: "Letztes Wochenende bin ich gereist.", exampleAr: "عطلة الأسبوع الماضية سافرتُ.", level: "A1" },
    { id: "fc19", de: "gefallen (hat gefallen)", ar: "أعجب", example: "Berlin hat mir sehr gefallen.", exampleAr: "أعجبتني برلين كثيراً.", level: "A1" },
    { id: "fc20", de: "die Fahrt", ar: "الرحلة، السفرة", example: "Die Fahrt hat vier Stunden gedauert.", exampleAr: "استغرقت الرحلة أربع ساعات.", level: "A1" },
    { id: "fc21", de: "treffen", ar: "يقابل، يلتقي", example: "In Berlin habe ich Nadia getroffen.", exampleAr: "في برلين قابلتُ نادية.", level: "A1" },
    { id: "fc22", de: "probieren", ar: "يجرّب، يذوق", example: "Ich habe eine Currywurst probiert.", exampleAr: "جرّبتُ الكاري فورست.", level: "A1" },
    { id: "fc23", de: "schmecken", ar: "يكون طعمه طيّباً", example: "Es hat mir gut geschmeckt.", exampleAr: "أعجبني طعمه.", level: "A1" },
    { id: "fc24", de: "deshalb", ar: "لذلك، لهذا السبب", example: "Es hat geregnet, deshalb sind wir ins Museum gegangen.", exampleAr: "أمطرت، لذلك ذهبنا إلى المتحف.", level: "A1" },
    { id: "fc25", de: "das Museum", ar: "المتحف", example: "Im Museum habe ich viel gelernt.", exampleAr: "في المتحف تعلّمتُ كثيراً.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل ═══ */
  mediation: [
    {
      id: "med-a1-14-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صديقك بالعربية",
      sourceDe: "Hallo! Am Samstag bin ich früh aufgestanden und bin nach Köln gefahren. Dort habe ich meinen Bruder besucht. Wir haben zusammen gegessen und sind am Rhein spazieren gegangen. Am Sonntag hat es geregnet, deshalb bin ich zu Hause geblieben.",
      taskAr: "صديقك لا يعرف الألمانية. لخّص له بالعربية ما فعله كاتب الرسالة يومَي السبت والأحد — ثلاث جملٍ تكفي.",
      modelAnswerAr: "«يوم السبت نهض مبكّراً وسافر إلى كولونيا وزار أخاه هناك. أكلا معاً وتمشّيا على نهر الراين. ويوم الأحد أمطرت فبقي في البيت.»",
      keyPointsAr: ["ذكرتَ السفر إلى كولونيا وزيارة الأخ", "ذكرتَ الأكل والتنزّه على النهر", "ذكرتَ المطر يوم الأحد والبقاء في البيت"],
    },
  ],
  interaction: [
    {
      id: "int-a1-14-1",
      scenarioAr: "زميلك في دورة اللغة يسألك يوم الاثنين عن عطلة أسبوعك.",
      scenarioDe: "Am Montag im Kurs: Ein Mitschüler fragt dich nach deinem Wochenende.",
      strategyAr: "الاستراتيجية: أجب بجملةٍ في Perfekt، ثمّ أضف تفصيلاً، ثمّ أعد السؤال إليه بـ«Und du?».",
      rounds: [
        {
          speakerDe: "Hallo! Was hast du am Wochenende gemacht?",
          speakerAr: "أهلاً! ماذا فعلتَ في عطلة الأسبوع؟",
          options: [
            { de: "Ich bin nach Hamburg gefahren und habe Freunde besucht.",
              ar: "سافرتُ إلى هامبورغ وزرتُ أصدقاء.", best: true, replyDe: "Oh, schön! Wie war das Wetter dort?", replyAr: "أوه، جميل! كيف كان الطقس هناك؟" },
            { de: "Ich habe nach Hamburg gefahren.", ar: "سافرتُ إلى هامبورغ. (بمساعدٍ خاطئ)", best: false, replyDe: "Du meinst „ich bin gefahren“, oder? Aber erzähl weiter!", replyAr: "تقصد «ich bin gefahren»، أليس كذلك؟ لكن أكمل!" },
          ],
        },
        {
          speakerDe: "Wie war das Wetter dort?",
          speakerAr: "كيف كان الطقس هناك؟",
          options: [
            { de: "Am Samstag hat es geregnet, aber am Sonntag hat die Sonne geschienen.",
              ar: "يوم السبت أمطرت، لكن يوم الأحد أشرقت الشمس.", best: true, replyDe: "Da hattest du Glück! Und was habt ihr gemacht?", replyAr: "كنتَ محظوظاً! وماذا فعلتم؟" },
            { de: "Das Wetter gut.", ar: "الطقس جيّد. (بلا فعل)", best: false, replyDe: "Du meinst, das Wetter war gut?", replyAr: "تقصد أنّ الطقس كان جيّداً؟" },
          ],
        },
        {
          speakerDe: "Und was habt ihr zusammen gemacht?",
          speakerAr: "وماذا فعلتم معاً؟",
          options: [
            { de: "Wir sind in die Stadt gegangen und haben in einem Café gefrühstückt.",
              ar: "ذهبنا إلى المدينة وتناولنا الفطور في مقهى.", best: true, replyDe: "Das klingt super! Und du, willst du bald wieder hinfahren?", replyAr: "يبدو رائعاً! وهل تريد السفر إلى هناك قريباً مرّةً أخرى؟" },
            { de: "Wir haben in die Stadt gegangen.", ar: "ذهبنا إلى المدينة. (بمساعدٍ خاطئ)", best: false, replyDe: "„Wir sind gegangen“ — gehen steht mit sein. Aber weiter!", replyAr: "«wir sind gegangen» — فـgehen مع sein. لكن أكمل!" },
          ],
        },
        {
          speakerDe: "Willst du bald wieder hinfahren?",
          speakerAr: "هل تريد السفر إلى هناك قريباً مرّةً أخرى؟",
          options: [
            { de: "Ja, ich will im Sommer wieder nach Hamburg fahren.",
              ar: "نعم، أريد السفر إلى هامبورغ ثانيةً في الصيف.", best: true, replyDe: "Super! Viel Spaß dann!", replyAr: "رائع! استمتع إذن!" },
            { de: "Ja, ich will fahren wieder.", ar: "نعم، أريد أسافر ثانيةً. (المصدر في غير موضعه)", best: false, replyDe: "Fast! Der Infinitiv kommt ans Ende: „wieder fahren“.", replyAr: "قريب! المصدر يأتي في الآخر: «wieder fahren»." },
          ],
        },
      ],
    },
  ],
};

