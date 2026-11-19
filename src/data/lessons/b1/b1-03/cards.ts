/**
 * b1-03 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المجهول:",
      questionDe: "Der Müll ___ getrennt. (يُفصل)",
      options: ["wird", "wurde", "wirst", "werden"],
      correctIndex: 0,
      explanation: "مضارع مجهول: wird.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wurde» صيغة الماضي، والجملة في المضارع (يُفصل).",
        "«wirst» مع du، ولا يناسب الفاعل der Müll.",
        "«werden» للجمع، والفاعل هنا مفرد.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر المجهول:",
      questionDe: "Das Buch ___ 2020 geschrieben. (كُتب)",
      options: ["wurde", "wird", "wirst", "werden"],
      correctIndex: 0,
      explanation: "ماضٍ مجهول: wurde geschrieben.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wird» مضارع، والجملة في الماضي مع 2020.",
        "«wirst» مع du، ولا يناسب الفاعل das Buch.",
        "«werden» للجمع، والفاعل هنا مفرد.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (مجهول):",
      tokens: ["werden", "Die", "Wälder", "zerstört", "."],
      correctSentence: "Die Wälder werden zerstört.",
      explanation: "Passiv: werden zerstört.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "في الجملة خطأ واحد: اختر التصحيح الصحيح للكلمة المخطئة.",
      wrongSentence: "Das Haus wurde bauen.",
      wrongWord: "bauen",
      correctWord: "gebaut",
      options: ["gebaut", "bauen", "gebauten", "baut"],
      explanation: "المجهول: wurde + Partizip II.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ man أو Passiv:",
      template: "___ recycelt den Müll. Der Müll ___ recycelt.",
      blanks: [
        { correct: "Man", options: ["Man", "Wird", "Der"] },
        { correct: "wird", options: ["wird", "wirst", "man"] },
      ],
      explanation: "Man + نشط. wird + Partizip II.",
      errorType: "grammar",
    },
    {
      id: "m6",
      type: "multiple-choice",
      instructionAr: "اختر الجملة التي تعني فيها werden «يصبح»، لا المجهول:",
      questionDe: "In welchem Satz bedeutet werden „sich verändern“?",
      options: [
        "Das Klima wird immer wärmer.",
        "Der Müll wird getrennt.",
        "Die Bäume werden gepflanzt.",
        "Das Haus wird gebaut.",
      ],
      correctIndex: 0,
      explanation: "هنا wird متبوع بصفة مقارنة (wärmer) فيعني «يصبح أكثر دفئاً»؛ أما wird + Partizip II مثل getrennt أو gebaut فيكوّن Vorgangspassiv.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "getrennt هو Partizip II؛ هذه صيغة Vorgangspassiv.",
        "gepflanzt هو Partizip II؛ هذه صيغة Vorgangspassiv.",
        "gebaut هو Partizip II؛ هذه صيغة Vorgangspassiv.",
      ],
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Umwelt", ar: "البيئة", example: "Die Umwelt ist wichtig.", exampleAr: "البيئة مهمة.", level: "B1" },
    { id: "fc2", de: "der Müll", ar: "النفايات", example: "Der Müll wird getrennt.", exampleAr: "تُفصل النفايات.", level: "B1" },
    { id: "fc3", de: "recyceln", ar: "يعيد التدوير", example: "Wir recyceln Papier.", exampleAr: "نعيد تدوير الورق.", level: "B1" },
    { id: "fc4", de: "der Klimawandel", ar: "تغير المناخ", example: "Der Klimawandel ist ein Problem.", exampleAr: "تغير المناخ مشكلة.", level: "B1" },
    { id: "fc5", de: "das Vorgangspassiv", ar: "مجهول الحدث", example: "Das Haus wird gebaut.", exampleAr: "يُبنى البيت.", level: "B1" },
    { id: "fc6", de: "werden + Partizip II", ar: "يُفعل (مجهول)", example: "Das Haus wird gebaut.", exampleAr: "البيت يُبنى.", level: "B1" },
    { id: "fc7", de: "wurde + Partizip II", ar: "فُعل (مجهول ماضٍ)", example: "Es wurde gebaut.", exampleAr: "بُني.", level: "B1" },
    { id: "fc8", de: "man", ar: "فاعل عام في جملة نشطة؛ قد يكون بديلاً تعبيرياً", example: "Man sagt...", exampleAr: "يقول المرء... / يقال...", level: "B1" },
    { id: "fc9", de: "zu + Infinitiv", ar: "التركيب المصدري (zu + مصدر)", example: "Es ist wichtig, die Umwelt zu schützen.", exampleAr: "من المهم حماية البيئة.", level: "B1" },
    { id: "fc10", de: "um … zu", ar: "لكي (هدف صريح)", example: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", exampleAr: "أتعلم الألمانية لكي أعمل في ألمانيا.", level: "B1" },
    { id: "fc11", de: "vermeiden", ar: "يتجنّب", example: "Es ist wichtig, Müll zu vermeiden.", exampleAr: "من المهم تجنّب النفايات.", level: "B1" },
    { id: "fc12", de: "sich lohnen", ar: "يستحقّ، يُجدي", example: "Das Projekt lohnt sich für die Gemeinde.", exampleAr: "المشروع يستحقّ بالنسبة للبلدة.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-03-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً تدريبياً عن البيئة بالعربية",
      sourceDe: "Übungstext: In diesem Beispiel wird der Klimawandel als wichtige Herausforderung dargestellt. Als mögliche Maßnahmen werden weniger CO2-Ausstoß und mehr erneuerbare Energien genannt.",
      taskAr: "لخّص النص التدريبي: ما المشكلة، وما الإجراءان المذكوران؟ النص مثال تعليمي، وليس اقتباساً من خبراء محددين.",
      modelAnswerAr: "«يعرض النص تغير المناخ بوصفه تحدياً مهماً، ويذكر خفض انبعاثات ثاني أكسيد الكربون وزيادة استخدام الطاقات المتجددة كإجراءين ممكنين.»",
      keyPointsAr: ["ذكرت المشكلة (تغير المناخ)", "ذكرت خفض انبعاثات CO2", "ذكرت الطاقات المتجددة كإجراء ممكن"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-03-1",
      scenarioAr: "نقاش عن الحلول البيئية في مدينتك.",
      scenarioDe: "Diskussion über Umweltlösungen in deiner Stadt.",
      strategyAr: "الاستراتيجية: اختر رداً يجيب عن السؤال ويقدّم اقتراحاً واضحاً مع سبب؛ هذه آراء تدريبية وليست حقائق محسومة.",
      rounds: [
        {
          speakerDe: "Was sollte deine Stadt für die Umwelt tun?",
          speakerAr: "ماذا يجب أن تفعل مدينتك للبيئة؟",
          options: [
            { de: "Meiner Meinung nach sollte die Stadt mehr Fahrradwege bauen und den öffentlichen Verkehr verbessern.", ar: "في رأيي يجب أن تبني المدينة المزيد من مسارات الدراجات وتحسّن النقل العام.", best: true, replyDe: "Gute Ideen! Aber wer soll das finanzieren?", replyAr: "أفكار جيدة! لكن من يجب أن يمولها؟" },
            { de: "Dazu habe ich gerade keine Idee.", ar: "ليس لدي اقتراح الآن.", best: false, replyDe: "Vielleicht können wir gemeinsam Vorschläge sammeln.", replyAr: "ربما يمكننا جمع اقتراحات معاً." },
          ],
        },
        {
          speakerDe: "Wer soll die Umweltmaßnahmen finanzieren?",
          speakerAr: "من يجب أن يمول الإجراءات البيئية؟",
          options: [
            { de: "Der Staat sollte gemeinsam mit Unternehmen investieren. Auch wenn es kurzfristig teuer ist, kann es sich langfristig lohnen.", ar: "ينبغي أن تستثمر الدولة مع الشركات. وحتى إن كان ذلك مكلفاً على المدى القصير، فقد يجدي على المدى البعيد.", best: true, replyDe: "Das ist ein möglicher Standpunkt. Welche Maßnahmen meinst du?", replyAr: "هذا رأي ممكن. ما الإجراءات التي تقصدها؟" },
            { de: "Ich habe dazu keine Informationen und möchte lieber nicht spekulieren.", ar: "ليست لدي معلومات عن ذلك، وأفضّل ألا أخمّن.", best: false, replyDe: "Dann könnten wir gemeinsam nach möglichen Kosten und Zuständigkeiten suchen.", replyAr: "يمكننا إذاً البحث معاً عن التكاليف والجهات المسؤولة المحتملة." },
          ],
        },
      ],
    },
  ];
