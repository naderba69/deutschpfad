/**
 * a1-00 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-00.ts في الدفعة 95 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 10) التقييم */
export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر النطق الصحيح للحرف:",
      questionDe: "Wie spricht man „Z“?",
      questionAr: "ما نطق الحرف Z؟",
      options: ["تس", "ز", "س", "ذ"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — حرف «Z» في الألمانية لا يُنطق «ز» كما في الإنجليزية بل مركّباً «تس» كما في «zehn» و«Zentrum».", "لا — صوت «س» يقابل «S» لا «Z»؛ وحرف «Z» يُنطق «تس» كما في «Zeit».", "لا — لا مقابل لصوت «ذ» هنا؛ و«Z» تُنطق «تس» كما في «zu Hause»."],
      explanation: "Z تُنطق «تس» دائماً: Zeit = تسايت، zehn = تسِين.",
      errorType: "spelling",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة الصحيحة إملائياً:",
      questionDe: "Welche Schreibung ist richtig?",
      questionAr: "أي كتابة صحيحة؟",
      options: ["die Straße", "die Strasse", "die Strasze", "die Straze"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «ss» تأتي بعد صائت قصير («Fluss»)؛ و«Straße» صائتها طويل فحرفها «ß».", "لا — التركيب «sz» كتابةٌ قديمة لم تعد تُستعمل؛ والصحيح اليوم «die Straße».", "لا — لا يُستغنى عن الحرف الثاني في مجموعة «Str»؛ والرسم الصحيح كما في تهجئة الدرس: «S-T-R-A-ß-E»."],
      explanation: "Straße بالـ ß — بعد a طويلة. (قارن: die Straße = الشارع).",
      errorType: "spelling",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الحروف لتكوين كلمة «مدرسة»:",
      tokens: ["S", "c", "h", "u", "l", "e"],
      correctSentence: "Schule",
      explanation: "Schule = مدرسة — sch (ش) + u + l + e.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ (ei أو ie):",
      template: "n___n (لا) · d___se (هذه) · w___ (كيف) · k___n (لا أحد)",
      blanks: [
        { correct: "ei", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ei", options: ["ei", "ie"] },
      ],
      explanation:
        "nein=آي [aɪ]، diese=إي [iː]، wie=إي [iː]، kein=آي [aɪ]. ie تُقرأ إي (طويلة) و ei تُقرأ آي (مركّبة).",
      errorType: "spelling",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Wie spricht man „Buchstabe“?",
      wrongWord: "Buchstabe",
      correctWord: "Buchstabe",
      isAlreadyCorrect: true,
      options: ["Buchstabe", "Buchstabbe", "Buchstabeh", "Buchstape"],
      explanation:
        "Buchstabe (حرف) صحيحة كما هي! هذا تمرين ثقة: أحياناً الإجابة الصحيحة هي الأصل نفسه. أتقنت الأبجدية! 🎉",
      errorType: "spelling",
    },
  ];

/* 11) البطاقات */
export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "das Alphabet",
      ar: "الأبجدية",
      example: "Das Alphabet hat 26 Buchstaben.",
      exampleAr: "الأبجدية فيها 26 حرفاً.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "der Buchstabe",
      ar: "الحرف",
      example: "Das ist ein Buchstabe.",
      exampleAr: "هذا حرف.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "aussprechen",
      ar: "ينطق",
      example: "Wie spricht man das aus?",
      exampleAr: "كيف يُنطق هذا؟",
      level: "A1",
    },
    {
      id: "fc4",
      de: "buchstabieren",
      ar: "يتهجّى",
      example: "Können Sie das buchstabieren?",
      exampleAr: "هل يمكنكم تهجئة ذلك؟",
      level: "A1",
    },
    {
      id: "fc5",
      de: "der Umlaut (ä, ö, ü)",
      ar: "الحرف المعلم",
      example: "Ä, Ö, Ü sind Umlaute.",
      exampleAr: "Ä وÖ وÜ حروف معلمة.",
      level: "A1",
    },
    {
      id: "fc6",
      de: "das ß",
      ar: "حرف إس-تست الحاد",
      example: "Straße schreibt man mit ß.",
      exampleAr: "تُكتب Straße بـ ß.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "der Name",
      ar: "الاسم",
      example: "Mein Name ist Sami.",
      exampleAr: "اسمي سامي.",
      level: "A1",
    },
    {
      id: "fc8",
      de: "sich vorstellen",
      ar: "يقدّم نفسه",
      example: "Ich möchte mich vorstellen.",
      exampleAr: "أود أن أقدّم نفسي.",
      level: "A1",
    },
    {
      id: "fc9",
      de: "das Formular",
      ar: "الاستمارة",
      example: "Füllen Sie bitte das Formular aus.",
      exampleAr: "املأ الاستمارة من فضلك.",
      level: "A1",
    },
    {
      id: "fc10",
      de: "Wie schreibt man das?",
      ar: "كيف يُكتب هذا؟",
      example: "Chaabane? Wie schreibt man das?",
      exampleAr: "شعبان؟ كيف يُكتب هذا؟",
      level: "A1",
    },
    {
      id: "fc11",
      de: "langsam / schnell",
      ar: "ببطء / بسرعة",
      example: "Sprechen Sie bitte langsam!",
      exampleAr: "تكلّم ببطء من فضلك!",
      level: "A1",
    },
    {
      id: "fc12",
      de: "ch بعد a-o-u = خاء",
      ar: "Buch, auch, Nacht",
      example: "Das Buch ist auch neu.",
      exampleAr: "الكتاب جديد أيضاً.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "ch بعد i-e-ä = شين ناعمة",
      ar: "ich, nicht, Milch",
      example: "Ich spreche nicht viel.",
      exampleAr: "لا أتكلّم كثيراً.",
      level: "A1",
    },
    {
      id: "fc14",
      de: "St- / Sp-",
      ar: "في أوّل الكلمة تُنطق شت / شپ (مثل Stadt وSport)",
      example: "Die Stadt ist schön.",
      exampleAr: "المدينة جميلة.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "der Student",
      ar: "الطالب الجامعيّ",
      example: "Ich bin Student aus Tunesien.",
      exampleAr: "أنا طالب من تونس.",
      level: "A1",
    },
    {
      id: "fc16",
      de: "der Stift",
      ar: "القلم",
      example: "Haben Sie einen Stift?",
      exampleAr: "هل معك قلم؟",
      level: "A1",
    },
    {
      id: "fc17",
      de: "fragen",
      ar: "يسأل",
      example: "Die Lehrerin fragt: Wie heißen Sie?",
      exampleAr: "تسأل المعلّمة: ما اسمك؟",
      level: "A1",
    },
    {
      id: "fc18",
      de: "antworten",
      ar: "يجيب",
      example: "Ich antworte auf Deutsch.",
      exampleAr: "أجيب بالألمانية.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "Auf Wiedersehen!",
      ar: "إلى اللقاء! (وداعٌ رسميّ)",
      example: "Auf Wiedersehen, Frau Weber!",
      exampleAr: "إلى اللقاء سيدة فيبر!",
      level: "A1",
    },
  ];

/* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-00-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً قصيراً عن الأبجدية لصديق يبدأ التعلم",
      sourceDe:
        "Das deutsche Alphabet hat 26 Buchstaben. Dazu kommen ä, ö, ü und ß. Manche Buchstaben hören sich anders an als im Arabischen.",
      taskAr:
        "انقل بالعربية أهم ثلاث معلومات عن الأبجدية الألمانية لصديق مبتدئ: عدد الحروف، الحروف الإضافية، والاختلاف عن العربية.",
      modelAnswerAr:
        "«الأبجدية الألمانية فيها 26 حرفاً، بالإضافة إلى ä وö وü وß. بعض الحروف تُنطق بشكل مختلف عن العربية.»",
      keyPointsAr: [
        "ذكرت عدد الحروف (26)",
        "ذكرت الحروف الإضافية الأربعة",
        "أشرت إلى اختلاف النطق عن العربية",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-00-1",
      scenarioAr: "صديق مبتدئ يسألك عن نطق حرف ألماني.",
      scenarioDe:
        "Ein Freund fragt dich nach der Aussprache eines Buchstabens.",
      strategyAr: "الاستراتيجية: شرح نطق حرف وتصحيح خطأ بلطف.",
      rounds: [
        {
          speakerDe: "Wie spricht man „ch“ aus?",
          speakerAr: "كيف يُنطق «ch»؟",
          options: [
            {
              de: "Nach a, o, u, au wie ein hartes „ch“ (Buch). Nach i, e, ä, ö, ü und Konsonanten wie ein weiches „ch“ (ich).",
              ar: "بعد a وo وu وau خاء غليظة. وبعد i وe وä وö وü والصوامت شين ناعمة.",
              best: true,
              replyDe: "Ach so! Und „sch“?",
              replyAr: "فهمت! و«sch»؟",
            },
            {
              de: "Immer wie ein „k“.",
              ar: "دائماً مثل «ك».",
              best: false,
              replyDe: "Nein, das ist leider falsch. Es hängt vom Vokal ab.",
              replyAr: "لا، هذا خطأ للأسف. يعتمد على العلة.",
            },
          ],
        },
        {
          speakerDe: "Wie spricht man „sch“ aus?",
          speakerAr: "كيف يُنطق «sch»؟",
          options: [
            {
              de: "Wie ein „sch“ auf Arabisch: Schule, schön.",
              ar: "مثل «ش» العربية: Schule, schön.",
              best: true,
              replyDe: "Danke! Das ist einfach.",
              replyAr: "شكراً! هذا سهل.",
            },
            {
              de: "Wie ein „s“.",
              ar: "مثل «س».",
              best: false,
              replyDe: "Nein, „sch“ ist wie das arabische schin.",
              replyAr: "لا، «sch» مثل الشين العربية.",
            },
          ],
        },
      ],
    },
  ];
