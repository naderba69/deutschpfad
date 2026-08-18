import type { InteractiveStory } from "./types";

/** قصص A1 إضافية — 5 قصص (الهدف: 13 إجمالاً) — كل قصة بسؤالين + شرح خيارات */

const A1_9: InteractiveStory = {
  id: "a1-im-cafe",
  level: "A1",
  title: "Im Café",
  titleAr: "في المقهى",
  emoji: "☕",
  description: "تيم وبيا في المقهى — الطلب والدفع.",
  grammar: "الطلب (Ich möchte) • الأكل والشرب • الثمن",
  segments: [
    { id: 1, de: "Tim und Pia sind im Café. Es ist gemütlich.", ar: "تيم وبيا في المقهى. الجو مريح." },
    {
      id: 2,
      de: "Der Kellner fragt: „Was möchtet ihr?“",
      ar: "يسأل النادل: «ماذا تريدان؟»",
      question: {
        de: "Wo sind Tim und Pia?",
        ar: "أين تيم وبيا؟",
        options: [
          { text: "Im Café", ar: "في المقهى", correct: true, explanation: "نعم — القصة تبدأ: تيم وبيا في المقهى." },
          { text: "Im Kino", ar: "في السينما", correct: false, explanation: "لا — لا يوجد حديث عن فيلم أو سينما." },
          { text: "Im Museum", ar: "في المتحف", correct: false, explanation: "لا — المتحف لم يُذكر إطلاقاً." },
        ],
      },
    },
    { id: 3, de: "Tim sagt: „Ich möchte einen Kaffee, bitte.“ Pia nimmt einen Tee.", ar: "يقول تيم: «أريد قهوة من فضلك». تأخذ بيا شاياً." },
    {
      id: 4,
      de: "Sie essen auch einen Kuchen. Der Kuchen schmeckt sehr gut.",
      ar: "يأكلان أيضاً قطعة كعك. الكعك لذيذ جداً.",
      question: {
        de: "Was möchte Tim?",
        ar: "ماذا يريد تيم؟",
        options: [
          { text: "Einen Kaffee", ar: "قهوة", correct: true, explanation: "صحيح — «Ich möchte einen Kaffee» = أريد قهوة." },
          { text: "Einen Tee", ar: "شاياً", correct: false, explanation: "لا — الشاي من نصيب بيا وليس تيم." },
          { text: "Einen Kuchen", ar: "كعكة", correct: false, explanation: "كلاهما يأكل الكعك، لكن تيم طلب القهوة." },
        ],
      },
    },
    { id: 5, de: "Tim bezahlt sechs Euro. Sie gehen glücklich nach Hause.", ar: "يدفع تيم ستة يورو. يعودان إلى البيت سعيدين." },
  ],
};

const A1_10: InteractiveStory = {
  id: "a1-im-schwimmbad",
  level: "A1",
  title: "Im Schwimmbad",
  titleAr: "في المسبح",
  emoji: "🏊",
  description: "يوم حار — المسبح والآيس كريم.",
  grammar: "الأفعال (schwimmen, kaufen) • الطقس الحار",
  segments: [
    { id: 1, de: "Es ist sehr heiß. Die Kinder gehen ins Schwimmbad.", ar: "الجو حار جداً. يذهب الأطفال إلى المسبح." },
    { id: 2, de: "Sie schwimmen und springen ins Wasser.", ar: "يسبحون ويقفزون في الماء." },
    {
      id: 3,
      de: "Danach kaufen sie Eis. Das Eis ist lecker.",
      ar: "ثم يشترون الآيس كريم. الآيس كريم لذيذ.",
      question: {
        de: "Warum gehen die Kinder ins Schwimmbad?",
        ar: "لماذا يذهب الأطفال إلى المسبح؟",
        options: [
          { text: "Es ist heiß", ar: "الجو حار", correct: true, explanation: "نعم — «Es ist sehr heiß» سبب الذهاب." },
          { text: "Es regnet", ar: "إنها تمطر", correct: false, explanation: "لا — الجو حار وليس ممطراً." },
          { text: "Es ist kalt", ar: "الجو بارد", correct: false, explanation: "لا — في الحر يذهبون للمسبح لا في البرد." },
        ],
      },
    },
    {
      id: 4,
      de: "Am Abend sind die Kinder müde, aber glücklich.",
      ar: "في المساء الأطفال متعبون لكن سعداء.",
      question: {
        de: "Was kaufen die Kinder?",
        ar: "ماذا يشتري الأطفال؟",
        options: [
          { text: "Eis", ar: "آيس كريم", correct: true, explanation: "صحيح — «Sie kaufen Eis» في النص." },
          { text: "Brot", ar: "خبزاً", correct: false, explanation: "لا — الخبز غير مذكور في القصة." },
          { text: "Wasser", ar: "ماء", correct: false, explanation: "لا — يشترون الآيس كريم وليس الماء." },
        ],
      },
    },
    { id: 5, de: "Sie sagen: „Das war ein toller Tag!“ Ende.", ar: "يقولون: «كان يوماً رائعاً!» النهاية." },
  ],
};

