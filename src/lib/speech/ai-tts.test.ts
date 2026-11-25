import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fetchAiSpeechUrl, isAiVoiceEnabled, setAiVoiceEnabled } from "@/lib/speech/ai-tts";

function installStorage(): void {
  const data = new Map<string, string>();
  (globalThis as unknown as { window: unknown }).window = {
    localStorage: {
      getItem: (k: string) => (data.has(k) ? data.get(k)! : null),
      setItem: (k: string, v: string) => void data.set(k, v),
      clear: () => data.clear(),
    },
  };
}

describe("الصوت الذكي — التفضيل", () => {
  beforeEach(() => installStorage());

  it("مغلق افتراضياً ويحفظ الاختيار", () => {
    expect(isAiVoiceEnabled()).toBe(false);
    setAiVoiceEnabled(true);
    expect(isAiVoiceEnabled()).toBe(true);
    setAiVoiceEnabled(false);
    expect(isAiVoiceEnabled()).toBe(false);
  });
});

describe("الصوت الذكي — الجلب", () => {
  const originalFetch = globalThis.fetch;
  beforeEach(() => {
    URL.createObjectURL = vi.fn(() => "blob:test-1");
    URL.revokeObjectURL = vi.fn();
  });
  afterEach(() => {
    globalThis.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("يعيد null عند رفض الخادم فتبقى الواجهة على صوت المتصفح", async () => {
    globalThis.fetch = vi.fn(async () => new Response(JSON.stringify({ status: "not-configured" }), { status: 200, headers: { "content-type": "application/json" } }));
    expect(await fetchAiSpeechUrl("Guten Tag")).toBeNull();
  });

  it("يعيد null عند خطأ شبكي", async () => {
    globalThis.fetch = vi.fn(async () => {
      throw new TypeError("network");
    });
    expect(await fetchAiSpeechUrl("Guten Tag")).toBeNull();
  });

  it("يخزّن النتيجة مؤقتاً فلا يُستدعى الخادم مرتين لنفس الجملة", async () => {
    const fetchMock = vi.fn(async () => new Response(new Uint8Array([1, 2]), { status: 200, headers: { "content-type": "audio/wav" } }));
    globalThis.fetch = fetchMock;
    const first = await fetchAiSpeechUrl("Hallo Welt");
    const second = await fetchAiSpeechUrl("Hallo Welt");
    expect(first).toBe("blob:test-1");
    expect(second).toBe("blob:test-1");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
