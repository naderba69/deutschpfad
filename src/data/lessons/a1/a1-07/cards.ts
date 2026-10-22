/**
 * a1-07 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-07.ts في الدفعة 92 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر كتابة 48 بالحروف.",
      questionDe: "Wie schreibt man 48?",
      options: ["achtundvierzig", "vierundachtzig", "achtunddreißig", "acht vierzig"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — هذا 84 لا 48؛ والآحاد تُقدَّم: «achtundvierzig».", "لا — هذا 38 (ثمانية وثلاثون)؛ والثمانية والأربعون: «achtundvierzig».", "لا — لا يُنطق الرقمان منفصلين؛ والعدد المركّب كلمة واحدة: «achtundvierzig»."],
      explanation: "48 = achtundvierzig.",
      errorType: "spelling",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر جمع Flasche.",
      questionDe: "Eine Flasche, zwei …",
      options: ["Flaschen", "Flasches", "Flasche", "Flaschn"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — لاحقة «-s» الإنجليزية لا تُستعمل هنا؛ والجمع الألماني «Flaschen».", "لا — هذه صيغة المفرد؛ وبعد «zwei» يلزم الجمع: «zwei Flaschen».", "لا — لا تُحذف «e» النهاية في الجمع الفصيح؛ والصحيح «Flaschen»."],
      explanation: "جمع Flasche هو Flaschen.",
      errorType: "plural",
    },
    {
      id: "m3",
      type: "fill-blank",
      instructionAr: "اختر العدد المناسب في طلب الكمية.",
      template: "Ich hätte gern ___ Kilo Tomaten.",
      blanks: [{correct: "zwei", options: ["zwei", "zweien", "zweite"]}],
      explanation: "zwei Kilo Tomaten تعني كيلوغرامين من الطماطم.",
      errorType: "vocabulary",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر الفعل الموافق للفاعل الجمع.",
      wrongSentence: "Die Orangen kostet drei Euro.",
      wrongWord: "kostet",
      correctWord: "kosten",
      options: ["kosten", "kostet", "kostest"],
      explanation: "Die Orangen فاعل جمع، لذا نقول kosten.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "multiple-choice",
      instructionAr: "اختر القراءة المطابقة للسعر.",
      questionDe: "3,50 € sind …",
      options: ["drei Euro fünfzig", "fünf Euro drei", "drei Euro fünf", "drei Euro fünfzig Euro"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — الرقمان معكوسان؛ و3,50 = «drei Euro fünfzig».", "لا — يُذكر السنت كاملاً: «fünfzig»؛ و«drei Euro fünf» صيغة ناقصة.", "لا — لا تُكرر «Euro» بعد السنت؛ فيُكتفى بـ«drei Euro fünfzig»."],
      explanation: "في هذا السياق يمكن قراءة المبلغ: drei Euro fünfzig.",
      errorType: "vocabulary",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {id: "fc1", de: "null", ar: "صفر", example: "Die Nummer beginnt mit null.", exampleAr: "يبدأ الرقم بصفر.", level: "A1"},
    {id: "fc2", de: "einundzwanzig", ar: "واحد وعشرون", example: "Das kostet einundzwanzig Euro.", exampleAr: "ثمنه واحد وعشرون يورو.", level: "A1"},
    {id: "fc3", de: "dreißig", ar: "ثلاثون", example: "Hier sind dreißig Äpfel.", exampleAr: "هنا ثلاثون تفاحة.", level: "A1"},
    {id: "fc4", de: "dreihundertfünfundsechzig", ar: "ثلاثمئة وخمسة وستون", example: "Die Zahl ist dreihundertfünfundsechzig.", exampleAr: "العدد هو ثلاثمئة وخمسة وستون.", level: "A1"},
    {id: "fc5", de: "tausend / eintausend", ar: "ألف", example: "Das kostet eintausend Euro.", exampleAr: "ثمنه ألف يورو.", level: "A1"},
    {id: "fc6", de: "der Apfel – die Äpfel", ar: "التفاحة – التفاحات", example: "Ich nehme zwei Äpfel.", exampleAr: "سآخذ تفاحتين.", level: "A1"},
    {id: "fc7", de: "die Banane – die Bananen", ar: "الموزة – الموزات", example: "Die Bananen kosten zwei Euro.", exampleAr: "ثمن الموزتين يوروَان.", level: "A1"},
    {id: "fc8", de: "die Flasche – die Flaschen", ar: "القارورة – القوارير", example: "Eine Flasche Wasser, bitte.", exampleAr: "قارورة ماء، من فضلك.", level: "A1"},
    {id: "fc9", de: "das Brötchen – die Brötchen", ar: "لفافة خبز صغيرة – لفافات", example: "Ich hätte gern zwei Brötchen.", exampleAr: "أودّ لفافتي خبز صغيرتين.", level: "A1"},
    {id: "fc10", de: "das Kilo", ar: "الكيلوغرام", example: "Ein Kilo Tomaten kostet 3,20 Euro.", exampleAr: "ثمن كيلوغرام الطماطم 3,20 يورو.", level: "A1"},
    {id: "fc11", de: "kosten", ar: "يكلّف / ثمنه", example: "Was kosten die Äpfel?", exampleAr: "كم ثمن التفاح؟", level: "A1"},
    {id: "fc12", de: "der Preis", ar: "السعر", example: "Der Preis ist 2,40 Euro.", exampleAr: "السعر 2,40 يورو.", level: "A1"},
    {id: "fc13", de: "Was kostet …?", ar: "كم ثمن …؟ (مفرد)", example: "Was kostet das Brot?", exampleAr: "كم ثمن الخبز؟", level: "A1"},
    {id: "fc14", de: "Was kosten …?", ar: "كم ثمن …؟ (جمع)", example: "Was kosten die Tomaten?", exampleAr: "كم ثمن الطماطم؟", level: "A1"},
    {id: "fc15", de: "Ich hätte gern …", ar: "أودّ …", example: "Ich hätte gern ein Kilo Äpfel.", exampleAr: "أودّ كيلوغراماً من التفاح.", level: "A1"},
    {id: "fc16", de: "die Telefonnummer", ar: "رقم الهاتف", example: "Wie ist Ihre Telefonnummer?", exampleAr: "ما رقم هاتف حضرتك؟", level: "A1"},
    {id: "fc17", de: "die Postleitzahl (PLZ)", ar: "الرمز البريدي", example: "Wie ist deine Postleitzahl?", exampleAr: "ما رمزك البريدي؟", level: "A1"},
    {id: "fc18", de: "die Straße – die Straßen", ar: "الشارع – الشوارع", example: "Ich wohne in der Bahnhofstraße.", exampleAr: "أسكن في شارع المحطة.", level: "A1"},
    {id: "fc19", de: "buchstabieren", ar: "يتهجّى حرفاً حرفاً", example: "Können Sie den Namen bitte buchstabieren?", exampleAr: "هل يمكنك تهجئة الاسم، من فضلك؟", level: "A1"},
    {id: "fc20", de: "wiederholen", ar: "يعيد / يكرّر", example: "Können Sie die Nummer bitte wiederholen?", exampleAr: "هل يمكنك إعادة الرقم، من فضلك؟", level: "A1"},
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med1",
      type: "relay-instructions",
      titleAr: "انقل قائمة المشتريات إلى صديقك",
      sourceDe:
        "Preise: Äpfel 2,40 Euro. Tomaten 3,20 Euro. Wasser 0,80 Euro. Lina kauft je ein Kilo Äpfel und Tomaten sowie eine Flasche Wasser. Gesamt: 6,40 Euro.",
      taskAr:
        "أخبر صديقك بالعربية بما اشترته لينا، واذكر سعر العناصر والمجموع. لا حاجة إلى ترجمة كل كلمة حرفياً.",
      modelAnswerAr:
        "اشترت لينا كيلوغراماً من التفاح بـ2,40 يورو، وكيلوغراماً من الطماطم بـ3,20 يورو، وقارورة ماء بـ0,80 يورو. المجموع 6,40 يورو.",
      keyPointsAr: ["كيلوغرام تفاح: 2,40 يورو", "كيلوغرام طماطم: 3,20 يورو", "قارورة ماء: 0,80 يورو", "المجموع: 6,40 يورو"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int1",
      scenarioAr: "أنت في سوق خضار وفاكهة. اختر رداً مناسباً على سؤال البائع.",
      scenarioDe: "Du bist auf dem Markt. Antworte passend auf die Verkäuferin.",
      rounds: [
        {
          speakerDe: "Verkäuferin: Guten Tag. Was darf es sein?",
          speakerAr: "البائعة: طاب يومك. ماذا تريد؟",
          options: [
            {
              de: "Ich hätte gern ein Kilo Äpfel, bitte.",
              ar: "أودّ كيلوغراماً من التفاح، من فضلك.",
              best: true,
              replyDe: "Gern. Ein Kilo kostet 2,40 Euro.",
              replyAr: "بكل سرور. ثمن الكيلوغرام 2,40 يورو.",
            },
            {
              de: "Ich hätte gern ein Kilo Tomaten und eine Flasche Wasser, bitte.",
              ar: "أودّ كيلوغراماً من الطماطم وقارورة ماء، من فضلك.",
              best: true,
              replyDe: "Gern. Das macht zusammen 4 Euro.",
              replyAr: "بكل سرور. المجموع أربعة يورو.",
            },
            {
              de: "Ich hätte gern einen Termin beim Arzt.",
              ar: "أودّ موعداً عند الطبيب.",
              best: false,
              replyDe: "Hier sind wir auf dem Markt. Welche Lebensmittel möchten Sie kaufen?",
              replyAr: "نحن هنا في السوق. ما المواد الغذائية التي تريد شراءها؟",
            },
          ],
        },
        {
          speakerDe: "Verkäuferin: Möchten Sie noch etwas?",
          speakerAr: "البائعة: هل تريد شيئاً آخر؟",
          options: [
            {
              de: "Ja, bitte. Ich nehme noch zwei Orangen.",
              ar: "نعم، من فضلك. سآخذ برتقالتين أيضاً.",
              best: true,
              replyDe: "Gern. Die Orangen kosten zusammen einen Euro.",
              replyAr: "بكل سرور. ثمن البرتقالتين يورو واحد.",
            },
            {
              de: "Nein, danke. Das ist alles.",
              ar: "لا، شكراً. هذا كل شيء.",
              best: true,
              replyDe: "Gut. Ich rechne alles zusammen.",
              replyAr: "حسناً. سأحسب المجموع."
            },
            {
              de: "Ich bin einundzwanzig Jahre alt.",
              ar: "عمري واحد وعشرون عاماً.",
              best: false,
              replyDe: "Danke. Möchten Sie noch etwas kaufen?",
              replyAr: "شكراً. هل تريد شراء شيء آخر؟",
            },
          ],
        },
      ],
      strategyAr:
        "يمكن أن يكون أكثر من طلب واحد مناسباً للسياق؛ اختر عبارة تلائم سؤال البائعة ثم قلها بصوت مرتفع للتدريب. الاختيار يقيس ملاءمة العبارة المكتوبة فقط، ولا يُسجّل دليلاً على إنتاجك الشفهي.",
    },
  ];
