/**
 * b2-01 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv I:",
      questionDe: "Er behauptet, er ___ es geschafft.",
      options: ["habe", "hat", "hätte", "haben"],
      correctIndex: 0,
      explanation: "النقل: habe.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«hat» صيغة المضارع المباشر، ولا تناسب الكلام غير المباشر هنا.",
        "«hätte» صيغة الشرط، ولا تناسب الكلام غير المباشر هنا.",
        "«haben» مصدر أو جمع، ولا تناسب الفعل بعد er.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Konjunktiv I:",
      questionDe: "Sie sagt, sie ___ kommen.",
      options: ["werde", "wird", "würde", "worden"],
      correctIndex: 0,
      explanation: "النقل: werde.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wird» صيغة المضارع المباشر، ولا تناسب الكلام غير المباشر.",
        "«würde» صيغة الشرط، ولا تناسب هذا التعبير غير المباشر.",
        "«worden» Partizip II للمبني للمجهول، ولا تناسب الجملة.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["sagt", "Die", "Professorin", "Ergebnisse", "die", "seien", "positiv", ",", "."],
      correctSentence: "Die Professorin sagt, die Ergebnisse seien positiv.",
      explanation: "النقل: seien (Konjunktiv I).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Er sagt, er ist krank.",
      wrongWord: "ist",
      correctWord: "sei",
      options: ["sei", "ist", "wäre", "seid"],
      explanation: "النقل: sei.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ Konjunktiv I:",
      template: "Sie sagt, sie ___ (haben) keine Zeit. Er meint, er ___ (können) helfen.",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
        { correct: "könne", options: ["könne", "kann", "könnte"] },
      ],
      explanation: "habe، könne (Konjunktiv I).",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Wissenschaft", ar: "العلم", example: "Die Wissenschaft hilft uns.", exampleAr: "العلم يساعدنا.", level: "B2" },
    { id: "fc2", de: "die Forschung", ar: "البحث العلمي", example: "Die Forschung ist wichtig.", exampleAr: "البحث مهم.", level: "B2" },
    { id: "fc3", de: "das Experiment", ar: "التجربة", example: "Das Experiment war erfolgreich.", exampleAr: "كانت التجربة ناجحة.", level: "B2" },
    { id: "fc4", de: "der Beweis", ar: "البرهان", example: "Der Beweis ist stark.", exampleAr: "البرهان قوي.", level: "B2" },
    { id: "fc5", de: "der Konjunktiv I", ar: "نقل الكلام غير المباشر", example: "Er sagt, er habe Zeit.", exampleAr: "يقول إنه وقت عنده.", level: "B2" },
    { id: "fc6", de: "indirekte Rede", ar: "الكلام غير المباشر", example: "Sie sagt, sie sei müde.", exampleAr: "تقول إنها متعبة.", level: "B2" },
    { id: "fc7", de: "behaupten", ar: "يزعم", example: "Er behauptet, er wisse es.", exampleAr: "يزعم أنه يعرفها.", level: "B2" },
    { id: "fc8", de: "die Entdeckung", ar: "الاكتشاف", example: "Die Entdeckung ist neu.", exampleAr: "الاكتشاف جديد.", level: "B2" },
    { id: "fc9", de: "dürfte", ar: "على الأرجح (تخمين)", example: "Das dürfte richtig sein.", exampleAr: "هذا على الأرجح صحيح.", level: "B2" },
    { id: "fc10", de: "muss / könnte (تخمين)", ar: "لابد أن / ربما", example: "Er muss krank sein. Sie könnte kommen.", exampleAr: "لابد أنه مريض. ربما تأتي.", level: "B2" },
    { id: "fc11", de: "die Darstellung", ar: "العرض، الصياغة", example: "Die Forscherin widerspricht dieser Darstellung.", exampleAr: "تعترض الباحثة على هذا العرض.", level: "B2" },
    { id: "fc12", de: "die Fassung", ar: "النسخة، الصيغة", example: "Wer zitieren will, soll die veröffentlichte Fassung lesen.", exampleAr: "من أراد الاقتباس فليقرأ النسخة المنشورة.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-b2-01-1",
      type: "merge-info",
      titleAr: "ادمج معلومتين من نصين في تلخيص عربي واحد",
      sourceDe: "Text 1: Die Digitalisierung verändert den Arbeitsmarkt. Text 2: Viele traditionelle Berufe verschwinden, aber neue entstehen.",
      taskAr: "لخّص بالعربية الفكرتين معاً في فقرة متماسكة: تأثير الرقمنة على سوق العمل (اختفاء مهن تقليدية وظهور مهن جديدة).",
      modelAnswerAr: "«الرقمنة تغيّر سوق العمل: تختفي مهن تقليدية كثيرة، لكن تظهر في المقابل مهن جديدة.»",
      keyPointsAr: ["دمجت الفكرتين معاً (لا فصل بينهما)", "نقلت مفهوم الرقمنة", "نقلت الاختفاء والظهور معاً"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-01-1",
      scenarioAr: "نقاش أكاديمي عن تأثير الرقمنة على مستقبل العمل.",
      scenarioDe: "Eine akademische Diskussion über die Digitalisierung.",
      strategyAr: "الاستراتيجية: التعبير عن المواقف المعقدة بأدوات الربط المتقدمة (obwohl, während, je...desto) والرد على الحجج.",
      rounds: [
        {
          speakerDe: "Meiner Meinung nach macht die Digitalisierung viele Arbeitsplätze überflüssig.",
          speakerAr: "في رأيي، الرقمنة تجعل وظائف كثيرة غير ضرورية.",
          options: [
            { de: "Das stimmt zwar, aber gleichzeitig entstehen völlig neue Berufe, die mehr Qualifikation verlangen.", ar: "صحيح إلى حد ما، لكن تظهر في الوقت نفسه مهن جديدة تماماً تتطلب مؤهلات أعلى.", best: true, replyDe: "Interessant! Welche neuen Berufe meinen Sie konkret?", replyAr: "مثير للاهتمام! أي مهن جديدة تقصد تحديداً؟" },
            { de: "Nein, das ist völlig falsch.", ar: "لا، هذا خطأ تماماً.", best: false, replyDe: "Können Sie das bitte begründen? Nur „falsch“ ist kein Argument.", replyAr: "هل يمكنك تبرير ذلك من فضلك؟ «خطأ» وحدها ليست حجة." },
          ],
        },
        {
          speakerDe: "Welche neuen Berufe entstehen Ihrer Meinung nach?",
          speakerAr: "أي مهن جديدة تظهر في رأيك؟",
          options: [
            { de: "Zum Beispiel im Bereich künstliche Intelligenz und Datenschutz. Je mehr Technologie, desto mehr Fachkräfte werden gebraucht.", ar: "مثلاً في مجال الذكاء الاصطناعي وحماية البيانات. كلما زادت التقنية، زادت الحاجة للمتخصصين.", best: true, replyDe: "Das ist ein gutes Argument. Allerdings brauchen wir auch Umschulungen.", replyAr: "هذه حجة جيدة. لكننا نحتاج أيضاً برامج إعادة تأهيل." },
            { de: "Ich weiß es nicht und es ist egal.", ar: "لا أعرف ولا يهم.", best: false, replyDe: "Für eine akademische Diskussion wäre eine fundierte Antwort besser.", replyAr: "في نقاش أكاديمي، الأفضل إجابة مبنية على معرفة." },
          ],
        },
        {
          speakerDe: "Sollte der Staat die Umschulung finanzieren?",
          speakerAr: "هل يجب على الدولة تمويل إعادة التأهيل؟",
          options: [
            { de: "Meiner Ansicht nach sollte der Staat in Umschulungen investieren, obwohl das kurzfristig teuer ist. Langfristig lohnt es sich für die ganze Gesellschaft.", ar: "في رأيي يجب على الدولة الاستثمار في إعادة التأهيل، رغم أن ذلك مكلف على المدى القصير. على المدى الطويل يفيد المجتمع كله.", best: true, replyDe: "Da stimme ich Ihnen zu. Eine kluge Investition in die Zukunft.", replyAr: "أوافقك الرأي. استثمار ذكي في المستقبل." },
            { de: "Nein, jeder ist für sich selbst verantwortlich.", ar: "لا، كل واحد مسؤول عن نفسه.", best: false, replyDe: "Das ist eine mögliche Position, aber sie ignoriert soziale Folgen.", replyAr: "هذا موقف محتمل، لكنه يتجاهل العواقب الاجتماعية." },
          ],
        },
      ],
    },
  ];
