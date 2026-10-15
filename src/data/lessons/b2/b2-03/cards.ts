/**
 * b2-03 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-03.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر النسبية:",
      questionDe: "Der Anwalt, ___ ich spreche, ist gut.",
      options: ["mit dem", "mit den", "auf den", "über den"],
      correctIndex: 0,
      explanation: "sprechen mit + Dativ: mit dem.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«mit den» حالة جمع، ولا تناسب Anwalt المفرد المذكر.",
        "«auf den» حرف الجر لا يناسب sprechen mit.",
        "«über den» حرف الجر لا يناسب sprechen mit.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير:",
      questionDe: "Das Land, ___ ich geboren wurde.",
      options: ["wo", "was", "womit", "wofür"],
      correctIndex: 0,
      explanation: "مكان → wo.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«was» تستعمل لشيء غير محدد، ولا تناسب مكاناً.",
        "«womit» تستعمل مع حرف جر لشيء، ولا تناسب مكاناً.",
        "«wofür» تستعمل مع حرف جر لشيء، ولا تناسب مكاناً.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Alles", ",", "was", "du", "sagst", ",", "ist", "wichtig", "."],
      correctSentence: "Alles, was du sagst, ist wichtig.",
      explanation: "كل ما تقوله مهم — was بعد alles.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das Gesetz, das ich denke an, ist neu.",
      wrongWord: "das ich denke an",
      correctWord: "an das ich denke",
      options: ["an das ich denke", "das ich denke an", "an dem ich denke", "ich an das denke"],
      explanation: "حرف الجر يسبق الاسم الموصول ولا يبقى في النهاية. denken an + Akkusativ، و das Gesetz محايد ⇒ an das (لا an dem).",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل:",
      template: "Ich weiß noch nicht, ___ ich mich interessiere. (لأي شيء) Ich weiß, ___ er arbeitet. (أين)",
      blanks: [
        { correct: "wofür", options: ["wofür", "wo", "was"] },
        { correct: "wo", options: ["wofür", "wo", "was"] },
      ],
      explanation: "sich interessieren für + شيء ← يُسأل عنه بالظرف الحرفي wofür (وليس für was). أما السؤال عن المكان فبـ wo. لاحظ أن الفعل انعكاسي: ich interessiere mich.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Recht", ar: "الحق/القانون", example: "Ich habe ein Recht.", exampleAr: "لدي حق.", level: "B2" },
    { id: "fc2", de: "das Gesetz", ar: "القانون", example: "Das Gesetz gilt überall.", exampleAr: "يسري القانون في كل مكان.", level: "B2" },
    { id: "fc3", de: "der Vertrag", ar: "العقد", example: "Der Vertrag ist gültig.", exampleAr: "العقد ساري.", level: "B2" },
    { id: "fc4", de: "das Gericht", ar: "المحكمة", example: "Das Gericht entscheidet.", exampleAr: "المحكمة تقرر.", level: "B2" },
    { id: "fc5", de: "auf den / mit dem / für das", ar: "نسبية بحرف جر", example: "Der Mann, auf den ich warte.", exampleAr: "الرجل الذي أنتظره.", level: "B2" },
    { id: "fc6", de: "wo (Relativ)", ar: "حيث (مكان)", example: "Das Land, wo ich lebe.", exampleAr: "البلد الذي أعيش فيه.", level: "B2" },
    { id: "fc7", de: "was (Relativ)", ar: "ما (بعد كل شيء)", example: "Alles, was ich weiß.", exampleAr: "كل ما أعرفه.", level: "B2" },
    { id: "fc8", de: "der Anwalt", ar: "المحامي", example: "Der Anwalt hilft mir.", exampleAr: "المحامي يساعدني.", level: "B2" },
    { id: "fc9", de: "die Nebenkosten", ar: "التكاليف الإضافية", example: "Der Streit dreht sich um die Nebenkosten.", exampleAr: "يدور النزاع حول التكاليف الإضافية.", level: "B2" },
    { id: "fc10", de: "die Klausel", ar: "الشرط في العقد", example: "Eine Klausel regelt die jährliche Abrechnung.", exampleAr: "شرط ينظّم التسوية السنوية.", level: "B2" },
    { id: "fc11", de: "das Urteil", ar: "الحكم القضائي", example: "Ein Urteil wird im Herbst erwartet.", exampleAr: "يُنتظر صدور حكم في الخريف.", level: "B2" },
    { id: "fc12", de: "der Mieter", ar: "المستأجر", example: "Der Mieter hat zu viel bezahlt.", exampleAr: "دفع المستأجر أكثر من اللازم.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-03-1", type: "simplify-announcement",
      titleAr: "بسّط نصاً قانونياً بالعربية لشخص عادي",
      sourceDe: "Gemäß § 5 der Hausordnung ist das Rauchen in den Gemeinschaftsräumen untersagt. Zuwiderhandlungen können mit einer Geldstrafe belegt werden.",
      taskAr: "بسّط النص القانوني بالعربية: ما الممنوع، أين، وما العقوبة — بلغة مفهومة.",
      modelAnswerAr: "«وفقاً للمادة 5 من نظام البيت: ممنوع التدخين في الأماكن المشتركة، وقد تُفرض غرامة مالية على المخالفين.»",
      keyPointsAr: ["نقلت المنع (التدخين)", "حددت المكان (الأماكن المشتركة)", "نقلت العقوبة (غرامة)"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-03-1",
      scenarioAr: "تناقش قضية قانونية يومية مع جار أو زميل.",
      scenarioDe: "Diskussion über eine rechtliche Alltagsfrage.",
      strategyAr: "الاستراتيجية: شرح موقف قانوني وإقناع بأدلة.",
      rounds: [
        {
          speakerDe: "Mein Nachbar macht nachts laute Musik. Was soll ich tun?",
          speakerAr: "جارتي تشغّل موسيقى صاخبة ليلاً. ماذا أفعل؟",
          options: [
            { de: "Du solltest zuerst höflich mit ihr sprechen. Falls das nicht hilft, kannst du dich bei der Hausverwaltung beschweren.", ar: "يجب أن تتحدث معها بأدب أولاً. إذا لم ينفع، يمكنك التقدم بشكوى لإدارة البناء.", best: true, replyDe: "Guter Rat. Aber was ist, wenn sie aggressiv reagiert?", replyAr: "نصيحة جيدة. لكن ماذا لو ردت بعدوانية؟" },
            { de: "Du solltest sofort die Polizei rufen und schreien.", ar: "يجب أن تستدعي الشرطة فوراً وتصرخ.", best: false, replyDe: "Das wäre übertrieben. Zuerst das Gespräch suchen.", replyAr: "هذا مبالغ فيه. ابحث عن الحوار أولاً." },
          ],
        },
        {
          speakerDe: "Was ist, wenn sie aggressiv reagiert?",
          speakerAr: "ماذا لو ردت بعدوانية؟",
          options: [
            { de: "In dem Fall solltest du die Situation dokumentieren und dich offiziell beschweren. Ruhezeiten können in der Hausordnung oder im Gesetz geregelt sein.", ar: "في هذه الحالة وثّق الموقف وقدم شكوى رسمية. أوقات الهدوء قد تكون منظمة في لائحة البناء أو في القانون.", best: true, replyDe: "Das klingt nach einem sinnvollen Vorgehen.", replyAr: "يبدو إجراءً منطقياً." },
            { de: "Dann solltest du einfach umziehen und alles aufgeben.", ar: "إذن يجب أن تنتقل وتتخلى عن كل شيء.", best: false, replyDe: "Das ist keine Lösung, es gibt rechtliche Wege.", replyAr: "هذا ليس حلاً، توجد طرق قانونية." },
          ],
        },
      ],
    },
  ];
