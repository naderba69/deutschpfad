import type { VocabEntry } from "@/data/vocabulary/a1";
import { getA1VocabAll } from "@/data/vocabulary/a1";
import { getA2VocabAll } from "@/data/vocabulary/a2";
import { getB1VocabAll } from "@/data/vocabulary/b1";
import { B2_EXTRA_VOCAB } from "@/data/vocabulary/b2-extra";
import { B2_EXTRA2_VOCAB } from "@/data/vocabulary/b2-extra2";

/**
 * ═══════════════════════════════════════════════════════════
 *  بنك مفردات المستوى B2 (~200 كلمة) — منظم حسب الوحدات
 *  (المفردات المتخصصة: اقتصاد، علوم، أدب، قانون، علم نفس، فلسفة)
 * ═══════════════════════════════════════════════════════════
 */

export const B2_VOCAB: Record<string, VocabEntry[]> = {
  /* ── وحدة 1: العلوم ── */
  "b2-01": [
    { de: "die Wissenschaft", ar: "العلم", g: "die" },
    { de: "die Forschung", ar: "البحث العلمي", g: "die" },
    { de: "das Experiment", ar: "التجربة", g: "das" },
    { de: "die Entdeckung", ar: "الاكتشاف", g: "die" },
    { de: "der Beweis", ar: "البرهان", g: "der" },
    { de: "der Konjunktiv I", ar: "نقل الكلام غير المباشر", g: "der" },
    { de: "die indirekte Rede", ar: "الكلام غير المباشر", g: "die" },
    { de: "behaupten", ar: "يزعم", g: "v" },
    { de: "der Wissenschaftler", ar: "العالم (باحث)", g: "der" },
    { de: "die Studie", ar: "الدراسة", g: "die" },
    { de: "das Ergebnis", ar: "النتيجة", g: "das" },
    { de: "beweisen", ar: "يثبت", g: "v" },
    { de: "die Hypothese", ar: "الفرضية", g: "die" },
    { de: "das Labor", ar: "المختبر", g: "das" },
    { de: "die Publikation", ar: "المنشور", g: "die" },
  ],

  /* ── وحدة 2: الاقتصاد ── */
  "b2-02": [
    { de: "die Wirtschaft", ar: "الاقتصاد", g: "die" },
    { de: "der Markt", ar: "السوق", g: "der" },
    { de: "der Umsatz", ar: "المبيعات", g: "der" },
    { de: "die Inflation", ar: "التضخم", g: "die" },
    { de: "die Aktien", ar: "الأسهم", g: "die" },
    { de: "das Zustandspassiv", ar: "مجهول الحالة", g: "das" },
    { de: "sich lassen", ar: "يمكن (بديل مجهول)", g: "v" },
    { de: "-bar", ar: "قابل للـ", g: "other" },
    { de: "die Konjunktur", ar: "الدورة الاقتصادية", g: "die" },
    { de: "die Investition", ar: "الاستثمار", g: "die" },
    { de: "der Gewinn", ar: "الربح", g: "der" },
    { de: "der Verlust", ar: "الخسارة", g: "der" },
    { de: "die Lieferung", ar: "التسليم", g: "die" },
    { de: "der Vertrag", ar: "العقد", g: "der" },
    { de: "verhandeln", ar: "يتفاوض", g: "v" },
  ],

  /* ── وحدة 3: القانون ── */
  "b2-03": [
    { de: "das Recht", ar: "الحق/القانون", g: "das" },
    { de: "das Gesetz", ar: "القانون", g: "das" },
    { de: "das Gericht", ar: "المحكمة", g: "das" },
    { de: "der Anwalt", ar: "المحامي", g: "der" },
    { de: "der Zeuge", ar: "الشاهد", g: "der" },
    { de: "die Strafe", ar: "العقوبة", g: "die" },
    { de: "auf den / mit dem (Relativ)", ar: "نسبية بحرف جر", g: "other" },
    { de: "wo (Relativ)", ar: "حيث (مكان)", g: "other" },
    { de: "was (Relativ)", ar: "ما (بعد كل شيء)", g: "other" },
    { de: "der Richter", ar: "القاضي", g: "der" },
    { de: "das Urteil", ar: "الحكم", g: "das" },
    { de: "die Frist", ar: "المهلة", g: "die" },
    { de: "die Unterschrift", ar: "التوقيع", g: "die" },
    { de: "gültig", ar: "ساري", g: "adj" },
  ],

  /* ── وحدة 4: الأدب ── */
  "b2-04": [
    { de: "die Literatur", ar: "الأدب", g: "die" },
    { de: "der Roman", ar: "الرواية", g: "der" },
    { de: "das Gedicht", ar: "القصيدة", g: "das" },
    { de: "der Autor", ar: "الكاتب", g: "der" },
    { de: "das Partizip I", ar: "المشارك الأول (فاعل)", g: "das" },
    { de: "das Partizip II", ar: "المشارك الثاني (مفعول)", g: "das" },
    { de: "der Beitrag", ar: "المقال/المساهمة", g: "der" },
    { de: "die Geschichte", ar: "القصة", g: "die" },
    { de: "die Erzählung", ar: "الحكاية", g: "die" },
    { de: "der Verlag", ar: "دار النشر", g: "der" },
    { de: "das Werk", ar: "العمل الفني", g: "das" },
    { de: "lesenswert", ar: "يستحق القراءة", g: "adj" },
    { de: "spannend", ar: "مشوق", g: "adj" },
    { de: "die Buchmesse", ar: "معرض الكتاب", g: "die" },
    { de: "die Rezension", ar: "المراجعة النقدية", g: "die" },
  ],

  /* ── وحدة 5: علم النفس ── */
  "b2-05": [
    { de: "die Psychologie", ar: "علم النفس", g: "die" },
    { de: "die Kommunikation", ar: "التواصل", g: "die" },
    { de: "das Missverständnis", ar: "سوء الفهم", g: "das" },
    { de: "zuhören", ar: "يصغي", g: "v" },
    { de: "das Verhalten", ar: "السلوك", g: "das" },
    { de: "indem", ar: "بأن/بواسطة", g: "other" },
    { de: "anstatt...zu", ar: "بدلاً من أن", g: "other" },
    { de: "ohne...zu", ar: "دون أن", g: "other" },
    { de: "es sei denn", ar: "إلا إذا", g: "other" },
    { de: "je nachdem", ar: "حسبما", g: "other" },
    { de: "die Emotion", ar: "العاطفة", g: "die" },
    { de: "der Stress", ar: "التوتر", g: "der" },
    { de: "die Motivation", ar: "الحوافز", g: "die" },
    { de: "das Selbstvertrauen", ar: "الثقة بالنفس", g: "das" },
    { de: "die Empathie", ar: "التعاطف", g: "die" },
  ],

  /* ── وحدة 6: المهنة ── */
  "b2-06": [
    { de: "die Karriere", ar: "المسار المهني", g: "die" },
    { de: "die Führungskraft", ar: "القائد/المدير", g: "die" },
    { de: "die Probezeit", ar: "فترة التجربة", g: "die" },
    { de: "die Nominalisierung", ar: "الاشتقاق الاسمي", g: "die" },
    { de: "beim Lesen / zum Nachdenken", ar: "عند القراءة / للتفكير", g: "other" },
    { de: "die Verbesserung", ar: "التحسين", g: "die" },
    { de: "die Zusammenarbeit", ar: "التعاون", g: "die" },
    { de: "die Fähigkeit", ar: "المهارة", g: "die" },
    { de: "die Qualifikation", ar: "المؤهل", g: "die" },
    { de: "die Verantwortung", ar: "المسؤولية", g: "die" },
    { de: "der Erfolg", ar: "النجاح", g: "der" },
    { de: "das Ziel", ar: "الهدف", g: "das" },
    { de: "befördern", ar: "يرقّي", g: "v" },
    { de: "kündigen", ar: "يستقيل", g: "v" },
    { de: "die Gehaltserhöhung", ar: "زيادة الراتب", g: "die" },
  ],

  /* ── وحدة 7: الفلسفة ── */
  "b2-07": [
    { de: "die Philosophie", ar: "الفلسفة", g: "die" },
    { de: "die These", ar: "الأطروحة", g: "die" },
    { de: "das Argument", ar: "الحجة", g: "das" },
    { de: "die Erörterung", ar: "المقال الجدلي", g: "die" },
    { de: "das Futur II", ar: "المستقبل التام", g: "das" },
    { de: "Meiner Meinung nach", ar: "في رأيي", g: "other" },
    { de: "einerseits... andererseits", ar: "من ناحية... ومن ناحية أخرى", g: "other" },
    { de: "zusammenfassend", ar: "خلاصةً", g: "other" },
    { de: "die Wahrheit", ar: "الحقيقة", g: "die" },
    { de: "die Ethik", ar: "الأخلاق", g: "die" },
    { de: "der Sinn", ar: "المعنى", g: "der" },
    { de: "die Freiheit", ar: "الحرية", g: "die" },
    { de: "die Gerechtigkeit", ar: "العدالة", g: "die" },
    { de: "der Gedanke", ar: "الفكرة", g: "der" },
    { de: "nachdenken", ar: "يتأمل", g: "v" },
  ],

  /* ── وحدة 8: اللغات ── */
  "b2-08": [
    { de: "die Sprache", ar: "اللغة", g: "die" },
    { de: "die Kultur", ar: "الثقافة", g: "die" },
    { de: "der Austausch", ar: "التبادل", g: "der" },
    { de: "interkulturell", ar: "بين الثقافات", g: "adj" },
    { de: "sich interessieren für", ar: "يهتم بـ", g: "v" },
    { de: "warten auf", ar: "ينتظر", g: "v" },
    { de: "sich freuen auf/über", ar: "يتطلع لـ/يفرح بـ", g: "v" },
    { de: "denken an", ar: "يفكر في", g: "v" },
    { de: "träumen von", ar: "يحلم بـ", g: "v" },
    { de: "abhängen von", ar: "يعتمد على", g: "v" },
    { de: "sich kümmern um", ar: "يعتني بـ", g: "v" },
    { de: "diskutieren über", ar: "يناقش", g: "v" },
    { de: "die Mehrsprachigkeit", ar: "تعدد اللغات", g: "die" },
    { de: "die Herkunft", ar: "الأصل", g: "die" },
    { de: "die Verständigung", ar: "التفاهم", g: "die" },
  ],

  /* ── وحدة 9: سوق العمل ── */
  "b2-09": [
    { de: "der Arbeitsmarkt", ar: "سوق العمل", g: "der" },
    { de: "die Stelle", ar: "المنصب", g: "die" },
    { de: "das Anschreiben", ar: "خطاب التقديم", g: "das" },
    { de: "der Lebenslauf", ar: "السيرة الذاتية", g: "der" },
    { de: "in Betracht ziehen", ar: "يأخذ بعين الاعتبار", g: "v" },
    { de: "zur Verfügung stellen", ar: "يضع تحت التصرف", g: "v" },
    { de: "Wert legen auf", ar: "يولي أهمية", g: "v" },
    { de: "eine Rolle spielen", ar: "يلعب دوراً", g: "v" },
    { de: "Anbei finden Sie ...", ar: "مرفقاً تجدون...", g: "other" },
    { de: "sich bewerben um", ar: "يتقدم لـ", g: "v" },
    { de: "der Arbeitgeber", ar: "صاحب العمل", g: "der" },
    { de: "die Kündigungsfrist", ar: "مهلة الإنهاء", g: "die" },
    { de: "die Anerkennung", ar: "الاعتراف (بشهادة)", g: "die" },
    { de: "die Berufserfahrung", ar: "الخبرة المهنية", g: "die" },
    { de: "die Bewerbungsunterlagen", ar: "ملفات التقديم", g: "die" },
  ],

  /* ── وحدة 10: الدراسة ── */
  "b2-10": [
    { de: "das Studium", ar: "الدراسة الجامعية", g: "das" },
    { de: "die Hausarbeit", ar: "البحث الجامعي", g: "die" },
    { de: "das Seminar", ar: "الندوة", g: "das" },
    { de: "die Fachsprache", ar: "لغة التخصص", g: "die" },
    { de: "es ist erwiesen, dass", ar: "ثابت أن", g: "other" },
    { de: "meiner Ansicht nach", ar: "في رأيي", g: "other" },
    { de: "möglicherweise", ar: "ربما", g: "adv" },
    { de: "in gewissem Maße", ar: "إلى حد ما", g: "other" },
    { de: "die Linguistik", ar: "علم اللغة", g: "die" },
    { de: "der Numerus clausus", ar: "قيد القبول (تخصص محدود القبول)", g: "der" },
    { de: "die Zulassung", ar: "القبول", g: "die" },
    { de: "der Studiengang", ar: "برنامج الدراسة", g: "der" },
    { de: "die Vorlesung", ar: "المحاضرة", g: "die" },
    { de: "das Semesterticket", ar: "تذكرة الفصل", g: "das" },
  ],
};

/** عدد كلمات B2 */
export const B2_VOCAB_COUNT = Object.values(B2_VOCAB).reduce(
  (sum, list) => sum + list.length,
  0,
);

/** كل مفردات B2 (مصفوفة مسطحة) */
export function getB2VocabAll(): VocabEntry[] {
  /* عدّاد فريد عبر المستويات (تدقيق نهائي 2026-08-12) */
  const lower = new Set([...getA1VocabAll(), ...getA2VocabAll(), ...getB1VocabAll()].map((w) => `${w.de}‖${w.ar}`));
  return [...Object.values(B2_VOCAB).flat(), ...B2_EXTRA_VOCAB, ...B2_EXTRA2_VOCAB].filter(
    (w) => !lower.has(`${w.de}‖${w.ar}`),
  );
}
