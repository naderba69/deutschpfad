/**
 * ═══════════════════════════════════════════════════════════
 *  مفردات B2 حسب المواضيع الـ18 الرسمية لامتحان Goethe
 *  (Themenwortschatz) — قائمة مواضيع Goethe-Zertifikat B2 الرسمية
 *  مع ~180 كلمة/تركيباً جديداً إضافياً (موازٍ لمفردات الوحدات)
 *  — أضيفت ضمن اقتراحات المرحلة النهائية —
 * ═══════════════════════════════════════════════════════════
 */

import type { VocabEntry } from "@/data/vocabulary/a1";

export interface B2ExamTopic {
  id: string;
  /** رقم الموضوع في قائمة غوته الرسمية */
  num: number;
  titleAr: string;
  titleDe: string;
  icon: string;
}

/** المواضيع الـ18 الرسمية لامتحان Goethe B2 */
export const B2_EXAM_TOPICS: B2ExamTopic[] = [
  { id: "arbeit", num: 1, titleAr: "العمل والمهنة", titleDe: "Arbeit und Beruf", icon: "💼" },
  { id: "bildung", num: 2, titleAr: "التعليم والدراسة", titleDe: "Ausbildung und Studium", icon: "🎓" },
  { id: "konsum", num: 3, titleAr: "التسوق والاستهلاك", titleDe: "Einkaufen und Konsum", icon: "🛒" },
  { id: "feste", num: 4, titleAr: "المناسبات والاحتفالات", titleDe: "Feste und Feiern", icon: "🎉" },
  { id: "freizeit", num: 5, titleAr: "أوقات الفراغ والهوايات", titleDe: "Freizeit und Hobbys", icon: "🎨" },
  { id: "gesundheit", num: 6, titleAr: "الصحة والرياضة", titleDe: "Gesundheit und Sport", icon: "🏥" },
  { id: "medien", num: 7, titleAr: "الإعلام والاتصال", titleDe: "Medien und Kommunikation", icon: "📰" },
  { id: "mobilitaet", num: 8, titleAr: "التنقل والسفر", titleDe: "Mobilität und Reisen", icon: "✈️" },
  { id: "umwelt", num: 9, titleAr: "الطبيعة والبيئة", titleDe: "Natur und Umwelt", icon: "🌱" },
  { id: "politik", num: 10, titleAr: "السياسة والمجتمع", titleDe: "Politik und Gesellschaft", icon: "🏛️" },
  { id: "beziehungen", num: 11, titleAr: "العلاقات الاجتماعية", titleDe: "Soziale Beziehungen", icon: "🤝" },
  { id: "technik", num: 12, titleAr: "التقنية والرقمنة", titleDe: "Technik und Digitalisierung", icon: "💻" },
  { id: "verkehr", num: 13, titleAr: "المواصلات", titleDe: "Verkehr", icon: "🚌" },
  { id: "wohnen", num: 14, titleAr: "السكن", titleDe: "Wohnen", icon: "🏠" },
  { id: "wirtschaft", num: 15, titleAr: "الاقتصاد والمالية", titleDe: "Wirtschaft und Finanzen", icon: "📊" },
  { id: "wissenschaft", num: 16, titleAr: "العلوم والبحث", titleDe: "Wissenschaft und Forschung", icon: "🔬" },
  { id: "kultur", num: 17, titleAr: "الثقافة والفن", titleDe: "Kultur und Kunst", icon: "🎭" },
  { id: "sprache", num: 18, titleAr: "اللغة والتعلم", titleDe: "Sprache und Lernen", icon: "🗣️" },
];

