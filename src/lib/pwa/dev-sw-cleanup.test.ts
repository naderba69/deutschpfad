import {describe, expect, it} from "vitest";

import {unregisterServiceWorkersForDev, type ServiceWorkerRegistrationLike} from "./dev-sw-cleanup";

const reg = (ok = true): ServiceWorkerRegistrationLike & {called: boolean} => {
  const r = {
    called: false,
    async unregister() {
      r.called = true;
      if (!ok) throw new Error("فشل");
      return true;
    },
  };
  return r;
};

describe("تنظيف Service Worker في التطوير", () => {
  it("يلغي كل التسجيلات ويعيد عددها", async () => {
    const a = reg();
    const b = reg();
    const n = await unregisterServiceWorkersForDev({getRegistrations: async () => [a, b]});
    expect(n).toBe(2);
    expect(a.called && b.called).toBe(true);
  });

  it("لا تسجيلات: لا شيء يحدث ويعيد صفراً", async () => {
    expect(await unregisterServiceWorkersForDev({getRegistrations: async () => []})).toBe(0);
  });

  it("فشل تسجيل واحد لا يمنع إلغاء الباقي", async () => {
    const bad = reg(false);
    const good = reg();
    await expect(
      unregisterServiceWorkersForDev({getRegistrations: async () => [bad, good]}),
    ).resolves.toBe(2);
    expect(good.called).toBe(true);
  });
});
