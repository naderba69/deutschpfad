/**
 * a2-05 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-05.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Präteritum المناسبة:",
      questionDe: "Anna ___ gestern krank.",
      options: ["war", "warst", "waren", "wart"],
      correctIndex: 0,
      explanation: "Anna مفرد غائب، لذا نستخدم war.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة Präteritum المناسبة:",
      questionDe: "Gestern ___ ihr viel Arbeit.",
      options: ["hattet", "hatte", "hatten", "hattest"],
      correctIndex: 0,
      explanation: "مع ihr نستخدم hattet؛ hatten مع wir وsie/Sie.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["hatte", "einen", "Anna", "Termin", "."],
      correctSentence: "Anna hatte einen Termin.",
      explanation: "الترتيب الخبري: Anna + الفعل المصرف hatte + المفعول einen Termin.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح أداة التعريف؛ انتبه إلى جنس Termin وحالته:",
      wrongSentence: "Ich hatte ein Termin.",
      wrongWord: "ein",
      correctWord: "einen",
      options: ["einen", "einem", "einer", "ein"],
      explanation: "Termin مذكر ومفعول به في الجملة؛ لذلك نقول einen Termin.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل المواقف الهاتفية: (1) الموظفة تطلب الانتظار، (2) تحوّل المكالمة، (3) تسأل المتصل عمن تتحدث.",
      template: "___ bitte! · Ich ___ Sie. · Mit wem ___ ich, bitte?",
      blanks: [
        { correct: "Einen Moment", options: ["Einen Moment", "Guten Tag", "Auf Wiedersehen"] },
        { correct: "verbinde", options: ["verbinde", "verbinden", "verbindest"] },
        { correct: "spreche", options: ["spreche", "verbinde", "hatte"] },
      ],
      explanation: "Einen Moment bitte! · Ich verbinde Sie. · Mit wem spreche ich, bitte?",
      errorType: "vocabulary",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Büro", ar: "المكتب", example: "Ich arbeite im Büro.", exampleAr: "أعمل في المكتب.", level: "A2" },
    { id: "fc2", de: "anrufen", ar: "يتصل هاتفياً", example: "Ich rufe dich morgen an.", exampleAr: "سأتصل بك غداً.", level: "A2" },
    { id: "fc3", de: "der Kollege / die Kollegin", ar: "الزميل / الزميلة", example: "Meine Kollegin ist freundlich.", exampleAr: "زميلتي ودودة.", level: "A2" },
    { id: "fc4", de: "die Besprechung", ar: "الاجتماع", example: "Wir hatten eine Besprechung.", exampleAr: "كان لدينا اجتماع.", level: "A2" },
    { id: "fc5", de: "die E-Mail", ar: "البريد الإلكتروني", example: "Schick mir bitte eine E-Mail.", exampleAr: "أرسل لي بريداً إلكترونياً من فضلك.", level: "A2" },
    { id: "fc6", de: "das Präteritum", ar: "الماضي البسيط", example: "war, hatte, konnte", exampleAr: "كان، كان لديه، استطاع.", level: "A2" },
    { id: "fc7", de: "formelle Anrede", ar: "تحية افتتاحية رسمية", example: "Sehr geehrter Herr Weber,", exampleAr: "السيد فيبر المحترم،", level: "A2" },
    { id: "fc8", de: "Mit freundlichen Grüßen", ar: "مع خالص التحيات", example: "Mit freundlichen Grüßen\nAnna Weber", exampleAr: "مع خالص التحيات\nآنا فيبر", level: "A2" },
    { id: "fc9", de: "zurückrufen", ar: "يعاود الاتصال", example: "Ich rufe heute Nachmittag zurück.", exampleAr: "سأتصل مجدداً بعد ظهر اليوم.", level: "A2" },
    { id: "fc10", de: "die Nachricht", ar: "الرسالة", example: "Kann ich eine Nachricht hinterlassen?", exampleAr: "هل يمكنني ترك رسالة؟", level: "A2" },
    { id: "fc11", de: "die Notiz", ar: "الملاحظة المكتوبة", example: "Schick mir bitte die Notizen.", exampleAr: "أرسل إليّ الملاحظات من فضلك.", level: "A2" },
    { id: "fc12", de: "der Bericht", ar: "التقرير", example: "Ich möchte den Bericht heute fertig schreiben.", exampleAr: "أودّ إنهاء التقرير اليوم.", level: "A2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-05-1",
      type: "relay-instructions",
      titleAr: "انقل تعليمات بريد عمل بالعربية إلى زميل",
      sourceDe: "Liebe Kolleginnen und Kollegen, die Besprechung findet morgen um 10 Uhr im Raum 3 statt. Bitte bringen Sie Ihre Berichte mit.",
      taskAr: "انقل المعلومات إلى العربية: موعد الاجتماع ومكانه وما ينبغي إحضاره.",
      modelAnswerAr: "«أعزائي الزملاء، الاجتماع غداً الساعة العاشرة في الغرفة 3. يرجى إحضار تقاريركم.»",
      keyPointsAr: ["نقل أن الاجتماع غداً الساعة 10", "ذكر الغرفة 3", "نقل طلب إحضار التقارير"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-05-1",
      scenarioAr: "مكالمة عمل للاعتذار عن موعد الساعة الثانية واقتراح موعد بديل.",
      scenarioDe: "Beruflicher Anruf: einen Termin verschieben und eine Alternative vorschlagen.",
      strategyAr:
        "اعتذر بوضوح واقترح وقتاً محدداً، وانتبه إلى Sie/Ihnen. هذا تفاعل نصي اختياري وليس تقويماً للكلام أو النطق.",
      rounds: [
        {
          speakerDe: "Guten Morgen, Herr Ali. Sie haben heute um 14 Uhr einen Termin.",
          speakerAr: "صباح الخير، سيد علي. لديك موعد اليوم الساعة الثانية.",
          options: [
            {
              de: "Es tut mir leid. Ich kann heute um 14 Uhr nicht kommen. Können wir den Termin verschieben?",
              ar: "آسف. لا أستطيع الحضور اليوم الساعة الثانية. هل يمكننا تأجيل الموعد؟",
              best: true,
              replyDe: "Natürlich. Wann passt es Ihnen besser?",
              replyAr: "بالطبع. ما الوقت الأنسب لك؟",
            },
            {
              de: "Ich komme heute nicht und das ist Ihr Problem.",
              ar: "لن آتي اليوم وهذه مشكلتك.",
              best: false,
              replyDe: "Ein höflicher Vorschlag wäre hier passender.",
              replyAr: "يكون اقتراح بديل مهذب أنسب هنا.",
            },
          ],
        },
        {
          speakerDe: "Wann passt es Ihnen besser?",
          speakerAr: "ما الوقت الأنسب لك؟",
          options: [
            {
              de: "Wäre übermorgen um 10 Uhr möglich?",
              ar: "هل يمكن بعد غد الساعة العاشرة؟",
              best: true,
              replyDe: "Ja, das passt mir. Ich notiere den Termin.",
              replyAr: "نعم، يناسبني ذلك. سأدوّن الموعد.",
            },
            {
              de: "Ich weiß nicht, vielleicht nie.",
              ar: "لا أعرف، ربما أبداً.",
              best: false,
              replyDe: "Wir brauchen einen konkreten Vorschlag.",
              replyAr: "نحتاج إلى اقتراح محدد.",
            },
          ],
        },
      ],
    },
  ];
