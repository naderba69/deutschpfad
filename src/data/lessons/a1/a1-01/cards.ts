/**
 * a1-01 — الاختبار المصغّر والبطاقات والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a1-01.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ heißt du? — Ich heiße Karim.",
      options: ["Was", "Wie", "Wo", "Wer"],
      correctIndex: 1,
      explanation: "السؤال عن الاسم يستخدم Wie: Wie heißt du? — ما اسمك؟",
      errorType: "vocabulary",
      optionExplanations: [
        "«Was heißt du؟» تركيبٌ غير مستعمل للسؤال عن الاسم؛ والصحيح «Wie heißt du؟».",
        undefined,
        "«Wo» للسؤال عن المكان؛ والجواب «Ich heiße Karim» اسمٌ لا مكان.",
        "«Wer heißt du؟» يسأل عن الشخص لا عن اسمه؛ والجواب «Ich heiße …» يستدعي «Wie».",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Wir ___ Studenten.",
      options: ["bin", "bist", "sind", "ist"],
      correctIndex: 2,
      explanation: "مع wir نستخدم sind: Wir sind Studenten — نحن طلاب.",
      errorType: "conjugation",
      optionExplanations: [
        "«bin» للمتكلّم المفرد «Ich bin»؛ و«Wir» جمع.",
        "«bist» للمخاطب المفرد «du bist»؛ والفاعل «Wir».",
        undefined,
        "«ist» للغائب المفرد «er/sie/es ist»؛ والجمع «Wir sind».",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين سؤال صحيح:",
      tokens: ["wohnst", "du", "Wo", "?"],
      correctSentence: "Wo wohnst du?",
      explanation: "أين تسكن؟ — Wo (أين) + wohnst (تسكن) + du (أنتَ).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ:",
      template: "Ich ___ aus Tunesien. Und du, woher ___ du?",
      blanks: [
        { correct: "komme", options: ["komme", "kommst", "kommt"] },
        { correct: "kommst", options: ["komme", "kommst", "kommt"] },
      ],
      explanation: "ich → komme، du → kommst. لاحظ إضافة s في نهاية الفعل مع du.",
      errorType: "conjugation",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Warum du lernst Deutsch?",
      wrongWord: "du lernst",
      correctWord: "lernst du",
      options: ["lernst du", "du lernen", "lernt du"],
      explanation: "في سؤال W يأتي الفعل مباشرة بعد كلمة السؤال ثم الفاعل: Warum lernst du Deutsch? والفعل يوافق du بالنهاية st-.",
      errorType: "word-order",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "der Name", ar: "الاسم", example: "Wie ist dein Name?", exampleAr: "ما اسمك؟", level: "A1" },
    { id: "fc2", de: "heißen", ar: "يُدعى / اسمه", example: "Ich heiße Anna.", exampleAr: "اسمي آنا.", level: "A1" },
    { id: "fc3", de: "kommen", ar: "يأتي", example: "Ich komme aus Tunesien.", exampleAr: "أنا من تونس.", level: "A1" },
    { id: "fc4", de: "wohnen", ar: "يسكن", example: "Ich wohne in Tunis.", exampleAr: "أسكن في تونس.", level: "A1" },
    { id: "fc5", de: "woher", ar: "من أين", example: "Woher kommst du?", exampleAr: "من أين أنت؟", level: "A1" },
    { id: "fc6", de: "Guten Morgen", ar: "صباح الخير", example: "Guten Morgen!", exampleAr: "صباح الخير!", level: "A1" },
    { id: "fc7", de: "das Land", ar: "البلد", example: "Ich liebe mein Land.", exampleAr: "أحب بلدي.", level: "A1" },
    { id: "fc8", de: "die Stadt", ar: "المدينة", example: "Tunis ist eine schöne Stadt.", exampleAr: "تونس مدينة جميلة.", level: "A1" },
    { id: "fc9", de: "lernen / ich lerne", ar: "يتعلم / أتعلم", example: "Ich lerne Deutsch.", exampleAr: "أتعلم الألمانية.", level: "A1" },
    { id: "fc10", de: "die Endung", ar: "النهاية (لاحقة تصريف الفعل)", example: "Die Endungen sind -e, -st, -t, -en: ich lerne, du lernst, er lernt.", exampleAr: "النهايات هي ‎-e و‎-st و‎-t و‎-en: أتعلّم، تتعلّم، يتعلّم.", level: "A1" },
    {"id": "fc11", "de": "die Mitbewohnerin", "ar": "شريكة السكن", "example": "Meine Mitbewohnerin heißt Lena.", "exampleAr": "شريكتي في السكن اسمها لينا.", "level": "A1"},
    {"id": "fc12", "de": "Es macht Spaß.", "ar": "إنّه ممتع.", "example": "Deutsch lernen macht Spaß.", "exampleAr": "تعلّم الألمانية ممتع.", "level": "A1"},
    {"id": "fc13", "de": "du arbeitest (وصلة ‑e‑)", "ar": "أنت تعمل — جذع بـ t يأخذ ‑e‑", "example": "Du arbeitest viel.", "exampleAr": "أنت تعمل كثيراً.", "level": "A1"},
    { id: "fc14", de: "studieren", ar: "يدرس في الجامعة", example: "Ich möchte hier Informatik studieren.", exampleAr: "أودّ أن أدرس المعلوماتية هنا.", level: "A1" },
    { id: "fc15", de: "allein", ar: "وحده", example: "Ich wohne nicht allein.", exampleAr: "لا أسكن وحدي.", level: "A1" },
    { id: "fc16", de: "freundlich", ar: "لطيف، ودود", example: "Lena ist immer freundlich.", exampleAr: "لينا ودودة دائماً.", level: "A1" },
    { id: "fc17", de: "nett", ar: "لطيف", example: "Meine Mitbewohnerin ist sehr nett.", exampleAr: "شريكتي في السكن لطيفة جداً.", level: "A1" },
    { id: "fc18", de: "beginnen", ar: "يبدأ", example: "Am Montag beginnt mein Deutschkurs.", exampleAr: "يوم الاثنين تبدأ دورتي.", level: "A1" },
    { id: "fc19", de: "der Deutschkurs", ar: "دورة اللغة الألمانية", example: "Der Deutschkurs ist von neun bis zwölf.", exampleAr: "الدورة من التاسعة إلى الثانية عشرة.", level: "A1" },

    { id: "fc20", de: "der Kurs", ar: "الدورة", example: "Der Deutschkurs beginnt am Montag.", exampleAr: "تبدأ دورة الألمانية يوم الاثنين.", level: "A1" },
    { id: "fc21", de: "beginnen", ar: "يبدأ", example: "Der Kurs beginnt um neun Uhr.", exampleAr: "تبدأ الدورة في التاسعة.", level: "A1" },
    { id: "fc22", de: "antworten", ar: "يجيب", example: "Sara antwortet: Ich komme aus Tunis.", exampleAr: "تجيب سارة: أنا من تونس.", level: "A1" },
    { id: "fc23", de: "die Lehrerin", ar: "المعلّمة", example: "Die Lehrerin fragt: Woher kommst du?", exampleAr: "تسأل المعلّمة: من أين أنت؟", level: "A1" },
    { id: "fc24", de: "arbeiten", ar: "يعمل", example: "Milan arbeitet in einem Café.", exampleAr: "يعمل ميلان في مقهى.", level: "A1" },
    { id: "fc25", de: "die Nachricht", ar: "الرسالة", example: "Sara schreibt eine Nachricht an ihre Freundin.", exampleAr: "تكتب سارة رسالة إلى صديقتها.", level: "A1" },
    { id: "fc26", de: "die Freundin", ar: "الصديقة", example: "Sie schreibt an ihre Freundin.", exampleAr: "تكتب إلى صديقتها.", level: "A1" },
    { id: "fc27", de: "die Frage", ar: "السؤال", example: "Ich habe viele Fragen gestellt.", exampleAr: "طرحت أسئلة كثيرة.", level: "A1" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-01-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص بطاقة تعريف ألمانية لصديق لا يفهم الألمانية",
      sourceDe: "Hallo! Ich heiße Karim und komme aus Tunesien. Ich wohne in Tunis und lerne Deutsch.",
      sourceAr: "مرحباً! اسمي كريم وأنا من تونس. أسكن في تونس وأتعلم الألمانية.",
      taskAr: "نقل الرسالة أعلاه بالعربية إلى صديق لا يفهم الألمانية، مع الحفاظ على كل المعلومات (الاسم، البلد، المدينة، النشاط).",
      modelAnswerAr: "«مرحباً! صديقي اسمه كريم، وهو من تونس. يسكن في مدينة تونس ويتعلم اللغة الألمانية.»",
      keyPointsAr: ["ذكرت الاسم (كريم)", "ذكرت البلد (تونس)", "ذكرت المدينة (تونس)", "ذكرت أنه يتعلم الألمانية"],
    },
    {
      id: "med-a1-01-2",
      type: "relay-instructions",
      titleAr: "انقل تعليمات بسيطة: كيف تتهجى الاسم؟",
      sourceDe: "Buchstabiere bitte deinen Namen! — K-A-R-I-M",
      taskAr: "اشرح لصديقك بالعربية كيف يتهجّى اسمه بالألمانية، موضحاً أن كل حرف يُنطق باسمه الألماني.",
      modelAnswerAr: "«التهجئة بالألمانية: نقول اسم كل حرف على حدة — K تُنطق كا، A آ، R إر، I إي، M إم. هكذا: كا-آ-إر-إي-إم.»",
      keyPointsAr: ["شرحت معنى buchstabieren (التهجئة)", "ذكرت مثالاً على التهجئة حرفاً حرفاً"],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-01-1",
      scenarioAr: "تلتقي شخصاً ألمانياً لأول مرة في حفلة. هو يبدأ الحديث.",
      scenarioDe: "Du triffst eine deutsche Person auf einer Party.",
      strategyAr: "الاستراتيجية المستهدفة: افتتاح محادثة والرد على أسئلة التعارف.",
      rounds: [
        {
          speakerDe: "Hallo! Ich bin Lisa. Und du?",
          speakerAr: "مرحباً! أنا ليزا. وأنت؟",
          options: [
            { de: "Hallo Lisa! Ich heiße Karim. Freut mich!", ar: "مرحباً ليزا! اسمي كريم. سعيد بلقائك!", best: true, replyDe: "Freut mich auch, Karim! Woher kommst du?", replyAr: "سعيدة بلقائك أيضاً يا كريم! من أين أنت؟" },
            { de: "Ich bin ein Tisch.", ar: "أنا طاولة.", best: false, replyDe: "Haha, sehr lustig! Aber woher kommst du wirklich?", replyAr: "هاها، مضحك جداً! لكن من أين أنت حقاً؟" },
          ],
        },
        {
          speakerDe: "Woher kommst du, Karim?",
          speakerAr: "من أين أنت يا كريم؟",
          options: [
            { de: "Ich komme aus Tunesien. Und du?", ar: "أنا من تونس. وأنتِ؟", best: true, replyDe: "Aus Deutschland, aus Berlin. Ich wohne dort.", replyAr: "من ألمانيا، من برلين. أسكن هناك." },
            { de: "Ich wohne in einem Haus.", ar: "أسكن في بيت.", best: false, replyDe: "Das ist schön, aber woher kommst du?", replyAr: "جميل، لكن من أين أنت؟" },
          ],
        },
        {
          speakerDe: "Was machst du hier in Deutschland?",
          speakerAr: "ماذا تفعل هنا في ألمانيا؟",
          options: [
            { de: "Ich lerne Deutsch. Ich wohne hier.", ar: "أتعلم الألمانية. أسكن هنا.", best: true, replyDe: "Sehr gut! Viel Erfolg beim Deutschlernen!", replyAr: "ممتاز! حظاً موفقاً في تعلم الألمانية!" },
            { de: "Ich bin ein Auto.", ar: "أنا سيارة.", best: false, replyDe: "Du bist ein Auto? Okay, komisch! Tschüss!", replyAr: "أنت سيارة؟ حسناً، غريب! إلى اللقاء!" },
          ],
        },
      ],
    },
  ];
