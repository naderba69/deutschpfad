import type { TestQuestion } from "@/types/test";

/**
 * محاكي الاستمارات الرسمية — حقول حقيقية من الاستمارات الألمانية
 * (Anmeldung, Visum, Bewerbung)
 */

export interface FormField {
  id: string;
  label: string;
  labelDe: string;
  placeholder?: string;
  type: "text" | "date" | "select" | "number";
  options?: string[];
  hint?: string;
}

export interface OfficialForm {
  id: string;
  title: string;
  titleDe: string;
  description: string;
  fields: FormField[];
  /** جملة شكر عند الإرسال */
  successMessage: string;
}

export const OFFICIAL_FORMS: OfficialForm[] = [
  {
    id: "anmeldung",
    title: "تسجيل العنوان (Anmeldung)",
    titleDe: "Anmeldung der Wohnung",
    description: "إلزامي في ألمانيا خلال 14 يوماً من السكن — يعطيك العنوان القانوني للتأمين والبنك.",
    fields: [
      { id: "vorname", label: "الاسم الأول", labelDe: "Vorname", type: "text", placeholder: "Sami" },
      { id: "nachname", label: "اسم العائلة", labelDe: "Nachname", type: "text", placeholder: "Ben Ali" },
      { id: "geburtsdatum", label: "تاريخ الميلاد", labelDe: "Geburtsdatum", type: "date" },
      { id: "geburtsort", label: "مكان الميلاد", labelDe: "Geburtsort", type: "text", placeholder: "Tunis" },
      { id: "strasse", label: "الشارع", labelDe: "Straße", type: "text", placeholder: "Musterstraße 12" },
      { id: "plz", label: "الرمز البريدي", labelDe: "PLZ", type: "number", placeholder: "10115" },
      { id: "stadt", label: "المدينة", labelDe: "Stadt", type: "text", placeholder: "Berlin" },
      { id: "familienstand", label: "الحالة الاجتماعية", labelDe: "Familienstand", type: "select", options: ["ledig (أعزب)", "verheiratet (متزوج)", "geschieden (مطلق)", "verwitwet (أرمل)"] },
    ],
    successMessage: "ممتاز! أكملت نموذج Anmeldung — تذكر أن تحتاج: جواز السفر + عقد الإيجار + تأكيد المالك.",
  },
  {
    id: "visum",
    title: "طلب تأشيرة (Visum)",
    titleDe: "Visumantrag",
    description: "طلب تأشيرة دراسة/عمل إلى ألمانيا — نموذج السفارة القياسي.",
    fields: [
      { id: "vorname", label: "الاسم الأول", labelDe: "Vorname", type: "text" },
      { id: "nachname", label: "اسم العائلة", labelDe: "Nachname", type: "text" },
      { id: "passnummer", label: "رقم الجواز", labelDe: "Passnummer", type: "text", placeholder: "C1234567" },
      { id: "gueltig_bis", label: "صالح حتى", labelDe: "Gültig bis", type: "date" },
      { id: "visumart", label: "نوع التأشيرة", labelDe: "Visumart", type: "select", options: ["Studium (دراسة)", "Arbeit (عمل)", "Sprachkurs (دورة لغة)", "Familiennachzug (لمّ شمل)"] },
      { id: "aufenthaltsdauer", label: "مدة الإقامة (شهور)", labelDe: "Aufenthaltsdauer", type: "number", placeholder: "12" },
      { id: "beschaeftigung", label: "جهة العمل/الدراسة", labelDe: "Arbeitgeber/Hochschule", type: "text", placeholder: "TU Berlin" },
      { id: "finanzierung", label: "طريقة التمويل", labelDe: "Finanzierung", type: "select", options: ["Sperrkonto (حساب مجمد)", "Stipendium (منحة)", "Eltern (الوالدان)", "Arbeit (عمل)"] },
    ],
    successMessage: "أتممت نموذج التأشيرة! تذكّر المستندات: جواز + صور + تأمين صحي + إثبات تمويل (Sperrkonto ≈ 11,904 يورو سنوياً).",
  },
  {
    id: "bewerbung",
    title: "بيانات التقديم الوظيفي",
    titleDe: "Bewerbungsdaten",
    description: "النموذج الرقمي الشائع لطلبات الوظائف في الشركات الألمانية.",
    fields: [
      { id: "vorname", label: "الاسم الأول", labelDe: "Vorname", type: "text" },
      { id: "nachname", label: "اسم العائلة", labelDe: "Nachname", type: "text" },
      { id: "email", label: "البريد الإلكتروني", labelDe: "E-Mail", type: "text", placeholder: "sami@email.de" },
      { id: "telefon", label: "الهاتف", labelDe: "Telefon", type: "text", placeholder: "+49 176 1234567" },
      { id: "stelle", label: "المنصب المطلوب", labelDe: "Gewünschte Stelle", type: "text", placeholder: "Softwareentwickler" },
      { id: "erfahrung_jahre", label: "سنوات الخبرة", labelDe: "Berufserfahrung (Jahre)", type: "number" },
      { id: "sprachkenntnisse", label: "اللغة الألمانية", labelDe: "Deutschkenntnisse", type: "select", options: ["A1", "A2", "B1", "B2", "C1", "Muttersprache (لغة أم)"] },
      { id: "fruehester_start", label: "أقرب تاريخ بدء", labelDe: "Frühester Eintritt", type: "date" },
    ],
    successMessage: "بياناتك مكتملة! أرفق معها: Anschreiben + Lebenslauf + Zeugnisse (الشهادات) — وأتقن مقابلة العمل من سيناريوهاتنا!",
  },

  {
    id: "kuendigung",
    title: "إنهاء عقد الإيجار (Kündigung)",
    titleDe: "Kündigung des Mietvertrags",
    description: "إشعار إنهاء العقد — في ألمانيا مهلة الإشعار عادة 3 أشهر. قدّمها خطياً بالبريد المسجل.",
    fields: [
      { id: "name", label: "الاسم الكامل", labelDe: "Name des Mieters", type: "text", placeholder: "Sami Ben Ali" },
      { id: "adresse", label: "عنوان الشقة المستأجرة", labelDe: "Adresse der Wohnung", type: "text", placeholder: "Musterstraße 5, 10115 Berlin" },
      { id: "vertragsbeginn", label: "تاريخ بدء العقد", labelDe: "Beginn des Mietvertrags", type: "date" },
      { id: "kuendigungsdatum", label: "تاريخ الإشعار (اليوم)", labelDe: "Datum der Kündigung", type: "date" },
      { id: "auszugstermin", label: "تاريخ الإخلاء المطلوب", labelDe: "Gewünschter Auszugstermin", type: "date" },
      { id: "grund", label: "السبب (اختياري)", labelDe: "Grund (optional)", type: "select", options: ["beruflicher Umzug (انتقال مهني)", "Studium (دراسة)", "Familienverhältnisse (ظروف عائلية)", "keine Angabe (دون بيان)"] },
    ],
    successMessage: "أكملت خطاب Kündigung! تذكّر: عادةً يلزم الإشعار قبل 3 أشهر، والرد الكتابي من المالك، وتسليم المفاتيح ببروتوكول (Übergabeprotokoll).",
  },
];