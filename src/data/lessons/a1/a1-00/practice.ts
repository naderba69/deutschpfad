/**
 * a1-00 — بنك التمارين ونصائح الأخطاء (الجزء «practice»)
 * فُصل من a1-00.ts في الدفعة 95 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 8) بنك التدريبات */
export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر نطق الحرف الصحيح:",
      questionDe: "Wie spricht man „W“ aus?",
      questionAr: "كيف يُنطق الحرف W؟",
      options: ["ڤ (مثل v)", "و (مثل الإنجليزية)", "ف", "ب"],
      correctIndex: 0,
      explanation: "W الألمانية تُنطق ڤ دائماً: Wasser = ڤاسّر.",
      optionExplanations: [
        undefined,
        "قيمة «W» الإنجليزية غير موجودة في الألمانية؛ فـ«Wasser» تُنطق بڤ.",
        "ف تُنطق بـ V الألمانية في كلمات مثل Vater.",
        "صوت الباء يقابله الحرف «B» كما في «Buch»، لا «W».",
      ],
      errorType: "spelling",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة التي تُنطق بفاء (V = f):",
      questionDe: "Welches Wort spricht man mit „f“?",
      questionAr: "أي كلمة تُنطق بفاء؟",
      options: ["Video", "Vater", "Wasser", "Wien"],
      correctIndex: 1,
      optionExplanations: ["لا — في الدخيلة «Video» يُنطق «V» كالواو الإنجليزية؛ وأما الأصل الألماني فيُنطق فاءً: «Vater».", undefined, "لا — «Wasser» تبدأ بـ«W» وتُنطق كالواو؛ والمطلوب كلمةٌ فيها «V» تُنطق فاءً: «Vater».", "لا — «Wien» أوّلها «W» لا «V»؛ والقاعدة أن «V» الألمانية تُنطق «f» كما في «Vater»."],
      explanation:
        "Vater = فاتر (ف). أما Video فتلفظ ڤ، وWasser وWien بـ ڤ أيضاً.",
      errorType: "spelling",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الصوت المركب بنطقه:",
      pairs: [
        { left: "ei", right: "آي (ماين)" },
        { left: "ie", right: "إي (ڤين)" },
        { left: "eu", right: "أُوي (نُوي)" },
        { left: "sch", right: "ش (شولِه)" },
        { left: "tz", right: "تس (كاتسِه)" },
      ],
      explanation: "مجموعات أساسية: ei=آي، ie=إي، eu=أُوي، sch=ش، tz=تس.",
      errorType: "spelling",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الحروف لتكوين كلمة صحيحة:",
      tokens: ["H", "A", "U", "S"],
      correctSentence: "HAUS",
      explanation: "Haus = بيت. تذكّر: au تُنطق «آو».",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "fill-blank",
      instructionAr: "أكمل الحرف الناقص (ü أو u):",
      template: "die M___tter (أمهات) · die M___tter (أمّ واحدة)",
      blanks: [
        { correct: "ü", options: ["ü", "u"] },
        { correct: "u", options: ["ü", "u"] },
      ],
      explanation:
        "Mütter (أمهات) بـ ü، لكن Mutter (أم) بـ u. لاحظ أن المعنى تغيّر بالحرف المعلم!",
      errorType: "spelling",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr:
        "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das ist die Strasse.",
      wrongWord: "Strasse",
      correctWord: "Straße",
      options: ["Straße", "Strasze", "Strase", "Straze"],
      explanation:
        "بعد الأصوات الطويلة أو المركبة (a طويلة هنا) يُكتب ß وليس ss. Straße = شارع.",
      errorType: "spelling",
    },
    {
      id: "e7",
      type: "multiple-choice",
      instructionAr: "اختر النطق الصحيح:",
      questionDe: "Wie spricht man „Apfel“?",
      questionAr: "كيف يُنطق Apfel (تفاحة)؟",
      options: ["آپفِل", "آفِل", "آپِل", "بَفِل"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — هذا النطق يُسقط «p»؛ و«Apfel» تُنطق «آپفِل» بالفاء بعد الپاء: «Ap-fel».", "لا — هذا النطق يحذف «f» من الوسط؛ و«Apfel» مقطعان: «آپفِل».", "لا — هذا يقلب «pf» إلى باء؛ والصوت في «Apfel» مركّبٌ من «p» ثم «f»."],
      explanation:
        "pf يُنطق معاً: الشفتان تبدأ p ثم يمر الهواء f فوراً — آپفِل.",
      errorType: "spelling",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع واكتب الكلمة التي تسمعها (ستسمع حرفاً حرفاً):",
      audioText: "Katze",
      explanation: "Katze = قطة: K-A-T-Z-E — وtz تُنطق تس.",
      errorType: "spelling",
    },
    {
      id: "e9",
      type: "matching",
      instructionAr: "صل الحرف بالنطق التقريبي للعربي:",
      pairs: [
        { left: "J", right: "ي (ja = يا)" },
        { left: "V", right: "ف (Vater = فاتر)" },
        { left: "Z", right: "تس (Zeit = تسايت)" },
        { left: "W", right: "ڤ (Wasser = ڤاسّر)" },
      ],
      explanation: "أربعة حروف تخدع العربي: J=ي، V=ف، Z=تس، W=ڤ.",
      errorType: "spelling",
    },
    {
      id: "e10",
      type: "word-ordering",
      instructionAr: "رتّب الحروف (Z, e, i, t) لتكوين كلمة:",
      tokens: ["Z", "e", "i", "t"],
      correctSentence: "Zeit",
      explanation: "Zeit = وقت: Z (تس) + ei (آي) + t → تسايت.",
      errorType: "word-order",
    },
    {
      id: "e11",
      type: "multiple-choice",
      instructionAr: "اختر النطق الصحيح:",
      questionDe: "Wie spricht man «Wasser»?",
      questionAr: "كيف تُنطق كلمة Wasser؟",
      options: [
        "ووسر (W إنجليزية)",
        "ڤاسّر (W = ڤ)",
        "فاسّر (W = ف)",
        "ڤازر (s مجهورة)",
      ],
      correctIndex: 1,
      explanation:
        "حرف W الألماني يُنطق «ڤ» دائماً. وss هنا مهموسة «س» حادّة لأنّها مضاعفة، وهي تدلّ في الوقت نفسه على أنّ a قبلها قصيرة.",
      optionExplanations: [
        "هذه قيمة «W» الإنجليزية؛ والألمانية تنطقه ڤ كما في «Wasser».",
        undefined,
        "صوت الفاء يقابله الحرف «V» كما في «Vater»، لا «W».",
        "الـ«ss» المضاعفة مهموسة دائماً؛ والمجهور «s» يأتي قبل حرف علّة كما في «Sonne».",
      ],
      errorType: "spelling",
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "أيّ كلمة تُنطق فيها ch خاءً غليظة؟",
      questionDe: "Wo hört man den ach-Laut?",
      questionAr: "أين تُسمع الخاء الغليظة؟",
      options: ["die Milch", "das Buch", "nicht", "die Kirche"],
      correctIndex: 1,
      explanation:
        "الخاء الغليظة (ach-Laut) تأتي حصراً بعد a و o و u و au. وفي Buch يسبقها u. أمّا Milch فقبلها l، وnicht قبلها i، وKirche قبلها r — وكلّها شين ناعمة.",
      optionExplanations: [
        "في «die Milch» مقطع «ch» بعد «i» ⇒ شين ناعمة لا خاء غليظة.",
        undefined,
        "في «nicht» يسبق «ch» حرفُ «i» ⇒ شين ناعمة (ich-Laut).",
        "في «die Kirche» تُنطق «ch» شيناً ناعمة لأن مقطعها بعد «i»؛ والخاء الغليظة بعد a/o/u/au كما في «Buch».",
      ],
      errorType: "spelling",
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بالإملاء الصحيح (ß أم ss؟):",
      template: "Ich wohne in der Bahnhofstra___e.",
      blanks: [{ correct: "ß", options: ["ß", "ss", "s", "sz"] }],
      explanation:
        "حرف a في Straße طويل، والعلّة الطويلة يليها ß لا ss. ولو كانت العلّة قصيرة لكُتبت ss كما في Wasser وmuss.",
      errorType: "spelling",
    },
    {
      id: "e14",
      type: "error-correction",
      instructionAr: "صحّح الكلمة الخاطئة في الجملة:",
      wrongSentence: "Meine Mutter hat zwei Mutter im Haus.",
      wrongWord: "Mutter",
      correctWord: "Mütter",
      options: ["Mütter", "Muttern", "Mutters", "Muter"],
      explanation:
        "جمع Mutter هو Mütter بالإمالة وحدها بلا أيّ نهاية. فالإمالة هنا ليست تفصيلاً صوتياً بل هي علامة الجمع الوحيدة — ومَن أهملها لم يفرّق بين الأمّ والأمّهات.",
      errorType: "plural",
    },
    {
      id: "e15",
      type: "matching",
      instructionAr: "طابق كلّ مجموعة حروف بنطقها:",
      pairs: [
        { left: "ei", right: "آي (mein)" },
        { left: "ie", right: "إي ممدودة (Liebe)" },
        { left: "eu", right: "أُويْ (neu)" },
        { left: "sch", right: "ش صافية (Schule)" },
        { left: "tz", right: "تس (Katze)" },
        { left: "pf", right: "پف (Apfel)" },
      ],
      explanation:
        "هذه المجموعات الستّ تغطّي أغلب ما يقرؤه المبتدئ. وأخطرها زوج ei/ie لأنّهما متشابهان في الشكل ومختلفان في النطق تماماً.",
      errorType: "spelling",
    },
  ];

