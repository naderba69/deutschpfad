import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
const page = await ctx.newPage();
await page.goto("http://localhost:3000/dashboard", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);

const res = await page.evaluate(() => {
  const out = [];
  const cards = [...document.querySelectorAll("div")].filter((d) =>
    (d.textContent || "").includes("كلمة اليوم") && d.className.toString().includes("rounded-xl border bg-card")
  );
  const el = cards[0];
  if (!el) return { found: false };
  let cur = el;
  let depth = 0;
  while (cur && depth < 12) {
    const r = cur.getBoundingClientRect();
    const st = getComputedStyle(cur);
    out.push({
      depth,
      tag: cur.tagName.toLowerCase(),
      cls: String(cur.className).slice(0, 100),
      w: Math.round(r.width), left: Math.round(r.left), right: Math.round(r.right),
      overflowX: st.overflowX, minWidth: st.minWidth, display: st.display,
    });
    cur = cur.parentElement;
    depth++;
  }
  return { found: true, chain: out, vw: document.documentElement.clientWidth };
});
console.log(JSON.stringify(res, null, 1));
await browser.close();
