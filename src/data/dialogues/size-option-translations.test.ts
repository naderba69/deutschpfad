import { describe, expect, it } from "vitest";

import { DAILY_DIALOGUES } from "@/data/dialogues";
import { PODCASTS } from "@/data/podcasts";

describe("اكتمال ترجمة صفات الحجم في خيارات المحتوى", () => {
  it("يحفظ صفة groß في مشتت سلطة المطعم وصفة klein في مشتت السكن", () => {
    const restaurant = DAILY_DIALOGUES.find((dialogue) => dialogue.id === "a2-02-restaurant");
    const podcast = PODCASTS.find((episode) => episode.id === "p-a1-meine-familie");
    const salad = restaurant?.questions[0].options.find((option) => option.text === "Einen großen Salat");
    const apartment = podcast?.questions[1].options.find((option) => option.text === "In einer kleinen Wohnung");

    expect(salad?.ar).toBe("سلطة كبيرة");
    expect(apartment?.ar).toBe("في شقة صغيرة");
  });
});
