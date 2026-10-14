/**
 * a1-10 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a1-10.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر المؤنث الصحيح:",
      questionDe: "der Arzt → die ___",
      options: ["Ärztin", "Arztin", "Ärztine", "Arzt"],
      correctIndex: 0,
      explanation: "Arzt → Ärztin (مع Umlaut).",
      errorType: "vocabulary",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر النفي الصحيح:",
      questionDe: "Ich habe ___ Geld.",
      questionAr: "ليس لدي مال.",
      options: ["kein", "nicht", "keine", "keinen"],
      correctIndex: 0,
      explanation: "Geld محايد (das Geld) → kein Geld.",
      errorType: "negation",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل المهنة بمعناها:",
      pairs: [
        { left: "der Lehrer", right: "المعلم" },
        { left: "der Koch", right: "الطباخ" },
        { left: "der Fahrer", right: "السائق" },
        { left: "der Verkäufer", right: "البائع" },
      ],
      explanation: "مهن شائعة: معلم، طباخ، سائق، بائع.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["als", "arbeitet", "Ingenieur", "Er", "."],
      correctSentence: "Er arbeitet als Ingenieur.",
      explanation: "يعمل مهندساً: Er + arbeitet (V2) + als Ingenieur.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "اختر التصحيح المناسب لصيغة النفي في الجملة:",
      wrongSentence: "Ich habe kein Bruder.",
      wrongWord: "kein",
      correctWord: "keinen",
      options: ["keinen", "kein", "keine", "nicht"],
      explanation:
        "Bruder مذكر ومفعول به هنا، لذلك الصيغة المطلوبة keinen: Ich habe keinen Bruder.",
      errorType: "negation",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بـ nicht/kein/keine/keinen:",
      template:
        "Er arbeitet ___. Sie hat ___ Schwester. Wir haben ___ Auto. Ich kaufe ___ Kaffee.",
      blanks: [
        { correct: "nicht", options: ["nicht", "kein", "keine", "keinen"] },
        { correct: "keine", options: ["nicht", "kein", "keine", "keinen"] },
        { correct: "kein", options: ["nicht", "kein", "keine", "keinen"] },
        { correct: "keinen", options: ["nicht", "kein", "keine", "keinen"] },
      ],
      explanation:
        "في هذه الجمل: نفي الفعل بـnicht؛ keine مع Schwester المؤنث؛ kein مع Auto المحايد؛ وkeinen مع Kaffee المذكر في المفعول به.",
      errorType: "negation",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى نفي:",
      prompt: "Ich habe einen Bruder. → (نفِها)",
      acceptedAnswers: ["Ich habe keinen Bruder", "Ich habe keinen Bruder."],
      sampleAnswer: "Ich habe keinen Bruder.",
      explanation: "einen → keinen (نفي النصب المذكر).",
      errorType: "negation",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Was bist du von Beruf?",
      questionAr: "ما معنى السؤال؟",
      options: ["ما مهنتك؟", "ما اسمك؟", "أين تعمل؟", "كم عمرك؟"],
      correctIndex: 0,
      explanation: "السؤال يسأل عن المهنة: ما مهنتك؟ أو ماذا تعمل؟",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "اختر التصحيح الإملائي لصيغة المهنة المؤنثة:",
      wrongSentence: "Meine Mutter ist Kochin.",
      wrongWord: "Kochin",
      correctWord: "Köchin",
      options: ["Köchin", "Kochin", "Köchen", "Kocherin"],
      explanation: "Koch → Köchin مع Umlaut.",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة مع مراعاة كتابة الأسماء الألمانية بحرف كبير:",
      caseSensitive: true,
      audioText: "Ich habe keinen Bruder, aber eine Schwester.",
      explanation:
        "ليس لدي أخ لكن لدي أخت — keinen (نفي نصب مذكر) + aber (لكن).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل أداة النكرة المناسبة بعد حرف الجر في جمل العمل ذات الموقع الثابت:",
      template:
        "Ich arbeite in ___ Firma. Sie arbeitet in ___ Büro. Er arbeitet bei ___ Anwalt.",
      blanks: [
        { correct: "einer", options: ["einer", "eine", "einem"] },
        { correct: "einem", options: ["einem", "ein", "einer"] },
        { correct: "einem", options: ["einem", "einer", "eine"] },
      ],
      explanation:
        "في الأمثلة الواردة يأتي Dativ بعد bei، ومع in للموقع الثابت: in einer Firma، in einem Büro، bei einem Anwalt.",
      errorType: "article",
    },
    {
      id: "e12",
      type: "error-correction",
      instructionAr:
        "إذا كان المقصود أنها تعمل داخل البنك، فاختر التصحيح المناسب للجملة:",
      wrongSentence: "Meine Schwester arbeitet in eine Bank.",
      wrongWord: "eine",
      correctWord: "einer",
      options: ["einer", "eine", "einem", "ein"],
      explanation:
        "إذا كان المقصود موقع العمل الثابت داخل البنك، نقول in einer Bank؛ in تأخذ Dativ هنا جواباً عن Wo? أما معنى الاتجاه فيحتاج سياقاً مختلفاً.",
      errorType: "case",
    },
    {
      id: "e13",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر الصحيح:",
      questionDe: "Er ist Assistent und arbeitet ___ einem Zahnarzt.",
      questionAr: "هو مساعد ويعمل عند طبيب أسنان.",
      options: ["bei", "in", "an", "zu"],
      correctIndex: 0,
      explanation:
        "السياق يصف الطبيب بوصفه جهة العمل، لذلك يكون bei einem Zahnarzt مناسباً هنا.",
      optionExplanations: [
        undefined,
        "يمكن أن يشير in إلى مؤسسة أو موقع بحسب السياق؛ لكن einem Zahnarzt هنا شخصٌ هو جهة العمل، لا اسم المؤسسة أو مكانها.",
        "an لا يلائم علاقة العمل بهذا الشخص في الجملة المعطاة.",
        "zu يدل غالباً على اتجاه في هذا السياق، لا على جهة العمل المذكورة.",
      ],
      errorType: "preposition",
    },
    {
      id: "e14",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة كاملة عن العمل:",
      tokens: [
        "Ich",
        "arbeite",
        "als",
        "Ingenieur",
        "in",
        "einer",
        "Firma",
        ".",
      ],
      correctSentence: "Ich arbeite als Ingenieur in einer Firma.",
      explanation:
        "الصيغة النموذجية Ich arbeite als Ingenieur in einer Firma؛ ويقبل التمرين أيضاً Ich arbeite in einer Firma als Ingenieur، لأن ترتيب عبارتي المهنة والمكان يتسع هنا للسياق.",
      acceptedSentences: ["Ich arbeite in einer Firma als Ingenieur."],
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "transformation",
      instructionAr: "أجب عن السؤال بالمعطيات المذكورة.",
      prompt: "Wo arbeitest du? (Arbeitsort: innerhalb des Krankenhauses)",
      acceptedAnswers: [
        "Ich arbeite in einem Krankenhaus.",
        "In einem Krankenhaus.",
      ],
      sampleAnswer: "Ich arbeite in einem Krankenhaus.",
      explanation:
        "السؤال Wo? يطلب مكان العمل الثابت في المثال: in einem Krankenhaus، وصيغة einem هي Dativ للاسم المحايد بعد in المكانية.",
      errorType: "case",
    },
    {
      id: "e16",
      type: "multiple-choice",
      instructionAr: "اختر النمط المحايد المتدرّب عليه للتعريف بالمهنة:",
      questionDe: "Ich ___ Lehrer von Beruf.",
      options: ["bin", "bin ein", "arbeite", "arbeite ein"],
      correctIndex: 0,
      errorType: "article",
      explanation:
        "الهدف هنا اختيار Ich bin Lehrer للتعريف المحايد. وتظهر الأداة مع اسم موصوف مثل ein guter Lehrer؛ أما الحكم على Ich bin ein Lehrer المجردة فيحتاج سياقاً محدداً، ولا تحسمه هذه المهمة حكماً عاماً.",
      optionExplanations: [
        undefined,
        "قد ترد الأداة في سياق استعمالي مناسب؛ لا نعدّ Ich bin ein Lehrer خطأً مطلقاً، لكن السؤال يطلب النمط المحايد المتدرّب عليه.",
        "في تركيب العمل بمعنى أداء مهنة نحتاج als قبل اسم الدور: Ich arbeite als Lehrer.",
        "arbeiten ein ليس النمط المستعمل للتعريف بالمهنة؛ النمط المتدرّب عليه هو arbeiten als.",
      ],
    },
    {
      id: "e17",
      type: "error-correction",
      instructionAr: "اختر الكتابة الصحيحة لصيغة المهنة المؤنثة:",
      wrongSentence: "Meine Mutter ist Arztin.",
      wrongWord: "Arztin",
      correctWord: "Ärztin",
      options: ["Ärztin", "Arzterin", "Arztin", "Ärzterin"],
      errorType: "spelling",
      explanation:
        "في الصيغة المعجمية المؤنثة يتغير a إلى ä: der Arzt → die Ärztin؛ ويظهر تغير مشابه في Koch → Köchin، لذا تُحفظ هذه الصيغ ولا تعمم آلياً.",
    },
    {
      id: "e18",
      type: "fill-blank",
      instructionAr: "أكمل بأداة الملكية الصحيحة، مع مراعاة الفرق بين Ihr الرسمية وihr للغائبة:",
      errorType: "pronoun",
      caseSensitive: true,
      template:
        "Wir arbeiten zusammen: ___ Firma ist klein. Und wo ist ___ Büro, Herr Meier?",
      blanks: [
        {
          correct: "unsere",
          options: ["unsere", "unser", "euer", "eure"],
          errorType: "pronoun",
        },
        {
          correct: "Ihr",
          options: ["Ihr", "ihr", "euer", "dein"],
          errorType: "pronoun",
        },
      ],
      explanation:
        "Firma مؤنّثة ⇐ unsere. ومخاطبة Herr Meier رسمية ⇐ Ihr بحرف كبير مع Büro المحايد بلا نهاية.",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح أداة الملكية:",
      wrongSentence: "Das ist euer Abteilung.",
      wrongWord: "euer",
      correctWord: "eure",
      options: ["eure", "euer", "eurem", "euren"],
      errorType: "pronoun",
      explanation:
        "Abteilung مؤنث في الرفع؛ الصيغة هنا eure Abteilung. لا نختبر euere بوصفها خطأً، فهي صيغة بديلة مسجلة.",
    },
    {
      id: "e20",
      type: "multiple-choice",
      instructionAr: "اختر الحرف الصحيح:",
      questionDe: "Mein Vater arbeitet ___ Siemens.",
      questionAr: "المقصود جهة العمل، وهي شركة سيمنس.",
      options: ["bei", "in", "an", "zu"],
      correctIndex: 0,
      errorType: "preposition",
      explanation:
        "في هذا المثال يذكر اسم الشركة بوصفها جهة العمل: bei Siemens.",
    },
    {
      id: "e21",
      type: "error-correction",
      instructionAr: "في معنى العمل لدى طبيب، صحّح حرف الجر في الجملة:",
      wrongSentence: "Ich arbeite in einem Arzt.",
      wrongWord: "in",
      correctWord: "bei",
      options: ["bei", "in", "an", "zu", "mit"],
      errorType: "preposition",
      explanation:
        "المقصود أن الطبيب جهة العمل، فنقول bei einem Arzt. لا يعني ذلك أن in لا يمكن أن يصف موقع العمل في سياق آخر؛ يمكن مثلاً ذكر in einer Arztpraxis للمكان.",
    },
    {
      id: "e22",
      type: "multiple-choice",
      instructionAr:
        "في سياق مدير محدد سبق ذكره، اختر أداة النفي المناسبة:",
      questionDe: "Ich kenne ___ Chef ___.",
      options: ["den … nicht", "keinen … —", "kein … nicht", "der … nicht"],
      correctIndex: 0,
      errorType: "negation",
      explanation:
        "المدير المحدد في هذا السياق يُنفى في النمط المطلوب هكذا: Ich kenne den Chef nicht. وقد يغيّر تقديم nicht بؤرة النفي في تقابل؛ لا تستبدل أداة التعريف هنا بـkein.",
      optionExplanations: [
        undefined,
        "Ich kenne keinen Chef جملة ممكنة بمعنى لا أعرف أي مدير؛ السؤال يحدد مديراً سبق ذكره، لذا يختلف المقصود.",
        "لا يلائم kein … nicht جنس Chef وحالته في هذا التركيب.",
        "Chef مفعول به هنا، لذلك لا تناسبه صيغة الرفع der.",
      ],
    },
    {
      id: "e23",
      type: "transformation",
      instructionAr: "انفِ الجملة بالأداة الصحيحة:",
      prompt: "Ich habe einen Bruder. → (انفِها)",
      errorType: "negation",
      acceptedAnswers: ["Ich habe keinen Bruder.", "Ich habe keinen Bruder"],
      sampleAnswer: "Ich habe keinen Bruder.",
      explanation:
        "في النفي المحايد لهذا المثال نستبدل صيغة einen بـkeinen. لا تحوّل هذا التدريب إلى حكم يمنع كل استعمال تقابلي لـnicht ein.",
    },
    {
      id: "e24",
      type: "word-ordering",
      instructionAr:
        "رتّب الكلمات في النمط المحايد المتدرّب عليه لنفي العمل يوم السبت (من دون مقابلة يوم بآخر):",
      tokens: ["Wir", "arbeiten", "am", "Samstag", "nicht"],
      errorType: "word-order",
      correctSentence: "Wir arbeiten am Samstag nicht.",
      explanation:
        "الصيغة النموذجية هنا Wir arbeiten am Samstag nicht، ويقبل التمرين أيضاً Wir arbeiten nicht am Samstag. قد تختلف بؤرة النفي بحسب السياق؛ فلا يثبت هذا التمرين قاعدة «nicht دائماً في النهاية».",
      acceptedSentences: ["Wir arbeiten nicht am Samstag."],
    },
    {
      id: "e25",
      type: "matching",
      instructionAr: "صِل كلّ حالة بأداتها الصحيحة:",
      errorType: "negation",
      pairs: [
        { left: "Ich arbeite heute ___.", right: "nicht في هذا المثال المحايد" },
        { left: "Ich habe ___ Zeit.", right: "keine قبل الاسم المؤنث هنا" },
        { left: "Das Büro ist ___ groß.", right: "nicht قبل الصفة في المثال" },
        { left: "Ich kenne den Chef ___.", right: "nicht مع المدير المحدد في هذا السياق" },
        { left: "Ich rufe heute ___ an.", right: "nicht قبل الجزء المنفصل هنا" },
      ],
      explanation:
        "طابق الأداة وموضعها مع الجملة المحددة. هذه أمثلة تدريبية؛ لا تعمم موضع nicht على كل تركيب أو كل بؤرة نفي.",
    },
    {
      id: "e26",
      type: "fill-blank",
      instructionAr: "أكمل أداة النكرة المناسبة في حالة Dativ بعد in للمكان الثابت:",
      errorType: "case",
      template: "Er arbeitet in ___ Büro und sie arbeitet in ___ Schule.",
      blanks: [
        {
          correct: "einem",
          options: ["einem", "ein", "einer", "einen"],
          errorType: "case",
        },
        {
          correct: "einer",
          options: ["einer", "eine", "einem", "einen"],
          errorType: "case",
        },
      ],
      explanation:
        "بعد in في أمثلة المكان الثابت يأتي Dativ: das Büro → in einem Büro، وdie Schule → in einer Schule. تعلّم صيغة الأداة مع الاسم وحرف الجر؛ لا تساوِ اسم الحالة الألمانية بحالة عربية.",
    },
  ];


export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich arbeite Lehrer.",
        right: "Ich arbeite als Lehrer.",
        whyAr:
          "في النمط الذي يعني أداء مهنة، نربط arbeiten باسم الدور بـals. أما Ich bin Lehrer فهو نمط آخر صحيح للتعريف بالمهنة.",
      },
      {
        wrong: "Ich habe kein Bruder.",
        right: "Ich habe keinen Bruder.",
        whyAr:
          "Bruder مذكر ومفعول به في هذا المثال، لذلك نختار keinen. تتغير صيغة kein بحسب الاسم والحالة.",
      },
      {
        wrong: "Ich arbeite in eine Firma.",
        right: "Ich arbeite in einer Firma.",
        whyAr:
          "إذا كان المقصود مكان العمل الثابت، يأتي Dativ بعد in في هذا المثال: in einer Firma. يختلف تركيب الاتجاه مثل Ich gehe in eine Firma.",
      },
    ],
    eselsbruecken: [
      "احفظ صيغاً مهنية كاملة: Lehrer → Lehrerin، Arzt → Ärztin، Koch → Köchin؛ ليست كل صيغة جمعاً آلياً لللاحقة -in.",
      "ابدأ بمعنى الجملة وتركيب الاسم: Ich habe keine Zeit / Ich arbeite heute nicht. ثم افحص السياق وموضع النفي.",
    ],
    culturalNote: {
      title: "التحية في مكان العمل",
      content:
        "قد تسمع Guten Morgen عند بداية يوم العمل، وتتغير عبارات التحية والمغادرة بحسب المنطقة والمكان والعلاقة. تعلّم العبارة التي تسمعها في سياقها، ولا تفترض أن تحيةً واحدة أو قاعدة مخاطبة واحدة تناسب جميع أماكن العمل.",
    },
  };
