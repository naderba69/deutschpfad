/**
 * b1-10 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر تكملة الجملة المركبة:",
      questionDe: "Das Haus, ___ ich kaufen will, ist teuer.",
      options: ["das", "der", "die", "dem"],
      correctIndex: 0,
      explanation: "نسبية نصب محايد → das.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«der» مذكّر، والكلمة Haus محايدة.",
        "«die» مؤنث، والكلمة Haus محايدة.",
        "«dem» حالة جر، ولا تناسب مفعول الفعل kaufen.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich werde nächstes Jahr in Deutschland ___.",
      options: ["studieren", "studiere", "studiert", "studiert haben"],
      correctIndex: 0,
      explanation: "Futur: werde + Infinitiv.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«studiere» مع ich، ولا تناسب الفعل بعد Ich werde ... in Deutschland.",
        "«studiert» تستعمل Partizip II، والفعل بعد werde يكون مصدراً.",
        "«studiert haben» زمن الماضي التام، ولا يناسب المستقبل هنا.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة المركبة:",
      tokens: ["Wenn", "hätte", "ich", "Geld", "würde", "ich", "reisen", ","],
      correctSentence: "Wenn ich Geld hätte, würde ich reisen.",
      explanation: "لو كان عندي مال لسافرت.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Der Mann, dem dort steht, ist mein Lehrer.",
      wrongWord: "dem",
      correctWord: "der",
      options: ["der", "dem", "den", "dessen"],
      explanation: "الضمير النسبي فاعلُ جملته (wer steht?) ⇒ Nominativ: der.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الجمل المركبة:",
      template: "Das Projekt, ___ beschlossen wurde, beginnt bald. (الذي) Ich lerne, ___ ich will. (لأن)",
      blanks: [
        { correct: "das", options: ["das", "der", "die"] },
        { correct: "weil", options: ["weil", "dass", "wenn"] },
      ],
      explanation: "نسبية محايد → das. سبب → weil.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Zukunft", ar: "المستقبل", example: "Die Zukunft gehört uns.", exampleAr: "المستقبل لنا.", level: "B1" },
    { id: "fc2", de: "der Plan", ar: "الخطة", example: "Mein Plan ist klar.", exampleAr: "خطتي واضحة.", level: "B1" },
    { id: "fc3", de: "das Ziel", ar: "الهدف", example: "Ich habe ein Ziel.", exampleAr: "لدي هدف.", level: "B1" },
    { id: "fc4", de: "sich bewerben", ar: "يتقدم (لوظيفة/دراسة)", example: "Ich habe mich beworben.", exampleAr: "تقدمت.", level: "B1" },
    { id: "fc5", de: "die B1-Grammatik", ar: "قواعد B1", example: "Genitiv, Relativsatz, Passiv...", exampleAr: "مضاف، نسبية، مجهول...", level: "B1" },
    { id: "fc6", de: "der Integrationskurs", ar: "دورة الاندماج", example: "Der Integrationskurs endet mit B1.", exampleAr: "تنتهي دورة الاندماج بـ B1.", level: "B1" },
    { id: "fc7", de: "sich wünschen", ar: "يتمنى", example: "Ich wünsche mir Erfolg.", exampleAr: "أتمنى لنفسي النجاح.", level: "B1" },
    { id: "fc8", de: "die Chance", ar: "الفرصة", example: "Ich habe eine Chance.", exampleAr: "لدي فرصة.", level: "B1" },
    { id: "fc9", de: "die Zukunftsplanung", ar: "تخطيط المستقبل", example: "Die Zukunftsplanung hilft ihr, ruhiger zu arbeiten.", exampleAr: "يساعدها تخطيط المستقبل على العمل بهدوء أكبر.", level: "B1" },
    { id: "fc10", de: "die Bewerbung", ar: "طلب التقديم على عمل", example: "Meine Bewerbung ist fast fertig.", exampleAr: "طلب تقديمي شبه جاهز.", level: "B1" },
    { id: "fc11", de: "erreichen", ar: "يبلغ، يحقق", example: "Sie will ihr Ziel in zwei Jahren erreichen.", exampleAr: "تريد أن تحقق هدفها في سنتين.", level: "B1" },
    { id: "fc12", de: "die Ausbildung", ar: "التأهيل المهني", example: "Er beginnt eine Ausbildung als Krankenpfleger.", exampleAr: "يبدأ تأهيلاً مهنياً كممرّض.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-10-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً عن مستقبل العمل بالعربية",
      sourceDe: "Experten glauben, dass flexible Arbeitsmodelle die Zukunft sind. Homeoffice und Teilzeit werden immer beliebter, besonders bei jungen Menschen.",
      taskAr: "لخّص النص: ما الذي يراه الخبراء كمستقبل، وما الذي يزداد شعبية.",
      modelAnswerAr: "«يعتقد الخبراء أن نماذج العمل المرنة هي المستقبل. العمل عن بُعد والدوام الجزئي يزدادان شعبية، خاصة بين الشباب.»",
      keyPointsAr: ["نقلت توقع الخبراء (العمل المرن)", "ذكرت العمل عن بُعد والدوام الجزئي", "نقلت توجه الشباب"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-10-1",
      scenarioAr: "نقاش عن خططك المستقبلية المهنية.",
      scenarioDe: "Diskussion über deine Zukunftspläne.",
      strategyAr: "الاستراتيجية: التعبير عن الخطط والطموحات بأسلوب مهذب.",
      rounds: [
        {
          speakerDe: "Was sind deine Zukunftspläne?",
          speakerAr: "ما خططك المستقبلية؟",
          options: [
            { de: "Ich möchte nächstes Jahr einen Master machen und dann im Ausland arbeiten. Wenn alles klappt, starte ich in zwei Jahren.", ar: "أريد إكمال الماجستير العام القادم ثم العمل في الخارج. إذا سار كل شيء، أبدأ بعد سنتين.", best: true, replyDe: "Klingt nach einem guten Plan! Was ist dein Traumberuf?", replyAr: "يبدو خطة جيدة! ما مهنتك المثالية؟" },
            { de: "Ich habe keine Pläne, ich lebe nur in den Tag.", ar: "لا خطط لدي، أعيش يومي فقط.", best: false, replyDe: "Ein bisschen Planung hilft immer.", replyAr: "القليل من التخطيط يساعد دائماً." },
          ],
        },
        {
          speakerDe: "Was ist dein Traumberuf?",
          speakerAr: "ما مهنتك المثالية؟",
          options: [
            { de: "Ich träume davon, als Übersetzer zu arbeiten, weil ich Sprachen liebe und zwischen Kulturen vermitteln möchte.", ar: "أحلم بالعمل مترجماً لأنني أحب اللغات وأريد التوسط بين الثقافات.", best: true, replyDe: "Ein schöner Beruf mit Zukunft!", replyAr: "مهنة جميلة ولها مستقبل!" },
            { de: "Mein Traumberuf ist, nichts zu tun.", ar: "مهنتي المثالية ألا أفعل شيئاً.", best: false, replyDe: "Hm, das klingt eher nach einer Pause als nach einem Beruf.", replyAr: "هذا يبدو استراحة أكثر منه مهنة." },
          ],
        },
      ],
    },
  ];
