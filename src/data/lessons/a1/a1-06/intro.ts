/**
 * a1-06 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-06.ts في الدفعة 94 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Freizeitaktivitäten benennen und einen kurzen Satz zu einem Hobby schreiben.",
      ar: "أن أسمّي أنشطة وقت الفراغ وأكتب جملة قصيرة عن هواية أختارها.",
      evidence: {
        exerciseIds: ["e3", "w1"],
        taskIds: ["practice:a1-06:e3", "flow-practice:a1-06:e3", "writing:a1-06:w1"],
        labelAr: "صِلْ الأنشطة بمعانيها في e3، ثم اكتب جملة من القائمة المحددة في w1.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann Vorlieben mit gern und mögen ausdrücken und eine einfache Frage mit Lust verstehen.",
      ar: "أن أعبّر عن نشاط أحبّه بـgern وشيء أفضّله بـmögen، وأن أفهم سؤالاً بسيطاً عن الرغبة.",
      evidence: {
        exerciseIds: ["e1", "e4", "e8", "e19", "e20", "w1"],
        taskIds: ["practice:a1-06:e1", "flow-practice:a1-06:e1", "practice:a1-06:e4", "flow-practice:a1-06:e4", "practice:a1-06:e8", "flow-practice:a1-06:e8", "practice:a1-06:e19", "flow-practice:a1-06:e19", "practice:a1-06:e20", "flow-practice:a1-06:e20", "writing:a1-06:w1"],
        labelAr: "أكمل gern في e1 ورتّب جملته في e4، وافهم سؤال Lust في e8، ثم أجب عن mögen وLust في e19–e20 واكتب جملة في w1.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einfache Aufforderungen mit du, ihr und Sie bilden und häufige trennbare Imperative verwenden.",
      ar: "أن أصوغ أمراً بسيطاً بصيغ du وihr وSie، وأن أميّز بادئة الفعل المنفصل في الأمر.",
      evidence: {
        exerciseIds: ["w2", "e6"],
        taskIds: ["writing:a1-06:w2", "practice:a1-06:e6", "flow-practice:a1-06:e6"],
        labelAr: "أكمل صيغ الأمر الثلاث في w2، ثم اختر الأوامر المنفصلة المناسبة في e6.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann in einem modellierten Einladungsdialog passende Reaktionen, eine höfliche Absage und einen Gegenvorschlag auswählen.",
      ar: "أن أختار في حوار نموذجي حول دعوة ردّاً مناسباً، واعتذاراً مهذباً مع اقتراح بديل.",
      evidence: {
        exerciseIds: ["w4"],
        taskIds: ["writing:a1-06:w4"],
        labelAr: "أكمل الحوار في w4 بقبول الدعوة، ثم اعتذار مهذب واقتراح أسبوع بديل وقبوله.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann den Stammvokalwechsel häufiger Verben in einfachen Sätzen verwenden.",
      ar: "أن أستخدم تغيّر الصائت في أفعال شائعة مع du وer/sie/es، مثل essen–isst وlesen–liest وfahren–fährt.",
      evidence: {
        exerciseIds: ["e11"],
        taskIds: ["practice:a1-06:e11", "flow-practice:a1-06:e11"],
        labelAr: "أكمل صيغ الأفعال الثلاثة في e11 إجابة صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann können und möchten in einfachen Sätzen verwenden.",
      ar: "أن أستخدم können وmöchte(n) في جمل بسيطة، مع المصدر المناسب بعد الفعل الناقص.",
      evidence: {
        exerciseIds: ["e12", "e16"],
        taskIds: ["practice:a1-06:e12", "flow-practice:a1-06:e12", "practice:a1-06:e16", "flow-practice:a1-06:e16"],
        labelAr: "أكمل تصريفات können/möchten في e12، ورتّب جملة الفعل الناقص في e16.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann war und hatte in kurzen Sätzen über Vergangenes verwenden.",
      ar: "أن أستخدم war وhatte في جمل قصيرة عن حالة أو تجربة سابقة.",
      evidence: {
        exerciseIds: ["e13", "e18", "w5"],
        taskIds: ["practice:a1-06:e13", "flow-practice:a1-06:e13", "practice:a1-06:e18", "flow-practice:a1-06:e18", "writing:a1-06:w5"],
        labelAr: "أكمل تصريف الماضي في e13، وحوّل الجملة في e18، ثم أكمل الرسالة القصيرة في w5.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann wichtige Informationen aus kurzen Hördialogen über Freizeit verstehen.",
      ar: "أن أفهم معلومات أساسية عن الهوايات والدعوات في حوارين قصيرين.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجب إجابة صحيحة عن أسئلة الاستماع q1–q3 بعد تشغيل الحوارين.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einem kurzen Dialog über Freizeit und Wochenende wichtige Informationen entnehmen.",
      ar: "أن أستخرج المعلومات الأساسية من حوار قصير عن الهوايات ونهاية الأسبوع.",
      evidence: {
        exerciseIds: ["r1", "r2", "r3", "r5"],
        taskIds: ["reading:read-a1-06:r1", "reading:read-a1-06:r2", "reading:read-a1-06:r3", "reading:read-a1-06:r5"],
        labelAr: "أجب عن أسئلة فهم المعلومات r1–r3 وr5 بعد قراءة الحوار.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "قارن بين: Ich spiele gern Fußball. (أحب لعب كرة القدم) وIch mag Fußball. (أحب كرة القدم). ما الذي تغيّر في بنية الجملة؟",
    motivatingQuestionDe: "Was machst du in deiner Freizeit?",
    contextAr:
      "نتحدث اليوم عن الهوايات ونهاية الأسبوع: نصف نشاطاً نحبه، وندعو صديقاً إلى نشاط، ونتدرّب على أوامر وطلبات بسيطة تناسب المخاطَب والسياق.",
    contextDe: "Hast du Lust auf ein Spiel?",
    connectionToPreviousAr: "في الدرس السابق تعلّمت الروتين اليومي وقراءة الوقت؛ هنا تنتقل إلى هوايات وقت الفراغ والدعوات، وتستخدم بعض تلك الأنماط في حوار جديد.",
    activateVocabulary: [
      { de: "die Freizeit", ar: "وقت الفراغ" },
      { de: "das Hobby", ar: "الهواية" },
      { de: "spielen", ar: "يلعب" },
      { de: "gern", ar: "بسرور / يحب أن" },
      { de: "der Sport", ar: "الرياضة" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): ماذا تقول عندما يُسأل عن بلدك؟",
      questionDe: "Woher kommst du?",
      questionAr: "من أين أنت؟",
      options: ["Ich komme aus Tunesien.", "Ich heiße Tunesien.", "Ich bin Tunesien.", "Ich wohne Tunesien."],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «heißen» تذكر الاسم لا الموطن: «Ich heiße …»؛ والسؤال «Woher» يُجاب بـ«Ich komme aus Tunesien».", "لا — «Ich bin Tunesien» بلا حرف جرّ تجعل المتكلّم هو البلد نفسه؛ والموطن يحتاج «aus» أو ظرفاً: «Ich komme aus Tunesien».", "لا — «wohnen» تحتاج «in» مع المدينة أو البلد («Ich wohne in Tunis»)؛ والسؤال عن الأصل بـ«Woher» فيُجاب بـ«kommen aus»."],
      explanation: "Woher kommst du? → Ich komme aus + البلد (من درس a1-01).",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-02 — العائلة والأصدقاء): اختر أداة الملكية الصحيحة:",
      template: "Das ist ___ Vater. (أبي — مذكر) · Das ist ___ Mutter. (أمي — مؤنث)",
      blanks: [
        { correct: "mein", options: ["mein", "meine", "meinen", "meiner"] },
        { correct: "meine", options: ["meine", "mein", "meinen", "meiner"] },
      ],
      hint: "mein قبل المذكر، meine قبل المؤنث.",
      explanation: "mein Vater (مذكر) / meine Mutter (مؤنث) — من درس a1-02.",
      errorType: "article",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-03 — الطعام والشراب، النصب): اختر التصحيح المناسب للجملة.",
      wrongSentence: "Ich esse ein Apfel.",
      wrongWord: "ein Apfel",
      correctWord: "einen Apfel",
      options: ["einen Apfel", "ein Apfel", "einem Apfel", "eine Apfel"],
      explanation: "Akkusativ للمذكر: ein → einen. Ich esse einen Apfel — من درس a1-03.",
      errorType: "case",
    },
    {
      id: "r4",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-04 — المكان وحالة Dativ): اختر العبارة التي تجيب عن سؤال المكان.",
      questionDe: "Wo liegt das Buch?",
      questionAr: "أين يقع الكتاب؟",
      options: ["Auf dem Tisch.", "Auf den Tisch.", "In den Tisch.", "Auf der Tisch."],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Auf den Tisch» نصبٌ يفيد الحركة إلى المكان؛ والسؤال بـ«Wo» عن السكون فيلزم الداتيف: «Auf dem Tisch».", "لا — «in» تعني داخل الشيء و«den Tisch» نصبٌ يفيد الحركة؛ والمكان الساكن: «Das Buch liegt auf dem Tisch».", "لا — «Tisch» مذكر ففي الداتيف «dem Tisch»؛ و«der Tisch» صيغة الرفع: «Auf dem Tisch»."],
      explanation: "السؤال Wo؟ عن موقع ثابت؛ نقول auf dem Tisch مع Dativ، كما في درس السكن a1-04.",
      errorType: "case",
    },
    {
      id: "r5",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-05 — الفعل المنفصل): أكمل جزأي aufstehen.",
      template: "Ich ___ um sieben Uhr ___. (aufstehen)",
      blanks: [
        { correct: "stehe", options: ["stehe", "steht", "stehen"] },
        { correct: "auf", options: ["auf", "an", "aus"] },
      ],
      explanation: "في الجملة الخبرية يُصرّف stehen ويأتي الجزء المنفصل auf في آخر الجملة.",
      errorType: "word-order",
    },
  ];
