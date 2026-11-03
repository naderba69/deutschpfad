/**
 * b2-09 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "تعبيرات في سياق العمل والمراسلات الرسمية",
      titleDe: "Arbeitsbezogene Wendungen und formelle Korrespondenz",
      explanationAr:
        `يعرض الدرس وصلات اسمية-فعلية منتقاة (Funktionsverbgefüge) مثل eine Entscheidung treffen وin Betracht ziehen وzur Verfügung stellen، إلى جانب تراكيب أخرى مفيدة في سياق الوظائف مثل sich um eine Stelle bewerben وWert auf etwas legen وصيغ مراسلة مثل Anbei finden Sie. ليست هذه كلها نوعاً تركيبياً واحداً: فبعضها وصلات اسمية-فعلية، وبعضها فعل مع حرف جر، وبعضها صيغة خطاب. في كثير من الوصلات الاسمية-الفعلية يحمل الاسم قسماً كبيراً من المعنى، بينما يوفّر الفعل التصريف؛ لكن درجة خفوت معنى الفعل وبنية كل تركيب تختلف.

قد يضم خطاب التقديم تحية وسبب التقديم وعرضاً موجزاً للمؤهلات أو أمثلة عليها وختاماً مهذباً، لكن لا يوجد قالب وحيد يصلح لكل الوظائف. تتحدد التفاصيل بما تطلبه الجهة وبسياق الرسالة. هذا الدرس يتدرب على عبارات مختارة، ولا يدرّب على إعداد ملف توظيف كامل أو يضمن نتيجة التقديم.

احفظ التركيب مع حرف الجر والحالة عندما تكون جزءاً منه، ولا تعمم حرفاً واحداً على كل استعمال: من الصيغ الشائعة sich bewerben um + Akkusativ، مثل sich um eine Stelle bewerben؛ ويصح أيضاً sich auf eine ausgeschriebene Stelle bewerben أو sich für einen Job bewerben؛ ويُذكر صاحب العمل مثلاً مع bei + Dativ. ومن التراكيب الأخرى Wert auf + Akkusativ legen، وjemandem etwas zur Verfügung stellen؛ أما عبارة zur Verfügung فتُحفظ بصيغتها.

تساعد هذه العبارات على تنويع التعبير في الرسائل والمقابلات، لكنها لا تجعل النص أفضل تلقائياً بمجرد إدراجها. اخترها حين تناسب المعنى والسياق، ويمكن أن تقابلها في العربية تراكيب فعلية أو اسمية؛ فالترجمة هنا سياقية وليست مقابلة ثابتة كلمةً بكلمة.`,
      whyAr:
        "تفيد هذه التراكيب في فهم بعض نصوص العمل وصياغة عبارات موجزة في طلب التوظيف أو المقابلة. تدرب على معناها وبنيتها في الأمثلة، ثم اختر ما يلائم السياق؛ فمعرفة الوصلات لا تعني وحدها إتقان خطاب كامل أو التنبؤ بقبول الطلب. واحفظ كل تركيب مع حرف الجر والحالة ومتمماته؛ فالتعميم على الصيغ المتشابهة قد يغيّر المعنى أو يجعل العبارة غير مناسبة.",
      table: {
        title: "وصلات B2 المتقدمة",
        columns: ["الوصلة", "المعنى", "مثال"],
        rows: [
          { label: "in Betracht ziehen", cells: ["يأخذ بعين الاعتبار", "Ich ziehe die Stelle in Betracht."] },
          { label: "zur Verfügung stellen", cells: ["يضع تحت التصرف", "Ich stelle meine Erfahrung zur Verfügung."] },
          { label: "eine Rolle spielen", cells: ["يلعب دوراً", "Teamarbeit spielt eine große Rolle."] },
          { label: "Wert legen auf", cells: ["يولي أهمية", "Ich lege Wert auf Pünktlichkeit."] },
          { label: "zum Ausdruck bringen", cells: ["يعبّر عن", "Ich möchte meine Motivation zum Ausdruck bringen."] },
        ],
      },
      examples: [
        { de: "Ich bewerbe mich um die Stelle als Projektmanager.", ar: "أتقدم لمنصب مدير مشاريع." },
        { de: "Anbei finden Sie meinen Lebenslauf.", ar: "تجدون سيرتي الذاتية مرفقة." },
        { de: "Ich lege großen Wert auf Teamarbeit.", ar: "أولي أهمية كبيرة للعمل الجماعي." },
        { de: "Meine Erfahrung spielt eine wichtige Rolle.", ar: "تلعب خبرتي دوراً مهماً." },
        { de: "Ich stelle meine Fähigkeiten gern zur Verfügung.", ar: "أضع قدراتي بكل سرور تحت التصرف." },
        { de: "Ich bringe drei Jahre Erfahrung im Projektmanagement mit.", ar: "أحمل ثلاث سنوات من الخبرة في إدارة المشروعات." },
      ],
      comparisonWithArabic:
        "يمكن ترجمة Ich bewerbe mich um die Stelle بـ«أتقدم للوظيفة»، وAnbei finden Sie meinen Lebenslauf بـ«أرفق لكم سيرتي الذاتية» أو «تجدون مرفقاً سيرتي الذاتية» بحسب سياق الرسالة. وIch lege Wert auf Teamarbeit قد تعني «أولي أهمية للعمل الجماعي». هذه مقابلات سياقية؛ لا يلزم أن تستخدم العربية والألمانية النوع نفسه من التركيب أو درجة الرسمية نفسها في كل موقف.",
      eselsbruecke:
        "احفظ كل وصلة مع مثال قصير وحرف الجر عند وجوده: eine Entscheidung treffen · sich um eine Stelle bewerben · Wert auf Teamarbeit legen.",
      commonMistakes: [
        { wrong: "Ich bewerbe mich nach die Stelle.", right: "Ich bewerbe mich um die Stelle.", whyAr: "في هذا المعنى نقول مثلاً sich um eine Stelle bewerben أو sich auf eine ausgeschriebene Stelle bewerben؛ أما nach die Stelle فلا يصلح هنا. وقد يتغير حرف الجر بحسب المقصود، مثل bei + Dativ لذكر الجهة التي يُقدَّم إليها الطلب." },
        { wrong: "Wert machen auf", right: "Wert legen auf", whyAr: "الكتلة الثابتة هي Wert legen auf: القيمة تُوضع لا تُصنع. والخطأ إنتاجي خالص لأن machen هو الفعل العام الأكثر حضوراً في ذهن المتعلّم؛ ولمّا كانت الكتل تُقاس على الاستعمال لا على المعنى، وجب أن تُحفظ بحرفها وفعلها معاً." },
        { wrong: "Anbei finden Sie mein Lebenslauf.", right: "Anbei finden Sie meinen Lebenslauf.", whyAr: "Lebenslauf مذكر، وهو مفعول به Akkusativ بعد finden؛ لذلك تتغير أداة التعريف من mein إلى meinen. والخطأ هنا في الحالة الإعرابية؛ لا يعني ذلك أن كل جملة تبدأ بـAnbei يجب أن تستخدم الفعل finden." },
      ],
      relatedRuleComparison: {
        title: "الخطاب الرسمي أم العامي؟",
        content: "الرسمي: Sehr geehrte... + Anbei finden Sie + Mit freundlichen Grüßen. العامي: Hallo + Ich schicke dir + Liebe Grüße. السياق يحدد — وخطاب التقديم عادةً رسمي.",
      },
    },
    {
      id: "t2",
      titleAr: "Funktionsverbgefüge: تراكيب الأفعال الوظيفية",
      titleDe: "Funktionsverbgefüge",
      explanationAr: "تضم Funktionsverbgefüge اسماً مع فعل يكون معناه أقل استقلالاً في هذا التركيب، مثل eine Entscheidung treffen، وKritik üben، وin Betracht ziehen. في هذه الأمثلة يحمل الاسم جانباً مهماً من المعنى، ويُسهم الفعل في بناء الجملة وتصريفها، لكن مقدار المعنى الذي يحتفظ به الفعل يختلف بين التراكيب.\n\nتعلّم التركيب كما يرد مع أدواته ومتمماته: eine Entscheidung treffen، Kritik an etwas üben، Wert auf etwas legen، jemanden/etwas zur Verfügung stellen. لاحظ موضع المتمم والحالة أيضاً؛ فالمعنى العام لا يكفي وحده لاختيار البنية الصحيحة. لا توجد قاعدة دلالية واحدة تسمح باستنتاج كل فعل من الاسم؛ لذا تساعد الأمثلة والمعاجم على تثبيت الاستعمال.\n\nقد يختار الكاتب التركيب الاسمي-الفعلي أو فعلاً أبسط بحسب المعنى والسياق والنبرة. فـberücksichtigen وin Betracht ziehen متقاربان في مثال الخيار، لكنهما ليسا قابلين للاستبدال في كل تركيب. ولا توجد عتبة عددية عامة لما يبدو طبيعياً؛ ركّز على دقة المعنى وتنوع الجمل بدلاً من عدّ الوصلات.",
      whyAr: "معرفة هذه الوصلات تساعدك على فهم تعبيرات متكررة في مواد العمل والتقديم، وعلى اختيار صياغة مناسبة عند الكتابة أو الحديث. لكنها لا تثبت وحدها مستوى القارئ أو جودة نصه؛ افهم تركيب كل مثال ومتمماته قبل استعماله. واختبر المثال في جملة كاملة لا في ترجمة منفردة، لأن الفعل وحرف الجر يحددان دور الاسم والعلاقة بين عناصر العبارة.",
      table: {
        title: "Funktionsverbgefüge الشائعة",
        columns: ["التركيب", "الفعل البسيط", "المعنى", "المجال"],
        rows: [
          { label: "eine Entscheidung treffen", cells: ["entscheiden", "يتخذ قراراً", "إدارة"] },
          { label: "zur Verfügung stellen", cells: ["verfügbar machen", "يوفّر", "عمل"] },
          { label: "in Betracht ziehen", cells: ["berücksichtigen", "يأخذ في الاعتبار", "رسمي"] },
          { label: "Kritik üben", cells: ["kritisieren", "يوجّه نقداً", "إعلام"] },
          { label: "eine Rolle spielen", cells: ["wichtig sein", "يؤدي دوراً", "عام"] },
        ],
      },
      examples: [
        { de: "Die Firma trifft eine wichtige Entscheidung.", ar: "الشركة تتخذ قراراً مهماً." }, { de: "Wir müssen die Kosten in Betracht ziehen.", ar: "يجب أن نأخذ التكاليف بعين الاعتبار." }, { de: "Wir müssen eine Entscheidung treffen.", ar: "علينا اتخاذ قرار." }, { de: "Das Unternehmen stellt die Daten zur Verfügung.", ar: "توفّر الشركة البيانات." }, { de: "Diese Option sollten wir in Betracht ziehen.", ar: "ينبغي أن نأخذ هذا الخيار في الاعتبار." },
        { de: "Wir müssen die Unterlagen bis Freitag zur Verfügung stellen.", ar: "علينا وضع المستندات تحت التصرف قبل الجمعة." },
      ],
      comparisonWithArabic: "هذا التركيب مألوف تماماً للعربي: نقول في الصياغة الرسمية «اتخذ قراراً» و«وجّه نقداً»، وهما أقرب إلى الاسم منهما إلى الفعل البسيط. في هذه التراكيب لا يُستعمل عادةً machen مع eine Entscheidung ولا geben مع Kritik؛ فالفعل المعتاد جزء من التركيب الذي ينبغي حفظه.",
      eselsbruecke: "احفظ التركيب كاملاً كوحدة واحدة: الاسم مع فعله ومع حرف الجر إن وُجد. فالخطأ الشائع ليس في الاسم بل في اختيار الفعل، ولا توجد قاعدة تهديك إليه دائماً، لذلك تُحفظ مع الأمثلة.",
      commonMistakes: [
        { wrong: "eine Entscheidung machen", right: "eine Entscheidung treffen", whyAr: "الفعل الوظيفي المعتاد مع Entscheidung هو treffen، وmachen لا تُستعمل مع هذا الاسم بهذا المعنى." },
        { wrong: "Kritik geben", right: "Kritik üben", whyAr: "التركيب المحفوظ هو Kritik üben أو Kritik äußern، ولا يقال geben، لأن geben تدخل في تراكيب أخرى (einen Vortrag geben · Auskunft geben). والتباين يبيّن أن العنصر الثابت هو ما يحفظه الاستعمال لا ما يناسب العقل: «إعطاء نقد» منطقية عربية لا ألمانية." },
        { wrong: "in Betracht nehmen", right: "in Betracht ziehen", whyAr: "التركيب الثابت هو ziehen مع Betracht، أما nehmen فترد في in Kauf nehmen." },
      ],
      relatedRuleComparison: {
        title: "Funktionsverbgefüge أم الفعل البسيط؟",
        content: "قد تكون الصياغة بالفعل البسيط أقصر (Wir berücksichtigen diese Option)، ويشيع أيضاً تركيب in Betracht ziehen. الاختيار بينهما يتبع المعنى والسياق؛ لا تُصنّف كل Funktionsverbgefüge تلقائياً على أنه رسمي أو غير مناسب للمحادثة.",
      },
    },
  ];
