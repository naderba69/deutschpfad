import { describe, expect, it } from "vitest";

import {
  buildGeminiTtsBody,
  extractPcm,
  geminiTtsUrl,
  pcm16ToWav,
  TTS_MAX_CHARS,
  validateTtsText,
} from "@/lib/llm/server/tts";

const pcmB64 = Buffer.from(new Uint8Array([1, 0, 2, 0])).toString("base64");

describe("Gemini TTS — الطلب", () => {
  it("يطلب استجابة صوتية فقط بالصوت المحدد", () => {
    const body = buildGeminiTtsBody("Guten Morgen") as {
      generationConfig: { responseModalities: string[] };
    };
    expect(body.generationConfig.responseModalities).toEqual(["AUDIO"]);
    expect(JSON.stringify(body)).toContain("Guten Morgen");
  });

  it("عنوان النموذج يُرمّز ولا يحمل المفتاح", () => {
    const url = geminiTtsUrl("gemini-2.5-flash-preview-tts");
    expect(url).toContain("generativelanguage.googleapis.com");
    expect(url).toContain(":generateContent");
    expect(url).not.toMatch(/key=/);
  });
});

describe("Gemini TTS — استخراج الصوت", () => {
  it("يقرأ PCM ومعدل العينات من mimeType", () => {
    const { pcm, sampleRate } = extractPcm({
      candidates: [{ content: { parts: [{ inlineData: { mimeType: "audio/L16;codec=pcm;rate=24000", data: pcmB64 } }] } }],
    });
    expect(sampleRate).toBe(24000);
    expect(Array.from(pcm)).toEqual([1, 0, 2, 0]);
  });

  it("يرفض الاستجابة دون صوت أو بمعدل غير معقول", () => {
    expect(() => extractPcm({})).toThrow();
    expect(() => extractPcm({ candidates: [{ content: { parts: [{ text: "x" }] } }] })).toThrow();
    expect(() =>
      extractPcm({ candidates: [{ content: { parts: [{ inlineData: { mimeType: "audio/L16;rate=1", data: pcmB64 } }] } }] }),
    ).toThrow();
  });
});

describe("WAV", () => {
  it("يبني ترويسة WAV صحيحة (44 بايت + البيانات)", () => {
    const wav = pcm16ToWav(new Uint8Array([1, 0, 2, 0]), 24000);
    expect(wav.length).toBe(48);
    const text = (from: number, to: number) => String.fromCharCode(...wav.slice(from, to));
    expect(text(0, 4)).toBe("RIFF");
    expect(text(8, 12)).toBe("WAVE");
    expect(text(36, 40)).toBe("data");
    const view = new DataView(wav.buffer);
    expect(view.getUint32(4, true)).toBe(40);
    expect(view.getUint32(24, true)).toBe(24000);
    expect(view.getUint16(34, true)).toBe(16);
    expect(view.getUint32(40, true)).toBe(4);
  });
});

describe("التحقق من النص", () => {
  it("يقبل نصاً قصيراً ويقصّ المسافات", () => {
    expect(validateTtsText("  Hallo  ")).toEqual({ ok: true, text: "Hallo" });
  });
  it("يرفض غير النص والفارغ والطويل", () => {
    expect(validateTtsText(5).ok).toBe(false);
    expect(validateTtsText("   ").ok).toBe(false);
    expect(validateTtsText("a".repeat(TTS_MAX_CHARS + 1)).ok).toBe(false);
  });
});
