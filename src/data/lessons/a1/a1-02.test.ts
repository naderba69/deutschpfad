import path from "node:path";
import {describe, expect, it} from "vitest";

import {isPlayableMp3} from "@/lib/audio/mp3-file";
import {lessonA102} from "./a1-02";

const lesson = lessonA102;
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

describe("A1-02 — العائلة والأصدقاء", () => {
  it("لا يُقدَّم الدرس بوصفه محاكاة لامتحان Goethe", () => {
    expect(JSON_TEXT).not.toMatch(/Goethe-Zertifikat/);
  });

  it("عنوان الاستماع لا يكشف تفاصيل تقنية عن الصوت", () => {
    const titles = lesson.listening.items.map((item) => item.title).join(" ");
    expect(titles).not.toMatch(/المتصفح|اصطناعي/);
  });

  it("adds a second disclosed TTS listening scene with six playable MP3s and three questions", () => {
    expect(lesson.listening.items).toHaveLength(2);
    const item = lesson.listening.items.find((candidate) => candidate.id === "l2");
    expect(item?.title).toBe("حوار صوتي: أختي لينا");
    expect(item?.audioNoteAr).toContain("مولّدة آلياً (TTS)");
    expect(item?.lines).toHaveLength(6);
    for (const line of item?.lines ?? []) {
      expect(line.audioSrc).toContain("/audio/lessons/a1-02/ls-a1-02-2-");
      expect(line.audioSrc?.endsWith(".mp3")).toBe(true);
      expect(isPlayableMp3(path.join(process.cwd(), "public", line.audioSrc!.slice(1))), line.audioSrc).toBe(true);
    }
    expect(lesson.listening.questions.filter((question) => question.itemId === "l2")).toHaveLength(3);
  });

  it("نطق w في Schwester صحيح، وعنوان النطق لا يعد بصوت v غير موجود في الدرس", () => {
    const schwester = lesson.pronunciation.items.find((item) => item.de === "Schwester");
    expect(schwester?.note).toContain("w تُنطق");
    expect(lesson.pronunciation.title).not.toMatch(/v/);
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
