/**
 * a2-06 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-06.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر تصريف sein في الحاضر مع الفاعل der Film:",
      questionDe: "Ich glaube, dass der Film heute gut ___. (sein)",
      options: ["ist", "bin", "bist", "sind"],
      correctIndex: 0,
      explanation:
        "der Film مفرد غائب؛ تصريف sein معه في الحاضر ist، ويوضع في نهاية الجملة التابعة.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr:
        "اختر الرابط الذي يقدّم مضمون ما أجد، لا سؤالاً غير مباشر أو سبباً:",
      questionDe: "Ich finde, ___ die Zeitung interessant ist.",
      questionAr: "أي رابط يناسب الجملة؟",
      options: ["dass", "das", "ob", "denn"],
      correctIndex: 0,
      explanation:
        "dass يقدّم هنا مضمون الرأي؛ das ليست أداة ربط، وob يقدّم سؤالاً غير مباشر، وdenn يربط جملتين رئيسيتين عادةً.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات في جملة dass:",
      tokens: ["dass", "hoffe,", "du", "kommst.", "Ich"],
      correctSentence: "Ich hoffe, dass du kommst.",
      explanation:
        "تأتي الفاصلة قبل dass، وينتهي الجزء التابع هنا بالفعل المصرف kommst.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر الصيغة التي تضع الفاصلة قبل الجملة التابعة:",
      wrongSentence: "Ich weiß dass die Zeitung heute erscheint.",
      wrongWord: "weiß dass",
      correctWord: "weiß, dass",
      options: ["weiß, dass", "weiß dass", "weiß dass,", "weiß, dass,"],
      explanation:
        "تفصل الفاصلة الجملة التابعة عن الرئيسة: Ich weiß, dass ...؛ وتكتب أداة الربط dass بحرفي ss.",
      errorType: "punctuation",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل المناسب للفاعل وضعه في نهاية كل جملة dass:",
      template:
        "Ich denke, dass die Nachrichten wichtig ___. Ich glaube, dass er morgen ___.",
      blanks: [
        { correct: "sind", options: ["sind", "ist", "sein"] },
        { correct: "kommt", options: ["kommt", "kommen", "kommst"] },
      ],
      explanation:
        "Nachrichten جمع، لذلك sind؛ والفاعل er مفرد، لذلك kommt. يأتي كل فعل مصرف في نهاية جملته التابعة.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "das Fernsehen",
      ar: "التلفاز / وسيلة التلفزيون",
      example: "Ich finde, dass das Fernsehen manchmal zu viel Werbung zeigt.",
      exampleAr: "أرى أن التلفاز يعرض أحياناً إعلانات كثيرة.",
      level: "A2",
    },
    {
      id: "fc2",
      de: "die Zeitung",
      ar: "الصحيفة",
      example: "Ich lese die Zeitung gern.",
      exampleAr: "أحب قراءة الصحيفة.",
      level: "A2",
    },
    {
      id: "fc3",
      de: "das Internet",
      ar: "الإنترنت",
      example: "Ich finde, dass das Internet praktisch ist.",
      exampleAr: "أرى أن الإنترنت عملي.",
      level: "A2",
    },
    {
      id: "fc4",
      de: "die Nachrichten",
      ar: "الأخبار",
      example: "Ich glaube, dass die Nachrichten wichtig sind.",
      exampleAr: "أعتقد أن الأخبار مهمة.",
      level: "A2",
    },
    {
      id: "fc5",
      de: "die Werbung",
      ar: "الدعاية / الإعلان",
      example: "Im Fernsehen läuft Werbung.",
      exampleAr: "تُعرض إعلانات في التلفاز.",
      level: "A2",
    },
    {
      id: "fc6",
      de: "dass",
      ar: "أنّ / أداة ربط",
      example: "Ich glaube, dass es stimmt.",
      exampleAr: "أعتقد أن ذلك صحيح.",
      level: "A2",
    },
    {
      id: "fc7",
      de: "Ich finde / glaube / denke",
      ar: "أرى / أعتقد / أظن",
      example: "Ich finde, dass der Artikel interessant ist.",
      exampleAr: "أرى أن المقال مثير للاهتمام.",
      level: "A2",
    },
    {
      id: "fc8",
      de: "die Meinung",
      ar: "الرأي",
      example: "Einige Anwohner haben verschiedene Meinungen.",
      exampleAr: "لدى بعض السكان آراء مختلفة.",
      level: "A2",
    },
    {
      id: "fc9",
      de: "der Artikel",
      ar: "المقال",
      example: "Ich finde, dass der Artikel interessant ist.",
      exampleAr: "أرى أن المقال مثير للاهتمام.",
      level: "A2",
    },
    {
      id: "fc10",
      de: "die Redaktion",
      ar: "هيئة التحرير",
      example: "Die Redaktion prüft jede Nachricht.",
      exampleAr: "تراجع هيئة التحرير كل خبر.",
      level: "A2",
    },
    {
      id: "fc11",
      de: "der Fahrradweg",
      ar: "مسار الدراجات",
      example: "Einige Anwohner finden, dass der Fahrradweg sicher ist.",
      exampleAr: "يرى بعض السكان أن مسار الدراجات آمن.",
      level: "A2",
    },
    {
      id: "fc12",
      de: "herunterladen",
      ar: "ينزّل من الإنترنت",
      example: "Man kann die Zeitung kostenlos herunterladen.",
      exampleAr: "يمكن تنزيل الصحيفة مجاناً.",
      level: "A2",
    },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-06-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص خبراً افتراضياً بالعربية لصديق",
      sourceDe:
        "Die Stadt baut einen neuen Park. Die Bauarbeiten beginnen im Mai und dauern ein Jahr. Im Park gibt es später viele Bäume und einen Spielplatz.",
      taskAr:
        "انقل الخبر بالعربية مع الحفاظ على المعلومات: ماذا ستبني المدينة؟ متى تبدأ الأعمال وكم تستغرق؟ وماذا يوجد في الحديقة؟",
      modelAnswerAr:
        "«تبني المدينة حديقة جديدة. تبدأ أعمال البناء في مايو وتستغرق سنة. وستكون في الحديقة أشجار كثيرة وملعب.»",
      keyPointsAr: [
        "نقل فكرة بناء حديقة جديدة",
        "ذكر موعد بدء الأعمال (مايو) ومدتها (سنة)",
        "ذكر الأشجار والملعب",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-06-1",
      scenarioAr: "يسأل صديق عن رأيك في وسائل التواصل الاجتماعي.",
      scenarioDe: "Ein Freund fragt nach deiner Meinung zu sozialen Medien.",
      strategyAr:
        "اختر رداً مناسباً واذكر سبباً أو تفصيلاً. الخيارات نماذج ردّ قابلة للملاءمة؛ علامة best تعني ملاءمة الرد للموقف في هذا السيناريو، ولا تمثل قياساً لأداء كلامي أو نطق فعلي.",
      rounds: [
        {
          speakerDe: "Was denkst du über soziale Medien?",
          speakerAr: "ما رأيك في وسائل التواصل الاجتماعي؟",
          options: [
            {
              de: "Ich finde, dass soziale Medien praktisch sind, aber ich achte auf meine Zeit.",
              ar: "أرى أن وسائل التواصل عملية، لكنني أنتبه إلى الوقت الذي أقضيه فيها.",
              best: true,
              replyDe: "Woran merkst du, dass du zu lange online bist?",
              replyAr: "كيف تعرف أنك قضيت وقتاً طويلاً جداً على الإنترنت؟",
            },
            {
              de: "Ich glaube, dass soziale Medien bei der Suche nach Nachrichten helfen können.",
              ar: "أعتقد أن وسائل التواصل قد تساعد في البحث عن الأخبار.",
              best: true,
              replyDe: "Welche Nachrichten liest du gern?",
              replyAr: "ما الأخبار التي تحب قراءتها؟",
            },
          ],
        },
        {
          speakerDe: "Wie oft benutzt du soziale Medien?",
          speakerAr: "كم مرة تستخدم وسائل التواصل؟",
          options: [
            {
              de: "Etwa eine Stunde am Tag. Ich finde, dass das für mich genug ist.",
              ar: "نحو ساعة يومياً. وأرى أن ذلك يكفيني.",
              best: true,
              replyDe: "Warum passt diese Zeit für dich?",
              replyAr: "لماذا يناسبك هذا الوقت؟",
            },
            {
              de: "Nur am Wochenende. Ich nutze sie nicht jeden Tag.",
              ar: "في عطلة نهاية الأسبوع فقط. لا أستخدمها كل يوم.",
              best: true,
              replyDe: "Was machst du gern am Wochenende?",
              replyAr: "ماذا تحب أن تفعل في عطلة نهاية الأسبوع؟",
            },
          ],
        },
        {
          speakerDe: "Sollte man soziale Medien weniger benutzen?",
          speakerAr: "هل ينبغي للمرء أن يقلل استخدام وسائل التواصل؟",
          options: [
            {
              de: "Ich denke, dass Pausen sinnvoll sind, aber jeder kann selbst entscheiden.",
              ar: "أعتقد أن أخذ فترات راحة مفيد، لكن لكل شخص أن يقرر بنفسه.",
              best: true,
              replyDe: "Welche Pause passt gut in deinen Alltag?",
              replyAr: "ما الاستراحة التي تناسب يومك؟",
            },
            {
              de: "Ich finde, dass soziale Medien nützlich sind. Ich nutze sie für Nachrichten.",
              ar: "أرى أن وسائل التواصل مفيدة. أستخدمها لمتابعة الأخبار.",
              best: true,
              replyDe: "Welche Nachrichten findest du dort interessant?",
              replyAr: "ما الأخبار التي تجدها مثيرة للاهتمام هناك؟",
            },
          ],
        },
      ],
    },
  ];
