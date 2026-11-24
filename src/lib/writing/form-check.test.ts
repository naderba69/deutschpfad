import {describe, expect, it} from "vitest";

import {checkFormality, checkLengthForLevel, countWords} from "./form-check";

describe("فحص du / Sie", () => {
  it("رسالة غير رسمية بـ du", () => {
    const r = checkFormality("Liebe Anna, wie geht es dir? Ich hoffe, du bist gesund. Danke für deine Nachricht.");
    expect(r.dominant).toBe("du");
    expect(r.mixed).toBe(false);
    expect(r.duCount).toBe(3); // dir, du, deine
  });

  it("رسالة رسمية بـ Sie", () => {
    const r = checkFormality("Sehr geehrte Frau Müller, ich möchte Ihnen für Ihre Hilfe danken.");
    expect(r.dominant).toBe("sie");
    expect(r.mixed).toBe(false);
    expect(r.sieCount).toBe(2);
  });

  it("يكتشف الخلط بين du و Sie", () => {
    const r = checkFormality("Sehr geehrter Herr Schmidt, kannst du mir bitte helfen? Ich danke Ihnen.");
    expect(r.mixed).toBe(true);
  });

  it("«Sie» في بداية الجملة لا تُعد (قد تعني هي)", () => {
    const r = checkFormality("Sie kommt morgen. Sie ist nett.");
    expect(r.sieCount).toBe(0);
    expect(r.dominant).toBe("none");
  });

  it("«Sie» وسط الجملة تُعد للمخاطبة الرسمية", () => {
    const r = checkFormality("Ich möchte Sie fragen, ob Sie Zeit haben.");
    expect(r.sieCount).toBe(2);
  });

  it("نص بلا ضمائر مخاطبة", () => {
    expect(checkFormality("Das Wetter ist heute schön.").dominant).toBe("none");
  });
});

describe("طول النص حسب المستوى", () => {
  it("يعدّ الكلمات الألمانية ولا يعدّ الأرقام والرموز", () => {
    expect(countWords("Ich habe 3 Katzen, leider!")).toBe(4);
    expect(countWords("")).toBe(0);
  });

  it("A1: قصير تحت 20 كلمة، مقبول من 20", () => {
    const short = "Ich wohne in Berlin. Ich habe einen Hund.";
    expect(checkLengthForLevel(short, "A1").verdict).toBe("short");
    const ok = Array.from({length: 20}, () => "Wort").join(" ");
    expect(checkLengthForLevel(ok, "A1").verdict).toBe("ok");
  });

  it("B1 يحدد الهدف 80 كلمة", () => {
    expect(checkLengthForLevel("a b", "B1").target).toEqual({min: 80, max: 80});
  });

  it("الحد الأعلى لا يُحسب خطأً", () => {
    const long = Array.from({length: 200}, () => "Wort").join(" ");
    expect(checkLengthForLevel(long, "B2").verdict).toBe("ok");
  });
});
