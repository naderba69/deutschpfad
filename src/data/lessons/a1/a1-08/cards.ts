/**
 * a1-08 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a1-08.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Die Hose ist ___.",
      questionAr: "البنطال أزرق.",
      options: ["blau", "blaue", "blauen", "blaues"],
      correctIndex: 0,
      explanation: "الصفة الخبرية: ist blau.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Was ___ du heute? — Ich trage ein Hemd.",
      options: ["trägst", "trage", "trägt", "tragt"],
      correctIndex: 0,
      explanation: "du → trägst (a→ä).",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["findest", "Wie", "Jacke", "meine", "du", "?"],
      correctSentence: "Wie findest du meine Jacke?",
      explanation: "سؤال W: Wie + findest (V2) + du + meine Jacke.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الصفة الخبرية بعد sein:",
      wrongSentence: "Das Hemd ist rotes.",
      wrongWord: "rotes",
      correctWord: "rot",
      options: ["rot", "rote", "rotes", "roten"],
      explanation:
        "بعد sein في جملة الوصف نقول Das Hemd ist rot؛ لا تأخذ الصفة الخبرية نهاية هنا.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الألوان:",
      template:
        "Die Nacht ist ___ (أسود). Der Schnee ist ___ (أبيض). Die Banane ist ___ (أصفر).",
      blanks: [
        { correct: "schwarz", options: ["schwarz", "weiß", "gelb"] },
        { correct: "weiß", options: ["schwarz", "weiß", "gelb"] },
        { correct: "gelb", options: ["schwarz", "weiß", "gelb"] },
      ],
      explanation: "الليل أسود، الثلج أبيض، الموزة صفراء.",
      errorType: "vocabulary",
    },
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "die Kleidung",
      ar: "الملابس",
      example: "Ich kaufe Kleidung.",
      exampleAr: "أشتري ملابس.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "das Hemd / die Hose",
      ar: "القميص / البنطال",
      example: "Das Hemd ist weiß.",
      exampleAr: "القميص أبيض.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "die Jacke",
      ar: "السترة",
      example: "Meine Jacke ist warm.",
      exampleAr: "سترتي دافئة.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "das Kleid",
      ar: "الفستان",
      example: "Das Kleid ist elegant.",
      exampleAr: "الفستان أنيق.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "die Schuhe",
      ar: "الأحذية (جمع؛ المفرد der Schuh)",
      example: "Die Schuhe sind neu.",
      exampleAr: "الأحذية جديدة.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "rot / blau / grün",
      ar: "أحمر / أزرق / أخضر",
      example: "Der Himmel ist blau.",
      exampleAr: "السماء زرقاء.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "tragen",
      ar: "يرتدي",
      example: "Ich trage eine Brille.",
      exampleAr: "أرتدي نظارة.",
      level: "A1",
    },
    {
      id: "fc8",
      de: "Wie findest du …?",
      ar: "ما رأيك في…؟",
      example: "Wie findest du mein Hemd?",
      exampleAr: "ما رأيك في قميصي؟",
      level: "A1",
    },
    {
      id: "fc9",
      de: "Welche Größe haben Sie?",
      ar: "ما مقاسك؟",
      example: "Welche Größe haben Sie? — Größe 40.",
      exampleAr: "ما مقاسك؟ — مقاس 40.",
      level: "A1",
    },
    {
      id: "fc10",
      de: "Ich nehme dieses Hemd.",
      ar: "آخذ هذا القميص.",
      example: "Ich nehme dieses Hemd, bitte.",
      exampleAr: "آخذ هذا القميص من فضلك.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "Das gefällt mir.",
      ar: "هذا يعجبني.",
      example: "Der Pullover gefällt mir sehr.",
      exampleAr: "الكنزة تعجبني كثيراً.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "Die Schuhe gefallen mir.",
      ar: "الأحذية تعجبني. (جمع ⇐ الفعل جمع)",
      example: "Die Schuhe gefallen mir, aber sie sind teuer.",
      exampleAr: "الأحذية تعجبني، لكنها غالية.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "passen (+ Dativ)",
      ar: "يناسب المقاس",
      example: "Die Hose passt mir nicht.",
      exampleAr: "البنطال لا يناسب مقاسي.",
      level: "A1",
    },
    {
      id: "fc14",
      de: "stehen (+ Dativ)",
      ar: "يليق بـ",
      example: "Das Kleid steht dir gut.",
      exampleAr: "الفستان يليق بك.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "mir / dir / Ihnen",
      ar: "لي / لك / لحضرتك (ضمائر الدّاتيف)",
      example: "Wie gefällt Ihnen das?",
      exampleAr: "كيف يعجبك هذا؟",
      level: "A1",
    },
    {
      id: "fc16",
      de: "Wie gefällt Ihnen …?",
      ar: "كيف يعجبك …؟ (سؤال البائع)",
      example: "Wie gefällt Ihnen dieser Mantel?",
      exampleAr: "كيف يعجبك هذا المعطف؟",
      level: "A1",
    },
    {
      id: "fc17",
      de: "der Mantel",
      ar: "المعطف",
      example: "Der Mantel ist zu teuer.",
      exampleAr: "المعطف غالٍ جداً.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "die Farbe",
      ar: "اللون",
      example: "Welche Farbe magst du?",
      exampleAr: "أيّ لونٍ تحبّ؟",
      level: "A1",
    },
    {
      id: "fc19",
      de: "grau",
      ar: "رماديّ",
      example: "Der Mantel ist grau.",
      exampleAr: "المعطف رماديّ.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "suchen",
      ar: "يبحث عن",
      example: "Ich suche eine Jacke.",
      exampleAr: "أبحث عن سترة.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "brauchen",
      ar: "يحتاج",
      example: "Im Herbst braucht man eine Jacke.",
      exampleAr: "في الخريف يحتاج المرء سترة.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "der Herbst",
      ar: "الخريف",
      example: "Im Herbst ist es kalt.",
      exampleAr: "في الخريف يكون الجوّ بارداً.",
      level: "A1",
    },
  ];



  /* ═══ أنشطة الوساطة والتفاعل ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-08-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص وصف ملابس بالعربية",
      sourceDe:
        "Im Winter trage ich eine Jacke. Sie ist warm. Ich trage auch einen Schal und Handschuhe. Meine Lieblingsfarbe ist Blau.",
      taskAr: "انقل بالعربية ما يرتديه الشخص في الشتاء ولونه المفضل.",
      modelAnswerAr:
        "«في الشتاء أرتدي سترة. هي دافئة. أرتدي أيضاً وشاحاً وقفازات. لوني المفضل أزرق.»",
      keyPointsAr: [
        "ذكرت الملابس الشتوية (سترة، وشاح، قفازات)",
        "نقلت اللون المفضل (أزرق)",
      ],
    },
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-08-1",
      scenarioAr: "صديقة تسأل رأيك في ملابس.",
      scenarioDe: "Eine Freundin fragt dich nach deiner Meinung zu ihrer Jacke.",
      strategyAr:
        "الاستراتيجية: إبداء الرأي بلطف (Ich finde... / Wie findest du...?). الخيارات هنا محاكاة نصية، وليست قياساً لأداء شفهي أو نطق.",
      rounds: [
        {
          speakerDe: "Wie findest du diese Jacke?",
          speakerAr: "كيف تجد هذه السترة؟",
          options: [
            {
              de: "Ich finde sie sehr schön. Die Jacke steht dir gut.",
              ar: "أجدها جميلة جداً. السترة تليق بك.",
              best: true,
              replyDe: "Danke! Und die Farbe?",
              replyAr: "شكراً! واللون؟",
            },
            {
              de: "Was kostet die Jacke?",
              ar: "كم ثمن السترة؟",
              best: false,
              replyDe: "Das weiß ich noch nicht. Wie gefällt sie dir?",
              replyAr: "لا أعرف بعد. ما رأيك بها؟",
            },
          ],
        },
        {
          speakerDe: "Welche Farbe gefällt dir besser?",
          speakerAr: "أيّ لون يعجبك أكثر؟",
          options: [
            {
              de: "Blau gefällt mir besser.",
              ar: "الأزرق يعجبني أكثر.",
              best: true,
              replyDe: "Danke! Dann probiere ich die Jacke in Blau.",
              replyAr: "شكراً! سأجرّب السترة باللون الأزرق إذن.",
            },
            {
              de: "Ich wohne in Bonn.",
              ar: "أسكن في بون.",
              best: false,
              replyDe: "Danke, aber ich habe nach der Farbe gefragt.",
              replyAr: "شكراً، لكنني سألت عن اللون.",
            },
          ],
        },
      ],
    },
  ];
