import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-11: المراجعة الختامية B1
 * — خاتمة مستوى B1: دمج كل المهارات (استقبال + إنتاج + تفاعل + وساطة)
 * في مواقف متنوعة — إغلاق الوحدة b1-11 —
 */
export const lessonB111: Lesson = {
  id: "b1-11",
  unitId: "b1-11",
  level: "B1",
  order: 1,
  titleDe: "B1 kompakt — Abschlusswiederholung",
  titleAr: "B1 الشامل — مراجعة ختامية",
  summary:
    "المراجعة الختامية لبعض قواعد B1: الجمل الموصولة وPassiv وKonjunktiv II وأدوات الربط، مع تمارين استماع وكتابة قصيرة، وعرض للوساطة والتفاعل بوصفهما تدريباً غير مقوّم.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann bei Relativsätzen, Konjunktiv II und den Konjunktionen damit, um ... zu und obwohl die richtige Form wählen.",
      ar: "أن أختار الصيغة الصحيحة في الجمل الموصولة وجملة الشرط غير الواقعي وأدوات الربط (damit، um...zu، obwohl).",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["ex-b1-11-1", "ex-b1-11-2", "ex-b1-11-3", "ex-b1-11-4", "ex-b1-11-6", "mt-b1-11-1", "mt-b1-11-2"],
        taskIds: [
          "practice:b1-11:ex-b1-11-1",
          "practice:b1-11:ex-b1-11-2",
          "practice:b1-11:ex-b1-11-3",
          "practice:b1-11:ex-b1-11-4",
          "practice:b1-11:ex-b1-11-6",
          "mini-test:b1-11:mt-b1-11-1",
          "mini-test:b1-11:mt-b1-11-2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الجمل الموصولة والشرط وأدوات الربط (ex-1 إلى ex-4 وex-6 وmt-1 وmt-2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann in einer kurzen Nachricht Termin und mitzubringende Unterlagen verstehen.",
      ar: "أن أفهم من رسالة قصيرة الموعد والمستندات المطلوب إحضارها.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["lsq-b1-11-1", "lsq-b1-11-2"],
        taskIds: ["listening:ls-b1-11-1:lsq-b1-11-1", "listening:ls-b1-11-1:lsq-b1-11-2"],
        labelAr: "أجيب صحيحاً عن السؤالين بعد الاستماع إلى الرسالة، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z3",
      de: "Ich kann einen Satz ins Passiv setzen und einen Satz mit nachdem schriftlich bilden.",
      ar: "أن أحوّل جملة إلى المجهول، وأكوّن جملة بـ nachdem كتابةً.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["wr-b1-11-1", "wr-b1-11-2"],
        taskIds: ["writing:b1-11:wr-b1-11-1", "writing:b1-11:wr-b1-11-2"],
        labelAr: "أكتب التحويلين بالصيغة المقبولة (wr-1 وwr-2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann die Wendungen Meiner Meinung nach und einerseits ... andererseits erkennen und richtig einsetzen.",
      ar: "أن أعرف عبارتي الرأي والموازنة (Meiner Meinung nach، einerseits... andererseits) وأستعملهما في موضعهما.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["ex-b1-11-5", "ex-b1-11-7"],
        taskIds: ["practice:b1-11:ex-b1-11-5", "practice:b1-11:ex-b1-11-7"],
        labelAr: "أجيب صحيحاً عن معنى العبارة (ex-5) واختيار أداة الربط (ex-7)، دون كشف الحل.",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قبل المراجعة الختامية: هل تستطيع قراءة إعلان سكن، الرد على بريد رسمي، والمشاركة في نقاش عن العمل — في جلسة واحدة؟ هذا الدرس يجمع ما تعلمته ويعطيك تمارين لتطبيقه.",
    motivatingQuestionDe: "Wie sicher bist du bei den B1-Strukturen?",
    contextAr:
      "هذا الدرس مراجعة للبنى التي درستها في B1: الجمل الموصولة، والشرط غير الواقعي، والمجهول، وأدوات الربط. يتضمن تمارين استماع وكتابة قصيرة، ولا يتضمن أي توقيت أو محاكاة لامتحان.",
    contextDe: "Wiederholung der B1-Strukturen mit Übungen zum Hören und Schreiben.",
    connectionToPreviousAr: "تراكم كل ما تعلمته من b1-01 (الجمل الموصولة) حتى b1-10 (الجمل الشرطية) — الآن وقت الدمج.",
    activateVocabulary: [
      { de: "die Prüfung", ar: "الامتحان" },
      { de: "der Prüfungsteil", ar: "جزء الامتحان" },
      { de: "bestehen", ar: "ينجح في" },
      { de: "die Anmeldung", ar: "التسجيل" },
      { de: "die Vorbereitung", ar: "التحضير" },
    ],
  },

  theory: [
    {
      id: "t1",
      titleAr: "دمج تراكيب B1 — جدول الإتقان",
      titleDe: "Alle B1-Strukturen im Überblick",
      explanationAr:
        "القاعدة تُستعمل داخل الجملة والنص، لا معزولةً؛ لذلك تُدرَّب هنا في جمل كاملة. الجدول التالي يجمّع البنى الأساسية التي يجب أن تظهر في إنتاجك: الجمل الموصولة (der Mann, der...)، Genitiv (die Meinung des Experten)، المبني للمجهول (Das wird gemacht)، صيغة الشرط (Ich würde...)، والجمل الثانوية (weil, obwohl, nachdem, bevor, damit, um...zu).",
      whyAr:
        "لماذا نجمعها؟ لأن الجمل المركبة تُظهر قدرتك على ربط الأفكار بدل سرد جمل قصيرة متتالية، وهذا ما يتدرّب عليه الدرس.",
      table: {
        title: "البنى الأساسية + مثال تطبيقي",
        columns: ["البنية", "مثال"],
        rows: [
          { label: "جملة موصولة", cells: ["Der Mann, der mir geholfen hat, war sehr nett."] },
          { label: "Genitiv", cells: ["Die Meinung des Experten ist wichtig."] },
          { label: "Passiv", cells: ["Das Projekt wird nächstes Jahr abgeschlossen."] },
          { label: "Konjunktiv II", cells: ["Ich würde mehr Sport treiben, wenn ich Zeit hätte."] },
          { label: "Nebensatz mit nachdem", cells: ["Nachdem ich die Prüfung bestanden hatte, feierte ich."] },
          { label: "um...zu / damit", cells: ["Ich lerne Deutsch, um in Deutschland zu studieren."] },
        ],
      },
      examples: [
        { de: "Obwohl das Wetter schlecht war, sind wir gewandert.", ar: "رغم أن الطقس كان سيئاً، تنزهنا." },
        { de: "Die Firma, in der ich arbeite, ist international.", ar: "الشركة التي أعمل فيها دولية." },
      ],
      comparisonWithArabic:
        "في العربية يأتي الفعل بعد الاسم الموصول «الذي» مباشرة. في الألمانية يذهب الفعل إلى نهاية الجملة النسبية، والضمير (der/die/das) يتبع جنس الاسم الذي يصفه وحالته.",
      eselsbruecke:
        "«الفعل في النهاية = جملة ثانوية» — بعد weil وobwohl وdass والضمير الموصول (der/die/das) يذهب الفعل إلى آخر الجملة الثانوية.",
      commonMistakes: [
        { wrong: "Der Mann, der hat mir geholfen", right: "Der Mann, der mir geholfen hat", whyAr: "في الجملة الموصولة ينقلب الفعل إلى النهاية ولا يبقى في المركز الثاني." },
      ],
    },
    {
      id: "t2",
      titleAr: "خطوات حل تمارين الدرس",
      titleDe: "Vorgehen bei den Übungen",
      explanationAr: "اقرأ السؤال أولاً، ثم الجملة كاملة، ثم اختر شكل الفعل أو أداة الربط الذي يطابق المعنى. في الاستماع اقرأ السؤال قبل الحوار، ثم أجب عنه. وفي الترتيب ابحث عن الفعل المصرَّف أولاً، ثم عن نهاية الجملة الثانوية.",
      whyAr: "لأن أكثر الأخطاء في تمارين هذا الدرس تقع في أداة الربط أو موضع الفعل، لا في المفردات.",
      examples: [
        { de: "Zuerst lese ich die Frage, dann den Satz.", ar: "أولاً أقرأ السؤال، ثم الجملة." },
        { de: "Ich spare Geld, damit ich ein Auto kaufen kann.", ar: "أدّخر المال لأشتري سيارة." },
      ],
      comparisonWithArabic: "لا يوجد تقابل مباشر هنا؛ الفكرة إجرائية: تغيير أداة الربط يغيّر موضع الفعل في الجملة، فاقرأ الجملة كاملة قبل الاختيار.",
      eselsbruecke: "«السؤال أولاً، ثم الجملة كاملة»: قاعدة واحدة تكفي لأغلب تمارين هذا الدرس.",
      commonMistakes: [
        { wrong: "قراءة النص كاملاً قبل السؤال", right: "قراءة السؤال أولاً ثم الجملة", whyAr: "تركيز الانتباه على المطلوب يوفر الوقت ويقلل الأخطاء." },
      ],
    },
  ],

  listening: {
    items: [
      {
        id: "ls-b1-11-1",
        title: "رسالة هاتفية من مكتب العمل",
        lines: [
          { speaker: "الموظف", de: "Guten Tag, Frau Ben Ali. Hier ist das Arbeitsamt.", ar: "نهارك سعيد سيدة بن علي. هنا مكتب العمل." },
          { speaker: "الموظف", de: "Ihr Termin für das Beratungsgespräch wurde auf Donnerstag, den 15., um 14 Uhr verschoben.", ar: "موعد جلسة الاستشارة أُجل إلى الخميس 15 الساعة 14." },
          { speaker: "الموظف", de: "Bitte bringen Sie Ihren Lebenslauf und die Zeugnisse mit. Wir sehen uns dann!", ar: "يرجى إحضار سيرتك الذاتية والشهادات. نراك حينها!" },
        ],
      },
    ],
    questions: [
      {
        type: "multiple-choice",
        id: "lsq-b1-11-1",
        instructionAr: "استمع واختر",
        itemId: "ls-b1-11-1",
        questionDe: "Wann ist der neue Termin?",
        questionAr: "متى الموعد الجديد؟",
        options: ["Am Donnerstag, den 15., um 14 Uhr", "Am Freitag um 9 Uhr", "Am Montag"],
        correctIndex: 0,
        errorType: "grammar",
        explanation: "الموظف قال: Donnerstag, den 15., um 14 Uhr.",
      },
      {
        type: "multiple-choice",
        id: "lsq-b1-11-2",
        instructionAr: "استمع واختر",
        itemId: "ls-b1-11-1",
        questionDe: "Was soll Frau Ben Ali mitbringen?",
        questionAr: "ماذا يجب أن تحضر السيدة بن علي؟",
        options: ["Den Lebenslauf und die Zeugnisse", "Ein Geschenk", "Nichts"],
        correctIndex: 0,
        errorType: "vocabulary",
        explanation: "bringen Sie Ihren Lebenslauf und die Zeugnisse mit.",
      },
    ],
  },

  pronunciation: {
    id: "pron-b1-11",
    title: "نبرة الجملة في النقاش — التنغيم التصاعدي والتنازلي",
    items: [
      { de: "Meiner Meinung nach ist das richtig.", ar: "في رأيي هذا صحيح.", note: "نبرة مستقرة على المعلومة." },
      { de: "Findest du das wirklich?", ar: "هل تجد ذلك حقاً؟", note: "نبرة تصاعدية في نهاية السؤال." },
      { de: "Einerseits stimmt das, andererseits …", ar: "من ناحية هذا صحيح، ومن ناحية أخرى…", note: "توقف ونبرة معلّقة بعد andererseits." },
      { de: "Ich bin überzeugt, dass …", ar: "أنا مقتنع بأن…", note: "تركيز على überzeugt." },
      { de: "Das sehe ich anders.", ar: "أرى ذلك بشكل مختلف.", note: "نبرة حازمة تنازلية." },
      { de: "Darf ich etwas dazu sagen?", ar: "هل أستطيع أن أضيف شيئاً؟", note: "نبرة مهذبة تصاعدية." },
    ],
    tip: "في النقاش: السؤال يرتفع في النهاية، والجملة الحازمة تهبط. التدرج الصوتي يعطي انطباع الطلاقة أكثر من الكلمات نفسها.",
  },

  writing: [
    {
      id: "wr-b1-11-1",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى المبني للمجهول (Passiv)",
      prompt: "Man baut das neue Krankenhaus in unserer Stadt.",
      acceptedAnswers: ["Das neue Krankenhaus wird in unserer Stadt gebaut."],
      sampleAnswer: "Das neue Krankenhaus wird in unserer Stadt gebaut.",
      hint: "Passiv = werden + Partizip II. المفعول يصبح فاعلاً.",
      explanation: "Man baut → wird gebaut. «Man» يحذف في المجهول.",
      errorType: "grammar",
    },
    {
      id: "wr-b1-11-2",
      type: "transformation",
      instructionAr: "حوّل إلى جملة ثانوية مع nachdem",
      prompt: "Ich habe gegessen. Dann bin ich spazieren gegangen.",
      acceptedAnswers: ["Nachdem ich gegessen hatte, bin ich spazieren gegangen."],
      sampleAnswer: "Nachdem ich gegessen hatte, bin ich spazieren gegangen.",
      hint: "nachdem + Plusquamperfekt في الثانوية، والماضي البسيط في الرئيسية.",
      explanation: "الحدث الأسبق = Plusquamperfekt (hatte gegessen).",
      errorType: "word-order",
    },
  ],

  practiceBank: [
    {
      id: "ex-b1-11-1",
      type: "fill-blank",
      instructionAr: "أكمل بضمير الموصول الصحيح",
      template: "Die Frau, ___ gestern angerufen hat, ist meine Chefin.",
      blanks: [{ correct: "die", options: ["die", "der", "das"] }],
      explanation: "die Frau مؤنث → die.",
      errorType: "article",
    },
    {
      id: "ex-b1-11-2",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الشرط",
      template: "Wenn ich mehr Zeit ___ , würde ich reisen. (haben)",
      blanks: [{ correct: "hätte", options: ["hätte", "habe", "hatte"] }],
      explanation: "الجملة الشرطية غير الواقعية: hätte.",
      errorType: "conjugation",
    },
    {
      id: "ex-b1-11-3",
      type: "fill-blank",
      instructionAr: "أكمل بـ um...zu أو damit",
      template: "Ich spare Geld, ___ ich ein Auto kaufen kann.",
      blanks: [{ correct: "damit", options: ["damit", "um", "zu"] }],
      explanation: "فاعل مختلف (ich spare / ich kaufen) → damit.",
      errorType: "grammar",
    },
    {
      id: "ex-b1-11-4",
      type: "multiple-choice",
      instructionAr: "اختر الجملة الصحيحة",
      questionDe: "Welcher Satz ist korrekt?",
      options: [
        "Der Mann, der mir geholfen hat, ist nett.",
        "Der Mann, der hat mir geholfen, ist nett.",
        "Der Mann, der hat geholfen mir, ist nett.",
      ],
      correctIndex: 0,
      explanation: "في الجملة الموصولة الفعل في النهاية: der mir geholfen hat.",
      errorType: "word-order",
    },
    {
      id: "ex-b1-11-5",
      type: "multiple-choice",
      instructionAr: "اختر معنى العبارة",
      questionDe: "Was bedeutet „Meiner Meinung nach“?",
      options: ["في رأيي", "في الواقع", "من ناحية أخرى"],
      correctIndex: 0,
      explanation: "Meiner Meinung nach = في رأيي (تعبير أساسي في النقاش).",
      errorType: "vocabulary",
    },
    {
      id: "ex-b1-11-6",
      type: "multiple-choice",
      instructionAr: "اختر الإكمال الصحيح",
      questionDe: "Obwohl es regnete, ___ wir spazieren.",
      options: ["gingen", "gehen", "gegangen"],
      correctIndex: 0,
      explanation: "Obwohl + جملة ثانوية، والرئيسية فعلها في المركز الثاني: gingen.",
      errorType: "conjugation",
    },
    {
      id: "ex-b1-11-7",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط المناسبة",
      questionDe: "Einerseits ist es teuer, ___ ist es gut.",
      options: ["andererseits", "damit", "nachdem"],
      correctIndex: 0,
      explanation: "einerseits ... andererseits: من ناحية ... ومن ناحية أخرى.",
      errorType: "vocabulary",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich habe 20 Jahre.",
        right: "Ich bin 20 Jahre alt.",
        whyAr: "العمر مع sein: Ich bin ... Jahre alt.",
      },
      {
        wrong: "Ich interessiere für Musik.",
        right: "Ich interessiere mich für Musik.",
        whyAr: "sich interessieren + für — الفعل انعكاسي ويتطلب ضميراً.",
      },
      {
        wrong: "Nachdem ich gegessen habe, ich bin gegangen.",
        right: "Nachdem ich gegessen hatte, bin ich gegangen.",
        whyAr: "الجملة الرئيسية بعد الثانوية تبدأ بالفعل: bin ich gegangen.",
      },
    ],
    eselsbruecken: [
      "«الفعل في نهاية الثانوية، وبداية الرئيسية» — القاعدة الذهبية لترتيب الجمل.",
      "«nachdem = الحدث الأسبق»: الفعل الأسبق يأخذ Plusquamperfekt (hatte gegessen).",
      "«Meiner Meinung nach» تعبّر عن رأيك الشخصي — احفظها كوحدة واحدة.",
    ],
    culturalNote: {
      title: "حدود هذا الدرس",
      content: "هذا الدرس تدريب داخل التطبيق. لا يمنح شهادة، ولا يحل محل أي امتحان رسمي، ولا يعرض توقيتاً أو معايير نجاح. الوساطة والتفاعل فيه تدريبيان غير مقوّمين.",
    },
  },

  miniTest: [
    {
      id: "mt-b1-11-1",
      type: "multiple-choice",
      instructionAr: "اختر الجملة الصحيحة",
      questionDe: "Welcher Satz ist korrekt?",
      options: [
        "Die Frau, die dort steht, ist meine Lehrerin.",
        "Die Frau, der dort steht, ist meine Lehrerin.",
        "Die Frau, das dort steht, ist meine Lehrerin.",
      ],
      correctIndex: 0,
      explanation: "die Frau مؤنث → die.",
      errorType: "article",
    },
    {
      id: "mt-b1-11-2",
      type: "fill-blank",
      instructionAr: "أكمل بالحرف الصحيح",
      template: "Ich lerne Deutsch, ___ in Deutschland zu studieren.",
      blanks: [{ correct: "um", options: ["um", "damit", "zu"] }],
      explanation: "نفس الفاعل + مصدر → um...zu.",
      errorType: "grammar",
    },
    {
      id: "mt-b1-11-3",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة",
      questionDe: "Was bedeutet „die Anmeldung“?",
      options: ["التسجيل", "الامتحان", "النجاح"],
      correctIndex: 0,
      explanation: "die Anmeldung = التسجيل.",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc-b1-11-1", de: "die Prüfung bestehen", ar: "ينجح في الامتحان", example: "Ich habe die Prüfung bestanden.", exampleAr: "نجحت في الامتحان.", level: "B1" },
    { id: "fc-b1-11-2", de: "die Anmeldung", ar: "التسجيل", example: "Die Anmeldung ist bis Freitag.", exampleAr: "التسجيل حتى الجمعة.", level: "B1" },
    { id: "fc-b1-11-3", de: "die Vorbereitung", ar: "التحضير", example: "Die Vorbereitung hilft mir sehr.", exampleAr: "التحضير يساعدني كثيراً.", level: "B1" },
    { id: "fc-b1-11-4", de: "Meiner Meinung nach", ar: "في رأيي", example: "Meiner Meinung nach ist das eine gute Idee.", exampleAr: "في رأيي هذه فكرة جيدة.", level: "B1" },
    { id: "fc-b1-11-5", de: "Einerseits ... andererseits", ar: "من ناحية ... ومن ناحية أخرى", example: "Einerseits ist es teuer, andererseits gut.", exampleAr: "من ناحية مكلف، ومن ناحية أخرى جيد.", level: "B1" },
    { id: "fc-b1-11-6", de: "das Beratungsgespräch", ar: "جلسة الاستشارة", example: "Ich habe ein Beratungsgespräch beim Arbeitsamt.", exampleAr: "لدي جلسة استشارة في مكتب العمل.", level: "B1" },
    { id: "fc-b1-11-7", de: "der Prüfungsteil", ar: "جزء الامتحان", example: "Ich übe jeden Teil einzeln.", exampleAr: "أتدرّب على كل جزء على حدة.", level: "B1" },
  ],

  /* ═══ الوساطة والتفاعل ═══ */
  mediation: [
    {
      id: "med-b1-11-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة رسمية عن تأجيل موعد بالعربية",
      sourceDe: "Sehr geehrte Frau Ben Ali, wir müssen Ihren Termin für das Beratungsgespräch leider verschieben. Der neue Termin ist am Donnerstag, den 15., um 14 Uhr. Bitte bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit.",
      taskAr: "انقل الرسالة بالعربية إلى شخص لا يفهم الألمانية: الموعد الجديد، المستندات المطلوبة، مع الحفاظ على النبرة الرسمية.",
      modelAnswerAr: "«عزيزتي السيدة بن علي، نأسف لتأجيل موعد جلسة الاستشارة. الموعد الجديد الخميس 15 الساعة 14. يرجى إحضار السيرة الذاتية والشهادات.»",
      keyPointsAr: ["نقلت الاعتذار عن التأجيل", "ذكرت الموعد الجديد بدقة (الخميس 15، 14:00)", "ذكرت المستندات المطلوبة"],
    },
  ],
  interaction: [
    {
      id: "int-b1-11-1",
      scenarioAr: "نقاش مع زميل عن العمل عن بُعد (Homeoffice) — جزء التحدث من B1.",
      scenarioDe: "Diskussion über Homeoffice mit einem Kollegen.",
      strategyAr: "الاستراتيجية: إبداء الرأي المبرر، الموافقة/الاعتراض بلطف، وطلب رأي الآخر.",
      rounds: [
        {
          speakerDe: "Findest du, dass Homeoffice gut ist?",
          speakerAr: "هل تجد أن العمل عن بُعد جيد؟",
          options: [
            { de: "Meiner Meinung nach ist Homeoffice praktisch, weil man Zeit spart. Einerseits ist es flexibel, andererseits fehlt der Kontakt.",
              ar: "في رأيي العمل عن بُعد عملي لأنه يوفر الوقت. من ناحية مرن، ومن ناحية أخرى تفتقد التواصل.", best: true,
              replyDe: "Das stimmt. Aber wie findest du die Produktivität?", replyAr: "هذا صحيح. لكن كيف ترى الإنتاجية؟" },
            { de: "Homeoffice ist schlecht. Punkt.", ar: "العمل عن بُعد سيئ. نقطة.", best: false,
              replyDe: "Kannst du das bitte begründen? Eine Meinung braucht Argumente.", replyAr: "هل يمكنك تبرير ذلك من فضلك؟ الرأي يحتاج حججاً." },
          ],
        },
        {
          speakerDe: "Wie findest du die Produktivität im Homeoffice?",
          speakerAr: "كيف ترى الإنتاجية في العمل عن بُعد؟",
          options: [
            { de: "Ich denke, die Produktivität ist höher, weil man sich besser konzentrieren kann, obwohl die Trennung zwischen Arbeit und Freizeit schwerfällt.",
              ar: "أعتقد أن الإنتاجية أعلى لأن التركيز أفضل، رغم أن الفصل بين العمل والراحة صعب.", best: true,
              replyDe: "Interessant! Und was ist mit der Teamarbeit?", replyAr: "مثير للاهتمام! وماذا عن العمل الجماعي؟" },
            { de: "Ich weiß nicht und es ist egal.", ar: "لا أعرف ولا يهم.", best: false,
              replyDe: "Für eine Diskussion wäre eine eigene Meinung besser.", replyAr: "في النقاش الأفضل أن يكون لديك رأي خاص." },
          ],
        },
        {
          speakerDe: "Was ist mit der Teamarbeit im Homeoffice?",
          speakerAr: "ماذا عن العمل الجماعي في العمل عن بُعد؟",
          options: [
            { de: "Teamarbeit ist schwieriger, weil man sich nur online trifft. Trotzdem kann man mit Videokonferenzen viel erreichen. Was denkst du?",
              ar: "العمل الجماعي أصعب لأن اللقاءات عبر الإنترنت فقط. رغم ذلك يمكن تحقيق الكثير بالمؤتمرات المرئية. ما رأيك؟", best: true,
              replyDe: "Da bin ich ganz deiner Meinung. Danke für die Diskussion!", replyAr: "أوافقك الرأي تماماً. شكراً على النقاش!" },
            { de: "Teamarbeit funktioniert nie.", ar: "العمل الجماعي لا ينجح أبداً.", best: false,
              replyDe: "„Nie“ ist ein starkes Wort. Vielleicht in manchen Situationen?", replyAr: "«أبداً» كلمة قوية. ربما في بعض المواقف؟" },
          ],
        },
      ],
    },
  ],
};
