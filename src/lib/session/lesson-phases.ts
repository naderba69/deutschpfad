/**
 * ═══════════════════════════════════════════════════════════
 *  مراحل الدرس الأربع — تجميع عرضي فوق المراحل العشر
 *
 *  المراحل العشر في `stages.ts` هي التي تحدد التسلسل والبوابة.
 *  هذا الملف يجمعها في أربع مجموعات واضحة للعرض فقط (شريط الأقسام)،
 *  دون أن يغيّر أي فتح أو قفل. كل مرحلة من المراحل العشر تنتمي إلى
 *  مجموعة واحدة فقط — يحرسه `lesson-phases.test.ts`.
 * ═══════════════════════════════════════════════════════════
 */

import {SESSION_STAGES, type SessionStageId} from "./stages";

export type LessonPhaseId = "prep" | "understand" | "train" | "assess";

export interface LessonPhaseDef {
  id: LessonPhaseId;
  labelAr: string;
  stageIds: readonly SessionStageId[];
}

export const LESSON_PHASES: readonly LessonPhaseDef[] = [
  { id: "prep", labelAr: "التحضير", stageIds: ["ziele", "einstieg"] },
  { id: "understand", labelAr: "الفهم", stageIds: ["wortschatz", "grammatik", "hoeren-lesen"] },
  { id: "train", labelAr: "التدريب", stageIds: ["gezielte-uebungen", "produktion", "landeskunde"] },
  { id: "assess", labelAr: "التقييم", stageIds: ["lernkontrolle", "sicherung"] },
];

/** فهرس: معرّف القسم ← المجموعة التي ينتمي إليها (عبر مرحلته). */
export function lessonPhaseOfSection(sectionId: string): LessonPhaseDef | undefined {
  const stage = SESSION_STAGES.find((s) => s.sectionIds.includes(sectionId));
  if (!stage) return undefined;
  return LESSON_PHASES.find((p) => p.stageIds.includes(stage.id));
}
