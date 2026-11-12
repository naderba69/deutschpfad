/**
 * b1-06 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-06.ts في المرحلة 5 (سقف الحجم).
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
  {
    id: "t1",
    titleAr: "تصريف الصفات (Adjektivdeklination) — الأنماط الثلاثة",
    titleDe: "Die Adjektivdeklination",
    explanationAr:
      "عندما تأتي الصفة قبل الاسم تتغير نهايتها بحسب الجنس والعدد والحالة، وبحسب الأداة السابقة. وللتعلّم نميز ثلاثة أنماط: الضعيف بعد أداة مصرفة مثل der gute Mann؛ والمختلط مع ein وأشباهها، إذ تأتي نهاية قوية حين لا تحمل صيغة الأداة نهاية ظاهرة (ein guter Mann، ein gutes Bild)، ونهاية ضعيفة بعد الصيغ ذات النهاية (einem guten Mann، einen guten Mann، eine gute Frau)؛ والقوي بلا أداة (guter Wein، frische Milch، mit gutem Wein). هذه طريقة عملية لتنظيم النهايات، وليست قاعدة تقول إن علامة الجنس والحالة تظهر مرة واحدة فقط. مثال: das schöne Bild · mit dem schönen Bild · die schönen Bilder.\n\nاقرأ النهاية ضمن تركيبها، لا منفصلةً عن الاسم: في «ein gutes Bild» لا تحمل الأداة ein علامةً ظاهرة للمحايد، فتظهر النهاية القوية -es على الصفة؛ أما «das gute Bild» فتحمل الأداة das علامة الجنس والحالة، فتأتي الصفة بـ -e. وفي «mit einem guten Bild» يدل حرف الجر mit على Dativ، وتحمل الأداة einem علامة الحالة، فتأخذ الصفة -en. هذه المقارنة الثلاثية تشرح سبب اختلاف النهاية في أمثلة متقاربة المعنى. وعند التصحيح سجّل الأداة والحالة مع المثال، ثم جرّب النمط على اسم جديد مثل Tisch أو Stadt بدلاً من ترديد الصيغة المحفوظة.",
    whyAr:
      "تساعدك هذه الأنماط على اختيار النهاية من الصيغة كاملة: قارن ein guter Mann (الأداة ein بلا نهاية ظاهرة في الرفع المذكر) بـ einem guten Mann (الأداة ذات نهاية ظاهرة، والصفة ضعيفة). واحفظ أمثلة متقابلة مع الحالة والجنس، لا تعميم «تظهر المعلومة مرة واحدة». وفي Dativ الجمع نقول mit den guten Leuten: تنتهي الأداة بـ -n، وللاسم جمع Dativ هنا نهاية -n أيضاً، وللصفة -en؛ لكل جزء تصريفه.\n\nعند تحليل مثال جديد، حدّد أولاً الحالة من وظيفة الاسم في الجملة: الفاعل غالباً في Nominativ، والمفعول المباشر في Akkusativ، وما يأتي بعد mit في Dativ. ثم افحص الأداة قبل أن تختار نهاية الصفة. قارن مثلاً: Ein freundlicher Nachbar hilft dem alten Mann. الأولى صفة قبل اسم مذكر مع ein في الرفع، والثانية بعد dem في الجر. لا تستنتج النهاية من معنى الصفة أو من الترجمة وحدهما؛ أداة الاسم وموقعه هما ما يوجهان الاختيار.",
    table: {
      title: "نهايات الصفات — النمط المختلط مع ein وأشباهها",
      columns: ["الحالة", "مذكر", "مؤنث", "محايد", "الجمع"],
      rows: [
        { label: "Nominativ", cells: ["ein guter Mann", "eine gute Frau", "ein gutes Kind", "keine guten Leute (kein لا ein)"] },
        { label: "Akkusativ", cells: ["einen guten Mann", "eine gute Frau", "ein gutes Kind", "keine guten Leute"] },
        { label: "Dativ", cells: ["einem guten Mann", "einer guten Frau", "einem guten Kind", "keinen guten Leuten"] },
      ],
    },
    examples: [
      { de: "Das ist ein wunderschönes Gemälde.", ar: "هذه لوحة رائعة الجمال." },
      { de: "Ich sehe einen interessanten Film.", ar: "أشاهد فيلماً مثيراً." },
      { de: "Wir besuchen das berühmte Museum.", ar: "نزور المتحف الشهير." },
      { de: "Sie wohnt in einer kleinen Stadt.", ar: "تسكن في مدينة صغيرة." },
      { de: "Mit einem guten Freund ist alles besser.", ar: "مع صديق جيد كل شيء أفضل." },
      { de: "Ich habe eine interessante Ausstellung gesehen.", ar: "شاهدت معرضاً فنياً مثيراً للاهتمام." },
    ],
    comparisonWithArabic:
      "في العربية الفصحى تتغير الصفة وتطابق الموصوف في وجوه منها الجنس والعدد والتعريف والإعراب: «الرجلُ الطويلُ» و«الرجلَ الطويلَ». لذلك لا يصح القول إن الصفة العربية ثابتة أو إن المطابقة تظهر في الأداة وحدها. لكن أشكال المطابقة في العربية ليست هي نهايات الصفات الألمانية؛ فلا تنقل نهايةً من لغة إلى الأخرى حرفياً. قارن أمثلة كاملة: «رجل طويل» وein großer Mann؛ فالصيغة الألمانية تعتمد على الأداة والحالة والجنس والعدد.",
    eselsbruecke:
      "بعد أداة معرّفة مصرفة: نهايات ضعيفة مثل der gute Mann. مع ein: قارن ein guter Mann / einem guten Mann. بلا أداة: guter Wein / mit gutem Wein. وبعد أدوات الكمية راجع المثال المحدد؛ فـ alle guten Leute وviele gute Leute يختلفان.",
    commonMistakes: [
      {
        wrong: "ein gute Mann",
        right: "ein guter Mann",
        whyAr: "في الرفع المذكر تأتي صيغة ein بلا نهاية ظاهرة، ولذلك نقول ein guter Mann. قارن ein gutes Kind؛ النهايتان -er و-es جزء من نمط التصريف القوي في هذين المثالين.",
      },
      {
        wrong: "Das schönes Bild (بعد das مباشرة)",
        right: "Das schöne Bild",
        whyAr: "بعد أداة التعريف المصرفة نقول das schöne Bild. لا تنقل نهاية -es من مثال مثل ein schönes Bild إلى تركيب مختلف.",
      },
      {
        wrong: "mit einem gute Freund",
        right: "mit einem guten Freund",
        whyAr: "بعد mit يأتي Dativ، وهنا الأداة einem تقتضي النمط الضعيف: einem guten Freund. لا تعمم -en على كل Dativ؛ بلا أداة نقول mit gutem Wein. وفي التحية mit freundlichen Grüßen تأخذ الصفة -en، والاسم جمع Dativ نهاية -n.",
      },
    ],
    relatedRuleComparison: {
      title: "الخبرية أم النعتية؟",
      content:
        "بعد sein لا تأخذ الصفة نهاية تصريفية: Das Bild ist schön. قبل الاسم تأخذ نهاية مناسبة للأداة والجنس والحالة: ein schönes Bild.",
    },
  },
  {
    id: "t2",
    titleAr: "تصريف الصفة بعد أدوات مختلفة",
    titleDe: "Adjektivdeklination nach verschiedenen Artikeln",
    explanationAr:
      "بعد الأداة المعرّفة المصرفة تأتي الصفة غالباً بالنمط الضعيف: -e في بعض مواضع المفرد، و-en في مواضع أخرى، مثل der gute Mann، die gute Frau، das gute Kind، die guten Leute. وتتغير صيغ ein وأدوات الملكية بحسب الجنس والحالة؛ وفي الرفع لا تحمل ein نهاية ظاهرة مع المذكر والمحايد، فنقول ein guter Mann وein gutes Kind، بينما نقول einem guten Mann وeiner guten Frau في Dativ. أما الكلمات الكمية فليست على نهاية واحدة: بعد alle تأتي الصفة غالباً بـ -en (alle guten Männer)، بينما بعد viele وmanche وeinige قد تأتي نهاية قوية مثل -e في الجمع (viele junge Leute، manche interessante Bücher، einige gute Orchester). احفظ المثال مع الكلمة والحالة، ولا تعمم -en على جميعها.\n\nفي التطبيق لا تبدأ بحفظ جدول النهايات كله دفعة واحدة؛ خذ زوجاً من الجمل يختلف في الأداة مع بقاء الاسم والحالة: die jungen Leute مقابل junge Leute. في الأولى تظهر علامة الجمع في die، فتأخذ الصفة النهاية الضعيفة -en؛ وفي الثانية لا توجد أداة، فتظهر علامة الجمع على الصفة -e. ثم بدّل الحالة: mit den jungen Leuten، مع ملاحظة أن Dativ الجمع يضيف -n إلى الاسم إن لم يكن منتهياً به. هذه المقارنة تساعد على رؤية ما يتغير فعلاً في كل تركيب.",
    whyAr:
      "الأداة تساعد في اختيار نهاية الصفة، لكن لا تختزل النظام في فكرة «علامة واحدة ظاهرة». قارن die guten Leute (صفة ضعيفة بعد أداة مصرفة) بـ gute Leute (تصريف قوي بلا أداة)، ثم قارن alle guten Leute بـ viele gute Leute. هذه أمثلة تعليمية على أنماط مختلفة، لا قاعدة واحدة تنطبق على كل أداة كمية. التدريب المتكرر على أمثلة متنوعة يساعد على ترسيخ الاختيار، لكنه لا يضمن أن تصبح النهاية تلقائية لدى كل متعلم.",
    table: {
      title: "نهايات الصفة حسب الأداة",
      columns: ["الأداة", "مذكر", "مؤنث/محايد", "الجمع"],
      rows: [
        { label: "der/die/das (Nom.)", cells: ["der gute Mann", "die gute Frau / das gute Kind", "die guten Leute"] },
        { label: "den/die/das (Akk.)", cells: ["den guten Mann", "die gute Frau / das gute Kind", "die guten Leute"] },
        { label: "dem/der (Dat.)", cells: ["dem guten Mann", "der guten Frau / dem guten Kind", "den guten Leuten"] },
        { label: "ein/eine (Nom.)", cells: ["ein guter Mann", "eine gute Frau / ein gutes Kind", "—"] },
        { label: "einen/eine (Akk.)", cells: ["einen guten Mann", "eine gute Frau / ein gutes Kind", "—"] },
        { label: "einem/einer (Dat.)", cells: ["einem guten Mann", "einer guten Frau / einem guten Kind", "—"] },
        { label: "بلا أداة (Nom.)", cells: ["guter Wein", "gute Milch / gutes Brot", "gute Leute"] },
      ],
    },
    examples: [
      { de: "Der neue Lehrer ist sehr nett.", ar: "المعلم الجديد لطيف جداً." },
      { de: "Ein guter Freund hilft immer.", ar: "الصديق الجيد يساعد دائماً." },
      { de: "Ich suche eine günstige Wohnung im Zentrum.", ar: "أبحث عن شقة رخيصة في المركز." },
      { de: "Der neue Kollege kommt aus Tunesien.", ar: "الزميل الجديد من تونس." },
      { de: "Mit freundlichen Grüßen.", ar: "مع تحياتي الودية." },
      { de: "Alle neuen Schüler bekommen einen guten Platz.", ar: "كل الطلاب الجدد يحصلون على مكان جيد." },
    ],
    comparisonWithArabic:
      "في العربية الفصحى تطابق الصفة موصوفها في وجوه منها التعريف والجنس والعدد والإعراب، مثل «المعلمُ الجديدُ» و«المعلمَ الجديدَ». وتظهر المطابقة في الصفة أيضاً، لا في الأداة وحدها. أما الألمانية فلها نهاياتها الخاصة المرتبطة بالأداة والجنس والعدد والحالة؛ لذلك تفيد مقارنة أمثلة كاملة، لا افتراض أن إحدى اللغتين تخلو من تصريف الصفة.",
    eselsbruecke:
      "بعد أداة معرّفة مصرفة: der gute Mann. مع ein: ein guter Mann / einem guten Mann. بلا أداة: guter Wein / mit gutem Wein. وتذكّر الفرق بين alle guten Leute وviele gute Leute.",
    commonMistakes: [
      {
        wrong: "ein gute Mann",
        right: "ein guter Mann",
        whyAr: "في هذا المثال نقول ein guter Mann؛ فالنهاية -er ترافق صيغة ein غير المنتهية في الرفع المذكر. وبعد أداة ذات نهاية نقول einem guten Mann.",
      },
      {
        wrong: "der gute Männer",
        right: "die guten Männer",
        whyAr: "أداة الجمع في الرفع هي die، وبعدها تأتي الصفة الضعيفة -en: die guten Männer.",
      },
      {
        wrong: "mit freundliche Grüße",
        right: "mit freundlichen Grüßen",
        whyAr: "بعد mit يأتي Dativ: الصفة هنا freundlichen والاسم الجمع Grüßen. احفظ تركيب التحية كما هو، ولا تعمم نهاية حالة واحدة على كل التراكيب.",
      },
    ],
    relatedRuleComparison: {
      title: "الصفة قبل الاسم أم بعد الفعل؟",
      content:
        "الصفة الخبرية لا تأخذ نهاية تصريفية هنا: Der Mann ist gut. أما الصفة الوصفية التي تسبق الاسم فتأخذ نهاية مناسبة: der gute Mann. افحص موضع الصفة ثم الأداة والجنس والحالة.",
    },
  },
];
