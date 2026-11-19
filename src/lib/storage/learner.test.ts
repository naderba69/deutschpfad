import {beforeEach, describe, expect, it, vi} from "vitest";

const memory = vi.hoisted(() => ({profile: {} as Record<string, unknown>}));

vi.mock("@/lib/storage/db", () => ({
  getRecord: vi.fn(async () => memory.profile),
  putRecord: vi.fn(async (_store: string, _key: string, profile: Record<string, unknown>) => {
    await new Promise((resolve) => setTimeout(resolve, profile.studyHour === 7 ? 15 : 0));
    memory.profile = profile;
  }),
}));

import {saveLearnerProfile} from "@/lib/storage/learner";

describe("learner profile partial updates", () => {
  beforeEach(() => {
    memory.profile = {};
  });

  it("serializes concurrent partial updates without losing either field", async () => {
    await Promise.all([
      saveLearnerProfile({studyHour: 7}),
      saveLearnerProfile({placementLevel: "B1"}),
    ]);
    expect(memory.profile.studyHour).toBe(7);
    expect(memory.profile.placementLevel).toBe("B1");
  });
});
