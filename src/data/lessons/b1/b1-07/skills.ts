/**
 * b1-07 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-07.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "نقاش سياسي",
        lines: [
          { speaker: "Moderator", de: "Als die Mauer fiel, war ich zehn Jahre alt.", ar: "عندما سقط الجدار كنت في العاشرة." },
          { speaker: "Sami", de: "Ich war nicht geboren! Aber ich weiß viel über die Geschichte.", ar: "لم أكن قد ولدت! لكنني أعرف الكثير عن التاريخ." },
          { speaker: "Moderator", de: "Wann interessierst du dich für Politik?", ar: "متى تهتم بالسياسة؟" },
          { speaker: "Sami", de: "Seitdem ich in Deutschland wohne, interessiere ich mich dafür.", ar: "منذ أن أسكن في ألمانيا وأنا مهتم بها." },
          { speaker: "Moderator", de: "Warum?", ar: "لماذا؟" },
          { speaker: "Sami", de: "Weil Politik unser Leben beeinflusst.", ar: "لأن السياسة تؤثر على حياتنا." },
        ],
      },
      {
        id: "l2",
        title: "قبل الانتخابات",
        lines: [
          { speaker: "Anna", de: "Bevor wir wählen, müssen wir die Programme lesen.", ar: "قبل أن ننتخب يجب أن نقرأ البرامج." },
          { speaker: "Karim", de: "Ja. Während der Wahlkampf läuft, gibt es viel Werbung.", ar: "نعم. بينما تجري الحملة الانتخابية تكثر الإعلانات." },
          { speaker: "Anna", de: "Nachdem ich die Programme gelesen habe, kann ich entscheiden.", ar: "بعد أن أقرأ البرامج أستطيع أن أقرر." },
          { speaker: "Karim", de: "Genau. Wichtig ist, dass wir wählen gehen.", ar: "بالضبط. المهم أن نذهب للانتخاب." },
        ],
      },
      {
        id: "l3",
        title: "اختيار الأولويات",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
        lines: [
          { speaker: "Anna", de: "Vor der Wahl möchte ich die Programme der Parteien vergleichen.", ar: "قبل الانتخابات أود مقارنة برامج الأحزاب.", audioSrc: "/audio/lessons/b1-07/ls-b1-07-3-1.mp3" },
          { speaker: "Karim", de: "Das ist sinnvoll. Ich habe gestern die Sendung zur Verkehrspolitik gesehen.", ar: "هذا منطقي. شاهدت أمس برنامجاً عن سياسة النقل.", audioSrc: "/audio/lessons/b1-07/ls-b1-07-3-2.mp3" },
          { speaker: "Anna", de: "Was ist dir dabei besonders wichtig?", ar: "ما الأمر الأهم بالنسبة إليك؟", audioSrc: "/audio/lessons/b1-07/ls-b1-07-3-3.mp3" },
          { speaker: "Karim", de: "Gute Busverbindungen. In meinem Viertel fährt der letzte Bus sehr früh.", ar: "مواصلات حافلات جيدة. في حيي تنطلق الحافلة الأخيرة باكراً جداً.", audioSrc: "/audio/lessons/b1-07/ls-b1-07-3-4.mp3" },
          { speaker: "Anna", de: "Dann solltest du prüfen, was die Parteien dazu vorschlagen.", ar: "إذن ينبغي أن تتحقق مما تقترحه الأحزاب بهذا الشأن.", audioSrc: "/audio/lessons/b1-07/ls-b1-07-3-5.mp3" },
          { speaker: "Karim", de: "Genau. Nachdem ich die Programme gelesen habe, kann ich besser entscheiden.", ar: "صحيح. بعد أن أقرأ البرامج يمكنني اتخاذ قرار أفضل.", audioSrc: "/audio/lessons/b1-07/ls-b1-07-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Seit wann interessiert sich Sami für Politik?",
        questionAr: "منذ متى يهتم سامي بالسياسة؟",
        options: ["seitdem er in Deutschland wohnt", "seit dem Mauerfall damals", "seit er zehn Jahre alt war", "seit ganz kurzer Zeit erst"],
        correctIndex: 0,
        explanation: "قال سامي: Seitdem ich in Deutschland wohne, interessiere ich mich.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«seit der Mauerfall» ترتيب خاطئ؛ الصحيح seit dem Mauerfall، والنص لا يربط اهتمام سامي بذلك.",
          "«seit er zehn war» لا تتوافق مع ما قاله سامي عن بداية اهتمامه.",
          "«seit kurzem» لم يقلها سامي، وكلامه يربط الاهتمام بالإقامة في ألمانيا.",
        ],
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was müssen sie vor der Wahl machen?",
        questionAr: "ماذا يجب أن يفعلوا قبل الانتخاب؟",
        options: ["die Programme lesen", "Werbung dafür machen", "demonstrieren gehen", "weiter arbeiten"],
        correctIndex: 0,
        explanation: "قالت آنا: Bevor wir wählen, müssen wir die Programme lesen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Werbung machen» ذُكرت كشيء يحدث أثناء الحملة، لا قبل الانتخاب.",
          "«demonstrieren» لم تذكرها آنا كشيء يجب فعله قبل الانتخاب.",
          "«arbeiten» لم تذكرها آنا كشيء يجب فعله قبل الانتخاب.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann kann Anna entscheiden?",
        questionAr: "متى تستطيع آنا أن تقرر؟",
        options: ["nachdem sie die Programme gelesen hat", "schon lange vor der eigentlichen Wahl", "während des ganzen Wahlkampfs", "morgen früh um acht Uhr im Büro"],
        correctIndex: 0,
        explanation: "قالت: Nachdem ich die Programme gelesen habe, kann ich entscheiden.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«vor der Wahl» تعني الوقت العام، وليس الجملة التي تحدد متى تقرر آنا.",
          "«während des Wahlkampfs» تعني أثناء الحملة، وليست الجملة التي تحدد متى تقرر آنا.",
          "«morgen» لم تذكرها آنا في الحوار.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was ist Karim bei der Verkehrspolitik besonders wichtig?",
        questionAr: "ما الأمر المهم خصوصاً لكريم في سياسة النقل؟",
        options: ["gute Verbindungen mit dem Bus", "mehr Parkplätze im Stadtzentrum", "eine neue Bahn zum Flughafen", "günstige Fahrräder für alle"],
        correctIndex: 0,
        explanation: "قال كريم: Gute Busverbindungen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "مواقف السيارات لم يذكرها كريم؛ تحدث عن الحافلات في حيه.",
          "لم يذكر كريم خطاً إلى المطار.",
          "لم يتحدث كريم عن شراء الدراجات.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات السياسة: w، tz، وie",
    items: [
      { de: "die Politik", ar: "السياسة", note: "k في النهاية: پوليتيك" },
      { de: "das Gesetz", ar: "القانون", note: "g = غ، s بين حركتين = ز، tz = تس: غِزِتس" },
      { de: "die Wahl", ar: "الانتخاب", note: "w = ڤ، وh صامت: ڤال" },
      { de: "der Bürger", ar: "المواطن", note: "ü + r: بورغِر" },
      { de: "die Regierung", ar: "الحكومة", note: "ie = إي: رِغيرونغ" },
      { de: "das Parlament", ar: "البرلمان", note: "a مفتوح: پارلامنت" },
    ],
    tip: "Regierung = رِغيرونغ — ie إي + g غ + ung. قسّمها دائماً: رِغ + إي + رونغ.",
    shadowing: [
      { de: "Als ich jung war, war alles anders.", ar: "عندما كنت صغيراً كان كل شيء مختلفاً.", tip: "als + Präteritum (war)" },
      { de: "Wenn ich Zeit habe, lese ich.", ar: "عندما يكون عندي وقت أقرأ.", tip: "wenn + مضارع" },
      { de: "Während er arbeitet, koche ich.", ar: "بينما يعمل أطبخ.", tip: "während = ڤيرينت (w=ڤ)" },
      { de: "Nachdem ich gegessen habe, gehe ich.", ar: "بعد أن آكل أذهب.", tip: "nachdem = ناخ-دِم (ch=خ)" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة als:",
      prompt: "اكتب: «عندما كنت صغيراً، كان كل شيء مختلفاً»",
      acceptedAnswers: ["Als ich jung war, war alles anders", "Als ich klein war, war alles anders"],
      sampleAnswer: "Als ich jung war, war alles anders.",
      explanation: "als + Präteritum (war) — ماضٍ مرة واحدة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ als/wenn/während/bevor/nachdem:",
      template: "___ ich jung war, lebte ich in Tunis. (عندما ماضٍ) ___ ich Zeit habe, lerne ich. (كلما) ___ er arbeitet, hört er Musik. (بينما)",
      blanks: [
        { correct: "Als", options: ["Als", "Nachdem", "Bevor"] },
        { correct: "Wenn", options: ["Wenn", "Als", "Bevor"] },
        { correct: "Während", options: ["Während", "Als", "Bevor"] },
      ],
      explanation: "ماضٍ مرة → als. مضارع/تكرار → wenn. متزامن → während.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: أعد الصياغة بـ obwohl:",
      instructionDe: "Schreibe mit obwohl:",
      prompt: "Trotz des Regens gehe ich spazieren. → Obwohl ...",
      acceptedAnswers: ["Obwohl es regnet, gehe ich spazieren.", "Ich gehe spazieren, obwohl es regnet."],
      sampleAnswer: "Obwohl es regnet, gehe ich spazieren.",
      explanation: "trotz + اسم (رسمي) → obwohl + جملة كاملة (الفعل في النهاية).",
      errorType: "grammar",
    },
  ];
