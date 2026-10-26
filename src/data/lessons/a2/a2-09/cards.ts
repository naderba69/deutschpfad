/**
 * a2-09 — البطاقات والاختبار المصغّر والوساطة والتفاعل (الجزء «cards»)
 * فُصل من a2-09.ts في الدفعة 74 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الأداة الصحيحة:",
      questionDe: "Das Geschenk gefällt ___ Kind.",
      options: ["dem", "den", "der", "die"],
      correctIndex: 0,
      explanation: "Kind محايد مفرد، لذلك تكون أداة Dativ هي dem. في هذا المثال Das Geschenk هو الفاعل النحوي، وdem Kind هو الشخص الذي تعجبه الهدية.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«den» منصوب مذكر؛ و«gefallen» يأخذ Dativ، و«das Kind» محايد ⇒ «dem».",
        "«der» مؤنث أو مرفوع؛ و«das Kind» محايد.",
        "«die» مؤنث أو جمع؛ ولا تطابق «das Kind» في Dativ. ",
      ],
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الضمير الصحيح:",
      questionDe: "Ich danke ___ für die Blumen. (أنتَ)",
      options: ["dir", "dich", "mir", "mich"],
      correctIndex: 0,
      explanation: "الشخص بعد danken في هذا التركيب يأتي في Dativ: dir؛ وfür die Blumen مجموعة أخرى في Akkusativ.",
      errorType: "case",
      optionExplanations: [
        undefined,
        "«dich» منصوب؛ و«danken» يأخذ Dativ ⇒ «dir».",
        "«mir» للمتكلم؛ والمقصود هنا المخاطب «أنتَ».",
        "«mich» منصوب للمتكلم؛ فالخطأ في الحالة وفي الشخص معاً. ",
      ],
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "ابدأ بالفاعل، ثم رتّب الفعل ومتمم Dativ:",
      tokens: ["gefällt", "der", "Nachbarin", "Das", "Fotoalbum", "."],
      correctSentence: "Das Fotoalbum gefällt der Nachbarin.",
      explanation:
        "Das Fotoalbum هو الفاعل المفرد، وder Nachbarin الشخص الذي يعجبه الشيء في Dativ.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "اختر أداة التعريف الصحيحة للاسم المميّز:",
      wrongSentence: "Ich helfe die Oma im Hof.",
      wrongWord: "die",
      correctWord: "der",
      options: ["der", "dem", "den", "das"],
      explanation: "Oma مؤنث، وhelfen يأخذ Dativ؛ لذلك die تتحول إلى der Oma.",
      errorType: "case",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بضمير Dativ المناسب:",
      template: "Kannst du ___ helfen? (أنا) Das Kleid gefällt ___. (هي)",
      blanks: [
        { correct: "mir", options: ["mir", "mich", "dir"] },
        { correct: "ihr", options: ["ihr", "sie", "ihm"] },
      ],
      explanation: "helfen → mir، وgefallen → ihr في هذين المثالين.",
      errorType: "case",
    },
  ];

export const flashcards: NonNullable<Lesson["flashcards"]> = [
    { id: "fc1", de: "das Fest", ar: "المناسبة / الاحتفال", example: "Das Fest war schön.", exampleAr: "كانت المناسبة جميلة.", level: "A2" },
    { id: "fc2", de: "die Einladung", ar: "الدعوة", example: "Danke für die Einladung!", exampleAr: "شكراً على الدعوة!", level: "A2" },
    { id: "fc3", de: "feiern", ar: "يحتفل", example: "Wir feiern am Samstag.", exampleAr: "نحتفل يوم السبت.", level: "A2" },
    { id: "fc4", de: "das Geschenk", ar: "الهدية", example: "Das Geschenk ist schön.", exampleAr: "الهدية جميلة.", level: "A2" },
    { id: "fc5", de: "helfen + Dativ", ar: "يساعد شخصاً", example: "Ich helfe dir.", exampleAr: "أساعدك.", level: "A2" },
    { id: "fc6", de: "gefallen + Dativ", ar: "يعجب شخصاً", example: "Das Geschenk gefällt mir.", exampleAr: "تعجبني الهدية.", level: "A2" },
    { id: "fc7", de: "gehören + Dativ", ar: "يخصّ / يكون ملكاً لـ", example: "Das Buch gehört meinem Bruder.", exampleAr: "الكتاب ملك لأخي.", level: "A2" },
    { id: "fc8", de: "gratulieren + Dativ", ar: "يهنئ شخصاً", example: "Ich gratuliere dir zum Geburtstag.", exampleAr: "أهنئك بعيد ميلادك.", level: "A2" },
    { id: "fc9", de: "der Geburtstag", ar: "عيد ميلاد شخص", example: "Sie hat am Samstag Geburtstag.", exampleAr: "عيد ميلادها يوم السبت.", level: "A2" },
    { id: "fc10", de: "der Gast, die Gäste", ar: "الضيف / الضيوف", example: "Die Gäste kommen um fünf Uhr.", exampleAr: "يصل الضيوف في الخامسة.", level: "A2" },
    { id: "fc11", de: "der Innenhof", ar: "الساحة الداخلية للمبنى", example: "Wir feiern im Innenhof.", exampleAr: "نحتفل في الساحة الداخلية للمبنى.", level: "A2" },
    { id: "fc12", de: "sich bei jemandem für etwas bedanken", ar: "يشكر شخصاً على شيء", example: "Ich bedanke mich bei dir für die Blumen.", exampleAr: "أشكرك على الزهور.", level: "A2" },
    { id: "fc13", de: "die Nachbarin", ar: "الجارة", example: "Die Nachbarin kommt zur Feier.", exampleAr: "تأتي الجارة إلى المناسبة.", level: "A2" },
    { id: "fc14", de: "das Fotoalbum", ar: "ألبوم الصور", example: "Das Fotoalbum gefällt Frau Yilmaz.", exampleAr: "ألبوم الصور يعجب السيدة يلماز.", level: "A2" },
    { id: "fc15", de: "die Torte", ar: "تورتة: كعكة بطبقات غالباً، ومحشوة أو مزيّنة", example: "Die Torte ist lecker.", exampleAr: "التورتة لذيذة.", level: "A2" },
  ];

export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a2-09-1",
      type: "relay-instructions",
      titleAr: "انقل تفاصيل دعوة عيد ميلاد إلى العربية",
      sourceDe:
        "Liebe Freunde, am Samstag feiere ich meinen Geburtstag um 18 Uhr bei mir zu Hause. Kommt alle! Bringt gute Laune mit.",
      taskAr: "انقل الدعوة بالعربية، مع ذكر اليوم والساعة والمكان وما يطلبه صاحب الدعوة.",
      modelAnswerAr:
        "«أصدقائي الأعزاء، سأحتفل بعيد ميلادي يوم السبت في السادسة مساءً في منزلي. تعالوا جميعاً، وأحضروا معكم روحاً مرحة!»",
      keyPointsAr: [
        "ذكر يوم السبت والساعة السادسة مساءً",
        "ذكر أن المكان هو منزل صاحب الدعوة",
        "نقل طلب الحضور بروح مرحة دون تغيير المعنى",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a2-09-1",
      scenarioAr: "تتلقى دعوة عيد ميلاد؛ تدرّب على قبولها أو الاعتذار عنها بأدب.",
      scenarioDe: "Geburtstagseinladung — höflich annehmen oder absagen.",
      strategyAr: "يمكنك قبول الدعوة، أو الاعتذار بوضوح مع اقتراح لقاء آخر؛ كلاهما ردّ ملائم للسياق.",
      rounds: [
        {
          speakerDe: "Ich feiere am Samstag meinen Geburtstag. Kommst du?",
          speakerAr: "سأحتفل السبت بعيد ميلادي. هل ستأتي؟",
          options: [
            {
              de: "Ja, gern! Um wie viel Uhr und wo?",
              ar: "نعم، بكل سرور! في أي ساعة وأين؟",
              best: true,
              replyDe: "Um 18 Uhr bei mir zu Hause.",
              replyAr: "الساعة السادسة مساءً في منزلي.",
            },
            {
              de: "Danke für die Einladung! Am Samstag kann ich leider nicht. Können wir uns ein anderes Mal treffen?",
              ar: "شكراً على الدعوة! للأسف لا أستطيع يوم السبت. هل يمكن أن نلتقي في وقت آخر؟",
              best: true,
              replyDe: "Schade, aber gern. Wir finden einen anderen Termin.",
              replyAr: "هذا مؤسف، لكن يسعدني ذلك. سنجد موعداً آخر.",
            },
          ],
        },
        {
          speakerDe: "Um 18 Uhr bei mir. Bringst du etwas mit?",
          speakerAr: "في السادسة مساءً عندي. هل ستحضر شيئاً؟",
          options: [
            {
              de: "Ja, ich bringe einen Kuchen mit!",
              ar: "نعم، سأحضر كعكة!",
              best: true,
              replyDe: "Toll, danke! Bis Samstag!",
              replyAr: "رائع، شكراً! إلى السبت!",
            },
            {
              de: "Gern, ich bringe eine Kleinigkeit mit. Passt das?",
              ar: "بكل سرور، سأحضر شيئاً بسيطاً. هل يناسبك ذلك؟",
              best: true,
              replyDe: "Ja, das passt sehr gut. Danke!",
              replyAr: "نعم، هذا مناسب جداً. شكراً!",
            },
          ],
        },
      ],
    },
  ];
