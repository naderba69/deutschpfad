/**
 * a2-12 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-12.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط:",
      questionDe: "Ich bin müde, ___ ich habe gearbeitet. (لأنّ)",
      options: ["denn", "deshalb", "trotzdem", "aber"],
      correctIndex: 0,
      explanation: "السبب: denn (عادية).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«deshalb» نتيجة لا سبب، وتقلب الترتيب.",
        "«trotzdem» بمعنى رغم ذلك؛ والمطلوب تعليل.",
        "«aber» استدراك؛ والسبب يُصاغ بـ«denn». ",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط:",
      questionDe: "Ich bin müde, ___ arbeite ich weiter. (رغم ذلك)",
      options: ["trotzdem", "deshalb", "und", "denn"],
      correctIndex: 0,
      explanation: "رغم ذلك: trotzdem (مقلوبة — الفعل arbeite بعده).",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«deshalb» نتيجة متوقعة؛ والمطلوب «رغم ذلك» مع الفعل «arbeite» في المقدمة.",
        "«und» لا تقلب الترتيب ولا تفيد التنازل.",
        "«denn» تعليل بترتيب عادي؛ وهنا الفعل بعد الأداة مباشرة. ",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["müde", "aber", "Ich", "bin", "glücklich", ","],
      correctSentence: "Ich bin müde, aber glücklich.",
      explanation: "أنا متعب لكن سعيد — aber عادية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Es ist kalt, trotzdem ich gehe spazieren.",
      wrongWord: "ich gehe",
      correctWord: "gehe ich",
      options: ["gehe ich", "ich gehe", "gehen ich", "ich gehen"],
      explanation: "trotzdem مقلوبة: trotzdem + gehe + ich.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بـ deshalb/trotzdem/dann:",
      template: "Ich habe eine Prüfung, ___ lerne ich. (لذلك) Es regnet, ___ gehe ich spazieren. (رغم ذلك) Erst arbeite ich, ___ koche ich. (ثم)",
      blanks: [
        { correct: "deshalb", options: ["deshalb", "trotzdem"] },
        { correct: "trotzdem", options: ["trotzdem", "deshalb"] },
        { correct: "dann", options: ["dann", "deshalb", "trotzdem"] },
      ],
      explanation: "لذلك = deshalb. رغم ذلك = trotzdem. ثم = dann — كلها مقلوبة.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Gefühl", ar: "الشعور", example: "Meine Gefühle sind stark.", exampleAr: "مشاعري قوية.", level: "A2" },
    { id: "fc2", de: "glücklich / traurig", ar: "سعيد / حزين", example: "Ich bin glücklich.", exampleAr: "أنا سعيد.", level: "A2" },
    { id: "fc3", de: "gestresst", ar: "متوتر", example: "Ich bin gestresst.", exampleAr: "أنا متوتر.", level: "A2" },
    { id: "fc4", de: "der Streit", ar: "الخلاف", example: "Wir hatten einen Streit.", exampleAr: "كان بيننا خلاف.", level: "A2" },
    { id: "fc5", de: "aber", ar: "لكن (عادية)", example: "Ich bin müde, aber glücklich.", exampleAr: "متعب لكن سعيد.", level: "A2" },
    { id: "fc6", de: "deshalb", ar: "لذلك (مقلوبة)", example: "Es regnet, deshalb bleibe ich.", exampleAr: "تمطر لذلك أبقى.", level: "A2" },
    { id: "fc7", de: "trotzdem", ar: "رغم ذلك (مقلوبة)", example: "Es ist kalt, trotzdem gehe ich.", exampleAr: "بارد ورغم ذلك أذهب.", level: "A2" },
    { id: "fc8", de: "dann", ar: "ثم (مقلوبة)", example: "Erst lernen, dann fernsehen.", exampleAr: "أولاً نتعلم ثم نشاهد التلفاز.", level: "A2" },
    { id: "fc9", de: "überrascht", ar: "متفاجئ", example: "Ich bin überrascht.", exampleAr: "أنا متفاجئ.", level: "A2" },
    { id: "fc10", de: "ärgerlich", ar: "مزعج", example: "Das ist ärgerlich.", exampleAr: "هذا مزعج.", level: "A2" },
    { id: "fc11", de: "sich freuen auf", ar: "يتطلّع إلى (شيء قادم)", example: "Ich freue mich auf das Fest.", exampleAr: "أتطلّع إلى الاحتفال.", level: "A2" },
    { id: "fc12", de: "die Überraschung", ar: "المفاجأة", example: "Eine Überraschung für Nour.", exampleAr: "مفاجأة لنور.", level: "A2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-a2-12-1", type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة اعتذار ألمانية بالعربية",
      sourceDe: "Lieber Karim, es tut mir leid, dass ich gestern nicht kommen konnte. Ich hatte einen wichtigen Termin. Können wir uns morgen treffen?",
      taskAr: "انقل الرسالة بالعربية مع نقل نبرة الاعتذار: السبب، والاقتراح.",
      modelAnswerAr: "«عزيزي كريم، آسف أنني لم أستطع المجيء أمس. كان لدي موعد مهم. هل نلتقي غداً؟»",
      keyPointsAr: ["نقلت الاعتذار", "ذكرت السبب (موعد مهم)", "نقلت اقتراح اللقاء غداً"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-12-1",
      scenarioAr: "صديق يخطئ في حقك — تحل الخلاف بلطف.",
      scenarioDe: "Ein Freund hat dich verletzt — Konflikt lösen.",
      strategyAr: "الاستراتيجية: التعبير عن المشاعر وطلب توضيح دون غضب.",
      rounds: [
        {
          speakerDe: "Du hast gestern nicht auf meine Nachricht geantwortet. Ist alles okay?",
          speakerAr: "لم تجب على رسالتي أمس. هل كل شيء بخير؟",
          options: [
            { de: "Es tut mir leid. Ich hatte einen anstrengenden Tag. Ich hätte dir schreiben sollen.", ar: "آسف. كان يومي متعباً. كان عليّ أن أكتب لك.", best: true, replyDe: "Kein Problem. Ich war nur besorgt.", replyAr: "لا مشكلة. كنت قلقاً فقط." },
            { de: "Das ist nicht dein Problem. Antworten ist meine Sache.", ar: "هذه ليست مشكلتك. الرد شأني أنا.", best: false, replyDe: "Das ist nicht freundlich. Freunde kümmern sich umeinander.", replyAr: "هذا ليس لطيفاً. الأصدقاء يهتمون ببعضهم." },
          ],
        },
        {
          speakerDe: "Ich war nur besorgt. Kannst du mir das nächste Mal schreiben?",
          speakerAr: "كنت قلقاً فقط. هل يمكنك الكتابة لي في المرة القادمة؟",
          options: [
            { de: "Ja, natürlich. Versprochen! Ich schreibe dir immer, wenn ich spät antworte.", ar: "نعم بالطبع. وعد! سأكتب لك دائماً عندما أتأخر.", best: true, replyDe: "Danke, das bedeutet mir viel.", replyAr: "شكراً، هذا يعني لي الكثير." },
            { de: "Nein, ich kann das nicht versprechen.", ar: "لا، لا أستطيع الوعد بذلك.", best: false, replyDe: "Das ist schade für unsere Freundschaft.", replyAr: "هذا مؤسف لصداقتنا." },
          ],
        },
      ],
    },
  ];
