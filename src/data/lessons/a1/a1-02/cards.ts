/**
 * a1-02 — الاختبار الصغير و البطاقات و الوساطة و التفاعل (الجزء «cards»)
 * فُصل من a1-02.ts في الدفعة 96 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

/* 10) التقييم الختامي */
export const miniTest: NonNullable<Lesson["miniTest"]> = [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "Das ist ___ Vater.",
      options: ["mein", "meine", "deine", "eine"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Vater» مذكر فيلزم «mein Vater»؛ و«meine» للمؤنث أو الجمع مثل «meine Schwester».", "لا — «deine» صيغة المخاطب مع مؤنث أو جمع؛ والجملة عن والد المتكلّم: «Das ist mein Vater».", "لا — «eine» أداة نكرة ومؤنثة؛ و«Vater» مذكر فيلزم «mein»."],
      explanation:
        "Vater مذكر في حالة الرفع، لذلك الإجابة mein Vater. اختر الجذر بحسب المالك، ثم راعِ جنس الاسم المملوك وعدده وحالته.",
      errorType: "gender",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الإجابة الصحيحة:",
      questionDe: "___ heißt deine Schwester? — Sie heißt Mona.",
      options: ["Was", "Wie", "Wo", "Wer"],
      correctIndex: 1,
      optionExplanations: ["لا — «Was heißt» تسأل عن المعنى لا عن الاسم؛ والسؤال عن الاسم: «Wie heißt deine Schwester؟».", undefined, "لا — «Wo» تسأل عن المكان؛ والجواب «Sie heißt Mona» اسمٌ لا مكان.", "لا — «Wer heißt» تركيبةٌ غير معتادة للسؤال عن اسم أخت المخاطب؛ والصحيح «Wie heißt…؟»."],
      explanation: "السؤال عن الاسم: Wie heißt deine Schwester?",
      errorType: "vocabulary",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الكلمات:",
      tokens: ["eine", "Schwester", "Ich", "habe", "."],
      correctSentence: "Ich habe eine Schwester.",
      explanation: "لدي أخت: Ich (1) + habe (2) + eine Schwester (المفعول).",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل بـ mein/meine:",
      template: "___ Opa wohnt in Kairouan. ___ Oma wohnt auch in Kairouan.",
      blanks: [
        { correct: "Mein", options: ["Mein", "Meine"] },
        { correct: "Meine", options: ["Mein", "Meine"] },
      ],
      explanation: "Opa مذكر → Mein Opa. Oma مؤنث → Meine Oma.",
      errorType: "gender",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr:
        "اختر التصحيح المناسب للكلمة الخاطئة في الجملة.",
      wrongSentence: "Meine Vater heißt Ahmed.",
      wrongWord: "Meine",
      correctWord: "Mein",
      options: ["Mein", "Meine", "Deine", "Ihre"],
      explanation: "Vater مذكر → Mein Vater. قلب القاعدة: meine مع المؤنث.",
      errorType: "gender",
    },
  ];

