import {beforeEach, describe, expect, it, vi} from "vitest";

import {getEventStatsResult, getRecentEvents, getRecentEventsResult} from "@/lib/analytics/events";
import {getDb} from "@/lib/storage/db";
import type {AnalyticsEvent} from "@/types/analytics";

vi.mock("@/lib/storage/db", () => ({getDb: vi.fn()}));

const first: AnalyticsEvent = {type: "lesson-view", lessonId: "a1-01", ts: 10};
const second: AnalyticsEvent = {type: "lesson-view", lessonId: "a1-02", ts: 20};

beforeEach(() => vi.mocked(getDb).mockReset());

describe("recent analytics event reads", () => {
  it("returns sorted recent events and respects the requested limit", async () => {
    vi.mocked(getDb).mockResolvedValue({getAll: vi.fn().mockResolvedValue([first, second])} as never);
    expect(await getRecentEventsResult(1)).toEqual({ok: true, events: [second]});
  });

  it("returns an empty list for a successful empty database read", async () => {
    vi.mocked(getDb).mockResolvedValue({getAll: vi.fn().mockResolvedValue([])} as never);
    expect(await getRecentEventsResult()).toEqual({ok: true, events: []});
  });

  it("reports read failure separately while preserving the legacy wrapper", async () => {
    vi.mocked(getDb).mockResolvedValue({getAll: vi.fn().mockRejectedValue(new Error("database unavailable"))} as never);
    expect(await getRecentEventsResult()).toEqual({ok: false, events: []});
    expect(await getEventStatsResult()).toEqual({ok: false});
    expect(await getRecentEvents()).toEqual([]);
  });
});
