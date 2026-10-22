/**
 * b2-08 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-08.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "التعدد اللغوي",
        lines: [
          { speaker: "Lehrerin", de: "Warum lernt ihr Sprachen?", ar: "لماذا تتعلمون اللغات؟" },
          { speaker: "Sami", de: "Ich interessiere mich für deutsche Kultur. Und ich träume von einem Job in Deutschland.", ar: "أهتم بالثقافة الألمانية. وأحلم بوظيفة في ألمانيا." },
          { speaker: "Lehrerin", de: "Und du, Anna?", ar: "وأنتِ يا آنا؟" },
          { speaker: "Anna", de: "Ich freue mich auf einen Austausch. Die Kommunikation hängt von der Sprache ab.", ar: "أتطلع إلى تبادل. يعتمد التواصل على اللغة." },
          { speaker: "Lehrerin", de: "Sehr schön! Sprachen öffnen Türen.", ar: "جميل جداً! اللغات تفتح أبواباً." },
        ],
      },
      {
        id: "l2",
        title: "اختلاف ثقافي",
        lines: [
          { speaker: "Karim", de: "In meiner Kultur wartet man nicht auf eine Einladung, man kommt einfach.", ar: "في ثقافتي لا ينتظر المرء دعوة، بل يأتي مباشرة." },
          { speaker: "Mona", de: "In Deutschland denkt man anders darüber. Man fragt immer an.", ar: "في ألمانيا يفكرون بشكل مختلف. يسألون دائماً." },
          { speaker: "Karim", de: "Ich gewöhne mich langsam daran.", ar: "أعتاد على ذلك ببطء." },
          { speaker: "Mona", de: "Das ist gut! Interkulturelles Verständnis braucht Zeit.", ar: "هذا جيد! الفهم بين الثقافات يحتاج وقتاً." },
        ],
      },
      {
        id: "l3",
        title: "لقاء للتبادل الثقافي",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
        lines: [
          { speaker: "Karim", de: "Für den Austausch nächste Woche bereite ich mich auf das Treffen mit den deutschen Studierenden vor.", ar: "أستعد للقاء الطلاب الألمان في التبادل الأسبوع المقبل.", audioSrc: "/audio/lessons/b2-08/ls-b2-08-3-1.mp3" },
          { speaker: "Mona", de: "Worauf freust du dich am meisten? Karim: Auf die Gespräche über unsere Kulturen.", ar: "ماذا تتطلع إليه أكثر؟ كريم: إلى الحديث عن ثقافاتنا.", audioSrc: "/audio/lessons/b2-08/ls-b2-08-3-2.mp3" },
          { speaker: "Mona", de: "Ich interessiere mich besonders für die verschiedenen Traditionen und Familienfeste.", ar: "أهتم خصوصاً بالتقاليد واحتفالات العائلات المختلفة.", audioSrc: "/audio/lessons/b2-08/ls-b2-08-3-3.mp3" },
          { speaker: "Karim", de: "Manchmal wartet man in einer Kultur auf eine Einladung, in einer anderen kommt man spontan vorbei.", ar: "في ثقافة ينتظر المرء دعوة، وفي أخرى يزور الناس بعفوية.", audioSrc: "/audio/lessons/b2-08/ls-b2-08-3-4.mp3" },
          { speaker: "Mona", de: "Solche Unterschiede sind interessant. Interkulturelles Verständnis braucht Zeit und offene Fragen.", ar: "هذه الاختلافات مثيرة للاهتمام. الفهم بين الثقافات يحتاج وقتاً وأسئلة مفتوحة.", audioSrc: "/audio/lessons/b2-08/ls-b2-08-3-5.mp3" },
          { speaker: "Karim", de: "Genau. Wenn wir einander zuhören, lernen wir viel und vermeiden Missverständnisse.", ar: "صحيح. عندما نصغي إلى بعضنا نتعلم كثيراً ونتجنب سوء الفهم.", audioSrc: "/audio/lessons/b2-08/ls-b2-08-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wovon träumt Sami?",
        questionAr: "بماذا يحلم سامي؟",
        options: ["von einem Job in Deutschland", "von einem Haus mit Garten", "von einer Reise nach Spanien", "von einem Auto mit vier Türen"],
        correctIndex: 0,
        explanation: "قال سامي: Ich träume von einem Job in Deutschland.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«von einem Haus mit Garten» لم يقل سامي إنه يحلم بمنزل.",
          "«von einer Reise nach Spanien» لم يقل سامي إنه يحلم برحلة.",
          "«von einem Auto mit vier Türen» لم يقل سامي إنه يحلم بسيارة.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Worauf freut sich Anna?",
        questionAr: "على ماذا تتطلع آنا؟",
        options: ["auf einen Austausch", "auf eine lange Reise", "auf eine große Party", "auf ein neues Buch"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich freue mich auf einen Austausch.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«auf eine lange Reise» لم تقل آنا إنها تتطلع إلى رحلة.",
          "«auf eine große Party» لم تقل آنا إنها تتطلع إلى حفلة.",
          "«auf ein neues Buch» لم تقل آنا إنها تتطلع إلى كتاب.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Woran gewöhnt sich Karim?",
        questionAr: "على ماذا يعتاد كريم؟",
        options: ["daran, dass man anfragt", "daran, dass man isst", "daran, dass man schläft", "daran, dass man arbeitet"],
        correctIndex: 0,
        explanation: "قال كريم: Ich gewöhne mich langsam daran (أن يسألوا دائماً).",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«daran, dass man isst» لم يقل كريم إنه يعتاد الأكل.",
          "«daran, dass man schläft» لم يقل كريم إنه يعتاد النوم.",
          "«daran, dass man arbeitet» لم يقل كريم إنه يعتاد العمل.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was braucht interkulturelles Verständnis?",
        questionAr: "ما الذي يحتاجه الفهم بين الثقافات؟",
        options: ["Zeit und offene Fragen", "eine schnelle Entscheidung", "eine gemeinsame Sprache allein", "gleiche Familienfeste"],
        correctIndex: 0,
        explanation: "قالت مونا: Interkulturelles Verständnis braucht Zeit und offene Fragen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم تقل مونا إن الفهم بين الثقافات يحتاج إلى قرار سريع.",
          "الحوار يذكر الإصغاء والأسئلة المفتوحة، لا الاكتفاء بلغة مشتركة.",
          "لم يشترط الحوار أن تكون الاحتفالات العائلية متماثلة.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الثقافات: sch، au، وsp",
    items: [
      { de: "die Sprache", ar: "اللغة", note: "sp = شپ: شپراخِه" },
      { de: "die Kultur", ar: "الثقافة", note: "u + r: كولتور" },
      { de: "interkulturell", ar: "بين الثقافات", note: "ll: إنتر-كولتورِل" },
      { de: "der Austausch", ar: "التبادل", note: "au = آو + sch = ش: آوس-تاوش" },
      { de: "die Verständigung", ar: "التفاهم", note: "v = ف: فِر-شتنديغونغ" },
      { de: "sich gewöhnen an", ar: "يعتاد على", note: "ö + h: غِفونِن" },
    ],
    tip: "Verständigung = فِر-شتنديغونغ — v هنا تُنطق ف. وAustausch = آوس-تاوش — au مرتين.",
    shadowing: [
      { de: "Ich interessiere mich für Musik.", ar: "أهتم بالموسيقى.", tip: "sich interessieren für" },
      { de: "Ich warte auf den Bus.", ar: "أنتظر الحافلة.", tip: "warten auf" },
      { de: "Ich freue mich auf den Urlaub.", ar: "أتطلع للعطلة.", tip: "sich freuen auf" },
      { de: "Das hängt von dir ab.", ar: "يعتمد عليك.", tip: "abhängen von — البادئة في النهاية" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة اهتمام:",
      prompt: "«أهتم بالثقافة الألمانية» (sich interessieren für)",
      acceptedAnswers: ["Ich interessiere mich für die deutsche Kultur", "Ich interessiere mich für deutsche Kultur"],
      sampleAnswer: "Ich interessiere mich für die deutsche Kultur.",
      explanation: "sich interessieren für + نصب.",
      errorType: "preposition",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الجر:",
      template: "Ich interessiere mich ___ Musik. (بـ) Ich warte ___ dich. (على) Ich träume ___ einer Reise. (بـ)",
      blanks: [
        { correct: "für", options: ["für", "auf", "von"] },
        { correct: "auf", options: ["für", "auf", "von"] },
        { correct: "von", options: ["für", "auf", "von"] },
      ],
      explanation: "اهتمام → für. انتظار → auf. حلم → von.",
      errorType: "preposition",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich freue mich auf den Besuch.",
      explanation: "أتطلع للزيارة — sich freuen auf (مستقبل).",
      errorType: "spelling",
    },
  ];
