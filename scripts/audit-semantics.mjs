/**
 * audit-semantics.mjs — الجولة السادسة عشرة: اللون وحده، والاتساق، وترتيب القراءة
 * (1.4.1 · 3.2.4 · 1.3.2 · 2.4.3)
 *
 * الجولات 2–15 قاست التباين (نصاً وغير نص)، التخطيط، التكبير، الحالات المفتوحة،
 * النماذج، الجداول، الوسائط، اللغة، الزمن، الدلالة البنيوية، التركيز، العنوان،
 * الاسم المرئي، والوميض. بقيت ثلاثة بنود AA لا يقيسها أي سكربت:
 *
 *   S1) **اللون وحده للروابط داخل النص** (1.4.1): رابط داخل فقرة بلا خطّ سفلي
 *       أو أي إشارة غير لونية يجب أن يختلف لونه عن لون النص المحيط بـ≥3:1
 *       (G183)، وإلا صار الرابط غير قابل للتمييز لعمى الألوان.
 *   S2) **الحقول الإلزامية**: لكل حقل `required` إشارة مرئية (نص أو رمز)
 *       في تسميته — لا يُترك للمستخدم اكتشافه من رسالة الخطأ (3.3.2 · 1.4.1).
 *   S3) **حالة العنصر النشِط** (`aria-current`/`aria-selected`/`aria-pressed`):
 *       تُفرَّق عن غيرها بإشارة غير لونية (سماكة، خطّ، حدّ، أيقونة) — لا باللون
 *       وحده (1.4.1).
 *   S4) **الاتساق في التحديد** (3.2.4): الرابط نفسه في ترويسة/تذييل الموقع
 *       له الاسم نفسه في كل صفحة.
 *   S5) **آليات إعادة الترتيب**: `order` و`flex-direction: *-reverse`
 *       و`grid-auto-flow: dense` و`tabindex` موجب — كلها تغيّر ترتيب القراءة
 *       أو التركيز عن ترتيب DOM (1.3.2 · 2.4.3).
 *   S6) **العناوين بترتيب القراءة**: تسلسل `h1..h6` في DOM يطابق ترتيبها
 *       المرئي من أعلى الصفحة (1.3.2).
 *
 * الاستخدام: node scripts/audit-semantics.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_VIEWPORT
 *          AUDIT_THEME=light|dark
 *          AUDIT_FAULT=linkcolor|required|state|consist|reorder|headingorder|sensory
 */
import fs from "node:fs";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/semantics.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";
const THEME = process.env.AUDIT_THEME || "light";
const [VW, VH] = (process.env.AUDIT_VIEWPORT || "1280x900").split("x").map(Number);

const EXTRA_ROUTES = [
  "/",
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
];

async function loadRoutes() {
  if (process.env.AUDIT_ROUTES) {
    return process.env.AUDIT_ROUTES.split(",").map((r) => r.trim()).filter(Boolean);
  }
  const xml = await (await fetch(BASE + "/sitemap.xml")).text();
  const fromMap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname || "/");
  return [...new Set([...fromMap, ...EXTRA_ROUTES])].sort();
}

