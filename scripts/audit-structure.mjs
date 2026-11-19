/**
 * audit-structure.mjs — الجولة الثالثة عشرة: الدلالة البنيوية والاسم والوصف
 * (1.3.1 العلاقات الدلالية · 2.4.4 غرض الرابط · 2.4.6 العناوين والتسميات · 4.1.2 الاسم والدور).
 *
 * الجولات السابقة قاست ما يُرى (تباين، تخطيط، تركيز، أحجام) وما يُسمَع (لغة،
 * اتجاه). هذه الجولة تقيس ما **لا يُرى بالعين**: هل يعرف قارئ الشاشة ما هذه
 * البقعة، وأين تقع في هيكل الصفحة، وماذا يفعل هذا الرابط؟
 *
 *  S1) تسمية بصرية بلا ربط دلالي: `<label>`/عنوان بجانب حقل غير مرتبط به
 *      (لا `for`/`aria-labelledby`/احتواء) — صاحبها TAB لا يعرف ماذا يكتب (1.3.1/4.1.2).
 *  S2) رابط/زر بلا اسم ميسور: نص فارغ ولا aria-label ولا صورة بديلة (2.4.4/4.1.2).
 *  S3) اسم رابط غير وصفي: «انقر هنا» / «المزيد» / «هنا» / «read more» مكرَّراً
 *      بلا سياق (2.4.4) — الرابط نفسه يتكرّر بعشرات الأسماء المتطابقة.
 *  S4) عنوان مساعد/تسمية غير وصفي: `aria-label="الرئيسية"` على `<nav>` واحد فقط
 *      لا مشكلة؛ لكن `<nav>`/`<aside>`/`<form>`/`<table>` متعددة **بلا اسم** أو
 *      بأسماء متطابقة تجعل قائمة المعالم بلا معنى (2.4.6/1.3.1).
 *  S5) تدرّج عناوين مكسور: h1 مفقود، أو أكثر من h1، أو قفزة h2→h4 (1.3.1/2.4.6).
 *  S6) عنصر تفاعلي مبني من `div`/`span` بلا دور: قابل للنقر (`onClick`) لكنه
 *      لا يدخل شجرة إتاحة (4.1.2).
 *  S7) عناصر تفاعلية متداخلة (زر داخل رابط، رابط داخل زر): قارئ الشاشة يرى
 *      عنصراً واحداً والمستخدم لا يستطيع تنفيذ أحدهما (4.1.2/2.4.4).
 *  S8) `id` مكرر في الصفحة نفسها: يكسر `label[for]` و`aria-labelledby`
 *      فيشير الاسم إلى أول عنصر فقط (1.3.1/4.1.1).
 *  S9) إشارة ARIA معلّقة: `aria-labelledby`/`aria-describedby`/`aria-controls`
 *      إلى `id` غير موجود — الاسم يُفقد بصمت (1.3.1/4.1.2).
 *
 * كل فحص له حقن خطأ (`AUDIT_FAULT=…`) يثبت أنه يكشف العيب لا يمرّ عليه.
 * يُخرج JSON + جدولاً نصياً؛ يصلح للتشغيل على مخرجات `next start`.
 *
 * الاستخدام: node scripts/audit-structure.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_VIEWPORT · AUDIT_FAULT
 *  AUDIT_FAULT=label    حقل بجانب <label> غير مرتبط به (لـS1)
 *  AUDIT_FAULT=emptyname زر بلا اسم ميسور (لـS2)
 *  AUDIT_FAULT=here     رابط «انقر هنا» إضافي (لـS3)
 *  AUDIT_FAULT=landmark <nav> ثانٍ بلا اسم (لـS4)
 *  AUDIT_FAULT=heading  قفزة h2→h5 (لـS5)
 *  AUDIT_FAULT=fakebtn  div قابل للنقر بلا دور (لـS6)
 *  AUDIT_FAULT=nested   زر داخل رابط (لـS7)
 *  AUDIT_FAULT=dupid    عنصر بـid مكرر (لـS8)
 *  AUDIT_FAULT=dangling aria-labelledby إلى id غير موجود (لـS9)
 */
