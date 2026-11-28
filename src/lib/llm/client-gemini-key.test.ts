import {afterEach, describe, expect, it, vi} from "vitest";

import {callGeminiDirect} from "./client";

const KEY = "AIza-test-key-123";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("مفتاح Gemini من المتصفح يُرسل في الترويسة لا في الرابط", () => {
  it("الرابط لا يحتوي المفتاح، والترويسة تحتويه", async () => {
    const fetchMock = vi.fn(async () =>
      new Response(JSON.stringify({candidates: [{content: {parts: [{text: "ok"}]}}]}), {status: 200}),
    );
    vi.stubGlobal("fetch", fetchMock);

    const out = await callGeminiDirect(KEY, [{role: "user", content: "hi"}]);

    expect(out).toBe("ok");
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).not.toContain(KEY);
    expect(url).not.toContain("key=");
    expect((init.headers as Record<string, string>)["x-goog-api-key"]).toBe(KEY);
  });
});

describe("طلب Gemini من المتصفح — التعليمات في systemInstruction", () => {
  const reply = () =>
    new Response(JSON.stringify({candidates: [{content: {parts: [{text: "ok"}]}}]}), {status: 200});

  it("رسائل النظام تذهب إلى systemInstruction ولا تبقى كدور مستخدم", async () => {
    const fetchMock = vi.fn(async () => reply());
    vi.stubGlobal("fetch", fetchMock);

    await callGeminiDirect(KEY, [
      {role: "system", content: "أنت معلّم"},
      {role: "user", content: "سؤال"},
      {role: "assistant", content: "جواب"},
      {role: "user", content: "متابعة"},
    ]);

    const body = JSON.parse((fetchMock.mock.calls[0] as unknown as [string, RequestInit])[1].body as string);
    expect(body.systemInstruction).toEqual({parts: [{text: "أنت معلّم"}]});
    expect(body.contents.map((c: {role: string}) => c.role)).toEqual(["user", "model", "user"]);
    expect(JSON.stringify(body.contents)).not.toContain("أنت معلّم");
  });

  it("thinkingBudget يُرسل عند الطلب فقط", async () => {
    const fetchMock = vi.fn(async () => reply());
    vi.stubGlobal("fetch", fetchMock);

    await callGeminiDirect(KEY, [{role: "user", content: "hi"}], {thinkingBudget: 0});
    await callGeminiDirect(KEY, [{role: "user", content: "hi"}]);

    const bodies = fetchMock.mock.calls.map(
      (c) => JSON.parse((c as unknown as [string, RequestInit])[1].body as string),
    );
    expect(bodies[0].generationConfig.thinkingConfig).toEqual({thinkingBudget: 0});
    expect(bodies[1].generationConfig.thinkingConfig).toBeUndefined();
    expect(bodies[1].systemInstruction).toBeUndefined();
  });
});
