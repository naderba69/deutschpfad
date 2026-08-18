import { chromium } from "@playwright/test";
const PAGES = ["/tests/b2","/sprechen","/tests/vollpruefung","/tests","/speaking"];
const browser = await chromium.launch();
const results = [];
for (const path of PAGES) {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  try {
    await page.goto("http://localhost:3000" + path, { waitUntil: "networkidle", timeout: 20000 });
    await page.waitForTimeout(500);
    const r = await page.evaluate(() => {
      const doc = document.documentElement;
      const bad = [];
      document.querySelectorAll("main div, main a, main button, main span").forEach((el) => {
        const st = getComputedStyle(el);
        if (st.position === "absolute" || st.position === "fixed" || st.display === "none") return;
        const r = el.getBoundingClientRect();
        if (r.right > doc.clientWidth + 2 || r.left < -2) bad.push(`<${el.tagName.toLowerCase()}> L:${Math.round(r.left)} R:${Math.round(r.right)}`);
      });
      return { scrollW: doc.scrollWidth, clientW: doc.clientWidth, bad: bad.slice(0, 3) };
    });
    results.push({ path, ok: r.scrollW <= r.clientW + 1 && r.bad.length === 0, detail: r.bad });
  } catch (e) { results.push({ path, ok: false, err: String(e).slice(0, 60) }); }
  await ctx.close();
}
await browser.close();
let pass = 0;
for (const r of results) { console.log((r.ok ? "✓" : "✗"), r.path, r.detail ? JSON.stringify(r.detail) : r.err || ""); if (r.ok) pass++; }
console.log(`\n=== ${pass}/${results.length} ===`);
