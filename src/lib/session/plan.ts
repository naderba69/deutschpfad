/**
 * ═══════════════════════════════════════════════════════════
 *  مُخطِّط الحصة — دالة نقية: من دفتر الأخطاء إلى مرحلة الاسترجاع
 *
 *  الحلقة البيداغوجية: الخطأ الذي سُجّل اليوم يعود في استرجاع الحصة التالية.
 *  - الأولوية للأخطاء المتكررة (count أعلى)، ثم الأقدم (lastAt أقدم) —
 *    لأن الخطأ القديم المتكرر أحوج إلى الاسترجاع من الخطأ الحديث.
 *  - وسم `mastered` اختياري من المتعلم، وهو «ليس دليلاً على الإتقان»
 *    (هكذا وُثّق في error-notebook)، لذا لا يُستبعد الخطأ، بل يُنزَل ترتيبه.
 * ═══════════════════════════════════════════════════════════
 */

import type {NotebookEntry} from "@/lib/storage/error-notebook";
import {SESSION_STAGES, SESSION_TOTAL_MINUTES} from "./stages";

/** أقصى عدد بنود في مرحلة الاسترجاع (≈ دقيقة ونصف للبند ضمن 10 دقائق) */
export const WARMUP_MAX_ITEMS = 6;

export interface SessionPlan {
  totalMinutes: number;
  stages: {id: string; labelAr: string; minutes: number}[];
  warmupItems: NotebookEntry[];
}

/** ترتيب بنود الاسترجاع وقصّها — دالة نقية ومحددة (حتمية عند التعادل) */
export function selectWarmupItems(
  entries: readonly NotebookEntry[],
  max: number = WARMUP_MAX_ITEMS,
): NotebookEntry[] {
  const sorted = [...entries].sort((a, b) => {
    const ma = a.mastered ? 1 : 0;
    const mb = b.mastered ? 1 : 0;
    if (ma !== mb) return ma - mb; // غير المُعلَّم أولاً
    if (a.count !== b.count) return b.count - a.count; // المتكرر أولاً
    if (a.lastAt !== b.lastAt) return a.lastAt - b.lastAt; // الأقدم أولاً
    return a.id.localeCompare(b.id);
  });
  return sorted.slice(0, Math.max(0, max));
}

export function buildSessionPlan(entries: readonly NotebookEntry[]): SessionPlan {
  const stages = SESSION_STAGES.map((s) => ({id: s.id, labelAr: s.labelAr, minutes: s.minutes}));
  const totalMinutes = stages.reduce((sum, s) => sum + s.minutes, 0);
  return {
    totalMinutes,
    stages,
    warmupItems: selectWarmupItems(entries),
  };
}

/** للتحقق من أن ميزانية المراحل تطابق مدة الحصة المعلنة */
export function stageBudgetMatches(): boolean {
  return SESSION_STAGES.reduce((sum, s) => sum + s.minutes, 0) === SESSION_TOTAL_MINUTES;
}
