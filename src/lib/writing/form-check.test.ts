import {describe, expect, it} from "vitest";

import {checkFormality, checkLength, countWords} from "./form-check";
import {OFFICIAL_WRITING, statusLabel, TELC_B1_WRITING} from "./official-writing";

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

describe("طول النص مقارنةً بحد المهمة", () => {
  it("يعدّ الكلمات الألمانية ولا يعدّ الأرقام والرموز", () => {
    expect(countWords("Ich habe 3 Katzen, leider!")).toBe(4);
    expect(countWords("")).toBe(0);
  });

  it("أقل من الحد ⇒ غير بالغ، وبالضبط الحد ⇒ بالغ", () => {
    expect(checkLength("Ich wohne hier.", 20).reached).toBe(false);
    const exact = Array.from({length: 20}, () => "Wort").join(" ");
    expect(checkLength(exact, 20).reached).toBe(true);
  });

  it("الحد الأعلى لا يُحسب خطأً", () => {
    const long = Array.from({length: 200}, () => "Wort").join(" ");
    expect(checkLength(long, 150).reached).toBe(true);
  });
});

describe("المراجع الرسمية", () => {
  it("A2 من وثيقة Goethe الرسمية: 20–30 و30–40", () => {
    expect(OFFICIAL_WRITING.A2.status).toBe("verified");
    expect(OFFICIAL_WRITING.A2.summary).toContain("20–30");
    expect(OFFICIAL_WRITING.A2.summary).toContain("30–40");
  });

  it("B2 وA1 غير مؤكدين، ولا يُدّعى فيهما رقم", () => {
    expect(OFFICIAL_WRITING.A1.status).toBe("unverified");
    expect(OFFICIAL_WRITING.B2.status).toBe("unverified");
  });

  it("telc B1: A=5 B=3 C=1 D=0 × 3 = 45، والنجاح 135", () => {
    expect(TELC_B1_WRITING.weights).toEqual({A: 5, B: 3, C: 1, D: 0});
    expect(TELC_B1_WRITING.multiplier * 3 * 5).toBe(TELC_B1_WRITING.maxPoints);
    expect(TELC_B1_WRITING.passPoints).toBe(135);
  });

  it("تسميات الحالة بالعربية", () => {
    expect(statusLabel("verified")).toBe("مؤكد من وثيقة رسمية");
    expect(statusLabel("unverified")).toBe("غير مؤكد بعد");
  });
});
