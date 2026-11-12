import { describe, expect, it } from "vitest";

import { A2_VOCAB } from "@/data/vocabulary/a2";
import { B2_TOP500 } from "@/data/vocabulary/b2-top500";
import { B2_TOPIC_ALL } from "@/data/vocabulary/b2-topics";

describe("ترجمة Kaution في قوائم المفردات", () => {
  it("تسميه مبلغ ضمان لا تأميناً", () => {
    const a2 = A2_VOCAB["a2-04"]?.find((entry) => entry.de === "die Kaution")?.ar;
    const top500 = B2_TOP500.find((entry) => entry.de === "die Kaution")?.ar;
    const topics = B2_TOPIC_ALL.find((entry) => entry.de === "die Kaution")?.ar;

    expect(a2).toBe("مبلغ الضمان (وديعة مالية)");
    expect(top500).toBe("مبلغ ضمان مالي");
    expect(topics).toBe("مبلغ الضمان (وديعة مالية)");
    expect([a2, top500, topics].join(" ")).not.toContain("التأمين");
  });
});
