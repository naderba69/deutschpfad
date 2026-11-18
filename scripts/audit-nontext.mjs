/**
 * audit-nontext.mjs — الجولة الرابعة عشرة: التباين غير النصي ومؤشر التركيز والمحتوى عند التحويم
 * (1.4.11 · 2.4.7 · 1.4.13 · 1.3.4) — في المظهرين الفاتح والداكن.
 *
 * الجولة 2 قاست تباين **النص**؛ الجولة 3 أثبتت وجود مؤشر تركيز؛ الجولة 4 قاست
 * تباعد النص؛ ولم تقس أي جولة:
 *   S1) تباين **حدود حقول الإدخال** مع خلفيتها (1.4.11): الحدّ هو المعلومة
 *       الوحيدة التي تُعرّف بالحقل. عتبة 3:1.
 *   S2) تباين **أزرار الأيقونات** التي لا نص لها (1.4.11): لون الأيقونة مع خلفيتها.
 *   S3) تباين **مؤشرات الحالة** (أشرطة التقدم): التعبئة مقابل المسار (1.4.11).
 *   S4) **مؤشر التركيز**: وجوده (2.4.7) + تباينه ≥3:1 (1.4.11) + أنه غير مقصوص
 *       داخل حاوية `overflow:hidden` — بضغطات Tab حقيقية لا بـ`focus()`.
 *   S5) **المحتوى عند التحويم/التركيز** (1.4.13): هل التلميح قابل للإخفاء (Escape)،
 *       وقابل للتحويم عليه (يبقى مفتوحاً والمؤشر داخله)، وثابت بما يكفي للقراءة؟
 *   S6) **الاتجاه** (1.3.4): لا قفل اتجاه في CSS، والصفحة تعمل أفقياً 800×360.
 *
 * المظهر الداكن محور مستقل: الرموز (tokens) تختلف، وقد يفشل أحدهما دون الآخر.
 *
 * الاستخدام: node scripts/audit-nontext.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_VIEWPORT
 *          AUDIT_THEME=light|dark · AUDIT_FAULT=border|icon|progress|ring|tooltip
 */
import fs from "node:fs";
import zlib from "node:zlib";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/nontext.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";
const THEME = process.env.AUDIT_THEME || "light";
const [VW, VH] = (process.env.AUDIT_VIEWPORT || "360x800").split("x").map(Number);
const MAX_TABS = Number(process.env.AUDIT_MAX_TABS || 20);

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

/**
 * فك ترميز PNG (8-bit، بلا تشابك) بلا تبعيات: لقطة الشاشة هي الوسيلة الوحيدة
 * لمعرفة ما يُرسم فعلاً — Chromium يرسم حلقة تركيز داخلية لا تظهر في
 * `getComputedStyle` (تظهر أبيض 3px بينما المرسوم أزرق 2px + فراغ 2px).
 */
function decodePng(buf) {
  let off = 8;
  let width = 0;
  let height = 0;
  let colorType = 6;
  let bitDepth = 8;
  const idat = [];
  while (off < buf.length) {
    const len = buf.readUInt32BE(off);
    const type = buf.toString("ascii", off + 4, off + 8);
    const data = buf.subarray(off + 8, off + 8 + len);
    if (type === "IHDR") {
      width = data.readUInt32BE(0);
      height = data.readUInt32BE(4);
      bitDepth = data[8];
      colorType = data[9];
      if (data[12] !== 0) throw new Error("interlaced PNG غير مدعوم");
    } else if (type === "IDAT") idat.push(data);
    else if (type === "IEND") break;
    off += 12 + len;
  }
  if (bitDepth !== 8) throw new Error(`bitDepth ${bitDepth} غير مدعوم`);
  const channels = colorType === 6 ? 4 : colorType === 2 ? 3 : colorType === 0 ? 1 : 0;
  if (!channels) throw new Error(`colorType ${colorType} غير مدعوم`);
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const stride = width * channels;
  const out = Buffer.alloc(height * stride);
  let pos = 0;
  for (let y = 0; y < height; y += 1) {
    const filter = raw[pos];
    pos += 1;
    const line = raw.subarray(pos, pos + stride);
    pos += stride;
    const cur = out.subarray(y * stride, (y + 1) * stride);
    const prev = y > 0 ? out.subarray((y - 1) * stride, y * stride) : null;
    for (let x = 0; x < stride; x += 1) {
      const a = x >= channels ? cur[x - channels] : 0;
      const b = prev ? prev[x] : 0;
      const c = prev && x >= channels ? prev[x - channels] : 0;
      let v = line[x];
      if (filter === 1) v += a;
      else if (filter === 2) v += b;
      else if (filter === 3) v += (a + b) >> 1;
      else if (filter === 4) {
        const p = a + b - c;
        const pa = Math.abs(p - a);
        const pb = Math.abs(p - b);
        const pc = Math.abs(p - c);
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
      }
      cur[x] = v & 0xff;
    }
  }
  return {
    width,
    height,
    pixel(x, y) {
      const i = y * stride + x * channels;
      return {r: out[i], g: out[i + 1], b: out[i + 2]};
    },
  };
}

