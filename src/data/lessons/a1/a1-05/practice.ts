/**
 * a1-05 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a1-05.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ um sieben Uhr ___. (aufstehen)",
      questionAr: "أنهض في السابعة.",
      options: [
        "stehe ... auf",
        "aufstehe ...",
        "stehe auf ...",
        "auf ... stehe",
      ],
      correctIndex: 0,
      explanation:
        "الفعل المتصرف stehe في المركز الثاني، والبادئة auf في النهاية: Ich stehe ... auf.",
      errorType: "word-order",
      optionExplanations: [
        undefined,
        "الفعل المنفصل «aufstehen» يفصل بادئته إلى آخر الجملة الرئيسية: «Ich stehe … auf».",
        "البادئة لا تلصق بالجذر مباشرة إذا بقيت مكمّلات؛ موضعها في الآخر بعد «um sieben Uhr».",
        "عكس القاعدة: الجذر «stehe» يبقى في المركز الثاني، لا في الآخر.",
      ],
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر المعنى الصحيح:",
      questionDe: "Es ist halb neun.",
      questionAr: "كم الساعة؟",
      options: ["8:30", "9:30", "9:00", "8:00"],
      correctIndex: 0,
      explanation: "halb neun = نصف الطريق إلى التاسعة = 8:30.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«halb neun» تعني الثامنة والنصف؛ والتاسعة والنصف تكون «halb zehn».",
        "التاسعة تماماً «neun Uhr»؛ و«halb» تُنقص ساعة وتضيف نصفاً.",
        "الثامنة تماماً «acht Uhr»؛ والمطلوب «halb neun» = 8:30.",
      ],
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الفعل بمعناه:",
      pairs: [
        { left: "aufstehen", right: "ينهض من الفراش" },
        { left: "fernsehen", right: "يشاهد التلفاز" },
        { left: "einkaufen", right: "يتسوق" },
        { left: "anfangen", right: "يبدأ" },
      ],
      explanation:
        "أفعال يومية منفصلة: auf + stehen، fern + sehen، ein + kaufen، an + fangen.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة (انتبه للبادئة في النهاية):",
      tokens: ["um", "sieben", "stehe", "Ich", "auf", "Uhr", "."],
      correctSentence: "Ich stehe um sieben Uhr auf.",
      explanation: "Ich + stehe (V2) + um sieben Uhr + auf (ذيل الفعل).",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich stehe um sieben Uhr aus.",
      wrongWord: "aus",
      correctWord: "auf",
      options: ["auf", "aus", "an", "ab"],
      explanation:
        "اختيار البادئة يغيّر معنى الفعل؛ في هذا السياق الصحيح هو aufstehen: Ich stehe um sieben Uhr auf.",
      errorType: "vocabulary",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بالتركيب الزمني المناسب: am أو um أو in der:",
      template:
        "Ich esse ___ Mittag. Der Kurs beginnt ___ neun Uhr. Wir schlafen ___ Nacht.",
      blanks: [
        { correct: "am", options: ["am", "um"] },
        { correct: "um", options: ["am", "um"] },
        { correct: "in der", options: ["in der", "am", "um"] },
      ],
      explanation:
        "am + أوقات اليوم (am Mittag)، um + ساعات (um neun)، in der Nacht للّيل.",
      errorType: "preposition",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى سؤال:",
      prompt: "Du stehst um sieben Uhr auf. → ؟",
      acceptedAnswers: [
        "Stehst du um sieben Uhr auf",
        "Stehst du um sieben Uhr auf?",
      ],
      sampleAnswer: "Stehst du um sieben Uhr auf?",
      explanation:
        "سؤال نعم/لا: Stehst (فعل متصرف) أولاً، والبادئة auf في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Wann stehst du auf?",
      questionAr: "ما معنى السؤال؟",
      options: ["متى تنهض؟", "أين تعمل؟", "ماذا تأكل؟", "كم الساعة؟"],
      correctIndex: 0,
      explanation: "Wann = متى، وaufstehen هنا تعني النهوض من الفراش.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "مكان العمل يُسأل بـ«Wo arbeitest du؟»؛ و«Wann» عن الوقت.",
        "الأكل يُسأل بـ«Was isst du؟»؛ والفعل هنا «aufstehen».",
        "الساعة تُسأل بـ«Wie spät ist es؟»؛ والسؤال عن وقت نهوضك أنت.",
      ],
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Es ist halb sieben = 7:30.",
      wrongWord: "7:30",
      correctWord: "6:30",
      options: ["6:30", "7:30", "7:00", "6:00"],
      explanation: "halb sieben = نصف الطريق إلى السابعة = 6:30!",
      errorType: "vocabulary",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Am Abend sehe ich fern.",
      explanation: "مساءً أشاهد التلفاز — fern في نهاية الجملة.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بالحرف الصحيح (von / bis / um / am):",
      instructionDe: "Ergänze: von, bis, um, am",
      template:
        "Ich arbeite ___ acht ___ sechzehn Uhr. · ___ Morgen stehe ich ___ sieben auf.",
      blanks: [
        { correct: "von", options: ["von", "bis", "um", "am"] },
        { correct: "bis", options: ["bis", "von", "um", "am"] },
        { correct: "Am", options: ["Am", "Um", "Von", "Bis"] },
        { correct: "um", options: ["um", "am", "von", "bis"] },
      ],
      hint: "von … bis = مدى زمني. am + وقت اليوم. um + ساعة.",
      explanation:
        "von 8 bis 16 Uhr (مدى) + Am Morgen (وقت اليوم) + um sieben (ساعة).",
      errorType: "preposition",
      points: 2,
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر الترتيب الصحيح:",
      questionDe: "___ (أنهض دائماً في السادسة)",
      questionAr: "أي جملة صحيحة؟",
      options: [
        "Ich stehe immer um sechs auf.",
        "Ich immer stehe um sechs auf.",
        "Immer ich stehe um sechs auf.",
        "Ich stehe um immer sechs auf.",
      ],
      correctIndex: 0,
      explanation:
        "الصياغة المحايدة هنا: Ich stehe immer um sechs auf. والفعل المصرف في المركز الثاني، والبادئة في نهاية الجملة.",
      optionExplanations: [
        undefined,
        "في الجملة الخبرية الرئيسية يأتي الفعل المصرف في المركز الثاني.",
        "إذا بدأنا بـ Immer نقول Immer stehe ich … ليبقى الفعل في المركز الثاني.",
        "لا تأتي immer داخل تركيب الساعة um sechs في هذا المثال.",
      ],
      errorType: "word-order",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بظرف التكرار الذي يناسب المعنى بين القوسين:",
      template:
        "Ich trinke ___ Kaffee (دائماً). Wir kochen ___ zusammen (أحياناً). Er kommt ___ zu spät (أبداً).",
      blanks: [
        { correct: "immer", options: ["immer", "nie", "selten"] },
        { correct: "manchmal", options: ["manchmal", "immer", "nie"] },
        { correct: "nie", options: ["nie", "oft", "meistens"] },
      ],
      explanation:
        "immer تعني دائماً، manchmal أحياناً، وnie أبداً. تأتي ظروف التكرار غالباً بعد الفعل المصرف، وقد يتغير موضعها بحسب بنية الجملة والتأكيد.",
      errorType: "vocabulary",
    },
    {
      id: "e14",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Manchmal ich gehe früh ins Bett.",
      wrongWord: "ich gehe",
      correctWord: "gehe ich",
      options: ["gehe ich", "ich gehe", "ich gehen", "geht ich"],
      explanation:
        "في الجملة الخبرية الرئيسية يحافظ الفعل المصرف على المركز الثاني: Manchmal gehe ich …",
      errorType: "word-order",
    },
    {
      id: "e15",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتكوين جملة صحيحة:",
      tokens: ["Meine", "Schwester", "kocht", "oft", "am", "Abend", "."],
      correctSentence: "Meine Schwester kocht oft am Abend.",
      explanation:
        "الفاعل (Meine Schwester) ثم الفعل (kocht) ثم التكرار (oft) ثم الوقت (am Abend).",
      errorType: "word-order",
    },
    {
      id: "e16",
      type: "transformation",
      instructionAr:
        "أعد صياغة الجملة بادئاً بظرف التكرار (انتبه لموضع الفعل).",
      prompt: "Ich sehe manchmal fern. → ابدأ الجملة بـ Manchmal.",
      acceptedAnswers: ["Manchmal sehe ich fern."],
      sampleAnswer: "Manchmal sehe ich fern.",
      explanation:
        "تقديم الظرف يستدعي قلب الفاعل والفعل: Manchmal sehe ich fern — والفعل يبقى في المركز الثاني.",
      errorType: "word-order",
    },
    {
      id: "e17",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات مراعياً موضع البادئة:",
      tokens: ["Ich", "rufe", "dich", "heute", "Abend", "an", "."],
      correctSentence: "Ich rufe dich heute Abend an.",
      explanation:
        "anrufen فعل منفصل: الفعل المصرَّف rufe في المركز الثاني، والبادئة an في آخر الجملة بعد المفعول وظرف الزمان.",
      errorType: "word-order",
    },
    {
      id: "e18",
      type: "multiple-choice",
      instructionAr: "كم الساعة إذا قيل halb acht؟",
      questionDe: "Wie viel Uhr ist halb acht?",
      questionAr: "ما الوقت المقصود بـ halb acht؟",
      options: ["8:30", "7:30", "8:00", "7:00"],
      correctIndex: 1,
      explanation:
        "في halb acht يُسمّى الوقت باسم الساعة التالية: المقصود 7:30، أي منتصف الطريق من السابعة إلى الثامنة.",
      optionExplanations: [
        "هذا هو الخطأ الشائع: العدّ من الساعة الماضية على الطريقة العربية.",
        undefined,
        "الثامنة تماماً تُقال acht Uhr.",
        "السابعة تماماً تُقال sieben Uhr.",
      ],
      errorType: "vocabulary",
    },
    {
      id: "e19",
      type: "error-correction",
      instructionAr: "صحّح حرف المدى الزمني:",
      wrongSentence: "Ich arbeite von acht zu sechzehn Uhr.",
      wrongWord: "zu",
      correctWord: "bis",
      options: ["bis", "nach", "für", "seit"],
      explanation:
        "في هذا المثال نستخدم von … bis … لذكر بداية العمل ونهايته. أما zu فتظهر في تراكيب الاتجاه مثل Ich gehe zum Arzt.",
      errorType: "preposition",
    },
    {
      id: "e20",
      type: "fill-blank",
      instructionAr: "أكمل بحرف الزمن الصحيح:",
      template:
        "___ Morgen trinke ich Kaffee, aber ___ der Nacht trinke ich Tee.",
      blanks: [
        { correct: "Am", options: ["Am", "Im", "In", "Um"] },
        { correct: "in", options: ["in", "am", "um", "von"] },
      ],
      explanation:
        "في المثالين نقول Am Morgen وin der Nacht؛ احفظ حرف الجر مع كل تعبير زمني.",
      errorType: "preposition",
    },
    {
      id: "e21",
      type: "transformation",
      instructionAr: "أعد بناء الجملة مبتدئاً بظرف التكرار:",
      prompt: "Ich gehe selten ins Kino. (ابدأ بـ Selten)",
      acceptedAnswers: [
        "Selten gehe ich ins Kino.",
        "Selten gehe ich ins Kino",
      ],
      sampleAnswer: "Selten gehe ich ins Kino.",
      explanation:
        "تقديم الظرف إلى المركز الأوّل يوجب بقاء الفعل في المركز الثاني، فينزاح الفاعل بعده: Selten gehe ich…",
      errorType: "word-order",
    },
  ];


export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich aufstehe um 7.",
        right: "Ich stehe um 7 auf.",
        whyAr: "في الجملة الخبرية الرئيسية البسيطة يأتي الفعل المصرف ثانياً، وتظهر البادئة المنفصلة في النهاية.",
      },
      {
        wrong: "halb sieben = 7:30",
        right: "halb sieben = 6:30",
        whyAr: "halb = نصف الطريق إلى الرقم التالي.",
      },
      {
        wrong: "am Nacht",
        right: "in der Nacht",
        whyAr: "في هذا التعبير الشائع نقول in der Nacht.",
      },
    ],
    eselsbruecken: [
      "«ذيل الفعل المنفصل في النهاية»: Ich stehe ... auf — كأنك «تغلق» الجملة بالبادئة.",
      "يسمّي halb الساعة التالية: halb acht = 7:30، وhalb zehn = 9:30.",
    ],
    culturalNote: {
      title: "التعبير عن المواعيد",
      content:
        "لذكر موعد محدد استخدم um مع الساعة: Der Termin ist um acht Uhr. ولوقت تقريبي يمكنك قول gegen acht. إذا توقعت التأخر عن موعد، أخبر الشخص واعتذر: Entschuldigung für die Verspätung! تختلف الأعراف باختلاف الأشخاص والمواقف، لذلك لا نعمّم صفة قومية.",
    },
  };
