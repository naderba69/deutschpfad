import {describe, expect, it} from "vitest";

import {lessonA101} from "./a1-01";

const lesson = lessonA101;
const JSON_TEXT = JSON.stringify(lesson);

function knownTaskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) ids.add(`practice:${lesson.id}:${task.id}`);
  for (const task of lesson.miniTest) ids.add(`mini-test:${lesson.id}:${task.id}`);
  for (const task of lesson.writing) ids.add(`writing:${lesson.id}:${task.id}`);
  if (lesson.reading) {
    for (const task of lesson.reading.questions) ids.add(`reading:${lesson.reading.id}:${task.id}`);
  }
  return ids;
}

describe("A1-01 — التعارف والتحيات", () => {
  it("لا تظهر نسبة إحصائية غير مسندة عن الأفعال المنتظمة", () => {
    expect(JSON_TEXT).not.toMatch(/90%/);
  });

  it("تنطيق w وGuten Tag يطابق الدروس السابقة (w = ڤ، والـ g النهائية تُهمس)", () => {
    const wie = lesson.pronunciation.items.find((item) => item.de === "wie");
    const woher = lesson.pronunciation.items.find((item) => item.de === "woher");
    const guten = lesson.pronunciation.items.find((item) => item.de === "Guten Tag");
    expect(wie?.note).toContain("الحرف w");
    expect(woher?.note.startsWith("ڤ")).toBe(true);
    expect(guten?.note).toContain("غوتن تاك");
  });

  it("لا تُكتب أسئلة W كأنها سبعة فقط، لأن الدرس يعرض أدوات أكثر", () => {
    expect(JSON_TEXT).not.toMatch(/حروف W السبعة/);
  });

  it("يتضمن مراجعة تراكمية قصيرة لما سبق تعلّمه في A1-00", () => {
    expect(lesson.review).toHaveLength(3);
    expect(lesson.review?.map((task) => task.id)).toEqual(["r1", "r2", "r3"]);
    expect(lesson.review?.every((task) => task.instructionAr.includes("a1-00"))).toBe(true);
    expect(lesson.review?.[0]).toMatchObject({ type: "multiple-choice", correctIndex: 0 });
    expect(lesson.review?.[1]).toMatchObject({ type: "fill-blank", blanks: [{ correct: "ü" }] });
    expect(lesson.review?.[2]).toMatchObject({ type: "multiple-choice", options: ["Zeit", "Ziet", "Zeid", "Zeitt"] });
  });

  it("كل هدف مرتبط بمهام موجودة فعلاً ويحمل وصف أداء", () => {
    const known = knownTaskIds();
    for (const goal of lesson.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      for (const id of goal.evidence?.taskIds ?? []) {
        expect(known.has(id), `${goal.id} references missing ${id}`).toBe(true);
      }
      expect(goal.evidence?.labelAr.length ?? 0).toBeGreaterThan(20);
    }
  });

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة ضمن المدى", () => {
    for (const task of [...lesson.practiceBank, ...lesson.miniTest, ...(lesson.review ?? [])]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});
