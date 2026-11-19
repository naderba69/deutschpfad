/**
 * audit-axtree.mjs — الجولة الثامنة عشرة: شجرة الوصول (Accessibility Tree)
 * (1.1.1 · 1.3.1 · 2.4.3 · 2.4.4 · 2.4.6 · 4.1.2 · 4.1.3)
 *
 * الجولات 2–17 قِسْنَ DOM والسلوك. أما ما يستقبله قارئ الشاشة فعلياً فهو
 * **شجرة الوصول** التي يحسبها المتصفح: الأدوار المحسوبة، والأسماء المحسوبة
 * (label/labelledby/alt)، والاستثناءات (aria-hidden/display:none)، والحالات.
 * سلوك DOM قد يبدو صحيحاً والعقدة المحسوبة تنقص — وهذا ما لا تكشفه أدوات
 * الجولات السابقة (لم يستخدم أي سكربت في المستودع `Accessibility.*` قبل هذه).
 *
 * هذه الجولة أداة قياس لا اختبار بشري: لا تُحاكي NVDA/VoiceOver (قيد معلن
 * في تقرير الجولة 17 §9) بل تقيس ما يسلّمه المتصفح إليها.
 *
 *   A1) الأدوار التفاعلية بلا اسم محسوب — role ∈ {button, link, checkbox,
 *       radio, combobox, menuitem*, option, spinbutton, slider, switch, tab,
 *       textbox, searchbox, treeitem, heading, progressbar} و `name` فارغ
 *       بعد التقطيع (4.1.2 · 2.4.4 · 2.4.6).
 *   A2) عقدة قابلة للتركيز بدور بلا معنى (generic/none/فارغ): التركيز يصل
 *       إليها والقارئ لا يوصفها (4.1.2 · 2.4.3).
 *   A3) صورة/رسم (image/graphic-*) بلا اسم، ما لم يكن داخل عنصر تفاعلي
 *       مسمّى (اسمه يُقرأ مكانه) (1.1.1).
 *   A4) البنية: listitem بلا أب list · row بلا أب table/grid/treegrid/rowgroup
 *       · cell/columnheader/rowheader بلا أب row · قفزة مستوى عنوان >1 في
 *       ترتيب الشجرة (1.3.1 · 2.4.6).
 *   A5) جدول DOM ظاهر فقد معناه في الشجرة: دوره المحسوب ليس table/grid/treegrid
 *       (مثل display:block ⇒ LayoutTable) أو وجود <tr> بلا أي عقدة row (1.3.1).
 *   A6) منطقة حيّة ظاهرة (role=alert/status/log أو aria-live) لا تظهر في
 *       الشجرة بدورها/خاصية live — يُستثنى ما هو aria-hidden/inert/m-none
 *       (4.1.3 · 4.1.2). لا حقن عيب لهذه الفحص: المتصفح يكشف ما هو ظاهر
 *       دائماً، ويُستدل على السلوك عبر `e2e/axtree.spec.ts`.
 *   A7) حالة ARIA معلَنة (aria-checked/pressed/expanded/selected/required/
 *       disabled/readonly/invalid) بقيمة «صحيح» لا تظهر في الشجرة بقيمتها —
 *       إمّا لأن الدور لا يدعمها (فيُهمَلها المتصفح) أو لأن القيمة اختفت
 *       (4.1.2). `aria-current` خارج هذا الفحص: هذا بناء Chromium لا يعرضه
 *       كخاصية شجرة (مُقاس ومُوثَّق في التقرير §القيود).
 *
 * الاستخدام: node scripts/audit-axtree.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_VIEWPORT
 *          AUDIT_THEME=light|dark
 *          AUDIT_FAULT=noname|focusgeneric|imgname|listitem|heading|table|statebad
 *          (مع الفحص المتوقع: يُطبع FAULT-CHECK ويُرجع الخروج 1 إن لم يُكتشف)
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/axtree.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";
const THEME = process.env.AUDIT_THEME || "light";
const [VW, VH] = (process.env.AUDIT_VIEWPORT || "1280x900").split("x").map(Number);

/** الأدوار التي تتطلب اسماً محسوباً (A1) */
const NAMED_ROLES = new Set([
  "button", "link", "checkbox", "radio", "combobox", "menuitem", "menuitemcheckbox",
  "menuitemradio", "option", "spinbutton", "slider", "switch", "tab", "textbox",
  "searchbox", "treeitem", "heading", "progressbar",
]);
/** الأدوار التفاعلية التي يُكتفى باسمها عند وجود صورة داخلها (A3) */
const CONTROL_ROLES = new Set([
  "button", "link", "checkbox", "radio", "combobox", "menuitem", "menuitemcheckbox",
  "menuitemradio", "option", "spinbutton", "slider", "switch", "tab", "textbox",
  "searchbox", "treeitem",
]);
/** أدوار A7: الخاصية المعلَنة ↔ خاصية الشجرة */
const STATE_ATTRS = {
  "aria-checked": "checked",
  "aria-pressed": "pressed",
  "aria-expanded": "expanded",
  "aria-selected": "selected",
  "aria-required": "required",
  "aria-disabled": "disabled",
  "aria-readonly": "readonly",
  "aria-invalid": "invalid",
};
/** الفحص المتوقع لكل حقن (A6 بلا حقن — راجع التوثيق) */
const FAULT_EXPECT = {
  noname: "A1",
  focusgeneric: "A2",
  imgname: "A3",
  listitem: "A4a",
  heading: "A4d",
  table: "A5",
  statebad: "A7",
};

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

