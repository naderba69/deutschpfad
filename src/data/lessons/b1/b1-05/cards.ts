/**
 * b1-05 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الشرطية الماضية:",
      questionDe: "Ich ___ gestern ___. (ذهاب)",
      options: ["wäre ... gegangen", "hätte ... gegangen", "wäre ... gegeht", "habe ... gegangen"],
      correctIndex: 0,
      explanation: "gehen يأخذ sein في Perfekt → wäre gegangen.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«hätte ... gegangen» تستعمل haben، ولا تناسب gehen الذي يأخذ sein.",
        "«wäre ... gegeht» صيغة Partizip II خاطئة؛ الصحيح gegangen.",
        "«habe ... gegangen» مضارع، ولا يناسب الشرط غير الواقعي.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الشرطية الماضية:",
      questionDe: "Sie ___ es ___. (فعل)",
      options: ["hätte ... gemacht", "wäre ... gemacht", "hätte ... machen", "hat ... gemacht"],
      correctIndex: 0,
      explanation: "machen عادي → hätte gemacht.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wäre ... gemacht» تستعمل sein، ولا تناسب machen الذي يأخذ haben.",
        "«hätte ... machen» مصدر بدل Partizip II، ولا تصح.",
        "«hat ... gemacht» مضارع، ولا تعبّر عن الماضي غير الواقعي.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["wäre", "früher", "Ich", "geworden", "fit", "Wenn", "ich", "Sport", "hätte", "gemacht", ","],
      correctSentence: "Wenn ich Sport gemacht hätte, wäre ich früher fit geworden.",
      explanation: "لو كنت مارست الرياضة لكنت أليق مبكراً.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "في الجملة خطأ واحد: اختر التصحيح الصحيح للكلمة المخطئة.",
      wrongSentence: "Ich hätte gestern gegangen.",
      wrongWord: "hätte",
      correctWord: "wäre",
      options: ["wäre", "hätte", "würde", "sei"],
      explanation: "gehen يأخذ sein في Perfekt، لذا Konjunktiv II هنا بـ wäre: Ich wäre gestern gegangen.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالصيغة المستهدفة في الدرس؛ وفي الجملة الثانية استخدم Konjunktiv II:",
      template: "Wenn ich ___ (لو كنت قد عرفت), hätte ich anders gehandelt. Er tut so, als ob er alles ___.",
      blanks: [
        { correct: "gewusst hätte", options: ["gewusst hätte", "weiß", "gewusst"] },
        { correct: "wüsste", options: ["wüsste", "gewusst", "wissen"] },
      ],
      explanation: "gewusst hätte (ماضٍ شرطي) + wüsste (als ob).",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Gesundheit", ar: "الصحة", example: "Gesundheit ist wichtig.", exampleAr: "الصحة مهمة.", level: "B1" },
    { id: "fc2", de: "die Prävention", ar: "الوقاية", example: "Prävention ist besser als Heilung.", exampleAr: "الوقاية خير من العلاج.", level: "B1" },
    { id: "fc3", de: "fit", ar: "لائق", example: "Ich bin fit.", exampleAr: "أنا لائق.", level: "B1" },
    { id: "fc4", de: "trainieren", ar: "يتدرب", example: "Ich trainiere dreimal pro Woche.", exampleAr: "أتدرب ثلاث مرات أسبوعياً.", level: "B1" },
    { id: "fc5", de: "hätte + Partizip II", ar: "كنت سأفعل (ماضٍ شرطي)", example: "Ich hätte gemacht.", exampleAr: "كنت سأفعل.", level: "B1" },
    { id: "fc6", de: "wäre + Partizip II", ar: "صيغة ماضٍ شرطي بفعل يأخذ sein في Perfekt", example: "Ich wäre gegangen.", exampleAr: "كنت سأذهب.", level: "B1" },
    { id: "fc7", de: "als ob", ar: "كما لو", example: "als ob er alles wüsste", exampleAr: "كما لو أنه يعرف كل شيء", level: "B1" },
    { id: "fc8", de: "die Bewegung", ar: "الحركة/النشاط", example: "Bewegung kann gesundheitsfördernd sein.", exampleAr: "قد تدعم الحركة الصحة.", level: "B1" },
    { id: "fc9", de: "der Bericht", ar: "التقرير", example: "Der Bericht nennt ein Beispiel.", exampleAr: "يذكر التقرير مثالاً.", level: "B1" },
    { id: "fc10", de: "die Ursache", ar: "السبب", example: "Die Ursache ist noch unklar.", exampleAr: "السبب لا يزال غير واضح.", level: "B1" },
    { id: "fc11", de: "bereuen", ar: "يندم على", example: "Ich bereue, dass ich so viel gearbeitet habe.", exampleAr: "أندم على أنني عملت كثيراً.", level: "B1" },
    { id: "fc12", de: "die Gewohnheit", ar: "العادة", example: "Ich möchte eine Gewohnheit ändern.", exampleAr: "أودّ تغيير عادة.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b1-05-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً ونقل موقف الكاتب بالعربية",
      sourceDe: "Fiktives Übungsbeispiel: Eine Stadt plant, mehr Fahrradwege zu bauen. Befürworter sagen, das sei gut für die Umwelt. Einige Anwohner sind dagegen, weil Parkplätze wegfallen könnten. Die Situation und die Personen sind erfunden.",
      taskAr: "انقل الخبر بالعربية مع ذكر وجهتي النظر (المؤيدون والمعارضون) دون إبداء رأيك الخاص.",
      modelAnswerAr: "«مثال تدريبي خيالي: تخطط مدينة لبناء مسارات إضافية للدراجات. ويرى المؤيدون أن ذلك مفيد للبيئة، بينما يعارض بعض السكان لاحتمال زوال مواقف سيارات. الموقف والشخصيات مختلقة.»",
      keyPointsAr: ["نقلت الفكرة الرئيسية (مسارات دراجات)", "ذكرت موقف المؤيدين", "ذكرت موقف المعارضين (مواقف السيارات)"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-05-1",
      scenarioAr: "نقاش تدريبي خيالي عن الأخبار المزيفة؛ الأمثلة المختلقة ليست أخباراً أو بيانات حقيقية.",
      scenarioDe: "Fiktive Übungsdiskussion über Fake News; die Beispiele sind erfunden und keine realen Nachrichten oder Daten.",
      strategyAr: "الاستراتيجية: إبداء رأي مبرر، الاستشهاد بأمثلة، والاعتراض بلطف.",
      rounds: [
        {
          speakerDe: "Findest du, dass Fake News ein großes Problem sind?",
          speakerAr: "هل تجد أن الأخبار المزيفة مشكلة كبيرة؟",
          options: [
            { de: "Ja, meiner Meinung nach können sie problematisch sein, wenn Menschen sie für wahr halten.", ar: "نعم، في رأيي قد تكون مشكلة إذا اعتقد الناس أنها صحيحة.", best: true, replyDe: "Das kann passieren. Hast du ein konkretes Beispiel?", replyAr: "قد يحدث ذلك. هل لديك مثال محدد؟" },
            { de: "Nein, das Problem ist übertrieben.", ar: "لا، المشكلة مبالغ فيها.", best: false, replyDe: "Wie kommst du zu dieser Einschätzung?", replyAr: "ما الذي يجعلك ترى الأمر بهذه الطريقة؟" },
          ],
        },
        {
          speakerDe: "Hast du ein Beispiel für Fake News?",
          speakerAr: "هل لديك مثال على الأخبار المزيفة؟",
          options: [
            { de: "Ein erfundenes Beispiel: Ein Beitrag behauptet, die Stadtbibliothek sei dauerhaft geschlossen, obwohl sie geöffnet ist.", ar: "مثال مختلق: منشور يزعم أن مكتبة المدينة أُغلقت نهائياً، مع أنها ما زالت مفتوحة.", best: true, replyDe: "Das ist ein gutes Beispiel. Wie kann man sie erkennen?", replyAr: "هذا مثال جيد. كيف يمكن اكتشافها؟" },
            { de: "Nein, ich habe kein Beispiel.", ar: "لا، ليس لدي مثال.", best: false, replyDe: "Ohne Beispiel ist die Diskussion schwierig.", replyAr: "بدون مثال يصعب النقاش." },
          ],
        },
        {
          speakerDe: "Wie kann man Fake News erkennen?",
          speakerAr: "كيف يمكن اكتشاف الأخبار المزيفة؟",
          options: [
            { de: "Man sollte die Quelle prüfen und verschiedene Nachrichten vergleichen. Außerdem sollte man kritisch denken.", ar: "يجب فحص المصدر ومقارنة الأخبار المختلفة. كما يجب التفكير النقدي.", best: true, replyDe: "Sehr gute Tipps! Ich werde sie anwenden.", replyAr: "نصائح ممتازة! سأطبقها." },
            { de: "Das ist unmöglich zu erkennen.", ar: "من المستحيل اكتشافها.", best: false, replyDe: "Das ist zu pessimistisch. Es gibt konkrete Methoden.", replyAr: "هذا تشاؤم مفرط. توجد طرق ملموسة." },
          ],
        },
      ],
    },
  ];
