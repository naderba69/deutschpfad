import type { InteractiveStory } from "./types";

/** قصص B1 إضافية — 4 قصص (الهدف: 11 إجمالاً) — كل قصة بسؤالين + شرح خيارات */

const B1_8: InteractiveStory = {
  id: "b1-sprachkurs",
  level: "B1",
  title: "Der Sprachkurs",
  titleAr: "دورة اللغة",
  emoji: "📚",
  description: "أحمد يتعلم الألمانية في دورة — التقدم والجمل الثانوية.",
  grammar: "الجمل الثانوية (dass, weil) • التقدم • الأهداف",
  segments: [
    { id: 1, de: "Ahmed besucht einen Deutschkurs, weil er in Deutschland arbeiten möchte.", ar: "يحضر أحمد دورة ألمانية لأنه يريد العمل في ألمانيا." },
    { id: 2, de: "Der Lehrer sagt, dass Ahmed schnell Fortschritte macht.", ar: "يقول المعلم إن أحمد يتقدم بسرعة." },
    {
      id: 3,
      de: "Ahmed übt jeden Tag, weil er die Prüfung bestehen will.",
      ar: "يتدرب أحمد كل يوم لأنه يريد اجتياز الامتحان.",
      question: {
        de: "Warum lernt Ahmed Deutsch?",
        ar: "لماذا يتعلم أحمد الألمانية؟",
        options: [
          { text: "Er will in Deutschland arbeiten", ar: "يريد العمل في ألمانيا", correct: true, explanation: "نعم — الجملة الثانوية بـ weil توضح السبب." },
          { text: "Er will in Tunesien bleiben", ar: "يريد البقاء في تونس", correct: false, explanation: "لا — هدفه العمل في ألمانيا." },
          { text: "Er will kein Deutsch sprechen", ar: "لا يريد التحدث بالألمانية", correct: false, explanation: "لا — هو يتعلمها بجدية." },
        ],
      },
    },
    {
      id: 4,
      de: "Nach drei Monaten kann er sich gut verständigen.",
      ar: "بعد ثلاثة أشهر يستطيع التواصل جيداً.",
      question: {
        de: "Was sagt der Lehrer über Ahmed?",
        ar: "ماذا يقول المعلم عن أحمد؟",
        options: [
          { text: "Er macht schnell Fortschritte", ar: "إنه يتقدم بسرعة", correct: true, explanation: "صحيح — «Der Lehrer sagt, dass Ahmed schnell Fortschritte macht»." },
          { text: "Er lernt zu langsam", ar: "يتعلم ببطء شديد", correct: false, explanation: "لا — المعلم يمدح سرعته." },
          { text: "Er soll aufhören", ar: "يجب أن يتوقف", correct: false, explanation: "لا — لا توقف بل تشجيع." },
        ],
      },
    },
    { id: 5, de: "Er sagt: „Ich werde die B1-Prüfung bestehen!“ Ende.", ar: "يقول: «سأجتاز امتحان B1!» النهاية." },
  ],
};

const B1_9: InteractiveStory = {
  id: "b1-verein",
  level: "B1",
  title: "Der Fußballverein",
  titleAr: "نادي كرة القدم",
  emoji: "⚽",
  description: "يوسف ينضم لنادٍ رياضي — العمل التطوعي والاندماج.",
  grammar: "العمل التطوعي • الاندماج • منذ (seit)",
  segments: [
    { id: 1, de: "Seit einem Monat ist Yusuf Mitglied in einem Fußballverein.", ar: "منذ شهر ويوسف عضو في نادٍ لكرة القدم." },
    { id: 2, de: "Er trainiert zweimal pro Woche, obwohl er anfangs müde war.", ar: "يتدرب مرتين أسبوعياً رغم أنه كان متعباً في البداية." },
    {
      id: 3,
      de: "Der Trainer sagt, dass Yusuf großes Talent hat.",
      ar: "يقول المدرب إن يوسف لديه موهبة كبيرة.",
      question: {
        de: "Seit wann ist Yusuf im Verein?",
        ar: "منذ متى يوسف في النادي؟",
        options: [
          { text: "Seit einem Monat", ar: "منذ شهر", correct: true, explanation: "نعم — «Seit einem Monat ist Yusuf Mitglied»." },
          { text: "Seit einem Jahr", ar: "منذ عام", correct: false, explanation: "لا — العضوية بدأت قبل شهر." },
          { text: "Seit gestern", ar: "منذ أمس", correct: false, explanation: "لا — منذ شهر كامل." },
        ],
      },
    },
    {
      id: 4,
      de: "Beim ersten Spiel hat er ein Tor geschossen!",
      ar: "في أول مباراة سجل هدفاً!",
      question: {
        de: "Wie oft trainiert Yusuf?",
        ar: "كم يتدرب يوسف؟",
        options: [
          { text: "Zweimal pro Woche", ar: "مرتين أسبوعياً", correct: true, explanation: "صحيح — «Er trainiert zweimal pro Woche»." },
          { text: "Einmal im Monat", ar: "مرة شهرياً", correct: false, explanation: "لا — التدريب مرتان أسبوعياً." },
          { text: "Jeden Tag", ar: "كل يوم", correct: false, explanation: "لا — مرتان في الأسبوع وليس يومياً." },
        ],
      },
    },
    { id: 5, de: "Die Mannschaft feiert den Sieg zusammen. Ende.", ar: "يحتفل الفريق بالفوز معاً. النهاية." },
  ],
};

