import { test, expect } from "@playwright/test";
const PAGES = ["/", "/learning-path", "/level/a1", "/lesson/a1-01", "/stories", "/grammatik", "/glossar", "/tests"];
for (const p of PAGES) {
  test(`جوال 360px بلا فيضان: ${p}`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto(p, { waitUntil: "networkidle" }).catch(() => {});
    await page.waitForTimeout(600);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
    expect(overflow, `فيضان أفقي في ${p}`).toBe(false);
  });
}
