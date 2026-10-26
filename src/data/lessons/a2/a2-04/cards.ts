/**
 * a2-04 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-04.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة للوجهة:",
      questionDe: "Ich stelle die Vase auf ___ Tisch. (Wohin?)",
      options: ["den", "dem", "der", "das"], correctIndex: 0,
      explanation: "الطاولة وجهة وضع المزهرية: auf den Tisch.", errorType: "case",
      optionExplanations: [
        undefined,
        "«dem» Dativ للموضع؛ والسؤال «Wohin?» ⇒ Akkusativ «auf den Tisch».",
        "«der» مرفوع أو مؤنث؛ و«Tisch» مذكّر منصوب هنا.",
        "«das» محايد؛ و«der Tisch» مذكّر. ",
      ],
    },
    {
      id: "m2", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة للموضع:",
      questionDe: "Die Vase steht auf ___ Tisch. (Wo?)",
      options: ["dem", "den", "der", "das"], correctIndex: 0,
      explanation: "الجملة تصف موضع المزهرية: auf dem Tisch.", errorType: "case",
      optionExplanations: [
        undefined,
        "«den» منصوبٌ للوجهة؛ و«Wo steht die Vase?» موضعٌ ⇒ Dativ.",
        "«der» مرفوع أو مؤنث؛ و«der Tisch» مذكّر في Dativ ⇒ «dem».",
        "«das» محايد؛ والاسم «der Tisch» مذكّر. ",
      ],
    },
    {
      id: "m3", type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["die", "Wand", "an", "Ich", "Bild", "das", "hänge", "."],
      correctSentence: "Ich hänge das Bild an die Wand.",
      explanation: "في هذا المثال الجدار هو وجهة التعليق: an die Wand.", errorType: "word-order",
    },
    {
      id: "m4", type: "error-correction",
      instructionAr: "صحّح أداة المكان:",
      wrongSentence: "Die Katze liegt unter den Bett.",
      wrongWord: "unter den", correctWord: "unter dem", options: ["unter dem", "unter den", "unter das", "unter der"],
      explanation: "Bett محايد، والجملة تصف موضع القطة؛ لذلك unter dem Bett.", errorType: "case",
    },
    {
      id: "m5", type: "fill-blank",
      instructionAr: "أكمل بالأداة الصحيحة: موضع الأريكة ثم وجهة الكرسي:",
      template: "Der Tisch steht neben ___ Sofa. Ich stelle den Stuhl neben ___ Sofa.",
      blanks: [
        { correct: "dem", options: ["dem", "den"] },
        { correct: "das", options: ["das", "dem"] },
      ],
      explanation: "الموضع neben dem Sofa، لكن الأريكة (das Sofa) وجهة وضع الكرسي: neben das Sofa.", errorType: "case",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "umziehen",
      ar: "ينتقل (سكناً)",
      example: "Ich bin umgezogen.",
      exampleAr: "انتقلت.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Miete",
      ar: "الإيجار",
      example: "Die Miete ist hoch.",
      exampleAr: "الإيجار مرتفع.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "der Vermieter",
      ar: "المؤجر",
      example: "Der Vermieter ist nett.",
      exampleAr: "المؤجر لطيف.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "die Wechselpräpositionen",
      ar: "حروف الجر المتغيرة",
      example: "in, an, auf, über, unter...",
      exampleAr: "في، على، فوق، تحت...",
      level: "A2",
    },
    {
      id: "fc5",
      de: "wo? (Dativ) / wohin? (Akkusativ)",
      ar: "أين؟ (موضع أو مكان الحركة) / إلى أين؟ (الوجهة)",
      example: "auf dem Tisch / auf den Tisch",
      exampleAr: "على الطاولة (موضع) / إلى الطاولة (وجهة)",
      level: "A2",
    },
    {
      id: "fc6",
      de: "stellen / stehen",
      ar: "يضع الشيء قائماً في هذا المشهد / يكون قائماً",
      example: "Ich stelle die Lampe neben das Sofa.",
      exampleAr: "أضع المصباح بجانب الأريكة.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "legen / liegen",
      ar: "يضعه ممدّداً / يكون ممدّداً أو موضوعاً",
      example: "Ich lege das Buch auf den Tisch.",
      exampleAr: "أضع الكتاب على الطاولة.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Anzeige",
      ar: "الإعلان",
      example: "Die Anzeige ist im Internet.",
      exampleAr: "الإعلان على الإنترنت.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "der Nachbar",
      ar: "الجار",
      example: "Der Nachbar ist freundlich.",
      exampleAr: "الجار ودود.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "die Hausordnung",
      ar: "نظام البيت/قواعد البناء",
      example: "Bitte lesen Sie die Hausordnung dieses Hauses.",
      exampleAr: "يُرجى قراءة نظام هذا المبنى.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "die Ruhezeiten",
      ar: "أوقات الهدوء",
      example: "In dieser Hausordnung stehen Ruhezeiten von 13 bis 15 Uhr.",
      exampleAr: "ينص نظام هذا المبنى على أوقات هدوء من 13 إلى 15.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "der Hausflur",
      ar: "ممر المبنى",
      example: "Der Hausflur ist sauber.",
      exampleAr: "ممر المبنى نظيف.",
      level: "A2",
    },
    {
      id: "f13",
      de: "die Kaltmiete / die Warmmiete",
      ar: "الإيجار الأساسي / الإيجار مع التكاليف المدرجة عادةً",
      example: "Die Kaltmiete beträgt 640 Euro. Die Warmmiete beträgt 830 Euro.",
      exampleAr: "الإيجار الأساسي 640 يورو، والإيجار مع التكاليف المدرجة في هذا العرض 830 يورو.",
      level: "A2",
    },
    {
      id: "f14",
      de: "die Nebenkosten",
      ar: "تكاليف جانبية بحسب الاتفاق",
      example: "Sind die Nebenkosten in der Warmmiete enthalten?",
      exampleAr: "هل المصاريف الإضافيّة داخلةٌ في الإيجار الشامل؟",
      level: "A2",
    },
    {
      id: "f15",
      de: "die Kaution",
      ar: "مبلغ ضمان للسكن؛ شروط وتوقيت ردّه بحسب التسوية",
      example: "Die Kaution beträgt zwei Kaltmieten.",
      exampleAr: "مبلغ الضمان يساوي إيجارين أساسيين.",
      level: "A2",
    },
    {
      id: "f16",
      de: "besichtigen / die Besichtigung",
      ar: "يعاين / المعاينة",
      example: "Ich möchte die Wohnung gern besichtigen.",
      exampleAr: "أودّ معاينة الشقّة.",
      level: "A2",
    },
    {
      id: "f17",
      de: "setzen / sitzen",
      ar: "يُجلِس / يجلس",
      example: "Ich setze mich auf den Sessel; jetzt sitze ich auf dem Sessel.",
      exampleAr: "أجلس على الكرسيّ؛ والآن أنا جالسٌ عليه.",
      level: "A2",
    },
    {
      id: "f18",
      de: "hängen / stecken",
      ar: "يعلّق أو يكون معلّقاً / يُدخل أو يوجد داخل موضع",
      example:
        "Der Mantel hängt an der Garderobe und der Schlüssel steckt im Schloss.",
      exampleAr: "المعطف معلّق على المشجب، والمفتاح داخل القفل.",
      level: "A2",
    },
    {
      id: "f19",
      de: "das Erdgeschoss",
      ar: "الطابق الأرضيّ",
      example: "Wir tragen die Kartons ins Erdgeschoss.",
      exampleAr: "نحمل الصناديق إلى الطابق الأرضيّ.",
      level: "A2",
    },
    {
      id: "f20",
      de: "das Übergabeprotokoll",
      ar: "محضر التسليم",
      example: "Notieren Sie vorhandene Schäden im Übergabeprotokoll.",
      exampleAr: "دوّن الأضرار الموجودة في محضر التسليم.",
      level: "A2",
    },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-04-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص إعلان سكن بالعربية لصديق",
      sourceDe: "Helle 3-Zimmer-Wohnung im 2. Obergeschoss. Balkon, Einbauküche, Keller. 750 Euro warm. Besichtigung am Samstag.",
      taskAr: "لخّص الإعلان: نوع الشقة، الطابق، المميزات، الإيجار، وموعد المعاينة. لا تفترض من كلمة warm وحدها كل التكاليف المشمولة.",
      modelAnswerAr: "شقة مضيئة من ثلاث غرف في الطابق الثاني فوق الأرضي. فيها شرفة ومطبخ مركّب وقبو. الإيجار المعلن 750 يورو Warmmiete؛ اسأل عمّا يشمله. المعاينة يوم السبت.",
      keyPointsAr: [
        "نقل عدد الغرف والطابق بدقة من دون خلط ترقيم الطوابق",
        "ذكر الشرفة والمطبخ المركب والقبو",
        "نقل مبلغ 750 يورو ووصفه كما ورد في الإعلان مع التنبيه إلى التحقق مما يشمله",
        "ذكر أن المعاينة يوم السبت",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-04-1",
      scenarioAr: "تتصل بمؤجّرة شقة لتسأل هل ما زالت متاحة وتطلب موعد معاينة.",
      scenarioDe: "Anruf bei der Vermieterin: Verfügbarkeit erfragen und eine Besichtigung vereinbaren.",
      strategyAr: "اختر رداً يحقق غرض الجولة. قد يكون المشتت سليماً نحوياً لكنه لا يناسب الموقف؛ هذا تفاعل نصي اختياري، وليس تقويماً للكلام.",
      rounds: [
        {
          speakerDe: "Guten Tag, rufen Sie wegen der Wohnungsanzeige an?",
          speakerAr: "طاب يومك، هل تتصل بخصوص إعلان الشقة؟",
          options: [
            {
              de: "Ja, genau. Ist die Wohnung noch frei?",
              ar: "نعم، بالضبط. هل الشقة ما زالت متاحة؟",
              best: true,
              replyDe: "Ja, sie ist noch frei. Möchten Sie sie besichtigen?",
              replyAr: "نعم، ما زالت متاحة. هل ترغب في معاينتها؟",
            },
            {
              de: "Nein, ich möchte ein Hotelzimmer reservieren.",
              ar: "لا، أريد حجز غرفة في فندق.",
              best: false,
              replyDe: "Hier geht es um eine Wohnungsanzeige.",
              replyAr: "المكالمة هنا بخصوص إعلان شقة.",
            },
          ],
        },
        {
          speakerDe: "Möchten Sie die Wohnung besichtigen?",
          speakerAr: "هل ترغب في معاينة الشقة؟",
          options: [
            {
              de: "Ja, gern. Wann wäre ein Termin möglich?",
              ar: "نعم، بكل سرور. متى يمكن تحديد موعد؟",
              best: true,
              replyDe: "Samstag um elf Uhr wäre möglich. Passt Ihnen das?",
              replyAr: "يمكن يوم السبت الساعة الحادية عشرة. هل يناسبك؟",
            },
            {
              de: "Ja, gern. Passt Ihnen Samstag um elf Uhr?",
              ar: "نعم، بكل سرور. هل يناسبك السبت الساعة الحادية عشرة؟",
              best: true,
              replyDe: "Samstag um elf Uhr passt. Ich notiere den Termin.",
              replyAr: "السبت الساعة الحادية عشرة مناسب. سأدوّن الموعد.",
            },
            {
              de: "Ich möchte lieber ein Auto mieten.",
              ar: "أفضل أن أستأجر سيارة.",
              best: false,
              replyDe: "Hier geht es um eine Wohnungsbesichtigung.",
              replyAr: "المكالمة هنا عن معاينة شقة.",
            },
          ],
        },
      ],
    },
  ];
