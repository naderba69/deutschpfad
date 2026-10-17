/**
 * a2-02 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a2-02.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الأكثر شيوعاً في التعبير اليومي:",
      questionDe: "Welche Form ist in der üblichen Wendung „Ich habe ___“ am gebräuchlichsten?",
      questionAr: "أي صيغة هي الأكثر شيوعاً في التعبير عن الصداع؟",
      options: [
        "Kopfschmerzen",
        "Kopfschmerzern",
        "Kopfschmerzenen",
        "Kopfschmerzten",
      ],
      correctIndex: 0,
      explanation: "Kopfschmerzen هي الصيغة المعتادة في هذا التعبير؛ يذكر Duden أن المفرد Kopfschmerz موجود أيضاً، لذا لا نقول إن الجمع هو الصورة الوحيدة.",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen الصحيح:",
      questionDe: "Du ___ dich ausruhen.",
      options: ["sollst", "soll", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع du: sollst.",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل جزء الجسم بمعناه:",
      pairs: [
        { left: "der Kopf", right: "الرأس" },
        { left: "das Auge", right: "العين" },
        { left: "der Bauch", right: "البطن" },
        { left: "der Rücken", right: "الظهر" },
      ],
      explanation: "أربعة أجزاء أساسية — احفظها مع أدواتها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["dich", "Du", "sollst", "ausruhen", "."],
      correctSentence: "Du sollst dich ausruhen.",
      explanation: "في الجملة الرئيسية يأتي الفعل المصرف في الموقع الثاني، ويأتي مصدر sollen في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الكلمة الخاطئة في الجملة:",
      wrongSentence: "Ich bin Kopfschmerzen.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "soll", "werde"],
      explanation: "في التعبير المعتاد عن Kopfschmerzen نستخدم haben: Ich habe Kopfschmerzen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالعضو الصحيح (Auge/Ohr/Hand/Fuß):",
      template:
        "Ich sehe mit dem ___. Ich höre mit dem ___. Ich schreibe mit der ___.",
      blanks: [
        { correct: "Auge", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Ohr", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Hand", options: ["Auge", "Ohr", "Hand", "Fuß"] },
      ],
      explanation: "أرى بالعين، أسمع بالأذن، أكتب باليد.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "أعطِ نصيحة باستخدام sollen:",
      prompt: "Er ist krank. → (يجب أن يستريح)",
      acceptedAnswers: ["Er soll sich ausruhen", "Er soll sich ausruhen."],
      sampleAnswer: "Er soll sich ausruhen.",
      explanation: "النصيحة: Er soll + الفعل الأساسي في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Was fehlt Ihnen?",
      questionAr: "ما معنى السؤال؟",
      options: ["ما شكواك؟", "كم عمرك؟", "ما اسمك؟", "أين يؤلمك؟"],
      correctIndex: 0,
      explanation:
        "Was fehlt Ihnen? سؤال عن الشكوى؛ الترجمة الوظيفية «ما شكواك؟» أنسب من بناء المعنى على الترجمة الحرفية.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح تصريف الفعل في الجملة:",
      wrongSentence: "Ich sollst im Bett bleiben.",
      wrongWord: "sollst",
      correctWord: "soll",
      options: ["soll", "sollst", "sollt", "sollen"],
      explanation: "في المثال، الفاعل ich؛ لذلك الصيغة هي soll. أما sollst فتُستعمل مع du.",
      errorType: "conjugation",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Du sollst nicht so viel arbeiten.",
      explanation: "يجب ألا تعمل كثيراً — nicht قبل الفعل الأساسي.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "أي صيغة ألمانية شائعة للتعبير عن الغثيان؟",
      questionDe: "Ihnen ist übel. Was können Sie im Alltag sagen?",
      options: [
        "Mir ist schlecht.",
        "Ich bin schlecht.",
        "Ich habe schlecht.",
        "Mich ist schlecht.",
      ],
      correctIndex: 0,
      explanation:
        "Mir ist schlecht صيغة شائعة للغثيان؛ mir هنا Dativ ألمانية. Ich bin schlecht جملة سليمة في معانٍ أخرى بحسب السياق، لكنها ليست الصيغة المحايدة لهذا الإحساس.",
      errorType: "case",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الصحيح (انتبه إلى الإفراد والجمع)",
      template: "Mein Rücken ___ weh. · Meine Augen ___ weh.",
      blanks: [
        {
          correct: "tut",
          options: ["tut", "tun", "tue", "tuen"],
          errorType: "conjugation",
        },
        {
          correct: "tun",
          options: ["tun", "tut", "tue", "tuet"],
          errorType: "conjugation",
        },
      ],
      explanation:
        "Rücken مفرد ⟵ tut، وAugen جمع ⟵ tun. والعبارة تُصرَّف ولا تُحفظ كتلةً جامدة.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "أي جملة تعبّر صراحةً عن عدم الإذن بالتدخين؟",
      questionDe: "In der Praxis ist Rauchen verboten. Welche Aussage passt?",
      options: [
        "Sie dürfen nicht rauchen.",
        "Sie müssen nicht rauchen.",
        "Sie dürfen rauchen.",
        "Sie sollten nicht rauchen.",
      ],
      correctIndex: 0,
      explanation:
        "dürfen nicht يعبّر عن منع/عدم إذن في هذا السياق. müssen nicht يعني أن الفعل غير لازم، وsollten nicht نصيحةً لا حظراً بذاتها.",
      errorType: "negation",
    },
    {
      id: "e14",
      type: "multiple-choice",
      instructionAr: "ماذا تعني: «Sie müssen nicht wiederkommen»؟",
      questionDe: "Was bedeutet „Sie müssen nicht wiederkommen“?",
      options: [
        "ليس ضرورياً أن تعود (لكن يجوز)",
        "ممنوعٌ عليك العودة إلى العمل",
        "يجب أن تعود غداً صباحاً",
        "عليك العودة حتماً في الصباح",
      ],
      correctIndex: 0,
      explanation:
        "نفي الوجوب إعفاء لا منع. والمنع بـnicht dürfen: «Sie dürfen nicht wiederkommen».",
      errorType: "negation",
    },
    {
      id: "e15",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير الانعكاسيّ الصحيح",
      template:
        "Ich fühle ___ besser. · Er fühlt ___ nicht gut. · Wir haben ___ gut erholt.",
      blanks: [
        {
          correct: "mich",
          options: ["mich", "mir", "sich", "dich"],
          errorType: "pronoun",
        },
        {
          correct: "sich",
          options: ["sich", "mich", "ihn", "ihm"],
          errorType: "pronoun",
        },
        {
          correct: "uns",
          options: ["uns", "sich", "wir", "unser"],
          errorType: "pronoun",
        },
      ],
      explanation:
        "الضمير الانعكاسيّ يتبع الفاعل: ich ⟵ mich · er ⟵ sich · wir ⟵ uns.",
      errorType: "pronoun",
    },
    {
      id: "e16",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة",
      wrongSentence: "Ich wasche mich die Hände.",
      wrongWord: "mich",
      correctWord: "mir",
      options: ["mir", "mich", "sich", "meine"],
      explanation:
        "في هذا المثال تكون die Hände في Akkusativ وmir في Dativ؛ لا نعمّم الحالة على كل الأفعال الانعكاسية.",
      errorType: "case",
    },
    {
      id: "e17",
      type: "multiple-choice",
      instructionAr: "تنصح صديقاً بلطف. أيّ صيغةٍ تختار؟",
      questionDe: "Sie möchten einem Freund einen weniger direkten Rat geben. Was sagen Sie?",
      options: [
        "Du solltest mal zum Arzt gehen.",
        "Du sollst zum Arzt gehen.",
        "Du musst zum Arzt gehen wollen.",
        "Du darfst zum Arzt gehen.",
      ],
      correctIndex: 0,
      explanation:
        "في هذا السياق، sollten مع mal صيغة شائعة لاقتراح أقل مباشرة؛ Du sollst جملة صحيحة لكنها توجيه أكثر مباشرة هنا، لا خطأ نحوي.",
      errorType: "vocabulary",
    },
    {
      id: "e18",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة عن مدة الأعراض، وابدأ بـIch:",
      tokens: [
        "Ich",
        "habe",
        "seit",
        "drei",
        "Tagen",
        "starke",
        "Halsschmerzen",
        ".",
      ],
      correctSentence: "Ich habe seit drei Tagen starke Halsschmerzen.",
      acceptedSentences: ["Ich habe starke Halsschmerzen seit drei Tagen."],
      explanation:
        "بعد seit مع اسم ظاهر هنا نقول drei Tagen. ويقبل التمرين أيضاً وضع العبارة الزمنية في آخر الجملة؛ فليس ترتيب الزمن قبل بقية المفعولات قاعدة مطلقة.",
      errorType: "word-order",
    },
    {
      id: "e19",
      type: "matching",
      instructionAr: "طابق كل وثيقة بوظيفتها أو بسياق استعمالها:",
      pairs: [
        { left: "das Rezept", right: "in einer Apotheke einlösen" },
        { left: "AU / Krankschreibung", right: "Arbeitsunfähigkeit nachweisen" },
        { left: "die Überweisung", right: "bei Bedarf zum Facharzt" },
        { left: "die Gesundheitskarte", right: "Versicherungsnachweis in der Praxis" },
      ],
      explanation:
        "الوصفة تُستخدم لصرف الدواء الموصوف في صيدلية؛ وAU توثّق عدم القدرة على العمل؛ والإحالة تُطلب في بعض الحالات؛ والبطاقة أو وثيقة أخرى قد تثبت التأمين. ليست كل حالة متطابقة.",
      errorType: "vocabulary",
    },
    {
      id: "e20",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في سؤال الطبيب",
      wrongSentence: "Was fehlt Sie denn?",
      wrongWord: "Sie",
      correctWord: "Ihnen",
      options: ["Ihnen", "Sie", "Ihr", "Ihren"],
      explanation:
        "في سؤال الشكوى مع fehlen تأتي Ihnen في Dativ. هذه خاصية البناء الألماني، وليست مقابلة مباشرة للجرّ العربي.",
      errorType: "case",
    },
    {
      id: "e21",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص المناسب للسياق",
      template:
        "Im Bericht: Ich ___ mich ausruhen. (sollen) · Vorschlag: Sie ___ sich heute ausruhen. (sollen, Konjunktiv II) · Verbot bei Fieber: Sie ___ keinen Sport machen. (dürfen)",
      blanks: [
        {
          correct: "soll",
          options: ["soll", "sollst", "sollen", "darf"],
          errorType: "conjugation",
        },
        {
          correct: "sollten",
          options: ["sollten", "sollt", "sollen", "dürfen"],
          errorType: "conjugation",
        },
        {
          correct: "dürfen",
          options: ["dürfen", "müssen", "sollen", "können"],
          errorType: "vocabulary",
        },
      ],
      explanation:
        "تُظهر الخانات صيغاً مختلفة في سياقات مسماة: نقل توجيه بـsollen، وصيغة اقتراح بـsollten، ومنع ممارسة الرياضة هنا بـdürfen + keinen Sport. للسياق دور، ولا تستنفد الأمثلة معاني الأفعال.",
      errorType: "vocabulary",
    },
    {
      id: "e22",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى اقتراح أقل مباشرة في هذا السياق:",
      prompt: "Sie sollen mehr schlafen. → Formulieren Sie denselben Rat mit sollten weniger direkt.",
      acceptedAnswers: [
        "Sie sollten mehr schlafen.",
        "Sie sollten mehr schlafen",
      ],
      sampleAnswer: "Sie sollten mehr schlafen.",
      hint: "Konjunktiv II مع sollten صيغة شائعة للاقتراح الأقل مباشرة؛ ليست حكماً ثابتاً عن الأدب في كل موقف.",
      explanation: "في هذا المثال، يُصاغ الاقتراح بـsollten. ولا يعني ذلك أن sollen لا يمكن أن يقدّم نصيحة في سياق آخر.",
      errorType: "grammar",
    },
    {
      id: "e23",
      type: "true-false",
      instructionAr: "اقرأ ثمّ احكم على العبارات",
      textDe:
        "Die Ärztin sagt: „Sie haben eine Erkältung. Sie sollten sich ausruhen. Solange Sie Fieber haben, dürfen Sie keinen Sport machen. Sie müssen nicht wiederkommen, wenn es Ihnen besser geht. Hier ist ein Rezept für das Medikament.“",
      statements: [
        {
          id: "s1",
          de: "Solange die Person Fieber hat, darf sie keinen Sport machen.",
          ar: "لا يجوز للشخص ممارسة الرياضة ما دام مصاباً بالحمى.",
          isTrue: true,
          whyAr: "يفيد النص المنع في شرط محدد: solange Sie Fieber haben.",
        },
        {
          id: "s2",
          de: "Die Person muss unbedingt wiederkommen.",
          ar: "على الشخص أن يعود حتماً.",
          isTrue: false,
          whyAr: "«Sie müssen nicht wiederkommen» — نفي الوجوب إعفاء لا إلزام.",
        },
        {
          id: "s3",
          de: "Die Ärztin gibt der Person ein Rezept für ein Medikament.",
          ar: "أعطت الطبيبة الشخص وصفة لدواء.",
          isTrue: true,
          whyAr: "تذكر الطبيبة أنها أعطت الشخص وصفة؛ لا يستنتج هذا البند أن كل دواء يحتاج إليها.",
        },
        {
          id: "s4",
          de: "Die Ärztin gibt einen Befehl, keinen Rat.",
          ar: "الطبيبة تأمر ولا تنصح.",
          isTrue: false,
          whyAr: "يظهر في النص اقتراح بـsollten ومنع مشروط بـdürfen nicht؛ ولا تختزل هذه الفروق في نبرة ثابتة.",
        },
      ],
      explanation:
        "في النص: sollten لاقتراح، وdürfen nicht لمنع مشروط، وmüssen nicht لعدم لزوم العودة.",
      errorType: "negation",
    },
    {
      id: "e24",
      type: "multiple-choice",
      instructionAr: "ماذا تقول عند الوداع لمريض؟",
      questionDe: "Ihr Kollege ist krank. Was sagen Sie zum Abschied?",
      options: [
        "Gute Besserung!",
        "Viel Glück!",
        "Herzlichen Glückwunsch!",
        "Gute Reise!",
      ],
      correctIndex: 0,
      explanation:
        "Gute Besserung عبارة شائعة لتمني التحسن في هذا السياق؛ يختلف اختيار عبارات الوداع بحسب العلاقة والموقف، ولا يلزم استعمالها في كل مرة.",
      errorType: "vocabulary",
    },
  ];


export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich bin Kopfschmerzen.",
        right: "Ich habe Kopfschmerzen.",
        classification: "error",
        whyAr: "في هذا التعبير الألماني الشائع يأتي اسم Kopfschmerzen مع haben: Ich habe Kopfschmerzen.",
      },
      {
        wrong: "Ich sollst mich ausruhen.",
        right: "Ich soll mich ausruhen.",
        classification: "error",
        whyAr: "مع ich تكون صيغة sollen هي soll؛ أما sollst فتأتي مع du.",
      },
      {
        wrong: "der Auge",
        right: "das Auge",
        classification: "error",
        whyAr: "Auge اسم محايد، لذا نحفظه مع أداته das. لا توجد قاعدة صوتية تربط أداة الاسم بحرفٍ عربي أو معنى الكلمة.",
      },
    ],
    eselsbruecken: [
      "في العبارة الشائعة Ich habe Kopfschmerzen يأتي اسم الصداع مع haben؛ لا تعمّم البناء على كل وصف للألم.",
      "قارن المثالين في سياقهما: Der Arzt sagt, ich soll … لنقل توجيه، وSie sollten … لاقتراح أقل مباشرة؛ الفعل نفسه قد يتعدد استعماله.",
    ],
    culturalNote: {
      title: "ملاحظات عامة عن التغطية الصحية والوثائق",
      content:
        "تُطلب التغطية الصحية في ألمانيا عموماً، لكن الوضع قد يكون ضمن التأمين القانوني أو الخاص؛ ولا يعني ذلك وجود مسار موحّد لكل زيارة. قد تطلب العيادة البطاقة الصحية الإلكترونية أو إثباتاً آخر؛ إذا لم تكن الوثيقة معك فاسأل العيادة أو شركة التأمين بدلاً من افتراض وجوب الدفع النقدي. الدواء الموصوف يُصرف في صيدلية، لكن ليس كل دواء بوصفة، وبعض الأدوية المتاحة دون وصفة تُباع خارج الصيدليات. وفي التأمين القانوني تُرسل eAU عادةً إلكترونياً، مع بقاء واجب إبلاغ جهة العمل في الحالات المعتادة. المعلومات عامة وليست نصيحة طبية أو قانونية.",
    },
  };
