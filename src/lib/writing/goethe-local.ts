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

/** أخطاء شائعة قابلة للكشف الآلي (عربية المستخدمين) */
interface Rule {
  pattern: RegExp;
  wrong: string;
  right: string;
  note: string;
}
const COMMON_RULES: Rule[] = [
  { pattern: /\b(besser|größer|kleiner|mehr|weniger|schneller|höher|älter|jünger|wichtiger)\s+(das|dass)\b/i, wrong: "«das/dass» بعد صيغة مقارنة", right: "als", note: "بعد Komparativ نستخدم als لا dass: besser als (أفضل من)." },
  { pattern: /\bich\s+(haben|sein)\b/i, wrong: "الفعل بصيغة المصدر مع ich", right: "ich habe / ich bin", note: "مع ich يُصرَّف الفعل: ich habe (لا ich haben)." },
  { pattern: /\b(das|die|der)\s+(Mutter|Vater|Haus|Stadt)\s+ist\s+(gut|schön)\b/i, wrong: "أداة خاطئة", right: "تحقق من جنس الاسم", note: "راجع جنس الاسم في قاموس المنصة." },
  { pattern: /\bkein\s+(Auto|Buch|Haus)\b/i, wrong: "kein في موضع خاطئ", right: "keinen/keine حسب الحالة", note: "kein يتصرف مع الحالة: keinen (نصب مذكر)، keine (مؤنث/جمع)." },
  { pattern: /\bzu\s+(spät|früh|viel)\s+um\b/i, wrong: "«zu... um» غير مكتملة", right: "zu ... um ... zu", note: "التركيب الكامل: zu müde, um zu arbeiten (متعب جداً للعمل)." },
  { pattern: /\bmit\s+(der|die|das)\s+(Auto|Haus|Buch)\b/i, wrong: "حالة الجر بعد mit", right: "mit dem", note: "mit تتبعها Dativ دائماً: mit dem Auto." },
  { pattern: /\bnach\s+(der|die|das)\s+(Schule|Arbeit)\b/i, wrong: "nach + أداة معرفة", right: "nach der Schule (Dativ)", note: "nach هنا معناها «بعد» وتتبعها Dativ." },
];

/** هل النص يفتح برسالة رسمية؟ */
function hasFormalOpening(text: string): boolean {
  return /Sehr geehrte/.test(text);
}
function hasFormalClosing(text: string): boolean {
  return /Mit freundlichen Grüßen/.test(text) || /Vielen Dank/.test(text) || /Zusammenfassend/.test(text);
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
  for (const rule of COMMON_RULES) {
    if (rule.pattern.test(clean)) {
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

/**
 * ═══ C-03: نسبة الكلمات المعروفة من بنوك مفردات المنصة ═══
 * (دالة نقية قابلة للاختبار — تُستخدم لكشف النصوص الوهمية/غير الألمانية)
 */
export async function computeKnownWordRatio(text: string): Promise<{ knownRatio: number; knownWords: string[] }> {
  const words = text.toLowerCase().replace(/[.,!?;:«»„“"'()\-]/g, " ").split(/\s+/).filter(Boolean);
  if (words.length === 0) return { knownRatio: 0, knownWords: [] };

  // قاموس مرجعي: كل مداخل مفردات المنصة (lemma) + الكلمات الوظيفية الألمانية الشائعة
  const COMMON_DE: string[] = [
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
  let dictionary = new Set<string>(COMMON_DE);
  try {
    const { getLevelVocab } = await import("@/data/vocabulary");
    for (const lvl of ["A1", "A2", "B1", "B2"] as const) {
      const vocab = getLevelVocab(lvl) as unknown as Record<string, { de: string }[]>;
      for (const unit of Object.values(vocab)) {
        for (const entry of unit) {
          // lemma قبل أول مسافة (الكلمة الرئيسية من المدخل المركّب)
          const lemma = entry.de.split(/\s+/)[0]?.toLowerCase().replace(/[.,!?]/g, "");
          if (lemma) dictionary.add(lemma);
        }
      }
    }
  } catch {
    /* القاموس الفارغ يمنح نسبة 0 */
  }

  const knownWords = words.filter((w) => dictionary.has(w));
  const knownRatio = words.length > 0 ? knownWords.length / words.length : 0;
  return { knownRatio, knownWords };
}
