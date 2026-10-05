import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-06: أوقات الفراغ والهوايات
 * — الهوايات + gern/mögen + صيغة الأمر (Imperativ) du/ihr/Sie
 */
export const lessonA106: Lesson = {
  id: "a1-06",
  unitId: "a1-06",
  level: "A1",
  order: 1,
  titleDe: "Freizeit und Hobbys",
  titleAr: "أوقات الفراغ والهوايات",
  summary:
    "الهوايات والتعبير عن تفضيل نشاط بـ gern، وصيغ الأمر الأساسية du/ihr/Sie، وتغيّر الصائت في أفعال شائعة، واستخدام können وmöchte(n)، وتمهيد لفهم war وhatte في جمل عن الماضي.",

  lernziele: [
    {
      id: "z1",
      de: "Ich kann Freizeitaktivitäten benennen und einen kurzen Satz zu einem Hobby schreiben.",
      ar: "أن أسمّي أنشطة وقت الفراغ وأكتب جملة قصيرة عن هواية أختارها.",
      evidence: {
        exerciseIds: ["e3", "w1"],
        taskIds: ["practice:a1-06:e3", "flow-practice:a1-06:e3", "writing:a1-06:w1"],
        labelAr: "صِلْ الأنشطة بمعانيها في e3، ثم اكتب جملة من القائمة المحددة في w1.",
        completion: "all-correct",
      },
    },
    {
      id: "z2",
      de: "Ich kann Vorlieben mit gern und mögen ausdrücken und eine einfache Frage mit Lust verstehen.",
      ar: "أن أعبّر عن نشاط أحبّه بـgern وشيء أفضّله بـmögen، وأن أفهم سؤالاً بسيطاً عن الرغبة.",
      evidence: {
        exerciseIds: ["e1", "e4", "e8", "e19", "e20", "w1"],
        taskIds: ["practice:a1-06:e1", "flow-practice:a1-06:e1", "practice:a1-06:e4", "flow-practice:a1-06:e4", "practice:a1-06:e8", "flow-practice:a1-06:e8", "practice:a1-06:e19", "flow-practice:a1-06:e19", "practice:a1-06:e20", "flow-practice:a1-06:e20", "writing:a1-06:w1"],
        labelAr: "أكمل gern في e1 ورتّب جملته في e4، وافهم سؤال Lust في e8، ثم أجب عن mögen وLust في e19–e20 واكتب جملة في w1.",
        completion: "all-correct",
      },
    },
    {
      id: "z3",
      de: "Ich kann einfache Aufforderungen mit du, ihr und Sie bilden und häufige trennbare Imperative verwenden.",
      ar: "أن أصوغ أمراً بسيطاً بصيغ du وihr وSie، وأن أميّز بادئة الفعل المنفصل في الأمر.",
      evidence: {
        exerciseIds: ["w2", "e6"],
        taskIds: ["writing:a1-06:w2", "practice:a1-06:e6", "flow-practice:a1-06:e6"],
        labelAr: "أكمل صيغ الأمر الثلاث في w2، ثم اختر الأوامر المنفصلة المناسبة في e6.",
        completion: "all-correct",
      },
    },
    {
      id: "z4",
      de: "Ich kann in einem modellierten Einladungsdialog passende Reaktionen, eine höfliche Absage und einen Gegenvorschlag auswählen.",
      ar: "أن أختار في حوار نموذجي حول دعوة ردّاً مناسباً، واعتذاراً مهذباً مع اقتراح بديل.",
      evidence: {
        exerciseIds: ["w4"],
        taskIds: ["writing:a1-06:w4"],
        labelAr: "أكمل الحوار في w4 بقبول الدعوة، ثم اعتذار مهذب واقتراح أسبوع بديل وقبوله.",
        completion: "all-correct",
      },
    },
    {
      id: "z5",
      de: "Ich kann den Stammvokalwechsel häufiger Verben in einfachen Sätzen verwenden.",
      ar: "أن أستخدم تغيّر الصائت في أفعال شائعة مع du وer/sie/es، مثل essen–isst وlesen–liest وfahren–fährt.",
      evidence: {
        exerciseIds: ["e11"],
        taskIds: ["practice:a1-06:e11", "flow-practice:a1-06:e11"],
        labelAr: "أكمل صيغ الأفعال الثلاثة في e11 إجابة صحيحة.",
        completion: "all-correct",
      },
    },
    {
      id: "z6",
      de: "Ich kann können und möchten in einfachen Sätzen verwenden.",
      ar: "أن أستخدم können وmöchte(n) في جمل بسيطة، مع المصدر المناسب بعد الفعل الناقص.",
      evidence: {
        exerciseIds: ["e12", "e16"],
        taskIds: ["practice:a1-06:e12", "flow-practice:a1-06:e12", "practice:a1-06:e16", "flow-practice:a1-06:e16"],
        labelAr: "أكمل تصريفات können/möchten في e12، ورتّب جملة الفعل الناقص في e16.",
        completion: "all-correct",
      },
    },
    {
      id: "z7",
      de: "Ich kann war und hatte in kurzen Sätzen über Vergangenes verwenden.",
      ar: "أن أستخدم war وhatte في جمل قصيرة عن حالة أو تجربة سابقة.",
      evidence: {
        exerciseIds: ["e13", "e18", "w5"],
        taskIds: ["practice:a1-06:e13", "flow-practice:a1-06:e13", "practice:a1-06:e18", "flow-practice:a1-06:e18", "writing:a1-06:w5"],
        labelAr: "أكمل تصريف الماضي في e13، وحوّل الجملة في e18، ثم أكمل الرسالة القصيرة في w5.",
        completion: "all-correct",
      },
    },
    {
      id: "z8",
      de: "Ich kann wichtige Informationen aus kurzen Hördialogen über Freizeit verstehen.",
      ar: "أن أفهم معلومات أساسية عن الهوايات والدعوات في حوارين قصيرين.",
      evidence: {
        exerciseIds: ["q1", "q2", "q3"],
        taskIds: ["listening:l1:q1", "listening:l1:q2", "listening:l2:q3"],
        labelAr: "أجب إجابة صحيحة عن أسئلة الاستماع q1–q3 بعد تشغيل الحوارين.",
        completion: "all-correct",
      },
    },
    {
      id: "z9",
      de: "Ich kann einem kurzen Dialog über Freizeit und Wochenende wichtige Informationen entnehmen.",
      ar: "أن أستخرج المعلومات الأساسية من حوار قصير عن الهوايات ونهاية الأسبوع.",
      evidence: {
        exerciseIds: ["r1", "r2", "r3", "r5"],
        taskIds: ["reading:read-a1-06:r1", "reading:read-a1-06:r2", "reading:read-a1-06:r3", "reading:read-a1-06:r5"],
        labelAr: "أجب عن أسئلة فهم المعلومات r1–r3 وr5 بعد قراءة الحوار.",
        completion: "all-correct",
      },
    },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "قارن بين: Ich spiele gern Fußball. (أحب لعب كرة القدم) وIch mag Fußball. (أحب كرة القدم). ما الذي تغيّر في بنية الجملة؟",
    motivatingQuestionDe: "Was machst du in deiner Freizeit?",
    contextAr:
      "نتحدث اليوم عن الهوايات ونهاية الأسبوع: نصف نشاطاً نحبه، وندعو صديقاً إلى نشاط، ونتدرّب على أوامر وطلبات بسيطة تناسب المخاطَب والسياق.",
    contextDe: "Hast du Lust auf ein Spiel?",
    connectionToPreviousAr: "في الدرس السابق تعلّمت الروتين اليومي وقراءة الوقت؛ هنا تنتقل إلى هوايات وقت الفراغ والدعوات، وتستخدم بعض تلك الأنماط في حوار جديد.",
    activateVocabulary: [
      { de: "die Freizeit", ar: "وقت الفراغ" },
      { de: "das Hobby", ar: "الهواية" },
      { de: "spielen", ar: "يلعب" },
      { de: "gern", ar: "بسرور / يحب أن" },
      { de: "der Sport", ar: "الرياضة" },
    ],
  },

  /* مراجعة تراكمية: مفاهيم مختارة من الدروس a1-01 حتى a1-05 */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-01 — التعارف والتحيات): ماذا تقول عندما يُسأل عن بلدك؟",
      questionDe: "Woher kommst du?",
      questionAr: "من أين أنت؟",
      options: ["Ich komme aus Tunesien.", "Ich heiße Tunesien.", "Ich bin Tunesien.", "Ich wohne Tunesien."],
      correctIndex: 0,
      explanation: "Woher kommst du? → Ich komme aus + البلد (من درس a1-01).",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-02 — العائلة والأصدقاء): اختر أداة الملكية الصحيحة:",
      template: "Das ist ___ Vater. (أبي — مذكر) · Das ist ___ Mutter. (أمي — مؤنث)",
      blanks: [
        { correct: "mein", options: ["mein", "meine", "meinen", "meiner"] },
        { correct: "meine", options: ["meine", "mein", "meinen", "meiner"] },
      ],
      hint: "mein قبل المذكر، meine قبل المؤنث.",
      explanation: "mein Vater (مذكر) / meine Mutter (مؤنث) — من درس a1-02.",
      errorType: "article",
    },
    {
      id: "r3",
      type: "error-correction",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-03 — الطعام والشراب، النصب): اختر التصحيح المناسب للجملة.",
      wrongSentence: "Ich esse ein Apfel.",
      wrongWord: "ein Apfel",
      correctWord: "einen Apfel",
      options: ["einen Apfel", "ein Apfel", "einem Apfel", "eine Apfel"],
      explanation: "Akkusativ للمذكر: ein → einen. Ich esse einen Apfel — من درس a1-03.",
      errorType: "case",
    },
    {
      id: "r4",
      type: "multiple-choice",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-04 — المكان وحالة Dativ): اختر العبارة التي تجيب عن سؤال المكان.",
      questionDe: "Wo liegt das Buch?",
      questionAr: "أين يقع الكتاب؟",
      options: ["Auf dem Tisch.", "Auf den Tisch.", "In den Tisch.", "Auf der Tisch."],
      correctIndex: 0,
      explanation: "السؤال Wo؟ عن موقع ثابت؛ نقول auf dem Tisch مع Dativ، كما في درس السكن a1-04.",
      errorType: "case",
    },
    {
      id: "r5",
      type: "fill-blank",
      instructionAr: "مراجعة تراكمية من A1 (درس a1-05 — الفعل المنفصل): أكمل جزأي aufstehen.",
      template: "Ich ___ um sieben Uhr ___. (aufstehen)",
      blanks: [
        { correct: "stehe", options: ["stehe", "steht", "stehen"] },
        { correct: "auf", options: ["auf", "an", "aus"] },
      ],
      explanation: "في الجملة الخبرية يُصرّف stehen ويأتي الجزء المنفصل auf في آخر الجملة.",
      errorType: "word-order",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "التعبير عن التفضيل: gern وmögen وLust haben",
      titleDe: "Vorlieben: gern, mögen, Lust haben",
      explanationAr:
        "للتعبير عن الهوايات والرغبات توجد تراكيب شائعة، ولا تقابل كل صيغة منها كلمة عربية واحدة في جميع السياقات.\n\n**gern / gerne:** ظرف يفيد الاستمتاع أو التفضيل، ويأتي في الجملة الخبرية البسيطة غالباً قرب الفعل: «Ich spiele gern Fußball.» ويمكن أن يتقدّم عنصر آخر مع بقاء الفعل المصرف في المركز الثاني: «Am Wochenende spiele ich gern Fußball.» لذلك لا نحفظ أن gern يجب أن يلي الفعل دائماً؛ نبدأ بالترتيب المحايد ثم نتعلّم مواقع العناصر الأخرى. صيغتا **gern** و**gerne** صحيحتان؛ ويذكر Duden أن **gerne** بارزة خصوصاً في الاستعمال الجنوبي الألماني، من دون أن تكون هناك قسمة صارمة بين المناطق.\n\nللنفي نقول **nicht gern**: «Ich lese nicht gern.» وفي المقارنة نستخدم **gern – lieber – am liebsten**: أحبّ – أفضّل – أحبّ أكثر شيء. احفظ هذه الصور الشائعة كما هي.\n\n**mögen:** في «Ich mag Musik» يتبع الفعلَ اسمٌ في Akkusativ. ويمكن أن يأتي mögen مع مصدر في بعض التراكيب، لكن عند ذكر نشاط محبّب يكون «Ich spiele gern Fußball» غالباً التعبير المحايد والأسهل لهذا المستوى؛ فلا نعدّ كل استعمال لـmögen مع مصدر خطأً.\n\n**Lust haben:** مع اسم نقول **Lust auf + Akkusativ**: «Hast du Lust auf einen Kaffee?» ومع فعل نقول **Lust haben, etwas zu tun**: «Ich habe Lust, ins Kino zu gehen.» هذان تركيبان مختلفان، فانتبه إلى وجود zu في الثاني.",
      whyAr:
        "يساعدك هذا التفريق على وصف نشاط تحب ممارسته، وشيء تفضّله، ورغبة في اقتراح أو نشاط. هذه المعاني متقاربة وتتداخل أحياناً؛ المطلوب هنا تعلّم البنى الشائعة وأمثلتها، لا افتراض ترجمة آلية واحدة لكل كلمة.",
      table: {
        title: "طرق التعبير عن التفضيل",
        columns: ["الصيغة", "المعنى", "مثال"],
        rows: [
          { label: "الفعل + gern", cells: ["يحب أن (يفعل)", "Ich spiele gern Tennis."] },
          { label: "mögen + اسم", cells: ["يحب (شيئاً)", "Ich mag Musik."] },
          { label: "Lust haben auf", cells: ["لديه رغبة في", "Hast du Lust auf Kaffee?"] },
          { label: "nicht gern", cells: ["لا يحب أن", "Ich sehe nicht gern fern."] },
        ],
      },
      examples: [
        {"de": "Ich spiele gern Fußball.", "ar": "أحبّ لعب كرة القدم. (موضع محايد شائع لـgern)"},
        {"de": "Meine Schwester mag klassische Musik.", "ar": "أختي تحبّ الموسيقى الكلاسيكية. (mögen + اسم منصوب)"},
        {"de": "Ich lese nicht gern, aber ich höre gern Podcasts.", "ar": "لا أحبّ القراءة، لكنّي أحبّ سماع البودكاست."},
        {"de": "Hast du Lust auf einen Kaffee?", "ar": "ألديك رغبة في قهوة؟ (مع الاسم يأتي auf في هذا التركيب)"},
        {"de": "Ich trinke gern Tee. Lieber trinke ich Kaffee. Am liebsten trinke ich Wasser.", "ar": "أحبّ شرب الشاي. وأفضّل شرب القهوة. وأكثر ما أحبّه شرب الماء."},
        {"de": "Magst du Katzen? — Ja, sehr!", "ar": "أتحبّ القطط؟ — نعم كثيراً!"},
        {"de": "Ich habe Lust, ins Kino zu gehen.", "ar": "لديّ رغبة في الذهاب إلى السينما. (مع فعل ⟵ zu + مصدر)"},
        {"de": "Am Wochenende koche ich am liebsten.", "ar": "في نهاية الأسبوع أحبّ الطبخ أكثر شيء."},
      ],
      comparisonWithArabic:
        "يمكن أن تعبّر العربية عن التفضيل بصيغ متعددة مثل «أحب الموسيقى» و«أحب أن ألعب». في الألمانية نلاحظ البناء: **Ich mag Musik** مع اسم، و**Ich spiele gern Fußball** مع نشاط، و**Ich habe Lust auf einen Kaffee** مع اسم بعد auf. ليست هذه مقابلات حصرية: قد يأتي mögen مع مصدر، كما أن lieben قد يعبّر عن حب نشاط بصياغة مناسبة مثل «Ich liebe es, zu schwimmen». اختر في هذا الدرس gern بوصفه نمطاً يومياً شائعاً للأنشطة، لا بوصفه الصيغة الوحيدة الصحيحة.",
      eselsbruecke:
        "**للنشاط:** فعل مصرّف + gern (نمط محايد شائع). **للشيء:** mögen + اسم. **للرغبة:** Lust auf + اسم، أو Lust haben, etwas zu tun. وتذكّر أن موضع gern قد يتغير بحسب ترتيب الجملة.",
      commonMistakes: [
        {"wrong": "Ich gern spiele Fußball.", "right": "Ich spiele gern Fußball.", "classification": "error", "whyAr": "في الجملة الخبرية البسيطة يجب أن يبقى الفعل المصرف في المركز الثاني؛ وضع gern قبله هنا يخلّ بهذا الترتيب."},
        {"wrong": "Ich mag Fußball spielen.", "right": "Ich spiele gern Fußball.", "classification": "contextual-alternative", "whyAr": "المصدر مع mögen ممكن في بعض الاستعمالات، لكنه أقل حياداً عند ذكر هواية في هذا المثال. نفضّل نمط الفعل + gern في هذا التدريب؛ الصيغة الأولى ليست خطأً نحوياً مطلقاً."},
        {"wrong": "Ich habe Lust zu Kaffee.", "right": "Ich habe Lust auf einen Kaffee.", "classification": "error", "whyAr": "مع الاسم يأتي التعبير الشائع Lust haben auf + Akkusativ؛ أما مع الفعل فنقول Lust haben, etwas zu tun."},
        {"wrong": "Ich liebe es, zu schwimmen.", "right": "Ich schwimme sehr gern.", "classification": "contextual-alternative", "whyAr": "الجملتان صحيحتان: الأولى تعبر عن ميل أقوى، والثانية صيغة محايدة شائعة؛ لا نعرض استعمال lieben مع نشاط على أنه خطأ."},
      ],
      relatedRuleComparison: {
        "title": "gern · mögen · möchte · lieben — تراكيب مختلفة للميل والرغبة",
        "content": "**gern، mögen، möchte، lieben:** gern شائع مع نشاط («Ich koche gern»)، وmögen كثيراً ما يأتي مع اسم («Ich mag Pizza») لكنه قد يظهر أيضاً مع المصدر في سياقات محددة. **möchte** صيغة من Konjunktiv II للفعل mögen وتُستخدم كثيراً للتعبير عن رغبة أو طلب مهذب («Ich möchte einen Kaffee»). أما **lieben** فيعبّر غالباً عن تعلق أو ميل أقوى، ويمكن استعماله مع أشياء وأنشطة بصياغة سليمة. الحدود دلالية وسياقية وليست قائمة درجات ثابتة."
      },
    },
    {
      id: "t2",
      titleAr: "صيغة الأمر (Imperativ): du / ihr / Sie",
      titleDe: "Der Imperativ: Komm! Kommt! Kommen Sie!",
      explanationAr:
        "نركّز هنا على ثلاث صيغ شائعة لتوجيه الكلام: **du** لمخاطَب مألوف واحد، و**ihr** لمجموعة مألوفة، و**Sie** للمخاطَب الرسمي مفرداً أو جمعاً. توجد أيضاً صيغة اقتراح مع **wir** مثل «Gehen wir!»؛ ليست هدف هذا التدريب.\n\n**du:** تأتي صيغة الأمر غالباً بلا الضمير، مثل «Komm!» و«Geh!». وقد تظهر نهاية **-e** في صيغ مثل «Komme!» و«Gehe!»؛ وتلائم بعض الأفعال المنتهية بأصوات تجعل النطق أسهل، مثل «Warte!» و«Öffne!». لا تُنشئ الأمر آلياً بحذف -st من كل فعل، لأن الأفعال الشاذة قد تغيّر الصائت.\n\n**ihr:** صيغة الأمر تطابق صيغة المخاطب الجمع في المضارع، مع حذف ihr: «ihr kommt → Kommt!»\n\n**Sie:** المصدر + الضمير، والضمير لازم: «Kommen Sie bitte!»\n\nيُحذف du وihr عادةً، لكن يمكن ذكر أحدهما بعد الفعل للتوكيد: «Komm du jetzt!» و«Kommt ihr bitte herein!»؛ أما Sie فيبقى لازماً. في أفعال e→i/ie يبقى التغيّر في الأمر المفرد: «Iss! Lies! Nimm!»، بينما لا نستخدم الإمالة a→ä في هذه الصيغ: «Fahr! Schlaf!».\n\nوفي الفعل المنفصل تنتقل البادئة إلى آخر الجملة: «Steh auf!» و«Fang einfach an!». علامة التعجّب شائعة مع الأمر، لكن اختيارها أو استخدام النقطة يرتبط بنبرة النص وسياقه.",
      whyAr:
        "تساعدك الصيغ الثلاث على اختيار مخاطبة مناسبة في الحياة اليومية وفي التعليمات. وتظهر صيغة الأمر أيضاً على اللافتات وفي الطلبات، لكن الأمر المباشر ليس فظاً تلقائياً: النبرة والعلاقة ووجود كلمات مثل bitte وmal تؤثر في الأسلوب.",
      table: {
        title: "تصريف الأمر لفعلين",
        columns: ["الضمير", "kommen", "aufstehen (منفصل)"],
        rows: [
          { label: "du", cells: ["Komm!", "Steh auf!"] },
          { label: "ihr", cells: ["Kommt!", "Steht auf!"] },
          { label: "Sie (حضرتك)", cells: ["Kommen Sie!", "Stehen Sie auf!"] },
        ],
      },
      examples: [
        {"de": "Komm bitte um acht Uhr!", "ar": "تعالَ في الثامنة من فضلك. (صيغة أمر du الشائعة من kommen)"},
        {"de": "Kommt morgen alle zu mir!", "ar": "تعالوا جميعاً غداً عندي. (ihr: التصريف نفسه بلا ضمير)"},
        {"de": "Kommen Sie bitte herein!", "ar": "تفضّل بالدخول. (Sie: الفعل ثمّ الضمير)"},
        {"de": "Lies den Text laut!", "ar": "اقرأ النصّ بصوتٍ عالٍ. (lesen ⟵ Lies، التغيّر e⟵ie باقٍ)"},
        {"de": "Fahr langsam, bitte!", "ar": "سُق ببطء من فضلك. (fahren ⟵ Fahr، الإمالة تسقط)"},
        {"de": "Steh bitte auf, der Bus kommt!", "ar": "انهض من فضلك، الحافلة قادمة. (البادئة في الآخر)"},
        {"de": "Sei bitte ruhig!", "ar": "كن هادئاً من فضلك. (sein شاذّ تماماً)"},
        {"de": "Warte mal! Ich komme sofort.", "ar": "انتظر قليلاً! سآتي حالاً. (mal تلطّف الأمر)"},
      ],
      comparisonWithArabic:
        "في العربية الفصحى تتغيّر صيغة الأمر بحسب العدد والجنس، مثل «اكتبْ/اكتبي/اكتبوا». في الألمانية لا تتغير صيغتا du وihr بحسب جنس المخاطَب، بينما توجد صيغة رسمية بـSie. وتُفهم درجة اللطف من السياق والنبرة وكلمات مثل bitte؛ لا يلزم أن يكون كل أمر مباشراً فظاً.",
      eselsbruecke:
        "**du:** صيغة أمر غالباً بلا ضمير، مع إمكان توكيده بعد الفعل. **ihr:** صيغة الجمع من المضارع بلا الضمير. **Sie:** المصدر ومعه Sie. وتدرّب على الأزواج: «Iss! / Lies!» و«Fahr!».",
      commonMistakes: [
        {"wrong": "Komm du bitte!", "right": "Komm bitte!", "classification": "contextual-alternative", "whyAr": "الصيغة المحايدة غالباً تحذف du، لكن ذكره بعد الأمر ممكن للتوكيد. لذلك لا نعرضه كخطأ نحوي؛ اختر الصيغة الأقصر ما لم تكن تريد التشديد."},
        {"wrong": "Kommen bitte!", "right": "Kommen Sie bitte!", "classification": "error", "whyAr": "إذا كنت توجّه أمراً رسمياً مباشرةً إلى شخص، فصيغة Sie تحتاج الضمير: «Kommen Sie bitte!». قد تُستخدم صيغ المصدر في بعض اللافتات، لكنها ليست الصيغة الشخصية المستهدفة هنا."},
        {"wrong": "Fähr langsam!", "right": "Fahr langsam!", "classification": "error", "whyAr": "في أمر du من fahren نقول Fahr(e)! لا Fähr!؛ الإمالة الظاهرة في fährst/fährt لا تبقى هنا."},
        {"wrong": "Steht bitte auf! (موجّه إلى شخص واحد بصيغة du)", "right": "Steh bitte auf!", "classification": "error", "whyAr": "Steht صيغة الجمع المألوف ihr؛ عند توجيه الكلام إلى شخص واحد بصيغة du استخدم Steh(e)!."},
      ],
      relatedRuleComparison: {
        "title": "du · ihr · Sie — نظام المخاطبة ومتى تستعمل أيّاً منها",
        "content": "تُستخدم **du** في مخاطبة شخص مألوف واحد، و**ihr** لمجموعة مألوفة، و**Sie** في المخاطبة الرسمية. تتبع أعراف العمل والمنطقة والسياق؛ في موقف رسمي أو مع شخص لا تعرفه، تكون Sie غالباً بداية مهذبة، ثم اتبع الطريقة التي يقترحها الطرف الآخر أو يوضحها المكان. فعل **duzen** يعني مخاطبة شخص بـdu، و**siezen** بـSie. ويمكن استخدام «Gehen wir!» لاقتراح أن نقوم بشيء معاً."
      },
    },
    {
      id: "t3",
      titleAr: "تغيّر الصائت في بعض الأفعال الشائعة",
      titleDe: "Stammvokalwechsel: essen – isst, lesen – liest, fahren – fährst",
      explanationAr:
        "تُظهر بعض الأفعال الشائعة تغيّراً في صائت الجذر مع **du** و**er/sie/es** في المضارع. نعرض ثلاثة أنماط مألوفة: **e→i** مثل «essen – isst»، و**e→ie** مثل «lesen – liest»، و**a→ä** مثل «fahren – fährst».\n\nهناك أفعال أخرى تتبع هذه الأنماط، مثل sprechen – sprichst، geben – gibst، schlafen – schläfst. لكن التغيير لا يحدث في كل فعل غير منتظم، ولا تكفي قاعدة طول الصائت للتنبؤ بكل صورة؛ فـnehmen مثلاً يصبح «du nimmst». تعلّم الفعل مع صيغته المستعملة في الجملة.\n\nفي الأفعال الواردة هنا تكون الصيغة المتغيرة عادةً مع du وer/sie/es، بينما نقول «ich esse / wir essen» و«ich lese / wir lesen» و«ich fahre / wir fahren». هذا وصف لهذه المجموعة من الأفعال، لا قاعدة شاملة لكل الأفعال الألمانية غير المنتظمة.\n\nبعد sibilant في بعض الأفعال لا نضاعف s في صيغة du: «du isst»، «du liest»، «du heißt». لذلك تتطابق du وer في هذه الأمثلة، لكنهما لا تتطابقان في كل الأفعال؛ قارن «du sprichst» و«er spricht».",
      whyAr:
        "هذه صيغ كثيرة الظهور في موضوع الهوايات والأنشطة اليومية. والهدف أن تميّزها وتستخدمها في أمثلة مألوفة، مع حفظ الصيغة لكل فعل بدلاً من تعميم نمط واحد على جميع الأفعال.",
      table: {
        title: "تغيّر الصوت في أشهر الأفعال اليومية",
        columns: ["الفعل", "ich", "du", "er/sie/es", "التغيير"],
        rows: [
          { label: "essen (يأكل)", cells: ["esse", "isst", "isst", "e → i"] },
          { label: "lesen (يقرأ)", cells: ["lese", "liest", "liest", "e → ie"] },
          { label: "sprechen (يتكلم)", cells: ["spreche", "sprichst", "spricht", "e → i"] },
          { label: "treffen (يقابل)", cells: ["treffe", "triffst", "trifft", "e → i"] },
          { label: "fahren (يقود/يركب)", cells: ["fahre", "fährst", "fährt", "a → ä"] },
          { label: "schlafen (ينام)", cells: ["schlafe", "schläfst", "schläft", "a → ä"] },
        ],
      },
      examples: [
        {"de": "Isst du gern Couscous? — Ja, sehr gern!", "ar": "أتحبّ أكل الكسكسي؟ — نعم كثيراً! (essen ⟵ isst)"},
        {"de": "Er liest jeden Abend eine Stunde.", "ar": "يقرأ ساعةً كلّ مساء. (lesen ⟵ liest، e ⟵ ie)"},
        {"de": "Du sprichst schon sehr gut Deutsch!", "ar": "أنت تتكلّم الألمانية جيّداً جدّاً! (sprechen ⟵ sprichst)"},
        {"de": "Sie fährt jeden Tag mit dem Fahrrad zur Arbeit.", "ar": "تذهب إلى العمل بالدرّاجة كلّ يوم. (fahren ⟵ fährt)"},
        {"de": "Nimmst du Zucker in den Kaffee?", "ar": "أتضع سكّراً في القهوة؟ (nehmen ⟵ nimmst — تغيّر بنيويّ)"},
        {"de": "Ich esse viel, aber mein Bruder isst mehr.", "ar": "آكل كثيراً، لكنّ أخي يأكل أكثر. (ich بلا تغيّر، er بتغيّر)"},
        {"de": "Wir sehen uns morgen. — Siehst du das auch so?", "ar": "نتقابل غداً. — أتراه هكذا أيضاً؟ (wir sehen مقابل du siehst)"},
        {"de": "Schläfst du am Wochenende lange?", "ar": "أتنام طويلاً في نهاية الأسبوع؟ (schlafen ⟵ schläfst)"},
      ],
      comparisonWithArabic:
        "في العربية يتغيّر شكل الكلمة بحسب الوزن والتصريف؛ وفي الألمانية تتبدل صوائت بعض جذور الأفعال أيضاً. لكن لا توجد مطابقة مباشرة بين النظامين، كما أن نمط الفعل الألماني لا يمكن استنتاجه دائماً من المصدر. لذلك تعلّم التصريف الألماني مع كل فعل شائع.",
      eselsbruecke:
        "في هذه المجموعة راقب صيغتي du وer/sie/es، لكن تحقّق من كل فعل: **essen–isst، lesen–liest، fahren–fährt**. لا تعمم التغيير على ich وwir وihr.",
      commonMistakes: [
        {"wrong": "du esst", "right": "du isst", "classification": "error", "whyAr": "مع du يتغيّر الفعل essen إلى isst؛ أما esst فهي صيغة ihr."},
        {"wrong": "er fahrt", "right": "er fährt", "classification": "error", "whyAr": "في صيغة er/sie/es من fahren نكتب الإمالة: fährt. أما wir fahren فتحتفظ بالصائت الأصلي."},
        {"wrong": "wir issen", "right": "wir essen", "classification": "error", "whyAr": "لا نعمّم تغيّر e→i على wir؛ الصيغة هي wir essen."},
        {"wrong": "du nehmst", "right": "du nimmst", "classification": "error", "whyAr": "تصريف nehmen شاذ في هذه الصيغة: du nimmst. احفظه مع er nimmt وNimm!."},
      ],
      relatedRuleComparison: {
        "title": "الفعل الضعيف والفعل القوي — تمهيد للمقارنة",
        "content": "التمييز بين الأفعال الضعيفة والقوية مفيد لاحقاً: الضعيفة غالباً تبني Präteritum بـ-t(e) وPartizip II بـ-t، بينما تتغير صيغة كثير من الأفعال القوية في الماضي وPartizip II، وقد يتغير صائت بعضها في المضارع أيضاً. توجد أفعال مختلطة واستثناءات، وليس كل فعل قوي يغيّر الصائت في المضارع. في هذا المستوى احفظ أفعالاً شائعة مع صيغها، مثل «essen – isst – aß – gegessen» و«lesen – liest – las – gelesen»."
      },
    },
    {
      id: "t4",
      titleAr: "الأفعال الناقصة الأولى: können (يستطيع) وmöchte (يودّ)",
      titleDe: "Die Modalverben können und mögen: können, möchte(n)",
      explanationAr:
        "تعبّر الأفعال الناقصة عن معانٍ مثل القدرة والرغبة والضرورة والإذن أو النصيحة، ويتحدد المقصود بالسياق. نركز هنا على **können** وعلى صيغة **möchte** من الفعل mögen.\n\nفي الجملة الخبرية البسيطة يأتي الفعل الناقص مصرّفاً في المركز الثاني، ويأتي الفعل الرئيسي في صورة مصدر مجرد في آخر الجملة: «Ich kann sehr gut schwimmen.» و«Wir möchten am Samstag Fußball spielen.» لا نضع **zu** بين الفعل الناقص والمصدر في هذا التركيب.\n\nتصريف können غير منتظم: ich kann · du kannst · er/sie/es kann · wir können · ihr könnt · sie/Sie können. أما **möchte** فهي صيغة Konjunktiv II من mögen، وتُستخدم كثيراً للتعبير عن رغبة أو طلب مهذب: ich möchte · du möchtest · er/sie/es möchte · wir möchten · ihr möchtet · sie/Sie möchten. مع اسم نقول «Ich möchte einen Kaffee»؛ ومع فعل نقول «Ich möchte schwimmen».\n\nتكون **möchte** غالباً ألطف من **will** في الطلبات، لكن **will** ليست خطأً نحوياً ولا تكون فظةً في كل سياق؛ فهي تعبّر بوضوح أكبر عن الإرادة أو النية، وتؤثر النبرة والمقام في وقعها. ويمكن حذف المصدر إذا كان مفهوماً من السياق، مثل «Ich möchte einen Kaffee» أو «Kannst du Deutsch?»؛ غالباً ما يُفهم trinken أو sprechen.",
      whyAr:
        "تمكّنك هذه التراكيب من الانتقال من ذكر الفعل إلى وصف القدرة عليه أو الرغبة فيه. ابدأ بجمل قصيرة ومألوفة، ولاحظ أن الفعل الناقص يتغير مع الضمير بينما يبقى المصدر في نهاية الجملة الخبرية البسيطة.",
      table: {
        title: "تصريف können وmöchten (الجزء الأول)",
        columns: ["الضمير", "können", "möchten", "مثال"],
        rows: [
          { label: "ich", cells: ["kann", "möchte", "Ich kann schwimmen."] },
          { label: "du", cells: ["kannst", "möchtest", "Kannst du Tennis spielen?"] },
          { label: "er/sie/es", cells: ["kann", "möchte", "Er möchte Fußball spielen."] },
          { label: "wir", cells: ["können", "möchten", "Wir können heute kommen."] },
          { label: "ihr", cells: ["könnt", "möchtet", "Ihr könnt mitkommen."] },
          { label: "sie/Sie", cells: ["können", "möchten", "Können Sie mir helfen?"] },
        ],
      },
      examples: [
        {"de": "Ich kann sehr gut schwimmen.", "ar": "أستطيع السباحة جيّداً جدّاً. (المصدر في الآخر بلا zu)"},
        {"de": "Kannst du morgen um acht kommen?", "ar": "أتستطيع المجيء غداً في الثامنة؟"},
        {"de": "Ich möchte bitte einen Kaffee mit Milch.", "ar": "أودّ قهوةً بالحليب من فضلك. (المصدر محذوف لوضوحه)"},
        {"de": "Wir möchten am Samstag Fußball spielen.", "ar": "نودّ لعب كرة القدم يوم السبت."},
        {"de": "Er kann sehr gut kochen, aber er kocht selten.", "ar": "يُحسن الطبخ كثيراً، لكنّه نادراً ما يطبخ."},
        {"de": "Kannst du Arabisch? — Ja, ein bisschen.", "ar": "أتُحسن العربية؟ — نعم قليلاً. (können + لغة، بلا مصدر)"},
        {"de": "Möchtest du mitkommen? — Gern!", "ar": "أتودّ المجيء معنا؟ — بكلّ سرور! (الفعل المنفصل يبقى موحّداً)"},
        {"de": "Ich kann heute leider nicht kommen.", "ar": "لا أستطيع المجيء اليوم للأسف. (nicht قبل المصدر)"},
      ],
      comparisonWithArabic:
        "يمكن التعبير بالعربية عن القدرة بـ«أستطيع السباحة» أو «أستطيع أن أسبح». في الألمانية نقول «Ich kann schwimmen» بمصدر مجرد من دون zu بعد الفعل الناقص. وللتعبير عن طلب أو رغبة يمكن أن تقابل möchte كلمة «أودّ» أو «أرغب»، لكن الاختيار يتغير بحسب السياق.",
      eselsbruecke:
        "**الفعل الناقص مصرّف، والمصدر بلا zu في نهاية الجملة الخبرية البسيطة.** مثال: «Ich kann gut kochen.» وللطلب بصيغة ألطف غالباً: «Ich möchte einen Tee, bitte.»",
      commonMistakes: [
        {"wrong": "Ich kann zu schwimmen.", "right": "Ich kann schwimmen.", "classification": "error", "whyAr": "بعد können في هذا التركيب يأتي المصدر المجرد بلا zu."},
        {"wrong": "du können", "right": "du kannst", "classification": "error", "whyAr": "الفعل الناقص مصرّف مع الضمير: du kannst."},
        {"wrong": "Ich möchte zu schwimmen gehen.", "right": "Ich möchte schwimmen gehen.", "classification": "error", "whyAr": "لا تأتي zu قبل المصدر الذي يتبعه الفعل الناقص möchte؛ نقول möchte schwimmen gehen."},
        {"wrong": "Ich will einen Kaffee.", "right": "Ich möchte einen Kaffee, bitte.", "classification": "contextual-alternative", "whyAr": "الجملة الأولى صحيحة نحوياً وقد تبدو مباشرة في طلب المقهى؛ الثانية غالباً ألطف في هذا المقام. النبرة والسياق مهمان، فلا نصف will بأنها فظة دائماً."},
      ],
      relatedRuleComparison: {
        "title": "الأفعال الناقصة الستّة — خريطةٌ كاملة وفروقٌ دقيقة",
        "content": "الأفعال الناقصة الشائعة هي können، dürfen، müssen، sollen، wollen، mögen/möchte. على نحو مبسط: können للقدرة أو الإمكان، dürfen للإذن أو المنع، müssen للضرورة، sollen لتوقع أو طلب من مصدر آخر، wollen للنية، وmöchten للرغبة أو الطلب. تتداخل المعاني وتختلف بحسب السياق؛ ومن المفيد التمييز بين «Du darfst nicht rauchen» (ممنوع) و«Du musst nicht rauchen» (لست مضطراً)."
      },
    },
    {
      id: "t5",
      titleAr: "الماضي الأول: war (كان) وhatte (كان يملك)",
      titleDe: "Das erste Präteritum: war und hatte",
      explanationAr:
        "**war** صيغة Präteritum من sein، و**hatte** صيغة Präteritum من haben. نستخدمهما لوصف مكان أو حالة أو امتلاك في الماضي: «Am Wochenende war ich im Park.» و«Ich hatte gestern keine Zeit.»\n\nالتصريف: ich war · du warst · er/sie/es war · wir waren · ihr wart · sie/Sie waren؛ وich hatte · du hattest · er/sie/es hatte · wir hatten · ihr hattet · sie/Sie hatten. في Präteritum تتطابق عادةً صيغة ich وer/sie/es في هذين الفعلين، كما في أمثلة كثيرة أخرى.\n\nمن التراكيب الشائعة «Ich hatte Hunger/Zeit/Angst»؛ ويمكن أيضاً أن نقول «Ich war hungrig». الأولى تستخدم اسماً مع haben، والثانية صفة مع sein، وكلتاهما صحيحة.\n\nتظهر في الألمانية أيضاً صيغة Perfekt، مثل «Ich habe gestern gekocht». يغلب Perfekt في كثير من المحادثات غير الرسمية، بينما يظهر Präteritum بكثرة في السرد والكتابة؛ لكن التوزيع ليس قاعدة مطلقة، ويختلف حسب المنطقة والفعل والسياق. وتُسمع صيغ مثل «war/hatte» في الكلام أيضاً، كما أن «habe gehabt» ممكنة. في هذا الدرس نتدرب على صيغتي war وhatte لفهمهما واستخدامهما في جمل قصيرة.",
      whyAr:
        "تفيدك war وhatte في وصف عطلة نهاية أسبوع أو حالة سابقة بجمل قصيرة. تعلّم تصريفهما بوصفهما فعلين شائعين، مع تذكّر أن الحديث عن الماضي بالألمانية لا يقتصر عليهما وأن هناك صيغاً أخرى ستظهر في النصوص.",
      table: {
        title: "تصريف war وhatte في الماضي",
        columns: ["الضمير", "war (كان)", "hatte (كان يملك)"],
        rows: [
          { label: "ich", cells: ["war", "hatte"] },
          { label: "du", cells: ["warst", "hattest"] },
          { label: "er/sie/es", cells: ["war", "hatte"] },
          { label: "wir", cells: ["waren", "hatten"] },
          { label: "ihr", cells: ["wart", "hattet"] },
          { label: "sie/Sie", cells: ["waren", "hatten"] },
        ],
      },
      examples: [
        {"de": "Wie war dein Wochenende? — Es war sehr schön!", "ar": "كيف كانت عطلتك؟ — كانت جميلةً جدّاً!"},
        {"de": "Am Samstag war ich mit Freunden im Park.", "ar": "كنت السبت مع أصدقاء في الحديقة."},
        {"de": "Ich hatte gestern leider keine Zeit.", "ar": "لم يكن لديّ وقت أمس للأسف. (kein مع الاسم النكرة)"},
        {"de": "Warst du schon einmal in Deutschland?", "ar": "أسبق أن كنت في ألمانيا؟ (السؤال بالقلب)"},
        {"de": "Wir waren am Sonntag im Kino. Der Film war lang.", "ar": "كنّا الأحد في السينما. كان الفيلم طويلاً."},
        {"de": "Ich hatte großen Hunger nach dem Sport.", "ar": "كنت جائعاً جدّاً بعد الرياضة. (اسم لا صفة)"},
        {"de": "Als Kind hatte ich einen Hund.", "ar": "كان لديّ كلب حين كنت طفلاً."},
        {"de": "Das Wetter war schlecht, aber wir hatten trotzdem Spaß.", "ar": "كان الجوّ سيّئاً، لكنّنا استمتعنا رغم ذلك."},
      ],
      comparisonWithArabic:
        "يمكن تقريب war من «كان» وhatte من «كان لديه/كان عنده»، لكن المقابلة ليست حرفية في كل تعبير. مثلاً «Ich hatte Hunger» تستعمل الاسم Hunger، بينما «Ich war hungrig» تستعمل الصفة hungrig؛ كلاهما صحيح. ركّز على التركيب الألماني في المثال.",
      eselsbruecke:
        "**war** مع المكان أو الصفة، و**hatte** مع الملكية وبعض الأسماء مثل Hunger أو Zeit: «Ich war im Park», «Ich hatte Zeit». ويمكن أيضاً استعمال صفة مثل hungrig مع war.",
      commonMistakes: [
        {"wrong": "ich warst", "right": "ich war", "classification": "error", "whyAr": "warst تخص du، أما صيغة ich فهي war."},
        {"wrong": "du war", "right": "du warst", "classification": "error", "whyAr": "صيغة du من sein في Präteritum هي warst."},
        {"wrong": "Ich habe gestern keine Zeit gehabt.", "right": "Ich hatte gestern keine Zeit.", "classification": "contextual-alternative", "whyAr": "الصيغتان صحيحتان؛ يركز هذا التدريب على Präteritum hatte، بينما Perfekt habe ... gehabt ممكن في الاستعمال."},
        {"wrong": "Ich war Hunger.", "right": "Ich hatte Hunger.", "classification": "error", "whyAr": "في هذا المعنى نستخدم الاسم Hunger مع haben؛ وإذا أردت صفة فقل «Ich war hungrig». كلتا الصيغتين الصحيحتين تعبّران عن الجوع."},
      ],
      relatedRuleComparison: {
        "title": "Präteritum مقابل Perfekt — أيّ ماضٍ تستعمل ومتى؟",
        "content": "يتحدث Präteritum وPerfekt عن الماضي، لكن اختيارهما يتأثر بنوع النص والسجل والمنطقة والسياق؛ ليس الفرق مجرد قاعدة «كتابة مقابل كلام» ولا هما قابلان للاستبدال في كل جملة. يغلب Perfekt في كثير من المحادثات اليومية، ويشيع Präteritum في السرد المكتوب، كما تستعمل صيغ مثل war وhatte في الكلام أيضاً. وتختلف العادات الإقليمية؛ لذلك نعرض هنا صيغة Präteritum للأفعال sein/haben من دون الادعاء أن صيغ Perfekt المقابلة خطأ."
      },
    },
  ],

  reading: {
    "id": "read-a1-06",
    "titleDe": "Was machst du am Wochenende?",
    "titleAr": "ماذا تفعل في نهاية الأسبوع؟",
    "textType": "dialog",
    "paragraphs": [
      "Lena: Hallo Youssef! Sag mal, was machst du eigentlich gern in deiner Freizeit?",
      "Youssef: Ich koche sehr gern. Am liebsten koche ich für Freunde. Und ich lese viel — jeden Abend eine halbe Stunde. Und du? Hast du ein Hobby?",
      "Lena: Ich spiele Volleyball, zweimal pro Woche. Ich mag Mannschaftssport. Aber ich kann leider nicht schwimmen. Das finde ich schade.",
      "Youssef: Wirklich? Ich kann ganz gut schwimmen. Komm doch mal mit ins Schwimmbad! Ich kann dir beim Schwimmen helfen. Fang einfach an, es ist nicht schwer.",
      "Lena: Vielleicht. Was hast du denn am Wochenende gemacht? Warst du zu Hause?",
      "Youssef: Nein, am Samstag war ich im Museum. Es war interessant, aber ich hatte wenig Zeit. Am Sonntag war das Wetter schlecht, also habe ich gekocht und ferngesehen.",
      "Lena: Klingt gut! Hast du Lust auf einen Kaffee? Dann erzählst du mir mehr.",
      "Youssef: Sehr gern! Ich möchte aber lieber einen Tee. Kaffee trinke ich nur am Morgen."
    ],
    "paragraphsAr": [
      "لينا: أهلاً يوسف! قل لي، ماذا تحبّ أن تفعل في وقت فراغك؟",
      "يوسف: أحبّ الطبخ كثيراً. وأحبّ أكثر شيء أن أطبخ للأصدقاء. وأقرأ كثيراً — نصف ساعة كلّ مساء. وأنتِ؟ ألديك هواية؟",
      "لينا: ألعب الكرة الطائرة مرّتين أسبوعياً. أحبّ الرياضات الجماعية. لكنّني للأسف لا أستطيع السباحة. أجد ذلك مؤسفاً.",
      "يوسف: حقّاً؟ أُحسن السباحة. تعالي معي إلى المسبح! أستطيع مساعدتك في السباحة. ابدئي فقط، فالأمر ليس صعباً.",
      "لينا: ربّما. وماذا فعلتَ في نهاية الأسبوع؟ أكنتَ في البيت؟",
      "يوسف: لا، يوم السبت كنت في المتحف. كان ممتعاً، لكن لم يكن لديّ وقت كافٍ. ويوم الأحد كان الجوّ سيّئاً، فطبختُ وشاهدت التلفاز.",
      "لينا: يبدو جميلاً! ألديك رغبة في قهوة؟ فتحكي لي المزيد.",
      "يوسف: بكلّ سرور! لكنّني أفضّل شاياً. القهوة لا أشربها إلا صباحاً."
    ],
    "glossary": [
      {
        "de": "eigentlich",
        "ar": "في الحقيقة / بالمناسبة",
        "noteAr": "تعمل هنا غالباً بوصفها أداةً حوارية تجعل السؤال أقرب إلى الاستفسار العابر؛ ويتوقف أثرها على السياق والنبرة."
      },
      {
        "de": "am liebsten",
        "ar": "أكثر ما أحبّ",
        "noteAr": "أعلى درجات سُلَّم gern ← lieber ← am liebsten. وهي صيغٌ شاذّة لا تُقاس على أصلها."
      },
      {
        "de": "der Mannschaftssport",
        "ar": "الرياضة الجماعية",
        "noteAr": "مركّب من die Mannschaft (الفريق) + der Sport، وجنسه من الجزء الأخير فهو مذكّر."
      },
      {
        "de": "schade",
        "ar": "مؤسف / يا للأسف",
        "noteAr": "صفة لا تُصرَّف، وتُستعمل وحدها تعجّباً: Schade! ومنها Wie schade! = يا للأسف الشديد."
      },
      {
        "de": "das Schwimmbad",
        "ar": "المسبح",
        "noteAr": "محايد لأنّ das Bad محايد. والحركة إليه بـins: ins Schwimmbad gehen."
      },
      {
        "de": "zeigen",
        "ar": "يُري / يعرض",
        "noteAr": "يأخذ مفعولين: مجروراً للشخص ومنصوباً للشيء — Ich zeige dir das Haus."
      },
      {
        "de": "Fang an!",
        "ar": "ابدأ!",
        "noteAr": "أمر من anfangen: في المضارع du fängst an، وفي أمر du نقول Fang an! من دون الإمالة ä."
      },
      {
        "de": "das Museum",
        "ar": "المتحف",
        "noteAr": "محايد، وجمعه شاذّ لاتينيّ: die Museen. والحركة إليه بـins Museum."
      },
      {
        "de": "interessant",
        "ar": "ممتع / مثير للاهتمام",
        "noteAr": "صفة، والنبر على المقطع الأخير: interess‑ÁNT. وضدّها langweilig (مملّ)."
      },
      {
        "de": "also",
        "ar": "إذن / لذلك",
        "noteAr": "حذارِ من الصديق الكاذب: ليست «also» الإنجليزية (= أيضاً) بل تعني «إذن». و«أيضاً» هي auch."
      },
      {
        "de": "Klingt gut!",
        "ar": "يبدو جميلاً!",
        "noteAr": "تعبير محكيّ شائع من الفعل klingen (يبدو صوتُه). والفاعل «das» محذوف اختصاراً."
      },
      {
        "de": "erzählen",
        "ar": "يحكي / يروي",
        "noteAr": "في «Erzähl mir davon!» يأتي الضمير mir في Dativ، وdavon تعني «عن ذلك». وقد يختلف تركيب erzählen بحسب المتمّمات في الجملة."
      },
      {
        "de": "habe gekocht / ferngesehen",
        "ar": "طبخت / شاهدت التلفاز",
        "noteAr": "صيغة Perfekt ظاهرة هنا لفهم الحوار: haben في الحاضر مع Partizip II. نركز في هذا الدرس على war وhatte؛ لا تخلط بين عرض الصيغة في القراءة وجعلها هدف الإتقان هنا."
      },
    ],
    "questions": [
      {
        "id": "r1",
        "type": "multiple-choice",
        "instructionAr": "هوايات يوسف:",
        "questionDe": "Was macht Youssef am liebsten?",
        "questionAr": "ما أكثر نشاط يحبّ يوسف أن يفعله؟",
        "options": [
          "Volleyball spielen",
          "Für Freunde kochen",
          "Ins Museum gehen",
          "Schwimmen"
        ],
        "correctIndex": 1,
        "explanation": "قال: «Am liebsten koche ich für Freunde». وصيغة am liebsten هي أعلى درجات التفضيل، فوق gern و lieber.",
        "optionExplanations": [
          "الكرة الطائرة هواية لينا لا يوسف.",
          undefined,
          "ذهب إلى المتحف مرّةً في عطلة، وليست هوايته المفضّلة.",
          "يُحسن السباحة، لكنّه لم يقل إنّها المفضّلة."
        ],
        "errorType": "vocabulary",
        "paragraph": 1
      },
      {
        "id": "r2",
        "type": "multiple-choice",
        "instructionAr": "قدرات لينا:",
        "questionDe": "Was kann Lena nicht?",
        "questionAr": "ما الذي لا تستطيعه لينا؟",
        "options": [
          "Volleyball spielen",
          "Kochen",
          "Schwimmen",
          "Deutsch sprechen"
        ],
        "correctIndex": 2,
        "explanation": "قالت: «ich kann leider nicht schwimmen». ولاحظ البنية: können مصرَّفاً ثانياً، و nicht قبل المصدر، والمصدر في الآخر.",
        "optionExplanations": [
          "بل تلعبها مرّتين أسبوعياً.",
          "الطبخ لم يُذكر عنها شيء.",
          undefined,
          "هي تتحدّث الألمانية في الحوار نفسه."
        ],
        "errorType": "vocabulary",
        "paragraph": 2
      },
      {
        "id": "r3",
        "type": "multiple-choice",
        "instructionAr": "عطلة يوسف — انتبه إلى صيغ الماضي:",
        "questionDe": "Wo war Youssef am Samstag?",
        "questionAr": "أين كان يوسف يوم السبت؟",
        "options": [
          "Im Schwimmbad",
          "Im Museum",
          "Zu Hause",
          "Im Café"
        ],
        "correctIndex": 1,
        "explanation": "قال: «am Samstag war ich im Museum». ولاحظ ترتيب V2: ظرف الزمان أوّلاً ثمّ الفعل war ثمّ الفاعل ich.",
        "optionExplanations": [
          "المسبح دعوةٌ للمستقبل لا حدثاً ماضياً.",
          undefined,
          "بل نفى ذلك صراحةً بقوله Nein.",
          "القهوة اقتراحٌ في نهاية الحوار."
        ],
        "errorType": "vocabulary",
        "paragraph": 5
      },
      {
        "id": "r4",
        "type": "multiple-choice",
        "instructionAr": "بنية الجملة — لماذا هذه الصيغة؟",
        "questionDe": "Wo steht die trennbare Vorsilbe an im Imperativsatz?",
        "questionAr": "أين تأتي البادئة المنفصلة an في جملة الأمر؟",
        "options": [
          "Am Satzanfang vor dem Verb",
          "Am Satzende",
          "Zwischen Verb und Subjekt",
          "Sie bleibt immer direkt beim Infinitiv"
        ],
        "correctIndex": 1,
        "explanation": "anfangen فعل منفصل، وفي صيغة الأمر Fang einfach an! تأتي البادئة an في نهاية الجملة بعد بقية الكلمات.",
        "optionExplanations": [
          "البادئة ليست قبل الفعل في هذا المثال.",
          undefined,
          "هذا ليس موضع البادئة في الجملة.",
          "الفعل المنفصل ينفصل في الجملة المصرفة؛ لا يبقى ملتصقاً بالمصدر هنا."
        ],
        "errorType": "word-order",
        "paragraph": 3
      },
      {
        "id": "r5",
        "type": "multiple-choice",
        "instructionAr": "الطلب المهذّب في النهاية:",
        "questionDe": "Was möchte Youssef trinken?",
        "questionAr": "ماذا يودّ يوسف أن يشرب؟",
        "options": [
          "Einen Kaffee",
          "Einen Tee",
          "Ein Wasser",
          "Nichts"
        ],
        "correctIndex": 1,
        "explanation": "قال: «Ich möchte aber lieber einen Tee»؛ أي إنه يفضّل الشاي على القهوة في هذا السياق.",
        "optionExplanations": [
          "القهوة اقتراح لينا، ويوسف لا يشربها إلا صباحاً.",
          undefined,
          "الماء لم يُذكر.",
          "بل قَبِل الدعوة بقوله Sehr gern."
        ],
        "errorType": "vocabulary",
        "paragraph": 7
      }
    ],
    "redemittel": [
      {
        "de": "Was machst du gern in deiner Freizeit?",
        "ar": "ماذا تحبّ أن تفعل في وقت فراغك؟"
      },
      {
        "de": "Ich koche gern, am liebsten für Freunde.",
        "ar": "أحبّ الطبخ، وأكثر ما أحبّ أن أطبخ للأصدقاء."
      },
      {
        "de": "Ich kann leider nicht schwimmen. Das finde ich schade.",
        "ar": "لا أستطيع السباحة للأسف. أجد ذلك مؤسفاً."
      },
      {
        "de": "Hast du Lust auf einen Kaffee?",
        "ar": "ألديك رغبة في قهوة؟"
      },
      {
        "de": "Wie war dein Wochenende? — Es war sehr schön!",
        "ar": "كيف كانت عطلتك؟ — كانت جميلةً جدّاً!"
      },
      {
        "de": "Ich möchte lieber einen Tee, bitte.",
        "ar": "أفضّل شاياً من فضلك."
      }
    ],
    "discussionAr": "اكتب حواراً من ثماني تبادلات عن وقت الفراغ مع صديق. أدرج ثلاث جمل بـgern أو lieber أو am liebsten، وجملتين بـkönnen (إحداهما منفية)، وطلباً بـmöchte، وأمراً موجهاً إلى الصديق بصيغة du. ثم اكتب الصيغة الرسمية المقابلة بـSie منفصلةً عن الحوار، واسأل عن عطلة سابقة وأجب باستخدام war وhatte. راجع تصريف الأفعال في كل جملة.",
  },

  listening: {
    items: [
      {
        id: "l1",
        title: "دعوة إلى المباراة",
        lines: [
          { speaker: "Karim", de: "Hallo Mona! Was machst du am Samstag?", ar: "مرحباً منى! ماذا تفعلين السبت؟" },
          { speaker: "Mona", de: "Am Samstag? Ich weiß nicht. Warum?", ar: "السبت؟ لا أعرف. لماذا؟" },
          { speaker: "Karim", de: "Ich spiele gern Fußball. Hast du Lust, mitzukommen?", ar: "أحب لعب كرة القدم. هل لديك رغبة في المجيء معنا؟" },
          { speaker: "Mona", de: "Gern! Ich spiele auch gern Fußball.", ar: "بسرور! أنا أيضاً أحب لعب كرة القدم." },
          { speaker: "Karim", de: "Super! Komm um vier Uhr zum Sportplatz!", ar: "رائع! تعالي في الرابعة إلى الملعب!" },
        ],
      },
      {
        id: "l2",
        title: "الهوايات المفضلة",
        lines: [
          { speaker: "Lehrer", de: "Was machst du gern in deiner Freizeit?", ar: "ماذا تحب أن تفعل في وقت فراغك؟" },
          { speaker: "Sami", de: "Ich lese gern und höre gern Musik.", ar: "أحب القراءة والاستماع للموسيقى." },
          { speaker: "Lehrer", de: "Und du, Anna?", ar: "وأنتِ يا آنا؟" },
          { speaker: "Anna", de: "Ich tanze gern und fotografiere.", ar: "أحب الرقص والتصوير." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was spielt Karim gern?",
        questionAr: "ماذا يحب كريم أن يلعب؟",
        options: ["Fußball", "Tennis", "Basketball", "Schach"],
        correctIndex: 0,
        explanation: "قال كريم: Ich spiele gern Fußball.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wann soll Mona kommen?",
        questionAr: "متى يجب أن تأتي منى؟",
        options: ["um vier Uhr", "um fünf Uhr", "um drei Uhr", "am Abend"],
        correctIndex: 0,
        explanation: "قال كريم: Komm um vier Uhr zum Sportplatz!",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was macht Anna gern?",
        questionAr: "ماذا تحب آنا أن تفعل؟",
        options: ["tanzen und fotografieren", "lesen und Musik hören", "Fußball spielen", "fernsehen"],
        correctIndex: 0,
        explanation: "قالت آنا: Ich tanze gern und fotografiere.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات مختارة من مفردات الهوايات",
    items: [
      { de: "das Hobby", ar: "الهواية", note: "h في أول الكلمة يُنطق /h/ ولا يُحذف." },
      { de: "gern", ar: "بسرور", note: "g صوت /ɡ/ مجهور، قريب من g في go، وليس غ العربية؛ وقد يختلف r بحسب المنطقة." },
      { de: "tanzen", ar: "يرقص", note: "z الألمانية يُنطق /ts/؛ قرّبها من ت + س متصلتين: tan-tsen." },
      { de: "hören", ar: "يسمع", note: "ö طويل /øː/: ابدأ بصوت e ثم دوّر الشفتين من دون تحويله إلى u." },
      { de: "die Musik", ar: "الموسيقى", note: "النطق [muˈziːk]: s قبل i هنا مجهور /z/؛ آخر الكلمة هو k، لا s." },
      { de: "fotografieren", ar: "يُصوّر", note: "النبر على ‎-fie-، وie تمثل /iː/ طويلاً تقريباً: fo-to-gra-FIE-ren." },
    ],
    tip: "لا يتغير صوت الحرف لمجرد وقوع الكلمة في نهاية الجملة: في Musik يبقى s قبل i مجهوراً /z/، وتنتهي الكلمة بصوت k.",
    shadowing: [
      { de: "Ich spiele gern Tennis.", ar: "أحب لعب التنس.", tip: "sp في بداية الكلمة يُنطق /ʃp/؛ وg في gern هو /ɡ/." },
      { de: "Ich höre gern Musik.", ar: "أحب الاستماع للموسيقى.", tip: "حافظ على ö الطويل /øː/ ولا تستبدله بصوت u." },
      { de: "Komm bitte um vier Uhr!", ar: "تعال في الرابعة من فضلك!", tip: "v في vier يُنطق /f/." },
      { de: "Hast du Lust, mitzukommen?", ar: "هل لديك رغبة في المجيء معنا؟", tip: "في mitzukommen تدخل zu بين البادئة mit والفعل kommen: mit + zu + kommen." },
    ],
  },
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة كاملة باستخدام نشاط واحد من القائمة المحددة:",
      prompt: "Was machst du gern in deiner Freizeit? Verwende eine Aktivität: Fußball spielen / Bücher lesen / Musik hören / tanzen.",
      acceptedAnswers: ["Ich spiele gern Fußball", "Ich lese gern Bücher", "Ich höre gern Musik", "Ich tanze gern"],
      sampleAnswer: "Ich spiele gern Fußball.",
      explanation: "الصيغة: Ich + فعل + gern + بقية الجملة.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل صيغ الأمر الصحيحة (Komm/Kommt/Kommen Sie):",
      template: "___ bitte! (لصديقك) · ___ bitte! (لصديقين) · ___ bitte! (لحضرتك)",
      blanks: [
        { correct: "Komm", options: ["Komm", "Kommt", "Kommen Sie"] },
        { correct: "Kommt", options: ["Komm", "Kommt", "Kommen Sie"] },
        { correct: "Kommen Sie", options: ["Komm", "Kommt", "Kommen Sie"] },
      ],
      explanation: "du → Komm، ihr → Kommt، Sie → Kommen Sie. الضمير يُحذف مع du/ihr ويُذكر مع Sie.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Komm doch morgen mit!",
      explanation: "تعال معنا غداً! — Komm (أمر du) + doch (تشجيع) + mit (بادئة فعل منفصل في النهاية).",
      errorType: "spelling",
    },
    {
      id: "w4",
      type: "fill-blank",
      instructionAr: "أكمل الحوار المكتوب باختيار العبارة المناسبة في كل فراغ. افترض أن موعد السبت المحدد لا يناسبك، فاعتذر بأدب واقترح الأسبوع القادم.",
      template: "A: Hast du am Samstag Zeit? Wir spielen Fußball. · B: ___ · A: Um 15 Uhr im Park. Kommst du mit? · B: ___ · A: ___",
      blanks: [
        { correct: "Ja, gern! Um wie viel Uhr?", options: ["Ja, gern! Um wie viel Uhr?", "Leider habe ich keine Zeit.", "Ich spiele Fußball?"] },
        { correct: "Leider habe ich keine Zeit. Vielleicht nächste Woche?", options: ["Leider habe ich keine Zeit. Vielleicht nächste Woche?", "Ja, gern! Um wie viel Uhr?", "Leider bin ich keine Zeit. Vielleicht nächste Woche?"] },
        { correct: "Ja, gern! Nächste Woche passt es mir gut.", options: ["Ja, gern! Nächste Woche passt es mir gut.", "Nein, ich habe am Samstag Zeit.", "Ich möchte keine Zeit."] },
      ],
      explanation: "العبارات الصحيحة تكوّن حواراً متماسكاً: قبول مع سؤال عن الساعة، ثم اعتذار مهذب مع اقتراح أسبوع بديل، ثم قبول البديل.",
      errorType: "vocabulary",
    },
    {
      id: "w5",
      type: "fill-blank",
      instructionAr: "أكمل رسالة قصيرة عن عطلة سابقة بصيغتي war وhatte:",
      template: "Am Samstag ___ ich im Museum. Es ___ interessant. Ich ___ wenig Zeit.",
      blanks: [
        { correct: "war", options: ["war", "hatte", "waren"] },
        { correct: "war", options: ["war", "hatte", "warst"] },
        { correct: "hatte", options: ["hatte", "war", "hatten"] },
      ],
      explanation: "war هي صيغة Präteritum من sein للمكان والوصف، وhatte صيغة Präteritum من haben للوقت أو الملكية.",
      errorType: "conjugation",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ gern Fußball.",
      questionAr: "أحب لعب كرة القدم.",
      options: ["spiele", "spielst", "spielen", "spielt"],
      correctIndex: 0,
      explanation: "مع ich نستخدم spiele؛ والجملة المحايدة هي «Ich spiele gern Fußball».",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة الأمر الصحيحة (مع صديقك):",
      questionDe: "___ bitte hierher!",
      questionAr: "تعال إلى هنا من فضلك!",
      options: ["Komm", "Kommst", "Kommt", "Kommen Sie"],
      correctIndex: 0,
      explanation: "«Komm!» صيغة أمر du شائعة من kommen. توجد أيضاً صيغة «Komme!» في استعمالات مناسبة، لذا لا نعمّم أن -e ممنوعة دائماً.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الهواية بمعناها:",
      pairs: [
        { left: "tanzen", right: "يرقص" },
        { left: "lesen", right: "يقرأ" },
        { left: "fotografieren", right: "يصور" },
        { left: "Musik hören", right: "يستمع للموسيقى" },
      ],
      explanation: "هوايات شائعة: رقص، قراءة، تصوير، استماع للموسيقى.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["gern", "Ich", "Musik", "höre", "."],
      correctSentence: "Ich höre gern Musik.",
      explanation: "في هذه الجملة يأتي الفعل المصرف في المركز الثاني ثم gern؛ قد يتغير موضع gern عندما تتغير بنية الجملة.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "اختر الكلمة أو الصيغة التي تصحّح الخطأ في الجملة.",
      wrongSentence: "Ich gern spiele Tennis.",
      wrongWord: "gern spiele",
      correctWord: "spiele gern",
      options: ["spiele gern", "spielen gern", "gern spielst", "spielt gern"],
      explanation: "في المثال المحايد «Ich spiele gern» يأتي gern بعد الفعل؛ لكن موقعه ليس ملازماً للفعل في كل جملة.",
      errorType: "word-order",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بأمر مناسب (Steh auf/Hör zu/Komm mit):",
      template: "___ ! Es ist spät. (استيقظ) · ___ bitte! (أنصت) · ___ ! (تعال معنا)",
      blanks: [
        { correct: "Steh auf", options: ["Steh auf", "Hör zu", "Komm mit"] },
        { correct: "Hör zu", options: ["Steh auf", "Hör zu", "Komm mit"] },
        { correct: "Komm mit", options: ["Steh auf", "Hör zu", "Komm mit"] },
      ],
      explanation: "أوامر يومية: Steh auf (قم)، Hör zu (أنصت)، Komm mit (تعال معنا).",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "حوّل الأمر الرسمي إلى أمر غير رسمي موجّه إلى شخص واحد:",
      prompt: "Kommen Sie bitte! (حوّلها إلى أمر du)",
      acceptedAnswers: ["Komm bitte!", "Komm!", "Komme bitte!", "Komme!"],
      sampleAnswer: "Komm bitte!",
      explanation: "مع du نستخدم صيغة الأمر «Komm(e)!» ونحذف ضمير المخاطب عادةً؛ وتبقى bitte مناسبة هنا.",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Hast du Lust, mitzukommen?",
      questionAr: "ما معنى السؤال؟",
      options: ["هل لديك رغبة في المجيء معنا؟", "هل تحب الطعام؟", "متى تأتي؟", "هل تحب الموسيقى؟"],
      correctIndex: 0,
      explanation: "مع الاسم نقول Lust auf + Akkusativ؛ ومع الفعل نقول Lust haben, etwas zu tun: mitzukommen = أن يأتي معنا.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "اختر الكلمة أو الصيغة التي تصحّح الخطأ في الجملة.",
      wrongSentence: "Kommst bitte zu mir! (أمر لصديق)",
      wrongWord: "Kommst",
      correctWord: "Komm",
      options: ["Komm", "Kommst", "Kommt", "Kommen Sie"],
      explanation: "في أمر du نستخدم صيغة الأمر «Komm(e)!»، لا صيغة المضارع «kommst». ويمكن ذكر du بعد الأمر للتوكيد في سياقات مناسبة.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir spielen gern zusammen.",
      explanation: "في هذه الجملة يأتي gern بعد spielen؛ هذا ترتيب محايد شائع.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "صرف الفعل الشاذ بين قوسين (تغيّر الصوت):",
      instructionDe: "Konjugiere: essen, lesen, fahren",
      template: "Du ___ gern Pizza. (essen) · Er ___ ein Buch. (lesen) · Anna ___ mit dem Fahrrad. (fahren)",
      blanks: [
        { correct: "isst", options: ["isst", "esst", "essst", "isstst"] },
        { correct: "liest", options: ["liest", "lest", "leset", "list"] },
        { correct: "fährt", options: ["fährt", "fahrt", "fähert", "fähret"] },
      ],
      hint: "e → i (essen→isst) · e → ie (lesen→liest) · a → ä (fahren→fährt).",
      explanation: "isst (e→i)، liest (e→ie)، fährt (a→ä). هنا تظهر الصيغ المتغيرة مع du وer؛ والصيغ الواردة مثال على أفعال تُحفظ مع تصريفها.",
      errorType: "conjugation",
      points: 2,
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بتصريف الفعل الناقص المناسب:",
      instructionDe: "Ergänze die passende Form von können oder möchten.",
      template: "Ich ___ schwimmen. · ___ du morgen kommen? · Ich ___ einen Kaffee, bitte. · Wir ___ am Samstag spielen.",
      blanks: [
        { correct: "kann", options: ["kann", "kanne", "könnt", "kannst"] },
        { correct: "Kannst", options: ["Kannst", "Kann", "Können", "Könnt"] },
        { correct: "möchte", options: ["möchte", "möchtest", "möchten", "mag"] },
        { correct: "möchten", options: ["möchten", "möchte", "möchtest", "können"] },
      ],
      hint: "ich kann · du kannst · ich möchte · wir möchten.",
      explanation: "نختار صيغة الفعل الناقص بحسب الضمير، ثم نضع المصدر المجرد في نهاية الجملة الخبرية البسيطة.",
      errorType: "conjugation",
      points: 2,
    },
    {
      id: "e13",
      type: "fill-blank",
      instructionAr: "أكمل بالماضي الأول (war / warst / waren / hatte):",
      instructionDe: "Ergänze: war, warst, waren, hatte",
      template: "Am Wochenende ___ ich im Park. · Du ___ gestern sehr müde. · Wir ___ im Kino. · Ich ___ keine Zeit.",
      blanks: [
        { correct: "war", options: ["war", "warst", "waren", "wart"] },
        { correct: "warst", options: ["warst", "war", "waren", "wart"] },
        { correct: "waren", options: ["waren", "war", "warst", "wart"] },
        { correct: "hatte", options: ["hatte", "hattest", "hatten", "hattet"] },
      ],
      hint: "ich war · du warst · wir waren · ich hatte (كان عندي).",
      explanation: "war/warst/waren من sein، وhatte من haben — الماضي الأول.",
      errorType: "conjugation",
      points: 2,
    },
    {"id": "e14", "type": "multiple-choice", "instructionAr": "اختر الصيغة الطبيعية للطلب في مقهى:", "questionDe": "Im Café: «___ einen Tee, bitte.»", "questionAr": "في المقهى: ما الصيغة المهذّبة؟", "options": ["Ich will", "Ich möchte", "Ich mag", "Ich kann"], "correctIndex": 1, "explanation": "möchte صيغة شائعة ولطيفة للطلب في المقهى. وwill صحيحة نحوياً لكنها قد تبدو أكثر مباشرة في هذا المقام؛ ويتأثر وقعها بالنبرة والسياق.", "optionExplanations": ["صحيحة نحواً، لكنها أكثر مباشرة وقد تبدو حادة في هذا السياق.", undefined, "تعبّر غالباً عن ميل أو تفضيل، لا عن طلب مباشر هنا.", "تتعلق بالقدرة أو الإمكان، لا بطلب الشاي."], "errorType": "vocabulary"},
    {"id": "e15", "type": "fill-blank", "instructionAr": "أكمل تغيّر الصائت:", "template": "Ich ___ gern Obst, aber mein Bruder ___ lieber Fleisch. (essen)", "blanks": [{"correct": "esse", "options": ["esse", "isst", "esst", "isse"]}, {"correct": "isst", "options": ["isst", "esst", "esse", "essst"]}], "explanation": "في essen يتغير e إلى i مع du وer/sie/es: du isst وer isst؛ أما ich فتحافظ على e: ich esse.", "errorType": "conjugation"},
    {"id": "e16", "type": "word-ordering", "instructionAr": "رتّب جملة الفعل الناقص:", "tokens": ["Wir", "möchten", "am", "Samstag", "Fußball", "spielen", "."], "correctSentence": "Wir möchten am Samstag Fußball spielen.", "explanation": "في الجملة الخبرية البسيطة يأتي الفعل الناقص المصرف في المركز الثاني، والمصدر المجرد في نهاية الجملة.", "errorType": "word-order"},
    {"id": "e17", "type": "error-correction", "instructionAr": "صحّح صيغة الأمر:", "wrongSentence": "Fähr bitte langsam!", "wrongWord": "Fähr", "correctWord": "Fahr", "options": ["Fahr", "Fährst", "Fahre Sie", "Fahren"], "explanation": "في هذا الفعل نقول «Fahr!» من دون ä. وتبقى e→i/ie في أوامر أفعال معيّنة مثل «Iss!» و«Lies!» و«Nimm!»؛ احفظ صيغة كل فعل.", "errorType": "conjugation"},
    {"id": "e18", "type": "transformation", "instructionAr": "حوّل إلى الماضي بـwar أو hatte:", "prompt": "Ich bin im Kino und habe viel Zeit. (اكتبها في الماضي)", "acceptedAnswers": ["Ich war im Kino und hatte viel Zeit.", "Ich war im Kino und hatte viel Zeit"], "sampleAnswer": "Ich war im Kino und hatte viel Zeit.", "explanation": "هنا نحوّل bin إلى war وhabe إلى hatte. صيغتا war/hatte شائعتان في الكلام أيضاً، لكن اختيار Präteritum أو Perfekt يتأثر بالفعل والسياق ونوع النص.", "errorType": "conjugation"},
    {
      id: "e19",
      type: "multiple-choice",
      instructionAr: "اختر تصريف mögen المناسب مع الاسم:",
      questionDe: "Meine Schwester ___ klassische Musik.",
      options: ["mag", "magst", "mögt", "mögen"],
      correctIndex: 0,
      explanation: "مع Meine Schwester (هي) نستخدم mag؛ ويأتي بعد mögen هنا اسمٌ مثل klassische Musik.",
      errorType: "conjugation",
    },
    {
      id: "e20",
      type: "fill-blank",
      instructionAr: "أكمل تركيب Lust مع اسم ثم مع مصدر:",
      template: "Ich habe Lust ___ einen Kaffee. · Ich habe Lust, ins Kino ___ gehen.",
      blanks: [
        { correct: "auf", options: ["auf", "für", "zu", "mit"] },
        { correct: "zu", options: ["zu", "auf", "mit", "für"] },
      ],
      explanation: "مع الاسم: Lust auf + Akkusativ؛ ومع الفعل: Lust haben, etwas zu tun (مصدر مع zu).",
      errorType: "preposition",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich gern spiele Fußball.", right: "Ich spiele gern Fußball.", whyAr: "في هذا المثال المحايد يأتي الفعل المصرف في المركز الثاني ثم gern؛ وقد يختلف موضع gern في جمل أطول." },
      { wrong: "Kommst bitte! (أمر بصيغة du)", right: "Komm bitte!", whyAr: "استخدم صيغة الأمر، لا صيغة المضارع du kommst. ويمكن إضافة du بعد صيغة الأمر للتوكيد في سياق مناسب." },
      { wrong: "Ich kann zu schwimmen.", right: "Ich kann schwimmen.", whyAr: "بعد الفعل الناقص können يأتي المصدر المجرد بلا zu في هذا التركيب." },
    ],
    eselsbruecken: [
      "«نشاط + gern» نمط محايد شائع، مع بقاء الفعل المصرف في المركز الثاني.",
      "أمر du غالباً بلا نهاية؛ تعلّم الصيغ الشاذة مثل Iss! وLies! وFahr! ولا تحذف -st آلياً من كل فعل.",
    ],
    culturalNote: {
      title: "كلمات الهوايات والأندية (Vereine)",
      content:
        "يمكن أن تسمّي بعض الأنشطة المنظمة بكلمة مركبة مثل Fußballverein أو Sportverein. وتقول «Ich bin Mitglied in einem Sportverein» إذا أردت أن تذكر أنك عضو في نادٍ رياضي. الانضمام إلى نادٍ خيار من خيارات وقت الفراغ، وليس شرطاً لممارسة هواية.",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الصيغة الصحيحة:",
      questionDe: "Ich ___ gern Musik.",
      options: ["höre", "hörst", "hört", "hören"],
      correctIndex: 0,
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
      explanation: "لوصف المكان في الماضي نستخدم war: Am Samstag war ich im Park.",
      errorType: "conjugation",
    },
  ],

  flashcards: [
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
  ],

  /* ═══ تمارين الوساطة والتفاعل ═══ */
  mediation: [
    {
      id: "med-a1-06-1", type: "simplify-announcement",
      titleAr: "بسّط دعوة لنشاط رياضي بالعربية",
      sourceDe: "Wir spielen am Samstag um 15 Uhr Fußball im Park. Komm doch mit! Bring deine Freunde mit.",
      taskAr: "انقل الدعوة بالعربية لصديق: اليوم، الوقت، المكان، وما يجب إحضاره.",
      modelAnswerAr: "«نلعب كرة القدم السبت الساعة 3 عصراً في الحديقة. تعال معنا! وأحضر أصدقاءك.»",
      keyPointsAr: ["نقلت اليوم (السبت)", "نقلت الوقت (الثالثة عصراً)", "ذكرت المكان (الحديقة)", "نقلت طلب إحضار الأصدقاء"],
    },
  ],
  interaction: [
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
  ],

};