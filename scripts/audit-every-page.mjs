#!/usr/bin/env node
/**
 * audit-every-page.mjs — تدقيق شامل لكل مسار × 4 مقاسات.
 *
 * يقيس: HTTP، فيضان أفقي، عناصر خارج الشاشة، نص مقصوص (بلا قصّ متعمَّد)،
 * صور مكسورة/بلا alt، عدد h1 وتسلسل العناوين، أزرار بلا اسم، معرّفات مكررة،
 * أهداف لمس <24px (بواقع WCAG 2.5.8)، خطوط <11px، تباين AA فاتح/داكن
 * (مع تركيب الشفافية والتدرّجات اللونية)، نص ألماني بلا lang=de، طول <title>،
 * وأخطاء JavaScript.
 *
 * المتصفح: Puppeteer + @sparticuz/chromium (خارج تبعيات المشروع). في بيئة
 * Debian بلا NSS/NSPR تُبنى مكتبات كعب صغيرة (انظر docs/AUDIT-EVERY-PAGE-*.md).
 *
 * الاستخدام:
 *   npm run build && npm run start          # خادم على 3000
 *   node scripts/audit-every-page.mjs       # → /tmp/audit-final/report.json + لقطات
 * متغيرات: AUDIT_BASE، AUDIT_OUT، AUDIT_ROUTES (قائمة مفصولة بفواصل)، AUDIT_VERBOSE
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/audit-final";

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

/**
 * قائمة المسارات: AUDIT_ROUTES، أو sitemap الخادم + EXTRA_ROUTES.
 * ملاحظة: /review و/tests/b2-simulation يُعيدان 307 إلى /review/weekly و/tests/b2؛
 * نفحصهما كما هما لرصد أي 404.
 */
async function loadRoutes() {
  if (process.env.AUDIT_ROUTES) {
    return process.env.AUDIT_ROUTES.split(",").map((r) => r.trim()).filter(Boolean);
  }
  const xml = await (await fetch(BASE + "/sitemap.xml")).text();
  const fromMap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname || "/");
  return [...new Set([...fromMap, ...EXTRA_ROUTES])].sort();
}

const ROUTES = await loadRoutes();

const VIEWPORTS = [
  ["desktop", 1440, 900],
  ["tablet", 834, 1112],
  ["mobile", 390, 844],
  ["mobile-sm", 320, 640],
];

fs.mkdirSync(OUT, { recursive: true });

