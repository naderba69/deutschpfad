/**
 * b1-09 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الوصلة:",
      questionDe: "eine Entscheidung ___",
      options: ["treffen", "stellen", "sagen", "machen"],
      correctIndex: 0,
      explanation: "القرار يُتخذ (treffen).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«stellen» تعني يطرح، ولا تناسب eine Entscheidung.",
        "«sagen» تعني يقول، ولا تناسب Entscheidung.",
        "«machen» لا تشكّل تعبيراً صحيحاً مع Entscheidung؛ نقول eine Entscheidung treffen.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف n:",
      questionDe: "Wir helfen dem ___.",
      options: ["Kunden", "Kunde", "Kundes", "Kundem"],
      correctIndex: 0,
      explanation: "الجر: dem Kunden.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Kunde» هو الرفع المفرد؛ بعد dem نستخدم الداتيف المفرد Kunden.",
        "«Kundes» نهاية مضاف إليه، ولا تناسب الجر بعد dem.",
        "«Kundem» نهاية خاطئة لهذا الاسم.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Er", "traf", "Entscheidung", "eine", "wichtige", "."],
      correctSentence: "Er traf eine wichtige Entscheidung.",
      explanation: "اتخذ قراراً مهماً — الوصلة: eine Entscheidung treffen.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Der Polizist fragt den Journalist.",
      wrongWord: "Journalist",
      correctWord: "Journalisten",
      options: ["Journalisten", "Journalist", "Journalistes", "Journalistin"],
      explanation: "n-Deklination: den Journalisten.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "___ Sie mir bitte Bescheid! (أبلغ) Wir nehmen ___. (وداعاً)",
      blanks: [
        { correct: "Sagen", options: ["Sagen", "Stellen", "Treffen"] },
        { correct: "Abschied", options: ["Abschied", "Entscheidung", "Hilfe"] },
      ],
      explanation: "Bescheid sagen + Abschied nehmen.",
      errorType: "grammar",
    },
    {
      id: "m6",
      type: "multiple-choice",
      instructionAr: "اختر الحرف والحالة الصحيحين:",
      questionDe: "Ich nehme ___ Deutschkurs teil.",
      options: ["am", "an den", "auf dem", "für den"],
      correctIndex: 0,
      explanation: "teilnehmen an + Dativ ⇒ an dem = am، لا an den.",
      errorType: "preposition",
      optionExplanations: [
        undefined,
        "«an den» تستعمل مع الحالة المفعولية، ولا تناسب teilnehmen.",
        "«auf dem» لا تناسب teilnehmen.",
        "«für den» لا تناسب teilnehmen.",
      ],
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Ehrenamt", ar: "العمل التطوعي", example: "Er übernimmt ein Ehrenamt.", exampleAr: "يتولى عملاً تطوعياً.", level: "B1" },
    { id: "fc2", de: "der Verein", ar: "الجمعية", example: "Der Verein hilft Kindern.", exampleAr: "الجمعية تساعد الأطفال.", level: "B1" },
    { id: "fc3", de: "die Spende", ar: "التبرع", example: "Die Spende ist großzügig.", exampleAr: "التبرع سخي.", level: "B1" },
    { id: "fc4", de: "eine Frage stellen", ar: "يطرح سؤالاً", example: "Darf ich eine Frage stellen?", exampleAr: "هل أستطيع طرح سؤال؟", level: "B1" },
    { id: "fc5", de: "eine Entscheidung treffen", ar: "يتخذ قراراً", example: "Wir treffen eine Entscheidung.", exampleAr: "نتخذ قراراً.", level: "B1" },
    { id: "fc6", de: "Bescheid sagen", ar: "يبلغ", example: "Sag mir Bescheid!", exampleAr: "أبلغني!", level: "B1" },
    { id: "fc7", de: "die n-Deklination", ar: "تصريف n", example: "Ich kenne den Studenten.", exampleAr: "أعرف الطالبَ.", level: "B1" },
    { id: "fc8", de: "das Mitglied", ar: "العضو", example: "Ich bin Mitglied im Verein.", exampleAr: "أنا عضو في الجمعية.", level: "B1" },
    { id: "fc9", de: "der Freiwillige", ar: "المتطوّع", example: "Viele Freiwillige helfen in der Gemeinde.", exampleAr: "متطوّعون كثيرون يساعدون في البلدة.", level: "B1" },
    { id: "fc10", de: "teilnehmen an", ar: "يشارك في", example: "Sie nimmt an einem Projekt teil.", exampleAr: "تشارك في مشروع.", level: "B1" },
    { id: "fc11", de: "sich kümmern um", ar: "يعتني بـ", example: "Er kümmert sich um die Kinder.", exampleAr: "يعتني بالأطفال.", level: "B1" },
    { id: "fc12", de: "die Einarbeitung", ar: "التأهيل والتدريب على العمل", example: "Die Einarbeitung für neue Freiwillige beginnt nächste Woche.", exampleAr: "يبدأ تدريب المتطوعين الجدد الأسبوع المقبل.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-09-1", type: "relay-instructions",
      titleAr: "انقل إعلان تطوع بالعربية لصديق",
      sourceDe: "Wir suchen Freiwillige für unser Sozialprojekt. Aufgaben: Kinder betreuen und Deutsch üben. Zeit: samstags von 10 bis 14 Uhr.",
      taskAr: "انقل الإعلان بالعربية: المهام، اليوم والوقت، ومن المطلوب.",
      modelAnswerAr: "«نبحث عن متطوعين لمشروعنا الاجتماعي. المهام: رعاية الأطفال وممارسة الألمانية. الوقت: السبت من العاشرة صباحاً حتى الثانية ظهراً.»",
      keyPointsAr: ["نقلت طلب المتطوعين", "ذكرت المهام (رعاية + لغة)", "نقلت اليوم والوقت"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-09-1",
      scenarioAr: "تناقش فكرة العمل التطوعي مع صديق.",
      scenarioDe: "Diskussion über ehrenamtliche Arbeit.",
      strategyAr: "الاستراتيجية: إقناع صديق بقيمة العمل التطوعي.",
      rounds: [
        {
          speakerDe: "Warum engagierst du dich ehrenamtlich?",
          speakerAr: "لماذا تتطوع؟",
          options: [
            { de: "Weil ich der Gesellschaft etwas zurückgeben möchte. Außerdem lerne ich neue Menschen und Fähigkeiten kennen.", ar: "لأنني أريد رد الجميل للمجتمع. كما أتعرف على أشخاص ومهارات جديدة.", best: true, replyDe: "Das ist edel. Aber es kostet viel Zeit.", replyAr: "هذا نبيل. لكنه يكلف وقتاً كثيراً." },
            { de: "Ich habe keine Zeit für andere.", ar: "ليس لدي وقت للآخرين.", best: false, replyDe: "Das verstehe ich. Vielleicht finden wir eine kleinere Aufgabe, die zu deiner Zeit passt.", replyAr: "أتفهم ذلك. ربما نجد مهمة أصغر تناسب وقتك." },
          ],
        },
        {
          speakerDe: "Lohnt sich das Ehrenamt trotz des Zeitaufwands?",
          speakerAr: "هل يستحق التطوع رغم الوقت؟",
          options: [
            { de: "Ja, auf jeden Fall. Man hilft nicht nur anderen, sondern entwickelt sich auch persönlich weiter.", ar: "نعم بالتأكيد. لا يساعد المرء الآخرين فحسب، بل يتطور شخصياً أيضاً.", best: true, replyDe: "Überzeugend! Vielleicht probiere ich es auch.", replyAr: "مقنع! ربما أجربه أيضاً." },
            { de: "Nein, Zeit ist Geld und ich verschwende sie nicht.", ar: "لا، الوقت مال ولن أضيعه.", best: false, replyDe: "Das ist sehr materialistisch gedacht.", replyAr: "هذا تفكير مادي جداً." },
          ],
        },
      ],
    },
  ];
