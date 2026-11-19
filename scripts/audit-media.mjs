#!/usr/bin/env node
/**
 * audit-media.mjs — الجولة التاسعة: الوسائط والصوت (لكل مسار).
 *
 * الجولات 2–8 فحصت التباين، لوحة المفاتيح، ثبات التخطيط، التكبير، الحالات
 * المفتوحة، النماذج، والجداول. بقي بُعد **الوسائط**: أزرار الاستماع والنطق
 * والتسجيل، وإفصاحات النص/الترجمة المرافقة للصوت، ورسائل فشل الميكروفون
 * والتشغيل. وهو بُعد يُبنى بأيقونات فقط فيصير صامتاً تماماً لقارئ الشاشة.
 *
 * الفحوص (لكل مسار، بلا عيّنة):
 *
 *  M1) **عناصر `<audio>`/`<video>`**: لها اسم وصول (aria-label/aria-labelledby/
 *      title)؛ ولا `autoplay` بلا `controls` (WCAG 1.4.2: صوت يبدأ تلقائياً
 *      أكثر من 3 ثوانٍ بلا وسيلة إيقاف). وإن كانت بلا `controls` فيجب أن يقودها
 *      زر معلَّم — وإلا فلا وسيلة للمستخدم لتشغيلها/إيقافها.
 *  M2) **اسم كل زر وسائط**: زر نصّه أيقونة/إيموجي فقط بلا `aria-label`/`title`
 *      يُعلَن «زر» بلا وظيفة. (أزرار «استمع» النصية سليمة، والمشكلة تكمن في
 *      أزرار التشغيل/الإيقاف الأيقونية.)
 *  M3) **حالة الإفصاح**: زر يبدّل نصاً/ترجمة («أظهر الترجمة» ⟷ «إخفاء الترجمة»،
 *      «اكشف النص»…) يجب أن يحمل `aria-expanded` — وإلا لا يعرف المستخدم أن
 *      المحتوى مفتوح أم مغلق قبل النقر ولا بعده.
 *  M4) **`aria-controls` صالح**: كل إشارة إلى لوحة إفصاح يجب أن تطابق معرّفاً
 *      موجوداً (المرجع المكسور أسوأ من غياب السمة).
 *  M5) **أيقونات زخرفية صامتة**: `svg` مرئي بلا `aria-hidden` ولا دور/اسم
 *      يُعلَن «رسم» في منتصف الجملة العربية.
 *  M6) **رسائل الوسائط معلَنة**: نص يخصّ فشل التشغيل/التسجيل/غياب الصوت أو رفض
 *      الميكروفون يجب أن يكون داخل `[aria-live]`/`role=alert|status` (WCAG 4.1.3).
 *  M7) **مناطق الحالة غير مخفية**: `aria-live`/`role=alert|status` ليست داخل
 *      `aria-hidden`/`inert`.
 *
 * مقياس لا حكم: عدد صفحات الاستماع التي يتاح فيها النص الألماني (بديل نصي) —
 * يُطبع في الملخّص، ولا يُحتسب مخالفةً لأن بعض الصفحات (الامتحانات) تُخفي النص
 * عمداً لحماية قيمة الاستماع.
 *
 * الاستخدام: node scripts/audit-media.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_FAULT
 *  AUDIT_FAULT=expanded يزيل aria-expanded من أزرار الإفصاح (تحكّم سلبي لـM3)،
 *  وAUDIT_FAULT=live يزيل دور المنطقة الحيّة (لـM6)،
 *  وAUDIT_FAULT=icon يزيل aria-label من كل زر أيقوني (لـM2)،
 *  وAUDIT_FAULT=svg يزيل aria-hidden من كل svg (لـM5)،
 *  وAUDIT_FAULT=media يحقن <audio autoplay> بلا controls ولا اسم (لـM1)،
 *  وAUDIT_FAULT=message يحقن رسالة فشل تشغيل خارج منطقة حيّة (لـM6)،
 *  وAUDIT_FAULT=controls يكسّر مرجع aria-controls (لـM4)،
 *  وAUDIT_FAULT=livehidden يلفّ منطقة حيّة بـaria-hidden (لـM7).
 */
import fs from "node:fs";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/media.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";

/** مسارات خارج sitemap (حالات لا تُفهرس) — نفس قائمة الجولات السابقة */
const EXTRA_ROUTES = [
  "/about",
  "/privacy",
  "/grammatik/funktionsverbgefuege",
  "/tests/mock",
  "/tests/plan-b2",
  "/wortschatz-b2/top500",
  "/review",
  "/forms",
  "/lesson/a1-01",
  "/level/a1",
  "/tests/b2-simulation",
  "/",
];

