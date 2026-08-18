import type { InteractiveStory } from "./types";

/**
 * ═══════════════════════════════════════════════════════════
 *  قصص B2 — 6 قصص (متقدم)
 *  التركيز: Konjunktiv I (نقل الكلام) • الاشتقاق الاسمي
 *  · المبني للمجهول المتقدم • اللغة الرسمية والأكاديمية
 * ═══════════════════════════════════════════════════════════
 */

const B2_1: InteractiveStory = {
  id: "b2-erste-arbeitstag",
  level: "B2",
  title: "Der erste Arbeitstag",
  titleAr: "أول يوم عمل",
  emoji: "💼",
  description: "نورا تبدأ وظيفة جديدة — لغة الأعمال والرأي والجدل المهذب.",
  grammar: "Konjunktiv II (المهذّب) • جمل الغرض (um … zu) • لغة الأعمال",
  segments: [
    {
      id: 1,
      de: "Nora beginnt heute ihre neue Stelle bei einer IT-Firma in München.",
      ar: "تبدأ نورا اليوم وظيفتها الجديدة في شركة تقنية في ميونخ.",
    },
    {
      id: 2,
      de: "Am Morgen stellt der Teamleiter sie vor: „Nora hat viel Erfahrung im Projektmanagement.“",
      ar: "في الصباح يقدّمها قائد الفريق: «لدى نورا خبرة واسعة في إدارة المشاريع».",
      question: {
        de: "Wo arbeitet Nora?",
        ar: "أين تعمل نورا؟",
        options: [
          { text: "Bei einer IT-Firma in München", ar: "في شركة تقنية في ميونخ", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Bei einer IT-Firma in München» (في شركة تقنية في ميونخ)." },
          { text: "In einer Bank in Berlin", ar: "في بنك في برلين", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "In einer Schule in Hamburg", ar: "في مدرسة في هامبورغ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "In der Besprechung sagt sie: „Ich würde vorschlagen, die Deadlines neu zu planen.“",
      ar: "في الاجتماع تقول: «أقترح (بصيغة المهذّب) إعادة تخطيط المواعيد النهائية».",
    },
    {
      id: 4,
      de: "Ein Kollege erwidert: „Das klingt vernünftig, aber wir müssen das Budget beachten.“",
      ar: "يردّ زميل: «يبدو هذا معقولاً، لكن يجب أن نراعي الميزانية».",
      question: {
        de: "Was muss das Team beachten?",
        ar: "ماذا يجب أن يراعي الفريق؟",
        options: [
          { text: "Das Budget", ar: "الميزانية", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Das Budget» (الميزانية)." },
          { text: "Die Urlaubszeit", ar: "وقت الإجازات", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Die Kantine", ar: "المقصف", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am Ende des Tages ist Nora zufrieden. Sie freut sich auf die Zusammenarbeit.",
      ar: "في نهاية اليوم نورا راضية. تتطلع إلى التعاون.",
      choices: [
        { text: "Ich hätte auch Lust auf diese Arbeit!", ar: "أنا أيضاً عندي رغبة في هذا العمل!", next: 6, feedback: "Konjunktiv II جميل!" },
        { text: "Die Arbeit ist langweilig.", ar: "العمل ممل.", next: 6, feedback: "ربما — لكن نورا راضية!" },
      ],
    },
    { id: 6, de: "Ende. Ein erfolgreicher erster Tag ist der Anfang von vielem.", ar: "النهاية. أول يوم ناجح هو بداية الكثير." },
  ],
};

const B2_2: InteractiveStory = {
  id: "b2-verhandlung",
  level: "B2",
  title: "Die Geschäftsverhandlung",
  titleAr: "المفاوضات التجارية",
  emoji: "📊",
  description: "مفاوضات بين شركتين — نقل الكلام (Konjunktiv I) واللغة الرسمية.",
  grammar: "Konjunktiv I (نقل الكلام) • المفاوضات • لغة رسمية",
  segments: [
    {
      id: 1,
      de: "Die Verhandlung zwischen den beiden Firmen dauerte drei Stunden.",
      ar: "استمرت المفاوضات بين الشركتين ثلاث ساعات.",
    },
    {
      id: 2,
      de: "Der Geschäftsführer sagte, er habe alle Zahlen sorgfältig geprüft.",
      ar: "قال المدير التنفيذي إنه فحص جميع الأرقام بعناية.",
      question: {
        de: "Wie lange dauerte die Verhandlung?",
        ar: "كم استمرت المفاوضات؟",
        options: [
          { text: "Drei Stunden", ar: "ثلاث ساعات", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Drei Stunden» (ثلاث ساعات)." },
          { text: "Dreißig Minuten", ar: "ثلاثين دقيقة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Einen Tag", ar: "يوماً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Die Anwälte erklärten, die neuen Bedingungen seien akzeptabel.",
      ar: "أوضح المحامون أن الشروط الجديدة مقبولة.",
    },
    {
      id: 4,
      de: "Man einigte sich auf einen Kompromiss bei den Lieferzeiten.",
      ar: "توصل الطرفان إلى حل وسط بشأن مواعيد التسليم.",
      question: {
        de: "Worauf einigte man sich?",
        ar: "على ماذا توصل الطرفان؟",
        options: [
          { text: "Auf einen Kompromiss bei den Lieferzeiten", ar: "حل وسط في مواعيد التسليم", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Auf einen Kompromiss bei den Lieferzeiten» (حل وسط في مواعيد التسليم)." },
          { text: "Auf keinen Vertrag", ar: "لا اتفاق", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Auf eine Preiserhöhung", ar: "رفع الأسعار", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Der Vertreter betonte, die Zusammenarbeit werde langfristig fortgesetzt.",
      ar: "أكد الممثل أن التعاون سيتواصل على المدى الطويل.",
      choices: [
        { text: "Ein guter Kompromiss ist besser als ein Streit.", ar: "الحل الوسط الجيد أفضل من الخلاف.", next: 6, feedback: "حكمة مهنية!" },
        { text: "Die Verhandlung war ein Misserfolg.", ar: "كانت المفاوضات فشلاً.", next: 6, feedback: "لا — توصلوا لاتفاق!" },
      ],
    },
    { id: 6, de: "Beide Seiten unterschrieben den Vertrag zufrieden. Ende.", ar: "وقع الطرفان العقد برضا. النهاية." },
  ],
};

const B2_3: InteractiveStory = {
  id: "b2-forschungsprojekt",
  level: "B2",
  title: "Das Forschungsprojekt",
  titleAr: "مشروع البحث",
  emoji: "🔬",
  description: "علماء يبحثون في الطاقة الشمسية — اللغة الأكاديمية والاشتقاق الاسمي.",
  grammar: "الاشتقاق الاسمي (Nominalisierung) • اللغة الأكاديمية • النشر العلمي",
  segments: [
    {
      id: 1,
      de: "Das Forschungsprojekt über erneuerbare Energien begann im Januar.",
      ar: "بدأ مشروع البحث عن الطاقات المتجددة في يناير.",
    },
    {
      id: 2,
      de: "Die Wissenschaftler untersuchten die Effizienz neuer Solarzellen im Labor.",
      ar: "فحص العلماء كفاءة الخلايا الشمسية الجديدة في المختبر.",
      question: {
        de: "Was untersuchen die Wissenschaftler?",
        ar: "ماذا يفحص العلماء؟",
        options: [
          { text: "Die Effizienz neuer Solarzellen", ar: "كفاءة الخلايا الشمسية الجديدة", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Die Effizienz neuer Solarzellen» (كفاءة الخلايا الشمسية الجديدة)." },
          { text: "Die Kosten des Transports", ar: "تكاليف النقل", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Das Wetter in der Wüste", ar: "طقس الصحراء", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Nach der Auswertung der Daten veröffentlichten sie einen ausführlichen Bericht.",
      ar: "بعد تحليل البيانات نشروا تقريراً مفصلاً.",
    },
    {
      id: 4,
      de: "Die Ergebnisse wurden in einer internationalen Fachzeitschrift publiziert.",
      ar: "نُشرت النتائج في مجلة علمية دولية.",
      question: {
        de: "Wo wurden die Ergebnisse publiziert?",
        ar: "أين نُشرت النتائج؟",
        options: [
          { text: "In einer internationalen Fachzeitschrift", ar: "في مجلة علمية دولية", correct: true, explanation: "نعم — هذا ما ورد في القصة: «In einer internationalen Fachzeitschrift» (في مجلة علمية دولية)." },
          { text: "In einer Zeitung", ar: "في جريدة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Im Fernsehen", ar: "في التلفاز", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Die Forschung eröffnet neue Möglichkeiten für die Energieversorgung.",
      ar: "يفتح البحث إمكانيات جديدة لتزويد الطاقة.",
      choices: [
        { text: "Die Wissenschaft ist wichtig für unsere Zukunft.", ar: "العلم مهم لمستقبلنا.", next: 6, feedback: "أكيد!" },
        { text: "Forschung kostet zu viel Zeit.", ar: "البحث يستهلك وقتاً كبيراً.", next: 6, feedback: "لكنه يؤتي ثماره!" },
      ],
    },
    { id: 6, de: "Das Team plant bereits das nächste Projekt. Ende.", ar: "يخطط الفريق بالفعل للمشروع التالي. النهاية." },
  ],
};

const B2_4: InteractiveStory = {
  id: "b2-umzug-muenchen",
  level: "B2",
  title: "Der Umzug nach München",
  titleAr: "الانتقال إلى ميونخ",
  emoji: "🌆",
  description: "ياسمين تنتقل للدراسة — صدمة الثقافة والتأقلم.",
  grammar: "صدمة الثقافة • التعبير عن الصعوبات • التعود (sich gewöhnen an)",
  segments: [
    {
      id: 1,
      de: "Yasmin zog für ihr Studium von Tunis nach München.",
      ar: "انتقلت ياسمين للدراسة من تونس إلى ميونخ.",
    },
    {
      id: 2,
      de: "Zuerst hatte sie mit der bayerischen Mundart große Schwierigkeiten.",
      ar: "في البداية واجهت صعوبات كبيرة مع اللهجة البافارية.",
      question: {
        de: "Wohin zog Yasmin?",
        ar: "إلى أين انتقلت ياسمين؟",
        options: [
          { text: "Nach München", ar: "إلى ميونخ", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Nach München» (إلى ميونخ)." },
          { text: "Nach Tunis", ar: "إلى تونس", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Nach Berlin", ar: "إلى برلين", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Die Menschen sprachen schnell, und die Bürokratie war kompliziert.",
      ar: "كان الناس يتحدثون بسرعة، وكانت الروتين الإداري معقداً.",
    },
    {
      id: 4,
      de: "Mit der Zeit gewöhnte sie sich an das Leben in der Großstadt und lernte Deutsch intensiv.",
      ar: "مع مرور الوقت تعودت على الحياة في المدينة الكبيرة وتعلمت الألمانية بجد.",
      question: {
        de: "Wie war die Anfangszeit für Yasmin?",
        ar: "كيف كانت الفترة الأولى لياسمين؟",
        options: [
          { text: "Schwierig wegen Sprache und Bürokratie", ar: "صعبة بسبب اللغة والروتين", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Schwierig wegen Sprache und Bürokratie» (صعبة بسبب اللغة والروتين)." },
          { text: "Sehr einfach", ar: "سهلة جداً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Langweilig", ar: "مملة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Heute fühlt sie sich zu Hause, hat viele Freunde und spricht fließend Deutsch.",
      ar: "اليوم تشعر بأنها في بيتها، لديها أصدقاء كثيرون وتتحدث الألمانية بطلاقة.",
      choices: [
        { text: "Kulturschock ist normal — Geduld hilft.", ar: "صدمة الثقافة أمر طبيعي — الصبر يساعد.", next: 6, feedback: "رؤية ناضجة!" },
        { text: "Sie wollte sofort zurückfliegen.", ar: "أرادت العودة فوراً.", next: 6, feedback: "لا — تأقلمت!" },
      ],
    },
    { id: 6, de: "Yasmin denkt: „Es war die beste Entscheidung meines Lebens.“ Ende.", ar: "تفكر ياسمين: «كان أفضل قرار في حياتي». النهاية." },
  ],
};

const B2_5: InteractiveStory = {
  id: "b2-konferenz",
  level: "B2",
  title: "Die Konferenz",
  titleAr: "المؤتمر",
  emoji: "🎤",
  description: "أستاذ يلقي محاضرة عن الذكاء الاصطناعي — العرض الرسمي والأسئلة.",
  grammar: "العرض الرسمي • نقل الآراء • الربط المتقدم (trotz, im Anschluss)",
  segments: [
    {
      id: 1,
      de: "Auf der Konferenz hielt Professor Wagner einen Vortrag über Künstliche Intelligenz.",
      ar: "في المؤتمر ألقى البروفيسور فاغنر محاضرة عن الذكاء الاصطناعي.",
    },
    {
      id: 2,
      de: "Er betonte, dass die Technologie viele Chancen, aber auch Risiken biete.",
      ar: "أكد أن التكنولوجيا تقدم فرصاً كثيرة، لكنها تحمل مخاطر أيضاً.",
      question: {
        de: "Worüber hielt Professor Wagner einen Vortrag?",
        ar: "عن ماذا ألقى البروفيسور فاغنر محاضرة؟",
        options: [
          { text: "Über Künstliche Intelligenz", ar: "عن الذكاء الاصطناعي", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Über Künstliche Intelligenz» (عن الذكاء الاصطناعي)." },
          { text: "Über Geschichte", ar: "عن التاريخ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Über Musik", ar: "عن الموسيقى", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Im Anschluss folgte eine lebhafte Diskussion mit dem Publikum.",
      ar: "تبع المحاضرة نقاش حيوي مع الجمهور.",
    },
    {
      id: 4,
      de: "Trotz kritischer Fragen blieb der Professor gelassen und argumentierte sachlich.",
      ar: "رغم الأسئلة النقدية ظل البروفيسور هادئاً وناقش بموضوعية.",
      question: {
        de: "Was folgte im Anschluss an den Vortrag?",
        ar: "ماذا تبع المحاضرة؟",
        options: [
          { text: "Eine lebhafte Diskussion", ar: "نقاش حيوي", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Eine lebhafte Diskussion» (نقاش حيوي)." },
          { text: "Ein Mittagessen", ar: "غداء", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Eine Pause", ar: "استراحة", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Am Ende dankte der Veranstalter dem Referenten für den interessanten Beitrag.",
      ar: "في النهاية شكر المنظم المتحدث على مساهمته المثيرة للاهتمام.",
      choices: [
        { text: "Der Vortrag war sehr aufschlussreich.", ar: "كانت المحاضرة مفيدة جداً.", next: 6, feedback: "أكيد!" },
        { text: "Niemand hat zugehört.", ar: "لم يستمع أحد.", next: 6, feedback: "لا — كان النقاش حيوياً!" },
      ],
    },
    { id: 6, de: "Professor Wagner freute sich über den regen Austausch. Ende.", ar: "سُر البروفيسور فاغنر بالتبادل الحيوي. النهاية." },
  ],
};

const B2_6: InteractiveStory = {
  id: "b2-bewerbung",
  level: "B2",
  title: "Der Bewerbungsprozess",
  titleAr: "عملية التقديم للوظيفة",
  emoji: "📋",
  description: "ألبرشت يتقدم لمنصب مدير مشروع — الرسائل الرسمية والتقديم.",
  grammar: "المراسلات الرسمية • السيرة الذاتية • اللغة الرسمية المتقدمة",
  segments: [
    {
      id: 1,
      de: "Herr Albrecht bewarb sich um eine Stelle als Projektleiter bei einem Automobilkonzern.",
      ar: "تقدم السيد ألبرشت لمنصب مدير مشروع في شركة سيارات كبرى.",
    },
    {
      id: 2,
      de: "Er verfasste eine formelle Bewerbung mit Lebenslauf, Zeugnissen und Referenzen.",
      ar: "كتب طلب توظيف رسمياً مع سيرة ذاتية وشهادات ومراجع.",
      question: {
        de: "Wofür bewarb sich Herr Albrecht?",
        ar: "عن أي منصب تقدم السيد ألبرشت؟",
        options: [
          { text: "Als Projektleiter", ar: "مدير مشروع", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Als Projektleiter» (مدير مشروع)." },
          { text: "Als Koch", ar: "طباخ", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Als Lehrer", ar: "معلم", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 3,
      de: "Nach zwei Wochen erhielt er eine Einladung zum Vorstellungsgespräch.",
      ar: "بعد أسبوعين تلقى دعوة لمقابلة عمل.",
    },
    {
      id: 4,
      de: "In dem Gespräch stellte er seine Erfahrungen überzeugend dar und beantwortete alle Fragen.",
      ar: "في المقابلة عرض خبراته بشكل مقنع وأجاب عن جميع الأسئلة.",
      question: {
        de: "Was erhielt er nach zwei Wochen?",
        ar: "ماذا تلقى بعد أسبوعين؟",
        options: [
          { text: "Eine Einladung zum Vorstellungsgespräch", ar: "دعوة لمقابلة عمل", correct: true, explanation: "نعم — هذا ما ورد في القصة: «Eine Einladung zum Vorstellungsgespräch» (دعوة لمقابلة عمل)." },
          { text: "Eine Absage", ar: "رفضاً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
          { text: "Einen Vertrag", ar: "عقداً", correct: false, explanation: "لا — الصواب هو الخيار المذكور في القصة." },
        ],
      },
    },
    {
      id: 5,
      de: "Drei Tage später kam die Zusage: Er bekam die Stelle!",
      ar: "بعد ثلاثة أيام جاء القبول: حصل على الوظيفة!",
      choices: [
        { text: "Eine gute Bewerbung öffnet Türen.", ar: "الطلب الجيد يفتح الأبواب.", next: 6, feedback: "صحيح تماماً!" },
        { text: "Der Lebenslauf war unwichtig.", ar: "كانت السيرة الذاتية غير مهمة.", next: 6, feedback: "لا — كانت أساسية!" },
      ],
    },
    { id: 6, de: "Herr Albrecht sagte: „Vorbereitung ist alles.“ Ende.", ar: "قال السيد ألبرشت: «التحضير هو كل شيء». النهاية." },
  ],
};

export const B2_STORIES: InteractiveStory[] = [B2_1, B2_2, B2_3, B2_4, B2_5, B2_6];
