/* تدقيق DOM صارم v2 — تشغيل: node scripts/dom-audit.mjs */
import { chromium } from "@playwright/test";
import fs from "fs";

const BASE = "http://localhost:3000";
const OUT = "/home/user/audit-report";
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "mobile", width: 375, height: 812 },
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
  "/writing-path",
  "/umformung",
  "/alltag",
];

const AUDIT_JS = `(() => {
  const vw = document.documentElement.clientWidth;
  const issues = [];
  const seen = new Set();
  const isVisible = (el) => {
    const r = el.getBoundingClientRect();
    const st = getComputedStyle(el);
    return r.width > 1 && r.height > 1 && st.display !== "none" && st.visibility !== "hidden" && +st.opacity > 0.05;
  };
  const add = (el, type, detail) => {
    const key = type + el.tagName + el.className;
    if (seen.has(key)) return;
    seen.add(key);
    const txt = (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 60);
    issues.push({ type, tag: el.tagName.toLowerCase(), cls: String(el.className).slice(0, 110), txt, detail });
  };

  // هل العنصر مقتصّ بصرياً من سلفٍ له (overflow hidden/auto/scroll بعرض أصغر)؟
  const isClippedByAncestor = (el) => {
    let p = el.parentElement;
    while (p) {
      if (p === document.body) break;
      const s = getComputedStyle(p);
      const o = s.overflowX === "hidden" || s.overflowX === "auto" || s.overflowX === "scroll"
             || s.overflow === "hidden" || s.overflow === "auto" || s.overflow === "scroll";
      if (o) {
        const pr = p.getBoundingClientRect();
        const er = el.getBoundingClientRect();
        // هل يتجاوز العنصر حدود السلف فعلاً؟
        if (er.left < pr.left - 2 || er.right > pr.right + 2) return true;
      }
      p = p.parentElement;
    }
    return false;
  };

  // 1) عناصر تتجاوز الشاشة أفقياً وغير مقتصّة من سلف
  document.querySelectorAll("*").forEach((el) => {
    if (!isVisible(el)) return;
    const st = getComputedStyle(el);
    if (st.position === "absolute" || st.position === "fixed") return;
    if (st.overflow === "visible") {
      const r = el.getBoundingClientRect();
      if ((r.right > vw + 2 || r.left < -2) && !isClippedByAncestor(el)) {
        // تجاهل عناصر زخرفية
        const cls = String(el.className);
        if (cls.includes("blur-") || cls.includes("pointer-events-none")) return;
        add(el, "overflows-viewport", \`L:\${Math.round(r.left)} R:\${Math.round(r.right)} vw:\${vw}\`);
      }
    }
  });

  // 2) نص مقصوص فعلياً (overflow hidden + scrollWidth > clientWidth)
  document.querySelectorAll("button, a, h1, h2, h3, h4, p, span, li, td, th, div").forEach((el) => {
    if (!isVisible(el)) return;
    const st = getComputedStyle(el);
    if (st.overflowX !== "hidden" && st.overflow !== "hidden") return;
    if (String(el.className).includes("truncate")) return; // قصّ مقصود بنقاط
    if (el.scrollWidth > el.clientWidth + 4) {
      const txt = (el.textContent || "").trim();
      if (txt.length > 3 && el.clientWidth > 40) {
        add(el, "text-clipped", \`scrollW:\${el.scrollWidth} clientW:\${el.clientWidth}\`);
      }
    }
  });

  // 3) عناصر تفاعلية متداخلة بصرياً
  const isSrOnly = (el) => { let c = el; while (c) { if (String(c.className).includes("sr-only")) return true; c = c.parentElement; } return false; };
  const els = [...document.querySelectorAll("button, a, [role=button], input, select, textarea")].filter(isVisible);
  for (let i = 0; i < els.length; i++) {
    const a = els[i];
    if (isSrOnly(a)) continue;
    const ra = a.getBoundingClientRect();
    if (ra.width < 2 || ra.height < 2) continue;
    for (let j = i + 1; j < els.length; j++) {
      const b = els[j];
      const rb = b.getBoundingClientRect();
      if (rb.width < 2 || rb.height < 2) continue;
      const ox = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left);
      const oy = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
      if (ox > 8 && oy > 8) {
        if (a.contains(b) || b.contains(a)) continue;
        const sa = getComputedStyle(a).position, sb = getComputedStyle(b).position;
        if (sa === "fixed" || sa === "sticky" || sb === "fixed" || sb === "sticky") continue;
        // تجاهل إذا كان أحدهما داخل شريط سفلي/هيدر ثابت
        let pa = a, pb2 = b, inFixed = false;
        while (pa) { if (getComputedStyle(pa).position === "fixed") { inFixed = true; break; } pa = pa.parentElement; }
        if (!inFixed) { let pp = b; while (pp) { if (getComputedStyle(pp).position === "fixed") { inFixed = true; break; } pp = pp.parentElement; } }
        if (inFixed) continue;
        add(a, "overlap", \`with <\${b.tagName.toLowerCase()}>\${(b.getAttribute("aria-label")||b.textContent||"").trim().slice(0,30)}\`);
        break;
      }
    }
  }

  // 4) نص صغير جداً (< 11px)
  document.querySelectorAll("p, span, a, li, td, th, button, label").forEach((el) => {
    if (!isVisible(el) || el.children.length > 0) return;
    if ((el.textContent || "").trim().length < 2) return;
    const fs = parseFloat(getComputedStyle(el).fontSize);
    if (fs > 0 && fs < 11) add(el, "tiny-font", \`fs:\${fs}px\`);
  });

  // 5) أهداف لمس صغيرة (جوال فقط)
  if (vw <= 768) {
    document.querySelectorAll("a, button").forEach((el) => {
      if (!isVisible(el)) return;
      const st = getComputedStyle(el);
      if (st.position === "fixed") return;
      const r = el.getBoundingClientRect();
      if (r.height < 32 && r.height > 0) {
        const label = (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40);
        if (label.length > 1) add(el, "tiny-tap", \`\${Math.round(r.width)}x\${Math.round(r.height)}\`);
      }
    });
  }

  return { issues: issues.slice(0, 500), vw };
})()`;

const browser = await chromium.launch();
const report = {};

for (const vp of VIEWPORTS) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  for (const path of PAGES) {
    const page = await ctx.newPage();
    const tag = `${vp.name} ${path}`;
    try {
      await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 25000 });
      await page.waitForTimeout(600);
      const res = await page.evaluate(AUDIT_JS);
      report[tag] = res.issues;
    } catch (e) {
      report[tag] = [{ type: "error", detail: String(e).slice(0, 120) }];
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();

let total = 0;
const byType = {};
for (const [tag, issues] of Object.entries(report)) {
  for (const i of issues) { byType[i.type] = (byType[i.type] || 0) + 1; total++; }
}
console.log("=== إجمالي المشاكل:", total, "===");
console.log("=== حسب النوع ===", JSON.stringify(byType, null, 1));

let printed = 0;
for (const [tag, issues] of Object.entries(report)) {
  if (printed > 70) break;
  for (const i of issues) {
    if (printed > 70) break;
    console.log(`\n[${tag}] ${i.type} :: ${i.detail}`);
    console.log(`   <${i.tag} class="${i.cls}"> "${i.txt}"`);
    printed++;
  }
}

fs.writeFileSync(`${OUT}/dom-report.json`, JSON.stringify(report, null, 2));
