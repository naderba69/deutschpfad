/**
 * b2-06 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "الاشتقاق الاسمي (Nominalisierung)",
      titleDe: "Die Nominalisierung: lesen → das Lesen",
      explanationAr:
        "الاشتقاق الاسمي عملية صرفية أو تركيبية تُنتج اسماً من فعل أو تجعل بنية فعلية تؤدي وظيفة اسمية: lesen → das Lesen، verbessern → die Verbesserung. ويتصرف الاسم الناتج كاسم، وقد يأخذ أداة تعريف وصفة ومتمّماً مثل المضاف إليه: die Verbesserung der Arbeitsbedingungen. وهو سمة بارزة في الأسلوب الاسمي، الذي يكثر في بعض النصوص التقنية والإدارية، لكنه ليس قاعدة تفصل ببساطة بين الرسمي واليومي.\n\nومن صوره العملية: (1) المصدر المستعمل اسماً، مثل das Lesen وbeim Lesen وzum Nachdenken؛ (2) اسم مشتق بلاحقة، مثل die Verbesserung وdie Möglichkeit؛ و(3) إعادة صياغة اسمية لبنية فعلية. لكن إعادة الصياغة ليست استبدالاً آلياً: «weil die Bedingungen verbessert werden» تعني أن تحسّن الظروف سببٌ لشيء آخر، بينما «die Verbesserung der Bedingungen» تسمّي الحدث فقط. للحفاظ على العلاقة السببية يمكن أن نقول: «Wegen der Verbesserung der Bedingungen …» أو نُبقي الجملة بـ «weil».\n\nيسمح الأسلوب الاسمي بتكثيف المعلومات، لكنه قد يراكم المتمّمات ويحجب الفاعل أو العلاقة المنطقية. لذلك اختر الصيغة بحسب المعنى والسياق، ووازن الكتل الاسمية بجمل فعلية واضحة. وللأسلوب ثمنه: إذا حوّل المتعلّم كل فعل إلى اسم، تراكمت المضافات وضاع الفاعل، فصارت الجملة ثقيلة غامضة (die Verbesserung der Bedingungen der Beschäftigten im Betrieb). والقاعدة العملية أن يوازن النصّ: كتلة اسمية طويلة + جملة فعلية قصيرة تفكّ الضغط وتُظهر من يفعل ماذا.\n\n",
      whyAr:
        "تساعد الأسماء المشتقة على تسمية الأحداث والحديث عنها لاحقاً (diese Verbesserung)، وقد تزيد كثافة بعض النصوص التقنية والإدارية؛ لكن ذلك يختلف باختلاف النوع والسياق، ولا يعني أن كل صياغة اسمية رسمية أو أن الجملة الفعلية يومية بالضرورة. والمكسب العملي للمتعلّم مزدوج: يفكّك النص في القراءة (in den Betrieben → «في المصانع» متمّم للمضاف إليه)، ويكتب كتلاً اسمية سليمة في التقرير. ومن النقاط الإملائية المهمة كتابة المصدر المستعمل اسماً بحرف كبير (das Lesen)، والانتباه إلى المتمّم الذي يحتاجه الاسم في سياقه.",
      table: {
        title: "تحويل الأفعال إلى أسماء",
        columns: ["الفعل", "الاسم", "مثال في جملة"],
        rows: [
          { label: "lesen", cells: ["das Lesen", "Beim Lesen lernt man."] },
          { label: "arbeiten", cells: ["die Arbeit", "Die Arbeit ist wichtig."] },
          { label: "verbessern", cells: ["die Verbesserung", "Die Verbesserung der Bedingungen."] },
          { label: "nachdenken", cells: ["das Nachdenken", "Zum Nachdenken braucht man Zeit."] },
          { label: "schreiben", cells: ["das Schreiben", "Das Schreiben ist anstrengend."] },
        ],
      },
      examples: [
        { de: "Beim Lesen erweitert man den Wortschatz.", ar: "بالقراءة يوسع المرء مفرداته." },
        { de: "Zum Nachdenken braucht man Ruhe.", ar: "للتفكير يحتاج المرء هدوءاً." },
        { de: "Die Verbesserung der Arbeitsbedingungen ist wichtig.", ar: "تحسين ظروف العمل مهم." },
        { de: "Nach dem Schreiben sollte man den Text lesen.", ar: "بعد الكتابة يجب قراءة النص." },
        { de: "Die Zusammenarbeit mit Kollegen ist entscheidend.", ar: "التعاون مع الزملاء حاسم." },
        { de: "Zur Vorbereitung auf das Gespräch gehört eine kurze Recherche.", ar: "من التحضير للمقابلة بحثٌ قصير عن الشركة." },
      ],
      comparisonWithArabic:
        "«بالقراءة يتعلم المرء» تقابلها «Beim Lesen lernt man»، وتوضح المقارنة كيف يعمل حرف الجر مع المصدر المستعمل اسماً. لكن التشابه لا يجعل البنيتين متطابقتين دائماً: الألمانية تكتب هذا المصدر بحرف كبير، وقد تستخدم Genitiv أو von + Dativ بحسب التركيب والسياق. انظر إلى الجملة كاملة وإلى وظيفة المتمّم قبل الاختيار، ولا تعمّم أن أحد التركيبين رسمي والآخر محادثي. كما أن تحويل جملة إلى كتلة اسمية قد يغيّر علاقة السبب أو الزمن أو الفاعل؛ لذا يجب أن تحفظ إعادة الصياغة المعنى لا الكلمات وحدها.",
      eselsbruecke:
        "«الفعل → das + مصدر»: lesen → das Lesen. و«beim = عند + اسم»: beim Lesen = عند القراءة. و«zum = للـ»: zum Nachdenken = للتفكير.",
      commonMistakes: [
        { wrong: "beim lesen (حرف صغير)", right: "beim Lesen (اسم بحرف كبير)", whyAr: "المصدر المستعمل اسماً يُكتب بحرف كبير: das Lesen لا das lesen. الحرف الكبير علامة كتابية تساعد على تمييز الاسم هنا." },
        { wrong: "das Lernen أم lernen؟", right: "اسم → das Lernen. فعل → lernen", whyAr: "المصدر بالأداة das اسم كامل: يقبل الصفة (das schnelle Lesen) وحرف الجر (beim Lesen)، أما الفعل فيُصرَّف مع فاعله. ومن لم يفرّق بينهما كتب جملة تعمل شكلاً وتفشل في المعنى." },
        { wrong: "Die Verbesserung von أم der Bedingungen؟", right: "die Verbesserung der Bedingungen (Genitiv)", whyAr: "يشيع Genitiv في التراكيب مثل die Verbesserung der Bedingungen، ويمكن أن تلائم von + Dativ سياقات أخرى. اختر التركيب وفق المعنى والاستعمال؛ لا تُحوّل الفرق إلى قاعدة جامدة بين الرسمي والمحادثي." },
      ],
      relatedRuleComparison: {
        title: "صياغة فعلية وصياغة اسمية",
        content: "Wenn man liest, lernt man. (صياغة فعلية) → Beim Lesen lernt man. (صياغة اسمية). أما «weil die Bedingungen verbessert werden» فلا تستبدلها بمجرد «die Verbesserung der Bedingungen» إذا أردت إبقاء علاقة السبب؛ أعد الصياغة مع الحفاظ على المعنى.",
      },
    },
    {
      id: "t2",
      titleAr: "أدوات الربط المتقدمة للسبب والنتيجة",
      titleDe: "Kausale und konsekutive Konnektoren",
      explanationAr: "تختلف أدوات السبب في تركيبها واستعمالها، لا في درجات رسمية ثابتة. «weil» تدخل جملة تابعة وفعلها في النهاية. و«da» تدخل جملة تابعة أيضاً، وكثيراً ما تقدّم السبب في بداية الجملة، وقد تلائم سياقاً يُقدَّم فيه السبب بوصفه معلوماً أو خلفية؛ هذا ميل استعمالي لا شرط لازم. و«zumal» تضيف سبباً مُرجِّحاً إلى سبب سابق (خاصة أن)، وتصلح للتقوية لا للتفسير الأول.\n\nأما أدوات النتيجة فمنها ما هو ظرف ومنها ما هو ربط. «deshalb / darum / deswegen / daher» ظروف تشغل المركز الأول من الجملة، فيأتي الفعل المصرّف بعدها مباشرة (deshalb bleibe ich). و«sodass» ربط يفتح جملة ثانوية فينتقل الفعل إلى نهايتها. و«so ... dass» يوزّع النتيجة: so يحمل درجة الكمية في الجملة الرئيسية، وdass يفتح الجملة الثانوية التي تصف النتيجة (Es ist so teuer, dass niemand kauft).\n\nومن الملاحظات الأسلوبية في هذا الباب جمع أداتَي سبب ونتيجة للتعبير عن العلاقة نفسها: «Weil es regnet, deshalb bleibe ich» تُعدّ في كثير من أدلة التحرير ازدواجاً غير معياري، وإن ظهرت في الاستعمال المنطوق. في الكتابة المنقّحة اختر رابطاً واحداً: «Weil es regnet, bleibe ich» أو «Es regnet, deshalb bleibe ich». هذه نصيحة أسلوبية وليست ادعاءً أن كل جمع بين السبب والنتيجة مستحيل نحوياً.\n\nللأدوات فروق في المعنى والاستعمال، كما توجد ميول أسلوبية وليست حدوداً جامدة: «denn» تربط جملتين رئيسيتين، و«da» تقدّم سبباً، و«zumal» تضيف سبباً مرجّحاً، و«deshalb» تقدّم نتيجة. لا تختزل اختيارها في سلّم رسمي/عامي. ويمكن تنويع الأدوات متى خدم ذلك المعنى والوضوح، من دون قاعدة عددية تمنع تكرار weil.\n\n",
      whyAr: "لماذا هذا التنويع؟ لأن تنويع الأدوات يجعل الأسلوب أدقّ وأقرب إلى الكتابة الرسمية، ويُظهر للمستمع أو القارئ ما إذا كان ما سيأتي سبباً أو نتيجة قبل أن يكتمل المعنى: فقد تعرض جملة «da» سبباً أو خلفية، بينما تقدّم «deshalb» نتيجةً مترتبة في السياق. يمكن تنويع الأدوات لتحسين الترابط، لكن تكرار weil ليس بحد ذاته خطأً نحوياً ولا دليلاً على ضعف الفهم؛ الأولوية لصحة العلاقة والمعنى.",
      table: {
        title: "أدوات السبب والنتيجة وموضع الفعل",
        columns: ["الأداة", "المعنى", "موضع الفعل", "مثال"],
        rows: [
          { label: "weil", cells: ["لأن (عامة)", "في النهاية", "Ich bleibe, weil es regnet."] },
          { label: "da", cells: ["بما أن (سبب أو خلفية)", "في النهاية", "Da es regnet, bleibe ich."] },
          { label: "denn", cells: ["لأن (ربط متساوٍ)", "لا تغيير", "Ich bleibe, denn es regnet."] },
          { label: "deshalb", cells: ["لذلك (نتيجة)", "ثانياً بعده", "Es regnet, deshalb bleibe ich."] },
          { label: "sodass", cells: ["بحيث (نتيجة)", "في النهاية", "Es regnet, sodass ich bleibe."] },
        ],
      },
      examples: [
        { de: "Da die Kosten steigen, müssen wir sparen.", ar: "بما أن التكاليف ترتفع، يجب أن ندخر." }, { de: "Die Nachfrage ist so hoch, dass die Preise steigen.", ar: "الطلب مرتفع لدرجة أن الأسعار ترتفع." }, { de: "Da die Nachfrage gestiegen ist, wurden die Preise erhöht.", ar: "بما أن الطلب ارتفع، رُفعت الأسعار." }, { de: "Die Firma expandiert, denn der Umsatz wächst.", ar: "الشركة تتوسع، لأن المبيعات تنمو." }, { de: "Er sprach so leise, dass ihn niemand verstand.", ar: "تحدث بصوت خافت لدرجة أن أحداً لم يفهمه." },
        { de: "Das Gehalt ist so niedrig, dass viele Bewerber absagen.", ar: "الراتب منخفض إلى حدّ أن كثيراً من المتقدمين يعتذرون." },
      ],
      comparisonWithArabic: "العربية تستخدم «لأن» و«لذلك» في سياقات كثيرة، ولديها أيضاً صيغ مثل «بما أن» و«خاصة أن» و«لذا». هذه مقابلات تقريبية: «da» و«zumal» و«deshalb» و«sodass» تختلف في الوظيفة والسياق، ولا تقابلها أداة عربية واحدة في كل موضع. انتبه إلى ترتيب الفعل الألماني: نهاية الجملة التابعة بعد weil/da/sodass، والمركز الثاني بعد deshalb.",
      eselsbruecke: "احفظ ثلاث فئات: ثانوية ترمي الفعل إلى النهاية (weil، da، sodass)، ومتساوية لا تحرّك شيئاً (denn، aber، und)، وظرفية تحتل المرتبة الأولى فيليها الفعل (deshalb، deswegen، daher).",
      commonMistakes: [
        { wrong: "Ich bleibe, denn es regnet draußen stark ist.", right: "Ich bleibe, denn es regnet draußen stark.", whyAr: "بعد denn يأتي الفعل في موضعه كما في الجملة الرئيسية؛ وجود فعل إضافي في آخرها خطأ." },
        { wrong: "Es regnet, deshalb ich bleibe zu Hause.", right: "Es regnet, deshalb bleibe ich zu Hause.", whyAr: "deshalb ظرف رابط يشغل المرتبة الأولى، فيأتي الفعل ثانياً قبل الفاعل." },
        { wrong: "Weil es regnet, deshalb bleibe ich.", right: "Weil es regnet, bleibe ich.", whyAr: "يجمع المثال رابطين يعبّران عن العلاقة نفسها؛ في الكتابة المنقّحة يُفضّل تجنّب هذا الازدواج وحذف deshalb: «Weil es regnet, bleibe ich». التركيب المزدوج شائع في الكلام، فلا نصفه بأنه مستحيل نحوياً." },
      ],
      relatedRuleComparison: {
        title: "weil أم da؟",
        content: "تدخل weil وda جملة تابعة وفعلها في النهاية. قد تبدأ جملة da بالسبب، وغالباً ما تعرضه بوصفه خلفية؛ أما weil فتُستخدم على نطاق واسع لذكر السبب. هذا فرق استعمالي تقريبي لا قاعدة تفصل العامي عن الرسمي.",
      },
    },
  ];
