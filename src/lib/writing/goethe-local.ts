/**
 * ═══════════════════════════════════════════════════════════
 *  مقيّم الكتابة المحلي (Rule-based) — بمعايير Goethe المبسطة
 *  يعمل بالكامل دون مفاتيح LLM:
 *  1) Erfüllung  — الطول وعدد الفقرات (هل أنجزت المهمة؟)
 *  2) Kohärenz   — الروابط النصية (Redemittel) وبنية الفقرات
 *  3) Wortschatz — تنويع المفردات + كولوكيشنات B2
 *  4) Struktur   — فحص أخطاء نحوية شائعة آلية
 *  (المقيّم الذكي LLM الأعمق في /ai-tools يكمل هذا عند توفر المفاتيح)
 * ═══════════════════════════════════════════════════════════
 */

export interface GoetheLocalResult {
  scores: { name: string; score: number; note: string }[];
  pct: number;
  verdict: string;
  words: number;
  paragraphs: number;
  connectorsFound: string[];
  errors: { wrong: string; right: string; note: string }[];
  recommendation: string;
}

/** روابط نصية تُحسب لمعيار الترابط (Kohärenz) */
const CONNECTORS = [
  "Meiner Meinung nach", "meiner Meinung nach", "meiner Ansicht nach", "Ich finde",
  "Einerseits", "andererseits", "Außerdem", "Darüber hinaus", "Zum Beispiel", "zum Beispiel",
  "Zusammenfassend", "zusammenfassend", "Deshalb", "deshalb", "Trotzdem", "trotzdem",
  "Im Gegensatz dazu", "Erstens", "zweitens", "drittens", "Schließlich", "schließlich",
  "In meinem Land", "Man sollte", "Man könnte", "Es wäre sinnvoll", "Ich empfehle",
  "Einerseits", "Abschließend", "Denn", "denn", "weil", "Wenn", "wenn", "Obwohl", "obwohl",
];

/** كولوكيشنات B2 تُحتسب لمعيار المفردات */
const KOLLOS = [
  "eine Rolle spielen", "eine Entscheidung treffen", "Maßnahmen ergreifen",
  "zur Verfügung stellen", "in Betracht ziehen", "Wert legen auf",
  "einen Beitrag leisten", "eine Erfahrung sammeln", "zum Ausdruck bringen",
  "Rücksicht nehmen", "in Kauf nehmen", "Bescheid geben", "auf dem Laufenden",
];

// ═══════════════════════════════════════════════════════════════════════
//  قواعد الأخطاء الشائعة — كل نمط مُقاس على كوربوس المنصة
//  (src/lib/writing/__fixtures__/german-corpus.ts: 4152 جملة ألمانية سليمة
//   مستخرجة من دروس المنصة نفسها). قاعدة بميزانية صفرية من الإيجابيات
//   الكاذبة — أي نمط يُضاف هنا يجب أن يبقى صفره، والحرس في
//   goethe-local.test.ts يمنع أي تراجع.
// ═══════════════════════════════════════════════════════════════════════

/** كلمات تقع بعد أداة التعريف لكنها ليست أسماء — بيتّ/فعل/حرف/صفة.
 *  مُستخرجة بالقياس على الكوربوس (bitte 9×, fremde 2×, alter/stand/bekannte/für 1×). */
const NOT_A_NOUN = new Set([
  "bitte", "stand", "für", "alter", "fremde", "bekannte",
  "andere", "anderen", "anderes", "neue", "neuen", "alte", "alten", "erste", "ersten",
  "letzte", "letzten", "nächste", "nächsten", "ganze", "ganzen", "gleiche", "gleichen",
  "viele", "vielen", "wenige", "mehrere", "beide", "beiden", "diese", "diesen", "dieser",
]);

/** أسماء تدخل في تركيب «... nach» (حرف جر مؤخّر) — فلا تليها حالة النصب الخاطئة */
const POSTPOSITION_NOUNS = new Set([
  "meinung", "ansicht", "sicht", "auffassung", "wahrscheinlichkeit", "angaben", "auskunft", "kenntnis", "erfahrung",
]);

/** كتابة بديلة شائعة عند غياب الأحرف الألمانية من لوحة المفاتيح */
const TRANSLITERATIONS = [
  "fuer", "ueber", "koennen", "konnen", "moechte", "moechten", "schoen", "moeglich",
  "muessen", "haette", "waehrend", "spaeter", "groesse", "strasse", "nuetzlich", "zurueck",
];

