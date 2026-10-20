/**
 * a2-13 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-13.ts في المرحلة 5 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann in vorgegebenen Sätzen Präteritum, Perfekt, weil und Dativ richtig kombinieren.",
      ar: "أن أملأ فراغات جمل تجمع war وbin + gegangen وweil وDativ (meinem Chef) بصحة؛ هذا ملء موجّه لا نص حر.",
      evidence: {
        exerciseIds: ["w1", "w2"],
        taskIds: ["writing:a2-13:w1", "writing:a2-13:w2"],
        labelAr: "أكمل w1 (تحويل جملة إلى Perfekt) وw2 (أربعة فراغات في فقرة قصيرة) بصحة. لا يُحتسب فتح الدرس أو الاستماع بعد كشف التفريغ أو الوساطة/التفاعل أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in vorgegebenen Sätzen das richtige Hilfsverb im Perfekt wählen und war/hatte richtig verwenden.",
      ar: "أن أختار الفعل المساعد الصحيح (haben أو sein) في الماضي التام، وأستعمل war/hatte في جمل موجّهة.",
      evidence: {
        exerciseIds: ["e1", "e5", "e6"],
        taskIds: ["practice:a2-13:e1", "practice:a2-13:e5", "practice:a2-13:e6"],
        labelAr: "أجب صحيحاً عن e1 (يظهر ضمن أول أربعة تمارين في مسار التدفق أيضاً) وe5 (war/hatte) وe6 (تصحيح الفعل المساعد) عند ظهورها في جلسة التدريب العشوائية. اختيار الفعل المساعد وحده لا يثبت إنتاج الجملة.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann Gründe mit weil und Aussagen mit dass in vorgegebenen Sätzen richtig anordnen.",
      ar: "أن أرتّب جملة weil وجملة dass في جمل موجّهة، مع الفعل المصرّف في آخر الجملة الثانوية؛ هذا ترتيب موجّه لا تعليل حر.",
      evidence: {
        exerciseIds: ["e4", "e8", "m3"],
        taskIds: ["practice:a2-13:e4", "practice:a2-13:e8", "mini-test:a2-13:m3"],
        labelAr: "رتّب e4 (يظهر ضمن أول أربعة تمارين في مسار التدفق أيضاً)، وأجب صحيحاً عن e8 (تصحيح ترتيب dass)، وm3 (اختيار weil) في الاختبار المصغّر. لا يُحتسب كشف الحل أو قراءة الجدول أداءً.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann fünf Erweiterungen von A2 nach B1 den passenden Beispielen zuordnen.",
      ar: "أن أطابق خمس توسعات من A2 إلى B1 بأمثلتها؛ هذا تعرّف على الشكل وليس إتقان B1.",
      evidence: {
        exerciseIds: ["e11"],
        taskIds: ["practice:a2-13:e11"],
        labelAr: "أكمل مطابقة e11 كاملة عند ظهورها في جلسة التدريب العشوائية. قراءة جدول t3 شرح لا يُحتسب أداءً.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: Lesson["einfuehrung"] = {
    motivatingQuestionAr:
      "في نهاية A1 كنت تقول: «Ich war im Park.» — أربع كلمات. اليوم تستطيع أن تقول: «Letztes Wochenende bin ich nach Hamburg gefahren, weil meine Schwester Geburtstag hatte, und ich habe ihr ein Buch geschenkt.» جملة واحدة فيها Perfekt وweil وPräteritum وDativ. هذا هو A2 كاملاً في نفَس واحد.",
    motivatingQuestionDe: "Was ist der längste Satz, den du auf Deutsch sagen kannst?",
    contextAr:
      "درس ختامي لا يُدرّس قاعدة جديدة: يجمع مفاتيح A2 الاثني عشر في خريطة واحدة، ثم يدمجها في موقفين حقيقيين، ثم يفتح الباب على ما يتغيّر فعلاً في B1 حتى لا يكون الانتقال مفاجأة.",
    contextDe: "Zwölf Einheiten, eine Landkarte. Jetzt kombinieren wir alles.",
    connectionToPreviousAr:
      "هذا ختام A2: من الماضي التام في درس السفر (a2-01) إلى أدوات الربط في درس العلاقات (a2-12) — كل ما تعلّمته في اثنتي عشرة وحدة يجتمع هنا قبل عبور الجسر إلى B1.",
    activateVocabulary: [
      { de: "die Brücke", ar: "الجسر" },
      { de: "zusammenfassen", ar: "يلخّص/يجمع" },
      { de: "bestehen", ar: "يجتاز (امتحاناً)" },
      { de: "der Fortschritt", ar: "التقدّم" },
      { de: "die Stufe", ar: "المرحلة/الدرجة" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة شاملة من A2 (درس a2-01 — السفر والعطلات: الماضي التام مع haben أو sein): اختر الفعل المساعد الصحيح:",
      questionDe: "Letztes Jahr ___ ich nach Berlin geflogen.",
      questionAr: "العام الماضي سافرتُ جواً إلى برلين.",
      options: ["bin", "habe", "war", "hatte"],
      correctIndex: 0,
      explanation: "أفعال الحركة وتغيّر المكان (fliegen, fahren, gehen, kommen) تأخذ sein: ich bin geflogen.",
      errorType: "conjugation",
      optionExplanations: [
        undefined,
        "«habe» لأفعال بلا انتقال مكاني؛ و«fliegen» حركة ⇒ «ich bin geflogen».",
        "«war» ماضي sein البسيط، لا مساعد الماضي التام مع «geflogen».",
        "«hatte» ماضي haben البسيط؛ والمطلوب مساعد «bin». ",
      ],
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة شاملة من A2 (درس a2-09 — المناسبات: حالة الجر Dativ وأفعالها helfen/gefallen/gehören): أكمل بحالة الجر:",
      template: "Ich helfe ___ Kollegen. (زميلي) · Das Buch gehört ___ Lehrerin. (المعلّمة)",
      blanks: [
        { correct: "dem", options: ["dem", "den", "der", "des"] },
        { correct: "der", options: ["der", "die", "dem", "den"] },
      ],
      hint: "helfen وgehören فعلان يطلبان Dativ دائماً: المذكر dem، المؤنث der.",
      explanation: "Ich helfe dem Kollegen. Das Buch gehört der Lehrerin. — كلا الفعلين من أفعال الجر.",
      errorType: "case",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة شاملة من A2 (درس a2-04 — البحث عن سكن: حروف الجر المتغيّرة، الحركة تأخذ النصب): افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich stelle die Flasche auf dem Tisch.",
      wrongWord: "dem",
      correctWord: "den",
      options: ["den", "dem", "der", "das"],
      explanation: "stellen فعل حركة (أين إلى؟ wohin) ⇒ النصب: auf den Tisch. أما stehen فسكون ⇒ auf dem Tisch.",
      errorType: "case",
    },
  ];
