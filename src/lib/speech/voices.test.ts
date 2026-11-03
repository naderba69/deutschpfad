import {afterEach, describe, expect, it} from "vitest";

import {isSpeechSynthesisSupported} from "@/lib/speech/voices";

const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");

afterEach(() => {
  if (originalWindow) Object.defineProperty(globalThis, "window", originalWindow);
  else Reflect.deleteProperty(globalThis, "window");
});

describe("isSpeechSynthesisSupported", () => {
  it("returns false when window is unavailable", () => {
    Object.defineProperty(globalThis, "window", {configurable: true, value: undefined});
    expect(isSpeechSynthesisSupported()).toBe(false);
  });

  it("returns false when the browser does not expose speechSynthesis", () => {
    Object.defineProperty(globalThis, "window", {configurable: true, value: {}});
    expect(isSpeechSynthesisSupported()).toBe(false);
  });

  it("returns false when speechSynthesis exists without a speak function", () => {
    Object.defineProperty(globalThis, "window", {
      configurable: true,
      value: {speechSynthesis: {}},
    });
    expect(isSpeechSynthesisSupported()).toBe(false);
  });

  it("returns true only when speechSynthesis has a speak function", () => {
    Object.defineProperty(globalThis, "window", {
      configurable: true,
      value: {speechSynthesis: {speak: () => undefined}},
    });
    expect(isSpeechSynthesisSupported()).toBe(true);
  });
});
