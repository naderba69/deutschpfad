import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
// راقب كل تغيير تمرير مع مصدره
await page.addInitScript(() => {
  window.__scrollLog = [];
  window.addEventListener("scroll", () => {
    if (window.__scrollLog.length < 30) {
      window.__scrollLog.push({ y: Math.round(window.scrollY), t: performance.now().toFixed(0) });
    }
  }, { passive: true, capture: true });
});
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(3000);
const r = await page.evaluate(() => ({
  log: window.__scrollLog,
  hash: location.hash,
  href: location.href,
  sessionRestore: history.scrollRestoration,
}));
console.log(JSON.stringify(r, null, 1));
await browser.close();