import fs from "node:fs";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/structure.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";
const [VW, VH] = (process.env.AUDIT_VIEWPORT || "360x800").split("x").map(Number);

/* نفس قائمة الجولات السابقة — كي يكون «189 مساراً» قابلاً للمقارنة بين
   التقارير، لا رقماً يتغيّر بتغيّر عيّنة الأداة. */
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

/** يُنفَّذ داخل الصفحة: يعيد نتائج S1–S6 */
function runChecks() {
  const visible = (el) => {
    if (!el || el.closest("[aria-hidden='true']")) return false;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.opacity === "0") return false;
    if (el.closest("[hidden]")) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  const norm = (s) => (s || "").replace(/\s+/g, " ").trim();

  /* الاسم الميسور حسب ترتيب الحساب في ARIA: aria-labelledby ← aria-label ←
     المحتوى ← title. لا نستعمل textContent وحده: زر أيقونة بلا نص لكن بـ
     aria-label **له اسم**، وزرّ بنص مخفي لا اسم له. */
  const accessibleName = (el) => {
    const labelledby = el.getAttribute("aria-labelledby");
    if (labelledby) {
      const t = labelledby
        .split(/\s+/)
        .map((id) => norm(document.getElementById(id)?.textContent))
        .join(" ")
        .trim();
      if (t) return t;
    }
    const aria = norm(el.getAttribute("aria-label"));
    if (aria) return aria;
    /* حقول النماذج: `<label for>`/الاحتواء داخل `<label>` هو مصدر الاسم
       القياسي — تجاوزه يجعل كل حقل موسوم جيداً «بلا اسم». */
    const isControl = ["INPUT", "SELECT", "TEXTAREA"].includes(el.tagName);
    if (isControl) {
      const lbl =
        (el.id && document.querySelector(`label[for='${CSS.escape(el.id)}']`)) || el.closest("label");
      const lt = lbl ? norm(lbl.textContent) : "";
      if (lt) return lt;
      if (el.tagName === "SELECT") {
        const opt = el.selectedOptions?.[0]?.textContent;
        if (norm(opt)) return norm(opt);
      }
    }
    if (el.tagName === "IMG") return norm(el.getAttribute("alt"));
    if (el.tagName === "INPUT" && ["submit", "button", "reset"].includes(el.type))
      return norm(el.value);
    const clone = el.cloneNode(true);
    clone.querySelectorAll("[aria-hidden='true'], [hidden], .sr-only").forEach((n) => n.remove());
    return norm(clone.textContent);
  };

  const interactiveSel =
    "a[href],button,[role=button],[role=link],[role=tab],[role=checkbox],[role=radio],[role=switch],[role=menuitem],[role=option],input,select,textarea,summary";

  /* ═══ S1 — تسمية بصرية بلا ربط دلالي (1.3.1 / 4.1.2) ═══
     حقل أو زرّ بجانب `<label>`/`<span>` يبدو أنه اسمه، لكن لا شيء يربطهما:
     لا `for`، ولا `aria-labelledby`، ولا احتواء داخل `<label>`. قارئ الشاشة
     يعرض «حقل نص، فارغ» ويخمّن المستخدم من الزر فقط. */
  const controls = [...document.querySelectorAll("input:not([type=hidden]),select,textarea")].filter(
    (el) => visible(el) && !el.disabled,
  );
  const visuallyLabelled = [];
  const hasName = (el) => {
    if (norm(el.getAttribute("aria-label")) || norm(el.getAttribute("aria-labelledby"))) return true;
    if (el.id && document.querySelector(`label[for='${CSS.escape(el.id)}']`)) return true;
    if (el.closest("label")) return true;
    if (el.title) return true;
    if (["submit", "button", "reset"].includes(el.type) && norm(el.value)) return true;
    return false;
  };
  const nearbyText = (el) => {
    /* النص البصري الملاصق: الجدّ المشترك الأقرب، ثم أول نص قصير فيه، بشرط ألا
       يكون هذا النص جزءاً من حقل آخر أو زر. */
    let p = el.parentElement;
    for (let depth = 0; p && depth < 3; depth += 1) {
      const candidates = [...p.querySelectorAll("span,div,p,strong,label")].filter(
        (n) => !n.contains(el) && !n.querySelector("input,select,textarea") && visible(n),
      );
      for (const c of candidates) {
        const t = norm(c.textContent);
        if (t && t.length <= 40) return {text: t, tag: c.tagName.toLowerCase()};
      }
      p = p.parentElement;
    }
    return null;
  };
  for (const el of controls) {
    if (hasName(el)) continue;
    const near = nearbyText(el);
    if (near) visuallyLabelled.push({tag: el.tagName.toLowerCase(), type: el.type || "", near: near.text.slice(0, 30)});
  }

  /* ═══ S2 — رابط/زر بلا اسم ميسور (2.4.4 / 4.1.2) ═══
     الاسم المشتق من `aria-labelledby` أو صورة بديلة أو محتوى مرئي. */
  const unnamed = [];
  for (const el of [...document.querySelectorAll(interactiveSel)]) {
    if (!visible(el)) continue;
    if (el.tagName === "INPUT" && !["submit", "button", "reset", "image"].includes(el.type)) continue;
    // زر/رابط مُركَّب من صور: يُحتسب الاسم من alt
    const images = [...el.querySelectorAll("img")].filter((i) => norm(i.getAttribute("alt")));
    if (images.length) continue;
    if (accessibleName(el)) continue;
    unnamed.push({tag: el.tagName.toLowerCase(), cls: (el.className || "").toString().slice(0, 44)});
  }

  /* ═══ S3 — اسم رابط غير وصفي (2.4.4) ═══
     اسم الرابط نفسه لا يقول إلى أين يذهب. لا نحكم على الاسم المنفرد (قد يكون
     سياقه كافياً) بل على **التكرار**: العبارة العامة نفسها تظهر مرتين أو أكثر
     كأسماء روابط في الصفحة، أو الاسم كله من عبارة عامة. */
  const VAGUE = /^(هنا|انقر هنا|اضغط هنا|المزيد|اقرأ المزيد|التفاصيل|read more|more|click here|here|link|رابط)$/i;
  const linkNames = new Map();
  for (const el of [...document.querySelectorAll("a[href],[role=link]")]) {
    if (!visible(el)) continue;
    const n = accessibleName(el);
    if (!n) continue;
    const key = n.slice(0, 24);
    linkNames.set(key, (linkNames.get(key) || 0) + 1);
  }
  const vague = [...linkNames.entries()]
    .filter(([k, n]) => (VAGUE.test(k) || VAGUE.test(k.replace(/[«»…:.!]/g, "").trim())) && n >= 1)
    .map(([k, n]) => `${k} ×${n}`);

  /* ═══ S4 — معالم متعددة بلا اسم أو بأسماء متطابقة (2.4.6 / 1.3.1) ═══
     قارئ الشاشة يعرض قائمة معالم: «تصفح، تصفح، تصفح» لا تفيد. المعيار يطلب
     تمييزها بأسماء عندما تتكرر من نوع واحد. */
  const landmarks = [...document.querySelectorAll("nav,aside,form,section[aria-label],table")].filter(visible);
  const groups = new Map();
  for (const el of landmarks) {
    const type = el.tagName.toLowerCase();
    const name = norm(el.getAttribute("aria-label")) || norm(el.getAttribute("aria-labelledby"));
    if (!groups.has(type)) groups.set(type, []);
    groups.get(type).push(name);
  }
  const landmarkIssues = [];
  for (const [type, names] of groups.entries()) {
    if (names.length < 2) continue;
    if (names.some((n) => !n)) landmarkIssues.push(`${type}: ${names.length} معلم، بعضها بلا اسم`);
    else {
      const dup = names.filter((n, i) => names.indexOf(n) !== i);
      if (dup.length) landmarkIssues.push(`${type}: اسم مكرر «${dup[0]}» ×${dup.length + 1}`);
    }
  }

  /* ═══ S5 — تدرّج العناوين (1.3.1 / 2.4.6) ═══
     h1 واحد كعنوان للصفحة، ولا قفز أكثر من مستوى عند النزول: قارئ الشاشة
     يتنقّل بالعناوين، فقفزة h2→h4 تُخفي مستوى كاملاً من الخريطة. */
  const headings = [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].filter(visible);
  const levels = headings.map((h) => Number(h.tagName[1]));
  const h1Count = levels.filter((l) => l === 1).length;
  const headingIssues = [];
  if (h1Count === 0) headingIssues.push("لا h1");
  if (h1Count > 1) headingIssues.push(`${h1Count} عناوين h1`);
  for (let i = 1; i < levels.length; i += 1) {
    if (levels[i] - levels[i - 1] > 1) {
      headingIssues.push(`قفزة h${levels[i - 1]}→h${levels[i]}`);
      break;
    }
  }

  /* ═══ S6 — تفاعلي مبني من div/span بلا دور (4.1.2) ═══
     `onClick` على عنصر عام: يُنقر بالفأرة ولا يدخل شجرة الإتاحة ولا يصل إليه
     Tab. React يضع المستمع على الجذر، فلا يكفي فحص الخاصية — يُفحص أيضاً
     وجود `role` أو `tabindex`. */
  const fakeControls = [];
  for (const el of document.querySelectorAll("div[onclick],span[onclick],li[onclick],td[onclick],div[role='presentation'][onclick]")) {
    if (!visible(el)) continue;
    if (el.hasAttribute("role") && !["presentation", "none"].includes(el.getAttribute("role"))) continue;
    if (el.tabIndex >= 0) continue;
    fakeControls.push({tag: el.tagName.toLowerCase(), name: (el.textContent || "").trim().slice(0, 30)});
  }

  /* ═══ S7 — تفاعلي متداخل (4.1.2 / 2.4.4) ═══
     `<a>` يحتوي `<button>` أو العكس: يُنقر بالفأرة على الاثنين، ولا يمكن
     الوصول إلى الداخلي بلوحة المفاتيح، والاسم يصير نصّين مدمجين. */
  const nested = [];
  const innerSel = "a[href],button,[role=button],[role=link],input,select,textarea";
  for (const el of [...document.querySelectorAll(innerSel)]) {
    if (!visible(el)) continue;
    /* الجدّ التفاعلي الأقرب — `closest` يبدأ من الأب فلا يطابق العنصر نفسه. */
    const outer = el.parentElement?.closest(innerSel);
    if (!outer || !visible(outer)) continue;
    nested.push({
      inner: el.tagName.toLowerCase(),
      outer: outer.tagName.toLowerCase(),
      name: accessibleName(el).slice(0, 26),
    });
  }

  /* ═══ S8 — id مكرر (1.3.1 / 4.1.1) ═══
     `label[for=x]` و`aria-labelledby=x` يربطان **أول** عنصر بالمعرّف؛
     فالتكرار يجعل حقلاً ثانياً بلا اسم أو باسم حقل آخر. */
  const idCount = new Map();
  for (const el of document.querySelectorAll("[id]")) {
    if (!el.id) continue;
    idCount.set(el.id, (idCount.get(el.id) || 0) + 1);
  }
  const dupIds = [...idCount.entries()].filter(([, n]) => n > 1).map(([id, n]) => `${id} ×${n}`);

  /* ═══ S9 — إشارة ARIA معلّقة (1.3.1 / 4.1.2) ═══
     الاسم يُحسب من `aria-labelledby`؛ إن غاب المعرّف لا اسم ولا تحذير. */
  const dangling = [];
  for (const attr of ["aria-labelledby", "aria-describedby", "aria-controls", "aria-owns"]) {
    for (const el of document.querySelectorAll(`[${attr}]`)) {
      if (!visible(el)) continue;
      const missing = (el.getAttribute(attr) || "")
        .split(/\s+/)
        .filter(Boolean)
        .filter((id) => !document.getElementById(id));
      if (missing.length) {
        dangling.push({attr, tag: el.tagName.toLowerCase(), missing: missing.join(",").slice(0, 30)});
      }
    }
  }

  /* تغطية معلنة: بلا هذه الأرقام يصعب التمييز بين «لا عيب» و«لا شيء
     فُحص» — 0 في فحص لا ينطبق على أي عنصر ليس إنجازاً. */
  const coverage = {
    ids: document.querySelectorAll("[id]").length,
    labels: document.querySelectorAll("label[for]").length,
    ariaRefs: ["aria-labelledby", "aria-describedby", "aria-controls", "aria-owns"]
      .map((a) => document.querySelectorAll(`[${a}]`).length)
      .reduce((x, y) => x + y, 0),
  };

  return {
    coverage,
    controlCount: controls.length,
    visuallyLabelled,
    unnamed,
    vague,
    linkCount: linkNames.size,
    landmarks: landmarkIssues,
    headingCount: headings.length,
    headingIssues,
    fakeControls,
    nested,
    dupIds,
    dangling,
  };
}

