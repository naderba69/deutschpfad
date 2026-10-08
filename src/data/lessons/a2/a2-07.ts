import type { Lesson } from "@/types/lesson";

/**
 * A2-07: Bank und Geld — „es gibt“ + Akkusativ, Personalpronomen und Bankwortschatz.
 * The banking examples are fictional language-learning scenarios, not financial guidance.
 */
export const lessonA207: Lesson = {
  id: "a2-07",
  unitId: "a2-07",
  level: "A2",
  order: 1,
  titleDe: "Bank und Geld",
  titleAr: "البنك والمال",
  summary:
    "مفردات الحساب والبطاقة والدفع، استعمال es gibt مع Akkusativ، واختيار الضمير الألماني المناسب بعد أفعال شائعة.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann „es gibt“ in einfachen bejahenden und verneinenden Aussagen sowie in Fragen verwenden und häufige Zeitformen wiedererkennen.",
      ar: "أستخدم es gibt في الإثبات والنفي والسؤال البسيط، وأتعرّف إلى صيغته الشائعة في الماضي وأداة الاسم المناسبة.",
      evidence: {
        exerciseIds: ["e1", "e2", "e7", "e13", "e14", "m1", "m3", "w1"],
        taskIds: [
          "practice:a2-07:e1",
          "flow-practice:a2-07:e1",
          "practice:a2-07:e2",
          "flow-practice:a2-07:e2",
          "practice:a2-07:e7",
          "practice:a2-07:e13",
          "practice:a2-07:e14",
          "mini-test:a2-07:m1",
          "mini-test:a2-07:m3",
          "writing:a2-07:w1",
        ],
        labelAr:
          "أجب إجابة صحيحة عن e1 وe2 وe7 وe13 وe14 وm1 وm3، ثم أنجز w1؛ تختبر المهام الإثبات والنفي والسؤال وأداة الاسم وصيغة الماضي المحددة، لا مجرد فتحها.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann häufige Personalpronomen mit passenden Verben verwenden.",
      ar: "أختار صيغة الضمير الألماني المناسبة في تراكيب مثل sehen وhelfen وgehören.",
      evidence: {
        exerciseIds: ["e3", "e5", "e6", "e9", "m2", "m4", "m5", "w2", "w3"],
        taskIds: [
          "practice:a2-07:e3",
          "flow-practice:a2-07:e3",
          "practice:a2-07:e5",
          "practice:a2-07:e6",
          "practice:a2-07:e9",
          "mini-test:a2-07:m2",
          "mini-test:a2-07:m4",
          "mini-test:a2-07:m5",
          "writing:a2-07:w2",
          "writing:a2-07:w3",
        ],
        labelAr:
          "أنجز مهام المطابقة والتصحيح والاختيار والإملاء e3 وe5 وe6 وe9 وm2 وm4 وm5 وw2 وw3 إجابةً صحيحة؛ لا تُعد الترجمة وحدها دليلاً على إتقان صيغ الحالات.",
        completion: "all-correct",
      },
    },
    {
      id: "z-bank",
      de: "Ich kann zentrale Ausdrücke für Barzahlung, Überweisung und Bargeldabhebung verstehen und einfache Formen verwenden.",
      ar: "أميّز معنى bar zahlen وüberweisen، وأختار صيغة abheben المناسبة وأكتب جملة قصيرة فيها تحويل.",
      evidence: {
        exerciseIds: ["e8", "e10", "e11", "e12"],
        taskIds: [
          "practice:a2-07:e8",
          "practice:a2-07:e10",
          "practice:a2-07:e11",
          "practice:a2-07:e12",
        ],
        labelAr:
          "أجب عن e8 وe11، واكتب جملة التحويل في e10، واختر تصريف abheben في e12؛ تُحتسب الإجابات المنفذة فقط.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann wichtige Einzelheiten aus kurzen Gesprächen über Konten und Geldautomaten heraushören.",
      ar: "أستخرج معلومات محددة من الحوارين القصيرين قبل إظهار نصيهما.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: [
          "listening:l1:q1",
          "listening:l1:q2",
          "listening:l2:q3",
          "listening:l2:q4",
        ],
        labelAr:
          "أجب عن أسئلة الاستماع q1–q4 قبل كشف التفريغ. فتح الحوار أو الإجابة بعد ظهور النص لا يثبت فهم المسموع.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann wichtige Informationen aus einer kurzen Geschichte über ein Konto entnehmen.",
      ar: "أستخرج الغرض والتفاصيل من قصة لينا وأجيب عن أسئلة القراءة الأربعة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-07:rq1",
          "reading:read-a2-07:rq2",
          "reading:read-a2-07:rq3",
          "reading:read-a2-07:rq4",
        ],
        labelAr:
          "اقرأ القصة ثم أجب عن rq1–rq4؛ إظهار النص أو المفردات وحده لا يُسجّل دليلاً على الفهم.",
        completion: "all-correct",
      },
    },
    {
      id: "z-writing",
      de: "Ich kann kurze Sätze über ein Konto und Personen schriftlich ergänzen oder formulieren.",
      ar: "أكتب جملة وجود، وأكمل ضمائر في سياق، وأدوّن جملة مسموعة في w1–w3.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3"],
        taskIds: [
          "writing:a2-07:w1",
          "writing:a2-07:w2",
          "writing:a2-07:w3",
        ],
        labelAr:
          "أنجز مهام الكتابة الثلاث w1–w3 إجابةً صحيحة؛ لا تُحتسب مشاهدة المطلوب أو تشغيل الصوت وحدهما.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "كيف تقول بالألمانية إن قربك فرعاً مصرفياً أو جهاز صراف؟ لاحظ أداة الاسم في Es gibt einen Geldautomaten، ثم قارنها بصيغة السؤال Gibt es einen Geldautomaten?",
    motivatingQuestionDe: "Gibt es hier einen Geldautomaten?",
    contextAr:
      "نستخدم قصة وحوارين تعليميين متخيّلين للتدرّب على كلمات الحساب والبطاقة والسحب والتحويل. أسماء العروض والأسعار فيها أمثلة مختلقة وليست معلومات عن شروط بنك حقيقي.",
    contextDe: "Ich möchte ein Konto eröffnen und die Informationen verstehen.",
    connectionToPreviousAr:
      "هذه ليست أول مرة ترى فيها Dativ: ظهرت تراكيب مثل gefallen وpassen في A1-04 وA1-08، وhelfen في A1-06. نراجع الآن صيغ الضمائر ضمن أمثلة كاملة، ونميّز حالة الاسم الألمانية من الترجمة العربية؛ فلا نساوي Dativ مباشرةً بالجر العربي.",
    activateVocabulary: [
      { de: "das Konto", ar: "الحساب المصرفي" },
      { de: "die Bankkarte", ar: "البطاقة المصرفية" },
      { de: "Geld abheben", ar: "يسحب نقوداً" },
      { de: "Geld überweisen", ar: "يحوّل المال إلى حساب" },
      { de: "bar bezahlen", ar: "يدفع نقداً" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة مستوى A1 من الدرس a1-07: اختر أداة الاسم المناسبة بعد الفعل kaufen:",
      questionDe: "Ich kaufe ___ Kaffee.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation:
        "Kaffee مذكر هنا، وkaufen يأخذ مفعولاً في Akkusativ: einen Kaffee. لا تصلح ein أو eine لمطابقة الجنس، وder صيغة Nominativ.",
      errorType: "case",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة مفردات مستوى A1 من الدرس a1-07: اختر المعنى الصحيح:",
      questionDe: "das Geld",
      options: ["المال", "الذهب", "البطاقة", "الحساب"],
      correctIndex: 0,
      explanation:
        "das Geld تعني المال. الذهب هو Gold، والبطاقة Karte، والحساب Konto.",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة مستوى A1 من الدرس a1-07: أكمل جمع الاسم مع أداة التعريف، لا عبارة مبلغ مالي:",
      template: "der Euro → die ___",
      blanks: [{ correct: "Euros", options: ["Euros", "Euro", "Euroen"] }],
      explanation:
        "في جمع الاسم مع أداة التعريف يورد Duden الصيغة die Euros. لكن عند ذكر مبلغ مالي يقال عادةً 10 Euro من دون s؛ فالاختيار يتبع السياق.",
      errorType: "plural",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "تركيب es gibt مع Akkusativ",
      titleDe: "„Es gibt“ + Akkusativ",
      explanationAr: `نستعمل es gibt لذكر وجود شخص أو شيء أو عدمه: Es gibt eine Bank in der Nähe. في هذا التركيب يأتي الاسم أو الضمير بعده في Akkusativ. يظهر الفرق بوضوح مع الاسم المذكر المفرد: der Park يصبح einen Park، وkein Park يصبح keinen Park. أما المؤنث والمحايد والجمع فقد تتطابق بعض صور المقال فيه مع Nominativ؛ فـeine Bank وein Konto لا يبدوان مختلفين شكلاً هنا. لا تستنتج من ثبات شكل المقال أن الحالة لم تتغير؛ افحص التركيب الكامل وجنس الاسم.

لا تحفظ العبارة على أنها شكل فعل لا يتغير في كل الأزمنة. في الحاضر نقول Es gibt einen Park، وفي الماضي Es gab einen Park أو Es hat einen Park gegeben. وفي السؤال البسيط يتقدم الفعل المصرف: Gibt es hier einen Park? وإذا جاء ظرف مكان أولاً بقي الفعل في المرتبة الثانية: In der Nähe gibt es eine Bank. الذي يبقى مفرداً في أمثلة الحاضر هو الفعل gibt لأن الفاعل الشكلي es مفرد؛ لا يتبع الفعلَ جمعُ الشيء المذكور: Es gibt viele Banken.

تعرّف في هذا الدرس على القوالب الأكثر شيوعاً، ولا تستبدل es gibt آلياً بكل جملة عربية فيها «يوجد» أو «هناك»؛ اختر الصياغة الألمانية بحسب ما تريد قوله. انتبه أيضاً إلى أن مجموعة المكان، مثل in der Stadt أو neben dem Bahnhof، ليست هي الاسم الواقع بعد es gibt؛ حالة تلك المجموعة تتأثر بحرف الجر وبالمعنى المكاني. أما اسم Geldautomat فله صيغة معجمية خاصة في المفرد: der Geldautomat، لكن den/einen Geldautomaten. احفظ الكلمة مع صيغتها ولا تعممها على كل الأسماء.`,
      whyAr: `صيغة Akkusativ هنا ليست نتيجة ترجمة حرفية لكلمة gibt إلى «يعطي»، ولا وسيلة لتفسير معنى الوجود بقصة اشتقاقية. هي جزء من بناء ألماني موثّق: Duden يورد أمثلة مثل es gibt einen Gott وes gibt viele Fische، وGrammis يصف es في بعض تراكيب الوجود بأنه عنصر شكلي لا يحمل مرجعاً مستقلاً. لذلك تعلّم الإطار النحوي كاملاً: es gibt + اسم في Akkusativ، ثم راقب ما الذي يتغير فعلاً في أداة الاسم. كذلك افصل بين تصريف الفعل والزمن: Präsens gibt، Präteritum gab، وPerfekt hat … gegeben. صيغة Gibt es…? ترتيب سؤال، وليست دليلاً على أن es gibt تركيب غير قابل للتصريف.`,
      table: {
        title: "أشكال شائعة في تركيب es gibt",
        columns: ["الاستعمال", "المثال الألماني", "ملاحظة"],
        rows: [
          {
            label: "إثبات — اسم مؤنث",
            cells: ["Es gibt eine Bank.", "يظهر Akkusativ، وشكل eine هنا مثل Nominativ."],
          },
          {
            label: "إثبات — اسم مذكر",
            cells: ["Es gibt einen Park.", "يتغير ein إلى einen."],
          },
          {
            label: "إثبات — اسم محايد",
            cells: ["Es gibt ein Konto.", "الجملة صحيحة؛ شكل ein لا يتغير هنا."],
          },
          {
            label: "مفعول جمع",
            cells: ["Es gibt viele Banken.", "يبقى فعل الحاضر gibt مفرداً."],
          },
          {
            label: "سؤال",
            cells: ["Gibt es hier eine Filiale?", "يتقدم الفعل المصرف في السؤال."],
          },
          {
            label: "نفي",
            cells: ["Es gibt keinen Geldautomaten.", "den Geldautomaten صيغة Akkusativ للمذكر."],
          },
          {
            label: "الماضي",
            cells: ["Früher gab es hier eine Bank.", "يتغير الفعل مع الزمن."],
          },
        ],
      },
      examples: [
        { de: "Es gibt eine Bank in der Nähe.", ar: "يوجد بنك قريب." },
        { de: "Es gibt einen Park im Zentrum.", ar: "يوجد منتزه في وسط المدينة." },
        { de: "Es gibt ein Konto für den Alltag.", ar: "يوجد حساب للاستخدام اليومي." },
        { de: "Gibt es hier einen Geldautomaten?", ar: "هل يوجد صراف آلي هنا؟" },
        { de: "Es gibt keine Filiale am Bahnhof.", ar: "لا يوجد فرع مصرفي في المحطة." },
        { de: "In der Nähe gibt es mehrere Banken.", ar: "يوجد في الجوار عدة بنوك." },
        { de: "Früher gab es hier eine kleine Bank.", ar: "كان يوجد هنا مصرف صغير سابقاً." },
        { de: "Es hat früher hier einen Geldautomaten gegeben.", ar: "كان يوجد هنا صراف آلي سابقاً." },
      ],
      comparisonWithArabic: `قد نترجم Es gibt eine Bank إلى «يوجد بنك» أو «هناك بنك»، لكن التشابه في المعنى لا يجعل بنية اللغتين متطابقة. في الألمانية يظل تركيب es gibt متبوعاً بالاسم في Akkusativ، ويظهر ذلك خصوصاً مع المذكر: einen Park. وفي العربية قد تتغير صيغة الفعل بحسب الاسم أو التركيب، ولا توجد أداة ألمانية تتبدل وفق الحالات بالطريقة نفسها. لذا فـ«يوجد» ترجمة تقريبية لهذا المثال وليست قاعدة مقابلة لكل حالة. عند تكوين السؤال الألماني نبدأ بالفعل: Gibt es…?؛ أما السؤال العربي فيبنى بأدواته وترتيبه المعتاد. تعلّم أمثلة اللغتين بمعناها وسياقها، ولا تنقل اسم الحالة أو علامة الإعراب من لغة إلى الأخرى آلياً.`,
      eselsbruecke:
        "احفظ القالب مع المثال: es gibt + Akkusativ؛ وفي سؤال نعم/لا ابدأ بالفعل: Gibt es …? وتعلّم اسم Geldautomat مع صيغته einen Geldautomaten.",
      commonMistakes: [
        {
          wrong: "Es gibt ein Bank.",
          right: "Es gibt eine Bank.",
          classification: "error",
          whyAr:
            "Bank اسم مؤنث، وصيغته في هذا المثال eine Bank. لا يصح اختيار ein اعتماداً على معنى «واحد» فقط؛ طابق أداة الاسم مع الجنس والحالة.",
        },
        {
          wrong: "Es geben viele Banken.",
          right: "Es gibt viele Banken.",
          classification: "error",
          whyAr:
            "في الحاضر يأتي الفعل مفرداً لأن الفاعل الشكلي es مفرد. وجود اسم جمع بعده لا يحوّل gibt إلى geben.",
        },
        {
          wrong: "Es gibt der Park.",
          right: "Es gibt einen Park.",
          classification: "error",
          whyAr:
            "بعد es gibt نستخدم الاسم في Akkusativ. ومع اسم مذكر غير معيّن تتغير أداة ein إلى einen؛ der هنا لا يحقق الصيغة المطلوبة.",
        },
        {
          wrong: "Es gibt keinen Automat.",
          right: "Es gibt keinen Automaten.",
          classification: "error",
          whyAr:
            "Automat من الأسماء المذكرة ذات الصيغة الضعيفة: den Automaten، ولذلك نقول keinen Automaten. هذه صيغة معجمية خاصة تُحفظ مع الاسم، لا قاعدة تعمم على كل الأسماء.",
        },
      ],
      relatedRuleComparison: {
        title: "es gibt أم sein؟",
        content:
          "تقرر Es gibt einen Geldautomaten وجود شيء. أما Der Geldautomat ist neben der Bank فتحدد موقع شيء معيّن. المتمم بعد es gibt في المثال الأول في Akkusativ، بينما Geldautomat هو الفاعل في Nominativ مع sein.",
      },
    },
    {
      id: "t2",
      titleAr: "صيغ الضمائر الشخصية بعد الأفعال",
      titleDe: "Personalpronomen im Akkusativ und Dativ",
      explanationAr: `للضمائر الشخصية صيغ مختلفة بحسب الشخص والعدد، وبحسب جنس الغائب المفرد، وبحسب الحالة الألمانية. من الصيغ التي نحتاجها هنا: ich — mich — mir، du — dich — dir، er — ihn — ihm، sie — sie — ihr، es — es — ihm. وفي الجمع: wir — uns — uns، ihr — euch — euch، sie — sie — ihnen. أما صيغة الاحترام فتكتب بحرف كبير: Sie في Nominativ وAkkusativ، وIhnen في Dativ.

اختيار الضمير لا يعتمد على ترجمة عربية ثابتة؛ انظر إلى الفعل أو حرف الجر في الجملة. الفعل sehen في معنى رؤية شخص أو شيء يأخذ عادةً مكمّلاً في Akkusativ، لذلك نقول Ich sehe dich أو Sie sieht mich. أما helfen وgehören فيطلبان Dativ: Ich helfe dir، Das Buch gehört ihm. وdanken يأخذ مكمّلاً في Dativ عندما نذكر الشخص الذي نشكره: Ich danke dir. ويأخذ حرف الجر mit أيضاً Dativ في mit mir. احفظ الفعل مع المثال والضمير، وميّز بين Dativ يحكمه فعل وبين مجموعة اسمية يحكمها حرف جر.

في هذا الدرس نركّز على صيغ كثيرة الورود، ولا ندّعي أن الأمثلة المختارة تغطي كل استخدامات الضمائر أو كل أفعال الألمانية. كما أن تكرار الضمير نفسه في حالات متعددة لا يعني أن صيغته واحدة في كل جملة: uns وeuch لهما الصورة نفسها في الجدول المعروض، بينما ich/mich/mir وdu/dich/dir تتمايز بوضوح. صيغة Sie الرسمية تُحفظ مستقلةً مع كتابة الحرف الكبير.`,
      whyAr: `قد تقابل dich وdir الشخص نفسه في ترجمتين عربيتين، لكنهما ليسا بديلين حرّين في الجملة الألمانية. الفعل يحدد نوع المتمم الذي يحتاجه: sehen في المثال المختار يأتي مع Akkusativ، وhelfen مع Dativ، وgehören مع Dativ. لهذا نقول Ich sehe dich لكن Ich helfe dir، مع أن الترجمتين العربيتين قد تكتبان ضمير المخاطب نفسه متصلاً بالفعل. لا تستنتج الحالة من ترجمة مفردة مثل «لك» أو «إياك»، ولا تفسّر Dativ على أنه علامة جر عربية. تعلّم كل فعل مع إطار استعماله، واستعمل الجدول لتذكر الصيغة بعد أن تحدد الفعل أو حرف الجر.`,
      table: {
        title: "الضمائر الشخصية بحسب الحالة الألمانية",
        columns: ["الشخص", "Nominativ", "Akkusativ", "Dativ"],
        rows: [
          { label: "المتحدث المفرد", cells: ["ich", "mich", "mir"] },
          { label: "المخاطب المفرد", cells: ["du", "dich", "dir"] },
          { label: "هو", cells: ["er", "ihn", "ihm"] },
          { label: "هي", cells: ["sie", "sie", "ihr"] },
          { label: "الغائب المحايد", cells: ["es", "es", "ihm"] },
          { label: "نحن", cells: ["wir", "uns", "uns"] },
          { label: "أنتم", cells: ["ihr", "euch", "euch"] },
          { label: "هم/هن", cells: ["sie", "sie", "ihnen"] },
          { label: "صيغة الاحترام", cells: ["Sie", "Sie", "Ihnen"] },
        ],
      },
      examples: [
        { de: "Ich sehe dich jeden Tag.", ar: "أراك كل يوم." },
        { de: "Kannst du mir helfen?", ar: "هل يمكنك مساعدتي؟" },
        { de: "Das Buch gehört ihm.", ar: "هذا الكتاب يخصه." },
        { de: "Ich danke dir für alles.", ar: "أشكرك على كل شيء." },
        { de: "Sie liebt mich.", ar: "هي تحبني." },
        { de: "Können Sie mir bitte helfen?", ar: "هل يمكنكم مساعدتي من فضلكم؟" },
        { de: "Ich fahre mit ihr zur Bank.", ar: "أذهب معها إلى البنك." },
        { de: "Wir sehen sie am Bahnhof.", ar: "نراهم/نراهن في المحطة." },
      ],
      comparisonWithArabic: `في الترجمة إلى العربية قد يظهر المعنى نفسه بصيغ مثل «أراك» و«أساعدك»، لكن شكل الكاف في الترجمة لا يحدد وحده أي ضمير ألماني يجب أن تختار. في Ich sehe dich يختار الفعل الألماني Akkusativ، وفي Ich helfe dir يختار Dativ؛ ولكل نظام لغوي طريقة مستقلة في إظهار العلاقات بين الكلمات. لذلك نستخدم العربية لتوضيح معنى الجملة، لا لنسخ أسماء الحالات أو قواعدها حرفياً. وبالمثل، وجود كلمة ألمانية في Dativ لا يعني تلقائياً أن نظيرها العربي مجرور. قارن الأفعال داخل جمل كاملة، وتعلّم الضمير مع الفعل أو حرف الجر الذي يحكمه.`,
      eselsbruecke:
        "درّب أزواجاً داخل جملة لا ترجمات منفردة: sehen + mich/dich؛ helfen + mir/dir؛ gehören + ihm. حدّد الفعل أولاً، ثم اختر صيغة الضمير الألماني.",
      commonMistakes: [
        {
          wrong: "Kannst du mich helfen?",
          right: "Kannst du mir helfen?",
          classification: "error",
          whyAr:
            "الفعل helfen يأخذ مكمّلاً في Dativ في هذا التركيب؛ لذلك mir لا mich. الترجمة العربية «تساعدني» لا تغيّر اختيار الفعل الألماني.",
        },
        {
          wrong: "Das Buch gehört ihn.",
          right: "Das Buch gehört ihm.",
          classification: "error",
          whyAr:
            "gehören يأخذ Dativ للشخص الذي يخصه الشيء: ihm. أما ihn فهي صيغة Akkusativ ولا تلائم هذا الفعل في المثال.",
        },
        {
          wrong: "Ich sehe dir jeden Tag.",
          right: "Ich sehe dich jeden Tag.",
          classification: "error",
          whyAr:
            "في معنى «أراك» يأتي sehen مع Akkusativ؛ صيغة du المقابلة هنا dich. اختيار mir/dir لمجرد ظهور ضمير المخاطب بالعربية غير كافٍ.",
        },
        {
          wrong: "Ich danke dich.",
          right: "Ich danke dir.",
          classification: "error",
          whyAr:
            "عندما نذكر الشخص الذي نشكره، يستخدم danken مكمّلاً في Dativ: dir. ويمكن استعمال danken من دون ذكر متمم، لكن ذلك لا يجعل dich صحيحاً في هذا المثال.",
        },
      ],
      relatedRuleComparison: {
        title: "حالة يحددها الفعل أم حرف الجر؟",
        content:
          "في Ich helfe dir يطلب الفعل helfen متمماً في Dativ. وفي Ich fahre mit dir تفرض mit الحالة على الضمير. لذلك لا تكفي صيغة Dativ وحدها لمعرفة مصدر الحكم؛ افحص الجملة كاملة.",
      },
    },
  ],

  reading: {
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
  },

  listening: {
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
          "Er hat seine Bankkarte verloren.",
          "Er möchte sein Konto schließen.",
          "Er findet den Eingang nicht.",
        ],
        correctIndex: 0,
        explanation:
          "يطلب كريم المساعدة لأنه لا يفهم ما يظهر على شاشة الصراف.",
        errorType: "comprehension",
      },
    ],
  },

  pronunciation: {
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
  },

  writing: [
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
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الاسم الصحيحة:",
      questionDe: "Es gibt ___ Bank in der Nähe.",
      options: ["eine", "ein", "einen", "der"],
      correctIndex: 0,
      explanation:
        "Bank مؤنث، وبعد es gibt نستخدم صيغة Akkusativ: eine Bank. أما ein/einen فليسا صيغة هذا الاسم، وder لا يطابق التركيب.",
      errorType: "case",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة النفي الصحيحة للاسم المفرد في الجملة:",
      questionDe: "Es gibt ___ Park im Stadtzentrum.",
      options: ["keinen", "kein", "keine", "nicht"],
      correctIndex: 0,
      explanation:
        "Park اسم مذكر مفرد؛ النفي غير المحدد في Akkusativ هو keinen Park. keine تلائم مثلاً جمعاً أو مؤنثاً، وnicht لا تحل محل أداة النفي هنا.",
      errorType: "negation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كل صيغة ضمير بجملة وترجمتها المناسبة:",
      pairs: [
        { left: "mich", right: "Er sieht mich. = هو يراني." },
        { left: "dich", right: "Ich sehe dich. = أراك." },
        { left: "mir", right: "Kannst du mir helfen? = هل تساعدني؟" },
        { left: "dir", right: "Ich helfe dir. = أساعدك." },
      ],
      explanation:
        "اقرأ الضمير ضمن جملته: sehen يأتي هنا مع mich/dich، وhelfen مع mir/dir. الترجمة توضح المعنى ولا تجعل أسماء الحالات الألمانية مطابقة لإعراب العربية.",
      errorType: "pronoun",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال طبيعي:",
      tokens: ["helfen", "Kannst", "mir", "?", "du"],
      correctSentence: "Kannst du mir helfen?",
      explanation:
        "في سؤال نعم/لا يأتي الفعل المصرف Kannst أولاً، ثم du؛ وتبقى صيغة المصدر helfen في نهاية الجملة.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح صيغة الضمير في الجملة:",
      wrongSentence: "Kannst du mich helfen?",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "dich", "ihn"],
      explanation:
        "helfen يأخذ مكمّلاً في Dativ في هذا المثال؛ الصيغة الصحيحة mir.",
      errorType: "pronoun",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الضمير التي يطلبها الفعل:",
      template: "Ich sehe ___. (هي) Ich danke ___. (أنت) Sie liebt ___. (أنا)",
      blanks: [
        { correct: "sie", options: ["sie", "ihr", "ihn"] },
        { correct: "dir", options: ["dir", "dich", "mir"] },
        { correct: "mich", options: ["mich", "mir", "dich"] },
      ],
      caseSensitive: true,
      explanation:
        "sehen وlieben يأتيان مع متمم Akkusativ في هذين المثالين: sie/mich. وعند ذكر الشخص الذي نشكره يأتي danken مع dir.",
      errorType: "pronoun",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة الخبرية إلى سؤال يبدأ بالفعل:",
      prompt: "Es gibt einen Geldautomaten. → Frage",
      acceptedAnswers: ["Gibt es einen Geldautomaten?"],
      caseSensitive: true,
      sampleAnswer: "Gibt es einen Geldautomaten?",
      explanation:
        "في سؤال نعم/لا يتقدم الفعل المصرف gibt: Gibt es …? ويظل الاسم في Akkusativ.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر معنى العبارة في سياق الدفع:",
      questionDe: "bar zahlen",
      questionAr: "ما معنى العبارة؟",
      options: ["يدفع نقداً", "يدفع بالبطاقة", "يحوّل مالاً", "يسحب نقوداً"],
      correctIndex: 0,
      explanation:
        "bar zahlen أو bar bezahlen تعني الدفع بالنقود الورقية أو المعدنية، لا الدفع بالبطاقة أو تحويل المال.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح صيغة الضمير التي لا تلائم الفعل:",
      wrongSentence: "Das Buch gehört ihn.",
      wrongWord: "ihn",
      correctWord: "ihm",
      options: ["ihm", "ihn", "ihr", "es"],
      explanation:
        "gehören يأخذ Dativ للشخص الذي يخصه الشيء؛ صيغة الضمير المذكر هنا ihm.",
      errorType: "pronoun",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة كما تسمعها:",
      audioText: "Ich überweise das Geld auf dein Konto.",
      caseSensitive: true,
      explanation:
        "الجملة صحيحة: Ich überweise … . الفعل überweisen غير منفصل في هذا المعنى؛ ومن صيغه hat überwiesen، لا hat übergewiesen.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "اختر معنى الفعل في سياق التحويل المصرفي:",
      questionDe: "Was bedeutet „Geld auf ein anderes Konto überweisen“?",
      options: [
          "Einen Geldbetrag von einem Konto auf ein anderes Konto übertragen.",
        "Am Automaten Bargeld aus dem eigenen Konto holen.",
        "Eine Karte an der Kasse zum Bezahlen benutzen.",
        "Münzen in einen Briefumschlag legen.",
      ],
      correctIndex: 0,
      explanation:
        "في السياق المصرفي يعني überweisen تحويل مبلغ من حساب إلى آخر. أما الخيارات الأخرى فتصف سحب النقد، أو الدفع بالبطاقة، أو وضع العملات في ظرف.",
      errorType: "vocabulary",
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر تصريف الفعل المنفصل abheben في الجملة الرئيسية:",
      questionDe: "Ich ___ am Automaten Geld ab. (abheben)",
      options: ["hebe", "abhebe", "hebst", "heben"],
      correctIndex: 0,
      explanation:
        "abheben فعل منفصل في الحاضر: Ich hebe Geld ab. يثبت Duden ترتيب hebt … ab؛ أما überweisen في تمرين e10 فغير منفصل.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "اختر صيغة الماضي المناسبة:",
      questionDe: "Früher ___ es hier eine Bank. (Präteritum)",
      options: ["gab", "gibt", "geben", "gebe"],
      correctIndex: 0,
      explanation:
        "Präteritum من geben هو gab؛ لذلك نقول Früher gab es hier eine Bank. هذا مثال إضافي على أن صيغة الحاضر es gibt ليست ثابتة في جميع الأزمنة.",
      errorType: "conjugation",
    },
    {
      id: "e14",
      type: "fill-blank",
      instructionAr:
        "اختر أداة اسم مفرد مذكر؛ تذكّر صيغة الاسم: der Geldautomat — den Geldautomaten:",
      template: "Es gibt ___ Geldautomaten in der Nähe. (einen einzelnen)",
      blanks: [
        { correct: "einen", options: ["einen", "einem", "ein", "der"] },
      ],
      explanation:
        "المقصود صراف واحد: einen Geldautomaten. Geldautomat اسم مذكر وصيغته في Akkusativ المفرد Geldautomaten؛ أما einem فهو Dativ، وein لا يطابق الصيغة المطلوبة.",
      errorType: "case",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Kannst du mich helfen?",
        right: "Kannst du mir helfen?",
        classification: "error",
        whyAr:
          "helfen يطلب هنا مكمّلاً في Dativ. لا تستبدل mir بـmich اعتماداً على ترجمة «تساعدني» وحدها.",
      },
      {
        wrong: "Es gibt der Park.",
        right: "Es gibt einen Park.",
        classification: "error",
        whyAr:
          "في هذا الإطار نستخدم الاسم في Akkusativ؛ مع ein واسم مذكر مفرد تكون الصيغة einen Park.",
      },
      {
        wrong: "Es gibt keinen Automat.",
        right: "Es gibt keinen Automaten.",
        classification: "error",
        whyAr:
          "Automat اسم مذكر ضعيف: den Automaten في Akkusativ. يُحفظ هذا الاسم بصيغته الخاصة، ولا تُعمّم النهاية على سائر الأسماء.",
      },
      {
        wrong: "القول إن صيغة Euro واحدة في كل سياق جمع.",
        right: "die Euros في جمع الاسم، لكن عشرة يورو: 10 Euro.",
        classification: "contextual-alternative",
        whyAr:
          "Duden يورد الجمع Euros مع أداة التعريف، ويورد أيضاً كتابة المبالغ مثل 30 Euro بلا s. التمرين r3 يقيس جمع الاسم، لا كتابة المبلغ.",
      },
      {
        wrong: "bar تعني «حانة» دائماً.",
        right: "bar zahlen = يدفع نقداً؛ die Bar = الحانة.",
        classification: "error",
        whyAr:
          "الحرف الكبير والجنس النحوي والسياق تميّز الاسم die Bar عن الصفة bar في سياق الدفع. ليست الكلمتان استعمالاً واحداً.",
      },
    ],
    eselsbruecken: [
      "es gibt + Akkusativ؛ في السؤال ابدأ بالفعل: Gibt es …?",
      "احفظ الفعل مع المتمم: sehen + dich، helfen + dir، gehören + ihm.",
      "abheben ينفصل في الجملة الرئيسية: Ich hebe Geld ab؛ überweisen لا ينفصل: Ich überweise Geld.",
    ],
    culturalNote: {
      title: "النقد والبطاقات: معلومة محددة لا تعميم ثقافي",
      content:
        "في دراسة Bundesbank لسلوك الدفع في ألمانيا عام 2023، سُدّد نقداً 51% من المعاملات المسجلة في نقاط البيع، واستخدمت بطاقة الخصم في 27% منها بحسب العدد؛ ظل النقد الأكثر استخداماً في هذه العينة، مع استمرار اتجاه تناقصه. هذه لقطة زمنية لبيانات ألمانيا ولا تثبت أن الألمان يفضّلون النقد أكثر من كل الأوروبيين. قد تختلف وسائل الدفع المقبولة بين المتاجر، فاقرأ اللافتة أو اسأل. إذا قصدت نظام البطاقة الألماني المحدد فـgirocard أدق؛ أما Bankkarte فلفظ أعم، ولا تخلطها تلقائياً مع Kreditkarte.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الاسم الصحيحة بعد es gibt:",
      questionDe: "Es gibt ___ Park in der Stadt.",
      options: ["einen", "ein", "eine", "der"],
      correctIndex: 0,
      explanation:
        "Park مذكر مفرد؛ الصيغة المطلوبة في Akkusativ هي einen Park.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر ضمير المتكلم المناسب مع helfen:",
      questionDe: "Kannst du ___ helfen? (ich)",
      options: ["mir", "mich", "dich", "dir"],
      correctIndex: 0,
      explanation:
        "helfen يطلب Dativ؛ الصيغة المقصودة للمتكلم هي mir.",
      errorType: "pronoun",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين سؤال عن وجود صراف:",
      tokens: ["Gibt", "es", "hier", "einen", "Geldautomaten", "?"],
      correctSentence: "Gibt es hier einen Geldautomaten?",
      explanation:
        "يبدأ سؤال نعم/لا بالفعل gibt، ثم يأتي es، ثم ظرف المكان والاسم في Akkusativ.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الضمير الذي لا يلائم الفعل danken:",
      wrongSentence: "Ich danke dich für alles.",
      wrongWord: "dich",
      correctWord: "dir",
      options: ["dir", "dich", "mich", "ihn"],
      explanation:
        "عند ذكر الشخص الذي نشكره يأتي danken مع Dativ: Ich danke dir.",
      errorType: "pronoun",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة الضمير التي يطلبها كل فعل:",
      template: "Ich sehe ___. (du) Ich helfe ___. (du)",
      blanks: [
        { correct: "dich", options: ["dich", "dir", "mich"] },
        { correct: "dir", options: ["dich", "dir", "mich"] },
      ],
      explanation:
        "في المثال الأول يأتي sehen مع dich، وفي الثاني يأتي helfen مع dir. الترجمة المقصودة للشخص واحدة، لكن الفعلين يختاران صيغتين مختلفتين بالألمانية.",
      errorType: "pronoun",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "das Konto",
      ar: "الحساب المصرفي",
      example: "Ich eröffne ein Konto.",
      exampleAr: "أفتح حساباً.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "das Geld",
      ar: "المال",
      example: "Ich brauche Geld.",
      exampleAr: "أحتاج إلى مال.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "überweisen",
      ar: "يحوّل مالاً إلى حساب",
      example: "Ich überweise das Geld auf dein Konto.",
      exampleAr: "أحوّل المال إلى حسابك.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "bar bezahlen",
      ar: "يدفع نقداً",
      example: "Ich bezahle bar.",
      exampleAr: "أدفع نقداً.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "der Geldautomat",
      ar: "الصراف الآلي",
      example: "Wo ist der Geldautomat?",
      exampleAr: "أين يوجد الصراف الآلي؟",
      level: "A2",
    },
    {
      id: "fc6",
      de: "es gibt",
      ar: "يوجد/هناك؛ يتبعه الاسم في Akkusativ",
      example: "Es gibt eine Bank in der Nähe.",
      exampleAr: "يوجد بنك قريب.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "mich / dich / mir / dir",
      ar: "صيغ ضمير ألمانية تُختار بحسب الفعل والحالة",
      example: "Ich sehe dich. Ich helfe dir.",
      exampleAr: "أراك. أساعدك.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Bankkarte",
      ar: "البطاقة المصرفية",
      example: "Ich bezahle mit meiner Bankkarte.",
      exampleAr: "أدفع ببطاقتي المصرفية.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "abheben",
      ar: "يسحب نقوداً من الحساب",
      example: "Ich hebe am Automaten Geld ab.",
      exampleAr: "أسحب المال من الصراف الآلي.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "die Gebühr",
      ar: "الرسم / رسوم الخدمة",
      example: "Wo finde ich die Gebühren?",
      exampleAr: "أين أجد معلومات الرسوم؟",
      level: "A2",
    },
    {
      id: "fc11",
      de: "die Übersicht",
      ar: "ملخص المعلومات / جدول المعلومات",
      example: "Die Gebühren stehen in der Übersicht.",
      exampleAr: "الرسوم واردة في ملخص المعلومات.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "das Kontomodell",
      ar: "نموذج الحساب",
      example: "Es gibt zwei Kontomodelle.",
      exampleAr: "يوجد نموذجان للحساب.",
      level: "A2",
    },
  ],

  mediation: [
    {
      id: "med-a2-07-1",
      type: "simplify-announcement",
      titleAr: "لخّص تعليمات نموذج بنك افتراضي بالعربية",
      sourceDe:
        "Auszug aus einem fiktiven Bankformular: „Bitte füllen Sie den Antrag aus. Für die Identifizierung brauchen wir ein gültiges Ausweisdokument. Welche weiteren Unterlagen Sie vorlegen müssen, hängt vom Konto und Ihrer Situation ab. Fragen Sie bitte vorab bei der Bank nach.“",
      taskAr:
        "اشرح بالعربية ما تطلبه الاستمارة. ميّز بين وثيقة الهوية المذكورة وبين الوثائق الأخرى التي تختلف بحسب الحساب والحالة؛ لا تضف شروطاً غير مكتوبة ولا تستخدم بيانات شخصية حقيقية.",
      modelAnswerAr:
        "«يرجى تعبئة الطلب. يلزم تقديم وثيقة هوية صالحة لإثبات الهوية. أما الوثائق الأخرى فقد تختلف بحسب الحساب والحالة، لذا اسأل البنك مسبقاً.» هذه صياغة لتمرين، وليست قائمة شاملة أو نصيحة مالية.",
      keyPointsAr: [
        "ذكرت ضرورة تعبئة الطلب وتقديم وثيقة هوية صالحة في هذا المثال",
        "أوضحت أن الوثائق الأخرى تختلف بحسب الحساب والحالة",
        "أشرت إلى سؤال البنك مسبقاً بدلاً من تعميم متطلبات واحدة",
      ],
    },
  ],

  interaction: [
    {
      id: "int-a2-07-1",
      scenarioAr:
        "محاكاة حوار نصي عن عروض حساب خيالية؛ لا تُدخل أرقام حسابات أو بيانات شخصية حقيقية.",
      scenarioDe: "Ein Gespräch über ein erfundenes Kontoangebot.",
      strategyAr:
        "اطلب معلومات محددة أو توضيحاً. اختر رداً مناسباً؛ ويمكنك قراءته بصوت عالٍ للتدريب، لكن الاختيار النصي لا يقيس الكلام أو النطق ولا يصف شروط بنك حقيقي.",
      rounds: [
        {
          speakerDe: "Guten Tag! Wie kann ich Ihnen helfen?",
          speakerAr: "مرحباً! كيف أستطيع مساعدتك؟",
          options: [
            {
              de: "Ich möchte ein Konto eröffnen. Welche Modelle gibt es?",
              ar: "أريد فتح حساب. ما النماذج المتاحة؟",
              best: true,
              replyDe:
                "In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
              replyAr: "في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
            },
            {
              de: "Ich möchte ein Konto eröffnen. Können Sie mir die Unterschiede erklären?",
              ar: "أريد فتح حساب. هل يمكنك شرح الفروق لي؟",
              best: true,
              replyDe:
                "Gern. In diesem Beispiel gibt es ein Modell mit Karte und eines ohne Karte.",
              replyAr: "بكل سرور. في هذا المثال نموذج ببطاقة وآخر من دون بطاقة.",
            },
          ],
        },
        {
          speakerDe: "Welche Information möchten Sie zuerst?",
          speakerAr: "ما المعلومة التي تريد معرفتها أولاً؟",
          options: [
            {
              de: "Wie hoch ist die Gebühr für das Modell mit Karte?",
              ar: "كم يبلغ رسم النموذج ذي البطاقة؟",
              best: true,
              replyDe: "Das Modell mit Karte kostet in diesem Beispiel drei Euro pro Monat.",
              replyAr: "يكلف النموذج ذو البطاقة ثلاثة يورو شهرياً في هذا المثال.",
            },
            {
              de: "Wo finde ich die Öffnungszeiten der Filiale?",
              ar: "أين أجد ساعات عمل الفرع؟",
              best: true,
              replyDe: "Die Öffnungszeiten kann ich Ihnen gleich nennen.",
              replyAr: "يمكنني ذكر ساعات العمل لكم حالاً.",
            },
          ],
        },
      ],
    },
  ],
};