/** حقن عيب قابل للاكتشاف — العناصر تُوضع خارج الشاشة (ليست display:none)
 *  وإلا أُهمِلت من الشجرة ولم يُكتشف العيب. */
async function injectFault(page, fault) {
  await page.evaluate((f) => {
    const off = "position:absolute;left:-9999px;top:0;";
    /* نُلحق الغلاف نفسه (يحمل كل العناصر) — أخذ أول عنصر فقط أفقد حقناً حرفياً */
    const mk = (html, style) => {
      const wrap = document.createElement("div");
      if (style) wrap.setAttribute("style", style);
      wrap.innerHTML = html;
      document.body.appendChild(wrap);
    };
    if (f === "noname") {
      document.body.insertAdjacentHTML("beforeend", '<button id="axf-noname"></button><a id="axf-noname2" href="/about"></a>');
    }
    if (f === "focusgeneric") {
      mk('<div id="axf-focus" tabindex="0">منطقة بتركيز بلا دور</div>');
    }
    if (f === "imgname") {
      mk('<svg id="axf-img" role="img" width="24" height="24"></svg>', off);
    }
    if (f === "listitem") {
      /* div role=listitem بلا قائمة يُصحَّحه المتصفح إلى generic، أما <li>
       * خارج list فيبقى listitem بدوره فيتحوّل الفحص إلى كشف الأب الغلط */
      mk('<li id="axf-li">عنصر بلا قائمة</li>', off);
    }
    if (f === "heading") {
      mk('<h2 id="axf-h2">عنوان فحص</h2><h4 id="axf-h4">قفزة مستوى</h4>', off);
    }
    if (f === "table") {
      mk('<table id="axf-tbl" role="none"><tr><td>جدول بلا معنى</td></tr></table>', off);
    }
    if (f === "statebad") {
      mk('<span id="axf-state" aria-expanded="true" aria-pressed="true">حالة مرفوضة</span>', off);
    }
  }, fault);
}

/** مسار CSS للتشخيص — يُشغَّل داخل الصفحة على عقدة محددة */
const PATH_FN = `function () {
  function path(el) {
    if (!el || el.nodeType !== 1) return "?";
    const parts = [];
    while (el && el.nodeType === 1 && parts.length < 6) {
      let sel = el.tagName.toLowerCase();
      if (el.id) { sel += "#" + CSS.escape(el.id); parts.unshift(sel); break; }
      const p = el.parentElement;
      if (p) {
        const sibs = [...p.children].filter((c) => c.tagName === el.tagName);
        if (sibs.length > 1) sel += ":nth-of-type(" + (sibs.indexOf(el) + 1) + ")";
      }
      parts.unshift(sel);
      el = p;
    }
    return parts.join(" > ");
  }
  return { sel: path(this), html: (this.outerHTML || "").replace(/\\s+/g, " ").slice(0, 160) };
}`;

