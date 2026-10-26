/**
 * b1-10 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "تدريب على جمع تراكيب مختارة",
      titleDe: "Ausgewählte Strukturen kombinieren",
      explanationAr:
        "الجملة المركبة الحقيقية لا تُبنى من قاعدة واحدة، بل من تركيب طبقات: Der Student, der Deutsch lernt, möchte später in Deutschland studieren, weil er die Kultur liebt und weil er bessere Chancen haben wird. في هذه الجملة ثلاث طبقات: جملة نسبية (der … lernt) تصف الطالب، وفعل رئيسي (möchte studieren) يحمل الخبر، وجملتان بـweil تعلّلان المراد وتضيفان زمناً مستقبلاً (haben wird). وليست العبرة في كثرة القواعد، بل في معرفة أي طبقة تحلّ في أي موضع.\n\nثم نتابع كل جزء بحسب نوعه: في الجمل الثانوية التي يعرضها هذا الدرس، مثل جملة weil والجملة النسبية، يأتي الفعل المصرف في النهاية عادةً؛ أما الجملة الرئيسية فيأتي فعلها المصرف غالباً في المرتبة الثانية. ومن فهم هذا النظام استطاع أن يقرأ الجملة الطويلة كوحدات صغيرة لا كسلسلة كلمات: يقرأ الاسم، ثم يرى ما وصفه، ثم يعود إلى الخبر، ثم يأخذ التعليل والزمن من طبقتيهما.\n\nفي هذا الدرس نستخدم أمثلة وتمارين تركيب لملاحظة موضع الفعل والضمير النسبي. وهي مراجعة انتقائية وليست اختباراً عاماً لمستوى المتعلم.",
      whyAr:
        "لماذا نتدرب على الجمع بين التراكيب؟ لأن الحديث الطبيعي قد يجمع أكثر من وظيفة في الجملة الواحدة، بل يصف ويعلّل ويخطط ويفترض في النطق الواحد. وفي بعض النصوص، قد نحتاج إلى وصف فكرة وتعليلها والإشارة إلى المستقبل في فقرة واحدة: توصيف شخص أو مشروع، وتعليل اختياره، والإشارة إلى ما سيتوقع منه.\n\nقد يصعب تتبّع موضع الفعل كلما زادت طبقات الجملة؛ لذلك نقسم المثال إلى جمل رئيسية وثانوية ونراجع كل جزء على حدة. هذا تدريب على التراكيب الواردة هنا، وليس حكماً على مستوى المتعلم أو على متطلبات امتحان رسمي.\n\nهذا الدرس يراجع أمثلة مختارة فقط، ولا يغطي كل قواعد B1 أو يحل محل مراجعة أوسع قبل الانتقال إلى مستوى آخر.",
      table: {
        title: "خريطة تراكيب مختارة من دروس سابقة",
        columns: ["القاعدة", "المثال", "الدرس"],
        rows: [
          { label: "Genitiv", cells: ["das Buch des Lehrers", "B1-01"] },
          { label: "Relativsatz", cells: ["Der Mann, der dort steht", "B1-01"] },
          { label: "Präteritum + Plusquamperfekt", cells: ["Bevor ich studierte, hatte ich gearbeitet", "B1-02"] },
          { label: "Passiv", cells: ["Das Haus wird gebaut", "B1-03"] },
          { label: "Konjunktiv II", cells: ["Wenn ich reich wäre, würde ich reisen", "B1-04/05"] },
          { label: "Adjektivdeklination", cells: ["ein gutes Buch", "B1-06"] },
          { label: "Temporalsätze", cells: ["Als ich jung war", "B1-07"] },
          { label: "Zweiteilige Konnektoren", cells: ["weder... noch", "B1-08"] },
          { label: "Nomen-Verb + n-Deklination", cells: ["eine Frage stellen / den Studenten", "B1-09"] },
        ],
      },
      examples: [
        { de: "Der Student, der Deutsch lernt, möchte in Deutschland studieren, weil er die Kultur liebt.", ar: "الطالب الذي يتعلم الألمانية يريد الدراسة في ألمانيا لأنه يحب الثقافة." },
        { de: "Wenn ich genug Geld hätte, würde ich ein Haus kaufen, das am Strand liegt.", ar: "لو كان عندي مال كافٍ لكنت اشتريت بيتاً يقع على الشاطئ." },
        { de: "Das Projekt, das gestern beschlossen wurde, wird nächste Woche beginnen.", ar: "المشروع الذي قُرر أمس سيبدأ الأسبوع القادم." },
        { de: "Je mehr ich lerne, desto besser verstehe ich die deutsche Kultur.", ar: "كلما تعلمت أكثر فهمت الثقافة الألمانية أفضل." },
        { de: "Ich habe weder Angst noch Zweifel, weil ich gut vorbereitet bin.", ar: "ليس لدي خوف ولا شك لأنني مستعد جيداً." },
        { de: "Obwohl er wenig Zeit hat, übt er jeden Tag, weil er sein Ziel nicht vergessen will.", ar: "رغم أنه لا يملك وقتاً كثيراً فهو يتدرب كل يوم لأنه لا يريد أن ينسى هدفه." },
      ],
      comparisonWithArabic:
        "يمكن تمثيل الوصف والتعليل معاً في العربية أيضاً، مثل: «الطالب الذي يتعلم الألمانية يريد أن يدرس في ألمانيا لأنه يحب الثقافة». فالجملة النسبية موجودة («الذي»)، والتعليل موجود («لأن»)، والفكرة أن الأخبار تتشابك واضحة في ذهنه.\n\nوالاختلاف في الأدوات لا في التفكير: وجود جملة موصولة وتعليل في العربية لا يعني أن ترتيب الكلمات يطابق الألمانية. في أمثلة هذا الدرس، تأتي الجملة النسبية بعد الاسم، ويأتي الفعل المصرف عادةً في نهاية جملة weil أو الجملة النسبية؛ أما الجملة الرئيسية فتحافظ غالباً على الفعل في المرتبة الثانية. قارن البنية والمعنى، ولا تنقل ترتيب الكلمات حرفياً.\n\nللتدرب، قارن جملة عربية مركبة بصياغتها الألمانية، وحدد حدود الجملة النسبية وجملة التعليل وموقع الفعل في كل منهما؛ لا تفترض أن تحويل كل جملة إلى zu يحافظ على المعنى نفسه.\n\nمثال إضافي يُظهر الانتقال الكامل: «Der Kurs, den ich letztes Jahr besucht habe, hat mir geholfen, weil die Übungen praktisch waren» — اسم «الكورس» ثم صفته النسبية، ثم خبره، ثم تعليله بفعل في نهاية الجملة. ولاحظ أن الطبقات لا تُعدّ بالترتيب، بل تُشترى بالتنبؤ: وعندما تظهر جملة نسبية، ابحث عن الاسم الذي تصفه؛ وبعد weil انتظر الفعل المصرف في نهاية الجملة الثانوية.",
      eselsbruecke:
        "بعد روابط الجمل الثانوية مثل weil وwenn وobwohl وdass، وكذلك في الجملة النسبية، يأتي الفعل المصرف عادةً في النهاية. أما und وaber فغالباً يربطان جملتين رئيسيتين، ولا يفرضان وحدهما نهاية الفعل.",
      commonMistakes: [
        { wrong: "Der Student, der Deutsch lernt, er möchte... (تكرير)", right: "Der Student, der Deutsch lernt, möchte...", whyAr: "في المثال المحايد المكتوب، يكفي الفاعل «Der Student» للجملة الرئيسية؛ لذلك لا نضيف عادةً ضميراً آخر مثل er. قد تظهر تراكيب استئنافية في سياقات محكية أو للتوكيد، لكنها ليست الصياغة المستهدفة في هذا التمرين." },
        { wrong: "...weil er die Kultur liebt und er will studieren. (ترتيب)", right: "...weil er die Kultur liebt und weil er studieren will.", whyAr: "في الجملة الثانية بدأ المتعلّم جملةً رئيسية بعد und فانتقل الفعل إلى المرتبة الثانية (will) — وهذا مقبول في جملة مستقلة، لكن المعنى هنا تابع للتعليل الأول، فيُستحسن تكرار weil ليُصبّ الفعل في النهاية. والقاعدة: كل جزء ثانوي يبقى ثانوياً حتى تريد أن تصنع جملة رئيسية حقيقية، ووعند الانتقال إلى جملة رئيسية مستقلة بعد und، يكون ترتيبها المعتاد فعل-ثانٍ؛ أما إذا واصلنا تنسيق جملتين ثانويتين، فيمكن تكرار weil كما في المثال." },
        { wrong: "Ich kaufe ein Haus, das am Strand liegen.", right: "Ich kaufe ein Haus, das am Strand liegt.", whyAr: "خطأ التصريف هنا لا خطأ الترتيب: ضمير النسب das يعود على Haus وهو مفرد، فالفعل يُصرَّف مفرداً liegt لا جمعاً. ويقع فيه العربي لأن نظرَه يتعلق بالمعنى («البيوت» في ذهنه) لا باللفظ المفرد قبل ضمير النسب. وعلاجه أن تُحدّد رأس الموصول قبل كتابة الجملة، ثم تُصرّف فعله على عدده فوراً." },
      ],
      relatedRuleComparison: {
        title: "مراجعة قبل التمرين المصغّر",
        content: "هذا الدرس مراجعة لقواعد الدروس السابقة، ولا يحاكي امتحاناً رسمياً. أكمل التمرين المصغّر وراجع الأخطاء التي تظهر فيه.",
      },
    },
    {
      id: "t2",
      titleAr: "الجمل الشرطية غير الواقعية",
      titleDe: "Irreale Bedingungssätze",
      explanationAr: "تحمل جملة wenn معنيين مختلفين يُفرَّق بينهما بزمن الفعل لا بالأداة: الشرط الممكن (Wenn ich Zeit habe, komme ich) يُصاغ بالمضارع، والشرط غير الواقعي (Wenn ich Zeit hätte, käme ich) يُصاغ بـKonjunktiv II في هذا المثال في الشطرين معاً. لكنه نمط شائع للفرض غير الواقعي، وليس قاعدة مطلقة لكل تركيب شرطي؛ توجد تراكيب مختلطة أو استعمالات أخرى بحسب المعنى.\n\nوفي Konjunktiv II نفسها ثلاثة مستويات: مضارع غير واقعي بـhätte/wäre مع صيغة würde أو فعل منقول، وماضٍ غير واقعي بـhätte/wäre + Partizip II، وتمنٍّ يُفتح بـwenn… nur. في المثال التعليمي هنا، يعرض Konjunktiv II الافتراض والنتيجة المتخيّلة. لا تعمّم هذا على كل جملة شرطية؛ فاختيار الصيغة يتبع المعنى، وقد تختلف صيغة الشطرين في بعض السياقات.\n\nوللكتابة الرسمية صورة ثالثة بلا wenn: يُصدَّر الفعل في المرتبة الأولى (Hätte ich Zeit, käme ich)، وهذه صورة ممكنة بحذف wenn وتقديم الفعل، لكنها تُشبه في صورتها جملة الاستفهام (Habe ich Zeit? / Hätte ich Zeit…) فلا يُفرّق بينهما إلا بعلامة الترقيم والنبرة. ومن ثمة يُستحسن في الكتابة أن تُبقى wenn صريحة إن كان القارئ قد يخطئ في القراءة.",
      whyAr: "يساعد التمييز بين شرط ممكن وافتراض مخالف للواقع على نقل موقف المتكلم بدقة؛ لكن اختيار الصيغة يعتمد على المعنى والسياق، وليس على أداة wenn وحدها.\n\nوفي الحياة الألمانية اليومية لهذه الصيغة وظيفة أخرى: هي أداة الأدب والتهذيب في الطلب. فقول «Könntest du mir helfen?» أو «Wäre es möglich, dass…» أكثر تأدباً من صيغة الأمر أو المضارع المباشر، ولذلك تظهر كثيراً في البريد الإلكتروني الرسمي وفيما يُسمّى «صيغة الافتراض المهذّبة».\n\nوتظهر Konjunktiv II كذلك في استعمالات أخرى، منها الطلب المهذب والافتراض؛ وتختلف الحاجة إليها باختلاف المهمة والسياق. هذا الدرس يقدّم أمثلة مختارة ولا يقيّم الاستعداد لمستوى B2.",
      table: {
        title: "شرط واقعي أم غير واقعي؟",
        columns: ["النوع", "الزمن", "مثال", "بالعربية"],
        rows: [
          { label: "واقعي (ممكن)", cells: ["مضارع", "Wenn ich Zeit habe, komme ich.", "إن كان لديّ وقت، آتي."] },
          { label: "غير واقعي (حاضر)", cells: ["Konjunktiv II", "Wenn ich Zeit hätte, käme ich.", "لو كان لديّ وقت، لأتيت."] },
          { label: "غير واقعي (ماضٍ)", cells: ["hätte/wäre + P2", "Wenn ich Zeit gehabt hätte, wäre ich gekommen.", "لو كان لديّ وقت، لكنت أتيت."] },
          { label: "بلا wenn", cells: ["الفعل أولاً", "Hätte ich Zeit, käme ich.", "لو كان لديّ وقت لأتيت."] },
          { label: "تمنٍّ", cells: ["nur + Konjunktiv II", "Wenn ich nur Zeit hätte!", "ليت لديّ وقتاً!"] },
        ],
      },
      examples: [
        { de: "Wenn ich genug Geld hätte, würde ich studieren.", ar: "لو كان لدي مال كافٍ لدرست." }, { de: "Wenn das Wetter schön wäre, gingen wir wandern.", ar: "لو كان الطقس جميلاً لتنزهنا." }, { de: "Wenn das Wetter besser wäre, würden wir grillen.", ar: "لو كان الطقس أفضل لشوينا." }, { de: "Wenn ich das gewusst hätte, hätte ich dir geholfen.", ar: "لو كنت أعلم ذلك لساعدتك." }, { de: "Ohne deine Hilfe hätte ich das nicht geschafft.", ar: "لولا مساعدتك لما نجحت في ذلك." },
        { de: "Wäre ich in deiner Lage, hätte ich schon längst gefragt.", ar: "لو كنت في مكانك لسألت من زمان." }
      ],
      comparisonWithArabic: "يمكن تقريب بعض أمثلة Konjunktiv II العربية بـ«لو ... لَـ...»، لكن المقابلة ليست آلية ولا تكفي أداة عربية وحدها لاختيار الصيغة الألمانية. حدّد أولاً هل المتكلم يصف احتمالاً واقعياً أم افتراضاً مخالفاً للواقع، ثم اختر الصيغة المناسبة. وفي النمط المستهدف هنا تظهر صيغ مثل hätte وwäre وwürde.\n\nوفي الماضي غير الواقعي، يشيع في الألمانية نمط hätte/wäre + Partizip II في جملة الشرط والنتيجة، كما في المثال. لا تفترض أن كل جملة عربية تبدأ بـ«لو» تتحول آلياً إلى الصيغة نفسها.",
      eselsbruecke: "الشرط الممتنع في الماضي يضع hätte أو wäre في الجملتين معاً، مع اسم المفعول في آخر كل جملة. إن رأيت صيغة Konjunktiv فالجملة تتحدث عمّا لم يحدث أو عمّا يتمناه المتكلم.",
      commonMistakes: [
        { wrong: "في النمط المستهدف هنا: Wenn ich Zeit hätte, komme ich.", right: "Wenn ich Zeit hätte, käme ich.", whyAr: "يعرض هذا التمرين النمط الشائع الذي يستخدم Konjunktiv II في الشرط والنتيجة. وقد تختلف الصياغة في سياقات أخرى؛ فلا تُعامل كل مزج للصيغ على أنه خطأ مطلق." },
        { wrong: "Wenn ich das gewusst habe, hätte ich geholfen.", right: "Wenn ich das gewusst hätte, hätte ich geholfen.", whyAr: "الشرط الممتنع في الماضي يُصاغ بـ hätte مع اسم المفعول لا بصيغة Perfekt العادية." },
        { wrong: "Wenn ich reich wäre, ich würde reisen.", right: "Wenn ich reich wäre, würde ich reisen.", whyAr: "الجملة الشرطية المتصدّرة تشغل المرتبة الأولى فيليها الفعل مباشرة." },
      ],
      relatedRuleComparison: {
        title: "wenn أم falls؟",
        content: "wenn قد تدل على شرط أو على معنى زمني مثل «عندما/كلما» بحسب السياق. أما falls فتُستعمل للشرط، ولا تحمل المعنى الزمني المعتاد لـwenn؛ ولا يلزم من ذلك أنها محصورة في الاحتمال أو في الأسلوب الرسمي. مثال: Falls Sie Fragen haben, rufen Sie an.",
      },
    },
  ];
