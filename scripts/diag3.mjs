import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
const page = await ctx.newPage();
await page.goto("http://localhost:3000/level/a1", { waitUntil: "networkidle" });
await page.waitForTimeout(500);
const r = await page.evaluate(() => {
  const first = [...document.querySelectorAll("main a.group")].find(a => a.textContent.includes("Das Alphabet"));
  const f = first ? first.getBoundingClientRect() : null;
  return { scrollY: window.scrollY, firstCard: f ? { top: Math.round(f.top), bottom: Math.round(f.bottom) } : null,
           mainChildren: [...document.querySelectorAll("main > div > *")].slice(0,6).map(el => ({tag: el.tagName, cls: String(el.className).slice(0,60), h: Math.round(el.getBoundingClientRect().height)})) };
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
