import {describe, expect, it, vi} from "vitest";

import {initVoices, selectGermanVoice, waitForGermanVoice} from "./voices";

function voice(lang: string, name = lang): SpeechSynthesisVoice {
  return {
    name,
    lang,
    voiceURI: name,
    default: false,
    localService: true,
  } as SpeechSynthesisVoice;
}

describe("selectGermanVoice", () => {
  it("never selects an English voice as a fallback", () => {
    expect(selectGermanVoice([voice("en-US"), voice("en-GB")])).toBeNull();
  });

  it("prefers a German de-DE voice and accepts other German locales", () => {
    const deAt = voice("de-AT");
    const deDe = voice("de-DE");
    expect(selectGermanVoice([voice("en-US"), deAt, deDe])).toBe(deDe);
    expect(selectGermanVoice([deAt])).toBe(deAt);
  });

  it("waits for a delayed German voice instead of accepting early English voices", async () => {
    let voices: SpeechSynthesisVoice[] = [voice("en-US")];
    const target = Object.assign(new EventTarget(), {
      getVoices: () => voices,
    }) as SpeechSynthesis;

    const result = waitForGermanVoice(100, target);
    voices = [voice("en-US"), voice("de-DE")];
    target.dispatchEvent(new Event("voiceschanged"));

    await expect(result).resolves.toMatchObject({lang: "de-DE"});
  });

  it("returns null after timeout when the device only provides non-German voices", async () => {
    const target = Object.assign(new EventTarget(), {
      getVoices: () => [voice("en-US")],
    }) as SpeechSynthesis;

    await expect(waitForGermanVoice(1, target)).resolves.toBeNull();
  });

  it("removes its voiceschanged listener after German voices become ready", () => {
    let voices: SpeechSynthesisVoice[] = [];
    const target = Object.assign(new EventTarget(), {
      getVoices: () => voices,
    }) as SpeechSynthesis;
    const ready = vi.fn();
    initVoices(ready, target);

    voices = [voice("de-DE")];
    target.dispatchEvent(new Event("voiceschanged"));
    target.dispatchEvent(new Event("voiceschanged"));

    expect(ready).toHaveBeenCalledOnce();
  });

  it("allows pending voice listeners to be cleaned up when the provider unmounts", () => {
    let voices: SpeechSynthesisVoice[] = [];
    const target = Object.assign(new EventTarget(), {
      getVoices: () => voices,
    }) as SpeechSynthesis;
    const ready = vi.fn();
    const cleanup = initVoices(ready, target);
    cleanup();
    voices = [voice("de-DE")];
    target.dispatchEvent(new Event("voiceschanged"));

    expect(ready).not.toHaveBeenCalled();
  });
});