const PRONOUNS = "ich|du|er|sie|es|wir|ihr|man";
const AUX_EARLY = "bin|bist|ist|sind|seid|habe|hast|hat|haben|habt|kann|kannst|können|muss|musst|müssen|will|willst|wollen|soll|sollst|sollen|darf|darfst|dürfen|mag|magst|mögen|werde|wirst|wird|werden|würde|würden";
const INFINITIVE_TAIL = "müssen|können|wollen|sollen|dürfen|mögen|lassen|sehen|hören|werden|haben|sein|bleiben";
const ADVERB_STARTERS = "Danach|Dann|Deshalb|Trotzdem|Außerdem|Später|Zuerst";
/** أدوات تعريف/تنكير بكلمة واحدة — لفحص كتابة الأسماء بحرف صغير */
const ONE_WORD_DETERMINERS =
  "der|die|das|dem|den|des|ein|eine|einen|einem|eines|kein|keine|keinen|keinem|keiner|" +
  "mein|meine|meinen|meinem|dein|deine|sein|seine|seinen|ihr|ihre|ihren|unser|unsere|unseren";

interface RuleContext {
  /** جنس الاسم من قاموس المنصة (بالأحرف الصغيرة) — undefined لكلمة غير معروفة */
  genderOf: (word: string) => string | undefined;
}

interface Rule {
  id: string;
  test: (text: string, ctx: RuleContext) => boolean;
  wrong: string;
  right: string;
  note: string;
}

