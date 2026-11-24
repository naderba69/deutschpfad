import {describe, expect, it} from "vitest";

import {RAW_LESSONS} from "@/data/lessons";
import {A1_RAW_LESSONS} from "@/data/lessons/a1-level";

import {applyDialogueIpa, DIALOGUE_IPA} from "./dialogue-ipa";

const byId = (id: string) => RAW_LESSONS.find((l) => l.id === id)!;

describe("نطق IPA لأسطر الحوارات", () => {
  it("لكل حوار مغطّى عدد نطق يطابق عدد أسطره تماماً", () => {
    for (const [lessonId, items] of Object.entries(DIALOGUE_IPA)) {
      const lesson = byId(lessonId);
      expect(lesson, `درس ${lessonId} غير موجود`).toBeDefined();
      for (const [itemId, ipa] of Object.entries(items)) {
        const item = lesson.listening.items.find((i) => i.id === itemId);
        expect(item, `${lessonId}/${itemId} غير موجود`).toBeDefined();
        expect(ipa.length, `${lessonId}/${itemId}: الأسطر ${item!.lines.length} والنطق ${ipa.length}`).toBe(item!.lines.length);
      }
    }
  });

  it("لا أقواس ولا فراغات زائدة ولا نص فارغ في النطق", () => {
    for (const items of Object.values(DIALOGUE_IPA)) {
      for (const ipa of Object.values(items)) {
        for (const line of ipa) {
          expect(line).not.toMatch(/[\[\]]/);
          expect(line).toBe(line.trim());
          expect(line.length).toBeGreaterThan(0);
        }
      }
    }
  });

  it("applyDialogueIpa يضيف الحقل ولا يغيّر النص الألماني", () => {
    const lesson = byId("a1-00");
    const out = applyDialogueIpa(lesson);
    const line = out.listening.items[0].lines[0];
    expect(line.ipa).toBe(DIALOGUE_IPA["a1-00"].l1[0]);
    expect(line.de).toBe(lesson.listening.items[0].lines[0].de);
  });

  it("درس بلا نطق يبقى كما هو", () => {
    const lesson = A1_RAW_LESSONS.find((l) => l.id === "a1-05")!;
    expect(applyDialogueIpa(lesson)).toBe(lesson);
  });
});
