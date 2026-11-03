/**
 * b1-10 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b1-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "خطط سامي",
        lines: [
          { speaker: "Anna", de: "Was sind deine Pläne, Sami?", ar: "ما خططك يا سامي؟" },
          { speaker: "Sami", de: "Ich werde nächstes Jahr in Deutschland studieren.", ar: "سأدرس في ألمانيا السنة القادمة." },
          { speaker: "Anna", de: "An welcher Universität?", ar: "في أي جامعة؟" },
          { speaker: "Sami", de: "An der Universität, die in München liegt. Ich habe mich schon beworben.", ar: "في الجامعة التي تقع في ميونخ. تقدمت بالفعل." },
          { speaker: "Anna", de: "Wenn du angenommen wirst, wirst du umziehen.", ar: "إذا قُبلت ستنتقل." },
          { speaker: "Sami", de: "Genau! Und ich werde eine Wohnung suchen, die nicht zu teuer ist.", ar: "بالضبط! وسأبحث عن شقة ليست غالية جداً." },
        ],
      },
      {
        id: "l2",
        title: "أحلام وأهداف",
        lines: [
          { speaker: "Mona", de: "Mein größtes Ziel? Ich möchte eine eigene Firma gründen.", ar: "أكبر هدف لي؟ أريد تأسيس شركتي الخاصة." },
          { speaker: "Karim", de: "Das ist mutig! Was brauchst du dafür?", ar: "هذا شجاع! ماذا تحتاج لذلك؟" },
          { speaker: "Mona", de: "Ich brauche Geld, das ich noch nicht habe, und Erfahrung, die ich sammeln muss.", ar: "أحتاج مالاً ليس عندي بعد، وخبرة يجب أن أجمعها." },
          { speaker: "Karim", de: "Ich glaube, dass du es schaffst. Du bist fleißig!", ar: "أعتقد أنك ستنجحين. أنتِ مجتهدة!" },
        ],
      },
      {
        id: "l3",
        title: "الانتقال إلى ميونخ",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً. فُحص فك الترميز ومؤشرات الإشارة بالسكريبت؛ لا يثبت ذلك وضوح النطق أو طبيعة الأداء أو مطابقة الصوت للنص. والملف 3-3 يتجاوز حد الصمت الطرفي الافتراضي بقليل.",
        lines: [
          { speaker: "Anna", de: "Sami, du hast eine Zusage aus München bekommen. Wann beginnt dein Studium?", ar: "يا سامي، وصلتك موافقة من ميونخ. متى تبدأ دراستك؟", audioSrc: "/audio/lessons/b1-10/ls-b1-10-3-1.mp3" },
          { speaker: "Sami", de: "Am ersten Oktober. Deshalb möchte ich schon Mitte September umziehen.", ar: "في الأول من أكتوبر. لذلك أود الانتقال في منتصف سبتمبر.", audioSrc: "/audio/lessons/b1-10/ls-b1-10-3-2.mp3" },
          { speaker: "Anna", de: "Hast du für die ersten Wochen schon eine Unterkunft gefunden?", ar: "هل وجدت مكاناً للإقامة في الأسابيع الأولى؟", audioSrc: "/audio/lessons/b1-10/ls-b1-10-3-3.mp3" },
          { speaker: "Sami", de: "Mein Cousin, der in München wohnt, hat ein freies Zimmer für mich.", ar: "لدى ابن عمي الذي يسكن في ميونخ غرفة شاغرة لي.", audioSrc: "/audio/lessons/b1-10/ls-b1-10-3-4.mp3" },
          { speaker: "Anna", de: "Das hilft sehr. Suchst du dann später eine eigene Wohnung?", ar: "هذا مفيد جداً. هل ستبحث لاحقاً عن شقة خاصة بك؟", audioSrc: "/audio/lessons/b1-10/ls-b1-10-3-5.mp3" },
          { speaker: "Sami", de: "Ja, ich werde eine Wohnung suchen, die nicht zu teuer ist. Mein Cousin hilft mir dabei.", ar: "نعم، سأبحث عن شقة ليست باهظة، وسيساعدني ابن عمي في ذلك.", audioSrc: "/audio/lessons/b1-10/ls-b1-10-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wo will Sami studieren?",
        questionAr: "أين يريد سامي أن يدرس؟",
        options: ["in München", "in Berlin", "in Hamburg", "in Tunis"],
        correctIndex: 0,
        explanation: "قال سامي: An der Universität, die in München liegt.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«in Berlin» لم يذكرها سامي كمدينة يريد الدراسة فيها.",
          "«in Hamburg» لم يذكرها سامي كمدينة يريد الدراسة فيها.",
          "«in Tunis» لم يذكرها سامي كمدينة يريد الدراسة فيها.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was wird Sami suchen?",
        questionAr: "ماذا سيبحث سامي؟",
        options: ["eine nicht zu teure Wohnung", "eine große Wohnung", "eine Wohnung am Strand", "ein Haus"],
        correctIndex: 0,
        explanation: "قال: Ich werde eine Wohnung suchen, die nicht zu teuer ist.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«eine große Wohnung» لم يقلها سامي؛ قال إنه يريد شقة غير غالية.",
          "«eine Wohnung am Strand» لم يذكرها سامي كخيار للبحث.",
          "«ein Haus» لم يذكرها سامي كخيار للبحث.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist Monas größtes Ziel?",
        questionAr: "ما أكبر هدف لمنى؟",
        options: ["eine Firma gründen", "ein Haus kaufen", "nach Deutschland gehen", "ein Buch schreiben"],
        correctIndex: 0,
        explanation: "قالت منى: Ich möchte eine eigene Firma gründen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«ein Haus kaufen» لم تذكرها منى كهدفها الأكبر.",
          "«nach Deutschland gehen» لم تذكرها منى كهدفها الأكبر.",
          "«ein Buch schreiben» لم تذكرها منى كهدفها الأكبر.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wann möchte Sami nach München umziehen?",
        questionAr: "متى يريد سامي الانتقال إلى ميونخ؟",
        options: ["Mitte September vor Studienbeginn", "Anfang August in den Ferien", "Ende Oktober nach dem Start", "Erst im nächsten Frühjahr"],
        correctIndex: 0,
        explanation: "قال سامي: Ich möchte schon Mitte September umziehen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "أغسطس لم يرد في الحوار؛ حدّد سامي منتصف سبتمبر.",
          "قال سامي إنه سينتقل قبل بدء الدراسة في أكتوبر، لا في نهاية الشهر.",
          "لم يؤجل سامي الانتقال إلى الربيع؛ خطته منتصف سبتمبر.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "مراجعة أصوات B1",
    items: [
      { de: "die Zukunft", ar: "المستقبل", note: "IPA: [ˈtsuːkʊnft]؛ u الأولى طويلة والثانية قصيرة." },
      { de: "würde", ar: "كنت سأفعل", note: "IPA: [ˈvʏʁdə]؛ انتبه إلى ü القصيرة وإلى r الألمانية." },
      { de: "das Gemälde", ar: "اللوحة", note: "IPA: [ɡəˈmɛːldə]؛ g هنا [ɡ] مجهور، وä طويلة." },
      { de: "der Bürger", ar: "المواطن", note: "IPA: [ˈbʏʁɡɐ]؛ g هنا [ɡ] مجهور، وü قصيرة." },
      { de: "die Regierung", ar: "الحكومة", note: "IPA: [ʁeˈɡiːʁʊŋ]؛ g هنا [ɡ] مجهور، وie تمثل [iː]." },
      { de: "während", ar: "بينما", note: "IPA: [ˈvɛːʀənt]؛ w تمثل [v] وä طويلة." },
    ],
    tip: "تدريب استماع وترديد باستخدام IPA في الملاحظات. زر النطق يعتمد على صوت الجهاز (TTS) ولا يقيس دقة نطقك.",
    shadowing: [
      { de: "Der Student, der dort steht, ist mein Freund.", ar: "الطالب الذي يقف هناك صديقي.", tip: "Relativsatz: der dort steht" },
      { de: "Wenn ich reich wäre, würde ich reisen.", ar: "لو كنت غنياً لسافرت.", tip: "Konjunktiv II: wäre + würde" },
      { de: "Das Haus wird gebaut.", ar: "البيت يُبنى.", tip: "Passiv: wird gebaut" },
      { de: "Je mehr ich lerne, desto besser.", ar: "كلما تعلمت أكثر كان أفضل.", tip: "je... desto" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب خطة مستقبلية مركبة:",
      prompt: "اكتب خطتك: «سأدرس في ألمانيا لأنني أحب الثقافة» (Futur + weil)",
      acceptedAnswers: ["Ich werde in Deutschland studieren, weil ich die Kultur liebe", "Ich werde in Deutschland studieren, weil ich die Kultur liebe."],
      sampleAnswer: "Ich werde in Deutschland studieren, weil ich die Kultur liebe.",
      explanation: "Futur (werde studieren) + weil + فعل في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بجملة مركبة:",
      template: "Der Mann, ___ dort arbeitet, ist mein Chef. (الذي) Wenn ich Zeit ___, würde ich mehr lernen. (كان عندي)",
      blanks: [
        { correct: "der", options: ["der", "den", "dem"] },
        { correct: "hätte", options: ["hätte", "habe", "hatte"] },
      ],
      explanation: "فاعل مذكر → der. شرطية → hätte.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل إلى المستقبل (Futur I) عن خططك:",
      instructionDe: "Schreibe im Futur I:",
      prompt: "Ich lerne Deutsch. → Nächstes Jahr ...",
      acceptedAnswers: ["Nächstes Jahr werde ich Deutsch lernen.", "Ich werde nächstes Jahr Deutsch lernen."],
      sampleAnswer: "Nächstes Jahr werde ich Deutsch lernen.",
      explanation: "المستقبل: werden + مصدر في نهاية الجملة — صياغة الأهداف والخطط.",
      errorType: "grammar",
    },
  ];
