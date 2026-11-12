/**
 * a1-04 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-04.ts في الدفعة 89 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Das Sofa ist ___ Wohnzimmer.",
      questionAr: "الأريكة في غرفة المعيشة.",
      options: ["im", "in der", "auf dem", "unter dem"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «in der» للمؤنث؛ و«Wohnzimmer» محايد: «im Wohnzimmer».", "لا — «auf dem» تعني فوق شيء؛ والأريكة داخل الغرفة «im Wohnzimmer».", "لا — «unter dem» تعني تحت؛ والمكان هنا «im» (= in + dem)."],
      explanation: "Wohnzimmer محايد → im (in+dem).",
      errorType: "preposition",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wo ___ du? — Ich wohne in Tunis.",
      options: ["wohnst", "wohne", "wohnt", "wohnen"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «wohne» تصرّفٌ مع «ich»؛ ومع «du» يقال «Wo wohnst du?».", "لا — «wohnt» مع هو/هي؛ والسؤال موجّه إلى «du» فيطلب «wohnst».", "لا — «wohnen» مصدر أو صيغة الجمع؛ ومع «du» الصيغة «wohnst»."],
      explanation: "مع du: wohnst. (wohne مع ich، wohnt مع er/sie).",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["in", "der", "ist", "Lampe", "Die", "Küche", "."],
      correctSentence: "Die Lampe ist in der Küche.",
      explanation: "المصباح في المطبخ: Die Lampe + ist + in der Küche.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر التصحيح المناسب للخطأ في الجملة:",
      wrongSentence: "Das Buch ist auf der Tisch.",
      wrongWord: "auf der",
      correctWord: "auf dem",
      options: ["auf dem", "auf die", "auf das", "in dem"],
      explanation: "Tisch مذكر → auf dem Tisch.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الصحيح:",
      template: "Die Katze ist ___ Sofa (تحت). Das Bild ist ___ Wand (على الجدار).",
      blanks: [
        { correct: "unter dem", options: ["unter dem", "auf dem", "in der", "im"] },
        { correct: "an der", options: ["an der", "an dem", "auf der", "im"] },
      ],
      explanation: "تحت الأريكة (محايد) → unter dem. على الجدار (مؤنث) → an der Wand.",
      errorType: "preposition",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Wohnung", ar: "الشقة", example: "Meine Wohnung ist klein.", exampleAr: "شقتي صغيرة.", level: "A1" },
    { id: "fc2", de: "das Zimmer", ar: "الغرفة", example: "Das Zimmer ist groß.", exampleAr: "الغرفة كبيرة.", level: "A1" },
    { id: "fc3", de: "die Küche", ar: "المطبخ", example: "Die Küche ist modern.", exampleAr: "المطبخ حديث.", level: "A1" },
    { id: "fc4", de: "das Wohnzimmer", ar: "غرفة المعيشة", example: "Wir sitzen im Wohnzimmer.", exampleAr: "نجلس في غرفة المعيشة.", level: "A1" },
    { id: "fc5", de: "das Schlafzimmer", ar: "غرفة النوم", example: "Ich schlafe im Schlafzimmer.", exampleAr: "أنام في غرفة النوم.", level: "A1" },
    { id: "fc6", de: "das Bad", ar: "الحمام", example: "Das Bad ist sauber.", exampleAr: "الحمام نظيف.", level: "A1" },
    { id: "fc7", de: "der Tisch / der Stuhl", ar: "الطاولة / الكرسي", example: "Der Stuhl steht neben dem Tisch.", exampleAr: "الكرسي بجانب الطاولة.", level: "A1" },
    { id: "fc8", de: "wohnen", ar: "يسكن", example: "Wo wohnst du?", exampleAr: "أين تسكن؟", level: "A1" },
    { id: "fc9", de: "müssen (ich muss)", ar: "يجب / مُلزَم", example: "Ich muss die Miete bezahlen.", exampleAr: "يجب أن أدفع الإيجار.", level: "A1" },
    { id: "fc10", de: "dürfen (ich darf)", ar: "مسموح / يجوز", example: "Darf ich hier parken?", exampleAr: "هل يُسمح لي بالركن هنا؟", level: "A1" },
    {"id": "fc11", "de": "die Miete", "ar": "الإيجار", "example": "Die Miete ist nicht billig.", "exampleAr": "الإيجار ليس رخيصاً.", "level": "A1"},
    {"id": "fc12", "de": "im / am / zum / zur", "ar": "اندماجات حرف الجرّ مع الأداة", "example": "Ich bin im Wohnzimmer.", "exampleAr": "أنا في غرفة المعيشة.", "level": "A1"},
    {"id": "fc13", "de": "der Nachbar / die Nachbarin", "ar": "الجار / الجارة", "example": "Meine Nachbarn sind freundlich.", "exampleAr": "جيراني ودودون.", "level": "A1"},
    {"id": "fc14", "de": "den Müll trennen", "ar": "يفرز النفايات", "example": "Wir müssen den Müll trennen.", "exampleAr": "علينا أن نفرز النفايات.", "level": "A1"},
    {"id": "fc15", "de": "die Ruhezeit", "ar": "وقت الهدوء وفق اللائحة المحلية", "example": "In diesem Haus beginnt laut Hausordnung die Ruhezeit nach 22 Uhr.", "exampleAr": "وفق لائحة هذا المبنى يبدأ وقت الهدوء بعد العاشرة.", "level": "A1"},
    {"id": "fc16", "de": "wohnen / leben", "ar": "فعلان للإقامة والحياة بحسب السياق", "example": "Ich lebe in Deutschland und wohne in Köln.", "exampleAr": "أعيش في ألمانيا وأسكن في كولونيا.", "level": "A1"},
    { id: "fc17", de: "das Bett", ar: "السرير", example: "Das Bett steht am Fenster.", exampleAr: "السرير عند النافذة.", level: "A1" },
    { id: "fc18", de: "hell", ar: "مضيء", example: "Das Zimmer ist hell und ruhig.", exampleAr: "الغرفة مضيئة وهادئة.", level: "A1" },
    { id: "fc19", de: "ruhig", ar: "هادئ", example: "Die Straße ist sehr ruhig.", exampleAr: "الشارع هادئ جداً.", level: "A1" },
    { id: "fc20", de: "gefunden (finden)", ar: "وجَد", example: "Endlich habe ich eine Wohnung gefunden!", exampleAr: "أخيراً وجدتُ شقّة!", level: "A1" },
    { id: "fc21", de: "endlich", ar: "أخيراً", example: "Endlich ist es warm.", exampleAr: "أخيراً صار الجوّ دافئاً.", level: "A1" },
    { id: "fc22", de: "das Fenster", ar: "النافذة", example: "Das Fenster ist groß.", exampleAr: "النافذة كبيرة.", level: "A1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-a1-04-1", type: "simplify-announcement",
      titleAr: "بسّط إعلاناً تدريبياً افتراضياً لشقة بالعربية لصديق",
      sourceDe: "Beispielanzeige: Wohnung zu vermieten: 2 Zimmer, 60 m², Küche und Bad, zentral gelegen. Miete: 600 Euro warm.",
      taskAr: "انقل الإعلان بالعربية لصديق يبحث عن سكن: عدد الغرف، المساحة، الموقع، والإيجار.",
      modelAnswerAr: "«إعلان تدريبي افتراضي: شقة للإيجار، غرفتان، 60 متراً مربعاً، مطبخ وحمام، في موقع مركزي. الإيجار 600 يورو شاملاً التكاليف التي يحددها الإعلان؛ وهذا مبلغ المثال لا متوسط أسعار السوق.»",
      keyPointsAr: ["نقلت عدد الغرف (2) والمساحة (60م²)", "ذكرت المطبخ والحمام والموقع المركزي", "نقلت الإيجار (600 يورو) مع توضيح أن معنى warm وتفاصيل التكاليف تتبع الإعلان؛ والسعر مثال لا متوسط سوق"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-04-1",
      scenarioAr: "تتصل للاستفسار عن إعلان شقة تدريبي افتراضي.",
      scenarioDe: "Du rufst wegen einer Beispielanzeige für eine Wohnung an.",
      strategyAr: "الاستراتيجية: السؤال عن تفاصيل الشقة والرد على الأسئلة.",
      rounds: [
        {
          speakerDe: "Hallo, Sie interessieren sich für die Wohnung?",
          speakerAr: "مرحباً، أنت مهتم بالشقة؟",
          options: [
            { de: "Ja, genau. Wie viele Zimmer hat sie?", ar: "نعم بالضبط. كم عدد الغرف؟", best: true, replyDe: "Zwei Zimmer plus Küche und Bad.", replyAr: "غرفتان بالإضافة إلى مطبخ وحمام." },
            { de: "Nein, ich suche ein Auto.", ar: "لا، أنا أبحث عن سيارة.", best: false, replyDe: "Das ist ein Wohnungsinserat, kein Auto.", replyAr: "هذا إعلان شقة، وليس سيارة." },
          ],
        },
        {
          speakerDe: "Zwei Zimmer, 60 Quadratmeter. Passt das?",
          speakerAr: "غرفتان، 60 متراً مربعاً. هل يناسبك؟",
          options: [
            { de: "Ja, das passt gut. Und wie hoch ist die Miete?", ar: "نعم يناسبني جيداً. وكم الإيجار؟", best: true, replyDe: "600 Euro warm, inklusive Nebenkosten.", replyAr: "600 يورو شاملاً التكاليف الجانبية." },
            { de: "Ich weiß nicht, ob ich wohnen will.", ar: "لا أعرف إن كنت أريد السكن.", best: false, replyDe: "Sie rufen wegen einer Wohnung an, oder?", replyAr: "أنت تتصل بخصوص شقة، أليس كذلك؟" },
          ],
        },
      ],
    },
  ];