/* ── ما يُجمَع من الصفحة (يعمل داخل المتصفح) ─────────────── */
function collect() {
  const de = document.documentElement;
  const parseRGB = (s) => {
    const m = String(s).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const blend = (fg, bg) => {
    // تركيب صحيح: a = fa + ba(1-fa)
    const a = fg.a + bg.a * (1 - fg.a);
    return {
      r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / a,
      g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / a,
      b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / a,
      a,
    };
  };
  const lum = (c) => {
    const f = (v) => {
      const x = v / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  };
  const ratio = (a, b) => {
    const la = lum(a), lb = lum(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
  };
  // تدرّج لوني: نأخذ أسوأ محطة (أفتحها نصاً على خلفية داكنة أو أغمقها)
  const gradientStops = (img) => {
    if (!img || img === "none") return [];
    const stops = [];
    for (const m of img.matchAll(/rgba?\(([^)]+)\)/g)) {
      const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
      if (p.length >= 3) stops.push({ r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 });
    }
    return stops;
  };
  const WHITE = { r: 255, g: 255, b: 255, a: 1 };
  // نرسم سلسلة الآباء من الجذر إلى العنصر: كل لون يُرسم فوق ما تحته،
  // وأقرب تدرّج هو ما يراه النص فعلاً.
  const effectiveBg = (el) => {
    const nodes = [];
    for (let n = el; n; n = n.parentElement) nodes.push(n);
    nodes.reverse();
    let bg = WHITE;
    let gradient = null;
    for (const n of nodes) {
      const cs = getComputedStyle(n);
      const own = parseRGB(cs.backgroundColor);
      if (own && own.a > 0) {
        bg = blend(own, bg);
        if (own.a >= 0.999) gradient = null;
      }
      const stops = gradientStops(cs.backgroundImage);
      if (stops.length) {
        gradient = stops.map((st) => (st.a < 1 ? blend(st, bg) : st));
        bg = gradient[0];
      }
    }
    return gradient ? { gradient } : { color: bg };
  };
  const hidden = (el) => {
    const cs = getComputedStyle(el);
    const cls = String(el.className || "");
    if (/sr-only|clip-path/.test(cls)) return true;
    if (cs.clip && cs.clip !== "auto") return true;
    if (cs.clipPath && cs.clipPath !== "none") return true;
    if (cs.visibility === "hidden" || cs.opacity === "0") return true;
    return false;
  };
  const visible = (el) => {
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };

  /* ── النص الألماني بلا lang ── */
  const langMissing = [];
  const AR = /[\u0600-\u06FF]/;
  const LAT = /[A-Za-zÄÖÜäöüß]{2}/;
  for (const el of document.querySelectorAll("body *")) {
    if (el.children.length !== 0) continue;
    if (el.closest("[lang]")) continue;
    if (!visible(el) || hidden(el)) continue;
    const t = (el.textContent || "").trim();
    if (t.length < 3 || t.length > 90) continue;
    if (AR.test(t) || !LAT.test(t)) continue;
    langMissing.push(t.slice(0, 40));
    if (langMissing.length >= 8) break;
  }

  /* ── التباين ── */
  const contrast = [];
  for (const el of document.querySelectorAll("body *")) {
    if (el.children.length !== 0) continue;
    const txt = (el.textContent || "").trim();
    if (txt.length < 2) continue;
    if (!visible(el) || hidden(el)) continue;
    const cs = getComputedStyle(el);
    const fg = parseRGB(cs.color);
    if (!fg) continue;
    const fill = cs.webkitTextFillColor || cs.color;
    if (/rgba\([^)]*,\s*0\)/.test(fill) || cs.webkitTextFillColor === "transparent") continue;
    if (fg.a < 0.15) continue;
    if (!/[\u0621-\u064A\u0660-\u0669A-Za-z0-9]/.test(txt)) continue;
    const bg = effectiveBg(el);
    if (bg.unknown) continue;
    let cr;
    if (bg.gradient) {
      cr = Math.min(...bg.gradient.map((st) => ratio(fg.a < 1 ? blend(fg, st) : fg, st)));
    } else {
      const fgFinal = fg.a < 1 ? blend(fg, bg.color) : fg;
      cr = ratio(fgFinal, bg.color);
    }
    const size = parseFloat(cs.fontSize);
    const bold = Number(cs.fontWeight) >= 700;
    const need = size >= 24 || (size >= 18.66 && bold) ? 3 : 4.5;
    if (cr < need) {
      contrast.push({
        t: txt.slice(0, 28),
        cr: Math.round(cr * 100) / 100,
        need,
        size: Math.round(size),
        cls: String(el.className).slice(0, 70),
      });
    }
    if (contrast.length >= 12) break;
  }

  /* ── الفيضان والخروج عن الشاشة ── */
  const docOverflow = de.scrollWidth - de.clientWidth;
  const offenders = [];
  for (const el of document.querySelectorAll("body *")) {
    const cs = getComputedStyle(el);
    if (cs.position === "fixed" || cs.position === "absolute") continue;
    if (!visible(el) || hidden(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.right > de.clientWidth + 2 || r.left < -2) {
      offenders.push(`${el.tagName.toLowerCase()}.${String(el.className).split(" ")[0]} ${Math.round(r.left)}..${Math.round(r.right)}`);
    }
    if (offenders.length >= 5) break;
  }

  /* ── الصور ── */
  const brokenImgs = [], noAltList = [];
  for (const img of document.images) {
    if (!img.complete || img.naturalWidth === 0) brokenImgs.push(img.currentSrc?.slice(-60) || img.src.slice(-60));
    if (!img.getAttribute("alt") && img.getAttribute("aria-hidden") !== "true") noAltList.push((img.src || "").slice(-50));
  }

  /* ── العناوين ── */
  const hs = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].filter((h) => visible(h));
  const h1s = hs.filter((h) => h.tagName === "H1").map((h) => (h.textContent || "").trim().slice(0, 40));
  const headingJumps = [];
  let last = 0;
  for (const h of hs) {
    const lvl = Number(h.tagName[1]);
    if (last && lvl > last + 1) headingJumps.push(`${last}→${lvl} (${(h.textContent || "").trim().slice(0, 24)})`);
    last = lvl;
  }

  /* ── أزرار/روابط بلا اسم ── */
  let nameless = 0;
  for (const el of document.querySelectorAll("a,button,[role=button]")) {
    if (!visible(el) || hidden(el)) continue;
    const name = (el.getAttribute("aria-label") || el.textContent || "").trim() ||
      (el.querySelector("img[alt]")?.getAttribute("alt") || "").trim() ||
      el.getAttribute("title") || "";
    if (!name) nameless++;
  }

  /* ── معرّفات مكررة ── */
  const ids = new Map();
  for (const el of document.querySelectorAll("[id]")) ids.set(el.id, (ids.get(el.id) || 0) + 1);
  const dupIds = [...ids].filter(([, n]) => n > 1).map(([id, n]) => `${id}×${n}`);

  /* ── أهداف لمس صغيرة (<24×24 داخل شاشة اللمس) ── */
  const tiny = [];
  if (window.innerWidth <= 640) {
    for (const el of document.querySelectorAll("a,button,[role=button],input[type=checkbox],input[type=radio]")) {
      if (!visible(el) || hidden(el)) continue;
      // استثناء WCAG 2.5.8: رابط نصي داخل جملة (inline) لا يحتاج هدف لمس أكبر
      const cs2 = getComputedStyle(el);
      const parent = el.parentElement;
      if (cs2.display === "inline" && parent && /^(P|LI|SPAN|TD)$/.test(parent.tagName) && (parent.textContent || "").trim().length > (el.textContent || "").trim().length + 8) continue;
      const r = el.getBoundingClientRect();
      if (r.width < 24 || r.height < 24) {
        tiny.push(`${el.tagName.toLowerCase()} ${Math.round(r.width)}×${Math.round(r.height)} ${(el.textContent || "").trim().slice(0, 18)}`);
      }
      if (tiny.length >= 6) break;
    }
  }

  /* ── خطوط صغيرة ── */
  let smallFonts = 0;
  for (const el of document.querySelectorAll("body *")) {
    if (el.children.length !== 0) continue;
    const t = (el.textContent || "").trim();
    if (t.length < 2 || !visible(el) || hidden(el)) continue;
    if (parseFloat(getComputedStyle(el).fontSize) < 11) smallFonts++;
  }

  /* ── نص مقصوص ── */
  const clipped = [];
  for (const el of document.querySelectorAll("body *")) {
    if (el.children.length !== 0) continue;
    const cs = getComputedStyle(el);
    if (!/hidden|clip/.test(cs.overflow)) continue;
    if (!visible(el) || hidden(el)) continue;
    // القص المقصود بـellipsis أو line-clamp ليس نصاً ضائعاً
    if (cs.textOverflow === "ellipsis" || (cs.webkitLineClamp && cs.webkitLineClamp !== "none")) continue;
    if (el.scrollWidth > el.clientWidth + 2 && el.clientWidth > 0) {
      clipped.push(`${el.tagName.toLowerCase()} «${(el.textContent || "").trim().slice(0, 18)}» ${el.clientWidth}/${el.scrollWidth}`);
    }
    if (clipped.length >= 4) break;
  }

  return {
    overflow: docOverflow > 2 ? docOverflow : 0,
    offenders, brokenImgs, noAlt: noAltList.length,
    h1s, headingJumps, nameless, dupIds, tiny, smallFonts, clipped,
    langMissing,
    textLen: (document.body.innerText || "").length,
    arabicFont: document.fonts.check("16px Tajawal"),
    title: document.title,
    desc: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
    viewport: document.querySelector('meta[name="viewport"]')?.getAttribute("content") || "",
    contrast,
  };
}

/** تباين فقط — تُستدعى بعد تفعيل الوضع الداكن */
function collectContrastOnly() {
  const parseRGB = (s) => {
    const m = String(s).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const blend = (fg, bg) => {
    const a = fg.a + bg.a * (1 - fg.a);
    return { r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / a, g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / a, b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / a, a };
  };
  const lum = (c) => {
    const f = (v) => { const x = v / 255; return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  };
  const ratio = (a, b) => { const la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
  const gradientStops = (img) => {
    if (!img || img === "none") return [];
    const stops = [];
    for (const m of img.matchAll(/rgba?\(([^)]+)\)/g)) {
      const p = m[1].split(/[,\s/]+/).filter(Boolean).map(Number);
      if (p.length >= 3) stops.push({ r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 });
    }
    return stops;
  };
  const WHITE = { r: 255, g: 255, b: 255, a: 1 };
  // نرسم سلسلة الآباء من الجذر إلى العنصر: كل لون يُرسم فوق ما تحته،
  // وأقرب تدرّج هو ما يراه النص فعلاً.
  const effectiveBg = (el) => {
    const nodes = [];
    for (let n = el; n; n = n.parentElement) nodes.push(n);
    nodes.reverse();
    let bg = WHITE;
    let gradient = null;
    for (const n of nodes) {
      const cs = getComputedStyle(n);
      const own = parseRGB(cs.backgroundColor);
      if (own && own.a > 0) {
        bg = blend(own, bg);
        if (own.a >= 0.999) gradient = null;
      }
      const stops = gradientStops(cs.backgroundImage);
      if (stops.length) {
        gradient = stops.map((st) => (st.a < 1 ? blend(st, bg) : st));
        bg = gradient[0];
      }
    }
    return gradient ? { gradient } : { color: bg };
  };
  const hidden = (el) => {
    const cs = getComputedStyle(el);
    if (/sr-only|clip-path/.test(String(el.className || ""))) return true;
    if (cs.clip && cs.clip !== "auto") return true;
    if (cs.clipPath && cs.clipPath !== "none") return true;
    return cs.visibility === "hidden" || cs.opacity === "0";
  };
  const out = [];
  for (const el of document.querySelectorAll("body *")) {
    if (el.children.length !== 0) continue;
    const txt = (el.textContent || "").trim();
    if (txt.length < 2 || hidden(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || cs.display === "none") continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    const fg = parseRGB(cs.color);
    if (!fg) continue;
    const fill = cs.webkitTextFillColor || cs.color;
    if (/rgba\([^)]*,\s*0\)/.test(fill) || cs.webkitTextFillColor === "transparent") continue;
    if (fg.a < 0.15) continue;
    if (!/[\u0621-\u064A\u0660-\u0669A-Za-z0-9]/.test(txt)) continue;
    const bg = effectiveBg(el);
    const cr = bg.gradient
      ? Math.min(...bg.gradient.map((st) => ratio(fg.a < 1 ? blend(fg, st) : fg, st)))
      : ratio(fg.a < 1 ? blend(fg, bg.color) : fg, bg.color);
    const size = parseFloat(cs.fontSize);
    const need = size >= 24 || (size >= 18.66 && Number(cs.fontWeight) >= 700) ? 3 : 4.5;
    if (cr < need) out.push({ t: txt.slice(0, 28), cr: Math.round(cr * 100) / 100, need, size: Math.round(size) });
    if (out.length >= 12) break;
  }
  return out;
}

(async () => {
  const browser = await puppeteer.launch({
    args: [...chromium.args, "--no-sandbox", "--disable-dev-shm-usage"],
    executablePath: await chromium.executablePath(),
    headless: true,
    protocolTimeout: 120000,
  });
  const results = [];
  let idx = 0;
  async function worker() {
    while (idx < ROUTES.length) {
      const route = ROUTES[idx++];
      for (const [vpName, width, height] of VIEWPORTS) {
        const page = await browser.newPage();
        const errors = [], failed = [], consoleErr = [];
        page.on("pageerror", (e) => errors.push(e.message.slice(0, 200)));
        page.on("requestfailed", (r) => {
          const t = r.failure()?.errorText || "";
          if (!/ABORTED|NS_BINDING_ABORTED/.test(t)) failed.push(`${r.url().replace(BASE, "")} ${t}`.slice(0, 160));
        });
        page.on("console", (m) => { if (m.type() === "error") consoleErr.push(m.text().slice(0, 200)); });
        await page.setViewport({ width, height, deviceScaleFactor: 1 });
        // تعطيل SW في القياس (الكاش القديم يصنع ChunkLoadError اصطناعياً)
        await page.setBypassServiceWorker(true).catch(() => {});
        let status = 0, ms = 0;
        const t0 = Date.now();
        try {
          const res = await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
          status = res ? res.status() : 0;
        } catch (e) { errors.push("NAV " + e.message.slice(0, 120)); }
        ms = Date.now() - t0;
        await new Promise((r) => setTimeout(r, 350));
        let metrics = {};
        try { metrics = await page.evaluate(collect); } catch (e) { errors.push("EVAL " + e.message.slice(0, 100)); }

        let darkContrast = [];
        if (vpName === "desktop") {
          try {
            await page.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" });
            await page.evaluate(() => document.documentElement.classList.add("dark"));
            await new Promise((r) => setTimeout(r, 400));
            darkContrast = await page.evaluate(collectContrastOnly);
            await page.evaluate(() => document.documentElement.classList.remove("dark"));
          } catch (e) { errors.push("DARK " + e.message.slice(0, 80)); }
        }

        const issues = [];
        if (status !== 200 && status !== 304) issues.push(`HTTP ${status}`);
        if (metrics.overflow > 0) issues.push(`فيضان ${metrics.overflow}px`);
        if (metrics.overflow > 0 && metrics.offenders?.length) issues.push(`عناصر خارج الشاشة: ${metrics.offenders.join(" | ")}`);
        if (metrics.brokenImgs?.length) issues.push(`صور مكسورة: ${metrics.brokenImgs.join(", ")}`);
        if (metrics.noAlt) issues.push(`صور بلا alt: ${metrics.noAlt}`);
        if (metrics.h1s?.length !== 1) issues.push(`عدد h1: ${metrics.h1s?.length}`);
        if (metrics.headingJumps?.length) issues.push(`تسلسل عناوين: ${metrics.headingJumps.slice(0, 3).join(",")}`);
        if (metrics.nameless) issues.push(`أزرار/روابط بلا اسم: ${metrics.nameless}`);
        if (metrics.dupIds?.length) issues.push(`معرّفات مكررة: ${metrics.dupIds.join(", ")}`);
        if (metrics.tiny?.length) issues.push(`أهداف لمس صغيرة: ${metrics.tiny.join(" | ")}`);
        if (vpName === "mobile" && metrics.smallFonts > 6) issues.push(`خطوط <11px: ${metrics.smallFonts}`);
        if (metrics.clipped?.length) issues.push(`نص مقصوص: ${metrics.clipped.join(" | ")}`);
        if (darkContrast?.length) issues.push(`تباين ضعيف (داكن): ${darkContrast.map((c) => `${c.t} ${c.cr}:1<${c.need}`).join(" | ")}`);
        if (metrics.contrast?.length) issues.push(`تباين ضعيف: ${metrics.contrast.map((c) => `${c.t} ${c.cr}:1<${c.need} [${c.cls}]`).join(" | ")}`);
        if (metrics.langMissing?.length) issues.push(`نص ألماني بلا lang=de: ${metrics.langMissing.join(" | ")}`);
        if (metrics.desc && metrics.desc.length < 50) issues.push(`وصف meta قصير (${metrics.desc.length})`);
        if (metrics.title && metrics.title.length > 70) issues.push(`عنوان طويل (${metrics.title.length})`);
        if (errors.length) issues.push(`أخطاء JS: ${errors.slice(0, 2).join(" ; ")}`);

        results.push({ route, vp: vpName, status, ms, ...metrics, errors, failed, consoleErr, issues });
        if (issues.length && vpName !== "tablet") {
          const name = `${vpName}-${route.replace(/\//g, "_") || "_root"}`;
          await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: false }).catch(() => {});
        }
        await page.close();
      }
      if (process.env.AUDIT_VERBOSE) console.log("done", route, idx + "/" + ROUTES.length);
    }
  }
  await Promise.all([0, 1, 2, 3].map(() => worker()));
  fs.writeFileSync(OUT + "/report.json", JSON.stringify(results, null, 1));
  const pages = new Set(results.map((r) => r.route));
  const bad = results.filter((r) => r.issues.length);
  console.log("PAGES", pages.size, "CHECKS", results.length, "WITH_ISSUES", bad.length);
  const byIssue = {};
  for (const r of bad) for (const i of r.issues) {
    const key = i.split(":")[0].split(" ")[0];
    byIssue[key] = (byIssue[key] || 0) + 1;
  }
  console.log("BY_ISSUE", JSON.stringify(byIssue));
  await browser.close();
})().catch((e) => { console.error("FATAL", e); process.exit(1); });
