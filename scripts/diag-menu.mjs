import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
const r = await page.evaluate(() => {
  const els = [...document.querySelectorAll("a")].filter(a => (a.textContent || "").includes("التقييم"));
  return els.map(a => {
    const r = a.getBoundingClientRect();
    const st = getComputedStyle(a);
    return { txt: a.textContent.trim().slice(0, 40), rect: { t: Math.round(r.top), b: Math.round(r.bottom), l: Math.round(r.left), r: Math.round(r.right), w: Math.round(r.width) },
             display: st.display, visibility: st.visibility, opacity: st.opacity, dataState: a.closest("[data-state]")?.getAttribute("data-state") || null,
             offsetParent: !!a.offsetParent };
  });
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
