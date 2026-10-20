/**
 * b2-05 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الرابط:",
      questionDe: "___ zu kritisieren, sollte man loben.",
      options: ["Anstatt", "Indem", "Ohne", "Damit"],
      correctIndex: 0,
      explanation: "بدلاً من → anstatt.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Indem» تعبّر عن الطريقة، ولا تناسب معنى بدلاً من النقد.",
        "«Ohne» تعني دون، ولا تناسب معنى بدلاً من النقد.",
        "«Damit» تعبّر عن الغاية، ولا تناسب الجملة.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الرابط:",
      questionDe: "Ich komme, ___ es regnet stark.",
      options: ["es sei denn", "indem", "ohne", "damit"],
      correctIndex: 0,
      explanation: "إلا إذا → es sei denn.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«indem» تعبّر عن الطريقة، ولا تعبّر عن الشرط.",
        "«ohne» تعني دون، ولا تعبّر عن الشرط.",
        "«damit» تعبّر عن الغاية، ولا تعبّر عن الشرط.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Er", "ging", ",", "ohne", "ein", "Wort", "zu", "sagen", "."],
      correctSentence: "Er ging, ohne ein Wort zu sagen.",
      explanation: "غادر دون أن يقول كلمة.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Anstatt er schläft, arbeitet er.",
      wrongWord: "er schläft",
      correctWord: "zu schlafen",
      options: ["zu schlafen", "er schläft", "schlafen", "geschlafen"],
      explanation: "فاعل واحد → anstatt zu + مصدر.",
      errorType: "grammar",
    },
    {
      id: "m6",
      type: "multiple-choice",
      instructionAr: "الجسيمات المشددة: اختر الصحيح:",
      questionDe: "Du kommst nicht? ___ , ich komme!",
      options: ["Doch", "Ja", "Mal", "Wohl"],
      correctIndex: 0,
      explanation: "doch = «بلى» رداً على النفي.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "لا — «Ja» توافق النفي؛ و«Doch» تردّ عليه فتُبطله في «Du kommst nicht? Doch, ich komme!».",
        "«Mal» تعني مرة أو لطفاً، ولا تناسب الرد على النفي.",
        "«Wohl» تعبّر عن الاحتمال، ولا تناسب الرد.",
      ],
    },
    {
      id: "m7",
      type: "fill-blank",
      instructionAr: "أكمل بالجسيم:",
      template: "Das ist ___ super! (تأكيد) — Was machst du ___ hier? (فضولاً)",
      blanks: [
        { correct: "ja", options: ["ja", "doch", "mal", "denn"] },
        { correct: "denn", options: ["ja", "doch", "mal", "denn"] },
      ],
      explanation: "ja = تأكيد حار. denn = فضول في السؤال.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Man lernt, ___ man übt. (بأن) Wir gehen, ___ zu zögern. (دون أن)",
      blanks: [
        { correct: "indem", options: ["indem", "anstatt", "ohne"] },
        { correct: "ohne", options: ["indem", "anstatt", "ohne"] },
      ],
      explanation: "طريقة → indem. دون أن → ohne.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Kommunikation", ar: "التواصل", example: "Kommunikation ist wichtig.", exampleAr: "التواصل مهم.", level: "B2" },
    { id: "fc2", de: "das Missverständnis", ar: "سوء الفهم", example: "Vermeide Missverständnisse!", exampleAr: "تجنب سوء الفهم!", level: "B2" },
    { id: "fc3", de: "zuhören", ar: "يصغي", example: "Hör aktiv zu!", exampleAr: "أنصت بنشاط!", level: "B2" },
    { id: "fc4", de: "das Verhalten", ar: "السلوك", example: "Das Verhalten ändert sich.", exampleAr: "يتغير السلوك.", level: "B2" },
    { id: "fc5", de: "indem", ar: "بأن/بواسطة", example: "Man lernt, indem man übt.", exampleAr: "يتعلم المرء بالممارسة.", level: "B2" },
    { id: "fc6", de: "anstatt...zu", ar: "بدلاً من أن", example: "Anstatt zu schlafen...", exampleAr: "بدلاً من النوم...", level: "B2" },
    { id: "fc7", de: "ohne...zu", ar: "دون أن", example: "ohne zu grüßen", exampleAr: "دون أن يحيي", level: "B2" },
    { id: "fc8", de: "es sei denn", ar: "إلا إذا", example: "Ich komme, es sei denn...", exampleAr: "سآتي إلا إذا...", level: "B2" },
    { id: "fc9", de: "doch", ar: "بلى! (رد على نفي)", example: "Doch, ich komme!", exampleAr: "بلى سآتي!", level: "B2" },
    { id: "fc10", de: "mal", ar: "فقط (تخفيف الطلب)", example: "Komm mal her!", exampleAr: "تعال هنا فقط!", level: "B2" },
    { id: "fc11", de: "eigentlich", ar: "في الحقيقة/أصلاً", example: "Wie heißt du eigentlich?", exampleAr: "ما اسمك أصلاً؟", level: "B2" },
    { id: "fc12", de: "folglich", ar: "وبالتالي (نتيجة)", example: "Er übte viel, folglich bestand er.", exampleAr: "تدرب كثيراً، وبالتالي نجح.", level: "B2" },
    { id: "fc13", de: "demnach", ar: "وفقاً لذلك", example: "Demnach müssen wir handeln.", exampleAr: "وفقاً لذلك يجب أن نتصرف.", level: "B2" },
    { id: "fc14", de: "die Darstellung", ar: "العرض، الصياغة", example: "Die Forscherin widerspricht dieser Darstellung.", exampleAr: "تعترض الباحثة على هذه الصياغة.", level: "B2" },
    { id: "fc15", de: "die Fassung", ar: "النسخة، الصيغة", example: "Man soll die veröffentlichte Fassung lesen.", exampleAr: "ينبغي قراءة النسخة المنشورة.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b2-05-1",
      type: "merge-info",
      titleAr: "ادمج معلومتين اقتصادية في تلخيص عربي",
      sourceDe: "Text 1: Die Arbeitslosigkeit ist im letzten Jahr gesunken. Text 2: Gleichzeitig suchen viele Firmen dringend Fachkräfte im Bereich IT.",
      taskAr: "لخّص بالعربية الفكرتين معاً: انخفاض البطالة + نقص خبراء التقنية — مع ربطهما بعلاقة سببية منطقية.",
      modelAnswerAr: "«انخفضت البطالة العام الماضي، لكن الشركات تبحث في الوقت نفسه بشكل ملحّ عن خبراء تقنية — أي أن السوق يحتاج مؤهلات محددة لا عمالة عامة.»",
      keyPointsAr: ["نقلت انخفاض البطالة", "نقلت نقص خبراء التقنية", "ربطت الفكرتين بعلاقة منطقية"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-05-1",
      scenarioAr: "نقاش أكاديمي عن مستقبل العمل مع الرقمنة والذكاء الاصطناعي.",
      scenarioDe: "Akademische Diskussion über die Zukunft der Arbeit.",
      strategyAr: "الاستراتيجية: تحليل معقد، استخدام أدوات ربط متقدمة (während, obwohl, je...desto)، ورد الحجج.",
      rounds: [
        {
          speakerDe: "Wird künstliche Intelligenz viele Arbeitsplätze ersetzen?",
          speakerAr: "هل سيحل الذكاء الاصطناعي محل وظائف كثيرة؟",
          options: [
            { de: "Einerseits werden einfache Tätigkeiten automatisiert. Andererseits entstehen neue Berufe, die Kreativität erfordern.",
              ar: "من ناحية ستتم أتمتة الأعمال البسيطة. ومن ناحية أخرى تظهر مهن جديدة تتطلب الإبداع.", best: true,
              replyDe: "Das ist eine differenzierte Sicht. Welche Berufe meinen Sie konkret?", replyAr: "هذه نظرة متوازنة. أي مهن تقصد تحديداً؟" },
            { de: "Nein, KI wird nie Arbeitsplätze ersetzen.", ar: "لا، لن يحل الذكاء الاصطناعي محل الوظائف أبداً.", best: false,
              replyDe: "„Nie“ ist eine starke Behauptung. Frühere technische Umbrüche haben auch neue Berufe hervorgebracht.", replyAr: "«أبداً» ادعاء قوي. التحولات التقنية السابقة أنتجت مهناً جديدة أيضاً." },
          ],
        },
        {
          speakerDe: "Welche neuen Berufe entstehen durch KI?",
          speakerAr: "أي مهن جديدة تظهر بفضل الذكاء الاصطناعي؟",
          options: [
            { de: "Zum Beispiel im Bereich Datenanalyse und KI-Ethik. Je mehr Technologie, desto wichtiger wird menschliche Kontrolle.",
              ar: "مثلاً في مجال تحليل البيانات وأخلاقيات الذكاء الاصطناعي. كلما زادت التقنية، زادت أهمية الرقابة البشرية.", best: true,
              replyDe: "Ein wichtiger Punkt. Allerdings fehlen oft die Qualifikationen.", replyAr: "نقطة مهمة. لكن المؤهلات غالباً ما تكون ناقصة." },
            { de: "Es entstehen keine neuen Berufe.", ar: "لا تظهر مهن جديدة.", best: false,
              replyDe: "Das lässt sich mit der bisherigen Entwicklung auf dem Arbeitsmarkt schwer vereinbaren.", replyAr: "هذا يصعب توفيقه مع التطورات السابقة في سوق العمل." },
          ],
        },
        {
          speakerDe: "Wer sollte die Umschulung finanzieren: der Staat oder die Unternehmen?",
          speakerAr: "من يجب أن يمول إعادة التأهيل: الدولة أم الشركات؟",
          options: [
            { de: "Meiner Ansicht nach sollten beide zusammenarbeiten. Während der Staat Grundbildung sichert, sollten Firmen spezifische Schulungen anbieten.",
              ar: "في رأيي يجب أن يتعاونا معاً. بينما تضمن الدولة التعليم الأساسي، يجب أن تقدم الشركات تدريبات متخصصة.", best: true,
              replyDe: "Eine pragmatische und realistische Lösung. Ich stimme zu.", replyAr: "حل عملي وواقعي. أوافقك." },
            { de: "Nur der Staat, die Firmen haben keine Verantwortung.", ar: "الدولة فقط، لا مسؤولية على الشركات.", best: false,
              replyDe: "Das ist einseitig. Firmen profitieren direkt von qualifizierten Mitarbeitern.", replyAr: "هذا من طرف واحد. الشركات تستفيد مباشرة من الموظفين المؤهلين." },
          ],
        },
      ],
    },
  ];
