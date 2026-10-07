import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-04: البحث عن سكن — Wechselpräpositionen (wo? Dativ / wohin? Akkusativ)
 */
export const lessonA204: Lesson = {
  id: "a2-04",
  unitId: "a2-04",
  level: "A2",
  order: 1,
  titleDe: "Wohnungssuche",
  titleAr: "البحث عن سكن",
  summary:
    "قراءة إعلانات سكن مختارة ومفردات المعاينة والإيجار؛ وتمييز الموضع المكاني (Dativ) عن وجهة الحركة (Akkusativ) مع Wechselpräpositionen في أمثلة محددة؛ ونص قراءة ونص استماع، وتدريبات كتابة موجّهة. تفاصيل العقود وقواعد المباني تختلف، والمادة ليست نصيحة قانونية.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann wichtige Angaben in einem kurzen Text zur Wohnungssuche finden.",
      ar: "أن أستخرج معلومات محددة من نص قصير عن البحث عن سكن، بما فيها بيانات الإعلان المقتبس ومعلومات الإيجار المذكورة في القصة.",
      evidence: { exerciseIds: ["rq2", "rq3", "rq7"], taskIds: ["reading:read-a2-04:rq2", "reading:read-a2-04:rq3", "reading:read-a2-04:rq7"], labelAr: "أجب عن أسئلة الإيجار والتأمين والاختصار في نص القراءة؛ لا يُحتسب فتح النص وحده دليلاً.", completion: "all-correct" },
    },
    {
      id: "z2",
      de: "Ich kann die neun Wechselpräpositionen ihren einfachen räumlichen Bedeutungen zuordnen.",
      ar: "أن أوصل حروف الجر المكانية التسعة بمعانيها التقريبية، من دون تعميم معنى واحد على كل استعمالاتها.",
      evidence: { exerciseIds: ["e3"], taskIds: ["practice:a2-04:e3", "flow-practice:a2-04:e3"], labelAr: "طابق الحروف التسعة بمعانيها المكانية في e3؛ يظهر ضمن أول أربعة في lesson-flow وقد يظهر في عينة practice العشوائية.", completion: "all-correct" },
    },
    {
      id: "z3",
      de: "Ich kann bei räumlichen Orts- und Zielangaben Dativ und Akkusativ unterscheiden.",
      ar: "أن أختار Dativ للمكان الذي يقع فيه الفعل أو الحركة، وAkkusativ للوجهة المقصودة، في أمثلة محددة.",
      evidence: { exerciseIds: ["m1", "m2", "m4", "m5"], taskIds: ["mini-test:a2-04:m1", "mini-test:a2-04:m2", "mini-test:a2-04:m4", "mini-test:a2-04:m5"], labelAr: "أجب عن أمثلة الاختبار المصغّر الأربعة؛ الحركة الجسدية وحدها لا تحسم الحالة.", completion: "all-correct" },
    },
    {
      id: "z4",
      de: "Ich kann eine ausdrücklich genannte Ruhezeit aus einem kurzen Hörtext entnehmen.",
      ar: "أن أستخرج وقت الهدوء المذكور صراحةً في حوار عن Hausordnung معيّن، لا أن أعمّمه على كل المباني.",
      evidence: { exerciseIds: ["q4"], taskIds: ["listening:l3:q4"], labelAr: "أجب عن q4 قبل كشف تفريغ الحوار؛ الإجابة بعد الكشف لا تثبت الاستماع.", completion: "all-correct" },
    },
    {
      id: "z5",
      de: "Ich kann räumliche Angaben in kurzen, vorgegebenen Schreibaufgaben bilden.",
      ar: "أن أكتب الصيغة المكانية المطلوبة في تحويل موجّه وفراغات وإملاء، من دون ادعاء تقويم كتابة حرة.",
      evidence: { exerciseIds: ["w1", "w2", "w3"], taskIds: ["writing:a2-04:w1", "writing:a2-04:w2", "writing:a2-04:w3"], labelAr: "أنجز مهام الكتابة الموجّهة الثلاث؛ هي لا تقيس نصاً حراً أو أداءً شفهياً.", completion: "all-correct" },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr: "قارن سؤالين عن الكتاب نفسه: Wo liegt das Buch? — Es liegt auf dem Tisch. وWohin legst du das Buch? — Ich lege es auf den Tisch. كلاهما يتضمن auf، لكن الأول يحدد موضعاً والثاني وجهةً؛ لذلك تختلف أداة التعريف.",
    motivatingQuestionDe: "Wo liegt das Buch, und wohin legst du es?",
    contextAr: "نقرأ إعلاناً سكنياً ونصف مواضع الأشياء ووجهاتها. في الاستعمال المكاني مع Wechselpräpositionen نستخدم Dativ للموقع أو مكان حدوث الحركة، وAkkusativ للوجهة؛ لا تكفي كلمة «حركة» وحدها لتحديد الحالة.",
    contextDe: "Ich ziehe in eine neue Wohnung um.",
    connectionToPreviousAr: "تتذكر Dativ المكاني في «auf dem Tisch» ووجهة الحركة في «in die Stadt». هنا نراجع الفرق مع تسعة Wechselpräpositionen، مع التمييز بين موقع الحركة والوجهة التي تنتهي إليها.",
    activateVocabulary: [
      { de: "die Wohnung", ar: "الشقة" },
      { de: "die Miete", ar: "الإيجار" },
      { de: "der Vermieter", ar: "المؤجّر" },
      { de: "umziehen", ar: "ينتقل إلى سكن آخر" },
      { de: "die Anzeige", ar: "الإعلان" },
    ],
  },

  review: [
    {
      id: "r1", type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-04): اختر الصيغة التي تصف موضع الكتاب:",
      questionDe: "Das Buch liegt ___ Tisch.",
      options: ["auf dem", "auf den", "auf der", "auf das"], correctIndex: 0,
      explanation: "السؤال هنا عن موضع الكتاب (Wo liegt es?)، لذلك نقول auf dem Tisch.", errorType: "case",
    },
    {
      id: "r2", type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-11): اختر حرف الجر المناسب للوجهة المقصودة:",
      questionDe: "Ich gehe ___ die Stadt.",
      options: ["in", "nach", "zu", "aus"], correctIndex: 0,
      explanation: "مع in + الوجهة نقول in die Stadt؛ هنا المدينة هي الوجهة المقصودة.", errorType: "preposition",
    },
    {
      id: "r3", type: "fill-blank",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-04): أكمل بأداة التعريف المناسبة للسؤال Wo؟",
      template: "Die Lampe ist in ___ Küche.",
      blanks: [{ correct: "der", options: ["der", "dem", "die", "den"] }],
      explanation: "Küche مؤنث، والجملة تحدد موضع المصباح؛ لذلك in der Küche.", errorType: "case",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "حروف الجر المكانية التسعة: الموقع والوجهة",
      titleDe: "Die neun Wechselpräpositionen: Ort und Ziel",
      explanationAr: `تسمّى هذه الحروف Wechselpräpositionen لأنها قد تأتي مع Dativ أو Akkusativ في استعمالها المكاني: in, an, auf, über, unter, vor, hinter, neben, zwischen. الفكرة العملية ليست «الجسم تحرّك أم لم يتحرّك؟»، بل وظيفة العبارة المكانية في الجملة: هل تحدد المكان الذي يوجد فيه الشيء أو يقع فيه الفعل؟ أم تحدد الوجهة التي يقصدها الفاعل؟

للسؤال عن الموقع نسأل غالباً Wo? ويأتي Dativ: Das Buch liegt auf dem Tisch. ويمكن أن يتحرك الفاعل مع بقاء Dativ إذا كان حرف الجر يحدد مكان الحركة: Ich gehe im Park spazieren. أما الوجهة المقصودة فتجيب غالباً عن Wohin? ويأتي معها Akkusativ: Ich lege das Buch auf den Tisch. / Ich gehe in den Park. لذلك لا تجعل أفعال الحركة مثل gehen أو laufen سبباً آلياً لاختيار Akkusativ؛ انظر إلى معنى العبارة المكانية في السياق.

المعاني العربية في الجدول تقريبية لهذه الأمثلة، وليست مقابلات ثابتة في كل تركيب. فـ an قد يدل على مجاورة أو تماسّ مع حافة أو سطح، وauf قد يدل على سطح أو موضع؛ ويتحدد الاختيار بحسب الشيء والعلاقة المقصودة، لا بقاعدة مطلقة عن السطح الرأسي والأفقي. واستعمالات الحروف الزمنية أو المجازية، وكذلك حروف الجر التي يفرضها فعلٌ بعينه، لا تُستنتج من هذا التقابل المكاني وحده؛ تعلّمها في تركيبها الخاص.`,
      whyAr: `يساعد هذا الفرق على وصف الأثاث والغرف وعلى فهم عبارات مثل im Keller أو ins Erdgeschoss. لكنه لا يعني أن كل حركة جسدية تأخذ Akkusativ: يستطيع المرء أن يتحرك داخل مكان ويبقى ذلك المكان موضعاً للحركة فيأخذ Dativ. كما لا يعني أن كل حرف من التسعة يترجم بكلمة عربية واحدة؛ المطلوب أن يقرأ المتعلم العلاقة التي يقصدها المتكلم، ثم يختار الحالة المناسبة في المثال المكاني المحدد.

تُقيّم هذه المعرفة في أمثلة معلومة السياق، لا بمجرد فتح الشرح. لذلك تتدرج المواد من مطابقة المعاني إلى جمل الموقع والوجهة، ويُطلب في الكتابة اختيار الأداة التي يفرضها المعنى المقصود. إذا احتمل المثال قراءتين صحيحتين، فينبغي توضيح المقصود بدلاً من تسمية البديل خطأً عاماً.`,
      table: {
        title: "أمثلة مكانية: Wo? + Dativ مقابل Wohin? + Akkusativ",
        columns: ["الحرف", "معنى تقريبي في المثال", "Wo? + Dativ", "Wohin? + Akkusativ"],
        rows: [
          { label: "in", cells: ["داخل", "in der Küche", "in die Küche"] },
          { label: "an", cells: ["عند/على تماسّ", "an der Wand", "an die Wand"] },
          { label: "auf", cells: ["على/فوق سطح", "auf dem Balkon", "auf den Balkon"] },
          { label: "über", cells: ["فوق", "über dem Sofa", "über das Sofa"] },
          { label: "unter", cells: ["تحت", "unter dem Bett", "unter das Bett"] },
          { label: "vor", cells: ["أمام", "vor dem Haus", "vor das Haus"] },
          { label: "hinter", cells: ["خلف", "hinter dem Schrank", "hinter den Schrank"] },
          { label: "neben", cells: ["بجانب", "neben dem Fenster", "neben das Fenster"] },
          { label: "zwischen", cells: ["بين", "zwischen den Regalen", "zwischen die Regale"] },
        ],
      },
      examples: [
        { de: "Der Spiegel hängt an der Wand.", ar: "المرآة معلّقة على الجدار. (موضع: Wo? → Dativ)" },
        { de: "Ich hänge den Spiegel an die Wand.", ar: "أعلّق المرآة على الجدار. (وجهة التعليق: Wohin? → Akkusativ)" },
        { de: "Die Kinder spielen hinter dem Haus.", ar: "يلعب الأطفال خلف البيت؛ هذا مكان اللعب. (Dativ)" },
        { de: "Die Kinder laufen hinter das Haus.", ar: "يركض الأطفال إلى الجهة الخلفية من البيت؛ هذه وجهة. (Akkusativ)" },
        { de: "Wir gehen im Park spazieren.", ar: "نتنزّه داخل الحديقة؛ هي مكان التنزّه، مع وجود حركة. (Dativ)" },
        { de: "Wir gehen in den Park.", ar: "نذهب إلى الحديقة؛ الحديقة هي الوجهة. (Akkusativ)" },
        { de: "Zwischen den Regalen steht eine Pflanze.", ar: "تقف نبتة بين الرفوف؛ السؤال عن موضعها. (Dativ)" },
      ],
      comparisonWithArabic: `لا تُترجم تسمية Dativ الألمانية تلقائياً إلى «جرّ» العربية؛ فهما مصطلحان في نظامين مختلفين. في أمثلة مثل «في المطبخ» و«إلى المطبخ» قد يظهر الفرق في العربية عبر حرف الجر أو السياق، بينما يبقى in في المثالين الألمانيين وتتغير أداة التعريف: in der Küche / in die Küche. هذه مقارنة بين هذين المثالين لا تعميم على كل تراكيب العربية أو لهجاتها.

يمكن استخدام المعنى العربي لفهم العلاقة، ثم العودة إلى الجملة الألمانية لاختيار الحالة. ولا يكفي تشابه الترجمة بين على/في لتقرير an أو auf، كما لا يثبت اختلاف الترجمة وحده أي حالة ألمانية؛ الاسم والتركيب والسياق عوامل مهمة.`,
      eselsbruecke: "في المعنى المكاني: اسأل Wo? عن الموقع أو مكان حدوث الفعل → Dativ؛ واسأل Wohin? عن الوجهة المقصودة → Akkusativ. حركة الفاعل وحدها لا تحسم الحالة.",
      commonMistakes: [
        { wrong: "Ich laufe im Park. (المقصود: إلى داخل الحديقة)", right: "Ich laufe in den Park.", classification: "contextual-alternative", whyAr: "الجملة الأولى ألمانية صحيحة إذا كان المقصود أن الجري يحدث داخل الحديقة؛ أما إذا كانت الحديقة وجهة الجري فالمناسب in den Park. السياق، لا الفعل laufen وحده، يحدد الحالة." },
        { wrong: "Das Bild hängt an die Wand. (أصف موضع الصورة الآن)", right: "Das Bild hängt an der Wand.", classification: "error", whyAr: "عند وصف مكان الصورة المعلّقة نجيب عن Wo? فنقول an der Wand. أما وضع الصورة أو تعليقها إلى الجدار فيقال Ich hänge das Bild an die Wand؛ وهنا العبارة وجهة." },
        { wrong: "Ich warte vor das Haus.", right: "Ich warte vor dem Haus.", classification: "error", whyAr: "في هذا المعنى يحدد vor dem Haus مكان الانتظار، لا وجهةً يتحرك إليها المنتظر؛ لذلك يأتي Dativ. إذا أردت وصف انتقال شخص إلى أمام المنزل، استخدم فعلاً يوضح ذلك المعنى وسياقاً مناسباً." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: الحروف ذات الحالة الثابتة",
        content: `هذه القاعدة تخص الحروف التسعة المذكورة عند استعمالها مكانياً، ولا تُعمّم على جميع حروف الجر. فحروف مثل mit + Dativ وfür + Akkusativ تحتفظ بالحالة التي تطلبها حتى عندما لا تصف مكاناً. وحتى الحرف نفسه قد يظهر في تركيب فعلي ذي حالة محفوظة، مثل warten auf den Bus أو teilnehmen an einem Kurs؛ فهذه تراكيب لا تعني موقعاً أو وجهةً حرة. لذلك افصل بين العبارة المكانية الحرة وبين حرف الجر الذي يختاره فعلٌ أو تركيب معجمي.`,
      },
    },
    {
      id: "t2",
      titleAr: "أفعال الوضع والاستقرار: كيف تصف الشيء وموضعه؟",
      titleDe: "Positionsverben: stellen/stehen, legen/liegen, setzen/sitzen, hängen",
      explanationAr: `تساعد أزواج مثل stellen/stehen وlegen/liegen وsetzen/sitzen على التمييز بين فعل وضع شيء في موضع وبين وصف موضعه أو هيئته. في الأمثلة المكانية المعتادة نقول: Ich stelle die Lampe neben das Sofa (إلى أين؟) ثم Die Lampe steht neben dem Sofa (أين؟). الفعل قرينة على المعنى، لكن التعدي وحده لا يفرض حالة حرف الجر؛ تظل وظيفة العبارة المكانية هي الأساس.

ترتبط الأفعال غالباً بهيئة الشيء في المشهد: stellen لشيء يوضع قائماً في هذا السياق، وlegen لشيء يوضع ممدداً، وsetzen للجلوس أو إجلاس شخص، وhängen لتعليق شيء أو وصف تعليقه. هذه تفضيلات معجمية وسياقية وليست قوانين شكلية: قد يكون كتاب واقفاً على حافته، وقد توضع زجاجة على جانبها، فتتغير ملاءمة الفعل تبعاً للهيئة المقصودة.

للفعل hängen تصريفان شائعان في التمييز المعياري بين المعنيين: الحالة hängt – hing – hat gehangen؛ وفعل التعليق hängt – hängte – hat gehängt. يذكر IDS أن الاستعمال المنطوق قد يُظهر تداخلاً بين الصيغ، لذا فهذا تمييز تعليمي مفيد لا حكم بأن كل متكلم يلتزم به في كل سياق. أما stecken فيستخدم في معنى الإدخال وفي وصف شيء موجود داخل موضع: Ich stecke den Schlüssel in die Tasche / Der Schlüssel steckt in der Tasche. هنا يتضح الفرق من المعنى والسياق، لا من شكل المضارع وحده.`,
      whyAr: `تساعد هذه الأفعال المتعلم على وصف ما يفعله الشخص وما يراه في الغرفة بدقة أكبر من ترجمة فعل عربي واحد إلى كل الحالات. لكنها لا تختار الحالة الإعرابية آلياً: قارن الوجهة auf den Tisch بالموقع auf dem Tisch، واذكر أن حركة داخل المكان قد تأتي مع Dativ. كما أن الأسماء لا تتصرف دائماً بالطريقة المتوقعة من شكلها المعتاد؛ الجملة تصف هيئة الشيء لحظة الكلام.

لذلك نختبر كل مثال مع سياقه: أهو قائم أم ممدد؟ هل يتحدث عن وضعه أم عن موضعه؟ وهل عبارة حرف الجر وجهة أم مكان؟ لا ينبغي وسم Ich lege die Flasche auf den Tisch بخطأ نحوي إذا كان المقصود وضعها على جانبها، ولا وسم Das Buch steht auf dem Tisch بخطأ إذا كان الكتاب منتصباً.`,
      table: {
        title: "أزواج تساعد على وصف فعل الوضع ونتيجته",
        columns: ["السياق", "فعل وضع/تغيير موضع", "فعل وصف الموضع", "التصريف الأساسي", "مثال مكاني"],
        rows: [
          { label: "قائم في المشهد", cells: ["stellen", "stehen", "stellte / stand; gestellt / gestanden", "Ich stelle die Vase auf den Tisch."] },
          { label: "ممدّد في المشهد", cells: ["legen", "liegen", "legte / lag; gelegt / gelegen", "Der Teppich liegt auf dem Boden."] },
          { label: "جلوس", cells: ["setzen", "sitzen", "setzte / saß; gesetzt / gesessen", "Ich setze das Kind auf den Stuhl."] },
          { label: "تعليق", cells: ["hängen (Handlung)", "hängen (Zustand)", "hängte / hing; gehängt / gehangen", "Der Mantel hängt an der Garderobe."] },
          { label: "إدخال/وجود داخل موضع", cells: ["stecken", "stecken", "steckte; gesteckt", "Der Schlüssel steckt im Schloss."] },
        ],
      },
      examples: [
        { de: "Ich stelle die Lampe neben das Sofa.", ar: "أضع المصباح بجانب الأريكة؛ المقصود وجهة الوضع. (Akkusativ)" },
        { de: "Die Lampe steht neben dem Sofa.", ar: "المصباح قائم بجانب الأريكة؛ المقصود موضعه. (Dativ)" },
        { de: "Er legt den Vertrag auf den Schreibtisch.", ar: "يضع العقد على المكتب؛ وهذه وجهة. (Akkusativ)" },
        { de: "Der Vertrag liegt auf dem Schreibtisch.", ar: "العقد موضوع على المكتب؛ وهذا موضعه. (Dativ)" },
        { de: "Setzen Sie sich bitte auf diesen Sessel!", ar: "تفضّل بالجلوس على هذا المقعد؛ الصيغة تصف الانتقال إلى الجلوس." },
        { de: "Der Vermieter sitzt schon im Wohnzimmer.", ar: "المؤجّر جالس في غرفة المعيشة؛ هذا موضعه. (Dativ)" },
        { de: "Sie hängt die Gardinen vor das Fenster.", ar: "تعلّق الستائر أمام النافذة؛ المقصود وجهة التعليق." },
        { de: "Der Schlüssel steckt im Schloss.", ar: "المفتاح في القفل؛ هذا وصف موضعه." },
      ],
      comparisonWithArabic: `قد تختلف طريقة وصف هيئة الأشياء بين الألمانية والعربية وبين متكلمين وسياقات مختلفة؛ لذلك لا نفترض أن العربية تستعمل فعلاً واحداً دائماً أو أن ترجمة واحدة تصلح لكل مشهد. احفظ أمثلة ألمانية كاملة مثل Die Lampe steht neben dem Sofa وIch stelle die Lampe neben das Sofa، ثم غيّر المثال إذا تغيرت هيئة الشيء أو قصد المتكلم.

أسماء الحالات مثل Dativ مصطلحات ألمانية، وليست ترجمة آلية للجر العربي. والفعل الألماني لا يقرر الحالة وحده؛ الموقع والوجهة في العبارة المكانية هما موضع الاختيار هنا.`,
      eselsbruecke: "احفظ الزوج مع مشهد: stellen/stehen للمصباح القائم في المثال، وlegen/liegen للعقد الممدد. ثم اسأل عن عبارة المكان نفسها: أين يوجد/يحدث الفعل؟ أم إلى أين يُوضَع الشيء؟",
      commonMistakes: [
        { wrong: "Ich lege die Flasche auf den Tisch. (المقصود: قائمة)", right: "Ich stelle die Flasche auf den Tisch.", classification: "contextual-alternative", whyAr: "الجملة الأولى صحيحة إذا وُضعت الزجاجة على جانبها. في المشهد المحدد، حيث تبقى قائمة على قاعدتها، يكون stellen هو الاختيار الأنسب؛ لا تجعل شكل الشيء قاعدةً لا تتغير." },
        { wrong: "Das Buch steht auf dem Tisch. (المقصود: مسطّح)", right: "Das Buch liegt auf dem Tisch.", classification: "contextual-alternative", whyAr: "إذا كان الكتاب ممدداً على سطحه فنقول liegt. أما إذا كان منتصباً على حافته فقد تصح steht أيضاً؛ ليس صحيحاً أن الكتاب لا يقف إلا بين كتب على رف." },
        { wrong: "Ich habe das Bild an der Wand gehängt. (أقصد أنني علّقته إلى الجدار)", right: "Ich habe das Bild an die Wand gehängt.", classification: "contextual-alternative", whyAr: "للقراءة المقصودة، أي نقل الصورة إلى الجدار وتعليقها هناك، نسأل Wohin? فنقول an die Wand. وقد تصف عبارة Dativ موضع حدوث فعلٍ في سياق آخر؛ لذا فالتصحيح هنا متعلق بالمعنى المقصود لا بوجود المفعول وحده." },
        { wrong: "Der Stuhl setzt neben dem Tisch.", right: "Der Stuhl steht neben dem Tisch.", classification: "error", whyAr: "setzen لا يستعمل هنا بهذا الشكل مع Stuhl فاعلاً؛ نقول عادةً Der Stuhl steht neben dem Tisch. أما الشخص فيمكنه أن يقول Ich setze mich auf den Stuhl عند الانتقال إلى الجلوس." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: sich setzen وsitzen في مثال محدد",
        content: `في Ich setze mich auf den Stuhl يصف المتكلم جلوس نفسه؛ والكرسي هو الوجهة في العبارة المكانية، لذلك auf den Stuhl. وفي Ich sitze auf dem Stuhl يصف موضع جلوسه، لذلك Dativ. ويساعد زوج setzen/sitzen على فهم المشهد، لكن الحالة تتبع الوجهة أو الموضع ولا تنتج آلياً من كون الفعل متعدياً أو انعكاسياً. وكذلك يختلف legen/liegen في أمثلة الوضع والموضع، مع بقاء السياق ضرورياً.`,
      },
    },
    {
      id: "t3",
      titleAr: "اندماج حرف الجر بأداة التعريف: im, ins, am, ans, aufs",
      titleDe: "Verschmelzungen von Präposition und bestimmtem Artikel",
      explanationAr: `تندمج بعض حروف الجر مع أداة التعريف في صيغ مكتوبة شائعة: in + dem = im، in + das = ins، an + dem = am، an + das = ans، auf + das = aufs. الصيغة المندمجة لا تحذف الحالة؛ يمكن تحليلها إلى حرف الجر والأداة، ثم معرفة الحالة من dem أو das.

في هذه الأمثلة المكانية، im وam تختصران dem (Dativ)، وins وans وaufs تختصر das (Akkusativ). توافق الأداة المختصرة جنس الاسم وعدده وحالته؛ فكّ الاختصار يعيد dem أو das، لا أداةً عامةً لا تتغير. لكن لا تجعل الحرف الأخير قاعدةً عامة لمعنى الحركة والسكون: فـ am Wochenende تعبير زمني، وaufs Neue استعمال غير مكاني. القاعدة هنا عن أصل الأداة والحالة في الأمثلة، أما المعنى فيحدده التركيب.

يمكن أن تظهر الصيغة الكاملة عند التوكيد أو المقابلة: Ich wohne in dem Haus dort جملة صحيحة، وقد يختار المتكلم فيها dem للتحديد. وفي الكتابة المعيارية اكتب auf dem Balkon وunter dem Tisch؛ صيغ مثل aufm وunterm دارجة أو عامية وليست الصيغة المناسبة عادةً لرسالة رسمية. ولا تندمج كل حروف الجر مع كل أدوات التعريف: نقول in der Küche وan der Wand وauf dem Tisch.`,
      whyAr: `معرفة الصيغة الكاملة تساعد على قراءة الإعلانات والحوارات من غير حفظ im وins كأنهما كلمتان منفصلتان عن تركيبها. فإذا ظهر im Keller استطعت التعرف إلى in + dem، وإذا ظهر ins Erdgeschoss تعرفت إلى in + das. ثم تنظر إلى المعنى المكاني: هل الجملة تصف موضعاً أم جهةً مقصودة؟

الاختصار شائع لكنه ليس واجباً في كل سياق، كما أن الصيغة المفصولة لا تصبح خطأً لمجرد وجود اختصار. قد يفيد الفصل في إبراز المقصود. وتعلّم تراكيب الزمن أو المعاني الاصطلاحية على حدة؛ لا تستنتج «حركة» من s أو «سكون» من m خارج الأمثلة المكانية المقصودة.`,
      table: {
        title: "الصيغة المندمجة والأداة التي تختصرها",
        columns: ["الأصل", "الصيغة", "الحالة", "مثال"],
        rows: [
          { label: "in + das", cells: ["ins", "Akkusativ", "Ich ziehe ins Erdgeschoss um."] },
          { label: "in + dem", cells: ["im", "Dativ", "Die Waschküche ist im Keller."] },
          { label: "an + das", cells: ["ans", "Akkusativ", "Stell die Pflanze ans Fenster."] },
          { label: "an + dem", cells: ["am", "Dativ", "Der Briefkasten hängt am Eingang."] },
          { label: "auf + das", cells: ["aufs", "Akkusativ", "Wir gehen aufs Dach."] },
          { label: "auf + dem", cells: ["auf dem (في الكتابة المعيارية)", "Dativ", "Die Wäsche trocknet auf dem Balkon."] },
        ],
      },
      examples: [
        { de: "Die Waschküche ist im Keller.", ar: "غرفة الغسيل في القبو. (im = in + dem)" },
        { de: "Ich ziehe ins Erdgeschoss um.", ar: "أنتقل إلى الطابق الأرضي. (ins = in + das)" },
        { de: "Stell die Pflanze ans Fenster.", ar: "ضع النبتة عند النافذة. (ans = an + das)" },
        { de: "Der Briefkasten hängt am Eingang.", ar: "صندوق البريد معلّق عند المدخل. (am = an + dem)" },
        { de: "Wir gehen aufs Dach.", ar: "نصعد إلى السطح. (aufs = auf + das)" },
        { de: "Die Wäsche trocknet auf dem Balkon.", ar: "تجفّ الملابس على الشرفة. تكتب auf dem مفصولة في الصيغة المعيارية." },
        { de: "Ich wohne in dem Haus dort.", ar: "أسكن في ذلك البيت هناك؛ يمكن فصل الأداة للتوكيد أو التحديد." },
      ],
      comparisonWithArabic: `تُكتب صيغ مثل im وins كلمةً واحدة في الألمانية، مع أنها تجمع حرف جر وأداة تعريف. يمكن للمتعلم أن يفككها ذهنياً عند القراءة، من غير افتراض أن كل لغة تُظهر العلاقة النحوية بالطريقة نفسها. فالمقارنة مع كتابة «في البيت» بالعربية هنا ملاحظة على المثال، لا قاعدة عن جميع حروف الجر أو كل أنواع الوصل في العربية.

في الألمانية نفسها، يبقى الفرق بين in dem وin das مهماً في المثال المكاني: الأول يتضمن dem، والثاني das. لكن المعنى الزمني أو الاصطلاحي لا يُقرأ من حرف أخير وحده؛ احفظ التعبير في سياقه.`,
      eselsbruecke: "فكّ الاختصار: im = in + dem، وins = in + das؛ am = an + dem، وans = an + das؛ aufs = auf + das. هذا يذكّرك بالحالة في هذه التركيبات، لا بمعنى الحركة في كل استعمال.",
      commonMistakes: [
        { wrong: "Ich gehe heute Abend im Kino umher. (أصف مشيي داخل السينما)", right: "Ich gehe heute Abend ins Kino.", classification: "contextual-alternative", whyAr: "الجملة الأولى تصف التجول داخل السينما؛ أما للوصول إليها لمشاهدة فيلم فنقول ins Kino. حرف الجر im ليس خطأً مطلقاً، بل يصف الموقع أو مكان حدوث الحركة." },
        { wrong: "Wir ziehen im eine neue Wohnung um.", right: "Wir ziehen in eine neue Wohnung um.", classification: "error", whyAr: "im تختصر in + dem، ولا يمكن أن تسبق أداة التنكير eine. لذلك تبقى in منفصلة قبل eine؛ أما الاختصار فيتطلب أداة تعريف مناسبة مثل dem أو das." },
        { wrong: "Ich bin ins Kino. (المقصود: أنا داخل السينما الآن)", right: "Ich bin im Kino.", classification: "error", whyAr: "مع bin ووصف المكان الحالي نقول im Kino (in + dem). إذا كان المقصود الذهاب إلى هناك فقل Ich gehe ins Kino؛ يختلف الاختيار باختلاف المعنى المقصود." },
        { wrong: "Bitte schreiben Sie mir aufm Formular.", right: "Bitte schreiben Sie mir auf dem Formular.", classification: "contextual-alternative", whyAr: "aufm صيغة دارجة في الكلام، وليست خطأً في كل حديث؛ في رسالة معيارية أو رسمية اكتب auf dem مفصولة. أما auf + das فيمكن أن تندمج إلى aufs." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: اندماجات حروف الجر الثابتة",
        content: `توجد أيضاً صيغ شائعة مثل zum = zu + dem، zur = zu + der، beim = bei + dem، وvom = von + dem. هذه الأمثلة تبيّن أن شكل الاندماج يتبع الأداة؛ لا يلزم أن ينتهي كل اندماج Dativ بـ m، فـ zur مثال واضح على ذلك. كما لا يوجد مسار Akkusativ مع zu في هذا الاستعمال لأنه يطلب Dativ. افصل هذه التركيبات عن التقابل المكاني لــ in/am/ans، ولا تعمم علامة حرف واحد على جميع الصيغ.`,
      },
    },
    {
      id: "t4",
      titleAr: "قراءة إعلان سكن وترتيب موعد معاينة",
      titleDe: "Wohnungsanzeigen lesen und eine Besichtigung vereinbaren",
      explanationAr: `قد تتضمن إعلانات السكن اختصارات مثل 3-ZKB (ثلاث غرف مع مطبخ وحمّام)، وEG للطابق الأرضي، و2. OG للطابق الثاني فوق الأرضي، وDG للطابق العلوي تحت السقف. هذه مفاتيح شائعة وليست قائمة موحّدة لكل الإعلانات؛ اقرأ وصف الشقة نفسه إذا كان الاختصار غير واضح.

تسمّي Kaltmiete الإيجار الأساسي قبل التكاليف الجانبية. وتعرض إعلانات كثيرة Nebenkosten، أي تكاليف تشغيلية متفقاً عليها، وقد تشمل التدفئة والماء أو غيرهما بحسب العقد. وتدل Warmmiete عادةً على الإيجار مع تكاليف التدفئة والتكاليف الجانبية المدرجة، لا بالضرورة كل مصروف شخصي: قد يدفع المستأجر الكهرباء أو الإنترنت منفصلين. اسأل عن العناصر الداخلة ولا تستنتجها من رقم Warmmiete وحده.

Kaution مبلغ ضمان للسكن، لا رسم معاينة ولا إيجار شهري. في عقود السكن الألمانية يحدد §551 BGB حداً أقصى يعادل ثلاثة أمثال الإيجار الشهري من دون مبالغ Betriebskosten المعروضة كدفعة مقدمة أو مقطوعة؛ ويحق دفع المبلغ النقدي على ثلاثة أقساط شهرية متساوية. لا يعني ذلك أن كل عقد يطلب ثلاثة أشهر، ولا أن ردّ المبلغ يتم تلقائياً فور الخروج؛ قد تتبع الإعادة مراجعة المطالبات وتسوية التكاليف. هذه معلومات تعريفية وليست استشارة قانونية.

للاتصال يمكن كتابة: Ich interessiere mich für Ihre Anzeige. Wäre ein Termin zur Besichtigung möglich? الفعل besichtigen محدد للمعاينة، لكن sehen ليس خطأً لغوياً؛ وZeit تعني الوقت/التفرغ، أما Termin فيشير إلى موعد متفق عليه. من المعقول أن تسأل: Welche Unterlagen brauchen Sie von mir? لا توجد في هذا الدرس قائمة وثائق واحدة واجبة على كل متقدم أو في كل مدينة.

أما Ruhezeiten وHausordnung فتعتمد على قواعد المبنى والجهة المحلية والسياق؛ المثال الوارد في قصة أمير يصف Hausordnung واحدة لا حكماً عاماً على ألمانيا. وعند استلام السكن يمكن تدوين حالته والأضرار الموجودة في Übergabeprotokoll، مع الاحتفاظ بما يوثق ذلك؛ المحضر قد يساعد على توضيح الحالة لكنه ليس ضماناً قانونياً بحد ذاته.`,
      whyAr: `تدريب قراءة إعلان مختصر يفيد في تمييز بيانات موصوفة بوضوح: عدد الغرف، الطابق، الإيجار، والتكاليف المذكورة. لكن المصطلحات المالية ليست معادلات ثابتة تغطي كل إنفاق المستأجر؛ بنود Nebenkosten تعتمد على الاتفاق، وقد توجد خدمات تُدفع منفصلة. لذلك يتعلم الطالب أن يسأل عما يشمله السعر بدل افتراض أن الإعلان يذكر كل شيء.

يظهر هنا فرق بين لغة الطلب الرسمية وبين ادعاء قانوني أو ثقافي. قد تكون صيغة ما أنسب من حيث المباشرة في رسالة معينة، من غير أن تكون الأخرى خطأً نحوياً. وكذلك قد تختلف المستندات المطلوبة ومواعيد المعاينة وقواعد الهدوء بين عروض ومبانٍ وأماكن مختلفة. نستخدم أمثلة محددة للتدرب على القراءة والسؤال، ولا نستنتج منها نظاماً موحداً أو اعتماداً لغوياً أو قانونياً.`,
      table: {
        title: "مصطلحات مختارة في إعلان السكن",
        columns: ["المصطلح", "المعنى التقريبي", "ما ينبغي التحقق منه"],
        rows: [
          { label: "3-ZKB, 85 m²", cells: ["3 غرف، مطبخ وحمّام، 85 م²", "المطبخ والحمام مذكوران إلى جانب عدد الغرف في الاختصار"] },
          { label: "EG / 2. OG / DG", cells: ["الأرضي / الثاني فوق الأرضي / الطابق العلوي تحت السقف", "تختلف طريقة تسمية الطوابق عند الترجمة؛ اقرأ الرمز كما هو"] },
          { label: "Kaltmiete", cells: ["الإيجار الأساسي قبل Nebenkosten", "ما التكاليف غير الداخلة؟"] },
          { label: "Nebenkosten", cells: ["تكاليف تشغيلية متفق عليها، مثل بعض تكاليف الماء أو التدفئة", "القائمة وطريقة التسوية بحسب العقد"] },
          { label: "Warmmiete", cells: ["الإيجار مع التدفئة والتكاليف الجانبية المدرجة عادةً", "قد تبقى الكهرباء والإنترنت أو تكاليف أخرى منفصلة"] },
          { label: "Kaution", cells: ["مبلغ ضمان للسكن", "الحد الأقصى في السكن ثلاثة أمثال الإيجار من دون Betriebskosten؛ ويمكن تقسيط المبلغ النقدي على ثلاثة أشهر"] },
          { label: "Besichtigung", cells: ["معاينة الشقة", "اسأل عن موعد مناسب وما إذا كانت هناك معلومات إضافية"] },
          { label: "Übergabeprotokoll", cells: ["تدوين حالة السكن وقت التسليم", "دوّن الحالة والأضرار الظاهرة واحتفظ بنسخة"] },
        ],
      },
      examples: [
        { de: "In der Anzeige steht: 3-ZKB, 78 m², 2. OG.", ar: "ورد في الإعلان: ثلاث غرف ومطبخ وحمام، 78 م²، والطابق الثاني فوق الأرضي." },
        { de: "Die Kaltmiete beträgt 640 Euro, die Nebenkosten 190 Euro.", ar: "الإيجار الأساسي 640 يورو والتكاليف الجانبية المذكورة 190 يورو." },
        { de: "Welche Kosten sind in der Warmmiete enthalten?", ar: "ما التكاليف الداخلة في الإيجار الشامل؟" },
        { de: "Ich interessiere mich für Ihre Anzeige.", ar: "أنا مهتم بإعلانكم." },
        { de: "Wäre ein Termin zur Besichtigung möglich?", ar: "هل يمكن تحديد موعد لمعاينة الشقة؟" },
        { de: "In unserer Hausordnung stehen Ruhezeiten für dieses Haus.", ar: "يتضمن نظام هذا المبنى أوقات هدوء خاصة به." },
        { de: "Bei der Schlüsselübergabe füllen wir ein Übergabeprotokoll aus.", ar: "نملأ محضر التسليم عند تسليم المفاتيح." },
      ],
      comparisonWithArabic: `تُكوّن الألمانية كثيراً من الأسماء المركبة بضم أجزاء مثل Miet + Vertrag في كلمة واحدة. ويمكن أن تعبّر العربية عن معنى مشابه بالإضافة، مثل «عقد الإيجار»، لكن لا توجد مطابقة حرفية واحدة لكل تركيب؛ فكّك الكلمة الألمانية إلى أجزائها واستعن بآخر جزء لتخمين موضوعها ثم تحقق من المعنى.

أما المقارنة الثقافية فلا يصح تعميمها على البلدان العربية أو على كل المستأجرين في ألمانيا. تجارب السكن تختلف بين الأشخاص والمدن والعقود. استخدم مفردات الدرس لوصف إعلان محدد وطرح سؤال عملي، واذكر تجربتك الشخصية بصفتها تجربة لا قاعدةً عامة.`,
      eselsbruecke: "افصل في الإعلان بين Kaltmiete والتكاليف المتفق عليها، ثم اسأل ماذا تشمل Warmmiete تحديداً. Kaution مبلغ ضمان مستقل، وليس جزءاً من الإيجار الشهري.",
      commonMistakes: [
        { wrong: "Ich interessiere mich an Ihre Wohnung.", right: "Ich interessiere mich für Ihre Wohnung.", classification: "error", whyAr: "في هذا المعنى يأتي الفعل بصيغته الانعكاسية sich für etwas interessieren؛ لذلك نقول für Ihre Wohnung. هذا تركيب يختار فيه الفعل حرف الجر، وليس موضعاً مكانياً تطبق عليه قاعدة wo?/wohin?." },
        { wrong: "Ich will die Wohnung sehen. Wann haben Sie Zeit?", right: "Ich möchte die Wohnung gern besichtigen. Wann wäre ein Termin möglich?", classification: "contextual-alternative", whyAr: "الجملة الأولى صحيحة نحوياً؛ قد تكون مباشرة أو أقل تحديداً في رسالة رسمية بحسب السياق. besichtigen أوضح لمعاينة السكن، وTermin يحدد موعداً متفقاً عليه، لكن sehen وZeit ليسا خطأين مطلقين." },
        { wrong: "Ich freue mich auf der Besichtigung.", right: "Ich freue mich auf die Besichtigung.", classification: "error", whyAr: "في هذا المعنى يختار التعبير sich auf etwas freuen المتمّم auf + Akkusativ: auf die Besichtigung. هذا حرف جر يحدده التركيب، ولا تطبق عليه قاعدة المكان والوجهة لمجرد وجود auf." },
      ],
      relatedRuleComparison: {
        title: "قارِنْ: وصف المنزل في A1 وقراءة إعلان في A2",
        content: `في وصف المنزل تستطيع بناء جملة شخصية مثل Meine Wohnung hat zwei Zimmer. أما الإعلان فيضغط المعلومات في اختصارات ومبالغ ومفردات مركبة مثل 2. OG وNebenkosten. في الحالتين تحتاج إلى مفردات المكان، لكن قراءة الإعلان تتطلب التحقق من معنى الاختصار وما يشمله السعر. لا تستنتج من نموذج واحد أن كل الإعلانات تستخدم الصيغ نفسها أو أن تفاصيل العقد ثابتة.`,
      },
    },
  ],

  reading: {
    id: "read-a2-04",
    titleDe: "Amir sucht eine Wohnung",
    titleAr: "أمير يبحث عن شقّة",
    textType: "erzaehlung",
    paragraphs: [
      "Seit drei Wochen sucht Amir eine neue Wohnung. Sein Zimmer im Studentenwohnheim ist zu klein: Der Schreibtisch steht neben dem Bett, die Bücher liegen auf dem Boden, und die Jacke hängt an der Tür. Im Internet findet er eine Anzeige: „3-ZKB, 78 m², 2. OG, Kaltmiete 640 Euro plus 190 Euro Nebenkosten.“ Sein Nachbar erklärt ihm: „Die Warmmiete besteht aus der Kaltmiete und den vereinbarten Nebenkosten. Prüfe im Angebot, was enthalten ist; Strom und Internet können extra sein.“",
      "Gestern hat Amir eine Antwort bekommen. Die Vermieterin, Frau Krüger, hat einen Termin zur Besichtigung vorgeschlagen. Die Wohnung liegt im 2. Obergeschoss eines Hauses am Stadtrand. Als Amir ankommt, begrüßt ihn Frau Krüger und zeigt ihm die Wohnung.",
      "Die Wohnung ist hell. In der Küche steht ein alter Herd, im Bad hängt ein Spiegel über dem Waschbecken, und zwischen den beiden Zimmern ist eine Glastür. Amir fragt: „Sind die Nebenkosten in der Warmmiete enthalten? Wie hoch ist die Kaution?“ Frau Krüger antwortet: „Die Kaution beträgt zwei Kaltmieten. Nach dem Auszug prüfen wir die Wohnung und rechnen offene Kosten ab; danach erhalten Sie den verbleibenden Betrag zurück.“ Dann zeigt sie ihm die Hausordnung. Für dieses Haus nennt sie Ruhezeiten nach 22 Uhr und am Sonntag.",
      "Eine Woche später bekommt Amir die Zusage. Vor dem Einzug unterschreibt er den Mietvertrag. Am Samstag trägt er seine Kartons durch das Treppenhaus nach oben. Im Hausflur stellt er sie neben den Aufzug. Dann bringt er sie in die Wohnung. In der Wohnung stellt er die Lampe neben das Sofa, legt den Teppich auf den Boden und hängt die Bilder an die Wand. Bei der Schlüsselübergabe füllen beide ein Übergabeprotokoll aus. Frau Krüger sagt: „Notieren Sie jeden vorhandenen Schaden und machen Sie Fotos. Das kann später helfen.“",
    ],
    paragraphsAr: [
      "منذ ثلاثة أسابيع يبحث أمير عن شقة جديدة. غرفته في السكن الجامعي صغيرة جداً: المكتب بجانب السرير، والكتب على الأرض، والسترة معلّقة على الباب. يجد على الإنترنت إعلاناً: «ثلاث غرف ومطبخ وحمّام، 78 م²، الطابق الثاني فوق الأرضي، إيجار أساسي 640 يورو زائد 190 يورو تكاليف جانبية». يشرح له جاره: «الإيجار الشامل يجمع الإيجار الأساسي والتكاليف الجانبية المتفق عليها. تحقّق من الإعلان مما يشمله السعر؛ فقد تُدفع الكهرباء والإنترنت منفصلين».",
      "أمس تلقّى أمير رداً. اقترحت المؤجّرة، السيدة كروغر، موعداً لمعاينة الشقة. تقع الشقة في الطابق الثاني فوق الأرضي في مبنى على أطراف المدينة. وعندما يصل أمير تستقبله السيدة كروغر وتريه الشقة.",
      "الشقة مضيئة. في المطبخ موقد قديم، وفي الحمّام مرآة معلّقة فوق المغسلة، وبين الغرفتين باب زجاجي. يسأل أمير: «هل التكاليف الجانبية داخلة في الإيجار الشامل؟ وكم مبلغ التأمين؟» تجيب السيدة كروغر: «التأمين يساوي إيجارين أساسيين. بعد انتقالك من الشقة نفحصها ونسوّي التكاليف التي لم تُسوَّ بعد؛ ثم نردّ إليك المبلغ المتبقي». ثم تريه نظام هذا المبنى، وتذكر أن أوقات الهدوء فيه تبدأ بعد العاشرة مساءً وتشمل يوم الأحد.",
      "بعد أسبوع يحصل أمير على الموافقة. يوقّع عقد الإيجار قبل الانتقال. يوم السبت يحمل صناديقه عبر بيت الدرج إلى الطابق العلوي. يضعها في مدخل المبنى بجانب المصعد، ثم يدخلها إلى الشقة. في الشقة يضع المصباح بجانب الأريكة، ويفرش السجادة على الأرض، ويعلّق الصور على الجدار. وعند تسليم المفاتيح يملأ الطرفان محضر التسليم. تقول السيدة كروغر: «دوّن كل ضرر موجود والتقط صوراً؛ فقد يساعد ذلك لاحقاً».",
    ],
    glossary: [
      { de: "die Anzeige", ar: "الإعلان", noteAr: "في هذا النص: إعلان سكن." },
      { de: "die Kaltmiete", ar: "الإيجار الأساسي", noteAr: "قبل التكاليف الجانبية المدرجة في العقد." },
      { de: "die Nebenkosten", ar: "التكاليف الجانبية", noteAr: "قد تشمل بنوداً مختلفة بحسب الاتفاق؛ الأمثلة في الإعلان ليست قائمة حصرية." },
      { de: "die Warmmiete", ar: "الإيجار مع تكاليف مدرجة", noteAr: "تحقّق مما يشمله الإعلان؛ قد تبقى الكهرباء أو الإنترنت منفصلين." },
      { de: "die Besichtigung", ar: "معاينة الشقة", noteAr: "من الفعل besichtigen؛ يمكن طلب موعد لها." },
      { de: "die Kaution", ar: "مبلغ ضمان السكن", noteAr: "ليس رسماً؛ مقدارها وشروطها وتوقيت ردّها لا تُستنتج من المثال وحده." },
      { de: "die Vermieterin", ar: "المؤجّرة", noteAr: "المذكّر: der Vermieter." },
      { de: "das Treppenhaus", ar: "بيت الدرج", noteAr: "المساحة المشتركة التي تصل بين طوابق المبنى." },
      { de: "der Mietvertrag", ar: "عقد الإيجار", noteAr: "اتفاق الإيجار، يوقّعه الطرفان قبل الانتقال في القصة." },
      { de: "das Übergabeprotokoll", ar: "محضر التسليم", noteAr: "يُستخدم لتدوين حالة السكن عند التسليم في هذا المثال." },
      { de: "der Schaden", ar: "الضرر", noteAr: "الجمع: die Schäden." },
      { de: "der Stadtrand", ar: "أطراف المدينة", noteAr: "مقابل وسط المدينة في هذا السياق." },
    ],
    questions: [
      {
        id: "rq1", type: "multiple-choice", paragraph: 1,
        instructionAr: "اقرأ الفقرة الأولى: لماذا يبحث أمير عن شقة جديدة?",
        questionDe: "Warum sucht Amir eine neue Wohnung?",
        options: ["Sein Zimmer im Wohnheim ist zu klein", "Er möchte in eine andere Stadt ziehen", "Seine Miete ist zu teuer geworden", "Er hat Streit mit seinem Nachbarn"],
        correctIndex: 0,
        explanation: "النص يقول إن غرفته في السكن الجامعي صغيرة جداً؛ لا يذكر انتقاله إلى مدينة أخرى أو خلافاً مع الجار.",
        errorType: "vocabulary",
      },
      {
        id: "rq2", type: "multiple-choice", paragraph: 1,
        instructionAr: "ماذا يشرح الجار عن Warmmiete؟",
        questionDe: "Was gehört laut dem Text zur Warmmiete?",
        options: ["Kaltmiete plus Nebenkosten", "Nur die Kaltmiete", "Die Kaution und die Maklergebühr", "Nur Strom und Internet"],
        correctIndex: 0,
        explanation: "في هذا المثال يشرح أنها تجمع الإيجار الأساسي والتكاليف الجانبية المتفق عليها؛ ويذكر النص أن الكهرباء والإنترنت قد يكونان منفصلين.",
        errorType: "vocabulary",
      },
      {
        id: "rq3", type: "multiple-choice", paragraph: 3,
        instructionAr: "بحسب جواب السيدة كروغر في القصة، كم تبلغ Kaution؟",
        questionDe: "Wie hoch ist die Kaution in dieser Geschichte?",
        options: ["Drei Kaltmieten", "Eine Warmmiete", "Zwei Kaltmieten", "190 Euro"],
        correctIndex: 2,
        explanation: "تقول السيدة كروغر في هذا المثال: Die Kaution beträgt zwei Kaltmieten. هذه إجابة عن القصة لا قاعدة لكل عقد.",
        errorType: "vocabulary",
      },
      {
        id: "rq4", type: "multiple-choice", paragraph: 3,
        instructionAr: "أين المرآة؟",
        questionDe: "Wo hängt der Spiegel?",
        options: ["In der Küche neben dem Herd", "Im Bad über dem Waschbecken", "Zwischen den beiden Zimmern", "Im Treppenhaus"],
        correctIndex: 1,
        explanation: "ورد في الفقرة أن المرآة في الحمّام فوق المغسلة؛ التركيب يصف موضعاً (Wo?).",
        errorType: "vocabulary",
      },
      {
        id: "rq5", type: "multiple-choice", paragraph: 4,
        instructionAr: "إلى أين يضع أمير المصباح؟",
        questionDe: "Wohin stellt Amir die Lampe?",
        options: ["Neben das Sofa", "Neben dem Sofa", "An die Wand", "Auf den Teppich"],
        correctIndex: 0,
        explanation: "يضع المصباح بجانب الأريكة؛ هي الوجهة في جملة stellen، لذا جاء Akkusativ: neben das Sofa.",
        errorType: "case",
      },
      {
        id: "rq6", type: "multiple-choice", paragraph: 4,
        instructionAr: "ما فائدة محضر التسليم في هذه القصة؟",
        questionDe: "Was machen Amir und Frau Krüger mit dem Übergabeprotokoll?",
        options: ["Sie unterschreiben den Mietvertrag damit", "Sie bezahlen damit die Nebenkosten", "Sie halten den Zustand der Wohnung fest", "Sie schreiben dort die Ruhezeiten auf"],
        correctIndex: 2,
        explanation: "يمتلئ المحضر عند تسليم المفاتيح لتدوين حالة الشقة؛ وتقول المؤجّرة إن التوثيق قد يساعد لاحقاً، لا إنه يضمن نتيجة قانونية.",
        errorType: "vocabulary",
      },
      {
        id: "rq7", type: "multiple-choice", paragraph: 1,
        instructionAr: "ماذا يعني الاختصار 3-ZKB في الإعلان؟",
        questionDe: "Was bedeutet 3-ZKB in der Anzeige?",
        options: ["3 Zimmer, Küche und Bad", "3 Zimmer ohne Küche", "3 Küchen und ein Bad", "3 Zimmer mit Balkon"],
        correctIndex: 0,
        explanation: "في اختصار الإعلان هنا، Z تعني Zimmer، وK Küche، وB Bad.",
        errorType: "vocabulary",
      },
    ],
    redemittel: [
      { de: "Ich interessiere mich für Ihre Anzeige.", ar: "أنا مهتم بإعلانكم." },
      { de: "Wäre ein Termin zur Besichtigung möglich?", ar: "هل يمكن تحديد موعد للمعاينة؟" },
      { de: "Sind die Nebenkosten in der Warmmiete enthalten?", ar: "هل التكاليف الجانبية داخلة في الإيجار المذكور؟" },
      { de: "Wie hoch ist die Kaution?", ar: "كم مبلغ التأمين؟" },
      { de: "Ab wann ist die Wohnung frei?", ar: "من أي تاريخ تصبح الشقة متاحة؟" },
      { de: "Welche Unterlagen brauchen Sie von mir?", ar: "ما المستندات التي تحتاجونها مني؟" },
    ],
    discussionAr: "صِف غرفتك بأفعال المكان: ماذا steht فيها، وماذا liegt، وماذا hängt؟ ثم تخيّل إعلاناً قصيراً وحدد سؤالاً تحتاج إلى طرحه عن السعر أو الموعد. إذا قارنت تجارب سكن شخصية، فلا تعممها على بلد أو مجموعة كاملة.",
  },

  listening: {
    items: [
      {
        id: "l1", title: "معاينة شقة",
        lines: [
          { speaker: "Vermieter", de: "Das ist die Wohnung. Sie hat drei Zimmer und eine Küche.", ar: "هذه هي الشقة. فيها ثلاث غرف ومطبخ." },
          { speaker: "Mona", de: "Schön! Wo ist das Bad?", ar: "جميلة! أين الحمّام؟" },
          { speaker: "Vermieter", de: "Das Bad ist neben dem Schlafzimmer.", ar: "الحمّام بجانب غرفة النوم." },
          { speaker: "Mona", de: "Und wie hoch ist die Miete?", ar: "وكم الإيجار؟" },
          { speaker: "Vermieter", de: "Sechshundert Euro warm.", ar: "ستمائة يورو كإيجار شامل بحسب هذا العرض." },
          { speaker: "Mona", de: "Okay. Ich stelle die Lampe später in die Ecke.", ar: "حسناً. سأضع المصباح لاحقاً في الزاوية." },
          { speaker: "Vermieter", de: "Kein Problem!", ar: "لا مشكلة." },
        ],
      },
      {
        id: "l2", title: "أين نضع الأثاث؟",
        lines: [
          { speaker: "Karim", de: "Ich hänge das Bild an die Wand.", ar: "أعلّق الصورة على الجدار." },
          { speaker: "Anna", de: "Gut! Und die Lampe?", ar: "جيد! وماذا عن المصباح؟" },
          { speaker: "Karim", de: "Ich stelle die Lampe auf den Tisch.", ar: "سأضع المصباح على الطاولة." },
          { speaker: "Anna", de: "Der Teppich liegt unter dem Sofa, richtig?", ar: "السجادة تحت الأريكة، أليس كذلك؟" },
          { speaker: "Karim", de: "Nein, ich lege ihn neben das Sofa.", ar: "لا، سأضع السجادة بجانب الأريكة." },
        ],
      },
      {
        id: "l3", title: "الجيران وقواعد هذا المبنى",
        lines: [
          { speaker: "Nachbarin", de: "Willkommen in der neuen Wohnung! Ich bin Frau Weber aus Wohnung 3.", ar: "مرحباً في الشقة الجديدة! أنا السيدة فيبر من الشقة 3." },
          { speaker: "Mona", de: "Danke! Ich bin Mona. Wie sind die Regeln hier?", ar: "شكراً! أنا منى. ما القواعد هنا؟" },
          { speaker: "Nachbarin", de: "In unserer Hausordnung stehen Ruhezeiten: von 13 bis 15 Uhr und nach 22 Uhr.", ar: "يتضمن نظام مبنانا أوقات هدوء: من 13 إلى 15، وبعد الساعة 22." },
          { speaker: "Mona", de: "Kein Problem. Und der Müll?", ar: "لا مشكلة. وماذا عن النفايات؟" },
          { speaker: "Nachbarin", de: "Wir trennen Papier, Plastik und Bioabfall. Die Tonnen stehen draußen.", ar: "نفرز الورق والبلاستيك والنفايات العضوية. الحاويات في الخارج." },
          { speaker: "Mona", de: "Verstanden. Kann ich meine Schuhe in den Hausflur stellen?", ar: "فهمت. هل أستطيع وضع حذائي في مدخل المبنى؟" },
          { speaker: "Nachbarin", de: "Bitte nicht. Bei uns soll der Hausflur frei bleiben. Im Sommer treffen wir uns manchmal im Hof.", ar: "من فضلك لا؛ ينبغي في مبنانا أن يبقى المدخل خالياً. نجتمع أحياناً في الصيف في الفناء." },
        ],
      },
    ],
    questions: [
      {
        id: "q1", itemId: "l1", type: "multiple-choice",
        instructionAr: "اختر الإجابة بعد الاستماع:", questionDe: "Wo ist das Bad?", questionAr: "أين الحمّام؟",
        options: ["neben dem Schlafzimmer", "neben der Küche", "hinter dem Wohnzimmer", "unter dem Bett"], correctIndex: 0,
        explanation: "قال المؤجّر إن الحمّام بجانب غرفة النوم.", errorType: "preposition",
      },
      {
        id: "q2", itemId: "l1", type: "multiple-choice",
        instructionAr: "اختر ما سمعته:", questionDe: "Wie hoch ist die Miete laut dem Gespräch?", questionAr: "كم الإيجار المذكور في الحوار؟",
        options: ["600 Euro warm", "600 Euro kalt", "300 Euro", "700 Euro warm"], correctIndex: 0,
        explanation: "قال المتحدث: Sechshundert Euro warm. هذه معلومة عن هذا العرض فقط؛ تحقق مما يشمله السعر فعلياً.", errorType: "vocabulary",
      },
      {
        id: "q3", itemId: "l2", type: "multiple-choice",
        instructionAr: "اختر الإجابة بعد الاستماع:", questionDe: "Wohin legt Karim den Teppich?", questionAr: "إلى أين يضع كريم السجادة؟",
        options: ["neben das Sofa", "unter das Sofa", "auf den Tisch", "an die Wand"], correctIndex: 0,
        explanation: "قال: Ich lege ihn neben das Sofa؛ الجملة تحدد الوجهة المقصودة.", errorType: "preposition",
      },
      {
        id: "q4", itemId: "l3", type: "multiple-choice",
        instructionAr: "اختر الوقت الذي ذكرته الجارة في هذا الحوار:", questionDe: "Wann sind die Ruhezeiten laut der Hausordnung?", questionAr: "متى أوقات الهدوء بحسب نظام هذا المبنى؟",
        options: ["von 13 bis 15 Uhr und nach 22 Uhr", "von 8 bis 12 Uhr", "nur nachts", "am Wochenende"], correctIndex: 0,
        explanation: "في الحوار تذكر الجارة القواعد الخاصة بمبناها: من 13 إلى 15 وبعد 22؛ لا يُعمّم ذلك على المباني الأخرى.", errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات السكن: ck، ei، ie",
    items: [
      { de: "umziehen", ar: "ينتقل إلى سكن آخر", note: "IPA: /ˈʊmtsiːən/؛ ie تمثل /iː/ في zieh. التقريب العربي مساعد فقط." },
      { de: "die Miete", ar: "الإيجار", note: "IPA: /ˈmiːtə/؛ ie طويلة /iː/." },
      { de: "der Vermieter", ar: "المؤجّر", note: "IPA: /fɛɐ̯ˈmiːtɐ/؛ في Ver- هنا يبدأ الصوت بـ /f/، لا قاعدة لكل كلمة فيها v." },
      { de: "die Anzeige", ar: "الإعلان", note: "IPA: /ˈanˌt͡saɪ̯ɡə/؛ ei = /aɪ̯/، z = /t͡s/، وg هنا /ɡ/ لا /ɣ/." },
      { de: "zwischen", ar: "بين", note: "IPA: /ˈtsvɪʃn̩/؛ البداية zw ≈ /tsv/، وsch = /ʃ/." },
      { de: "die Ecke", ar: "الزاوية", note: "IPA: /ˈɛkə/؛ ck = /k/ بعد حركة قصيرة." },
    ],
    tip: "الكتابة العربية تقريب تعليمي لا نقل صوتي معياري؛ استخدم IPA أو استمع إلى الصوت عند الحاجة. في zwischen تشبه بداية zw بداية zwei (/tsv/).",
    shadowing: [
      { de: "Die Wohnung hat drei Zimmer.", ar: "في الشقة ثلاث غرف.", tip: "Wohnung /ˈvoːnʊŋ/: w = /v/، وh لا يُنطق هنا؛ o طويلة." },
      { de: "Das Bad ist neben dem Schlafzimmer.", ar: "الحمّام بجانب غرفة النوم.", tip: "neben dem ≈ /ˈneːbn̩ deːm/؛ هذا تقريب صوتي." },
      { de: "Ich stelle die Tasse auf den Tisch.", ar: "أضع الكوب على الطاولة.", tip: "auf den ≈ /aʊ̯f deːn/؛ هنا العبارة وجهة الوضع." },
      { de: "Die Katze liegt unter dem Bett.", ar: "القطة تحت السرير.", tip: "unter dem ≈ /ˈʊntɐ deːm/؛ الجملة تصف موضعاً." },
    ],
  },

  writing: [
    {
      id: "w1", type: "transformation",
      instructionAr: "اكتب جملة الوجهة المطلوبة:",
      prompt: "Wohin legst du das Buch? (اكتب: أضع الكتاب على الطاولة.)",
      acceptedAnswers: ["Ich lege das Buch auf den Tisch", "Ich lege das Buch auf den Tisch."],
      sampleAnswer: "Ich lege das Buch auf den Tisch.",
      explanation: "السؤال عن الوجهة (Wohin?)؛ لذلك نقول auf den Tisch.", errorType: "case",
    },
    {
      id: "w2", type: "fill-blank",
      instructionAr: "أكمل بأداة التعريف الصحيحة في كل جملة:",
      template: "Die Tasse steht auf ___ Tisch. Ich stelle die Tasse auf ___ Tisch. Das Bild hängt an ___ Wand.",
      blanks: [
        { correct: "dem", options: ["dem", "den"] },
        { correct: "den", options: ["dem", "den"] },
        { correct: "der", options: ["dem", "der", "den"] },
      ],
      explanation: "auf dem Tisch يحدد موضع الكوب، وauf den Tisch وجهة وضعه؛ أما الصورة فتعلّق على موضع الجدار: an der Wand.", errorType: "case",
    },
    {
      id: "w3", type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich hänge das Bild an die Wand.",
      explanation: "تعليق الصورة إلى الجدار يحدد وجهة؛ an die Wand.", errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة لوصف موضع الكتاب:",
      questionDe: "Das Buch liegt auf ___ Tisch. (Wo?)",
      options: ["dem", "den", "der", "das"], correctIndex: 0,
      explanation: "الجملة تحدد مكان الكتاب؛ auf dem Tisch.", errorType: "case",
    },
    {
      id: "e2", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة للوجهة:",
      questionDe: "Ich lege das Buch auf ___ Tisch. (Wohin?)",
      options: ["den", "dem", "der", "das"], correctIndex: 0,
      explanation: "الطاولة وجهة وضع الكتاب؛ على الطاولة = auf den Tisch.", errorType: "case",
    },
    {
      id: "e3", type: "matching",
      instructionAr: "صِل كل حرف جر بمعناه المكاني التقريبي في هذه الأمثلة:",
      pairs: [
        { left: "in", right: "داخل" }, { left: "an", right: "عند/على تماسّ" },
        { left: "auf", right: "على سطح" }, { left: "über", right: "فوق" },
        { left: "unter", right: "تحت" }, { left: "vor", right: "أمام" },
        { left: "hinter", right: "خلف" }, { left: "neben", right: "بجانب" },
        { left: "zwischen", right: "بين" },
      ],
      explanation: "هذه مقابلات تقريبية لمعاني مكانية شائعة؛ يتحدد حرف الجر من العلاقة المقصودة والسياق.", errorType: "vocabulary",
    },
    {
      id: "e4", type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["den", "Ich", "Tisch", "auf", "stelle", "die", "Tasse", "."],
      correctSentence: "Ich stelle die Tasse auf den Tisch.",
      explanation: "العبارة المكانية تحدد وجهة وضع الكوب: auf den Tisch.", errorType: "word-order",
    },
    {
      id: "e5", type: "error-correction",
      instructionAr: "صحّح الأداة في جملة الوجهة:",
      wrongSentence: "Ich lege das Buch auf dem Tisch. (المقصود: أضعه على الطاولة)",
      wrongWord: "auf dem", correctWord: "auf den", options: ["auf den", "auf der", "auf das", "an den"],
      explanation: "في المعنى المقصود الطاولة وجهة الوضع، لذلك auf den Tisch.", errorType: "case",
    },
    {
      id: "e6", type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الذي يطابق المعنى بين القوسين:",
      template: "Die Katze schläft ___ dem Sofa. (تحت) Das Bild hängt ___ der Wand. (على تماسّ مع الجدار) Der Schlüssel liegt ___ dem Tisch. (على)",
      blanks: [
        { correct: "unter", options: ["unter", "an", "auf"] },
        { correct: "an", options: ["unter", "an", "auf"] },
        { correct: "auf", options: ["unter", "an", "auf"] },
      ],
      explanation: "في هذه المشاهد: unter dem Sofa، an der Wand، auf dem Tisch.", errorType: "preposition",
    },
    {
      id: "e7", type: "transformation",
      instructionAr: "حوّل وصف الموضع إلى جملة تذكر فعل الوضع والوجهة:",
      prompt: "Die Tasse steht auf dem Tisch. → (أنا أضع الكوب على الطاولة)",
      acceptedAnswers: ["Ich stelle die Tasse auf den Tisch", "Ich stelle die Tasse auf den Tisch."],
      sampleAnswer: "Ich stelle die Tasse auf den Tisch.",
      explanation: "في جملة التحويل الجديدة، الطاولة هي وجهة الوضع: auf den Tisch.", errorType: "case",
    },
    {
      id: "e8", type: "multiple-choice",
      instructionAr: "اختر معنى الفعل في الجملة:",
      questionDe: "Ich ziehe in eine neue Wohnung um.", questionAr: "ما معنى الجملة؟",
      options: ["أنتقل إلى شقة جديدة", "أبحث عن شقة جديدة", "أبيع شقتي", "أشتري شقة"], correctIndex: 0,
      explanation: "umziehen هنا يعني تغيير السكن؛ ويأتي الجزء um في نهاية الجملة الرئيسية.", errorType: "vocabulary",
    },
    {
      id: "e9", type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Miete ist sechshundert Euro warm.",
      wrongWord: "warm", correctWord: "warm", isAlreadyCorrect: true,
      options: ["warm", "heiß", "kalt", "warme"],
      explanation: "الجملة سليمة: warm وصف اصطلاحي للإيجار مع التكاليف المدرجة، وليس درجة حرارة. افحص الإعلان لمعرفة ما يشمله.", errorType: "vocabulary",
    },
    {
      id: "e10", type: "dictation",
      instructionAr: "استمع واكتب الجملة:", audioText: "Ich stelle die Kiste in die Ecke.",
      explanation: "الزاوية هي الوجهة التي توضع فيها الصناديق: in die Ecke.", errorType: "spelling",
    },
    {
      id: "e11", type: "matching",
      instructionAr: "صِل مفردات المبنى بمعانيها:",
      pairs: [
        { left: "der Nachbar", right: "الجار" }, { left: "die Hausordnung", right: "نظام هذا المبنى" },
        { left: "die Ruhezeiten", right: "أوقات الهدوء المحددة" }, { left: "der Hausflur", right: "مدخل/ممر المبنى" },
        { left: "die Nebenkosten", right: "التكاليف الجانبية" },
      ],
      hint: "تختلف قواعد Hausordnung من مبنى إلى آخر؛ لا تفترض ساعات موحّدة.",
      explanation: "الأزواج توضح معاني المفردات في سياق السكن.", errorType: "vocabulary", points: 2,
    },
    {
      id: "e12", type: "fill-blank",
      instructionAr: "أكمل الأداة التي تناسب الوجهة ثم الموضع:",
      template: "Der Müll kommt in ___ Tonne. (Wohin?) · Der Teppich liegt im ___ (غرفة المعيشة)",
      blanks: [
        { correct: "die", options: ["die", "der", "dem", "das"] },
        { correct: "Wohnzimmer", options: ["Wohnzimmer", "Wohnzimmers", "Wohnzimmeres"] },
      ],
      hint: "الأولى وجهة: in die Tonne. والثانية im = in dem، والاسم بعده Wohnzimmer.",
      explanation: "Die Tonne وجهة مؤنثة في Akkusativ؛ أما im Wohnzimmer فيصف موضع السجادة.", errorType: "case", points: 2,
    },
    {
      id: "e13", type: "fill-blank",
      instructionAr: "أكمل بالأداة المناسبة للموضع ثم وجهة التعليق:",
      template: "Der Spiegel hängt an ___ Wand, aber ich hänge das Bild an ___ Wand daneben.",
      blanks: [
        { correct: "der", options: ["der", "die", "dem"], errorType: "case" },
        { correct: "die", options: ["die", "der", "dem"], errorType: "case" },
      ],
      explanation: "الصورة الأولى موضع ثابت: an der Wand. وفي الثانية الجدار وجهة التعليق: an die Wand.", errorType: "case",
    },
    {
      id: "e14", type: "multiple-choice",
      instructionAr: "اختر الفعل الذي يصف المشهد المحدد:",
      questionDe: "Ich ___ die Vase auf den Tisch. (أضعها قائمة على قاعدتها)",
      options: ["stelle", "lege", "setze", "liege"], correctIndex: 0,
      explanation: "في المشهد المحدد تكون المزهرية قائمة؛ لذلك stelle. ولو وُضعت على جانبها فقد يلائم legen؛ والوجهة هنا auf den Tisch.", errorType: "vocabulary",
    },
    {
      id: "e15", type: "error-correction",
      instructionAr: "صحّح الصيغة مع الحفاظ على معنى الوجهة بين القوسين:",
      wrongSentence: "Am Samstag ziehen wir im Erdgeschoss um. (المقصود: ننتقل إلى الطابق الأرضي)",
      wrongWord: "im", correctWord: "ins", options: ["ins", "am", "aufs", "beim"],
      explanation: "مع معنى الانتقال إلى الطابق الأرضي نقول ins Erdgeschoss؛ أما im فيصف موقعاً.", errorType: "preposition",
    },
    {
      id: "e16", type: "matching",
      instructionAr: "صِل كل مصطلح مالي بشرحه المحدد:",
      pairs: [
        { left: "die Kaltmiete", right: "الإيجار الأساسي قبل التكاليف الجانبية" },
        { left: "die Nebenkosten", right: "تكاليف تشغيلية وفق الاتفاق" },
        { left: "die Warmmiete", right: "الإيجار مع التدفئة والتكاليف المدرجة عادةً" },
        { left: "die Kaution", right: "مبلغ ضمان للسكن، وليس إيجاراً شهرياً" },
      ],
      explanation: "تحقّق من قائمة التكاليف المشمولة في الإعلان والعقد؛ لا تعني Warmmiete بالضرورة كل مصاريف السكن الشخصية.", errorType: "vocabulary",
    },
    {
      id: "e17", type: "transformation",
      instructionAr: "حوّل من وصف الموضع إلى جملة تصف وضع السجادة:",
      prompt: "Der Teppich liegt auf dem Boden. → (Ich ...)",
      acceptedAnswers: ["Ich lege den Teppich auf den Boden.", "Ich lege den Teppich auf den Boden"],
      sampleAnswer: "Ich lege den Teppich auf den Boden.",
      explanation: "في الجملة الأولى السجادة على الأرض؛ وفي الثانية يذكر المتكلم وضعها على الأرض، وهي الوجهة.", errorType: "case",
    },
    {
      id: "e18", type: "multiple-choice",
      instructionAr: "اختر الفعل الأدقّ حين يريد المتكلم معاينة الشقة بنفسه:",
      questionDe: "Ich möchte die Wohnung gern ___ . Können wir einen Termin vereinbaren?",
      options: ["besichtigen", "aussehen", "anschauen lassen", "besuchen"], correctIndex: 0,
      explanation: "besichtigen هو الفعل الأدقّ لمعاينة الشقة بنفس المتكلم. anschauen lassen قد يعني أن يطلب من شخص آخر النظر إليها؛ وbesuchen وaussehen لا يؤديان المعنى المقصود هنا.", errorType: "vocabulary",
    },
    {
      id: "e19", type: "fill-blank",
      instructionAr: "أكمل بالفعل المناسب بحسب المشهد الموضّح:",
      template: "Der Schlüssel ___ noch im Schloss, und die Kartons stehen aufrecht neben dem Aufzug.",
      blanks: [{ correct: "steckt", options: ["steckt", "stellt", "legt"] }],
      explanation: "المفتاح موجود داخل القفل: steckt. وaufrecht توضح أن الصناديق قائمة، لذلك stehen.", errorType: "vocabulary",
    },
    {
      id: "e20", type: "word-ordering",
      instructionAr: "رتّب سؤال المعاينة:",
      tokens: ["die", "Sind", "in", "der", "Nebenkosten", "Warmmiete", "enthalten", "?"],
      correctSentence: "Sind die Nebenkosten in der Warmmiete enthalten?",
      explanation: "يبدأ السؤال بالفعل المصرف Sind؛ وتأتي بقية العبارة وenthalten في النهاية.", errorType: "word-order",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich lege das Buch auf dem Tisch.", right: "Ich lege das Buch auf den Tisch.", whyAr: "في هذا المقصود يضع المتكلم الكتاب إلى الطاولة؛ الطاولة وجهة، لذلك auf den Tisch.", classification: "error" },
      { wrong: "Der Teppich liegt auf den Boden.", right: "Der Teppich liegt auf dem Boden.", whyAr: "الجملة تصف موضع السجادة على الأرض، لا وجهة نقلها؛ لذلك auf dem Boden.", classification: "error" },
      { wrong: "Der Tisch steht neben das Sofa.", right: "Der Tisch steht neben dem Sofa.", whyAr: "هنا نصف موضع الطاولة بجانب الأريكة: neben dem Sofa. أما وضع الطاولة إلى جوارها فيتطلب معنى وجهة مختلفاً.", classification: "error" },
    ],
    eselsbruecken: [
      "في الأمثلة المكانية: Wo? يحدد الموقع أو مكان حدوث الحركة فيأتي Dativ؛ وWohin? يحدد الوجهة فيأتي Akkusativ. لا تكفي الحركة الجسدية وحدها.",
      "أزواج stellen/stehen وlegen/liegen تساعدك على تخيل المشهد؛ اسأل مع ذلك عن دور عبارة المكان، ولا تستنتج الحالة من تعدّي الفعل وحده.",
    ],
    culturalNote: {
      title: "مصطلحات السكن والسياق المحلي",
      content: "هذه أمثلة لغوية عامة وليست استشارة قانونية. تختلف عناصر Nebenkosten وWarmmiete بحسب العرض والعقد، وقد تُدفع الكهرباء أو الإنترنت منفصلين. يحدد §551 BGB سقف Mietkaution في السكن ويجيز دفع المبلغ النقدي على ثلاثة أقساط شهرية؛ لا يعني ذلك أن كل عقد يطلب السقف أو أن الرد فوري. أما Ruhezeiten فتُقرأ من Hausordnung والقواعد المطبقة على المكان؛ المثال السمعي يخص مبنى متخيلاً واحداً فقط.",
    },
  },

  miniTest: [
    {
      id: "m1", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة للوجهة:",
      questionDe: "Ich stelle die Vase auf ___ Tisch. (Wohin?)",
      options: ["den", "dem", "der", "das"], correctIndex: 0,
      explanation: "الطاولة وجهة وضع المزهرية: auf den Tisch.", errorType: "case",
    },
    {
      id: "m2", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة للموضع:",
      questionDe: "Die Vase steht auf ___ Tisch. (Wo?)",
      options: ["dem", "den", "der", "das"], correctIndex: 0,
      explanation: "الجملة تصف موضع المزهرية: auf dem Tisch.", errorType: "case",
    },
    {
      id: "m3", type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["die", "Wand", "an", "Ich", "Bild", "das", "hänge", "."],
      correctSentence: "Ich hänge das Bild an die Wand.",
      explanation: "في هذا المثال الجدار هو وجهة التعليق: an die Wand.", errorType: "word-order",
    },
    {
      id: "m4", type: "error-correction",
      instructionAr: "صحّح أداة المكان:",
      wrongSentence: "Die Katze liegt unter den Bett.",
      wrongWord: "unter den", correctWord: "unter dem", options: ["unter dem", "unter den", "unter das", "unter der"],
      explanation: "Bett محايد، والجملة تصف موضع القطة؛ لذلك unter dem Bett.", errorType: "case",
    },
    {
      id: "m5", type: "fill-blank",
      instructionAr: "أكمل بالأداة الصحيحة: موضع الأريكة ثم وجهة الكرسي:",
      template: "Der Tisch steht neben ___ Sofa. Ich stelle den Stuhl neben ___ Sofa.",
      blanks: [
        { correct: "dem", options: ["dem", "den"] },
        { correct: "das", options: ["das", "dem"] },
      ],
      explanation: "الموضع neben dem Sofa، لكن الأريكة (das Sofa) وجهة وضع الكرسي: neben das Sofa.", errorType: "case",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "umziehen",
      ar: "ينتقل (سكناً)",
      example: "Ich bin umgezogen.",
      exampleAr: "انتقلت.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Miete",
      ar: "الإيجار",
      example: "Die Miete ist hoch.",
      exampleAr: "الإيجار مرتفع.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "der Vermieter",
      ar: "المؤجر",
      example: "Der Vermieter ist nett.",
      exampleAr: "المؤجر لطيف.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "die Wechselpräpositionen",
      ar: "حروف الجر المتغيرة",
      example: "in, an, auf, über, unter...",
      exampleAr: "في، على، فوق، تحت...",
      level: "A2",
    },
    {
      id: "fc5",
      de: "wo? (Dativ) / wohin? (Akkusativ)",
      ar: "أين؟ (موضع أو مكان الحركة) / إلى أين؟ (الوجهة)",
      example: "auf dem Tisch / auf den Tisch",
      exampleAr: "على الطاولة (موضع) / إلى الطاولة (وجهة)",
      level: "A2",
    },
    {
      id: "fc6",
      de: "stellen / stehen",
      ar: "يضع الشيء قائماً في هذا المشهد / يكون قائماً",
      example: "Ich stelle die Lampe neben das Sofa.",
      exampleAr: "أضع المصباح بجانب الأريكة.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "legen / liegen",
      ar: "يضعه ممدّداً / يكون ممدّداً أو موضوعاً",
      example: "Ich lege das Buch auf den Tisch.",
      exampleAr: "أضع الكتاب على الطاولة.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Anzeige",
      ar: "الإعلان",
      example: "Die Anzeige ist im Internet.",
      exampleAr: "الإعلان على الإنترنت.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "der Nachbar",
      ar: "الجار",
      example: "Der Nachbar ist freundlich.",
      exampleAr: "الجار ودود.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "die Hausordnung",
      ar: "نظام البيت/قواعد البناء",
      example: "Bitte lesen Sie die Hausordnung dieses Hauses.",
      exampleAr: "يُرجى قراءة نظام هذا المبنى.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "die Ruhezeiten",
      ar: "أوقات الهدوء",
      example: "In dieser Hausordnung stehen Ruhezeiten von 13 bis 15 Uhr.",
      exampleAr: "ينص نظام هذا المبنى على أوقات هدوء من 13 إلى 15.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "der Hausflur",
      ar: "مدخل المبنى",
      example: "Der Hausflur ist sauber.",
      exampleAr: "مدخل المبنى نظيف.",
      level: "A2",
    },
    {
      id: "f13",
      de: "die Kaltmiete / die Warmmiete",
      ar: "الإيجار الأساسي / الإيجار مع التكاليف المدرجة عادةً",
      example: "Die Kaltmiete beträgt 640 Euro. Die Warmmiete beträgt 830 Euro.",
      exampleAr: "الإيجار الأساسي 640 يورو، والإيجار مع التكاليف المدرجة في هذا العرض 830 يورو.",
      level: "A2",
    },
    {
      id: "f14",
      de: "die Nebenkosten",
      ar: "تكاليف جانبية بحسب الاتفاق",
      example: "Sind die Nebenkosten in der Warmmiete enthalten?",
      exampleAr: "هل المصاريف الإضافيّة داخلةٌ في الإيجار الشامل؟",
      level: "A2",
    },
    {
      id: "f15",
      de: "die Kaution",
      ar: "مبلغ ضمان للسكن؛ شروط وتوقيت ردّه بحسب التسوية",
      example: "Die Kaution beträgt zwei Kaltmieten.",
      exampleAr: "مبلغ الضمان يساوي إيجارين أساسيين.",
      level: "A2",
    },
    {
      id: "f16",
      de: "besichtigen / die Besichtigung",
      ar: "يعاين / المعاينة",
      example: "Ich möchte die Wohnung gern besichtigen.",
      exampleAr: "أودّ معاينة الشقّة.",
      level: "A2",
    },
    {
      id: "f17",
      de: "setzen / sitzen",
      ar: "يُجلِس / يجلس",
      example: "Ich setze mich auf den Sessel; jetzt sitze ich auf dem Sessel.",
      exampleAr: "أجلس على الكرسيّ؛ والآن أنا جالسٌ عليه.",
      level: "A2",
    },
    {
      id: "f18",
      de: "hängen / stecken",
      ar: "يعلّق أو يكون معلّقاً / يُدخل أو يوجد داخل موضع",
      example:
        "Der Mantel hängt an der Garderobe und der Schlüssel steckt im Schloss.",
      exampleAr: "المعطف معلّق على المشجب، والمفتاح داخل القفل.",
      level: "A2",
    },
    {
      id: "f19",
      de: "das Erdgeschoss",
      ar: "الطابق الأرضيّ",
      example: "Wir tragen die Kartons ins Erdgeschoss.",
      exampleAr: "نحمل الصناديق إلى الطابق الأرضيّ.",
      level: "A2",
    },
    {
      id: "f20",
      de: "das Übergabeprotokoll",
      ar: "محضر التسليم",
      example: "Notieren Sie vorhandene Schäden im Übergabeprotokoll.",
      exampleAr: "دوّن الأضرار الموجودة في محضر التسليم.",
      level: "A2",
    },
  ],

  /* ═══ الوساطة والتفاعل الاختياريان ═══ */
  mediation: [
    {
      id: "med-a2-04-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص إعلان سكن بالعربية لصديق",
      sourceDe: "Helle 3-Zimmer-Wohnung im 2. Obergeschoss. Balkon, Einbauküche, Keller. 750 Euro warm. Besichtigung am Samstag.",
      taskAr: "لخّص الإعلان: نوع الشقة، الطابق، المميزات، الإيجار، وموعد المعاينة. لا تفترض من كلمة warm وحدها كل التكاليف المشمولة.",
      modelAnswerAr: "شقة مضيئة من ثلاث غرف في الطابق الثاني فوق الأرضي. فيها شرفة ومطبخ مركّب وقبو. الإيجار المعلن 750 يورو Warmmiete؛ اسأل عمّا يشمله. المعاينة يوم السبت.",
      keyPointsAr: [
        "نقل عدد الغرف والطابق بدقة من دون خلط ترقيم الطوابق",
        "ذكر الشرفة والمطبخ المركب والقبو",
        "نقل مبلغ 750 يورو ووصفه كما ورد في الإعلان مع التنبيه إلى التحقق مما يشمله",
        "ذكر أن المعاينة يوم السبت",
      ],
    },
  ],

  interaction: [
    {
      id: "int-a2-04-1",
      scenarioAr: "تتصل بمؤجّرة شقة لتسأل هل ما زالت متاحة وتطلب موعد معاينة.",
      scenarioDe: "Anruf bei der Vermieterin: Verfügbarkeit erfragen und eine Besichtigung vereinbaren.",
      strategyAr: "اختر رداً يحقق غرض الجولة. قد يكون المشتت سليماً نحوياً لكنه لا يناسب الموقف؛ هذا تفاعل نصي اختياري، وليس تقويماً للكلام.",
      rounds: [
        {
          speakerDe: "Guten Tag, rufen Sie wegen der Wohnungsanzeige an?",
          speakerAr: "نهارك سعيد، هل تتصل بخصوص إعلان الشقة؟",
          options: [
            {
              de: "Ja, genau. Ist die Wohnung noch frei?",
              ar: "نعم، بالضبط. هل الشقة ما زالت متاحة؟",
              best: true,
              replyDe: "Ja, sie ist noch frei. Möchten Sie sie besichtigen?",
              replyAr: "نعم، ما زالت متاحة. هل ترغب في معاينتها؟",
            },
            {
              de: "Nein, ich möchte ein Hotelzimmer reservieren.",
              ar: "لا، أريد حجز غرفة في فندق.",
              best: false,
              replyDe: "Hier geht es um eine Wohnungsanzeige.",
              replyAr: "المكالمة هنا بخصوص إعلان شقة.",
            },
          ],
        },
        {
          speakerDe: "Möchten Sie die Wohnung besichtigen?",
          speakerAr: "هل ترغب في معاينة الشقة؟",
          options: [
            {
              de: "Ja, gern. Wann wäre ein Termin möglich?",
              ar: "نعم، بكل سرور. متى يمكن تحديد موعد؟",
              best: true,
              replyDe: "Samstag um elf Uhr wäre möglich. Passt Ihnen das?",
              replyAr: "يمكن يوم السبت الساعة الحادية عشرة. هل يناسبك؟",
            },
            {
              de: "Ja, gern. Passt Ihnen Samstag um elf Uhr?",
              ar: "نعم، بكل سرور. هل يناسبك السبت الساعة الحادية عشرة؟",
              best: true,
              replyDe: "Samstag um elf Uhr passt. Ich notiere den Termin.",
              replyAr: "السبت الساعة الحادية عشرة مناسب. سأدوّن الموعد.",
            },
            {
              de: "Ich möchte lieber ein Auto mieten.",
              ar: "أفضل أن أستأجر سيارة.",
              best: false,
              replyDe: "Hier geht es um eine Wohnungsbesichtigung.",
              replyAr: "المكالمة هنا عن معاينة شقة.",
            },
          ],
        },
      ],
    },
  ],
};
