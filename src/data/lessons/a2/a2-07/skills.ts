/**
 * a2-07 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a2-07.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a2-07",
    titleDe: "Lina informiert sich über ein Konto",
    titleAr: "لينا تستفسر عن حساب",
    textType: "erzaehlung",
    paragraphs: [
      "Lina wohnt seit Kurzem in einer neuen Stadt. Sie möchte ein Konto eröffnen, damit sie ihre Miete jeden Monat per Überweisung bezahlen kann. Auf der Internetseite einer Bank findet sie zwei Angebote. Die Bank, die Kontomodelle und alle Preise in dieser Geschichte sind erfunden. Lina schreibt drei Fragen auf: Gibt es eine Karte? Welche Gebühren gibt es? Wo ist ein Geldautomat?",
      "Am nächsten Tag vergleicht sie die Angebote auf einem Übungsblatt. Modell A ist ohne Karte. Modell B hat eine Bankkarte und kostet in diesem Beispiel drei Euro pro Monat. Bei einer weiteren Leistung nennt das Blatt eine mögliche Gebühr, aber keinen Betrag. Lina markiert die Zeile, damit sie später nach dem Betrag fragen kann. Sie weiß: Diese erfundenen Angebote sind keine aktuellen Informationen für ein echtes Konto.",
      "In der Filiale fragt Lina: „Gibt es hier einen Geldautomaten? Kann ich dort Geld abheben?“ Die Mitarbeiterin antwortet: „Ja, neben dem Eingang.“ Lina fragt auch, ob sie Geld überweisen kann. Die Mitarbeiterin bittet sie, die Übersicht zum Beispielkonto zu lesen. Dort stehen weitere Bedingungen. Lina notiert die Wörter Gebühr, Karte und Überweisung.",
      "Zu Hause liest Lina die Notizen. Sie möchte die Kontomodelle vergleichen und die Bedingungen verstehen. Dann sagt sie zu ihrem Bruder: „Es gibt zwei Angebote in dieser Geschichte. Modell A ist ohne Karte; Modell B kostet drei Euro im Monat. Ich entscheide mich später.“ Die genannten Preise gelten nur in dieser erfundenen Übung.",
    ],
    paragraphsAr: [
      "تعيش لينا منذ مدة قصيرة في مدينة جديدة. تريد فتح حساب كي تدفع إيجارها كل شهر عن طريق تحويل بنكي. تجد على موقع أحد البنوك عرضين. البنك ونماذج الحساب والأسعار في هذه القصة خيالية. تكتب ثلاثة أسئلة: هل توجد بطاقة؟ ما الرسوم؟ وأين يوجد صراف آلي؟",
      "في اليوم التالي تقارن العرضين في ورقة تدريب. النموذج A بلا بطاقة. النموذج B يتضمن في هذا المثال بطاقة مصرفية، ويكلف ثلاثة يورو شهرياً. وتذكر الورقة رسماً محتملاً لخدمة أخرى، من دون تحديد المبلغ. تضع لينا خطاً تحت السطر كي تسأل لاحقاً عن المبلغ. وهي تعرف أن هذه العروض الخيالية لا تمثل معلومات حالية عن حساب حقيقي.",
      "في الفرع تسأل لينا: «هل يوجد صراف آلي هنا؟ هل أستطيع سحب المال منه؟» تجيب الموظفة: «نعم، بجانب المدخل». وتسأل لينا أيضاً إن كان بإمكانها تحويل المال. تطلب الموظفة منها قراءة ملخص المعلومات الخاص بحساب المثال. هناك شروط أخرى. تدوّن لينا كلمات: الرسوم، والبطاقة، والتحويل.",
      "في البيت تعيد لينا قراءة ملاحظاتها. تريد مقارنة نماذج الحساب وفهم الشروط. ثم تقول لأخيها: «يوجد عرضان في هذه القصة. النموذج A بلا بطاقة، والنموذج B يكلف ثلاثة يورو شهرياً. سأقرر لاحقاً». الأسعار المذكورة جزء من التمرين الخيالي فقط.",
    ],
    glossary: [
      { de: "das Konto", ar: "الحساب المصرفي" },
      { de: "die Miete", ar: "الإيجار" },
      { de: "die Überweisung", ar: "التحويل المصرفي" },
      { de: "das Kontomodell", ar: "نموذج الحساب" },
      { de: "die Gebühr", ar: "الرسم / رسوم الخدمة" },
      { de: "vergleichen", ar: "يقارن" },
      { de: "die Bankkarte", ar: "البطاقة المصرفية" },
      { de: "die Filiale", ar: "الفرع" },
      { de: "der Geldautomat", ar: "الصراف الآلي" },
      { de: "Geld abheben", ar: "يسحب نقوداً" },
      { de: "die Übersicht", ar: "ملخص المعلومات / جدول المعلومات" },
      { de: "die Bedingungen", ar: "الشروط" },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "اقرأ القصة واختر السبب الأقرب لبحث لينا عن حساب:",
        questionDe: "Warum möchte Lina ein Konto eröffnen?",
        questionAr: "لماذا تريد لينا فتح حساب؟",
        options: [
          "Sie möchte ihre Miete regelmäßig per Überweisung bezahlen.",
          "Sie möchte bei der Bank als Mitarbeiterin arbeiten.",
          "Sie möchte jeden Tag Geld am Automaten wechseln.",
          "Sie möchte Bankkarten an andere Personen verkaufen.",
        ],
        correctIndex: 0,
        explanation:
          "في بداية القصة تريد لينا فتح حساب كي تدفع الإيجار كل شهر عن طريق التحويل؛ الخيارات الأخرى لا يذكرها النص.",
        errorType: "comprehension",
        paragraph: 1,
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "اختر المعلومة الصحيحة عن النموذج B في القصة:",
        questionDe: "Was gilt für Modell B in dieser erfundenen Geschichte?",
        questionAr: "ما الذي ينطبق على النموذج B في هذه القصة الخيالية؟",
        options: [
          "Es hat eine Bankkarte und kostet im Beispiel drei Euro pro Monat.",
          "Es ist ohne Karte und kostet im Beispiel drei Euro pro Jahr.",
          "Es hat eine Kreditkarte und ist in jeder Bank kostenlos.",
          "Es enthält zwei Karten, aber der Preis steht nicht im Text.",
        ],
        correctIndex: 0,
        explanation:
          "في الفقرة الثانية، النموذج B يتضمن بطاقة مصرفية ويكلف ثلاثة يورو شهرياً في المثال الخيالي فقط.",
        errorType: "comprehension",
        paragraph: 2,
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "لماذا تضع لينا خطاً تحت سطر الرسوم؟",
        questionDe: "Warum markiert Lina die Zeile mit der Gebühr?",
        questionAr: "لماذا تضع لينا علامة على السطر الذي يذكر الرسوم؟",
        options: [
          "Der genaue Betrag ist auf dem Blatt nicht angegeben.",
          "Die Mitarbeiterin hat ihr die Übersicht weggenommen.",
          "Das Konto ist schon geschlossen und nicht mehr verfügbar.",
          "Sie hat die Bankkarte im Geldautomaten vergessen.",
        ],
        correctIndex: 0,
        explanation:
          "تذكر الورقة رسماً محتملاً لخدمة أخرى من دون تحديد المبلغ؛ لذلك تضع لينا علامة على السطر كي تسأل لاحقاً عن المبلغ.",
        errorType: "comprehension",
        paragraph: 2,
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "اختر ما تقرره لينا في نهاية القصة:",
        questionDe: "Was entscheidet Lina am Ende?",
        questionAr: "ماذا تقرر لينا في النهاية؟",
        options: [
          "Sie vergleicht die Angaben und wählt erst später ein Modell.",
          "Sie eröffnet sofort beide Konten zusammen.",
          "Sie wählt Modell B, weil es überall kostenlos ist.",
          "Sie bittet ihren Bruder, das Konto für sie zu schließen.",
        ],
        correctIndex: 0,
        explanation:
          "تقول لينا إنها ستقرر لاحقاً بعد قراءة المعلومات؛ الأسعار تخص القصة الخيالية فقط.",
        errorType: "comprehension",
        paragraph: 4,
      },
    ],
    redemittel: [
      { de: "Ich möchte ein Konto eröffnen.", ar: "أريد فتح حساب." },
      { de: "Welche Gebühren gibt es?", ar: "ما الرسوم؟" },
      { de: "Wo ist der Geldautomat?", ar: "أين يوجد الصراف الآلي؟" },
      { de: "Ich möchte die Angebote vergleichen.", ar: "أريد مقارنة العروض." },
    ],
    discussionAr:
      "ما الأسئلة التي قد تطرحها قبل اختيار خدمة مالية؟ ناقشها بصيغة تدريبية عامة، ولا تُدخل أرقام حسابات أو بيانات شخصية حقيقية، ولا تتعامل مع أسعار القصة على أنها عروض فعلية.",
  };

export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "حوار تدريبي متخيّل عن نموذج حساب",
        lines: [
          {
            speaker: "Bankangestellte",
            de: "Guten Tag! Wie kann ich Ihnen helfen?",
            ar: "مرحباً! كيف أستطيع مساعدتك؟",
          },
          {
            speaker: "Sami",
            de: "Ich möchte ein Konto eröffnen.",
            ar: "أريد فتح حساب.",
          },
          {
            speaker: "Bankangestellte",
            de: "In diesem Übungsbeispiel gibt es zwei Kontomodelle: eines mit Bankkarte und eines ohne Karte.",
            ar: "في مثال التدريب هذا نموذجان للحساب: أحدهما ببطاقة مصرفية والآخر بلا بطاقة.",
          },
          {
            speaker: "Sami",
            de: "Wo finde ich die Gebühren?",
            ar: "أين أجد الرسوم؟",
          },
          {
            speaker: "Bankangestellte",
            de: "Die Gebühren stehen in der Übersicht.",
            ar: "الرسوم واردة في ملخص المعلومات.",
          },
          {
            speaker: "Sami",
            de: "Danke. Ich lese die Informationen erst in Ruhe.",
            ar: "شكراً. سأقرأ المعلومات أولاً على مهل.",
          },
        ],
      },
      {
        id: "l2",
        title: "طلب مساعدة عند الصراف الآلي",
        lines: [
          {
            speaker: "Mona",
            de: "Ich brauche Bargeld. Gibt es hier einen Geldautomaten?",
            ar: "أحتاج إلى نقود نقدية. هل يوجد صراف آلي هنا؟",
          },
          {
            speaker: "Karim",
            de: "Ja, es gibt einen Automaten neben dem Eingang.",
            ar: "نعم، يوجد صراف بجانب المدخل.",
          },
          {
            speaker: "Mona",
            de: "Kann ich dort mit meiner Karte Geld abheben?",
            ar: "هل أستطيع سحب المال من هناك ببطاقتي؟",
          },
          {
            speaker: "Karim",
            de: "Ich verstehe die Anzeige nicht. Kannst du mir kurz helfen?",
            ar: "لا أفهم ما يظهر على الشاشة. هل يمكنك مساعدتي قليلاً؟",
          },
          {
            speaker: "Mona",
            de: "Klar. Ich helfe dir.",
            ar: "طبعاً. سأساعدك.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار واختر الإجابة:",
        questionDe: "Was möchte Sami machen?",
        questionAr: "ماذا يريد سامي أن يفعل؟",
        options: [
          "ein Konto eröffnen",
          "ein Haus kaufen",
          "eine Rechnung bar bezahlen",
          "Geld am Automaten abheben",
        ],
        correctIndex: 0,
        explanation:
          "يقول سامي: Ich möchte ein Konto eröffnen؛ أي إنه يريد فتح حساب.",
        errorType: "comprehension",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى المعلومة المحددة:",
        questionDe: "Wo stehen die Gebühren?",
        questionAr: "أين توجد معلومات الرسوم؟",
        options: [
          "in der Übersicht",
          "auf seiner Bankkarte",
          "auf seinem Pass",
          "am Geldautomaten",
        ],
        correctIndex: 0,
        explanation:
          "تقول الموظفة إن الرسوم واردة في ملخص المعلومات: Die Gebühren stehen in der Übersicht.",
        errorType: "comprehension",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى حوار منى وكريم:",
        questionDe: "Wo ist der Geldautomat?",
        questionAr: "أين يوجد الصراف الآلي؟",
        options: [
          "neben dem Eingang",
          "im Bahnhof",
          "hinter dem Café",
          "im Büro von Karim",
        ],
        correctIndex: 0,
        explanation:
          "يقول كريم: neben dem Eingang، أي بجانب المدخل.",
        errorType: "comprehension",
      },
      {
        id: "q4",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع لما يطلب كريم المساعدة فيه:",
        questionDe: "Wobei braucht Karim Hilfe?",
        questionAr: "فيمَ يحتاج كريم إلى المساعدة؟",
        options: [
          "Er versteht die Anzeige am Automaten nicht.",
          "Er hat seine Bankkarte am Schalter verloren.",
          "Er möchte sein Konto ganz schließen.",
          "Er findet den Eingang zur Bank nicht.",
        ],
        correctIndex: 0,
        explanation:
          "يطلب كريم المساعدة لأنه لا يفهم ما يظهر على شاشة الصراف.",
        errorType: "comprehension",
      },
    ],
  };

export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "أصوات مفردات الحساب والدفع",
    items: [
      {
        de: "das Konto",
        ar: "الحساب المصرفي",
        note: "DWDS يورد [ˈkɔnto]: النبر على المقطع الأول، وo الأولى قصيرة مفتوحة [ɔ]. استمع إلى المثال ولا تحوّل النطق إلى كتابة عربية حرفية.",
      },
      {
        de: "das Geld",
        ar: "المال",
        note: "Duden يورد [ɡɛlt]: g صوت وقفي [g] وليس غ، وe قصيرة [ɛ]، أما d في آخر الكلمة فيُنطق [t] في هذا المثال.",
      },
      {
        de: "überweisen",
        ar: "يحوّل مالاً",
        note: "قسّمها حسب Duden: über|wei|sen، والنبر على wei. في ü دوّر الشفتين مع إبقاء اللسان قريباً من [i]؛ وei هو [aɪ̯]، وw الألمانية قريب من [v].",
      },
      {
        de: "der Geldautomat",
        ar: "الصراف الآلي",
        note: "ابدأ بـ Geld [ɡɛlt] ثم Automat [aʊ̯toˈmaːt]. انتبه إلى g المجهورة وإلى au [aʊ̯]؛ لا تستخدم غِلت-آوتومات كنقل صوتي عربي.",
      },
      {
        de: "die Kreditkarte",
        ar: "بطاقة الائتمان",
        note: "Duden يورد [kreˈdiːtkartə]: الحرف d المكتوب في Kredit يوافق [t] في هذا الموضع، وie تمثل [iː]. استمع إلى الكلمة كاملة.",
      },
      {
        de: "abheben",
        ar: "يسحب نقوداً من الحساب",
        note: "قسمة Duden: ab|he|ben؛ لا تُسقط h في heben. والفعل ينفصل في الجملة الرئيسة: Ich hebe Geld ab. استمع إلى التسجيل الصوتي بدلاً من التقريب بحروف عربية.",
      },
    ],
    tip:
      "استخدم الصوت الألماني المرفق وكرر المقاطع ببطء؛ IPA والملاحظات الصوتية أدق من تهجئة عربية تقريبية. الظلّ اللفظي هنا تدريب ذاتي فقط: لا يسجل صوت المتعلم ولا يقيس جودة النطق.",
    shadowing: [
      {
        de: "Ich möchte ein Konto eröffnen.",
        ar: "أريد فتح حساب.",
        tip: "استمع إلى الفرق بين o في Konto وö في eröffnen، ثم كرر الجملة كاملة.",
      },
      {
        de: "Es gibt einen Geldautomaten.",
        ar: "يوجد صراف آلي.",
        tip: "لاحظ g المجهورة في Geld وصيغة Geldautomaten في الجملة.",
      },
      {
        de: "Ich helfe dir.",
        ar: "أساعدك.",
        tip: "حافظ على h في helfe، ثم قارن dir بـ dich في مثال آخر.",
      },
      {
        de: "Das gehört mir.",
        ar: "هذا يخصني.",
        tip: "انتبه إلى ö في gehört، ثم استمع إلى الصوت قبل التكرار.",
      },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب بالألمانية جملةً تفيد وجود بنك قريب:",
      prompt: "«يوجد بنك قريب» — استخدم es gibt.",
      acceptedAnswers: [
        "Es gibt eine Bank in der Nähe.",
        "In der Nähe gibt es eine Bank.",
      ],
      caseSensitive: true,
      sampleAnswer: "Es gibt eine Bank in der Nähe.",
      explanation:
        "es gibt يأخذ Akkusativ؛ وBank مؤنث، لذلك نقول eine Bank. ويجوز تقديم in der Nähe مع بقاء الفعل في المرتبة الثانية: In der Nähe gibt es eine Bank.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الضمير الألمانية المناسبة لكل فعل:",
      template:
        "Ich sehe ___. (du) Kannst du ___ helfen? (ich) Das Buch gehört ___. (er)",
      blanks: [
        { correct: "dich", options: ["dich", "dir", "mich"] },
        { correct: "mir", options: ["mir", "mich", "dir"] },
        { correct: "ihm", options: ["ihm", "ihn", "ihr"] },
      ],
      explanation:
        "sehen يأتي هنا مع dich؛ helfen مع mir؛ وgehören مع ihm. الفعل هو الذي يحدد صيغة المتمم الألماني في هذه الأمثلة.",
      errorType: "pronoun",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة بالألمانية:",
      audioText: "Kannst du mir bitte helfen?",
      caseSensitive: true,
      explanation:
        "تُكتب الجملة كما سمعتها. في هذا المثال يأتي mir مع helfen؛ استمع إلى الصيغة ولا تستبدلها بترجمة عربية حرفية.",
      errorType: "spelling",
    },
  ];
