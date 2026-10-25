/**
 * b1-07 — القراءة والاستماع والنطق والكتابة
 */
import type { Lesson } from "@/types/lesson";

export const listening: Lesson["listening"] = {
  items: [
    {
      id: "l1",
      title: "نقاش سياسي",
      audioNoteAr: "حوار تدريبي بأشخاص وذكريات خيالية؛ يُقرأ بصوت الجهاز (TTS)، وليس تسجيلاً بشرياً.",
      lines: [
        { speaker: "Moderator", de: "Als die Mauer fiel, war ich zehn Jahre alt.", ar: "عندما سقط الجدار كنت في العاشرة." },
        { speaker: "Sami", de: "Ich war nicht geboren! Aber ich weiß viel über die Geschichte.", ar: "لم أكن قد وُلدت! لكنني أعرف الكثير عن التاريخ." },
        { speaker: "Moderator", de: "Wann interessierst du dich für Politik?", ar: "متى تهتم بالسياسة؟" },
        { speaker: "Sami", de: "Seitdem ich in Deutschland wohne, interessiere ich mich dafür.", ar: "منذ أن أسكن في ألمانيا وأنا مهتم بها." },
        { speaker: "Moderator", de: "Warum?", ar: "لماذا؟" },
        { speaker: "Sami", de: "Weil Politik unser Leben beeinflusst.", ar: "لأن السياسة تؤثر في حياتنا." },
      ],
    },
    {
      id: "l2",
      title: "قبل الانتخابات",
      audioNoteAr: "حوار تدريبي تمثيلي؛ يُقرأ بصوت الجهاز (TTS)، وليس تسجيلاً بشرياً.",
      lines: [
        { speaker: "Anna", de: "Bevor wir wählen, müssen wir die Programme lesen.", ar: "قبل أن ننتخب يجب أن نقرأ البرامج." },
        { speaker: "Karim", de: "Ja. Während der Wahlkampf läuft, gibt es viel Werbung.", ar: "نعم. بينما تجري الحملة الانتخابية، توجد إعلانات كثيرة." },
        { speaker: "Anna", de: "Nachdem ich die Programme gelesen habe, kann ich entscheiden.", ar: "بعد أن أقرأ البرامج أستطيع أن أقرر." },
        { speaker: "Karim", de: "Genau. Wichtig ist, dass wir wählen gehen.", ar: "بالضبط. المهم أن نذهب للانتخاب." },
      ],
    },
    {
      id: "l3",
      title: "اختيار الأولويات",
      audioNoteAr: "الحوار مثال تدريبي بآراء وتجربة شخصية خيالية، وليس تقريراً عن حيّ أو حزب. الملفات مولّدة آلياً (TTS)، وليست تسجيلات بشرية. الاختبار الآلي يفحص فك الترميز ومؤشرات الإشارة فقط، ولا يثبت وضوح النطق أو طبيعية الأداء أو مطابقة الصوت للنص.",
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
      id: "q1", itemId: "l1", type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
      questionDe: "Seit wann interessiert sich Sami für Politik?",
      questionAr: "منذ متى يهتم سامي بالسياسة؟",
      options: ["seitdem er in Deutschland wohnt", "seit dem Mauerfall", "seit er zehn Jahre alt war", "seit ganz kurzer Zeit erst"],
      correctIndex: 0,
      explanation: "قال سامي: Seitdem ich in Deutschland wohne, interessiere ich mich dafür.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«seit dem Mauerfall» تركيب صحيح، لكنه لا يطابق ما قاله سامي عن بداية اهتمامه.",
        "لم يقل سامي إنه يهتم بالسياسة منذ أن كان في العاشرة.",
        "لم يقل إنه بدأ الاهتمام منذ وقت قصير؛ بل ربطه بالإقامة في ألمانيا.",
      ],
    },
    {
      id: "q2", itemId: "l2", type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Was müssen sie vor der Wahl machen?",
      questionAr: "ماذا يجب أن يفعلوا قبل الانتخاب؟",
      options: ["die Programme lesen", "Werbung dafür machen", "demonstrieren gehen", "weiterarbeiten"],
      correctIndex: 0,
      explanation: "قالت آنا: Bevor wir wählen, müssen wir die Programme lesen.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "الإعلانات ذُكرت بوصفها شيئاً يحدث أثناء الحملة، لا ما طلبته آنا قبل الانتخاب.",
        "لم تذكر آنا التظاهر بوصفه عملاً يجب فعله قبل الانتخاب.",
        "لم تذكر آنا مواصلة العمل بوصفها عملاً يجب فعله قبل الانتخاب.",
      ],
    },
    {
      id: "q3", itemId: "l2", type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wann kann Anna entscheiden?",
      questionAr: "متى تستطيع آنا أن تقرر؟",
      options: ["nachdem sie die Programme gelesen hat", "schon lange vor der eigentlichen Wahl", "während des ganzen Wahlkampfs", "morgen früh um acht Uhr im Büro"],
      correctIndex: 0,
      explanation: "قالت: Nachdem ich die Programme gelesen habe, kann ich entscheiden.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "لا يحدد النص وقتاً طويلاً قبل الانتخاب؛ بل تربط آنا قرارها بقراءة البرامج.",
        "لم تقل آنا إنها ستقرر أثناء الحملة كلها؛ بل بعد القراءة.",
        "لم تذكر آنا موعداً أو مكاناً محدداً كهذا.",
      ],
    },
    {
      id: "q4", itemId: "l3", type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
      questionDe: "Was ist Karim bei der Verkehrspolitik besonders wichtig?",
      questionAr: "ما الأمر المهم خصوصاً لكريم في سياسة النقل؟",
      options: ["gute Verbindungen mit dem Bus", "mehr Parkplätze im Stadtzentrum", "eine neue Bahn zum Flughafen", "günstige Fahrräder für alle"],
      correctIndex: 0,
      explanation: "قال كريم: Gute Busverbindungen.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "لم يذكر كريم مواقف السيارات؛ بل تحدّث عن الحافلات في حيّه.",
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
    { de: "die Politik", ar: "السياسة", note: "في Politik تُنطق k الأخيرة كافاً ألمانية [k]." },
    { de: "das Gesetz", ar: "القانون", note: "في النطق المعياري: g = [g]، وs بين حركتين = [z]، وtz = [ts]." },
    { de: "die Wahl", ar: "الانتخاب", note: "w = [v]، وh لا يُنطق هنا ويطيل الحركة السابقة." },
    { de: "der Bürger", ar: "المواطن", note: "ü في Bürger حركة قصيرة مدوّرة [ʏ]؛ ويختلف نطق r باختلاف المتكلم والمنطقة." },
    { de: "die Regierung", ar: "الحكومة", note: "ie تمثل [iː]؛ لا يمكن ضمان تمثيل صوت ألماني دقيق بحروف عربية تقريبية." },
    { de: "das Parlament", ar: "البرلمان", note: "تُنطق الكلمة تقريباً [paʁlaˈmɛnt]؛ والنطق التقريبي العربي ليس بديلاً عن التسجيل." },
  ],
  tip: "استمع إلى النطق الألماني الفعلي إن توفر؛ الكتابة العربية هنا تقريبية ولا تمثل بدقة أصواتاً مثل ü وr والحركات القصيرة والطويلة.",
  shadowing: [
    { de: "Als ich jung war, war vieles anders.", ar: "عندما كنت صغيراً، كان كثير من الأشياء مختلفاً.", tip: "تُظهر الجملة فترة ماضية محددة مع als؛ وليس المقصود أن كل استعمال لـals حدث لحظي." },
    { de: "Wenn ich Zeit habe, lese ich.", ar: "إذا كان عندي وقت أقرأ." , tip: "هنا wenn لشرط حاضر؛ ولها استعمالات أخرى، منها التكرار في الماضي." },
    { de: "Während er arbeitet, koche ich.", ar: "بينما يعمل أطبخ.", tip: "während = تزامن؛ وw الألمانية قريب من [v]." },
    { de: "Nachdem ich gegessen habe, gehe ich schlafen.", ar: "بعد أن أتناول الطعام أذهب للنوم.", tip: "الجملة التابعة تسبق زمنياً الرئيسية في هذا المثال؛ و[خ] تقريب صوتي فقط لصوت ch." },
  ],
};

