#!/usr/bin/env node
/**
 * audit-robustness.mjs — الجولة الرابعة: متانة التخطيط والحركة (لكل مسار).
 *
 * ثلاثة أبعاد لا تظهر في اللقطة العادية:
 *
 *  1) **تباعد النص (WCAG 1.4.12):** يُحقن نمط يفرض
 *     `line-height:1.5` و`letter-spacing:.12em` و`word-spacing:.16em` ومسافة
 *     فقرات `2em`. المحتوى يجب أن يبقى مقروءاً: لا فيضان أفقي للصفحة، ولا نص
 *     مقصوص (عدا ellipsis/line-clamp المتعمَّد).
 *  2) **الحركة المخفَّفة (prefers-reduced-motion):** عند تفعيل التفضيل، لا يجب أن
 *     تبقى حركات لا نهائية (`animation-iteration-count: infinite`) على عناصر
 *     مرئية.
 *  3) **مطابقة الهيدرشن:** كل خطأ «hydration mismatch» عيب حقيقي — يعني أن
 *     HTML الخادم يخالف أول تصيير في العميل، وهو نفس السبب الذي كان يفرض
 *     `ssr:false` وحجب المحتوى حتى ما بعد التحميل.
 *  4) **ثبات التخطيط (CLS) والمهام الطويلة:** يُقاس تراكم `layout-shift`
 *     (بلا مدخلات مستخدم) وعدد المهام >200ms أثناء التحميل؛ CLS > 0.1 عيب
 *     حقيقي، والانحياز البصري يزعج القارئ أكثر من بطء التحميل.
 *
 * الاستخدام: node scripts/audit-robustness.mjs   (خادم على 3000)
 * المخرجات: ملخّص + /tmp/robustness.json
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/robustness.json";
const CLS_LIMIT = Number(process.env.AUDIT_CLS_LIMIT || 0.1);

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

/**
 * كشف عدم تطابق الهيدرشن — في بناء الإنتاج تكون رسائل React **مصغَّرة**
 * («Minified React error #418»)، فلا تكفي كلمات «hydration/did not match».
 * الأكواد: 418 نصّ مختلف · 423 استُعيد HTML الخادم كاملاً · 425 نصّ في <noscript>.
 * (هذا النقص في الفحص الأول هو ما أخفى خطأً حقيقياً في /tests/mock قبل إصلاحه.)
 */
const HYDRATION_RE = /hydrat|did not match|server rendered HTML|Minified React error #(418|423|425)|server rendered text/i;

/** تُحقن قبل تحميل الصفحة: مراقبات CLS/LCP/المهام الطويلة */
function initMetrics() {
  window.__m = { cls: 0, lcp: 0, longTasks: 0, longMs: 0 };
  try {
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        if (!e.hadRecentInput) window.__m.cls += e.value;
      }
    }).observe({ type: "layout-shift", buffered: true });
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) window.__m.lcp = Math.max(window.__m.lcp, e.startTime);
    }).observe({ type: "largest-contentful-paint", buffered: true });
    new PerformanceObserver((list) => {
      for (const e of list.getEntries()) {
        window.__m.longTasks += 1;
        window.__m.longMs += e.duration;
      }
    }).observe({ type: "longtask", buffered: true });
  } catch {
    /* متصفح لا يدعم بعض الأنواع */
  }
}

