import type { InteractiveStory } from "./types";

/** قصص A2 إضافية — 5 قصص (الهدف: 13 إجمالاً) — كل قصة بسؤالين + شرح خيارات */

const A2_9: InteractiveStory = {
  id: "a2-friseur",
  level: "A2",
  title: "Beim Friseur",
  titleAr: "عند الحلاق",
  emoji: "💇",
  description: "لوكاس يقص شعره — الخدمات والتعبير عن الرغبة.",
  grammar: "الخدمات • الأوصاف (kürzer) • höflich fragen",
  segments: [
    { id: 1, de: "Lukas ist beim Friseur. Er möchte seine Haare schneiden lassen.", ar: "لوكاس عند الحلاق. يريد قص شعره." },
    { id: 2, de: "Der Friseur fragt: „Wie möchten Sie die Haare? Kürzer?“", ar: "يسأل الحلاق: «كيف تريد الشعر؟ أقصر؟»" },
    {
      id: 3,
      de: "Lukas sagt: „Ja, ein bisschen kürzer, bitte. Aber nicht zu kurz!“",
      ar: "يقول لوكاس: «نعم، أقصر قليلاً من فضلك. لكن ليس قصيراً جداً!»",
      question: {
        de: "Wo ist Lukas?",
        ar: "أين لوكاس؟",
        options: [
          { text: "Beim Friseur", ar: "عند الحلاق", correct: true, explanation: "نعم — القصة تبدأ عند الحلاق." },
          { text: "Beim Zahnarzt", ar: "عند طبيب الأسنان", correct: false, explanation: "لا — لا حديث عن أسنان." },
          { text: "Im Restaurant", ar: "في المطعم", correct: false, explanation: "لا — لا طعام في هذه القصة." },
        ],
      },
    },
    {
      id: 4,
      de: "Der Friseur schneidet die Haare. Lukas ist zufrieden.",
      ar: "يقص الحلاق الشعر. لوكاس راضٍ.",
      question: {
        de: "Wie möchte Lukas die Haare?",
        ar: "كيف يريد لوكاس الشعر؟",
        options: [
          { text: "Ein bisschen kürzer", ar: "أقصر قليلاً", correct: true, explanation: "صحيح — «ein bisschen kürzer, aber nicht zu kurz»." },
          { text: "Sehr kurz", ar: "قصيراً جداً", correct: false, explanation: "لا — قال بوضوح: ليس قصيراً جداً!" },
          { text: "Ganz lang", ar: "طويلاً جداً", correct: false, explanation: "لا — ذهب ليقصّ شعره وليس ليطوّله." },
        ],
      },
    },
    { id: 5, de: "Er bezahlt 18 Euro und gibt ein Trinkgeld. Ende.", ar: "يدفع 18 يورو ويترك إكرامية. النهاية." },
  ],
};

const A2_10: InteractiveStory = {
  id: "a2-fahrrad",
  level: "A2",
  title: "Das neue Fahrrad",
  titleAr: "الدراجة الجديدة",
  emoji: "🚲",
  description: "ميا تشتري دراجة — المقارنة والاختيار.",
  grammar: "المقارنة (billiger, schneller) • الشراء",
  segments: [
    { id: 1, de: "Mia möchte ein Fahrrad kaufen. Sie schaut im Internet.", ar: "تريد ميا شراء دراجة. تتصفح الإنترنت." },
    { id: 2, de: "Das erste Fahrrad ist teuer, aber sehr gut. Das zweite ist billiger.", ar: "الدراجة الأولى غالية لكنها جيدة جداً. الثانية أرخص." },
    {
      id: 3,
      de: "Mia testet beide Fahrräder im Laden.",
      ar: "تجرب ميا الدراجتين في المحل.",
      question: {
        de: "Was möchte Mia kaufen?",
        ar: "ماذا تريد ميا شراء؟",
        options: [
          { text: "Ein Fahrrad", ar: "دراجة", correct: true, explanation: "نعم — «Mia möchte ein Fahrrad kaufen»." },
          { text: "Ein Auto", ar: "سيارة", correct: false, explanation: "لا — القصة عن دراجة." },
          { text: "Ein Buch", ar: "كتاباً", correct: false, explanation: "لا — لا كتب في القصة." },
        ],
      },
    },
    {
      id: 4,
      de: "Sie kauft das erste, weil es sicherer und stabiler ist.",
      ar: "تشتري الأولى لأنها أأمن وأثبت.",
      question: {
        de: "Was ist das zweite Fahrrad?",
        ar: "كيف الدراجة الثانية؟",
        options: [
          { text: "Billiger", ar: "أرخص", correct: true, explanation: "صحيح — «Das zweite ist billiger»." },
          { text: "Teurer", ar: "أغلى", correct: false, explanation: "لا — الغالية هي الأولى." },
          { text: "Kaputt", ar: "مكسورة", correct: false, explanation: "لا — الدراجتان سليمتان." },
        ],
      },
    },
    { id: 5, de: "Mia fährt glücklich nach Hause. Das Fahrrad ist super! Ende.", ar: "تركب ميا إلى البيت سعيدة. الدراجة رائعة! النهاية." },
  ],
};

