/**
 * audit-wcag22.mjs — الجولة الثانية عشرة: معايير WCAG 2.2 الجديدة
 * (2.4.11 التركيز غير المحجوب · 2.5.7 السحب · 2.5.8 حجم الهدف · 3.2.6 المساعدة المتسقة · 3.3.7 الإدخال المكرر).
 *
 * كل فحص هنا يقيس شيئاً لا يظهر في لقطة شاشة:
 *  S1) هدف أصغر من 24×24 بكسل (2.5.8 AA) — يضيع على من يستخدم إصبعاً أو يداً مرتجفة.
 *  S2) عنصر يستقبل التركيز لكن شريطاً لاصقاً/ثابتاً يغطيه (2.4.11 AA).
 *  S3) عنصر يُسحَب بالفأرة وحده بلا مكافئ بلوحة المفاتيح (2.5.7 AA).
 *  S4) حقلان يطلبان المعلومة نفسها في الصفحة نفسها (3.3.7 A).
 *  S5) غياب مساعدة ثابتة الموضع عند وجودها في بعض الصفحات (3.2.6 A) — يُقاس.
 *  S6) `aria-label` على عنصر لا يقبل الاسم (div/span بلا دور) — يُهمَل بصمت.
 *
 * الاستخدام: node scripts/audit-wcag22.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_VIEWPORT · AUDIT_FAULT
 *  AUDIT_FAULT=small   يصغّر أول زر إلى 12×12 (لـS1)
 *  AUDIT_FAULT=obscure يضيف شريطاً ثابتاً فوق منتصف الشاشة (لـS2)
 *  AUDIT_FAULT=drag    يجعل زراً قابلاً للسحب بلا مكافئ (لـS3)
 *  AUDIT_FAULT=dup     يضيف حقلاً ثانياً بالاسم نفسه (لـS4)
 *  AUDIT_FAULT=nameless يضيف div بـaria-label بلا دور (لـS6)
 *  AUDIT_FAULT=help    ينقل رابط المساعدة من الفوتر إلى الهيدر (لـS5)
 */
import fs from "node:fs";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/wcag22.json";
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

