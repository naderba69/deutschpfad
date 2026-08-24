import type { LevelMeta, Unit } from "@/types/curriculum";
import { LESSON_META } from "@/data/lessons/meta";

/**
 * ═══════════════════════════════════════════════════════════
 *  المنهج الأكاديمي الكامل — مصدر البيانات الوحيد للمسار التعليمي
 *  (فصل تام بين المحتوى والمكونات كما هو مطلوب)
 * ═══════════════════════════════════════════════════════════
 *  4 مستويات (A1→B2) × وحدات دراسية (وحدات عرض) تغطي كل الدروس الفعلية.
 *  الأعداد لا تُكتب هنا يدوياً: TOTAL_UNITS وTOTAL_LESSONS مشتقّان آلياً.
 */

export const LEVELS: LevelMeta[] = [
  {
    code: "A1",
    titleDe: "Anfänger",
    subtitleDe: "Grundstufe 1",
    titleAr: "المبتدئ",
    description:
      "نقطة الانطلاق: الأبجدية والنطق، التعارف، الضمائر والأفعال في المضارع، أدوات التعريف والتنكير، الأرقام والوقت، الأفعال الناقصة الستّة، والماضي المحكيّ (Perfekt) الذي يُغلق به المستوى — مع بناء أول جمل صحيحة بالترتيب الألماني (الفعل في المركز الثاني).",
    topics: ["Präsens", "Nominativ / Akkusativ", "W-Fragen", "Zahlen & Uhrzeit", "Imperativ", "Modalverben", "Perfekt", "kein / nicht"],
    units: 13,
    words: 800,
    unlockThreshold: 80,
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
    accent: "#0ea5e9",
    emoji: "🌱",
  },
  {
    code: "A2",
    titleDe: "Grundstufe 2",
    subtitleDe: "Grundstufe 2",
    titleAr: "ما قبل المتوسط",
    description:
      "التوسع في الزمن الماضي (Perfekt/Präteritum)، حالة الجر (Dativ)، الأفعال الشرطية الست، حروف الجر المتغيرة، الجمل الثانوية الأولى (weil/dass/wenn)، والمقارنة والتفضيل.",
    topics: ["Perfekt", "Präteritum", "Dativ", "Modalverben", "Wechselpräpositionen", "weil / dass / wenn"],
    units: 13,
    words: 800,
    unlockThreshold: 80,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "#10b981",
    emoji: "🌿",
  },
  {
    code: "B1",
    titleDe: "Mittelstufe 1",
    subtitleDe: "Mittelstufe 1",
    titleAr: "المتوسط",
    description:
      "المرحلة الفاصلة نحو الاستقلالية: الماضي التام، المضاف إليه (Genitiv)، الجمل الثانوية الكاملة، صيغة الشرط (Konjunktiv II)، المبني للمجهول، تصريف الصفات بالكامل، والمستقبل.",
    topics: ["Genitiv", "Nebensätze", "Konjunktiv II", "Passiv", "Adjektivdeklination", "Relativsätze", "Futur I"],
    units: 11,
    words: 1000,
    unlockThreshold: 80,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    accent: "#f59e0b",
    emoji: "🌳",
  },
  {
    code: "B2",
    titleDe: "Mittelstufe 2",
    subtitleDe: "Mittelstufe 2",
    titleAr: "المتقدم",
    description:
      "القمة: نقل الكلام غير المباشر (Konjunktiv I)، البناء للمجهول المتقدم، الاشتقاق الاسمي، الصفات المشتقة من الفعل، الروابط المتقدمة، والكتابة الأكاديمية والرسمية.",
    topics: ["Konjunktiv I", "Passiv fortgeschritten", "Nominalisierung", "Partizipialkonstruktionen", "Futur II", "Konnektoren"],
    units: 10,
    words: 1000,
    unlockThreshold: 80,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    accent: "#f43f5e",
    emoji: "🌲",
  },
];