/* 11) البطاقات */
export const flashcards: NonNullable<Lesson["flashcards"]> = [
    {
      id: "fc1",
      de: "die Familie",
      ar: "العائلة",
      example: "Meine Familie ist groß.",
      exampleAr: "عائلتي كبيرة.",
      level: "A1",
    },
    {
      id: "fc2",
      de: "der Vater / die Mutter",
      ar: "الأب / الأم",
      example: "Mein Vater und meine Mutter.",
      exampleAr: "أبي وأمي.",
      level: "A1",
    },
    {
      id: "fc3",
      de: "der Bruder / die Schwester",
      ar: "الأخ / الأخت",
      example: "Ich habe einen Bruder.",
      exampleAr: "لدي أخ.",
      level: "A1",
    },
    {
      id: "fc4",
      de: "die Eltern",
      ar: "الوالدان",
      example: "Meine Eltern sind nett.",
      exampleAr: "والداي لطيفان.",
      level: "A1",
    },
    {
      id: "fc5",
      de: "die Geschwister",
      ar: "الإخوة والأخوات (جمع)",
      example: "Hast du Geschwister?",
      exampleAr: "هل لديك إخوة أو أخوات؟",
      level: "A1",
    },
    {
      id: "fc6",
      de: "der Sohn / die Tochter",
      ar: "الابن / الابنة",
      example: "Das ist mein Sohn.",
      exampleAr: "هذا ابني.",
      level: "A1",
    },
    {
      id: "fc7",
      de: "mein / meine",
      ar: "ملكيتي؛ النهاية بحسب الاسم المملوك في الرفع",
      example: "mein Vater, meine Mutter",
      exampleAr: "أبي، أمي",
      level: "A1",
    },
    {
      id: "fc8",
      de: "der Opa / die Oma",
      ar: "الجد / الجدة",
      example: "Mein Opa ist achtzig Jahre alt.",
      exampleAr: "جدي عمره ثمانون عاماً.",
      level: "A1",
    },
    {
      id: "fc9",
      de: "dein / deine",
      ar: "ملكية المخاطَب المفرد غير الرسمي؛ في الرفع تتبع النهاية جنس الاسم وعدده",
      example: "Ist das dein Bruder?",
      exampleAr: "هل هذا أخوك؟",
      level: "A1",
    },
    {
      id: "fc10",
      de: "sein / ihr",
      ar: "له / لها / لهم، بحسب المالك والسياق",
      example: "Sein Vater und ihr Vater.",
      exampleAr: "أبوه وأبوها.",
      level: "A1",
    },
    {
      id: "fc11",
      de: "die Großeltern",
      ar: "الجدّان",
      example: "Meine Großeltern wohnen in Kairouan.",
      exampleAr: "جدّاي يسكنان في القيروان.",
      level: "A1",
    },
    {
      id: "fc12",
      de: "verheiratet / ledig",
      ar: "متزوّج / أعزب",
      example: "Meine Eltern sind verheiratet.",
      exampleAr: "والداي متزوّجان.",
      level: "A1",
    },
    {
      id: "fc13",
      de: "unser / unsere",
      ar: "ملكية المتكلم الجمع؛ النهاية بحسب الاسم في الرفع",
      example: "Unsere Familie ist groß.",
      exampleAr: "عائلتنا كبيرة.",
      level: "A1",
    },
    {
      id: "fc14",
      de: "Väter, Mütter, Brüder, Töchter",
      ar: "جموعٌ بالإمالة وحدها",
      example: "Ich habe zwei Brüder.",
      exampleAr: "لي أخوان.",
      level: "A1",
    },
    {
      id: "fc15",
      de: "das Kind (محايد!)",
      ar: "الطفل — محايد مهما كان جنسه",
      example: "Mein Kind heißt Nour.",
      exampleAr: "طفلي اسمه نور.",
      level: "A1",
    },
    {
      id: "fc16",
      de: "das Haus",
      ar: "البيت",
      example: "Unser Haus ist groß.",
      exampleAr: "بيتنا كبير.",
      level: "A1",
    },
    {
      id: "fc17",
      de: "zusammen",
      ar: "معاً",
      example: "Wir wohnen zusammen.",
      exampleAr: "نسكن معاً.",
      level: "A1",
    },
    {
      id: "fc18",
      de: "neben",
      ar: "بجانب (+ Dativ في هذا المثال)",
      example: "Er sitzt neben seiner Schwester.",
      exampleAr: "يجلس بجانب أخته؛ بعد neben هنا Dativ.",
      level: "A1",
    },
    {
      id: "fc19",
      de: "sitzen",
      ar: "يجلس",
      example: "Meine Oma sitzt im Wohnzimmer.",
      exampleAr: "جدّتي تجلس في غرفة المعيشة.",
      level: "A1",
    },
    {
      id: "fc20",
      de: "stehen",
      ar: "يقف",
      example: "Mein Vater steht links.",
      exampleAr: "أبي يقف على اليسار.",
      level: "A1",
    },
    {
      id: "fc21",
      de: "das Krankenhaus",
      ar: "المستشفى",
      example: "Meine Mutter arbeitet im Krankenhaus.",
      exampleAr: "أمّي تعمل في المستشفى.",
      level: "A1",
    },
    {
      id: "fc22",
      de: "euer / eure",
      ar: "ملكية المخاطَبين بصيغة الجمع غير الرسمية؛ في الرفع تتبع النهاية الاسم",
      example: "Eure Eltern wohnen in Tunis.",
      exampleAr: "والداكم يسكنان في تونس.",
      level: "A1",
    },
    {
      id: "fc23",
      de: "Ihr / Ihre (مخاطبة رسمية)",
      ar: "ملكية المخاطَب بصيغة الاحترام؛ تُكتب بحرف كبير",
      example: "Herr Weber, ist Ihre Tochter hier?",
      exampleAr: "سيد فيبر، هل ابنتك هنا؟",
      level: "A1",
    },
  ];

/* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
export const mediation: NonNullable<Lesson["mediation"]> = [
    {
      id: "med-a1-02-1",
      type: "relay-instructions",
      titleAr: "انقل وصف عائلة بالعربية لصديق",
      sourceDe:
        "Mein Vater heißt Ahmed und ist 50 Jahre alt. Meine Mutter heißt Leila. Ich habe einen Bruder und zwei Schwestern.",
      taskAr:
        "انقل إلى صديقك الأسماء المذكورة، وعمر الأب فقط، وعدد الإخوة والأخوات. لا تخمّن عمراً غير وارد في النص.",
      modelAnswerAr:
        "«والده اسمه أحمد وعمره 50 عاماً. أمه اسمها ليلى. لديه أخ واحد وأختان.»",
      keyPointsAr: [
        "ذكرت اسم الأب واسم الأم كما وردا",
        "ذكرت عمر الأب فقط (50 عاماً)، ولم تخترع عمراً للأم",
        "ذكرت عدد الإخوة والأخوات بدقة",
      ],
    },
  ];

export const interaction: NonNullable<Lesson["interaction"]> = [
    {
      id: "int-a1-02-1",
      scenarioAr: "زميل جديد في صفّ اللغة يسألك عن عائلتك بصيغة du.",
      scenarioDe: "Ein neuer Mitschüler fragt dich nach deiner Familie.",
      strategyAr: "محاكاة موجّهة: اختر رداً مناسباً؛ قد تكون أكثر من إجابة صحيحة، والخيارات لا تقيس كلاماً حراً.",
      rounds: [
        {
          speakerDe: "Hast du Geschwister?",
          speakerAr: "هل لديك إخوة أو أخوات؟",
          options: [
            {
              de: "Ja, ich habe einen Bruder und eine Schwester.",
              ar: "نعم، لدي أخ وأخت.",
              best: true,
              replyDe: "Wie alt sind sie?",
              replyAr: "كم عمرهما؟",
            },
            {
              de: "Nein, ich habe keine Geschwister.",
              ar: "لا، ليس لديّ إخوة أو أخوات.",
              best: true,
              replyDe: "Verstehe. Wie alt ist jemand aus deiner Familie?",
              replyAr: "فهمت. كم عمر شخص من عائلتك؟",
            },
          ],
        },
        {
          speakerDe: "Wie alt ist jemand aus deiner Familie?",
          speakerAr: "كم عمر شخص من عائلتك؟",
          options: [
            {
              de: "Mein Bruder ist 20 Jahre alt.",
              ar: "أخي عمره 20 عاماً.",
              best: true,
              replyDe: "Was sind deine Eltern von Beruf?",
              replyAr: "ما مهنة والديك؟",
            },
            {
              de: "Meine Mutter ist 48 Jahre alt.",
              ar: "أمّي عمرها 48 عاماً.",
              best: true,
              replyDe: "Was sind deine Eltern von Beruf?",
              replyAr: "ما مهنة والديك؟",
            },
          ],
        },
        {
          speakerDe: "Was sind deine Eltern von Beruf?",
          speakerAr: "ما مهنة والديك؟",
          options: [
            {
              de: "Mein Vater ist Lehrer und meine Mutter ist Ärztin.",
              ar: "والدي مدرّس ووالدتي طبيبة.",
              best: true,
              replyDe: "Danke, jetzt weiß ich es.",
              replyAr: "شكراً، فهمت الآن.",
            },
            {
              de: "Ich weiß es nicht genau.",
              ar: "لا أعرف بالتحديد.",
              best: true,
              replyDe: "Kein Problem.",
              replyAr: "لا بأس.",
            },
          ],
        },
      ],
    },
  ];
