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
