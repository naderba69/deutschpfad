/**
 * b2-12 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * وحدة «المهن المتقدمة»: استماع عن الترقية والتطوير، نطق المصطلحات
 * المهنية، وكتابة بصيغة الشرط والمبني للمجهول.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
  items: [
    {
      id: "l1",
      title: "مقابلة عن الترقية",
      lines: [
        { speaker: "Leiterin", de: "Ihre Leistungen wurden in diesem Jahr anerkannt.", ar: "اعتُرفت بإنجازاتك هذه السنة." },
        { speaker: "Sami", de: "Vielen Dank. Würde ich die Beförderung bekommen?", ar: "شكراً جزيلاً. هل سأحصل على الترقية؟" },
        { speaker: "Leiterin", de: "Wenn Sie das Projekt leiten, könnte das möglich sein.", ar: "إذا قدت المشروع، فقد يكون ذلك ممكناً." },
        { speaker: "Sami", de: "Ich würde gern mehr Verantwortung übernehmen.", ar: "أودّ تولي مسؤولية أكبر." },
        { speaker: "Leiterin", de: "Dann sollten Sie die Weiterbildung machen.", ar: "إذن ينبغي أن تقوم بالتدريب المستمر." },
      ],
    },
    {
      id: "l2",
      title: "التطوير المهني",
      lines: [
        { speaker: "Karim", de: "Ich möchte mich weiterbilden.", ar: "أريد تطوير نفسي مهنياً." },
        { speaker: "Beraterin", de: "Die Weiterbildung wird von der Firma bezahlt.", ar: "يُدفع ثمن التدريب المستمر من الشركة." },
        { speaker: "Karim", de: "Und die Führungskraft? Wie werde ich Führungskraft?", ar: "وماذا عن القيادة؟ كيف أصبح قائداً؟" },
        { speaker: "Beraterin", de: "Sie müssen Erfahrung sammeln und Verantwortung übernehmen.", ar: "يجب أن تجمع الخبرة وتتولى المسؤولية." },
      ],
    },
    {
      id: "l3",
      title: "شهادة العمل",
      audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
      lines: [
        { speaker: "Sami", de: "Mein Arbeitszeugnis wurde ausgestellt.", ar: "أُصدرت شهادة عملي.", audioSrc: "/audio/lessons/b2-12/ls-b2-12-3-1.mp3" },
        { speaker: "Anna", de: "Was steht darin?", ar: "ماذا مكتوب فيها؟", audioSrc: "/audio/lessons/b2-12/ls-b2-12-3-2.mp3" },
        { speaker: "Sami", de: "Meine Leistungen wurden anerkannt. Ich wurde mit Aufgaben betraut.", ar: "اعتُرفت بإنجازاتي. كُلّفت بمهام.", audioSrc: "/audio/lessons/b2-12/ls-b2-12-3-3.mp3" },
        { speaker: "Anna", de: "Das ist sehr gut. Die Erfahrung wird dir helfen.", ar: "هذا جيد جداً. الخبرة ستساعدك.", audioSrc: "/audio/lessons/b2-12/ls-b2-12-3-4.mp3" },
        { speaker: "Sami", de: "Ja, und die Weiterbildung wurde mir empfohlen.", ar: "نعم، وأُوصيت بالتدريب المستمر.", audioSrc: "/audio/lessons/b2-12/ls-b2-12-3-5.mp3" },
        { speaker: "Anna", de: "Dann hast du gute Chancen auf die Beförderung.", ar: "إذن لديك فرص جيدة للترقية.", audioSrc: "/audio/lessons/b2-12/ls-b2-12-3-6.mp3" },
      ],
    },
  ],
  questions: [
    {
      id: "q1",
      itemId: "l1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
      questionDe: "Was wurde anerkannt?",
      questionAr: "ما الذي اعتُرف به؟",
      options: ["die Leistungen", "die Weiterbildung", "die Firma", "das Projekt"],
      correctIndex: 0,
      explanation: "قالت المديرة: Ihre Leistungen wurden in diesem Jahr anerkannt.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«die Weiterbildung» لم يُعترف بها؛ بل اعتُرفت بالإنجازات.",
        "«die Firma» لم يُعترف بها؛ بل اعتُرفت بالإنجازات.",
        "«das Projekt» لم يُعترف به؛ بل اعتُرفت بالإنجازات.",
      ],
    },
    {
      id: "q2",
      itemId: "l2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wer bezahlt die Weiterbildung?",
      questionAr: "من يدفع ثمن التدريب المستمر؟",
      options: ["die Firma", "Karim selbst", "die Beraterin", "niemand"],
      correctIndex: 0,
      explanation: "قالت المستشارة: Die Weiterbildung wird von der Firma bezahlt.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«Karim selbst» لم يدفع بنفسه؛ بل تدفع الشركة.",
        "«die Beraterin» لم تدفع؛ بل تدفع الشركة.",
        "«niemand» ينفي الدفع، وهذا عكس ما قالته المستشارة.",
      ],
    },
    {
      id: "q3",
      itemId: "l2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Was muss Karim tun, um Führungskraft zu werden?",
      questionAr: "ماذا يجب على كريم أن يفعل ليصبح قائداً؟",
        options: ["Erfahrung sammeln und Verantwortung übernehmen", "Mehr Urlaub nehmen und sich lange ausruhen", "Die Firma wechseln und ganz neu anfangen", "Weniger arbeiten und früher nach Hause gehen"],
      correctIndex: 0,
      explanation: "قالت المستشارة: Sie müssen Erfahrung sammeln und Verantwortung übernehmen.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«Mehr Urlaub nehmen» لم تقل المستشارة إنه يجب أخذ إجازة أكثر.",
        "«Die Firma wechseln» لم تقل المستشارة إنه يجب تغيير الشركة.",
        "«Weniger arbeiten» لم تقل المستشارة إنه يجب العمل أقل.",
      ],
    },
    {
      id: "q4",
      itemId: "l3",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
      questionDe: "Was wurde Sami empfohlen?",
      questionAr: "بماذا أُوصي سامي؟",
      options: ["die Weiterbildung", "mehr Urlaub", "eine neue Firma", "weniger Arbeit"],
      correctIndex: 0,
      explanation: "قال سامي: Die Weiterbildung wurde mir empfohlen.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«mehr Urlaub» لم يُوصَ به؛ بل أُوصي بالتدريب المستمر.",
        "«eine neue Firma» لم يُوصَ بها؛ بل أُوصي بالتدريب المستمر.",
        "«weniger Arbeit» لم يُوصَ بها؛ بل أُوصي بالتدريب المستمر.",
      ],
    },
  ],
};

export const pronunciation: Lesson["pronunciation"] = {
  id: "p1",
  title: "أصوات المهن المتقدمة: ö، ü، وch",
  items: [
    { de: "die Beförderung", ar: "الترقية", note: "ö = أو: بِ-فِير-دِرونغ" },
    { de: "die Führungskraft", ar: "القائد", note: "ü + r: فيرونغس-كرافت" },
    { de: "die Weiterbildung", ar: "التدريب المستمر", note: "ei = آي: فايتِر-بيلدونغ" },
    { de: "die Verantwortung", ar: "المسؤولية", note: "v = ف: فير-آنت-فورتونغ" },
    { de: "der Lebenslauf", ar: "السيرة الذاتية", note: "ch = خ: لِبِنس-لاوف" },
    { de: "das Arbeitszeugnis", ar: "شهادة العمل", note: "eu = أوي: آر-بايتس-تسويغ-نيس" },
  ],
  tip: "Beförderung = بِ-فِير-دِرونغ — ö قصيرة. Führungskraft = فيرونغس-كرافت — ü ثم r. Weiterbildung = فايتِر-بيلدونغ — ei واضحة.",
  shadowing: [
    { de: "Wenn ich die Beförderung bekäme, würde ich mehr Verantwortung übernehmen.", ar: "لو حصلت على الترقية، لتوليت مسؤولية أكبر.", tip: "bekäme — صيغة الشرط" },
    { de: "Die Projekte wurden erfolgreich abgeschlossen.", ar: "أُنجزت المشاريع بنجاح.", tip: "wurden abgeschlossen — مجهول" },
    { de: "Ich würde gern in Ihrem Team arbeiten.", ar: "أودّ العمل في فريقكم.", tip: "würde gern — تهذيب" },
    { de: "Die Leistungen wurden anerkannt.", ar: "اعتُرفت بالإنجازات.", tip: "wurden anerkannt — مجهول" },
  ],
};

export const writing: NonNullable<Lesson["writing"]> = [
  {
    id: "w1",
    type: "transformation",
    instructionAr: "حوّل الجملة إلى صيغة الشرط (رغبة مهذبة):",
    prompt: "«أريد العمل في فريقكم» → (صيغة الشرط المهذبة)",
    acceptedAnswers: ["Ich würde gern in Ihrem Team arbeiten.", "Ich würde gern in Ihrem Team arbeiten"],
    sampleAnswer: "Ich würde gern in Ihrem Team arbeiten.",
    explanation: "الرغبة المهذبة: würde gern + المصدر في النهاية.",
    errorType: "grammar",
  },
  {
    id: "w2",
    type: "fill-blank",
    instructionAr: "أكمل بالمبني للمجهول (وثيقة رسمية):",
    template: "Die Projekte ___ erfolgreich abgeschlossen. · Die Leistungen ___ anerkannt.",
    blanks: [
      { correct: "wurden", options: ["wurden", "wurde", "werden"] },
      { correct: "wurden", options: ["wurden", "wurde", "worden"] },
    ],
    explanation: "المبني للمجهول في الماضي البسيط: wurden + Partizip II (abgeschlossen، anerkannt).",
    errorType: "grammar",
  },
  {
    id: "w3",
    type: "dictation",
    instructionAr: "استمع واكتب الجملة:",
    audioText: "Die Beförderung zur Führungskraft ist ein wichtiger Schritt.",
    explanation: "الترقية إلى منصب القيادة خطوة مهمة — die Beförderung (اسم).",
    errorType: "spelling",
  },
];
