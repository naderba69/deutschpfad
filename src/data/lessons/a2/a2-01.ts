import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-01: السفر والعطلات — Perfekt المتقدّم
 * أساس Perfekt (haben/sein + Partizip II) صار في a1-14، فهذا الدرس
 * يبني عليه: عائلات Ablaut، وقسمة العمل مع Präteritum، وترتيب
 * المساحة الوسطى في الجملة الطويلة، ومعجم السفر الوظيفيّ.
 */
export const lessonA201: Lesson = {
  id: "a2-01",
  unitId: "a2-01",
  level: "A2",
  order: 1,
  titleDe: "Reisen und Urlaub",
  titleAr: "السفر والعطلات",
  duration: 35,
  summary:
    "Perfekt المتقدّم بعد أساسه في A1: عائلات الأفعال القوية (Ablaut) وصورها الثلاث، وقسمة العمل بين Perfekt وPräteritum (war · hatte · konnte)، وترتيب المساحة الوسطى بين قوسَي الجملة، ثم معجم السفر: الحجز والوصول والشكوى.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann die Stammformen starker Verben in Reihen lernen.",
      ar: "أن أتعلّم صور الأفعال القوية الثلاث في عائلاتٍ لا قوائم.",
    },
    {
      id: "z2",
      de: "Ich weiß, wann man Perfekt und wann Präteritum benutzt.",
      ar: "أن أعرف متى أستعمل Perfekt ومتى Präteritum (war · hatte · konnte).",
    },
    {
      id: "z3",
      de: "Ich kann längere Sätze im Perfekt richtig ordnen.",
      ar: "أن أرتّب المساحة الوسطى في جملة Perfekt الطويلة ترتيباً صحيحاً.",
    },
    {
      id: "z4",
      de: "Ich kann eine Reise buchen und mich höflich beschweren.",
      ar: "أن أحجز رحلةً وأشتكي بأدبٍ في فندقٍ أو محطّة.",
    },
    {
      id: "z5",
      de: "Ich kann eine Reisegeschichte zusammenhängend erzählen.",
      ar: "أن أحكي قصّة رحلةٍ حكايةً مترابطة.",
    },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A1 قلت: Ich gehe nach Deutschland (أذهب الآن). ماذا لو أردت أن تحكي أنك ذهبت أمس؟ الألمانية لا تستخدم فعل الماضي فقط — بل تركيباً من فعلين! خمّن كيف؟",
    motivatingQuestionDe: "Was hast du im Urlaub gemacht?",
    contextAr:
      "نبدأ مستوى A2 بزمن المستقبل الأهم في الحديث اليومي: Perfekt. الألمان يتحدثون عن الماضي بهذا التركيب في 90% من المحادثات — وليس بـ Präteritum (الذي سنأخذه لاحقاً للكتابة).",
    contextDe: "Ich bin nach Berlin geflogen und habe viel gesehen.",
    connectionToPreviousAr:
      "تتذكر haben (درس 3) وwerden (درس 12) من A1. اليوم نحتاج haben وsein معاً لبناء Perfekt — وكل كلمة عربية «فعلتُ» ستتحول لهذا التركيب.",
    activateVocabulary: [
      { de: "der Urlaub", ar: "الإجازة" },
      { de: "die Reise", ar: "الرحلة" },
      { de: "fliegen", ar: "يطير" },
      { de: "fahren", ar: "يقود/يذهب" },
      { de: "das Hotel", ar: "الفندق" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-01 — التعارف والتحيات): اختر التصريف الصحيح:",
      questionDe: "Ich ___ aus Tunesien.",
      options: ["bin", "habe", "werde", "ist"],
      correctIndex: 0,
      explanation: "تذكر: Ich bin + بلد — sein مع ich = bin.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر حرف الجر الصحيح:",
      questionDe: "Ich fahre ___ Deutschland.",
      options: ["nach", "zu", "in", "aus"],
      correctIndex: 0,
      explanation: "البلدان تأخذ nach: nach Deutschland (درس المدينة).",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "word-ordering",
      instructionAr: "مراجعة من A1 (درس a1-03 — الطعام والشراب): رتّب الجملة:",
      tokens: ["Ich", "habe", "Hunger", "."],
      correctSentence: "Ich habe Hunger.",
      explanation: "عندي جوع = أنا جائع (درس الطعام).",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "عائلات الأفعال القوية — Ablaut ونظامه",
      titleDe: "Starke Verben und ihre Ablautreihen",
      explanationAr:
        "تعرف Perfekt من A1: مساعدٌ في المركز الثاني وPartizip II في الآخر، وتعرف أنّ الأفعال القوية تُغيّر صوت جذرها (trinken ⟵ getrunken). وقيل لك حينها: **احفظها**. واليوم نسحب ذلك القول — لأنّها ليست فوضى بل **عائلات**.\n\n**الظاهرة اسمها Ablaut** — تناوبُ حركة الجذر. وهي أقدم من الألمانية نفسها: ورثتها عن الهندوأوروبية الأمّ، وتراها في الإنجليزية كذلك (sing–sang–sung · drink–drank–drunk). والأفعال القوية في الألمانية نحو **200 فعل**، لكنّ العائلات الكبرى **سبع**، ومن حفظها حفظ الأغلبية.\n\n**كلّ فعلٍ قويّ له ثلاث صور (Stammformen) تُحفظ معاً:**\nالمصدر ⟵ Präteritum ⟵ Partizip II ⟵ **trinken – trank – getrunken**\nولا تحفظ الصورة الثانية وحدها ولا الثالثة وحدها: احفظ الثلاث سلسلةً، فهي كذلك تُطبع في الذهن.\n\n**أهمّ أربع عائلات — تغطّي أكثر من نصف ما ستحتاجه:**\n· **i – a – u:** trinken – trank – getrunken · finden – fand – gefunden · singen – sang – gesungen\n· **ei – ie – ie:** schreiben – schrieb – geschrieben · bleiben – blieb – geblieben · steigen – stieg – gestiegen\n· **ie – o – o:** fliegen – flog – geflogen · verlieren – verlor – verloren · schließen – schloss – geschlossen\n· **e – a – o:** nehmen – nahm – genommen · sprechen – sprach – gesprochen · helfen – half – geholfen\n\n**وطائفةٌ رابعة تُسمّى الأفعال المختلطة (gemischte Verben):** تجمع تغيّر الجذر مع نهاية الضعيفة **-t**:\ndenken – dachte – **gedacht** · bringen – brachte – **gebracht** · wissen – wusste – **gewusst** · kennen – kannte – **gekannt**\nوهي قليلة جداً (نحو تسعة أفعال) لكنّها من أكثر الأفعال دوراناً، فتستحقّ الحفظ المفرد.\n\n**والفائدة العملية:** حين تقابل فعلاً جديداً، لا تسأل „أقويٌّ هو أم ضعيف؟“ بل **قِس على عائلته**. فإن عرفت schreiben – schrieb – geschrieben عرفت أنّ bleiben تسير معها، وأنّ treiben وreiben كذلك.",
      whyAr:
        "لماذا تُغيّر بعض الأفعال حركتها بدل أن تُلحق بها نهايةً كسائرها؟ لأنّ **الأفعال القوية هي الأقدم**. كان تغيير الحركة الداخلية هو الطريقة الجرمانية الأصلية لصنع الماضي، ثمّ نشأت الطريقة الأسهل (إلحاق -t) وانتشرت، فانتقلت إليها الأفعال الجديدة والقليلة الاستعمال، وبقيت على القديم الأفعالُ **كثيرة الدوران** لأنّ كثرة النطق تحمي الشكل من التسوية.\n\nولهذا مفارقةٌ مفيدة لك: الأفعال القوية هي **أهمّ** الأفعال بالضبط لأنّها شاذّة. فما شذّ إلاّ لأنّه كثير الاستعمال، وما كثر استعماله فأنت محتاجٌ إليه. فالجهد المبذول في حفظها مردودُه أعلى من أيّ حفظٍ آخر في اللغة.\n\nولماذا نُحفّظها في عائلاتٍ لا قوائم؟ لأنّ الذاكرة تحفظ **الأنماط** أضعاف ما تحفظ العناصر المفردة. قائمةٌ من مئتي فعلٍ عبءٌ لا يُحتمل، وسبعُ عائلاتٍ بأمثلةٍ نموذجية عبءٌ محتمَل. وهذه ليست حيلةً تعليمية بل وصفٌ صادق للبنية: العائلات موجودة في اللغة فعلاً، وليست تصنيفاً فرضه المعلّمون.",
      table: {
        title: "عائلات Ablaut الكبرى — الصور الثلاث",
        columns: ["النمط", "المصدر", "Präteritum", "Partizip II", "المعنى"],
        rows: [
          {
            label: "i – a – u",
            cells: ["trinken", "trank", "getrunken", "يشرب"],
          },
          { label: "i – a – u", cells: ["finden", "fand", "gefunden", "يجد"] },
          {
            label: "ei – ie – ie",
            cells: ["schreiben", "schrieb", "geschrieben", "يكتب"],
          },
          {
            label: "ei – ie – ie",
            cells: ["bleiben", "blieb", "geblieben", "يبقى (مع sein)"],
          },
          {
            label: "ie – o – o",
            cells: ["fliegen", "flog", "geflogen", "يطير (مع sein)"],
          },
          { label: "e – a – o", cells: ["nehmen", "nahm", "genommen", "يأخذ"] },
          {
            label: "e – a – o",
            cells: ["sprechen", "sprach", "gesprochen", "يتكلّم"],
          },
          { label: "مختلط", cells: ["denken", "dachte", "gedacht", "يفكّر"] },
          {
            label: "مختلط",
            cells: ["bringen", "brachte", "gebracht", "يُحضر"],
          },
        ],
      },
      examples: [
        {
          de: "Wir haben den ganzen Abend gesungen.",
          ar: "غنّينا طوال المساء. (singen – sang – gesungen، نمط i–a–u)",
        },
        {
          de: "Ich habe meinen Schlüssel nicht gefunden.",
          ar: "لم أجد مفتاحي. (finden، النمط نفسه)",
        },
        {
          de: "Sie ist nach Istanbul geflogen.",
          ar: "طارت إلى إسطنبول. (fliegen، نمط ie–o–o + sein للحركة)",
        },
        {
          de: "Ich habe meinen Pass verloren.",
          ar: "أضعتُ جواز سفري. (verlieren – verlor – verloren)",
        },
        {
          de: "Hast du mit dem Chef gesprochen?",
          ar: "هل تكلّمتَ مع المدير؟ (sprechen، نمط e–a–o)",
        },
        {
          de: "Er hat mir sehr geholfen.",
          ar: "ساعدني كثيراً. (helfen، النمط نفسه، ومفعوله بالجرّ)",
        },
        {
          de: "Daran habe ich gar nicht gedacht.",
          ar: "لم أفكّر في ذلك إطلاقاً. (denken — مختلط: تغيّرُ جذرٍ ونهاية -t)",
        },
        {
          de: "Ich habe dir ein Geschenk mitgebracht.",
          ar: "أحضرتُ لك هديّة. (bringen مختلط + بادئة منفصلة)",
        },
      ],
      comparisonWithArabic:
        "هنا تلتقي الألمانية بالعربية التقاءً عميقاً لا يُتاح لمتعلّمٍ آخر. العربية لغةٌ مبنيّة على **الجذر والوزن**: كتب ⟵ كاتب ⟵ مكتوب ⟵ كتاب — جذرٌ ثابت وحركاتٌ متبدّلة تُنتج المعاني. وهذا هو Ablaut بعينه من حيث المبدأ: حروفٌ صامتة ثابتة (t-r-nk) وحركةٌ داخلية متبدّلة (i / a / u).\n\nفالمتعلّم العربيّ **مهيّأ ذهنياً** لهذا الباب أكثر من الإنجليزيّ أو الفرنسيّ، لأنّ لغته دربّته على سماع الجذر تحت الحركات. وقُل لنفسك: trinken – trank – getrunken وزنٌ من أوزان الألمانية، والأفعال التي تسير عليه إخوةٌ في الوزن.\n\nوالفرق الجوهريّ: أوزان العربية **مطّردة ومعناها منتظم** (فاعل اسم فاعلٍ دائماً)، وعائلات الألمانية **مغلقة**: لا تستطيع أن تُدخل فعلاً جديداً في عائلة i–a–u كما تُدخل جذراً جديداً في وزن فَعَل. فالقياس عندنا مُنتِج، وعندهم وصفيّ فقط. ومن قاس فأنتج قال `getrinkt` — وهو خطأ.",
      eselsbruecke:
        "احفظ الصور الثلاث سلسلةً واحدة لا مفردة: trinken–trank–getrunken. وفكّر فيها كوزنٍ عربيّ: جذرٌ ثابت وحركةٌ متبدّلة. وأربع عائلات تكفيك أوّلاً: i-a-u · ei-ie-ie · ie-o-o · e-a-o.",
      commonMistakes: [
        {
          wrong: "Ich habe das Buch gefindet.",
          right: "Ich habe das Buch gefunden.",
          whyAr:
            "قياسٌ على الضعيفة. وfinden من عائلة i–a–u: fand – gefunden. والقياس هو الخطأ الأوّل في هذا الباب لأنّه يبدو معقولاً — والعائلات مغلقة لا تقبل القياس.",
        },
        {
          wrong: "Ich habe geschreibt.",
          right: "Ich habe geschrieben.",
          whyAr:
            "عائلة ei–ie–ie تُغيّر الحركة وتُبقي النهاية -en. ومن أخذ نهاية الضعيفة (-t) على جذرٍ قويّ جمع بين نظامين لا يجتمعان.",
        },
        {
          wrong: "Ich habe nach Berlin geflogen.",
          right: "Ich bin nach Berlin geflogen.",
          whyAr:
            "صيغة Partizip صحيحة والمساعد خاطئ. fliegen حركةٌ بين نقطتين فمساعدها sein. فانتبه إلى أنّ معرفة العائلة لا تُغني عن اختبار المفعول به.",
        },
        {
          wrong: "Ich habe an dich gedenkt.",
          right: "Ich habe an dich gedacht.",
          whyAr:
            "denken من الأفعال المختلطة: تُغيّر جذرها (denk ⟵ dach) وتأخذ نهاية الضعيفة -t معاً. فلا هي قوية خالصة ولا ضعيفة خالصة، وهي تسعةٌ تُحفظ مفردة.",
        },
        {
          wrong: "Er hat mir gehelft.",
          right: "Er hat mir geholfen.",
          whyAr:
            "helfen من عائلة e–a–o: half – geholfen. ولاحظ أنّ مفعولها بالجرّ (mir لا mich) لأنّها من أفعال الدّاتيف التي درستَها في a1-08.",
        },
      ],
      relatedRuleComparison: {
        title: "القويّ في Perfekt مقابل القويّ في المضارع",
        content:
          "ربطٌ يوفّر عليك نصف الحفظ: كثيرٌ من الأفعال التي تُغيّر حركتها في Partizip II **تُغيّرها في المضارع أيضاً** — وقد درستَ ذلك في a1-06 (تغيّر الصوت e ⟵ i).\n· sprechen: du **sprichst** · gesprochen\n· nehmen: du **nimmst** · genommen\n· helfen: du **hilfst** · geholfen\nفالفعل الذي سمعتَه شاذّاً في المضارع **مرشّحٌ بقوّة** لأن يكون قوياً في الماضي. وهذه إشارةٌ مجّانية تُغنيك عن مراجعة القائمة.\n\nوالعكس ليس صحيحاً دائماً: schreiben منتظمٌ في المضارع (du schreibst) وقويٌّ في الماضي (geschrieben). فالإشارة مرجّحة لا قاطعة — لكنّها في الاتّجاه الأوّل مفيدة جداً.",
      },
    },
    {
      id: "t2",
      titleAr: "Perfekt أم Präteritum؟ — قسمة العمل بين الماضيين",
      titleDe: "Perfekt oder Präteritum? Die Arbeitsteilung",
      explanationAr:
        "قيل لك في A1: „تكلّم بالـPerfekt واكتب بالـPräteritum“. وكانت قاعدةً آمنة للمبتدئ، وهي الآن **تبسيطٌ يحتاج تدقيقاً**، لأنّك ستقرأ نصوصاً حقيقية وتسمع ألماناً يخالفونها.\n\n**أوّلاً — القاعدة الأساسية تبقى صحيحة:**\n· **الكلام والرسائل الشخصية ⟵ Perfekt:** Ich **habe** gestern einen Film **gesehen**.\n· **السرد المكتوب (روايات، أخبار، تقارير) ⟵ Präteritum:** Er **sah** den Film und **ging** nach Hause.\n\n**ثانياً — الاستثناء الأهمّ: أفعالٌ تُقال بالـPräteritum حتّى في الكلام.**\nوهذه ليست تفصيلاً بل **ضرورة**: من يستعمل Perfekt معها يبدو متكلّفاً.\n· **sein:** Ich **war** in Berlin. ✔ — لا Ich bin in Berlin gewesen (ممكنة لكنّها ثقيلة)\n· **haben:** Ich **hatte** keine Zeit. ✔\n· **الأفعال الناقصة:** Ich **konnte** nicht kommen. · Ich **musste** arbeiten. · Ich **wollte** dich anrufen.\n· وكذلك **es gab** (كان هناك) و**wusste** (عرفتُ).\n\n**وتصريف Präteritum لهذه الأفعال — وهو كلّ ما تحتاجه اليوم:**\n| war · warst · war · waren · wart · waren |\n| hatte · hattest · hatte · hatten · hattet · hatten |\n| konnte · konntest · konnte · konnten · konntet · konnten | (وعلى منوالها musste · wollte · sollte · durfte)\nولاحظ الشذوذ المألوف: **ich وer متطابقان بلا نهاية** — كما في المضارع الناقص تماماً.\n\n**ثالثاً — قسمةٌ جغرافية حقيقية:** كلّما اتّجهتَ **جنوباً** (بايرن، النمسا، سويسرا) اختفى Präteritum من الكلام حتّى يكاد لا يبقى منه شيء، وكلّما اتّجهتَ **شمالاً** سمعتَه أكثر في الحكي. فإن سمعتَ ألمانياً شمالياً يقول „Ich ging“ في حديثٍ عادي فليس مخطئاً.\n\n**والقاعدة التي تعمل بها:** Perfekt لكلّ شيء، **إلاّ** sein وhaben والناقصة فبالـPräteritum. وهذه الجملة وحدها تكفيك في A2 وB1.",
      whyAr:
        "لماذا تحتفظ لغةٌ بزمنين للماضي بالمعنى نفسه؟ لأنّهما لم يكونا بالمعنى نفسه في الأصل. كان Präteritum هو الماضي الوحيد، وكان Perfekt يعني **حالةً حاضرة ناتجة عن فعلٍ ماضٍ** („أملك الكتاب مقروءاً“). ثمّ توسّع Perfekt في الكلام حتّى ابتلع وظيفة الماضي البسيط، وانحسر Präteritum إلى الكتابة. وهذه العملية نفسها وقعت في الفرنسية (passé composé أزاح passé simple) ولم تقع في الإنجليزية — والألمانية في منتصف الطريق.\n\nولماذا قاومت sein وhaben والناقصة هذا الانحسار؟ لسببٍ صوتيّ عمليّ: Perfekt منها **ثقيلٌ في النطق**. قارن „Ich war“ بكلمتين مقابل „Ich bin gewesen“ بثلاث، و„Ich konnte“ مقابل „Ich habe kommen können“ بأربع. واللغة تختار الأخفّ في الكلمات الأكثر دوراناً. فالاستثناء ليس شذوذاً بل **اقتصادٌ في الجهد**.\n\nولماذا يهمّك هذا عملياً؟ لأنّ قسم Lesen في امتحانات B1 وB2 يعتمد نصوصاً صحفية وأدبية مكتوبةً بالـPräteritum كلّها. فمن لا يعرفه لا يقرأ. وأنت اليوم تحتاجه **للفهم** أكثر ممّا تحتاجه للإنتاج — وهذا يخفّف العبء: افهم الستّة كلّها، وأنتج ما يلزم.",
      table: {
        title: "أيّ ماضٍ تختار؟",
        columns: ["الموقف", "الزمن", "المثال"],
        rows: [
          {
            label: "حديثٌ عن العطلة",
            cells: ["Perfekt", "Ich bin nach Wien gefahren."],
          },
          {
            label: "رسالةٌ إلى صديق",
            cells: ["Perfekt", "Wir haben viel gelacht."],
          },
          {
            label: "رواية أو خبر صحفيّ",
            cells: ["Präteritum", "Der Zug erreichte den Bahnhof um acht."],
          },
          {
            label: "sein في الكلام",
            cells: ["Präteritum", "Ich war sehr müde."],
          },
          {
            label: "haben في الكلام",
            cells: ["Präteritum", "Wir hatten keine Zeit."],
          },
          {
            label: "فعلٌ ناقص في الكلام",
            cells: ["Präteritum", "Ich konnte nicht schlafen."],
          },
          {
            label: "es gibt في الكلام",
            cells: ["Präteritum", "Es gab keinen Kaffee mehr."],
          },
        ],
      },
      examples: [
        {
          de: "Ich war letztes Jahr in Ägypten. Es war fantastisch!",
          ar: "كنتُ العام الماضي في مصر. كان رائعاً! (sein ⟵ Präteritum حتّى في الكلام)",
        },
        {
          de: "Wir hatten leider kein Glück mit dem Wetter.",
          ar: "للأسف لم يحالفنا الحظّ في الطقس. (haben ⟵ hatten)",
        },
        {
          de: "Ich konnte gestern nicht kommen, ich musste arbeiten.",
          ar: "لم أستطع المجيء أمس، كان عليّ أن أعمل. (ناقصان بالـPräteritum)",
        },
        {
          de: "Ich bin nach Wien gefahren und habe dort meine Tante besucht.",
          ar: "سافرتُ إلى فيينّا وزرتُ عمّتي هناك. (الأفعال العادية ⟵ Perfekt)",
        },
        {
          de: "Es gab im Hotel kein WLAN.",
          ar: "لم يكن في الفندق واي فاي. (es gibt ⟵ es gab)",
        },
        {
          de: "Der Zug fuhr um acht Uhr ab und erreichte Berlin am Mittag.",
          ar: "انطلق القطار في الثامنة وبلغ برلين ظهراً. (سردٌ مكتوب ⟵ Präteritum)",
        },
        {
          de: "Ich wusste nicht, dass du auch hier bist.",
          ar: "لم أكن أعرف أنّك هنا أيضاً. (wissen ⟵ wusste)",
        },
        {
          de: "Wie war dein Urlaub? – Er war super, aber zu kurz!",
          ar: "كيف كانت عطلتك؟ — كانت رائعة لكنّها قصيرة جداً!",
        },
      ],
      comparisonWithArabic:
        "العربية لها ماضٍ واحد لا اثنان: „ذهبتُ“ تصلح للكلام والكتابة والرواية والخبر. فالمتعلّم العربيّ لا يملك حدساً يميّز „ماضي الكلام“ من „ماضي الكتابة“، ويميل إلى استعمال ما تعلّمه أوّلاً في كلّ موضع.\n\nلكنّ العربية تملك تمييزاً موازياً في مستوىً آخر: **الفصحى والعامّية**. فأنت لا تكتب كما تتكلّم، وتعرف بالسليقة أنّ صيغةً معيّنة تليق بالمقال ولا تليق بالمقهى. والمسافة بين Präteritum وPerfekt من هذا الجنس بالضبط — مسافة **سِجِلّ** لا مسافة زمن. فمن أدرك ذلك أدرك الباب كلّه.\n\nوالخطأ العمليّ الأشيع عند العرب هنا ليس اختيار الزمن بل **الإفراط في Perfekt**: يقول Ich bin sehr müde gewesen حيث يقول الألمانيّ Ich war müde. والجملة سليمةٌ نحواً وثقيلةٌ أسلوباً، وهي من أوضح علامات المتعلّم على المتكلّم الطبيعيّ.",
      eselsbruecke:
        "جملةٌ واحدة تكفيك: «Perfekt لكلّ شيء، إلاّ sein وhaben والأفعال الناقصة فبالـPräteritum». واحفظ war · hatte · konnte · musste · wollte — خمسُ صيغٍ تُغنيك في الكلام كلّه.",
      commonMistakes: [
        {
          wrong: "Ich bin gestern sehr müde gewesen.",
          right: "Ich war gestern sehr müde.",
          whyAr:
            "صحيحةٌ نحواً وثقيلةٌ أسلوباً. وsein تُقال بالـPräteritum في الكلام دائماً تقريباً، والإفراط في Perfekt علامةٌ واضحة على المتعلّم.",
        },
        {
          wrong: "Ich habe nicht kommen können.",
          right: "Ich konnte nicht kommen.",
          whyAr:
            "الأفعال الناقصة تُقال بالـPräteritum. والصيغة الأولى موجودة في القواعد لكنّها ثقيلة ونادرة في الكلام، وتُسمع متكلّفةً في محادثةٍ عادية.",
        },
        {
          wrong: "Gestern ich ging ins Kino. (في محادثة)",
          right: "Gestern bin ich ins Kino gegangen.",
          whyAr:
            "خطآن: ترتيبٌ خاطئ بعد الظرف (V2 يوجب انزياح الفاعل)، واختيارُ Präteritum لفعلٍ عاديّ في الكلام حيث المتوقّع Perfekt.",
        },
        {
          wrong: "Es hat kein WLAN gegeben.",
          right: "Es gab kein WLAN.",
          whyAr:
            "es gibt تتبع sein وhaben في تفضيل Präteritum. والصيغة الأولى ممكنة لكنّها غير معتادة، وes gab هي ما يُقال فعلاً.",
        },
        {
          wrong: "Ich habe gewusst, dass du kommst.",
          right: "Ich wusste, dass du kommst.",
          whyAr:
            "wissen من الأفعال التي تُلحق بـsein وhaben والناقصة في تفضيل Präteritum، لكثرة دورانها وخفّة صيغتها.",
        },
      ],
      relatedRuleComparison: {
        title: "war وhatte — من A1 إلى A2",
        content:
          "تعلّمتَ war وhatte في a1-06 تحت اسم „الماضي الأوّل“، وقيل لك إنّهما استثناءان تُحفظان. والآن تعرف الحقيقة الكاملة: **لم يكونا استثناءين بل عيّنتين** من نظامٍ كامل اسمه Präteritum، قُدِّما لك مبكّراً لأنّ الكلام لا يستقيم بدونهما.\n\nوهذه طريقة بناء المنهج كلّه: تأخذ الجزء العمليّ أوّلاً بلا اسمه، ثمّ يُكشف لك النظام حين تصير مستعدّاً له. وستقابل النظام كاملاً في a2-05 حيث يُصرَّف Präteritum للأفعال الضعيفة والقوية جميعاً — فما تفعله اليوم هو **وضع war وhatte في موضعهما من الخريطة**، لا تعلّمهما من جديد.",
      },
    },
    {
      id: "t3",
      titleAr: "الجملة الطويلة في Perfekt — ما الذي يقع بين القوسين؟",
      titleDe: "Die Satzklammer im Detail: Was steht im Mittelfeld?",
      explanationAr:
        "تعرف أنّ Perfekt قوسان: المساعد في المركز الثاني وPartizip II في الآخر. وسؤال A2 هو: **ما الذي يقع بينهما، وبأيّ ترتيب؟** فالمساحة الوسطى (Mittelfeld) قد تحمل ستّ كلماتٍ أو أكثر، ولها نظام.\n\n**أوّلاً — الترتيب الأساسيّ داخل المساحة الوسطى:**\n· الضمائر أوّلاً · ثمّ الزمان (Temporal) · ثمّ السبب (Kausal) · ثمّ الكيفية (Modal) · ثمّ المكان (Lokal) · ثمّ المفعول المعرَّف\nوهذا هو **TeKaMoLo** الذي عرفتَه في a1-05، وقد صار الآن يعمل داخل قوسين لا في جملةٍ مفتوحة:\n| Ich | **habe** | dir gestern wegen des Regens schnell in der Stadt eine Jacke | **gekauft**. |\n\n**ثانياً — قاعدةٌ تحسم كثيراً: الضمائر تسبق الأسماء.**\n· Ich habe **es meinem Bruder** gegeben. ✔ (ضميرٌ ثمّ اسم)\n· وإن اجتمع ضميران: **المنصوب قبل المجرور** ⟵ Ich habe **es ihm** gegeben. ✔ لا ihm es\n· وإن اجتمع اسمان: **المجرور قبل المنصوب** ⟵ Ich habe **meinem Bruder das Buch** gegeben. ✔\nوالقاعدة الجامعة: **ما كان أقصر وأعرف تقدّم**. والضمير أقصر من الاسم وأعرف منه، فيتقدّم دائماً.\n\n**ثالثاً — أين يقع nicht؟**\n· لنفي الجملة كلّها: **قبل Partizip II مباشرةً** ⟵ Ich habe das Buch **nicht** gelesen.\n· لنفي جزءٍ بعينه: **قبله مباشرةً** ⟵ Ich habe **nicht das Buch** gelesen, sondern die Zeitung.\nوالفرق في المعنى حقيقيّ: الأولى „لم أقرأ الكتاب“، والثانية „لم أقرأ **الكتاب** بل الجريدة“.\n\n**رابعاً — ماذا يقع خارج القوسين؟** المساحة بعد Partizip II ليست ممنوعةً تماماً، ويُدفع إليها:\n· الجمل المقارنة: Ich habe mehr gegessen, **als ich wollte**.\n· الجمل الفرعية: Ich habe gehört, **dass du umgezogen bist**.\nوما عدا ذلك يبقى داخل القوسين. فلا تقل Ich habe gegessen **einen Apfel** — هذا أشيع أخطاء العرب في الباب.\n\n**من أين جاءت هذه القاعدة؟** من أين جاءت «المساحة الوسطى» أصلاً؟ من قاعدةٍ واحدة تحكم الألمانية كلّها: **الفعل المصرَّف يُثبَّت في الموضع الثاني، وكلّ ما بقي من الفعل يُدفَع إلى الآخر**. وهذا يخلق قوسين — Satzklammer — وما وقع بينهما صار بالضرورة منطقةً وسطى تحتاج نظاماً داخلياً. فالـMittelfeld ليس قاعدةً مستقلّة تُحفظ، بل **نتيجةٌ جانبية** لقانون V2. ومن رأى الأمر هكذا فهم لماذا يتّسع القوس في Perfekt وModalverben والأفعال المنفصلة على السواء: إنّها كلّها الظاهرة نفسها.",
      whyAr:
        "لماذا تُطيل الألمانية المسافة بين جزأَي الفعل بدل أن تُقرّبهما؟ لأنّ القوسين ليسا عائقاً بل **إطاراً**: المستمع يسمع المساعد فيعرف فوراً أنّ جملةً في الماضي قادمة، وينتظر الإغلاق. فالقوس الأوّل **وعدٌ** والثاني **وفاءٌ به**، وكلّ ما بينهما محميٌّ داخل بنيةٍ معروفة السقف.\n\nوهذا يفسّر لماذا تحتمل الألمانية جملاً أطول ممّا تحتمله لغاتٌ أخرى بلا لبس: البنية تُمسك المعنى. أمّا الإنجليزية فتضع الفعل كاملاً في الأوّل فلا يبقى ما يُنتظر، ولذلك تميل إلى جملٍ أقصر.\n\nولماذا تتقدّم الضمائر على الأسماء؟ لمبدأٍ عامّ في اللغات كلّها: **المعلوم قبل المجهول**. الضمير يشير إلى شيءٍ ذُكر فهو معلوم، والاسم الكامل يقدّم شيئاً جديداً. واللغة ترتّب من المعلوم إلى الجديد لأنّ ذلك يوافق طريقة بناء الفهم عند السامع. فالقاعدة ليست اعتباطاً نحوياً بل انعكاسٌ لمنطق التواصل.\n\nوأمّا موضع nicht قبل Partizip II فمنطقيّ كذلك: النفي يقع على **بؤرة الجملة**، وبؤرة الجملة الألمانية في آخرها. فحيثما وضعتَ nicht عرف السامع ما تنفيه بالضبط — وهذه دقّةٌ تفتقر إليها لغاتٌ كثيرة.",
      table: {
        title: "المساحة الوسطى — ماذا يقع أوّلاً؟",
        columns: ["الرتبة", "العنصر", "المثال"],
        rows: [
          {
            label: "١",
            cells: ["الضمائر (منصوب قبل مجرور)", "Ich habe es ihm gegeben."],
          },
          { label: "٢", cells: ["الزمان — متى؟", "… habe ich gestern …"] },
          { label: "٣", cells: ["السبب — لماذا؟", "… wegen des Regens …"] },
          { label: "٤", cells: ["الكيفية — كيف؟", "… mit dem Bus …"] },
          { label: "٥", cells: ["المكان — أين؟", "… in der Stadt …"] },
          { label: "٦", cells: ["المفعول المنكَّر", "… eine Jacke gekauft."] },
          {
            label: "٧",
            cells: ["nicht لنفي الجملة", "… das Buch nicht gelesen."],
          },
        ],
      },
      examples: [
        {
          de: "Ich habe dir gestern eine Nachricht geschickt.",
          ar: "أرسلتُ لك رسالةً أمس. (ضميرٌ ثمّ زمانٌ ثمّ مفعول)",
        },
        {
          de: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
          ar: "سافرنا الصيف الماضي بالقطار إلى براغ. (زمان ⟵ كيفية ⟵ مكان)",
        },
        {
          de: "Ich habe es ihm schon gesagt.",
          ar: "قلتُه له بالفعل. (ضميران: المنصوب es قبل المجرور ihm)",
        },
        {
          de: "Ich habe meinem Bruder das Buch gegeben.",
          ar: "أعطيتُ أخي الكتاب. (اسمان: المجرور قبل المنصوب — عكس الضمائر)",
        },
        {
          de: "Ich habe den Film nicht gesehen.",
          ar: "لم أشاهد الفيلم. (nicht قبل Partizip II لنفي الجملة كلّها)",
        },
        {
          de: "Ich habe nicht den Film gesehen, sondern die Serie.",
          ar: "لم أشاهد الفيلمَ بل المسلسل. (nicht قبل الجزء المنفيّ وحده)",
        },
        {
          de: "Er hat mir gestern wegen der Prüfung lange geholfen.",
          ar: "ساعدني أمس طويلاً بسبب الامتحان. (ضمير ⟵ زمان ⟵ سبب ⟵ كيفية)",
        },
        {
          de: "Ich habe gehört, dass du umgezogen bist.",
          ar: "سمعتُ أنّك انتقلتَ. (الجملة الفرعية تخرج بعد القوس)",
        },
      ],
      comparisonWithArabic:
        "العربية تضع الفعل مجموعاً في موضعٍ واحد ثمّ تُتبعه بما شاءت: „أرسلتُ لك رسالةً أمس“ — الفعل أوّلاً وكلّ شيءٍ بعده. والألمانية تشطر الفعل وتحشو ما بين شطريه. فالمتعلّم العربيّ يبني الجملة بعقلٍ عربيّ ثمّ يُلحق Partizip II في الآخر إن تذكّره، وينساه إن طالت الجملة — وهذا هو **الخطأ الأوّل** في الباب: كلّما طالت المساحة الوسطى زاد احتمال ضياع القوس الثاني.\n\nوالعلاج ليس نحوياً بل **تدريبيّ**: خطّط للجملة كاملةً قبل أن تبدأها. قل في نفسك Partizip II أوّلاً، ثمّ ابنِ ما قبله. وهذه عادةٌ يكتسبها المتحدّث بالألمانية ولا تُشبه أيّ عادةٍ في العربية.\n\nوأمّا ترتيب الضمائر فالعربية تُلصقها بالفعل ضمائرَ متّصلة: „أعطيتُه إيّاه“ — والمنصوب أوّلاً هنا كذلك! فالقاعدة الألمانية (المنصوب قبل المجرور بين الضمائر) لها نظيرٌ عربيّ يُعينك: „أعطيتُكه“ فيها ترتيبٌ محفوظ. لكن انتبه إلى الانقلاب: بين **الأسماء** ينعكس الترتيب في الألمانية، ولا نظير لهذا الانقلاب في العربية.",
      eselsbruecke:
        "خطّط لآخر الجملة قبل أوّلها: قل Partizip II في نفسك ثمّ ابنِ ما قبله. وداخل القوسين: الضمائر أوّلاً (المنصوب قبل المجرور)، ثمّ TeKaMoLo، ثمّ المفعول، وnicht قبل الإغلاق.",
      commonMistakes: [
        {
          wrong: "Ich habe gegessen einen Apfel.",
          right: "Ich habe einen Apfel gegessen.",
          whyAr:
            "نقلٌ لترتيب العربية: الفعل ثمّ المفعول. وPartizip II يُغلق الجملة، فكلّ مفعولٍ يسبقه. وهذا الخطأ يزداد كلّما طالت الجملة لأنّ المتكلّم يفقد أثر القوس الثاني.",
        },
        {
          wrong: "Ich habe ihm es gegeben.",
          right: "Ich habe es ihm gegeben.",
          whyAr:
            "بين الضميرين يتقدّم المنصوب على المجرور: es قبل ihm. وهو عكس ترتيب الأسماء تماماً، وهذا الانقلاب هو ما يُربك المتعلّمين.",
        },
        {
          wrong: "Ich habe das Buch meinem Bruder gegeben.",
          right: "Ich habe meinem Bruder das Buch gegeben.",
          whyAr:
            "بين الاسمين يتقدّم المجرور على المنصوب — عكس الضمائر. والجملة الأولى ليست خاطئةً تماماً لكنّها تُفهم على تأكيدٍ خاصّ لم تقصده.",
        },
        {
          wrong: "Ich habe nicht gelesen das Buch.",
          right: "Ich habe das Buch nicht gelesen.",
          whyAr:
            "خطآن: المفعول خرج بعد القوس، وnicht وُضع في غير موضعه. وموضع nicht لنفي الجملة كلّها هو قبل Partizip II مباشرةً.",
        },
        {
          wrong: "Wir sind nach Prag mit dem Zug letzten Sommer gefahren.",
          right: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
          whyAr:
            "ترتيبٌ معكوس: المكان أوّلاً والزمان آخراً على المنوال العربيّ. والترتيب المحايد TeKaMoLo: زمان ⟵ كيفية ⟵ مكان. والجملة مفهومة لكنّها تُسمع مترجَمة.",
        },
      ],
      relatedRuleComparison: {
        title: "قوسٌ واحد بأربعة مِلْآت",
        content:
          "المساحة الوسطى التي تدرسها اليوم ليست خاصّةً بـPerfekt، بل هي **بين كلّ قوسين** في الألمانية:\n· Ich **habe** dir gestern eine Jacke **gekauft**. ⟵ Perfekt\n· Ich **will** dir morgen eine Jacke **kaufen**. ⟵ ناقص + مصدر\n· Ich **kaufe** dir morgen eine Jacke **ein**. ⟵ فعلٌ منفصل\n· Die Jacke **wird** dir sicher gut **stehen**. ⟵ مستقبل (b1-08)\nالترتيب الداخليّ واحدٌ في الأربعة. فما تتقنه اليوم يخدمك في كلّ زمنٍ مركّب تتعلّمه لاحقاً.\n\nوسيتّسع الباب مرّةً أخيرة في B1 مع الجمل الفرعية، حيث يذهب **الفعل المصرَّف نفسه** إلى الآخر (…, weil ich dir eine Jacke **gekauft habe**). ولاحظ الترتيب هناك: Partizip II ثمّ المساعد — معكوسٌ عمّا تعرفه. وهو أوضح دليلٍ على أنّ الألمانية تدفع الثقل إلى النهاية دفعاً منهجياً.",
      },
    },
    {
      id: "t4",
      titleAr: "لغة السفر: الحجز والوصول والشكوى",
      titleDe: "Reisewortschatz: buchen, ankommen, sich beschweren",
      explanationAr:
        "القواعد وحدها لا تُوصلك إلى الفندق. وهذه الكتلة **معجميّة وظيفية**: ما تحتاج قوله فعلاً في مطارٍ ومحطّةٍ وفندق — وهي مادّة **Sprechen Teil 2** في امتحان A2 حيث تُطلب منك محادثةٌ في موقفٍ خدميّ.\n\n**أوّلاً — الحجز والتذكرة:**\n· **buchen** (يحجز) ⟵ Ich habe ein Zimmer **gebucht**. · **reservieren** ⟵ Ich möchte einen Tisch reservieren.\n· **die Hinfahrt / die Rückfahrt** (الذهاب / الإياب) · **hin und zurück** (ذهاباً وإياباً)\n· **einfach** هنا لا تعني „بسيط“ بل **ذهاباً فقط**: Einfach oder hin und zurück?\n· **der Fensterplatz / der Gangplatz** (مقعد النافذة / الممرّ)\n\n**ثانياً — الحركة: أفعالٌ كلّها مع sein، وكلّها منفصلة.**\n· **abfahren** (ينطلق — قطارٌ أو حافلة) ⟵ Der Zug **ist** pünktlich **abgefahren**.\n· **ankommen** (يصل) ⟵ Wir **sind** um acht **angekommen**.\n· **umsteigen** (يبدّل وسيلة النقل) ⟵ Ich **bin** in Köln **umgestiegen**.\n· **abfliegen / landen** (يقلع / يهبط) ⟵ Das Flugzeug **ist** in Wien **gelandet**.\nولاحظ الاطّراد: **حركةٌ ⟵ sein**، و**بادئةٌ منفصلة ⟵ ge- في الوسط**. قاعدتان من A1 تعملان معاً.\n\n**ثالثاً — في الفندق:**\n· **einchecken / auschecken** · **die Übernachtung** (المبيت ليلةً) · **das Einzelzimmer / das Doppelzimmer**\n· **inklusive Frühstück** (شاملاً الفطور) · **die Rezeption** (الاستقبال)\n\n**رابعاً — الشكوى، وهي مهارةٌ تُقيَّم:**\nالشكوى الألمانية **مباشرةٌ ومهذّبة معاً**، وصيغتها ثلاث خطوات: وصفُ المشكلة ⟵ أثرُها ⟵ الطلب.\n· **Entschuldigung, das Zimmer ist leider nicht sauber.** (المشكلة)\n· **Ich konnte deshalb nicht schlafen.** (الأثر)\n· **Könnten Sie mir bitte ein anderes Zimmer geben?** (الطلب)\nوالكلمة المفتاح **leider** (للأسف): تُلطّف الشكوى بلا أن تُضعفها، وهي علامةُ المتكلّم المهذّب في هذا السياق.",
      whyAr:
        "لماذا نُفرد كتلةً للمعجم في درسٍ نحويّ؟ لأنّ معايير CEFR لا تقيس النحو وحده بل **القدرة على أداء مهمّة**. ووصفُ A2 يذكر صراحةً „التعامل مع أغلب المواقف التي تنشأ أثناء السفر“. فالسفر ليس موضوعاً لطيفاً اختير للتنويع، بل هو **الميدان الذي يُعرَّف به المستوى**.\n\nولماذا كانت أفعال السفر كلّها منفصلةً ومع sein؟ ليست صدفة: البوادئ ab- وan- وum- تدلّ في أصلها على **اتّجاه الحركة** (ab = بعيداً عن، an = نحو، um = تحوّلاً)، والحركة بين نقطتين هي بالضبط شرط sein. فالمعجم والنحو يلتقيان هنا التقاءً منتظماً: الباب الدلاليّ الواحد يحمل خصائص نحوية واحدة.\n\nوأمّا الشكوى فلها ثقلٌ ثقافيّ يتجاوز اللغة. الألمان يعدّون الشكوى المباشرة **حقّاً مشروعاً** لا وقاحة، ومن سكت عن خطأٍ في خدمةٍ دفع ثمنها لا يُعدّ متسامحاً بل غير مبالٍ. لكنّ المباشرة يجب أن تُغلَّف: leider وkönnten وbitte هي الغلاف. والمتعلّم الذي يحذف الغلاف يبدو عدوانياً، والذي يحذف المضمون لا يُفهم مراده.",
      table: {
        title: "معجم السفر — الأساسيّ",
        columns: ["الألمانية", "العربية", "ملاحظة"],
        rows: [
          {
            label: "buchen / reservieren",
            cells: ["يحجز", "Ich habe gebucht (haben — له مفعول)"],
          },
          {
            label: "abfahren",
            cells: ["ينطلق (قطار/حافلة)", "ist abgefahren — حركة + منفصل"],
          },
          { label: "ankommen", cells: ["يصل", "ist angekommen"] },
          {
            label: "umsteigen",
            cells: ["يبدّل وسيلة النقل", "ist umgestiegen"],
          },
          { label: "landen", cells: ["يهبط (طائرة)", "ist gelandet"] },
          {
            label: "hin und zurück",
            cells: ["ذهاباً وإياباً", "مقابل einfach = ذهاباً فقط"],
          },
          {
            label: "die Verspätung",
            cells: ["التأخير", "Der Zug hat Verspätung."],
          },
          { label: "leider", cells: ["للأسف", "كلمة تلطيف الشكوى"] },
        ],
      },
      examples: [
        {
          de: "Ich habe online ein Doppelzimmer für zwei Nächte gebucht.",
          ar: "حجزتُ عبر الإنترنت غرفةً مزدوجة لليلتين.",
        },
        {
          de: "Einmal nach Hamburg, bitte. – Einfach oder hin und zurück?",
          ar: "تذكرة إلى هامبورغ من فضلك. — ذهاباً فقط أم ذهاباً وإياباً؟",
        },
        {
          de: "Der Zug ist mit zwanzig Minuten Verspätung angekommen.",
          ar: "وصل القطار متأخّراً عشرين دقيقة.",
        },
        {
          de: "In Frankfurt müssen Sie umsteigen.",
          ar: "في فرانكفورت عليك تبديل القطار.",
        },
        {
          de: "Wir sind um Mitternacht in Wien gelandet.",
          ar: "هبطنا في فيينّا منتصف الليل.",
        },
        {
          de: "Entschuldigung, das Zimmer ist leider nicht sauber.",
          ar: "عذراً، الغرفة للأسف ليست نظيفة. (خطوة المشكلة)",
        },
        {
          de: "Könnten Sie mir bitte ein anderes Zimmer geben?",
          ar: "هل يمكنكم إعطائي غرفةً أخرى من فضلكم؟ (خطوة الطلب)",
        },
        { de: "Ist das Frühstück inklusive?", ar: "هل الفطور مشمول؟" },
      ],
      comparisonWithArabic:
        "الشكوى هي الفارق الثقافيّ الأكبر في هذا الدرس. الثقافة العربية تميل إلى **المداورة**: يُلمّح المتكلّم أوّلاً („الغرفة… كيف أقول… فيها شيءٌ بسيط“) ويترك المخاطَب يستنتج. والثقافة الألمانية تعدّ هذا **إضاعةً للوقت** وربّما إرباكاً: الموظّف لا يفهم ما تريد فلا يستطيع مساعدتك.\n\nوالصيغة الألمانية المتوقّعة مباشرةٌ ومغلَّفة معاً: **Entschuldigung** للاستئذان، ثمّ **leider** للتلطيف، ثمّ المشكلة صريحةً، ثمّ الطلب بصيغة **Könnten Sie…?** وهذه ليست وقاحةً بل الشكل المهذّب المعتمد.\n\nوفي المعجم فخٌّ لطيف: كلمة **einfach** تعني „بسيط، سهل“ في كلّ سياقٍ إلاّ التذاكر، فتعني هناك **ذهاباً فقط**. فمن أجاب „einfach“ على سؤال البائع ظنّاً أنّه يقول „الأمر بسيط“ اشترى تذكرة ذهابٍ بلا عودة. وهذا نموذجٌ لما يسمّيه المعجميّون „الصديق الكاذب داخل اللغة الواحدة“: كلمةٌ تُغيّر معناها بتغيّر السياق لا بتغيّر اللغة.",
      eselsbruecke:
        "أفعال السفر كلّها من نمطٍ واحد: بادئةٌ منفصلة + حركة + sein (ist abgefahren · ist angekommen · ist umgestiegen). وللشكوى ثلاث خطوات: المشكلة ← أثرها ← الطلب، وleider هي الغلاف المهذّب.",
      commonMistakes: [
        {
          wrong: "Der Zug hat um acht abgefahren.",
          right: "Der Zug ist um acht abgefahren.",
          whyAr:
            "abfahren حركةٌ بين نقطتين فمساعدها sein. وأفعال السفر كلّها على هذا النمط، فمن أخطأ في واحدٍ منها أخطأ في الباب كلّه.",
        },
        {
          wrong: "Ich habe in Köln umgestiegen.",
          right: "Ich bin in Köln umgestiegen.",
          whyAr:
            "umsteigen حركة كذلك ⟵ sein. ولاحظ أنّ وجود اسم مكانٍ (in Köln) لا يجعله مفعولاً به: المفعول به منصوبٌ بلا حرف جرّ.",
        },
        {
          wrong: "Einfach, bitte. (والمقصود: الأمر بسيط)",
          right: "Hin und zurück, bitte.",
          whyAr:
            "einfach في سياق التذاكر تعني «ذهاباً فقط» لا «بسيط». وهذا فخّ معجميّ يشتري به المتعلّم تذكرةً بلا عودة.",
        },
        {
          wrong: "Das Zimmer ist schlecht! Geben Sie mir ein anderes!",
          right:
            "Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes geben?",
          whyAr:
            "المضمون صحيح والغلاف مفقود. والصيغة الأولى تُسمع عدوانية: أمرٌ صريح بلا استئذانٍ ولا تلطيف. وقسم Sprechen يُقيّم التهذيب بنداً مستقلّاً.",
        },
        {
          wrong: "Ich habe ein Zimmer gebucht für zwei Nächte.",
          right: "Ich habe für zwei Nächte ein Zimmer gebucht.",
          whyAr:
            "خروج الظرف بعد القوس. والمساحة الوسطى تحمله: الزمان يتقدّم على المفعول المنكَّر بحسب ترتيب TeKaMoLo.",
        },
      ],
      relatedRuleComparison: {
        title: "من a1-11 إلى a2-01 — المدينة ثمّ السفر",
        content:
          "في a1-11 تعلّمتَ التنقّل **داخل** المدينة: Wie komme ich zum Bahnhof? · mit dem Bus · umsteigen. واليوم تنتقل إلى التنقّل **بين** المدن والبلدان، والمعجم يتوسّع بالنمط نفسه:\n· داخل المدينة: die Haltestelle · die Fahrkarte · zu Fuß\n· بين المدن: der Bahnsteig · die Hinfahrt · die Verspätung · das Gleis\nوالفعل umsteigen يخدم الميدانين معاً — فهو الجسر بين الدرسين.\n\nوالفرق الوظيفيّ: في A1 كنتَ **تسأل عن الطريق** (سائلاً محتاجاً)، وفي A2 صرتَ **تحجز وتشتكي** (متعاملاً له حقوق). وهذا تدرّجٌ مقصود في معايير CEFR: من طلب المساعدة إلى إدارة الموقف.",
      },
    },
  ],
  reading: {
    id: "read-a2-01",
    titleDe: "Eine Reise, die anders lief",
    titleAr: "رحلةٌ سارت على غير ما خُطّط لها",
    textType: "erzaehlung",
    paragraphs: [
      "Letzten Sommer wollten meine Schwester und ich eine Woche in Prag verbringen. Wir hatten alles genau geplant: Wir buchten die Zugtickets schon im Mai, reservierten ein kleines Hotel in der Altstadt und schrieben eine lange Liste mit Museen und Cafés. Ich war noch nie in Tschechien gewesen und freute mich sehr auf die Reise.",
      "Am Abfahrtstag standen wir um fünf Uhr auf. Der Zug sollte um sieben abfahren. Aber am Bahnhof gab es eine Durchsage: „Der Zug nach Prag hat heute zwei Stunden Verspätung.“ Wir konnten nichts machen und tranken erst einmal einen Kaffee. Nach drei Stunden sind wir endlich abgefahren.",
      "In Dresden mussten wir umsteigen. Dort ist etwas passiert, was ich nie vergessen werde: Meine Schwester hat ihren Rucksack im ersten Zug vergessen — mit ihrem Pass und ihrem Geld. Wir sind sofort zum Servicepoint gelaufen. Der Mitarbeiter war sehr freundlich. Er hat telefoniert, gesucht und nach zwanzig Minuten gesagt: „Der Rucksack ist da. Sie können ihn morgen in Prag abholen.“",
      "Am Ende sind wir um Mitternacht angekommen — acht Stunden später als geplant. Das Hotel hatte unser Zimmer schon weitergegeben, weil wir nicht angerufen hatten. Wir standen also nachts in einer fremden Stadt ohne Zimmer und ohne Pass.",
      "Aber dann kam die schönste Überraschung: Die Frau an der Rezeption hat für uns ein anderes Hotel gefunden, zwei Straßen weiter, und es war sogar billiger und schöner. Am nächsten Morgen haben wir den Rucksack abgeholt, und danach war die Woche wirklich wunderbar.",
      "Heute erzähle ich diese Geschichte gern. Denn von den perfekten Reisen erinnere ich mich an wenig. Aber an diesen Tag erinnere ich mich an jede Minute.",
    ],
    paragraphsAr: [
      "الصيف الماضي أردنا أنا وأختي أن نقضي أسبوعاً في براغ. كنّا قد خطّطنا لكلّ شيءٍ بدقّة: حجزنا تذاكر القطار في مايو، وحجزنا فندقاً صغيراً في المدينة القديمة، وكتبنا قائمةً طويلة بالمتاحف والمقاهي. لم أكن قد زرتُ التشيك من قبل قطّ، وكنتُ متشوّقاً جداً للرحلة.",
      "يوم السفر نهضنا في الخامسة. كان القطار سينطلق في السابعة. لكن في المحطّة جاء إعلان: «قطار براغ متأخّر اليوم ساعتين». لم نستطع فعل شيءٍ فشربنا قهوةً أوّلاً. وبعد ثلاث ساعات انطلقنا أخيراً.",
      "في درسدن كان علينا تبديل القطار. وهناك حدث شيءٌ لن أنساه أبداً: نسيت أختي حقيبة ظهرها في القطار الأوّل — وفيها جواز سفرها ونقودها. ركضنا فوراً إلى مكتب الخدمة. كان الموظّف لطيفاً جداً. اتّصل وبحث وقال بعد عشرين دقيقة: «الحقيبة موجودة. يمكنكم أخذها غداً في براغ».",
      "وفي النهاية وصلنا منتصف الليل — متأخّرين ثماني ساعات عمّا خُطّط. وكان الفندق قد أعطى غرفتنا لغيرنا لأنّنا لم نتّصل. فوقفنا ليلاً في مدينةٍ غريبة بلا غرفةٍ وبلا جواز.",
      "لكن جاءت بعد ذلك أجمل مفاجأة: وجدت لنا الموظّفة في الاستقبال فندقاً آخر على بُعد شارعين، وكان أرخص وأجمل. وفي صباح اليوم التالي أخذنا الحقيبة، وبعدها كان الأسبوع رائعاً حقاً.",
      "واليوم أحكي هذه القصّة بسرور. فالرحلات المثالية لا أذكر منها إلاّ القليل. أمّا هذا اليوم فأذكر منه كلّ دقيقة.",
    ],
    glossary: [
      {
        de: "verbringen",
        ar: "يقضي (وقتاً)",
        noteAr: "eine Woche in Prag verbringen",
      },
      {
        de: "buchten (buchen)",
        ar: "حجزوا",
        noteAr: "Präteritum — النصّ سردٌ مكتوب",
      },
      {
        de: "die Altstadt",
        ar: "المدينة القديمة",
      },
      {
        de: "die Durchsage",
        ar: "إعلانٌ صوتيّ (في محطّة أو مطار)",
      },
      {
        de: "die Verspätung",
        ar: "التأخير",
        noteAr: "zwei Stunden Verspätung haben",
      },
      {
        de: "abgefahren (abfahren)",
        ar: "انطلق",
        noteAr: "حركة ⟵ sein، وbادئة منفصلة",
      },
      {
        de: "umsteigen",
        ar: "يبدّل وسيلة النقل",
        noteAr: "ist umgestiegen",
      },
      {
        de: "vergessen",
        ar: "ينسى",
        noteAr: "قويّ: vergaß – vergessen، وPartizip بلا ge- (بادئة ver-)",
      },
      {
        de: "der Rucksack",
        ar: "حقيبة الظهر",
      },
      {
        de: "der Mitarbeiter",
        ar: "الموظّف، العامل",
      },
      {
        de: "abholen",
        ar: "يأخذ، يستلم (شيئاً أو شخصاً)",
        noteAr: "hat abgeholt — منفصل",
      },
      {
        de: "die Überraschung",
        ar: "المفاجأة",
      },
      {
        de: "die Rezeption",
        ar: "مكتب الاستقبال",
      },
      {
        de: "erinnere mich an (sich erinnern)",
        ar: "أتذكّر",
        noteAr: "‎+ Akkusativ: an diesen Tag erinnere ich mich",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        questionDe: "Wie haben die Geschwister die Reise vorbereitet?",
        instructionAr: "اقرأ الفقرة الأولى: كيف استعدّا للرحلة؟",
        options: [
          "Sie haben Tickets und Hotel im Voraus gebucht",
          "Sie sind ohne Plan gefahren",
          "Sie haben erst am Bahnhof gebucht",
          "Sie sind mit dem Auto gefahren",
        ],
        correctIndex: 0,
        explanation:
          "«Wir buchten die Zugtickets schon im Mai, reservierten ein kleines Hotel» — حجزٌ مسبق في مايو.",
        errorType: "vocabulary",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Warum sind sie nicht um sieben abgefahren?",
        instructionAr: "اقرأ الفقرة الثانية: لماذا لم ينطلقا في السابعة؟",
        options: [
          "Der Zug hatte zwei Stunden Verspätung",
          "Sie haben verschlafen",
          "Der Zug ist ausgefallen",
          "Sie haben das Ticket verloren",
        ],
        correctIndex: 0,
        explanation:
          "الإعلان قال: «Der Zug nach Prag hat heute zwei Stunden Verspätung».",
        errorType: "vocabulary",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        questionDe: "Was ist in Dresden passiert?",
        instructionAr: "اقرأ الفقرة الثالثة: ماذا حدث في درسدن؟",
        options: [
          "Die Schwester hat ihren Rucksack im Zug vergessen",
          "Sie haben den Anschlusszug verpasst",
          "Sie haben sich verlaufen",
          "Der Zug ist nicht gekommen",
        ],
        correctIndex: 0,
        explanation:
          "«Meine Schwester hat ihren Rucksack im ersten Zug vergessen — mit ihrem Pass und ihrem Geld.»",
        errorType: "vocabulary",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        questionDe: "Warum steht „Wir buchten“ und nicht „Wir haben gebucht“?",
        instructionAr: "سؤال قواعد: لماذا buchten لا haben gebucht؟",
        options: [
          "Weil der Text eine geschriebene Erzählung ist",
          "Weil buchen ein starkes Verb ist",
          "Weil es ein Fehler ist",
          "Weil buchen immer mit Präteritum steht",
        ],
        correctIndex: 0,
        explanation:
          "Präteritum هو زمن السرد المكتوب. ولو حكى الراوي القصّة شفهياً لقال «wir haben gebucht».",
        errorType: "grammar",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        questionDe: "Welches Hilfsverb steht bei „abfahren“ und warum?",
        instructionAr: "سؤال قواعد: أيّ مساعدٍ مع abfahren ولماذا؟",
        options: [
          "sein — weil es eine Bewegung von A nach B ist",
          "haben — weil es ein Objekt hat",
          "sein — weil es trennbar ist",
          "haben — weil es ein starkes Verb ist",
        ],
        correctIndex: 0,
        explanation:
          "«sind wir endlich abgefahren» — الحركة بين نقطتين تستدعي sein. والانفصال يُحدّد موضع ge- لا المساعد.",
        errorType: "grammar",
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 5,
        questionDe: "Wie endete die Geschichte?",
        instructionAr: "اقرأ الفقرة الخامسة: كيف انتهت القصّة؟",
        options: [
          "Sie fanden ein besseres und billigeres Hotel",
          "Sie fuhren wieder nach Hause",
          "Sie schliefen am Bahnhof",
          "Sie fanden den Rucksack nie",
        ],
        correctIndex: 0,
        explanation:
          "«ein anderes Hotel gefunden … und es war sogar billiger und schöner».",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      {
        de: "Wir hatten alles genau geplant.",
        ar: "كنّا قد خطّطنا لكلّ شيءٍ بدقّة",
      },
      {
        de: "Der Zug hat zwei Stunden Verspätung.",
        ar: "القطار متأخّر ساعتين",
      },
      {
        de: "In … mussten wir umsteigen.",
        ar: "في … كان علينا تبديل القطار",
      },
      {
        de: "Ich war noch nie in … gewesen.",
        ar: "لم أكن قد زرتُ … من قبل قطّ",
      },
      {
        de: "Am Ende sind wir um … angekommen.",
        ar: "وفي النهاية وصلنا في …",
      },
      {
        de: "Daran erinnere ich mich an jede Minute.",
        ar: "أذكر من ذلك كلّ دقيقة",
      },
    ],
    discussionAr:
      "احكِ رحلةً لك سارت على غير ما خُطّط لها، في ثماني جملٍ على الأقلّ. استعمل Perfekt للأفعال العادية وPräteritum لـwar وhatte وkonnte وmusste، وأدخل ثلاثة على الأقلّ من أفعال السفر المنفصلة (abfahren · ankommen · umsteigen · abholen). ثمّ راجع كلّ جملة: هل أغلقتَ القوس بـPartizip II في آخرها؟",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "عطلة في برلين",
        lines: [
          {
            speaker: "Sami",
            de: "Ich habe letzte Woche Urlaub gemacht.",
            ar: "أخذت إجازة الأسبوع الماضي.",
          },
          {
            speaker: "Anna",
            de: "Schön! Was hast du gemacht?",
            ar: "جميل! ماذا فعلت؟",
          },
          {
            speaker: "Sami",
            de: "Ich bin nach Berlin geflogen und habe viele Museen besucht.",
            ar: "طرت إلى برلين وزرت متاحف كثيرة.",
          },
          {
            speaker: "Anna",
            de: "Hast du die Berliner Mauer gesehen?",
            ar: "هل رأيت سور برلين؟",
          },
          {
            speaker: "Sami",
            de: "Ja, natürlich! Und ich habe typisches Essen probiert.",
            ar: "نعم طبعاً! وجربت طعاماً تقليدياً.",
          },
        ],
      },
      {
        id: "l2",
        title: "عطلة على الشاطئ",
        lines: [
          {
            speaker: "Mona",
            de: "Wir sind nach Sousse gefahren.",
            ar: "ذهبنا إلى سوسة.",
          },
          { speaker: "Karim", de: "Wie war das Hotel?", ar: "كيف كان الفندق؟" },
          {
            speaker: "Mona",
            de: "Das Hotel war super! Wir haben geschwommen und in der Sonne gelegen.",
            ar: "كان الفندق رائعاً! سبحنا واستلقينا في الشمس.",
          },
          {
            speaker: "Karim",
            de: "Habt ihr Fotos gemacht?",
            ar: "هل التقطتم صوراً؟",
          },
          {
            speaker: "Mona",
            de: "Ja, viele! Ich zeige sie dir später.",
            ar: "نعم، كثيراً! سأريكها لاحقاً.",
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
        questionDe: "Was hat Sami in Berlin gemacht?",
        questionAr: "ماذا فعل سامي في برلين؟",
        options: ["Museen besucht", "geschwommen", "gearbeitet", "eingekauft"],
        correctIndex: 0,
        explanation: "قال: habe viele Museen besucht — زار متاحف كثيرة.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wohin sind Mona und Karim gefahren?",
        questionAr: "إلى أين ذهب منى وكريم؟",
        options: ["nach Sousse", "nach Berlin", "nach München", "nach Hamburg"],
        correctIndex: 0,
        explanation: "قالت منى: Wir sind nach Sousse gefahren.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie war das Hotel?",
        questionAr: "كيف كان الفندق؟",
        options: ["super", "schlecht", "teuer", "klein"],
        correctIndex: 0,
        explanation: "قالت: Das Hotel war super! — كان رائعاً.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hat Sami in Berlin probiert?",
        questionAr: "ماذا جرب سامي في برلين؟",
        options: ["typisches Essen", "typisches Bier", "nur Kaffee", "nichts"],
        correctIndex: 0,
        explanation:
          "قال سامي: Ich habe typisches Essen probiert — جربت طعاماً تقليدياً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات السفر: ei، eu، وsch",
    items: [
      {
        de: "die Reise",
        ar: "الرحلة",
        note: "ei = آي + s بين علة = ز: رايْزِه",
      },
      { de: "fliegen", ar: "يطير", note: "ie = إي: فليغِن" },
      { de: "der Urlaub", ar: "الإجازة", note: "au = آو: أورلاوب" },
      {
        de: "das Flugzeug",
        ar: "الطائرة",
        note: "eu = أُوي + z = تس (لا tz)، وg في نهاية كل جزء = ك: فلووك-تسويك",
      },
      {
        de: "geschwommen",
        ar: "سبح (تصريف)",
        note: "sch = ش + o مزدوجة: غِشڤومِن",
      },
      { de: "der Strand", ar: "الشاطئ", note: "st في البداية = شت: شترانت" },
    ],
    tip: "«das Flugzeug» كلمة مركبة رائعة: fliegen (يطير) + Zeug (شيء) = الطائرة حرفياً «شيء الطيران»!",
    shadowing: [
      {
        de: "Ich bin nach Berlin geflogen.",
        ar: "طرت إلى برلين.",
        tip: "geflogen = غِفلوغِن (o)",
      },
      {
        de: "Wir haben geschwommen.",
        ar: "سبحنا.",
        tip: "geschwommen = غِشڤومِن (ش+مزدوجة)",
      },
      {
        de: "Hast du ein Souvenir gekauft?",
        ar: "هل اشتريت تذكاراً؟",
        tip: "gekauft = غِكاوفت (au=آو)",
      },
      {
        de: "Ich habe viel gesehen.",
        ar: "رأيت الكثير.",
        tip: "gesehen = غِزيهِن (s=ز)",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب عن عطلتك الماضية (جملة كاملة بـ Perfekt):",
      prompt:
        "Was hast du im Urlaub gemacht? (مثال: Ich bin ... gefahren / Ich habe ... gemacht)",
      acceptedAnswers: [
        "Ich bin nach Sousse gefahren",
        "Ich habe geschwommen",
        "Ich habe Fotos gemacht",
        "Ich bin in Berlin gewesen",
      ],
      sampleAnswer: "Ich bin nach Sousse gefahren und habe geschwommen.",
      explanation:
        "استخدم sein للحركة (gefahren) وhaben للفعل العادي (geschwommen).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ haben/sein + التصريف:",
      template:
        "Ich ___ nach Berlin ___ (fliegen). Wir ___ Pizza ___ (essen). Sie ___ ein Buch ___ (kaufen).",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "hat"] },
        { correct: "geflogen", options: ["geflogen", "gefliegen", "geflogt"] },
        { correct: "haben", options: ["haben", "sind", "hat"] },
        { correct: "gegessen", options: ["gegessen", "geessen", "gegesst"] },
        { correct: "hat", options: ["hat", "ist", "haben"] },
        { correct: "gekauft", options: ["gekauft", "gekaufen", "gekaufte"] },
      ],
      explanation:
        "fliegen حركة → bin geflogen. essen/kaufen عادية → haben gegessen / hat gekauft.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich bin gestern nach Hause gegangen.",
      explanation: "ذهبت إلى المنزل أمس — gehen حركة → bin gegangen.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ ein Buch ___.",
      options: [
        "habe ... gekauft",
        "bin ... gekauft",
        "habe ... kaufen",
        "bin ... gekaufen",
      ],
      correctIndex: 0,
      explanation: "kaufen عادي → habe gekauft.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة (الحركة):",
      questionDe: "Wir ___ nach Deutschland ___.",
      options: [
        "sind ... geflogen",
        "haben ... geflogen",
        "sind ... gefliegt",
        "haben ... gefliegen",
      ],
      correctIndex: 0,
      explanation: "fliegen حركة → sein + geflogen.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بتصريفه في Perfekt:",
      pairs: [
        { left: "kaufen", right: "gekauft" },
        { left: "sehen", right: "gesehen" },
        { left: "essen", right: "gegessen" },
        { left: "fahren", right: "gefahren" },
      ],
      explanation: "منتظم (gekauft) وقوي (gesehen, gegessen, gefahren).",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه: التصريف في النهاية):",
      tokens: ["habe", "Ich", "gestern", "Pizza", "gegessen", "."],
      correctSentence: "Ich habe gestern Pizza gegessen.",
      explanation: "الإطار: Ich habe + التفاصيل + gegessen في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe nach Berlin geflogen.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "habe", "war", "hatte"],
      explanation:
        "fliegen فعل حركة ⇒ مساعده sein: Ich bin nach Berlin geflogen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ sein أو haben:",
      template:
        "Er ___ nach Tunis gefahren. Ich ___ ein Souvenir gekauft. Wir ___ geschwommen.",
      blanks: [
        { correct: "ist", options: ["ist", "hat"] },
        { correct: "habe", options: ["ist", "habe"] },
        { correct: "haben", options: ["sind", "haben"] },
      ],
      explanation:
        "fahren حركة → ist. kaufen → habe. schwimmen (في البحر) → haben/sind حسب السياق، هنا haben مع wir.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى الماضي (Perfekt):",
      prompt: "Ich kaufe ein Ticket. → (الماضي)",
      acceptedAnswers: [
        "Ich habe ein Ticket gekauft",
        "Ich habe ein Ticket gekauft.",
      ],
      sampleAnswer: "Ich habe ein Ticket gekauft.",
      explanation: "kaufen → habe gekauft.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Ich bin um sieben Uhr aufgestanden.",
      questionAr: "ما معنى الجملة؟",
      options: [
        "استيقظت في السابعة",
        "أستيقظ في السابعة",
        "سأستيقظ في السابعة",
        "كنت نائماً في السابعة",
      ],
      correctIndex: 0,
      explanation:
        "aufstehen فعل منفصل → Partizip: aufgestanden. bin لأنها تغير حالة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich habe geschwommen.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "habe", "war", "hatte"],
      explanation:
        "schwimmen حركة → sein: Ich bin geschwommen. والتصريف الثالث القوي geschwommen.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir haben im Hotel gut geschlafen.",
      explanation: "نمنام جيداً في الفندق — schlafen قوي: geschlafen.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II للفعل القويّ (عائلة i–a–u)",
      template: "Wir haben den ganzen Abend ___. (singen)",
      blanks: [
        {
          correct: "gesungen",
          options: ["gesungen", "gesingt", "gesangen", "gesungt"],
          errorType: "grammar",
        },
      ],
      explanation: "singen – sang – gesungen، عائلة i–a–u مثل trinken وfinden.",
      errorType: "grammar",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل Partizip II (عائلة ei–ie–ie)",
      template: "Ich habe ihm eine lange E-Mail ___. (schreiben)",
      blanks: [
        {
          correct: "geschrieben",
          options: ["geschrieben", "geschreibt", "geschreiben", "schrieb"],
          errorType: "grammar",
        },
      ],
      explanation:
        "schreiben – schrieb – geschrieben: تتغيّر الحركة وتبقى النهاية -en.",
      errorType: "grammar",
    },
    {
      id: "e13",
      type: "matching",
      instructionAr: "طابق كلّ فعلٍ بعائلة Ablaut التي ينتمي إليها",
      pairs: [
        { left: "trinken – trank – getrunken", right: "i – a – u" },
        { left: "bleiben – blieb – geblieben", right: "ei – ie – ie" },
        { left: "fliegen – flog – geflogen", right: "ie – o – o" },
        { left: "sprechen – sprach – gesprochen", right: "e – a – o" },
        {
          left: "denken – dachte – gedacht",
          right: "مختلط (تغيّر جذر + نهاية -t)",
        },
      ],
      explanation:
        "أربع عائلاتٍ كبرى وطائفةٌ مختلطة — من عرف النمط استغنى عن حفظ القائمة كلّها.",
      errorType: "grammar",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "في محادثةٍ عادية: أيّ صيغةٍ يقولها الألمانيّ فعلاً؟",
      questionDe: "Im Gespräch: Wie sagt man das?",
      options: [
        "Ich war gestern sehr müde.",
        "Ich bin gestern sehr müde gewesen.",
        "Ich habe gestern sehr müde gewesen.",
        "Ich gewesen gestern sehr müde.",
      ],
      correctIndex: 0,
      explanation:
        "sein تُقال بالـPräteritum في الكلام. والثانية صحيحةٌ نحواً لكنّها ثقيلة ونادرة.",
      errorType: "grammar",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل بالماضي المناسب للكلام (Präteritum للأفعال الخمسة)",
      template:
        "Ich ___ nicht kommen, ich ___ arbeiten. Es ___ keine andere Möglichkeit.",
      blanks: [
        {
          correct: "konnte",
          options: ["konnte", "habe gekonnt", "kann", "könnte"],
          errorType: "grammar",
        },
        {
          correct: "musste",
          options: ["musste", "habe gemusst", "muss", "müsste"],
          errorType: "grammar",
        },
        {
          correct: "gab",
          options: ["gab", "hat gegeben", "gibt", "gegeben"],
          errorType: "grammar",
        },
      ],
      explanation:
        "الأفعال الناقصة وes gibt تُقال بالـPräteritum في الكلام: konnte · musste · gab.",
      errorType: "grammar",
    },
    {
      id: "e16",
      type: "word-ordering",
      instructionAr: "رتّب الجملة: انتبه إلى ترتيب المساحة الوسطى (TeKaMoLo)",
      tokens: [
        "Wir",
        "sind",
        "letzten",
        "Sommer",
        "mit",
        "dem",
        "Zug",
        "nach",
        "Prag",
        "gefahren",
      ],
      correctSentence: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren",
      explanation:
        "زمان (letzten Sommer) ⟵ كيفية (mit dem Zug) ⟵ مكان (nach Prag)، وPartizip II يُغلق.",
      errorType: "word-order",
    },
    {
      id: "e17",
      type: "error-correction",
      instructionAr: "صحّح ترتيب الضميرين",
      wrongSentence: "Ich habe ihm es schon gesagt.",
      wrongWord: "ihm es",
      correctWord: "es ihm",
      options: ["es ihm", "ihm es", "ihn es", "es ihn"],
      explanation:
        "بين الضميرين يتقدّم المنصوب (es) على المجرور (ihm) — عكس ترتيب الأسماء.",
      errorType: "word-order",
    },
    {
      id: "e18",
      type: "error-correction",
      instructionAr: "صحّح موضع المفعول",
      wrongSentence: "Ich habe gegessen einen Apfel.",
      wrongWord: "gegessen einen Apfel",
      correctWord: "einen Apfel gegessen",
      options: [
        "einen Apfel gegessen",
        "gegessen einen Apfel",
        "einen Apfel essen",
        "gegessen ein Apfel",
      ],
      explanation:
        "Partizip II يُغلق الجملة، فالمفعول يسبقه — وهذا أشيع أخطاء العرب في الجملة الطويلة.",
      errorType: "word-order",
    },
    {
      id: "e19",
      type: "multiple-choice",
      instructionAr: "ما الفرق بين الجملتين؟",
      questionDe: "Ich habe nicht den Film gesehen, sondern die Serie.",
      options: [
        "النفي يقع على «الفيلم» وحده لا على المشاهدة",
        "النفي يقع على الجملة كلّها",
        "الجملتان بمعنى واحد",
        "الجملة خاطئة نحوياً",
      ],
      correctIndex: 0,
      explanation:
        "nicht قبل جزءٍ بعينه ينفيه وحده. ولنفي الجملة كلّها يوضع قبل Partizip II: «Ich habe den Film nicht gesehen».",
      errorType: "negation",
    },
    {
      id: "e20",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل المساعد الصحيح لأفعال السفر",
      template:
        "Der Zug ___ pünktlich abgefahren, und wir ___ um acht angekommen.",
      blanks: [
        {
          correct: "ist",
          options: ["ist", "hat", "war", "wird"],
          errorType: "grammar",
        },
        {
          correct: "sind",
          options: ["sind", "haben", "waren", "werden"],
          errorType: "grammar",
        },
      ],
      explanation:
        "abfahren وankommen حركةٌ بين نقطتين ⟵ sein. وأفعال السفر كلّها على هذا النمط.",
      errorType: "grammar",
    },
    {
      id: "e21",
      type: "multiple-choice",
      instructionAr: "في شبّاك التذاكر: ماذا تعني «einfach»؟",
      questionDe: "Am Schalter: „Einfach oder hin und zurück?“",
      options: [
        "ذهاباً فقط",
        "الأمر بسيط",
        "الدرجة الاقتصادية",
        "بدون حجز مقعد",
      ],
      correctIndex: 0,
      explanation:
        "einfach في سياق التذاكر تعني «ذهاباً فقط» لا «بسيط» — فخّ معجميّ يشتري به المتعلّم تذكرةً بلا عودة.",
      errorType: "vocabulary",
    },
    {
      id: "e22",
      type: "multiple-choice",
      instructionAr: "أيّ شكوى مناسبة في فندقٍ ألمانيّ؟",
      questionDe: "Das Zimmer ist nicht sauber. Was sagen Sie?",
      options: [
        "Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes geben?",
        "Das Zimmer ist schlecht! Geben Sie mir ein anderes!",
        "Vielleicht ist etwas mit dem Zimmer, ich weiß nicht.",
        "Kein Problem, das ist in Ordnung.",
      ],
      correctIndex: 0,
      explanation:
        "الشكوى الألمانية مباشرةٌ ومغلَّفة: Entschuldigung + leider + المشكلة صريحةً + Könnten Sie …?",
      errorType: "vocabulary",
    },
    {
      id: "e23",
      type: "transformation",
      instructionAr: "حوّل الجملة من السرد المكتوب إلى الكلام",
      prompt:
        "Der Zug fuhr um acht ab und erreichte Berlin am Mittag. → (im Gespräch)",
      acceptedAnswers: [
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht.",
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht",
      ],
      sampleAnswer:
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht.",
      hint: "الأفعال العادية في الكلام تُقال بالـPerfekt، وabfahren حركة ⟵ sein.",
      explanation:
        "abfahren ⟵ ist abgefahren (حركة) · erreichen له مفعول ⟵ hat erreicht.",
      errorType: "grammar",
    },
    {
      id: "e24",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe:
        "Wir hatten alles geplant. Aber der Zug hatte drei Stunden Verspätung. In Dresden mussten wir umsteigen. Am Ende sind wir um Mitternacht angekommen. Das Hotel war trotzdem noch offen, und wir konnten sofort einchecken.",
      statements: [
        {
          id: "s1",
          de: "Der Zug war pünktlich.",
          ar: "كان القطار في موعده.",
          isTrue: false,
          whyAr: "النصّ يقول «drei Stunden Verspätung» — تأخّر ثلاث ساعات.",
        },
        {
          id: "s2",
          de: "Sie mussten in Dresden umsteigen.",
          ar: "كان عليهم تبديل القطار في درسدن.",
          isTrue: true,
          whyAr: "«In Dresden mussten wir umsteigen».",
        },
        {
          id: "s3",
          de: "Im Text stehen hatten, mussten und konnten im Präteritum.",
          ar: "الأفعال hatten وmussten وkonnten وردت بالـPräteritum.",
          isTrue: true,
          whyAr: "haben والأفعال الناقصة تُقال بالـPräteritum حتّى في الكلام.",
        },
        {
          id: "s4",
          de: "Das Hotel war schon geschlossen.",
          ar: "كان الفندق قد أُغلق.",
          isTrue: false,
          whyAr: "«Das Hotel war trotzdem noch offen».",
        },
      ],
      explanation:
        "النصّ يجمع القاعدتين: Perfekt للأفعال العادية (sind angekommen) وPräteritum لـhaben والناقصة.",
      errorType: "grammar",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich habe nach Berlin gefliegen.",
        right: "Ich bin nach Berlin geflogen.",
        whyAr: "الحركة → sein + التصريف القوي geflogen.",
      },
      {
        wrong: "Ich habe gegessen ein Apfel.",
        right: "Ich habe einen Apfel gegessen.",
        whyAr: "Partizip II في نهاية الجملة دائماً.",
      },
      {
        wrong: "gekaufen (منتظم كقوي)",
        right: "gekauft",
        whyAr: "kaufen منتظم: ge+jذر+t. القوي فقط بـ -en.",
      },
    ],
    eselsbruecken: [
      "«حساب = haben، حركة = sein» — إذا كان الفعل يحرك مكاناً أو يغير حالة فاستخدم sein.",
      "«الإطار»: الفعل المساعد يفتح، والتصريف يغلق — Ich habe ... gegessen.",
    ],
    culturalNote: {
      title: "التخطيط للعطلات",
      content:
        "الألمان يحجزون إجازاتهم مبكراً جداً ويخططون لها بعناية: «Urlaubsplanung». وكثيرون يفضلون «Reisen mit dem Auto» أو القطار. وعند العودة يسألون دائماً: «Wie war dein Urlaub?» — فجهّز جملة Perfekt جاهزة دائماً!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ einen Film ___.",
      options: [
        "habe ... gesehen",
        "bin ... gesehen",
        "habe ... geseht",
        "bin ... geseht",
      ],
      correctIndex: 0,
      explanation: "sehen عادي → habe gesehen.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة (الحركة):",
      questionDe: "Sie ___ nach Hause ___.",
      options: [
        "ist ... gegangen",
        "hat ... gegangen",
        "ist ... gegeht",
        "hat ... gegeht",
      ],
      correctIndex: 0,
      explanation: "gehen حركة → ist gegangen.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["ein", "Hast", "Souvenir", "du", "gekauft", "?"],
      correctSentence: "Hast du ein Souvenir gekauft?",
      explanation: "سؤال Perfekt: الفعل المساعد أولاً + التصريف في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Wir haben nach Tunis gefahren.",
      wrongWord: "haben",
      correctWord: "sind",
      options: ["sind", "haben", "waren", "hatten"],
      explanation:
        "fahren فعل حركة ⇒ مساعده sein: Wir sind nach Tunis gefahren.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف الفعل في Perfekt:",
      template: "Er ___ (sein) gestern in Berlin. Ich ___ (haben) Hunger.",
      blanks: [
        {
          correct: "ist gewesen",
          options: ["ist gewesen", "hat gehabt", "ist gehabt"],
        },
        {
          correct: "habe gehabt",
          options: ["ist gewesen", "habe gehabt", "habe gewesen"],
        },
      ],
      explanation: "sein → ist gewesen. haben → habe gehabt.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "der Urlaub",
      ar: "الإجازة",
      example: "Ich mache Urlaub.",
      exampleAr: "آخذ إجازة.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Reise",
      ar: "الرحلة",
      example: "Die Reise war schön.",
      exampleAr: "كانت الرحلة جميلة.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "fliegen",
      ar: "يطير",
      example: "Ich bin nach Berlin geflogen.",
      exampleAr: "طرت إلى برلين.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "das Flugzeug",
      ar: "الطائرة",
      example: "Das Flugzeug ist groß.",
      exampleAr: "الطائرة كبيرة.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "das Perfekt",
      ar: "الماضي التام",
      example: "Ich habe gegessen.",
      exampleAr: "أكلت.",
      level: "A2",
    },
    {
      id: "fc6",
      de: "das Partizip II",
      ar: "التصريف الثالث",
      example: "gesehen, gegessen, gekauft",
      exampleAr: "رأى، أكل، اشترى (في الماضي)",
      level: "A2",
    },
    {
      id: "fc7",
      de: "das Souvenir",
      ar: "التذكار",
      example: "Ich habe ein Souvenir gekauft.",
      exampleAr: "اشتريت تذكاراً.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "schwimmen",
      ar: "يسبح",
      example: "Wir haben geschwommen.",
      exampleAr: "سبحنا.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "buchen (hat gebucht)",
      ar: "يحجز",
      example: "Ich habe ein Zimmer gebucht.",
      exampleAr: "حجزتُ غرفة.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "abfahren (ist abgefahren)",
      ar: "ينطلق (قطار أو حافلة)",
      example: "Der Zug ist pünktlich abgefahren.",
      exampleAr: "انطلق القطار في موعده.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "ankommen (ist angekommen)",
      ar: "يصل",
      example: "Wir sind um acht angekommen.",
      exampleAr: "وصلنا في الثامنة.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "umsteigen (ist umgestiegen)",
      ar: "يبدّل وسيلة النقل",
      example: "In Dresden mussten wir umsteigen.",
      exampleAr: "في درسدن كان علينا التبديل.",
      level: "A2",
    },
    {
      id: "fc13",
      de: "die Verspätung",
      ar: "التأخير",
      example: "Der Zug hat zwei Stunden Verspätung.",
      exampleAr: "القطار متأخّر ساعتين.",
      level: "A2",
    },
    {
      id: "fc14",
      de: "hin und zurück",
      ar: "ذهاباً وإياباً (مقابل einfach)",
      example: "Einmal nach Hamburg, hin und zurück.",
      exampleAr: "تذكرة إلى هامبورغ ذهاباً وإياباً.",
      level: "A2",
    },
    {
      id: "fc15",
      de: "abholen (hat abgeholt)",
      ar: "يستلم، يأخذ",
      example: "Wir haben den Rucksack abgeholt.",
      exampleAr: "استلمنا حقيبة الظهر.",
      level: "A2",
    },
    {
      id: "fc16",
      de: "vergessen (hat vergessen)",
      ar: "ينسى",
      example: "Sie hat ihren Rucksack im Zug vergessen.",
      exampleAr: "نسيت حقيبتها في القطار.",
      level: "A2",
    },
    {
      id: "fc17",
      de: "die Überraschung",
      ar: "المفاجأة",
      example: "Das war eine schöne Überraschung.",
      exampleAr: "كانت مفاجأةً جميلة.",
      level: "A2",
    },
    {
      id: "fc18",
      de: "leider",
      ar: "للأسف (كلمة تلطيف الشكوى)",
      example: "Das Zimmer ist leider nicht sauber.",
      exampleAr: "الغرفة للأسف ليست نظيفة.",
      level: "A2",
    },
    {
      id: "fc19",
      de: "die Rezeption",
      ar: "مكتب الاستقبال",
      example: "Die Frau an der Rezeption hat uns geholfen.",
      exampleAr: "ساعدتنا الموظّفة في الاستقبال.",
      level: "A2",
    },
    {
      id: "fc20",
      de: "die Durchsage",
      ar: "إعلانٌ صوتيّ (في محطّة أو مطار)",
      example: "Am Bahnhof gab es eine Durchsage.",
      exampleAr: "كان في المحطّة إعلان.",
      level: "A2",
    },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a2-01-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة صديق عن عطلته بالعربية",
      sourceDe:
        "Letzten Sommer bin ich nach Deutschland geflogen. Ich habe Berlin besucht und viele Museen gesehen. Am Ende habe ich ein Souvenir gekauft.",
      taskAr:
        "انقل الرسالة بالعربية إلى صديق لا يفهم الألمانية، محافظاً على زمن الماضي (ماذا حدث).",
      modelAnswerAr:
        "«الصيف الماضي سافرت إلى ألمانيا بالطائرة. زرت برلين وشاهدت متاحف كثيرة. وفي النهاية اشتريت تذكاراً.»",
      keyPointsAr: [
        "نقلت فعل السفر بالطائرة",
        "ذكرت زيارة برلين والمتاحف",
        "ذكرت شراء التذكار",
        "حافظت على زمن الماضي",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a2-01-1",
      scenarioAr: "صديق ألماني يسألك عن عطلتك الأخيرة.",
      scenarioDe: "Ein deutscher Freund fragt nach deinem letzten Urlaub.",
      strategyAr:
        "الاستراتيجية: سرد أحداث ماضية بأسلوب Perfekt والرد على أسئلة المتابعة.",
      rounds: [
        {
          speakerDe: "Was hast du im Urlaub gemacht?",
          speakerAr: "ماذا فعلت في العطلة؟",
          options: [
            {
              de: "Ich bin nach Deutschland geflogen und habe Berlin besucht.",
              ar: "طرت إلى ألمانيا وزرت برلين.",
              best: true,
              replyDe: "Toll! Was hast du dort gesehen?",
              replyAr: "رائع! ماذا شاهدت هناك؟",
            },
            {
              de: "Ich habe ein Buch gelesen.",
              ar: "قرأت كتاباً.",
              best: false,
              replyDe: "Nur ein Buch? Und sonst?",
              replyAr: "كتاباً فقط؟ وماذا أيضاً؟",
            },
          ],
        },
        {
          speakerDe: "Was hast du dort gesehen?",
          speakerAr: "ماذا شاهدت هناك؟",
          options: [
            {
              de: "Ich habe das Brandenburger Tor und viele Museen gesehen.",
              ar: "شاهدت بوابة براندنبورغ ومتاحف كثيرة.",
              best: true,
              replyDe: "Sehr schön! Hast du auch gegessen?",
              replyAr: "جميل جداً! هل أكلت أيضاً؟",
            },
            {
              de: "Ich habe geschlafen.",
              ar: "نمتُ.",
              best: false,
              replyDe: "Nur geschlafen? Schade!",
              replyAr: "نمتَ فقط؟ يا للأسف!",
            },
          ],
        },
        {
          speakerDe: "Hast du typisch deutsches Essen probiert?",
          speakerAr: "هل جرّبت أكلاً ألمانياً تقليدياً؟",
          options: [
            {
              de: "Ja, ich habe Currywurst und Brezeln gegessen.",
              ar: "نعم، أكلت كاري فورست وخبز برتزل.",
              best: true,
              replyDe: "Lecker! Ich liebe Currywurst auch!",
              replyAr: "لذيذ! أنا أحب كاري فورست أيضاً!",
            },
            {
              de: "Nein, ich habe nichts gegessen.",
              ar: "لا، لم آكل شيئاً.",
              best: false,
              replyDe: "Wirklich? Das ist schade für die deutsche Küche!",
              replyAr: "حقاً؟ هذا مؤسف للطبخ الألماني!",
            },
          ],
        },
      ],
    },
  ],
};
