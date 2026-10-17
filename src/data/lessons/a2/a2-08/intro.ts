/**
 * a2-08 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-08.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann einfache Angaben zu Fahrkarten, Abfahrtszeiten und Ankünften aus einem kurzen Dialog und einem Übungsfahrplan entnehmen.",
      ar: "أستخرج معلومات بسيطة عن التذكرة ووقت المغادرة والوصول من حوار وجدول تدريب قصيرين.",
      evidence: {
        exerciseIds: ["e11", "e14", "q1", "q2"],
        taskIds: [
          "practice:a2-08:e11",
          "practice:a2-08:e14",
          "listening:l1:q1",
          "listening:l1:q2",
        ],
        labelAr:
          "أجب عن e11 وe14 اعتماداً على جدول التدريب، وعن q1 وq2 من حوار التذكرة؛ فتح الجدول أو إظهار التفريغ وحده لا يثبت استخراج المعلومات.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann einem kurzen Reisebericht wichtige Angaben zu Hinweg, Umstieg und Rückfahrt entnehmen.",
      ar: "أستخرج من تقرير سفر قصير سبب اختيار وسيلة الذهاب ومكان التبديل وطريقة العودة وخطة الرحلة التالية.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
        taskIds: [
          "reading:read-a2-08:rq1",
          "reading:read-a2-08:rq2",
          "reading:read-a2-08:rq3",
          "reading:read-a2-08:rq4",
          "reading:read-a2-08:rq5",
        ],
        labelAr:
          "اقرأ القصة ثم أجب عن rq1–rq5؛ إظهار النص أو المفردات وحده لا يُسجّل دليلاً على فهم القراءة.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in einfachen Sätzen Ungleichheit mit Komparativ und als sowie Gleichheit mit so … wie ausdrücken.",
      ar: "أكوّن مقارنة غير متساوية بصيغة Komparativ + als، وأميّزها من so + الصفة + wie للمساواة.",
      evidence: {
        exerciseIds: ["e1", "e4", "e5", "e12", "e13", "m1", "m3", "w1", "w2"],
        taskIds: [
          "practice:a2-08:e1",
          "flow-practice:a2-08:e1",
          "practice:a2-08:e4",
          "flow-practice:a2-08:e4",
          "practice:a2-08:e5",
          "practice:a2-08:e12",
          "practice:a2-08:e13",
          "mini-test:a2-08:m1",
          "flow-mini-test:a2-08:m1",
          "mini-test:a2-08:m3",
          "writing:a2-08:w1",
          "writing:a2-08:w2",
        ],
        labelAr:
          "اختر الصيغ الصحيحة في e1 وe5 وe12 وe13 وm1، ورتّب e4 وm3، ثم أنجز w1 وw2؛ لا تحتسب مشاهدة القاعدة وحدها.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann ausgewählte prädikative Superlativformen mit am …sten erkennen und verwenden.",
      ar: "أتعرف إلى صيغ تفضيل مختارة في الخبر مثل am schnellsten، وأستخدمها في جملة.",
      evidence: {
        exerciseIds: ["e2", "e7", "m2", "q3"],
        taskIds: [
          "practice:a2-08:e2",
          "flow-practice:a2-08:e2",
          "practice:a2-08:e7",
          "mini-test:a2-08:m2",
          "flow-mini-test:a2-08:m2",
          "listening:l2:q3",
        ],
        labelAr:
          "اختر التفضيل في e2 وm2، حوّل جملة e7، وأجب عن q3 وفق رأي المتحدث؛ لا يعني ذلك تقويم النطق.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann die häufigen Steigerungsreihen gut – besser – am besten, viel – mehr – am meisten und gern – lieber – am liebsten zuordnen.",
      ar: "أختار الصيغ المناسبة في السلاسل الشائعة gut/besser/am besten وviel/mehr/am meisten وgern/lieber/am liebsten.",
      evidence: {
        exerciseIds: ["e6", "m2", "m5"],
        taskIds: [
          "practice:a2-08:e6",
          "mini-test:a2-08:m2",
          "flow-mini-test:a2-08:m2",
          "mini-test:a2-08:m5",
        ],
        labelAr:
          "أكمل النهايات الست في e6، واختر am besten في m2 ودرجتي gern في m5؛ ظهور السلسلة مكتوبةً ليس إجابةً من المتعلم.",
        completion: "all-correct",
      },
    },
    {
      id: "z-travel",
      de: "Ich kann grundlegende Reiseausdrücke verstehen und eine einfache Bitte um eine Fahrkarte schriftlich formulieren.",
      ar: "أفهم عبارات سفر أساسية وأكتب طلباً قصيراً لتذكرة؛ ولا أدّعي أن الاختيار النصي يقيس المحادثة الشفهية.",
      evidence: {
        exerciseIds: ["e3", "e8", "e10", "w4"],
        taskIds: [
          "practice:a2-08:e3",
          "practice:a2-08:e8",
          "practice:a2-08:e10",
          "writing:a2-08:w4",
        ],
        labelAr:
          "طابق مفردات e3، وافهم hin und zurück في e8، وأجب كتابةً عن e10 وw4؛ التفاعل النصي ليس هدف كلام مقوّماً.",
        completion: "all-correct",
      },
    },
    {
      id: "z-writing",
      de: "Ich kann kurze Vergleichssätze ergänzen oder formulieren und einen einfachen Reisesatz korrekt aufschreiben.",
      ar: "أكمل صيغ مقارنة، وأكتب جملة مقارنة وطلب تذكرة، وأدوّن جملة قصيرة من الإملاء.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3", "w4"],
        taskIds: [
          "writing:a2-08:w1",
          "writing:a2-08:w2",
          "writing:a2-08:w3",
          "writing:a2-08:w4",
        ],
        labelAr:
          "أنجز مهام الكتابة والإملاء w1–w4 بإجابات صحيحة؛ لا تُحتسب مشاهدة السؤال أو تشغيل الصوت وحدهما.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "كيف تقول بالألمانية إن قطاراً أسرع من حافلة، وإن رحلتين متساويتان في السرعة؟ لاحظ الفرق بين *schneller als* و*so schnell wie*، ثم طبّقه في أمثلة سفر تدريبية.",
    motivatingQuestionDe: "Was ist auf dieser Beispielstrecke schneller: der Zug oder der Bus?",
    contextAr:
      "نقارن في أمثلة محددة بين وسائل النقل، ونقرأ معلومات سفر قصيرة، ونتدرّب على عبارات التذكرة. كل الأسعار والمواعيد والمسارات الواردة في أمثلة هذا الدرس خيالية، وليست بيانات سفر حالية.",
    contextDe: "Auf dieser Beispielstrecke ist der Zug schneller als der Bus.",
    connectionToPreviousAr:
      "تستخدم مراجعة الأعداد من A1-07 وصيغة الوجهة من A1-11 ضمن سؤالين قصيرين؛ ثم تنتقل إلى مقارنة وسائل النقل وقراءة معلومات سفر تدريبية. لا نعيد هنا تدريس جميع صيغ الوقت أو حروف المكان.",
    activateVocabulary: [
      { de: "die Fahrkarte", ar: "تذكرة السفر" },
      { de: "der Fahrplan", ar: "جدول مواعيد الرحلات" },
      { de: "der Zug", ar: "القطار" },
      { de: "der Bus", ar: "الحافلة" },
      { de: "umsteigen", ar: "يبدّل وسيلة النقل" },
      { de: "das Gleis", ar: "مسار السكة/رقمه" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-07 — التسوق): اختر الأرقام:",
      questionDe: "Wie viel ist „zwei plus drei“?",
      options: ["fünf", "vier", "sechs", "drei"],
      correctIndex: 0,
      explanation: "2 + 3 = 5 = fünf (درس التسوق).",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر حرف الجر:",
      questionDe: "Ich fahre ___ Berlin. (Berlin = Zielort)",
      options: ["nach", "zu", "in", "aus"],
      correctIndex: 0,
      explanation: "في هذا النمط، إذا كانت مدينة مثل Berlin هي الوجهة نقول عادةً *nach Berlin*. لا تعني الإجابة أن كل اسم جغرافي يأخذ *nach*؛ فالبلدان التي تأتي مع أداة لها تراكيب أخرى.",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A2 (درس a2-05 — في المكتب والعمل): أكمل الماضي البسيط:",
      template: "Gestern ___ ich in Hamburg. (sein)",
      blanks: [
        { correct: "war", options: ["war", "bin", "hatte"] },
      ],
      explanation: "Präteritum من sein مع ich: war (درس المكتب).",
      errorType: "conjugation",
    },
  ];
