/** تدقيق الموارد المرتبطة بـA2-09: وجودها وملاءمة وصف الربط ومطابقة الحوار. */
import { describe, expect, it } from "vitest";
import { resolveRelatedResources } from "@/data/lessons/related-resources";
import { DAILY_DIALOGUES } from "@/data/dialogues";
import { INTERACTIVE_STORIES } from "@/data/stories";
import { PODCASTS } from "@/data/podcasts";

describe("A2-09 related resources", () => {
  it("resolves all four resources and their stated topical links", () => {
    const resources = resolveRelatedResources("a2-09");
    expect(resources.map(({ kind, id }) => `${kind}:${id}`)).toEqual([
      "story:a2-geburtstag",
      "story:a2-jahrmarkt",
      "dialogue:a2-15-geschenk",
      "podcast:p-a2-sonnntag",
    ]);
    for (const resource of resources) {
      expect(resource.level).toBe("A2");
      expect(resource.href).toContain(resource.id);
      expect(resource.reasonAr.trim().length).toBeGreaterThan(12);
    }

    const birthdayStory = INTERACTIVE_STORIES.find(({ id }) => id === "a2-geburtstag");
    expect(birthdayStory?.segments.map(({ de }) => de).join(" ")).toContain("werden");
    const fairStory = INTERACTIVE_STORIES.find(({ id }) => id === "a2-jahrmarkt");
    expect(fairStory?.grammar).toContain("الماضي التام");
    const giftDialogue = DAILY_DIALOGUES.find(({ id }) => id === "a2-15-geschenk");
    expect(giftDialogue?.turns.map(({ de }) => de).join(" ")).toContain("Ich suche ein Geschenk");
    expect(giftDialogue?.turns.map(({ de }) => de).join(" ")).toContain("Wie wäre es mit diesem?");
    expect(giftDialogue?.questions?.[0]?.ar).toBe("ماذا يبحث الشخص؟");
    const sundayPodcast = PODCASTS.find(({ id }) => id === "p-a2-sonnntag");
    expect(sundayPodcast?.title).toBe("Ein Sonntag in der Familie");
    expect(sundayPodcast?.questions.length).toBeGreaterThan(0);
  });
});
