import {describe, expect, it} from "vitest";
import {SECTION_PROOF} from "./stages";

describe("طريقة إثبات الأقسام (قرار المستخدم)", () => {
  it("الوساطة والإنتاج الشفهي يُثبتان بالتأكيد لأنهما بلا تصحيح", () => {
    expect(SECTION_PROOF["mediation"]).toBe("acknowledge");
    expect(SECTION_PROOF["oral-production"]).toBe("acknowledge");
  });
  it("التفاعل يبقى بنتيجة حقيقية", () => {
    expect(SECTION_PROOF["interaction"]).toBe("exercise");
  });
});
