import { chromium } from "@playwright/test";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.addInitScript(() => {
  // اعترض كل استدعاءات التمرير وسجّل مصدرها
  const origScrollTo = window.scrollTo.bind(window);
  const origScroll = window.scroll.bind(window);
  const origInto = Element.prototype.scrollIntoView.bind(Element.prototype);
  window.__calls = [];
  window.scrollTo = (...args) => { window.__calls.push({ api: "scrollTo", args, stack: new Error().stack?.split("\n").slice(2, 8).join(" | ") }); return origScrollTo(...args); };
  window.scroll = (...args) => { window.__calls.push({ api: "scroll", args, stack: new Error().stack?.split("\n").slice(2, 8).join(" | ") }); return origScroll(...args); };
  Element.prototype.scrollIntoView = function(...args) {
    const el = this;
    window.__calls.push({ api: "scrollIntoView", args, el: el.tagName + "." + String(el.className).slice(0, 50), id: el.id, stack: new Error().stack?.split("\n").slice(2, 8).join(" | ") });
    return origInto.apply(this, args);
  };
});
await page.goto("http://localhost:3000/", { waitUntil: "domcontentloaded" });
await page.waitForTimeout(2500);
const r = await page.evaluate(() => window.__calls);
console.log(JSON.stringify(r, null, 1));
await browser.close();
