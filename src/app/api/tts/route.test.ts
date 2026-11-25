import { afterEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/tts/route";

function req(body: unknown): Request {
  return new Request("http://localhost/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-forwarded-for": `10.0.${Math.floor(Math.random() * 200)}.1` },
    body: JSON.stringify(body),
  });
}

describe("/api/tts — الإغلاق الافتراضي", () => {
  const fetchSpy = vi.fn(async () => new Response("{}", { status: 200 }));
  afterEach(() => {
    vi.unstubAllGlobals();
    fetchSpy.mockClear();
  });

  it("لا يستدعي المزود دون تفعيل الخادم (LLM_SERVER_MODE غير مضبوط)", async () => {
    vi.stubGlobal("fetch", fetchSpy);
    const res = await POST(req({ text: "Guten Tag" }));
    const data = (await res.json()) as { status: string };
    expect(data.status).toBe("not-configured");
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("يرفض الطلب غير الصالح قبل أي شيء", async () => {
    vi.stubGlobal("fetch", fetchSpy);
    const res = await POST(req(["not", "an", "object"]));
    expect(res.status).toBe(400);
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