const ROUTES = await loadRoutes();

const browser = await puppeteer.launch({
  args: [...chromium.args, "--no-sandbox", "--disable-dev-shm-usage"],
  executablePath: await chromium.executablePath(),
  headless: true,
  protocolTimeout: 180000,
});

const out = [];

for (const route of ROUTES) {
  const page = await browser.newPage();
  await page.setViewport({width: VW, height: VH});
  const record = {route, issues: [], viewport: `${VW}x${VH}`};
  try {
    await page.goto(BASE + route, {waitUntil: "networkidle2", timeout: 45000});
    /* الإفصاحات المغلقة تُخفي محتوى حقيقياً: تُفتح كلها قبل القياس. */
    await page.evaluate(() => {
      document.querySelectorAll("details").forEach((d) => {
        d.open = true;
      });
    });
    await new Promise((r) => setTimeout(r, 250));

    if (FAULT === "label") {
      await page.evaluate(() => {
        const wrap = document.createElement("div");
        wrap.innerHTML = "<span>بريدك الإلكتروني</span>";
        const input = document.createElement("input");
        input.type = "email";
        input.setAttribute("data-fault", "label");
        wrap.appendChild(input);
        document.querySelector("main")?.appendChild(wrap);
      });
    }
    if (FAULT === "emptyname") {
      await page.evaluate(() => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.setAttribute("data-fault", "emptyname");
        btn.style.cssText = "width:40px;height:40px";
        btn.innerHTML = '<span aria-hidden="true">✕</span>';
        document.querySelector("main")?.appendChild(btn);
      });
    }
    if (FAULT === "here") {
      await page.evaluate(() => {
        const a = document.createElement("a");
        a.href = "/about";
        a.textContent = "انقر هنا";
        a.setAttribute("data-fault", "here");
        document.querySelector("main")?.appendChild(a);
      });
    }
    if (FAULT === "landmark") {
      await page.evaluate(() => {
        const nav = document.createElement("nav");
        nav.setAttribute("data-fault", "landmark");
        nav.innerHTML = "<a href='/'>x</a><a href='/about'>y</a>";
        document.querySelector("main")?.prepend(nav);
      });
    }
    if (FAULT === "heading") {
      await page.evaluate(() => {
        const h = document.createElement("h5");
        h.textContent = "قسم خامس بلا رابع";
        h.setAttribute("data-fault", "heading");
        document.querySelector("main")?.appendChild(h);
      });
    }
    if (FAULT === "nested") {
      await page.evaluate(() => {
        const a = document.createElement("a");
        a.href = "/about";
        a.setAttribute("data-fault", "nested");
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = "داخلي";
        a.appendChild(b);
        document.querySelector("main")?.appendChild(a);
      });
    }
    if (FAULT === "dupid") {
      await page.evaluate(() => {
        const first = document.querySelector("[id]");
        if (!first) return;
        const clone = document.createElement("div");
        clone.id = first.id;
        clone.setAttribute("data-fault", "dupid");
        clone.textContent = "نسخة";
        document.querySelector("main")?.appendChild(clone);
      });
    }
    if (FAULT === "dangling") {
      await page.evaluate(() => {
        const box = document.createElement("div");
        box.setAttribute("role", "group");
        box.setAttribute("aria-labelledby", "__missing_label");
        box.setAttribute("data-fault", "dangling");
        box.textContent = "مجموعة";
        document.querySelector("main")?.appendChild(box);
      });
    }
    if (FAULT === "fakebtn") {
      await page.evaluate(() => {
        const d = document.createElement("div");
        d.textContent = "زرّ مزيّف";
        d.setAttribute("onclick", "void 0");
        d.setAttribute("data-fault", "fakebtn");
        document.querySelector("main")?.appendChild(d);
      });
    }

    const r = await page.evaluate(runChecks);
    record.coverage = r.coverage;
    record.controlCount = r.controlCount;
    record.linkCount = r.linkCount;
    record.headingCount = r.headingCount;
    if (r.visuallyLabelled.length) record.issues.push({code: "S1", items: r.visuallyLabelled});
    if (r.unnamed.length) record.issues.push({code: "S2", items: r.unnamed});
    if (r.vague.length) record.issues.push({code: "S3", items: r.vague});
    if (r.landmarks.length) record.issues.push({code: "S4", items: r.landmarks});
    if (r.headingIssues.length) record.issues.push({code: "S5", items: r.headingIssues});
    if (r.fakeControls.length) record.issues.push({code: "S6", items: r.fakeControls});
    if (r.nested.length) record.issues.push({code: "S7", items: r.nested});
    if (r.dupIds.length) record.issues.push({code: "S8", items: r.dupIds});
    if (r.dangling.length) record.issues.push({code: "S9", items: r.dangling});
    if (VERBOSE && record.issues.length) {
      console.log(route, JSON.stringify(record.issues).slice(0, 400));
    }
  } catch (err) {
    record.error = String(err.message || err).slice(0, 160);
  }
  out.push(record);
  await page.close();
}