/** يُنفَّذ داخل الصفحة: S1–S3 + S5 + S6 */
function measureSemantics() {
  const parse = (c) => {
    const m = String(c).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const [r, g, b, a] = m[1].split(",").map(Number);
    return {r, g, b, a: a === undefined ? 1 : a};
  };
  const lum = (c) => {
    const f = (v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
  };
  const contrast = (a, b) => {
    const L1 = lum(a);
    const L2 = lum(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  };
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return false;
    const cs = getComputedStyle(el);
    return cs.visibility !== "hidden" && cs.display !== "none" && Number(cs.opacity) > 0.05;
  };
  const textOf = (el) => (el.textContent || "").replace(/\s+/g, " ").trim();
  const nameOf = (el) => {
    const aria = el.getAttribute("aria-label");
    if (aria && aria.trim()) return aria.trim();
    const by = el.getAttribute("aria-labelledby");
    if (by)
      return by
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    return textOf(el);
  };

  /* ═══ S1 — روابط داخل النص: إشارة غير لونية أو تباين ≥3:1 مع النص المحيط ═══ */
  const linkColorOnly = [];
  let inlineLinks = 0;
  let totalLinks = 0;
  let surrounded = 0;
  for (const a of document.querySelectorAll("main a[href], footer a[href], header a[href]")) {
    if (!visible(a)) continue;
    totalLinks += 1;
    const cs = getComputedStyle(a);
    /* الرابط «داخل نص» لا «بطاقة/زر»: لا خلفية له ولا حدّ، ويحيط به نص.
       الشكل (inline أو inline-flex) ليس الفيصل — الفيصل أن ما يراه المستخدم
       بجانبه نصٌّ متصل، فحينئذٍ لا يفصله عن النص إلا لونه أو خطّه. */
    const bg = parse(cs.backgroundColor);
    const hasBackground = bg && bg.a > 0.05;
    const hasBorder = (parseFloat(cs.borderTopWidth) || 0) > 0 && cs.borderTopStyle !== "none";
    if (hasBackground || hasBorder) continue;
    const parent = a.parentElement;
    if (!parent) continue;
    /* «داخل نص»: نصٌّ قبل الرابط ونصٌّ بعده في العنصر نفسه. هذا ما يجعل
       اللون وحده غير كافٍ؛ أما رابط في عمود/قائمة/تذييل فلا نص يحيط به. */
    const nodes = [...parent.childNodes];
    const at = nodes.findIndex((n) => n === a || (n.nodeType === Node.ELEMENT_NODE && n.contains(a)));
    const textOfNodes = (list) =>
      list
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent || "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
    const before = at > 0 ? textOfNodes(nodes.slice(0, at)) : "";
    const after = at >= 0 ? textOfNodes(nodes.slice(at + 1)) : "";
    if (before.length < 8 || after.length < 8) continue;
    surrounded += 1;
    inlineLinks += 1;
    const hasCue =
      (cs.textDecorationLine && cs.textDecorationLine !== "none") ||
      (parseFloat(cs.borderBottomWidth) || 0) > 0 ||
      (cs.backgroundImage && cs.backgroundImage !== "none") ||
      /underline|line-through/.test(cs.textDecoration || "") ||
      a.querySelector("svg,img") !== null;
    if (hasCue) continue;
    const link = parse(cs.color);
    const around = parse(getComputedStyle(parent).color);
    if (!link || !around) continue;
    const ratio = contrast(link, around);
    if (ratio < 3) {
      linkColorOnly.push({
        text: textOf(a).slice(0, 32),
        ratio: Number(ratio.toFixed(2)),
        color: cs.color,
        around: getComputedStyle(parent).color,
      });
    }
  }

  /* ═══ S2 — إشارة مرئية على الحقل الإلزامي ═══ */
  const requiredUnmarked = [];
  let requiredFields = 0;
  /* علامة الإلزام: نجمة، أو كلمة «مطلوب/إلزامي» بين قوسين. الكلمة وحدها لا
     تكفي لأنها قد تكون جزءاً من اسم الحقل («المنصب المطلوب»). */
  const MARK = /(\*|\(مطلوب\)|\(إلزامي\)|required|Pflicht)/i;
  for (const el of document.querySelectorAll("input,select,textarea")) {
    const req = el.required || el.getAttribute("aria-required") === "true";
    if (!req) continue;
    if (!visible(el)) continue;
    requiredFields += 1;
    let label = "";
    if (el.id) {
      const l = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
      if (l) label += " " + textOf(l);
    }
    const wrapping = el.closest("label");
    if (wrapping) label += " " + textOf(wrapping);
    const by = el.getAttribute("aria-labelledby");
    if (by)
      label +=
        " " +
        by
          .split(/\s+/)
          .map((id) => document.getElementById(id)?.textContent || "")
          .join(" ");
    if (!label.trim()) label = el.getAttribute("aria-label") || "";
    /* الوصف المرئي الملاصق (نص شقيق) قد يحمل العلامة */
    const near = el.parentElement ? textOf(el.parentElement).slice(0, 120) : "";
    if (MARK.test(label) || MARK.test(near)) continue;
    requiredUnmarked.push({
      name: (label || el.getAttribute("name") || el.tagName).slice(0, 32),
      tag: el.tagName.toLowerCase(),
    });
  }

  /* ═══ S2ب — العكس: علامة «مطلوب» مرئية بلا حقل إلزامي مبرمَج ═══ */
  const markedNotRequired = [];
  let markedLabels = 0;
  for (const label of document.querySelectorAll("label")) {
    if (!visible(label)) continue;
    const txt = textOf(label);
    if (!/(\*|\(مطلوب\)|\(إلزامي\))/.test(txt)) continue;
    let field = null;
    const forId = label.getAttribute("for");
    if (forId) field = document.getElementById(forId);
    if (!field) field = label.querySelector("input,select,textarea");
    if (!field) continue;
    markedLabels += 1;
    if (field.required || field.getAttribute("aria-required") === "true") continue;
    markedNotRequired.push({label: txt.slice(0, 32), tag: field.tagName.toLowerCase()});
  }

  /* ═══ S3 — الحالة النشِطة: إشارة غير لونية ═══ */
  const stateColorOnly = [];
  let stateItems = 0;
  const cue = (el) => {
    const cs = getComputedStyle(el);
    return {
      weight: cs.fontWeight,
      deco: cs.textDecorationLine,
      border: cs.borderBottomWidth,
      shadow: cs.boxShadow,
      icon: el.querySelector("svg,img") !== null,
      /* مؤشّر مرئي يظهر في الحالة النشِطة فقط (نقطة/شريط تحت التبويب) */
      children: el.children.length,
    };
  };
  const bgOf = (el) => {
    let n = el;
    for (let d = 0; n && d < 3; d += 1) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0.05) return c;
      n = n.parentElement;
    }
    return {r: 255, g: 255, b: 255, a: 1};
  };
  /* إشارة غير لونية، أو فرق سطوع ≥3:1 بين حالتَي العنصر — تغيّر الصبغة وحده
     (نفس السطوع) هو ما يمنعه 1.4.1 لأن عمى الألوان لا يراه. */
  const differs = (a, b, ea, eb) =>
    a.weight !== b.weight ||
    a.deco !== b.deco ||
    a.border !== b.border ||
    a.shadow !== b.shadow ||
    a.icon !== b.icon ||
    a.children !== b.children ||
    contrast(bgOf(ea), bgOf(eb)) >= 3;
  for (const el of document.querySelectorAll(
    '[aria-current="page"],[aria-current="step"],[aria-selected="true"],[aria-pressed="true"]',
  )) {
    if (!visible(el)) continue;
    /* أزرار الضغط (aria-pressed) لها حالة بصرية من الزر نفسه؛ تُقاس فقط
       العناصر التي تتنكّر كروابط/تبويبات داخل مجموعة */
    const role = el.getAttribute("role") || "";
    if (role === "radio" || role === "checkbox") continue;
    const group = el.closest("nav,ul,ol,[role=tablist],[role=group]");
    if (!group) continue;
    const peer = [...group.querySelectorAll(el.tagName.toLowerCase())].find(
      (p) => p !== el && visible(p) && !p.hasAttribute("aria-current") && p.getAttribute("aria-selected") !== "true",
    );
    if (!peer) continue;
    stateItems += 1;
    if (differs(cue(el), cue(peer), el, peer)) continue;
    stateColorOnly.push({name: nameOf(el).slice(0, 32), why: "الحالة تُفرَّق باللون وحده"});
  }

  /* ═══ S7 — خصائص حسّية في التعليمات (1.3.3) ═══
     «اضغط الزر الأحمر» أو «على اليمين» لا يفهمه من لا يرى اللون أو الموضع.
     يُفحص النص الظاهر في المحتوى، ويُشترط اقتران الإشارة الحسّية بفعل
     (اضغط/اختر/حدد/كليك) خلال 40 حرفاً حتى لا تُحتسب أوصاف التخطيط. */
  const sensory = [];
  let textBlocks = 0;
  const SENSORY =
    /(?:اضغط|انقر|اختر|حدّد|حدد|كليك|klick|dr(ü|u)ck|w(ä|a)hl|أدخل على)[^.\n]{0,40}?(?:الزر\s+(?:الأحمر|الأخضر|الأزرق|الأصفر|الدائري|المربع)|على اليمين|على اليسار|في الأعلى|في الأسفل|den\s+(?:roten|gr(ü|u)nen|blauen)\s+(?:Knopf|Button)|rechts|links)/i;
  for (const el of document.querySelectorAll("main p, main li, main dd, main figcaption, main span")) {
    if (!visible(el)) continue;
    if (el.closest("a,button")) continue;
    const direct = [...el.childNodes]
      .filter((n) => n.nodeType === Node.TEXT_NODE)
      .map((n) => n.textContent || "")
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();
    if (direct.length < 20) continue;
    textBlocks += 1;
    const m = direct.match(SENSORY);
    if (m) sensory.push({text: m[0].slice(0, 48)});
  }

  /* ═══ S5 — آليات إعادة الترتيب ═══ */
  const reordered = [];
  for (const el of document.querySelectorAll("main *, header *, footer *")) {
    if (!visible(el)) continue;
    const cs = getComputedStyle(el);
    const self = el;
    if (cs.order && cs.order !== "0" && cs.order !== "normal") {
      reordered.push({why: `order:${cs.order}`, tag: self.tagName.toLowerCase(), text: textOf(el).slice(0, 24)});
    } else if (/reverse/.test(cs.flexDirection)) {
      reordered.push({why: `flex-direction:${cs.flexDirection}`, tag: self.tagName.toLowerCase(), text: textOf(el).slice(0, 24)});
    } else if (/dense/.test(cs.gridAutoFlow)) {
      reordered.push({why: `grid-auto-flow:${cs.gridAutoFlow}`, tag: self.tagName.toLowerCase(), text: textOf(el).slice(0, 24)});
    }
    const ti = el.getAttribute("tabindex");
    if (ti !== null && Number(ti) > 0) {
      reordered.push({why: `tabindex=${ti}`, tag: self.tagName.toLowerCase(), text: textOf(el).slice(0, 24)});
    }
    if (reordered.length > 30) break;
  }

  /* ═══ S6 — تسلسل العناوين: DOM مقابل الترتيب المرئي ═══ */
  const heads = [...document.querySelectorAll("main h1,main h2,main h3,main h4,main h5,main h6")]
    .filter(visible)
    .map((el, i) => {
      const r = el.getBoundingClientRect();
      return {i, level: Number(el.tagName[1]), top: Math.round(r.top + window.scrollY), left: Math.round(r.left), text: textOf(el).slice(0, 24)};
    });
  /* عكس ترتيب القراءة: عنوان لاحق في DOM يقع أعلى من عنوان سابق بأكثر من
     24px. الفارق الصغير داخل السطر نفسه لا يُحتسب، ولا تُقارن الأعمدة المتجاورة
     إلا إذا كان أحدها أعلى فعلاً. */
  const inversions = [];
  for (let i = 0; i < heads.length; i += 1) {
    for (let j = i + 1; j < heads.length; j += 1) {
      if (heads[j].top < heads[i].top - 24) {
        inversions.push({text: heads[j].text, before: heads[i].text, delta: heads[i].top - heads[j].top});
        break;
      }
    }
    if (inversions.length >= 5) break;
  }

  return {
    totalLinks,
    surrounded,
    inlineLinks,
    linkColorOnly,
    requiredFields,
    requiredUnmarked,
    markedLabels,
    markedNotRequired,
    stateItems,
    stateColorOnly,
    reordered,
    textBlocks,
    sensory,
    headings: heads.length,
    inversions: inversions.slice(0, 5),
    headingCount: heads.length,
  };
}

