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
  summary:
    "Perfekt المتقدّم بعد أساسه في A1: عائلات الأفعال القوية (Ablaut) وصورها الثلاث، وقسمة العمل بين Perfekt وPräteritum (war · hatte · konnte)، وترتيب المساحة الوسطى بين قوسَي الجملة، ثم معجم السفر: الحجز والوصول والشكوى.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann ausgewählte Stammformen starker und gemischter Verben erkennen und den gezeigten Mustern zuordnen.",
      ar: "أن أميّز صور أفعال قوية ومختلطة محددة، وأربطها بالأنماط المعروضة دون تعميمها على كل فعل.",
      evidence: {
        exerciseIds: ["e11", "e12", "e13"],
        taskIds: ["practice:a2-01:e11", "practice:a2-01:e12", "practice:a2-01:e13"],
        labelAr: "إكمال Partizip II ومطابقة صور الأفعال المختارة بأنماطها المعروضة.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in vorgegebenen Reisebeispielen Perfekt und Präteritum unterscheiden und eine zur beschriebenen Verwendung passende Zielform wählen.",
      ar: "أن أميّز في أمثلة سفر موجّهة بين Perfekt وPräteritum، وأختار الصيغة الملائمة للسياق المحدّد.",
      evidence: {
        exerciseIds: ["e14", "e15", "e23", "rq4"],
        taskIds: ["practice:a2-01:e14", "practice:a2-01:e15", "practice:a2-01:e23", "reading:read-a2-01:rq4"],
        labelAr: "اختيار الصيغة المحايدة المستهدفة لـsein والأفعال الناقصة، وتحويل مثال محدد، وفهم استعمال Präteritum في النص.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einfache Perfekt-Hauptsätze mit Verbklammer und einer neutralen Mittelfeld-Reihenfolge bilden.",
      ar: "أن أرتّب جملة خبرية بسيطة في Perfekt داخل القوسين، مع تطبيق تفضيلات محايدة محددة لترتيب المساحة الوسطى.",
      evidence: {
        exerciseIds: ["e4", "e16", "e17", "e18", "e19"],
        taskIds: ["practice:a2-01:e4", "flow-practice:a2-01:e4", "practice:a2-01:e16", "practice:a2-01:e17", "practice:a2-01:e18", "practice:a2-01:e19"],
        labelAr: "ترتيب جملة Perfekt، والتدرب على TeKaMoLo وترتيب الضمائر والمفعول والنفي في أمثلة محددة.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann grundlegende Buchungs- und Fahrkartenformulierungen verstehen und für eine konkrete Hotelsituation eine höfliche Beschwerde auswählen.",
      ar: "أن أفهم عبارات أساسية للحجز والتذاكر، وأختار صياغة شكوى واضحة ومهذبة في موقف فندقي محدد.",
      evidence: {
        exerciseIds: ["e21", "e22", "e25"],
        taskIds: ["practice:a2-01:e21", "practice:a2-01:e22", "practice:a2-01:e25"],
        labelAr: "تفسير عبارة تذكرة ذهاب فقط/ذهاب وعودة، واختيار صياغة شكوى وطلب حجز ملائمين للموقفين المعروضين.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann in einer angeleiteten Schreibaufgabe einen Satz über eine vergangene Reise ins Perfekt umformen.",
      ar: "أن أحوّل جملة موجّهة عن رحلة سابقة إلى Perfekt كتابةً.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a2-01:w1"],
        labelAr: "تحويل جملة موجّهة تضم فعل سفر وفعلًا آخر إلى Perfekt؛ لا يقيس ذلك كتابة قصة حرة مترابطة.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann zentrale Informationen aus einer Reiseerzählung entnehmen.",
      ar: "أن أستخرج معلومات أساسية من قصة رحلة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq6"],
        taskIds: ["reading:read-a2-01:rq1", "reading:read-a2-01:rq2", "reading:read-a2-01:rq3", "reading:read-a2-01:rq6"],
        labelAr: "الإجابة الصحيحة عن أسئلة الفهم التي تحيل إلى أحداث الرحلة صراحةً.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann explizite Informationen aus einer vorgelesenen Reiseunterhaltung entnehmen, solange das Transkript nicht geöffnet wurde.",
      ar: "أن ألتقط معلومات صريحة من حوار سفر يُقرأ بصوت اصطناعي، ما دام نصه غير مكشوف.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l1:q4"],
        labelAr: "الإجابة عن أسئلة الحوار بعد الاستماع إلى TTS مع إخفاء التفريغ؛ الإجابات بعد كشف النص لا تدخل الدليل.",
        completion: "all-correct",
      },
    },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في A1-14 درستَ صيغة Perfekt. كيف تحكي عن رحلة ماضية؟ قارن «Ich fahre nach Berlin» بـ«Ich bin nach Berlin gefahren»، ثم لاحظ أن «Ich fuhr» صيغة ماضية أخرى تظهر في سياقات مختلفة.",
    motivatingQuestionDe: "Was hast du im Urlaub gemacht?",
    contextAr:
      "Perfekt (haben/sein + Partizip II) طريقة شائعة للحديث عن أحداث ماضية في سياقات كثيرة، لكنه ليس صيغة الماضي الوحيدة. يظهر Präteritum أيضاً في الحديث والكتابة، ومنه صيغ كثيرة الدوران مثل war وhatte وأفعال ناقصة؛ ويتأثر الاختيار بالسياق والسجل والمنطقة. يبني هذا الدرس على أساس A1-14 ويعرض أمثلة محددة لا قاعدة مطلقة.",
    contextDe: "Ich bin nach Berlin geflogen und habe viel gesehen.",
    connectionToPreviousAr:
      "في A1-14 درست أساس بناء Perfekt واختيار haben/sein في أمثلة محددة. نعود إليه هنا ونوسّع صور الأفعال القوية، ثم نقارن الاستعمالات الشائعة لـPerfekt وPräteritum. لا تُحوّل صيغة عربية واحدة آلياً إلى زمن ألماني واحد؛ اختر التركيب بحسب المعنى والسياق.",
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
      questionDe: "Wir fahren von Tunis ___ Deutschland.",
      options: ["nach", "zu", "in", "aus"],
      correctIndex: 0,
      explanation: "في هذا المثال Deutschland اسم بلد بلا أداة مع معنى الوجهة، لذا نقول nach Deutschland. وتوجد أسماء بلدان تأخذ أداة وتأتي معها تراكيب أخرى.",
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
        "تُعرض الأفعال القوية غالباً بثلاث صور أساسية للحفظ: المصدر وPräteritum وPartizip II، مثل trinken – trank – getrunken. ويُسمّى تناوب حركة الجذر بين بعض هذه الصور Ablaut. تذكر المراجع سبع فئات تقليدية للأنماط، لكنّ هذا تصنيف وصفي يساعد على تنظيم أمثلة؛ ليس خوارزمية تتنبأ بصيغة كل فعل جديد، كما أن بعض الأفعال لها تفاصيل أو صيغ بديلة.\n\n**أمثلة على أنماط شائعة في هذه الكتلة:**\n· **i – a – u:** trinken – trank – getrunken · finden – fand – gefunden · singen – sang – gesungen\n· **ei – ie – ie:** schreiben – schrieb – geschrieben · bleiben – blieb – geblieben · steigen – stieg – gestiegen\n· **ie – o – o:** fliegen – flog – geflogen · verlieren – verlor – verloren · schließen – schloss – geschlossen\n· **e – a – o:** nehmen – nahm – genommen · sprechen – sprach – gesprochen · helfen – half – geholfen\n\nهذه أمثلة منتقاة لا قائمة شاملة، ولا تدّعي أن أربع مجموعات تغطي نسبة ثابتة من مفردات المتعلم. تعلّم الصور الموثقة لكل فعل ولا تستنتج صورة فعل غير معروف من حركة واحدة وحدها.\n\nوتجمع بعض الأفعال المختلطة (gemischte Verben) تغيّر الجذر مع صيغة تنتهي بـ **-t**، مثل denken – dachte – gedacht وbringen – brachte – gebracht وwissen – wusste – gewusst وkennen – kannte – gekannt. عددها وتصنيفها يعتمدان على ما يُدرج في القائمة، لذلك لا نقدّم عدداً ثابتاً هنا.\n\n**الفائدة العملية:** قارن صور الفعل لتلاحظ النمط وتستعين به في التذكّر؛ لكن احفظ الفعل بصوره المسجلة، وانتبه إلى أن الأفعال ذات البادئة قد ترث صور الفعل الأساسي مع قواعد مستقلة لموضع ge-.",
      whyAr:
        "التصنيف يصف طريقة تصريف أفعال معينة؛ لا يضمن أن كل فعل يشبهها سيتبع النمط نفسه بلا استثناء. اخترنا هنا أمثلة تعليمية محددة، ويظل الرجوع إلى صورة الفعل في معجم موثوق ضرورياً، ولا سيما عند اختلاف Präteritum أو Partizip II أو وجود أكثر من صيغة. هدف هذا التبسيط مساعدة المتعلم على حفظ مجموعة صغيرة، لا إثبات سبب تاريخي واحد أو قاعدة ذهنية عامة لجميع الأفعال.",
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
          ar: "سافرت بالطائرة إلى إسطنبول. (fliegen، نمط ie–o–o؛ sein في معنى السفر إلى وجهة)",
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
          ar: "ساعدني كثيراً. (helfen – half – geholfen؛ المفعول هنا Dativ: mir)",
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
        "تستعمل العربية الجذر والوزن في بناء كثير من الكلمات والصيغ، ويمكن أن تساعد هذه المقارنة على ملاحظة أن حركة الجذر قد تتغير في trinken – trank – getrunken. لكن **Ablaut ليس هو الوزن العربي نفسه**: فالجذر والوزن العربيان نظام صرفي مختلف، أما Ablaut هنا فيصف تناوباً في صور أفعال ألمانية بعينها. لا تتنبأ المقارنة بصيغ فعل ألماني جديد، ولا تثبت أن متعلمي العربية أقدر من غيرهم على تعلمه. استخدمها لتذكّر وجود تناوب، ثم احفظ الصيغ الألمانية المحددة.",
      eselsbruecke:
        "احفظ صور الفعل كما تُعرض: trinken – trank – getrunken. لاحظ النمط للمقارنة، لكن لا تُنشئ Partizip II جديداً بالقياس؛ تحقّق من صورة الفعل نفسه.",
      commonMistakes: [
        {
          wrong: "Ich habe das Buch gefindet.",
          right: "Ich habe das Buch gefunden.",
          classification: "error",
          whyAr: "finden من الأفعال القوية؛ Partizip II المعياري في هذا المعنى هو gefunden، لا gefindet. احفظ الصيغة المحددة.",
        },
        {
          wrong: "Ich habe geschreibt.",
          right: "Ich habe geschrieben.",
          classification: "error",
          whyAr: "Partizip II من schreiben هو geschrieben؛ لا تُركّب نهاية الضعيف -t على هذه الصيغة القوية.",
        },
        {
          wrong: "Ich habe nach Berlin geflogen.",
          right: "Ich bin nach Berlin geflogen.",
          classification: "error",
          whyAr: "في معنى السفر بالطائرة إلى وجهة، يأخذ fliegen المساعد sein. وفي معانٍ أخرى مثل قيادة طائرة أو نقل شيء قد يختلف المساعد؛ لا تستنتج قاعدة لكل استعمال.",
        },
        {
          wrong: "Ich habe an dich gedenkt.",
          right: "Ich habe an dich gedacht.",
          classification: "error",
          whyAr: "الفعل هنا denken، وصيغته المختلطة في المثال denken – dachte – gedacht. أما gedenken ففعل آخر ومعناه وبناؤه مختلفان.",
        },
        {
          wrong: "Er hat mir gehelft.",
          right: "Er hat mir geholfen.",
          classification: "error",
          whyAr: "Partizip II من helfen هو geholfen؛ وفي هذا المثال يأخذ المفعول Dativ (mir). سبق عرض helfen في A1-06، وهنا نراجع صورته ومفعوله في المثال.",
        },
      ],
      relatedRuleComparison: {
        title: "القويّ في Perfekt مقابل القويّ في المضارع",
        content:
          "تغيّر e/i في المضارع مثل du sprichst قد يساعد على ملاحظة صلة بين بعض الصور، لكنه لا يتنبأ وحده بصيغ الأفعال القوية ولا يغني عن حفظ المصدر وPräteritum وPartizip II. وقد مرّ helfen في A1-06: sprechen – sprach – gesprochen مع du sprichst، وhelfen – half – geholfen مع du hilfst. أمّا schreiben فيأخذ schreiben – schrieb – geschrieben مع du schreibst في المضارع؛ لذا راجع صور الفعل نفسه.",

      },
    },
    {
      id: "t2",
      titleAr: "Perfekt أم Präteritum؟ — قسمة العمل بين الماضيين",
      titleDe: "Perfekt oder Präteritum? Die Arbeitsteilung",
      explanationAr:
        "لكلٍّ من Perfekt وPräteritum استعمالات صحيحة للماضي، ولا يصح اختزالهما إلى «الكلام مقابل الكتابة». في كثير من الحديث اليومي المعاصر يغلب Perfekt عند سرد أحداث كثيرة، بينما يشيع Präteritum في السرد المكتوب؛ لكن Präteritum يُسمع أيضاً في الكلام، وPerfekt يرد في الكتابة. تظهر كثيراً في الحديث صيغ مثل war وhatte وبعض الأفعال الناقصة، كما تختلف الأنماط باختلاف المنطقة والسجل والنص.\n\nللتدريب هنا:\n· **تقرير شخصي عن رحلة:** Ich bin nach Wien gefahren und habe dort meine Tante besucht.\n· **سرد مكتوب:** Der Zug fuhr um acht Uhr ab und erreichte Berlin am Mittag.\n· **صيغ قصيرة شائعة في أمثلة محادثة:** Ich war müde · Wir hatten keine Zeit · Ich konnte nicht kommen · Es gab kein WLAN.\n\nهذه اتجاهات ونماذج لا قوانين حصرية. البدائل مثل Ich bin … gewesen وIch habe nicht kommen können وEs hat … gegeben سليمة نحوياً، وقد تلائم سياقاً أو سجلاً أو منطقة بعينها؛ لا تصفها بأنها خطأ لمجرد أن الدرس يختار صيغة أقصر في مثال محدد.",
      whyAr:
        "يتأثر الاختيار بين الزمنين بنوع النص والسجل والمنطقة والسياق، وقد تؤثر دلالة الفعل أيضاً. لذلك لا يوجد تفسير واحد من قبيل أن صيغة بعينها «ثقيلة دائماً» أو أن الزمنين يتطابقان في كل موضع. يعرض الجدول أمثلة واتجاهات مألوفة لتيسير القراءة والتدريب، لا حدوداً ثابتة بين كلام صحيح وكتابة صحيحة.",
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
            label: "وصف حالة — sein",
            cells: ["Präteritum", "Ich war sehr müde."],
          },
          {
            label: "وصف امتلاك — haben",
            cells: ["Präteritum", "Wir hatten keine Zeit."],
          },
          {
            label: "فعلٌ ناقص — مثال موجّه",
            cells: ["Präteritum", "Ich konnte nicht schlafen."],
          },
          {
            label: "وجود — es gibt",
            cells: ["Präteritum", "Es gab keinen Kaffee mehr."],
          },
        ],
      },
      examples: [
        {
          de: "Ich war letztes Jahr in Ägypten. Es war fantastisch!",
          ar: "كنتُ العام الماضي في مصر. كانت الرحلة رائعة! (war صيغة Präteritum شائعة لوصف الحالة)",
        },
        {
          de: "Wir hatten leider kein Glück mit dem Wetter.",
          ar: "للأسف لم يحالفنا الحظّ في الطقس. (haben ⟵ hatten)",
        },
        {
          de: "Ich konnte gestern nicht kommen, denn ich musste arbeiten.",
          ar: "لم أستطع المجيء أمس، كان عليّ أن أعمل. (ناقصان بالـPräteritum)",
        },
        {
          de: "Ich bin nach Wien gefahren und habe dort meine Tante besucht.",
          ar: "سافرتُ إلى فيينّا وزرتُ عمّتي هناك. (مثال Perfekt للفعلين fahren وbesuchen)",
        },
        {
          de: "Es gab im Hotel kein WLAN.",
          ar: "لم يكن في الفندق واي فاي. (es gibt ⟵ es gab)",
        },
        {
          de: "Der Zug fuhr um acht Uhr ab und erreichte Berlin am Mittag.",
          ar: "انطلق القطار في الثامنة وبلغ برلين ظهراً. (نموذج سرد بـPräteritum)",
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
        "في العربية طرائق مختلفة للتعبير عن الزمن والحدث، كما تختلف العامية والفصحى في السياق والسجل. يمكن استخدام ذلك لتذكّر أن اختيار الصيغة الألمانية يتأثر بالمقام، لكنه **لا يساوي** Perfekt بالعامية أو Präteritum بالفصحى، ولا يعني أن لكل صيغة مقابلاً عربياً ثابتاً. كلا الزمنين يرد في الكلام والكتابة، ويُفهم المعنى من الجملة والسياق.",
      eselsbruecke:
        "في تقرير محادثي قصير، يكون Perfekt نقطة بداية نافعة لكثير من الأحداث؛ وتدرّب أيضاً على صيغ Präteritum الشائعة مثل war وhatte وkonnte وmusste. تذكّر أنها **أنماط استعمال شائعة لا قاعدة تمنع البدائل**.",
      commonMistakes: [
        {
          wrong: "Ich bin gestern sehr müde gewesen.",
          right: "Ich war gestern sehr müde.",
          classification: "contextual-alternative",
          whyAr: "الصيغة الأولى سليمة؛ يختار المثال war بوصفها صيغة قصيرة شائعة هنا، لا لأن Perfekt ممنوع.",
        },
        {
          wrong: "Ich habe nicht kommen können.",
          right: "Ich konnte nicht kommen.",
          classification: "contextual-alternative",
          whyAr: "تركيب Perfekt مع مصدرين ممكن وصحيح؛ يدرّب المثال على صيغة Präteritum الأقصر، ولا يصنّف البديل خطأً نحوياً.",
        },
        {
          wrong: "Gestern ich ging ins Kino. (في محادثة)",
          right: "Gestern bin ich ins Kino gegangen.",
          classification: "error",
          whyAr: "الخطأ المؤكد هو V2: بعد Gestern يجب أن يأتي الفعل المصرف في الموضع الثاني؛ Gestern ging ich ins Kino صحيحة أيضاً. اختيار Perfekt هنا هدف تدريبي للسرد المحادثي، لا لأن Präteritum خطأ في الكلام.",
        },
        {
          wrong: "Es hat kein WLAN gegeben.",
          right: "Es gab kein WLAN.",
          classification: "contextual-alternative",
          whyAr: "Perfekt ممكنة: Es hat kein WLAN gegeben. يعرض المثال es gab كصيغة موجزة مألوفة؛ الاختيار تابع للسياق والسجل.",
        },
        {
          wrong: "Ich habe gewusst, dass du kommst.",
          right: "Ich wusste, dass du kommst.",
          classification: "contextual-alternative",
          whyAr: "صيغة Perfekt من wissen ممكنة؛ اختير wusste في المثال بوصفها صيغة Präteritum شائعة، لا قاعدة تمنع البديل.",
        },
      ],
      relatedRuleComparison: {
        title: "war وhatte ضمن صيغ الماضي",
        content:
          "يعرض هذا الدرس war وhatte ضمن Präteritum ويقارنهما باستعمالات Perfekt، دون وصف أي صيغة بأنها ممنوعة من الكلام أو الكتابة. وتأتي تدريبات أوسع على Präteritum في دروس لاحقة؛ هذه أمثلة محددة وليست حصرًا لكل صيغ الماضي.",

      },
    },
    {
      id: "t3",
      titleAr: "الجملة الطويلة في Perfekt — ما الذي يقع بين القوسين؟",
      titleDe: "Die Satzklammer im Detail: Was steht im Mittelfeld?",
      explanationAr:
        "في الجملة الرئيسية الخبرية البسيطة، يكون المساعد المصرف غالباً في القوس الأيسر من Perfekt، ويأتي Partizip II في القوس الأيمن؛ وما بينهما هو Mittelfeld. أما ترتيب عناصر هذه المساحة فليس سلسلة جامدة واحدة.\n\n· في الأمثلة المحايدة، تتقدم الضمائر غير المنبورة عادةً على مجموعات الأسماء. وإذا اجتمع ضميران مفعوليان فترتيب Akkusativ قبل Dativ هو المعتاد؛ وبين مجموعتي اسم يشيع Dativ قبل Akkusativ. قد يغيّر التركيز والسياق ترتيباً مفضلاً.\n· في الظروف، يكون ترتيب الزمان ثم السبب ثم الكيفية ثم المكان (TeKaMoLo) **ميلاً شائعاً**، لا شرطاً نحوياً لا يتغير.\n· يتحدد موضع nicht بما تنفيه: يرد كثيراً قرب القوس الأيمن عند نفي مضمون الجملة المحايد، وقد يتقدم على العنصر الذي ينفيه في المقابلة، كما في Ich habe **nicht den Film**, sondern die Serie gesehen.\n· يمكن وضع جملة فرعية أو مقارنة في Nachfeld، وقد تأتي عناصر مؤجلة أخرى في سياق استدراك/تركيز؛ لذلك ليست عبارة «كل ما ليس فعلاً يبقى قبل Partizip II» قاعدة مطلقة.\n\nاستخدم الجدول أمثلةً لترتيب محايد قابل للتدريب، واقرأ ترتيب الكلمات مع المعنى والتركيز لا منفصلاً عنهما.",
      whyAr:
        "القوسان يحددان المجال الفعلي ويساعدان على رؤية موضع المساعد وPartizip II. داخل Mittelfeld توجد تفضيلات بنيوية وتواصلية متعددة، وقد تتفاعل؛ لذا لا تفسر ترتيباً واحداً على أنه الترتيب الوحيد المقبول. في التمرينات سنطلب أحياناً ترتيباً محايداً محدداً، مع التنبيه إلى أن السياق والنبر قد يجيزان بديلاً.",
      table: {
        title: "المساحة الوسطى — تفضيلات وأمثلة محايدة",
        columns: ["إرشاد (لا ترتيب إلزامي)", "العنصر", "المثال"],
        rows: [
          {
            label: "١",
            cells: ["ضميران مفعوليان: Akk قبل Dat غالباً", "Ich habe es ihm gegeben."],
          },
          { label: "٢", cells: ["الزمان — مثال", "… habe ich gestern …"] },
          { label: "٣", cells: ["السبب — مثال", "… wegen des Regens …"] },
          { label: "٤", cells: ["الكيفية — مثال", "… schnell / mit dem Zug …"] },
          { label: "٥", cells: ["المكان — مثال", "… in der Stadt …"] },
          {
            label: "٦",
            cells: ["اسمان مفعوليان: Dativ قبل Akk شائعاً", "Ich habe meinem Bruder das Buch gegeben."],
          },
          {
            label: "٧",
            cells: ["موضع nicht يتبع نطاق النفي", "… das Buch nicht gelesen."],
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
          ar: "قلتُه له بالفعل. (ضميران مفعوليان: Akkusativ es قبل Dativ ihm في ترتيب محايد)",
        },
        {
          de: "Ich habe meinem Bruder das Buch gegeben.",
          ar: "أعطيتُ أخي الكتاب. (اسمان مفعوليان: Dativ قبل Akkusativ شائعاً، بخلاف ترتيب الضميرين)",
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
        "تختلف مواضع الفعل والمتممات بين العربية والألمانية، لكن العربية نفسها تسمح بأنماط وتركيزات مختلفة؛ فلا تُختزل إلى قاعدة «الفعل أولاً ثم كل شيء». استعمل قوس Perfekt أداةً لتخطيط المثال الألماني: موضع المساعد، العناصر الوسطى، ثم Partizip II. ولا تفترض أن ترتيب ضمائر العربية يقابل ترتيب ضمائر الألمانية حرفياً؛ لكل لغة نظامها، والسياق يغيّر البؤرة.",
      eselsbruecke:
        "لترتيب محايد في الأمثلة الأساسية: حدّد قوسي الفعل أولاً؛ جرّب وضع الضمائر مبكراً، وترتيب الظروف الشائع زماناً ثم سبباً ثم كيفيةً ثم مكاناً، ثم أغلِق المجال بـPartizip II. هذه مساعدة أولية، لا وصفة إلزامية لكل جملة.",
      commonMistakes: [
        {
          wrong: "Ich habe gegessen einen Apfel.",
          right: "Ich habe einen Apfel gegessen.",
          classification: "contextual-alternative",
          whyAr: "الترتيب المحايد يضع المفعول قبل Partizip II؛ وقد يأتي عنصرٌ مؤجل بعد القوس في سياق استدراك أو تركيز، فلا نعدّ ذلك مستحيلاً مطلقاً.",
        },
        {
          wrong: "Ich habe ihm es gegeben.",
          right: "Ich habe es ihm gegeben.",
          classification: "contextual-alternative",
          whyAr: "es قبل ihm هو الترتيب المحايد المألوف لضميرين مفعوليين؛ قد يؤثر التركيز والسياق في الترتيب، لذا لا نصف كل ترتيب آخر بأنه خطأ في جميع المقامات.",
        },
        {
          wrong: "Ich habe das Buch meinem Bruder gegeben.",
          right: "Ich habe meinem Bruder das Buch gegeben.",
          classification: "contextual-alternative",
          whyAr: "إذا اجتمع اسمان مفعوليان، يشيع Dativ قبل Akkusativ في الترتيب المحايد. يمكن أن يتغير الترتيب مع التركيز والسياق.",
        },
        {
          wrong: "Ich habe nicht gelesen das Buch.",
          right: "Ich habe das Buch nicht gelesen.",
          classification: "pedagogical-simplification",
          whyAr: "للتعبير المحايد عن نفي قراءة الكتاب، المثال الأنسب Ich habe das Buch nicht gelesen. يتغير موضع nicht إذا كان النفي مقابلاً لجزء بعينه، وقد يظهر عنصر مؤجل بنبر مختلف.",
        },
        {
          wrong: "Wir sind nach Prag mit dem Zug letzten Sommer gefahren.",
          right: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
          classification: "contextual-alternative",
          whyAr: "الترتيب زمان–كيفية–مكان نموذج محايد مفيد، لكنه تفضيل للظروف لا ترتيب إلزامي لكل عنصر؛ وقد يخدم التقديم معنىً أو تركيزاً خاصاً.",
        },
      ],
      relatedRuleComparison: {
        title: "قوسٌ واحد بأربعة مِلْآت",
        content:
          "تظهر البنية ذات القوسين أيضاً مع الفعل الناقص، والفعل المنفصل، وبعض تراكيب المستقبل؛ لكن ترتيب العناصر الوسطى يتأثر بوظيفتها وبالمعلومة المراد إبرازها. أمثلة: Ich habe dir gestern eine Jacke gekauft · Ich will dir morgen ein Paket schicken · Ich hole dir morgen ein Paket ab · Ich werde dir morgen eine Jacke kaufen. تشترك هذه الأمثلة في أطر فعلية مختلفة، ولا تثبت أن كل ترتيب داخلي فيها واحد في جميع السياقات. وفي الجملة الفرعية يأتي المركب الفعلي غالباً في النهاية مثل weil ich dir eine Jacke gekauft habe.",

      },
    },
    {
      id: "t4",
      titleAr: "لغة السفر: الحجز والوصول والشكوى",
      titleDe: "Reisewortschatz: buchen, ankommen, sich beschweren",
      explanationAr:
        "هذه الكتلة تجمع عبارات مفيدة في الحجز والقطار والفندق، وتعرض صيغاً محددة لا قاعدةً تقول إن كل أفعال السفر لها المساعد نفسه.\n\n· **الحجز:** buchen / reservieren: Ich habe ein Zimmer gebucht · Ich möchte einen Tisch reservieren.\n· **أفعال النقل في معناها اللازم المعروض:** abfahren (القطار ينطلق) وankommen (يصل) وumsteigen (يبدّل وسيلة النقل) تُبنى أمثلتها بـsein: ist abgefahren · ist angekommen · ist umgestiegen. والبادئة المنفصلة تحدد موضع ge- في Partizip II، لا اختيار المساعد وحده.\n· **معانٍ أخرى:** abholen في معنى استلام شيء يأخذ haben: hat den Rucksack abgeholt. كما قد يختلف مساعد بعض الأفعال بحسب المعنى؛ فـfliegen إلى وجهة يختلف عن قيادة طائرة أو نقل شيء بها، وschwimmen للانتقال إلى وجهة يختلف عن نشاط السباحة.\n· **في الفندق:** einchecken / auschecken · die Übernachtung · das Einzelzimmer / das Doppelzimmer · inklusive Frühstück · die Rezeption.\n· **طلب واضح ومهذّب:** يمكن تنظيم الرسالة إلى وصف المشكلة ثم بيان أثرها أو الطلب: Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes Zimmer geben? هذه صيغة مناسبة لهذا المثال وليست العبارة المهذبة الوحيدة.",
      whyAr:
        "الحاجة إلى عبارات السفر هنا اختيار موضوعي للتدريب على المفردات والوظائف، لا ادعاء بأن هذا الموضوع وحده يعرّف A2 أو يطابق جزءاً محدداً من امتحان. تعلّم كل فعل مع استعماله الشائع ومساعده في ذلك المعنى؛ لا تستنتج sein من البادئة أو من فكرة الحركة وحدهما. وفي خدمة الفندق تساعد صيغ مثل Entschuldigung وbitte وKönnten Sie… على بناء طلب واضح ومهذّب، لكن درجات المباشرة تختلف بين الأشخاص والمواقف ولا يصح تعميمها ثقافياً.",
      table: {
        title: "معجم السفر — الأساسيّ",
        columns: ["الألمانية", "العربية", "ملاحظة"],
        rows: [
          {
            label: "buchen / reservieren",
            cells: ["يحجز", "Ich habe ein Zimmer gebucht (haben في هذا الاستعمال)"],
          },
          {
            label: "abfahren",
            cells: ["ينطلق (قطار/حافلة)", "في هذا الاستعمال اللازم: ist abgefahren؛ والبادئة منفصلة"],
          },
          { label: "ankommen", cells: ["يصل", "ist angekommen"] },
          {
            label: "umsteigen",
            cells: ["يبدّل وسيلة النقل", "ist umgestiegen"],
          },
          { label: "landen", cells: ["يهبط (طائرة)", "ist gelandet"] },
          {
            label: "hin und zurück",
            cells: ["ذهاباً وإياباً", "في التذاكر: einfache Fahrt = اتجاه واحد"],
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
        "الصيغة المقترحة تجمع وضوح المشكلة مع طلب مهذّب، ويمكن للمتعلم تعديلها بحسب حاجته. لا نفترض أن المتحدثين بالعربية غير مباشرين أو أن المتحدثين بالألمانية يتكلمون بطريقة واحدة. وفي سياق التذاكر تُستعمل einfache Fahrt لرحلة باتجاه واحد، مقابل hin und zurück؛ وخارج هذا السياق تحمل einfach معاني أخرى مثل «بسيط».",
      eselsbruecke:
        "اربط المساعد بالفعل والمعنى في المثال: abfahren في معنى انطلاق القطار → ist abgefahren؛ buchen → hat gebucht؛ abholen لالتقاط حقيبة → hat abgeholt. واحفظ البادئة المنفصلة في موضع Partizip: abgefahren / abgeholt.",
      commonMistakes: [
        {
          wrong: "Der Zug hat um acht abgefahren.",
          right: "Der Zug ist um acht abgefahren.",
          classification: "error",
          whyAr: "في معنى انطلاق القطار اللازم، abfahren يبني Perfekt مع sein. ومع البادئة المنفصلة يدخل ge بين ab وfahren؛ والكتابة المعتادة كلمة واحدة: abgefahren.",
        },
        {
          wrong: "Ich habe in Köln umgestiegen.",
          right: "Ich bin in Köln umgestiegen.",
          classification: "error",
          whyAr: "umsteigen بمعنى تبديل وسيلة النقل يأخذ sein في هذا الاستعمال. لا تجعل البادئة المنفصلة وحدها سبب اختيار المساعد.",
        },
        {
          wrong: "Am Fahrkartenschalter: „Einfach, bitte.“ (إذا كان المقصود «الأمر بسيط»)",
          right: "Das ist einfach. (للتعبير عن أن الأمر بسيط)",
          classification: "contextual-alternative",
          whyAr: "في سياق شباك التذاكر، Einfach, bitte جواب مفهوم لطلب رحلة باتجاه واحد؛ أما معنى البساطة فيعبّر عنه مثلاً Das ist einfach. ليست كلمة einfach خطأ بذاتها، بل يحدد السياق المقصود.",
        },
        {
          wrong: "Das Zimmer ist schlecht! Geben Sie mir ein anderes!",
          right: "Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes geben?",
          classification: "contextual-alternative",
          whyAr: "الجملة الأولى مفهومة ونحوها صحيح لكنها قد تبدو آمرة في هذا الموقف. الصياغة الثانية خيار واضح ومهذّب للتدريب، وليست العبارة المقبولة الوحيدة.",
        },
        {
          wrong: "Ich habe ein Zimmer gebucht für zwei Nächte.",
          right: "Ich habe für zwei Nächte ein Zimmer gebucht.",
          classification: "contextual-alternative",
          whyAr: "الصياغة المقترحة ترتيب محايد شائع؛ قد يظهر الظرف بعد القوس في سياق استدراك/تركيز. لا نصف ترتيب الكلمات بأنه خطأ مطلق خارج السياق.",
        },
      ],
      relatedRuleComparison: {
        title: "من a1-11 إلى a2-01 — المدينة ثمّ السفر",
        content:
          "في A1-11 تدربت على مفردات التنقل داخل المدينة، وهنا أضيف عبارات عن رحلة بين مدن وإقامة فندقية: die Fahrkarte، umsteigen، die Verspätung، buchen، die Rezeption. هذا امتداد موضوعي للمفردات، لا ادعاء بأن الدرسين يغطيان مواقف CEFR أو جزءاً بعينه من امتحان.",

      },
    },
  ],
  reading: {
    id: "read-a2-01",
    titleDe: "Eine Reise, die anders lief",
    titleAr: "رحلةٌ سارت على غير ما خُطّط لها",
    textType: "bericht",
    paragraphs: ["Letzten Sommer wollten meine Schwester und ich eine Woche in Prag verbringen. Wir haben alles genau geplant: Wir haben die Zugtickets schon im Mai gebucht, ein kleines Hotel in der Altstadt reserviert und eine lange Liste mit Museen und Cafés geschrieben. Ich war noch nie in Tschechien, und ich habe mich sehr auf die Reise gefreut.", "Am Abfahrtstag sind wir um fünf Uhr aufgestanden. Der Zug sollte um sieben abfahren. Aber am Bahnhof gab es eine Durchsage: „Der Zug nach Prag hat heute zwei Stunden Verspätung.“ Wir konnten nichts machen und haben erst einmal einen Kaffee getrunken. Nach zwei Stunden sind wir endlich abgefahren.", "In Dresden mussten wir umsteigen. Dort ist etwas passiert, was ich nie vergessen werde: Meine Schwester hat ihren Rucksack im ersten Zug vergessen — mit ihrem Pass und ihrem Geld. Wir sind sofort zum Informationsschalter am Bahnhof gegangen. Der Mitarbeiter war sehr freundlich. Er hat telefoniert, gesucht und nach zwanzig Minuten gesagt: „Der Rucksack ist da. Sie können ihn morgen in Prag abholen.“", "Unterwegs gab es weitere Verspätungen. Am Ende sind wir um Mitternacht angekommen — acht Stunden später als geplant. Das gebuchte Hotel war schon geschlossen. So standen wir nachts in einer fremden Stadt ohne Zimmer und ohne Pass.", "Zum Glück gab es eine schöne Überraschung: Die Rezeption eines anderen Hotels zwei Straßen weiter war noch geöffnet. Die Mitarbeiterin dort hat ein Zimmer für uns gefunden. Das Hotel war sogar billiger und schöner. Am nächsten Morgen haben wir den Rucksack abgeholt, und danach war die Woche wirklich wunderbar.", "Heute erzähle ich diese Geschichte gern. An die perfekten Reisen erinnere ich mich kaum. Aber ich erinnere mich an jede Minute dieses Tages."],
    paragraphsAr: ["الصيف الماضي أردنا أنا وأختي أن نقضي أسبوعاً في براغ. خططنا لكل شيء بدقة: حجزنا تذاكر القطار في مايو، وحجزنا فندقاً صغيراً في المدينة القديمة، وكتبنا قائمة طويلة بالمتاحف والمقاهي. لم أزر التشيك من قبل، وقد تحمست كثيراً للرحلة.", "يوم السفر نهضنا في الخامسة. كان من المقرر أن ينطلق القطار في السابعة. لكن في المحطة جاء إعلان: «قطار براغ متأخر اليوم ساعتين». لم نستطع فعل شيء فشربنا قهوة أولاً. وبعد ساعتين انطلقنا أخيراً.", "في درسدن كان علينا تبديل القطار. وهناك حدث شيء لن أنساه أبداً: نسيت أختي حقيبة ظهرها في القطار الأول — وفيها جواز سفرها ونقودها. ذهبنا فوراً إلى مكتب الاستعلامات في المحطة. كان الموظف لطيفاً جداً. اتصل وبحث وقال بعد عشرين دقيقة: «الحقيبة موجودة. يمكنكم أخذها غداً في براغ».", "وتأخر القطار مرة أخرى في الطريق. وفي النهاية وصلنا عند منتصف الليل، أي متأخرين ثماني ساعات عن الموعد المخطط. كان الفندق الذي حجزناه مغلقاً. فوجدنا أنفسنا ليلاً في مدينة غريبة بلا غرفة وبلا جواز.", "ولحسن الحظ كانت هناك مفاجأة جميلة: كان مكتب استقبال فندق آخر على بُعد شارعين مفتوحاً. وجدت لنا الموظفة هناك غرفة. وكان الفندق أرخص وأجمل. وفي صباح اليوم التالي استلمنا الحقيبة، وبعدها كان الأسبوع رائعاً حقاً.", "واليوم أحكي هذه القصة بسرور. لا أكاد أذكر من الرحلات المثالية شيئاً، لكنني أذكر كل دقيقة من هذا اليوم."],
    glossary: [
      {
        de: "verbringen",
        ar: "يقضي (وقتاً)",
        noteAr: "eine Woche in Prag verbringen",
      },
      {
        de: "gebucht (buchen)",
        ar: "حجزوا",
        noteAr: "Partizip II في Perfekt داخل التقرير الشخصي",
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
        noteAr: "في معنى انطلاق القطار: ist abgefahren؛ والبادئة المنفصلة تحدد موضع ge-",
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
        noteAr: "+ Akkusativ: Ich erinnere mich an jede Minute dieses Tages",
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
          "«Wir haben die Zugtickets schon im Mai gebucht, ein kleines Hotel … reserviert» — حجزٌ مسبق في مايو.",
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
        paragraph: 1,
        questionDe: "Welche Aussage zu „wollten“ und „haben … gebucht“ im ersten Absatz trifft zu?",
        instructionAr: "سؤال قواعد: قارن صيغ Präteritum وPerfekt الواردة في الفقرة الأولى.",
        options: [
          "wollten steht im Präteritum, haben … gebucht im Perfekt; der Text verwendet beide Formen.",
          "Beide Formen stehen im Präteritum.",
          "Beide Formen stehen im Perfekt.",
          "Im Bericht muss jedes Verb im Präteritum stehen.",
        ],
        correctIndex: 0,
        explanation:
          "النص يجمع wollten في Präteritum وhaben … gebucht في Perfekt. وجود الصيغتين هنا مثال سياقي، لا قاعدة تلزم كل نص سردي بزمن واحد.",
        errorType: "grammar",
      },
      {
        id: "rq5",
        type: "multiple-choice",
        paragraph: 2,
        questionDe: "Welches Hilfsverb steht im Satz „Nach drei Stunden sind wir endlich abgefahren“?",
        instructionAr: "سؤال قواعد: اختر المساعد في استعمال abfahren الوارد في القصة.",
        options: [
          "sein — im intransitiven Sinn «der Zug fährt ab»",
          "haben — weil jedes trennbare Verb haben nimmt",
          "sein — weil jedes Bewegungsverb immer sein nimmt",
          "haben — weil abfahren ein starkes Verb ist",
        ],
        correctIndex: 0,
        explanation:
          "في معنى انطلاق القطار اللازم، يرد Perfekt مع sein: sind abgefahren. البادئة المنفصلة تحدد موضع ge-، ولا تحدد المساعد وحدها؛ وتختلف استعمالات أفعال أخرى بحسب المعنى.",
        errorType: "grammar",
      },
      {
        id: "rq6",
        type: "multiple-choice",
        paragraph: 5,
        questionDe: "Wie endete die Geschichte?",
        instructionAr: "اقرأ الفقرة الخامسة: كيف انتهت القصّة؟",
        options: [
          "Sie fanden ein anderes Hotel, das billiger und schöner war.",
          "Sie fuhren wieder nach Hause",
          "Sie schliefen am Bahnhof",
          "Sie fanden den Rucksack nie",
        ],
        correctIndex: 0,
        explanation:
          "«Die Rezeption eines anderen Hotels zwei Straßen weiter war noch geöffnet. Die Mitarbeiterin dort hat ein Zimmer für uns gefunden. Das Hotel war sogar billiger und schöner.»",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      {
        de: "Wir haben alles genau geplant.",
        ar: "خططنا لكلّ شيءٍ بدقّة",
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
        de: "Ich habe mich sehr auf die Reise gefreut.",
        ar: "تحمّست كثيراً للرحلة",
      },
      {
        de: "Am Ende sind wir um … angekommen.",
        ar: "وفي النهاية وصلنا في …",
      },
      {
        de: "Ich erinnere mich an jede Minute dieses Tages.",
        ar: "أتذكّر كلّ دقيقة من ذلك اليوم",
      },
    ],
    discussionAr:
      "اكتب أو احكِ مسودةً ذاتية المراجعة في عدة جمل عن رحلة سابقة، واستعمل بعض Perfekt وبعض صيغ Präteritum التي تناسب السياق مثل war وhatte وkonnte وmusste. أدرج فعلين من أفعال السفر المنفصلة، ثم راجع موضع Partizip II. هذه مسودة اختيارية لا تُصحح آلياً ولا تُحتسب دليلاً على هدف سردٍ حر.",
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
            de: "Das Hotel war super! Wir haben im Meer geschwommen und am Strand in der Sonne gelegen.",
            ar: "كان الفندق رائعاً! سبحنا في البحر واستلقينا على الشاطئ في الشمس.",
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
        instructionAr: "بعد الاستماع، اختر الإجابة الصحيحة:",
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
        instructionAr: "بعد الاستماع، اختر الإجابة الصحيحة:",
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
        note: "eu = /ɔʏ̯/ تقريباً، وz = /ts/، وg في Flugzeug يُنطق /k/ هنا: Flugzeug",
      },
      {
        de: "geschwommen",
        ar: "سبح (تصريف)",
        note: "sch = /ʃ/ تقريباً، وo قصيرة قبل mm: geschwommen",
      },
      { de: "der Strand", ar: "الشاطئ", note: "st في البداية = شت: شترانت" },
    ],
    tip: "يورد Duden أن Flugzeug صيغ على غرار Fahrzeug؛ لا تحلّل الكلمة على أنها fliegen + Zeug. استمع إلى /ɔʏ̯/ في المقطع الأخير.",
    shadowing: [
      {
        de: "Ich bin nach Berlin geflogen.",
        ar: "طرت إلى برلين.",
        tip: "geflogen = غِفلوغِن (o)",
      },
      {
        de: "Wir haben im Meer geschwommen.",
        ar: "سبحنا في البحر.",
        tip: "في نشاط السباحة قد يرد haben أو sein؛ أما السباحة إلى وجهة فتأخذ sein: Wir sind zur Insel geschwommen.",
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
      instructionAr: "حوّل الجملة الموجّهة إلى Perfekt، مع الحفاظ على الوجهة والفعلين:",
      prompt: "Präsens: Ich fahre nach Sousse und besuche ein Museum. → Perfekt",
      acceptedAnswers: [
        "Ich bin nach Sousse gefahren und habe ein Museum besucht.",
        "Ich bin nach Sousse gefahren und habe ein Museum besucht",
      ],
      sampleAnswer: "Ich bin nach Sousse gefahren und habe ein Museum besucht.",
      explanation:
        "في هذا المعنى يأخذ السفر إلى وجهة sein، ويأخذ besuchen مع المفعول ein Museum haben. هذا تحويل محدد؛ لا يقرر مساعد كل استعمال لأفعال السفر.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ haben/sein + التصريف:",
      template:
        "Ich ___ nach Berlin ___ (fliegen). Wir ___ Pizza ___ (essen). Mona ___ ein Buch ___ (kaufen).",
      blanks: [
        { correct: "bin", options: ["bin", "habe", "hat"] },
        { correct: "geflogen", options: ["geflogen", "gefliegen", "geflogt"] },
        { correct: "haben", options: ["haben", "sind", "hat"] },
        { correct: "gegessen", options: ["gegessen", "geessen", "gegesst"] },
        { correct: "hat", options: ["hat", "ist", "haben"] },
        { correct: "gekauft", options: ["gekauft", "gekaufen", "gekaufte"] },
      ],
      explanation:
        "في هذا المثال يسافر fliegen إلى وجهة فيأخذ sein؛ ويأتي essen وkaufen مع haben في هذين الاستعمالين. اختيار المساعد مرتبط بالفعل ومعناه، لا بقاعدة «الحركة» وحدها.",
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
      instructionAr: "اختر الصيغة الصحيحة لمعنى السفر بالطائرة إلى بلد:",
      questionDe: "Wir ___ nach Deutschland ___.",
      options: [
        "sind ... geflogen",
        "haben ... geflogen",
        "sind ... gefliegt",
        "haben ... gefliegen",
      ],
      correctIndex: 0,
      explanation: "هنا fliegen يعني السفر بالطائرة إلى Deutschland، فيأتي Perfekt مع sein: sind geflogen.",
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
      instructionAr: "اختر الكلمة التي تصلح الخلل في الجملة المعروضة:",
      wrongSentence: "Ich habe nach Berlin geflogen.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "habe", "war", "hatte"],
      explanation:
        "في معنى السفر بالطائرة إلى Berlin، الصيغة هي: Ich bin nach Berlin geflogen. قد يختلف المساعد في استعمالات أخرى لـfliegen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ sein أو haben:",
      template:
        "Er ___ nach Tunis gefahren. Ich ___ ein Souvenir gekauft. Wir ___ zur Insel geschwommen.",
      blanks: [
        { correct: "ist", options: ["ist", "hat"] },
        { correct: "habe", options: ["ist", "habe"] },
        { correct: "sind", options: ["sind", "haben"] },
      ],
      explanation:
        "إلى تونس: ist gefahren. kaufen هنا: habe gekauft. إلى جزيرة بوصفها وجهة: sind geschwommen؛ أما نشاط السباحة فقد يرد معه haben أو sein.",
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
        "نهضتُ في السابعة",
        "أستيقظ في السابعة",
        "سأستيقظ في السابعة",
        "كنت نائماً في السابعة",
      ],
      correctIndex: 0,
      explanation:
        "aufstehen يعني هنا النهوض/مغادرة السرير، وصيغته aufgestanden مع sein في هذا المعنى.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "multiple-choice",
      instructionAr: "اختر الحكم الدقيق على المساعد في المثال:",
      questionDe: "Ich habe geschwommen.",
      options: [
        "الصيغة ممكنة لنشاط السباحة؛ أما السباحة إلى وجهة فتأخذ sein، مثل Ich bin zur Insel geschwommen.",
        "الصيغة خطأ دائماً؛ schwimmen يأخذ sein فقط.",
        "الصيغة خطأ لأن Partizip II هو geschwimmt.",
        "الصيغة صحيحة فقط إذا كان الكلام في الحاضر.",
      ],
      correctIndex: 0,
      explanation:
        "يذكر Duden أن نشاط السباحة للمتعة/الرياضة يقبل hat/ist geschwommen؛ أما الانتقال سباحةً إلى مكان مثل zur Insel فيأخذ sein. لذلك لا يصح تصحيح Ich habe geschwommen بلا سياق.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir haben im Hotel gut geschlafen.",
      explanation: "نمنا جيداً في الفندق — Partizip II من schlafen هو geschlafen.",
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
        "تطابق الأمثلة أربع مجموعات Ablaut مع مجموعة مختلطة. الأنماط وصفٌ للمقارنة والمساعدة على التذكّر، ولا تعفي من حفظ صور الفعل المحدد.",
      errorType: "grammar",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Präteritum المطلوبة، لا حكماً على صحة Perfekt:",
      questionDe: "Welche Form ist die Präteritumform von „Ich bin gestern sehr müde gewesen“?",
      options: [
        "Ich war gestern sehr müde.",
        "Ich bin gestern sehr müde gewesen.",
        "Ich habe gestern sehr müde gewesen.",
        "Ich gewesen gestern sehr müde.",
      ],
      correctIndex: 0,
      explanation:
        "war هي صيغة Präteritum المطلوبة. Ich bin gestern sehr müde gewesen صيغة Perfekt سليمة أيضاً؛ السؤال يطلب زمناً بعينه، لا يقرر أن البديل غير مستعمل.",
      errorType: "grammar",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل بصيغ Präteritum المطلوبة في هذا التمرين:",
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
        "الصيغ المطلوبة هنا هي konnte وmusste وgab. صيغة Präteritum مناسبة للنموذج المعروض؛ لا يعني ذلك أن Perfekt ممنوع في الكلام.",
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
        ".",
      ],
      correctSentence: "Wir sind letzten Sommer mit dem Zug nach Prag gefahren.",
      explanation:
        "زمان (letzten Sommer) ⟵ كيفية (mit dem Zug) ⟵ مكان (nach Prag)، وPartizip II يُغلق.",
      errorType: "word-order",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "اختر الترتيب المحايد المألوف للضميرين المفعوليين:",
      questionDe: "Ich habe ___ schon gesagt.",
      options: ["es ihm", "ihm es", "ihn es", "es ihn"],
      correctIndex: 0,
      explanation:
        "في هذا المثال، es (Akkusativ) قبل ihm (Dativ) هو الترتيب المحايد المألوف. تتأثر الترتيبات بالبؤرة والسياق؛ لا نصف كل ترتيب آخر بأنه مستحيل في كل مقام.",
      errorType: "word-order",
    },
    {
      id: "e18",
      type: "multiple-choice",
      instructionAr: "اختر الترتيب المحايد في جملة رئيسية بسيطة:",
      questionDe: "Ich habe ___ gegessen.",
      options: [
        "einen Apfel",
        "gegessen einen Apfel",
        "ein Apfel",
        "einen Apfel essen",
      ],
      correctIndex: 0,
      explanation:
        "في الترتيب المحايد، يسبق المفعول einen Apfel Partizip II. وقد توجد عناصر مؤجلة أو بؤرة خاصة في سياقات أخرى؛ السؤال يحدد الترتيب المحايد.",
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
      instructionAr: "أكمل بمساعد Perfekt الملائم في هذين الاستعمالين اللازمين لأفعال السفر:",
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
        "في هذين الاستعمالين اللازمين — القطار ينطلق ونحن نصل — يأتي المساعد sein. لا تعمّم ذلك على كل معنى لكل فعل سفر.",
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
        "في هذا السياق عند شباك التذاكر تعني einfache Fahrt رحلةً باتجاه واحد؛ أما hin und zurück فتعني ذهاباً وإياباً. وخارج سياق التذاكر قد تعني einfach «بسيط».",
      errorType: "vocabulary",
    },
    {
      id: "e22",
      type: "multiple-choice",
      instructionAr: "أيّ صياغة مناسبة لموقف الشكوى المحدد؟",
      questionDe: "Sie sind im Hotelzimmer: Das Zimmer ist nicht sauber. Welche Bitte nennt das Problem klar und höflich?",
      options: [
        "Entschuldigung, das Zimmer ist leider nicht sauber. Könnten Sie mir bitte ein anderes Zimmer geben?",
        "Das Zimmer ist schlecht! Geben Sie mir ein anderes!",
        "Vielleicht stimmt etwas mit dem Zimmer nicht; ich bin mir nicht sicher.",
        "Kein Problem, das ist in Ordnung.",
      ],
      correctIndex: 0,
      explanation:
        "الخيار يجمع وصف المشكلة بوضوح وطلباً مهذباً بصيغة Könnten Sie …? إنه نموذج مناسب للموقف المحدد، لا قاعدة ثقافية عن كل شكوى بالألمانية.",
      errorType: "vocabulary",
    },
    {
      id: "e23",
      type: "transformation",
      instructionAr: "أعد صياغة المثال المحدد بـPerfekt؛ لا تفترض أن الكلام لا يقبل Präteritum:",
      prompt:
        "Der Zug fuhr um acht ab und erreichte Berlin am Mittag. → Formulieren Sie beide Prädikate im Perfekt.",
      acceptedAnswers: [
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht.",
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht",
      ],
      sampleAnswer:
        "Der Zug ist um acht abgefahren und hat Berlin am Mittag erreicht.",
      hint: "المطلوب هنا Perfekt: abfahren في معنى انطلاق القطار يأخذ sein؛ وerreichen يأخذ haben في هذا المثال.",
      explanation:
        "صيغة Perfekt المستهدفة هي ist abgefahren وhat erreicht. قد يرد Präteritum أيضاً في الكلام؛ التمرين يطلب تحويل هذين الفعلين إلى Perfekt تحديداً.",
      errorType: "grammar",
    },
    {
      id: "e24",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe:
        "Wir haben alles geplant. Aber der Zug hatte drei Stunden Verspätung. In Dresden mussten wir umsteigen. Am Ende sind wir um Mitternacht angekommen. Das Hotel war trotzdem noch offen, und wir konnten sofort einchecken.",
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
          de: "Im Text stehen hatte, mussten und konnten im Präteritum.",
          ar: "الأفعال hatte وmussten وkonnten وردت بالـPräteritum.",
          isTrue: true,
          whyAr: "في هذا النص تحديداً، هذه الصيغ الثلاث في Präteritum؛ لا تعمم الصيغة على كل مقام أو كل استعمال.",
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
        "في النص هذا المثال المحدد: sind angekommen في Perfekt، وhatte وmussten وwar وkonnten في Präteritum. لا يعني ذلك أن بقية الأفعال أو كل السياقات تتبع قسمة مطلقة.",
      errorType: "grammar",
    },
    {
      id: "e25",
      type: "multiple-choice",
      instructionAr: "اختر العبارة التي تطابق نوع الغرفة والفترة المذكورين:",
      questionDe: "Am Telefon: Sie möchten vom 10. bis zum 12. Juli ein Doppelzimmer reservieren. Was sagen Sie?",
      options: [
        "Ich möchte ein Doppelzimmer vom 10. bis zum 12. Juli reservieren, bitte.",
        "Ich möchte ein Einzelzimmer vom 10. bis zum 12. Juli reservieren, bitte.",
        "Ich möchte ein Doppelzimmer vom 10. bis zum 12. Juli abholen, bitte.",
        "Ich möchte eine Fahrkarte vom 10. bis zum 12. Juli reservieren, bitte.",
      ],
      correctIndex: 0,
      explanation:
        "الخيار الأول يحافظ على نوع الغرفة (Doppelzimmer) والتاريخ، ويستخدم reservieren في طلب حجز واضح. العبارات الأخرى تغيّر نوع الغرفة أو تستعمل فعلاً/اسماً لا يطابق المقصود.",
      errorType: "vocabulary",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich habe nach Berlin gefliegen.",
        right: "Ich bin nach Berlin geflogen.",
        whyAr: "في معنى السفر بالطائرة إلى وجهة: bin geflogen. راجع مساعد كل فعل بحسب معناه، ولا تعمّم على كل استعمال للحركة.",
      },
      {
        wrong: "Ich habe gegessen einen Apfel.",
        right: "Ich habe einen Apfel gegessen.",
        whyAr: "هذا هو الترتيب المحايد للمفعول وPartizip II في الجملة الرئيسية البسيطة؛ قد تظهر عناصر مؤجلة في سياقات مخصوصة.",
      },
      {
        wrong: "gekaufen",
        right: "gekauft",
        whyAr: "صيغة Partizip II القياسية من kaufen هي gekauft. لا تُنشئ الصيغة بقياس عام على أفعال أخرى؛ تعلّم صورة الفعل نفسه.",
      },
    ],
    eselsbruecken: [
      "في السفر اللازم إلى وجهة قد يأتي sein؛ لكن المساعد يتبع معنى الفعل وبنيته، وقد يأخذ الفعل نفسه haben في استعمال آخر.",
      "في جملة رئيسية خبرية بسيطة: يفتح المساعد قوس Perfekt ويأتي Partizip II في آخره؛ راجع ترتيب الفعل في الجمل الفرعية على حدة.",
    ],
    culturalNote: {
      title: "سؤال متابعة عن الرحلة",
      content:
        "بعد أن يذكر المتحدث رحلة، يمكن متابعة الحديث بسؤال مثل: «Wie war dein Urlaub?» أو «Was hast du dort gemacht?». هذه عبارات للممارسة، وليست ادعاءً بأن جميع المتحدثين يسألون السؤال نفسه.",
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
      explanation: "sehen فعل قوي: sehen – sah – gesehen؛ وفي معنى مشاهدة فيلم مع مفعول، Perfekt هنا: habe gesehen.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة (الحركة):",
      questionDe: "Mona ___ nach Hause ___.",
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
      instructionAr: "اختر الكلمة التي تصلح الخلل في الجملة المعروضة:",
      wrongSentence: "Wir haben nach Tunis gefahren.",
      wrongWord: "haben",
      correctWord: "sind",
      options: ["sind", "haben", "waren", "hatten"],
      explanation:
        "في معنى السفر إلى Tunis دون مفعول منقول، الصيغة هي: Wir sind nach Tunis gefahren. قد يختلف المساعد في استعمالات متعدية أخرى لـfahren.",
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
      ar: "زمن Perfekt الألماني (صيغة ماضٍ مركبة)",
      example: "Ich habe gegessen.",
      exampleAr: "أكلت.",
      level: "A2",
    },
    {
      id: "fc6",
      de: "das Partizip II",
      ar: "صيغة Partizip II الألمانية",
      example: "gesehen, gegessen, gekauft",
      exampleAr: "صيغ Partizip II من sehen وessen وkaufen",
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
      example: "Wir haben im Meer geschwommen.",
      exampleAr: "سبحنا في البحر (نشاطاً).",
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
              de: "Ich fahre morgen nach Deutschland.",
              ar: "سأسافر غداً إلى ألمانيا.",
              best: false,
              replyDe: "Ach, du sprichst von deiner nächsten Reise?",
              replyAr: "آه، تقصد رحلتك القادمة؟",
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
              de: "Ich habe gut geschlafen.",
              ar: "نمت جيداً.",
              best: false,
              replyDe: "Und was hast du dir dort angesehen?",
              replyAr: "وماذا شاهدت هناك؟",
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
              de: "Ich bin gestern nach Berlin gefahren.",
              ar: "سافرت أمس إلى برلين.",
              best: false,
              replyDe: "Und welches Essen hast du dort probiert?",
              replyAr: "وأي طعام جرّبت هناك؟",
            },
          ],
        },
      ],
    },
  ],
};
