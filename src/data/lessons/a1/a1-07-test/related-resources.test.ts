import fs from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { LESSON_RELATED_RESOURCES } from "@/data/lessons/related-resources";
import { PODCASTS } from "@/data/podcasts";
import { INTERACTIVE_STORIES } from "@/data/stories";
import { isPlayableMp3 } from "@/lib/audio/mp3-file";

const resources = LESSON_RELATED_RESOURCES["a1-07"];
const publicDir = path.join(process.cwd(), "public");

describe("A1-07 — الموارد الرديفة المرتبطة", () => {
  it("يربط الحوار والقصة والبودكاست المقصودين فقط", () => {
    expect(resources.map(({ kind, id }) => `${kind}:${id}`)).toEqual([
      "dialogue:a1-03-supermarkt",
      "story:a1-anna-einkaufen",
      "podcast:p-a1-markt",
    ]);
  });

  it("قصة آنا تسند سؤال سعر التفاحة الواحدة صراحةً، وترجمتها متوافقة", () => {
    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a1-anna-einkaufen");
    expect(story).toBeDefined();
    expect(story?.segments[2].de).toContain("Ein Apfel kostet zwei Euro.");
    expect(story?.segments[2].ar).toContain("التفاحة الواحدة");
    expect(story?.segments[3].question?.de).toBe("Wie viel kostet ein Apfel?");
    expect(story?.segments[3].question?.options.find(({ correct }) => correct)?.text).toBe("Zwei Euro");
    expect(story?.segments[3].ar).toContain("ثلاث تفاحات");
  });

  it("حوار السوبرماركت يسأل عن أسعار مختلفة بلا سؤال مكرر", () => {
    const dialogue = DAILY_DIALOGUES.find(({ id }) => id === "a1-03-supermarkt");
    expect(dialogue).toBeDefined();
    expect(dialogue?.questions.map(({ de }) => de)).toEqual([
      "Was kostet das Brot?",
      "Was kostet die Milch?",
      "Was nimmt der Kunde?",
    ]);
    expect(dialogue?.questions[1].options.find(({ correct }) => correct)?.text).toBe("1,50 Euro");
    expect(dialogue?.audioNoteAr).toContain("مصدرها غير موثّق");
    expect(dialogue?.audioNoteAr).toContain("لم تُتحقق مطابقتها للنص");

    for (let index = 1; index <= 6; index += 1) {
      const file = path.join(publicDir, "audio", "dialogues-a1", `a1-03-supermarkt-${index}.mp3`);
      expect(fs.existsSync(file), `missing dialogue audio ${index}`).toBe(true);
      expect(isPlayableMp3(file), `invalid dialogue audio ${index}`).toBe(true);
    }
  });

  it("حلقة السوق واضحة في حدودها: منتجات فقط، بلا أسعار، وكمية بلا مذكور", () => {
    const episode = PODCASTS.find(({ id }) => id === "p-a1-markt");
    expect(episode).toBeDefined();
    expect(episode?.script).toContain("Sie kauft ein Kilo.");
    expect(episode?.scriptAr).toContain("تشتري كيلوغراماً.");
    expect(episode?.script).not.toMatch(/\b(?:Euro|kostet|Preis)\b|€/i);
    const file = path.join(publicDir, "audio", "podcasts", "p-a1-markt.mp3");
    expect(fs.existsSync(file)).toBe(true);
    expect(isPlayableMp3(file)).toBe(true);
  });
});
