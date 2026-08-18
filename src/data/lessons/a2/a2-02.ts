import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-02: الصحة والطبيب — الجسم + المرض + sollen/nicht dürfen
 */
export const lessonA202: Lesson = {
  id: "a2-02",
  unitId: "a2-02",
  level: "A2",
  order: 1,
  titleDe: "Beim Arzt",
  titleAr: "الصحة والطبيب",
  duration: 35,
  summary:
    "أجزاء الجسم والأعراض، وصف الألم، فعل sollen (ينبغي) للنصيحة، وزيارة الطبيب: Ich habe Kopfschmerzen. Sie sollen viel trinken.",

  lernziele: [
    { id: "z1", de: "Ich kann Körperteile nennen.", ar: "أن أسمّي أجزاء الجسم (Kopf, Bauch, Rücken...)." },
    { id: "z2", de: "Ich kann Symptome beschreiben.", ar: "أن أصف الأعراض: عندي صداع، يؤلمني ظهري." },
    { id: "z3", de: "Ich kann sollen konjugieren und Ratschläge geben.", ar: "أن أصرف فعل sollen وأعطي نصيحة: يجب أن تشرب كثيراً." },
      { id: "z4", de: "Ich kann einen Termin beim Arzt vereinbaren.", ar: "أن أحجز موعداً عند الطبيب هاتفياً." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "كيف تقول «يجب أن» بالعربية؟ في الألمانية الفعل sollen (ينبغي) — وهو أحد «الأفعال الشرطية» الستة التي سنتقنها تباعاً في هذا المستوى. لاحظ شيئاً غريباً: في الألمانية «يجب أن أشرب» تُبنى بفعلين معاً!",
    motivatingQuestionDe: "Was fehlt Ihnen?",
    contextAr:
      "زيارة الطبيب: نتعلم أجزاء الجسم والأعراض، ثم نضيف أول أفعالنا الشرطية: sollen (ينبغي) — أداة النصيحة المثالية عند الطبيب.",
    contextDe: "Ich habe Kopfschmerzen und Fieber.",
    connectionToPreviousAr: "تتذكر من A1: Ich habe Hunger (عندي جوع). اليوم نعمم: Ich habe Kopfschmerzen (عندي صداع) — نفس البنية مع haben + اسم.",
    activateVocabulary: [
      { de: "der Körper", ar: "الجسم" },
      { de: "der Kopf", ar: "الرأس" },
      { de: "die Schmerzen", ar: "الآلام" },
      { de: "der Termin", ar: "الموعد" },
      { de: "der Arzt", ar: "الطبيب" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الصيغة الصحيحة:",
      questionDe: "Ich habe ___.",
      questionAr: "عندي جوع.",
      options: ["Hunger", "hungrig", "der Hunger", "hunger"],
      correctIndex: 0,
      explanation: "تذكر: Ich habe Hunger (الجوع اسم مع haben).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر المؤنث الصحيح:",
      questionDe: "der Arzt → die ___",
      options: ["Ärztin", "Arztin", "Ärzte", "Ärztin"],
      correctIndex: 0,
      explanation: "المهن: Arzt → Ärztin (مع Umlaut).",
      errorType: "vocabulary",
    },
    {
      id: "r3",
      type: "word-ordering",
      instructionAr: "مراجعة من A1: رتّب الجملة:",
      tokens: ["ist", "Der", "Termin", "Montag", "am", "."],
      correctSentence: "Der Termin ist am Montag.",
      explanation: "الموعد يوم الاثنين: am + يوم.",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "الجسم والأعراض + وصف الألم",
      titleDe: "Körper, Symptome und Schmerzen",
      explanationAr:
        "أجزاء الجسم: der Kopf (رأس)، das Auge (عين)، die Nase (أنف)، der Mund (فم)، das Ohr (أذن)، der Hals (حلق/رقبة)، die Schulter (كتف)، der Arm (ذراع)، die Hand (يد)، der Bauch (بطن)، der Rücken (ظهر)، das Bein (ساق)، der Fuß (قدم). الأعراض: Ich habe Kopfschmerzen (صداع)، Bauchschmerzen (ألم بطن)، Fieber (حمى)، Schnupfen (زكام)، Husten (سعال).",
      whyAr:
        "لماذا Schmerzen جمع؟ لأن الألم في الألمانية «جمع» عادة: Kopfschmerzen حرفياً «آلام رأس» — مثل العربية «آلام» في صيغ الجمع. ومع haben: Ich habe Schmerzen = عندي آلام.",
      table: {
        title: "الجسم والأعراض",
        columns: ["الجزء/العرض", "العربية", "ملاحظة"],
        rows: [
          { label: "der Kopf", cells: ["الرأس", "مذكر"] },
          { label: "das Auge / das Ohr", cells: ["العين / الأذن", "محايدان"] },
          { label: "die Hand / der Fuß", cells: ["اليد / القدم", "مؤنث/مذكر"] },
          { label: "der Rücken / der Bauch", cells: ["الظهر / البطن", "مذكران"] },
          { label: "die Kopfschmerzen", cells: ["الصداع", "جمع دائماً"] },
          { label: "das Fieber", cells: ["الحمى", "محايد"] },
          { label: "der Husten / der Schnupfen", cells: ["السعال / الزكام", "مذكران"] },
        ],
      },
      examples: [
        { de: "Ich habe Kopfschmerzen.", ar: "عندي صداع." },
        { de: "Mein Rücken tut weh.", ar: "ظهري يؤلمني." },
        { de: "Sie hat Fieber und Husten.", ar: "عندها حمى وسعال." },
        { de: "Wo tut es weh?", ar: "أين يؤلمك؟" },
        { de: "Ich habe seit drei Tagen Halsschmerzen.", ar: "عندي ألم في الحلق منذ ثلاثة أيام." },
      ],
      comparisonWithArabic:
        "«Ich habe Kopfschmerzen» = عندي آلام رأس — مطابقة شبه حرفية للعربية «عندي صداع». و«Mein Rücken tut weh» = ظهري يعمل ألماً! (tun = يفعل/يعمل + weh = ألم).",
      eselsbruecke:
        "«Schmerzen = آلام»: كل ما يؤلمك = Schmerzen. و«tut weh» = «يعمل وجعاً»: توت ڤيه — ظهري يعمل وجعاً!",
      commonMistakes: [
        { wrong: "Ich bin Kopfschmerzen.", right: "Ich habe Kopfschmerzen.", whyAr: "الألم «يُملَك» بـ haben وليس «يُكون» بـ sein." },
        { wrong: "Mein Kopf tut weh + Ich habe Kopfschmerzen (تكرار في جملة)", right: "اختر واحدة: Ich habe Kopfschmerzen.", whyAr: "الجملتان تعنيان الشيء نفسه — لا تجمعهما." },
        { wrong: "das Auge جمع: die Augen (بدون e)", right: "die Augen", whyAr: "Auge → Augen (جمع -n)." },
      ],
      relatedRuleComparison: {
        title: "habe Schmerzen أم tut weh؟",
        content: "كلاهما صحيح: Ich habe Kopfschmerzen (اسم) / Mein Kopf tut weh (فعل). الاسم أسهل وأشيع: Schmerzen مع العضو.",
      },
    },
    {
      id: "t2",
      titleAr: "فعل sollen (ينبغي) — النصيحة عند الطبيب",
      titleDe: "Das Modalverb „sollen“",
      explanationAr:
        "sollen = ينبغي/يجب (نصيحة أو التزام من شخص آخر). التصريف: ich soll، du sollst، er soll، wir sollen، ihr sollt، sie sollen. ملاحظة: المفرد (ich/du/er) بلا نهاية تختلف! التركيب: sollen + Infinitiv في النهاية: Sie sollen viel trinken. وقريبه المهم: nicht dürfen = ممنوع/لا يجوز: Sie dürfen nicht rauchen (لا يجوز لكم التدخين).",
      whyAr:
        "لماذا «بلا نهاية» في المفرد؟ لأن الأفعال الشرطية الستة كلها تتصرف هكذا: ich kann, du kannst, er kann... الصيغة مثل العربية: «أنت ينبغي تشرب» — فعلان معاً، والأساسي في النهاية.",
      table: {
        title: "تصريف sollen + أمثلة عند الطبيب",
        columns: ["الضمير", "sollen", "مثال"],
        rows: [
          { label: "ich", cells: ["soll", "Ich soll Medizin nehmen."] },
          { label: "du", cells: ["sollst", "Du sollst viel trinken."] },
          { label: "er/sie/es", cells: ["soll", "Er soll im Bett bleiben."] },
          { label: "wir", cells: ["sollen", "Wir sollen uns ausruhen."] },
          { label: "ihr", cells: ["sollt", "Ihr sollt früh schlafen."] },
          { label: "sie/Sie", cells: ["sollen", "Sie sollen nach Hause gehen."] },
        ],
      },
      examples: [
        { de: "Sie sollen viel Wasser trinken.", ar: "يجب أن تشربوا ماءً كثيراً." },
        { de: "Sie dürfen nicht rauchen.", ar: "لا يجوز لكم التدخين (ممنوع)." },
        { de: "Du sollst im Bett bleiben.", ar: "يجب أن تبقى في السرير." },
        { de: "Er soll die Tabletten nehmen.", ar: "يجب أن يأخذ الأقراص." },
        { de: "Sie sollen sich ausruhen.", ar: "يجب أن تستريحوا." },
        { de: "Wir sollen zum Arzt gehen.", ar: "يجب أن نذهب إلى الطبيب." },
      ],
      comparisonWithArabic:
        "«ينبغي أن تشرب» = Du sollst trinken. نفس البنية: فعل شرطي + «أن» + فعل أساسي — لكن الألمانية تحذف «أن» وتضع الفعل الأساسي في النهاية: du sollst trinken (حرفياً: أنت ينبغي تشرب).",
      eselsbruecke:
        "«soll = صَلّى (ينبغي)»: تقرب لها بالنطق. و«المفرد بلا نهاية»: ich soll, du sollst, er soll — الشكلان soll وsollst فقط.",
      commonMistakes: [
        { wrong: "Ich sollst (خلط النهايات)", right: "Ich soll", whyAr: "sollst مع du فقط — ich: soll." },
        { wrong: "Du sollst trinken viel. (ترتيب خاطئ)", right: "Du sollst viel trinken.", whyAr: "الفعل الأساسي في النهاية: sollst ... trinken." },
        { wrong: "نفي النصيحة: Du sollst nicht rauchen (صحيح) — لكن البعض يقول nicht rauchen sollen", right: "Du sollst nicht rauchen.", whyAr: "النفي يسبق الفعل الأساسي مباشرة." },
      ],
      relatedRuleComparison: {
        title: "sollen أم müssen؟",
        content: "sollen = نصيحة/التزام من آخر (يجب أن تشرب — قال الطبيب). müssen = ضرورة ذاتية/إلزام (يجب أن أذهب — أنا مضطر). سنأخذ müssen في درس لاحق. عند الطبيب: sollen.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "زيارة الطبيب",
        lines: [
          { speaker: "Arzt", de: "Guten Tag! Was fehlt Ihnen?", ar: "نهارك سعيد! ما الذي ينقصك (ما بك)؟" },
          { speaker: "Sami", de: "Ich habe seit gestern starke Kopfschmerzen und Fieber.", ar: "عندي منذ أمس صداع شديد وحمى." },
          { speaker: "Arzt", de: "Haben Sie auch Husten?", ar: "هل عندك سعال أيضاً؟" },
          { speaker: "Sami", de: "Ja, ein bisschen.", ar: "نعم، قليلاً." },
          { speaker: "Arzt", de: "Sie haben eine Erkältung. Sie sollen viel trinken und sich ausruhen.", ar: "عندك زكام. يجب أن تشرب كثيراً وتستريح." },
          { speaker: "Sami", de: "Und Tabletten?", ar: "وأقراص؟" },
          { speaker: "Arzt", de: "Nehmen Sie dreimal täglich eine Tablette.", ar: "خذ قرصاً ثلاث مرات يومياً." },
        ],
      },
      {
        id: "l2",
        title: "نصائح من صديق",
        lines: [
          { speaker: "Anna", de: "Du siehst müde aus. Was ist los?", ar: "تبدو متعباً. ماذا حدث؟" },
          { speaker: "Karim", de: "Ich habe Rückenschmerzen. Ich habe zu viel gearbeitet.", ar: "عندي ألم في الظهر. عملت كثيراً." },
          { speaker: "Anna", de: "Du sollst dich ausruhen und nicht so viel arbeiten!", ar: "يجب أن تستريح وألا تعمل كثيراً!" },
          { speaker: "Karim", de: "Du hast recht. Und ich soll zum Arzt gehen.", ar: "معك حق. ويجب أن أذهب للطبيب." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was hat Sami?",
        questionAr: "ماذا لدى سامي؟",
        options: ["Kopfschmerzen und Fieber", "Bauchschmerzen", "Husten nur", "Rückenschmerzen"],
        correctIndex: 0,
        explanation: "قال: starke Kopfschmerzen und Fieber — صداع وحمى.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was soll Sami machen?",
        questionAr: "ماذا يجب أن يفعل سامي؟",
        options: ["viel trinken und sich ausruhen", "arbeiten", "Sport machen", "kalt baden"],
        correctIndex: 0,
        explanation: "قال الطبيب: Sie sollen viel trinken und sich ausruhen.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Warum hat Karim Rückenschmerzen?",
        questionAr: "لماذا ألم ظهر كريم؟",
        options: ["Er hat zu viel gearbeitet.", "Er hat geschwommen.", "Er ist geflogen.", "Er hat Fußball gespielt."],
        correctIndex: 0,
        explanation: "قال كريم: Ich habe zu viel gearbeitet — عمل كثيراً.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الجسم: ch، sch، وie",
    items: [
      { de: "der Kopf", ar: "الرأس", note: "o قصيرة + pf: كوپف" },
      { de: "der Bauch", ar: "البطن", note: "au = آو + ch خ: باوخ" },
      { de: "der Rücken", ar: "الظهر", note: "ü + ck: رُكِن" },
      { de: "die Schulter", ar: "الكتف", note: "sch = ش: شولتر" },
      { de: "das Auge", ar: "العين", note: "au = آو + g = غ: آوغِه" },
      { de: "der Husten", ar: "السعال", note: "u قصيرة: هوستِن" },
    ],
    tip: "«das Auge» نطقها مضحك للعرب: آوغِه (مثل «آوغه») — au ثم g المجهورة. استمع وكرر ثلاث مرات.",
    shadowing: [
      { de: "Ich habe Kopfschmerzen.", ar: "عندي صداع.", tip: "Kopfschmerzen = كوپف-شميرتسن (sch)" },
      { de: "Mein Rücken tut weh.", ar: "ظهري يؤلمني.", tip: "tut weh = توت ڤيه" },
      { de: "Sie sollen viel trinken.", ar: "يجب أن تشربوا كثيراً.", tip: "sollen = زولِن (s=ز)" },
      { de: "Ich soll im Bett bleiben.", ar: "يجب أن أبقى في السرير.", tip: "bleiben = بلايبن (ei=آي)" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "صف ما يؤلمك:",
      prompt: "Was tut dir weh? (اكتب جملة كاملة)",
      acceptedAnswers: ["Ich habe Kopfschmerzen", "Mein Rücken tut weh", "Ich habe Bauchschmerzen", "Ich habe Halsschmerzen"],
      sampleAnswer: "Ich habe Kopfschmerzen.",
      explanation: "الأسهل: Ich habe + Schmerzen. أو: Mein + عضو + tut weh.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف sollen:",
      template: "Ich ___ viel trinken. Du ___ im Bett bleiben. Er ___ Medizin nehmen. Wir ___ zum Arzt gehen.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollst", options: ["soll", "sollst", "sollt"] },
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollst", "sollen"] },
      ],
      explanation: "سلم sollen: soll، sollst، soll، sollen، sollt، sollen.",
      errorType: "conjugation",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Sie sollen dreimal täglich eine Tablette nehmen.",
      explanation: "يجب أن تأخذوا قرصاً ثلاث مرات يومياً — sollen + الفعل الأساسي في النهاية.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Ich habe ___.",
      questionAr: "عندي صداع.",
      options: ["Kopfschmerzen", "Kopfschmerz", "Kopfschmerzenen", "Kopfschmerzten"],
      correctIndex: 0,
      explanation: "الصداع جمع دائماً: Kopfschmerzen.",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen الصحيح:",
      questionDe: "Du ___ viel trinken.",
      options: ["sollst", "soll", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع du: sollst.",
      errorType: "conjugation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل جزء الجسم بمعناه:",
      pairs: [
        { left: "der Kopf", right: "الرأس" },
        { left: "das Auge", right: "العين" },
        { left: "der Bauch", right: "البطن" },
        { left: "der Rücken", right: "الظهر" },
      ],
      explanation: "أربعة أجزاء أساسية — احفظها مع أدواتها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["viel", "Du", "sollst", "trinken", "."],
      correctSentence: "Du sollst viel trinken.",
      explanation: "Du + sollst + viel + trinken (الأساسي في النهاية).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich bin Kopfschmerzen.",
      wrongWord: "bin",
      correctWord: "habe",
      options: ["habe", "bin", "soll", "werde"],
      explanation: "الألم يُملَك: Ich habe Kopfschmerzen.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالعضو الصحيح (Auge/Ohr/Hand/Fuß):",
      template: "Ich sehe mit dem ___. Ich höre mit dem ___. Ich schreibe mit der ___.",
      blanks: [
        { correct: "Auge", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Ohr", options: ["Auge", "Ohr", "Hand", "Fuß"] },
        { correct: "Hand", options: ["Auge", "Ohr", "Hand", "Fuß"] },
      ],
      explanation: "أرى بالعين، أسمع بالأذن، أكتب باليد.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "أعطِ نصيحة باستخدام sollen:",
      prompt: "Er ist krank. → (يجب أن يستريح)",
      acceptedAnswers: ["Er soll sich ausruhen", "Er soll sich ausruhen."],
      sampleAnswer: "Er soll sich ausruhen.",
      explanation: "النصيحة: Er soll + الفعل الأساسي في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Was fehlt Ihnen?",
      questionAr: "ما معنى السؤال؟",
      options: ["ما الذي ينقصك (ما بك)؟", "كم عمرك؟", "ما اسمك؟", "أين يؤلمك؟"],
      correctIndex: 0,
      explanation: "عبارة الطبيب الشهيرة: Was fehlt Ihnen? = ما بك؟ (حرفياً: ما الذي ينقصك).",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich sollst Medizin nehmen.",
      wrongWord: "sollst",
      correctWord: "soll",
      options: ["soll", "sollst", "sollt", "sollen"],
      explanation: "مع ich: soll (وليست sollst التي مع du).",
      errorType: "conjugation",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Du sollst nicht so viel arbeiten.",
      explanation: "يجب ألا تعمل كثيراً — nicht قبل الفعل الأساسي.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich bin Kopfschmerzen.", right: "Ich habe Kopfschmerzen.", whyAr: "الألم يُملك بـ haben." },
      { wrong: "Ich sollst (مع ich)", right: "Ich soll", whyAr: "sollst مع du فقط." },
      { wrong: "خلط das Auge (عين) مع das Ohr (أذن)", right: "Auge = عين، Ohr = أذن", whyAr: "احفظ: Auge فيه A مثل «عين»، Ohr فيه O مثل «أذن» (تشابه صوتي)." },
    ],
    eselsbruecken: [
      "«Schmerzen = آلام»: كل ما يؤلمك Schmerzen مع haben.",
      "«soll = ينبغي»: عند الطبيب اسمعها كثيراً: Sie sollen...",
    ],
    culturalNote: {
      title: "التأمين الصحي الألماني",
      content:
        "في ألمانيا «die Krankenversicherung» (التأمين الصحي) إلزامي للجميع. عند المرض: اتصل بالطبيب وحجز «Termin». والأدوية تصرف من «die Apotheke» (وليس من الطبيب مباشرة). عبارة مهمة: «Ich bin krankenversichert» (أنا مؤمن صحياً).",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Ich habe ___ und Fieber.",
      options: ["Husten", "husten", "der Husten", "hust"],
      correctIndex: 0,
      explanation: "Husten اسم مع haben: Ich habe Husten.",
      errorType: "vocabulary",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sollen:",
      questionDe: "Er ___ im Bett bleiben.",
      options: ["soll", "sollst", "sollt", "sollen"],
      correctIndex: 0,
      explanation: "مع er: soll.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["sich", "Er", "ausruhen", "soll", "."],
      correctSentence: "Er soll sich ausruhen.",
      explanation: "يجب أن يستريح: Er + soll + sich ausruhen.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Mein Kopf tut weht.",
      wrongWord: "weht",
      correctWord: "weh",
      options: ["weh", "weht", "wehne", "wehe"],
      explanation: "tut weh — weh ثابتة بلا نهاية: Mein Kopf tut weh.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ sollen الصحيح:",
      template: "Ich ___ viel trinken. Sie ___ Medizin nehmen. Ihr ___ früh schlafen.",
      blanks: [
        { correct: "soll", options: ["soll", "sollst", "sollt"] },
        { correct: "sollen", options: ["soll", "sollen", "sollt"] },
        { correct: "sollt", options: ["soll", "sollt", "sollten"] },
      ],
      explanation: "ich soll، sie sollen، ihr sollt.",
      errorType: "conjugation",
    },
  ],

  flashcards: [
    { id: "fc1", de: "der Körper", ar: "الجسم", example: "Der Körper braucht Schlaf.", exampleAr: "الجسم يحتاج النوم.", level: "A2" },
    { id: "fc2", de: "der Kopf", ar: "الرأس", example: "Ich habe Kopfschmerzen.", exampleAr: "عندي صداع.", level: "A2" },
    { id: "fc3", de: "das Auge", ar: "العين", example: "Ich sehe mit den Augen.", exampleAr: "أرى بالعينين.", level: "A2" },
    { id: "fc4", de: "der Rücken", ar: "الظهر", example: "Mein Rücken tut weh.", exampleAr: "ظهري يؤلمني.", level: "A2" },
    { id: "fc5", de: "die Schmerzen", ar: "الآلام", example: "Ich habe Schmerzen.", exampleAr: "عندي آلام.", level: "A2" },
    { id: "fc6", de: "das Fieber", ar: "الحمى", example: "Er hat Fieber.", exampleAr: "عنده حمى.", level: "A2" },
    { id: "fc7", de: "sollen", ar: "ينبغي (نصيحة)", example: "Du sollst viel trinken.", exampleAr: "يجب أن تشرب كثيراً.", level: "A2" },
    { id: "fc8", de: "sich ausruhen", ar: "يستريح", example: "Sie sollen sich ausruhen.", exampleAr: "يجب أن تستريحوا.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-02-1", type: "relay-instructions",
      titleAr: "انقل تعليمات طبية بالعربية لشخص",
      sourceDe: "Nehmen Sie diese Tabletten zweimal am Tag nach dem Essen. Trinken Sie viel Wasser und ruhen Sie sich aus.",
      taskAr: "انقل التعليمات بالعربية: جرعة الدواء، الوقت، والنصائح الإضافية.",
      modelAnswerAr: "«خذ هذه الأقراص مرتين يومياً بعد الأكل. اشرب ماءً كثيراً واسترح.»",
      keyPointsAr: ["نقلت الجرعة (مرتين يومياً)", "ذكرت التوقيت (بعد الأكل)", "نقلت نصائح الماء والراحة"],
    },
  ],
      interaction: [
    {
      id: "int-a2-02-1",
      scenarioAr: "عند الطبيب — تصف الأعراض وتطلب النصيحة.",
      scenarioDe: "Beim Arzt — du beschreibst Symptome.",
      strategyAr: "الاستراتيجية: وصف الأعراض بدقة وفهم النصائح.",
      rounds: [
        {
          speakerDe: "Was fehlt Ihnen?",
          speakerAr: "ما الذي يزعجك؟",
          options: [
            { de: "Ich habe seit zwei Tagen Kopfschmerzen und Fieber.", ar: "أعاني منذ يومين من صداع وحمى.", best: true, replyDe: "Haben Sie auch Husten?", replyAr: "هل لديك سعال أيضاً؟" },
            { de: "Ich bin ein Fahrrad.", ar: "أنا دراجة.", best: false, replyDe: "Sie sind ein Fahrrad? Sehr komisch.", replyAr: "أنت دراجة؟ غريب جداً." },
          ],
        },
        {
          speakerDe: "Haben Sie auch Husten?",
          speakerAr: "هل لديك سعال أيضاً؟",
          options: [
            { de: "Ja, ein bisschen. Besonders nachts.", ar: "نعم قليلاً. خاصة في الليل.", best: true, replyDe: "Okay. Nehmen Sie diese Medizin und trinken Sie viel.", replyAr: "حسناً. خذ هذا الدواء واشرب كثيراً." },
            { de: "Nein, nur ich huste nie.", ar: "لا، فقط أنا لا أسعل أبداً.", best: false, replyDe: "„Nur ich huste nie“ ist falsch. Sagen Sie: Ich huste nicht.", replyAr: "«فقط أنا لا أسعل أبداً» خاطئة. قل: لا أسعل." },
          ],
        },
      ],
    },
  ],

};