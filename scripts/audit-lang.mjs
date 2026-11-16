/**
 * audit-lang.mjs — الجولة العاشرة: اللغة والاتجاه (WCAG 3.1.1 · 3.1.2 · 1.3.2).
 *
 * تطبيق عربي (RTL) يعلّم الألمانية: قارئ الشاشة ينطق كل نص بالألمانية بالصوت
 * العربي إن لم يكن النص داخل `lang="de"`، فيصير «schreiben» صوتاً عربياً لا
 * كلمة ألمانية. والعكس: نص عربي داخل `lang="de"` يُنطق بالألمانية فيُفسد.
 *
 * الفحوص (تُنفَّذ على نص كل صفحة بعد فتح الإفصاحات):
 *  L1) نص ألماني ظاهر خارج أي `[lang="de"]` — الكشف يعتمد على إشارة لغوية
 *      ألمانية (حرف umlaut أو كلمة وظيفية ألمانية) لا على مجرّد الحروف اللاتينية،
 *      حتى لا يُتّهم «DeutschPfad» أو «A1» أو «Podcast».
 *  L2) نص عربي داخل `[lang="de"]` — يفسد النطق بالعكس.
 *  L3) رمز لغة غير صالح في أي `[lang]` (مثل `lang="german"`).
 *  L4) قيمة `dir` غير صالحة (غير ltr/rtl/auto).
 *  L5) جذر المستند: `lang` صالح و`dir="rtl"` للعربية.
 *  L6) نص عربي داخل `[dir="ltr"]` — اتجاه خاطئ يقلب الجملة والعناوين.
 *
 * مقياس لا حكم: `MIXED_NODES` — عقد نصية فيها عربي وألماني معاً (مثل
 * «النفي: nicht و kein»). وسمها كاملةً بألمانية خطأ، وتجزئتها تحتاج ترميزاً
 * على مستوى المحتوى؛ تُقاس وتُوثَّق ولا تُحتسب مخالفة.
 *
 * مقياس لا حكم: عدد النصوص الألمانية التي لا يحيطها `dir="ltr"` (عرض bidi:
 * قد تظهر النقطة في غير موضعها داخل جملة عربية) — يُطبع في الملخّص ولا يُحتسب
 * مخالفة، لأن WCAG لا تُلزم بـ`dir` ما دام الترتيب المنطقي سليماً.
 *
 * الاستخدام: node scripts/audit-lang.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_FAULT
 *  AUDIT_FAULT=lang   يزيل `lang="de"` من الصفحة (لـL1)
 *  AUDIT_FAULT=mixed  يضع `lang="de"` على حاوية فيها نص عربي (لـL2)
 *  AUDIT_FAULT=code   يجعل الجذر `lang="german"` (لـL3/L5)
 *  AUDIT_FAULT=dir    يجعل الجذر `dir="sideways"` (لـL4)
 *  AUDIT_FAULT=bidi   يجعل حاوية عربية `dir="ltr"` (لـL6)
 */
