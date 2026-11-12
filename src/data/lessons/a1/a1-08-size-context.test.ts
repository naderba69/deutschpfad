import { describe, expect, it } from "vitest";

import { theory } from "@/data/lessons/a1/a1-08/theorie";

describe("دقة zu klein في مثال مقاس الملابس", () => {
  it("يصوغ أن القميص أصغر من المقاس المطلوب", () => {
    const example = theory.flatMap((section) => section.examples ?? []).find(({ de }) => de === "Dieses Hemd ist zu klein.");
    expect(example?.ar).toBe("هذا القميص أصغر من اللازم.");
  });
});
