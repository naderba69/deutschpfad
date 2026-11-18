/**
 * audit-residual.mjs — الجولة الخامسة عشرة: ما تبقّى من معايير AA
 * (2.4.2 · 2.5.3 · 3.2.3 · 2.3.1 · 2.1.4 · 2.5.4 · 3.2.1/3.2.2)
 *
 * الجولات 2–14 قاست التباين، التخطيط، التكبير، الحالات المفتوحة، النماذج،
 * الجداول، الوسائط، اللغة، الزمن، الدلالة البنيوية، والتباين غير النصي.
 * بقيت بنود AA لا يقيسها أي سكربت في المستودع:
 *
 *   S1) **عنوان الصفحة** (2.4.2): موجود، واصف، وفريد بين المسارات — التكرار
 *       يجعل لسانَي المتصفح متطابقين ويضيّع موقع الصفحة من مجموعة.
 *   S2) **الاسم المرئي داخل الاسم الميسور** (2.5.3): من يستخدم الإدخال الصوتي
 *       ينطق ما يراه؛ إن لم يكن النص المرئي جزءاً من الاسم الميسور فلا يجد الزر.
 *   S3) **اتساق التنقل** (3.2.3): ترتيب روابط التنقل الرئيسي واحد في كل صفحة.
 *   S4) **الوميض** (2.3.1): لا شيء يومض أكثر من ثلاث مرات في الثانية — يُقاس
 *       من البكسلات المرسومة فعلاً أثناء الحركة.
 *   S5) **اختصارات الحرف الواحد** (2.1.4): لا `accesskey` بحرف واحد بلا مفتاح
 *       تعديل، ولا معالج `keydown` لحرف منفرد.
 *   S6) **تفعيل الحركة** (2.5.4): لا وظيفة تعتمد على `devicemotion`/`deviceorientation`.
 *   S7) **تغيير السياق** (3.2.1 · 3.2.2): التركيز أو تغيير قيمة حقل لا ينقل
 *       المستخدم إلى صفحة أخرى بلا طلب.
 *
 * الاستخدام: node scripts/audit-residual.mjs
 * متغيرات: AUDIT_BASE · AUDIT_OUT · AUDIT_ROUTES · AUDIT_VERBOSE · AUDIT_VIEWPORT
 *          AUDIT_THEME=light|dark · AUDIT_FAULT=title|labelname|nav|flash|accesskey|focus|context
 *          AUDIT_SELFTEST=1 (يحقّق فاحصَي المصدر S5/S6 على عيّنات معطوبة)
 */
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import {createRequire} from "node:module";

const require = createRequire(import.meta.url);
const chromium = require("@sparticuz/chromium").default;
const puppeteer = require("puppeteer-core");

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3000";
const OUT = process.env.AUDIT_OUT || "/tmp/residual.json";
const VERBOSE = Boolean(process.env.AUDIT_VERBOSE);
const FAULT = process.env.AUDIT_FAULT || "";
const THEME = process.env.AUDIT_THEME || "light";
const [VW, VH] = (process.env.AUDIT_VIEWPORT || "1280x900").split("x").map(Number);
const ROOT = path.resolve(new URL("..", import.meta.url).pathname);

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

/* ═════════════════════════ الصور: فك ترميز PNG ثم قياس السطوع ═════════════════════════ */

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
  return {width, height, channels, data: out};
}

/** متوسط السطوع النسبي في صورة (0..1) */
function meanLuminance(img) {
  const {data, channels} = img;
  let sum = 0;
  let n = 0;
  for (let i = 0; i < data.length; i += channels * 4) {
    const r = data[i] / 255;
    const g = data[i + 1] / 255;
    const b = data[i + 2] / 255;
    const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    sum += 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    n += 1;
  }
  return n ? sum / n : 0;
}

/* ═════════════════════════ فحص المصدر: S5 و S6 ═════════════════════════ */

