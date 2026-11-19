/**
 * a1-14 — المقدمة وأهداف التعلم (الجزء «intro»)
 * فُصل من a1-14.ts في الدفعة 93 (سقف الحجم). القيم منقولة حرفياً.
 */
import type { Lesson } from "@/types/lesson";

export const lernziele: NonNullable<Lesson["lernziele"]> = [
    {
      id: "z1",
      de: "Ich kann einfache Vorgaben in Perfekt-Sätze umformen.",
      ar: "أن أحوّل مطالب قصيرة إلى جمل Perfekt في التمرين.",
      evidence: {
        exerciseIds: ["wr-a1-14-1", "wr-a1-14-2", "e14", "e22"],
        taskIds: ["writing:a1-14:wr-a1-14-1", "writing:a1-14:wr-a1-14-2", "practice:a1-14:e14", "practice:a1-14:e22"],
        labelAr: "إتمام تحويلي الكتابة المحددين، والإجابة الصحيحة عن تحويليْن في بنك التدريب؛ هذه مهام تحويل مضبوطة لا قياسٌ لسرد حر.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann häufige Partizip-II-Formen in vorgegebenen Sätzen ergänzen.",
      ar: "أن أُكمل صيغ Partizip II شائعة في جمل معطاة.",
      evidence: {
        exerciseIds: ["e1", "e2", "e7", "e8", "e9"],
        taskIds: ["practice:a1-14:e1", "practice:a1-14:e2", "practice:a1-14:e7", "practice:a1-14:e8", "practice:a1-14:e9"],
        labelAr: "إكمال خمس صيغ في جمل: فعل ضعيف، قوي، منفصل، غير منفصل، وفعل منتهٍ بـ-ieren.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann in häufigen Beispielen das Perfekthilfsverb passend zum Verbgebrauch wählen.",
      ar: "أن أختار الفعل المساعد المناسب في أمثلة شائعة مع مراعاة معنى الفعل وسياقه.",
      evidence: {
        exerciseIds: ["e3", "e4", "e12", "e21", "e24", "mt-a1-14-1"],
        taskIds: ["practice:a1-14:e3", "practice:a1-14:e4", "practice:a1-14:e12", "practice:a1-14:e21", "practice:a1-14:e24", "mini-test:a1-14:mt-a1-14-1", "flow-mini-test:a1-14:mt-a1-14-1"],
        labelAr: "اختيار/تصحيح haben وsein في جمل انتقالية ونشاطية وأمثلة متقابلة، بما فيها فعل يتغير مساعده بحسب المعنى.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann wollen und sollen in einfachen Sätzen passend konjugieren, den Infinitiv ans Ende stellen und eine häufige höfliche Bitte erkennen.",
      ar: "أن أستعمل wollen وsollen في مطالب قصيرة، وأضع المصدر في آخر الجملة، وأتعرف على صيغة طلب مهذبة شائعة.",
      evidence: {
        exerciseIds: ["e15", "e16", "e17", "e18", "e19", "mt-a1-14-5"],
        taskIds: ["practice:a1-14:e15", "practice:a1-14:e16", "practice:a1-14:e17", "practice:a1-14:e18", "practice:a1-14:e19", "mini-test:a1-14:mt-a1-14-5", "flow-mini-test:a1-14:mt-a1-14-5"],
        labelAr: "إتمام تصريفات وجمل سياقية، واختيار عبارة طلب شائعة، وترتيب جملة ناقص مع مصدر.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann vorgegebene Perfektformen in einer kurzen E-Mail-Vorlage ergänzen.",
      ar: "أن أُكمل المساعدات وصيغ Partizip II المعطاة داخل قالب بريد قصير.",
      evidence: {
        exerciseIds: ["wr-a1-14-3"],
        taskIds: ["writing:a1-14:wr-a1-14-3"],
        labelAr: "إتمام جميع الفراغات في قالب البريد؛ لا يثبت هذا وحده القدرة على إنشاء بريد حر.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann gezielte Informationen aus einer kurzen E-Mail entnehmen.",
      ar: "أن أستخرج تفاصيل محددة من بريد إلكتروني قصير.",
      evidence: {
        exerciseIds: ["rq1", "rq2", "rq3", "rq6"],
        taskIds: ["reading:read-a1-14:rq1", "reading:read-a1-14:rq2", "reading:read-a1-14:rq3", "reading:read-a1-14:rq6"],
        labelAr: "الإجابة الصحيحة عن أسئلة وسيلة السفر والأنشطة وسبب الذهاب إلى المتحف وحالة أمين يوم الأحد.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann zentrale Angaben aus drei kurzen Hörtexten entnehmen.",
      ar: "أن أستخرج معلومات أساسية من ثلاثة نصوص استماع قصيرة.",
      evidence: {
        exerciseIds: ["lsq-a1-14-1", "lsq-a1-14-3", "lsq-a1-14-4", "lsq-a1-14-5", "lsq-a1-14-6", "lsq-a1-14-7", "lsq-a1-14-8", "lsq-a1-14-9"],
        taskIds: ["listening:ls-a1-14-1:lsq-a1-14-1", "listening:ls-a1-14-1:lsq-a1-14-3", "listening:ls-a1-14-2:lsq-a1-14-4", "listening:ls-a1-14-2:lsq-a1-14-5", "listening:ls-a1-14-2:lsq-a1-14-6", "listening:ls-a1-14-3:lsq-a1-14-7", "listening:ls-a1-14-3:lsq-a1-14-8", "listening:ls-a1-14-3:lsq-a1-14-9"],
        labelAr: "الإجابة الصحيحة عن أسئلة المشاهد الثلاثة قبل كشف النصوص؛ هذا دليل محدود على التفاصيل المستهدفة ولا يثبت إتقان الاستماع العام.",
        completion: "all-correct",
      },
    },
  ];

export const einfuehrung: NonNullable<Lesson["einfuehrung"]> = {
    motivatingQuestionAr:
      "سؤالٌ مفيد للتدرّب على الحديث عن عطلة الأسبوع: «Was hast du am Wochenende gemacht?» — ماذا فعلتَ في نهاية الأسبوع؟ يتيح لك هذا الدرس تكوين إجابات بسيطة بالماضي المركّب Perfekt، من دون افتراض أن هذا السؤال يظهر في كل لقاء أو امتحان.",
    motivatingQuestionDe: "Was hast du am Wochenende gemacht?",
    contextAr:
      "Perfekt صيغة ماضٍ مركّبة شائعة في كثير من المحادثات اليومية، لكنها ليست الصيغة الوحيدة؛ فقد يظهر Präteritum أيضاً في الحديث والكتابة، ويتغيّر الاستعمال بحسب الفعل والسياق والمنطقة. نتمرّن هنا على بناء Perfekt: فعل مساعد مصرّف وPartizip II. في الجملة الرئيسية الخبرية يأتي المساعد في المركز الثاني ويقع Partizip II عادةً في نهاية المجال الفعلي؛ أمّا في الجملة الفرعية فقد يأتي المساعد بعد Partizip II في النهاية: weil ich Deutsch gelernt habe.",
    contextDe: "Ich bin nach Berlin gefahren und habe viel gesehen.",
    connectionToPreviousAr: "يعيد الدرس استخدام مفردات وصيغ سبق أن ظهرت في أمثلة A1، مثل الأفعال المنفصلة وبعض الأفعال الناقصة. راجعها عند الحاجة؛ فمعرفة المفردة أو المضارع وحدهما لا تعني إتقان Perfekt. هنا نتدرّب على المساعد وPartizip II في سياقات محددة.",
    activateVocabulary: [
      { de: "gestern", ar: "أمس" },
      { de: "letztes Wochenende", ar: "عطلة الأسبوع الماضية" },
      { de: "gemacht", ar: "فعَل (Partizip II من machen)" },
      { de: "gefahren", ar: "سافر (Partizip II من fahren)" },
      { de: "gewesen", ar: "كان (Partizip II من sein)" },
    ],
  };

export const review: NonNullable<Lesson["review"]> = [
    {
      id: "r1",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-06 — الهوايات): أكمل الفعل الناقص في صيغة الحاضر وانتبه إلى موضع المصدر",
      template: "Ich ___ gut Deutsch sprechen. · ___ du schwimmen?",
      blanks: [
        { correct: "kann", options: ["kann", "kannst", "können", "konnte"] },
        { correct: "Kannst", options: ["Kannst", "Kann", "Können", "Kannt"] },
      ],
      hint: "الأفعال الناقصة بلا نهاية في ich، والمصدر في آخر الجملة.",
      explanation: "ich kann (بلا نهاية) · du kannst — من درس a1-06.",
      errorType: "conjugation",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-11 — التنقّل): أيّ ضمير نصبٍ صحيح؟",
      questionDe: "Der Bus kommt. Siehst du ___?",
      questionAr: "الحافلة قادمة. هل تراها؟",
      options: ["ihn", "er", "ihm", "es"],
      correctIndex: 0,
      optionExplanations: [undefined, "لا — «er» صيغة الرفع وهي للفاعل؛ والمطلوب مفعول به منصوب: «Siehst du ihn؟».", "لا — «ihm» صيغة الداتيف؛ والفعل «sehen» ينصب مفعوله فيلزم «ihn».", "لا — «es» للمحايد؛ و«der Bus» مذكر فيلزم الضمير المنصوب «ihn»."],
      explanation: "der Bus في حالة النصب يصير ihn — من درس a1-11.",
      errorType: "pronoun",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-12 — أدوات الربط): صحّح الخطأ في الجملة",
      wrongSentence: "Ich bleibe zu Hause, denn regnet es stark.",
      wrongWord: "denn regnet es",
      correctWord: "denn es regnet",
      options: ["denn es regnet", "denn regnet es", "denn es regnen", "denn regnete"],
      explanation: "denn تجلس في الموضع صفر ولا تُزيح شيئاً: الترتيب بعدها عاديّ (فاعل ثمّ فعل) — من درس a1-12.",
      errorType: "word-order",
    },
  ];
