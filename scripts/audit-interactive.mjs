#!/usr/bin/env node
/**
 * audit-interactive.mjs — الجولة السادسة: الحالات التفاعلية المفتوحة (لكل مسار).
 *
 * الجولات السابقة فحصت الصفحة في حالتها **المغلقة**: لا نافذة، لا قائمة منسدلة،
 * لا لوحة جانبية، لا `details` مفتوح. وهذا يعني أن أزرار «القائمة»، «الإعدادات»،
 * «اختر المستوى»، «التفاصيل» لم تُختبر قط آلياً، مع أنها أكثر ما يسبب مشاكل
 * وصول حقيقية: تركيز يبقى خلف النافذة، Escape لا يغلق، تركيز لا يعود للزر.
 *
 * لكل مسار ولكل مشغّل (trigger) من هذه الأنواع:
 *   [aria-haspopup] · button[aria-expanded] · summary · button[aria-controls]
 * نفتحه ثم نفحص:
 *
 *  1) **حدث شيء**: زر يعلن `aria-haspopup`/`aria-expanded` يجب أن يفتح سطحاً.
 *  2) **السطح له دور**: `dialog` · `alertdialog` · `menu` · `listbox` · `details[open]`
 *     — عنصر يظهر بلا دور لا يُعلَن لقارئ الشاشة.
 *  3) **التركيز ينتقل** إلى داخل السطح (وإلّا كتب المستخدم في الخلفية).
 *  4) **Escape يُغلق** السطح.
 *  5) **التركيز يعود** إلى الزر بعد الإغلاق (وإلا يضيع موقع المستخدم).
 *  6) **النافذة الحاجزة لا تسرّب التركيز**: لا عنصر قابل للتركيز خارج
 *     `[role=dialog][aria-modal=true]` (إلّا داخل `aria-hidden`/`inert`).
 *  7) **الفتح لا يفيض أفقياً** على مستوى المستند.
 *
 * التغطية: **كل المسارات (189)**، وكل مشغّل من الأنواع أعلاه على الصفحة —
 * بلا اختيار عيّنة. عدد المشغّلات المكتشفة والمختبَرة يُطبع لكل صفحة في JSON
 * فيمكن التحقق من أن `tested == found`.
 *
 * الاستخدام:
 *   npm run build && npm run start
 *   node scripts/audit-interactive.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_MAX_TRIGGERS · AUDIT_VERBOSE
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/interactive.json";
const MAX_TRIGGERS = Number(process.env.AUDIT_MAX_TRIGGERS || 60);
const VIEWPORT = (process.env.AUDIT_VIEWPORT || "1280x900").split("x").map(Number);
/**
 * وضع «التحكّم السلبي» — يُعطِّل سلوكاً واحداً عمداً كي نثبت أن الأداة تكشفه.
 * أداة تقول «0 ملاحظة» بلا إثبات أنها تستطيع رؤية العيب ليست دليلاً.
 *   AUDIT_FAULT=escape  → يمنع إغلاق أي سطح بـEscape
 *   AUDIT_FAULT=focus   → يمنع نقل التركيز إلى السطح
 */
const FAULT = process.env.AUDIT_FAULT || "";
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

/** يُثبّت معرّفاً على كل مشغّل ويصفه — يُنفَّذ داخل الصفحة */
function markTriggers() {
  const SEL = '[aria-haspopup], button[aria-expanded], summary, button[aria-controls]';
  const els = [...document.querySelectorAll(SEL)].filter((el) => {
    if (el.closest("[aria-hidden='true'],[inert]")) return false;
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none";
  });
  return els.map((el, i) => {
    el.setAttribute("data-audit-trigger", String(i));
    const name =
      el.getAttribute("aria-label") ||
      (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40) ||
      el.getAttribute("title") ||
      "";
    return {
      i,
      tag: el.tagName.toLowerCase(),
      name,
      haspopup: el.getAttribute("aria-haspopup"),
      controls: el.getAttribute("aria-controls"),
      expanded: el.getAttribute("aria-expanded"),
    };
  });
}

