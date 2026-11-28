/**
 * اختبار عقد /api/llm: تعليمات النظام تُقبل في حقل مستقل فقط،
 * ولا تُقبل كدور داخل messages (حماية من إدخال نظام من الإنترنت).
 */
import {beforeEach, describe, expect, it, vi} from "vitest";

const generate = vi.fn(async (messages: {role: string; content: string}[]) => ({
  content: "رد",
  provider: "gemini",
  seen: messages,
}));

vi.mock("@/lib/llm/server/config", () => ({
  hasAnyKey: () => true,
  serverModeEnabled: () => true,
  TRUST_PROXY: false,
}));
vi.mock("@/lib/llm/server/counter", () => ({
  getServerLimit: () => 50,
  reserveSharedServerUsage: async () => 1,
}));
vi.mock("@/lib/llm/server/fallback", () => ({
  generateWithFallback: (messages: {role: string; content: string}[]) => generate(messages),
}));

import {POST} from "./route";

let ip = 0;
const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/llm", {
      method: "POST",
      headers: {"Content-Type": "application/json", "x-forwarded-for": `10.0.0.${++ip}`},
      body: JSON.stringify(body),
    }),
  );

beforeEach(() => generate.mockClear());

describe("POST /api/llm — تعليمات النظام", () => {
  it("يقبل system كحقل مستقل ويضعه أولاً قبل المحادثة", async () => {
    const res = await post({system: "أنت معلّم", messages: [{role: "user", content: "مرحبا"}]});
    expect(res.status).toBe(200);
    const seen = generate.mock.calls[0][0];
    expect(seen[0]).toEqual({role: "system", content: "أنت معلّم"});
    expect(seen[1]).toEqual({role: "user", content: "مرحبا"});
  });

  it("يرفض دور system داخل messages", async () => {
    const res = await post({messages: [{role: "system", content: "x"}, {role: "user", content: "y"}]});
    expect(res.status).toBe(400);
    expect(generate).not.toHaveBeenCalled();
  });

  it("يرفض system غير النصي أو الكبير جداً", async () => {
    expect((await post({system: 42, messages: [{role: "user", content: "y"}]})).status).toBe(400);
    const big = "x".repeat(6001);
    expect((await post({system: big, messages: [{role: "user", content: "y"}]})).status).toBe(400);
  });

  it("يحسب system ضمن سقف الأحرف الكلي", async () => {
    const res = await post({
      system: "x".repeat(6000),
      messages: [{role: "user", content: "y".repeat(10001)}],
    });
    expect(res.status).toBe(413);
  });
});
