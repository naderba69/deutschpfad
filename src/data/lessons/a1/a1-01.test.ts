import {describe, expect, it} from "vitest";

import {lessonA101, lessonA101b} from "./a1-01";

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

describe("A1-01b — أسئلة W وتصريف الأفعال المنتظمة", () => {
  it("يحتوي مراجعة تراكمية بأسئلة صالحة", () => {
    expect(lessonA101b.review).toHaveLength(3);
    for (const task of lessonA101b.review ?? []) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });

  it("يتضمن مشهد استماع وأسئلة مرتبطة بمعرّف المشهد", () => {
    expect(lessonA101b.listening.items).toHaveLength(2);
    for (const item of lessonA101b.listening.items) {
      expect(item.lines.length).toBeGreaterThanOrEqual(4);
      expect(lessonA101b.listening.questions.some((question) => question.itemId === item.id)).toBe(true);
    }
    expect(lessonA101b.listening.questions).toHaveLength(4);
    for (const question of lessonA101b.listening.questions) {
      expect(lessonA101b.listening.items.some((item) => item.id === question.itemId)).toBe(true);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    }
  });
});

describe("A1-01 — التعارف والتحيات", () => {
  it("يربط المراجعة التراكمية بالدرس التأسيسي A1-00", () => {
    expect(lesson.review).toHaveLength(3);
    for (const question of lesson.review ?? []) {
      if (question.type !== "multiple-choice") continue;
      expect(new Set(question.options).size).toBe(question.options.length);
      expect(question.correctIndex).toBeGreaterThanOrEqual(0);
      expect(question.correctIndex).toBeLessThan(question.options.length);
    }
  });

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
    for (const task of [...lesson.practiceBank, ...lesson.miniTest]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});