const relLum = (c) => {
  const f = (v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
};
const contrast = (a, b) => {
  const L1 = relLum(a);
  const L2 = relLum(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
};
const dist = (a, b) => Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b);

/**
 * يقيس مؤشر التركيز من البكسلات: على كل حافة، يمشي من 6px خارج العنصر إلى
 * 3px داخله؛ المؤشر هو لون يخالف كلاً من خلفية الصفحة ومِلء العنصر بتباين ≥3
 * ويمتد بكسلات متتالية. يُحتسب المؤشر ظاهراً إذا تحقق على حافتين على الأقل.
 */
function ringFromPixels(img, box) {
  const {left, top, width, height, pad, scale = 1} = box;
  const sample = (x, y) =>
    img.pixel(
      Math.min(img.width - 1, Math.max(0, Math.round(x))),
      Math.min(img.height - 1, Math.max(0, Math.round(y))),
    );

  /**
   * ترتيب النقاط من **خارج** الحافة إلى **داخلها** (6px خارجاً ← 3px داخلاً).
   * - خلفية الصفحة = أول بكسل خارجاً.
   * - مِلء العنصر = آخر بكسل داخلاً.
   * - «حلقة» = مقطع ≥2 بكسل يخالف الخلفية بتباين ≥3.
   * - تُحتسب مرئية إن فصله عن العنصر فراغ بلون الخلفية (offset)، أو خالف
   *   مِلء العنصر بتباين ≥3 (حلقة داخلية).
   */
  const between = (c, a, b, tol = 12) => {
    const ok = (v, x, y) => v >= Math.min(x, y) - tol && v <= Math.max(x, y) + tol;
    return ok(c.r, a.r, b.r) && ok(c.g, a.g, b.g) && ok(c.b, a.b, b.b);
  };

  const scan = (points) => {
    const colors = points.map((p) => sample(p.x, p.y));
    const back = colors[0];
    const fill = colors[colors.length - 1];
    let best = 0;
    let found = false;
    for (let i = 1; i < colors.length - 1; i += 1) {
      const vsBack = contrast(colors[i], back);
      if (vsBack < 3) continue;
      /* فراغ بلون الخلفية بين البكسل والعنصر ⇒ حلقة منفصلة عن مِلئه */
      let gapAfter = false;
      for (let j = i + 1; j < colors.length - 1; j += 1) {
        if (contrast(colors[j], back) < 1.6) gapAfter = true;
      }
      /* التدرّج الناتج عن حدود/حواف طبيعية يقع بين لوني المِلء والخلفية؛
         حلقة التركيز لون ثالث مستقل. */
      if (between(colors[i], fill, back) && !gapAfter) continue;
      found = true;
      best = Math.max(best, vsBack);
    }
    return found ? {ratio: Number(best.toFixed(2)), ok: true} : {ratio: 0, ok: false};
  };

  const cx = left + width / 2;
  const cy = top + height / 2;
  /* من 6px خارج الحافة إلى 3px داخلها */
  const band = [6, 5, 4, 3, 2, 1, 0, -1, -2, -3].map((d) => d * (scale || 1));
  const edges = [
    scan(band.map((d) => ({x: cx, y: top - d}))),
    scan(band.map((d) => ({x: cx, y: top + height + d}))),
    scan(band.map((d) => ({x: left - d, y: cy}))),
    scan(band.map((d) => ({x: left + width + d, y: cy}))),
  ];
  const visibleEdges = edges.filter((e) => e.ok);
  return {
    visibleEdges: visibleEdges.length,
    ratio: Number(Math.max(...edges.map((e) => e.ratio)).toFixed(2)),
  };
}

/** يُنفَّذ داخل الصفحة: S1–S3 + دوال مساعدة لـS4 */
function measureStatic() {
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
  const ratio = (a, b) => {
    const L1 = lum(a);
    const L2 = lum(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  };
  const over = (fg, bg) => {
    const a = fg.a;
    return {r: fg.r * a + bg.r * (1 - a), g: fg.g * a + bg.g * (1 - a), b: fg.b * a + bg.b * (1 - a), a: 1};
  };
  /** أول خلفية معتمة فعلياً صعوداً من العنصر (خارج العنصر نفسه) */
  const backdropOf = (el) => {
    let n = el.parentElement;
    while (n && n !== document.documentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0.05) return c;
      n = n.parentElement;
    }
    const body = parse(getComputedStyle(document.body).backgroundColor);
    return body && body.a > 0.05 ? body : {r: 255, g: 255, b: 255, a: 1};
  };
  /** لون العنصر الفعلي: خلفيته إن كانت معتمة، وإلا ما تحته */
  const surfaceOf = (el) => {
    const c = parse(getComputedStyle(el).backgroundColor);
    const back = backdropOf(el);
    if (c && c.a > 0.05) return c.a >= 1 ? c : over(c, back);
    return back;
  };
  const visible = (el) => {
    if (el.closest("[aria-hidden='true'], [hidden]")) return false;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden" || Number(cs.opacity) === 0) return false;
    const r = el.getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  };
  const textOf = (el) => (el.textContent || "").replace(/\s+/g, " ").trim();

  /* ═══ S1 — حدود الحقول (1.4.11) ═══
     يُقاس الحدّ مع الخلفية خلفه مباشرة. حقول بلا حدّ ظاهر (border-width:0)
     تُقاس بخلفيتها مقابل ما حولها — إن تساوت فلا شيء يعرّف بالحقل. */
  const fieldIssues = [];
  let fieldCount = 0;
  for (const el of document.querySelectorAll("input:not([type=hidden]),select,textarea")) {
    if (!visible(el) || el.disabled) continue;
    if (["checkbox", "radio", "range", "color"].includes(el.type)) continue;
    fieldCount += 1;
    const cs = getComputedStyle(el);
    const fill = surfaceOf(el);
    const back = backdropOf(el);
    const bw = parseFloat(cs.borderTopWidth) || 0;
    let value;
    let what;
    if (bw > 0 && cs.borderTopStyle !== "none") {
      const bc = parse(cs.borderTopColor);
      if (!bc || bc.a === 0) continue;
      value = ratio(over(bc, fill), fill);
      what = "border";
      /* الحدّ عنصر مرسوم فوق الخلفية: يُقارَن بالخلفية التي يلامسها من الخارج */
      if (value < 3) value = Math.max(value, ratio(over(bc, back), back));
    } else {
      /* حقل بلا حدّ وخلفية شفافة: قد يكون الحدّ الذي يعرّف به على حاويته
         (مثل صندوق إدخال مركّب فيه زر ميكروفون). يُقاس الحاوي، لأنه هو
         الشكل الذي يراه المستخدم — لا يُعاقب المكوّن على تقسيم داخلي. */
      let provider = null;
      let node = el.parentElement;
      for (let depth = 0; node && depth < 3; depth += 1) {
        const ps = getComputedStyle(node);
        const pbw = parseFloat(ps.borderTopWidth) || 0;
        const pbc = parse(ps.borderTopColor);
        if (pbw > 0 && ps.borderTopStyle !== "none" && pbc && pbc.a > 0) {
          provider = {color: pbc, against: backdropOf(node)};
          break;
        }
        const pbg = parse(ps.backgroundColor);
        if (pbg && pbg.a > 0.05) {
          provider = {color: pbg, against: backdropOf(node)};
          break;
        }
        node = node.parentElement;
      }
      const candidateFill = surfaceOf(el);
      if (provider) {
        /* يصلح للحدّ وللخلفية المعتمة على السواء: في الحالتين الحافة المرئية
           هي لون الحاوي مركّباً على ما خلفه. */
        value = ratio(over(provider.color, provider.against), provider.against);
        what = "wrapper";
      } else {
        value = ratio(candidateFill, back);
        what = "fill";
      }
    }
    if (value < 3) {
      fieldIssues.push({
        tag: el.tagName.toLowerCase(),
        type: el.type || "",
        what,
        ratio: Number(value.toFixed(2)),
        color: what === "border" ? cs.borderTopColor : cs.backgroundColor,
      });
    }
  }

  /* ═══ S2 — أيقونات بلا نص (1.4.11) ═══ */
  const iconIssues = [];
  let iconCount = 0;
  for (const el of document.querySelectorAll("a[href], button, [role=button], [role=link]")) {
    if (!visible(el)) continue;
    const name = textOf(el) || el.getAttribute("aria-label") || "";
    const visibleText = [...el.childNodes]
      .filter((n) => n.nodeType === 3 || (n.nodeType === 1 && !n.querySelector("svg") && !/svg/i.test(n.tagName)))
      .map((n) => (n.textContent || "").trim())
      .join("");
    const hasSvg = Boolean(el.querySelector("svg"));
    if (!hasSvg) continue;
    if (visibleText.length > 1) continue;
    if (!name) continue;
    iconCount += 1;
    /* الأيقونة داخل عنصر معطّل/مقفل مستثناة بنص المعيار (inactive component) */
    const cs = getComputedStyle(el);
    if (
      el.getAttribute("aria-disabled") === "true" ||
      el.disabled ||
      cs.pointerEvents === "none" ||
      cs.cursor === "not-allowed"
    )
      continue;
    const svg = el.querySelector("svg");
    const iconColor = parse(getComputedStyle(svg).color) || parse(getComputedStyle(el).color);
    if (!iconColor) continue;
    const back = surfaceOf(el);
    const value = ratio(over(iconColor, back), back);
    if (value < 3) {
      const r = el.getBoundingClientRect();
      iconIssues.push({
        name: name.slice(0, 24),
        ratio: Number(value.toFixed(2)),
        color: getComputedStyle(svg).color,
        rect: {
          left: Math.round(r.left + window.scrollX),
          top: Math.round(r.top + window.scrollY),
          width: Math.round(r.width),
          height: Math.round(r.height),
        },
      });
    }
  }

  /* ═══ S3 — مؤشرات الحالة (1.4.11) ═══ */
  const progressIssues = [];
  let progressCount = 0;
  for (const el of document.querySelectorAll("[role=progressbar], progress")) {
    if (!visible(el)) continue;
    const track = surfaceOf(el);
    const indicator =
      el.querySelector("[data-state], .progress-indicator, ::-webkit-progress-value") || el.firstElementChild;
    if (!indicator) continue;
    progressCount += 1;
    const fill = surfaceOf(indicator);
    const value = ratio(fill, track);
    if (value < 3) {
      progressIssues.push({ratio: Number(value.toFixed(2)), track: getComputedStyle(el).backgroundColor});
    }
  }

  /* ═══ S6أ — قفل الاتجاه في CSS (1.3.4) ═══ */
  let orientationLocks = 0;
  for (const sheet of document.styleSheets) {
    let rules;
    try {
      rules = sheet.cssRules;
    } catch {
      continue;
    }
    for (const rule of rules || []) {
      if (rule.cssText && /orientation\s*:\s*(portrait|landscape)/.test(rule.cssText)) {
        if (/display\s*:\s*none|visibility\s*:\s*hidden/.test(rule.cssText)) orientationLocks += 1;
      }
    }
  }

  return {
    fieldCount,
    fieldIssues,
    iconCount,
    iconIssues,
    progressCount,
    progressIssues,
    orientationLocks,
  };
}

/**
 * يُنفَّذ بعد كل ضغطة Tab: يرجع هندسة العنصر وألوان الحلقة والخلفية والمِلء
 * محسوبةً من CSS. الفحص السريع يستعملها؛ وإن كانت الحلقة غير موجودة أو لونها
 * قريب من الخلفية ننتقل إلى قياس البكسلات المرسومة فعلاً.
 */
function focusProbe() {
  const el = document.activeElement;
  if (!el || el === document.body) return null;
  const cs = getComputedStyle(el);
  const parse = (c) => {
    const m = String(c).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const [r, g, b, a] = m[1].split(",").map(Number);
    return {r, g, b, a: a === undefined ? 1 : a};
  };
  const over = (fg, bg) => {
    const a = fg.a;
    return {r: fg.r * a + bg.r * (1 - a), g: fg.g * a + bg.g * (1 - a), b: fg.b * a + bg.b * (1 - a), a: 1};
  };
  const backdrop = () => {
    let n = el.parentElement;
    while (n && n !== document.documentElement) {
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c && c.a > 0.05) return c.a >= 1 ? c : over(c, {r: 255, g: 255, b: 255, a: 1});
      n = n.parentElement;
    }
    const b = parse(getComputedStyle(document.body).backgroundColor);
    return b && b.a > 0.05 ? b : {r: 255, g: 255, b: 255, a: 1};
  };
  const back = backdrop();
  const ownBg = parse(cs.backgroundColor);
  const fill = ownBg && ownBg.a > 0.05 ? over(ownBg, back) : back;

  /* الحلقة: outline، وإلا آخر طبقة box-shadow ذات امتداد (الطبقة الخارجية هي
     حلقة التركيز في Tailwind؛ الطبقات الداخلية قد تكون offset/ظلاً). */
  let ring = null;
  const ow = parseFloat(cs.outlineWidth) || 0;
  if (ow > 0 && cs.outlineStyle !== "none") {
    const c = parse(cs.outlineColor);
    if (c && c.a > 0.05) ring = c;
  }
  if (!ring && cs.boxShadow && cs.boxShadow !== "none") {
    const layers = [...cs.boxShadow.matchAll(/rgba?\([^)]+\)[^,]*/g)].map((m) => m[0]);
    for (let i = layers.length - 1; i >= 0; i -= 1) {
      const c = parse(layers[i]);
      const spread = Number((layers[i].match(/(\d+)px\s*$/g) || [0])[0]?.replace("px", "") || 0);
      if (c && c.a > 0.05) {
        ring = c;
        break;
      }
    }
  }

  const r = el.getBoundingClientRect();
  return {
    tag: el.tagName.toLowerCase(),
    name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 24),
    hasRing: Boolean(ring),
    ring: ring ? {r: Math.round(ring.r), g: Math.round(ring.g), b: Math.round(ring.b)} : null,
    back: {r: Math.round(back.r), g: Math.round(back.g), b: Math.round(back.b)},
    fill: {r: Math.round(fill.r), g: Math.round(fill.g), b: Math.round(fill.b)},
    rect: {
      left: Math.round(r.left + window.scrollX),
      top: Math.round(r.top + window.scrollY),
      width: Math.round(r.width),
      height: Math.round(r.height),
    },
  };
}

