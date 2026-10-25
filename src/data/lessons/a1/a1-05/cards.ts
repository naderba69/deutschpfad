/**
 * a1-05 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a1-05.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
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
      optionExplanations: [
        undefined,
        "«fernsehen» مصدرٌ لا يُصرَّف؛ و«Wir» تحتاج «sehen … fern».",
        "البادئة «fern» لا تأتي بعد الجذر مباشرة إذا بقيت مكمّلات («am Abend»)؛ موضعها في الآخر.",
        "«seht» للجمع المخاطب «ihr»؛ والفاعل «Wir» ⇒ «sehen».",
      ],
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
      optionExplanations: [
        undefined,
        "«halb acht» = السابعة والنصف؛ والثامنة والنصف تكون «halb neun».",
        "الثامنة تماماً «acht Uhr»؛ والمطلوب «halb acht» = 7:30.",
        "السابعة تماماً «sieben Uhr»؛ و«halb» تضيف النصف.",
      ],
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
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
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
  ];



  /* ═══ الوساطة والتفاعل اللغوي ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
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
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
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
  ];
