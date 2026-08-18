import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
const page = await ctx.newPage();
await page.goto("http://localhost:3000/dashboard", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

const res = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const out = [];
  // كل العناصر التي عرضها الفعلي يتجاوز والدها (في صفحة اللوحة)
  document.querySelectorAll("div, p, span, a, button, h2, h3").forEach((el) => {
    const r = el.getBoundingClientRect();
    const p = el.parentElement;
    if (!p) return;
    const pr = p.getBoundingClientRect();
    if (r.width > vw) {
      const st = getComputedStyle(el);
      if (st.position === "absolute" || st.position === "fixed") return;
      out.push({
        tag: el.tagName.toLowerCase(),
        cls: String(el.className).slice(0, 80),
        w: Math.round(r.width), left: Math.round(r.left),
        txt: (el.textContent || "").trim().slice(0, 40),
      });
    }
  });
  return { vw, wide: out.slice(0, 40) };
});
console.log(JSON.stringify(res, null, 1));
await browser.close();
