/**
 * a2-10 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-10.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الرابط الذي يجعل الطلب مشروطاً بتوفر الوقت (إذا كان لديك وقت):",
      questionDe: "___ du Zeit hast, hilf mir bitte.",
      options: ["Wenn", "Weil", "Ob", "Dass"],
      correctIndex: 0,
      explanation: "شرط → wenn: إذا كان عندك وقت.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الملكية الصحيحة:",
      questionDe: "Ich helfe ___ Bruder. (أخي)",
      options: ["meinem", "meinen", "mein", "meine"],
      correctIndex: 0,
      explanation: "الفعل helfen يأخذ Dativ هنا؛ Bruder مذكر مفرد، لذلك نستخدم meinem Bruder.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "ابدأ بـIch weiß nicht، ثم رتّب السؤال غير المباشر الذي يبدأ بـob:",
      tokens: ["ob", "weiß", "nicht", "Ich", "kommt", "er", ",", "."],
      correctSentence: "Ich weiß nicht, ob er kommt.",
      explanation: "لا أعرف هل يأتي — ob + الفعل في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "في هذه الجملة خطأ في نهاية الملكية؛ اختر الصيغة المناسبة:",
      wrongSentence: "Ich sehe meine Vater.",
      wrongWord: "meine",
      correctWord: "meinen",
      options: ["meinen", "meinem", "mein", "meiner"],
      explanation: "النصب المذكر: meinen Vater.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "اختر الرابط بحسب المعنى المحدد: سبب (weil)، شرط/وقت (wenn)، ثم سؤال غير مباشر بنعم أو لا (ob):",
      template: "Ich bleibe heute zu Hause, ___ ich gestern spät geschlafen habe. ___ ich müde bin, schlafe ich. Ich frage, ___ du mitkommst.",
      blanks: [
        { correct: "weil", options: ["weil", "wenn", "ob"] },
        { correct: "Wenn", options: ["Wenn", "Weil", "Ob"] },
        { correct: "ob", options: ["ob", "weil", "wenn"] },
      ],
      explanation: "الجملة الأولى تعرض السبب (لأنني نمت متأخراً أمس)، لذلك weil؛ ولا تناسب wenn هنا لأنها تعبّر عن شرط أو وقت. الثانية شرط/وقت بـwenn، والثالثة سؤال غير مباشر بنعم/لا بـob.",
      errorType: "grammar",
    },

  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "der Kurs", ar: "الدورة", example: "Der Kurs beginnt um neun.", exampleAr: "تبدأ الدورة في التاسعة.", level: "A2" },
    { id: "fc2", de: "die Prüfung", ar: "الامتحان", example: "Die Prüfung ist schwer.", exampleAr: "الامتحان صعب.", level: "A2" },
    { id: "fc3", de: "der Unterricht", ar: "التعليم/الحصة الدراسية", example: "Der Unterricht ist interessant.", exampleAr: "الحصة الدراسية ممتعة.", level: "A2" },
    { id: "fc4", de: "studieren", ar: "يدرس في الجامعة", example: "Ich will in Berlin studieren.", exampleAr: "أريد الدراسة الجامعية في برلين.", level: "A2" },
    { id: "fc5", de: "weil", ar: "لأنّ", example: "Ich lerne weiter, weil ich die Prüfung bestehen will.", exampleAr: "أواصل التعلم لأنني أريد اجتياز الامتحان.", level: "A2" },
    { id: "fc6", de: "wenn", ar: "إذا/عندما بحسب السياق", example: "Wenn ich Zeit habe, wiederhole ich Vokabeln.", exampleAr: "إذا توفر لديّ وقت، أراجع المفردات.", level: "A2" },
    { id: "fc7", de: "ob", ar: "ما إذا/هل في سؤال غير مباشر", example: "Ich weiß nicht, ob er kommt.", exampleAr: "لا أعرف ما إذا كان سيأتي.", level: "A2" },
    { id: "fc8", de: "bestehen", ar: "يجتاز", example: "Ich bestehe die Prüfung.", exampleAr: "أجتاز الامتحان.", level: "A2" },
    { id: "fc9", de: "die Anmeldung", ar: "التسجيل", example: "Die Anmeldung ist online.", exampleAr: "التسجيل إلكتروني.", level: "A2" },
    { id: "fc10", de: "der Termin", ar: "الموعد", example: "Ich habe einen Termin um zehn.", exampleAr: "لدي موعد في العاشرة.", level: "A2" },
    { id: "fc11", de: "lernen", ar: "يتعلّم / يدرس", example: "Ich lerne jeden Tag Deutsch.", exampleAr: "أتعلّم الألمانية كل يوم.", level: "A2" },
    { id: "fc12", de: "die Bibliothek", ar: "المكتبة", example: "Wir lernen heute in der Bibliothek.", exampleAr: "نتعلم اليوم في المكتبة.", level: "A2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
        {
      id: "med-a2-10-1", type: "summarize-de-to-ar",
      titleAr: "انقل معلومات برنامج دورة افتراضية بالعربية",
      sourceDe: "Der Deutschkurs B1 beginnt im September. Er dauert acht Wochen und findet dreimal pro Woche statt. Am Ende gibt es eine Prüfung.",
      taskAr: "لخّص معلومات البرنامج الواردة فقط: موعد البداية، المدة، عدد اللقاءات الأسبوعية، والاختبار النهائي. هذا مثال تدريبي افتراضي، لا إعلان عن دورة حقيقية.",
      modelAnswerAr: "«تبدأ دورة الألمانية B1 في سبتمبر. تستمر ثمانية أسابيع، وتُعقد ثلاث مرات في الأسبوع. وفي نهايتها امتحان.»",
      keyPointsAr: ["نقلت موعد البداية (سبتمبر)", "ذكرت المدة (ثمانية أسابيع)", "ذكرت ثلاثة لقاءات في الأسبوع", "نقلت وجود امتحان في النهاية"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-10-1",
      scenarioAr: "تسجل في دورة لغة وتسأل عن التفاصيل؛ الموعد المذكور في الحوار جزء من سيناريو تدريبي.",
      scenarioDe: "Anmeldung für einen Sprachkurs.",
      strategyAr: "الاستراتيجية: الاستفسار عن الدورة ثم الإجابة عن المعرفة السابقة والموعد المقترح. الخيار الذي يقول «Ich starte, wenn ich will» صحيح نحوياً، لكنه لا يجيب عن الموعد الثابت في هذا الحوار.",
      rounds: [
        {
          speakerDe: "Hallo, ich möchte mich für den Deutschkurs anmelden.",
          speakerAr: "مرحباً، أريد التسجيل في دورة الألمانية.",
          options: [
            { de: "Gerne. Der nächste B1-Kurs beginnt in zwei Wochen. Haben Sie schon Vorkenntnisse?", ar: "بكل سرور. تبدأ دورة B1 القادمة بعد أسبوعين. هل لديك معرفة سابقة؟", best: true, replyDe: "Ja, ich habe schon einen A2-Kurs besucht.", replyAr: "نعم، سبق أن التحقت بدورة A2." },
            { de: "Ich möchte zuerst das Abendessen bestellen.", ar: "أريد أولاً طلب العشاء.", best: false, replyDe: "Hier geht es um die Anmeldung zum Sprachkurs. Möchten Sie fortfahren?", replyAr: "نحن نتحدث هنا عن التسجيل في دورة اللغة. هل تريد المتابعة؟" },
          ],
        },
        {
          speakerDe: "Sie haben schon einen A2-Kurs besucht. Das ist eine gute Vorbereitung für den B1-Kurs. Können Sie in zwei Wochen anfangen?",
          speakerAr: "سبق أن التحقت بدورة A2، وهذا إعداد جيد لدورة B1. هل تستطيع البدء بعد أسبوعين؟",
          options: [
            { de: "Ja, ich kann in zwei Wochen anfangen.", ar: "نعم، أستطيع البدء بعد أسبوعين.", best: true, replyDe: "Gut, dann notiere ich den Termin.", replyAr: "حسناً، سأدوّن الموعد إذن." },
            { de: "Ich starte, wenn ich will.", ar: "سأبدأ عندما أريد.", best: false, replyDe: "Der Kurs hat einen festen Starttermin. Ich kann Ihnen die verfügbaren Termine nennen.", replyAr: "للدورة موعد بدء محدد. يمكنني إخبارك بالمواعيد المتاحة." },
          ],
        },
      ],
    },
  ];
