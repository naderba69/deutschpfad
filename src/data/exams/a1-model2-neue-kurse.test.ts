import { describe, expect, it } from "vitest";

import { A1_MODEL2_LESEN } from "@/data/exams/a1-model2-lesen";

describe("ترجمة neue Kurse في إعلان دورة A1", () => {
  it("يحفظ معنى أن الدورات المعلن عنها جديدة", () => {
    const announcement = A1_MODEL2_LESEN.find((part) => part.teil === 2);
    const statement = announcement?.statements?.find((item) => item.id === "m2l2-s1");

    expect(announcement?.text).toContain("Neue Kurse ab September");
    expect(statement?.ar).toBe("تبدأ الدورات الجديدة في سبتمبر.");
    expect(statement?.isTrue).toBe(true);
  });
});
