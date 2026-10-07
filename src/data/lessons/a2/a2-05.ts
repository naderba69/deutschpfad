import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-05: في المكتب — Präteritum من sein/haben، وعبارات الهاتف والبريد المهني.
 */
export const lessonA205: Lesson = {
  id: "a2-05",
  unitId: "a2-05",
  level: "A2",
  order: 1,
  titleDe: "Im Büro",
  titleAr: "في المكتب والعمل",
  summary:
    "مراجعة Präteritum من sein وhaben في سياقات المكتب، مع تمييزه من Perfekt وPlusquamperfekt؛ وعبارات هاتفية وبريد إلكتروني مختارة، ونص قراءة وحوارات قصيرة ومهام كتابة موجّهة. لا تقيس المادة النطق أو أداءً شفهياً.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann grundlegende Redemittel am Telefon ihren Funktionen zuordnen.",
      ar: "أن أطابق عبارات هاتفية أساسية بوظائفها ومعانيها.",
      evidence: {
        exerciseIds: ["e3"],
        taskIds: ["practice:a2-05:e3", "flow-practice:a2-05:e3"],
        labelAr: "أكمل تمرين المطابقة e3؛ يظهر ضمن أول أربعة في lesson-flow، وقد يظهر في عينة practice العشوائية.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann wichtige Angaben aus kurzen Telefongesprächen heraushören.",
      ar: "أن أستخرج معلومات محددة من حواري هاتف قصيرين بعد الاستماع، لا بعد كشف التفريغ.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l2:q4"],
        labelAr: "أجب عن أسئلة الاستماع الأربعة قبل كشف التفريغ؛ لا يثبت فتح الحوار أو إجابته بعد كشفه الاستماع.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in kurzen Bürosätzen die passende Präteritumform von sein oder haben am Subjekt erkennen.",
      ar: "أن أختار في جمل قصيرة من سياق العمل صيغة Präteritum المناسبة لـsein أو haben وفق الفاعل.",
      evidence: {
        exerciseIds: ["m1", "m2"],
        taskIds: ["mini-test:a2-05:m1", "mini-test:a2-05:m2"],
        labelAr: "أجب عن m1 وm2؛ يختبر كلاهما اختيار صيغة الفعل وفق فاعل واضح، ولا يُحسب ترتيب الكلمات أو تصحيح الأداة دليلاً لهذا الهدف.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann wichtige Informationen aus einer kurzen beruflichen E-Mail entnehmen.",
      ar: "أن أستخرج معلومات محددة من بريد مهني قصير عن الغياب والاجتماع والملفات المطلوبة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-05:rq1",
          "reading:read-a2-05:rq2",
          "reading:read-a2-05:rq3",
          "reading:read-a2-05:rq4",
        ],
        labelAr: "اقرأ البريد وأجب عن أسئلة الفهم الأربعة؛ لا يُحتسب فتح النص دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann Anrede und Grußformel einer kurzen formellen E-Mail schreiben.",
      ar: "أن أكتب تحية افتتاحية وخاتمة مناسبتين لبريد رسمي قصير في مهمتين موجّهتين.",
      evidence: {
        exerciseIds: ["w1", "w4"],
        taskIds: ["writing:a2-05:w1", "writing:a2-05:w4"],
        labelAr: "أنجز التحية الرسمية في w1 وخاتمة البريد بلا علامة ترقيم زائدة في w4؛ لا تقيس المهمتان نصاً حراً.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "للتعبير عن الأمس، يمكن أن تقول Ich war gestern krank أو Ich bin gestern krank gewesen. كلاهما تركيب صحيح؛ فما الصيغة البسيطة التي ستتدرّب عليها في رسالة المكتب؟",
    motivatingQuestionDe: "Warst du gestern im Büro oder warst du krank?",
    contextAr:
      "في المكتب، نقرأ بريداً عن غياب موظف ونستمع إلى مكالمات قصيرة. نراجع صيغ Präteritum من sein وhaben، ونتمرّن على عبارات هاتف وبريد مناسبة للسياق من غير تعميم صيغة واحدة على كل منطقة أو علاقة مهنية.",
    contextDe: "Ich war gestern krank und hatte Fieber.",
    connectionToPreviousAr:
      "في A2-01 راجعت Perfekt. يشيع Perfekt في الحديث عن الماضي، بينما يظهر Präteritum كثيراً في الكتابة؛ وتشيع صيغ مثل war وhatte أيضاً في الكلام. هذه اتجاهات استعمال لا قاعدة تمنع إحدى الصيغتين.",
    activateVocabulary: [
      { de: "das Büro", ar: "المكتب" },
      { de: "anrufen", ar: "يتصل هاتفياً" },
      { de: "der Kollege / die Kollegin", ar: "الزميل / الزميلة" },
      { de: "die Besprechung", ar: "الاجتماع" },
      { de: "die E-Mail", ar: "البريد الإلكتروني" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-10): اختر تصريف الفعل المناسب:",
      questionDe: "Ich ___ in einer Firma. (arbeiten)",
      options: ["arbeite", "arbeitest", "arbeitet", "arbeiten"],
      correctIndex: 0,
      explanation: "مع ich في المضارع نقول arbeite؛ هذا استرجاع لتصريف الفعل في درس المهن.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-10): اختر أداة النفي المناسبة:",
      questionDe: "Ich arbeite ___ am Sonntag.",
      options: ["nicht", "kein", "keine", "keinen"],
      correctIndex: 0,
      explanation: "هنا ننفي الفعل arbeite؛ لذلك نستخدم nicht.",
      errorType: "negation",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-09): أكمل حرف الجر المناسب لليوم والساعة:",
      template: "Der Termin ist ___ Montag ___ neun Uhr.",
      blanks: [
        { correct: "am", options: ["am", "um", "im"] },
        { correct: "um", options: ["um", "am", "im"] },
      ],
      explanation: "نستعمل am مع يوم الأسبوع وum مع الساعة: am Montag um neun Uhr.",
      errorType: "preposition",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "Präteritum من sein وhaben: war وhatte",
      titleDe: "Das Präteritum von sein und haben",
      explanationAr: `Präteritum زمن ماضٍ، وتظهر صيغته المستهدفة هنا كفعل مصروف واحد مثل war وhatte. في الألمانية المكتوبة والسرد يظهر هذا الزمن كثيراً، بينما يشيع Perfekt في الحديث عن الماضي في سياقات كثيرة. لكن استعمال Präteritum مع sein وhaben شائع أيضاً في الكلام، وكذلك بعض الأفعال الناقصة؛ وهذه ميول تتأثر بالمنطقة والسياق والنوع، لا قاعدة مطلقة.

تصريف sein هو war, warst, war, waren, wart, waren؛ وتصريف haben هو hatte, hattest, hatte, hatten, hattet, hatten. انتبه إلى الفرق بين ihr wart (أنتم كنتم) وsie/Sie waren (هم كانوا/حضرتكم كنتم)، وبين ihr hattet وsie/Sie hatten. الجدول يعرض صيغ المضارع البسيط الماضي المستهدفة في هذا الدرس، لا صيغ Perfekt.

يستعمل sein في أمثلة مثل المكان أو الصفة: Ich war im Büro؛ وكذلك للحالة: Ich war krank. ويستعمل haben للملكية ولتراكيب شائعة مثل Zeit haben وFieber haben: Ich hatte Fieber. هذه معانٍ وتراكيب تساعدك على الاختيار، وليست مقابلة آلية من كلمة عربية واحدة. كما أن Ich bin gestern krank gewesen صيغة Perfekt صحيحة، وIch war krank gewesen صيغة Plusquamperfekt لها استعمالها؛ لا تخلط بين اسم الزمن وصحة الجملة.`,
      whyAr: `تظهر war وhatte كثيراً في أخبار العمل القصيرة: كنت مريضاً، كان الاجتماع أمس، أو كان لدى الزميل موعد. يساعدك التمييز على فهم سبب الغياب أو وقت الاجتماع، وعلى كتابة جمل موجّهة عن موقف سابق. لا يلزم من ذلك استعمال Präteritum في كل حديث؛ قد تسمع Ich bin krank gewesen أو Ich habe Fieber gehabt أيضاً، ويختلف الاختيار باختلاف المتكلم والمنطقة والسياق.

في التمرين اسأل عن الفاعل أولاً ثم اختر الصيغة: ich war، du warst، wir waren؛ ich hatte، du hattest، wir hatten. وبعدها اسأل هل الجملة تصف حالة أو مكاناً أم شيئاً كان لدى الشخص. هذه قرائن تعليمية للأمثلة هنا، وليست قاعدة تحصر كل استعمال لـsein وhaben.`,
      table: {
        title: "تصريف sein وhaben في Präteritum",
        columns: ["الضمير", "sein", "haben", "مثال"],
        rows: [
          { label: "ich", cells: ["war", "hatte", "Ich war gestern im Büro."] },
          { label: "du", cells: ["warst", "hattest", "Du warst krank und hattest Fieber."] },
          { label: "er/sie/es", cells: ["war", "hatte", "Anna war krank und hatte Fieber."] },
          { label: "wir", cells: ["waren", "hatten", "Wir waren in einer Besprechung."] },
          { label: "ihr", cells: ["wart", "hattet", "Ihr wart spät und hattet wenig Zeit."] },
          { label: "sie/Sie", cells: ["waren", "hatten", "Die Kollegen waren im Büro."] },
        ],
      },
      examples: [
        { de: "Ich war gestern im Büro.", ar: "كنت أمس في المكتب." },
        { de: "Du hattest am Montag einen Termin.", ar: "كان لديك موعد يوم الاثنين." },
        { de: "Anna war krank und hatte Fieber.", ar: "كانت آنا مريضة وكان لديها حمى." },
        { de: "Wir waren in einer Besprechung.", ar: "كنا في اجتماع." },
        { de: "Ihr hattet viel Arbeit.", ar: "كان لديكم عمل كثير." },
        { de: "Die Kollegen hatten keine Zeit.", ar: "لم يكن لدى الزملاء وقت." },
        { de: "Herr Schulz war heute Morgen im Büro.", ar: "كان السيد شولتس في المكتب هذا الصباح." },
        { de: "Ich bin gestern krank gewesen.", ar: "كنت مريضاً أمس؛ هذه صيغة Perfekt صحيحة أيضاً." },
      ],
      comparisonWithArabic: `قد تعبّر العربية عن حالتين مختلفتين بعبارتين مثل «كنت مريضاً» و«كان لديّ موعد»، بينما تتطلب الأمثلة الألمانية اختيار فعل مختلف: sein أو haben. هذه مقارنة بين تراكيب بعينها؛ لا تعني أن sein يقابل دائماً «كان» أو أن haben يقابل دائماً «امتلك». فالسياق والتعبير الألماني المصاحب مهمان، مثل Fieber haben وZeit haben.

كما أن العربية لا تطابق تقسيم الأزمنة الألمانية إلى Präteritum وPerfekt وPlusquamperfekt بكلمة أو صيغة واحدة في كل سياق. قد تساعد كلمة «أمس» أو جملة سابقة في نقل العلاقة الزمنية، لكن الترجمة وحدها لا تثبت أن الصيغة الألمانية الأخرى خاطئة. احفظ المثال الألماني كاملاً، ثم استعمل المقابل العربي لفهم معناه لا لاستنتاج قاعدة صرفية عامة.`,
      eselsbruecke:
        "تذكّر السلسلتين مع الضمير: war – warst – war – waren – wart – waren؛ hatte – hattest – hatte – hatten – hattet – hatten. ثم راجع الفاعل قبل اختيار النهاية.",
      commonMistakes: [
        {
          wrong: "Ich war gestern im Büro gewesen. (أصف أمس فقط، بلا نقطة ماضية أسبق)",
          right: "Ich war gestern im Büro.",
          classification: "contextual-alternative",
          whyAr:
            "war gewesen ليست صيغة مستحيلة؛ إنها Plusquamperfekt وتناسب سياقاً يربط الوجود في المكتب بنقطة ماضية أخرى. إذا أردت في هذا التمرين الإخبار ببساطة عن أمس، فـwar هي الصيغة المستهدفة. لا تُسمَّ صيغة Plusquamperfekt خطأً نحوياً لمجرد أنها أطول.",
        },
        {
          wrong: "Wir war gestern im Büro.",
          right: "Wir waren gestern im Büro.",
          classification: "error",
          whyAr:
            "الفاعل wir جمع، وتصريف sein معه في Präteritum هو waren. أما war فيستعمل مع ich وer/sie/es؛ لذلك يلزم تعديل نهاية الفعل لتوافق الفاعل.",
        },
        {
          wrong: "Ich hatte ein Termin.",
          right: "Ich hatte einen Termin.",
          classification: "error",
          whyAr:
            "Termin اسم مذكر، وهو مفعول به للفعل hatte هنا؛ لذلك تأتي أداة النكرة في Akkusativ بصيغة einen. الخطأ في الأداة لا في تصريف hatte.",
        },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: Präteritum وPerfekt وPlusquamperfekt",
        content: `Ich war krank جملة Präteritum، وIch bin krank gewesen جملة Perfekt؛ كلتاهما صحيحة للتعبير عن الماضي، وإن اختلف شيوعها بحسب المنطقة والسياق. أما Ich war krank gewesen فهي Plusquamperfekt، وتفيد عادةً أن الحالة سبقت نقطةً أخرى في الماضي، مثل: Bevor ich anrief, war Herr Schulz schon im Büro gewesen.

يظهر الفرق في البنية أيضاً: في أمثلة هذا الدرس يظهر Präteritum في الفعل المصروف war أو hattest؛ وPerfekt يتكوّن هنا من فعل مساعد في المضارع مع Partizip II (bin gewesen/habe gehabt)، وPlusquamperfekt من فعل مساعد في Präteritum مع Partizip II (war gewesen/hatte gehabt). لا تجعل عبارة «للكلام» أو «للكتابة» حكماً يمنع استعمال زمن صحيح في سياق آخر.`,
      },
    },
    {
      id: "t2",
      titleAr: "التواصل الهاتفي والبريد الإلكتروني المهني",
      titleDe: "Am Telefon und in beruflichen E-Mails",
      explanationAr: `تتغير عبارة الهاتف بحسب دور المتحدث: قد يجيب موظف الاستقبال باسم الشركة واسمه، مثل Firma Weber, Anna Weber, guten Tag؛ ويعرّف المتصل بنفسه، مثل Guten Tag, hier ist Sami Ben Ali. إذا احتاج المتصل إلى الانتظار يمكن أن يسمع Einen Moment bitte. Ich verbinde Sie. وللسؤال عن المحاور بلطف يمكنه قول Mit wem spreche ich, bitte? لا توجد صيغة واحدة واجبة في كل مؤسسة أو مكالمة.

عند تعذّر الوصول إلى الشخص، يمكن طلب ترك رسالة: Kann ich eine Nachricht hinterlassen? أو السؤال Was soll ich ihm ausrichten? ولإعطاء مضمونها: Bitte sagen Sie ihm, dass ich heute Nachmittag zurückrufe. في البريد الرسمي، تساعد خانة Betreff القصيرة والتحية Sehr geehrte Frau Weber, أو Sehr geehrter Herr Schulz, والقالب الختامي Mit freundlichen Grüßen. اختر الرسمية بحسب العلاقة؛ Hallo قد تناسب زميلاً تعرفه، ولا تكون خطأً لغوياً في كل سياق.

في الصيغة المعيارية المستخدمة هنا توضع فاصلة بعد التحية، ثم يبدأ نص الرسالة بحرف صغير إذا استمر التركيب: Sehr geehrte Frau Weber, / vielen Dank für Ihre Nachricht. أما التحية الختامية المستقلة فتكتب بلا فاصلة ولا نقطة، ويأتي الاسم في سطر تالٍ: Mit freundlichen Grüßen / Anna Weber. تختلف هذه العلامة عن الفاصلة بعد Anrede؛ لا تنقل إلى الألمانية ترقيم الإنجليزية آلياً.`,
      whyAr: `تساعد معرفة الدور على اختيار عبارة تؤدي الغرض: من يرد على الهاتف يعرّف بجهته، والمتصل يذكر اسمه وسبب اتصاله، ثم يطلب التحويل أو يترك رسالة. اختيار صيغة مهذبة يقلل الغموض، لكنه لا يعني أن عبارة أخرى مثل Hallo ممنوعة دائماً؛ فالعلاقة والقناة وسياق العمل تؤثر في درجة الرسمية.

في البريد يمكن أن تساعدك بنية التحية، وموضوع الرسالة، وطلب محدد، والخاتمة على تنظيم النص. وتقاس هنا مهارتان محدودتان فقط: كتابة تحية افتتاحية وخاتمة رسمية وفق المثال. لا يقيّم تمرين التحويل مقالاً حراً، ولا يثبت تفاعل الخيارات النصية القدرة على إجراء مكالمة شفهية أو نطق العبارات.`,
      table: {
        title: "عبارات مختارة بحسب موقف الهاتف والبريد",
        columns: ["الموقف", "الألمانية", "المعنى/الوظيفة"],
        rows: [
          { label: "الرد على هاتف الشركة", cells: ["Firma Weber, Anna Weber, guten Tag!", "تعريف الجهة والمتحدث والتحية"] },
          { label: "تعريف المتصل", cells: ["Guten Tag, hier ist Sami Ben Ali.", "ذكر الاسم عند الاتصال"] },
          { label: "السؤال عن المحاور", cells: ["Mit wem spreche ich, bitte?", "مع من أتحدث، من فضلك؟"] },
          { label: "الانتظار والتحويل", cells: ["Einen Moment bitte. Ich verbinde Sie.", "لحظة، من فضلك. سأحوّلك إلى الجهة المطلوبة."] },
          { label: "طلب ترك رسالة", cells: ["Kann ich eine Nachricht hinterlassen?", "هل يمكنني ترك رسالة؟"] },
          { label: "إرسال مضمون الرسالة", cells: ["Bitte sagen Sie ihm, dass ich zurückrufe.", "من فضلك أخبره أنني سأتصل مجدداً."] },
          { label: "تحية بريد رسمي", cells: ["Sehr geehrte Frau Weber,", "السيدة فيبر المحترمة،"] },
          { label: "خاتمة البريد", cells: ["Mit freundlichen Grüßen", "مع خالص التحيات"] },
        ],
      },
      examples: [
        { de: "Firma Weber, Anna Weber, guten Tag!", ar: "شركة فيبر، آنا فيبر، نهارك سعيد!" },
        { de: "Guten Tag, hier ist Sami Ben Ali.", ar: "نهارك سعيد، معك سامي بن علي." },
        { de: "Mit wem spreche ich, bitte?", ar: "مع من أتحدث، من فضلك؟" },
        { de: "Einen Moment bitte. Ich verbinde Sie.", ar: "لحظة، من فضلك. سأحوّلك إلى الجهة المطلوبة." },
        { de: "Kann ich eine Nachricht hinterlassen?", ar: "هل يمكنني ترك رسالة؟" },
        { de: "Sehr geehrte Frau Weber,\nvielen Dank für Ihre Nachricht.", ar: "السيدة فيبر المحترمة،\nشكراً جزيلاً على رسالتك." },
        { de: "Mit freundlichen Grüßen\nAnna Weber", ar: "مع خالص التحيات\nآنا فيبر" },
        { de: "Hallo Anna,\nhast du heute Zeit?", ar: "مرحباً آنا،\nهل لديك وقت اليوم؟ (مثال غير رسمي لزميلة معروفة)" },
      ],
      comparisonWithArabic: `تستخدم العربية والألمانية صيغاً للتحية والطلب والختام، لكن ألفاظها ودرجات رسميتها لا تتطابق كلمةً بكلمة. يمكن أن تؤدي Sehr geehrte Frau Weber وظيفة قريبة من «السيدة فيبر المحترمة»، لكن اختيار الصيغة يتبع علاقة المرسل بالمتلقي والعرف الكتابي، لا مقابلة قاموسية ثابتة.

وفي كثير من الرسائل العربية قد تُكتب التحية أو الخاتمة بعلامات ترقيم مختلفة؛ أما النموذج الألماني هنا فيضع فاصلة بعد Anrede، ثم يكتب السطر التالي بحرف صغير حين يستمر النص، ولا يضع علامة ترقيم بعد Grußformel المستقلة. هذه ملاحظة عن هذا النمط الكتابي الألماني، وليست حكماً على أساليب العربية أو كل المراسلات الألمانية.`,
      eselsbruecke:
        "الهاتف: عرّف بالدور ثم اذكر المطلوب. البريد في هذا النموذج: Anrede مع فاصلة، متن واضح، ثم Mit freundlichen Grüßen بلا فاصلة قبل الاسم.",
      commonMistakes: [
        {
          wrong: "Hallo Herr Weber, (في أول رسالة إلى شخص غير معروف)",
          right: "Sehr geehrter Herr Weber,",
          classification: "contextual-alternative",
          whyAr:
            "Hallo تحية صحيحة في سياقات وعلاقات أقل رسمية، ولا تُعد خطأً نحوياً بذاتها. عند أول مراسلة رسمية إلى شخص غير معروف، تكون Sehr geehrter Herr Weber أنسب عادةً؛ الاختيار متعلق بالسجل والعلاقة.",
        },
        {
          wrong: "Mit freundliche Grüßen",
          right: "Mit freundlichen Grüßen",
          classification: "error",
          whyAr:
            "حرف الجر mit يطلب Dativ، وGrüßen هنا جمع في Dativ؛ لذلك تأخذ الصفة النهاية -en: freundlichen. هذه مسألة تصريف وليست اختياراً بين تحيتين.",
        },
        {
          wrong: "Mit freundlichen Grüßen,\nAnna Weber",
          right: "Mit freundlichen Grüßen\nAnna Weber",
          classification: "error",
          whyAr:
            "في الخاتمة المستقلة للرسالة الألمانية لا توضع فاصلة ولا نقطة بعد Grußformel؛ يوضع اسم المرسل في السطر التالي. لا تنقل الفاصلة الشائعة في خاتمة الرسائل الإنجليزية إلى هذا القالب الألماني.",
        },
        {
          wrong: "Ich verbinden Sie.",
          right: "Ich verbinde Sie.",
          classification: "error",
          whyAr:
            "الجملة الرئيسة مع الفاعل ich تحتاج الفعل المصرف verbinde؛ verbinden هو المصدر. أما Sie فمفعول به رسمي، ولا يغيّر تصريف الفعل.",
        },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: الهاتف المنطوق والبريد المكتوب",
        content: `في الهاتف، تساعد عبارات مثل Einen Moment bitte وIch verbinde Sie على تنظيم الأدوار لحظياً، وقد يطلب المتصل إعادة الاسم أو يترك رسالة. وفي البريد، لا يحتاج القارئ إلى ردّ فوري، لذلك يتضمن النص عادةً عنواناً موجزاً وAnrede ومضموناً مكتوباً وخاتمة. يختار المتعلم العبارة بحسب وظيفة الموقف، لا بترجمة كل كلمة حرفياً.

وتختلف صيغة التحية نفسها بحسب العلاقة: Sehr geehrte Frau Weber تصلح لمراسلة رسمية، وHallo Anna قد تلائم زميلة تعرفها. أما القاعدة الإملائية المحددة هنا فهي الفاصلة بعد Anrede وعدم وضع علامة بعد Grußformel المستقلة؛ لا تجعل اختلاف السجل خطأً نحوياً ولا تعمم النموذج على كل علاقة مهنية.`,
      },
    },
  ],

  reading: {
    id: "read-a2-05",
    titleDe: "Informationen zur Besprechung",
    titleAr: "معلومات عن الاجتماع",
    textType: "email",
    paragraphs: [
      "Betreff: Informationen zur Besprechung\nSehr geehrte Frau Weber,\nich war gestern nicht im Büro. Ich war krank und hatte Fieber. Deshalb konnte ich nicht zur Besprechung kommen. Am Abend habe ich Herrn Schulz eine Nachricht geschickt. Heute bin ich wieder im Büro.",
      "Herr Schulz hat mir geantwortet: Die Besprechung war gestern um 10 Uhr im Raum 3. Anna hatte die Zahlen für den Bericht vorbereitet. Karim hatte erste Folien für die Präsentation gemacht. Das Team hatte eine gute Idee für das neue Projekt. Die aktuelle Datei lag aber noch auf dem Computer von Herrn Schulz.",
      "Ich möchte den Bericht heute fertig schreiben. Bitte schicken Sie mir die Notizen und die aktuelle Datei per E-Mail. Ich habe den ersten Teil schon geschrieben. Für den zweiten Teil brauche ich die Zahlen aus der Besprechung. Wenn etwas fehlt, rufe ich Sie an.",
      "Haben Sie morgen um 11 Uhr Zeit für ein kurzes Gespräch? Wenn der Termin nicht passt, nennen Sie mir bitte einen anderen Zeitpunkt. Ich bin heute bis 16 Uhr im Büro und kann danach auch telefonieren.\nVielen Dank für Ihre Hilfe.\nMit freundlichen Grüßen\nSami Ben Ali",
    ],
    paragraphsAr: [
      "الموضوع: معلومات عن الاجتماع\nالسيدة فيبر المحترمة،\nلم أكن أمس في المكتب. كنت مريضاً وكانت لدي حمى، لذلك لم أستطع الحضور إلى الاجتماع. أرسلت إلى السيد شولتس رسالة مساءً. أنا اليوم في المكتب مجدداً.",
      "أجابني السيد شولتس: كان الاجتماع أمس الساعة العاشرة في الغرفة 3. كانت آنا قد أعدّت الأرقام الخاصة بالتقرير، وكان كريم قد أعدّ الشرائح الأولى للعرض. كانت لدى الفريق فكرة جيدة للمشروع الجديد، لكن النسخة الحالية من الملف بقيت على حاسوب السيد شولتس.",
      "أودّ إنهاء التقرير اليوم. من فضلك أرسل إليّ الملاحظات والملف الحالي بالبريد الإلكتروني. كتبت الجزء الأول بالفعل، وأحتاج إلى أرقام الاجتماع للجزء الثاني. إذا كان هناك شيء ناقص فسأتصل بك.",
      "هل لديك وقت غداً الساعة الحادية عشرة لاجتماع قصير؟ إذا لم يناسبك الموعد، فاذكري لي وقتاً آخر من فضلك. سأكون في المكتب اليوم حتى الرابعة، ويمكنني التحدث هاتفياً بعد ذلك أيضاً.\nشكراً جزيلاً على مساعدتك.\nمع خالص التحيات\nسامي بن علي",
    ],
    glossary: [
      { de: "die Besprechung", ar: "الاجتماع", noteAr: "اجتماع عمل لمناقشة موضوع أو مشروع." },
      { de: "das Fieber", ar: "الحمّى", noteAr: "في المثال: hatte Fieber، أي كانت لديه حمى." },
      { de: "die Nachricht", ar: "الرسالة", noteAr: "هنا رسالة أرسلها سامي إلى زميله." },
      { de: "die Zahl", ar: "الرقم", noteAr: "ترد في النص بصيغة الجمع Zahlen." },
      { de: "der Bericht", ar: "التقرير", noteAr: "نص أو تقرير عمل، وفي النص جزء أول وثانٍ." },
      { de: "die Folie", ar: "شريحة العرض", noteAr: "ترد في النص بصيغة الجمع Folien." },
      { de: "die Präsentation", ar: "العرض التقديمي", noteAr: "ملف أو عرض يقدّمه الموظف للفريق." },
      { de: "die Datei", ar: "الملف الرقمي", noteAr: "نسخة رقمية محفوظة على الحاسوب." },
      { de: "die Notiz", ar: "الملاحظة المكتوبة", noteAr: "ترد في النص بصيغة الجمع Notizen." },
      { de: "der Zeitpunkt", ar: "الوقت المحدد", noteAr: "هنا يطلب سامي اقتراح وقت آخر إذا لم يناسب الموعد." },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        instructionAr: "اقرأ الفقرة الأولى: لماذا لم يحضر سامي إلى المكتب؟",
        questionDe: "Warum war Sami gestern nicht im Büro?",
        questionAr: "لماذا لم يكن سامي في المكتب أمس؟",
        options: ["Er war krank.", "Er hatte Urlaub.", "Er hatte einen Termin.", "Er war im Ausland."],
        correctIndex: 0,
        explanation: "يذكر سامي أنه كان مريضاً وكانت لديه حمى؛ لا يقول إنه كان في إجازة أو خارج البلد.",
        errorType: "vocabulary",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        instructionAr: "أين ومتى عُقد الاجتماع بحسب البريد؟",
        questionDe: "Wann und wo war die Besprechung?",
        questionAr: "متى وأين عُقد الاجتماع؟",
        options: ["Gestern um 10 Uhr im Raum 3.", "Heute um 16 Uhr im Büro.", "Morgen um 11 Uhr in Raum 1.", "Am Montag um 9 Uhr im Raum 2."],
        correctIndex: 0,
        explanation: "يذكر الرد أن الاجتماع كان أمس الساعة العاشرة في الغرفة 3؛ أما الحادية عشرة غداً فهي موعد مقترح لمحادثة قصيرة.",
        errorType: "vocabulary",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        instructionAr: "ما الذي يطلب سامي أن ترسله السيدة فيبر؟",
        questionDe: "Was soll Frau Weber schicken?",
        questionAr: "ماذا ينبغي أن ترسل السيدة فيبر؟",
        options: ["Die Notizen und die aktuelle Datei.", "Nur eine Telefonnummer des Teams.", "Die Präsentation für nächste Woche.", "Die Rechnung für das Projekt."],
        correctIndex: 0,
        explanation: "يطلب سامي الملاحظات والملف الحالي عبر البريد الإلكتروني ليكمل التقرير.",
        errorType: "vocabulary",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        instructionAr: "ما الوقت الذي يقترحه سامي للمحادثة القصيرة؟",
        questionDe: "Wann schlägt Sami ein kurzes Gespräch vor?",
        questionAr: "متى يقترح سامي إجراء محادثة قصيرة؟",
        options: ["Morgen um 11 Uhr.", "Heute um 10 Uhr.", "Morgen um 16 Uhr.", "Am Freitag um 9 Uhr."],
        correctIndex: 0,
        explanation: "يقترح سامي الغد الساعة الحادية عشرة، ويسأل إن كان الموعد مناسباً.",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      { de: "Sehr geehrte Frau Weber,", ar: "السيدة فيبر المحترمة،" },
      { de: "Bitte schicken Sie mir die Notizen per E-Mail.", ar: "من فضلك أرسل إليّ الملاحظات بالبريد الإلكتروني." },
      { de: "Haben Sie morgen um 11 Uhr Zeit?", ar: "هل لديك وقت غداً الساعة الحادية عشرة؟" },
      { de: "Mit freundlichen Grüßen", ar: "مع خالص التحيات." },
    ],
    discussionAr:
      "خطط لرسالة قصيرة إلى زميل بشأن اجتماع فاتك: ما المعلومة التي تحتاجها؟ وما الموعد الذي تريد اقتراحه؟ هذا نقاش مفتوح لا يصحح آلياً ولا يُعد دليلاً على إتقان كتابة حرة.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "ترك رسالة هاتفية",
        lines: [
          { speaker: "Frau Weber", de: "Firma Weber, Anna Weber, guten Tag!", ar: "شركة فيبر، آنا فيبر، نهارك سعيد!" },
          { speaker: "Sami", de: "Guten Tag, hier ist Sami Ben Ali. Kann ich mit Herrn Schulz sprechen?", ar: "نهارك سعيد، معك سامي بن علي. هل يمكنني التحدث مع السيد شولتس؟" },
          { speaker: "Frau Weber", de: "Herr Schulz ist gerade in einer Besprechung. Möchten Sie eine Nachricht hinterlassen?", ar: "السيد شولتس في اجتماع الآن. هل ترغب في ترك رسالة؟" },
          { speaker: "Sami", de: "Ja, bitte sagen Sie ihm, dass ich heute Nachmittag zurückrufe.", ar: "نعم، من فضلك أخبريه أنني سأتصل مجدداً بعد ظهر اليوم." },
          { speaker: "Frau Weber", de: "Gern. Ich richte es aus.", ar: "بكل سرور. سأبلغه ذلك." },
        ],
      },
      {
        id: "l2",
        title: "Besprechung und E-Mail",
        lines: [
          { speaker: "Anna", de: "Hallo Karim! Wir hatten gestern eine wichtige Besprechung.", ar: "مرحباً كريم! كان لدينا أمس اجتماع مهم." },
          { speaker: "Karim", de: "Ach ja? Ich war krank und konnte nicht kommen.", ar: "آه حقاً؟ كنت مريضاً ولم أستطع الحضور." },
          { speaker: "Anna", de: "Kein Problem. Wir hatten eine gute Idee für das Projekt.", ar: "لا مشكلة. كانت لدينا فكرة جيدة للمشروع." },
          { speaker: "Karim", de: "Super! Schick mir bitte eine E-Mail mit den Details.", ar: "رائع! أرسلي لي بريداً إلكترونياً بالتفاصيل من فضلك." },
          { speaker: "Anna", de: "Mache ich sofort.", ar: "سأفعل ذلك فوراً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة بعد الاستماع إلى الحوار الأول:",
        questionDe: "Wer ist gerade in einer Besprechung?",
        questionAr: "من الموجود حالياً في اجتماع؟",
        options: ["Herr Schulz", "Frau Weber", "Sami", "Karim"],
        correctIndex: 0,
        explanation: "تقول السيدة فيبر إن السيد شولتس في اجتماع حالياً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر ما قال سامي إنه سيفعله:",
        questionDe: "Was sagt Sami, dass er tun wird?",
        questionAr: "ماذا قال سامي إنه سيفعل؟",
        options: ["Er ruft heute Nachmittag zurück.", "Er schickt sofort einen Bericht.", "Er kommt morgen ins Büro.", "Er spricht mit Karim."],
        correctIndex: 0,
        explanation: "يطلب سامي إبلاغ السيد شولتس بأنه سيتصل مجدداً بعد ظهر اليوم.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر سبب غياب كريم:",
        questionDe: "Warum konnte Karim nicht kommen?",
        questionAr: "لماذا لم يستطع كريم الحضور؟",
        options: ["Er war krank.", "Er hatte Urlaub.", "Er hatte einen anderen Termin.", "Er musste länger arbeiten."],
        correctIndex: 0,
        explanation: "يقول كريم Ich war krank؛ ولا يذكر أنه كان في إجازة.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "ماذا يطلب كريم من آنا؟",
        questionDe: "Was soll Anna Karim schicken?",
        questionAr: "ماذا ينبغي لآنا أن ترسل إلى كريم؟",
        options: ["Eine E-Mail mit den Details.", "Eine Liste mit den Teilnehmern.", "Ein Protokoll vom letzten Monat.", "Seinen Bericht für das Projekt."],
        correctIndex: 0,
        explanation: "يطلب كريم eine E-Mail mit den Details، أي بريداً إلكترونياً بالتفاصيل.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات المكتب: ü، sp، وch",
    items: [
      { de: "das Büro", ar: "المكتب", note: "IPA: [byˈʀoː]؛ ü في المقطع الأول صوت أمامي مدوّر [y]، وليس صوت u العربي؛ o في المقطع المنبور طويل." },
      { de: "anrufen", ar: "يتصل هاتفياً", note: "IPA: [ˈanʀuːfn̩]؛ الجزء المنفصل an يحمل النبر الرئيس، وrufen يبقى في المصدر من حيث بناء الكلمة." },
      { de: "der Kollege", ar: "الزميل", note: "IPA: [kɔˈleːɡə]؛ النبر على المقطع الثاني، وفيه e طويلة [eː]." },
      { de: "die Besprechung", ar: "الاجتماع", note: "IPA: [bəˈʃpʀɛçʊŋ]؛ sp في بداية المقطع المنبور = [ʃp]، وch بعد e = [ç]، ولا يطابق تماماً شيناً أو خاءً عربية." },
      { de: "die Nachricht", ar: "الرسالة", note: "IPA: [ˈnaːxʁɪçt]؛ ch بعد a هو [x]، وبعد i هو [ç]؛ يختلف الصوتان بحسب الحركة السابقة." },
      { de: "verbinden", ar: "يحوّل/يصل المكالمة", note: "IPA: [fɛɐ̯ˈbɪndn̩]؛ v في ver هنا [f]، والنبر على bin؛ النطق قد يحقق نهاية -en بمقطع أنفي مخفّف." },
    ],
    tip:
      "استخدم رموز IPA أو تسجيلاً موثوقاً عند التدرب. لا يقابل ü في Büro صوت عربي مطابق؛ فلا تختزله إلى /u/ أو /i/. وch في Besprechung [ç] ليس شيناً أو خاءً مطابقة؛ أما Nachricht ففيها [x] بعد a و[ç] بعد i. قد يختلف تحقيق r الألماني بحسب المتحدث والمنطقة؛ وهذه الرموز أوصاف قاموسية وليست طريقة نطق وحيدة.",
    shadowing: [
      { de: "Firma Weber, guten Tag!", ar: "شركة فيبر، نهارك سعيد!", tip: "ابدأ بتحية قصيرة واضحة، ثم انطق اسم الشركة؛ هذا تدريب نطق لا تقييم لمكالمة حقيقية." },
      { de: "Ich verbinde Sie.", ar: "سأحوّلك إلى الجهة المطلوبة.", tip: "ich ينتهي بـ /ç/ بعد حركة أمامية؛ verbinde: /fɛɐ̯ˈbɪndə/." },
      { de: "Ich war gestern im Büro.", ar: "كنت أمس في المكتب.", tip: "war /vaːɐ̯/؛ Büro /byˈʁoː/، والنبر الرئيس على المقطع الأخير." },
      { de: "Wir hatten viel Arbeit.", ar: "كان لدينا عمل كثير.", tip: "hatten: /ˈhatn̩/؛ الكتابة tt بعد الحركة القصيرة لا تعني نطق t طويلة مستقلة." },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب تحية افتتاحية رسمية للسيد بن علي:",
      prompt: "اكتب بالألمانية: «السيد بن علي المحترم،»",
      acceptedAnswers: ["Sehr geehrter Herr Ben Ali,"],
      sampleAnswer: "Sehr geehrter Herr Ben Ali,",
      explanation: "في هذا النموذج: Sehr geehrter + Herr + اسم العائلة، ثم فاصلة بعد التحية.",
      errorType: "punctuation",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف Präteritum المناسب:",
      template: "Ich ___ gestern im Büro. Wir ___ viel Arbeit. Du ___ krank. Frau Weber ___ einen Termin.",
      blanks: [
        { correct: "war", options: ["war", "waren", "hatte"] },
        { correct: "hatten", options: ["war", "hatten", "hatte"] },
        { correct: "warst", options: ["war", "warst", "wart"] },
        { correct: "hatte", options: ["hatte", "hatten", "hattest"] },
      ],
      explanation: "تتبع الفاعل: ich war، wir hatten، du warst، وFrau Weber hatte.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Einen Moment bitte. Ich verbinde Sie.",
      explanation: "استمع إلى العبارتين معاً واكتب علامة الوقف بين الجملتين.",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "transformation",
      instructionAr: "اكتب خاتمة معيارية مناسبة لبريد رسمي؛ لا تضف فاصلة أو نقطة:",
      prompt: "اكتب عبارة الختام الألمانية «مع خالص التحيات» من دون اسم المرسل.",
      acceptedAnswers: ["Mit freundlichen Grüßen"],
      sampleAnswer: "Mit freundlichen Grüßen",
      explanation: "تُكتب Grußformel المستقلة بلا علامة ترقيم، ثم يأتي اسم المرسل في السطر التالي.",
      errorType: "punctuation",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sein المناسب للفاعل:",
      questionDe: "Ich ___ gestern im Büro.",
      options: ["war", "warst", "waren", "wart"],
      correctIndex: 0,
      explanation: "مع ich نستخدم war في Präteritum من sein.",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف haben المناسب للفاعل:",
      questionDe: "Wir ___ gestern eine Besprechung.",
      options: ["hatten", "hatte", "hattest", "hattet"],
      correctIndex: 0,
      explanation: "مع wir نستخدم hatten؛ أما hatte للمفرد وhattet مع ihr.",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صِل العبارة الهاتفية بمعناها أو وظيفتها:",
      pairs: [
        { left: "Mit wem spreche ich, bitte?", right: "مع من أتحدث، من فضلك؟" },
        { left: "Einen Moment bitte.", right: "لحظة، من فضلك." },
        { left: "Ich verbinde Sie.", right: "سأحوّلك إلى الجهة المطلوبة." },
        { left: "Sie sind falsch verbunden.", right: "يبدو أن الاتصال وصل إلى جهة غير مقصودة." },
      ],
      explanation: "اختر المقابل بحسب وظيفة العبارة في مكالمة؛ وقد تتنوع الصيغ المستخدمة بين المؤسسات.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["war", "Ich", "gestern", "krank", "."],
      correctSentence: "Ich war gestern krank.",
      explanation: "في الجملة الخبرية يأتي الفعل المصرف في الموقع الثاني: Ich war gestern krank.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح تصريف الفعل ليتوافق مع الفاعل:",
      wrongSentence: "Wir war gestern im Büro.",
      wrongWord: "war",
      correctWord: "waren",
      options: ["waren", "warst", "wart", "war"],
      explanation: "مع الفاعل الجمع wir، صيغة sein في Präteritum هي waren.",
      errorType: "conjugation",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة sein أو haben المناسبة للمعنى والفاعل:",
      template: "Ich ___ krank. Ich ___ Fieber. Wir ___ gestern in Berlin.",
      blanks: [
        { correct: "war", options: ["war", "hatte"] },
        { correct: "hatte", options: ["war", "hatte"] },
        { correct: "waren", options: ["waren", "hatten"] },
      ],
      explanation: "نقول Ich war krank وIch hatte Fieber؛ ومع wir نقول wir waren.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل وصف الحاضر إلى Präteritum:",
      prompt: "Ich bin krank. → اكتب الجملة في Präteritum.",
      acceptedAnswers: ["Ich war krank", "Ich war krank."],
      sampleAnswer: "Ich war krank.",
      explanation: "تحويل bin إلى war يعطي صيغة Präteritum المستهدفة هنا؛ ولا يعني أن Perfekt مستحيل.",
      errorType: "conjugation",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر المعنى الأقرب للتحية الرسمية:",
      questionDe: "Sehr geehrter Herr Weber,",
      questionAr: "ما معنى العبارة في بداية رسالة؟",
      options: ["السيد فيبر المحترم،", "مرحباً يا فيبر!", "إلى اللقاء، سيد فيبر.", "نهارك سعيد يا زميل."],
      correctIndex: 0,
      explanation: "هذه تحية افتتاحية رسمية لرجل يُخاطَب بلقب Herr واسم عائلته.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح نهاية الصفة في خاتمة البريد:",
      wrongSentence: "Mit freundliche Grüßen",
      wrongWord: "freundliche",
      correctWord: "freundlichen",
      options: ["freundlichen", "freundlich", "freundliches", "freundlicher"],
      explanation: "بعد mit يأتي Dativ؛ والصيغة المعيارية هي Mit freundlichen Grüßen، بلا علامة ترقيم بعدها.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir hatten gestern eine wichtige Besprechung.",
      explanation: "استمع إلى الفاعل wir ونهاية الفعل hatten، ثم اكتب بقية الجملة.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "اختر الجملة الصحيحة من حيث توافق الفاعل مع الفعل في Präteritum:",
      questionDe: "Welche Aussage ist grammatisch richtig?",
      options: [
        "Die Kollegen waren gestern im Büro.",
        "Die Kollegen war gestern im Büro.",
        "Frau Weber hatten einen Termin.",
        "Ich waren gestern krank.",
      ],
      correctIndex: 0,
      explanation: "مع الفاعل الجمع Die Kollegen نستخدم waren؛ الخيارات الأخرى لا توافق أفعالها فواعلها.",
      errorType: "conjugation",
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر الخاتمة القياسية لبريد رسمي محايد:",
      questionDe: "Sie beenden eine formelle E-Mail an eine Kundin. Welche Grußformel passt?",
      options: ["Mit freundlichen Grüßen", "Tschüss", "Bis dann, dein Sami", "Mach's gut"],
      correctIndex: 0,
      explanation: "Mit freundlichen Grüßen خاتمة شائعة في المراسلات المهنية الرسمية؛ الخيارات الأخرى غير رسمية أو لا تناسب هذا القالب.",
      errorType: "vocabulary",
    },
    {
      id: "e13",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى Präteritum مع إبقاء معناها:",
      prompt: "Wir sind gestern im Büro. → Setzen Sie den Satz ins Präteritum.",
      acceptedAnswers: ["Wir waren gestern im Büro.", "Wir waren gestern im Büro"],
      sampleAnswer: "Wir waren gestern im Büro.",
      explanation: "مع wir، صيغة sein في Präteritum هي waren.",
      errorType: "conjugation",
    },
    {
      id: "e14",
      type: "fill-blank",
      instructionAr: "أكمل عن السيدة فيبر؛ الاسم الواضح يمنع التباس Sie:",
      template: "Frau Weber ___ gestern krank. Frau Weber ___ Fieber.",
      blanks: [
        { correct: "war", options: ["war", "waren", "hatte"] },
        { correct: "hatte", options: ["hatte", "hatten", "war"] },
      ],
      explanation: "Frau Weber مفرد غائب: war krank وhatte Fieber.",
      errorType: "conjugation",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Wir war gestern im Büro.",
        right: "Wir waren gestern im Büro.",
        whyAr: "wir فاعل جمع، لذلك نستخدم waren لا war.",
        classification: "error",
      },
      {
        wrong: "Ich hatte ein Termin.",
        right: "Ich hatte einen Termin.",
        whyAr: "Termin مذكر ومفعول به؛ أداة النكرة في Akkusativ هي einen.",
        classification: "error",
      },
      {
        wrong: "Mit freundliche Grüßen",
        right: "Mit freundlichen Grüßen",
        whyAr: "mit يطلب Dativ؛ لذلك تأتي الصفة freundlichen قبل Grüßen.",
        classification: "error",
      },
      {
        wrong: "Mit freundlichen Grüßen,",
        right: "Mit freundlichen Grüßen",
        whyAr: "الخاتمة المستقلة في هذا النمط الألماني لا تتبعها فاصلة أو نقطة؛ الاسم يأتي في سطر مستقل.",
        classification: "error",
      },
    ],
    eselsbruecken: [
      "راجع الضمير قبل النهاية: ich war / du warst / wir waren؛ ich hatte / du hattest / wir hatten.",
      "في الهاتف، حدّد دورك: تعريف الجهة أو الاسم عند الرد، والتعريف بالنفس عند الاتصال؛ الصيغة الدقيقة تتبع السياق.",
      "في البريد الرسمي النموذجي: فاصلة بعد Anrede، ولا علامة ترقيم بعد Mit freundlichen Grüßen المستقلة.",
    ],
    culturalNote: {
      title: "اختلاف السياق في الهاتف والمراسلات",
      content:
        "عبارات الدرس نماذج لغوية لمواقف عمل مختلفة، وليست وصفاً ملزماً لطريقة جميع المؤسسات أو المتحدثين. قد يعرّف الموظف الجهة واسمه عند الرد، وقد يبدأ المتصل بتعريف نفسه؛ اتبع ما يلائم الدور والعلاقة. أما الموعد فيُنسق مع الطرف الآخر: ثبّت الوقت المتفق عليه وأبلغ الشخص إذا تعذر الحضور، ولا توجد هنا قاعدة عامة عن عدد دقائق التبكير.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Präteritum المناسبة:",
      questionDe: "Anna ___ gestern krank.",
      options: ["war", "warst", "waren", "wart"],
      correctIndex: 0,
      explanation: "Anna مفرد غائب، لذا نستخدم war.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Präteritum المناسبة:",
      questionDe: "Gestern ___ ihr viel Arbeit.",
      options: ["hattet", "hatte", "hatten", "hattest"],
      correctIndex: 0,
      explanation: "مع ihr نستخدم hattet؛ hatten مع wir وsie/Sie.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["hatte", "einen", "Anna", "Termin", "."],
      correctSentence: "Anna hatte einen Termin.",
      explanation: "الترتيب الخبري: Anna + الفعل المصرف hatte + المفعول einen Termin.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح أداة التعريف؛ انتبه إلى جنس Termin وحالته:",
      wrongSentence: "Ich hatte ein Termin.",
      wrongWord: "ein",
      correctWord: "einen",
      options: ["einen", "einem", "einer", "ein"],
      explanation: "Termin مذكر ومفعول به في الجملة؛ لذلك نقول einen Termin.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل المواقف الهاتفية: (1) الموظفة تطلب الانتظار، (2) تحوّل المكالمة، (3) تسأل المتصل عمن تتحدث.",
      template: "___ bitte! · Ich ___ Sie. · Mit wem ___ ich, bitte?",
      blanks: [
        { correct: "Einen Moment", options: ["Einen Moment", "Guten Tag", "Auf Wiedersehen"] },
        { correct: "verbinde", options: ["verbinde", "verbinden", "verbindest"] },
        { correct: "spreche", options: ["spreche", "verbinde", "hatte"] },
      ],
      explanation: "Einen Moment bitte! · Ich verbinde Sie. · Mit wem spreche ich, bitte?",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Büro", ar: "المكتب", example: "Ich arbeite im Büro.", exampleAr: "أعمل في المكتب.", level: "A2" },
    { id: "fc2", de: "anrufen", ar: "يتصل هاتفياً", example: "Ich rufe dich morgen an.", exampleAr: "سأتصل بك غداً.", level: "A2" },
    { id: "fc3", de: "der Kollege / die Kollegin", ar: "الزميل / الزميلة", example: "Meine Kollegin ist freundlich.", exampleAr: "زميلتي ودودة.", level: "A2" },
    { id: "fc4", de: "die Besprechung", ar: "الاجتماع", example: "Wir hatten eine Besprechung.", exampleAr: "كان لدينا اجتماع.", level: "A2" },
    { id: "fc5", de: "die E-Mail", ar: "البريد الإلكتروني", example: "Schick mir bitte eine E-Mail.", exampleAr: "أرسل لي بريداً إلكترونياً من فضلك.", level: "A2" },
    { id: "fc6", de: "das Präteritum", ar: "الماضي البسيط", example: "war, hatte, konnte", exampleAr: "كان، كان لديه، استطاع.", level: "A2" },
    { id: "fc7", de: "formelle Anrede", ar: "تحية افتتاحية رسمية", example: "Sehr geehrter Herr Weber,", exampleAr: "السيد فيبر المحترم،", level: "A2" },
    { id: "fc8", de: "Mit freundlichen Grüßen", ar: "مع خالص التحيات", example: "Mit freundlichen Grüßen\nAnna Weber", exampleAr: "مع خالص التحيات\nآنا فيبر", level: "A2" },
    { id: "fc9", de: "zurückrufen", ar: "يعاود الاتصال", example: "Ich rufe heute Nachmittag zurück.", exampleAr: "سأتصل مجدداً بعد ظهر اليوم.", level: "A2" },
    { id: "fc10", de: "die Nachricht", ar: "الرسالة", example: "Kann ich eine Nachricht hinterlassen?", exampleAr: "هل يمكنني ترك رسالة؟", level: "A2" },
    { id: "fc11", de: "die Notiz", ar: "الملاحظة المكتوبة", example: "Schick mir bitte die Notizen.", exampleAr: "أرسل إليّ الملاحظات من فضلك.", level: "A2" },
    { id: "fc12", de: "der Bericht", ar: "التقرير", example: "Ich möchte den Bericht heute fertig schreiben.", exampleAr: "أودّ إنهاء التقرير اليوم.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل الاختياريان ═══ */
  mediation: [
    {
      id: "med-a2-05-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات بريد عمل بالعربية إلى زميل",
      sourceDe: "Liebe Kolleginnen und Kollegen, die Besprechung findet morgen um 10 Uhr im Raum 3 statt. Bitte bringen Sie Ihre Berichte mit.",
      taskAr: "انقل المعلومات إلى العربية: موعد الاجتماع ومكانه وما ينبغي إحضاره.",
      modelAnswerAr: "«أعزائي الزملاء، الاجتماع غداً الساعة العاشرة في الغرفة 3. يرجى إحضار تقاريركم.»",
      keyPointsAr: ["نقل أن الاجتماع غداً الساعة 10", "ذكر الغرفة 3", "نقل طلب إحضار التقارير"],
    },
  ],
  interaction: [
    {
      id: "int-a2-05-1",
      scenarioAr: "مكالمة عمل للاعتذار عن موعد الساعة الثانية واقتراح موعد بديل.",
      scenarioDe: "Beruflicher Anruf: einen Termin verschieben und eine Alternative vorschlagen.",
      strategyAr:
        "اعتذر بوضوح واقترح وقتاً محدداً، وانتبه إلى Sie/Ihnen. هذا تفاعل نصي اختياري وليس تقويماً للكلام أو النطق.",
      rounds: [
        {
          speakerDe: "Guten Morgen, Herr Ali. Sie haben heute um 14 Uhr einen Termin.",
          speakerAr: "صباح الخير، سيد علي. لديك موعد اليوم الساعة الثانية.",
          options: [
            {
              de: "Es tut mir leid. Ich kann heute um 14 Uhr nicht kommen. Können wir den Termin verschieben?",
              ar: "آسف. لا أستطيع الحضور اليوم الساعة الثانية. هل يمكننا تأجيل الموعد؟",
              best: true,
              replyDe: "Natürlich. Wann passt es Ihnen besser?",
              replyAr: "بالطبع. ما الوقت الأنسب لك؟",
            },
            {
              de: "Ich komme heute nicht und das ist Ihr Problem.",
              ar: "لن آتي اليوم وهذه مشكلتك.",
              best: false,
              replyDe: "Ein höflicher Vorschlag wäre hier passender.",
              replyAr: "يكون اقتراح بديل مهذب أنسب هنا.",
            },
          ],
        },
        {
          speakerDe: "Wann passt es Ihnen besser?",
          speakerAr: "ما الوقت الأنسب لك؟",
          options: [
            {
              de: "Wäre übermorgen um 10 Uhr möglich?",
              ar: "هل يمكن بعد غد الساعة العاشرة؟",
              best: true,
              replyDe: "Ja, das passt mir. Ich notiere den Termin.",
              replyAr: "نعم، يناسبني ذلك. سأدوّن الموعد.",
            },
            {
              de: "Ich weiß nicht, vielleicht nie.",
              ar: "لا أعرف، ربما أبداً.",
              best: false,
              replyDe: "Wir brauchen einen konkreten Vorschlag.",
              replyAr: "نحتاج إلى اقتراح محدد.",
            },
          ],
        },
      ],
    },
  ],
};