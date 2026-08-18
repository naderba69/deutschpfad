/* لقطات شاشة جردية — تشغيل: node scripts/screenshots.mjs */
import { chromium } from "@playwright/test";
import fs from "fs";

const BASE = "http://localhost:3000";
const OUT = "/home/user/screenshots";
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
];

const PAGES = [
  "/",
  "/learning-path",
  "/lesson/a1-01",
  "/lesson/a1-03",
  "/lesson/b2-08",
  "/dashboard",
  "/settings",
  "/tests",
  "/tests/b2-simulation",
  "/level/a1",
  "/grammatik",
  "/hoeren",
  "/design-system",
  "/stories",
  "/reading",
  "/diktate",
  "/placement",
  "/sprechtraining",
  "/conversations",
];

const browser = await chromium.launch();
let failures = [];

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  for (const path of PAGES) {
    const page = await ctx.newPage();
    const tag = `${vp.name}__${path.replace(/\//g, "_").replace(/^_/, "root")}`;
    try {
      await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 25000 });
      // افحص وجود فيضان أفقي
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement;
        return {
          scrollW: doc.scrollWidth,
          clientW: doc.clientWidth,
          overflowX: getComputedStyle(doc).overflowX,
        };
      });
      await page.screenshot({ path: `${OUT}/${tag}.png`, fullPage: false });
      if (overflow.scrollW > overflow.clientW + 1) {
        failures.push({ tag, type: "horizontal-overflow", ...overflow });
      }
    } catch (e) {
      failures.push({ tag, type: "error", msg: String(e).slice(0, 150) });
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();

console.log("FAILURES:", JSON.stringify(failures, null, 2));
console.log("Total screenshots:", VIEWPORTS.length * PAGES.length);
fs.writeFileSync("/home/user/screenshots/overflow-report.json", JSON.stringify(failures, null, 2));
