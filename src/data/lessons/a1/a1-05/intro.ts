/**
 * a1-05 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-05.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann eine Handlung aus meinem Tagesablauf mit einer Uhrzeit beschreiben.",
      ar: "أن أصف فعلاً من روتيني اليومي بجملة بسيطة مع ذكر وقته.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a1-05:w1"],
        labelAr: "اكتب جملة كاملة عن وقت نهوضك مستخدماً إحدى الساعات المحددة في السؤال.",
        completion: "any-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann trennbare Verben im Hauptsatz richtig verwenden.",
      ar: "أن أصرّف فعلاً منفصلاً في الجملة الخبرية وأضع البادئة في موضعها.",
      evidence: {
        exerciseIds: ["e1", "w2"],
        taskIds: [
          "practice:a1-05:e1",
          "flow-practice:a1-05:e1",
          "writing:a1-05:w2",
        ],
        labelAr: "أجب عن e1 وأكمل بادئات الأفعال الأربع في w2 إجابة صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einfache Uhrzeiten verstehen und angeben.",
      ar: "أن أفهم وقتاً بسيطاً وأعبّر عنه بالألمانية.",
      evidence: {
        exerciseIds: ["e2", "w4"],
        taskIds: [
          "practice:a1-05:e2",
          "flow-practice:a1-05:e2",
          "writing:a1-05:w4",
        ],
        labelAr: "اختر الوقت الموافق لـ halb neun في e2 وأكمل صيغتي الوقت في w4.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann Tageszeiten mit am in einfachen Sätzen nennen.",
      ar: "أن أذكر الصباح وبعد الظهر والمساء في جمل بسيطة مستخدماً am.",
      evidence: {
        exerciseIds: ["w5"],
        taskIds: ["writing:a1-05:w5"],
        labelAr: "أكمل am قبل Morgen وNachmittag وAbend في w5.",
        completion: "any-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann die wichtigsten Angaben zu einem Tagesablauf in einem kurzen Text verstehen.",
      ar: "أن أفهم المعلومات الأساسية عن الروتين اليومي في نص قصير.",
      evidence: {
        exerciseIds: ["r1", "r2"],
        taskIds: ["reading:read-a1-05:r1", "reading:read-a1-05:r2"],
        labelAr: "أجب إجابة صحيحة عن r1 وr2 بعد قراءة النص الألماني.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann wichtige Uhrzeiten und Aktivitäten in einem kurzen Dialog verstehen.",
      ar: "أن ألتقط الأوقات والأنشطة الأساسية في حوار قصير عن اليوم.",
      evidence: {
        exerciseIds: ["q1", "q2"],
        taskIds: ["listening:l1:q1", "listening:l1:q2"],
        labelAr: "أجب عن سؤالي الاستماع q1 وq2 إجابة صحيحة بعد الاستماع.",
        completion: "all-correct",
      },
    },
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "لاحظ الفرق بين المصدر الألماني aufstehen والجملة المصرفة Ich stehe um sieben Uhr auf: أين تظهر البادئة auf في هذه الجملة؟",
    motivatingQuestionDe: "Wann stehst du auf?",
    contextAr:
      "نقرأ يوم طارق في هامبورغ ونستمع إلى سامي، ثم نتدرّب على الأفعال المنفصلة وذكر الأوقات في جمل يومية قصيرة.",
    contextDe: "Mein Tag beginnt um sieben Uhr.",
    connectionToPreviousAr:
      "تعلمت أسماء الغرف ووصف المكان بـ in وauf مع Dativ. الآن ننتقل من وصف مكان الأشياء إلى وصف روتينك اليومي، ونتعلم الأفعال المنفصلة والتعبير عن الوقت.",
    activateVocabulary: [
      { de: "aufstehen", ar: "ينهض من الفراش" },
      { de: "der Morgen", ar: "الصباح" },
      { de: "der Abend", ar: "المساء" },
      { de: "die Uhr", ar: "الساعة" },
      { de: "arbeiten", ar: "يعمل" },
    ],
  };


export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-03 — الطعام والشراب): كيف تطلب شيئاً بأدب؟",
      questionDe: "Was sagt man im Café, wenn man etwas möchte?",
      questionAr: "ماذا تقول في المقهى عندما تريد شيئاً؟",
      options: [
        "Ich hätte gern einen Kaffee.",
        "Ich bin einen Kaffee.",
        "Ich möchte einen Kaffee bin.",
        "Ich habe gern Kaffee sein.",
      ],
      correctIndex: 0,
      explanation: "Ich hätte gern + نصب (من درس a1-03): الطلب المهذب.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«bin» فعل الكون لا يأخذ مفعولاً كهذا؛ والطلب يُصاغ بـ«Ich hätte gern …».",
        "فعلان مسندان في جملة واحدة («möchte» و«bin» في الآخر)؛ والترتيب يقتضي مسنداً واحداً في المركز الثاني.",
        "«sein» في الآخر بلا مسند صحيح؛ و«Ich habe gern» ميلٌ لا طلبٌ مهذّب في المقهى.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-04 — السكن والمنزل): أين يقع السرير؟",
      questionDe: "Wo steht das Bett?",
      questionAr: "أين يقع السرير؟",
      options: ["im Schlafzimmer", "in der Küche", "im Bad", "im Wohnzimmer"],
      correctIndex: 0,
      explanation: "das Schlafzimmer = غرفة النوم (من درس a1-04 السكن).",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "المطبخ «die Küche» للطبخ؛ والسرير في غرفة النوم.",
        "الحمام «das Bad» للاستحمام؛ ولا يوضع السرير فيه.",
        "غرفة المعيشة «das Wohnzimmer» للجلوس، لا للنوم.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): أكمل تصريف sein",
      template: "Ich ___ aus Tunesien. (sein)",
      blanks: [{ correct: "bin", options: ["bin", "bist", "ist", "sind"] }],
      explanation: "ich bin (من درس a1-01): Ich bin aus Tunesien.",
      errorType: "conjugation",
    },
  ];
