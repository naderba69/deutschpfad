import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("http://localhost:3000/learning-path", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const out = await page.evaluate(() => {
  const spans = [...document.querySelectorAll("span")].filter(s => (s.textContent || "").includes("دروس"));
  return spans.map(s => (s.textContent || "").trim()).slice(0, 20);
});
console.log("شارات الدروس:", JSON.stringify(out, null, 1));
await browser.close();
