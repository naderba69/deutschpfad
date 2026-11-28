import {describe, expect, it} from "vitest";

import type {SelfReviewRating} from "@/lib/lesson/self-review";
import type {LevelCode} from "@/types/curriculum";

import {
  SCALE_BANDS,
  SPEAKING_TASK,
  buildTaskScale,
  isWritingTaskType,
  type ScaleTaskType,
} from "./task-scales";

const LEVELS: LevelCode[] = ["A1", "A2", "B1", "B2"];
const TASK_TYPES: ScaleTaskType[] = ["Forumsbeitrag", "formelle E-Mail", "Meinung", "Übersetzung", SPEAKING_TASK];

describe("سلالم التدريب الذاتي حسب نوع المهمة (G-06 · البند 4)", () => {
  it("تُبنى لكل مستوى ونوع مهمة بأربعة معايير كاملة", () => {
    for (const level of LEVELS) {
      for (const taskType of TASK_TYPES) {
        const scale = buildTaskScale(level, taskType);
        expect(scale.level).toBe(level);
        expect(scale.taskType).toBe(taskType);
        expect(scale.rows.map((r) => r.id)).toEqual(["erfuellung", "kohaerenz", "wortschatz", "struktur"]);
        for (const row of scale.rows) {
          expect(row.levelExpectation.trim().length, `${level}/${taskType}/${row.id} توقع`).toBeGreaterThan(10);
          expect(row.taskCheck.trim().length, `${level}/${taskType}/${row.id} سؤال`).toBeGreaterThan(10);
          for (const band of SCALE_BANDS) {
            expect(row.bands[band.value].trim().length, `${taskType}/${row.id}/${band.value}`).toBeGreaterThan(5);
          }
        }
      }
    }
  });

  it("سؤال التحقق يختلف بين أنواع الكتابة في المعيار نفسه", () => {
    const checks = TASK_TYPES.map((t) => buildTaskScale("B1", t).rows[0].taskCheck);
    expect(new Set(checks).size).toBe(TASK_TYPES.length);
  });

  it("الخيارات الثلاثة مطابقة لخيارات المراجعة الذاتية في الدروس", () => {
    const fromScale = SCALE_BANDS.map((b) => b.value).sort();
    const fromSelfReview: SelfReviewRating[] = ["yes", "partly", "not-yet"];
    expect(fromScale).toEqual([...fromSelfReview].sort());
    expect(SCALE_BANDS.map((b) => b.label)).toEqual(["نعم", "جزئياً", "ليس بعد"]);
  });

  it("لا تحمل السلالم درجات رقمية، ويعلن الملخص أنها غير معتمدة", () => {
    for (const taskType of TASK_TYPES) {
      const scale = buildTaskScale("A2", taskType);
      for (const row of scale.rows) {
        for (const band of SCALE_BANDS) {
          expect(row.bands[band.value]).not.toMatch(/\d/);
        }
      }
      expect(scale.disclaimer).toMatch(/Goethe/);
      expect(scale.disclaimer).toMatch(/CEFR/);
    }
  });

  it("تعرّف أنواع الكتابة المعروفة فقط", () => {
    expect(isWritingTaskType("Meinung")).toBe(true);
    expect(isWritingTaskType("formelle E-Mail")).toBe(true);
    expect(isWritingTaskType(SPEAKING_TASK)).toBe(false);
    expect(isWritingTaskType("Essay")).toBe(false);
  });
});
