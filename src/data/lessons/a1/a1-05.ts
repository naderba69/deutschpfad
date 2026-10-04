import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-05: الروتين اليومي والوقت
 * — الأفعال المنفصلة (trennbare Verben) + الساعة وأوقات اليوم
 */
export const lessonA105: Lesson = {
  id: "a1-05",
  unitId: "a1-05",
  level: "A1",
  order: 1,
  titleDe: "Mein Tag",
  titleAr: "الحياة اليومية والروتين",
  summary:
    "الروتين اليومي، الأفعال المنفصلة (aufstehen, fernsehen...)، قراءة الساعة، وأوقات اليوم (am Morgen, am Abend)، والمدى الزمني von … bis (من … إلى).",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann eine Handlung aus meinem Tagesablauf mit einer Uhrzeit beschreiben.",
      ar: "أن أصف فعلاً من روتيني اليومي بجملة بسيطة مع ذكر وقته.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a1-05:w1"],
        labelAr: "اكتب جملة كاملة عن وقت نهوضك مستخدماً إحدى الساعات المحددة في السؤال.",
        completion: "any-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann trennbare Verben im Hauptsatz richtig verwenden.",
      ar: "أن أصرّف فعلاً منفصلاً في الجملة الخبرية وأضع البادئة في موضعها.",
      evidence: {
        exerciseIds: ["e1", "w2"],
        taskIds: [
          "practice:a1-05:e1",
          "flow-practice:a1-05:e1",
          "writing:a1-05:w2",
        ],
        labelAr: "أجب عن e1 وأكمل بادئات الأفعال الأربع في w2 إجابة صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einfache Uhrzeiten verstehen und angeben.",
      ar: "أن أفهم وقتاً بسيطاً وأعبّر عنه بالألمانية.",
      evidence: {
        exerciseIds: ["e2", "w4"],
        taskIds: [
          "practice:a1-05:e2",
          "flow-practice:a1-05:e2",
          "writing:a1-05:w4",
        ],
        labelAr: "اختر الوقت الموافق لـ halb neun في e2 وأكمل صيغتي الوقت في w4.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann Tageszeiten mit am in einfachen Sätzen nennen.",
      ar: "أن أذكر الصباح وبعد الظهر والمساء في جمل بسيطة مستخدماً am.",
      evidence: {
        exerciseIds: ["w5"],
        taskIds: ["writing:a1-05:w5"],
        labelAr: "أكمل am قبل Morgen وNachmittag وAbend في w5.",
        completion: "any-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann die wichtigsten Angaben zu einem Tagesablauf in einem kurzen Text verstehen.",
      ar: "أن أفهم المعلومات الأساسية عن الروتين اليومي في نص قصير.",
      evidence: {
        exerciseIds: ["r1", "r2"],
        taskIds: ["reading:read-a1-05:r1", "reading:read-a1-05:r2"],
        labelAr: "أجب إجابة صحيحة عن r1 وr2 بعد قراءة النص الألماني.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann wichtige Uhrzeiten und Aktivitäten in einem kurzen Dialog verstehen.",
      ar: "أن ألتقط الأوقات والأنشطة الأساسية في حوار قصير عن اليوم.",
      evidence: {
        exerciseIds: ["q1", "q2"],
        taskIds: ["listening:l1:q1", "listening:l1:q2"],
        labelAr: "أجب عن سؤالي الاستماع q1 وq2 إجابة صحيحة بعد الاستماع.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "لاحظ الفرق بين المصدر الألماني aufstehen والجملة المصرفة Ich stehe um sieben Uhr auf: أين تظهر البادئة auf في هذه الجملة؟",
    motivatingQuestionDe: "Wann stehst du auf?",
    contextAr:
      "نقرأ يوم طارق في هامبورغ ونستمع إلى سامي، ثم نتدرّب على الأفعال المنفصلة وذكر الأوقات في جمل يومية قصيرة.",
    contextDe: "Mein Tag beginnt um sieben Uhr.",
    connectionToPreviousAr:
      "تعلمت أسماء الغرف ووصف المكان بـ in وauf مع Dativ. الآن ننتقل من وصف مكان الأشياء إلى وصف روتينك اليومي، ونتعلم الأفعال المنفصلة والتعبير عن الوقت.",
    activateVocabulary: [
      { de: "aufstehen", ar: "ينهض من الفراش" },
      { de: "der Morgen", ar: "الصباح" },
      { de: "der Abend", ar: "المساء" },
      { de: "die Uhr", ar: "الساعة" },
      { de: "arbeiten", ar: "يعمل" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-03 — الطعام والشراب): كيف تطلب شيئاً بأدب؟",
      questionDe: "Was sagt man im Café, wenn man etwas möchte?",
      questionAr: "ماذا تقول في المقهى عندما تريد شيئاً؟",
      options: [
        "Ich hätte gern einen Kaffee.",
        "Ich bin einen Kaffee.",
        "Ich möchte einen Kaffee bin.",
        "Ich habe gern Kaffee sein.",
      ],
      correctIndex: 0,
      explanation: "Ich hätte gern + نصب (من درس a1-03): الطلب المهذب.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-04 — السكن والمنزل): أين يقع السرير؟",
      questionDe: "Wo steht das Bett?",
      questionAr: "أين يقع السرير؟",
      options: ["im Schlafzimmer", "in der Küche", "im Bad", "im Wohnzimmer"],
      correctIndex: 0,
      explanation: "das Schlafzimmer = غرفة النوم (من درس a1-04 السكن).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): أكمل تصريف sein",
      template: "Ich ___ aus Tunesien. (sein)",
      blanks: [{ correct: "bin", options: ["bin", "bist", "ist", "sind"] }],
      explanation: "ich bin (من درس a1-01): Ich bin aus Tunesien.",
      errorType: "conjugation",
    },
  ],
  theory: [
    {
      id: "t1",
      titleAr: "الأفعال المنفصلة (Trennbare Verben)",
      titleDe: "Trennbare Verben: aufstehen, fernsehen, einkaufen",
      explanationAr: "يتكوّن الفعل المنفصل من جزء أول (Partikel) وفعل أساس، لكن احفظهما في المعجم بوصفهما فعلاً واحداً؛ فالمعنى ليس دائماً حاصل ترجمة كل جزء حرفياً. **aufstehen** تعني «ينهض/يقوم من الفراش»، و**fernsehen** تعني «يشاهد التلفاز»، و**einkaufen** تعني «يتسوّق».\n\nفي الجملة الخبرية الرئيسية البسيطة، نصرّف الفعل الأساس في المركز الثاني، ونضع البادئة المنفصلة في نهاية الجملة: «Ich **stehe** um sieben Uhr **auf**»؛ «Sie **kauft** heute **ein**». وإذا بدأنا بظرف، تبقى القاعدة نفسها: «Am Samstag **kaufe** ich im Supermarkt **ein**». وفي سؤال نعم/لا يأتي الفعل المصرف أولاً وتبقى البادئة في النهاية: «**Stehst** du früh **auf**?»\n\nلا تنفصل الأجزاء في كل تركيب: مع الفعل الناقص يبقى المصدر موصولاً («Ich muss früh **aufstehen**»)، وفي الجملة التابعة يعود الفعل إلى آخر الجملة موصولاً («…, weil ich früh **aufstehe**»)، ومع **zu** تدخل الكلمة بين البادئة والفعل («auf**zu**stehen»). تُكتب صيغة المصدر كلمةً واحدة، وتظهر في بعض المعاجم بعلامة توضيحية: auf|stehen.\n\nمن البوادئ الشائعة في الأفعال المنفصلة: **auf-, an-, aus-, ein-, mit-, ab-, fern-, vor-, nach-, zu-**؛ وفي الجملة المنفصلة تكون البادئة منبورة غالباً. النبر قرينة نافعة لا بديلٌ عن حفظ الفعل مع مثاله. أما البوادئ غير المنفصلة الشائعة فثمانٍ: **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**؛ فقارن **AUF**stehen بـ ver**STEH**en. وبعض البوادئ مثل **durch-, über-, um-, unter-** قد تتصرف على أكثر من وجه بحسب الفعل والمعنى؛ لذا احفظ المثال المعجمي كاملاً ولا تعمم قاعدة واحدة على كل فعل.",
      whyAr: "تظهر هذه الأفعال في جمل يومية عن النهوض والتسوّق والاتصال ومشاهدة التلفاز، لذلك تساعدك على فهم حوار الروتين وبناء جملة بسيطة. المهم ليس نسبةً رقمية لعددها، بل أن تميّز الفعل المصرف من بادئته: بهذه الطريقة لا تضعهما متجاورين في الجملة الخبرية، وتنتبه إلى البادئة التي تكمل معنى الفعل عند سماع الجملة.",
      table: {
        title: "أشهر الأفعال المنفصلة اليومية",
        columns: ["الفعل", "المعنى", "مثال"],
        rows: [
          { label: "aufstehen", cells: ["ينهض من الفراش", "Ich stehe um 7 auf."] },
          {
            label: "fernsehen",
            cells: ["يشاهد التلفاز", "Wir sehen abends fern."],
          },
          { label: "einkaufen", cells: ["يتسوق", "Sie kauft heute ein."] },
          { label: "anfangen", cells: ["يبدأ", "Der Kurs fängt um 9 an."] },
          { label: "mitkommen", cells: ["ينضمّ/يأتي معك", "Kommst du mit?"] },
          { label: "aufräumen", cells: ["يرتب", "Ich räume das Zimmer auf."] },
        ],
      },
      examples: [
        {
          de: "Ich stehe jeden Tag um sieben Uhr auf.",
          ar: "أنهض كلّ يوم في السابعة. (البادئة المنفصلة في نهاية الجملة)",
        },
        {
          de: "Wir sehen abends zwei Stunden fern.",
          ar: "نشاهد التلفاز ساعتين مساءً.",
        },
        {
          de: "Sie kauft am Samstag im Supermarkt ein.",
          ar: "تتسوّق يوم السبت في السوبرماركت. (في هذا المثال تأتي البادئة بعد بقية الجملة)",
        },
        { de: "Der Kurs fängt um neun Uhr an.", ar: "يبدأ الدرس في التاسعة." },
        {
          de: "Ich muss morgen früh aufstehen.",
          ar: "عليّ أن أنهض باكراً غداً. (مع الفعل الناقص يبقى المصدر موصولاً)",
        },
        {
          de: "Rufst du mich heute Abend an?",
          ar: "أتتّصل بي هذا المساء؟ (في السؤال ينفصل أيضاً)",
        },
        {
          de: "Ich verstehe die Frage nicht.",
          ar: "لا أفهم السؤال. (ver‑ بادئة غير منفصلة ⟵ لا تتحرّك)",
        },
        {
          de: "Am Sonntag räume ich meine Wohnung auf.",
          ar: "أرتّب شقّتي يوم الأحد.",
        },
      ],
      comparisonWithArabic: "تستعمل العربية والألمانية وسائل اشتقاق تغيّر معنى الفعل، مثل «خرج» و«استخرج»، لكن الجزء الألماني المنفصل قد ينتقل إلى نهاية الجملة. قارن «أنهض في السابعة» بـ«Ich stehe um sieben Uhr auf»: الفعل المصرف **stehe** يأتي في المركز الثاني، و**auf** في نهاية الجملة. ليست الفكرة أن العربية تبدأ بالفعل دائماً؛ فترتيبها يتغير بحسب السياق. الاختلاف المقصود هنا هو موضع البادئة الألمانية بعد تصريف الفعل.",
      eselsbruecke: "في الجملة الخبرية الرئيسية البسيطة: **صرّف الفعل في المركز الثاني، وضع البادئة المنفصلة في النهاية**. مع الفعل الناقص أو في الجملة التابعة يتغيّر الشكل؛ احفظ المثال كاملاً ولا تطبق القاعدة خارج سياقها.",
      commonMistakes: [
        {
          wrong: "Ich aufstehe um sieben.",
          right: "Ich stehe um sieben auf.",
          whyAr:
            "في الجملة الخبرية الرئيسية البسيطة لا يبقى المصدر موصولاً بعد الفاعل؛ نصرّف الفعل الأساس ونضع البادئة المنفصلة في نهاية الجملة: Ich stehe um sieben auf. وتختلف البنية مع المصدر والجملة التابعة.",
        },
        {
          wrong: "Du steht um sieben auf.",
          right: "Du stehst um sieben auf.",
          whyAr:
            "هذا خطأ تصريف لا خطأ موضع البادئة: مع du في المضارع نقول stehst، وتبقى auf في نهاية الجملة الرئيسية.",
        },
        {
          wrong: "Ich verstehe das auf.",
          right: "Ich verstehe das.",
          whyAr:
            "الفعل verstehen غير منفصل، لذلك تبقى ver- متصلة بالفعل. ومن البوادئ غير المنفصلة الشائعة ثمانٍ: be-, emp-, ent-, er-, ge-, miss-, ver-, zer-. النبر قرينة مفيدة، لكن احفظ الفعل مع مثال.",
        },
        {
          wrong: "Ich muss früh stehe auf.",
          right: "Ich muss früh aufstehen.",
          whyAr:
            "خلط بنيتين: مع الفعل الناقص يبقى الفعل المنفصل مصدراً موصولاً في نهاية الجملة: Ich muss früh aufstehen. لا تصرّف الفعل ولا تفصل بادئته في هذا التركيب.",
        },
      ],
      relatedRuleComparison: {
        title: "قوس الجملة (Satzklammer) في الأفعال المنفصلة والناقصة",
        content: "قوس الجملة (Satzklammer) يوضح موضع أجزاء الفعل في أمثلة مختلفة: في الجملة الرئيسية «Ich **stehe** um sieben **auf**»، ومع الفعل الناقص «Ich **muss** um sieben **aufstehen**»، وفي الماضي التام «Ich **bin** um sieben **aufgestanden**»، وفي التابعة «…, weil ich um sieben **aufstehe**». تتشابه الأمثلة في إحاطة الفعل المصرف بمواد تكمّل المعنى، لكن لكل تركيب قاعدته؛ لا تخلط بين فصل البادئة في المضارع وكتابة المصدر أو اسم المفعول كلمةً واحدة.",
      },
    },
    {
      id: "t2",
      titleAr: "قراءة الساعة وأوقات اليوم",
      titleDe: "Die Uhrzeit und die Tageszeiten",
      explanationAr: "للتعبير عن الساعة شكلان شائعان. في الجداول والإعلانات والصياغة الرسمية قد ترى نظام 24 ساعة: 16:20 = **sechzehn Uhr zwanzig**. وفي الحديث اليومي كثيراً ما يُستعمل نظام 12 ساعة؛ في الساعة الكاملة يمكن ذكر **Uhr** أو حذفها إذا كان السياق واضحاً («Es ist acht (Uhr)»). لا يعني ذلك أن أحد الشكلين صحيح والآخر خطأ؛ اختر الصيغة التي تناسب الموقف.\n\nفي النمط اليومي، تبيّن **nach** و**vor** الدقائق بالنسبة إلى الساعة: **fünf nach acht** = 8:05، و**zwanzig vor neun** = 8:40. وللربع نقول **Viertel nach acht** = 8:15 و**Viertel vor neun** = 8:45. أما النصف فيُسمّى باسم الساعة التالية: **halb neun = 8:30**، وعادة لا نضيف **Uhr** بعد صيغة **halb**. توجد صيغ إقليمية أخرى للربع؛ في هذا الدرس نستخدم **Viertel nach/vor**.\n\nمن أسماء أجزاء اليوم: **der Morgen, der Vormittag, der Mittag, der Nachmittag, der Abend**، و**die Nacht**. لا يلزم ربطها بحدود ساعات ثابتة؛ فالاستعمال يختلف. نقول في التعابير الشائعة هنا **am Morgen/am Nachmittag/am Abend**، ونقول غالباً **in der Nacht**. وانتبه إلى الكتابة: **der Morgen** اسم «الصباح» بحرف كبير، أما **morgen** فظرف «غداً» بحرف صغير.\n\nللسؤال قل **Wie spät ist es?** أو **Wie viel Uhr ist es?**؛ ولوقت الفعل استعمل **um**: «Der Kurs beginnt um neun Uhr». وللفترة من وقت إلى آخر استعمل التركيب **von … bis …**: «Ich arbeite von acht bis sechzehn Uhr». وتفيد **gegen** معنى «نحو/قرابة» («gegen acht»)، و**ab** معنى «ابتداءً من» («ab Montag»).",
      whyAr: "معرفة الوقت تساعدك على فهم المواعيد اليومية ووصف روتينك من غير لبس. والفرق بين **halb neun** و**neun Uhr** مهم لأن الخطأ في اسم الساعة قد يغيّر الموعد نصف ساعة أو ساعة كاملة؛ لذلك نتدرّب على قراءة الوقت وكتابته في أكثر من صيغة. هذا تدريب على تعبير يومي مناسب للمستوى المبتدئ، لا ادعاء بأن موضوعاً بعينه سيظهر حتماً في اختبار محدد.",
      table: {
        title: "أوقات اليوم والأمثلة",
        columns: ["الوقت", "العربية", "مثال"],
        rows: [
          { label: "am Morgen", cells: ["صباحاً", "Ich stehe am Morgen auf."] },
          {
            label: "am Vormittag",
            cells: ["قبل الظهر", "Wir arbeiten am Vormittag."],
          },
          { label: "am Mittag", cells: ["ظهراً", "Ich esse am Mittag."] },
          {
            label: "am Nachmittag",
            cells: ["بعد الظهر", "Wir lernen am Nachmittag."],
          },
          { label: "am Abend", cells: ["مساءً", "Sie sieht am Abend fern."] },
          {
            label: "in der Nacht",
            cells: ["ليلاً", "Ich schlafe in der Nacht."],
          },
        ],
      },
      examples: [
        {
          de: "Wie spät ist es? — Es ist acht Uhr.",
          ar: "كم الساعة؟ — الثامنة.",
        },
        {
          de: "Es ist halb neun.",
          ar: "الساعة الثامنة والنصف. (لا التاسعة والنصف!)",
        },
        { de: "Es ist Viertel vor sieben.", ar: "السابعة إلا ربعاً، أي ٦:٤٥." },
        {
          de: "Der Zug fährt um sechzehn Uhr zwanzig.",
          ar: "يغادر القطار في ١٦:٢٠. (صيغة رسمية)",
        },
        {
          de: "Am Morgen trinke ich Kaffee, am Abend Tee.",
          ar: "أشرب القهوة صباحاً والشاي مساءً.",
        },
        {
          de: "In der Nacht schlafe ich schlecht.",
          ar: "أنام بصعوبة في الليل. (التعبير الشائع هنا: in der Nacht)",
        },
        {
          de: "Ich arbeite von acht bis sechzehn Uhr.",
          ar: "أعمل من الثامنة إلى الرابعة عصراً.",
        },
        {
          de: "Ich komme gegen halb acht, ist das okay?",
          ar: "آتي نحو السابعة والنصف، أيناسبك؟",
        },
      ],
      comparisonWithArabic: "في العربية نقول «الثامنة والنصف»، أي نبدأ بالساعة التي نحن فيها؛ أما **halb neun** فتسمّي الساعة التالية وتعني 8:30. لذلك لا تترجم كلمة **halb** وحدها، بل احفظ التعبير مع رقمه. كذلك تقابل «في الصباح» في هذا التركيب **am Morgen**، لا **in der Morgen**؛ بينما التعبير الشائع لليل هو **in der Nacht**. احفظ حروف الجر ضمن العبارات الكاملة، لأن المقابل العربي «في» لا يحدد وحده أي حرف ألماني تختار.",
      eselsbruecke: "**halb** تشير إلى منتصف الطريق نحو الساعة التالية: **halb neun = 8:30**. ولأجزاء اليوم احفظ العبارة كاملة: **am Morgen**, **am Abend**, **in der Nacht**. وللمدى الزمني في أمثلة الدرس: **von … bis …**.",
      commonMistakes: [
        {
          wrong: "halb neun = 9:30",
          right: "halb neun = 8:30",
          whyAr:
            "تسمّي halb الساعة التالية: halb neun تعني 8:30، أي منتصف الطريق بين الثامنة والتاسعة. احفظ مثالاً مع رقمه ولا تخلط اسم الساعة المذكورة بالساعة التي تشير إليها.",
        },
        {
          wrong: "in der Morgen",
          right: "am Morgen",
          whyAr:
            "في التعبير الشائع عن الصباح نقول am Morgen. احفظ حرف الجر مع اسم الوقت: نقول أيضاً am Abend، بينما التعبير الشائع عن الليل هو in der Nacht.",
        },
        {
          wrong: "Ich arbeite von acht zu sechzehn Uhr.",
          right: "Ich arbeite von acht bis sechzehn Uhr.",
          whyAr:
            "في هذا المثال نستخدم von … bis … لذكر بداية فترة العمل ونهايتها. أما zu فتظهر في تراكيب الاتجاه مثل Ich gehe zum Arzt أو zur Schule؛ لا نعمّم تركيباً واحداً على كل استعمالات المدى.",
        },
        {
          wrong: "Es ist acht dreißig Uhr.",
          right: "Es ist acht Uhr dreißig. / Es ist halb neun.",
          whyAr:
            "في قراءة الوقت مع الدقائق نقول مثلاً acht Uhr dreißig، أو نستعمل الصيغة اليومية halb neun. لا تقل Es ist acht dreißig Uhr في هذا التمرين؛ موضع Uhr هنا قبل الدقائق.",
        },
      ],
      relatedRuleComparison: {
        title: "am · um · in · von…bis — أدوات الزمن الأربع وكيف لا تخلطها",
        content: "احفظ تراكيب الزمن في مجموعات مع أمثلتها: **um** مع الساعة («um acht Uhr»)، و**am** مع أجزاء اليوم وأيام الأسبوع («am Morgen», «am Montag»)، و**im** مع الشهر في أمثلة مثل «im Januar». نقول **in der Nacht** في التعبير الشائع عن الليل. وللمدى نستخدم **von … bis …**، وللتقريب **gegen acht**، وللبداية **ab Montag**. هذه أنماط استعمال مفيدة وليست معادلة آلية تشمل كل تعبير زمني؛ الأفضل حفظ حرف الجر مع العبارة التي يرد فيها.",
      },
    },
    {
      id: "t3",
      titleAr: "كم مرّة؟ ظروف التكرار وموضعها في الجملة",
      titleDe: "Wie oft? Häufigkeitsadverbien",
      explanationAr: "تساعد ظروف التكرار على وصف العادات: **immer** (دائماً)، **fast immer** (تقريباً دائماً)، **meistens** (في الغالب)، **oft** (كثيراً)، **manchmal** (أحياناً)، **selten** (نادراً)، **fast nie** (نادراً جداً/تقريباً أبداً)، **nie** (أبداً). يمكن ترتيبها تقريباً من الأكثر إلى الأقل تكراراً، لكن كلمات مثل **manchmal** و**oft** لا تقابل نسبة مئوية ثابتة؛ معناها يعتمد على السياق والمتكلم.\n\nفي الجملة الرئيسية البسيطة يأتي ظرف التكرار غالباً بعد الفعل المصرف: «Ich **stehe immer** früh auf»؛ «Er **sieht selten** fern». وقد تتغير مواضع الكلمات مع الضمائر أو بقية الجملة. ويمكن تقديم الظرف للتأكيد: «**Manchmal sehe ich** fern». عند بدء الجملة بالظرف يبقى الفعل المصرف في المركز الثاني، فيأتي الفاعل بعده؛ لذلك لا نقول في الجملة الخبرية المقصودة هنا «Manchmal ich sehe fern».\n\nتعني **nie** «أبداً»، وتكفي وحدها في جملة بسيطة مثل «Ich gehe **nie** ins Kino». إذا كان هذا هو قصدك فلا تضف **nicht**؛ أما اجتماع أدوات النفي في سياقات أخرى فيتعلق بالمعنى والاستعمال، لذلك لا نعمّم قاعدة مطلقة على كل تركيب.\n\nإذا اجتمعت عدة معلومات في الجملة، فترتيب **TeKaMoLo** (زمان، سبب، كيفية، مكان) تذكيرٌ مفيد للترتيب المحايد، لا قانون جامد: «Ich fahre **jeden Morgen** mit dem Bus zur Arbeit». وقد يتغير الترتيب للتأكيد أو بحسب السياق. وأخيراً، **oft** يصف تكرار الفعل («Ich arbeite oft»)، بينما **viel** يصف كثرة العمل أو مقداره («Ich arbeite viel»).",
      whyAr: "الفرق بين ذكر فعل واحد ووصف عادة يتضح بكلمات مثل **immer** و**manchmal** و**selten**؛ فهي تجعل الحديث عن اليوم أكثر تحديداً. وتوفر هذه الكلمات فرصة عملية لمراجعة ترتيب الفعل في الجملة الرئيسية: «Manchmal sehe ich fern» يبدأ بظرف، لكن الفعل المصرف يبقى ثانياً. يستطيع المتعلم عندها التعبير عن روتين مألوف بعبارات بسيطة، من دون حفظ نسب رقمية لا تعبر عن معنى ثابت لهذه الظروف.",
      table: {
        title: "سُلَّم التكرار من الدائم إلى المعدوم",
        columns: ["الظرف", "المعنى", "مثال من يومك"],
        rows: [
          {
            label: "immer",
            cells: ["دائماً", "Ich frühstücke immer um sieben."],
          },
          {
            label: "meistens",
            cells: ["في الغالب", "Ich gehe meistens zu Fuß."],
          },
          { label: "oft", cells: ["كثيراً", "Wir kochen oft zusammen."] },
          {
            label: "manchmal",
            cells: ["أحياناً", "Ich sehe manchmal fern."],
          },
          {
            label: "selten",
            cells: ["نادراً", "Er steht selten früh auf."],
          },
          {
            label: "nie",
            cells: ["أبداً", "Ich trinke nie Kaffee am Abend."],
          },
        ],
      },
      examples: [
        {
          de: "Ich stehe immer um sechs Uhr auf.",
          ar: "أنهض دائماً في السادسة. (موضع شائع لظرف التكرار)",
        },
        {
          de: "Manchmal frühstücke ich nicht.",
          ar: "أحياناً لا أفطر. (الظرف أوّلاً ⟵ الفاعل بعد الفعل)",
        },
        {
          de: "Meine Schwester kocht oft am Abend.",
          ar: "أختي تطبخ كثيراً في المساء.",
        },
        {
          de: "Er sieht selten fern, aber er liest viel.",
          ar: "نادراً ما يشاهد التلفاز، لكنّه يقرأ كثيراً. (selten تواتر و viel مقدار)",
        },
        {
          de: "Ich gehe nie vor Mitternacht ins Bett.",
          ar: "لا أذهب إلى الفراش قبل منتصف الليل أبداً. (nie في هذه الجملة البسيطة)",
        },
        {
          de: "Ich habe montags immer Deutschunterricht.",
          ar: "لديّ درس ألماني كلّ يوم اثنين. (montags ظرف يكتب بحرف صغير)",
        },
        {
          de: "Ich fahre jeden Morgen mit dem Bus zur Arbeit.",
          ar: "أذهب إلى العمل بالحافلة كلّ صباح. (زمان ⟵ كيفية ⟵ مكان)",
        },
        {
          de: "Wie oft gehst du ins Fitnessstudio? — Zweimal pro Woche.",
          ar: "كم مرّة تذهب إلى النادي؟ — مرّتين أسبوعياً.",
        },
      ],
      comparisonWithArabic: "في العربية يمكن غالباً تقديم ظرف التكرار أو تأخيره، وقد يتغير موضع التشديد؛ وفي الألمانية يبقى الفعل المصرف في المركز الثاني في الجملة الخبرية الرئيسية، لذلك يتبعه الفاعل إذا بدأنا بظرف: «أحياناً أشاهد التلفاز» = «Manchmal **sehe ich** fern». أما **nie** فتقابل «أبداً» في هذا المثال البسيط: «Ich gehe nie ins Kino». لا يعني ذلك أن كل ترتيب آخر مستحيل؛ فالسياق والتركيز يغيّران الاختيار، كما أن ترتيب TeKaMoLo تذكير بالترتيب المحايد عند اجتماع معلومات متعددة لا حكماً على كل جملة.",
      eselsbruecke: "إذا بدأت الجملة بظرف، أبقِ الفعل المصرف في المركز الثاني: **Manchmal sehe ich …**. وفي الجملة البسيطة التي تعني «أبداً»، تكفي **nie**. تذكّر **TeKaMoLo** كترتيب محايد تقريبي لا كقاعدة لا تقبل الاستثناء.",
      commonMistakes: [
        {
          wrong: "Ich immer stehe früh auf.",
          right: "Ich stehe immer früh auf.",
          whyAr:
            "في الجملة Ich … يأتي الفعل المصرف مباشرةً بعد الفاعل ليبقى في المركز الثاني؛ لذلك نقول Ich stehe immer … ولا نضع immer قبله.",
        },
        {
          wrong: "Manchmal ich sehe fern.",
          right: "Manchmal sehe ich fern.",
          whyAr:
            "نقلٌ حرفي للترتيب العربي «أحياناً أنا أشاهد». في الجملة الرئيسية الخبرية يبدأ المثال بظرف، لذلك يأتي الفعل المصرف بعده مباشرةً ثم الفاعل: Manchmal sehe ich fern.",
        },
        {
          wrong: "Nie ich gehe ins Kino.",
          right: "Nie gehe ich ins Kino.",
          whyAr:
            "إذا بدأت الجملة الرئيسية بظرف النفي nie، يبقى الفعل المصرف في المركز الثاني ويتبعه الفاعل: Nie gehe ich … . ويمكن أيضاً قول Ich gehe nie … .",
        },
        {
          wrong: "Jeden Morgen ich fahre mit dem Bus zur Arbeit.",
          right: "Jeden Morgen fahre ich mit dem Bus zur Arbeit.",
          whyAr:
            "في الجملة الخبرية الرئيسية يأتي الفعل المصرف في المركز الثاني. عندما يبدأ المثال بظرف الزمان، نقول Jeden Morgen fahre ich …؛ لا نضع الفاعل بين الظرف والفعل.",
        },
      ],
      relatedRuleComparison: {
        title: "المركز الأوّل (Vorfeld): من يجلس فيه ولماذا؟",
        content: "في الجملة الخبرية الرئيسية يوجد موضع واحد قبل الفعل المصرف، والفعل يأتي عادةً في المركز الثاني: «Ich stehe früh auf»؛ «Jeden Tag stehe ich früh auf»؛ «Am Abend sehe ich fern». حين نضع الزمان أولاً يتبع الفاعلُ الفعلَ، لا لأن الظرف يفرض ترتيباً واحداً لكل الكلام، بل لأن الفعل المصرف يحافظ على موقعه. ويمكن تقديم مكوّن آخر للتركيز أيضاً. أمّا سؤال نعم/لا مثل «Stehst du früh auf?» فيبدأ بالفعل، فلا تخلط هذا النمط بقاعدة الجملة الخبرية.",
      },
    },
  ],

  reading: {
    id: "read-a1-05",
    titleDe: "Ein ganz normaler Dienstag",
    titleAr: "ثلاثاء عادي جداً",
    textType: "blog",
    paragraphs: [
      "Mein Name ist Tarek und ich arbeite als Krankenpfleger in einem Krankenhaus in Hamburg. Mein Tag beginnt sehr früh. Ich stehe immer um halb sechs auf, denn meine Schicht fängt um sieben Uhr an. Ich dusche schnell und ziehe mich an.",
      "Um Viertel vor sechs frühstücke ich. Meistens esse ich nur ein Brötchen mit Käse und trinke einen starken Kaffee. Manchmal habe ich keine Zeit und nehme das Brötchen einfach mit. Dann fahre ich mit der U-Bahn zur Arbeit. Die Fahrt dauert zwanzig Minuten.",
      "Im Krankenhaus ist immer viel los. Von sieben bis zwölf arbeite ich auf der Station. Um halb eins mache ich Mittagspause. Dann esse ich in der Kantine und rufe kurz meine Mutter an. Sie wohnt in Tunis und wir telefonieren fast jeden Tag.",
      "Am Nachmittag habe ich oft Besprechungen. Um sechzehn Uhr ist meine Schicht zu Ende. Ich kaufe schnell im Supermarkt ein und fahre nach Hause. Zweimal pro Woche gehe ich noch ins Fitnessstudio, aber montags bin ich immer zu müde.",
      "Am Abend koche ich und sehe ein bisschen fern. Um zehn Uhr räume ich die Küche auf und lese noch zwanzig Minuten. Ich gehe selten nach Mitternacht ins Bett, denn morgen früh klingelt der Wecker wieder um halb sechs. So ist mein Leben: anstrengend, aber ich mag meinen Beruf.",
    ],
    paragraphsAr: [
      "اسمي طارق وأعمل ممرّضاً في مستشفى بهامبورغ. يبدأ يومي باكراً جداً. أنهض دائماً في الخامسة والنصف، لأنّ نوبتي تبدأ في السابعة. أستحمّ سريعاً وأرتدي ملابسي.",
      "أفطر في السادسة إلا ربعاً. غالباً آكل خبزةً صغيرة مع الجبن وأشرب قهوةً قوية. وأحياناً لا يكون عندي وقت، فأخذ الخبزة معي. ثم أذهب إلى العمل بقطار الأنفاق. تستغرق الرحلة عشرين دقيقة.",
      "في المستشفى الحركة دائمة. أعمل في القسم من السابعة إلى الثانية عشرة. وفي الثانية عشرة والنصف آخذ استراحة الغداء. حينها آكل في المقصف وأتّصل بأمّي قليلاً. هي تسكن في تونس ونتحدّث هاتفياً كلّ يوم تقريباً.",
      "بعد الظهر عندي اجتماعات كثيرة. وفي الرابعة عصراً تنتهي نوبتي. أتسوّق سريعاً من السوبرماركت وأعود إلى البيت. وأذهب إلى النادي مرّتين أسبوعياً، لكنّني يوم الاثنين أكون متعباً جداً دائماً.",
      "في المساء أطبخ وأشاهد التلفاز قليلاً. وفي العاشرة أرتّب المطبخ وأقرأ عشرين دقيقة أخرى. نادراً ما أذهب إلى الفراش بعد منتصف الليل، لأنّ المنبّه سيرنّ غداً صباحاً في الخامسة والنصف من جديد. هكذا هي حياتي: متعبة، لكنّني أحبّ مهنتي.",
    ],
    glossary: [
      {
        de: "der Krankenpfleger",
        ar: "الممرّض",
        noteAr:
          "مركّب من krank (مريض) + Pfleger (راعٍ). والمؤنّث die Krankenpflegerin. ويُقال أيضاً die Pflegefachkraft بصيغة محايدة رسمياً.",
      },
      {
        de: "die Schicht",
        ar: "نوبة العمل",
        noteAr:
          "مؤنّثة. ومنها Frühschicht (نوبة صباحية) و Spätschicht (مسائية) و Nachtschicht (ليلية) — ومهنة التمريض قائمة عليها.",
      },
      {
        de: "das Brötchen",
        ar: "خبزة صغيرة",
        noteAr:
          "تعني قطعة خبز صغيرة لا كعكة. وهي محايدة بسبب اللاحقة ‑chen، ويبقى شكل الجمع Brötchen نفسه.",
      },
      {
        de: "die U-Bahn",
        ar: "المترو / قطار الأنفاق",
        noteAr:
          "اختصار Untergrundbahn، ومؤنّثة لأنّ die Bahn مؤنّثة. ويصحبها mit + Dativ: mit der U-Bahn fahren.",
      },
      {
        de: "die Fahrt dauert …",
        ar: "تستغرق الرحلة…",
        noteAr:
          "يصف مدّة الرحلة أو الحدث: Die Fahrt dauert 20 Minuten. ولذكر الوقت الذي يحتاجه شخص، نقول غالباً: Ich brauche 20 Minuten.",
      },
      {
        de: "Es ist viel los.",
        ar: "الحركة كثيرة / المكان مزدحم",
        noteAr:
          "تعبير ثابت شديد الشيوع. ويُسأل به أيضاً: Was ist los? = ما الأمر؟ ما الخطب؟",
      },
      {
        de: "die Mittagspause",
        ar: "استراحة الغداء",
        noteAr:
          "مؤنّثة. من التركيبات الشائعة: eine Pause machen أو eine Pause einlegen؛ لا تنقل التعبير الإنجليزي take a break حرفياً إلى nehmen.",
      },
      {
        de: "die Kantine",
        ar: "المقصف / مطعم المؤسّسة",
        noteAr:
          "تعني مطعم المؤسسة أو المقصف؛ ولا تدل الكلمة وحدها على أن الطعام مدعوم السعر.",
      },
      {
        de: "die Besprechung",
        ar: "الاجتماع",
        noteAr:
          "مؤنّثة بـ‑ung كعادة كلّ ما ينتهي بها. ومرادفها das Meeting و die Sitzung (أكثر رسمية).",
      },
      {
        de: "zu Ende sein",
        ar: "ينتهي",
        noteAr:
          "تعبير ثابت: Die Schicht ist zu Ende. ومرادفه الفعل enden أو aufhören (وهو منفصل: Es hört auf).",
      },
      {
        de: "der Wecker",
        ar: "المنبّه",
        noteAr:
          "مذكّر، من الفعل wecken (يوقظ). والفعل المصاحب: Der Wecker klingelt (يرنّ المنبّه).",
      },
      {
        de: "anstrengend",
        ar: "متعِب / مرهِق",
        noteAr:
          "صفة من الفعل sich anstrengen (يجهد نفسه). وضدّها entspannend (مريح).",
      },
    ],
    questions: [
      {
        id: "r1",
        type: "multiple-choice",
        instructionAr: "الفقرة الأولى — دقّق في الساعة:",
        questionDe: "Wann steht Tarek auf?",
        questionAr: "متى ينهض طارق؟",
        options: ["Um 6:30 Uhr", "Um 5:30 Uhr", "Um 7:00 Uhr", "Um 5:45 Uhr"],
        correctIndex: 1,
        explanation:
          "النصّ يقول Ich stehe … um halb sechs auf: اسم halb هو الساعة التالية، لذلك halb sechs تعني الخامسة والنصف (5:30).",
        optionExplanations: [
          "هذا خطأ halb الشهير: العدّ نحو الأمام لا الخلف.",
          undefined,
          "السابعة موعد بدء النوبة لا الاستيقاظ.",
          "الخامسة والنصف لا ٥:٤٥؛ و٥:٤٥ هو موعد الفطور.",
        ],
        errorType: "vocabulary",
        paragraph: 0,
      },
      {
        id: "r2",
        type: "multiple-choice",
        instructionAr: "الفقرة الثالثة — التواصل مع العائلة:",
        questionDe: "Wie oft telefoniert Tarek mit seiner Mutter?",
        questionAr: "كم مرّة يتّصل طارق بأمّه؟",
        options: [
          "Einmal pro Woche",
          "Fast jeden Tag",
          "Nie",
          "Zweimal im Monat",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «wir telefonieren fast jeden Tag». وكلمة fast (تقريباً) تخفّف المطلق، فليست كلّ يوم حرفياً بل قريباً من ذلك.",
        optionExplanations: [
          "مرّتان أسبوعياً تخصّان النادي الرياضي لا المكالمات.",
          undefined,
          "بل يتّصل يومياً تقريباً.",
          "لم يُذكر شيء شهري.",
        ],
        errorType: "vocabulary",
        paragraph: 2,
      },
      {
        id: "r3",
        type: "multiple-choice",
        instructionAr: "الفقرة الرابعة — انتبه للاستثناء:",
        questionDe: "Warum geht Tarek montags nicht ins Fitnessstudio?",
        questionAr: "لماذا لا يذهب طارق إلى النادي يوم الاثنين؟",
        options: [
          "Weil das Studio geschlossen ist",
          "Weil er dann immer zu müde ist",
          "Weil er montags arbeitet",
          "Weil er kein Geld hat",
        ],
        correctIndex: 1,
        explanation:
          "النصّ: «aber montags bin ich immer zu müde». ولاحظ الصيغة montags بحرفٍ صغير و‑s: تعني «كلّ اثنين» عادةً، لا «الاثنين القادم» الذي يُقال له am Montag.",
        optionExplanations: [
          "لم يُذكر إغلاق.",
          undefined,
          "لا يذكر النص أن العمل يوم الاثنين هو السبب؛ بل يذكر أن طارق متعب يوم الاثنين.",
          "المال لم يُذكر إطلاقاً.",
        ],
        errorType: "vocabulary",
        paragraph: 3,
      },
      {
        id: "r4",
        type: "multiple-choice",
        instructionAr: "انظر في بناء الجمل عبر النصّ:",
        questionDe: "Warum heißt es «Um Viertel vor sechs frühstücke ich»?",
        questionAr: "لماذا جاء الفاعل ich بعد الفعل في هذه الجملة؟",
        options: [
          "Weil frühstücken trennbar ist",
          "Weil die Zeitangabe auf Position 1 steht",
          "Weil es eine Frage ist",
          "Weil das Subjekt im Plural steht",
        ],
        correctIndex: 1,
        explanation:
          "بدأت الجملة بعبارة الزمن Um Viertel vor sechs، ثم جاء الفعل المصرف frühstücke؛ وهذه قاعدة V2 في الجملة الرئيسية الخبرية.",
        optionExplanations: [
          "frühstücken فعل غير منفصل أصلاً.",
          undefined,
          "الجملة خبرية لا استفهامية.",
          "ich مفرد، لذلك لا يطابق وصف الخيار للفاعل الجمع.",
        ],
        errorType: "word-order",
        paragraph: 1,
      },
      {
        id: "r5",
        type: "multiple-choice",
        instructionAr: "الفقرة الخامسة — كيف يقيّم طارق حياته؟",
        questionDe: "Wie findet Tarek sein Leben?",
        questionAr: "كيف يرى طارق حياته؟",
        options: [
          "Langweilig und einfach",
          "Anstrengend, aber er mag seinen Beruf",
          "Er möchte den Beruf wechseln",
          "Er hat zu viel Freizeit",
        ],
        correctIndex: 1,
        explanation:
          "الجملة الأخيرة: «anstrengend, aber ich mag meinen Beruf». والرابط aber يقيم توازناً بين الجهد والرضا — وهو نمطٌ تعبيري مفيد لوصف أيّ عمل.",
        optionExplanations: [
          "وصفها بالمتعبة لا المملّة.",
          undefined,
          "لم يذكر رغبةً في التغيير بل حبّاً للمهنة.",
          "يومه مزدحم من ٥:٣٠ إلى ما بعد العاشرة.",
        ],
        errorType: "vocabulary",
        paragraph: 4,
      },
    ],
    redemittel: [
      {
        de: "Mein Tag beginnt um halb sechs. Ich stehe immer früh auf.",
        ar: "يبدأ يومي في الخامسة والنصف. أنهض دائماً باكراً.",
      },
      {
        de: "Meine Schicht fängt um sieben Uhr an und ist um sechzehn Uhr zu Ende.",
        ar: "تبدأ نوبتي في السابعة وتنتهي في الرابعة.",
      },
      {
        de: "Ich fahre mit der U-Bahn zur Arbeit. Die Fahrt dauert zwanzig Minuten.",
        ar: "أذهب إلى العمل بالمترو. تستغرق الرحلة عشرين دقيقة.",
      },
      {
        de: "Meistens frühstücke ich, aber manchmal habe ich keine Zeit.",
        ar: "غالباً أفطر، لكن أحياناً لا وقت لديّ.",
      },
      {
        de: "Zweimal pro Woche gehe ich ins Fitnessstudio.",
        ar: "أذهب إلى النادي مرّتين أسبوعياً.",
      },
      {
        de: "Am Abend sehe ich fern und gehe selten nach Mitternacht ins Bett.",
        ar: "في المساء أشاهد التلفاز ونادراً ما أذهب إلى الفراش بعد منتصف الليل.",
      },
    ],
    discussionAr:
      "اكتب أو قل ثلاثاً أو أربع جمل قصيرة عن يوم عادي: اذكر نشاطاً صباحاً وآخر مساءً، واستعمل فعلاً منفصلاً ووقتاً أو ظرف تكرار. يمكنك اختيار الأوقات والأنشطة التي تناسبك.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "يوم سامي",
        lines: [
          {
            speaker: "Sami",
            de: "Ich stehe am Morgen um sechs Uhr auf.",
            ar: "أنهض صباحاً في السادسة.",
          },
          {
            speaker: "Sami",
            de: "Dann frühstücke ich um halb sieben.",
            ar: "ثم أتناول الفطور في السادسة والنصف.",
          },
          {
            speaker: "Sami",
            de: "Um acht Uhr fange ich mit der Arbeit an.",
            ar: "في الثامنة أبدأ العمل.",
          },
          {
            speaker: "Sami",
            de: "Um zwölf Uhr esse ich zu Mittag.",
            ar: "أتناول الغداء في الثانية عشرة.",
          },
          {
            speaker: "Sami",
            de: "Am Abend sehe ich fern oder lese ein Buch.",
            ar: "مساءً أشاهد التلفاز أو أقرأ كتاباً.",
          },
        ],
      },
      {
        id: "l2",
        title: "أسئلة عن اليوم",
        lines: [
          { speaker: "Mona", de: "Wann stehst du auf?", ar: "متى تنهض؟" },
          {
            speaker: "Karim",
            de: "Ich stehe um sieben Uhr auf.",
            ar: "أنهض في السابعة.",
          },
          {
            speaker: "Mona",
            de: "Und was machst du am Abend?",
            ar: "وماذا تفعل مساءً؟",
          },
          {
            speaker: "Karim",
            de: "Ich räume das Zimmer auf und sehe fern.",
            ar: "أرتّب الغرفة وأشاهد التلفاز.",
          },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann steht Sami auf?",
        questionAr: "متى ينهض سامي؟",
        options: [
          "um sechs Uhr",
          "um sieben Uhr",
          "um acht Uhr",
          "um zwölf Uhr",
        ],
        correctIndex: 0,
        explanation:
          "قال: Ich stehe am Morgen um sechs Uhr auf — السادسة صباحاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Sami am Abend?",
        questionAr: "ماذا يفعل سامي مساءً؟",
        options: [
          "fernsehen oder lesen",
          "arbeiten",
          "frühstücken",
          "schlafen",
        ],
        correctIndex: 0,
        explanation: "قال: Am Abend sehe ich fern oder lese ein Buch.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann steht Karim auf?",
        questionAr: "متى ينهض كريم؟",
        options: [
          "um sieben Uhr",
          "um sechs Uhr",
          "um neun Uhr",
          "um halb acht",
        ],
        correctIndex: 0,
        explanation: "قال كريم: Ich stehe um sieben Uhr auf.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات اليوم: st، ch، وü",
    items: [
      {
        de: "aufstehen",
        ar: "ينهض من الفراش",
        note: "في بداية المقطع stehen يُنطق st في الألمانية القياسية /ʃt/ تقريباً «شت»",
      },
      {
        de: "frühstücken",
        ar: "يتناول الفطور",
        note: "ü في früh طويلة /yː/، وفي Stück قصيرة /ʏ/؛ وst في بداية Stück يُنطق /ʃt/ في الألمانية القياسية",
      },
      { de: "die Nacht", ar: "الليل", note: "ch بعد a صوت احتكاكي خلفي /x/، قريب من خ العربية" },
      { de: "der Morgen", ar: "الصباح", note: "في نطق شائع [ˈmɔʁɡn̩]؛ تختلف أصوات r باختلاف اللهجة" },
      {
        de: "fernsehen",
        ar: "يشاهد التلفاز",
        note: "في بداية المقطع في sehen يُنطق s غالباً /z/ في الألمانية القياسية؛ ليس السبب وقوعه بين حرفَي علة",
      },
      {
        de: "das Frühstück",
        ar: "الفطور",
        note: "في Frühstück، ü الأولى طويلة /yː/ والثانية قصيرة /ʏ/؛ انتبه إلى فرق طول الحركة",
      },
    ],
    tip: "Morgen اسم بمعنى الصباح فيُكتب بحرف كبير؛ أما morgen فظرف بمعنى غداً ويُكتب بحرف صغير.",
    shadowing: [
      {
        de: "Ich stehe um sechs Uhr auf.",
        ar: "أنهض في السادسة.",
        tip: "auf في نهاية الجملة — هذا هو «الذيل»!",
      },
      {
        de: "Wir sehen am Abend fern.",
        ar: "نشاهد التلفاز مساءً.",
        tip: "fern في النهاية أيضاً",
      },
      {
        de: "Ich räume das Zimmer auf.",
        ar: "أرتّب الغرفة.",
        tip: "äu في räume تُنطق /ɔʏ̯/ تقريباً؛ استمع إلى الحركة المركبة في النموذج",
      },
      {
        de: "Der Kurs fängt um neun an.",
        ar: "الدورة تبدأ في التاسعة.",
        tip: "ä في fängt حركة قصيرة قريبة من /ɛ/؛ وتأتي البادئة an في نهاية الجملة",
      },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اختر ساعة من الخيارات واكتب جملة كاملة عن وقت نهوضك:",
      prompt: "Wann stehst du auf? (Wähle: 6, 7 oder 8 Uhr. / اختر: 6 أو 7 أو 8)",
      acceptedAnswers: [
        "Ich stehe um sieben Uhr auf",
        "Ich stehe um sechs Uhr auf",
        "Ich stehe um acht Uhr auf",
        "Ich stehe um 6 Uhr auf",
        "Ich stehe um 7 Uhr auf",
        "Ich stehe um 8 Uhr auf",
      ],
      sampleAnswer: "Ich stehe um sieben Uhr auf.",
      explanation:
        "البنية: Ich stehe (فعل متصرف) + um + ساعة + auf (البادئة في النهاية).",
      errorType: "word-order",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالبادئة الصحيحة (auf/fern/an/ein):",
      template:
        "Ich stehe um 7 ___. Wir sehen abends ___. Der Kurs fängt um 9 ___. Sie kauft heute ___.",
      blanks: [
        { correct: "auf", options: ["auf", "fern", "an", "ein"] },
        { correct: "fern", options: ["auf", "fern", "an", "ein"] },
        { correct: "an", options: ["auf", "fern", "an", "ein"] },
        { correct: "ein", options: ["auf", "fern", "an", "ein"] },
      ],
      explanation:
        "aufstehen (استيقظ) + fernsehen (تلفاز) + anfangen (يبدأ) + einkaufen (تسوق).",
      errorType: "vocabulary",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich stehe am Morgen um halb sieben auf.",
      explanation: "أنهض صباحاً في السادسة والنصف — halb sieben تعني 6:30.",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "fill-blank",
      instructionAr: "أكمل الدقائق بالألمانية وفق الوقت بين القوسين:",
      template: "Es ist ___ nach acht. (8:05) · Es ist ___ vor neun. (8:40).",
      blanks: [
        { correct: "fünf", options: ["fünf", "zehn", "zwanzig"] },
        { correct: "zwanzig", options: ["fünf", "zwanzig", "vierzig"] },
      ],
      explanation: "fünf nach acht = 8:05، وzwanzig vor neun = 8:40.",
      errorType: "vocabulary",
    },
    {
      id: "w5",
      type: "fill-blank",
      instructionAr: "أكمل كل وقت من أوقات اليوم بحرف الجر المناسب:",
      template: "___ Morgen stehe ich auf. ___ Nachmittag lerne ich Deutsch. ___ Abend sehe ich fern.",
      blanks: [
        { correct: "Am", options: ["Am", "Um", "Im"] },
        { correct: "Am", options: ["Am", "Um", "Im"] },
        { correct: "Am", options: ["Am", "Um", "Im"] },
      ],
      explanation: "في هذه التعابير نقول am Morgen، am Nachmittag، am Abend.",
      errorType: "preposition",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ um sieben Uhr ___. (aufstehen)",
      questionAr: "أنهض في السابعة.",
      options: [
        "stehe ... auf",
        "aufstehe ...",
        "stehe auf ...",
        "auf ... stehe",
      ],
      correctIndex: 0,
      explanation:
        "الفعل المتصرف stehe في المركز الثاني، والبادئة auf في النهاية: Ich stehe ... auf.",
      errorType: "word-order",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر المعنى الصحيح:",
      questionDe: "Es ist halb neun.",
      questionAr: "كم الساعة؟",
      options: ["8:30", "9:30", "9:00", "8:00"],
      correctIndex: 0,
      explanation: "halb neun = نصف الطريق إلى التاسعة = 8:30.",
      errorType: "vocabulary",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بمعناه:",
      pairs: [
        { left: "aufstehen", right: "ينهض من الفراش" },
        { left: "fernsehen", right: "يشاهد التلفاز" },
        { left: "einkaufen", right: "يتسوق" },
        { left: "anfangen", right: "يبدأ" },
      ],
      explanation:
        "أفعال يومية منفصلة: auf + stehen، fern + sehen، ein + kaufen، an + fangen.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه للبادئة في النهاية):",
      tokens: ["um", "sieben", "stehe", "Ich", "auf", "Uhr", "."],
      correctSentence: "Ich stehe um sieben Uhr auf.",
      explanation: "Ich + stehe (V2) + um sieben Uhr + auf (ذيل الفعل).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich stehe um sieben Uhr aus.",
      wrongWord: "aus",
      correctWord: "auf",
      options: ["auf", "aus", "an", "ab"],
      explanation:
        "اختيار البادئة يغيّر معنى الفعل؛ في هذا السياق الصحيح هو aufstehen: Ich stehe um sieben Uhr auf.",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالتركيب الزمني المناسب: am أو um أو in der:",
      template:
        "Ich esse ___ Mittag. Der Kurs beginnt ___ neun Uhr. Wir schlafen ___ Nacht.",
      blanks: [
        { correct: "am", options: ["am", "um"] },
        { correct: "um", options: ["am", "um"] },
        { correct: "in der", options: ["in der", "am", "um"] },
      ],
      explanation:
        "am + أوقات اليوم (am Mittag)، um + ساعات (um neun)، in der Nacht للّيل.",
      errorType: "preposition",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال:",
      prompt: "Du stehst um sieben Uhr auf. → ؟",
      acceptedAnswers: [
        "Stehst du um sieben Uhr auf",
        "Stehst du um sieben Uhr auf?",
      ],
      sampleAnswer: "Stehst du um sieben Uhr auf?",
      explanation:
        "سؤال نعم/لا: Stehst (فعل متصرف) أولاً، والبادئة auf في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wann stehst du auf?",
      questionAr: "ما معنى السؤال؟",
      options: ["متى تنهض؟", "أين تعمل؟", "ماذا تأكل؟", "كم الساعة؟"],
      correctIndex: 0,
      explanation: "Wann = متى، وaufstehen هنا تعني النهوض من الفراش.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Es ist halb sieben = 7:30.",
      wrongWord: "7:30",
      correctWord: "6:30",
      options: ["6:30", "7:30", "7:00", "6:00"],
      explanation: "halb sieben = نصف الطريق إلى السابعة = 6:30!",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Am Abend sehe ich fern.",
      explanation: "مساءً أشاهد التلفاز — fern في نهاية الجملة.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالحرف الصحيح (von / bis / um / am):",
      instructionDe: "Ergänze: von, bis, um, am",
      template:
        "Ich arbeite ___ acht ___ sechzehn Uhr. · ___ Morgen stehe ich ___ sieben auf.",
      blanks: [
        { correct: "von", options: ["von", "bis", "um", "am"] },
        { correct: "bis", options: ["bis", "von", "um", "am"] },
        { correct: "Am", options: ["Am", "Um", "Von", "Bis"] },
        { correct: "um", options: ["um", "am", "von", "bis"] },
      ],
      hint: "von … bis = مدى زمني. am + وقت اليوم. um + ساعة.",
      explanation:
        "von 8 bis 16 Uhr (مدى) + Am Morgen (وقت اليوم) + um sieben (ساعة).",
      errorType: "preposition",
      points: 2,
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر الترتيب الصحيح:",
      questionDe: "___ (أنهض دائماً في السادسة)",
      questionAr: "أي جملة صحيحة؟",
      options: [
        "Ich stehe immer um sechs auf.",
        "Ich immer stehe um sechs auf.",
        "Immer ich stehe um sechs auf.",
        "Ich stehe um immer sechs auf.",
      ],
      correctIndex: 0,
      explanation:
        "الصياغة المحايدة هنا: Ich stehe immer um sechs auf. والفعل المصرف في المركز الثاني، والبادئة في نهاية الجملة.",
      optionExplanations: [
        undefined,
        "في الجملة الخبرية الرئيسية يأتي الفعل المصرف في المركز الثاني.",
        "إذا بدأنا بـ Immer نقول Immer stehe ich … ليبقى الفعل في المركز الثاني.",
        "لا تأتي immer داخل تركيب الساعة um sechs في هذا المثال.",
      ],
      errorType: "word-order",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بظرف التكرار الذي يناسب المعنى بين القوسين:",
      template:
        "Ich trinke ___ Kaffee (دائماً). Wir kochen ___ zusammen (أحياناً). Er kommt ___ zu spät (أبداً).",
      blanks: [
        { correct: "immer", options: ["immer", "nie", "selten"] },
        { correct: "manchmal", options: ["manchmal", "immer", "nie"] },
        { correct: "nie", options: ["nie", "oft", "meistens"] },
      ],
      explanation:
        "immer تعني دائماً، manchmal أحياناً، وnie أبداً. تأتي ظروف التكرار غالباً بعد الفعل المصرف، وقد يتغير موضعها بحسب بنية الجملة والتأكيد.",
      errorType: "vocabulary",
    },
    {
      id: "e14",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Manchmal ich gehe früh ins Bett.",
      wrongWord: "ich gehe",
      correctWord: "gehe ich",
      options: ["gehe ich", "ich gehe", "ich gehen", "geht ich"],
      explanation:
        "في الجملة الخبرية الرئيسية يحافظ الفعل المصرف على المركز الثاني: Manchmal gehe ich …",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Meine", "Schwester", "kocht", "oft", "am", "Abend", "."],
      correctSentence: "Meine Schwester kocht oft am Abend.",
      explanation:
        "الفاعل (Meine Schwester) ثم الفعل (kocht) ثم التكرار (oft) ثم الوقت (am Abend).",
      errorType: "word-order",
    },
    {
      id: "e16",
      type: "transformation",
      instructionAr:
        "أعد صياغة الجملة بادئاً بظرف التكرار (انتبه لموضع الفعل).",
      prompt: "Ich sehe manchmal fern. → ابدأ الجملة بـ Manchmal.",
      acceptedAnswers: ["Manchmal sehe ich fern."],
      sampleAnswer: "Manchmal sehe ich fern.",
      explanation:
        "تقديم الظرف يستدعي قلب الفاعل والفعل: Manchmal sehe ich fern — والفعل يبقى في المركز الثاني.",
      errorType: "word-order",
    },
    {
      id: "e17",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات مراعياً موضع البادئة:",
      tokens: ["Ich", "rufe", "dich", "heute", "Abend", "an", "."],
      correctSentence: "Ich rufe dich heute Abend an.",
      explanation:
        "anrufen فعل منفصل: الفعل المصرَّف rufe في المركز الثاني، والبادئة an في آخر الجملة بعد المفعول وظرف الزمان.",
      errorType: "word-order",
    },
    {
      id: "e18",
      type: "multiple-choice",
      instructionAr: "كم الساعة إذا قيل halb acht؟",
      questionDe: "Wie viel Uhr ist halb acht?",
      questionAr: "ما الوقت المقصود بـ halb acht؟",
      options: ["8:30", "7:30", "8:00", "7:00"],
      correctIndex: 1,
      explanation:
        "في halb acht يُسمّى الوقت باسم الساعة التالية: المقصود 7:30، أي منتصف الطريق من السابعة إلى الثامنة.",
      optionExplanations: [
        "هذا هو الخطأ الشائع: العدّ من الساعة الماضية على الطريقة العربية.",
        undefined,
        "الثامنة تماماً تُقال acht Uhr.",
        "السابعة تماماً تُقال sieben Uhr.",
      ],
      errorType: "vocabulary",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح حرف المدى الزمني:",
      wrongSentence: "Ich arbeite von acht zu sechzehn Uhr.",
      wrongWord: "zu",
      correctWord: "bis",
      options: ["bis", "nach", "für", "seit"],
      explanation:
        "في هذا المثال نستخدم von … bis … لذكر بداية العمل ونهايته. أما zu فتظهر في تراكيب الاتجاه مثل Ich gehe zum Arzt.",
      errorType: "preposition",
    },
    {
      id: "e20",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الزمن الصحيح:",
      template:
        "___ Morgen trinke ich Kaffee, aber ___ der Nacht trinke ich Tee.",
      blanks: [
        { correct: "Am", options: ["Am", "Im", "In", "Um"] },
        { correct: "in", options: ["in", "am", "um", "von"] },
      ],
      explanation:
        "في المثالين نقول Am Morgen وin der Nacht؛ احفظ حرف الجر مع كل تعبير زمني.",
      errorType: "preposition",
    },
    {
      id: "e21",
      type: "transformation",
      instructionAr: "أعد بناء الجملة مبتدئاً بظرف التكرار:",
      prompt: "Ich gehe selten ins Kino. (ابدأ بـ Selten)",
      acceptedAnswers: [
        "Selten gehe ich ins Kino.",
        "Selten gehe ich ins Kino",
      ],
      sampleAnswer: "Selten gehe ich ins Kino.",
      explanation:
        "تقديم الظرف إلى المركز الأوّل يوجب بقاء الفعل في المركز الثاني، فينزاح الفاعل بعده: Selten gehe ich…",
      errorType: "word-order",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      {
        wrong: "Ich aufstehe um 7.",
        right: "Ich stehe um 7 auf.",
        whyAr: "في الجملة الخبرية الرئيسية البسيطة يأتي الفعل المصرف ثانياً، وتظهر البادئة المنفصلة في النهاية.",
      },
      {
        wrong: "halb sieben = 7:30",
        right: "halb sieben = 6:30",
        whyAr: "halb = نصف الطريق إلى الرقم التالي.",
      },
      {
        wrong: "am Nacht",
        right: "in der Nacht",
        whyAr: "في هذا التعبير الشائع نقول in der Nacht.",
      },
    ],
    eselsbruecken: [
      "«ذيل الفعل المنفصل في النهاية»: Ich stehe ... auf — كأنك «تغلق» الجملة بالبادئة.",
      "يسمّي halb الساعة التالية: halb acht = 7:30، وhalb zehn = 9:30.",
    ],
    culturalNote: {
      title: "التعبير عن المواعيد",
      content:
        "لذكر موعد محدد استخدم um مع الساعة: Der Termin ist um acht Uhr. ولوقت تقريبي يمكنك قول gegen acht. إذا توقعت التأخر عن موعد، أخبر الشخص واعتذر: Entschuldigung für die Verspätung! تختلف الأعراف باختلاف الأشخاص والمواقف، لذلك لا نعمّم صفة قومية.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir ___ am Abend ___. (fernsehen)",
      options: [
        "sehen ... fern",
        "fernsehen ...",
        "sehen fern ...",
        "seht ... fern",
      ],
      correctIndex: 0,
      explanation: "Wir sehen am Abend fern — الفعل sehen + fern في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الوقت الصحيح:",
      questionDe: "Es ist halb acht.",
      options: ["7:30", "8:30", "8:00", "7:00"],
      correctIndex: 0,
      explanation: "halb acht = 7:30 (نصف الطريق إلى الثامنة).",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["fängt", "Der", "Kurs", "um", "an", "neun", "Uhr", "."],
      correctSentence: "Der Kurs fängt um neun Uhr an.",
      explanation:
        "الدورة تبدأ في التاسعة: Der Kurs + fängt + um neun Uhr + an.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich steht um halb sieben auf.",
      wrongWord: "steht",
      correctWord: "stehe",
      options: ["stehe", "stehst", "stehen", "stand"],
      explanation:
        "مع ich نصرّف الفعل إلى stehe: Ich stehe um halb sieben auf؛ وتبقى البادئة auf في نهاية الجملة.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات (am/um/auf):",
      template: "Ich stehe ___ halb sieben ___. Wir frühstücken ___ Morgen.",
      blanks: [
        { correct: "um", options: ["um", "am", "auf"] },
        { correct: "auf", options: ["um", "am", "auf"] },
        { correct: "am", options: ["um", "am", "auf"] },
      ],
      explanation: "um + ساعة، auf ذيل الفعل، am Morgen صباحاً.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    {
      id: "fc1",
      de: "aufstehen",
      ar: "ينهض من الفراش",
      example: "Ich stehe um sieben auf.",
      exampleAr: "أنهض في السابعة.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "frühstücken",
      ar: "يتناول الفطور",
      example: "Wir frühstücken am Morgen.",
      exampleAr: "نتناول الفطور صباحاً.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "fernsehen",
      ar: "يشاهد التلفاز",
      example: "Am Abend sehe ich fern.",
      exampleAr: "مساءً أشاهد التلفاز.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "einkaufen",
      ar: "يتسوق",
      example: "Sie kauft heute ein.",
      exampleAr: "تتسوق اليوم.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "anfangen",
      ar: "يبدأ",
      example: "Der Kurs fängt um neun an.",
      exampleAr: "الدورة تبدأ في التاسعة.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "der Morgen / der Abend",
      ar: "الصباح / المساء",
      example: "Am Morgen und am Abend.",
      exampleAr: "صباحاً ومساءً.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "die Uhrzeit",
      ar: "الوقت",
      example: "Wie spät ist es?",
      exampleAr: "كم الساعة؟",
      level: "A1",
    },
    {
      id: "fc8",
      de: "halb",
      ar: "نصف (الطريق إلى الساعة التالية)",
      example: "halb acht = 7:30",
      exampleAr: "السابعة والنصف (halb acht) = 7:30",
      level: "A1",
    },
    {
      id: "fc9",
      de: "immer / oft / manchmal / nie",
      ar: "دائماً / كثيراً / أحياناً / أبداً",
      example: "Ich stehe immer früh auf.",
      exampleAr: "أنهض دائماً باكراً.",
      level: "A1",
    },
    {
      id: "fc10",
      de: "Wie oft …?",
      ar: "كم مرّة …؟",
      example: "Wie oft gehst du ins Kino?",
      exampleAr: "كم مرّة تذهب إلى السينما؟",
      level: "A1",
    },
    {
      id: "fc11",
      de: "halb neun = 8:30",
      ar: "الثامنة والنصف (العدّ نحو الأمام!)",
      example: "Wir treffen uns um halb neun.",
      exampleAr: "نلتقي في الثامنة والنصف.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "Viertel nach / Viertel vor",
      ar: "والربع / إلا ربعاً (في تعبيرات الساعة)",
      example: "Es ist Viertel vor sieben.",
      exampleAr: "السابعة إلا ربعاً.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "in der Nacht",
      ar: "في الليل (تعبير شائع)",
      example: "In der Nacht schlafe ich schlecht.",
      exampleAr: "أنام سيّئاً في الليل.",
      level: "A1",
    },
    {
      id: "fc14",
      de: "montags / abends",
      ar: "كلّ اثنين / كلّ مساء (بحرف صغير)",
      example: "Ich habe montags immer Deutschunterricht.",
      exampleAr: "لديّ درس ألماني كلّ يوم اثنين.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "anrufen / abholen / mitnehmen",
      ar: "يتّصل / يذهب ليصطحب أو يجلب / يأخذ معه",
      example: "Ich rufe dich morgen an.",
      exampleAr: "سأتّصل بك غداً.",
      level: "A1",
    },
    {
      id: "fc16",
      de: "der Wecker klingelt",
      ar: "يرنّ المنبّه",
      example: "Der Wecker klingelt um halb sechs.",
      exampleAr: "يرنّ المنبّه في الخامسة والنصف.",
      level: "A1",
    },
    {
      id: "fc17",
      de: "duschen",
      ar: "يستحمّ",
      example: "Ich dusche jeden Morgen.",
      exampleAr: "أستحمّ كلّ صباح.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "schnell",
      ar: "بسرعة، سريع",
      example: "Ich frühstücke schnell.",
      exampleAr: "أتناول الفطور بسرعة.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "die Minute",
      ar: "الدقيقة",
      example: "Der Weg dauert zwanzig Minuten.",
      exampleAr: "الطريق يستغرق عشرين دقيقة.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "dauern",
      ar: "يستغرق (وقتاً)",
      example: "Wie lange dauert das?",
      exampleAr: "كم يستغرق هذا؟",
      level: "A1",
    },
    {
      id: "fc21",
      de: "das Krankenhaus",
      ar: "المستشفى",
      example: "Ich arbeite in einem Krankenhaus.",
      exampleAr: "أعمل في مستشفى.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "früh",
      ar: "مبكّراً",
      example: "Ich stehe sehr früh auf.",
      exampleAr: "أنهض مبكّراً جداً.",
      level: "A1",
    },
  ],

  /* ═══ الوساطة والتفاعل اللغوي ═══ */
  mediation: [
    {
      id: "med-a1-05-1",
      type: "relay-instructions",
      titleAr: "انقل جدول يومي بالعربية لصديق",
      sourceDe:
        "Ich stehe um 6 Uhr auf. Ich frühstücke um 7 Uhr. Um 8 Uhr beginne ich zu arbeiten. Am Abend sehe ich fern.",
      taskAr: "أخبر صديقاً بالعربية عن روتين الشخص اليومي مع الأوقات بدقة.",
      modelAnswerAr:
        "«ينهض في السادسة، يفطر في السابعة، يبدأ العمل في الثامنة، وفي المساء يشاهد التلفاز.»",
      keyPointsAr: [
        "نقلت وقت النهوض والإفطار",
        "ذكرت بداية العمل (8)",
        "نقلت نشاط المساء",
      ],
    },
  ],
  interaction: [
    {
      id: "int-a1-05-1",
      scenarioAr: "صديق ألماني يسأل عن يومك.",
      scenarioDe: "Ein deutscher Freund fragt nach deinem Tag.",
      strategyAr: "الاستراتيجية: وصف الروتين اليومي بالأوقات.",
      rounds: [
        {
          speakerDe: "Wann stehst du morgens auf?",
          speakerAr: "متى تنهض صباحاً؟",
          options: [
            {
              de: "Ich stehe um 7 Uhr auf.",
              ar: "أنهض في السابعة.",
              best: true,
              replyDe: "Und was machst du danach?",
              replyAr: "وماذا تفعل بعد ذلك؟",
            },
            {
              de: "Ich aufstehe um 7 Uhr.",
              ar: "أنهض في السابعة.",
              best: false,
              replyDe: "In diesem Hauptsatz steht das konjugierte Verb an zweiter Stelle: Ich stehe um 7 Uhr auf.",
              replyAr: "في هذه الجملة الخبرية يأتي الفعل المصرف في المركز الثاني: Ich stehe um 7 Uhr auf.",
            },
          ],
        },
        {
          speakerDe: "Was machst du am Abend?",
          speakerAr: "ماذا تفعل في المساء؟",
          options: [
            {
              de: "Ich sehe fern oder lese ein Buch.",
              ar: "أشاهد التلفاز أو أقرأ كتاباً.",
              best: true,
              replyDe: "Das klingt entspannt!",
              replyAr: "يبدو مريحاً!",
            },
            {
              de: "Ich sehe fern oder lesen ein Buch.",
              ar: "أشاهد التلفاز أو أقرأ كتاباً.",
              best: false,
              replyDe: "Bei ich heißt es lese: Ich sehe fern oder lese ein Buch.",
              replyAr: "مع ich نصرّف الفعل إلى lese: Ich sehe fern oder lese ein Buch.",
            },
          ],
        },
      ],
    },
  ],
};
