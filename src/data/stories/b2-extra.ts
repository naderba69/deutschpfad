import type { InteractiveStory } from "./types";

/** قصص B2 إضافية — 5 قصص (الهدف: 11 إجمالاً) — كل قصة بسؤالين + شرح خيارات */

const B2_7: InteractiveStory = {
  id: "b2-integration",
  level: "B2",
  title: "Integration im Alltag",
  titleAr: "الاندماج في الحياة اليومية",
  emoji: "🤝",
  description: "حكاية تدريبية خيالية عن تجربة فردية؛ لا تعممها على المهاجرين أو على ألمانيا.",
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
          { text: "Völlig zu Hause", ar: "شعر بأنه في بيته تماماً", correct: false, explanation: "لا — شعر بالعزلة في البداية." },
          { text: "Gelangweilt", ar: "مملولاً", correct: false, explanation: "لا — لم يكن الملل هو المشكلة." },
        ],
      },
    },
    { id: 5, de: "Für ihn persönlich waren Geduld und Offenheit hilfreich. Ende.", ar: "وبالنسبة إليه شخصياً، أفاده الصبر والانفتاح. النهاية." },
  ],
};

const B2_8: InteractiveStory = {
  id: "b2-nachhaltigkeit",
  level: "B2",
  title: "Nachhaltige Stadt",
  titleAr: "مدينة مستدامة",
  emoji: "🏙️",
  description: "سيناريو خيالي عن مشروع مدينة مستدامة؛ لا يصف خطة بلدية حقيقية أو توقعاً موثقاً.",
  grammar: "الاشتقاق الاسمي • المبني للمجهول المتقدم",
  segments: [
    { id: 1, de: "Die Stadtverwaltung hat ein Projekt für eine nachhaltige Stadtentwicklung gestartet.", ar: "أطلقت إدارة المدينة مشروعاً للتنمية الحضرية المستدامة." },
    { id: 2, de: "Im Planszenario sollen bis 2030 ausgewählte öffentliche Gebäude energetisch verbessert werden.", ar: "في هذا السيناريو يُراد تحسين كفاءة الطاقة في مبانٍ عامة مختارة بحلول 2030." },
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
          { text: "Ausgewählte öffentliche Gebäude sollen energetisch verbessert werden", ar: "تحسين كفاءة الطاقة في مبانٍ عامة مختارة", correct: true, explanation: "صحيح — الهدف المعلن بوضوح في النص." },
          { text: "Alle Autos verschwinden", ar: "تختفي كل السيارات", correct: false, explanation: "لا — النص لا يتحدث عن إلغاء السيارات." },
          { text: "Die Stadt wird größer", ar: "المدينة تكبر", correct: false, explanation: "لا — الهدف هو كفاءة الطاقة." },
        ],
      },
    },
    { id: 5, de: "Die Beteiligten hoffen, dass das Projekt anderen Städten als Beispiel dienen könnte. Ende.", ar: "يأمل المشاركون أن يكون المشروع مثالاً تستفيد منه مدن أخرى. النهاية." },
  ],
};

