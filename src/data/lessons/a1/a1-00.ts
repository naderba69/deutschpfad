import type { Lesson } from "@/types/lesson";

/**
 * الدرس A1-00: الأبجدية والنطق — أساس كل شيء
 * (يُفتح قبل درس التعارف مباشرة ضمن الوحدة الأولى)
 */
export const lessonA100: Lesson = {
  id: "a1-00",
  unitId: "a1-01",
  level: "A1",
  order: 0,
  titleDe: "Das Alphabet und die Aussprache",
  titleAr: "الأبجدية الألمانية والنطق",
  duration: 35,
  summary:
    "الحروف الستة والعشرون + الحروف المعلمة (ä, ö, ü) وß + الأصوات المركبة (ch, sch, ei, ie, eu, äu, sp, st, pf, tz) — مع تمارين نطق مكثفة مصممة لأخطاء المتعلم العربي.",

  /* 1) الأهداف */
  lernziele: [
    { id: "z1", de: "Ich kann das Alphabet buchstabieren.", ar: "أن أتهجّى الحروف الألمانية الستة والعشرين بصوت صحيح." },
    { id: "z2", de: "Ich kann die Umlaute ä, ö, ü aussprechen.", ar: "أن أنطق الحروف المعلمة ä وö وü نطقاً صحيحاً (أصعب ما يواجه العربي)." },
    { id: "z3", de: "Ich kenne die wichtigsten Laute: ch, sch, ei, ie, eu, äu, sp, st, pf, tz, ß.", ar: "أن أتقن الأصوات المركبة الأساسية التي لا وجود لها في العربية." },
    { id: "z4", de: "Ich kann meinen Namen auf Deutsch buchstabieren.", ar: "أن أتهجّى اسمي بالألمانية (مهم جداً في الهاتف والاستمارات)." },
  ],

  /* 2) التمهيد */
  einfuehrung: {
    motivatingQuestionAr:
      "هل تعلم أن الحرف V في الألمانية يُنطق مثل حرف F أحياناً؟ وأن W ليست كما في الإنجليزية؟ وأن الحرف S بين حرفين علة يُنطق Z؟ خمّن: كيف تنطق كلمة «Vogel» (طائر)؟",
    motivatingQuestionDe: "Wie spricht man „Vogel“ aus?",
    contextAr:
      "الألمانية لغة «صوتية جداً»: كل حرف تقريباً يُنطق دائماً بنفس الصوت (عكس الإنجليزية). لهذا إذا أتقنت الأبجدية والأصوات المركبة في هذا الدرس، ستستطيع قراءة أي كلمة ألمانية تراها لأول مرة — حتى لو لم تعرف معناها!",
    contextDe: "Wer das Alphabet kann, kann fast alles lesen!",
    connectionToPreviousAr: "هذا درسك التأسيسي الأول — بعده مباشرة تتعلم التحيات والتعارف في الدرس A1-01.",
    activateVocabulary: [
      { de: "der Buchstabe", ar: "الحرف" },
      { de: "das Alphabet", ar: "الأبجدية" },
      { de: "aussprechen", ar: "ينطق" },
      { de: "der Name", ar: "الاسم" },
      { de: "buchstabieren", ar: "يتهجّى" },
    ],
  },

  /* 3) الشرح النظري */
  theory: [
    {
      id: "t1",
      titleAr: "الحروف الستة والعشرون + الحروف المعلمة وß",
      titleDe: "Das Alphabet, die Umlaute und das ß",
      explanationAr:
        "الأبجدية الألمانية = 26 حرفاً لاتينياً + 3 حروف معلمة (ä, ö, ü) + حرف ß (يُقرأ «إس-تسِت» أي ss الحادة). الحروف المعلمة ليست مجرد زخرفة — إنها أصوات مستقلة تماماً تغيّر المعنى!",
      whyAr:
        "لماذا؟ لأن الألمانية تعتمد على «الدقة الصوتية»: قول Mutter (أم) بدل Mütter (أمهات) يغيّر المعنى كلياً. والحروف المعلمة هي أصوات «متوسطة» بين أصوات عربية لا نملكها، لذلك يحتاج العربي تدريباً خاصاً عليها.",
      table: {
        title: "الأبجدية مع النطق التقريبي (مصمم للعربي)",
        columns: ["الحرف", "نطقه التقريبي", "مثال"],
        rows: [
          { label: "A a", cells: ["آ (طويلة)", "der Apfel (تفاحة)"] },
          { label: "B b", cells: ["ب (بفبركة خفيفة)", "das Buch (كتاب)"] },
          { label: "C c", cells: ["تس / ك (حسب السياق)", "der Computer"] },
          { label: "D d", cells: ["د (بفبركة خفيفة)", "der Tag (يوم)"] },
          { label: "E e", cells: ["إي / إ (قصيرة)", "der Elefant"] },
          { label: "F f", cells: ["ف", "das Feuer (نار)"] },
          { label: "G g", cells: ["گ (جيم قوية مثل الجيم المصرية — ليست غيناً عربية)", "der Garten (حديقة)"] },
          { label: "H h", cells: ["هـ (نَفَس في البداية)", "das Haus (بيت)"] },
          { label: "I i", cells: ["إي / إ (قصيرة)", "der Film"] },
          { label: "J j", cells: ["ي", "ja (نعم)"] },
          { label: "K k", cells: ["ك", "der Kaffee (قهوة)"] },
          { label: "L l", cells: ["ل (ملامسة اللسان للأسنان)", "die Lampe (مصباح)"] },
          { label: "M m", cells: ["م", "die Mutter (أم)"] },
          { label: "N n", cells: ["ن", "die Nacht (ليل)"] },
          { label: "O o", cells: ["أو", "das Ohr (أذن)"] },
          { label: "P p", cells: ["پ (بمخرج p)", "der Park"] },
          { label: "Q q", cells: ["كو (تأتي دائماً مع u)", "die Qualität (جودة)"] },
          { label: "R r", cells: ["ر (حلقية قليلاً أو لثوية)", "der Raum (غرفة/فضاء)"] },
          { label: "S s", cells: ["س / ز (بين حرفين علة)", "die Sonne (شمس)"] },
          { label: "T t", cells: ["ت (بمخرج t)", "der Tisch (طاولة)"] },
          { label: "U u", cells: ["وو", "die Uhr (ساعة)"] },
          { label: "V v", cells: ["ف (غالباً) / ڤ في الدخيل", "der Vogel (طائر)"] },
          { label: "W w", cells: ["ڤ (مثل v)", "das Wasser (ماء)"] },
          { label: "X x", cells: ["كس", "das Taxi"] },
          { label: "Y y", cells: ["يُپسِلون (نادر)", "das System"] },
          { label: "Z z", cells: ["تس", "die Zeit (وقت)"] },
          { label: "Ä ä", cells: ["إيه (فم مفتوح)", "der Bär (دب)"] },
          { label: "Ö ö", cells: ["أُو (شفتان مستديرتان)", "das Öl (زيت)"] },
          { label: "Ü ü", cells: ["يُو (شفتان مقربتان)", "die Tür (باب)"] },
          { label: "ß", cells: ["س (مهموسة — علامة كتابية لا صوت مستقل؛ تدل على أن العلة قبلها طويل)", "die Straße (شارع)"] },
        ],
      },
      examples: [
        { de: "Mein Name ist Sami.", ar: "اسمي سامي." },
        { de: "Wie schreibt man das? — S-A-M-I.", ar: "كيف يُكتب هذا؟ — إس-آ-إم-آي." },
        { de: "Buchstabieren Sie bitte!", ar: "تهجَّوا من فضلكم!" },
        { de: "Das ist die Straße.", ar: "هذا هو الشارع." },
        { de: "Die Tür ist offen.", ar: "الباب مفتوح." },
      ],
      comparisonWithArabic:
        "العربية لا تملك أصواتاً مثل ü وö وß، لكنها تملك خاءً قريبة من ch الحلقية، والجيم المصرية/الخليجية قريبة من g الألمانية (لا الغين — الغين صوت حلقي مختلف). القاعدة الذهبية: كل حرف ألماني له صوت واحد ثابت — بينما العربية تعتمد على الحركات القصيرة التي تُكتب أحياناً وتُحذف أحياناً.",
      eselsbruecke:
        "«الـ W الألمانية مثل الـ V الإنجليزية» — تذكّر: Wasser تنطق ڤاسّر وليس ووتر. و«Z = تس»: Zeit تنطق تسايت مثل صوت الساعة: تِك-تاك-تسايت!",
      commonMistakes: [
        { wrong: "نطق W كـ«واو» إنجليزية (Water = ووتر)", right: "نطق W كـ«ڤ» (Wasser = ڤاسّر)", whyAr: "الألمانية لا تعرف صوت w الإنجليزي — W تُنطق دائماً ڤ." },
        { wrong: "نطق V كـ«ڤ» في كل الكلمات", right: "V تُنطق «ف» في معظم الكلمات الأصلية (Vater = فاتر)", whyAr: "Vogel وVater وvon كلها بفاء، إلا في كلمات دخيلة مثل Video تُنطق ڤ." },
        { wrong: "نطق S بين حرفين علة كـ«س»", right: "نطقه «ز»: lesen = ليزِن، Hose = هوزِه", whyAr: "قاعدة صوتية: s بين حرفين علة تُنطق ز." },
      ],
      relatedRuleComparison: {
        title: "حرفا i وe — هل سمعت عن ei وie؟",
        content:
          "هذا موضوع الدرس القادم في هذا الدرس نفسه: ei تُنطق «آي» [aɪ] (صوت مركّب) و ie تُنطق «إي» [iː] (طويلة). القاعدة: في ie يكون i هو الصوت (طويلاً) وe علامة إطالة؛ في ei الصوتان يندمجان في «آي».",
      },
    },
    {
      id: "t2",
      titleAr: "الأصوات المركبة (Doppellaute und Konsonantenverbindungen)",
      titleDe: "ei, ie, eu, äu, sch, ch, sp, st, pf, tz, ck",
      explanationAr:
        "الألمانية تجمع الحروف لتكوين أصوات جديدة تماماً. حفظ هذه المجموعات = القدرة على قراءة أي كلمة. أهمها: ei (آي)، ie (إي)، eu/äu (أُوي)، sch (ش)، ch (ش ناعمة بعد i/e / خ حلقية بعد a/o/u)، sp/st (شپ/شت في بداية الكلمة)، pf (پف)، tz (تس)، ck (ك).",
      whyAr:
        "لماذا تُنطق sp وst كـ«شپ» و«شت» في بداية الكلمة فقط؟ لأنها عادة نطق قديمة بقيت في الألمانية القياسية: Sport = شپورت، Stadt = شتات. أما في منتصف الكلمة فتبقى س+پ: die Wespe (دبور) = ڤِس-پِه.",
      table: {
        title: "الأصوات المركبة الأساسية",
        columns: ["المجموعة", "النطق", "مثال", "المعنى"],
        rows: [
          { label: "ei", cells: ["آي", "mein", "ملكي"] },
          { label: "ie", cells: ["إي (طويلة)", "lieben", "يحب"] },
          { label: "eu / äu", cells: ["أُوي", "neu / Häuser", "جديد / بيوت"] },
          { label: "sch", cells: ["ش", "Schule", "مدرسة"] },
          { label: "ch (بعد i,e)", cells: ["ش ناعمة جداً (إيخ)", "ich, echt", "أنا، حقيقي"] },
          { label: "ch (بعد a,o,u)", cells: ["خ حلقية", "Buch, Nacht", "كتاب، ليل"] },
          { label: "sp (بداية)", cells: ["شپ", "Sport, Spiel", "رياضة، لعبة"] },
          { label: "st (بداية)", cells: ["شت", "Stadt, Stein", "مدينة، حجر"] },
          { label: "pf", cells: ["پف (معاً)", "Apfel, Pferd", "تفاحة، حصان"] },
          { label: "tz", cells: ["تس", "Katze, sitzen", "قطة، يجلس"] },
          { label: "ck", cells: ["ك (تشديد)", "Zucker, backen", "سكر، يخبز"] },
        ],
      },
      examples: [
        { de: "Mein Hund ist neu.", ar: "كلبي جديد." },
        { de: "Die Katze sitzt auf dem Tisch.", ar: "القطة تجلس على الطاولة." },
        { de: "Das Pferd ist schnell.", ar: "الحصان سريع." },
        { de: "Ich lese ein Buch.", ar: "أقرأ كتاباً." },
        { de: "Die Schule ist in der Stadt.", ar: "المدرسة في المدينة." },
      ],
      comparisonWithArabic:
        "العربية لديها «ش» كاملة، لذلك sch سهلة. لكن لا تملك «آي» و«أُوي» كأصوات مركبة ثابتة. الأصعب للعربي: ch الناعمة (بعد i/e) لأنها بين «ش» و«خ» — والصوت pf لأننا نميل لنطقه «ف» فقط.",
      eselsbruecke:
        "«الحرف الأطول يُنطق الأقصر»: ie (حرفان) = إي قصير، ei (حرفان معكوسان) = آي. و«شپورت وشتات»: كل كلمة تبدأ بـ sp أو st تُنطق بشين قبلها!",
      commonMistakes: [
        { wrong: "نطق ei كـ«إي» (مثل mein = مين)", right: "نطقه «آي» (mein = ماين)", whyAr: "أشهر خطأ! ei تعني آي دائماً: mein، nein، zwei، drei." },
        { wrong: "نطق pf كـ«ف» فقط (Apfel = آفِل)", right: "نطقه «پف» (Apfel = آپفِل)", whyAr: "الألمانية تنطق الحرفين معاً: شفاه p ثم هواء f." },
        { wrong: "نطق sch كـ«سخ»", right: "نطقه «ش» صافية (Schule = شولِه)", whyAr: "sch = ش كاملة، وليست س+خ." },
      ],
      relatedRuleComparison: {
        title: "ch بعد أي حرف؟",
        content:
          "بعد a/o/u/au → خ حلقية (Buch, Nacht, auch). بعد i/e/ä/ö/ü/ei/eu → ش ناعمة (ich, echt, Mädchen). القاعدة: «الخلفيون خاء، والأماميون شين ناعمة».",
      },
    },
  ],

  /* 4) الاستماع */
  listening: {
    items: [
      {
        id: "l1",
        title: "تهجئة الاسم في الهاتف",
        lines: [
          { speaker: "Sami", de: "Hallo, mein Name ist Sami Ben Ali.", ar: "مرحباً، اسمي سامي بن علي." },
          { speaker: "Frau Weber", de: "Wie bitte? Können Sie das buchstabieren?", ar: "عذراً؟ هل يمكنك تهجئة ذلك؟" },
          { speaker: "Sami", de: "Ja, natürlich. S-A-M-I. B-E-N. A-L-I.", ar: "نعم بالطبع. إس-آ-إم-آي. بيه-إيه-إن. آ-إل-آي." },
          { speaker: "Frau Weber", de: "Ah, vielen Dank, Herr Ben Ali!", ar: "آه، شكراً جزيلاً يا سيد بن علي!" },
        ],
      },
      {
        id: "l2",
        title: "حروف مشهورة في الكلمات",
        lines: [
          { speaker: "Lehrer", de: "Wie schreibt man „Schule“?", ar: "كيف تُكتب كلمة Schule (مدرسة)؟" },
          { speaker: "Mona", de: "S-C-H-U-L-E.", ar: "إس-تسيه-ها-وو-إل-إيه." },
          { speaker: "Lehrer", de: "Sehr gut! Und „Straße“?", ar: "ممتاز! وكلمة Straße (شارع)؟" },
          { speaker: "Mona", de: "S-T-R-A-ß-E.", ar: "إس-تيه-إر-آ-إسّتِت-إيه." },
          { speaker: "Lehrer", de: "Perfekt!", ar: "مثالي!" },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Wie heißt der Mann?",
        questionAr: "ما اسم الرجل؟",
        options: ["Sami Ben Ali", "Herr Weber", "Mona", "Sami Weber"],
        correctIndex: 0,
        explanation: "قال: mein Name ist Sami Ben Ali — وتهجأه حرفاً حرفاً.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Wie schreibt man „Schule“?",
        questionAr: "كيف تُكتب Schule؟",
        options: ["S-C-H-U-L-E", "S-C-H-O-L-E", "S-H-U-L-E", "S-C-U-L-E"],
        correctIndex: 0,
        explanation: "School بالطبع S-C-H-U-L-E — لاحظ sch معاً ثم u ثم l ثم e.",
        errorType: "spelling",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Welcher Buchstabe ist in „Straße“?",
        questionAr: "أي حرف يوجد في Straße؟",
        options: ["ß", "ä", "ü", "ö"],
        correctIndex: 0,
        explanation: "Straße تحتوي ß — الحرف الحاد الذي يشبه ss.",
        errorType: "spelling",
      },
    ],
  },

  /* 5) النطق */
  pronunciation: {
    id: "p1",
    title: "أهم 10 أصوات للمتعلم العربي — استمع وكرر",
    items: [
      { de: "ich", ar: "أنا", note: "ch ناعمة بعد i: أقرب إلى «ش» هامسة من «خ»" },
      { de: "Buch", ar: "كتاب", note: "ch خاء حلقية بعد u" },
      { de: "schön", ar: "جميل", note: "sch = ش + ö بشفتين مستديرتين" },
      { de: "mein", ar: "ملكي", note: "ei = آي: ماين" },
      { de: "Wien", ar: "فيينا", note: "ie = إي: ڤين" },
      { de: "neu", ar: "جديد", note: "eu = أُوي: نُوي" },
      { de: "Sport", ar: "رياضة", note: "sp في البداية = شپورت" },
      { de: "Stadt", ar: "مدينة", note: "st في البداية = شتات" },
      { de: "Apfel", ar: "تفاحة", note: "pf معاً: آپفِل" },
      { de: "Vater", ar: "أب", note: "V = ف: فاتر" },
    ],
    tip: "اختر صوتاً واحداً يومياً من هذه القائمة وكرره في 5 كلمات مختلفة — صوت واحد يومياً أسرع من مراجعة كل شيء مرة واحدة.",
    shadowing: [
      { de: "Mein Name ist Anna.", ar: "اسمي آنا.", tip: "ei في Mein = آي" },
      { de: "Ich buchstabiere: A-N-N-A.", ar: "أتهجّى: آ-إن-إن-آ.", tip: "حرف A في الألمانية = آ" },
      { de: "Die Schule ist in der Stadt.", ar: "المدرسة في المدينة.", tip: "Schule = شولِه، Stadt = شتات" },
      { de: "Das Buch ist neu.", ar: "الكتاب جديد.", tip: "Buch = بوخ (خ حلقية)" },
    ],
  },

  /* 6) الكتابة */
  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب اسمك بالألمانية كما تتهجّاه (كل حرف بفاصلة):",
      instructionDe: "Buchstabiere deinen Namen!",
      prompt: "اكتب اسمك: S-A-M-I (مثال: أسماء عربية تُكتب حرفاً حرفاً كما تُنطق)",
      acceptedAnswers: ["S-A-M-I", "Sami", "S A M I"],
      sampleAnswer: "S-A-M-I (مثال: اكتب اسمك أنت بدلاً من ذلك)",
      explanation: "التهجئة بالألمانية: كل حرف يُنطق باسمه الألماني (A=آ، B=بيه، C=تسه...).",
      errorType: "spelling",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل الفراغات بالحرف الصحيح (ei أو ie):",
      template: "M___n (لي) · W___n (فيينا) · l___ben (يحب) · n___n (لا)",
      blanks: [
        { correct: "ei", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ei", options: ["ei", "ie"] },
      ],
      explanation: "المرجع: mein (آي [aɪ]) / Wien (إي [iː]) / lieben (إي [iː]) / nein (آي [aɪ]). ie = إي طويلة · ei = آي مركّبة.",
      errorType: "spelling",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب ما تسمعه (جملة تحتوي أصواتاً مركبة):",
      audioText: "Die Schule ist schön und neu.",
      explanation: "لاحظ: Schule (ش) + schön (ش+ö) + neu (أُوي). الجملة: Die Schule ist schön und neu.",
      errorType: "spelling",
    },
  ],

  /* 7) بنك التدريبات */
  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر نطق الحرف الصحيح:",
      questionDe: "Wie spricht man „W“ aus?",
      questionAr: "كيف يُنطق الحرف W؟",
      options: ["ڤ (مثل v)", "و (مثل الإنجليزية)", "ف", "ب"],
      correctIndex: 0,
      explanation: "W الألمانية تُنطق ڤ دائماً: Wasser = ڤاسّر.",
      optionExplanations: [
        undefined,
        "صوت w الإنجليزي غير موجود في الألمانية إطلاقاً.",
        "ف تُنطق بـ V الألمانية في كلمات مثل Vater.",
        "ب هو حرف B.",
      ],
      errorType: "spelling",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة التي تُنطق بفاء (V = f):",
      questionDe: "Welches Wort spricht man mit „f“?",
      questionAr: "أي كلمة تُنطق بفاء؟",
      options: ["Video", "Vater", "Wasser", "Wien"],
      correctIndex: 1,
      explanation: "Vater = فاتر (ف). أما Video فتلفظ ڤ، وWasser وWien بـ ڤ أيضاً.",
      errorType: "spelling",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل الصوت المركب بنطقه:",
      pairs: [
        { left: "ei", right: "آي (ماين)" },
        { left: "ie", right: "إي (ڤين)" },
        { left: "eu", right: "أُوي (نُوي)" },
        { left: "sch", right: "ش (شولِه)" },
        { left: "tz", right: "تس (كاتسِه)" },
      ],
      explanation: "مجموعات أساسية: ei=آي، ie=إي، eu=أُوي، sch=ش، tz=تس.",
      errorType: "spelling",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الحروف لتكوين كلمة صحيحة:",
      tokens: ["H", "A", "U", "S"],
      correctSentence: "HAUS",
      explanation: "Haus = بيت. تذكّر: au تُنطق «آو».",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "fill-blank",
      instructionAr: "أكمل الحرف الناقص (ä أو a):",
      template: "die M___tter (أمهات) · die M___tter (أمّ واحدة) = Bär",
      blanks: [
        { correct: "ü", options: ["ü", "u"] },
        { correct: "u", options: ["ü", "u"] },
      ],
      explanation: "Mütter (أمهات) بـ ü، لكن Mutter (أم) بـ u. لاحظ أن المعنى تغيّر بالحرف المعلم!",
      errorType: "spelling",
    },
    {
      id: "e6",
      type: "error-correction",
      instructionAr: "صحّح الخطأ الإملائي:",
      wrongSentence: "Das ist die Strasse.",
      wrongWord: "Strasse",
      correctWord: "Straße",
      options: ["Straße", "Strasze", "Strase", "Straze"],
      explanation: "بعد الأصوات الطويلة أو المركبة (a طويلة هنا) يُكتب ß وليس ss. Straße = شارع.",
      errorType: "spelling",
    },
    {
      id: "e7",
      type: "multiple-choice",
      instructionAr: "اختر النطق الصحيح:",
      questionDe: "Wie spricht man „Apfel“?",
      questionAr: "كيف يُنطق Apfel (تفاحة)؟",
      options: ["آپفِل", "آفِل", "آپِل", "آپفِل (بفاصلة بين الحرفين)"],
      correctIndex: 0,
      explanation: "pf يُنطق معاً: الشفتان تبدأ p ثم يمر الهواء f فوراً — آپفِل.",
      errorType: "spelling",
    },
    {
      id: "e8",
      type: "dictation",
      instructionAr: "استمع واكتب الكلمة التي تسمعها (ستسمع حرفاً حرفاً):",
      audioText: "Katze",
      explanation: "Katze = قطة: K-A-T-Z-E — وtz تُنطق تس.",
      errorType: "spelling",
    },
    {
      id: "e9",
      type: "matching",
      instructionAr: "صل الحرف بالنطق التقريبي للعربي:",
      pairs: [
        { left: "J", right: "ي (ja = يا)" },
        { left: "V", right: "ف (Vater = فاتر)" },
        { left: "Z", right: "تس (Zeit = تسايت)" },
        { left: "W", right: "ڤ (Wasser = ڤاسّر)" },
      ],
      explanation: "أربعة حروف تخدع العربي: J=ي، V=ف، Z=تس، W=ڤ.",
      errorType: "spelling",
    },
    {
      id: "e10",
      type: "word-ordering",
      instructionAr: "رتّب لتكوين كلمة: (t, z, e, i, Z)",
      tokens: ["Z", "e", "i", "t"],
      correctSentence: "Zeit",
      explanation: "Zeit = وقت: Z (تس) + ei (آي) + t → تسايت.",
      errorType: "word-order",
    },
  ],

  /* 8) الأخطاء والتريكات */
  fehlerUndTipps: {
    mistakes: [
      { wrong: "نطق W الإنجليزية (Water = ووتر)", right: "نطق W كـ ڤ (Wasser = ڤاسّر)", whyAr: "الألمانية لا تملك w الإنجليزي إطلاقاً — ووه تعني «أين» وتُنطق ڤوه!" },
      { wrong: "نطق ei كـ«إي»", right: "نطق ei كـ«آي» (mein = ماين)", whyAr: "احفظ: nein (لا) = ناين، zwei (اثنان) = تسڤاي، drei (ثلاثة) = دراي." },
      { wrong: "كتابة ss بدل ß في Straße", right: "Straße (بـ ß)", whyAr: "بعد حرف علة طويل أو مركب يأتي ß، بعد حرف قصير يأتي ss (das Schloss = القفل)." },
    ],
    eselsbruecken: [
      "«الحرف الأطول يُنطق الأقصر»: ie = إي (قصير)، ei = آي (ممدود). مقلوب الشكل = مقلوب النطق!",
      "W مثل ڤ، V مثل ف في الأغلب — تذكّر: «فاتر وڤاسّر»: Vater (ف) وWasser (ڤ).",
    ],
    culturalNote: {
      title: "لماذا التهجئة مهمة في ألمانيا؟",
      content:
        "الألمان يتهجّون أسماءهم في الهاتف والبنك والمكتب كل يوم. ولتجنب اللبس، طوروا «أبجدية هاتفية» رسمية: A wie Anton، B wie Berta، C wie Cäsar... ستتعلم أشهرها في تمارين لاحقة — واسأل معلّمك الافتراضي عنها!",
    },
  },

  /* 9) التقييم */
  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر النطق الصحيح للحرف:",
      questionDe: "Wie spricht man „Z“?",
      questionAr: "ما نطق الحرف Z؟",
      options: ["تس", "ز", "س", "ذ"],
      correctIndex: 0,
      explanation: "Z تُنطق «تس» دائماً: Zeit = تسايت، zehn = تسِين.",
      errorType: "spelling",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر الكلمة الصحيحة إملائياً:",
      questionDe: "Welche Schreibung ist richtig?",
      questionAr: "أي كتابة صحيحة؟",
      options: ["die Straße", "die Strasse", "die Strasze", "die Straze"],
      correctIndex: 0,
      explanation: "Straße بالـ ß — بعد a طويلة. (قارن: die Straße = الشارع).",
      errorType: "spelling",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الحروف لتكوين كلمة «مدرسة»:",
      tokens: ["S", "c", "h", "u", "l", "e"],
      correctSentence: "Schule",
      explanation: "Schule = مدرسة — sch (ش) + u + l + e.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "fill-blank",
      instructionAr: "أكمل الفراغ (ei أو ie):",
      template: "n___n (لا) · d___se (هذه) · w___ (نحن) · k___n (لا أحد)",
      blanks: [
        { correct: "ei", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ie", options: ["ei", "ie"] },
        { correct: "ei", options: ["ei", "ie"] },
      ],
      explanation: "nein=آي [aɪ]، diese=إي [iː]، wie=إي [iː]، kein=آي [aɪ]. ie تُقرأ إي (طويلة) و ei تُقرأ آي (مركّبة).",
      errorType: "spelling",
    },
    {
      id: "m5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ في التهجئة:",
      wrongSentence: "Wie spricht man „Buchstabe“?",
      wrongWord: "Buchstabe",
      correctWord: "Buchstabe",
      options: ["Buchstabe", "Buchstabbe", "Buchstabeh", "Buchstape"],
      explanation: "Buchstabe (حرف) صحيحة كما هي! هذا تمرين ثقة: أحياناً الإجابة الصحيحة هي الأصل نفسه. أتقنت الأبجدية! 🎉",
      errorType: "spelling",
    },
  ],

  /* 10) البطاقات */
  flashcards: [
    { id: "fc1", de: "das Alphabet", ar: "الأبجدية", example: "Das Alphabet hat 26 Buchstaben.", exampleAr: "الأبجدية فيها 26 حرفاً.", level: "A1" },
    { id: "fc2", de: "der Buchstabe", ar: "الحرف", example: "Das ist ein Buchstabe.", exampleAr: "هذا حرف.", level: "A1" },
    { id: "fc3", de: "aussprechen", ar: "ينطق", example: "Wie spricht man das aus?", exampleAr: "كيف يُنطق هذا؟", level: "A1" },
    { id: "fc4", de: "buchstabieren", ar: "يتهجّى", example: "Können Sie das buchstabieren?", exampleAr: "هل يمكنكم تهجئة ذلك؟", level: "A1" },
    { id: "fc5", de: "der Umlaut (ä, ö, ü)", ar: "الحرف المعلم", example: "Ä, Ö, Ü sind Umlaute.", exampleAr: "Ä وÖ وÜ حروف معلمة.", level: "A1" },
    { id: "fc6", de: "das ß", ar: "حرف إس-تست الحاد", example: "Straße schreibt man mit ß.", exampleAr: "تُكتب Straße بـ ß.", level: "A1" },
    { id: "fc7", de: "der Name", ar: "الاسم", example: "Mein Name ist Sami.", exampleAr: "اسمي سامي.", level: "A1" },
    { id: "fc8", de: "sich vorstellen", ar: "يقدّم نفسه", example: "Ich möchte mich vorstellen.", exampleAr: "أود أن أقدّم نفسي.", level: "A1" },
  ],

  /* 11) مراجعة تمهيدية (أول درس: ننشط معارف ما قبل البدء) */
  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة تمهيدية: ما هي اللغة التي تتعلمها في هذه المنصة؟",
      questionDe: "Welche Sprache lernst du hier?",
      questionAr: "أي لغة تتعلم هنا؟",
      options: ["Deutsch", "Englisch", "Spanisch", "Französisch"],
      correctIndex: 0,
      explanation: "Deutsch = الألمانية — هذه منصتك لإتقانها من A1 حتى B2.",
      errorType: "vocabulary",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة تمهيدية: كم حرفاً في الأبجدية الألمانية؟",
      questionDe: "Wie viele Buchstaben hat das deutsche Alphabet?",
      questionAr: "كم حرفاً في الأبجدية الألمانية؟",
      options: ["26", "24", "28", "30"],
      correctIndex: 0,
      explanation: "26 حرفاً + الحروف المعلمة (ä, ö, ü) وß تُدرس في هذا الدرس.",
      errorType: "vocabulary",
    },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-a1-00-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً قصيراً عن الأبجدية لصديق يبدأ التعلم",
      sourceDe: "Das deutsche Alphabet hat 26 Buchstaben. Dazu kommen ä, ö, ü und ß. Manche Buchstaben hören sich anders an als im Arabischen.",
      taskAr: "انقل بالعربية أهم ثلاث معلومات عن الأبجدية الألمانية لصديق مبتدئ: عدد الحروف، الحروف الإضافية، والاختلاف عن العربية.",
      modelAnswerAr: "«الأبجدية الألمانية فيها 26 حرفاً، بالإضافة إلى ä وö وü وß. بعض الحروف تُنطق بشكل مختلف عن العربية.»",
      keyPointsAr: ["ذكرت عدد الحروف (26)", "ذكرت الحروف الإضافية الأربعة", "أشرت إلى اختلاف النطق عن العربية"],
    },
  ],
      interaction: [
    {
      id: "int-a1-00-1",
      scenarioAr: "صديق مبتدئ يسألك عن نطق حرف ألماني.",
      scenarioDe: "Ein Freund fragt dich nach der Aussprache eines Buchstabens.",
      strategyAr: "الاستراتيجية: شرح نطق حرف وتصحيح خطأ بلطف.",
      rounds: [
        {
          speakerDe: "Wie spricht man „ch“ aus?",
          speakerAr: "كيف يُنطق «ch»؟",
          options: [
            { de: "Nach a, o, u wie ein „ch“ aus dem Hals. Nach e, i wie ein weiches „sch“.", ar: "بعد a, o, u من الحلق. وبعد e, i مثل «ش» ناعمة.", best: true, replyDe: "Ach so! Und „sch“?", replyAr: "فهمت! و«sch»؟" },
            { de: "Immer wie ein „k“.", ar: "دائماً مثل «ك».", best: false, replyDe: "Nein, das ist leider falsch. Es hängt vom Vokal ab.", replyAr: "لا، هذا خطأ للأسف. يعتمد على العلة." },
          ],
        },
        {
          speakerDe: "Wie spricht man „sch“ aus?",
          speakerAr: "كيف يُنطق «sch»؟",
          options: [
            { de: "Wie ein „sch“ auf Arabisch: Schule, schön.", ar: "مثل «ش» العربية: Schule, schön.", best: true, replyDe: "Danke! Das ist einfach.", replyAr: "شكراً! هذا سهل." },
            { de: "Wie ein „s“.", ar: "مثل «س».", best: false, replyDe: "Nein, „sch“ ist wie das arabische schin.", replyAr: "لا، «sch» مثل الشين العربية." },
          ],
        },
      ],
    },
  ],

};