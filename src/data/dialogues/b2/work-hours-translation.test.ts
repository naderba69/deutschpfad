import { describe, expect, it } from "vitest";
import { B2_DIALOGUES_3 } from "@/data/dialogues/b2/part3";

describe("B2 dialogue work-hours translation", () => {
  it("preserves the duration expressed by stundenlang", () => {
    const dialogue = B2_DIALOGUES_3.find((item) => item.id === "b2-12-arzt-spezialist");
    const turn = dialogue?.turns.find((item) => item.de.includes("stundenlang"));
    expect(turn?.de).toContain("Ich arbeite oft stundenlang ohne Unterbrechung.");
    expect(turn?.ar).toContain("أعمل غالباً ساعات طويلة دون انقطاع.");
  });
});
