/**
 * a2-05 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-05.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann grundlegende Redemittel am Telefon ihren Funktionen zuordnen.",
      ar: "أن أطابق عبارات هاتفية أساسية بوظائفها ومعانيها.",
      evidence: {
        exerciseIds: ["e3"],
        taskIds: ["practice:a2-05:e3"],
        labelAr: "أكمل تمرين المطابقة e3؛ يظهر ضمن أول أربعة في العرض التدريجي، وقد يظهر في عينة practice العشوائية.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann wichtige Angaben aus kurzen Telefongesprächen heraushören.",
      ar: "أن أستخرج معلومات محددة من حواري هاتف قصيرين بعد الاستماع، لا بعد كشف التفريغ.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l2:q4"],
        labelAr: "أجب عن أسئلة الاستماع الأربعة قبل كشف التفريغ؛ لا يثبت فتح الحوار أو إجابته بعد كشفه الاستماع.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in kurzen Bürosätzen die passende Präteritumform von sein oder haben am Subjekt erkennen.",
      ar: "أن أختار في جمل قصيرة من سياق العمل صيغة Präteritum المناسبة لـsein أو haben وفق الفاعل.",
      evidence: {
        exerciseIds: ["m1", "m2"],
        taskIds: ["mini-test:a2-05:m1", "mini-test:a2-05:m2"],
        labelAr: "أجب عن m1 وm2؛ يختبر كلاهما اختيار صيغة الفعل وفق فاعل واضح، ولا يُحسب ترتيب الكلمات أو تصحيح الأداة دليلاً لهذا الهدف.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann wichtige Informationen aus einer kurzen beruflichen E-Mail entnehmen.",
      ar: "أن أستخرج معلومات محددة من بريد مهني قصير عن الغياب والاجتماع والملفات المطلوبة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-05:rq1",
          "reading:read-a2-05:rq2",
          "reading:read-a2-05:rq3",
          "reading:read-a2-05:rq4",
        ],
        labelAr: "اقرأ البريد وأجب عن أسئلة الفهم الأربعة؛ لا يُحتسب فتح النص دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann Anrede und Grußformel einer kurzen formellen E-Mail schreiben.",
      ar: "أن أكتب تحية افتتاحية وخاتمة مناسبتين لبريد رسمي قصير في مهمتين موجّهتين.",
      evidence: {
        exerciseIds: ["w1", "w4"],
        taskIds: ["writing:a2-05:w1", "writing:a2-05:w4"],
        labelAr: "أنجز التحية الرسمية في w1 وخاتمة البريد بلا علامة ترقيم زائدة في w4؛ لا تقيس المهمتان نصاً حراً.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "للتعبير عن الأمس، يمكن أن تقول Ich war gestern krank أو Ich bin gestern krank gewesen. كلاهما تركيب صحيح؛ فما الصيغة البسيطة التي ستتدرّب عليها في رسالة المكتب؟",
    motivatingQuestionDe: "Warst du gestern im Büro oder warst du krank?",
    contextAr:
      "في المكتب، نقرأ بريداً عن غياب موظف ونستمع إلى مكالمات قصيرة. نراجع صيغ Präteritum من sein وhaben، ونتمرّن على عبارات هاتف وبريد مناسبة للسياق من غير تعميم صيغة واحدة على كل منطقة أو علاقة مهنية.",
    contextDe: "Ich war gestern krank und hatte Fieber.",
    connectionToPreviousAr:
      "في A2-01 راجعت Perfekt. يشيع Perfekt في الحديث عن الماضي، بينما يظهر Präteritum كثيراً في الكتابة؛ وتشيع صيغ مثل war وhatte أيضاً في الكلام. هذه اتجاهات استعمال لا قاعدة تمنع إحدى الصيغتين.",
    activateVocabulary: [
      { de: "das Büro", ar: "المكتب" },
      { de: "anrufen", ar: "يتصل هاتفياً" },
      { de: "der Kollege / die Kollegin", ar: "الزميل / الزميلة" },
      { de: "die Besprechung", ar: "الاجتماع" },
      { de: "die E-Mail", ar: "البريد الإلكتروني" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-10): اختر تصريف الفعل المناسب:",
      questionDe: "Ich ___ in einer Firma. (arbeiten)",
      options: ["arbeite", "arbeitest", "arbeitet", "arbeiten"],
      correctIndex: 0,
      explanation: "مع ich في المضارع نقول arbeite؛ هذا استرجاع لتصريف الفعل في درس المهن.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«arbeitest» تصريف du؛ والفاعل هنا «Ich» ⇒ «Ich arbeite».",
        "«arbeitet» مع er/sie/es أو ihr، لا مع «Ich».",
        "«arbeiten» مصدرٌ أو صيغة wir/sie؛ ومع «Ich» نقول «arbeite». ",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-10): اختر أداة النفي المناسبة:",
      questionDe: "Ich arbeite ___ am Sonntag.",
      options: ["nicht", "kein", "keine", "keinen"],
      correctIndex: 0,
      explanation: "هنا ننفي الفعل arbeite؛ لذلك نستخدم nicht.",
      errorType: "negation",
      optionExplanations: [
        undefined,
        "«kein» ينفي اسماً بنكرة («kein Auto»)؛ والمنفيّ هنا الفعل «arbeite» ⇒ «nicht».",
        "«keine» للمؤنث أو الجمع مع اسمٍ منفيّ؛ ولا اسم منصوبٌ هنا.",
        "«keinen» منصوبٌ مذكر لاسم منفيّ («keinen Termin»)؛ والنفي هنا للفعل. ",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-09): أكمل حرف الجر المناسب لليوم والساعة:",
      template: "Der Termin ist ___ Montag ___ neun Uhr.",
      blanks: [
        { correct: "am", options: ["am", "um", "im"] },
        { correct: "um", options: ["um", "am", "im"] },
      ],
      explanation: "نستعمل am مع يوم الأسبوع وum مع الساعة: am Montag um neun Uhr.",
      errorType: "preposition",
    },
  ];