export const writing: NonNullable<Lesson["writing"]> = [
  {
    id: "w1", type: "transformation", instructionAr: "اكتب جملة als:",
    prompt: "اكتب: «عندما كنت صغيراً، كان كثير من الأشياء مختلفاً»",
    acceptedAnswers: ["Als ich jung war, war vieles anders", "Als ich klein war, war vieles anders"],
    sampleAnswer: "Als ich jung war, war vieles anders.",
    explanation: "تستعمل als هنا لوقت/حالة ماضية محددة؛ ليست القاعدة أنها لحظة قصيرة فقط.", errorType: "grammar",
  },
  {
    id: "w2", type: "fill-blank", instructionAr: "أكمل بـ als/wenn/während/bevor/nachdem:",
    template: "___ ich jung war, lebte ich in Tunis. (فترة ماضية محددة) ___ ich Zeit habe, lerne ich. (شرط) ___ er arbeitet, hört er Musik. (بينما)",
    blanks: [
      { correct: "Als", options: ["Als", "Nachdem", "Bevor"] },
      { correct: "Wenn", options: ["Wenn", "Als", "Bevor"] },
      { correct: "Während", options: ["Während", "Als", "Bevor"] },
    ],
    explanation: "فترة ماضية محددة → als. شرط حاضر هنا → wenn. التزامن → während. ويمكن أن تستعمل wenn أيضاً للتكرار في الماضي.", errorType: "grammar",
  },
  {
    id: "w3", type: "transformation", instructionAr: "كتابة إنتاجية: أعد الصياغة بـ obwohl:",
    instructionDe: "Schreibe mit obwohl:", prompt: "Trotz des Regens gehe ich spazieren. → Obwohl ...",
    acceptedAnswers: ["Obwohl es regnet, gehe ich spazieren.", "Ich gehe spazieren, obwohl es regnet."],
    sampleAnswer: "Obwohl es regnet, gehe ich spazieren.",
    explanation: "trotz + اسم → obwohl + جملة تابعة كاملة؛ الفعل المصرف في التابعة في النهاية.", errorType: "grammar",
  },
];
