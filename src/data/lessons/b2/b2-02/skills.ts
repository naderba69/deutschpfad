/**
 * b2-02 — القراءة والاستماع والنطق والكتابة (الجزء «skills»)
 * فُصل من b2-02.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
    items: [
      {
        id: "l1",
        title: "نشرة اقتصادية",
        lines: [
          { speaker: "Sprecherin", de: "Der Umsatz ist im letzten Quartal gestiegen.", ar: "ارتفعت المبيعات في الربع الأخير." },
          { speaker: "Sprecherin", de: "Die neuen Produkte können jetzt geliefert werden.", ar: "يمكن الآن تسليم المنتجات الجديدة." },
          { speaker: "Sprecherin", de: "Das Problem der Inflation lässt sich langsam lösen.", ar: "يمكن حل مشكلة التضخم ببطء." },
          { speaker: "Sprecherin", de: "Die Aktien sind deutlich gestiegen.", ar: "ارتفعت الأسهم بوضوح." },
        ],
      },
      {
        id: "l2",
        title: "في الاجتماع",
        lines: [
          { speaker: "Chefin", de: "Der Vertrag ist unterschrieben worden.", ar: "تم توقيع العقد." },
          { speaker: "Sami", de: "Und die Lieferung?", ar: "والتسليم؟" },
          { speaker: "Chefin", de: "Die Lieferung kann nächste Woche erfolgen. Die Waren sind schon vorbereitet.", ar: "يمكن أن يتم التسليم الأسبوع القادم. البضائع جاهزة." },
          { speaker: "Sami", de: "Perfekt. Das Projekt ist gut gelaufen.", ar: "ممتاز. سار المشروع جيداً." },
        ],
      },
      {
        id: "l3",
        title: "تأخّر التوريد وتوقعات السوق",
        audioNoteAr: "الصوت مولّد آلياً (TTS)، وليس تسجيلاً بشرياً.",
        lines: [
          { speaker: "Moderatorin", de: "Viele Unternehmen melden derzeit Probleme bei der Lieferung ihrer Waren.", ar: "تبلغ شركات كثيرة حالياً عن مشكلات في تسليم بضائعها.", audioSrc: "/audio/lessons/b2-02/ls-b2-02-3-1.mp3" },
          { speaker: "Analyst", de: "Wegen eines längeren Streiks in einem großen Hafen verzögere sich der Wareneingang.", ar: "قال إن وصول البضائع يتأخر بسبب إضراب طويل في ميناء كبير.", audioSrc: "/audio/lessons/b2-02/ls-b2-02-3-2.mp3" },
          { speaker: "Moderatorin", de: "Wie reagieren die Firmen auf diese Verzögerungen?", ar: "كيف تتعامل الشركات مع هذه التأخيرات؟", audioSrc: "/audio/lessons/b2-02/ls-b2-02-3-3.mp3" },
          { speaker: "Analyst", de: "Die Bestellungen könnten jetzt online verfolgt werden, berichtet der Verband.", ar: "أفادت الرابطة بأنه يمكن الآن تتبّع الطلبات عبر الإنترنت.", audioSrc: "/audio/lessons/b2-02/ls-b2-02-3-4.mp3" },
          { speaker: "Moderatorin", de: "Wann soll sich die Lage wieder verbessern?", ar: "متى يُتوقع أن يتحسن الوضع؟", audioSrc: "/audio/lessons/b2-02/ls-b2-02-3-5.mp3" },
          { speaker: "Analyst", de: "Der Verband erwartet, die Lieferungen würden sich im nächsten Monat normalisieren.", ar: "تتوقع الرابطة أن تعود عمليات التسليم إلى طبيعتها الشهر المقبل.", audioSrc: "/audio/lessons/b2-02/ls-b2-02-3-6.mp3" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was ist im letzten Quartal gestiegen?",
        questionAr: "ماذا ارتفع في الربع الأخير؟",
        options: ["der Umsatz", "die Preise", "die Steuern", "die Löhne"],
        correctIndex: 0,
        explanation: "قالت المذيعة: Der Umsatz ist im letzten Quartal gestiegen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«die Preise» لم تُذكر في الجملة كشيء ارتفع في الربع الأخير.",
          "«die Steuern» لم تُذكر في الجملة كشيء ارتفع في الربع الأخير.",
          "«die Löhne» لم تُذكر في الجملة كشيء ارتفع في الربع الأخير.",
        ],
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was lässt sich langsam lösen?",
        questionAr: "ما الذي يمكن حله ببطء؟",
        options: ["das Problem der Inflation", "das Problem des Verkehrs", "das Problem der Schule", "das Problem des Wetters"],
        correctIndex: 0,
        explanation: "قالت: Das Problem der Inflation lässt sich langsam lösen.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«das Problem des Verkehrs» لم تُذكر في النص كمشكلة تُحل ببطء.",
          "«das Problem der Schule» لم تُذكر في النص كمشكلة تُحل ببطء.",
          "«das Problem des Wetters» لم تُذكر في النص كمشكلة تُحل ببطء.",
        ],
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist unterschrieben worden?",
        questionAr: "ما الذي تم توقيعه؟",
        options: ["der Vertrag", "der Brief", "die Rechnung", "der Bericht"],
        correctIndex: 0,
        explanation: "قالت المديرة: Der Vertrag ist unterschrieben worden.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "«der Brief» لم يُذكر كشيء وُقّع.",
          "«die Rechnung» لم تُذكر كشيء وُقّع.",
          "«der Bericht» لم يُذكر كشيء وُقّع.",
        ],
      },
      {
        id: "q4",
        itemId: "l3",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was verursachte die Lieferverzögerungen?",
        questionAr: "ما سبب التأخير في التوريد؟",
        options: ["Ein längerer Streik im großen Hafen", "Ein erheblicher Engpass bei Rohstoffen", "Ein technischer Ausfall der Computersysteme", "Eine kurzfristige Änderung der Zollregeln"],
        correctIndex: 0,
        explanation: "قال المحلل إن وصول البضائع تأخر بسبب إضراب طويل في ميناء كبير.",
        errorType: "vocabulary",
        optionExplanations: [
          undefined,
          "لم يذكر المحلل نقص المواد الخام؛ بل ذكر إضراباً في ميناء.",
          "لم يتحدث الحوار عن عطل تقني في أنظمة الحاسوب.",
          "لم يذكر الحوار تغييراً في قواعد الجمارك؛ السبب المسموع هو الإضراب.",
        ],
      },
    ],
  };

export const pronunciation: Lesson["pronunciation"] = {
    id: "p1",
    title: "أصوات الاقتصاد: tion، sch، وtz",
    items: [
      { de: "die Wirtschaft", ar: "الاقتصاد", note: "sch = ش: ڤيرت-شافَت" },
      { de: "der Umsatz", ar: "المبيعات", note: "tz = تس: أوم-زاتس" },
      { de: "die Inflation", ar: "التضخم", note: "tion = تسيون: إنفلاتسيون" },
      { de: "der Vertrag", ar: "العقد", note: "v = ف + tr: فِرتراغ" },
      { de: "die Lieferung", ar: "التسليم", note: "ie = إي: ليفِرونغ" },
      { de: "die Aktien", ar: "الأسهم", note: "ti = تسي: آكتسيِن" },
    ],
    tip: "Aktien تُنطق «آكتسيِن» — ti هنا تُنطق تسي (مثل tion). لاحظ النمط في الكلمات الاقتصادية.",
    shadowing: [
      { de: "Die Tür ist geöffnet.", ar: "الباب مفتوح (حالة).", tip: "ist geöffnet — Zustandspassiv" },
      { de: "Die Tür wird geöffnet.", ar: "الباب يُفتح (عملية).", tip: "wird geöffnet — Vorgangspassiv" },
      { de: "Die Ware kann geliefert werden.", ar: "يمكن تسليم البضاعة.", tip: "kann ... geliefert werden" },
      { de: "Das Problem lässt sich lösen.", ar: "المشكلة قابلة للحل.", tip: "lässt sich lösen" },
    ],
  };

export const writing: NonNullable<Lesson["writing"]> = [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب حالة منتهية:",
      prompt: "«Die Tür wird geöffnet» → (حالة: مفتوحة)",
      acceptedAnswers: ["Die Tür ist geöffnet", "Die Tür ist geöffnet."],
      sampleAnswer: "Die Tür ist geöffnet.",
      explanation: "Zustandspassiv: sein + Partizip II.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ ist/wird/kann:",
      template: "Die Tür ___ geöffnet (حالة). Die Tür ___ geöffnet (عملية). Die Tür ___ geöffnet werden (إمكانية).",
      blanks: [
        { correct: "ist", options: ["ist", "wird", "kann"] },
        { correct: "wird", options: ["ist", "wird", "kann"] },
        { correct: "kann", options: ["ist", "wird", "kann"] },
      ],
      explanation: "حالة = ist. عملية = wird. إمكانية = kann werden.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "transformation",
      instructionAr: "كتابة إنتاجية: حوّل الجملة النشطة إلى مجهول مع فعل ناقص:",
      instructionDe: "Schreibe im Passiv mit Modalverb:",
      prompt: "Man kann den Preis verhandeln. →",
      acceptedAnswers: ["Der Preis kann verhandelt werden."],
      sampleAnswer: "Der Preis kann verhandelt werden.",
      explanation: "النشط → مجهول + können: kann + Partizip II + werden في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w4",
      type: "fill-blank",
      instructionAr: "أكمل بالمجهول مع الأفعال الناقصة:",
      instructionDe: "Ergänze: muss/kann + PII + werden",
      template: "Die Entscheidung ___ getroffen werden. (يجب) · Der Preis ___ verhandelt werden. (يمكن)",
      blanks: [
        { correct: "muss", options: ["muss", "kann", "könnte", "soll"] },
        { correct: "kann", options: ["kann", "muss", "müsste", "darf"] },
      ],
      hint: "muss = يجب، kann = يمكن — ثم PII + werden في النهاية.",
      explanation: "muss getroffen werden (يجب أن يُتخذ) / kann verhandelt werden (يمكن التفاوض).",
      errorType: "grammar",
      points: 2,
    },
  ];