const COMMON_RULES: Rule[] = [
  {
    id: "komparativ-dass",
    // «als» هي الصواب بعد المقارنة. «das/dass» تُرصد هنا فقط حين يعقبها فاعل
    // (besser das du …) أو بصيغة dass — أما «mehr das Maß» و«mehr das Gefühl als»
    // فصحيحة ولا تُرصد.
    test: (t) =>
      /\b(besser|größer|kleiner|schneller|höher|jünger|älter|wichtiger|schöner|teurer|billiger|schwieriger|mehr|weniger)\s+dass\b/i.test(t) ||
      /\b(besser|größer|kleiner|schneller|höher|jünger|älter|wichtiger|schöner|teurer|billiger|schwieriger)\s+das\s+(?:du|ich|er|sie|es|wir|ihr|man|Sie)\b/i.test(t),
    wrong: "«dass» بعد صيغة مقارنة",
    right: "als",
    note: "بعد Komparativ نستخدم als لا dass: besser als (أفضل من).",
  },
  {
    id: "ich-haben-sein",
    test: (t) => /\bich\s+(haben|sein)\b/i.test(t),
    wrong: "الفعل بصيغة المصدر مع ich",
    right: "ich habe / ich bin",
    note: "مع ich يُصرَّف الفعل: ich habe (لا ich haben).",
  },
  {
    id: "artikel-genus",
    // نفحص فقط الحالتين غير الملتبستين بحالة الجر/الجمع:
    //   das + اسم مذكر/مؤنث  (لا يصحّ أبداً: das Mann)
    //   der + اسم محايد      (لا يصحّ أبداً: der Haus)
    // «der + مؤنث» تُترك (إعراب الجر: in der Stadt) و«die + مذكر/محايد» تُترك (جمع: die Lehrer).
    test: (t, ctx) => {
      for (const m of t.matchAll(/\b([Dd]er|[Dd]as)\s+([A-ZÄÖÜ][a-zäöüß-]{2,})\b/g)) {
        const expected = ctx.genderOf(m[2]);
        if (!expected) continue;
        if (m[1].toLowerCase() === "der" ? expected === "das" : expected !== "das") return true;
      }
      return false;
    },
    wrong: "أداة خاطئة",
    right: "تحقق من جنس الاسم",
    note: "راجع جنس الاسم في قاموس المنصة (der/die/das) — «Das Haus» لا «Der Haus».",
  },
  {
    id: "kein-feminin",
    test: (t, ctx) => {
      for (const m of t.matchAll(/\b(kein|keinen|keinem|keines)\s+([A-ZÄÖÜ][a-zäöüß-]{2,})\b/g)) {
        if (ctx.genderOf(m[2]) === "die") return true;
      }
      return false;
    },
    wrong: "kein في موضع خاطئ",
    right: "keine/keiner حسب الحالة",
    note: "مع المؤنث: keine (رفع/نصب)، keiner (جر): Ich habe keine Schwester.",
  },
  {
    id: "nach-dativ",
    test: (t, ctx) => {
      for (const m of t.matchAll(/\b[Nn]ach\s+([Dd]ie|[Dd]as)\s+([A-ZÄÖÜ][a-zäöüß-]{2,})\b/g)) {
        const before = t.slice(0, m.index).trim().split(/[\s,;:]+/).pop()?.toLowerCase() ?? "";
        if (POSTPOSITION_NOUNS.has(before)) continue;
        return true;
      }
      return false;
    },
    wrong: "حالة الجر بعد nach",
    right: "nach + Dativ (der/dem)",
    note: "nach بمعنى «بعد» تتبعها Dativ دائماً: nach der Schule، nach dem Essen.",
  },
  {
    id: "mit-dativ",
    test: (t, ctx) => {
      for (const m of t.matchAll(/\bmit\s+([Dd]er|[Dd]ie|[Dd]as)\s+([A-ZÄÖÜ][a-zäöüß-]{2,})\b/g)) {
        const gender = ctx.genderOf(m[2]);
        if (!gender) continue;
        const determiner = m[1].toLowerCase();
        if (determiner !== "der" || gender !== "die") return true;
      }
      return false;
    },
    wrong: "حالة الجر بعد mit",
    right: "mit + Dativ (dem/der)",
    note: "mit تتبعها Dativ دائماً: mit dem Auto، mit der Zeit.",
  },
  {
    id: "zu-um",
    test: (t) => /\bzu\s+(spät|früh|viel)\s+um\b/i.test(t),
    wrong: "«zu... um» غير مكتملة",
    right: "zu ... um ... zu",
    note: "التركيب الكامل: zu müde, um zu arbeiten (متعب جداً للعمل).",
  },
  {
    id: "transliteration",
    test: (t) => {
      const words = t.toLowerCase().match(/[a-zäöüß]+/g) ?? [];
      return words.some((w) => TRANSLITERATIONS.includes(w));
    },
    wrong: "كتابة الأحرف الألمانية بدون umlaut",
    right: "ä/ö/ü/ß",
    note: "اكتب moechte ← möchte و fuer ← für — الأحرف الـ umlaut جزء من الإملاء الصحيح.",
  },
  {
    id: "adverb-verbzweit",
    test: (t) => new RegExp(`\\b(?:${ADVERB_STARTERS})\\s+(?:${PRONOUNS})\\s+[a-zäöüß]`).test(t),
    wrong: "الفعل ليس في المرتبة الثانية",
    right: "الظرف + الفعل + الفاعل",
    note: "بعد ظرف زمني يأتي الفعل مباشرة: Danach zeige ich (لا Danach ich zeige).",
  },
  {
    id: "nebensatz-verbzweit",
    test: (t) => {
      const re = new RegExp(`\\b(?:weil|dass|wenn|obwohl|damit|ob)\\s+(?:${PRONOUNS})\\s+(${AUX_EARLY})\\s+([A-Za-zÄÖÜäöüß]+)`, "g");
      for (const m of t.matchAll(re)) {
        const after = m[2];
        const tail = t.slice(m.index + m[0].length - after.length);
        if (new RegExp(`^${after}\\s+(?:${INFINITIVE_TAIL})\\b`).test(tail)) continue;
        return true;
      }
      return false;
    },
    wrong: "الفعل مبكّر في الجملة التابعة",
    right: "الفعل في نهاية الجملة التابعة",
    note: "في الجملة التابعة يذهب الفعل المصرَّف إلى النهاية: weil ich krank bin (لا weil ich bin krank).",
  },
  {
    id: "seit-seid",
    test: (t) => /\bseid\s+(dem|der|einem|letztem|zwei|drei|Jahren|Monaten|langem)\b/i.test(t),
    wrong: "seid بدل seit",
    right: "seit (للزمن)",
    note: "seit تعني «منذُ» وتأتي مع الزمن: seit zwei Jahren — أما seid فهي تصريف sein (ihr seid).",
  },
  {
    id: "satzanfang-gross",
    test: (t) => {
      for (const m of t.matchAll(/([.!?])\s+([a-zäöüß]{2,})\b/g)) {
        const upto = t.slice(0, m.index + 1);
        if (upto.endsWith("..")) continue;
        if (/\b(?:z|u|d|sog|evtl|ggf|ca|bzw|Nr|Dr|Prof|Abs|St|vgl|usw|etc|max|min)\.$/.test(upto)) continue;
        return true;
      }
      return false;
    },
    wrong: "بداية الجملة بحرف صغير",
    right: "حرف كبير بعد نقطة/استفهام",
    note: "كل جملة ألمانية تبدأ بحرف كبير — حتى بعد النقطة أو علامة الاستفهام.",
  },
  {
    id: "kleinschreibung-nomen",
    test: (t, ctx) => {
      const re = new RegExp(`\\b(?:${ONE_WORD_DETERMINERS})\\s+([a-zäöüß]{3,})\\b`, "g");
      for (const m of t.matchAll(re)) {
        const token = m[1];
        if (NOT_A_NOUN.has(token)) continue;
        if (ctx.genderOf(token)) return true;
      }
      return false;
    },
    wrong: "اسم مكتوب بحرف صغير",
    right: "الأسماء الألمانية بحرف كبير",
    note: "كل الأسماء في الألمانية تبدأ بحرف كبير: Ich habe ein Auto (لا ein auto).",
  },
];