/** يُنفَّذ داخل الصفحة: يستقبل إعدادات ويعيد نتائج S1–S5 */
function runChecks() {
  const interactiveSel =
    "a[href],button,input:not([type=hidden]),select,textarea,summary,[role=button],[role=link],[role=tab],[role=checkbox],[role=radio],[role=switch],[role=menuitem],[role=option]";

  const isSronly = (el) => {
    const cs = getComputedStyle(el);
    if (cs.clipPath === "inset(50%)" || cs.clip === "rect(0px, 0px, 0px, 0px)") return true;
    return (
      cs.position === "absolute" &&
      (el.className || "").toString().includes("sr-only") &&
      el.getBoundingClientRect().width <= 40
    );
  };

  const visible = (el) => {
    if (el.closest("[aria-hidden='true']")) return false;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || cs.opacity === "0") return false;
    if (el.closest("[hidden]")) return false;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return false;
    return true;
  };

  const groups = [...document.querySelectorAll("form, fieldset, [role='group']")];
  const scopeIndex = (scope) => String(groups.indexOf(scope));

  const nameOf = (el) =>
    (
      el.getAttribute("aria-label") ||
      (el.getAttribute("aria-labelledby") || "")
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ") ||
      el.textContent ||
      el.getAttribute("title") ||
      el.getAttribute("placeholder") ||
      ""
    )
      .replace(/\s+/g, " ")
      .trim();

  const targets = [...document.querySelectorAll(interactiveSel)].filter(
    (el) => visible(el) && !el.disabled && !isSronly(el),
  );

  /* ═══ S1 — حجم الهدف (2.5.8) ═══
     استثناءات المعيار: الرابط داخل جملة، وهدف صغير تحيط به دائرة 24px لا
     تلامس أهدافاً أخرى. */
  const rectOf = (el) => {
    const label = el.closest("label");
    return (label && visible(label) ? label : el).getBoundingClientRect();
  };
  const small = [];
  for (const el of targets) {
    const r = rectOf(el);
    if (r.width >= 24 && r.height >= 24) continue;
    const p = el.closest("p,li,td,th,dd,figcaption,span");
    const inlineLink =
      el.tagName === "A" &&
      p &&
      (p.textContent || "").trim().length > (el.textContent || "").trim().length + 12;
    if (inlineLink) continue;
    /* استثناء الفراغ: هل يوجد هدف آخر يلامس دائرة قطرها 24 حول المركز؟ */
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const clash = targets.some((other) => {
      if (other === el) return false;
      const o = rectOf(other);
      const dx = Math.max(o.left - cx, 0, cx - (o.left + o.width));
      const dy = Math.max(o.top - cy, 0, cy - (o.top + o.height));
      return Math.hypot(dx, dy) < 12;
    });
    if (clash) continue;
    small.push({
      tag: el.tagName.toLowerCase(),
      w: Math.round(r.width),
      h: Math.round(r.height),
      name: nameOf(el).slice(0, 34),
      cls: (el.className || "").toString().slice(0, 60),
    });
  }

  /* ═══ S2 — التركيز غير المحجوب (2.4.11) ═══
     يُفحص العنصر نفسه في موضعه الحقيقي بعد تمرير فوري إلى أقرب موضع. */
  const focusables = targets.filter(
    (el) => !el.hasAttribute("inert") && getComputedStyle(el).visibility !== "hidden",
  );
  const obscured = [];
  const overlayOf = (node) => {
    let n = node;
    while (n && n !== document.body) {
      const cs = getComputedStyle(n);
      if ((cs.position === "sticky" || cs.position === "fixed") && n.getClientRects().length) return n;
      n = n.parentElement;
    }
    return null;
  };
  let focusedChecked = 0;
  for (const el of focusables.slice(0, 90)) {
    focusedChecked += 1;
    try {
      el.focus({preventScroll: true});
    } catch {
      continue;
    }
    el.scrollIntoView({block: "nearest", inline: "nearest", behavior: "instant"});
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    if (r.bottom < 0 || r.top > innerHeight) continue;
    const x = Math.min(Math.max(r.left + Math.min(r.width / 2, 8), 1), innerWidth - 1);
    const y = Math.min(Math.max(r.top + r.height / 2, 1), innerHeight - 1);
    const hit = document.elementFromPoint(x, y);
    if (!hit || hit === el || el.contains(hit) || hit.contains(el)) continue;
    const overlay = overlayOf(hit);
    if (!overlay || overlay.contains(el)) continue;
    obscured.push({
      tag: el.tagName.toLowerCase(),
      name: nameOf(el).slice(0, 30),
      by: (overlay.className || "").toString().slice(0, 50),
    });
  }

  /* ═══ S3 — السحب (2.5.7) ═══
     عنصر `draggable` لا يُركَّز ولا يُشغَّل بلوحة المفاتيح = سحب بلا مكافئ. */
  const dragOnly = [...document.querySelectorAll("[draggable='true']")]
    .filter((el) => visible(el))
    .filter((el) => {
      const focusable =
        el.matches("a[href],button,input,select,textarea,summary") || el.tabIndex >= 0;
      const hasKeyHandler =
        (el.getAttribute("onkeydown") || "") !== "" ||
        ["button", "a"].includes(el.tagName.toLowerCase());
      return !focusable && !hasKeyHandler;
    })
    .map((el) => ({tag: el.tagName.toLowerCase(), name: nameOf(el).slice(0, 30)}));

  /* ═══ S4 — الإدخال المكرر (3.3.7) ═══
     حقلان نصيان في الصفحة يحملان الاسم الميسور نفسه = يُطلب من المستخدم
     إدخال المعلومة مرتين (بلا سبب معلن). */
  const fields = [...document.querySelectorAll("input,select,textarea")]
    .filter((el) => visible(el) && !el.disabled)
    .filter((el) => !["hidden", "submit", "button", "reset", "checkbox", "radio", "file"].includes(el.type));
  /* التكرار يُحتسب داخل النموذج نفسه فقط: صفحة فيها ثلاثة نماذج مختلفة
     (Anmeldung · Kündigung · Widerspruch) تكرّر «الاسم الأول» ثلاث مرات
     بلا أن يُطلب من المستخدم إدخاله مرتين في نموذج واحد. */
  const byName = new Map();
  const pageWide = new Map();
  for (const el of fields) {
    const label =
      el.getAttribute("aria-label") ||
      (el.id && document.querySelector(`label[for='${CSS.escape(el.id)}']`)?.textContent) ||
      el.closest("label")?.textContent ||
      el.getAttribute("placeholder") ||
      "";
    const key = label.replace(/\s+/g, " ").trim();
    if (!key) continue;
    pageWide.set(key, (pageWide.get(key) || 0) + 1);
    /* داخل نموذج/مجموعة دلالية فقط: ثلاث رسائل رسمية مختلفة في /forms
       تكرّر «الاسم الأول» ثلاث مرات ولا تطلب المعلومة مرتين في نموذج واحد. */
    const scope = el.closest("form, fieldset, [role='group']");
    if (!scope) continue;
    const bucket = `${key}\u0000${scopeIndex(scope)}`;
    byName.set(bucket, (byName.get(bucket) || 0) + 1);
  }
  const redundant = [...byName.entries()]
    .filter(([, n]) => n > 1)
    .map(([k, n]) => `${k.split("\u0000")[0]} ×${n}`);
  /* مقياس لا حكم: تسميات مكرّرة في الصفحة عبر نماذج/رسائل منفصلة */
  const pageRepeats = [...pageWide.values()].filter((n) => n > 1).length;

  /* ═══ S6 — اسم على عنصر لا يقبله (ARIA بلا دور) ═══
     `aria-label` على `div`/`span` بلا دور يُهمَل تماماً: الاسم يُكتب ولا يُقرأ.
     يحدث كثيراً مع مناطق السحب/الإفلات وحاويات التمرير. */
  const namelessRole = [];
  for (const el of document.querySelectorAll("[aria-label], [aria-labelledby]")) {
    if (!visible(el)) continue;
    const role = el.getAttribute("role");
    const tag = el.tagName.toLowerCase();
    const nativeNameable = ["input", "select", "textarea", "button", "a", "img", "section", "nav", "main", "header", "footer", "aside", "form", "table", "fieldset", "dialog", "iframe", "summary", "details", "ul", "ol", "li"].includes(tag);
    const genericRole = role && !["generic", "presentation", "none"].includes(role);
    if (nativeNameable || genericRole) continue;
    if (tag === "html" || tag === "body") continue;
    namelessRole.push({
      tag,
      name: (el.getAttribute("aria-label") || "").slice(0, 34),
      cls: (el.className || "").toString().slice(0, 46),
    });
  }

  /* ═══ S5 — المساعدة المتسقة (3.2.6): تُقاس لا تُحكم ═══ */
  /* ═══ S5 — المساعدة المتسقة (3.2.6): تُقاس لا تُحكم ═══
     نقطة المساعدة = رابط الأسئلة الشائعة/عن المنصة في الهيدر أو الفوتر.
     تُسجَّل الحاوية وترتيبها كي تُقارَن بين الصفحات. */
  /* آلية المساعدة = ما يوجد في الهيكل المشترك (هيدر/فوتر)، لا أي رابط في
     متن صفحة يتضمّن كلمة «مساعدة» بطبيعته. */
  const helpLinks = [...document.querySelectorAll("header a[href], header button, footer a[href], footer button")].filter(
    (el) => /(مساعدة|الأسئلة الشائعة|عن المنصة|Help|FAQ)/.test(nameOf(el)),
  );
  const helpEntry = helpLinks[0] || null;
  const helpRegion = helpEntry ? (helpEntry.closest("header") ? "header" : "footer") : null;
  const helpIndex = helpEntry
    ? [...(helpEntry.closest("header,footer") || document.body).querySelectorAll("a[href],button")].indexOf(
        helpEntry,
      )
    : -1;

  return {
    targetCount: targets.length,
    small,
    focusCount: focusables.length,
    focusedChecked,
    obscured,
    dragOnly,
    namelessRole,
    fieldCount: fields.length,
    redundant,
    pageRepeats,
    help: helpEntry ? {name: nameOf(helpEntry).slice(0, 20), region: helpRegion, index: helpIndex} : null,
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
    /* الإفصاحات المغلقة تُخفي أهدافاً حقيقية: تُفتح كلها (details) قبل القياس،
       وإلا صار «0 هدف صغير» نتيجة عيّنة لا تغطية. */
    await page.evaluate(() => {
      document.querySelectorAll("details").forEach((d) => {
        d.open = true;
      });
    });
    await new Promise((r) => setTimeout(r, 300));

    if (FAULT === "small") {
      /* هدف معزول 12×12: تصغير زر موجود قد يجعله داخل استثناء التباعد
         فيمرّ بحق، فلا يثبت أن الأداة تكشف العيب. */
      await page.evaluate(() => {
        const wrap = document.createElement("div");
        wrap.style.cssText = "padding:60px 0;display:flex;justify-content:center";
        const btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = "هدف صغير";
        btn.setAttribute("data-fault", "small");
        btn.style.cssText = "width:12px;height:12px;padding:0;overflow:hidden;font-size:0;border:0";
        wrap.appendChild(btn);
        document.querySelector("main")?.appendChild(wrap);
      });
    }
    if (FAULT === "obscure") {
      await page.evaluate(() => {
        const bar = document.createElement("div");
        bar.id = "__obscure";
        bar.style.cssText =
          "position:fixed;inset:0 0 auto 0;height:100%;z-index:9999;background:rgba(0,0,0,.01)";
        document.body.appendChild(bar);
      });
    }
    if (FAULT === "drag") {
      await page.evaluate(() => {
        const btn = [...document.querySelectorAll("button")].find((b) => b.getClientRects().length);
        if (btn) {
          const div = document.createElement("div");
          div.textContent = "كلمة";
          div.setAttribute("draggable", "true");
          div.setAttribute("data-fault", "drag");
          div.style.cssText = "padding:8px;border:1px solid #888;display:inline-block";
          btn.parentElement?.appendChild(div);
        }
      });
    }
    if (FAULT === "nameless") {
      await page.evaluate(() => {
        const box = document.createElement("div");
        box.textContent = "منطقة";
        box.setAttribute("aria-label", "وصف يُهمَل");
        box.setAttribute("data-fault", "nameless");
        document.querySelector("main")?.appendChild(box);
      });
    }
    if (FAULT === "help" && route === "/settings") {
      /* نقل آلية المساعدة من الفوتر إلى الهيدر في صفحة واحدة فقط: هذا ما
         يجعل موضعها غير متسق بين الصفحات (العيب الذي تقيسه S5). */
      await page.evaluate(() => {
        const link = [...document.querySelectorAll("footer a[href]")].find((a) =>
          /(مساعدة|الأسئلة الشائعة|عن المنصة|FAQ)/.test(a.textContent || ""),
        );
        const header = document.querySelector("header");
        if (link && header) header.appendChild(link);
      });
    }
    if (FAULT === "dup") {
      /* نموذج مصغّر يطلب المعلومة نفسها مرتين — العيب المقصود بـ3.3.7.
         إنشاء النموذج كاملاً أضمن من استنساخ حقل قد يكون مخفياً في الصفحة. */
      await page.evaluate(() => {
        const form = document.createElement("form");
        form.setAttribute("data-fault", "dup");
        for (let i = 0; i < 2; i += 1) {
          const id = `__dup_${i}`;
          const label = document.createElement("label");
          label.setAttribute("for", id);
          label.textContent = "بريدك الإلكتروني";
          const input = document.createElement("input");
          input.type = "email";
          input.id = id;
          form.appendChild(label);
          form.appendChild(input);
        }
        document.querySelector("main")?.appendChild(form);
      });
    }
    if (FAULT === "nameless") {
      await page.evaluate(() => {
        const box = document.createElement("div");
        box.textContent = "منطقة";
        box.setAttribute("aria-label", "وصف يُهمَل");
        box.setAttribute("data-fault", "nameless");
        document.querySelector("main")?.appendChild(box);
      });
    }
    if (FAULT === "help" && route === "/settings") {
      /* نقل آلية المساعدة من الفوتر إلى الهيدر في صفحة واحدة فقط: هذا ما
         يجعل موضعها غير متسق بين الصفحات (العيب الذي تقيسه S5). */
      await page.evaluate(() => {
        const link = [...document.querySelectorAll("footer a[href]")].find((a) =>
          /(مساعدة|الأسئلة الشائعة|عن المنصة|FAQ)/.test(a.textContent || ""),
        );
        const header = document.querySelector("header");
        if (link && header) header.appendChild(link);
      });
    }
    if (FAULT === "dup") {
      await page.evaluate(() => {
        const input = [...document.querySelectorAll("input")].find((i) =>
          ["text", "password", "email", "search", "url", "tel", "number"].includes(i.type ?? "text"),
        );
        if (input) {
          const clone = input.cloneNode(true);
          clone.removeAttribute("id");
          clone.value = "";
          clone.setAttribute("data-fault", "dup");
          const label = document.querySelector(`label[for='${CSS.escape(input.id)}']`);
          const name =
            input.getAttribute("aria-label") ||
            label?.textContent?.trim() ||
            input.getAttribute("placeholder") ||
            "حقل";
          clone.setAttribute("aria-label", name);
          input.parentElement?.appendChild(clone);
        }
      });
    }

    const res = await page.evaluate(runChecks);
    Object.assign(record, res);

    for (const s of res.small) {
      record.issues.push(
        `S1 هدف ${s.w}×${s.h} دون 24px: «${s.name}» <${s.tag}>`,
      );
    }
    for (const o of res.obscured) {
      record.issues.push(`S2 التركيز محجوب: «${o.name}» <${o.tag}> تحت شريط لاصق`);
    }
    for (const d of res.dragOnly) {
      record.issues.push(`S3 سحب بلا مكافئ لوحة مفاتيح: «${d.name}» <${d.tag}>`);
    }
    for (const r of res.redundant) {
      record.issues.push(`S4 حقل مكرر (3.3.7): ${r}`);
    }
    for (const n of res.namelessRole) {
      record.issues.push(`S6 اسم على <${n.tag}> بلا دور — يُهمَل: «${n.name}»`);
    }
  } catch (err) {
    record.issues.push(`تعذّر الفحص: ${err.message.split("\n")[0]}`);
  } finally {
    await page.close();
  }

  out.push(record);
  if (VERBOSE || record.issues.length) {
    console.log(`${route} ${record.issues.length ? "❌ " + record.issues.join(" ; ") : "✅"}`);
  }
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

