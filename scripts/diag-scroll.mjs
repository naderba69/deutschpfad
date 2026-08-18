import { chromium } from "@playwright/test";
const browser = await chromium.launch();
for (const vp of [{w:375,h:812},{w:1280,h:800}]) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const r = await page.evaluate(() => ({ scrollY: window.scrollY, teacherTop: (() => {
    const a = [...document.querySelectorAll("a")].find(x => (x.textContent||"").includes("اختبر ما تعلمته"));
    return a ? Math.round(a.getBoundingClientRect().top) : null;
  })() }));
  console.log(vp, JSON.stringify(r));
  await page.close();
}
await browser.close();
