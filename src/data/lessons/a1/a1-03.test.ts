import {describe, expect, it} from "vitest";

import {lessonA103} from "./a1-03";

const lesson = lessonA103;

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

describe("A1-03 — الطعام والشراب", () => {
  it("عناوين الاستماع لا تكشف تفاصيل تقنية عن الصوت", () => {
    for (const item of lesson.listening.items) {
      expect(item.title, item.id).not.toMatch(/المتصفح|اصطناعي/);
    }
  });

  it("يفصح عن الصوت الآلي في المشهدين اللذين يستخدمان صوت المتصفح", () => {
    for (const id of ["l1", "l2"]) {
      const item = lesson.listening.items.find((candidate) => candidate.id === id);
      expect(item?.lines.every((line) => !line.audioSrc), `${id} browser TTS`).toBe(true);
      expect(item?.audioNoteAr).toContain("النطق الآلي في المتصفح (TTS)");
      expect(item?.audioNoteAr).toContain("ليس تسجيلاً بشرياً");
    }
  });

  it("لا يصف هدف z7 تفاعلاً شفهياً لا تقيسه مهمة الكتابة المرتبطة به", () => {
    const goal = lesson.lernziele.find((candidate) => candidate.id === "z7");
    expect(goal?.de).toContain("schriftlich");
    expect(goal?.de).not.toContain("Rückfrage");
    expect(goal?.evidence?.taskIds).toEqual(["writing:a1-03:w4"]);
  });

  it("reading mirrors paragraph count and the tip amount matches the dialogue arithmetic", () => {
    const reading = lesson.reading;
    expect(reading).toBeDefined();
    if (!reading) return;
    expect(reading.paragraphsAr).toHaveLength(reading.paragraphs.length);
    for (const question of reading.questions) {
      expect(question.paragraph).toBeGreaterThanOrEqual(0);
      expect(question.paragraph).toBeLessThan(reading.paragraphs.length);
    }
    const tipQuestion = reading.questions.find((question) => question.id === "r4");
    expect(tipQuestion?.options[tipQuestion.correctIndex]).toBe("Zwei Euro");
    expect(reading.paragraphs[4]).toContain("zweiundzwanzig Euro fünfzig");
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

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة ضمن المدى ومحاذاة تفسيراتها", () => {
    const tasks = [
      ...lesson.practiceBank,
      ...lesson.miniTest,
      ...(lesson.review ?? []),
      ...(lesson.reading?.questions ?? []),
      ...(lesson.listening?.questions ?? []),
    ];
    for (const task of tasks) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});