export const UNITS: Unit[] = [
  // ═══ A1 — 13 وحدة ═══
  {
    id: "a1-01",
    level: "A1",
    number: 1,
    titleDe: "Hallo! Ich heiße …",
    titleAr: "التعارف والتحيات",
    descDe: "Begrüßungen, das Alphabet und sich vorstellen.",
    descAr: "التحيات، الحروف الأبجدية والنطق، والتعريف بالنفس والآخرين.",
  },
  {
    id: "a1-02",
    level: "A1",
    number: 2,
    titleDe: "Meine Familie",
    titleAr: "العائلة والأصدقاء",
    descDe: "Familienmitglieder vorstellen und Possessivartikel.",
    descAr: "أفراد العائلة، أدوات الملكية (mein/dein)، ووصف العلاقات.",
  },
  {
    id: "a1-03",
    level: "A1",
    number: 3,
    titleDe: "Essen und Trinken",
    titleAr: "الطعام والشراب",
    descDe: "Lebensmittel, der Akkusativ und einkaufen gehen.",
    descAr: "المأكولات والمشروبات، حالة النصب (Akkusativ) مع der/ein، والتسوق.",
  },
  {
    id: "a1-04",
    level: "A1",
    number: 4,
    titleDe: "Meine Wohnung",
    titleAr: "السكن والمنزل",
    descDe: "Die Wohnung beschreiben und über Möbel sprechen.",
    descAr: "وصف الشقة والمنزل، الأثاث، وحروف الجر مع المكان (in/auf).",
  },
  {
    id: "a1-05",
    level: "A1",
    number: 5,
    titleDe: "Mein Tag",
    titleAr: "الحياة اليومية والروتين",
    descDe: "Tagesablauf, Uhrzeiten und trennbare Verben.",
    descAr: "الروتين اليومي، الساعة وأوقات اليوم، والأفعال المنفصلة.",
  },
  {
    id: "a1-06",
    level: "A1",
    number: 6,
    titleDe: "Freizeit und Hobbys",
    titleAr: "أوقات الفراغ والهوايات",
    descDe: "Über Hobbys sprechen und Verabredungen treffen.",
    descAr: "الحديث عن الهوايات، صيغة الأمر (Imperativ)، وتنظيم المواعيد.",
  },
  {
    id: "a1-07",
    level: "A1",
    number: 7,
    titleDe: "Einkaufen & Zahlen",
    titleAr: "التسوق والأرقام",
    descDe: "Einkaufen, Preise, Mengenangaben — und das Perfekt zum Abschluss von A1.",
    descAr: "التسوق والأسعار والكميات وأرقام الهاتف والعناوين، ثم درس الماضي المحكيّ (a1-14): haben/sein + Partizip II، وwollen وsollen.",
  },
  {
    id: "a1-08",
    level: "A1",
    number: 8,
    titleDe: "Kleidung und Farben",
    titleAr: "الملابس والألوان",
    descDe: "Kleidung, Farben und Adjektive als Prädikat.",
    descAr: "الملابس والألوان، الصفات الخبرية، والسؤال عن الرأي (Wie findest du?).",
  },
  {
    id: "a1-09",
    level: "A1",
    number: 9,
    titleDe: "Termine und Uhrzeit",
    titleAr: "المواعيد والوقت",
    descDe: "Termine, Wochentage, Monate und Jahreszeiten.",
    descAr: "المواعيد، أيام الأسبوع، الأشهر والفصول، والأعداد الترتيبية.",
  },
  {
    id: "a1-10",
    level: "A1",
    number: 10,
    titleDe: "Arbeit und Berufe",
    titleAr: "العمل والمهن",
    descDe: "Berufe nennen und über die Arbeit sprechen.",
    descAr: "المهن والوظائف، النفي بـ (nicht/kein)، والحديث عن العمل.",
  },
  {
    id: "a1-11",
    level: "A1",
    number: 11,
    titleDe: "In der Stadt",
    titleAr: "التنقل في المدينة",
    descDe: "Nach dem Weg fragen und Wegbeschreibungen verstehen.",
    descAr: "السؤال عن الطريق، الاتجاهات، ووسائل النقل الأساسية.",
  },
  {
    id: "a1-12",
    level: "A1",
    number: 12,
    titleDe: "Wetter und Jahreszeiten",
    titleAr: "الطقس والفصول",
    descDe: "Über das Wetter sprechen und es ist + Adjektiv.",
    descAr: "الحديث عن الطقس، (es ist + صفة)، والملابس المناسبة لكل فصل.",
  },
  {
    id: "a1-13",
    level: "A1",
    number: 13,
    titleDe: "A1 kompakt — die große Wiederholung",
    titleAr: "A1 المراجعة الشاملة",
    descDe: "Alle A1-Grammatik kombinieren und bereit für A2 sein.",
    descAr: "جمع كل قواعد A1 في جمل صحيحة، مراجعة شاملة، والاستعداد لامتحان الختم وA2.",
  },

  // ═══ A2 — 13 وحدة (12 موضوعية + a2-13 الخاتمة الجامعة) ═══
  {
    id: "a2-01",
    level: "A2",
    number: 1,
    titleDe: "Reisen und Urlaub",
    titleAr: "السفر والعطلات",
    descDe: "Urlaubserlebnisse im Perfekt erzählen.",
    descAr: "حكاية تجارب السفر بصيغة الماضي التام (Perfekt) مع haben/sein.",
  },
  {
    id: "a2-02",
    level: "A2",
    number: 2,
    titleDe: "Beim Arzt",
    titleAr: "الصحة والطبيب",
    descDe: "Körperteile, Krankheiten und Ratschläge.",
    descAr: "أجزاء الجسم، الأمراض، وطلب النصيحة مع (sollen/sollte).",
  },
  {
    id: "a2-03",
    level: "A2",
    number: 3,
    titleDe: "Im Restaurant",
    titleAr: "المطعم والطعام",
    descDe: "Bestellen, bezahlen und über Geschmack sprechen.",
    descAr: "طلب الطعام، الدفع، والتعبير عن الرأي في الأكل (schmecken).",
  },
  {
    id: "a2-04",
    level: "A2",
    number: 4,
    titleDe: "Wohnungssuche",
    titleAr: "البحث عن سكن",
    descDe: "Anzeigen verstehen und eine Wohnung beschreiben.",
    descAr: "فهم إعلانات العقارات، وصف شقة، وحروف الجر المتغيرة (Wechselpräpositionen).",
  },
  {
    id: "a2-05",
    level: "A2",
    number: 5,
    titleDe: "Im Büro",
    titleAr: "في المكتب والعمل",
    descDe: "Telefonieren, E-Mails schreiben und Termine koordinieren.",
    descAr: "الاتصالات الهاتفية، كتابة البريد الإلكتروني البسيط، وتنسيق المواعيد.",
  },
  {
    id: "a2-06",
    level: "A2",
    number: 6,
    titleDe: "Medien und Nachrichten",
    titleAr: "الإعلام والأخبار",
    descDe: "Über Medien sprechen und Nachrichten verstehen.",
    descAr: "التحدث عن وسائل الإعلام، فهم الأخبار، والرأي الشخصي (ich finde/ich glaube).",
  },
  {
    id: "a2-07",
    level: "A2",
    number: 7,
    titleDe: "Bank und Geld",
    titleAr: "البنك والمال",
    descDe: "Bankgespräche, Geld und Zahlungsarten.",
    descAr: "معاملات البنك، المال، وطرق الدفع (überweisen/bar zahlen).",
  },
  {
    id: "a2-08",
    level: "A2",
    number: 8,
    titleDe: "Mobil sein",
    titleAr: "المواصلات والتنقل",
    descDe: "Fahrkarten kaufen, Verbindungen und Verkehrsmittel.",
    descAr: "شراء التذاكر، جداول المواصلات، ووسائل النقل (Bahn/Bus/Straßenbahn).",
  },
  {
    id: "a2-09",
    level: "A2",
    number: 9,
    titleDe: "Feste und Feiern",
    titleAr: "المناسبات والاحتفالات",
    descDe: "Einladungen, Geschenke und Feste in Deutschland.",
    descAr: "الدعوات، الهدايا، والمناسبات الألمانية (Geburtstag/Weihnachten...).",
  },
  {
    id: "a2-10",
    level: "A2",
    number: 10,
    titleDe: "Lernen und Schule",
    titleAr: "المدرسة والتعلم",
    descDe: "Über Lernen, Kurse und Prüfungen sprechen.",
    descAr: "الحديث عن الدراسة والدورات والامتحانات، والجمل الثانوية (dass/weil).",
  },
  {
    id: "a2-11",
    level: "A2",
    number: 11,
    titleDe: "Dienstleistungen",
    titleAr: "الخدمات والمعاملات",
    descDe: "Post, Friseur, Reparaturen und Beschwerden.",
    descAr: "البريد، الحلاق، الإصلاحات، وتقديم شكوى بأدب.",
  },
  {
    id: "a2-12",
    level: "A2",
    number: 12,
    titleDe: "Zwischenmenschliches",
    titleAr: "العلاقات بين الناس",
    descDe: "Gefühle, Meinungen und Konflikte ansprechen.",
    descAr: "المشاعر والآراء، الأفعال الانعكاسية، والتعامل مع الخلافات.",
  },

  {
    id: "a2-13",
    level: "A2",
    number: 13,
    titleDe: "A2 kompakt — die Brücke nach B1",
    titleAr: "A2 الشاملة — الجسر إلى B1",
    descDe: "Alle A2-Strukturen kombinieren und den Schritt nach B1 vorbereiten.",
    descAr: "دمج كل تراكيب A2 في مواقف حية، وخريطة الانتقال إلى B1.",
  },

  // ═══ B1 — 11 وحدة ═══
  {
    id: "b1-01",
    level: "B1",
    number: 1,
    titleDe: "Ausbildung und Studium",
    titleAr: "التعليم والدراسة",
    descDe: "Bildungssysteme vergleichen und Studiengänge beschreiben.",
    descAr: "مقارنة الأنظمة التعليمية، وصف التخصصات، وصيغ التفضيل والشرط (als ob/wenn).",
  },
  {
    id: "b1-02",
    level: "B1",
    number: 2,
    titleDe: "Arbeitswelt",
    titleAr: "عالم العمل",
    descDe: "Bewerbungen, Arbeitsbedingungen und Berufserfahrung.",
    descAr: "طلبات التوظيف، ظروف العمل، والخبرات المهنية بصيغة Präteritum.",
  },
  {
    id: "b1-03",
    level: "B1",
    number: 3,
    titleDe: "Umwelt und Klima",
    titleAr: "البيئة والمناخ",
    descDe: "Umweltprobleme diskutieren und Lösungen vorschlagen.",
    descAr: "مناقشة مشاكل البيئة، اقتراح الحلول، والمبني للمجهول (Passiv).",
  },
  {
    id: "b1-04",
    level: "B1",
    number: 4,
    titleDe: "Medien und Gesellschaft",
    titleAr: "الإعلام والمجتمع",
    descDe: "Medien kritisch betrachten und Meinungen begründen.",
    descAr: "النظر النقدي للإعلام، تبرير الآراء، والجمل السببية (weil/da).",
  },
  {
    id: "b1-05",
    level: "B1",
    number: 5,
    titleDe: "Gesundheit und Prävention",
    titleAr: "الصحة والوقاية",
    descDe: "Gesund leben, Sport und Vorsorge.",
    descAr: "الحياة الصحية، الرياضة، والوقاية مع الروابط الشرطية (wenn/falls).",
  },
  {
    id: "b1-06",
    level: "B1",
    number: 6,
    titleDe: "Kultur und Kunst",
    titleAr: "الثقافة والفن",
    descDe: "Kunstwerke beschreiben und über Kultur sprechen.",
    descAr: "وصف الأعمال الفنية، الحديث عن الثقافة، والجمل النسبية (Relativsätze).",
  },
  {
    id: "b1-07",
    level: "B1",
    number: 7,
    titleDe: "Politik und Gesellschaft",
    titleAr: "السياسة والمجتمع",
    descDe: "Politische Grundbegriffe und gesellschaftliche Themen.",
    descAr: "المفاهيم السياسية الأساسية، القضايا المجتمعية، وحروف الجر مع المضاف إليه (wegen/trotz/während).",
  },
  {
    id: "b1-08",
    level: "B1",
    number: 8,
    titleDe: "Technik und Digitales",
    titleAr: "التقنية والرقمنة",
    descDe: "Technik im Alltag, Vor- und Nachteile abwägen.",
    descAr: "التقنية في الحياة اليومية، موازنة الإيجابيات والسلبيات (einerseits/andererseits).",
  },
  {
    id: "b1-09",
    level: "B1",
    number: 9,
    titleDe: "Soziales Engagement",
    titleAr: "العمل التطوعي والاجتماعي",
    descDe: "Ehrenamt, Projekte und soziales Engagement.",
    descAr: "العمل التطوعي، المشاريع الاجتماعية، وصيغة المستقبل (Futur I).",
  },
  {
    id: "b1-10",
    level: "B1",
    number: 10,
    titleDe: "Zukunft und Pläne",
    titleAr: "المستقبل والخطط",
    descDe: "Über Zukunftspläne sprechen und Vermutungen äußern.",
    descAr: "التحدث عن خطط المستقبل، التعبير عن الافتراضات بصيغة Konjunktiv II.",
  },
  /* ═══ المرحلة 4: وحدة b1-11 (المراجعة الختامية B1) — كانت مفقودة من المسار ═══ */
  {
    id: "b1-11",
    level: "B1",
    number: 11,
    titleDe: "B1 kompakt — Prüfungsvorbereitung",
    titleAr: "B1 الشامل — التحضير للامتحان",
    descDe: "Gesamtwiederholung von B1 und Prüfungsvorbereitung.",
    descAr: "المراجعة الختامية لمستوى B1 ودمج القواعد في مواقف حية، مع محاكاة أقسام Goethe-B1.",
  },

  // ═══ B2 — 10 وحدات ═══
  {
    id: "b2-01",
    level: "B2",
    number: 1,
    titleDe: "Wissenschaft und Forschung",
    titleAr: "العلوم والبحث",
    descDe: "Wissenschaftliche Themen verstehen und referieren.",
    descAr: "فهم الموضوعات العلمية، تقديم عرض، ونقل الكلام غير المباشر (Konjunktiv I).",
  },
  {
    id: "b2-02",
    level: "B2",
    number: 2,
    titleDe: "Wirtschaft und Finanzen",
    titleAr: "الاقتصاد والمالية",
    descDe: "Wirtschaftsnachrichten und Marktentwicklungen analysieren.",
    descAr: "تحليل الأخبار الاقتصادية وتطورات الأسواق بمفردات متخصصة.",
  },
  {
    id: "b2-03",
    level: "B2",
    number: 3,
    titleDe: "Recht und Alltag",
    titleAr: "القانون والحياة اليومية",
    descDe: "Rechtliche Grundbegriffe und Verträge verstehen.",
    descAr: "المفاهيم القانونية الأساسية، فهم العقود، والصيغ الرسمية.",
  },
  {
    id: "b2-04",
    level: "B2",
    number: 4,
    titleDe: "Literatur und Medien",
    titleAr: "الأدب والإعلام المتقدم",
    descDe: "Literarische Texte und anspruchsvolle Medienbeiträge.",
    descAr: "النصوص الأدبية والمساهمات الإعلامية الراقية، والصفات المشتقة من الفعل (Partizipien).",
  },
  {
    id: "b2-05",
    level: "B2",
    number: 5,
    titleDe: "Psychologie und Kommunikation",
    titleAr: "علم النفس والتواصل",
    descDe: "Kommunikationsmodelle und psychologische Aspekte.",
    descAr: "نماذج التواصل والجوانب النفسية، والافتراضات والتحفظات (es sei denn, je nachdem).",
  },
  {
    id: "b2-06",
    level: "B2",
    number: 6,
    titleDe: "Beruf und Karriere",
    titleAr: "المسار المهني",
    descDe: "Karrierewege, Verhandlungen und professionelle Kommunikation.",
    descAr: "المسارات المهنية، التفاوض، والتواصل الاحترافي الرسمي.",
  },
  {
    id: "b2-07",
    level: "B2",
    number: 7,
    titleDe: "Philosophie und Gesellschaft",
    titleAr: "الفلسفة والمجتمع",
    descDe: "Abstrakte Themen diskutieren und argumentieren.",
    descAr: "مناقشة الموضوعات المجردة، بناء الحجج، والكتابة الجدلية (Erörterung).",
  },
  {
    id: "b2-08",
    level: "B2",
    number: 8,
    titleDe: "Sprachen und Kulturen",
    titleAr: "اللغات والتبادل الثقافي",
    descDe: "Interkulturelle Unterschiede und Mehrsprachigkeit.",
    descAr: "الاختلافات بين الثقافات، تعدد اللغات، والاشتقاق الاسمي (Nominalisierung).",
  },
  {
    id: "b2-09",
    level: "B2",
    number: 9,
    titleDe: "Arbeitsmarkt und Bewerbung",
    titleAr: "سوق العمل والتقديم الوظيفي",
    descDe: "Bewerbungsunterlagen und Vorstellungsgespräche führen.",
    descAr: "ملفات التقديم، مقابلات العمل، والمراسلات الرسمية الكاملة.",
  },
  {
    id: "b2-10",
    level: "B2",
    number: 10,
    titleDe: "Studium in Deutschland",
    titleAr: "الدراسة في ألمانيا",
    descDe: "Universitätssystem, Seminare und wissenschaftliches Schreiben.",
    descAr: "النظام الجامعي، الندوات، والكتابة الأكاديمية العلمية (Fachsprache).",
  },
];

