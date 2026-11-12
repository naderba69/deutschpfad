import {beforeEach, describe, expect, it, vi} from "vitest";

const state = vi.hoisted(() => ({events: [] as unknown[], failRead: false, saveResult: true}));

vi.mock("@/lib/analytics/events", () => ({
  recordEvent: vi.fn(async () => state.saveResult),
}));

vi.mock("@/lib/storage/db", () => ({
  getDb: vi.fn(async () => ({
    getAll: vi.fn(async () => {
      if (state.failRead) throw new Error("storage unavailable");
      return state.events;
    }),
  })),
}));

import {getLastTestResultResult, getRecentTestResultsResult, saveTestResult} from "@/lib/storage/test-results-store";
import type {TestResult} from "@/types/test";

const result: TestResult = {kind: "level", level: "A1", startedAt: 1, finishedAt: 2, secondsUsed: 1, overallPct: 60, passed: false, estimatedLevel: "A1", skillResults: [], reinforcement: [], review: []};

describe("test result storage reads", () => {
  beforeEach(() => {
    state.events = [];
    state.failRead = false;
    state.saveResult = true;
  });

  it("distinguishes no saved test results from read failure", async () => {
    expect(await getLastTestResultResult()).toEqual({ok: true, value: null});
    expect(await getRecentTestResultsResult()).toEqual({ok: true, value: []});

    state.failRead = true;
    expect(await getLastTestResultResult()).toEqual({ok: false, value: null});
    expect(await getRecentTestResultsResult()).toEqual({ok: false, value: null});
  });

  it("surfaces whether saving a test result succeeded", async () => {
    expect(await saveTestResult(result)).toBe(true);
    state.saveResult = false;
    expect(await saveTestResult(result)).toBe(false);
  });

  it("returns the newest valid test result and respects the requested limit", async () => {
    state.events = [
      {type: "test-result", ts: 1, result: {...result, overallPct: 10}},
      {type: "lesson-view", ts: 4},
      {type: "test-result", ts: 3, result: {...result, overallPct: 30}},
    ];
    expect(await getLastTestResultResult()).toEqual({ok: true, value: {...result, overallPct: 30}});
    expect(await getRecentTestResultsResult(1)).toEqual({ok: true, value: [{...result, overallPct: 30}]});
  });
});
