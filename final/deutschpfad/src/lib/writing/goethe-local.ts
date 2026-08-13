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

export function evaluateWriting(text: string, taskType = "Forumsbeitrag"): GoetheLocalResult {
  const clean = text.trim();
  const words = clean ? clean.split(/\s+/).length : 0;
  const paragraphs = clean ? clean.split(/\n\s*\n/).length : 0;

  // ── 1) Erfüllung: الطول والفقرات ──
  let erfuellung = 0;
  let erfuellungNote = "";
  if (words >= 150) { erfuellung = 5; erfuellungNote = "طول ممتاز لامتحان B2."; }
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
  const wortschatzNote = `تنويع مفردات ${Math.round(varietyRatio * 100)}%${kollosFound.length > 0 ? ` + كولوكيشنات: ${kollosFound.join("، ")}` : " — أضف كولوكيشنات B2 لرفع الدرجة (بنك العبارات في /redemittel)"}.`;

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

  const scores = [
    { name: "Erfüllung — إنجاز المهمة", score: erfuellung, note: erfuellungNote },
    { name: "Kohärenz — البنية والترابط", score: kohaerenz, note: kohaerenzNote },
    { name: "Wortschatz — المفردات", score: wortschatz, note: wortschatzNote },
    { name: "Struktur — القواعد", score: struktur, note: strukturNote },
  ];

  const pct = Math.round((scores.reduce((s, x) => s + x.score, 0) / 20) * 100);
  const verdict =
    pct >= 90 ? "Sehr gut — ممتاز!" : pct >= 75 ? "Gut — جيد جداً" : pct >= 60 ? "Bestanden — ناجح" : "Nicht bestanden — يحتاج مراجعة";

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
