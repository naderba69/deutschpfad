/**
 * a2-12 — الشرح النظري (الجزء «theorie»)
 * فُصل من a2-12.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "أدوات الربط: العادية والمقلوبة",
      titleDe: "Konnektoren: und, aber, denn / deshalb, trotzdem, dann",
      explanationAr:
        `أدوات الربط في الألمانية عائلتان، والفرق بينهما ليس في المعنى بل في أثرها على ترتيب الجملة. فاختيار الأداة الصحيحة نصف العمل، وترتيب ما بعدها هو النصف الثاني الذي يسقط فيه معظم المتعلّمين.

العائلة الأولى «عادية»: und (و)، aber (لكن)، oder (أو)، denn (لأنّ). عندما تربط هذه الأدوات جملتين، لا تجعل الجملة التالية جملةً ثانوية ولا ترسل فعلها إلى النهاية؛ بل يبقى ترتيب الجملة الرئيسية، والفعل المصرف في المرتبة الثانية. في «Ich bin müde, aber ich bin glücklich» جاء الفاعل ich قبل الفعل bin. وهذا مثال على الترتيب المعتاد، لا قاعدة تلزم الفاعل بأن يكون أول عنصر دائماً؛ فقد يسبق الفاعلَ عنصرٌ آخر مع بقاء الفعل في المرتبة الثانية.

العائلة الثانية «مقلوبة»: deshalb (لذلك)، trotzdem (رغم ذلك)، dann (ثم)، außerdem (علاوة على ذلك)، sonst (وإلاّ). وهذه إذا بدأت جملتها شغلت المكان الأول، فلا يبقى للفاعل مكان قبل الفعل: deshalb bleibe ich. أي أنّ ترتيب المقلوبة بعد الفاصلة هو: الأداة + الفعل المصرف + الفاعل + بقيّة الجملة، وهو ترتيب واحد لا يتغيّر.

وعمّال التمييز العملي: اسأل عن وظيفة الأداة لا عن شكلها. فإن كانت تربط ربطاً محايداً أو تعطي سبباً (und · aber · oder · denn) فهي عادية. وإن كانت تعطي نتيجة (deshalb) أو مفارقة (trotzdem) أو تسلسلاً زمنياً (dann) أو إضافة (außerdem) فهي مقلوبة، لأنّها بنفسها شغلت المكان الأول. ولهذا يظهر الخطأ الأشهر عند المتعلّم العربي في صورة جملة معناها صحيح تماماً وترتيبها مقلوب بالعكس.`,
      whyAr:
        "لماذا بعضها يقلب؟ لأنّ deshalb وtrotzdem وdann وaußerdem ظروفٌ رابطية تحتلّ المكان الأول في جملتها (das Vorfeld)، والمكان الأول مشغولٌ بها، فيأتي الفعل المصرف في المرتبة الثانية ثم الفاعل. أمّا und وaber وoder وdenn فتربط جملتين رئيسيتين من دون أن تجعل الثانية جملةً ثانوية؛ لذلك يبقى الفعل المصرف في المرتبة الثانية. وفي المثال المعتاد يسبق الفاعل الفعل، لكن يمكن أن يتقدّمه عنصر آخر من الجملة. والقاعدة الحاكمة لكل هذا: الفعل المصرف في المرتبة الثانية دائماً في الجملة الرئيسية، فمن احتلّ المرتبة الأولى من قبله دفع الفعل إلى الأمام وأزاح الفاعل إلى ما بعد الفعل.",
      table: {
        title: "أدوات الربط الأساسية",
        columns: ["الأداة", "المعنى", "الترتيب", "مثال"],
        rows: [
          { label: "und", cells: ["و", "عادي", "Ich lerne und ich arbeite."] },
          { label: "aber", cells: ["لكن", "عادي", "Ich bin müde, aber ich bin glücklich."] },
          { label: "oder", cells: ["أو", "عادي", "Tee oder Kaffee?"] },
          { label: "denn", cells: ["لأنّ", "عادي", "Ich bleibe, denn es regnet."] },
          { label: "deshalb", cells: ["لذلك", "مقلوب", "Es regnet, deshalb bleibe ich."] },
          { label: "trotzdem", cells: ["رغم ذلك", "مقلوب", "Es regnet, trotzdem gehe ich."] },
          { label: "dann", cells: ["ثم", "مقلوب", "Ich esse, dann schlafe ich."] },
        ],
      },
      examples: [
        { de: "Ich lerne Deutsch und meine Schwester lernt Englisch.", ar: "أتعلم الألمانية وأختي تتعلم الإنجليزية." },
        { de: "Ich bin müde, aber ich bin glücklich.", ar: "أنا متعب لكنني سعيد." },
        { de: "Es regnet, deshalb bleibe ich zu Hause.", ar: "تمطر، لذلك أبقى في البيت." },
        { de: "Es ist kalt, trotzdem gehe ich spazieren.", ar: "الجو بارد، ومع ذلك أذهب في نزهة." },
        { de: "Erst lerne ich, dann sehe ich fern.", ar: "أولاً أتعلم، ثم أشاهد التلفاز." },
        { de: "Ich bleibe heute zu Hause, denn ich bin krank.", ar: "أبقى في البيت اليوم لأنّني مريض." },
      ],
      comparisonWithArabic:
        "«لكن» = aber، و«لذلك» = deshalb، و«رغم ذلك» = trotzdem. المقارنة مع العربية تكشف أنّ المشكلة ليست في المعنى — فالمعاني متوافقة تماماً — بل في القالب الشكلي: العربية تسمح بـ«تمطر، لذلك أنا أبقى» مع تقديم الفاعل، أمّا الألمانية فتربط الأداة المقلوبة بموضع الفعل ربطاً إلزامياً فلا يجوز deshalb ich bleibe، بل deshalb bleibe ich. وكذلك denn: تعطي سبباً كـ«لأنّ» العربية لكنها تُبقي الترتيب العادي كما هو. والقاعدة العملية: حدّد العائلة أولاً، ثم رتّب الجملة على أساسها.",
      eselsbruecke:
        "«عائلة عادية: und-aber-oder-denn» (لا تلمس الفعل). «عائلة مقلوبة: deshalb-trotzdem-dann» (الفعل يقفز أولاً). احفظ العائلتين.",
      commonMistakes: [
        { wrong: "Es regnet, deshalb ich bleibe zu Hause.", right: "Es regnet, deshalb bleibe ich zu Hause.", whyAr: "deshalb ظرفٌ رابطيّ احتلّ المكان الأول، فأخذ الفعل المصرف المرتبة الثانية مباشرة وبقي الفاعل متأخّراً بعده، والصواب deshalb bleibe ich لا deshalb ich bleibe." },
        { wrong: "Ich bin müde, aber bin ich glücklich.", right: "Ich bin müde, aber ich bin glücklich.", whyAr: "aber من العائلة العادية: بعدها الفاعل مباشرة ولا تقلب الفعل." },
        { wrong: "Ich bleibe, deshalb es regnet.", right: "Ich bleibe, denn es regnet.", whyAr: "deshalb تعطي النتيجة لا السبب، ومعها يأتي الفعل مباشرة بعدها: Es regnet, deshalb bleibe ich. أما denn فتعطي السبب وتترك الترتيب العادي." },
      ],
      relatedRuleComparison: {
        title: "denn أم weil أم deshalb؟",
        content: "علاقة السبب والنتيجة بأدوات مختلفة: Ich bleibe, denn es regnet (عادية: السبب بعد الفاصلة). Ich bleibe, weil es regnet (ثانوية: الفعل في النهاية). Es regnet, deshalb bleibe ich (مقلوبة: النتيجة بعد السبب مع قلب الفعل). الأوليان تعطيان السبب والثالثة تعطي النتيجة، فلا تخلط بينها.",
      },
    },
    {
      id: "t2",
      titleAr: "obwohl: الاستدراك بفعل في النهاية",
      titleDe: "Der Konzessivsatz mit „obwohl“",
      explanationAr:
        `obwohl (رغم أنّ) أداة ربط ثانوية تفتح جملةً استدراكية، أي جملةً تعطي شيئاً يخالف المتوقَّع. وأهمّ ما فيها موضع الفعل: الفعل المصرف ينتقل إلى نهاية الجملة الثانوية. فتقول: Obwohl es regnet, gehe ich spazieren، فالفعل regnet في آخر الجملة الأولى، والفعل gehe في أوّل الجملة الرئيسية، لأنّ الجملة الثانوية حين تتصدّر الكلام تشغل المكان الأول كلّه.

وثلاثة فروق عملية يجب فصلها: الأوّل أنّ في المثال الخبري المعتاد تُقدَّم معلومة obwohl على أنها واقعة أو مسلّم بها (مثل: الجو ممطر فعلاً)، لكن هذا وصف للاستعمال الشائع هنا لا شرطٌ مطّرد لكل سياق. والثاني أنّ trotzdem ظرفٌ رابطيّ لا أداةَ ربط، فيقف في جملة ثانية مستقلّة أو بعد فاصلة ويليه الفعل مباشرة: Es regnet. Trotzdem gehe ich. والثالث أنّ trotz حرف جرّ يُعرض هنا مع Genitiv، وهو الاختيار الأشيع في الكتابة المعيارية عند وجود أداة تعريف (مثل des Regens)؛ وتوجد استعمالات أخرى مع Dativ بحسب السياق والاستعمال، ويكفيه اسمٌ فلا فعل بعده: Trotz des Regens gehe ich.

وموضع obwohl في مسارك: هي توسعةٌ تتجاوز الجرد الأساسي لهذا الدرس، وتُعرض مركّزةً في B1، فتعامل معها الآن للفهم والقراءة لا للحفظ الآلي. والإلمام بها يمنع خطأين شائعين: قلب الترتيب في الجملة الرئيسية بعد obwohl، وجمع obwohl مع trotzdem في الجملة نفسها.`,
      whyAr:
        "لماذا نتعلّمها الآن إذن؟ لأنّها توسعةٌ اختيارية في باب الاستدراك، وتتجاوز الجرد الأساسي لـA2 (وتُعرض مركّزةً في B1). والفائدة الأولى عملية: فهم ما تقرؤه وتسمعه في نصوص الألمانية الحقيقية، حيث تتناوب obwohl وtrotzdem وaber على التعبير عن المفارقة وكلٌّ منها يترك أثراً مختلفاً في الترتيب. والفائدة الثانية تمييزية: obwohl أداةٌ ثانوية تُتبع بجملةٍ وفعلها في النهاية، وtrotzdem ظرفٌ رابطيّ يأتي في جملة مستقلّة أو بعد فاصلة ويليه الفعل مباشرة، وtrotz حرف جرّ يكفيه اسم، ويُعرض هنا مع Genitiv. ولهذا لا تُطوَّل تمارين هذا الدرس المقيّمة على obwohl، فالأساس هنا هو العائلتان في الكتلة السابقة.",
      table: {
        title: "obwohl وأخواتها في التعبير عن الاستدراك",
        columns: ["الأداة", "نوعها", "موضع الفعل", "مثال"],
        rows: [
          { label: "obwohl", cells: ["أداة ربط ثانوية", "في النهاية", "Obwohl es regnet, gehe ich."] },
          { label: "trotzdem", cells: ["ظرف رابط", "ثانياً بعده", "Es regnet. Trotzdem gehe ich."] },
          { label: "aber", cells: ["أداة ربط متساوية", "لا تغيير", "Es regnet, aber ich gehe."] },
          { label: "trotz + Genitiv", cells: ["حرف جر", "لا فعل بعده", "Trotz des Regens gehe ich."] },
          { label: "dennoch", cells: ["ظرف رابط رسمي", "ثانياً بعده", "Es regnet, dennoch gehe ich."] },
        ],
      },
      examples: [
        { de: "Obwohl ich müde bin, lerne ich weiter.", ar: "رغم أنني متعب، أواصل التعلم." }, { de: "Sie kommt, obwohl sie keine Zeit hat.", ar: "تأتي رغم أنها بلا وقت." }, { de: "Obwohl er müde war, hat er weitergearbeitet.", ar: "رغم أنه كان متعباً، واصل العمل." }, { de: "Sie spricht gut Deutsch, obwohl sie erst ein Jahr hier ist.", ar: "تتحدث الألمانية جيداً رغم أنها هنا منذ سنة فقط." }, { de: "Trotz der Kälte sind wir spazieren gegangen.", ar: "رغم البرد ذهبنا للتنزّه." },
        { de: "Obwohl sie wenig Zeit hat, hilft sie jeden Tag ihrer Nachbarin.", ar: "رغم أنّ وقتها ضيّق، تساعد جارتها كلّ يوم." }
      ],
      comparisonWithArabic:
        "العربية تستعمل «رغم أنّ» مع الجملة و«رغم» مع الاسم المجرور، وهو التمييز نفسه بين obwohl وtrotz، فالمعنى قريبٌ من ذهن المتعلّم العربي منذ البداية. والفارق كامنٌ في الميكانيكا لا في الدلالة: الألمانية تنقل الفعل مع obwohl إلى نهاية الجملة الثانوية، وإذا تصدّرت الجملةُ الثانوية الكلام انتقل فعل الجملة الرئيسية إلى ما بعد الفاصلة مباشرة: Obwohl es regnet, gehe ich. أمّا trotz فتُتبع هنا باسم في Genitiv بلا فعل أصلاً؛ وهو الاختيار المعياري الشائع مع أداة التعريف: Trotz des Regens gehe ich. فالمعنى واحد والهندسة مختلفة، والخطأ المتوقَّع هو نسخ هندسة العربية إلى قالبٍ ألماني معناه صحيح وترتيبه مقلوب.",
      eselsbruecke: "obwohl تُتبع بجملة كاملة وترمي الفعل إلى النهاية، وtrotz تُتبع باسم مجرور. وإن بدأت الجملة بـ obwohl فتذكّر أن الجملة الرئيسية بعد الفاصلة تبدأ بالفعل: Obwohl es regnet, gehe ich.",
      commonMistakes: [
        { wrong: "Obwohl es regnet, ich gehe spazieren.", right: "Obwohl es regnet, gehe ich spazieren.", whyAr: "إذا تصدّرت الجملةُ الثانويةُ الكلامَ احتلّت المرتبة الأولى، فيأتي فعل الجملة الرئيسية مباشرة بعد الفاصلة." },
        { wrong: "Obwohl des Regens gehe ich.", right: "Trotz des Regens gehe ich.", whyAr: "obwohl أداة ربط تحتاج جملة، أما مع الاسم المجرور فالصواب حرف الجر trotz." },
        { wrong: "Obwohl er müde war, trotzdem hat er gearbeitet.", right: "Obwohl er müde war, hat er gearbeitet.", whyAr: "لا يجمع بين obwohl وtrotzdem في الجملة نفسها لأن كلاً منهما يؤدي الوظيفة كاملة." },
      ],
      relatedRuleComparison: {
        title: "obwohl أم weil؟",
        content: "weil تقدّم سبباً: Ich bleibe zu Hause, weil es regnet. أما obwohl فتقدّم ما يخالف المتوقّع: Ich gehe spazieren, obwohl es regnet. كلتاهما ترسل الفعل إلى نهاية الجملة الثانوية.",
      },
    },
  ];
