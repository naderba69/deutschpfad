/**
 * b2-08 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Ich interessiere mich ___ Kunst.",
      options: ["für", "auf", "von", "um"],
      correctIndex: 0,
      explanation: "sich interessieren für.",
      errorType: "preposition",
      optionExplanations: [
        undefined,
        "«auf» لا تناسب sich interessieren.",
        "«von» لا تناسب sich interessieren.",
        "«um» لا تناسب sich interessieren.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر:",
      questionDe: "Er träumt ___ einem Haus.",
      options: ["von", "für", "auf", "an"],
      correctIndex: 0,
      explanation: "träumen von.",
      errorType: "preposition",
      optionExplanations: [
        undefined,
        "«für» تعني لأجل، ولا تناسب träumen von.",
        "«auf» لا تناسب träumen.",
        "«an» لا تناسب träumen.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["auf", "Ich", "freue", "mich", "Urlaub", "den", "."],
      correctSentence: "Ich freue mich auf den Urlaub.",
      explanation: "أتطلع للعطلة — sich freuen auf.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich warte für den Bus.",
      wrongWord: "für",
      correctWord: "auf",
      options: ["auf", "für", "von", "an"],
      explanation: "warten auf.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر:",
      template: "Sie kümmert sich ___ die Kinder. (بـ) Wir diskutieren ___ das Thema. (عن)",
      blanks: [
        { correct: "um", options: ["um", "für", "auf"] },
        { correct: "über", options: ["über", "von", "an"] },
      ],
      explanation: "اعتناء → um. نقاش → über.",
      errorType: "preposition",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Sprache", ar: "اللغة", example: "Die Sprache verbindet.", exampleAr: "اللغة تربط.", level: "B2" },
    { id: "fc2", de: "die Kultur", ar: "الثقافة", example: "Wir lernen in diesem Kurs verschiedene Kulturen kennen.", exampleAr: "نتعرّف في هذه الدورة إلى ثقافات متنوعة.", level: "B2" },
    { id: "fc3", de: "der Austausch", ar: "التبادل", example: "Der Austausch ist lehrreich.", exampleAr: "التبادل مفيد.", level: "B2" },
    { id: "fc4", de: "interkulturell", ar: "بين الثقافات", example: "Interkulturelles Lernen.", exampleAr: "تعلم بين الثقافات.", level: "B2" },
    { id: "fc5", de: "sich interessieren für", ar: "يهتم بـ", example: "Ich interessiere mich für Musik.", exampleAr: "أهتم بالموسيقى.", level: "B2" },
    { id: "fc6", de: "warten auf", ar: "ينتظر", example: "Ich warte auf dich.", exampleAr: "أنتظرك.", level: "B2" },
    { id: "fc7", de: "sich freuen auf/über", ar: "يتطلع لـ/يفرح بـ", example: "auf den Urlaub / über das Geschenk", exampleAr: "تطلع للعطلة / فرح بالهدية", level: "B2" },
    { id: "fc8", de: "abhängen von", ar: "يعتمد على", example: "Das hängt von dir ab.", exampleAr: "يعتمد عليك.", level: "B2" },
    { id: "fc9", de: "die Bereitschaft", ar: "الاستعداد", example: "Es hängt von der Bereitschaft ab, sich wirklich dafür zu interessieren.", exampleAr: "الأمر يتوقف على الاستعداد للاهتمام به فعلاً.", level: "B2" },
    { id: "fc10", de: "sich gewöhnen an", ar: "يعتاد على", example: "Über die Wochen gewöhnte sie sich an neue Rhythmen.", exampleAr: "وعلى مدى الأسابيع اعتادت إيقاعاً جديداً.", level: "B2" },
    { id: "fc11", de: "die Übersetzung", ar: "الترجمة", example: "Heute arbeitet Lena in einem Übersetzungsbüro.", exampleAr: "تعمل لينا اليوم في مكتب ترجمة.", level: "B2" },
    { id: "fc12", de: "die Reibung", ar: "الاحتكاك", example: "Gelegentlich gab es Reibung.", exampleAr: "حدث بعض الاحتكاك أحياناً.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-08-1", type: "relay-instructions",
      titleAr: "انقل تعليمات اجتماع فريق محدد",
      sourceDe: "Für unser Teammeeting steht in der Einladung 9 Uhr. Wegen einer Zugverspätung komme ich heute voraussichtlich zehn Minuten später. Bitte gib der Gruppe kurz Bescheid, sobald du es weißt.",
      taskAr: "انقل لزميلك بالعربية ما تقوله الرسالة عن موعد هذا الاجتماع وكيفية الإبلاغ عن التأخير. وضّح أن هذه اتفاقات فريق محدد، لا قاعدة عن بلد أو ثقافة كاملة.",
      modelAnswerAr: "«موعد اجتماع فريقنا التاسعة بحسب الدعوة. بسبب تأخر القطار سأصل اليوم بعد الموعد بنحو عشر دقائق. أرجو إبلاغ المجموعة فور معرفة ذلك. هذه تعليمات هذا الفريق في المثال، وليست قاعدة عامة عن بلد أو ثقافة.»",
      keyPointsAr: ["نقلت موعد الاجتماع", "شرحت سبب التأخير والوقت المتوقع", "ذكرت طلب إبلاغ المجموعة", "ميّزت اتفاق الفريق عن التعميم الثقافي"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-08-1",
      scenarioAr: "تأخر شخص عن اجتماع فريق بسبب القطار؛ يوضح الطرفان ما يناسب هذا الفريق من دون تعميم على ثقافة أو بلد.",
      scenarioDe: "Eine Verspätung bei einem Teammeeting klären und eine konkrete Absprache treffen.",
      strategyAr: "اسأل عن الاتفاق الخاص بالفريق، واذكر الوقائع والحل الممكن من دون نسب عادة إلى ثقافة كاملة.",
      rounds: [
        {
          speakerDe: "Das Meeting begann um neun. Du bist heute zehn Minuten später gekommen. Was ist passiert?",
          speakerAr: "بدأ الاجتماع في التاسعة، ووصلت اليوم بعد الموعد بعشر دقائق. ماذا حدث؟",
          options: [
            { de: "Es tut mir leid. Mein Zug hatte Verspätung. Ich hätte kurz Bescheid geben sollen. Welche Absprache gilt in unserem Team?", ar: "أعتذر. تأخر قطاري، وكان ينبغي أن أبلغكم باختصار. ما الاتفاق المعمول به في فريقنا؟", best: true, replyDe: "Danke für die Erklärung. Für dieses Meeting hilft es uns, wenn du die Gruppe kurz informierst.", replyAr: "شكراً للتوضيح. يفيد هذا الاجتماع أن تبلغ المجموعة باختصار.", },
            { de: "Zehn Minuten sind doch nichts! Ihr seid zu streng.", ar: "عشر دقائق لا تعني شيئاً! أنتم صارمون جداً.", best: false, replyDe: "Ich verstehe, dass du die Verspätung anders bewertest. Lass uns trotzdem eine passende Absprache für unser Team finden.", replyAr: "أفهم أنك تقيّم التأخير على نحو مختلف. ومع ذلك فلنجد اتفاقاً مناسباً لفريقنا." },
          ],
        },
        {
          speakerDe: "Wie können wir eine klare Absprache treffen?",
          speakerAr: "كيف نتفق على إجراء واضح؟",
          options: [
            { de: "Ich informiere die Gruppe, sobald ich merke, dass ich mich verspäte. Wenn ich niemanden erreiche, schreibe ich nach meiner Ankunft.", ar: "سأبلغ المجموعة فور أن أعرف أنني سأتأخر. وإذا تعذر عليّ الوصول إلى أحد فسأكتب بعد وصولي.", best: true, replyDe: "Das ist eine klare Vereinbarung. Wir probieren sie beim nächsten Meeting aus.", replyAr: "هذا اتفاق واضح. سنجربه في الاجتماع القادم." },
            { de: "Ich komme, wann ich will; eine Absprache brauche ich nicht.", ar: "سآتي متى شئت؛ ولا أحتاج إلى اتفاق.", best: false, replyDe: "Dann können die anderen schwer planen. Welche Lösung wäre für beide Seiten praktikabel?", replyAr: "عندئذ يصعب على الآخرين التخطيط. ما الحل العملي للطرفين؟" },
          ],
        },
      ],
    },
  ];
