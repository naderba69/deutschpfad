import { describe, expect, it } from "vitest";

import { listening } from "@/data/lessons/a1/a1-13/skills";
import { theory } from "@/data/lessons/a1/a1-13/theorie";

describe("دقة مفردات الروتين في استماع A1-13", () => {
  it("يميّز النهوض من الفراش عن الاستيقاظ ويحفظ سؤال الفطور", () => {
    const day = listening.items.find((item) => item.id === "l1");
    const getUp = day?.lines.find((line) => line.de === "Am Morgen stehe ich um sieben Uhr auf.");
    const breakfastQuestion = day?.lines.find((line) => line.de === "Und was isst du zum Frühstück?");

    expect(getUp?.ar).toBe("صباحاً أنهض من الفراش في السابعة.");
    expect(breakfastQuestion?.ar).toBe("وماذا تأكل في الفطور؟");

    const theoryExample = theory.flatMap((section) => section.examples ?? []).find(
      ({ de }) => de === "Am Morgen stehe ich um sieben Uhr auf.",
    );
    expect(theoryExample?.ar).toContain("أنهض من الفراش");
  });
});