function scanSource(root = path.join(ROOT, "src")) {
  const files = [];
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(tsx?|jsx?)$/.test(entry.name)) files.push(full);
    }
  };
  walk(root);
  const singleKey = [];
  const motion = [];
  const accesskeys = [];
  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const text = fs.readFileSync(file, "utf8");
    /* حرف منفرد يُقارَن به e.key/e.code بلا شرط تعديل في نفس المعالج */
    for (const m of text.matchAll(/\.(?:key|code)\s*===?\s*["'`]([^"'`]{1})["'`]/g)) {
      /* 2.1.4 يخصّ الحروف والأرقام والترقيم والرموز؛ المسافة/Enter/Escape/Tab
         وحدات تحكّم قياسية أو مفاتيح تنشيط، وليست اختصارات حرفية. */
      if (!/[\p{L}\p{N}\p{P}]/u.test(m[1])) continue;
      const line = text.slice(0, m.index).split("\n").length;
      const window = text.slice(Math.max(0, m.index - 400), m.index + 400);
      const guarded = /\.(?:ctrlKey|metaKey|altKey|shiftKey)/.test(window);
      singleKey.push({file: rel, line, key: m[1], guarded});
    }
    for (const m of text.matchAll(/devicemotion|deviceorientation|DeviceMotionEvent|DeviceOrientationEvent/g)) {
      motion.push({file: rel, line: text.slice(0, m.index).split("\n").length, token: m[0]});
    }
    for (const m of text.matchAll(/accessKey\s*=\s*["'{`]?([^"'`}\s]{1,3})/g)) {
      accesskeys.push({file: rel, line: text.slice(0, m.index).split("\n").length, key: m[1]});
    }
  }
  return {files: files.length, singleKey, motion, accesskeys};
}

const SRC = scanSource();

/* ═════════════════════════ القياس داخل الصفحة ═════════════════════════ */

/** S2 — النص المرئي مقابل الاسم الميسور */
function measureLabels() {
  const norm = (s) =>
    String(s || "")
      .replace(/[\u064B-\u0652\u0670\u06D6-\u06ED]/g, "")
      .replace(/[\u200e\u200f\u061c]/g, "")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  const nameOf = (el) => {
    const aria = el.getAttribute("aria-label");
    if (aria && aria.trim()) return aria;
    const by = el.getAttribute("aria-labelledby");
    if (by) {
      return by
        .split(/\s+/)
        .map((id) => document.getElementById(id)?.textContent || "")
        .join(" ")
        .trim();
    }
    return "";
  };
  const out = [];
  const sel = "a[href],button,[role=button],[role=link],[role=tab],[role=radio],[role=checkbox],[role=menuitem]";
  for (const el of document.querySelectorAll(sel)) {
    const name = nameOf(el);
    /* بلا اسم صريح: الاسم الميسور هو النص المرئي نفسه ⇒ لا يمكن أن يخالفه */
    if (!name) continue;
    const rect = el.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) continue;
    const visible = (el.innerText || "").trim();
    /* النص المرئي الرمزي («×»، «＋»، رقم) ليس تسمية منطوقة */
    if (!/[\u0600-\u06FFA-Za-zÄÖÜäöüß]/.test(visible)) continue;
    if (norm(name).includes(norm(visible))) continue;
    out.push({visible: visible.slice(0, 32), name: name.slice(0, 48)});
  }
  return out;
}

/** S3 — تسلسل روابط التنقل الرئيسي */
function measureNav() {
  const nav =
    document.querySelector('header nav[aria-label]') ||
    document.querySelector("header nav") ||
    document.querySelector('nav[aria-label="التنقل الرئيسي"]');
  if (!nav) return null;
  return [...nav.querySelectorAll("a[href]")].map((a) => new URL(a.href).pathname);
}

/** S7أ — التركيز لا يغيّر السياق (3.2.1) */
function focusState() {
  const el = document.activeElement;
  return {
    url: location.href,
    tag: el ? el.tagName.toLowerCase() : "",
    name: ((el && (el.getAttribute("aria-label") || el.innerText)) || "").trim().slice(0, 32),
    isBody: !el || el === document.body,
  };
}

/** S7ب — تغيير قيمة قائمة لا ينقل الصفحة (3.2.2) */
function selectTargets() {
  return [...document.querySelectorAll("select")]
    .filter((s) => {
      const r = s.getBoundingClientRect();
      return r.width > 2 && r.height > 2 && s.options.length > 1 && !s.disabled;
    })
    .map((s, i) => ({i, value: s.value, label: s.getAttribute("aria-label") || s.name || ""}));
}

