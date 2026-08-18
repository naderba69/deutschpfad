import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto("http://localhost:3000/learning-path", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
// ابحث عن نص "دروس" بجانب أرقام في بطاقات الوحدات
const units = await page.evaluate(() => {
  const out = [];
  document.querySelectorAll("button, div").forEach((el) => {
    const t = (el.textContent || "").trim();
    const m = t.match(/^(\d+) دروس$/);
    if (m) out.push(m[0]);
  });
  return [...new Set(out)];
});
console.log("عدد الدروس المعروض في بطاقات الوحدات:", units);
await browser.close();
