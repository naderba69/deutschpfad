/**
 * b1-07 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من b1-07.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الزمن (وقت ماضٍ محدد):",
      questionDe: "___ ich zum ersten Mal in Berlin ankam, besuchte ich das Museum.",
      options: ["Als", "Wenn", "Während", "Bis"],
      correctIndex: 0,
      explanation: "وقت ماضٍ محدد → als.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Wenn» قد تستعمل للتكرار في الماضي أو للشرط؛ و«zum ersten Mal» يحدد هنا وقتاً ماضياً منفرداً.",
        "«Während» تعبّر عن التزامن الممتد، ولا تناسب الحدث المحدد.",
        "«Bis» تعبّر عن نهاية الفترة، ولا تناسب الجملة.",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر أداة الزمن (متزامن: بينما تتعلم):",
      questionDe: "___ du lernst, höre ich Musik.",
      options: ["Während", "Als", "Bis", "Nachdem"],
      correctIndex: 0,
      explanation: "متزامن → während.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«Als» تعبّر عن حدث ماضٍ محدد، ولا تناسب الحدث الحاضر هنا.",
        "«Bis» تعبّر عن نهاية الفترة، ولا تناسب الجملة.",
        "«Nachdem» تعبّر عن حدث سابق، لا عن التزامن.",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["gegessen", "Nachdem", "ich", "habe", "gehe", "ich", "schlafen", ",", "."],
      correctSentence: "Nachdem ich gegessen habe, gehe ich schlafen.",
      explanation: "بعد أن آكل أذهب للنوم — nachdem + فعل في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ» (المعنى: عندما عدت إلى البيت مرة واحدة).",
      wrongSentence: "Wenn ich gestern nach Hause kam, war niemand da.",
      wrongWord: "Wenn",
      correctWord: "Als",
      options: ["Als", "Wenn", "Während", "Bevor"],
      explanation: "وقت ماضٍ محدد (gestern) → als. وتستعمل wenn للشرط وللتكرار في الماضي أيضاً.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ als/wenn/bevor:",
      template: "___ ich aufwache, trinke ich Kaffee. (عندما مضارع) ___ ich 10 war, lernte ich Englisch. (ماضٍ مرة) ___ ich schlafe, putze ich die Zähne. (قبل أن)",
      blanks: [
        { correct: "Wenn", options: ["Wenn", "Als", "Bevor"] },
        { correct: "Als", options: ["Wenn", "Als", "Bevor"] },
        { correct: "Bevor", options: ["Wenn", "Als", "Bevor"] },
      ],
      explanation: "شرط حاضر → wenn. وقت ماضٍ محدد → als. قبل → bevor.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Politik", ar: "السياسة", example: "Politik ist wichtig.", exampleAr: "السياسة مهمة.", level: "B1" },
    { id: "fc2", de: "die Regierung", ar: "الحكومة", example: "Die Regierung arbeitet.", exampleAr: "الحكومة تعمل.", level: "B1" },
    { id: "fc3", de: "das Gesetz", ar: "القانون", example: "Das Gesetz ist neu.", exampleAr: "القانون جديد.", level: "B1" },
    { id: "fc4", de: "die Wahl", ar: "الانتخاب", example: "Die Wahl war spannend.", exampleAr: "كان الانتخاب مثيراً للاهتمام.", level: "B1" },
    { id: "fc5", de: "als", ar: "عندما (وقت ماضٍ محدد)", example: "Als ich jung war...", exampleAr: "عندما كنت صغيراً...", level: "B1" },
    { id: "fc6", de: "wenn", ar: "عندما/إذا/كلما بحسب السياق", example: "Wenn ich Zeit habe...", exampleAr: "إذا كان عندي وقت...", level: "B1" },
    { id: "fc7", de: "während", ar: "بينما", example: "Während er arbeitet...", exampleAr: "بينما يعمل...", level: "B1" },
    { id: "fc8", de: "der Bürger", ar: "المواطن", example: "Die Bürger wählen.", exampleAr: "المواطنون ينتخبون.", level: "B1" },
    { id: "fc9", de: "obwohl", ar: "رغم أن", example: "Obwohl es regnet, gehe ich spazieren.", exampleAr: "رغم المطر أتمشى.", level: "B1" },
    { id: "fc10", de: "trotzdem", ar: "رغم ذلك", example: "Es regnet. Trotzdem gehe ich.", exampleAr: "يمطر. رغم ذلك أذهب.", level: "B1" },
    { id: "fc11", de: "der Befürworter", ar: "المؤيّد", example: "Die Befürworter vertreten ihre Meinung.", exampleAr: "يشرح المؤيدون رأيهم.", level: "B1" },
    { id: "fc12", de: "das Wahlalter", ar: "سنّ الانتخاب", example: "Das Wahlalter hängt vom Land und von der Wahl ab.", exampleAr: "يتوقف سن الانتخاب على الولاية ونوع الانتخاب.", level: "B1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-b1-07-1", type: "summarize-de-to-ar",
      titleAr: "لخّص مقال رأي سياسي بالعربية مع نقل الحجج",
      sourceDe: "Fiktiver Übungstext: Der Autor argumentiert, dass mehr Bürgerbeteiligung die Demokratie stärkt. Er fordert mehr Volksabstimmungen auf lokaler Ebene.",
      taskAr: "لخّص النص مع نقل موقف الكاتب وحجته الأساسية.",
      modelAnswerAr: "«يجادل الكاتب أن المزيد من مشاركة المواطنين يقوي الديمقراطية. ويطالب بمزيد من الاستفتاءات على المستوى المحلي.»",
      keyPointsAr: ["نقلت حجة الكاتب (المشاركة تقوي الديمقراطية)", "ذكرت المطالبة (استفتاءات محلية)"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-b1-07-1",
      scenarioAr: "تمثيل حواري تدريبي خيالي عن المشاركة السياسية للشباب؛ الآراء لا تُعرض كنتائج استطلاع.",
      scenarioDe: "Diskussion über politische Beteiligung der Jugend.",
      strategyAr: "الاستراتيجية: مناقشة قضية مجتمعية باحترام وموازنة.",
      rounds: [
        {
          speakerDe: "Sollten junge Menschen mehr politisch aktiv sein?",
          speakerAr: "هل يجب أن يكون الشباب أكثر نشاطاً سياسياً؟",
          options: [
            { de: "Ja, meiner Meinung nach sollten junge Menschen wählen gehen und sich engagieren, weil sie die Zukunft gestalten.", ar: "نعم، في رأيي يجب أن يصوت الشباب وينخرطوا لأنهم يصنعون المستقبل.", best: true, replyDe: "Guter Punkt. Manche Menschen haben vielleicht trotzdem das Gefühl, dass ihre Stimme wenig verändert.", replyAr: "نقطة جيدة. ومع ذلك قد يشعر بعض الناس أن أصواتهم لا تغيّر كثيراً." },
            { de: "Nein, Politik ist nur etwas für alte Leute.", ar: "لا، السياسة للكبار فقط.", best: false, replyDe: "Das ist ein Vorurteil. Politik betrifft alle Generationen.", replyAr: "هذا تحيز. السياسة تهم كل الأجيال." },
          ],
        },
        {
          speakerDe: "Warum kann sich jemand politisch machtlos fühlen?",
          speakerAr: "لماذا قد يشعر شخص بالعجز السياسي؟",
          options: [
            { de: "Vielleicht hat diese Person den Eindruck, dass ihre Stimme wenig verändert. Ich finde trotzdem, dass Beteiligung sinnvoll ist.", ar: "ربما يشعر هذا الشخص أن صوته لا يغيّر كثيراً. ومع ذلك أرى أن المشاركة مفيدة.", best: true, replyDe: "Das ist eine mögliche persönliche Sichtweise.", replyAr: "هذه نظرة متفائلة." },
            { de: "Weil politische Entscheidungen grundsätzlich nie etwas verändern.", ar: "لأن السياسة فعلاً لا تغير شيئاً.", best: false, replyDe: "Das ist sehr allgemein formuliert. In diesem Rollenspiel vertrittst du eine begründete persönliche Meinung.", replyAr: "هذا تشاؤم مفرط. الديمقراطية تعيش بالمشاركة." },
          ],
        },
      ],
    },
  ];
