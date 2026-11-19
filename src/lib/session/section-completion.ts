/**
 * ═══════════════════════════════════════════════════════════
 *  كتابة إنجاز القسم في سجل الأحداث وقراءته (طبقة الإدخال/الإخراج)
 *  المنطق القرار في completion.ts — هنا فقط الاتصال بالتخزين.
 * ═══════════════════════════════════════════════════════════
 */

import {getAllEventsResult, recordEvent} from "@/lib/analytics/events";
import {completedSectionIds, decideSectionCompletion} from "./completion";
import {SECTION_PROOF} from "./stages";

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
  if (!saved) return {status: "failed"};
  // إعلام الصفحات المفتوحة (بوابة الدرس) بأن الإنجاز صار مسجّلاً
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(SECTION_COMPLETED_EVENT, {detail: {lessonId, sectionId}}));
  }
  return {status: "recorded"};
}

/** اسم الحدث الذي يُطلق بعد تسجيل إنجاز قسم (التفاصيل في `detail`). */
export const SECTION_COMPLETED_EVENT = "dp:section-completed";

/** المجموعة المكتملة لدرس، أو فشل صريح عند تعذر القراءة. */
export async function loadCompletedSections(
  lessonId: string,
): Promise<{ok: true; ids: Set<string>} | {ok: false; ids: Set<string>}> {
  const read = await getAllEventsResult();
  if (!read.ok) return {ok: false, ids: new Set()};
  return {ok: true, ids: completedSectionIds(read.events, lessonId)};
}

/**
 * عند الضغط على «التالي» من قسم يُثبت بالتأكيد (شرح/قراءة) نسجّل إنجازه.
 * أقسام التمارين لا تُسجَّل هنا؛ تسجّل نفسها عند ظهور نتيجتها الفعلية.
 * تعيد true إن كان القسم من أقسام التأكيد (فيُعدّ مُكتملاً محلياً فوراً).
 */
export function acknowledgeOnAdvance(lessonId: string, sectionId: string): boolean {
  if (SECTION_PROOF[sectionId] !== "acknowledge") return false;
  void markSectionCompleted(lessonId, sectionId).catch(() => undefined);
  return true;
}
