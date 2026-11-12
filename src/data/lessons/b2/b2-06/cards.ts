/**
 * b2-06 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b2-06.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الاسم المشتق:",
      questionDe: "verhandeln → die ___",
      options: ["Verhandlung", "Verhandeln", "Handlung", "Verhandelt"],
      correctIndex: 0,
      explanation: "الاشتقاق بـ ung- يعطي die Verhandlung. و das Verhandeln اسم مصدر محايد، و die Handlung كلمة أخرى معناها «فعل/حبكة».",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Verhandeln» صيغة المصدر، ولا تناسب الاسم المؤنث بعد die.",
        "«Handlung» اسم آخر بمعنى الفعل أو القصة، وليس اسم Verhandlung.",
        "«Verhandelt» صيغة فعل، ولا تناسب الاسم.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصياغة الاسمية:",
      questionDe: "Wenn man schreibt, übt man. →",
      options: ["Beim Schreiben übt man.", "Man schreibt und übt.", "Das Schreiben man übt.", "Schreiben ist üben."],
      correctIndex: 0,
      explanation: "صياغة اسمية: beim + مصدر مستعمل اسماً.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Man schreibt und übt.» لا تستخدم المصدر اسماً كما يطلب السؤال.",
        "«Das Schreiben man übt.» ترتيب خاطئ، ولا تعبّر عن الجملة.",
        "«Schreiben ist üben.» تغيّر المعنى، ولا تعبّر عن الجملة.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Nachdenken", "braucht", "man", "Zum", "Ruhe", "."],
      correctSentence: "Zum Nachdenken braucht man Ruhe.",
      explanation: "للتفكير يحتاج المرء هدوءاً.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Beim arbeiten höre ich Musik.",
      wrongWord: "arbeiten",
      correctWord: "Arbeiten",
      options: ["Arbeiten", "arbeiten", "Arbeitens", "gearbeitet"],
      explanation: "الاسم بحرف كبير: beim Arbeiten.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالاسم:",
      template: "die ___ (verbessern) · das ___ (lesen) · die ___ (arbeiten)",
      blanks: [
        { correct: "Verbesserung", options: ["Verbesserung", "Verbessern", "Besserung"] },
        { correct: "Lesen", options: ["Lesen", "Leser", "Lesung"] },
        { correct: "Arbeit", options: ["Arbeit", "Arbeiten", "Arbeiter"] },
      ],
      explanation: "Verbesserung، das Lesen، die Arbeit.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Karriere", ar: "المسار المهني", example: "Meine Karriere beginnt.", exampleAr: "يبدأ مساري المهني.", level: "B2" },
    { id: "fc2", de: "die Führungskraft", ar: "القائد/المدير", example: "Die Führungskraft entscheidet.", exampleAr: "القائد يقرر.", level: "B2" },
    { id: "fc3", de: "verhandeln", ar: "يتفاوض", example: "Wir verhandeln über das Gehalt.", exampleAr: "نتفاوض على الراتب.", level: "B2" },
    { id: "fc4", de: "die Probezeit", ar: "فترة التجربة", example: "Die Probezeit dauert 6 Monate.", exampleAr: "تستغرق فترة التجربة 6 أشهر.", level: "B2" },
    { id: "fc5", de: "die Nominalisierung", ar: "الاشتقاق الاسمي", example: "lesen → das Lesen", exampleAr: "يقرأ → القراءة", level: "B2" },
    { id: "fc6", de: "beim Lesen / zum Nachdenken", ar: "عند القراءة / للتفكير", example: "Beim Lesen lernt man.", exampleAr: "بالقراءة يتعلم المرء.", level: "B2" },
    { id: "fc7", de: "die Verbesserung", ar: "التحسين", example: "Die Verbesserung ist nötig.", exampleAr: "التحسين ضروري.", level: "B2" },
    { id: "fc8", de: "die Zusammenarbeit", ar: "التعاون", example: "Die Zusammenarbeit funktioniert.", exampleAr: "التعاون يعمل.", level: "B2" },
    { id: "fc9", de: "das Homeoffice", ar: "العمل من المنزل", example: "Ich arbeite im Homeoffice.", exampleAr: "أعمل من المنزل.", level: "B2" },
    { id: "fc10", de: "die Gleitzeit", ar: "وقت العمل المرن", example: "Gleitzeit ist sehr flexibel.", exampleAr: "وقت العمل المرن مرن جداً.", level: "B2" },
    { id: "fc11", de: "die Videokonferenz", ar: "اجتماع الفيديو", example: "Die Videokonferenz beginnt um neun.", exampleAr: "يبدأ اجتماع الفيديو في التاسعة.", level: "B2" },
    { id: "fc12", de: "von zu Hause aus arbeiten", ar: "يعمل من المنزل", example: "Sie arbeitet von zu Hause aus.", exampleAr: "تعمل من المنزل.", level: "B2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b2-06-1", type: "summarize-de-to-ar",
      titleAr: "لخّص حالة افتراضية عن ساعات العمل بالعربية",
      sourceDe: "Fiktiver Fall, keine Studie: In einem erfundenen Betrieb sammeln sich Überstunden. In einer ebenfalls erfundenen internen Befragung berichten Beschäftigte von wenig Erholungszeit. Die Geschäftsführung möchte deshalb Arbeitsabläufe und Produktivität prüfen.",
      taskAr: "لخّص الحالة الافتراضية، وميّز بوضوح بين ما يذكره السيناريو وما لا يمكن تعميمه على بيئات العمل.",
      modelAnswerAr: "«في الحالة الافتراضية تتراكم ساعات العمل الإضافية، ويذكر بعض الموظفين في استبيان متخيّل قلة وقت الراحة. لذلك تريد الإدارة مراجعة سير العمل والإنتاجية. ولا تمثّل هذه الحالة دراسة أو قاعدة عامة.»",
      keyPointsAr: ["أوضح أن السيناريو افتراضي وليس دراسة", "ذكر تراكم الساعات الإضافية وقلة الراحة كما وردا في الحالة", "ذكر رغبة الإدارة في مراجعة سير العمل والإنتاجية"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b2-06-1",
      scenarioAr: "نقاش عن ساعات العمل المرنة في شركتك.",
      scenarioDe: "Diskussion über flexible Arbeitszeiten.",
      strategyAr: "الاستراتيجية: مناقشة مهنية مع موازنة بين المصالح.",
      rounds: [
        {
          speakerDe: "Sollten Unternehmen flexible Arbeitszeiten anbieten?",
          speakerAr: "هل يجب أن تقدم الشركات ساعات عمل مرنة؟",
          options: [
            { de: "Meiner Ansicht nach können beide Seiten profitieren. Arbeitnehmer gewinnen Flexibilität; Arbeitgeber können mit klaren Absprachen die Zusammenarbeit planbar gestalten.", ar: "في رأيي يمكن أن يستفيد الطرفان. يكسب الموظفون مرونة أكبر، ويستطيع أصحاب العمل تنظيم التعاون بتفاهمات واضحة.", best: true, replyDe: "Ein überzeugendes Argument. Aber wie steht es mit der Teamkoordination?", replyAr: "حجة مقنعة. لكن ماذا عن تنسيق الفريق؟" },
            { de: "Flexible Zeiten zerstören die Teamarbeit völlig.", ar: "الأوقات المرنة تدمر العمل الجماعي تماماً.", best: false, replyDe: "Das ist zu pauschal. Viele Teams funktionieren sehr gut damit.", replyAr: "هذا تعميم مفرط. فرق كثيرة تعمل جيداً بها." },
          ],
        },
        {
          speakerDe: "Wie kann man Teamarbeit mit flexiblen Zeiten vereinbaren?",
          speakerAr: "كيف يمكن التوفيق بين العمل الجماعي والأوقات المرنة؟",
          options: [
            { de: "Man könnte Kernzeiten festlegen, in denen alle erreichbar sind, und den Rest flexibel gestalten. So lassen sich gemeinsame Abstimmung und flexible Zeiten verbinden.", ar: "يمكن تحديد ساعات أساسية يكون فيها الجميع متاحين، وجعل الباقي مرناً. وهكذا يمكن الجمع بين التنسيق المشترك والمرونة في الوقت.", best: true, replyDe: "Eine pragmatische Lösung, die beide Seiten berücksichtigt.", replyAr: "حل عملي يراعي الطرفين." },
            { de: "Das ist unmöglich, man muss sich entscheiden.", ar: "هذا مستحيل، يجب الاختيار.", best: false, replyDe: "Mit guter Planung ist beides durchaus möglich.", replyAr: "بالتخطيط الجيد كلاهما ممكن تماماً." },
          ],
        },
      ],
    },
  ];
