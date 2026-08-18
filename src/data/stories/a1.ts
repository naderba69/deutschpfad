import type { InteractiveStory } from "./types";

/**
 * ═══════════════════════════════════════════════════════════
 *  قصص A1 — 8 قصص (مبتدئ)
 *  التركيز: الزمن المضارع • sein/haben • مفردات يومية بسيطة
 *  · الترتيب: من الأسهل (المتجر) إلى الأكثر تركيباً (جدول اليوم)
 * ═══════════════════════════════════════════════════════════
 */

const A1_1: InteractiveStory = {
  id: "a1-anna-einkaufen",
  level: "A1",
  title: "Anna geht einkaufen",
  titleAr: "آنا تذهب للتسوق",
  emoji: "🛒",
  description: "آنا تذهب إلى السوق وتشتري الفواكه — مفردات الطعام والثمن.",
  grammar: "مفردات الطعام • صيغة الأمر • الأرقام",
  segments: [
    {
      id: 1,
      de: "Anna ist im Supermarkt. Sie braucht Obst.",
      ar: "آنا في السوبرماركت. تحتاج فواكه.",
    },
    {
      id: 2,
      de: "Sie fragt: „Wo sind die Äpfel?“",
      ar: "تسأل: «أين التفاح؟»",
      question: {
        de: "Was braucht Anna?",
        ar: "ماذا تحتاج آنا؟",
        options: [
          { text: "Obst", ar: "فواكه", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Obst» (فواكه)." },
          { text: "Brot", ar: "خبز", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Milch", ar: "حليب", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Der Verkäufer sagt: „Die Äpfel kosten zwei Euro.“",
      ar: "يقول البائع: «التفاح يكلف يوروين».",
    },
    {
      id: 4,
      de: "Anna sagt: „Ich nehme drei Äpfel, bitte.“",
      ar: "تقول آنا: «سآخذ ثلاثة تفاح، من فضلك».",
      question: {
        de: "Wie viel kostet ein Apfel? (2 € pro Stück)",
        ar: "كم تكلف التفاحة الواحدة؟ (2 يورو للحبة)",
        options: [
          { text: "Zwei Euro", ar: "يوروين", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Zwei Euro» (يوروين)." },
          { text: "Drei Euro", ar: "ثلاثة يورو", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Zehn Euro", ar: "عشرة يورو", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Anna bezahlt und geht nach Hause. Sie ist glücklich.",
      ar: "تدفع آنا وتعود إلى البيت. إنها سعيدة.",
      choices: [
        { text: "Guten Appetit!", ar: "بالهناء والشفاء!", next: 6, feedback: "عبارة لطيفة — القصة انتهت." },
        { text: "Ich möchte auch Äpfel!", ar: "أريد تفاحاً أيضاً!", next: 6, feedback: "جملة مفيدة — القصة انتهت." },
      ],
    },
    { id: 6, de: "Das ist das Ende. Tschüss!", ar: "هذه هي النهاية. إلى اللقاء!" },
  ],
};

const A1_2: InteractiveStory = {
  id: "a1-max-hund",
  level: "A1",
  title: "Max und der Hund",
  titleAr: "ماكس والكلب",
  emoji: "🐕",
  description: "ماكس يجد كلباً صغيراً في الحديقة — مفردات الحيوانات والمشاعر.",
  grammar: "ضمائر الملكية • الأفعال الشائعة (sein, haben, finden)",
  segments: [
    {
      id: 1,
      de: "Max spielt im Park. Er sieht einen kleinen Hund.",
      ar: "يلعب ماكس في الحديقة. يرى كلباً صغيراً.",
    },
    {
      id: 2,
      de: "Der Hund ist allein. Max sagt: „Wem gehörst du?“",
      ar: "الكلب وحيد. يقول ماكس: «لمن تنتمي؟»",
      question: {
        de: "Wo spielt Max?",
        ar: "أين يلعب ماكس؟",
        options: [
          { text: "Im Park", ar: "في الحديقة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Im Park» (في الحديقة)." },
          { text: "In der Schule", ar: "في المدرسة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Zu Hause", ar: "في البيت", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Max nimmt den Hund und geht nach Hause. Seine Mutter öffnet die Tür.",
      ar: "يأخذ ماكس الكلب ويعود إلى البيت. تفتح أمه الباب.",
    },
    {
      id: 4,
      de: "Die Mutter fragt: „Ist das dein Hund?“ Max sagt: „Nein, ich weiß nicht.“",
      ar: "تسأل الأم: «هل هذا كلبك؟» يقول ماكس: «لا، لا أعرف».",
      question: {
        de: "Wem gehört der Hund?",
        ar: "لمن ينتمي الكلب؟",
        options: [
          { text: "Max weiß nicht", ar: "ماكس لا يعرف", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Max weiß nicht» (ماكس لا يعرف)." },
          { text: "Der Mutter", ar: "لأم ماكس", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Dem Verkäufer", ar: "للبائع", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am Abend kommt ein Nachbar. „Das ist mein Hund!“ Er ist sehr glücklich.",
      ar: "في المساء يأتي جار. «هذا كلبي!» إنه سعيد جداً.",
      choices: [
        { text: "Der Hund ist zu Hause.", ar: "الكلب في البيت.", next: 6, feedback: "جملة صحيحة نحويًا." },
        { text: "Der Hund hat Hunger.", ar: "الكلب جائع.", next: 6, feedback: "احتمال معقول." },
      ],
    },
    { id: 6, de: "Max sagt: „Tschüss, kleiner Hund!“ Ende.", ar: "يقول ماكس: «إلى اللقاء أيها الكلب الصغير!» النهاية." },
  ],
};

const A1_3: InteractiveStory = {
  id: "a1-erster-schultag",
  level: "A1",
  title: "Der erste Schultag",
  titleAr: "أول يوم دراسي",
  emoji: "🎒",
  description: "لينا في أول يوم لها في المدرسة — مفردات المدرسة والوقت.",
  grammar: "مفردات المدرسة • قراءة الساعة • haben",
  segments: [
    {
      id: 1,
      de: "Lena ist sechs Jahre alt. Heute ist ihr erster Schultag.",
      ar: "لينا عمرها ست سنوات. اليوم أول يوم دراسي لها.",
    },
    {
      id: 2,
      de: "Sie hat einen neuen Schulranzen. Er ist rot und blau.",
      ar: "لديها حقيبة مدرسية جديدة. إنها حمراء وزرقاء.",
      question: {
        de: "Was hat Lena?",
        ar: "ماذا لدى لينا؟",
        options: [
          { text: "Einen neuen Schulranzen", ar: "حقيبة مدرسية جديدة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Einen neuen Schulranzen» (حقيبة مدرسية جديدة)." },
          { text: "Ein neues Fahrrad", ar: "دراجة جديدة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Einen neuen Computer", ar: "حاسوب جديد", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Um acht Uhr geht Lena zur Schule. Ihre Mama ist dabei.",
      ar: "في الثامنة تذهب لينا إلى المدرسة. أمها معها.",
    },
    {
      id: 4,
      de: "Der Lehrer sagt: „Hallo Lena, willkommen in der Schule!“",
      ar: "يقول المعلم: «مرحباً لينا، أهلاً بك في المدرسة!»",
      question: {
        de: "Wann geht Lena zur Schule?",
        ar: "متى تذهب لينا إلى المدرسة؟",
        options: [
          { text: "Um acht Uhr", ar: "في الثامنة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Um acht Uhr» (في الثامنة)." },
          { text: "Um zwölf Uhr", ar: "في الثانية عشرة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Um sechs Uhr", ar: "في السادسة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Lena ist ein bisschen nervös, aber der Lehrer ist nett.",
      ar: "لينا متوترة قليلاً، لكن المعلم لطيف.",
      choices: [
        { text: "Die Schule ist schön.", ar: "المدرسة جميلة.", next: 6, feedback: "رأي جميل!" },
        { text: "Lena ist müde.", ar: "لينا متعبة.", next: 6, feedback: "معقول بعد يوم طويل." },
      ],
    },
    { id: 6, de: "Am Nachmittag erzählt Lena: „Die Schule macht Spaß!“ Ende.", ar: "بعد الظهر تحكي لينا: «المدرسة ممتعة!» النهاية." },
  ],
};

const A1_4: InteractiveStory = {
  id: "a1-picknick",
  level: "A1",
  title: "Das Picknick",
  titleAr: "النزهة",
  emoji: "🧺",
  description: "عائلة مولر تتنزه في الحديقة — الطعام والطقس والألوان.",
  grammar: "الطعام والشراب • الطقس • الألوان",
  segments: [
    {
      id: 1,
      de: "Es ist Sonntag. Die Sonne scheint und der Himmel ist blau.",
      ar: "إنه يوم الأحد. الشمس مشرقة والسماء زرقاء.",
    },
    {
      id: 2,
      de: "Familie Müller macht ein Picknick im Park.",
      ar: "تقوم عائلة مولر بنزهة في الحديقة.",
      question: {
        de: "Was macht die Familie?",
        ar: "ماذا تفعل العائلة؟",
        options: [
          { text: "Ein Picknick", ar: "نزهة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Ein Picknick» (نزهة)." },
          { text: "Ein Konzert", ar: "حفلة موسيقية", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Ein Fußballspiel", ar: "مباراة كرة قدم", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Sie hat Brot, Käse, Äpfel und Saft dabei.",
      ar: "معهم خبز وجبن وتفاح وعصير.",
    },
    {
      id: 4,
      de: "Der kleine Paul findet einen roten Ball im Gras.",
      ar: "يجد بول الصغير كرة حمراء في العشب.",
      question: {
        de: "Was findet Paul?",
        ar: "ماذا يجد بول؟",
        options: [
          { text: "Einen roten Ball", ar: "كرة حمراء", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Einen roten Ball» (كرة حمراء)." },
          { text: "Einen blauen Schuh", ar: "حذاء أزرق", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Eine gelbe Tasche", ar: "حقيبة صفراء", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Paul spielt mit dem Ball. Die Familie isst und lacht.",
      ar: "يلعب بول بالكرة. العائلة تأكل وتضحك.",
      choices: [
        { text: "Das Picknick ist toll.", ar: "النزهة رائعة.", next: 6, feedback: "أحسنت!" },
        { text: "Es regnet.", ar: "إنها تمطر.", next: 6, feedback: "لا، الشمس مشرقة!" },
      ],
    },
    { id: 6, de: "Am Abend gehen alle müde und glücklich nach Hause. Ende.", ar: "في المساء يعود الجميع إلى البيت متعبين وسعداء. النهاية." },
  ],
};

const A1_5: InteractiveStory = {
  id: "a1-im-zoo",
  level: "A1",
  title: "Im Zoo",
  titleAr: "في حديقة الحيوان",
  emoji: "🦁",
  description: "الطلاب يزورون حديقة الحيوان — الحيوانات والصفات.",
  grammar: "الحيوانات • الصفات (groß, klein, lustig) • sehen",
  segments: [
    {
      id: 1,
      de: "Die Klasse besucht den Zoo. Alle Kinder sind aufgeregt.",
      ar: "يزور الفصل حديقة الحيوان. كل الأطفال متحمسون.",
    },
    {
      id: 2,
      de: "Sie sehen einen großen Elefanten. Er ist grau.",
      ar: "يرون فيلاً كبيراً. إنه رمادي.",
      question: {
        de: "Was sehen die Kinder zuerst?",
        ar: "ماذا يرى الأطفال أولاً؟",
        options: [
          { text: "Einen großen Elefanten", ar: "فيلاً كبيراً", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Einen großen Elefanten» (فيلاً كبيراً)." },
          { text: "Einen kleinen Löwen", ar: "أسداً صغيراً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Eine bunte Schlange", ar: "أفعى ملونة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Der Elefant ist sehr groß. Er trinkt Wasser mit seinem Rüssel.",
      ar: "الفيل كبير جداً. يشرب الماء بخرطومه.",
    },
    {
      id: 4,
      de: "Dann sehen sie einen kleinen Affen. Der Affe ist lustig und springt.",
      ar: "ثم يرون قرداً صغيراً. القرد مضحك ويقفز.",
      question: {
        de: "Wie ist der Affe?",
        ar: "كيف هو القرد؟",
        options: [
          { text: "Lustig", ar: "مضحك", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Lustig» (مضحك)." },
          { text: "Traurig", ar: "حزين", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Laut", ar: "صاخب", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Die Kinder fotografieren die Tiere und essen Eis.",
      ar: "يصور الأطفال الحيوانات ويأكلون الآيس كريم.",
      choices: [
        { text: "Der Zoo ist schön.", ar: "حديقة الحيوان جميلة.", next: 6, feedback: "متفق!" },
        { text: "Die Tiere schlafen.", ar: "الحيوانات تنام.", next: 6, feedback: "ربما لاحقاً!" },
      ],
    },
    { id: 6, de: "Am Ende sagt die Lehrerin: „Das war ein schöner Tag!“ Ende.", ar: "في النهاية تقول المعلمة: «كان يوماً جميلاً!» النهاية." },
  ],
};

const A1_6: InteractiveStory = {
  id: "a1-neue-nachbarin",
  level: "A1",
  title: "Die neue Nachbarin",
  titleAr: "الجارة الجديدة",
  emoji: "🏡",
  description: "جارة جديدة تنتقل إلى البيت — التعارف والنفي.",
  grammar: "التعارف • sein/wohnen • النفي (nicht, kein)",
  segments: [
    {
      id: 1,
      de: "Eine neue Nachbarin wohnt jetzt im Haus. Sie heißt Frau Schmidt.",
      ar: "جارة جديدة تسكن الآن في البيت. اسمها السيدة شميت.",
    },
    {
      id: 2,
      de: "Sie ist nett und freundlich. Tim sieht sie im Treppenhaus.",
      ar: "إنها لطيفة وودودة. يراها تيم في بئر السلم.",
      question: {
        de: "Wie heißt die neue Nachbarin?",
        ar: "ما اسم الجارة الجديدة؟",
        options: [
          { text: "Frau Schmidt", ar: "السيدة شميت", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Frau Schmidt» (السيدة شميت)." },
          { text: "Frau Müller", ar: "السيدة مولر", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Frau Weber", ar: "السيدة فيبر", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Tim sagt: „Hallo, ich heiße Tim. Ich wohne nebenan.“",
      ar: "يقول تيم: «مرحباً، اسمي تيم. أسكن بجانبك».",
    },
    {
      id: 4,
      de: "Frau Schmidt ist nicht allein. Sie hat eine kleine Katze.",
      ar: "السيدة شميت ليست وحيدة. لديها قطة صغيرة.",
      question: {
        de: "Was hat Frau Schmidt?",
        ar: "ماذا لدى السيدة شميت؟",
        options: [
          { text: "Eine kleine Katze", ar: "قطة صغيرة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Eine kleine Katze» (قطة صغيرة)." },
          { text: "Einen großen Hund", ar: "كلباً كبيراً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Einen Papagei", ar: "ببغاء", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Frau Schmidt lädt Tim zu Kaffee und Kuchen ein.",
      ar: "تدعو السيدة شميت تيم لتناول القهوة والكعك.",
      choices: [
        { text: "Tim sagt Ja, gern!", ar: "يقول تيم: نعم، بكل سرور!", next: 6, feedback: "رد مهذب!" },
        { text: "Tim ist zu Hause.", ar: "تيم في البيت.", next: 6, feedback: "لكن الدعوة لطيفة!" },
      ],
    },
    { id: 6, de: "Tim hilft Frau Schmidt mit den Kartons. Ende.", ar: "يساعد تيم السيدة شميت في حمل الصناديق. النهاية." },
  ],
};

const A1_7: InteractiveStory = {
  id: "a1-am-bahnhof",
  level: "A1",
  title: "Am Bahnhof",
  titleAr: "في محطة القطار",
  emoji: "🚆",
  description: "توم يشتري تذكرة إلى هامبورغ — الأرقام والأسعار.",
  grammar: "المواصلات • شراء التذكرة • الأرقام والثمن",
  segments: [
    {
      id: 1,
      de: "Tom ist am Bahnhof. Er möchte nach Hamburg fahren.",
      ar: "توم في محطة القطار. يريد السفر إلى هامبورغ.",
    },
    {
      id: 2,
      de: "Er fragt: „Ein Ticket nach Hamburg, bitte. Was kostet das?“",
      ar: "يسأل: «تذكرة إلى هامبورغ من فضلك. كم التكلفة؟»",
      question: {
        de: "Wohin möchte Tom fahren?",
        ar: "إلى أين يريد توم السفر؟",
        options: [
          { text: "Nach Hamburg", ar: "إلى هامبورغ", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Nach Hamburg» (إلى هامبورغ)." },
          { text: "Nach Berlin", ar: "إلى برلين", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Nach München", ar: "إلى ميونخ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Der Mann am Schalter sagt: „Das kostet dreißig Euro.“",
      ar: "يقول الرجل في الشباك: «التكلفة ثلاثون يورو».",
    },
    {
      id: 4,
      de: "Tom gibt das Geld. Der Zug kommt um zehn Uhr.",
      ar: "يعطي توم المال. يأتي القطار في العاشرة.",
      question: {
        de: "Wie viel kostet das Ticket?",
        ar: "كم تكلف التذكرة؟",
        options: [
          { text: "Dreißig Euro", ar: "ثلاثون يورو", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Dreißig Euro» (ثلاثون يورو)." },
          { text: "Dreizehn Euro", ar: "ثلاثة عشر يورو", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Fünfzig Euro", ar: "خمسون يورو", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Tom steigt in den Zug. Er findet einen Platz am Fenster.",
      ar: "يصعد توم إلى القطار. يجد مقعداً بجانب النافذة.",
      choices: [
        { text: "Die Reise ist lang.", ar: "الرحلة طويلة.", next: 6, feedback: "ثلاث ساعات تقريباً!" },
        { text: "Der Zug ist schnell.", ar: "القطار سريع.", next: 6, feedback: "صحيح!" },
      ],
    },
    { id: 6, de: "Nach drei Stunden: „Willkommen in Hamburg!“ Ende.", ar: "بعد ثلاث ساعات: «مرحباً بك في هامبورغ!» النهاية." },
  ],
};

const A1_8: InteractiveStory = {
  id: "a1-tag-mit-oma",
  level: "A1",
  title: "Ein Tag mit Oma",
  titleAr: "يوم مع الجدة",
  emoji: "👵",
  description: "ميا تقضي يوماً مع جدتها — الروتين اليومي والوقت.",
  grammar: "الروتين اليومي • قراءة الساعة • الأفعال (kochen, backen)",
  segments: [
    {
      id: 1,
      de: "Am Samstag besucht Mia ihre Oma. Sie ist glücklich.",
      ar: "يوم السبت تزور ميا جدتها. إنها سعيدة.",
    },
    {
      id: 2,
      de: "Oma kocht Suppe. Mia hilft in der Küche.",
      ar: "الجدة تطبخ الشوربة. تساعد ميا في المطبخ.",
      question: {
        de: "Was kocht Oma?",
        ar: "ماذا تطبخ الجدة؟",
        options: [
          { text: "Suppe", ar: "شوربة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Suppe» (شوربة)." },
          { text: "Pizza", ar: "بيتزا", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Salat", ar: "سلطة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Um zwölf Uhr essen sie zusammen. Die Suppe schmeckt sehr gut.",
      ar: "في الثانية عشرة يأكلان معاً. الشوربة لذيذة جداً.",
    },
    {
      id: 4,
      de: "Am Nachmittag backen sie einen Kuchen. Er duftet lecker.",
      ar: "بعد الظهر يخبزان كعكة. رائحتها شهية.",
      question: {
        de: "Wann essen sie zusammen?",
        ar: "متى يأكلان معاً؟",
        options: [
          { text: "Um zwölf Uhr", ar: "في الثانية عشرة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Um zwölf Uhr» (في الثانية عشرة)." },
          { text: "Um sieben Uhr", ar: "في السابعة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Um zehn Uhr", ar: "في العاشرة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Oma erzählt Geschichten aus ihrer Kindheit. Mia lacht viel.",
      ar: "تحكي الجدة قصصاً من طفولتها. تضحك ميا كثيراً.",
      choices: [
        { text: "Der Tag ist wunderbar.", ar: "اليوم رائع.", next: 6, feedback: "نعم!" },
        { text: "Mia geht schlafen.", ar: "ميا تنام.", next: 6, feedback: "ليس بعد!" },
      ],
    },
    { id: 6, de: "Am Abend sagt Mia: „Ich komme bald wieder, Oma!“ Ende.", ar: "في المساء تقول ميا: «سأعود قريباً يا جدتي!» النهاية." },
  ],
};

export const A1_STORIES: InteractiveStory[] = [A1_1, A1_2, A1_3, A1_4, A1_5, A1_6, A1_7, A1_8];
