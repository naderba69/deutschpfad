/**
 * b1-02 — الشرح النظري (الجزء «theorie»)
 * فُصل من b1-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "صياغة Präteritum للأفعال المدروسة",
      titleDe: "Präteritum: Formen und Gebrauch",
      explanationAr:
        `الأفعال المنتظمة تأخذ عادةً لاحقة te على الجذع وتحتفظ بلواحقها العادية: arbeiten → ich arbeitete · du arbeitetest · er arbeitete. والأفعال الشاذة تغيّر جذعها نفسه ولا تأخذ te: gehen → ging · kommen → kam · sehen → sah · essen → aß. أمّا الأفعال الناقصة (Modalverben) فتأخذ te أيضاً لكنها تفقد umlaut وتبدّل حرفاً: können → konnte · müssen → musste · wollen → wollte · dürfen → durfte.

ومع الشواذ يحدث أمر يُربك المتعلّم العربي: صيغة ich وer تكون بلا لاحقة في الماضي البسيط (ich ging · er ging)، بخلاف المضارع الذي يضيف t في er geht. فالفرق بين «أنا ذهبت» و«هو ذهب» يظهر في الماضي من السياق لا من اللاحقة، وهذا هو أوّل ما يجب استيعابه.

والتوزيع بحسب نوع النص مفيد كاتجاه عملي: يسود Präteritum غالباً في السرد المكتوب، ويشيع Perfekt في الحديث اليومي للأفعال الأخرى (Ich arbeitete fünf Jahre in einer Firma / Ich habe fünf Jahre gearbeitet). وتشيع صيغ Präteritum من sein وhaben والأفعال الناقصة في الكلام أيضاً. يختلف الاستعمال بحسب المنطقة ونوع النص والفعل؛ فهذه ميول شائعة لا قواعد تلزم كل متحدث.

وموضع هذا الدرس من مسارك: في A2-01 تعلّمت Perfekt للحكي المحكي، وهذا الدرس يكمل الصورة بوجهها المكتوب؛ وفي كثير من السياقات يمكن أن يعبّر Perfekt وPräteritum عن حدث ماضٍ واحد، لكن الاختيار يتأثر بنوع النص والمنطقة والفعل والسياق؛ فلا يصبح Perfekt خطأً لمجرد وروده في كلام.`,
      whyAr:
        "تساعد معرفة صيغ Präteritum الشائعة على قراءة القصص والسرد والتقارير حيث يكثر استعماله. يدرّب هذا الدرس على مجموعة منتقاة من الأفعال، ولا يدّعي تغطية كل أفعال الألمانية أو كل أنماط استعمالها. وقارن في مثال واحد بين الزمنين قبل أن تحكم على الصيغة: Ich arbeitete dort fünf Jahre ينسجم مع سرد مكتوب، بينما Ich habe dort fünf Jahre gearbeitet شائع في الحديث عن التجربة نفسها.",
      table: {
        title: "Präteritum منتظم وشاذ",
        columns: ["الفعل", "Präteritum (ich)", "Partizip II", "النمط"],
        rows: [
          { label: "arbeiten", cells: ["arbeitete", "gearbeitet", "منتظم"] },
          { label: "kaufen", cells: ["kaufte", "gekauft", "منتظم"] },
          { label: "gehen", cells: ["ging", "gegangen", "شاذ"] },
          { label: "kommen", cells: ["kam", "gekommen", "شاذ"] },
          { label: "sehen", cells: ["sah", "gesehen", "شاذ"] },
          { label: "essen", cells: ["aß", "gegessen", "شاذ"] },
          { label: "können", cells: ["konnte", "gekonnt", "ناقص"] },
          { label: "müssen", cells: ["musste", "gemusst", "ناقص"] },
        ],
      },
      examples: [
        { de: "Ich arbeitete fünf Jahre in einer Firma.", ar: "عملت خمس سنوات في شركة." },
        { de: "Er ging jeden Tag zu Fuß zur Arbeit.", ar: "كان يمشي كل يوم إلى العمل." },
        { de: "Sie kam um acht Uhr und begann sofort.", ar: "جاءت في الثامنة وبدأت فوراً." },
        { de: "Wir sahen gestern einen interessanten Film.", ar: "شاهدنا أمس فيلماً مثيراً." },
        { de: "Ich konnte gut mit dem Computer arbeiten.", ar: "كنت أجيد العمل بالحاسوب." },
        { de: "Wir hatten wenig Zeit und mussten schnell arbeiten.", ar: "كان عندنا وقت قليل وكان علينا العمل بسرعة." },
      ],
      comparisonWithArabic:
        "«عملت» = ich arbeitete، و«ذهب» = er ging. قد يقابل المتعلّم العربي الحدث نفسه بصيغ عربية مختلفة بحسب السياق، كما يجد في الألمانية Perfekt وPräteritum. في كثير من الحالات يشير كلاهما إلى الماضي، لكنهما ليسا متطابقين في كل استعمال: يؤثر نوع النص والمنطقة والفعل والسياق. كاتجاه عام، يكثر Perfekt في الحديث اليومي وPräteritum في السرد المكتوب؛ وهذه ميول لا قاعدة مطلقة.",
      eselsbruecke:
        "«المنتظم: +te (أربيته)، الشاذ: غيّر الجذر (غينغ، كام)» — احفظ الشواذ بالثلاثي: gehen-ging-gegangen. جدول الأفعال الشاذة (أعلاه) رفيقك الدائم!",
      commonMistakes: [
        { wrong: "Ich gehen ging (خلط المضارع مع الماضي)", right: "Ich ging.", whyAr: "لا يجتمع المضارع والماضي في فعل واحد: الفعل المصرَّف يحمل زمناً واحداً، فإمّا kommen (مضارع) وإمّا kam أو bin gekommen (ماضٍ)، والصواب هنا Ich ging." },
        { wrong: "ich arbeitete أم ich habe gearbeitet؟", right: "كلاهما صحيح: arbeitete (كتابة) / habe gearbeitet (كلام)", whyAr: "هذا سؤال أسلوب لا سؤال صحّة: arbeitete وhabe gearbeitet كلتاهما صحيحة، والاختيار يتبع نوع النصّ — سردٌ مكتوب يميل إلى Präteritum، وحوارٌ يومي يميل إلى Perfekt — مع شيوع صيغ Präteritum من sein وhaben والأفعال الناقصة في الكلام أيضاً." },
        { wrong: "Ich sah أم Ich habe gesehen؟ في القصة", right: "في القصة: sah (Präteritum). في الكلام: habe gesehen", whyAr: "في القصص والكتابة السردية يكون Präteritum هو الزمن السائد فيُكتب sah، أمّا في الحوار اليومي فيُقال habe gesehen؛ ويتبع الاختيار نوع النص والسياق، لا قاعدة صواب وخطأ مطلقة." },
      ],
      relatedRuleComparison: {
        title: "Präteritum أم Perfekt — القرار",
        content: "اتجاه شائع لا قاعدة مطلقة: Perfekt كثير في الحديث اليومي، وPräteritum كثير في السرد المكتوب. وتشيع صيغ war/hatte والأفعال الناقصة في الكلام أيضاً؛ ويتباين الاستعمال إقليمياً وبحسب الفعل والسياق.",
      },
    },
    {
      id: "t2",
      titleAr: "الماضي التام المركب (Plusquamperfekt) — ما قبل الماضي",
      titleDe: "Das Plusquamperfekt: hatte/war + Partizip II",
      explanationAr:
        `الماضي التام المركب Plusquamperfekt يعبّر عن حدثٍ وقع قبل حدثٍ ماضٍ آخر، أي «الماضي في الماضي». وتركيبه طبقتان: فعلٌ مساعد في صورة Präteritum (hatte أو war) + Partizip II في نهاية الجملة: Bevor ich studierte, hatte ich gearbeitet. ويُختار المساعد كما في Perfekt: يأتي haben مع كثير من الأفعال، وsein مع أفعال معيّنة تدل على انتقال أو تغيّر حالة، وكذلك أفعال مثل bleiben. هذه قاعدة تمهيدية وليست قائمةً حاصرة؛ فاختيار المساعد يتبع الفعل واستعماله.

يُستعمل Plusquamperfekt لبيان حدث سابق لمرجعٍ ماضٍ، ولا يعني أن الحدث «قديم جداً». يمكن أن يوضّح الأسبقية: hatte gearbeitet (الأسبق) مقابل studierte (اللاحق). لكن أدوات مثل bevor وnachdem وals تساعد بنفسها على ترتيب الأحداث، لذلك لا تفرض وحدها Plusquamperfekt في كل جملة.

في السرد المكتوب يُستعمل Plusquamperfekt كثيراً للحدث الأسبق، مثل: «Nachdem er die Schule beendet hatte, begann er zu arbeiten». لكن التسلسل قد يكون واضحاً من الأداة والسياق، وقد ترد صيغ أخرى في الكلام؛ فـnachdem أو bevor لا يفرضان Plusquamperfekt آلياً. مثال صحيح أيضاً: «Bevor ich studierte, arbeitete ich in einer Firma».`,
      whyAr:
        "لماذا نحتاجها؟ لأنّ سرد الأحداث يحتاج ترتيباً ظاهراً لا إحساساً: حدثٌ أسبق قد يُصاغ بـPlusquamperfekt وحدثٌ لاحق في السرد. تساعد الصيغة على توضيح الأسبقية حين يحتاجها السياق، لكن أدوات الزمن قد تجعل الترتيب واضحاً أيضاً. وفي تقارير العمل والسير الذاتية يمكن أن تساعد على تجنّب الالتباس، من غير أن تكون لازمةً في كل جملة: بجملة واحدة «nachdem er die Ausbildung beendet hatte» تُعرف القبلية بلا «ثم» ولا «بعد ذلك».",
      table: {
        title: "Plusquamperfekt",
        columns: ["الفعل", "التركيب", "مثال"],
        rows: [
          { label: "haben", cells: ["hatte + Partizip II", "Ich hatte gearbeitet."] },
          { label: "sein", cells: ["war + Partizip II", "Er war gegangen."] },
          { label: "أدوات الزمن", cells: ["ترتيب زمني؛ لا زمن إلزامي", "Bevor ich studierte, arbeitete ich."] },
        ],
      },
      examples: [
        { de: "Bevor ich studierte, hatte ich gearbeitet.", ar: "قبل أن أدرس، كنت قد عملت." },
        { de: "Nachdem er die Schule beendet hatte, begann er zu arbeiten.", ar: "بعد أن أنهى المدرسة، بدأ العمل." },
        { de: "Ich war schon gegangen, als sie ankam.", ar: "كنت قد غادرت عندما وصلت." },
        { de: "Sie hatte alles vorbereitet, bevor das Meeting begann.", ar: "كانت قد جهزت كل شيء قبل أن يبدأ الاجتماع." },
        { de: "Ich hatte schon gearbeitet, bevor ich mein Studium begann.", ar: "كنت قد عملت قبل أن أبدأ دراستي." },
        { de: "Nachdem sie ihr Praktikum beendet hatte, bekam sie eine feste Stelle.", ar: "بعد أن أنهت تدريبها العملي، حصلت على وظيفة دائمة." },
      ],
      comparisonWithArabic:
        "«كان قد عمل» = hatte gearbeitet، والعربية تملك التركيب نفسه بـ«كان» الناقصة + «قد» + الفعل الماضي، فالمقابلة شبه تامّة: Bevor ich studierte, hatte ich gearbeitet = «قبل أن أدرس، كنتُ قد عملتُ». وهذا تشابه مفيد للتعلّم، لا يعني تطابق القاعدتين في جميع الاستعمالات والسياقات. وتساعد أدوات الزمن والسياق في اللغتين على ترتيب الأحداث؛ فلا تفرض أداة ألمانية بعينها Plusquamperfekt وحده.",
      eselsbruecke:
        "«Plusquamperfekt = كان قد»: في هذا الزمن يأتي hatte/war + Partizip II. وقد يساعد على إبراز الأسبقية، لكنه ليس ملازماً لكل جملة مع bevor/nachdem/als.",
      commonMistakes: [
        { wrong: "Ich hatte gearbeitet gehabt (تضاعف)", right: "Ich hatte gearbeitet.", whyAr: "Plusquamperfekt طبقة واحدة فقط: hatte + Partizip II، فتضاعف الفعل المساعد (hatte gearbeitet gehabt) خطأ يخرج عن التركيب المقصود." },
        { wrong: "Bevor ich studierte, ich hatte gearbeitet. (ترتيب)", right: "Bevor ich studierte, hatte ich gearbeitet.", whyAr: "الجملة الثانوية بـbevor إذا تصدّرت الكلام شغلت المكان الأول كلّه، فينتقل فعل الجملة الرئيسية إلى ما بعد الفاصلة مباشرة: hatte ich gearbeitet — لا ich hatte gearbeitet." },
        { wrong: "Nachdem er gegessen hat, ging er. (في السرد الماضي)", right: "Nachdem er gegessen hatte, ging er.", whyAr: "nachdem + Plusquamperfekt للحدث الأقدم شائع في السرد، وفي الكلام اليومي يُستعمل Perfekt أيضاً؛ فالمسألة أسلوبية لا قاعدة مطلقة." },
      ],
      relatedRuleComparison: {
        title: "الأزمنة الثلاثة للماضي",
        content: "Perfekt وPräteritum صيغتان شائعتان للماضي يختلف استعمالهما بحسب النص والمنطقة والفعل. Plusquamperfekt يضع حدثاً قبل مرجعٍ ماضٍ، ولا تفرضه أداة ربط زمني وحدها.",
      },
    },
  ];