/** حالة الأسطح المفتوحة والمؤشر — يُنفَّذ داخل الصفحة */
function overlayState(triggerIdx) {
  const visible = (el) => {
    // عنصر في طور الإغلاق (data-state=closed) ما زال يُرسم لحظة الاختفاء —
    // عَدّه «مفتوحاً» يجعل Escape يبدو معطّلاً (إنذار كاذب مقيس في /).
    if (el.getAttribute("data-state") === "closed") return false;
    if (el.closest('[data-state="closed"]')) return false;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return cs.display !== "none" && cs.visibility !== "hidden" && r.width > 1 && r.height > 1;
  };
  const roles = ["dialog", "alertdialog", "menu", "listbox", "tree", "grid"];
  let surface = null;
  for (const role of roles) {
    const found = [...document.querySelectorAll(`[role="${role}"]`)].filter(visible);
    if (found.length) surface = { el: found[found.length - 1], role };
  }
  if (!surface) {
    const menu = [...document.querySelectorAll('[data-state="open"][role="menu"],[data-state="open"][role="dialog"]')].filter(visible);
    if (menu.length) surface = { el: menu[menu.length - 1], role: menu[menu.length - 1].getAttribute("role") || "?" };
  }
  if (!surface) {
    const open = [...document.querySelectorAll("details[open]")].filter(visible);
    if (open.length) surface = { el: open[open.length - 1], role: "details" };
  }
  /* كشف «الإفصاح» (disclosure): زر `aria-expanded=true` يتحكّم بعنصر ظاهر
     (FAQ، أقسام قابلة للفتح). هذا ليس نافذة ولا قائمة: لا يُشترط دور خاص ولا
     انتقال تركيز، ولا يُغلق بـEscape — فلا تُحسب عيباً. */
  if (!surface && triggerIdx !== undefined) {
    const trg = document.querySelector(`[data-audit-trigger="${triggerIdx}"]`);
    if (trg && trg.getAttribute("aria-expanded") === "true") {
      const id = trg.getAttribute("aria-controls");
      const target = id ? document.getElementById(id) : null;
      if (target && visible(target)) surface = { el: target, role: "disclosure" };
      else if (!id) surface = { el: trg, role: "disclosure" };
    }
  }
  if (!surface) return null;

  const el = surface.el;
  const modal = el.getAttribute("aria-modal") === "true" || surface.role === "alertdialog";
  const focusInside = el.contains(document.activeElement);
  const activeDesc =
    document.activeElement === document.body
      ? "body"
      : `${document.activeElement.tagName.toLowerCase()}.${String(document.activeElement.className || "").split(" ")[0]}`;

  // عناصر قابلة للتركيز خارج السطح — تُهمَل إن كانت داخل aria-hidden/inert
  const focusables = [...document.querySelectorAll('a[href],button,input,select,textarea,[tabindex]:not([tabindex="-1"])')];
  const outside = focusables.filter((f) => {
    if (el.contains(f)) return false;
    if (f.closest("[aria-hidden='true'],[inert]")) return false;
    if (f.disabled) return false;
    const r = f.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    const cs = getComputedStyle(f);
    return cs.display !== "none" && cs.visibility !== "hidden";
  });

  const de = document.documentElement;
  return {
    role: surface.role,
    modal,
    focusInside,
    activeDesc,
    outsideFocusables: outside.length,
    overflow: de.scrollWidth - de.clientWidth,
    label:
      el.getAttribute("aria-label") ||
      el.getAttribute("aria-labelledby") ||
      "",
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
  await page.setViewport({ width: VIEWPORT[0], height: VIEWPORT[1] });
  if (FAULT === "escape") {
    await page.evaluateOnNewDocument(() => {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") e.stopImmediatePropagation();
      }, true);
    });
  }
  if (FAULT === "focus") {
    await page.evaluateOnNewDocument(() => {
      const orig = HTMLElement.prototype.focus;
      HTMLElement.prototype.focus = function () {
        /* مُعطَّل عمداً — تحكّم سلبي */
      };
      void orig;
    });
  }
  const issues = [];
  const record = { route, found: 0, tested: 0, skipped: 0, surfaces: [], issues };
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 900));
    const triggers = await page.evaluate(markTriggers);
    record.found = triggers.length;

    for (const t of triggers) {
      if (record.tested >= MAX_TRIGGERS) {
        record.skipped = triggers.length - record.tested;
        break;
      }

      /* فتح بنقرة **حقيقية** (ماوس) لا بـ`el.click()`: قوائم Radix تفتح على
         `pointerdown`، والنقر المصطنع لا يولّده — فكانت كل القوائم تبدو «لم تفتح
         شيئاً» في أول نسخة من الأداة، وهذا عيب في الأداة لا في التطبيق. */
      const handle = await page.$(`[data-audit-trigger="${t.i}"]`);
      if (!handle) {
        issues.push(`مشغّل ${t.i} «${t.name}»: اختفى قبل النقر`);
        continue;
      }
      await handle.evaluate((el) => el.scrollIntoView({ block: "center" }));
      // مهلة أطول: إغلاق إفصاح سابق يُحرّك العنصر تحت المؤشر أثناء الحركة
      await new Promise((r) => setTimeout(r, 320));
      try {
        await handle.click({ delay: 20 });
      } catch {
        issues.push(`مشغّل ${t.i} «${t.name}»: تعذّر النقر عليه (مغطّى أو خارج الشاشة)`);
        continue;
      }
      await new Promise((r) => setTimeout(r, 420));

      let opened = await page.evaluate(overlayState, t.i);
      if (!opened) {
        /* محاولة ثانية: قد يكون العنصر تحرّك بين القياس والنقر (حركة فتح/إغلاق
           سابق). نُعيد التمركز والنقر مرة واحدة فقط قبل الحكم بالفشل. */
        await handle.evaluate((el) => el.scrollIntoView({ block: "center" }));
        await new Promise((r) => setTimeout(r, 250));
        await handle.click({ delay: 20 }).catch(() => {});
        await new Promise((r) => setTimeout(r, 500));
        opened = await page.evaluate(overlayState, t.i);
      }
      record.tested += 1;

      if (!opened) {
        issues.push(`مشغّل ${t.i} «${t.name}» (${t.tag}): أعلن ${t.haspopup ? "haspopup=" + t.haspopup : t.expanded !== null ? "aria-expanded" : "controls"} لكنه لم يفتح سطحاً مرئياً`);
        // إعادة ضبط: قد يكون فتح شيئاً بلا دور ثم انغلق سريعاً
        await page.keyboard.press("Escape");
        await new Promise((r) => setTimeout(r, 200));
        continue;
      }

      record.surfaces.push({ trigger: t.i, name: t.name, role: opened.role, modal: opened.modal });

      if (opened.role === "disclosure" || opened.role === "details") {
        /* إفصاح: محتوى ظهر في مكانه، لا نافذة عائمة. لا نطالب بدور ولا بانتقال
           تركيز، و**لا نطالب بـEscape**: عنصر `<details>` الأصلي لا يُغلق بـEscape
           وفق HTML spec، وطلب ذلك منه عيبٌ في الأداة لا في الصفحة. (نسخة الأداة
           الأولى أعلنت 9 «عيوب» لهذا السبب في /faq و/tests/sprechen.) */
        if (opened.role === "details") {
          await page.mouse.click(4, 4); // لا يُغلق بالنقر خارجاً؛ نعيد التحميل لاحقاً عند الحاجة
        } else {
          await handle.evaluate((el) => el.click());
        }
        await new Promise((r) => setTimeout(r, 250));
        continue;
      }

      if (opened.role === "?") {
        issues.push(`مشغّل ${t.i} «${t.name}»: السطح المفتوح بلا دور (role) — لا يُعلَن لقارئ الشاشة`);
      }
      if (!opened.focusInside) {
        issues.push(`مشغّل ${t.i} «${t.name}»: التركيز لم ينتقل إلى ${opened.role} (بقي على ${opened.activeDesc})`);
      }
      if (opened.outsideFocusables > 0 && (opened.modal || opened.role === "dialog")) {
        issues.push(`مشغّل ${t.i} «${t.name}»: ${opened.outsideFocusables} عنصراً قابلاً للتركيز خارج ${opened.role} الحاجزة`);
      }
      if (opened.overflow > 2) {
        issues.push(`مشغّل ${t.i} «${t.name}»: الفتح سبب فيضاناً أفقياً ${opened.overflow}px`);
      }

      // Escape
      await page.keyboard.press("Escape");
      await new Promise((r) => setTimeout(r, 450));
      const after = await page.evaluate(overlayState, t.i);
      if (after) {
        issues.push(`مشغّل ${t.i} «${t.name}»: Escape لم يُغلق ${after.role}`);
        await page.keyboard.press("Escape");
        await new Promise((r) => setTimeout(r, 200));
        const again = await page.evaluate(overlayState, t.i);
        if (again) {
          // تنظيف: نقر خارج السطح
          await page.mouse.click(4, 4);
          await new Promise((r) => setTimeout(r, 250));
        }
      } else {
        const restored = await page.evaluate((i) => {
          const el = document.querySelector(`[data-audit-trigger="${i}"]`);
          return !!el && (document.activeElement === el || el.contains(document.activeElement));
        }, t.i);
        if (!restored) {
          issues.push(`مشغّل ${t.i} «${t.name}»: التركيز لم يعد إلى الزر بعد الإغلاق`);
        }
      }

      // إعادة ضبط كاملة قبل المشغّل التالي
      const stillOpen = await page.evaluate(overlayState, t.i);
      if (stillOpen) {
        await page.mouse.click(4, 4);
        await new Promise((r) => setTimeout(r, 200));
      }
    }
  } catch (e) {
    issues.push("NAV " + e.message.slice(0, 100));
  }
  await page.close();
  out.push(record);
  if (VERBOSE) console.log(route, `found=${record.found} tested=${record.tested}`, issues.length ? "❌ " + issues.join(" ; ") : "✅");
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const bad = out.filter((x) => x.issues.length);
const totalFound = out.reduce((a, x) => a + x.found, 0);
const totalTested = out.reduce((a, x) => a + x.tested, 0);
console.log("VIEWPORT", VIEWPORT.join("x"));
if (FAULT) console.log("FAULT MODE", FAULT, "(يجب أن تظهر ملاحظات — وإلا فالأداة لا تكشف هذا العيب)");
console.log("PAGES", out.length, "WITH_ISSUES", bad.length);
console.log("TRIGGERS found", totalFound, "tested", totalTested);
for (const b of bad.slice(0, 60)) console.log(b.route, "|", b.issues.slice(0, 4).join(" ; "));
