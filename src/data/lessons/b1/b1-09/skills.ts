/**
 * b1-09 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-09.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "في الجمعية",
        lines: [
          { speaker: "Leiter", de: "Herzlich willkommen im Verein! Darf ich eine Frage stellen?", ar: "أهلاً بك في الجمعية! هل أستطيع طرح سؤال؟" },
          { speaker: "Sami", de: "Ja, natürlich.", ar: "نعم طبعاً." },
          { speaker: "Leiter", de: "Warum möchtest du ehrenamtlich helfen?", ar: "لماذا تريد التطوع؟" },
          { speaker: "Sami", de: "Ich möchte dem Verein helfen und Erfahrung sammeln.", ar: "أريد مساعدة الجمعية وجمع خبرة." },
          { speaker: "Leiter", de: "Perfekt! Wir leisten Hilfe für viele Familien. Du wirst mit dem Kollegen arbeiten.", ar: "ممتاز! نقدم مساعدة لعائلات كثيرة. ستعمل مع الزميل." },
          { speaker: "Sami", de: "Ich freue mich!", ar: "أنا سعيد!" },
        ],
      },
      {
        id: "l2",
        title: "مشروع اجتماعي",
        lines: [
          { speaker: "Mona", de: "Wir treffen eine wichtige Entscheidung heute.", ar: "نتخذ قراراً مهماً اليوم." },
          { speaker: "Karim", de: "Was für ein Projekt?", ar: "أي مشروع؟" },
          { speaker: "Mona", de: "Wir möchten eine Frage stellen: Wie helfen wir den Kindern am besten?", ar: "نريد طرح سؤال: كيف نساعد الأطفال أفضل؟" },
          { speaker: "Karim", de: "Vielleicht mit dem Verein? Der Verein hat viele Kunden... äh, Mitglieder.", ar: "ربما مع الجمعية؟ الجمعية لديها أعضاء كثيرون." },
          { speaker: "Mona", de: "Genau! Wir nehmen Kontakt auf.", ar: "بالضبط! نتواصل معهم." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Sami sammeln?",
        questionAr: "ماذا يريد سامي أن يجمع؟",
        options: ["Erfahrung", "Geld", "Bücher", "Freunde"],
        correctIndex: 0,
        explanation: "قال سامي: Ich möchte ... Erfahrung sammeln.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Geld» لم يذكره سامي كشيء يريد جمعه.",
          "«Bücher» لم يذكرها سامي كشيء يريد جمعه.",
          "«Freunde» لم يذكرها سامي كشيء يريد جمعه.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Mit wem wird Sami arbeiten?",
        questionAr: "مع من سيعمل سامي؟",
        options: ["mit dem Kollegen", "mit dem Chef", "mit dem Kunden", "allein"],
        correctIndex: 0,
        explanation: "قال المدير: Du wirst mit dem Kollegen arbeiten.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«mit dem Chef» لم يذكره المسؤول؛ سيعمل سامي مع الزميل.",
          "«mit dem Kunden» لم يُذكر أن سامي سيعمل مع الزبون.",
          "«allein» تنفي العمل مع أحد، وهذا عكس ما قاله المسؤول.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was treffen sie heute?",
        questionAr: "ماذا يتخذون اليوم؟",
        options: ["eine Entscheidung", "eine schwierige Frage", "einen kleinen Fehler", "eine lange Pause"],
        correctIndex: 0,
        explanation: "قالت منى: Wir treffen eine wichtige Entscheidung heute.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«eine Frage» ليست ما اتفقا عليه اليوم في الحوار.",
          "«einen Fehler» ليست ما اتفقا عليه اليوم في الحوار.",
          "«eine Pause» ليست ما اتفقا عليه اليوم في الحوار.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات التطوع: eh، ei، وsp",
    items: [
      { de: "das Ehrenamt", ar: "العمل التطوعي", note: "eh = e طويلة: إيرِن-أمت" },
      { de: "der Verein", ar: "الجمعية", note: "ei = آي: فِرآين" },
      { de: "die Spende", ar: "التبرع", note: "sp = شپ: شپِندِه" },
      { de: "das Projekt", ar: "المشروع", note: "j = ي: پرويِكت" },
      { de: "der Kunde", ar: "الزبون", note: "u + nd: كونده" },
      { de: "das Mitglied", ar: "العضو", note: "مركّبة Mit+Glied: g = ك (نطق شديد، لا غ)، وd في النهاية = ت: ميت-كليت" },
    ],
    tip: "Ehrenamt = إيرِن-أمت — eh في البداية تُنطق e طويلة (حرف h يطيل). تذكر: الحرف + h = طويل!",
    shadowing: [
      { de: "Darf ich eine Frage stellen?", ar: "هل أستطيع طرح سؤال؟", tip: "eine Frage stellen — الوصلة" },
      { de: "Wir leisten Hilfe.", ar: "نقدم مساعدة.", tip: "Hilfe leisten — الوصلة" },
      { de: "Ich kenne den Studenten.", ar: "أعرف الطالب.", tip: "den Studenten — n-Deklination" },
      { de: "Er spricht mit dem Kollegen.", ar: "يتحدث مع الزميل.", tip: "dem Kollegen — n-Deklination" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب وصلة رسمية:",
      prompt: "اكتب: «يطرح سؤالاً» بالألمانية (وصلة)",
      acceptedAnswers: ["eine Frage stellen", "Ich stelle eine Frage"],
      sampleAnswer: "Ich stelle eine Frage.",
      explanation: "الوصلة: eine Frage stellen.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بوصلة صحيحة:",
      template: "eine Frage ___ (طرح) · eine Entscheidung ___ (اتخاذ) · Bescheid ___ (إعطاء خبر)",
      blanks: [
        { correct: "stellen", options: ["stellen", "treffen", "sagen"] },
        { correct: "treffen", options: ["stellen", "treffen", "sagen"] },
        { correct: "sagen", options: ["stellen", "treffen", "sagen"] },
      ],
      explanation: "السؤال يُطرح، القرار يُتخذ، الخبر يُقال.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich kenne den Studenten.",
      explanation: "أعرف الطالب — n-Deklination: den Studenten.",
      errorType: "spelling",
    },
  ];
