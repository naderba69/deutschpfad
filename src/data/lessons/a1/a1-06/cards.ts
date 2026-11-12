/**
 * a1-06 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-06.ts في الدفعة 94 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ gern Musik.",
      options: ["höre", "hörst", "hört", "hören"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «hörst» للمخاطب «du hörst»؛ والفاعل «ich» فيلزم «höre».", "لا — «hört» للغائب «er hört» أو لـ«ihr»؛ ومع «ich» يلزم «Ich höre gern Musik».", "لا — «hören» للجمع «sie hören» أو المصدر؛ والفاعل «ich» فيلزم «höre»."],
      explanation: "مع ich: höre + gern.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة الأمر الصحيحة (مع حضرتك):",
      questionDe: "___ bitte! (أمر مهذب)",
      options: ["Kommen Sie", "Komm", "Kommt", "Komme"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Komm» أمرٌ للمفرد غير الرسمي؛ والمطلوب أمرٌ مهذب مع «Sie»: «Kommen Sie bitte!».", "لا — «Kommt» أمرٌ لجمعٍ غير رسمي «ihr»؛ والأمر المهذب يذكر الضمير: «Kommen Sie».", "لا — «Komme» تُستعمل في أمر المفرد غير الرسمي في استعمالات محدودة؛ والمهذب مع «Sie» هو «Kommen Sie»."],
      explanation: "مع Sie: Kommen Sie! — الضمير مذكور مع صيغة الاحترام.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["gern", "tanzt", "Sie", "."],
      correctSentence: "Sie tanzt gern.",
      explanation: "هي ترقص بسرور: Sie + tanzt + gern.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر حرف الجر الذي يصحّح الجملة.",
      wrongSentence: "Hast du Lust für Kaffee?",
      wrongWord: "für Kaffee",
      correctWord: "auf Kaffee",
      options: ["auf Kaffee", "zu Kaffee", "an Kaffee", "mit Kaffee"],
      explanation: "التعبير الصحيح: Lust haben auf + اسم.",
      errorType: "preposition",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل صيغة الأمر:",
      template: "___ auf! (أنتَ) · ___ auf! (أنتم) · ___ Sie auf! (حضرتك)",
      blanks: [
        { correct: "Steh", options: ["Steh", "Steht", "Stehen"] },
        { correct: "Steht", options: ["Steh", "Steht", "Stehen"] },
        { correct: "Stehen", options: ["Steh", "Steht", "Stehen"] },
      ],
      explanation: "Steh auf (du)، Steht auf (ihr)، Stehen Sie auf (Sie). في صيغ الأمر هذه تأتي البادئة في آخر الجملة.",
      errorType: "grammar",
    },
    {
      id: "m6",
      type: "multiple-choice",
      instructionAr: "اختر تصريف lesen الصحيح:",
      questionDe: "Er ___ ein Buch.",
      options: ["liest", "lese", "lest", "liebt"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «lese» للمتكلّم «ich lese»؛ والفاعل «er» فيلزم «liest» وهو فعلٌ متغيّر الجذر (e ← ie).", "لا — «lest» صيغة «ihr»؛ ومع «er» المفرد يلزم «Er liest ein Buch».", "لا — «liebt» من «lieben» أي يحبّ لا يقرأ؛ والجملة عن القراءة: «Er liest ein Buch»."],
      explanation: "في صيغة er/sie/es من lesen يتغير e إلى ie: Er liest.",
      errorType: "conjugation",
    },
    {
      id: "m7",
      type: "multiple-choice",
      instructionAr: "اختر تصريف möchte الصحيح مع wir:",
      questionDe: "Wir ___ am Samstag Fußball spielen.",
      options: ["möchten", "möchte", "möchtest", "möchtet"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «möchte» للمتكلّم المفرد أو الغائب «ich/er möchte»؛ والفاعل «wir» فيلزم «möchten».", "لا — «möchtest» للمخاطب المفرد «du möchtest»؛ والفاعل هنا «wir».", "لا — «möchtet» للمخاطب الجمع «ihr möchtet»؛ والصحيح «Wir möchten am Samstag Fußball spielen»."],
      explanation: "مع wir نقول möchten؛ ويأتي المصدر spielen في نهاية الجملة.",
      errorType: "conjugation",
    },
    {
      id: "m8",
      type: "multiple-choice",
      instructionAr: "اختر صيغة الماضي التي تناسب المكان:",
      questionDe: "Am Samstag ___ ich im Park.",
      options: ["war", "hatte", "warst", "waren"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «hatte» تحتاج مفعولاً به («Ich hatte Zeit»)؛ والجملة عن الوجود في مكان فيلزم «war».", "لا — «warst» للمخاطب «du warst»؛ والفاعل «ich» فيلزم «Am Samstag war ich im Park».", "لا — «waren» للجمع «wir/sie waren»؛ ومع «ich» يلزم «war»."],
      explanation: "لوصف المكان في الماضي نستخدم war: Am Samstag war ich im Park.",
      errorType: "conjugation",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "die Freizeit", ar: "وقت الفراغ", example: "In meiner Freizeit lese ich.", exampleAr: "في وقت فراغي أقرأ.", level: "A1" },
    { id: "fc2", de: "das Hobby", ar: "الهواية", example: "Mein Hobby ist Fußball.", exampleAr: "هوايتي كرة القدم.", level: "A1" },
    { id: "fc3", de: "gern / gerne", ar: "بسرور / يستمتع بممارسة", example: "Ich spiele gern Tennis.", exampleAr: "أحب لعب التنس.", level: "A1" },
    { id: "fc4", de: "Musik hören", ar: "يستمع للموسيقى", example: "Ich höre gern Musik.", exampleAr: "أحب الاستماع للموسيقى.", level: "A1" },
    { id: "fc5", de: "tanzen", ar: "يرقص", example: "Wir tanzen gern.", exampleAr: "نحب الرقص.", level: "A1" },
    { id: "fc6", de: "fotografieren", ar: "يصور", example: "Sie fotografiert gern.", exampleAr: "تحب التصوير.", level: "A1" },
    { id: "fc7", de: "der Imperativ", ar: "صيغة الأمر", example: "Komm! Kommt! Kommen Sie!", exampleAr: "تعال! تعالوا! تفضلوا!", level: "A1" },
    { id: "fc8", de: "Lust haben auf", ar: "لديه رغبة في", example: "Hast du Lust auf ein Spiel?", exampleAr: "هل لديك رغبة في لعبة؟", level: "A1" },
    { id: "fc9", de: "essen – isst", ar: "يأكل (تغيّر e→i)", example: "Er isst gern Pizza.", exampleAr: "هو يحب أكل البيتزا.", level: "A1" },
    { id: "fc10", de: "lesen – liest", ar: "يقرأ (تغيّر e→ie)", example: "Du liest ein Buch.", exampleAr: "أنتَ تقرأ كتاباً.", level: "A1" },
    { id: "fc11", de: "fahren – fährst", ar: "يقود/يركب (تغيّر a→ä)", example: "Sie fährt mit dem Fahrrad.", exampleAr: "هي تركب الدراجة.", level: "A1" },
    { id: "fc12", de: "können / kann", ar: "يستطيع / أستطيع", example: "Ich kann schwimmen.", exampleAr: "أستطيع السباحة.", level: "A1" },
    { id: "fc13", de: "möchte", ar: "أودّ (طلب مهذب)", example: "Ich möchte einen Kaffee.", exampleAr: "أود قهوة.", level: "A1" },
    { id: "fc14", de: "war / hatte", ar: "كان / كان يملك", example: "Ich war im Park. Ich hatte Zeit.", exampleAr: "كنت في الحديقة. كان عندي وقت.", level: "A1" },
    {"id": "fc15", "de": "gern ← lieber ← am liebsten", "ar": "أحبّ ← أفضّل ← أحبّ أكثر شيء", "example": "Ich trinke gern Tee. Lieber trinke ich Kaffee. Am liebsten trinke ich Wasser.", "exampleAr": "أحبّ شرب الشاي. وأفضّل شرب القهوة. وأكثر ما أحبّه شرب الماء.", "level": "A1"},
    {"id": "fc16", "de": "Iss! Lies! Nimm! / Fahr!", "ar": "في أفعال معيّنة يبقى e→i/ie في الأمر؛ مع fahren نقول Fahr!", "example": "Lies den Text und iss dein Brot!", "exampleAr": "اقرأ النصّ وكُل خبزك!", "level": "A1"},
    {"id": "fc17", "de": "nehmen – du nimmst – Nimm!", "ar": "يأخذ — تصريف غير منتظم", "example": "Nimmst du Zucker?", "exampleAr": "أتضع سكّراً؟", "level": "A1"},
    {"id": "fc18", "de": "Modalverb + Infinitiv (ohne zu)", "ar": "الناقص + مصدر عارٍ في الآخر", "example": "Ich kann sehr gut kochen.", "exampleAr": "أُحسن الطبخ جيّداً.", "level": "A1"},
    {"id": "fc19", "de": "ich möchte / er möchte", "ar": "أودّ — الطلب المهذّب", "example": "Ich möchte bitte einen Tee.", "exampleAr": "أودّ شاياً من فضلك.", "level": "A1"},
    {"id": "fc20", "de": "Ich hatte Hunger / Zeit / Angst", "ar": "تراكيب شائعة مع haben؛ وIch war hungrig صحيح أيضاً", "example": "Ich hatte gestern keine Zeit.", "exampleAr": "لم يكن لديّ وقت أمس.", "level": "A1"},
    { id: "fc21", de: "schwimmen", ar: "يسبح", example: "Ich gehe zweimal pro Woche schwimmen.", exampleAr: "أذهب للسباحة مرّتين في الأسبوع.", level: "A1" },
    { id: "fc22", de: "kochen", ar: "يطبخ", example: "Am Wochenende koche ich gern.", exampleAr: "في العطلة أطبخ بسرور.", level: "A1" },
    { id: "fc23", de: "spielen", ar: "يلعب", example: "Ich spiele Volleyball.", exampleAr: "ألعب الكرة الطائرة.", level: "A1" },
    { id: "fc24", de: "die Stunde", ar: "الساعة (مدّة)", example: "Eine halbe Stunde reicht.", exampleAr: "نصف ساعة يكفي.", level: "A1" },
    { id: "fc25", de: "die Woche", ar: "الأسبوع", example: "Zweimal pro Woche.", exampleAr: "مرّتين في الأسبوع.", level: "A1" },
    { id: "fc26", de: "leider", ar: "للأسف", example: "Leider habe ich keine Zeit.", exampleAr: "للأسف ليس عندي وقت.", level: "A1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-06-1", type: "simplify-announcement",
      titleAr: "بسّط دعوة لنشاط رياضي بالعربية",
      sourceDe: "Wir spielen am Samstag um 15 Uhr Fußball im Park. Komm doch mit! Bring deine Freunde mit.",
      taskAr: "انقل الدعوة بالعربية لصديق: اليوم، الوقت، المكان، وما يجب إحضاره.",
      modelAnswerAr: "«نلعب كرة القدم السبت الساعة 3 عصراً في الحديقة. تعال معنا! وأحضر أصدقاءك.»",
      keyPointsAr: ["نقلت اليوم (السبت)", "نقلت الوقت (الثالثة عصراً)", "ذكرت المكان (الحديقة)", "نقلت طلب إحضار الأصدقاء"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-06-1",
      scenarioAr: "صديق يدعوك لنشاط في عطلة نهاية الأسبوع.",
      scenarioDe: "Ein Freund lädt dich zu einer Aktivität ein.",
      strategyAr: "الاستراتيجية: قبول الدعوة أو الاعتذار بلطف مع اقتراح بديل.",
      rounds: [
        {
          speakerDe: "Hast du am Samstag Zeit? Wir spielen Fußball.",
          speakerAr: "هل لديك وقت السبت؟ سنلعب كرة القدم.",
          options: [
            { de: "Ja, gern! Um wie viel Uhr?", ar: "نعم بكل سرور! في أي ساعة؟", best: true, replyDe: "Um 15 Uhr im Park.", replyAr: "الساعة 3 عصراً في الحديقة." },
            { de: "Nein, ich hasse Fußball und hasse dich.", ar: "لا، أكره كرة القدم وأكرهك.", best: false, replyDe: "Das ist nicht nett. Sag einfach höflich ab.", replyAr: "هذا غير لطيف. فقط اعتذر بأدب." },
          ],
        },
        {
          speakerDe: "Um 15 Uhr im Park. Kommst du?",
          speakerAr: "الساعة 3 في الحديقة. هل ستأتي؟",
          options: [
            { de: "Ja, ich komme! Ich bringe meinen Bruder mit.", ar: "نعم سآتي! سأحضر أخي معي.", best: true, replyDe: "Super! Wir freuen uns!", replyAr: "رائع! نحن سعداء!" },
            { de: "Ich habe leider keine Zeit. Vielleicht nächste Woche?", ar: "للأسف ليس لدي وقت. ربما الأسبوع القادم؟", best: true, replyDe: "Okay, nächste Woche dann!", replyAr: "حسناً، الأسبوع القادم إذن!" },
          ],
        },
      ],
    },
  ];
