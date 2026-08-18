import { chromium } from "@playwright/test";

const browser = await chromium.launch();
for (const path of ["/level/a1", "/writing-path", "/learning-path", "/conversations", "/dashboard"]) {
  const ctx = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const page = await ctx.newPage();
  await page.goto("http://localhost:3000" + path, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const res = await page.evaluate(() => {
    const nav = document.querySelector("nav[aria-label='التنقل السفلي']");
    if (!nav) return { nav: null };
    const nr = nav.getBoundingClientRect();
    // أقصى عنصر في التدفق يصل إلى منطقة الشريط
    const overlap = [];
    document.querySelectorAll("main a, main button, main textarea, main div").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom > nr.top && r.bottom <= nr.bottom && r.height > 10) {
        const st = getComputedStyle(el);
        if (st.position === "fixed" || st.position === "sticky") return;
        overlap.push({
          tag: el.tagName.toLowerCase(),
          cls: String(el.className).slice(0, 60),
          bottom: Math.round(r.bottom), navTop: Math.round(nr.top),
          deep: Math.round(r.bottom - nr.top),
          txt: (el.textContent || "").trim().slice(0, 35),
        });
      }
    });
    overlap.sort((a, b) => b.deep - a.deep);
    return { navTop: Math.round(nr.top), navH: Math.round(nr.height), overlap: overlap.slice(0, 8), bodyBottom: document.body.scrollHeight };
  });
  console.log(`\n### ${path}`);
  console.log(`navTop=${res.navTop} navH=${res.navH} bodyH=${res.bodyBottom}`);
  for (const o of res.overlap || []) {
    console.log(`  عمق ${o.deep}px: <${o.tag} "${o.txt}" bottom=${o.bottom} :: ${o.cls}`);
  }
  await ctx.close();
}
await browser.close();