/** هل النص يفتح برسالة رسمية؟ */
function hasFormalOpening(text: string): boolean {
  return /Sehr geehrte/.test(text);
}
function hasFormalClosing(text: string): boolean {
  return /Mit freundlichen Grüßen/.test(text) || /Vielen Dank/.test(text) || /Zusammenfassend/.test(text);
}

/**
 * ═══ قاموس جنس الأسماء (يُبنى مرة واحدة) ═══
 * مصدران: قاموس الأجناس الموثوق (GENDERS) + حقل `g` في بنوك مفردات المنصة.
 * يُغذّي قواعد der/die/das و kein و mit/nach — وأي كلمة غير معروفة تُترك بلا حكم.
 */
let nounGenders: Map<string, string> | null = null;
async function getNounGenders(): Promise<Map<string, string>> {
  if (nounGenders) return nounGenders;
  const map = new Map<string, string>();
  try {
    const { GENDERS } = await import("@/data/vocabulary/genders");
    for (const [noun, article] of Object.entries(GENDERS)) {
      if (/^[A-ZÄÖÜ][a-zäöüß-]{2,}$/.test(noun)) map.set(noun.toLowerCase(), article);
    }
    const { getLevelVocab } = await import("@/data/vocabulary");
    for (const level of ["A1", "A2", "B1", "B2"] as const) {
      for (const entry of getLevelVocab(level) as unknown as { de: string; g?: string }[]) {
        const g = entry.g;
        if (g !== "der" && g !== "die" && g !== "das") continue;
        const noun = (entry.de ?? "").replace(/^(der|die|das)\s+/i, "").split(/\s+/)[0] ?? "";
        if (!/^[A-ZÄÖÜ][a-zäöüß-]{2,}$/.test(noun)) continue;
        if (!map.has(noun.toLowerCase())) map.set(noun.toLowerCase(), g);
      }
    }
  } catch {
    /* بلا قاموس: القواعد المعجمية تُترك بلا حكم (لا إيجابيات كاذبة) */
  }
  nounGenders = map;
  return map;
}