const A1_11: InteractiveStory = {
  id: "a1-geschenk",
  level: "A1",
  title: "Das Geschenk",
  titleAr: "الهدية",
  emoji: "🎁",
  description: "سارة تشتري هدية لأمها — التسوق والألوان.",
  grammar: "شراء هدية • الألوان • كلمات لطيفة",
  segments: [
    { id: 1, de: "Morgen hat Saras Mutter Geburtstag. Sara möchte ein Geschenk kaufen.", ar: "غداً عيد ميلاد والدة سارة. تريد سارة شراء هدية." },
    {
      id: 2,
      de: "Sie sieht eine schöne rote Tasche. Sie kostet 25 Euro.",
      ar: "ترى حقيبة حمراء جميلة. تكلف 25 يورو.",
      question: {
        de: "Was sieht Sara?",
        ar: "ماذا ترى سارة؟",
        options: [
          { text: "Eine rote Tasche", ar: "حقيبة حمراء", correct: true, explanation: "نعم — «eine schöne rote Tasche» = حقيبة حمراء جميلة." },
          { text: "Einen blauen Schal", ar: "وشاحاً أزرق", correct: false, explanation: "لا — الوشاح الأزرق غير موجود في القصة." },
          { text: "Eine gelbe Jacke", ar: "سترة صفراء", correct: false, explanation: "لا — الحقيبة حمراء وليست سترة صفراء." },
        ],
      },
    },
    { id: 3, de: "Sara kauft die Tasche und nimmt sie mit nach Hause.", ar: "تشتري سارة الحقيبة وتأخذها إلى البيت." },
    {
      id: 4,
      de: "Am nächsten Tag ist die Mutter sehr glücklich. „Danke, Sara!“",
      ar: "في اليوم التالي الأم سعيدة جداً. «شكراً يا سارة!»",
      question: {
        de: "Wie viel kostet die Tasche?",
        ar: "كم تكلف الحقيبة؟",
        options: [
          { text: "25 Euro", ar: "25 يورو", correct: true, explanation: "صحيح — «Sie kostet 25 Euro»." },
          { text: "15 Euro", ar: "15 يورو", correct: false, explanation: "لا — الثمن 25 يورو وليس 15." },
          { text: "50 Euro", ar: "50 يورو", correct: false, explanation: "لا — الثمن 25 يورو." },
        ],
      },
    },
    { id: 5, de: "„Ich liebe dich, Mama!“ Ende.", ar: "«أحبك يا أمي!» النهاية." },
  ],
};