/** حقن الأعطال — كل فحص يُثبت أنه يكشف عيبه */
async function injectFault(page) {
  await page.evaluate((fault) => {
    const add = (html) => {
      const d = document.createElement("div");
      d.innerHTML = html;
      d.setAttribute("data-audit-fault", "1");
      document.body.appendChild(d);
      return d;
    };
    if (fault === "title") document.title = "درب الألمانية";
    if (fault === "labelname")
      add('<button aria-label="شيء آخر تماماً">زر مرئي باسم مختلف</button>');
    if (fault === "nav") {
      const nav = document.querySelector("header nav");
      if (nav) nav.querySelector("a[href]")?.remove();
    }
    if (fault === "flash") {
      const d = add('<div id="__flash" style="width:80px;height:80px;position:fixed;top:0;left:0"></div>');
      const box = d.firstElementChild;
      box.animate([{backgroundColor: "#000"}, {backgroundColor: "#fff"}], {
        duration: 120,
        iterations: Infinity,
        direction: "alternate",
      });
    }
    if (fault === "accesskey") add('<button accesskey="k">اختصار حرف واحد</button>');
    /* حقن عطل مقصود: النقل هنا هو الشيء الذي نريد أن يكشفه الفحص */
    /* eslint-disable @next/next/no-location-assign-relative-destination */
    if (fault === "focus") {
      const input = document.createElement("input");
      input.setAttribute("aria-label", "حقل ينقل عند التركيز");
      input.addEventListener("focus", () => {
        location.href = "/about";
      });
      document.body.insertBefore(input, document.body.firstChild);
    }
    if (fault === "context") {
      add('<select id="__ctx" aria-label="سياق"><option>A</option><option>B</option></select>');
      const s = document.getElementById("__ctx");
      s.addEventListener("change", () => {
        location.href = "/about";
      });
    }
    /* eslint-enable @next/next/no-location-assign-relative-destination */
  }, FAULT);
}

/* ═════════════════════════ التشغيل ═════════════════════════ */

const ROUTES = await loadRoutes();

/* التحويلات (307) ليست صفحات مستقلة: عنوانها هو عنوان هدفها، فلا تُحتسب
   «عنواناً مكرراً». تُسجَّل صراحةً في الجدول كي لا يبدو التكرار عيباً. */
const REDIRECTS = new Map();
for (const r of ROUTES) {
  try {
    const res = await fetch(BASE + r, {redirect: "manual"});
    if (res.status >= 300 && res.status < 400) REDIRECTS.set(r, res.headers.get("location") || "");
  } catch {
    /* الشبكة تُبلّغ عنه في القياس الفعلي */
  }
}

if (process.env.AUDIT_SELFTEST) {
  /* عيّنة معطوبة تُثبت أن فاحص المصدر يرى ما يجب أن يراه */
  const fixture = fs.mkdtempSync("/tmp/residual-src-");
  fs.writeFileSync(
    path.join(fixture, "broken.tsx"),
    'window.addEventListener("devicemotion", handler);\nconst onKey = (e) => e.key === "k";\n',
  );
  const broken = scanSource(fixture);
  fs.rmSync(fixture, {recursive: true, force: true});
  console.log(
    `SELFTEST fixture: motion ${broken.motion.length} · single-key ${broken.singleKey.filter((k) => !k.guarded).length} (المتوقع 1 و1)`,
  );
  const single = SRC.singleKey.filter((k) => !k.guarded);
  console.log(
    `SELFTEST source files ${SRC.files} | single-key unguarded ${single.length} | motion ${SRC.motion.length} | accesskey ${SRC.accesskeys.length}`,
  );
  for (const k of SRC.singleKey.slice(0, 8)) console.log(" ·", k.file, k.line, JSON.stringify(k.key), k.guarded ? "محروس" : "غير محروس");
  for (const m of SRC.motion.slice(0, 8)) console.log(" ·", m.file, m.line, m.token);
  process.exit(0);
}

