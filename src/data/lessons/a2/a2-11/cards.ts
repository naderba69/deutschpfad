/**
 * a2-11 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-11.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الضمير الانعكاسي:",
      questionDe: "Wir freuen ___ auf den Urlaub.",
      options: ["uns", "euch", "sich", "mich"],
      correctIndex: 0,
      explanation: "في `sich freuen auf` بمعنى التطلّع إلى شيء، الصيغة مع wir هي `uns`.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«euch» مع ihr؛ والفاعل «Wir» ⇒ «uns».",
        "«sich» مع الغائب؛ و«wir» تأخذ «uns».",
        "«mich» مع ich؛ لا تطابق «Wir». ",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير الانعكاسي:",
      questionDe: "Ihr beeilt ___.",
      options: ["euch", "uns", "sich", "dich"],
      correctIndex: 0,
      explanation: "مع ihr: euch.",
      errorType: "grammar",
      optionExplanations: [
        undefined,
        "«uns» مع wir؛ والفاعل «Ihr» ⇒ «euch».",
        "«sich» مع الغائب؛ و«ihr» تأخذ «euch».",
        "«dich» مع du مفرداً؛ و«Ihr» جمع مخاطب. ",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات لتقول: «أنا لا أغضب»:",
      tokens: ["mich", "Ich", "ärgere", "nicht", "."],
      correctSentence: "Ich ärgere mich nicht.",
      explanation: "للنفي المحايد في هذا المثال: Ich ärgere mich nicht.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Das freut mich.",
      wrongWord: "freut mich",
      correctWord: "freut mich",
      options: ["freut mich", "freuen mich", "freut mir", "freue mich"],
      isAlreadyCorrect: true,
      explanation: "الجملة سليمة: `freuen` هنا متعدٍّ بمعنى «هذا يُسعدني»؛ وهي تختلف عن المعنى الانعكاسي `Ich freue mich` = «أنا مسرور/أتطلع».",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير:",
      template: "Sie (هي) freut ___. Wir müssen ___ anmelden. Ich beeile ___.",
      blanks: [
        { correct: "sich", options: ["sich", "mich", "uns"] },
        { correct: "uns", options: ["sich", "mich", "uns"] },
        { correct: "mich", options: ["sich", "mich", "uns"] },
      ],
      explanation: "هي → sich. نحن → uns. أنا → mich.",
      errorType: "grammar",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Post", ar: "خدمة البريد/مكتب البريد بحسب السياق", example: "Die Post ist in der Stadt.", exampleAr: "مكتب البريد في المدينة.", level: "A2" },
    { id: "fc2", de: "der Friseur", ar: "الحلاق", example: "Ich gehe zum Friseur.", exampleAr: "أذهب إلى الحلاق.", level: "A2" },
    { id: "fc3", de: "reparieren", ar: "يصلح", example: "Er repariert das Handy.", exampleAr: "يصلح الهاتف.", level: "A2" },
    { id: "fc4", de: "sich freuen", ar: "يكون مسروراً/يتطلع بحسب السياق", example: "Ich freue mich!", exampleAr: "أنا مسرور!", level: "A2" },
    { id: "fc5", de: "sich ärgern", ar: "ينزعج/يغضب", example: "Er ärgert sich.", exampleAr: "هو منزعج.", level: "A2" },
    { id: "fc6", de: "sich anmelden", ar: "يسجّل/يلتحق بحسب السياق", example: "Ich muss mich anmelden.", exampleAr: "يجب أن أسجل.", level: "A2" },
    { id: "fc7", de: "sich beeilen", ar: "يستعجل", example: "Beeil dich!", exampleAr: "استعجل!", level: "A2" },
    { id: "fc8", de: "sich beschweren", ar: "يشتكي/يقدّم شكوى", example: "Ich möchte mich beschweren.", exampleAr: "أود أن أشتكي.", level: "A2" },
    { id: "fc9", de: "das Formular", ar: "الاستمارة", example: "Das Formular ist lang.", exampleAr: "الاستمارة طويلة.", level: "A2" },
    { id: "fc10", de: "ausfüllen", ar: "يملأ (استمارة)", example: "Ich fülle das Formular aus.", exampleAr: "أملأ الاستمارة.", level: "A2" },
    { id: "fc11", de: "die Anmeldung", ar: "التسجيل/الانتساب بحسب السياق", example: "Die Anmeldung ist jetzt abgeschlossen.", exampleAr: "اكتمل التسجيل الآن.", level: "A2" },
    { id: "fc12", de: "unterschreiben", ar: "يوقّع", example: "Unterschreiben Sie hier.", exampleAr: "تفضّلوا بالتوقيع هنا (صيغة رسمية).", level: "A2" },
    { id: "fc13", de: "die Bank", ar: "البنك", example: "Die Bank ist neben der Post.", exampleAr: "البنك بجانب مكتب البريد.", level: "A2" },
    { id: "fc14", de: "das Geschäft", ar: "المتجر", example: "Das Geschäft ist geöffnet.", exampleAr: "المتجر مفتوح.", level: "A2" },
    { id: "fc15", de: "bezahlen", ar: "يدفع", example: "Ich bezahle an der Kasse.", exampleAr: "أدفع عند الصندوق.", level: "A2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-11-1", type: "relay-instructions",
      titleAr: "اشرح تعليمات نموذج تسجيل افتراضي بالعربية",
      sourceDe: "Anmeldung: Bitte tragen Sie hier Ihren Namen, Ihre Adresse und Ihre Telefonnummer ein. Unterschreiben Sie unten.",
      taskAr: "اشرح في هذا المثال المحدد البيانات التي يطلبها النموذج وموضع التوقيع؛ لا تعمم هذه الحقول على كل استمارة.",
      modelAnswerAr: "«في هذا النموذج، اكتب اسمك وعنوانك ورقم هاتفك، ثم وقّع في الأسفل.»",
      keyPointsAr: ["في هذا المثال: الاسم والعنوان ورقم الهاتف", "ذكر أن التوقيع في الأسفل"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-11-1",
      scenarioAr: "في محاكاة نصية لمكتب خدمة العملاء — اختر رداً على شكوى.",
      scenarioDe: "Im Kundenservice — eine höfliche Beschwerde.",
      strategyAr: "لاحظ كيف تُصاغ الشكوى بوضوح وتهذيب؛ يقتصر هذا النشاط على اختيار رد مكتوب، ولا يقيّم كلاماً حراً.",
      rounds: [
        {
          speakerDe: "Guten Tag, wie kann ich Ihnen helfen?",
          speakerAr: "طاب يومك، كيف يمكنني مساعدتكم؟",
          options: [
            { de: "Ich habe vor einer Woche etwas bestellt, aber es ist noch nicht angekommen.", ar: "طلبت شيئاً قبل أسبوع ولم يصل بعد.", best: true, replyDe: "Das tut mir leid. Können Sie mir bitte die Bestellnummer nennen?", replyAr: "آسف. هل يمكنكم ذكر رقم الطلب لي من فضلكم؟" },
            { de: "Ihr Laden ist schrecklich und alles ist kaputt!", ar: "متجركم فظيع وكل شيء معطل!", best: false, replyDe: "Bitte schildern Sie das Problem sachlich, damit wir Ihnen helfen können.", replyAr: "من فضلك اشرح المشكلة بهدوء ووضوح كي نتمكن من مساعدتكم." },
          ],
        },
        {
          speakerDe: "Können Sie mir bitte die Bestellnummer nennen?",
          speakerAr: "هل يمكنكم ذكر رقم الطلب لي من فضلكم؟",
          options: [
            { de: "Ja, die Nummer ist 12345. Können Sie bitte den Lieferstatus prüfen?", ar: "نعم، الرقم 12345. هل يمكنكم التحقق من حالة التوصيل؟", best: true, replyDe: "Ich prüfe das sofort. Laut aktuellem Status kommt die Lieferung voraussichtlich morgen.", replyAr: "سأتحقق الآن. بحسب الحالة الحالية، من المتوقع أن تصل الشحنة غداً." },
            { de: "Die Nummer? Das geht Sie nichts an!", ar: "رقم الطلب؟ هذا لا يعنيكم!", best: false, replyDe: "Ohne die Bestellnummer kann ich den Status hier gerade nicht prüfen.", replyAr: "من دون رقم الطلب لا أستطيع التحقق من الحالة هنا في الوقت الحالي." },
          ],
        },
      ],
    },
  ];
