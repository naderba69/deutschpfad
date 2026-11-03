import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { LESSON_RELATED_RESOURCES } from "@/data/lessons/related-resources";
import { INTERACTIVE_STORIES } from "@/data/stories";

describe("A2-11 related resources", () => {
  it("links the intended service resources and accurately frames return as a dialogue example", () => {
    const links = LESSON_RELATED_RESOURCES["a2-11"];
    expect(links.map(({ id }) => id)).toEqual([
      "a2-06-post",
      "a2-11-friseur",
      "a2-13-einkaufen-kleidung",
      "a2-postamt",
      "a2-friseur",
    ]);
    for (const link of links) {
      const resources = link.kind === "dialogue" ? DAILY_DIALOGUES : INTERACTIVE_STORIES;
      expect(resources.some(({ id }) => id === link.id), link.id).toBe(true);
    }
    const returnReason = links.find(({ id }) => id === "a2-13-einkaufen-kleidung")?.reasonAr;
    expect(returnReason).toContain("مثال حواري");
    expect(returnReason).toContain("إجراء الإرجاع");
    expect(returnReason).not.toContain("حقّ الإرجاع");
  });

  it("marks the cited postal prices and delivery times as practice examples, not real tariffs", () => {
    const oldDialogue = DAILY_DIALOGUES.find(({ id }) => id === "a2-06-post");
    expect(oldDialogue?.situation).toContain("السعر المذكور افتراضي");
    expect(oldDialogue?.turns.some(({ de, ar }) =>
      de.includes("Im Übungsbeispiel kostet der Versand 20 Euro") && ar.includes("في المثال التدريبي"),
    )).toBe(true);
    expect(oldDialogue?.questions.some(({ options }) =>
      options.some(({ correct, explanation }) => correct && explanation?.includes("ليس تعرفة فعلية")),
    )).toBe(true);

    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a2-postamt");
    expect(story).toBeDefined();
    const segments = story?.segments.map(({ de, ar }) => `${de} ${ar}`).join(" ") ?? "";
    expect(segments).toContain("Im Übungsbeispiel kostet der Versand 25 Euro");
    expect(segments).toContain("Im Beispiel kommt das Paket in zehn Tagen an");
    expect(story?.segments[2]?.ar).toContain("في المثال التدريبي");
    expect(story?.segments[4]?.ar).toContain("في المثال");
  });
});
