/**
 * b1-04 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-04.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "أحلام في المستقبل",
        lines: [
          { speaker: "Moderator", de: "Was würden Sie machen, wenn Sie viel Geld hätten?", ar: "ماذا كنت ستفعل لو كان لديك مال كثير؟" },
          { speaker: "Sami", de: "Ich würde ein Haus am Strand kaufen und reisen.", ar: "كنت سأشتري بيتاً على الشاطئ وأسافر." },
          { speaker: "Moderator", de: "Und Sie, Frau Weber?", ar: "وأنتِ يا سيدة فيبر؟" },
          { speaker: "Frau Weber", de: "Ich würde eine Stiftung für Bildung gründen.", ar: "كنت سأنشئ مؤسسة للتعليم." },
          { speaker: "Moderator", de: "Wäre das nicht schön?", ar: "أليس ذلك جميلاً؟" },
        ],
      },
      {
        id: "l2",
        title: "نصيحة مهذبة",
        lines: [
          { speaker: "Anna", de: "Ich bin so gestresst.", ar: "أنا متوترة جداً." },
          { speaker: "Karim", de: "Du solltest weniger arbeiten und mehr schlafen.", ar: "ينبغي أن تعملي أقل وتنامي أكثر." },
          { speaker: "Anna", de: "Du hast recht. Und was würdest du an meiner Stelle machen?", ar: "معك حق. وماذا كنت ستفعل في مكاني؟" },
          { speaker: "Karim", de: "Ich würde ein Wochenende ohne Handy machen!", ar: "كنت سأقضي نهاية أسبوع بدون هاتف!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was würde Sami mit viel Geld machen?",
        questionAr: "ماذا كان سيفعل سامي بالمال الكثير؟",
        options: ["ein Haus kaufen und reisen", "eine Firma gründen", "ein neues Auto kaufen", "Geld spenden"],
        correctIndex: 0,
        explanation: "قال سامي: Ich würde ein Haus am Strand kaufen und reisen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«eine Firma gründen» لم يذكرها سامي كأول ما سيفعله.",
          "«ein Auto kaufen» لم يرد في جوابه عن المال.",
          "«spenden» لم يذكرها سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was würde Frau Weber gründen?",
        questionAr: "ماذا كانت ستنشئ السيدة فيبر؟",
        options: ["eine Stiftung für Bildung", "eine eigene kleine Firma", "einen Verein in seiner Stadt", "eine Schule für Kinder"],
        correctIndex: 0,
        explanation: "قالت: Ich würde eine Stiftung für Bildung gründen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«eine Firma» مكررة وعامة، ولم تذكر المتحدثة هذا الخيار.",
          "«einen Verein» لم تذكره فراو فيبر.",
          "«eine Schule» لم تذكرها فراو فيبر.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was würde Karim an Annas Stelle machen?",
        questionAr: "ماذا كان سيفعل كريم في مكان آنا؟",
        options: ["ein Wochenende ohne Handy", "mehr arbeiten und sparen", "Urlaub am Meer machen", "wieder sportlich werden"],
        correctIndex: 0,
        explanation: "قال كريم: Ich würde ein Wochenende ohne Handy machen!",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«mehr arbeiten» عكس ما يقترحه كارِم لصديقته.",
          "«Urlaub machen» لم يذكره كارم في النص.",
          "«sportlich werden» لم يذكره كارم في النص.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الشرط: ü، ä، ö، ch، وsch",
    items: [
      { de: "würde", ar: "كنت سأفعل", note: "ü + r: ڤوردِه" },
      { de: "wäre", ar: "كان سيكون", note: "ä مفتوح: ڤيرِه" },
      { de: "hätte", ar: "كان سيملك", note: "ä + tt: هِتِّه" },
      { de: "könnte", ar: "كان يستطيع", note: "ö: كونتِّه" },
      { de: "die Gesellschaft", ar: "المجتمع", note: "sch = ش: غِزِلشافت" },
      { de: "die Nachricht", ar: "الخبر", note: "ch = خ: ناخريشت" },
    ],
    tip: "رباعية الحلم: ڤوردِه-ڤيرِه-هِتِّه-كونتِّه — انطقها معاً 5 مرات كأغنية.",
    shadowing: [
      { de: "Ich würde gern reisen.", ar: "كنت أحب أن أسافر.", tip: "würde = ڤوردِه" },
      { de: "Wenn ich reich wäre...", ar: "لو كنت غنياً...", tip: "wäre = ڤيرِه" },
      { de: "Ich hätte gern Zeit.", ar: "كنت أود أن يكون عندي وقت.", tip: "hätte = هِتِّه" },
      { de: "Könnten Sie helfen?", ar: "هل يمكنكم المساعدة؟", tip: "könnten = كونتِن (ö)" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب أمنية بـ würde:",
      prompt: "اكتب: «كنت أحب أن أسافر إلى ألمانيا»",
      acceptedAnswers: ["Ich würde gern nach Deutschland reisen", "Ich würde nach Deutschland reisen"],
      sampleAnswer: "Ich würde gern nach Deutschland reisen.",
      explanation: "würde + المصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ wäre/hätte/könnte/würde:",
      template: "Wenn ich Zeit ___ (كان عندي), ___ ich mehr lesen. Wenn ich reich ___ (كنت), ___ ich reisen.",
      blanks: [
        { correct: "hätte", options: ["hätte", "wäre", "könnte"] },
        { correct: "würde", options: ["würde", "wäre", "hätte"] },
        { correct: "wäre", options: ["wäre", "hätte", "könnte"] },
        { correct: "würde", options: ["würde", "wäre", "war"] },
      ],
      explanation: "الوقت → hätte. الفعل الرئيسي → würde. الغنى → wäre.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wenn ich Zeit hätte, würde ich mehr lesen.",
      explanation: "لو كان عندي وقت لقرأت أكثر — Konjunktiv II.",
      errorType: "spelling",
    },
  ];
