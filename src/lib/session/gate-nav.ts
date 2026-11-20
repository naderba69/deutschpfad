/**
 * ═══════════════════════════════════════════════════════════
 *  هل يُسمح بفتح قسم الآن؟ — دالة نقية فوق بوابة المراحل (gate.ts)
 *
 *  القاعدة: القسم مفتوح إذا لم تكن مرحلته «مقفلة». المرحلة مقفلة إذا بقيت
 *  في مرحلة سابقة أقسام لم تُكمَل. التنقّل داخل المرحلة نفسها حرّ.
 * ═══════════════════════════════════════════════════════════
 */

import {canEnterStage, computeStageStates, currentStage} from "./gate";
import {SESSION_STAGES} from "./stages";

function stageOfSection(sectionId: string) {
  return SESSION_STAGES.find((s) => s.sectionIds.includes(sectionId)) ?? null;
}

export function canOpenSection(
  availableIds: readonly string[],
  completed: ReadonlySet<string>,
  sectionId: string,
): boolean {
  const stage = stageOfSection(sectionId);
  if (!stage) return false;
  const states = computeStageStates({availableSectionIds: availableIds, completedSectionIds: completed});
  return canEnterStage(stage.id, states);
}

/** رسالة توضح سبب القفل، أو null إن كان القسم مفتوحاً. */
export function lockMessageFor(
  availableIds: readonly string[],
  completed: ReadonlySet<string>,
  sectionId: string,
): string | null {
  if (canOpenSection(availableIds, completed, sectionId)) return null;
  const states = computeStageStates({availableSectionIds: availableIds, completedSectionIds: completed});
  const blocking = currentStage(states);
  const target = stageOfSection(sectionId);
  if (!blocking || !target) return null;
  return `أكمل أقسام «${blocking.stage.labelAr}» أولاً، ثم تنتقل إلى «${target.labelAr}».`;
}

/**
 * أقرب فهرس مفتوح يرجع إليه المتعلم من فهرس مقفول (آخر قسم مفتوح قبله).
 * يُستعمل حين يتبيّن بعد تحميل الإنجازات أن الفهرس المحفوظ أو المقصود مقفول.
 */
export function lastOpenIndex(
  availableIds: readonly string[],
  completed: ReadonlySet<string>,
  from: number,
): number {
  for (let k = Math.min(from, availableIds.length - 1); k >= 0; k--) {
    if (canOpenSection(availableIds, completed, availableIds[k])) return k;
  }
  return 0;
}