/** إرجاع وحدات مستوى معيّن مرتبة */
export function getUnitsByLevel(level: LevelMeta["code"]): Unit[] {
  return UNITS.filter((u) => u.level === level).sort((a, b) => a.number - b.number);
}

/** إجمالي عدد الوحدات في المنهج */
export const TOTAL_UNITS = UNITS.length;

/**
 * ═══ المرحلة 4 (توحيد الحقيقة): عدد الدروس يُشتق آلياً من LESSON_META ═══
 * (كان مجموعاً للقيم المعلنة الثابتة داخل UNITS = 251 — بينما الفعلية 48.
 *  الآن المصدر الوحيد للعدد هو الدروس الفعلية، فلا يمكن أن تختلف الأرقام بعد الآن)
 */
export const TOTAL_LESSONS = LESSON_META.length;

/** عدد الدروس الفعلية في وحدة معيّنة (يُحسب من LESSON_META — لا يُعلن يدوياً) */
export function getUnitLessonCount(unitId: string): number {
  return LESSON_META.filter((l) => l.unitId === unitId).length;
}

/** عدد الدروس الفعلية في مستوى كامل — لنصوص الواجهة، حتى لا تتعفّن عند إضافة درس */
export function getLevelLessonCount(level: LevelMeta["code"]): number {
  return LESSON_META.filter((l) => l.level === level).length;
}