export async function evaluateWriting(text: string, taskType = "Forumsbeitrag", keywords: string[] = []): Promise<GoetheLocalResult> {
  const clean = text.trim();
  const words = clean ? clean.split(/\s+/).length : 0;
  const paragraphs = clean ? clean.split(/\n\s*\n/).length : 0;

  // ═══ T-01 (المرحلة 3): فرع «الترجمة العربية ← الألمانية» ═══
  // للترجمة: فحص الكلمات المفتاحية الألمانية المطلوبة (keywords) أهم من الطول.
  // تُمنح نقطة Erfüllung كاملة عند تغطية ≥ 80% من المفاتيح، وتُخفض مع النقص.
  const isTranslation = taskType === "Übersetzung";
  let keywordCoverage = 1; // نسبة المفاتيح الموجودة (1..0)
  if (isTranslation && keywords.length > 0) {
    const norm = clean.toLowerCase();
    const found = keywords.filter((k) => norm.includes(k.toLowerCase())).length;
    keywordCoverage = found / keywords.length;
  }

  // ── 1) Erfüllung: الطول والفقرات ──
  let erfuellung = 0;
  let erfuellungNote = "";
  if (isTranslation) {
    // الترجمة: جمل قصيرة (10-40 كلمة) — عتبات خاصة + تغطية المفاتيح
    if (keywords.length > 0 && keywordCoverage >= 0.8) { erfuellung = 5; erfuellungNote = `ترجمة دقيقة — غطيت ${Math.round(keywordCoverage * 100)}% من الكلمات المطلوبة.`; }
    else if (keywords.length > 0 && keywordCoverage >= 0.5) { erfuellung = 4; erfuellungNote = `ترجمة جيدة — لكن ${Math.round((1 - keywordCoverage) * 100)}% من الكلمات الأساسية ناقصة.`; }
    else if (keywords.length > 0 && keywordCoverage >= 0.3) { erfuellung = 3; erfuellungNote = `الترجمة جزئية — أعد قراءة الجملة العربية وغطِّ كل الأفكار المطلوبة.`; }
    else if (words >= 8) { erfuellung = 2; erfuellungNote = "الترجمة قصيرة/ناقصة — تأكد من نقل كل الجملة العربية."; }
    else { erfuellung = 1; erfuellungNote = "أدخل ترجمتك كاملة (بضع جمل على الأقل)."; }
  } else if (words >= 150) { erfuellung = 5; erfuellungNote = "طول ممتاز لامتحان B2."; }
  else if (words >= 120) { erfuellung = 4; erfuellungNote = "طول جيد — قريب من المطلوب (120-150 كلمة)."; }
  else if (words >= 80) { erfuellung = 3; erfuellungNote = "مقبول لكن قصير — وسّع بالأسباب والأمثلة."; }
  else if (words >= 40) { erfuellung = 2; erfuellungNote = "قصير جداً — أضف مقدمة وجسداً وخاتمة."; }
  else { erfuellung = 1; erfuellungNote = "النص قصير جداً — أكمل المهمة كاملة."; }
  if (taskType === "formelle E-Mail") {
    if (hasFormalOpening(text)) erfuellung = Math.min(5, erfuellung + 1);
    if (!hasFormalClosing(text)) erfuellung = Math.max(1, erfuellung - 1);
    erfuellungNote += hasFormalOpening(text) ? " تحية رسمية ✓." : " افتتاح رسمي (Sehr geehrte...) مطلوب للرسالة.";
  }

  // ── 2) Kohärenz: الروابط ──
  const connectorsFound = CONNECTORS.filter((c) => text.includes(c));
  let kohaerenz = 1;
  if (connectorsFound.length >= 4) kohaerenz = 5;
  else if (connectorsFound.length === 3) kohaerenz = 4;
  else if (connectorsFound.length === 2) kohaerenz = 3;
  else if (connectorsFound.length === 1) kohaerenz = 2;
  if (paragraphs >= 3) kohaerenz = Math.min(5, kohaerenz + 1);
  const kohaerenzNote = `وجدنا ${connectorsFound.length} رابطاً نصياً${paragraphs >= 3 ? " وبنية فقرات جيدة" : " — اقسم النص لفقرات (مقدمة/جسد/خاتمة)"}.`;

  // ── 3) Wortschatz: التنويع والكولوكيشنات ──
  const unique = new Set(clean.toLowerCase().replace(/[.,!?;:]/g, "").split(/\s+/)).size;
  const varietyRatio = words > 0 ? unique / words : 0;
  const kollosFound = KOLLOS.filter((k) => text.toLowerCase().includes(k));
  let wortschatz = 1;
  if (varietyRatio >= 0.65 && kollosFound.length >= 2) wortschatz = 5;
  else if (varietyRatio >= 0.6 || kollosFound.length >= 2) wortschatz = 4;
  else if (varietyRatio >= 0.55 || kollosFound.length === 1) wortschatz = 3;
  else if (varietyRatio >= 0.5) wortschatz = 2;
  let wortschatzNote = `تنويع مفردات ${Math.round(varietyRatio * 100)}%${kollosFound.length > 0 ? ` + كولوكيشنات: ${kollosFound.join("، ")}` : " — أضف كولوكيشنات B2 لرفع الدرجة (بنك العبارات في /redemittel)"}.`;

  // ── 4) Struktur: أخطاء آلية ──
  const errors: GoetheLocalResult["errors"] = [];
  const genders = await getNounGenders();
  const ruleContext: RuleContext = { genderOf: (word) => genders.get(word.toLowerCase()) };
  for (const rule of COMMON_RULES) {
    if (rule.test(clean, ruleContext)) {
      errors.push({ wrong: rule.wrong, right: rule.right, note: rule.note });
    }
  }
  let struktur = 5;
  if (errors.length >= 4) struktur = 1;
  else if (errors.length === 3) struktur = 2;
  else if (errors.length === 2) struktur = 3;
  else if (errors.length === 1) struktur = 4;
  const strukturNote = errors.length === 0
    ? "لا أخطاء شائعة آلية مكتشفة — ممتاز! (المقيّم الذكي أعمق عند توفر مفاتيح LLM)"
    : `رصدنا ${errors.length} خطأً شائعاً — راجعها بالأسفل واقرأ القاعدة في /grammatik.`;

  // ═══ C-03 (تدقيق 2026-08-15): فحص الدلالة — يمنع تمرير كلمات وهمية ═══
  // كانت النصوص الوهمية (81-165 كلمة مصطنعة) تحصل على 85-95% لأن المعايير
  // شكلية فقط (طول/تنويع). الآن: نسبة الكلمات المعروفة من بنوك مفردات المنصة
  // تُحسب — إن كانت < 35% يُخفض الحكم بشدة (نص على الأرجح غير ألماني/وهمي).
  const { knownRatio } = await computeKnownWordRatio(clean);
  let semanticPenalty = 0;
  let semanticNote = "";
  if (isTranslation) {
    // الترجمة القصيرة قد تحتوي كلمات متخصصة خارج البنوك — لا تطبق العقوبة الكبرى
    semanticPenalty = 0;
  }
  // العقوبة الكبرى للنصوص الطويلة فقط (النصوص الوهمية في التدقيق كانت 81-165 كلمة)
  if (words >= 40 && knownRatio < 0.35) {
    semanticPenalty = 3; // تخفيض 3/5 من الإجمالي
    semanticNote = " ⚠️ نسبة كبيرة من الكلمات غير معروفة في بنوك المنصة — تحقق أن النص ألماني فعلاً وليس كلمات مصطنعة.";
  } else if (words >= 20 && knownRatio < 0.5) {
    semanticPenalty = 1;
    semanticNote = " — بعض الكلمات غير مألوفة؛ راجع الإملاء والمفردات.";
  }
  if (semanticPenalty > 0) {
    erfuellung = Math.max(1, erfuellung - Math.min(2, semanticPenalty));
    wortschatz = Math.max(1, wortschatz - semanticPenalty);
    struktur = Math.max(1, struktur - Math.min(2, semanticPenalty));
    erfuellungNote += semanticNote;
    wortschatzNote += semanticNote;
  }

  const scores = [
    { name: "Erfüllung — إنجاز المهمة", score: erfuellung, note: erfuellungNote },
    { name: "Kohärenz — البنية والترابط", score: kohaerenz, note: kohaerenzNote },
    { name: "Wortschatz — المفردات", score: wortschatz, note: wortschatzNote },
    { name: "Struktur — القواعد", score: struktur, note: strukturNote },
  ];

  const pct = Math.round((scores.reduce((s, x) => s + x.score, 0) / 20) * 100);
  // ═══ W-03: قيم بسيطة متوافقة مع الواجهة (كانت تحوي لاحقة عربية فتفشل المقارنة) ═══
  const verdict =
    pct >= 90 ? "Sehr gut" : pct >= 75 ? "Gut" : pct >= 60 ? "Bestanden" : "Nicht bestanden";

  const recommendation =
    pct >= 90
      ? "مستواك ممتاز — انتقل لمحاكاة الامتحان الكامل في /tests/vollpruefung."
      : errors.length > 0
        ? `ركّز أولاً على الأخطاء الشائعة (${errors.length}) ثم أعد الكتابة — القواعد أساس كل شيء.`
        : connectorsFound.length < 3
          ? "زد عدد الروابط النصية (Meiner Meinung nach, Einerseits..., Zusammenfassend) — بنك العبارات في /redemittel."
          : "وسّع النص بالأمثلة والتفاصيل وزد الكولوكيشنات — ثم أعد التقييم لترى تقدمك.";

  return { scores, pct, verdict, words, paragraphs, connectorsFound, errors, recommendation };
}

