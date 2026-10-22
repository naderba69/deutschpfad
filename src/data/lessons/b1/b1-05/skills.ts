/**
 * b1-05 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-05.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "الندم على العادات",
        lines: [
          { speaker: "Anna", de: "Ich hätte früher mehr Sport machen sollen.", ar: "كان ينبغي أن أمارس الرياضة أكثر مبكراً." },
          { speaker: "Karim", de: "Warum?", ar: "لماذا؟" },
          { speaker: "Anna", de: "Wenn ich regelmäßig trainiert hätte, wäre ich jetzt fitter.", ar: "لو كنت تدربت بانتظام لكنت الآن أليق." },
          { speaker: "Karim", de: "Stimmt. Und ich hätte weniger Süßigkeiten essen sollen!", ar: "صحيح. وكنت أنا قد أكلت حلويات أقل!" },
          { speaker: "Anna", de: "Lass uns jetzt anfangen!", ar: "لنبدأ الآن!" },
        ],
      },
      {
        id: "l2",
        title: "نصائح صحية",
        lines: [
          { speaker: "Arzt", de: "Sie sollten mehr Wasser trinken und sich bewegen.", ar: "يجب أن تشرب ماءً أكثر وتتحرك." },
          { speaker: "Sami", de: "Und wenn ich das gemacht hätte, wäre ich gesünder?", ar: "ولو كنت فعلت ذلك لكنت أصح؟" },
          { speaker: "Arzt", de: "Ja, bestimmt! Die Prävention ist sehr wichtig.", ar: "نعم بالتأكيد! الوقاية مهمة جداً." },
          { speaker: "Sami", de: "Ich hätte früher kommen sollen.", ar: "كان ينبغي أن آتي مبكراً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hätte Anna früher machen sollen?",
        questionAr: "ماذا كان ينبغي أن تفعل آنا مبكراً؟",
        options: ["mehr Sport", "weniger schlafen", "mehr essen", "weniger arbeiten"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich hätte früher mehr Sport machen sollen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«weniger schlafen» لم يكن المطلوب هنا النوم، بل الرياضة.",
          "«mehr essen» لم يُذكر أنه كان ينبغي عليها فعله.",
          "«weniger arbeiten» لم يذكره النص كنصيحة فائتة.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was empfiehlt der Arzt?",
        questionAr: "ماذا يوصي الطبيب؟",
        options: ["Wasser trinken und Bewegung", "nur Tabletten einnehmen", "viel Bettruhe zu Hause", "wenig essen und fast nichts trinken"],
        correctIndex: 0,
        explanation: "قال الطبيب: Sie sollten mehr Wasser trinken und sich bewegen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Tabletten nur» لا يذكره الطبيب، والنص يطلب الحركة والماء.",
          "«Bettruhe» لم يرد في نصيحة الطبيب.",
          "«wenig essen» لم تذكرها نصيحة الطبيب.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was sagt Sami am Ende?",
        questionAr: "ماذا يقول سامي في النهاية؟",
        options: ["Ich hätte früher kommen sollen", "Ich bin wieder ganz gesund", "Ich gehe jetzt nach Hause", "Ich brauche heute Tabletten"],
        correctIndex: 0,
        explanation: "قال سامي: Ich hätte früher kommen sollen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Ich bin gesund» لا تعبّر عن الندم على الماضي الذي قاله سامي.",
          "«Ich gehe jetzt» لا تعبّر عن الندم على الماضي.",
          "«Ich brauche Tabletten» لم يذكرها سامي.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الصحة: ä، ie، ü، وß",
    items: [
      { de: "hätte", ar: "كان سيملك (شرطي)", note: "ä + tt: هِتِّه" },
      { de: "wäre", ar: "كان سيكون (شرطي)", note: "ä مفتوح: ڤيرِه" },
      { de: "gesund", ar: "سليم", note: "g في أول الكلمة صوت مجهور قريب من «غ»، u قصيرة: غِزُنت" },
      { de: "die Prävention", ar: "الوقاية", note: "p + ä: پريڤِنتسيون" },
      { de: "trainieren", ar: "يتدرب", note: "ai في هذه الكلمة الدخيلة = إيه (لا آي) + ie = إي طويلة: تريه-نيرِن" },
      { de: "die Süßigkeiten", ar: "الحلويات", note: "ü + ß: زوسيغكايتن" },
    ],
    tip: "Süßigkeiten = زوسيغكايتن — كلمة فيها ü وß معاً. قسّمها: زوس + يغ + كايتن.",
    shadowing: [
      { de: "Ich hätte Sport gemacht.", ar: "كنت سأمارس الرياضة.", tip: "hätte gemacht — ماضٍ شرطي" },
      { de: "Wenn ich Zeit gehabt hätte...", ar: "لو كان عندي وقت...", tip: "gehabt hätte — الفعل في النهاية" },
      { de: "Ich wäre gekommen, aber...", ar: "كنت سآتي لكن...", tip: "wäre gekommen (حركة → sein)" },
      { de: "Du solltest mehr schlafen.", ar: "ينبغي أن تنام أكثر.", tip: "solltest = زولتِست" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب ندمك بالشرطية الماضية:",
      prompt: "اكتب: «كنت سأمارس الرياضة» (hätte + Partizip II)",
      acceptedAnswers: ["Ich hätte Sport gemacht", "Ich hätte Sport gemacht."],
      sampleAnswer: "Ich hätte Sport gemacht.",
      explanation: "الماضي الشرطي: hätte + gemacht.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ hätte/wäre + التصريف:",
      template: "Ich ___ früher ___ (kommen). Wenn ich Zeit ___ (haben), ___ ich ___ (lernen).",
      blanks: [
        { correct: "wäre", options: ["wäre", "hätte", "würde"] },
        { correct: "gekommen", options: ["gekommen", "gekommt", "gekomden"] },
        { correct: "gehabt hätte", options: ["gehabt hätte", "hatte gehabt", "gehabt habe"] },
        { correct: "hätte", options: ["hätte", "wäre", "würde"] },
        { correct: "gelernt", options: ["gelernt", "gelernen", "lernte"] },
      ],
      explanation: "kommen حركة → wäre gekommen. haben → hätte gehabt. lernen → hätte gelernt.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wenn ich Zeit gehabt hätte, wäre ich gekommen.",
      explanation: "لو كان عندي وقت لكنت أتيت — شرطية ماضية كاملة.",
      errorType: "spelling",
    },
  ];
