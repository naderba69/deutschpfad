import { describe, expect, it } from "vitest";
import { readingB206 } from "@/data/lessons/b2/b2-06/reading";

describe("B2-06 work-context translation", () => {
  it("keeps the transition and shared-rules condition from the German passage", () => {
    expect(readingB206.paragraphs[4]).toContain(
      "Sie meint, die Umstellung gelinge besser, wenn das Team gemeinsame Regeln kennt.",
    );
    expect(readingB206.paragraphsAr[4]).toContain(
      "وترى أن عملية الانتقال تسير على نحو أفضل عندما يكون الفريق على دراية بالقواعد المشتركة.",
    );
    expect(readingB206.paragraphsAr[4]).not.toContain(
      "الاتفاق على قواعد مشتركة يساعد الفريق",
    );
  });
});