/* 3.2.6: إن وُجدت مساعدة فيجب أن تكون في الموضع نفسه في كل الصفحات.
   تُحسب قبل تجميع الملاحظات وإلا أُضيفت بعد الطباعة. */
const helpPlaces = new Set(out.filter((r) => r.help).map((r) => `${r.help.region}:${r.help.index}`));
if (helpPlaces.size > 1) {
  for (const r of out) {
    if (!r.help) continue;
    r.issues.push(`S5 موضع المساعدة غير متسق (3.2.6): ${r.help.region}:${r.help.index}`);
  }
}

const withIssues = out.filter((r) => r.issues.length);
const totalSmall = out.reduce((n, r) => n + (r.small?.length || 0), 0);
const totalObscured = out.reduce((n, r) => n + (r.obscured?.length || 0), 0);
const totalDrag = out.reduce((n, r) => n + (r.dragOnly?.length || 0), 0);
const totalDup = out.reduce((n, r) => n + (r.redundant?.length || 0), 0);
const totalNameless = out.reduce((n, r) => n + (r.namelessRole?.length || 0), 0);
const withHelp = out.filter((r) => r.help).length;

console.log(`PAGES ${out.length} WITH_ISSUES ${withIssues.length}`);
console.log(
  `TARGETS ${out.reduce((n, r) => n + (r.targetCount || 0), 0)} SMALL ${totalSmall} ` +
    `OBSCURED ${totalObscured} DRAG_ONLY ${totalDrag} REDUNDANT ${totalDup} ` +
    `NAMELESS_ROLE ${totalNameless} PAGES_WITH_HELP ${withHelp} HELP_PLACES ${[...helpPlaces].join("|") || "—"}`,
);
if (withIssues.length) {
  for (const r of withIssues.slice(0, 15)) console.log(`${r.route} | ${r.issues.slice(0, 4).join(" ; ")}`);
}
