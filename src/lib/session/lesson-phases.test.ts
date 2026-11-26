import {describe, expect, it} from "vitest";

import {LESSON_PHASES, lessonPhaseOfSection} from "./lesson-phases";
import {SESSION_STAGES} from "./stages";

describe("مراحل الدرس الأربع", () => {
  it("تغطي كل مرحلة من المراحل العشر مرة واحدة فقط", () => {
    const stageIds = LESSON_PHASES.flatMap((p) => [...p.stageIds]);
    expect(new Set(stageIds).size).toBe(stageIds.length);
    expect([...stageIds].sort()).toEqual(SESSION_STAGES.map((s) => s.id).sort());
  });

  it("تحافظ على الترتيب الأكاديمي للمراحل", () => {
    const stageIds = LESSON_PHASES.flatMap((p) => [...p.stageIds]);
    expect(stageIds).toEqual(SESSION_STAGES.map((s) => s.id));
  });

  it("تُسند كل أقسام الدرس إلى مجموعة واحدة", () => {
    for (const stage of SESSION_STAGES) {
      for (const sectionId of stage.sectionIds) {
        expect(lessonPhaseOfSection(sectionId), sectionId).toBeDefined();
      }
    }
  });

  it("تُعطي أسماء عربية فريدة للمجموعات الأربع", () => {
    expect(LESSON_PHASES).toHaveLength(4);
    expect(new Set(LESSON_PHASES.map((p) => p.labelAr)).size).toBe(4);
  });

  it("لا تُسند معرّفاً غير معروف", () => {
    expect(lessonPhaseOfSection("unknown-section")).toBeUndefined();
  });
});
