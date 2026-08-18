import type { InteractiveStory } from "./types";

/** قصص B2 إضافية — 5 قصص (الهدف: 11 إجمالاً) — كل قصة بسؤالين + شرح خيارات */

const B2_7: InteractiveStory = {
  id: "b2-integration",
  level: "B2",
  title: "Integration im Alltag",
  titleAr: "الاندماج في الحياة اليومية",
  emoji: "🤝",
  description: "مهاجر يتحدث عن اندماجه — صدمة الثقافة والتأقلم.",
  grammar: "الجمل الثانوية المتقدمة • الندم والتأقلم",
  segments: [
    { id: 1, de: "Herr Demir berichtet, dass die ersten Jahre in Deutschland schwierig waren.", ar: "يذكر السيد دمير أن السنوات الأولى في ألمانيا كانت صعبة." },
    { id: 2, de: "Er sagt, er habe anfangs die Sprache nicht verstanden und sich isoliert gefühlt.", ar: "يقول إنه في البداية لم يفهم اللغة وشعر بالعزلة." },
    {
      id: 3,
      de: "Durch den Besuch eines Integrationskurses habe er aber schnell Fortschritte gemacht.",
      ar: "لكنه تقدم بسرعة من خلال حضور دورة اندماج.",
      question: {
        de: "Wie waren die ersten Jahre für Herrn Demir?",
        ar: "كيف كانت السنوات الأولى للسيد دمير؟",
        options: [
          { text: "Schwierig", ar: "صعبة", correct: true, explanation: "نعم — «die ersten Jahre waren schwierig»." },
          { text: "Sehr einfach", ar: "سهلة جداً", correct: false, explanation: "لا — واجه صعوبات في اللغة والعزلة." },
          { text: "Langweilig", ar: "مملة", correct: false, explanation: "لا — صعبة وليست مملة." },
        ],
      },
    },
    {
      id: 4,
      de: "Heute arbeitet er in einem großen Unternehmen und hat viele Freunde.",
      ar: "اليوم يعمل في شركة كبيرة ولديه أصدقاء كثيرون.",
      question: {
        de: "Wie fühlte sich Herr Demir am Anfang?",
        ar: "كيف شعر السيد دمير في البداية؟",
        options: [
          { text: "Isoliert und verunsichert", ar: "معزولاً وغير واثق", correct: true, explanation: "صحيح — «sich isoliert gefühlt» بسبب عدم فهم اللغة." },
          { text: "Völlig zu Hause", ar: "في بيته تماماً", correct: false, explanation: "لا — شعر بالعزلة في البداية." },
          { text: "Gelangweilt", ar: "مملولاً", correct: false, explanation: "لا — لم يكن الملل هو المشكلة." },
        ],
      },
    },
    { id: 5, de: "Er empfiehlt jedem Neuling: „Geduld und Offenheit sind der Schlüssel.“ Ende.", ar: "ينصح كل قادم جديد: «الصبر والانفتاح هما المفتاح». النهاية." },
  ],
};

const B2_8: InteractiveStory = {
  id: "b2-nachhaltigkeit",
  level: "B2",
  title: "Nachhaltige Stadt",
  titleAr: "مدينة مستدامة",
  emoji: "🏙️",
  description: "مشروع مدينة خضراء — البيئة والاقتصاد.",
  grammar: "الاشتقاق الاسمي • المبني للمجهول المتقدم",
  segments: [
    { id: 1, de: "Die Stadtverwaltung hat ein Projekt für eine nachhaltige Stadtentwicklung gestartet.", ar: "أطلقت إدارة المدينة مشروعاً للتنمية الحضرية المستدامة." },
    { id: 2, de: "Es wird geplant, dass bis 2030 alle Gebäude energieeffizient werden.", ar: "يُخطط أنه بحلول 2030 ستصبح كل المباني موفرة للطاقة." },
    {
      id: 3,
      de: "Die Finanzierung des Projekts wird durch Fördermittel gesichert.",
      ar: "يُضمن تمويل المشروع عبر المنح.",
      question: {
        de: "Was hat die Stadtverwaltung gestartet?",
        ar: "ماذا أطلقت إدارة المدينة؟",
        options: [
          { text: "Ein Projekt für nachhaltige Stadtentwicklung", ar: "مشروعاً للتنمية المستدامة", correct: true, explanation: "نعم — مشروع التنمية الحضرية المستدامة." },
          { text: "Ein Projekt für mehr Autos", ar: "مشروعاً لمزيد من السيارات", correct: false, explanation: "لا — الهدف الاستدامة وليس السيارات." },
          { text: "Ein Projekt für Büros", ar: "مشروعاً للمكاتب", correct: false, explanation: "لا — المشروع حول كفاءة الطاقة في المباني." },
        ],
      },
    },
    {
      id: 4,
      de: "Die Bürger werden in die Planung einbezogen.",
      ar: "يُشرك المواطنون في التخطيط.",
      question: {
        de: "Was ist das Ziel bis 2030?",
        ar: "ما الهدف بحلول 2030؟",
        options: [
          { text: "Alle Gebäude werden energieeffizient", ar: "كل المباني تصبح موفرة للطاقة", correct: true, explanation: "صحيح — الهدف المعلن بوضوح في النص." },
          { text: "Alle Autos verschwinden", ar: "تختفي كل السيارات", correct: false, explanation: "لا — النص لا يتحدث عن إلغاء السيارات." },
          { text: "Die Stadt wird größer", ar: "المدينة تكبر", correct: false, explanation: "لا — الهدف هو كفاءة الطاقة." },
        ],
      },
    },
    { id: 5, de: "Experten sind überzeugt, dass das Projekt beispielhaft sein wird. Ende.", ar: "الخبراء واثقون أن المشروع سيكون نموذجياً. النهاية." },
  ],
};

