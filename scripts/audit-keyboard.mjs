#!/usr/bin/env node
/**
 * audit-keyboard.mjs — فحص لوحة المفاتيح والنماذج لكل مسار (الجولة الثالثة).
 *
 * لكل صفحة:
 *  1) رابط «تخطَّ إلى المحتوى»: هل هدفه موجود فعلاً؟
 *  2) المراسي الداخلية (`href="#…"`): هل كل هدف موجود؟
 *  3) حقول النموذج: هل لكل `input`/`select`/`textarea` اسم مفهوم
 *     (`label[for]` أو تغليف أو `aria-label`/`aria-labelledby`)?
 *  4) مؤشر التركيز: تنقّل حقيقي بـTab (حتى 45 ضغطة) — هل يظهر outline أو ring
 *     لكل عنصر يصل إليه التركيز؟ (لا يُقاس بالتركيز البرمجي: `:focus-visible`
 *     لا يُفعَّل به، فالنقر البرمجي يعطي نتيجة كاذبة.)
 *
 * الاستخدام: node scripts/audit-keyboard.mjs   (خادم على 3000)
 * المخرجات: ملخّص على الشاشة + /tmp/a11y.json
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
// الحزم خارج اعتماديات المشروع؛ تُشغَّل الأداة بـ
// NODE_PATH=/tmp/vb/node_modules LD_LIBRARY_PATH=/tmp/stublibs
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/a11y.json";
const MAX_TABS = Number(process.env.AUDIT_MAX_TABS || 45);

/** مسارات موجودة لكنها غير مُدرجة في sitemap (تُفحص أيضاً) */
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

/** الجزء الذي يُنفَّذ داخل الصفحة: الروابط والحقول */
function collect() {
  const hidden = (el) => {
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") return true;
    const r = el.getBoundingClientRect();
    return r.width === 0 && r.height === 0;
  };

  // 1) رابط التخطي
  const skip = document.querySelector('a[href^="#"]');
  const skipTarget = skip ? skip.getAttribute("href").slice(1) : null;
  const skipOk = skip ? !!document.getElementById(skipTarget) : null;

  // 2) المراسي الداخلية
  const badAnchors = [];
  for (const a of document.querySelectorAll('a[href^="#"]')) {
    const id = a.getAttribute("href").slice(1);
    if (!id) continue;
    if (!document.getElementById(id)) badAnchors.push(a.getAttribute("href"));
  }

  // 3) حقول النموذج بلا اسم مفهوم
  const unlabeled = [];
  for (const el of document.querySelectorAll("input,select,textarea")) {
    if (el.type === "hidden" || hidden(el)) continue;
    const id = el.id;
    const hasLabel =
      (id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) ||
      el.closest("label") ||
      el.getAttribute("aria-label") ||
      el.getAttribute("aria-labelledby") ||
      el.getAttribute("title");
    if (!hasLabel) {
      unlabeled.push(
        `${el.tagName.toLowerCase()}${el.type ? "[" + el.type + "]" : ""} «${(el.getAttribute("placeholder") || el.name || "").slice(0, 24)}»`,
      );
    }
    if (unlabeled.length >= 5) break;
  }

  // 4) قابل للتركيز داخل aria-hidden="true" أو [inert] — يُخفى عن قارئ الشاشة
  //    لكن يصل إليه Tab، فيضيع التركيز على عنصر «غير موجود».
  const hiddenFocusable = [];
  const focusables = 'a[href],button,input:not([type="hidden"]),select,textarea,summary,[tabindex]:not([tabindex="-1"])';
  for (const el of document.querySelectorAll(focusables)) {
    if (hidden(el)) continue;
    if (!el.closest('[aria-hidden="true"],[inert]')) continue;
    hiddenFocusable.push(`${el.tagName.toLowerCase()} «${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 20)}»`);
    if (hiddenFocusable.length >= 5) break;
  }

  return {
    skipOk,
    skipTarget,
    badAnchors: [...new Set(badAnchors)].slice(0, 5),
    unlabeled,
    hiddenFocusable,
  };
}

/** مؤشر التركيز للعنصر النشط (يُستدعى بعد كل Tab) */
function focusState() {
  const el = document.activeElement;
  if (!el || el === document.body) return null;
  // حقول التاريخ/الوقت الأصلية: التركيز ينتقل إلى حقل داخلي في shadow DOM
  // ولا يُرسم المؤشر على العقدة المضيفة — سلوك المتصفح لا عيب تصميم.
  if (/^(date|time|datetime-local|month|week)$/.test(el.type || "")) return null;
  const r = el.getBoundingClientRect();
  if (r.width === 0 && r.height === 0) return null;
  const cs = getComputedStyle(el);
  const ring =
    (parseFloat(cs.outlineWidth) > 0 && cs.outlineStyle !== "none") ||
    (cs.boxShadow && cs.boxShadow !== "none");
  return {
    ok: !!ring,
    tag: el.tagName.toLowerCase(),
    href: el.tagName === "A" ? el.getAttribute("href") : null,
    label: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 22),
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
  await page.setViewport({ width: 1280, height: 900 });
  await page.setBypassServiceWorker(true).catch(() => {});
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 250));
    const m = await page.evaluate(collect);

    // تنقّل لوحة مفاتيح حقيقي
    m.noRing = [];
    m.focusChecked = 0;
    await page.evaluate(() => {
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    });
    for (let i = 0; i < MAX_TABS; i++) {
      await page.keyboard.press("Tab");
      const r = await page.evaluate(focusState);
      if (!r) continue;
      m.focusChecked++;
      if (i === 0) m.firstTabIsSkip = r.tag === "a" && m.skipTarget !== null && r.href === "#" + m.skipTarget;
      if (!r.ok && m.noRing.length < 6) m.noRing.push(`${r.tag} «${r.label}»`);
    }
    out.push({ route, ...m });
  } catch (e) {
    out.push({ route, error: e.message.slice(0, 120) });
  }
  await page.close();
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const bad = out.filter(
  (x) =>
    x.error ||
    x.skipOk === false ||
    x.firstTabIsSkip === false ||
    x.badAnchors?.length ||
    x.unlabeled?.length ||
    x.noRing?.length ||
    x.hiddenFocusable?.length,
);
console.log("PAGES", out.length, "WITH_ISSUES", bad.length);
for (const b of bad.slice(0, 40)) {
  console.log(
    b.route,
    JSON.stringify({
      e: b.error,
      skip: b.skipOk,
      anchors: b.badAnchors,
      unlabeled: b.unlabeled,
      noRing: b.noRing,
      hiddenFocusable: b.hiddenFocusable,
      firstTabIsSkip: b.firstTabIsSkip,
    }),
  );
}