/** S4 — أسماء الروابط نفسها في ترويسة/تذييل الموقع */
function chromeLinks() {
  const out = [];
  for (const scope of [document.querySelector("header"), document.querySelector("footer")]) {
    if (!scope) continue;
    for (const a of scope.querySelectorAll("a[href]")) {
      const r = a.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) continue;
      const name =
        (a.getAttribute("aria-label") || "").trim() ||
        (a.textContent || "").replace(/\s+/g, " ").trim();
      if (!name) continue;
      /* نسبة التقدّم جزء من الاسم يتغيّر بحالة المستخدم لا بالدلالة:
         «0% — التقدم الإجمالي في المنهج» و«… — …» وظيفة واحدة (3.2.4). */
      out.push({href: new URL(a.href).pathname, name: name.replace(/^(\d+%|…)\s*—\s*/, "")});
    }
  }
  return out;
}

async function injectFault(page) {
  await page.evaluate((fault) => {
    const add = (html) => {
      const d = document.createElement("div");
      d.innerHTML = html;
      d.setAttribute("data-audit-fault", "1");
      document.body.appendChild(d);
      return d;
    };
    if (fault === "linkcolor") {
      const p = document.createElement("p");
      p.style.color = getComputedStyle(document.body).color;
      p.textContent = "نص عادي طويل بما يكفي ليُعدّ سياقاً للرابط ";
      const a = document.createElement("a");
      a.href = "/about";
      a.textContent = "رابط بلا خط";
      a.style.color = getComputedStyle(document.body).color;
      a.style.textDecoration = "none";
      p.appendChild(a);
      p.appendChild(document.createTextNode(" ثم نص تالٍ بعد الرابط."));
      document.querySelector("main")?.appendChild(p) || document.body.appendChild(p);
    }
    if (fault === "required") {
      add('<label for="__req">بريدك</label><input id="__req" required />');
    }
    if (fault === "state") {
      add(
        '<nav aria-label="عينة"><ul><li><a href="/about" aria-current="page">الصفحة الحالية</a></li>' +
          '<li><a href="/glossar">صفحة أخرى</a></li></ul></nav>',
      );
      const cur = document.querySelector('[aria-current="page"]');
      if (cur) {
        cur.style.color = "rgb(0,0,0)";
        const peer = cur.closest("ul")?.querySelector("a:not([aria-current])");
        if (peer) peer.style.color = "rgb(0,0,0)";
      }
    }
    if (fault === "consist") {
      const foot = document.querySelector("footer") || document.body;
      const a = document.createElement("a");
      a.href = "/about";
      a.textContent = "من نحن — تسمية مختلفة";
      foot.appendChild(a);
    }
    if (fault === "sensory") {
      const host = document.querySelector("main") || document.body;
      const p = document.createElement("p");
      p.textContent = "اضغط الزر الأخضر الموجود على اليمين لإكمال الخطوة التالية في الدرس.";
      host.appendChild(p);
    }
    if (fault === "reorder") {
      /* عنصر داخل المحتوى يُقدَّم بـ`order` ويُركّز عليه بـtabindex موجب */
      const host = document.querySelector("main") || document.body;
      const wrap = document.createElement("div");
      wrap.style.display = "flex";
      wrap.innerHTML = '<span style="order:-1">مقدَّم بصرياً</span><button tabindex="3">تركيز موجب</button>';
      host.appendChild(wrap);
    }
    if (fault === "headingorder") {
      /* عنوان لاحق في DOM لكنه مرسوم أعلى الصفحة ⇒ عكس ترتيب القراءة */
      const host = document.querySelector("main") || document.body;
      const box = document.createElement("div");
      box.style.cssText = "position:fixed;top:40px;left:10px;background:#fff;padding:4px;z-index:9999";
      box.innerHTML = "<h2>عنوان أُزيح بصرياً إلى الأعلى</h2>";
      host.appendChild(box);
    }
  }, FAULT);
}

