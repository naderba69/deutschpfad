/**
 * b2-02 — الشرح النظري (الجزء «theorie»)
 * فُصل من b2-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const theory: NonNullable<Lesson["theory"]> = [
    {
      id: "t1",
      titleAr: "المبني للمجهول المتقدم: الحالة والأفعال الناقصة والبدائل",
      titleDe: "Zustandspassiv, Passiv mit Modalverben, Ersatzformen",
      explanationAr:
        "في الأمثلة المعتادة، «Die Tür wird geöffnet» تعرض الحدث أو العملية، بينما «Die Tür ist geöffnet» تصف الحالة الناتجة: الباب مفتوح. لا يعني Präsens مع «wird» بالضرورة أن الحدث يقع في هذه اللحظة؛ فكلمة «gerade» في «Die Tür wird gerade geöffnet» هي التي توضّح ذلك هنا. وفي سياق اقتصادي يمكن مقارنة «Der Vertrag wird unterschrieben» (يجري توقيع العقد) بـ«Der Vertrag ist unterschrieben» (العقد موقّع). وقد يعتمد الفرق بين الحدث والحالة على الفعل والسياق.\n\nفي الجملة الرئيسية، يأتي الفعل الناقص المصرف في المرتبة الثانية: «Die Ware kann geliefert werden» (يمكن تسليم البضاعة). وفي الجملة الثانوية يتغير ترتيب الأفعال: «..., weil die Ware geliefert werden kann». صيغة المجهول هي Modalverb + Partizip II + werden، لكن لا يصح تعميم موضع المرتبة الثانية خارج الجملة الرئيسية. وفي الماضي: «Die Lieferung konnte bestätigt werden»؛ وفي الماضي التام مع الناقص: «Die Ware hat geliefert werden können».\n\nمن البدائل: «sich lassen + Infinitiv»، بترتيب واضح مثل «Das Problem lässt sich lösen»، وتعبّر غالباً عن إمكان وقوع الفعل من دون تسمية فاعله؛ لا تعني «بسهولة» بذاتها. و«-bar» تصوغ صفةً مثل «durchführbar» (قابل للتنفيذ) و«trinkbar» (صالح للشرب). أما «man» فيجعل الفاعل عاماً مع بقاء الجملة في المعلوم: «Man kann die Kosten senken». و«sein + zu + Infinitiv» قد يدل على الإمكان أو المطلوب بحسب السياق: «Das Problem ist zu lösen». أما «lassen + مفعول + Infinitiv» فقد يفيد التسبب أو التكليف، مثل «Ich lasse das Auto reparieren».\n\nاختر الصيغة بحسب المعنى والسياق، لا بحسب قاعدة جامدة عن الأسلوب وحده. قارن «waren geöffnet» (حالة في الماضي) بـ«sind geöffnet worden» (مجهول الحدث في Perfekt). وتختلف البدائل في تركيبها ودلالتها؛ فلا تكون قابلة للاستبدال دائماً، حتى إن تقاربت ترجماتها العربية.",
      whyAr:
        "يساعد التمييز بين الحدث والحالة والإمكان والإلزام على نقل المعنى بدقة في نصوص الاقتصاد وغيرها. لكنه يعتمد على الفعل والسياق، ولا تكفي صيغة المساعد وحدها دائماً لتحديد زمن وقوع الحدث أو غرض الكاتب. كما أن الأمثلة هنا تشرح تراكيب شائعة، ولا تمثل اختباراً أو حكماً على مستوى CEFR.",
      table: {
        title: "المجهول وبدائله",
        columns: ["النوع", "التركيب", "مثال", "المعنى"],
        rows: [
          { label: "Vorgangspassiv", cells: ["werden + PII", "Die Tür wird geöffnet.", "تُفتح (عملية)"] },
          { label: "Zustandspassiv", cells: ["sein + PII", "Die Tür ist geöffnet.", "مفتوحة (حالة)"] },
          { label: "Passiv + Modalverb", cells: ["können + PII + werden", "Die Tür kann geöffnet werden.", "يمكن فتحها"] },
          { label: "sich lassen", cells: ["lassen (مصرف) + sich + Infinitiv", "Die Tür lässt sich öffnen.", "يمكن فتحها"] },
          { label: "صفة -bar", cells: ["فعل + -bar", "Die Lösung ist durchführbar.", "قابلة للتنفيذ"] },
        ],
      },
      examples: [
        { de: "Die Ware ist geliefert worden.", ar: "تم تسليم البضاعة (عملية منتهية)." },
        { de: "Die Ware ist geliefert.", ar: "البضاعة مسلَّمة (حالة)." },
        { de: "Der Preis kann verhandelt werden.", ar: "يمكن التفاوض على السعر." },
        { de: "Das Problem lässt sich lösen.", ar: "يمكن حل المشكلة." },
        { de: "Die Lösung ist durchführbar.", ar: "الحل قابل للتنفيذ." },
        { de: "Die Entscheidung ist bis Freitag zu treffen.", ar: "يجب اتخاذ القرار حتى الجمعة (رسمي)." },
      ],
      comparisonWithArabic:
        "يمكن ترجمة «Die Tür wird geöffnet» بـ«يُفتح الباب» و«Die Tür ist geöffnet» بـ«الباب مفتوح»، لكن المقابلات تقريبية ويحدد السياق المعنى. وتستعمل العربية، مثل الألمانية، وسائل متعددة للإمكان والإلزام، كـ«يمكن فتحه» و«قابل للفتح» و«يجب حل المشكلة». لا تقابل الصيغ الألمانية بعضها بعضاً حرفياً دائماً؛ لذا يُستحسن فهم تركيبها وسياقها بدلاً من افتراض تطابق ثابت بين اللغتين.",
      eselsbruecke:
        "في المثال المعتاد: sein + PII تصف حالة، وwerden + PII يبرز الحدث؛ و«-bar» في «durchführbar» تعني قابل للتنفيذ.",
      commonMistakes: [
        { wrong: "فهم «Die Tür ist geöffnet» بمعنى أن الباب يُفتح الآن", right: "تعني عادةً أن الباب مفتوح؛ وللحدث الجاري: «Die Tür wird gerade geöffnet».", whyAr: "sein + Partizip II يصف الحالة عادةً في هذا المثال، بينما يبرز werden + Partizip II الحدث. لا يكفي Präsens وحده لإثبات أن الحدث يجري لحظة الكلام." },
        { wrong: "اعتبار «Die Tür wird geöffnet» و«Die Tür ist geöffnet» مترادفتين دائماً", right: "الأولى تبرز الحدث، والثانية تصف الحالة في المثال المعتاد.", whyAr: "هما بنيتان مختلفتان، لكن تفسيرهما الدقيق يتأثر بالفعل والسياق؛ لا تستبدل إحداهما بالأخرى من دون مراعاة المقصود." },
        { wrong: "القول إن «lässt sich öffnen» تعني دائماً «يفتح بسهولة» أو إن لها فرقاً ثابتاً عن «kann geöffnet werden»", right: "كلتاهما قد تعبّران عن الإمكان، والاختيار يتحدد بالسياق والاستعمال.", whyAr: "سهولة الفعل قد تُذكر صراحةً مثل «lässt sich leicht öffnen»؛ أما «sich lassen» وحدها فلا تضمن السهولة، ولا توجد مقابلة قطعية واحدة تصلح لكل سياق." },
      ],
      relatedRuleComparison: {
        title: "Vorgangs- أم Zustandspassiv؟",
        content: "في المثال المعتاد: werden + Partizip II يبرز الحدث، وsein + Partizip II يصف الحالة؛ لا يعني المضارع وحده أن الحدث يجري الآن.",
      },
    },
    {
      id: "t2",
      titleAr: "المجهول مع الأفعال الناقصة والبدائل",
      titleDe: "Passiv mit Modalverben im Detail + Ersatzformen (lassen, -bar, sein + zu + Infinitiv)",
      explanationAr:
        "في الجملة الرئيسية يظهر الفعل الناقص المصرف عادةً في المرتبة الثانية، ثم تأتي بقية الجملة وكتلة الفعل: «Die Entscheidung muss getroffen werden». أما في الجملة الثانوية فيأتي الفعل المصرف أخيراً: «..., weil die Entscheidung getroffen werden muss». يتكون المجهول هنا من Modalverb + Partizip II + werden؛ وفي صيغة Perfekt مع الناقص مثالها «Die Ware hat geliefert werden können».\n\nتتغير دلالة الزمن والسياق: «konnte nicht bestätigt werden» تتحدث عن عدم الإمكان في زمن ماضٍ، أما «kann nicht bestätigt werden» فتسند عدم الإمكان إلى الحاضر أو الوضع الحالي، لا إلى استنتاج واحد عن سبب القرار.\n\nمن البدائل «sein + zu + Infinitiv»، التي قد تدل على الإلزام أو الإمكان بحسب السياق، مثل «Das Problem ist zu lösen». و«Das Problem lässt sich lösen» تعبّر غالباً عن إمكان الحل، من دون أن تعني سهولة الحل بذاتها؛ وهاتان الصيغتان بديلان تعبيريّان، وليستا بالضرورة جملة مبنية للمجهول من حيث التحليل النحوي. وتحوّل اللاحقة «-bar» الفعل إلى صفة مثل «durchführbar»، بينما يبقى «man» فاعلاً عاماً في جملة المعلوم: «Man kann die Kosten senken».\n\nميّز «lassen» السببية عن «sich lassen»: في «Ich lasse das Auto reparieren» يكلّف المتكلم شخصاً بإصلاح السيارة؛ وفي «Das Auto lässt sich reparieren» توصف إمكانية الإصلاح. «sich» علامة مفيدة في هذا الاستعمال، لكن الحكم النهائي يبقى لتركيب الجملة ومعناها. وهذه بدائل للتعبير عن معنى قريب من المجهول، لا صيغة Vorgangspassiv نفسها: «sich lassen» تركيب فعّال، و«-bar» صفة، و«sein + zu» تركيب بديل.",
      whyAr:
        "تظهر هذه التراكيب في نصوص الاقتصاد وغيرها لأنها تسمح بتحويل التركيز بين الحدث والنتيجة والإمكان والإلزام، أو بعدم تسمية الفاعل حين لا يكون محور الكلام. لكن المبني للمجهول لا يعني دائماً أن الفاعل مجهول أو متعمّد الإخفاء، كما أن المعلوم والمبني للمجهول موجودان في العربية والألمانية. افهم الوظيفة من الجملة والسياق، ولا تفترض ترتيباً ثابتاً للرسمية أو فرقاً واحداً بين البدائل.",
      table: {
        title: "المجهول + الناقصة والبدائل (تفصيل)",
        columns: ["التركيب", "المعنى", "مثال اقتصادي"],
        rows: [
          { label: "kann + PII + werden", cells: ["يمكن أن يُفعل", "Der Preis kann verhandelt werden."] },
          { label: "muss + PII + werden", cells: ["يجب أن يُفعل", "Die Entscheidung muss getroffen werden."] },
          { label: "konnte + PII + werden", cells: ["أمكن أن يُفعل (ماضٍ)", "Die Lieferung konnte bestätigt werden."] },
          { label: "sein + zu + Infinitiv", cells: ["إلزام أو إمكان بحسب السياق", "Das Problem ist zu lösen."] },
          { label: "sich lassen", cells: ["إمكان بحسب السياق", "Die Kosten lassen sich senken."] },
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
        "«يجب اتخاذ القرار» = Die Entscheidung muss getroffen werden، و«قابل للتنفيذ» = durchführbar. هذه مقابلات تقريبية: فكل لغة تملك أكثر من وسيلة للتعبير عن الإمكان والإلزام والمجهول. في «Die Ware kann geliefert werden» يعبّر الفعل الناقص عن الإمكان، وتظهر بنية المجهول في Partizip II + werden. احفظ ترتيب الجملة الرئيسية، وقارنه بترتيب الجملة الثانوية «..., weil die Ware geliefert werden kann»؛ ولا تفترض مقابلة كلمة بكلمة بين اللغتين.",
      eselsbruecke:
        "اختر بين «muss/kann + PII + werden» و«sich lassen» و«-bar» بحسب المعنى والتركيب؛ لا يجعل الاختصارُ صيغةً ما أنسبَ في كل سياق.",
      commonMistakes: [
        { wrong: "Die Ware kann geliefert. (نقص werden)", right: "Die Ware kann geliefert werden.", whyAr: "المجهول مع الناقصة يتطلب وجود werden مهما طال الفعل الناقص؛ وحذفه لا يجعل الجملة «أقصر» بل يفسد البناء، لأن الناقص بدونه لا يدلّ على مجهول." },
        { wrong: "اعتبار «Die Tür muss geöffnet werden» و«Die Tür ist geöffnet» متطابقتين", right: "muss geöffnet werden = يجب فتحها؛ ist geöffnet = الباب مفتوح (حالة)", whyAr: "الأولى تعبّر عن إلزام بوقوع الفعل، والثانية تصف الحالة في المثال المعتاد؛ اختلاف المعنى يمنع استبدالهما آلياً." },
        { wrong: "Das Problem ist zu lösen. (تظنه خطأً)", right: "صحيحة! sein + zu + مصدر = يجب/يمكن", whyAr: "تشيع sein + zu + Infinitiv في الكتابة الرسمية وتظهر أيضاً في سياقات أخرى؛ ومعناها إلزام أو إمكان بحسب السياق. لا تصحّحها آلياً إلى مجهول مع فعل ناقص." },
      ],
      relatedRuleComparison: {
        title: "lassen للسببية أم لبديل المجهول؟",
        content: "lassen + مفعول + مصدر قد يفيد التسبب أو التكليف: Ich lasse das Auto reparieren. أما Das Auto lässt sich reparieren فيصف إمكان الإصلاح. انتبه إلى تركيب الجملة ومعناها، لا إلى كلمة منفردة فقط.",
      },
    },
  ];
