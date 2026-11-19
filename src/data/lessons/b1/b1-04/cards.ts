/**
 * b1-04 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv II:",
      questionDe: "Wenn ich reich ___, würde ich reisen.",
      options: ["wäre", "bin", "war", "werde"],
      correctIndex: 0,
      explanation: "الافتراض: wäre.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«bin» مضارع، والجملة شرط غير واقعي تحتاج Konjunktiv II.",
        "«war» ماضٍ، لا يناسب الشرط غير الواقعي.",
        "«werde» تعبّر عن المستقبل، ولا تناسب الشرط.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv II:",
      questionDe: "Ich ___ gern ein Buch ___. (قراءة)",
      options: ["würde ... lesen", "werde ... lesen", "würde ... gelesen", "würde ... lese"],
      correctIndex: 0,
      explanation: "würde + Infinitiv.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«werde ... lesen» تعبّر عن المستقبل، ولا تعبّر عن الرغبة.",
        "«würde ... gelesen» تستعمل Partizip II مع الفعل lesen، ولا يناسب الجملة.",
        "«würde ... lese» ترتيب وصيغة غير صحيحين، والمصدر يأتي في آخر الجملة.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["hätte", "ich", "Zeit", "Wenn", "würde", "ich", "lernen", ","],
      correctSentence: "Wenn ich Zeit hätte, würde ich lernen.",
      explanation: "لو كان عندي وقت لتعلمت — Konjunktiv II.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "في الجملة خطأ واحد: اختر التصحيح الصحيح للكلمة المخطئة.",
      wrongSentence: "Du solltest mehr Wasser getrunken.",
      wrongWord: "getrunken",
      correctWord: "trinken",
      options: ["trinken", "getrunken", "trinkst", "trank"],
      explanation: "solltest + Infinitiv (trinken).",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Ich ___ (كان يستطيع) helfen. Wenn ich du ___ (كنت)... ___ Sie bitte öffnen? (تهذيب)",
      blanks: [
        { correct: "könnte", options: ["könnte", "könnt", "könnten"] },
        { correct: "wäre", options: ["wäre", "war", "bin"] },
        { correct: "Könnten", options: ["Könnten", "Könnt", "Kann"] },
      ],
      explanation: "könnte، wäre، Könnten — رباعية الشرط.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "der Konjunktiv II", ar: "صيغة الافتراض والشرط", example: "Ich würde reisen.", exampleAr: "كنت سأسافر.", level: "B1" },
    { id: "fc2", de: "würde + Infinitiv", ar: "كنت سأفعل", example: "Ich würde lesen.", exampleAr: "كنت سأقرأ.", level: "B1" },
    { id: "fc3", de: "wäre", ar: "كان سيكون", example: "Wenn ich reich wäre...", exampleAr: "لو كنت غنياً...", level: "B1" },
    { id: "fc4", de: "hätte", ar: "أودّ أن يكون لديّ", example: "Ich hätte gern Zeit.", exampleAr: "أودّ أن يكون لديّ وقت.", level: "B1" },
    { id: "fc5", de: "könnte", ar: "كان يستطيع", example: "Könnten Sie helfen?", exampleAr: "هل يمكنكم المساعدة؟", level: "B1" },
    { id: "fc6", de: "solltest", ar: "ينبغي (نصيحة)", example: "Du solltest schlafen.", exampleAr: "ينبغي أن تنام.", level: "B1" },
    { id: "fc7", de: "die Gesellschaft", ar: "المجتمع", example: "Die Gesellschaft ändert sich.", exampleAr: "المجتمع يتغير.", level: "B1" },
    { id: "fc8", de: "kritisch", ar: "نقدي", example: "Sei kritisch mit den Medien.", exampleAr: "كن نقدياً مع الإعلام.", level: "B1" },
    { id: "fc9", de: "die Nachricht", ar: "الخبر", example: "Ich lese morgens keine Nachrichten.", exampleAr: "لا أقرأ الأخبار في الصباح.", level: "B1" },
    { id: "fc10", de: "der Einfluss", ar: "التأثير", example: "Der Einfluss der Medien ist ein Thema.", exampleAr: "تأثير الإعلام موضوع للنقاش.", level: "B1" },
    { id: "fc11", de: "empfehlen", ar: "ينصح بـ", example: "Ich würde dir ein Wochenende ohne Nachrichten empfehlen.", exampleAr: "كنت سأنصحك بنهاية أسبوع بلا أخبار.", level: "B1" },
    { id: "fc12", de: "verzichten auf", ar: "يستغني عن", example: "Auf Nachrichten möchte ich nicht verzichten.", exampleAr: "لا أريد أن أستغني عن الأخبار.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-04-1", type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً إعلامياً مع نقل موقف الكاتب",
      sourceDe: "Fiktives Übungsbeispiel: Die neue Ausstellung im Museum zeigt moderne Kunst. Der Kritiker findet sie mutig, aber einige Besucher sind enttäuscht.",
      taskAr: "لخّص الخبر ونقل وجهتي نظر الناقد والزوار دون رأيك.",
      modelAnswerAr: "«في هذا المثال الخيالي، يعرض المعرض الجديد في المتحف فناً حديثاً. يرى الناقد أنه جريء، لكن بعض الزوار خاب أملهم.»",
      keyPointsAr: ["نقلت موضوع المعرض", "ذكرت رأي الناقد (جريء)", "نقلت خيبة أمل بعض الزوار"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-04-1",
      scenarioAr: "نقاش تدريبي افتراضي عن وسائل التواصل؛ العبارات نماذج لآراء وليست نتائج بحثية.",
      scenarioDe: "Fiktive Übungsdiskussion über soziale Medien.",
      strategyAr: "الاستراتيجية: إبداء رأي متوازن مع أمثلة.",
      rounds: [
        {
          speakerDe: "Sind soziale Medien eher positiv oder negativ?",
          speakerAr: "هل وسائل التواصل إيجابية أم سلبية أكثر؟",
          options: [
            { de: "Einerseits verbinden sie Menschen weltweit. Andererseits finde ich, dass man dort auch auf falsche Informationen stößt.", ar: "من ناحية تربط الناس عالمياً. ومن ناحية أخرى أرى أن المرء قد يصادف فيها معلومات خاطئة أيضاً.", best: true, replyDe: "Ein ausgewogenes Urteil. Was ist wichtiger?", replyAr: "حكم متوازن. ما الأهم؟" },
            { de: "Sie sind nur positiv, alles andere ist Lüge.", ar: "إنها إيجابية فقط، وكل شيء آخر كذب.", best: false, replyDe: "Das ist zu einseitig. Es gibt klare Nachteile.", replyAr: "هذا منحاز جداً. توجد عيوب واضحة." },
          ],
        },
        {
          speakerDe: "Was ist wichtiger: Verbindung oder Wahrheit?",
          speakerAr: "ما الأهم: التواصل أم الحقيقة؟",
          options: [
            { de: "Beides ist wichtig, aber ohne Wahrheit nützt die Verbindung wenig. Deshalb sollten Nutzer kritisch denken.", ar: "كلاهما مهم، لكن بدون الحقيقة يقل نفع التواصل. لذلك يجب على المستخدمين التفكير النقدي.", best: true, replyDe: "Da stimme ich dir vollkommen zu.", replyAr: "أوافقك تماماً." },
            { de: "Nur die Verbindung zählt, Wahrheit ist egal.", ar: "التواصل فقط يهم، الحقيقة غير مهمة.", best: false, replyDe: "Das ist sehr pauschal. Wie kann man Informationen prüfen?", replyAr: "هذا تعميم واسع جداً. كيف يمكن التحقق من المعلومات؟" },
          ],
        },
      ],
    },
  ];
