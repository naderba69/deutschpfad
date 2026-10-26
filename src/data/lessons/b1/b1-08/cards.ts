/**
 * b1-08 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المستقبل:",
      questionDe: "Wir ___ die Zukunft ___. (شكل)",
      options: ["werden ... gestalten", "wird ... gestalten", "werdet ... gestalten", "werden ... gestaltet"],
      correctIndex: 0,
      explanation: "Futur: werden + Infinitiv.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wird ... gestalten» مع wir خاطئة؛ الصيغة الصحيحة werden.",
        "«werdet ... gestalten» صيغة ihr، ولا تناسب wir.",
        "«werden ... gestaltet» تستعمل Partizip II، والمصدر مطلوب بعد werden.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الرابط المزدوج:",
      questionDe: "___ er kommt, ___ er ruft an. (إما أو)",
      options: ["Entweder ... oder", "Weder ... noch", "Nicht nur ... sondern auch", "Sowohl ... als auch"],
      correctIndex: 0,
      explanation: "إما أو → entweder... oder.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Weder ... noch» تعني لا ... ولا، ولا تناسب التخيير.",
        "«Nicht nur ... sondern auch» تعني ليس فقط بل أيضاً، ولا تناسب التخيير.",
        "«Sowohl ... als auch» تعني كلاهما، ولا تناسب التخيير.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["du", "mehr", "Je", "desto", "übst", "wirst", "besser", "du", ","],
      correctSentence: "Je mehr du übst, desto besser wirst du.",
      explanation: "كلما تدربت أكثر أصبحت أفضل.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich werde morgen lerne.",
      wrongWord: "lerne",
      correctWord: "lernen",
      options: ["lernen", "lerne", "gelernt", "lernst"],
      explanation: "بعد werden: Infinitiv (lernen).",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالرابط:",
      template: "Sie ist ___ klug ___ fleißig. (كلاهما) Er hat ___ Hund ___ Katze. (لا ولا)",
      blanks: [
        { correct: "sowohl", options: ["sowohl", "weder", "entweder"] },
        { correct: "als auch", options: ["als auch", "noch", "oder"] },
        { correct: "weder", options: ["weder", "sowohl", "entweder"] },
        { correct: "noch", options: ["noch", "als auch", "oder"] },
      ],
      explanation: "كلاهما / لا ولا.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Technik", ar: "التقنية", example: "Die Technik entwickelt sich.", exampleAr: "التقنية تتطور.", level: "B1" },
    { id: "fc2", de: "die Zukunft", ar: "المستقبل", example: "Die Zukunft ist offen.", exampleAr: "المستقبل مفتوح.", level: "B1" },
    { id: "fc3", de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", example: "KI könnte manche Aufgaben verändern.", exampleAr: "قد يغيّر الذكاء الاصطناعي بعض المهام.", level: "B1" },
    { id: "fc4", de: "das Futur I", ar: "المستقبل", example: "werden im Präsens + Infinitiv", exampleAr: "werden في المضارع + مصدر الفعل", level: "B1" },
    { id: "fc5", de: "nicht nur... sondern auch", ar: "ليس فقط بل أيضاً", example: "Nicht nur Deutsch, sondern auch Englisch.", exampleAr: "ليس فقط الألمانية بل الإنجليزية أيضاً.", level: "B1" },
    { id: "fc6", de: "weder... noch", ar: "لا... ولا", example: "Weder Zeit noch Geld.", exampleAr: "لا وقت ولا مال.", level: "B1" },
    { id: "fc7", de: "entweder... oder", ar: "إما... أو", example: "Entweder du oder ich.", exampleAr: "إما أنت أو أنا.", level: "B1" },
    { id: "fc8", de: "je... desto", ar: "كلما... كلما", example: "Je mehr, desto besser.", exampleAr: "كلما زاد كان أفضل.", level: "B1" },
    { id: "fc9", de: "die Digitalisierung", ar: "الرقمنة", example: "Die Digitalisierung kann Abläufe verändern.", exampleAr: "قد تغيّر الرقمنة سير العمل.", level: "B1" },
    { id: "fc10", de: "sich entwickeln", ar: "يتطوّر", example: "Die Technik wird sich weiterentwickeln.", exampleAr: "ستتطوّر التقنية أكثر.", level: "B1" },
    { id: "fc11", de: "der Datenschutz", ar: "حماية البيانات", example: "Wir achten auf den Datenschutz.", exampleAr: "نراعي حماية البيانات.", level: "B1" },
    { id: "fc12", de: "die Verantwortung", ar: "المسؤولية", example: "Wir werden die Verantwortung teilen.", exampleAr: "سوف نتقاسم المسؤولية.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-08-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن التقنية بالعربية",
      sourceDe: "In diesem erfundenen Beispiel könnte ein KI-System einige Aufgaben übernehmen. Beschäftigte könnten deshalb neue Kenntnisse brauchen; andere Aufgaben bleiben bei Menschen.",
      taskAr: "لخّص المثال الخيالي: ما الذي قد يتغير، وما الذي قد يحتاج إليه العاملون؟",
      modelAnswerAr: "«في هذا المثال الخيالي، قد يتولى نظام ذكاء اصطناعي بعض المهام. وقد يحتاج العاملون إلى معارف جديدة، بينما تبقى مهام أخرى للبشر.»",
      keyPointsAr: ["وضّحت أن المثال خيالي", "نقلت احتمال تولّي النظام بعض المهام", "ذكرت احتمال الحاجة إلى معارف جديدة وبقاء مهام للبشر"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-08-1",
      scenarioAr: "حوار تدريبي خيالي عن خصوصية البيانات؛ الآراء أمثلة للنقاش لا مسحٌ لسلوك المستخدمين.",
      scenarioDe: "Diskussion über Datenschutz im Internet.",
      strategyAr: "الاستراتيجية: مناقشة مخاطر وفوائد التقنية بموازنة.",
      rounds: [
        {
          speakerDe: "Gibt man zu viele persönliche Daten im Internet preis?",
          speakerAr: "هل يقدم الناس بيانات شخصية كثيرة على الإنترنت؟",
          options: [
            { de: "Ich finde klare Datenschutzregeln wichtig. Ich würde zuerst prüfen, welche Daten gesammelt und wofür sie genutzt werden.", ar: "أرى أن وضوح قواعد حماية البيانات مهم. سأتحقق أولاً من البيانات التي تُجمع والغرض من استخدامها.", best: true, replyDe: "Das ist ein guter Punkt. Zugleich können digitale Dienste nützlich sein.", replyAr: "هذه نقطة مهمة، وفي الوقت نفسه قد تكون الخدمات الرقمية مفيدة." },
            { de: "Für mich zählt vor allem, dass ein Dienst praktisch ist. Über die Daten mache ich mir dabei wenig Gedanken.", ar: "يهمني قبل كل شيء أن تكون الخدمة عملية، ولا أفكر كثيراً في البيانات عند استخدامها.", best: false, replyDe: "Das ist eine mögliche Sicht. Trotzdem kannst du überlegen, welche Daten für den Dienst nötig sind.", replyAr: "هذا رأي ممكن، ومع ذلك يمكنك التفكير في البيانات اللازمة للخدمة." },
          ],
        },
        {
          speakerDe: "Sollte man soziale Netzwerke einschränken?",
          speakerAr: "هل يجب تقييد الشبكات الاجتماعية؟",
          options: [
            { de: "Man sollte sie nicht sofort verbieten, sondern zuerst klare Regeln prüfen. Obwohl die Umsetzung schwierig sein könnte, wäre mir der Schutz der Nutzer wichtig.", ar: "لا ينبغي حظرها فوراً، بل ينبغي أولاً دراسة قواعد واضحة. ورغم أن تطبيقها قد يكون صعباً، فإن حماية المستخدمين مهمة بالنسبة إليّ.", best: true, replyDe: "Das ist eine abgewogene Position. Gut begründet.", replyAr: "هذا موقف يوازن بين الجوانب، وحجته واضحة." },
            { de: "Ich würde ein Verbot erwägen, wenn klare Regeln den Schutz nicht sichern.", ar: "سأفكر في الحظر إذا لم توفر القواعد الواضحة الحماية.", best: false, replyDe: "Das ist ein möglicher Einwand. Welche Gründe sprechen für oder gegen ein Verbot?", replyAr: "هذا اعتراض ممكن. ما الحجج المؤيدة للحظر أو المعارضة له؟" },
          ],
        },
      ],
    },
  ];
