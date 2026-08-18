/**
 * ═══════════════════════════════════════════════════════════
 *  خريطة المنهج العلمية — DeutschPfad A1→B2
 *  (المصدر الأكاديمي الوحيد للحقيقة — مبني على CEFR Companion 2020)
 *
 *  ═══ المرحلة 4 (توحيد الحقيقة): أُعيد توليد هذا الملف آلياً من
 *  الدروس الفعلية (LESSON_META + ملفات الدروس) — كل وحدة = درس فعلي.
 *  لا يمكن أن تختلف هذه الخريطة عن الواقع بعد الآن.
 *  أعد التوليد: node scripts/gen-cefr-map.mjs
 * ═══════════════════════════════════════════════════════════
 */

export interface CanDoDescriptor {
  de: string;
  ar: string;
}

export interface GrammarPoint {
  de: string;
  ar: string;
  /** معرّف درس المطابقة */
  lessonId?: string;
}

export interface CurriculumUnit {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  order: number;
  titleDe: string;
  titleAr: string;
  canDo: CanDoDescriptor[];
  grammar: GrammarPoint[];
  vocabDomains: string[];
  functions: string[];
  mediationTask: string;
  interactionTask: string;
  hours: number;
}

export interface CurriculumLevel {
  code: "A1" | "A2" | "B1" | "B2";
  titleAr: string;
  subtitleDe: string;
  description: string;
  estimatedHours: string;
  units: CurriculumUnit[];
}
/* ═══════════ A1 ═══════════ */
const A1_UNITS: CurriculumUnit[] = [
  {
    id: "a1-00",
    level: "A1",
    order: 1,
    titleDe: "Das Alphabet und die Aussprache",
    titleAr: "الأبجدية الألمانية والنطق",
    canDo: [
      { de: "Ich kann das Alphabet buchstabieren.", ar: "أن أتهجّى الحروف الألمانية الستة والعشرين بصوت صحيح." },
      { de: "Ich kann die Umlaute ä, ö, ü aussprechen.", ar: "أن أنطق الحروف المعلمة ä وö وü نطقاً صحيحاً (أصعب ما يواجه العربي)." },
      { de: "Ich kenne die wichtigsten Laute: ch, sch, ei, ie, eu, äu, sp, st, pf, tz, ß.", ar: "أن أتقن الأصوات المركبة الأساسية التي لا وجود لها في العربية." },
      { de: "Ich kann meinen Namen auf Deutsch buchstabieren.", ar: "أن أتهجّى اسمي بالألمانية (مهم جداً في الهاتف والاستمارات)." },
    ],
    grammar: [
      { de: "Das Alphabet und die Aussprache", ar: "الأبجدية الألمانية والنطق", lessonId: "a1-00" },
    ],
    vocabDomains: [
      "der Name",
      "heißen",
      "kommen aus",
      "wohnen",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل بالعربية أهم ثلاث معلومات عن الأبجدية الألمانية لصديق مبتدئ: عدد الحروف، الحروف الإضافية، والاختلاف عن العربية.","التفاعل: صديق مبتدئ يسألك عن نطق حرف ألماني."],
    mediationTask: "انقل بالعربية أهم ثلاث معلومات عن الأبجدية الألمانية لصديق مبتدئ: عدد الحروف، الحروف الإضافية، والاختلاف عن العربية.",
    interactionTask: "صديق مبتدئ يسألك عن نطق حرف ألماني.",
    hours: 6,
  },
  {
    id: "a1-01",
    level: "A1",
    order: 2,
    titleDe: "Hallo! Ich heiße …",
    titleAr: "التعارف والتحيات",
    canDo: [
      { de: "Ich kann grüßen und mich vorstellen.", ar: "أن أُحيّي وأُقدّم نفسي باللغة الألمانية." },
      { de: "Ich kann fragen: Wie heißt du? Woher kommst du?", ar: "أن أسأل عن الاسم والبلد (Wie heißt du? / Woher kommst du?)." },
      { de: "Ich kann „sein“ und „heißen“ konjugieren.", ar: "أن أصرف الفعلين sein (يكون) وheißen (يُسمى) في المضارع." },
      { de: "Ich kenne den Unterschied zwischen du und Sie.", ar: "أن أميّز بين ضميري المخاطبة du (غير رسمي) وSie (رسمي)." },
    ],
    grammar: [
      { de: "Hallo! Ich heiße …", ar: "التعارف والتحيات", lessonId: "a1-01" },
    ],
    vocabDomains: [
      "der Name",
      "heißen",
      "kommen aus",
      "wohnen",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: نقل الرسالة أعلاه بالعربية إلى صديق لا يفهم الألمانية، مع الحفاظ على كل المعلومات (الاسم، البلد، المدينة، النشاط).","التفاعل: تلتقي شخصاً ألمانياً لأول مرة في حفلة. هو يبدأ الحديث."],
    mediationTask: "نقل الرسالة أعلاه بالعربية إلى صديق لا يفهم الألمانية، مع الحفاظ على كل المعلومات (الاسم، البلد، المدينة، النشاط).",
    interactionTask: "تلتقي شخصاً ألمانياً لأول مرة في حفلة. هو يبدأ الحديث.",
    hours: 6,
  },
  {
    id: "a1-02",
    level: "A1",
    order: 3,
    titleDe: "Meine Familie",
    titleAr: "العائلة والأصدقاء",
    canDo: [
      { de: "Ich kann Familienmitglieder nennen.", ar: "أن أسمّي أفراد العائلة بالألمانية (Vater, Mutter, Bruder...)." },
      { de: "Ich kann mein/meine richtig verwenden.", ar: "أن أستخدم أدوات الملكية mein/meine بشكل صحيح حسب جنس الاسم." },
      { de: "Ich kann meine Familie vorstellen.", ar: "أن أقدّم عائلتي بجمل بسيطة (Das ist mein Vater...)." },
      { de: "Ich kann fragen: Hast du Geschwister?", ar: "أن أسأل عن العائلة: هل لديك إخوة؟" },
    ],
    grammar: [
      { de: "Meine Familie", ar: "العائلة والأصدقاء", lessonId: "a1-02" },
    ],
    vocabDomains: [
      "die Familie",
      "der Vater",
      "die Mutter",
      "der Bruder",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: أخبر صديقاً بالعربية عن عائلة الشخص: الأسماء، الأعمار، وعدد الإخوة والأخوات.","التفاعل: زميل جديد يسألك عن عائلتك."],
    mediationTask: "أخبر صديقاً بالعربية عن عائلة الشخص: الأسماء، الأعمار، وعدد الإخوة والأخوات.",
    interactionTask: "زميل جديد يسألك عن عائلتك.",
    hours: 6,
  },
  {
    id: "a1-03",
    level: "A1",
    order: 4,
    titleDe: "Essen und Trinken",
    titleAr: "الطعام والشراب",
    canDo: [
      { de: "Ich kann Lebensmittel nennen.", ar: "أن أسمّي المأكولات والمشروبات بأدواتها الصحيحة." },
      { de: "Ich kenne der/die/das und ein/eine.", ar: "أن أفرّق بين أدوات التعريف (der/die/das) والتنكير (ein/eine)." },
      { de: "Ich kann den Akkusativ benutzen: Ich esse einen Apfel.", ar: "أن أستخدم حالة النصب (Akkusativ) بعد أفعال الأكل والشرب." },
      { de: "Ich kann „haben“ konjugieren.", ar: "أن أصرف فعل haben وأعبّر عن الجوع والعطش." },
    ],
    grammar: [
      { de: "Essen und Trinken", ar: "الطعام والشراب", lessonId: "a1-03" },
    ],
    vocabDomains: [
      "das Essen",
      "das Trinken",
      "das Brot",
      "der Käse",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل القائمة بالعربية مع الأسعار لصديق لا يفهم الألمانية، مع توضيح أنواع الأطباق.","التفاعل: في مقهى ألماني — تطلب طعاماً وشراباً."],
    mediationTask: "انقل القائمة بالعربية مع الأسعار لصديق لا يفهم الألمانية، مع توضيح أنواع الأطباق.",
    interactionTask: "في مقهى ألماني — تطلب طعاماً وشراباً.",
    hours: 6,
  },
  {
    id: "a1-04",
    level: "A1",
    order: 5,
    titleDe: "Meine Wohnung",
    titleAr: "السكن والمنزل",
    canDo: [
      { de: "Ich kann die Räume nennen.", ar: "أن أسمّي غرف المنزل: Küche, Wohnzimmer, Schlafzimmer, Bad..." },
      { de: "Ich kann meine Wohnung beschreiben.", ar: "أن أصف منزلي بجمل بسيطة (Das Zimmer ist groß)." },
      { de: "Ich kann sagen, wo etwas ist: im, in der, auf dem.", ar: "أن أحدد مكان الأشياء بحروف الجر المكانية مع Dativ." },
      { de: "Ich kann fragen: Wo wohnst du?", ar: "أن أسأل وأجيب عن مكان السكن." },
    ],
    grammar: [
      { de: "Meine Wohnung", ar: "السكن والمنزل", lessonId: "a1-04" },
    ],
    vocabDomains: [
      "die Wohnung",
      "das Haus",
      "das Zimmer",
      "die Küche",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل الإعلان بالعربية لصديق يبحث عن سكن: عدد الغرف، المساحة، الموقع، والإيجار.","التفاعل: تتصل بصاحب شقة للاستفسار."],
    mediationTask: "انقل الإعلان بالعربية لصديق يبحث عن سكن: عدد الغرف، المساحة، الموقع، والإيجار.",
    interactionTask: "تتصل بصاحب شقة للاستفسار.",
    hours: 6,
  },
  {
    id: "a1-05",
    level: "A1",
    order: 6,
    titleDe: "Mein Tag",
    titleAr: "الحياة اليومية والروتين",
    canDo: [
      { de: "Ich kann meinen Tagesablauf beschreiben.", ar: "أن أصف يومي: أستيقظ، أتناول الفطور، أذهب إلى العمل..." },
      { de: "Ich kann trennbare Verben benutzen.", ar: "أن أستخدم الأفعال المنفصلة (aufstehen, fernsehen) بشكل صحيح." },
      { de: "Ich kann die Uhrzeit sagen.", ar: "أن أقول الوقت بالألمانية (Es ist acht Uhr)." },
      { de: "Ich kann sagen: am Morgen, am Nachmittag, am Abend.", ar: "أن أحدد أوقات اليوم (صباحاً، ظهراً، مساءً)." },
    ],
    grammar: [
      { de: "Mein Tag", ar: "الحياة اليومية والروتين", lessonId: "a1-05" },
    ],
    vocabDomains: [
      "aufstehen",
      "frühstücken",
      "arbeiten",
      "schlafen",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: أخبر صديقاً بالعربية عن روتين الشخص اليومي مع الأوقات بدقة.","التفاعل: صديق ألماني يسأل عن يومك."],
    mediationTask: "أخبر صديقاً بالعربية عن روتين الشخص اليومي مع الأوقات بدقة.",
    interactionTask: "صديق ألماني يسأل عن يومك.",
    hours: 6,
  },
  {
    id: "a1-06",
    level: "A1",
    order: 7,
    titleDe: "Freizeit und Hobbys",
    titleAr: "أوقات الفراغ والهوايات",
    canDo: [
      { de: "Ich kann meine Hobbys nennen.", ar: "أن أسمّي هواياتي: Sport, Musik, Lesen, Reisen..." },
      { de: "Ich kann sagen: Ich spiele gern Tennis.", ar: "أن أعبر عن تفضيلي بـ gern (بسرور/أحب أن)." },
      { de: "Ich kann den Imperativ bilden: Komm! Kommt! Kommen Sie!", ar: "أن أصيغ الأمر للثلاثة: أنتَ / أنتم / حضرتك." },
      { de: "Ich kann Verabredungen machen.", ar: "أن أدعو وأقبل وأرفض المواعيد بأدب." },
    ],
    grammar: [
      { de: "Freizeit und Hobbys", ar: "أوقات الفراغ والهوايات", lessonId: "a1-06" },
    ],
    vocabDomains: [
      "die Freizeit",
      "das Hobby",
      "spielen",
      "der Sport",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل الدعوة بالعربية لصديق: اليوم، الوقت، المكان، وما يجب إحضاره.","التفاعل: صديق يدعوك لنشاط في عطلة نهاية الأسبوع."],
    mediationTask: "انقل الدعوة بالعربية لصديق: اليوم، الوقت، المكان، وما يجب إحضاره.",
    interactionTask: "صديق يدعوك لنشاط في عطلة نهاية الأسبوع.",
    hours: 6,
  },
  {
    id: "a1-07",
    level: "A1",
    order: 8,
    titleDe: "Einkaufen",
    titleAr: "التسوق",
    canDo: [
      { de: "Ich kann bis 1000 zählen.", ar: "أن أعدّ من 0 إلى 1000 وأقرأ الأسعار." },
      { de: "Ich kann fragen: Was kostet das?", ar: "أن أسأل عن السعر وأجيب: Das kostet fünf Euro." },
      { de: "Ich kenne die wichtigsten Pluralformen.", ar: "أن أتعرف على أنماط الجمع الأساسية (Äpfel, Bananen, Bücher...)." },
      { de: "Ich kann im Geschäft einkaufen.", ar: "أن أتسوق: أطلب، أسأل عن السعر، وأدفع." },
    ],
    grammar: [
      { de: "Einkaufen", ar: "التسوق", lessonId: "a1-07" },
    ],
    vocabDomains: [
      "kaufen",
      "kosten",
      "der Euro",
      "der Preis",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل الإعلان بالعربية لصديق: التخفيض، البضائع، والعرض الخاص.","التفاعل: في متجر ملابس — تسأل عن مقاس وسعر."],
    mediationTask: "انقل الإعلان بالعربية لصديق: التخفيض، البضائع، والعرض الخاص.",
    interactionTask: "في متجر ملابس — تسأل عن مقاس وسعر.",
    hours: 6,
  },
  {
    id: "a1-08",
    level: "A1",
    order: 9,
    titleDe: "Kleidung und Farben",
    titleAr: "الملابس والألوان",
    canDo: [
      { de: "Ich kann Kleidung nennen.", ar: "أن أسمّي الملابس: Hemd, Hose, Jacke, Schuhe..." },
      { de: "Ich kann die Farben sagen.", ar: "أن أسمّي الألوان: rot, blau, grün, gelb, schwarz, weiß." },
      { de: "Ich kann sagen: Ich trage ein rotes Hemd.", ar: "أن أصف ما أرتدي بجملة كاملة (مقدمة لتصريف الصفات)." },
      { de: "Ich kann fragen: Wie findest du das?", ar: "أن أسأل عن الرأي وأجيب: Das finde ich schön." },
    ],
    grammar: [
      { de: "Kleidung und Farben", ar: "الملابس والألوان", lessonId: "a1-08" },
    ],
    vocabDomains: [
      "die Kleidung",
      "das Hemd",
      "die Hose",
      "die Jacke",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل بالعربية ما يرتديه الشخص في الشتاء ولونه المفضل.","التفاعل: صديقة تسأل رأيك في ملابس."],
    mediationTask: "انقل بالعربية ما يرتديه الشخص في الشتاء ولونه المفضل.",
    interactionTask: "صديقة تسأل رأيك في ملابس.",
    hours: 6,
  },
  {
    id: "a1-09",
    level: "A1",
    order: 10,
    titleDe: "Termine und der Kalender",
    titleAr: "المواعيد والتقويم",
    canDo: [
      { de: "Ich kann die Wochentage und Monate nennen.", ar: "أن أسمّي أيام الأسبوع والشهور بالترتيب." },
      { de: "Ich kann die Jahreszeiten sagen.", ar: "أن أسمّي الفصول الأربعة." },
      { de: "Ich kann Ordinalzahlen bilden: der erste, der zweite...", ar: "أن أصيغ الأعداد الترتيبية (الأول، الثاني...)." },
      { de: "Ich kann Termine machen: Am Montag um neun Uhr.", ar: "أن أحدد المواعيد: يوم الاثنين في التاسعة." },
    ],
    grammar: [
      { de: "Termine und der Kalender", ar: "المواعيد والتقويم", lessonId: "a1-09" },
    ],
    vocabDomains: [
      "der Termin",
      "der Montag",
      "der Dienstag",
      "der Mittwoch",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: أخبر صديقاً بالعربية بموعد بدء الدورة ومدتها اليومية.","التفاعل: تحجز موعداً في عيادة أو مكتب."],
    mediationTask: "أخبر صديقاً بالعربية بموعد بدء الدورة ومدتها اليومية.",
    interactionTask: "تحجز موعداً في عيادة أو مكتب.",
    hours: 6,
  },
  {
    id: "a1-10",
    level: "A1",
    order: 11,
    titleDe: "Arbeit und Berufe",
    titleAr: "العمل والمهن",
    canDo: [
      { de: "Ich kann Berufe nennen.", ar: "أن أسمّي المهن: Lehrer, Arzt, Ingenieur, Verkäufer..." },
      { de: "Ich kann die Berufe feminin bilden: Lehrer → Lehrerin.", ar: "أن أصوغ المؤنث من المهن (معلم → معلمة)." },
      { de: "Ich kann sagen: Ich arbeite als ...", ar: "أن أعبر عن مهنتي: أعمل كـ..." },
      { de: "Ich kann verneinen: nicht und kein.", ar: "أن أنفي بـ nicht (مع الأفعال) وkein (مع الأسماء)." },
    ],
    grammar: [
      { de: "Arbeit und Berufe", ar: "العمل والمهن", lessonId: "a1-10" },
    ],
    vocabDomains: [
      "der Beruf",
      "die Arbeit",
      "die Firma",
      "der Lehrer / die Lehrerin",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل الرسالة بالعربية: موعد الاجتماع، المكان، والمطلوب إحضاره.","التفاعل: مكالمة هاتفية مهنية قصيرة."],
    mediationTask: "انقل الرسالة بالعربية: موعد الاجتماع، المكان، والمطلوب إحضاره.",
    interactionTask: "مكالمة هاتفية مهنية قصيرة.",
    hours: 6,
  },
  {
    id: "a1-11",
    level: "A1",
    order: 12,
    titleDe: "In der Stadt",
    titleAr: "التنقل في المدينة",
    canDo: [
      { de: "Ich kann Orte in der Stadt nennen.", ar: "أن أسمّي الأماكن: المحطة، السوق، الصيدلية، البنك..." },
      { de: "Ich kann nach dem Weg fragen.", ar: "أن أسأل عن الطريق: Entschuldigung, wo ist der Bahnhof?" },
      { de: "Ich kann Richtungen verstehen: geradeaus, rechts, links.", ar: "أن أفهم الاتجاهات: مباشرة، يمين، يسار." },
      { de: "Ich kann sagen: Ich gehe zum Supermarkt, in die Stadt.", ar: "أن أعبر عن الحركة: أذهب إلى السوق (zu) أو إلى المدينة (in)." },
    ],
    grammar: [
      { de: "In der Stadt", ar: "التنقل في المدينة", lessonId: "a1-11" },
    ],
    vocabDomains: [
      "der Bahnhof",
      "die Apotheke",
      "die Bank",
      "die Post",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: أرشد سائحاً بالعربية: أي خط مترو، من أين إلى أين، المدة، وأين يشتري التذاكر.","التفاعل: سائح يسألك عن الطريق في المدينة."],
    mediationTask: "أرشد سائحاً بالعربية: أي خط مترو، من أين إلى أين، المدة، وأين يشتري التذاكر.",
    interactionTask: "سائح يسألك عن الطريق في المدينة.",
    hours: 6,
  },
  {
    id: "a1-12",
    level: "A1",
    order: 13,
    titleDe: "Wetter und Jahreszeiten",
    titleAr: "الطقس والفصول",
    canDo: [
      { de: "Ich kann das Wetter beschreiben.", ar: "أن أصف الطقس: الجو مشمس، ممطر، بارد، حار." },
      { de: "Ich kann sagen: Es ist kalt / Es regnet / Die Sonne scheint.", ar: "أن أستخدم الصيغ الثلاث الأساسية للطقس." },
      { de: "Ich kann „werden“ konjugieren.", ar: "أن أصرف فعل werden (يصبح) — ثالث الأفعال المساعدة." },
      { de: "Ich kann das Wetter mit den Jahreszeiten verbinden.", ar: "أن أربط الطقس بالفصول: في الشتاء بارد، في الصيف حار." },
    ],
    grammar: [
      { de: "Wetter und Jahreszeiten", ar: "الطقس والفصول", lessonId: "a1-12" },
    ],
    vocabDomains: [
      "das Wetter",
      "die Sonne",
      "der Regen",
      "der Schnee",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: انقل النشرة بالعربية: طقس الغد، درجة الحرارة، وطقس نهاية الأسبوع.","التفاعل: صديق يسأل عن طقس مدينتك."],
    mediationTask: "انقل النشرة بالعربية: طقس الغد، درجة الحرارة، وطقس نهاية الأسبوع.",
    interactionTask: "صديق يسأل عن طقس مدينتك.",
    hours: 6,
  },
  {
    id: "a1-14",
    level: "A1",
    order: 14,
    titleDe: "Zahlen, Telefon und Adressen",
    titleAr: "الأرقام والهاتف والعناوين",
    canDo: [
      { de: "Ich kann Zahlen von 0 bis 100 nennen und verstehen.", ar: "أن أذكر الأرقام من 0 حتى 100 وأفهمها." },
      { de: "Ich kann Telefonnummern buchstabieren.", ar: "أن أتهجّى أرقام الهاتف (رقماً برقم)." },
      { de: "Ich kann eine Adresse verstehen und nennen.", ar: "أن أفهم عنواناً وأذكره (الشارع والرقم والمدينة)." },
      { de: "Ich kann nach der Telefonnummer fragen.", ar: "أن أسأل عن رقم الهاتف: Wie ist deine Telefonnummer?" },
    ],
    grammar: [
      { de: "Zahlen, Telefon und Adressen", ar: "الأرقام والهاتف والعناوين", lessonId: "a1-14" },
    ],
    vocabDomains: [
      "kaufen",
      "kosten",
      "der Euro",
      "der Preis",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: أخبر سائق التوصيل بالعربية بالعنوان: اسم الشارع ورقم البيت والمدينة — دون تغيير أي جزء.","التفاعل: صديق ألماني جديد يسألك عن رقم هاتفك وعنوانك."],
    mediationTask: "أخبر سائق التوصيل بالعربية بالعنوان: اسم الشارع ورقم البيت والمدينة — دون تغيير أي جزء.",
    interactionTask: "صديق ألماني جديد يسألك عن رقم هاتفك وعنوانك.",
    hours: 6,
  },
  {
    id: "a1-13",
    level: "A1",
    order: 15,
    titleDe: "A1 kompakt — die große Wiederholung",
    titleAr: "A1 المراجعة الشاملة",
    canDo: [
      { de: "Ich kann alle A1-Grammatik kombinieren.", ar: "أن أجمع كل قواعد A1 في جمل صحيحة." },
      { de: "Ich kann über meinen Tag, meine Familie und meine Hobbys sprechen.", ar: "أن أتحدث عن يومي وعائلتي وهواياتي بجمل مترابطة." },
      { de: "Ich kann war und hatte benutzen.", ar: "أن أستخدم الماضي الأول (كان/امتلك) في سرد قصصي." },
      { de: "Ich bin bereit für A2!", ar: "أن أكون جاهزاً لمستوى A2!" },
    ],
    grammar: [
      { de: "A1 kompakt — die große Wiederholung", ar: "A1 المراجعة الشاملة", lessonId: "a1-13" },
    ],
    vocabDomains: [
      "A1 المراجعة الشاملة",
      "مفردات الحياة اليومية",
    ],
    functions: ["التواصل في مواقف الحياة اليومية","الوساطة: لخّص الرسالة بالعربية لصديق لا يفهم الألمانية: من المتحدثة، من أين، وماذا ستفعل في نهاية الأسبوع.","التفاعل: محادثة شاملة: لقاء، طعام، تسوق."],
    mediationTask: "لخّص الرسالة بالعربية لصديق لا يفهم الألمانية: من المتحدثة، من أين، وماذا ستفعل في نهاية الأسبوع.",
    interactionTask: "محادثة شاملة: لقاء، طعام، تسوق.",
    hours: 6,
  },
];

/* ═══════════ A2 ═══════════ */
const A2_UNITS: CurriculumUnit[] = [
  {
    id: "a2-01",
    level: "A2",
    order: 1,
    titleDe: "Reisen und Urlaub",
    titleAr: "السفر والعطلات",
    canDo: [
      { de: "Ich kann das Perfekt bilden.", ar: "أن أصوغ الماضي التام (Perfekt) — أهم زمن ماضٍ في المحادثة." },
      { de: "Ich weiß, wann man sein und wann haben benutzt.", ar: "أن أميز متى يكون الفعل المساعد sein ومتى haben." },
      { de: "Ich kann über Reisen und Urlaub erzählen.", ar: "أن أحكي عن رحلة أو عطلة: ماذا فعلت وأين ذهبت." },
      { de: "Ich kann über meine letzte Reise mit Perfekt berichten.", ar: "أن أروي رحلتي الأخيرة مستخدماً الماضي التام (Perfekt)." },
    ],
    grammar: [
      { de: "Reisen und Urlaub", ar: "السفر والعطلات", lessonId: "a2-01" },
    ],
    vocabDomains: [
      "der Urlaub",
      "die Reise",
      "reisen",
      "fliegen",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: انقل الرسالة بالعربية إلى صديق لا يفهم الألمانية، محافظاً على زمن الماضي (ماذا حدث).","التفاعل: صديق ألماني يسألك عن عطلتك الأخيرة."],
    mediationTask: "انقل الرسالة بالعربية إلى صديق لا يفهم الألمانية، محافظاً على زمن الماضي (ماذا حدث).",
    interactionTask: "صديق ألماني يسألك عن عطلتك الأخيرة.",
    hours: 7,
  },
  {
    id: "a2-02",
    level: "A2",
    order: 2,
    titleDe: "Beim Arzt",
    titleAr: "الصحة والطبيب",
    canDo: [
      { de: "Ich kann Körperteile nennen.", ar: "أن أسمّي أجزاء الجسم (Kopf, Bauch, Rücken...)." },
      { de: "Ich kann Symptome beschreiben.", ar: "أن أصف الأعراض: عندي صداع، يؤلمني ظهري." },
      { de: "Ich kann sollen konjugieren und Ratschläge geben.", ar: "أن أصرف فعل sollen وأعطي نصيحة: يجب أن تشرب كثيراً." },
      { de: "Ich kann einen Termin beim Arzt vereinbaren.", ar: "أن أحجز موعداً عند الطبيب هاتفياً." },
    ],
    grammar: [
      { de: "Beim Arzt", ar: "الصحة والطبيب", lessonId: "a2-02" },
    ],
    vocabDomains: [
      "der Körper",
      "der Kopf",
      "das Auge",
      "das Ohr",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: انقل التعليمات بالعربية: جرعة الدواء، الوقت، والنصائح الإضافية.","التفاعل: عند الطبيب — تصف الأعراض وتطلب النصيحة."],
    mediationTask: "انقل التعليمات بالعربية: جرعة الدواء، الوقت، والنصائح الإضافية.",
    interactionTask: "عند الطبيب — تصف الأعراض وتطلب النصيحة.",
    hours: 7,
  },
  {
    id: "a2-03",
    level: "A2",
    order: 3,
    titleDe: "Im Restaurant",
    titleAr: "المطعم والطعام",
    canDo: [
      { de: "Ich kann im Restaurant bestellen.", ar: "أن أطلب الطعام بأدب: Ich möchte bitte... / Ich hätte gern..." },
      { de: "Ich kann möchten und können konjugieren.", ar: "أن أصرف أفعال الشرط möchten (أود) وkönnen (أستطيع)." },
      { de: "Ich kann sagen: Das schmeckt gut.", ar: "أن أعبّر عن الطعم: هذا طعمه جيد." },
      { de: "Ich kann die Rechnung verlangen.", ar: "أن أطلب الحساب: Die Rechnung, bitte!" },
    ],
    grammar: [
      { de: "Im Restaurant", ar: "المطعم والطعام", lessonId: "a2-03" },
    ],
    vocabDomains: [
      "das Restaurant",
      "die Speisekarte",
      "bestellen",
      "die Vorspeise",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: انقل القائمة بالعربية: المقبلات، الطبق الرئيسي بخياراته، والحلوى.","التفاعل: في مطعم — تطلب وتشكو من الطبق."],
    mediationTask: "انقل القائمة بالعربية: المقبلات، الطبق الرئيسي بخياراته، والحلوى.",
    interactionTask: "في مطعم — تطلب وتشكو من الطبق.",
    hours: 7,
  },
  {
    id: "a2-04",
    level: "A2",
    order: 4,
    titleDe: "Wohnungssuche",
    titleAr: "البحث عن سكن",
    canDo: [
      { de: "Ich kann Wohnungsanzeigen verstehen.", ar: "أن أفهم إعلانات العقارات: شقة، إيجار، غرف." },
      { de: "Ich kenne die 9 Wechselpräpositionen.", ar: "أن أتقن حروف الجر المتغيرة التسعة (in, an, auf, über, unter, vor, hinter, neben, zwischen)." },
      { de: "Ich kann unterscheiden: wo? (Dativ) und wohin? (Akkusativ).", ar: "أن أميز: أين؟ (سكون Dativ) وإلى أين؟ (حركة Akkusativ)." },
      { de: "Ich kann über das Zusammenleben sprechen: Nachbarn, Hausordnung, Ruhezeiten.", ar: "أن أتحدث عن العيش المشترك: الجيران، نظام البيت، أوقات الهدوء." },
    ],
    grammar: [
      { de: "Wohnungssuche", ar: "البحث عن سكن", lessonId: "a2-04" },
    ],
    vocabDomains: [
      "die Wohnungssuche",
      "die Miete",
      "der Vermieter",
      "der Mieter",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: لخّص الإعلان: نوع الشقة، الطابق، المميزات، الإيجار، وموعد المعاينة.","التفاعل: تتصل بخصوص شقة وتتفاوض على موعد معاينة."],
    mediationTask: "لخّص الإعلان: نوع الشقة، الطابق، المميزات، الإيجار، وموعد المعاينة.",
    interactionTask: "تتصل بخصوص شقة وتتفاوض على موعد معاينة.",
    hours: 7,
  },
  {
    id: "a2-05",
    level: "A2",
    order: 5,
    titleDe: "Im Büro",
    titleAr: "في المكتب والعمل",
    canDo: [
      { de: "Ich kann telefonieren: Wer ist da? Einen Moment, bitte!", ar: "أن أجري مكالمة هاتفية مهنية: من المتصل؟ لحظة من فضلك!" },
      { de: "Ich kenne das Präteritum von sein und haben.", ar: "أن أتقن الماضي البسيط للأفعال المساعدة: war، hatte." },
      { de: "Ich kann eine kurze E-Mail schreiben.", ar: "أن أكتب بريداً إلكترونياً قصيراً." },
      { de: "Ich kann eine kurze E-Mail im Büro schreiben.", ar: "أن أكتب بريداً إلكترونياً مهنياً قصيراً." },
    ],
    grammar: [
      { de: "Im Büro", ar: "في المكتب والعمل", lessonId: "a2-05" },
    ],
    vocabDomains: [
      "das Büro",
      "anrufen",
      "der Anruf",
      "der Kollege / die Kollegin",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: انقل البريد بالعربية: موعد الاجتماع، المكان، والمطلوب إحضاره.","التفاعل: مكالمة مهنية — اعتذار وتأجيل موعد."],
    mediationTask: "انقل البريد بالعربية: موعد الاجتماع، المكان، والمطلوب إحضاره.",
    interactionTask: "مكالمة مهنية — اعتذار وتأجيل موعد.",
    hours: 7,
  },
  {
    id: "a2-06",
    level: "A2",
    order: 6,
    titleDe: "Medien und Nachrichten",
    titleAr: "الإعلام والأخبار",
    canDo: [
      { de: "Ich kann über Medien sprechen.", ar: "أن أتحدث عن الإعلام: تلفاز، صحيفة، إنترنت." },
      { de: "Ich kann meine Meinung sagen.", ar: "أن أعبر عن رأيي: Ich finde / Ich glaube / Ich denke." },
      { de: "Ich kann Nebensätze mit dass bilden.", ar: "أن أبني جملة ثانوية بـ dass مع الفعل في النهاية." },
      { de: "Ich kann eine einfache Nachricht zusammenfassen.", ar: "أن ألخص خبراً أو رسالة بسيطة بالعربية أو الألمانية." },
    ],
    grammar: [
      { de: "Medien und Nachrichten", ar: "الإعلام والأخبار", lessonId: "a2-06" },
    ],
    vocabDomains: [
      "das Fernsehen",
      "die Zeitung",
      "das Internet",
      "das Radio",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: انقل الخبر بالعربية مع الحفاظ على المعلومات: ماذا سيُبنى، متى، وما الذي سيحتويه.","التفاعل: صديق يسأل رأيك عن وسائل التواصل الاجتماعي."],
    mediationTask: "انقل الخبر بالعربية مع الحفاظ على المعلومات: ماذا سيُبنى، متى، وما الذي سيحتويه.",
    interactionTask: "صديق يسأل رأيك عن وسائل التواصل الاجتماعي.",
    hours: 7,
  },
  {
    id: "a2-07",
    level: "A2",
    order: 7,
    titleDe: "Bank und Geld",
    titleAr: "البنك والمال",
    canDo: [
      { de: "Ich kann Bankgespräche führen.", ar: "أن أجري معاملات بنكية: فتح حساب، إيداع، تحويل." },
      { de: "Ich kann es gibt richtig benutzen.", ar: "أن أستخدم es gibt + Akkusativ (يوجد/هناك)." },
      { de: "Ich kenne die Akkusativ- und Dativpronomen.", ar: "أن أتقن ضمائر النصب (mich/dich) والجر (mir/dir)." },
      { de: "Ich kann am Bankschalter einfache Fragen beantworten.", ar: "أن أجيب عن أسئلة بسيطة في البنك." },
    ],
    grammar: [
      { de: "Bank und Geld", ar: "البنك والمال", lessonId: "a2-07" },
    ],
    vocabDomains: [
      "das Konto",
      "eröffnen",
      "das Geld",
      "überweisen",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: اشرح بالعربية ما يلزم لفتح حساب: النموذج، الوثائق المطلوبة.","التفاعل: في البنك — تفتح حساباً وتجيب عن الأسئلة."],
    mediationTask: "اشرح بالعربية ما يلزم لفتح حساب: النموذج، الوثائق المطلوبة.",
    interactionTask: "في البنك — تفتح حساباً وتجيب عن الأسئلة.",
    hours: 7,
  },
  {
    id: "a2-08",
    level: "A2",
    order: 8,
    titleDe: "Mobil sein",
    titleAr: "المواصلات والتنقل",
    canDo: [
      { de: "Ich kann Fahrkarten kaufen.", ar: "أن أشتري تذاكر وأقرأ جداول المواصلات." },
      { de: "Ich kann den Komparativ bilden: schneller als.", ar: "أن أصوغ المقارنة: أسرع من (schneller als)." },
      { de: "Ich kenne die Superlative: am schnellsten.", ar: "أن أصوغ التفضيل: الأسرع (am schnellsten)." },
      { de: "Ich kenne die unregelmäßigen Formen: gut, besser, am besten.", ar: "أن أتقن الشواذ: جيد، أفضل، الأفضل." },
    ],
    grammar: [
      { de: "Mobil sein", ar: "المواصلات والتنقل", lessonId: "a2-08" },
    ],
    vocabDomains: [
      "die Fahrkarte",
      "der Zug",
      "die U-Bahn",
      "die Straßenbahn",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: أرشد سائحاً بالعربية: وقت الانطلاق، الرصيف، الوصول، ومكان التغيير.","التفاعل: في محطة القطار — تشتري تذكرة وتسأل عن المنصة."],
    mediationTask: "أرشد سائحاً بالعربية: وقت الانطلاق، الرصيف، الوصول، ومكان التغيير.",
    interactionTask: "في محطة القطار — تشتري تذكرة وتسأل عن المنصة.",
    hours: 7,
  },
  {
    id: "a2-09",
    level: "A2",
    order: 9,
    titleDe: "Feste und Feiern",
    titleAr: "المناسبات والاحتفالات",
    canDo: [
      { de: "Ich kann einladen und antworten.", ar: "أن أدعو وأقبل وأعتذر عن دعوة." },
      { de: "Ich kann den Dativ komplett benutzen.", ar: "أن أستخدم حالة الجر (Dativ) مع الأسماء والضمائر." },
      { de: "Ich kenne die Dativ-Verben: helfen, gefallen, gehören, gratulieren.", ar: "أن أتقن أفعال الجر الخاصة: يساعد، يعجب، يخص، يهنئ." },
      { de: "Ich kann eine Einladung schreiben und beantworten.", ar: "أن أكتب دعوة وأرد عليها." },
    ],
    grammar: [
      { de: "Feste und Feiern", ar: "المناسبات والاحتفالات", lessonId: "a2-09" },
    ],
    vocabDomains: [
      "das Fest",
      "feiern",
      "die Einladung",
      "einladen",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: انقل الدعوة بالعربية: اليوم، الوقت، المكان، والمطلوب.","التفاعل: تتلقى دعوة عيد ميلاد — تقبل أو تعتذر بأدب."],
    mediationTask: "انقل الدعوة بالعربية: اليوم، الوقت، المكان، والمطلوب.",
    interactionTask: "تتلقى دعوة عيد ميلاد — تقبل أو تعتذر بأدب.",
    hours: 7,
  },
  {
    id: "a2-10",
    level: "A2",
    order: 10,
    titleDe: "Lernen und Schule",
    titleAr: "المدرسة والتعلم",
    canDo: [
      { de: "Ich kann über Lernen und Kurse sprechen.", ar: "أن أتحدث عن الدراسة والدورات والامتحانات." },
      { de: "Ich kann weil, wenn und ob benutzen.", ar: "أن أستخدم الجمل الثانوية: لأنّ (weil)، إذا (wenn)، هل (ob)." },
      { de: "Ich kann Possessivpronomen in allen Fällen benutzen.", ar: "أن أستخدم الضمائر الملكية في كل الحالات." },
      { de: "Ich kann über meine Lernpläne sprechen.", ar: "أن أتحدث عن خططي الدراسية." },
    ],
    grammar: [
      { de: "Lernen und Schule", ar: "المدرسة والتعلم", lessonId: "a2-10" },
    ],
    vocabDomains: [
      "der Kurs",
      "die Prüfung",
      "bestehen",
      "durchfallen",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: لخّص البرنامج: البداية، المدة، عدد المرات، والاختبار النهائي.","التفاعل: تسجل في دورة لغة وتسأل عن التفاصيل."],
    mediationTask: "لخّص البرنامج: البداية، المدة، عدد المرات، والاختبار النهائي.",
    interactionTask: "تسجل في دورة لغة وتسأل عن التفاصيل.",
    hours: 7,
  },
  {
    id: "a2-11",
    level: "A2",
    order: 11,
    titleDe: "Dienstleistungen",
    titleAr: "الخدمات والمعاملات",
    canDo: [
      { de: "Ich kann Dienstleistungen verstehen.", ar: "أن أفهم الخدمات: البريد، الحلاق، الإصلاحات." },
      { de: "Ich kann reflexive Verben benutzen.", ar: "أن أستخدم الأفعال الانعكاسية: أفرح، أغضب، أسجل." },
      { de: "Ich kann mich höflich beschweren.", ar: "أن أقدم شكوى بأدب." },
      { de: "Ich kann Formulare ausfüllen: Name, Adresse, Anmeldung.", ar: "أن أملأ الاستمارات الرسمية: الاسم، العنوان، التسجيل (Anmeldung)." },
    ],
    grammar: [
      { de: "Dienstleistungen", ar: "الخدمات والمعاملات", lessonId: "a2-11" },
    ],
    vocabDomains: [
      "die Post",
      "der Friseur",
      "reparieren",
      "die Reparatur",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: اشرح بالعربية خطوات ملء استمارة التسجيل: البيانات المطلوبة والتوقيع.","التفاعل: في مكتب الخدمات — تقدم شكوى مهذبة."],
    mediationTask: "اشرح بالعربية خطوات ملء استمارة التسجيل: البيانات المطلوبة والتوقيع.",
    interactionTask: "في مكتب الخدمات — تقدم شكوى مهذبة.",
    hours: 7,
  },
  {
    id: "a2-12",
    level: "A2",
    order: 12,
    titleDe: "Zwischenmenschliches",
    titleAr: "العلاقات بين الناس",
    canDo: [
      { de: "Ich kann Gefühle ausdrücken.", ar: "أن أعبر عن المشاعر: سعيد، حزين، متوتر، متحمس." },
      { de: "Ich kann die wichtigsten Konnektoren benutzen.", ar: "أن أستخدم أدوات الربط: und, aber, oder, denn, sondern, deshalb, trotzdem, dann." },
      { de: "Ich kann Konflikte höflich ansprechen.", ar: "أن أتناول الخلافات بأدب وأتصالح." },
      { de: "Ich kann höflich widersprechen und Kompromisse vorschlagen.", ar: "أن أعترض بلطف وأقترح حلولاً وسطاً." },
    ],
    grammar: [
      { de: "Zwischenmenschliches", ar: "العلاقات بين الناس", lessonId: "a2-12" },
    ],
    vocabDomains: [
      "das Gefühl",
      "glücklich",
      "traurig",
      "gestresst",
    ],
    functions: ["إدارة مواقف روتينية أوسع","الوساطة: انقل الرسالة بالعربية مع نقل نبرة الاعتذار: السبب، والاقتراح.","التفاعل: صديق يخطئ في حقك — تحل الخلاف بلطف."],
    mediationTask: "انقل الرسالة بالعربية مع نقل نبرة الاعتذار: السبب، والاقتراح.",
    interactionTask: "صديق يخطئ في حقك — تحل الخلاف بلطف.",
    hours: 7,
  },
];

/* ═══════════ B1 ═══════════ */
const B1_UNITS: CurriculumUnit[] = [
  {
    id: "b1-01",
    level: "B1",
    order: 1,
    titleDe: "Ausbildung und Studium",
    titleAr: "التعليم والدراسة",
    canDo: [
      { de: "Ich kann über Bildung sprechen.", ar: "أن أتحدث عن التعليم والدراسة والتخصصات." },
      { de: "Ich kann den Genitiv benutzen: das Buch des Lehrers.", ar: "أن أستخدم حالة المضاف إليه (Genitiv): كتاب المعلّم." },
      { de: "Ich kann Relativsätze bilden: Der Mann, der ...", ar: "أن أبني الجمل النسبية: الرجل الذي..." },
      { de: "Ich kann über das Bildungssystem in meinem Land sprechen.", ar: "أن أتحدث عن النظام التعليمي في بلدي." },
    ],
    grammar: [
      { de: "Ausbildung und Studium", ar: "التعليم والدراسة", lessonId: "b1-01" },
    ],
    vocabDomains: [
      "die Ausbildung",
      "das Studium",
      "das Fach",
      "studieren",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: لخّص النص بالعربية: المرحلة بعد الابتدائية، ودور الصالة (Gymnasium).","التفاعل: نقاش عن التعليم الجامعي بين ألمانيا وبلدك."],
    mediationTask: "لخّص النص بالعربية: المرحلة بعد الابتدائية، ودور الصالة (Gymnasium).",
    interactionTask: "نقاش عن التعليم الجامعي بين ألمانيا وبلدك.",
    hours: 9,
  },
  {
    id: "b1-02",
    level: "B1",
    order: 2,
    titleDe: "Arbeitswelt",
    titleAr: "عالم العمل",
    canDo: [
      { de: "Ich kann das Präteritum komplett bilden.", ar: "أن أصوغ الماضي البسيط الكامل لكل الأفعال." },
      { de: "Ich kann das Plusquamperfekt bilden: hatte/war + Partizip II.", ar: "أن أصوغ الماضي التام المركب (قبل الماضي)." },
      { de: "Ich kann über Berufserfahrung erzählen.", ar: "أن أحكي عن الخبرات المهنية." },
      { de: "Ich kann über meine beruflichen Erfahrungen berichten.", ar: "أن أروي تجاربي المهنية." },
    ],
    grammar: [
      { de: "Arbeitswelt", ar: "عالم العمل", lessonId: "b1-02" },
    ],
    vocabDomains: [
      "die Bewerbung",
      "der Lebenslauf",
      "das Vorstellungsgespräch",
      "der Arbeitgeber",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: أخبر صديقك بالعربية بموعد المقابلة وكل ما يجب إحضاره ومدتها، بدقة كاملة.","التفاعل: مقابلة عمل لوظيفة في شركة ألمانية."],
    mediationTask: "أخبر صديقك بالعربية بموعد المقابلة وكل ما يجب إحضاره ومدتها، بدقة كاملة.",
    interactionTask: "مقابلة عمل لوظيفة في شركة ألمانية.",
    hours: 9,
  },
  {
    id: "b1-03",
    level: "B1",
    order: 3,
    titleDe: "Umwelt und Klima",
    titleAr: "البيئة والمناخ",
    canDo: [
      { de: "Ich kann über Umweltprobleme sprechen.", ar: "أن أتحدث عن مشاكل البيئة والمناخ." },
      { de: "Ich kann das Passiv bilden: wird/wurde + Partizip II.", ar: "أن أبني المبني للمجهول: يُبنى / بُني." },
      { de: "Ich kann man als Passiv-Ersatz benutzen.", ar: "أن أستخدم man كبديل للمجهول." },
      { de: "Ich kann den Infinitiv mit zu benutzen: Es ist wichtig, die Umwelt zu schützen.", ar: "أن أستخدم التركيب المصدري zu + Infinitiv في جمل النصح البيئي." },
    ],
    grammar: [
      { de: "Umwelt und Klima", ar: "البيئة والمناخ", lessonId: "b1-03" },
    ],
    vocabDomains: [
      "die Umwelt",
      "der Klimawandel",
      "der Müll",
      "recyceln",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: لخّص النص مع نقل الموقف: ما التحدي، وماذا يطالب الخبراء.","التفاعل: نقاش عن الحلول البيئية في مدينتك."],
    mediationTask: "لخّص النص مع نقل الموقف: ما التحدي، وماذا يطالب الخبراء.",
    interactionTask: "نقاش عن الحلول البيئية في مدينتك.",
    hours: 9,
  },
  {
    id: "b1-04",
    level: "B1",
    order: 4,
    titleDe: "Medien und Gesellschaft",
    titleAr: "الإعلام والمجتمع",
    canDo: [
      { de: "Ich kann Medien kritisch betrachten.", ar: "أن أنظر للإعلام نظرة نقدية." },
      { de: "Ich kann den Konjunktiv II bilden: würde + Infinitiv.", ar: "أن أصوغ صيغة الشرط: سوف/لو (würde + مصدر)." },
      { de: "Ich kann die wichtigen Formen benutzen: wäre, hätte, könnte.", ar: "أن أستخدم الأشكال الشائعة: كان سيكون، كان سيملك، كان يستطيع." },
      { de: "Ich kann über Medien und ihre Rolle in der Gesellschaft sprechen.", ar: "أن أتحدث عن الإعلام ودوره في المجتمع." },
    ],
    grammar: [
      { de: "Medien und Gesellschaft", ar: "الإعلام والمجتمع", lessonId: "b1-04" },
    ],
    vocabDomains: [
      "die Gesellschaft",
      "die Meinung",
      "kritisch",
      "der Konjunktiv II",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: لخّص الخبر ونقل وجهتي نظر الناقد والزوار دون رأيك.","التفاعل: نقاش عن تأثير وسائل التواصل الاجتماعي."],
    mediationTask: "لخّص الخبر ونقل وجهتي نظر الناقد والزوار دون رأيك.",
    interactionTask: "نقاش عن تأثير وسائل التواصل الاجتماعي.",
    hours: 9,
  },
  {
    id: "b1-05",
    level: "B1",
    order: 5,
    titleDe: "Gesundheit und Prävention",
    titleAr: "الصحة والوقاية",
    canDo: [
      { de: "Ich kann über Gesundheit und Sport sprechen.", ar: "أن أتحدث عن الصحة والرياضة والوقاية." },
      { de: "Ich kann den Konjunktiv II in der Vergangenheit bilden: hätte/wäre + Partizip II.", ar: "أن أصوغ الشرطية في الماضي: كنت سأفعل (hätte/wäre + تصريف ثالث)." },
      { de: "Ich kann Wenn-Sätze bilden.", ar: "أن أبني الجمل الشرطية: لو... لـ..." },
      { de: "Ich kann die Hauptaussage eines Artikels zusammenfassen.", ar: "أن ألخص الفكرة الرئيسية لمقال." },
    ],
    grammar: [
      { de: "Gesundheit und Prävention", ar: "الصحة والوقاية", lessonId: "b1-05" },
    ],
    vocabDomains: [
      "die Gesundheit",
      "die Prävention",
      "die Bewegung",
      "fit",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: انقل الخبر بالعربية مع ذكر وجهتي النظر (المؤيدون والمعارضون) دون إبداء رأيك الخاص.","التفاعل: نقاش مع زميل عن الأخبار المزيفة (Fake News)."],
    mediationTask: "انقل الخبر بالعربية مع ذكر وجهتي النظر (المؤيدون والمعارضون) دون إبداء رأيك الخاص.",
    interactionTask: "نقاش مع زميل عن الأخبار المزيفة (Fake News).",
    hours: 9,
  },
  {
    id: "b1-06",
    level: "B1",
    order: 6,
    titleDe: "Kultur und Kunst",
    titleAr: "الثقافة والفن",
    canDo: [
      { de: "Ich kann Kunstwerke beschreiben.", ar: "أن أصف الأعمال الفنية والمتاحف." },
      { de: "Ich kann Adjektive deklinieren.", ar: "أن أصرف الصفات في كل الحالات (نهايات الصفات)." },
      { de: "Ich kann kulturelle Unterschiede vergleichen.", ar: "أن أقارن بين الثقافات." },
      { de: "Ich kann über Heimat, Migration und Kulturschock sprechen.", ar: "أن أتحدث عن الوطن والهجرة وصدمات الثقافة وأعبّر عن الحنين (Heimweh)." },
    ],
    grammar: [
      { de: "Kultur und Kunst", ar: "الثقافة والفن", lessonId: "b1-06" },
    ],
    vocabDomains: [
      "die Kultur",
      "die Kunst",
      "das Gemälde",
      "der Maler",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: لخّص المراجعة مع نقل التقييم النهائي دون رأيك.","التفاعل: توصي صديقاً بفيلم أو كتاب وتناقشه."],
    mediationTask: "لخّص المراجعة مع نقل التقييم النهائي دون رأيك.",
    interactionTask: "توصي صديقاً بفيلم أو كتاب وتناقشه.",
    hours: 9,
  },
  {
    id: "b1-07",
    level: "B1",
    order: 7,
    titleDe: "Politik und Gesellschaft",
    titleAr: "السياسة والمجتمع",
    canDo: [
      { de: "Ich kann über Politik und Gesellschaft sprechen.", ar: "أن أتحدث عن السياسة والقضايا المجتمعية." },
      { de: "Ich kenne die temporalen Nebensätze: als, wenn, während, bevor, nachdem, bis.", ar: "أن أتقن الجمل الثانوية الزمنية الست." },
      { de: "Ich kenne die kausalen Nebensätze: weil, da.", ar: "أن أتقن الجمل السببية: لأنّ (weil/da)." },
      { de: "Ich kann den konzessiven Nebensatz mit obwohl benutzen.", ar: "أن أستخدم الجملة التخالفية: رغم أن (obwohl)." },
    ],
    grammar: [
      { de: "Politik und Gesellschaft", ar: "السياسة والمجتمع", lessonId: "b1-07" },
    ],
    vocabDomains: [
      "die Politik",
      "die Regierung",
      "das Gesetz",
      "die Wahl",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: لخّص النص مع نقل موقف الكاتب وحجته الأساسية.","التفاعل: نقاش عن المشاركة السياسية للشباب."],
    mediationTask: "لخّص النص مع نقل موقف الكاتب وحجته الأساسية.",
    interactionTask: "نقاش عن المشاركة السياسية للشباب.",
    hours: 9,
  },
  {
    id: "b1-08",
    level: "B1",
    order: 8,
    titleDe: "Technik und Digitales",
    titleAr: "التقنية والرقمنة",
    canDo: [
      { de: "Ich kann über Technik sprechen.", ar: "أن أتحدث عن التقنية والرقمنة وإيجابياتها وسلبياتها." },
      { de: "Ich kann die zweiteiligen Konnektoren benutzen.", ar: "أن أستخدم الروابط المزدوجة: ليس فقط... بل أيضاً، إما... أو..." },
      { de: "Ich kann das Futur I bilden: werden + Infinitiv.", ar: "أن أصوغ المستقبل: سوف + الفعل." },
      { de: "Ich kann über die Vor- und Nachteile der Digitalisierung diskutieren.", ar: "أن أناقش إيجابيات وسلبيات الرقمنة." },
    ],
    grammar: [
      { de: "Technik und Digitales", ar: "التقنية والرقمنة", lessonId: "b1-08" },
    ],
    vocabDomains: [
      "die Technik",
      "die Zukunft",
      "die künstliche Intelligenz",
      "das Futur I",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: لخّص النص: تأثير الذكاء الاصطناعي، ما يُؤتمت، وما يصبح مهماً.","التفاعل: نقاش عن خصوصية البيانات على الإنترنت."],
    mediationTask: "لخّص النص: تأثير الذكاء الاصطناعي، ما يُؤتمت، وما يصبح مهماً.",
    interactionTask: "نقاش عن خصوصية البيانات على الإنترنت.",
    hours: 9,
  },
  {
    id: "b1-09",
    level: "B1",
    order: 9,
    titleDe: "Soziales Engagement",
    titleAr: "العمل التطوعي والاجتماعي",
    canDo: [
      { de: "Ich kann über Ehrenamt sprechen.", ar: "أن أتحدث عن العمل التطوعي والمشاريع الاجتماعية." },
      { de: "Ich kenne die wichtigsten Nomen-Verb-Verbindungen.", ar: "أن أتقن الوصلات الاسمية-الفعلية: يطرح سؤالاً، يعطي خبراً." },
      { de: "Ich kenne die n-Deklination.", ar: "أن أتقن تصريف n (der Student → den Studenten)." },
      { de: "Ich kann über soziales Engagement sprechen.", ar: "أن أتحدث عن العمل التطوعي والاجتماعي." },
    ],
    grammar: [
      { de: "Soziales Engagement", ar: "العمل التطوعي والاجتماعي", lessonId: "b1-09" },
    ],
    vocabDomains: [
      "das Ehrenamt",
      "der Verein",
      "die Spende",
      "das Mitglied",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: انقل الإعلان بالعربية: المهام، اليوم والوقت، ولمن يوجه.","التفاعل: تناقش فكرة العمل التطوعي مع صديق."],
    mediationTask: "انقل الإعلان بالعربية: المهام، اليوم والوقت، ولمن يوجه.",
    interactionTask: "تناقش فكرة العمل التطوعي مع صديق.",
    hours: 9,
  },
  {
    id: "b1-10",
    level: "B1",
    order: 10,
    titleDe: "Zukunft und Pläne",
    titleAr: "المستقبل والخطط",
    canDo: [
      { de: "Ich kann über Zukunftspläne sprechen.", ar: "أن أتحدث عن خططي وأهدافي المستقبلية." },
      { de: "Ich kann alle B1-Grammatik kombinieren.", ar: "أن أجمع كل قواعد B1 في جمل مركبة." },
      { de: "Ich bin bereit für B2!", ar: "أن أكون جاهزاً للمستوى المتقدم B2!" },
      { de: "Ich kann über meine Zukunftspläne sprechen und begründen.", ar: "أن أتحدث عن خططي المستقبلية وأبررها." },
    ],
    grammar: [
      { de: "Zukunft und Pläne", ar: "المستقبل والخطط", lessonId: "b1-10" },
    ],
    vocabDomains: [
      "der Plan",
      "das Ziel",
      "sich bewerben",
      "der Integrationskurs",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: لخّص النص: ما الذي يراه الخبراء كمستقبل، وما الذي يزداد شعبية.","التفاعل: نقاش عن خططك المستقبلية المهنية."],
    mediationTask: "لخّص النص: ما الذي يراه الخبراء كمستقبل، وما الذي يزداد شعبية.",
    interactionTask: "نقاش عن خططك المستقبلية المهنية.",
    hours: 9,
  },
  {
    id: "b1-11",
    level: "B1",
    order: 11,
    titleDe: "B1 kompakt — Prüfungsvorbereitung",
    titleAr: "B1 الشامل — التحضير للامتحان",
    canDo: [
      { de: "Ich kann alle B1-Strukturen sicher anwenden.", ar: "أن أطبق كل تراكيب B1 بثقة في مواقف متنوعة." },
      { de: "Ich kann einen Prüfungsteil „Lesen“ bearbeiten.", ar: "أن أُنجز جزء القراءة من امتحان B1." },
      { de: "Ich kann einen Prüfungsteil „Schreiben“ verfassen.", ar: "أن أكتب جزء الكتابة (رسالة/منتدى) وفق المطلوب." },
      { de: "Ich kann über vertraute Themen diskutieren und meine Meinung begründen.", ar: "أن أناقش مواضيع مألوفة وأبرر رأيي." },
    ],
    grammar: [
      { de: "B1 kompakt — Prüfungsvorbereitung", ar: "B1 الشامل — التحضير للامتحان", lessonId: "b1-11" },
    ],
    vocabDomains: [
      "B1 الشامل — التحضير للامتحان",
      "مفردات النقاش والتقارير",
    ],
    functions: ["إبداء الرأي المبرر وسرد الأحداث","الوساطة: انقل الرسالة بالعربية إلى شخص لا يفهم الألمانية: الموعد الجديد، المستندات المطلوبة، مع الحفاظ على النبرة الرسمية.","التفاعل: نقاش مع زميل عن العمل عن بُعد (Homeoffice) — جزء التحدث من B1."],
    mediationTask: "انقل الرسالة بالعربية إلى شخص لا يفهم الألمانية: الموعد الجديد، المستندات المطلوبة، مع الحفاظ على النبرة الرسمية.",
    interactionTask: "نقاش مع زميل عن العمل عن بُعد (Homeoffice) — جزء التحدث من B1.",
    hours: 9,
  },
];

/* ═══════════ B2 ═══════════ */
const B2_UNITS: CurriculumUnit[] = [
  {
    id: "b2-01",
    level: "B2",
    order: 1,
    titleDe: "Wissenschaft und Forschung",
    titleAr: "العلوم والبحث",
    canDo: [
      { de: "Ich kann wissenschaftliche Themen verstehen.", ar: "أن أفهم الموضوعات العلمية وأقدم عروضاً عنها." },
      { de: "Ich kann die indirekte Rede mit Konjunktiv I bilden.", ar: "أن أبني نقل الكلام غير المباشر بـ Konjunktiv I." },
      { de: "Ich kann Berichte und Zusammenfassungen schreiben.", ar: "أن أكتب تقارير وملخصات تنقل أقوال الآخرين بدقة." },
      { de: "Ich kann Modalverben subjektiv benutzen: Das dürfte stimmen.", ar: "أن أستخدم الأفعال الناقصة ذاتياً للتخمين: هذا على الأرجح صحيح." },
    ],
    grammar: [
      { de: "Wissenschaft und Forschung", ar: "العلوم والبحث", lessonId: "b2-01" },
    ],
    vocabDomains: [
      "die Wissenschaft",
      "die Forschung",
      "das Experiment",
      "die Entdeckung",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: لخّص بالعربية الفكرتين معاً في فقرة متماسكة: تأثير الرقمنة على سوق العمل (اختفاء مهن تقليدية وظهور مهن جديدة).","التفاعل: نقاش أكاديمي عن تأثير الرقمنة على مستقبل العمل."],
    mediationTask: "لخّص بالعربية الفكرتين معاً في فقرة متماسكة: تأثير الرقمنة على سوق العمل (اختفاء مهن تقليدية وظهور مهن جديدة).",
    interactionTask: "نقاش أكاديمي عن تأثير الرقمنة على مستقبل العمل.",
    hours: 11,
  },
  {
    id: "b2-02",
    level: "B2",
    order: 2,
    titleDe: "Wirtschaft und Finanzen",
    titleAr: "الاقتصاد والمالية",
    canDo: [
      { de: "Ich kann Wirtschaftsnachrichten verstehen.", ar: "أن أفهم الأخبار الاقتصادية وأحلل تطورات الأسواق." },
      { de: "Ich kann das Zustandspassiv bilden: ist geliefert.", ar: "أن أبني مجهول الحالة: مُسلَّم (sein + Partizip II)." },
      { de: "Ich kann Passiv mit Modalverben und Ersatzformen benutzen.", ar: "أن أستخدم المجهول مع الأفعال الشرطية وبدائله (sich lassen, -bar)." },
      { de: "Ich kann über wirtschaftliche Zusammenhänge diskutieren.", ar: "أن أناقش العلاقات الاقتصادية المعقدة." },
    ],
    grammar: [
      { de: "Wirtschaft und Finanzen", ar: "الاقتصاد والمالية", lessonId: "b2-02" },
    ],
    vocabDomains: [
      "die Wirtschaft",
      "der Markt",
      "der Umsatz",
      "die Inflation",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: لخّص النص: الانخفاض، تفسير البنك المركزي، والتحذير.","التفاعل: نقاش أكاديمي عن العولمة وتأثيرها الاقتصادي."],
    mediationTask: "لخّص النص: الانخفاض، تفسير البنك المركزي، والتحذير.",
    interactionTask: "نقاش أكاديمي عن العولمة وتأثيرها الاقتصادي.",
    hours: 11,
  },
  {
    id: "b2-03",
    level: "B2",
    order: 3,
    titleDe: "Recht und Alltag",
    titleAr: "القانون والحياة اليومية",
    canDo: [
      { de: "Ich kann rechtliche Grundbegriffe verstehen.", ar: "أن أفهم المفاهيم القانونية الأساسية والعقود." },
      { de: "Ich kann Relativsätze mit Präpositionen bilden.", ar: "أن أبني الجمل النسبية مع حروف الجر: auf den, mit der, wofür." },
      { de: "Ich kann was und wo als Relativpronomen benutzen.", ar: "أن أستخدم was وwo كضمائر وصل." },
      { de: "Ich kann einfache rechtliche Texte erklären.", ar: "أن أشرح نصوصاً قانونية بسيطة بلغة مفهومة." },
    ],
    grammar: [
      { de: "Recht und Alltag", ar: "القانون والحياة اليومية", lessonId: "b2-03" },
    ],
    vocabDomains: [
      "das Recht",
      "das Gesetz",
      "das Gericht",
      "der Anwalt",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: بسّط النص القانوني بالعربية: ما الممنوع، أين، وما العقوبة — بلغة مفهومة.","التفاعل: تناقش قضية قانونية يومية مع جار أو زميل."],
    mediationTask: "بسّط النص القانوني بالعربية: ما الممنوع، أين، وما العقوبة — بلغة مفهومة.",
    interactionTask: "تناقش قضية قانونية يومية مع جار أو زميل.",
    hours: 11,
  },
  {
    id: "b2-04",
    level: "B2",
    order: 4,
    titleDe: "Literatur und Medien",
    titleAr: "الأدب والإعلام المتقدم",
    canDo: [
      { de: "Ich kann literarische Texte verstehen.", ar: "أن أفهم النصوص الأدبية والمساهمات الإعلامية الراقية." },
      { de: "Ich kann Partizip I und II als Adjektive benutzen.", ar: "أن أستخدم Partizip I/II كصفات: الطفل اللاعب، الرسالة المكتوبة." },
      { de: "Ich kann Relativsätze durch Partizipien verkürzen.", ar: "أن أختصر الجمل النسبية بالمشاركات." },
      { de: "Ich kann literarische Werke kritisch analysieren.", ar: "أن أحلل الأعمال الأدبية نقدياً." },
    ],
    grammar: [
      { de: "Literatur und Medien", ar: "الأدب والإعلام المتقدم", lessonId: "b2-04" },
    ],
    vocabDomains: [
      "die Literatur",
      "der Roman",
      "das Gedicht",
      "der Autor",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: لخّص المراجعة مع نقل نبرة الإعجاب: لماذا يُعد العمل تحفة، وما الذي يميزه.","التفاعل: نقاش نقدي عن فيلم أو كتاب مع صديق."],
    mediationTask: "لخّص المراجعة مع نقل نبرة الإعجاب: لماذا يُعد العمل تحفة، وما الذي يميزه.",
    interactionTask: "نقاش نقدي عن فيلم أو كتاب مع صديق.",
    hours: 11,
  },
  {
    id: "b2-05",
    level: "B2",
    order: 5,
    titleDe: "Psychologie und Kommunikation",
    titleAr: "علم النفس والتواصل",
    canDo: [
      { de: "Ich kann über Kommunikation sprechen.", ar: "أن أتحدث عن نماذج التواصل والجوانب النفسية." },
      { de: "Ich kann die fortgeschrittenen Konnektoren benutzen.", ar: "أن أستخدم الروابط المتقدمة: indem, anstatt...zu, ohne...zu, es sei denn." },
      { de: "Ich kann Nuancen ausdrücken.", ar: "أن أعبر عن الدقائق والتحفظات." },
      { de: "Ich kann Modalpartikeln natürlich benutzen.", ar: "أن أستخدم الجسيمات المشدِّدة (doch, ja, mal, denn, eigentlich) لنطق ألماني طبيعي." },
    ],
    grammar: [
      { de: "Psychologie und Kommunikation", ar: "علم النفس والتواصل", lessonId: "b2-05" },
    ],
    vocabDomains: [
      "die Psychologie",
      "die Kommunikation",
      "das Missverständnis",
      "zuhören",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: لخّص بالعربية الفكرتين معاً: انخفاض البطالة + نقص خبراء التقنية — مع ربطهما بعلاقة سببية منطقية.","التفاعل: نقاش أكاديمي عن مستقبل العمل مع الرقمنة والذكاء الاصطناعي."],
    mediationTask: "لخّص بالعربية الفكرتين معاً: انخفاض البطالة + نقص خبراء التقنية — مع ربطهما بعلاقة سببية منطقية.",
    interactionTask: "نقاش أكاديمي عن مستقبل العمل مع الرقمنة والذكاء الاصطناعي.",
    hours: 11,
  },
  {
    id: "b2-06",
    level: "B2",
    order: 6,
    titleDe: "Beruf und Karriere",
    titleAr: "المسار المهني",
    canDo: [
      { de: "Ich kann über Karrierewege sprechen.", ar: "أن أتحدث عن المسارات المهنية والتفاوض." },
      { de: "Ich kann Verben nominalisieren: lesen → das Lesen.", ar: "أن أحول الأفعال إلى أسماء (القراءة، الكتابة)." },
      { de: "Ich kann formelle Sätze bilden: Beim Lesen lernt man.", ar: "أن أبني جملاً رسمية: بالقراءة يتعلم المرء." },
      { de: "Ich kann über Homeoffice und flexible Arbeitszeiten sprechen.", ar: "أن أتحدث عن العمل عن بعد وأوقات العمل المرنة." },
    ],
    grammar: [
      { de: "Beruf und Karriere", ar: "المسار المهني", lessonId: "b2-06" },
    ],
    vocabDomains: [
      "die Karriere",
      "die Führungskraft",
      "die Probezeit",
      "die Nominalisierung",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: لخّص النص: أهمية التوازن، وما الذي تظهره الدراسات عن ساعات العمل الإضافية.","التفاعل: نقاش عن ساعات العمل المرنة في شركتك."],
    mediationTask: "لخّص النص: أهمية التوازن، وما الذي تظهره الدراسات عن ساعات العمل الإضافية.",
    interactionTask: "نقاش عن ساعات العمل المرنة في شركتك.",
    hours: 11,
  },
  {
    id: "b2-07",
    level: "B2",
    order: 7,
    titleDe: "Philosophie und Gesellschaft",
    titleAr: "الفلسفة والمجتمع",
    canDo: [
      { de: "Ich kann abstrakte Themen diskutieren.", ar: "أن أناقش الموضوعات المجردة وأبني الحجج." },
      { de: "Ich kann das Futur II bilden: werde + Partizip II + haben/sein.", ar: "أن أبني المستقبل التام: سيكون قد فعل." },
      { de: "Ich kann eine Erörterung schreiben.", ar: "أن أكتب مقالاً جدلياً بأسلوب أكاديمي." },
      { de: "Ich kann über abstrakte gesellschaftliche Fragen diskutieren.", ar: "أن أناقش أسئلة مجتمعية مجردة." },
    ],
    grammar: [
      { de: "Philosophie und Gesellschaft", ar: "الفلسفة والمجتمع", lessonId: "b2-07" },
    ],
    vocabDomains: [
      "die Philosophie",
      "die These",
      "das Argument",
      "die Erörterung",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: لخّص النص: السؤال الفلسفي، وما يرى الفلاسفة أنه مصدر المعنى.","التفاعل: نقاش فلسفي عن مفهوم السعادة مع صديق."],
    mediationTask: "لخّص النص: السؤال الفلسفي، وما يرى الفلاسفة أنه مصدر المعنى.",
    interactionTask: "نقاش فلسفي عن مفهوم السعادة مع صديق.",
    hours: 11,
  },
  {
    id: "b2-08",
    level: "B2",
    order: 8,
    titleDe: "Sprachen und Kulturen",
    titleAr: "اللغات والتبادل الثقافي",
    canDo: [
      { de: "Ich kann über Sprachen und Kulturen sprechen.", ar: "أن أتحدث عن تعدد اللغات والتبادل الثقافي." },
      { de: "Ich kenne die Verben mit festen Präpositionen.", ar: "أن أتقن الأفعال مع حروف الجر الثابتة وحالاتها." },
      { de: "Ich kann interkulturelle Unterschiede beschreiben.", ar: "أن أصف الاختلافات بين الثقافات." },
      { de: "Ich kann kulturelle Unterschiede analysieren und erklären.", ar: "أن أحلل الاختلافات الثقافية وأشرحها." },
    ],
    grammar: [
      { de: "Sprachen und Kulturen", ar: "اللغات والتبادل الثقافي", lessonId: "b2-08" },
    ],
    vocabDomains: [
      "die Sprache",
      "die Kultur",
      "der Austausch",
      "interkulturell",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: اشرح بالعربية القاعدة الثقافية: الالتزام بالمواعيد، وكيف يُنظر إلى التأخير — مع مقارنة موجزة بعادات بلدك.","التفاعل: موقف عمل بين الثقافات — سوء فهم ثقافي."],
    mediationTask: "اشرح بالعربية القاعدة الثقافية: الالتزام بالمواعيد، وكيف يُنظر إلى التأخير — مع مقارنة موجزة بعادات بلدك.",
    interactionTask: "موقف عمل بين الثقافات — سوء فهم ثقافي.",
    hours: 11,
  },
  {
    id: "b2-09",
    level: "B2",
    order: 9,
    titleDe: "Arbeitsmarkt und Bewerbung",
    titleAr: "سوق العمل والتقديم الوظيفي",
    canDo: [
      { de: "Ich kann Bewerbungsunterlagen schreiben.", ar: "أن أكتب ملفات التقديم: خطاب + سيرة ذاتية." },
      { de: "Ich kann fortgeschrittene Nomen-Verb-Verbindungen benutzen.", ar: "أن أستخدم الوصلات الاسمية-الفعلية المتقدمة." },
      { de: "Ich kann formelle Briefe schreiben.", ar: "أن أكتب مراسلات رسمية كاملة بأسلوب أكاديمي." },
      { de: "Ich kann einen Arbeitsmarkttrend analysieren und bewerten.", ar: "أن أحلل اتجاهات سوق العمل وأقيّمها." },
    ],
    grammar: [
      { de: "Arbeitsmarkt und Bewerbung", ar: "سوق العمل والتقديم الوظيفي", lessonId: "b2-09" },
    ],
    vocabDomains: [
      "der Arbeitsmarkt",
      "die Stelle",
      "das Anschreiben",
      "der Lebenslauf",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: لخّص البيانات: نسبة البطالة، القطاعات المطلوبة، وتأثير الرقمنة.","التفاعل: نقاش عن التقدم لوظيفة — مهارات المستقبل."],
    mediationTask: "لخّص البيانات: نسبة البطالة، القطاعات المطلوبة، وتأثير الرقمنة.",
    interactionTask: "نقاش عن التقدم لوظيفة — مهارات المستقبل.",
    hours: 11,
  },
  {
    id: "b2-10",
    level: "B2",
    order: 10,
    titleDe: "Studium in Deutschland",
    titleAr: "الدراسة في ألمانيا",
    canDo: [
      { de: "Ich kann akademische Texte schreiben.", ar: "أن أكتب نصوصاً أكاديمية بلغة التخصص." },
      { de: "Ich kann Meinungen abschwächen und betonen.", ar: "أن ألطّف وأؤكد وأتحفظ في الكتابة الأكاديمية." },
      { de: "Ich kann alle B2-Grammatik kombinieren.", ar: "أن أجمع كل قواعد B2 — وأكون جاهزاً للامتحانات." },
      { de: "Ich kann über Studienmöglichkeiten in Deutschland informieren.", ar: "أن أقدم معلومات عن فرص الدراسة في ألمانيا." },
    ],
    grammar: [
      { de: "Studium in Deutschland", ar: "الدراسة في ألمانيا", lessonId: "b2-10" },
    ],
    vocabDomains: [
      "das Studium",
      "die Hausarbeit",
      "das Seminar",
      "die Fachsprache",
    ],
    functions: ["الحجاج المنظم والنقاش المعقد","الوساطة: ادمج المعلومتين في تلخيص متماسك: مجانية الدراسة + الشروط (اللغة والتمويل).","التفاعل: محاكاة مناقشة Goethe-B2 عن الدراسة بالخارج."],
    mediationTask: "ادمج المعلومتين في تلخيص متماسك: مجانية الدراسة + الشروط (اللغة والتمويل).",
    interactionTask: "محاكاة مناقشة Goethe-B2 عن الدراسة بالخارج.",
    hours: 11,
  },
];

/* ═══════════════════════════════════════════════════════════
   المستويات الأربعة — المدد الإرشادية وفق Goethe
   ═══════════════════════════════════════════════════════════ */
export const CURRICULUM: CurriculumLevel[] = [
  {
    code: "A1",
    titleAr: "المبتدئ",
    subtitleDe: "Grundstufe 1",
    description: "التعامل مع مواقف الحياة اليومية الأساسية: التعارف، الطعام، السكن، التسوق، الوقت.",
    estimatedHours: "80–200 ساعة (إرشادي)",
    units: A1_UNITS,
  },
  {
    code: "A2",
    titleAr: "ما قبل المتوسط",
    subtitleDe: "Grundstufe 2",
    description: "مواقف روتينية أوسع: السفر، الصحة، العمل، الخدمات، سرد التجارب.",
    estimatedHours: "200–350 ساعة (إرشادي)",
    units: A2_UNITS,
  },
  {
    code: "B1",
    titleAr: "المتوسط",
    subtitleDe: "Mittelstufe 1",
    description: "التواصل في مواقف العمل والدراسة والسفر، إبداء الرأي المبرر، سرد الأحداث.",
    estimatedHours: "350–650 ساعة (إرشادي)",
    units: B1_UNITS,
  },
  {
    code: "B2",
    titleAr: "المتقدم",
    subtitleDe: "Mittelstufe 2",
    description: "النقاش المعقد، النصوص الأكاديمية، الحجاج المنظم، التواصل بين الثقافات.",
    estimatedHours: "600–800 ساعة (إرشادي)",
    units: B2_UNITS,
  },
];

/** كل الوحدات مفصولة */
export function getAllCurriculumUnits(): CurriculumUnit[] {
  return CURRICULUM.flatMap((l) => l.units);
}

/** إجمالي الساعات الإرشادية المخططة */
export function totalPlannedHours(): number {
  return getAllCurriculumUnits().reduce((s, u) => s + u.hours, 0);
}
