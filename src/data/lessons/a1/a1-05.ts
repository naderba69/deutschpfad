import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-05: الروتين اليومي والوقت
 * — الأفعال المنفصلة (trennbare Verben) + الساعة وأوقات اليوم
 */
export const lessonA105: Lesson = {
  id: "a1-05",
  unitId: "a1-05",
  level: "A1",
  order: 1,
  titleDe: "Mein Tag",
  titleAr: "الحياة اليومية والروتين",
  duration: 30,
  summary:
    "الروتين اليومي، الأفعال المنفصلة (aufstehen, fernsehen...)، قراءة الساعة، وأوقات اليوم (am Morgen, am Abend)، والمدى الزمني von … bis (من … إلى).",

  lernziele: [
    { id: "z1", de: "Ich kann meinen Tagesablauf beschreiben.", ar: "أن أصف يومي: أستيقظ، أتناول الفطور، أذهب إلى العمل..." },
    { id: "z2", de: "Ich kann trennbare Verben benutzen.", ar: "أن أستخدم الأفعال المنفصلة (aufstehen, fernsehen) بشكل صحيح." },
    { id: "z3", de: "Ich kann die Uhrzeit sagen.", ar: "أن أقول الوقت بالألمانية (Es ist acht Uhr)." },
    { id: "z4", de: "Ich kann sagen: am Morgen, am Nachmittag, am Abend.", ar: "أن أحدد أوقات اليوم (صباحاً، ظهراً، مساءً)." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "فكر: في العربية نقول «أستيقظ» كفعل واحد. لكن الألمانية تقول: aufstehen = auf (فوق) + stehen (يقف) — أي «يقف فوق»! والأغرب: عند التصريف يذهب الجزءان إلى مكانين مختلفين في الجملة! جرّب تخمين أين؟",
    motivatingQuestionDe: "Wann stehst du auf?",
    contextAr:
      "نرافق اليوم سامي في يومه الكامل من الاستيقاظ إلى النوم، ونكتشف ظاهرة الأفعال المنفصلة — إحدى أكثر عادات الألمانية إدهاشاً للعربي.",
    contextDe: "Mein Tag beginnt um sieben Uhr.",
    connectionToPreviousAr: "تعلمت sein وhaben وتصريف الأفعال المنتظمة. اليوم أفعال «منفصلة» تغيّر مكان البادئة — وكلها أفعال يومية أساسية.",
    activateVocabulary: [
      { de: "aufstehen", ar: "يستيقظ/يقف" },
      { de: "der Morgen", ar: "الصباح" },
      { de: "der Abend", ar: "المساء" },
      { de: "die Uhr", ar: "الساعة" },
      { de: "arbeiten", ar: "يعمل" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-03 — الطعام والشراب): كيف تطلب شيئاً بأدب؟",
      questionDe: "Was sagt man im Café, wenn man etwas möchte?",
      questionAr: "ماذا تقول في المقهى عندما تريد شيئاً؟",
      options: ["Ich hätte gern einen Kaffee.", "Ich bin einen Kaffee.", "Ich möchte einen Kaffee bin.", "Ich habe gern Kaffee sein."],
      correctIndex: 0,
      explanation: "Ich hätte gern + نصب (من درس a1-03): الطلب المهذب.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-04 — السكن والمنزل): أين يقع السرير؟",
      questionDe: "Wo steht das Bett?",
      questionAr: "أين يقع السرير؟",
      options: ["im Schlafzimmer", "in der Küche", "im Bad", "im Wohnzimmer"],
      correctIndex: 0,
      explanation: "das Schlafzimmer = غرفة النوم (من درس a1-04 السكن).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): أكمل تصريف sein",
      template: "Ich ___ aus Tunesien. (sein)",
      blanks: [{ correct: "bin", options: ["bin", "bist", "ist", "sind"] }],
      explanation: "ich bin (من درس a1-01): Ich bin aus Tunesien.",
      errorType: "conjugation",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "الأفعال المنفصلة (Trennbare Verben)",
      titleDe: "Trennbare Verben: aufstehen, fernsehen, einkaufen",
      explanationAr:
        "الفعل المنفصل (trennbares Verb) من أغرب ما في الألمانية على المتعلّم العربي، وهو في الوقت نفسه من أكثرها انتظاماً — بشرط أن تفهم آليّته لا أن تحفظ أمثلته.\n\n**ما هو؟** فعلٌ مركّب من **بادئة** (Präfix) + **فعل أساسي**، والبادئة تحمل النبر الصوتي وتغيّر المعنى:\n• **auf**stehen (auf = فوق + stehen = يقف) ⟵ يستيقظ / ينهض\n• **fern**sehen (fern = بعيد + sehen = يرى) ⟵ يشاهد التلفاز، حرفياً «يرى بعيداً»\n• **ein**kaufen (ein = داخل + kaufen = يشتري) ⟵ يتسوّق\n• **an**fangen · **auf**räumen · **mit**kommen · **ab**holen · **an**rufen · **aus**gehen\n\n**القاعدة البنيوية — وهي المفاجأة:**\nفي الجملة الخبرية البسيطة **تنفصل البادئة عن فعلها وتُقذف إلى آخر الجملة**، بينما يُصرَّف الفعل الأساسي في المركز الثاني:\n«Ich **stehe** um sieben Uhr **auf**.»\n«Wir **sehen** jeden Abend zwei Stunden **fern**.»\nوهذا هو **قوس الجملة (Satzklammer)** نفسه الذي رأيته مع الأفعال الناقصة: عنصرٌ مصرَّف في المركز الثاني، وعنصرٌ غير مصرَّف في آخر الجملة، وبينهما كلّ التفاصيل. فالألمانية تحبّ أن تُبقي المستمع منتظراً إلى النهاية.\n\n**ومتى لا تنفصل؟** في ثلاث حالات تعود البادئة إلى مكانها:\n1. مع فعلٍ ناقص، إذ يبقى الفعل المنفصل مصدراً كاملاً في الآخر: «Ich **muss** früh **aufstehen**.»\n2. في الجملة التابعة (بعد weil, dass, wenn): «…, weil ich früh **aufstehe**.»\n3. مع zu، فتُحشر zu بين البادئة والفعل: «Ich habe keine Lust **aufzustehen**.»\n\n**كيف تعرف أنّ الفعل منفصل؟ — بالنبر الصوتي.**\nهذه هي القاعدة الفاصلة، ولا يذكرها كثيرٌ من الكتب: **البادئة المنفصلة منبورة، وغير المنفصلة غير منبورة.**\n• **ÁUF**stehen ⟵ النبر على البادئة ⟵ منفصل.\n• ver**STÉ**hen (يفهم) ⟵ النبر على الجذر ⟵ **غير منفصل**، فتقول Ich verstehe das بلا فصل.\nوالبوادئ غير المنفصلة سبعٌ يجب حفظها: **be‑, ge‑, er‑, ver‑, zer‑, ent‑, emp‑** (ونشيدها المشهور: «be‑ge‑er‑ver‑zer‑ent‑emp»). وما عداها منفصل: auf, an, aus, ein, mit, ab, zu, vor, nach, her, hin, fern, weg, zurück.\nوثمّة طائفة ثالثة **متذبذبة** (über, unter, um, durch): تنفصل بالمعنى الحرفي ولا تنفصل بالمجازي — «Er setzt über» (يعبر بالقارب) مقابل «Er übersetzt» (يترجم). وهذه من مواضيع B1، فلا تشغل بها بالك اليوم.\n\n**ملاحظة معجمية مهمّة:** في المعجم يُكتب الفعل موصولاً (aufstehen)، وفي بعض المعاجم بعلامة فاصلة (auf|stehen) للدلالة على الانفصال. فتعوّد أن تنظر إلى هذه العلامة عند حفظ أيّ فعلٍ جديد.",
      whyAr:
        "لأنّ الأفعال المنفصلة تمثّل **نحو ثلث الأفعال الألمانية المستعملة يومياً**، ولأنّها تحكم وصف الروتين بالكامل: لا يمكنك أن تقول «أستيقظ» أو «أتسوّق» أو «أشاهد التلفاز» أو «أتّصل» أو «يبدأ الدرس» دون فعلٍ منفصل. ثمّ إنّها تدرّبك على **أهمّ عادةٍ ذهنية في الألمانية**: أن تحتفظ بجزءٍ من المعنى معلّقاً إلى آخر الجملة. فالألماني حين يسمع «Ich stehe…» لا يعرف بعدُ ماذا تفعل — أتقف؟ أتستيقظ؟ أتتحمّل؟ — ولا يحسم إلا حين تصل إلى آخر كلمة. وهذا يفسّر لماذا يقاطع الألمان بعضهم أقلّ ممّا يفعل غيرهم: بنية لغتهم تفرض الإصغاء إلى النهاية. ومَن اعتاد هذا اليوم مع البوادئ سيجد قوس الجملة في الماضي التامّ والمستقبل والناقص أمراً مألوفاً — فالبنية واحدة والمحتوى يتغيّر.",
      table: {
        title: "أشهر الأفعال المنفصلة اليومية",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "aufstehen", cells: ["يستيقظ", "Ich stehe um 7 auf."] },
          { label: "fernsehen", cells: ["يشاهد التلفاز", "Wir sehen abends fern."] },
          { label: "einkaufen", cells: ["يتسوق", "Sie kauft heute ein."] },
          { label: "anfangen", cells: ["يبدأ", "Der Kurs fängt um 9 an."] },
          { label: "mitkommen", cells: ["يأتي معاً", "Kommst du mit?"] },
          { label: "aufräumen", cells: ["يرتب", "Ich räume das Zimmer auf."] },
        ],
      },
      examples: [
        {"de": "Ich stehe jeden Tag um sieben Uhr auf.", "ar": "أستيقظ كلّ يوم في السابعة. (البادئة في الآخر)"},
        {"de": "Wir sehen abends zwei Stunden fern.", "ar": "نشاهد التلفاز ساعتين مساءً."},
        {"de": "Sie kauft am Samstag im Supermarkt ein.", "ar": "تتسوّق يوم السبت في السوبرماركت. (البادئة ein بعد كلّ التفاصيل)"},
        {"de": "Der Kurs fängt um neun Uhr an.", "ar": "يبدأ الدرس في التاسعة."},
        {"de": "Ich muss morgen früh aufstehen.", "ar": "عليّ أن أستيقظ باكراً غداً. (مع فعل ناقص ⟵ لا انفصال)"},
        {"de": "Rufst du mich heute Abend an?", "ar": "أتتّصل بي هذا المساء؟ (في السؤال ينفصل أيضاً)"},
        {"de": "Ich verstehe die Frage nicht.", "ar": "لا أفهم السؤال. (ver‑ بادئة غير منفصلة ⟵ لا تتحرّك)"},
        {"de": "Am Sonntag räume ich meine Wohnung auf.", "ar": "أرتّب شقّتي يوم الأحد."},
      ],
      comparisonWithArabic:
        "**١. العربية تسبق ولا تفصل.** العربية تملك نظاماً شبيهاً في **الاشتقاق بالزيادة**: كتب ⟵ اكتتب، خرج ⟵ استخرج، علم ⟵ استعلم. والزيادة تغيّر المعنى تماماً كالبادئة الألمانية. **لكنّ الزيادة العربية لا تنفصل عن الفعل أبداً** — لا تقول «استُ‑ خرج ‑خرج». فالمفاجأة للعربي ليست في وجود البادئة بل في **انفصالها وسفرها إلى آخر الجملة**.\n\n**٢. العربية تقدّم الفعل، والألمانية تؤخّر نصفه.** «أستيقظ في السابعة» — الفعل كاملٌ في أوّل الجملة. و«Ich stehe um sieben auf» — نصف الفعل في الأوّل ونصفه في الآخر. فالعربي يقول لاشعورياً «Ich aufstehe um sieben» محافظاً على وحدة الفعل، وهي أشيع خطأٍ في هذا الباب.\n\n**٣. مصيدة معاكسة: الفصل حيث لا فصل.** بعد أن يتعلّم المتعلّم القاعدة يعمّمها فيقول «Ich stehe ver das» أو «Ich stehe be». والعلاج هو معيار النبر: إن كان النبر على البادئة انفصلت، وإن كان على الجذر لم تنفصل. ونطق الكلمة بصوتٍ عالٍ يحسم المسألة فوراً — وهذا سببٌ عملي لتعلّم النطق مبكّراً.\n\n**٤. المعنى غير قابل للاشتقاق دائماً.** «fernsehen» = «يرى بعيداً» ⟵ يشاهد التلفاز. والعلاقة شفّافة بعد الشرح لكنّها غير متوقّعة قبله، تماماً كما أنّ «استخرج» في العربية لا تُفهم من «خرج» وحدها لمن لا يعرف باب الاستفعال. فلا تترجم البادئة حرفياً، بل احفظ الفعل المركّب وحدةً معجمية واحدة — مع ملاحظة معناها الحرفي لأنّه يعين على التذكّر.\n\n**٥. السؤال يقذف البادئة أيضاً.** «Stehst du früh auf?» — الفعل في الأوّل والبادئة في الآخر. والعربية تقلب بأداة استفهام لا بترتيب («هل تستيقظ مبكراً؟»). فانتبه: قاعدة الانفصال تعمل في السؤال والأمر والخبر جميعاً.",
      eselsbruecke:
        "**«البادئة تسافر إلى آخر الجملة، والفعل يبقى في مقعده الثاني»** — تخيّلها حقيبةً تُرسَل مقدَّماً إلى الوجهة. وللتمييز: **«ما نبرتَه انفصل، وما لم تنبره التصق»**. وللبوادئ غير المنفصلة احفظ النشيد: **be‑ge‑er‑ver‑zer‑ent‑emp** — سبعٌ لا تنفصل أبداً، وما عداها ينفصل.",
      commonMistakes: [
        {"wrong": "Ich aufstehe um sieben.", "right": "Ich stehe um sieben auf.", "whyAr": "الخطأ الأوّل والأشيع: إبقاء الفعل موحّداً كما في العربية. لكنّ البادئة المنفصلة تُقذف إلى آخر الجملة والفعل يُصرَّف وحده في المركز الثاني. تخيّل أنّ الفعل ينشقّ نصفين والنصف الثاني يذهب إلى النهاية."},
        {"wrong": "Ich stehe auf um sieben.", "right": "Ich stehe um sieben auf.", "whyAr": "فُصلت البادئة لكنّها لم تُرسَل بعيداً بما يكفي. والقاعدة أنّها تحتلّ **آخر** موضعٍ في الجملة، بعد كلّ التفاصيل من زمانٍ ومكانٍ ومفعول. فكلّما طالت الجملة ابتعدت البادئة."},
        {"wrong": "Ich verstehe das auf.", "right": "Ich verstehe das.", "whyAr": "إفراطٌ في تطبيق القاعدة على بادئةٍ غير منفصلة. و ver‑ من السبع التي لا تنفصل أبداً (be‑ge‑er‑ver‑zer‑ent‑emp)، وعلامتها أنّ النبر يقع على الجذر لا عليها: ver‑STE‑hen."},
        {"wrong": "Ich muss früh stehe auf.", "right": "Ich muss früh aufstehen.", "whyAr": "خلط بنيتين: مع الفعل الناقص يبقى الفعل المنفصل **مصدراً موحّداً** في آخر الجملة، فلا يُصرَّف ولا ينفصل. والقاعدة العامّة: موضع آخر الجملة محجوزٌ لعنصرٍ واحد فقط، فإن شغله المصدر لم تبقَ فيه البادئة منفردةً."},
      ],
      relatedRuleComparison: {
        "title": "قوس الجملة (Satzklammer): البنية التي تحكم الألمانية كلّها",
        "content": "ما تراه اليوم مع الأفعال المنفصلة ليس قاعدةً معزولة بل **النمط البنيوي الأساسي للجملة الألمانية**. القاعدة: عنصرٌ **مصرَّف** في المركز الثاني، وعنصرٌ **غير مصرَّف** في آخر الجملة، وبينهما «حشو» (Mittelfeld) فيه الزمان والمكان والمفعول. وستراها في أربعة سياقاتٍ على الأقلّ: (١) الفعل المنفصل — Ich **stehe** um sieben **auf**. (٢) الفعل الناقص — Ich **muss** um sieben **aufstehen**. (٣) الماضي التامّ — Ich **bin** um sieben **aufgestanden**. (٤) المستقبل — Ich **werde** um sieben **aufstehen**. أربع قواعد مختلفة تماماً في المعنى، وبنيةٌ واحدة في الشكل. ولهذا فإنّ إتقانك للفعل المنفصل اليوم هو في الحقيقة إتقانٌ مسبق لثلاث قواعد قادمة — استثمرْه ولا تعدّه عبئاً."
      },
    },
    {
      id: "t2",
      titleAr: "قراءة الساعة وأوقات اليوم",
      titleDe: "Die Uhrzeit und die Tageszeiten",
      explanationAr:
        "قراءة الساعة بالألمانية بابان لا باب واحد، ولا بدّ من إتقان الاثنين لأنّ لكلٍّ منهما ميدانه.\n\n**أوّلاً: الصيغة الرسمية (offizielle Uhrzeit) — نظام ٢٤ ساعة.**\nتُستعمل في القطارات والمطارات والإذاعة والمواعيد المكتوبة والدعوات الرسمية:\n• 8:00 ⟵ **acht Uhr**\n• 14:30 ⟵ **vierzehn Uhr dreißig**\n• 20:45 ⟵ **zwanzig Uhr fünfundvierzig**\nوالبنية ثابتة: الساعة + Uhr + الدقائق، والأرقام تُقرأ كما هي. وهذه الصيغة **لا لبس فيها إطلاقاً**، ولهذا اعتمدتها المواصلات.\n\n**ثانياً: الصيغة اليومية (umgangssprachlich) — نظام ١٢ ساعة.**\nوهي التي يتكلّم بها الناس، وفيها ثلاث أدوات:\n• **nach** (بعد) للدقائق ١ إلى ٢٠: «fünf **nach** acht» = ٨:٠٥ · «zwanzig **nach** acht» = ٨:٢٠\n• **vor** (قبل) للدقائق ٤٠ إلى ٥٩: «zwanzig **vor** neun» = ٨:٤٠ · «fünf **vor** neun» = ٨:٥٥\n• **Viertel** (ربع): «Viertel nach acht» = ٨:١٥ · «Viertel vor neun» = ٨:٤٥\n\n**وهنا المصيدة الكبرى التي يقع فيها كلّ متعلّمٍ عربي: كلمة halb.**\n**«halb neun» تعني ٨:٣٠ — لا ٩:٣٠!**\nوالسبب منطقيّ لا اعتباطي: الألماني **يعدّ نحو الساعة القادمة لا من الماضية**. فـhalb neun تعني حرفياً «نصفُ الطريق إلى التاسعة» — أي أنّ نصف الساعة التاسعة قد انقضى… لا، بل أنّ نصف المسافة إلى التاسعة قد قُطع. فالمرجع أمامك لا خلفك. والعربية عكسها تماماً: «الثامنة والنصف» تنطلق من الثامنة **الماضية** وتضيف. فاللغتان تنظران في اتّجاهين متعاكسين، وهذا سبب الخطأ لا ضعف الحفظ.\nوالقاعدة التصحيحية العملية: **حين تسمع halb، اطرح ساعةً واحدة من العدد المذكور**. halb sieben = ٦:٣٠ · halb zwölf = ١١:٣٠.\n\n**ثالثاً: أوقات اليوم وأدواتها.**\nder Morgen (الصباح ٦–١٠) · der Vormittag (قبل الظهر ١٠–١٢) · der Mittag (الظهر ١٢–١٤) · der Nachmittag (بعد الظهر ١٤–١٨) · der Abend (المساء ١٨–٢٢) · **die** Nacht (الليل — المؤنّثة الوحيدة!).\nوكلّها تأخذ **am** (= an + dem): am Morgen, am Vormittag, am Abend… **إلا الليل** فيأخذ **in der Nacht** لأنّه مؤنّث فيتغيّر الاندماج. وهذا الاستثناء الوحيد يستحقّ الحفظ منفرداً.\n\n**رابعاً: أدوات السؤال والمدى.**\n• **Wie spät ist es?** أو **Wie viel Uhr ist es?** ⟵ كم الساعة؟\n• الجواب يبدأ دائماً بـ **Es ist…**\n• **Um** + ساعة = في تمام الساعة: «Der Kurs beginnt **um** neun.»\n• **von … bis …** = من… إلى…: «Ich arbeite **von** acht **bis** sechzehn Uhr.» وحذارِ من zu مكان bis — فهي خطأ.\n• **ab** = ابتداءً من: «Ab Montag arbeite ich.»\n• **gegen** = نحو/تقريباً: «Ich komme gegen acht.»",
      whyAr:
        "لأنّ الوقت هو **العصب المنظِّم للحياة الألمانية**، ولا مبالغة في ذلك: المواعيد تُضبط بالدقيقة، والقطار المتأخّر خمس دقائق يُعتذر عنه بإعلانٍ رسمي، والوصول متأخّراً إلى موعدٍ شخصي يُعدّ قلّة احترام. فمَن لا يفهم الوقت لا يعيش في ألمانيا عيشاً منتظماً — يفوته القطار، ويخطئ موعد الطبيب، ويصل إلى الدرس في غير وقته. وفي امتحان Goethe A1 يظهر الوقت في **قسم الاستماع** تحديداً: إعلانات محطّات ومواعيد ومكالمات هاتفية، وكلّها بالصيغة الرسمية غالباً. لكنّ التحدّي الحقيقي في **الفهم السمعي للصيغة اليومية**: حين يقول لك زميلك «Treffen wir uns um halb acht?» فعليك أن تعرف فوراً — وبلا حساب — أنّه يقصد السابعة والنصف لا الثامنة والنصف. وخطأ ساعةٍ كاملة في موعدٍ ليس خطأً لغوياً بل اجتماعياً.",
      table: {
        title: "أوقات اليوم والأمثلة",
        columns: ["الوقت", "العربية", "مثال"],
        rows: [
          { label: "am Morgen", cells: ["صباحاً", "Ich stehe am Morgen auf."] },
          { label: "am Vormittag", cells: ["قبل الظهر", "Wir arbeiten am Vormittag."] },
          { label: "am Mittag", cells: ["ظهراً", "Ich esse am Mittag."] },
          { label: "am Nachmittag", cells: ["بعد الظهر", "Wir lernen am Nachmittag."] },
          { label: "am Abend", cells: ["مساءً", "Sie sieht am Abend fern."] },
          { label: "in der Nacht", cells: ["ليلاً", "Ich schlafe in der Nacht."] },
        ],
      },
      examples: [
        {"de": "Wie spät ist es? — Es ist acht Uhr.", "ar": "كم الساعة؟ — الثامنة."},
        {"de": "Es ist halb neun.", "ar": "الساعة الثامنة والنصف. (لا التاسعة والنصف!)"},
        {"de": "Es ist Viertel vor sieben.", "ar": "السابعة إلا ربعاً، أي ٦:٤٥."},
        {"de": "Der Zug fährt um sechzehn Uhr zwanzig.", "ar": "يغادر القطار في ١٦:٢٠. (صيغة رسمية)"},
        {"de": "Am Morgen trinke ich Kaffee, am Abend Tee.", "ar": "أشرب القهوة صباحاً والشاي مساءً."},
        {"de": "In der Nacht schlafe ich schlecht.", "ar": "أنام سيّئاً في الليل. (الاستثناء الوحيد: in der)"},
        {"de": "Ich arbeite von acht bis sechzehn Uhr.", "ar": "أعمل من الثامنة إلى الرابعة عصراً."},
        {"de": "Ich komme gegen halb acht, ist das okay?", "ar": "آتي نحو السابعة والنصف، أيناسبك؟"},
      ],
      comparisonWithArabic:
        "**١. اتّجاه العدّ معكوس — وهذا جوهر المشكلة.** العربية تعدّ **من** الساعة الماضية: «الثامنة والنصف» = ٨ + ٣٠ دقيقة. والألمانية في halb تعدّ **نحو** الساعة القادمة: halb neun = نصف الطريق إلى التاسعة = ٨:٣٠. فليست مسألة حفظٍ بل **إعادة توجيهٍ للبوصلة الذهنية**. والتدريب الناجع: قل بصوتٍ عالٍ «halb neun ⟵ اطرح واحداً ⟵ ٨:٣٠» عشرين مرّة حتّى تصير تلقائية.\n\n**٢. الربع والنصف بأداتين مختلفتين.** العربية تستعمل واو العطف لكلّ شيء: «والربع»، «والنصف»، «إلا ربعاً». والألمانية تستعمل ثلاث كلمات مختلفة: nach للإضافة، و vor للطرح، و halb للنصف بمنطقٍ مستقلّ. فثلاث آلياتٍ مقابل واحدة.\n\n**٣. نظام ٢٤ ساعة مألوف جزئياً.** العربية الرسمية تستعمل «الرابعة عصراً» لا «السادسة عشرة» في الكلام، لكنّ الجداول المكتوبة تستعمل الأرقام. والألمانية تستعمل ٢٤ ساعة **في الكلام أيضاً** حين يكون السياق رسمياً: «Der Zug fährt um sechzehn Uhr zwanzig». فتعوّد سماع الأرقام الكبيرة منطوقة.\n\n**٤. am للأوقات وليس in.** العربية تقول «في الصباح»، فيترجم العربي in der Morgen — وهي خطأ مضاعف: الأداة خاطئة (in بدل an) والحالة خاطئة أيضاً. والصواب **am Morgen**. أمّا الليل فيشذّ: **in der Nacht** — لأنّ die Nacht مؤنّثة.\n\n**٥. bis لا zu للمدى.** العربية تقول «من… إلى…» بحرفٍ واحد للغاية. والألمانية تخصّص **bis** للمدى الزمني والمكاني (von acht bis sechzehn Uhr)، و **zu** للاتّجاه نحو شخصٍ أو مكان (ich gehe zum Arzt). فالخلط بينهما شائع ومسموع.\n\n**٦. تسمية أجزاء اليوم أدقّ في الألمانية.** العربية تكتفي غالباً بصباح/ظهر/مساء/ليل. والألمانية تفصل Vormittag و Nachmittag تفصيلاً واضحاً، وهما مستعملان يومياً لا في الكتب فقط.",
      eselsbruecke:
        "**«halb يعدّ إلى الأمام: اطرح ساعة»** — halb neun = ٨:٣٠. تخيّل عقرباً يتسلّق نحو الرقم القادم فيبلغ نصف الطريق. ولأوقات اليوم: **«كلّها am… إلا الليل فهو in der Nacht»** — والسبب أنّ الليل مؤنّث. وللمدى: **von … bis …** لا zu، و**bis نهاية، و zu وجهة**.",
      commonMistakes: [
        {"wrong": "halb neun = 9:30", "right": "halb neun = 8:30", "whyAr": "أخطر خطأٍ عملي في الدرس لأنّ نتيجته موعدٌ ضائع بساعةٍ كاملة. الألمانية تعدّ نحو الساعة القادمة: halb neun = نصف الطريق إلى التاسعة. والقاعدة التصحيحية: كلّما سمعت halb اطرح واحداً من العدد المذكور."},
        {"wrong": "in der Morgen", "right": "am Morgen", "whyAr": "ترجمة حرفية لـ«في الصباح». والصواب am (= an + dem) لأنّ der Morgen مذكّر مجرور. وتنطبق على Vormittag و Mittag و Nachmittag و Abend، ويشذّ الليل وحده: in der Nacht لأنّ die Nacht مؤنّثة."},
        {"wrong": "Ich arbeite von acht zu sechzehn Uhr.", "right": "Ich arbeite von acht bis sechzehn Uhr.", "whyAr": "خلط zu بـ bis. والمدى الزمني أو المكاني يُصاغ بـ von … bis … حصراً. أمّا zu فللاتّجاه نحو شخصٍ أو مؤسّسة: ich gehe zum Arzt, zur Schule."},
        {"wrong": "Es ist acht dreißig Uhr.", "right": "Es ist acht Uhr dreißig. / Es ist halb neun.", "whyAr": "خطأ في موضع كلمة Uhr. والبنية الرسمية ثابتة: العدد + **Uhr** + الدقائق، فتقول acht Uhr dreißig. أمّا في الصيغة اليومية فتسقط Uhr كلّياً: halb neun."},
      ],
      relatedRuleComparison: {
        "title": "am · um · in · von…bis — أدوات الزمن الأربع وكيف لا تخلطها",
        "content": "الألمانية توزّع حروف الزمن بحسب **حجم الوحدة الزمنية**، والتوزيع منتظم تماماً: **um** للساعة الدقيقة (um acht Uhr, um halb neun) — تخيّلها عقرباً يشير إلى نقطة. **am** لأجزاء اليوم وأيّام الأسبوع والتواريخ (am Morgen, am Montag, am 3. Mai) — والاستثناء الوحيد: in der Nacht. **im** للشهور والفصول (im Januar, im Sommer). **von … bis …** للمدى (von acht bis sechzehn Uhr, von Montag bis Freitag). ثمّ حروفٌ أدقّ: **ab** = ابتداءً من (ab morgen)، و **seit** = منذ (seit zwei Jahren، للماضي المستمرّ)، و **gegen** = نحو/تقريباً (gegen acht)، و **nach/vor** = بعد/قبل (nach dem Essen). ولاحظ التدرّج الجميل: كلّما كبرت الوحدة الزمنية انتقلت من um إلى am إلى im. وثلاث كلماتٍ تُستعمل **بلا أيّ حرف**: heute, morgen, gestern — فلا تقل «am heute»."
      },
    },
    {
      id: "t3",
      titleAr: "كم مرّة؟ ظروف التكرار وموضعها في الجملة",
      titleDe: "Wie oft? Häufigkeitsadverbien",
      explanationAr:
        "وصف الروتين لا يكتمل بذكر الأفعال والأوقات، بل يحتاج إلى **التواتر**: كم مرّة؟ (Wie oft?)\n\n**سُلَّم التكرار من الأعلى إلى الصفر:**\n**immer** (دائماً، ١٠٠٪) ← **fast immer** (تقريباً دائماً) ← **meistens** (غالباً، ٨٠٪) ← **oft** (كثيراً، ٦٠٪) ← **manchmal** (أحياناً، ٤٠٪) ← **selten** (نادراً، ٢٠٪) ← **fast nie** ← **nie** (أبداً، صفر).\nوإلى جانبها تعبيراتٌ عدديّة دقيقة: **einmal / zweimal / dreimal am Tag** (مرّة/مرّتين/ثلاثاً يومياً) · **jeden Tag** (كلّ يوم) · **jede Woche** · **montags** (كلّ اثنين — لاحظ الحرف الصغير والـ‑s!).\n\n**القاعدة الأولى — موضع الظرف:**\nالموضع الطبيعي هو **مباشرةً بعد الفعل المصرَّف**:\n«Ich **stehe immer** früh auf.» · «Er **sieht selten** fern.»\nوإن كان في الجملة مفعولٌ ضميري سبق الظرف: «Ich rufe **dich oft** an.»\n\n**القاعدة الثانية — الظرف في المركز الأوّل، وهنا الانقلاب:**\nيجوز تقديم الظرف إلى أوّل الجملة للتأكيد، لكنّ ذلك **يجبر الفاعل على الانزياح بعد الفعل**:\n• Ich sehe manchmal fern. ⟵ **Manchmal sehe ich** fern. ✔\n• والخطأ: «Manchmal ich sehe fern.» ✘\nوالسبب هو **قاعدة المركز الثاني (V2)** التي تعلّمتها في الدرس الأوّل: الفعل المصرَّف يجب أن يحتلّ الموضع الثاني في الجملة الخبرية مهما كان ما يسبقه. فإن شغل الظرف الموضع الأوّل، لم يبقَ للفاعل إلا الموضع الثالث. وهذه أهمّ قاعدةٍ بنيوية في الألمانية كلّها، والدرس الحالي فرصةٌ ممتازة لترسيخها لأنّ ظروف التكرار كثيرة التقديم.\n\n**القاعدة الثالثة — nie و nicht لا يجتمعان.**\nكلمة **nie** تحمل النفي في ذاتها، فلا تُضاف إليها nicht: «Ich gehe **nie** ins Kino» — لا «Ich gehe nie nicht». وهذا يخالف العربية التي تُجيز بل تستحسن التوكيد بالنفي المزدوج («لم أذهب أبداً»)، وكذلك بعض اللهجات الأوروبية. **الألمانية المعيارية تمنع النفي المزدوج منعاً باتّاً**، وسماعه يوسم المتكلّم فوراً.\n\n**القاعدة الرابعة — الترتيب حين تجتمع الظروف: TeKaMoLo.**\nإذا اجتمع في الجملة أكثر من ظرف، فالترتيب الألماني الموصى به:\n**Te**mporal (زمان: متى؟) ← **Ka**usal (سبب: لماذا؟) ← **Mo**dal (كيفية: كيف؟) ← **Lo**kal (مكان: أين؟)\nمثال: «Ich fahre **jeden Morgen** (زمان) **mit dem Bus** (كيفية) **zur Arbeit** (مكان).»\nوظروف التكرار تنتمي إلى خانة الزمان، فتتقدّم على غيرها. وهذه قاعدةٌ مرنة لا حديدية — يمكن كسرها للتأكيد — لكنّها الترتيب المحايد الذي يُسمع طبيعياً.\n\n**ملاحظة معجمية:** لا تخلط بين **oft** (كثيراً — تواتر) و **viel** (كثيراً — كمّية). «Ich arbeite oft» = أعمل مرّاتٍ كثيرة. «Ich arbeite viel» = أعمل ساعاتٍ طويلة. والفرق حقيقيّ ومسموع.",
      whyAr:
        "لأنّ الفرق بين «أستيقظ في السادسة» و«أستيقظ **دائماً** في السادسة» هو الفرق بين **ذكر واقعةٍ ووصف حياة**. وهذا بالضبط ما يُطلب في المهمّة الشفوية لامتحان A1: «Erzählen Sie über Ihren Tag» — لا يريد الممتحن جدولاً بل حكايةً فيها اعتيادٌ واستثناء. والمتعلّم الذي يقول «Ich stehe um sechs auf. Ich frühstücke. Ich gehe zur Arbeit» يبدو كلامه آلياً؛ ومَن يقول «Ich stehe **meistens** um sechs auf, aber **manchmal** schlafe ich länger» يبدو متكلّماً حقيقياً. لكنّ الفائدة النحوية أعمق من ذلك: ظروف التكرار هي **أفضل ميدانٍ لترسيخ قاعدة المركز الثاني**، لأنّها تُقدَّم كثيراً إلى أوّل الجملة فتُجبرك على انزياح الفاعل مرّةً بعد مرّة. فأنت تتدرّب على أخطر قاعدةٍ في بناء الجملة الألمانية بينما تظنّ أنّك تتعلّم كلماتٍ صغيرة كـ«أحياناً» و«نادراً».",
      table: {
        title: "سُلَّم التكرار من الدائم إلى المعدوم",
        columns: ["الظرف", "المعنى", "مثال من يومك"],
        rows: [
          { label: "immer", cells: ["دائماً (100٪)", "Ich frühstücke immer um sieben."] },
          { label: "meistens", cells: ["غالباً (80٪)", "Ich gehe meistens zu Fuß."] },
          { label: "oft", cells: ["كثيراً (60٪)", "Wir kochen oft zusammen."] },
          { label: "manchmal", cells: ["أحياناً (40٪)", "Ich sehe manchmal fern."] },
          { label: "selten", cells: ["نادراً (10٪)", "Er steht selten früh auf."] },
          { label: "nie", cells: ["أبداً (0٪)", "Ich trinke nie Kaffee am Abend."] },
        ],
      },
      examples: [
        {"de": "Ich stehe immer um sechs Uhr auf.", "ar": "أستيقظ دائماً في السادسة. (الظرف بعد الفعل مباشرةً)"},
        {"de": "Manchmal frühstücke ich nicht.", "ar": "أحياناً لا أفطر. (الظرف أوّلاً ⟵ الفاعل بعد الفعل)"},
        {"de": "Meine Schwester kocht oft am Abend.", "ar": "أختي تطبخ كثيراً في المساء."},
        {"de": "Er sieht selten fern, aber er liest viel.", "ar": "نادراً ما يشاهد التلفاز، لكنّه يقرأ كثيراً. (selten تواتر و viel مقدار)"},
        {"de": "Ich gehe nie vor Mitternacht ins Bett.", "ar": "لا أنام قبل منتصف الليل أبداً. (nie وحدها بلا nicht)"},
        {"de": "Montags habe ich immer Deutschkurs.", "ar": "عندي درس ألماني كلّ اثنين. (montags بحرف صغير)"},
        {"de": "Ich fahre jeden Morgen mit dem Bus zur Arbeit.", "ar": "أذهب إلى العمل بالحافلة كلّ صباح. (زمان ⟵ كيفية ⟵ مكان)"},
        {"de": "Wie oft gehst du ins Fitnessstudio? — Zweimal pro Woche.", "ar": "كم مرّة تذهب إلى النادي؟ — مرّتين أسبوعياً."},
      ],
      comparisonWithArabic:
        "**١. حرّية الموضع مقابل انضباطه.** العربية تتيح للظرف مواضع كثيرة بلا أثرٍ نحوي: «أحياناً أشاهد التلفاز» / «أشاهد التلفاز أحياناً» / «أنا أحياناً أشاهد التلفاز» — كلّها صحيحة والفعل لا يتزحزح. والألمانية تربط موضع الظرف **بموضع الفاعل** ربطاً حديدياً: إن تقدّم الظرف تأخّر الفاعل وجوباً. فالحرّية العربية هي مصدر الخطأ: العربي ينقل جملته كما هي فيقول «Manchmal ich sehe fern».\n\n**٢. النفي المزدوج: مستحسنٌ في العربية ممنوعٌ في الألمانية.** العربية تؤكّد النفي بتكراره أو بإضافة «أبداً» إلى «لم»: «لم أذهب إلى هناك أبداً» — والنفي مرّتان (لم + أبداً) وهو فصيح تماماً. والألمانية تمنع: **nie وحدها تكفي**، وإضافة nicht إليها خطأ فاضح. فراقب نفسك: إن استعملت nie فلا تبحث عن أداة نفيٍ أخرى.\n\n**٣. «كلّ اثنين» بصيغةٍ ظرفية غريبة.** العربية تقول «كلّ يوم اثنين». والألمانية تملك صيغةً مختصرة: **montags** بحرفٍ صغير و‑s في الآخر (وكذلك dienstags, abends, morgens). وهذه بقايا حالة الملكية القديمة التي صارت ظرفاً — ولهذا هي بحرفٍ صغير رغم أنّ Montag اسمٌ بحرفٍ كبير. تمييزٌ دقيق: «Am Montag» = الاثنين القادم (مرّة واحدة)، و«montags» = كلّ اثنين (عادة).\n\n**٤. oft مقابل viel — تمييزٌ لا تصنعه العربية.** «أعمل كثيراً» في العربية تحتمل التواتر والكمّية معاً. والألمانية تفصل: oft للمرّات، و viel للمقدار. فحدّد قصدك قبل أن تختار.\n\n**٥. ترتيب TeKaMoLo مقابل حرّية العربية.** العربية تقول «أذهب إلى العمل بالحافلة كلّ صباح» — المكان أوّلاً والزمان آخراً، وهو ترتيبٌ طبيعي فيها. والألمانية تعكسه: الزمان أوّلاً والمكان آخراً. فالترجمة الحرفية تعطي جملةً غير خاطئة نحواً لكنّها غير طبيعية أذناً، وهذا فارقٌ يميّز المتكلّم المتقدّم.",
      eselsbruecke:
        "**«الظرف يتقدّم فيتأخّر الفاعل»** — Manchmal **sehe ich** fern، وليس «Manchmal ich sehe». وللنفي: **«nie تكفي نفسها»** — فلا nicht بعدها. ولترتيب الظروف احفظ الكلمة السحرية **TeKaMoLo**: زمان ثمّ سبب ثمّ كيفية ثمّ مكان. وللتمييز: **oft للمرّات و viel للمقدار**.",
      commonMistakes: [
        {"wrong": "Ich immer stehe früh auf.", "right": "Ich stehe immer früh auf.", "whyAr": "وُضع الظرف بين الفاعل والفعل، وهذا موضعٌ محظور في الألمانية لأنّه يزيح الفعل عن المركز الثاني. والموضع الصحيح: **بعد** الفعل المصرَّف مباشرةً. تذكّر أنّ لا شيء يفصل بين المركز الأوّل والفعل."},
        {"wrong": "Manchmal ich sehe fern.", "right": "Manchmal sehe ich fern.", "whyAr": "نقلٌ حرفي للترتيب العربي «أحياناً أنا أشاهد». لكنّ تقديم الظرف يشغل المركز الأوّل، فيلزم أن يحتلّ الفعل المركز الثاني، فينزاح الفاعل إلى الثالث. وهذه قاعدة V2 التي تحكم كلّ جملةٍ خبرية ألمانية بلا استثناء."},
        {"wrong": "Ich gehe nie nicht ins Kino.", "right": "Ich gehe nie ins Kino.", "whyAr": "نفيٌ مزدوج على المنوال العربي («لم أذهب أبداً»). و nie تحمل النفي في ذاتها، فإضافة nicht تُبطله منطقياً وتُعدّ خطأً فاضحاً في الألمانية المعيارية. اختر أداةً واحدة."},
        {"wrong": "Ich fahre zur Arbeit jeden Morgen mit dem Bus.", "right": "Ich fahre jeden Morgen mit dem Bus zur Arbeit.", "whyAr": "ترتيبٌ عربي: المكان أوّلاً والزمان آخراً. والترتيب المحايد في الألمانية TeKaMoLo — الزمان ثمّ الكيفية ثمّ المكان. والجملة الأولى ليست خاطئة نحواً لكنّها تُسمع غريبة، وهي علامةٌ واضحة على الترجمة من لغةٍ أخرى."},
      ],
      relatedRuleComparison: {
        "title": "المركز الأوّل (Vorfeld): من يجلس فيه ولماذا؟",
        "content": "الجملة الخبرية الألمانية تُبنى على مبدأٍ واحد لا يُخرَق: **الفعل المصرَّف في المركز الثاني**. أمّا المركز الأوّل (Vorfeld) فهو **مقعدٌ واحد يشغله عنصرٌ واحد فقط**، وأنت حرّ في اختيار مَن يجلس فيه — والاختيار له معنى. فقد يجلس فيه: الفاعل (Ich stehe früh auf — محايد)، أو ظرف زمان (Jeden Tag stehe ich früh auf — تأكيد على الاعتياد)، أو ظرف تكرار (Manchmal stehe ich spät auf — تأكيد على الاستثناء)، أو ظرف مكان (In Tunis wohne ich nicht mehr)، أو حتّى المفعول به (Das Buch kenne ich — تأكيد وتقديم للمعلوم). وفي كلّ حالةٍ **يبقى الفعل ثانياً ويُدفَع ما تبقّى إلى ما بعده**. فالمركز الأوّل هو أداة التركيز والربط في الألمانية: ما تضعه فيه هو ما تعلّق عليه الجملة. وهذا ما يجعل الألمانية مرنةً في المعنى رغم صرامتها في الشكل — ومَن أتقن هذا المبدأ الواحد أتقن بناء الجملة الألمانية كلّه."
      },
    },
  ],

  reading: {
    "id": "read-a1-05",
    "titleDe": "Ein ganz normaler Dienstag",
    "titleAr": "ثلاثاء عادي جداً",
    "textType": "blog",
    "paragraphs": [
      "Mein Name ist Tarek und ich arbeite als Krankenpfleger in einem Krankenhaus in Hamburg. Mein Tag beginnt sehr früh. Ich stehe immer um halb sechs auf, denn meine Schicht fängt um sieben Uhr an. Ich dusche schnell und ziehe mich an.",
      "Um Viertel vor sechs frühstücke ich. Meistens esse ich nur ein Brötchen mit Käse und trinke einen starken Kaffee. Manchmal habe ich keine Zeit und nehme das Brötchen einfach mit. Dann fahre ich mit der U-Bahn zur Arbeit. Die Fahrt dauert zwanzig Minuten.",
      "Im Krankenhaus ist immer viel los. Von sieben bis zwölf arbeite ich auf der Station. Um halb eins mache ich Mittagspause. Dann esse ich in der Kantine und rufe kurz meine Mutter an. Sie wohnt in Tunis und wir telefonieren fast jeden Tag.",
      "Am Nachmittag habe ich oft Besprechungen. Um sechzehn Uhr ist meine Schicht zu Ende. Ich kaufe schnell im Supermarkt ein und fahre nach Hause. Zweimal pro Woche gehe ich noch ins Fitnessstudio, aber montags bin ich immer zu müde.",
      "Am Abend koche ich und sehe ein bisschen fern. Um zehn Uhr räume ich die Küche auf und lese noch zwanzig Minuten. Ich gehe selten nach Mitternacht ins Bett, denn morgen früh klingelt der Wecker wieder um halb sechs. So ist mein Leben: anstrengend, aber ich mag meinen Beruf."
    ],
    "paragraphsAr": [
      "اسمي طارق وأعمل ممرّضاً في مستشفى بهامبورغ. يبدأ يومي باكراً جداً. أستيقظ دائماً في الخامسة والنصف، لأنّ نوبتي تبدأ في السابعة. أستحمّ سريعاً وألبس ثيابي.",
      "أفطر في السادسة إلا ربعاً. غالباً آكل كعكةً بالجبن فقط وأشرب قهوةً قوية. وأحياناً لا يكون عندي وقت فآخذ الكعكة معي. ثمّ أذهب إلى العمل بالمترو. تستغرق الرحلة عشرين دقيقة.",
      "في المستشفى الحركة دائمة. أعمل في القسم من السابعة إلى الثانية عشرة. وفي الثانية عشرة والنصف آخذ استراحة الغداء. حينها آكل في المقصف وأتّصل بأمّي قليلاً. هي تسكن في تونس ونتحدّث هاتفياً كلّ يوم تقريباً.",
      "بعد الظهر عندي اجتماعات كثيرة. وفي الرابعة عصراً تنتهي نوبتي. أتسوّق سريعاً من السوبرماركت وأعود إلى البيت. وأذهب إلى النادي مرّتين أسبوعياً، لكنّني يوم الاثنين أكون متعباً جداً دائماً.",
      "في المساء أطبخ وأشاهد التلفاز قليلاً. وفي العاشرة أرتّب المطبخ وأقرأ عشرين دقيقة. نادراً ما أنام بعد منتصف الليل، لأنّ المنبّه سيرنّ غداً صباحاً في الخامسة والنصف من جديد. هكذا هي حياتي: متعبة، لكنّني أحبّ مهنتي."
    ],
    "glossary": [
      {
        "de": "der Krankenpfleger",
        "ar": "الممرّض",
        "noteAr": "مركّب من krank (مريض) + Pfleger (راعٍ). والمؤنّث die Krankenpflegerin. ويُقال أيضاً die Pflegefachkraft بصيغة محايدة رسمياً."
      },
      {
        "de": "die Schicht",
        "ar": "نوبة العمل",
        "noteAr": "مؤنّثة. ومنها Frühschicht (نوبة صباحية) و Spätschicht (مسائية) و Nachtschicht (ليلية) — ومهنة التمريض قائمة عليها."
      },
      {
        "de": "das Brötchen",
        "ar": "الكعكة / الخبز الصغير",
        "noteAr": "محايد لأنّه تصغير بـ‑chen، وكلّ مصغّر محايد مهما كان أصل كلمته. وجمعه بلا تغيير: die Brötchen."
      },
      {
        "de": "die U-Bahn",
        "ar": "المترو / قطار الأنفاق",
        "noteAr": "اختصار Untergrundbahn، ومؤنّثة لأنّ die Bahn مؤنّثة. ويصحبها mit + Dativ: mit der U-Bahn fahren."
      },
      {
        "de": "die Fahrt dauert …",
        "ar": "تستغرق الرحلة…",
        "noteAr": "الفعل dauern يخصّ المدّة الزمنية: Die Fahrt dauert 20 Minuten. ولا يُستعمل للأشخاص."
      },
      {
        "de": "Es ist viel los.",
        "ar": "الحركة كثيرة / المكان مزدحم",
        "noteAr": "تعبير ثابت شديد الشيوع. ويُسأل به أيضاً: Was ist los? = ما الأمر؟ ما الخطب؟"
      },
      {
        "de": "die Mittagspause",
        "ar": "استراحة الغداء",
        "noteAr": "مؤنّثة لأنّ die Pause مؤنّثة. والفعل المصاحب: Pause machen (يأخذ استراحة) لا nehmen."
      },
      {
        "de": "die Kantine",
        "ar": "المقصف / مطعم المؤسّسة",
        "noteAr": "مؤنّثة بـ‑e. وتوجد في أغلب المستشفيات والشركات الألمانية بأسعار مدعومة."
      },
      {
        "de": "die Besprechung",
        "ar": "الاجتماع",
        "noteAr": "مؤنّثة بـ‑ung كعادة كلّ ما ينتهي بها. ومرادفها das Meeting و die Sitzung (أكثر رسمية)."
      },
      {
        "de": "zu Ende sein",
        "ar": "ينتهي",
        "noteAr": "تعبير ثابت: Die Schicht ist zu Ende. ومرادفه الفعل enden أو aufhören (وهو منفصل: Es hört auf)."
      },
      {
        "de": "der Wecker",
        "ar": "المنبّه",
        "noteAr": "مذكّر، من الفعل wecken (يوقظ). والفعل المصاحب: Der Wecker klingelt (يرنّ المنبّه)."
      },
      {
        "de": "anstrengend",
        "ar": "متعِب / مرهِق",
        "noteAr": "صفة من الفعل sich anstrengen (يجهد نفسه). وضدّها entspannend (مريح)."
      }
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الأولى — دقّق في الساعة:",
        "questionDe": "Wann steht Tarek auf?",
        "questionAr": "متى يستيقظ طارق؟",
        "options": [
          "Um 6:30 Uhr",
          "Um 5:30 Uhr",
          "Um 7:00 Uhr",
          "Um 5:45 Uhr"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «Ich stehe immer um halb sechs auf». وكلمة halb sechs تعني الخامسة والنصف لا السادسة والنصف — لأنّ الألمانية تعدّ نحو الساعة القادمة. القاعدة: اطرح واحداً.",
        "optionExplanations": [
          "هذا خطأ halb الشهير: العدّ نحو الأمام لا الخلف.",
          undefined,
          "السابعة موعد بدء النوبة لا الاستيقاظ.",
          "الخامسة والنصف لا ٥:٤٥؛ و٥:٤٥ هو موعد الفطور."
        ],
        "errorType": "vocabulary",
        "paragraph": 0
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الثالثة — التواصل مع العائلة:",
        "questionDe": "Wie oft telefoniert Tarek mit seiner Mutter?",
        "questionAr": "كم مرّة يتّصل طارق بأمّه؟",
        "options": [
          "Einmal pro Woche",
          "Fast jeden Tag",
          "Nie",
          "Zweimal im Monat"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «wir telefonieren fast jeden Tag». وكلمة fast (تقريباً) تخفّف المطلق، فليست كلّ يوم حرفياً بل قريباً من ذلك.",
        "optionExplanations": [
          "مرّتان أسبوعياً تخصّان النادي الرياضي لا المكالمات.",
          undefined,
          "بل يتّصل يومياً تقريباً.",
          "لم يُذكر شيء شهري."
        ],
        "errorType": "vocabulary",
        "paragraph": 2
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الرابعة — انتبه للاستثناء:",
        "questionDe": "Warum geht Tarek montags nicht ins Fitnessstudio?",
        "questionAr": "لماذا لا يذهب طارق إلى النادي يوم الاثنين؟",
        "options": [
          "Weil das Studio geschlossen ist",
          "Weil er dann immer zu müde ist",
          "Weil er montags arbeitet",
          "Weil er kein Geld hat"
        ],
        "correctIndex": 1,
        "explanation": "النصّ: «aber montags bin ich immer zu müde». ولاحظ الصيغة montags بحرفٍ صغير و‑s: تعني «كلّ اثنين» عادةً، لا «الاثنين القادم» الذي يُقال له am Montag.",
        "optionExplanations": [
          "لم يُذكر إغلاق.",
          undefined,
          "هو يعمل كلّ أيّام الأسبوع لا الاثنين وحده.",
          "المال لم يُذكر إطلاقاً."
        ],
        "errorType": "vocabulary",
        "paragraph": 3
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "انظر في بناء الجمل عبر النصّ:",
        "questionDe": "Warum heißt es «Um Viertel vor sechs frühstücke ich»?",
        "questionAr": "لماذا جاء الفاعل ich بعد الفعل في هذه الجملة؟",
        "options": [
          "Weil frühstücken trennbar ist",
          "Weil die Zeitangabe auf Position 1 steht",
          "Weil es eine Frage ist",
          "Weil ich klein geschrieben wird"
        ],
        "correctIndex": 1,
        "explanation": "ظرف الزمان شغل المركز الأوّل، وقاعدة V2 توجب أن يبقى الفعل المصرَّف في المركز الثاني، فانزاح الفاعل إلى الثالث. وهذه القاعدة تعمل في كلّ جملةٍ خبرية ألمانية.",
        "optionExplanations": [
          "frühstücken فعل غير منفصل أصلاً.",
          undefined,
          "الجملة خبرية لا استفهامية.",
          "حرف ich الصغير عادة إملائية لا أثر لها في الترتيب."
        ],
        "errorType": "word-order",
        "paragraph": 1
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "الفقرة الخامسة — كيف يقيّم طارق حياته؟",
        "questionDe": "Wie findet Tarek sein Leben?",
        "questionAr": "كيف يرى طارق حياته؟",
        "options": [
          "Langweilig und einfach",
          "Anstrengend, aber er mag seinen Beruf",
          "Er möchte den Beruf wechseln",
          "Er hat zu viel Freizeit"
        ],
        "correctIndex": 1,
        "explanation": "الجملة الأخيرة: «anstrengend, aber ich mag meinen Beruf». والرابط aber يقيم توازناً بين الجهد والرضا — وهو نمطٌ تعبيري مفيد لوصف أيّ عمل.",
        "optionExplanations": [
          "وصفها بالمتعبة لا المملّة.",
          undefined,
          "لم يذكر رغبةً في التغيير بل حبّاً للمهنة.",
          "يومه مزدحم من ٥:٣٠ إلى ما بعد العاشرة."
        ],
        "errorType": "vocabulary",
        "paragraph": 4
      }
    ],
    "redemittel": [
      {
        "de": "Mein Tag beginnt um halb sechs. Ich stehe immer früh auf.",
        "ar": "يبدأ يومي في الخامسة والنصف. أستيقظ دائماً باكراً."
      },
      {
        "de": "Meine Schicht fängt um sieben Uhr an und ist um sechzehn Uhr zu Ende.",
        "ar": "تبدأ نوبتي في السابعة وتنتهي في الرابعة."
      },
      {
        "de": "Ich fahre mit der U-Bahn zur Arbeit. Die Fahrt dauert zwanzig Minuten.",
        "ar": "أذهب إلى العمل بالمترو. تستغرق الرحلة عشرين دقيقة."
      },
      {
        "de": "Meistens frühstücke ich, aber manchmal habe ich keine Zeit.",
        "ar": "غالباً أفطر، لكن أحياناً لا وقت لديّ."
      },
      {
        "de": "Zweimal pro Woche gehe ich ins Fitnessstudio.",
        "ar": "أذهب إلى النادي مرّتين أسبوعياً."
      },
      {
        "de": "Am Abend sehe ich fern und gehe selten nach Mitternacht ins Bett.",
        "ar": "في المساء أشاهد التلفاز ونادراً ما أنام بعد منتصف الليل."
      }
    ],
    "discussionAr": "اكتب يومك أنت على منوال نصّ طارق في خمس فقرات: الصباح، الطريق، العمل أو الدراسة، بعد الظهر، المساء. واشترط على نفسك: خمسة أفعال منفصلة على الأقلّ مع فصل البادئة صحيحاً، وأربعة أوقاتٍ بصيغتين (رسمية ويومية) على أن يكون فيها halb مرّة واحدة، وأربعة ظروف تكرار مختلفة من السُلَّم، وجملتين تبدآن بظرفٍ في المركز الأوّل مع انزياح الفاعل. ثمّ راجع كلّ جملة: أين الفعل المصرَّف؟ أهو في المركز الثاني؟"
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "يوم سامي",
        lines: [
          { speaker: "Sami", de: "Ich stehe am Morgen um sechs Uhr auf.", ar: "أستيقظ صباحاً في السادسة." },
          { speaker: "Sami", de: "Dann frühstücke ich um halb sieben.", ar: "ثم أتناول الفطور في السادسة والنصف." },
          { speaker: "Sami", de: "Um acht Uhr fange ich mit der Arbeit an.", ar: "في الثامنة أبدأ العمل." },
          { speaker: "Sami", de: "Am Mittag esse ich um zwölf Uhr.", ar: "ظهراً آكل في الثانية عشرة." },
          { speaker: "Sami", de: "Am Abend sehe ich fern oder lese ein Buch.", ar: "مساءً أشاهد التلفاز أو أقرأ كتاباً." },
        ],
      },
      {
        id: "l2",
        title: "أسئلة عن اليوم",
        lines: [
          { speaker: "Mona", de: "Wann stehst du auf?", ar: "متى تستيقظ؟" },
          { speaker: "Karim", de: "Ich stehe um sieben Uhr auf.", ar: "أستيقظ في السابعة." },
          { speaker: "Mona", de: "Und was machst du am Abend?", ar: "وماذا تفعل مساءً؟" },
          { speaker: "Karim", de: "Ich räume das Zimmer auf und sehe fern.", ar: "أرتّب الغرفة وأشاهد التلفاز." },
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
        options: ["um sechs Uhr", "um sieben Uhr", "um acht Uhr", "um zwölf Uhr"],
        correctIndex: 0,
        explanation: "قال: Ich stehe am Morgen um sechs Uhr auf — السادسة صباحاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Sami am Abend?",
        questionAr: "ماذا يفعل سامي مساءً؟",
        options: ["fernsehen oder lesen", "arbeiten", "frühstücken", "schlafen"],
        correctIndex: 0,
        explanation: "قال: Am Abend sehe ich fern oder lese ein Buch.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann steht Karim auf?",
        questionAr: "متى يستيقظ كريم؟",
        options: ["um sieben Uhr", "um sechs Uhr", "um neun Uhr", "um halb acht"],
        correctIndex: 0,
        explanation: "قال كريم: Ich stehe um sieben Uhr auf.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات اليوم: st، ch، وü",
    items: [
      { de: "aufstehen", ar: "يستيقظ", note: "st في بداية المقطع = شت: آوف-شتيهن" },
      { de: "frühstücken", ar: "يتناول الفطور", note: "früh = فريو (ü طويل) + st = شت" },
      { de: "die Nacht", ar: "الليل", note: "ch بعد a = خ حلقية: ناخت" },
      { de: "der Morgen", ar: "الصباح", note: "r حلقية خفيفة + g = غ: مورغن" },
      { de: "fernsehen", ar: "يشاهد التلفاز", note: "sehen = زيهن (s بين حرفين علة = ز)" },
      { de: "das Frühstück", ar: "الفطور", note: "ü في كلا المقطعين: فريو-شتوك" },
    ],
    tip: "فرّق بين الصباح (Morgen) والمستقبل (morgen = غداً): نفس الكلمة! nur ein Unterschied في الاستخدام.",
    shadowing: [
      { de: "Ich stehe um sechs Uhr auf.", ar: "أستيقظ في السادسة.", tip: "auf في نهاية الجملة — هذا هو «الذيل»!" },
      { de: "Wir sehen am Abend fern.", ar: "نشاهد التلفاز مساءً.", tip: "fern في النهاية أيضاً" },
      { de: "Ich räume das Zimmer auf.", ar: "أرتّب الغرفة.", tip: "räume = رُويْمِه (äu = أُوي)" },
      { de: "Der Kurs fängt um neun an.", ar: "الدورة تبدأ في التاسعة.", tip: "fängt = فِنگت (ä) — an في النهاية" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة عن وقت استيقاظك:",
      prompt: "Wann stehst du auf? (أجب بجملة كاملة)",
      acceptedAnswers: ["Ich stehe um sieben Uhr auf", "Ich stehe um sechs Uhr auf", "Ich stehe um acht Uhr auf"],
      sampleAnswer: "Ich stehe um sieben Uhr auf.",
      explanation: "البنية: Ich stehe (فعل متصرف) + um + ساعة + auf (البادئة في النهاية).",
      errorType: "word-order",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالبادئة الصحيحة (auf/fern/an/ein):",
      template: "Ich stehe um 7 ___ . Wir sehen abends ___ . Der Kurs fängt um 9 ___ . Sie kauft heute ___ .",
      blanks: [
        { correct: "auf", options: ["auf", "fern", "an", "ein"] },
        { correct: "fern", options: ["auf", "fern", "an", "ein"] },
        { correct: "an", options: ["auf", "fern", "an", "ein"] },
        { correct: "ein", options: ["auf", "fern", "an", "ein"] },
      ],
      explanation: "aufstehen (استيقظ) + fernsehen (تلفاز) + anfangen (يبدأ) + einkaufen (تسوق).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich stehe am Morgen um halb sieben auf.",
      explanation: "أستيقظ صباحاً في السادسة والنصف — لاحظ halb sieben = 6:30!",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ um sieben Uhr ___. (aufstehen)",
      questionAr: "أستيقظ في السابعة.",
      options: ["stehe ... auf", "aufstehe ...", "stehe auf ...", "auf ... stehe"],
      correctIndex: 0,
      explanation: "الفعل المتصرف stehe في المركز الثاني، والبادئة auf في النهاية: Ich stehe ... auf.",
      errorType: "word-order",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر المعنى الصحيح:",
      questionDe: "Es ist halb neun.",
      questionAr: "كم الساعة؟",
      options: ["8:30", "9:30", "9:00", "8:00"],
      correctIndex: 0,
      explanation: "halb neun = نصف الطريق إلى التاسعة = 8:30.",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بمعناه:",
      pairs: [
        { left: "aufstehen", right: "يستيقظ" },
        { left: "fernsehen", right: "يشاهد التلفاز" },
        { left: "einkaufen", right: "يتسوق" },
        { left: "anfangen", right: "يبدأ" },
      ],
      explanation: "أفعال يومية منفصلة: auf + stehen، fern + sehen، ein + kaufen، an + fangen.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه للبادئة في النهاية):",
      tokens: ["um", "sieben", "stehe", "Ich", "auf", "Uhr", "."],
      correctSentence: "Ich stehe um sieben Uhr auf.",
      explanation: "Ich + stehe (V2) + um sieben Uhr + auf (ذيل الفعل).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich stehe um sieben Uhr aus.",
      wrongWord: "aus",
      correctWord: "auf",
      options: ["auf", "aus", "an", "ab"],
      explanation: "aufstehen فعل منفصل: البادئة auf تذهب إلى نهاية الجملة — Ich stehe um sieben Uhr auf.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ am أو um:",
      template: "Ich esse ___ Mittag. Der Kurs beginnt ___ neun Uhr. Wir schlafen ___ Nacht.",
      blanks: [
        { correct: "am", options: ["am", "um"] },
        { correct: "um", options: ["am", "um"] },
        { correct: "in der", options: ["in der", "am", "um"] },
      ],
      explanation: "am + أوقات اليوم (am Mittag)، um + ساعات (um neun)، in der Nacht للّيل.",
      errorType: "preposition",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال:",
      prompt: "Du stehst um sieben Uhr auf. → ؟",
      acceptedAnswers: ["Stehst du um sieben Uhr auf", "Stehst du um sieben Uhr auf?"],
      sampleAnswer: "Stehst du um sieben Uhr auf?",
      explanation: "سؤال نعم/لا: Stehst (فعل متصرف) أولاً، والبادئة auf في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wann stehst du auf?",
      questionAr: "ما معنى السؤال؟",
      options: ["متى تستيقظ؟", "أين تعمل؟", "ماذا تأكل؟", "كم الساعة؟"],
      correctIndex: 0,
      explanation: "Wann = متى + stehst auf = تستيقظ.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Es ist halb sieben = 7:30.",
      wrongWord: "halb sieben",
      correctWord: "6:30",
      options: ["6:30", "7:30", "7:00", "6:00"],
      explanation: "halb sieben = نصف الطريق إلى السابعة = 6:30!",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Am Abend sehe ich fern.",
      explanation: "مساءً أشاهد التلفاز — fern في نهاية الجملة.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالحرف الصحيح (von / bis / um / am):",
      instructionDe: "Ergänze: von, bis, um, am",
      template: "Ich arbeite ___ acht ___ sechzehn Uhr. · ___ Morgen stehe ich ___ sieben auf.",
      blanks: [
        { correct: "von", options: ["von", "bis", "um", "am"] },
        { correct: "bis", options: ["bis", "von", "um", "am"] },
        { correct: "Am", options: ["Am", "Um", "Von", "Bis"] },
        { correct: "um", options: ["um", "am", "von", "bis"] },
      ],
      hint: "von … bis = مدى زمني. am + وقت اليوم. um + ساعة.",
      explanation: "von 8 bis 16 Uhr (مدى) + Am Morgen (وقت اليوم) + um sieben (ساعة).",
      errorType: "preposition",
      points: 2,
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر الترتيب الصحيح:",
      questionDe: "___ (أستيقظ دائماً في السادسة)",
      questionAr: "أي جملة صحيحة؟",
      options: [
        "Ich stehe immer um sechs auf.",
        "Ich immer stehe um sechs auf.",
        "Immer ich stehe um sechs auf.",
        "Ich stehe um sechs immer auf.",
      ],
      correctIndex: 0,
      explanation: "الفاعل ثم الفعل المصرَّف ثم ظرف التكرار: Ich stehe immer …، والبادئة auf تُغلق الجملة.",
      optionExplanations: [
        undefined,
        "الظرف لا يفصل الفاعل عن فعله.",
        "لو بدأتَ بـ Immer لوجب أن يليه الفعل: Immer stehe ich …",
        "ظرف التكرار يسبق التوقيت الدقيق لا يتبعه.",
      ],
      errorType: "word-order",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بظرف التكرار المناسب للنسبة المذكورة:",
      template: "Ich trinke ___ Kaffee (100٪). Wir kochen ___ zusammen (40٪). Er kommt ___ zu spät (0٪).",
      blanks: [
        { correct: "immer", options: ["immer", "nie", "selten"] },
        { correct: "manchmal", options: ["manchmal", "immer", "nie"] },
        { correct: "nie", options: ["nie", "oft", "meistens"] },
      ],
      explanation: "immer = 100٪ · manchmal = نحو 40٪ · nie = 0٪. لاحظ أنّ الثلاثة تقع بعد الفعل المصرَّف مباشرةً.",
      errorType: "vocabulary",
    },
    {
      id: "e14",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Manchmal ich gehe früh ins Bett.",
      wrongWord: "ich gehe",
      correctWord: "gehe ich",
      options: ["gehe ich", "ich gehe", "ich gehen", "geht ich"],
      explanation: "الظرف تصدّر الجملة، فوجب أن يبقى الفعل ثانياً وينزاح الفاعل بعده: Manchmal gehe ich …",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Meine", "Schwester", "kocht", "oft", "am", "Abend", "."],
      correctSentence: "Meine Schwester kocht oft am Abend.",
      explanation: "الفاعل (Meine Schwester) ثم الفعل (kocht) ثم التكرار (oft) ثم الوقت (am Abend).",
      errorType: "word-order",
    },
    {
      id: "e16",
      type: "transformation",
      instructionAr: "أعد صياغة الجملة بادئاً بظرف التكرار (انتبه لموضع الفعل).",
      prompt: "Ich sehe manchmal fern. → ابدأ الجملة بـ Manchmal.",
      acceptedAnswers: ["Manchmal sehe ich fern."],
      sampleAnswer: "Manchmal sehe ich fern.",
      explanation: "تقديم الظرف يستدعي قلب الفاعل والفعل: Manchmal sehe ich fern — والفعل يبقى في المركز الثاني.",
      errorType: "word-order",
    },
    {"id": "e17", "type": "word-ordering", "instructionAr": "رتّب الكلمات مراعياً موضع البادئة:", "tokens": ["Ich", "rufe", "dich", "heute", "Abend", "an", "."], "correctSentence": "Ich rufe dich heute Abend an .", "explanation": "anrufen فعل منفصل: الفعل المصرَّف rufe في المركز الثاني، والبادئة an في آخر الجملة بعد المفعول وظرف الزمان.", "errorType": "word-order"},
    {"id": "e18", "type": "multiple-choice", "instructionAr": "كم الساعة إذا قيل halb acht؟", "questionDe": "Wie viel Uhr ist halb acht?", "questionAr": "ما الوقت المقصود بـ halb acht؟", "options": ["8:30", "7:30", "8:00", "7:00"], "correctIndex": 1, "explanation": "halb تعدّ نحو الساعة القادمة: halb acht = نصف الطريق إلى الثامنة = ٧:٣٠. القاعدة العملية: اطرح ساعةً من العدد المذكور.", "optionExplanations": ["هذا هو الخطأ الشائع: العدّ من الساعة الماضية على الطريقة العربية.", undefined, "الثامنة تماماً تُقال acht Uhr.", "السابعة تماماً تُقال sieben Uhr."], "errorType": "vocabulary"},
    {"id": "e19", "type": "error-correction", "instructionAr": "صحّح حرف المدى الزمني:", "wrongSentence": "Ich arbeite von acht zu sechzehn Uhr.", "wrongWord": "zu", "correctWord": "bis", "options": ["bis", "nach", "für", "seit"], "explanation": "المدى الزمني يُصاغ بـ von … bis … حصراً. أمّا zu فللاتّجاه نحو شخصٍ أو مؤسّسة: ich gehe zum Arzt.", "errorType": "preposition"},
    {"id": "e20", "type": "fill-blank", "instructionAr": "أكمل بحرف الزمن الصحيح:", "template": "___ Morgen trinke ich Kaffee, aber ___ der Nacht trinke ich Tee.", "blanks": [{"correct": "Am", "options": ["Am", "Im", "In", "Um"]}, {"correct": "in", "options": ["in", "am", "um", "von"]}], "explanation": "أجزاء اليوم تأخذ am (= an + dem)، ويشذّ الليل وحده لأنّ die Nacht مؤنّثة فيصير in der Nacht.", "errorType": "preposition"},
    {"id": "e21", "type": "transformation", "instructionAr": "أعد بناء الجملة مبتدئاً بظرف التكرار:", "prompt": "Ich gehe selten ins Kino. (ابدأ بـ Selten)", "acceptedAnswers": ["Selten gehe ich ins Kino.", "Selten gehe ich ins Kino"], "sampleAnswer": "Selten gehe ich ins Kino.", "explanation": "تقديم الظرف إلى المركز الأوّل يوجب بقاء الفعل في المركز الثاني، فينزاح الفاعل بعده: Selten gehe ich…", "errorType": "word-order"},
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich aufstehe um 7.", right: "Ich stehe um 7 auf.", whyAr: "البادئة ذيل يذهب لنهاية الجملة دائماً." },
      { wrong: "halb sieben = 7:30", right: "halb sieben = 6:30", whyAr: "halb = نصف الطريق إلى الرقم التالي." },
      { wrong: "am die Nacht (قلتها مع الليل)", right: "in der Nacht", whyAr: "الليل استثناء: in der Nacht بدل am." },
    ],
    eselsbruecken: [
      "«ذيل الفعل المنفصل في النهاية»: Ich stehe ... auf — كأنك «تغلق» الجملة بالبادئة.",
      "«halb ناقص واحد»: halb acht = 7:30، halb zehn = 9:30. اطرح واحداً دائماً.",
    ],
    culturalNote: {
      title: "مواعيد الألمان",
      content:
        "الألمان دقيقون في المواعيد جداً: «pünktlich» صفة تمدح بها نفسك! يقولون «um acht» ويعنون الثامنة تماماً وليس 8:05. إذا تأخرت 10 دقائق، اعتذر وقل: Entschuldigung für die Verspätung!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir ___ am Abend ___. (fernsehen)",
      options: ["sehen ... fern", "fernsehen ...", "sehen fern ...", "seht ... fern"],
      correctIndex: 0,
      explanation: "Wir sehen am Abend fern — الفعل sehen + fern في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الوقت الصحيح:",
      questionDe: "Es ist halb acht.",
      options: ["7:30", "8:30", "8:00", "7:00"],
      correctIndex: 0,
      explanation: "halb acht = 7:30 (نصف الطريق إلى الثامنة).",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["fängt", "Der", "Kurs", "um", "an", "neun", "Uhr", "."],
      correctSentence: "Der Kurs fängt um neun Uhr an.",
      explanation: "الدورة تبدأ في التاسعة: Der Kurs + fängt + um neun Uhr + an.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich stehe auf um halb sieben.",
      wrongWord: "auf um halb sieben",
      correctWord: "um halb sieben auf",
      options: ["um halb sieben auf", "auf um halb sieben", "um auf halb sieben", "halb sieben auf um"],
      explanation: "الترتيب الصحيح: الفعل + بقية الجملة + البادئة في النهاية: Ich stehe um halb sieben auf.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات (am/um/auf):",
      template: "Ich stehe ___ halb sieben ___ . Wir frühstücken ___ Morgen.",
      blanks: [
        { correct: "um", options: ["um", "am", "auf"] },
        { correct: "auf", options: ["um", "am", "auf"] },
        { correct: "am", options: ["um", "am", "auf"] },
      ],
      explanation: "um + ساعة، auf ذيل الفعل، am Morgen صباحاً.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "aufstehen", ar: "يستيقظ", example: "Ich stehe um sieben auf.", exampleAr: "أستيقظ في السابعة.", level: "A1" },
    { id: "fc2", de: "frühstücken", ar: "يتناول الفطور", example: "Wir frühstücken am Morgen.", exampleAr: "نتناول الفطور صباحاً.", level: "A1" },
    { id: "fc3", de: "fernsehen", ar: "يشاهد التلفاز", example: "Am Abend sehe ich fern.", exampleAr: "مساءً أشاهد التلفاز.", level: "A1" },
    { id: "fc4", de: "einkaufen", ar: "يتسوق", example: "Sie kauft heute ein.", exampleAr: "تتسوق اليوم.", level: "A1" },
    { id: "fc5", de: "anfangen", ar: "يبدأ", example: "Der Kurs fängt um neun an.", exampleAr: "الدورة تبدأ في التاسعة.", level: "A1" },
    { id: "fc6", de: "der Morgen / der Abend", ar: "الصباح / المساء", example: "Am Morgen und am Abend.", exampleAr: "صباحاً ومساءً.", level: "A1" },
    { id: "fc7", de: "die Uhrzeit", ar: "الوقت", example: "Wie spät ist es?", exampleAr: "كم الساعة؟", level: "A1" },
    { id: "fc8", de: "halb", ar: "نصف (الطريق إلى الساعة التالية)", example: "halb acht = 7:30", exampleAr: "نصف الثامنة = 7:30", level: "A1" },
    { id: "fc9", de: "immer / oft / manchmal / nie", ar: "دائماً / كثيراً / أحياناً / أبداً", example: "Ich stehe immer früh auf.", exampleAr: "أستيقظ دائماً باكراً.", level: "A1" },
    { id: "fc10", de: "Wie oft …?", ar: "كم مرّة …؟", example: "Wie oft gehst du ins Kino?", exampleAr: "كم مرّة تذهب إلى السينما؟", level: "A1" },
    {"id": "fc11", "de": "halb neun = 8:30", "ar": "الثامنة والنصف (العدّ نحو الأمام!)", "example": "Wir treffen uns um halb neun.", "exampleAr": "نلتقي في الثامنة والنصف.", "level": "A1"},
    {"id": "fc12", "de": "Viertel nach / Viertel vor", "ar": "والربع / إلا ربعاً", "example": "Es ist Viertel vor sieben.", "exampleAr": "السابعة إلا ربعاً.", "level": "A1"},
    {"id": "fc13", "de": "in der Nacht (لا am!)", "ar": "في الليل — الاستثناء الوحيد", "example": "In der Nacht schlafe ich schlecht.", "exampleAr": "أنام سيّئاً في الليل.", "level": "A1"},
    {"id": "fc14", "de": "montags / abends", "ar": "كلّ اثنين / كلّ مساء (بحرف صغير)", "example": "Montags habe ich Deutschkurs.", "exampleAr": "عندي درس ألماني كلّ اثنين.", "level": "A1"},
    {"id": "fc15", "de": "anrufen / abholen / mitnehmen", "ar": "يتّصل / يقلّ من مكان / يأخذ معه", "example": "Ich rufe dich morgen an.", "exampleAr": "سأتّصل بك غداً.", "level": "A1"},
    {"id": "fc16", "de": "der Wecker klingelt", "ar": "يرنّ المنبّه", "example": "Der Wecker klingelt um halb sechs.", "exampleAr": "يرنّ المنبّه في الخامسة والنصف.", "level": "A1"},
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-05-1", type: "relay-instructions",
      titleAr: "انقل جدول يومي بالعربية لصديق",
      sourceDe: "Ich stehe um 6 Uhr auf. Ich frühstücke um 7 Uhr. Um 8 Uhr beginne ich zu arbeiten. Am Abend sehe ich fern.",
      taskAr: "أخبر صديقاً بالعربية عن روتين الشخص اليومي مع الأوقات بدقة.",
      modelAnswerAr: "«يستيقظ في السادسة، يفطر في السابعة، يبدأ العمل في الثامنة، وفي المساء يشاهد التلفاز.»",
      keyPointsAr: ["نقلت أوقات الاستيقاظ والإفطار", "ذكرت بداية العمل (8)", "نقلت نشاط المساء"],
    },
  ],
      interaction: [
    {
      id: "int-a1-05-1",
      scenarioAr: "صديق ألماني يسأل عن يومك.",
      scenarioDe: "Ein deutscher Freund fragt nach deinem Tag.",
      strategyAr: "الاستراتيجية: وصف الروتين اليومي بالأوقات.",
      rounds: [
        {
          speakerDe: "Wann stehst du morgens auf?",
          speakerAr: "متى تستيقظ صباحاً؟",
          options: [
            { de: "Ich stehe um 7 Uhr auf.", ar: "أستيقظ في السابعة.", best: true, replyDe: "Und was machst du danach?", replyAr: "وماذا تفعل بعد ذلك؟" },
            { de: "Ich stehe auf um 7 Uhr.", ar: "أستيقظ أنا في السابعة.", best: false, replyDe: "Achte auf die Wortstellung: Ich stehe um 7 Uhr auf.", replyAr: "انتبه لترتيب الكلمات: Ich stehe um 7 Uhr auf." },
          ],
        },
        {
          speakerDe: "Was machst du am Abend?",
          speakerAr: "ماذا تفعل في المساء؟",
          options: [
            { de: "Ich sehe fern oder lese ein Buch.", ar: "أشاهد التلفاز أو أقرأ كتاباً.", best: true, replyDe: "Das klingt entspannt!", replyAr: "يبدو مريحاً!" },
            { de: "Ich arbeite bis Mitternacht.", ar: "أعمل حتى منتصف الليل.", best: false, replyDe: "Das ist sehr viel Arbeit!", replyAr: "هذا كثير من العمل!" },
          ],
        },
      ],
    },
  ],

};