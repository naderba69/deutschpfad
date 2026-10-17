/**
 * b2-03 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "مع المحامي",
        lines: [
          { speaker: "Anwalt", de: "Der Vertrag, den Sie unterschreiben wollen, hat einige Punkte.", ar: "العقد الذي تريد توقيعه فيه نقاط." },
          { speaker: "Sami", de: "Alles, was ich wissen muss, steht hier?", ar: "كل ما يجب أن أعرفه مكتوب هنا؟" },
          { speaker: "Anwalt", de: "Fast. Der Punkt, auf den Sie achten müssen, ist die Kündigungsfrist.", ar: "تقريباً. النقطة التي يجب أن تنتبه لها هي مهلة الإنهاء." },
          { speaker: "Sami", de: "Und das Land, wo ich arbeite, ist relevant?", ar: "والبلد الذي أعمل فيه ذو صلة؟" },
          { speaker: "Anwalt", de: "Ja, das Gesetz, das dort gilt, ist wichtig.", ar: "نعم، القانون الساري هناك مهم." },
        ],
      },
      {
        id: "l2",
        title: "قضية بسيطة",
        lines: [
          { speaker: "Richterin", de: "Der Zeuge, mit dem wir sprechen, hat die Situation gesehen.", ar: "الشاهد الذي نتحدث معه رأى الموقف." },
          { speaker: "Karim", de: "Alles, was er sagt, ist wichtig?", ar: "كل ما يقوله مهم؟" },
          { speaker: "Richterin", de: "Ja. Das Gericht, vor dem wir stehen, hört genau zu.", ar: "نعم. المحكمة التي نقف أمامها تستمع بدقة." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Worauf muss Sami achten?",
        questionAr: "على ماذا يجب أن ينتبه سامي؟",
        options: ["die Kündigungsfrist", "den Preis", "die Lieferung", "die Unterschrift"],
        correctIndex: 0,
        explanation: "قال المحامي: Der Punkt, auf den Sie achten müssen, ist die Kündigungsfrist.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«den Preis» لم يذكرها المحامي كشيء ينتبه له سامي.",
          "«die Lieferung» لم يذكرها المحامي كشيء ينتبه له سامي.",
          "«die Unterschrift» لم يذكرها المحامي كشيء ينتبه له سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wer hat die Situation gesehen?",
        questionAr: "من رأى الموقف؟",
        options: ["der Zeuge", "der Anwalt", "der Richter", "die Polizei"],
        correctIndex: 0,
        explanation: "قالت القاضية: Der Zeuge, mit dem wir sprechen, hat die Situation gesehen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«der Anwalt» لم تقل القاضية إنه رأى الموقف.",
          "«der Richter» لم تقل القاضية إنه رأى الموقف.",
          "«die Polizei» لم تُذكر كمن رأى الموقف.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Vor welchem Gericht stehen sie?",
        questionAr: "أمام أي محكمة يقفون؟",
        options: ["dem Gericht", "dem Parlament", "dem Rathaus", "dem Verein"],
        correctIndex: 0,
        explanation: "قالت: Das Gericht, vor dem wir stehen, hört genau zu.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«dem Parlament» لا تناسب المكان الذي يقفون فيه أمام المحكمة.",
          "«dem Rathaus» لا تناسب المكان الذي يقفون فيه أمام المحكمة.",
          "«dem Verein» لا تناسب المكان الذي يقفون فيه أمام المحكمة.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات القانون: ch، tz، وst",
    items: [
      { de: "das Recht", ar: "الحق/القانون", note: "ch بعد e = ناعمة: رِشت" },
      { de: "das Gesetz", ar: "القانون", note: "tz = تس: غِزِتس" },
      { de: "der Vertrag", ar: "العقد", note: "tr + g: فِرتراغ" },
      { de: "der Anwalt", ar: "المحامي", note: "w = ڤ: آن-ڤالت" },
      { de: "das Gericht", ar: "المحكمة", note: "g = غ + ch ناعمة: غِريشت" },
      { de: "die Strafe", ar: "العقوبة", note: "st = شت: شترافه" },
    ],
    tip: "Gericht = غِريشت — G في البداية = غ، وch بعد i = ش خفيفة (ich-Laut). وAnwalt = آن-ڤالت — w ألمانية ڤ.",
    shadowing: [
      { de: "Der Anwalt, mit dem ich sprach, ist erfahren.", ar: "المحامي الذي تحدثت معه خبير.", tip: "mit dem — حرف الجر + ضمير نسبي" },
      { de: "Alles, was du sagst, ist wichtig.", ar: "كل ما تقوله مهم.", tip: "was بعد alles" },
      { de: "Das Land, wo ich lebe.", ar: "البلد الذي أعيش فيه.", tip: "wo = in dem" },
      { de: "Ich weiß, wofür er sich interessiert.", ar: "أعرف ما يهتم به.", tip: "wofür" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة نسبية بحرف جر:",
      prompt: "«الرجل الذي أنتظره» (warten auf) → بالألمانية",
      acceptedAnswers: ["Der Mann, auf den ich warte", "Der Mann, auf den ich warte."],
      sampleAnswer: "Der Mann, auf den ich warte.",
      explanation: "warten auf: حرف الجر قبل الضمير (auf den).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ was/wo/auf den/mit dem:",
      template: "Alles, ___ ich weiß. Das Land, ___ ich lebe. Der Mann, ___ ich warte. Der Anwalt, ___ ich spreche.",
      blanks: [
        { correct: "was", options: ["was", "wo", "auf den"] },
        { correct: "wo", options: ["was", "wo", "mit dem"] },
        { correct: "auf den", options: ["was", "wo", "auf den"] },
        { correct: "mit dem", options: ["was", "wo", "mit dem"] },
      ],
      explanation: "بعد alles → was. مكان → wo. warten auf → auf den. sprechen mit → mit dem.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Das Land, wo ich geboren wurde, ist Tunesien.",
      explanation: "البلد الذي ولدت فيه هو تونس — wo مكانية.",
      errorType: "spelling",
    },
  ];