const browser = await puppeteer.launch({
  args: [...chromium.args, "--no-sandbox", "--disable-dev-shm-usage"],
  executablePath: await chromium.executablePath(),
  headless: true,
  protocolTimeout: 180000,
});

/* مرجع التنقل: يُقرأ من «/» بلا حقن، فيبقى ثابتاً حتى لو حقنّا عطلاً في المسارات
   المقاسة. 3.2.3 يطلب أن يكون التنقل نفسه في كل صفحة، لا أن تتفق الصفحات
   المعطوبة فيما بينها. */
async function referenceNav() {
  const page = await browser.newPage();
  try {
    await page.goto(BASE + "/", {waitUntil: "networkidle2", timeout: 45000});
    return await page.evaluate(measureNav);
  } catch {
    return null;
  } finally {
    await page.close().catch(() => {});
  }
}
const REF_NAV = await referenceNav();

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
  if (REDIRECTS.has(route)) record.redirect = REDIRECTS.get(route);
  try {
    await page.goto(BASE + route, {waitUntil: "networkidle2", timeout: 45000});
    await page.evaluate(() => document.querySelectorAll("details").forEach((d) => (d.open = true)));
    await new Promise((r) => setTimeout(r, 250));

    record.dark = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    if (FAULT) await injectFault(page);

    /* S1 — العنوان */
    const title = (await page.title()).trim();
    record.title = title;
    if (!title) record.issues.push({code: "S1", items: [{why: "بلا عنوان"}]});

    /* S2 — الاسم المرئي */
    const labels = await page.evaluate(measureLabels);
    record.labelsChecked = await page.evaluate(() => document.querySelectorAll("a[href],button").length);
    if (labels.length) record.issues.push({code: "S2", items: labels});

    /* S3 — اتساق التنقل */
    const nav = await page.evaluate(measureNav);
    record.nav = nav;
    if (!nav || !nav.length) {
      record.issues.push({code: "S3", items: [{why: "لا تنقل رئيسي في هذا المسار"}]});
    } else if (REF_NAV && REF_NAV.length && nav.join(",") !== REF_NAV.join(",")) {
      const missing = REF_NAV.filter((h) => !nav.includes(h));
      const extra = nav.filter((h) => !REF_NAV.includes(h));
      record.issues.push({code: "S3", items: [{why: "تسلسل تنقل مختلف", missing, extra}]});
    }

    /* S4 — الوميض (2.3.1): قياس تحليلي لإطار واحد كل 1/60 ثانية على مدى ثانية،
       ثم تأكيد بالبكسل عند تجاوز العتبة. الحركة الأطول من ثانية لا تستطيع
       إنتاج ثلاث ومضات في الثانية، فلا تُقاس. */
    const flashProbe = await page.evaluate(() => {
      const parse = (c) => {
        const m = String(c).match(/rgba?\(([^)]+)\)/);
        if (!m) return null;
        const [r, g, b, a] = m[1].split(",").map(Number);
        return {r, g, b, a: a === undefined ? 1 : a};
      };
      const backdrop = (el) => {
        let n = el.parentElement;
        while (n && n !== document.documentElement) {
          const c = parse(getComputedStyle(n).backgroundColor);
          if (c && c.a > 0.05) return c;
          n = n.parentElement;
        }
        const body = parse(getComputedStyle(document.body).backgroundColor);
        return body && body.a > 0.05 ? body : {r: 255, g: 255, b: 255, a: 1};
      };
      const lum = (c) => {
        const f = (v) => {
          v /= 255;
          return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        };
        return 0.2126 * f(c.r) + 0.7152 * f(c.g) + 0.0722 * f(c.b);
      };
      const targets = document
        .getAnimations()
        .filter((a) => {
          const t = a.effect?.getTiming?.() || {};
          const d = Number(t.duration) || 0;
          return d > 0 && d < 1000 && a.effect?.target instanceof Element;
        })
        .map((a) => a.effect.target)
        .filter((el, i, arr) => arr.indexOf(el) === i)
        .slice(0, 3);
      if (!targets.length) return Promise.resolve({animated: 0, hits: []});
      return new Promise((resolve) => {
        const series = targets.map(() => []);
        const start = performance.now();
        const tick = () => {
          targets.forEach((el, i) => {
            const cs = getComputedStyle(el);
            const own = parse(cs.backgroundColor) || {r: 0, g: 0, b: 0, a: 0};
            const back = backdrop(el);
            const alpha = own.a * (parseFloat(cs.opacity) || 1);
            series[i].push(
              lum({
                r: own.r * alpha + back.r * (1 - alpha),
                g: own.g * alpha + back.g * (1 - alpha),
                b: own.b * alpha + back.b * (1 - alpha),
              }),
            );
          });
          if (performance.now() - start < 1000) requestAnimationFrame(tick);
          else {
            const hits = targets
              .map((el, i) => {
                const s = series[i];
                let transitions = 0;
                for (let k = 1; k < s.length; k += 1) if (Math.abs(s[k] - s[k - 1]) >= 0.08) transitions += 1;
                const r = el.getBoundingClientRect();
                return {
                  name: (el.className?.toString?.() || el.tagName).slice(0, 24),
                  transitions,
                  rect: {
                    x: Math.round(r.left),
                    y: Math.round(r.top),
                    w: Math.round(r.width),
                    h: Math.round(r.height),
                  },
                };
              })
              .filter((x) => x.transitions >= 4 && x.rect.w >= 8 && x.rect.h >= 8);
            resolve({animated: series.length ? series[0].length : 0, hits});
          }
        };
        requestAnimationFrame(tick);
      });
    });
    record.animations = flashProbe.animated;
    const flashes = [];
    for (const hit of flashProbe.hits) {
      /* تأكيد بالبكسل: ما يُرسم فعلاً لا ما تقوله الخاصية المحسوبة */
      const clip = {
        x: Math.min(Math.max(0, hit.rect.x), Math.max(0, VW - 8)),
        y: Math.min(Math.max(0, hit.rect.y), Math.max(0, VH - 8)),
        width: Math.max(8, Math.min(hit.rect.w, VW - Math.max(0, hit.rect.x))),
        height: Math.max(8, Math.min(hit.rect.h, VH - Math.max(0, hit.rect.y))),
      };
      let pixelTransitions = 0;
      try {
        let prev = null;
        for (let k = 0; k < 10; k += 1) {
          const shot = await page.screenshot({clip, encoding: "binary"});
          const l = meanLuminance(decodePng(Buffer.from(shot)));
          if (prev !== null && Math.abs(l - prev) >= 0.08) pixelTransitions += 1;
          prev = l;
          await new Promise((r) => setTimeout(r, 100));
        }
      } catch {
        pixelTransitions = hit.transitions;
      }
      if (pixelTransitions >= 3) flashes.push({name: hit.name, transitions: pixelTransitions});
    }
    if (flashes.length) record.issues.push({code: "S4", items: flashes});

    /* S5 — accesskey بحرف واحد */
    const keys = await page.evaluate(() =>
      [...document.querySelectorAll("[accesskey]")]
        .map((el) => ({
          key: el.getAttribute("accesskey") || "",
          tag: el.tagName.toLowerCase(),
          name: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 24),
        }))
        .filter((k) => [...k.key].length === 1),
    );
    record.accesskeys = keys.length;
    if (keys.length) record.issues.push({code: "S5", items: keys});

    /* S7أ — Tab لا يغيّر السياق */
    await page.evaluate(() => document.body.focus());
    const focusJumps = [];
    const startUrl = page.url();
    for (let i = 0; i < 15; i += 1) {
      await page.keyboard.press("Tab");
      await new Promise((r) => setTimeout(r, 60));
      const st = await page.evaluate(focusState);
      if (st.url !== startUrl) {
        focusJumps.push({why: `انتقال إلى ${new URL(st.url).pathname}`, at: i + 1});
        break;
      }
    }
    if (focusJumps.length) record.issues.push({code: "S7a", items: focusJumps});

    /* S7ب — تغيير قيمة قائمة لا ينقل الصفحة */
    const selects = await page.evaluate(selectTargets);
    record.selects = selects.length;
    const inputJumps = [];
    for (const s of selects.slice(0, 6)) {
      let moved = null;
      try {
        moved = await page.evaluate(async (idx) => {
        const el = [...document.querySelectorAll("select")].filter((x) => {
          const r = x.getBoundingClientRect();
          return r.width > 2 && r.height > 2 && x.options.length > 1 && !x.disabled;
        })[idx];
        if (!el) return null;
        const before = location.href;
        const original = el.value;
        const next = [...el.options].map((o) => o.value).find((v) => v !== original);
        if (next === undefined) return null;
        el.value = next;
        el.dispatchEvent(new Event("change", {bubbles: true}));
        await new Promise((r) => setTimeout(r, 400));
        const after = location.href;
        if (after !== before) return {from: before, to: after};
        el.value = original;
        el.dispatchEvent(new Event("change", {bubbles: true}));
        return null;
        }, s.i);
      } catch (err) {
        /* Navigated away: the execution context died mid-evaluate — that IS the
           defect 3.2.2 forbids (a select value silently changes the page). */
        if (/Execution context|detached|Target closed|navigat/i.test(String(err))) {
          moved = {to: page.url()};
        } else {
          throw err;
        }
      }
      if (moved) {
        let to = moved.to;
        try {
          to = new URL(moved.to).pathname;
        } catch {
          to = String(moved.to).slice(0, 60);
        }
        inputJumps.push({select: (s.label || "").slice(0, 24) || "select", to});
        break;
      }
    }
    if (inputJumps.length) record.issues.push({code: "S7b", items: inputJumps});

    if (VERBOSE && record.issues.length) {
      console.log(route, JSON.stringify(record.issues).slice(0, 400));
    }
  } catch (err) {
    record.error = String(err.message || err).slice(0, 160);
  }
  out.push(record);
  /* صفحة انتقلت وسط القياس قد تعلق عند الإغلاق؛ لا نُعلّق السكربت عليها */
  await Promise.race([page.close().catch(() => {}), new Promise((r) => setTimeout(r, 4000))]);
}

