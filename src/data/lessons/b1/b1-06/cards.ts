/**
 * b1-06 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر نهاية الصفة:",
      questionDe: "ein ___ (klein) Haus",
      options: ["kleines", "kleine", "kleinen", "kleiner"],
      correctIndex: 0,
      explanation: "محايد مع ein: -es.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«klein» نهاية الصفة بعد ein محايد هي -es، لا -e.",
        "«kleine» نهاية مؤنث أو جمع، ولا تناسب Haus المحايد بعد ein.",
        "«kleinen» نهاية جر أو مذكر، لا تناسب Haus المحايد.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر نهاية الصفة:",
      questionDe: "die ___ (gut) Frau",
      options: ["gute", "guter", "gutes", "guten"],
      correctIndex: 0,
      explanation: "مؤنث مع die: -e.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«guter» نهاية مذكّر، والاسم Frau مؤنث.",
        "«gutes» نهاية محايد، والاسم Frau مؤنث.",
        "«guten» نهاية جمع أو جر، لا تناسب الأداة المعرّفة مع المؤنث هنا.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["einem", "Mit", "Freund", "guten", "reist", "man", "gut", "."],
      correctSentence: "Mit einem guten Freund reist man gut.",
      explanation: "مع صديق جيد يسافر المرء جيداً — Dativ: einem guten.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة وصحّح الخطأ الوحيد فيها.",
      wrongSentence: "Das berühmtes Museum ist groß.",
      wrongWord: "berühmtes",
      correctWord: "berühmte",
      options: ["berühmte", "berühmtes", "berühmten", "berühmter"],
      explanation: "بعد das: -e (وليست -es التي بعد ein).",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالنهاية:",
      template: "Er ist ein ___ (berühmt) Maler. Sie ist eine ___ (gut) Lehrerin.",
      blanks: [
        { correct: "berühmter", options: ["berühmter", "berühmte", "berühmtes"] },
        { correct: "gute", options: ["gute", "guter", "guten"] },
      ],
      explanation: "مذكر مع ein: -er. مؤنث مع eine: -e.",
      errorType: "grammar",
    },
    {
      id: "m6",
      type: "fill-blank",
      instructionAr: "أكمل بالنهاية (بلا أداة):",
      template: "Ich trinke ___ (gut) Wein. Ich kaufe ___ (frisch) Brot.",
      blanks: [
        { correct: "guten", options: ["guten", "guter", "gute"] },
        { correct: "frisches", options: ["frisches", "frische", "frischem"] },
      ],
      explanation: "بلا أداة: الصفة تحمل النهاية القوية: guten (مذكر نصب)، frisches (محايد نصب).",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Kultur", ar: "الثقافة", example: "Die Kultur ist reich.", exampleAr: "الثقافة غنية.", level: "B1" },
    { id: "fc2", de: "die Kunst", ar: "الفن", example: "Kunst ist Ausdruck.", exampleAr: "الفن تعبير.", level: "B1" },
    { id: "fc3", de: "das Gemälde", ar: "اللوحة", example: "Das Gemälde ist alt.", exampleAr: "اللوحة قديمة.", level: "B1" },
    { id: "fc4", de: "der Maler", ar: "الرسام", example: "Der Maler ist berühmt.", exampleAr: "الرسام مشهور.", level: "B1" },
    { id: "fc5", de: "die Adjektivdeklination", ar: "تصريف الصفات", example: "ein guter Mann", exampleAr: "رجل جيد", level: "B1" },
    { id: "fc6", de: "ein guter / eine gute / ein gutes", ar: "نهايات الصفة بعد ein", example: "ein gutes Buch", exampleAr: "كتاب جيد", level: "B1" },
    { id: "fc7", de: "das Jahrhundert", ar: "القرن", example: "Das 19. Jahrhundert.", exampleAr: "القرن التاسع عشر.", level: "B1" },
    { id: "fc8", de: "wunderschön", ar: "رائع الجمال", example: "Ein wunderschönes Bild.", exampleAr: "لوحة رائعة.", level: "B1" },
    { id: "fc9", de: "die Heimat", ar: "الوطن", example: "Ich vermisse meine Heimat.", exampleAr: "أشتاق إلى وطني.", level: "B1" },
    { id: "fc10", de: "das Heimweh", ar: "الحنين إلى الوطن", example: "Ich habe Heimweh.", exampleAr: "أحِنّ إلى وطني.", level: "B1" },
    { id: "fc11", de: "der Kulturschock", ar: "صدمة الثقافة", example: "Der Kulturschock war schwer.", exampleAr: "كانت صدمة الثقافة صعبة.", level: "B1" },
    { id: "fc12", de: "die Integration", ar: "الاندماج", example: "Integration braucht Zeit.", exampleAr: "الاندماج يحتاج وقتاً.", level: "B1" },
    { id: "fc13", de: "vermissen", ar: "يشتاق إلى", example: "Ich vermisse meine Familie.", exampleAr: "أشتاق إلى عائلتي.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-06-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مراجعة فيلم ألمانية بالعربية",
      sourceDe: "Der neue Film ist visuell beeindruckend, aber die Geschichte ist schwach. Die Schauspieler leisten gute Arbeit, insgesamt ein mittelmäßiger Film.",
      taskAr: "لخّص المراجعة مع نقل التقييم النهائي دون رأيك.",
      modelAnswerAr: "«الفيلم الجديد مبهر بصرياً لكن قصته ضعيفة. الممثلون يؤدون عملاً جيداً، إجمالاً فيلم متوسط.»",
      keyPointsAr: ["نقلت الجانب البصري", "ذكرت ضعف القصة", "نقلت التقييم النهائي (متوسط)"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-06-1",
      scenarioAr: "توصي صديقاً بفيلم أو كتاب وتناقشه.",
      scenarioDe: "Du empfiehlst einen Film und diskutierst.",
      strategyAr: "الاستراتيجية: التوصية بأسباب ومقارنة الأذواق.",
      rounds: [
        {
          speakerDe: "Welchen Film empfiehlst du mir?",
          speakerAr: "أي فيلم توصيني به؟",
          options: [
            { de: "Ich empfehle dir den Film „Das Leben der Anderen“, weil er spannend und tiefgründig ist.", ar: "أنصحك بفيلم «حياة الآخرين» لأنه مشوق وعميق.", best: true, replyDe: "Klingt interessant! Worum geht es?", replyAr: "يبدو مثيراً! عم يتحدث؟" },
            { de: "Ich empfehle dir keinen Film, alle sind schlecht.", ar: "لا أنصحك بأي فيلم، كلها سيئة.", best: false, replyDe: "So pauschal kann man nicht urteilen.", replyAr: "لا يمكن الحكم بهذه العمومية." },
          ],
        },
        {
          speakerDe: "Worum geht es in dem Film?",
          speakerAr: "عم يتحدث الفيلم؟",
          options: [
            { de: "Es geht um einen Stasi-Offizier, der einen Theaterautor überwacht und sich verändert. Am Ende ist es eine Geschichte über Menschlichkeit.", ar: "يتحدث عن ضابط ستازي يراقب كاتباً مسرحياً ويتغير. في النهاية قصة عن الإنسانية.", best: true, replyDe: "Das klingt sehr berührend. Ich schaue ihn mir an!", replyAr: "يبدو مؤثراً جداً. سأشاهده!" },
            { de: "Es geht um nichts, der Film ist leer.", ar: "لا يتحدث عن شيء، الفيلم فارغ.", best: false, replyDe: "Das ist deine Meinung, aber andere sehen es anders.", replyAr: "هذا رأيك، لكن آخرين يرونه مختلفاً." },
          ],
        },
      ],
    },
  ];
