/**
 * b2-04 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المشاركات كصفات (Partizipialkonstruktionen)",
      titleDe: "Partizip I und II als Adjektive",
      explanationAr:
        "Partizip I يُبنى بإضافة d إلى المصدر: spielen → spielend، arbeiten → arbeitend. وهو يدلّ على فعل جارٍ يقوم به الاسم الموصوف: «das spielende Kind» (الطفل الذي يلعب الآن). ولأنه صفة، فإنه يأخذ نهايات الصفات كاملة بحسب الأداة والحالة: ein spielendes Kind، die spielenden Kinder، mit dem spielenden Kind.\n\nأما Partizip II فهو اسم المفعول نفسه الذي تعرفه من الماضي التام: geschrieben، gelöst، unterschrieben. وإذا وُضع قبل الاسم دلّ على أثر منتهٍ وقع على الموصوف: «der geschriebene Brief» (الرسالة المكتوبة)، «die gelöste Aufgabe» (المهمة المحلولة). والفرق الدلالي بين النوعين هو الفرق بين الفعل والانفعال: «das kochende Wasser» ماء يغلي الآن، و«das gekochte Wasser» ماء سُلق وانتهى أمره.\n\nووظيفة هذا التركيب أسلوبية في المقام الأول: إنه يختصر الجملة الموصولة في كلمتين أو ثلاث. «Der Mann, der viel liest, ist mein Lehrer» تصبح «Der viel lesende Mann ist mein Lehrer»، و«Das Buch, das gestern erschienen ist, wurde schnell verkauft» تصبح «Das gestern erschienene Buch wurde schnell verkauft». ولهذا يسمّيه الألمان الأسلوب المضغوط، وهو السمة الأوضح للنصوص الصحفية والأكاديمية.\n\nويبقى لهذا الاختصار قيدان عمليان: الأول أن المشارك يجب أن يكون قابلاً للتفسير بجملة موصولة واضحة، وإلا صارت الجملة غامضة؛ والثاني أن الشطر الطويل يزداد ثقلاً كلما أضفت إليه تفاصيل، ولذلك يحدّ الكتّاب من طول البناء قبل الاسم. والمتعلّم الجيد يعرف أنه يستطيع أن يكتب الجملتين — الطويلة الموصولة للحوار، والمضغوطة للكتابة — وأن الاختيار بينهما قرار أسلوبي لا نحوي.",
      whyAr:
        "لماذا هذا الأسلوب؟ لأنه «مكثف»: كلمة واحدة تعوض جملة كاملة. «der viel gelesene Autor» = الكاتب الذي يُقرأ كثيراً — ثلاث كلمات بدل خمس. وتميل الكتابة الأدبية والصحفية إلى هذا الإيجاز لأنها تريد أن تحمل المعلومة داخل الاسم لا في جملة منفصلة بعده. ولذلك يظهر الفرق جلياً في العنوان الصحفي: «Die gestiegenen Preise beunruhigen die Kunden» أقوى وأسرع من «Die Preise, die gestiegen sind, beunruhigen die Kunden». أما في الكلام اليومي فالأمر معكوس: الألماني العادي يقول الجملة الموصولة لأنها أسهل على الفهم وأخفّ على الذاكرة العاملة. ومن يتقن التركيبين يستطيع أن ينتقل بين الرسمي واليومي بوعي، لا أن يبقى أسير نمط واحد؛ وهذه القدرة بالذات هي التي يطلبها التعبير المكتوب في مستوى B2 وما بعده.",
      table: {
        title: "Partizip I وII كصفات",
        columns: ["النوع", "التركيب", "مثال", "المعنى"],
        rows: [
          { label: "Partizip I (نشط)", cells: ["جذر + end", "das spielende Kind", "الطفل اللاعب"] },
          { label: "Partizip II (منتهي)", cells: ["ge + جذر + t/en", "der geschriebene Brief", "الرسالة المكتوبة"] },
          { label: "مع ein", cells: ["تصريف صفة عادي", "ein spielendes Kind", "طفل لاعب"] },
          { label: "اختصار نسبية", cells: ["der, der arbeitet → der arbeitende", "der arbeitende Mann", "الرجل العامل"] },
        ],
      },
      examples: [
        { de: "Das spielende Kind ist glücklich.", ar: "الطفل اللاعب سعيد." },
        { de: "Der geschriebene Brief liegt auf dem Tisch.", ar: "الرسالة المكتوبة على الطاولة." },
        { de: "Die lesende Frau sitzt am Fenster.", ar: "المرأة القارئة تجلس عند النافذة." },
        { de: "Der viel gelesene Autor kommt morgen.", ar: "الكاتب الذي يُقرأ كثيراً يأتي غداً." },
        { de: "Das neu eröffnete Museum ist beeindruckend.", ar: "المتحف المفتوح حديثاً مذهل." },
        { de: "Die in Berlin lebende Schriftstellerin hat einen Preis erhalten.", ar: "الكاتبة المقيمة في برلين حصلت على جائزة." },
      ],
      comparisonWithArabic:
        "«الطفل اللاعب» = das spielende Kind — يقابل صيغة «اسم الفاعل» في العربية. و«الرسالة المكتوبة» = der geschriebene Brief — يقابل «اسم المفعول». فالتقابل قريب جداً، لكن الفرق في التفاصيل: اسم الفاعل العربي لا يُصرَّف بحسب الأداة والحالة، بينما Partizip I صفة كاملة تأخذ النهايات (spielendes، spielenden). والفرق الثاني أن العربية تصوغ اسم الفاعل من الفعل الثلاثي مباشرة (لاعب، كاتب، قارئ) وتحتاج صيغة أخرى مع الفعل المزيد (مُلتقِط، مُتعلّم)، أما الألمانية فقاعدتها واحدة لكل الأفعال: المصدر + d. والفرق الثالث أن العربية تسمح بإدخال معمولات بعد اسم الفاعل («الطفل اللاعب في الحديقة»)، بينما الألمانية تُلزمك بوضع التفاصيل قبل الاسم الموصوف: «das im Garten spielende Kind». ولذلك كثيراً ما ينتج المتعلّم العربي جملاً مفهومة لكنها ثقيلة، لأنه يترجم كلمة بكلمة بدل أن يضغط الجملة الموصولة في صفة واحدة قبل الاسم.",
      eselsbruecke:
        "«-end = فاعل (يلعب)، ge-...t/en = مفعول (مكتوب)» — Partizip I نشط مثل «فاعل»، وII منتهي مثل «مفعول». اسأل: هل الشيء يفعل أم يُفعل؟",
      commonMistakes: [
        { wrong: "das spielend Kind (بدون نهاية صفة)", right: "das spielende Kind", whyAr: "المشارك صفة كاملة، فيجب أن يأخذ نهاية الصفة بحسب الأداة والحالة: das spielende Kind لا das spielend Kind؛ والعربية لا تحتاج نهاية مماثلة، فيضيع المتعلّم الفرق بين الصفة والفعل." },
        { wrong: "der geschrieben Brief", right: "der geschriebene Brief", whyAr: "بعد أداة التعريف der في الرفع المذكّر تأخذ الصفة النهاية -e: der geschriebene Brief، لا der geschrieben Brief. والنهاية ليست زينة بل هي التي تحدّد الحالة والجنس." },
        { wrong: "Partizip I أم II؟", right: "I = نشط (الماء الغالي: kochendes Wasser). II = منتهي (الماء المغلي: gekochtes Wasser)", whyAr: "الفيصل دلالي لا شكلي: هل الاسم الموصوف هو الذي يقوم بالفعل (فـ Partizip I)، أم الذي وقع عليه الفعل وانتهى (فـ Partizip II)؟ والخطأ هنا يقلب المعنى تماماً كما يقلبه استبدال الفاعل بالمفعول." },
      ],
      relatedRuleComparison: {
        title: "الاختصار من النسبية",
        content: "Der Mann, der arbeitet → der arbeitende Mann. Die Frau, die liest → die lesende Frau. قاعدة تقريبية: إذا كان المعنى نشطاً وجارياً فغالباً Partizip I، وإذا كان منتهياً أو مبنياً للمجهول فغالباً Partizip II. بعض الأفعال اللازمة تقبل Partizip II أيضاً، مثل «der angekommene Zug».",
      },
    },
    {
      id: "t2",
      titleAr: "الصفات المشتقة (Partizipialattribute)",
      titleDe: "Partizipialattribute",
      explanationAr: "التركيب نفسه الذي رأيناه في الكتلة الأولى يظهر هنا في جمل كاملة، والفرق أن النظر ينتقل من الكلمة المفردة إلى العبارة كلها: كيف تحوّل جملة موصولة طويلة إلى صفة مسبوقة بمعمولاتها. الصيغة الأساسية: «Der Mann, der arbeitet → der arbeitende Mann» مع Partizip I، و«Das Buch, das gelesen wurde → das gelesene Buch» مع Partizip II. وفي الحالتين ينتقل مضمون الجملة كله إلى ما قبل الاسم.\n\nوالمستوى الثاني هو إدخال المعمولات داخل البناء: «Das vom Chef unterschriebene Dokument» (الوثيقة الموقّعة من المدير)، و«Die in Berlin lebende Schriftstellerin». وهنا يظهر الفرق الأسلوبي الحقيقي، لأن هذه المعمولات كانت في الجملة الموصولة مفردات مستقلة، فصارت الآن كومة متراصّة قبل الاسم.\n\nوالمستوى الثالث هو بنية الوجوب بـ«zu + Partizip I»: «das zu lösende Problem» أي المشكلة التي يجب حلّها، و«die zu treffende Entscheidung» أي القرار الواجب اتخاذه. وهي بديل مضغوط للجملة «das Problem, das gelöst werden muss»، وترد كثيراً في اللوائح والتعليمات والعناوين الرسمية لأنها تنقل الإلزام في نعت واحد.\n\nوأخيراً: هذه البنية هي المقياس الواضح الذي يفرّق بين قراءة B1 وقراءة B2 للنص الصحفي. فالقارئ الذي لم يعتدها يقرأ «die gestiegene Nachfrage» كأنها اسم جديد، ويتوقف عند كل صفة مشتقة ليبحث عن فعلها؛ أما من فهمها فيقرأ الجملة كاملة في نظرة واحدة، لأن عقله يعيد تحويل الصفة تلقائياً إلى الجملة التي جُعلت منها.",
      whyAr: "لماذا؟ لأن النصوص الأكاديمية والأدبية تستخدم هذه البنية كثيراً، وفهمها يساعد على قراءة النصوص المتقدمة. والسبب عملي: التقارير العلمية تريد أن تُسمّي الشيء وتصفه في العبارة نفسها بلا جملة ثانوية تفصل القارئ عن جوهر الخبر، فتصير العبارة مثل «die in der Studie gemessene Veränderung» وحدة معلوماتية واحدة لا تتفتّت. ولو أُعيدت صياغتها بجملة موصولة لتضاعف طول الجملة وكثرت الأفعال المصرّفة، ولهذا يُعدّ التمرّن عليها شرطاً لفهم المقالات الأكاديمية وأخبار العلم والاقتصاد. ومن جهة الإنتاج، يمنح إتقان هذا التركيب الكاتب قدرة على ضغط معلومات كثيرة في جملة واحدة قصيرة نسبياً — وهي المهارة التي تُقاس فعلياً في الكتابة الرسمية لمستوى B2.",
      table: {
        title: "من الجملة الموصولة إلى الصفة المشتقة",
        columns: ["الأصل", "النوع", "الصفة المشتقة", "المعنى"],
        rows: [
          { label: "der Mann, der arbeitet", cells: ["Partizip I", "der arbeitende Mann", "فاعل ومستمر"] },
          { label: "das Buch, das gelesen wurde", cells: ["Partizip II", "das gelesene Buch", "مفعول ومنتهٍ"] },
          { label: "das Kind, das schläft", cells: ["Partizip I", "das schlafende Kind", "فاعل ومستمر"] },
          { label: "die Aufgabe, die gelöst wurde", cells: ["Partizip II", "die gelöste Aufgabe", "مفعول ومنتهٍ"] },
          { label: "das Problem, das gelöst werden muss", cells: ["zu + Partizip I", "das zu lösende Problem", "واجب الحل"] },
        ],
      },
      examples: [
        { de: "Die steigende Arbeitslosigkeit ist ein Problem.", ar: "البطالة المتزايدة مشكلة." }, { de: "Das vorgeschlagene Gesetz wird diskutiert.", ar: "القانون المقترح قيد النقاش." }, { de: "Die steigenden Preise beunruhigen die Kunden.", ar: "الأسعار المرتفعة تقلق الزبائن." }, { de: "Das vom Chef unterschriebene Dokument liegt hier.", ar: "الوثيقة الموقّعة من المدير موجودة هنا." }, { de: "Die zu treffende Entscheidung ist schwierig.", ar: "القرار الواجب اتخاذه صعب." }, { de: "Die in der Studie gemessene Wirkung war überraschend.", ar: "الأثر الذي قِيس في الدراسة كان مفاجئاً." }
      ],
      comparisonWithArabic: "العربية تملك اسم الفاعل (العامل) واسم المفعول (المقروء)، وهو تقابل قريب من Partizip I وPartizip II. الفارق أن الألمانية تسمح بإدخال عبارة كاملة بين الأداة والاسم: das vom Chef unterschriebene Dokument — وهذا التركيب أقل شيوعاً في العربية، فنلجأ غالباً إلى جملة موصولة.",
      eselsbruecke: "Partizip I يُصنع بإضافة d إلى المصدر (arbeiten صار arbeitend) ويدل على فعل جارٍ. وPartizip II هو اسم المفعول ويدل على أثر منتهٍ. ثم صرّف كليهما كأي صفة عادية قبل الاسم.",
      commonMistakes: [
        { wrong: "der arbeitend Mann", right: "der arbeitende Mann", whyAr: "الصفة المشتقة تُصرَّف كأي صفة، فتأخذ النهاية في محلّها: der arbeitende Mann في الرفع المذكّر. وحذف النهاية خطأ شائع عند من يعامل المشارك كفعل لا كصفة، لأن الفعل لا يأخذ نهاية." },
        { wrong: "die gelesende Zeitung", right: "die gelesene Zeitung", whyAr: "المقصود أثر منتهٍ فيلزم Partizip II (gelesen) لا Partizip I." },
        { wrong: "das lösende Problem", right: "das zu lösende Problem", whyAr: "للدلالة على الوجوب أو الإمكان تُضاف zu قبل Partizip I: das zu lösende Problem. وبدون zu يتحوّل المعنى من وجوب إلى فاعلية جارية، فتقرأ «das lösende Problem» كأن المشكلة هي التي تحلّ، وهو معنى مغاير تماماً." },
      ],
      relatedRuleComparison: {
        title: "صفة مشتقة أم جملة موصولة؟",
        content: "المعنى واحد لكن الأسلوب يختلف: الصفة المشتقة مكثّفة وسمة للنصوص المكتوبة والصحفية، والجملة الموصولة أوضح وأخفّ وهي المفضّلة في الكلام. السيطرة على التركيب الأول تُظهر تمكّناً أسلوبياً.",
      },
    },
  ];
