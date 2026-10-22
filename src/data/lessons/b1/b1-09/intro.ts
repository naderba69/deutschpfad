/**
 * b1-09 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من b1-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ein Gespräch über ehrenamtliche Arbeit verstehen und die Fragen dazu beantworten.",
      ar: "أن أفهم حواراً عن العمل التطوعي وأجيب عن أسئلته.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3", "listening:l3:q4"],
        labelAr: "أجيب صحيحاً عن q1 وq2 بعد الاستماع إلى l1، وعن q3 بعد الاستماع إلى l2، وعن q4 بعد الاستماع إلى l3، دون كشف النص. كشف النص لا يُحتسب أداءً.",
      },
    },
    {
      id: "z2",
      de: "Ich kann die Nomen-Verb-Verbindungen eine Frage stellen, eine Entscheidung treffen und Bescheid sagen richtig verwenden.",
      ar: "أن أستعمل الوصلات الاسمية-الفعلية الأساسية (يطرح سؤالاً، يتخذ قراراً، يبلغ) في موضعها الصحيح.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e1", "e4", "e7", "m1", "m3", "m5", "w1", "w2"],
        taskIds: [
          "practice:b1-09:e1",
          "practice:b1-09:e4",
          "practice:b1-09:e7",
          "mini-test:b1-09:m1",
          "mini-test:b1-09:m3",
          "mini-test:b1-09:m5",
          "writing:b1-09:w1",
          "writing:b1-09:w2",
        ],
        labelAr: "أجيب صحيحاً عن تمارين الوصلات (e1 وe4 وe7 وm1 وm3 وm5 وw1 وw2)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z3",
      de: "Ich kann die n-Deklination im Akkusativ, Dativ und Genitiv richtig bilden.",
      ar: "أن أصوغ تصريف n للأسماء المذكرة الحية (den Studenten، dem Kunden، des Herrn) في موضعه.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e2", "e5", "e6", "e9", "m2", "m4", "w3"],
        taskIds: [
          "practice:b1-09:e2",
          "practice:b1-09:e5",
          "practice:b1-09:e6",
          "practice:b1-09:e9",
          "mini-test:b1-09:m2",
          "mini-test:b1-09:m4",
          "writing:b1-09:w3",
        ],
        labelAr: "أجيب صحيحاً عن تمارين تصريف n (e2 وe5 وe6 وe9 وm2 وm4 وw3)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z4",
      de: "Ich kann Wörter rund um das Ehrenamt wie Verein, Spende und Mitglied ihrer Bedeutung zuordnen.",
      ar: "أن أربط مفردات التطوع (الجمعية، التبرع، العضو) بمعانيها الصحيحة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e3", "e8"],
        taskIds: ["practice:b1-09:e3", "practice:b1-09:e8"],
        labelAr: "أجيب صحيحاً عن مطابقة المفردات (e3) وعن معنى العبارة (e8). قراءة الشرح لا تُحتسب أداءً.",
      },
    },
    {
      id: "z5",
      de: "Ich kann Verben mit festen Präpositionen wie warten auf, sich interessieren für und teilnehmen an mit dem richtigen Kasus verwenden.",
      ar: "أن أستعمل الأفعال مع حروف الجر الثابتة (warten auf، sich interessieren für، teilnehmen an) بحالتها الصحيحة.",
      evidence: {
        completion: "all-correct",
        exerciseIds: ["e11", "e12", "e13", "m6"],
        taskIds: [
          "practice:b1-09:e11",
          "practice:b1-09:e12",
          "practice:b1-09:e13",
          "mini-test:b1-09:m6",
        ],
        labelAr: "أجيب صحيحاً عن تمارين حروف الجر الثابتة (e11 وe12 وe13 وm6)، دون كشف الحل. قراءة الشرح لا تُحتسب أداءً.",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "لاحظ بالعربية: «يطرح سؤالاً» — فعل + اسم معاً. الألمانية تفعل هذا كثيراً: eine Frage stellen (يطرح سؤالاً) بدل fragen (يسأل). هذه «الوصلات» تعطي كلامك نكهة رسمية.",
    motivatingQuestionDe: "Machst du ehrenamtliche Arbeit?",
    contextAr:
      "العمل التطوعي جزء كبير من الثقافة الألمانية. نتعلم مفرداته، ثم الوصلات الاسمية-الفعلية (الأسلوب الرسمي)، ونهاية n-Deklination الغريبة.",
    contextDe: "Ich helfe ehrenamtlich im Verein.",
    connectionToPreviousAr: "تتذكر الأفعال المركبة والحالات. اليوم: الوصلات (فعل + اسم) وتصريف n — وهو تصريف يخص عدداً محدوداً من الأسماء المذكرة الحية.",
    activateVocabulary: [
      { de: "das Ehrenamt", ar: "العمل التطوعي" },
      { de: "der Verein", ar: "الجمعية/النادي" },
      { de: "helfen", ar: "يساعد" },
      { de: "das Projekt", ar: "المشروع" },
      { de: "die Spende", ar: "التبرع" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2 (درس a2-09 — المناسبات والاحتفالات): اختر الضمير:",
      questionDe: "Ich helfe ___ Bruder.",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation: "helfen + Dativ: meinem (درس المناسبات).",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«meinen» مفعول به، وhelfen يطلب الجر، فالصيغة meinem.",
        "«mein» بلا نهاية لا تناسب الجر المذكر هنا.",
        "«meine» للمؤنث أو الجمع، والأخ مذكّر.",
      ],
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1 (درس a1-06 — أوقات الفراغ والهوايات): اختر المعنى:",
      questionDe: "der Verein",
      options: ["النادي", "الشركة", "المدرسة", "المستشفى"],
      correctIndex: 0,
      explanation: "der Verein = الجمعية/النادي.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«الشركة» تقابل Firma، وليس Verein.",
        "«المدرسة» تقابل Schule، وليس Verein.",
        "«المستشفى» يقابل Krankenhaus، وليس Verein.",
      ],
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B1 (درس b1-01 — التعليم والدراسة): أكمل:",
      template: "Das Buch des ___ (معلم).",
      blanks: [
        { correct: "Lehrers", options: ["Lehrers", "Lehrer", "Lehreren"] },
      ],
      explanation: "Genitiv: des Lehrers (درس التعليم).",
      errorType: "case",
    },
  ];
