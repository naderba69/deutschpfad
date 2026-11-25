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
  { id: "sb-a1-5", level: "A1", words: ["Heute", "bleibe", "ich", "zu Hause"], correct: ["Heute", "bleibe", "ich", "zu", "Hause."], ar: "اليوم أبقى في البيت.", tip: "الفعل يبقى في المركز الثاني حتى لو بدأت الجملة بالظرف Heute." },
  { id: "sb-a1-6", level: "A1", words: ["Kaffee", "trinke", "ich", "jeden", "Morgen"], correct: ["Ich", "trinke", "jeden", "Morgen", "Kaffee."], ar: "أشرب القهوة كل صباح.", tip: "الفاعل Ich في المركز الأول، ثم الفعل trinke ثانياً، ثم بقية الجملة." },
  /* ── A2 — الأزمنة والجمل الثانوية ── */
  { id: "sb-a2-1", level: "A2", words: ["gestern", "bin", "nach Berlin", "ich", "gefahren"], correct: ["Gestern", "bin", "ich", "nach", "Berlin", "gefahren."], ar: "أمس سافرت إلى برلين.", tip: "Perfekt: الفعل المساعد في المركز الثاني والمشاركة في النهاية." },
  { id: "sb-a2-2", level: "A2", words: ["dass", "weiß", "er", "nicht", "kommt", "ich"], correct: ["Ich", "weiß", "nicht,", "dass", "er", "kommt."], ar: "لا أعرف أنه سيأتي.", tip: "dass: الفعل المصرّف في نهاية الجملة الثانوية." },
  { id: "sb-a2-3", level: "A2", words: ["weil", "bleibe", "ich", "es regnet", "zu Hause"], correct: ["Ich", "bleibe", "zu", "Hause,", "weil", "es", "regnet."], ar: "أبقى في البيت لأنها تمطر.", tip: "weil + فعل في النهاية. الجملة الثانوية بعدها." },
  { id: "sb-a2-4", level: "A2", words: ["mit", "der Bahn", "zur Arbeit", "fährt", "er"], correct: ["Er", "fährt", "mit", "der", "Bahn", "zur", "Arbeit."], ar: "يذهب إلى العمل بالقطار.", tip: "مع حروف الجر: mit + Dativ (der Bahn)." },
  { id: "sb-a2-5", level: "A2", words: ["ich", "gehe", "früh", "ins", "Bett", "weil", "müde", "bin", "ich"], correct: ["Ich", "gehe", "früh", "ins", "Bett,", "weil", "ich", "müde", "bin."], ar: "أذهب إلى السرير مبكراً لأنني متعب.", tip: "weil تُدخل جملة ثانوية: الفعل المصرّف (bin) يأتي في النهاية." },
  { id: "sb-a2-6", level: "A2", words: ["Gestern", "habe", "einen", "Film", "gesehen", "ich"], correct: ["Gestern", "habe", "ich", "einen", "Film", "gesehen."], ar: "أمس شاهدت فيلماً.", tip: "Perfekt مع haben: habe في المركز الثاني والمشاركة gesehen في النهاية." },
  { id: "sb-a2-7", level: "A2", words: ["aufstehen", "muss", "Morgen", "ich", "früh"], correct: ["Morgen", "muss", "ich", "früh", "aufstehen."], ar: "غداً يجب أن أستيقظ مبكراً.", tip: "الفعل الناقص (muss) في المركز الثاني، والمصدر المفصول aufstehen في النهاية." },
  /* ── B1 — تركيبات معقدة ── */
  { id: "sb-b1-1", level: "B1", words: ["obwohl", "müde", "er", "arbeitete", "war", "weiter", "er"], correct: ["Obwohl", "er", "müde", "war,", "arbeitete", "er", "weiter."], ar: "رغم أنه كان متعباً واصل العمل.", tip: "obwohl: جملة ثانوية أولاً (فعل في النهاية) ثم الجملة الرئيسية (الفعل أولاً)." },
  { id: "sb-b1-2", level: "B1", words: ["Wenn", "hätte", "Zeit", "ich", "mehr", "würde", "reisen", "ich"], correct: ["Wenn", "ich", "mehr", "Zeit", "hätte,", "würde", "ich", "reisen."], ar: "لو كان عندي وقت أكثر لسافرت.", tip: "Konjunktiv II: hätte في نهاية الشرط، würde + مصدر في الجواب." },
  { id: "sb-b1-3", level: "B1", words: ["wurde", "Das Haus", "vom", "Architekten", "entworfen"], correct: ["Das", "Haus", "wurde", "vom", "Architekten", "entworfen."], ar: "صمّم المهندس البيت.", tip: "مجهول: werden في المركز الثاني + Partizip II في النهاية." },
  { id: "sb-b1-4", level: "B1", words: ["die", "ich", "Firma", "arbeite", "in", "der", "sehr", "erfolgreich", "ist"], correct: ["Die", "Firma,", "in", "der", "ich", "arbeite,", "ist", "sehr", "erfolgreich."], ar: "الشركة التي أعمل فيها ناجحة جداً.", tip: "نسبية مع حرف جر: in der ich arbeite (الفعل في النهاية)." },
  { id: "sb-b1-5", level: "B1", words: ["trotzdem", "gehen", "wir", "spazieren", "es regnet"], correct: ["Es", "regnet,", "trotzdem", "gehen", "wir", "spazieren."], ar: "تمطر، ومع ذلك نخرج للتنزه.", tip: "trotzdem ظرف وليس أداة وصل: بعده مباشرة الفعل في المركز الثاني (gehen wir)." },
  { id: "sb-b1-6", level: "B1", words: ["ist", "dessen Auto", "kaputt", "wartet", "Der Mann"], correct: ["Der", "Mann", "wartet,", "dessen", "Auto", "kaputt", "ist."], ar: "ينتظر الرجل الذي سيارته معطلة.", tip: "dessen للمضاف إليه المذكر أو المحايد، والفعل المصرّف (ist) في نهاية الجملة الثانوية." },
  { id: "sb-b1-7", level: "B1", words: ["lerne", "Deutsch", "Seit zwei Jahren", "ich"], correct: ["Seit", "zwei", "Jahren", "lerne", "ich", "Deutsch."], ar: "منذ سنتين أتعلم الألمانية.", tip: "بعد Seit + Dativ يأتي الفعل ثانياً ثم الفاعل: lerne ich." },
  /* ── B2 — بنى متقدمة ── */
  { id: "sb-b2-1", level: "B2", words: ["indem", "lernt", "man", "man", "übt"], correct: ["Man", "lernt,", "indem", "man", "übt."], ar: "يتعلم المرء بالممارسة.", tip: "indem = طريقة (كيف؟) — فعل ثانوي في النهاية." },
  { id: "sb-b2-2", level: "B2", words: ["zu schlafen", "Anstatt", "arbeitete", "er", "weiter"], correct: ["Anstatt", "zu", "schlafen,", "arbeitete", "er", "weiter."], ar: "بدلاً من النوم واصل العمل.", tip: "anstatt...zu + مصدر في البداية، ثم الجملة الرئيسية (فعل أولاً)." },
  { id: "sb-b2-3", level: "B2", words: ["nicht", "Der Text", "übersetzen", "lässt", "sich"], correct: ["Der", "Text", "lässt", "sich", "nicht", "übersetzen."], ar: "لا يمكن ترجمة النص.", tip: "sich lassen + مصدر = بديل المجهول: lässt sich übersetzen." },
  { id: "sb-b2-4", level: "B2", words: ["Er", "sagt", "er", "keine", "Zeit", "habe"], correct: ["Er", "sagt,", "er", "habe", "keine", "Zeit."], ar: "يقول إنه لا وقت عنده.", tip: "Konjunktiv I للنقل: er habe keine Zeit (الفعل المصرّف بعد الضمير مباشرة)." },
  { id: "sb-b2-5", level: "B2", words: ["gehen", "Trotz des Regens", "wir", "spazieren"], correct: ["Trotz", "des", "Regens", "gehen", "wir", "spazieren."], ar: "رغم المطر نخرج للتنزه.", tip: "Trotz يأخذ Genitiv: des Regens، ثم الفعل ثانياً في الجملة الرئيسية." },
  { id: "sb-b2-6", level: "B2", words: ["mich", "Ich", "frage", "er", "ob", "kommt"], correct: ["Ich", "frage", "mich,", "ob", "er", "kommt."], ar: "أتساءل إن كان سيأتي.", tip: "ob في السؤال غير المباشر، والفعل المصرّف (kommt) في النهاية." },
];

export const SATZBAU_LEVELS: ("A1" | "A2" | "B1" | "B2")[] = ["A1", "A2", "B1", "B2"];

export function getPuzzlesByLevel(level: string): SatzbauPuzzle[] {
  return SATZBAU_PUZZLES.filter((p) => p.level === level);
}

export const TOTAL_SATZBAU = SATZBAU_PUZZLES.length;
