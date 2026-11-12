import {afterEach, beforeEach, describe, expect, it, vi} from "vitest";

import {addGemsResult, getGemsResult, spendGems} from "@/lib/gamification/gems";

let values: Map<string, string>;
let storage: Storage;
let failReads = false;
let failWrites = false;

describe("safe local gem balance", () => {
  beforeEach(() => {
    values = new Map();
    failReads = false;
    failWrites = false;
    storage = {
      get length() { return values.size; },
      clear: () => values.clear(),
      getItem: (key) => {
        if (failReads) throw new Error("storage read failed");
        return values.get(key) ?? null;
      },
      key: (index) => [...values.keys()][index] ?? null,
      removeItem: (key) => { values.delete(key); },
      setItem: (key, value) => {
        if (failWrites) throw new Error("storage write failed");
        values.set(key, String(value));
      },
    } as Storage;
    vi.stubGlobal("window", {localStorage: storage});
    vi.stubGlobal("localStorage", storage);
  });

  afterEach(() => vi.unstubAllGlobals());

  it("reads a missing key as a valid zero balance", () => {
    expect(getGemsResult()).toEqual({ok: true, balance: 0});
  });

  it("does not replace an existing balance after a read failure", () => {
    values.set("dp:gems", "42");
    failReads = true;
    expect(addGemsResult(5)).toEqual({ok: false, balance: 0});
    expect(values.get("dp:gems")).toBe("42");
    expect(spendGems(5)).toBe(false);
  });

  it("rejects malformed stored balances and invalid amounts", () => {
    values.set("dp:gems", "12xyz");
    expect(getGemsResult()).toEqual({ok: false, balance: 0});
    expect(addGemsResult(5).ok).toBe(false);
    values.set("dp:gems", "12");
    expect(addGemsResult(-5)).toEqual({ok: false, balance: 12});
    expect(spendGems(-1)).toBe(false);
    expect(values.get("dp:gems")).toBe("12");
  });

  it("adds and spends valid amounts", () => {
    values.set("dp:gems", "10");
    expect(addGemsResult(5)).toEqual({ok: true, balance: 15});
    expect(spendGems(4)).toBe(true);
    expect(values.get("dp:gems")).toBe("11");
  });

  it("does not claim a successful addition when storage rejects the write", () => {
    values.set("dp:gems", "10");
    failWrites = true;
    expect(addGemsResult(3)).toEqual({ok: false, balance: 10});
    expect(spendGems(2)).toBe(false);
  });
});
