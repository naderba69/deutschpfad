/**
 * b1-01 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Genitiv:",
      questionDe: "Das Ende ___ Films war überraschend.",
      options: ["des", "der", "dem", "den"],
      correctIndex: 0,
      explanation: "المحايد Genitiv: des Films.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«der» جر أو ملكية للمؤنث والجمع، والاسم هنا محايد.",
        "«dem» جر، والملكية هنا تحتاج إلى حالة الإضافة.",
        "«den» للمفعول به أو جمع الجر، لا لملكية محايد.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير النسبي:",
      questionDe: "Die Frau, ___ dort arbeitet, ist Ärztin.",
      options: ["die", "der", "das", "den"],
      correctIndex: 0,
      explanation: "مؤنث فاعل → die.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«der» موصول للمذكر، والمرجع مؤنث، لذلك لا يناسب.",
        "«das» موصول للمحايد، والمرجع ليس محايداً.",
        "«den» موصول مفعول به للمذكر، ولا يناسب المرجع.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["des", "ist", "Buch", "Das", "Lehrers", "neu", "."],
      correctSentence: "Das Buch des Lehrers ist neu.",
      explanation: "كتاب المعلّم جديد — Genitiv: des Lehrers.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "في الجملة خطأ واحد: اختر التصحيح الصحيح للكلمة المخطئة.",
      wrongSentence: "Trotz das Wetter gehen wir spazieren.",
      wrongWord: "das Wetter",
      correctWord: "des Wetters",
      options: ["des Wetters", "den Wetter", "der Wetter", "das Wetters"],
      explanation: "trotz يأخذ Genitiv: trotz des Wetters. das هنا محايد غير مناسب لأي حالة مطلوبة.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير النسبي:",
      template: "Der Student, ___ ich helfe, ist aus Tunis. (جر) Das Haus, ___ dort steht, ist alt. (فاعل)",
      blanks: [
        { correct: "dem", options: ["dem", "den", "der"] },
        { correct: "das", options: ["das", "der", "die"] },
      ],
      explanation: "بعد helfen (جر) مذكر → dem. فاعل محايد → das.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Studium", ar: "الدراسة الجامعية", example: "Das Studium dauert vier Jahre.", exampleAr: "الدراسة تستغرق أربع سنوات.", level: "B1" },
    { id: "fc2", de: "die Ausbildung", ar: "التدريب المهني", example: "Die Ausbildung dauert drei Jahre.", exampleAr: "التدريب يستغرق ثلاث سنوات.", level: "B1" },
    { id: "fc3", de: "das Fach", ar: "التخصص", example: "Mein Fach ist Informatik.", exampleAr: "تخصصي المعلوماتية.", level: "B1" },
    { id: "fc4", de: "der Genitiv", ar: "المضاف إليه", example: "das Buch des Lehrers", exampleAr: "كتاب المعلّم", level: "B1" },
    { id: "fc5", de: "wegen / trotz / während / statt", ar: "بسبب / رغم / خلال / بدلاً من (Genitiv)", example: "Wegen des Regens.", exampleAr: "بسبب المطر.", level: "B1" },
    { id: "fc6", de: "der Relativsatz", ar: "الجملة النسبية", example: "Der Mann, der dort steht.", exampleAr: "الرجل الذي يقف هناك.", level: "B1" },
    { id: "fc7", de: "wessen?", ar: "لمن؟", example: "Wessen Buch ist das?", exampleAr: "لمن هذا الكتاب؟", level: "B1" },
    { id: "fc8", de: "das Stipendium", ar: "المنحة", example: "Ich habe ein Stipendium bekommen.", exampleAr: "حصلت على منحة.", level: "B1" },

    { id: "fc9", de: "sich entscheiden", ar: "يقرّر", example: "Lena entscheidet sich für eine Ausbildung.", exampleAr: "تقرّر لينا أن تسلك التدريب المهني.", level: "B1" },
    { id: "fc10", de: "der Vorteil", ar: "الميزة", example: "Der Vorteil der Ausbildung ist das Geld.", exampleAr: "ميزة التدريب المهني هي المال.", level: "B1" },
    { id: "fc11", de: "die Bewerbung", ar: "طلب التوظيف", example: "Praktika helfen bei jeder Bewerbung.", exampleAr: "التدريبات العملية تساعد في كل طلب توظيف.", level: "B1" },
    { id: "fc12", de: "die Erfahrung", ar: "الخبرة", example: "Sie sammelt Erfahrungen während des Studiums.", exampleAr: "تجمع خبرات خلال الدراسة.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-01-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن نظام التعليم الألماني بالعربية",
      sourceDe: "In Deutschland gehen die Kinder nach der Grundschule auf verschiedene Schularten. Das Gymnasium führt zum Abitur, das zum Studium berechtigt.",
      taskAr: "لخّص النص بالعربية: المرحلة بعد الابتدائية، ودور المدرسة الثانوية الأكاديمية (Gymnasium).",
      modelAnswerAr: "«في ألمانيا ينتقل الأطفال بعد الابتدائية إلى مدارس مختلفة. المدرسة الثانوية الأكاديمية (Gymnasium) تؤدي إلى الأبيتور الذي يؤهل للدراسة الجامعية.»",
      keyPointsAr: ["نقلت تعدد المدارس بعد الابتدائية", "شرحت دور Gymnasium", "ربطت الأبيتور بالجامعة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-01-1",
      scenarioAr: "نقاش عن التعليم الجامعي بين ألمانيا وبلدك.",
      scenarioDe: "Diskussion über das Universitätssystem.",
      strategyAr: "الاستراتيجية: المقارنة بين نظامين وإبداء رأي مبرر.",
      rounds: [
        {
          speakerDe: "Wie ist das Universitätssystem in deinem Land?",
          speakerAr: "كيف نظام الجامعة في بلدك؟",
          options: [
            { de: "In meinem Land studieren viele nach der Sekundarschule, ähnlich wie in Deutschland. Allerdings hängt die Auswahl oft von den Noten ab.", ar: "في بلدي يدرس كثيرون بعد الثانوية، مشابه لألمانيا. لكن اختيار التخصص يعتمد غالباً على الدرجات.", best: true, replyDe: "Interessant. Und ist das Studium teuer?", replyAr: "مثير للاهتمام. وهل الدراسة مكلفة؟" },
            { de: "In meinem Land gibt es keine Universitäten.", ar: "في بلدي لا توجد جامعات.", best: false, replyDe: "Das kann nicht stimmen, jedes Land hat Universitäten.", replyAr: "هذا غير صحيح، كل بلد له جامعات." },
          ],
        },
        {
          speakerDe: "Ist das Studium in deinem Land teuer?",
          speakerAr: "هل الدراسة مكلفة في بلدك؟",
          options: [
            { de: "Ich glaube, die staatlichen Universitäten sind eher günstig. Man zahlt meist nur einen kleinen Beitrag.", ar: "أظن أن الجامعات الحكومية أرخص نسبياً. عادةً يدفع المرء رسماً صغيراً فقط.", best: true, replyDe: "Das ist ähnlich wie in Deutschland. Ein gutes System.", replyAr: "هذا مشابه لألمانيا. نظام جيد." },
            { de: "Sehr teuer, nur reiche Leute studieren.", ar: "مكلفة جداً، الأغنياء فقط يدرسون.", best: false, replyDe: "Das ist schade. Bildung sollte für alle zugänglich sein.", replyAr: "هذا مؤسف. التعليم يجب أن يكون متاحاً للجميع." },
          ],
        },
      ],
    },
  ];
