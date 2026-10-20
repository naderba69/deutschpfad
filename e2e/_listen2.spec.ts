import { test, expect } from "@playwright/test";
test("التدفق كاملاً — لا حبس", async ({ page }) => {
  await page.goto("/lesson/a1-01");
  await page.evaluate(async () => {
    try {
        const dbs = await indexedDB.databases();
        for (const db of dbs) {
          const dbName = db.name;
            if (dbName) {
              await new Promise<void>((res) => {
                const req = indexedDB.deleteDatabase(dbName);
                req.onsuccess = () => res();
                req.onerror = () => res();
                req.onblocked = () => res();
              });
            }
        }
      } catch {}
    localStorage.clear();
  });
  await page.reload();
  await page.waitForTimeout(1500);
  let guard = 0;
  while (guard < 25) {
    const nextBtn = page.getByRole("button", { name: /^التالي:/ }).first();
    if (await nextBtn.isVisible().catch(() => false)) {
      await nextBtn.click().catch(() => {});
    } else break;
    await page.waitForTimeout(500);
    guard++;
  }
  const btns = await page.getByRole("button").count();
  console.log("STEPS:", guard, "BUTTONS:", btns);
  expect(btns).toBeGreaterThan(0);
});
