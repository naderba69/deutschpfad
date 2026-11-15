#!/usr/bin/env node
/**
 * audit-zoom.mjs — الجولة الخامسة: التكبير وإعادة التدفّق (لكل مسار).
 *
 * بُعدان لم يُقَاسا في الجولات السابقة:
 *
 *  1) **إعادة التدفّق — WCAG 1.4.10:** المحتوى يجب أن يُقرأ بعرض 320 CSS px
 *     (أي 1280px بتكبير 400%) بلا تمرير أفقي على مستوى الصفحة. التمرير الأفقي
 *     داخل جدول/شريط مقصود مسموح؛ الممنوع هو أن تتجاوز الصفحة نفسها الشاشة.
 *  2) **تكبير النص 200% — WCAG 1.4.4:** بمضاعفة حجم الخط الجذري (16px → 32px)
 *     يجب ألّا ينقص محتوى ولا يُقصّ داخل صندوق ذي ارتفاع/عرض ثابت.
 *
 * الفحوص لكل حالة: فيضان أفقي على مستوى المستند · عناصر خارج الشاشة ·
 * نص مقصوص (overflow:hidden بلا ellipsis/line-clamp) · نص يفيض من حاويته.
 * كل عيب يُنسب إلى عنصر محدَّد كي يكون قابلاً للإصلاح لا مجرد رقم.
 *
 * الاستخدام:
 *   npm run build && npm run start        # خادم إنتاجي على 3000
 *   node scripts/audit-zoom.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/zoom.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);

const EXTRA_ROUTES = [
  "/about",
  "/privacy",
  "/grammatik/funktionsverbgefuege",
  "/tests/mock",
  "/tests/plan-b2",
  "/wortschatz-b2/top500",
  "/review",
  "/tests/b2-simulation",
];

async function loadRoutes() {
  if (process.env.AUDIT_ROUTES) {
    return process.env.AUDIT_ROUTES.split(",").map((r) => r.trim()).filter(Boolean);
  }
  const xml = await (await fetch(BASE + "/sitemap.xml")).text();
  const fromMap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname || "/");
  return [...new Set([...fromMap, ...EXTRA_ROUTES])].sort();
}

/** يُنفَّذ داخل الصفحة — يصف عيوب التخطيط في الحالة الحالية */
function inspectLayout() {
  const de = document.documentElement;
  const vw = de.clientWidth;

  const hidden = (el) => {
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none" || cs.opacity === "0") return true;
    if (/sr-only|clip-path/.test(String(el.className || ""))) return true;
    if (cs.clip && cs.clip !== "auto") return true;
    if (cs.clipPath && cs.clipPath !== "none") return true;
    const r = el.getBoundingClientRect();
    return r.width === 0 || r.height === 0;
  };

  /** هل يقع العنصر داخل حاوية تمرير أفقي مقصودة (جدول/شريط)؟ */
  const inScrollableX = (el) => {
    let n = el.parentElement;
    while (n && n !== document.body) {
      const cs = getComputedStyle(n);
      if (/(auto|scroll)/.test(cs.overflowX) && n.scrollWidth > n.clientWidth + 2) return true;
      n = n.parentElement;
    }
    return false;
  };

  const label = (el) =>
    `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}.${String(el.className || "").split(" ").slice(0, 2).join(".")}`;

  // 1) فيضان على مستوى المستند
  const overflow = de.scrollWidth - vw;

  // 2) عناصر تخرج عن الشاشة (لا داخل حاوية تمرير، ولا مثبَّتة/مطلقة)
  const outside = [];
  for (const el of document.querySelectorAll("body *")) {
    if (outside.length >= 3) break;
    const cs = getComputedStyle(el);
    if (cs.position === "fixed" || cs.position === "absolute") continue;
    if (hidden(el)) continue;
    if (inScrollableX(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.right > vw + 2 || r.left < -2) outside.push(`${label(el)} [${Math.round(r.left)}..${Math.round(r.right)}]`);
  }

  /* 3) نص مقصوص داخل صندوق (ارتفاع/عرض ثابت + overflow مخفي) بلا قصّ متعمَّد.
     نستثني عناصر النماذج (textarea/input/select): التمرير داخلها سلوك قياسي
     وليس فقدان محتوى (WCAG 1.4.4 لا يمنع تمرير حقل الإدخال رأسياً). */
  const FORM_CONTROLS = new Set(["TEXTAREA", "INPUT", "SELECT"]);
  const clipped = [];
  for (const el of document.querySelectorAll("body *")) {
    if (clipped.length >= 3) break;
    if (FORM_CONTROLS.has(el.tagName)) continue;
    if (el.children.length !== 0) continue;
    const cs = getComputedStyle(el);
    if (!/hidden|clip/.test(cs.overflow)) continue;
    if (cs.textOverflow === "ellipsis" || (cs.webkitLineClamp && cs.webkitLineClamp !== "none")) continue;
    if (hidden(el)) continue;
    if (el.scrollHeight > el.clientHeight + 2 && el.clientHeight > 0) {
      clipped.push(`${label(el)} «${(el.textContent || "").trim().slice(0, 18)}» ${el.clientHeight}/${el.scrollHeight}`);
    } else if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
      clipped.push(`${label(el)} «${(el.textContent || "").trim().slice(0, 18)}» ${el.clientWidth}/${el.scrollWidth}`);
    }
  }

  // 4) نص يتجاوز حاويته أفقياً (تداخل بصري) — نستثني الفقرات الطويلة والسطور الملتفّة
  const spill = [];
  for (const el of document.querySelectorAll("body *")) {
    if (spill.length >= 3) break;
    if (el.children.length !== 0) continue;
    if (!(el.textContent || "").trim()) continue;
    if (hidden(el) || inScrollableX(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.overflow !== "visible") continue;
    if (cs.display === "inline" || cs.display === "contents") continue;
    if (cs.whiteSpace === "normal") continue; // يلتفّ تلقائياً
    const r = el.getBoundingClientRect();
    if (r.right > vw + 2) spill.push(`${label(el)} «${(el.textContent || "").trim().slice(0, 18)}»`);
  }

  return {
    rootFontSize: parseFloat(getComputedStyle(de).fontSize),
    viewport: vw,
    overflow,
    outside,
    clipped,
    spill,
    docHeight: de.scrollHeight,
  };
}

const ROUTES = await loadRoutes();

const browser = await puppeteer.launch({
  args: [...chromium.args, "--no-sandbox", "--disable-dev-shm-usage"],
  executablePath: await chromium.executablePath(),
  headless: true,
  protocolTimeout: 120000,
});

const out = [];

for (const route of ROUTES) {
  const page = await browser.newPage();
  const issues = [];
  const record = { route, reflow: null, zoom: null, issues };
  try {
    // ── الحالة أ: 320px (تكبير 400% على شاشة 1280) ────────────────────────
    await page.setViewport({ width: 320, height: 640 });
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 900));
    const reflow = await page.evaluate(inspectLayout);
    record.reflow = reflow;
    if (reflow.overflow > 2) issues.push(`تدفّق 320px: فيضان أفقي ${reflow.overflow}px`);
    if (reflow.outside.length) issues.push(`تدفّق 320px: خارج الشاشة ${reflow.outside.join(" | ")}`);
    if (reflow.clipped.length) issues.push(`تدفّق 320px: نص مقصوص ${reflow.clipped.join(" | ")}`);
    if (reflow.spill.length) issues.push(`تدفّق 320px: نص يفيض ${reflow.spill.join(" | ")}`);

    // ── الحالة ب: تكبير النص 200% على شاشة مكتبية ────────────────────────
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await page.addStyleTag({ content: "html{font-size:200% !important}" });
    await new Promise((r) => setTimeout(r, 900));
    const zoom = await page.evaluate(inspectLayout);
    record.zoom = zoom;
    if (zoom.rootFontSize < 30) {
      // فشل الفحص نفسه — نُعلنه صراحةً كي لا يُقرأ «0 ملاحظة» كذباً
      issues.push(`تكبير 200%: النمط لم يُطبَّق (font-size=${zoom.rootFontSize}px)`);
    }
    if (zoom.overflow > 2) issues.push(`تكبير 200%: فيضان أفقي ${zoom.overflow}px`);
    if (zoom.outside.length) issues.push(`تكبير 200%: خارج الشاشة ${zoom.outside.join(" | ")}`);
    if (zoom.clipped.length) issues.push(`تكبير 200%: نص مقصوص ${zoom.clipped.join(" | ")}`);
    if (zoom.spill.length) issues.push(`تكبير 200%: نص يفيض ${zoom.spill.join(" | ")}`);
  } catch (e) {
    issues.push("NAV " + e.message.slice(0, 100));
  }
  await page.close();
  out.push(record);
  if (VERBOSE) console.log(route, issues.length ? "❌ " + issues.join(" ; ") : "✅");
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const bad = out.filter((x) => x.issues.length);
console.log("PAGES", out.length, "WITH_ISSUES", bad.length);
for (const b of bad.slice(0, 60)) console.log(b.route, "|", b.issues.join(" ; "));
