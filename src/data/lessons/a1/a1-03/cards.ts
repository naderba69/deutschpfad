/**
 * a1-03 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-03.ts في الدفعة 88 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Wir kaufen ___ Brot.",
      questionAr: "نشتري رغيفاً واحداً.",
      options: ["ein", "einen", "eine", "der"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «einen» نصبٌ مذكر؛ و«Brot» محايد فيبقى «ein Brot».", "لا — «eine» مؤنث؛ و«das Brot» محايد: «Wir kaufen ein Brot».", "لا — «der» أداة تعريف مرفوعة؛ والمقصود رغيفٌ واحد غير معرّف «ein Brot»."],
      explanation: "المقصود رغيف واحد: ein Brot. Brot محايد؛ لذلك تبقى أداة التنكير ein كما هي بين الرفع والنصب في هذا المثال.",
      errorType: "case",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ du Durst? — Ja, ich habe Durst.",
      options: ["Hast", "Habe", "Hat", "Habt"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Habe» تصرّفٌ مع «ich»؛ ومع «du» يقال «Hast du Durst?».", "لا — «Hat» تصرّفٌ مع هو/هي؛ والسؤال موجّه إلى «du» فيطلب «Hast».", "لا — «Habt» تصرّفٌ مع الجمع «ihr»؛ ومع «du» الصيغة «Hast»."],
      explanation: "السؤال عن «أنت»: Hast du Durst?",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["einen", "Ich", "trinke", "Tee", "."],
      correctSentence: "Ich trinke einen Tee.",
      explanation: "Ich + trinke (V2) + einen Tee (نصب مذكر).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح أداة التعريف مع الحفاظ على الاسم مفرداً ومعرّفاً:",
      wrongSentence: "Ich esse die Apfel.",
      wrongWord: "die Apfel",
      correctWord: "den Apfel",
      options: ["den Apfel", "der Apfel", "das Apfel", "die Äpfel"],
      explanation: "Apfel مذكر مفرد ومفعول به هنا؛ لذلك تتحول أداة التعريف der إلى den. أما الجمع فهو die Äpfel مع تغيّر شكل الاسم.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ (أداة تنكير صحيحة):",
      template: "Ich esse ___ Banane und ___ Apfel.",
      blanks: [
        { correct: "eine", options: ["eine", "ein", "einen"] },
        { correct: "einen", options: ["eine", "ein", "einen"] },
      ],
      explanation: "Banane مؤنثة → eine (لا تتغير في النصب). Apfel مذكر مفعول → einen.",
      errorType: "case",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Essen / das Trinken", ar: "الطعام / الشراب", example: "Essen und Trinken sind wichtig.", exampleAr: "الأكل والشرب مهمان.", level: "A1" },
    { id: "fc2", de: "der Apfel / die Banane", ar: "التفاحة / الموزة", example: "Ich esse einen Apfel.", exampleAr: "آكل تفاحة.", level: "A1" },
    { id: "fc3", de: "das Brot", ar: "الخبز", example: "Das Brot ist frisch.", exampleAr: "الخبز طازج.", level: "A1" },
    { id: "fc4", de: "die Milch", ar: "الحليب", example: "Ich trinke Milch.", exampleAr: "أشرب الحليب.", level: "A1" },
    { id: "fc5", de: "der Käse", ar: "الجبن", example: "Der Käse schmeckt gut.", exampleAr: "الجبن طعمه جيد.", level: "A1" },
    { id: "fc6", de: "essen / trinken", ar: "يأكل / يشرب", example: "Wir essen und trinken.", exampleAr: "نأكل ونشرب.", level: "A1" },
    { id: "fc7", de: "der Hunger / der Durst", ar: "الجوع / العطش", example: "Ich habe Hunger und Durst.", exampleAr: "أنا جائع وعطشان.", level: "A1" },
    { id: "fc8", de: "kaufen", ar: "يشتري", example: "Wir kaufen Brot.", exampleAr: "نشتري خبزاً.", level: "A1" },
    {"id": "fc9", "de": "einen (Akkusativ maskulin)", "ar": "أداة نصب المذكّر", "example": "Ich esse einen Apfel.", "exampleAr": "آكل تفّاحة.", "level": "A1"},
    {"id": "fc10", "de": "kein / keine / keinen", "ar": "أداة نفي الاسم", "example": "Ich habe keine Zeit.", "exampleAr": "ليس عندي وقت.", "level": "A1"},
    {"id": "fc11", "de": "möchten", "ar": "يودّ (صيغة الطلب المهذّبة)", "example": "Ich möchte einen Tee, bitte.", "exampleAr": "أريد شاياً من فضلك.", "level": "A1"},
    {"id": "fc12", "de": "die Rechnung", "ar": "الفاتورة", "example": "Die Rechnung, bitte!", "exampleAr": "الفاتورة من فضلك!", "level": "A1"},
    {"id": "fc13", "de": "das Brötchen", "ar": "خبزة صغيرة (محايدة بـ‑chen)", "example": "Ein Brötchen kostet fünfzig Cent.", "exampleAr": "الخبزة الصغيرة بخمسين سنتاً.", "level": "A1"},
    {"id": "fc14", "de": "hungrig / satt", "ar": "جائع / شبعان (صفتان مع sein)", "example": "Ich bin satt, danke.", "exampleAr": "أنا شبعان، شكراً.", "level": "A1"},
    { id: "fc15", de: "die Suppe", ar: "الحساء", example: "Ich nehme eine Suppe.", exampleAr: "آخذ حساءً.", level: "A1" },
    { id: "fc16", de: "der Salat", ar: "السلطة", example: "Möchten Sie einen Salat?", exampleAr: "أتودّ سلطة؟", level: "A1" },
    { id: "fc17", de: "der Kaffee", ar: "القهوة", example: "Einen Kaffee, bitte.", exampleAr: "قهوةً من فضلك.", level: "A1" },
    { id: "fc18", de: "nehmen", ar: "يأخذ", example: "Ich nehme das Käsebrötchen.", exampleAr: "آخذ خبزةً صغيرة بالجبن.", level: "A1" },
    { id: "fc19", de: "Vielen Dank!", ar: "شكراً جزيلاً!", example: "Vielen Dank für alles!", exampleAr: "شكراً جزيلاً على كلّ شيء!", level: "A1" },
    { id: "fc20", de: "natürlich", ar: "بالطبع، طبعاً", example: "Natürlich, gern!", exampleAr: "بالطبع، بكلّ سرور!", level: "A1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-03-1",
      type: "simplify-announcement",
      titleAr: "بسّط قائمة طعام ألمانية بالعربية لصديق",
      sourceDe: "Heute: Suppe (3 €), Schnitzel mit Pommes (9 €), Apfelkuchen (2,50 €).",
      taskAr: "انقل القائمة بالعربية مع الأسعار لصديق لا يفهم الألمانية، مع توضيح أنواع الأطباق.",
      modelAnswerAr: "«اليوم: شوربة (3 يورو)، وشنيتزل (شريحة رقيقة من اللحم، غالباً مغطاة بالبقسماط ومقلية؛ لم يحدد النص نوع اللحم) مع بطاطا مقلية (9 يورو)، وكعكة تفاح (2.50 يورو).»",
      keyPointsAr: ["نقلت الأطباق الثلاثة", "نقلت الأسعار بدقة", "شرحت المقصود بـSchnitzel بكلمات مفهومة"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-03-1",
      scenarioAr: "في مقهى ألماني — تطلب طعاماً وشراباً.",
      scenarioDe: "Im Café — du bestellst Essen und Trinken.",
      strategyAr: "الاستراتيجية: الطلب المهذب (Ich hätte gern...) وفهم أسئلة النادل.",
      rounds: [
        {
          speakerDe: "Guten Tag! Was möchten Sie trinken?",
          speakerAr: "طاب يومك! ماذا تريد أن تشرب؟",
          options: [
            { de: "Ich hätte gern einen Kaffee, bitte.", ar: "أريد قهوة من فضلك.", best: true, replyDe: "Sehr gerne! Mit Milch und Zucker?", replyAr: "بكل سرور! مع حليب وسكر؟" },
            { de: "Ich bin ein Kaffee.", ar: "أنا قهوة.", best: false, replyDe: "Meinen Sie: „Ich hätte gern einen Kaffee“?", replyAr: "هل تقصد: أودّ قهوة؟" },
          ],
        },
        {
          speakerDe: "Mit Milch und Zucker?",
          speakerAr: "مع حليب وسكر؟",
          options: [
            { de: "Mit Milch, bitte. Ohne Zucker.", ar: "مع حليب من فضلك. بدون سكر.", best: true, replyDe: "Alles klar! Und etwas zu essen?", replyAr: "حسناً! وهل تريد شيئاً للأكل؟" },
            { de: "Nein, danke. Nur Wasser.", ar: "لا، شكراً. أريد الماء فقط.", best: true, replyDe: "Alles klar, dann ein Wasser statt Kaffee. Möchten Sie auch etwas essen?", replyAr: "حسناً، ماء بدلاً من القهوة. هل تريد شيئاً للأكل أيضاً؟" },
          ],
        },
        {
          speakerDe: "Möchten Sie auch etwas essen?",
          speakerAr: "هل تريد أيضاً شيئاً للأكل؟",
          options: [
            { de: "Ja, ich hätte gern ein Stück Apfelkuchen, bitte.", ar: "نعم، أودّ قطعةً من كعكة التفاح، من فضلك.", best: true, replyDe: "Sehr gut! Das macht 5,50 Euro.", replyAr: "حسناً! الحساب 5.50 يورو." },
            { de: "Nein, danke. Die Rechnung, bitte.", ar: "لا، شكراً. الفاتورة من فضلك.", best: true, replyDe: "Gern. Ich bringe Ihnen die Rechnung.", replyAr: "بكل سرور. سأحضر لك الفاتورة." },
          ],
        },
      ],
    },
  ];
