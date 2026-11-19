import {beforeEach, describe, expect, it, vi} from "vitest";

const state = vi.hoisted(() => ({failDbRead: false, failDbWrite: false, mirrorSaved: true, writtenUnits: [] as string[]}));

vi.mock("@/lib/storage/db", () => ({
  getRecord: vi.fn(async () => {
    if (state.failDbRead) throw new Error("IndexedDB unavailable");
    return null;
  }),
  putRecord: vi.fn(async (_store: string, _key: string, data: {completedUnits: string[]}) => {
    if (state.failDbWrite) throw new Error("IndexedDB unavailable");
    state.writtenUnits.push(data.completedUnits[0]);
  }),
}));

vi.mock("@/lib/progress-store", () => ({
  EMPTY_PROGRESS: {completedUnits: [], sealedLevels: [], completedLessons: []},
  loadProgress: vi.fn(() => ({completedUnits: [], sealedLevels: [], completedLessons: []})),
  saveProgress: vi.fn(() => state.mirrorSaved),
}));

import {loadProgressResult, saveProgressToDb} from "@/lib/storage/progress-db";

const progress = {completedUnits: ["unit-1"], sealedLevels: [], completedLessons: []};

describe("explicit progress persistence result", () => {
  beforeEach(() => {
    state.failDbRead = false;
    state.failDbWrite = false;
    state.mirrorSaved = true;
    state.writtenUnits = [];
  });

  it("marks failed database reads as unsafe for automatic write-back", async () => {
    expect(await loadProgressResult()).toEqual({
      ok: true,
      state: {completedUnits: [], sealedLevels: [], completedLessons: []},
    });
    state.failDbRead = true;
    expect(await loadProgressResult()).toEqual({
      ok: false,
      state: {completedUnits: [], sealedLevels: [], completedLessons: []},
    });
  });

  it("reports both persistence targets succeeding", async () => {
    expect(await saveProgressToDb(progress)).toEqual({
      indexedDbSaved: true,
      localStorageSaved: true,
      persistedSomewhere: true,
    });
  });

  it("reports degraded persistence when IndexedDB fails but the mirror succeeds", async () => {
    state.failDbWrite = true;
    expect(await saveProgressToDb(progress)).toEqual({
      indexedDbSaved: false,
      localStorageSaved: true,
      persistedSomewhere: true,
    });
  });

  it("serializes rapid saves in call order so an older state cannot overwrite a newer one", async () => {
    const newer = {...progress, completedUnits: ["unit-2"]};
    await Promise.all([saveProgressToDb(progress), saveProgressToDb(newer)]);
    expect(state.writtenUnits).toEqual(["unit-1", "unit-2"]);
  });

  it("reports complete failure instead of claiming the progress was saved", async () => {
    state.failDbWrite = true;
    state.mirrorSaved = false;
    expect(await saveProgressToDb(progress)).toEqual({
      indexedDbSaved: false,
      localStorageSaved: false,
      persistedSomewhere: false,
    });
  });
});