import fs from "node:fs";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/lang.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";

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
function inspectLang() {
  const GERMAN_WORDS =
    /\b(der|die|das|und|ist|nicht|ich|du|wir|mit|für|auf|ein|eine|einen|zu|den|dem|des|sich|werden|wird|hat|haben|oder|auch|aber|von|im|am|zum|zur|bei|nach|über|kann|muss|soll|wie|wenn|dass|sie|er|es|ihr|mein|dein|noch|schon|nur|sehr|mehr|gibt|guten|tag|bitte|danke|sprechen|deutsch|üben|übung|wort|satz|heißen|kommen|wohnen|arbeiten|lernen|gehen|machen|sagen|fragen|antworten|wörter|buchstabe|lesen|hören|schreiben|sprechen)\b/i;

  const visible = (el) => {
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") return false;
    return el.getClientRects().length > 0;
  };

  const languages = new Set(
    ("ar de en fr es it pt ru tr nl pl sv da no fi cs sk hu ro bg el he fa hi ja ko zh " +
      "la yi ku ur id vi th uk sr hr sl lt lv et is ga cy mt eu ca gl af sw am ne bn ta te ml kn gu pa or si km lo my")
      .split(" "),
  );

  const label = (el) =>
    `${el.tagName.toLowerCase()}${(el.getAttribute("class") || "").trim() ? "." + (el.getAttribute("class") || "").trim().split(/\s+/)[0] : ""}`;

  const walk = document.createTreeWalker(document.querySelector("main") || document.body, NodeFilter.SHOW_TEXT);

  const german = []; // L1
  const arabicInGerman = []; // L2
  const arabicInLtr = []; // L6
  let germanNoDir = 0; // مقياس
  let germanNodes = 0;
  let mixedNodes = 0; // مقياس: عربي + ألماني في العقدة نفسها

  let node;
  while ((node = walk.nextNode())) {
    const el = node.parentElement;
    if (!el) continue;
    if (el.closest("script,style,noscript,template,svg,code,pre,[aria-hidden='true']")) continue;
    if (!visible(el)) continue;

    const raw = (node.nodeValue || "").replace(/\s+/g, " ").trim();
    if (raw.length < 2) continue;

    const latin = (raw.match(/[A-Za-zÄÖÜäöüß]/g) || []).length;
    const arabic = (raw.match(/[\u0600-\u06FF]/g) || []).length;

    /* سلسلة lang الأقرب */
    let langEl = el.closest("[lang]");
    const declared = langEl ? (langEl.getAttribute("lang") || "").toLowerCase() : "";

    /* L2 — عربي داخل lang=de */
    if (arabic >= 2 && declared === "de" && arabicInGerman.length < 6) {
      arabicInGerman.push(`«${raw.slice(0, 40)}» داخل ${label(langEl)}[lang=de]`);
    }

    /* L6 — عربي داخل dir=ltr */
    if (arabic >= 4 && arabic / (arabic + latin || 1) >= 0.6) {
      const dirEl = el.closest("[dir]");
      const dir = dirEl ? (dirEl.getAttribute("dir") || "").toLowerCase() : "";
      if (dir === "ltr" && arabicInLtr.length < 6) {
        arabicInLtr.push(`«${raw.slice(0, 40)}» داخل ${label(dirEl)}[dir=ltr]`);
      }
    }

    /* L1 — مقطع ألماني قائم بذاته بلا lang=de.
       «قائم بذاته» = لا حرف عربي فيه؛ فالعبارة العربية التي تتخللها كلمة ألمانية
       («النفي: nicht و kein») ليست مقطعاً ألمانياً يُوسم كاملاً، وتُقاس منفصلة
       في `mixed` بلا حكم. */
    if (latin < 2) continue;
    if (arabic > 0) {
      if (arabic >= 2 && latin >= 2 && (/[äöüßÄÖÜ]/.test(raw) || GERMAN_WORDS.test(raw))) {
        mixedNodes += 1;
      }
      continue;
    }
    if (latin / (latin + arabic || 1) < 0.8) continue;
    const looksGerman = /[äöüßÄÖÜ]/.test(raw) || GERMAN_WORDS.test(raw);
    if (!looksGerman) continue;

    germanNodes += 1;
    const dirOf = el.closest("[dir]");
    if (!dirOf || (dirOf.getAttribute("dir") || "").toLowerCase() !== "ltr") germanNoDir += 1;

    if (declared === "de") continue;
    if (german.length < 6) {
      german.push(`«${raw.slice(0, 46)}» — ${label(el)}${declared ? `[lang=${declared}]` : ""}`);
    }
  }

  /* L3 — رموز لغة غير صالحة */
  const invalidLang = [];
  for (const el of document.querySelectorAll("[lang]")) {
    const v = (el.getAttribute("lang") || "").trim();
    const primary = v.toLowerCase().split("-")[0];
    const ok = /^[a-z]{2,3}(-[A-Za-z0-9]{1,8})*$/i.test(v) && languages.has(primary);
    if (!ok && invalidLang.length < 6) invalidLang.push(`${label(el)}: lang="${v}"`);
    if (!ok && invalidLang.length >= 6) break;
  }

  /* L4 — قيم dir غير صالحة */
  const invalidDir = [];
  for (const el of document.querySelectorAll("[dir]")) {
    const v = (el.getAttribute("dir") || "").toLowerCase();
    if (!["ltr", "rtl", "auto"].includes(v) && invalidDir.length < 6) {
      invalidDir.push(`${label(el)}: dir="${el.getAttribute("dir")}"`);
    }
  }

  /* L5 — جذر المستند */
  const htmlIssues = [];
  const html = document.documentElement;
  const htmlLang = (html.getAttribute("lang") || "").trim();
  if (!htmlLang) htmlIssues.push("<html> بلا lang");
  else if (!languages.has(htmlLang.toLowerCase().split("-")[0])) {
    htmlIssues.push(`<html lang="${htmlLang}"> غير صالح`);
  }
  const rootDir = (html.getAttribute("dir") || document.body.getAttribute("dir") || "").toLowerCase();
  const pageIsArabic = (document.querySelector("main")?.textContent || "").match(/[\u0600-\u06FF]/g)?.length > 50;
  if (pageIsArabic && rootDir !== "rtl") htmlIssues.push(`اتجاه الجذر «${rootDir || "غائب"}» لصفحة عربية`);

  return {
    germanOutside: german,
    arabicInGerman,
    arabicInLtr,
    invalidLang,
    invalidDir,
    htmlIssues,
    germanNodes,
    germanNoDir,
    mixedNodes,
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
  await page.setViewport({width: 1280, height: 900});
  const record = {route, issues: []};
  try {
    await page.goto(BASE + route, {waitUntil: "networkidle2", timeout: 45000});
    await new Promise((r) => setTimeout(r, 450));

    /* نفتح الإفصاحات كي يُفحص نصها المخفي أيضاً */
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
    await new Promise((r) => setTimeout(r, 300));

    if (FAULT === "lang") {
      await page.evaluate(() => document.querySelectorAll("[lang='de']").forEach((el) => el.removeAttribute("lang")));
    }
    if (FAULT === "mixed") {
      await page.evaluate(() => {
        const p = [...document.querySelectorAll("main p, main div")].find(
          (el) => (el.textContent || "").match(/[\u0600-\u06FF]/g)?.length > 20 && !el.querySelector("[lang]"),
        );
        p?.setAttribute("lang", "de");
      });
    }
    if (FAULT === "code") {
      await page.evaluate(() => document.documentElement.setAttribute("lang", "german"));
    }
    if (FAULT === "dir") {
      await page.evaluate(() => document.documentElement.setAttribute("dir", "sideways"));
    }
    if (FAULT === "bidi") {
      await page.evaluate(() => {
        const p = [...document.querySelectorAll("main p, main div")].find(
          (el) => (el.textContent || "").match(/[\u0600-\u06FF]/g)?.length > 20 && !el.querySelector("[dir]"),
        );
        p?.setAttribute("dir", "ltr");
      });
    }

    const res = await page.evaluate(inspectLang);
    Object.assign(record, res);

    if (res.germanOutside.length) record.issues.push(`ألماني بلا lang: ${res.germanOutside.join(" | ")}`);
    if (res.arabicInGerman.length) record.issues.push(`عربي داخل lang=de: ${res.arabicInGerman.join(" | ")}`);
    if (res.arabicInLtr.length) record.issues.push(`عربي داخل dir=ltr: ${res.arabicInLtr.join(" | ")}`);
    if (res.invalidLang.length) record.issues.push(`lang غير صالح: ${res.invalidLang.join(" | ")}`);
    if (res.invalidDir.length) record.issues.push(`dir غير صالح: ${res.invalidDir.join(" | ")}`);
    if (res.htmlIssues.length) record.issues.push(`جذر: ${res.htmlIssues.join(" | ")}`);
  } catch (err) {
    record.issues.push(`تعذّر الفحص: ${err.message}`);
  } finally {
    await page.close();
  }

  out.push(record);
  const mark = record.issues.length ? "❌" : "✅";
  if (VERBOSE || record.issues.length) {
    console.log(`${route} ${mark}${record.issues.length ? " " + record.issues.join(" ; ") : ""}`);
  }
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const withIssues = out.filter((r) => r.issues.length);
const total = (k) => out.reduce((a, r) => a + (r[k] || 0), 0);

console.log(`PAGES ${out.length} WITH_ISSUES ${withIssues.length}`);
console.log(
  `GERMAN_NODES ${total("germanNodes")} UNMARKED_DIR ${total("germanNoDir")} MIXED_NODES ${total("mixedNodes")} INVALID_LANG ${out.filter((r) => r.invalidLang?.length).length}`,
);
if (withIssues.length) {
  for (const r of withIssues.slice(0, 12)) console.log(`${r.route} | ${r.issues.join(" ; ")}`);
}
