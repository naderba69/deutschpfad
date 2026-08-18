import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.addInitScript(() => {
  window.__calls = [];
  const origFocus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function(...args) {
    window.__calls.push({ api: "focus", el: this.tagName + "#" + this.id + "." + String(this.className).slice(0, 50) });
    return origFocus.apply(this, args);
  };
  // راقب الـ CSSOM: تغييرات scroll-behavior
  window.addEventListener("scroll", () => {
    if (window.__calls.length < 40) window.__calls.push({ api: "scroll", y: Math.round(window.scrollY) });
  }, { passive: true });
});
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2500);
console.log(JSON.stringify(await page.evaluate(() => window.__calls), null, 1));
await browser.close();
