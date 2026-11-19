/**
 * ═══════════════════════════════════════════════════════════
 *  بوابة الانتقال الصارمة بين مراحل الحصة (hard gate) — دالة نقية
 *
 *  القواعد:
 *  1. المرحلة «done» إذا أُكملت كل أقسامها المتوفرة في هذا الدرس.
 *  2. المرحلة «skipped» إذا لم يكن للدرس أي قسم من أقسامها (محتوى غير مكتوب)
 *     — لا تُحسب عائقاً، ولا يملك المتعلم تخطيها بإرادته.
 *  3. المرحلة «current» هي الأولى غير المكتملة؛ كل ما بعدها «locked».
 *  4. إكمال قسم = حدث إنجاز فعلي (تمرين محلول، اختبار مُرسَل…)،
 *     وليس مجرد «زيارة» القسم. الزيارة لا تكفي كدليل.
 * ═══════════════════════════════════════════════════════════
 */

import {SESSION_STAGES, type SessionStageDef, type SessionStageId} from "./stages";

export type StageState = "done" | "current" | "locked" | "skipped";

export interface StageStatus {
  stage: SessionStageDef;
  state: StageState;
  /** أقسام المرحلة المتوفرة فعلاً في هذا الدرس */
  presentSectionIds: string[];
  /** الأقسام المتوفرة التي لم تُكمَل بعد */
  pendingSectionIds: string[];
}

export interface GateInput {
  /** الأقسام المعروضة فعلاً لهذا الدرس (بعد تطبيق شروط الظهور) */
  availableSectionIds: readonly string[];
  /** الأقسام التي سُجّل لها حدث إنجاز */
  completedSectionIds: ReadonlySet<string>;
}

export function computeStageStates(input: GateInput): StageStatus[] {
  const available = new Set(input.availableSectionIds);
  const out: StageStatus[] = [];
  let blocked = false;

  for (const stage of SESSION_STAGES) {
    const present = stage.sectionIds.filter((id) => available.has(id));
    const pending = present.filter((id) => !input.completedSectionIds.has(id));

    let state: StageState;
    if (present.length === 0) {
      state = "skipped";
    } else if (blocked) {
      state = "locked";
    } else if (pending.length === 0) {
      state = "done";
    } else {
      state = "current";
      blocked = true;
    }

    out.push({stage, state, presentSectionIds: present, pendingSectionIds: pending});
  }
  return out;
}

/** هل يُسمح بفتح المرحلة الآن؟ (المرحلة الحالية أو المكتملة أو المتخطاة بسبب غياب المحتوى) */
export function canEnterStage(id: SessionStageId, states: readonly StageStatus[]): boolean {
  const s = states.find((x) => x.stage.id === id);
  return !!s && s.state !== "locked";
}

/** المرحلة التي يجب أن يعمل عليها المتعلم الآن، أو null إذا انتهت الحصة */
export function currentStage(states: readonly StageStatus[]): StageStatus | null {
  return states.find((s) => s.state === "current") ?? null;
}

/** هل انتهت الحصة؟ (لا توجد مرحلة حالية ولا مقفلة) */
export function isSessionComplete(states: readonly StageStatus[]): boolean {
  return states.every((s) => s.state === "done" || s.state === "skipped");
}
