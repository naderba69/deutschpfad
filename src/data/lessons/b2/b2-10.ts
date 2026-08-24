import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-10: الدراسة في ألمانيا — الكتابة الأكاديمية + مراجعة B2 الشاملة
 */
export const lessonB210: Lesson = {
  id: "b2-10",
  unitId: "b2-10",
  level: "B2",
  order: 1,
  titleDe: "Studium in Deutschland",
  titleAr: "الدراسة في ألمانيا",
  duration: 45,
  summary:
    "النظام الجامعي والكتابة الأكاديمية (Fachsprache)، أساليب التأكيد والتلطيف والتحفظ، ومراجعة شاملة تجمع كل قواعد B2 — خاتمة المستويات الأربعة!",

  lernziele: [
    { id: "z1", de: "Ich kann akademische Texte schreiben.", ar: "أن أكتب نصوصاً أكاديمية بلغة التخصص." },
    { id: "z2", de: "Ich kann Meinungen abschwächen und betonen.", ar: "أن ألطّف وأؤكد وأتحفظ في الكتابة الأكاديمية." },
    { id: "z3", de: "Ich kann alle B2-Grammatik kombinieren.", ar: "أن أجمع كل قواعد B2 — وأكون جاهزاً للامتحانات." },
      { id: "z4", de: "Ich kann über Studienmöglichkeiten in Deutschland informieren.", ar: "أن أقدم معلومات عن فرص الدراسة في ألمانيا." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "أنت الآن في قمة رحلتك! هذا الدرس الأخير يجمّع B2 كله: Konjunktiv I (النقل)، Passiv المتقدم، النسبية المتقدمة، المشاركات، الروابط المتقدمة، الاشتقاق، Futur II، الأفعال مع حروف الجر. وستضيف مهارة الباحث: التأكيد والتلطيف والتحفظ — لغة الأكاديميا.",
    motivatingQuestionDe: "Wie schreibt man eine Hausarbeit?",
    contextAr:
      "الدراسة في ألمانيا حلم كثيرين: نتعلم لغة الجامعة — المقال الأكاديمي وطرق التعبير الدقيق — ثم نراجع B2 كله في ختام المستويات الأربعة.",
    contextDe: "Die vorliegende Arbeit beschäftigt sich mit der deutschen Sprache.",
    connectionToPreviousAr: "هذا ختام B2: من Konjunktiv I (درس 1) إلى الوصلات (درس 9). كل شيء يجتمع في الدرس الأخير — وبعده: اختبارات Goethe الكاملة (المرحلة 10)!",
    activateVocabulary: [
      { de: "das Studium", ar: "الدراسة الجامعية" },
      { de: "die Hausarbeit", ar: "البحث الجامعي" },
      { de: "die Fachsprache", ar: "لغة التخصص" },
      { de: "das Seminar", ar: "الندوة" },
      { de: "die Universität", ar: "الجامعة" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة من B2 (درس b2-01 — العلوم: نقل الكلام بـ Konjunktiv I): اختر الصيغة:",
      questionDe: "Der Professor sagt, die Frist ___ verlängert.",
      options: ["werde", "wird", "würde", "wurde"],
      correctIndex: 0,
      explanation:
        "النقل المكتوب الرسمي يلزم Konjunktiv I: werden ← er/sie werde. أما wird فإخبار (يجعل الكلام رأي الكاتب)، وwürde صيغة شرطية، وwurde ماضٍ للمجهول.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة من B2 (درس b2-02 — الاقتصاد: Zustandspassiv مقابل Vorgangspassiv): اختر الحالة:",
      questionDe: "Die Bibliothek ___ seit acht Uhr geöffnet. (مفتوحة الآن — وصف حالة)",
      options: ["ist", "wird", "kann", "hat"],
      correctIndex: 0,
      explanation:
        "Zustandspassiv = sein + Partizip II ويصف النتيجة القائمة (مفتوحة). أما wird geöffnet فهو Vorgangspassiv أي فعل الفتح نفسه وهو يجري الآن.",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة شاملة من B2 (درس b2-03 — القانون: بدائل المجهول · درس b2-07 — الفلسفة: Futur II · درس b2-08 — اللغات: الأفعال مع حروف الجر): أكمل:",
      template:
        "Das Problem ___ sich leicht lösen. (يمكن حلّه) — Bis Juni werde ich die Prüfung bestanden ___. (Futur II) — Ich interessiere mich ___ ein Studium in Deutschland. (بـ)",
      blanks: [
        { correct: "lässt", options: ["lässt", "kann", "wird"], errorType: "grammar" },
        { correct: "haben", options: ["haben", "sein", "werden"], errorType: "grammar" },
        { correct: "für", options: ["für", "auf", "an"], errorType: "preposition" },
      ],
      explanation:
        "ثلاث وحدات في بندٍ واحد: lassen + sich + مصدر بديلاً عن المجهول (b2-03)، وFutur II = werde + Partizip II + haben لأن bestehen فعل متعدٍّ (b2-07)، وsich interessieren يلزمه für + منصوب (b2-08).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الكتابة الأكاديمية: التأكيد والتلطيف والتحفظ",
      titleDe: "Akademisches Schreiben: betonen, abschwächen, einschränken",
      explanationAr:
        "الأسلوب الأكاديمي يحتاج ثلاث أدوات: التأكيد: zweifellos (بلا شك)، eindeutig (بوضوح)، es ist erwiesen (ثابت). التلطيف: meiner Ansicht nach (في رأيي)، möglicherweise (ربما)، es scheint (يبدو). التحفظ: unter Umständen (في بعض الحالات)، in gewissem Maße (إلى حد ما)، es lässt sich nicht leugnen (لا يمكن إنكار).",
      whyAr:
        "لماذا هذه الثلاثية؟ لأن الأكاديميا تقيّم «الجرأة المدروسة»: ادعاء حاد بلا دليل = ضعف. تحفظ زائد = ضعف. التوازن: أكّد المدعوم، ولطّف غير المؤكد، وتحفظ عند الشك. هذا «النضج الفكري» الذي يبحث عنه المصححون.",
      table: {
        title: "أدوات الأسلوب الأكاديمي",
        columns: ["الوظيفة", "العبارات", "مثال"],
        rows: [
          { label: "تأكيد", cells: ["zweifellos, eindeutig, es ist erwiesen", "Es ist erwiesen, dass Sprache das Denken prägt."] },
          { label: "تلطيف", cells: ["meiner Ansicht nach, möglicherweise, es scheint", "Meiner Ansicht nach ist das ein wichtiger Punkt."] },
          { label: "تحفظ", cells: ["unter Umständen, in gewissem Maße", "In gewissem Maße stimmt das."] },
        ],
      },
      examples: [
        { de: "Es ist erwiesen, dass Sprachenlernen das Gehirn stärkt.", ar: "ثابت أن تعلم اللغات يقوي الدماغ." },
        { de: "Meiner Ansicht nach ist der Austausch unverzichtbar.", ar: "في رأيي التبادل لا غنى عنه." },
        { de: "Möglicherweise spielt auch die Motivation eine Rolle.", ar: "ربما تلعب الحوافز دوراً أيضاً." },
        { de: "In gewissem Maße kann man dem zustimmen.", ar: "إلى حد ما يمكن الموافقة على ذلك." },
        { de: "Zusammenfassend lässt sich sagen, dass B2 ein Meilenstein ist.", ar: "خلاصةً يمكن القول إن B2 علامة فارقة." },
      ],
      comparisonWithArabic:
        "«ثابت أن» = es ist erwiesen، dass. «في رأيي» = meiner Ansicht nach. «إلى حد ما» = in gewissem Maße. «خلاصة القول» = zusammenfassend lässt sich sagen. كلها تطابق عباراتنا الأكاديمية.",
      eselsbruecke:
        "«ثلاثية الأكاديميا: أكّد (erwiesen)، لطّف (meiner Ansicht)، تحفظ (in gewissem Maße)» — و«Zusammenfassend lässt sich sagen» = خاتمة ذهبية.",
      commonMistakes: [
        { wrong: "أسلوب حاد بلا دليل", right: "لطّف: meiner Ansicht nach, möglicherweise", whyAr: "الأكاديميا تكره الجزم بلا دليل." },
        { wrong: "تحفظ زائد (vielleicht في كل جملة)", right: "وازن: أكّد المدعوم ولطّف الباقي", whyAr: "التوازن هو النضج." },
        { wrong: "ich denke (عامية) في مقال أكاديمي", right: "meiner Ansicht nach / meines Erachtens", whyAr: "الأسلوب الرسمي: Erachtens أرقى." },
      ],
      relatedRuleComparison: {
        title: "Erörterung أم Hausarbeit؟",
        content: "Erörterung = مقال رأي (رأي + حجج). Hausarbeit = بحث أكاديمي (منهجية + مصادر + استشهاد). كلاهما بأسلوب رسمي — لكن البحث أعمق ببنية: Einleitung, Hauptteil, Schluss + Literaturverzeichnis.",
      },
    },
    {
      id: "t2",
      titleAr: "الأسلوب الاسمي (Nominalstil) في الكتابة الرسمية",
      titleDe: "Nominalstil in der formellen Schriftsprache",
      explanationAr: "تحويل الأفعال إلى أسماء: weil man spart → wegen der Einsparung، wenn man ankommt → bei der Ankunft. هذا يضغط النص ويعطيه طابعاً رسمياً — أساسي في الرسائل الرسمية B2.",
      whyAr: "لماذا؟ لأن الرسالة الرسمية B2 (75 دقيقة) تتطلب أسلوباً اسمياً موجزاً — من يستخدم جمل الفعل فقط يفقد علامات الجودة.",
      table: {
        title: "من الأسلوب الفعلي إلى الأسلوب الاسمي",
        columns: ["الأسلوب الفعلي", "الأسلوب الاسمي", "بالعربية"],
        rows: [
          { label: "weil man spart", cells: ["wegen der Einsparung", "بسبب التوفير"] },
          { label: "wenn man ankommt", cells: ["bei der Ankunft", "عند الوصول"] },
          { label: "nachdem er geprüft hat", cells: ["nach der Prüfung", "بعد الفحص"] },
          { label: "damit man es versteht", cells: ["zum Verständnis", "من أجل الفهم"] },
          { label: "obwohl es regnet", cells: ["trotz des Regens", "رغم المطر"] },
        ],
      },
      examples: [
        { de: "Nach der Ankunft melden Sie sich bitte.", ar: "بعد الوصول يرجى تسجيل حضوركم (بدل wenn Sie ankommen)." }, { de: "Die Einsparung der Kosten ist unser Ziel.", ar: "توفير التكاليف هدفنا." }, { de: "Nach Erhalt Ihrer Unterlagen melden wir uns.", ar: "بعد استلام أوراقكم سنتواصل معكم." }, { de: "Wegen der Verspätung des Zuges kam sie zu spät.", ar: "بسبب تأخر القطار وصلت متأخرة." }, { de: "Zur Klärung der Frage brauchen wir mehr Zeit.", ar: "لتوضيح المسألة نحتاج وقتاً أكثر." }
      ],
      comparisonWithArabic: "العربية تفعل الشيء نفسه بالمصدر: نقول «بعد الوصول» لا «بعد أن وصل»، و«بسبب التأخر» لا «لأنه تأخر». فالمهارة منقولة أصلاً من لغتك؛ ما ينقصك هو معرفة أي حرف جر يرافق كل اسم في الألمانية.",
      eselsbruecke: "لكل أداة ربط نظير من حروف الجر: weil تقابل wegen، وwenn تقابل bei، وnachdem تقابل nach، وobwohl تقابل trotz. حوّل الفعل إلى اسم ثم ضع حرف الجر المناسب وأعرب ما بعده.",
      commonMistakes: [
        { wrong: "wegen dem Regen", right: "wegen des Regens", whyAr: "wegen حرف جر يلزم Genitiv في اللغة المكتوبة الفصيحة، وإن شاع Dativ في الكلام اليومي." },
        { wrong: "nach die Prüfung", right: "nach der Prüfung", whyAr: "nach حرف جر يلزم Dativ دائماً." },
        { wrong: "Trotz es regnet, gehe ich.", right: "Trotz des Regens gehe ich.", whyAr: "trotz حرف جر يُتبع باسم مجرور لا بجملة؛ ومع الجملة تُستعمل obwohl." },
      ],
      relatedRuleComparison: {
        title: "أسلوب اسمي أم فعلي؟",
        content: "الأسلوب الاسمي مكثّف ورسمي وهو المتوقَّع في الرسائل الإدارية وتقارير B2. لكن الإفراط فيه يجعل النص ثقيلاً وبارداً. القاعدة العملية: استعمله في المقدمات والصيغ الجاهزة، وعُد إلى الأسلوب الفعلي في الشرح والتفصيل.",
      },
    },
    {
      id: "t3",
      titleAr: "خريطة قواعد B2 كاملة — تسع وحدات في جدول واحد",
      titleDe: "Die B2-Grammatik im Überblick",
      explanationAr:
        "هذه ليست قاعدة جديدة، بل خريطة الطريق التي قطعتها. كل سطر في الجدول التالي يقابل وحدةً درستَها في B2: من نقل الكلام (الوحدة 1) إلى التراكيب الاسمية-الفعلية (الوحدة 9). اقرأ العمود الأوسط، وغطِّ عمود المثال بيدك، ثم حاول توليد مثالك أنت. ما تعجز عن توليده هو بالضبط ما يجب أن تعود إليه قبل الامتحان.",
      whyAr:
        "لماذا؟ لأن امتحان B2 لا يسأل عن قاعدة معزولة، بل يطلب نصاً واحداً تجتمع فيه ستُّ قواعد أو سبع. من درس القواعد متفرقةً يعرفها فرادى ولا يستحضرها مجتمعةً؛ ووظيفة هذه الخريطة أن تحوّل تسع معارف منفصلة إلى شبكة واحدة يمكن استدعاؤها دفعةً واحدة.",
      table: {
        title: "قواعد B2 التسع — الوحدة والقاعدة والمثال",
        columns: ["الوحدة", "القاعدة", "مثال"],
        rows: [
          { label: "1 — العلوم", cells: ["Konjunktiv I لنقل الكلام", "Er sagt, er habe keine Zeit."] },
          { label: "1 — العلوم", cells: ["الأفعال الناقصة الذاتية (التخمين)", "Das dürfte richtig sein."] },
          { label: "2 — الاقتصاد", cells: ["Zustandspassiv والمجهول مع الناقصة", "Die Entscheidung muss getroffen werden."] },
          { label: "3 — القانون", cells: ["الموصول مع حرف جر + بدائل المجهول", "Das Problem lässt sich leicht lösen."] },
          { label: "4 — الأدب والإعلام", cells: ["Partizip I / II صفةً", "Die steigenden Preise beunruhigen uns."] },
          { label: "5 — علم النفس", cells: ["روابط متقدمة + جسيمات تداولية", "Man lernt, indem man täglich übt."] },
          { label: "6 — المسار المهني", cells: ["الاشتقاق الاسمي (Nominalisierung)", "Beim Lesen erweitert man den Wortschatz."] },
          { label: "7 — الفلسفة", cells: ["Futur II للفعل المنجَز مستقبلاً", "Bis 2030 werde ich B2 erreicht haben."] },
          { label: "8 — اللغات", cells: ["الأفعال مع حروف الجر الثابتة", "Ich interessiere mich für Sprachen."] },
          { label: "9 — سوق العمل", cells: ["التراكيب الاسمية-الفعلية (FVG)", "Wir müssen eine Entscheidung treffen."] },
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
        "العربية أيضاً تملك هذه الطبقات مجتمعةً: تقول «أفاد بأن المهلة ستُمدَّد» (نقل)، «الطلب المقدَّم» (اسم مفعول صفةً)، «يمكن حلّه» (بديل المجهول)، «بسبب التمديد» (أسلوب اسمي). فالفرق ليس في وجود الأدوات بل في إعرابها: الألمانية تطالبك بحالةٍ صريحة (Genitiv بعد wegen، Dativ بعد an) حيث تكتفي العربية بالسياق.",
      eselsbruecke:
        "اختصار الوحدات التسع في جملة واحدة: «قال إنّه سيُنجَز، والمنجَز يمكن فحصه بأن نراجعه، وبحلول الموعد نكون قد اتخذنا القرار.» احفظ هذه الجملة العربية: كل مقطع فيها يقابل وحدةً من B2 بالترتيب.",
      commonMistakes: [
        { wrong: "Er sagt, er hat keine Zeit.", right: "Er sagt, er habe keine Zeit.", whyAr: "في النقل الرسمي المكتوب يُستعمل Konjunktiv I لا الإخبار؛ والإخبار يجعل الجملة رأياً للكاتب لا نقلاً عن غيره (الوحدة 1)." },
        { wrong: "Das Problem kann sich lösen.", right: "Das Problem lässt sich lösen.", whyAr: "بديل المجهول هو lassen + sich + مصدر، لا können + sich؛ فـ«can itself» ليست بنية ألمانية (الوحدة 3)." },
        { wrong: "Bis 2030 werde ich B2 erreichen haben.", right: "Bis 2030 werde ich B2 erreicht haben.", whyAr: "Futur II يبنى بالتصريف الثالث لا بالمصدر: werde + Partizip II + haben/sein (الوحدة 7)." },
      ],
      relatedRuleComparison: {
        title: "متى أستعمل أي طبقة؟",
        content: "القاعدة العملية للامتحان: النقل (Konjunktiv I) لعرض آراء الغير، والمجهول وبدائله لإخفاء الفاعل في النص العلمي، والصفات المشتقة والأسلوب الاسمي لضغط المعلومة، وFutur II للتخطيط، والروابط لبناء الحجّة. من يستعمل الطبقات الخمس في نصٍ واحد يصل إلى سقف علامة «التراكيب» في Goethe B2؛ ومن يكتفي بالجمل البسيطة يُقيَّم عند B1 مهما صحّت لغته.",
      },
    },
  ],
  listening: {
    items: [
      {
        id: "l1",
        title: "محاضرة افتتاحية",
        lines: [
          { speaker: "Professor", de: "Willkommen im Seminar! Die vorliegende Veranstaltung beschäftigt sich mit der Linguistik.", ar: "أهلاً في الندوة! تتناول هذه الفعالية علم اللغة." },
          { speaker: "Professor", de: "Es ist erwiesen, dass Sprachen unser Denken beeinflussen.", ar: "ثابت أن اللغات تؤثر على تفكيرنا." },
          { speaker: "Sami", de: "Meiner Ansicht nach ist das besonders bei Mehrsprachigen sichtbar.", ar: "في رأيي هذا واضح خاصة لدى متعددي اللغات." },
          { speaker: "Professor", de: "Sehr guter Punkt! Möglicherweise vertiefen wir das nächste Woche.", ar: "نقطة ممتازة! ربما نعمق هذا الأسبوع القادم." },
        ],
      },
      {
        id: "l2",
        title: "التحضير للامتحان",
        lines: [
          { speaker: "Anna", de: "Bis zum Goethe-Zertifikat werde ich alle Übungen gemacht haben.", ar: "بحلول شهادة غوته سأكون قد أنجزت كل التمارين." },
          { speaker: "Karim", de: "Zusammenfassend lässt sich sagen: Wir sind bereit!", ar: "خلاصةً يمكن القول: نحن جاهزون!" },
          { speaker: "Anna", de: "In gewissem Maße ja. Aber die mündliche Prüfung macht mir noch Sorgen.", ar: "إلى حد ما نعم. لكن الامتحان الشفهي ما زال يقلقني." },
          { speaker: "Karim", de: "Keine Sorge! Wir üben jeden Tag, indem wir sprechen.", ar: "لا تقلقي! نتدرب كل يوم بالتحدث." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Womit beschäftigt sich die Veranstaltung?",
        questionAr: "بماذا تتناول الفعالية؟",
        options: ["mit der Linguistik", "mit der Geschichte", "mit der Kunst", "mit der Wirtschaft"],
        correctIndex: 0,
        explanation: "قال الأستاذ: Die vorliegende Veranstaltung beschäftigt sich mit der Linguistik.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Anna Sorgen?",
        questionAr: "ما الذي يقلق آنا؟",
        options: ["die mündliche Prüfung", "die schriftliche Prüfung", "die Hausarbeit", "das Seminar"],
        correctIndex: 0,
        explanation: "قالت آنا: Die mündliche Prüfung macht mir noch Sorgen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie üben sie?",
        questionAr: "كيف يتدربون؟",
        options: ["indem sie sprechen", "indem sie schreiben", "indem sie lesen", "indem sie schlafen"],
        correctIndex: 0,
        explanation: "قال كريم: Wir üben jeden Tag, indem wir sprechen.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "مراجعة أصوات B2",
    items: [
      { de: "die Hausarbeit", ar: "البحث الجامعي", note: "au = آو: هاوس-أربايت" },
      { de: "die Fachsprache", ar: "لغة التخصص", note: "ch = خ + sp = شپ: فاخ-شپراخه" },
      { de: "das Seminar", ar: "الندوة", note: "s = ز: زيمينار" },
      { de: "die Linguistik", ar: "علم اللغة", note: "gu هنا /gu/ لا /gv/: لينْگوإستيك [lɪŋɡuˈɪstɪk] — والنبر على إستيك" },
      { de: "zweifellos", ar: "بلا شك", note: "zw = تسڤ: تسڤايفِلوس" },
      { de: "erwiesen", ar: "مثبت", note: "ie = إي: إرڤيزِن" },
    ],
    tip: "Fachsprache = فاخ-شپراخه — خ + شپ معاً. وzweifellos = تسڤايفِلوس — zw ألمانية تسڤ.",
    shadowing: [
      { de: "Es ist erwiesen, dass...", ar: "ثابت أن...", tip: "erwiesen = إرڤيزِن" },
      { de: "Meiner Ansicht nach ist das wichtig.", ar: "في رأيي هذا مهم.", tip: "Meiner Ansicht nach" },
      { de: "Möglicherweise stimmt das.", ar: "ربما هذا صحيح.", tip: "möglicherweise = مُوكليخرڤايزِه" },
      { de: "Zusammenfassend lässt sich sagen...", ar: "خلاصةً يمكن القول...", tip: "zusammenfassend = تسو-زامِن-فاسِنت" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة أكاديمية:",
      prompt: "«ثابت أن تعلم اللغات يقوي الدماغ» (es ist erwiesen)",
      acceptedAnswers: ["Es ist erwiesen, dass Sprachenlernen das Gehirn stärkt", "Es ist erwiesen, dass Sprachen das Gehirn stärken"],
      sampleAnswer: "Es ist erwiesen, dass Sprachenlernen das Gehirn stärkt.",
      explanation: "es ist erwiesen + dass + فعل في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالعبارة:",
      template: "___ Ansicht nach ist das wichtig. (في رأيي) ___ lässt sich sagen: B2 ist geschafft. (خلاصةً)",
      blanks: [
        { correct: "Meiner", options: ["Meiner", "Meine", "Mein"] },
        { correct: "Zusammenfassend", options: ["Zusammenfassend", "Erstens", "Außerdem"] },
      ],
      explanation: "Meiner Ansicht nach + Zusammenfassend.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Es ist erwiesen, dass Sprachen unser Denken beeinflussen.",
      explanation: "ثابت أن اللغات تؤثر على تفكيرنا — جملة أكاديمية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر عبارة التأكيد:",
      questionDe: "___ ist das richtig. (ثابت أن)",
      options: ["Es ist erwiesen, dass", "Vielleicht", "In gewissem Maße", "Unter Umständen"],
      correctIndex: 0,
      explanation: "التأكيد: es ist erwiesen.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر عبارة التحفظ:",
      questionDe: "___ stimmt das. (إلى حد ما)",
      options: ["In gewissem Maße", "Zweifellos", "Eindeutig", "Es ist erwiesen"],
      correctIndex: 0,
      explanation: "التحفظ: in gewissem Maße.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة الدراسة بمعناها:",
      pairs: [
        { left: "die Hausarbeit", right: "البحث الجامعي" },
        { left: "das Seminar", right: "الندوة" },
        { left: "die Fachsprache", right: "لغة التخصص" },
        { left: "die Linguistik", right: "علم اللغة" },
      ],
      explanation: "أربع كلمات جامعية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["erwiesen", "Es", "ist", "dass", "Sprachen", "Denken", "unser", "beeinflussen", ","],
      correctSentence: "Es ist erwiesen, dass Sprachen unser Denken beeinflussen.",
      explanation: "جملة أكاديمية: es ist erwiesen + dass.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Zusammenfassend kann man sagen, dass B2 ein Meilenstein ist.",
      wrongWord: "Zusammenfassend kann man sagen",
      correctWord: "Zusammenfassend kann man sagen",
      isAlreadyCorrect: true,
      options: ["Zusammenfassend kann man sagen", "Zusammenfassend man kann sagen", "Kann man zusammenfassend sagen", "Man zusammenfassend kann sagen"],
      explanation: "الترتيب صحيح: Zusammenfassend + kann + man + sagen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالعبارة:",
      template: "___ ist erwiesen, dass... (ثابت) ___ Ansicht nach... (رأي) In gewissem ___ stimmt das. (حد)",
      blanks: [
        { correct: "Es", options: ["Es", "Das", "Man"] },
        { correct: "Meiner", options: ["Meiner", "Meine", "Mein"] },
        { correct: "Maße", options: ["Maße", "Maß", "Masse"] },
      ],
      explanation: "es ist erwiesen + meiner Ansicht nach + in gewissem Maße.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل من عامي إلى أكاديمي:",
      prompt: "«أعتقد أن هذا مهم» → (meiner Ansicht nach)",
      acceptedAnswers: ["Meiner Ansicht nach ist das wichtig", "Meiner Ansicht nach ist das wichtig."],
      sampleAnswer: "Meiner Ansicht nach ist das wichtig.",
      explanation: "الأكاديمي: meiner Ansicht nach.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "möglicherweise",
      questionAr: "ما معنى الكلمة؟",
      options: ["ربما", "بلا شك", "إلى حد ما", "بوضوح"],
      correctIndex: 0,
      explanation: "möglicherweise = ربما (تلطيف).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Meiner Ansicht nach dass das wichtig ist.",
      wrongWord: "dass das wichtig ist",
      correctWord: "ist das wichtig",
      options: ["ist das wichtig", "dass das wichtig ist", "das wichtig ist", "dass ist das wichtig"],
      explanation: "بعد Meiner Ansicht nach تأتي جملة رئيسية بالفعل ثانياً — لا dass: Meiner Ansicht nach ist das wichtig.",
      errorType: "grammar",
    },
    {
      id: "e10-punct",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich komme morgen, weil ich Zeit habe.",
      wrongWord: ",",
      correctWord: ",",
      isAlreadyCorrect: true,
      options: [",", ";", ".", ":"],
      explanation: "الفاصلة قبل weil إلزامية في الألمانية لأنها تفصل الجملة الثانوية — فالجملة صحيحة كما هي. تمرين وعي: لا تفترض أن كل جملة بها خطأ.",
      errorType: "punctuation",
    },
    {
      id: "e11-punct",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Meiner Meinung nach ist das Problem groß.",
      wrongWord: "nach",
      correctWord: "nach",
      isAlreadyCorrect: true,
      options: ["nach", "nach,", "nach.", "nach:"],
      explanation: "بعد التعبير الافتتاحي القصير Meiner Meinung nach لا فاصلة إلزامية في الألمانية الحديثة.",
      errorType: "punctuation",
    },
    {
      id: "e12-punct",
      type: "fill-blank",
      instructionAr: "ضع علامة الترقيم الصحيحة (اكتبها في نهاية الجملة):",
      template: "Er fragte mich, ob ich komme ___  — Ich habe Hunger, aber ich koche ___  — Vorsicht, die Tür ist offen ___",
      blanks: [
        { correct: ".", options: [".", ",", "?", "!"] },
        { correct: ".", options: [".", "?", "!", ":"] },
        { correct: "!", options: [".", ",", "?", "!"] },
      ],
      explanation: "جملة خبرية → نقطة. تحذير → علامة تعجب.",
      errorType: "punctuation",
    },
    {
      id: "e13-nominal",
      type: "multiple-choice",
      instructionAr: "حوّل إلى الأسلوب الاسمي (Nominalstil): اختر المقابل الصحيح لـ «weil man spart»:",
      questionDe: "___ konnte die Universität neue Labore bauen.",
      options: ["Wegen der Einsparung", "Wegen die Einsparung", "Weil der Einsparung", "Wegen sparen"],
      correctIndex: 0,
      explanation:
        "wegen حرف جر يلزم Genitiv في اللغة المكتوبة: wegen der Einsparung. وweil أداة ربط لجملة لا لاسم، وwegen sparen خطأ لأن المصدر يحتاج تنكيراً اسمياً (das Sparen).",
      errorType: "case",
    },
    {
      id: "e14-nominal",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر المناسب للأسلوب الاسمي:",
      template:
        "___ der Ankunft melden Sie sich im Sekretariat. (عند الوصول) — ___ des Regens fand die Feier statt. (رغم المطر) — ___ Klärung der Frage brauchen wir Zeit. (لتوضيح)",
      blanks: [
        { correct: "Bei", options: ["Bei", "Wenn", "Mit"], errorType: "preposition" },
        { correct: "Trotz", options: ["Trotz", "Obwohl", "Wegen"], errorType: "preposition" },
        { correct: "Zur", options: ["Zur", "Damit", "Für"], errorType: "preposition" },
      ],
      explanation:
        "لكل أداة ربط نظيرٌ من حروف الجر: wenn ← bei + Dativ، وobwohl ← trotz + Genitiv، وdamit ← zu + Dativ (zur Klärung). أدوات الربط تُتبع بجملة، وحروف الجر تُتبع باسم.",
      errorType: "preposition",
    },
    {
      id: "e15-nominal",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Nach die Prüfung fahren die Studenten nach Hause.",
      wrongWord: "die",
      correctWord: "der",
      options: ["der", "die", "des", "dem"],
      explanation:
        "nach حرف جر يلزم Dativ دائماً، ومؤنث Dativ هو der: nach der Prüfung. (die نصب/رفع، وdes للمضاف المذكر والمحايد.)",
      errorType: "case",
    },
    {
      id: "e16-b2",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (صفة مشتقة + مجهول مع فعل ناقص — الوحدتان 4 و2):",
      tokens: ["Der", "eingereichte", "Antrag", "muss", "noch", "geprüft", "werden", "."],
      correctSentence: "Der eingereichte Antrag muss noch geprüft werden.",
      explanation:
        "الصفة المشتقة من Partizip II تسبق الاسم (der eingereichte Antrag)، والمجهول مع الناقص يضع Partizip II + werden في آخر الجملة: muss ... geprüft werden.",
      errorType: "word-order",
    },
    {
      id: "e17-b2",
      type: "multiple-choice",
      instructionAr: "مزج قواعد B2 (درس b2-05 — الروابط المتقدمة): اختر الرابط:",
      questionDe: "Man verbessert sein Deutsch, ___ man täglich liest.",
      options: ["indem", "obwohl", "damit", "trotzdem"],
      correctIndex: 0,
      explanation:
        "indem تبيّن *الوسيلة* (بأن): يتحسّن المرء بأن يقرأ يومياً. وobwohl للتنازل، وdamit للغاية، وtrotzdem ظرف رابط لا أداة جملة ثانوية.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Zusammenfassend lässt sich sagen, dass B2 ein Meilenstein ist.",
      explanation: "خلاصةً يمكن القول إن B2 علامة فارقة — الخاتمة الذهبية.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "أسلوب حاد بلا دليل", right: "لطّف: meiner Ansicht nach", whyAr: "الأكاديميا تكره الجزم." },
      { wrong: "Ich denke في مقال أكاديمي", right: "Meiner Ansicht nach / Meines Erachtens", whyAr: "الأسلوب الرسمي." },
      { wrong: "تحفظ زائد", right: "وازن: أكّد + لطّف + تحفظ", whyAr: "التوازن هو النضج." },
    ],
    eselsbruecken: [
      "«ثلاثية الأكاديميا: أكّد (erwiesen)، لطّف (meiner Ansicht)، تحفظ (in gewissem Maße)».",
      "«Zusammenfassend lässt sich sagen» — خاتمة ذهبية لكل مقال.",
    ],
    culturalNote: {
      title: "الجامعات الألمانية",
      content:
        "الدراسة في ألمانيا مجانية تقريباً (رسوم فصل ~300 يورو). والجامعات: TU (تقنية)، Universität (شاملة)، Fachhochschule (تطبيقية). وتختلف متطلبات اللغة حسب الجامعة والبرنامج (عادةً B2–C1 أو TestDaF/DSH). وعبارة: «der Numerus clausus» (قيد القبول — تخصص محدود القبول مثل الطب؛ تُحدَّد علامة القطع من المنافسة ولا تُعلن سلفاً).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر عبارة التأكيد:",
      questionDe: "___ ist das bewiesen. (ثابت)",
      options: ["Es ist erwiesen, dass", "Vielleicht", "Unter Umständen", "In gewissem Maße"],
      correctIndex: 0,
      explanation: "التأكيد: es ist erwiesen.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر عبارة التلطيف:",
      questionDe: "___ ist das möglich. (ربما)",
      options: ["Möglicherweise", "Zweifellos", "Eindeutig", "Es ist erwiesen"],
      correctIndex: 0,
      explanation: "التلطيف: möglicherweise.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Meiner", "nach", "ist", "Ansicht", "das", "wichtig", "."],
      correctSentence: "Meiner Ansicht nach ist das wichtig.",
      explanation: "في رأيي هذا مهم — عبارة أكاديمية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Bis 2030 werde ich alle Übungen gemacht haben.",
      wrongWord: "werde ... gemacht haben",
      correctWord: "werde ... gemacht haben",
      isAlreadyCorrect: true,
      options: ["werde ... gemacht haben", "habe ... gemacht werden", "werde ... gemacht haben gehabt", "mache ... gemacht haben"],
      explanation: "Futur II: werde + PII + haben — صحيحة!",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Es ist ___, dass... (ثابت) Meiner ___ nach... (رأي) Zusammenfassend lässt sich ___... (قول)",
      blanks: [
        { correct: "erwiesen", options: ["erwiesen", "bewiesen", "gesehen"] },
        { correct: "Ansicht", options: ["Ansicht", "Meinung", "Sicht"] },
        { correct: "sagen", options: ["sagen", "sprechen", "reden"] },
      ],
      explanation: "erwiesen + Ansicht nach + lässt sich sagen.",
      errorType: "grammar",
    },
    {
      id: "m6",
      type: "multiple-choice",
      instructionAr: "الاختبار الختامي — نقل الكلام (الوحدة 1):",
      questionDe: "Die Hochschule teilte mit, das Auswahlverfahren ___ im Mai.",
      options: ["beginne", "beginnt", "begänne", "begann"],
      correctIndex: 0,
      explanation:
        "النقل الرسمي المكتوب يلزم Konjunktiv I: beginnen ← es beginne. وbeginnt إخبار ينسب الكلام للكاتب، وbegänne صيغة Konjunktiv II، وbegann ماضٍ.",
      errorType: "grammar",
    },
    {
      id: "m7",
      type: "multiple-choice",
      instructionAr: "الاختبار الختامي — بدائل المجهول (الوحدة 3):",
      questionDe: "Die Zulassungsbedingungen ___ sich online nachlesen.",
      options: ["lassen", "können", "werden", "sind"],
      correctIndex: 0,
      explanation:
        "lassen + sich + مصدر = بديل المجهول بمعنى «يمكن أن يُقرأ». وkönnen sich ليست بنية ألمانية هنا، وwerden يقتضي Partizip II (werden nachgelesen)، وsein يقتضي zu + مصدر.",
      errorType: "grammar",
    },
    {
      id: "m8",
      type: "fill-blank",
      instructionAr: "الاختبار الختامي — الأسلوب الاسمي وحروف الجر (الوحدتان 8 و10):",
      template:
        "___ der Verspätung des Zuges kam sie zu spät. (بسبب) — Ich bewerbe mich ___ einen Studienplatz. (على) — ___ der Ankunft bekommen Sie Ihren Ausweis. (عند)",
      blanks: [
        { correct: "Wegen", options: ["Wegen", "Weil", "Denn"], errorType: "preposition" },
        { correct: "um", options: ["um", "für", "auf"], errorType: "preposition" },
        { correct: "Bei", options: ["Bei", "Wenn", "Als"], errorType: "preposition" },
      ],
      explanation:
        "wegen حرف جر + Genitiv (وweil/denn أدوات جملة)، وsich bewerben يلزمه um + منصوب لا für، وbei + Dativ يقابل wenn في الأسلوب الاسمي.",
      errorType: "preposition",
    },
  ],

  flashcards: [
    { id: "fc1", de: "das Studium", ar: "الدراسة الجامعية", example: "Das Studium beginnt im Oktober.", exampleAr: "تبدأ الدراسة في أكتوبر.", level: "B2" },
    { id: "fc2", de: "die Hausarbeit", ar: "البحث الجامعي", example: "Die Hausarbeit ist fertig.", exampleAr: "البحث جاهز.", level: "B2" },
    { id: "fc3", de: "das Seminar", ar: "الندوة", example: "Das Seminar ist interessant.", exampleAr: "الندوة ممتعة.", level: "B2" },
    { id: "fc4", de: "die Fachsprache", ar: "لغة التخصص", example: "Die Fachsprache ist präzise.", exampleAr: "لغة التخصص دقيقة.", level: "B2" },
    { id: "fc5", de: "es ist erwiesen, dass", ar: "ثابت أن", example: "Es ist erwiesen, dass...", exampleAr: "ثابت أن...", level: "B2" },
    { id: "fc6", de: "meiner Ansicht nach", ar: "في رأيي", example: "Meiner Ansicht nach ist das gut.", exampleAr: "في رأيي هذا جيد.", level: "B2" },
    { id: "fc7", de: "möglicherweise", ar: "ربما", example: "Möglicherweise stimmt das.", exampleAr: "ربما هذا صحيح.", level: "B2" },
    { id: "fc8", de: "zusammenfassend", ar: "خلاصةً", example: "Zusammenfassend lässt sich sagen...", exampleAr: "خلاصةً يمكن القول...", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-b2-10-1",
      type: "merge-info",
      titleAr: "ادمج معلومات عن الدراسة في ألمانيا في تلخيص عربي",
      sourceDe: "Text 1: Die meisten staatlichen Universitäten erheben keine Studiengebühren. Text 2: Allerdings benötigen internationale Studierende einen Sprachnachweis und ausreichende finanzielle Mittel.",
      taskAr: "ادمج المعلومتين في تلخيص متماسك: مجانية الدراسة + الشروط (اللغة والتمويل).",
      modelAnswerAr: "«معظم الجامعات الحكومية لا تفرض رسوماً دراسية، لكن الطلاب الدوليين يحتاجون شهادة لغة وإثبات موارد مالية كافية.»",
      keyPointsAr: ["دمجت المعلومتين معاً", "نقلت مجانية الدراسة", "نقلت شرطي اللغة والتمويل"],
    },
  ],
  interaction: [
    {
      id: "int-b2-10-1",
      scenarioAr: "محاكاة مناقشة Goethe-B2 عن الدراسة بالخارج.",
      scenarioDe: "Simulation einer B2-Diskussion über Auslandsstudium.",
      strategyAr: "الاستراتيجية: حجاج منظم (أطروحة، نقيض، تركيب) بأسلوب امتحاني.",
      rounds: [
        {
          speakerDe: "Lohnt sich ein Studium im Ausland trotz der Herausforderungen?",
          speakerAr: "هل يستحق الدراسة في الخارج رغم التحديات؟",
          options: [
            { de: "Obwohl ein Auslandsstudium mit Sprachbarrieren und Heimweh verbunden ist, überwiegen meiner Meinung nach die Vorteile.", ar: "رغم أن الدراسة بالخارج ترتبط بحواجز اللغة والحنين للوطن، أرى أن المزايا تفوق.", best: true, replyDe: "Ein starkes Argument. Wie würden Sie mit dem Heimweh umgehen?", replyAr: "حجة قوية. كيف تتعامل مع الحنين للوطن؟" },
            { de: "Ein Auslandsstudium ist reine Zeitverschwendung.", ar: "الدراسة بالخارج مضيعة للوقت تماماً.", best: false, replyDe: "Das widerspricht den Erfahrungen vieler erfolgreicher Absolventen.", replyAr: "هذا يتعارض مع تجارب خريجين ناجحين كثيرين." },
          ],
        },
        {
          speakerDe: "Wie würden Sie mit dem Heimweh umgehen?",
          speakerAr: "كيف تتعامل مع الحنين للوطن؟",
          options: [
            { de: "Ich würde regelmäßigen Kontakt mit der Familie halten und neue soziale Kreise aufbauen.", ar: "سأحافظ على تواصل منتظم مع العائلة وأبني دوائر اجتماعية جديدة.", best: true, replyDe: "Eine reife Strategie. Viel Erfolg!", replyAr: "استراتيجية ناضجة. بالتوفيق!" },
            { de: "Ich würde einfach zurückfliegen, sobald es schwer wird.", ar: "سأعود ببساطة بمجرد أن يصعب الأمر.", best: false, replyDe: "Herausforderungen gehören zum Wachstum.", replyAr: "التحديات جزء من النمو." },
          ],
        },
      ],
    },
  ],
};
