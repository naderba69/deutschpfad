import { beforeEach, describe, expect, it, vi } from "vitest";

const memory = vi.hoisted(() => ({ records: new Map<string, unknown>(), failReads: false }));

vi.mock("@/lib/storage/db", () => ({
  getRecord: vi.fn(async (_store: string, key: string) => {
    if (memory.failReads) throw new Error("storage unavailable");
    return memory.records.get(key) ?? null;
  }),
  putRecord: vi.fn(async (_store: string, key: string, data: unknown) => {
    memory.records.set(key, data);
  }),
}));

import { getNotebook, getNotebookEntryId, getNotebookResult, recordMistake } from "@/lib/storage/error-notebook";

describe("error notebook exercise identity", () => {
  beforeEach(() => {
    memory.records.clear();
    memory.failReads = false;
  });
  it("scopes a reused exercise id to its lesson or training source", () => {
    expect(getNotebookEntryId("a1-01", "e1")).not.toBe(getNotebookEntryId("a1-02", "e1"));
    expect(getNotebookEntryId("dashboard:five-minutes", "e1")).not.toBe(
      getNotebookEntryId("dashboard:review-daily", "e1"),
    );
    expect(getNotebookEntryId("writing-path", "task-1")).not.toBe(
      getNotebookEntryId("a1-01", "task-1"),
    );
  });

  it("keeps repeat attempts on the same source exercise in one entry", () => {
    expect(getNotebookEntryId("a1-01", "e1")).toBe(getNotebookEntryId("a1-01", "e1"));
  });

  it("distinguishes storage read failure from a genuinely empty notebook", async () => {
    memory.failReads = true;
    expect(await getNotebookResult()).toEqual({ok: false, rows: []});
  });

  it("does not replace saved entries with an empty list when storage reading fails", async () => {
    const existing = {
      id: getNotebookEntryId("a1-01", "e1"),
      exerciseId: "e1",
      sourceId: "a1-01",
      lessonId: "a1-01",
      errorType: "grammar",
      explanation: "Existing entry",
    };
    await recordMistake(existing);
    const before = memory.records.get("error-notebook:v1");

    memory.failReads = true;
    await recordMistake({
      id: getNotebookEntryId("a1-02", "e1"),
      exerciseId: "e1",
      sourceId: "a1-02",
      lessonId: "a1-02",
      errorType: "grammar",
      explanation: "Another entry",
    });

    expect(memory.records.get("error-notebook:v1")).toEqual(before);
  });

  it("stores different lesson exercises separately but aggregates retries for each one", async () => {
    const makeEntry = (lessonId: string) => ({
      id: getNotebookEntryId(lessonId, "e1"),
      exerciseId: "e1",
      sourceId: lessonId,
      lessonId,
      errorType: "grammar",
      explanation: "Check the verb form.",
      correctAnswer: "bin",
    });

    await recordMistake(makeEntry("a1-01"));
    await recordMistake(makeEntry("a1-02"));
    await recordMistake(makeEntry("a1-01"));

    const rows = await getNotebook();
    expect(rows).toHaveLength(2);
    expect(rows.find((row) => row.lessonId === "a1-01")?.count).toBe(2);
    expect(rows.find((row) => row.lessonId === "a1-02")?.count).toBe(1);
  });
});
