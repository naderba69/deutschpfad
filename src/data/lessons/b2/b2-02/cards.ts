/**
 * b2-02 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الحالة:",
      questionDe: "Der Vertrag ___ unterschrieben. (موقَّع — النتيجة)",
      options: ["ist", "wird", "hat", "wurde"],
      correctIndex: 0,
      explanation: "Zustandspassiv = sein + Partizip II ويصف النتيجة الباقية: der Vertrag ist unterschrieben. أما wird/wurde فيصفان الحدث نفسه.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wird» صيغة المضارع، ولا تناسب حالة العقد الموقّع.",
        "«hat» مع المبني للمجهول لا تعطي الحالة، ولا تناسب الجملة.",
        "«wurde» صيغة الماضي، ولا تناسب الحالة المكتملة.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإمكانية:",
      questionDe: "Das Problem lässt ___ lösen.",
      options: ["sich", "mich", "dich", "uns"],
      correctIndex: 0,
      explanation: "sich lassen.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«mich» ضمير لا يناسب lässt sich، والفاعل هنا غير المتكلم.",
        "«dich» ضمير لا يناسب lässt sich، والفاعل هنا غير المخاطب.",
        "«uns» ضمير لا يناسب lässt sich، والفاعل هنا غير الجماعة.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["geliefert", "kann", "werden", "Die", "Ware", "."],
      correctSentence: "Die Ware kann geliefert werden.",
      explanation: "إمكانية: kann + PII + werden.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das Fenster ist geöffnen.",
      wrongWord: "geöffnen",
      correctWord: "geöffnet",
      options: ["geöffnet", "geöffnen", "worden", "offen"],
      explanation: "الحالة تحتاج Partizip II (geöffnet)، لا المصدر geöffnen.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Das Wasser ist trink___ (قابل للشرب). Die Tür lässt ___ öffnen.",
      blanks: [
        { correct: "bar", options: ["bar", "lich", "sam"] },
        { correct: "sich", options: ["sich", "mich", "dich"] },
      ],
      explanation: "trinkbar + lässt sich.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Wirtschaft", ar: "الاقتصاد", example: "Die Wirtschaft wächst.", exampleAr: "ينمو الاقتصاد.", level: "B2" },
    { id: "fc2", de: "der Umsatz", ar: "الإيراد/حجم المبيعات", example: "Der Umsatz steigt.", exampleAr: "ترتفع الإيرادات.", level: "B2" },
    { id: "fc3", de: "die Inflation", ar: "التضخم", example: "Die Inflation ist hoch.", exampleAr: "التضخم مرتفع.", level: "B2" },
    { id: "fc4", de: "der Vertrag", ar: "العقد", example: "Der Vertrag ist unterschrieben.", exampleAr: "العقد موقع.", level: "B2" },
    { id: "fc5", de: "das Zustandspassiv", ar: "مجهول الحالة", example: "ist geöffnet", exampleAr: "مفتوح", level: "B2" },
    { id: "fc6", de: "sich lassen", ar: "يمكن (بحسب السياق)", example: "Das Problem lässt sich lösen.", exampleAr: "يمكن حل المشكلة.", level: "B2" },
    { id: "fc7", de: "-bar", ar: "قابل للـ", example: "trinkbar, durchführbar", exampleAr: "صالح للشرب/قابل للتنفيذ", level: "B2" },
    { id: "fc8", de: "die Lieferung", ar: "التسليم", example: "Die Lieferung kommt morgen.", exampleAr: "يأتي التسليم غداً.", level: "B2" },
    { id: "fc9", de: "Passiv + Modalverb", ar: "المجهول مع الناقصة", example: "Die Ware kann geliefert werden.", exampleAr: "يمكن تسليم البضاعة.", level: "B2" },
    { id: "fc10", de: "sein + zu + Infinitiv", ar: "يجب/يمكن (رسمي)", example: "Das Problem ist zu lösen.", exampleAr: "المشكلة يجب حلها.", level: "B2" },
    { id: "fc11", de: "die Schulden", ar: "الديون", example: "Die Schulden der großen Unternehmen sind zurückgegangen.", exampleAr: "انخفضت ديون الشركات الكبرى.", level: "B2" },
    { id: "fc12", de: "der Aufschwung", ar: "الانتعاش", example: "Die eine Seite rechnet mit einem Aufschwung.", exampleAr: "أحد الطرفين يحسب حساب انتعاش.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-02-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مثالاً اقتصادياً خيالياً بالعربية",
      sourceDe: "Fiktives Übungsbeispiel: Die Inflation ist im letzten Quartal auf 2,5 Prozent gesunken. Die Zentralbank sieht darin ein Zeichen der Erholung, warnt aber vor steigenden Energiekosten.",
      taskAr: "لخّص المثال التدريبي الخيالي: الانخفاض المفترض، تفسير البنك المركزي الافتراضي، والتحذير.",
      modelAnswerAr: "«انخفض التضخم في الربع الأخير إلى 2.5%. يراه البنك المركزي علامة تعافٍ، لكنه يحذر من ارتفاع تكاليف الطاقة.»",
      keyPointsAr: ["نقلت نسبة التضخم (2.5%)", "ذكرت تفسير البنك (تعافٍ)", "نقلت التحذير من الطاقة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-02-1",
      scenarioAr: "نقاش تدريبي عام عن أثر العولمة في الاقتصاد.",
      scenarioDe: "Diskussion über die Globalisierung.",
      strategyAr: "وازن الرأي، واستعمل المجهول مع فعل ناقص لعرض الإمكان أو الضرورة عند ملاءمتهما.",
      rounds: [
        {
          speakerDe: "Hat die Globalisierung mehr Vorteile oder Nachteile?",
          speakerAr: "هل للعولمة مزايا أكثر أم عيوب؟",
          options: [
            { de: "Während der Handel durch klare Regeln gefördert werden kann, müssen soziale Folgen berücksichtigt werden.", ar: "في حين يمكن تشجيع التجارة بقواعد واضحة، يجب أخذ الآثار الاجتماعية في الاعتبار.", best: true, replyDe: "Eine differenzierte Antwort. Wie lassen sich die Nachteile verringern?", replyAr: "إجابة متوازنة. كيف يمكن الحد من العيوب؟" },
            { de: "Alle Grenzen müssen sofort geschlossen werden.", ar: "يجب إغلاق كل الحدود فوراً.", best: false, replyDe: "Das ist zu pauschal. Die Folgen einer solchen Maßnahme müssten geprüft werden.", replyAr: "هذا تعميم واسع. ينبغي تقييم عواقب إجراء كهذا." },
          ],
        },
        {
          speakerDe: "Wie lassen sich die Nachteile der Globalisierung verringern?",
          speakerAr: "كيف يمكن الحد من عيوب العولمة؟",
          options: [
            { de: "Meiner Ansicht nach müssen faire Handelsregeln ausgearbeitet werden; außerdem kann in Bildung investiert werden. Das könnte Chancen gerechter verteilen.", ar: "في رأيي، يجب وضع قواعد تجارية عادلة؛ ويمكن أيضاً الاستثمار في التعليم. وقد يساعد ذلك على توزيع الفرص بعدالة أكبر.", best: true, replyDe: "Ein konstruktiver Vorschlag. Allerdings ist die Umsetzung komplex.", replyAr: "اقتراح بناء. لكن التنفيذ معقد." },
            { de: "Alle Grenzen müssen geschlossen werden.", ar: "يجب إغلاق كل الحدود.", best: false, replyDe: "Das ist zu pauschal. Die Folgen einer solchen Maßnahme müssten geprüft werden.", replyAr: "هذا تعميم واسع. ينبغي تقييم عواقب إجراء كهذا." },
          ],
        },
      ],
    },
  ];
