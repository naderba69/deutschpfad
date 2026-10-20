/**
 * a1-13 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-13.ts في الدفعة 89 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "___ Buch (محايد)",
      options: ["das", "der", "die", "den"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «der» للمذكر؛ و«Buch» محايد: «das Buch».", "لا — «die» للمؤنث أو الجمع؛ والمحايد «das Buch».", "لا — «den» نصبٌ مذكر؛ والمحايد في الرفع «das Buch»."],
      explanation: "das Buch — محايد.",
      errorType: "article",
    },
    {
      id: "m2",
      type: "fill-blank",
      instructionAr: "أكمل صيغة الفعل المناسبة لكل ضمير في الأمثلة المعطاة:",
      template: "Ich ___ aus Tunesien. (آتي) · Du ___ Deutsch. (تتعلم) · Er ___ Fußball. (يلعب)",
      blanks: [
        { correct: "komme", options: ["komme", "kommst", "kommt", "kommen"] },
        { correct: "lernst", options: ["lernst", "lerne", "lernt", "lernen"] },
        { correct: "spielt", options: ["spielt", "spiele", "spielst", "spielen"] },
      ],
      explanation: "الصيغ في الأمثلة هي ich komme، du lernst، er spielt. لا تمثل هذه التصريفات كل أنماط الأفعال؛ راجع صيغ sein وhaben الخاصة.",
      errorType: "conjugation",
    },
    {
      id: "m3",
      type: "multiple-choice",
      instructionAr: "اختر سؤال الاستفهام الصحيح:",
      questionDe: "___ wohnst du? — In Tunis.",
      questionAr: "أين تسكن؟ — في تونس.",
      options: ["Wo", "Woher", "Wohin", "Wer"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Woher» تسأل عن الأصل («Aus Tunesien»)؛ والسؤال عن مكان السكن بـ«Wo wohnst du؟».", "لا — «Wohin» تسأل عن الوجهة؛ والجواب «In Tunis» مكانٌ ثابت فتُستعمل «Wo».", "لا — «Wer» تسأل عن الشخص؛ والجواب «In Tunis» مكان."],
      explanation: "Wo = أين (مكان السكن).",
      errorType: "vocabulary",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل بـPräteritum من sein أو haben:",
      template: "Ich ___ gestern im Kino. (كنت) · Maria ___ viele Bücher. (كانت تملك)",
      blanks: [
        { correct: "war", options: ["war", "warst", "waren", "wart"] },
        { correct: "hatte", options: ["hatte", "hattest", "hatten", "hattet"] },
      ],
      explanation: "war صيغة Präteritum من sein، وhatte صيغة Präteritum من haben؛ وهما الصيغتان المستهدفتان هنا.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة (نصب):",
      questionDe: "Ich kaufe ___ Apfel.",
      questionAr: "أشتري تفاحة.",
      options: ["einen", "ein", "eine", "einem"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «ein» صيغة الرفع؛ وبعد «kaufe» نصبٌ فالمطلوب «einen Apfel».", "لا — «eine» للمؤنث؛ و«Apfel» مذكر: «Ich kaufe einen Apfel».", "لا — «einem» صيغة Dativ؛ و«kaufen» يأخذ مفعولاً به منصوباً «einen»."],
      explanation: "في هذه الجملة، Apfel مفعول مباشر مذكر، لذلك نستخدم einen.",
      errorType: "case",
    },
    {
      id: "m6",
      type: "matching",
      instructionAr: "صِل أقسام نموذج Start Deutsch 1 بصيغ المهام الموصوفة في نموذج Goethe المنشور عام 2024:",
      pairs: [
        { left: "Hören", right: "3 أجزاء؛ الجزآن 1 و3 مرتان، والجزء 2 مرة" },
        { left: "Lesen", right: "3 أجزاء؛ منها صواب/خطأ وتحديد مصدر المعلومات" },
        { left: "Schreiben", right: "نموذج بيانات + نص قصير يقارب 30 كلمة" },
        { left: "Sprechen", right: "تعريف بالنفس + تبادل معلومات + طلب واستجابة" },
      ],
      explanation: "هذه مطابقة لصيغ المهام في نموذج 2024، وليست تدريباً على أداء المهارات نفسها أو توقعاً لمحتوى كل امتحان.",
      errorType: "vocabulary",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Wiederholung", ar: "المراجعة", example: "Die Wiederholung ist wichtig.", exampleAr: "المراجعة مهمة.", level: "A1" },
    { id: "fc2", de: "der Satz", ar: "الجملة", example: "Der Satz ist richtig.", exampleAr: "الجملة صحيحة.", level: "A1" },
    { id: "fc3", de: "die Aufgabe", ar: "المهمة", example: "Die Aufgabe ist klar.", exampleAr: "المهمة واضحة.", level: "A1" },
    { id: "fc4", de: "die Prüfung", ar: "الامتحان", example: "Nächste Woche mache ich die Prüfung.", exampleAr: "سأجري الامتحان الأسبوع القادم.", level: "A1" },
    { id: "fc5", de: "der Artikel", ar: "أداة الاسم النحوية", example: "Ich lerne das Wort mit dem Artikel.", exampleAr: "أتعلم الكلمة مع أداتها.", level: "A1" },
    { id: "fc6", de: "die Antwort", ar: "الإجابة", example: "Die Antwort ist richtig.", exampleAr: "الإجابة صحيحة.", level: "A1" },
    { id: "fc7", de: "alles klar", ar: "كل شيء واضح", example: "Alles klar, ich verstehe.", exampleAr: "كل شيء واضح، أفهم.", level: "A1" },
    { id: "fc8", de: "der Anfang", ar: "البداية", example: "Am Anfang war Deutsch neu für mich.", exampleAr: "كانت الألمانية جديدة عليّ في البداية.", level: "A1" },
    { id: "fc9", de: "die Verkäuferin", ar: "البائعة", example: "Die Verkäuferin hat mich verstanden.", exampleAr: "فهمتني البائعة.", level: "A1" },
    { id: "fc10", de: "der Kellner", ar: "النادل", example: "Der Kellner bringt die Speisekarte.", exampleAr: "يُحضر النادل قائمة الطعام.", level: "A1" },
    { id: "fc11", de: "der Fehler", ar: "الخطأ", example: "Ich habe viele Fehler gemacht.", exampleAr: "ارتكبتُ أخطاءً كثيرة.", level: "A1" },
    { id: "fc12", de: "wiederholen", ar: "يُعيد، يراجع", example: "Können Sie das bitte wiederholen?", exampleAr: "أيمكنك الإعادة من فضلك؟", level: "A1" },
    { id: "fc13", de: "Schritt für Schritt", ar: "خطوةً خطوة", example: "Ich lerne Schritt für Schritt.", exampleAr: "أتعلم خطوة خطوة.", level: "A1" },
    { id: "fc14", de: "anfangen (hat angefangen)", ar: "يبدأ", example: "Ich habe einen Deutschkurs angefangen.", exampleAr: "بدأتُ دورةً في الألمانية.", level: "A1" },
    { id: "fc15", de: "bestellen (hat bestellt)", ar: "يطلب (في مطعم)", example: "Ich möchte einen Kaffee bestellen.", exampleAr: "أودّ أن أطلب قهوة.", level: "A1" },
    { id: "fc16", de: "nervös", ar: "متوتّر، قلق", example: "Ich bin vor der Prüfung nervös.", exampleAr: "أنا متوتّر قبل الامتحان.", level: "A1" },
    { id: "fc17", de: "hätte gern", ar: "أودّ (صيغة طلبٍ مهذّبة)", example: "Ich hätte gern einen Tee, bitte.", exampleAr: "أودّ شاياً من فضلك.", level: "A1" },
    { id: "fc18", de: "die Familie", ar: "العائلة", example: "Meine Familie wohnt in Tunis.", exampleAr: "تسكن عائلتي في تونس.", level: "A1" },
    { id: "fc19", de: "der Deutschkurs", ar: "دورة اللغة الألمانية", example: "Mein Deutschkurs beginnt heute.", exampleAr: "تبدأ دورة الألمانية اليوم.", level: "A1" },
    { id: "fc20", de: "einfach", ar: "بسيط، سهل", example: "Ich kann einfache Sätze sagen.", exampleAr: "أستطيع قول جمل بسيطة.", level: "A1" },
    { id: "fc21", de: "der Supermarkt", ar: "السوبرماركت", example: "Im Supermarkt habe ich bezahlt.", exampleAr: "دفعتُ في السوبرماركت.", level: "A1" },
    { id: "fc22", de: "bezahlen", ar: "يدفع", example: "Ich möchte bezahlen, bitte.", exampleAr: "أود الدفع من فضلك.", level: "A1" },
    { id: "fc23", de: "nach dem Preis fragen", ar: "يسأل عن السعر", example: "Ich frage nach dem Preis.", exampleAr: "أسأل عن السعر.", level: "A1" },
    { id: "fc24", de: "funktionieren", ar: "يعمل، يؤدّي الغرض", example: "Es ist nicht perfekt, aber es funktioniert.", exampleAr: "الأمر ليس مثالياً، لكنه ينجح.", level: "A1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-13-1",
      type: "summarize-de-to-ar",
      titleAr: "انقل مضمون رسالة قصيرة بالألمانية إلى العربية",
      sourceDe: "Hallo Karim! Ich bin Anna. Ich lerne Deutsch und komme aus Berlin. Am Wochenende besuche ich meine Familie. Viele Grüße, Anna.",
      taskAr: "لخّص الرسالة لصديق لا يفهم الألمانية: من المتحدثة، ومن أين هي، وماذا ستفعل في نهاية الأسبوع؟ قارن إجابتك بالنموذج؛ النشاط غير مسجل كدليل على هدف أو إتقان.",
      modelAnswerAr: "«الرسالة من آنا؛ تتعلم الألمانية وهي من برلين. في نهاية الأسبوع ستزور عائلتها.»",
      keyPointsAr: ["نقل اسم المتحدثة (آنا)", "ذكر أنها من برلين", "نقل زيارة العائلة في نهاية الأسبوع"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-13-1",
      scenarioAr: "اختر رداً يلائم سياق لقاء ثم اقتراح الذهاب إلى مطعم.",
      scenarioDe: "Eine passende Antwort in einem kurzen Gespräch auswählen.",
      strategyAr:
        "اختر الرد الأنسب للسياق في جولتين. البديل الآخر غير مناسب للسؤال لكنه ليس بالضرورة خطأ نحوياً. هذا اختيار نصي مغلق، لا إنتاج شفهي؛ لا يُسجّل دليلاً على هدف كلام أو طلاقة.",
      rounds: [
        {
          speakerDe: "Hallo! Schön, dich zu sehen. Wie geht's?",
          speakerAr: "مرحباً! يسعدني أن أراك. كيف حالك؟",
          options: [
            { de: "Danke, mir geht es gut! Und dir?", ar: "شكراً، أنا بخير! وأنت؟", best: true, replyDe: "Auch gut, danke. Hast du Hunger?", replyAr: "أنا بخير أيضاً، شكراً. هل أنت جائع؟" },
            { de: "Ich wohne in Berlin.", ar: "أسكن في برلين.", best: false, replyDe: "Ah, du wohnst in Berlin. Und wie geht es dir?", replyAr: "آه، تسكن في برلين. وكيف حالك؟" },
          ],
        },
        {
          speakerDe: "Hast du Hunger? Wir können etwas essen gehen.",
          speakerAr: "هل أنت جائع؟ يمكننا الذهاب لتناول شيء ما.",
          options: [
            { de: "Ja, gern! Wohin gehen wir?", ar: "نعم، بكل سرور! إلى أين نذهب؟", best: true, replyDe: "Wir können in ein Café in der Nähe gehen.", replyAr: "يمكننا الذهاب إلى مقهى قريب." },
            { de: "Ich heiße Karim.", ar: "اسمي كريم.", best: false, replyDe: "Hallo, Karim. Möchtest du trotzdem mitkommen?", replyAr: "مرحباً يا كريم. هل تود المجيء معنا رغم ذلك؟" },
          ],
        },
      ],
    },
  ];
