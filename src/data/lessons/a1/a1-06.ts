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
  duration: 30,
  summary:
    "الحديث عن الهوايات مع gern، فعل mögen، وصيغة الأمر (Imperativ) بصورها الثلاث، وتغيّر الصوت في الأفعال الشاذة (essen→isst)، والأفعال الناقصة الأولى (können, möchte)، والماضي الأول (war, hatte).",

  lernziele: [
    { id: "z1", de: "Ich kann meine Hobbys nennen.", ar: "أن أسمّي هواياتي: Sport, Musik, Lesen, Reisen..." },
    { id: "z2", de: "Ich kann sagen: Ich spiele gern Tennis.", ar: "أن أعبر عن تفضيلي بـ gern (بسرور/أحب أن)." },
    { id: "z3", de: "Ich kann den Imperativ bilden: Komm! Kommt! Kommen Sie!", ar: "أن أصيغ الأمر للثلاثة: أنتَ / أنتم / حضرتك." },
    { id: "z4", de: "Ich kann Verabredungen machen.", ar: "أن أدعو وأقبل وأرفض المواعيد بأدب." },
    { id: "z5", de: "Ich kenne den Vokalwechsel: essen – isst, lesen – liest, fahren – fährst.", ar: "أن أعرف تغيّر الصوت في الأفعال الشاذة (يأكل/يقرأ/يقود)." },
    { id: "z6", de: "Ich kann die ersten Modalverben benutzen: können, möchte.", ar: "أن أستخدم أول أفعال ناقصة: أستطيع، أودّ." },
    { id: "z7", de: "Ich kann war und hatte benutzen.", ar: "أن أستخدم الماضي الأول: كان (war) وامتلك (hatte)." },
  ],

  einfuehrung: {
    motivatingQuestionAr:
      "في العربية نقول «أحب كرة القدم». في الألمانية هناك 3 طرق: Ich spiele gern Fußball، وIch mag Fußball، وMir gefällt Fußball. هل تعرف الفرق بين gern وmag؟ جرّب أن تخمّن قبل أن نبدأ!",
    motivatingQuestionDe: "Was machst du in deiner Freizeit?",
    contextAr:
      "اليوم نتحدث عن وقت الفراغ — ونضيف أخيراً «صيغة الأمر»: كيف تقول لصديقك «تعال!» بلطف، ولصديقين «تعالوا!»، ولحضرتك باحترام.",
    contextDe: "Hast du Lust auf ein Spiel?",
    connectionToPreviousAr: "تعلمت في الدرس السابق الأفعال المنفصلة والوقت. اليوم: تفضيلات + أوامر — وسترى أن gern يأتي مباشرة بعد الفعل.",
    activateVocabulary: [
      { de: "die Freizeit", ar: "وقت الفراغ" },
      { de: "das Hobby", ar: "الهواية" },
      { de: "spielen", ar: "يلعب" },
      { de: "gern", ar: "بسرور / يحب أن" },
      { de: "der Sport", ar: "الرياضة" },
    ],
  },

  /* مراجعة تراكمية (Interleaving): من الدروس a1-01 حتى a1-05 */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من الدروس السابقة: ماذا تقول عندما يُسأل عن بلدك؟",
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
      instructionAr: "مراجعة: اختر أداة الملكية الصحيحة (من درس العائلة):",
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
      instructionAr: "مراجعة: صحّح الخطأ (من درس الطعام — النصب):",
      wrongSentence: "Ich esse ein Apfel.",
      wrongWord: "ein Apfel",
      correctWord: "einen Apfel",
      options: ["einen Apfel", "ein Apfel", "einem Apfel", "eine Apfel"],
      explanation: "Akkusativ للمذكر: ein → einen. Ich esse einen Apfel — من درس a1-03.",
      errorType: "case",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "التعبير عن التفضيل: gern، mögen، وLust haben",
      titleDe: "Vorlieben: gern, mögen, Lust haben",
      explanationAr:
        "أسهل طريقة: الفعل + gern (Ich spiele gern Tennis). أو الفعل mögen (Ich mag Musik). أو الصيغة العامية (Hast du Lust auf...؟ = هل لديك رغبة في...؟). gern يأتي بعد الفعل مباشرة وتضيف e في النهاية أحياناً (gerne).",
      whyAr:
        "لماذا gern وليس «أحب»؟ لأن الألمانية تفصل «الفعل» عن «الاستمتاع»: Ich spiele (ألعب) + gern (بسرور). هذا يسمح بنفي دقيق: Ich spiele nicht gern Fußball (لا أحب لعب كرة القدم) — النفي يقع على المتعة وليس الفعل!",
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
        { de: "Ich spiele gern Fußball.", ar: "أحب لعب كرة القدم." },
        { de: "Meine Schwester mag Musik.", ar: "أختي تحب الموسيقى." },
        { de: "Wir tanzen gern.", ar: "نحب الرقص." },
        { de: "Hast du Lust auf einen Kaffee?", ar: "هل لديك رغبة في قهوة؟" },
        { de: "Ich lese nicht gern.", ar: "لا أحب القراءة." },
      ],
      comparisonWithArabic:
        "العربية «أحب» فعل واحد. الألمانية تفصل المتعة (gern) عن الفعل. أقرب مثال عربي: «ألعب بسرور» — تماماً! استخدم هذا التشبيه وستتحدث طبيعياً.",
      eselsbruecke:
        "«gern = جرن (بسرور)»: كلما أردت أن تقول «أحب أن أفعل» قل الفعل ثم gern: spiele gern، lese gern، reise gern. gern بعد الفعل كأنها «ابتسامة» تلحق به.",
      commonMistakes: [
        { wrong: "Ich gern spiele Fußball.", right: "Ich spiele gern Fußball.", whyAr: "gern تأتي بعد الفعل المتصرف مباشرة وليس قبله." },
        { wrong: "Ich mag spielen Fußball.", right: "Ich spiele gern Fußball. / Ich mag Fußball.", whyAr: "mögen يتبعها اسم (بلا فعل): Ich mag Fußball. مع الفعل نستخدم gern." },
        { wrong: "Ich habe Lust zu Kaffee.", right: "Ich habe Lust auf Kaffee.", whyAr: "التعبير الصحيح: Lust haben auf + اسم." },
      ],
      relatedRuleComparison: {
        title: "mögen أم gefallen؟",
        content: "mögen = أحب (مع الفاعل: Ich mag Musik). gefallen = يعجبني (مع المفعول: Musik gefällt mir). سنأخذ gefallen بالتفصيل في A2 مع Dativ.",
      },
    },
    {
      id: "t2",
      titleAr: "صيغة الأمر (Imperativ): du / ihr / Sie",
      titleDe: "Der Imperativ: Komm! Kommt! Kommen Sie!",
      explanationAr:
        "الأمر له ثلاث صور: مع du: جذر الفعل فقط (kommen → Komm!) وتُحذف -st من التصريف. مع ihr: تصريفهم العادي بدون ضمير (ihr kommt → Kommt!). مع Sie: الفعل + Sie (Kommen Sie!) مع الفعل المنفصل: البادئة تذهب للنهاية (aufstehen → Steh auf!).",
      whyAr:
        "لماذا ثلاث صور؟ لأن الألمانية تحترم «درجة القرب»: مع الصديق du تختصر (Komm!)، مع الجماعة ihr تحتفظ (Kommt!)، مع الحضرية Sie تعكس (Kommen Sie!) — تماماً كأنك تختار مستوى الاحترام.",
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
        { de: "Komm bitte!", ar: "تعال من فضلك!" },
        { de: "Kommt morgen zu mir!", ar: "تعالوا غداً إلى عندي!" },
        { de: "Kommen Sie bitte herein!", ar: "تفضلوا بالدخول!" },
        { de: "Steh auf! Es ist spät.", ar: "قم! الوقت متأخر." },
        { de: "Hör zu, bitte!", ar: "انصت من فضلك!" },
      ],
      comparisonWithArabic:
        "العربية: «تعال» / «تعالوا» / تفضل. الألمانية: Komm / Kommt / Kommen Sie — نفس الفكرة بالضبط، مع صيغة احترام ثالثة. والتشابه مذهل: العربية تلغي الفعل «أنتَ» في الأمر، والألمانية تحذف الضمير du وihr أيضاً!",
      eselsbruecke:
        "«أمر du = اقطع التاء»: خذ تصريف du (du kommst) واحذف -st (kommst → komm). أما Sie فـ«افعل العكس»: الفعل أولاً ثم Sie.",
      commonMistakes: [
        { wrong: "Du kommst! (مع الضمير في الأمر)", right: "Komm!", whyAr: "الأمر مع du وihr يحذف الضمير تماماً." },
        { wrong: "Kommen Sie؟ بعلامة استفهام", right: "Kommen Sie! (بعلامة تعجب)", whyAr: "هي أمر مهذب وليست سؤالاً — النبرة توضح ذلك." },
        { wrong: "Stehen auf du!", right: "Steh auf!", whyAr: "مع du: Steh (جذر الفعل) + auf في النهاية — بدون -en." },
      ],
      relatedRuleComparison: {
        title: "الأمر بلطف: bitte وdoch",
        content: "أضف bitte لجعل الأمر طلباً مهذباً: Komm bitte! أو doch للتشجيع: Komm doch! — هذا ما يميز «الطلب» عن «الأمر الجاف».",
      },
    },
    {
      id: "t3",
      titleAr: "الأفعال الشاذة: تغيّر الصوت (e→i / a→ä) في المضارع",
      titleDe: "Der Vokalwechsel: essen – isst, lesen – liest, fahren – fährst",
      explanationAr:
        "بعض الأفعال الشائعة جداً تغيّر صوتها مع du وer/sie/es فقط: e تتحول إلى i (essen → du isst, er isst) أو إلى ie (lesen → du liest)، وa تتحول إلى ä (fahren → du fährst). لاحظ: مع ich وwir وihr وsie يعود الصوت الأصلي (ich esse، wir essen، wir fahren).",
      whyAr:
        "لماذا هذا التغيير؟ عادة صوتية من أقدم طبقات اللغة — لا تُشتق بقاعدة، لكنها محصورة في أفعال قليلة وشائعة جداً. لذلك نحفظها كـ«عائلات»: كل فعل يغيّر صوته نسميه شاذاً ونعرف أفراد أسرته.",
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
        { de: "Isst du gern Couscous?", ar: "هل تحب أكل الكسكس؟" },
        { de: "Er liest jeden Tag.", ar: "هو يقرأ كل يوم." },
        { de: "Du sprichst gut Deutsch!", ar: "أنتَ تتكلم الألمانية جيداً!" },
        { de: "Sie fährt mit dem Fahrrad.", ar: "هي تركب الدراجة." },
        { de: "Ich schlafe am Wochenende lange.", ar: "أنام طويلاً في عطلة نهاية الأسبوع." },
      ],
      comparisonWithArabic:
        "العربية تفعل شيئاً مشابهاً: «أنا آكُل» و«هم يَأكلون» — حركة الفعل تتغير مع الضمير. الألمانية تغيّر الحرف نفسه (e→i). الفكرة واحدة: الفعل «يلتفت» إلى الضمير.",
      eselsbruecke:
        "أغنية: «الشاذ الذي يبدأ بـ e أخوه i أو ie، والذي يبدأ بـ a أخوه ä». احفظ العائلات: essen/isst، lesen/liest، sprechen/spricht، fahren/fährt، schlafen/schläft.",
      commonMistakes: [
        { wrong: "du essst (بدل isst)", right: "du isst", whyAr: "essen مع du: e → i: isst." },
        { wrong: "er fahrt (بدل fährt)", right: "er fährt", whyAr: "fahren مع er: a → ä: fährt." },
        { wrong: "wir essest (تغيير مع wir)", right: "wir essen", whyAr: "التغيير مع du وer فقط — مع wir يعود الصوت الأصلي." },
      ],
      relatedRuleComparison: {
        title: "أين يحدث التغيير؟",
        content: "فقط مع du وer/sie/es (المفرد الثاني والثالث). مع ich وwir وihr وsie يبقى الجذر الأصلي: ich esse، wir essen، sie essen.",
      },
    },
    {
      id: "t4",
      titleAr: "الأفعال الناقصة الأولى: können (يستطيع) وmöchte (يودّ)",
      titleDe: "Die ersten Modalverben: können und möchte",
      explanationAr:
        "الأفعال الناقصة (Modalverben) تغيّر معنى الفعل الرئيسي: Ich kann schwimmen (أستطيع السباحة)، Ich möchte schwimmen (أود السباحة). التركيب: الفعل الناقص مصروف في المركز الثاني + المصدر في نهاية الجملة. لاحظ: مع du وer/sie/es تتغير النهاية: du kannst، er kann.",
      whyAr:
        "لماذا نتعلمها في A1؟ لأنها من أكثر الأفعال تواتراً في الحياة: «هل يمكنك...؟» «أودّ...» — للطلبات والدعوات والإمكانات. Goethe A1 يدرّسها رسمياً. المعالجة الكاملة لكل الأفعال الناقصة مع الفروق الدقيقة تأتي في A2.",
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
        { de: "Ich kann gut schwimmen.", ar: "أستطيع السباحة جيداً." },
        { de: "Kannst du morgen kommen?", ar: "هل تستطيع المجيء غداً؟" },
        { de: "Ich möchte einen Kaffee, bitte.", ar: "أود قهوة من فضلك." },
        { de: "Wir möchten am Samstag spielen.", ar: "نود اللعب يوم السبت." },
        { de: "Er kann sehr gut kochen.", ar: "هو يستطيع الطبخ جيداً جداً." },
        { de: "Ich muss heute noch lernen.", ar: "يجب أن أتعلم اليوم بعدُ." },
        { de: "Wir wollen am Samstag Fußball spielen.", ar: "نريد أن نلعب كرة القدم يوم السبت." },
      ],
      comparisonWithArabic:
        "العربية: «أستطيع أن أسبح» — فعلان متلازمان. الألمانية: Ich kann schwimmen — فعل ناقص + مصدر بلا «أن». والتشابه: «أودّ» = möchte تماماً في الطلبات المهذبة.",
      eselsbruecke:
        "«kann = قِن (يستطيع)» و«möchte = موخته (أودّ)» — كلمتا القدرة والطلب الأولى في حياتك الألمانية. اسأل نفسك كل صباح: Was kann ich heute machen?",
      commonMistakes: [
        { wrong: "Ich kann schwimmen zu.", right: "Ich kann schwimmen.", whyAr: "بعد الأفعال الناقصة لا zu إطلاقاً (التفاصيل في B1)." },
        { wrong: "du können (بدل kannst)", right: "du kannst", whyAr: "تصريف الناقصة: du kannst، er kann." },
        { wrong: "Ich möchte zu schwimmen gehen.", right: "Ich möchte schwimmen gehen.", whyAr: "المصدران معاً في نهاية الجملة بلا zu." },
      ],
      relatedRuleComparison: {
        title: "können أم möchten؟",
        content: "können = قدرة/إمكانية (أستطيع). möchte = رغبة/طلب مهذب (أودّ). Können Sie...؟ = هل يمكنكم...؟ Ich möchte... = أودّ... — الاثنتان أساسيتان في المقهى والمتجر والمواعيد.",
      },
    },
    {
      id: "t5",
      titleAr: "الماضي الأول: war (كان) وhatte (كان يملك)",
      titleDe: "Das erste Präteritum: war und hatte",
      explanationAr:
        "لتقول «كان» و«كان يملك» في الماضي تحتاج فعلين فقط: war (من sein) وhatte (من haben). Ich war in Berlin (كنت في برلين)، Ich hatte einen Termin (كان عندي موعد). هذه بداية الحديث عن الماضي — بقية الأزمنة تأتي في A2.",
      whyAr:
        "لماذا هذان الفعلان أولاً؟ لأن «كان» أساس كل حكاية: أين كنت؟ كيف كان الجو؟ ماذا كان عندك؟ Goethe A1 يدرّسها رسمياً في نهاية المستوى. مع war وhatte تستطيع سرد أول قصة قصيرة عن عطلة نهاية الأسبوع.",
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
        { de: "Am Wochenende war ich im Park.", ar: "في عطلة نهاية الأسبوع كنت في الحديقة." },
        { de: "Das Wetter war sehr schön.", ar: "كان الطقس جميلاً جداً." },
        { de: "Ich hatte gestern keine Zeit.", ar: "لم يكن لدي وقت أمس." },
        { de: "Wir waren am Samstag im Kino.", ar: "كنا يوم السبت في السينما." },
        { de: "Sie hatte viele Fragen.", ar: "كان لديها أسئلة كثيرة." },
      ],
      comparisonWithArabic:
        "العربية: «كان» نصرّفه في الماضي (كان، كانت، كانوا). الألمانية: war بنفس الفكرة: Ich war = كنتُ، wir waren = كنّا، du warst = كنتَ. تطابق مذهل مع فعل «كان» نفسه.",
      eselsbruecke:
        "«war = وَر (كان)» — كلمة السر الأولى لسرد الحكايات. و«hatte = هاتّه (كان يملك)». احفظهما كزوج: war/hatte = الماضي الأول.",
      commonMistakes: [
        { wrong: "ich warst (بدل war)", right: "ich war", whyAr: "مع ich: war (بلا s)." },
        { wrong: "du war (بدل warst)", right: "du warst", whyAr: "مع du: warst." },
        { wrong: "Ich habe einen Termin gehabt (بدل hatte)", right: "Ich hatte einen Termin.", whyAr: "في A1 يكفي hatte — التركيب المركّب (habe gehabt) يأتي في A2." },
      ],
      relatedRuleComparison: {
        title: "متى أقول hatte؟",
        content: "hatte = كان يملك/كان عنده: Ich hatte ein Fahrrad (كانت عندي دراجة). war = كان (للحالة والمكان): Ich war müde (كنت متعباً).",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "دعوة إلى المباراة",
        lines: [
          { speaker: "Karim", de: "Hallo Mona! Was machst du am Samstag?", ar: "مرحباً منى! ماذا تفعلين السبت؟" },
          { speaker: "Mona", de: "Am Samstag? Ich weiß nicht. Warum?", ar: "السبت؟ لا أعرف. لماذا؟" },
          { speaker: "Karim", de: "Ich spiele gern Fußball. Hast du Lust mitzukommen?", ar: "أحب لعب كرة القدم. هل لديك رغبة في المجيء معنا؟" },
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
    title: "أصوات الهوايات: h، ä، و-tion",
    items: [
      { de: "das Hobby", ar: "الهواية", note: "h في البداية = نَفَس خفيف: هوبي" },
      { de: "gern", ar: "بسرور", note: "g = غ: غيرن" },
      { de: "tanzen", ar: "يرقص", note: "tz = تس: تسانتسن" },
      { de: "hören", ar: "يستمع", note: "ö بشفتين مستديرتين: هُورِن" },
      { de: "die Musik", ar: "الموسيقى", note: "s في نهاية = س: موزيك" },
      { de: "fotografieren", ar: "يصور", note: "alle o واضحة: فوتوغرافيرن" },
    ],
    tip: "احذر: Musik تُنطق «موزيك» (بزاي!) لأن s بين حرفين علة — لكن die Musik في نهاية الكلمة s = س. استمع جيداً.",
    shadowing: [
      { de: "Ich spiele gern Tennis.", ar: "أحب لعب التنس.", tip: "spiele = شپيلِه (sp في البداية = شپ)" },
      { de: "Ich höre gern Musik.", ar: "أحب الاستماع للموسيقى.", tip: "höre = هُورِه (ö)" },
      { de: "Komm bitte um vier Uhr!", ar: "تعال في الرابعة من فضلك!", tip: "vier = فير (v=ف)" },
      { de: "Hast du Lust mitzukommen?", ar: "هل لديك رغبة في المجيء معنا؟", tip: "mitzukommen فعل منفصل: mit في البداية!" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب عن هوايتك المفضلة:",
      prompt: "Was machst du gern in deiner Freizeit? (اكتب جملة كاملة)",
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
      explanation: "مع ich: spiele. (gern بعد الفعل مباشرة).",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر صيغة الأمر الصحيحة (مع صديقك):",
      questionDe: "___ bitte hier!",
      questionAr: "تعال إلى هنا من فضلك!",
      options: ["Komm", "Kommt", "Kommen Sie", "Komme"],
      correctIndex: 0,
      explanation: "مع du: جذر الفعل Komm! بدون -st وبدون -e.",
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
      explanation: "Ich + höre (V2) + gern + Musik — gern بعد الفعل.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich gern spiele Tennis.",
      wrongWord: "gern spiele",
      correctWord: "spiele gern",
      options: ["spiele gern", "spielen gern", "gern spielst", "spielt gern"],
      explanation: "gern تأتي بعد الفعل المتصرف مباشرة: Ich spiele gern.",
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
      instructionAr: "حوّل الجملة إلى أمر مهذب مع Sie:",
      prompt: "Kommen Sie bitte! (حوّلها إلى أمر مع du)",
      acceptedAnswers: ["Komm bitte!", "Komm!"],
      sampleAnswer: "Komm bitte!",
      explanation: "مع du: نحذف Sie ونجرد الفعل: Komm bitte!",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Hast du Lust mitzukommen?",
      questionAr: "ما معنى السؤال؟",
      options: ["هل لديك رغبة في المجيء معنا؟", "هل تحب الطعام؟", "متى تأتي؟", "هل تحب الموسيقى؟"],
      correctIndex: 0,
      explanation: "Lust haben auf = رغبة + mitkommen = يأتي معاً.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Du kommst bitte! (أمر مع صديق)",
      wrongWord: "Du kommst",
      correctWord: "Komm",
      options: ["Komm", "Kommst", "Kommen", "Kommen Sie"],
      explanation: "الأمر مع du يحذف الضمير: Komm bitte!",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Wir spielen gern zusammen.",
      explanation: "نحب اللعب معاً — gern بعد الفعل spielen.",
      errorType: "spelling",
    },
    {
      id: "e11",
      type: "fill-blank",
      instructionAr: "صرف الفعل الشاذ بين قوسين (تغيّر الصوت):",
      instructionDe: "Konjugiere: essen, lesen, fahren",
      template: "Du ___ gern Pizza. (essen) · Er ___ ein Buch. (lesen) · Sie ___ mit dem Fahrrad. (fahren)",
      blanks: [
        { correct: "isst", options: ["isst", "esst", "essst", "isstst"] },
        { correct: "liest", options: ["liest", "lest", "leset", "list"] },
        { correct: "fährt", options: ["fährt", "fahrt", "fähert", "fähret"] },
      ],
      hint: "e → i (essen→isst) · e → ie (lesen→liest) · a → ä (fahren→fährt).",
      explanation: "isst (e→i)، liest (e→ie)، fährt (a→ä) — التغيير مع du وer فقط.",
      errorType: "conjugation",
      points: 2,
    },
    {
      id: "e12",
      type: "fill-blank",
      instructionAr: "أكمل بالفعل الناقص الصحيح (kann / kann / möchte / können):",
      instructionDe: "Ergänze: kann, kannst, möchte, können",
      template: "Ich ___ schwimmen. · ___ du morgen kommen? · Ich ___ einen Kaffee, bitte. · Wir ___ am Samstag spielen.",
      blanks: [
        { correct: "kann", options: ["kann", "kanne", "könnt", "kannst"] },
        { correct: "Kannst", options: ["Kannst", "Kann", "Können", "Könnt"] },
        { correct: "möchte", options: ["möchte", "möchtest", "möchten", "mag"] },
        { correct: "möchten", options: ["möchten", "möchte", "möchtest", "können"] },
      ],
      hint: "kann = أستطيع · kannst = تستطيع · möchte = أودّ · wir möchten = نودّ.",
      explanation: "Ich kann، Kannst du؟، Ich möchte، Wir möchten — الناقصة الأولى.",
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
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich gern spiele Fußball.", right: "Ich spiele gern Fußball.", whyAr: "gern بعد الفعل المتصرف مباشرة." },
      { wrong: "Du kommst! (أمر بضمير)", right: "Komm!", whyAr: "الأمر مع du/ihr يحذف الضمير." },
      { wrong: "Ich mag spielen gern.", right: "Ich spiele gern. / Ich mag Fußball.", whyAr: "لا تجمع mögen مع gern مع الفعل — اختر واحدة." },
    ],
    eselsbruecken: [
      "«gern بعد الفعل كابتسامة»: spiele gern، höre gern، lese gern.",
      "«أمر du = جذر الفعل»: kommst → Komm! أزل -st فقط.",
    ],
    culturalNote: {
      title: "نوادٍ رياضية (Vereine)",
      content:
        "الألمان ينضمون للنوادي الرياضية بكثرة: Fußballverein، Turnverein... وفيها يتعلم الأطفال النظام والصداقات. عبارة شائعة: «Ich bin im Fußballverein» — أنا في نادي كرة القدم. الهواية في ألمانيا شبه إلزامية اجتماعياً!",
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
      instructionAr: "صحّح الخطأ:",
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
      explanation: "Steh auf (du)، Steht auf (ihr)، Stehen Sie auf (Sie). البادئة في النهاية دائماً.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Freizeit", ar: "وقت الفراغ", example: "In meiner Freizeit lese ich.", exampleAr: "في وقت فراغي أقرأ.", level: "A1" },
    { id: "fc2", de: "das Hobby", ar: "الهواية", example: "Mein Hobby ist Fußball.", exampleAr: "هوايتي كرة القدم.", level: "A1" },
    { id: "fc3", de: "gern / gerne", ar: "بسرور / يحب أن", example: "Ich spiele gern Tennis.", exampleAr: "أحب لعب التنس.", level: "A1" },
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
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-06-1", type: "simplify-announcement",
      titleAr: "بسّط دعوة لنشاط رياضي بالعربية",
      sourceDe: "Wir spielen am Samstag um 15 Uhr Fußball im Park. Komm doch mit! Bring deine Freunde mit.",
      taskAr: "انقل الدعوة بالعربية لصديق: اليوم، الوقت، المكان، وما يجب إحضاره.",
      modelAnswerAr: "«نلعب كرة القدم السبت الساعة 3 عصراً في الحديقة. تعال معنا! وأحضر أصدقاءك.»",
      keyPointsAr: ["نقلت اليوم (السبت) والوقت (3)", "ذكرت المكان (الحديقة)", "نقلت دعوة الأصدقاء"],
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