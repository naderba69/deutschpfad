/** A1-12 — ensure the linked weather dialogue and stories match their descriptions. */
import { describe, expect, it } from "vitest";
import { DAILY_DIALOGUES } from "@/data/dialogues";
import { getRelatedResources } from "@/data/lessons/related-resources";
import { INTERACTIVE_STORIES } from "@/data/stories";

describe("A1-12 related resources", () => {
  it("links the intended dialogue and two stories", () => {
    expect(getRelatedResources("a1-12").map(({ kind, id }) => [kind, id])).toEqual([
      ["dialogue", "a1-14-wetter"],
      ["story", "a1-picknick"],
      ["story", "a1-am-strand"],
    ]);
  });

  it("matches each related-resource description to the actual content", () => {
    const weatherDialogue = DAILY_DIALOGUES.find(({ id }) => id === "a1-14-wetter");
    expect(weatherDialogue?.turns.map(({ de }) => de).join(" ")).toContain("Aber morgen regnet es");
    expect(weatherDialogue?.turns.map(({ de }) => de).join(" ")).toContain("es wird kälter");

    const picnic = INTERACTIVE_STORIES.find(({ id }) => id === "a1-picknick");
    expect(picnic?.segments[0]?.de).toContain("Die Sonne scheint");
    expect(picnic?.segments[0]?.de).toContain("der Himmel ist blau");

    const beach = INTERACTIVE_STORIES.find(({ id }) => id === "a1-am-strand");
    expect(beach?.segments[0]?.de).toContain("Das Meer ist blau und ruhig");
    const beachReason = getRelatedResources("a1-12").find(({ id }) => id === "a1-am-strand")?.reasonAr;
    expect(beachReason).toContain("لا تدريب مباشر على تراكيب الطقس");
    expect(beachReason).not.toContain("الطقس الحار");
  });
});
