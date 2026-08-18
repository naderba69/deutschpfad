import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
const r = await page.evaluate(() => {
  const a = [...document.querySelectorAll("a")].find(x => (x.textContent || "").includes("التقييم"));
  const chain = [];
  let cur = a;
  for (let i = 0; i < 6 && cur; i++) {
    const st = getComputedStyle(cur);
    chain.push({ tag: cur.tagName.toLowerCase(), cls: String(cur.className).slice(0, 60),
      display: st.display, vis: st.visibility, pe: st.pointerEvents, pos: st.position,
      dataState: cur.getAttribute?.("data-state") || null, ariaHidden: cur.getAttribute?.("aria-hidden") });
    cur = cur.parentElement;
  }
  return chain;
});
console.log(JSON.stringify(r, null, 1));
await browser.close();
