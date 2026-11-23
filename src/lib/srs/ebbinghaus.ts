/**
 * ═══════════════════════════════════════════════════════════
 *  نموذج إبنغهاوس محلي (دوال نقية — بلا تخزين ولا شبكة)
 *
 *  الاحتفاظ:      R(t) = e^(ln(0.85) · t / S)
 *   · t: الأيام منذ آخر مراجعة · S: الاستقرار بالأيام
 *   · عند t = S يكون الاحتفاظ 85% بالضبط (تعريف S).
 *
 *  الدقة الفعلية: تُحسب من الإجابة المكتوبة بمسافة ليفنشتاين (تطبيع الحروف)،
 *   لا من ضغط زر تقييم ذاتي. عقوبة تلقائية إن كانت المادة (der/die/das)
 *   خاطئة أو ناقصة.
 *
 *  الفشل (lapse): دقة < 70% ⇒ إعادة الجدولة خلال 10 دقائق.
 *  النجاح: يكبر الاستقرار حسب الدقة ومعامل السهولة وحسب مدة الانتظار
 *   (التباعد: كلما انتظرت أكثر قبل المراجعة نما S أكثر، بحد أدنى 0.3 من S).
 *
 *  وضع الامتحان المكثّف: احتفاظ مستهدف 90% وأقصى فاصل 3 أيام.
 * ═══════════════════════════════════════════════════════════
 */

import {normalizeGermanText} from "@/lib/speech/scoring";
import {DEFAULT_EASE, MAX_INTERVAL_DAYS, type Sm2CardData} from "@/types/srs";

export const DAY_MS = 24 * 60 * 60 * 1000;
export const MINUTE_MS = 60 * 1000;

/** نقطة الاحتفاظ التي يُعرَّف عندها الاستقرار S */
export const RETENTION_AT_S = 0.85;
const LN_RETENTION = Math.log(RETENTION_AT_S);

/** دقة أقل من هذا الحد = فشل (lapse) */
export const LAPSE_THRESHOLD = 0.7;
/** إعادة الجدولة بعد الفشل */
export const LAPSE_RESCHEDULE_MS = 10 * MINUTE_MS;
/** خصم الدقة عند خطأ المادة أو نقصها */
export const ARTICLE_PENALTY = 0.35;
/** حد أدنى لتأثير التباعد على نمو الاستقرار */
const MIN_SPACING = 0.3;
/** الاستقرار الابتدائي (يوم) */
const INITIAL_STABILITY = 1;
/** حد أدنى للاستقرار بعد الفشل (يوم) */
const MIN_STABILITY = 0.5;
/** الاستقرار المعتمد لبطاقات قديمة بلا فاصل مسجّل */
const LEGACY_MIN_STABILITY = 0.5;

export const MODEL_ID = "ebbinghaus-v1" as const;

/* ── سياسة الجدولة ─────────────────────────────────────── */

export interface RetentionPolicy {
  /** الاحتفاظ المستهدف عنده تُجدول المراجعة */
  target: number;
  /** أقصى فاصل بالأيام */
  maxIntervalDays: number;
}

export const NORMAL_POLICY: RetentionPolicy = {target: 0.85, maxIntervalDays: MAX_INTERVAL_DAYS};
export const EXAM_POLICY: RetentionPolicy = {target: 0.9, maxIntervalDays: 3};

export function policyFor(examMode: boolean): RetentionPolicy {
  return examMode ? EXAM_POLICY : NORMAL_POLICY;
}

/* ── المعادلات ─────────────────────────────────────────── */

/** الاحتفاظ المتوقع بعد t يوماً باستقرار S */
export function retention(tDays: number, stabilityDays: number): number {
  if (tDays <= 0) return 1;
  const s = Math.max(stabilityDays, 1e-6);
  return Math.exp((LN_RETENTION * tDays) / s);
}

/** الفاصل (بالأيام) الذي يصل عنده الاحتفاظ إلى الهدف */
export function intervalForRetention(stabilityDays: number, target: number): number {
  const t = (stabilityDays * Math.log(target)) / LN_RETENTION;
  return Math.max(0, t);
}

/** مسافة ليفنشتاين (تحرير بالحروف) — محلية لأن scoring.ts لا تصدّرها */
export function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  let prev = Array.from({length: n + 1}, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
    }
    prev = cur;
  }
  return prev[n];
}

/** تشابه نصّين بمسافة ليفنشتاين: 1 = متطابقان، 0 = لا شيء مشترك */
export function similarity(a: string, b: string): number {
  const x = normalizeGermanText(a);
  const y = normalizeGermanText(b);
  const longest = Math.max(x.length, y.length);
  if (longest === 0) return 1;
  return Math.max(0, 1 - levenshtein(x, y) / longest);
}

const ARTICLES = ["der", "die", "das"] as const;
export type Article = (typeof ARTICLES)[number];

