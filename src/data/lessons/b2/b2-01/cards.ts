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
        "«hat» Indikativ ممكن في بعض سياقات النقل، لكن المطلوب هنا Konjunktiv I.",
        "«hätte» صيغة Konjunktiv II قد ترد في نقل الكلام؛ المطلوب هنا Konjunktiv I.",
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
        "«wird» Indikativ ممكن في بعض سياقات النقل؛ المطلوب هنا Konjunktiv I: werde.",
        "«würde» قد ترد في نقل الكلام؛ لكن المطلوب في هذا السؤال Konjunktiv I.",
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
      instructionAr: "صحّح التصريف غير المناسب للفاعل، واكتب Konjunktiv I المطلوب.",
      wrongSentence: "Er sagt, er bist krank.",
      wrongWord: "bist",
      correctWord: "sei",
      options: ["sei", "bist", "wäre", "seid"],
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
      titleAr: "ادمج معلومتين عن دراسة خيالية في تلخيص عربي واحد",
      sourceDe: "Text 1: Ein fiktiver Forschungsbericht berichtet, kurze Lernintervalle hätten einer Gruppe beim Erinnern geholfen; die Ursache sei noch nicht geklärt. Text 2: Die Forscherin betont, eine einzelne Untersuchung beweise keine allgemeine Regel.",
      taskAr: "لخّص بالعربية ما يذكره التقرير الخيالي، مع التفريق بين نتيجة أولية وما لم يثبت بعد.",
      modelAnswerAr: "«يفيد تقرير تدريبي خيالي بأن فترات التعلّم القصيرة ربما ساعدت مجموعةً ما على التذكّر، لكن سبب ذلك لم يتضح. وتؤكد الباحثة أن دراسة واحدة لا تثبت قاعدة عامة.»",
      keyPointsAr: ["نسب المعلومة إلى التقرير", "عرض النتيجة بوصفها أولية لا حقيقة محسومة", "ذكر أن دراسة واحدة لا تثبت قاعدة عامة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-01-1",
      scenarioAr: "نقاش أكاديمي حول نقل نتائج دراسة أولية بحذر.",
      scenarioDe: "Eine akademische Diskussion über die vorsichtige Wiedergabe erster Studienergebnisse.",
      strategyAr: "ميّز بين الادعاء والدليل، واستعمل Konjunktiv I لنقل ما يقوله فريق البحث، ثم ناقش حدود ما يمكن استنتاجه.",
      rounds: [
        {
          speakerDe: "Die Studie beweist, dass kurze Lernintervalle die Erinnerung verbessern.",
          speakerAr: "تثبت الدراسة أن فترات التعلّم القصيرة تحسّن الذاكرة.",
          options: [
            { de: "Eine einzelne Untersuchung ist noch kein allgemeiner Beweis, deshalb sollten andere Gruppen die Ergebnisse überprüfen.", ar: "دراسة واحدة لا تُعدّ دليلاً عاماً بعد، لذلك ينبغي لمجموعات أخرى التحقق من النتائج.", best: true, replyDe: "Welche Grenzen der Untersuchung sollten wir außerdem nennen?", replyAr: "ما حدود الدراسة الأخرى التي ينبغي أن نذكرها؟" },
            { de: "Ja, damit ist bewiesen, dass kurze Einheiten bei allen Menschen besser wirken.", ar: "نعم، بهذا ثبت أن الوحدات القصيرة أفضل لدى جميع الناس.", best: false, replyDe: "Welche Ergebnisse belegen diese Verallgemeinerung?", replyAr: "ما النتائج التي تثبت هذا التعميم؟" },
          ],
        },
        {
          speakerDe: "Wie sollten wir die Ergebnisse im Bericht wiedergeben?",
          speakerAr: "كيف ينبغي أن ننقل النتائج في التقرير؟",
          options: [
            { de: "Das Forschungsteam berichtet, die kurzen Einheiten hätten der Gruppe geholfen, während die Ursache noch nicht vollständig geklärt sei.", ar: "يفيد فريق البحث بأن الوحدات القصيرة ساعدت المجموعة، في حين أن السبب لم يتضح تماماً بعد.", best: true, replyDe: "So bleiben Ergebnis und offene Frage klar voneinander getrennt.", replyAr: "بهذا نفصل بوضوح بين النتيجة والسؤال المفتوح." },
            { de: "Das Team hat die Ursache eindeutig nachgewiesen.", ar: "أثبت الفريق السبب بشكل قاطع.", best: false, replyDe: "Wo steht, dass die Ursache bereits nachgewiesen wurde?", replyAr: "أين ورد أن السبب قد ثبت بالفعل؟" },
          ],
        },
        {
          speakerDe: "Können wir die Methode schon allen Lernenden empfehlen?",
          speakerAr: "هل يمكننا أن نوصي بهذه الطريقة لجميع المتعلمين الآن؟",
          options: [
            { de: "Meiner Ansicht nach sollten wir weitere Untersuchungen abwarten, obwohl die ersten Hinweise interessant sind, bevor wir eine Empfehlung formulieren.", ar: "في رأيي، ينبغي أن ننتظر دراسات أخرى رغم أهمية المؤشرات الأولية، قبل صياغة توصية.", best: true, replyDe: "Das ist eine vorsichtige und gut begründete Schlussfolgerung.", replyAr: "هذا استنتاج حذر ومعلّل جيداً." },
            { de: "Ja, die Methode funktioniert garantiert bei allen.", ar: "نعم، تنجح الطريقة بالتأكيد مع الجميع.", best: false, replyDe: "Eine solche Garantie lässt sich aus einem einzelnen Versuch nicht ableiten.", replyAr: "لا يمكن استنتاج مثل هذا الضمان من تجربة واحدة." },
          ],
        },
      ],
    },
  ];