const B1_10: InteractiveStory = {
  id: "b1-familienfest",
  level: "B1",
  title: "Das Familienfest",
  titleAr: "احتفال العائلة",
  emoji: "🎉",
  description: "احتفال عائلي كبير — التقاليد والروابط الزمنية.",
  grammar: "الروابط الزمنية (bevor, nachdem) • التقاليد",
  segments: [
    { id: 1, de: "Bevor das Familienfest begann, haben alle beim Kochen geholfen.", ar: "قبل أن يبدأ الاحتفال العائلي، ساعد الجميع في الطبخ." },
    { id: 2, de: "Nachdem die Gäste angekommen waren, haben sie gegessen und geredet.", ar: "بعد وصول الضيوف، أكلوا وتحدثوا." },
    {
      id: 3,
      de: "Die Großmutter hat Geschichten aus ihrer Jugend erzählt.",
      ar: "حكت الجدة قصصاً من شبابها.",
      question: {
        de: "Was haben alle vor dem Fest gemacht?",
        ar: "ماذا فعل الجميع قبل الاحتفال؟",
        options: [
          { text: "Beim Kochen geholfen", ar: "ساعدوا في الطبخ", correct: true, explanation: "نعم — «Bevor das Fest begann, haben alle beim Kochen geholfen»." },
          { text: "Geschlafen", ar: "ناموا", correct: false, explanation: "لا — كانوا يجهزون الطعام." },
          { text: "Gearbeitet", ar: "عملوا", correct: false, explanation: "لا — التحضير كان للاحتفال." },
        ],
      },
    },
    {
      id: 4,
      de: "Am Abend haben alle zusammen getanzt und gelacht.",
      ar: "في المساء رقص الجميع وضحكوا معاً.",
      question: {
        de: "Was haben die Gäste nach der Ankunft gemacht?",
        ar: "ماذا فعل الضيوف بعد الوصول؟",
        options: [
          { text: "Gegessen und geredet", ar: "أكلوا وتحدثوا", correct: true, explanation: "صحيح — «Nachdem die Gäste angekommen waren, haben sie gegessen und geredet»." },
          { text: "Geschlafen", ar: "ناموا", correct: false, explanation: "لا — بدأوا بالأكل والحديث." },
          { text: "Gearbeitet", ar: "عملوا", correct: false, explanation: "لا — إنه احتفال وليس عملاً." },
        ],
      },
    },
    { id: 5, de: "Es war ein wunderschönes Fest, das alle nie vergessen werden. Ende.", ar: "كان احتفالاً جميلاً لن ينساه أحد أبداً. النهاية." },
  ],
};

const B1_11: InteractiveStory = {
  id: "b1-umzug-ins-buero",
  level: "B1",
  title: "Der Umzug ins Büro",
  titleAr: "نقل المكتب",
  emoji: "🏢",
  description: "شركة تنقل مكاتبها — التنظيم والعمل الجماعي.",
  grammar: "المبني للمجهول (wurde, wird) • العمل الجماعي",
  segments: [
    { id: 1, de: "Die Firma zieht in ein neues Gebäude. Alles wird umgezogen.", ar: "تنتقل الشركة إلى مبنى جديد. كل شيء يُنقل." },
    { id: 2, de: "Am Montag wurden die Computer und Schreibtische transportiert.", ar: "يوم الاثنين نُقلت الحواسيب والمكاتب." },
    {
      id: 3,
      de: "Die Kollegen haben zusammengeholfen, damit alles schnell fertig wird.",
      ar: "ساعد الزملاء بعضهم بعضاً حتى يكون كل شيء جاهزاً بسرعة.",
      question: {
        de: "Was passiert mit der Firma?",
        ar: "ماذا يحدث للشركة؟",
        options: [
          { text: "Sie zieht in ein neues Gebäude", ar: "تنتقل إلى مبنى جديد", correct: true, explanation: "نعم — النقل إلى مبنى جديد هو الحدث الرئيسي." },
          { text: "Sie schließt", ar: "تُغلق", correct: false, explanation: "لا — تنتقل ولا تُغلق." },
          { text: "Sie bleibt gleich", ar: "تبقى كما هي", correct: false, explanation: "لا — هناك نقل كامل للمكاتب." },
        ],
      },
    },
    {
      id: 4,
      de: "Am Freitag wurde das neue Büro eingeweiht.",
      ar: "يوم الجمعة افتُتح المكتب الجديد.",
      question: {
        de: "Was wurde am Montag transportiert?",
        ar: "ماذا نُقل يوم الاثنين؟",
        options: [
          { text: "Computer und Schreibtische", ar: "الحواسيب والمكاتب", correct: true, explanation: "صحيح — «wurden die Computer und Schreibtische transportiert»." },
          { text: "Nur Papier", ar: "ورق فقط", correct: false, explanation: "لا — نُقل الأثاث والحواسيب." },
          { text: "Essen", ar: "طعام", correct: false, explanation: "لا — نقل مكتبي وليس طعاماً." },
        ],
      },
    },
    { id: 5, de: "Der Chef lobt das Team: „Großartige Arbeit!“ Ende.", ar: "يمدح المدير الفريق: «عمل رائع!» النهاية." },
  ],
};

export const B1_EXTRA_STORIES: InteractiveStory[] = [B1_8, B1_9, B1_10, B1_11];
