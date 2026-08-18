import type { Lesson } from "@/types/lesson";

/**
 * الدرس B1-11: المراجعة الشاملة B1 + التحضير لامتحان Goethe-B1
 * — خاتمة مستوى B1: دمج كل المهارات (استقبال + إنتاج + تفاعل + وساطة)
 * في مواقف امتحانية حقيقية، مع مراجعة تراكمية من A2 — إغلاق الوحدة b1-11 —
 */
export const lessonB111: Lesson = {
  id: "b1-11",
  unitId: "b1-11",
  level: "B1",
  order: 1,
  titleDe: "B1 kompakt — Prüfungsvorbereitung",
  titleAr: "B1 الشامل — التحضير للامتحان",
  duration: 45,
  summary:
    "المراجعة الختامية لمستوى B1: دمج الجمل الموصولة وGenitiv وPassiv وKonjunktiv II في مواقف حية، مع محاكاة أقسام Goethe-B1 الأربعة (قراءة، استماع، كتابة، تحدث) وتدريب على وساطة وتفاعل حقيقيين.",

  lernziele: [
    { id: "z1", de: "Ich kann alle B1-Strukturen sicher anwenden.", ar: "أن أطبق كل تراكيب B1 بثقة في مواقف متنوعة." },
    { id: "z2", de: "Ich kann einen Prüfungsteil „Lesen“ bearbeiten.", ar: "أن أُنجز جزء القراءة من امتحان B1." },
    { id: "z3", de: "Ich kann einen Prüfungsteil „Schreiben“ verfassen.", ar: "أن أكتب جزء الكتابة (رسالة/منتدى) وفق المطلوب." },
    { id: "z4", de: "Ich kann über vertraute Themen diskutieren und meine Meinung begründen.", ar: "أن أناقش مواضيع مألوفة وأبرر رأيي." },
    { id: "z5", de: "Ich kann Informationen zwischen Deutsch und Arabisch vermitteln (Mediation).", ar: "أن أنقل المعلومات بين الألمانية والعربية (وساطة)." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قبل امتحان B1: هل تستطيع قراءة إعلان سكن، الرد على بريد رسمي، والمشاركة في نقاش عن العمل — في جلسة واحدة؟ هذا الدرس يجمّع كل ما تعلمته ويختبرك فعلياً.",
    motivatingQuestionDe: "Bist du bereit für die B1-Prüfung?",
    contextAr:
      "امتحان Goethe-B1 يتكون من 4 أجزاء: القراءة (65 دقيقة)، الاستماع (~40)، الكتابة (60)، والتحدث (~15 مع تحضير). هذا الدرس يمرّ بك على كل جزء بنمط تدريبي تجريبي.",
    contextDe: "Lesen, Hören, Schreiben, Sprechen — vier Teile, eine Prüfung.",
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
        "امتحان B1 لا يسأل عن القاعدة بمعزل — يختبر قدرتك على استخدامها في مهمة. الجدول التالي يجمّع البنى الأساسية التي يجب أن تظهر في إنتاجك: الجمل الموصولة (der Mann, der...)، Genitiv (die Meinung des Experten)، المبني للمجهول (Das wird gemacht)، صيغة الشرط (Ich würde...)، والجمل الثانوية (weil, obwohl, nachdem, bevor, damit, um...zu).",
      whyAr:
        "لماذا؟ لأن المقيّم في Goethe-B1 يبحث عن «تنوع بنيوي» (strukturelle Vielfalt): نص بدون جمل موصولة أو ثانوية يبدو مستوًى A2 مهما كانت المفردات. الدمج هو ما يرفعك إلى B1.",
      table: {
        title: "البنى الأساسية + مثال امتحاني",
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
        "العربية تضع الصلة بـ«الذي/التي»، والألمانية بـ der/die/das حسب الجنس والحالة — والمهم أن الفعل في نهاية الجملة الثانوية الألمانية، بينما العربية تبقيه في موضعه.",
      eselsbruecke:
        "«الفعل في النهاية = جملة ثانوية» — كلما رأيت weil/obwohl/dass/der، توقع الفعل في آخر الجملة.",
      commonMistakes: [
        { wrong: "Der Mann, der hat mir geholfen", right: "Der Mann, der mir geholfen hat", whyAr: "في الجملة الموصولة ينقلب الفعل إلى النهاية ولا يبقى في المركز الثاني." },
      ],
    },
    {
      id: "t2",
      titleAr: "تكتيك أقسام الامتحان الأربعة",
      titleDe: "Prüfungstaktik für die vier Teile",
      explanationAr:
        "القراءة: اقرأ السؤال قبل النص وابحث عن الكلمات المفتاحية (60-70% من الإجابات تعتمد على مرادفات). الاستماع: استمع مرتين — الأولى للفكرة العامة والثانية للتفاصيل. الكتابة: خطط 3 دقائق ثم اكتب 120-150 كلمة ببنية واضحة (مقدمة، حجتان، خاتمة) مع روابط. التحدث: قدّم نفسك، صف صورة، وناقش موضوعاً — استخدم «Meiner Meinung nach» و«Einerseits...andererseits».",
      whyAr:
        "لماذا؟ لأن إدارة الوقت تفشل أكثر المتعلمين: من يقرأ النص كاملاً أولاً يضيع 10 دقائق. التكتيك الصحيح: السؤال أولاً، ثم المسح السريع.",
      table: {
        title: "الوقت الإرشادي لكل جزء",
        columns: ["الجزء", "الوقت", "الاستراتيجية"],
        rows: [
          { label: "Lesen", cells: ["65 دقيقة", "سؤال ← مسح ← إجابة"] },
          { label: "Hören", cells: ["~40 دقيقة", "مرة عامة + مرة تفاصيل"] },
          { label: "Schreiben", cells: ["60 دقيقة", "خطط 3 د · اكتب · راجع"] },
          { label: "Sprechen", cells: ["15+15 دقيقة", "تحدث بثقة حتى مع الأخطاء"] },
        ],
      },
      examples: [
        { de: "Zuerst lese ich die Fragen, dann den Text.", ar: "أولاً أقرأ الأسئلة ثم النص." },
        { de: "Meiner Meinung nach ist das eine gute Lösung.", ar: "في رأيي هذا حل جيد." },
      ],
      comparisonWithArabic:
        "امتحان العربية الرسمي قد يركّز على القواعد المعزولة، بينما Goethe-B1 يختبر المهارات في مهمات — الفرق: «ماذا تفعل باللغة» لا «ماذا تعرف عنها».",
      eselsbruecke:
        "«س-م-ا-ك»: سؤال ثم مسح ثم إجابة ثم كرر — القراءة الفعالة.",
      commonMistakes: [
        { wrong: "قراءة النص كاملاً قبل السؤال", right: "قراءة السؤال ثم مسح النص", whyAr: "توفير الوقت وتركيز الانتباه على المطلوب." },
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
      acceptedAnswers: ["Das neue Krankenhaus wird in unserer Stadt gebaut.", "Das Krankenhaus wird in unserer Stadt gebaut."],
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
      acceptedAnswers: ["Nachdem ich gegessen hatte, bin ich spazieren gegangen.", "Nachdem ich gegessen habe, bin ich spazieren gegangen."],
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
        right: "Nachdem ich gegessen habe, bin ich gegangen.",
        whyAr: "الجملة الرئيسية بعد الثانوية تبدأ بالفعل: bin ich gegangen.",
      },
    ],
    eselsbruecken: [
      "«الفعل في نهاية الثانوية، وبداية الرئيسية» — القاعدة الذهبية لترتيب الجمل.",
      "«حرفان = حركتان»: nachdem + Perfekt/Plusquamperfekt دائماً.",
      "«Meiner Meinung nach» تفتح أي نقاش B1 — احفظها كوحدة واحدة.",
    ],
    culturalNote: {
      title: "امتحان Goethe-B1",
      content: "Goethe-Zertifikat B1 يتكون من 4 أجزاء ويُقيَّم إجمالاً (ناجح/راسب). لا يوجد قسم «قواعد» مستقل — القواعد تُقيَّم داخل المهارات. الحد الأدنى للنجاح عادة 60% من إجمالي النقاط، ويشترط أحياناً نسبة دنيا في التحدث. هذا الدرس تدريب تجريبي — الامتحان الرسمي لدى Goethe-Institut.",
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
      explanation: "die Anmeldung = التسجيل (مهم لامتحانات Goethe).",
      errorType: "vocabulary",
    },
  ],

  flashcards: [
    { id: "fc-b1-11-1", de: "die Prüfung bestehen", ar: "ينجح في الامتحان", example: "Ich habe die Prüfung bestanden.", exampleAr: "نجحت في الامتحان.", level: "B1" },
    { id: "fc-b1-11-2", de: "die Anmeldung", ar: "التسجيل", example: "Die Anmeldung ist bis Freitag.", exampleAr: "التسجيل حتى الجمعة.", level: "B1" },
    { id: "fc-b1-11-3", de: "die Vorbereitung", ar: "التحضير", example: "Die Vorbereitung dauert zwei Wochen.", exampleAr: "التحضير يستغرق أسبوعين.", level: "B1" },
    { id: "fc-b1-11-4", de: "Meiner Meinung nach", ar: "في رأيي", example: "Meiner Meinung nach ist das eine gute Idee.", exampleAr: "في رأيي هذه فكرة جيدة.", level: "B1" },
    { id: "fc-b1-11-5", de: "Einerseits ... andererseits", ar: "من ناحية ... ومن ناحية أخرى", example: "Einerseits ist es teuer, andererseits gut.", exampleAr: "من ناحية مكلف، ومن ناحية أخرى جيد.", level: "B1" },
    { id: "fc-b1-11-6", de: "das Beratungsgespräch", ar: "جلسة الاستشارة", example: "Ich habe ein Beratungsgespräch beim Arbeitsamt.", exampleAr: "لدي جلسة استشارة في مكتب العمل.", level: "B1" },
    { id: "fc-b1-11-7", de: "der Prüfungsteil", ar: "جزء الامتحان", example: "Der Leseteil ist am längsten.", exampleAr: "جزء القراءة هو الأطول.", level: "B1" },
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
            { de: "Ich denke, die Produktivität ist höher, weil man sich besser konzentrieren kann. Obwohl die Trennung zwischen Arbeit und Freizeit schwerfällt.",
              ar: "أعتقد أن الإنتاجية أعلى لأن التركيز أفضل. رغم أن فصل العمل عن الراحة صعب.", best: true,
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