/**
 * تحقّق بكسل لأيقونة: يأخذ اللقطة، ويحسب أكثر لون شيوعاً (الخلفية) وأبعد لون
 * عنها (الأيقونة)، ثم تباينهما. يحلّ حالة الأيقونة البيضاء فوق قرص ملوّن
 * (تُقاس الخلفية الفعلية = القرص، لا خلفية البطاقة).
 */
function iconContrastFromPixels(img, box) {
  const {left, top, width, height} = box;
  const counts = new Map();
  const samples = [];
  for (let y = 4; y < height - 4; y += 2) {
    for (let x = 4; x < width - 4; x += 2) {
      const px = img.pixel(Math.min(img.width - 1, left + x), Math.min(img.height - 1, top + y));
      const key = `${px.r},${px.g},${px.b}`;
      counts.set(key, (counts.get(key) || 0) + 1);
      samples.push(px);
    }
  }
  if (!samples.length) return null;
  const [bgKey] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
  const [r, g, b] = bgKey.split(",").map(Number);
  const bg = {r, g, b};
  let best = 0;
  for (const px of samples) {
    const v = contrast(px, bg);
    if (v > best) best = v;
  }
  return Number(best.toFixed(2));
}

/** حقن الأعطال — كل فحص يُثبت أنه يكشف عيبه */
async function injectFault(page) {
  if (FAULT === "border") {
    await page.evaluate(() => {
      const input = document.createElement("input");
      input.type = "text";
      input.setAttribute("data-fault", "border");
      input.style.cssText =
        "width:220px;height:36px;border:1px solid rgb(211,218,228);background:rgb(248,250,252);color:#111";
      document.querySelector("main")?.appendChild(input);
    });
  }
  if (FAULT === "icon") {
    await page.evaluate(() => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "زر أيقونة باهت");
      btn.setAttribute("data-fault", "icon");
      btn.style.cssText = "color:rgb(211,218,228);background:rgb(248,250,252);padding:4px;border:0";
      btn.innerHTML =
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>';
      document.querySelector("main")?.appendChild(btn);
    });
  }
  if (FAULT === "progress") {
    await page.evaluate(() => {
      const bar = document.createElement("div");
      bar.setAttribute("role", "progressbar");
      bar.setAttribute("aria-valuenow", "40");
      bar.setAttribute("data-fault", "progress");
      bar.style.cssText = "position:relative;width:200px;height:8px;background:rgb(230,230,230)";
      const fill = document.createElement("div");
      fill.style.cssText = "position:absolute;inset:0 auto 0 0;width:40%;background:rgb(235,235,235)";
      bar.appendChild(fill);
      document.querySelector("main")?.appendChild(bar);
    });
  }
  if (FAULT === "ring") {
    await page.evaluate(() => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = "زر بمؤشر خفي";
      btn.setAttribute("data-fault", "ring");
      btn.style.cssText =
        "position:fixed;top:0;left:0;z-index:9999;outline:2px solid rgb(249,250,251);background:rgb(248,250,252);color:#111;padding:8px;border:0";
      document.body.prepend(btn);
    });
  }
  if (FAULT === "tooltip") {
    /* تلميح يظهر عند التحويم ولا يُغلق بـEscape (العيب الذي تقيسه 1.4.13) */
    await page.evaluate(() => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "تلميح محقون");
      btn.setAttribute("data-fault", "tooltip");
      btn.style.cssText =
        "position:fixed;top:0;left:0;z-index:9999;width:44px;height:44px;background:#0057d1;border:0;border-radius:8px;color:#fff";
      btn.innerHTML =
        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>';
      btn.addEventListener("mouseenter", () => {
        let tip = document.getElementById("__tip");
        if (!tip) {
          tip = document.createElement("div");
          tip.setAttribute("role", "tooltip");
          tip.id = "__tip";
          tip.textContent = "تلميح محقون لا يُغلق بـEscape";
          tip.style.cssText =
            "position:fixed;top:56px;left:8px;background:#111;color:#fff;padding:6px 10px;border-radius:6px;z-index:9999";
          document.body.appendChild(tip);
        }
      });
      document.body.prepend(btn);
    });
  }
}

