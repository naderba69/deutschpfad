/**
 * ═══════════════════════════════════════════════════════════
 *  عرض الحصة — دالة نقية تربط المراحل بالأقسام وحالة الإنجاز
 *  لا تعرف شيئاً عن React أو التخزين: تستقبل مدخلات وتعيد بنية للعرض.
 * ═══════════════════════════════════════════════════════════
 */

import {computeStageStates, type StageState} from "./gate";
import {SECTION_PROOF, SESSION_TOTAL_MINUTES, type SectionProof, type SessionStageId} from "./stages";

export interface SessionViewInput {
  availableSectionIds: readonly string[];
  completedSectionIds: ReadonlySet<string>;
}

export interface SectionItem {
  sectionId: string;
  proof: SectionProof;
  completed: boolean;
  /** رابط فتح القسم داخل صفحة الدرس */
  href: string;
}

export interface StageItem {
  id: SessionStageId;
  labelAr: string;
  labelDe: string;
  purposeAr: string;
  minutes: number;
  state: StageState;
  sections: SectionItem[];
}

export interface SessionView {
  totalMinutes: number;
  stages: StageItem[];
  currentStageId: SessionStageId | null;
  complete: boolean;
}

export function sectionHref(lessonId: string, sectionId: string): string {
  return `/lesson/${lessonId}?section=${encodeURIComponent(sectionId)}`;
}

export function buildSessionView(lessonId: string, input: SessionViewInput): SessionView {
  const states = computeStageStates(input);
  const stages: StageItem[] = states.map((s) => ({
    id: s.stage.id,
    labelAr: s.stage.labelAr,
    labelDe: s.stage.labelDe,
    purposeAr: s.stage.purposeAr,
    minutes: s.stage.minutes,
    state: s.state,
    sections: s.presentSectionIds.map((sectionId) => ({
      sectionId,
      proof: SECTION_PROOF[sectionId] ?? "acknowledge",
      completed: input.completedSectionIds.has(sectionId),
      href: sectionHref(lessonId, sectionId),
    })),
  }));
  const current = stages.find((s) => s.state === "current") ?? null;
  return {
    totalMinutes: SESSION_TOTAL_MINUTES,
    stages,
    currentStageId: current?.id ?? null,
    complete: current === null && stages.every((s) => s.state === "done" || s.state === "skipped"),
  };
}
