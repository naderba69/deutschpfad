/**
 * b1-08 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "نقاش التقنية",
        lines: [
          { speaker: "Moderator", de: "Wie wird die Technik die Zukunft verändern?", ar: "كيف ستغير التقنية المستقبل؟" },
          { speaker: "Sami", de: "Die künstliche Intelligenz wird viele Jobs verändern.", ar: "سيتغير الذكاء الاصطناعي الكثير من الوظائف." },
          { speaker: "Anna", de: "Ich denke, sie wird nicht nur helfen, sondern auch neue Berufe schaffen.", ar: "أعتقد أنها لن تساعد فقط بل ستخلق مهناً جديدة أيضاً." },
          { speaker: "Moderator", de: "Und die Risiken?", ar: "والمخاطر؟" },
          { speaker: "Sami", de: "Je mehr wir von der Technik abhängen, desto verletzlicher werden wir.", ar: "كلما اعتمدنا على التقنية أكثر أصبحنا أكثر هشاشة." },
        ],
      },
      {
        id: "l2",
        title: "قرار تقني",
        lines: [
          { speaker: "Karim", de: "Entweder ich kaufe ein neues Handy, oder ich warte noch ein Jahr.", ar: "إما أن أشتري هاتفاً جديداً أو أنتظر سنة أخرى." },
          { speaker: "Mona", de: "Warte! Dein Handy funktioniert doch.", ar: "انتظر! هاتفك يعمل." },
          { speaker: "Karim", de: "Ja, aber die Kamera ist nicht gut. Sowohl die Fotos als auch die Videos sind schlecht.", ar: "نعم، لكن الكاميرا ليست جيدة. الصور والفيديوهات سيئة." },
          { speaker: "Mona", de: "Dann kauf! Du wirst es nicht bereuen.", ar: "إذن اشترِ! لن تندم." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was wird die KI verändern?",
        questionAr: "ماذا سيغير الذكاء الاصطناعي؟",
        options: ["viele Jobs", "das Wetter", "die Politik nur", "nichts"],
        correctIndex: 0,
        explanation: "قال سامي: Die künstliche Intelligenz wird viele Jobs verändern.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«das Wetter» لم يذكره سامي كشيء تغيّره الذكاء الاصطناعي.",
          "«die Politik nur» لم يقلها سامي؛ النص يتكلم عن الوظائف.",
          "«nichts» تنفي التغيير، وهذا عكس ما قاله سامي.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was sagt Sami über die Abhängigkeit?",
        questionAr: "ماذا يقول سامي عن الاعتماد؟",
        options: ["Je mehr Abhängigkeit, desto verletzlicher", "Es ist für die Betriebe kein Problem", "Die Abhängigkeit hilft sogar beim Sparen", "Wir sind dadurch sicherer geworden"],
        correctIndex: 0,
        explanation: "قال: Je mehr wir abhängen, desto verletzlicher werden wir.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Es ist kein Problem» تنفي وجود خطر، وهذا عكس ما قاله سامي.",
          "«Die Abhängigkeit hilft» تعني أن الاعتماد مفيد، وليس ما قاله.",
          "«Wir sind sicher» تعني أننا آمنون، وليست فكرة سامي عن الاعتماد.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum will Karim ein neues Handy?",
        questionAr: "لماذا يريد كريم هاتفاً جديداً؟",
        options: ["Die Kamera ist schlecht", "Das Handy ist kaputt", "Es ist zu alt", "Er hat es verloren"],
        correctIndex: 0,
        explanation: "قال كريم: Die Kamera ist nicht gut. Sowohl Fotos als auch Videos sind schlecht.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«Das Handy ist kaputt» عكس ما قالته منى، فالهاتف يعمل.",
          "«Es ist zu alt» لم يذكرها كريم كسبب للشراء.",
          "«Er hat es verloren» لم يذكرها كريم.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات التقنية: ch، z، وw",
    items: [
      { de: "die Technik", ar: "التقنية", note: "ch بعد e = ناعمة: تيشنيك" },
      { de: "der Computer", ar: "الحاسوب", note: "كلمة إنجليزية: كومپيوتِر" },
      { de: "digital", ar: "رقمي", note: "g = ك: ديكيتال" },
      { de: "die Entwicklung", ar: "التطور", note: "w = ڤ: إنت-ڤيكلونغ" },
      { de: "die Intelligenz", ar: "الذكاء", note: "z = تس، وg = ك: إنتِليكِنتس" },
      { de: "die Zukunft", ar: "المستقبل", note: "z = تس، u الأولى طويلة والثانية قصيرة، k = ك: تسووكونفت" },
    ],
    tip: "Zukunft = تسوكونفت — Z = تس، والنهاية -ft = فت. انتبه إلى u القصيرة في المقطع الثاني.",
    shadowing: [
      { de: "Ich werde morgen lernen.", ar: "سأتعلم غداً.", tip: "werde lernen — المستقبل" },
      { de: "Die Technik wird sich ändern.", ar: "ستتغير التقنية.", tip: "wird sich ändern" },
      { de: "Je mehr du übst, desto besser.", ar: "كلما تدربت أكثر كان أفضل.", tip: "je... desto" },
      { de: "Entweder du lernst, oder du verlierst.", ar: "إما أن تتعلم أو تخسر.", tip: "entweder... oder" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب توقعاً بالمستقبل:",
      prompt: "اكتب: «سأتعلم الألمانية غداً» (Futur I)",
      acceptedAnswers: ["Ich werde morgen Deutsch lernen", "Ich werde morgen Deutsch lernen."],
      sampleAnswer: "Ich werde morgen Deutsch lernen.",
      explanation: "Futur: werde + المصدر في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالرابط المزدوج:",
      template: "Er spricht ___ Deutsch ___ Englisch. (ليس فقط بل أيضاً) Ich habe ___ Zeit ___ Geld. (لا ولا)",
      blanks: [
        { correct: "nicht nur", options: ["nicht nur", "weder", "entweder"] },
        { correct: "sondern auch", options: ["sondern auch", "noch", "oder"] },
        { correct: "weder", options: ["weder", "nicht nur", "entweder"] },
        { correct: "noch", options: ["noch", "sondern auch", "oder"] },
      ],
      explanation: "ليس فقط بل أيضاً / لا ولا.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Je mehr du übst, desto besser wirst du.",
      explanation: "كلما تدربت أكثر أصبحت أفضل — je... desto.",
      errorType: "spelling",
    },
  ];
