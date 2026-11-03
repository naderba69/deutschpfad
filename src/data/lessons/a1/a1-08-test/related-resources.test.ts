import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { LESSON_RELATED_RESOURCES } from "@/data/lessons/related-resources";
import { INTERACTIVE_STORIES } from "@/data/stories";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

const resources = LESSON_RELATED_RESOURCES["a1-08"];
const publicDir = path.join(process.cwd(), "public");

describe("A1-08 — الموارد الرديفة المرتبطة", () => {
  it("يربط الحوار والقصة المقصودين فقط، ولا يوحي بوجود بودكاست", () => {
    expect(resources.map(({ kind, id }) => `${kind}:${id}`)).toEqual([
      "dialogue:a1-06-kleidung",
      "story:a1-geschenk",
    ]);
    expect(resources[0].reasonAr).toContain("السؤال عن المقاس والسعر");
    expect(resources[0].reasonAr).not.toContain("الألوان");
    expect(resources[1].reasonAr).toContain("الامتنان والمحبة");
  });

  it("قصة الهدية لا تعرض نهايات الصفات قبل تعليمها، وأسئلتها مسندة إلى النص", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a1-geschenk");
    expect(story).toBeDefined();
    const colorSegment = story?.segments[1];
    expect(colorSegment?.de).toBe("Sie sieht eine Tasche. Die Tasche ist rot und schön. Sie kostet 25 Euro.");
    expect(colorSegment?.ar).toContain("الحقيبة حمراء وجميلة");
    expect(colorSegment?.question?.de).toBe("Was sieht Sara?");
    expect(colorSegment?.question?.options.find(({ correct }) => correct)?.text).toBe("Eine Tasche");

    const priceQuestion = story?.segments[3].question;
    expect(priceQuestion?.de).toBe("Wie viel kostet die Tasche?");
    expect(priceQuestion?.options.find(({ correct }) => correct)?.text).toBe("25 Euro");
    expect(story?.segments.map(({ de }) => de).join(" ")).toContain("Sara kauft die Tasche");
  });

  it("حوار الملابس المرتبط يدعم مفردات الشراء والمقاس والسعر، وأسئلته تطابق نصه", () => {
    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "a1-06-kleidung");
    expect(dialogue).toBeDefined();
    const text = dialogue?.turns.map(({ de }) => de).join(" ") ?? "";
    expect(text).toContain("ich suche ein T-Shirt");
    expect(text).toContain("Größe M");
    expect(text).toContain("15 Euro");
    expect(text).toContain("Das passt. Ich nehme es!");
    expect(dialogue?.questions.map(({ options }) => options.find(({ correct }) => correct)?.text)).toEqual([
      "Größe M",
      "15 Euro",
      "Das passt. Ich nehme es!",
    ]);
    expect(dialogue?.audioNoteAr).toContain("مصدر ملفات الصوت المرتبطة بهذا الحوار غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص");

    for (let index = 1; index <= 6; index += 1) {
      const file = path.join(publicDir, "audio", "dialogues-a1", `a1-06-kleidung-${index}.mp3`);
      expect(fs.existsSync(file), `missing dialogue audio ${index}`).toBe(true);
      expect(isPlayableMp3(file), `invalid dialogue audio ${index}`).toBe(true);
    }
  });
});
