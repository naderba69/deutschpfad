import {afterEach, describe, expect, it, vi} from "vitest";

import {reserveSharedServerUsage} from "./counter";

afterEach(() => vi.unstubAllGlobals());

describe("shared LLM daily quota", () => {
  it("uses one atomic Redis script to reserve a slot", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({result: [7, 1]}), {status: 200}),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(reserveSharedServerUsage(50, "2026-11-04", "https://redis.example", "secret"))
      .resolves.toBe(7);

    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://redis.example");
    expect((init.headers as Record<string, string>).Authorization).toBe("Bearer secret");
    const command = JSON.parse(String(init.body)) as unknown[];
    expect(command[0]).toBe("EVAL");
    expect(String(command[1])).toContain("redis.call('INCR'");
    expect(command.slice(2, 5)).toEqual(["1", "deutschpfad:llm:daily:2026-11-04", "50"]);
  });

  it("returns null when the atomic counter reports the limit is already reached", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(
      new Response(JSON.stringify({result: [50, 0]}), {status: 200}),
    ));

    await expect(reserveSharedServerUsage(50, "2026-11-04", "https://redis.example", "secret"))
      .resolves.toBeNull();
  });

  it("fails closed when the shared store is unavailable", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("", {status: 503})));

    await expect(reserveSharedServerUsage(50, "2026-11-04", "https://redis.example", "secret"))
      .rejects.toThrow("تعذر حجز حصة LLM");
  });
});
