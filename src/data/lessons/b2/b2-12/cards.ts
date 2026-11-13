/**
 * b2-12 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * وحدة «المهن المتقدمة»: اختبار مصغر، بطاقات مفردات، وساطة وتفاعل.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
  {
    id: "m1",
    type: "multiple-choice",
    instructionAr: "اختر صيغة الشرط الصحيحة:",
    questionDe: "Was ___ Sie in Ihrer Karriere anders machen?",
    options: ["würden", "werden", "wollen", "sind"],
    correctIndex: 0,
    explanation: "سؤال عن فرضية ماضية: würden (صيغة الشرط مع Sie).",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«werden» مضارع، ولا يناسب الفرضية.",
      "«wollen» مضارع، ولا يناسب الفرضية.",
      "«sind» مضارع، ولا يناسب الفرضية.",
    ],
  },
  {
    id: "m2",
    type: "multiple-choice",
    instructionAr: "اختر المبني للمجهول الصحيح:",
    questionDe: "Die Unterlagen ___ sorgfältig geprüft.",
    options: ["wurden", "wurde", "werden", "worden"],
    correctIndex: 0,
    explanation: "المبني للمجهول في الماضي البسيط مع جمع: wurden + Partizip II.",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«wurde» للمفرد، والفاعل جمع (die Unterlagen).",
      "«werden» مضارع، والجملة في الماضي.",
      "«worden» لا تأتي وحدها؛ تحتاج sein.",
    ],
  },
  {
    id: "m3",
    type: "word-ordering",
    instructionAr: "رتّب الجملة:",
    tokens: ["Ich", "würde", "gern", "in", "Ihrem", "Team", "arbeiten", "."],
    correctSentence: "Ich würde gern in Ihrem Team arbeiten.",
    explanation: "رغبة مهذبة: würde gern + المصدر في النهاية.",
    errorType: "word-order",
  },
  {
    id: "m4",
    type: "error-correction",
    instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
    wrongSentence: "Die Leistungen wurden anerkannt haben.",
    wrongWord: "anerkannt haben",
    correctWord: "anerkannt worden",
    options: ["anerkannt worden", "anerkannt haben", "anerkannt gewesen", "anerkannt sein"],
    explanation: "الماضي التام للمجهول: sein + Partizip II + worden.",
    errorType: "grammar",
  },
  {
    id: "m5",
    type: "fill-blank",
    instructionAr: "أكمل بصيغة الشرط:",
    template: "Wenn ich die Weiterbildung ___ hätte, wäre ich heute Führungskraft.",
    blanks: [
      { correct: "gemacht", options: ["gemacht", "machen", "mache"] },
    ],
    explanation: "الشرط الماضي: hätte + Partizip II (gemacht).",
    errorType: "grammar",
  },
];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
  { id: "fc1", de: "die Beförderung", ar: "الترقية", example: "Die Beförderung ist möglich.", exampleAr: "الترقية ممكنة.", level: "B2" },
  { id: "fc2", de: "die Weiterbildung", ar: "التدريب المستمر", example: "Die Weiterbildung beginnt im Herbst.", exampleAr: "يبدأ التدريب المستمر في الخريف.", level: "B2" },
  { id: "fc3", de: "die Führungskraft", ar: "القائد/المدير", example: "Die Führungskraft entscheidet.", exampleAr: "القائد يقرر.", level: "B2" },
  { id: "fc4", de: "die Verantwortung", ar: "المسؤولية", example: "Verantwortung übernehmen.", exampleAr: "تولّي المسؤولية.", level: "B2" },
  { id: "fc5", de: "der Lebenslauf", ar: "السيرة الذاتية", example: "Den Lebenslauf erstellen.", exampleAr: "إعداد السيرة الذاتية.", level: "B2" },
  { id: "fc6", de: "das Arbeitszeugnis", ar: "شهادة العمل", example: "Ein Arbeitszeugnis erhalten.", exampleAr: "الحصول على شهادة عمل.", level: "B2" },
  { id: "fc7", de: "die Geschäftsführung", ar: "الإدارة", example: "Die Geschäftsführung entscheidet.", exampleAr: "الإدارة تقرر.", level: "B2" },
  { id: "fc8", de: "die Leistung", ar: "الإنجاز/الأداء", example: "Die Leistung wurde anerkannt.", exampleAr: "اعتُرفت بالإنجاز.", level: "B2" },
  { id: "fc9", de: "die Entwicklungsziele", ar: "أهداف التطوير", example: "Entwicklungsziele besprechen.", exampleAr: "مناقشة أهداف التطوير.", level: "B2" },
  { id: "fc10", de: "die Führungskompetenz", ar: "الكفاءة القيادية", example: "Führungskompetenzen stärken.", exampleAr: "تقوية الكفاءات القيادية.", level: "B2" },
  { id: "fc11", de: "würde gern", ar: "أودّ (رغبة مهذبة)", example: "Ich würde gern arbeiten.", exampleAr: "أودّ العمل.", level: "B2" },
  { id: "fc12", de: "bekäme (Konjunktiv II)", ar: "لو حصلت (صيغة الشرط)", example: "Wenn ich die Stelle bekäme...", exampleAr: "لو حصلت على المنصب...", level: "B2" },
  { id: "fc13", de: "wurden abgeschlossen", ar: "أُنجزت (مبني للمجهول)", example: "Die Projekte wurden abgeschlossen.", exampleAr: "أُنجزت المشاريع.", level: "B2" },
  { id: "fc14", de: "von der Geschäftsführung anerkannt", ar: "اعتُرفت به من الإدارة", example: "Die Leistung wurde anerkannt.", exampleAr: "اعتُرفت بالإنجاز.", level: "B2" },
];

export const mediation: NonNullable<Lesson["mediation"]> = [
  {
    id: "med-b2-12-1",
    type: "summarize-de-to-ar",
    titleAr: "لخّص حالة افتراضية عن الترقية بالعربية",
    sourceDe: "Fiktiver Fall, keine Studie: In einem erfundenen Betrieb wurde eine Mitarbeiterin nach drei Jahren zur Führungskraft befördert. Ihre Leistungen wurden anerkannt, und sie hatte eine Weiterbildung gemacht. Die Geschäftsführung meint, dass Entwicklung besser gelingt, wenn Ziele gemeinsam festgelegt werden.",
    taskAr: "لخّص الحالة الافتراضية، وميّز بوضوح بين ما يذكره السيناريو وما لا يمكن تعميمه على بيئات العمل.",
    modelAnswerAr: "«في الحالة الافتراضية رُقّيت موظفة إلى قائدة بعد ثلاث سنوات، واعتُرفت بإنجازاتها، وكانت قد أتمت تدريباً مستمراً. وترى الإدارة أن التطوير ينجح على نحو أفضل عندما تُحدَّد الأهداف بشكل مشترك. ولا تمثّل هذه الحالة دراسة أو قاعدة عامة.»",
    keyPointsAr: ["أوضح أن السيناريو افتراضي وليس دراسة", "ذكر الترقية بعد ثلاث سنوات واعتراف الإدارة بالإنجازات", "ذكر رأي الإدارة في تحديد الأهداف بشكل مشترك"],
  },
];

export const interaction: NonNullable<Lesson["interaction"]> = [
  {
    id: "int-b2-12-1",
    scenarioAr: "نقاش عن الترقية والتطوير المهني في شركتك.",
    scenarioDe: "Diskussion über Beförderung und Karriereentwicklung.",
    strategyAr: "الاستراتيجية: مناقشة مهنية مع موازنة بين الطموح والواقعية.",
    rounds: [
      {
        speakerDe: "Sollten Mitarbeiter ihre Karriereziele offen mit der Leitung besprechen?",
        speakerAr: "هل يجب على الموظفين مناقشة أهدافهم المهنية بصراحة مع الإدارة؟",
        options: [
          { de: "Meiner Ansicht nach ja, denn so können Entwicklungspläne erstellt werden. Wenn Ziele offen besprochen werden, können beide Seiten profitieren.", ar: "في رأيي نعم، لأنه يمكن إعداد خطط تطوير. وعندما تُناقش الأهداف بصراحة يستفيد الطرفان.", best: true, replyDe: "Ein überzeugendes Argument. Aber wie steht es mit der Angst vor Ablehnung?", replyAr: "حجة مقنعة. لكن ماذا عن الخوف من الرفض؟" },
          { de: "Nein, man sollte niemals über Ziele sprechen.", ar: "لا، لا يجب التحدث عن الأهداف أبداً.", best: false, replyDe: "Das ist zu pauschal. Offene Gespräche können sehr hilfreich sein.", replyAr: "هذا تعميم مفرط. المحادثات الصريحة يمكن أن تكون مفيدة جداً." },
        ],
      },
      {
        speakerDe: "Wie kann man eine Beförderung am besten vorbereiten?",
        speakerAr: "كيف يمكن التحضير للترقية على أفضل وجه؟",
        options: [
          { de: "Man könnte Leistungen dokumentieren und eine Weiterbildung machen. So werden die Chancen auf eine Beförderung deutlich erhöht.", ar: "يمكن توثيق الإنجازات والقيام بتدريب مستمر. وهكذا تزداد فرص الترقية بشكل واضح.", best: true, replyDe: "Eine pragmatische Strategie, die beide Seiten berücksichtigt.", replyAr: "استراتيجية عملية تراعي الطرفين." },
          { de: "Man muss nur warten, die Beförderung kommt von allein.", ar: "يجب الانتظار فقط، الترقية تأتي وحدها.", best: false, replyDe: "Mit guter Vorbereitung sind die Chancen deutlich besser.", replyAr: "بالتحضير الجيد تكون الفرص أفضل بكثير." },
        ],
      },
    ],
  },
];
