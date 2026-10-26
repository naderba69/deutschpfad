import {describe, expect, it} from "vitest";

import {lessonA106} from "./a1-06";

const lesson = lessonA106;

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

describe("A1-06 — أوقات الفراغ والهوايات", () => {
  it("عناوين الاستماع لا تكشف تفاصيل تقنية عن الصوت", () => {
    for (const item of lesson.listening.items) {
      expect(item.title, item.id).not.toMatch(/المتصفح|اصطناعي/);
    }
  });

  it("ترجمة القراءة تحفظ معنى interessant وKlingt gut وتفضيل am liebsten", () => {
    expect(lesson.reading?.paragraphsAr[1]).toContain("أكثر ما أحبّه");
    expect(lesson.reading?.paragraphsAr[5]).toContain("مثيراً للاهتمام");
    expect(lesson.reading?.paragraphsAr[6]).toContain("هذا يبدو جيداً");
    expect(lesson.reading?.glossary.find((item) => item.de === "Klingt gut!")?.ar).toBe("هذا يبدو جيداً!");
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


  it("يُظهر مصدر الصوت وحدوده لكل حوار استماع، ولا ينسب هوية صوتية غير موثقة", () => {
    for (const item of lesson.listening.items) {
      expect(item.audioNoteAr, `${item.id} audio provenance`).toBeTruthy();
    }
    expect(lesson.listening.items[0].audioNoteAr).toMatch(/المتصفح.*TTS/);
    expect(lesson.listening.items[1].audioNoteAr).toMatch(/المتصفح.*TTS/);
    expect(lesson.listening.items[2].audioNoteAr).toMatch(/غير موثّق/);
    expect(lesson.listening.items[2].audioNoteAr).not.toMatch(/صوت Mona|صوت Karim/);
  });

  it("يفصل تعليمة حوار w4 بين قبول الدعوة وعدم ملاءمة الساعة المحددة", () => {
    const task = lesson.writing.find((item) => item.id === "w4");
    if (!task || task.type !== "fill-blank") throw new Error("A1-06 w4 must be a fill-blank exercise");
    expect(task.instructionAr).toMatch(/الساعة 15:00 لا تناسبك/);
    expect(task.blanks[0]?.correct).toMatch(/Ja, gern/);
    expect(task.blanks[1]?.correct).toMatch(/15 Uhr nicht/);
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
