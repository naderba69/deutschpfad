/* تحقق آلي من أرقام الواجهة — المرحلة 4 (توحيد الحقيقة) */
import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

console.log("=== /learning-path ===");
await page.goto("http://localhost:3000/learning-path", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const body = await page.locator("body").innerText();
// 48 درساً و46 وحدة
const has48 = body.includes("48+ درساً") || body.includes("48 درساً");
const has46 = body.includes("46 وحدة");
const has251 = body.includes("251");
const has45 = body.includes("45 وحدة");
console.log("  «48+ درساً»:", has48, "| «46 وحدة»:", has46, "| 251:", has251, "| «45 وحدة»:", has45);
// وحدة a1-01: عدد الدروس (2)
const unitText = await page.evaluate(() => {
  const cards = [...document.querySelectorAll("div")].filter(d => (d.textContent || "").includes("التعارف والتحيات"));
  return cards.map(c => (c.textContent || "").slice(0, 120)).slice(0, 2);
});
console.log("  بطاقة وحدة التعارف:", JSON.stringify(unitText));

console.log("\n=== /dashboard ===");
await page.goto("http://localhost:3000/dashboard", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const dash = await page.locator("body").innerText();
console.log("  يحتوي /45:", dash.includes("/45"));

console.log("\n=== / (الرئيسية) ===");
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const home = await page.locator("body").innerText();
console.log("  «48 درساً» في الرئيسية:", home.includes("48 درساً"));

await browser.close();
