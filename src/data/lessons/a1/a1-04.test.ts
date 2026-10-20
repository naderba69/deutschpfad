import {describe, expect, it} from "vitest";

import {lessonA104} from "./a1-04";

const lesson = lessonA104;

function knownTaskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) ids.add(`practice:${lesson.id}:${task.id}`);
  for (const task of lesson.miniTest) ids.add(`mini-test:${lesson.id}:${task.id}`);
  for (const task of lesson.writing) ids.add(`writing:${lesson.id}:${task.id}`);
  if (lesson.reading) {
    for (const task of lesson.reading.questions) ids.add(`reading:${lesson.reading.id}:${task.id}`);
  }
  for (const item of lesson.listening.items) {
    for (const question of lesson.listening.questions) {
      if (question.itemId === item.id) ids.add(`listening:${item.id}:${question.id}`);
    }
  }
  return ids;
}

describe("A1-04 — السكن والمنزل", () => {
  it("عناوين الاستماع لا تكشف تفاصيل تقنية عن الصوت", () => {
    for (const item of lesson.listening.items) {
      expect(item.title, item.id).not.toMatch(/المتصفح|اصطناعي/);
    }
  });

  it("كل هدف مرتبط بمهام موجودة فعلاً ويحمل وصف أداء", () => {
    const known = knownTaskIds();
    for (const goal of lesson.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      for (const id of goal.evidence?.taskIds ?? []) {
        expect(known.has(id), `${goal.id} references missing ${id}`).toBe(true);
      }
    }
  });

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة ضمن المدى", () => {
    for (const task of [...lesson.practiceBank, ...lesson.miniTest]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});
