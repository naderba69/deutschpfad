#!/usr/bin/env node
/**
 * audit-forms.mjs — الجولة السابعة: النماذج ورسائل الحالة (لكل مسار).
 *
 * الجولات السابقة فحصت: التباين والعناوين (2) · لوحة المفاتيح وأسماء الحقول (3) ·
 * ثبات التخطيط (4) · التكبير (5) · الحالات المفتوحة (6). ما لم يُفحص بعد هو
 * **صحّة الاقتران** بين الحقول وشروحها ورسائل أخطائها — وهو أكثر ما يفشل في
 * النماذج الحقيقية: وصف يشير إلى معرّف غير موجود، خطأ لا يُعلَن، حقل مطلوب
 * غير معلَّم، زر بلا `type` يُرسل النموذج بالخطأ.
 *
 * الفحوص (لكل مسار، بلا عيّنة):
 *
 *  A) **سلامة مراجع ARIA وlabel[for]**: كل `aria-labelledby` · `aria-describedby` ·
 *     `aria-controls` · `aria-owns` · `aria-activedescendant` و`label[for]`
 *     يجب أن يشير إلى معرّف موجود (IDREF سليم). المرجع المكسور يُعلن لا شيء
 *     بصمت — أخطر من غياب الوصف.
 *  B) **اسم كل عنصر إدخال**: input/select/textarea بما فيها `role=combobox`،
 *     باسم من: label[for] · aria-label · aria-labelledby · label محيط · title.
 *     `placeholder` وحده لا يُحتسب (يختفي عند الكتابة).
 *  C) **`type` لكل زر داخل form**: الزر بلا `type` هو submit ضمني، فحفظ/إلغاء
 *     أو أي زر مساعد يُرسل النموذج بلا قصد.
 *  D) **`autocomplete` للغرض (WCAG 1.3.5)**: الحقول التي يُستدل على غرضها من
 *     النص/الاسم (اسم · بريد · هاتف · كلمة مرور · عنوان · مدينة · رمز بريدي ·
 *     دولة · تاريخ ميلاد · اسم مستخدم) يجب أن تحمل قيمة autocomplete صحيحة.
 *  E) **دلالة الإلزام متسقة**: `required` (HTML) و`aria-required` لا يتناقضان،
 *     والحقل المطلوب يظهر في اسمه/شروحه ما يدل على الإلزام.
 *  F) **`aria-invalid` مقترن بشرح**: لا يُعلَن حقل غير صالح بلا نص يشرح السبب.
 *  G) **`aria-live`/`role=alert|status` غير مخفي** عن شجرة الوصول.
 *  H) **سلامة `role=radiogroup`**: اسم للمجموعة، ≥2 `role=radio` بداخلها، لكل
 *     `radio` اسم و`aria-checked`، ولا `radio` خارج مجموعة.
 *  I) **تنقّل الأسهم فعلياً**: التركيز على أول خيار + ArrowDown يجب أن ينقل
 *     التركيز إلى خيار آخر ويختاره (Selection follows focus) — فحص سلوكي لا
 *     بنيوي، لأن وجود الأدوار وحده لا يضمن عمل لوحة المفاتيح. ويُضاف إليه
 *     كشف أسماء المجموعات المكررة في الصفحة نفسها.
 *
 * المخرجات: JSON تفصيلي + ملخّص. التغطية الكاملة تُثبت بـ`controls` لكل صفحة.
 *
 * الاستخدام: node scripts/audit-forms.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_FAULT
 *  AUDIT_FAULT=radios يقطع انتشار keydown قبل React (تحكّم سلبي يثبت أن الفحص I
 *  يكشف التعطّل فعلاً ولا يمرّ دائماً).
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/forms.json";
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

/** يُنفَّذ داخل الصفحة */
async function inspectForms() {
  const label = (el) =>
    `${el.tagName.toLowerCase()}${el.id ? "#" + el.id : ""}${el.name ? `[name=${el.name}]` : ""}.${String(el.className || "").split(" ")[0]}`;
  const visible = (el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return cs.display !== "none" && cs.visibility !== "hidden" && r.width > 1 && r.height > 1;
  };
  const ids = new Set([...document.querySelectorAll("[id]")].map((e) => e.id));

  /* A) مراجع ARIA وlabel[for] */
  const ATTRS = ["aria-labelledby", "aria-describedby", "aria-controls", "aria-owns", "aria-activedescendant"];
  const brokenRefs = [];
  for (const attr of ATTRS) {
    for (const el of document.querySelectorAll(`[${attr}]`)) {
      for (const ref of (el.getAttribute(attr) || "").split(/\s+/).filter(Boolean)) {
        if (!ids.has(ref) && brokenRefs.length < 6) {
          brokenRefs.push(`${attr}="${ref}" على ${label(el)} — معرّف غير موجود`);
        }
      }
    }
  }
  for (const l of document.querySelectorAll("label[for]")) {
    const target = l.getAttribute("for");
    if (target && !ids.has(target) && brokenRefs.length < 6) {
      brokenRefs.push(`label[for="${target}"] — معرّف غير موجود`);
    }
  }

  /* B) اسم كل عنصر إدخال */
  const controls = [...document.querySelectorAll("input, select, textarea, [role='combobox'], [contenteditable='true']")]
    .filter((el) => !el.closest("[aria-hidden='true'],[inert]"))
    .filter((el) => !(el.tagName === "INPUT" && ["hidden"].includes(el.getAttribute("type"))))
    .filter(visible);
  const nameOf = (el) => {
    const byFor = el.id ? document.querySelector(`label[for="${CSS.escape(el.id)}"]`) : null;
    if (byFor && byFor.textContent.trim()) return "label[for]";
    if (el.getAttribute("aria-label")?.trim()) return "aria-label";
    if (el.getAttribute("aria-labelledby")) {
      const t = el.getAttribute("aria-labelledby").split(/\s+/).map((id) => document.getElementById(id)?.textContent || "").join(" ").trim();
      if (t) return "aria-labelledby";
    }
    if (el.closest("label") && el.closest("label").textContent.trim()) return "label(محيط)";
    if (el.getAttribute("title")?.trim()) return "title";
    return null;
  };
  const unnamed = [];
  for (const el of controls) {
    if (!nameOf(el) && unnamed.length < 6) unnamed.push(label(el));
  }

  /* C) أزرار داخل form بلا type */
  const implicitSubmit = [];
  for (const b of document.querySelectorAll("form button:not([type])")) {
    if (implicitSubmit.length < 6) {
      implicitSubmit.push(`${label(b)} «${(b.textContent || "").trim().slice(0, 20)}»`);
    }
  }

  /* D) autocomplete حسب الغرض */
  const PURPOSE = [
    { re: /(^|[^a-z])(name|fullname|full name|اسم|الاسم)([^a-z]|$)/i, want: /^name$|^given-name$|^family-name$/, field: "الاسم" },
    { re: /(e-?mail|البريد الإلكتروني|بريد إلكتروني|email address)/i, want: /^email$/, field: "البريد الإلكتروني" },
    { re: /(phone|tel|هاتف|جوال|رقم الهاتف)/i, want: /^tel$/, field: "الهاتف" },
    { re: /(password|كلمة المرور|كلمة السر)/i, want: /^(current-password|new-password)$/, field: "كلمة المرور" },
    { re: /(street|address|عنوان|العنوان)/i, want: /^street-address$|^address-line1$/, field: "العنوان" },
    { re: /(city|مدينة|المدينة)/i, want: /^address-level2$/, field: "المدينة" },
    { re: /(postal|zip|رمز بريدي|الرمز البريدي)/i, want: /^postal-code$/, field: "الرمز البريدي" },
    { re: /(country|دولة|الدولة|بلد)/i, want: /^country$|^country-name$/, field: "الدولة" },
    { re: /(geburtsdatum|birth\s?date|تاريخ الميلاد|date of birth)/i, want: /^bday$|^bday-day$/, field: "تاريخ الميلاد" },
    { re: /(username|user name|اسم المستخدم)/i, want: /^username$/, field: "اسم المستخدم" },
  ];
  const autocompleteIssues = [];
  for (const el of controls) {
    /* نموذج **تدريبي** (محاكي الاستمارات): لا نطلب autocomplete بقصد — طلبه
       يعني أن يملأ المتصفح بيانات المتعلّم الحقيقية في تمرين، وهو ضرر لا فائدة.
       الوسم `data-practice` في المكوّن يوثّق القرار بدل أن يبقى سهواً. */
    if (el.closest("[data-practice]")) continue;
    if (el.tagName === "INPUT" && ["submit", "button", "checkbox", "radio", "file", "range", "color", "search"].includes((el.getAttribute("type") || "text").toLowerCase())) continue;
    const hint = [
      nameOf(el) === "label[for]" && el.id ? document.querySelector(`label[for="${CSS.escape(el.id)}"]`)?.textContent : "",
      el.closest("label")?.textContent,
      el.getAttribute("aria-label"),
      el.getAttribute("placeholder"),
      el.getAttribute("name"),
      el.id,
    ]
      .filter(Boolean)
      .join(" ");
    for (const p of PURPOSE) {
      if (p.re.test(hint) && !p.want.test(el.getAttribute("autocomplete") || "")) {
        if (autocompleteIssues.length < 6) autocompleteIssues.push(`${label(el)} — ${p.field} بلا autocomplete مناسب (المقاس ${el.getAttribute("autocomplete") || "غائب"})`);
      }
    }
  }

  /* E) تناقض الإلزام */
  const requiredIssues = [];
  for (const el of controls) {
    const htmlReq = el.hasAttribute("required");
    const ariaReq = el.getAttribute("aria-required");
    if (ariaReq === "true" && !htmlReq && el.tagName !== "INPUT" && requiredIssues.length < 4) {
      requiredIssues.push(`${label(el)}: aria-required=true بلا required (مقبول لكن يمنع التحقق الأصلي)`);
    }
    if (ariaReq === "false" && htmlReq && requiredIssues.length < 4) {
      requiredIssues.push(`${label(el)}: required في HTML وaria-required=false — تناقض`);
    }
  }

  /* F) aria-invalid بلا شرح */
  const invalidIssues = [];
  for (const el of document.querySelectorAll("[aria-invalid='true']")) {
    const described = el.getAttribute("aria-describedby");
    const hasText = described && described.split(/\s+/).some((id) => (document.getElementById(id)?.textContent || "").trim());
    if (!hasText && invalidIssues.length < 4) invalidIssues.push(label(el));
  }

  /* G) مناطق حيّة مخفية */
  const hiddenLive = [];
  for (const el of document.querySelectorAll("[aria-live]:not([aria-live='off']), [role='alert'], [role='status']")) {
    if (el.closest("[aria-hidden='true'],[inert]") && hiddenLive.length < 4) hiddenLive.push(label(el));
  }

  /* H) سلامة مجموعات الاختيار الواحد (radiogroup) */
  const radioGroupIssues = [];
  const groups = [...document.querySelectorAll("[role='radiogroup']")].filter(visible);
  const ownRadios = (g) =>
    [...g.querySelectorAll("[role='radio']")].filter((r) => r.closest("[role='radiogroup']") === g);
  for (const g of groups) {
    const named =
      (g.getAttribute("aria-label") || "").trim() ||
      (g.getAttribute("aria-labelledby") || "")
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .trim() ||
      (g.closest("fieldset")?.querySelector("legend")?.textContent || "").trim();
    if (!named && radioGroupIssues.length < 6) radioGroupIssues.push(`${label(g)}: مجموعة بلا اسم`);
    const radios = ownRadios(g);
    if (radios.length < 2 && radioGroupIssues.length < 6) {
      radioGroupIssues.push(`${label(g)}: role=radiogroup بـ${radios.length} radio فقط`);
    }
    for (const r of radios) {
      if (!r.hasAttribute("aria-checked") && radioGroupIssues.length < 6) {
        radioGroupIssues.push(`${label(r)}: radio بلا aria-checked`);
      }
      const rname = (r.getAttribute("aria-label") || "").trim() || (r.textContent || "").trim();
      if (!rname && radioGroupIssues.length < 6) radioGroupIssues.push(`${label(r)}: radio بلا اسم`);
    }
  }
  /* أسماء المجموعات المكررة: ثلاث مجموعات باسم «كبسولة سريعة:» لا تُميَّز عند
     التنقّل بقارئ الشاشة (يلزم أن يكون اسم كل مجموعة فريداً في الصفحة). */
  const nameCount = new Map();
  for (const g of groups) {
    const n =
      (g.getAttribute("aria-label") || "").trim() ||
      (g.getAttribute("aria-labelledby") || "")
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .trim();
    if (n) nameCount.set(n, (nameCount.get(n) || 0) + 1);
  }
  for (const [n, c] of nameCount) {
    if (c > 1 && radioGroupIssues.length < 6) radioGroupIssues.push(`${c} مجموعات بالاسم نفسه «${n.slice(0, 40)}»`);
  }

  for (const r of document.querySelectorAll("[role='radio']")) {
    if (!r.closest("[role='radiogroup']") && radioGroupIssues.length < 6) {
      radioGroupIssues.push(`${label(r)}: radio خارج أي radiogroup`);
    }
  }

  /* I) تنقّل الأسهم الفعلي: التركيز ثم ArrowDown يجب أن ينقل التركيز ويختار */
  const keyboardIssues = [];
  for (const g of groups.slice(0, 3)) {
    const radios = ownRadios(g).filter((r) => !r.disabled && r.getAttribute("aria-disabled") !== "true");
    if (radios.length < 2) continue;
    radios[0].focus();
    radios[0].dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true, cancelable: true }));
    const moved = document.activeElement !== radios[0] && document.activeElement?.getAttribute("role") === "radio";
    // React يُثبّت تحديث الحالة بعد انتهاء الحدث، فننتظر دورة تحديث قبل قراءة aria-checked.
    if (moved) await new Promise((r) => setTimeout(r, 80));
    if (!moved && keyboardIssues.length < 3) keyboardIssues.push(`${label(g)}: ArrowDown لم ينقل التركيز`);
    else if (moved && document.activeElement.getAttribute("aria-checked") !== "true" && keyboardIssues.length < 3) {
      keyboardIssues.push(`${label(document.activeElement)}: التركيز انتقل بلا اختيار (Selection follows focus)`);
    }
    radios[0].blur();
  }

  return {
    controls: controls.length,
    forms: document.querySelectorAll("form").length,
    radioGroups: groups.length,
    radios: document.querySelectorAll("[role='radio']").length,
    liveRegions: document.querySelectorAll("[aria-live]:not([aria-live='off']), [role='alert'], [role='status']").length,
    brokenRefs,
    unnamed,
    implicitSubmit,
    autocompleteIssues,
    requiredIssues,
    invalidIssues,
    hiddenLive,
    radioGroupIssues,
    keyboardIssues,
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
  if (FAULT === "radios") {
    // تحكّم سلبي: منع وصول keydown إلى معالج React ⇒ الفحص I يجب أن يفشل.
    await page.evaluateOnNewDocument(() => {
      document.addEventListener("keydown", (e) => e.stopPropagation(), true);
    });
  }
  const issues = [];
  const record = { route, controls: 0, forms: 0, liveRegions: 0, radioGroups: 0, radios: 0, issues };
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });
    await new Promise((r) => setTimeout(r, 800));
    const res = await page.evaluate(inspectForms);
    Object.assign(record, res);
    record.issues = issues;

    if (res.brokenRefs.length) issues.push(`مراجع مكسورة: ${res.brokenRefs.join(" | ")}`);
    if (res.unnamed.length) issues.push(`حقول بلا اسم: ${res.unnamed.join(" | ")}`);
    if (res.implicitSubmit.length) issues.push(`أزرار بلا type داخل نموذج: ${res.implicitSubmit.join(" | ")}`);
    if (res.autocompleteIssues.length) issues.push(`autocomplete ناقص: ${res.autocompleteIssues.join(" | ")}`);
    if (res.requiredIssues.length) issues.push(`إلزام غير متسق: ${res.requiredIssues.join(" | ")}`);
    if (res.invalidIssues.length) issues.push(`aria-invalid بلا شرح: ${res.invalidIssues.join(" | ")}`);
    if (res.hiddenLive.length) issues.push(`منطقة حيّة مخفية: ${res.hiddenLive.join(" | ")}`);
    if (res.radioGroupIssues.length) issues.push(`مجموعة اختيار غير سليمة: ${res.radioGroupIssues.join(" | ")}`);
    if (res.keyboardIssues.length) issues.push(`تنقّل أسهم معطّل: ${res.keyboardIssues.join(" | ")}`);
  } catch (e) {
    issues.push("NAV " + e.message.slice(0, 100));
  }
  await page.close();
  out.push(record);
  if (VERBOSE) console.log(route, `controls=${record.controls} forms=${record.forms}`, issues.length ? "❌ " + issues.join(" ; ") : "✅");
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const bad = out.filter((x) => x.issues.length);
console.log("PAGES", out.length, "WITH_ISSUES", bad.length);
console.log("CONTROLS", out.reduce((a, x) => a + (x.controls || 0), 0), "FORMS", out.reduce((a, x) => a + (x.forms || 0), 0));
console.log("RADIOGROUPS", out.reduce((a, x) => a + (x.radioGroups || 0), 0), "RADIOS", out.reduce((a, x) => a + (x.radios || 0), 0));
for (const b of bad.slice(0, 60)) console.log(b.route, "|", b.issues.slice(0, 3).join(" ; "));
