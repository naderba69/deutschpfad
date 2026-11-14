import { describe, expect, it } from "vitest";

import { markGermanElements } from "./german-lang";

function el(text: string, attrs: Record<string, string> = {}) {
  const a: Record<string, string> = { ...attrs };
  return {
    textContent: text,
    getAttribute: (n: string) => a[n] ?? null,
    setAttribute: (n: string, v: string) => {
      a[n] = v;
    },
    attrs: a,
  };
}

describe("markGermanElements", () => {
  it("يوسم نصاً ألمانياً خالصاً ويضيف الاتجاه إذا غاب", () => {
    const one = el("der Kurs");
    markGermanElements({ querySelectorAll: () => [one] });
    expect(one.attrs.lang).toBe("de");
    expect(one.attrs.dir).toBe("ltr");
  });

  it("يحترم اتجاهًا موجوداً (RTL) ولا يقلبه", () => {
    const one = el("das Ziel", { dir: "rtl" });
    markGermanElements({ querySelectorAll: () => [one] });
    expect(one.attrs.dir).toBe("rtl");
  });

  it("لا يوسم النص المختلط عربي/ألماني", () => {
    const one = el("مثال: Ich bin Sami.");
    markGermanElements({ querySelectorAll: () => [one] });
    expect(one.attrs.lang).toBeUndefined();
  });

  it("لا يوسم الأرقام والرموز بلا كلمة لاتينية", () => {
    const one = el("— 2026 —");
    markGermanElements({ querySelectorAll: () => [one] });
    expect(one.attrs.lang).toBeUndefined();
  });

  it("يعيد عدد العناصر الموسومة", () => {
    const list = [el("der Kurs"), el("die Prüfung"), el("مرحباً")];
    expect(markGermanElements({ querySelectorAll: () => list })).toBe(2);
  });
});