/**
 * الزمن التقديري لوحدة بالدقائق — مجموع `duration` دروسها الفعلية.
 *
 * كان حقلاً يدوياً في UNITS يعلن 45–60 دقيقة للوحدة، بينما الدرس الوحيد
 * داخلها مكتوب عليه 30–45. الرقم المعروض للمتعلّم يجب أن يكون مجموع ما
 * سيقرؤه فعلاً، لا تقديراً منفصلاً عنه.
 */
export function getUnitMinutes(unitId: string): number {
  return LESSON_META.filter((l) => l.unitId === unitId).reduce((sum, l) => sum + l.duration, 0);
}

/**
 * أهم مفردات الوحدة — مجموعة من بطاقات دروسها الفعلية.
 *
 * كان `keyWords` حقلاً يُكتب يدوياً في UNITS فتعفّن: 90 كلمة من 193 لم
 * تكن تقابلها بطاقة في دروس وحدتها. الاشتقاق من البطاقات يجعل الوعد
 * المعروض للمتعلّم مطابقاً لما سيتعلّمه فعلاً.
 */
export function getUnitKeyWords(unitId: string, limit = 5): string[] {
  const out: string[] = [];
  for (const lesson of LESSON_META.filter((l) => l.unitId === unitId)) {
    for (const word of lesson.keyWords) {
      if (!out.includes(word)) out.push(word);
    }
  }
  return out.slice(0, limit);
}

/**
 * إجمالي الساعات الإرشادية — محسوبة من `duration` الدروس الفعلية.
 *
 * كان ثابتاً مكتوباً بـ 355 ساعة، وهو رقم لا مصدر له: مجموع الحقول
 * اليدوية كان 40.7 ساعة، ومجموع الدروس الفعلية 28.5. الفارق بين 355
 * و28.5 ليس خطأً حسابياً بل رقم دعائي لا يقابله محتوى.
 */
export const TOTAL_ESTIMATED_HOURS = Math.round(
  LESSON_META.reduce((sum, l) => sum + l.duration, 0) / 60,
);

/** الحصيلة المفرداتية الإجمالية التقريبية */
export const TOTAL_WORDS = LEVELS.reduce((sum, l) => sum + l.words, 0);
