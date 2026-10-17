import {describe, expect, it} from "vitest";

import {lessonA100} from "./a1-00";

const lesson = lessonA100;
const JSON_TEXT = JSON.stringify(lesson);

function practiceIds(): string[] {
  return lesson.practiceBank.map((task) => `practice:${lesson.id}:${task.id}`);
}

function knownTaskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) ids.add(`practice:${lesson.id}:${task.id}`);
  for (const task of lesson.miniTest) ids.add(`mini-test:${lesson.id}:${task.id}`);
  for (const task of lesson.writing) ids.add(`writing:${lesson.id}:${task.id}`);
  for (const task of lesson.review ?? []) ids.add(`review:${lesson.id}:${task.id}`);
  if (lesson.reading) {
    for (const task of lesson.reading.questions) ids.add(`reading:${lesson.reading.id}:${task.id}`);
  }
  return ids;
}

describe("A1-00 — الأبجدية والنطق", () => {
  it("نص القراءة يذكر الرقم صفراً بالكلمة، لا قيمة برمجية فارغة", () => {
    const dialog = lesson.reading?.paragraphs.join(" ") ?? "";
    expect(dialog).not.toMatch(/undefined/);
    expect(dialog).toContain("null, drei, vier, eins, sieben, neun");
  });

  it("تمرين الحروف المعلمة e5 تعليمته تطابق خياراته (ü وu) ولا يحوي كلمة زائدة", () => {
    const e5 = lesson.practiceBank.find((task) => task.id === "e5");
    expect(e5?.type).toBe("fill-blank");
    expect(e5?.instructionAr).toContain("ü أو u");
    if (e5?.type === "fill-blank") {
      expect(e5.template).not.toMatch(/Bär/);
      expect(e5.blanks.every((blank) => blank.options?.includes(blank.correct))).toBe(true);
    }
  });

  it("تمرين ترتيب e10 تعليمته تذكر الحروف الأربعة نفسها", () => {
    const e10 = lesson.practiceBank.find((task) => task.id === "e10");
    expect(e10?.type).toBe("word-ordering");
    if (e10?.type === "word-ordering") {
      expect([...e10.tokens].sort().join("")).toBe([...e10.correctSentence].sort().join(""));
      expect(e10.instructionAr).toContain("Z, e, i, t");
    }
  });

  it("تمرين m4 يملأ الفراغ بـ«كيف» (wie) لا «نحن»", () => {
    const m4 = lesson.miniTest.find((task) => task.id === "m4");
    expect(m4?.type).toBe("fill-blank");
    if (m4?.type === "fill-blank") {
      expect(m4.template).toContain("w___ (كيف)");
      expect(m4.template).not.toContain("(نحن)");
    }
  });

  it("لا تظهر في النص ادعاءات امتحان Goethe ولا وعود بتمارين لاحقة غير موجودة", () => {
    expect(JSON_TEXT).not.toMatch(/امتحان Goethe/);
    expect(JSON_TEXT).not.toMatch(/ستتعلم أشهرها/);
    expect(JSON_TEXT).not.toMatch(/معلّمك الافتراضي/);
  });

  it("قاعدة ch لا تُعرض بوصفها «شيناً» بعد e أو i فقط في جواب الحوار", () => {
    const round = lesson.interaction?.[0]?.rounds[0];
    const best = round?.options.find((option) => option.best);
    expect(best?.de).toContain("Nach a, o, u, au");
    expect(best?.de).toContain("ich");
    expect(best?.ar).not.toMatch(/من الحلق/);
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

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة تقع ضمن المدى", () => {
    for (const task of [...lesson.practiceBank, ...lesson.miniTest]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
    expect(practiceIds().length).toBeGreaterThan(0);
  });
});
