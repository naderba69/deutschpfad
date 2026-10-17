/**
 * a2-09 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a2-09.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة بعد الفعل:",
      questionDe: "Ich helfe ___ Vater beim Aufräumen.",
      options: ["dem", "den", "der", "das"],
      correctIndex: 0,
      explanation: "helfen يطلب متمماً في Dativ؛ Vater مذكر مفرد، لذلك نقول dem Vater.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«den» منصوب؛ و«helfen» يأخذ Dativ ⇒ «dem Vater».",
        "«der» مرفوع أو مؤنث؛ و«der Vater» مذكر في Dativ.",
        "«das» محايد؛ و«der Vater» مذكر. ",
      ],
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Das Buch gehört ___ Mutter.",
      options: ["der", "dem", "den", "die"],
      correctIndex: 0,
      explanation: "صاحبة الكتاب تأتي بعد gehören في Dativ؛ Mutter مؤنث، لذا die → der.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«dem» للمذكّر أو المحايد؛ و«die Mutter» مؤنث ⇒ «der Mutter».",
        "«den» منصوب مذكر؛ و«gehören» يأخذ Dativ مؤنثاً هنا.",
        "«die» مرفوع أو منصوب مؤنث؛ وفي Dativ تصير «der». ",
      ],
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صلّ الفعل بمعناه في الجملة المستهدفة:",
      pairs: [
        { left: "helfen", right: "يساعد" },
        { left: "gefallen", right: "يعجب" },
        { left: "gehören", right: "يخصّ / يكون ملكاً لـ" },
        { left: "gratulieren", right: "يهنئ" },
        { left: "danken", right: "يشكر" },
      ],
      explanation:
        "هذه معانٍ شائعة للأفعال في سياق الدرس؛ احفظ كل فعل مع متمّمه، لا مع معنى عربي منفصل فقط.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات وفق النمط: الفاعل + الفعل + متمم Dativ + المكان:",
      tokens: ["dem", "Ich", "Garten", "Vater", "im", "helfe", "."],
      correctSentence: "Ich helfe dem Vater im Garten.",
      explanation: "helfe هو الفعل المصرف في الموقع الثاني، وdem Vater متمم helfen في Dativ.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الضمير في جملة تهنئة موجّهة إلى المخاطَب (أنتَ):",
      wrongSentence: "Ich gratuliere dich zum Geburtstag.",
      wrongWord: "dich",
      correctWord: "dir",
      options: ["dir", "dich", "mir", "ihn"],
      explanation: "gratulieren يأخذ الشخص المهنّأ في Dativ: dir.",
      errorType: "case",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بأداة Dativ المناسبة لكل اسم:",
      template: "Ich danke ___ Freund (مذكر). Wir helfen ___ Oma (مؤنث). Das Buch gehört ___ Kind (محايد).",
      blanks: [
        { correct: "dem", options: ["dem", "der", "den"] },
        { correct: "der", options: ["dem", "der", "den"] },
        { correct: "dem", options: ["dem", "der", "den"] },
      ],
      explanation: "بعد الأفعال المحددة في الأمثلة: المذكر والمحايد dem، والمؤنث der.",
      errorType: "case",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل المعنى إلى جملة «أنا أساعد الأب» مستخدماً helfen، وانتبه لتغير الحالة:",
      prompt: "Ich sehe den Vater. → (أنا أساعد الأب)",
      acceptedAnswers: ["Ich helfe dem Vater.", "Ich helfe dem Vater"],
      sampleAnswer: "Ich helfe dem Vater.",
      explanation:
        "هذا تحويل إلى فعل ومعنى جديدين لا تبديل شكلي للحالة داخل الجملة نفسها: sehen يأخذ Akkusativ، أما helfen فيأخذ Dativ.",
      errorType: "case",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر معنى الكلمة:",
      questionDe: "die Einladung",
      questionAr: "ما معنى die Einladung؟",
      options: ["الدعوة", "الهدية", "المناسبة", "التهنئة"],
      correctIndex: 0,
      explanation: "die Einladung هي الدعوة إلى زيارة أو مشاركة في مناسبة.",
      errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "الهدية «das Geschenk»، لا «die Einladung».",
        "المناسبة «die Feier» أو «der Anlass».",
        "التهنئة «die Glückwünsche»، لا الدعوة. ",
      ],
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "اختر الصيغة الصحيحة للاسم المميّز في الجملة:",
      wrongSentence: "Ich helfe den Kinder.",
      wrongWord: "den Kinder",
      correctWord: "den Kindern",
      options: ["den Kindern", "dem Kindern", "den Kinder", "der Kindern"],
      explanation:
        "Dativ الجمع يأخذ den، ويضاف ‑n عادةً إلى الاسم إن لم يكن جمعه منتهياً بـ‑n أو ‑s: Kinder → Kindern.",
      errorType: "case",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع ثم اكتب الجملة:",
      audioText: "Wir gratulieren der Nachbarin zum neuen Job.",
      explanation:
        "الشخص الذي نهنئه يأتي في Dativ (der Nachbarin)، والتهنئة على الحدث تأتي في هذا النمط مع zu + Dativ (zum neuen Job).",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "أكمل بصيغة gefallen التي توافق الفاعل:",
      template: "Das Fotoalbum ___ Frau Yilmaz besonders gut. Die Blumen ___ der Nachbarin auch.",
      blanks: [
        { correct: "gefällt", options: ["gefällt", "gefallen", "gefällst"] },
        { correct: "gefallen", options: ["gefallen", "gefällt", "gefällst"] },
      ],
      explanation:
        "Das Fotoalbum فاعل مفرد فيأخذ gefällt؛ Die Blumen فاعل جمع فيأخذ gefallen. الشخص بعد gefallen في Dativ.",
      errorType: "conjugation",
    },
    {
      id: "e12",
      type: "multiple-choice",
      instructionAr: "اختر حرف الجر المناسب لوسيلة النقل:",
      questionDe: "Wir fahren ___ dem Zug zur Feier.",
      options: ["mit", "für", "ohne", "gegen"],
      correctIndex: 0,
      explanation: "للتعبير عن وسيلة النقل نقول mit dem Zug؛ mit يحكم Dativ. أما für وohne وgegen فتطلب Akkusativ في تراكيبها المعتادة، فلا تلائم dem هنا.",
      errorType: "preposition",
      optionExplanations: [
        undefined,
        "«für» تأخذ Akkusativ («für den Zug»)، فلا تلائم «dem Zug».",
        "«ohne» تأخذ Akkusativ بمعنى بدون («ohne den Zug»).",
        "«gegen» تأخذ Akkusativ («gegen den Baum») ولا تفيد الوسيلة «mit dem Zug». ",
      ],
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل باسم الملكية وحرف الجر المناسبين:",
      template: "Ich gratuliere ___ Nachbarin ___ neuen Job. (جارتي / على)",
      blanks: [
        { correct: "meiner", options: ["meiner", "meine", "meinen"] },
        { correct: "zum", options: ["zum", "zur", "von"] },
      ],
      explanation:
        "الشخص بعد gratulieren في Dativ: meiner Nachbarin. وللمناسبة/الحدث يستعمل المثال zu + Dativ: zum neuen Job.",
      errorType: "case",
    },
    {
      id: "e14",
      type: "fill-blank",
      instructionAr: "أكمل بحسب المعنى: وجهة الحركة أولاً، ثم مكان الاحتفال:",
      template: "Die Gäste kommen von draußen und gehen ___ Innenhof. Danach feiern sie ___ Innenhof.",
      blanks: [
        { correct: "in den", options: ["in den", "im", "in der"] },
        { correct: "im", options: ["im", "in den", "in der"] },
      ],
      explanation:
        "في الجملة الأولى، gehen in den Innenhof يحدد وجهة الوصول (Wohin?)؛ أما im فيصف مكاناً لا وجهة، وin der لا يطابق جنس Innenhof المذكر. وفي الثانية، feiern im Innenhof يصف مكان الاحتفال (Wo?)؛ أما in den فيدل على وجهة، وin der لا يطابق الجنس. نختار الحالة بحسب علاقة المكان/الوجهة، لا بحسب وجود حركة فقط.",
      errorType: "case",
    },
  ];

export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      {
        wrong: "Ich helfe den Vater.",
        right: "Ich helfe dem Vater.",
        whyAr:
          "الفعل helfen يطلب Dativ في معنى المساعدة؛ Vater مفرد مذكر فتكون الأداة dem. لا تستبدلها بـden اعتماداً على ترجمة المفعول العربي.",
      },
      {
        wrong: "Ich gratuliere dich zum Geburtstag.",
        right: "Ich gratuliere dir zum Geburtstag.",
        whyAr:
          "يأخذ gratulieren الشخص المهنّأ في Dativ، لذلك نستخدم dir. أما zum Geburtstag فتركيب zu + Dativ مستقل في الجملة.",
      },
      {
        wrong: "Das Geschenk gefällt ich.",
        right: "Das Geschenk gefällt mir.",
        whyAr:
          "الشخص الذي يعجبه الشيء متمم Dativ بعد gefallen: mir. الهدية هي الفاعل الألماني في المثال، فلا نضع ضمير ich مكان المتمم.",
      },
      {
        wrong: "Die Blumen gefällt mir.",
        right: "Die Blumen gefallen mir.",
        whyAr:
          "الفاعل Die Blumen جمع، ولذلك يطابقه الفعل gefallen. الضمير mir متمم Dativ ولا يغيّر عدد الفعل.",
      },
      {
        wrong: "Ich helfe den Kinder.",
        right: "Ich helfe den Kindern.",
        whyAr:
          "في Dativ الجمع تصبح Kinder صيغة Kindern؛ أداة den وحدها لا تكفي هنا. لا تزد نوناً ثانية إذا انتهى الجمع أصلاً بـ‑n أو ‑s، مثل Eltern أو Autos.",
      },
      {
        wrong: "Wir feiern in den Innenhof.",
        right: "Wir feiern im Innenhof.",
        whyAr:
          "الاحتفال يحدث داخل الساحة، فالسؤال Wo? والمكان Dativ: im Innenhof. أما in den Innenhof فوجهةٌ إليها، كما في Wir gehen in den Innenhof.",
      },
    ],
    eselsbruecken: [
      "احفظ الفعل مع الحالة التي يطلبها في معناه المحدد؛ لا تستخرج حالة الألمانية من ترجمة عربية مفردة.",
      "في Dativ الجمع: den + الاسم، وتزاد ‑n إذا لم ينتهِ الجمع بـ‑n أو ‑s؛ Kinder → den Kindern، Eltern → den Eltern.",
    ],
    culturalNote: {
      title: "عبارة تهنئة وليست قاعدة اجتماعية",
      content:
        "«Herzlichen Glückwunsch zum Geburtstag!» صيغة تهنئة ألمانية شائعة. عادات الاحتفال واستقبال الضيوف وتقديم الهدايا تختلف بين الأشخاص والأسر؛ ومشهد الدرس خيالي للتدريب اللغوي، لا وصفٌ موحد لكل الناطقين بالألمانية.",
    },
  };
