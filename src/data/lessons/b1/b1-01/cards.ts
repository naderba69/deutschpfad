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
      explanation: "في الأسلوب المعياري المكتوب نختار Genitiv: trotz des Wetters. وتوجد صيغ Dativ بعد trotz في الاستعمال؛ أما «trotz das Wetter» فليست الصيغة الصحيحة هنا.",
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
    { id: "fc1", de: "das Studium", ar: "الدراسة الجامعية", example: "Die Dauer des Studiums hängt vom Fach ab.", exampleAr: "تختلف مدة الدراسة بحسب التخصص.", level: "B1" },
    { id: "fc2", de: "die Ausbildung", ar: "التدريب المهني", example: "Eine duale Ausbildung dauert je nach Beruf unterschiedlich lang.", exampleAr: "تختلف مدة التدريب المزدوج بحسب المهنة.", level: "B1" },
    { id: "fc3", de: "das Fach", ar: "التخصص", example: "Mein Fach ist Informatik.", exampleAr: "تخصصي المعلوماتية.", level: "B1" },
    { id: "fc4", de: "der Genitiv", ar: "المضاف إليه", example: "das Buch des Lehrers", exampleAr: "كتاب المعلّم", level: "B1" },
    { id: "fc5", de: "wegen / trotz / während / statt", ar: "بسبب / رغم / خلال / بدلاً من (غالباً مع Genitiv في الأسلوب المعياري)", example: "Wegen des Regens.", exampleAr: "بسبب المطر.", level: "B1" },
    { id: "fc6", de: "der Relativsatz", ar: "الجملة النسبية", example: "Der Mann, der dort steht.", exampleAr: "الرجل الذي يقف هناك.", level: "B1" },
    { id: "fc7", de: "wessen?", ar: "لمن؟", example: "Wessen Buch ist das?", exampleAr: "لمن هذا الكتاب؟", level: "B1" },
    { id: "fc8", de: "das Stipendium", ar: "المنحة", example: "Ich habe ein Stipendium bekommen.", exampleAr: "حصلت على منحة.", level: "B1" },

    { id: "fc9", de: "sich entscheiden", ar: "يقرّر", example: "Lena entscheidet sich für eine Ausbildung.", exampleAr: "تقرّر لينا أن تسلك التدريب المهني.", level: "B1" },
    { id: "fc10", de: "der Vorteil", ar: "الميزة", example: "Ein Vorteil ihrer Ausbildung ist die Vergütung.", exampleAr: "من مزايا تدريبها المهني الأجر.", level: "B1" },
    { id: "fc11", de: "die Bewerbung", ar: "طلب التوظيف", example: "Praktika können bei einer Bewerbung helfen.", exampleAr: "قد تساعد التدريبات العملية في طلب التوظيف.", level: "B1" },
    { id: "fc12", de: "die Erfahrung", ar: "الخبرة", example: "Sie sammelt Erfahrungen während des Studiums.", exampleAr: "تجمع خبرات خلال الدراسة.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-01-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن نظام التعليم الألماني بالعربية",
      sourceDe: "In Deutschland wechseln Kinder nach der Grundschule auf verschiedene Schularten. Das Gymnasium führt zum Abitur, das in der Regel den Zugang zu einem Hochschulstudium ermöglicht. Für manche Studiengänge gelten zusätzliche Zulassungsbedingungen.",
      taskAr: "لخّص النص بالعربية: المرحلة بعد الابتدائية، ودور المدرسة الثانوية الأكاديمية (Gymnasium).",
      modelAnswerAr: "«في ألمانيا ينتقل الأطفال بعد الابتدائية إلى أنواع مختلفة من المدارس. ويؤدي Gymnasium إلى شهادة Abitur التي تتيح عادةً الدراسة الجامعية، مع شروط قبول إضافية لبعض التخصصات.»",
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
            { de: "In meinem Land gibt es keine einzige Universität.", ar: "لا توجد جامعة واحدة في بلدي.", best: false, replyDe: "Das ist eine sehr allgemeine Aussage. Weißt du, ob das für das ganze Land gilt?", replyAr: "هذا تعميم واسع. هل تعرف إن كان ينطبق على البلد كله؟" },
          ],
        },
        {
          speakerDe: "Ist das Studium in deinem Land teuer?",
          speakerAr: "هل الدراسة مكلفة في بلدك؟",
          options: [
            { de: "Ich glaube, das hängt von der Hochschule und dem Studiengang ab. An manchen staatlichen Hochschulen sind die Beiträge niedrig; anderswo können zusätzliche Gebühren anfallen.", ar: "أظن أن الأمر يتوقف على الجامعة والتخصص. تكون المساهمات منخفضة في بعض الجامعات الحكومية، وقد توجد رسوم إضافية في أماكن أخرى.", best: true, replyDe: "Ja, die Kosten sind nicht überall gleich. Auch in Deutschland sollte man die Angaben der jeweiligen Hochschule prüfen.", replyAr: "نعم، التكاليف ليست متساوية في كل مكان. وفي ألمانيا أيضاً ينبغي التحقق من معلومات الجامعة المعنية." },
            { de: "Das Studium ist immer kostenlos.", ar: "الدراسة مجانية دائماً.", best: false, replyDe: "Das ist zu allgemein. Studiengebühren und Beiträge können sich je nach Hochschule und Studiengang unterscheiden.", replyAr: "هذا تعميم واسع؛ فقد تختلف الرسوم والمساهمات بحسب الجامعة والتخصص." },
          ],
        },
      ],
    },
  ];
