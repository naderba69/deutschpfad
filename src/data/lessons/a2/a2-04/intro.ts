/**
 * a2-04 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-04.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann wichtige Angaben in einem kurzen Text zur Wohnungssuche finden.",
      ar: "أن أستخرج معلومات محددة من نص قصير عن البحث عن سكن، بما فيها بيانات الإعلان المقتبس ومعلومات الإيجار المذكورة في القصة.",
      evidence: { exerciseIds: ["rq2", "rq3", "rq7"], taskIds: ["reading:read-a2-04:rq2", "reading:read-a2-04:rq3", "reading:read-a2-04:rq7"], labelAr: "أجب عن أسئلة الإيجار والتأمين والاختصار في نص القراءة؛ لا يُحتسب فتح النص وحده دليلاً.", completion: "all-correct" },
    },
    {
      id: "z2",
      de: "Ich kann die neun Wechselpräpositionen ihren einfachen räumlichen Bedeutungen zuordnen.",
      ar: "أن أوصل حروف الجر المكانية التسعة بمعانيها التقريبية، من دون تعميم معنى واحد على كل استعمالاتها.",
      evidence: { exerciseIds: ["e3"], taskIds: ["practice:a2-04:e3"], labelAr: "طابق الحروف التسعة بمعانيها المكانية في e3؛ يظهر ضمن أول أربعة في العرض التدريجي وقد يظهر في عينة practice العشوائية.", completion: "all-correct" },
    },
    {
      id: "z3",
      de: "Ich kann bei räumlichen Orts- und Zielangaben Dativ und Akkusativ unterscheiden.",
      ar: "أن أختار Dativ للمكان الذي يقع فيه الفعل أو الحركة، وAkkusativ للوجهة المقصودة، في أمثلة محددة.",
      evidence: { exerciseIds: ["m1", "m2", "m4", "m5"], taskIds: ["mini-test:a2-04:m1", "mini-test:a2-04:m2", "mini-test:a2-04:m4", "mini-test:a2-04:m5"], labelAr: "أجب عن أمثلة الاختبار المصغّر الأربعة؛ الحركة الجسدية وحدها لا تحسم الحالة.", completion: "all-correct" },
    },
    {
      id: "z4",
      de: "Ich kann eine ausdrücklich genannte Ruhezeit aus einem kurzen Hörtext entnehmen.",
      ar: "أن أستخرج وقت الهدوء المذكور صراحةً في حوار عن Hausordnung معيّن، لا أن أعمّمه على كل المباني.",
      evidence: { exerciseIds: ["q4"], taskIds: ["listening:l3:q4"], labelAr: "أجب عن q4 قبل كشف تفريغ الحوار؛ الإجابة بعد الكشف لا تثبت الاستماع.", completion: "all-correct" },
    },
    {
      id: "z5",
      de: "Ich kann räumliche Angaben in kurzen, vorgegebenen Schreibaufgaben bilden.",
      ar: "أن أكتب الصيغة المكانية المطلوبة في تحويل موجّه وفراغات وإملاء، من دون ادعاء تقويم كتابة حرة.",
      evidence: { exerciseIds: ["w1", "w2", "w3"], taskIds: ["writing:a2-04:w1", "writing:a2-04:w2", "writing:a2-04:w3"], labelAr: "أنجز مهام الكتابة الموجّهة الثلاث؛ هي لا تقيس نصاً حراً أو أداءً شفهياً.", completion: "all-correct" },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr: "قارن سؤالين عن الكتاب نفسه: Wo liegt das Buch? — Es liegt auf dem Tisch. وWohin legst du das Buch? — Ich lege es auf den Tisch. كلاهما يتضمن auf، لكن الأول يحدد موضعاً والثاني وجهةً؛ لذلك تختلف أداة التعريف.",
    motivatingQuestionDe: "Wo liegt das Buch, und wohin legst du es?",
    contextAr: "نقرأ إعلاناً سكنياً ونصف مواضع الأشياء ووجهاتها. في الاستعمال المكاني مع Wechselpräpositionen نستخدم Dativ للموقع أو مكان حدوث الحركة، وAkkusativ للوجهة؛ لا تكفي كلمة «حركة» وحدها لتحديد الحالة.",
    contextDe: "Ich ziehe in eine neue Wohnung um.",
    connectionToPreviousAr: "تتذكر Dativ المكاني في «auf dem Tisch» ووجهة الحركة في «in die Stadt». هنا نراجع الفرق مع تسعة Wechselpräpositionen، مع التمييز بين موقع الحركة والوجهة التي تنتهي إليها.",
    activateVocabulary: [
      { de: "die Wohnung", ar: "الشقة" },
      { de: "die Miete", ar: "الإيجار" },
      { de: "der Vermieter", ar: "المؤجّر" },
      { de: "umziehen", ar: "ينتقل إلى سكن آخر" },
      { de: "die Anzeige", ar: "الإعلان" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1", type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-04): اختر الصيغة التي تصف موضع الكتاب:",
      questionDe: "Das Buch liegt ___ Tisch.",
      options: ["auf dem", "auf den", "auf der", "auf das"], correctIndex: 0,
      explanation: "السؤال هنا عن موضع الكتاب (Wo liegt es?)، لذلك نقول auf dem Tisch.", errorType: "case",
      optionExplanations: [
        undefined,
        "«auf den» منصوبٌ للوجهة (Wohin?)؛ والسؤال «Wo liegt das Buch?» عن الموضع ⇒ Dativ.",
        "«auf der» للمؤنث؛ و«der Tisch» مذكّر.",
        "«auf das» محايدٌ منصوب؛ و«der Tisch» مذكّر في Dativ هنا. ",
      ],
    },
    {
      id: "r2", type: "multiple-choice",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-11): اختر حرف الجر المناسب للوجهة المقصودة:",
      questionDe: "Ich gehe ___ die Stadt.",
      options: ["in", "nach", "zu", "aus"], correctIndex: 0,
      explanation: "مع in + الوجهة نقول in die Stadt؛ هنا المدينة هي الوجهة المقصودة.", errorType: "preposition",
      optionExplanations: [
        undefined,
        "«nach» لأسماء المدن والبلدان بلا أداة: «nach Berlin»؛ وهنا «die Stadt» بأداة.",
        "«zu» تأخذ Dativ: «zu dem Platz»؛ و«die Stadt» هنا منصوبة بعد «in».",
        "«aus» خروجٌ من المكان لا دخولٌ إليه: «aus der Stadt kommen». ",
      ],
    },
    {
      id: "r3", type: "fill-blank",
      instructionAr: "مراجعة من مستوى A1 (الدرس a1-04): أكمل بأداة التعريف المناسبة للسؤال Wo؟",
      template: "Die Lampe ist in ___ Küche.",
      blanks: [{ correct: "der", options: ["der", "dem", "die", "den"] }],
      explanation: "Küche مؤنث، والجملة تحدد موضع المصباح؛ لذلك in der Küche.", errorType: "case",
    },
  ];
