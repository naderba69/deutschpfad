import { describe, expect, it } from "vitest";

import { lessonB205 } from "@/data/lessons/b2/b2-05";

describe("B2-05 interaction audit", () => {
  it("keeps the interaction best replies as complete sentences", () => {
    const rounds = (lessonB205.interaction ?? [])[0].rounds as unknown as { options: { de: string; best?: boolean }[] }[];
    expect(rounds.map((round) => round.options.find((option) => option.best)?.de)).toEqual([
      "Einerseits werden einfache Tätigkeiten automatisiert. Andererseits entstehen neue Berufe, die Kreativität erfordern.",
      "Zum Beispiel im Bereich Datenanalyse und KI-Ethik. Je mehr Technologie, desto wichtiger wird menschliche Kontrolle.",
      "Meiner Ansicht nach sollten beide zusammenarbeiten. Während der Staat Grundbildung sichert, sollten Firmen spezifische Schulungen anbieten.",
    ]);
    for (const round of rounds) expect(round.options.filter((option) => option.best)).toHaveLength(1);
  });
});
