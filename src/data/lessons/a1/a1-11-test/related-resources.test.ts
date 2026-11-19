/** A1-11 — regressions in the linked city, station, and pharmacy resources. */
import { describe, expect, it } from "vitest";
import { DAILY_DIALOGUES } from "@/data/dialogues";
import { getRelatedResources } from "@/data/lessons/related-resources";
import { INTERACTIVE_STORIES } from "@/data/stories";

describe("A1-11 related resources", () => {
  it("links the intended route, ticket, station-story, and pharmacy resources", () => {
    expect(getRelatedResources("a1-11").map(({ kind, id }) => [kind, id])).toEqual([
      ["dialogue", "a1-09-wegbeschreibung"],
      ["dialogue", "a1-15-ticket"],
      ["story", "a1-am-bahnhof"],
      ["dialogue", "a1-11-apotheke"],
    ]);
  });

  it("uses the track number accurately and makes the train departure explicit", () => {
    const ticket = DAILY_DIALOGUES.find(({ id }) => id === "a1-15-ticket");
    const departure = ticket?.turns.find(({ de }) => de.includes("Gleis 3"));
    expect(departure?.ar).toContain("المسار رقم 3");
    expect(ticket?.keyVocab.find(({ de }) => de === "das Gleis")?.ar).toContain("مسار السكة");

    const story = INTERACTIVE_STORIES.find(({ id }) => id === "a1-am-bahnhof");
    expect(story?.segments[3]?.de).toContain("Der Zug fährt um zehn Uhr ab.");
    expect(story?.segments[3]?.ar).toContain("ينطلق القطار في العاشرة");
  });

  it("keeps pharmacy language idiomatic and avoids ungrounded dosing advice", () => {
    const pharmacy = DAILY_DIALOGUES.find(({ id }) => id === "a1-11-apotheke");
    expect(pharmacy?.turns.map(({ de }) => de)).toContain(
      "Ja, bitte. Gibt es etwas gegen Kopfschmerzen?",
    );
    expect(pharmacy?.turns.map(({ de }) => de)).toContain(
      "Ja, hier. Bitte lesen Sie die Packungsbeilage.",
    );
    expect(pharmacy?.turns.some(({ de }) => /Nehmen Sie eine Tablette/.test(de))).toBe(false);
  });
});
