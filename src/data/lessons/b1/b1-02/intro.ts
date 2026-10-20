/**
 * b1-02 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann das Präteritum komplett bilden.",
      ar: "أن أصوغ الماضي البسيط (Präteritum) للأفعال المنتظمة والشاذة.",
      evidence: {
        exerciseIds: ["e1", "m1", "w2"],
        taskIds: ["practice:b1-02:e1", "mini-test:b1-02:m1", "writing:b1-02:w2"],
        labelAr: "أجب صحيحاً عن e1 (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق) وm1 (kam) في الاختبار المصغّر، وأكمل w2 بالأشكال الثلاثة. قراءة جدول t1 أو كشف الحل لا يُحتسبان أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann das Plusquamperfekt bilden: hatte/war + Partizip II.",
      ar: "أن أصوغ الماضي التام المركب (Plusquamperfekt) للحدث الذي وقع قبل حدث ماضٍ آخر.",
      evidence: {
        exerciseIds: ["e4", "e6", "m2"],
        taskIds: ["practice:b1-02:e4", "practice:b1-02:e6", "mini-test:b1-02:m2"],
        labelAr: "رتّب e4 بصحة (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وأكمل e6 (الفراغات الثلاثة)، وأجب صحيحاً عن m2 (hatte … gegessen) في الاختبار المصغّر. الجدول والشرح لا يُحتسبان أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann Berufserfahrungen in einem kurzen Gespräch verstehen und die Reihenfolge der Ereignisse erkennen.",
      ar: "أن أفهم خبرات مهنية في حوار قصير وأحدد ترتيب الأحداث فيه.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجب صحيحاً عن q1 وq2 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، دون كشف التفريغ. كشف النص (listening-transcript) لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann meine Berufserfahrung in der Vergangenheit schriftlich beschreiben.",
      ar: "أن أكتب عن خبرتي المهنية الماضية بالزمن المناسب.",
      evidence: {
        exerciseIds: ["w1", "w3"],
        taskIds: ["writing:b1-02:w1", "writing:b1-02:w3"],
        labelAr: "أكمل w1 (جملة عن خبرة بالـPräteritum) وw3 (تحويل جملة إلى Präteritum) بصحة. الكتابة الحرة وشرح الجدول لا يُحتسبان ضمن هذا الدليل.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في A2 تعلمت war/hatte (ماضي sein/haben). اليوم نعمم: كل الأفعال لها Präteritum! المنتظم: arbeitete (عمل). والشاذ: ging (ذهب)، kam (جاء). وهناك طبقة زمنية أعمق: Plusquamperfekt — «ما قبل الماضي» — مثل العربية: «كان قد عمل». ثلاث طبقات زمنية!",
    motivatingQuestionDe: "Wo haben Sie früher gearbeitet?",
    contextAr:
      "ندخل عالم العمل الاحترافي: نروي تجاربنا بالماضي الكامل، ونستخدم Plusquamperfekt للحديث عن «ما سبق» — مفيدة في مقابلات العمل وكتابة السيرة الذاتية.",
    contextDe: "Bevor ich studierte, hatte ich als Verkäufer gearbeitet.",
    connectionToPreviousAr: "تتذكر Perfekt (habe gegessen) وPräteritum للأفعال المساعدة (war). اليوم: Präteritum للكل + Plusquamperfekt — اكتمال منظومة الأزمنة الماضية الثلاثة.",
    activateVocabulary: [
      { de: "die Bewerbung", ar: "طلب الوظيفة" },
      { de: "der Arbeitgeber", ar: "صاحب العمل" },
      { de: "die Erfahrung", ar: "الخبرة" },
      { de: "der Lebenslauf", ar: "السيرة الذاتية" },
      { de: "das Vorstellungsgespräch", ar: "مقابلة العمل" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-05 — في المكتب والعمل): اختر الماضي الصحيح:",
      questionDe: "Ich ___ gestern im Büro. (كنت)",
      options: ["war", "hatte", "bin", "habe"],
      correctIndex: 0,
      explanation: "Präteritum sein: war (درس المكتب).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«hatte» فعل يملك؛ الجملة تحتاج صيغة sein للحال في الماضي، لذلك war.",
        "«bin» مضارع، والسياق ماضٍ، فالصيغة الصحيحة war.",
        "«habe» مضارع مع haben، ولا يناسب الجملة.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-01 — السفر والعطلات): اختر Perfekt الصحيح:",
      questionDe: "Ich ___ ein Buch ___. (قرأت)",
      options: ["habe ... gelesen", "bin ... gelesen", "habe ... gelest", "bin ... gelest"],
      correctIndex: 0,
      explanation: "lesen قوي: habe gelesen (درس السفر).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«bin ... gelesen» تستعمل sein، ولا يناسب الفعل lesen المتعدّي مع مفعول.",
        "«habe ... gelest» صيغة Partizip II خاطئة؛ الصحيح gelesen.",
        "«bin ... gelest» جمع خطأ الصيغة مع sein، ولا تصح بأي حال.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1 (درس a1-10 — العمل والمهن): أكمل:",
      template: "Ich arbeite als ___.",
      blanks: [
        { correct: "Lehrer", options: ["Lehrer", "Schüler", "Tisch"] },
      ],
      explanation: "arbeiten als + مهنة (درس المهن).",
      errorType: "vocabulary",
    },
  ];
