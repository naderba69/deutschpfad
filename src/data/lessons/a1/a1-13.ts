import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-13: A1 kompakt — المراجعة الشاملة لمستوى A1 (خاتمة المستوى)
 * يردّ قواعد المستوى الاثنتي عشرة إلى ثلاثة قوانين ناظمة (V2، الحاضنة
 * الفعلية، نظام النهايات)، ثم يدمجها في مشهدين كاملين (المقهى وحكاية
 * اليوم في Perfekt)، ويختم ببنية امتحان Start Deutsch 1 واستراتيجياته.
 */
export const lessonA113: Lesson = {
  id: "a1-13",
  unitId: "a1-13",
  level: "A1",
  order: 1,
  titleDe: "A1 kompakt — die große Wiederholung",
  titleAr: "A1 المراجعة الشاملة",
  duration: 35,
  summary:
    "المراجعة الختامية لمستوى A1: ردّ قواعد المستوى الاثنتي عشرة إلى ثلاثة قوانين (الفعل في المركز الثاني، الحاضنة الفعلية، النهايات تحمل المعنى)، ودمجها في مشهدين كاملين، ثم بنية امتحان Start Deutsch 1 واستراتيجياته — مع اختبار تجميعي وتحضير مباشر لمستوى A2.",

  /* 1) الأهداف التعليمية */
  lernziele: [
    { id: "z1", de: "Ich kann alle A1-Grammatik kombinieren.", ar: "أن أجمع كل قواعد A1 في جمل صحيحة." },
    { id: "z2", de: "Ich kann über meinen Tag, meine Familie und meine Hobbys sprechen.", ar: "أن أتحدث عن يومي وعائلتي وهواياتي بجمل مترابطة." },
    { id: "z3", de: "Ich kann im Perfekt erzählen, was ich gestern gemacht habe.", ar: "أن أحكي في الماضي المحكيّ ما فعلتُه أمس." },
    { id: "z4", de: "Ich kenne die vier Prüfungsteile von Start Deutsch 1.", ar: "أن أعرف أقسام امتحان Start Deutsch 1 الأربعة واستراتيجية كلّ قسم." },
    { id: "z5", de: "Ich bin bereit für A2!", ar: "أن أكون جاهزاً لمستوى A2!" },
  ],

  /* 2) التمهيد وتنشيط المعرفة السابقة */
  einfuehrung: {
    motivatingQuestionAr:
      "أنت الآن عند ختام A1! تذكر أول جملة تعلمتها: Ich heiße Sami. اليوم تستطيع أن تقول: Ich heiße Sami, ich komme aus Tunesien, ich wohne in Tunis, ich lerne Deutsch, ich kann schwimmen und am Wochenende war ich im Park. هذه قفزة حقيقية!",
    motivatingQuestionDe: "Was kannst du alles auf Deutsch sagen?",
    contextAr:
      "درس أخير يجمع المفاتيح العشرة لـ A1 في خريطة واحدة، ثم نمرّنها في محادثة واختبار شامل — وبه تنهي المبتدئ الأول بثقة.",
    contextDe: "Ich lerne Deutsch. Ich kann schon viel sagen!",
    connectionToPreviousAr:
      "هذا ختام A1: من السلسلة الذهبية (الدرس 1) إلى الماضي الأول war/hatte (درس الترفيه) — كل شيء يجتمع هنا في جملة واحدة كبيرة.",
    activateVocabulary: [
      { de: "die Wiederholung", ar: "المراجعة" },
      { de: "der Satz", ar: "الجملة" },
      { de: "kombinieren", ar: "يدمج/يجمع" },
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "bereit sein", ar: "يكون مستعداً" },
    ],
  },

  /* مراجعة تراكمية: أسئلة من كامل المستوى */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة من A1 (درس a1-11 — التنقل في المدينة: Wo / Wohin / Woher): ما السؤال الصحيح؟",
      questionDe: "___ kommst du? — Aus Tunesien.",
      questionAr: "من أين أنت؟ — من تونس.",
      options: ["Woher", "Wo", "Wohin", "Wer"],
      correctIndex: 0,
      explanation: "Woher = من أين (أصل). Wo = أين. Wohin = إلى أين.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة شاملة من A1 (درس a1-04 — السكن والمنزل: أدوات التعريف der/die/das): أكمل بالأداة الصحيحة:",
      template: "___ Tisch (مذكر) · ___ Lampe (مؤنث) · ___ Buch (محايد)",
      blanks: [
        { correct: "der", options: ["der", "die", "das", "den"] },
        { correct: "die", options: ["die", "der", "das", "dem"] },
        { correct: "das", options: ["das", "der", "die", "den"] },
      ],
      hint: "der للمذكر، die للمؤنث، das للمحايد.",
      explanation: "der Tisch / die Lampe / das Buch — الأدوات الثلاثة.",
      errorType: "article",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة شاملة من A1 (درس a1-05 — الحياة اليومية: um + الساعة والأفعال المنفصلة): افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich stehe sieben Uhr auf.",
      wrongWord: "sieben Uhr",
      correctWord: "um sieben Uhr",
      options: ["um sieben Uhr", "sieben Uhr", "am sieben Uhr", "in sieben Uhr"],
      explanation: "مع الساعة: um + ساعة: um sieben Uhr — من درس اليوم والوقت.",
      errorType: "preposition",
    },
  ],

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "خريطة قواعد A1 — الاثنا عشر مفتاحاً في جدول واحد",
      titleDe: "Die A1-Grammatik auf einen Blick",
      explanationAr:
        "أنت الآن عند خطّ النهاية. وقبل أن تعبره، تحتاج شيئاً واحداً لا يعطيه إيّاك أيّ درسٍ منفرد: **أن ترى المستوى كلّه دفعةً واحدة**. فالقواعد الاثنتا عشرة التي تعلّمتها لم تُبنَ متجاورةً بل متراكبة، وهذا الدرس يُظهر لك كيف تركّبت.\n\n**أوّلاً — العمود الفقريّ: الفعل في المركز الثاني.**\nهذه ليست قاعدةً من اثنتي عشرة، بل هي **القانون** الذي تجري تحته البقيّة. كلّ ما تعلّمتَه من ترتيبٍ فرعٌ عنها:\n· **Ich lerne** Deutsch. ⟵ الفاعل أوّلاً\n· **Heute lerne ich** Deutsch. ⟵ ظرفٌ أوّلاً فانزاح الفاعل إلى الثالث\n· **Woher kommst du?** ⟵ أداة السؤال أوّلاً والفعل ثانياً\n· …, **aber ich lerne** Deutsch. ⟵ الأداة في الموضع صفر فلم تُزح شيئاً\nأربعة مظاهر لقانونٍ واحد. ومن أدركه فقد أدرك نصف نحو الألمانية.\n\n**ثانياً — القانون الثاني: الحاضنة الفعلية.**\nكلّما كان في الجملة **جزءٌ فعليٌّ غير مصرَّف**، ذهب إلى آخرها. وهذا يشمل ثلاثة تراكيب درستَها:\n· منفصل: Ich **stehe** um sieben **auf**.\n· ناقص + مصدر: Ich **kann** gut Deutsch **sprechen**.\n· Perfekt: Ich **habe** gestern Deutsch **gelernt**.\nفالمركز الثاني يفتح، والآخر يُغلق، والباقي بينهما.\n\n**ثالثاً — القانون الثالث: النهايات تحمل المعنى.**\nالعربية تعرف هذا جيداً (كتبَ · كتبتُ · كتبوا). والألمانية توزّع نهاياتها على ثلاثة أشياء: **الفعل** بحسب فاعله (lern-e · lern-st · lern-t)، و**الأداة** بحسب حالتها (ein ⟵ einen في النصب، der ⟵ dem في الجرّ)، و**الصفة الملكية** بحسب معدودها (mein Vater · meine Mutter).\n\n**والخلاصة التي تعبر بها إلى A2:** ما تعلّمتَه ليس اثنتي عشرة قاعدة بل **ثلاثة قوانين** ولها اثنتا عشرة صورة. ومن حفظ القوانين استغنى عن حفظ الصور.",
      whyAr:
        "لماذا نختم المستوى بمراجعةٍ شاملة بدل أن نمضي إلى A2 مباشرة؟ لسببٍ نفسيٍّ تعليميٍّ ثابت: المعرفة المتفرّقة تُنسى، والمعرفة **المنظَّمة** تبقى. فحين تعلّمتَ النصب في الدرس الثالث كان معزولاً، وحين تعلّمتَ الجرّ في الرابع كان معزولاً، فبقيا في ذهنك جزيرتين. وهذا الدرس يبني الجسر: النصب والجرّ **حالتان من نظامٍ واحد**، ووظيفتهما تمييزُ دور الاسم في الجملة. ومن رآهما نظاماً لم يخلط بينهما بعد اليوم.\n\nولماذا نُصرّ على ردّ القواعد إلى ثلاثة قوانين؟ لأنّ الذاكرة العاملة عند الإنسان تحمل نحو أربعة عناصر في وقتٍ واحد لا اثني عشر. فمن يحاول استحضار اثنتي عشرة قاعدةً وهو يتكلّم يتلعثم لا محالة. ومن يحمل ثلاثة قوانين يتكلّم بطلاقة لأنّ الصور الاثنتي عشرة تتولّد عنها تلقائياً.\n\nوهذا بالضبط الفرق بين من يعرف القواعد ومن يتكلّم اللغة: الأوّل يستحضر ويطبّق، والثاني يستحضر القانون فتأتي الصورة. والانتقال من الأوّل إلى الثاني هو المهمّة الحقيقية لهذا الدرس.",
      table: {
        title: "الاثنا عشر مفتاحاً لـ A1 — وأين تعلّمتَ كلّاً منها",
        columns: ["القاعدة", "المثال", "الدرس"],
        rows: [
          { label: "السلسلة الذهبية", cells: ["ich lerne, du lernst, er lernt", "a1-01"] },
          { label: "sein / haben / werden", cells: ["Ich bin Sami. Ich habe Zeit. Es wird kalt.", "a1-01 · a1-03 · a1-12"] },
          { label: "أدوات der/die/das + ein", cells: ["der Tisch, die Lampe, das Buch", "a1-02 · a1-03"] },
          { label: "النصب Akkusativ", cells: ["Ich esse einen Apfel.", "a1-03"] },
          { label: "الجرّ Dativ في المكان", cells: ["Ich wohne in der Stadt. Das Buch liegt auf dem Tisch.", "a1-04 · a1-11"] },
          { label: "الأفعال المنفصلة", cells: ["Ich stehe um sieben auf.", "a1-05"] },
          { label: "الأفعال الناقصة الستّة", cells: ["kann · möchte · muss · darf · will · soll", "a1-04 · a1-06 · a1-14"] },
          { label: "الماضي الأول", cells: ["Ich war im Park. Ich hatte Zeit.", "a1-06"] },
          { label: "الماضي المحكيّ (Perfekt)", cells: ["Ich habe gelernt. Ich bin gefahren.", "a1-14"] },
          { label: "W-Fragen + V2", cells: ["Woher kommst du? Ich komme aus Tunesien.", "a1-01 · a1-11"] },
          { label: "النفي nicht / kein", cells: ["Ich bin kein Lehrer. Das ist nicht teuer.", "a1-10"] },
          { label: "أدوات الربط + الوقت", cells: ["und · aber · oder · denn · um acht · am Morgen", "a1-09 · a1-12"] },
        ],
      },
      examples: [
        {"de": "Ich heiße Sami und komme aus Tunesien.", "ar": "اسمي سامي وأنا من تونس. (الفعل في الثاني مرّتين)"},
        {"de": "Heute lerne ich Deutsch.", "ar": "اليوم أتعلّم الألمانية. (الظرف أوّلاً فانزاح الفاعل — قانون V2)"},
        {"de": "Am Morgen stehe ich um sieben auf.", "ar": "في الصباح أستيقظ في السابعة. (V2 + الحاضنة: البادئة في الآخر)"},
        {"de": "Ich habe gestern einen Film gesehen.", "ar": "شاهدتُ فيلماً أمس. (الحاضنة: habe يفتح وgesehen يُغلق)"},
        {"de": "Ich kann schon viel sagen, aber ich muss noch viel lernen.", "ar": "أستطيع قول الكثير، لكن عليّ أن أتعلّم كثيراً بعد. (ناقصان + أداة ربط)"},
        {"de": "Ich esse einen Apfel und trinke einen Tee.", "ar": "آكل تفّاحة وأشرب شاياً. (النصب مرّتين: einen)"},
        {"de": "Am Wochenende war ich mit meiner Familie im Park.", "ar": "في العطلة كنتُ مع عائلتي في الحديقة. (ماضٍ أوّل + جرّ)"},
        {"de": "Woher kommst du und wo wohnst du jetzt?", "ar": "من أين أنت وأين تسكن الآن؟ (أداتا سؤالٍ والفعل ثانياً في الاثنتين)"},
      ],
      comparisonWithArabic:
        "العربية والألمانية تلتقيان في مبدأٍ عميق وتفترقان في تطبيقه: كلتاهما **لغةٌ إعرابية** تُغيّر أواخر الكلمات لتدلّ على وظائفها. فحين تقول „رأيتُ الولدَ“ فالفتحة على آخر „الولد“ هي ما يخبرك أنّه مفعول. وحين يقول الألمانيّ Ich sehe **den** Jungen فتغيّر الأداة من der إلى den هو ما يخبره بالشيء نفسه.\n\nوالفرق في **موضع العلامة**: العربية تضعها على آخر الاسم، والألمانية تضعها على **الأداة** التي تسبقه. فالاسم الألمانيّ يكاد لا يتغيّر (Jungen ⟵ Junge)، والأداة تحمل العبء كلّه. وهذا خبرٌ سارّ لك: أنت لا تحتاج أن تُعرب الأسماء، بل أن تحفظ أربع أدواتٍ في أربع حالات.\n\nوأمّا موضع الفعل فهنا الافتراق الحقيقيّ: العربية تُقدّم الفعل غالباً („ذهبَ الولدُ“) وتسمح بتقديم الفاعل، وهي في الحالين لا تُلزمك بموضعٍ ثابت. والألمانية تُثبّت الفعل المصرَّف في المركز الثاني إثباتاً لا استثناء فيه. فهذا هو ما ينبغي أن تُدرّب عليه أذنك أكثر من غيره.",
      eselsbruecke:
        "ثلاثة قوانين لا اثنتا عشرة قاعدة: الفعل المصرَّف في المركز الثاني · غير المصرَّف في آخر الجملة · النهايات تحمل المعنى (على الفعل بحسب فاعله، وعلى الأداة بحسب حالتها).",
      commonMistakes: [
        {"wrong": "Am Sonntag ich war im Park.", "right": "Am Sonntag war ich im Park.", "whyAr": "أشهر خطأٍ في A1 كلّه: الظرف احتلّ المركز الأوّل فوجب أن ينزاح الفاعل إلى ما بعد الفعل. والقانون واحدٌ لا استثناء فيه: المصرَّف في الثاني دائماً."},
        {"wrong": "Ich esse ein Apfel.", "right": "Ich esse einen Apfel.", "whyAr": "المفعول به في حالة النصب، والمذكّر وحده يتغيّر: ein ⟵ einen. وهذه هي العلامة التي تقابل الفتحة في «رأيتُ الولدَ»، لكنّها على الأداة لا على الاسم."},
        {"wrong": "Ich habe gelernt Deutsch.", "right": "Ich habe Deutsch gelernt.", "whyAr": "قانون الحاضنة: كلّ جزءٍ فعليٍّ غير مصرَّف يُغلق الجملة. وهو القانون نفسه في aufstehen وkönnen — قانونٌ واحد بثلاث صور."},
        {"wrong": "Ich kommen aus Tunesien.", "right": "Ich komme aus Tunesien.", "whyAr": "نهاية الفعل تحمل الفاعل: مع ich تكون -e دائماً. وترك المصدر كما هو خطأٌ يُفهم منه أنّ المتعلّم لم يستوعب نظام النهايات بعد."},
        {"wrong": "Ich bin nicht ein Lehrer.", "right": "Ich bin kein Lehrer.", "whyAr": "nicht تنفي الأفعال والصفات، وkein ينفي الأسماء المنكّرة. والخلط بينهما يبقى مفهوماً لكنّه يُعدّ في التصحيح خطأً نحوياً كاملاً لا هفوة."},
      ],
      relatedRuleComparison: {
        "title": "من القاعدة إلى الكلام — أين أنت الآن؟",
        "content": "أتقنتَ A1 إذا استطعتَ هذه الخمس بلا تفكيرٍ طويل: أن تُعرّف بنفسك وبعائلتك · أن تسأل سؤالاً بسيطاً وتُجيب عنه · أن تطلب بأدبٍ في متجرٍ أو مقهى · أن تحكي ما فعلتَه أمس · أن تفهم إعلاناً قصيراً أو رسالةً بسيطة.\n\nولاحظ أنّ هذه خمس **قدرات** لا خمس قواعد. والفرق جوهريّ: القاعدة تُعرَف، والقدرة تُؤدّى. فإن وجدتَ نفسك تعرف القواعد ولا تؤدّي القدرات، فالنقص ليس في معرفتك بل في **تدريبك** — والعلاج تمارين البنك والمحادثة لا إعادة قراءة الشرح."
      },
    },
    {
      id: "t2",
      titleAr: "دمج تراكيب A1 في موقف واحد",
      titleDe: "A1-Strukturen im Zusammenhang",
      explanationAr:
        "المراجعة الحقيقية ليست تلاوة قائمة بل **إعادة استعمال**. ولذلك نأخذ في هذه الكتلة موقفين كاملين ونُظهر كيف تتداخل قواعد المستوى كلّها فيهما: موقفٌ حاضر (المقهى) وموقفٌ ماضٍ (حكاية اليوم).\n\n**أوّلاً — موقف المقهى: خمس خطوات ثابتة.**\n· **التحية:** Guten Tag!\n· **الطلب:** Ich hätte gern **einen** Kaffee. ⟵ نصبٌ لأنّه مفعولٌ به\n· **السؤال عن السعر:** Was kostet das? ⟵ أداة سؤالٍ وفعلٌ في الثاني\n· **الدفع:** Zusammen, bitte. / Getrennt, bitte.\n· **الوداع:** Auf Wiedersehen!\nوالترتيب هو ما يتكرّر في كلّ مقهى، فاحفظ الترتيب لا الجمل.\n\n**ثانياً — موقف الحكي: كيف تحكي يومك في ستّ جمل.**\nوهذا هو ما يُطلب منك في **Sprechen Teil 2** حرفياً، وقد صرتَ تملك أدواته كلّها بعد درس Perfekt:\n· Ich **bin** um sieben **aufgestanden**. ⟵ Perfekt + منفصل + sein\n· Dann **habe** ich **gefrühstückt**. ⟵ Perfekt + haben\n· Um acht **bin** ich zur Arbeit **gefahren**. ⟵ ظرفٌ أوّلاً فانزاح الفاعل\n· Ich **musste** viel **arbeiten**, **aber** es **war** interessant. ⟵ ناقصٌ + أداة ربط + ماضٍ أوّل\n· Am Abend **habe** ich meine Familie **angerufen**. ⟵ Perfekt + منفصل + haben\n· Ich **war** sehr müde **und bin** früh **eingeschlafen**. ⟵ ربطٌ + ماضيان مختلفان\nستّ جملٍ فيها تسع قواعد من الاثنتي عشرة. وهذا هو معنى إتمام A1: لا أن تعرفها مفرّقةً بل أن تُشغّلها معاً.\n\n**وثالثاً — أدوات الربط تصنع الفرق بين المبتدئ والمتقدّم.**\nقارن: „Ich war müde. Ich bin früh eingeschlafen.“ مقابل „Ich war müde **und** bin früh eingeschlafen.“ الجملتان صحيحتان، لكنّ الثانية تبدو ألمانيةً والأولى تبدو تمريناً. والفارق كلمةٌ واحدة.",
      whyAr:
        "لماذا نُدرّب على المواقف لا على القواعد في هذا الدرس؟ لأنّ الدماغ لا يخزّن اللغة في جداول بل في **سيناريوهات**. وحين تدخل مقهىً في برلين لا يستحضر ذهنك „قاعدة النصب“، بل يستحضر مشهد المقهى وما يُقال فيه. فمن تدرّب على المشهد كاملاً وجد الكلام حاضراً، ومن تدرّب على القاعدة وحدها وجد نفسه يُعرب وهو واقفٌ أمام النادل.\n\nولماذا نُلحّ على أدوات الربط تحديداً في الختام؟ لأنّها المؤشّر الأوّل الذي يقيس به المصحّح مستواك. معايير Goethe في A1 تطلب جملاً „مترابطة“ لا مجرّد جملٍ صحيحة، والترابط يُقاس بـund وaber وdenn وdann. فمتعلّمان يملكان القواعد نفسها يفترقان في الدرجة بسبب هذه الكلمات الصغيرة وحدها.\n\nوأمّا لماذا نبني حكاية اليوم على Perfekt؟ فلأنّه الزمن الذي يُسأل عنه فعلاً. وسؤال „Was hast du gestern gemacht?“ يرد في كلّ امتحانٍ شفويّ لأنّه السؤال الذي يفتح الحديث بين غريبين. فمن أتقن الإجابة عنه امتلك مفتاح المحادثة الأوّل.",
      table: {
        title: "سيناريو المقهى: من التحية إلى الحساب",
        columns: ["المرحلة", "العبارة الألمانية", "بالعربية"],
        rows: [
          { label: "1. التحية", cells: ["Guten Tag!", "نهارك سعيد!"] },
          { label: "2. الطلب", cells: ["Ich hätte gern einen Kaffee.", "أريد قهوة من فضلك."] },
          { label: "3. السؤال", cells: ["Was kostet das?", "كم يكلّف هذا؟"] },
          { label: "4. الدفع", cells: ["Zusammen, bitte.", "الحساب كاملاً من فضلك."] },
          { label: "5. الوداع", cells: ["Auf Wiedersehen!", "إلى اللقاء!"] },
        ],
      },
      examples: [
        {"de": "Guten Tag! Ich hätte gern einen Kaffee, bitte.", "ar": "نهارك سعيد! أودّ قهوةً من فضلك. (تحية + طلبٌ مهذّب بالنصب)"},
        {"de": "Was kostet das? – Das macht drei Euro zwanzig.", "ar": "كم يكلّف هذا؟ — المجموع 3.20 يورو."},
        {"de": "Zusammen oder getrennt? – Zusammen, bitte.", "ar": "معاً أم منفصلاً؟ — معاً من فضلك. (سؤال النادل المعتاد)"},
        {"de": "Ich bin um sieben aufgestanden und habe gefrühstückt.", "ar": "نهضتُ في السابعة وتناولتُ الفطور. (Perfekt بمساعدين مختلفين + ربط)"},
        {"de": "Um acht bin ich zur Arbeit gefahren.", "ar": "في الثامنة ذهبتُ إلى العمل. (ظرفٌ أوّلاً + Perfekt بـsein)"},
        {"de": "Ich musste viel arbeiten, aber es war interessant.", "ar": "كان عليّ أن أعمل كثيراً، لكنّه كان ممتعاً. (ناقصٌ ماضٍ + aber + war)"},
        {"de": "Am Abend habe ich meine Familie angerufen.", "ar": "في المساء اتّصلتُ بعائلتي. (Perfekt + فعلٌ منفصل)"},
        {"de": "Ich war sehr müde und bin früh eingeschlafen.", "ar": "كنتُ متعباً جداً فغفوتُ مبكّراً. (ماضيان مختلفان في جملةٍ واحدة)"},
      ],
      comparisonWithArabic:
        "العربية تربط جملها بالواو ربطاً كثيفاً حتّى تكاد الفقرة تكون جملةً واحدة. والألمانية تُقلّ من الربط وتُكثر من الوقف، فالمتعلّم العربيّ يميل إلى صفٍّ طويلٍ من und تلو und، وهو مفهومٌ لكنّه يبدو طفولياً. والتوازن المطلوب في A1: جملتان أو ثلاث مربوطة، ثمّ وقفة، ثمّ جملتان.\n\nوفي موقف الطلب تفترق اللغتان في **درجة المباشرة**. العربية تقبل „أريد قهوة“ بلا حرج، والألمانية تعدّ Ich will einen Kaffee فظاظةً وتفرض صيغةً مُلطَّفة: Ich hätte gern / Ich möchte. وهذا ليس تكلّفاً بل قاعدة أدبٍ اجتماعيّ تُقيَّم في الامتحان الشفويّ فعلاً.\n\nوأمّا حكاية اليوم فتلتقي فيها اللغتان التقاءً مريحاً: كلتاهما ترتّب الأحداث زمنياً وتستعمل ظروفاً في أوّل الجملة („في الصباح…“ ⟵ Am Morgen…). والفرق الوحيد الذي يجب أن تحرسه: الظرف في الألمانية يُزيح الفاعل إلى ما بعد الفعل. فقُل Am Morgen **stehe ich** auf ولا تقل Am Morgen ich stehe auf.",
      eselsbruecke:
        "احفظ مشهدين لا قائمتين: مشهد المقهى بخمس خطوات (تحية ← طلب ← سعر ← دفع ← وداع)، ومشهد اليوم بستّ جمل في Perfekt مربوطة بـund وaber وdann.",
      commonMistakes: [
        {"wrong": "Ich will einen Kaffee.", "right": "Ich hätte gern einen Kaffee.", "whyAr": "wollen تعبّر عن إرادةٍ حازمة وتبدو فظّةً في موقف خدمة. وhätte gern وmöchte هما صيغتا الطلب، وقسم Sprechen Teil 3 يُقيّم الأدب بنداً مستقلّاً."},
        {"wrong": "Ich möchte der Kaffee.", "right": "Ich möchte den Kaffee.", "whyAr": "ما بعد möchte مفعولٌ به في حالة النصب، فتتحوّل der إلى den. والفعل الناقص لا يُغيّر الحالة — المفعول يبقى مفعولاً."},
        {"wrong": "Am Morgen ich stehe auf. Ich frühstücke. Ich fahre zur Arbeit.", "right": "Am Morgen stehe ich auf, dann frühstücke ich und fahre zur Arbeit.", "whyAr": "خطآن معاً: ترتيبٌ خاطئ بعد الظرف، وجملٌ مرصوفة بلا رابط. ومعايير A1 تطلب نصّاً مترابطاً، فالربط بند تقييمٍ لا زينة."},
        {"wrong": "Gestern ich habe einen Film gesehen.", "right": "Gestern habe ich einen Film gesehen.", "whyAr": "الظرف gestern في المركز الأوّل يُزيح الفاعل بعد المساعد. والقاعدة نفسها في الحاضر والماضي — فما يُزاح هو الفاعل لا الفعل."},
        {"wrong": "Ich habe gestern nach Hause gegangen.", "right": "Ich bin gestern nach Hause gegangen.", "whyAr": "gehen حركةٌ بين نقطتين بلا مفعول فمساعدها sein. وسل نفسك في كلّ جملة: هل في الجملة مفعولٌ به؟ فإن كان فـhaben قطعاً."},
      ],
      relatedRuleComparison: {
        "title": "القائمة مقابل المشهد",
        "content": "جرّب هذا الاختبار على نفسك: احسب كم ثانيةً تحتاج لتقول «أودّ قهوةً من فضلك» بالألمانية. إن احتجتَ أكثر من ثانيتين فأنت ما زلت **تُركّب** الجملة من قواعدها لا **تستحضرها** من مشهدها.\n\nوالفرق ليس في المعرفة بل في طريقة التخزين. القاعدة تُخزَّن مجرّدةً فتحتاج تركيباً عند كلّ استعمال، والمشهد يُخزَّن جاهزاً فيخرج كاملاً. ولذلك يُطلب منك في هذا الدرس أن تحفظ **عشر جملٍ كاملة** لا عشر قواعد: الجمل تخرج فوراً، والقواعد تصحّح ما بعدها.\n\nوهذه هي الطريقة التي يتعلّم بها الطفل لغته الأولى: جملاً جاهزة أوّلاً، ثمّ استخراج القاعدة منها لاحقاً — لا العكس."
      },
    },
    {
      id: "t3",
      titleAr: "الاستعداد لامتحان Start Deutsch 1 — بنية الامتحان واستراتيجياته",
      titleDe: "Fit für Start Deutsch 1: Prüfungsteile und Strategien",
      explanationAr:
        "أنت الآن تملك مادّة A1 كاملة. وبقي أن تعرف **كيف تُختبر فيها**، لأنّ معرفة اللغة شيءٌ وأداء الامتحان شيءٌ آخر — ومن جهل بنية الامتحان خسر نقاطاً لا علاقة لها بلغته.\n\n**بنية Start Deutsch 1 (Goethe A1) — أربعة أقسام:**\n· **Hören** (نحو 20 دقيقة): ثلاثة أجزاء — رسائل صوتية قصيرة، إعلانات عامّة، ثمّ محادثات. **يُسمع كلّ نصّ مرّتين** إلاّ الجزء الثاني فمرّةً واحدة.\n· **Lesen** (25 دقيقة): نصوصٌ قصيرة — رسالة، إعلانات، لافتات — مع أسئلة صواب/خطأ واختيارٍ من متعدّد.\n· **Schreiben** (20 دقيقة): جزآن — **استمارة** تُملأ ببياناتٍ شخصية، ثمّ **رسالة قصيرة** من نحو 30 كلمة.\n· **Sprechen** (نحو 15 دقيقة، في مجموعة): ثلاثة أجزاء — تقديم النفس، طرح سؤالٍ والإجابة عنه، ثمّ **طلبٌ وردٌّ عليه**.\n\n**استراتيجياتٌ تُكسبك نقاطاً فوراً:**\n· **في Hören:** اقرأ السؤال **قبل** أن يبدأ التسجيل. وأنت تعرف أنّ الجزء الحاسم من الجملة الألمانية يقع في آخرها (Partizip II، البادئة المنفصلة، المصدر) — فلا تحكم قبل أن تسمع الكلمة الأخيرة.\n· **في Schreiben:** في الاستمارة انتبه إلى ترتيب العنوان (الشارع ثمّ الرقم، والرمز ثمّ المدينة). وفي الرسالة اكتب **ثلاث جملٍ مربوطة** بـund وaber وdenn لا ثلاث جملٍ منفصلة.\n· **في Sprechen:** لا تصمت إن لم تفهم. قل **Können Sie das bitte wiederholen?** أو **Langsamer, bitte.** — وهذا يُحسب لك لا عليك، لأنّه استراتيجيةُ تواصلٍ تُقيَّم في معايير CEFR.\n· **في الأقسام كلّها:** أجب عن كلّ سؤال. لا خصمَ على الخطأ، فالفراغ خسارةٌ مؤكّدة والتخمين احتمال.\n\n**والنجاح 60 من 100.** أي أنّك لا تحتاج الكمال بل الكفاية، ولا يُنتظر منك في A1 أن تتكلّم بلا خطأ بل أن **تُفهَم**.",
      whyAr:
        "لماذا نُدرِّس بنية الامتحان بوصفها جزءاً من المنهج لا ملحقاً به؟ لأنّ الفجوة بين „يعرف“ و„ينجح“ فجوةٌ حقيقية يقع فيها متعلّمون أكفاء. من لا يعرف أنّ الجزء الثاني من Hören يُسمع مرّةً واحدة يضيّعه كلّه وهو ينتظر إعادةً لا تأتي. ومن لا يعرف أنّ الاستمارة تُقيَّم على ترتيب العنوان يخسر نقاطاً في مسألةٍ تعلّمها فعلاً.\n\nولماذا يُثاب طلب الإعادة بدل أن يُعاقَب؟ لأنّ الإطار الأوروبيّ المرجعيّ يعدّ **استراتيجيات التواصل** كفاءةً مستقلّة تُقاس مع الكفاءة اللغوية لا ضدّها. فالمتحدّث الذي يستوقف محاوره ليفهم أنجح تواصلياً من الذي يصمت أو يخمّن. وهذا يعكس واقعاً حقيقياً: الناطق الأصليّ نفسه يطلب الإعادة يومياً.\n\nوأمّا عتبة الستّين فرسالةٌ بيداغوجية مقصودة: A1 ليس مستوى إتقانٍ بل مستوى **انطلاق**. ومن انتظر أن يتكلّم بلا خطأٍ قبل أن يمتحن لن يمتحن أبداً، لأنّ الخطأ في هذه المرحلة ليس عرضاً جانبياً للتعلّم بل وسيلته.",
      table: {
        title: "Start Deutsch 1 — الأقسام الأربعة",
        columns: ["القسم", "الزمن", "ما يُطلب", "المفتاح"],
        rows: [
          { label: "Hören", cells: ["≈20 دقيقة", "رسائل صوتية · إعلانات · محادثات", "اقرأ السؤال أوّلاً، وانتظر آخر الجملة"] },
          { label: "Lesen", cells: ["25 دقيقة", "رسالة · إعلانات · لافتات", "ابحث عن الكلمة المفتاح لا عن كلّ كلمة"] },
          { label: "Schreiben", cells: ["20 دقيقة", "استمارة + رسالة ≈30 كلمة", "اربط الجمل بـund/aber/denn"] },
          { label: "Sprechen", cells: ["≈15 دقيقة", "تقديم النفس · سؤال وجواب · طلب", "اطلب الإعادة عند الحاجة — يُحسب لك"] },
          { label: "النتيجة", cells: ["—", "60 من 100 للنجاح", "أجب عن كلّ سؤال: لا خصمَ على الخطأ"] },
        ],
      },
      examples: [
        { de: "Können Sie das bitte wiederholen?", ar: "أيمكنك الإعادة من فضلك؟ — جملة إنقاذٍ تُحسب لك" },
        { de: "Entschuldigung, ich habe das nicht verstanden.", ar: "عذراً، لم أفهم ذلك. (وهي في Perfekt — قلها كما تعلّمتَها)" },
        { de: "Langsamer, bitte!", ar: "أبطأ من فضلك!" },
        { de: "Wie bitte? Noch einmal, bitte.", ar: "عفواً؟ مرّةً أخرى من فضلك." },
        { de: "Ich heiße Amine. Ich komme aus Tunesien und wohne jetzt in Berlin.", ar: "اسمي أمين. أنا من تونس وأسكن الآن في برلين. (Sprechen Teil 1)" },
        { de: "Ich hätte gern einen Kaffee, bitte.", ar: "أودّ قهوةً من فضلك. (Sprechen Teil 3 — الطلب)" },
        { de: "Gestern bin ich ins Kino gegangen und habe einen Film gesehen.", ar: "أمس ذهبتُ إلى السينما وشاهدتُ فيلماً. (جملة Schreiben نموذجية: ماضٍ + ربط)" },
        { de: "Meine Adresse ist Goethestraße 12, 10115 Berlin.", ar: "عنواني شارع غوته 12، 10115 برلين. (Schreiben Teil 1 — الاستمارة)" },
      ],
      comparisonWithArabic:
        "ثقافة الامتحان في العالم العربيّ تُقيّم غالباً **الإنتاج الصحيح**: الإجابة صحيحةٌ أو خاطئة. ومعايير CEFR تُقيّم **الأداء التواصليّ**: هل بلغ المتكلّم غرضه؟ وهذا فارقٌ يغيّر سلوكك في القاعة. فالمتعلّم المتربّي على الثقافة الأولى يصمت إذا لم يجد الصيغة الكاملة، والثاني يقول ما يستطيع ويستعين بما يعرف — وهو الأعلى درجة.\n\nومن مظاهر ذلك أنّ **إعادة الصياغة** تُحسب لك. فإن نسيتَ كلمة Regenschirm فقل: „Das ist für Regen“. هذا في التقليد العربيّ المدرسيّ „تهرّب“، وفي معايير CEFR **استراتيجية تعويضٍ** تُثاب صراحةً.\n\nوأمّا التخمين فالثقافتان تفترقان فيه كذلك: كثيرٌ من الامتحانات العربية تخصم على الخطأ فيتعوّد الطالب ترك الفراغ. وامتحان Goethe لا يخصم البتّة، فترك الفراغ خسارةٌ صافية بلا مقابل.",
      eselsbruecke:
        "أربعة أقسام وأربع عادات: في Hören اقرأ السؤال أوّلاً وانتظر آخر الجملة · في Lesen ابحث عن الكلمة المفتاح · في Schreiben اربط بـund/aber/denn · في Sprechen اطلب الإعادة ولا تصمت. والنجاح 60 لا 100.",
      commonMistakes: [
        {
          wrong: "ترك سؤالٍ بلا إجابة لأنّك لست متأكّداً",
          right: "خمّن دائماً — لا خصمَ على الخطأ في Goethe",
          whyAr:
            "الفراغ خسارةٌ مؤكّدة، والتخمين احتمالُ ربحٍ بلا خسارة. وكثيرٌ من الطلبة العرب يتركون الفراغ بعادةٍ مدرسية تخصم على الخطأ، وهي عادةٌ لا محلّ لها هنا.",
        },
        {
          wrong: "الصمت في Sprechen عند عدم الفهم",
          right: "Können Sie das bitte wiederholen?",
          whyAr:
            "طلب الإعادة استراتيجيةُ تواصلٍ تُقيَّم إيجاباً في معايير CEFR، والصمت يُقيَّم صفراً. فالجملة نفسها تُكسبك نقطةً بدل أن تُفقدك واحدة.",
        },
        {
          wrong: "ثلاث جملٍ منفصلة في رسالة Schreiben",
          right: "جملتان أو ثلاث مربوطة بـund وaber وdenn",
          whyAr:
            "معايير A1 تطلب نصّاً مترابطاً لا جملاً صحيحة فحسب. والترابط بندٌ مستقلّ في شبكة التصحيح، فمن أهمله خسر فيه ولو كانت جمله سليمة.",
        },
        {
          wrong: "الحكم على إجابة Hören قبل نهاية الجملة",
          right: "انتظر الكلمة الأخيرة قبل أن تختار",
          whyAr:
            "البنية الألمانية تضع الجزء الحاسم في الآخر: gefahren أو aufgestanden أو nicht. فمن حكم من أوّل الجملة عكس المعنى أحياناً تماماً.",
        },
        {
          wrong: "12 Goethestraße في استمارة Schreiben",
          right: "Goethestraße 12",
          whyAr:
            "ترتيب العنوان بندٌ يُقيَّم في الاستمارة، ونقلُ العادة الفرنسية السائدة في تونس والمغرب يُخسرك نقطةً في مسألةٍ تعرفها فعلاً.",
        },
      ],
      relatedRuleComparison: {
        title: "ما بعد A1 — ما الذي ينتظرك في A2؟",
        content:
          "أنت تُغلق A1 وتملك: الحاضر، والماضي المحكيّ في صورته الأولى، والأفعال الناقصة الستّة، وحالتي النصب والجرّ في أشيع مواضعهما.\n\nوينتظرك في A2 أربعة توسّعات لا أربعةٌ جديدة:\n· **Perfekt كاملاً** — عائلات الأفعال القوية ومعايير haben/sein بتفصيلها (a2-01)\n· **Präteritum** — الماضي المكتوب الذي تقرؤه في الأخبار والقصص (a2-05)\n· **الجمل الثانوية** — weil وdass وwenn، وفيها يذهب الفعل إلى **آخر** الجملة الفرعية (a2-06)\n· **المقارنة والتفضيل** — größer als, am größten (a2-08)\nولاحظ أنّ الثالث امتدادٌ مباشر لقانون الحاضنة الذي تعرفه: الألمانية تؤخّر الفعل كلّما كانت الجملة تابعة. فأنت لا تبدأ من الصفر في A2 بل تُكمل بناءً قائماً.",
      },
    },
  ],
  reading: {
    "id": "read-a1-13",
    "titleDe": "Ein Jahr Deutsch — Amines Rückblick",
    "titleAr": "سنةٌ من الألمانية — أمين ينظر إلى الوراء",
    "textType": "blog",
    "paragraphs": [
      "Heute ist ein besonderer Tag: Vor genau einem Jahr habe ich meinen ersten Deutschkurs angefangen. Ich erinnere mich noch gut an die erste Stunde. Die Lehrerin hat „Guten Tag“ gesagt, und ich habe nichts verstanden. Gar nichts!",
      "Am Anfang war alles schwer. Die Artikel der, die und das waren mein größtes Problem. Warum ist der Tisch maskulin und die Lampe feminin? Es gibt keine Logik, habe ich gedacht. Aber dann habe ich gelernt: Man muss den Artikel zusammen mit dem Wort lernen — nicht später.",
      "Nach drei Monaten konnte ich schon einfache Sätze sagen: Ich heiße Amine, ich komme aus Tunesien, ich wohne in Berlin. Das war ein schönes Gefühl. Im Supermarkt habe ich zum ersten Mal auf Deutsch bezahlt, und die Verkäuferin hat mich verstanden!",
      "Natürlich habe ich viele Fehler gemacht. Einmal wollte ich einen Kaffee bestellen und habe gesagt: „Ich will einen Kaffee.“ Der Kellner hat gelacht und geantwortet: „Sie meinen: Ich hätte gern einen Kaffee.“ Seitdem sage ich immer hätte gern.",
      "Jetzt kann ich über meinen Tag sprechen, über meine Familie und über meine Pläne. Ich kann Fragen stellen und antworten. Ich kann sogar erzählen, was ich gestern gemacht habe. Das ist nicht perfekt, aber es funktioniert.",
      "Nächste Woche mache ich die Prüfung Start Deutsch 1. Ich bin ein bisschen nervös, aber ich habe viel gelernt und ich bin bereit. Und danach? Danach fange ich mit A2 an. Der Weg ist lang, aber ich gehe ihn Schritt für Schritt."
    ],
    "paragraphsAr": [
      "اليوم يومٌ خاصّ: قبل سنةٍ بالضبط بدأتُ أوّل دورةٍ لي في الألمانية. ما زلتُ أذكر الحصّة الأولى جيداً. قالت المعلّمة «نهاركم سعيد» ولم أفهم شيئاً. لا شيء إطلاقاً!",
      "في البداية كان كلّ شيءٍ صعباً. كانت الأدوات der وdie وdas أكبر مشكلةٍ عندي. لماذا الطاولة مذكّرة والمصباح مؤنّث؟ لا منطق في الأمر، هكذا فكّرتُ. لكنّي تعلّمتُ بعد ذلك: على المرء أن يتعلّم الأداة مع الكلمة — لا بعدها.",
      "بعد ثلاثة أشهر صرتُ أستطيع قول جملٍ بسيطة: اسمي أمين، أنا من تونس، أسكن في برلين. كان شعوراً جميلاً. في السوق دفعتُ بالألمانية لأوّل مرّة، وفهمتني البائعة!",
      "طبعاً ارتكبتُ أخطاءً كثيرة. مرّةً أردتُ أن أطلب قهوةً فقلت: «أريد قهوة». ضحك النادل وأجاب: «تقصد: أودّ قهوةً من فضلك». ومنذ ذلك الحين أقول hätte gern دائماً.",
      "الآن أستطيع الحديث عن يومي وعن عائلتي وعن خططي. أستطيع أن أسأل وأن أجيب. بل أستطيع أن أحكي ما فعلتُه أمس. ليس هذا كمالاً، لكنّه يؤدّي الغرض.",
      "الأسبوع القادم أُجري امتحان Start Deutsch 1. أنا متوتّرٌ قليلاً، لكنّي تعلّمتُ كثيراً وأنا مستعدّ. وبعده؟ بعده أبدأ بـA2. الطريق طويل، لكنّي أمشيه خطوةً خطوة."
    ],
    "glossary": [
      {
        "de": "besonderer (besonders)",
        "ar": "خاصّ، مميّز"
      },
      {
        "de": "angefangen (anfangen)",
        "ar": "بدأ",
        "noteAr": "فعلٌ منفصل ⟵ an-ge-fangen"
      },
      {
        "de": "verstanden (verstehen)",
        "ar": "فهِم",
        "noteAr": "غير منفصل بـver- ⟵ بلا ge-"
      },
      {
        "de": "das Problem",
        "ar": "المشكلة"
      },
      {
        "de": "gedacht (denken)",
        "ar": "فكَّر",
        "noteAr": "شاذّ تماماً: denken ⟵ gedacht"
      },
      {
        "de": "das Gefühl",
        "ar": "الشعور، الإحساس"
      },
      {
        "de": "bezahlt (bezahlen)",
        "ar": "دفَع",
        "noteAr": "be- ⟵ بلا ge-"
      },
      {
        "de": "der Fehler",
        "ar": "الخطأ",
        "noteAr": "Fehler machen = يرتكب خطأً"
      },
      {
        "de": "bestellen",
        "ar": "يطلب (في مطعمٍ أو متجر)"
      },
      {
        "de": "geantwortet (antworten)",
        "ar": "أجاب",
        "noteAr": "جذرٌ ينتهي بـt فيُدخَل حرف علّة: geantwort-e-t"
      },
      {
        "de": "seitdem",
        "ar": "منذ ذلك الحين"
      },
      {
        "de": "nervös",
        "ar": "متوتّر، قلق"
      },
      {
        "de": "bereit",
        "ar": "مستعدّ",
        "noteAr": "Ich bin bereit = أنا مستعدّ"
      },
      {
        "de": "Schritt für Schritt",
        "ar": "خطوةً خطوة"
      }
    ],
    "questions": [
      {
        "id": "rq1",
        "type": "multiple-choice",
        "paragraph": 1,
        "questionDe": "Wie lange lernt Amine schon Deutsch?",
        "instructionAr": "اقرأ الفقرة الأولى واختر الإجابة الصحيحة",
        "options": [
          "Seit einem Jahr",
          "Seit drei Monaten",
          "Seit einer Woche",
          "Seit zwei Jahren"
        ],
        "correctIndex": 0,
        "explanation": "«Vor genau einem Jahr habe ich meinen ersten Deutschkurs angefangen» — منذ سنةٍ بالضبط.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq2",
        "type": "multiple-choice",
        "paragraph": 2,
        "questionDe": "Was war am Anfang sein größtes Problem?",
        "instructionAr": "اقرأ الفقرة الثانية: ما أكبر مشكلةٍ واجهها؟",
        "options": [
          "Die Artikel der, die, das",
          "Die Zahlen",
          "Die Aussprache",
          "Das Perfekt"
        ],
        "correctIndex": 0,
        "explanation": "«Die Artikel der, die und das waren mein größtes Problem.»",
        "errorType": "vocabulary"
      },
      {
        "id": "rq3",
        "type": "multiple-choice",
        "paragraph": 2,
        "questionDe": "Welchen Rat gibt der Text zum Lernen der Artikel?",
        "instructionAr": "اقرأ الفقرة الثانية: ما النصيحة التي يقدّمها النصّ؟",
        "options": [
          "Den Artikel zusammen mit dem Wort lernen",
          "Die Artikel später lernen",
          "Nur der und die lernen",
          "Die Artikel ignorieren"
        ],
        "correctIndex": 0,
        "explanation": "«Man muss den Artikel zusammen mit dem Wort lernen — nicht später.» وهي النصيحة نفسها التي مرّت بك في درس العائلة.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq4",
        "type": "multiple-choice",
        "paragraph": 4,
        "questionDe": "Warum hat der Kellner gelacht?",
        "instructionAr": "اقرأ الفقرة الرابعة: لماذا ضحك النادل؟",
        "options": [
          "Weil „Ich will einen Kaffee“ zu direkt klingt",
          "Weil Amine falsch bezahlt hat",
          "Weil es keinen Kaffee gab",
          "Weil Amine zu laut gesprochen hat"
        ],
        "correctIndex": 0,
        "explanation": "wollen حازمةٌ تبدو فظّةً في موقف طلب، والصيغة المهذّبة hätte gern أو möchte.",
        "errorType": "vocabulary"
      },
      {
        "id": "rq5",
        "type": "multiple-choice",
        "questionDe": "Warum heißt es „geantwortet“ und nicht „geantwortt“?",
        "instructionAr": "سؤال قواعد: لماذا geantwortet بحرف علّة؟",
        "options": [
          "Weil der Stamm auf -t endet",
          "Weil es ein starkes Verb ist",
          "Weil es trennbar ist",
          "Weil es mit sein steht"
        ],
        "correctIndex": 0,
        "explanation": "جذر antwort ينتهي بـt، فإلحاق t به لا يُنطق، فتُدخَل e فاصلة — كما في gearbeitet وgewartet.",
        "errorType": "grammar"
      },
      {
        "id": "rq6",
        "type": "multiple-choice",
        "paragraph": 6,
        "questionDe": "Was macht Amine nach der Prüfung?",
        "instructionAr": "اقرأ الفقرة الأخيرة: ماذا سيفعل بعد الامتحان؟",
        "options": [
          "Er fängt mit A2 an",
          "Er hört auf zu lernen",
          "Er fährt nach Tunesien",
          "Er wiederholt A1"
        ],
        "correctIndex": 0,
        "explanation": "«Danach fange ich mit A2 an.»",
        "errorType": "vocabulary"
      }
    ],
    "redemittel": [
      {
        "de": "Am Anfang war alles schwer.",
        "ar": "في البداية كان كلّ شيءٍ صعباً"
      },
      {
        "de": "Ich habe viele Fehler gemacht.",
        "ar": "ارتكبتُ أخطاءً كثيرة"
      },
      {
        "de": "Das ist nicht perfekt, aber es funktioniert.",
        "ar": "ليس هذا كمالاً، لكنّه يؤدّي الغرض"
      },
      {
        "de": "Ich bin ein bisschen nervös, aber ich bin bereit.",
        "ar": "أنا متوتّرٌ قليلاً لكنّي مستعدّ"
      },
      {
        "de": "Schritt für Schritt.",
        "ar": "خطوةً خطوة — عبارةٌ يقولها الألمان كثيراً"
      },
      {
        "de": "Ich erinnere mich noch gut an …",
        "ar": "ما زلتُ أذكر … جيداً"
      }
    ],
    "discussionAr": "انظر أنت أيضاً إلى الوراء: ما أصعب شيءٍ واجهك في A1، وكيف تغلّبتَ عليه؟ واكتب خمس جملٍ بالألمانية على نسق النصّ — جملتان في Perfekt عمّا فعلتَه، وجملة بـkönnen عمّا صرتَ تستطيعه، وجملة بـwar عن شعورك في البداية، وجملة عمّا تنوي فعله بعد A1."
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "يوم سامي",
        lines: [
          { speaker: "Anna", de: "Erzähl mal, wie ist dein Tag?", ar: "احكِ لنا، كيف يومك؟" },
          { speaker: "Sami", de: "Am Morgen stehe ich um sieben Uhr auf.", ar: "صباحاً أستيقظ في السابعة." },
          { speaker: "Anna", de: "Und was isst du zum Frühstück?", ar: "وماذا تأكل في الفطور؟" },
          { speaker: "Sami", de: "Ich esse ein Brot mit Käse und trinke einen Kaffee.", ar: "آكل خبزاً بالجبن وأشرب قهوة." },
          { speaker: "Anna", de: "Und am Nachmittag?", ar: "وبعد الظهر؟" },
          { speaker: "Sami", de: "Ich lerne Deutsch und spiele Fußball.", ar: "أتعلم الألمانية وألعب كرة القدم." },
        ],
      },
      {
        id: "l2",
        title: "خطط نهاية الأسبوع",
        lines: [
          { speaker: "Mona", de: "Was machst du am Wochenende?", ar: "ماذا تفعل في نهاية الأسبوع؟" },
          { speaker: "Karim", de: "Ich möchte ins Kino gehen. Kommst du mit?", ar: "أود الذهاب إلى السينما. هل تأتي معنا؟" },
          { speaker: "Mona", de: "Gern! Ich kann heute Abend kommen. Letztes Wochenende war ich zu Hause.", ar: "بسرور! أستطيع المجيء الليلة. آخر عطلة كنت في المنزل." },
          { speaker: "Karim", de: "Ich hatte gestern keine Zeit, aber heute bin ich frei.", ar: "لم يكن لدي وقت أمس، لكنني اليوم حر." },
          { speaker: "Mona", de: "Super! Wir sehen uns um acht Uhr im Kino.", ar: "رائع! نراك في الثامنة في السينما." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann steht Sami auf?",
        questionAr: "متى يستيقظ سامي؟",
        options: ["um sieben Uhr", "um acht Uhr", "um neun Uhr", "um sechs Uhr"],
        correctIndex: 0,
        explanation: "قال سامي: Am Morgen stehe ich um sieben Uhr auf.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was isst Sami zum Frühstück?",
        questionAr: "ماذا يأكل سامي في الفطور؟",
        options: ["ein Brot mit Käse", "ein Ei", "einen Apfel", "eine Suppe"],
        correctIndex: 0,
        explanation: "قال سامي: Ich esse ein Brot mit Käse.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Karim machen?",
        questionAr: "ماذا يود كريم أن يفعل؟",
        options: ["ins Kino gehen", "ins Museum gehen", "zu Hause bleiben", "schwimmen gehen"],
        correctIndex: 0,
        explanation: "قال كريم: Ich möchte ins Kino gehen.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo war Mona letztes Wochenende?",
        questionAr: "أين كانت منى آخر عطلة؟",
        options: ["zu Hause", "im Kino", "im Park", "in Tunis"],
        correctIndex: 0,
        explanation: "قالت منى: Letztes Wochenende war ich zu Hause.",
        errorType: "vocabulary",
      },
    ],
  },

  /* 5) النطق */
  pronunciation: {
    id: "p1",
    title: "أصوات A1: ei، ie، ch، وsch",
    items: [
      { de: "heißen", ar: "يُسمى", note: "ei = آي: هاي-سِن" },
      { de: "lesen", ar: "يقرأ", note: "e طويلة = إي (لا يوجد ie) + s بين حركتين = ز: ليزِن" },
      { de: "Buch", ar: "كتاب", note: "ch بعد u = خفيف: بوخ" },
      { de: "Schule", ar: "مدرسة", note: "sch = ش: شولِه" },
      { de: "Woche", ar: "أسبوع", note: "ch بعد o = خفيف: فوخِه" },
      { de: "sieben", ar: "سبعة", note: "ie = إي طويلة ممدودة (لا «آي»): زيبِن" },
    ],
    tip: "في A1 تعلمت أصوات الحروف المركبة: ei وie وch وsch. أعد تمرينها هنا قبل اختبار الختم — النطق الصحيح نصف الامتحان!",
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة من ich إلى er:",
      prompt: "Ich komme aus Tunesien. → Er ...",
      acceptedAnswers: ["Er kommt aus Tunesien.", "Er kommt aus Tunesien."],
      sampleAnswer: "Er kommt aus Tunesien.",
      explanation: "السلسلة الذهبية: ich komme → er kommt (-t).",
      errorType: "conjugation",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الجملة الكبيرة (نحو A1 كامل):",
      template: "Ich ___ Sami und ___ aus Tunesien. (اسمي/آتي) · Am Wochenende ___ ich im Park. (كنت) · Ich ___ ein Fahrrad. (كانت عندي)",
      blanks: [
        { correct: "heiße", options: ["heiße", "heißt", "heißen", "heißst"] },
        { correct: "komme", options: ["komme", "kommt", "kommen", "kommst"] },
        { correct: "war", options: ["war", "warst", "waren", "wart"] },
        { correct: "hatte", options: ["hatte", "hattest", "hatten", "hattet"] },
      ],
      hint: "heiße/komme (ich) + war/hatte (الماضي الأول).",
      explanation: "Ich heiße Sami und komme aus Tunesien. Am Wochenende war ich im Park. Ich hatte ein Fahrrad.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich möchte in Deutschland arbeiten.",
      explanation: "أود العمل في ألمانيا — möchte + مصدر في النهاية.",
      errorType: "spelling",
    },
  ],

  /* 7) بنك تدريبات تفاعلية واسع */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "___ Apfel (مذكر)",
      options: ["der", "die", "das", "den"],
      correctIndex: 0,
      explanation: "der Apfel — مذكر (شاذ بين الفواكه!).",
      errorType: "article",
    },
    {
      id: "e2",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (V2):",
      tokens: ["komme", "Ich", "aus", "Tunesien", "."],
      correctSentence: "Ich komme aus Tunesien.",
      explanation: "الفعل في المركز الثاني: komme.",
      errorType: "word-order",
    },
    {
      id: "e3",
      type: "fill-blank",
      instructionAr: "أكمل بـ sein أو haben:",
      template: "Ich ___ Lehrer. · Ich ___ einen Bruder.",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "ist", "hat"] },
        { correct: "habe", options: ["habe", "bin", "hat", "ist"] },
      ],
      explanation: "sein للمهنة (bin Lehrer)، haben للملكية (habe einen Bruder).",
      errorType: "conjugation",
    },
    {
      id: "e4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich esse ein Apfel.",
      wrongWord: "ein Apfel",
      correctWord: "einen Apfel",
      options: ["einen Apfel", "ein Apfel", "einem Apfel", "eine Apfel"],
      explanation: "Akkusativ المذكر: ein → einen.",
      errorType: "case",
    },
    {
      id: "e5",
      type: "matching",
      instructionAr: "صِل الرقم بالكلمة الألمانية:",
      pairs: [
        { left: "3", right: "drei" },
        { left: "7", right: "sieben" },
        { left: "12", right: "zwölf" },
        { left: "20", right: "zwanzig" },
        { left: "100", right: "hundert" },
      ],
      hint: "تذكر الأرقام الأساسية من درس التسوق.",
      explanation: "drei، sieben، zwölf، zwanzig، hundert — الأرقام الأساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "transformation",
      instructionAr: "حوّل إلى أمر (du):",
      prompt: "Du kommst. → !",
      acceptedAnswers: ["Komm!", "Komm"],
      sampleAnswer: "Komm!",
      explanation: "الأمر مع du: احذف -st: kommst → Komm!",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المنفصل الصحيح:",
      questionDe: "Ich ___ um sieben Uhr ___. (أستيقظ)",
      options: ["stehe ... auf", "stehe ... an", "gehe ... auf", "komme ... auf"],
      correctIndex: 0,
      explanation: "aufstehen = يستيقظ: Ich stehe um sieben Uhr auf.",
      errorType: "vocabulary",
    },
    {
      id: "e8",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص:",
      template: "Ich ___ schwimmen. (أستطيع) · Ich ___ einen Kaffee, bitte. (أودّ) · Ich ___ heute lernen. (يجب)",
      blanks: [
        { correct: "kann", options: ["kann", "kannst", "können", "könnt"] },
        { correct: "möchte", options: ["möchte", "möchtest", "möchten", "mag"] },
        { correct: "muss", options: ["muss", "musst", "müssen", "müsst"] },
      ],
      explanation: "kann (قدرة) + möchte (طلب مهذب) + muss (إلزام).",
      errorType: "conjugation",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe nicht Auto.",
      wrongWord: "nicht Auto",
      correctWord: "kein Auto",
      options: ["kein Auto", "nicht Auto", "keine Auto", "nicht ein Auto"],
      explanation: "مع الأسماء: kein (وليس nicht): Ich habe kein Auto.",
      errorType: "negation",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Am Wochenende war ich im Park.",
      explanation: "في العطلة كنت في الحديقة — war + am Wochenende.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "مراجعة شاملة: أكمل Partizip II والمساعد الصحيح",
      template: "Gestern ___ ich einen Film ___. (sehen)",
      blanks: [
        { correct: "habe", options: ["habe", "bin", "war", "hatte"], errorType: "grammar" },
        { correct: "gesehen", options: ["gesehen", "gesieht", "geseht", "sehen"], errorType: "grammar" },
      ],
      explanation: "einen Film مفعولٌ به ⟵ haben. وsehen قويّ ⟵ gesehen — من درس a1-14.",
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "word-ordering",
      instructionAr: "مراجعة شاملة: رتّب الجملة (ظرفٌ في الأوّل + فعلٌ منفصل)",
      tokens: ["Am", "Morgen", "stehe", "ich", "um", "sieben", "auf"],
      correctSentence: "Am Morgen stehe ich um sieben auf",
      explanation: "الظرف في الأوّل فانزاح الفاعل بعد الفعل (V2)، والبادئة auf في آخر الجملة.",
      errorType: "word-order",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة: أيّ صيغةٍ مهذّبة في المقهى؟",
      questionDe: "Im Café: Welcher Satz ist höflich?",
      options: [
        "Ich hätte gern einen Kaffee, bitte.",
        "Ich will einen Kaffee.",
        "Gib mir einen Kaffee.",
        "Kaffee!",
      ],
      correctIndex: 0,
      explanation: "hätte gern وmöchte هما صيغتا الطلب المهذّب، وwollen تبدو فظّةً في موقف خدمة.",
      errorType: "vocabulary",
    },
    {
      id: "e14",
      type: "error-correction",
      instructionAr: "مراجعة شاملة: صحّح الخطأ في الجملة",
      wrongSentence: "Am Sonntag ich war im Park.",
      wrongWord: "ich war",
      correctWord: "war ich",
      options: ["war ich", "ich war", "ich bin", "bin ich"],
      explanation: "الظرف احتلّ المركز الأوّل فوجب أن ينزاح الفاعل بعد الفعل — قانون V2.",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "matching",
      instructionAr: "مراجعة شاملة: طابق كلّ قاعدةٍ بمثالها",
      pairs: [
        { left: "النصب Akkusativ", right: "Ich esse einen Apfel." },
        { left: "فعلٌ منفصل", right: "Ich stehe um sieben auf." },
        { left: "الماضي المحكيّ", right: "Ich habe Deutsch gelernt." },
        { left: "الماضي الأول", right: "Ich war im Park." },
        { left: "النفي بـkein", right: "Ich bin kein Lehrer." },
        { left: "أداة ربط", right: "Es ist kalt, aber sonnig." },
      ],
      explanation: "ستّ قواعد من الاثنتي عشرة — راجع الجدول في الكتلة الأولى إن التبس عليك شيء.",
      errorType: "grammar",
    },
    {
      id: "e16",
      type: "fill-blank",
      instructionAr: "مراجعة شاملة: أكمل الفعل الناقص المناسب",
      template: "Der Arzt sagt, ich ___ mehr schlafen. · Ich ___ nächstes Jahr nach Deutschland ziehen. · Hier ___ man nicht rauchen.",
      blanks: [
        { correct: "soll", options: ["soll", "will", "kann", "muss"], errorType: "vocabulary" },
        { correct: "will", options: ["will", "soll", "darf", "muss"], errorType: "vocabulary" },
        { correct: "darf", options: ["darf", "kann", "will", "soll"], errorType: "vocabulary" },
      ],
      explanation: "sollen لأمر الغير · wollen للعزم · dürfen للإذن والمنع — الأفعال الناقصة الستّة مكتملة.",
      errorType: "vocabulary",
    },
    {
      id: "e17",
      type: "transformation",
      instructionAr: "مراجعة شاملة: احكِ يومك أمس في ثلاث جملٍ مربوطة",
      prompt: "Erzählen Sie in drei verbundenen Sätzen, was Sie gestern gemacht haben.",
      acceptedAnswers: [
        "Gestern bin ich früh aufgestanden und habe gefrühstückt. Dann bin ich zur Arbeit gefahren, aber ich war sehr müde. Am Abend habe ich meine Familie angerufen.",
      ],
      sampleAnswer: "Gestern bin ich früh aufgestanden und habe gefrühstückt. Dann bin ich zur Arbeit gefahren, aber ich war sehr müde. Am Abend habe ich meine Familie angerufen.",
      hint: "استعمل Perfekt بمساعدَيه، واربط بـund وdann وaber.",
      explanation: "النموذج يجمع تسع قواعد: Perfekt بمساعدين، فعلاً منفصلاً، ظرفاً في الأوّل مع انزياح الفاعل، ماضياً أوّلَ (war)، وثلاث أدوات ربط.",
      errorType: "grammar",
    },
    {
      id: "e18",
      type: "true-false",
      instructionAr: "مراجعة شاملة: اقرأ ثمّ احكم على العبارات",
      textDe: "Hallo! Ich heiße Leila. Ich komme aus Tunesien und wohne seit zwei Jahren in Hamburg. Ich arbeite als Krankenschwester im Krankenhaus. Am Wochenende bin ich gern zu Hause, aber manchmal gehe ich mit Freunden ins Kino. Letztes Wochenende habe ich einen guten Film gesehen.",
      statements: [
        { id: "s1", de: "Leila wohnt in Tunesien.", ar: "ليلى تسكن في تونس.", isTrue: false, whyAr: "هي من تونس لكنّها تسكن في هامبورغ منذ سنتين: «wohne seit zwei Jahren in Hamburg»." },
        { id: "s2", de: "Leila arbeitet im Krankenhaus.", ar: "ليلى تعمل في المستشفى.", isTrue: true, whyAr: "«Ich arbeite als Krankenschwester im Krankenhaus.»" },
        { id: "s3", de: "Leila geht jedes Wochenende ins Kino.", ar: "ليلى تذهب إلى السينما كلّ عطلة.", isTrue: false, whyAr: "النصّ يقول manchmal (أحياناً) لا jedes Wochenende — وكلمة «أحياناً» هي مفتاح السؤال." },
        { id: "s4", de: "Letztes Wochenende hat Leila einen Film gesehen.", ar: "شاهدت ليلى فيلماً عطلة الأسبوع الماضية.", isTrue: true, whyAr: "«Letztes Wochenende habe ich einen guten Film gesehen» — في Perfekt." },
      ],
      explanation: "نصٌّ على نسق Lesen Teil 1 في الامتحان: ابحث عن الكلمة المفتاح (seit, manchmal, letztes) لا عن كلّ كلمة.",
      errorType: "vocabulary",
    },
  ],

  /* 8) الأخطاء الشائعة والتريكات + لقطة ثقافية */
  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich kommen aus Tunesien.", right: "Ich komme aus Tunesien.", whyAr: "السلسلة الذهبية: مع ich -e دائماً." },
      { wrong: "Am Sonntag ich war im Park.", right: "Am Sonntag war ich im Park.", whyAr: "V2: الفعل في المركز الثاني حتى بعد الظرف." },
      { wrong: "Ich habe nicht Zeit.", right: "Ich habe keine Zeit.", whyAr: "kein مع الأسماء: keine Zeit." },
    ],
    eselsbruecken: [
      "الجملة الأم: «Ich heiße Sami, komme aus Tunesien, wohne in Tunis, lerne Deutsch, kann schwimmen, war im Park und hatte Zeit» — 8 قواعد في جملة واحدة.",
      "قبل اختبار الختم: أعد قراءة جداول الدروس العشرة (الدرس 1 حتى 12) — كل جدول = قاعدة واحدة.",
    ],
    culturalNote: {
      title: "شهادة A1 في ألمانيا",
      content:
        "شهادة «Start Deutsch 1» (Goethe) هي بوابة الاندماج الرسمية: تُطلب غالباً لتجديد الإقامة أو لمّ شمل الأسرة. تتكون من قراءة واستماع (45 دقيقة) ومحادثة (15 دقيقة). بعد إتمام هذه المراجعة، أنت قادر على اجتيازها بثقة!",
    },
  },

  /* 9) اختبار مصغّر */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "___ Buch (محايد)",
      options: ["das", "der", "die", "den"],
      correctIndex: 0,
      explanation: "das Buch — محايد.",
      errorType: "article",
    },
    {
      id: "m2",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الصحيح:",
      template: "Ich ___ aus Tunesien. (آتي) · Du ___ Deutsch. (تتعلم) · Er ___ Fußball. (يلعب)",
      blanks: [
        { correct: "komme", options: ["komme", "kommst", "kommt", "kommen"] },
        { correct: "lernst", options: ["lernst", "lerne", "lernt", "lernen"] },
        { correct: "spielt", options: ["spielt", "spiele", "spielst", "spielen"] },
      ],
      explanation: "السلسلة الذهبية: ich -e، du -st، er -t.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "multiple-choice",
      instructionAr: "اختر سؤال الاستفهام الصحيح:",
      questionDe: "___ wohnst du? — In Tunis.",
      questionAr: "أين تسكن؟ — في تونس.",
      options: ["Wo", "Woher", "Wohin", "Wer"],
      correctIndex: 0,
      explanation: "Wo = أين (مكان السكن).",
      errorType: "vocabulary",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل بالماضي الأول:",
      template: "Ich ___ gestern im Kino. (كنت) · Sie ___ viele Bücher. (كانت تملك)",
      blanks: [
        { correct: "war", options: ["war", "warst", "waren", "wart"] },
        { correct: "hatte", options: ["hatte", "hattest", "hatten", "hattet"] },
      ],
      explanation: "war من sein، hatte من haben — الماضي الأول.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة (نصب):",
      questionDe: "Ich kaufe ___ Apfel.",
      questionAr: "أشتري تفاحة.",
      options: ["einen", "ein", "eine", "einem"],
      correctIndex: 0,
      explanation: "Akkusativ المذكر: einen Apfel.",
      errorType: "case",
    },
  ],

  /* 10) بطاقات المراجعة */
  flashcards: [
    { id: "fc1", de: "die Wiederholung", ar: "المراجعة", example: "Die Wiederholung ist wichtig.", exampleAr: "المراجعة مهمة.", level: "A1" },
    { id: "fc2", de: "der Satz", ar: "الجملة", example: "Der Satz ist richtig.", exampleAr: "الجملة صحيحة.", level: "A1" },
    { id: "fc3", de: "kombinieren", ar: "يدمج/يجمع", example: "Ich kombiniere die Regeln.", exampleAr: "أدمج القواعد.", level: "A1" },
    { id: "fc4", de: "die Prüfung", ar: "الامتحان", example: "Die Prüfung ist nicht schwer.", exampleAr: "الامتحان ليس صعباً.", level: "A1" },
    { id: "fc5", de: "der Artikel", ar: "أداة التعريف (der/die/das)", example: "Man muss den Artikel zusammen mit dem Wort lernen.", exampleAr: "على المرء أن يتعلّم الأداة مع الكلمة.", level: "A1" },
    { id: "fc6", de: "bereit sein", ar: "يكون مستعداً", example: "Ich bin bereit für A2.", exampleAr: "أنا مستعد لـ A2.", level: "A1" },
    { id: "fc7", de: "alles klar", ar: "كل شيء واضح", example: "Alles klar, ich verstehe.", exampleAr: "كل شيء واضح، أفهم.", level: "A1" },
    { id: "fc8", de: "das Gefühl", ar: "الشعور، الإحساس", example: "Das war ein schönes Gefühl.", exampleAr: "كان ذلك شعوراً جميلاً.", level: "A1" },
    { id: "fc9", de: "die Verkäuferin", ar: "البائعة", example: "Die Verkäuferin hat mich verstanden.", exampleAr: "فهمتني البائعة.", level: "A1" },
    { id: "fc10", de: "der Kellner", ar: "النادل", example: "Der Kellner hat gelacht.", exampleAr: "ضحك النادل.", level: "A1" },
    { id: "fc11", de: "der Fehler", ar: "الخطأ", example: "Ich habe viele Fehler gemacht.", exampleAr: "ارتكبتُ أخطاءً كثيرة.", level: "A1" },
    { id: "fc12", de: "wiederholen", ar: "يُعيد، يراجع", example: "Können Sie das bitte wiederholen?", exampleAr: "أيمكنك الإعادة من فضلك؟", level: "A1" },
    { id: "fc13", de: "Schritt für Schritt", ar: "خطوةً خطوة", example: "Der Weg ist lang, aber ich gehe ihn Schritt für Schritt.", exampleAr: "الطريق طويل لكنّي أمشيه خطوةً خطوة.", level: "A1" },
    { id: "fc14", de: "anfangen (hat angefangen)", ar: "يبدأ", example: "Ich habe einen Deutschkurs angefangen.", exampleAr: "بدأتُ دورةً في الألمانية.", level: "A1" },
    { id: "fc15", de: "bestellen (hat bestellt)", ar: "يطلب (في مطعم)", example: "Ich möchte einen Kaffee bestellen.", exampleAr: "أودّ أن أطلب قهوة.", level: "A1" },
    { id: "fc16", de: "nervös", ar: "متوتّر، قلق", example: "Ich bin vor der Prüfung nervös.", exampleAr: "أنا متوتّر قبل الامتحان.", level: "A1" },
    { id: "fc17", de: "hätte gern", ar: "أودّ (صيغة طلبٍ مهذّبة)", example: "Ich hätte gern einen Tee, bitte.", exampleAr: "أودّ شاياً من فضلك.", level: "A1" },
    { id: "fc18", de: "gedacht (denken)", ar: "فكَّر", example: "Ich habe an dich gedacht.", exampleAr: "فكّرتُ فيك.", level: "A1" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-13-1", type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صوتية ألمانية كاملة بالعربية",
      sourceDe: "Hallo Karim! Ich bin Anna. Ich lerne Deutsch und komme aus Berlin. Am Wochenende besuche ich meine Familie. Viele Grüße, Anna.",
      taskAr: "لخّص الرسالة بالعربية لصديق لا يفهم الألمانية: من المتحدثة، من أين، وماذا ستفعل في نهاية الأسبوع.",
      modelAnswerAr: "«الرسالة من آنا، تتعلم الألمانية وهي من برلين. في نهاية الأسبوع ستزور عائلتها.»",
      keyPointsAr: ["نقلت اسم المتحدثة (آنا)", "ذكرت أنها من برلين", "نقلت زيارة العائلة في نهاية الأسبوع"],
    },
  ],
      interaction: [
    {
      id: "int-a1-13-1",
      scenarioAr: "محادثة شاملة: لقاء، طعام، تسوق.",
      scenarioDe: "Ein umfassendes Gespräch: Treffen, Essen, Einkaufen.",
      strategyAr: "الاستراتيجية: دمج مهارات A1 في محادثة حقيقية.",
      rounds: [
        {
          speakerDe: "Hallo! Schön dich zu sehen. Wie geht's?",
          speakerAr: "مرحباً! سعيد برؤيتك. كيف حالك؟",
          options: [
            { de: "Danke, mir geht es gut! Und dir?", ar: "شكراً، أنا بخير! وأنت؟", best: true, replyDe: "Auch gut, danke. Hast du Hunger?", replyAr: "أنا بخير أيضاً. هل أنت جائع؟" },
            { de: "Ich bin ein Buch.", ar: "أنا كتاب.", best: false, replyDe: "Du bist ein Buch? Sehr witzig!", replyAr: "أنت كتاب؟ مضحك جداً!" },
          ],
        },
        {
          speakerDe: "Hast du Hunger? Wir können etwas essen gehen.",
          speakerAr: "هل أنت جائع؟ يمكننا الذهاب لتناول الطعام.",
          options: [
            { de: "Ja, gern! Ich hätte gern ein Schnitzel.", ar: "نعم بكل سرور! أريد شنيتزل.", best: true, replyDe: "Gute Wahl! Und danach einkaufen?", replyAr: "اختيار جيد! وبعدها التسوق؟" },
            { de: "Nein, ich esse nie.", ar: "لا، لا آكل أبداً.", best: false, replyDe: "Jeder isst! Komm schon.", replyAr: "الجميع يأكل! هيا." },
          ],
        },
      ],
    },
  ],

};