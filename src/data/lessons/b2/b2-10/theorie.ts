/**
 * b2-10 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الكتابة الأكاديمية: التأكيد والرأي والاحتمال وتحديد النطاق",
      titleDe: "Akademisches Schreiben: Aussagen stützen, Meinungen kennzeichnen und einschränken",
      explanationAr:
        "تستفيد الكتابة الأكاديمية من دقة النبرة: الجزم يحتاج إلى دليل كافٍ، والتلطيف المتكرر قد يجعل موقف الكاتب غير واضح. ومن الأدوات المفيدة، لا الحصرية، وظائف ينبغي التمييز بينها: تأكيد ادعاء مسنود (Es ist erwiesen, dass … · zweifellos · eindeutig)، وبيان أن العبارة رأي للكاتب (meiner Ansicht nach · meines Erachtens)، والتعبير عن احتمال أو ترجيح (möglicherweise · es scheint)، وتقييد نطاق الحكم (in gewissem Maße · unter Umständen · insofern). فـ«meiner Ansicht nach» يحدد زاوية المتكلم ولا يعني وحده أن درجة الجزم منخفضة. هذه العبارات تساعد على توضيح موقف الكاتب، لكنها لا تغني عن الدليل.\n\nوالحركة الأكاديمية الثلاثية هي Behauptung – Beleg – Einschränkung: تضع الأطروحة، ثم تسندها بدليل، ثم تحدّ من نطاقها. مثال كامل: «Regelmäßige Pausen verbessern die Konzentration» ادعاء عام؛ «Eine hypothetische Untersuchung deutet darauf hin, dass regelmäßige Pausen die Konzentration in dieser Stichprobe verbessern» ادعاء منسوب إلى دراسة افتراضية؛ و«Unter den untersuchten Bedingungen könnte der Effekt auftreten» يحدّد النطاق أكثر. هذه أمثلة لغوية افتراضية، وليست نتائج بحثية حقيقية أو حكماً على نضج الكاتب.\n\nتُستخدم الأفعال الناقصة للتعبير عن مواقف مختلفة؛ ويتغير تفسيرها بحسب السياق. غالباً ما يدل «Das muss so sein» على استنتاج قوي، و«Das dürfte so sein» على ترجيح، و«Das könnte so sein» على احتمال، أما «Das soll so sein» فقد ينقل قولاً منسوباً إلى غير المتكلم. و«Ich würde sagen, dass …» قد يلطّف الموقف أو يجعله أقل مباشرة، لكنه ليس مجرد صيغة تهذيب في كل سياق.\n\nتختلف درجة الرسمية باختلاف النوع والتخصص. قد تبدو «ich denke» و«ich finde» أقل رسمية في بعض النصوص، ويمكن استعمال «meiner Ansicht nach» و«meines Erachtens» لتحديد أن العبارة رأي شخصي. أما «Es zeigt sich» و«Es lässt sich sagen» و«Man kann festhalten» فصيغ غير شخصية، وليست أفضل تلقائياً. اختر الصياغة التي تلائم المهمة، ولا تجعل أداة التحفظ بديلاً عن الدليل.",
      whyAr:
        "تساعد الثلاثية في إظهار العلاقة بين ادعاء الكاتب وما يقدمه من دليل وحدود للنتيجة. لكن العبارات ذاتها لا تثبت صحة الخبر؛ فالكاتب مسؤول عن التحقق والإحالة إلى مصدر مناسب، وعن عدم توسيع النتيجة أبعد مما تسمح به البيانات. كما أن كفاية الدليل ومعايير العرض تختلف باختلاف التخصص والمهمة، ولا تكفي أداة لغوية واحدة للحكم على جودة العمل.",
      table: {
        title: "أدوات الأسلوب الأكاديمي",
        columns: ["الوظيفة", "العبارات", "مثال"],
        rows: [
          { label: "تأكيد", cells: ["zweifellos, eindeutig, es ist erwiesen", "Es ist erwiesen, dass die Frist verlängert wurde."] },
          { label: "إبداء رأي", cells: ["meiner Ansicht nach, meines Erachtens", "Meiner Ansicht nach ist das ein wichtiger Punkt."] },
          { label: "احتمال", cells: ["möglicherweise, es scheint", "Möglicherweise spielt auch die Motivation eine Rolle."] },
          { label: "تحديد النطاق", cells: ["unter Umständen, in gewissem Maße", "In gewissem Maße stimmt das."] },
        ],
      },
      examples: [
        { de: "Es ist erwiesen, dass die Auswertung auf drei Texten basiert.", ar: "ثبت أن تحليل البيانات يستند إلى ثلاثة نصوص." },
        { de: "Meiner Ansicht nach ist der Austausch unverzichtbar.", ar: "في رأيي التبادل لا غنى عنه." },
        { de: "Möglicherweise spielt auch die Motivation eine Rolle.", ar: "ربما تلعب الحوافز دوراً أيضاً." },
        { de: "In gewissem Maße kann man dem zustimmen.", ar: "إلى حد ما يمكن الموافقة على ذلك." },
        { de: "Zusammenfassend lässt sich sagen, dass B2 ein Meilenstein ist.", ar: "خلاصةً يمكن القول إن B2 علامة فارقة." },
        { de: "Es lässt sich kaum leugnen, dass der Text zwei Abschnitte umfasst.", ar: "يصعب إنكار أن النص يتضمن قسمين." },
      ],
      comparisonWithArabic:
        "تقابل هذه العبارات وظائف مثل إثبات معلومة أو إبداء رأي أو تقييد نطاقه، لكن المقابلات العربية ليست حرفية دائماً. وتستعمل اللغتان صيغاً شخصية وغير شخصية؛ ويعتمد الاختيار على الكاتب والنوع والتخصص وإرشادات المهمة، فلا توجد أفضلية واحدة ثابتة في جميع النصوص.",
      eselsbruecke:
        "تذكّر الوظيفة لا الترجمة الحرفية: «erwiesen» لإسناد تأكيد، و«meiner Ansicht nach» لتمييز الرأي، و«in gewissem Maße» لتقييد النطاق. أما «Zusammenfassend lässt sich sagen» فإحدى صيغ التلخيص الممكنة.",
      commonMistakes: [
        { wrong: "أسلوب حاد بلا دليل", right: "اسند الحكم بدليل أو حدّد نطاقه", whyAr: "لا تُمنع العبارة المباشرة «Das ist falsch» مطلقاً؛ المهم أن يسندها دليل وتعليل مناسب. يمكن أيضاً تقييد الحكم بعبارة مثل «Die vorliegenden Daten sprechen dagegen» أو نسبته إلى مصدر. لا يعوّض التلطيفُ غيابَ الدليل." },
        { wrong: "تحفظ زائد (vielleicht في كل جملة)", right: "وازن: أكّد المدعوم ولطّف الباقي", whyAr: "تكرار ألفاظ الاحتمال قد يجعل درجة الموقف ملتبسة؛ اخترها وفق ما تسمح به الأدلة، ولا تضع أكثر من أداة لمجرد الزخرفة." },
        { wrong: "ich denke (أقل رسمية) في مقال أكاديمي", right: "meiner Ansicht nach / meines Erachtens", whyAr: "«Ich denke» و«Ich finde» أقل رسمية في بعض السياقات، لكنهما ليستا خطأً مطلقاً؛ يعتمد الاختيار على التخصص ونوع النص وإرشادات الجهة. من البدائل «Meiner Ansicht nach» و«Meines Erachtens»، كما يمكن صياغة الموقف بلا ضمير متكلم عند ملاءمة ذلك." },
      ],
      relatedRuleComparison: {
        title: "Erörterung أم Hausarbeit؟",
        content: "Erörterung نص حجاجي منظّم، وقد يظهر في سياقات تعليمية مختلفة. Hausarbeit بحث أو ورقة أكاديمية، ومتطلبات المنهجية والمصادر والاستشهاد تتبع التخصص والمؤسسة. وكثيراً ما تشمل بنية العمل مقدمة وجسماً وخاتمة ومراجع، لكن اتبع تعليمات المقرر المحددة.",
      },
    },
    {
      id: "t-praesentation",
      titleAr: "عرض أكاديمي (Präsentation): بناء المحاضرة وعبارات الانتقال",
      titleDe: "Die Präsentation: Aufbau eines Vortrags",
      explanationAr:
        "من المفيد في كثير من العروض الجامعية بناءٌ واضح يناسب المهمة: مقدمة تعرّف بالموضوع، ومحاور مرتبة، وخاتمة تلخص ما عُرض. يمكن ربط الأجزاء بعبارات مثل **Zunächst** و**Anschließend** أو **Danach** و**Zum Schluss**؛ وهي خيارات مساعدة لا قالب إلزامي لكل عرض.\n\nقد يذكر المتحدث الموضوع وخطة العرض بعبارة مثل **Ich möchte heute über … sprechen**، ثم يعلن **Gliederung** أي المحاور. وفي الختام يمكنه تلخيص الفكرة بعبارة **Zusammenfassend lässt sich sagen, dass …** أو فتح الأسئلة بـ**Haben Sie Fragen?**. يمكن أن تحمل الشرائح كلمات مفتاحية أو جملاً كاملة؛ وفي الشرح الشفهي تفيد الجمل والروابط الواضحة في وصل الأفكار.\n\nتخدم بعض العبارات أجزاءً معينة: **Wie Sie in der Grafik sehen** تحيل إلى رسم أو شريحة، و**Ein Beispiel dafür ist …** تقدّم مثالاً، و**Das bedeutet für die Praxis …** تنقل النقاش إلى التطبيق. اخترها بحسب ما يعرضه المتحدث فعلاً؛ فلا تقل «Wie Sie sehen» إن لم يكن هناك شيء مرئي تشير إليه.\n\nويساعد التخطيط للوقت على ترك مساحة للخلاصة والأسئلة، لكن التوزيع يتبع طول العرض ومتطلباته. هذه أمثلة قابلة للتكييف وليست قواعد ثابتة عن كل جامعة أو جمهور.",
      whyAr:
        "قد تساعد المقدمة والخطة والروابط الواضحة كثيراً من المستمعين على متابعة العرض، لكن ترتيب الأجزاء ومعايير التقييم يعتمدان على المهمة والجهة. هذه العبارات أدوات تنظيمية قابلة للتكييف، إلى جانب دقة المحتوى والمصطلحات، وليست قالباً واحداً مطلوباً من كل متحدث.",
      table: {
        title: "بنية العرض وعبارات الانتقال",
        columns: ["الجزء", "عبارة مفيدة", "وظيفتها"],
        rows: [
          { label: "المقدمة", cells: ["Ich möchte heute über … sprechen.", "تعريف الموضوع"] },
          { label: "خطة العرض", cells: ["Zunächst … Anschließend … Zum Schluss …", "تنظيم المحاور"] },
          { label: "الخاتمة", cells: ["Zusammenfassend lässt sich sagen, dass …", "تلخيص النتيجة"] },
        ],
      },
      examples: [
        { de: "Ich möchte heute über Mülltrennung in Deutschland sprechen.", ar: "أودّ اليوم أن أتحدث عن فرز النفايات في ألمانيا." },
        { de: "Zunächst erkläre ich das Problem, anschließend zeige ich Lösungen.", ar: "أولاً أشرح المشكلة، ثم أعرض الحلول." },
        { de: "Zum Schluss fasse ich die wichtigsten Ergebnisse zusammen.", ar: "وفي الختام ألخّص أهم النتائج." },
        { de: "Die Gliederung meines Vortrags besteht aus drei Teilen.", ar: "يتكون هيكل عرضي من ثلاثة أجزاء." },
        { de: "Wie Sie in der Grafik sehen, unterscheiden sich die Werte der drei Gruppen.", ar: "كما ترون في الرسم البياني، تختلف قيم المجموعات الثلاث." },
        { de: "Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?", ar: "شكراً لانتباهكم. هل لديكم أسئلة؟" },
      ],
      comparisonWithArabic:
        "تتوفر في العربية والألمانية عبارات لتنظيم العرض، ويختار المتحدث منها ما يلائم الجمهور والمهمة. من الممكن في اللغتين عرض الخلاصة في مواضع مختلفة بحسب الغرض؛ لذا فالأمثلة هنا أدوات مقترحة وليست قواعد ثقافية ثابتة. ويساعد وضوح البنية في اللغتين على متابعة الفكرة، بينما يتحدد ترتيب المقدمة والمحاور والخلاصة بطبيعة الموضوع، والوقت المتاح، وتوجيهات المقرر، لا باختلاف اللغة وحده.",
      eselsbruecke:
        "Zunächst – Anschließend – Zum Schluss: ثلاث كلمات تمشي معك من أول العرض إلى آخره، كأنها خريطة الطريق.",
      commonMistakes: [
        {
          wrong: "Ich spreche jetzt über Müll. (بدون مقدمة ولا خطة)",
          right: "Ich möchte heute über Mülltrennung sprechen. Zunächst erkläre ich das Problem.",
          whyAr: "الجملة الأولى سليمة نحوياً، لكنها تبدأ مباشرة بالموضوع ولا تعلن خطة العرض. الصيغة المقترحة بديل يساعد الجمهور على توقع بنية الحديث، وليست إصلاحاً لخطأ نحوي أو قالباً إلزامياً لكل عرض.",
          classification: "contextual-alternative",
        },
        {
          wrong: "Danach ich zeige Lösungen.",
          right: "Danach zeige ich Lösungen.",
          whyAr: "في الجملة الخبرية الألمانية يأتي الفعل المصرف في الموقع الثاني؛ لذلك نقول «Danach zeige ich …». أما «Danach ich zeige …» فيخالف هذا الترتيب في الجملة المستقلة. ركز على موضع الفعل لا على افتراض سبب الخطأ لدى كل متعلم.",
          classification: "error",
        },
        {
          wrong: "Danke. Ende. (في نهاية العرض)",
          right: "Vielen Dank für Ihre Aufmerksamkeit. Haben Sie Fragen?",
          whyAr: "يمكن أن تكون الخاتمة قصيرة بحسب الوقت والسياق. أما هذه الصيغة فخيار مهذب يجمع الشكر وفتح باب الأسئلة؛ وليست عبارة إلزامية في كل عرض.",
          classification: "pedagogical-simplification",
        },
      ],
      relatedRuleComparison: {
        title: "Zunächst … dann … مقابل Erstens … Zweitens …",
        content:
          "يمكن استخدام Erstens، Zweitens، Drittens لتعداد نقاط، وZunächst … Anschließend لترتيب مراحل متتابعة. الاختيار تابع لبنية العرض، وقد تتداخل الوظيفتان.",
      },
    },
    {
      id: "t2",
      titleAr: "الأسلوب الاسمي (Nominalstil) في الكتابة الرسمية",
      titleDe: "Nominalstil in der formellen Schriftsprache",
      explanationAr:
        "الأسلوب الاسمي يحوّل الجملة الفعلية إلى كتلة اسمية: «weil man spart» تصبح «wegen der Einsparung»، و«wenn man ankommt» تصبح «bei der Ankunft»، و«nachdem man die Unterlagen erhalten hat» تصبح «nach Erhalt der Unterlagen». وقد يختصر بعض الصيغ أو يغيّر درجة الرسمية، لكنه لا يضمن الحفاظ على كل تفاصيل المعنى ولا يجعل النص أقصر في كل مرة.\n\nيمكن أحياناً إعادة صياغة جملة فرعية بتركيب اسمي، لكن التحويل ليس آلياً ولا تقابل كل أداة ربط حرفَ جر واحداً في كل سياق. من الأمثلة الممكنة: «weil man spart» → «wegen der Einsparung»، و«wenn man ankommt» → «bei der Ankunft»؛ وقد يتغير المعنى الدقيق من السبب أو الشرط إلى علاقة اسمية أعم. احفظ حالة الحرف في التركيب المستعمل: nach وbei مع Dativ، وwegen وtrotz مع Genitiv في الاستعمال الرسمي الشائع؛ وقد يظهر Dativ مع wegen/trotz في الاستعمال اليومي أو الإقليمي.\n\nقد يؤدي تراكم الأسماء والمضافات إلى صعوبة القراءة؛ لذلك راجع طول العبارة ووضوح العلاقات بين أجزائها، ووازن بين التراكيب الاسمية والجمل الفعلية. لا توجد قاعدة عامة تحدد عدداً ثابتاً للأفعال المصرفة أو المضافات في الفقرة.\n\nليس الأسلوب الاسمي مطلوباً في كل موضع؛ يكثر في بعض النصوص الإدارية والتقارير، لكن الإفراط فيه قد يجعل النص ثقيلاً. وتظل الجمل الفعلية سليمة وطبيعية في الشرح الأكاديمي أيضاً؛ اختر الأسلوب وفق نوع النص وإرشادات الجهة.",
      whyAr:
        "قد يختصر الأسلوب الاسمي بعض الصيغ ويساعد على تسمية فكرة ثم الإحالة إليها، لكنه ليس دائماً أقصر أو أوضح. جودة النص تعتمد على وضوح المعنى وملاءمة السجل ومتطلبات المهمة، ولا يثبت استعماله وحده مستوى لغوياً أو نجاحاً في امتحان. قارِن بين النسختين، واسأل هل بقي السبب أو الشرط كما هو، ومن الفاعل، وهل يلائم التركيب نوع النص.",
      table: {
        title: "من الأسلوب الفعلي إلى الأسلوب الاسمي",
        columns: ["الأسلوب الفعلي", "الأسلوب الاسمي", "بالعربية"],
        rows: [
          { label: "weil man spart", cells: ["wegen der Einsparung", "بسبب التوفير"] },
          { label: "wenn man ankommt", cells: ["bei der Ankunft", "عند الوصول"] },
          { label: "nachdem die Unterlagen geprüft wurden", cells: ["nach der Prüfung der Unterlagen", "بعد فحص الأوراق"] },
          { label: "damit man es versteht", cells: ["zum Verständnis", "من أجل الفهم"] },
          { label: "obwohl es regnet", cells: ["trotz des Regens", "رغم المطر"] },
        ],
      },
      examples: [
        { de: "Nach der Ankunft melden Sie sich bitte.", ar: "بعد الوصول يرجى تسجيل حضوركم (بدل wenn Sie ankommen)." }, { de: "Die Einsparung der Kosten ist unser Ziel.", ar: "توفير التكاليف هدفنا." }, { de: "Nach Erhalt Ihrer Unterlagen melden wir uns.", ar: "بعد استلام أوراقكم سنتواصل معكم." }, { de: "Wegen der Verspätung des Zuges kam sie zu spät.", ar: "بسبب تأخر القطار وصلت متأخرة." }, { de: "Zur Klärung der Frage brauchen wir mehr Zeit.", ar: "لتوضيح المسألة نحتاج وقتاً أكثر." },
        { de: "Bei der Anmeldung müssen Sie Ihren Ausweis vorlegen.", ar: "عند التسجيل يجب أن تقدّم بطاقتك." },
      ],
      comparisonWithArabic: "تستعمل العربية والألمانية مصادر وتراكيب اسمية، لكن اختيارها وبناءها لا يتطابقان دائماً. في الألمانية يتطلب كل تركيب تعلّم حرف الجر وحالته في سياقه؛ ولا ينبغي افتراض مقابلة حرفية بين الصيغتين. ويمكن مقارنة «بعد الوصول» بـ«nach der Ankunft» بوصفهما مثالين متقاربين، لا ترجمة آلية تصلح لكل جملة. في الألمانية تظهر الحالة على الأداة والصفة والاسم بحسب التركيب.",
      eselsbruecke: "قد توجد إعادة صياغة اسمية مناسبة لبعض الجمل، لكن لا تحوّل أداة الربط آلياً إلى حرف جر؛ افحص المعنى والحالة في كل تركيب.",
      commonMistakes: [
        { wrong: "wegen dem Regen", right: "wegen des Regens", whyAr: "Genitiv هو الاختيار الشائع في السجل الرسمي بعد wegen؛ ويظهر Dativ أيضاً في الاستعمال اليومي، لذا فهذا تصحيح موجّه إلى السجل المكتوب لا حكم بأن صيغة Dativ مستحيلة في كل سياق." },
        { wrong: "nach die Prüfung", right: "nach der Prüfung", whyAr: "في تراكيب مثل «nach der Prüfung» و«nach dem Studium» يأتي الاسم في Dativ؛ أما التعبير الثابت «nach Hause» فلا يظهر فيه اسم بأداة تُبيّن الحالة. تعلّم الحالة مع التركيب، ولا تقِس «nach» على «wegen» في الكتابة المعيارية." },
        { wrong: "Trotz es regnet, gehe ich.", right: "Trotz des Regens gehe ich.", whyAr: "trotz حرف جر يُتبع باسم مجرور لا بجملة؛ ومع الجملة تُستعمل obwohl." },
      ],
      relatedRuleComparison: {
        title: "أسلوب اسمي أم فعلي؟",
        content: "الأسلوب الاسمي مكثّف ورسمي، وهو شائع في الرسائل الإدارية والتقارير. لكن الإفراط فيه يجعل النص ثقيلاً وبارداً. القاعدة العملية: استعمله في المقدمات والصيغ الجاهزة، وعُد إلى الأسلوب الفعلي في الشرح والتفصيل.",
      },
    },
    {
      id: "t3",
      titleAr: "خريطة مختارة لبعض بنى وحدات B2",
      titleDe: "Ausgewählte B2-Strukturen im Überblick",
      explanationAr:
        "هذه ليست قاعدة جديدة، بل خريطة الطريق التي قطعتها. يعرض الجدول أمثلة منتقاة من وحدات B2 السابقة، لا فهرساً كاملاً لكل قواعد المستوى. وقد تمثل وحدة واحدة بأكثر من بنية، كما أضيف مثال من موضوع هذا الدرس. اقرأ العمود الأوسط، وغطِّ عمود المثال، ثم حاول توليد مثالك أنت. إذا تعثرت في مثال، فقد يفيدك الرجوع إلى شرح الوحدة ذات الصلة.\n\nتساعد الأمثلة على ملاحظة أن بعض التراكيب يمكن أن تجتمع في الجملة، لكن التمارين المنفصلة هنا لا تثبت القدرة على دمجها تلقائياً في نص حر. استخدم أمثلة القراءة والكتابة للتدريب الإضافي.\n\nيمكن قراءة الجدول بأي ترتيب والعودة إلى الأمثلة التي تحتاج مراجعتها؛ هذا اقتراح للدراسة الذاتية وليس اختباراً تشخيصياً.\n\nالمقصود من الخريطة تذكير المتعلم ببعض الموضوعات، لا ادعاء تغطية وحدات المنهج كلها أو قواعد B2 كافة. والاختيار الصحيح للتراكيب يعتمد على معنى الجملة وسياقها. ارجع إلى شرح الوحدة الأصلية عند الحاجة إلى التفاصيل أو الاستثناءات؛ فترتيب هذا الجدول لا يدل على أولوية القاعدة أو اكتمال عرضها.",
      whyAr:
        "هذه أمثلة تذكيرية لا مسح شامل لقواعد المستوى ولا مقياساً مستقلاً للإتقان. يمكن للمتعلم أن يختار جملة من نص ويحدد بنيتها، ثم يراجع الشرح عند الحاجة؛ ولا تعني صعوبة مثال واحد أن القاعدة كلها غير مكتسبة. ومن المفيد أيضاً مقارنة المثال بمهمة الوحدة الأصلية، لأن صيغة المراجعة القصيرة لا تعرض جميع شروط الاستعمال.",
      table: {
        title: "أمثلة مختارة من وحدات B2 السابقة وموضوع الدرس الحالي",
        columns: ["الوحدة", "القاعدة", "مثال"],
        rows: [
          { label: "1 — العلوم", cells: ["Konjunktiv I لنقل الكلام", "Er sagt, er habe keine Zeit."] },
          { label: "1 — العلوم", cells: ["الأفعال الناقصة الذاتية (التخمين)", "Das dürfte richtig sein."] },
          { label: "2 — الاقتصاد", cells: ["Zustandspassiv والمجهول مع الناقصة", "Die Entscheidung muss getroffen werden."] },
          { label: "3 — القانون", cells: ["الموصول مع حرف جر + بدائل المجهول", "Das Problem lässt sich leicht lösen."] },
          { label: "4 — الأدب والإعلام", cells: ["Partizip I / II صفةً", "Die steigenden Preise beunruhigen uns."] },
          { label: "5 — علم النفس", cells: ["روابط متقدمة + جسيمات تداولية", "Man lernt, indem man täglich übt."] },
          { label: "6 — المسار المهني", cells: ["الاشتقاق الاسمي (Nominalisierung)", "Beim Lesen erweitert man den Wortschatz."] },
          { label: "7 — الفلسفة", cells: ["Futur II للإنجاز المستقبلي والافتراض عن الماضي", "Bis 2030 werde ich B2 erreicht haben."] },
          { label: "8 — اللغات", cells: ["الأفعال مع حروف الجر الثابتة", "Ich interessiere mich für Sprachen."] },
          { label: "9 — سوق العمل", cells: ["التراكيب الاسمية-الفعلية (FVG)", "Wir müssen eine Entscheidung treffen."] },
          { label: "10 — الدراسة في ألمانيا", cells: ["الأسلوب الاسمي والتعبير عن درجة الموقف", "Wegen der Verlängerung der Frist lässt sich die Bewerbung noch einreichen."] },
        ],
      },
      examples: [
        { de: "Die Universität teilte mit, die Bewerbungsfrist werde verlängert.", ar: "أفادت الجامعة بأن مهلة التقديم ستُمدَّد. (نقل الكلام — الوحدة 1)" },
        { de: "Der eingereichte Antrag muss noch geprüft werden.", ar: "الطلب المقدَّم لا يزال يجب فحصه. (صفة مشتقة + مجهول مع ناقص — الوحدتان 4 و2)" },
        { de: "Das Seminar, an dem ich teilnehme, beginnt im Oktober.", ar: "الندوة التي أشارك فيها تبدأ في أكتوبر. (موصول مع حرف جر — الوحدة 3)" },
        { de: "Bis zum Semesterende werde ich alle Hausarbeiten abgegeben haben.", ar: "بحلول نهاية الفصل سأكون قد سلّمت كل الأبحاث. (Futur II — الوحدة 7)" },
        { de: "Man verbessert sein Deutsch, indem man beim Lesen Notizen macht.", ar: "يحسّن المرء ألمانيته بأن يدوّن ملاحظات أثناء القراءة. (رابط + اشتقاق اسمي — الوحدتان 5 و6)" },
        { de: "Wegen der Verlängerung der Frist lässt sich die Bewerbung noch einreichen.", ar: "بسبب تمديد المهلة لا يزال بالإمكان تقديم الطلب. (أسلوب اسمي + بديل المجهول — الوحدتان 10 و3)" },
      ],
      comparisonWithArabic:
        "تملك العربية والألمانية وسائل للتعبير عن النقل والوصف والسبب، لكن بناء التراكيب ليس متطابقاً. وتعرف العربية الفصحى الإعراب أيضاً؛ تختلف العلامات والتصريفات بين اللغتين، كما تختلف عن استعمالات العربية المحكية. لذلك تُتعلّم حالة الألمانية في كل تركيب، ولا تُختزل المقارنة إلى أن لغة تُظهر الإعراب والأخرى تكتفي بالسياق.",
      eselsbruecke:
        "تذكّر أن الجدول يجمع أمثلة منتقاة من وحدات مختلفة، لا قواعدها كلها ولا ترتيباً إلزامياً للمراجعة. اختر المثال الذي تحتاجه، ثم ارجع إلى درس القاعدة الأصلي لمزيد من الشرح.",
      commonMistakes: [
        { wrong: "Er sagt, er hab keine Zeit.", right: "Er sagt, er habe keine Zeit.", whyAr: "صيغة Konjunktiv I الصحيحة من haben مع er هي habe. لا تعدّ صيغة Indicativ خطأً في كل سياق نقل؛ يشيع Konjunktiv I علامةً على النقل، وقد تتغير الصيغة بحسب تطابق التصريف والسياق والسجل (الوحدة 1)." },
        { wrong: "Das Problem kann leicht gelöst lassen.", right: "Das Problem lässt sich leicht lösen.", whyAr: "بديل المجهول هو lassen + sich + مصدر بمعنى «يمكن حلّه»، أما «gelöst lassen» فليست بنية صحيحة (الوحدة 3)." },
        { wrong: "Bis 2030 werde ich B2 erreichen haben.", right: "Bis 2030 werde ich B2 erreicht haben.", whyAr: "Futur II يبنى بالتصريف الثالث لا بالمصدر: werde + Partizip II + haben/sein (الوحدة 7)." },
      ],
      relatedRuleComparison: {
        title: "متى أستعمل أي طبقة؟",
        content: "قاعدة عملية للتدريب لا قائمة حصرية: يُستعمل Konjunktiv I كثيراً لتمييز الكلام المنقول، وقد تتغير الصيغة بحسب السياق؛ ويغيّر المبني للمجهول وبدائله موضع التركيز في الجملة؛ وقد تضغط الصفات المشتقة والتراكيب الاسمية المعلومة أو تعيد تنظيمها. أما Futur II فيعبّر عن إنجاز متوقع بحلول وقت أو عن افتراض بشأن الماضي، وتوضح الروابط العلاقة بين الأفكار. صحة هذه البنى وحدها لا تضمن تماسك النص؛ اخترها بما يلائم المعنى والمهمة.",
      },
    },
  ];
