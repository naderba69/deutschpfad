import type { VocabEntry } from "@/data/vocabulary/a1";
import { getA1VocabAll } from "@/data/vocabulary/a1";
import { getA2VocabAll } from "@/data/vocabulary/a2";
import { B1_EXTRA_VOCAB } from "@/data/vocabulary/b1-extra";
import { B1_EXTRA2_VOCAB } from "@/data/vocabulary/b1-extra2";

/**
 * ═══════════════════════════════════════════════════════════
 *  بنك مفردات المستوى B1 (~200 كلمة) — منظم حسب الوحدات
 * ═══════════════════════════════════════════════════════════
 */

export const B1_VOCAB: Record<string, VocabEntry[]> = {
  /* ── وحدة 1: التعليم ── */
  "b1-01": [
    { de: "die Ausbildung", ar: "التدريب المهني", g: "die" },
    { de: "das Studium", ar: "الدراسة الجامعية", g: "das" },
    { de: "das Fach", ar: "التخصص", g: "das" },
    { de: "studieren", ar: "يدرس (جامعة)", g: "v" },
    { de: "der Genitiv", ar: "المضاف إليه", g: "der" },
    { de: "der Relativsatz", ar: "الجملة النسبية", g: "der" },
    { de: "das Stipendium", ar: "المنحة", g: "das" },
    { de: "die Note", ar: "العلامة", g: "die" },
    { de: "das Zeugnis", ar: "الشهادة", g: "das" },
    { de: "das Semester", ar: "الفصل الدراسي", g: "das" },
    { de: "wegen / trotz / während / statt", ar: "بسبب/رغم/خلال/بدلاً من", g: "other" },
    { de: "wessen?", ar: "لمن؟", g: "other" },
    { de: "die Universität", ar: "الجامعة", g: "die" },
    { de: "das Referat", ar: "العرض التقديمي", g: "das" },
    { de: "die Prüfung bestehen", ar: "يجتاز الامتحان", g: "v" },
  ],

  /* ── وحدة 2: العمل ── */
  "b1-02": [
    { de: "die Bewerbung", ar: "طلب الوظيفة", g: "die" },
    { de: "der Lebenslauf", ar: "السيرة الذاتية", g: "der" },
    { de: "das Vorstellungsgespräch", ar: "مقابلة العمل", g: "das" },
    { de: "der Arbeitgeber", ar: "صاحب العمل", g: "der" },
    { de: "der Arbeitnehmer", ar: "الموظف", g: "der" },
    { de: "die Erfahrung", ar: "الخبرة", g: "die" },
    { de: "das Präteritum", ar: "الماضي البسيط", g: "das" },
    { de: "das Plusquamperfekt", ar: "الماضي التام المركب", g: "das" },
    { de: "bevor / nachdem / als", ar: "قبل أن/بعد أن/عندما", g: "other" },
    { de: "das Gehalt", ar: "الراتب", g: "das" },
    { de: "die Stelle", ar: "الوظيفة/المنصب", g: "die" },
    { de: "kündigen", ar: "يستقيل/يفصل", g: "v" },
    { de: "der Kollege", ar: "الزميل", g: "der" },
    { de: "die Karriere", ar: "المسار المهني", g: "die" },
    { de: "die Fähigkeit", ar: "القدرة/المهارة", g: "die" },
  ],

  /* ── وحدة 3: البيئة ── */
  "b1-03": [
    { de: "die Umwelt", ar: "البيئة", g: "die" },
    { de: "der Klimawandel", ar: "تغير المناخ", g: "der" },
    { de: "der Müll", ar: "النفايات", g: "der" },
    { de: "recyceln", ar: "يعيد التدوير", g: "v" },
    { de: "die Energie", ar: "الطاقة", g: "die" },
    { de: "die Sonnenenergie", ar: "الطاقة الشمسية", g: "die" },
    { de: "das Passiv", ar: "المبني للمجهول", g: "das" },
    { de: "werden + Partizip II", ar: "يُفعل (مجهول)", g: "other" },
    { de: "wurde + Partizip II", ar: "فُعل (ماضٍ مجهول)", g: "other" },
    { de: "man", ar: "المرء (بديل مجهول)", g: "pron" },
    { de: "die Nachhaltigkeit", ar: "الاستدامة", g: "die" },
    { de: "der Klimaschutz", ar: "حماية المناخ", g: "der" },
    { de: "die Pflanze", ar: "النبتة", g: "die" },
    { de: "der Wald", ar: "الغابة", g: "der" },
    { de: "verschmutzen", ar: "يلوث", g: "v" },
  ],

  /* ── وحدة 4: الإعلام ── */
  "b1-04": [
    { de: "die Gesellschaft", ar: "المجتمع", g: "die" },
    { de: "die Meinung", ar: "الرأي", g: "die" },
    { de: "kritisch", ar: "نقدي", g: "adj" },
    { de: "der Konjunktiv II", ar: "صيغة الشرط", g: "der" },
    { de: "würde + Infinitiv", ar: "كنت سأفعل", g: "other" },
    { de: "wäre / hätte / könnte", ar: "كان سيكون/يملك/يستطيع", g: "v" },
    { de: "der Einfluss", ar: "التأثير", g: "der" },
    { de: "die Presse", ar: "الصحافة", g: "die" },
    { de: "berichten", ar: "يُخبر/يغطي (خبراً)", g: "v" },
    { de: "die Quelle", ar: "المصدر", g: "die" },
    { de: "der Journalist", ar: "الصحفي", g: "der" },
    { de: "die Schlagzeile", ar: "العنوان الرئيسي", g: "die" },
    { de: "objektiv", ar: "موضوعي", g: "adj" },
    { de: "die Wahrheit", ar: "الحقيقة", g: "die" },
    { de: "lügen", ar: "يكذب", g: "v" },
  ],

  /* ── وحدة 5: الصحة ── */
  "b1-05": [
    { de: "die Gesundheit", ar: "الصحة", g: "die" },
    { de: "die Prävention", ar: "الوقاية", g: "die" },
    { de: "die Bewegung", ar: "الحركة/النشاط", g: "die" },
    { de: "fit", ar: "لائق", g: "adj" },
    { de: "trainieren", ar: "يتدرب", g: "v" },
    { de: "hätte/wäre + Partizip II", ar: "كنت سأفعل (ماضٍ شرطي)", g: "v" },
    { de: "als ob", ar: "كما لو", g: "other" },
    { de: "die Süßigkeiten", ar: "الحلويات", g: "die" },
    { de: "der Stress", ar: "التوتر", g: "der" },
    { de: "entspannen", ar: "يسترخي", g: "v" },
    { de: "die Ernährung", ar: "التغذية", g: "die" },
    { de: "die Vorsorge", ar: "الفحص الوقائي", g: "die" },
    { de: "der Sportverein", ar: "النادي الرياضي", g: "der" },
    { de: "die Gewohnheit", ar: "العادة", g: "die" },
    { de: "das Immunsystem", ar: "جهاز المناعة", g: "das" },
  ],

  /* ── وحدة 6: الثقافة ── */
  "b1-06": [
    { de: "die Kultur", ar: "الثقافة", g: "die" },
    { de: "die Kunst", ar: "الفن", g: "die" },
    { de: "das Gemälde", ar: "اللوحة", g: "das" },
    { de: "der Maler", ar: "الرسام", g: "der" },
    { de: "das Museum", ar: "المتحف", g: "das" },
    { de: "die Adjektivdeklination", ar: "تصريف الصفات", g: "die" },
    { de: "wunderschön", ar: "رائع الجمال", g: "adj" },
    { de: "das Jahrhundert", ar: "القرن", g: "das" },
    { de: "die Ausstellung", ar: "المعرض", g: "die" },
    { de: "das Orchester", ar: "الأوركسترا", g: "das" },
    { de: "der Komponist", ar: "الملحن", g: "der" },
    { de: "das Werk", ar: "العمل الفني", g: "das" },
    { de: "berühmt", ar: "مشهور", g: "adj" },
    { de: "die Tradition", ar: "التقليد", g: "die" },
    { de: "der Brauch", ar: "العرف", g: "der" },
  ],

  /* ── وحدة 7: السياسة ── */
  "b1-07": [
    { de: "die Politik", ar: "السياسة", g: "die" },
    { de: "die Regierung", ar: "الحكومة", g: "die" },
    { de: "das Gesetz", ar: "القانون", g: "das" },
    { de: "die Wahl", ar: "الانتخاب", g: "die" },
    { de: "der Bürger", ar: "المواطن", g: "der" },
    { de: "als / wenn / während / bevor / nachdem / bis", ar: "أدوات الزمن", g: "other" },
    { de: "seitdem", ar: "منذ أن", g: "other" },
    { de: "die Demokratie", ar: "الديمقراطية", g: "die" },
    { de: "der Politiker", ar: "السياسي", g: "der" },
    { de: "das Parlament", ar: "البرلمان", g: "das" },
    { de: "die Partei", ar: "الحزب", g: "die" },
    { de: "demonstrieren", ar: "يتظاهر", g: "v" },
    { de: "die Freiheit", ar: "الحرية", g: "die" },
    { de: "die Gerechtigkeit", ar: "العدالة", g: "die" },
    { de: "wählen", ar: "ينتخب", g: "v" },
  ],

  /* ── وحدة 8: التقنية ── */
  "b1-08": [
    { de: "die Technik", ar: "التقنية", g: "die" },
    { de: "die Zukunft", ar: "المستقبل", g: "die" },
    { de: "die künstliche Intelligenz", ar: "الذكاء الاصطناعي", g: "die" },
    { de: "das Futur I", ar: "المستقبل (زمن)", g: "das" },
    { de: "nicht nur... sondern auch", ar: "ليس فقط بل أيضاً", g: "other" },
    { de: "weder... noch", ar: "لا... ولا", g: "other" },
    { de: "entweder... oder", ar: "إما... أو", g: "other" },
    { de: "sowohl... als auch", ar: "كلاهما", g: "other" },
    { de: "je... desto", ar: "كلما... كلما", g: "other" },
    { de: "die Entwicklung", ar: "التطور", g: "die" },
    { de: "das Handy", ar: "الهاتف المحمول", g: "das" },
    { de: "die App", ar: "التطبيق", g: "die" },
    { de: "der Datenschutz", ar: "حماية البيانات", g: "der" },
    { de: "die Digitalisierung", ar: "الرقمنة", g: "die" },
    { de: "der Roboter", ar: "الروبوت", g: "der" },
  ],

  /* ── وحدة 9: التطوع ── */
  "b1-09": [
    { de: "das Ehrenamt", ar: "العمل التطوعي", g: "das" },
    { de: "der Verein", ar: "الجمعية", g: "der" },
    { de: "die Spende", ar: "التبرع", g: "die" },
    { de: "das Mitglied", ar: "العضو", g: "das" },
    { de: "eine Frage stellen", ar: "يطرح سؤالاً", g: "v" },
    { de: "eine Entscheidung treffen", ar: "يتخذ قراراً", g: "v" },
    { de: "Bescheid sagen", ar: "يبلغ", g: "v" },
    { de: "die n-Deklination", ar: "تصريف n", g: "die" },
    { de: "der Student / den Studenten", ar: "الطالب (رفع/نصب)", g: "der" },
    { de: "ehrenamtlich", ar: "تطوعياً", g: "adj" },
    { de: "das Projekt", ar: "المشروع", g: "das" },
    { de: "unterstützen", ar: "يدعم", g: "v" },
    { de: "die Gemeinschaft", ar: "المجتمع المحلي", g: "die" },
    { de: "der Freiwillige", ar: "المتطوع", g: "der" },
    { de: "die Solidarität", ar: "التضامن", g: "die" },
  ],

  /* ── وحدة 10: المستقبل ── */
  "b1-10": [
    { de: "der Plan", ar: "الخطة", g: "der" },
    { de: "das Ziel", ar: "الهدف", g: "das" },
    { de: "sich bewerben", ar: "يتقدم (وظيفة/دراسة)", g: "v" },
    { de: "der Integrationskurs", ar: "دورة الاندماج", g: "der" },
    { de: "sich wünschen", ar: "يتمنى", g: "v" },
    { de: "die Chance", ar: "الفرصة", g: "die" },
    { de: "der Erfolg", ar: "النجاح", g: "der" },
    { de: "schaffen", ar: "ينجح في", g: "v" },
    { de: "entscheiden", ar: "يقرر", g: "v" },
    { de: "die Entscheidung", ar: "القرار", g: "die" },
    { de: "der Traum", ar: "الحلم", g: "der" },
    { de: "die Perspektive", ar: "المنظور/الفرصة", g: "die" },
    { de: "verbessern", ar: "يحسّن", g: "v" },
    { de: "erreichen", ar: "يحقق", g: "v" },
  ],
};

/** عدد كلمات B1 */
export const B1_VOCAB_COUNT = Object.values(B1_VOCAB).reduce(
  (sum, list) => sum + list.length,
  0,
);

/** كل مفردات B1 (مصفوفة مسطحة) */
export function getB1VocabAll(): VocabEntry[] {
  /* عدّاد فريد عبر المستويات (تدقيق نهائي 2026-08-12) */
  const lower = new Set([...getA1VocabAll(), ...getA2VocabAll()].map((w) => `${w.de}‖${w.ar}`));
  return [...Object.values(B1_VOCAB).flat(), ...B1_EXTRA_VOCAB, ...B1_EXTRA2_VOCAB].filter(
    (w) => !lower.has(`${w.de}‖${w.ar}`),
  );
}
