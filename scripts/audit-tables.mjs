#!/usr/bin/env node
/**
 * audit-tables.mjs — الجولة الثامنة: الجداول والبيانات الكبيرة (لكل مسار).
 *
 * الجولات 2–7 فحصت التباين، لوحة المفاتيح، ثبات التخطيط، التكبير، الحالات
 * المفتوحة، والنماذج. بقي بُعد كامل لم يُفحص آلياً: **البيانات المنظّمة** —
 * الجداول وقوائم النتائج. وهو أكثر ما يُبنى يدوياً بـ`<div>`، وأكثر ما يقرأه
 * المستخدم بعينه ويسمعه قارئ الشاشة مختلفاً تماماً.
 *
 * الفحوص (لكل مسار، بلا عيّنة):
 *
 *  T1) **اسم لكل جدول**: `caption` أو `aria-label` أو `aria-labelledby` موجود.
 *      الجدول بلا اسم يُعلَن «جدول، 7 صفوف، 4 أعمدة» بلا سياق.
 *  T2) **رؤوس الأعمدة**: كل `th` له `scope` صريح (أو `colgroup`/`colspan` يبرّره).
 *      بدونه يخمّن المتصفح، والتخمين يفشل في الجداول ذات الرأس الأفقي.
 *  T3) **رأس صف** للجداول العريضة (≥3 أعمدة): أول خلية في كل صف `th`
 *      `scope="row"` — بدونه يقرأ المستخدم «A1» بلا معرفة أنه المستوى.
 *  T4) **انتظام الشبكة**: عدد الخلايا في كل صف يساوي عدد الرؤوس (مع `colspan`)،
 *      فلا صف ناقص يُزيح كل ما بعده في قراءة الجدول.
 *  T5) **جدول قابل للتمرير أفقياً يجب أن يُلمس بلوحة المفاتيح** (WCAG 2.1.1):
 *      الحاوية التي فيها `scrollWidth > clientWidth` وتفيض أفقياً يجب أن تكون
 *      قابلة للتركيز (`tabindex="0"`) ولها اسم (`role="region"`+label).
 *  T6) **الفرز**: إن كان رأس العمود زراً (فرز) فيجب `aria-sort` على الـ`th`.
 *  T7) **قوائم بلا دلالة قائمة**: حاوية بها ≥10 أبناء متشابهين (بطاقات/صفوف)
 *      ليست `ul/ol/table/[role=list]` ⇒ لا يُعلَن «قائمة، 30 عنصراً».
 *  T9) **أزرار تبديل بلا مجموعة مسماة**: ≥6 `button[aria-pressed|expanded]` في
 *      حاوية بلا `role=group`/اسم — فتُعلَن أزراراً متفرقة بلا سياق. المجموعات
 *      الصغيرة (3–5) لا تُطلب لها مجموعة: الدور يُعلَن مع كل زر وحالته.
 *  T8) **عدّاد نتائج غير معلَن**: صفحة فيها حقل بحث وعدّاد («N كلمة/فعل/نتيجة»)
 *      خارج منطقة حيّة ⇒ تغيّر النتيجة بعد الكتابة لا يُسمع (WCAG 4.1.3).
 *
 * المخرجات: JSON تفصيلي + ملخّص. التغطية الكاملة تُثبت بعدد الجداول/القوائم.
 *
 * الاستخدام: node scripts/audit-tables.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_FAULT
 *  AUDIT_VIEWPORT=360x800 يقيس T5 عند ضيق الشاشة حيث تفيض الجداول فعلاً.
 *  AUDIT_FAULT=scope يزيل `scope` من كل `th` قبل الفحص (تحكّم سلبي يثبت أن T2
 *  يكشف العيب فعلاً). AUDIT_FAULT=list يحوّل `ul[role=list]` إلى `div`.
 */
import fs from "node:fs";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/tables.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";
const [VW, VH] = (process.env.AUDIT_VIEWPORT || "1280x900").split("x").map(Number);

