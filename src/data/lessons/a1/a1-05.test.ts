import {describe, expect, it} from "vitest";

import {A1_DIALOGUES_1} from "@/data/dialogues/a1/part1";
import {lessonA105} from "./a1-05";

const lesson = lessonA105;

function knownTaskIds(): Set<string> {
  const ids = new Set<string>();
  for (const task of lesson.practiceBank) {
    ids.add(task.id);
    ids.add(`practice:${lesson.id}:${task.id}`);
  }
  for (const task of lesson.miniTest) {
    ids.add(task.id);
    ids.add(`mini-test:${lesson.id}:${task.id}`);
  }
  for (const task of lesson.writing) {
    ids.add(task.id);
    ids.add(`writing:${lesson.id}:${task.id}`);
  }
  if (lesson.reading) {
    for (const task of lesson.reading.questions) {
      ids.add(task.id);
      ids.add(`reading:${lesson.reading.id}:${task.id}`);
    }
  }
  for (const item of lesson.listening.items) {
    for (const question of lesson.listening.questions) {
      if (question.itemId === item.id) {
        ids.add(question.id);
        ids.add(`listening:${item.id}:${question.id}`);
      }
    }
  }
  return ids;
}

describe("A1-05 — الروتين اليومي والوقت", () => {
  it("تفصح مشاهد الاستماع والإملاء عن توليد الصوت آلياً", () => {
    for (const item of lesson.listening.items) {
      expect(item.title, item.id).not.toMatch(/المتصفح|اصطناعي/);
      expect(item.audioNoteAr, `${item.id} audio disclosure`).toContain("تسجيلاً بشرياً");
    }
    for (const id of ["l1", "l2"]) {
      const item = lesson.listening.items.find((candidate) => candidate.id === id);
      expect(item?.audioNoteAr, `${id} browser TTS`).toContain("أصوات المتصفح (TTS)");
    }
    const dictations = [...lesson.practiceBank, ...lesson.writing].filter((task) => task.type === "dictation");
    expect(dictations).toHaveLength(2);
    for (const task of dictations) {
      expect(task.instructionAr).toContain("النطق الآلي في المتصفح");
    }
  });

  it("حوار الوقت المرتبط يطابق بين halb drei وموعد الحافلة", () => {
    const dialogue = A1_DIALOGUES_1.find((item) => item.id === "a1-05-uhrzeit");
    expect(dialogue).toBeDefined();
    expect(dialogue?.audioNoteAr).toContain("مصدر الصوت غير موثّق");
    expect(dialogue?.turns.some((turn) => turn.de === "Es ist halb drei.")).toBe(true);
    const timeQuestion = dialogue?.questions.find((item) => item.de === "Wie spät ist es?");
    expect(timeQuestion?.options.filter((option) => option.correct).map((option) => option.text)).toEqual(["Halb drei"]);
    const busQuestion = dialogue?.questions.find((item) => item.de === "Wann fährt der Bus?");
    expect(busQuestion?.options.filter((option) => option.correct).map((option) => option.text)).toEqual(["Um drei Uhr"]);
  });

  it("عنوان القراءة عن الثلاثاء مسنود ببداية النص وترجمتها", () => {
    expect(lesson.reading?.paragraphs[0]).toContain("Heute ist Dienstag.");
    expect(lesson.reading?.paragraphsAr[0]).toContain("اليوم يوم الثلاثاء.");
  });

  it("سؤال القراءة عن يوم الاثنين لا يستنتج سبباً لم يذكره النص", () => {
    const question = lesson.reading?.questions.find((item) => item.id === "r3");
    expect(question?.questionDe).toBe("Wie fühlt sich Tarek montags?");
    expect(question?.options[question.correctIndex]).toBe("Er ist immer zu müde.");
    expect(lesson.reading?.paragraphs[3]).toContain("montags bin ich immer zu müde");
  });

  it("كل هدف مرتبط بمهام موجودة فعلاً ويحمل وصف أداء", () => {
    const known = knownTaskIds();
    for (const goal of lesson.lernziele) {
      expect(goal.evidence, `${goal.id} evidence`).toBeDefined();
      for (const id of goal.evidence?.exerciseIds ?? []) {
        expect(known.has(id), `${goal.id} references missing exercise ${id}`).toBe(true);
      }
      for (const id of goal.evidence?.taskIds ?? []) {
        expect(known.has(id), `${goal.id} references missing ${id}`).toBe(true);
      }
      if (goal.id === "z4") expect(goal.evidence?.completion).toBe("all-correct");
    }
  });

  it("خيارات الاختيار من متعدد فريدة وإجابتها الصحيحة ضمن المدى", () => {
    const readingQuestions = lesson.reading?.questions ?? [];
    for (const task of [...lesson.practiceBank, ...lesson.miniTest, ...readingQuestions, ...lesson.listening.questions]) {
      if (task.type !== "multiple-choice") continue;
      expect(new Set(task.options).size, `${task.id} duplicate options`).toBe(task.options.length);
      expect(task.correctIndex).toBeGreaterThanOrEqual(0);
      expect(task.correctIndex).toBeLessThan(task.options.length);
    }
  });
});