/* 9) الأخطاء والتريكات */
export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "نطق W الإنجليزية (Water = ووتر)",
        right: "نطق W كـ ڤ (Wasser = ڤاسّر)",
        whyAr:
          "الألمانية لا تملك w الإنجليزي إطلاقاً — ووه تعني «أين» وتُنطق ڤوه!",
      },
      {
        wrong: "نطق ei كـ«إي»",
        right: "نطق ei كـ«آي» (mein = ماين)",
        whyAr:
          "احفظ: nein (لا) = ناين، zwei (اثنان) = تسڤاي، drei (ثلاثة) = دراي.",
      },
      {
        wrong: "كتابة ss بدل ß في Straße",
        right: "Straße (بـ ß)",
        whyAr:
          "بعد حرف علة طويل أو مركب يأتي ß، بعد حرف قصير يأتي ss (das Schloss = القفل).",
      },
    ],
    eselsbruecken: [
      "ei تُنطق «آي» (مثل mein)، وie تُنطق «إي» ممدودة (مثل Liebe). لا تخلط بينهما: الصوت يتبع المجموعة كلها، لا ترتيب الحرفين.",
      "W مثل ڤ، V مثل ف في الأغلب — تذكّر: «فاتر وڤاسّر»: Vater (ف) وWasser (ڤ).",
    ],
    culturalNote: {
      title: "لماذا التهجئة مهمة في ألمانيا؟",
      content:
        "الألمان يتهجّون أسماءهم في الهاتف والبنك والمكتب كل يوم. ولتجنب اللبس، طوروا «أبجدية هاتفية» رسمية: A wie Anton، B wie Berta، C wie Cäsar... وهي تُستعمل في الهاتف والبنوك والاستمارات، ويكفي أن تعرف الأشهر منها.",
    },
  };
