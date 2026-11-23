import {describe, expect, it} from "vitest";

import {geminiEndpoint, geminiHeaders} from "./providers";

/** حارس: المفتاح لا يظهر في الرابط أبداً، ويُرسل في ترويسة */
describe("طلب Gemini — المفتاح في الترويسة لا في الرابط", () => {
  it("الرابط لا يحمل أي مفتاح", () => {
    const url = geminiEndpoint("gemini-2.5-flash");
    expect(url).not.toMatch(/key=/);
    expect(url).toContain("generativelanguage.googleapis.com");
    expect(url.endsWith(":generateContent")).toBe(true);
  });
  it("الترويسة تحمل x-goog-api-key", () => {
    expect(geminiHeaders("SECRET")).toEqual({
      "Content-Type": "application/json",
      "x-goog-api-key": "SECRET",
    });
  });
  it("اسم النموذج يُرمَّز في الرابط", () => {
    expect(geminiEndpoint("a/b")).toContain("models/a%2Fb:");
  });
});
