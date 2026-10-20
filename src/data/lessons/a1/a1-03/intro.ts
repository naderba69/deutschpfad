/**
 * a1-03 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-03.ts في الدفعة 88 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    { id: "z1", de: "Ich kann Lebensmittel mit ihrem Artikel nennen.", ar: "أن أسمّي المأكولات والمشروبات مع أدواتها الصحيحة." , evidence: { exerciseIds: ["e3", "e1"], taskIds: ["practice:a1-03:e3", "practice:a1-03:e1"], labelAr: "ترتيب كلمات الطعام مع أدواتها (e3) واختيار الأداة الصحيحة في الجملة (e1).", completion: "all-correct" } },
    { id: "z2", de: "Ich kann bestimmte und unbestimmte Artikel im Nominativ verwenden.", ar: "أن أميّز أدوات التعريف والتنكير وأستعملها في حالة الرفع." , evidence: { exerciseIds: ["e1", "w2"], taskIds: ["practice:a1-03:e1", "writing:a1-03:w2"], labelAr: "اختيار أداة الرفع (e1) وملء الفراغات في جمل قصيرة كتابةً (w2).", completion: "all-correct" } },
    { id: "z3", de: "Ich kann in einfachen Sätzen passende Akkusativformen verwenden.", ar: "أن أختار صيغ الأدوات المناسبة في Akkusativ مع الأفعال الواردة في الدرس." , evidence: { exerciseIds: ["e2", "e5", "m4", "m5"], taskIds: ["practice:a1-03:e2", "practice:a1-03:e5", "mini-test:a1-03:m4", "mini-test:a1-03:m5"], labelAr: "اختيار صيغ Akkusativ في جمل الأكل والشرب (e2 وe5 وm4 وm5).", completion: "all-correct" } },
    { id: "z4", de: "Ich kann haben im Präsens konjugieren und in einfachen Sätzen verwenden.", ar: "أن أصرف haben في المضارع وأستعمله في جمل بسيطة عن الملكية والجوع والعطش." , evidence: { exerciseIds: ["e6", "e9", "m2"], taskIds: ["practice:a1-03:e6", "practice:a1-03:e9", "mini-test:a1-03:m2"], labelAr: "ملء الفراغات بصيغ haben (e6)، وتصحيح haben مكان sein (e9)، وصرف السؤال بـ Hast (m2).", completion: "all-correct" } },
    { id: "z5", de: "Ich kann einem kurzen Lesetext Bestellungen und Preise entnehmen.", ar: "أن أستخرج من نص قصير معلومات أساسية عن الطلبات والأسعار." , evidence: { exerciseIds: ["r1", "r4"], taskIds: ["reading:read-a1-03:r1", "reading:read-a1-03:r4"], labelAr: "الإجابة عن سؤالي الطلب والحساب في نص المقهى (r1 وr4)، دون كشف الحل.", completion: "all-correct" } },
    { id: "z6", de: "Ich kann in einem kurzen Dialog einfache Bestellungen verstehen.", ar: "أن أفهم طلبات بسيطة للطعام والشراب في حوار قصير مسموع." , evidence: { exerciseIds: ["q1", "q2"], taskIds: ["listening:l1:q1", "listening:l1:q2"], labelAr: "فهم الطلب والسعر في الحوار المسموع (q1 وq2) بعد الاستماع، لا قبل كشف النص.", completion: "all-correct" } },
    { id: "z7", de: "Ich kann im Café höflich bestellen und auf eine einfache Rückfrage reagieren.", ar: "أن أطلب في المقهى بجمل قصيرة مهذبة، وأجيب عن سؤال بسيط." , evidence: { exerciseIds: ["e10", "w4"], taskIds: ["practice:a1-03:e10", "writing:a1-03:w4"], labelAr: "كتابة الطلب المسموع (e10) وكتابة طلب مهذب بجملة كاملة (w4).", completion: "all-correct" } },
    { id: "z8", de: "Ich kann eine kurze Bestellung mit passenden Artikeln aufschreiben.", ar: "أن أكتب طلباً قصيراً مستخدماً أدوات مناسبة." , evidence: { exerciseIds: ["w4"], taskIds: ["writing:a1-03:w4"], labelAr: "كتابة طلب قصير بأدوات صحيحة (w4).", completion: "all-correct" } },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "قُل: «التفاحة حمراء» ثم «آكل التفاحة». في الألمانية يبقى الاسم Apfel على صورته، لكن أداة المذكر تتغير بين der Apfel وden Apfel. خمّن لماذا؟",
    motivatingQuestionDe: "Was isst du gern?",
    contextAr:
      "سنذهب اليوم إلى المطبخ الألماني: نتعلم أسماء الأطعمة مع أدواتها، ثم نكتشف «ظاهرة النصب» التي تجعل der يصبح den وein يصبح einen بعد أفعال معينة.",
    contextDe: "Guten Appetit!",
    connectionToPreviousAr: "تعلمت في الدرس السابق mein/meine مع العائلة. اليوم نربط ذلك بمفردات الطعام والشراب، ونلاحظ تغيّر بعض الأدوات في حالة النصب.",
    activateVocabulary: [
      { de: "das Essen", ar: "الطعام" },
      { de: "das Trinken", ar: "الشراب" },
      { de: "der Apfel", ar: "التفاحة" },
      { de: "essen", ar: "يأكل" },
      { de: "trinken", ar: "يشرب" },
      { de: "haben", ar: "يملك / لديه" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): كيف تقدّم نفسك؟",
      questionDe: "Wie heißt du?",
      questionAr: "ما اسمك؟",
      options: ["Ich heiße Sami.", "Ich bin Sami heißen.", "Mein heißen ist Sami.", "Ich heiße mich Sami."],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Ich bin Sami heißen» يخلط المصرفَين؛ فبعد «bin» لا يأتي المصدر «heißen».", "لا — «heißen» فعلٌ لا اسمٌ؛ فلا يصحّ «Mein heißen ist Sami» بل «Mein Name ist Sami».", "لا — «sich heißen» غير مستعملة في الألمانية؛ والصحيح «Ich heiße Sami» بلا «mich»."],
      explanation: "Ich heiße + الاسم (من درس a1-01): Ich heiße Sami.",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-02 — العائلة والأصدقاء): ما أداة «الأم»؟",
      questionDe: "Welchen Artikel hat das Wort „Mutter“?",
      questionAr: "ما أداة التعريف لكلمة «أم»؟",
      options: ["die", "der", "das"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «der» أداة المذكر؛ و«Mutter» مؤنث: «die Mutter».", "لا — «das» أداة المحايد؛ و«Mutter» مؤنث فتأخذ «die Mutter»."],
      explanation: "die Mutter — مؤنث (من درس a1-02 العائلة).",
      errorType: "article",
    },
    {
      id: "r3",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): ماذا تقول عند الوداع؟",
      questionDe: "Was sagt man zum Abschied?",
      questionAr: "ماذا تقول عند الوداع؟",
      options: ["Auf Wiedersehen!", "Guten Morgen!", "Entschuldigung!", "Bitte schön!"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «Guten Morgen» تحية صباحية عند اللقاء لا عند الوداع.", "لا — «Entschuldigung» اعتذارٌ لا وداع؛ والوداع «Auf Wiedersehen!».", "لا — «Bitte schön» تُقال عند التقديم أو ردّاً على الشكر، لا للوداع."],
      explanation: "Auf Wiedersehen = إلى اللقاء (تحية الوداع).",
      errorType: "vocabulary",
    },
  ];
