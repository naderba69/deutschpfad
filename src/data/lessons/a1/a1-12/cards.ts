/**
 * a1-12 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a1-12.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr:
        "في جملة طقس كاملة، اختر الصيغة المناسبة لفعل الطقس المعروض:",
      questionDe: "Im Wetterbericht: ___ regnet heute.",
      options: ["Es", "Ich", "Er", "Das"],
      correctIndex: 0,
      explanation:
        "في مثال الطقس الكامل هنا يأتي es الصوريّ مع الفعل regnen المصرف: Es regnet heute.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Ich regnet» خطأٌ في الإسناد؛ و«regnen» فعلٌ جويّ يطلب «es» الصوريّ.",
        "«Er regnet» يجعل الفاعل شخصاً؛ والفعل الجويّ يُسند إلى «es».",
        "«Das regnet» غير مستعمل في تقرير الطقس؛ والصيغة «Es regnet heute».",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف werden:",
      questionDe: "Wir ___ gute Freunde.",
      options: ["werden", "werdet", "wird", "wirst"],
      correctIndex: 0,
      explanation: "مع wir: werden.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«werdet» للجمع المخاطب «ihr werdet»؛ والفاعل «Wir».",
        "«wird» للغائب المفرد «er/sie/es wird».",
        "«wirst» للمخاطب المفرد «du wirst».",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["wird", "kalt", "Im", "Winter", "es", "."],
      correctSentence: "Im Winter wird es kalt.",
      acceptedSentences: [
        "Es wird im Winter kalt.",
        "Es wird kalt im Winter.",
      ],
      explanation:
        "Im Winter wird es kalt، وEs wird im Winter kalt، وEs wird kalt im Winter ترتيبات ممكنة للجملة؛ يبقى الفعل المصرف في الموضع الثاني.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "transformation",
      instructionAr:
        "حوّل العبارة إلى جملة طقس تعبر عن التحوّل المحدد؛ لا تصحّح نحوياً جملة المتكلم الأصلية:",
      prompt: "Ich werde kalt. (المقصود في النشرة: الطقس يتحوّل إلى البرودة)",
      acceptedAnswers: ["Es wird kalt."],
      sampleAnswer: "Es wird kalt.",
      caseSensitive: true,
      explanation:
        "Ich werde kalt يمكن أن تكون جملة سليمة عن شخص في سياق مناسب؛ والمطلوب هنا تحويل المعنى إلى جملة عن الطقس: Es wird kalt.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف werden الصحيح:",
      template: "Ich ___ müde. Er ___ stark. Ihr ___ schnell müde.",
      blanks: [
        { correct: "werde", options: ["werde", "wird", "werdet"] },
        { correct: "wird", options: ["werde", "wird", "werdet"] },
        { correct: "werdet", options: ["werde", "wird", "werdet"] },
      ],
      explanation: "werde (ich)، wird (er)، werdet (ihr).",
      errorType: "conjugation",
    },
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "das Wetter",
      ar: "الطقس",
      example: "Das Wetter ist schön.",
      exampleAr: "الطقس جميل.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "die Sonne",
      ar: "الشمس",
      example: "Die Sonne scheint.",
      exampleAr: "تشرق الشمس.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "der Regen",
      ar: "المطر",
      example: "Der Regen beginnt.",
      exampleAr: "يبدأ المطر.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "der Schnee",
      ar: "الثلج",
      example: "Im Winter schneit es.",
      exampleAr: "في الشتاء تثلج.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "kalt / warm / heiß",
      ar: "بارد / دافئ / حار",
      example: "Im Sommer ist es heiß.",
      exampleAr: "في الصيف الجو حار.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "werden",
      ar: "يصبح",
      example: "Es wird kalt.",
      exampleAr: "يصبح الجو بارداً.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "der Wind",
      ar: "الريح",
      example: "Der Wind weht.",
      exampleAr: "تهب الرياح.",
      level: "A1",
    },
    {
      id: "fc8",
      de: "die Jahreszeit",
      ar: "الفصل (من السنة)",
      example: "Der Sommer ist meine Lieblingsjahreszeit.",
      exampleAr: "الصيف فصلي المفضل.",
      level: "A1",
    },
    {
      id: "fc9",
      de: "im Sommer / im Winter",
      ar: "في الصيف / في الشتاء",
      example: "Im Winter schneit es oft.",
      exampleAr: "في الشتاء تثلج كثيراً.",
      level: "A1",
    },
    {
      id: "fc10",
      de: "am Montag / um acht Uhr",
      ar: "يوم الاثنين / في الثامنة",
      example: "Am Montag um acht Uhr regnet es.",
      exampleAr: "يوم الاثنين تمطر في الثامنة.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "aber",
      ar: "لكن (أداة ربط)",
      example: "Es ist kalt, aber die Sonne scheint.",
      exampleAr: "الجوّ بارد لكنّ الشمس مشرقة.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "denn",
      ar: "لأنّ (سبب؛ جملة رئيسية في المثال)",
      example: "Ich bleibe zu Hause, denn es regnet.",
      exampleAr: "أبقى في البيت لأنّها تمطر.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "Mir ist kalt.",
      ar: "أشعر بالبرد",
      example: "Mir ist kalt. Hast du eine Jacke?",
      exampleAr: "أشعر بالبرد. أعندك سترة؟",
      level: "A1",
    },
    {
      id: "fc14",
      de: "neblig / bewölkt",
      ar: "ضبابيّ / غائم",
      example: "Am Morgen ist es oft neblig.",
      exampleAr: "في الصباح يكون الجوّ ضبابياً غالباً.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "der Regenschirm",
      ar: "المظلّة",
      example: "Nimm einen Regenschirm mit!",
      exampleAr: "خذ مظلّة معك!",
      level: "A1",
    },
    {
      id: "fc16",
      de: "minus fünf Grad",
      ar: "خمس درجات تحت الصفر",
      example: "In der Nacht sind es minus fünf Grad.",
      exampleAr: "في الليل الحرارة خمس تحت الصفر.",
      level: "A1",
    },
    {
      id: "fc17",
      de: "seit (+ Dativ)",
      ar: "منذ",
      example: "Es regnet seit drei Stunden.",
      exampleAr: "تمطر منذ ثلاث ساعات.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "in einer Stunde",
      ar: "بعد ساعة في هذا السياق",
      example: "In einer Stunde hört der Regen auf.",
      exampleAr: "في هذا السياق يتوقف المطر بعد ساعة من نقطة الحديث.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "der Himmel",
      ar: "السماء",
      example: "Der Himmel ist grau.",
      exampleAr: "السماء رمادية.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "scheinen",
      ar: "تشرق (الشمس)",
      example: "Die Sonne scheint heute.",
      exampleAr: "الشمس مشرقة اليوم.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "der Tag",
      ar: "يوم؛ والجمع Tage",
      example: "Die Tage sind sehr lang.",
      exampleAr: "الأيّام طويلة جداً.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "das Jahr",
      ar: "السنة",
      example: "Seit einem Jahr wohne ich hier.",
      exampleAr: "أسكن هنا منذ سنة.",
      level: "A1",
    },
    {
      id: "fc23",
      de: "anders",
      ar: "مختلف، على نحوٍ آخر",
      example: "Das Wetter ist hier anders.",
      exampleAr: "الطقس هنا مختلف.",
      level: "A1",
    },
    {
      id: "fc24",
      de: "wirklich",
      ar: "حقاً، فعلاً",
      example: "Es ist wirklich kalt.",
      exampleAr: "الجوّ باردٌ حقاً.",
      level: "A1",
    },
    {
      id: "fc25",
      de: "bunt",
      ar: "ملوّن، زاهي الألوان",
      example: "Die Blätter werden bunt.",
      exampleAr: "تصير الأوراق ملوّنة.",
      level: "A1",
    },
  ];



  /* ═══ أنشطة الوساطة والتفاعل: خيارات تدريبية لا أدلة على الإتقان أو الاعتماد ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-12-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص نشرة طقس بالعربية",
      sourceDe:
        "Morgen regnet es. Es sind 15 Grad. Am Wochenende wird es sonnig und warm.",
      taskAr:
        "انقل النشرة بالعربية: طقس الغد، درجة الحرارة، وطقس نهاية الأسبوع. هذه نشرة افتراضية للتدريب الذاتي وليست توقعاً حقيقياً أو دليلاً مسجلاً على إتقان الوساطة.",
      modelAnswerAr:
        "«غداً ستمطر. الحرارة 15 درجة. وفي نهاية الأسبوع سيصير الجو مشمساً ودافئاً.»",
      keyPointsAr: [
        "نقلت المطر غداً",
        "ذكرت درجة الحرارة (15)",
        "نقلت طقس نهاية الأسبوع",
      ],
    },
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-12-1",
      scenarioAr:
        "صديق يسأل عن طقس مدينتك؛ المعطيات أن الجو مشمس ودافئ والحرارة 25 درجة. اختر أنسب رد نصي.",
      scenarioDe:
        "Ein Freund fragt nach dem Wetter in deiner Stadt; es ist sonnig und warm bei 25 Grad. Wähle eine passende Textantwort.",
      strategyAr:
        "التدريب هنا على اختيار أفضل رد نصي؛ لا يقيس إنتاج كلام شفهي.",
      rounds: [
        {
          speakerDe: "Wie ist das Wetter bei dir?",
          speakerAr: "كيف الطقس عندك؟",
          options: [
            {
              de: "Heute ist es sonnig und warm.",
              ar: "اليوم مشمس ودافئ.",
              best: true,
              replyDe: "Schön! Hier regnet es.",
              replyAr: "جميل! هنا تمطر.",
            },
            {
              de: "Heute ist es kalt und regnerisch.",
              ar: "اليوم الجو بارد وماطر.",
              best: false,
              replyDe: "Das passt nicht zu den Angaben: Heute ist es sonnig und warm.",
              replyAr: "هذا لا يطابق المعطيات: اليوم الجو مشمس ودافئ.",
            },
          ],
        },
        {
          speakerDe: "Wie ist die Temperatur?",
          speakerAr: "كم درجة الحرارة؟",
          options: [
            {
              de: "Es sind 25 Grad. Sehr angenehm.",
              ar: "25 درجة. مريح جداً.",
              best: true,
              replyDe: "Das ist perfekt für einen Spaziergang!",
              replyAr: "هذا مثالي للمشي!",
            },
            {
              de: "Es sind minus 30 Grad.",
              ar: "30 تحت الصفر.",
              best: false,
              replyDe: "Bei 25 Grad? Das glaube ich nicht.",
              replyAr: "عند 25 درجة؟ لا أصدق ذلك.",
            },
          ],
        },
      ],
    },
  ];
