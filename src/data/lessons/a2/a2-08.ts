import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-08: المواصلات والتنقل — Komparativ/Superlativ + التذاكر
 */
export const lessonA208: Lesson = {
  id: "a2-08",
  unitId: "a2-08",
  level: "A2",
  order: 1,
  titleDe: "Mobil sein",
  titleAr: "المواصلات والتنقل",
  duration: 35,
  summary:
    "شراء التذاكر وقراءة الجداول، المقارنة والتفضيل (Komparativ/Superlativ) مع الشواذ، ومقارنة وسائل النقل: Der Zug ist schneller als der Bus.",

  lernziele: [
    { id: "z1", de: "Ich kann Fahrkarten kaufen.", ar: "أن أشتري تذاكر وأقرأ جداول المواصلات." },
    { id: "z2", de: "Ich kann den Komparativ bilden: schneller als.", ar: "أن أصوغ المقارنة: أسرع من (schneller als)." },
    { id: "z3", de: "Ich kenne die Superlative: am schnellsten.", ar: "أن أصوغ التفضيل: الأسرع (am schnellsten)." },
    { id: "z4", de: "Ich kenne die unregelmäßigen Formen: gut, besser, am besten.", ar: "أن أتقن الشواذ: جيد، أفضل، الأفضل." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قل: «القطار أسرع من الحافلة» بالعربية — لاحظت أنك أضفت «أفعل» للصفة (سريع → أسرع). الألمانية تفعل نفس الشيء لكن بإضافة -er: schnell → schneller! وتضيف كلمة als (من). والتشابه مذهل مع العربية!",
    motivatingQuestionDe: "Was ist schneller: der Zug oder das Auto?",
    contextAr:
      "نتنقل اليوم: تذاكر وجداول، ثم نضيف المقارنة والتفضيل — وستكتشف أن الألمانية تشبه العربية في «أفعل التفضيل» لكن بطريقتها الخاصة.",
    contextDe: "Der Zug ist schneller als der Bus.",
    connectionToPreviousAr: "تتذكر الأرقام والوقت من A1. اليوم نضيف المقارنة لتختار بين وسائل النقل: أسرع، أرخص، أفضل.",
    activateVocabulary: [
      { de: "die Fahrkarte", ar: "التذكرة" },
      { de: "der Zug", ar: "القطار" },
      { de: "der Bus", ar: "الحافلة" },
      { de: "umsteigen", ar: "يغيّر وسيلة" },
      { de: "die Haltestelle", ar: "محطة التوقف" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر الأرقام:",
      questionDe: "Wie viel ist „zwei plus drei“?",
      options: ["fünf", "vier", "sechs", "drei"],
      correctIndex: 0,
      explanation: "2 + 3 = 5 = fünf (درس التسوق).",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A1: اختر حرف الجر:",
      questionDe: "Ich fahre ___ Berlin.",
      options: ["nach", "zu", "in", "aus"],
      correctIndex: 0,
      explanation: "المدن تأخذ nach (درس المدينة).",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من A1: أكمل الكلمة:",
      template: "die ___ = المحطة (قطار)",
      blanks: [
        { correct: "Haltestelle", options: ["Haltestelle", "Fahrkarte", "U-Bahn"] },
      ],
      explanation: "Haltestelle = محطة التوقف.",
      errorType: "vocabulary",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "المقارنة والتفضيل (Komparativ und Superlativ)",
      titleDe: "schnell, schneller, am schnellsten",
      explanationAr:
        "المقارنة: صفة + er + als: Der Zug ist schneller als der Bus (أسرع من). التفضيل: am + صفة + sten: Der Zug ist am schnellsten (الأسرع). الشواذ: gut → besser → am besten، viel → mehr → am meisten، gern → lieber → am liebsten، groß → größer → am größten (مع Umlaut).",
      whyAr:
        "لماذا -er مثل العربية «أفعل»؟ لأن الألمانية والهندو-أوروبية كلها تبني المقارنة بإضافة لاحقة — حتى العربية (أفعل) والإنكليزية (more/faster). والتشابه مع العربية مدهش: schnell → schneller مثل سريع → أسرع!",
      table: {
        title: "المقارنة والتفضيل",
        columns: ["الصفة", "المقارنة (+er als)", "التفضيل (am ... sten)"],
        rows: [
          { label: "schnell", cells: ["schneller als", "am schnellsten"] },
          { label: "groß", cells: ["größer als", "am größten"] },
          { label: "billig", cells: ["billiger als", "am billigsten"] },
          { label: "gut", cells: ["besser als", "am besten (شاذ)"] },
          { label: "viel", cells: ["mehr als", "am meisten (شاذ)"] },
          { label: "gern", cells: ["lieber", "am liebsten (شاذ)"] },
        ],
      },
      examples: [
        { de: "Der Zug ist schneller als der Bus.", ar: "القطار أسرع من الحافلة." },
        { de: "Das Flugzeug ist am schnellsten.", ar: "الطائرة الأسرع." },
        { de: "Deutsch ist schwerer als ich dachte.", ar: "الألمانية أصعب مما ظننت." },
        { de: "Ich reise lieber mit dem Zug.", ar: "أفضل السفر بالقطار." },
        { de: "Die Bahn ist billiger als das Taxi.", ar: "القطار أرخص من التاكسي." },
      ],
      comparisonWithArabic:
        "المقارنة: سريع → أسرع (أضف «أفعل») — والألمانية: schnell → schneller (أضف er). التفضيل: الأسرع = am schnellsten. والتشابه المذهل: als = من: schneller als = أسرع من. مطابقة شبه كاملة!",
      eselsbruecke:
        "«+er مثل أفعل»: schneller = أسرع. «am + sten مثل الأفعَل»: am schnellsten = الأسرع. والشواذ الثلاثة: gut→besser→am besten (جيد-أفضل-الأفضل).",
      commonMistakes: [
        { wrong: "schneller wie (خطأ شائع من تأثير الإنجليزية)", right: "schneller als", whyAr: "المقارنة بـ als (من) وليس wie (مثل)." },
        { wrong: "am besten أم besser؟", right: "besser = أفضل (مقارنة بين اثنين). am besten = الأفضل (أكثر من اثنين)", whyAr: "besser مع als، am besten للتفضيل المطلق." },
        { wrong: "gut → guter (تصريف خاطئ)", right: "gut → besser (شاذ)", whyAr: "الشواذ: gut/besser/am besten — لا تتبع القاعدة." },
      ],
      relatedRuleComparison: {
        title: "als أم wie؟",
        content: "als = من (مقارنة غير متساوية): größer als. wie = مثل (متساوية): so groß wie (بنفس الحجم مثل). Ich bin so alt wie du = أنا بنفس عمرك.",
      },
    },
    {
      id: "t2",
      titleAr: "شراء التذاكر والمواصلات",
      titleDe: "Fahrkarten und Verkehrsmittel",
      explanationAr:
        "وسائل النقل: der Zug (قطار)، der Bus (حافلة)، die U-Bahn (مترو)، die Straßenbahn (ترام)، das Taxi (تاكسي)، das Fahrrad (دراجة). عبارات التذاكر: Eine Fahrkarte nach Berlin, bitte! (تذكرة إلى برلين)، Einfach (ذهاب) أو Hin und zurück (ذهاب وعودة)، am Automaten (من الجهاز)، am Schalter (من الشباك).",
      whyAr:
        "لماذا تتعلم عبارات التذاكر؟ لأنها من أكثر المواقف اليومية تكراراً — والألمان يسألونك دائماً: Einfach oder hin und zurück? فجهّز إجابتك.",
      table: {
        title: "عبارات المواصلات",
        columns: ["الموقف", "الألمانية", "العربية"],
        rows: [
          { label: "الطلب", cells: ["Eine Fahrkarte nach Berlin, bitte!", "تذكرة إلى برلين من فضلك!"] },
          { label: "النوع", cells: ["Einfach oder hin und zurück?", "ذهاب أم ذهاب وعودة؟"] },
          { label: "السؤال", cells: ["Wann fährt der Zug ab?", "متى ينطلق القطار؟"] },
          { label: "التغيير", cells: ["Wo muss ich umsteigen?", "أين يجب أن أغيّر؟"] },
          { label: "الوصول", cells: ["Wann kommen wir an?", "متى نصل؟"] },
        ],
      },
      examples: [
        { de: "Eine Fahrkarte nach Berlin, bitte.", ar: "تذكرة إلى برلين من فضلك." },
        { de: "Hin und zurück, bitte.", ar: "ذهاب وعودة من فضلك." },
        { de: "Der Zug fährt um zehn Uhr ab.", ar: "ينطلق القطار في العاشرة." },
        { de: "Sie müssen in Hamburg umsteigen.", ar: "يجب أن تغيّروا في هامبورغ." },
        { de: "Die U-Bahn ist schneller als das Taxi.", ar: "المترو أسرع من التاكسي." },
      ],
      comparisonWithArabic:
        "«ذهاب وعودة» = hin und zurück (هناك ورجوع). «أين أغيّر؟» = Wo muss ich umsteigen؟ — الأفعال المنفصلة abfahren (ينطلق) وankommen (يصل) ستتكرر كثيراً في السفر.",
      eselsbruecke:
        "«هين أوند تسوروك = ذهاب وعودة» — احفظها كوحدة واحدة: Hin und zurück! و«أمستايغن = يغيّر»: مثل «تستايغ» (تصعد) — غيّر الصعود!",
      commonMistakes: [
        { wrong: "eine Fahrkarte zu Berlin", right: "eine Fahrkarte nach Berlin", whyAr: "التذاكر تأخذ nach: nach Berlin." },
        { wrong: "Der Zug fährt ab um zehn (ترتيب خاطئ)", right: "Der Zug fährt um zehn ab.", whyAr: "البادئة ab في النهاية (فعل منفصل)." },
        { wrong: "die U-Bahn مؤنثة أم محايدة؟", right: "die U-Bahn (مؤنث)", whyAr: "Bahn مؤنثة → die U-Bahn." },
      ],
      relatedRuleComparison: {
        title: "fahren أم gehen؟",
        content: "fahren = يذهب بوسيلة (بالقطار/السيارة): Ich fahre mit dem Zug. gehen = يمشي: Ich gehe zu Fuß. السؤال الأول: بمركبة أم مشياً؟",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "شراء تذكرة",
        lines: [
          { speaker: "Sami", de: "Guten Tag! Eine Fahrkarte nach München, bitte.", ar: "نهارك سعيد! تذكرة إلى ميونخ من فضلك." },
          { speaker: "Schalterbeamte", de: "Einfach oder hin und zurück?", ar: "ذهاب أم ذهاب وعودة؟" },
          { speaker: "Sami", de: "Hin und zurück, bitte. Wie viel kostet das?", ar: "ذهاب وعودة من فضلك. بكم؟" },
          { speaker: "Schalterbeamte", de: "Achtundvierzig Euro.", ar: "ثمانية وأربعون يورو." },
          { speaker: "Sami", de: "Wann fährt der nächste Zug ab?", ar: "متى ينطلق القطار التالي؟" },
          { speaker: "Schalterbeamte", de: "Um zehn Uhr fünfundzwanzig, von Gleis drei.", ar: "في العاشرة وخمس وعشرين دقيقة، من الرصيف الثالث." },
        ],
      },
      {
        id: "l2",
        title: "مقارنة وسائل النقل",
        lines: [
          { speaker: "Anna", de: "Wie kommst du zur Arbeit?", ar: "كيف تذهب إلى العمل؟" },
          { speaker: "Karim", de: "Mit der U-Bahn. Sie ist schneller als der Bus.", ar: "بالمترو. هو أسرع من الحافلة." },
          { speaker: "Anna", de: "Und ich fahre mit dem Fahrrad. Es ist gesünder!", ar: "وأنا أذهب بالدراجة. إنها أصح!" },
          { speaker: "Karim", de: "Stimmt. Aber am schnellsten ist das Motorrad!", ar: "صحيح. لكن الأسرع هي الدراجة النارية!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was kauft Sami?",
        questionAr: "ماذا يشتري سامي؟",
        options: ["Hin und zurück nach München", "Einfach nach München", "Einfach nach Berlin", "Hin und zurück nach Hamburg"],
        correctIndex: 0,
        explanation: "قال: Hin und zurück nach München — ذهاب وعودة إلى ميونخ.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann fährt der Zug ab?",
        questionAr: "متى ينطلق القطار؟",
        options: ["um 10:25", "um 10:05", "um 11:25", "um 9:25"],
        correctIndex: 0,
        explanation: "قالت: Um zehn Uhr fünfundzwanzig — 10:25.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist am schnellsten?",
        questionAr: "ما الأسرع؟",
        options: ["das Motorrad", "die U-Bahn", "das Fahrrad", "der Bus"],
        correctIndex: 0,
        explanation: "قال كريم: Am schnellsten ist das Motorrad — الدراجة النارية.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات النقل: ab، an، وsch",
    items: [
      { de: "der Zug", ar: "القطار", note: "u قصيرة + g = خ: تسوخ" },
      { de: "die Fahrkarte", ar: "التذكرة", note: "h يطيل a: فار-كارته" },
      { de: "umsteigen", ar: "يغيّر", note: "ei = آي: أوم-شتايغن" },
      { de: "die Straßenbahn", ar: "الترام", note: "st = شت + ß = سّ: شتراسن-بان" },
      { de: "das Fahrrad", ar: "الدراجة", note: "fahr + rad: فار-رات" },
      { de: "der Schalter", ar: "الشباك", note: "sch = ش: شالتِر" },
    ],
    tip: "Straßenbahn كلمة طويلة: شتراسن-بان (شارع + قطار). قسّم الكلمات المركبة لمقاطع صغيرة دائماً.",
    shadowing: [
      { de: "Der Zug ist schneller als der Bus.", ar: "القطار أسرع من الحافلة.", tip: "schneller = شنِلِر (sch)" },
      { de: "Ich fahre mit der U-Bahn.", ar: "أذهب بالمترو.", tip: "U-Bahn = أُو-بان" },
      { de: "Wo muss ich umsteigen?", ar: "أين يجب أن أغيّر؟", tip: "umsteigen = أوم-شتايغن" },
      { de: "Das Flugzeug ist am schnellsten.", ar: "الطائرة الأسرع.", tip: "schnellsten = شنِلستن" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة مقارنة:",
      prompt: "قارن القطار والحافلة: (القطار أسرع من الحافلة)",
      acceptedAnswers: ["Der Zug ist schneller als der Bus", "Der Zug ist schneller als der Bus."],
      sampleAnswer: "Der Zug ist schneller als der Bus.",
      explanation: "الصيغة: A ist + صفة+er + als + B.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بالمقارنة الصحيحة:",
      template: "Das Auto ist ___ als das Fahrrad. (سريع) Die U-Bahn ist ___ als das Taxi. (رخيص)",
      blanks: [
        { correct: "schneller", options: ["schneller", "schnell", "am schnellsten"] },
        { correct: "billiger", options: ["billiger", "billig", "am billigsten"] },
      ],
      explanation: "المقارنة: schnell → schneller، billig → billiger (+er).",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Eine Fahrkarte nach Berlin, bitte.",
      explanation: "تذكرة إلى برلين من فضلك — تذكر: nach + مدينة.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر المقارنة الصحيحة:",
      questionDe: "Der Zug ist ___ als der Bus.",
      options: ["schneller", "schnell", "am schnellsten", "schnellen"],
      correctIndex: 0,
      explanation: "المقارنة بين اثنين: schneller als.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر التفضيل الصحيح:",
      questionDe: "Das Flugzeug ist ___.",
      options: ["am schnellsten", "schneller", "schnell", "schnellste"],
      correctIndex: 0,
      explanation: "التفضيل المطلق: am schnellsten.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل وسيلة النقل بمعناها:",
      pairs: [
        { left: "der Zug", right: "القطار" },
        { left: "die U-Bahn", right: "المترو" },
        { left: "das Fahrrad", right: "الدراجة" },
        { left: "die Straßenbahn", right: "الترام" },
      ],
      explanation: "أربع وسائل أساسية — مع أدواتها.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["schneller", "Der", "Zug", "als", "Bus", "ist", "dem", "."],
      correctSentence: "Der Zug ist schneller als der Bus.",
      explanation: "القطار أسرع من الحافلة: Der Zug + ist + schneller als der Bus.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Zug ist schneller wie der Bus.",
      wrongWord: "wie",
      correctWord: "als",
      options: ["als", "wie", "dann", "denn"],
      explanation: "المقارنة بـ als وليس wie.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالشاذ الصحيح:",
      template: "gut → ___ → am besten · viel → ___ → am meisten · gern → ___ → am liebsten",
      blanks: [
        { correct: "besser", options: ["besser", "beste", "guter"] },
        { correct: "mehr", options: ["mehr", "vieler", "meisten"] },
        { correct: "lieber", options: ["lieber", "lieb", "lieben"] },
      ],
      explanation: "الشواذ: besser، mehr، lieber.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل إلى تفضيل:",
      prompt: "Das Taxi ist teuer. → (التفضيل: الأغلى)",
      acceptedAnswers: ["Das Taxi ist am teuersten", "Das Taxi ist am teuersten."],
      sampleAnswer: "Das Taxi ist am teuersten.",
      explanation: "التفضيل: am + teuer + sten = am teuersten.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Hin und zurück",
      questionAr: "ما معنى العبارة؟",
      options: ["ذهاب وعودة", "ذهاب فقط", "الرصيف الثالث", "تذكرة واحدة"],
      correctIndex: 0,
      explanation: "Hin (هناك) + zurück (رجوع) = ذهاب وعودة.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Der Zug fährt ab um zehn Uhr.",
      wrongWord: "ab um zehn",
      correctWord: "um zehn ab",
      options: ["um zehn ab", "ab um zehn", "um ab zehn", "zehn um ab"],
      explanation: "الفعل المنفصل: fährt ... ab — البادئة في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wo muss ich umsteigen?",
      explanation: "أين يجب أن أغيّر؟ — umsteigen فعل منفصل (أيضاً في هذا السؤال مع muss).",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "schneller wie (تأثير الإنجليزية)", right: "schneller als", whyAr: "المقارنة بـ als دائماً." },
      { wrong: "Ich bin besser als dich.", right: "Ich bin besser als du.", whyAr: "بعد als يأتي الرفع (Nominativ): als du (وليس dich)." },
      { wrong: "eine Fahrkarte zu Berlin", right: "eine Fahrkarte nach Berlin", whyAr: "التذاكر مع nach." },
    ],
    eselsbruecken: [
      "«+er مثل أفعل، am+sten مثل الأفعَل»: schneller/am schnellsten = أسرع/الأسرع.",
      "«الشواذ الثلاثة»: gut→besser→am besten. احفظها كأغنية واحدة.",
    ],
    culturalNote: {
      title: "القطارات الألمانية",
      content:
        "القطار الألماني (Deutsche Bahn) دقيق جداً: «pünktlich» صفة فخر. والقطارات السريعة: ICE (Intercity-Express) وIC. والتذكرة «Sparpreis» (سعر مخفض) أرخص إذا حجزت مبكراً. وفي المحطات الكبرى: «Gleis» = الرصيف — ابحث عن رقم رصيفك!",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المقارنة الصحيحة:",
      questionDe: "Deutsch ist ___ als Englisch. (صعب)",
      options: ["schwerer", "schwer", "am schwersten", "schwerste"],
      correctIndex: 0,
      explanation: "المقارنة: schwer → schwerer als.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر التفضيل الصحيح:",
      questionDe: "Sie ist ___ in der Klasse. (الأفضل)",
      options: ["am besten", "besser", "gut", "beste"],
      correctIndex: 0,
      explanation: "التفضيل: am besten (شاذ).",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["als", "Das", "Taxi", "ist", "Auto", "dem", "teurer", "."],
      correctSentence: "Das Taxi ist teurer als das Auto.",
      explanation: "التاكسي أغلى من السيارة — teurer als.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich gehe lieber mit dem Zug als mit der Bus.",
      wrongWord: "der Bus",
      correctWord: "dem Bus",
      options: ["dem Bus", "den Bus", "das Bus", "der Bus"],
      explanation: "mit يأخذ Dativ: mit dem Bus.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالشاذ:",
      template: "Ich mag Fußball. Aber Tennis mag ich ___. Und am ___ mag ich Schwimmen.",
      blanks: [
        { correct: "lieber", options: ["lieber", "besser", "mehr"] },
        { correct: "liebsten", options: ["liebsten", "besten", "meisten"] },
      ],
      explanation: "الترتيب: mag → lieber → am liebsten.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Fahrkarte", ar: "التذكرة", example: "Eine Fahrkarte nach Berlin, bitte!", exampleAr: "تذكرة إلى برلين من فضلك!", level: "A2" },
    { id: "fc2", de: "der Zug / die U-Bahn", ar: "القطار / المترو", example: "Der Zug ist schnell.", exampleAr: "القطار سريع.", level: "A2" },
    { id: "fc3", de: "umsteigen", ar: "يغيّر (وسيلة)", example: "Wo muss ich umsteigen?", exampleAr: "أين يجب أن أغيّر؟", level: "A2" },
    { id: "fc4", de: "die Haltestelle", ar: "محطة التوقف", example: "Die Haltestelle ist hier.", exampleAr: "المحطة هنا.", level: "A2" },
    { id: "fc5", de: "hin und zurück", ar: "ذهاب وعودة", example: "Einmal hin und zurück!", exampleAr: "ذهاب وعودة!", level: "A2" },
    { id: "fc6", de: "schneller als", ar: "أسرع من", example: "Der Zug ist schneller als der Bus.", exampleAr: "القطار أسرع من الحافلة.", level: "A2" },
    { id: "fc7", de: "am schnellsten", ar: "الأسرع", example: "Das Flugzeug ist am schnellsten.", exampleAr: "الطائرة الأسرع.", level: "A2" },
    { id: "fc8", de: "gut, besser, am besten", ar: "جيد، أفضل، الأفضل", example: "Mein Deutsch ist besser als vorher.", exampleAr: "ألمانيّتي أفضل من قبل.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a2-08-1", type: "simplify-announcement",
      titleAr: "بسّط جدول قطارات بالعربية لسائح",
      sourceDe: "Der Zug nach München fährt um 14:30 von Gleis 4. Ankunft um 17:45. Umsteigen in Nürnberg.",
      taskAr: "أرشد سائحاً بالعربية: وقت الانطلاق، الرصيف، الوصول، ومكان التغيير.",
      modelAnswerAr: "«قطار ميونخ ينطلق الساعة 2:30 من الرصيف 4. الوصول 5:45. غيّر القطار في نورنبرغ.»",
      keyPointsAr: ["نقلت وقت الانطلاق والرصيف", "ذكرت وقت الوصول", "نقلت مكان التغيير (نورنبرغ)"],
    },
  ],
      interaction: [
    {
      id: "int-a2-08-1",
      scenarioAr: "في محطة القطار — تشتري تذكرة وتسأل عن المنصة.",
      scenarioDe: "Am Bahnhof — du kaufst eine Fahrkarte.",
      strategyAr: "الاستراتيجية: شراء تذكرة وفهم المعلومات.",
      rounds: [
        {
          speakerDe: "Guten Tag! Eine Fahrkarte nach München, bitte.",
          speakerAr: "نهارك سعيد! تذكرة إلى ميونخ من فضلك.",
          options: [
            { de: "Einfach oder hin und zurück?", ar: "ذهاب فقط أم ذهاب وعودة؟", best: true, replyDe: "Einfach, bitte. Was kostet sie?", replyAr: "ذهاب فقط من فضلك. كم سعرها؟" },
            { de: "Ich möchte eine Banane.", ar: "أريد موزة.", best: false, replyDe: "Wir verkaufen keine Bananen am Schalter.", replyAr: "لا نبيع الموز في الشباك." },
          ],
        },
        {
          speakerDe: "Das kostet 39 Euro. Von welchem Gleis fährt der Zug?",
          speakerAr: "الثمن 39 يورو. من أي رصيف ينطلق القطار؟",
          options: [
            { de: "Von Gleis 4, um 14:30 Uhr.", ar: "من الرصيف 4، الساعة 2:30.", best: true, replyDe: "Danke schön! Gute Reise!", replyAr: "شكراً جميلاً! رحلة موفقة!" },
            { de: "Vom Gleis in China.", ar: "من الرصيف في الصين.", best: false, replyDe: "Das ist hier der Bahnhof, nicht China.", replyAr: "هذه محطة القطار هنا، وليست الصين." },
          ],
        },
      ],
    },
  ],

};