/**
 * a1-00 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-00.ts في الدفعة 95 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 1) الأهداف */
export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Wörter Buchstabe für Buchstabe mit dem deutschen Alphabet wiedergeben.",
      ar: "أن أتهجّى كلمات حرفاً حرفاً بأسماء الحروف الألمانية.",
      evidence: {
        exerciseIds: ["e10", "m3", "w1"],
        taskIds: ["practice:a1-00:e10", "mini-test:a1-00:m3", "writing:a1-00:w1"],
        labelAr: "ترتيب حروف كلمتين (e10 وm3) وكتابة تهجئة مطلوبة حرفاً حرفاً (w1)، دون كشف الحل.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann die Umlaute ä, ö, ü in geschriebenen Wörtern erkennen und einsetzen.",
      ar: "أن أميّز الحروف المعلمة ä وö وü في الكلمات المكتوبة وأستعملها في موضعها.",
      evidence: {
        exerciseIds: ["e5", "e14"],
        taskIds: ["practice:a1-00:e5", "practice:a1-00:e14"],
        labelAr: "إكمال الحرف المعلم في زوج الجمع (e5) وتصحيح جمع Mutter بالإمالة (e14). هذا قياس كتابي للتمييز، لا قياس لنطق الحرف.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kenne die wichtigsten Laute: ch, sch, ei, ie, eu, äu, sp, st, pf, tz, ß.",
      ar: "أن أميّز الأصوات المركبة الأساسية (ei وie وeu وsch وpf وtz وß) في الكتابة.",
      evidence: {
        exerciseIds: ["e3", "e13", "e15", "m4"],
        taskIds: ["practice:a1-00:e3", "practice:a1-00:e13", "practice:a1-00:e15", "mini-test:a1-00:m4"],
        labelAr: "مطابقة المجموعات بأصواتها (e3 وe15)، وكتابة ß في موضعها (e13)، وتمييز ei من ie (m4). قياس للتمييز الكتابي وقراءة الأصوات، لا لنطقها بصوت المتعلم.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ein kurzes Wort nach Diktat Buchstabe für Buchstabe schreiben.",
      ar: "أن أكتب كلمة قصيرة تُملى عليّ حرفاً حرفاً.",
      evidence: {
        exerciseIds: ["e8", "w1"],
        taskIds: ["practice:a1-00:e8", "writing:a1-00:w1"],
        labelAr: "كتابة كلمة مُملاة (e8) وكتابة تهجئة مطلوبة (w1)، دون كشف الحل.",
        completion: "all-correct",
      },
    },
  ];

/* 2) التمهيد */
export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "هل تعلم أن الحرف V في الألمانية يُنطق مثل حرف F أحياناً؟ وأن W ليست كما في الإنجليزية؟ وأن الحرف S بين حرفين علة يُنطق Z؟ خمّن: كيف تنطق كلمة «Vogel» (طائر)؟",
    motivatingQuestionDe: "Wie spricht man „Vogel“ aus?",
    contextAr:
      "الألمانية لغة «صوتية جداً»: كل حرف تقريباً يُنطق دائماً بنفس الصوت (عكس الإنجليزية). لهذا إذا أتقنت الأبجدية والأصوات المركبة في هذا الدرس، ستستطيع قراءة أي كلمة ألمانية تراها لأول مرة — حتى لو لم تعرف معناها!",
    contextDe: "Wer das Alphabet kann, kann fast alles lesen!",
    connectionToPreviousAr:
      "هذا درسك التأسيسي الأول — بعده مباشرة تتعلم التحيات والتعارف في الدرس A1-01.",
    activateVocabulary: [
      { de: "der Buchstabe", ar: "الحرف" },
      { de: "das Alphabet", ar: "الأبجدية" },
      { de: "aussprechen", ar: "ينطق" },
      { de: "der Name", ar: "الاسم" },
      { de: "buchstabieren", ar: "يتهجّى" },
    ],
  };

/* 12) مراجعة تمهيدية (أول درس: ننشط معارف ما قبل البدء) */
export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة تمهيدية (قبل A1 — لا درس سابق): ما هي اللغة التي تتعلمها في هذه المنصة؟",
      questionDe: "Welche Sprache lernst du hier?",
      questionAr: "أي لغة تتعلم هنا؟",
      options: ["Deutsch", "Englisch", "Spanisch", "Französisch"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Englisch» لغةٌ أخرى؛ والمنصة هنا لتعليم الألمانية فجواب «Welche Sprache lernst du hier؟» هو «Deutsch».", "لا — «Spanisch» ليست لغة هذه المنصة؛ والجواب «Ich lerne Deutsch».", "لا — «Französisch» لغةٌ أخرى؛ والسؤال عمّا تتعلّمه هنا والجواب «Deutsch»."],
      explanation: "Deutsch = الألمانية — هذه منصتك لإتقانها من A1 حتى B2.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة تمهيدية (قبل A1 — لا درس سابق): كم حرفاً في الأبجدية الألمانية؟",
      questionDe: "Wie viele Buchstaben hat das deutsche Alphabet?",
      questionAr: "كم حرفاً في الأبجدية الألمانية؟",
      options: ["26", "24", "28", "30"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — 24 أقلّ من الواقع؛ والأبجدية الألمانية «26 Buchstaben» وتُزاد عليها الحروف المعلّمة ä, ö, ü وß.", "لا — 28 يعدّ الحروف المعلّمة ضمن العدد الأساسي؛ والصحيح «26 Buchstaben» وأما ä, ö, ü وß فمشتقّة منها.", "لا — هذا العدد لا يطابق الأبجدية الألمانية؛ والمذكور في الدرس «26 Buchstaben»."],
      explanation: "26 حرفاً + الحروف المعلمة (ä, ö, ü) وß تُدرس في هذا الدرس.",
      errorType: "vocabulary",
    },
  ];
