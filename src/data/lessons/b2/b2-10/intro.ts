/**
 * b2-10 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann akademische Sätze mit festen Wendungen formulieren.",
      ar: "أن أصوغ جملاً أكاديمية بعبارات ثابتة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["w1", "e4", "e7", "q4"],
        taskIds: ["writing:b2-10:w1", "practice:b2-10:e4", "practice:b2-10:e7", "listening:l3:q4"],
        labelAr: "أكتب جملة أكاديمية بعبارة ثابتة وأرتب جملة (w1 وe4 وe7)، وأفهم عبارة es ist erwiesen في الاستماع (q4)، دون كشف الحل. لا يقيس هذا كتابة بحث جامعي كامل.",
      },
    },
    {
      id: "z2",
      de: "Ich kann Meinungen abschwächen und betonen.",
      ar: "أن ألطّف وأؤكد وأتحفظ في الجمل الأكاديمية.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e2", "e6", "e8", "m1", "m2", "w2"],
        taskIds: [
          "practice:b2-10:e1",
          "practice:b2-10:e2",
          "practice:b2-10:e6",
          "practice:b2-10:e8",
          "mini-test:b2-10:m1",
          "mini-test:b2-10:m2",
          "writing:b2-10:w2",
        ],
        labelAr: "أختار عبارة التأكيد والتلطيف والتحفظ وأكمل الفراغات بها (e1 وe2 وe6 وe8 وm1 وm2 وw2)، دون كشف الحل.",
      },
    },
    {
      id: "z3",
      de: "Ich kann Grammatikstrukturen aus B2 in einem Satz kombinieren.",
      ar: "أن أجمع في الجملة الواحدة بين أكثر من بنية من B2.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e15-nominal", "e16-b2", "e17-b2", "m6", "m7", "m8"],
        taskIds: [
          "practice:b2-10:e15-nominal",
          "practice:b2-10:e16-b2",
          "practice:b2-10:e17-b2",
          "mini-test:b2-10:m6",
          "mini-test:b2-10:m7",
          "mini-test:b2-10:m8",
        ],
        labelAr: "أصحح خطأ الحالة وأرتب جملة مشتقة ومجهولة وأختار الرابط وأكمل الاختبار الختامي (e15-nominal وe16-b2 وe17-b2 وm6 إلى m8)، دون كشف الحل. لا يقيس هذا كل قواعد B2.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Fachbegriffe des Studiums zuordnen.",
      ar: "أن أربط مصطلحات الدراسة الجامعية بمعانيها.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e3", "w3"],
        taskIds: [
          "practice:b2-10:e3",
          "writing:b2-10:w3",
        ],
        labelAr: "أطابق مصطلحات الدراسة الجامعية (e3) وأكتب جملة أكاديمية بالإملاء (w3)، دون كشف الحل.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "أنت الآن في قمة رحلتك! هذا الدرس الأخير يجمّع B2 كله: Konjunktiv I (النقل)، Passiv المتقدم، النسبية المتقدمة، المشاركات، الروابط المتقدمة، الاشتقاق، Futur II، الأفعال مع حروف الجر. وستضيف مهارة الباحث: التأكيد والتلطيف والتحفظ — لغة الأكاديميا.",
    motivatingQuestionDe: "Wie schreibt man eine Hausarbeit?",
    contextAr:
      "الدراسة في ألمانيا حلم كثيرين: نتعلم لغة الجامعة — المقال الأكاديمي وطرق التعبير الدقيق — ثم نراجع B2 كله في ختام المستويات الأربعة.",
    contextDe: "Die vorliegende Arbeit beschäftigt sich mit der deutschen Sprache.",
    connectionToPreviousAr: "هذا ختام B2: من Konjunktiv I (درس 1) إلى الوصلات (درس 9). كل شيء يجتمع في الدرس الأخير — وبعده: اختبارات Goethe الكاملة (المرحلة 10)!",
    activateVocabulary: [
      { de: "das Studium", ar: "الدراسة الجامعية" },
      { de: "die Hausarbeit", ar: "البحث الجامعي" },
      { de: "die Fachsprache", ar: "لغة التخصص" },
      { de: "das Seminar", ar: "الندوة" },
      { de: "die Universität", ar: "الجامعة" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة من B2 (درس b2-01 — العلوم: نقل الكلام بـ Konjunktiv I): اختر الصيغة:",
      questionDe: "Der Professor sagt, die Frist ___ verlängert.",
      options: ["werde", "wird", "würde", "wurde"],
      correctIndex: 0,
      explanation:
        "النقل المكتوب الرسمي يلزم Konjunktiv I: werden ← er/sie werde. أما wird فإخبار (يجعل الكلام رأي الكاتب)، وwürde صيغة شرطية، وwurde ماضٍ للمجهول.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wird» صيغة المضارع، ولا تناسب مضارع الحالة في الكلام غير المباشر.",
        "«würde» صيغة الشرط، ولا تناسب الكلام غير المباشر هنا.",
        "«wurde» صيغة الماضي، ولا تناسب الكلام غير المباشر هنا.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة من B2 (درس b2-02 — الاقتصاد: Zustandspassiv مقابل Vorgangspassiv): اختر الحالة:",
      questionDe: "Die Bibliothek ___ seit acht Uhr geöffnet. (مفتوحة الآن — وصف حالة)",
      options: ["ist", "wird", "kann", "hat"],
      correctIndex: 0,
      explanation:
        "Zustandspassiv = sein + Partizip II ويصف النتيجة القائمة (مفتوحة). أما wird geöffnet فهو Vorgangspassiv أي فعل الفتح نفسه وهو يجري الآن.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«wird» تستعمل مع المبني للمجهول الديناميكي، لا مع حالة مفتوحة.",
        "«kann» فعل مودال، ولا يعبّر عن وصف الحالة.",
        "«hat» لا تعبّر عن حالة المكتبة المفتوحة.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة شاملة من B2 (درس b2-03 — القانون: بدائل المجهول · درس b2-07 — الفلسفة: Futur II · درس b2-08 — اللغات: الأفعال مع حروف الجر): أكمل:",
      template:
        "Das Problem ___ sich leicht lösen. (يمكن حلّه) — Bis Juni werde ich die Prüfung bestanden ___. (Futur II) — Ich interessiere mich ___ ein Studium in Deutschland. (بـ)",
      blanks: [
        { correct: "lässt", options: ["lässt", "kann", "wird"], errorType: "grammar" },
        { correct: "haben", options: ["haben", "sein", "werden"], errorType: "grammar" },
        { correct: "für", options: ["für", "auf", "an"], errorType: "preposition" },
      ],
      explanation:
        "ثلاث وحدات في بندٍ واحد: lassen + sich + مصدر بديلاً عن المجهول (b2-03)، وFutur II = werde + Partizip II + haben لأن bestehen فعل متعدٍّ (b2-07)، وsich interessieren يلزمه für + منصوب (b2-08).",
      errorType: "grammar",
    },
  ];
