/**
 * ═══════════════════════════════════════════════════════════
 *  كتابة إنجاز القسم في سجل الأحداث وقراءته (طبقة الإدخال/الإخراج)
 *  المنطق القرار في completion.ts — هنا فقط الاتصال بالتخزين.
 * ═══════════════════════════════════════════════════════════
 */

import {getAllEventsResult, recordEvent} from "@/lib/analytics/events";
import {completedSectionIds, decideSectionCompletion} from "./completion";

export type MarkSectionResult =
  | {status: "recorded"}
  | {status: "already-completed"}
  | {status: "unknown-section"}
  | {status: "failed"};

/**
 * يسجّل إنجاز قسم لدرس. يقرأ السجل أولاً لمنع التكرار؛ إن تعذّرت القراءة
 * لا يكتب (فلا نُدخل حدثاً لا نستطيع التحقق من تكراره).
 * ملاحظة: نداءان متزامنان قد يكتبان مرتين؛ المجموعة المشتقة تتجاهل التكرار.
 */
export async function markSectionCompleted(
  lessonId: string,
  sectionId: string,
): Promise<MarkSectionResult> {
  const read = await getAllEventsResult();
  if (!read.ok) return {status: "failed"};

  const decision = decideSectionCompletion(read.events, lessonId, sectionId);
  if (!decision.record) {
    return {status: decision.reason === "unknown-section" ? "unknown-section" : "already-completed"};
  }

  const saved = await recordEvent({type: "section-completed", lessonId, sectionId});
  return saved ? {status: "recorded"} : {status: "failed"};
}

/** المجموعة المكتملة لدرس، أو فشل صريح عند تعذر القراءة. */
export async function loadCompletedSections(
  lessonId: string,
): Promise<{ok: true; ids: Set<string>} | {ok: false; ids: Set<string>}> {
  const read = await getAllEventsResult();
  if (!read.ok) return {ok: false, ids: new Set()};
  return {ok: true, ids: completedSectionIds(read.events, lessonId)};
}
