import { describe, expect, it } from "vitest";

import { lessonB103 } from "@/data/lessons/b1/b1-03";

describe("حراسة معنى sauberer في نص القرية", () => {
  it("يترجم وصف الشوارع بأنها أنظف، لا أنها نظيفة فحسب", () => {
    const text = JSON.stringify(lessonB103);
    expect(text).toContain("Die Gemeinde spart Geld, die Straßen sind sauberer");
    expect(text).toContain("توفّر البلدة مالاً، والشوارع أنظف");
  });
});
