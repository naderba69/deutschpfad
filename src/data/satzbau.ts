/**
 * ═══════════════════════════════════════════════════════════
 *  لعبة تركيب الجمل (Satzbau-Spiel) — A1 → B2
 *  ترتيب الكلمات المبعثرة في جملة صحيحة (قاعدة الفعل الثاني V2
 *  وترتيب الجمل الثانوية) — تحويل التمارين إلى لعبة ممتعة.
 * ═══════════════════════════════════════════════════════════
 */

export interface SatzbauPuzzle {
  id: string;
  level: "A1" | "A2" | "B1" | "B2";
  /** الكلمات/الوحدات المبعثرة (تُعرض عشوائياً) */
  words: string[];
  /** الجملة الصحيحة (وحدات مفصولة) */
  correct: string[];
  /** ترجمة عربية */
  ar: string;
  /** لماذا هذا الترتيب؟ (قاعدة) */
  tip: string;
}

export const SATZBAU_PUZZLES: SatzbauPuzzle[] = [
  /* ── A1 — الجملة البسيطة V2 ── */
  { id: "sb-a1-1", level: "A1", words: ["ich", "aus", "Tunis", "komme"], correct: ["Ich", "komme", "aus", "Tunis."], ar: "أنا من تونس.", tip: "الفعل في المركز الثاني دائماً: Ich komme…" },
  { id: "sb-a1-2", level: "A1", words: ["du", "heißt", "Wie", "?"], correct: ["Wie", "heißt", "du", "?"], ar: "ما اسمك؟", tip: "سؤال W: أداة الاستفهام أولاً ثم الفعل." },
  { id: "sb-a1-3", level: "A1", words: ["einen", "Ich", "Apfel", "esse"], correct: ["Ich", "esse", "einen", "Apfel."], ar: "آكل تفاحة.", tip: "الفاعل ← الفعل ← المفعول (النصب einen)." },
  { id: "sb-a1-4", level: "A1", words: ["am", "Montag", "gehe", "ich", "ins", "Kino"], correct: ["Am Montag", "gehe", "ich", "ins", "Kino."], ar: "الاثنين أذهب للسينما.", tip: "عند بدء الجملة بظرف زمان: الفعل يبقى ثانياً (gehe)." },
  /* ── A2 — الأزمنة والجمل الثانوية ── */
  { id: "sb-a2-1", level: "A2", words: ["gestern", "bin", "nach Berlin", "ich", "gefahren"], correct: ["Gestern", "bin", "ich", "nach", "Berlin", "gefahren."], ar: "أمس سافرت إلى برلين.", tip: "Perfekt: الفعل المساعد في المركز الثاني والمشاركة في النهاية." },
  { id: "sb-a2-2", level: "A2", words: ["dass", "weiß", "er", "nicht", "kommt", "ich"], correct: ["Ich", "weiß", "nicht,", "dass", "er", "kommt."], ar: "لا أعرف أنه سيأتي.", tip: "dass: الفعل المصرّف في نهاية الجملة الثانوية." },
  { id: "sb-a2-3", level: "A2", words: ["weil", "bleibe", "ich", "es regnet", "zu Hause"], correct: ["Ich", "bleibe", "zu", "Hause,", "weil", "es", "regnet."], ar: "أبقى في البيت لأنها تمطر.", tip: "weil + فعل في النهاية. الجملة الثانوية بعدها." },
  { id: "sb-a2-4", level: "A2", words: ["mit", "der Bahn", "zur Arbeit", "fährt", "er"], correct: ["Er", "fährt", "mit", "der", "Bahn", "zur", "Arbeit."], ar: "يذهب إلى العمل بالقطار.", tip: "مع حروف الجر: mit + Dativ (der Bahn)." },
  /* ── B1 — تركيبات معقدة ── */
  { id: "sb-b1-1", level: "B1", words: ["obwohl", "müde", "er", "arbeitete", "war", "weiter", "er"], correct: ["Obwohl", "er", "müde", "war,", "arbeitete", "er", "weiter."], ar: "رغم أنه كان متعباً واصل العمل.", tip: "obwohl: جملة ثانوية أولاً (فعل في النهاية) ثم الجملة الرئيسية (الفعل أولاً)." },
  { id: "sb-b1-2", level: "B1", words: ["Wenn", "hätte", "Zeit", "ich", "mehr", "würde", "reisen", "ich"], correct: ["Wenn", "ich", "mehr", "Zeit", "hätte,", "würde", "ich", "reisen."], ar: "لو كان عندي وقت أكثر لسافرت.", tip: "Konjunktiv II: hätte في نهاية الشرط، würde + مصدر في الجواب." },
  { id: "sb-b1-3", level: "B1", words: ["wurde", "Das Haus", "vom", "Architekten", "entworfen"], correct: ["Das", "Haus", "wurde", "vom", "Architekten", "entworfen."], ar: "صُمم البيت من المهندس.", tip: "مجهول: werden في المركز الثاني + Partizip II في النهاية." },
  { id: "sb-b1-4", level: "B1", words: ["die", "ich", "Firma", "arbeite", "in", "der", "sehr", "erfolgreich", "ist"], correct: ["Die", "Firma,", "in", "der", "ich", "arbeite,", "ist", "sehr", "erfolgreich."], ar: "الشركة التي أعمل فيها ناجحة جداً.", tip: "نسبية مع حرف جر: in der ich arbeite (الفعل في النهاية)." },
  /* ── B2 — بنى متقدمة ── */
  { id: "sb-b2-1", level: "B2", words: ["indem", "lernt", "man", "man", "übt"], correct: ["Man", "lernt,", "indem", "man", "übt."], ar: "يتعلم المرء بالممارسة.", tip: "indem = طريقة (كيف؟) — فعل ثانوي في النهاية." },
  { id: "sb-b2-2", level: "B2", words: ["zu schlafen", "Anstatt", "arbeitete", "er", "weiter"], correct: ["Anstatt", "zu", "schlafen,", "arbeitete", "er", "weiter."], ar: "بدلاً من النوم واصل العمل.", tip: "anstatt...zu + مصدر في البداية، ثم الجملة الرئيسية (فعل أولاً)." },
  { id: "sb-b2-3", level: "B2", words: ["nicht", "Der Text", "übersetzen", "lässt", "sich"], correct: ["Der", "Text", "lässt", "sich", "nicht", "übersetzen."], ar: "لا يمكن ترجمة النص.", tip: "sich lassen + مصدر = بديل المجهول: lässt sich übersetzen." },
  { id: "sb-b2-4", level: "B2", words: ["Er", "sagt", "er", "keine", "Zeit", "habe"], correct: ["Er", "sagt,", "er", "habe", "keine", "Zeit."], ar: "يقول إنه لا وقت عنده.", tip: "Konjunktiv I للنقل: er habe keine Zeit (الفعل المصرّف بعد الضمير مباشرة)." },
];

export const SATZBAU_LEVELS: ("A1" | "A2" | "B1" | "B2")[] = ["A1", "A2", "B1", "B2"];

export function getPuzzlesByLevel(level: string): SatzbauPuzzle[] {
  return SATZBAU_PUZZLES.filter((p) => p.level === level);
}

export const TOTAL_SATZBAU = SATZBAU_PUZZLES.length;