/** كلمات وظيفية ألمانية شائعة — أساس قاموس الكلمات المعروفة (C-03) */
const COMMON_DE_WORDS: string[] = [
    "ich","du","er","sie","es","wir","ihr","Sie","mich","dich","mir","dir","uns","euch","sich",
    "der","die","das","den","dem","des","ein","eine","einen","einem","eines","kein","keine","keinen",
    "und","oder","aber","denn","doch","auch","nicht","kein","nur","sehr","viel","viele","wenig","wenige",
    "sein","ist","sind","bin","bist","war","waren","werden","wird","wurde","hat","haben","habe","hast",
    "kann","können","kannst","muss","müssen","will","wollen","darf","dürfen","soll","sollen","mag","mögen",
    "gehen","geht","gehe","kommen","kommt","komme","machen","macht","mache","sagen","sagt","sage",
    "wissen","weiß","weiß","glauben","glaube","denken","denke","finden","finde","findet","sehen","sehe","sieht",
    "gut","schlecht","groß","klein","neu","alt","schön","wichtig","richtig","falsch","viel","wenig",
    "zu","mit","nach","aus","bei","von","für","über","unter","an","auf","in","vor","hinter","neben","zwischen",
    "als","wie","wenn","weil","dass","ob","was","wer","wo","wann","warum","wie","wohin","woher",
    "heute","morgen","gestern","jetzt","dann","dort","hier","immer","oft","manchmal","nie","schon","noch",
    "man","Frau","Herr","Tag","Zeit","Menschen","Welt","Leben","Jahr","Jahre","Land","Stadt","Haus","Arbeit",
    "Probleme","Problem","Lösung","Möglichkeit","Frage","Antwort","Meinung","Beispiel","Teil","Grund",
    "muss","kann","sollte","würde","hätte","hätten","seinem","seiner","ihrem","ihrer","unserem","unserer",
    "bitte","danke","gern","gerne","natürlich","wirklich","eigentlich","zusammen","deshalb","trotzdem",
    "täglich","monatlich","wöchentlich","kurz","lang","lange","zuerst","danach","später","bald","endlich",
    "machen","haben","sein","werden","geben","gibt","gab","nehmen","nimmt","lassen","lässt","bringen","bringt",
  ];

