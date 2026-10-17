/**
 * a2-06 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a2-06.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر تصريف kommen مع الفاعل er:",
      questionDe: "Ich glaube, dass er heute ___.",
      options: ["kommt", "kommen", "kommst", "komme"],
      correctIndex: 0,
      explanation:
        "الفاعل er مفرد غائب، لذلك تأتي صيغة الفعل kommt في نهاية الجملة التابعة.",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr:
        "اختر أداة الربط التي تقدّم مضمون ما أظن، لا سبباً أو شرطاً:",
      questionDe: "Ich denke, ___ der Artikel interessant ist.",
      questionAr: "ما أداة الربط التي تناسب هنا؟",
      options: ["dass", "das", "weil", "wenn"],
      correctIndex: 0,
      explanation:
        "يقدّم dass هنا مضمون الرأي. أما das فليس أداة ربط، وweil يقدّم سبباً، وwenn يقدّم شرطاً أو زمناً بحسب السياق.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صِل اسم الوسيلة الإعلامية بمعناها:",
      pairs: [
        { left: "das Fernsehen", right: "التلفاز / وسيلة التلفزيون" },
        { left: "die Zeitung", right: "الصحيفة" },
        { left: "das Internet", right: "الإنترنت" },
        { left: "das Radio", right: "الراديو / الإذاعة" },
      ],
      explanation:
        "تعرّف كل اسم مع أداته؛ يطابق الاختبار بين المفردات الأربع ومعانيها المحددة.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات في جملة dass:",
      tokens: ["glaubt,", "dass", "Er", "kommt.", "sie"],
      correctSentence: "Er glaubt, dass sie kommt.",
      explanation:
        "الفعل glaubt في الجملة الرئيسة، وتأتي الفاصلة قبل dass؛ أما kommt فيقع في نهاية الجملة التابعة.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "صحّح ترتيب العبارة في الجملة التابعة وفق النمط الكتابي المحايد:",
      wrongSentence: "Ich glaube, dass er kommt heute.",
      wrongWord: "kommt heute",
      correctWord: "heute kommt",
      options: [
        "heute kommt",
        "kommt heute",
        "heute kommt heute",
        "kommst heute",
      ],
      explanation:
        "الترتيب المستهدف هو dass er heute kommt؛ يأتي الفعل المصرف في القوس الأيمن بعد ظرف الزمن هنا.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr:
        "اختر فعل الرأي أو الموقف الذي يطابق التلميح المعنوي المرفق:",
      template:
        "Ich ___, dass es morgen regnet. Ich bin nicht sicher. Ich möchte keinen Regen. Ich ___, dass du die Prüfung bestehst. Das ist mein Wunsch. Ich ___, dass die Zeitung jeden Freitag erscheint. Ich habe es in der Zeitung gelesen und weiß es genau.",
      blanks: [
        { correct: "glaube", options: ["glaube", "hoffe", "weiß"] },
        { correct: "hoffe", options: ["glaube", "hoffe", "weiß"] },
        { correct: "weiß", options: ["glaube", "hoffe", "weiß"] },
      ],
      explanation:
        "القرينة الأولى تعبّر عن اعتقاد غير مؤكد لا عن رغبة في المطر، والثانية تصرّح بأنها أمنية، والثالثة تذكر قراءة المعلومة ومعرفتها بدقة. قد يتداخل معنى glauben وhoffen في سياقات أخرى؛ هنا تحدد الجمل المرافقة الفعل المقصود.",
      errorType: "vocabulary",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "ادمج الجملتين مع الحفاظ على فعل الرأي:",
      prompt: "Ich denke. + Der Film ist gut. → جملة واحدة",
      acceptedAnswers: ["Ich denke, dass der Film gut ist"],
      sampleAnswer: "Ich denke, dass der Film gut ist.",
      explanation:
        "يبقى فعل الرأي Ich denke، وتدخل الجملة الثانية بعد dass مع الفعل ist في النهاية.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر المعنى الشائع للكلمة:",
      questionDe: "die Werbung",
      questionAr: "ما معنى Werbung في سياق وسائل الإعلام؟",
      options: ["الدعاية / الإعلان", "الأخبار اليومية", "الصحيفة الأسبوعية", "الرأي الشخصي"],
      correctIndex: 0,
      explanation:
        "تعني Werbung الدعاية أو الإعلان في هذا السياق، وغالباً تستعمل اسماً غير معدود.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح موضع الفعل المصرف بعد dass:",
      wrongSentence: "Ich finde, dass der Artikel ist interessant.",
      wrongWord: "ist interessant",
      correctWord: "interessant ist",
      options: [
        "interessant ist",
        "ist interessant",
        "interessant sein",
        "interessant bist",
      ],
      explanation:
        "في صيغة dass المستهدفة يأتي خبر الصفة قبل الفعل المصرف: dass der Artikel interessant ist.",
      errorType: "word-order",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة كما تسمعها:",
      audioText: "Die Zeitung erscheint heute.",
      explanation:
        "انتبه إلى كتابة Zeitung وerscheint؛ يظهر ترتيب الكلمات في النص النموذجي بعد التصحيح.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "اختر معنى الكلمة من سياق إعداد الصحيفة:",
      questionDe: "die Redaktion",
      questionAr: "ما المقصود بهيئة التحرير؟",
      options: [
        "فريق إعداد مواد الصحيفة ومراجعتها",
        "جمهور القراء في المقهى",
        "المبنى الذي تجتمع فيه البلدية",
        "مسار مخصص للدراجات",
      ],
      correctIndex: 0,
      explanation:
        "Redaktion هي هيئة أو فريق التحرير؛ وفي نص القراءة تراجع Leyla الرسائل قبل نشرها.",
      errorType: "vocabulary",
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص المصرف؛ أبقِ المصدر قبله:",
      template: "Ich denke, dass du den Artikel lesen ___.",
      blanks: [
        { correct: "kannst", options: ["kannst", "kann", "können"] },
      ],
      explanation:
        "فاعل الجملة du، لذلك الصيغة المصرفة هي kannst؛ يسبقها المصدر lesen ويأتي المركب في نهاية الجملة التابعة.",
      errorType: "conjugation",
    },
    {
      id: "e13",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات في جملة dass:",
      tokens: [
        "erscheint.",
        "dass",
        "jeden",
        "Freitag",
        "glaube,",
        "die",
        "Zeitung",
        "Ich",
      ],
      correctSentence: "Ich glaube, dass die Zeitung jeden Freitag erscheint.",
      explanation:
        "تأتي الجملة الرئيسة Ich glaube أولاً، ثم الفاصلة وdass، ويقع erscheint في نهاية الجملة التابعة.",
      errorType: "word-order",
    },
    {
      id: "e14",
      type: "error-correction",
      instructionAr: "صحّح ترتيب المسند المركب بعد dass:",
      wrongSentence: "Ich denke, dass du kannst den Artikel lesen.",
      wrongWord: "kannst den Artikel lesen",
      correctWord: "den Artikel lesen kannst",
      options: [
        "den Artikel lesen kannst",
        "kannst den Artikel lesen",
        "den Artikel kannst lesen",
        "den Artikel lesen kann",
      ],
      explanation:
        "مع الفاعل du تأتي صيغة modal الناقصة kannst في القوس الأيمن؛ ويسبقها المصدر lesen بعد المفعول.",
      errorType: "word-order",
    },
  ];

export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich finde, das der Artikel interessant ist.",
        right: "Ich finde, dass der Artikel interessant ist.",
        whyAr:
          "dass أداة ربط تُكتب بـss؛ أما das بحرف واحد فأداة تعريف أو ضمير بحسب السياق.",
        classification: "error",
      },
      {
        wrong: "Ich weiß dass die Zeitung heute erscheint.",
        right: "Ich weiß, dass die Zeitung heute erscheint.",
        whyAr: "توضع فاصلة بين الجملة الرئيسة والجملة التابعة في هذا المثال.",
        classification: "error",
      },
      {
        wrong: "Ich denke, dass der Film ist interessant.",
        right: "Ich denke, dass der Film interessant ist.",
        whyAr:
          "في الجملة التابعة المستهدفة لا يبقى الفعل المصرف في موضع V2؛ يوضع في القوس الأيمن.",
        classification: "error",
      },
      {
        wrong: "dass تعني دائماً أن الخبر حقيقة مؤكدة.",
        right:
          "معنى الموقف يتأثر بالفعل الرئيس: hoffen يعبر عن أمل، وglauben عن اعتقاد، وwissen عن معرفة.",
        whyAr:
          "أداة الربط تعرض مضموناً، ولا تحسم وحدها درجة يقين المتكلم؛ قارن الفعل الرئيس وسياق العبارة قبل ترجمتها.",
        classification: "pedagogical-simplification",
      },
    ],
    eselsbruecken: [
      "اسأل: ما مضمون ما أعتقده؟ ثم اكتب فاصلة وdass، واجعل الفعل المصرف في القوس الأيمن في المثال التابع.",
      "مع المسند المركب: lesen kannst، gelesen hat، anfängt. انظر إلى المجموعة كاملة ولا تنقل ترتيب الجملة الرئيسة.",
      "dass أداة ربط بحرفي ss؛ أما das فقد تكون أداة أو ضميراً بحرف واحد. افحص وظيفة الكلمة في الجملة.",
    ],
    culturalNote: {
      title: "الإعلام وتمويله — معلومة محدودة",
      content:
        "يذكر موقع ARD أن البرنامج المشترك لـARD يعتمد أساساً على مساهمة البث، وأن إيرادات الإعلان جزء صغير من ميزانيته؛ كما أن الإعلانات التلفزيونية على Das Erste وZDF مقيّدة زمنياً وتنظيمياً. لذلك لا نقول إن كل الإعلام العام بلا إعلانات، ولا نعمم عادات القراءة أو تفضيلات صحيفة بعينها على جميع الناس. تتغير التفاصيل التنظيمية، وهذا مثال سياقي لا وصف ثابت لكل وسيلة إعلام.",
    },
  };
