import {beforeEach, describe, expect, it, vi} from "vitest";

const state = vi.hoisted(() => ({rows: [] as unknown[], failRead: false}));

vi.mock("@/lib/storage/db", () => ({
  getDb: vi.fn(async () => ({
    getAll: vi.fn(async () => {
      if (state.failRead) throw new Error("storage unavailable");
      return state.rows;
    }),
  })),
}));

import {getSnapshotsResult, maybeAutoSnapshot} from "@/lib/storage/export-import";

describe("snapshot list storage read result", () => {
  beforeEach(() => {
    state.rows = [];
    state.failRead = false;
  });

  it("represents a readable empty snapshot list as success", async () => {
    expect(await getSnapshotsResult()).toEqual({ok: true, rows: []});
  });

  it("reports storage read failure separately from an empty list", async () => {
    state.failRead = true;
    expect(await getSnapshotsResult()).toEqual({ok: false, rows: []});
  });

  it("does not report a storage read failure as an existing automatic snapshot", async () => {
    state.failRead = true;
    expect(await maybeAutoSnapshot()).toBe("error");
  });

  it("reports an existing automatic snapshot distinctly", async () => {
    state.rows = [{id: "today", createdAt: Date.now(), kind: "auto"}];
    expect(await maybeAutoSnapshot()).toBe("already-exists");
  });

  it("sorts readable snapshots newest first", async () => {
    state.rows = [
      {id: "older", createdAt: 10},
      {id: "newer", createdAt: 20},
    ];
    const result = await getSnapshotsResult();
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.rows.map((row) => row.id)).toEqual(["newer", "older"]);
  });
});
