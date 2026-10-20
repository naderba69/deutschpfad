/**
 * b1-01 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "اختيار التخصص",
        lines: [
          { speaker: "Beraterin", de: "Welches Fach möchtest du studieren?", ar: "أي تخصص تريد أن تدرس؟" },
          { speaker: "Sami", de: "Ich interessiere mich für Informatik. Der Beruf des Programmierers ist gefragt.", ar: "أهتم بالمعلوماتية. مهنة المبرمج مطلوبة." },
          { speaker: "Beraterin", de: "Sehr gute Wahl. Die Universität, die Informatik anbietet, ist in München.", ar: "اختيار ممتاز. الجامعة التي تقدم المعلوماتية في ميونخ." },
          { speaker: "Sami", de: "Und die Kosten des Studiums?", ar: "وتكاليف الدراسة؟" },
          { speaker: "Beraterin", de: "Die Kosten des Studiums sind niedrig, nur der Semesterbeitrag.", ar: "تكاليف الدراسة منخفضة، فقط رسوم الفصل." },
          { speaker: "Sami", de: "Das klingt perfekt. Der Student, der Informatik studiert, findet schnell Arbeit.", ar: "يبدو مثالياً. الطالب الذي يدرس المعلوماتية يجد عملاً سريعاً." },
        ],
      },
      {
        id: "l2",
        title: "مقارنة الأنظمة",
        lines: [
          { speaker: "Lehrer", de: "Wie ist das Schulsystem in Tunesien?", ar: "كيف النظام المدرسي في تونس؟" },
          { speaker: "Mona", de: "Die Schüler gehen neun Jahre in die Grundschule und Mittelschule. Danach besuchen sie vier Jahre die Sekundarschule und machen das Baccalauréat. Dann können sie studieren.", ar: "يذهب التلاميذ تسع سنوات إلى المدرسة الابتدائية والمتوسطة. بعدها يدرسون أربع سنوات في الثانوية ويحصلون على البكالوريا. ثم يمكنهم الدراسة الجامعية." },
          { speaker: "Lehrer", de: "Und das Studium der Medizin?", ar: "ودراسة الطب؟" },
          { speaker: "Mona", de: "Das Studium der Medizin dauert sechs Jahre.", ar: "دراسة الطب تستغرق ست سنوات." },
          { speaker: "Lehrer", de: "Interessant! In Deutschland beträgt die Regelstudienzeit für Medizin ebenfalls sechs Jahre.", ar: "مثير! في ألمانيا مدة الدراسة النظامية للطب ست سنوات أيضاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was möchte Sami studieren?",
        questionAr: "ماذا يريد سامي أن يدرس؟",
        options: ["Informatik", "Medizin", "Germanistik", "Jura"],
        correctIndex: 0,
        explanation: "قال سامي: Ich interessiere mich für Informatik.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Medizin» هو الطب، وليس ما ذكره سامي.",
          "«Germanistik» دراسة الألمانية وآدابها، وليس ما ذكره سامي.",
          "«Jura» هو القانون، وليس ما ذكره سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wo ist die Universität für Informatik?",
        questionAr: "أين الجامعة التي تقدم المعلوماتية؟",
        options: ["in München", "in Berlin", "in Hamburg", "in Köln"],
        correctIndex: 0,
        explanation: "قالت المستشارة: Die Universität ... ist in München.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«in Berlin» ليست المدينة المذكورة للجامعة في الحوار.",
          "«in Hamburg» ليست المدينة المذكورة للجامعة في الحوار.",
          "«in Köln» ليست المدينة المذكورة للجامعة في الحوار.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie lange dauert das Medizinstudium laut Mona?",
        questionAr: "كم تستغرق دراسة الطب حسب منى؟",
        options: ["sechs Jahre", "vier Jahre", "fünf Jahre", "sieben Jahre"],
        correctIndex: 0,
        explanation: "قالت منى: Das Studium der Medizin dauert sechs Jahre.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«vier Jahre» عدد غير مذكور لمدة الدراسة في كلام منى.",
          "«fünf Jahre» عدد غير مذكور لمدة الدراسة في كلام منى.",
          "«sieben Jahre» عدد غير مذكور لمدة الدراسة في كلام منى.",
        ],
      },
      {
        id: "q4",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was sagt die Beraterin über die Kosten des Studiums?",
        questionAr: "ماذا تقول المستشارة عن تكاليف الدراسة؟",
        options: [
          "Die Kosten sind niedrig, nur der Semesterbeitrag.",
          "Die Kosten sind sehr hoch.",
          "Das Studium ist ganz ohne jeden Beitrag.",
          "Man zahlt die Kosten nur in Berlin.",
        ],
        correctIndex: 0,
        explanation: "قالت المستشارة: Die Kosten des Studiums sind niedrig, nur der Semesterbeitrag.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لا — المستشارة وصفت التكاليف بالانخفاض «Die Kosten sind niedrig»؛ فـ«sehr hoch» عكسُ ما قالت.",
          "لا — النصّ يذكر مساهمةً فصلية «nur der Semesterbeitrag»؛ فليست الدراسة «ohne jeden Beitrag».",
          "لا — لم يُربط الدفع بمدينة Berlin؛ والصيغة «Die Kosten sind niedrig, nur der Semesterbeitrag».",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات B1: ch، وst",
    items: [
      { de: "das Studium", ar: "الدراسة الجامعية", note: "St في بداية الكلمة = شت: شتوديوم" },
      { de: "der Lehrer", ar: "المعلم", note: "e الأولى طويلة (ليه)، و-er في النهاية خفيفة: ليهر" },
      { de: "der Unterricht", ar: "الحصة", note: "ch بعد i = ناعمة: أونترريخت" },
      { de: "die Universität", ar: "الجامعة", note: "-tät تُنطق «تيت» (ä طويلة): أونيڤيرزيتيت" },
      { de: "das Fach", ar: "التخصص", note: "ch بعد a = خ: فاخ" },
      { de: "der Student", ar: "الطالب", note: "st في البداية = شت: شتودِنت" },
    ],
    tip: "Universität كلمة طويلة صعبة — قسّمها: أوني + ڤير + زي + تيت. كرر كل مقطع وحده ثم ادمج.",
    shadowing: [
      { de: "Das Buch des Lehrers ist neu.", ar: "كتاب المعلّم جديد.", tip: "des Lehrers = دِس ليرِرْس (Genitiv)" },
      { de: "Der Mann, der dort steht, ist mein Lehrer.", ar: "الرجل الذي يقف هناك معلّمي.", tip: "der dort steht — الفعل في النهاية" },
      { de: "Ich studiere Informatik.", ar: "أدرس المعلوماتية.", tip: "Informatik = إنفور-ماتيك" },
      { de: "Wegen des Regens bleiben wir.", ar: "بسبب المطر نبقى.", tip: "wegen = ڤيغن (w = ڤ)" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة Genitiv:",
      prompt: "اكتب: «كتاب المعلّم» بالألمانية (بجملة كاملة)",
      acceptedAnswers: ["Das ist das Buch des Lehrers", "Das Buch des Lehrers ist neu"],
      sampleAnswer: "Das ist das Buch des Lehrers.",
      explanation: "الملكية: des Lehrers (مذكر + s).",
      errorType: "case",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بأداة Genitiv الصحيحة:",
      template: "das Buch ___ Lehrers (مذكر) · das Haus ___ Mutter (مؤنث) · die Meinung ___ Studenten (جمع)",
      blanks: [
        { correct: "des", options: ["des", "der", "dem"] },
        { correct: "der", options: ["des", "der", "dem"] },
        { correct: "der", options: ["des", "der", "den"] },
      ],
      explanation: "مذكر/محايد → des. مؤنث وجمع → der.",
      errorType: "case",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wegen des Regens bleiben wir zu Hause.",
      explanation: "بسبب المطر نبقى في البيت — wegen + Genitiv.",
      errorType: "spelling",
    },
  ];
