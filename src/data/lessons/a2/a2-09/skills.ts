/**
 * a2-09 — المهارات: قراءة واستماع ونطق وكتابة (الجزء «skills»)
 * فُصل من a2-09.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const reading: NonNullable<Lesson["reading"]> = {
    id: "read-a2-09",
    titleDe: "Ein Geburtstag im Innenhof",
    titleAr: "عيد ميلاد في الساحة الداخلية للمبنى",
    textType: "erzaehlung",
    paragraphs: [
      "Am Samstag feiert Frau Yilmaz ihren sechzigsten Geburtstag. Sie lädt die Nachbarn in den Innenhof ein. Auf der Einladung stehen die Uhrzeit und der Treffpunkt. Ihr Bruder hilft ihr beim Dekorieren, und die Kinder stellen die Stühle an die Wand. Um fünf Uhr kommen die ersten Gäste.",
      "Das selbst gemachte Geschenk von den Kindern gefällt Frau Yilmaz besonders gut: ein großes Fotoalbum. Sie gratuliert ihrer Nachbarin zum neuen Job und bedankt sich bei allen für die Blumen. Ein Gast bringt einen Kuchen, der nach Schokolade riecht.",
      "Später läuft Musik, und alle tanzen. Der Abend ist warm, und die Stimmung ist fröhlich. Bevor die Gäste nach Hause gehen, helfen sie beim Aufräumen. Frau Yilmaz sagt, dass sie sich über diese Feier sehr freut.",
      "Am Sonntag treffen sich einige Gäste noch einmal zum Kaffee. Sie zeigen einander die Fotos vom Vorabend und erzählen kleine Geschichten. Frau Yilmaz erzählt, dass sie früher große Feiern anstrengend fand. Diesmal musste sie nicht alles allein vorbereiten, weil ihre Nachbarn geholfen haben. Sie möchte sich bei den Kindern besonders bedanken und plant schon einen gemeinsamen Ausflug.",
    ],
    paragraphsAr: [
      "تحتفل السيدة يلماز يوم السبت بعيد ميلادها الستين. تدعو الجيران إلى الساحة الداخلية للمبنى. وتظهر ساعة اللقاء ومكانه في الدعوة. يساعدها أخوها في التزيين، ويضع الأطفال الكراسي بمحاذاة الجدار. ويصل الضيوف الأوائل في الخامسة.",
      "أعجب السيدة يلماز خصوصاً ألبوم الصور الكبير الذي صنعه الأطفال وأهدوه لها. وتهنئ جارتها بوظيفتها الجديدة، وتشكر الجميع على الزهور. ويحضر أحد الضيوف كعكة تفوح منها رائحة الشوكولاتة.",
      "تُعزف الموسيقى لاحقاً ويرقص الجميع. الأمسية دافئة والأجواء مبهجة. وقبل أن يعود الضيوف إلى بيوتهم، يساعدون في ترتيب المكان. وتقول السيدة يلماز إنها سعيدة جداً بهذه المناسبة.",
      "يلتقي بعض الضيوف مجدداً لشرب القهوة يوم الأحد. ويتبادلون صور الأمسية السابقة ويروون قصصاً صغيرة. وتقول السيدة يلماز إنها كانت ترى الاحتفالات الكبيرة متعبة في السابق. لكنها لم تضطر هذه المرة إلى إعداد كل شيء وحدها، لأن جيرانها ساعدوها. وتريد أن تشكر الأطفال خصوصاً، وتخطط بالفعل لنزهة مشتركة.",
    ],
    glossary: [
      { de: "der Innenhof", ar: "الساحة الداخلية للمبنى" },
      { de: "die Einladung", ar: "الدعوة" },
      { de: "der Treffpunkt", ar: "مكان اللقاء" },
      { de: "die Nachbarn", ar: "الجيران" },
      { de: "das Fotoalbum", ar: "ألبوم الصور" },
      {
        de: "gratulieren + Dativ",
        ar: "يهنئ شخصاً",
        noteAr: "الشخص الذي نهنئه يأتي في Dativ في هذا التركيب.",
      },
      {
        de: "sich bei jemandem bedanken",
        ar: "يشكر شخصاً",
        noteAr: "الشخص بعد bei في Dativ؛ ويمكن إضافة für مع الشيء الذي نشكره عليه.",
      },
      { de: "das Aufräumen", ar: "ترتيب المكان بعد المناسبة" },
      { de: "der Vorabend", ar: "المساء السابق" },
      { de: "die Nachbarin", ar: "الجارة" },
    ],
    questions: [
      {
        id: "rq1",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الأول:",
        questionDe: "Wohin lädt Frau Yilmaz die Nachbarn ein?",
        questionAr: "إلى أين تدعو السيدة يلماز الجيران؟",
        options: ["In den Innenhof.", "In ein Café.", "In ihr Büro.", "In eine Turnhalle."],
        correctIndex: 0,
        explanation: "تذكر الفقرة الأولى أن الدعوة إلى الساحة الداخلية للمبنى.",
        errorType: "comprehension",
        paragraph: 1,
        optionExplanations: [
          undefined,
          "لم تُذكر الدعوة إلى مقهى «In ein Café»؛ المكان الساحة الداخلية.",
          "المكتب «In ihr Büro» ليس مكان الاحتفال في الفقرة.",
          "لم تُذكر صالة رياضية «In eine Turnhalle». ",
        ],
      },
      {
        id: "rq2",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الثاني:",
        questionDe: "Was gefiel Frau Yilmaz besonders gut?",
        questionAr: "ما الهدية التي أعجبت السيدة يلماز خصوصاً؟",
        options: ["Ein großes Fotoalbum.", "Ein Blumenstrauß.", "Ein Kuchen mit Schokolade.", "Ein neues Kleid."],
        correctIndex: 0,
        explanation:
          "أعجبها ألبوم الصور الذي صنعه الأطفال؛ الزهور والكعكة مذكورتان أيضاً لكنهما ليستا الهدية المقصودة.",
        errorType: "comprehension",
        paragraph: 2,
        optionExplanations: [
          undefined,
          "الزهور «Ein Blumenstrauß» مذكورة لكنها ليست ما أعجبها خصوصاً.",
          "الكعكة «Ein Kuchen mit Schokolade» قُدِّمت في الاحتفال، لا الهدية التي أعجبتها.",
          "لم يُذكر فستانٌ جديد «Ein neues Kleid» في النص. ",
        ],
      },
      {
        id: "rq3",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الثالث:",
        questionDe: "Was machen die Gäste, bevor sie nach Hause gehen?",
        questionAr: "ماذا يفعل الضيوف قبل عودتهم إلى بيوتهم؟",
        options: [
          "Sie helfen beim Aufräumen.",
          "Sie beginnen einen Ausflug.",
          "Sie holen noch einen Kuchen.",
          "Sie gehen früher am Nachmittag nach Hause.",
        ],
        correctIndex: 0,
        explanation: "تقول الفقرة إن الضيوف يساعدون في ترتيب المكان قبل مغادرتهم.",
        errorType: "comprehension",
        paragraph: 3,
        optionExplanations: [
          undefined,
          "لم تبدأ رحلة «Sie beginnen einen Ausflug» بعد الاحتفال.",
          "لم يُذكر إحضار كعكة إضافية «Sie holen noch einen Kuchen».",
          "لم يُذكر انصرافٌ مبكر «früher am Nachmittag nach Hause». ",
        ],
      },
      {
        id: "rq4",
        type: "multiple-choice",
        instructionAr: "أجب عن سؤال الفهم بعد قراءة المقطع الأخير:",
        questionDe: "Warum musste Frau Yilmaz diesmal nicht alles allein vorbereiten?",
        questionAr: "لماذا لم تضطر السيدة يلماز هذه المرة إلى إعداد كل شيء وحدها؟",
        options: [
          "Ihre Nachbarn haben ihr geholfen.",
          "Die Feier fand nicht statt.",
          "Ihr Bruder hat die Feier abgesagt.",
          "Sie hat alles allein vorbereitet.",
        ],
        correctIndex: 0,
        explanation: "يربط النص بين عدم الإعداد وحدها ومساعدة الجيران لها.",
        errorType: "comprehension",
        paragraph: 4,
        optionExplanations: [
          undefined,
          "الاحتفال أُقيم فعلاً «Die Feier fand nicht statt» نفيٌ يناقض النص؛ والسبب مساعدة الجيران.",
          "لم يُذكر أخٌ ولا إلغاء «Ihr Bruder hat die Feier abgesagt».",
          "عكس السؤال نفسه: لم تُعدّ كل شيء وحدها «alles allein vorbereitet» هذه المرة. ",
        ],
      },
    ],
    redemittel: [
      { de: "Ich lade dich herzlich ein.", ar: "أدعوك بكل سرور." },
      { de: "Herzlichen Glückwunsch zum Geburtstag!", ar: "أطيب التهاني بعيد ميلادك!" },
      { de: "Das Geschenk gefällt mir sehr.", ar: "تعجبني الهدية كثيراً." },
      { de: "Ich bedanke mich bei euch für die Blumen.", ar: "أشكركم على الزهور." },
    ],
    discussionAr:
      "صِف مناسبةً حضرتها أو نظّمتها، أو استخدم تفاصيل خيالية. اذكر من دُعي وما الذي أعجبك، واستعمل فعلاً واحداً من أمثلة Dativ مثل gefallen أو gratulieren. يمكنك كتابة الإجابة أو قولها للتدرب؛ النشاط مفتوح ولا يُسجَّل دليلاً على إتقان التحدث.",
  };

export const listening: NonNullable<Lesson["listening"]> = {
    items: [
      {
        id: "l1",
        title: "دعوة عيد ميلاد",
        lines: [
          { speaker: "Mona", de: "Sami, ich habe am Samstag Geburtstag!", ar: "سامي، عيد ميلادي يوم السبت!" },
          { speaker: "Sami", de: "Herzlichen Glückwunsch! Was hast du geplant?", ar: "أطيب التهاني! ماذا خططتِ؟" },
          { speaker: "Mona", de: "Ich mache eine Party. Ich lade dich ein!", ar: "سأقيم حفلة. أدعوك!" },
          { speaker: "Sami", de: "Gern! Wann beginnt die Feier?", ar: "بكل سرور! متى تبدأ المناسبة؟" },
          { speaker: "Mona", de: "Die Feier beginnt um sieben Uhr bei mir zu Hause.", ar: "تبدأ المناسبة في السابعة في منزلي." },
          { speaker: "Sami", de: "Super! Ich bringe ein Geschenk mit.", ar: "رائع! سأحضر هدية." },
          { speaker: "Mona", de: "Danke dir! Du bist ein guter Freund.", ar: "شكراً لك! أنت صديق جيد." },
        ],
      },
      {
        id: "l2",
        title: "حديث قصير في المناسبة",
        lines: [
          { speaker: "Anna", de: "Das Geschenk gefällt mir sehr! Danke.", ar: "تعجبني الهدية كثيراً! شكراً." },
          { speaker: "Karim", de: "Gern geschehen! Und die Torte?", ar: "على الرحب والسعة! وماذا عن التورتة؟" },
          { speaker: "Anna", de: "Die Torte ist lecker! Wer hat sie gebacken?", ar: "التورتة لذيذة! من خبزها؟" },
          { speaker: "Karim", de: "Meine Mutter hat sie gebacken. Ich helfe ihr in der Küche.", ar: "خبزتها أمي. أساعدها في المطبخ." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الأول واختر الإجابة:",
        questionDe: "An welchem Tag hat Mona Geburtstag?",
        questionAr: "في أي يوم عيد ميلاد منى؟",
        options: ["am Samstag", "am Sonntag", "am Freitag", "am Montag"],
        correctIndex: 0,
        explanation: "تقول Mona في بداية الحوار إن عيد ميلادها يوم السبت.",
        errorType: "comprehension",
        optionExplanations: [
          undefined,
          "قالت منى «am Samstag» لا «am Sonntag».",
          "لم يُذكر الجمعة «am Freitag» موعداً لميلادها.",
          "الاثنين «am Montag» ليس في الحوار. ",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الأول واختر الإجابة:",
        questionDe: "Um wie viel Uhr beginnt die Feier?",
        questionAr: "في أي ساعة تبدأ المناسبة؟",
        options: ["um sieben Uhr", "um acht Uhr", "um sechs Uhr", "um neun Uhr"],
        correctIndex: 0,
        explanation: "تذكر Mona أن المناسبة تبدأ عند الساعة السابعة في منزلها.",
        errorType: "comprehension",
        optionExplanations: [
          undefined,
          "الثامنة «um acht Uhr» غير المذكورة؛ البدء «um sieben Uhr».",
          "ليست السادسة «um sechs Uhr».",
          "ليست التاسعة «um neun Uhr». ",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "استمع إلى الحوار الثاني واختر الإجابة:",
        questionDe: "Wer hat die Torte gebacken?",
        questionAr: "من خبز التورتة؟",
        options: ["Karims Mutter", "Anna", "Karim", "Monas Mutter"],
        correctIndex: 0,
        explanation: "يقول Karim إن أمه هي التي خبزت التورتة، لا Anna ولا هو.",
        errorType: "comprehension",
        optionExplanations: [
          undefined,
          "لم تخبز آنا التورتة «die Torte backen» بحسب الحوار.",
          "كريم نقل الخبر عن أمه «Meine Mutter hat die Torte gebacken»، لا أنه خبزها بنفسه.",
          "أم منى «Monas Mutter» غير مذكورة في هذا السياق. ",
        ],
      },
    ],
  };

export const pronunciation: NonNullable<Lesson["pronunciation"]> = {
    id: "p1",
    title: "النبر وأصوات مختارة في مفردات المناسبة",
    items: [
      {
        de: "das Geschenk",
        ar: "الهدية",
        note: "DWDS: [ɡəˈʃɛŋk]؛ النبر على المقطع الثاني، وsch يمثّل /ʃ/.",
      },
      {
        de: "feiern",
        ar: "يحتفل",
        note: "Wiktionary (IPA): [ˈfaɪ̯ɐn]؛ النبر على المقطع الأول، وei ثنائي الصوت /aɪ̯/.",
      },
      {
        de: "die Torte",
        ar: "التورتة",
        note: "Wiktionary (IPA): [ˈtɔʁtə]؛ النبر على Tor، والصائت o قصير مفتوح نسبياً، والنهاية -e ضعيفة.",
      },
      {
        de: "gratulieren",
        ar: "يهنئ",
        note: "Wiktionary (IPA): [ɡʁatuˈliːʁən]؛ النبر على المقطع lie كما يوافق تقطيع Duden؛ يختلف تحقيق r إقليمياً.",
      },
      {
        de: "die Einladung",
        ar: "الدعوة",
        note: "Wiktionary (IPA): [ˈaɪ̯nˌlaːdʊŋ]؛ النبر الرئيس على Ein- والثانوي على الجزء الثاني، وei يمثّل /aɪ̯/.",
      },
      {
        de: "der Glückwunsch",
        ar: "التهنئة",
        note: "Wiktionary (IPA): [ˈɡlʏkˌvʊnʃ]؛ انتبه إلى ü القصير /ʏ/ وإلى w=[v] وsch=[ʃ].",
      },
    ],
    tip:
      "استخدم زر الاستماع لتوليد الصوت عبر محرك الكلام في المتصفح ثم قلّد النبر؛ قد يختلف الصوت باختلاف المتصفح والجهاز. لا تمثل الكتابة العربية مقابلاً دقيقاً للأصوات الألمانية؛ ورموز IPA تقريبية لنطق معياري فوق إقليمي. تقييم النطق هنا آلي عند توفر التعرف الصوتي، وقد يتأثر بدعم المتصفح وجودة الميكروفون؛ لا يعد حكماً بشرياً ولا يثبت وحده الإتقان.",
    shadowing: [
      {
        de: "Herzlichen Glückwunsch zum Geburtstag!",
        ar: "أطيب التهاني بعيد ميلادك!",
        tip: "قسّم العبارة إلى وحدات قصيرة؛ في Herzlichen يُنطق z صوتاً مركباً قريباً من /ts/.",
      },
      {
        de: "Ich lade dich herzlich ein.",
        ar: "أدعوك بكل سرور.",
        tip: "حافظ على إيقاع الجملة؛ ein في آخر الجملة الرئيسية جزء منفصل من الفعل einladen.",
      },
      {
        de: "Das Geschenk gefällt mir.",
        ar: "تعجبني الهدية.",
        tip: "اسمع النبر في gefällt، وانتبه إلى ä المفتوحة /ɛ/؛ لا تعتمد على تهجئة عربية تقريبية.",
      },
      {
        de: "Ich helfe dir gern.",
        ar: "أساعدك بسرور.",
        tip: "انطق e في المقطع الأول من helfe /ɛ/ قصيرةً واضحة، وخفّف النهاية -e إلى /ə/؛ استمع إلى الإيقاع ثم كرر العبارة كاملة.",
      },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة دعوة قصيرة بالألمانية تتضمن اليوم والساعة والمكان:",
      prompt: "اكتب: «أدعوك إلى حفلة عيد ميلادي يوم السبت الساعة السادسة مساءً في منزلي.»",
      acceptedAnswers: [
        "Ich lade dich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich herzlich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
        "Ich lade dich am Samstag um 18 Uhr zu meiner Geburtstagsfeier bei mir zu Hause ein.",
        "Am Samstag um 18 Uhr lade ich dich zu meiner Geburtstagsfeier bei mir zu Hause ein.",
      ],
      sampleAnswer:
        "Ich lade dich herzlich zu meiner Geburtstagsfeier am Samstag um 18 Uhr bei mir zu Hause ein.",
      explanation:
        "في هذا المثال يأتي الشخص المدعو بعد einladen في Akkusativ (dich)، ويأتي المفعول بعد zu في Dativ (zu meiner Geburtstagsfeier). وفي الجملة الرئيسية ينفصل ein ويقع في آخرها.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بضمير Dativ المناسب لكل فعل:",
      template: "Ich helfe ___ (هي). Das Geschenk gefällt ___. (أنا) Ich gratuliere ___ zum Geburtstag. (أنتَ)",
      blanks: [
        { correct: "ihr", options: ["ihr", "sie", "ihm"] },
        { correct: "mir", options: ["mir", "mich", "dir"] },
        { correct: "dir", options: ["dir", "dich", "mir"] },
      ],
      explanation:
        "تأخذ الأفعال في الأمثلة متمماً في Dativ: helfen ihr، gefallen mir، gratulieren dir.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع ثم اكتب الجملة كما تسمعها:",
      audioText: "Das Geschenk gefällt mir sehr.",
      explanation:
        "الهدية تعجبني كثيراً؛ gefallen يتطلب هنا ضميراً في Dativ: mir. المهمة إملاء مضبوط وليست تقويماً للنطق.",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "transformation",
      instructionAr: "اكتب رداً قصيراً يقبل الدعوة بأدب:",
      prompt: "اكتب: «شكراً على الدعوة، سأحضر بكل سرور.» بالألمانية.",
      acceptedAnswers: [
        "Danke für die Einladung. Ich komme gern.",
        "Vielen Dank für die Einladung. Ich komme gern.",
        "Danke für die Einladung. Ich komme gerne.",
        "Vielen Dank für die Einladung. Ich komme gerne.",
      ],
      sampleAnswer: "Danke für die Einladung. Ich komme gern.",
      explanation:
        "الرد يشكر على الدعوة باستعمال für + Akkusativ، ثم يقبلها بعبارة Ich komme gern. هذه إجابة كتابية مضبوطة.",
      errorType: "grammar",
    },
  ];
