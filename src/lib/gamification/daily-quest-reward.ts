export type QuestRewardResult =
  | {status: "claimed" | "already-claimed"; claimed: Record<string, boolean>}
  | {status: "claim-storage-error" | "reward-error"; claimed: Record<string, boolean>};

/**
 * Reserve a quest claim before awarding its gems so storage failures don't
 * silently mark an unawarded reward as claimed or routinely award it twice.
 */
export function claimQuestReward(
  id: string,
  amount: number,
  claimed: Record<string, boolean>,
  persist: (next: Record<string, boolean>) => boolean,
  award: (amount: number) => {ok: boolean},
): QuestRewardResult {
  if (claimed[id]) return {status: "already-claimed", claimed};

  const next = {...claimed, [id]: true};
  if (!persist(next)) return {status: "claim-storage-error", claimed};
  if (!award(amount).ok) {
    persist(claimed);
    return {status: "reward-error", claimed};
  }
  return {status: "claimed", claimed: next};
}