/** S5 — سلوك التلميح على أول مرشّحين: يظهر، يبقى والمؤشر فوقه، يُغلق بـEscape */
async function checkTooltips(page) {
  const candidates = await page.evaluate(() => {
    const out = [];
    for (const el of document.querySelectorAll("button[aria-label], a[aria-label], [data-tooltip-trigger]")) {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      if (r.width === 0 || r.height === 0 || cs.visibility === "hidden") continue;
      const text = (el.textContent || "").trim();
      if (text.length > 2) continue;
      out.push({
        x: Math.round(r.left + r.width / 2 + window.scrollX),
        y: Math.round(r.top + r.height / 2 + window.scrollY),
        name: (el.getAttribute("aria-label") || "").slice(0, 24),
      });
      if (out.length >= 2) break;
    }
    return out;
  });

  const results = [];
  for (const c of candidates) {
    await page.evaluate((y) => window.scrollTo({top: Math.max(0, y - 200), behavior: "instant"}), c.y);
    await new Promise((r) => setTimeout(r, 120));
    const box = await page.evaluate(
      (x, y) => {
        const el = document.elementFromPoint(x, y - window.scrollY);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {x: Math.round(r.left + r.width / 2), y: Math.round(r.top + r.height / 2)};
      },
      c.x,
      c.y,
    );
    if (!box) continue;
    /* ما هو مفتوح قبل التحويم: أي تلميح قديم (من مرشّح سابق أو من حقن عطل)
       لا يُنسب إلى هذا العنصر. */
    const before = await page.evaluate(() =>
      [...document.querySelectorAll("[role=tooltip]")].map((t) => (t.textContent || "").trim()),
    );
    await page.mouse.move(box.x, box.y);
    await new Promise((r) => setTimeout(r, 400));
    const shown = await page.evaluate((prev) => {
      const t = [...document.querySelectorAll("[role=tooltip]")].find(
        (x) => !prev.includes((x.textContent || "").trim()),
      );
      if (!t) return null;
      const r = t.getBoundingClientRect();
      return {
        x: Math.round(r.left + r.width / 2),
        y: Math.round(r.top + r.height / 2),
        text: (t.textContent || "").slice(0, 30),
        key: (t.textContent || "").trim(),
      };
    }, before);
    if (!shown) {
      results.push({name: c.name, shown: false});
      continue;
    }
    /* قابل للتحويم: المؤشر ينتقل داخل التلميح و**هو** يبقى مفتوحاً */
    await page.mouse.move(shown.x, shown.y);
    await new Promise((r) => setTimeout(r, 300));
    const hoverable = await page.evaluate(
      (key) => [...document.querySelectorAll("[role=tooltip]")].some((t) => (t.textContent || "").trim() === key),
      shown.key,
    );
    /* قابل للإخفاء: Escape يُغلق **هذا** التلميح (لا غيره) */
    await page.keyboard.press("Escape");
    await new Promise((r) => setTimeout(r, 250));
    const dismissed = await page.evaluate(
      (key) => ![...document.querySelectorAll("[role=tooltip]")].some((t) => (t.textContent || "").trim() === key),
      shown.key,
    );
    await page.mouse.move(2, 2);
    results.push({name: c.name, shown: true, hoverable, dismissed});
  }
  return results;
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
  /* 2x: حلقة 2px عند 1x تتحلل إلى 3 بكسل بتغطية جزئية فيسقط تباينها المقيس
     دون الحقيقي (قيست 2.4:1 بينما اللون المرسوم 6.6:1). القياس على البكسلات
     المرسومة فعلاً يحتاج كثافة تكفي لفصل لون الحلقة عن التدرّج. */
  await page.setViewport({width: VW, height: VH, deviceScaleFactor: 2});
  await page.emulateMediaFeatures([{name: "prefers-color-scheme", value: THEME}]);
  await page.evaluateOnNewDocument((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, THEME);

  const record = {route, theme: THEME, viewport: `${VW}x${VH}`, issues: []};
  try {
    await page.goto(BASE + route, {waitUntil: "networkidle2", timeout: 45000});
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
    await new Promise((r) => setTimeout(r, 200));

    const isDark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    record.dark = isDark;

    if (FAULT) await injectFault(page);

    const s = await page.evaluate(measureStatic);
    record.fields = s.fieldCount;
    record.icons = s.iconCount;
    record.progress = s.progressCount;

    /* S4 — Tab حقيقي: فحص سريع من CSS، ثم بكسل عند الالتباس */
    await page.evaluate(() => document.body.focus());
    const bad = [];
    let tabs = 0;

    const pixelRing = async (geo, label) => {
      const pad = 7;
      const clip = {
        x: Math.max(0, geo.left - pad),
        y: Math.max(0, geo.top - pad),
        width: geo.width + pad * 2,
        height: geo.height + pad * 2,
      };
      if (clip.width < 12 || clip.height < 12) return null;
      let shot;
      try {
        shot = await page.screenshot({clip, encoding: "binary"});
      } catch {
        return null;
      }
      const img = decodePng(Buffer.from(shot));
      const scale = img.width / Math.max(1, Math.round(clip.width));
      const offX = (geo.left - clip.x) * scale;
      const offY = (geo.top - clip.y) * scale;
      if (offX < 3 * scale || offY < 3 * scale) return null;
      return ringFromPixels(img, {
        left: offX,
        top: offY,
        width: geo.width * scale,
        height: geo.height * scale,
        pad: pad * scale,
        scale,
      });
    };

    for (let i = 0; i < MAX_TABS; i += 1) {
      await page.keyboard.press("Tab");
      /* إطار واحد على الأقل قبل القياس: حلقة :focus-visible تُرسم بعد تطبيق
         الحالة، والقياس الفوري يلتقط ما قبلها في بعض الصفحات. */
      await new Promise((r) => setTimeout(r, 80));
      let p = await page.evaluate(focusProbe);
      if (!p) continue;
      tabs += 1;

      const fastOk = p.hasRing && contrast(p.ring, p.back) >= 3;
      if (fastOk) continue;

      /* مسار البكسل: اللقطة هي الحكم — حلقة بلون الخلفية أو بلا حلقة أصلاً */
      let ring = await pixelRing(p.rect, p.name);
      if (!ring || ring.visibleEdges === 0) {
        /* قد يفقد العنصر :focus لحظياً (حقول التاريخ في Chromium تنتقل بين
           حقولها الداخلية). إعادة تركيز واحدة تفصل العَرَض عن العيب. */
        await page.evaluate(() => {
          const el = document.activeElement;
          if (el instanceof HTMLElement) el.focus({preventScroll: true});
        });
        await new Promise((r) => setTimeout(r, 200));
        p = (await page.evaluate(focusProbe)) || p;
        if (p.hasRing && contrast(p.ring, p.back) >= 3) continue;
        ring = await pixelRing(p.rect, p.name);
      }
      if (ring && ring.visibleEdges > 0) continue;

      bad.push({
        tag: p.tag,
        name: p.name,
        why: p.hasRing ? `حلقة بتباين ${contrast(p.ring, p.back).toFixed(1)}:1` : "بلا مؤشر",
        ring: p.ring,
        back: p.back,
      });
    }
    record.tabs = tabs;

    const tips = await checkTooltips(page);
    record.tooltips = tips;

    /* S2 — تحقّق بكسل للأيقونات التي فشلت الحسبة النظرية فقط */
    const iconBad = [];
    for (const cand of s.iconIssues) {
      const c = cand.rect;
      if (!c || c.width < 8 || c.height < 8) continue;
      const pad = 2;
      const clip = {
        x: Math.max(0, c.left - pad),
        y: Math.max(0, c.top - pad),
        width: c.width + pad * 2,
        height: c.height + pad * 2,
      };
      let shot;
      try {
        shot = await page.screenshot({clip, encoding: "binary"});
      } catch {
        iconBad.push(cand);
        continue;
      }
      const img = decodePng(Buffer.from(shot));
      const scale = img.width / Math.max(1, Math.round(clip.width));
      const measured = iconContrastFromPixels(img, {
        left: (c.left - clip.x) * scale,
        top: (c.top - clip.y) * scale,
        width: c.width * scale,
        height: c.height * scale,
      });
      if (measured !== null && measured >= 3) continue;
      iconBad.push({name: cand.name, ratio: measured ?? cand.ratio, color: cand.color});
    }

    if (s.fieldIssues.length) record.issues.push({code: "S1", items: s.fieldIssues});
    if (iconBad.length) record.issues.push({code: "S2", items: iconBad});
    if (s.progressIssues.length) record.issues.push({code: "S3", items: s.progressIssues});
    if (bad.length) record.issues.push({code: "S4", items: bad});
    const tipBad = tips.filter((t) => t.shown && (!t.hoverable || !t.dismissed));
    if (FAULT === "tooltip" && tips.length === 0) tipBad.push({name: "—", shown: true, hoverable: false, dismissed: false});
    if (tipBad.length) record.issues.push({code: "S5", items: tipBad});
    if (s.orientationLocks) record.issues.push({code: "S6", items: [`${s.orientationLocks} قاعدة تقفل الاتجاه`]});

    if (VERBOSE && record.issues.length) {
      console.log(route, JSON.stringify(record.issues).slice(0, 420));
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
  dark: out.filter((r) => r.dark).length,
  s1: count("S1"),
  s2: count("S2"),
  s3: count("S3"),
  s4: count("S4"),
  s5: count("S5"),
  s6: count("S6"),
  fields: out.reduce((a, r) => a + (r.fields || 0), 0),
  icons: out.reduce((a, r) => a + (r.icons || 0), 0),
  progress: out.reduce((a, r) => a + (r.progress || 0), 0),
  tabs: out.reduce((a, r) => a + (r.tabs || 0), 0),
  tooltips: out.reduce((a, r) => a + (r.tooltips || []).filter((t) => t.shown).length, 0),
};
console.log(
  `THEME ${THEME} VIEWPORT ${VW}x${VH} PAGES ${totals.pages} DARK ${totals.dark} WITH_ISSUES ${totals.withIssues} ERRORS ${totals.errors}` +
    ` | S1 ${totals.s1} S2 ${totals.s2} S3 ${totals.s3} S4 ${totals.s4} S5 ${totals.s5} S6 ${totals.s6}` +
    ` | FIELDS ${totals.fields} ICONS ${totals.icons} PROGRESS ${totals.progress} TABS ${totals.tabs} TOOLTIPS ${totals.tooltips}`,
);
for (const r of withIssues.slice(0, VERBOSE ? 60 : 10)) {
  console.log(" ·", r.route, r.error || JSON.stringify(r.issues).slice(0, 260));
}
