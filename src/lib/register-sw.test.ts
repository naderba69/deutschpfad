import {afterEach, describe, expect, it, vi} from "vitest";

import {registerServiceWorker} from "@/lib/register-sw";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("تسجيل Service Worker", () => {
  it("يسجل فوراً إذا استُدعي بعد حدث load", () => {
    const register = vi.fn().mockResolvedValue({});
    vi.stubGlobal("navigator", {serviceWorker: {register}});
    vi.stubGlobal("document", {readyState: "complete"});
    vi.stubGlobal("window", {addEventListener: vi.fn()});

    registerServiceWorker();

    expect(register).toHaveBeenCalledWith("/sw.js");
  });

  it("ينتظر load مرة واحدة إذا لم يكتمل تحميل المستند", () => {
    const register = vi.fn().mockResolvedValue({});
    const addEventListener = vi.fn();
    vi.stubGlobal("navigator", {serviceWorker: {register}});
    vi.stubGlobal("document", {readyState: "interactive"});
    vi.stubGlobal("window", {addEventListener});

    registerServiceWorker();

    expect(addEventListener).toHaveBeenCalledWith("load", expect.any(Function), {once: true});
    expect(register).not.toHaveBeenCalled();
    addEventListener.mock.calls[0][1]();
    expect(register).toHaveBeenCalledWith("/sw.js");
  });
});
