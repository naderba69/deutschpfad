import { expect, test } from "@playwright/test";

test("صفحة المراجعة التي زارها المستخدم تُفتح من الكاش عند انقطاع الشبكة", async ({ page }) => {
  await page.goto("/");
  await page.waitForFunction(
    () => Boolean(navigator.serviceWorker?.controller),
    null,
    { timeout: 30_000 },
  );

  await page.goto("/offline-review");
  const heading = page.getByRole("heading", { level: 1, name: /المراجعة دون إنترنت/ });
  await expect(heading).toBeVisible();
  await page.waitForFunction(async () => {
    const cache = await caches.open("navigation-pages");
    return Boolean(await cache.match(location.href));
  });

  await page.context().setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await expect(heading).toBeVisible();
  await expect(page.getByRole("status")).toContainText("كلمة متاحة دون اتصال");
  await page.getByRole("textbox", { name: "ابحث في المفردات" }).fill("Hallo");
  await expect(page.locator('[lang="de"]').filter({ hasText: "Hallo" }).first()).toBeVisible();
});