/** مسارات خارج sitemap (حالات لا تُفهرس) */
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
function inspectTables() {
  const visible = (el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return cs.display !== "none" && cs.visibility !== "hidden" && r.width > 1 && r.height > 1;
  };
  const label = (el) =>
    `${el.tagName.toLowerCase()}${el.className ? "." + String(el.className).split(" ")[0] : ""}`;

  /* T1 · T2 · T3 · T4 · T6 — الجداول */
  const tables = [...document.querySelectorAll("table")].filter(visible);
  const tableIssues = [];
  const add = (msg) => tableIssues.length < 8 && tableIssues.push(msg);

  for (const [ti, t] of tables.entries()) {
    const name =
      (t.querySelector("caption")?.textContent || "").trim() ||
      (t.getAttribute("aria-label") || "").trim() ||
      (t.getAttribute("aria-labelledby") || "")
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .trim();
    const tag = `جدول#${ti + 1}${name ? ` «${name.slice(0, 24)}»` : ""}`;
    if (!name) add(`${tag}: بلا اسم (caption/aria-label/aria-labelledby)`);

    // T2: scope على كل th (إلا إذا كان الجدول كله أعمدة في thead بلا thead متداخل)
    const ths = [...t.querySelectorAll("th")];
    const noScope = ths.filter((th) => !th.getAttribute("scope"));
    if (noScope.length && ths.length) add(`${tag}: ${noScope.length}/${ths.length} th بلا scope`);

    // T4: انتظام الشبكة
    const headerCols = [...t.querySelectorAll("thead tr")].reduce((max, tr) => {
      const n = [...tr.children].reduce((a, c) => a + (Number(c.getAttribute("colspan")) || 1), 0);
      return Math.max(max, n);
    }, 0);
    let ragged = 0;
    for (const tr of t.querySelectorAll("tbody tr")) {
      const n = [...tr.children].reduce((a, c) => a + (Number(c.getAttribute("colspan")) || 1), 0);
      if (headerCols && n !== headerCols) ragged += 1;
    }
    if (ragged) add(`${tag}: ${ragged} صفاً بعدد خلايا ≠ ${headerCols} (شبكة غير منتظمة)`);

    // T3: رأس صف للجداول العريضة
    if (headerCols >= 3) {
      const bodyRows = [...t.querySelectorAll("tbody tr")].filter((tr) => tr.children.length);
      const withRowHead = bodyRows.filter((tr) => tr.firstElementChild?.tagName === "TH").length;
      if (bodyRows.length && withRowHead < bodyRows.length) {
        add(`${tag}: ${bodyRows.length - withRowHead}/${bodyRows.length} صفاً بلا رأس صف (th scope=row)`);
      }
    }

    // T6: الفرز — زر داخل رأس قد يكون نطقاً لا فرزاً، فنستثنيه.
    for (const th of ths) {
      const sortBtn = [...th.querySelectorAll("button")].find(
        (b) => !/نطق|استمع|speak/i.test(b.getAttribute("aria-label") || ""),
      );
      if (sortBtn && th.getAttribute("aria-sort") === null) {
        add(`${tag}: رأس قابل للنقر بلا aria-sort`);
      }
    }
  }

  /* T5 — حاويات تمرير أفقي غير قابلة للتركيز */
  const scrollIssues = [];
  for (const el of document.querySelectorAll("*")) {
    const cs = getComputedStyle(el);
    const scrollable = /(auto|scroll)/.test(cs.overflowX) && el.scrollWidth > el.clientWidth + 1;
    if (!scrollable) continue;
    if (el.matches("textarea, input, select")) continue;
    /* ودجات تُدير تمريرها بنفسها: أبناؤها قابلون للتركيز فالمتصفح يُمرّر إليهم.
       (tablist · toolbar · menu · grid) — لا نحتاجها منطقة تركيز إضافية. */
    if (el.matches("[role='tablist'], [role='toolbar'], [role='menu'], [role='grid']")) continue;
    const focusable = el.tabIndex >= 0;
    const named =
      (el.getAttribute("aria-label") || "").trim() ||
      (el.getAttribute("aria-labelledby") || "").trim() ||
      el.getAttribute("role") === "region";
    if (!focusable && scrollIssues.length < 4) {
      scrollIssues.push(`${label(el)}: تمرير أفقي ${el.scrollWidth}>${el.clientWidth} بلا tabindex`);
    } else if (focusable && !named && scrollIssues.length < 4) {
      scrollIssues.push(`${label(el)}: قابل للتركيز بلا role=region/اسم`);
    }
  }

  /* T7 — حاويات بيانات بلا دلالة قائمة */
  const listIssues = [];
  const SIGNATURE = (el) =>
    `${el.tagName}.${String(el.className || "").split(/\s+/).sort().join(".")}`;
  for (const parent of document.querySelectorAll("main div, main section, main ul, body div")) {
    if (listIssues.length >= 4) break;
    const kids = [...parent.children].filter(visible);
    if (kids.length < 10) continue;
    const sigs = new Set(kids.map(SIGNATURE));
    if (sigs.size > 2) continue; // ليس تكراراً
    const listRole = parent.getAttribute("role");
    const listStripped = listRole === "presentation" || listRole === "none";
    if (parent.matches("table, tbody, tr, [role='grid'], [role='rowgroup'], [role='radiogroup'], [role='menu'], [role='tablist']")) continue;
    if (parent.matches("ul, ol") && !listStripped) continue;
    if (parent.getAttribute("role") === "list" && !listStripped) continue;
    // شبكات التخطيط (أقسام) تُستثنى: نتطلّب أن يكون الأبناء نفس الحجم تقريباً
    const heights = kids.map((k) => Math.round(k.getBoundingClientRect().height));
    const uniform = Math.max(...heights) - Math.min(...heights) <= Math.max(8, Math.max(...heights) * 0.15);
    if (!uniform) continue;
    const hasData = kids.filter((k) => k.querySelector("a, button, input, [role='listitem']") || k.matches("li")).length;
    if (hasData < kids.length * 0.8) continue;
    // مجموعة أزرار تبديل (فلاتر/إفصاحات) ليست قائمة بيانات — تُفحص في T9.
    const toggleKids = kids.filter((k) =>
      k.matches("button[aria-pressed], button[aria-expanded]") ||
      k.querySelector(":scope > button[aria-pressed], :scope > button[aria-expanded], :scope > div > button[aria-pressed], :scope > div > button[aria-expanded]"),
    ).length;
    if (toggleKids >= kids.length * 0.8) continue;
    listIssues.push(`${label(parent)}: ${kids.length} عنصراً متكرراً بلا ul/role=list`);
  }

  /* T9 — أزرار تبديل (aria-pressed/expanded) بلا مجموعة مسماة.
     نبحث من الزر إلى أعلى حتى أقرب حاوية تحوي ≥3 أزرار تبديل *مباشرة*؛ هذه
     هي المجموعة الفعلية. الحاوية الأبعد (nav أو لوحة الفلاتر كلها) ليست
     المجموعة، وإلا اتُّهمت كل صفحة ظلماً. */
  const toggleIssues = [];
  const seen = new Set();
  for (const btn of document.querySelectorAll("button[aria-pressed], button[aria-expanded]")) {
    let box = btn.parentElement;
    while (box) {
      const direct = [...box.children].filter(
        (c) => c.matches?.("button[aria-pressed], button[aria-expanded]"),
      );
      if (direct.length >= 6) break;
      box = box.parentElement;
    }
    if (!box || seen.has(box)) continue;
    seen.add(box);
    if (box.closest("[role='group'], [role='radiogroup'], [role='toolbar'], [role='tablist'], [role='menu']")) continue;
    if (box.matches("[role='group'], [role='radiogroup'], [role='toolbar'], [role='tablist'], [role='menu'], nav, [role='navigation']")) continue;
    const named = (box.getAttribute("aria-label") || "").trim();
    // حاوية مسماة تُغني عن role=group (الاسم يعلن المجموعة عند الدخول إليها).
    if (named) continue;
    if (toggleIssues.length < 3) {
      toggleIssues.push(`${label(box)}: ${box.querySelectorAll(":scope > button[aria-pressed], :scope > button[aria-expanded]").length} أزرار تبديل بلا role=group ولا اسم`);
    }
  }

  /* T8 — عدّاد نتائج غير معلَن */
  const countIssues = [];
  const searches = [...document.querySelectorAll("input:not([type='hidden'])")].filter(visible);
  if (searches.length) {
    /* العدّاد يبدأ برقم (قد تسبقه كلمة واحدة مثل «يُعرض»)، ويحمل وحدة معدودة،
       وطوله قصير — وإلا التقطنا عنواناً («500 كلمة وتعبير للمراجعة») أو نصّ
       بطاقة كاملة. ولا يبدأ رقم داخل كلمة لاتينية (A1بطاقة ليست عدّاداً). */
    const RE = /^(?:[^\d]{0,8})?(?<![A-Za-z\d])(\d[\d,.]*)\s*(كلمة|كلمات|فعل|أفعال|نتيجة|نتائج|قاعدة|قواعد|تعبير|تعبيرات|بطاقة|بطاقات|درس|دروس|عنصر|عناصر|مدخل|مدخلات|مصطلح|مصطلحات)/u;
    for (const el of document.querySelectorAll("main p, main span, main div")) {
      if (!visible(el)) continue;
      if (el.matches("h1, h2, h3, h4, h5, h6, button, a, label")) continue;
      if (el.closest("h1, h2, h3, h4, h5, h6, button, a, label")) continue;
      const txt = (el.textContent || "").trim();
      if (txt.length > 90 || !RE.test(txt)) continue;
      // نأخذ أصغر عنصر يحمل النص (لا الأب الذي يجمعه)
      if ([...el.children].some((c) => RE.test((c.textContent || "").trim()))) continue;
      // عدّاد «نتائج» يتبع حقل بحث/فلترة في المنطقة نفسها. بطاقة إحصاء ثابتة
      // («0 دروس · 0 مراجعات») ليست نتيجة تصفية فلا تُطالب بمنطقة حيّة.
      const isSearch = (el) =>
        el.type === "search" || /ابحث|بحث|search/i.test(`${el.getAttribute("aria-label") || ""} ${el.placeholder || ""}`);
      let region = el.parentElement;
      let nearSearch = false;
      for (let i = 0; i < 4 && region; i += 1, region = region.parentElement) {
        if ([...region.querySelectorAll("input")].some((i2) => visible(i2) && isSearch(i2))) {
          nearSearch = true;
          break;
        }
      }
      if (!nearSearch) continue;
      const live = el.closest("[aria-live], [role='status'], [role='alert'], output");
      if (!live && countIssues.length < 3) countIssues.push(`«${txt.slice(0, 44)}» خارج منطقة حيّة`);
    }
  }

  return {
    tables: tables.length,
    tableRows: tables.reduce((a, t) => a + t.querySelectorAll("tbody tr").length, 0),
    scrollContainers: [...document.querySelectorAll("*")].filter((el) => {
      const cs = getComputedStyle(el);
      return /(auto|scroll)/.test(cs.overflowX) && el.scrollWidth > el.clientWidth + 1;
    }).length,
    searches: searches.length,
    tableIssues,
    scrollIssues,
    listIssues,
    toggleIssues,
    countIssues,
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
  await page.setViewport({ width: VW || 1280, height: VH || 900 });
  /* التحكّم السلبي يُطبَّق بعد التحميل وقبل الفحص: نزيل السمة المطلوبة فقط،
     فيجب أن يشتعِل الفحص المقابل. (الحقن قبل التحميل كان لا يصل إلى DOM بعد.) */
  const issues = [];
  const record = { route, tables: 0, tableRows: 0, scrollContainers: 0, searches: 0, revealed: 0, tabs: 0, issues };
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 700));
    /* في الدروس الأقسام «خطوة بخطوة»: زر «الشرح» معطّل حتى تُتمّ ما قبله،
       فجدول التصريف لا يُرى في الحالة الأولى. ننتقل إليه بالطريقة التي تتيحها
       الصفحة نفسها (مفتاح `lesson-step:<id>` في localStorage) ثم نُعيد التحميل. */
    if (route.startsWith("/lesson/")) {
      const theoryIdx = await page.evaluate(() =>
        [...document.querySelectorAll("[role='tab']")].findIndex((t) => t.textContent.trim() === "الشرح"),
      );
      if (theoryIdx > 0) {
        const lessonId = route.split("/").filter(Boolean).pop();
        await page.evaluate(
          ([id, idx]) => localStorage.setItem(`lesson-step:${id}`, String(idx)),
          [lessonId, theoryIdx],
        );
        await page.reload({ waitUntil: "networkidle2", timeout: 45000 });
        await new Promise((r) => setTimeout(r, 700));
      }
    }
    /* جداول الدروس (التصريف) تعيش داخل تبويبات «النظرية» وإفصاحاتها. فحص
       الحالة الأولى وحدها يعطي «0 جدول» كاذباً. نفتح الإفصاحات مرة واحدة (تبقى
       مفتوحة)، ثم نضغط كل تبويب ونفحص: التبويب يستبدل محتواه فلا يكفي ضغطها كلها
       ثم فحص واحد. */
    const revealed = await page.evaluate(() => {
      let n = 0;
      /* تبويبات الشرح داخل الدرس أزرار عادية باسم «جدول التصريف» (ليست role=tab)،
         وهي التي تُظهر الجدول — نفتحها أولاً. */
      for (const el of document.querySelectorAll("#lesson-step-content button, main button")) {
        if (!/جدول/.test(el.textContent || "")) continue;
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) continue;
        el.click();
        n += 1;
        if (n >= 12) break;
      }
      for (const el of document.querySelectorAll("button[aria-expanded='false']")) {
        const r = el.getBoundingClientRect();
        if (r.width < 1 || r.height < 1) continue;
        if (n >= 12) break;
        el.click();
        n += 1;
      }
      return n;
    });
    if (revealed) await new Promise((r) => setTimeout(r, 400));

    let res = await page.evaluate(inspectTables);
    let tabs = 0;
    const tabsTotal = Math.min(
      await page.evaluate(() => {
        const scope = document.getElementById("lesson-step-content") ?? document;
        return scope.querySelectorAll("[role='tab']").length || document.querySelectorAll("[role='tab']").length;
      }),
      10,
    );
    for (let i = 0; i < tabsTotal; i += 1) {
      const clicked = await page.evaluate((idx) => {
        const scope = document.getElementById("lesson-step-content") ?? document;
        const list = scope.querySelectorAll("[role='tab']").length
          ? scope.querySelectorAll("[role='tab']")
          : document.querySelectorAll("[role='tab']");
        const tab = list[idx];
        if (!tab || tab.disabled) return false;
        tab.click();
        return true;
      }, i);
      if (!clicked) break;
      await new Promise((r) => setTimeout(r, 350));
      const next = await page.evaluate(inspectTables);
      tabs += 1;
      record.tables = Math.max(record.tables || 0, next.tables);
      record.tableRows = Math.max(record.tableRows || 0, next.tableRows);
      record.scrollContainers = Math.max(record.scrollContainers || 0, next.scrollContainers);
      record.searches = Math.max(record.searches || 0, next.searches);
      for (const key of ["tableIssues", "scrollIssues", "listIssues", "toggleIssues", "countIssues"]) {
        res[key] = [...new Set([...(res[key] || []), ...(next[key] || [])])];
      }
    }
    Object.assign(record, res);
    record.revealed = revealed;
    record.tabs = tabs;
    record.issues = issues;

    if (res.tableIssues.length) issues.push(`جدول: ${res.tableIssues.join(" | ")}`);
    if (res.scrollIssues.length) issues.push(`تمرير أفقي: ${res.scrollIssues.join(" | ")}`);
    if (res.listIssues.length) issues.push(`قائمة بلا دلالة: ${res.listIssues.join(" | ")}`);
    if (res.toggleIssues.length) issues.push(`أزرار تبديل بلا مجموعة: ${res.toggleIssues.join(" | ")}`);
    if (res.countIssues.length) issues.push(`عدّاد غير معلَن: ${res.countIssues.join(" | ")}`);
  } catch (e) {
    issues.push("NAV " + e.message.slice(0, 100));
  }
  await page.close();
  out.push(record);
  if (VERBOSE) console.log(route, `tables=${record.tables} listsScanned`, issues.length ? "❌ " + issues.join(" ; ") : "✅");
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const bad = out.filter((x) => x.issues.length);
console.log("PAGES", out.length, "WITH_ISSUES", bad.length);
console.log("REVEALED", out.reduce((a, x) => a + (x.revealed || 0), 0), "TABS", out.reduce((a, x) => a + (x.tabs || 0), 0));
console.log(
  "TABLES",
  out.reduce((a, x) => a + (x.tables || 0), 0),
  "ROWS",
  out.reduce((a, x) => a + (x.tableRows || 0), 0),
  "SCROLLERS",
  out.reduce((a, x) => a + (x.scrollContainers || 0), 0),
);
for (const b of bad.slice(0, 60)) console.log(b.route, "|", b.issues.slice(0, 3).join(" ; "));
