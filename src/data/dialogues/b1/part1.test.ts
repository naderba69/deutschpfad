import {describe, expect, it} from "vitest";

import {DAILY_DIALOGUES} from "@/data/dialogues";

describe("مطابقة مشتت غرفة الفندق في حوار الشكوى", () => {
  it("لا يحذف معنى Zimmer من مشتت الغرفة الفندقية الجديدة", () => {
    const dialogue = DAILY_DIALOGUES.find((item) => item.id === "b1-03-beschwerde");
    const option = dialogue?.questions[2]?.options.find((candidate) => candidate.text === "Ein neues Hotelzimmer komplett gratis");
    expect(option?.ar).toBe("غرفة فندقية جديدة مجاناً");
    expect(option?.explanation).toContain("غرفة فندقية مجانية");
  });
});
