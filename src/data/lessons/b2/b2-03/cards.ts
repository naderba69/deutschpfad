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
      template: "Das Thema, ___ ich mich interessiere, ist spannend. Der Ort, ___ wir uns treffen, ist noch offen.",
      blanks: [
        { correct: "wofür", options: ["wofür", "wo", "was"] },
        { correct: "wo", options: ["wofür", "wo", "was"] },
      ],
      explanation: "في الجملة النسبية: das Thema, wofür ich mich interessiere؛ وwo يعود على مكان في der Ort, wo wir uns treffen. وقد تظهر الصيغ نفسها أيضاً في الأسئلة غير المباشرة، لكن الجملتين هنا نسبيتان.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Recht", ar: "الحق/القانون", example: "Ich habe ein Recht.", exampleAr: "لدي حق.", level: "B2" },
    { id: "fc2", de: "das Gesetz", ar: "القانون", example: "Das Gesetz gilt in diesem Fall.", exampleAr: "يسري القانون في هذه الحالة.", level: "B2" },
    { id: "fc3", de: "der Vertrag", ar: "العقد", example: "Der Vertrag ist gültig.", exampleAr: "العقد ساري.", level: "B2" },
    { id: "fc4", de: "das Gericht", ar: "المحكمة", example: "Das Gericht entscheidet.", exampleAr: "المحكمة تقرر.", level: "B2" },
    { id: "fc5", de: "auf den / mit dem", ar: "نسبية بحرف جر", example: "Der Mann, auf den ich warte.", exampleAr: "الرجل الذي أنتظره.", level: "B2" },
    { id: "fc6", de: "wo (Ort)", ar: "عنصر وصل مكاني", example: "Das Land, wo ich lebe.", exampleAr: "البلد الذي أعيش فيه.", level: "B2" },
    { id: "fc7", de: "was (Relativ-Element)", ar: "عنصر وصل بعد alles", example: "Alles, was ich weiß.", exampleAr: "كل ما أعرفه.", level: "B2" },
    { id: "fc8", de: "der Anwalt", ar: "المحامي", example: "Der Anwalt hilft mir.", exampleAr: "المحامي يساعدني.", level: "B2" },
    { id: "fc9", de: "die Nebenkosten", ar: "التكاليف الإضافية", example: "Der Streit dreht sich um die Nebenkosten.", exampleAr: "يدور النزاع حول التكاليف الإضافية.", level: "B2" },
    { id: "fc10", de: "die Klausel", ar: "الشرط في العقد", example: "Eine Klausel regelt die jährliche Abrechnung.", exampleAr: "شرط ينظّم التسوية السنوية.", level: "B2" },
    { id: "fc11", de: "das Urteil", ar: "الحكم القضائي", example: "Das Urteil ist noch offen.", exampleAr: "لم يصدر الحكم بعد.", level: "B2" },
    { id: "fc12", de: "der Mieter", ar: "المستأجر", example: "Der Mieter prüft die Abrechnung.", exampleAr: "يفحص المستأجر التسوية.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-03-1", type: "simplify-announcement",
      titleAr: "بسّط نصاً قانونياً بالعربية لشخص عادي",
      sourceDe: "In dieser fiktiven Hausordnung ist das Rauchen in den Gemeinschaftsräumen untersagt. Bei wiederholten Verstößen wird die Hausverwaltung informiert.",
      taskAr: "بسّط هذا المثال التدريبي الافتراضي بالعربية: ما الممنوع، وأين، وما الإجراء المذكور؟ لا تتعامل معه بوصفه قاعدة قانونية عامة.",
      modelAnswerAr: "«في هذا المثال، التدخين ممنوع في الأماكن المشتركة. وإذا تكرر الأمر، فستُبلّغ إدارة المبنى.»",
      keyPointsAr: ["نقلت المنع (التدخين)", "حددت المكان (الأماكن المشتركة)", "نقلت الإجراء المذكور (إبلاغ الإدارة)، من دون اختراع غرامة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-03-1",
      scenarioAr: "تناقش قضية قانونية يومية مع جار أو زميل.",
      scenarioDe: "Diskussion über eine rechtliche Alltagsfrage.",
      strategyAr: "الاستراتيجية: عرض رأي في موقف يومي، والتمييز بين اقتراح شخصي وبين معلومة قانونية تحتاج إلى تحقق.",
      rounds: [
        {
          speakerDe: "Mein Nachbar macht nachts laute Musik. Was soll ich tun?",
          speakerAr: "جارتي تشغّل موسيقى صاخبة ليلاً. ماذا أفعل؟",
          options: [
            { de: "Wenn du dich sicher fühlst, kannst du zuerst höflich mit ihr sprechen. Falls das nicht hilft, wende dich an die Hausverwaltung. Bei einer Bedrohung hol dir sofort Hilfe.", ar: "إذا كنت تشعر بالأمان، يمكنك التحدث معها بأدب أولاً. إن لم ينفع، تواصل مع إدارة المبنى. وإذا شعرت بتهديد، اطلب المساعدة فوراً.", best: true, replyDe: "Guter Rat. Aber was ist, wenn sie aggressiv reagiert?", replyAr: "نصيحة جيدة. لكن ماذا لو ردت بعدوانية؟" },
            { de: "Du solltest sofort die Polizei rufen und schreien.", ar: "يجب أن تستدعي الشرطة فوراً وتصرخ.", best: false, replyDe: "Das wäre übertrieben. Zuerst das Gespräch suchen.", replyAr: "هذا مبالغ فيه. ابحث عن الحوار أولاً." },
          ],
        },
        {
          speakerDe: "Was ist, wenn sie aggressiv reagiert?",
          speakerAr: "ماذا لو ردت بعدوانية؟",
          options: [
            { de: "Wenn du dich bedroht fühlst, bring dich zuerst in Sicherheit und hol dir Hilfe. Wenn es sicher ist, dokumentiere die Vorfälle und wende dich an die Hausverwaltung. Welche Ruhezeiten gelten, hängt unter anderem von den örtlichen Regeln und der Hausordnung ab.", ar: "إذا شعرت بتهديد، ابتعد إلى مكان آمن واطلب المساعدة. وإذا كان ذلك آمناً، وثّق الوقائع وتواصل مع إدارة المبنى. وتختلف أوقات الهدوء بحسب القواعد المحلية ولائحة المبنى.", best: true, replyDe: "Das klingt nach einem sinnvollen Vorgehen.", replyAr: "يبدو إجراءً منطقياً." },
            { de: "Dann solltest du einfach umziehen und alles aufgeben.", ar: "إذن يجب أن تنتقل وتتخلى عن كل شيء.", best: false, replyDe: "Das ist keine Lösung, es gibt rechtliche Wege.", replyAr: "هذا ليس حلاً، توجد طرق قانونية." },
          ],
        },
      ],
    },
  ];
