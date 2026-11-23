import {describe, expect, it} from "vitest";

import {GERMAN_KEYS, insertAtSelection} from "./typing-keys";

describe("لوحة الأحرف الألمانية", () => {
  it("تضم ä ö ü ß", () => {
    expect([...GERMAN_KEYS]).toEqual(["ä", "ö", "ü", "ß"]);
  });

  it("تُدرج الحرف عند المؤشر ويتقدم المؤشر", () => {
    expect(insertAtSelection("Gr", 2, 2, "ü")).toEqual({value: "Grü", cursor: 3});
    expect(insertAtSelection("Stra", 4, 4, "ß")).toEqual({value: "Straß", cursor: 5});
  });

  it("يستبدل التحديد", () => {
    expect(insertAtSelection("Strasse", 2, 4, "ß")).toEqual({value: "Stßsse", cursor: 3});
  });

  it("يضبط الموضع خارج المدى", () => {
    expect(insertAtSelection("ab", 99, 99, "ö")).toEqual({value: "abö", cursor: 3});
  });
});