async function loadRoutes() {
  if (process.env.AUDIT_ROUTES) {
    return process.env.AUDIT_ROUTES.split(",").map((r) => r.trim()).filter(Boolean);
  }
  const xml = await (await fetch(BASE + "/sitemap.xml")).text();
  const fromMap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname || "/");
  return [...new Set([...fromMap, ...EXTRA_ROUTES])].sort();
}

/** يُنفَّذ داخل الصفحة */
function inspectMedia() {
  const visible = (el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return cs.display !== "none" && cs.visibility !== "hidden" && r.width > 1 && r.height > 1;
  };
  const label = (el) =>
    `${el.tagName.toLowerCase()}${(el.getAttribute("class") || "").trim() ? "." + (el.getAttribute("class") || "").trim().split(/\s+/)[0] : ""}`;

  const nameOf = (el) => {
    const byFor = el.id ? document.querySelector(`label[for="${CSS.escape(el.id)}"]`) : null;
    return (
      (byFor?.textContent || "").trim() ||
      (el.getAttribute("aria-label") || "").trim() ||
      (el.getAttribute("aria-labelledby") || "")
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .trim() ||
      (el.textContent || "").trim() ||
      (el.getAttribute("title") || "").trim() ||
      (el.querySelector("img")?.getAttribute("alt") || "").trim()
    );
  };

  /* M1 — عناصر الوسائط */
  const mediaIssues = [];
  const sounds = [...document.querySelectorAll("audio, video")];
  for (const el of sounds) {
    // تشغيل تلقائي بلا عناصر تحكم عيب صوتي (1.4.2) حتى لو كان العنصر صفري الحجم
    // (وهو كذلك دائماً بلا controls) — الفحص هنا لا يعتمد على الظهور البصري.
    if (el.hasAttribute("autoplay") && !el.hasAttribute("controls") && mediaIssues.length < 6) {
      mediaIssues.push(`${label(el)}: autoplay بلا عناصر تحكم (WCAG 1.4.2)`);
    }
    if (!visible(el)) continue;
    const named =
      (el.getAttribute("aria-label") || "").trim() ||
      (el.getAttribute("aria-labelledby") || "").trim() ||
      (el.getAttribute("title") || "").trim();
    if (!named && mediaIssues.length < 6) mediaIssues.push(`${label(el)}: وسيط بلا اسم`);
    if (!el.hasAttribute("controls")) {
      const controlled = el.id
        ? document.querySelector(`[aria-controls~="${CSS.escape(el.id)}"]`)
        : null;
      if (!controlled && mediaIssues.length < 6) {
        mediaIssues.push(`${label(el)}: بلا controls ولا زر يقودها`);
      }
    }
  }

  /* M2 — أزرار الوسائط بلا اسم (أيقونة/إيموجي فقط) */
  const unlabeled = [];
  const controls = [...document.querySelectorAll("button, [role='button']")].filter(visible);
  for (const b of controls) {
    const name = nameOf(b);
    if (!name && unlabeled.length < 6) unlabeled.push(label(b));
  }

  /* M3 — أزرار الإفصاح بلا aria-expanded */
  const DISCLOSE = /^(أظهر|إخفاء|اكشف|أخف|عرض|إظهار|أرني|ترجمة|النص)\b|الترجمة|النص$|عرض النص|إخفاء النص/i;
  const disclosureIssues = [];
  const disclosures = [];
  for (const b of controls) {
    const text = (b.textContent || "").trim();
    if (!text || text.length > 30) continue;
    if (!DISCLOSE.test(text)) continue;
    // «استمع» و«تشغيل» أفعال لا إفصاحات — وكذلك أي زر نطق (SpeakButton) نصّه
    // المرئي «كل النص» لكن aria-label يبدأ بـ«استمع».
    if (/^(استمع|شغّل|إيقاف|تشغيل)/.test(text)) continue;
    if (/^(استمع|نطق|اسمع)/.test((b.getAttribute("aria-label") || "").trim())) continue;
    if (/استمع|نطق/.test((b.getAttribute("title") || "").trim())) continue;
    // زر اختيار مرحلة/تبويب (aria-pressed/aria-selected) يعلن حالته بسمة أخرى،
    // وليس إفصاحاً — النص قد يصادف «الترجمة» في اسم المرحلة فقط.
    if (b.hasAttribute("aria-pressed") || b.hasAttribute("aria-selected")) continue;
    disclosures.push(b);
    if (b.getAttribute("aria-expanded") === null) {
      if (disclosureIssues.length < 6) disclosureIssues.push(`«${text}» — بلا aria-expanded`);
    }
  }

  /* M4 — aria-controls صالح */
  const brokenControls = [];
  const ids = new Set([...document.querySelectorAll("[id]")].map((e) => e.id));
  for (const el of document.querySelectorAll("[aria-controls]")) {
    for (const ref of (el.getAttribute("aria-controls") || "").split(/\s+/).filter(Boolean)) {
      if (!ids.has(ref) && brokenControls.length < 6) {
        brokenControls.push(`aria-controls="${ref}" على ${label(el)}`);
      }
    }
  }

  /* M5 — أيقونات زخرفية بلا aria-hidden */
  const noisyIcons = [];
  for (const svg of document.querySelectorAll("svg")) {
    if (!visible(svg)) continue;
    if (svg.getAttribute("aria-hidden") === "true") continue;
    // سلف مخفي عن قارئ الشاشة (أو inert) يجعل الأيقونة صامتة أصلاً — ليست عيباً.
    if (svg.closest("[aria-hidden='true'], [inert]")) continue;
    const interactive = svg.closest("button, a, [role='button']");
    if (interactive) continue; // اسم الزر يغطي الأيقونة
    const named =
      svg.getAttribute("role") === "img" ||
      (svg.getAttribute("aria-label") || "").trim() ||
      svg.querySelector("title");
    if (!named && noisyIcons.length < 6) noisyIcons.push(label(svg));
  }

  /* M6 — رسائل الوسائط غير معلَنة */
  const mediaMessages = [];
  /* صيغ الفشل الفعلية فقط. «الميكروفون» وحده نصّ إرشادي لا رسالة خطأ، ومطابقته
     كانت ستتّهم صفحة /sound-check ظلماً. */
  const MSG = /(تعذّر|تعذر|لا يوجد صوت|رُفض|رفض الإذن|لم يُنتَج|فشل (?:تشغيل|التسجيل|الاتصال)|لم يُسمح)/;
  for (const el of document.querySelectorAll("main p, main span, main div, main li")) {
    if (!visible(el)) continue;
    if (el.children.length > 2) continue;
    const txt = (el.textContent || "").trim();
    if (txt.length < 6 || txt.length > 140 || !MSG.test(txt)) continue;
    if (el.closest("[aria-live], [role='alert'], [role='status'], output")) continue;
    if (el.closest("button, a, label, h1, h2, h3, h4, [role='dialog']")) continue;
    // نأخذ أصغر عنصر يحمل الرسالة
    if ([...el.children].some((c) => MSG.test((c.textContent || "").trim()))) continue;
    if (mediaMessages.length < 4) mediaMessages.push(`«${txt.slice(0, 46)}»`);
  }

  /* M7 — مناطق حيّة مخفية */
  const hiddenLive = [];
  for (const el of document.querySelectorAll("[aria-live]:not([aria-live='off']), [role='alert'], [role='status']")) {
    if (el.closest("[aria-hidden='true'],[inert]") && hiddenLive.length < 4) hiddenLive.push(label(el));
  }

  /* مقياس — بديل نصي لصفحات الاستماع */
  const playButtons = controls.filter((b) =>
    /استمع|اسمع|شغّل|تشغيل|سماع|المشغّل/i.test(nameOf(b) || ""),
  );
  const germanText = [...document.querySelectorAll("main [lang='de'], main [dir='ltr']")]
    .map((e) => (e.textContent || "").trim())
    .filter((t) => t.length >= 40).length;

  return {
    audioElements: sounds.length,
    playControls: playButtons.length,
    disclosureButtons: disclosures.length,
    svgIcons: document.querySelectorAll("svg").length,
    germanTextBlocks: germanText,
    hasTranscript: germanText > 0,
    mediaIssues,
    unlabeled,
    disclosureIssues,
    brokenControls,
    noisyIcons,
    mediaMessages,
    hiddenLive,
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
  const issues = [];
  const record = {
    route,
    audioElements: 0,
    playControls: 0,
    disclosureButtons: 0,
    svgIcons: 0,
    hasTranscript: false,
    issues,
  };
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 700));

    /* الوصول إلى المشغّلات: صفحات الدروس تخفي الاستماع داخل خطوة مقفلة،
       والصفحات المكتبية تعرض قائمة حلقات/حوارات قبل المشغّل. نضغط عنصراً
       واحداً فقط (سقف متعمد) ونبقى على المسار نفسه. */
    if (route.startsWith("/lesson/")) {
      const listenIdx = await page.evaluate(() =>
        [...document.querySelectorAll("[role='tab']")].findIndex((t) => /الاستماع/.test(t.textContent || "")),
      );
      if (listenIdx > 0) {
        const lessonId = route.split("/").filter(Boolean).pop();
        await page.evaluate(([id, idx]) => localStorage.setItem(`lesson-step:${id}`, String(idx)), [lessonId, listenIdx]);
        await page.reload({ waitUntil: "networkidle2", timeout: 45000 });
        await new Promise((r) => setTimeout(r, 700));
      }
    } else if (route === "/podcasts" || route === "/dialogues" || route === "/hoeren") {
      const before = page.url();
      await page.evaluate(() => {
        const el = [...document.querySelectorAll("main button, main a")].find((b) =>
          /استماع|استمع|ابدأ|افتح/.test((b.textContent || "").trim()),
        );
        el?.click();
      });
      await new Promise((r) => setTimeout(r, 700));
      if (page.url() !== before) await page.goto(before, { waitUntil: "networkidle2", timeout: 45000 });
    }

    /* نفتح الإفصاحات مرة واحدة كي تُفحص حالة الإفصاح الفعلية (لا التسمية فقط) */
    await page.evaluate(() => {
      let n = 0;
      for (const el of document.querySelectorAll("button[aria-expanded='false']")) {
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) continue;
        el.click();
        n += 1;
        if (n >= 12) break;
      }
    });
    await new Promise((r) => setTimeout(r, 350));

    /* التحكّم السلبي يُطبَّق بعد التحميل كي يصل إلى DOM فعلاً */
    if (FAULT === "expanded") {
      await page.evaluate(() => document.querySelectorAll("[aria-expanded]").forEach((el) => el.removeAttribute("aria-expanded")));
    }
    if (FAULT === "live") {
      await page.evaluate(() =>
        document.querySelectorAll("[role='status'], [role='alert']").forEach((el) => el.removeAttribute("role")),
      );
    }
    if (FAULT === "svg") {
      await page.evaluate(() => document.querySelectorAll("svg[aria-hidden='true']").forEach((s) => s.removeAttribute("aria-hidden")));
    }
    if (FAULT === "media") {
      await page.evaluate(() => {
        const a = document.createElement("audio");
        a.autoplay = true;
        a.src = "/audio/lessons/a1-01/01.mp3";
        document.querySelector("main")?.appendChild(a);
      });
    }
    if (FAULT === "message") {
      await page.evaluate(() => {
        const p = document.createElement("p");
        p.textContent = "تعذّر تشغيل التسجيل.";
        document.querySelector("main")?.appendChild(p);
      });
    }
    if (FAULT === "controls") {
      await page.evaluate(() => {
        document.querySelectorAll("[aria-controls]").forEach((el) => el.setAttribute("aria-controls", "missing-panel"));
      });
    }
    if (FAULT === "livehidden") {
      await page.evaluate(() => {
        const live = document.querySelector(
          "[aria-live]:not([aria-live='off']), [role='status'], [role='alert']",
        );
        if (live) {
          const wrap = document.createElement("div");
          wrap.setAttribute("aria-hidden", "true");
          live.replaceWith(wrap);
          wrap.appendChild(live);
        }
      });
    }
    if (FAULT === "icon") {
      await page.evaluate(() =>
        document.querySelectorAll("button[aria-label], button[title]").forEach((b) => {
          b.removeAttribute("aria-label");
          b.removeAttribute("title");
        }),
      );
    }

    const res = await page.evaluate(inspectMedia);
    Object.assign(record, res);
    record.issues = issues;

    if (res.mediaIssues.length) issues.push(`عنصر وسائط: ${res.mediaIssues.join(" | ")}`);
    if (res.unlabeled.length) issues.push(`زر بلا اسم: ${res.unlabeled.join(" | ")}`);
    if (res.disclosureIssues.length) issues.push(`إفصاح بلا حالة: ${res.disclosureIssues.join(" | ")}`);
    if (res.brokenControls.length) issues.push(`aria-controls مكسور: ${res.brokenControls.join(" | ")}`);
    if (res.noisyIcons.length) issues.push(`أيقونة غير صامتة: ${res.noisyIcons.join(" | ")}`);
    if (res.mediaMessages.length) issues.push(`رسالة وسائط غير معلَنة: ${res.mediaMessages.join(" | ")}`);
    if (res.hiddenLive.length) issues.push(`منطقة حيّة مخفية: ${res.hiddenLive.join(" | ")}`);
  } catch (e) {
    issues.push("NAV " + e.message.slice(0, 100));
  }
  await page.close();
  out.push(record);
  if (VERBOSE) {
    console.log(route, `audio=${record.audioElements} play=${record.playControls}`, issues.length ? "❌ " + issues.join(" ; ") : "✅");
  }
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const bad = out.filter((x) => x.issues.length);
const sum = (k) => out.reduce((a, x) => a + (x[k] || 0), 0);
console.log("PAGES", out.length, "WITH_ISSUES", bad.length);
console.log("AUDIO", sum("audioElements"), "PLAY", sum("playControls"), "DISCLOSURE", sum("disclosureButtons"), "SVG", sum("svgIcons"));
console.log("PAGES_WITH_GERMAN_TEXT", out.filter((x) => x.hasTranscript).length);
for (const b of bad.slice(0, 60)) console.log(b.route, "|", b.issues.slice(0, 3).join(" ; "));