const A1_12: InteractiveStory = {
  id: "a1-hilfe-beim-nachbarn",
  level: "A1",
  title: "Hilfe beim Nachbarn",
  titleAr: "مساعدة الجار",
  emoji: "🧰",
  description: "باول يساعد جاره — الأفعال والأدوات.",
  grammar: "مساعدة • أدوات البيت • شكراً",
  segments: [
    { id: 1, de: "Herr Klein hat ein Problem. Sein Stuhl ist kaputt.", ar: "السيد كلاين عنده مشكلة. كرسيه مكسور." },
    {
      id: 2,
      de: "Paul hilft ihm. Er holt einen Hammer und Nägel.",
      ar: "يساعده بول. يحضر مطرقة ومسامير.",
      question: {
        de: "Was ist kaputt?",
        ar: "ما المكسور؟",
        options: [
          { text: "Der Stuhl", ar: "الكرسي", correct: true, explanation: "نعم — «Sein Stuhl ist kaputt» = كرسيه مكسور." },
          { text: "Das Fenster", ar: "النافذة", correct: false, explanation: "لا — النافذة لم تُذكر." },
          { text: "Die Tür", ar: "الباب", correct: false, explanation: "لا — الباب سليم في القصة." },
        ],
      },
    },
    { id: 3, de: "Paul repariert den Stuhl. Es dauert nur zehn Minuten.", ar: "يصلح بول الكرسي. يستغرق الأمر عشر دقائق فقط." },
    {
      id: 4,
      de: "Herr Klein sagt: „Vielen Dank, Paul! Du bist sehr nett.“",
      ar: "يقول السيد كلاين: «شكراً جزيلاً يا بول! أنت لطيف جداً».",
      question: {
        de: "Was holt Paul?",
        ar: "ماذا يحضر بول؟",
        options: [
          { text: "Einen Hammer und Nägel", ar: "مطرقة ومسامير", correct: true, explanation: "صحيح — الأدوات اللازمة للإصلاح." },
          { text: "Einen Stuhl", ar: "كرسياً", correct: false, explanation: "لا — الكرسي هو ما يُصلَح." },
          { text: "Ein Buch", ar: "كتاباً", correct: false, explanation: "لا — لا حاجة لكتاب في الإصلاح." },
        ],
      },
    },
    { id: 5, de: "Paul lächelt: „Gern geschehen!“ Ende.", ar: "يبتسم بول: «على الرحب والسعة!» النهاية." },
  ],
};

const A1_13: InteractiveStory = {
  id: "a1-am-strand",
  level: "A1",
  title: "Am Strand",
  titleAr: "على الشاطئ",
  emoji: "🏖️",
  description: "العائلة في يوم على الشاطئ — البحر والرمل.",
  grammar: "الطبيعة • اللعب • العائلة",
  segments: [
    { id: 1, de: "Die Familie ist am Strand. Das Meer ist blau und ruhig.", ar: "العائلة على الشاطئ. البحر أزرق وهادئ." },
    { id: 2, de: "Die Kinder bauen eine Sandburg und spielen im Wasser.", ar: "يبني الأطفال قلعة رملية ويلعبون في الماء." },
    {
      id: 3,
      de: "Die Eltern lesen Bücher und trinken Saft.",
      ar: "الوالدان يقرآن الكتب ويشربان العصير.",
      question: {
        de: "Was bauen die Kinder?",
        ar: "ماذا يبني الأطفال؟",
        options: [
          { text: "Eine Sandburg", ar: "قلعة رملية", correct: true, explanation: "نعم — «Sie bauen eine Sandburg»." },
          { text: "Ein Haus", ar: "بيتاً", correct: false, explanation: "لا — على الشاطئ يبنون قلعة رملية." },
          { text: "Einen Turm aus Holz", ar: "برجاً خشبياً", correct: false, explanation: "لا — لا خشب في القصة." },
        ],
      },
    },
    {
      id: 4,
      de: "Am Mittag essen sie Sandwiches und Obst.",
      ar: "عند الظهر يأكلون السندويشات والفواكه.",
      question: {
        de: "Was machen die Eltern am Strand?",
        ar: "ماذا يفعل الوالدان على الشاطئ؟",
        options: [
          { text: "Sie lesen Bücher", ar: "يقرآن الكتب", correct: true, explanation: "صحيح — «Die Eltern lesen Bücher und trinken Saft»." },
          { text: "Sie bauen eine Sandburg", ar: "يبنيان قلعة رملية", correct: false, explanation: "لا — الأطفال هم من يبنون القلعة." },
          { text: "Sie schwimmen", ar: "يسبحان", correct: false, explanation: "لا — الوالدان يقرآن ويشربان العصير." },
        ],
      },
    },
    { id: 5, de: "Am Abend gehen sie zufrieden nach Hause. Ende.", ar: "في المساء يعودون إلى البيت راضين. النهاية." },
  ],
};

export const A1_EXTRA_STORIES: InteractiveStory[] = [A1_9, A1_10, A1_11, A1_12, A1_13];
