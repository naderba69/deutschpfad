/**
 * b1-01 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann Bildungsbegriffe und Angaben aus einem kurzen Gespräch verstehen.",
      ar: "أن أفهم مصطلحات التعليم والتخصصات من حوار قصير وأجيب عنها.",
      evidence: {
        exerciseIds: ["q1", "q2", "q4", "q5", "q6", "q7"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l1:q4", "listening:l3:q5", "listening:l3:q6", "listening:l3:q7"],
        labelAr: "أجب صحيحاً عن أسئلة التخصص وتكاليف الدراسة وخطة ياسمين للانتقال إلى B1 قبل كشف التفريغ. كشف النص لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann den Genitiv in einfachen Wendungen bilden: das Buch des Lehrers.",
      ar: "أن أستخدم حالة المضاف إليه (Genitiv) في عبارات بسيطة: كتاب المعلّم.",
      evidence: {
        exerciseIds: ["e1", "e5", "w1"],
        taskIds: ["practice:b1-01:e1", "practice:b1-01:e5", "writing:b1-01:w1"],
        labelAr: "أجب صحيحاً عن e1 (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق) وe5 (تصحيح wegen + Genitiv)، واكتب w1 بصحة (جملة كاملة مع des). قراءة جدول t1 لا تُحتسب أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann Relativsätze mit der, die, das und dem bilden.",
      ar: "أن أكوّن الجمل النسبية بـ der وdie وdas وdem حسب دور الاسم في الجملة.",
      evidence: {
        exerciseIds: ["e4", "e6", "m5"],
        taskIds: ["practice:b1-01:e4", "practice:b1-01:e6", "mini-test:b1-01:m5"],
        labelAr: "رتّب e4 بصحة (يظهر أيضاً ضمن أول أربعة تمارين في مسار التدفق)، وأكمل e6 (الضمير النسبي في النصب)، وأجب صحيحاً عن m5 (dem بعد helfen وdas فاعلاً) في الاختبار المصغّر. لا يُحتسب قراءة t2 أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann Schulformen und Abschlüsse im deutschen Bildungssystem den passenden Erklärungen zuordnen.",
      ar: "أن أربط أنواع المدارس والشهادات في النظام التعليمي الألماني بالشرح المناسب لها.",
      evidence: {
        exerciseIds: ["e12"],
        taskIds: ["practice:b1-01:e12"],
        labelAr: "أكمل مطابقة e12 كاملة عند ظهورها في جلسة التدريب العشوائية. الوساطة (med-b1-01-1) والتفاعل النصي (int-b1-01-1) لا يُحتسبان أداءً في هذا الهدف.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "قل بالعربية: «كتاب المعلّم». لاحظت أنك أضفت «الـ» للمعلّم؟ في الألمانية هذه «حالة المضاف» (Genitiv) لها أداة خاصة: das Buch des Lehrers. وهي الحالة الرابعة والأخيرة في ترتيب الحالات الأربع (Nominativ، Akkusativ، Dativ، Genitiv).",
    motivatingQuestionDe: "Welches Fach studierst du?",
    contextAr:
      "ندخل مرحلة B1 — الأهم في رحلتك: نتعلم Genitiv (المضاف إليه) والجمل النسبية (التي/الذي) — البوابة لفهم النصوص الألمانية الحقيقية.",
    contextDe: "Das Studium der Germanistik ist interessant.",
    connectionToPreviousAr: "أتقنت Nominativ/Akkusativ/Dativ. الآن الحالة الرابعة: Genitiv — وبعدها تكتمل لوحة الحالات الأربع التي يبنى عليها كل شيء.",
    activateVocabulary: [
      { de: "die Ausbildung", ar: "التدريب/التأهيل" },
      { de: "das Studium", ar: "الدراسة الجامعية" },
      { de: "das Fach", ar: "التخصص" },
      { de: "die Universität", ar: "الجامعة" },
      { de: "der Student", ar: "الطالب" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-09 — المناسبات والاحتفالات): اختر الصيغة الصحيحة:",
      questionDe: "Ich helfe ___ Bruder. (أخي)",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation: "الجر المذكر: meinem (درس المناسبات).",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«meinen» مفعول به (Akkusativ)، وhelfen يطلب الجر هنا، فالصيغة meinem.",
        "«mein» بلا نهاية لا تناسب الجر المذكر في هذا الموضع.",
        "«meine» للمؤنث أو الجمع، والأخ مذكّر.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-10 — المدرسة والتعلم): اختر حرف الربط:",
      questionDe: "Ich lerne Deutsch, ___ ich will.",
      options: ["weil", "dass", "obwohl", "ob"],
      correctIndex: 0,
      explanation: "سبب → weil (درس المدرسة).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«dass» تقدّم مضموناً أو قولاً، ولا تعبّر عن السبب.",
        "«obwohl» تعبّر عن التناقض، والجملة لا تحمل تناقضاً.",
        "لا — «ob» تربط سؤالاً غير مباشر كـ«Ich weiß nicht, ob er kommt»؛ والجملة «Ich lerne Deutsch, … ich will» تعلّل سبباً فتطلب «weil».",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1 (درس a1-10 — العمل والمهن): أكمل:",
      template: "Mein Vater ist ___. (معلّم)",
      blanks: [
        { correct: "Lehrer", options: ["Lehrer", "Student", "Koch"] },
      ],
      explanation: "Lehrer = معلّم (درس المهن).",
      errorType: "vocabulary",
    },
  ];
