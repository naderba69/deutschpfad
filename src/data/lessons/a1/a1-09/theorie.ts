/**
 * a1-09 — الشرح النظري (الجزء «theorie»)
 * فُصل من a1-09.ts في الدفعة 91 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "أيام الأسبوع والشهور والفصول",
      titleDe: "Wochentage, Monate und Jahreszeiten",
      explanationAr:
        "أسماء الأيام والشهور والفصول أسماء، لذلك تبدأ بحرف كبير في الألمانية. في الترتيب الذي نستخدمه هنا يبدأ الأسبوع بالاثنين؛ وأسماء الأيام والشهور والفصول المذكورة تأتي مع أداة التعريف der: der Montag، der Januar، der Frühling. أمّا كلمة «الفصل» نفسها فهي die Jahreszeit.\n\nأسماء الأيام لها أصول تاريخية متنوعة، فلا يصح اختزالها في قاعدة واحدة: Montag مرتبط بالقمر؛ Dienstag يرجع إلى اسم الإله الجرماني Ziu، لا إلى كلمة Dienst بمعنى «خدمة»؛ يرتبط اسم Mittwoch تاريخياً بمعنى «وسط الأسبوع»؛ في ترتيب هذا الدرس هو اليوم الثالث لا اليوم الأوسط؛ Donnerstag يرتبط بالإله الجرماني Donar؛ وFreitag باسم الإلهة Frija. يرتبط Samstag بكلمة Sabbat، وSonntag بيوم الشمس.\n\nتُستعمل Sonnabend إلى جانب Samstag في مناطق من شمال ألمانيا وشرقها، وتُسجّل أحياناً في الشمال الغربي؛ ليست هذه التسمية موزعة بالتساوي في كل المناطق.\n\n**الشهور بالترتيب:** Januar · Februar · März · April · Mai · Juni · Juli · August · September · Oktober · November · Dezember. قد تسمع في بعض الاستعمالات الصيغتين المنطوقتين Juno وJulei؛ أما الكتابة المعتادة للشهرين فهي Juni وJuli.\n\n**الفصول:** der Frühling · der Sommer · der Herbst · der Winter.\n\nوللعادة الأسبوعية نقول عادةً montags، dienstags، mittwochs… بحرف صغير في وسط الجملة: Ich habe montags Deutschunterricht. إذا بدأ الظرف الجملة كُتب بحرف كبير بحكم موقعه: Montags habe ich Deutschunterricht.",
      whyAr:
        "نرتّب الأيام في هذا الدرس ابتداءً من الاثنين لأن ترتيب الأسبوع المعتمد في أمثلته معلن بوضوح؛ ولا نستنتج ترتيب كل تقويم في كل بلد من أصل كلمة Mittwoch. يشرح Duden أن Mittwoch هو اليوم الثالث في الأسبوع الذي يبدأ بالاثنين، مع بقاء معنى الاسم التاريخي مرتبطاً بوسط الأسبوع. أما الفرق الذي يحتاجه المتعلم في الاستعمال اليومي فهو بين يوم محدد مثل am Montag وظرف تكرار مثل montags. ونضع الحكايات التاريخية في خانة التذكّر الاختياري، لا في قائمة ما نقيسه من أهداف.",
      table: {
        title: "الأيام والأشهر والفصول",
        columns: ["العربية", "الألمانية", "ملاحظة"],
        rows: [
          { label: "الاثنين", cells: ["der Montag", "مرتبط تاريخياً باسم القمر."] },
          { label: "الثلاثاء", cells: ["der Dienstag", "يرتبط اسم اليوم بـZiu؛ ليس مشتقاً من كلمة Dienst الحديثة."] },
          { label: "الأربعاء", cells: ["der Mittwoch", "يعكس معنى «وسط الأسبوع» تاريخياً؛ أما في ترتيبنا فهو اليوم الثالث."] },
          { label: "الخميس والجمعة", cells: ["der Donnerstag · der Freitag", "Donar وFrija من أصول الاسمين التاريخية."] },
          { label: "السبت والأحد", cells: ["der Samstag · der Sonntag", "Sonnabend تسمية إقليمية أخرى للسبت."] },
          { label: "الشهور", cells: ["der Januar · der Februar · der März · der April · der Mai · der Juni · der Juli · der August · der September · der Oktober · der November · der Dezember", "تُكتب أسماء الشهور بحرف كبير."] },
          { label: "الفصول", cells: ["der Frühling · der Sommer · der Herbst · der Winter", "لكن اسم الفئة die Jahreszeit مؤنث."] },
        ],
      },
      examples: [
        { de: "Heute ist Montag.", ar: "اليوم الاثنين." },
        { de: "Am Samstag gehe ich einkaufen.", ar: "أذهب للتسوّق يوم السبت." },
        { de: "Mein Geburtstag ist im Mai.", ar: "عيد ميلادي في مايو." },
        { de: "Im Winter ist es oft kalt.", ar: "غالباً ما يكون الجو بارداً في الشتاء." },
        { de: "Der Termin ist am Freitag um drei Uhr.", ar: "الموعد يوم الجمعة الساعة الثالثة." },
        { de: "Ich habe montags Deutschunterricht.", ar: "عندي درس ألمانية كل يوم اثنين." },
        { de: "In Teilen Nord- und Ostdeutschlands hört man auch Sonnabend.", ar: "تُسمع Sonnabend أيضاً في بعض مناطق شمال ألمانيا وشرقها." },
        { de: "Der Sommer ist meine Lieblingsjahreszeit.", ar: "الصيف هو فصلي المفضل." },
      ],
      comparisonWithArabic:
        "لا تُترجم am وim بكلمة عربية واحدة ثم تُطبّق آلياً: نقول في أمثلة الدرس am Montag، لكن im Mai وim Sommer. وفي العربية قد تعبّر «في» أو «يوم» عن هذه العلاقات بحسب الجملة، لا عن مقابل ثابت لحرف الجر الألماني. كذلك يختلف اليوم المحدد عن التكرار: am Montag تعني موعداً أو حدثاً يوم الاثنين في المثال، أما montags فتشير إلى عادة أسبوعية. احفظ التركيب كاملاً مع نوع الزمن، ولا تستنتج من ترجمة عربية واحدة قاعدة لكل الأسماء أو البلدان.",
      eselsbruecke:
        "للتذكّر العملي: am + يوم أو تاريخ، im + شهر أو فصل، um + ساعة. وللتكرار الأسبوعي: أضف s إلى اسم اليوم واكتبه montags بحرف صغير داخل الجملة.",
      commonMistakes: [
        {
          wrong: "Tag Freitag habe ich frei.",
          right: "Am Freitag habe ich frei.",
          whyAr: "في هذا القالب الزمني لا نضيف Tag قبل اسم اليوم؛ الصيغة المستعملة هنا هي am Freitag. هذا تصحيح لعبارة الموعد المقصودة، لا ادعاء بأن كلمة Tag لا ترد مع Freitag في أي تركيب آخر.",
          classification: "error",
        },
        {
          wrong: "Die Montag ist lang.",
          right: "Der Montag ist lang.",
          whyAr: "اسم اليوم مذكر في الألمانية، لذلك نقول der Montag. صفة lang هنا خبر بعد ist، وتبقى بلا نهاية في هذا المثال.",
          classification: "error",
        },
        {
          wrong: "Ich arbeite Montags.",
          right: "Ich arbeite montags.",
          whyAr: "الظرف الدال على التكرار يُكتب عادةً بحرف صغير داخل الجملة. أما إذا جاء في بدايتها، فالحرف الأول كبير: Montags habe ich Deutschunterricht.",
          classification: "error",
        },
        {
          wrong: "Im Montag habe ich Zeit.",
          right: "Am Montag habe ich Zeit.",
          whyAr: "في عبارة عن يوم محدد نستخدم هنا am Montag. أما im فتأتي في الأمثلة مع اسم شهر أو فصل، مثل im Mai وim Winter.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "am لليوم، im للشهر أو الفصل، um للساعة",
        content:
          "أمثلة الدرس: am Montag وam 5. Mai · im Mai وim Sommer · um neun Uhr. هذه تراكيب شائعة نتعلمها كما هي؛ لا تُستبدل بحرف عربي واحد في كل السياقات.",
      },
    },
    {
      id: "t2",
      titleAr: "الأعداد الترتيبية",
      titleDe: "Ordinalzahlen",
      explanationAr:
        "العدد الترتيبي يحدد موضع شيء في سلسلة، مثل اليوم الثالث من الشهر أو الموعد الأول. في الكتابة الألمانية تُكتب الصيغة الرقمية بنقطة بعد العدد: 3. Mai. النقطة علامة للعدد الترتيبي هنا، وليست فاصلاً عشرياً.\n\nفي الصياغة بالكلمات يكون النمط الشائع للأعداد من 1 إلى 19 هو النهاية -te، وللأعداد من 20 فصاعداً النهاية -ste: vierte، neunzehnte، zwanzigste. ليست كل الصيغ منتظمة بالطريقة نفسها؛ لذلك احفظ erste وdritte وsiebte، وتذكّر أن achte تُكتب من دون تضعيف t. ويورد Duden siebente أيضاً إلى جانب siebte؛ نلتزم في تدريبات هذا الدرس بـsiebte.\n\nتتغير نهاية العدد بحسب موقعه وتركيبه. قارن: Heute ist der dritte Mai؛ ثم Der Termin ist am dritten Mai؛ ثم Ich nehme den dritten Termin. الأولى تعرض اسم التاريخ مع der، والثانية تحدد وقتاً بعد am (اختصار an dem)، والثالثة تجعل Termin مفعولاً بعد den. هذه أمثلة محددة على صيغ مختلفة للعدد نفسه، وليست ثلاثة أعداد مختلفة.\n\nبعد am في التاريخ المكتوب بالكلمات نتدرّب على النهاية -ten: am ersten Mai، am dritten Mai، am zwanzigsten Mai. أما إذا كتبنا التاريخ بالأرقام فنحافظ على النقطة: am 3. Mai. لذلك نميّز بين der dritte Mai وam dritten Mai، ولا نختار نهاية واحدة لجميع الجمل من دون النظر إلى الأداة والتركيب.",
      whyAr:
        "اختيارنا لهذه الصيغ ليس لأن التاريخ يغيّر معنى العدد، بل لأن وظيفة العبارة داخل الجملة تختلف: der dritte Mai اسم تاريخ في المثال، وam dritten Mai يحدد وقت حدث، وden dritten Termin يقع مفعولاً بعد den. لذلك نُبقي «الحالة» وصفاً نحوياً ألمانياً، ولا نساويها بعلامة إعراب عربية أو بحركة عربية واحدة. النمط -te/-ste يساعد على التعرّف إلى الصيغة، لكنه لا يكفي وحده لاختيار النهاية؛ راجع الأداة والسياق، واحفظ الصيغ غير المنتظمة الشائعة كما تظهر في أمثلتها.",
      table: {
        title: "صيغ منتقاة من الأعداد الترتيبية",
        columns: ["العدد", "بالكلمات", "في التاريخ"],
        rows: [
          { label: "1", cells: ["der erste", "der 1. Mai"] },
          { label: "2", cells: ["der zweite", "der 2. Juni"] },
          { label: "3", cells: ["der dritte", "der 3. Juli"] },
          { label: "4", cells: ["der vierte", "der 4. August"] },
          { label: "5", cells: ["der fünfte", "der 5. September"] },
          { label: "7", cells: ["der siebte (auch: siebente)", "der 7. Oktober"] },
          { label: "8", cells: ["der achte", "der 8. November"] },
          { label: "20", cells: ["der zwanzigste", "der 20. Dezember"] },
        ],
      },
      examples: [
        { de: "Heute ist der erste Mai.", ar: "اليوم هو الأول من مايو." },
        { de: "Der Termin ist am dritten Juli.", ar: "الموعد في الثالث من يوليو." },
        { de: "Das ist mein zweiter Besuch.", ar: "هذه زيارتي الثانية." },
        { de: "Sie wohnt im vierten Stock.", ar: "تسكن في الطابق الرابع." },
        { de: "Wir treffen uns am zwanzigsten November.", ar: "نلتقي في العشرين من نوفمبر." },
        { de: "Der siebte Tag heißt Sonntag.", ar: "اليوم السابع هو الأحد في ترتيب الأسبوع الذي يبدأ بالاثنين." },
        { de: "Ich nehme den ersten Termin.", ar: "سأختار الموعد الأول." },
        { de: "Der Kurs beginnt am achten Januar.", ar: "تبدأ الدورة في الثامن من يناير." },
      ],
      comparisonWithArabic:
        "في العربية قد نقول «الثالث من مايو»، بينما تُظهر الألمانية العدد داخل تركيب التاريخ: der dritte Mai، وعند تحديد موعد نقول am dritten Mai. لا نقابل النهاية -te أو -en بحركة عربية ثابتة؛ بل نقارن العبارة كاملة ونلاحظ الأداة ووظيفة العدد في الجملة. كذلك النقطة في 3. Mai علامة كتابة ألمانية للعدد الترتيبي، فلا نقرأها فاصلاً عشرياً ولا ننقلها آلياً إلى كل تنسيق دولي. هذه مقارنة بين النماذج المحددة في الدرس، وليست مساواة شاملة بين نظامي اللغتين.",
      eselsbruecke:
        "تذكّر النمط مع الأمثلة: 1 erste، 3 dritte، 7 siebte، 8 achte؛ ثم -te في الأعداد حتى 19 غالباً، و-ste من 20. بعد am في عبارة التاريخ هنا نقول am dritten أو am zwanzigsten.",
      commonMistakes: [
        {
          wrong: "der dreite Mai",
          right: "der dritte Mai",
          whyAr: "الصيغة الترتيبية من drei هي dritte، لا dreite. احفظ التغيير في الكلمة كما هو؛ لا نفسره بحذف حرف واحد من كتابة drei.",
          classification: "error",
        },
        {
          wrong: "am zwanzigte Mai",
          right: "am zwanzigsten Mai",
          whyAr: "في عبارة التاريخ المعروضة، نستخدم بعد am صيغة zwanzigsten. لذلك لا تكفي إضافة -ste وحدها إلى zwanzig من دون نهاية الصفة المناسبة.",
          classification: "error",
        },
        {
          wrong: "Heute ist am fünften Mai.",
          right: "Heute ist der fünfte Mai.",
          whyAr: "عند قول تاريخ اليوم بهذه الجملة نستخدم Heute ist der fünfte Mai. أما am fünften Mai فتصلح لتحديد وقت وقوع حدث، مثل: Ich komme am fünften Mai.",
          classification: "error",
        },
        {
          wrong: "Ich habe am 3 Mai einen Termin.",
          right: "Ich habe am 3. Mai einen Termin.",
          whyAr: "في الكتابة الألمانية المعتادة تُتبع صيغة اليوم الترتيبية المكتوبة بالأرقام بنقطة، لذلك نكتب 3. Mai في هذا المثال.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "صيغة التاريخ بعد am وصيغة اليوم مع der",
        content:
          "في أمثلة هذا الدرس: Heute ist der dritte Mai، لكن Ich habe am dritten Mai einen Termin. نلاحظ الصيغة كما وردت بعد الأداة، من دون اختزال الداتيف الألماني في قاعدة عربية.",
      },
    },
    {
      id: "t3",
      titleAr: "كتابة التاريخ والسؤال عنه",
      titleDe: "Das Datum: Der Wievielte ist heute?",
      explanationAr:
        "للسؤال عن تاريخ اليوم نتدرّب على: Der Wievielte ist heute? ويمكن أن تكون الإجابة الكاملة: Heute ist der dritte Mai. ولتحديد يوم وقوع موعد نقول في أمثلتنا: am dritten Mai. فالسؤال الأول يطلب ترتيب اليوم في الشهر، أما العبارة الثانية فتضع حدثاً في تاريخ معيّن.\n\nفي التنسيق الرقمي الألماني المعتاد يظهر اليوم ثم الشهر ثم السنة، مع نقطة بعد اليوم الترتيبي: 3.5.2026 تعني الثالث من مايو 2026. ومثال am 5.9. يعني الخامس من سبتمبر وفق هذا الترتيب. قد تستخدم البلدان والواجهات الأخرى ترتيباً مختلفاً، لذلك نقرأ الرقم هنا بحسب التنسيق المعلن ولا نعمّمه على الوثائق الدولية.\n\nللتعبير بالكلمات عن فترة بين تاريخين نتدرّب على الصيغة الكاملة vom ersten bis zum dritten Mai. في هذا النموذج تظهر بداية المدى مع vom ونهايته مع bis zum؛ ولا نعمّم هذه الصيغة الكاملة على كل اختصار أو تنسيق رقمي.\n\nوفي خانة سنة الميلاد يمكن كتابة رقم السنة، مثلاً: Mein Geburtsjahr ist 1995. في هذا التركيب تأتي السنة مباشرة بعد ist. ركّز هنا على رقم التاريخ وترتيبه وصيغ السؤال والموعد، لا على ادعاء أن هذه أمثلة الدرس تغطي كل أنظمة كتابة التواريخ.",
      whyAr:
        "تتبع الإجابة عن تاريخ اليوم بنية الجملة المعروضة، بينما يبدأ تحديد موعد في أمثلتنا بـam. والنقطة في 3. Mai جزء من كتابة التاريخ بالأرقام. أما عند ربط اسم يوم بالتاريخ فقد تظهر صيغ وعلامات ترقيم أخرى؛ هذا الدرس يقتصر على النماذج الموجودة في التدريبات.",
      table: {
        title: "التاريخ بحسب المهمة",
        columns: ["المطلوب", "الصيغة", "مثال"],
        rows: [
          { label: "السؤال عن تاريخ اليوم", cells: ["Der Wievielte ist heute?", "Heute ist der dritte Mai."] },
          { label: "تحديد موعد", cells: ["am + تاريخ", "Der Termin ist am dritten Mai."] },
          { label: "تاريخ رقمي", cells: ["اليوم.الشهر.السنة", "3.5.2026"] },
          { label: "مدى كامل بالكلمات", cells: ["vom … bis zum …", "vom ersten bis zum dritten Mai"] },
          { label: "سنة الميلاد", cells: ["رقم السنة في خانة الميلاد", "Mein Geburtsjahr ist 1995."] },
        ],
      },
      examples: [
        { de: "Der Wievielte ist heute?", ar: "ما تاريخ اليوم؟" },
        { de: "Heute ist der dritte Mai.", ar: "اليوم هو الثالث من مايو." },
        { de: "Der Termin ist am dritten Mai.", ar: "الموعد في الثالث من مايو." },
        { de: "Der Termin ist am 5.9.", ar: "الموعد في الخامس من سبتمبر وفق التنسيق الألماني المعتاد." },
        { de: "Der Kurs geht vom ersten bis zum dritten Mai.", ar: "تستمر الدورة من الأول إلى الثالث من مايو." },
        { de: "Mein Geburtsjahr ist 1995.", ar: "سنة ميلادي 1995." },
        { de: "Wir treffen uns am zwanzigsten November.", ar: "نلتقي في العشرين من نوفمبر." },
      ],
      comparisonWithArabic:
        "قد تُعرض التواريخ بالأرقام بترتيبات مختلفة بحسب البلد والواجهة. في أمثلة هذا الدرس نتبع النمط الألماني اليوم.الشهر.السنة، ونبدأ بقراءة اليوم؛ لذلك 5.9. تعني الخامس من سبتمبر في السؤال المحدد. لا نقرأ النقطة على أنها فاصلة عشرية، ولا نعمّم الترتيب الألماني على كل وثيقة أو تطبيق. وفي الصياغة بالكلمات نميّز بين سؤال «ما تاريخ اليوم؟» وجملة تحدد موعداً: Heute ist der dritte Mai مقابل Der Termin ist am dritten Mai. الترجمة العربية قد تستعمل «في» في الاثنين، لكن اختيار التركيب الألماني يتبع وظيفة العبارة في المثال.",
      eselsbruecke:
        "ثبّت الفرق في المثالين: der dritte في Heute ist der dritte Mai، وam dritten في موعد يبدأ بـam. وعند قراءة التاريخ الرقمي الألماني ابدأ برقم اليوم ثم الشهر.",
      commonMistakes: [
        {
          wrong: "Mein Geburtstag ist am dritte Mai.",
          right: "Mein Geburtstag ist am dritten Mai.",
          whyAr: "في عبارة الموعد المعروضة نستخدم am dritten Mai. تذكّر شكل الكلمة بعد am كما تسمعه وتراه في المثال، ولا تخلط بينه وبين Heute ist der dritte Mai.",
          classification: "error",
        },
        {
          wrong: "Heute ist am fünften Mai.",
          right: "Heute ist der fünfte Mai.",
          whyAr: "عند ذكر تاريخ اليوم بهذه الصيغة نستخدم der fünfte Mai؛ أما am fünften Mai فتأتي في عبارة تحدد موعد حدث.",
          classification: "error",
        },
        {
          wrong: "Mein Geburtsjahr ist im 1995.",
          right: "Mein Geburtsjahr ist 1995.",
          whyAr: "في هذا التركيب تأتي السنة مباشرة بعد ist، من دون im. هذا تصحيح للجملة المعروضة ولا يقدّم قاعدة شاملة لكل التراكيب الزمنية.",
          classification: "error",
        },
      ],
      relatedRuleComparison: {
        title: "am للتاريخ واليوم، um للساعة، im للشهر",
        content:
          "أمثلة مختارة: am Montag أو am dritten Mai · um neun Uhr · im Mai أو im Sommer. لا تعني هذه المقارنة أن حرفاً عربياً يقابل كل حرف ألماني في جميع السياقات.",
      },
    },
    {
      id: "t4",
      titleAr: "الاتفاق على موعد وتغييرُه",
      titleDe: "Einen Termin vereinbaren, absagen und verschieben",
      explanationAr:
        "نراجع von … bis التي ظهرت في درس الروتين، ونقارنها بصيغ زمنية أخرى: von … bis يذكر بداية ونهاية؛ ab يذكر نقطة بداية ولا يحدد وحده نهاية؛ bis يذكر حداً زمنياً؛ gegen يقدّم وقتاً تقريبياً. ونقول zwischen … und … عند ذكر وقت يقع بين حدّين.\n\nقارن: Die Praxis ist von acht bis achtzehn Uhr geöffnet. · Ab Montag habe ich wieder Zeit. · Ich arbeite bis sechs. · Ich komme gegen drei Uhr. وتبقى um drei Uhr صيغةً لوقت محدد في المثال المعتاد؛ أما مدى التقريب الذي تفيده gegen فيعتمد على السياق.\n\nفي طلب موعد يمكن استعمال Ich hätte gern einen Termin. وهي صيغة شائعة مهذبة، وليست الوحيدة؛ Ich möchte gern einen Termin صيغة ممكنة أيضاً. أما Ich will einen Termin فتركيب ألماني صحيح، لكنه قد يبدو أكثر مباشرة بحسب الموقف، فلا نصفه بخطأ نحوي أو وقاحة حتمية.\n\nفي جواب عن وقت مقترح يمكن أن نقول Es tut mir leid, da kann ich nicht. في هذا المثال تشير da إلى الوقت المذكور؛ وقد تشير إلى المكان في سياق آخر. ونميّز بين einen Termin vereinbaren (الاتفاق على موعد)، absagen (إلغاء)، وverschieben (تغيير الموعد إلى وقت آخر).",
      whyAr:
        "هذه القاعدة تقارن دلالات محددة في جمل بعينها، ولا تجعل von ملازمة لـbis في كل استعمال، ولا تعتبر um وgegen قابلين للاستبدال دائماً. وجود بداية ونهاية مذكورتين يرجّح von … bis في المثال؛ وab يقدّم بداية مفتوحة النهاية، بينما bis يذكر حداً زمنياً. أما gegen فيفيد التقريب هنا، ويمكن أن يكون الموعد نفسه دقيقاً أو تقريبياً بحسب ما يريد المتحدث. كذلك «مهذب» وصف لاستعمال شائع في هذا الطلب، لا حكم مطلق على شخصية المتحدث أو صحة القواعد. التمرين النصي يختبر التمييز والاختيار المكتوب فقط، ولا يثبت القدرة على التفاوض شفهياً.",
      table: {
        title: "صيغ زمنية وعبارات للموعد",
        columns: ["الصيغة", "المعنى في المثال", "مثال"],
        rows: [
          { label: "von … bis …", cells: ["بداية ونهاية مذكورتان", "von neun bis zwölf Uhr"] },
          { label: "ab", cells: ["نقطة بداية؛ النهاية غير مذكورة", "Ab Montag habe ich Zeit."] },
          { label: "bis", cells: ["حدّ أو نهاية زمنية", "Ich arbeite bis sechs."] },
          { label: "gegen", cells: ["وقت تقريبي", "Ich komme gegen drei Uhr."] },
          { label: "zwischen … und …", cells: ["وقت بين حدّين", "zwischen zwei und vier Uhr"] },
          { label: "montags", cells: ["عادة تتكرر كل اثنين", "Ich habe montags Deutschunterricht."] },
        ],
      },
      examples: [
        { de: "Guten Tag, ich hätte gern einen Termin.", ar: "مرحباً، أودّ حجز موعد." },
        { de: "Die Praxis ist von acht bis achtzehn Uhr geöffnet.", ar: "العيادة مفتوحة من الثامنة إلى السادسة مساءً." },
        { de: "Ab Montag habe ich wieder Zeit.", ar: "سيتاح لي الوقت ابتداءً من الاثنين." },
        { de: "Es tut mir leid, da kann ich nicht.", ar: "آسف، لا أستطيع في ذلك الوقت." },
        { de: "Geht es auch am Mittwoch um zehn Uhr?", ar: "هل يناسبكم الأربعاء الساعة العاشرة أيضاً؟" },
        { de: "Ich komme gegen drei Uhr.", ar: "سآتي نحو الساعة الثالثة." },
        { de: "Ich muss den Termin leider absagen.", ar: "للأسف، عليّ إلغاء الموعد." },
        { de: "Können wir den Termin verschieben?", ar: "هل يمكننا تغيير موعد اللقاء إلى وقت آخر؟" },
      ],
      comparisonWithArabic:
        "لا توجد مطابقة حرفية ثابتة بين حروف الزمن في اللغتين. قد نترجم ab Montag بـ«ابتداءً من الاثنين»، وvon neun bis zwölf بـ«من التاسعة إلى الثانية عشرة»، وgegen drei بـ«نحو الثالثة»؛ لكن الحرف العربي «من» وحده لا يخبرنا إن كانت نهاية المدى مذكورة، كما أن gegen يحمل معنى التقريب في هذا المثال. وmontags يدل على تكرار أسبوعي، لا على الاثنين المحدد نفسه. لذلك نربط كل صيغة بأطراف الفترة أو درجة الدقة أو التكرار في الجملة، ونبقي الحكم على نبرة Ich will مرتبطاً بالسياق.",
      eselsbruecke:
        "اسأل نفسك: هل أذكر البداية والنهاية؟ von … bis. هل أذكر نقطة بداية فقط؟ ab. هل الوقت تقريبي؟ gegen. هل أريد تكراراً أسبوعياً؟ montags.",
      commonMistakes: [
        {
          wrong: "Von Montag habe ich Zeit.",
          right: "Ab Montag habe ich Zeit. / Von Montag an habe ich Zeit.",
          whyAr: "للتعبير هنا عن نقطة بداية من دون ذكر نهاية، الصيغة الواضحة هي ab Montag أو von Montag an. لا نستنتج من ذلك أن von لا تستعمل إلا مع bis في سائر معانيها وتراكيبها.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Ich will einen Termin.",
          right: "Ich hätte gern einen Termin. / Ich möchte gern einen Termin.",
          whyAr: "تركيب Ich will einen Termin صحيح نحوياً، لكنه يعبّر عن الإرادة مباشرة وقد يكون أقل لطفاً في هذا الطلب بحسب السياق. نتدرّب هنا على بدائل شائعة مهذبة، لا على تصحيح خطأ نحوي.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Es tut mir leid, dort kann ich nicht.",
          right: "Es tut mir leid, da kann ich nicht.",
          whyAr: "حين يكون المرجع موعداً أو وقتاً، تشير da في هذا الحوار إلى الوقت المقترح. أما dort فتلائم مرجعاً مكانياً، وقد تكون صحيحة في حديث عن مكان؛ الاختيار سياقي.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Der Termin ist gegen drei Uhr.",
          right: "Der Termin ist um drei Uhr.",
          whyAr: "كلا التعبيرين صحيح: um drei Uhr يحدد الوقت في هذا المثال، بينما gegen drei Uhr يجعله تقريبياً. اختر الصيغة وفق دقة الموعد المقصودة.",
          classification: "contextual-alternative",
        },
      ],
      relatedRuleComparison: {
        title: "مراجعة am وim وum وvon … bis",
        content:
          "استُعمل von … bis من قبل في أمثلة الروتين. هنا نراجعه إلى جانب ab وbis وgegen: Am Montag um neun Uhr ist ein Termin; die Praxis ist von acht bis achtzehn Uhr geöffnet.",
      },
    },
  ];