/**
 * ═══ C-03: نسبة الكلمات المعروفة من بنوك مفردات المنصة ═══
 * (دالة نقية قابلة للاختبار — تُستخدم لكشف النصوص الوهمية/غير الألمانية)
 */
export async function computeKnownWordRatio(text: string): Promise<{ knownRatio: number; knownWords: string[] }> {
  const words = text.toLowerCase().replace(/[.,!?;:«»„“"'()\-]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return { knownRatio: 0, knownWords: [] };

  const dictionary = await getKnownWordDictionary();

  const knownWords = words.filter((w) => dictionary.has(w));
  const knownRatio = words.length > 0 ? knownWords.length / words.length : 0;
  return { knownRatio, knownWords };
}

/**
 * ═══ قاموس الكلمات المعروفة (يُبنى مرة واحدة) ═══
 * قاموس أساسي (كلمات وظيفية) + كل مداخل مفردات المنصة (الرئيسية من المدخل المركّب
 * وكل كلمات العبارة: «der Name» ← der/name، «kommen aus» ← kommen/aus).
 */
let knownWordDictionary: Set<string> | null = null;
async function getKnownWordDictionary(): Promise<Set<string>> {
  if (knownWordDictionary) return knownWordDictionary;
  const dictionary = new Set<string>(COMMON_DE_WORDS);
  try {
    const { getLevelVocab } = await import("@/data/vocabulary");
    for (const lvl of ["A1", "A2", "B1", "B2"] as const) {
      // getLevelVocab يعيد مصفوفة مسطّحة لكل المستوى (وليست كائن وحدات)
      for (const entry of getLevelVocab(lvl) as unknown as { de: string }[]) {
        for (const token of (entry.de ?? "").split(/[\s/,()«»„“"]+/)) {
          const lemma = token.toLowerCase().replace(/[.,!?;:]/g, "");
          if (lemma) dictionary.add(lemma);
        }
      }
    }
    knownWordDictionary = dictionary;
  } catch {
    /* عند فشل التحميل يبقى القاموس الأساسي فقط */
  }
  return dictionary;
}

