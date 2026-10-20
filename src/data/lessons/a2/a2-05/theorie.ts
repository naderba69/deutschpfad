/**
 * a2-05 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-05.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
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
        { de: "Firma Weber, Anna Weber, guten Tag!", ar: "شركة فيبر، آنا فيبر، طاب يومك!" },
        { de: "Guten Tag, hier ist Sami Ben Ali.", ar: "طاب يومك، معك سامي بن علي." },
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
  ];
