import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-06: الإعلام والأخبار — مفردات مختارة وجمل dass للرأي والمعلومة.
 */
export const lessonA206: Lesson = {
  id: "a2-06",
  unitId: "a2-06",
  level: "A2",
  order: 1,
  titleDe: "Medien und Nachrichten",
  titleAr: "الإعلام والأخبار",
  summary:
    "مفردات مختارة عن وسائل الإعلام، وفهم محادثات وخبر محلي قصير، واستعمال أفعال رأي مع جمل dass وتمييزها من das. مهام الرأي والكتابة موجّهة؛ التفاعل والنطق غير مقوّمين شفهياً.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann vier Medienbezeichnungen den passenden Bedeutungen zuordnen.",
      ar: "أن أطابق أسماء أربع وسائل إعلام بمعانيها الأساسية.",
      evidence: {
        exerciseIds: ["e3"],
        taskIds: ["practice:a2-06:e3", "flow-practice:a2-06:e3"],
        labelAr:
          "أكمل المطابقة e3 كاملة؛ يظهر التمرين ضمن أول أربعة في lesson-flow وقد يظهر في عينة practice العشوائية.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann eine kurze Meinung mit einem dass-Satz schriftlich ausdrücken.",
      ar: "أن أكتب رأياً موجزاً باستخدام جملة dass في التحويل الكتابي الموجّه.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a2-06:w1"],
        labelAr:
          "أنجز التحويل w1 واكتب إحدى الصيغ المقبولة التي تعبّر عن الرأي وتحافظ على dass وترتيب الجملة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in kurzen dass-Sätzen die passende Verbform, Verbendstellung und Kommasetzung wählen.",
      ar: "أن أختار أداة dass أو صيغة الفعل وموضعه والفاصلة في جمل قصيرة ضمن الاختبار المصغّر.",
      evidence: {
        exerciseIds: ["m1", "m2", "m3", "m4", "m5"],
        taskIds: [
          "mini-test:a2-06:m1",
          "mini-test:a2-06:m2",
          "mini-test:a2-06:m3",
          "mini-test:a2-06:m4",
          "mini-test:a2-06:m5",
        ],
        labelAr:
          "أجب عن المهام الخمس m1–m5؛ تتناول الفاعل والتمييز بين dass وdas وترتيب الفعل والفاصلة.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann wichtige Einzelheiten aus kurzen Gesprächen über Medien heraushören.",
      ar: "أن أستخرج معلومات محددة من حوارين قصيرين عن الإعلام قبل كشف التفريغ.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr:
          "أجب عن أسئلة الحوارين الثلاثة قبل كشف التفريغ؛ فتح الحوار أو الإجابة بعد كشفه لا يثبت الاستماع.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann wichtige Informationen aus einem kurzen Zeitungsartikel entnehmen.",
      ar: "أن أستخرج تفاصيل محددة من خبر محلي قصير، وأجيب عن أسئلة الفهم الأربعة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-06:rq1",
          "reading:read-a2-06:rq2",
          "reading:read-a2-06:rq3",
          "reading:read-a2-06:rq4",
        ],
        labelAr:
          "اقرأ الخبر وأجب عن الأسئلة الأربعة؛ فتح النص وحده ليس دليلاً على الفهم.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في Ich finde, dass der Artikel interessant ist، أين يقع الفعل الذي يصف المقال؟ قارن الجملة بعد dass بجملة خبرية قصيرة ولاحظ موضع الفعل المصرف.",
    motivatingQuestionDe: "Was denkst du über die Nachrichten?",
    contextAr:
      "نستخدم أسماء وسائل الإعلام في محادثة قصيرة ونقرأ خبراً تعليمياً متخيلاً عن صحيفة محلية. نلاحظ كيف تقدّم dass مضمون رأي أو معلومة، من غير تعميم رأي شخصيات النص على الناس أو وسائل الإعلام عموماً.",
    contextDe: "Ich finde, dass der Artikel interessant ist.",
    connectionToPreviousAr:
      "في درس الملابس رأيت سؤال الرأي Wie findest du das? نوسّع المثال هنا من مفعول قصير مثل Ich finde das schön إلى رأي يتضمن فكرة كاملة: Ich finde, dass der Artikel interessant ist.",
    activateVocabulary: [
      { de: "das Fernsehen", ar: "التلفاز / وسيلة التلفزيون" },
      { de: "die Zeitung", ar: "الصحيفة" },
      { de: "das Internet", ar: "الإنترنت" },
      { de: "die Nachrichten", ar: "الأخبار" },
      { de: "die Meinung", ar: "الرأي" },
      { de: "die Redaktion", ar: "هيئة التحرير" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-08 — الملابس والألوان): اختر تصريف الفعل:",
      questionDe: "Ich ___ das Kleid sehr schön. (finden)",
      options: ["finde", "findest", "findet", "finden"],
      correctIndex: 0,
      explanation:
        "الفاعل ich، لذلك نستخدم finde. يراجع السؤال صيغة الرأي من درس الملابس.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-05 — الحياة اليومية): اختر المعنى:",
      questionDe: "Ich sehe gern fern.",
      options: [
        "أحب مشاهدة التلفاز.",
        "أحب قراءة الصحيفة.",
        "أحب الاستماع إلى الراديو.",
        "أحب كتابة رسالة إلكترونية.",
      ],
      correctIndex: 0,
      explanation:
        "الفعل المنفصل fernsehen يعني مشاهدة التلفاز؛ وفي هذه الجملة يأتي الجزء fern في النهاية.",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة من A1 (درس a1-06 — الهوايات): أكمل بكلمة مناسبة في سياق الاستماع إلى الأغاني:",
      template: "Ich höre gern ___, besonders neue Lieder.",
      blanks: [
        { correct: "Musik", options: ["Musik", "Zeitung", "Nachricht"] },
      ],
      explanation:
        "Musik hören تعني الاستماع إلى الموسيقى، وتوضح عبارة besonders neue Lieder أن السياق عن الأغاني. Zeitung لا تُسمع، وNachricht بالمفرد لا تلائم هذا التركيب.",
      errorType: "vocabulary",
    },
  ],

  theory: [
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
  ],

  reading: {
    id: "read-a2-06",
    titleDe: "Nachrichten aus dem Viertel",
    titleAr: "أخبار من الحيّ — نص تعليمي متخيّل",
    textType: "artikel",
    paragraphs: [
      "Die kleine Zeitung „Unser Viertel“ erscheint jeden Freitag. Sie berichtet über neue Geschäfte, Veranstaltungen und Menschen aus der Stadt. Die Redakteurin Leyla sagt, dass viele Bewohner gern kurze Nachrichten über ihre Nachbarn lesen.",
      "In dieser Woche gibt es einen Bericht über einen neuen Fahrradweg. Einige Anwohner finden, dass der Weg sicher ist. Andere glauben, dass noch mehr Lampen nötig sind. Die Stadt möchte die Meinungen sammeln und später eine Entscheidung treffen.",
      "Leyla schreibt auch über ein Sommerfest am Samstag. Es beginnt um vier Uhr im Park; alle Familien sind willkommen. Die Zeitung kann man im Café lesen oder kostenlos auf der Internetseite herunterladen.",
      "Viele Menschen aus dem Viertel besuchen Veranstaltungen. Sie schreiben der Redaktion darüber und schicken einige Fotos. Dazu schreiben sie kurze Sätze über ihre Eindrücke. Leyla prüft jede Nachricht. Danach erscheint die Nachricht in der Zeitung. So finden auch Menschen ohne soziale Medien wichtige Informationen aus dem Viertel. Für die Zukunft plant die Zeitung außerdem eine Seite mit Tipps für Familien und Jugendliche.",
    ],
    paragraphsAr: [
      "تصدر الصحيفة الصغيرة «حيّنا» كل يوم جمعة. وتنشر أخباراً عن المتاجر الجديدة والفعاليات والأشخاص في المدينة. تقول المحررة ليلى إن كثيراً من السكان يحبون قراءة أخبار قصيرة عن جيرانهم.",
      "يوجد هذا الأسبوع تقرير عن مسار جديد للدراجات. يرى بعض سكان المنطقة أن المسار آمن. ويعتقد آخرون أن هناك حاجة إلى مزيد من المصابيح. تريد المدينة جمع الآراء ثم اتخاذ قرار لاحقاً.",
      "وتكتب ليلى أيضاً عن مهرجان صيفي يوم السبت. يبدأ في الساعة الرابعة في الحديقة، وكل العائلات مرحب بها. ويمكن قراءة الصحيفة في المقهى أو تنزيلها مجاناً من الموقع الإلكتروني.",
      "يزور كثير من سكان الحي فعاليات. ويكتبون إلى هيئة التحرير عنها ويرسلون بعض الصور. ويضيفون جملاً قصيرة عن انطباعاتهم. تراجع ليلى كل خبر، ثم يظهر الخبر في الصحيفة. وهكذا يجد أشخاص لا يستخدمون وسائل التواصل معلومات مهمة عن الحي. وتخطط الصحيفة أيضاً لصفحة فيها نصائح للعائلات والشباب في المستقبل.",
    ],
    glossary: [
      {
        de: "erscheinen",
        ar: "يصدر بصفة دورية (عن صحيفة أو مجلة)",
        noteAr: "هنا تصدر الصحيفة كل يوم جمعة.",
      },
      {
        de: "die Redakteurin",
        ar: "المحررة",
        noteAr: "Leyla هي المسؤولة عن إعداد مواد الصحيفة في القصة.",
      },
      {
        de: "der Bewohner",
        ar: "ساكن / أحد السكان",
        noteAr: "ترد في النص بصيغة الجمع Bewohner.",
      },
      {
        de: "der Anwohner",
        ar: "ساكن في المنطقة المجاورة",
        noteAr: "يقصد به شخص يسكن بالقرب من المكان المذكور.",
      },
      {
        de: "der Fahrradweg",
        ar: "مسار للدراجات",
        noteAr: "في النص مسار جديد في الحي.",
      },
      {
        de: "nötig",
        ar: "ضروري / لازم",
        noteAr: "يعتقد بعض السكان أن مزيداً من المصابيح ضروري.",
      },
      {
        de: "die Veranstaltung",
        ar: "فعالية",
        noteAr: "وردت في النص بصيغة الجمع Veranstaltungen.",
      },
      {
        de: "die Redaktion",
        ar: "هيئة التحرير",
        noteAr: "الجهة التي تستقبل ما يرسله القراء للصحيفة.",
      },
      {
        de: "herunterladen",
        ar: "ينزّل (ملفاً من الإنترنت)",
        noteAr: "يمكن تنزيل الصحيفة من موقعها مجاناً في القصة.",
      },
      {
        de: "der Eindruck",
        ar: "انطباع",
        noteAr: "يرسل القراء جملاً قصيرة عن انطباعاتهم.",
      },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        paragraph: 1,
        instructionAr: "اقرأ الفقرة الأولى ثم اختر الإجابة:",
        questionDe: "Wann erscheint die Zeitung „Unser Viertel“?",
        questionAr: "متى تصدر صحيفة «حيّنا»؟",
        options: [
          "Jeden Montag.",
          "Jeden Freitag.",
          "Einmal im Monat.",
          "Nur im Sommer.",
        ],
        correctIndex: 1,
        explanation:
          "تذكر الجملة الأولى أن الصحيفة الصغيرة تصدر كل يوم جمعة، لا مرة واحدة في الشهر أو في فصل الصيف فقط.",
        errorType: "vocabulary",
      },
      {
        id: "rq2",
        type: "multiple-choice",
        paragraph: 2,
        instructionAr: "كيف يرى بعض السكان مسار الدراجات الجديد؟",
        questionDe: "Wie finden einige Anwohner den neuen Fahrradweg?",
        questionAr: "كيف يرى بعض السكان مسار الدراجات الجديد؟",
        options: [
          "Sie finden, dass der Weg sicher ist.",
          "Sie finden, dass er zu teuer ist.",
          "Sie wollen, dass der Weg geschlossen wird.",
          "Sie möchten dort eine Zeitung verkaufen.",
        ],
        correctIndex: 0,
        explanation:
          "يرى بعض سكان المنطقة أن المسار آمن؛ ويقول النص إن آخرين يعتقدون أن هناك حاجة إلى مصابيح أكثر.",
        errorType: "vocabulary",
      },
      {
        id: "rq3",
        type: "multiple-choice",
        paragraph: 3,
        instructionAr: "كيف يمكن الحصول على الصحيفة عبر الإنترنت؟",
        questionDe: "Wie kann man die Zeitung online bekommen?",
        questionAr: "كيف يمكن الحصول على الصحيفة عبر الإنترنت؟",
        options: [
          "Man muss sie teuer kaufen.",
          "Man kann sie kostenlos herunterladen.",
          "Man muss Leyla anrufen.",
          "Sie ist nur im Café erhältlich.",
        ],
        correctIndex: 1,
        explanation:
          "يمكن قراءة الصحيفة في المقهى أو تنزيلها مجاناً من الموقع الإلكتروني.",
        errorType: "vocabulary",
      },
      {
        id: "rq4",
        type: "multiple-choice",
        paragraph: 4,
        instructionAr: "اقرأ الفقرة الأخيرة: ماذا تفعل ليلى أولاً بكل خبر؟",
        questionDe: "Was macht Leyla zuerst mit jeder Nachricht?",
        questionAr: "ماذا تفعل ليلى أولاً بكل خبر؟",
        options: [
          "Sie prüft jede Nachricht.",
          "Sie löscht jede Nachricht sofort.",
          "Sie schickt jede Nachricht an die Stadt.",
          "Sie liest jede Nachricht im Radio vor.",
        ],
        correctIndex: 0,
        explanation:
          "يذكر النص أن ليلى تراجع كل خبر أولاً، ثم يظهر الخبر في الصحيفة؛ ولا يقول إنها تحذفه أو ترسله إلى المدينة أو تقرأه في الراديو.",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      { de: "Die Zeitung berichtet über …", ar: "تنشر الصحيفة أخباراً عن …" },
      { de: "Einige Anwohner finden, dass …", ar: "يرى بعض سكان المنطقة أن …" },
      { de: "Die Stadt möchte die Meinungen sammeln.", ar: "تريد المدينة جمع الآراء." },
      {
        de: "Man kann die Zeitung kostenlos herunterladen.",
        ar: "يمكن تنزيل الصحيفة مجاناً.",
      },
    ],
    discussionAr:
      "اختر فعالية أو خبراً محلياً متخيلاً. اكتب ثلاث جمل تحدد الحدث ومكانه وموعده، ثم أضف جملة رأي تبدأ بـIch finde, dass أو Ich glaube, dass. هذا نشاط مفتوح للمراجعة الذاتية، ولا يُصحح آلياً ولا يثبت إتقان كتابة حرة.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "آراء عن وسائل الإعلام",
        lines: [
          {
            speaker: "Mona",
            de: "Ich sehe jeden Tag fern. Ich finde, dass die Serien gut sind.",
            ar: "أشاهد التلفاز كل يوم. أرى أن المسلسلات جيدة.",
          },
          {
            speaker: "Karim",
            de: "Ich denke, dass im Fernsehen zu viel Werbung läuft.",
            ar: "أظن أن في التلفاز إعلانات كثيرة جداً.",
          },
          {
            speaker: "Mona",
            de: "Ja, aber ich lese auch die Zeitung.",
            ar: "نعم، لكنني أقرأ الصحيفة أيضاً.",
          },
          {
            speaker: "Karim",
            de: "Ich lese lieber Nachrichten im Internet. Ich finde, dass das Internet praktisch ist.",
            ar: "أفضل قراءة الأخبار على الإنترنت. وأرى أن الإنترنت عملي.",
          },
          {
            speaker: "Mona",
            de: "Das kann ich verstehen. Im Internet finde ich oft schnell Informationen.",
            ar: "أتفهم ذلك. وغالباً ما أجد معلومات بسرعة على الإنترنت.",
          },
          {
            speaker: "Karim",
            de: "Und soziale Medien? Ich glaube, dass sie viel Zeit kosten.",
            ar: "وماذا عن وسائل التواصل؟ أعتقد أنها تستهلك وقتاً كثيراً.",
          },
          {
            speaker: "Mona",
            de: "Ja, aber dort findet man auch nützliche Informationen.",
            ar: "نعم، لكن المرء يجد فيها أيضاً معلومات مفيدة.",
          },
        ],
      },
      {
        id: "l2",
        title: "اختيارات للقراءة",
        lines: [
          {
            speaker: "Lehrer",
            de: "Was liest du gern, Anna?",
            ar: "ماذا تحبين أن تقرئي يا آنا؟",
          },
          {
            speaker: "Anna",
            de: "Ich lese gern die Zeitung. Ich finde, dass die Artikel interessant sind.",
            ar: "أحب قراءة الصحيفة. وأرى أن المقالات ممتعة.",
          },
          {
            speaker: "Lehrer",
            de: "Und du, Sami?",
            ar: "وأنت يا سامي؟",
          },
          {
            speaker: "Sami",
            de: "Ich lese Nachrichten im Internet. Ich finde, dass das praktisch ist.",
            ar: "أقرأ الأخبار على الإنترنت. وأجد ذلك عملياً.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر ما يقوله كريم عن التلفاز:",
        questionDe: "Was denkt Karim über das Fernsehen?",
        questionAr: "ما رأي كريم في التلفاز؟",
        options: [
          "Im Fernsehen läuft zu viel Werbung.",
          "Die Serien sind immer langweilig.",
          "Die Zeitung ist zu teuer.",
          "Das Internet ist zu langsam.",
        ],
        correctIndex: 0,
        explanation:
          "يقول كريم إنه يعتقد أن في التلفاز إعلانات كثيرة جداً؛ ولا يذكر أن المسلسلات مملة أو أن الإنترنت بطيء.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "أين يقرأ كريم الأخبار؟",
        questionDe: "Wo liest Karim lieber Nachrichten?",
        questionAr: "أين يفضّل كريم قراءة الأخبار؟",
        options: ["im Internet", "in der Zeitung", "im Fernsehen", "im Radio"],
        correctIndex: 0,
        explanation:
          "يقول كريم: Ich lese lieber Nachrichten im Internet، أي إنه يقرأ الأخبار على الإنترنت؛ ولا يقول إنه يقرأها في الصحيفة أو يشاهدها في التلفاز.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر رأي آنا في المقالات:",
        questionDe: "Welches Adjektiv benutzt Anna für die Artikel?",
        questionAr: "أي صفة تستعملها آنا لوصف المقالات؟",
        options: ["interessant", "langweilig", "kurz", "teuer"],
        correctIndex: 0,
        explanation:
          "الصفة التي تستعملها آنا فعلاً هي interessant؛ ولا يذكر الحوار الصفات الأخرى.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات ومقاطع في كلمات الإعلام",
    items: [
      {
        de: "die Zeitung",
        ar: "الصحيفة",
        note:
          "IPA: [ˈt͡saɪ̯tʊŋ]. يبدأ اللفظ بصوت [t͡s]، وei تمثل الحركة المركبة [aɪ̯]؛ وفي نهاية -ung يظهر [ʊŋ] مع أنفي طبقي [ŋ].",
      },
      {
        de: "das Fernsehen",
        ar: "التلفاز / مشاهدة التلفاز",
        note:
          "IPA للاسم: [ˈfɛʁnˌzeːən]. يقع النبر الأساسي على fern، ويبدأ المقطع sehen بصوت [z]؛ والفعل fernsehen ينفصل في Ich sehe gern fern.",
      },
      {
        de: "die Nachricht",
        ar: "الخبر / الرسالة",
        note:
          "IPA: [ˈnaːxˌʁɪçt]. في الكتابة ch صوت [x] بعد a ثم [ç] بعد i؛ وهما صوتان مختلفان، فلا تساوهما بالخاء أو الشين العربية.",
      },
      {
        de: "die Werbung",
        ar: "الدعاية / الإعلان",
        note:
          "IPA: [ˈvɛʁbʊŋ]. الحرف w هنا [v]، وb صوت مجهور [b] لا [p]؛ والنهاية -ung هي [ʊŋ] لا مقطعاً مستقلاً ng.",
      },
      {
        de: "das Radio",
        ar: "الراديو / الإذاعة",
        note:
          "IPA شائع: [ˈʁaːdi̯o]. الاسم محايد في المعيار العام، ويذكر Duden استعمال المذكر إقليمياً في جنوب ألمانيا والنمسا وسويسرا؛ ويتنوع تحقيق r بين المتحدثين.",
      },
      {
        de: "die Meinung",
        ar: "الرأي",
        note:
          "IPA: [ˈmaɪ̯nʊŋ]. يرد المقطع ei بصوت مركب [aɪ̯]، وتنتهي الكلمة بـ[ʊŋ]؛ هذه رموز صوتية وليست تهجئة عربية حرفية.",
      },
    ],
    tip:
      "استخدم IPA أو عينة Duden الصوتية بدلاً من كتابة تقريب عربي يوهم بالتطابق. يتنوع صوت r الألماني إقليمياً وبين المتحدثين. يبيّن المثالان في Nachricht الفرق بين [x] و[ç]؛ أما الكتابة ch وحدها فلا تكفي لاختيار صوت واحد من غير النظر إلى السياق الصوتي.",
    shadowing: [
      {
        de: "Ich sehe gern fern.",
        ar: "أحب مشاهدة التلفاز.",
        tip: "fernsehen فعل منفصل: في المضارع المصرف يأتي الجزء fern في نهاية الجملة الخبرية.",
      },
      {
        de: "Ich lese die Zeitung.",
        ar: "أقرأ الصحيفة.",
        tip: "انتبه إلى بداية [t͡s] والمقطع المشدد في Zeitung.",
      },
      {
        de: "Ich glaube, dass das stimmt.",
        ar: "أعتقد أن ذلك صحيح.",
        tip: "حافظ على الفاصلة في الكتابة، وميّز dass أداة الربط من das الضمير.",
      },
      {
        de: "Die Nachrichten sind wichtig.",
        ar: "الأخبار مهمة.",
        tip: "Nachrichten جمع، ولذلك يأتي الفعل sind بصيغة الجمع.",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب رأياً موجزاً بجملة dass:",
      prompt: "اكتب بالألمانية: «أرى / أعتقد أن الأخبار مهمة». ",
      acceptedAnswers: [
        "Ich glaube, dass die Nachrichten wichtig sind",
        "Ich denke, dass die Nachrichten wichtig sind",
        "Ich finde, dass die Nachrichten wichtig sind",
      ],
      sampleAnswer: "Ich glaube, dass die Nachrichten wichtig sind.",
      explanation:
        "تقبل المهمة صيغ رأي طبيعية متعددة؛ تُكتب فاصلة قبل dass، ويطابق الفعل الجمع Nachrichten بصيغة sind في نهاية الجملة التابعة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل تصريف الفعل في كل جملة dass:",
      template:
        "Ich finde, dass der Film gut ___ (sein). Ich hoffe, dass du morgen ___ (kommen).",
      blanks: [
        { correct: "ist", options: ["ist", "sein", "sind"] },
        { correct: "kommst", options: ["kommst", "kommt", "kommen"] },
      ],
      explanation:
        "في المثال الأول الفاعل der Film مفرد، فالصيغة ist؛ وفي الثاني الفاعل du فيخاطبك الفعل بصيغة kommst. يأتي كل فعل مصرف في نهاية جملة dass.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة كما تسمعها:",
      audioText: "Die Nachrichten sind interessant.",
      explanation:
        "Nachrichten جمع، لذلك يأتي معها sind؛ راجع تهجئة المفردات عند إعادة المحاولة.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر تصريف kommen مع الفاعل er:",
      questionDe: "Ich glaube, dass er heute ___.",
      options: ["kommt", "kommen", "kommst", "komme"],
      correctIndex: 0,
      explanation:
        "الفاعل er مفرد غائب، لذلك تأتي صيغة الفعل kommt في نهاية الجملة التابعة.",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr:
        "اختر أداة الربط التي تقدّم مضمون ما أظن، لا سبباً أو شرطاً:",
      questionDe: "Ich denke, ___ der Artikel interessant ist.",
      questionAr: "ما أداة الربط التي تناسب هنا؟",
      options: ["dass", "das", "weil", "wenn"],
      correctIndex: 0,
      explanation:
        "يقدّم dass هنا مضمون الرأي. أما das فليس أداة ربط، وweil يقدّم سبباً، وwenn يقدّم شرطاً أو زمناً بحسب السياق.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صِل اسم الوسيلة الإعلامية بمعناها:",
      pairs: [
        { left: "das Fernsehen", right: "التلفاز / وسيلة التلفزيون" },
        { left: "die Zeitung", right: "الصحيفة" },
        { left: "das Internet", right: "الإنترنت" },
        { left: "das Radio", right: "الراديو / الإذاعة" },
      ],
      explanation:
        "تعرّف كل اسم مع أداته؛ يطابق الاختبار بين المفردات الأربع ومعانيها المحددة.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات في جملة dass:",
      tokens: ["glaubt,", "dass", "Er", "kommt.", "sie"],
      correctSentence: "Er glaubt, dass sie kommt.",
      explanation:
        "الفعل glaubt في الجملة الرئيسة، وتأتي الفاصلة قبل dass؛ أما kommt فيقع في نهاية الجملة التابعة.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "صحّح ترتيب العبارة في الجملة التابعة وفق النمط الكتابي المحايد:",
      wrongSentence: "Ich glaube, dass er kommt heute.",
      wrongWord: "kommt heute",
      correctWord: "heute kommt",
      options: [
        "heute kommt",
        "kommt heute",
        "heute kommt heute",
        "kommst heute",
      ],
      explanation:
        "الترتيب المستهدف هو dass er heute kommt؛ يأتي الفعل المصرف في القوس الأيمن بعد ظرف الزمن هنا.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr:
        "اختر فعل الرأي أو الموقف الذي يطابق التلميح المعنوي المرفق:",
      template:
        "Ich ___, dass es morgen regnet. Ich bin nicht sicher. Ich möchte keinen Regen. Ich ___, dass du die Prüfung bestehst. Das ist mein Wunsch. Ich ___, dass die Zeitung jeden Freitag erscheint. Ich habe es in der Zeitung gelesen und weiß es genau.",
      blanks: [
        { correct: "glaube", options: ["glaube", "hoffe", "weiß"] },
        { correct: "hoffe", options: ["glaube", "hoffe", "weiß"] },
        { correct: "weiß", options: ["glaube", "hoffe", "weiß"] },
      ],
      explanation:
        "القرينة الأولى تعبّر عن اعتقاد غير مؤكد لا عن رغبة في المطر، والثانية تصرّح بأنها أمنية، والثالثة تذكر قراءة المعلومة ومعرفتها بدقة. قد يتداخل معنى glauben وhoffen في سياقات أخرى؛ هنا تحدد الجمل المرافقة الفعل المقصود.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "ادمج الجملتين مع الحفاظ على فعل الرأي:",
      prompt: "Ich denke. + Der Film ist gut. → جملة واحدة",
      acceptedAnswers: ["Ich denke, dass der Film gut ist"],
      sampleAnswer: "Ich denke, dass der Film gut ist.",
      explanation:
        "يبقى فعل الرأي Ich denke، وتدخل الجملة الثانية بعد dass مع الفعل ist في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر المعنى الشائع للكلمة:",
      questionDe: "die Werbung",
      questionAr: "ما معنى Werbung في سياق وسائل الإعلام؟",
      options: ["الدعاية / الإعلان", "الأخبار", "الصحيفة", "الرأي"],
      correctIndex: 0,
      explanation:
        "تعني Werbung الدعاية أو الإعلان في هذا السياق، وغالباً تستعمل اسماً غير معدود.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح موضع الفعل المصرف بعد dass:",
      wrongSentence: "Ich finde, dass der Artikel ist interessant.",
      wrongWord: "ist interessant",
      correctWord: "interessant ist",
      options: [
        "interessant ist",
        "ist interessant",
        "interessant sein",
        "interessant bist",
      ],
      explanation:
        "في صيغة dass المستهدفة يأتي خبر الصفة قبل الفعل المصرف: dass der Artikel interessant ist.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة كما تسمعها:",
      audioText: "Die Zeitung erscheint heute.",
      explanation:
        "انتبه إلى كتابة Zeitung وerscheint؛ يظهر ترتيب الكلمات في النص النموذجي بعد التصحيح.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "اختر معنى الكلمة من سياق إعداد الصحيفة:",
      questionDe: "die Redaktion",
      questionAr: "ما المقصود بهيئة التحرير؟",
      options: [
        "فريق إعداد مواد الصحيفة ومراجعتها",
        "جمهور القراء في المقهى",
        "المبنى الذي تجتمع فيه البلدية",
        "مسار مخصص للدراجات",
      ],
      correctIndex: 0,
      explanation:
        "Redaktion هي هيئة أو فريق التحرير؛ وفي نص القراءة تراجع Leyla الرسائل قبل نشرها.",
      errorType: "vocabulary",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص المصرف؛ أبقِ المصدر قبله:",
      template: "Ich denke, dass du den Artikel lesen ___.",
      blanks: [
        { correct: "kannst", options: ["kannst", "kann", "können"] },
      ],
      explanation:
        "فاعل الجملة du، لذلك الصيغة المصرفة هي kannst؛ يسبقها المصدر lesen ويأتي المركب في نهاية الجملة التابعة.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات في جملة dass:",
      tokens: [
        "erscheint.",
        "dass",
        "jeden",
        "Freitag",
        "glaube,",
        "die",
        "Zeitung",
        "Ich",
      ],
      correctSentence: "Ich glaube, dass die Zeitung jeden Freitag erscheint.",
      explanation:
        "تأتي الجملة الرئيسة Ich glaube أولاً، ثم الفاصلة وdass، ويقع erscheint في نهاية الجملة التابعة.",
      errorType: "word-order",
    },
    {
      id: "e14",
      type: "error-correction",
      instructionAr: "صحّح ترتيب المسند المركب بعد dass:",
      wrongSentence: "Ich denke, dass du kannst den Artikel lesen.",
      wrongWord: "kannst den Artikel lesen",
      correctWord: "den Artikel lesen kannst",
      options: [
        "den Artikel lesen kannst",
        "kannst den Artikel lesen",
        "den Artikel kannst lesen",
        "den Artikel lesen kann",
      ],
      explanation:
        "مع الفاعل du تأتي صيغة modal الناقصة kannst في القوس الأيمن؛ ويسبقها المصدر lesen بعد المفعول.",
      errorType: "word-order",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich finde, das der Artikel interessant ist.",
        right: "Ich finde, dass der Artikel interessant ist.",
        whyAr:
          "dass أداة ربط تُكتب بـss؛ أما das بحرف واحد فأداة تعريف أو ضمير بحسب السياق.",
        classification: "error",
      },
      {
        wrong: "Ich weiß dass die Zeitung heute erscheint.",
        right: "Ich weiß, dass die Zeitung heute erscheint.",
        whyAr: "توضع فاصلة بين الجملة الرئيسة والجملة التابعة في هذا المثال.",
        classification: "error",
      },
      {
        wrong: "Ich denke, dass der Film ist interessant.",
        right: "Ich denke, dass der Film interessant ist.",
        whyAr:
          "في الجملة التابعة المستهدفة لا يبقى الفعل المصرف في موضع V2؛ يوضع في القوس الأيمن.",
        classification: "error",
      },
      {
        wrong: "dass تعني دائماً أن الخبر حقيقة مؤكدة.",
        right:
          "معنى الموقف يتأثر بالفعل الرئيس: hoffen يعبر عن أمل، وglauben عن اعتقاد، وwissen عن معرفة.",
        whyAr:
          "أداة الربط تعرض مضموناً، ولا تحسم وحدها درجة يقين المتكلم؛ قارن الفعل الرئيس وسياق العبارة قبل ترجمتها.",
        classification: "pedagogical-simplification",
      },
    ],
    eselsbruecken: [
      "اسأل: ما مضمون ما أعتقده؟ ثم اكتب فاصلة وdass، واجعل الفعل المصرف في القوس الأيمن في المثال التابع.",
      "مع المسند المركب: lesen kannst، gelesen hat، anfängt. انظر إلى المجموعة كاملة ولا تنقل ترتيب الجملة الرئيسة.",
      "dass أداة ربط بحرفي ss؛ أما das فقد تكون أداة أو ضميراً بحرف واحد. افحص وظيفة الكلمة في الجملة.",
    ],
    culturalNote: {
      title: "الإعلام وتمويله — معلومة محدودة",
      content:
        "يذكر موقع ARD أن البرنامج المشترك لـARD يعتمد أساساً على مساهمة البث، وأن إيرادات الإعلان جزء صغير من ميزانيته؛ كما أن الإعلانات التلفزيونية على Das Erste وZDF مقيّدة زمنياً وتنظيمياً. لذلك لا نقول إن كل الإعلام العام بلا إعلانات، ولا نعمم عادات القراءة أو تفضيلات صحيفة بعينها على جميع الناس. تتغير التفاصيل التنظيمية، وهذا مثال سياقي لا وصف ثابت لكل وسيلة إعلام.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sein في الحاضر مع الفاعل der Film:",
      questionDe: "Ich glaube, dass der Film heute gut ___. (sein)",
      options: ["ist", "bin", "bist", "sind"],
      correctIndex: 0,
      explanation:
        "der Film مفرد غائب؛ تصريف sein معه في الحاضر ist، ويوضع في نهاية الجملة التابعة.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr:
        "اختر الرابط الذي يقدّم مضمون ما أجد، لا سؤالاً غير مباشر أو سبباً:",
      questionDe: "Ich finde, ___ die Zeitung interessant ist.",
      questionAr: "أي رابط يناسب الجملة؟",
      options: ["dass", "das", "ob", "denn"],
      correctIndex: 0,
      explanation:
        "dass يقدّم هنا مضمون الرأي؛ das ليست أداة ربط، وob يقدّم سؤالاً غير مباشر، وdenn يربط جملتين رئيسيتين عادةً.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات في جملة dass:",
      tokens: ["dass", "hoffe,", "du", "kommst.", "Ich"],
      correctSentence: "Ich hoffe, dass du kommst.",
      explanation:
        "تأتي الفاصلة قبل dass، وينتهي الجزء التابع هنا بالفعل المصرف kommst.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر الصيغة التي تضع الفاصلة قبل الجملة التابعة:",
      wrongSentence: "Ich weiß dass die Zeitung heute erscheint.",
      wrongWord: "weiß dass",
      correctWord: "weiß, dass",
      options: ["weiß, dass", "weiß dass", "weiß dass,", "weiß, dass,"],
      explanation:
        "تفصل الفاصلة الجملة التابعة عن الرئيسة: Ich weiß, dass ...؛ وتكتب أداة الربط dass بحرفي ss.",
      errorType: "punctuation",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل المناسب للفاعل وضعه في نهاية كل جملة dass:",
      template:
        "Ich denke, dass die Nachrichten wichtig ___. Ich glaube, dass er morgen ___.",
      blanks: [
        { correct: "sind", options: ["sind", "ist", "sein"] },
        { correct: "kommt", options: ["kommt", "kommen", "kommst"] },
      ],
      explanation:
        "Nachrichten جمع، لذلك sind؛ والفاعل er مفرد، لذلك kommt. يأتي كل فعل مصرف في نهاية جملته التابعة.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "das Fernsehen",
      ar: "التلفاز / وسيلة التلفزيون",
      example: "Ich finde, dass das Fernsehen manchmal zu viel Werbung zeigt.",
      exampleAr: "أرى أن التلفاز يعرض أحياناً إعلانات كثيرة.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Zeitung",
      ar: "الصحيفة",
      example: "Ich lese die Zeitung gern.",
      exampleAr: "أحب قراءة الصحيفة.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "das Internet",
      ar: "الإنترنت",
      example: "Ich finde, dass das Internet praktisch ist.",
      exampleAr: "أرى أن الإنترنت عملي.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "die Nachrichten",
      ar: "الأخبار",
      example: "Ich glaube, dass die Nachrichten wichtig sind.",
      exampleAr: "أعتقد أن الأخبار مهمة.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "die Werbung",
      ar: "الدعاية / الإعلان",
      example: "Im Fernsehen läuft Werbung.",
      exampleAr: "تُعرض إعلانات في التلفاز.",
      level: "A2",
    },
    {
      id: "fc6",
      de: "dass",
      ar: "أنّ / أداة ربط",
      example: "Ich glaube, dass es stimmt.",
      exampleAr: "أعتقد أن ذلك صحيح.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "Ich finde / glaube / denke",
      ar: "أرى / أعتقد / أظن",
      example: "Ich finde, dass der Artikel interessant ist.",
      exampleAr: "أرى أن المقال مثير للاهتمام.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Meinung",
      ar: "الرأي",
      example: "Einige Anwohner haben verschiedene Meinungen.",
      exampleAr: "لدى بعض السكان آراء مختلفة.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "der Artikel",
      ar: "المقال",
      example: "Ich finde, dass der Artikel interessant ist.",
      exampleAr: "أرى أن المقال مثير للاهتمام.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "die Redaktion",
      ar: "هيئة التحرير",
      example: "Die Redaktion prüft jede Nachricht.",
      exampleAr: "تراجع هيئة التحرير كل خبر.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "der Fahrradweg",
      ar: "مسار الدراجات",
      example: "Einige Anwohner finden, dass der Fahrradweg sicher ist.",
      exampleAr: "يرى بعض السكان أن مسار الدراجات آمن.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "herunterladen",
      ar: "ينزّل من الإنترنت",
      example: "Man kann die Zeitung kostenlos herunterladen.",
      exampleAr: "يمكن تنزيل الصحيفة مجاناً.",
      level: "A2",
    },
  ],

  mediation: [
    {
      id: "med-a2-06-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً افتراضياً بالعربية لصديق",
      sourceDe:
        "Die Stadt baut einen neuen Park. Die Bauarbeiten beginnen im Mai und dauern ein Jahr. Im Park gibt es später viele Bäume und einen Spielplatz.",
      taskAr:
        "انقل الخبر بالعربية مع الحفاظ على المعلومات: ماذا ستبني المدينة؟ متى تبدأ الأعمال وكم تستغرق؟ وماذا يوجد في الحديقة؟",
      modelAnswerAr:
        "«تبني المدينة حديقة جديدة. تبدأ أعمال البناء في مايو وتستغرق سنة. وستكون في الحديقة أشجار كثيرة وملعب.»",
      keyPointsAr: [
        "نقل فكرة بناء حديقة جديدة",
        "ذكر موعد بدء الأعمال (مايو) ومدتها (سنة)",
        "ذكر الأشجار والملعب",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a2-06-1",
      scenarioAr: "يسأل صديق عن رأيك في وسائل التواصل الاجتماعي.",
      scenarioDe: "Ein Freund fragt nach deiner Meinung zu sozialen Medien.",
      strategyAr:
        "اختر رداً مناسباً واذكر سبباً أو تفصيلاً. الخيارات نماذج ردّ قابلة للملاءمة؛ علامة best تعني ملاءمة الرد للموقف في هذا السيناريو، ولا تمثل قياساً لأداء كلامي أو نطق فعلي.",
      rounds: [
        {
          speakerDe: "Was denkst du über soziale Medien?",
          speakerAr: "ما رأيك في وسائل التواصل الاجتماعي؟",
          options: [
            {
              de: "Ich finde, dass soziale Medien praktisch sind, aber ich achte auf meine Zeit.",
              ar: "أرى أن وسائل التواصل عملية، لكنني أنتبه إلى الوقت الذي أقضيه فيها.",
              best: true,
              replyDe: "Woran merkst du, dass du zu lange online bist?",
              replyAr: "كيف تعرف أنك قضيت وقتاً طويلاً جداً على الإنترنت؟",
            },
            {
              de: "Ich glaube, dass soziale Medien bei der Suche nach Nachrichten helfen können.",
              ar: "أعتقد أن وسائل التواصل قد تساعد في البحث عن الأخبار.",
              best: true,
              replyDe: "Welche Nachrichten liest du gern?",
              replyAr: "ما الأخبار التي تحب قراءتها؟",
            },
          ],
        },
        {
          speakerDe: "Wie oft benutzt du soziale Medien?",
          speakerAr: "كم مرة تستخدم وسائل التواصل؟",
          options: [
            {
              de: "Etwa eine Stunde am Tag. Ich finde, dass das für mich genug ist.",
              ar: "نحو ساعة يومياً. وأرى أن ذلك يكفيني.",
              best: true,
              replyDe: "Warum passt diese Zeit für dich?",
              replyAr: "لماذا يناسبك هذا الوقت؟",
            },
            {
              de: "Nur am Wochenende. Ich nutze sie nicht jeden Tag.",
              ar: "في عطلة نهاية الأسبوع فقط. لا أستخدمها كل يوم.",
              best: true,
              replyDe: "Was machst du gern am Wochenende?",
              replyAr: "ماذا تحب أن تفعل في عطلة نهاية الأسبوع؟",
            },
          ],
        },
        {
          speakerDe: "Sollte man soziale Medien weniger benutzen?",
          speakerAr: "هل ينبغي للمرء أن يقلل استخدام وسائل التواصل؟",
          options: [
            {
              de: "Ich denke, dass Pausen sinnvoll sind, aber jeder kann selbst entscheiden.",
              ar: "أعتقد أن أخذ فترات راحة مفيد، لكن لكل شخص أن يقرر بنفسه.",
              best: true,
              replyDe: "Welche Pause passt gut in deinen Alltag?",
              replyAr: "ما الاستراحة التي تناسب يومك؟",
            },
            {
              de: "Ich finde, dass soziale Medien nützlich sind. Ich nutze sie für Nachrichten.",
              ar: "أرى أن وسائل التواصل مفيدة. أستخدمها لمتابعة الأخبار.",
              best: true,
              replyDe: "Welche Nachrichten findest du dort interessant?",
              replyAr: "ما الأخبار التي تجدها مثيرة للاهتمام هناك؟",
            },
          ],
        },
      ],
    },
  ],
};
