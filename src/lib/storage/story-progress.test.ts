import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";

import {getCompletedStoriesResult, markStoryCompleted} from "@/lib/storage/story-progress";

let values: Map<string, string>;
let storage: Storage;

describe("story completion storage", () => {
  beforeEach(() => {
    values = new Map();
    storage = {
      get length() { return values.size; },
      clear: () => values.clear(),
      getItem: (key) => values.get(key) ?? null,
      key: (index) => [...values.keys()][index] ?? null,
      removeItem: (key) => { values.delete(key); },
      setItem: (key, value) => { values.set(key, String(value)); },
    } as Storage;
    vi.stubGlobal("window", {localStorage: storage});
    vi.stubGlobal("localStorage", storage);
  });

  afterEach(() => vi.unstubAllGlobals());

  it("treats an absent key as a valid empty completion list", () => {
    expect(getCompletedStoriesResult()).toEqual({ok: true, stories: []});
  });

  it("reports corrupt data instead of presenting every story as incomplete", () => {
    values.set("dp:stories:v1", "not-json");
    expect(getCompletedStoriesResult()).toEqual({ok: false, stories: []});
  });

  it("does not overwrite corrupt stored data when recording completion", () => {
    values.set("dp:stories:v1", "{broken");
    expect(markStoryCompleted("a1-01")).toBe(false);
    expect(values.get("dp:stories:v1")).toBe("{broken");
  });

  it("records a completion once while preserving earlier stories", () => {
    values.set("dp:stories:v1", JSON.stringify(["a1-01"]));
    expect(markStoryCompleted("a1-02")).toBe(true);
    expect(getCompletedStoriesResult()).toEqual({ok: true, stories: ["a1-01", "a1-02"]});
  });
});
