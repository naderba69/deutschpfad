/* تحقق آلي من اتساق أعداد الواجهة مع سجل المنهج الحالي. */
import assert from "node:assert/strict";
import { chromium } from "@playwright/test";

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  console.log("=== /learning-path ===");
  await page.goto("http://localhost:3000/learning-path", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const body = await page.locator("body").innerText();
  assert.match(body, /47 وحدة/);
  assert.match(body, /52 درساً/);
  assert.doesNotMatch(body, /251|46 وحدة|48\+? درساً/);
  const unitCounts = await page.evaluate(() => {
    const spans = [...document.querySelectorAll("span")].map((s) => (s.textContent || "").trim());
    return spans.filter((text) => /^\d+ دروس$/.test(text));
  });
  assert.ok(unitCounts.includes("3 دروس"), "ينبغي أن تعرض وحدة a1-01 دروسها الثلاثة");

  console.log("=== /dashboard ===");
  await page.goto("http://localhost:3000/dashboard", { waitUntil: "networkidle" });
  const dashboard = await page.locator("body").innerText();
  assert.doesNotMatch(dashboard, /\/(?:45|48)\b/);

  console.log("=== / (الرئيسية) ===");
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  const home = await page.locator("body").innerText();
  assert.match(home, /52 درساً/);
  console.log("نجح التحقق: 52 درساً، 47 وحدة، ولا توجد الأعداد القديمة.");
} finally {
  await browser.close();
}
