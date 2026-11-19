/**
 * b1-07 — شرح الجمل الزمنية والتخالفية
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
  {
    id: "t1",
    titleAr: "الجمل الزمنية: als أم wenn أم während...؟",
    titleDe: "Temporale Nebensätze: als, wenn, während, bevor, nachdem, bis",
    explanationAr:
      "تربط الجملة الزمنية حدثين وتوضح علاقتهما الزمنية. تُستعمل als عادةً لوقت أو حالة ماضية محددة، سواء أكانت لحظة أم فترة: Als ich jung war, lebte ich in Tunis. أمّا wenn فتُستعمل للحاضر أو المستقبل، وللشرط، وكذلك للأحداث المتكررة في الماضي: Wenn ich früher Zeit hatte, las ich viel. لذا لا يكفي أن نقول إن als «لحظة قصيرة» أو إن wenn للحاضر فقط.\n\nتصف الأدوات الأخرى العلاقة الزمنية: während للتزامن، bevor لحدث يقع قبل حدث آخر، nachdem لحدث يسبق زمنياً ما في الجملة الرئيسية، وbis لنقطة النهاية. لا تفرض nachdem وحدها قالباً واحداً للأزمنة؛ اختر الزمن بحسب السياق، مثلاً: Nachdem ich gegessen habe, gehe ich schlafen؛ وNachdem ich gegessen hatte, ging ich schlafen.\n\nفي هذه الجمل التابعة يأتي الفعل المصرف في النهاية. وإذا تقدمت الجملة التابعة، فهي تشغل الحقل الأول في الجملة المركبة، ويأتي بعدها مباشرة الفعل المصرف في الجملة الرئيسية، ثم الفاعل: Als ich jung war, lebte ich in Tunis. هذا ترتيب الفعل الثاني (V2)، لا الفعل الأول.",
    whyAr:
      "قد تقابل als وwenn أداة «عندما» في العربية، لكن الاختيار الألماني يعتمد على المعنى والسياق: als لوقت ماضٍ محدد، وwenn لشرط أو وقت حاضر/مستقبل، وكذلك لما يتكرر في الماضي. وقد تعبّر العربية عن التكرار بـ«كلما»، لكن لا توجد مطابقة آلية كلمةً بكلمة؛ افهم العلاقة الزمنية أولاً.\n\nللمراجعة اسأل: هل أتحدث عن فترة ماضية محددة، أم عن شرط/عادة/تكرار؟ ثم تحقق من ترتيب الفعل: الفعل المصرف في نهاية الجملة التابعة، وبعد جملة متقدمة يأتي فعل الجملة الرئيسية مباشرة.",
    table: {
      title: "أدوات الزمن الست",
      columns: ["الأداة", "المعنى", "الاستخدام", "مثال"],
      rows: [
        { label: "als", cells: ["عندما", "وقت أو حالة ماضية محددة", "Als ich jung war, lebte ich in Tunis."] },
        { label: "wenn", cells: ["عندما/كلما/إذا", "حاضر أو مستقبل أو شرط أو تكرار ماضٍ", "Wenn ich Zeit habe, lese ich."] },
        { label: "während", cells: ["بينما", "التزامن", "Während sie arbeitet, hört sie Musik."] },
        { label: "bevor", cells: ["قبل أن", "حدث يسبق آخر", "Bevor wir wählen, diskutieren wir."] },
        { label: "nachdem", cells: ["بعد أن", "الحدث في التابعة أسبق زمنياً", "Nachdem ich gegessen habe, gehe ich schlafen."] },
        { label: "bis", cells: ["حتى", "حدّ زمني", "Wir warten, bis die Regierung antwortet."] },
      ],
    },
    examples: [
      { de: "Als ich in Tunesien lebte, war vieles neu für mich.", ar: "عندما كنت أعيش في تونس، كان كثير من الأشياء جديداً عليّ." },
      { de: "Wenn ich nach Deutschland komme, besuche ich dich.", ar: "عندما آتي إلى ألمانيا سأزورك." },
      { de: "Wenn ich früher frei hatte, las ich oft.", ar: "كلما كنت متفرغاً في الماضي، كنت أقرأ كثيراً." },
      { de: "Während sie arbeitet, hört sie Musik.", ar: "بينما تعمل تستمع إلى الموسيقى." },
      { de: "Bevor wir wählen, vergleichen wir die Programme.", ar: "قبل أن ننتخب نقارن البرامج." },
      { de: "Nachdem das Gesetz geändert worden war, änderte sich vieles.", ar: "بعد أن تغيّر القانون، تغيّرت أشياء كثيرة." },
      { de: "Bis die Regierung antwortet, warten die Bürger.", ar: "ينتظر المواطنون حتى تجيب الحكومة." },
    ],
    comparisonWithArabic:
      "قد تُترجم als إلى «عندما»، وwenn إلى «عندما/إذا/كلما» بحسب السياق؛ لذلك لا تحفظ مقابلاً واحداً لكل أداة. أمّا während وbevor وnachdem وbis فتقارب «بينما» و«قبل أن» و«بعد أن» و«حتى». في الألمانية انتبه خصوصاً إلى نهاية الفعل في التابعة وإلى ترتيب الفعل الثاني في الرئيسية إذا تقدمت التابعة.",
    eselsbruecke:
      "وقت ماضٍ محدد؟ غالباً als. شرط أو حاضر/مستقبل أو تكرار ماضٍ؟ غالباً wenn. ثم افحص ترتيب الفعل في الجملتين.",
    commonMistakes: [
      {
        wrong: "Als ich Zeit habe, lerne ich. (المقصود: كلما كان عندي وقت)",
        right: "Wenn ich Zeit habe, lerne ich.",
        whyAr: "في هذا المعنى الشرطي/المتكرر يناسب wenn. لكن wenn تُستعمل أيضاً للتكرار في الماضي؛ ليست محصورة بالحاضر أو المستقبل.",
      },
      {
        wrong: "Als ich 20 bin, ... (في حكاية عن الماضي)",
        right: "Als ich zwanzig Jahre alt war, ...",
        whyAr: "السياق هنا ماضٍ، لذا جاء الفعل war. ويمكن أن تدل جملة als على فترة ماضية، لا على لحظة فقط. والتعبير zwanzig Jahre alt يوضح العمر.",
      },
      {
        wrong: "Nachdem ich gegessen, gehe ich schlafen. (جملة تامة مقصودة)",
        right: "Nachdem ich gegessen habe, gehe ich schlafen.",
        whyAr: "في هذا المثال جملة Perfekt تامة؛ يتكوّن الفعل من Partizip II والمساعد المصرف، ويأتي المساعد في نهاية الجملة التابعة. لا يعني ذلك أن nachdem يفرض دائماً زوجاً شكلياً واحداً من الأزمنة.",
      },
    ],
    relatedRuleComparison: {
      title: "weil أم da؟",
      content: "كلاهما يقدّم سبباً، ويأتي الفعل المصرف في نهاية الجملة التابعة: weil es regnet؛ da es regnet. يختار المتكلم بينهما بحسب السياق والأسلوب.",
    },
  },
  {
    id: "t2",
    titleAr: "الجمل التخالفية: obwohl (رغم أن)",
    titleDe: "Der konzessive Nebensatz: obwohl, obgleich, obschon",
    explanationAr:
      "تقدّم الجملة مع obwohl معلومةً قد تجعل النتيجة في الجملة الأخرى غير متوقعة، لكن النتيجة تقع رغم ذلك: Obwohl es regnet, gehe ich spazieren. لا تفترض الأداة أن المتكلم اتخذ قراراً واعياً بعكس سبب أو أنه يعرفه شخصياً؛ إنها تربط المعنيين على نحو تخالفي.\n\nتأتي الجملة التابعة مع obwohl والفعل المصرف في نهايتها. وإذا تقدمت التابعة شغلت الحقل الأول، ويأتي الفعل المصرف في الجملة الرئيسية مباشرة بعدها: Obwohl es regnet, gehe ich spazieren. (الفعل gehe في الموقع الثاني). ويمكن أن تتأخر التابعة: Ich gehe spazieren, obwohl es regnet. تفصل الفاصلة بين التابعة والرئيسية في المثالين.\n\nتؤدي obgleich وobschon معنى قريباً من obwohl وتدخلان جملة تابعة. يصف Duden كلمة obschon بأنها gehoben (من مستوى أسلوبي رفيع)، لا بأنها غير مستعملة. أمّا trotzdem فتستعمل هنا ظرفاً رابطاً في جملة رئيسية: Es regnet. Trotzdem gehe ich spazieren. وإذا جاء trotzdem في أول الجملة الرئيسية تبعه الفعل المصرف مباشرة. وتقارن الصيغتان بجملة اسمية بعد trotz: Trotz des Regens gehe ich spazieren؛ هنا يأتي اسم، لا جملة تابعة كاملة.",
    whyAr:
      "اختر obwohl عندما تريد جملة تابعة كاملة، وtrotzdem عندما تريد جملة رئيسية أخرى بمعنى «رغم ذلك». لا تُسقط ترتيب إحدى اللغتين على الأخرى: في التابعة الألمانية ينتهي الفعل المصرف، وفي الرئيسية يظل الفعل المصرف في الموقع الثاني. وتساعد أمثلة مثل المطر والمشي على رؤية التخالف من دون افتراض قصد أو موقف نفسي للمتكلم. عند التصحيح، افحص الجملة كلها: موضع الفعل في التابعة، وموقع الفعل المصرف بعد التابعة المتقدمة، ثم تحقق هل الأداة المختارة تفتح جملة تابعة أم تربط جملة رئيسية. ويمكن أن تقارن أيضاً رغم + اسم بـtrotz des Regens، مع الانتباه إلى اختلاف نوع التركيب.",
    table: {
      title: "obwohl وأخواتها",
      columns: ["الأداة", "المعنى", "التركيب/الاستعمال", "مثال"],
      rows: [
        { label: "obwohl", cells: ["رغم أن", "أداة جملة تابعة؛ شائعة", "Obwohl es regnet, gehe ich spazieren."] },
        { label: "obgleich", cells: ["رغم أن", "أداة جملة تابعة", "Obgleich er krank war, kam er."] },
        { label: "obschon", cells: ["رغم أن", "أداة تابعة؛ يصفها Duden بأنها gehoben", "Obschon es spät war, blieben wir."] },
        { label: "trotzdem", cells: ["رغم ذلك", "ظرف رابط في جملة رئيسية؛ الفعل المصرف ثانياً", "Es regnete. Trotzdem ging ich spazieren."] },
      ],
    },
    examples: [
      { de: "Obwohl ich müde war, habe ich gelernt.", ar: "رغم أنني كنت متعباً، تعلمت." },
      { de: "Obwohl die Wahl wichtig ist, gehe ich heute nicht hin.", ar: "رغم أهمية الانتخاب، لن أذهب اليوم." },
      { de: "Obgleich das Gesetz streng ist, wird es oft nicht beachtet.", ar: "رغم أن القانون صارم، كثيراً ما لا يُراعى." },
      { de: "Die Bürger protestieren, obwohl die Regierung nachgibt.", ar: "يحتج المواطنون رغم أن الحكومة تتراجع." },
      { de: "Es regnete. Trotzdem ging ich spazieren.", ar: "هطل المطر. ومع ذلك تمشيت." },
      { de: "Ich gehe spazieren, obwohl es regnet.", ar: "أتمشى رغم أن المطر يهطل." },
    ],
    comparisonWithArabic:
      "تقابل obwohl غالباً «رغم أن/مع أن»، وتقابل trotzdem «رغم ذلك/ومع ذلك». الترجمة تنقل المعنى، لكن ترتيب الكلمات الألماني يبقى خاصاً به: فعل التابعة في النهاية، وفعل الرئيسية في الموقع الثاني. وقد تترجم الصيغة الاسمية trotz + Genitiv إلى «رغم + اسم»؛ فهي ليست جملة فرعية ولا تحتاج فعلاً تابعاً. لذلك انظر إلى بنية الألمانية قبل اختيار المقابل العربي، ولا تفترض تطابق ترتيب الكلمات بين اللغتين.",
    eselsbruecke:
      "obwohl + جملة تابعة (الفعل المصرف في النهاية). trotzdem + جملة رئيسية (الفعل المصرف في الموقع الثاني).",
    commonMistakes: [
      {
        wrong: "Obwohl es regnet, ich gehe spazieren.",
        right: "Obwohl es regnet, gehe ich spazieren.",
        whyAr: "الجملة التابعة المتقدمة تشغل الحقل الأول؛ لذلك يأتي الفعل المصرف في الجملة الرئيسية مباشرة بعدها: gehe. هذا هو ترتيب الفعل الثاني، لا الفعل الأول.",
      },
      {
        wrong: "Obwohl es regnet. (كنص كامل مستقل في كتابة معيارية)",
        right: "Obwohl es regnet, gehe ich spazieren.",
        whyAr: "في الكتابة المعيارية، obwohl تفتح جملة تابعة تحتاج إلى جملة رئيسية تكملها. قد تظهر الشذرات في الحوار لأغراض أسلوبية، لكن المثال هنا مقصود بوصفه جملة كاملة.",
      },
      {
        wrong: "Es regnete. Trotzdem ich ging.",
        right: "Es regnete. Trotzdem ging ich.",
        whyAr: "في الاستعمال المستهدف هنا، trotzdem يربط جملة رئيسية؛ وعندما يأتي أولاً يتبعه الفعل المصرف في الموقع الثاني. تجنب استعماله كأداة تابعة في هذا المستوى.",
      },
    ],
    relatedRuleComparison: {
      title: "obwohl أم trotzdem أم trotz + Genitiv؟",
      content: "obwohl + جملة تابعة (الفعل في النهاية): Obwohl es regnet, ... · trotzdem + جملة رئيسية (الفعل المصرف ثانياً): Es regnet. Trotzdem gehe ich. · trotz + اسم: Trotz des Regens gehe ich.",
    },
  },
];
