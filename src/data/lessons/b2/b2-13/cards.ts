/**
 * b2-13 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * وحدة «التكنولوجيا والذكاء الاصطناعي».
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
  {
    id: "m1",
    type: "multiple-choice",
    instructionAr: "اختر اللاحقة الصحيحة لاسم الخاصية:",
    questionDe: "verfügbar → die ___",
    options: ["Verfügbarkeit", "Verfügbarung", "Verfügbaren", "Verfügbare"],
    correctIndex: 0,
    explanation: "الصفة المنتهية بـ-bar تُنتج اسماً مؤنثاً بـ-keit: die Verfügbarkeit.",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«Verfügbarung» ليست اسماً صحيحاً؛ فـ-ung لا تُضاف إلى -bar.",
      "«Verfügbaren» صيغة صرفية لا اسم مجرّد.",
      "«Verfügbare» صيغة صفة لا اسم مجرّد.",
    ],
  },
  {
    id: "m2",
    type: "multiple-choice",
    instructionAr: "اختر أداة الاستدراك المناسبة:",
    questionDe: "Die Software ist teuer. ___ kaufen viele Firmen sie.",
    options: ["Trotzdem", "Obwohl", "Weil", "Damit"],
    correctIndex: 0,
    explanation: "ظرف رابط يليه الفعل مباشرة: Trotzdem kaufen viele Firmen sie.",
    errorType: "grammar",
    optionExplanations: [
      undefined,
      "«Obwohl» تُدخل جملة ثانوية، ولا تصلح بعد نقطة بهذا الترتيب.",
      "«Weil» للسبب لا للاستدراك.",
      "«Damit» للغاية لا للاستدراك.",
    ],
  },
  {
    id: "m3",
    type: "word-ordering",
    instructionAr: "رتّب الجملة:",
    tokens: ["Zwar", "ist", "es", "teuer", ",", "aber", "wir", "kaufen", "es", "."],
    correctSentence: "Zwar ist es teuer, aber wir kaufen es.",
    explanation: "التركيب المزدوج: zwar + الفعل ثانياً، aber لا تغيّر الترتيب.",
    errorType: "word-order",
  },
  {
    id: "m4",
    type: "error-correction",
    instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
    wrongSentence: "Die Daten werden verschlüsseln gespeichert.",
    wrongWord: "verschlüsseln",
    correctWord: "verschlüsselt",
    options: ["verschlüsselt", "verschlüsseln", "verschlüsselnd", "verschlüsselte"],
    explanation: "في المبني للمجهول بعد werden يأتي Partizip II: verschlüsselt.",
    errorType: "grammar",
  },
  {
    id: "m5",
    type: "fill-blank",
    instructionAr: "أكمل بالاسم المشتق التقني:",
    template: "Die ___ (automatisieren) nimmt zu. · Die ___ (sicher) der Daten ist wichtig.",
    blanks: [
      { correct: "Automatisierung", options: ["Automatisierung", "Automatisieren", "Automat"] },
      { correct: "Sicherheit", options: ["Sicherheit", "Sicherkeit", "Sichern"] },
    ],
    explanation: "automatisieren + ung = die Automatisierung، وsicher + heit = die Sicherheit.",
    errorType: "grammar",
  },
];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
  { id: "fc1", de: "die Digitalisierung", ar: "الرقمنة", example: "Die Digitalisierung verändert die Arbeit.", exampleAr: "الرقمنة تغيّر العمل.", level: "B2" },
  { id: "fc2", de: "die Automatisierung", ar: "الأتمتة", example: "Die Automatisierung nimmt zu.", exampleAr: "الأتمتة تزداد.", level: "B2" },
  { id: "fc3", de: "der Datenschutz", ar: "حماية البيانات", example: "Der Datenschutz ist wichtig.", exampleAr: "حماية البيانات مهمة.", level: "B2" },
  { id: "fc4", de: "die Cybersicherheit", ar: "الأمن السيبراني", example: "Die Cybersicherheit wird geprüft.", exampleAr: "يُفحص الأمن السيبراني.", level: "B2" },
  { id: "fc5", de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", example: "Künstliche Intelligenz erzeugt Texte.", exampleAr: "الذكاء الاصطناعي يولّد نصوصاً.", level: "B2" },
  { id: "fc6", de: "nachvollziehbar", ar: "قابل للتتبع والفهم", example: "Die Ergebnisse sind nachvollziehbar.", exampleAr: "النتائج قابلة للتحقق.", level: "B2" },
  { id: "fc7", de: "verschlüsseln", ar: "يشفّر", example: "Die Daten werden verschlüsselt.", exampleAr: "تُشفَّر البيانات.", level: "B2" },
  { id: "fc8", de: "entschlüsseln", ar: "يفكّ التشفير", example: "Nur die Software kann es entschlüsseln.", exampleAr: "البرنامج وحده يستطيع فكّ التشفير.", level: "B2" },
  { id: "fc9", de: "die Verfügbarkeit", ar: "التوافر", example: "Die Verfügbarkeit ist wichtig.", exampleAr: "التوافر مهم.", level: "B2" },
  { id: "fc10", de: "die Abhängigkeit", ar: "التبعية", example: "Eine neue Abhängigkeit entsteht.", exampleAr: "تنشأ تبعية جديدة.", level: "B2" },
  { id: "fc11", de: "die Datenauswertung", ar: "تقييم البيانات", example: "Die Datenauswertung ist schwer.", exampleAr: "تقييم البيانات صعب.", level: "B2" },
  { id: "fc12", de: "der Betriebsrat", ar: "مجلس العمال", example: "Der Betriebsrat wendet ein.", exampleAr: "يعترض مجلس العمال.", level: "B2" },
  { id: "fc13", de: "obwohl", ar: "رغم أن", example: "Obwohl es teuer ist, kaufen wir es.", exampleAr: "رغم أنه غالٍ، نشتريه.", level: "B2" },
  { id: "fc14", de: "dennoch", ar: "ومع ذلك (رسمي)", example: "Dennoch bleibt ein Risiko.", exampleAr: "ومع ذلك تبقى مخاطرة.", level: "B2" },
];

export const mediation: NonNullable<Lesson["mediation"]> = [
  {
    id: "med-b2-13-1",
    type: "summarize-de-to-ar",
    titleAr: "لخّص حالة افتراضية عن نظام ذكاء اصطناعي بالعربية",
    sourceDe: "Fiktiver Fall, keine Studie: In einem erfundenen Betrieb unterstützt ein KI-System die Beratung. Einfache Anfragen werden automatisch beantwortet, schwierige Fälle gehen an Mitarbeitende. Obwohl das System die Antwortzeit verkürzt, prüft eine Fachkraft jede Antwort. Entscheidungen mit Folgen für Menschen trifft weiterhin eine Person.",
    taskAr: "لخّص الحالة الافتراضية، وميّز بوضوح بين ما يذكره السيناريو وما لا يمكن تعميمه على أنظمة حقيقية.",
    modelAnswerAr: "«في الحالة الافتراضية يساعد نظام ذكاء اصطناعي في خدمة الاستشارة: تُجاب الأسئلة البسيطة تلقائياً وتُحال الحالات الصعبة إلى الموظفين. ورغم أنه يختصر زمن الرد يفحص مختص كل إجابة، والقرارات ذات الأثر على البشر يتخذها شخص. ولا تمثّل هذه الحالة دراسة أو وصفاً لأنظمة حقيقية.»",
    keyPointsAr: ["أوضح أن السيناريو افتراضي وليس دراسة", "ذكر توزيع المهام بين النظام والموظفين", "ذكر فحص المختص وحدود قرار النظام"],
  },
];

export const interaction: NonNullable<Lesson["interaction"]> = [
  {
    id: "int-b2-13-1",
    scenarioAr: "نقاش عن استخدام الذكاء الاصطناعي في خدمة العملاء.",
    scenarioDe: "Diskussion über den Einsatz von KI im Kundenservice.",
    strategyAr: "الاستراتيجية: موازنة بين الفائدة والمخاطرة بأدوات استدراكية.",
    rounds: [
      {
        speakerDe: "Sollte ein KI-System Kundenanfragen beantworten dürfen?",
        speakerAr: "هل يجوز لنظام ذكاء اصطناعي أن يجيب عن أسئلة العملاء؟",
        options: [
          { de: "Zwar kann ein KI-System einfache Fragen schnell beantworten, aber jede Antwort sollte von einer Fachkraft geprüft werden. So bleiben Geschwindigkeit und Kontrolle verbunden.", ar: "صحيح أن نظام ذكاء اصطناعي يستطيع الإجابة عن الأسئلة البسيطة بسرعة، لكن ينبغي أن يفحص مختص كل إجابة. وهكذا تبقى السرعة والسيطرة مترابطتين.", best: true, replyDe: "Ein ausgewogener Vorschlag. Aber wer trägt die Verantwortung bei einem Fehler?", replyAr: "اقتراح متوازن. لكن من يتحمل المسؤولية عند خطأ؟" },
          { de: "Nein, KI sollte man überall verbieten.", ar: "لا، ينبغي منع الذكاء الاصطناعي في كل مكان.", best: false, replyDe: "Das ist zu pauschal. Es kommt auf den Bereich und die Kontrolle an.", replyAr: "هذا تعميم مفرط. الأمر يعتمد على المجال ومدى السيطرة." },
        ],
      },
      {
        speakerDe: "Wie kann man mit den Risiken umgehen?",
        speakerAr: "كيف يمكن التعامل مع المخاطر؟",
        options: [
          { de: "Man könnte klare Regeln einführen: Entscheidungen mit Folgen für Menschen trifft eine Person, und die Ergebnisse müssen nachvollziehbar dokumentiert werden.", ar: "يمكن إدخال قواعد واضحة: القرارات ذات الأثر على البشر يتخذها شخص، ويجب توثيق النتائج بشكل قابل للتحقق.", best: true, replyDe: "Eine pragmatische Lösung, die Verantwortung und Nutzen verbindet.", replyAr: "حل عملي يربط المسؤولية بالفائدة." },
          { de: "Man braucht keine Regeln, die Technik regelt das selbst.", ar: "لا حاجة إلى قواعد؛ التقنية تنظم ذلك بنفسها.", best: false, replyDe: "Ohne klare Regeln bleibt die Verantwortung unklar.", replyAr: "بلا قواعد واضحة تبقى المسؤولية غير محددة." },
        ],
      },
    ],
  },
];