const B2_9: InteractiveStory = {
  id: "b2-bewerbungsgespraech",
  level: "B2",
  title: "Das erfolgreiche Bewerbungsgespräch",
  titleAr: "مقابلة التقديم الناجحة",
  emoji: "📈",
  description: "أوليفيا تحصل على الوظيفة — لغة المقابلة المتقدمة.",
  grammar: "Konjunktiv II الماضي (hätte, wäre) • لغة مقابلة",
  segments: [
    { id: 1, de: "Olivia hatte sich bei drei Firmen beworben und wurde zu zwei Gesprächen eingeladen.", ar: "تقدمت أوليفيا لثلاث شركات ودُعيت لمقابلتين." },
    { id: 2, de: "Im Gespräch betonte sie, sie hätte bereits fünf Jahre Erfahrung im Marketing.", ar: "في المقابلة أكدت أن لديها خمس سنوات خبرة في التسويق." },
    {
      id: 3,
      de: "Auf die Frage nach Gehaltsvorstellungen antwortete sie diplomatisch.",
      ar: "على سؤال التوقعات المالية أجابت بدبلوماسية.",
      question: {
        de: "Bei wie vielen Firmen hatte sich Olivia beworben?",
        ar: "كم شركة تقدمت لها أوليفيا؟",
        options: [
          { text: "Drei Firmen", ar: "ثلاث شركات", correct: true, explanation: "نعم — «sich bei drei Firmen beworben»." },
          { text: "Zwei Firmen", ar: "شركتين", correct: false, explanation: "لا — ثلاث شركات، ودُعيت لمقابلتين فقط." },
          { text: "Fünf Firmen", ar: "خمس شركات", correct: false, explanation: "لا — خمس سنوات خبرة وليست خمس شركات." },
        ],
      },
    },
    {
      id: 4,
      de: "Eine Woche später erhielt sie die Zusage mit einem sehr guten Angebot.",
      ar: "بعد أسبوع تلقت القبول بعرض جيد جداً.",
      question: {
        de: "Wie viel Erfahrung hat Olivia im Marketing?",
        ar: "كم خبرة لدى أوليفيا في التسويق؟",
        options: [
          { text: "Fünf Jahre", ar: "خمس سنوات", correct: true, explanation: "صحيح — «fünf Jahre Erfahrung im Marketing»." },
          { text: "Zwei Jahre", ar: "سنتان", correct: false, explanation: "لا — الخبرة خمس سنوات." },
          { text: "Keine", ar: "لا شيء", correct: false, explanation: "لا — ذكرت خبرة خمس سنوات." },
        ],
      },
    },
    { id: 5, de: "„Ohne Vorbereitung hätte ich das nicht geschafft“, sagt sie. Ende.", ar: "تقول: «بدون التحضير ما كنت لأنجح». النهاية." },
  ],
};