/** يقيس شجرة الوصول لصفحة واحدة ويعيد المؤشرات A1–A7 */
async function measureAX(client, frameId) {
  const { nodes } = await client.send("Accessibility.getFullAXTree", { frameId });
  const byId = new Map();
  for (const n of nodes) byId.set(n.nodeId, n);
  const root = nodes.find((n) => n.role?.value === "RootWebArea");

  const propOf = (n, name) => (n.properties || []).find((p) => p.name === name)?.value?.value;

  /** أقرب أب غير مُهمَل — المتصفح يُهمِل عقداً وسيطة (مثل tbody بحجة
   *  «uninteresting») ويعيد توزيع أبنائها على الأصل غير المُهمَل في شجرة
   *  المنصة التي تصلها أدوات القراءة، فالأب الصالح للتقييم هو أول غير مُهمَل. */
  const visibleParent = (n) => {
    let p = byId.get(n.parentId);
    let hops = 0;
    while (p && p.ignored && hops < 30) {
      p = byId.get(p.parentId);
      hops += 1;
    }
    return p;
  };

  const issues = { A1: [], A2: [], A3: [], A4a: [], A4b: [], A4c: [], A4d: [], A5: [], A6: [], A7: [] };
  const m = {
    focusable: 0, interactive: 0, unnamed: 0, images: 0, imageNoAncestor: 0,
    headings: 0, firstHeading: 0, skips: 0, listitems: 0, rows: 0, cells: 0,
    tables: 0, tablesChecked: 0, liveChecked: 0, stateChecked: 0,
    tableIds: [],
  };

  /* ═══ A1 · A2 · A3 · A4 من الشجرة الكاملة ═══ */
  for (const n of nodes) {
    if (n.ignored) continue;
    const role = n.role?.value || "";
    const name = String(n.name?.value ?? "").trim();
    const focusable = propOf(n, "focusable") === true;
    if (focusable) m.focusable += 1;

    /* A1 */
    if (NAMED_ROLES.has(role)) {
      m.interactive += 1;
      if (!name) {
        m.unnamed += 1;
        if (issues.A1.length < 6) issues.A1.push({ role, backendNodeId: n.backendDOMNodeId });
      }
    }
    /* A2 */
    if (focusable && (role === "generic" || role === "none" || role === "")) {
      if (issues.A2.length < 6) issues.A2.push({ role: role || "(فارغ)", backendNodeId: n.backendDOMNodeId });
    }
    /* A3 */
    if (role === "image" || /^graphic/i.test(role)) {
      m.images += 1;
      if (!name) {
        /* داخل عنصر تفاعلي مسمّى؟ اصعد بالأب */
        let p = byId.get(n.parentId);
        let inNamedControl = false;
        let hops = 0;
        while (p && hops < 25) {
          const pr = p.role?.value || "";
          if (CONTROL_ROLES.has(pr)) {
            if (String(p.name?.value ?? "").trim()) inNamedControl = true;
            break;
          }
          if (pr === "RootWebArea") break;
          p = byId.get(p.parentId);
          hops += 1;
        }
        if (!inNamedControl) {
          m.imageNoAncestor += 1;
          if (issues.A3.length < 6) issues.A3.push({ role, backendNodeId: n.backendDOMNodeId });
        }
      }
    }
    /* A4a */
    if (role === "listitem") {
      m.listitems += 1;
      const parent = visibleParent(n);
      const pr = parent?.role?.value || "";
      if (pr !== "list" && pr !== "group") {
        if (issues.A4a.length < 6) issues.A4a.push({ parentRole: pr || "(بلا أب)", backendNodeId: n.backendDOMNodeId });
      }
    }
    /* A4b */
    if (role === "row") {
      m.rows += 1;
      const parent = visibleParent(n);
      const pr = parent?.role?.value || "";
      if (!["table", "grid", "treegrid", "rowgroup"].includes(pr)) {
        if (issues.A4b.length < 6) issues.A4b.push({ parentRole: pr || "(بلا أب)", backendNodeId: n.backendDOMNodeId });
      }
    }
    /* A4c */
    if (["cell", "columnheader", "rowheader"].includes(role)) {
      m.cells += 1;
      const parent = visibleParent(n);
      const pr = parent?.role?.value || "";
      if (pr !== "row") {
        if (issues.A4c.length < 6) issues.A4c.push({ role, parentRole: pr || "(بلا أب)", backendNodeId: n.backendDOMNodeId });
      }
    }
  }

  /* A4d — تسلسل العناوين بترتيب الشجرة (DFS من الجذر عبر childIds) */
  const headingSeq = [];
  const walk = (n) => {
    if (!n) return;
    if (!n.ignored && n.role?.value === "heading") {
      headingSeq.push({ level: Number(propOf(n, "level")) || 0, backendNodeId: n.backendDOMNodeId });
    }
    for (const cid of n.childIds || []) walk(byId.get(cid));
  };
  walk(root);
  m.headings = headingSeq.length;
  m.firstHeading = headingSeq[0]?.level || 0;
  let prev = 0;
  for (const h of headingSeq) {
    if (prev && h.level - prev > 1) {
      m.skips += 1;
      if (issues.A4d.length < 6) issues.A4d.push({ from: prev, to: h.level, backendNodeId: h.backendNodeId });
    }
    if (h.level) prev = h.level;
  }

  /* ═══ A5 — جداول DOM: هل بقي دورها في الشجرة؟ ═══ */
  const domTables = await client.send("Runtime.evaluate", {
    expression: `JSON.stringify([...document.querySelectorAll('table,[role="table"],[role="grid"],[role="treegrid"]')].map((el,i)=>{
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const visible = cs.display !== "none" && cs.visibility !== "hidden" && !el.closest('[aria-hidden="true"],[inert],[hidden]');
      const hasRows = el.querySelectorAll("tr,[role=row]").length;
      return {i, visible, hasRows, tag: el.tagName.toLowerCase()};
    }))`,
    returnByValue: true,
  });
  const tableList = JSON.parse(domTables.result.value || "[]");
  m.tables = tableList.filter((t) => t.visible).length;
  const treeByBackend = new Map();
  for (const n of nodes) if (n.backendDOMNodeId) treeByBackend.set(n.backendDOMNodeId, n);
  for (const t of tableList) {
    if (!t.visible) continue;
    m.tablesChecked += 1;
    const { result } = await client.send("Runtime.evaluate", {
      expression: `document.querySelectorAll('table,[role="table"],[role="grid"],[role="treegrid"]')[${t.i}]`,
    });
    if (!result?.objectId) continue;
    let backendId = null;
    try {
      const desc = await client.send("DOM.describeNode", { objectId: result.objectId });
      backendId = desc.node.backendNodeId;
    } catch {
      /* تجاهل */
    }
    await client.send("Runtime.releaseObject", { objectId: result.objectId }).catch(() => {});
    if (backendId == null) continue;
    m.tableIds.push(backendId);
    const axNode = treeByBackend.get(backendId);
    const axRole = axNode && !axNode.ignored ? axNode.role?.value : null;
    if (!axNode || !["table", "grid", "treegrid"].includes(axRole || "")) {
      if (issues.A5.length < 6)
        issues.A5.push({ tag: t.tag, axRole: axRole || (axNode ? "ignored" : "غير في الشجرة"), backendNodeId: backendId });
      continue;
    }
    /* وجود صفوف في DOM بلا أي عقدة row في الشجرة */
    if (t.hasRows > 0) {
      let hasRow = false;
      const sub = (n) => {
        if (!n || hasRow) return;
        if (n.role?.value === "row") { hasRow = true; return; }
        for (const cid of n.childIds || []) sub(byId.get(cid));
      };
      sub(axNode);
      if (!hasRow && issues.A5.length < 6)
        issues.A5.push({ tag: t.tag, axRole: axRole, note: `DOM ${t.hasRows} tr بلا row في الشجرة`, backendNodeId: backendId });
    }
  }

  /* ═══ A6 · A7 — عناصر DOM ظاهرة ↔ العقدة المحسوبة (nodeId عبر DOM.querySelectorAll) ═══ */
  await client.send("DOM.enable");
  const { root: domRoot } = await client.send("DOM.getDocument", { depth: 0 });
  if (!domRoot) throw new Error("DOM.getDocument بلا جذر");
  /** يجمع عناصر محددة (بترتيب وثاثي مستند) ويزور العقدة المحسوبة لكل ظاهر منها.
   *  dataExpr تعبير JS يستخدم `el` ويعيد بيانات قابلة للتسلسل. */
  const partialBySelector = async (selector, dataExpr, inspect) => {
    const evalRes = await client.send("Runtime.evaluate", {
      expression: `JSON.stringify([...document.querySelectorAll(${JSON.stringify(selector)})].map((el)=>{
        const cs = getComputedStyle(el);
        const visible = cs.display !== "none" && cs.visibility !== "hidden" && !el.closest('[aria-hidden="true"],[inert],[hidden]');
        return {visible, data: (${dataExpr})};
      }))`,
      returnByValue: true,
    });
    let list = [];
    try { list = JSON.parse(evalRes.result.value || "[]"); } catch { list = []; }
    if (!list.length) return 0;
    const q = await client.send("DOM.querySelectorAll", { nodeId: domRoot.nodeId, selector });
    if (q.nodeIds.length !== list.length) {
      /* تغيّر في DOM بين القياسين — لا تُحاذاة خاطئة، تُتخطى الصفحة وتفتح الخلل */
      m.races = (m.races || 0) + 1;
      return 1;
    }
    for (let i = 0; i < list.length; i++) {
      if (!list[i].visible) continue;
      const nodeId = q.nodeIds[i];
      if (nodeId == null) continue;
      const res = await client.send("Accessibility.getPartialAXTree", { nodeId, fetchRelatives: false });
      const part = res.nodes.find((p) => !p.ignored) || res.nodes[0];
      await inspect(list[i].data, part);
    }
    return 0;
  };

  /* A6a — أدوار حيّة صريحة */
  m.races = 0;
  await partialBySelector('[role="alert"],[role="status"],[role="log"]', `el.getAttribute("role")`, (declared, part) => {
    m.liveChecked += 1;
    const axRole = part?.role?.value;
    if (!part || part.ignored || axRole !== declared) {
      if (issues.A6.length < 6) issues.A6.push({ kind: "role", declared, axRole: part ? (part.ignored ? "ignored" : axRole) : "غير موجودة" });
    }
  });
  /* A6b — aria-live بلا دور صريح */
  await partialBySelector('[aria-live]:not([aria-live="off"])', `el.getAttribute("aria-live")`, (declared, part) => {
    if (!declared) return; /* aria-live فارغ — لا قيمة إعلانية معلَنة */
    m.liveChecked += 1;
    const axLive = part ? propOf(part, "live") : undefined;
    if (!part || part.ignored || !axLive) {
      if (issues.A6.length < 6) issues.A6.push({ kind: "live", declared, axLive: axLive ?? "غير موجودة" });
    }
  });

  /* A7 — حالات معلَنة بقيمة صحيحة ↔ خاصية الشجرة */
  const A7_SEL = Object.keys(STATE_ATTRS).map((a) => `[${a}]`).join(",");
  const A7_EXPR = `(() => {
    const attr = ${JSON.stringify(Object.keys(STATE_ATTRS))}.find((a) => el.hasAttribute(a));
    return attr ? {attr, value: el.getAttribute(attr)} : null;
  })()`;
  await partialBySelector(A7_SEL, A7_EXPR, (data, part) => {
    if (!data) return;
    const { attr, value } = data;
    const trueish = value !== "false" && value !== "off" && value !== "";
    if (!trueish) return; /* «false» ≈ غياب — لا يُحتسب خروجاً */
    m.stateChecked += 1;
    const axProp = STATE_ATTRS[attr];
    let axVal = part ? propOf(part, axProp) : undefined;
    if (axVal === undefined) axVal = false;
    const domBool = value === "true" ? true : value === "mixed" ? "mixed" : value;
    const same =
      typeof axVal === "boolean"
        ? axVal === (domBool === true)
        : String(axVal) === String(domBool);
    if (!part || part.ignored || !same) {
      if (issues.A7.length < 6)
        issues.A7.push({ attr, declared: value, axValue: part ? (part.ignored ? "ignored" : String(axVal)) : "غير موجودة" });
    }
  });

  return { issues, m };
}

