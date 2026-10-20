/**
 * a1-10 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-10.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ausgewählte Berufsbezeichnungen ihrer Bedeutung zuordnen.",
      ar: "أطابق أسماء مهن مختارة بمعانيها في مهمات مفردات محددة.",
      evidence: {
        exerciseIds: ["e3", "e8"],
        taskIds: [
          "practice:a1-10:e3",
          "practice:a1-10:e8",
        ],
        labelAr: "أنجز المطابقة e3 واختر معنى سؤال المهنة في e8؛ لا يكفي فتح النشاط أو مراجعة البطاقات.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann ausgewählte feminine Berufsformen in den geübten Aufgaben erkennen und korrekt schreiben.",
      ar: "أتعرف إلى صيغ مهنية مؤنثة مختارة في التمارين، وأكتب Lehrerin كما وردت في الإملاء المحدد.",
      evidence: {
        exerciseIds: ["e1", "e9", "e17", "m1", "w3"],
        taskIds: [
          "practice:a1-10:e1",
          "practice:a1-10:e9",
          "practice:a1-10:e17",
          "mini-test:a1-10:m1",
          "writing:a1-10:w3",
        ],
        labelAr: "أجب عن صيغ Ärztin وKöchin وVerkäuferin في e1 وe9 وe17 وm1، ثم اكتب Lehrerin في إملاء w3؛ يلزم الصواب في المهام كلها.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einen Beruf in einem passenden Satzmuster mit sein oder arbeiten als einsetzen.",
      ar: "أكوّن جملة مهنية بالنمط المحدد، وأميز بين Ich bin … وIch arbeite als … في التمارين.",
      evidence: {
        exerciseIds: ["e4", "e14", "m3", "w1"],
        taskIds: [
          "practice:a1-10:e4",
          "practice:a1-10:e14",
          "mini-test:a1-10:m3",
          "writing:a1-10:w1",
        ],
        labelAr: "رتّب الجمل المهنية في e4 وe14 وm3، ثم اكتب النمط المحايد المحدد في w1؛ هذه أدلة على أداء تلك المهمات، لا اختبار للكلام الحر.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann in den geübten Beispielen zwischen nicht und kein passend wählen.",
      ar: "أختار صيغة النفي المناسبة في الأنماط المتدرب عليها، مع مراعاة الاسم أو الصفة أو الفعل والسياق المحدد.",
      evidence: {
        exerciseIds: ["e2", "e5", "e6", "e7", "e10", "e22", "e23", "e24", "e25", "m2", "m4", "m5", "w2"],
        taskIds: [
          "practice:a1-10:e2",
          "practice:a1-10:e5",
          "practice:a1-10:e6",
          "practice:a1-10:e7",
          "practice:a1-10:e10",
          "practice:a1-10:e22",
          "practice:a1-10:e23",
          "practice:a1-10:e24",
          "practice:a1-10:e25",
          "mini-test:a1-10:m2",
          "mini-test:a1-10:m4",
          "mini-test:a1-10:m5",
          "writing:a1-10:w2",
        ],
        labelAr: "أكمل اختيارات النفي والتصحيح والترتيب في e2 وe5–e7 وe10 وe22–e25 وm2 وm4 وm5 وw2؛ لا تُحتسب المشاهدة أو فتح التمرين.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann in einfachen Arbeitsplatzsätzen bei und in mit den geübten Dativformen verwenden.",
      ar: "أختار بين bei وin وفق العلاقة المقصودة، وأضبط أداة النكرة في أمثلة المكان الثابت المحددة.",
      evidence: {
        exerciseIds: ["e11", "e12", "e13", "e14", "e15", "e20", "e21", "e26"],
        taskIds: [
          "practice:a1-10:e11",
          "practice:a1-10:e12",
          "practice:a1-10:e13",
          "practice:a1-10:e14",
          "practice:a1-10:e15",
          "practice:a1-10:e20",
          "practice:a1-10:e21",
          "practice:a1-10:e26",
        ],
        labelAr: "أنجز اختيارات حروف الجر وأدوات المكان في e11–e15 وe20 وe21 وe26؛ يختلف الاختيار بحسب كون المقصود جهة العمل أو الموقع.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann die geübten Possessivformen unser, euer und das höfliche Ihr in einfachen Bürosätzen unterscheiden.",
      ar: "أختار صيغة الملكية المحددة بحسب الاسم المخاطَب به وبحسب صيغة الخطاب في الجملة.",
      evidence: {
        exerciseIds: ["e18", "e19"],
        taskIds: [
          "practice:a1-10:e18",
          "practice:a1-10:e19",
        ],
        labelAr: "أكمل صيغة الملكية المؤنثة والرسمية في e18، ثم صحح المطابقة مع Büro في e19؛ الصيغ المقبولة الأخرى مثل euere لا تُعامل خطأ خارج سياق المهمة.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann einem kurzen Text Informationen zu Beruf, Praktikum und Arbeitstag entnehmen.",
      ar: "أستخرج معلومات المهنة والتدريب العملي ويوم العمل من نص قصير بالإجابة عن أسئلته.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
        taskIds: [
          "reading:read-a1-10:rq1",
          "reading:read-a1-10:rq2",
          "reading:read-a1-10:rq3",
          "reading:read-a1-10:rq4",
          "reading:read-a1-10:rq5",
        ],
        labelAr: "أجب عن أسئلة القراءة rq1–rq5 كلها إجابة صحيحة؛ فتح النص أو إظهار ترجمته وحده لا يسجل دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann ausgewählte Informationen aus zwei kurzen, bereitgestellten Dialogen identifizieren.",
      ar: "أحدد معلومات مختارة عن المهنة ويوم العمل في الحوارين المقدمين عبر الإجابة عن أسئلتهما.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "استمع إلى الحوارين ثم أجب عن q1–q3؛ النص قابل للإظهار في الواجهة، لذلك لا تدعي النتيجة استماعاً مستقلاً موثقاً أو إتقاناً عاماً.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einen kurzen Berufssatz und geübte Negationsformen schriftlich formulieren.",
      ar: "أكتب جملة مهنية قصيرة، وأكمل صيغ نفي محددة، وأدوّن جملة قصيرة كما أسمعها.",
      evidence: {
        exerciseIds: ["w1", "w2", "w3"],
        taskIds: ["writing:a1-10:w1", "writing:a1-10:w2", "writing:a1-10:w3"],
        labelAr: "اكتب النمط المهني في w1، وأكمل النفي في w2، ثم أنجز الإملاء في w3؛ يلزم الأداء الصحيح في المهام الثلاث.",
        completion: "all-correct",
      },
    },
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "في العربية نقول «لا أعمل اليوم» و«ليس لدي وقت». هل تستعمل الألمانية أداة النفي نفسها في الحالتين؟ قارن: Ich arbeite heute nicht / Ich habe keine Zeit.",
    motivatingQuestionDe: "Was bist du von Beruf?",
    contextAr:
      "نتعرّف إلى أسماء مهن مختارة وصيغها المؤنثة الشائعة، ونقارن Ich bin وarbeiten als، ثم نتدرّب على nicht وkein في أمثلة يوضح سياقها ما يقع عليه النفي.",
    contextDe: "Ich arbeite als Lehrer.",
    connectionToPreviousAr:
      "تعلمنا sein في الدرس الأول؛ نطبقه هنا مع أسماء المهن، ونضيف نمط arbeiten als ومفردات العمل والنفي. هذه أنماط تدريب محددة وليست اختباراً عاماً للكلام الحر.",
    activateVocabulary: [
      { de: "der Beruf", ar: "المهنة" },
      { de: "arbeiten", ar: "يعمل" },
      { de: "der Lehrer", ar: "المعلم" },
      { de: "der Arzt", ar: "الطبيب" },
      { de: "die Firma", ar: "الشركة" },
      { de: "das Praktikum", ar: "التدريب العملي" },
      { de: "nicht", ar: "أداة نفي؛ يحدد السياق استعمالها وموضعها" },
    ],
  };


export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-01 — الفعل sein): اختر الشكل الصحيح.",
      questionDe: "Wir ___ Studenten.",
      questionAr: "نحن طلاب.",
      options: ["sind", "bin", "ist", "seid"],
      correctIndex: 0,
      explanation: "مع wir: sind.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«bin» للمتكلّم المفرد «Ich bin»؛ والفاعل «Wir».",
        "«ist» للغائب المفرد «er/sie/es ist»؛ و«Wir» جمع.",
        "«seid» للجمع المخاطب «ihr seid»؛ و«Wir» تأخذ «sind».",
      ],
    },
    {
      id: "r2",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-04 — حروف الجر مع الداتيف للمكان): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Das Buch liegt auf den Tisch.",
      wrongWord: "den Tisch",
      correctWord: "dem Tisch",
      options: ["dem Tisch", "den Tisch", "der Tisch", "des Tisch"],
      explanation: "للسؤال «أين؟» مع auf نستخدم الداتيف: auf dem Tisch.",
      errorType: "case",
    },
    {
      id: "r3",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-09 — الأعداد الترتيبية والتاريخ): اختر الشكل الصحيح.",
      questionDe: "Heute ist der ___ Mai.",
      questionAr: "اليوم هو الأول من مايو.",
      options: ["erste", "ersten", "erster", "erstes"],
      correctIndex: 0,
      explanation: "التاريخ يُكتب بالعدد الترتيبي: der erste Mai.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«ersten» نهاية منسوبة بعد أداة في حالات أخرى؛ والتاريخ «der erste Mai».",
        "«erster» نهاية مرفوع بلا أداة («erster Mai»)؛ والأداة «der» موجودة.",
        "«erstes» نهاية المحايد؛ و«der Mai» مذكر.",
      ],
    },
  ];
