/**
 * b2-02 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المبني للمجهول المتقدم: الحالة والشرطي والبدائل",
      titleDe: "Zustandspassiv, Passiv mit Modalverben, Ersatzformen",
      explanationAr:
        "أول ما يجب ضبطه هو الفرق بين العملية والحالة. «Die Tür wird geöffnet» تصف حدثاً يجري الآن: هناك من يفتح الباب، والجملة تجيب عن سؤال «ماذا يحدث؟». أما «Die Tür ist geöffnet» فتصف نتيجة قائمة: الباب مفتوح، والسؤال المطابق هو «ما هي الحال؟». في التقارير الاقتصادية يظهر الفرق بوضوح: «Der Umsatz wird gesteigert» (جارٍ رفع المبيعات) مقابل «Der Umsatz ist gesteigert» (المبيعات مرفوعة أصلاً). ومع الأفعال التي تصف تغيّراً، تكون الحالة عادةً هي ما يهمّ القارئ: نتيجة متحققة لا عملية مؤقتة.\n\nوالصيغة الثانية هي المجهول مع الأفعال الناقصة: können/müssen/sollen/dürfen + Partizip II + werden، ويكون «werden» في نهاية الجملة بعد اسم المفعول. هكذا: «Die Ware kann geliefert werden» (يمكن تسليم البضاعة)، و«Die Entscheidung muss getroffen werden» (يجب اتخاذ القرار). وفي الماضي يصبح الناقص وحده ماضياً ويبقى البناء كما هو: «Die Lieferung konnte bestätigt werden» (أمكن تأكيد التسليم). القاعدة العملية: الفعل الناقص في المركز الثاني، واسم المفعول وwerden في النهاية، ولا شيء يفصل بينهما.\n\nوالصيغة الثالثة هي البدائل التي تختصر الجملة وتمنحها سجلاً لغوياً مختلفاً. «sich lassen + مصدر» تعني إمكانية عملية سلسة: «Das Problem lässt sich lösen» (المشكلة تُحل بسهولة). وصفة «-bar» تختصر الجملة إلى نعت واحد: «Die Lösung ist durchführbar» (الحل قابل للتنفيذ)، و«trinkbar» (قابل للشرب). و«man» تحافظ على الفاعل العام في صيغة المبني للمعلوم: «Man kann die Kosten senken». و«sein + zu + مصدر» صيغة رسمية تفيد الإلزام أو الإمكانية: «Das Problem ist zu lösen» (ينبغي حلّ المشكلة). وأخيراً «lassen + مفعول + مصدر» تعني التسبيب لا الإمكانية: «Ich lasse das Auto reparieren» أي أُوكل الإصلاح لغيري.\n\nوللاختيار بينها ثلاثة أسئلة فقط: هل الجملة تصف حدثاً جارياً (wird + PII) أم نتيجة قائمة (ist + PII)؟ وهل نريد إمكانية أم إلزاماً أم تسبيباً؟ وما سجلّ النص: تقرير رسمي (sein + zu + مصدر · muss + PII + werden)، أم خبر صحفي (kann/lässt sich)، أم كلام يومي (man)؟ ثم انتبه إلى الأزمنة: «waren geöffnet» حالة في الماضي، و«sind geöffnet worden» عملية منتهية في الماضي — كلمة «worden» وحدها هي التي تفصل بينهما.",
      whyAr:
        "لماذا كل هذه الطرق بدل صيغة واحدة؟ لأن الألمانية تعشق الدقة في تحديد نوع المعلومة: «يُفتح الآن» (wird geöffnet) خبر عن حدث، و«مفتوح» (ist geöffnet) خبر عن نتيجة، و«يمكن فتحه» (kann geöffnet werden / lässt sich öffnen / ist öffenbar) خبر عن إمكانية. القارئ الألماني يقرأ الفعل المساعد أولاً فيعرف نوع الخبر قبل أن يُكمل الجملة: ist = وصف حال، wird = سرد حدث، kann + werden = تقييم إمكانية. وهذا بالضبط ما يطلبه الاقتصاد: تقرير يقول «الأسعار ارتفعت» يختلف عن تقرير يقول «الأسعار مرتفعة» — الأول يبحث عن سبب، والثاني يصف واقعاً. وإتقان الاختيار بين الصيغ الأربع هو ما يفصل مستوى B1 عن B2 في الكتابة الرسمية، لأن الخطأ هنا لا يُفهم كخطأ نحوي بل كخطأ في المعنى: قد تقول إن شيئاً «مفتوح» وأنت تريد أن تقول إنه «يُفتح الآن».",
      table: {
        title: "أنواع المجهول",
        columns: ["النوع", "التركيب", "مثال", "المعنى"],
        rows: [
          { label: "Vorgangspassiv", cells: ["werden + PII", "Die Tür wird geöffnet.", "تُفتح (عملية)"] },
          { label: "Zustandspassiv", cells: ["sein + PII", "Die Tür ist geöffnet.", "مفتوحة (حالة)"] },
          { label: "Passiv + Modalverb", cells: ["können + PII + werden", "Die Tür kann geöffnet werden.", "يمكن فتحها"] },
          { label: "sich lassen", cells: ["sich + lassen + Inf", "Die Tür lässt sich öffnen.", "تُفتح بسهولة"] },
          { label: "صفة -bar", cells: ["جذر + bar", "Die Tür ist öffenbar.", "قابلة للفتح"] },
        ],
      },
      examples: [
        { de: "Die Ware ist geliefert worden.", ar: "تم تسليم البضاعة (عملية منتهية)." },
        { de: "Die Ware ist geliefert.", ar: "البضاعة مسلَّمة (حالة)." },
        { de: "Der Preis kann verhandelt werden.", ar: "يمكن التفاوض على السعر." },
        { de: "Das Problem lässt sich lösen.", ar: "المشكلة قابلة للحل (تُحل بسهولة)." },
        { de: "Die Lösung ist durchführbar.", ar: "الحل قابل للتنفيذ." },
        { de: "Die Entscheidung ist bis Freitag zu treffen.", ar: "يجب اتخاذ القرار حتى الجمعة (رسمي)." },
      ],
      comparisonWithArabic:
        "«تُفتح» تقابل wird geöffnet، و«مفتوحة» تقابل ist geöffnet، و«قابلة للفتح» تقابل ist öffenbar. التقابل تقريبي فقط، لأن الألمانية تفرّق بين العملية والحالة بتغيير الفعل المساعد، بينما العربية تستعمل الفعل نفسه («تُفتح» لوحده) أو اسم المفعول («مفتوحة») بحسب السياق. الفرق الحقيقي أن العربية تُعبّر عن الإمكانية بأدوات قبل الفعل — «يمكن فتحه»، «يُفتح بسهولة»، «قابل للفتح» — والألمانية تفعل ذلك ثلاث طرق مختلفة (kann geöffnet werden · lässt sich öffnen · ist öffenbar) لكل منها تلوين دلالي. وكذلك الإلزام: العربية تقول «يجب حلّ المشكلة»، والألمانية تقوله بصيغة رسمية قصيرة (Das Problem ist zu lösen) لا نظير حرفي لها في العربية. والمتعلّم العربي يميل إلى ترجمة «يجب» دائماً بـ muss، فيخسر الفرق بين الرسمي والمحايد؛ والحل أن يتعلّم الصيغ الثلاث كعبارات جاهزة، لا كقاعدة تُترجم كلمة بكلمة.",
      eselsbruecke:
        "«ist + PII = حالة، wird + PII = عملية» — اسأل: هل النتيجة قائمة (ist) أم الحدث جارٍ (wird)؟ و«-bar = قابل للـ»: öffenbar = قابل للفتح.",
      commonMistakes: [
        { wrong: "Die Tür ist gerade geöffnet. (تقصد: تُفتح الآن)", right: "Die Tür wird gerade geöffnet.", whyAr: "«ist geöffnet» حالة قائمة تصف نتيجة، أما الحدث الجاري فحده الأدنى هو wird + اسم المفعول؛ وكلمة «gerade» هنا علامة على الحدث الجاري لا على الحالة." },
        { wrong: "Die Tür wird geöffnet. (عملية بدل حالة)", right: "Die Tür ist geöffnet.", whyAr: "السياق هو الفيصل: إن كان المهم أن العملية جرت وأنتجت أثراً، فـ sein + Partizip II هو الصحيح، وwird يخبرنا أن العملية لا تزال في طريقها أو تتكرر." },
        { wrong: "لا فرق بين lässt sich öffnen و kann geöffnet werden في أي سياق", right: "فرق في المعنى: lässt sich öffnen = يمكن فتحه بسهولة، kann geöffnet werden = إمكانية عامة", whyAr: "قد تتشابه الترجمتان في العربية («يمكن فتحه»)، لكن الألمانية تُفرّق بين إمكانية عملية سلسة تصفها lässt sich وإمكانية عامة نظرية تصفها kann ... werden؛ والاستعمال هو الذي يحكم." },
      ],
      relatedRuleComparison: {
        title: "Vorgangs- أم Zustandspassiv؟",
        content: "Vorgang = العملية (wird geöffnet — يُفتح). Zustand = النتيجة (ist geöffnet — مفتوح). السؤال: حدث جارٍ أم حالة قائمة؟",
      },
    },
    {
      id: "t2",
      titleAr: "المجهول مع الأفعال الناقصة والبدائل الدقيقة — المعالجة الكاملة",
      titleDe: "Passiv mit Modalverben im Detail + Ersatzformen (lassen, -bar, sein + zu + Infinitiv)",
      explanationAr:
        "المجهول مع الأفعال الناقصة هو صيغة التقارير الرسمية بامتياز. البناء ثابت: الفعل الناقص في المرتبة الثانية، ثم بقية الجملة، ثم Partizip II ثم werden في النهاية. «Die Entscheidung muss getroffen werden» (يجب اتخاذ القرار)، و«Die Kosten können gesenkt werden» (يمكن خفض التكاليف)، و«Der Vertrag soll verlängert werden» (يُقال إن العقد سيُمدَّد). وما يجب حفظه أن «werden» لا يسقط أبداً، وأن ترتيب الكتلة الأخيرة (PII + werden) غير قابل للتبديل.\n\nوفي الأزمنة يتصرّف الناقص وحده: الماضي «konnte + PII + werden» (Die Lieferung konnte bestätigt werden)، والماضي التام «hat + PII + werden können» بصيغة «hat geliefert werden können» (أمكن تسليمها). والزمن يحمل فرقاً دلالياً: «konnte nicht bestätigt werden» = لم يكن ممكناً تأكيده في تلك اللحظة، أما «kann nicht bestätigt werden» = لا يمكن تأكيده الآن، قراره ما زال مفتوحاً.\n\nأما البدائل الدقيقة فتخدم مستويات مختلفة من الرسمية. «sein + zu + مصدر» أقصر وأكثر رسمية، وتفيد الإلزام أو الإمكانية بحسب السياق: «Das Problem ist zu lösen» (المشكلة يجب حلها). و«sich lassen + مصدر» صيغة محايدة طبيعية تفيد الإمكانية العملية: «Die Kosten lassen sich senken». وصفة «-bar» تُدمج في النعت فتُقصّر الجملة: «durchführbar» (قابل للتنفيذ)، «machbar» (قابل للعمل)، «senkbar» (قابل للخفض). و«man» تحافظ على المبني للمعلوم بإزالة الفاعل الحقيقي: «Man kann die Kosten senken».\n\nوأخيراً يجب التفريق بين «lassen» بسببية و«sich lassen» كبديل. في «Ich lasse das Auto reparieren» أنا المُوكِل، والفاعل الحقيقي شخص آخر؛ وفي «Das Auto lässt sich reparieren» لا أحد يُوكل شيئاً، بل الجملة تقول إن الإصلاح ممكن. وجود «sich» هو العلامة الفارقة، ومعه يصبح الفاعل شيئاً لا شخصاً.",
      whyAr:
        "لماذا هذا العمق بالذات؟ لأن التقارير الاقتصادية والسياسية مليئة بهذه الصيغ: «يجب أن يُحسم»، «يمكن تنفيذه»، «لا يمكن إيقافه»، «ينبغي تمديده». والسبب أن المتحدث لا يريد أن يسمّي الفاعل: لا في تحليل السوق (من الذي خفض الأسعار؟)، ولا في البروتوكول الرسمي (من الذي يقرّر؟)، ولا في الأخبار (المصدر غير معلوم أو غير مهم). وفي هذه الصيغ يُخفى الفاعل لغةً لا جهلاً، وهذا ما يجعل ترجمتها إلى العربية مباشرة تحتاج مهارة: العربية تُلزمك غالباً بفاعل صريح («قرّرت الحكومة»)، فتصير الترجمة الحرفية مضلِّلة. ومن أتقن البدائل، استطاع أن يضبط مستوى الرسمية في تقريره: «muss getroffen werden» صارمة، و«ist zu treffen» أكثر رسمية، و«lässt sich treffen» ألطف، و«man trifft» محايدة. ولهذا يكثر هذا الباب في الكتابة المهنية أكثر من أي باب آخر.",
      table: {
        title: "المجهول + الناقصة والبدائل (تفصيل)",
        columns: ["التركيب", "المعنى", "مثال اقتصادي"],
        rows: [
          { label: "kann + PII + werden", cells: ["يمكن أن يُفعل", "Der Preis kann verhandelt werden."] },
          { label: "muss + PII + werden", cells: ["يجب أن يُفعل", "Die Entscheidung muss getroffen werden."] },
          { label: "konnte + PII + werden", cells: ["أمكن أن يُفعل (ماضٍ)", "Die Lieferung konnte bestätigt werden."] },
          { label: "sein + zu + Infinitiv", cells: ["يجب/يمكن (رسمي)", "Das Problem ist zu lösen."] },
          { label: "lassen + sich", cells: ["يمكن بسهولة", "Die Kosten lassen sich senken."] },
          { label: "صفة -bar", cells: ["قابل للـ", "Die Investition ist durchführbar."] },
        ],
      },
      examples: [
        { de: "Die Entscheidung muss getroffen werden.", ar: "يجب أن يُتخذ القرار." },
        { de: "Die Lieferung konnte nicht bestätigt werden.", ar: "تعذّر تأكيد التسليم." },
        { de: "Das Problem ist sofort zu lösen.", ar: "المشكلة يجب حلها فوراً (رسمي)." },
        { de: "Die Kosten lassen sich leicht senken.", ar: "يمكن خفض التكاليف بسهولة." },
        { de: "Diese Lösung ist durchführbar.", ar: "هذا الحل قابل للتنفيذ." },
        { de: "Die Kosten sind in diesem Jahr zu senken.", ar: "يجب خفض التكاليف في هذا العام (رسمي)." },
      ],
      comparisonWithArabic:
        "«يجب أن يُتخذ القرار» = Die Entscheidung muss getroffen werden. «تعذّر التأكيد» = konnte nicht bestätigt werden. «قابل للتنفيذ» = durchführbar — تقابل تقريبي، لأن العربية تصوغ الإمكانية بأداة مستقلة («يمكن» و«قابل») بينما تدمجها الألمانية في النعت نفسه. والفرق الأهم أن العربية تسمح بحذف الفاعل في جملة المبني للمجهول بلا خسارة («سُلّمت البضاعة»)، لكنها لا تستطيع بناء طابق ثانٍ من الإمكانية فوق المجهول بلا أداة إضافية: «يمكن أن تُسلَّم البضاعة». الألمانية تفعل ذلك بكتلة واحدة: «Die Ware kann geliefert werden» — أي الناقص + اسم المفعول + werden، وبقاؤها في النهاية هو ما يحفظ لها وضوحها. ولذلك يخطئ المتعلّم العربي بترجمتين: يحذف werden (لأنه لا يقابله شيء في «يمكن تسليمها»)، أو يضع «يجب» في أول الجملة فيقلب ترتيب الألمانية. الأفضل أن يتعلّم الكتلة كوحدة: الناقص في المركز الثاني، وPII + werden في النهاية.",
      eselsbruecke:
        "ثلاثية الاحتراف: «muss/kann + PII + werden» (رسمي)، «lässt sich» (طبيعي)، «-bar» (قصير). ابدأ بـ kann + PII + werden لأنها الأسهل في البداية.",
      commonMistakes: [
        { wrong: "Die Ware kann geliefert. (نقص werden)", right: "Die Ware kann geliefert werden.", whyAr: "المجهول مع الناقصة يتطلب وجود werden مهما طال الفعل الناقص؛ وحذفه لا يجعل الجملة «أقصر» بل يفسد البناء، لأن الناقص بدونه لا يدلّ على مجهول." },
        { wrong: "Die Tür muss geöffnet werden بدل ist geöffnet", right: "muss geöffnet werden = يجب فتحها. ist geöffnet = مفتوحة (حالة)", whyAr: "السياق هو الذي يحدّد: إن أردت إلزاماً على أحدهم فاستعمل muss + PII + werden، وإن كنت تصف واقعاً قائماً بعد عملية انتهت فاستعمل ist + PII. الخلط بينهما يغيّر معنى التقرير كله." },
        { wrong: "Das Problem ist zu lösen. (تظنه خطأً)", right: "صحيحة! sein + zu + مصدر = يجب/يمكن", whyAr: "sein + zu + مصدر صيغة رسمية سليمة تماماً في اللغة المكتوبة والتقارير، ومعناها يجب/يمكن. لا تصحّحها إلى مجهول بالناقص، إلا إذا أردت سجلاً أقل رسمية." },
      ],
      relatedRuleComparison: {
        title: "lassen للسببية أم لبديل المجهول؟",
        content: "lassen + مفعول + مصدر = سبب: Ich lasse das Auto reparieren (أجعل السيارة تُصلح). sich lassen + مصدر = بديل مجهول: Das lässt sich reparieren (يمكن إصلاحه). انتبه لوجود sich.",
      },
    },
  ];
