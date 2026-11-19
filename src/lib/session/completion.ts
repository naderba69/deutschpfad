/**
 * ═══════════════════════════════════════════════════════════
 *  إنجاز الأقسام — اشتقاق نقي من سجل الأحداث التحليلي
 *
 *  لا يُخزَّن «المكتمل» في مكان منفصل: الحقيقة هي أحداث `section-completed`
 *  في سجل الأحداث، والمجموعة المكتملة تُشتق منها. بهذا تتبع الإنجاز النمط
 *  نفسه المستخدم لأدلة الأهداف (goal-evidence): الفتح والعرض ليسا دليلاً.
 * ═══════════════════════════════════════════════════════════
 */

import type {AnalyticsEvent} from "@/types/analytics";
import {sectionIdsOfStages} from "./stages";

/** الأقسام المعروفة للحصة فقط؛ أي معرّف آخر في السجل يُتجاهل. */
const KNOWN_SECTION_IDS: ReadonlySet<string> = new Set(sectionIdsOfStages());

/** مجموعة الأقسام المكتملة لدرس معيّن، مشتقة من الأحداث. */
export function completedSectionIds(
  events: readonly AnalyticsEvent[],
  lessonId: string,
): Set<string> {
  const done = new Set<string>();
  for (const ev of events) {
    if (ev.type !== "section-completed") continue;
    if (ev.lessonId !== lessonId) continue;
    if (!KNOWN_SECTION_IDS.has(ev.sectionId)) continue;
    done.add(ev.sectionId);
  }
  return done;
}

export type CompletionDecision =
  | {record: true}
  | {record: false; reason: "unknown-section" | "already-completed"};

/** هل يجب تسجيل إنجاز جديد؟ (التسجيل المتكرر لا يضيف شيئاً، فنمنعه من البداية) */
export function decideSectionCompletion(
  events: readonly AnalyticsEvent[],
  lessonId: string,
  sectionId: string,
): CompletionDecision {
  if (!KNOWN_SECTION_IDS.has(sectionId)) return {record: false, reason: "unknown-section"};
  if (completedSectionIds(events, lessonId).has(sectionId)) {
    return {record: false, reason: "already-completed"};
  }
  return {record: true};
}