const B2_10: InteractiveStory = {
  id: "b2-kunstausstellung",
  level: "B2",
  title: "Die Kunstausstellung",
  titleAr: "معرض الفن",
  emoji: "🎨",
  description: "ناقد يتحدث عن معرض — وصف الفن وتحليل الرأي.",
  grammar: "وصف الأعمال • نقل الآراء • لغة نقدية",
  segments: [
    { id: 1, de: "In der neuen Ausstellung werden Werke junger Künstler gezeigt.", ar: "في المعرض الجديد تُعرض أعمال فنانين شباب." },
    { id: 2, de: "Der Kritiker lobt die Ausdruckskraft der Bilder, bemängelt aber die fehlende Tiefe.", ar: "يمدح الناقد قوة التعبير في اللوحات لكنه يعيب نقص العمق." },
    {
      id: 3,
      de: "Die Besucher sind geteilter Meinung: Manche sind begeistert, andere verstehen die Kunst nicht.",
      ar: "زوار المعرض منقسمون: البعض متحمس والبعض لا يفهم الفن.",
      question: {
        de: "Wessen Werke werden gezeigt?",
        ar: "أعمال من تُعرض؟",
        options: [
          { text: "Junger Künstler", ar: "فنانين شباب", correct: true, explanation: "نعم — «Werke junger Künstler»." },
          { text: "Alter Meister", ar: "أساتذة قدماء", correct: false, explanation: "لا — المعرض لفنانين شباب." },
          { text: "Kinder", ar: "أطفال", correct: false, explanation: "لا — الفنانون شباب وليسوا أطفالاً." },
        ],
      },
    },
    {
      id: 4,
      de: "Der Künstler verteidigt seine Arbeit: „Kunst soll provozieren.“",
      ar: "يدافع الفنان عن عمله: «الفن يجب أن يثير».",
      question: {
        de: "Was bemängelt der Kritiker?",
        ar: "بماذا يعيب الناقد؟",
        options: [
          { text: "Die fehlende Tiefe", ar: "نقص العمق", correct: true, explanation: "صحيح — «bemängelt aber die fehlende Tiefe»." },
          { text: "Die Farben", ar: "الألوان", correct: false, explanation: "لا — العيب هو نقص العمق وليس الألوان." },
          { text: "Den Preis", ar: "السعر", correct: false, explanation: "لا — لا حديث عن أسعار." },
        ],
      },
    },
    { id: 5, de: "Am Ende diskutiert man lebhaft — genau das wollte der Künstler. Ende.", ar: "في النهاية يناقش الجميع بحيوية — هذا بالضبط ما أراده الفنان. النهاية." },
  ],
};

const B2_11: InteractiveStory = {
  id: "b2-startup",
  level: "B2",
  title: "Das Startup",
  titleAr: "الشركة الناشئة",
  emoji: "🚀",
  description: "شابان يؤسسان شركة تقنية — الريادة والمخاطر.",
  grammar: "لغة الأعمال • الشرطية (wenn) • الريادة",
  segments: [
    { id: 1, de: "Zwei Freunde gründeten ein Startup für Sprachlern-Apps.", ar: "أسس صديقان شركة ناشئة لتطبيقات تعلم اللغات." },
    { id: 2, de: "Wenn sie die Finanzierung nicht bekommen, müssen sie das Projekt aufgeben.", ar: "إذا لم يحصلا على التمويل، يجب أن يتخليا عن المشروع." },
    {
      id: 3,
      de: "Sie präsentierten ihre Idee vor Investoren überzeugend.",
      ar: "قدما فكرتهما أمام المستثمرين بشكل مقنع.",
      question: {
        de: "Was haben die Freunde gegründet?",
        ar: "ماذا أسس الصديقان؟",
        options: [
          { text: "Ein Startup für Sprachlern-Apps", ar: "شركة ناشئة لتطبيقات تعلم اللغات", correct: true, explanation: "نعم — شركة ناشئة في مجال تطبيقات اللغات." },
          { text: "Ein Restaurant", ar: "مطعماً", correct: false, explanation: "لا — شركة تقنية وليست مطعماً." },
          { text: "Eine Bank", ar: "بنكاً", correct: false, explanation: "لا — المجال تطبيقات تعلم اللغات." },
        ],
      },
    },
    {
      id: 4,
      de: "Zum Glück erhielten sie einen großen Förderkredit.",
      ar: "لحسن الحظ حصلا على قرض دعم كبير.",
      question: {
        de: "Was passiert ohne Finanzierung?",
        ar: "ماذا يحدث بدون تمويل؟",
        options: [
          { text: "Sie müssen das Projekt aufgeben", ar: "يجب أن يتخليا عن المشروع", correct: true, explanation: "صحيح — الجملة الشرطية بـ wenn توضح ذلك." },
          { text: "Sie machen weiter", ar: "يكملان", correct: false, explanation: "لا — بدون تمويل يتوقف المشروع." },
          { text: "Sie ziehen um", ar: "ينتقلان", correct: false, explanation: "لا — لا علاقة بالانتقال." },
        ],
      },
    },
    { id: 5, de: "Ein Jahr später hat die App 100.000 Nutzer. Ende.", ar: "بعد عام للتطبيق 100 ألف مستخدم. النهاية." },
  ],
};

export const B2_EXTRA_STORIES: InteractiveStory[] = [B2_7, B2_8, B2_9, B2_10, B2_11];
