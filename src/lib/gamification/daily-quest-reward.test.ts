import {describe, expect, it, vi} from "vitest";

import {claimQuestReward} from "@/lib/gamification/daily-quest-reward";

describe("daily quest reward claiming", () => {
  it("does not award or claim when claim storage fails", () => {
    const award = vi.fn(() => ({ok: true}));
    const result = claimQuestReward("reading", 4, {}, () => false, award);
    expect(result).toEqual({status: "claim-storage-error", claimed: {}});
    expect(award).not.toHaveBeenCalled();
  });

  it("rolls back the claim when the gem award fails", () => {
    const persist = vi.fn(() => true);
    const result = claimQuestReward("reading", 4, {}, persist, () => ({ok: false}));
    expect(result).toEqual({status: "reward-error", claimed: {}});
    expect(persist).toHaveBeenNthCalledWith(1, {reading: true});
    expect(persist).toHaveBeenNthCalledWith(2, {});
  });

  it("persists a successful claim once and rejects duplicate awards", () => {
    const persist = vi.fn(() => true);
    const award = vi.fn(() => ({ok: true}));
    const result = claimQuestReward("reading", 4, {}, persist, award);
    expect(result).toEqual({status: "claimed", claimed: {reading: true}});
    expect(award).toHaveBeenCalledOnce();
    expect(claimQuestReward("reading", 4, result.claimed, persist, award).status).toBe("already-claimed");
    expect(award).toHaveBeenCalledOnce();
  });
});
