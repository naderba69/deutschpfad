import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";

describe("اكتمال ترجمة صفات الحجم في مشتتات حوارات B1", () => {
  it("لا يحذف معنى groß من مشتت البنك أو größere من مشتت الشقة", () => {
    const appointment = DAILY_DIALOGUES.find((dialogue) => dialogue.id === "b1-04-terminal");
    const savings = DAILY_DIALOGUES.find((dialogue) => dialogue.id === "b1-12-geld");
    const bank = appointment?.questions[2].options.find((option) => option.text === "Bei einer großen Bank");
    const apartment = savings?.questions[1].options.find((option) => option.text === "Für eine größere Wohnung");

    expect(bank?.ar).toBe("في بنك كبير");
    expect(apartment?.ar).toBe("لشقة أكبر");
  });
});
