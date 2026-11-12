import { describe, expect, it } from "vitest";

import { parseDailyLimit } from "./config";

describe("parseDailyLimit", () => {
  it("accepts positive safe integer quotas", () => {
    expect(parseDailyLimit("1")).toBe(1);
    expect(parseDailyLimit("250")).toBe(250);
  });

  it.each([undefined, "", "abc", "0", "-1", "1.5", "Infinity", "9007199254740992"])(
    "uses the finite default for invalid quota %s",
    (value) => {
      expect(parseDailyLimit(value)).toBe(50);
    },
  );

  it("rejects an invalid default rather than silently disabling the quota", () => {
    expect(() => parseDailyLimit("10", 0)).toThrow(RangeError);
    expect(() => parseDailyLimit("10", Number.POSITIVE_INFINITY)).toThrow(RangeError);
  });
});
