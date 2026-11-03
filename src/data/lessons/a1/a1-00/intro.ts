/**
 * a1-00 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-00.ts في الدفعة 95 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 1) الأهداف */
export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann die Buchstabenfolge eines bekannten Namens wie Sami korrekt aufschreiben.",
      ar: "أن أكتب تهجئة اسم مألوف مثل Sami بالحروف الصحيحة.",
      evidence: {
        exerciseIds: ["e10", "m3", "w1"],
        taskIds: ["practice:a1-00:e10", "mini-test:a1-00:m3", "writing:a1-00:w1"],
        labelAr: "ترتيب الحروف لتكوين كلمتين مألوفتين (e10 وm3)، وكتابة تسلسل حروف الاسم Sami كما يطلب w1؛ هذا يختبر معرفة التسلسل المكتوب ولا يقيس نطق أسماء الحروف شفهياً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann die Umlaute ä, ö, ü in geschriebenen Wörtern erkennen und einsetzen.",
      ar: "أن أميّز الحروف المعلمة ä وö وü في الكلمات المكتوبة وأستعملها في موضعها.",
      evidence: {
        exerciseIds: ["e5", "e14", "e16"],
        taskIds: ["practice:a1-00:e5", "practice:a1-00:e14", "practice:a1-00:e16"],
        labelAr: "تمييز ü من u (e5)، وكتابة ä في جمع Mutter (e14)، والتمييز بين schön وschon لقياس ö (e16). هذا قياس كتابي للتمييز، لا قياس لنطق الحرف.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann häufige Laut-Schreibungs-Muster in deutschen Wörtern erkennen: ch, sch, ei, ie, eu, äu, sp, st, pf, tz und ß.",
      ar: "أن أتعرف أنماط الكتابة والنطق الشائعة في كلمات ألمانية: ch وsch وei وie وeu وäu وsp وst وpf وtz وß.",
      evidence: {
        exerciseIds: ["e3", "e12", "e13", "e15", "m4"],
        taskIds: ["practice:a1-00:e3", "practice:a1-00:e12", "practice:a1-00:e13", "practice:a1-00:e15", "mini-test:a1-00:m4"],
        labelAr: "مطابقة مجموعات الحروف وأمثلتها (e3 وe15)، والتمييز بين نطقي ch في مثال (e12)، وكتابة ß (e13)، وتمييز ei من ie (m4). يقيس التعرّف والكتابة، لا قدرة المتعلم على إنتاج النطق.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann ein kurzes bekanntes Wort nach dem Hören korrekt schreiben.",
      ar: "أن أكتب كلمة قصيرة مألوفة بعد سماعها.",
      evidence: {
        exerciseIds: ["e8"],
        taskIds: ["practice:a1-00:e8"],
        labelAr: "كتابة كلمة Katze بعد سماعها ككلمة كاملة في e8. هذه عيّنة إملاء واحدة ولا تقيس سماع أسماء الحروف متتابعة.",
        completion: "all-correct",
      },
    },
  ];

/* 2) التمهيد */
export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "هل تعلم أن الحرف V في كلمة «Vogel» يُنطق مثل F، بينما W في «Wasser» يُنطق قريباً من V؟ وفي كلمات كثيرة مثل «lesen» يُنطق s بصوت قريب من z. خمّن: كيف تنطق كلمة «Vogel» (طائر)؟",
    motivatingQuestionDe: "Wie spricht man „Vogel“ aus?",
    contextAr:
      "لكتابة الألمانية علاقة واضحة بالنطق، لكنّها ليست صوتية تماماً: قد يتغيّر نطق الحرف بحسب موضعه والكلمة واللهجة. تعلّم الأبجدية والأصوات المركبة هنا يساعدك على قراءة كلمات كثيرة جديدة، لكنه لا يضمن النطق الصحيح لكل كلمة؛ استمع إلى أمثلة موثوقة وتدرّب على الفروق الصوتية.",
    contextDe: "Das Alphabet hilft beim Lesen neuer Wörter.",
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
      explanation: "Deutsch = الألمانية — هذه منصة لتعلّمها عبر مستويات A1 إلى B2.",
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
