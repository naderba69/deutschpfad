import { test, expect } from "@playwright/test";

const PAGES = ["/", "/lesson/a1-01", "/learning-path", "/level/a1", "/dashboard", "/stories", "/dialogues", "/flashcards", "/tests"];

for (const w of [320, 360, 390, 768, 1280]) {
  for (const p of PAGES) {
    test(`لا فيضان أفقي ${w}px: ${p}`, async ({ page }) => {
      await page.setViewportSize({ width: w, height: 850 });
      await page.goto(p, { waitUntil: "networkidle" }).catch(() => {});
      await page.waitForTimeout(600);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
      expect(overflow, `فيضان أفقي في ${p} عند ${w}px`).toBe(false);
    });
  }
}