/** دمج لقطات الصفحة (الحالة الافتراضية + كل تبويب): المشاكل اتحاد، والعدادات
 *  أقصى قيمة في أي حالة (نمط الجولة8)، والجداول اتحاد معرّفات لا يضيّع تبويباً. */
function mergeShots(shots) {
  const codes = new Set(shots.flatMap((s) => Object.keys(s.issues)));
  const issues = {};
  for (const code of codes) {
    const seen = new Set();
    const list = [];
    for (const s of shots) {
      for (const item of s.issues[code] || []) {
        const key = item.sel || item.html || JSON.stringify(item);
        if (seen.has(key)) continue;
        seen.add(key);
        if (list.length < 6) list.push(item);
      }
    }
    if (list.length) issues[code] = list;
  }
  const m = {};
  for (const k of new Set(shots.flatMap((s) => Object.keys(s.m)))) {
    if (k === "tableIds" || k === "firstHeading") continue;
    m[k] = Math.max(...shots.map((s) => Number(s.m[k]) || 0));
  }
  const ids = new Set(shots.flatMap((s) => s.m.tableIds || []));
  m.tables = ids.size;
  m.tablesChecked = ids.size;
  m.firstHeading = shots[0].m.firstHeading || 0;
  return { issues, m };
}

/* ══════════════ التشغيل ══════════════ */
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
  await page.setViewport({ width: VW, height: VH, deviceScaleFactor: 1 });
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: THEME }]);
  await page.evaluateOnNewDocument((t) => {
    try { localStorage.setItem("theme", t); } catch { /* ignore */ }
  }, THEME);

  const record = { route, theme: THEME, viewport: `${VW}x${VH}`, issues: [] };
  let client = null;
  try {
    await page.goto(BASE + route, { waitUntil: "networkidle2", timeout: 45000 });

    /* في الدروس: مفتاح الخطوة يفتح تبويب «الشرح» (نمط الجولة8) */
    if (route.startsWith("/lesson/")) {
      const theoryIdx = await page.evaluate(() =>
        [...document.querySelectorAll("[role='tab']")].findIndex((t) => t.textContent.trim() === "الشرح"),
      );
      if (theoryIdx > 0) {
        const lessonId = route.split("/").filter(Boolean).pop();
        await page.evaluate(
          ([id, idx]) => {
            try { localStorage.setItem(`lesson-step:${id}`, String(idx)); } catch { /* ignore */ }
          },
          [lessonId, theoryIdx],
        );
        await page.reload({ waitUntil: "networkidle2", timeout: 45000 });
      }
    }
    const doReveal = async () => {
      await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
      await new Promise((r) => setTimeout(r, 250));
      /* إفصاحات الأزرار (أزرار «جدول…» + توسيعات بلا قوائم/حوارات) — الجولة8 */
      const revealed = await page.evaluate(() => {
        let n = 0;
        for (const el of document.querySelectorAll("#lesson-step-content button, main button")) {
          if (!/جدول/.test(el.textContent || "")) continue;
          const r = el.getBoundingClientRect();
          if (r.width < 1 || r.height < 1) continue;
          el.click();
          n += 1;
          if (n >= 12) break;
        }
        for (const el of document.querySelectorAll("button[aria-expanded='false']:not([aria-haspopup])")) {
          const r = el.getBoundingClientRect();
          if (r.width < 1 || r.height < 1) continue;
          if (n >= 12) break;
          el.click();
          n += 1;
        }
        return n;
      });
      if (revealed) await new Promise((r) => setTimeout(r, 400));
    };
    await doReveal();
    if (FAULT) await injectFault(page, FAULT);

    client = await page.createCDPSession();
    const { frameTree } = await client.send("Page.getFrameTree");
    const frameId = frameTree.frame.id;

    /* لقطات: الحالة الافتراضية ثم كل تبويب — التبويب يستبدل المحتوى فلا يكفي
       الضغط كلها ثم قياس واحد (درس الجولة8). */
    /* «عرض الكل»: التحكم نفسه الذي يستخدمه المستخدم — يعرض كل أقسام الدرس
       دفعة واحدة (الوضع الافتراضي يعرض قسماً واحداً فقط، وتبويبات الأقسام
       معطّلة عمداً «لا تخطي في المسار»). */
    const showAll = await page.evaluate(() => {
      const btn = [...document.querySelectorAll("button")].find(
        (b) => (b.textContent || "").trim() === "عرض الكل" && b.getBoundingClientRect().width > 0,
      );
      if (!btn) return false;
      btn.click();
      return true;
    });
    if (showAll) {
      await new Promise((r) => setTimeout(r, 500));
      /* إعادة الإفصاح على الشجرة الجديدة (إعادة الرسم تُعيد الأقسام المقفلة) */
      await doReveal();
    }

    const shots = [await measureAX(client, frameId)];
    /* تبويبات المحتوى («تفاصيل الشرح» وأشباهها) — التبويب يستبدل محتواه فلا يكفي
       الضغط كلها ثم قياس واحد (درس الجولة8). شريط «أقسام الدرس» مستثنى:
       تغييره للتنقّل لا للمحتوى. الحد 8 لضبط زمن كل صفحة. */
    const seen = await page.evaluate(() => {
      const keyOf = (t) => {
        const strip = t.closest("[role=tablist]");
        const strips = [...document.querySelectorAll("[role=tablist]")];
        const si = strip ? strips.indexOf(strip) : -1;
        const ti = strip ? [...strip.querySelectorAll("[role=tab]")].indexOf(t) : -1;
        return `${si}:${ti}:${(t.textContent || "").trim()}`;
      };
      return [...document.querySelectorAll("[role='tab']")]
        .filter((t) => {
          const strip = t.closest("[role=tablist]");
          if (strip && strip.getAttribute("aria-label") === "أقسام الدرس") return false;
          return t.getAttribute("aria-selected") === "true";
        })
        .map(keyOf);
    });
    for (let i = 0; i < 8; i += 1) {
      const key = await page.evaluate((seenKeys) => {
        const keyOf = (t) => {
          const strip = t.closest("[role=tablist]");
          const strips = [...document.querySelectorAll("[role=tablist]")];
          const si = strip ? strips.indexOf(strip) : -1;
          const ti = strip ? [...strip.querySelectorAll("[role=tab]")].indexOf(t) : -1;
          return `${si}:${ti}:${(t.textContent || "").trim()}`;
        };
        const target = [...document.querySelectorAll("[role='tab']")].find((t) => {
          const strip = t.closest("[role=tablist]");
          if (strip && strip.getAttribute("aria-label") === "أقسام الدرس") return false;
          const r = t.getBoundingClientRect();
          if (r.width < 1 || r.height < 1) return false;
          if (t.disabled || t.getAttribute("aria-selected") === "true") return false;
          return !seenKeys.includes(keyOf(t));
        });
        if (!target) return null;
        target.click();
        return keyOf(target);
      }, seen);
      if (!key) break;
      seen.push(key);
      await new Promise((r) => setTimeout(r, 300));
      shots.push(await measureAX(client, frameId));
    }
    record.shots = shots.length;
    record.showAll = showAll;

    const { issues, m } = mergeShots(shots);
    Object.assign(record, m);

    /* تشخيص: مسار CSS لكل عقدة معلَنة (بحد أقصى 6 لكل فحص) */
    for (const [code, list] of Object.entries(issues)) {
      for (const item of list) {
        if (item.backendNodeId == null) continue;
        try {
          const { object } = await client.send("DOM.resolveNode", { backendNodeId: item.backendNodeId });
          const res = await client.send("Runtime.callFunctionOn", {
            objectId: object.objectId,
            functionDeclaration: PATH_FN,
            returnByValue: true,
          });
          item.sel = res.result.value?.sel;
          item.html = res.result.value?.html;
          await client.send("Runtime.releaseObject", { objectId: object.objectId }).catch(() => {});
        } catch {
          item.sel = "(تعذّر تحديد الموقع)";
        }
        delete item.backendNodeId;
      }
      if (list.length) record.issues.push({ code, items: list });
    }
    if (VERBOSE && record.issues.length) {
      console.log(route, JSON.stringify(record.issues).slice(0, 400));
    }
  } catch (err) {
    record.error = String(err.message || err).slice(0, 160);
  }
  out.push(record);
  if (client) await client.detach().catch(() => {});
  await Promise.race([page.close().catch(() => {}), new Promise((r) => setTimeout(r, 4000))]);
}

