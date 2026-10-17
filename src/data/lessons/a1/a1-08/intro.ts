/**
 * a1-08 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-08.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ausgewählte Kleidungsstücke und Farben benennen.",
      ar: "أسمّي مفردات أساسية للملابس والألوان مع أداة الاسم الألماني.",
      evidence: {
        exerciseIds: ["e3", "e26"],
        taskIds: ["practice:a1-08:e3", "flow-practice:a1-08:e3", "practice:a1-08:e26", "flow-practice:a1-08:e26"],
        labelAr: "صِل الألوان في e3 وقطع الملابس في e26 بمعانيها؛ يلزم إكمال المهمتين بإجابات صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann ein Kleidungsstück mit sein und einem prädikativen Adjektiv einfach beschreiben.",
      ar: "أكتب وصفاً بسيطاً لقطعة ملابس باستعمال sein وصفة خبرية بلا نهاية، مثل: Das Hemd ist rot.",
      evidence: {
        exerciseIds: ["e1", "e4", "e9", "w1"],
        taskIds: ["practice:a1-08:e1", "flow-practice:a1-08:e1", "practice:a1-08:e4", "flow-practice:a1-08:e4", "practice:a1-08:e9", "flow-practice:a1-08:e9", "writing:a1-08:w1"],
        labelAr: "اختر الصفة الخبرية الصحيحة في e1 وe9، رتّب جملة الوصف في e4، ثم اكتب الجملتين في w1؛ يجب أن تصحّ كل النتائج.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann tragen im Präsens an das Subjekt anpassen.",
      ar: "أصرّف tragen في المضارع مع الفاعل في أمثلة مختارة.",
      evidence: {
        exerciseIds: ["e2", "e6", "m2"],
        taskIds: ["practice:a1-08:e2", "flow-practice:a1-08:e2", "practice:a1-08:e6", "flow-practice:a1-08:e6", "mini-test:a1-08:m2"],
        labelAr: "أجب عن تصريف du في e2، وصيغ الفاعل في e6، ثم أعده في سؤال الاختبار m2؛ يلزم الصواب في المهمات الثلاث.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann die Frage „Wie findest du …?“ schriftlich bilden.",
      ar: "أصوغ كتابةً سؤالاً بسيطاً عن الرأي باستعمال Wie findest du …?",
      evidence: {
        exerciseIds: ["e7"],
        taskIds: ["practice:a1-08:e7", "flow-practice:a1-08:e7"],
        labelAr: "حوّل العبارة إلى سؤال رأي في e7 واكتب صيغة مقبولة كاملة.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann ausgewählte Formen von welcher- und dieser- im Nominativ und Akkusativ verwenden.",
      ar: "أستعمل صيغاً مختارة من welcher- وdieser- مع أسماء الملابس في الرفع والنصب.",
      evidence: {
        exerciseIds: ["e11", "e12", "e13", "e14", "e15"],
        taskIds: ["practice:a1-08:e11", "flow-practice:a1-08:e11", "practice:a1-08:e12", "flow-practice:a1-08:e12", "practice:a1-08:e13", "flow-practice:a1-08:e13", "practice:a1-08:e14", "flow-practice:a1-08:e14", "practice:a1-08:e15", "flow-practice:a1-08:e15"],
        labelAr: "أكمل صيغ الإشارة والسؤال في e11–e14، وطابق اسم القطعة مع dies- في e15؛ يلزم الصواب في كل مهمة.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann einfache Sätze mit gefallen und einem Dativpronomen bilden.",
      ar: "أبني جملاً بسيطة بـ gefallen، وأختار ضمير الداتيف وأطابق الفعل مع فاعله.",
      evidence: {
        exerciseIds: ["e16", "e18", "e19", "e20", "e22", "e23", "e25"],
        taskIds: ["practice:a1-08:e16", "flow-practice:a1-08:e16", "practice:a1-08:e18", "flow-practice:a1-08:e18", "practice:a1-08:e19", "flow-practice:a1-08:e19", "practice:a1-08:e20", "flow-practice:a1-08:e20", "practice:a1-08:e22", "flow-practice:a1-08:e22", "practice:a1-08:e23", "flow-practice:a1-08:e23", "practice:a1-08:e25", "flow-practice:a1-08:e25"],
        labelAr: "أجب عن توافق الفعل والضمير في e16 وe19 وe20 وe23، وصحّح/حوّل الجملة في e18 وe22، ثم اختر الرد المناسب في e25؛ كل النتائج مطلوبة.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann passen (Größe) und stehen (jemandem gut stehen) im Kleidungskontext unterscheiden.",
      ar: "أميّز في أمثلة الملابس بين ملاءمة المقاس بـpassen وملاءمة المظهر بـstehen.",
      evidence: {
        exerciseIds: ["e17", "e24", "e25"],
        taskIds: ["practice:a1-08:e17", "flow-practice:a1-08:e17", "practice:a1-08:e24", "flow-practice:a1-08:e24", "practice:a1-08:e25", "flow-practice:a1-08:e25"],
        labelAr: "اختر فعل المقاس في سياقه في e17، وطابق الأفعال بمعانيها في e24، ثم اختر جواباً يفصل المقاس عن الإعجاب في e25.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann eine positive Antwort auf eine verneinte Ja/Nein-Frage mit „doch“ markieren.",
      ar: "أختار doch عندما أرفض مضمون سؤال منفي وأجيب بالإيجاب في الأمثلة المعطاة.",
      evidence: {
        exerciseIds: ["e27", "rq3"],
        taskIds: ["practice:a1-08:e27", "flow-practice:a1-08:e27", "reading:r1:rq3"],
        labelAr: "أكمل جواب السؤال المنفي في e27، ثم حدّد سبب جواب أميرة بـDoch في سؤال فهم القراءة rq3؛ يلزم الصواب في كليهما.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einem kurzen Lesetext wichtige Informationen zu Kleidungsstücken, Größen und Preisen entnehmen.",
      ar: "أستخرج معلومات محددة عن الملابس والمقاسات والأسعار من نص قصير.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq4", "rq5"],
        taskIds: ["reading:r1:rq1", "reading:r1:rq2", "reading:r1:rq3", "reading:r1:rq4", "reading:r1:rq5"],
        labelAr: "أجب عن أسئلة فهم القراءة rq1–rq5 كلها إجابة صحيحة؛ فتح النص وحده لا يُسجّل دليلاً.",
        completion: "all-correct",
      },
    },
    {
      id: "z10",
      de: "Ich kann in kurzen Einkaufsdialogen Kleidungsstück, Farbe und Preis heraushören.",
      ar: "ألتقط اسم قطعة الملابس واللون والسعر من حوارين قصيرين.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجب عن أسئلة الاستماع الثلاثة q1–q3 كلها إجابة صحيحة، بما فيها السعر والقطعة التي ترتديها آنا.",
        completion: "all-correct",
      },
    },
    {
      id: "z11",
      de: "Ich kann zwei kurze Sätze über Kleidung und Farbe schriftlich formulieren.",
      ar: "أكتب جملتين قصيرتين عن قطعة ملابس ولونها باستعمال tragen وsein.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a1-08:w1"],
        labelAr: "اكتب المطلوب في w1 بجملتين كاملتين، مع تصريف tragen ووصف اللون بعد sein.",
        completion: "all-correct",
      },
    },
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "كيف تصف لون قميص بالألمانية بجملة كاملة؟ لاحظ الفرق بين: Das Hemd ist rot وDie Jacke ist blau.",
    motivatingQuestionDe: "Wie findest du meine Jacke?",
    contextAr:
      "نتدرّب في موقف متجر ملابس على تسمية قطع وألوان مختارة، ووصف اللون بجملة خبرية، والسؤال عن الرأي والمقاس. هذه أمثلة تدريبية وليست قائمة بكل ما يقال في المتجر.",
    contextDe: "Diese Hose ist sehr schön!",
    connectionToPreviousAr:
      "تعلمت في الدرس السابق الأرقام والأسعار. هنا نضيف مفردات الملابس والألوان وبعض الأسئلة المناسبة للموقف.",
    activateVocabulary: [
      { de: "die Kleidung", ar: "الملابس" },
      { de: "das Hemd", ar: "القميص" },
      { de: "die Hose", ar: "البنطال" },
      { de: "die Farbe", ar: "اللون" },
      { de: "tragen", ar: "يرتدي" },
    ],
  };


export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-07 — الأعداد من صفر إلى ألف): اختر الكتابة الصحيحة.",
      questionDe: "Wie sagt man „25“ auf Deutsch?",
      questionAr: "كيف تكتب 25 بالألمانية؟",
      options: ["fünfundzwanzig", "fünfzig", "fünfzehn", "zweiundzwanzig"],
      correctIndex: 0,
      explanation: "25 = fünfundzwanzig (الوحدات أولاً ثم العشرات).",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-06 — الفعل الجهازي können): أكمل الجملة.",
      template: "Ich ___ gut schwimmen.",
      blanks: [{ correct: "kann", options: ["kann", "kannst", "können", "konnte"] }],
      explanation: "مع ich: Ich kann gut schwimmen.",
      errorType: "conjugation",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة منتقاة من A1 (درس a1-06 — تغيير حرف المد في الفعل): افحص الجملة؛ اختر التصحيح، أو «لا خطأ» إن كانت سليمة.",
      wrongSentence: "Er essen gern Pizza.",
      wrongWord: "essen",
      correctWord: "isst",
      options: ["isst", "essen", "esse", "ist"],
      explanation: "مع er يصبح essen إلى isst.",
      errorType: "conjugation",
    },
  ];
