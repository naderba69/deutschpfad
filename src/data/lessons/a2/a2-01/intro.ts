/**
 * a2-01 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a2-01.ts في المرحلة 4 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann ausgewählte Stammformen starker und gemischter Verben erkennen und den gezeigten Mustern zuordnen.",
      ar: "أن أميّز صور أفعال قوية ومختلطة محددة، وأربطها بالأنماط المعروضة دون تعميمها على كل فعل.",
      evidence: {
        exerciseIds: ["e11", "e12", "e13"],
        taskIds: ["practice:a2-01:e11", "practice:a2-01:e12", "practice:a2-01:e13"],
        labelAr: "إكمال Partizip II ومطابقة صور الأفعال المختارة بأنماطها المعروضة.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann in vorgegebenen Reisebeispielen Perfekt und Präteritum unterscheiden und eine zur beschriebenen Verwendung passende Zielform wählen.",
      ar: "أن أميّز في أمثلة سفر موجّهة بين Perfekt وPräteritum، وأختار الصيغة الملائمة للسياق المحدّد.",
      evidence: {
        exerciseIds: ["e14", "e15", "e23", "rq4"],
        taskIds: ["practice:a2-01:e14", "practice:a2-01:e15", "practice:a2-01:e23", "reading:read-a2-01:rq4"],
        labelAr: "اختيار الصيغة المحايدة المستهدفة لـsein والأفعال الناقصة، وتحويل مثال محدد، وفهم استعمال Präteritum في النص.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einfache Perfekt-Hauptsätze mit Verbklammer und einer neutralen Mittelfeld-Reihenfolge bilden.",
      ar: "أن أرتّب جملة خبرية بسيطة في Perfekt داخل القوسين، مع تطبيق تفضيلات محايدة محددة لترتيب المساحة الوسطى.",
      evidence: {
        exerciseIds: ["e4", "e16", "e17", "e18", "e19"],
        taskIds: ["practice:a2-01:e4", "flow-practice:a2-01:e4", "practice:a2-01:e16", "practice:a2-01:e17", "practice:a2-01:e18", "practice:a2-01:e19"],
        labelAr: "ترتيب جملة Perfekt، والتدرب على TeKaMoLo وترتيب الضمائر والمفعول والنفي في أمثلة محددة.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann grundlegende Buchungs- und Fahrkartenformulierungen verstehen und für eine konkrete Hotelsituation eine höfliche Beschwerde auswählen.",
      ar: "أن أفهم عبارات أساسية للحجز والتذاكر، وأختار صياغة شكوى واضحة ومهذبة في موقف فندقي محدد.",
      evidence: {
        exerciseIds: ["e21", "e22", "e25"],
        taskIds: ["practice:a2-01:e21", "practice:a2-01:e22", "practice:a2-01:e25"],
        labelAr: "تفسير عبارة تذكرة ذهاب فقط/ذهاب وعودة، واختيار صياغة شكوى وطلب حجز ملائمين للموقفين المعروضين.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann in einer angeleiteten Schreibaufgabe einen Satz über eine vergangene Reise ins Perfekt umformen.",
      ar: "أن أحوّل جملة موجّهة عن رحلة سابقة إلى Perfekt كتابةً.",
      evidence: {
        exerciseIds: ["w1"],
        taskIds: ["writing:a2-01:w1"],
        labelAr: "تحويل جملة موجّهة تضم فعل سفر وفعلًا آخر إلى Perfekt؛ لا يقيس ذلك كتابة قصة حرة مترابطة.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann zentrale Informationen aus einer Reiseerzählung entnehmen.",
      ar: "أن أستخرج معلومات أساسية من قصة رحلة.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq6"],
        taskIds: ["reading:read-a2-01:rq1", "reading:read-a2-01:rq2", "reading:read-a2-01:rq3", "reading:read-a2-01:rq6"],
        labelAr: "الإجابة الصحيحة عن أسئلة الفهم التي تحيل إلى أحداث الرحلة صراحةً.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann explizite Informationen aus einer vorgelesenen Reiseunterhaltung entnehmen, solange das Transkript nicht geöffnet wurde.",
      ar: "أن ألتقط معلومات صريحة من حوار سفر يُقرأ بصوت اصطناعي، ما دام نصه غير مكشوف.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3", "q4"],
        taskIds: ["listening:l1:q1", "listening:l2:q2", "listening:l2:q3", "listening:l1:q4"],
        labelAr: "الإجابة عن أسئلة الحوار بعد الاستماع إلى TTS مع إخفاء التفريغ؛ الإجابات بعد كشف النص لا تدخل الدليل.",
        completion: "all-correct",
      },
    },
  ];


export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "في A1-14 درستَ صيغة Perfekt. كيف تحكي عن رحلة ماضية؟ قارن «Ich fahre nach Berlin» بـ«Ich bin nach Berlin gefahren»، ثم لاحظ أن «Ich fuhr» صيغة ماضية أخرى تظهر في سياقات مختلفة.",
    motivatingQuestionDe: "Was hast du im Urlaub gemacht?",
    contextAr:
      "Perfekt (haben/sein + Partizip II) طريقة شائعة للحديث عن أحداث ماضية في سياقات كثيرة، لكنه ليس صيغة الماضي الوحيدة. يظهر Präteritum أيضاً في الحديث والكتابة، ومنه صيغ كثيرة الدوران مثل war وhatte وأفعال ناقصة؛ ويتأثر الاختيار بالسياق والسجل والمنطقة. يبني هذا الدرس على أساس A1-14 ويعرض أمثلة محددة لا قاعدة مطلقة.",
    contextDe: "Ich bin nach Berlin geflogen und habe viel gesehen.",
    connectionToPreviousAr:
      "في A1-14 درست أساس بناء Perfekt واختيار haben/sein في أمثلة محددة. نعود إليه هنا ونوسّع صور الأفعال القوية، ثم نقارن الاستعمالات الشائعة لـPerfekt وPräteritum. لا تُحوّل صيغة عربية واحدة آلياً إلى زمن ألماني واحد؛ اختر التركيب بحسب المعنى والسياق.",
    activateVocabulary: [
      { de: "der Urlaub", ar: "الإجازة" },
      { de: "die Reise", ar: "الرحلة" },
      { de: "fliegen", ar: "يطير" },
      { de: "fahren", ar: "يقود/يذهب" },
      { de: "das Hotel", ar: "الفندق" },
    ],
  };


export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-01 — التعارف والتحيات): اختر التصريف الصحيح:",
      questionDe: "Ich ___ aus Tunesien.",
      options: ["bin", "habe", "werde", "ist"],
      correctIndex: 0,
      explanation: "تذكر: Ich bin + بلد — sein مع ich = bin.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr:
        "مراجعة من A1 (درس a1-11 — التنقل في المدينة): اختر حرف الجر الصحيح:",
      questionDe: "Wir fahren von Tunis ___ Deutschland.",
      options: ["nach", "zu", "in", "aus"],
      correctIndex: 0,
      explanation: "في هذا المثال Deutschland اسم بلد بلا أداة مع معنى الوجهة، لذا نقول nach Deutschland. وتوجد أسماء بلدان تأخذ أداة وتأتي معها تراكيب أخرى.",
      errorType: "preposition",
    },
    {
      id: "r3",
      type: "word-ordering",
      instructionAr: "مراجعة من A1 (درس a1-03 — الطعام والشراب): رتّب الجملة:",
      tokens: ["Ich", "habe", "Hunger", "."],
      correctSentence: "Ich habe Hunger.",
      explanation: "عندي جوع = أنا جائع (درس الطعام).",
      errorType: "word-order",
    },
  ];
