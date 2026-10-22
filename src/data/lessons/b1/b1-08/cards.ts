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
    { id: "fc3", de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", example: "KI verändert die Welt.", exampleAr: "الذكاء الاصطناعي يغير العالم.", level: "B1" },
    { id: "fc4", de: "das Futur I", ar: "المستقبل", example: "werden + Infinitiv", exampleAr: "سوف + الفعل", level: "B1" },
    { id: "fc5", de: "nicht nur... sondern auch", ar: "ليس فقط بل أيضاً", example: "Nicht nur Deutsch, sondern auch Englisch.", exampleAr: "ليس فقط الألمانية بل الإنجليزية أيضاً.", level: "B1" },
    { id: "fc6", de: "weder... noch", ar: "لا... ولا", example: "Weder Zeit noch Geld.", exampleAr: "لا وقت ولا مال.", level: "B1" },
    { id: "fc7", de: "entweder... oder", ar: "إما... أو", example: "Entweder du oder ich.", exampleAr: "إما أنت أو أنا.", level: "B1" },
    { id: "fc8", de: "je... desto", ar: "كلما... كلما", example: "Je mehr, desto besser.", exampleAr: "كلما زاد كان أفضل.", level: "B1" },
    { id: "fc9", de: "die Digitalisierung", ar: "الرقمنة", example: "Die Digitalisierung verändert unsere Arbeit.", exampleAr: "تُغيّر الرقمنة عملنا.", level: "B1" },
    { id: "fc10", de: "sich entwickeln", ar: "يتطوّر", example: "Die Technik wird sich weiter entwickeln.", exampleAr: "ستتطوّر التقنية أكثر.", level: "B1" },
    { id: "fc11", de: "der Datenschutz", ar: "حماية البيانات", example: "Datenschutz ist vielen Menschen wichtig.", exampleAr: "حماية البيانات مهمة لكثير من الناس.", level: "B1" },
    { id: "fc12", de: "die Verantwortung", ar: "المسؤولية", example: "Wir werden die Verantwortung teilen.", exampleAr: "سوف نتقاسم المسؤولية.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-08-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن التقنية بالعربية",
      sourceDe: "Künstliche Intelligenz verändert viele Berufe. Einige Tätigkeiten werden automatisiert, aber neue Qualifikationen werden wichtiger.",
      taskAr: "لخّص النص: تأثير الذكاء الاصطناعي، ما يُؤتمت، وما يصبح مهماً.",
      modelAnswerAr: "«الذكاء الاصطناعي يغيّر مهناً كثيرة. بعض الأعمال ستؤتمت، لكن المؤهلات الجديدة تصبح أهم.»",
      keyPointsAr: ["نقلت تغير المهن", "ذكرت الأتمتة", "نقلت أهمية المؤهلات الجديدة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-08-1",
      scenarioAr: "نقاش عن خصوصية البيانات على الإنترنت.",
      scenarioDe: "Diskussion über Datenschutz im Internet.",
      strategyAr: "الاستراتيجية: مناقشة مخاطر وفوائد التقنية بموازنة.",
      rounds: [
        {
          speakerDe: "Gibt man zu viele persönliche Daten im Internet preis?",
          speakerAr: "هل يقدم الناس بيانات شخصية كثيرة على الإنترنت؟",
          options: [
            { de: "Ja, leider. Viele Nutzer akzeptieren die AGB, ohne sie zu lesen. Deshalb sollten Datenschutzregeln strenger sein.", ar: "نعم للأسف. كثير من المستخدمين يقبلون الشروط دون قراءتها. لذلك يجب تشديد قواعد حماية البيانات.", best: true, replyDe: "Da hast du recht. Aber die Dienste sind praktisch.", replyAr: "محق. لكن الخدمات عملية." },
            { de: "Nein, das ist kein Problem. Daten sind egal.", ar: "لا، هذه ليست مشكلة. البيانات غير مهمة.", best: false, replyDe: "Das ist naiv. Daten können missbraucht werden.", replyAr: "هذا سذاجة. يمكن إساءة استخدام البيانات." },
          ],
        },
        {
          speakerDe: "Sollte man soziale Netzwerke einschränken?",
          speakerAr: "هل يجب تقييد الشبكات الاجتماعية؟",
          options: [
            { de: "Man sollte sie nicht verbieten, aber besser regulieren. Obwohl die Umsetzung schwierig ist, lohnt es sich für den Schutz der Nutzer.", ar: "لا يجب حظرها بل تنظيمها أفضل. رغم صعوبة التنفيذ، يستحق الأمر لحماية المستخدمين.", best: true, replyDe: "Eine differenzierte Position. Gut argumentiert.", replyAr: "موقف متوازن. حجة جيدة." },
            { de: "Man sollte alles sofort verbieten.", ar: "يجب حظر كل شيء فوراً.", best: false, replyDe: "Ein komplettes Verbot ist auch nicht die Lösung.", replyAr: "الحظر الكامل ليس الحل أيضاً." },
          ],
        },
      ],
    },
  ];