export const B2_TOPIC_VOCAB: Record<string, VocabEntry[]> = {
  /* 1) Arbeit und Beruf */
  arbeit: [
    { de: "die Arbeitsstelle", ar: "مكان العمل", g: "die" },
    { de: "der Arbeitgeber", ar: "صاحب العمل", g: "der" },
    { de: "der Arbeitnehmer", ar: "الموظف/الأجير", g: "der" },
    { de: "die Bewerbung", ar: "طلب الوظيفة", g: "die" },
    { de: "der Lebenslauf", ar: "السيرة الذاتية", g: "der" },
    { de: "das Vorstellungsgespräch", ar: "مقابلة العمل", g: "das" },
    { de: "das Gehalt", ar: "الراتب", g: "das" },
    { de: "die Fähigkeit", ar: "القدرة/المهارة", g: "die" },
    { de: "die Berufserfahrung", ar: "الخبرة المهنية", g: "die" },
    { de: "die Arbeitszeit", ar: "ساعات العمل", g: "die" },
    { de: "der Kollege", ar: "الزميل", g: "der" },
    { de: "die Führungskraft", ar: "القائد/المدير", g: "die" },
    { de: "kündigen", ar: "يستقيل/ينهي عقداً", g: "v" },
    { de: "sich bewerben um", ar: "يتقدم لوظيفة", g: "v" },
    { de: "die Karrierechance", ar: "فرصة المسيرة", g: "die" },
    { de: "die Weiterbildung", ar: "التدريب المستمر", g: "die" },
    { de: "das Team", ar: "الفريق", g: "das" },
    { de: "die Überstunde", ar: "ساعة إضافية", g: "die" },
  ],
  /* 2) Ausbildung und Studium */
  bildung: [
    { de: "das Studium", ar: "الدراسة الجامعية", g: "das" },
    { de: "der Studiengang", ar: "التخصص الدراسي", g: "der" },
    { de: "die Vorlesung", ar: "المحاضرة", g: "die" },
    { de: "das Seminar", ar: "الندوة/الورشة", g: "das" },
    { de: "der Abschluss", ar: "الشهادة الختامية", g: "der" },
    { de: "die Prüfung", ar: "الامتحان", g: "die" },
    { de: "das Stipendium", ar: "المنحة الدراسية", g: "das" },
    { de: "die Universität", ar: "الجامعة", g: "die" },
    { de: "die Lehrkraft", ar: "المعلّم/ة", g: "die" },
    { de: "der Austausch", ar: "التبادل", g: "der" },
    { de: "die Anforderung", ar: "المتطلب", g: "die" },
    { de: "das Fach", ar: "المادة الدراسية", g: "das" },
    { de: "die Note", ar: "الدرجة/العلامة", g: "die" },
    { de: "bestehen", ar: "ينجح في", g: "v" },
    { de: "durchfallen", ar: "يرسب", g: "v" },
  ],
  /* 3) Einkaufen und Konsum */
  konsum: [
    { de: "der Konsum", ar: "الاستهلاك", g: "der" },
    { de: "die Kaufentscheidung", ar: "قرار الشراء", g: "die" },
    { de: "das Angebot", ar: "العرض", g: "das" },
    { de: "die Nachfrage", ar: "الطلب", g: "die" },
    { de: "der Preisvergleich", ar: "مقارنة الأسعار", g: "der" },
    { de: "das Schnäppchen", ar: "الصفقة الرابحة", g: "das" },
    { de: "der Kassenbon", ar: "إيصال الشراء", g: "der" },
    { de: "die Reklamation", ar: "الشكوى من منتج", g: "die" },
    { de: "der Umtausch", ar: "الاستبدال", g: "der" },
    { de: "der Rabatt", ar: "الخصم", g: "das" },
    { de: "der Online-Shop", ar: "المتجر الإلكتروني", g: "der" },
    { de: "die Lieferung", ar: "التوصيل", g: "die" },
    { de: "nachhaltig", ar: "مستدام", g: "adj" },
    { de: "das Second-Hand-Geschäft", ar: "متجر المستعمل", g: "das" },
    { de: "der Verschleiß", ar: "الاستهلاك/الاهتراء", g: "der" },
  ],
  /* 4) Feste und Feiern */
  feste: [
    { de: "die Feier", ar: "الاحتفال", g: "die" },
    { de: "das Fest", ar: "العيد/المهرجان", g: "das" },
    { de: "das Jubiläum", ar: "الذكرى السنوية", g: "das" },
    { de: "die Einladung", ar: "الدعوة", g: "die" },
    { de: "das Geschenk", ar: "الهدية", g: "das" },
    { de: "der Gast", ar: "الضيف", g: "der" },
    { de: "der Brauch", ar: "العادة/التقليد", g: "der" },
    { de: "die Tradition", ar: "التقاليد", g: "die" },
    { de: "feiern", ar: "يحتفل", g: "v" },
    { de: "einladen", ar: "يدعو", g: "v" },
    { de: "das Feuerwerk", ar: "الألعاب النارية", g: "das" },
    { de: "das Weihnachten", ar: "عيد الميلاد", g: "das" },
    { de: "das Neujahr", ar: "رأس السنة", g: "das" },
  ],
  /* 5) Freizeit und Hobbys */
  freizeit: [
    { de: "die Freizeitbeschäftigung", ar: "نشاط الفراغ", g: "die" },
    { de: "das Hobby", ar: "الهواية", g: "das" },
    { de: "die Vereinstätigkeit", ar: "نشاط النادي", g: "die" },
    { de: "das Konzert", ar: "الحفل الموسيقي", g: "das" },
    { de: "der Ausflug", ar: "الرحلة/النزهة", g: "der" },
    { de: "die Wanderung", ar: "المشي في الطبيعة", g: "die" },
    { de: "das Museum", ar: "المتحف", g: "das" },
    { de: "entspannen", ar: "يسترخي", g: "v" },
    { de: "die Leidenschaft", ar: "الشغف", g: "die" },
    { de: "sich treffen mit", ar: "يلتقي بـ", g: "v" },
  ],
  /* 6) Gesundheit und Sport */
  gesundheit: [
    { de: "die Vorsorge", ar: "الوقاية", g: "die" },
    { de: "die Diagnose", ar: "التشخيص", g: "die" },
    { de: "die Behandlung", ar: "العلاج", g: "die" },
    { de: "die Krankenversicherung", ar: "التأمين الصحي", g: "die" },
    { de: "der Hausarzt", ar: "طبيب الأسرة", g: "der" },
    { de: "die Ernährung", ar: "التغذية", g: "die" },
    { de: "der Blutdruck", ar: "ضغط الدم", g: "der" },
    { de: "die Vorsorgeuntersuchung", ar: "الفحص الوقائي", g: "die" },
    { de: "die Bewegung", ar: "الحركة/الرياضة", g: "die" },
    { de: "die Ausdauer", ar: "التحمل", g: "die" },
    { de: "gesundheitsbewusst", ar: "واعٍ صحياً", g: "adj" },
    { de: "das Rezept", ar: "الوصفة الطبية", g: "das" },
    { de: "die Nebenwirkung", ar: "الأثر الجانبي", g: "die" },
    { de: "sich erholen", ar: "يتعافى", g: "v" },
    { de: "der Sportverein", ar: "نادي رياضي", g: "der" },
  ],
  /* 7) Medien und Kommunikation */
  medien: [
    { de: "die Nachrichten", ar: "الأخبار", g: "die" },
    { de: "die Berichterstattung", ar: "التغطية الإخبارية", g: "die" },
    { de: "der Journalist", ar: "الصحفي", g: "der" },
    { de: "die Meinungsfreiheit", ar: "حرية الرأي", g: "die" },
    { de: "die Quelle", ar: "المصدر", g: "die" },
    { de: "glaubwürdig", ar: "موثوق", g: "adj" },
    { de: "die Fake News", ar: "الأخبار الزائفة", g: "die" },
    { de: "die Werbung", ar: "الإعلان", g: "die" },
    { de: "der Einfluss", ar: "التأثير", g: "der" },
    { de: "die Plattform", ar: "المنصة", g: "die" },
    { de: "der Beitrag", ar: "المشاركة/التقرير", g: "der" },
    { de: "sich informieren", ar: "يستطلع/يتبيّن", g: "v" },
    { de: "die Medienkompetenz", ar: "الثقافة الإعلامية", g: "die" },
    { de: "verbreiten", ar: "ينشر", g: "v" },
  ],
  /* 8) Mobilität und Reisen */
  mobilitaet: [
    { de: "die Reise", ar: "الرحلة", g: "die" },
    { de: "der Aufenthalt", ar: "الإقامة", g: "der" },
    { de: "die Unterkunft", ar: "المكان/الإقامة", g: "die" },
    { de: "die Reiseversicherung", ar: "تأمين السفر", g: "die" },
    { de: "der Reiseführer", ar: "الدليل السياحي", g: "der" },
    { de: "das Reiseziel", ar: "وجهة السفر", g: "das" },
    { de: "die Sehenswürdigkeit", ar: "المعلم السياحي", g: "die" },
    { de: "die Anreise", ar: "الوصول", g: "die" },
    { de: "die Abreise", ar: "المغادرة", g: "die" },
    { de: "übernachten", ar: "يبيت", g: "v" },
    { de: "die Grenze", ar: "الحدود", g: "die" },
    { de: "die Landschaft", ar: "المنظر الطبيعي", g: "die" },
    { de: "die Auslandserfahrung", ar: "الخبرة الخارجية", g: "die" },
  ],
  /* 9) Natur und Umwelt */
  umwelt: [
    { de: "der Umweltschutz", ar: "حماية البيئة", g: "der" },
    { de: "die Nachhaltigkeit", ar: "الاستدامة", g: "die" },
    { de: "der Klimawandel", ar: "التغير المناخي", g: "der" },
    { de: "die erneuerbare Energie", ar: "الطاقة المتجددة", g: "die" },
    { de: "der Treibhauseffekt", ar: "الاحتباس الحراري", g: "der" },
    { de: "die Emission", ar: "الانبعاثات", g: "die" },
    { de: "der Müll", ar: "النفايات", g: "der" },
    { de: "das Recycling", ar: "إعادة التدوير", g: "das" },
    { de: "die Verschmutzung", ar: "التلوث", g: "die" },
    { de: "die Artenvielfalt", ar: "التنوع البيولوجي", g: "die" },
    { de: "das Ökosystem", ar: "النظام البيئي", g: "das" },
    { de: "sparsam", ar: "مقتصد", g: "adj" },
    { de: "verschmutzen", ar: "يلوّث", g: "v" },
    { de: "schonen", ar: "يحافظ على", g: "v" },
    { de: "der Verbrauch", ar: "الاستهلاك", g: "der" },
  ],
  /* 10) Politik und Gesellschaft */
  politik: [
    { de: "die Regierung", ar: "الحكومة", g: "die" },
    { de: "die Partei", ar: "الحزب", g: "die" },
    { de: "der Staat", ar: "الدولة", g: "der" },
    { de: "die Wahl", ar: "الانتخاب", g: "die" },
    { de: "die Demokratie", ar: "الديمقراطية", g: "die" },
    { de: "die Steuer", ar: "الضريبة", g: "die" },
    { de: "das Gesetz", ar: "القانون", g: "das" },
    { de: "der Bürger / die Bürger", ar: "المواطن / المواطنون", g: "der" },
    { de: "die Integration", ar: "الاندماج", g: "die" },
    { de: "die Chancengleichheit", ar: "تكافؤ الفرص", g: "die" },
    { de: "die Maßnahme", ar: "الإجراء", g: "die" },
    { de: "die Förderung", ar: "الدعم", g: "die" },
    { de: "beteiligen", ar: "يشارك", g: "v" },
    { de: "die Gesellschaft", ar: "المجتمع", g: "die" },
    { de: "das Ehrenamt", ar: "العمل التطوعي", g: "das" },
  ],
  /* 11) Soziale Beziehungen */
  beziehungen: [
    { de: "die Beziehung", ar: "العلاقة", g: "die" },
    { de: "die Freundschaft", ar: "الصداقة", g: "die" },
    { de: "das Vertrauen", ar: "الثقة", g: "das" },
    { de: "der Respekt", ar: "الاحترام", g: "der" },
    { de: "der Konflikt", ar: "النزاع", g: "der" },
    { de: "die Toleranz", ar: "التسامح", g: "die" },
    { de: "die Rücksicht", ar: "المراعاة", g: "die" },
    { de: "die Unterstützung", ar: "الدعم", g: "die" },
    { de: "sich streiten", ar: "يتشاجر", g: "v" },
    { de: "sich versöhnen", ar: "يتصالح", g: "v" },
    { de: "die Nachbarschaft", ar: "الجوار", g: "die" },
    { de: "der Zusammenhalt", ar: "التماسك", g: "der" },
    { de: "sich kümmern um", ar: "يهتم بـ", g: "v" },
    { de: "verständnisvoll", ar: "متفهم", g: "adj" },
  ],
  /* 12) Technik und Digitalisierung */
  technik: [
    { de: "die Digitalisierung", ar: "الرقمنة", g: "die" },
    { de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", g: "die" },
    { de: "das Gerät", ar: "الجهاز", g: "das" },
    { de: "die Anwendung", ar: "التطبيق", g: "die" },
    { de: "die Daten", ar: "البيانات", g: "die" },
    { de: "der Datenschutz", ar: "حماية البيانات", g: "der" },
    { de: "die Cybersicherheit", ar: "الأمن السيبراني", g: "die" },
    { de: "die Automatisierung", ar: "الأتمتة", g: "die" },
    { de: "das Online-Banking", ar: "الخدمات المصرفية الإلكترونية", g: "das" },
    { de: "das Smartphone", ar: "الهاتف الذكي", g: "das" },
    { de: "die Bildschirmzeit", ar: "وقت الشاشة", g: "die" },
    { de: "aktualisieren", ar: "يحدّث", g: "v" },
    { de: "programmieren", ar: "يبرمج", g: "v" },
    { de: "digitale Kompetenzen", ar: "المهارات الرقمية", g: "die" },
  ],
  /* 13) Verkehr */
  verkehr: [
    { de: "der Verkehr", ar: "المرور", g: "der" },
    { de: "der Stau", ar: "الازدحام", g: "der" },
    { de: "die Fahrkarte", ar: "تذكرة السفر", g: "die" },
    { de: "der Fahrplan", ar: "جدول المواعيد", g: "der" },
    { de: "die Haltestelle", ar: "محطة التوقف", g: "die" },
    { de: "der Bahnhof", ar: "محطة القطار", g: "der" },
    { de: "der Flughafen", ar: "المطار", g: "der" },
    { de: "die Verspätung", ar: "التأخير", g: "die" },
    { de: "das Ticket", ar: "التذكرة", g: "das" },
    { de: "umsteigen", ar: "يغيّر الوسيلة", g: "v" },
    { de: "der öffentliche Nahverkehr", ar: "النقل العام", g: "der" },
    { de: "die Fahrgemeinschaft", ar: "تقاسم السيارة", g: "die" },
    { de: "das Elektroauto", ar: "السيارة الكهربائية", g: "das" },
  ],
  /* 14) Wohnen */
  wohnen: [
    { de: "die Wohnung", ar: "الشقة", g: "die" },
    { de: "der Mietvertrag", ar: "عقد الإيجار", g: "der" },
    { de: "die Miete", ar: "الإيجار", g: "die" },
    { de: "die Nebenkosten", ar: "التكاليف الإضافية", g: "die" },
    { de: "die Kaution", ar: "التأمين/الوديعة", g: "die" },
    { de: "der Vermieter", ar: "المؤجّر", g: "der" },
    { de: "der Mieter", ar: "المستأجر", g: "der" },
    { de: "die Kündigung", ar: "الإنهاء", g: "die" },
    { de: "die Besichtigung", ar: "المعاينة", g: "die" },
    { de: "der Umzug", ar: "الانتقال", g: "der" },
    { de: "die Einrichtung", ar: "التأثيث", g: "die" },
    { de: "das Stockwerk", ar: "الطابق", g: "das" },
    { de: "das Treppenhaus", ar: "بئر السلم", g: "das" },
    { de: "renovieren", ar: "يجدد", g: "v" },
    { de: "die WG (Wohngemeinschaft)", ar: "سكن مشترك", g: "die" },
  ],
  /* 15) Wirtschaft und Finanzen */
  wirtschaft: [
    { de: "die Wirtschaft", ar: "الاقتصاد", g: "die" },
    { de: "der Markt", ar: "السوق", g: "der" },
    { de: "die Investition", ar: "الاستثمار", g: "die" },
    { de: "der Umsatz", ar: "المبيعات", g: "der" },
    { de: "der Gewinn", ar: "الربح", g: "der" },
    { de: "der Verlust", ar: "الخسارة", g: "der" },
    { de: "die Inflation", ar: "التضخم", g: "die" },
    { de: "das Budget", ar: "الميزانية", g: "das" },
    { de: "die Schulden", ar: "الديون", g: "die" },
    { de: "die Sparkasse", ar: "بنك الادخار", g: "die" },
    { de: "der Kredit", ar: "القرض", g: "der" },
    { de: "das Konto", ar: "الحساب", g: "das" },
    { de: "die Aktie", ar: "السهم", g: "die" },
    { de: "wirtschaftlich", ar: "اقتصادي", g: "adj" },
    { de: "sparen", ar: "يدّخر", g: "v" },
  ],
  /* 16) Wissenschaft und Forschung */
  wissenschaft: [
    { de: "die Wissenschaft", ar: "العلم", g: "die" },
    { de: "die Forschung", ar: "البحث", g: "die" },
    { de: "das Experiment", ar: "التجربة", g: "das" },
    { de: "die Studie", ar: "الدراسة", g: "die" },
    { de: "die Entdeckung", ar: "الاكتشاف", g: "die" },
    { de: "die Theorie", ar: "النظرية", g: "die" },
    { de: "die Methode", ar: "المنهجية", g: "die" },
    { de: "das Labor", ar: "المختبر", g: "das" },
    { de: "die Erkenntnis", ar: "المعرفة/النتيجة", g: "die" },
    { de: "der Beweis", ar: "البرهان", g: "der" },
    { de: "die Analyse", ar: "التحليل", g: "die" },
    { de: "wissenschaftlich", ar: "علمي", g: "adj" },
    { de: "beweisen", ar: "يثبت", g: "v" },
    { de: "widerlegen", ar: "يدحض", g: "v" },
  ],
  /* 17) Kultur und Kunst */
  kultur: [
    { de: "die Kultur", ar: "الثقافة", g: "die" },
    { de: "die Kunst", ar: "الفن", g: "die" },
    { de: "die Literatur", ar: "الأدب", g: "die" },
    { de: "das Theater", ar: "المسرح", g: "das" },
    { de: "das Gemälde", ar: "اللوحة الفنية", g: "das" },
    { de: "der Künstler", ar: "الفنان", g: "der" },
    { de: "die Ausstellung", ar: "المعرض", g: "die" },
    { de: "die Vielfalt", ar: "التنوع", g: "die" },
    { de: "das Kulturerbe", ar: "التراث الثقافي", g: "das" },
    { de: "schätzen", ar: "يقدّر", g: "v" },
    { de: "künstlerisch", ar: "فني", g: "adj" },
    { de: "das Publikum", ar: "الجمهور", g: "das" },
  ],
  /* 18) Sprache und Lernen */
  sprache: [
    { de: "die Muttersprache", ar: "اللغة الأم", g: "die" },
    { de: "die Fremdsprache", ar: "اللغة الأجنبية", g: "die" },
    { de: "die Zweitsprache", ar: "اللغة الثانية", g: "die" },
    { de: "der Wortschatz", ar: "المفردات", g: "der" },
    { de: "die Grammatik", ar: "القواعد", g: "die" },
    { de: "die Aussprache", ar: "النطق", g: "die" },
    { de: "das Sprachgefühl", ar: "الحس اللغوي", g: "das" },
    { de: "die Redewendung", ar: "التعبير الاصطلاحي", g: "die" },
    { de: "der Sprachkurs", ar: "دورة اللغة", g: "der" },
    { de: "die Sprachschule", ar: "مدرسة اللغات", g: "die" },
    { de: "zweisprachig", ar: "ثنائي اللغة", g: "adj" },
    { de: "fließend", ar: "بطلاقة", g: "adj" },
    { de: "üben", ar: "يتدرب", g: "v" },
    { de: "sich merken", ar: "يحفظ/يتذكر", g: "v" },
    { de: "das Niveau", ar: "المستوى", g: "das" },
    { de: "die Sprachprüfung", ar: "امتحان اللغة", g: "die" },
  ],
};

/** كل مفردات مواضيع B2 (مسطحة) */
export const B2_TOPIC_ALL: VocabEntry[] = Object.values(B2_TOPIC_VOCAB).flat();

export const TOTAL_B2_TOPIC_WORDS = B2_TOPIC_ALL.length;

/** مفردات موضوع معين */
export function getB2TopicWords(topicId: string): VocabEntry[] {
  return B2_TOPIC_VOCAB[topicId] ?? [];
}