const A2_11: InteractiveStory = {
  id: "a2-zahnarzt",
  level: "A2",
  title: "Der Zahnarztbesuch",
  titleAr: "زيارة طبيب الأسنان",
  emoji: "🦷",
  description: "فيل يعاني من ألم الأسنان — الألم والنصائح.",
  grammar: "الألم (Zahnschmerzen) • النصائح (sollen) • الخوف",
  segments: [
    { id: 1, de: "Felix hat starke Zahnschmerzen. Er muss zum Zahnarzt.", ar: "فيلكس يعاني من ألم أسنان شديد. يجب أن يذهب لطبيب الأسنان." },
    { id: 2, de: "Er hat ein bisschen Angst. Seine Mutter kommt mit.", ar: "خائف قليلاً. أمه تأتي معه." },
    {
      id: 3,
      de: "Der Zahnarzt untersucht den Zahn: „Sie müssen weniger Süßes essen!“",
      ar: "يفحص الطبيب السن: «يجب أن تأكل حلويات أقل!»",
      question: {
        de: "Was hat Felix?",
        ar: "ماذا يعاني فيلكس؟",
        options: [
          { text: "Zahnschmerzen", ar: "ألم أسنان", correct: true, explanation: "نعم — «starke Zahnschmerzen» = ألم أسنان شديد." },
          { text: "Kopfschmerzen", ar: "صداع", correct: false, explanation: "لا — الألم في الأسنان وليس الرأس." },
          { text: "Bauchschmerzen", ar: "ألم بطن", correct: false, explanation: "لا — لا ذكر لألم البطن." },
        ],
      },
    },
    {
      id: 4,
      de: "Der Arzt repariert den Zahn. Felix ist tapfer.",
      ar: "يصلح الطبيب السن. فيلكس شجاع.",
      question: {
        de: "Was sagt der Zahnarzt?",
        ar: "ماذا يقول طبيب الأسنان؟",
        options: [
          { text: "Weniger Süßes essen", ar: "أكل حلويات أقل", correct: true, explanation: "صحيح — النصيحة: «weniger Süßes essen»." },
          { text: "Mehr Kaffee trinken", ar: "شرب قهوة أكثر", correct: false, explanation: "لا — القهوة لا علاقة لها بألم الأسنان هنا." },
          { text: "Kein Wasser trinken", ar: "لا تشرب الماء", correct: false, explanation: "لا — لم يمنعه من الماء." },
        ],
      },
    },
    { id: 5, de: "Nach dem Besuch sagt Felix: „Das war gar nicht schlimm!“ Ende.", ar: "بعد الزيارة يقول فيلكس: «لم يكن الأمر سيئاً إطلاقاً!» النهاية." },
  ],
};