const ROUTES = await loadRoutes();

const browser = await puppeteer.launch({
  args: [...chromium.args, "--no-sandbox", "--disable-dev-shm-usage"],
  executablePath: await chromium.executablePath(),
  headless: true,
  protocolTimeout: 180000,
});

/** مرجع أسماء الترويسة/التذييل يُقرأ من «/» بلا حقن */
async function referenceChrome() {
  const page = await browser.newPage();
  try {
    await page.setViewport({width: VW, height: VH});
    await page.goto(BASE + "/", {waitUntil: "networkidle2", timeout: 45000});
    return await page.evaluate(chromeLinks);
  } catch {
    return [];
  } finally {
    await page.close().catch(() => {});
  }
}
const REF_CHROME = await referenceChrome();
const REF_NAMES = new Map();
for (const l of REF_CHROME) {
  if (!REF_NAMES.has(l.href)) REF_NAMES.set(l.href, new Set());
  REF_NAMES.get(l.href).add(l.name);
}

const out = [];
for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.setViewport({width: VW, height: VH, deviceScaleFactor: 1});
  await page.emulateMediaFeatures([{name: "prefers-color-scheme", value: THEME}]);
  await page.evaluateOnNewDocument((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {
      /* ignore */
    }
  }, THEME);

  const record = {route, theme: THEME, viewport: `${VW}x${VH}`, issues: []};
  try {
    await page.goto(BASE + route, {waitUntil: "networkidle2", timeout: 45000});
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
    await new Promise((r) => setTimeout(r, 250));
    record.dark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    if (FAULT) await injectFault(page);

    const s = await page.evaluate(measureSemantics);
    record.inlineLinks = s.inlineLinks;
    record.totalLinks = s.totalLinks;
    record.surrounded = s.surrounded;
    record.requiredFields = s.requiredFields;
    record.markedLabels = s.markedLabels;
    record.stateItems = s.stateItems;
    record.headings = s.headingCount;
    record.reorder = s.reordered.length;
    record.textBlocks = s.textBlocks;

    if (s.linkColorOnly.length) record.issues.push({code: "S1", items: s.linkColorOnly.slice(0, 6)});
    if (s.requiredUnmarked.length) record.issues.push({code: "S2", items: s.requiredUnmarked.slice(0, 6)});
    if (s.markedNotRequired.length) record.issues.push({code: "S2b", items: s.markedNotRequired.slice(0, 6)});
    if (s.stateColorOnly.length) record.issues.push({code: "S3", items: s.stateColorOnly.slice(0, 6)});

    /* S4 — الاتساق: نفس الرابط في الترويسة/التذييل بنفس الاسم */
    const chrome = await page.evaluate(chromeLinks);
    const inconsistent = [];
    for (const link of chrome) {
      const ref = REF_NAMES.get(link.href);
      if (!ref || ref.size === 0) continue;
      const ok = [...ref].some((n) => n === link.name);
      if (!ok) inconsistent.push({href: link.href, name: link.name.slice(0, 40), expected: [...ref][0].slice(0, 40)});
    }
    record.chromeLinks = chrome.length;
    if (inconsistent.length) record.issues.push({code: "S4", items: inconsistent.slice(0, 6)});

    if (s.sensory.length) record.issues.push({code: "S7", items: s.sensory.slice(0, 6)});
    if (s.reordered.length) record.issues.push({code: "S5", items: s.reordered.slice(0, 8)});
    if (s.inversions.length) record.issues.push({code: "S6", items: s.inversions});

    if (VERBOSE && record.issues.length) {
      console.log(route, JSON.stringify(record.issues).slice(0, 400));
    }
  } catch (err) {
    record.error = String(err.message || err).slice(0, 160);
  }
  out.push(record);
  await Promise.race([page.close().catch(() => {}), new Promise((r) => setTimeout(r, 4000))]);
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const withIssues = out.filter((r) => r.issues.length || r.error);
const count = (code) => out.filter((r) => r.issues.some((i) => i.code === code)).length;
const totals = {
  pages: out.length,
  withIssues: withIssues.length,
  errors: out.filter((r) => r.error).length,
  dark: out.filter((r) => r.dark).length,
  s1: count("S1"),
  s2: count("S2"),
  s3: count("S3"),
  s4: count("S4"),
  s5: count("S5"),
  s2b: count("S2b"),
  s6: count("S6"),
  s7: count("S7"),
  links: out.reduce((a, r) => a + (r.inlineLinks || 0), 0),
  totalLinks: out.reduce((a, r) => a + (r.totalLinks || 0), 0),
  required: out.reduce((a, r) => a + (r.requiredFields || 0), 0),
  marked: out.reduce((a, r) => a + (r.markedLabels || 0), 0),
  states: out.reduce((a, r) => a + (r.stateItems || 0), 0),
  chrome: out.reduce((a, r) => a + (r.chromeLinks || 0), 0),
  headings: out.reduce((a, r) => a + (r.headings || 0), 0),
  reorder: out.reduce((a, r) => a + (r.reorder || 0), 0),
  blocks: out.reduce((a, r) => a + (r.textBlocks || 0), 0),
};
console.log(
  `THEME ${THEME} VIEWPORT ${VW}x${VH} PAGES ${totals.pages} DARK ${totals.dark} WITH_ISSUES ${totals.withIssues} ERRORS ${totals.errors}` +
    ` | S1 ${totals.s1} S2 ${totals.s2} S2b ${totals.s2b} S3 ${totals.s3} S4 ${totals.s4} S5 ${totals.s5} S6 ${totals.s6} S7 ${totals.s7}` +
    ` | LINKS ${totals.totalLinks} INLINE-LINKS ${totals.links} REQUIRED ${totals.required} MARKED-LABELS ${totals.marked} STATES ${totals.states} CHROME ${totals.chrome} HEADINGS ${totals.headings} REORDER ${totals.reorder} TEXT-BLOCKS ${totals.blocks}`,
);
for (const r of withIssues.slice(0, VERBOSE ? 60 : 10)) {
  console.log(" ·", r.route, r.error || JSON.stringify(r.issues).slice(0, 280));
}
