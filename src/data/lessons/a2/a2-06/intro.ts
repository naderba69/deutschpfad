/**
 * a2-06 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-06.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann vier Medienbezeichnungen den passenden Bedeutungen zuordnen.",
      ar: "أن أطابق أسماء أربع وسائل إعلام بمعانيها الأساسية.",
      evidence: {
        exerciseIds: ["e3"],
        taskIds: ["practice:a2-06:e3"],
        labelAr:
          "أكمل المطابقة e3 كاملة؛ يظهر التمرين ضمن أول أربعة في العرض التدريجي وقد يظهر في عينة practice العشوائية.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann eine kurze Meinung mit einem dass-Satz schriftlich ausdrücken.",
      ar: "أن أكتب رأياً موجزاً باستخدام جملة dass في التحويل الكتابي الموجّه.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a2-06:w1"],
        labelAr:
          "أنجز التحويل w1 واكتب إحدى الصيغ المقبولة التي تعبّر عن الرأي وتحافظ على dass وترتيب الجملة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in kurzen dass-Sätzen die passende Verbform, Verbendstellung und Kommasetzung wählen.",
      ar: "أن أختار أداة dass أو صيغة الفعل وموضعه والفاصلة في جمل قصيرة ضمن الاختبار المصغّر.",
      evidence: {
        exerciseIds: ["m1", "m2", "m3", "m4", "m5"],
        taskIds: [
          "mini-test:a2-06:m1",
          "mini-test:a2-06:m2",
          "mini-test:a2-06:m3",
          "mini-test:a2-06:m4",
          "mini-test:a2-06:m5",
        ],
        labelAr:
          "أجب عن المهام الخمس m1–m5؛ تتناول الفاعل والتمييز بين dass وdas وترتيب الفعل والفاصلة.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann wichtige Einzelheiten aus kurzen Gesprächen über Medien heraushören.",
      ar: "أن أستخرج معلومات محددة من حوارين قصيرين عن الإعلام قبل كشف التفريغ.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr:
          "أجب عن أسئلة الحوارين الثلاثة قبل كشف التفريغ؛ فتح الحوار أو الإجابة بعد كشفه لا يثبت الاستماع.",
        completion: "all-correct",
      },
    },
    {
      id: "z-reading",
      de: "Ich kann wichtige Informationen aus einem kurzen Zeitungsartikel entnehmen.",
      ar: "أن أستخرج تفاصيل محددة من خبر محلي قصير، وأجيب عن أسئلة الفهم الأربعة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4"],
        taskIds: [
          "reading:read-a2-06:rq1",
          "reading:read-a2-06:rq2",
          "reading:read-a2-06:rq3",
          "reading:read-a2-06:rq4",
        ],
        labelAr:
          "اقرأ الخبر وأجب عن الأسئلة الأربعة؛ فتح النص وحده ليس دليلاً على الفهم.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "في Ich finde, dass der Artikel interessant ist، أين يقع الفعل الذي يصف المقال؟ قارن الجملة بعد dass بجملة خبرية قصيرة ولاحظ موضع الفعل المصرف.",
    motivatingQuestionDe: "Was denkst du über die Nachrichten?",
    contextAr:
      "نستخدم أسماء وسائل الإعلام في محادثة قصيرة ونقرأ خبراً تعليمياً متخيلاً عن صحيفة محلية. نلاحظ كيف تقدّم dass مضمون رأي أو معلومة، من غير تعميم رأي شخصيات النص على الناس أو وسائل الإعلام عموماً.",
    contextDe: "Ich finde, dass der Artikel interessant ist.",
    connectionToPreviousAr:
      "في درس الملابس رأيت سؤال الرأي Wie findest du das? نوسّع المثال هنا من مفعول قصير مثل Ich finde das schön إلى رأي يتضمن فكرة كاملة: Ich finde, dass der Artikel interessant ist.",
    activateVocabulary: [
      { de: "das Fernsehen", ar: "التلفاز / وسيلة التلفزيون" },
      { de: "die Zeitung", ar: "الصحيفة" },
      { de: "das Internet", ar: "الإنترنت" },
      { de: "die Nachrichten", ar: "الأخبار" },
      { de: "die Meinung", ar: "الرأي" },
      { de: "die Redaktion", ar: "هيئة التحرير" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-08 — الملابس والألوان): اختر تصريف الفعل:",
      questionDe: "Ich ___ das Kleid sehr schön. (finden)",
      options: ["finde", "findest", "findet", "finden"],
      correctIndex: 0,
      explanation:
        "الفاعل ich، لذلك نستخدم finde. يراجع السؤال صيغة الرأي من درس الملابس.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«findest» تصريف du؛ والفاعل هنا «Ich» ⇒ «Ich finde».",
        "«findet» مع er/sie/es أو ihr، لا مع «Ich».",
        "«finden» مصدرٌ أو صيغة wir/sie؛ ومع «Ich» نقول «finde». ",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-05 — الحياة اليومية): اختر المعنى:",
      questionDe: "Ich sehe gern fern.",
      options: [
        "أحب مشاهدة التلفاز.",
        "أحب قراءة الصحيفة.",
        "أحب الاستماع إلى الراديو.",
        "أحب كتابة رسالة إلكترونية.",
      ],
      correctIndex: 0,
      explanation:
        "الفعل المنفصل fernsehen يعني مشاهدة التلفاز؛ وفي هذه الجملة يأتي الجزء fern في النهاية.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "قراءة الصحيفة «die Zeitung lesen»؛ والجملة فيها الفعل المنفصل «fernsehen».",
        "الراديو «Radio hören» فعلٌ آخر غير «fernsehen».",
        "كتابة البريد «eine E-Mail schreiben» لا علاقة لها بـ«fernsehen». ",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr:
        "مراجعة من A1 (درس a1-06 — الهوايات): أكمل بكلمة مناسبة في سياق الاستماع إلى الأغاني:",
      template: "Ich höre gern ___, besonders neue Lieder.",
      blanks: [
        { correct: "Musik", options: ["Musik", "Zeitung", "Nachricht"] },
      ],
      explanation:
        "Musik hören تعني الاستماع إلى الموسيقى، وتوضح عبارة besonders neue Lieder أن السياق عن الأغاني. Zeitung لا تُسمع، وNachricht بالمفرد لا تلائم هذا التركيب.",
      errorType: "vocabulary",
    },
  ];