await browser.close();

/* S1 — التكرار يُحسب بعد جمع كل العناوين */
const byTitle = new Map();
for (const r of out) {
  if (!r.title) continue;
  /* صفحات التحويل تُستبعد كلياً من حساب التكرار: عنوانها عنوان هدفها */
  if (REDIRECTS.has(r.route)) continue;
  byTitle.set(r.title, [...(byTitle.get(r.title) || []), r.route]);
}
for (const [title, routes] of byTitle) {
  if (routes.length < 2) continue;
  for (const r of out) {
    if (r.title !== title) continue;
    /* صفحة تحويل: العنوان لهدفها، لا لها */
    if (REDIRECTS.has(r.route)) continue;
    r.issues.push({code: "S1", items: [{why: "عنوان مكرر", sharedWith: routes.filter((x) => x !== r.route)}]});
  }
}

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
  s7a: count("S7a"),
  s7b: count("S7b"),
  labels: out.reduce((a, r) => a + (r.labelsChecked || 0), 0),
  selects: out.reduce((a, r) => a + (r.selects || 0), 0),
  anims: out.reduce((a, r) => a + (r.animations || 0), 0),
  accesskeys: out.reduce((a, r) => a + (r.accesskeys || 0), 0),
  srcSingleKey: SRC.singleKey.filter((k) => !k.guarded).length,
  srcMotion: SRC.motion.length,
};
console.log(
  `THEME ${THEME} VIEWPORT ${VW}x${VH} PAGES ${totals.pages} DARK ${totals.dark} WITH_ISSUES ${totals.withIssues} ERRORS ${totals.errors}` +
    ` | S1 ${totals.s1} S2 ${totals.s2} S3 ${totals.s3} S4 ${totals.s4} S5 ${totals.s5} S7a ${totals.s7a} S7b ${totals.s7b}` +
    ` | LABELS ${totals.labels} SELECTS ${totals.selects} ANIMS ${totals.anims} ACCESSKEYS ${totals.accesskeys}` +
    ` | SRC single-key ${totals.srcSingleKey} motion ${totals.srcMotion}`,
);
for (const r of withIssues.slice(0, VERBOSE ? 60 : 10)) {
  console.log(" ·", r.route, r.error || JSON.stringify(r.issues).slice(0, 260));
}
