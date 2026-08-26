import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-06: الإعلام والأخبار — بناء الرأي والجملة المكملة بـ dass
 * نسخة أكاديمية عميقة: تدرّج من الجملة المستقلة إلى الجملة المركبة، مع قراءة ممتدة.
 */
export const lessonA206: Lesson = {
  id: "a2-06",
  unitId: "a2-06",
  level: "A2",
  order: 1,
  titleDe: "Medien und Nachrichten",
  titleAr: "الإعلام والأخبار",
  duration: 50,
  summary: "التحدث عن وسائل الإعلام، التمييز بين الخبر والرأي، وبناء الجملة المكملة بـ dass مع وضع الفعل في النهاية.",

  lernziele: [
    { id: "z1", de: "Ich kann verschiedene Medien nennen und ihre Funktionen beschreiben.", ar: "أن أسمّي وسائل الإعلام وأصف وظيفة كل وسيلة." },
    { id: "z2", de: "Ich kann meine Meinung begründen und vorsichtig ausdrücken.", ar: "أن أعبّر عن رأيي وأدعمه بسبب بسيط." },
    { id: "z3", de: "Ich kann dass-Sätze im Haupt- und Nebensatz bilden.", ar: "أن أبني جمل dass في الترتيبين الرئيس والثانوي." },
    { id: "z4", de: "Ich kann einen kurzen Informationstext lesen und zusammenfassen.", ar: "أن أقرأ نصًا معلوماتيًا قصيرًا وألخّص فكرته." },
  ],

  einfuehrung: {
    motivatingQuestionAr: "عندما تقول «أعتقد أن الأخبار مهمة»، أين تضع الفعل في الألمانية؟ هل يبقى في المركز الثاني كما في الجملة الرئيسية، أم ينتقل إلى نهاية الجملة التابعة؟ حاول بناء الجملة قبل قراءة القاعدة.",
    motivatingQuestionDe: "Was denkst du über Nachrichten im Internet?",
    contextAr: "نحن لا نكتفي في التواصل المتقدم بجملة مثل Ich finde das gut؛ بل نحتاج إلى نقل فكرة كاملة: Ich finde, dass ... . لذلك سنربط مفردات الإعلام بقاعدة ترتيب الجملة، ثم نقرأ نصًا عن عادات استهلاك الأخبار.",
    contextDe: "Ich finde, dass gute Nachrichten wichtig sind.",
    connectionToPreviousAr: "في A1 تعلمت ترتيب الجملة الأساسية والفعل في المركز الثاني، وفي الدرس السابق تدربت على أزمنة الماضي. الآن نحتفظ بالفعل المصرف، لكن نغيّر موضعه عندما تبدأ الجملة بـ dass.",
    activateVocabulary: [
      { de: "die Nachricht", ar: "الخبر" },
      { de: "die Zeitung", ar: "الصحيفة" },
      { de: "der Bericht", ar: "التقرير" },
      { de: "die Meinung", ar: "الرأي" },
      { de: "die Quelle", ar: "المصدر" },
    ],
  },

  review: [
    { id: "r1", type: "multiple-choice", instructionAr: "مراجعة A1: اختر تصريف الفعل.", questionDe: "Ich ___ gern die Zeitung.", options: ["lese", "liest", "lesen", "lest"], correctIndex: 0, explanation: "مع ich نستخدم lese.", errorType: "conjugation" },
    { id: "r2", type: "multiple-choice", instructionAr: "مراجعة A1: اختر حرف الجر الصحيح.", questionDe: "Ich lese Nachrichten ___ Internet.", options: ["im", "am", "um", "bei"], correctIndex: 0, explanation: "نقول im Internet.", errorType: "preposition" },
    { id: "r3", type: "fill-blank", instructionAr: "أكمل كلمة الإعلام.", template: "Ich sehe gern ___.", blanks: [{ correct: "fern", options: ["fern", "Zeitung", "Quelle"] }], explanation: "sehen + fern = مشاهدة التلفاز.", errorType: "vocabulary" },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "من الجملة الرئيسية إلى الجملة المكملة بـ dass",
      titleDe: "Hauptsatz und dass-Nebensatz",
      explanationAr: "الجملة الألمانية الأساسية تتكوّن غالبًا من فاعل وفعل في المركز الثاني وبقية المعلومات: Die Zeitung informiert die Leser. عندما نريد أن نضع فكرة كاملة بعد أفعال مثل sagen (يقول)، glauben (يعتقد)، denken (يفكر)، finden (يرى/يجد)، hoffen (يأمل)، نستخدم dass بمعنى «أنّ». dass ليست اسمًا ولا أداة تعريف؛ إنها أداة ربط تفتح جملة ثانوية. بعد dass لا نبدأ بفعل جديد في المركز الثاني، بل نضع الفاعل ثم المكونات الأخرى ثم الفعل المصرف في النهاية: Ich glaube, dass die Zeitung die Leser informiert. يمكن تخيل الجملة الثانوية صندوقًا نحويًا؛ كلمة dass تحدد بدايته، والفعل المصرف يغلقه. الخطوات العملية هي: أولًا اكتب فعل الرأي في الجملة الرئيسية، ثم فاصلة، ثم dass، ثم الفاعل، ثم المفعول أو الظرف، ثم الفعل في النهاية. إذا كان هناك فعل مساعد أو فعل ناقص، يذهب الفعل المصرف إلى النهاية ويبقى المصدر أو Partizip II قبله: Ich glaube, dass er kommen kann. في مستوى A2 نبدأ بجمل قصيرة، لكن المبدأ نفسه سيبقى في weil وwenn وob لاحقًا.",
      whyAr: "الصعوبة الأساسية للناطق بالعربية ليست معنى dass، فالعربية تملك «أنّ»، بل مراقبة ترتيب الفعل. العربية تسمح بترتيبات مختلفة بحسب الأسلوب، أما الألمانية فتضع علامة واضحة على نهاية الجملة الثانوية. لذلك لا تحفظ مثالًا واحدًا فقط؛ حدّد حدود الجملة: dass er heute kommt، وليس dass er kommt heute. الفاصلة قبل dass مهمة كتابيًا لأنها تفصل الجملة الرئيسية عن التابعة، ولا تعني وقفة عشوائية فقط.",
      table: { title: "مقارنة الترتيبين", columns: ["الوظيفة", "البنية", "المثال"], rows: [
        { label: "جملة رئيسية", cells: ["فاعل + فعل + بقية الجملة", "Die Zeitung informiert die Leser." ] },
        { label: "جملة dass", cells: ["dass + فاعل + بقية الجملة + فعل", "..., dass die Zeitung die Leser informiert." ] },
        { label: "فعل ناقص", cells: ["... + مصدر + الفعل الناقص", "..., dass er kommen kann." ] },
        { label: "فعل منفصل", cells: ["الفعل كامل في النهاية", "..., dass sie die Nachrichten liest." ] },
      ] },
      examples: [
        { de: "Ich finde, dass die Zeitung interessant ist.", ar: "أرى أن الصحيفة ممتعة." },
        { de: "Ich glaube, dass die Nachrichten wichtig sind.", ar: "أعتقد أن الأخبار مهمة." },
        { de: "Er sagt, dass er heute keine Zeit hat.", ar: "يقول إنه لا يملك وقتًا اليوم." },
        { de: "Wir hoffen, dass der Bericht morgen kommt.", ar: "نأمل أن يأتي التقرير غدًا." },
        { de: "Sie denkt, dass man die Quelle prüfen muss.", ar: "تعتقد أنه يجب فحص المصدر." },
        { de: "Ich weiß, dass du gern Radio hörst.", ar: "أعرف أنك تحب الاستماع إلى الراديو." },
      ],
      comparisonWithArabic: "في العربية نقول: أعتقد أن الخبر مهم. في الألمانية: Ich glaube, dass die Nachricht wichtig ist. أداة «أنّ» موجودة في اللغتين، لكن الألمانية تجعل الفعل المصرف في النهاية بصورة إلزامية تقريبًا في هذا المستوى.",
      eselsbruecke: "dass تفتح الباب، والفعل يغلقه: dass ... kommt. اكتب قوسًا ذهنيًا حول الجملة التابعة ولا تضع الفعل قبل القوس الأخير.",
      commonMistakes: [
        { wrong: "Ich glaube, dass er kommt heute.", right: "Ich glaube, dass er heute kommt.", whyAr: "الفعل المصرف يأتي في نهاية الجملة التابعة." },
        { wrong: "Ich denke, das die Zeitung gut ist.", right: "Ich denke, dass die Zeitung gut ist.", whyAr: "dass أداة ربط بمعنى أن، أما das فأداة تعريف أو ضمير." },
        { wrong: "Ich glaube, dass ich habe keine Zeit.", right: "Ich glaube, dass ich keine Zeit habe.", whyAr: "حتى الفعل المساعد المصرف ينتقل إلى النهاية." },
        { wrong: "Ich hoffe dass du kommst.", right: "Ich hoffe, dass du kommst.", whyAr: "الفاصلة تفصل الجملة الرئيسية عن الجملة التابعة." },
      ],
      relatedRuleComparison: { title: "dass أم weil؟", content: "dass يقدّم مضمون فكرة: Ich denke, dass ... . أما weil فيقدّم سببًا: Ich lerne, weil ... . الاثنان يرسلان الفعل إلى النهاية، لكن العلاقة المنطقية مختلفة: مضمون مقابل سبب." },
    },
    {
      id: "t2",
      titleAr: "التعبير عن الرأي والتمييز بين الخبر والرأي",
      titleDe: "Meinung, Tatsache und vorsichtige Bewertung",
      explanationAr: "الرأي ليس مجرد كلمة gut أو schlecht؛ في التواصل الألماني نحتاج إلى فعل يحدد موقف المتكلم، ثم مضمون واضح، ثم سبب أو قيد. أفعال الرأي الأساسية هي finden وdenken وglauben، ويمكن أن تتبعها جملة dass: Ich finde, dass ... . الفرق الدلالي بينها ليس حادًا في كل سياق: finden يعبّر عن تقييم شخصي أو انطباع، denken عن فكرة أو استنتاج، glauben عن اعتقاد أو احتمال يراه المتكلم صحيحًا. hoffen لا يعني رأيًا حاضرًا بل أملًا في المستقبل، وwissen يدل على معرفة يقدّمها المتكلم كحقيقة. لذلك لا ينبغي تعليمها كمرادفات تامة. يمكن بناء إجابة A2 من أربع درجات: موقف، مضمون، سبب، مثال: Ich finde, dass Online-Nachrichten praktisch sind, weil sie schnell sind. عند نقل كلام شخص آخر لا نخلط بين الحقيقة والرأي: Die Zeitung erscheint am Morgen هي معلومة قابلة للتحقق، أما Ich finde, dass die Zeitung zu lang ist فهو تقييم. عبارات مثل Meiner Meinung nach وFür mich تساعد على تحديد أن الكلام شخصي. ولتلطيف الرأي نستخدم أحيانًا Ich glaube, dass أو Ich denke, dass بدل صيغة قطعية. هذا لا يعني أن المتعلم يتجنب الوضوح؛ بل يتعلم أن يربط درجة اليقين بالصيغة المناسبة. في A2 يكفي سبب واحد واضح، لكن يجب أن يبقى الفعل في نهاية dass مهما طال المكوّن الذي قبله.",
      whyAr: "يميل المتعلم العربي إلى ترجمة «أظن» و«أعتقد» بكلمة واحدة، ثم يبني الجملة الألمانية بترتيب العربية. التدريب الأفضل هو فصل الوظائف: ما الوسيلة؟ ما المعلومة؟ ما رأيي؟ ما السبب؟ كما يجب الانتباه إلى أن Meinung مؤنث، وأن Nachrichten جمع، ولذلك نقول Meine Meinung ist ... وDie Nachrichten sind ... .",
      table: { title: "أفعال وعبارات الموقف", columns: ["العبارة", "الدلالة التقريبية", "مثال"], rows: [
        { label: "Ich finde, dass ...", cells: ["تقييم شخصي", "Ich finde, dass der Bericht klar ist." ] },
        { label: "Ich denke, dass ...", cells: ["فكرة أو استنتاج", "Ich denke, dass die Quelle zuverlässig ist." ] },
        { label: "Ich glaube, dass ...", cells: ["اعتقاد/ترجيح", "Ich glaube, dass er online liest." ] },
        { label: "Ich hoffe, dass ...", cells: ["أمل", "Ich hoffe, dass du die Nachricht bekommst." ] },
        { label: "Meiner Meinung nach ...", cells: ["تحديد ذاتية الرأي", "Meiner Meinung nach ist Radio praktisch." ] },
      ] },
      examples: [
        { de: "Meiner Meinung nach ist Radio praktisch.", ar: "في رأيي، الراديو عملي." },
        { de: "Ich denke, dass Online-Nachrichten schnell sind.", ar: "أظن أن الأخبار على الإنترنت سريعة." },
        { de: "Ich finde, dass dieser Bericht zu lang ist.", ar: "أرى أن هذا التقرير طويل أكثر من اللازم." },
        { de: "Ich glaube, dass die Quelle zuverlässig ist.", ar: "أعتقد أن المصدر موثوق." },
        { de: "Ich hoffe, dass die Zeitung morgen erscheint.", ar: "آمل أن تصدر الصحيفة غدًا." },
        { de: "Ich weiß, dass die Bibliothek geschlossen ist.", ar: "أعرف أن المكتبة مغلقة." },
      ],
      comparisonWithArabic: "العربية تملك «في رأيي» و«أعتقد» و«أعرف» مثل الألمانية، لكن ترتيب الجملة بعد أن يبقى أكثر ثباتًا في الألمانية. كما أن عبارة «حسب رأيي» لا تعني حقيقة عامة؛ لذلك نستخدم Meiner Meinung nach عند تحديد الموقف.",
      eselsbruecke: "اسأل أربع أسئلة: من الوسيلة؟ ما المضمون؟ ما رأيي؟ لماذا؟ ثم أغلق جملة dass بالفعل.",
      commonMistakes: [
        { wrong: "Meiner Meinung ist wichtig.", right: "Meine Meinung ist wichtig.", whyAr: "Meiner Meinung nach عبارة ثابتة، أما الفاعل فهو Meine Meinung." },
        { wrong: "Die Nachrichten ist wichtig.", right: "Die Nachrichten sind wichtig.", whyAr: "Nachrichten جمع، لذلك نستخدم sind." },
        { wrong: "Ich hoffe, dass du kommst morgen.", right: "Ich hoffe, dass du morgen kommst.", whyAr: "الفعل في نهاية الجملة التابعة." },
        { wrong: "Ich weiß, dass vielleicht er kommt.", right: "Ich weiß, dass er vielleicht kommt.", whyAr: "يوضع الفاعل قبل الظرف غالبًا في هذا البناء الأساسي." },
      ],
      relatedRuleComparison: { title: "الرأي أم الحقيقة؟", content: "Die Zeitung erscheint um acht Uhr هي معلومة قابلة للفحص. Ich finde, dass sie interessant ist هو رأي. يمكن أن نقول Ich glaube, dass ... عندما لا نريد تقديم الكلام كحقيقة مؤكدة." },
    },
  ],

  reading: {
    titleDe: "Wie informieren sich Menschen heute?",
    titleAr: "كيف يحصل الناس على الأخبار اليوم؟",
    paragraphs: [
      "Viele Menschen informieren sich morgens zuerst mit dem Handy. Sie lesen kurze Nachrichten auf einer Internetseite oder hören eine Nachrichtensendung im Radio. Das ist praktisch, weil die Informationen schnell verfügbar sind. Trotzdem bedeutet eine schnelle Nachricht nicht immer, dass sie richtig oder vollständig ist.",
      "Eine Zeitung bietet oft mehr Hintergrund. Ein Bericht erklärt, was passiert ist, wer beteiligt ist und welche Folgen ein Ereignis haben kann. Leserinnen und Leser können außerdem verschiedene Meinungen vergleichen. Manche Menschen finden gedruckte Zeitungen zu langsam oder zu teuer, andere glauben, dass sie ruhiger und übersichtlicher sind.",
      "Soziale Medien sind ebenfalls wichtig. Dort teilen Nutzerinnen und Nutzer Nachrichten, Fotos und persönliche Kommentare. Das Problem ist, dass eine Quelle nicht immer genannt wird. Deshalb sollte man prüfen, wer den Text geschrieben hat und ob andere zuverlässige Medien dieselbe Information bestätigen. Gute Medienkompetenz bedeutet also nicht, jede Nachricht zu glauben, sondern aufmerksam zu lesen und eine eigene Meinung zu bilden."
    ],
    paragraphsAr: [
      "يحصل كثير من الناس على المعلومات صباحًا أولًا من الهاتف. يقرؤون أخبارًا قصيرة في موقع على الإنترنت أو يستمعون إلى نشرة أخبار في الراديو. هذا عملي لأن المعلومات متاحة بسرعة، لكن الخبر السريع ليس بالضرورة صحيحًا أو كاملًا.",
      "تقدم الصحيفة غالبًا خلفية أوسع. يشرح التقرير ما حدث، ومن شارك، وما النتائج التي يمكن أن يترتب عليها الحدث. كما يستطيع القراء مقارنة آراء مختلفة. يرى بعض الناس أن الصحف المطبوعة بطيئة أو غالية، بينما يعتقد آخرون أنها أهدأ وأسهل تنظيمًا.",
      "وسائل التواصل الاجتماعي مهمة أيضًا. ينشر المستخدمون هناك الأخبار والصور والتعليقات الشخصية. المشكلة أن المصدر لا يُذكر دائمًا. لذلك ينبغي التحقق ممن كتب النص، ومعرفة ما إذا كانت وسائل إعلام موثوقة أخرى تؤكد المعلومة نفسها. الثقافة الإعلامية الجيدة لا تعني تصديق كل خبر، بل القراءة بانتباه وتكوين رأي خاص."
    ],
    glossary: [
      { de: "sich informieren", ar: "يحصل على معلومات", example: "Ich informiere mich morgens." },
      { de: "verfügbar", ar: "متاح", example: "Die Information ist schnell verfügbar." },
      { de: "vollständig", ar: "كامل", example: "Der Bericht ist nicht vollständig." },
      { de: "der Hintergrund", ar: "الخلفية/السياق", example: "Die Zeitung erklärt den Hintergrund." },
      { de: "beteiligt", ar: "مشارك", example: "Wer war beteiligt?" },
      { de: "die Folge", ar: "النتيجة", example: "Welche Folgen hat das Ereignis?" },
      { de: "zuverlässig", ar: "موثوق", example: "Ist diese Quelle zuverlässig?" },
      { de: "bestätigen", ar: "يؤكد", example: "Andere Medien bestätigen die Nachricht." },
      { de: "aufmerksam", ar: "بانتباه", example: "Lies den Text aufmerksam." },
      { de: "die Medienkompetenz", ar: "الثقافة الإعلامية", example: "Medienkompetenz ist heute wichtig." },
    ],
    questions: [
      { id: "rq1", type: "multiple-choice", instructionAr: "أجب عن النص.", questionDe: "Warum informieren sich viele Menschen mit dem Handy?", options: ["Weil Informationen schnell verfügbar sind.", "Weil Zeitungen immer kostenlos sind.", "Weil Radio verboten ist.", "Weil sie keine Meinungen vergleichen wollen."], correctIndex: 0, explanation: "يذكر النص أن المعلومات متاحة بسرعة عبر الهاتف.", errorType: "vocabulary" },
      { id: "rq2", type: "multiple-choice", instructionAr: "أجب عن النص.", questionDe: "Was erklärt ein Bericht oft?", options: ["Was passiert ist und welche Folgen möglich sind.", "Nur den Preis der Zeitung.", "Wie man ein Handy kauft.", "Warum niemand Nachrichten liest."], correctIndex: 0, explanation: "التقرير يشرح الحدث والمشاركين والنتائج المحتملة.", errorType: "vocabulary" },
      { id: "rq3", type: "multiple-choice", instructionAr: "أجب عن النص.", questionDe: "Was ist ein Problem bei sozialen Medien?", options: ["Die Quelle wird nicht immer genannt.", "Es gibt dort keine Fotos.", "Sie sind immer sehr langsam.", "Sie erklären immer den Hintergrund."], correctIndex: 0, explanation: "المصدر لا يُذكر دائمًا في وسائل التواصل.", errorType: "vocabulary" },
      { id: "rq4", type: "multiple-choice", instructionAr: "أجب عن النص.", questionDe: "Was bedeutet gute Medienkompetenz?", options: ["Nachrichten aufmerksam prüfen.", "Jede Nachricht sofort glauben.", "Nur gedruckte Zeitungen lesen.", "Keine eigene Meinung bilden."], correctIndex: 0, explanation: "الخاتمة تربط الثقافة الإعلامية بالتحقق والقراءة الواعية.", errorType: "vocabulary" },
    ],
    redemittel: [
      { de: "Ich finde, dass ...", ar: "أرى أن..." },
      { de: "Meiner Meinung nach ...", ar: "في رأيي..." },
      { de: "Ich glaube, dass ..., weil ...", ar: "أعتقد أن... لأن..." },
      { de: "Die Quelle ist meiner Meinung nach zuverlässig.", ar: "المصدر موثوق في رأيي." },
      { de: "Man sollte die Information prüfen.", ar: "ينبغي التحقق من المعلومة." },
    ],
    discussionAr: "أي وسيلة إعلام تستخدم يوميًا؟ اختر وسيلة واحدة واذكر ميزتين ومشكلة واحدة. استخدم جملة dass واحدة على الأقل وجملة سبب بـ weil.",
  },

  listening: {
    items: [
      { id: "l1", title: "حديث عن عادات الأخبار", lines: [
        { speaker: "Mona", de: "Ich lese morgens Nachrichten im Internet.", ar: "أقرأ الأخبار صباحًا على الإنترنت." },
        { speaker: "Karim", de: "Ich finde, dass die Zeitung mehr Hintergrund bietet.", ar: "أرى أن الصحيفة تقدم خلفية أكبر." },
        { speaker: "Mona", de: "Das stimmt, aber Online-Nachrichten sind schneller.", ar: "هذا صحيح، لكن الأخبار الإلكترونية أسرع." },
        { speaker: "Karim", de: "Ich glaube, dass man die Quelle immer prüfen muss.", ar: "أعتقد أنه يجب دائمًا فحص المصدر." },
      ] },
      { id: "l2", title: "خبر ورأي", lines: [
        { speaker: "Lehrerin", de: "Die Bibliothek öffnet um acht Uhr. Das ist eine Information.", ar: "تفتح المكتبة الساعة الثامنة. هذه معلومة." },
        { speaker: "Sami", de: "Ich finde, dass die Öffnungszeit sehr praktisch ist.", ar: "أرى أن وقت الفتح عملي جدًا." },
      ] },
    ],
    questions: [
      { id: "lq1", itemId: "l1", type: "multiple-choice", instructionAr: "اختر الإجابة.", questionDe: "Was bietet die Zeitung laut Karim?", options: ["Mehr Hintergrund", "Schnellere Nachrichten", "Weniger Informationen", "Keine Quelle"], correctIndex: 0, explanation: "قال كريم إن الصحيفة تقدم خلفية أكبر.", errorType: "vocabulary" },
      { id: "lq2", itemId: "l1", type: "multiple-choice", instructionAr: "اختر الإجابة.", questionDe: "Was muss man immer prüfen?", options: ["Die Quelle", "Die Uhrzeit", "Das Handy", "Die Bibliothek"], correctIndex: 0, explanation: "يقول كريم: die Quelle prüfen.", errorType: "vocabulary" },
      { id: "lq3", itemId: "l2", type: "multiple-choice", instructionAr: "اختر الإجابة.", questionDe: "Was ist eine Meinung?", options: ["Die Öffnungszeit ist praktisch.", "Die Bibliothek öffnet um acht Uhr.", "Die Bibliothek ist ein Gebäude.", "Die Uhr zeigt acht Uhr."], correctIndex: 0, explanation: "التقييم العملي رأي، أما وقت الفتح فمعلومة.", errorType: "grammar" },
      { id: "lq4", itemId: "l1", type: "multiple-choice", instructionAr: "اختر الإجابة.", questionDe: "Wann liest Mona Nachrichten?", options: ["Morgens", "Abends", "Nachmittags", "Nie"], correctIndex: 0, explanation: "قالت: Ich lese morgens Nachrichten.", errorType: "vocabulary" },
    ],
  },

  pronunciation: {
    id: "p1", title: "نطق كلمات الإعلام والجملة الطويلة", items: [
      { de: "die Nachricht", ar: "الخبر", note: "ch بعد a صوت حلقي، و-icht مقطع قصير." },
      { de: "die Zeitung", ar: "الصحيفة", note: "ei = آي، و-ung نهاية شائعة." },
      { de: "zuverlässig", ar: "موثوق", note: "ä قصيرة، وv في zuverlässig أقرب إلى ف." },
      { de: "die Quelle", ar: "المصدر", note: "Qu = كو، وelle مقطع خفيف." },
      { de: "bestätigen", ar: "يؤكد", note: "ä = إيه قصيرة، وt في النهاية واضحة." },
      { de: "die Medienkompetenz", ar: "الثقافة الإعلامية", note: "كلمة مركبة؛ قسّمها إلى Medien + Kompetenz." },
    ],
    tip: "اقرأ جملة dass على مجموعات: Ich glaube | dass die Quelle | zuverlässig ist. لا تتوقف قبل الفعل الأخير.",
    shadowing: [
      { de: "Ich finde, dass die Zeitung interessant ist.", ar: "أرى أن الصحيفة ممتعة.", tip: "الفعل ist في النهاية." },
      { de: "Ich glaube, dass man die Quelle prüfen muss.", ar: "أعتقد أنه يجب فحص المصدر.", tip: "المصدر prüfen قبل الفعل muss." },
      { de: "Meiner Meinung nach sind Online-Nachrichten schnell.", ar: "في رأيي الأخبار الإلكترونية سريعة.", tip: "Nachrichten جمع: sind." },
      { de: "Andere Medien bestätigen die Information.", ar: "وسائل إعلام أخرى تؤكد المعلومة.", tip: "قسّم الكلمة المركبة Medienkompetenz." },
    ],
  },

  writing: [
    { id: "w1", type: "transformation", instructionAr: "ادمج الجملتين باستعمال dass.", prompt: "Ich glaube. Die Nachricht ist wichtig.", acceptedAnswers: ["Ich glaube, dass die Nachricht wichtig ist.", "Ich glaube, dass die Nachricht wichtig ist"], sampleAnswer: "Ich glaube, dass die Nachricht wichtig ist.", explanation: "نضع dass ثم الفاعل وبقية الجملة، ونرسل ist إلى النهاية.", errorType: "word-order" },
    { id: "w2", type: "fill-blank", instructionAr: "أكمل الفعل في نهاية الجملة.", template: "Ich finde, dass der Bericht interessant ___. (sein)", blanks: [{ correct: "ist", options: ["ist", "sein", "sind"] }], explanation: "der Bericht مفرد، وتصريف sein هو ist، ويأتي في النهاية.", errorType: "conjugation" },
    { id: "w3", type: "dictation", instructionAr: "استمع واكتب الجملة.", audioText: "Ich glaube, dass die Quelle zuverlässig ist.", explanation: "لاحظ ترتيب zuverlässig ist في نهاية dass-Satz.", errorType: "spelling" },
  ],

  practiceBank: [
    { id: "e1", type: "multiple-choice", instructionAr: "اختر الأداة الصحيحة.", questionDe: "Ich denke, ___ die Nachricht stimmt.", options: ["dass", "das", "weil", "wenn"], correctIndex: 0, explanation: "dass تربط مضمون التفكير.", errorType: "grammar" },
    { id: "e2", type: "multiple-choice", instructionAr: "اختر الفعل في النهاية.", questionDe: "Ich glaube, dass er heute ___.", options: ["kommt", "kommen", "kommst", "komme"], correctIndex: 0, explanation: "مع er: kommt، وهو آخر عنصر فعلي في الجملة.", errorType: "conjugation" },
    { id: "e3", type: "multiple-choice", instructionAr: "ميّز الرأي من المعلومة.", questionDe: "Welche Aussage ist eine Meinung?", options: ["Ich finde, dass Radio praktisch ist.", "Die Sendung beginnt um acht Uhr.", "Die Zeitung erscheint heute.", "Der Bericht hat drei Seiten."], correctIndex: 0, explanation: "Ich finde يعلن تقييمًا شخصيًا.", errorType: "grammar" },
    { id: "e4", type: "matching", instructionAr: "صل الكلمة بالمعنى.", pairs: [{ left: "die Quelle", right: "المصدر" }, { left: "der Bericht", right: "التقرير" }, { left: "die Meinung", right: "الرأي" }, { left: "zuverlässig", right: "موثوق" }], explanation: "هذه مفردات أساسية لفهم الأخبار وتقييمها.", errorType: "vocabulary" },
    { id: "e5", type: "word-ordering", instructionAr: "رتّب الجملة.", tokens: ["Ich", "glaube", ",", "dass", "er", "kommt", "."], correctSentence: "Ich glaube, dass er kommt.", explanation: "فعل الجملة الرئيسية في المركز الثاني، وفعل التابعة في النهاية.", errorType: "word-order" },
    { id: "e6", type: "error-correction", instructionAr: "صحّح ترتيب الجملة.", wrongSentence: "Ich finde, dass der Film ist interessant.", wrongWord: "ist interessant", correctWord: "interessant ist", options: ["interessant ist", "ist interessant", "interessant sein", "interessant sind"], explanation: "في dass-Satz يأتي الفعل المصرف في النهاية.", errorType: "word-order" },
    { id: "e7", type: "fill-blank", instructionAr: "أكمل بأداة الرأي المناسبة.", template: "Ich ___, dass die Quelle gut ist. Ich ___, dass du Erfolg hast. (glaube/hoffe)", blanks: [{ correct: "glaube", options: ["glaube", "hoffe"] }, { correct: "hoffe", options: ["glaube", "hoffe"] }], explanation: "glaube = أعتقد، hoffe = آمل.", errorType: "vocabulary" },
    { id: "e8", type: "transformation", instructionAr: "حوّل إلى جملة dass.", prompt: "Sie sagt. Sie liest die Zeitung.", acceptedAnswers: ["Sie sagt, dass sie die Zeitung liest.", "Sie sagt, dass sie die Zeitung liest"], sampleAnswer: "Sie sagt, dass sie die Zeitung liest.", explanation: "الفعل liest ينتقل إلى نهاية الجملة التابعة.", errorType: "word-order" },
    { id: "e9", type: "dictation", instructionAr: "استمع واكتب.", audioText: "Die Nachrichten sind heute wichtig.", explanation: "Nachrichten جمع، ولذلك sind.", errorType: "spelling" },
    { id: "e10", type: "matching", instructionAr: "صل العبارة بوظيفتها.", pairs: [{ left: "Ich finde, dass", right: "تقييم شخصي" }, { left: "Ich glaube, dass", right: "اعتقاد أو ترجيح" }, { left: "Ich hoffe, dass", right: "أمل" }, { left: "Ich weiß, dass", right: "معرفة" }], explanation: "الفروق الدلالية بين أفعال الموقف مهمة، حتى لو تشابه البناء.", errorType: "vocabulary" },
    { id: "e11", type: "word-ordering", instructionAr: "رتّب الجملة مع فعل ناقص.", tokens: ["dass", "prüfen", "muss", "man", "die", "Quelle"], correctSentence: "dass man die Quelle prüfen muss", explanation: "المصدر prüfen يسبق الفعل المصرف muss في نهاية الجملة التابعة.", errorType: "word-order" },
    { id: "e12", type: "error-correction", instructionAr: "صحّح الخطأ الإملائي والنحوي.", wrongSentence: "Ich denke das die Nachrichten wichtig ist.", wrongWord: "das / ist", correctWord: "dass / sind", options: ["dass / sind", "das / ist", "dass / ist", "das / sind"], explanation: "نكتب dass، وNachrichten جمع فتأخذ sind.", errorType: "grammar" },
    { id: "e13", type: "multiple-choice", instructionAr: "اختر المصدر الأكثر موثوقية في السياق.", questionDe: "Welche Quelle ist wahrscheinlich zuverlässig?", options: ["Ein Bericht mit Autor und Datum", "Eine anonyme Nachricht ohne Quelle", "Ein Kommentar ohne Text", "Ein Gerücht"], correctIndex: 0, explanation: "وجود الكاتب والتاريخ يساعدان على تقييم المصدر، دون أن يضمن الحقيقة وحده.", errorType: "vocabulary" },
    { id: "e14", type: "fill-blank", instructionAr: "أكمل ترتيب الجملة.", template: "Ich hoffe, dass du morgen ___. (kommen)", blanks: [{ correct: "kommst", options: ["kommst", "kommt", "kommen"] }], explanation: "مع du نستخدم kommst في نهاية الجملة التابعة.", errorType: "conjugation" },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich glaube, dass er kommt heute.", right: "Ich glaube, dass er heute kommt.", whyAr: "لا تنقل ترتيب الجملة الرئيسية إلى الجملة التابعة." },
      { wrong: "das بمعنى أنّ", right: "dass بمعنى أنّ", whyAr: "أداة الربط تكتب ss، أما das فتستعمل أداة أو ضميرًا." },
      { wrong: "Die Nachrichten ist wichtig.", right: "Die Nachrichten sind wichtig.", whyAr: "Nachrichten جمع مؤنث شكليًا، والفعل معها جمع." },
      { wrong: "Ich finde, dass der Bericht ist gut.", right: "Ich finde, dass der Bericht gut ist.", whyAr: "الصفة تسبق الفعل المصرف في نهاية الجملة التابعة." },
    ],
    eselsbruecken: ["dass يفتح القوس والفعل يغلقه.", "Nachrichten جمع: die Nachrichten sind.", "افصل الرأي عن الخبر: Ich finde مقابل Die Zeitung erscheint."],
    culturalNote: { title: "تنوع الإعلام الألماني", content: "توجد في ألمانيا صحف وقنوات عامة وخاصة ومواقع رقمية متعددة. لا تعني الشهرة وحدها أن المصدر صحيح؛ من العادة مقارنة الخبر مع مصادر أخرى والانتباه إلى تاريخ النشر والكاتب." },
  },

  miniTest: [
    { id: "m1", type: "multiple-choice", instructionAr: "اختر الصيغة الصحيحة.", questionDe: "Ich denke, dass die Zeitung gut ___.", options: ["ist", "sein", "sind", "bist"], correctIndex: 0, explanation: "Zeitung مفرد، وist في نهاية dass-Satz.", errorType: "grammar" },
    { id: "m2", type: "multiple-choice", instructionAr: "اختر أداة الربط.", questionDe: "Er sagt, ___ er keine Zeit hat.", options: ["dass", "das", "weil", "denn"], correctIndex: 0, explanation: "نقل مضمون القول يحتاج dass.", errorType: "grammar" },
    { id: "m3", type: "word-ordering", instructionAr: "رتّب الجملة.", tokens: ["finde", "Ich", ",", "dass", "ist", "interessant", "der", "Bericht"], correctSentence: "Ich finde, dass der Bericht interessant ist.", explanation: "الفعل ist في النهاية.", errorType: "word-order" },
    { id: "m4", type: "error-correction", instructionAr: "صحّح الخطأ.", wrongSentence: "Ich glaube, dass die Nachrichten wichtig ist.", wrongWord: "ist", correctWord: "sind", options: ["sind", "ist", "sein", "bist"], explanation: "Nachrichten جمع، لذا نقول sind.", errorType: "conjugation" },
    { id: "m5", type: "fill-blank", instructionAr: "أكمل الفعل.", template: "Ich hoffe, dass du morgen ___. (kommen)", blanks: [{ correct: "kommst", options: ["kommst", "kommt", "kommen"] }], explanation: "du kommst، والفعل في النهاية.", errorType: "conjugation" },
  ],

  flashcards: [
    { id: "fc1", de: "die Nachricht", ar: "الخبر", example: "Die Nachricht ist wichtig.", exampleAr: "الخبر مهم.", level: "A2" },
    { id: "fc2", de: "der Bericht", ar: "التقرير", example: "Der Bericht erklärt den Hintergrund.", exampleAr: "التقرير يشرح الخلفية.", level: "A2" },
    { id: "fc3", de: "die Quelle", ar: "المصدر", example: "Ich prüfe die Quelle.", exampleAr: "أفحص المصدر.", level: "A2" },
    { id: "fc4", de: "zuverlässig", ar: "موثوق", example: "Die Quelle ist zuverlässig.", exampleAr: "المصدر موثوق.", level: "A2" },
    { id: "fc5", de: "die Meinung", ar: "الرأي", example: "Meine Meinung ist klar.", exampleAr: "رأيي واضح.", level: "A2" },
    { id: "fc6", de: "dass", ar: "أنّ", example: "Ich glaube, dass es stimmt.", exampleAr: "أعتقد أن ذلك صحيح.", level: "A2" },
    { id: "fc7", de: "Ich finde, dass ...", ar: "أرى أن...", example: "Ich finde, dass der Film gut ist.", exampleAr: "أرى أن الفيلم جيد.", level: "A2" },
    { id: "fc8", de: "Ich glaube, dass ...", ar: "أعتقد أن...", example: "Ich glaube, dass sie kommt.", exampleAr: "أعتقد أنها ستأتي.", level: "A2" },
    { id: "fc9", de: "Ich hoffe, dass ...", ar: "آمل أن...", example: "Ich hoffe, dass du Erfolg hast.", exampleAr: "آمل أن تنجح.", level: "A2" },
    { id: "fc10", de: "Meiner Meinung nach", ar: "في رأيي", example: "Meiner Meinung nach ist Radio praktisch.", exampleAr: "في رأيي الراديو عملي.", level: "A2" },
    { id: "fc11", de: "bestätigen", ar: "يؤكد", example: "Andere Medien bestätigen die Nachricht.", exampleAr: "وسائل أخرى تؤكد الخبر.", level: "A2" },
    { id: "fc12", de: "aufmerksam lesen", ar: "يقرأ بانتباه", example: "Lies den Bericht aufmerksam.", exampleAr: "اقرأ التقرير بانتباه.", level: "A2" },
  ],
};
