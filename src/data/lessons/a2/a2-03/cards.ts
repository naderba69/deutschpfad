/**
 * a2-03 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-03.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ bitte einen Tee.",
      options: ["möchte", "möchtest", "möchten", "möchtet"],
      correctIndex: 0,
      explanation: "مع ich: möchte.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«möchtest» مع du، والفاعل هنا «Ich».",
        "«möchten» مع wir/sie/Sie، لا مع ich.",
        "«möchtet» مع ihr؛ لا يطابق «Ich». ",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "___ du mir helfen?",
      options: ["Kannst", "Kann", "Können", "Könnt"],
      correctIndex: 0,
      explanation: "مع du: kannst.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«Kann» مع ich أو er/sie/es؛ مع «du» تُضاف «-st» ⇒ «kannst».",
        "«Können» مصدر أو صيغة wir/sie/Sie؛ و«du» تأخذ «kannst».",
        "«Könnt» مع ihr؛ و«du» تأخذ «kannst». ",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "ابدأ باسم المطلوب، ثم أضف bitte لصياغة طلب الحساب المختصر:",
      tokens: ["Die", "Rechnung", "bitte", "!"],
      correctSentence: "Die Rechnung, bitte!",
      explanation: "الحساب من فضلك! — طلب مختصر ممكن للحساب.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Suppe schmeckt gut nicht.",
      wrongWord: "gut nicht",
      correctWord: "nicht gut",
      options: ["nicht gut", "gut nicht", "nicht gut nicht", "schlecht nicht"],
      explanation: "في هذه الجملة، يأتي nicht قبل الصفة gut: schmeckt nicht gut.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالكلمة الصحيحة (Speisekarte/Rechnung/schmeckt):",
      template:
        "Die ___, bitte! (القائمة) · Das ___ lecker! · Die ___, bitte! (الحساب)",
      blanks: [
        {
          correct: "Speisekarte",
          options: ["Speisekarte", "Rechnung", "schmeckt"],
        },
        {
          correct: "schmeckt",
          options: ["Speisekarte", "Rechnung", "schmeckt"],
        },
        {
          correct: "Rechnung",
          options: ["Speisekarte", "Rechnung", "schmeckt"],
        },
      ],
      explanation: "Speisekarte للطلب، schmeckt للطعم، Rechnung للحساب.",
      errorType: "vocabulary",
    },
  ];


export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "das Restaurant",
      ar: "المطعم",
      example: "Wir gehen ins Restaurant.",
      exampleAr: "نذهب إلى المطعم.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Speisekarte",
      ar: "قائمة الطعام",
      example: "Die Speisekarte, bitte!",
      exampleAr: "القائمة من فضلك!",
      level: "A2",
    },
    {
      id: "fc3",
      de: "bestellen",
      ar: "يطلب (طعاماً)",
      example: "Ich möchte bestellen.",
      exampleAr: "أود أن أطلب.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "möchten",
      ar: "أودّ (صيغة شائعة للرغبة أو الطلب)",
      example: "Ich möchte einen Kaffee.",
      exampleAr: "أود قهوة.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "können",
      ar: "أستطيع",
      example: "Können Sie mir helfen?",
      exampleAr: "هل يمكنكم مساعدتي؟",
      level: "A2",
    },
    {
      id: "fc6",
      de: "schmecken",
      ar: "يكون مذاقه (لشخص)؛ ويحدّد السياق إن راق المذاق أم لا",
      example: "Das schmeckt mir gut.",
      exampleAr: "هذا طعمه جيد.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "lecker",
      ar: "لذيذ",
      example: "Die Pizza ist lecker!",
      exampleAr: "البيتزا لذيذة!",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Rechnung",
      ar: "الحساب",
      example: "Die Rechnung, bitte!",
      exampleAr: "الحساب من فضلك!",
      level: "A2",
    },
    {
      id: "fc9",
      de: "Das Essen schmeckt mir.",
      ar: "يعجبني مذاق الطعام.",
      example: "Das Essen schmeckt mir sehr gut.",
      exampleAr: "الطعام يعجبني كثيراً.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "Wie schmeckt Ihnen ...?",
      ar: "ما مذاق ... بالنسبة إليكم؟",
      example: "Wie schmeckt Ihnen die Suppe?",
      exampleAr: "ما مذاق الحساء بالنسبة إليكم؟",
      level: "A2",
    },
    {
      id: "fc11",
      de: "Ich hätte gern ...",
      ar: "أودّ … (صيغة طلب شائعة؛ hätte صيغة من haben)",
      example: "Ich hätte gern einen Salat, bitte.",
      exampleAr: "أودّ سلطةً من فضلك.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "Ich nehme ...",
      ar: "سآخذ … (اختيار مما سأطلبه)",
      example: "Ich nehme das Schnitzel mit Pommes.",
      exampleAr: "آخذ الشنيتسل مع البطاطا.",
      level: "A2",
    },
    {
      id: "fc13",
      de: "die Vorspeise",
      ar: "المقبّلات",
      example: "Als Vorspeise hätte ich gern die Suppe.",
      exampleAr: "كمقبّلات أودّ الشوربة.",
      level: "A2",
    },
    {
      id: "fc14",
      de: "das Hauptgericht",
      ar: "الطبق الرئيس",
      example: "Als Hauptgericht nehme ich den Fisch.",
      exampleAr: "كطبقٍ رئيس آخذ السمك.",
      level: "A2",
    },
    {
      id: "fc15",
      de: "der Nachtisch",
      ar: "الحلوى (بعد الطعام)",
      example: "Möchten Sie noch einen Nachtisch?",
      exampleAr: "أتودّ حلوى أيضاً؟",
      level: "A2",
    },
    {
      id: "fc16",
      de: "stilles Wasser",
      ar: "مياه بلا غاز (لا تعني تلقائياً ماء الصنبور)",
      example: "Stilles Wasser oder mit Kohlensäure?",
      exampleAr: "ماءٌ بلا غاز أم فوّار؟",
      level: "A2",
    },
    {
      id: "fc17",
      de: "reservieren",
      ar: "يحجز",
      example: "Ich habe einen Tisch auf den Namen Haddad reserviert.",
      exampleAr: "حجزتُ طاولةً باسم حدّاد.",
      level: "A2",
    },
    {
      id: "fc18",
      de: "Zusammen oder getrennt?",
      ar: "معاً أم كلٌّ على حدة؟ (سؤال الحساب)",
      example: "Zusammen oder getrennt? – Getrennt, bitte.",
      exampleAr: "معاً أم كلٌّ على حدة؟ — كلٌّ على حدة.",
      level: "A2",
    },
    {
      id: "fc19",
      de: "das Trinkgeld",
      ar: "الإكرامية (تختلف أعرافها؛ يذكر دليل برلين المحلي أنها اختيارية)",
      example: "Der Kellner bekommt ein Trinkgeld von zwei Euro.",
      exampleAr: "يحصل النادل على إكرامية قدرها يورويْن.",
      level: "A2",
    },
    {
      id: "fc20",
      de: "Stimmt so.",
      ar: "احتفظ بالباقي (في سياق الدفع بالمثال)",
      example: "Hier sind fünfundzwanzig Euro. Stimmt so.",
      exampleAr: "هذه خمسة وعشرون يورو. احتفظ بالباقي.",
      level: "A2",
    },
    {
      id: "fc21",
      de: "heiß",
      ar: "ساخن (حرارةً — لا scharf!)",
      example: "Vorsicht, das Essen ist sehr heiß!",
      exampleAr: "احذر، الطعام ساخنٌ جداً!",
      level: "A2",
    },
    {
      id: "fc22",
      de: "scharf",
      ar: "حارّ/لاذع في الطعم",
      example: "Ich esse nichts Scharfes.",
      exampleAr: "لا آكل شيئاً حارّاً.",
      level: "A2",
    },
    {
      id: "fc23",
      de: "salzig",
      ar: "مالح",
      example: "Die Suppe ist ein bisschen salzig.",
      exampleAr: "الشوربة مالحةٌ قليلاً.",
      level: "A2",
    },
    {
      id: "fc24",
      de: "satt",
      ar: "شبعان",
      example: "Danke, ich bin satt.",
      exampleAr: "شكراً، أنا شبعان.",
      level: "A2",
    },
    {
      id: "fc25",
      de: "etwas Warmes",
      ar: "شيء دافئ؛ Warmes اسم مشتق من صفة في هذا المثال",
      example: "Ich möchte etwas Warmes essen.",
      exampleAr: "أودّ أن آكل شيئاً دافئاً.",
      level: "A2",
    },
    {
      id: "fc26",
      de: "Guten Appetit!",
      ar: "بالهناء! يمكن الردّ بـDanke أو gleichfalls بحسب الموقف",
      example: "Guten Appetit! – Danke, gleichfalls!",
      exampleAr: "بالهناء! — شكراً، وأنت كذلك!",
      level: "A2",
    },
  ];



  /* ═══ الوساطة والتفاعل ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-03-1",
      type: "simplify-announcement",
      titleAr: "بسّط قائمة طعام ألمانية بالعربية",
      sourceDe:
        "Vorspeise: Gemüsesuppe. Hauptgericht: Schnitzel mit Pommes oder Bratwurst mit Sauerkraut. Dessert: Apfelstrudel.",
      taskAr:
        "انقل القائمة بالعربية: المقبلات، الطبق الرئيسي بخياراته، والحلوى.",
      modelAnswerAr:
        "«مقبلات: شوربة خضار. طبق رئيسي: شنيتزل مع بطاطس أو سجق مع ملفوف مخلل. حلوى: ستروديل تفاح.»",
      keyPointsAr: ["نقلت المقبلات", "ذكرت خياري الطبق الرئيسي", "نقلت الحلوى"],
    },
  ];


export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-03-1",
      scenarioAr: "في مطعم — تطلب وتشكو من الطبق.",
      scenarioDe: "Im Restaurant — du bestellst und reklamierst.",
      strategyAr: "الاستراتيجية: اربط الردّ بالسؤال، واذكر المشكلة المحددة بوضوح.",
      rounds: [
        {
          speakerDe: "Was möchten Sie bestellen?",
          speakerAr: "ماذا تريد أن تطلب؟",
          options: [
            {
              de: "Ich hätte gern das Schnitzel mit Pommes, bitte.",
              ar: "أريد الشنيتزل مع البطاطس من فضلك.",
              best: true,
              replyDe: "Sehr gerne. Etwas zu trinken?",
              replyAr: "بكل سرور. شيء للشرب؟",
            },
            {
              de: "Ich möchte die Rechnung sofort.",
              ar: "أريد الحساب فوراً.",
              best: false,
              replyDe: "Sie haben noch nichts bestellt!",
              replyAr: "لم تطلب شيئاً بعد!",
            },
          ],
        },
        {
          speakerDe: "Ist mit dem Schnitzel alles in Ordnung?",
          speakerAr: "هل كل شيء على ما يرام مع الشنيتزل؟",
          options: [
            {
              de: "Entschuldigung, das Schnitzel ist leider kalt. Können Sie es bitte noch einmal erwärmen?",
              ar: "عذراً، الشنيتزل بارد للأسف. هل يمكنكم تسخينه مرةً أخرى من فضلكم؟",
              best: true,
              replyDe: "Es tut mir leid. Ich kläre das mit der Küche.",
              replyAr: "أعتذر. سأتحقق من الأمر مع المطبخ.",
            },
            {
              de: "Das Schnitzel ist kalt. Sie sind schrecklich!",
              ar: "الشنيتزل بارد. أنت فظيع!",
              best: false,
              replyDe: "Bitte bleiben Sie höflich. Ich löse das Problem.",
              replyAr: "رجاءً كن مهذباً. سأحل المشكلة.",
            },
          ],
        },
      ],
    },
  ];
