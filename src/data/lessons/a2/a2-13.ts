import type { Lesson } from "@/types/lesson";

/**
 * الدرس A2-13: A2 kompakt — الجسر إلى B1 (خاتمة المستوى)
 *
 * سبب وجود هذا الدرس (تدقيق 2026-08، بطاقة a2-12): كان A1 يُختم بمراجعة
 * شاملة (a1-13)، وB1 بـ(b1-11)، وB2 بـ(b2-10) — بينما ينتقل المتعلّم من
 * a2-12 إلى b1-01 مباشرةً بلا محطة دمج. فتبقى قواعد A2 الكبرى (Perfekt،
 * الأفعال الناقصة، Dativ، المقارنة، Präteritum) مُدرَّسةً كلٌّ في وحدتها
 * ولا تُجمع في جملة واحدة أبداً. هذا الدرس يجمعها ثم يُسلّمها لـ B1.
 */
export const lessonA213: Lesson = {
  id: "a2-13",
  unitId: "a2-13",
  level: "A2",
  order: 1,
  titleDe: "A2 kompakt — die Brücke nach B1",
  titleAr: "A2 الشاملة — الجسر إلى B1",
  duration: 35,
  summary:
    "المراجعة الختامية لمستوى A2: الماضي التام (Perfekt)، الأفعال الناقصة، حروف الجر المتغيرة، الماضي البسيط war/hatte، الجمل الثانوية (dass, weil, wenn, ob)، حالة الجر Dativ، المقارنة والتفضيل، والأفعال الانعكاسية — مدموجةً في مواقف حية، مع اختبار تجميعي وتمهيد صريح لما يتغيّر في B1.",

  /* 1) الأهداف التعليمية */
  lernziele: [
    { id: "z1", de: "Ich kann alle A2-Strukturen in einem Text kombinieren.", ar: "أن أجمع كل تراكيب A2 في نص واحد مترابط." },
    { id: "z2", de: "Ich kann über die Vergangenheit mit Perfekt und Präteritum erzählen.", ar: "أن أحكي عن الماضي بالماضي التام والماضي البسيط معاً." },
    { id: "z3", de: "Ich kann meine Meinung mit Nebensätzen begründen.", ar: "أن أعلّل رأيي بجمل ثانوية (weil, dass, obwohl)." },
    { id: "z4", de: "Ich bin bereit für die B1-Grammatik.", ar: "أن أكون جاهزاً لقواعد B1." },
  ],

  /* 2) التمهيد وتنشيط المعرفة السابقة */
  einfuehrung: {
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
  },

  /* مراجعة تراكمية: بنود من وحدات A2 السابقة، كلٌّ يسمّي درسه المصدر */
  review: [
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
  ],

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "خريطة قواعد A2 — الاثنا عشر مفتاحاً في جدول واحد",
      titleDe: "Die A2-Grammatik auf einen Blick",
      explanationAr:
        "كل ما دُرِّس في A2 يعود إلى اثني عشر مفتاحاً: 1) الماضي التام Perfekt بـ haben/sein، 2) الأفعال الناقصة (sollen, möchten, können)، 3) حروف الجر المتغيّرة التسعة (سكون Dativ / حركة Akkusativ)، 4) الماضي البسيط war/hatte، 5) الجملة الثانوية بـ dass، 6) es gibt + النصب وضمائر النصب والجر، 7) المقارنة والتفضيل، 8) حالة الجر Dativ وأفعالها، 9) weil / wenn / ob، 10) الضمائر الملكية في كل الحالات، 11) الأفعال الانعكاسية (mich / mir)، 12) أدوات الربط وobwohl.",
      whyAr:
        "لماذا خريطة واحدة؟ لأن المتعلّم درس كل مفتاح في وحدته منفصلاً، فصار يعرف Perfekt حين يُسأل عن Perfekt فقط. الامتحان — والحياة — لا تسأل هكذا: تطلب جملة واحدة فيها ماضٍ وتعليل وحالة جر معاً. جمعُ المفاتيح في صفحة واحدة هو ما يحوّل المعرفة المتفرّقة إلى قدرة.",
      table: {
        title: "المفاتيح الاثنا عشر لمستوى A2",
        columns: ["القاعدة", "المثال", "الوحدة"],
        rows: [
          { label: "الماضي التام Perfekt", cells: ["Ich habe gearbeitet. Ich bin gefahren.", "a2-01"] },
          { label: "الأفعال الناقصة", cells: ["Du sollst viel trinken. Ich möchte bestellen.", "a2-02 / a2-03"] },
          { label: "حروف الجر المتغيّرة", cells: ["Das Buch liegt auf dem Tisch.", "a2-04"] },
          { label: "الماضي البسيط war / hatte", cells: ["Gestern war ich krank. Ich hatte Fieber.", "a2-05"] },
          { label: "الجملة الثانوية بـ dass", cells: ["Ich glaube, dass er heute kommt.", "a2-06"] },
          { label: "es gibt + النصب", cells: ["Hier gibt es einen Automaten.", "a2-07"] },
          { label: "المقارنة والتفضيل", cells: ["Der Zug ist schneller als der Bus.", "a2-08"] },
          { label: "حالة الجر Dativ", cells: ["Ich helfe meinem Bruder.", "a2-09"] },
          { label: "weil / wenn / ob", cells: ["Ich lerne, weil ich die Prüfung brauche.", "a2-10"] },
          { label: "الضمائر الملكية", cells: ["Das ist meine Schwester.", "a2-10"] },
          { label: "الأفعال الانعكاسية", cells: ["Ich freue mich auf den Urlaub.", "a2-11"] },
          { label: "الربط وobwohl", cells: ["Ich bin müde, trotzdem lerne ich.", "a2-12"] },
        ],
      },
      examples: [
        { de: "Letztes Wochenende bin ich nach Hamburg gefahren.", ar: "نهاية الأسبوع الماضية سافرتُ إلى هامبورغ." },
        { de: "Ich habe meiner Schwester ein Buch geschenkt.", ar: "أهديتُ أختي كتاباً." },
        { de: "Ich glaube, dass Deutsch schwerer als Englisch ist.", ar: "أعتقد أن الألمانية أصعب من الإنجليزية." },
        { de: "Gestern war ich krank, deshalb bin ich zu Hause geblieben.", ar: "أمس كنت مريضاً، لذلك بقيتُ في البيت." },
        { de: "Ich freue mich auf den Urlaub, obwohl die Reise teuer ist.", ar: "أتطلّع إلى العطلة رغم أن الرحلة غالية." },
      ],
      comparisonWithArabic:
        "العربية تبني الماضي بصيغة واحدة («سافرتُ»)، والألمانية توزّعه على ثلاثة: Perfekt للحكي المحكي (ich bin gefahren)، وwar/hatte للحالة (ich war müde)، وPräteritum الكامل للكتابة (يأتي في B1). هذا هو أكبر فارق بنيوي جمعه A2.",
      eselsbruecke:
        "اختصار الاثني عشر: «PMW-PDN-KDR-PIO» ثقيل. الأسهل: احفظ جملة الختام «Gestern war ich krank, deshalb bin ich nicht gekommen, obwohl ich meinem Chef geholfen habe» — فيها Präteritum وربط وPerfekt وobwohl وDativ: خمسة مفاتيح في نفَس واحد.",
      commonMistakes: [
        { wrong: "Ich habe nach Berlin gefahren.", right: "Ich bin nach Berlin gefahren.", whyAr: "أفعال الحركة وتغيّر المكان تأخذ sein لا haben في الماضي التام." },
        { wrong: "Ich helfe meinen Bruder.", right: "Ich helfe meinem Bruder.", whyAr: "helfen من أفعال الجر Dativ، فالمذكر يصير meinem لا meinen." },
        { wrong: "Ich bleibe zu Hause, weil ich bin krank.", right: "Ich bleibe zu Hause, weil ich krank bin.", whyAr: "بعد weil تُدفع الصيغة المصرَّفة إلى آخر الجملة الثانوية." },
      ],
      relatedRuleComparison: {
        title: "أتقنت A2؟ اختبر نفسك",
        content:
          "أنت جاهز لـ B1 إذا استطعت — بلا تفكير طويل — أن تحكي عطلةً ماضية بـ Perfekt، وتعلّل قراراً بـ weil، وتقارن خيارين بـ als، وتطلب خدمة بأدب مع Dativ. إن تعثّرت في واحدة، ارجع إلى وحدتها في الجدول أعلاه قبل بدء B1.",
      },
    },
    {
      id: "t2",
      titleAr: "دمج تراكيب A2 في موقف واحد: المرض والاعتذار عن العمل",
      titleDe: "A2-Strukturen in einer Situation verbinden",
      explanationAr:
        "الموقف الواحد يستدعي عدة قواعد معاً. «كنتُ مريضاً فاعتذرتُ عن العمل» يحتاج: Präteritum للحالة (ich war krank)، وPerfekt للحدث (ich bin zum Arzt gegangen)، وweil للتعليل، وModalverb للنصيحة (ich soll mich ausruhen)، وDativ للمخاطَب (ich habe meinem Chef geschrieben). هذا هو شكل اللغة الحقيقي: لا قاعدة واحدة في كل مرة.",
      whyAr:
        "لماذا الموقف لا القاعدة؟ لأن الذاكرة تسترجع اللغة بالسياق: حين تحتاج الاعتذار عن العمل غداً، لن يخطر ببالك «قاعدة weil» بل جملة سمعتها في موقف مشابه. تدريب المواقف يخزّن الجمل حيث ستُطلب فعلاً.",
      table: {
        title: "من العَرَض إلى الاعتذار: خمس خطوات وخمس قواعد",
        columns: ["المرحلة", "الجملة الألمانية", "القاعدة المستعملة"],
        rows: [
          { label: "1. وصف الحالة", cells: ["Gestern Abend war ich sehr müde.", "Präteritum: war"] },
          { label: "2. سرد ما حدث", cells: ["Heute Morgen bin ich zum Arzt gegangen.", "Perfekt مع sein"] },
          { label: "3. التعليل", cells: ["Ich rufe an, weil ich Fieber habe.", "Nebensatz mit weil"] },
          { label: "4. نقل النصيحة", cells: ["Der Arzt sagt, ich soll zu Hause bleiben.", "Modalverb sollen"] },
          { label: "5. الاعتذار كتابةً", cells: ["Ich habe meinem Chef eine E-Mail geschrieben.", "Dativ: meinem Chef"] },
        ],
      },
      examples: [
        { de: "Gestern Abend war ich sehr müde und hatte Kopfschmerzen.", ar: "مساء أمس كنت متعباً جداً وأصابني صداع." },
        { de: "Heute Morgen bin ich zum Arzt gegangen.", ar: "هذا الصباح ذهبتُ إلى الطبيب." },
        { de: "Ich rufe Sie an, weil ich heute nicht kommen kann.", ar: "أتصل بكم لأنني لا أستطيع الحضور اليوم." },
        { de: "Der Arzt sagt, ich soll drei Tage zu Hause bleiben.", ar: "يقول الطبيب إنّ عليّ البقاء في البيت ثلاثة أيام." },
        { de: "Ich habe meinem Chef schon eine E-Mail geschrieben.", ar: "كتبتُ لرئيسي رسالة إلكترونية بالفعل." },
      ],
      comparisonWithArabic:
        "العربية تعتذر بجملة اسمية قصيرة غالباً («أنا مريض اليوم»)، والألمانية تتوقّع سرداً قصيراً بالتسلسل الزمني ثم التعليل ثم الإجراء. الاكتفاء بـ «Ich bin krank» مفهوم، لكنه في السياق المهني الألماني يبدو ناقصاً لا مقتضباً.",
      eselsbruecke:
        "رتّب أي موقف بالسلّم الخماسي: حالة ← حدث ← سبب ← نصيحة ← إجراء. الترتيب واحد في المرض والتأخّر والاعتذار عن موعد — تتغيّر المفردات وحدها.",
      commonMistakes: [
        { wrong: "Ich bin krank, weil ich habe Fieber.", right: "Ich bin krank, weil ich Fieber habe.", whyAr: "weil تدفع الفعل المصرَّف إلى النهاية: habe في آخر الجملة الثانوية." },
        { wrong: "Ich habe zum Arzt gegangen.", right: "Ich bin zum Arzt gegangen.", whyAr: "gehen فعل حركة ⇒ الماضي التام بـ sein." },
        { wrong: "Ich habe mein Chef geschrieben.", right: "Ich habe meinem Chef geschrieben.", whyAr: "schreiben + شخص = Dativ (لمن كتبتُ؟) ⇒ meinem Chef." },
      ],
      relatedRuleComparison: {
        title: "الاتصال أم الرسالة؟",
        content:
          "في ألمانيا يُتوقَّع الإبلاغ عن المرض قبل بداية الدوام هاتفياً (sich krankmelden)، والرسالة الإلكترونية تأتي تأكيداً. الشهادة الطبية (Krankschreibung / AU) تُطلب عادةً من اليوم الرابع، وبعض العقود تشترطها من اليوم الأول — راجع عقدك.",
      },
    },
    {
      id: "t3",
      titleAr: "ما الذي يتغيّر فعلاً في B1؟ خريطة الجسر",
      titleDe: "Von A2 nach B1 — was sich ändert",
      explanationAr:
        "B1 لا يبدأ من الصفر: يأخذ كل تركيب في A2 ويضيف إليه طبقة. المِلكية عبر von + Dativ تصير Genitiv، والجملتان المتجاورتان تصيران جملة موصولة، وسردُ الماضي بالحكي يصير سرداً مكتوباً بـ Präteritum الكامل، والتمنّي بـ möchte يصير Konjunktiv II، والفاعل المجهول بـ man يصير Passiv. من يعرف A2 جيداً يتعلّم B1 كتوسيع لا كبداية.",
      whyAr:
        "لماذا نعرض B1 الآن؟ لأن أكثر ما يُحبط المتعلّم عند القفزة هو الشعور بأن كل شيء تغيّر. رؤية الخريطة مسبقاً تُظهر العكس: خمس توسعات محدّدة على أساس تعرفه. هذا الإطار المسبق (advance organizer) يخفّض الحمل المعرفي في أول درس B1.",
      table: {
        title: "خمس توسعات من A2 إلى B1",
        columns: ["الظاهرة", "كما تعلّمتها في A2", "كما تصير في B1"],
        rows: [
          { label: "المِلكية", cells: ["der Bruder von meinem Freund", "der Bruder meines Freundes (Genitiv)"] },
          { label: "وصف الاسم", cells: ["Das ist mein Bruder. Er wohnt in Bonn.", "Das ist mein Bruder, der in Bonn wohnt."] },
          { label: "سرد الماضي", cells: ["Ich habe gearbeitet.", "Ich arbeitete (Präteritum في الكتابة)"] },
          { label: "التمنّي والتأدّب", cells: ["Ich möchte einen Kaffee.", "Ich hätte gern einen Kaffee / Ich würde gern bleiben."] },
          { label: "الفاعل المجهول", cells: ["Man repariert das Auto.", "Das Auto wird repariert (Passiv)."] },
        ],
      },
      examples: [
        { de: "A2: Das ist der Bruder von meinem Freund.", ar: "A2: هذا أخو صديقي." },
        { de: "B1: Das ist der Bruder meines Freundes.", ar: "B1: هذا أخو صديقي (بصيغة المضاف إليه)." },
        { de: "A2: Ich habe die Prüfung gemacht.", ar: "A2: أدّيتُ الامتحان." },
        { de: "B1: Ich hoffe, dass ich die Prüfung bestehe.", ar: "B1: آمل أن أجتاز الامتحان." },
        { de: "Wer A2 sicher kann, lernt B1 als Erweiterung.", ar: "من يتقن A2 يتعلّم B1 توسيعاً لا بداية جديدة." },
      ],
      comparisonWithArabic:
        "المضاف إليه في العربية بسيط ومباشر («كتابُ الطالبِ») بلا أداة، وهو أقرب إلى Genitiv الألماني منه إلى تركيب von. المفارقة أن المتعلّم العربي يجد Genitiv في B1 أسهل من الالتفاف بـ von الذي تدرّب عليه في A2.",
      eselsbruecke:
        "الجسر خمس دعامات: مِلكية، وصف، سرد، تمنٍّ، مجهول. عدّها على أصابع يد واحدة قبل أول درس B1، وستعرف بالضبط ما ينتظرك — لا أكثر.",
      commonMistakes: [
        { wrong: "der Bruder von meines Freundes", right: "der Bruder meines Freundes", whyAr: "إمّا von + Dativ (أسلوب A2) وإمّا Genitiv وحده، لا الاثنان معاً." },
        { wrong: "Das ist mein Bruder, der wohnt in Bonn.", right: "Das ist mein Bruder, der in Bonn wohnt.", whyAr: "الجملة الموصولة جملة ثانوية: الفعل في آخرها، تماماً كقاعدة weil التي تعرفها." },
      ],
      relatedRuleComparison: {
        title: "متى أبدأ B1؟",
        content:
          "المعيار ليس إنهاء الوحدات بل الأداء: أن تكتب رسالة من ثمانية أسطر فيها ماضٍ وتعليل بلا توقّف طويل، وأن تفهم رسالة صوتية عادية من أول استماع. إن لم يتحقّق هذا بعد، فإعادة a2-05 وa2-10 أنفع من التسرّع إلى b1-01.",
      },
    },
  ],

  /* 4) الاستماع */
  listening: {
    items: [
      {
        id: "l1",
        title: "الإبلاغ عن المرض في العمل",
        lines: [
          { speaker: "Herr Weber", de: "Firma Nordwind, Weber am Apparat.", ar: "شركة نوردفيند، فيبر يتحدث." },
          { speaker: "Sami", de: "Guten Morgen, Herr Weber. Hier ist Sami. Ich kann heute leider nicht kommen.", ar: "صباح الخير سيد فيبر. معك سامي. للأسف لا أستطيع الحضور اليوم." },
          { speaker: "Herr Weber", de: "Oh, was ist denn passiert?", ar: "أوه، ماذا حدث؟" },
          { speaker: "Sami", de: "Gestern Abend war ich sehr müde, und heute habe ich Fieber. Ich bin schon zum Arzt gegangen.", ar: "مساء أمس كنت متعباً جداً، واليوم عندي حمّى. ذهبتُ إلى الطبيب بالفعل." },
          { speaker: "Herr Weber", de: "Und was sagt der Arzt?", ar: "وماذا يقول الطبيب؟" },
          { speaker: "Sami", de: "Er sagt, ich soll drei Tage zu Hause bleiben. Ich schicke Ihnen die Krankmeldung per E-Mail.", ar: "يقول إنّ عليّ البقاء في البيت ثلاثة أيام. سأرسل لكم إشعار المرض بالبريد." },
        ],
      },
      {
        id: "l2",
        title: "قبل امتحان A2",
        lines: [
          { speaker: "Lena", de: "Und, bist du bereit für die Prüfung am Freitag?", ar: "وهل أنت جاهز لامتحان الجمعة؟" },
          { speaker: "Yasmin", de: "Ich glaube schon. Ich habe jeden Abend zwei Stunden gelernt.", ar: "أظن ذلك. تعلّمتُ ساعتين كل مساء." },
          { speaker: "Lena", de: "Was war für dich am schwersten?", ar: "ما كان الأصعب بالنسبة لك؟" },
          { speaker: "Yasmin", de: "Der Dativ. Aber jetzt ist er leichter als am Anfang.", ar: "حالة الجر. لكنها الآن أسهل مما كانت في البداية." },
          { speaker: "Lena", de: "Und danach? Machst du weiter mit B1?", ar: "وبعدها؟ هل تكمل إلى B1؟" },
          { speaker: "Yasmin", de: "Ja, obwohl ich ein bisschen Angst habe. Aber ich freue mich auch darauf.", ar: "نعم، رغم أنني خائفة قليلاً. لكنني أتطلّع إلى ذلك أيضاً." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Warum ruft Sami an?",
        questionAr: "لماذا يتصل سامي؟",
        options: ["Er ist krank und kommt nicht.", "Er kommt später.", "Er sucht Herrn Weber.", "Er will Urlaub nehmen."],
        correctIndex: 0,
        explanation: "قال سامي: Ich kann heute leider nicht kommen — ثم علّل بالحمّى.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was soll Sami machen?",
        questionAr: "ماذا ينبغي على سامي أن يفعل؟",
        options: ["drei Tage zu Hause bleiben", "sofort arbeiten", "am Freitag anrufen", "ins Büro kommen"],
        correctIndex: 0,
        explanation: "نقل سامي نصيحة الطبيب: ich soll drei Tage zu Hause bleiben.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was war für Yasmin am schwersten?",
        questionAr: "ما كان الأصعب على ياسمين؟",
        options: ["der Dativ", "das Perfekt", "die Aussprache", "die Zahlen"],
        correctIndex: 0,
        explanation: "قالت ياسمين: Der Dativ. Aber jetzt ist er leichter als am Anfang.",
        errorType: "vocabulary",
      },
      {
        id: "q4",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie oft hat Yasmin gelernt?",
        questionAr: "كم تعلّمت ياسمين؟",
        options: ["jeden Abend zwei Stunden", "einmal pro Woche", "nur am Wochenende", "drei Stunden am Morgen"],
        correctIndex: 0,
        explanation: "قالت: Ich habe jeden Abend zwei Stunden gelernt.",
        errorType: "vocabulary",
      },
    ],
  },

  /* 5) النطق */
  pronunciation: {
    id: "p1",
    title: "أصوات A2: ei، äu، pf، وtz",
    items: [
      { de: "die Arbeit", ar: "العمل", note: "ei = آي (لا «إي»): أَر-بايت" },
      { de: "die Häuser", ar: "البيوت", note: "äu = أوْي مثل eu تماماً: هوي-زَر" },
      { de: "der Apfel", ar: "التفاحة", note: "pf = صوت واحد مركّب: أَبْفِل بلا فاصل بين الحرفين" },
      { de: "jetzt", ar: "الآن", note: "tz = تس قصيرة حادة: يِتْست" },
      { de: "der Termin", ar: "الموعد", note: "الشدّة على المقطع الثاني: تِر-مِين، والراء حلقية خفيفة" },
      { de: "die Prüfung", ar: "الامتحان", note: "ü = ضمّ الشفتين مع نطق «إي»: بْرُوي-فونغ" },
    ],
    tip: "هذه الأصوات الأربعة تتكرّر في مفردات A2 اليومية (Arbeit, Häuser, Apfel, jetzt). سجّل صوتك وأنت تقرأ الجمل، ثم قارنه بالنموذج — الفارق يُسمع فوراً في pf وtz تحديداً.",
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "حوّل الجملة إلى الماضي التام (Perfekt):",
      prompt: "Ich arbeite bis 18 Uhr. → Gestern ...",
      acceptedAnswers: [
        "Gestern habe ich bis 18 Uhr gearbeitet.",
        "Gestern habe ich bis achtzehn Uhr gearbeitet.",
      ],
      sampleAnswer: "Gestern habe ich bis 18 Uhr gearbeitet.",
      explanation: "arbeiten فعل ضعيف بلا حركة ⇒ haben + gearbeitet، والفعل المساعد في المركز الثاني بعد Gestern.",
      errorType: "conjugation",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل النص القصير (أربع قواعد من A2 في فقرة واحدة):",
      template: "Gestern ___ ich krank. (كنت) · Ich ___ zum Arzt gegangen. (ذهبتُ) · Ich bleibe zu Hause, ___ ich Fieber habe. (لأنني) · Ich habe ___ Chef geschrieben. (لرئيسي)",
      blanks: [
        { correct: "war", options: ["war", "bin", "habe", "hatte"] },
        { correct: "bin", options: ["bin", "habe", "war", "wurde"] },
        { correct: "weil", options: ["weil", "denn", "dass", "wenn"] },
        { correct: "meinem", options: ["meinem", "meinen", "mein", "meines"] },
      ],
      hint: "war (حالة) · bin + gegangen (حركة) · weil (يدفع الفعل للنهاية) · schreiben + شخص = Dativ.",
      explanation: "Gestern war ich krank. Ich bin zum Arzt gegangen. Ich bleibe zu Hause, weil ich Fieber habe. Ich habe meinem Chef geschrieben.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Ich freue mich auf B1, obwohl die Grammatik schwerer wird.",
      explanation: "أتطلّع إلى B1 رغم أن القواعد تصير أصعب — sich freuen auf + obwohl (الفعل في النهاية).",
      errorType: "spelling",
    },
  ],

  /* 7) بنك تدريبات تفاعلية واسع */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المساعد الصحيح للماضي التام:",
      questionDe: "Am Samstag ___ wir im Park spazieren gegangen.",
      questionAr: "يوم السبت تمشّينا في الحديقة.",
      options: ["sind", "haben", "waren", "hatten"],
      correctIndex: 0,
      explanation: "gehen فعل حركة ⇒ sein: wir sind gegangen.",
      errorType: "conjugation",
    },
    {
      id: "e2",
      type: "fill-blank",
      instructionAr: "أكمل بحالة الجر أو النصب حسب الحركة والسكون:",
      template: "Das Handy liegt auf ___ Tisch. (سكون) · Ich lege es in ___ Tasche. (حركة)",
      blanks: [
        { correct: "dem", options: ["dem", "den", "der", "das"] },
        { correct: "die", options: ["die", "der", "dem", "den"] },
      ],
      hint: "liegen = أين؟ ⇒ Dativ · legen = إلى أين؟ ⇒ Akkusativ.",
      explanation: "auf dem Tisch (سكون، Dativ) · in die Tasche (حركة، Akkusativ للمؤنث die).",
      errorType: "case",
    },
    {
      id: "e3",
      type: "multiple-choice",
      instructionAr: "اختر صيغة المقارنة الصحيحة:",
      questionDe: "Mit dem Fahrrad bin ich ___ als mit dem Bus.",
      questionAr: "بالدراجة أكون أسرع من الحافلة.",
      options: ["schneller", "schnell", "am schnellsten", "schnellere"],
      correctIndex: 0,
      explanation: "المقارنة بين شيئين: صفة + er + als ⇒ schneller als.",
      errorType: "grammar",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة الثانوية (انتبه لموضع الفعل):",
      tokens: ["Hause", "Ich", "bleibe", "zu", "weil", "Fieber", "ich", "habe", "."],
      correctSentence: "Ich bleibe zu Hause, weil ich Fieber habe.",
      explanation: "weil تدفع الفعل المصرَّف habe إلى آخر الجملة الثانوية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "fill-blank",
      instructionAr: "أكمل بالماضي البسيط (war / hatte):",
      template: "Letzten Winter ___ ich in Wien. (كنت) · Ich ___ dort viele Freunde. (كان لديّ)",
      blanks: [
        { correct: "war", options: ["war", "warst", "waren", "wart"] },
        { correct: "hatte", options: ["hatte", "hattest", "hatten", "hattet"] },
      ],
      hint: "مع ich: war وhatte بلا نهاية.",
      explanation: "Letzten Winter war ich in Wien. Ich hatte dort viele Freunde.",
      errorType: "conjugation",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Ich habe gestern nach Berlin gefahren.",
      wrongWord: "habe",
      correctWord: "bin",
      options: ["bin", "habe", "war", "wurde"],
      explanation: "fahren فعل حركة وتغيّر مكان ⇒ الماضي التام بـ sein: Ich bin gefahren.",
      errorType: "conjugation",
    },
    {
      id: "e7",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Ich helfe meinen Bruder bei den Hausaufgaben.",
      wrongWord: "meinen",
      correctWord: "meinem",
      options: ["meinem", "meinen", "meiner", "meines"],
      explanation: "helfen من أفعال الجر (Dativ-Verben) ⇒ المذكر meinem لا meinen.",
      errorType: "case",
    },
    {
      id: "e8",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في الجملة:",
      wrongSentence: "Ich glaube, dass er kommt heute nicht.",
      wrongWord: "kommt heute nicht",
      correctWord: "heute nicht kommt",
      options: ["heute nicht kommt", "kommt heute nicht", "nicht heute kommt", "kommt nicht heute"],
      explanation: "dass جملة ثانوية ⇒ الفعل المصرَّف في النهاية: dass er heute nicht kommt.",
      errorType: "word-order",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "افحص الجملة: إن وجدت خطأً فاختر تصحيحه، وإلا فاختر «لا خطأ».",
      wrongSentence: "Ich freue mich auf das Wochenende.",
      wrongWord: "freue mich",
      correctWord: "freue mich",
      options: ["freue mich", "freut mich", "freue mir", "freue"],
      isAlreadyCorrect: true,
      explanation: "sich freuen auf + Akkusativ فعل انعكاسي بضمير النصب mich، والجملة سليمة كما هي.",
      errorType: "pronoun",
    },
    {
      id: "e10",
      type: "matching",
      instructionAr: "صِل كل تركيب A2 بمثاله:",
      pairs: [
        { left: "Ich bin nach Köln geflogen.", right: "الماضي التام مع sein" },
        { left: "Ich helfe meinem Nachbarn.", right: "حالة الجر Dativ" },
        { left: "Ich lerne, weil ich die Prüfung brauche.", right: "جملة ثانوية بـ weil" },
        { left: "Der Zug ist schneller als der Bus.", right: "المقارنة بـ als" },
      ],
      explanation: "أربعة مفاتيح من A2: Perfekt، Dativ، weil، والمقارنة.",
      errorType: "grammar",
    },
  ],

  /* 8) الأخطاء الشائعة والتريكات + لقطة ثقافية */
  fehlerUndTipps: {
    mistakes: [
      { wrong: "Ich habe nach Hause gegangen.", right: "Ich bin nach Hause gegangen.", whyAr: "حركة أو تغيّر مكان أو حال ⇒ sein: gehen, fahren, fliegen, kommen, bleiben, werden." },
      { wrong: "Ich denke, dass er ist nett.", right: "Ich denke, dass er nett ist.", whyAr: "كل جملة ثانوية (dass, weil, wenn, ob, obwohl) تضع الفعل المصرَّف في آخرها." },
      { wrong: "Das gefällt mich.", right: "Das gefällt mir.", whyAr: "gefallen من أفعال الجر: يُعجب لِمن؟ ⇒ mir لا mich." },
      { wrong: "Ich bin älter wie mein Bruder.", right: "Ich bin älter als mein Bruder.", whyAr: "المقارنة بالتفاوت تستعمل als؛ وwie للتساوي فقط: so alt wie." },
    ],
    eselsbruecken: [
      "جملة الختام الجامعة: «Gestern war ich krank, deshalb bin ich zu Hause geblieben, obwohl ich meinem Chef helfen wollte.» — خمسة مفاتيح: Präteritum، ربط، Perfekt، obwohl، Dativ.",
      "أفعال sein في الماضي التام: كل ما يُرسم بسهم على الخريطة (gehen, fahren, fliegen, kommen) + الاستثناءان bleiben وwerden.",
      "قبل امتحان A2: راجع الجدول الأول في هذا الدرس صفاً صفاً، وحوّل كل مثال إلى جملة عن حياتك أنت — التخصيص يثبّت أكثر من التكرار.",
    ],
    culturalNote: {
      title: "شهادة A2 وما بعدها",
      content:
        "«Goethe-Zertifikat A2» و«Start Deutsch 2» يُقبلان لأغراض لمّ شمل الأسرة في كثير من الحالات، لكن الإقامة الدائمة (Niederlassungserlaubnis) تتطلّب عادةً B1، وكذلك التجنيس. أي أن A2 محطة قانونية حقيقية لا شكلية — والخطوة التالية B1 هي التي تفتح أكثر الأبواب.",
    },
  },

  /* 9) اختبار مصغّر */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر الفعل المساعد الصحيح:",
      questionDe: "Meine Eltern ___ letzte Woche nach Italien gefahren.",
      questionAr: "سافر والداي الأسبوع الماضي إلى إيطاليا.",
      options: ["sind", "haben", "waren", "hatten"],
      correctIndex: 0,
      explanation: "fahren حركة ⇒ sein: sie sind gefahren.",
      errorType: "conjugation",
    },
    {
      id: "m2",
      type: "fill-blank",
      instructionAr: "أكمل بالضمير أو الأداة في حالة الجر:",
      template: "Das Kleid gefällt ___ sehr. (يعجبني) · Ich danke ___ Kollegin für die Hilfe. (الزميلة)",
      blanks: [
        { correct: "mir", options: ["mir", "mich", "ich", "meiner"] },
        { correct: "der", options: ["der", "die", "den", "das"] },
      ],
      explanation: "gefallen وdanken فعلان يطلبان Dativ: gefällt mir · danke der Kollegin.",
      errorType: "case",
    },
    {
      id: "m3",
      type: "multiple-choice",
      instructionAr: "اختر أداة الربط الصحيحة:",
      questionDe: "Ich gehe heute nicht ins Kino, ___ ich kein Geld habe.",
      questionAr: "لن أذهب إلى السينما اليوم لأنه ليس معي مال.",
      options: ["weil", "denn ich", "deshalb", "obwohl"],
      correctIndex: 0,
      explanation: "التعليل مع فعل في النهاية (habe) ⇒ weil. لو أردنا denn لبقي الترتيب عادياً: denn ich habe kein Geld.",
      errorType: "grammar",
    },
    {
      id: "m4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Arzt", "Ich", "zum", "gegangen", "bin", "heute", "."],
      correctSentence: "Ich bin heute zum Arzt gegangen.",
      explanation: "Perfekt مع sein: الفعل المساعد bin في المركز الثاني، وgegangen في النهاية.",
      errorType: "word-order",
    },
    {
      id: "m5",
      type: "multiple-choice",
      instructionAr: "اختر الضمير الانعكاسي الصحيح:",
      questionDe: "Wir ___ uns auf die Ferien.",
      questionAr: "نتطلّع إلى العطلة.",
      options: ["freuen", "freut", "freust", "freue"],
      correctIndex: 0,
      explanation: "مع wir: freuen uns — الفعل الانعكاسي يوافق الفاعل في التصريف والضمير معاً.",
      errorType: "conjugation",
    },
  ],

  /* 10) بطاقات المراجعة */
  flashcards: [
    { id: "fc1", de: "die Brücke", ar: "الجسر", example: "A2 ist die Brücke nach B1.", exampleAr: "A2 هو الجسر إلى B1.", level: "A2" },
    { id: "fc2", de: "zusammenfassen", ar: "يلخّص/يجمع", example: "Ich fasse die Regeln zusammen.", exampleAr: "ألخّص القواعد.", level: "A2" },
    { id: "fc3", de: "bestehen", ar: "يجتاز (امتحاناً)", example: "Ich möchte die Prüfung bestehen.", exampleAr: "أريد اجتياز الامتحان.", level: "A2" },
    { id: "fc4", de: "der Fortschritt", ar: "التقدّم", example: "Ich sehe meinen Fortschritt.", exampleAr: "أرى تقدّمي.", level: "A2" },
    { id: "fc5", de: "die Stufe", ar: "المرحلة/الدرجة", example: "Die nächste Stufe ist B1.", exampleAr: "المرحلة التالية هي B1.", level: "A2" },
    { id: "fc6", de: "das Fieber", ar: "الحمّى", example: "Ich habe Fieber und bleibe zu Hause.", exampleAr: "عندي حمّى وأبقى في البيت.", level: "A2" },
    { id: "fc7", de: "die Krankmeldung", ar: "إشعار المرض", example: "Ich schicke die Krankmeldung per E-Mail.", exampleAr: "أرسل إشعار المرض بالبريد.", level: "A2" },
    { id: "fc8", de: "wiederholen", ar: "يراجع/يكرّر", example: "Vor der Prüfung wiederhole ich alles.", exampleAr: "قبل الامتحان أراجع كل شيء.", level: "A2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
    {
      id: "med-a2-13-1",
      type: "summarize-de-to-ar",
      titleAr: "لخّص رسالة المدرسة اللغوية بالعربية",
      sourceDe:
        "Liebe Teilnehmerinnen und Teilnehmer, der A2-Abschlusstest findet am Freitag, dem 12. Juni, um 9 Uhr in Raum 204 statt. Bitte bringen Sie Ihren Ausweis mit. Der Test dauert 90 Minuten. Wer den Test besteht, kann sich ab Montag für den B1-Kurs anmelden.",
      taskAr:
        "زميلك لا يقرأ الألمانية بعد. لخّص له الإعلان بالعربية في ثلاث نقاط: متى وأين الامتحان، وماذا يجب أن يُحضر، وماذا يحدث بعد النجاح.",
      modelAnswerAr:
        "«امتحان ختام A2 يوم الجمعة 12 يونيو الساعة التاسعة في القاعة 204، ومدّته 90 دقيقة. يجب إحضار بطاقة الهوية. من ينجح يستطيع التسجيل في دورة B1 اعتباراً من يوم الاثنين.»",
      keyPointsAr: [
        "نقلتُ الموعد والمكان (الجمعة 12 يونيو، الساعة 9، القاعة 204)",
        "ذكرتُ المدة (90 دقيقة) وضرورة إحضار بطاقة الهوية",
        "أوضحتُ ما بعد النجاح: التسجيل في B1 من يوم الاثنين",
      ],
    },
  ],

  interaction: [
    {
      id: "int-a2-13-1",
      scenarioAr: "مكالمة مع سكرتارية معهد اللغة: تسأل عن نتيجة امتحان A2 وتسجّل في دورة B1.",
      scenarioDe: "Ein Telefongespräch mit dem Sekretariat der Sprachschule.",
      strategyAr: "الاستراتيجية: طلب معلومة بأدب، ثم طلب توضيح حين لا تفهم، ثم تأكيد ما فهمته قبل إنهاء المكالمة.",
      rounds: [
        {
          speakerDe: "Sprachschule Rheinbogen, guten Tag. Was kann ich für Sie tun?",
          speakerAr: "مدرسة راينبوغن للغات، نهارك سعيد. كيف أساعدك؟",
          options: [
            {
              de: "Guten Tag, hier ist Sami Ben Ali. Ich möchte wissen, ob mein A2-Ergebnis schon da ist.",
              ar: "نهارك سعيد، معك سامي بن علي. أود أن أعرف إن كانت نتيجتي في A2 قد صدرت.",
              best: true,
              replyDe: "Einen Moment bitte... Ja, Sie haben bestanden. Herzlichen Glückwunsch!",
              replyAr: "لحظة من فضلك... نعم، لقد نجحت. تهانينا!",
            },
            {
              de: "Ergebnis. Jetzt.",
              ar: "النتيجة. الآن.",
              best: false,
              replyDe: "Wie bitte? Könnten Sie mir bitte Ihren Namen nennen?",
              replyAr: "عفواً؟ هل يمكنك ذكر اسمك من فضلك؟",
            },
          ],
        },
        {
          speakerDe: "Für B1 gibt es zwei Kurse: den Intensivkurs und den Abendkurs.",
          speakerAr: "لـ B1 هناك دورتان: المكثّفة والمسائية.",
          options: [
            {
              de: "Entschuldigung, das habe ich nicht ganz verstanden. Können Sie das bitte wiederholen?",
              ar: "عفواً، لم أفهم تماماً. هل يمكنك الإعادة من فضلك؟",
              best: true,
              replyDe: "Natürlich. Der Intensivkurs ist täglich, der Abendkurs zweimal pro Woche.",
              replyAr: "بالطبع. المكثّفة يومية، والمسائية مرتين في الأسبوع.",
            },
            {
              de: "Ja ja, alles klar.",
              ar: "نعم نعم، كل شيء واضح.",
              best: false,
              replyDe: "Gut, dann trage ich Sie in den Intensivkurs ein.",
              replyAr: "حسناً، إذاً سأسجّلك في الدورة المكثّفة.",
            },
          ],
        },
        {
          speakerDe: "Welchen Kurs möchten Sie denn nehmen?",
          speakerAr: "أي دورة تودّ أن تأخذ؟",
          options: [
            {
              de: "Den Abendkurs bitte, weil ich tagsüber arbeite. Wann fängt er an?",
              ar: "المسائية من فضلك، لأنني أعمل نهاراً. متى تبدأ؟",
              best: true,
              replyDe: "Am 3. September. Ich schicke Ihnen die Anmeldung per E-Mail.",
              replyAr: "في الثالث من سبتمبر. سأرسل لك استمارة التسجيل بالبريد الإلكتروني.",
            },
            {
              de: "Ich weiß nicht. Sie entscheiden.",
              ar: "لا أدري. قرّري أنتِ.",
              best: false,
              replyDe: "Das kann ich leider nicht für Sie entscheiden.",
              replyAr: "للأسف لا أستطيع أن أقرّر بدلاً منك.",
            },
          ],
        },
      ],
    },
  ],
};
