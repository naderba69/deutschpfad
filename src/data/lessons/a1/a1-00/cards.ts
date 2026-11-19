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
      explanation: "في الكلمات الألمانية الشائعة تمثل Z صوت /ts/، مثل Zeit وzehn.",
      errorType: "spelling",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر كتابة Straße وفق الإملاء القياسي في ألمانيا:",
      questionDe: "Welche Schreibung ist in Deutschland richtig?",
      questionAr: "أي كتابة صحيحة في ألمانيا؟",
      options: ["die Straße", "die Strasse", "die Strasze", "die Straze"],
      correctIndex: 0,
      optionExplanations: [undefined, "في الإملاء القياسي بألمانيا تُكتب «Straße» بـ«ß» بعد a الطويلة. «Strasse» كتابة معيارية في سويسرا وليختنشتاين، وليست المقصودة في هذا السؤال.", "لا — «Strasze» ليست طريقة الكتابة القياسية للاسم؛ في ألمانيا تُكتب «die Straße» بحرف ß.", "لا — لا يُستغنى عن الحرف الثاني في مجموعة «Str»؛ والرسم الصحيح كما في تهجئة الدرس: «S-T-R-A-ß-E»."],
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
      wrongSentence: "Wie schreibt man „Buchstabe“?",
      wrongWord: "Buchstabe",
      correctWord: "Buchstabe",
      isAlreadyCorrect: true,
      options: ["Buchstabe", "Buchstabbe", "Buchstabeh", "Buchstape"],
      explanation:
        "كلمة «Buchstabe» مكتوبة صحيحة كما هي؛ أحياناً تكون الإجابة الصحيحة عدم إجراء أي تعديل.",
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
      ar: "حرف Eszett (إس-تسِت)، ويُسمّى أيضاً scharfes S",
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
      de: "ch بعد a, o, u, au في كلمات شائعة = ach-Laut [x]",
      ar: "Buch, auch, Nacht — تقريب الصوت العربي بالخاء ليس مطابقاً في كل لهجة.",
      example: "Das Buch ist auch neu.",
      exampleAr: "الكتاب جديد أيضاً.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "ch في ich وnicht وMilch = ich-Laut [ç]، ليس sch",
      ar: "صوت حنكي؛ «ش» تقريب غير مطابق",
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
              de: "Im Wort „Buch“ hört man den ach-Laut [x], im Wort „ich“ den ich-Laut [ç]. Hör dir beide Laute an und übe sie.",
              ar: "في Buch صوت ach-Laut [x]، وفي ich صوت ich-Laut [ç]؛ لا يطابق الثاني الشين العربية. استمع إلى مثالين واضحين.",
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
              de: "Ungefähr wie das arabische „ش“: Schule, schön. Hör dir die Beispiele an.",
              ar: "تقريباً مثل «ش» العربية في Schule وschön؛ واستمع إلى المثالين.",
              best: true,
              replyDe: "Danke! Das ist einfach.",
              replyAr: "شكراً! هذا سهل.",
            },
            {
              de: "Wie ein „s“.",
              ar: "مثل «س».",
              best: false,
              replyDe: "Nein, hier klingt „sch“ ungefähr wie das arabische „ش“.",
              replyAr: "لا، «sch» مثل الشين العربية.",
            },
          ],
        },
      ],
    },
  ];
