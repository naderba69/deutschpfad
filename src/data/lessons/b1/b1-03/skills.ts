/**
 * b1-03 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "نقاش بيئي",
        lines: [
          { speaker: "Moderator", de: "Das Klima wird immer wärmer. Was wird gemacht?", ar: "المناخ يصبح أكثر دفئاً. ماذا يُفعل؟" },
          { speaker: "Sami", de: "Es werden mehr Bäume gepflanzt. Das ist sehr wichtig.", ar: "تُزرع أشجار أكثر. هذا مهم جداً." },
          { speaker: "Moderator", de: "Und der Müll?", ar: "والنفايات؟" },
          { speaker: "Anna", de: "Der Müll wird getrennt und recycelt.", ar: "تُفصل النفايات وتُعاد تدويرها." },
          { speaker: "Moderator", de: "Wird genug für die Umwelt getan?", ar: "هل يُفعل ما يكفي للبيئة؟" },
          { speaker: "Sami", de: "Leider nein. Es wird noch zu wenig getan.", ar: "للأسف لا. يُفعل القليل جداً." },
        ],
      },
      {
        id: "l2",
        title: "ماذا يمكن أن نفعل؟",
        lines: [
          { speaker: "Lehrer", de: "Was kann man für die Umwelt tun?", ar: "ماذا يمكن أن يفعل المرء للبيئة؟" },
          { speaker: "Mona", de: "Man kann mit dem Fahrrad fahren statt mit dem Auto.", ar: "يمكن ركوب الدراجة بدل السيارة." },
          { speaker: "Lehrer", de: "Sehr gut. Und in der Schule?", ar: "جيد جداً. وفي المدرسة؟" },
          { speaker: "Karim", de: "Papier wird auf beiden Seiten benutzt.", ar: "تُستخدم الورقة من الجهتين." },
          { speaker: "Lehrer", de: "Perfekt! Jede kleine Aktion wird gebraucht.", ar: "ممتاز! كل عمل صغير مطلوب." },
        ],
      },
      {
        id: "l3",
        title: "نصائح بيئية (zu + Infinitiv)",
        lines: [
          { speaker: "Sami", de: "Ich versuche, weniger Plastik zu kaufen.", ar: "أحاول شراء بلاستيك أقل." },
          { speaker: "Anna", de: "Gute Idee! Es ist wichtig, die Umwelt zu schützen.", ar: "فكرة جيدة! من المهم حماية البيئة." },
          { speaker: "Sami", de: "Und ich habe angefangen, mit dem Fahrrad zu fahren.", ar: "وبدأت أركب الدراجة." },
          { speaker: "Anna", de: "Wir planen, einen kleinen Garten zu pflanzen.", ar: "نخطط لزراعة حديقة صغيرة." },
          { speaker: "Sami", de: "Das ist schwer, aber wir schaffen das!", ar: "هذا صعب، لكننا سننجح!" },
        ],
      },
      {
        id: "l4",
        title: "توفير الكهرباء في المدرسة",
        audioNoteAr: "المقاطع مولّدة آلياً (TTS)، وليست تسجيلاً بشرياً. الحوار مثال تدريبي خيالي.",
        lines: [
          { speaker: "Nora", de: "Unsere Schule will weniger Strom verbrauchen. Was können wir tun?", ar: "تريد مدرستنا استهلاك كهرباء أقل. ماذا يمكننا أن نفعل؟", audioSrc: "/audio/lessons/b1-03/ls-b1-03-4-1.mp3" },
          { speaker: "Amir", de: "Wir schalten das Licht aus, wenn wir den Raum verlassen.", ar: "نطفئ الضوء عندما نغادر الغرفة.", audioSrc: "/audio/lessons/b1-03/ls-b1-03-4-2.mp3" },
          { speaker: "Nora", de: "Und was passiert mit alten Laptops?", ar: "وماذا يحدث للحواسيب المحمولة القديمة؟", audioSrc: "/audio/lessons/b1-03/ls-b1-03-4-3.mp3" },
          { speaker: "Amir", de: "Sie werden repariert. Funktionierende Geräte werden an eine andere Schule gespendet.", ar: "تُصلح، وتُمنح الأجهزة الصالحة للاستعمال لمدرسة أخرى.", audioSrc: "/audio/lessons/b1-03/ls-b1-03-4-4.mp3" },
          { speaker: "Nora", de: "Wer bezahlt einen Teil der Kosten?", ar: "من يدفع جزءاً من التكاليف؟", audioSrc: "/audio/lessons/b1-03/ls-b1-03-4-5.mp3" },
          { speaker: "Amir", de: "Die Stadt übernimmt einen Teil. So wird weniger Energie verbraucht.", ar: "تتكفل المدينة بجزء منها. وهكذا يُستهلك قدر أقل من الطاقة.", audioSrc: "/audio/lessons/b1-03/ls-b1-03-4-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was wird gepflanzt?",
        questionAr: "ماذا يُزرع؟",
        options: ["mehr Bäume", "mehr Blumen", "mehr Gemüse", "mehr Obst"],
        correctIndex: 0,
        explanation: "قال سامي: Es werden mehr Bäume gepflanzt.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«mehr Blumen» لم يذكرها النص كما يُزرع.",
          "«mehr Gemüse» لم يذكره النص.",
          "«mehr Obst» لم يذكره النص.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was passiert mit dem Müll?",
        questionAr: "ماذا يحدث للنفايات؟",
        options: ["getrennt und recycelt", "verbrannt", "ins Meer geworfen", "vergraben"],
        correctIndex: 0,
        explanation: "قالت آنا: Der Müll wird getrennt und recycelt.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«verbrannt» لم يرد في النص عن مصير القمامة.",
          "«ins Meer geworfen» لا يتوافق مع ما ورد عن الفرز وإعادة التدوير.",
          "«vergraben» لم يرد في النص ولا يناسب المعنى.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Welches Verkehrsmittel nennt Mona als Beispiel?",
        questionAr: "أي وسيلة نقل تذكرها منى كمثال؟",
        options: ["das Fahrrad", "das Flugzeug", "das Schiff", "der Zug"],
        correctIndex: 0,
        explanation: "قالت منى: Man kann mit dem Fahrrad fahren.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«das Flugzeug» و«das Schiff» و«der Zug» لم تكن المثال الذي ذكرته منى.",
          "«das Schiff» لم تذكره منى في الحوار.",
          "«der Zug» لم تذكره منى في الحوار.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was versucht Sami zu machen?",
        questionAr: "ماذا يحاول سامي أن يفعل؟",
        options: ["weniger Plastik zu kaufen", "mehr Auto zu fahren", "weniger zu schlafen", "mehr Zucker zu essen"],
        correctIndex: 0,
        explanation: "قال سامي: Ich versuche, weniger Plastik zu kaufen — يحاول شراء بلاستيك أقل.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«mehr Auto zu fahren» عكس ما يحاول سامي فعله.",
          "«weniger zu schlafen» لم يذكرها سامي.",
          "«mehr Zucker zu essen» عكس الهدف الصحي الذي ذكره سامي.",
        ],
      },
      {
        id: "q5", itemId: "l4", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع إلى الحوار الرابع:",
        questionDe: "Was können die Schüler tun, um Strom zu sparen?", questionAr: "ماذا يمكن للتلاميذ أن يفعلوا لتوفير الكهرباء؟",
        options: ["Das Licht ausschalten, wenn man den Raum verlässt", "Die Fenster öffnen und die Heizung höher stellen", "Die Computer jeden Abend eingeschaltet lassen", "Alte Laptops in einem anderen Raum lagern"], correctIndex: 0,
        explanation: "يقترح أمير إطفاء الضوء عند مغادرة الغرفة.", errorType: "comprehension",
      },
      {
        id: "q6", itemId: "l4", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was geschieht mit den alten Laptops?", questionAr: "ماذا يحدث للحواسيب المحمولة القديمة؟",
        options: ["Sie werden repariert; funktionierende Geräte werden gespendet.", "Sie werden verkauft und durch neue Geräte ersetzt.", "Sie werden weggeworfen, weil sie nicht mehr gebraucht werden.", "Sie werden an die Stadt zurückgeschickt und geprüft."], correctIndex: 0,
        explanation: "يقول أمير إن الحواسيب تُصلح، والأجهزة التي تعمل تُمنح لمدرسة أخرى.", errorType: "comprehension",
      },
      {
        id: "q7", itemId: "l4", type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wer übernimmt einen Teil der Kosten?", questionAr: "من يتكفل بجزء من التكاليف؟",
        options: ["Die Stadt übernimmt einen Teil der Kosten.", "Die Schule bezahlt alle Rechnungen selbst.", "Die Eltern sammeln Geld für die Reparatur.", "Ein Unternehmen spendet alle neuen Geräte."], correctIndex: 0,
        explanation: "تتكفل المدينة بجزء من التكاليف، ولا يُذكر أن المدرسة أو الأهالي أو شركة تدفعها كاملة.", errorType: "comprehension",
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات البيئة: ü، pf، وw",
    items: [
      { de: "die Umwelt", ar: "البيئة", note: "um + welt: أوم-ڤِلت" },
      { de: "der Müll", ar: "النفايات", note: "ü قصيرة: مول" },
      { de: "die Sonnenenergie", ar: "الطاقة الشمسية", note: "كلمة مركبة طويلة: زونن-إنِرجي" },
      { de: "recyceln", ar: "يعيد التدوير", note: "c = س، y = آي: ريسايكلن" },
      { de: "die Pflanze", ar: "النبتة", note: "pf: پفْلانتسِه" },
      { de: "der Klimawandel", ar: "تغير المناخ", note: "w = ڤ: كليما-ڤاندِل" },
    ],
    tip: "Klimawandel = كليما-ڤاندِل — w ألمانية ڤ دائماً. تذكرها من الأبجدية!",
    shadowing: [
      { de: "Das Haus wird gebaut.", ar: "البيت يُبنى.", tip: "wird gebaut — المجهول المضارع" },
      { de: "Das Haus wurde 1900 gebaut.", ar: "بُني البيت عام 1900.", tip: "wurde gebaut — المجهول الماضي" },
      { de: "Der Müll wird recycelt.", ar: "تُعاد تدوير النفايات.", tip: "recycelt = ريسايكلت" },
      { de: "Man kann die Umwelt schützen.", ar: "يمكن حماية البيئة.", tip: "schützen = شوتسن (ü)" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة مجهول:",
      prompt: "اكتب: «يُبنى البيت» بالألمانية (Passiv مضارع)",
      acceptedAnswers: ["Das Haus wird gebaut", "Das Haus wird gebaut."],
      sampleAnswer: "Das Haus wird gebaut.",
      explanation: "Passiv: wird + Partizip II (gebaut).",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ wird/wurde:",
      template: "Der Müll ___ getrennt. (يُفصل — مضارع) Das Haus ___ 1990 gebaut. (بُني — ماضٍ)",
      blanks: [
        { correct: "wird", options: ["wird", "wurde"] },
        { correct: "wurde", options: ["wird", "wurde"] },
      ],
      explanation: "مضارع → wird. ماضٍ → wurde.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Wälder werden zerstört.",
      explanation: "تُدمَّر الغابات — Passiv: werden zerstört.",
      errorType: "spelling",
    },
  ];