const A2_12: InteractiveStory = {
  id: "a2-hotel",
  level: "A2",
  title: "Im Hotel",
  titleAr: "في الفندق",
  emoji: "🏨",
  description: "عائلة تصل إلى الفندق — الحجز والغرف.",
  grammar: "الحجز • الخدمات • wie lange",
  segments: [
    { id: 1, de: "Die Familie kommt im Hotel an. Sie haben ein Zimmer reserviert.", ar: "تصل العائلة إلى الفندق. لقد حجزوا غرفة." },
    { id: 2, de: "Der Empfang fragt: „Wie lange bleiben Sie?“ „Drei Nächte“, sagt der Vater.", ar: "يستقبل الموظف: «كم ستبقون؟» «ثلاث ليالٍ» يقول الأب." },
    {
      id: 3,
      de: "Das Zimmer ist im dritten Stock. Es ist groß und hell.",
      ar: "الغرفة في الطابق الثالث. كبيرة ومضيئة.",
      question: {
        de: "Wo ist die Familie?",
        ar: "أين العائلة؟",
        options: [
          { text: "Im Hotel", ar: "في الفندق", correct: true, explanation: "نعم — وصلت العائلة إلى الفندق." },
          { text: "Im Zug", ar: "في القطار", correct: false, explanation: "لا — هم في الفندق وليس في قطار." },
          { text: "Im Supermarkt", ar: "في السوبرماركت", correct: false, explanation: "لا — لا حديث عن تسوق." },
        ],
      },
    },
    {
      id: 4,
      de: "Am Abend essen sie im Restaurant des Hotels.",
      ar: "في المساء يأكلون في مطعم الفندق.",
      question: {
        de: "Wie lange bleibt die Familie?",
        ar: "كم تبقى العائلة؟",
        options: [
          { text: "Drei Nächte", ar: "ثلاث ليالٍ", correct: true, explanation: "صحيح — «Drei Nächte» قال الأب." },
          { text: "Eine Nacht", ar: "ليلة واحدة", correct: false, explanation: "لا — قال الأب ثلاث ليالٍ." },
          { text: "Eine Woche", ar: "أسبوعاً", correct: false, explanation: "لا — المدة ثلاث ليالٍ وليست أسبوعاً." },
        ],
      },
    },
    { id: 5, de: "Das Frühstück am Morgen ist reichhaltig. Alle sind zufrieden. Ende.", ar: "فطور الصباح غني. الجميع راضون. النهاية." },
  ],
};

const A2_13: InteractiveStory = {
  id: "a2-jahrmarkt",
  level: "A2",
  title: "Auf dem Jahrmarkt",
  titleAr: "في المهرجان الشعبي",
  emoji: "🎡",
  description: "أصدقاء في المهرجان — الألعاب والطعام والمشاعر.",
  grammar: "الماضي التام (haben gekauft, sind gefahren) • المشاعر",
  segments: [
    { id: 1, de: "Am Samstag sind die Freunde auf den Jahrmarkt gegangen.", ar: "يوم السبت ذهب الأصدقاء إلى المهرجان الشعبي." },
    { id: 2, de: "Sie sind mit dem Riesenrad gefahren. Die Aussicht war fantastisch!", ar: "ركبوا العجلة الدوارة. كان المنظر رائعاً!" },
    {
      id: 3,
      de: "Danach haben sie Zuckerwatte und Bratwurst gekauft.",
      ar: "ثم اشتروا غزل البنات والنقانق المشوية.",
      question: {
        de: "Wann sind die Freunde auf den Jahrmarkt gegangen?",
        ar: "متى ذهب الأصدقاء إلى المهرجان؟",
        options: [
          { text: "Am Samstag", ar: "يوم السبت", correct: true, explanation: "نعم — «Am Samstag sind sie gegangen»." },
          { text: "Am Montag", ar: "يوم الاثنين", correct: false, explanation: "لا — اليوم هو السبت." },
          { text: "Am Freitag", ar: "يوم الجمعة", correct: false, explanation: "لا — النص يقول السبت." },
        ],
      },
    },
    {
      id: 4,
      de: "Abends haben sie Spiele gespielt und Preise gewonnen.",
      ar: "في المساء لعبوا ألعاباً وفازوا بجوائز.",
      question: {
        de: "Was haben sie gekauft?",
        ar: "ماذا اشتروا؟",
        options: [
          { text: "Zuckerwatte und Bratwurst", ar: "غزل بنات ونقانق", correct: true, explanation: "صحيح — الطعام الشعبي في المهرجان." },
          { text: "Nur Wasser", ar: "ماء فقط", correct: false, explanation: "لا — اشتروا غزل البنات والنقانق." },
          { text: "Bücher", ar: "كتباً", correct: false, explanation: "لا — لا كتب في المهرجان." },
        ],
      },
    },
    { id: 5, de: "Müde aber glücklich sind sie nach Hause gegangen. Ende.", ar: "عادوا إلى البيت متعبين لكن سعداء. النهاية." },
  ],
};

export const A2_EXTRA_STORIES: InteractiveStory[] = [A2_9, A2_10, A2_11, A2_12, A2_13];