await browser.close();
fs.writeFileSync(OUT, JSON.stringify(out, null, 1));

const withIssues = out.filter((r) => r.issues.length || r.error);
const count = (code) => out.filter((r) => r.issues.some((i) => i.code === code)).length;
const sum = (k) => out.reduce((a, r) => a + (r[k] || 0), 0);
const totals = {
  pages: out.length,
  withIssues: withIssues.length,
  errors: out.filter((r) => r.error).length,
  a1: count("A1"), a2: count("A2"), a3: count("A3"),
  a4a: count("A4a"), a4b: count("A4b"), a4c: count("A4c"), a4d: count("A4d"),
  a5: count("A5"), a6: count("A6"), a7: count("A7"),
  focusable: sum("focusable"), interactive: sum("interactive"), unnamed: sum("unnamed"),
  images: sum("images"), imageNoAncestor: sum("imageNoAncestor"),
  headings: sum("headings"), skips: sum("skips"), noH1: out.filter((r) => r.headings > 0 && r.firstHeading !== 1).length,
  listitems: sum("listitems"), rows: sum("rows"), cells: sum("cells"),
  tables: sum("tables"), tablesChecked: sum("tablesChecked"),
  live: sum("liveChecked"), states: sum("stateChecked"), races: sum("races"),
};
console.log(
  `THEME ${THEME} VIEWPORT ${VW}x${VH} PAGES ${totals.pages} WITH_ISSUES ${totals.withIssues} ERRORS ${totals.errors}` +
    ` | A1 ${totals.a1} A2 ${totals.a2} A3 ${totals.a3} A4a ${totals.a4a} A4b ${totals.a4b} A4c ${totals.a4c} A4d ${totals.a4d} A5 ${totals.a5} A6 ${totals.a6} A7 ${totals.a7}` +
    ` | FOCUSABLE ${totals.focusable} NAMED-ROLES ${totals.interactive} UNNAMED ${totals.unnamed} IMAGES ${totals.images} IMG-NO-ANCESTOR ${totals.imageNoAncestor}` +
    ` | HEADINGS ${totals.headings} SKIPS ${totals.skips} NO-H1 ${totals.noH1} LISTITEMS ${totals.listitems} ROWS ${totals.rows} CELLS ${totals.cells}` +
    ` | TABLES ${totals.tables} CHECKED ${totals.tablesChecked} LIVE ${totals.live} STATES ${totals.states} RACES ${totals.races}`,
);
for (const r of withIssues.slice(0, VERBOSE ? 60 : 12)) {
  console.log(" ·", r.route, r.error || JSON.stringify(r.issues).slice(0, 300));
}

/* تحكّم سلبي: مع AUDIT_FAULT يُشترط اكتشاف الفحص المتوقع */
if (FAULT) {
  const expected = FAULT_EXPECT[FAULT];
  const found = out.some((r) => r.issues.some((i) => i.code === expected));
  console.log(`FAULT-CHECK ${FAULT} EXPECT ${expected} ${found ? "PASS" : "FAIL"}`);
  process.exit(found ? 0 : 1);
}