/** يقيس الفيضان والقصّ بعد حقن النمط */
function layoutState() {
  const de = document.documentElement;
  const hidden = (el) => {
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none" || cs.opacity === "0") return true;
    if (/sr-only|clip-path/.test(String(el.className || ""))) return true;
    if (cs.clip && cs.clip !== "auto") return true;
    if (cs.clipPath && cs.clipPath !== "none") return true;
    const r = el.getBoundingClientRect();
    return r.width === 0 || r.height === 0;
  };
  const clipped = [];
  for (const el of document.querySelectorAll("body *")) {
    if (el.children.length !== 0) continue;
    const cs = getComputedStyle(el);
    if (!/hidden|clip/.test(cs.overflow)) continue;
    // القص المتعمَّد (ellipsis/clamp) مقبول في WCAG 1.4.12
    if (cs.textOverflow === "ellipsis" || (cs.webkitLineClamp && cs.webkitLineClamp !== "none")) continue;
    if (hidden(el)) continue;
    if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
      clipped.push(`${el.tagName.toLowerCase()} «${(el.textContent || "").trim().slice(0, 20)}» ${el.clientWidth}/${el.scrollWidth}`);
    }
    if (clipped.length >= 4) break;
  }
  const offenders = [];
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    if (cs.position === "fixed" || cs.position === "absolute") continue;
    if (hidden(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.right > de.clientWidth + 2 || r.left < -2) {
      offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).split(" ")[0]}`);
    }
    if (offenders.length >= 4) break;
  }
  return { overflow: de.scrollWidth - de.clientWidth, clipped, offenders };
}

/** حركات لا نهائية مرئية عند تفعيل تقليل الحركة */
function infiniteAnimations() {
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    if (!cs.animationName || cs.animationName === "none") continue;
    if (cs.animationIterationCount !== "infinite") continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    out.push(`${el.tagName.toLowerCase()} «${cs.animationName}»`);
    if (out.length >= 5) break;
  }
  return out;
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
  await page.setViewport({ width: 1280, height: 900 });
  await page.setBypassServiceWorker(true).catch(() => {});
  await page.evaluateOnNewDocument(initMetrics);
  const issues = [];
  // 4) أخطاء الهيدرشن: HTML الخادم يجب أن يطابق ما يصيِّره العميل أول مرة.
  //    (كانت المكوّنات تخلط عشوائياً في أول تصيير، فتُرسَل بـ ssr:false.)
  const hydration = [];
  const onConsole = (msg) => {
    const text = msg.text();
    if (msg.type() === "error" && HYDRATION_RE.test(text)) {
      if (hydration.length < 3) hydration.push(text.slice(0, 140));
    }
  };
  const onPageError = (err) => {
    const text = String(err && err.message ? err.message : err);
    if (HYDRATION_RE.test(text) && hydration.length < 3) {
      hydration.push(text.slice(0, 140));
    }
  };
  page.on("console", onConsole);
  page.on("pageerror", onPageError);
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 900));

    const metrics = await page.evaluate(() => window.__m || { cls: 0, lcp: 0, longTasks: 0, longMs: 0 });

    // 1) تباعد النص
    await page.addStyleTag({
      content: `*{line-height:1.5 !important;letter-spacing:.12em !important;word-spacing:.16em !important}
                p{margin-bottom:2em !important}`,
    });
    await new Promise((r) => setTimeout(r, 400));
    const spaced = await page.evaluate(layoutState);

    // 2) تقليل الحركة
    await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
    await new Promise((r) => setTimeout(r, 300));
    const infinite = await page.evaluate(infiniteAnimations);

    if (metrics.cls > CLS_LIMIT) issues.push(`CLS ${metrics.cls.toFixed(3)} > ${CLS_LIMIT}`);
    if (spaced.overflow > 2) issues.push(`تباعد النص: فيضان ${spaced.overflow}px`);
    if (spaced.offenders.length) issues.push(`تباعد النص: عناصر خارج الشاشة ${spaced.offenders.join(" | ")}`);
    if (spaced.clipped.length) issues.push(`تباعد النص: نص مقصوص ${spaced.clipped.join(" | ")}`);
    if (infinite.length) issues.push(`حركة لا نهائية مع reduce: ${infinite.join(" | ")}`);
    if (hydration.length) issues.push(`هيدرشن: ${hydration.join(" | ")}`);

    out.push({
      route,
      cls: Math.round(metrics.cls * 1000) / 1000,
      lcp: Math.round(metrics.lcp),
      longTasks: metrics.longTasks,
      longMs: Math.round(metrics.longMs),
      spacingOverflow: spaced.overflow,
      infinite,
      hydration,
      issues,
    });
  } catch (e) {
    out.push({ route, error: e.message.slice(0, 120), issues: ["NAV " + e.message.slice(0, 60)] });
  }
  page.off("console", onConsole);
  page.off("pageerror", onPageError);
  await page.close();
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const bad = out.filter((x) => x.issues?.length);
console.log("PAGES", out.length, "WITH_ISSUES", bad.length);
for (const b of bad.slice(0, 40)) console.log(b.route, "|", b.issues.join(" ; "));
const cls = out.map((x) => x.cls || 0);
console.log("CLS max", Math.max(...cls).toFixed(3), "median", cls.sort((a, b) => a - b)[Math.floor(cls.length / 2)]);
