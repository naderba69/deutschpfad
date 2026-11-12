/**
 * a2-08 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-08.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر المقارنة التي تعبّر عن رأي المتكلم:",
      questionDe: "Ich finde Deutsch ___ als Englisch. (schwer)",
      options: ["schwerer", "schwer", "am schwersten", "schwerste"],
      correctIndex: 0,
      explanation: "مع مقارنة غير متساوية بين اللغتين نقول *schwerer als*. عبارة *Ich finde* تبيّن أن الصعوبة هنا رأي المتكلم.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«schwer» درجة أصلية؛ و«als» تستدعي «schwerer».",
        "«am schwersten» أعلى درجة بين جماعة، لا مقارنة لغتين بـ«als».",
        "«schwerste» صيغة منسوبة تحتاج تعريفاً («die schwerste Sprache»). ",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة التفضيل المطلوبة في الجملة:",
      questionDe: "Sie kann von allen in der Klasse ___ rechnen. (gut)",
      options: ["am besten", "besser", "gut", "beste"],
      correctIndex: 0,
      explanation: "للتعبير عن أعلى درجة مع الفعل *rechnen* نستعمل الظرف التفضيلي *am besten*، وهو الشكل غير المنتظم من *gut*.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«besser» مقارنة بين طرفين؛ و«von allen in der Klasse» تستدعي «am besten».",
        "«gut» بلا درجة؛ والمطلوب التفضيل من «gut → besser → am besten».",
        "«beste» صيغة منسوبة («die beste Schülerin»)؛ والظرف هنا «am besten». ",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة مع الإبقاء على قيد المثال الخيالي:",
      tokens: ["Die", "Taxifahrt", "ist", "im", "Beispiel", "teurer", "als", "die", "Autofahrt", "."],
      correctSentence: "Die Taxifahrt ist im Beispiel teurer als die Autofahrt.",
      explanation: "في المثال تكون رحلة سيارة الأجرة أعلى كلفة من رحلة السيارة؛ كلمة *im Beispiel* تحصر المعلومة ولا تجعلها قاعدة واقعية.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر أداة الاسم المطلوبة بعد حرف الجر *mit*؛ لا يوجد خيار «لا خطأ»:",
      wrongSentence: "Ich fahre lieber mit dem Zug als mit der Bus.",
      wrongWord: "der Bus",
      correctWord: "dem Bus",
      options: ["dem Bus", "den Bus", "das Bus", "der Bus"],
      explanation: "يحكم *mit* حالة Dativ في كلتا العبارتين: *mit dem Zug* و*mit dem Bus*. لا يفرض *als* الحالة هنا؛ فهو يربط طرفي المقارنة.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل صيغ التفضيل من *gern* في سياق تفضيل شخصي:",
      template: "Ich mag Fußball. Aber Tennis mag ich ___. Und am ___ mag ich Schwimmen.",
      blanks: [
        { correct: "lieber", options: ["lieber", "besser", "mehr"] },
        { correct: "liebsten", options: ["liebsten", "besten", "meisten"] },
      ],
      explanation: "للتعبير عن التفضيل هنا: *gern – lieber – am liebsten*. الجملتان تعرضان ذوق المتكلم ولا تقرران أي رياضة أفضل للجميع.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Fahrkarte", ar: "تذكرة السفر", example: "Eine Fahrkarte nach Berlin, bitte.", exampleAr: "تذكرة إلى برلين من فضلك.", level: "A2" },
    { id: "fc2", de: "der Zug / die U-Bahn", ar: "القطار / المترو", example: "Wir fahren mit der U-Bahn und steigen am Hauptbahnhof in den Zug um.", exampleAr: "نستقل المترو ثم نبدّل إلى القطار في المحطة الرئيسية.", level: "A2" },
    { id: "fc3", de: "umsteigen", ar: "يبدّل وسيلة النقل", example: "Wo muss ich umsteigen?", exampleAr: "أين يجب أن أبدّل وسيلة النقل؟", level: "A2" },
    { id: "fc4", de: "der Hauptbahnhof", ar: "المحطة الرئيسية", example: "Die Reise beginnt am Hauptbahnhof.", exampleAr: "تبدأ الرحلة في المحطة الرئيسية.", level: "A2" },
    { id: "fc5", de: "hin und zurück", ar: "ذهاب وعودة", example: "Eine Fahrkarte hin und zurück, bitte.", exampleAr: "تذكرة ذهاب وعودة من فضلك.", level: "A2" },
    { id: "fc6", de: "schneller als", ar: "أسرع من", example: "Auf dieser Beispielstrecke ist der Zug schneller als der Bus.", exampleAr: "في هذا المسار التدريبي، القطار أسرع من الحافلة.", level: "A2" },
    { id: "fc7", de: "am schnellsten", ar: "الأسرع (في مقارنة محددة)", example: "In diesem fiktiven Vergleich ist das Flugzeug am schnellsten.", exampleAr: "في هذه المقارنة الخيالية، الطائرة هي الأسرع.", level: "A2" },
    { id: "fc8", de: "gut, besser, am besten", ar: "جيد، أفضل، الأفضل", example: "Diese Verbindung passt im Beispiel am besten.", exampleAr: "هذا المسار هو الأنسب في المثال.", level: "A2" },
    { id: "fc9", de: "der Fahrplan", ar: "جدول مواعيد الرحلات", example: "Im Übungsfahrplan kommt Bus B um 11:00 Uhr an.", exampleAr: "في جدول التدريب، تصل الحافلة B الساعة 11:00.", level: "A2" },
    { id: "fc10", de: "die Abfahrt / die Ankunft", ar: "المغادرة / الوصول", example: "Im Übungsfahrplan ist die Abfahrt um 08:15 Uhr und die Ankunft um 11:00 Uhr.", exampleAr: "في جدول التدريب، المغادرة 08:15 والوصول 11:00.", level: "A2" },
    { id: "fc11", de: "das Gleis / der Bahnsteig", ar: "مسار السكة / رصيف الركاب", example: "Auf der Tafel steht: Gleis 3. Ich suche den passenden Bahnsteig.", exampleAr: "تظهر على اللوحة عبارة «المسار 3»، وأبحث عن الرصيف المناسب.", level: "A2" },
    { id: "fc12", de: "ausverkauft", ar: "نفدت تذاكره", example: "Die Zugfahrkarten für die Rückfahrt sind ausverkauft.", exampleAr: "نفدت تذاكر القطار لرحلة العودة.", level: "A2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-08-1",
      type: "simplify-announcement",
      titleAr: "انقل معلومات من جدول تدريبي إلى مسافر",
      sourceDe: "Fiktiver Übungsfahrplan: Abfahrt des Zuges nach München um 14:30 Uhr von Gleis 4. Ankunft um 17:45 Uhr. Umstieg in Nürnberg.",
      taskAr: "لخّص بالعربية وقت الانطلاق ورقم المسار/الرصيف ووقت الوصول ومكان التبديل.",
      modelAnswerAr: "في المثال التدريبي الخيالي، ينطلق القطار إلى ميونخ الساعة 14:30 من المسار/الرصيف 4، ويصل الساعة 17:45، مع تبديل في نورنبرغ.",
      keyPointsAr: [
        "نقل وقت الانطلاق 14:30 ورقم المسار/الرصيف 4",
        "ذكر وقت الوصول 17:45",
        "نقل مكان التبديل في نورنبرغ",
        "أوضح أن الجدول تدريبي وخيالي، لا معلومة سفر حالية",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-08-1",
      scenarioAr: "محاكاة نصية لشراء تذكرة في محطة؛ المواعيد والأسعار في المثال خيالية، ولا يسجّل النشاط أداءً شفهياً.",
      scenarioDe: "Am Bahnhof: ein fiktiver Übungsdialog zum Fahrkartenkauf.",
      strategyAr: "اختر رداً مناسباً لشراء تذكرة، ثم اسأل عن معلومة رحلة. الخيارات بدائل لغوية مناسبة، وليست اختباراً للنطق.",
      rounds: [
        {
          speakerDe: "Guten Tag! Wohin möchten Sie fahren?",
          speakerAr: "مرحباً! إلى أين تريد أن تسافر؟",
          options: [
            { de: "Eine Fahrkarte nach München, bitte.", ar: "تذكرة إلى ميونخ من فضلك.", best: true, replyDe: "Einfach oder hin und zurück?", replyAr: "ذهاب فقط أم ذهاب وعودة؟" },
            { de: "Ich möchte eine Fahrkarte nach München kaufen.", ar: "أريد شراء تذكرة إلى ميونخ.", best: true, replyDe: "Einfach oder hin und zurück?", replyAr: "ذهاب فقط أم ذهاب وعودة؟" },
          ],
        },
        {
          speakerDe: "Einfach oder hin und zurück?",
          speakerAr: "ذهاب فقط أم ذهاب وعودة؟",
          options: [
            { de: "Hin und zurück, bitte. Um wie viel Uhr fährt der nächste Zug ab?", ar: "ذهاب وعودة من فضلك. في أي وقت ينطلق القطار التالي؟", best: true, replyDe: "Im fiktiven Beispiel um 10:25 Uhr von Gleis 3.", replyAr: "في المثال الخيالي، ينطلق الساعة 10:25 من المسار/الرصيف 3." },
            { de: "Einfach, bitte. Wo finde ich Gleis 3?", ar: "ذهاب فقط من فضلك. أين أجد المسار/الرصيف 3؟", best: true, replyDe: "Im fiktiven Beispiel fährt der Übungszug von Gleis 3 ab. Folgen Sie den Schildern zu Gleis 3.", replyAr: "ينطلق قطار التدريب في المثال الخيالي من المسار 3. اتبع اللافتات المؤدية إلى المسار 3.", },
          ],
        },
      ],
    },
  ];
