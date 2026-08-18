import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-01: العلوم والبحث — Konjunktiv I (نقل الكلام غير المباشر)
 */
export const lessonB201: Lesson = {
  id: "b2-01",
  unitId: "b2-01",
  level: "B2",
  order: 1,
  titleDe: "Wissenschaft und Forschung",
  titleAr: "العلوم والبحث",
  duration: 45,
  summary:
    "فهم الموضوعات العلمية وتقديم العروض الأكاديمية (Präsentation)، نقل الكلام غير المباشر (Konjunktiv I / indirekte Rede) بالكامل: er sagt, er habe... — ونقل الأقوال في الأخبار والتقارير، والاستخدام الذاتي للأفعال الناقصة للتخمين (dürfte, müsste, muss, könnte).",

  lernziele: [
    { id: "z1", de: "Ich kann wissenschaftliche Themen verstehen.", ar: "أن أفهم الموضوعات العلمية وأقدم عروضاً عنها." },
    { id: "z2", de: "Ich kann die indirekte Rede mit Konjunktiv I bilden.", ar: "أن أبني نقل الكلام غير المباشر بـ Konjunktiv I." },
    { id: "z3", de: "Ich kann Berichte und Zusammenfassungen schreiben.", ar: "أن أكتب تقارير وملخصات تنقل أقوال الآخرين بدقة." },
    { id: "z4", de: "Ich kann Modalverben subjektiv benutzen: Das dürfte stimmen.", ar: "أن أستخدم الأفعال الناقصة ذاتياً للتخمين: هذا على الأرجح صحيح." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في الإخبار: «قال الباحث: النتيجة مهمة» (مباشر) مقابل «قال الباحث إن النتيجة مهمة» (غير مباشر). الألمانية تملك صيغة كاملة للنقل غير المباشر اسمها Konjunktiv I: Er sagt, die Forschung sei wichtig. لاحظ: sei بدل ist! هذا يبين أنك «تنقل» وليس «تؤكد».",
    motivatingQuestionDe: "Was hat der Forscher gesagt?",
    contextAr:
      "ندخل قمة المستويات: نتعلم كيف ننقل الأقوال في الأخبار والتقارير العلمية — بتمييز واضح بين «ما قاله» و«ما نقله هو». هذه مهارة الصحفيين والأكاديميين.",
    contextDe: "Der Wissenschaftler sagt, die Entdeckung sei revolutionär.",
    connectionToPreviousAr: "تتذكر Konjunktiv II (würde/hätte) من B1. اليوم: Konjunktiv I — صيغة النقل. نفس العائلة لكن وظيفة مختلفة تماماً.",
    activateVocabulary: [
      { de: "die Wissenschaft", ar: "العلم" },
      { de: "die Forschung", ar: "البحث العلمي" },
      { de: "die Entdeckung", ar: "الاكتشاف" },
      { de: "das Experiment", ar: "التجربة" },
      { de: "der Beweis", ar: "البرهان" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر الصيغة الصحيحة:",
      questionDe: "Wenn ich Zeit ___, würde ich kommen.",
      options: ["hätte", "habe", "hatte", "haben"],
      correctIndex: 0,
      explanation: "Konjunktiv II: hätte (درس الإعلام B1).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر المجهول:",
      questionDe: "Das Experiment ___ durchgeführt. (يُجرى)",
      options: ["wird", "wurde", "ist", "war"],
      correctIndex: 0,
      explanation: "Passiv مضارع: wird durchgeführt (درس البيئة B1).",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1: أكمل:",
      template: "Der Wissenschaftler, ___ forscht, ist berühmt. (الذي)",
      blanks: [
        { correct: "der", options: ["der", "den", "dem"] },
      ],
      explanation: "فاعل مذكر → der (درس التعليم B1).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "نقل الكلام غير المباشر (Konjunktiv I / Indirekte Rede)",
      titleDe: "Die indirekte Rede: er sagt, er habe ...",
      explanationAr:
        "لنقل كلام شخص: Konjunktiv I: er habe، er sei، er werde. التصريف: من المضارع نحذف النهاية ونضيف -e (haben → er habe، sein → er sei، werden → er werde). الجملة: Er sagt, er habe keine Zeit. (يقول إنه لا وقت عنده). القاعدة: Konjunktiv I يبين أن الكلام منقول وليس مؤكداً.",
      whyAr:
        "لماذا صيغة خاصة للنقل؟ لأن الصحفيين يحتاجون «مسافة»: إذا قال أحدهم شيئاً، ننقله بصيغة تبين أننا لسنا مسؤولين عن صحته. Er sagt, er habe gewonnen = «هو يقول إنه فاز» — لست أنا من يؤكد. هذه الدقة سبب وجود Konjunktiv I.",
      table: {
        title: "Konjunktiv I للأفعال الأساسية",
        columns: ["الفعل", "المضارع", "Konjunktiv I", "مثال"],
        rows: [
          { label: "haben", cells: ["hat", "habe", "Er sagt, er habe Zeit."] },
          { label: "sein", cells: ["ist", "sei", "Sie sagt, sie sei müde."] },
          { label: "werden", cells: ["wird", "werde", "Er sagt, er werde kommen."] },
          { label: "können", cells: ["kann", "könne", "Sie sagt, sie könne helfen."] },
          { label: "machen", cells: ["macht", "mache", "Er sagt, er mache es."] },
        ],
      },
      examples: [
        { de: "Der Forscher sagt, die Entdeckung sei revolutionär.", ar: "يقول الباحث إن الاكتشاف ثوري." },
        { de: "Sie sagt, sie habe das Experiment wiederholt.", ar: "تقول إنها كررت التجربة." },
        { de: "Er behauptet, er habe den Beweis gefunden.", ar: "يزعم أنه وجد البرهان." },
        { de: "Die Studie zeigt, die Ergebnisse seien positiv.", ar: "تبين الدراسة أن النتائج إيجابية." },
        { de: "Man sagt, die Forschung werde wichtiger.", ar: "يقال إن البحث سيصبح أكثر أهمية." },
      ],
      comparisonWithArabic:
        "«يقول إنه لا وقت عنده» = Er sagt, er habe keine Zeit. العربية تستخدم «إنّ» — والألمانية Konjunktiv I. والتشابه: كلاهما «يفصل» الكلام المنقول عن المؤكد. والفرق: الألمانية تغيّر الفعل (habe بدل hat).",
      eselsbruecke:
        "«Konjunktiv I = علامة النقل»: كلما رأيت habe/sei/werde بعد «sagt/behauptet/meint» فاعلم أن الكلام منقول. وتذكر: -e في النهاية: mache, habe, könne.",
      commonMistakes: [
        { wrong: "Er sagt, er hat keine Zeit. (مضارع بدل Konjunktiv I)", right: "Er sagt, er habe keine Zeit.", whyAr: "النقل: Konjunktiv I (habe). المضارع يؤكد — والنقل لا يؤكد." },
        { wrong: "خلط Konjunktiv I مع II", right: "I = نقل (er habe). II = شرط/رغبة (er hätte)", whyAr: "وظيفتان مختلفتان: النقل مقابل الافتراض." },
        { wrong: "Wenn Konjunktiv I يشبه المضارع، نستخدم II", right: "عند التطابق (wir haben → wir haben) نستبدل II: sie hätten", whyAr: "قاعدة: إذا تطابق I مع المضارع استخدم II للتمييز." },
      ],
      relatedRuleComparison: {
        title: "Konjunktiv I أم II؟",
        content: "I = نقل الكلام (sagt, behauptet). II = غير واقعي/شرطي (wäre, hätte). الفرق: النقل يبين «قول شخص آخر»، والشرطية تبين «افتراضاً غير واقعي».",
      },
    },
    {
      id: "t2",
      titleAr: "الأفعال الناقصة الذاتية (Subjektiver Gebrauch): التخمين والاستنتاج",
      titleDe: "Subjektiver Gebrauch der Modalverben: dürfte, müsste, muss, kann",
      explanationAr:
        "بعد النقل غير المباشر، نتعلم «الأفعال الناقصة الذاتية» — استخدامها للتخمين ودرجة الاحتمال: Das Experiment dürfte erfolgreich sein (التجربة على الأرجح ناجحة)، Der Zug muss schon abgefahren sein (لابد أن القطار غادر — استنتاج قوي)، Er könnte krank sein (ربما مريض)، Die Ergebnisse müssten morgen kommen (يجب أن تصل النتائج غداً — توقع).",
      whyAr:
        "لماذا «ذاتي»؟ لأنك لا تصف قدرة أحد بل تحكم شخصياً على درجة احتمال شيء. الفرق بين: Er kann Deutsch (قدرة = موضوعي) وDas kann stimmen (احتمال = ذاتي). الصحفي والمحلل يستخدمانها كل يوم — وهي مهارة B2 الرسمية في القراءة والاستماع.",
      table: {
        title: "درجات الاحتمال بالأفعال الناقصة الذاتية",
        columns: ["الفعل", "درجة الاحتمال", "المعنى", "مثال"],
        rows: [
          { label: "muss", cells: ["95% (استنتاج قوي)", "لابد أن", "Er muss zu Hause sein."] },
          { label: "dürfte", cells: ["80% (على الأرجح)", "غالباً", "Das dürfte richtig sein."] },
          { label: "könnte", cells: ["50% (محتمل)", "ربما", "Sie könnte krank sein."] },
          { label: "kann (إمكانية عامة)", cells: ["عامة", "قد", "Das kann passieren."] },
          { label: "müsste (توقع)", cells: ["توقع مبنٍ على معطيات", "يجب أن (توقعاً)", "Er müsste bald kommen."] },
        ],
      },
      examples: [
        { de: "Die Entdeckung dürfte die Forschung verändern.", ar: "على الأرجح سيغيّر الاكتشاف البحث العلمي." },
        { de: "Der Forscher muss lange experimentiert haben.", ar: "لابد أن الباحث أجرى تجارب طويلة." },
        { de: "Die Ergebnisse könnten morgen veröffentlicht werden.", ar: "قد تُنشر النتائج غداً." },
        { de: "Das Experiment müsste erfolgreich gewesen sein.", ar: "يجب أن تكون التجربة قد نجحت (حسب المعطيات)." },
        { de: "Solche Fehler können überall passieren.", ar: "مثل هذه الأخطاء قد تحدث في أي مكان (إمكانية عامة)." },
      ],
      comparisonWithArabic:
        "العربية تستخدم «لابد أن» (muss)، «على الأرجح» (dürfte)، «ربما» (könnte)، «قد» (kann) — نفس درجات الاحتمال تماماً! والتشابه أوضح في العامية: «أكيد راح» = Er muss gegangen sein.",
      eselsbruecke:
        "سلم الاحتمال التنازلي: «موس = لابد (95%)، دُورفته = غالباً (80%)، كونتّه = ربما (50%)، موسته = توقعاً». احفظ السلم وستعبّر عن أي شك بدقة.",
      commonMistakes: [
        { wrong: "Er muss krank. (بلا sein)", right: "Er muss krank sein.", whyAr: "التخمين الذاتي يتطلب sein + صفة أو مصدراً مركّباً (gemacht haben)." },
        { wrong: "Er kann schwimmen. = تخمين", right: "قدرة (موضوعي): يعرف السباحة. التخمين: Das kann stimmen.", whyAr: "الذاتي يظهر مع أفعال ليست قدرة (stimmen, passieren, sein)." },
        { wrong: "Das dürfte gestimmt haben. (خلط زمني بلا حاجة)", right: "تخمين حاضر: Das dürfte stimmen. للماضي: Das dürfte gestimmt haben.", whyAr: "dürfte + مصدر = حاضر. مع Partizip + haben = ماضٍ." },
      ],
      relatedRuleComparison: {
        title: "متى يكون الاستخدام «ذاتياً»؟",
        content: "اختبار سريع: هل يمكن إعادة الصياغة بـ«من المحتمل/لابد»؟ إذن ذاتي. أما إذا كانت «يقدر/يعرف» فموضوعي: Das kann stimmen = قد يكون صحيحاً (ذاتي). Er kann schwimmen = يعرف السباحة (موضوعي).",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "مؤتمر علمي",
        lines: [
          { speaker: "Professorin", de: "Die Forschung zeigt, dass das Experiment erfolgreich war.", ar: "يبين البحث أن التجربة كانت ناجحة." },
          { speaker: "Reporter", de: "Die Professorin sagt, die Ergebnisse seien sehr wichtig.", ar: "تقول الأستاذة إن النتائج مهمة جداً." },
          { speaker: "Reporter", de: "Sie behauptet, die Entdeckung könne die Medizin verändern.", ar: "تزعم أن الاكتشاف قد يغير الطب." },
          { speaker: "Professorin", de: "Wir haben noch viel zu tun, aber die Zukunft sei vielversprechend.", ar: "لا يزال أمامنا الكثير، لكن المستقبل واعد." },
        ],
      },
      {
        id: "l2",
        title: "حوار بعد المؤتمر",
        lines: [
          { speaker: "Sami", de: "Was hat die Professorin gesagt?", ar: "ماذا قالت الأستاذة؟" },
          { speaker: "Anna", de: "Sie sagte, die Ergebnisse seien positiv.", ar: "قالت إن النتائج إيجابية." },
          { speaker: "Sami", de: "Und über die Zukunft?", ar: "وعن المستقبل؟" },
          { speaker: "Anna", de: "Sie meinte, die Forschung werde weitergehen.", ar: "رأت أن البحث سيستمر." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was sagt die Professorin über die Ergebnisse?",
        questionAr: "ماذا تقول الأستاذة عن النتائج؟",
        options: ["Sie seien sehr wichtig", "Sie seien schlecht", "Sie seien unbekannt", "Sie seien alt"],
        correctIndex: 0,
        explanation: "قال المراسل: Die Professorin sagt, die Ergebnisse seien sehr wichtig.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was kann die Entdeckung verändern?",
        questionAr: "ماذا يمكن أن يغير الاكتشاف؟",
        options: ["die Medizin", "die Wirtschaft", "die Politik", "die Schule"],
        correctIndex: 0,
        explanation: "قال المراسل: Die Entdeckung könne die Medizin verändern.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was meinte die Professorin über die Zukunft?",
        questionAr: "ماذا رأت الأستاذة عن المستقبل؟",
        options: ["Die Forschung werde weitergehen", "Die Forschung sei fertig", "Die Forschung sei teuer", "Die Forschung sei langweilig"],
        correctIndex: 0,
        explanation: "قالت آنا: Sie meinte, die Forschung werde weitergehen.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات العلوم: ei، ie، وtion",
    items: [
      { de: "die Wissenschaft", ar: "العلم", note: "sch = ش: ڤيسن-شافَت" },
      { de: "die Forschung", ar: "البحث", note: "or: فورشونغ" },
      { de: "das Experiment", ar: "التجربة", note: "x = كس: إكسبيريمِنت" },
      { de: "die Entdeckung", ar: "الاكتشاف", note: "w = ڤ: إنت-دِكّونغ" },
      { de: "die Revolution", ar: "الثورة", note: "tion = تسيون: رِڤولوتسيون" },
      { de: "das Genie", ar: "العبقري", note: "g = ج: جيني" },
    ],
    tip: "النهاية -tion تُنطق «تسيون» دائماً — انتبه في الكلمات العلمية: Revolution, Information, Nation.",
    shadowing: [
      { de: "Er sagt, er habe Zeit.", ar: "يقول إنه وقت عنده.", tip: "habe — Konjunktiv I" },
      { de: "Sie sagt, sie sei müde.", ar: "تقول إنها متعبة.", tip: "sei — Konjunktiv I" },
      { de: "Er behauptet, er habe den Beweis.", ar: "يزعم أنه وجد البرهان.", tip: "behauptet = بِهاوبتِت (au=آو)" },
      { de: "Man sagt, die Forschung werde wichtiger.", ar: "يقال إن البحث سيصبح أهم.", tip: "werde — Konjunktiv I" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "انقل كلاماً غير مباشر:",
      prompt: "«Ich habe Zeit» → (هو يقول إنه وقت عنده)",
      acceptedAnswers: ["Er sagt, er habe Zeit", "Er sagt, er habe Zeit."],
      sampleAnswer: "Er sagt, er habe Zeit.",
      explanation: "النقل: habe (Konjunktiv I).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ Konjunktiv I:",
      template: "Er sagt, er ___ (haben) Zeit. Sie sagt, sie ___ (sein) müde. Er behauptet, er ___ (können) helfen.",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
        { correct: "sei", options: ["sei", "ist", "wäre"] },
        { correct: "könne", options: ["könne", "kann", "könnte"] },
      ],
      explanation: "Konjunktiv I: habe، sei، könne.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Der Forscher sagt, die Entdeckung sei revolutionär.",
      explanation: "يقول الباحث إن الاكتشاف ثوري — Konjunktiv I (sei).",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv I:",
      questionDe: "Er sagt, er ___ Zeit.",
      options: ["habe", "hat", "hätte", "haben"],
      correctIndex: 0,
      explanation: "النقل: habe.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv I:",
      questionDe: "Sie sagt, sie ___ müde.",
      options: ["sei", "ist", "wäre", "seid"],
      correctIndex: 0,
      explanation: "النقل: sei.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة العلم بمعناها:",
      pairs: [
        { left: "die Wissenschaft", right: "العلم" },
        { left: "die Forschung", right: "البحث" },
        { left: "das Experiment", right: "التجربة" },
        { left: "der Beweis", right: "البرهان" },
      ],
      explanation: "أربع كلمات علمية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["sagt", "er", "habe", "Er", "Zeit", ","],
      correctSentence: "Er sagt, er habe Zeit.",
      explanation: "النقل: sagt + Konjunktiv I (habe).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Er sagt, er hat keine Zeit.",
      wrongWord: "hat",
      correctWord: "habe",
      options: ["habe", "hat", "hätte", "haben"],
      explanation: "النقل: Konjunktiv I (habe).",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ Konjunktiv I:",
      template: "Sie behauptet, sie ___ (können) es schaffen. Er meint, er ___ (werden) kommen.",
      blanks: [
        { correct: "könne", options: ["könne", "kann", "könnte"] },
        { correct: "werde", options: ["werde", "wird", "würde"] },
      ],
      explanation: "könne، werde (Konjunktiv I).",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل من مباشر إلى غير مباشر:",
      prompt: "«Ich bin müde» → (هي تقول إنها متعبة)",
      acceptedAnswers: ["Sie sagt, sie sei müde", "Sie sagt, sie sei müde."],
      sampleAnswer: "Sie sagt, sie sei müde.",
      explanation: "bin → sei (Konjunktiv I من sein).",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "die Entdeckung",
      questionAr: "ما معنى الكلمة؟",
      options: ["الاكتشاف", "التجربة", "الاختراع", "البحث"],
      correctIndex: 0,
      explanation: "die Entdeckung = الاكتشاف.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Reporter sagt, die Ergebnisse ist positiv.",
      wrongWord: "ist",
      correctWord: "seien",
      options: ["seien", "ist", "sind", "wären"],
      explanation: "الجمع + النقل: seien.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Studie zeigt, die Ergebnisse seien positiv.",
      explanation: "تبين الدراسة أن النتائج إيجابية — Konjunktiv I (seien).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "اختر الفعل الناقص حسب درجة الاحتمال:",
      instructionDe: "Ergänze: muss, dürfte, könnte",
      template: "Er ___ zu Hause sein. (95% — لابد) · Das ___ richtig sein. (80% — غالباً) · Sie ___ krank sein. (50% — ربما)",
      blanks: [
        { correct: "muss", options: ["muss", "dürfte", "könnte", "kann"] },
        { correct: "dürfte", options: ["dürfte", "muss", "könnte", "sollte"] },
        { correct: "könnte", options: ["könnte", "muss", "dürfte", "wollte"] },
      ],
      hint: "سلم الاحتمال: muss (لابد) > dürfte (غالباً) > könnte (ربما).",
      explanation: "muss = استنتاج قوي، dürfte = على الأرجح، könnte = محتمل.",
      errorType: "grammar",
      points: 2,
    },
    {
      id: "e12",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوّن تخميناً (dürfte):",
      tokens: ["Die", "Entdeckung", "dürfte", "die", "Forschung", "verändern."],
      correctSentence: "Die Entdeckung dürfte die Forschung verändern.",
      hint: "dürfte في المركز الثاني + المصدر في نهاية الجملة.",
      explanation: "الاكتشاف على الأرجح سيغيّر البحث العلمي.",
      errorType: "word-order",
      points: 2,
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Er sagt, er hat Zeit. (مضارع بدل نقل)", right: "Er sagt, er habe Zeit.", whyAr: "النقل يتطلب Konjunktiv I." },
      { wrong: "خلط I مع II", right: "I = نقل (habe). II = شرط (hätte)", whyAr: "وظيفتان مختلفتان." },
      { wrong: "التطابق مع المضارع", right: "عند التطابق استخدم II: wir haben → sie hätten", whyAr: "قاعدة التمييز عند الالتباس." },
    ],
    eselsbruecken: [
      "«Konjunktiv I = علامة النقل» — sagt/behauptet/meint + habe/sei/werde.",
      "«النهاية -e للنقل»: mache, habe, könne.",
    ],
    culturalNote: {
      title: "العلم في ألمانيا",
      content:
        "ألمانيا موطن ~80 جائزة نوبل! مراكز البحث: «Max-Planck» و«Fraunhofer» و«Helmholtz». والدراسة العلمية مجانية تقريباً حتى الدكتوراه. وعبارة أكاديمية: «Die Forschung wird staatlich gefördert» (البحث مدعوم من الدولة).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv I:",
      questionDe: "Er behauptet, er ___ es geschafft.",
      options: ["habe", "hat", "hätte", "haben"],
      correctIndex: 0,
      explanation: "النقل: habe.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv I:",
      questionDe: "Sie sagt, sie ___ kommen.",
      options: ["werde", "wird", "würde", "worden"],
      correctIndex: 0,
      explanation: "النقل: werde.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["sagt", "Die", "Professorin", "Ergebnisse", "die", "seien", "positiv", ","],
      correctSentence: "Die Professorin sagt, die Ergebnisse seien positiv.",
      explanation: "النقل: seien (Konjunktiv I).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Er sagt, er ist krank.",
      wrongWord: "ist",
      correctWord: "sei",
      options: ["sei", "ist", "wäre", "seid"],
      explanation: "النقل: sei.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ Konjunktiv I:",
      template: "Sie sagt, sie ___ (haben) keine Zeit. Er meint, er ___ (können) helfen.",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
        { correct: "könne", options: ["könne", "kann", "könnte"] },
      ],
      explanation: "habe، könne (Konjunktiv I).",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Wissenschaft", ar: "العلم", example: "Die Wissenschaft hilft uns.", exampleAr: "العلم يساعدنا.", level: "B2" },
    { id: "fc2", de: "die Forschung", ar: "البحث العلمي", example: "Die Forschung ist wichtig.", exampleAr: "البحث مهم.", level: "B2" },
    { id: "fc3", de: "das Experiment", ar: "التجربة", example: "Das Experiment war erfolgreich.", exampleAr: "كانت التجربة ناجحة.", level: "B2" },
    { id: "fc4", de: "der Beweis", ar: "البرهان", example: "Der Beweis ist stark.", exampleAr: "البرهان قوي.", level: "B2" },
    { id: "fc5", de: "der Konjunktiv I", ar: "نقل الكلام غير المباشر", example: "Er sagt, er habe Zeit.", exampleAr: "يقول إنه وقت عنده.", level: "B2" },
    { id: "fc6", de: "indirekte Rede", ar: "الكلام غير المباشر", example: "Sie sagt, sie sei müde.", exampleAr: "تقول إنها متعبة.", level: "B2" },
    { id: "fc7", de: "behaupten", ar: "يزعم", example: "Er behauptet, er wisse es.", exampleAr: "يزعم أنه يعرفها.", level: "B2" },
    { id: "fc8", de: "die Entdeckung", ar: "الاكتشاف", example: "Die Entdeckung ist neu.", exampleAr: "الاكتشاف جديد.", level: "B2" },
    { id: "fc9", de: "dürfte", ar: "على الأرجح (تخمين 80%)", example: "Das dürfte richtig sein.", exampleAr: "هذا على الأرجح صحيح.", level: "B2" },
    { id: "fc10", de: "muss / könnte (تخمين)", ar: "لابد أن / ربما", example: "Er muss krank sein. Sie könnte kommen.", exampleAr: "لابد أنه مريض. ربما تأتي.", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-b2-01-1",
      type: "merge-info",
      titleAr: "ادمج معلومتين من نصين في تلخيص عربي واحد",
      sourceDe: "Text 1: Die Digitalisierung verändert den Arbeitsmarkt. Text 2: Viele traditionelle Berufe verschwinden, aber neue entstehen.",
      taskAr: "لخّص بالعربية الفكرتين معاً في فقرة متماسكة: تأثير الرقمنة على سوق العمل (اختفاء مهن تقليدية وظهور مهن جديدة).",
      modelAnswerAr: "«الرقمنة تغيّر سوق العمل: تختفي مهن تقليدية كثيرة، لكن تظهر في المقابل مهن جديدة.»",
      keyPointsAr: ["دمجت الفكرتين معاً (لا فصل بينهما)", "نقلت مفهوم الرقمنة", "نقلت الاختفاء والظهور معاً"],
    },
  ],
  interaction: [
    {
      id: "int-b2-01-1",
      scenarioAr: "نقاش أكاديمي عن تأثير الرقمنة على مستقبل العمل.",
      scenarioDe: "Eine akademische Diskussion über die Digitalisierung.",
      strategyAr: "الاستراتيجية: التعبير عن المواقف المعقدة بأدوات الربط المتقدمة (obwohl, während, je...desto) والرد على الحجج.",
      rounds: [
        {
          speakerDe: "Meiner Meinung nach macht die Digitalisierung viele Arbeitsplätze überflüssig.",
          speakerAr: "في رأيي، الرقمنة تجعل وظائف كثيرة غير ضرورية.",
          options: [
            { de: "Das stimmt zwar, aber gleichzeitig entstehen völlig neue Berufe, die mehr Qualifikation verlangen.", ar: "صحيح إلى حد ما، لكن تظهر في الوقت نفسه مهن جديدة تماماً تتطلب مؤهلات أعلى.", best: true, replyDe: "Interessant! Welche neuen Berufe meinen Sie konkret?", replyAr: "مثير للاهتمام! أي مهن جديدة تقصد تحديداً؟" },
            { de: "Nein, das ist völlig falsch.", ar: "لا، هذا خطأ تماماً.", best: false, replyDe: "Können Sie das bitte begründen? Nur „falsch“ ist kein Argument.", replyAr: "هل يمكنك تبرير ذلك من فضلك؟ «خطأ» وحدها ليست حجة." },
          ],
        },
        {
          speakerDe: "Welche neuen Berufe entstehen Ihrer Meinung nach?",
          speakerAr: "أي مهن جديدة تظهر في رأيك؟",
          options: [
            { de: "Zum Beispiel im Bereich künstliche Intelligenz und Datenschutz. Je mehr Technologie, desto mehr Fachkräfte werden gebraucht.", ar: "مثلاً في مجال الذكاء الاصطناعي وحماية البيانات. كلما زادت التقنية، زادت الحاجة للمتخصصين.", best: true, replyDe: "Das ist ein gutes Argument. Allerdings brauchen wir auch Umschulungen.", replyAr: "هذه حجة جيدة. لكننا نحتاج أيضاً برامج إعادة تأهيل." },
            { de: "Ich weiß es nicht und es ist egal.", ar: "لا أعرف ولا يهم.", best: false, replyDe: "Für eine akademische Diskussion wäre eine fundierte Antwort besser.", replyAr: "في نقاش أكاديمي، الأفضل إجابة مبنية على معرفة." },
          ],
        },
        {
          speakerDe: "Sollte der Staat die Umschulung finanzieren?",
          speakerAr: "هل يجب على الدولة تمويل إعادة التأهيل؟",
          options: [
            { de: "Meiner Ansicht nach sollte der Staat in Umschulungen investieren, obwohl das kurzfristig teuer ist. Langfristig lohnt es sich für die ganze Gesellschaft.", ar: "في رأيي يجب على الدولة الاستثمار في إعادة التأهيل، رغم أن ذلك مكلف على المدى القصير. على المدى الطويل يفيد المجتمع كله.", best: true, replyDe: "Da stimme ich Ihnen zu. Eine kluge Investition in die Zukunft.", replyAr: "أوافقك الرأي. استثمار ذكي في المستقبل." },
            { de: "Nein, jeder ist für sich selbst verantwortlich.", ar: "لا، كل واحد مسؤول عن نفسه.", best: false, replyDe: "Das ist eine mögliche Position, aber sie ignoriert soziale Folgen.", replyAr: "هذا موقف محتمل، لكنه يتجاهل العواقب الاجتماعية." },
          ],
        },
      ],
    },
  ],
};
