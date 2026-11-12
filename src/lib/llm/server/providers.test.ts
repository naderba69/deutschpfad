import {afterEach, describe, expect, it, vi} from "vitest";

import {callGroq} from "./providers";

afterEach(() => vi.unstubAllGlobals());

describe("LLM provider cancellation", () => {
  it("propagates the request abort signal through the provider fetch", async () => {
    const fetchMock = vi.fn((_input: RequestInfo | URL, init?: RequestInit) =>
      new Promise<Response>((_resolve, reject) => {
        const signal = init?.signal;
        if (!signal) {
          reject(new Error("missing abort signal"));
          return;
        }
        if (signal.aborted) {
          reject(signal.reason);
          return;
        }
        signal.addEventListener("abort", () => reject(signal.reason), {once: true});
      }),
    );
    vi.stubGlobal("fetch", fetchMock);

    const controller = new AbortController();
    const pending = callGroq([{role: "user", content: "test"}], {}, controller.signal);
    const reason = new Error("request deadline");
    controller.abort(reason);

    await expect(pending).rejects.toBe(reason);
    expect(fetchMock).toHaveBeenCalledOnce();
  });
});