const B2_9: InteractiveStory = {
  id: "b2-bewerbungsgespraech",
  level: "B2",
  title: "Das erfolgreiche Bewerbungsgespräch",
  titleAr: "مقابلة التقديم الناجحة",
  emoji: "📈",
  description: "قصة تدريبية متخيّلة عن أوليفيا ومقابلة عمل؛ لا تصف نتائج توظيف متوقعة أو قاعدة عامة.",
  grammar: "Konjunktiv II الماضي (hätte, wäre) • لغة مقابلة",
  segments: [
    { id: 1, de: "Olivia hatte sich bei drei Firmen beworben und wurde zu zwei Gesprächen eingeladen.", ar: "تقدمت أوليفيا لثلاث شركات ودُعيت لمقابلتين." },
    { id: 2, de: "Im Gespräch betonte sie, sie habe bereits fünf Jahre Erfahrung im Marketing.", ar: "في المقابلة أكدت أن لديها خمس سنوات خبرة في التسويق." },
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
  description: "مشهد تدريبي متخيّل عن ناقد ومعرض — وصف الفن وتحليل الرأي.",
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
          { text: "Werke junger Künstler", ar: "أعمال فنانين شباب", correct: true, explanation: "نعم — «Werke junger Künstler»." },
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
  description: "قصة خيالية عن تأسيس شركة تقنية؛ نجاح التطبيق وعدد المستخدمين تفاصيل افتراضية للتدريب.",
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

const B2_12: InteractiveStory = {
  id: "b2-ki-arbeitswelt",
  level: "B2",
  title: "KI in der Arbeitswelt",
  titleAr: "الذكاء الاصطناعي في عالم العمل",
  emoji: "🤖",
  description: "حكاية تدريبية عن تأثير الذكاء الاصطناعي على الوظائف — Konjunktiv I واللغة الرسمية.",
  grammar: "Konjunktiv I (النقل) • اللغة الرسمية • التأثير",
  segments: [
    { id: 1, de: "Experten berichten, dass künstliche Intelligenz viele Berufe verändern werde.", ar: "يذكر الخبراء أن الذكاء الاصطناعي سيغيّر كثيراً من المهن." },
    { id: 2, de: "Sie sagen, Routineaufgaben würden zunehmend automatisiert, während kreative Tätigkeiten weniger betroffen seien.", ar: "يقولون إن المهام الروتينية ستُؤتمت بشكل متزايد، بينما الأنشطة الإبداعية أقل تأثراً." },
    {
      id: 3,
      de: "Studien zeigen, dass Arbeitnehmer sich kontinuierlich weiterbilden müssten, um wettbewerbsfähig zu bleiben.",
      ar: "تُظهر الدراسات أن الموظفين يجب أن يستمروا في التطوير المهني ليبقوا قادرين على المنافسة.",
      question: {
        de: "Was zeigen Studien?",
        ar: "ماذا تُظهر الدراسات؟",
        options: [
          { text: "Arbeitnehmer müssten sich weiterbilden", ar: "يجب على الموظفين التطوير المستمر", correct: true, explanation: "نعم — «dass Arbeitnehmer sich kontinuierlich weiterbilden müssten»." },
          { text: "KI ersetzt alle Berufe", ar: "الذكاء الاصطناعي يستبدل كل المهن", correct: false, explanation: "لا — الدراسات تتحدث عن التطوير لا الاستبدال الكامل." },
          { text: "Weiterbildung ist unnötig", ar: "التطوير غير ضروري", correct: false, explanation: "لا — الدراسات تؤكد ضرورته." },
        ],
      },
    },
    {
      id: 4,
      de: "Führungskräfte betonen, dass der Mensch trotz Automatisierung unersetzlich bleibe, solange er Empathie und Kreativität einbringe.",
      ar: "يؤكد القادة أن الإنسان سيبقى لا غنى عنه رغم الأتمتة، طالما يُظهر التعاطف والإبداع.",
      question: {
        de: "Was betonen Führungskräfte?",
        ar: "ماذا يؤكد القادة؟",
        options: [
          { text: "Der Mensch bleibe unersetzlich mit Empathie", ar: "الإنسان لا غنى عنه بالتعاطف", correct: true, explanation: "صحيح — «der Mensch unersetzlich bleibe, solange er Empathie einbringe»." },
          { text: "Menschen seien überflüssig", ar: "البشر غير ضروريين", correct: false, explanation: "لا — القادة يؤكدون أهمية الإنسان." },
          { text: "Automatisierung sei schädlich", ar: "الأتمتة ضارة", correct: false, explanation: "لا — الحديث عن التعايش لا الضرر." },
        ],
      },
    },
    { id: 5, de: "Die Debatte darüber wird die Arbeitswelt noch lange prägen. Ende.", ar: "سيستمر النقاش حول هذا في تشكيل عالم العمل طويلاً. النهاية." },
  ],
};

const B2_13: InteractiveStory = {
  id: "b2-klimawandel",
  level: "B2",
  title: "Klimawandel und Verantwortung",
  titleAr: "تغير المناخ والمسؤولية",
  emoji: "🌍",
  description: "حكاية تدريبية عن المسؤولية المناخية — Passiv والجمل المعقدة.",
  grammar: "Passiv (المبني للمجهول) • اللغة الرسمية • المسؤولية المناخية",
  segments: [
    { id: 1, de: "Wissenschaftler warnen, dass die Erderwärmung durch menschliche Aktivitäten beschleunigt werde.", ar: "يحذر العلماء من أن الاحترار العالمي يتسارع بسبب الأنشطة البشرية." },
    { id: 2, de: "Sie fordern, dass Maßnahmen ergriffen werden, um die Emissionen zu reduzieren.", ar: "يطالبون باتخاذ تدابير لتقليل الانبعاثات." },
    {
      id: 3,
      de: "Regierungen haben versprochen, dass bis 2030 deutlich mehr erneuerbare Energien genutzt werden sollen.",
      ar: "وعدت الحكومات بأنه بحلول 2030 يجب استخدام طاقات متجددة أكثر بكثير.",
      question: {
        de: "Was haben Regierungen versprochen?",
        ar: "ماذا وعدت الحكومات؟",
        options: [
          { text: "Mehr erneuerbare Energien bis 2030", ar: "طاقات متجددة أكثر بحلول 2030", correct: true, explanation: "نعم — «dass bis 2030 mehr erneuerbare Energien genutzt werden sollen»." },
          { text: "Weniger Klimaschutz", ar: "حماية مناخ أقل", correct: false, explanation: "لا — الوعد بزيادة الطاقات المتجددة." },
          { text: "Keine Maßnahmen", ar: "لا تدابير", correct: false, explanation: "لا — وعدوا بتدابير محددة." },
        ],
      },
    },
    {
      id: 4,
      de: "Jeder Einzelne kann beitragen, indem er bewusster konsumiert und weniger fliegt.",
      ar: "يمكن لكل فرد المساهمة من خلال الاستهلاك الواعي وتقليل الطيران.",
      question: {
        de: "Wie kann jeder Einzelne beitragen?",
        ar: "كيف يمكن لكل فرد المساهمة؟",
        options: [
          { text: "Bewusster konsumieren, weniger fliegen", ar: "استهلاك واعٍ وطيران أقل", correct: true, explanation: "صحيح — «indem er bewusster konsumiert und weniger fliegt»." },
          { text: "Mehr Auto fahren", ar: "قيادة سيارة أكثر", correct: false, explanation: "لا — العكس: تقليل الانبعاثات." },
          { text: "Nichts tun", ar: "لا شيء", correct: false, explanation: "لا — كل فرد يمكنه المساهمة." },
        ],
      },
    },
    { id: 5, de: "Ob die Ziele erreicht werden, hängt von allen ab. Ende.", ar: "ما إذا كانت الأهداف ستتحقق يعتمد على الجميع. النهاية." },
  ],
};

export const B2_EXTRA_STORIES: InteractiveStory[] = [B2_7, B2_8, B2_9, B2_10, B2_11, B2_12, B2_13];
