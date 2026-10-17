/**
 * إعادة شحن القلوب بالمراجعة 💗
 * — ميكانيكية Duolingo: كل 3 بطاقات تُراجعها في صفحة البطاقات/المراجعة
 *   تعيد لك قلباً واحداً (بحد أقصى 5).
 * يُخزَّن العدّاد في LocalStorage ليقرأه الدرس عند عودتك.
 */

const REFILL_KEY = "dp:hearts-refill";
const REFILLS_PER_HEART = 3;

/** عدد المراجعات المتراكمة */
export function getRefillCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    const raw = localStorage.getItem(REFILL_KEY);
    const n = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

/** سجّل مراجعة جديدة (يُستدعى عند كل بطاقة مراجعة) */
export function addRefillReview(): number {
  const next = getRefillCount() + 1;
  try {
    localStorage.setItem(REFILL_KEY, String(next));
  } catch {
    /* تجاهل */
  }
  return next;
}

/**
 * حوّل المراجعات المتراكمة إلى قلوب مستعادة — بلا إهدار:
 * لا تستهلك شيئاً إن كانت القلوب ممتلئة (5)، ولا تستهلك إلا ما يسدّ النقص
 * (كل REFILLS_PER_HEART مراجعة = قلب واحد، والباقي يبقى متراكماً).
 * ترجع عدد القلوب المستعادة فعلياً (0 إن لم يُحتج إليها أو لم يكتمل مضاعف).
 */
export function consumeRefills(currentHearts = 5): number {
  if (currentHearts >= 5) return 0;
  const count = getRefillCount();
  if (count < REFILLS_PER_HEART) return 0;
  const needed = 5 - currentHearts;
  const groups = Math.floor(count / REFILLS_PER_HEART);
  const hearts = Math.min(needed, groups);
  const rest = count - hearts * REFILLS_PER_HEART;
  try {
    localStorage.setItem(REFILL_KEY, String(rest));
  } catch {
    /* تجاهل */
  }
  return hearts;
}

export { REFILLS_PER_HEART };
