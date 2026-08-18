/* تشخيص دقيق لتجاوزات صفحة مسار التعلم على الجوال */
import { chromium } from "@playwright/test";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
const page = await ctx.newPage();
await page.goto("http://localhost:3000/learning-path", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const res = await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  const out = [];
  // ابحث عن العناصر الأوسع من والدها بأكثر من 2px
  document.querySelectorAll("div, a, span, p, h1, h2, h3, button").forEach((el) => {
    const r = el.getBoundingClientRect();
    const p = el.parentElement;
    if (!p) return;
    const pr = p.getBoundingClientRect();
    if (r.width > pr.width + 2 && r.width > 0) {
      const st = getComputedStyle(el);
      if (st.position === "absolute" || st.position === "fixed") return;
      const cls = String(el.className).slice(0, 90);
      const txt = (el.textContent || "").trim().slice(0, 50);
      out.push({
        tag: el.tagName.toLowerCase(),
        w: Math.round(r.width), pw: Math.round(pr.width),
        left: Math.round(r.left), pleft: Math.round(pr.left),
        cls, txt,
      });
    }
  });
  return { vw, items: out.slice(0, 60) };
});

console.log("viewport:", res.vw);
for (const it of res.items) {
  console.log(`<${it.tag} w=${it.w} (parent ${it.pw}) L=${it.left} pL=${it.pleft}> "${it.txt}" :: ${it.cls}`);
}
await browser.close();
