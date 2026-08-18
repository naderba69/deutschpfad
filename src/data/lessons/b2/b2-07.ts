import type { Lesson } from "@/types/lesson";

/**
 * الدرس B2-07: الفلسفة والمجتمع — Futur II + الكتابة الجدلية
 */
export const lessonB207: Lesson = {
  id: "b2-07",
  unitId: "b2-07",
  level: "B2",
  order: 1,
  titleDe: "Philosophie und Gesellschaft",
  titleAr: "الفلسفة والمجتمع",
  duration: 45,
  summary:
    "مناقشة الموضوعات المجردة وبناء الحجج، المستقبل التام (Futur II): werde + Partizip II + haben/sein — والكتابة الجدلية (Erörterung) بأسلوب أكاديمي.",

  lernziele: [
    { id: "z1", de: "Ich kann abstrakte Themen diskutieren.", ar: "أن أناقش الموضوعات المجردة وأبني الحجج." },
    { id: "z2", de: "Ich kann das Futur II bilden: werde + Partizip II + haben/sein.", ar: "أن أبني المستقبل التام: سيكون قد فعل." },
    { id: "z3", de: "Ich kann eine Erörterung schreiben.", ar: "أن أكتب مقالاً جدلياً بأسلوب أكاديمي." },
      { id: "z4", de: "Ich kann über abstrakte gesellschaftliche Fragen diskutieren.", ar: "أن أناقش أسئلة مجتمعية مجردة." },
  ],
  einfuehrung: {
    motivatingQuestionAr:
      "في B1 تعلمت المستقبل (werde lernen). ماذا لو أردت: «سيكون قد أنهى»؟ هنا المستقبل التام: Er wird fertig geworden sein. التركيب: werde + Partizip II + haben/sein في النهاية. مثل العربية: «سيكون قد...» — تماماً!",
    motivatingQuestionDe: "Was bedeutet ein gutes Leben?",
    contextAr:
      "الفلسفة: أسئلة كبرى. نضيف المستقبل التام للتعبير عن «الانتهاء في المستقبل»، ثم نتعلم هيكل المقال الجدلي (Erörterung) — مهارة الامتحان الأهم.",
    contextDe: "Bis 2030 wird die Gesellschaft sich verändert haben.",
    connectionToPreviousAr: "تتذكر Futur I (werde lernen) وPerfekt (habe gelernt). اليوم: دمجهما — Futur II. ومعه الكتابة الجدلية التي تجمع كل قواعد B2.",
    activateVocabulary: [
      { de: "die Philosophie", ar: "الفلسفة" },
      { de: "argumentieren", ar: "يبني حجة" },
      { de: "die These", ar: "الأطروحة" },
      { de: "die Erörterung", ar: "المقال الجدلي" },
      { de: "die Gesellschaft", ar: "المجتمع" },
    ],
  },

  review: [
    {
      id: "r1",
      type: "multiple-choice",
      instructionAr: "مراجعة من B1: اختر المستقبل:",
      questionDe: "Ich ___ morgen lernen.",
      options: ["werde", "wirst", "wird", "werden"],
      correctIndex: 0,
      explanation: "مع ich: werde (درس التقنية B1).",
      errorType: "grammar",
    },
    {
      id: "r2",
      type: "multiple-choice",
      instructionAr: "مراجعة من A2: اختر Perfekt:",
      questionDe: "Ich habe ein Buch ___.",
      options: ["gelesen", "lesen", "gelest", "liest"],
      correctIndex: 0,
      explanation: "lesen → gelesen.",
      errorType: "grammar",
    },
    {
      id: "r3",
      type: "fill-blank",
      instructionAr: "مراجعة من B2: أكمل:",
      template: "Er sagt, er ___ Zeit. (Konjunktiv I من haben)",
      blanks: [
        { correct: "habe", options: ["habe", "hat", "hätte"] },
      ],
      explanation: "Konjunktiv I: habe (درس العلوم B2).",
      errorType: "grammar",
    },
  ],

  theory: [
    {
      id: "t1",
      titleAr: "المستقبل التام (Futur II)",
      titleDe: "Das Futur II: werde + Partizip II + haben/sein",
      explanationAr:
        "Futur II = حدث سيكون قد اكتمل في المستقبل: Bis 2030 werde ich Deutsch gelernt haben. (بحلول 2030 سأكون قد تعلمت الألمانية). التركيب: werden (مضارع) + Partizip II + haben/sein في النهاية. للحركة: sein (werde gegangen sein). للفعل العادي: haben.",
      whyAr:
        "لماذا نحتاج زمناً خامساً؟ لأن التوقع يحتاج «الاكتمال»: «سيكون قد انتهى» تختلف عن «سينتهي». والمتحدث المتقدم يستخدمه للتوقعات المؤكدة في المستقبل — علامة الإتقان.",
      table: {
        title: "Futur II",
        columns: ["النوع", "التركيب", "مثال"],
        rows: [
          { label: "فعل عادي", cells: ["werde + PII + haben", "Ich werde gelernt haben."] },
          { label: "حركة", cells: ["werde + PII + sein", "Er wird gegangen sein."] },
          { label: "مع sein", cells: ["werde + gewesen sein", "Sie wird müde gewesen sein."] },
        ],
      },
      examples: [
        { de: "Bis nächste Woche werde ich das Buch gelesen haben.", ar: "بحلول الأسبوع القادم سأكون قد قرأت الكتاب." },
        { de: "Er wird die Prüfung bestanden haben.", ar: "سيكون قد اجتاز الامتحان." },
        { de: "Die Gesellschaft wird sich verändert haben.", ar: "سيكون المجتمع قد تغير." },
        { de: "Wir werden angekommen sein, bevor du rufst.", ar: "سنكون قد وصلنا قبل أن تتصل." },
        { de: "Sie wird es vergessen haben.", ar: "ستكون قد نسيته." },
      ],
      comparisonWithArabic:
        "«سأكون قد قرأت» = werde gelesen haben — مطابقة تامة مع «سيكون قد + فعل» العربية! المستقبل التام موجود في لغتنا بنفس المنطق.",
      eselsbruecke:
        "«سيكون قد = werde + Partizip II + haben/sein» — كل توقع اكتمال في المستقبل. واسأل: هل الحدث اكتمل؟ نعم → Futur II.",
      commonMistakes: [
        { wrong: "Ich werde gelernt haben gelernt (تضاعف)", right: "Ich werde gelernt haben.", whyAr: "طبقة واحدة." },
        { wrong: "Er wird gegangen haben (حركة بـ haben)", right: "Er wird gegangen sein.", whyAr: "الحركة: sein." },
        { wrong: "Futur I أم II؟", right: "I = سيفعل. II = سيكون قد فعل", whyAr: "الاكتمال هو الفرق." },
      ],
      relatedRuleComparison: {
        title: "Futur I أم Futur II؟",
        content: "I: Ich werde lernen (سأتعلم — مستقبل). II: Ich werde gelernt haben (سأكون قد تعلمت — اكتمال في المستقبل). اسأل: هل أتحدث عن الفعل أم اكتماله؟",
      },
    },
    {
      id: "t2",
      titleAr: "الكتابة الجدلية (Erörterung) — الهيكل الأكاديمي",
      titleDe: "Die Erörterung: These, Argumente, Schluss",
      explanationAr:
        "المقال الجدلي له هيكل ثابت: 1) المقدمة: عرض الموضوع (Thema + Frage). 2) الجسد: حجج مؤيدة (Pro) ومعارضة (Contra) بأسلوب منظم. 3) الخاتمة: رأيك الشخصي (Meiner Meinung nach...). الروابط: einerseits... andererseits، außerdem، daraus folgt، zusammengefasst.",
      whyAr:
        "لماذا هيكل صارم؟ لأن الامتحان الألماني (Goethe, TestDaF) يقيّم «البنية» أولاً: مقال بلا مقدمة/خاتمة = درجة منخفضة. الهيكل يعطي القارئ خريطة واضحة — والدرجات تتبعها.",
      table: {
        title: "هيكل المقال الجدلي",
        columns: ["الجزء", "الوظيفة", "عبارات مفتاحية"],
        rows: [
          { label: "المقدمة", cells: ["عرض الموضوع", "Das Thema ... ist aktuell. Die Frage ist:"] },
          { label: "Pro-حجج", cells: ["مؤيدات", "Einerseits..., andererseits..."] },
          { label: "Contra-حجج", cells: ["معارضات", "Dagegen spricht..., Jedoch..."] },
          { label: "الخاتمة", cells: ["رأي شخصي", "Meiner Meinung nach..., Zusammenfassend..."] },
        ],
      },
      examples: [
        { de: "Das Thema der Digitalisierung ist sehr aktuell.", ar: "موضوع الرقمنة حاضر جداً." },
        { de: "Einerseits spart Technik Zeit, andererseits macht sie abhängig.", ar: "من ناحية توفر التقنية الوقت، ومن ناحية أخرى تجعلنا معتمدين." },
        { de: "Dagegen spricht, dass der Mensch Ruhe braucht.", ar: "ضد ذلك أن الإنسان يحتاج الهدوء." },
        { de: "Meiner Meinung nach ist ein Gleichgewicht wichtig.", ar: "في رأيي التوازن مهم." },
        { de: "Zusammenfassend kann man sagen, dass die Zukunft offen ist.", ar: "ختاماً يمكن القول إن المستقبل مفتوح." },
      ],
      comparisonWithArabic:
        "«في رأيي» = Meiner Meinung nach — مطابقة! و«من ناحية... ومن ناحية أخرى» = einerseits... andererseits. و«خلاصة القول» = Zusammenfassend. المقال الجدلي العربي والألماني متشابهان جداً.",
      eselsbruecke:
        "«مقدمة → Pro → Contra → خاتمة» — احفظ الهيكل كأربع خطوات. وعباراتك الجاهزة: Meiner Meinung nach... / Zusammenfassend...",
      commonMistakes: [
        { wrong: "مقال بلا خاتمة", right: "اختم دائماً بـ Meiner Meinung nach + Zusammenfassend", whyAr: "الخاتمة إلزامية للدرجات." },
        { wrong: "رأي واحد فقط (بلا Contra)", right: "اعرض الجانبين ثم رأيك", whyAr: "الجدلية توازن: Pro وContra." },
        { wrong: "عبارات عامية في مقال رسمي", right: "استخدم الروابط الرسمية: außerdem, daraus folgt", whyAr: "الأسلوب الرسمي مطلوب." },
      ],
      relatedRuleComparison: {
        title: "Erörterung أم Bericht؟",
        content: "Erörterung = جدل (رأي وحجج). Bericht = تقرير (حقائق فقط بلا رأي). الأول «أرى»، والثاني «أبلغ». لكل منهما هيكله الخاص.",
      },
    },
  ],

  listening: {
    items: [
      {
        id: "l1",
        title: "نقاش فلسفي",
        lines: [
          { speaker: "Moderator", de: "Was bedeutet ein gutes Leben?", ar: "ماذا يعني حياة جيدة؟" },
          { speaker: "Sami", de: "Ich glaube, man braucht Freiheit und Freundschaft. Meiner Meinung nach ist Glück wichtig.", ar: "أعتقد أن المرء يحتاج الحرية والصداقة. في رأيي السعادة مهمة." },
          { speaker: "Anna", de: "Einerseits ja, andererseits braucht man auch Sicherheit.", ar: "من ناحية نعم، ومن ناحية أخرى يحتاج المرء الأمان أيضاً." },
          { speaker: "Moderator", de: "Bis 2050 wird sich unsere Gesellschaft verändert haben. Was denkt ihr?", ar: "بحلول 2050 سيكون مجتمعنا قد تغير. ما رأيكما؟" },
          { speaker: "Anna", de: "Die Werte werden sich geändert haben, aber die Grundfragen bleiben.", ar: "ستتغير القيم لكن الأسئلة الأساسية ستبقى." },
        ],
      },
      {
        id: "l2",
        title: "تحضير مقال",
        lines: [
          { speaker: "Lehrer", de: "Für die Erörterung braucht ihr Pro- und Contra-Argumente.", ar: "للمقال الجدلي تحتاجون حججاً مؤيدة ومعارضة." },
          { speaker: "Karim", de: "Einerseits bringt Technik Fortschritt. Andererseits schadet sie der Umwelt.", ar: "من ناحية تجلب التقنية التقدم. ومن ناحية أخرى تضر البيئة." },
          { speaker: "Lehrer", de: "Sehr gut! Und die Schlussfolgerung?", ar: "جيد جداً! والاستنتاج؟" },
          { speaker: "Karim", de: "Meiner Meinung nach brauchen wir nachhaltige Technik.", ar: "في رأيي نحتاج تقنية مستدامة." },
        ],
      },
    ],
    questions: [
      {
        id: "q1",
        itemId: "l1",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة بعد الاستماع:",
        questionDe: "Was braucht man für ein gutes Leben?",
        questionAr: "ماذا يحتاج المرء لحياة جيدة؟",
        options: ["Freiheit und Freundschaft", "nur Geld", "nur Arbeit", "nichts"],
        correctIndex: 0,
        explanation: "قال سامي: Man braucht Freiheit und Freundschaft.",
        errorType: "vocabulary",
      },
      {
        id: "q2",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist ein Contra-Argument gegen Technik?",
        questionAr: "ما الحجة المعارضة للتقنية؟",
        options: ["Sie schadet der Umwelt", "Sie ist schnell", "Sie ist billig", "Sie hilft"],
        correctIndex: 0,
        explanation: "قال كريم: Andererseits schadet sie der Umwelt.",
        errorType: "vocabulary",
      },
      {
        id: "q3",
        itemId: "l2",
        type: "multiple-choice",
        instructionAr: "اختر الإجابة الصحيحة:",
        questionDe: "Was ist Karims Schlussfolgerung?",
        questionAr: "ما استنتاج كريم؟",
        options: ["Wir brauchen nachhaltige Technik", "Wir brauchen keine Technik", "Technik ist nutzlos", "Wir brauchen mehr Geld"],
        correctIndex: 0,
        explanation: "قال كريم: Meiner Meinung nach brauchen wir nachhaltige Technik.",
        errorType: "vocabulary",
      },
    ],
  },

  pronunciation: {
    id: "p1",
    title: "أصوات الفلسفة: ph، ch، وie",
    items: [
      { de: "die Philosophie", ar: "الفلسفة", note: "ph = ف: فيلوزوفي" },
      { de: "die These", ar: "الأطروحة", note: "th = ت: تيزِه" },
      { de: "argumentieren", ar: "يبني حجة", note: "g = غ: أرغومنتيرن" },
      { de: "das Argument", ar: "الحجة", note: "g = غ: أرغومِنت" },
      { de: "die Erörterung", ar: "المقال الجدلي", note: "ö + r: إر-أُورتِرونغ" },
      { de: "die Gesellschaft", ar: "المجتمع", note: "sch = ش: غِزِلشافت" },
    ],
    tip: "Philosophie = فيلوزوفي — ph تُنطق ف دائماً (من اليونانية). وThese = تيزِه — th تُنطق ت.",
    shadowing: [
      { de: "Bis 2030 werde ich gelernt haben.", ar: "بحلول 2030 سأكون قد تعلمت.", tip: "Futur II: werde ... gelernt haben" },
      { de: "Er wird gegangen sein.", ar: "سيكون قد ذهب.", tip: "Futur II حركة: sein" },
      { de: "Meiner Meinung nach ist das wichtig.", ar: "في رأيي هذا مهم.", tip: "Meiner Meinung nach" },
      { de: "Einerseits..., andererseits...", ar: "من ناحية... ومن ناحية أخرى...", tip: "الروابط الجدلية" },
    ],
  },

  writing: [
    {
      id: "w1",
      type: "transformation",
      instructionAr: "اكتب جملة Futur II:",
      prompt: "«بحلول غدٍ سأكون قد أنهيت الكتاب» (Futur II)",
      acceptedAnswers: ["Bis morgen werde ich das Buch beendet haben", "Bis morgen werde ich das Buch gelesen haben"],
      sampleAnswer: "Bis morgen werde ich das Buch beendet haben.",
      explanation: "Futur II: werde + PII + haben في النهاية.",
      errorType: "grammar",
    },
    {
      id: "w2",
      type: "fill-blank",
      instructionAr: "أكمل بـ Futur II:",
      template: "Bis 2030 werde ich Deutsch ___ (gelernt haben/gelernt sein). Er wird ___ gegangen ___ (sein/haben).",
      blanks: [
        { correct: "gelernt haben", options: ["gelernt haben", "gelernt sein", "gelernt"] },
        { correct: "sein", options: ["sein", "haben", "gehabt"] },
      ],
      explanation: "فعل عادي → haben. حركة → sein.",
      errorType: "grammar",
    },
    {
      id: "w3",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Die Gesellschaft wird sich verändert haben.",
      explanation: "سيكون المجتمع قد تغير — Futur II.",
      errorType: "spelling",
    },
  ],

  practiceBank: [
    {
      id: "e1",
      type: "multiple-choice",
      instructionAr: "اختر Futur II:",
      questionDe: "Bis morgen ___ ich das Buch beendet ___.",
      options: ["werde ... haben", "werde ... sein", "wird ... haben", "habe ... worden"],
      correctIndex: 0,
      explanation: "فعل عادي: werde + PII + haben.",
      errorType: "grammar",
    },
    {
      id: "e2",
      type: "multiple-choice",
      instructionAr: "اختر Futur II (حركة):",
      questionDe: "Er wird ___ gegangen ___.",
      options: ["... sein", "... haben", "... gehabt", "... worden"],
      correctIndex: 0,
      explanation: "حركة → sein.",
      errorType: "grammar",
    },
    {
      id: "e3",
      type: "matching",
      instructionAr: "صل كلمة الفلسفة بمعناها:",
      pairs: [
        { left: "die These", right: "الأطروحة" },
        { left: "das Argument", right: "الحجة" },
        { left: "die Erörterung", right: "المقال الجدلي" },
        { left: "die Philosophie", right: "الفلسفة" },
      ],
      explanation: "أربع كلمات فلسفية أساسية.",
      errorType: "vocabulary",
    },
    {
      id: "e4",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Bis", "werde", "ich", "gelernt", "2030", "Deutsch", "haben", "."],
      correctSentence: "Bis 2030 werde ich Deutsch gelernt haben.",
      explanation: "Futur II: werde + PII + haben في النهاية.",
      errorType: "word-order",
    },
    {
      id: "e5",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Er wird gegangen haben.",
      wrongWord: "haben",
      correctWord: "sein",
      options: ["sein", "haben", "gehabt", "worden"],
      explanation: "gehen حركة → sein.",
      errorType: "grammar",
    },
    {
      id: "e6",
      type: "fill-blank",
      instructionAr: "أكمل بعبارة جدلية:",
      template: "___ Meinung nach ist das wichtig. (في رأيي) ___, ... andererseits ... (من ناحية)",
      blanks: [
        { correct: "Meiner", options: ["Meiner", "Meine", "Mein"] },
        { correct: "Einerseits", options: ["Einerseits", "Andererseits", "Außerdem"] },
      ],
      explanation: "Meiner Meinung nach + einerseits... andererseits.",
      errorType: "grammar",
    },
    {
      id: "e7",
      type: "transformation",
      instructionAr: "اكتب خاتمة مقال:",
      prompt: "اكتب: «في رأيي التوازن مهم»",
      acceptedAnswers: ["Meiner Meinung nach ist ein Gleichgewicht wichtig", "Meiner Meinung nach ist Balance wichtig"],
      sampleAnswer: "Meiner Meinung nach ist ein Gleichgewicht wichtig.",
      explanation: "عبارة الخاتمة: Meiner Meinung nach...",
      errorType: "grammar",
    },
    {
      id: "e8",
      type: "multiple-choice",
      instructionAr: "اختر الترجمة الصحيحة:",
      questionDe: "Zusammenfassend",
      questionAr: "ما معنى الكلمة؟",
      options: ["خلاصةً/ختاماً", "أولاً", "علاوة على ذلك", "مع ذلك"],
      correctIndex: 0,
      explanation: "Zusammenfassend = ختاماً/خلاصةً.",
      errorType: "vocabulary",
    },
    {
      id: "e9",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Ich werde das Buch beendet haben haben.",
      wrongWord: "haben haben",
      correctWord: "haben",
      options: ["haben", "haben haben", "sein haben", "haben gehabt"],
      explanation: "طبقة واحدة: beendet haben.",
      errorType: "grammar",
    },
    {
      id: "e10",
      type: "dictation",
      instructionAr: "استمع واكتب الجملة:",
      audioText: "Meiner Meinung nach ist ein Gleichgewicht wichtig.",
      explanation: "في رأيي التوازن مهم — عبارة جدلية.",
      errorType: "spelling",
    },
  ],

  fehlerUndTipps: {
    mistakes: [
      { wrong: "Er wird gegangen haben (حركة بـ haben)", right: "Er wird gegangen sein.", whyAr: "الحركة: sein." },
      { wrong: "مقال بلا خاتمة", right: "Meiner Meinung nach + Zusammenfassend", whyAr: "الخاتمة للدرجات." },
      { wrong: "Futur I أم II؟", right: "I = سيفعل. II = سيكون قد فعل", whyAr: "الاكتمال." },
    ],
    eselsbruecken: [
      "«سيكون قد = werde + PII + haben/sein».",
      "«الهيكل الجدلي: مقدمة → Pro → Contra → خاتمة».",
    ],
    culturalNote: {
      title: "الفلسفة الألمانية",
      content:
        "ألمانيا بلد الفلاسفة: كانط، هيغل، نيتشه، ماركس، هابرماس. و«die Aufklärung» (التنوير) قيمتها الأساسية. والتعبير عن الرأي (Meinungsfreiheit) محمي دستورياً — الرقابة (die Zensur) مرفوضة في القانون الأساسي؛ لكن خطاب الكراهية (Hate Speech) والتحريض (Volksverhetzung) محظوران قانوناً. والألمان يناقشون بجدية: «Wir diskutieren gerne».",
    },
  },

  miniTest: [
    {
      id: "m1",
      type: "multiple-choice",
      instructionAr: "اختر Futur II:",
      questionDe: "Bis 2030 ___ ich Deutsch gelernt ___.",
      options: ["werde ... haben", "werde ... sein", "wird ... haben", "habe ... worden"],
      correctIndex: 0,
      explanation: "فعل عادي: werde + haben.",
      errorType: "grammar",
    },
    {
      id: "m2",
      type: "multiple-choice",
      instructionAr: "اختر Futur II (حركة):",
      questionDe: "Wir werden ___ angekommen ___.",
      options: ["... sein", "... haben", "... gehabt", "... worden"],
      correctIndex: 0,
      explanation: "حركة → sein.",
      errorType: "grammar",
    },
    {
      id: "m3",
      type: "word-ordering",
      instructionAr: "رتّب الجملة:",
      tokens: ["Meiner", "nach", "ist", "Meinung", "das", "wichtig", "."],
      correctSentence: "Meiner Meinung nach ist das wichtig.",
      explanation: "في رأيي هذا مهم.",
      errorType: "word-order",
    },
    {
      id: "m4",
      type: "error-correction",
      instructionAr: "صحّح الخطأ:",
      wrongSentence: "Sie wird das Buch gelesen sein.",
      wrongWord: "sein",
      correctWord: "haben",
      options: ["haben", "sein", "gehabt", "worden"],
      explanation: "قراءة فعل عادي → haben.",
      errorType: "grammar",
    },
    {
      id: "m5",
      type: "fill-blank",
      instructionAr: "أكمل بعبارة:",
      template: "___ Meinung nach... (في رأيي) ___, andererseits... (من ناحية)",
      blanks: [
        { correct: "Meiner", options: ["Meiner", "Meine", "Mein"] },
        { correct: "Einerseits", options: ["Einerseits", "Andererseits", "Außerdem"] },
      ],
      explanation: "Meiner Meinung nach + einerseits.",
      errorType: "grammar",
    },
  ],

  flashcards: [
    { id: "fc1", de: "die Philosophie", ar: "الفلسفة", example: "Philosophie fragt nach dem Sinn.", exampleAr: "تسأل الفلسفة عن المعنى.", level: "B2" },
    { id: "fc2", de: "die These", ar: "الأطروحة", example: "Die These ist klar.", exampleAr: "الأطروحة واضحة.", level: "B2" },
    { id: "fc3", de: "das Argument", ar: "الحجة", example: "Das Argument ist stark.", exampleAr: "الحجة قوية.", level: "B2" },
    { id: "fc4", de: "die Erörterung", ar: "المقال الجدلي", example: "Die Erörterung ist gut strukturiert.", exampleAr: "المقال الجدلي منظم جيداً.", level: "B2" },
    { id: "fc5", de: "das Futur II", ar: "المستقبل التام", example: "werde gelernt haben", exampleAr: "سأكون قد تعلمت", level: "B2" },
    { id: "fc6", de: "Meiner Meinung nach", ar: "في رأيي", example: "Meiner Meinung nach ist das gut.", exampleAr: "في رأيي هذا جيد.", level: "B2" },
    { id: "fc7", de: "einerseits... andererseits", ar: "من ناحية... ومن ناحية أخرى", example: "Einerseits..., andererseits...", exampleAr: "من ناحية... ومن ناحية أخرى...", level: "B2" },
    { id: "fc8", de: "zusammenfassend", ar: "خلاصةً", example: "Zusammenfassend kann man sagen...", exampleAr: "خلاصةً يمكن القول...", level: "B2" },
  ],

  /* ═══ الوساطة والتفاعل (CEFR 2020) ═══ */
  mediation: [
        {
      id: "med-b2-07-1", type: "summarize-de-to-ar",
      titleAr: "لخّص نصاً فلسفياً اجتماعياً بالعربية",
      sourceDe: "Die Frage nach dem Sinn des Lebens beschäftigt die Menschheit seit Jahrtausenden. Philosophen argumentieren, dass Sinn oft durch Beziehungen und Gemeinschaft entsteht.",
      taskAr: "لخّص النص: السؤال الفلسفي، وما يرى الفلاسفة أنه مصدر المعنى.",
      modelAnswerAr: "«سؤال معنى الحياة يشغل البشرية منذ آلاف السنين. يرى الفلاسفة أن المعنى ينشأ غالباً عبر العلاقات والمجتمع.»",
      keyPointsAr: ["نقلت السؤال الفلسفي", "ذكرت رأي الفلاسفة (العلاقات والمجتمع)"],
    },
  ],
      interaction: [
    {
      id: "int-b2-07-1",
      scenarioAr: "نقاش فلسفي عن مفهوم السعادة مع صديق.",
      scenarioDe: "Philosophische Diskussion über Glück.",
      strategyAr: "الاستراتيجية: التعبير عن مفاهيم مجردة وتقدير وجهات النظر المختلفة.",
      rounds: [
        {
          speakerDe: "Was bedeutet Glück für dich?",
          speakerAr: "ماذا تعني السعادة لك؟",
          options: [
            { de: "Für mich ist Glück weniger ein Ziel als ein Zustand. Es entsteht in Momenten der Verbundenheit und Dankbarkeit, nicht durch materiellen Besitz.", ar: "بالنسبة لي السعادة ليست هدفاً بقدر ما هي حالة. تنشأ في لحظات التواصل والامتنان، لا بالملكية المادية.", best: true, replyDe: "Eine tiefe und reflektierte Antwort. Hat sich deine Sichtweise verändert?", replyAr: "إجابة عميقة وتأملية. هل تغيرت نظرتك؟" },
            { de: "Glück ist Geld, ganz einfach.", ar: "السعادة هي المال، ببساطة.", best: false, replyDe: "Die Forschung zeigt, dass Geld nur bis zu einem gewissen Punkt glücklich macht.", replyAr: "يُظهر البحث أن المال يسعد فقط حتى حد معين." },
          ],
        },
        {
          speakerDe: "Hat sich deine Sichtweise auf Glück verändert?",
          speakerAr: "هل تغيرت نظرتك للسعادة؟",
          options: [
            { de: "Ja, früher dachte ich, Erfolg sei entscheidend. Heute weiß ich, dass Beziehungen und Gesundheit wichtiger sind, obwohl Erfolg auch seinen Wert hat.", ar: "نعم، كنت أظن سابقاً أن النجاح حاسم. اليوم أعلم أن العلاقات والصحة أهم، رغم أن للنجاح قيمته أيضاً.", best: true, replyDe: "Eine weise Erkenntnis. Das Leben lehrt uns solche Lektionen.", replyAr: "حكمة ناضجة. الحياة تعلمنا هذه الدروس." },
            { de: "Meine Sichtweise hat sich nie geändert und wird sich nie ändern.", ar: "لم تتغير نظرتي ولن تتغير أبداً.", best: false, replyDe: "Flexibilität im Denken ist ein Zeichen von Reife.", replyAr: "مرونة التفكير علامة نضج." },
          ],
        },
      ],
    },
  ],

};