/** فصل المادة عن الكلمة: «der Mann» ⇒ {article: der, word: Mann} */
export function splitArticle(text: string): {article?: Article; word: string} {
  const t = text.trim();
  const m = /^(der|die|das)\s+(.+)$/i.exec(t);
  if (!m) return {word: t};
  return {article: m[1].toLowerCase() as Article, word: m[2]};
}

export interface TypedGrade {
  /** الدقة النهائية 0..1 بعد العقوبة */
  accuracy: number;
  /** هل كانت المادة صحيحة؟ (true إذا لم تكن للبطاقة مادة) */
  articleOk: boolean;
  /** هل وقع فشل؟ */
  lapse: boolean;
}

/**
 * تقييم إجابة مكتوبة. `expected` قد يحمل المادة («die Zahl») أو لا («Zahl»).
 * إن لم تحمل البطاقة مادة لا تُعاقَب الإجابة على المادة.
 */
export function gradeTypedAnswer(typed: string, expected: string): TypedGrade {
  const exp = splitArticle(expected);
  const got = splitArticle(typed);

  if (normalizeGermanText(typed).length === 0) {
    return {accuracy: 0, articleOk: false, lapse: true};
  }

  let accuracy = similarity(got.word, exp.word);
  let articleOk = true;
  if (exp.article) {
    articleOk = got.article === exp.article;
    if (!articleOk) accuracy = Math.max(0, accuracy - ARTICLE_PENALTY);
  }
  return {accuracy, articleOk, lapse: accuracy < LAPSE_THRESHOLD};
}

/* ── الحالة والمراجعة ──────────────────────────────────── */

/** استقرار بطاقة (يشتق من الفاصل القديم إن لم يكن مسجّلاً) */
export function stabilityOf(card: Pick<Sm2CardData, "stability" | "interval" | "lastReview">): number {
  if (card.stability && card.stability > 0) return card.stability;
  if (card.lastReview === null) return INITIAL_STABILITY;
  return Math.max(LEGACY_MIN_STABILITY, card.interval || INITIAL_STABILITY);
}

/** الاحتفاظ الحالي للبطاقة الآن */
export function currentRetention(card: Sm2CardData, now: number): number {
  if (card.lastReview === null) return 1;
  const elapsedDays = (now - card.lastReview) / DAY_MS;
  return retention(elapsedDays, stabilityOf(card));
}

/** تحويل بطاقة SM-2 إلى نموذج إبنغهاوس دون تغيير موعدها */
export function toEbbinghausCard(card: Sm2CardData): Sm2CardData {
  if (card.srsModel === MODEL_ID) return card;
  return {
    ...card,
    srsModel: MODEL_ID,
    stability: stabilityOf(card),
  };
}

/**
 * معامل السهولة بصيغة SM-2 نفسها، لكن على دقة متصلة 0..5 (لا عدد صحيح فقط).
 * الحد الأدنى 1.3 كما في SM-2.
 */
export function easeAfter(ease: number, q: number): number {
  const d = 5 - q;
  return Math.max(1.3, ease + (0.1 - d * (0.08 + d * 0.02)));
}

/**
 * تطبيق مراجعة: تحديث الاستقرار والسهولة والموعد.
 * `accuracy` دقة الإجابة 0..1 (بعد العقوبة).
 */
export function applyEbbinghausReview(
  rawCard: Sm2CardData,
  accuracy: number,
  now: number,
  policy: RetentionPolicy,
): Sm2CardData {
  const card = toEbbinghausCard(rawCard);
  const a = Math.min(1, Math.max(0, accuracy));
  const q5 = a * 5;
  const ease = easeAfter(card.ease || DEFAULT_EASE, q5);
  const S = stabilityOf(card);
  const next: Sm2CardData = {
    ...card,
    ease,
    lastReview: now,
    qualitySum: card.qualitySum + Math.round(q5),
    qualityCount: card.qualityCount + 1,
  };

  if (a < LAPSE_THRESHOLD) {
    const newS = Math.max(MIN_STABILITY, S * 0.5);
    next.stability = newS;
    next.repetitions = 0;
    next.lapses = card.lapses + 1;
    next.interval = 1;
    next.due = now + LAPSE_RESCHEDULE_MS;
    return next;
  }

  // المراجعة الأولى الناجحة تثبّت الاستقرار الابتدائي (يوم)، ثم ينمو من الثانية
  let newS: number;
  if (card.lastReview === null) {
    newS = S;
  } else {
    const elapsedDays = (now - card.lastReview) / DAY_MS;
    const spacing = Math.min(1, Math.max(MIN_SPACING, elapsedDays / S));
    newS = Math.min(MAX_INTERVAL_DAYS, S * (1 + (ease - 1) * a * spacing));
  }

  const days = Math.min(
    policy.maxIntervalDays,
    Math.max(1, Math.round(intervalForRetention(newS, policy.target))),
  );
  next.stability = newS;
  next.repetitions = card.repetitions + 1;
  next.interval = days;
  next.due = now + days * DAY_MS;
  return next;
}