await browser.close();

fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const withIssues = out.filter((r) => r.issues.length || r.error);
const count = (code) => out.filter((r) => r.issues.some((i) => i.code === code)).length;
const totals = {
  pages: out.length,
  withIssues: withIssues.length,
  errors: out.filter((r) => r.error).length,
  s1: count("S1"),
  s2: count("S2"),
  s3: count("S3"),
  s4: count("S4"),
  s5: count("S5"),
  s6: count("S6"),
  s7: count("S7"),
  s8: count("S8"),
  s9: count("S9"),
  controls: out.reduce((a, r) => a + (r.controlCount || 0), 0),
  headings: out.reduce((a, r) => a + (r.headingCount || 0), 0),
  ids: out.reduce((a, r) => a + (r.coverage?.ids || 0), 0),
  labels: out.reduce((a, r) => a + (r.coverage?.labels || 0), 0),
  ariaRefs: out.reduce((a, r) => a + (r.coverage?.ariaRefs || 0), 0),
};
console.log(
  `PAGES ${totals.pages} WITH_ISSUES ${totals.withIssues} ERRORS ${totals.errors}` +
    ` | S1 ${totals.s1} S2 ${totals.s2} S3 ${totals.s3} S4 ${totals.s4} S5 ${totals.s5} S6 ${totals.s6}` +
    ` S7 ${totals.s7} S8 ${totals.s8} S9 ${totals.s9}` +
    ` | CONTROLS ${totals.controls} HEADINGS ${totals.headings} IDS ${totals.ids} LABELS ${totals.labels} ARIAREFS ${totals.ariaRefs}`,
);
for (const r of withIssues.slice(0, VERBOSE ? 50 : 12)) {
  console.log(" ·", r.route, r.error || JSON.stringify(r.issues).slice(0, 300));
}
