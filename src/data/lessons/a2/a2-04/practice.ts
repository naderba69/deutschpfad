/**
 * a2-04 — بنك التمارين والأخطاء الشائعة (الجزء «practice»)
 * فُصل من a2-04.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const practiceBank: NonNullable<Lesson["practiceBank"]> = [
    {
      id: "e1", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة لوصف موضع الكتاب:",
      questionDe: "Das Buch liegt auf ___ Tisch. (Wo?)",
      options: ["dem", "den", "der", "das"], correctIndex: 0,
      explanation: "الجملة تحدد مكان الكتاب؛ auf dem Tisch.", errorType: "case",
      optionExplanations: [
        undefined,
        "«den» منصوب؛ و«Wo?» مع «auf» تأخذ Dativ ⇒ «auf dem Tisch».",
        "«der» مرفوع أو مؤنث؛ و«der Tisch» هنا في Dativ ⇒ «dem».",
        "«das» محايد؛ و«der Tisch» مذكّر. ",
      ],
    },
    {
      id: "e2", type: "multiple-choice",
      instructionAr: "اختر الأداة المناسبة للوجهة:",
      questionDe: "Ich lege das Buch auf ___ Tisch. (Wohin?)",
      options: ["den", "dem", "der", "das"], correctIndex: 0,
      explanation: "الطاولة وجهة وضع الكتاب؛ على الطاولة = auf den Tisch.", errorType: "case",
      optionExplanations: [
        undefined,
        "«dem» Dativ للموضع «Wo?»؛ والسؤال هنا «Wohin?» ⇒ Akkusativ.",
        "«der» مرفوع أو مؤنث؛ و«der Tisch» منصوب بعد «auf» مع الوجهة.",
        "«das» محايد؛ و«Tisch» مذكّر ⇒ «auf den Tisch». ",
      ],
    },
    {
      id: "e3", type: "matching",
      instructionAr: "صِل كل حرف جر بمعناه المكاني التقريبي في هذه الأمثلة:",
      pairs: [
        { left: "in", right: "داخل" }, { left: "an", right: "عند/على تماسّ" },
        { left: "auf", right: "على سطح" }, { left: "über", right: "فوق" },
        { left: "unter", right: "تحت" }, { left: "vor", right: "أمام" },
        { left: "hinter", right: "خلف" }, { left: "neben", right: "بجانب" },
        { left: "zwischen", right: "بين" },
      ],
      explanation: "هذه مقابلات تقريبية لمعاني مكانية شائعة؛ يتحدد حرف الجر من العلاقة المقصودة والسياق.", errorType: "vocabulary",
    },
    {
      id: "e4", type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["den", "Ich", "Tisch", "auf", "stelle", "die", "Tasse", "."],
      correctSentence: "Ich stelle die Tasse auf den Tisch.",
      explanation: "العبارة المكانية تحدد وجهة وضع الكوب: auf den Tisch.", errorType: "word-order",
    },
    {
      id: "e5", type: "error-correction",
      instructionAr: "صحّح الأداة في جملة الوجهة:",
      wrongSentence: "Ich lege das Buch auf dem Tisch. (المقصود: أضعه على الطاولة)",
      wrongWord: "auf dem", correctWord: "auf den", options: ["auf den", "auf der", "auf das", "an den"],
      explanation: "في المعنى المقصود الطاولة وجهة الوضع، لذلك auf den Tisch.", errorType: "case",
    },
    {
      id: "e6", type: "fill-blank",
      instructionAr: "أكمل بحرف الجر الذي يطابق المعنى بين القوسين:",
      template: "Die Katze schläft ___ dem Sofa. (تحت) Das Bild hängt ___ der Wand. (على تماسّ مع الجدار) Der Schlüssel liegt ___ dem Tisch. (على)",
      blanks: [
        { correct: "unter", options: ["unter", "an", "auf"] },
        { correct: "an", options: ["unter", "an", "auf"] },
        { correct: "auf", options: ["unter", "an", "auf"] },
      ],
      explanation: "في هذه المشاهد: unter dem Sofa، an der Wand، auf dem Tisch.", errorType: "preposition",
    },
    {
      id: "e7", type: "transformation",
      instructionAr: "حوّل وصف الموضع إلى جملة تذكر فعل الوضع والوجهة:",
      prompt: "Die Tasse steht auf dem Tisch. → (أنا أضع الكوب على الطاولة)",
      acceptedAnswers: ["Ich stelle die Tasse auf den Tisch", "Ich stelle die Tasse auf den Tisch."],
      sampleAnswer: "Ich stelle die Tasse auf den Tisch.",
      explanation: "في جملة التحويل الجديدة، الطاولة هي وجهة الوضع: auf den Tisch.", errorType: "case",
    },
    {
      id: "e8", type: "multiple-choice",
      instructionAr: "اختر معنى الفعل في الجملة:",
      questionDe: "Ich ziehe in eine neue Wohnung um.", questionAr: "ما معنى الجملة؟",
      options: ["أنتقل إلى شقة جديدة", "أبحث عن شقة جديدة", "أبيع شقتي", "أشتري شقة"], correctIndex: 0,
      explanation: "umziehen هنا يعني تغيير السكن؛ ويأتي الجزء um في نهاية الجملة الرئيسية.", errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "البحث «suchen»: «Ich suche eine neue Wohnung»، لا «umziehen».",
        "البيع «verkaufen»: «Ich verkaufe meine Wohnung».",
        "الشراء «kaufen»: «Ich kaufe eine Wohnung». ",
      ],
    },
    {
      id: "e9", type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Die Miete ist sechshundert Euro warm.",
      wrongWord: "warm", correctWord: "warm", isAlreadyCorrect: true,
      options: ["warm", "heiß", "kalt", "warme"],
      explanation: "الجملة سليمة: warm وصف اصطلاحي للإيجار مع التكاليف المدرجة، وليس درجة حرارة. افحص الإعلان لمعرفة ما يشمله.", errorType: "vocabulary",
    },
    {
      id: "e10", type: "dictation",
      instructionAr: "استمع واكتب الجملة:", audioText: "Ich stelle die Kiste in die Ecke.",
      explanation: "الزاوية هي الوجهة التي توضع فيها الصناديق: in die Ecke.", errorType: "spelling",
    },
    {
      id: "e11", type: "matching",
      instructionAr: "صِل مفردات المبنى بمعانيها:",
      pairs: [
        { left: "der Nachbar", right: "الجار" }, { left: "die Hausordnung", right: "نظام هذا المبنى" },
        { left: "die Ruhezeiten", right: "أوقات الهدوء المحددة" }, { left: "der Hausflur", right: "مدخل/ممر المبنى" },
        { left: "die Nebenkosten", right: "التكاليف الجانبية" },
      ],
      hint: "تختلف قواعد Hausordnung من مبنى إلى آخر؛ لا تفترض ساعات موحّدة.",
      explanation: "الأزواج توضح معاني المفردات في سياق السكن.", errorType: "vocabulary", points: 2,
    },
    {
      id: "e12", type: "fill-blank",
      instructionAr: "أكمل الأداة التي تناسب الوجهة ثم الموضع:",
      template: "Der Müll kommt in ___ Tonne. (Wohin?) · Der Teppich liegt im ___ (غرفة المعيشة)",
      blanks: [
        { correct: "die", options: ["die", "der", "dem", "das"] },
        { correct: "Wohnzimmer", options: ["Wohnzimmer", "Wohnzimmers", "Wohnzimmeres"] },
      ],
      hint: "الأولى وجهة: in die Tonne. والثانية im = in dem، والاسم بعده Wohnzimmer.",
      explanation: "Die Tonne وجهة مؤنثة في Akkusativ؛ أما im Wohnzimmer فيصف موضع السجادة.", errorType: "case", points: 2,
    },
    {
      id: "e13", type: "fill-blank",
      instructionAr: "أكمل بالأداة المناسبة للموضع ثم وجهة التعليق:",
      template: "Der Spiegel hängt an ___ Wand, aber ich hänge das Bild an ___ Wand daneben.",
      blanks: [
        { correct: "der", options: ["der", "die", "dem"], errorType: "case" },
        { correct: "die", options: ["die", "der", "dem"], errorType: "case" },
      ],
      explanation: "الصورة الأولى موضع ثابت: an der Wand. وفي الثانية الجدار وجهة التعليق: an die Wand.", errorType: "case",
    },
    {
      id: "e14", type: "multiple-choice",
      instructionAr: "اختر الفعل الذي يصف المشهد المحدد:",
      questionDe: "Ich ___ die Vase auf den Tisch. (أضعها قائمة على قاعدتها)",
      options: ["stelle", "lege", "setze", "liege"], correctIndex: 0,
      explanation: "في المشهد المحدد تكون المزهرية قائمة؛ لذلك stelle. ولو وُضعت على جانبها فقد يلائم legen؛ والوجهة هنا auf den Tisch.", errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«legen» لما يوضع منبسطاً أو على جانبه؛ والمزهرية قائمة على قاعدتها ⇒ «stellen».",
        "«setzen» لكائنٍ يجلس أو يُجلَس («sich setzen»)، لا لمزهرية على طاولة.",
        "«liegen» يصف الموضع بلا فاعلٍ يضع شيئاً؛ وهنا فاعلٌ يضع المزهرية ⇒ «stelle». ",
      ],
    },
    {
      id: "e15", type: "error-correction",
      instructionAr: "صحّح الصيغة مع الحفاظ على معنى الوجهة بين القوسين:",
      wrongSentence: "Am Samstag ziehen wir im Erdgeschoss um. (المقصود: ننتقل إلى الطابق الأرضي)",
      wrongWord: "im", correctWord: "ins", options: ["ins", "am", "aufs", "beim"],
      explanation: "مع معنى الانتقال إلى الطابق الأرضي نقول ins Erdgeschoss؛ أما im فيصف موقعاً.", errorType: "preposition",
    },
    {
      id: "e16", type: "matching",
      instructionAr: "صِل كل مصطلح مالي بشرحه المحدد:",
      pairs: [
        { left: "die Kaltmiete", right: "الإيجار الأساسي قبل التكاليف الجانبية" },
        { left: "die Nebenkosten", right: "تكاليف تشغيلية وفق الاتفاق" },
        { left: "die Warmmiete", right: "الإيجار مع التدفئة والتكاليف المدرجة عادةً" },
        { left: "die Kaution", right: "مبلغ ضمان للسكن، وليس إيجاراً شهرياً" },
      ],
      explanation: "تحقّق من قائمة التكاليف المشمولة في الإعلان والعقد؛ لا تعني Warmmiete بالضرورة كل مصاريف السكن الشخصية.", errorType: "vocabulary",
    },
    {
      id: "e17", type: "transformation",
      instructionAr: "حوّل من وصف الموضع إلى جملة تصف وضع السجادة:",
      prompt: "Der Teppich liegt auf dem Boden. → (Ich ...)",
      acceptedAnswers: ["Ich lege den Teppich auf den Boden.", "Ich lege den Teppich auf den Boden"],
      sampleAnswer: "Ich lege den Teppich auf den Boden.",
      explanation: "في الجملة الأولى السجادة على الأرض؛ وفي الثانية يذكر المتكلم وضعها على الأرض، وهي الوجهة.", errorType: "case",
    },
    {
      id: "e18", type: "multiple-choice",
      instructionAr: "اختر الفعل الأدقّ حين يريد المتكلم معاينة الشقة بنفسه:",
      questionDe: "Ich möchte die Wohnung gern ___ . Können wir einen Termin vereinbaren?",
      options: ["besichtigen", "aussehen", "anschauen lassen", "besuchen"], correctIndex: 0,
      explanation: "besichtigen هو الفعل الأدقّ لمعاينة الشقة بنفس المتكلم. anschauen lassen قد يعني أن يطلب من شخص آخر النظر إليها؛ وbesuchen وaussehen لا يؤديان المعنى المقصود هنا.", errorType: "vocabulary",
      optionExplanations: [
        undefined,
        "«aussehen» يصف المظهر («Die Wohnung sieht hell aus») ولا يفيد المعاينة هنا.",
        "«anschauen lassen» يعني أن يُطلع غيره عليها؛ والمعاينة الذاتية «besichtigen».",
        "«besuchen» زيارة شخصٍ أو مكان اجتماعياً، لا معاينة شقة بغرض الاستئجار. ",
      ],
    },
    {
      id: "e19", type: "fill-blank",
      instructionAr: "أكمل بالفعل المناسب بحسب المشهد الموضّح:",
      template: "Der Schlüssel ___ noch im Schloss, und die Kartons stehen aufrecht neben dem Aufzug.",
      blanks: [{ correct: "steckt", options: ["steckt", "stellt", "legt"] }],
      explanation: "المفتاح موجود داخل القفل: steckt. وaufrecht توضح أن الصناديق قائمة، لذلك stehen.", errorType: "vocabulary",
    },
    {
      id: "e20", type: "word-ordering",
      instructionAr: "رتّب سؤال المعاينة:",
      tokens: ["die", "Sind", "in", "der", "Nebenkosten", "Warmmiete", "enthalten", "?"],
      correctSentence: "Sind die Nebenkosten in der Warmmiete enthalten?",
      explanation: "يبدأ السؤال بالفعل المصرف Sind؛ وتأتي بقية العبارة وenthalten في النهاية.", errorType: "word-order",
    },
  ];

export const fehlerUndTipps: NonNullable<Lesson["fehlerUndTipps"]> = {
    mistakes: [
      { wrong: "Ich lege das Buch auf dem Tisch.", right: "Ich lege das Buch auf den Tisch.", whyAr: "في هذا المقصود يضع المتكلم الكتاب إلى الطاولة؛ الطاولة وجهة، لذلك auf den Tisch.", classification: "error" },
      { wrong: "Der Teppich liegt auf den Boden.", right: "Der Teppich liegt auf dem Boden.", whyAr: "الجملة تصف موضع السجادة على الأرض، لا وجهة نقلها؛ لذلك auf dem Boden.", classification: "error" },
      { wrong: "Der Tisch steht neben das Sofa.", right: "Der Tisch steht neben dem Sofa.", whyAr: "هنا نصف موضع الطاولة بجانب الأريكة: neben dem Sofa. أما وضع الطاولة إلى جوارها فيتطلب معنى وجهة مختلفاً.", classification: "error" },
    ],
    eselsbruecken: [
      "في الأمثلة المكانية: Wo? يحدد الموقع أو مكان حدوث الحركة فيأتي Dativ؛ وWohin? يحدد الوجهة فيأتي Akkusativ. لا تكفي الحركة الجسدية وحدها.",
      "أزواج stellen/stehen وlegen/liegen تساعدك على تخيل المشهد؛ اسأل مع ذلك عن دور عبارة المكان، ولا تستنتج الحالة من تعدّي الفعل وحده.",
    ],
    culturalNote: {
      title: "مصطلحات السكن والسياق المحلي",
      content: "هذه أمثلة لغوية عامة وليست استشارة قانونية. تختلف عناصر Nebenkosten وWarmmiete بحسب العرض والعقد، وقد تُدفع الكهرباء أو الإنترنت منفصلين. يحدد §551 BGB سقف Mietkaution في السكن ويجيز دفع المبلغ النقدي على ثلاثة أقساط شهرية؛ لا يعني ذلك أن كل عقد يطلب السقف أو أن الرد فوري. أما Ruhezeiten فتُقرأ من Hausordnung والقواعد المطبقة على المكان؛ المثال السمعي يخص مبنى متخيلاً واحداً فقط.",
    },
  };
