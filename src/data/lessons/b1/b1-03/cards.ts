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
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Umwelt", ar: "البيئة", example: "Die Umwelt ist wichtig.", exampleAr: "البيئة مهمة.", level: "B1" },
    { id: "fc2", de: "der Müll", ar: "النفايات", example: "Der Müll wird getrennt.", exampleAr: "تُفصل النفايات.", level: "B1" },
    { id: "fc3", de: "recyceln", ar: "يعيد التدوير", example: "Wir recyceln Papier.", exampleAr: "نعيد تدوير الورق.", level: "B1" },
    { id: "fc4", de: "der Klimawandel", ar: "تغير المناخ", example: "Der Klimawandel ist ein Problem.", exampleAr: "تغير المناخ مشكلة.", level: "B1" },
    { id: "fc5", de: "das Passiv", ar: "المبني للمجهول", example: "wird gebaut", exampleAr: "يُبنى", level: "B1" },
    { id: "fc6", de: "werden + Partizip II", ar: "يُفعل (مجهول)", example: "Das Haus wird gebaut.", exampleAr: "البيت يُبنى.", level: "B1" },
    { id: "fc7", de: "wurde + Partizip II", ar: "فُعل (مجهول ماضٍ)", example: "Es wurde gebaut.", exampleAr: "بُني.", level: "B1" },
    { id: "fc8", de: "man", ar: "المرء (بديل مجهول)", example: "Man sagt...", exampleAr: "يقال...", level: "B1" },
    { id: "fc9", de: "zu + Infinitiv", ar: "التركيب المصدري (zu + مصدر)", example: "Es ist wichtig, die Umwelt zu schützen.", exampleAr: "من المهم حماية البيئة.", level: "B1" },
    { id: "fc10", de: "um … zu", ar: "لكي (هدف صريح)", example: "Ich lerne Deutsch, um in Deutschland zu arbeiten.", exampleAr: "أتعلم الألمانية لكي أعمل في ألمانيا.", level: "B1" },
    { id: "fc11", de: "vermeiden", ar: "يتجنّب", example: "Es ist wichtig, Müll zu vermeiden.", exampleAr: "من المهم تجنّب النفايات.", level: "B1" },
    { id: "fc12", de: "sich lohnen", ar: "يستحقّ، يُجدي", example: "Das Projekt lohnt sich für die Gemeinde.", exampleAr: "المشروع يستحقّ بالنسبة للبلدة.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-03-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مقالاً عن البيئة مع نقل الحجج بالعربية",
      sourceDe: "Der Klimawandel ist eine der größten Herausforderungen unserer Zeit. Experten fordern weniger CO2-Ausstoß und mehr erneuerbare Energien.",
      taskAr: "لخّص النص مع نقل الموقف: ما التحدي، وماذا يطالب الخبراء.",
      modelAnswerAr: "«تغير المناخ من أكبر تحديات عصرنا. يطالب الخبراء بتقليل انبعاثات ثاني أكسيد الكربون والمزيد من الطاقات المتجددة.»",
      keyPointsAr: ["نقلت التحدي (تغير المناخ)", "ذكرت مطلب الخبراء (تقليل CO2)", "نقلت الحل (الطاقات المتجددة)"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-03-1",
      scenarioAr: "نقاش عن الحلول البيئية في مدينتك.",
      scenarioDe: "Diskussion über Umweltlösungen in deiner Stadt.",
      strategyAr: "الاستراتيجية: اقتراح حلول ومناقشتها بأدلة.",
      rounds: [
        {
          speakerDe: "Was sollte deine Stadt für die Umwelt tun?",
          speakerAr: "ماذا يجب أن تفعل مدينتك للبيئة؟",
          options: [
            { de: "Meiner Meinung nach sollte die Stadt mehr Fahrradwege bauen und den öffentlichen Verkehr verbessern.", ar: "في رأيي يجب أن تبني المدينة المزيد من مسارات الدراجات وتحسّن النقل العام.", best: true, replyDe: "Gute Ideen! Aber wer soll das finanzieren?", replyAr: "أفكار جيدة! لكن من يجب أن يمولها؟" },
            { de: "Die Stadt sollte gar nichts tun, das ist egal.", ar: "لا يجب أن تفعل المدينة شيئاً، هذا غير مهم.", best: false, replyDe: "Das ist keine gute Einstellung. Umwelt ist wichtig.", replyAr: "هذا موقف غير جيد. البيئة مهمة." },
          ],
        },
        {
          speakerDe: "Wer soll die Umweltmaßnahmen finanzieren?",
          speakerAr: "من يجب أن يمول الإجراءات البيئية؟",
          options: [
            { de: "Der Staat sollte investieren, weil langfristig alle davon profitieren. Obwohl es kurzfristig teuer ist.", ar: "يجب أن تستثمر الدولة لأن الجميع يستفيد طويل الأمد. رغم أنه مكلف قصير الأمد.", best: true, replyDe: "Ein kluges Argument. Investition in die Zukunft.", replyAr: "حجة ذكية. استثمار في المستقبل." },
            { de: "Niemand sollte zahlen, die Umwelt löst sich selbst.", ar: "لا أحد يجب أن يدفع، البيئة تحل نفسها بنفسها.", best: false, replyDe: "Leider ist das wissenschaftlich nicht haltbar.", replyAr: "للأسف هذا غير مدعوم علمياً." },
          ],
        },
      ],
    },
  ];
