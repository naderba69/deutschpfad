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
      explanation: "في الكلمات الألمانية الشائعة، W تُنطق عادةً بصوت قريب من V: Wasser = ڤاسّر.",
      optionExplanations: [
        undefined,
        "في الكلمات الألمانية الشائعة لا تُنطق W بصوت [w] الإنجليزي، بل بصوت قريب من [v] كما في Wasser.",
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
      optionExplanations: ["لا — «Video» دخيلة شائعة ويُنطق فيها V صوتاً مجهوراً قريباً من V الإنجليزية، لا فاءً؛ أما «Vater» فتبدأ بفاء.", undefined, "لا — «Wasser» تبدأ بـ«W» وتُنطق كالواو؛ والمطلوب كلمةٌ فيها «V» تُنطق فاءً: «Vater».", "لا — «Wien» أوّلها «W» لا «V»؛ وفي كلمات ألمانية شائعة مثل «Vater»، تُنطق «V» فاءً."],
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
        { left: "ie", right: "إي طويلة (wie)" },
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
        "اختر الإملاء الصحيح للكلمة المحددة وفق الإملاء الألماني في ألمانيا:",
      wrongSentence: "In Leipzig: Das ist die Strasse.",
      wrongWord: "Strasse",
      correctWord: "Straße",
      options: ["Straße", "Strasze", "Strase", "Straze"],
      explanation:
        "وفق الإملاء القياسي في ألمانيا، تُكتب Straße بـ ß بعد a الطويلة. أما Strasse فتُستعمل في سويسرا؛ لذلك حُدد سياق المثال في Leipzig.",
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
      optionExplanations: [undefined, "لا — هذا النطق يُسقط «p»؛ و«Apfel» تُنطق «آپفِل» بالفاء بعد الپاء: «Ap-fel».", "لا — هذا النطق يحذف «f» من الوسط؛ و«Apfel» مقطعان: «آپفِل».", "لا — هذا يبدّل /p/ بـ/b/؛ وفي Apfel يتتابع /p/ ثم /f/ من دون حركة بينهما."],
      explanation:
        "في Apfel نطق /p/ ثم /f/ متتابعين بلا حركة فاصلة؛ إنهما صامتان متتابعان لا صوت مفرد.",
      errorType: "spelling",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع إلى الكلمة كاملة ثم اكتبها:",
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
      explanation: "في الكلمات الشائعة: J في ja قريب من ي، وV في Vater ف، وZ في Zeit تس، وW في Wasser قريب من ڤ. قد يختلف V في بعض الكلمات الدخيلة مثل Video.",
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
        "في Wasser يُنطق W بصوت قريب من [v]، وss صوتها مهموس [s] وتشير هنا إلى قصر a.",
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
        "في «Buch» يظهر ach-Laut [x]. أمّا في «Milch» و«nicht» و«Kirche» فيظهر ich-Laut [ç]، وهو ليس الشين العربية. النطق يتعلّم بالسماع والتدريب، لا بالتقريب الكتابي وحده.",
      optionExplanations: [
        "في «Milch» يظهر ich-Laut [ç]، وليس الشين العربية ولا ach-Laut [x].",
        undefined,
        "في «nicht» يظهر ich-Laut [ç]؛ كلمة «شين» مجرد تقريب لا يطابق الصوت الألماني.",
        "في «Kirche» يظهر ich-Laut [ç]، لا الشين العربية؛ وفي «Buch» يظهر ach-Laut [x].",
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
      wrongSentence: "Zwei Mutter warten draußen.",
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
        { left: "pf", right: "پف متتابعان (Apfel)" },
        { left: "äu", right: "أُوي (Häuser)" },
        { left: "sp-", right: "شپ في بداية الكلمة (Sport)" },
        { left: "st-", right: "شت في بداية الكلمة (Stadt)" },
      ],
      explanation:
        "هذه أمثلة تدريبية على أنماط شائعة، وليست جرداً لكل تراكيب الألمانية. قارِن ei وie خصوصاً: تتشابهان في الحروف وتختلفان عادةً في النطق. eu وäu متشابهان في الصوت في أمثلة مثل neu وHäuser، رغم اختلاف الكتابة.",
      errorType: "spelling",
    },
    {
      id: "e16",
      type: "fill-blank",
      instructionAr: "اختر الحرف المناسب (ö أو o):",
      template: "Das Mädchen ist sch___n. (جميلة)",
      blanks: [{ correct: "ö", options: ["ö", "o"] }],
      explanation:
        "المقصود «schön» (جميلة) بحرف ö. أما «schon» بحرف o فتعني «بالفعل/من قبل»؛ تغيّر الحرف يغيّر الكلمة والمعنى.",
      errorType: "spelling",
    },
  ];

/* 9) الأخطاء والتريكات */
export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "نطق W الإنجليزية (Water = ووتر)",
        right: "في الكلمات الألمانية الشائعة تُنطق W قريباً من ڤ: Wasser = ڤاسّر",
        whyAr:
          "في النطق الألماني القياسي للكلمات الشائعة، تقابل W عادةً الصوت [v]، لا [w] كما في كثير من الكلمات الإنجليزية. قد توجد اختلافات في بعض الكلمات الدخيلة والأسماء؛ تعلّم نطق الكلمة نفسها عند الشك.",
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
        "قد يُطلب منك تهجئة اسم أو عنوان في مكالمة أو عند ملء استمارة. تساعد كلمات التهجئة على تمييز الحروف المتشابهة عند سماعها. الأمثلة Anton وBerta وCäsar في هذا الدرس من جدول ألماني تقليدي؛ أما جدول DIN 5009 الحديث فيستخدم أسماء مدن مثل Aachen وBerlin. ليست قائمة هذا الدرس ادعاءً بأن الجميع يستخدمون جدولاً واحداً في كل موقف.",
    },
  };
