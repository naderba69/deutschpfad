/**
 * a2-06 — النظرية والشرح (الجزء «theorie»)
 * فُصل من a2-06.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "dass تقدّم مضمون الرأي أو المعلومة",
      titleDe: "Der dass-Satz als Inhaltssatz",
      explanationAr: `تستعمل dass لربط جملة تذكر مضمون قول أو معرفة أو رأي أو أمل: Ich glaube, dass der Artikel interessant ist. المعنى: أعتقد أن المقال مثير للاهتمام. وترد مع أفعال مثل sagen وwissen وfinden وdenken وglauben وhoffen؛ لكن دلالة الجملة تتأثر بالفعل الرئيس: Ich hoffe, dass du kommst تعبّر عن أمل، ولا تؤكد أن المجيء وقع فعلاً.

في النمط الكتابي المستهدف، تأتي فاصلة بين الجملة الرئيسة والجملة التابعة: Ich finde, dass die Zeitung interessant ist. وقد تأتي جملة dass في أول المركب أيضاً: Dass die Zeitung heute erscheint, weiß Leyla. وتبقى الفاصلة لازمة عند فصل الجملة التابعة عن الجملة الرئيسة. هذه أمثلة على محتوى الجملة، وليست قاعدة تقول إن كل جملة بعد رأي تحتاج dass في جميع أنماط الألمانية؛ ففي الحديث اليومي قد تأتي أحياناً جملة مكملة بترتيب V2 من دون dass، مثل Ich glaube, der Artikel ist interessant. هذا بناء محكي منفصل عن صيغة dass التي نتدرّب عليها هنا.

انتبه إلى الكتابة: dass أداة ربط تُكتب بحرفي ss، أما das بحرف واحد فقد تكون أداة تعريف أو ضمير إشارة أو ضمير وصل بحسب الجملة. في أمثلة كثيرة يساعد سؤال «هل يمكن أن أستبدلها بـdieses أو welches؟» على تمييز das، لكنه فحص مساعد لا وصفة ميكانيكية لكل تركيب؛ اقرأ وظيفة الكلمة في الجملة.`,
      whyAr: `يساعد تحديد مضمون الفعل الرئيس على فهم مَن يعتقد ماذا، أو مَن قال أي معلومة. في Ich finde das schön نقيّم شيئاً مذكوراً بضمير، أما Ich finde, dass der Artikel interessant ist فتأتي بعد dass قضية كاملة لها فاعل وفعل. لذلك لا تخلط بين اختيار dass وبين معنى الجملة كلها: glauben يعرض اعتقاداً، hoffen أملاً، وwissen معرفةً بحسب السياق.

الفاصلة بدورها ترسم الحد الكتابي بين الجملة الرئيسة والتابعة، وss يميّز أداة الربط من صور das ذات الوظائف الأخرى. تعلّم النمط مع مثال كامل، ثم حدّد وظيفة الجملة التابعة قبل أن تختار الإملاء؛ فترجمة «أنّ» وحدها لا تكفي لاختيار dass في كل سياق.`,
      table: {
        title: "أفعال شائعة وما تقدمه جملة dass",
        columns: ["البداية", "المعنى التقريبي", "مثال"],
        rows: [
          {
            label: "Ich finde,",
            cells: ["أرى / أجد", "Ich finde, dass der Artikel interessant ist."],
          },
          {
            label: "Ich denke,",
            cells: ["أظن / أفكر", "Ich denke, dass die Zeitung heute erscheint."],
          },
          {
            label: "Ich glaube,",
            cells: ["أعتقد", "Ich glaube, dass die Nachricht stimmt."],
          },
          {
            label: "Ich hoffe,",
            cells: ["آمل", "Ich hoffe, dass du den Bericht liest."],
          },
          {
            label: "Sie sagt,",
            cells: ["تقول", "Sie sagt, dass die Redaktion den Artikel prüft."],
          },
          {
            label: "Ich weiß,",
            cells: ["أعلم", "Ich weiß, dass die Zeitung freitags erscheint."],
          },
        ],
      },
      examples: [
        {
          de: "Ich finde, dass der Artikel interessant ist.",
          ar: "أرى أن المقال مثير للاهتمام.",
        },
        {
          de: "Mona sagt, dass die Zeitung jeden Freitag erscheint.",
          ar: "تقول مونا إن الصحيفة تصدر كل يوم جمعة.",
        },
        {
          de: "Ich hoffe, dass du die Nachricht liest.",
          ar: "آمل أن تقرأ الخبر.",
        },
        {
          de: "Es stimmt, dass die Redaktion den Bericht prüft.",
          ar: "صحيح أن هيئة التحرير تراجع التقرير.",
        },
        {
          de: "Dass die Stadt einen Fahrradweg baut, finden viele Anwohner gut.",
          ar: "يرى كثير من سكان المنطقة أن إنشاء المدينة لمسار للدراجات أمر جيد.",
        },
        {
          de: "Ich glaube nicht, dass soziale Medien nur Vorteile haben.",
          ar: "لا أعتقد أن لوسائل التواصل الاجتماعي مزايا فقط.",
        },
      ],
      comparisonWithArabic: `في مثال عربي مثل «أعتقد أن المقال مثير للاهتمام»، تنقل «أنّ» مضمون الاعتقاد، كما تنقل dass مضموناً في Ich glaube, dass der Artikel interessant ist. لكن لا يُستنتج من تشابه الوظيفة أن ترتيب الكلمات متطابق: الألمانية في المثال تجعل الفعل المصرف ist في نهاية الجملة التابعة، بينما صياغة العربية هنا لا تحتاج فعلاً رابطاً مقابلاً لـist. وتختلف صيغ الجملة العربية باختلاف الفصحى واللهجة والسياق، لذلك فهذه مقارنة بين مثالين لا قاعدة عامة عن ترتيب اللغتين.

كذلك لا تحمل dass وحدها معنى «الحقيقة المؤكدة»: Ich hoffe, dass du kommst تعرض أملاً، وIch glaube, dass du kommst تعرض اعتقاداً. ينقل الفعل الرئيس موقف المتكلم، وتنقل الجملة التابعة مضمون ذلك الموقف. احفظ التراكيب كاملة؛ لا تحاول استبدال كل كلمة ألمانية بكلمة عربية واحدة أو اعتبار كل خبر بعد dass حقيقة مثبتة.`,
      eselsbruecke:
        "اسأل: ما مضمون ما أعتقده أو أقوله؟ ضع الفاصلة ثم dass، واكتب أداة الربط بـss: Ich glaube, dass ...",
      commonMistakes: [
        {
          wrong: "Ich glaube, das der Artikel interessant ist.",
          right: "Ich glaube, dass der Artikel interessant ist.",
          classification: "error",
          whyAr:
            "هنا تربط الكلمة جملة تابعة بمضمون الاعتقاد، ولذلك تكتب dass بحرفي ss. أما das بحرف واحد فتكون أداة تعريف أو ضميراً في سياق مناسب، ولا تؤدي وظيفة هذا الرابط.",
        },
        {
          wrong: "Ich weiß dass die Zeitung heute erscheint.",
          right: "Ich weiß, dass die Zeitung heute erscheint.",
          classification: "error",
          whyAr:
            "يفصل معيار الترقيم الجملة التابعة عن الجملة الرئيسة بفاصلة. لذلك توضع الفاصلة بعد weiß وقبل dass في هذا المثال؛ ليست الفاصلة اختياراً زخرفياً.",
        },
        {
          wrong: "Ich glaube, der Artikel ist interessant.",
          right:
            "في الصيغة الكتابية المستهدفة هنا: Ich glaube, dass der Artikel interessant ist.",
          classification: "contextual-alternative",
          whyAr:
            "الجملة من دون dass مع ترتيب V2 ممكنة في الحديث اليومي بوصفها بناءً مكملاً بديلاً، وليست خطأً عاماً. المهمة هنا تتدرّب تحديداً على صيغة dass الكتابية؛ لا تصف البديل المحكي بأنه غير نحوي.",
        },
      ],
      relatedRuleComparison: {
        title: "dass أم ob؟",
        content: `يقدّم dass مضموناً يذكره المتكلم: Ich weiß, dass die Zeitung freitags erscheint (أعلم أن الصحيفة تصدر أيام الجمعة). ويقدّم ob سؤال نعم/لا غير محسوم: Ich weiß nicht, ob die Zeitung heute erscheint (لا أعلم هل تصدر الصحيفة اليوم). في هذين المثالين يأتي الفعل المصرف في آخر الجملة التابعة في الحالتين، لكن معنى الرابط مختلف. ولا تحوّل هذا الفرق إلى ادعاء أن كل جملة dass تثبت حقيقة؛ انظر إلى الفعل الرئيس مثل hoffen أو glauben.`,
      },
    },
    {
      id: "t2",
      titleAr: "موضع الفعل في جملة dass",
      titleDe: "Verbendstellung und Verbalkomplex im dass-Satz",
      explanationAr: `في الجملة الخبرية الرئيسة المعتادة يظهر الفعل المصرف غالباً في الموقع الثاني: Die Zeitung erscheint heute. بعد dass، تأتي الأداة أولاً، ثم الفاعل وبقية عناصر الجملة، ويوضع الفعل المصرف في القوس الأيمن للجملة التابعة: Ich glaube, dass die Zeitung heute erscheint. هذا وصف للنمط الكتابي المحايد الذي تتدرب عليه، لا تلخيص لكل أنواع الجمل الألمانية؛ فالسؤال أو الأمر أو الجملة المحكية قد يتبع بناءً آخر.

إذا احتوى المسند على أكثر من فعل، لا تجمع الأفعال في موضع واحد اعتباطاً: في Ich denke, dass sie den Artikel lesen kann يأتي المصدر lesen قبل الفعل المصرف kann في القوس الأيمن. وفي صيغة Perfekt تكون البنية مثلاً dass sie den Artikel gelesen hat، وفي الفعل المنفصل تكتب الفعل مع بادئته كلمة واحدة في الجملة التابعة: dass die Sendung um acht anfängt. لذلك نقول إن الفعل المصرف أو مجموعة المسند تشغل النهاية، ولا نقول إن «كل فعل» يصبح آخر كلمة منفردة.

قد يوضع عنصر بعد القوس الأيمن في ما يسمى Nachfeld في بعض التراكيب؛ لذلك «الفعل في النهاية» اختصار تعليمي لموضع القوس الأيمن في أمثلة الجملة التابعة هنا، لا منع مطلق لكل امتداد بعدها. وكذلك تظل الفاصلة قبل الجملة التابعة ظاهرة في الجملة الخبرية والكتابة المعيارية.`,
      whyAr: `يساعد تمييز الفعل المصرف من بقية عناصر المسند على بناء الجملة كاملة: يبحث المتعلم أولاً عن الفاعل، ثم يضع المعلومات مثل الوقت والمفعول في الوسط، ويؤخر القوس الأيمن إلى نهاية الجملة التابعة. ومع الأفعال المركبة يبقى اختلاف الشكل واضحاً: lesen kannst، gelesen hat، anfängt. وهذا يمنع إصلاح كلمة واحدة مع ترك بقية المسند في ترتيب الجملة الرئيسة.

لا يعني هذا أن كل ما عدا الفعل له ترتيب ثابت واحد؛ فقد يتغير ترتيب الظروف أو المفعولات مع السياق والتركيز، وقد يوجد Nachfeld. المطلوب هنا أضيق: في الأمثلة التابعة المعيارية، لا تضع الفعل المصرف في موضع V2 بعد dass، وتأكد من موضعه بعد عناصر الجملة المناسبة.`,
      table: {
        title: "من الخبر الرئيس إلى جملة dass",
        columns: ["البنية", "المثال الألماني", "القوس الأيمن"],
        rows: [
          {
            label: "فعل بسيط",
            cells: ["Ich glaube, dass der Artikel heute erscheint.", "erscheint"],
          },
          {
            label: "الفعل sein",
            cells: ["Ich finde, dass die Zeitung interessant ist.", "ist"],
          },
          {
            label: "فعل ناقص + مصدر",
            cells: ["Sie meint, dass er den Bericht lesen kann.", "lesen kann"],
          },
          {
            label: "Perfekt",
            cells: ["Er sagt, dass sie die Zeitung gelesen hat.", "gelesen hat"],
          },
          {
            label: "فعل منفصل",
            cells: ["Ich weiß, dass die Sendung um acht anfängt.", "anfängt"],
          },
          {
            label: "نفي داخل التابعة",
            cells: ["Ich glaube, dass sie die Nachricht nicht versteht.", "versteht"],
          },
          {
            label: "التابعة في أول المركب",
            cells: ["Dass die Zeitung heute erscheint, weiß Leyla.", "erscheint"],
          },
        ],
      },
      examples: [
        {
          de: "Ich denke, dass du den Film sehen kannst.",
          ar: "أظن أنك تستطيع مشاهدة الفيلم.",
        },
        {
          de: "Sie sagt, dass sie den Artikel schon gelesen hat.",
          ar: "تقول إنها قرأت المقال بالفعل.",
        },
        {
          de: "Ich weiß, dass die Sendung um acht anfängt.",
          ar: "أعلم أن البرنامج يبدأ في الثامنة.",
        },
        {
          de: "Mona glaubt, dass die Redaktion den Bericht morgen veröffentlicht.",
          ar: "تعتقد مونا أن هيئة التحرير ستنشر التقرير غداً.",
        },
        {
          de: "Karim meint, dass die Leserinnen viele Fragen haben.",
          ar: "يرى كريم أن لدى القارئات أسئلة كثيرة.",
        },
        {
          de: "Ich finde, dass sie die Nachricht nicht versteht.",
          ar: "أرى أنها لا تفهم الخبر.",
        },
      ],
      comparisonWithArabic: `قارن جملة خبرية ألمانية عادية: Die Zeitung erscheint heute (تظهر/تصدر الصحيفة اليوم)، بجملة فيها dass: Ich glaube, dass die Zeitung heute erscheint (أعتقد أن الصحيفة تصدر اليوم). في الجملة الخبرية الرئيسة يأتي الفعل المصرف عادةً في الموقع الثاني، وفي الجملة التابعة المستهدفة يظهر في القوس الأيمن؛ أما المقابل العربي فينقل المعنى ولا يحاكي هذه المواقع كلمةً بكلمة.

ومع الفعل الناقص نقول dass du den Artikel lesen kannst؛ يظهر المصدر lesen قبل الفعل المصرف kannst. وعند نقل المعنى إلى العربية يمكن صياغة «أنك تستطيع قراءة المقال» بترتيب طبيعي مختلف. لذلك افحص موقع المسند في الألمانية نفسها، ولا تستنتج ترتيبها من موضع الفعل في ترجمة عربية، ولا تعمم هذا المثال على كل أنماط الجملة أو كل اللهجات الألمانية.`,
      eselsbruecke:
        "حدّد الفعل المصرف أولاً، ثم ابنِ الجملة التابعة: dass + الفاعل + بقية الجملة + قوس المسند. مثال: dass du den Artikel lesen kannst.",
      commonMistakes: [
        {
          wrong: "Ich denke, dass der Film ist interessant.",
          right: "Ich denke, dass der Film interessant ist.",
          classification: "error",
          whyAr:
            "بعد dass في هذا النمط التابع لا يبقى الفعل المصرف في موضع V2. اجمع عناصر الخبر أولاً، ثم ضع ist في القوس الأيمن: dass der Film interessant ist.",
        },
        {
          wrong: "Ich glaube, dass du kannst den Artikel lesen.",
          right: "Ich glaube, dass du den Artikel lesen kannst.",
          classification: "error",
          whyAr:
            "المسند هنا مركب من مصدر وفعل ناقص مصرف. يأتي lesen قبل الفعل المصرف kannst، ويشغل الأخير القوس الأيمن في الجملة التابعة؛ فلا تنقل ترتيب الجملة الرئيسة حرفياً.",
        },
        {
          wrong: "Ich weiß, dass die Sendung fängt um acht an.",
          right: "Ich weiß, dass die Sendung um acht anfängt.",
          classification: "error",
          whyAr:
            "الفعل المنفصل anfangen يكتب كلمة واحدة في الجملة التابعة، ويأتي في القوس الأيمن بصيغته المصرفة anfängt. لا تفصل البادئة an كما تفعل في الجملة الرئيسة Die Sendung fängt um acht an.",
        },
      ],
      relatedRuleComparison: {
        title: "جملة dass التابعة أم جملة رئيسة بـV2؟",
        content: `في المثال المكتوب المستهدف: Ich glaube, dass der Artikel interessant ist، يقدّم dass الجملة التابعة ويأتي الفعل المصرف ist في القوس الأيمن. ويمكن أن تظهر في الحديث اليومي جملة مكملة من دون dass وبترتيب V2، مثل Ich glaube, der Artikel ist interessant. يصف IDS Grammis هذا بوصفه بناءً محكياً بديلاً، لا استثناءً يحوّل dass إلى أداة تسمح بـV2. وفرق آخر: denn رابط تنسيقي يبقي ترتيب الجملة الرئيسة، مثل Ich lese den Artikel, denn er ist interessant؛ أما dass فيقدّم جملة تابعة.`,
      },
    },
  ];
